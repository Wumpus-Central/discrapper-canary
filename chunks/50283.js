"use strict";
n.d(t, { ET: () => o });
var r = n(562465),
    i = n(73153),
    s = n(427157);
n(728458);
var a = n(652215);
async function o() {
    i.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await r.Bo.get({ url: a.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        i.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new s.A(e)) });
    } finally {
        i.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
