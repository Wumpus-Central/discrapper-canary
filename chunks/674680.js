i.d(e, { Z: () => _ });
var n = i(200651);
i(192379);
var r = i(780384),
    s = i(481060),
    o = i(410030),
    l = i(44315),
    a = i(889901),
    c = i(955204),
    d = i(231338),
    h = i(262284);
let u = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    },
    E = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    };
function _(t) {
    var e;
    let { achievementId: i, unlocked: d, size: _ = s.EFr.SIZE_40 } = t,
        g = (0, o.ZP)(),
        L = (0, c.oX)(i);
    if (null == L) return null;
    let C = (0, s.UCu)(_),
        { name: m, rarity: p } = L,
        { color: O } = (0, c.F7)(p),
        k = (0, r.wj)(g) ? u : E,
        T = (C.size - C.offset - 2 * C.stroke) * 0.8,
        U = C.size - C.stroke,
        R = {
            width: 0.4 * T,
            height: 0.4 * T
        },
        v = {
            width: R.width + 1,
            height: R.height + 1,
            right: C.stroke + 1,
            bottom: C.stroke + 1,
            padding: 0
        };
    return (0, n.jsxs)('div', {
        className: h.container,
        style: {
            width: U,
            height: U,
            padding: C.stroke
        },
        'aria-label': ''.concat(null !== (e = m()) && void 0 !== e ? e : ''),
        children: [
            (0, n.jsx)('div', {
                className: h.trophyIconContainer,
                children: (0, n.jsx)(s.rm8, {
                    size: 'custom',
                    color: d ? O : (0, l.Lq)(k.trophy),
                    width: T,
                    height: T
                })
            }),
            !d &&
                (0, n.jsx)('div', {
                    className: h.lockContainer,
                    style: v,
                    children: (0, n.jsx)(s.mBM, {
                        size: 'custom',
                        color: (0, l.Lq)(k.locked),
                        ...R
                    })
                }),
            d &&
                p === c.EP.LEGENDARY &&
                (0, n.jsx)('div', {
                    className: h.lockContainer,
                    style: v,
                    children: (0, n.jsx)(a.Z, {
                        className: h.confettiIcon,
                        ...R
                    })
                })
        ]
    });
}
_.Sizes = s.EFr;
