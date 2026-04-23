"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(935399),
    a = n(247692),
    o = n(539541),
    l = n(731854);
function u(e) {
    let { deviceId: t = l.qe, width: n = 320, height: u = 180, disabled: c = !1, onDeviceChange: d } = e,
        [_, f] = i.useState(null),
        p = i.useMemo(() => new a.A(), []);
    return (
        i.useEffect(
            () => (
                p.addListener("video", f),
                p.addListener("permission", () => d?.()),
                () => {
                    p.removeAllListeners();
                }
            ),
            [p, d],
        ),
        (0, s.l0)(() => {
            p.destroy();
        }),
        i.useEffect(() => {
            c
                ? p.setSource(l.qe)
                : p.setSource(t, {
                      width: n * window.devicePixelRatio,
                      height: u * window.devicePixelRatio,
                      frameRate: 30,
                  });
        }, [t, n, u, c, p]),
        null == _
            ? (0, r.jsx)("div", { className: "media-engine-video", style: { width: n, height: u } })
            : (0, r.jsx)(o.A, { streamId: _, style: { width: n, height: u } })
    );
}
