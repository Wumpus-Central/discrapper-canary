n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(780384),
    l = n(481060),
    o = n(410030),
    s = n(44315),
    a = n(889901),
    c = n(955204),
    u = n(231338),
    d = n(835115);
function h(e) {
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
let p = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330
    },
    f = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330
    };
function g(e) {
    var t;
    let { achievementId: n, unlocked: u, size: g = l.EFr.SIZE_40 } = e,
        m = (0, o.ZP)(),
        b = (0, c.oX)(n);
    if (null == b) return null;
    let y = (0, l.UCu)(g),
        { name: _, rarity: v } = b,
        { color: O } = (0, c.F7)(v),
        C = (0, i.wj)(m) ? p : f,
        j = (y.size - y.offset - 2 * y.stroke) * 0.8,
        S = y.size - y.stroke,
        E = {
            width: 0.4 * j,
            height: 0.4 * j
        },
        x = {
            width: E.width + 1,
            height: E.height + 1,
            right: y.stroke + 1,
            bottom: y.stroke + 1,
            padding: 0
        };
    return (0, r.jsxs)('div', {
        className: d.container,
        style: {
            width: S,
            height: S,
            padding: y.stroke
        },
        'aria-label': ''.concat(null != (t = _()) ? t : ''),
        children: [
            (0, r.jsx)('div', {
                className: d.trophyIconContainer,
                children: (0, r.jsx)(l.rm8, {
                    size: 'custom',
                    color: u ? O : (0, s.Lq)(C.trophy),
                    width: j,
                    height: j
                })
            }),
            !u &&
                (0, r.jsx)('div', {
                    className: d.lockContainer,
                    style: x,
                    children: (0, r.jsx)(
                        l.mBM,
                        h(
                            {
                                size: 'custom',
                                color: (0, s.Lq)(C.locked)
                            },
                            E
                        )
                    )
                }),
            u &&
                v === c.EP.LEGENDARY &&
                (0, r.jsx)('div', {
                    className: d.lockContainer,
                    style: x,
                    children: (0, r.jsx)(a.Z, h({ className: d.confettiIcon }, E))
                })
        ]
    });
}
g.Sizes = l.EFr;
