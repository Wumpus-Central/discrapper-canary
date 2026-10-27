n.d(t, { _5: () => g, rV: () => S });
var l = n(477900),
    r = n(582128),
    i = n(20742),
    a = n(430993),
    s = n(834730),
    u = n(534479),
    c = n(977445),
    o = n(624210);
let d = (0, n(945810).mj)({
    name: "2026-06-otp-orders-phase-1",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = n(211287),
    h = n(739508),
    m = n(120700),
    p = n(818348);
let C = new Set([m.C.COLLECTIBLES_CHECKOUT, m.C.SLAYER_STOREFRONT_CHECKOUT]);
var E = n(169797),
    y = n(105292);
let _ = r.createContext({ order: null, isOrderCreationEnabled: !1 });
function g() {
    return r.useContext(_);
}
function I(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.rQ, {}), (0, l.jsx)(a.c, { children: n })] });
    return null != t ? (0, l.jsx)(E.Jg, { ...t, children: r }) : r;
}
function S(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: m,
            isGift: E,
            onOrderCreated: g,
            renderModalProps: S,
            children: A,
        } = e,
        {
            order: x,
            isCreateOrderLoading: P,
            createOrderError: v,
            shouldBlockOnOrderCreation: R,
            isOrderCreationEnabled: M,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: l,
                    paymentGateway: i,
                    checkoutFlow: a,
                    isGift: s,
                    loadId: u,
                    onOrderCreated: m,
                } = e,
                E = f.A.useConfig({ location: "payment_modal" }).enabled,
                y = d.useConfig({ location: "payment_modal" }).enabled,
                _ = i === p.kM.VIRTUAL_CURRENCY,
                g = null != a && C.has(a);
            t = _ ? E : !!g && !0 !== s && y;
            let I = _ && E,
                S = null != n ? n[0] : void 0,
                [A, x] = (0, r.useState)(null),
                [P, v] = (0, r.useState)(null),
                [R, M] = (0, r.useState)(I),
                T = (0, r.useRef)(!1),
                L = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        M(!0);
                        try {
                            let e = null != l && (0, c.Fs)(l),
                                n = await (0, o.fS)({ skuId: t, paymentGateway: i, loadId: u, testMode: e });
                            (x(n), null != m && m(n));
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            ((0, h.gr)(n) ||
                                (0, h.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(i), loadId: u },
                                }),
                                v(e));
                        } finally {
                            M(!1);
                        }
                    },
                    [l, i, u, m],
                );
            return (
                (0, r.useEffect)(() => {
                    t && null != S && (null != A || null != P || T.current || ((T.current = !0), L({ skuId: S })));
                }, [S, t, A, L, P]),
                {
                    order: A,
                    isCreateOrderLoading: R,
                    createOrderError: P,
                    shouldBlockOnOrderCreation: I,
                    isOrderCreationEnabled: t,
                }
            );
        })({
            skuIDs: n,
            applicationId: i,
            paymentGateway: a,
            checkoutFlow: m,
            isGift: E,
            loadId: t,
            onOrderCreated: g,
        }),
        T = r.useMemo(() => ({ order: x, isOrderCreationEnabled: M }), [x, M]);
    if (R) {
        if (P) return (0, l.jsx)(I, { renderModalProps: S, children: (0, l.jsx)(u.A, {}) });
        else if (null != v)
            return (0, l.jsx)(I, {
                renderModalProps: S,
                children: (0, l.jsx)(s.E, { variant: "text-md/normal", children: y.intl.string(y.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(_.Provider, { value: T, children: A });
}
