n.d(t, {
    DQ: () => l,
    He: () => s,
    P1: () => a
});
var r = n(825829),
    i = n(594174),
    o = n(981631);
function a(e) {
    return void 0 !== e && e.type !== o.d4z.DM;
}
function s(e) {
    var t, n;
    return null != (n = null == (t = i.default.getUser(e)) ? void 0 : t.hasFlag(o.xW$.SPAMMER)) && n;
}
function l(e) {
    return s(e.author.id) && !(0, r.nY)(e);
}
