n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var s = n(780384),
    r = n(481060),
    a = n(410030),
    l = n(44315),
    o = n(889901),
    c = n(955204),
    d = n(231338),
    u = n(262284);
let m = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    },
    g = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    };
function h(e) {
    var t;
    let { achievementId: n, unlocked: d, size: h = r.AvatarSizes.SIZE_40 } = e,
        p = (0, a.ZP)(),
        x = (0, c.oX)(n);
    if (null == x) return null;
    let f = (0, r.getAvatarSpecs)(h),
        { name: _, rarity: E } = x,
        { color: C } = (0, c.F7)(E),
        T = (0, s.wj)(p) ? m : g,
        S = (f.size - f.offset - 2 * f.stroke) * 0.8,
        b = f.size - f.stroke,
        I = {
            width: 0.4 * S,
            height: 0.4 * S
        },
        N = {
            width: I.width + 1,
            height: I.height + 1,
            right: f.stroke + 1,
            bottom: f.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)('div', {
        className: u.container,
        style: {
            width: b,
            height: b,
            padding: f.stroke
        },
        'aria-label': ''.concat(null !== (t = _()) && void 0 !== t ? t : ''),
        children: [
            (0, i.jsx)('div', {
                className: u.trophyIconContainer,
                children: (0, i.jsx)(r.TrophyIcon, {
                    size: 'custom',
                    color: d ? C : (0, l.Lq)(T.trophy),
                    width: S,
                    height: S
                })
            }),
            !d &&
                (0, i.jsx)('div', {
                    className: u.lockContainer,
                    style: N,
                    children: (0, i.jsx)(r.LockIcon, {
                        size: 'custom',
                        color: (0, l.Lq)(T.locked),
                        ...I
                    })
                }),
            d &&
                E === c.EP.LEGENDARY &&
                (0, i.jsx)('div', {
                    className: u.lockContainer,
                    style: N,
                    children: (0, i.jsx)(o.Z, {
                        className: u.confettiIcon,
                        ...I
                    })
                })
        ]
    });
}
h.Sizes = r.AvatarSizes;
