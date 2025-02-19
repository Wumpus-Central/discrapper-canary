n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(780384),
    l = n(481060),
    o = n(410030),
    s = n(44315),
    a = n(889901),
    c = n(955204),
    u = n(231338),
    d = n(548630);
function _(e) {
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
let E = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330
    },
    p = {
        trophy: u.Il.PRIMARY_400,
        locked: u.Il.PRIMARY_400,
        unlocked: u.Il.GREEN_330
    };
function h(e) {
    var t;
    let { achievementId: n, unlocked: u, size: h = l.EFr.SIZE_40 } = e,
        f = (0, o.ZP)(),
        m = (0, c.oX)(n);
    if (null == m) return null;
    let O = (0, l.UCu)(h),
        { name: N, rarity: g } = m,
        { color: I } = (0, c.F7)(g),
        C = (0, i.wj)(f) ? E : p,
        b = (O.size - O.offset - 2 * O.stroke) * 0.8,
        T = O.size - O.stroke,
        S = {
            width: 0.4 * b,
            height: 0.4 * b
        },
        y = {
            width: S.width + 1,
            height: S.height + 1,
            right: O.stroke + 1,
            bottom: O.stroke + 1,
            padding: 0
        };
    return (0, r.jsxs)('div', {
        className: d.container,
        style: {
            width: T,
            height: T,
            padding: O.stroke
        },
        'aria-label': ''.concat(null !== (t = N()) && void 0 !== t ? t : ''),
        children: [
            (0, r.jsx)('div', {
                className: d.trophyIconContainer,
                children: (0, r.jsx)(l.rm8, {
                    size: 'custom',
                    color: u ? I : (0, s.Lq)(C.trophy),
                    width: b,
                    height: b
                })
            }),
            !u &&
                (0, r.jsx)('div', {
                    className: d.lockContainer,
                    style: y,
                    children: (0, r.jsx)(
                        l.mBM,
                        _(
                            {
                                size: 'custom',
                                color: (0, s.Lq)(C.locked)
                            },
                            S
                        )
                    )
                }),
            u &&
                g === c.EP.LEGENDARY &&
                (0, r.jsx)('div', {
                    className: d.lockContainer,
                    style: y,
                    children: (0, r.jsx)(a.Z, _({ className: d.confettiIcon }, S))
                })
        ]
    });
}
h.Sizes = l.EFr;
