n.d(t, { X: () => d });
var i = n(562465),
    s = n(73153),
    l = n(90165),
    a = n(927813),
    r = n(652215);
let o = 6 * a.A.Millis.HOUR;
async function d() {
    let e = l.A.lastFetched;
    if (!(null != e && Date.now() - e < o))
        try {
            let e = await i.Bo.get({ url: r.Rsh.USER_ACTIVITY_STATISTICS, oldFormErrors: !0, rejectWithError: !1 });
            s.h.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: e.body });
        } catch (e) {
            return e;
        }
}
