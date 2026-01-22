n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(430452),
    o = n(731854);

function l() {
    let { enabled: e, cameraUnavailable: t } = (0, a.cf)([s.A], () => {
        var e, t;
        let n = null == (e = null == (t = i()(s.A.getVideoDevices()).values().first()) ? void 0 : t.disabled) || e;
        return {
            enabled: s.A.isVideoEnabled(),
            cameraUnavailable: n || !s.A.supports(o.O5.VIDEO),
        };
    });
    return {
        enabled: e,
        cameraUnavailable: t,
    };
}
