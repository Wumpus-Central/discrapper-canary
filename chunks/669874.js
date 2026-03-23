"use strict";
n.d(t, { j: () => o });
var r = n(64700),
    i = n(626584),
    s = n(728458);
let a = new i.A("CheckoutErrorBoundary.tsx");
class o extends r.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let { loadId: n, selectedSkuId: r, selectedPlanId: i, isGift: o, purchaseType: l } = this.props,
            u = {
                tags: { app_context: "billing", checkout_error: "true", billing_context: "checkout" },
                extra: { loadId: n, selectedSkuId: r, selectedPlanId: i, isGift: o, purchaseType: l },
            };
        if (
            (s.A.captureException(e, u),
            a.error("Error caught by CheckoutErrorBoundary:", { error: e, sentryErrorContext: u }),
            this.setState({ error: e, info: t }),
            null != this.props.onUnhandledError && this.props.onUnhandledError(e, t, u),
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
