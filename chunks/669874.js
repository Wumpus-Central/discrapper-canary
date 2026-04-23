n.d(t, { j: () => d });
var r = n(64700),
    a = n(626584),
    i = n(954571),
    o = n(38405),
    l = n(652215);
let s = new a.A("CheckoutErrorBoundary.tsx");
class d extends r.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let {
                loadId: n,
                selectedSkuId: r,
                selectedPlanId: a,
                isGift: d,
                purchaseType: u,
                locationStack: c,
                additionalAnalyticsData: _,
            } = this.props,
            p = this.props.shouldRethrowError,
            C = { loadId: n, selectedSkuId: r, selectedPlanId: a, isGift: d, purchaseType: u, locationStack: c },
            h = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(p ? { crashed: "true" } : {}),
                },
                extra: { ...C, ...(_ ?? {}), ...(t ?? {}) },
            };
        o.A.captureException(e, h), s.error("Checkout error occurred:", { error: e, additionalErrorContext: C });
        let E = "string" == typeof e ? e : e.message;
        if (
            (i.default.track(l.HAw.PAYMENT_FLOW_ERROR, {
                load_id: n,
                crashed: p,
                error_message: E,
                location_stack: c ?? [],
                ..._,
            }),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError && this.props.onUnhandledError(e, t, h),
            this.props.shouldRethrowError)
        )
            throw e;
    }
    render() {
        return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
                ? this.props.renderCustomErrorComponent(this.state.error, this.state.info)
                : null
            : this.props.children;
    }
}
