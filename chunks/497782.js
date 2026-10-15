r.d(t, { f: () => o });
var n = r(582128),
    l = r(136857),
    a = r(739508),
    i = r(158317),
    d = r(710525),
    c = r(26279),
    s = r(105292);
function o(e) {
    let { order: t, errorSource: r, onSignFailure: o, onError: u } = e,
        [h, _] = (0, n.useState)(null),
        E = (0, n.useCallback)(
            (e) => {
                (_(e), u?.(e));
            },
            [u],
        ),
        R = (0, n.useCallback)(
            (e, t, n) => {
                let i = e instanceof l.Ay ? e : new l.Ay(e);
                (0, a.gr)(e) || (0, a.pM)(e instanceof Error ? e : i, { tags: { source: r }, extra: t });
                let d = null != n ? new l.Ay(n) : i;
                return (E(d), d);
            },
            [r, E],
        ),
        C = (0, n.useCallback)(
            async function () {
                let {
                    loadId: e,
                    purchaseToken: r,
                    gatewayCheckoutContext: n,
                    errorExtra: a,
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (null == t) return (E(new l.Ay("Order not created yet")), { type: "failed" });
                _(null);
                try {
                    let o = await (0, i.Ub)({ orderId: t.id, loadId: e, purchaseToken: r, gatewayCheckoutContext: n });
                    if (o.status === c.Re.SIGNED) return { type: "signed", order: o };
                    if (o.status === c.Re.SIGNING_IN_PROGRESS) {
                        let e = o.billing_facet;
                        try {
                            await (0, d.yu)(null != e ? e.order_signing_deferral_context : null);
                        } catch (e) {
                            return (R(e, { ...a, orderId: t.id }, s.intl.string(s.t.khEaRI)), { type: "failed" });
                        }
                        return { type: "pending", order: o };
                    }
                    let u = (function (e) {
                        let { error: t } = e;
                        return null == t || t.code === c.lD.UNKNOWN_ERROR_CODE
                            ? null
                            : new l.Ay(t.message, t.billing_error_code);
                    })(o);
                    if (null != u) return (E(u), { type: "failed" });
                    if (null != o.error) throw Error(`Order signing failed with error: ${o.error.code}`);
                    throw Error(`Unexpected order status: ${o.status}`);
                } catch (e) {
                    if (e instanceof i.FY) return (o?.(e.order), E(e), { type: "failed" });
                    return (R(e, { ...a, orderId: t.id }), { type: "failed" });
                }
            },
            [t, o, R, E],
        );
    return { error: h, signOrder: C, reportError: R };
}
