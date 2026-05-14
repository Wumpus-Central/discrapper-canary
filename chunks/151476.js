"use strict";
n.d(t, { A: () => l });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(235058),
    o = n(731854);
function l() {
    let { enabled: e, cameraUnavailable: t } = (0, s.cf)([a.Ay], () => {
        let e = r()(a.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
        return { enabled: a.Ay.isVideoEnabled(), cameraUnavailable: e || !a.Ay.supports(o.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: t };
}
