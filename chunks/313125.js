var n = r(582128),
    a = r(136857),
    l = r(949192),
    i = r(158317),
    d = r(125114),
    c = r(392226),
    s = r(26279),
    o = r(792996);
r.d(
    t,
    {},
    {
        f: function (e) {
            let { order: t, errorSource: r, onSignFailure: u, onError: h } = e,
                [_, E] = (0, n.useState)(null),
                R = (0, n.useCallback)(
                    (e) => {
                        (E(e), h?.(e));
                    },
                    [h],
                ),
                C = (0, n.useCallback)(
                    (e, t, n) => {
                        let i = e instanceof a.Ay ? e : new a.Ay(e);
                        (0, l.gr)(e) || (0, l.pM)(e instanceof Error ? e : i, { tags: { source: r }, extra: t });
                        let d = null != n ? new a.Ay(n) : i;
                        return (R(d), d);
                    },
                    [r, R],
                );
            return {
                error: _,
                signOrder: (0, n.useCallback)(
                    async function () {
                        let {
                            loadId: e,
                            purchaseToken: r,
                            gatewayCheckoutContext: n,
                            errorExtra: l,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (null == t) return (R(new a.Ay("Order not created yet")), { type: "failed" });
                        E(null);
                        try {
                            let a = await (0, i.Ub)({
                                orderId: t.id,
                                loadId: e,
                                purchaseToken: r,
                                gatewayCheckoutContext: n,
                            });
                            if (a.status === s.Re.SIGNED) return { type: "signed", order: a };
                            if (a.status === s.Re.SIGNING_IN_PROGRESS) {
                                let e = a.billing_facet;
                                try {
                                    await (0, d.yu)(null != e ? e.order_signing_deferral_context : null);
                                } catch (e) {
                                    return (
                                        C(e, { ...l, orderId: t.id }, o.intl.string(o.t.khEaRI)), { type: "failed" }
                                    );
                                }
                                return { type: "pending", order: a };
                            }
                            let u = (0, c.i)(a);
                            if (null != u) return (R(u), { type: "failed" });
                            if (null != a.error) throw Error(`Order signing failed with error: ${a.error.code}`);
                            throw Error(`Unexpected order status: ${a.status}`);
                        } catch (e) {
                            if (e instanceof i.FY) return (u?.(e.order), R(e), { type: "failed" });
                            return (C(e, { ...l, orderId: t.id }), { type: "failed" });
                        }
                    },
                    [t, u, C, R],
                ),
                reportError: C,
            };
        },
    },
);
