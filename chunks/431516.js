n.d(t, { N: () => l });
var r = n(399606),
    i = n(999382),
    s = n(594174),
    a = n(981631);
function l() {
    let e = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
        t = (0, r.e7)([i.Z], () => i.Z.getProps().mfaLevel);
    return {
        isUserMFAEnabled: (null == e ? void 0 : e.mfaEnabled) === !0,
        isModerationMFAEnabled: t === a.BpS.ELEVATED
    };
}
