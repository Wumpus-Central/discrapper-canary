n.d(t, {
    b: function () {
        return r;
    }
});
var a = n(594174);
function r() {
    let e = a.default.getCurrentUser();
    return {
        enabled: !!(null == e ? void 0 : e.isStaff()),
        delay: !0
    };
}
