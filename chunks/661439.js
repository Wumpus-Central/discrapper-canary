"use strict";
n.d(t, { X: () => d });
var i = n(636537),
    r = n(228366),
    a = n(90165),
    s = n(927813),
    l = n(652215);
let o = 6 * s.A.Millis.HOUR;
async function d() {
    let e = a.A.lastFetched;
    if (!(null != e && Date.now() - e < o))
        try {
            let e = await i.Bo.get({ url: l.Rsh.USER_ACTIVITY_STATISTICS, oldFormErrors: !0, rejectWithError: !1 });
            r.h.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: e.body });
        } catch (e) {
            return e;
        }
}
