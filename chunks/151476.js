var t = n(435558),
    l = n.n(t),
    a = n(855986),
    s = n(754712),
    d = n(731854);
n.d(
    i,
    {},
    {
        A: function () {
            let { enabled: e, cameraUnavailable: i } = (0, a.cf)([s.Ay], () => {
                let e = l()(s.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
                return { enabled: s.Ay.isVideoEnabled(), cameraUnavailable: e || !s.Ay.supports(d.O5.VIDEO) };
            });
            return { enabled: e, cameraUnavailable: i };
        },
    },
);
