"use strict";
n.d(t, { _5: () => m, rV: () => A });
var i = n(627968),
    r = n(64700),
    s = n(430993),
    a = n(834730),
    o = n(20742),
    l = n(534479),
    u = n(211287),
    c = n(739508),
    d = n(624210),
    _ = n(573582),
    h = n(818348),
    f = n(480642),
    p = n(375708);
let E = r.createContext(null),
    m = () => r.useContext(E);
function g(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.rQ, {}), (0, i.jsx)(s.c, { children: n })] });
    return null != t ? (0, i.jsx)(f.Jg, { ...t, children: r }) : r;
}
function A(e) {
    let { loadId: t, skuIDs: n, paymentGateway: s, onOrderCreated: o, renderModalProps: f, children: m } = e,
        {
            order: A,
            isCreateOrderLoading: I,
            createOrderError: T,
            shouldBlockOnOrderCreation: S,
        } = (function (e) {
            let { skuIDs: t, paymentGateway: n, loadId: i, onOrderCreated: s } = e,
                a = _.A.useConfig({ location: "payment_modal" }).enabled,
                o = u.A.useConfig({ location: "payment_modal" }).enabled,
                l = n === h.kM.VIRTUAL_CURRENCY,
                f = l ? o : a,
                p = l && o,
                E = t?.[0],
                [m, g] = (0, r.useState)(null),
                [A, I] = (0, r.useState)(null),
                [T, S] = (0, r.useState)(p),
                y = (0, r.useRef)(!1),
                N = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        S(!0);
                        try {
                            let e = await (0, d.fS)({ skuId: t, paymentGateway: n, loadId: i });
                            g(e), null != s && s(e);
                        } catch (r) {
                            let e = r instanceof Error ? r : Error(String(r));
                            (0, c.gr)(r) ||
                                (0, c.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(n), loadId: i },
                                }),
                                I(e);
                        } finally {
                            S(!1);
                        }
                    },
                    [n, i, s],
                );
            return (
                (0, r.useEffect)(() => {
                    f && null != E && (null != m || null != A || y.current || ((y.current = !0), N({ skuId: E })));
                }, [E, f, m, N, A]),
                { order: m, isCreateOrderLoading: T, createOrderError: A, shouldBlockOnOrderCreation: p }
            );
        })({ skuIDs: n, paymentGateway: s, loadId: t, onOrderCreated: o });
    if (S) {
        if (I) return (0, i.jsx)(g, { renderModalProps: f, children: (0, i.jsx)(l.A, {}) });
        else if (null != T)
            return (0, i.jsx)(g, {
                renderModalProps: f,
                children: (0, i.jsx)(a.E, { variant: "text-md/normal", children: p.intl.string(p.t.F8FvUy) }),
            });
    }
    return (0, i.jsx)(E.Provider, { value: A, children: m });
}
