n.d(i, { A: () => o });
var l = n(435558),
    t = n.n(l),
    a = n(17928),
    s = n(999926),
    d = n(731854);
function o() {
    let { enabled: e, cameraUnavailable: i } = (0, a.cf)([s.Ay], () => {
        let e = t()(s.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
        return { enabled: s.Ay.isVideoEnabled(), cameraUnavailable: e || !s.Ay.supports(d.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: i };
}
