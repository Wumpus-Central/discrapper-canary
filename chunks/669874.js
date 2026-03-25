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
                additionalAnalyticsData: d,
            } = this.props,
            _ = this.props.shouldRethrowError,
            f = { loadId: n, selectedSkuId: r, selectedPlanId: i, isGift: u, purchaseType: c },
            p = {
                tags: {
                    app_context: "billing",
                    checkout_error: "true",
                    billing_context: "checkout",
                    ...(_ ? { crashed: "true" } : {}),
                },
                extra: { ...f, ...(t ?? {}) },
            };
        if (
            (a.A.captureException(e, p),
            l.error("Checkout error occurred:", { error: e, additionalErrorContext: f }),
            s.default.track(o.HAw.PAYMENT_FLOW_ERROR, { load_id: n, crashed: _, error_message: e.message, ...d }),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError && this.props.onUnhandledError(e, t, p),
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
