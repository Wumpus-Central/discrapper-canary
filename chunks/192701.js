n.d(t, { f: () => a });
var i = n(417597),
    l = n(555337),
    s = n(287809),
    r = n(652215);
function a() {
    let e = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, i.bG)([l.A], () => l.A.getProps().mfaLevel);
    return { isUserMFAEnabled: e?.mfaEnabled === !0, isModerationMFAEnabled: t === r.EkJ.ELEVATED };
}
