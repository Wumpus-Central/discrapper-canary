"use strict";
n.d(t, { j: () => u });
var r = n(64700),
    i = n(626584),
    s = n(954571),
    a = n(728458),
    o = n(652215);
let l = new i.A("CheckoutErrorBoundary.tsx");
class u extends r.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let {
                loadId: n,
                selectedSkuId: r,
                selectedPlanId: i,
                isGift: u,
                purchaseType: c,
                locationStack: d,
                additionalAnalyticsData: _,
            } = this.props,
            f = this.props.shouldRethrowError,
            p = { loadId: n, selectedSkuId: r, selectedPlanId: i, isGift: u, purchaseType: c, locationStack: d },
            h = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(f ? { crashed: "true" } : {}),
                },
                extra: { ...p, ...(_ ?? {}), ...(t ?? {}) },
            };
        a.A.captureException(e, h), l.error("Checkout error occurred:", { error: e, additionalErrorContext: p });
        let m = "string" == typeof e ? e : e.message;
        if (
            (s.default.track(o.HAw.PAYMENT_FLOW_ERROR, {
                load_id: n,
                crashed: f,
                error_message: m,
                location_stack: d ?? [],
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
