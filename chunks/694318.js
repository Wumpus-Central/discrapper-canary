"use strict";
n.d(t, { cx: () => o, iJ: () => a, kf: () => l });
var i = n(877133),
    r = n(287809),
    s = n(652215);
function a(e) {
    return void 0 !== e && e.type !== s.rbe.DM;
}
function o(e) {
    return r.default.getUser(e)?.hasFlag(s.nhx.SPAMMER) ?? !1;
}
function l(e) {
    return o(e.author.id) && !(0, i.ER)(e);
}
