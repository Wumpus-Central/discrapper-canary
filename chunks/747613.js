var i = r(47120);
var a = r(733860);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(666912),
    _ = r(91192),
    h = r(336317),
    p = r(477690),
    m = r(481060),
    g = r(80932),
    E = r(351773),
    v = r(209613),
    I = r(313201),
    T = r(633302),
    b = r(176354),
    y = r(624138),
    S = r(981631),
    A = r(388032),
    N = r(61788);
let C = 20,
    R = 125,
    O = (0, I.hQ)(),
    D = h.Z.convert.fromCodePoint('1f44f'),
    L = (0, y.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    x = (0, y.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function w(e) {
    switch (h.Z.convert.toCodePoint(e)) {
        case '1f3fb':
            return A.intl.string(A.t.BVK5b2);
        case '1f3fc':
            return A.intl.string(A.t.xJWOKy);
        case '1f3fd':
            return A.intl.string(A.t['MB+T5u']);
        case '1f3fe':
            return A.intl.string(A.t.MODud3);
        case '1f3ff':
            return A.intl.string(A.t['0uzqsb']);
        default:
            return A.intl.string(A.t.bGN1o6);
    }
}
let P = (e) => {
        let { fade: n, surrogate: r, onClick: i, delay: a, index: o } = e,
            l = (0, _.JA)('item-'.concat(o)),
            u = b.ZP.getURL(D + r),
            c = (0, m.useSpring)(
                {
                    opacity: 1,
                    from: { opacity: n ? 0 : 1 },
                    delay: a
                },
                'animate-always'
            );
        return (0, s.jsx)(m.Clickable, {
            ...l,
            role: 'option',
            'aria-selected': 0 === o,
            onClick: () => i(r),
            className: N.diversityEmojiItem,
            children: (0, s.jsx)(f.animated.div, {
                'aria-label': w(r),
                className: N.diversityEmojiItemImage,
                style: {
                    backgroundImage: 'url("'.concat(u, '")'),
                    ...c
                }
            })
        });
    },
    M = (e) => {
        let { id: n, selectedSurrogate: r, onClick: i, hasTabWrapper: a } = e,
            l = (0, v.Z)('diversity'),
            c = (0, m.useSpring)({
                height: (x + 2 * L) * (T.gw.length + 1),
                from: { height: x },
                config: { duration: R }
            });
        o.useEffect(() => {
            l.focusFirstVisibleItem();
        }, [l]);
        let h = ['', ...T.gw];
        return (
            d().remove(h, (e) => e === r),
            h.unshift(r),
            (0, s.jsx)(_.bG, {
                navigator: l,
                children: (0, s.jsx)(_.SJ, {
                    children: (e) => {
                        let { ref: r, ...o } = e;
                        return (0, s.jsx)(f.animated.div, {
                            ...o,
                            id: n,
                            ref: r,
                            className: u()(N.diversitySelectorOptions, { [N.diversitySelectorOptionsHasTabWrapper]: a }),
                            style: c,
                            role: 'listbox',
                            children: h.map((e, n) =>
                                (0, s.jsx)(
                                    P,
                                    {
                                        index: n,
                                        fade: 0 !== n,
                                        delay: n * C,
                                        surrogate: e,
                                        onClick: i
                                    },
                                    n
                                )
                            )
                        });
                    }
                })
            })
        );
    },
    k = (e) => {
        let { searchBarRef: n, selectedSurrogate: r, className: i, hasTabWrapper: a } = e,
            l = b.ZP.getURL(D + r),
            [u, c] = o.useState(!1),
            d = (0, E.Z)(null, () => c(!1)),
            f = o.useRef(null),
            _ = () => {
                c(!0);
            },
            h = (e) => {
                e.keyCode === S.yXg.ESCAPE && (e.stopPropagation(), c(!1), null != f.current && f.current.focus());
            },
            p = (e) => {
                var r;
                (0, g.t0)(e), c(!1), null === (r = n.current) || void 0 === r || r.focus();
            };
        return (0, s.jsxs)('div', {
            ref: d,
            className: i,
            children: [
                (0, s.jsx)(m.Clickable, {
                    innerRef: f,
                    className: N.diversitySelectorButton,
                    onClick: _,
                    'aria-label': A.intl.string(A.t.pAVHxc),
                    'aria-haspopup': !0,
                    'aria-expanded': u,
                    'aria-controls': O,
                    tabIndex: u ? -1 : 0,
                    children: (0, s.jsx)('div', {
                        className: N.diversityEmojiItemImage,
                        style: { backgroundImage: 'url("'.concat(l, '")') }
                    })
                }),
                u
                    ? (0, s.jsx)('div', {
                          onKeyDown: h,
                          children: (0, s.jsx)(M, {
                              id: O,
                              hasTabWrapper: a,
                              selectedSurrogate: r,
                              onClick: p
                          })
                      })
                    : null
            ]
        });
    };
n.Z = k;
