"use strict";
n.d(t, { BV: () => a, IL: () => s });
var r = n(311907);
n(734057);
var i = n(824492);
function s(e) {
    return (0, r.bG)([i.A], () => a(e, i.A));
}
let a = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
    return !(null == e || !e.isSpoilerChannel() || t.didAgree(e.id));
};
