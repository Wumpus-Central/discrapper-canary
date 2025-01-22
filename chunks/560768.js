r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(789020);
var a = r(630388),
    o = r(620662),
    s = r(981631);
function l(e, n, r, i) {
    let l = null == n ? void 0 : n.application_id;
    if (null == e || null == n || !(0, o.Z)(n, s.xjy.JOIN) || null == l) return !1;
    let u = i.getApplication(l);
    return !(null == u || (0, a.yE)(u.flags, s.udG.EMBEDDED)) && r.shouldShowEducation(l);
}
