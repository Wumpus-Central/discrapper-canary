"use strict";
n.d(t, { A: () => l });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(430452),
    o = n(731854);
function l() {
    let { enabled: e, cameraUnavailable: t } = (0, a.cf)([s.Ay], () => {
        let e = i()(s.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
        return { enabled: s.Ay.isVideoEnabled(), cameraUnavailable: e || !s.Ay.supports(o.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: t };
}
