n.d(t, { cx: () => l, iJ: () => s, kf: () => o });
var i = n(877133),
    a = n(287809),
    r = n(652215);
function s(e) {
    return void 0 !== e && e.type !== r.rbe.DM;
}
function l(e) {
    return a.default.getUser(e)?.hasFlag(r.nhx.SPAMMER) ?? !1;
}
function o(e) {
    return l(e.author.id) && !(0, i.ER)(e);
}
