"use strict";
n.d(t, { _5: () => T, rV: () => y });
var i = n(627968),
    r = n(64700),
    s = n(430993),
    a = n(834730),
    o = n(20742),
    l = n(534479),
    u = n(977445),
    c = n(624210);
let d = (0, n(945810).mj)({
    name: "2026-06-otp-orders-phase-1",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = n(573582),
    h = n(211287),
    f = n(739508),
    p = n(120700),
    E = n(818348);
let m = new Set([p.C.COLLECTIBLES_CHECKOUT, p.C.SLAYER_STOREFRONT_CHECKOUT]);
var g = n(169797),
    A = n(375708);
let I = r.createContext(null);
function T() {
    return r.useContext(I);
}
function S(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.rQ, {}), (0, i.jsx)(s.c, { children: n })] });
    return null != t ? (0, i.jsx)(g.Jg, { ...t, children: r }) : r;
}
function y(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: s,
            paymentGateway: o,
            checkoutFlow: p,
            isGift: g,
            onOrderCreated: T,
            renderModalProps: y,
            children: C,
        } = e,
        {
            order: N,
            isCreateOrderLoading: v,
            createOrderError: R,
            shouldBlockOnOrderCreation: O,
        } = (function (e) {
            let t,
                {
                    skuIDs: n,
                    applicationId: i,
                    paymentGateway: s,
                    checkoutFlow: a,
                    isGift: o,
                    loadId: l,
                    onOrderCreated: p,
                } = e,
                g = _.A.useConfig({ location: "payment_modal" }).enabled,
                A = h.A.useConfig({ location: "payment_modal" }).enabled,
                I = d.useConfig({ location: "payment_modal" }).enabled,
                T = s === E.kM.VIRTUAL_CURRENCY,
                S = null != a && m.has(a);
            t = T ? A : S ? !0 !== o && I : g;
            let y = T && A,
                C = null != n ? n[0] : void 0,
                [N, v] = (0, r.useState)(null),
                [R, O] = (0, r.useState)(null),
                [b, D] = (0, r.useState)(y),
                L = (0, r.useRef)(!1),
                w = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        D(!0);
                        try {
                            let e = null != i && (0, u.Fs)(i),
                                n = await (0, c.fS)({ skuId: t, paymentGateway: s, loadId: l, testMode: e });
                            v(n), null != p && p(n);
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            (0, f.gr)(n) ||
                                (0, f.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(s), loadId: l },
                                }),
                                O(e);
                        } finally {
                            D(!1);
                        }
                    },
                    [i, s, l, p],
                );
            return (
                (0, r.useEffect)(() => {
                    t && null != C && (null != N || null != R || L.current || ((L.current = !0), w({ skuId: C })));
                }, [C, t, N, w, R]),
                { order: N, isCreateOrderLoading: b, createOrderError: R, shouldBlockOnOrderCreation: y }
            );
        })({
            skuIDs: n,
            applicationId: s,
            paymentGateway: o,
            checkoutFlow: p,
            isGift: g,
            loadId: t,
            onOrderCreated: T,
        });
    if (O) {
        if (v) return (0, i.jsx)(S, { renderModalProps: y, children: (0, i.jsx)(l.A, {}) });
        else if (null != R)
            return (0, i.jsx)(S, {
                renderModalProps: y,
                children: (0, i.jsx)(a.E, { variant: "text-md/normal", children: A.intl.string(A.t.F8FvUy) }),
            });
    }
    return (0, i.jsx)(I.Provider, { value: N, children: C });
}
