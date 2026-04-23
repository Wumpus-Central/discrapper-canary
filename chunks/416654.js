r.d(a, { v: () => n });
var t = r(17928),
    i = r(439174),
    l = r(841595);
function n(e) {
    return (0, t.bG)([l.A], () => {
        let a,
            r = null != e ? l.A.getUserProfile(e) : null,
            t = r?.premiumSince;
        return null == r || null == t
            ? null
            : (r?.badges?.forEach((e) => {
                  let r = (0, i.cZ)(e.id);
                  null != r && (a = r);
              }),
              a);
    });
}
