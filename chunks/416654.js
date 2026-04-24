"use strict";
r.d(t, { v: () => s });
var i = r(17928),
    a = r(439174),
    n = r(841595);
function s(e) {
    return (0, i.bG)([n.A], () => {
        let t,
            r = null != e ? n.A.getUserProfile(e) : null,
            i = r?.premiumSince;
        return null == r || null == i
            ? null
            : (r?.badges?.forEach((e) => {
                  let r = (0, a.cZ)(e.id);
                  null != r && (t = r);
              }),
              t);
    });
}
