n.d(t, {
    Y: () => c,
    b: () => s
});
var r = n(594174),
    i = n(709054),
    a = n(981631);
let o = new Date('06/16/2020'),
    l = [a.V_K.AGE_RESTRICTED, a.V_K.EXPLICIT];
function s() {
    let e = r.default.getCurrentUser();
    return null != e && i.default.extractTimestamp(e.id) > o.getTime() && null == e.nsfwAllowed;
}
function c(e) {
    return l.includes(e.nsfwLevel);
}
