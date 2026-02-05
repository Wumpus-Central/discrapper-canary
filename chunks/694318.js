"use strict";
n.d(t, { cx: () => o, iJ: () => s, kf: () => l });
var r = n(785823),
    i = n(287809),
    a = n(652215);
function s(e) {
    return void 0 !== e && e.type !== a.rbe.DM;
}
function o(e) {
    return i.default.getUser(e)?.hasFlag(a.nhx.SPAMMER) ?? !1;
}
function l(e) {
    return o(e.author.id) && !(0, r.ER)(e);
}
