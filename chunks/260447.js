"use strict";
n.d(t, { z: () => d });
var i = n(64700),
    r = n(192308),
    s = n(139033),
    a = n(626584),
    o = n(38405),
    l = n(794400),
    u = n(375708);
let c = new a.A("RevenueErrorBoundary.tsx");
class d extends i.PureComponent {
    state = { error: null, info: null };
    getSentryTags(e, t) {
        return { app_context: this.getSentryAppContext(), ...(t ? { crashed: "true" } : {}) };
    }
    getSentryExtras(e) {
        return e instanceof l.v && null != e.extraSentryInformation ? { ...e.extraSentryInformation } : {};
    }
    onErrorCaught(e, t) {}
    closeAndShowAlert() {
        (0, r.closeAllModals)(),
            (0, s.A)({
                title: u.intl.string(u.t.iufib1),
                subtitle: u.intl.string(u.t.ZUEGFn),
                confirmText: u.intl.string(u.t.TyCVIq),
            });
    }
    getErrorHandlingBehavior(e) {
        return e instanceof l.v ? e.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(e) {
        return "rethrow" === this.getErrorHandlingBehavior(e);
    }
    emitSentryException(e, t) {
        let { additionalAnalyticsData: n } = this.props,
            i = this.getCrashedFlag(e),
            r = this.getSentryExtras(e),
            s = {
                tags: this.getSentryTags(e, i),
                extra: { ...r, ...(n ?? {}), ...(null != t ? { reactErrorInfo: t } : {}) },
            };
        return (
            (e instanceof l.v && e.skipReportingToSentry) || o.A.captureException(e, s),
            c.error("Revenue error occurred:", { error: e, additionalErrorContext: r }),
            { sentryErrorOptions: s }
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
