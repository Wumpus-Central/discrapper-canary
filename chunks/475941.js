n.d(t, { G: () => s });
var r = n(749210),
    i = n(430824),
    a = n(594174),
    o = n(165139);
function s() {
    let e = a.default.getCurrentUser();
    (null == e ? void 0 : e.isStaff()) && null != i.Z.getGuild(o.D) && r.Z.requestMembers(o.D, "", 0, !1);
}
