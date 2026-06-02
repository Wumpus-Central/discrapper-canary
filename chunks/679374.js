r.d(t, { _5: () => y, rV: () => E });
var n = r(627968),
    a = r(64700),
    l = r(430993),
    i = r(834730),
    u = r(20742),
    s = r(534479),
    o = r(211287),
    c = r(739508),
    d = r(624210),
    p = r(573582),
    f = r(818348),
    _ = r(480642),
    m = r(375708);
let h = a.createContext(null),
    y = () => a.useContext(h);
function I(e) {
    let { renderModalProps: t, children: r } = e,
        a = (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(u.rQ, {}), (0, n.jsx)(l.c, { children: r })] });
    return null != t ? (0, n.jsx)(_.Jg, { ...t, children: a }) : a;
}
function E(e) {
    let { loadId: t, skuIDs: r, paymentGateway: l, onOrderCreated: u, renderModalProps: _, children: y } = e,
        {
            order: E,
            isCreateOrderLoading: S,
            createOrderError: v,
            shouldBlockOnOrderCreation: C,
        } = (function (e) {
            let { skuIDs: t, paymentGateway: r, loadId: n, onOrderCreated: l } = e,
                i = p.A.useConfig({ location: "payment_modal" }).enabled,
                u = o.A.useConfig({ location: "payment_modal" }).enabled,
                s = r === f.kM.VIRTUAL_CURRENCY,
                _ = s ? u : i,
                m = s && u,
                h = t?.[0],
                [y, I] = (0, a.useState)(null),
                [E, S] = (0, a.useState)(null),
                [v, C] = (0, a.useState)(m),
                w = (0, a.useRef)(!1),
                x = (0, a.useCallback)(
                    async (e) => {
                        let { skuId: t } = e;
                        C(!0);
                        try {
                            let e = await (0, d.fS)({ skuId: t, paymentGateway: r, loadId: n });
                            I(e), null != l && l(e);
                        } catch (a) {
                            let e = a instanceof Error ? a : Error(String(a));
                            (0, c.gr)(a) ||
                                (0, c.pM)(e, {
                                    tags: { source: "create_order" },
                                    extra: { skuId: t, paymentGateway: String(r), loadId: n },
                                }),
                                S(e);
                        } finally {
                            C(!1);
                        }
                    },
                    [r, n, l],
                );
            return (
                (0, a.useEffect)(() => {
                    _ && null != h && (null != y || null != E || w.current || ((w.current = !0), x({ skuId: h })));
                }, [h, _, y, x, E]),
                { order: y, isCreateOrderLoading: v, createOrderError: E, shouldBlockOnOrderCreation: m }
            );
        })({ skuIDs: r, paymentGateway: l, loadId: t, onOrderCreated: u });
    if (C) {
        if (S) return (0, n.jsx)(I, { renderModalProps: _, children: (0, n.jsx)(s.A, {}) });
        else if (null != v)
            return (0, n.jsx)(I, {
                renderModalProps: _,
                children: (0, n.jsx)(i.E, { variant: "text-md/normal", children: m.intl.string(m.t.F8FvUy) }),
            });
    }
    return (0, n.jsx)(h.Provider, { value: E, children: y });
}
