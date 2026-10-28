l.d(s, { X: () => m });
var t = l(636537),
    i = l(73153),
    a = l(90165),
    n = l(927813),
    o = l(652215);
let r = 6 * n.A.Millis.HOUR;
async function m() {
    let e = a.A.lastFetched;
    if (!(null != e && Date.now() - e < r))
        try {
            let e = await t.Bo.get({
                url: o.Rsh.USER_ACTIVITY_STATISTICS,
                oldFormErrors: !0,
                rejectWithError: (0, t.fT)(),
            });
            i.h.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: e.body });
        } catch (e) {
            return e;
        }
}
