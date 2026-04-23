"use strict";
r.d(t, { v: () => l });
var a = r(311907),
    i = r(439174),
    n = r(622543);
function l(e) {
    return (0, a.bG)([n.A], () => {
        let t,
            r = null != e ? n.A.getUserProfile(e) : null,
            a = r?.premiumSince;
        return null == r || null == a
            ? null
            : (r?.badges?.forEach((e) => {
                  let r = (0, i.cZ)(e.id);
                  null != r && (t = r);
              }),
              t);
    });
}
