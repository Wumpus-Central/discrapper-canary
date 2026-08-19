"use strict";
n.d(t, { cx: () => l, iJ: () => s, kf: () => o });
var i = n(877133),
    r = n(287809),
    a = n(652215);
function s(e) {
    return void 0 !== e && e.type !== a.rbe.DM;
}
function l(e) {
    return r.default.getUser(e)?.hasFlag(a.nhx.SPAMMER) ?? !1;
}
function o(e) {
    return l(e.author.id) && !(0, i.ER)(e);
}
