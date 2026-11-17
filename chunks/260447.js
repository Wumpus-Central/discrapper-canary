var n = e(582128),
    o = e(139033),
    s = e(192308),
    i = e(626584),
    a = e(856383),
    h = e(794400),
    l = e(792996);
let u = new i.A("RevenueErrorBoundary.tsx");
class p extends n.PureComponent {
    state = { error: null, info: null };
    getSentryTags(r, t) {
        return { app_context: this.getSentryAppContext(), ...(t ? { crashed: "true" } : {}) };
    }
    getSentryExtras(r) {
        return r instanceof h.v && null != r.extraSentryInformation ? { ...r.extraSentryInformation } : {};
    }
    onErrorCaught(r, t, e) {}
    closeAndShowAlert() {
        ((0, s.s7)(),
            (0, o.A)({
                title: l.intl.string(l.t.iufib1),
                subtitle: l.intl.string(l.t.ZUEGFn),
                confirmText: l.intl.string(l.t.TyCVIq),
            }));
    }
    getErrorHandlingBehavior(r) {
        return r instanceof h.v ? r.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(r) {
        return "rethrow" === this.getErrorHandlingBehavior(r);
    }
    emitSentryException(r, t) {
        let e,
            { additionalAnalyticsData: n } = this.props,
            o = this.getCrashedFlag(r),
            s = this.getSentryExtras(r),
            i = {
                tags: this.getSentryTags(r, o),
                extra: { ...s, ...(n ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            (r instanceof h.v && r.skipReportingToSentry) || (e = a.A.captureException(r, i)),
            u.error("Revenue error occurred:", { error: r, additionalErrorContext: s }),
            { sentryErrorOptions: i, sentryEventId: e }
        );
    }
    componentDidCatch(r, t) {
        let { sentryErrorOptions: e, sentryEventId: n } = this.emitSentryException(r, t);
        if (
            (this.onErrorCaught(r, t, n),
            this.setState({ error: r, info: t }),
            null != this.props.onErrorReported && this.props.onErrorReported(r, t, e),
            "rethrow" === this.getErrorHandlingBehavior(r))
        )
            throw r;
        this.closeAndShowAlert();
    }
    render() {
        return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
                ? this.props.renderCustomErrorComponent(this.state.error, this.state.info)
                : null
            : this.props.children;
    }
}
e.d(t, {}, { z: p });
