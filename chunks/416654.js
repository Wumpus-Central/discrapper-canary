"use strict";
n.d(t, { v: () => s });
var r = n(311907),
    i = n(439174),
    a = n(622543);
function s(e) {
    return (0, r.bG)([a.A], () => {
        let t,
            n = null != e ? a.A.getUserProfile(e) : null,
            r = n?.premiumSince;
        return null == n || null == r
            ? null
            : (n?.badges?.forEach((e) => {
                  let n = (0, i.cZ)(e.id);
                  null != n && (t = n);
              }),
              t);
    });
}
