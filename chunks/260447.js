t.d(n, { z: () => d });
var r = t(582128),
    l = t(192308),
    i = t(139033),
    s = t(626584),
    o = t(38405),
    a = t(794400),
    u = t(375708);
let c = new s.A("RevenueErrorBoundary.tsx");
class d extends r.PureComponent {
    state = { error: null, info: null };
    getSentryTags(e, n) {
        return { app_context: this.getSentryAppContext(), ...(n ? { crashed: "true" } : {}) };
    }
    getSentryExtras(e) {
        return e instanceof a.v && null != e.extraSentryInformation ? { ...e.extraSentryInformation } : {};
    }
    onErrorCaught(e, n, t) {}
    closeAndShowAlert() {
        ((0, l.closeAllModals)(),
            (0, i.A)({
                title: u.intl.string(u.t.iufib1),
                subtitle: u.intl.string(u.t.ZUEGFn),
                confirmText: u.intl.string(u.t.TyCVIq),
            }));
    }
    getErrorHandlingBehavior(e) {
        return e instanceof a.v ? e.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(e) {
        return "rethrow" === this.getErrorHandlingBehavior(e);
    }
    emitSentryException(e, n) {
        let t,
            { additionalAnalyticsData: r } = this.props,
            l = this.getCrashedFlag(e),
            i = this.getSentryExtras(e),
            s = {
                tags: this.getSentryTags(e, l),
                extra: { ...i, ...(r ?? {}), ...(null != n ? { reactErrorInfo: n } : {}) },
            };
        return (
            (e instanceof a.v && e.skipReportingToSentry) || (t = o.A.captureException(e, s)),
            c.error("Revenue error occurred:", { error: e, additionalErrorContext: i }),
            { sentryErrorOptions: s, sentryEventId: t }
        );
    }
    componentDidCatch(e, n) {
        let { sentryErrorOptions: t, sentryEventId: r } = this.emitSentryException(e, n);
        if (
            (this.onErrorCaught(e, n, r),
            this.setState({ error: e, info: n }),
            null != this.props.onErrorReported && this.props.onErrorReported(e, n, t),
            "rethrow" === this.getErrorHandlingBehavior(e))
        )
            throw e;
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
