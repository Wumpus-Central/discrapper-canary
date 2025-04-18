n.d(t, {
    DQ: () => l,
    He: () => s,
    P1: () => o
});
var r = n(825829),
    i = n(594174),
    a = n(981631);
function o(e) {
    return void 0 !== e && e.type !== a.d4z.DM;
}
function s(e) {
    var t, n;
    return null != (n = null == (t = i.default.getUser(e)) ? void 0 : t.hasFlag(a.xW$.SPAMMER)) && n;
}
function l(e) {
    return s(e.author.id) && !(0, r.nY)(e);
}
