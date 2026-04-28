t.d(u, { v: () => d });
var l = t(17928),
    e = t(439174),
    r = t(841595);
function d(n) {
    return (0, l.bG)([r.A], () => {
        let u,
            t = null != n ? r.A.getUserProfile(n) : null,
            l = t?.premiumSince;
        return null == t || null == l
            ? null
            : (t?.badges?.forEach((n) => {
                  let t = (0, e.cZ)(n.id);
                  null != t && (u = t);
              }),
              u);
    });
}
