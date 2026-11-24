var r = n(582128),
    i = n(136857),
    a = n(708146),
    l = n(158317),
    o = n(125114),
    u = n(392226),
    s = n(26279),
    c = n(792996);
class d extends Error {
    name = "OrderSigningFailed";
    constructor(e) {
        super(`Order signing failed with error: ${e}`);
    }
}
class f extends Error {
    name = "UnexpectedOrderStatus";
    constructor(e) {
        super(`Unexpected order status: ${e}`);
    }
}
n.d(
    t,
    {},
    {
        f: function (e) {
            let { order: t, errorSource: n, onSignFailure: _, onError: p } = e,
                [m, w] = (0, r.useState)(null),
                h = (0, r.useCallback)(
                    (e) => {
                        (w(e), p?.(e));
                    },
                    [p],
                ),
                g = (0, r.useCallback)(
                    (e, t, r) => {
                        a.r.report({ site: "order_sign", tags: { flow: n }, extra: t }, e);
                        let l = e instanceof i.Ay ? e : new i.Ay(e),
                            o = null != r ? new i.Ay(r) : l;
                        return (h(o), o);
                    },
                    [n, h],
                );
            return {
                error: m,
                signOrder: (0, r.useCallback)(
                    async function () {
                        let {
                            loadId: e,
                            purchaseToken: n,
                            gatewayCheckoutContext: r,
                            errorExtra: a,
                            onSigningDeferred: p,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (null == t) return (h(new i.Ay("Order not created yet")), { type: "failed" });
                        w(null);
                        try {
                            let i = await (0, l.Ub)({
                                orderId: t.id,
                                loadId: e,
                                purchaseToken: n,
                                gatewayCheckoutContext: r,
                            });
                            if (i.status === s.Re.SIGNED) return { type: "signed", order: i };
                            if (i.status === s.Re.SIGNING_IN_PROGRESS) {
                                let e = i.billing_facet,
                                    n = null != e ? e.order_signing_deferral_context : null;
                                if ((p?.(i), null != n))
                                    try {
                                        await (0, o.yu)(n);
                                    } catch (e) {
                                        return (
                                            g(e, { ...a, orderId: t.id }, c.intl.string(c.t.khEaRI)), { type: "failed" }
                                        );
                                    }
                                return { type: "pending", order: i };
                            }
                            let _ = (0, u.i)(i);
                            if (null != _) return (h(_), { type: "failed" });
                            if (null != i.error) throw new d(i.error.code);
                            throw new f(i.status);
                        } catch (e) {
                            if (e instanceof l.FY) return (_?.(e.order), h(e), { type: "failed" });
                            return (g(e, { ...a, orderId: t.id }), { type: "failed" });
                        }
                    },
                    [t, _, g, h],
                ),
                reportError: g,
            };
        },
    },
);
