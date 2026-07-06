"use strict";
n.d(t, { X: () => u });
var i = n(636537),
    r = n(228366),
    s = n(90165),
    a = n(927813),
    o = n(652215);
let l = 6 * a.A.Millis.HOUR;
async function u() {
    let e = s.A.lastFetched;
    if (!(null != e && Date.now() - e < l))
        try {
            let e = await i.Bo.get({ url: o.Rsh.USER_ACTIVITY_STATISTICS, oldFormErrors: !0, rejectWithError: !1 });
            r.h.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: e.body });
        } catch (e) {
            return e;
        }
}
