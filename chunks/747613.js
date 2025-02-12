n.d(t, { Z: () => P }), n(47120), n(733860);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(642128),
    c = n(91192),
    d = n(336317),
    f = n(477690),
    _ = n(481060),
    p = n(80932),
    h = n(351773),
    m = n(209613),
    g = n(313201),
    E = n(633302),
    v = n(176354),
    y = n(624138),
    I = n(981631),
    T = n(388032),
    b = n(696401);
let S = 20,
    A = 125,
    N = (0, g.hQ)(),
    C = d.Z.convert.fromCodePoint('1f44f'),
    R = (0, y.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    O = (0, y.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function D(e) {
    switch (d.Z.convert.toCodePoint(e)) {
        case '1f3fb':
            return T.intl.string(T.t.BVK5b2);
        case '1f3fc':
            return T.intl.string(T.t.xJWOKy);
        case '1f3fd':
            return T.intl.string(T.t['MB+T5u']);
        case '1f3fe':
            return T.intl.string(T.t.MODud3);
        case '1f3ff':
            return T.intl.string(T.t['0uzqsb']);
        default:
            return T.intl.string(T.t.bGN1o6);
    }
}
let L = (e) => {
        let { fade: t, surrogate: n, onClick: r, delay: a, index: s } = e,
            o = (0, c.JA)('item-'.concat(s)),
            l = v.ZP.getURL(C + n),
            d = (0, _.q_F)(
                {
                    opacity: 1,
                    from: { opacity: t ? 0 : 1 },
                    delay: a
                },
                'animate-always'
            );
        return (0, i.jsx)(_.P3F, {
            ...o,
            role: 'option',
            'aria-selected': 0 === s,
            onClick: () => r(n),
            className: b.diversityEmojiItem,
            children: (0, i.jsx)(u.animated.div, {
                'aria-label': D(n),
                className: b.diversityEmojiItemImage,
                style: {
                    backgroundImage: 'url("'.concat(l, '")'),
                    ...d
                }
            })
        });
    },
    x = (e) => {
        let { id: t, selectedSurrogate: n, onClick: a, hasTabWrapper: o } = e,
            d = (0, m.Z)('diversity'),
            f = (0, _.q_F)({
                height: (O + 2 * R) * (E.gw.length + 1),
                from: { height: O },
                config: { duration: A }
            });
        r.useEffect(() => {
            d.focusFirstVisibleItem();
        }, [d]);
        let p = ['', ...E.gw];
        return (
            l().remove(p, (e) => e === n),
            p.unshift(n),
            (0, i.jsx)(c.bG, {
                navigator: d,
                children: (0, i.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: n, ...r } = e;
                        return (0, i.jsx)(u.animated.div, {
                            ...r,
                            id: t,
                            ref: n,
                            className: s()(b.diversitySelectorOptions, { [b.diversitySelectorOptionsHasTabWrapper]: o }),
                            style: f,
                            role: 'listbox',
                            children: p.map((e, t) =>
                                (0, i.jsx)(
                                    L,
                                    {
                                        index: t,
                                        fade: 0 !== t,
                                        delay: t * S,
                                        surrogate: e,
                                        onClick: a
                                    },
                                    t
                                )
                            )
                        });
                    }
                })
            })
        );
    },
    P = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: a, hasTabWrapper: s } = e,
            o = v.ZP.getURL(C + n),
            [l, u] = r.useState(!1),
            c = (0, h.Z)(null, () => u(!1)),
            d = r.useRef(null),
            f = () => {
                u(!0);
            },
            m = (e) => {
                e.keyCode === I.yXg.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus());
            },
            g = (e) => {
                var n;
                (0, p.t0)(e), u(!1), null === (n = t.current) || void 0 === n || n.focus();
            };
        return (0, i.jsxs)('div', {
            ref: c,
            className: a,
            children: [
                (0, i.jsx)(_.P3F, {
                    innerRef: d,
                    className: b.diversitySelectorButton,
                    onClick: f,
                    'aria-label': T.intl.string(T.t.pAVHxc),
                    'aria-haspopup': !0,
                    'aria-expanded': l,
                    'aria-controls': N,
                    tabIndex: l ? -1 : 0,
                    children: (0, i.jsx)('div', {
                        className: b.diversityEmojiItemImage,
                        style: { backgroundImage: 'url("'.concat(o, '")') }
                    })
                }),
                l
                    ? (0, i.jsx)('div', {
                          onKeyDown: m,
                          children: (0, i.jsx)(x, {
                              id: N,
                              hasTabWrapper: s,
                              selectedSurrogate: n,
                              onClick: g
                          })
                      })
                    : null
            ]
        });
    };
