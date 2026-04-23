n.d(t, { A: () => o });
var i = n(735438),
    l = n.n(i),
    s = n(311907),
    a = n(430452),
    r = n(731854);
function o() {
    let { enabled: e, cameraUnavailable: t } = (0, s.cf)([a.Ay], () => {
        let e = l()(a.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
        return { enabled: a.Ay.isVideoEnabled(), cameraUnavailable: e || !a.Ay.supports(r.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: t };
}
