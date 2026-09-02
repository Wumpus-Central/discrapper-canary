n.d(t, { z: () => d });
var r = n(582128),
    l = n(192308),
    i = n(139033),
    s = n(626584),
    u = n(38405),
    o = n(794400),
    a = n(375708);
let c = new s.A("RevenueErrorBoundary.tsx");
class d extends r.PureComponent {
    state = { error: null, info: null };
    getSentryTags(e, t) {
        return { app_context: this.getSentryAppContext(), ...(t ? { crashed: "true" } : {}) };
    }
    getSentryExtras(e) {
        return e instanceof o.v && null != e.extraSentryInformation ? { ...e.extraSentryInformation } : {};
    }
    onErrorCaught(e, t, n) {}
    closeAndShowAlert() {
        (0, l.closeAllModals)(),
            (0, i.A)({
                title: a.intl.string(a.t.iufib1),
                subtitle: a.intl.string(a.t.ZUEGFn),
                confirmText: a.intl.string(a.t.TyCVIq),
            });
    }
    getErrorHandlingBehavior(e) {
        return e instanceof o.v ? e.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(e) {
        return "rethrow" === this.getErrorHandlingBehavior(e);
    }
    emitSentryException(e, t) {
        let n,
            { additionalAnalyticsData: r } = this.props,
            l = this.getCrashedFlag(e),
            i = this.getSentryExtras(e),
            s = {
                tags: this.getSentryTags(e, l),
                extra: { ...i, ...(r ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            (e instanceof o.v && e.skipReportingToSentry) || (n = u.A.captureException(e, s)),
            c.error("Revenue error occurred:", { error: e, additionalErrorContext: i }),
            { sentryErrorOptions: s, sentryEventId: n }
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
