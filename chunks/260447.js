n.d(t, { z: () => d });
var r = n(582128),
    l = n(192308),
    i = n(139033),
    o = n(626584),
    a = n(38405),
    s = n(794400),
    u = n(375708);
let c = new o.A("RevenueErrorBoundary.tsx");
class d extends r.PureComponent {
    state = { error: null, info: null };
    getSentryTags(e, t) {
        return { app_context: this.getSentryAppContext(), ...(t ? { crashed: "true" } : {}) };
    }
    getSentryExtras(e) {
        return e instanceof s.v && null != e.extraSentryInformation ? { ...e.extraSentryInformation } : {};
    }
    onErrorCaught(e, t, n) {}
    closeAndShowAlert() {
        (0, l.closeAllModals)(),
            (0, i.A)({
                title: u.intl.string(u.t.iufib1),
                subtitle: u.intl.string(u.t.ZUEGFn),
                confirmText: u.intl.string(u.t.TyCVIq),
            });
    }
    getErrorHandlingBehavior(e) {
        return e instanceof s.v ? e.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(e) {
        return "rethrow" === this.getErrorHandlingBehavior(e);
    }
    emitSentryException(e, t) {
        let n,
            { additionalAnalyticsData: r } = this.props,
            l = this.getCrashedFlag(e),
            i = this.getSentryExtras(e),
            o = {
                tags: this.getSentryTags(e, l),
                extra: { ...i, ...(r ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            (e instanceof s.v && e.skipReportingToSentry) || (n = a.A.captureException(e, o)),
            c.error("Revenue error occurred:", { error: e, additionalErrorContext: i }),
            { sentryErrorOptions: o, sentryEventId: n }
        );
    }
    componentDidCatch(e, t) {
        let { sentryErrorOptions: n, sentryEventId: r } = this.emitSentryException(e, t);
        if (
            (this.onErrorCaught(e, t, r),
            this.setState({ error: e, info: t }),
            null != this.props.onErrorReported && this.props.onErrorReported(e, t, n),
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
