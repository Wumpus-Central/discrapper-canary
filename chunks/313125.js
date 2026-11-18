var n = r(582128),
    i = r(136857),
    l = r(949192),
    a = r(158317),
    o = r(125114),
    u = r(392226),
    c = r(26279),
    s = r(792996);
r.d(
    t,
    {},
    {
        f: function (e) {
            let { order: t, errorSource: r, onSignFailure: d, onError: f } = e,
                [_, h] = (0, n.useState)(null),
                m = (0, n.useCallback)(
                    (e) => {
                        (h(e), f?.(e));
                    },
                    [f],
                ),
                p = (0, n.useCallback)(
                    (e, t, n) => {
                        let a = e instanceof i.Ay ? e : new i.Ay(e);
                        (0, l.gr)(e) || (0, l.pM)(e instanceof Error ? e : a, { tags: { source: r }, extra: t });
                        let o = null != n ? new i.Ay(n) : a;
                        return (m(o), o);
                    },
                    [r, m],
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
                            onSigningDeferred: f,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (null == t) return (m(new i.Ay("Order not created yet")), { type: "failed" });
                        h(null);
                        try {
                            let i = await (0, a.Ub)({
                                orderId: t.id,
                                loadId: e,
                                purchaseToken: r,
                                gatewayCheckoutContext: n,
                            });
                            if (i.status === c.Re.SIGNED) return { type: "signed", order: i };
                            if (i.status === c.Re.SIGNING_IN_PROGRESS) {
                                let e = i.billing_facet,
                                    r = null != e ? e.order_signing_deferral_context : null;
                                if ((f?.(i), null != r))
                                    try {
                                        await (0, o.yu)(r);
                                    } catch (e) {
                                        return (
                                            p(e, { ...l, orderId: t.id }, s.intl.string(s.t.khEaRI)), { type: "failed" }
                                        );
                                    }
                                return { type: "pending", order: i };
                            }
                            let d = (0, u.i)(i);
                            if (null != d) return (m(d), { type: "failed" });
                            if (null != i.error) throw Error(`Order signing failed with error: ${i.error.code}`);
                            throw Error(`Unexpected order status: ${i.status}`);
                        } catch (e) {
                            if (e instanceof a.FY) return (d?.(e.order), m(e), { type: "failed" });
                            return (p(e, { ...l, orderId: t.id }), { type: "failed" });
                        }
                    },
                    [t, d, p, m],
                ),
                reportError: p,
            };
        },
    },
);
