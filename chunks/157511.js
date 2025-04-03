n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(442837),
    a = n(359013),
    i = n(120421),
    c = n(284539),
    l = n(3072),
    u = n(401258),
    d = n(477839),
    f = n(622802),
    p = n(388032),
    m = n(484523),
    g = n(599643);
let b = n(288874),
    y = 100 / d.tH;
function h(e) {
    var t;
    let { isPaused: n } = e,
        h = (0, o.e7)([i.Z], () => i.Z.getNumPurchasesForItemUpgrade(d.yN.SUN, d.uv.SUN_RAISE)),
        x = a.Mq[d.yN.SUN],
        N = (0, s.useMemo)(() => x.getPoints(h), [h, x]),
        v = (0, l.eR)(b),
        [O, j] = (0, c.Z)(d.yN.SUN),
        Z = null != (t = O.lastPlayedSunRiseSound) ? t : 0,
        _ = h * y,
        P = 120 + 16 * h,
        C = -P / 5;
    return (
        (0, s.useEffect)(() => {
            h > Z && (v(), j({ lastPlayedSunRiseSound: h }));
        }, [v, h, Z, j]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    className: m.sun,
                    style: {
                        bottom: 'calc('.concat(_, '% - ').concat(P / 2, 'px)'),
                        right: C,
                        width: P,
                        height: P
                    },
                    src: g,
                    alt: p.NW.string(f.Z.JTkCcX)
                }),
                (0, r.jsx)(u.Z, {
                    itemId: d.yN.SUN,
                    pointsPerInterval: N,
                    interval: 1000,
                    isPaused: n
                })
            ]
        })
    );
}
