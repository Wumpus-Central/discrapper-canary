n.d(t, { _5: () => y, rV: () => _ });
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
    p = n(120700),
    C = n(818348);
let m = new Set([p.C.COLLECTIBLES_CHECKOUT, p.C.SLAYER_STOREFRONT_CHECKOUT]);
var E = n(169797),
    I = n(375708);
let S = r.createContext({ order: null, isOrderCreationEnabled: !1 });
function y() {
    return r.useContext(S);
}
function g(e) {
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
            checkoutFlow: p,
            isGift: E,
            onOrderCreated: y,
            renderModalProps: _,
            children: P,
        } = e,
        {
            order: A,
            isCreateOrderLoading: R,
            createOrderError: M,
            shouldBlockOnOrderCreation: v,
            isOrderCreationEnabled: T,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: l,
                    paymentGateway: i,
                    checkoutFlow: s,
                    isGift: a,
                    loadId: u,
                    onOrderCreated: p,
                } = e,
                E = f.A.useConfig({ location: "payment_modal" }).enabled,
                I = d.useConfig({ location: "payment_modal" }).enabled,
                S = i === C.kM.VIRTUAL_CURRENCY,
                y = null != s && m.has(s);
            t = S ? E : !!y && !0 !== a && I;
            let g = S && E,
                _ = null != n ? n[0] : void 0,
                [P, A] = (0, r.useState)(null),
                [R, M] = (0, r.useState)(null),
                [v, T] = (0, r.useState)(g),
                x = (0, r.useRef)(!1),
                L = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        T(!0);
                        try {
                            let e = null != l && (0, c.Fs)(l),
                                n = await (0, o.fS)({ skuId: t, paymentGateway: i, loadId: u, testMode: e });
                            (A(n), null != p && p(n));
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            ((0, h.gr)(n) ||
                                (0, h.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(i), loadId: u },
                                }),
                                M(e));
                        } finally {
                            T(!1);
                        }
                    },
                    [l, i, u, p],
                );
            return (
                (0, r.useEffect)(() => {
                    t && null != _ && (null != P || null != R || x.current || ((x.current = !0), L({ skuId: _ })));
                }, [_, t, P, L, R]),
                {
                    order: P,
                    isCreateOrderLoading: v,
                    createOrderError: R,
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
            onOrderCreated: y,
        }),
        x = r.useMemo(() => ({ order: A, isOrderCreationEnabled: T }), [A, T]);
    if (v) {
        if (R) return (0, l.jsx)(g, { renderModalProps: _, children: (0, l.jsx)(u.A, {}) });
        else if (null != M)
            return (0, l.jsx)(g, {
                renderModalProps: _,
                children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: I.intl.string(I.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(S.Provider, { value: x, children: P });
}
