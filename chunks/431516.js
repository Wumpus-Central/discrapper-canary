n.d(t, { N: () => a });
var i = n(399606),
    r = n(999382),
    l = n(594174),
    s = n(981631);
function a() {
    let e = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        t = (0, i.e7)([r.Z], () => r.Z.getProps().mfaLevel);
    return {
        isUserMFAEnabled: (null == e ? void 0 : e.mfaEnabled) === !0,
        isModerationMFAEnabled: t === s.BpS.ELEVATED
    };
}
