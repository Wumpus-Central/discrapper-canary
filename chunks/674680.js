n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(780384),
    o = n(481060),
    l = n(410030),
    s = n(44315),
    a = n(889901),
    c = n(955204),
    u = n(231338),
    d = n(835115);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let h = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330
    },
    _ = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330
    };
function f(e) {
    var t;
    let { achievementId: n, unlocked: u, size: f = o.EFr.SIZE_40 } = e,
        m = (0, l.ZP)(),
        g = (0, c.oX)(n);
    if (null == g) return null;
    let b = (0, o.UCu)(f),
        { name: E, rarity: C } = g,
        { color: O } = (0, c.F7)(C),
        y = (0, i.wj)(m) ? h : _,
        v = (b.size - b.offset - 2 * b.stroke) * 0.8,
        S = b.size - b.stroke,
        N = {
            width: 0.4 * v,
            height: 0.4 * v
        },
        x = {
            width: N.width + 1,
            height: N.height + 1,
            right: b.stroke + 1,
            bottom: b.stroke + 1,
            padding: 0
        };
    return (0, r.jsxs)('div', {
        className: d.container,
        style: {
            width: S,
            height: S,
            padding: b.stroke
        },
        'aria-label': ''.concat(null != (t = E()) ? t : ''),
        children: [
            (0, r.jsx)('div', {
                className: d.trophyIconContainer,
                children: (0, r.jsx)(o.rm8, {
                    size: 'custom',
                    color: u ? O : (0, s.Lq)(y.trophy),
                    width: v,
                    height: v
                })
            }),
            !u &&
                (0, r.jsx)('div', {
                    className: d.lockContainer,
                    style: x,
                    children: (0, r.jsx)(
                        o.mBM,
                        p(
                            {
                                size: 'custom',
                                color: (0, s.Lq)(y.locked)
                            },
                            N
                        )
                    )
                }),
            u &&
                C === c.EP.LEGENDARY &&
                (0, r.jsx)('div', {
                    className: d.lockContainer,
                    style: x,
                    children: (0, r.jsx)(a.Z, p({ className: d.confettiIcon }, N))
                })
        ]
    });
}
f.Sizes = o.EFr;
