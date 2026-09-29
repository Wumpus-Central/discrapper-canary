r.d(t, { f: () => c });
var n = r(582128),
    a = r(136857),
    l = r(739508),
    i = r(158317),
    s = r(26279);
function c(e) {
    let { order: t, errorSource: r, onSignFailure: c, onError: d } = e,
        [o, u] = (0, n.useState)(null),
        h = (0, n.useCallback)(
            (e) => {
                (u(e), d?.(e));
            },
            [d],
        ),
        _ = (0, n.useCallback)(
            (e, t) => {
                let n = e instanceof a.Ay ? e : new a.Ay(e);
                return (
                    (0, l.gr)(e) || (0, l.pM)(e instanceof Error ? e : n, { tags: { source: r }, extra: t }), h(n), n
                );
            },
            [r, h],
        ),
        C = (0, n.useCallback)(
            async function () {
                let {
                    loadId: e,
                    purchaseToken: r,
                    errorExtra: n,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (null == t) return (h(new a.Ay("Order not created yet")), { type: "failed" });
                u(null);
                try {
                    let n = await (0, i.Ub)({ orderId: t.id, loadId: e, purchaseToken: r });
                    if (n.status !== s.Re.SIGNED) {
                        if (null != n.errors && n.errors.length > 0)
                            throw Error(`Order signing failed with errors: ${n.errors.join(", ")}`);
                        throw Error(`Unexpected order status: ${n.status}`);
                    }
                    return { type: "signed", order: n };
                } catch (e) {
                    if (e instanceof i.FY) return (c?.(e.order), h(e), { type: "failed" });
                    return (_(e, { ...n, orderId: t.id }), { type: "failed" });
                }
            },
            [t, c, _, h],
        );
    return { error: o, signOrder: C, reportError: _ };
}
