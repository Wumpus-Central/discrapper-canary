"use strict";
n.d(t, { i: () => o });
var r = n(284009),
    i = n.n(r),
    a = n(311907),
    s = n(287809);
let o = () => {
    let e = (0, a.bG)([s.default], () => s.default.getCurrentUser());
    return i()(null != e, "user has to be signed in before accessing shop"), e;
};
