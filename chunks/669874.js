n.d(t, { j: () => u });
var o = n(64700),
    r = n(626584),
    i = n(954571),
    a = n(38405),
    l = n(652215);
let s = new r.A("CheckoutErrorBoundary.tsx");
class u extends o.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let {
                loadId: n,
                selectedSkuId: o,
                selectedPlanId: r,
                isGift: u,
                purchaseType: _,
                locationStack: d,
                additionalAnalyticsData: C,
            } = this.props,
            E = this.props.shouldRethrowError,
            p = { loadId: n, selectedSkuId: o, selectedPlanId: r, isGift: u, purchaseType: _, locationStack: d },
            h = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(E ? { crashed: "true" } : {}),
                },
                extra: { ...p, ...(C ?? {}), ...(t ?? {}) },
            };
        a.A.captureException(e, h), s.error("Checkout error occurred:", { error: e, additionalErrorContext: p });
        let c = "string" == typeof e ? e : e.message;
        if (
            (i.default.track(l.HAw.PAYMENT_FLOW_ERROR, {
                load_id: n,
                crashed: E,
                error_message: c,
                location_stack: d ?? [],
                ...C,
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
