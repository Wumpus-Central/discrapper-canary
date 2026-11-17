var n = r(582128),
    i = r(136857),
    a = r(949192),
    l = r(158317),
    o = r(125114),
    u = r(392226),
    d = r(26279),
    s = r(792996);
r.d(
    t,
    {},
    {
        f: function (e) {
            let { order: t, errorSource: r, onSignFailure: c, onError: f } = e,
                [h, m] = (0, n.useState)(null),
                y = (0, n.useCallback)(
                    (e) => {
                        (m(e), f?.(e));
                    },
                    [f],
                ),
                p = (0, n.useCallback)(
                    (e, t, n) => {
                        let l = e instanceof i.Ay ? e : new i.Ay(e);
                        (0, a.gr)(e) || (0, a.pM)(e instanceof Error ? e : l, { tags: { source: r }, extra: t });
                        let o = null != n ? new i.Ay(n) : l;
                        return (y(o), o);
                    },
                    [r, y],
                );
            return {
                error: h,
                signOrder: (0, n.useCallback)(
                    async function () {
                        let {
                            loadId: e,
                            purchaseToken: r,
                            gatewayCheckoutContext: n,
                            errorExtra: a,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (null == t) return (y(new i.Ay("Order not created yet")), { type: "failed" });
                        m(null);
                        try {
                            let i = await (0, l.Ub)({
                                orderId: t.id,
                                loadId: e,
                                purchaseToken: r,
                                gatewayCheckoutContext: n,
                            });
                            if (i.status === d.Re.SIGNED) return { type: "signed", order: i };
                            if (i.status === d.Re.SIGNING_IN_PROGRESS) {
                                let e = i.billing_facet;
                                try {
                                    await (0, o.yu)(null != e ? e.order_signing_deferral_context : null);
                                } catch (e) {
                                    return (
                                        p(e, { ...a, orderId: t.id }, s.intl.string(s.t.khEaRI)), { type: "failed" }
                                    );
                                }
                                return { type: "pending", order: i };
                            }
                            let c = (0, u.i)(i);
                            if (null != c) return (y(c), { type: "failed" });
                            if (null != i.error) throw Error(`Order signing failed with error: ${i.error.code}`);
                            throw Error(`Unexpected order status: ${i.status}`);
                        } catch (e) {
                            if (e instanceof l.FY) return (c?.(e.order), y(e), { type: "failed" });
                            return (p(e, { ...a, orderId: t.id }), { type: "failed" });
                        }
                    },
                    [t, c, p, y],
                ),
                reportError: p,
            };
        },
    },
);
