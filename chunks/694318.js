n.d(t, { cx: () => _, iJ: () => s, kf: () => l });
var i = n(877133),
    r = n(287809),
    a = n(652215);
function s(e) {
    return void 0 !== e && e.type !== a.rbe.DM;
}
function _(e) {
    return r.default.getUser(e)?.hasFlag(a.nhx.SPAMMER) ?? !1;
}
function l(e) {
    return _(e.author.id) && !(0, i.ER)(e);
}
