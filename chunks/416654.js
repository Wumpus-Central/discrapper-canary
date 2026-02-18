r.d(t, { v: () => s });
var n = r(311907),
    a = r(439174),
    l = r(622543);
function s(e) {
    return (0, n.bG)([l.A], () => {
        let t,
            r = null != e ? l.A.getUserProfile(e) : null,
            n = r?.premiumSince;
        return null == r || null == n
            ? null
            : (r?.badges?.forEach((e) => {
                  let r = (0, a.cZ)(e.id);
                  null != r && (t = r);
              }),
              t);
    });
}
