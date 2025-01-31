n.d(t, {
    Y: () => c,
    b: () => o
});
var i = n(594174),
    l = n(709054),
    a = n(981631);
let r = new Date('06/16/2020'),
    s = [a.V_K.AGE_RESTRICTED, a.V_K.EXPLICIT];
function o() {
    let e = i.default.getCurrentUser();
    return null != e && l.default.extractTimestamp(e.id) > r.getTime() && !e.isClaimed() && null == e.nsfwAllowed;
}
function c(e) {
    return s.includes(e.nsfwLevel);
}
