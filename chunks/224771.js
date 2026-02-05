"use strict";
n.d(t, { BM: () => u, Re: () => l, r$: () => c });
var r = n(562465);
n(73153);
var i = n(626584),
    a = n(739508),
    s = n(652215);
let o = new i.A("OrderActionCreators");
var l = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.DRAFT = 1)] = "DRAFT"),
            (e[(e.SIGNED = 2)] = "SIGNED"),
            (e[(e.DISCARDED = 3)] = "DISCARDED"),
            (e[(e.SIGNING_IN_PROGRESS = 4)] = "SIGNING_IN_PROGRESS"),
            e
        );
    })({}),
    u = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.ONE_TIME = 1)] = "ONE_TIME"),
            (e[(e.SUBSCRIPTION = 2)] = "SUBSCRIPTION"),
            e
        );
    })({});
async function c(e) {
    try {
        return (await r.Bo.get({ url: s.Rsh.ORDER_GET(e), rejectWithError: !0 })).body || null;
    } catch (t) {
        return (
            o.error("failed to fetch order", { error: t, orderId: e }),
            (0, a.pM)(t, { tags: { source: "OrderActionCreators_getOrder" }, extra: { orderId: e } }),
            null
        );
    }
}
