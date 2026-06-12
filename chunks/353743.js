n.d(t, { i: () => o });
var l = n(64700),
    i = n(211287),
    r = n(739508),
    a = n(624210),
    s = n(573582),
    u = n(818348);
function o(e) {
    let { skuIDs: t, paymentGateway: n, loadId: o, onOrderCreated: c } = e,
        d = s.A.useConfig({ location: "payment_modal" }).enabled,
        E = i.A.useConfig({ location: "payment_modal" }).enabled,
        f = n === u.kM.VIRTUAL_CURRENCY,
        A = f ? E : d,
        h = f && E,
        p = t?.[0],
        [S, g] = (0, l.useState)(null),
        [m, C] = (0, l.useState)(null),
        [y, _] = (0, l.useState)(h),
        b = (0, l.useRef)(!1),
        v = (0, l.useCallback)(
            async (e) => {
                let { skuId: t } = e;
                _(!0);
                try {
                    let e = await (0, a.fS)({ skuId: t, paymentGateway: n, loadId: o });
                    g(e), null != c && c(e);
                } catch (l) {
                    let e = l instanceof Error ? l : Error(String(l));
                    (0, r.gr)(l) ||
                        (0, r.pM)(e, {
                            tags: { source: "create_order" },
                            extra: { skuId: t, paymentGateway: String(n), loadId: o },
                        }),
                        C(e);
                } finally {
                    _(!1);
                }
            },
            [n, o, c],
        );
    return (
        (0, l.useEffect)(() => {
            A && null != p && (null != S || null != m || b.current || ((b.current = !0), v({ skuId: p })));
        }, [p, A, S, v, m]),
        { order: S, isCreateOrderLoading: y, createOrderError: m, shouldBlockOnOrderCreation: h }
    );
}
