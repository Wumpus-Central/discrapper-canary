i.d(t, { A: () => r });
var n = i(735438),
    l = i.n(n),
    s = i(17928),
    a = i(136491),
    o = i(731854);
function r() {
    let { enabled: e, cameraUnavailable: t } = (0, s.cf)([a.Ay], () => {
        let e = l()(a.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
        return { enabled: a.Ay.isVideoEnabled(), cameraUnavailable: e || !a.Ay.supports(o.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: t };
}
