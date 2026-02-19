"use strict";
n.d(t, { A: () => s });
var i = n(773669);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { month: "numeric", day: "numeric" };
    return new Date(e).toLocaleDateString(i.default.locale, t);
}
