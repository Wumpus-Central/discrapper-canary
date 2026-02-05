"use strict";
n.d(t, { f: () => a });
var i = n(417597),
    s = n(555337),
    l = n(287809),
    r = n(652215);
function a() {
    let e = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        t = (0, i.bG)([s.A], () => s.A.getProps().mfaLevel);
    return { isUserMFAEnabled: e?.mfaEnabled === !0, isModerationMFAEnabled: t === r.EkJ.ELEVATED };
}
