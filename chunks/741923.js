n.d(t, { _5: () => y, rV: () => I });
var l = n(477900),
    i = n(582128),
    r = n(430993),
    a = n(834730),
    s = n(20742),
    o = n(534479),
    u = n(977445),
    c = n(624210);
let d = (0, n(945810).mj)({
    name: "2026-06-otp-orders-phase-1",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var p = n(211287),
    m = n(739508),
    C = n(120700),
    h = n(818348);
let E = new Set([C.C.COLLECTIBLES_CHECKOUT, C.C.SLAYER_STOREFRONT_CHECKOUT]);
var f = n(480642),
    A = n(375708);
let S = i.createContext(null);
function y() {
    return i.useContext(S);
}
function P(e) {
    let { renderModalProps: t, children: n } = e,
        i = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(s.rQ, {}), (0, l.jsx)(r.c, { children: n })] });
    return null != t ? (0, l.jsx)(f.Jg, { ...t, children: i }) : i;
}
function I(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: r,
            paymentGateway: s,
            checkoutFlow: C,
            isGift: f,
            onOrderCreated: y,
            renderModalProps: I,
            children: _,
        } = e,
        {
            order: T,
            isCreateOrderLoading: g,
            createOrderError: v,
            shouldBlockOnOrderCreation: x,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: l,
                    paymentGateway: r,
                    checkoutFlow: a,
                    isGift: s,
                    loadId: o,
                    onOrderCreated: C,
                } = e,
                f = p.A.useConfig({ location: "payment_modal" }).enabled,
                A = d.useConfig({ location: "payment_modal" }).enabled,
                S = r === h.kM.VIRTUAL_CURRENCY,
                y = null != a && E.has(a);
            t = S ? f : !!y && !0 !== s && A;
            let P = S && f,
                I = null != n ? n[0] : void 0,
                [_, T] = (0, i.useState)(null),
                [g, v] = (0, i.useState)(null),
                [x, N] = (0, i.useState)(P),
                R = (0, i.useRef)(!1),
                b = (0, i.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        N(!0);
                        try {
                            let e = null != l && (0, u.Fs)(l),
                                n = await (0, c.fS)({ skuId: t, paymentGateway: r, loadId: o, testMode: e });
                            T(n), null != C && C(n);
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            (0, m.gr)(n) ||
                                (0, m.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(r), loadId: o },
                                }),
                                v(e);
                        } finally {
                            N(!1);
                        }
                    },
                    [l, r, o, C],
                );
            return (
                (0, i.useEffect)(() => {
                    t && null != I && (null != _ || null != g || R.current || ((R.current = !0), b({ skuId: I })));
                }, [I, t, _, b, g]),
                { order: _, isCreateOrderLoading: x, createOrderError: g, shouldBlockOnOrderCreation: P }
            );
        })({
            skuIDs: n,
            applicationId: r,
            paymentGateway: s,
            checkoutFlow: C,
            isGift: f,
            loadId: t,
            onOrderCreated: y,
        });
    if (x) {
        if (g) return (0, l.jsx)(P, { renderModalProps: I, children: (0, l.jsx)(o.A, {}) });
        else if (null != v)
            return (0, l.jsx)(P, {
                renderModalProps: I,
                children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: A.intl.string(A.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(S.Provider, { value: T, children: _ });
}
