r.d(n, { z: () => d });
var t = r(582128),
    l = r(192308),
    i = r(139033),
    s = r(626584),
    o = r(38405),
    a = r(794400),
    c = r(375708);
let u = new s.A("RevenueErrorBoundary.tsx");
class d extends t.PureComponent {
    state = { error: null, info: null };
    getSentryTags(e, n) {
        return { app_context: this.getSentryAppContext(), ...(n ? { crashed: "true" } : {}) };
    }
    getSentryExtras(e) {
        return e instanceof a.v && null != e.extraSentryInformation ? { ...e.extraSentryInformation } : {};
    }
    onErrorCaught(e, n, r) {}
    closeAndShowAlert() {
        ((0, l.closeAllModals)(),
            (0, i.A)({
                title: c.intl.string(c.t.iufib1),
                subtitle: c.intl.string(c.t.ZUEGFn),
                confirmText: c.intl.string(c.t.TyCVIq),
            }));
    }
    getErrorHandlingBehavior(e) {
        return e instanceof a.v ? e.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(e) {
        return "rethrow" === this.getErrorHandlingBehavior(e);
    }
    emitSentryException(e, n) {
        let r,
            { additionalAnalyticsData: t } = this.props,
            l = this.getCrashedFlag(e),
            i = this.getSentryExtras(e),
            s = {
                tags: this.getSentryTags(e, l),
                extra: { ...i, ...(t ?? {}), ...(null != n ? { reactErrorInfo: n } : {}) },
            };
        return (
            (e instanceof a.v && e.skipReportingToSentry) || (r = o.A.captureException(e, s)),
            u.error("Revenue error occurred:", { error: e, additionalErrorContext: i }),
            { sentryErrorOptions: s, sentryEventId: r }
        );
    }
    componentDidCatch(e, n) {
        let { sentryErrorOptions: r, sentryEventId: t } = this.emitSentryException(e, n);
        if (
            (this.onErrorCaught(e, n, t),
            this.setState({ error: e, info: n }),
            null != this.props.onErrorReported && this.props.onErrorReported(e, n, r),
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
