r.d(n, {
    b: function () {
        return a;
    }
});
var i = r(594174);
function a() {
    let e = i.default.getCurrentUser();
    return {
        enabled: !!(null == e ? void 0 : e.isStaff()),
        delay: !0
    };
}
