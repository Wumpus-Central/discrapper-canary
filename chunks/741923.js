n.d(t, { _5: () => A, rV: () => I });
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
    h = n(120700),
    C = n(818348);
let f = new Set([h.C.COLLECTIBLES_CHECKOUT, h.C.SLAYER_STOREFRONT_CHECKOUT]);
var E = n(480642),
    S = n(375708);
let y = i.createContext(null);
function A() {
    return i.useContext(y);
}
function P(e) {
    let { renderModalProps: t, children: n } = e,
        i = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(s.rQ, {}), (0, l.jsx)(r.c, { children: n })] });
    return null != t ? (0, l.jsx)(E.Jg, { ...t, children: i }) : i;
}
function I(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: r,
            paymentGateway: s,
            checkoutFlow: h,
            isGift: E,
            onOrderCreated: A,
            renderModalProps: I,
            children: g,
        } = e,
        {
            order: v,
            isCreateOrderLoading: _,
            createOrderError: T,
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
                    onOrderCreated: h,
                } = e,
                E = p.A.useConfig({ location: "payment_modal" }).enabled,
                S = d.useConfig({ location: "payment_modal" }).enabled,
                y = r === C.kM.VIRTUAL_CURRENCY,
                A = null != a && f.has(a);
            t = y ? E : !!A && !0 !== s && S;
            let P = y && E,
                I = null != n ? n[0] : void 0,
                [g, v] = (0, i.useState)(null),
                [_, T] = (0, i.useState)(null),
                [x, N] = (0, i.useState)(P),
                b = (0, i.useRef)(!1),
                R = (0, i.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        N(!0);
                        try {
                            let e = null != l && (0, u.Fs)(l),
                                n = await (0, c.fS)({ skuId: t, paymentGateway: r, loadId: o, testMode: e });
                            v(n), null != h && h(n);
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            (0, m.gr)(n) ||
                                (0, m.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(r), loadId: o },
                                }),
                                T(e);
                        } finally {
                            N(!1);
                        }
                    },
                    [l, r, o, h],
                );
            return (
                (0, i.useEffect)(() => {
                    t && null != I && (null != g || null != _ || b.current || ((b.current = !0), R({ skuId: I })));
                }, [I, t, g, R, _]),
                { order: g, isCreateOrderLoading: x, createOrderError: _, shouldBlockOnOrderCreation: P }
            );
        })({
            skuIDs: n,
            applicationId: r,
            paymentGateway: s,
            checkoutFlow: h,
            isGift: E,
            loadId: t,
            onOrderCreated: A,
        });
    if (x) {
        if (_) return (0, l.jsx)(P, { renderModalProps: I, children: (0, l.jsx)(o.A, {}) });
        else if (null != T)
            return (0, l.jsx)(P, {
                renderModalProps: I,
                children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: S.intl.string(S.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(y.Provider, { value: v, children: g });
}
