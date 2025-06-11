u.r(t), u.d(t, { default: () => l });
var r = u(749210),
    s = u(430824),
    d = u(594174),
    i = u(165139);
let l = {
    preloadStaffMembers: function () {
        let e = d.default.getCurrentUser();
        (null == e ? void 0 : e.isStaff()) && null != s.Z.getGuild(i.D) && r.Z.requestMembers(i.D, '', 0, !1);
    }
};
