"use strict";
n.d(t, { _5: () => E, rV: () => g });
var i = n(627968),
    r = n(64700),
    s = n(430993),
    a = n(834730),
    o = n(20742),
    l = n(534479),
    u = n(211287),
    c = n(624210),
    d = n(573582),
    _ = n(818348),
    h = n(480642),
    f = n(375708);
let p = r.createContext(null),
    E = () => r.useContext(p);
function m(e) {
    let { renderModalProps: t, children: n } = e,
        r = (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.rQ, {}), (0, i.jsx)(s.c, { children: n })] });
    return null != t ? (0, i.jsx)(h.Jg, { ...t, children: r }) : r;
}
function g(e) {
    let { loadId: t, skuIDs: n, paymentGateway: s, onOrderCreated: o, renderModalProps: h, children: E } = e,
        {
            order: g,
            isCreateOrderLoading: A,
            createOrderError: I,
            shouldBlockOnOrderCreation: T,
        } = (function (e) {
            let { skuIDs: t, paymentGateway: n, loadId: i, onOrderCreated: s } = e,
                a = d.A.useConfig({ location: "payment_modal" }).enabled,
                o = u.A.useConfig({ location: "payment_modal" }).enabled,
                l = n === _.kM.VIRTUAL_CURRENCY,
                h = l ? o : a,
                f = l && o,
                p = t?.[0],
                [E, m] = (0, r.useState)(null),
                [g, A] = (0, r.useState)(null),
                [I, T] = (0, r.useState)(f),
                S = (0, r.useRef)(!1),
                y = (0, r.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        T(!0);
                        try {
                            let e = await (0, c.fS)({ skuId: t, paymentGateway: n, loadId: i });
                            m(e), null != s && s(e);
                        } catch (e) {
                            A(e instanceof Error ? e : Error(String(e)));
                        } finally {
                            T(!1);
                        }
                    },
                    [n, i, s],
                );
            return (
                (0, r.useEffect)(() => {
                    h && null != p && (null != E || null != g || S.current || ((S.current = !0), y({ skuId: p })));
                }, [p, h, E, y, g]),
                { order: E, isCreateOrderLoading: I, createOrderError: g, shouldBlockOnOrderCreation: f }
            );
        })({ skuIDs: n, paymentGateway: s, loadId: t, onOrderCreated: o });
    if (T) {
        if (A) return (0, i.jsx)(m, { renderModalProps: h, children: (0, i.jsx)(l.A, {}) });
        else if (null != I)
            return (0, i.jsx)(m, {
                renderModalProps: h,
                children: (0, i.jsx)(a.E, { variant: "text-md/normal", children: f.intl.string(f.t.F8FvUy) }),
            });
    }
    return (0, i.jsx)(p.Provider, { value: g, children: E });
}
