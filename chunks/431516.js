n.d(t, {
    N: function () {
        return s;
    }
});
var i = n(399606),
    r = n(999382),
    l = n(594174),
    a = n(981631);
function s() {
    let e = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        t = (0, i.e7)([r.Z], () => r.Z.getProps().mfaLevel),
        n = (null == e ? void 0 : e.mfaEnabled) === !0;
    return {
        isUserMFAEnabled: n,
        isModerationMFAEnabled: t === a.BpS.ELEVATED
    };
}
