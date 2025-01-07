n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(780384),
    a = n(481060),
    s = n(410030),
    l = n(44315),
    o = n(889901),
    c = n(955204),
    d = n(231338),
    u = n(262284);
let g = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    },
    m = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    };
function f(e) {
    var t;
    let { achievementId: n, unlocked: d, size: f = a.AvatarSizes.SIZE_40 } = e,
        p = (0, s.ZP)(),
        _ = (0, c.oX)(n);
    if (null == _) return null;
    let h = (0, a.getAvatarSpecs)(f),
        { name: x, rarity: E } = _,
        { color: b } = (0, c.F7)(E),
        C = (0, r.wj)(p) ? g : m,
        v = (h.size - h.offset - 2 * h.stroke) * 0.8,
        T = h.size - h.stroke,
        N = {
            width: 0.4 * v,
            height: 0.4 * v
        },
        I = {
            width: N.width + 1,
            height: N.height + 1,
            right: h.stroke + 1,
            bottom: h.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)('div', {
        className: u.container,
        style: {
            width: T,
            height: T,
            padding: h.stroke
        },
        'aria-label': ''.concat(null !== (t = x()) && void 0 !== t ? t : ''),
        children: [
            (0, i.jsx)('div', {
                className: u.trophyIconContainer,
                children: (0, i.jsx)(a.TrophyIcon, {
                    size: 'custom',
                    color: d ? b : (0, l.Lq)(C.trophy),
                    width: v,
                    height: v
                })
            }),
            !d &&
                (0, i.jsx)('div', {
                    className: u.lockContainer,
                    style: I,
                    children: (0, i.jsx)(a.LockIcon, {
                        size: 'custom',
                        color: (0, l.Lq)(C.locked),
                        ...N
                    })
                }),
            d &&
                E === c.EP.LEGENDARY &&
                (0, i.jsx)('div', {
                    className: u.lockContainer,
                    style: I,
                    children: (0, i.jsx)(o.Z, {
                        className: u.confettiIcon,
                        ...N
                    })
                })
        ]
    });
}
f.Sizes = a.AvatarSizes;
