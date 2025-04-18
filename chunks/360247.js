n.d(t, { Z: () => d });
var r = n(200651),
    s = n(192379),
    o = n(70097),
    a = n(359013),
    i = n(401258),
    c = n(477839),
    l = n(6911),
    u = n(34768);
function d(e) {
    let { isPaused: t } = e,
        n = (0, s.useRef)(null),
        d = a.Mq[c.yN.POURING_WATER].points;
    return (
        (0, s.useEffect)(() => {
            var e, r;
            t ? null == (e = n.current) || e.pause() : null == (r = n.current) || r.play();
        }, [t]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.Z, {
                    ref: n,
                    className: l.video,
                    src: u.Z,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    autoPlay: !0
                }),
                (0, r.jsx)(i.Z, {
                    itemId: c.yN.AT_SOMEONE,
                    pointsPerInterval: d,
                    interval: 1000,
                    isPaused: t
                })
            ]
        })
    );
}
