n.d(t, { z: () => d });
var l = n(582128),
    r = n(192308),
    i = n(139033),
    o = n(626584),
    u = n(38405),
    s = n(794400),
    a = n(375708);
let c = new o.A("RevenueErrorBoundary.tsx");
class d extends l.PureComponent {
    state = { error: null, info: null };
    getSentryTags(e, t) {
        return { app_context: this.getSentryAppContext(), ...(t ? { crashed: "true" } : {}) };
    }
    getSentryExtras(e) {
        return e instanceof s.v && null != e.extraSentryInformation ? { ...e.extraSentryInformation } : {};
    }
    onErrorCaught(e, t, n) {}
    closeAndShowAlert() {
        (0, r.closeAllModals)(),
            (0, i.A)({
                title: a.intl.string(a.t.iufib1),
                subtitle: a.intl.string(a.t.ZUEGFn),
                confirmText: a.intl.string(a.t.TyCVIq),
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
            { additionalAnalyticsData: l } = this.props,
            r = this.getCrashedFlag(e),
            i = this.getSentryExtras(e),
            o = {
                tags: this.getSentryTags(e, r),
                extra: { ...i, ...(l ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            (e instanceof s.v && e.skipReportingToSentry) || (n = u.A.captureException(e, o)),
            c.error("Revenue error occurred:", { error: e, additionalErrorContext: i }),
            { sentryErrorOptions: o, sentryEventId: n }
        );
    }
    componentDidCatch(e, t) {
        let { sentryErrorOptions: n, sentryEventId: l } = this.emitSentryException(e, t);
        if (
            (this.onErrorCaught(e, t, l),
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
