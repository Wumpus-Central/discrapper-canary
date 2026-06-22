"use strict";
n.d(t, { _5: () => I, rV: () => S });
var i = n(627968),
    r = n(64700),
    s = n(430993),
    a = n(834730),
    o = n(20742),
    l = n(534479),
    u = n(624210);
let c = (0, n(945810).mj)({
    name: "2026-06-otp-orders-phase-1",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var d = n(573582),
    _ = n(211287),
    h = n(739508),
    f = n(120700),
    p = n(818348);
let E = new Set([f.C.COLLECTIBLES_CHECKOUT, f.C.SLAYER_STOREFRONT_CHECKOUT]);
var m = n(169797),
    g = n(375708);
let A = r.createContext(null),
    I = () => r.useContext(A);
function T(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.rQ, {}), (0, i.jsx)(s.c, { children: n })] });
    return null != t ? (0, i.jsx)(m.Jg, { ...t, children: r }) : r;
}
function S(e) {
    let {
            loadId: t,
            skuIDs: n,
            paymentGateway: s,
            checkoutFlow: o,
            isGift: f,
            onOrderCreated: m,
            renderModalProps: I,
            children: S,
        } = e,
        {
            order: y,
            isCreateOrderLoading: C,
            createOrderError: N,
            shouldBlockOnOrderCreation: v,
        } = (function (e) {
            let t,
                { skuIDs: n, paymentGateway: i, checkoutFlow: s, isGift: a, loadId: o, onOrderCreated: l } = e,
                f = d.A.useConfig({ location: "payment_modal" }).enabled,
                m = _.A.useConfig({ location: "payment_modal" }).enabled,
                g = c.useConfig({ location: "payment_modal" }).enabled,
                A = i === p.kM.VIRTUAL_CURRENCY,
                I = null != s && E.has(s);
            t = A ? m : I ? !0 !== a && g : f;
            let T = A && m,
                S = null != n ? n[0] : void 0,
                [y, C] = (0, r.useState)(null),
                [N, v] = (0, r.useState)(null),
                [R, O] = (0, r.useState)(T),
                b = (0, r.useRef)(!1),
                D = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        O(!0);
                        try {
                            let e = await (0, u.fS)({ skuId: t, paymentGateway: i, loadId: o });
                            C(e), null != l && l(e);
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            (0, h.gr)(n) ||
                                (0, h.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(i), loadId: o },
                                }),
                                v(e);
                        } finally {
                            O(!1);
                        }
                    },
                    [i, o, l],
                );
            return (
                (0, r.useEffect)(() => {
                    t && null != S && (null != y || null != N || b.current || ((b.current = !0), D({ skuId: S })));
                }, [S, t, y, D, N]),
                { order: y, isCreateOrderLoading: R, createOrderError: N, shouldBlockOnOrderCreation: T }
            );
        })({ skuIDs: n, paymentGateway: s, checkoutFlow: o, isGift: f, loadId: t, onOrderCreated: m });
    if (v) {
        if (C) return (0, i.jsx)(T, { renderModalProps: I, children: (0, i.jsx)(l.A, {}) });
        else if (null != N)
            return (0, i.jsx)(T, {
                renderModalProps: I,
                children: (0, i.jsx)(a.E, { variant: "text-md/normal", children: g.intl.string(g.t.F8FvUy) }),
            });
    }
    return (0, i.jsx)(A.Provider, { value: y, children: S });
}
