n.d(t, { _5: () => S, rV: () => _ });
var r = n(477900),
    l = n(582128),
    i = n(20742),
    s = n(430993),
    a = n(834730),
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
    p = n(120700),
    m = n(818348);
let C = new Set([p.C.COLLECTIBLES_CHECKOUT, p.C.SLAYER_STOREFRONT_CHECKOUT]);
var E = n(169797),
    y = n(660183);
let I = l.createContext({ order: null, isOrderCreationEnabled: !1 });
function S() {
    return l.useContext(I);
}
function g(e) {
    let { renderModalProps: t, children: n } = e,
        l = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(i.rQ, {}), (0, r.jsx)(s.c, { children: n })] });
    return null != t ? (0, r.jsx)(E.Jg, { ...t, children: l }) : l;
}
function _(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: i,
            paymentGateway: s,
            checkoutFlow: p,
            isGift: E,
            onOrderCreated: S,
            renderModalProps: _,
            children: P,
        } = e,
        {
            order: A,
            isCreateOrderLoading: x,
            createOrderError: v,
            shouldBlockOnOrderCreation: R,
            isOrderCreationEnabled: M,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: r,
                    paymentGateway: i,
                    checkoutFlow: s,
                    isGift: a,
                    loadId: u,
                    onOrderCreated: p,
                } = e,
                E = f.A.useConfig({ location: "payment_modal" }).enabled,
                y = d.useConfig({ location: "payment_modal" }).enabled,
                I = i === m.kM.VIRTUAL_CURRENCY,
                S = null != s && C.has(s);
            t = I ? E : !!S && !0 !== a && y;
            let g = I && E,
                _ = null != n ? n[0] : void 0,
                [P, A] = (0, l.useState)(null),
                [x, v] = (0, l.useState)(null),
                [R, M] = (0, l.useState)(g),
                T = (0, l.useRef)(!1),
                L = (0, l.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        M(!0);
                        try {
                            let e = null != r && (0, c.Fs)(r),
                                n = await (0, o.fS)({ skuId: t, paymentGateway: i, loadId: u, testMode: e });
                            (A(n), null != p && p(n));
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
                    [r, i, u, p],
                );
            return (
                (0, l.useEffect)(() => {
                    t && null != _ && (null != P || null != x || T.current || ((T.current = !0), L({ skuId: _ })));
                }, [_, t, P, L, x]),
                {
                    order: P,
                    isCreateOrderLoading: R,
                    createOrderError: x,
                    shouldBlockOnOrderCreation: g,
                    isOrderCreationEnabled: t,
                }
            );
        })({
            skuIDs: n,
            applicationId: i,
            paymentGateway: s,
            checkoutFlow: p,
            isGift: E,
            loadId: t,
            onOrderCreated: S,
        }),
        T = l.useMemo(() => ({ order: A, isOrderCreationEnabled: M }), [A, M]);
    if (R) {
        if (x) return (0, r.jsx)(g, { renderModalProps: _, children: (0, r.jsx)(u.A, {}) });
        else if (null != v)
            return (0, r.jsx)(g, {
                renderModalProps: _,
                children: (0, r.jsx)(a.E, { variant: "text-md/normal", children: y.intl.string(y.t.F8FvUy) }),
            });
    }
    return (0, r.jsx)(I.Provider, { value: T, children: P });
}
