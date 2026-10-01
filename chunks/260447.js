t.d(e, { z: () => h });
var n = t(582128),
    o = t(139033),
    s = t(192308),
    a = t(626584),
    i = t(38405),
    l = t(794400),
    c = t(375708);
let u = new a.A("RevenueErrorBoundary.tsx");
class h extends n.PureComponent {
    state = { error: null, info: null };
    getSentryTags(r, e) {
        return { app_context: this.getSentryAppContext(), ...(e ? { crashed: "true" } : {}) };
    }
    getSentryExtras(r) {
        return r instanceof l.v && null != r.extraSentryInformation ? { ...r.extraSentryInformation } : {};
    }
    onErrorCaught(r, e, t) {}
    closeAndShowAlert() {
        ((0, s.closeAllModals)(),
            (0, o.A)({
                title: c.intl.string(c.t.iufib1),
                subtitle: c.intl.string(c.t.ZUEGFn),
                confirmText: c.intl.string(c.t.TyCVIq),
            }));
    }
    getErrorHandlingBehavior(r) {
        return r instanceof l.v ? r.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(r) {
        return "rethrow" === this.getErrorHandlingBehavior(r);
    }
    emitSentryException(r, e) {
        let t,
            { additionalAnalyticsData: n } = this.props,
            o = this.getCrashedFlag(r),
            s = this.getSentryExtras(r),
            a = {
                tags: this.getSentryTags(r, o),
                extra: { ...s, ...(n ?? {}), ...(null != e ? { reactErrorInfo: e } : {}) },
            };
        return (
            (r instanceof l.v && r.skipReportingToSentry) || (t = i.A.captureException(r, a)),
            u.error("Revenue error occurred:", { error: r, additionalErrorContext: s }),
            { sentryErrorOptions: a, sentryEventId: t }
        );
    }
    componentDidCatch(r, e) {
        let { sentryErrorOptions: t, sentryEventId: n } = this.emitSentryException(r, e);
        if (
            (this.onErrorCaught(r, e, n),
            this.setState({ error: r, info: e }),
            null != this.props.onErrorReported && this.props.onErrorReported(r, e, t),
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
