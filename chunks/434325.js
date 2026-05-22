"use strict";
n.d(t, { P: () => I });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(426398),
    u = n(655857),
    c = n(166532),
    d = n(615310),
    _ = n(671744),
    f = n(753390);
let h = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: i,
            eligiblePaymentGateways: s,
            hasFetchedPaymentSources: a,
            paymentSources: o,
        } = e,
        u = (0, _.t4)((e) => e.setPaymentSourceId),
        c = r.useCallback(() => {
            u(
                (0, l._m)({
                    isGift: t,
                    activeSubscription: n,
                    defaultPaymentSourceId: i,
                    eligiblePaymentGateways: s,
                    paymentSources: o,
                }),
            );
        }, [t, n, i, s, u]);
    return (
        r.useEffect(() => {
            a ? c() : (0, f.$o)();
        }, [a, c]),
        null
    );
};
var p = n(83617);
let E = () => {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            checkoutInitParameters: n,
        } = (0, _.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            checkoutInitParameters: e.checkoutInitParameters,
        })),
        i = r.useMemo(() => (0, u._r)(n.skuIds), [n.skuIds]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: a } = (0, u.ow)({
            skuIDs: i,
            paymentSourceId: t,
            isGift: n.isGift,
        }),
        o = JSON.stringify(i),
        l = r.useRef(i);
    return (
        r.useEffect(() => {
            l.current = i;
        }),
        r.useEffect(() => {
            (async () => {
                let { current: i } = l;
                try {
                    i.length > 0 && !n.excludeSubscriptionPlansBySKU && (await (0, p.c_)(t, i));
                } catch (e) {
                    if (e.code !== p.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, o, n.excludeSubscriptionPlansBySKU, e, s, a, n.isGift]),
        null
    );
};
var m = n(679374);
let g = {
    skuIds: [],
    isGift: !1,
    referralTrialOfferId: null,
    activeSubscription: null,
    excludeSubscriptionPlansBySKU: !1,
};
function A() {
    return (
        !(function () {
            let e = (0, d.bB)(),
                { purchaseState: t, setPurchaseState: n } = (0, _.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, c.zT)(e, t, n);
        })(),
        null
    );
}
function I(e) {
    let { checkoutInitParameters: t = g, loadId: n, discoverySessionId: c, children: d } = e,
        f = (0, m._5)(),
        p = (0, a.A)(() => {
            let e = f?.id ?? n ?? (0, s.A)();
            return (
                o.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: c, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: I,
            defaultPaymentSourceId: T,
            eligiblePaymentGateways: S,
            hasFetchedPaymentSources: N,
            paymentSources: y,
        } = (0, l.mz)({ skuId: t.skuIds[0], isGift: t.isGift, activeSubscription: t.activeSubscription }),
        [C] = r.useState(() =>
            (0, _.y$)({
                checkoutInitParameters: t,
                contextMetadata: p,
                order: f,
                initialPaymentSourceId: I,
                initialCurrency: (0, u.el)({
                    activeSubscription: t.activeSubscription,
                    skuIds: t.skuIds,
                    paymentSourceId: I,
                    isGift: t.isGift,
                }),
            }),
        ),
        v = r.useRef(null != f);
    return (
        r.useEffect(() => {
            v.current || null == f || (C.setState({ order: f }), (v.current = !0));
        }, [f, C]),
        r.useEffect(() => {
            C.setState({ checkoutInitParameters: t });
        }, [C, t]),
        (0, i.jsxs)(_.Ni, {
            value: C,
            children: [
                (0, i.jsx)(A, {}),
                (0, i.jsx)(E, {}),
                (0, i.jsx)(h, {
                    isGift: t.isGift,
                    activeSubscription: t.activeSubscription,
                    defaultPaymentSourceId: T,
                    eligiblePaymentGateways: S,
                    hasFetchedPaymentSources: N,
                    paymentSources: y,
                }),
                d,
            ],
        })
    );
}
