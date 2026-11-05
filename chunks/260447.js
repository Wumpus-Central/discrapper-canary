var r = n(582128),
    o = n(139033),
    i = n(192308),
    a = n(626584),
    s = n(856383),
    l = n(794400),
    c = n(792996);
let g = new a.A("RevenueErrorBoundary.tsx");
class u extends r.PureComponent {
    state = { error: null, info: null };
    getSentryTags(t, e) {
        return { app_context: this.getSentryAppContext(), ...(e ? { crashed: "true" } : {}) };
    }
    getSentryExtras(t) {
        return t instanceof l.v && null != t.extraSentryInformation ? { ...t.extraSentryInformation } : {};
    }
    onErrorCaught(t, e, n) {}
    closeAndShowAlert() {
        ((0, i.s7)(),
            (0, o.A)({
                title: c.intl.string(c.t.iufib1),
                subtitle: c.intl.string(c.t.ZUEGFn),
                confirmText: c.intl.string(c.t.TyCVIq),
            }));
    }
    getErrorHandlingBehavior(t) {
        return t instanceof l.v ? t.errorHandlingBehavior : this.props.errorHandlingBehavior;
    }
    getCrashedFlag(t) {
        return "rethrow" === this.getErrorHandlingBehavior(t);
    }
    emitSentryException(t, e) {
        let n,
            { additionalAnalyticsData: r } = this.props,
            o = this.getCrashedFlag(t),
            i = this.getSentryExtras(t),
            a = {
                tags: this.getSentryTags(t, o),
                extra: { ...i, ...(r ?? {}), ...(null != e ? { reactErrorInfo: e } : {}) },
            };
        return (
            (t instanceof l.v && t.skipReportingToSentry) || (n = s.A.captureException(t, a)),
            g.error("Revenue error occurred:", { error: t, additionalErrorContext: i }),
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
