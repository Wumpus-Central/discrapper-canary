s.d(a, { A: () => c });
var i = s(735438),
    t = s.n(i),
    d = s(17928),
    r = s(51760),
    n = s(731854);
function c() {
    let { enabled: e, cameraUnavailable: a } = (0, d.cf)([r.Ay], () => {
        let e = t()(r.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
        return { enabled: r.Ay.isVideoEnabled(), cameraUnavailable: e || !r.Ay.supports(n.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: a };
}
