n.d(t, { i: () => o });
var l = n(64700),
    i = n(211287),
    r = n(739508),
    s = n(624210),
    a = n(573582),
    u = n(818348);
function o(e) {
    let { skuIDs: t, paymentGateway: n, loadId: o, onOrderCreated: c } = e,
        d = a.A.useConfig({ location: "payment_modal" }).enabled,
        S = i.A.useConfig({ location: "payment_modal" }).enabled,
        E = n === u.kM.VIRTUAL_CURRENCY,
        f = E ? S : d,
        A = E && S,
        h = t?.[0],
        [_, C] = (0, l.useState)(null),
        [g, p] = (0, l.useState)(null),
        [m, y] = (0, l.useState)(A),
        I = (0, l.useRef)(!1),
        N = (0, l.useCallback)(
            async (e) => {
                let { skuId: t } = e;
                y(!0);
                try {
                    let e = await (0, s.fS)({ skuId: t, paymentGateway: n, loadId: o });
                    C(e), null != c && c(e);
                } catch (l) {
                    let e = l instanceof Error ? l : Error(String(l));
                    (0, r.gr)(l) ||
                        (0, r.pM)(e, {
                            tags: { source: "create_order" },
                            extra: { skuId: t, paymentGateway: String(n), loadId: o },
                        }),
                        p(e);
                } finally {
                    y(!1);
                }
            },
            [n, o, c],
        );
    return (
        (0, l.useEffect)(() => {
            f && null != h && (null != _ || null != g || I.current || ((I.current = !0), N({ skuId: h })));
        }, [h, f, _, N, g]),
        { order: _, isCreateOrderLoading: m, createOrderError: g, shouldBlockOnOrderCreation: A }
    );
}
