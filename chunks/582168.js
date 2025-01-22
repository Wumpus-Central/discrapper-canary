r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(376398),
    l = r(825040);
function u(e) {
    null != e && e.getTracks().forEach((e) => e.stop());
}
async function c(e) {
    let { deviceId: n, width: r, height: i, disabled: a } = e;
    if (a) return null;
    try {
        return await navigator.mediaDevices.getUserMedia({
            audio: !1,
            video: {
                width: r * window.devicePixelRatio,
                height: i * window.devicePixelRatio,
                frameRate: 30,
                deviceId: n
            }
        });
    } catch (e) {
        return null;
    }
}
function d(e) {
    let { deviceId: n, width: r, height: i, disabled: d } = e,
        [f, p] = o.useState();
    return (
        o.useEffect(() => {
            let e = c({
                deviceId: n,
                width: r,
                height: i,
                disabled: d
            }).then((e) => {
                let n = null != e ? (0, s.N7)(e) : null;
                return (
                    p(n),
                    {
                        stream: e,
                        streamId: n
                    }
                );
            });
            return () => {
                e.then((e) => {
                    let { stream: n, streamId: r } = e;
                    u(n), null != r && (0, s.jC)(r);
                });
            };
        }, [n, r, i, d]),
        null == f
            ? (0, a.jsx)('div', {
                  className: 'media-engine-video',
                  style: {
                      width: r,
                      height: i
                  }
              })
            : (0, a.jsx)(l.Z, {
                  streamId: f,
                  style: {
                      width: r,
                      height: i
                  }
              })
    );
}
d.defaultProps = {
    disabled: !1,
    width: 320,
    height: 180
};
