n.d(t, { _5: () => S, rV: () => I });
var l = n(627968),
    i = n(64700),
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
let E = new Set([h.C.COLLECTIBLES_CHECKOUT, h.C.SLAYER_STOREFRONT_CHECKOUT]);
var f = n(480642),
    A = n(375708);
let y = i.createContext(null);
function S() {
    return i.useContext(y);
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
            checkoutFlow: h,
            isGift: f,
            onOrderCreated: S,
            renderModalProps: I,
            children: _,
        } = e,
        {
            order: T,
            isCreateOrderLoading: g,
            createOrderError: x,
            shouldBlockOnOrderCreation: v,
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
                f = p.A.useConfig({ location: "payment_modal" }).enabled,
                A = d.useConfig({ location: "payment_modal" }).enabled,
                y = r === C.kM.VIRTUAL_CURRENCY,
                S = null != a && E.has(a);
            t = y ? f : !!S && !0 !== s && A;
            let P = y && f,
                I = null != n ? n[0] : void 0,
                [_, T] = (0, i.useState)(null),
                [g, x] = (0, i.useState)(null),
                [v, N] = (0, i.useState)(P),
                R = (0, i.useRef)(!1),
                M = (0, i.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        N(!0);
                        try {
                            let e = null != l && (0, u.Fs)(l),
                                n = await (0, c.fS)({ skuId: t, paymentGateway: r, loadId: o, testMode: e });
                            T(n), null != h && h(n);
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            (0, m.gr)(n) ||
                                (0, m.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(r), loadId: o },
                                }),
                                x(e);
                        } finally {
                            N(!1);
                        }
                    },
                    [l, r, o, h],
                );
            return (
                (0, i.useEffect)(() => {
                    t && null != I && (null != _ || null != g || R.current || ((R.current = !0), M({ skuId: I })));
                }, [I, t, _, M, g]),
                { order: _, isCreateOrderLoading: v, createOrderError: g, shouldBlockOnOrderCreation: P }
            );
        })({
            skuIDs: n,
            applicationId: r,
            paymentGateway: s,
            checkoutFlow: h,
            isGift: f,
            loadId: t,
            onOrderCreated: S,
        });
    if (v) {
        if (g) return (0, l.jsx)(P, { renderModalProps: I, children: (0, l.jsx)(o.A, {}) });
        else if (null != x)
            return (0, l.jsx)(P, {
                renderModalProps: I,
                children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: A.intl.string(A.t.F8FvUy) }),
            });
    }
    return (0, l.jsx)(y.Provider, { value: T, children: _ });
}
