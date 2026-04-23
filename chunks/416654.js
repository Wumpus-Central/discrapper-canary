s.d(t, { v: () => l });
var n = s(311907),
    a = s(439174),
    r = s(622543);
function l(e) {
    return (0, n.bG)([r.A], () => {
        let t,
            s = null != e ? r.A.getUserProfile(e) : null,
            n = s?.premiumSince;
        return null == s || null == n
            ? null
            : (s?.badges?.forEach((e) => {
                  let s = (0, a.cZ)(e.id);
                  null != s && (t = s);
              }),
              t);
    });
}
