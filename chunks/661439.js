s.d(r, { X: () => o });
var e = s(562465),
    i = s(228366),
    a = s(90165),
    c = s(927813),
    T = s(652215);
let h = 6 * c.A.Millis.HOUR;
async function o() {
    let t = a.A.lastFetched;
    if (!(null != t && Date.now() - t < h))
        try {
            let t = await e.Bo.get({
                url: T.Rsh.USER_ACTIVITY_STATISTICS,
                oldFormErrors: !0,
                rejectWithError: (0, e.fT)(),
            });
            i.h.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: t.body });
        } catch (t) {
            return t;
        }
}
