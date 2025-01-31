n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(376398),
    s = n(825040);
function o(e) {
    null != e && e.getTracks().forEach((e) => e.stop());
}
async function l(e) {
    let { deviceId: t, width: n, height: i, disabled: r } = e;
    if (r) return null;
    try {
        return await navigator.mediaDevices.getUserMedia({
            audio: !1,
            video: {
                width: n * window.devicePixelRatio,
                height: i * window.devicePixelRatio,
                frameRate: 30,
                deviceId: t
            }
        });
    } catch (e) {
        return null;
    }
}
function u(e) {
    let { deviceId: t, width: n, height: u, disabled: c } = e,
        [d, f] = r.useState();
    return (
        r.useEffect(() => {
            let e = l({
                deviceId: t,
                width: n,
                height: u,
                disabled: c
            }).then((e) => {
                let t = null != e ? (0, a.N7)(e) : null;
                return (
                    f(t),
                    {
                        stream: e,
                        streamId: t
                    }
                );
            });
            return () => {
                e.then((e) => {
                    let { stream: t, streamId: n } = e;
                    o(t), null != n && (0, a.jC)(n);
                });
            };
        }, [t, n, u, c]),
        null == d
            ? (0, i.jsx)('div', {
                  className: 'media-engine-video',
                  style: {
                      width: n,
                      height: u
                  }
              })
            : (0, i.jsx)(s.Z, {
                  streamId: d,
                  style: {
                      width: n,
                      height: u
                  }
              })
    );
}
u.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
};
