n.d(t, { A: () => r });
var i = n(435558),
    l = n.n(i),
    s = n(17928),
    o = n(25578),
    a = n(731854);
function r() {
    let { enabled: e, cameraUnavailable: t } = (0, s.cf)([o.Ay], () => {
        let e = l()(o.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
        return { enabled: o.Ay.isVideoEnabled(), cameraUnavailable: e || !o.Ay.supports(a.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: t };
}
