n.d(t, { _5: () => I, rV: () => P });
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
var m = n(211287),
    p = n(739508),
    C = n(120700),
    h = n(818348);
let f = new Set([C.C.COLLECTIBLES_CHECKOUT, C.C.SLAYER_STOREFRONT_CHECKOUT]);
var E = n(480642),
    S = n(375708);
let y = i.createContext(null);
function I() {
    return i.useContext(y);
}
function A(e) {
    let { renderModalProps: t, children: n } = e,
        i = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(s.rQ, {}), (0, l.jsx)(r.c, { children: n })] });
    return null != t ? (0, l.jsx)(E.Jg, { ...t, children: i }) : i;
}
function P(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: r,
            paymentGateway: s,
            checkoutFlow: C,
            isGift: E,
            onOrderCreated: I,
            renderModalProps: P,
            children: g,
        } = e,
        {
            order: v,
            isCreateOrderLoading: _,
            createOrderError: x,
            shouldBlockOnOrderCreation: T,
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
                E = m.A.useConfig({ location: "payment_modal" }).enabled,
                S = d.useConfig({ location: "payment_modal" }).enabled,
                y = r === h.kM.VIRTUAL_CURRENCY,
                I = null != a && f.has(a);
            t = y ? E : !!I && !0 !== s && S;
            let A = y && E,
                P = null != n ? n[0] : void 0,
                [g, v] = (0, i.useState)(null),
                [_, x] = (0, i.useState)(null),
                [T, N] = (0, i.useState)(A),
                b = (0, i.useRef)(!1),
                j = (0, i.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        N(!0);
                        try {
                            let e = null != l && (0, u.Fs)(l),
                                n = await (0, c.fS)({ skuId: t, paymentGateway: r, loadId: o, testMode: e });
                            v(n), null != C && C(n);
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            (0, p.gr)(n) ||
                                (0, p.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(r), loadId: o },
                                }),
                                x(e);
                        } finally {
                            N(!1);
                        }
                    },
                    [l, r, o, C],
                );
            return (
                (0, i.useEffect)(() => {
                    t && null != P && (null != g || null != _ || b.current || ((b.current = !0), j({ skuId: P })));
                }, [P, t, g, j, _]),
                { order: g, isCreateOrderLoading: T, createOrderError: _, shouldBlockOnOrderCreation: A }
            );
        })({
            skuIDs: n,
            applicationId: r,
            paymentGateway: s,
            checkoutFlow: C,
            isGift: E,
            loadId: t,
            onOrderCreated: I,
        });
    if (T) {
        if (_) return (0, l.jsx)(A, { renderModalProps: P, children: (0, l.jsx)(o.A, {}) });
        else if (null != x)
            return (0, l.jsx)(A, {
                renderModalProps: P,
                children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: S.intl.string(S.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(y.Provider, { value: v, children: g });
}
