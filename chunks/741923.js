n.d(t, { _5: () => g, rV: () => _ });
var l = n(477900),
    r = n(582128),
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
    m = n(120700),
    p = n(818348);
let C = new Set([m.C.COLLECTIBLES_CHECKOUT, m.C.SLAYER_STOREFRONT_CHECKOUT]);
var E = n(169797),
    y = n(105292);
let I = r.createContext({ order: null, isOrderCreationEnabled: !1 });
function g() {
    return r.useContext(I);
}
function S(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(i.rQ, {}), (0, l.jsx)(s.c, { children: n })] });
    return null != t ? (0, l.jsx)(E.Jg, { ...t, children: r }) : r;
}
function _(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: i,
            paymentGateway: s,
            checkoutFlow: m,
            isGift: E,
            onOrderCreated: g,
            renderModalProps: _,
            children: x,
        } = e,
        {
            order: P,
            isCreateOrderLoading: A,
            createOrderError: v,
            shouldBlockOnOrderCreation: R,
            isOrderCreationEnabled: M,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: l,
                    paymentGateway: i,
                    checkoutFlow: s,
                    isGift: a,
                    loadId: u,
                    onOrderCreated: m,
                } = e,
                E = f.A.useConfig({ location: "payment_modal" }).enabled,
                y = d.useConfig({ location: "payment_modal" }).enabled,
                I = i === p.kM.VIRTUAL_CURRENCY,
                g = null != s && C.has(s);
            t = I ? E : !!g && !0 !== a && y;
            let S = I && E,
                _ = null != n ? n[0] : void 0,
                [x, P] = (0, r.useState)(null),
                [A, v] = (0, r.useState)(null),
                [R, M] = (0, r.useState)(S),
                T = (0, r.useRef)(!1),
                L = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        M(!0);
                        try {
                            let e = null != l && (0, c.Fs)(l),
                                n = await (0, o.fS)({ skuId: t, paymentGateway: i, loadId: u, testMode: e });
                            (P(n), null != m && m(n));
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
                    t && null != _ && (null != x || null != A || T.current || ((T.current = !0), L({ skuId: _ })));
                }, [_, t, x, L, A]),
                {
                    order: x,
                    isCreateOrderLoading: R,
                    createOrderError: A,
                    shouldBlockOnOrderCreation: S,
                    isOrderCreationEnabled: t,
                }
            );
        })({
            skuIDs: n,
            applicationId: i,
            paymentGateway: s,
            checkoutFlow: m,
            isGift: E,
            loadId: t,
            onOrderCreated: g,
        }),
        T = r.useMemo(() => ({ order: P, isOrderCreationEnabled: M }), [P, M]);
    if (R) {
        if (A) return (0, l.jsx)(S, { renderModalProps: _, children: (0, l.jsx)(u.A, {}) });
        else if (null != v)
            return (0, l.jsx)(S, {
                renderModalProps: _,
                children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: y.intl.string(y.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(I.Provider, { value: T, children: x });
}
