n.d(t, { z: () => d });
var r = n(582128),
    l = n(192308),
    i = n(139033),
    o = n(626584),
    u = n(38405),
    s = n(794400),
    a = n(375708);
let c = new o.A("RevenueErrorBoundary.tsx");
class d extends r.PureComponent {
    state = { error: null, info: null };
    getSentryTags(e, t) {
        return { app_context: this.getSentryAppContext(), ...(t ? { crashed: "true" } : {}) };
    }
    getSentryExtras(e) {
        return e instanceof s.v && null != e.extraSentryInformation ? { ...e.extraSentryInformation } : {};
    }
    onErrorCaught(e, t) {}
    closeAndShowAlert() {
        (0, l.closeAllModals)(),
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
        let { additionalAnalyticsData: n } = this.props,
            r = this.getCrashedFlag(e),
            l = this.getSentryExtras(e),
            i = {
                tags: this.getSentryTags(e, r),
                extra: { ...l, ...(n ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            (e instanceof s.v && e.skipReportingToSentry) || u.A.captureException(e, i),
            c.error("Revenue error occurred:", { error: e, additionalErrorContext: l }),
            { sentryErrorOptions: i }
        );
    }
    componentDidCatch(e, t) {
        let { sentryErrorOptions: n } = this.emitSentryException(e, t);
        if (
            (this.onErrorCaught(e, t),
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
