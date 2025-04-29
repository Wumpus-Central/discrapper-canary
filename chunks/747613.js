n.d(t, { Z: () => G }), n(388685), n(290780);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(481752),
    u = n(91192),
    d = n(336317),
    f = n(477690),
    _ = n(481060),
    p = n(80932),
    h = n(351773),
    m = n(209613),
    g = n(313201),
    E = n(633302),
    b = n(176354),
    y = n(624138),
    O = n(981631),
    v = n(388032),
    I = n(140847);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = 20,
    w = 125,
    D = (0, g.hQ)(),
    L = d.Z.convert.fromCodePoint('1f44f'),
    x = (0, y.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    M = (0, y.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function k(e) {
    switch (d.Z.convert.toCodePoint(e)) {
        case '1f3fb':
            return v.intl.string(v.t.BVK5b2);
        case '1f3fc':
            return v.intl.string(v.t.xJWOKy);
        case '1f3fd':
            return v.intl.string(v.t['MB+T5u']);
        case '1f3fe':
            return v.intl.string(v.t.MODud3);
        case '1f3ff':
            return v.intl.string(v.t['0uzqsb']);
        default:
            return v.intl.string(v.t.bGN1o6);
    }
}
let j = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: o, index: a } = e,
            s = (0, u.JA)('item-'.concat(a)),
            l = b.ZP.getURL(L + n),
            d = (0, _.q_F)(
                {
                    opacity: 1,
                    from: { opacity: +!t },
                    delay: o
                },
                'animate-always'
            );
        return (0, r.jsx)(
            _.P3F,
            N(T({}, s), {
                role: 'option',
                'aria-selected': 0 === a,
                onClick: () => i(n),
                className: I.diversityEmojiItem,
                children: (0, r.jsx)(c.animated.div, {
                    'aria-label': k(n),
                    className: I.diversityEmojiItemImage,
                    style: T({ backgroundImage: 'url("'.concat(l, '")') }, d)
                })
            })
        );
    },
    U = (e) => {
        let { id: t, selectedSurrogate: n, onClick: o, hasTabWrapper: s } = e,
            d = (0, m.Z)('diversity'),
            f = (0, _.q_F)({
                height: (M + 2 * x) * (E.gw.length + 1),
                from: { height: M },
                config: { duration: w }
            });
        i.useEffect(() => {
            d.focusFirstVisibleItem();
        }, [d]);
        let p = ['', ...E.gw];
        return (
            l().remove(p, (e) => e === n),
            p.unshift(n),
            (0, r.jsx)(u.bG, {
                navigator: d,
                children: (0, r.jsx)(u.SJ, {
                    children: (e) => {
                        var { ref: n } = e,
                            i = C(e, ['ref']);
                        return (0, r.jsx)(
                            c.animated.div,
                            N(T({}, i), {
                                id: t,
                                ref: n,
                                className: a()(I.diversitySelectorOptions, { [I.diversitySelectorOptionsHasTabWrapper]: s }),
                                style: f,
                                role: 'listbox',
                                children: p.map((e, t) =>
                                    (0, r.jsx)(
                                        j,
                                        {
                                            index: t,
                                            fade: 0 !== t,
                                            delay: t * P,
                                            surrogate: e,
                                            onClick: o
                                        },
                                        t
                                    )
                                )
                            })
                        );
                    }
                })
            })
        );
    },
    G = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: o, hasTabWrapper: a } = e,
            s = b.ZP.getURL(L + n),
            [l, c] = i.useState(!1),
            u = (0, h.Z)(null, () => c(!1)),
            d = i.useRef(null),
            f = () => {
                c(!0);
            },
            m = (e) => {
                e.keyCode === O.yXg.ESCAPE && (e.stopPropagation(), c(!1), null != d.current && d.current.focus());
            },
            g = (e) => {
                var n;
                (0, p.t0)(e), c(!1), null == (n = t.current) || n.focus();
            };
        return (0, r.jsxs)('div', {
            ref: u,
            className: o,
            children: [
                (0, r.jsx)(_.P3F, {
                    innerRef: d,
                    className: I.diversitySelectorButton,
                    onClick: f,
                    'aria-label': v.intl.string(v.t.pAVHxc),
                    'aria-haspopup': !0,
                    'aria-expanded': l,
                    'aria-controls': D,
                    tabIndex: l ? -1 : 0,
                    children: (0, r.jsx)('div', {
                        className: I.diversityEmojiItemImage,
                        style: { backgroundImage: 'url("'.concat(s, '")') }
                    })
                }),
                l
                    ? (0, r.jsx)('div', {
                          onKeyDown: m,
                          children: (0, r.jsx)(U, {
                              id: D,
                              hasTabWrapper: a,
                              selectedSurrogate: n,
                              onClick: g
                          })
                      })
                    : null
            ]
        });
    };
