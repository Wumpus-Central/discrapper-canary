n.d(t, {
    N: function () {
        return a;
    }
});
var i = n(399606),
    r = n(999382),
    l = n(594174),
    s = n(981631);
function a() {
    let e = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        t = (0, i.e7)([r.Z], () => r.Z.getProps().mfaLevel),
        n = (null == e ? void 0 : e.mfaEnabled) === !0;
    return {
        isUserMFAEnabled: n,
        isModerationMFAEnabled: t === s.BpS.ELEVATED
    };
}
