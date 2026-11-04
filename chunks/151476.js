var l = n(435558),
    t = n.n(l),
    a = n(855986),
    s = n(718197),
    d = n(731854);
n.d(
    i,
    {},
    {
        A: function () {
            let { enabled: e, cameraUnavailable: i } = (0, a.cf)([s.Ay], () => {
                let e = t()(s.Ay.getVideoDevices()).values().first()?.disabled ?? !0;
                return { enabled: s.Ay.isVideoEnabled(), cameraUnavailable: e || !s.Ay.supports(d.O5.VIDEO) };
            });
            return { enabled: e, cameraUnavailable: i };
        },
    },
);
