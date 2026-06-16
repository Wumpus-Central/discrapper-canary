n.d(t, { X: () => d });
var i = n(636537),
    l = n(228366),
    r = n(90165),
    s = n(927813),
    o = n(652215);
let a = 6 * s.A.Millis.HOUR;
async function d() {
    let e = r.A.lastFetched;
    if (!(null != e && Date.now() - e < a))
        try {
            let e = await i.Bo.get({ url: o.Rsh.USER_ACTIVITY_STATISTICS, oldFormErrors: !0, rejectWithError: !1 });
            l.h.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: e.body });
        } catch (e) {
            return e;
        }
}
