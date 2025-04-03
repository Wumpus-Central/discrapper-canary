n.d(t, { Z: () => h });
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
let _ = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330
    },
    f = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330
    };
function h(e) {
    var t;
    let { achievementId: n, unlocked: u, size: h = o.EFr.SIZE_40 } = e,
        m = (0, l.ZP)(),
        b = (0, c.oX)(n);
    if (null == b) return null;
    let g = (0, o.UCu)(h),
        { name: E, rarity: C } = b,
        { color: O } = (0, c.F7)(C),
        y = (0, i.wj)(m) ? _ : f,
        v = (g.size - g.offset - 2 * g.stroke) * 0.8,
        N = g.size - g.stroke,
        S = {
            width: 0.4 * v,
            height: 0.4 * v
        },
        x = {
            width: S.width + 1,
            height: S.height + 1,
            right: g.stroke + 1,
            bottom: g.stroke + 1,
            padding: 0
        };
    return (0, r.jsxs)('div', {
        className: d.container,
        style: {
            width: N,
            height: N,
            padding: g.stroke
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
                            S
                        )
                    )
                }),
            u &&
                C === c.EP.LEGENDARY &&
                (0, r.jsx)('div', {
                    className: d.lockContainer,
                    style: x,
                    children: (0, r.jsx)(a.Z, p({ className: d.confettiIcon }, S))
                })
        ]
    });
}
h.Sizes = o.EFr;
