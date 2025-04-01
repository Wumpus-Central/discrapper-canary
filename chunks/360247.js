n.d(t, { Z: () => d });
var r = n(200651),
    s = n(192379),
    o = n(70097),
    i = n(359013),
    a = n(401258),
    c = n(477839),
    l = n(134319),
    u = n(34768);
function d(e) {
    let { isPaused: t } = e,
        n = (0, s.useRef)(null),
        d = i.Mq[c.yN.POURING_WATER].points;
    return (
        (0, s.useEffect)(() => {
            var e, r;
            t ? null === (e = n.current) || void 0 === e || e.pause() : null === (r = n.current) || void 0 === r || r.play();
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
                (0, r.jsx)(a.Z, {
                    itemId: c.yN.AT_SOMEONE,
                    pointsPerInterval: d,
                    interval: 1000,
                    isPaused: t
                })
            ]
        })
    );
}
