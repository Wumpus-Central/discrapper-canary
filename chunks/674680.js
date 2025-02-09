n.d(t, { Z: () => L });
var e = n(200651);
n(192379);
var r = n(780384),
    l = n(481060),
    s = n(410030),
    o = n(44315),
    c = n(889901),
    a = n(955204),
    d = n(231338),
    E = n(320266);
let _ = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    },
    h = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    };
function L(i) {
    var t;
    let { achievementId: n, unlocked: d, size: L = l.EFr.SIZE_40 } = i,
        u = (0, s.ZP)(),
        O = (0, a.oX)(n);
    if (null == O) return null;
    let p = (0, l.UCu)(L),
        { name: T, rarity: U } = O,
        { color: g } = (0, a.F7)(U),
        m = (0, r.wj)(u) ? _ : h,
        k = (p.size - p.offset - 2 * p.stroke) * 0.8,
        C = p.size - p.stroke,
        A = {
            width: 0.4 * k,
            height: 0.4 * k
        },
        N = {
            width: A.width + 1,
            height: A.height + 1,
            right: p.stroke + 1,
            bottom: p.stroke + 1,
            padding: 0
        };
    return (0, e.jsxs)('div', {
        className: E.container,
        style: {
            width: C,
            height: C,
            padding: p.stroke
        },
        'aria-label': ''.concat(null !== (t = T()) && void 0 !== t ? t : ''),
        children: [
            (0, e.jsx)('div', {
                className: E.trophyIconContainer,
                children: (0, e.jsx)(l.rm8, {
                    size: 'custom',
                    color: d ? g : (0, o.Lq)(m.trophy),
                    width: k,
                    height: k
                })
            }),
            !d &&
                (0, e.jsx)('div', {
                    className: E.lockContainer,
                    style: N,
                    children: (0, e.jsx)(l.mBM, {
                        size: 'custom',
                        color: (0, o.Lq)(m.locked),
                        ...A
                    })
                }),
            d &&
                U === a.EP.LEGENDARY &&
                (0, e.jsx)('div', {
                    className: E.lockContainer,
                    style: N,
                    children: (0, e.jsx)(c.Z, {
                        className: E.confettiIcon,
                        ...A
                    })
                })
        ]
    });
}
L.Sizes = l.EFr;
