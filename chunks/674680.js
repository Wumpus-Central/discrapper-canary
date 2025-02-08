n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(780384),
    r = n(481060),
    s = n(410030),
    a = n(44315),
    o = n(889901),
    c = n(955204),
    d = n(231338),
    u = n(262284);
let _ = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    },
    E = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    };
function h(e) {
    var t;
    let { achievementId: n, unlocked: d, size: h = r.EFr.SIZE_40 } = e,
        p = (0, s.ZP)(),
        I = (0, c.oX)(n);
    if (null == I) return null;
    let m = (0, r.UCu)(h),
        { name: C, rarity: T } = I,
        { color: N } = (0, c.F7)(T),
        g = (0, l.wj)(p) ? _ : E,
        S = (m.size - m.offset - 2 * m.stroke) * 0.8,
        R = m.size - m.stroke,
        f = {
            width: 0.4 * S,
            height: 0.4 * S
        },
        A = {
            width: f.width + 1,
            height: f.height + 1,
            right: m.stroke + 1,
            bottom: m.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)('div', {
        className: u.container,
        style: {
            width: R,
            height: R,
            padding: m.stroke
        },
        'aria-label': ''.concat(null !== (t = C()) && void 0 !== t ? t : ''),
        children: [
            (0, i.jsx)('div', {
                className: u.trophyIconContainer,
                children: (0, i.jsx)(r.rm8, {
                    size: 'custom',
                    color: d ? N : (0, a.Lq)(g.trophy),
                    width: S,
                    height: S
                })
            }),
            !d &&
                (0, i.jsx)('div', {
                    className: u.lockContainer,
                    style: A,
                    children: (0, i.jsx)(r.mBM, {
                        size: 'custom',
                        color: (0, a.Lq)(g.locked),
                        ...f
                    })
                }),
            d &&
                T === c.EP.LEGENDARY &&
                (0, i.jsx)('div', {
                    className: u.lockContainer,
                    style: A,
                    children: (0, i.jsx)(o.Z, {
                        className: u.confettiIcon,
                        ...f
                    })
                })
        ]
    });
}
h.Sizes = r.EFr;
