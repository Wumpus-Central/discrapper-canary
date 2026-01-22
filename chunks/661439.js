n.d(t, {
    X: () => c,
});
var r = n(562465),
    i = n(73153),
    a = n(90165),
    s = n(927813),
    o = n(652215);
let l = 6 * s.A.Millis.HOUR;
async function c() {
    let e = a.A.lastFetched;
    if (!(null != e && Date.now() - e < l))
        try {
            let e = await r.Bo.get({
                url: o.Rsh.USER_ACTIVITY_STATISTICS,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            i.h.dispatch({
                type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
                statistics: e.body,
            });
        } catch (e) {
            return e;
        }
}
