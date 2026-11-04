var r = n(582128),
    i = n(139033),
    s = n(192308),
    a = n(626584),
    l = n(856383),
    o = n(794400),
    c = n(792996);
let g = new a.A("RevenueErrorBoundary.tsx");
class u extends r.PureComponent {
    state = { error: null, info: null };
    getSentryTags(t, e) {
        return { app_context: this.getSentryAppContext(), ...(e ? { crashed: "true" } : {}) };
    }
    getSentryExtras(t) {
        return t instanceof o.v && null != t.extraSentryInformation ? { ...t.extraSentryInformation } : {};
    }
    onErrorCaught(t, e, n) {}
    closeAndShowAlert() {
        ((0, s.s7)(),
            (0, i.A)({
                title: c.intl.string(c.t.iufib1),
                subtitle: c.intl.string(c.t.ZUEGFn),
                confirmText: c.intl.string(c.t.TyCVIq),
            }));
    }
    getErrorHandlingBehavior(t) {
        return t instanceof o.v ? t.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(t) {
        return "rethrow" === this.getErrorHandlingBehavior(t);
    }
    emitSentryException(t, e) {
        let n,
            { additionalAnalyticsData: r } = this.props,
            i = this.getCrashedFlag(t),
            s = this.getSentryExtras(t),
            a = {
                tags: this.getSentryTags(t, i),
                extra: { ...s, ...(r ?? {}), ...(null != e ? { reactErrorInfo: e } : {}) },
            };
        return (
            (t instanceof o.v && t.skipReportingToSentry) || (n = l.A.captureException(t, a)),
            g.error("Revenue error occurred:", { error: t, additionalErrorContext: s }),
            { sentryErrorOptions: a, sentryEventId: n }
        );
    }
    componentDidCatch(t, e) {
        let { sentryErrorOptions: n, sentryEventId: r } = this.emitSentryException(t, e);
        if (
            (this.onErrorCaught(t, e, r),
            this.setState({ error: t, info: e }),
            null != this.props.onErrorReported && this.props.onErrorReported(t, e, n),
            "rethrow" === this.getErrorHandlingBehavior(t))
        )
            throw t;
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
n.d(e, {}, { z: u });
