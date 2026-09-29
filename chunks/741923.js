n.d(t, { _5: () => y, rV: () => A });
var l = n(477900),
    i = n(582128),
    r = n(20742),
    a = n(430993),
    s = n(834730),
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
    h = n(120700),
    C = n(818348);
let f = new Set([h.C.COLLECTIBLES_CHECKOUT, h.C.SLAYER_STOREFRONT_CHECKOUT]);
var E = n(169797),
    S = n(375708);
let I = i.createContext({ order: null, isOrderCreationEnabled: !1 });
function y() {
    return i.useContext(I);
}
function g(e) {
    let { renderModalProps: t, children: n } = e,
        i = (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(r.rQ, {}), (0, l.jsx)(a.c, { children: n })] });
    return null != t ? (0, l.jsx)(E.Jg, { ...t, children: i }) : i;
}
function A(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: r,
            paymentGateway: a,
            checkoutFlow: h,
            isGift: E,
            onOrderCreated: y,
            renderModalProps: A,
            children: P,
        } = e,
        {
            order: v,
            isCreateOrderLoading: x,
            createOrderError: _,
            shouldBlockOnOrderCreation: T,
            isOrderCreationEnabled: N,
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
                E = m.A.useConfig({ location: "payment_modal" }).enabled,
                S = d.useConfig({ location: "payment_modal" }).enabled,
                I = r === C.kM.VIRTUAL_CURRENCY,
                y = null != a && f.has(a);
            t = I ? E : !!y && !0 !== s && S;
            let g = I && E,
                A = null != n ? n[0] : void 0,
                [P, v] = (0, i.useState)(null),
                [x, _] = (0, i.useState)(null),
                [T, N] = (0, i.useState)(g),
                b = (0, i.useRef)(!1),
                j = (0, i.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        N(!0);
                        try {
                            let e = null != l && (0, u.Fs)(l),
                                n = await (0, c.fS)({ skuId: t, paymentGateway: r, loadId: o, testMode: e });
                            (v(n), null != h && h(n));
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            ((0, p.gr)(n) ||
                                (0, p.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(r), loadId: o },
                                }),
                                _(e));
                        } finally {
                            N(!1);
                        }
                    },
                    [l, r, o, h],
                );
            return (
                (0, i.useEffect)(() => {
                    t && null != A && (null != P || null != x || b.current || ((b.current = !0), j({ skuId: A })));
                }, [A, t, P, j, x]),
                {
                    order: P,
                    isCreateOrderLoading: T,
                    createOrderError: x,
                    shouldBlockOnOrderCreation: g,
                    isOrderCreationEnabled: t,
                }
            );
        })({
            skuIDs: n,
            applicationId: r,
            paymentGateway: a,
            checkoutFlow: h,
            isGift: E,
            loadId: t,
            onOrderCreated: y,
        }),
        b = i.useMemo(() => ({ order: v, isOrderCreationEnabled: N }), [v, N]);
    if (T) {
        if (x) return (0, l.jsx)(g, { renderModalProps: A, children: (0, l.jsx)(o.A, {}) });
        else if (null != _)
            return (0, l.jsx)(g, {
                renderModalProps: A,
                children: (0, l.jsx)(s.E, { variant: "text-md/normal", children: S.intl.string(S.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(I.Provider, { value: b, children: P });
}
