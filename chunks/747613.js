var i = r(47120);
var a = r(733860);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(642128),
    p = r(91192),
    h = r(336317),
    _ = r(477690),
    m = r(481060),
    g = r(80932),
    E = r(351773),
    v = r(209613),
    y = r(313201),
    b = r(633302),
    I = r(176354),
    T = r(624138),
    S = r(981631),
    A = r(388032),
    C = r(61788);
let N = 20,
    R = 125,
    O = (0, y.hQ)(),
    D = h.Z.convert.fromCodePoint('1f44f'),
    x = (0, T.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    L = (0, T.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
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
        let { fade: n, surrogate: r, onClick: i, delay: a, index: s } = e,
            l = (0, p.JA)('item-'.concat(s)),
            u = I.ZP.getURL(D + r),
            c = (0, m.useSpring)(
                {
                    opacity: 1,
                    from: { opacity: n ? 0 : 1 },
                    delay: a
                },
                'animate-always'
            );
        return (0, o.jsx)(m.Clickable, {
            ...l,
            role: 'option',
            'aria-selected': 0 === s,
            onClick: () => i(r),
            className: C.diversityEmojiItem,
            children: (0, o.jsx)(f.animated.div, {
                'aria-label': w(r),
                className: C.diversityEmojiItemImage,
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
                height: (L + 2 * x) * (b.gw.length + 1),
                from: { height: L },
                config: { duration: R }
            });
        s.useEffect(() => {
            l.focusFirstVisibleItem();
        }, [l]);
        let h = ['', ...b.gw];
        return (
            d().remove(h, (e) => e === r),
            h.unshift(r),
            (0, o.jsx)(p.bG, {
                navigator: l,
                children: (0, o.jsx)(p.SJ, {
                    children: (e) => {
                        let { ref: r, ...s } = e;
                        return (0, o.jsx)(f.animated.div, {
                            ...s,
                            id: n,
                            ref: r,
                            className: u()(C.diversitySelectorOptions, { [C.diversitySelectorOptionsHasTabWrapper]: a }),
                            style: c,
                            role: 'listbox',
                            children: h.map((e, n) =>
                                (0, o.jsx)(
                                    P,
                                    {
                                        index: n,
                                        fade: 0 !== n,
                                        delay: n * N,
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
            l = I.ZP.getURL(D + r),
            [u, c] = s.useState(!1),
            d = (0, E.Z)(null, () => c(!1)),
            f = s.useRef(null),
            p = () => {
                c(!0);
            },
            h = (e) => {
                e.keyCode === S.yXg.ESCAPE && (e.stopPropagation(), c(!1), null != f.current && f.current.focus());
            },
            _ = (e) => {
                var r;
                (0, g.t0)(e), c(!1), null === (r = n.current) || void 0 === r || r.focus();
            };
        return (0, o.jsxs)('div', {
            ref: d,
            className: i,
            children: [
                (0, o.jsx)(m.Clickable, {
                    innerRef: f,
                    className: C.diversitySelectorButton,
                    onClick: p,
                    'aria-label': A.intl.string(A.t.pAVHxc),
                    'aria-haspopup': !0,
                    'aria-expanded': u,
                    'aria-controls': O,
                    tabIndex: u ? -1 : 0,
                    children: (0, o.jsx)('div', {
                        className: C.diversityEmojiItemImage,
                        style: { backgroundImage: 'url("'.concat(l, '")') }
                    })
                }),
                u
                    ? (0, o.jsx)('div', {
                          onKeyDown: h,
                          children: (0, o.jsx)(M, {
                              id: O,
                              hasTabWrapper: a,
                              selectedSurrogate: r,
                              onClick: _
                          })
                      })
                    : null
            ]
        });
    };
n.Z = k;
