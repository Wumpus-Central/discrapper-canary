n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(442837),
    i = n(359013),
    a = n(120421),
    c = n(284539),
    l = n(3072),
    u = n(401258),
    d = n(477839),
    f = n(884479),
    p = n(388032),
    m = n(663708),
    g = n(599643);
let b = n(288874),
    y = 100 / d.tH;
function h(e) {
    var t;
    let { isPaused: n } = e,
        h = (0, o.e7)([a.Z], () => a.Z.getNumPurchasesForItemUpgrade(d.yN.SUN, d.uv.SUN_RAISE)),
        v = i.Mq[d.yN.SUN],
        x = (0, s.useMemo)(() => v.getPoints(h), [h, v]),
        N = (0, l.eR)(b),
        [O, j] = (0, c.Z)(d.yN.SUN),
        Z = null !== (t = O.lastPlayedSunRiseSound) && void 0 !== t ? t : 0,
        _ = h * y,
        P = 120 + 16 * h,
        C = -P / 5;
    return (
        (0, s.useEffect)(() => {
            h > Z && (N(), j({ lastPlayedSunRiseSound: h }));
        }, [N, h, Z, j]),
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
                    pointsPerInterval: x,
                    interval: 1000,
                    isPaused: n
                })
            ]
        })
    );
}
