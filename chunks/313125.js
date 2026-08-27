t.d(r, { f: () => u });
var n = t(582128),
    a = t(136857),
    o = t(739508),
    i = t(158317),
    l = t(26279);
function u(e) {
    let { order: r, errorSource: t, onSignFailure: u, onError: d } = e,
        [s, c] = (0, n.useState)(null),
        f = (0, n.useCallback)(
            (e) => {
                c(e), d?.(e);
            },
            [d],
        ),
        p = (0, n.useCallback)(
            (e, r) => {
                let n = e instanceof a.Ay ? e : new a.Ay(e);
                return (
                    (0, o.gr)(e) || (0, o.pM)(e instanceof Error ? e : n, { tags: { source: t }, extra: r }), f(n), n
                );
            },
            [t, f],
        ),
        h = (0, n.useCallback)(
            async function () {
                let { loadId: e, errorExtra: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (null == r) return f(new a.Ay("Order not created yet")), { type: "failed" };
                c(null);
                try {
                    let t = await (0, i.Ub)({ orderId: r.id, loadId: e });
                    if (t.status !== l.Re.SIGNED) {
                        if (null != t.errors && t.errors.length > 0)
                            throw Error(`Order signing failed with errors: ${t.errors.join(", ")}`);
                        throw Error(`Unexpected order status: ${t.status}`);
                    }
                    return { type: "signed", order: t };
                } catch (e) {
                    if (e instanceof i.FY) return u?.(e.order), f(e), { type: "failed" };
                    return p(e, { ...t, orderId: r.id }), { type: "failed" };
                }
            },
            [r, u, p, f],
        );
    return { error: s, signOrder: h, reportError: p };
}
