n.d(t, { X: () => o });
var i = n(636537),
    s = n(228366),
    a = n(90165),
    r = n(927813),
    l = n(652215);
let c = 6 * r.A.Millis.HOUR;
async function o() {
    let e = a.A.lastFetched;
    if (!(null != e && Date.now() - e < c))
        try {
            let e = await i.Bo.get({ url: l.Rsh.USER_ACTIVITY_STATISTICS, oldFormErrors: !0, rejectWithError: !1 });
            s.h.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: e.body });
        } catch (e) {
            return e;
        }
}
