n.d(t, { A: () => c }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(201327),
    s = n(539541);
function o(e) {
    null != e && e.getTracks().forEach((e) => e.stop());
}
async function l(e) {
    let { deviceId: t, width: n, height: r, disabled: i } = e;
    if (i) return null;
    try {
        return await navigator.mediaDevices.getUserMedia({
            audio: !1,
            video: {
                width: n * window.devicePixelRatio,
                height: r * window.devicePixelRatio,
                frameRate: 30,
                deviceId: t,
            },
        });
    } catch (e) {
        return null;
    }
}
function c(e) {
    let { deviceId: t, width: n, height: c, disabled: u } = e,
        [d, f] = i.useState();
    return (
        i.useEffect(() => {
            let e = l({
                deviceId: t,
                width: n,
                height: c,
                disabled: u,
            }).then((e) => {
                let t = null != e ? (0, a.ju)(e) : null;
                return (
                    f(t),
                    {
                        stream: e,
                        streamId: t,
                    }
                );
            });
            return () => {
                e.then((e) => {
                    let { stream: t, streamId: n } = e;
                    o(t), null != n && (0, a.it)(n);
                });
            };
        }, [t, n, c, u]),
        null == d
            ? (0, r.jsx)("div", {
                  className: "media-engine-video",
                  style: {
                      width: n,
                      height: c,
                  },
              })
            : (0, r.jsx)(s.A, {
                  streamId: d,
                  style: {
                      width: n,
                      height: c,
                  },
              })
    );
}
c.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180,
};
