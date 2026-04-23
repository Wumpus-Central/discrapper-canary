"use strict";
n.d(t, { X: () => c });
var l = n(636537),
    i = n(228366),
    s = n(90165),
    r = n(927813),
    a = n(652215);
let o = 6 * r.A.Millis.HOUR;
async function c() {
    let e = s.A.lastFetched;
    if (!(null != e && Date.now() - e < o))
        try {
            let e = await l.Bo.get({ url: a.Rsh.USER_ACTIVITY_STATISTICS, oldFormErrors: !0, rejectWithError: !1 });
            i.h.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: e.body });
        } catch (e) {
            return e;
        }
}
