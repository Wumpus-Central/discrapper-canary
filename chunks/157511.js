n.d(t, { Z: () => h }), n(388685);
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
        v = (0, s.useMemo)(() => x.getPoints(h), [h, x]),
        O = (0, l.eR)(b),
        [j, N] = (0, c.Z)(d.yN.SUN),
        _ = null != (t = j.lastPlayedSunRiseSound) ? t : 0,
        P = h * y,
        C = 120 + 16 * h,
        Z = -C / 5;
    return (
        (0, s.useEffect)(() => {
            h > _ && (O(), N({ lastPlayedSunRiseSound: h }));
        }, [O, h, _, N]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    className: m.sun,
                    style: {
                        bottom: 'calc('.concat(P, '% - ').concat(C / 2, 'px)'),
                        right: Z,
                        width: C,
                        height: C
                    },
                    src: g,
                    alt: p.intl.string(f.default.JTkCcX)
                }),
                (0, r.jsx)(u.Z, {
                    itemId: d.yN.SUN,
                    pointsPerInterval: v,
                    interval: 1000,
                    isPaused: n
                })
            ]
        })
    );
}
