"use strict";
n.d(t, { A: () => o });
var i = n(735438),
    r = n.n(i),
    a = n(17928),
    s = n(186295),
    l = n(731854);
function o() {
    let { enabled: e, cameraUnavailable: t } = (0, a.cf)([s.Ay], () => {
        let e = r()(s.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
        return { enabled: s.Ay.isVideoEnabled(), cameraUnavailable: e || !s.Ay.supports(l.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: t };
}
