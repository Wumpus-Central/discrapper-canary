"use strict";
n.d(t, { _5: () => S, rV: () => C });
var i = n(627968),
    r = n(64700),
    s = n(430993),
    a = n(834730),
    o = n(20742),
    l = n(534479),
    u = n(977445),
    c = n(624210),
    d = n(945810);
let _ = (0, d.mj)({
        name: "2026-06-otp-orders-phase-1",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    h = (0, d.mj)({
        name: "2026-03-orders-dual-write",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var f = n(211287),
    p = n(739508),
    E = n(120700),
    m = n(818348);
let g = new Set([E.C.COLLECTIBLES_CHECKOUT, E.C.SLAYER_STOREFRONT_CHECKOUT]);
var A = n(480642),
    I = n(375708);
let T = r.createContext(null);
function S() {
    return r.useContext(T);
}
function y(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.rQ, {}), (0, i.jsx)(s.c, { children: n })] });
    return null != t ? (0, i.jsx)(A.Jg, { ...t, children: r }) : r;
}
function C(e) {
    let {
            loadId: t,
            skuIDs: n,
            applicationId: s,
            paymentGateway: o,
            checkoutFlow: d,
            isGift: E,
            onOrderCreated: A,
            renderModalProps: S,
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
                    onOrderCreated: d,
                } = e,
                E = h.useConfig({ location: "payment_modal" }).enabled,
                A = f.A.useConfig({ location: "payment_modal" }).enabled,
                I = _.useConfig({ location: "payment_modal" }).enabled,
                T = s === m.kM.VIRTUAL_CURRENCY,
                S = null != a && g.has(a);
            t = T ? A : S ? !0 !== o && I : E;
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
                            v(n), null != d && d(n);
                        } catch (n) {
                            let e = n instanceof Error ? n : Error(String(n));
                            (0, p.gr)(n) ||
                                (0, p.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(s), loadId: l },
                                }),
                                O(e);
                        } finally {
                            D(!1);
                        }
                    },
                    [i, s, l, d],
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
            checkoutFlow: d,
            isGift: E,
            loadId: t,
            onOrderCreated: A,
        });
    if (O) {
        if (v) return (0, i.jsx)(y, { renderModalProps: S, children: (0, i.jsx)(l.A, {}) });
        else if (null != R)
            return (0, i.jsx)(y, {
                renderModalProps: S,
                children: (0, i.jsx)(a.E, { variant: "text-md/normal", children: I.intl.string(I.t.F8FvUy) }),
            });
    }
    return (0, i.jsx)(T.Provider, { value: N, children: C });
}
