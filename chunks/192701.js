n.d(t, {
    f: () => a,
});
var r = n(417597),
    i = n(555337),
    l = n(287809),
    s = n(652215);

function a() {
    let e = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        t = (0, r.bG)([i.A], () => i.A.getProps().mfaLevel);
    return {
        isUserMFAEnabled: (null == e ? void 0 : e.mfaEnabled) === !0,
        isModerationMFAEnabled: t === s.EkJ.ELEVATED,
    };
}
