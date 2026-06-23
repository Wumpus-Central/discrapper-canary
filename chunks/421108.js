"use strict";
n.d(t, { u: () => a });
var i = n(989349),
    r = n.n(i),
    s = n(375708);
function a(e) {
    let t = (function (e) {
        if (null == e) return null;
        let t = r()(e).diff(r()(), "days");
        return t <= 0 ? null : t;
    })(e);
    return null == t ? null : s.intl.formatToPlainString(s.t.BXpdIg, { days: Math.max(t, 1) });
}
