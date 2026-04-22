l.d(t, { A: () => o });
var n = l(735438),
    i = l.n(n),
    s = l(311907),
    a = l(430452),
    r = l(731854);
function o() {
    let { enabled: e, cameraUnavailable: t } = (0, s.cf)([a.Ay], () => {
        let e = i()(a.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
        return { enabled: a.Ay.isVideoEnabled(), cameraUnavailable: e || !a.Ay.supports(r.O5.VIDEO) };
    });
    return { enabled: e, cameraUnavailable: t };
}
