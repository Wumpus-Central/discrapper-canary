n.d(t, { Z: () => z }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(477690),
    f = n(481060),
    _ = n(2052),
    p = n(607070),
    h = n(806966),
    m = n(254494),
    g = n(593618),
    E = n(451478),
    b = n(626135),
    y = n(624138),
    v = n(543241),
    O = n(883661),
    I = n(880949),
    S = n(784222),
    T = n(149203),
    N = n(981631),
    A = n(957825),
    C = n(388032),
    R = n(171166);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    M = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    k = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    j = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    U = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    G = (0, y.Mg)(R.__invalid_unicodeCategoryShortcutHeight),
    B = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    F = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    V = k + M + 2 * U,
    Z = x + M,
    H = Z + (B + 2 * F),
    W = k + j + 2 * U,
    Y = 7;
function K(e) {
    let { activeIndex: t, categoryIndex: n, analyticsContext: o, categories: s, category: l, handleCategorySelect: u, isWindowFocused: d, useReducedMotion: _ } = e,
        p = (0, c.JA)('expression-guild-'.concat(n)),
        h = l.type === T.En.GUILD ? null : l.id,
        m = t === n,
        E = l.type === T.En.GUILD ? l.guild : null,
        y = (0, r.jsxs)(
            f.P3F,
            L(w({}, p), {
                'aria-label': (0, v.Nf)(l, E),
                className: a()({
                    [R.categoryItemGuildCategory]: null != E,
                    [R.categoryItemDefaultCategory]: null == E,
                    [R.categoryItemDefaultCategorySelected]: null == E && m,
                    [R.categoryItemRecentEmoji]: l.type === T.En.RECENT
                }),
                onClick: () => {
                    null != E &&
                        b.default.track(N.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: null == o ? void 0 : o.location,
                            tab: A.X1.EMOJI,
                            guild_id: E.id
                        }),
                        u(n);
                },
                children: [
                    null != E
                        ? (0, r.jsx)(I.Z, {
                              guild: E,
                              isSelected: m,
                              shouldAnimate: !_ && d,
                              isLocked: l.isNitroLocked
                          })
                        : null,
                    null == E && null != h
                        ? (0, r.jsx)(O.Z, {
                              categoryId: h,
                              className: R.categoryIcon,
                              height: k,
                              width: k,
                              size: 'custom'
                          })
                        : null
                ]
            })
        ),
        S = s[n + 1],
        C = null != S && l.type === T.En.GUILD && S.type !== T.En.GUILD;
    return null != E
        ? (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(g.Z, {
                      guild: E,
                      includeActivity: !1,
                      children: (0, r.jsx)('div', { children: y })
                  }),
                  C ? (0, r.jsx)('hr', { className: R.guildCategorySeparator }, 'separator') : null
              ]
          })
        : y;
}
let z = (e) => {
    let { className: t, emojiListRef: n, sectionDescriptors: o, intention: s, channel: c, shouldShowSoundmojiInEmojiPicker: d = !1 } = e,
        g = h.kJ.useStore((e) => e.activeCategoryIndex),
        b = (0, S.Ni)({
            sectionDescriptors: o,
            emojiListRef: n
        }),
        y = (0, _.O)(),
        O = (0, v.kI)(s, c, null == c ? void 0 : c.guild_id, d),
        I = i.useRef(null),
        N = (0, u.e7)([E.Z], () => E.Z.isFocused()),
        A = (0, u.e7)([p.Z], () => p.Z.useReducedMotion, []),
        P = i.useMemo(
            () =>
                l().memoize((e, t) => {
                    let n = O[t];
                    if (null != n)
                        return (0, r.jsx)(
                            K,
                            {
                                activeIndex: g,
                                analyticsContext: y,
                                categories: O,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: b,
                                isWindowFocused: N,
                                useReducedMotion: A
                            },
                            t
                        );
                }),
            [g, y, O, b, N, A]
        ),
        w = i.useMemo(() => [8, 8, 0, 8], []),
        D = i.useCallback(
            (e, t) => {
                let n = O[t];
                if (n.type === T.En.RECENT) return V;
                if (n.type === T.En.GUILD) {
                    let e = O[t + 1];
                    return null != e && e.type !== T.En.GUILD ? H : Z;
                }
                return W;
            },
            [O]
        ),
        {
            nonUnicodeCategoryCount: L,
            firstUnicodeCategoryIndex: x,
            firstUnicodeCategoryOffsetTop: U,
            rowCountBySection: z
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                r = 0;
            O.forEach((i) => {
                i.type === T.En.GUILD ? ((t += 1), (n += 1)) : i.type === T.En.UNICODE ? (r += 1) : ((e += 1), (t += 1));
            });
            let i = V + t * Z + H;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, r]
            };
        }, [O]),
        [q, Q] = i.useState(!0);
    i.useLayoutEffect(() => {
        Q(L >= Y);
    }, [L]);
    let X = i.useCallback(
            (e) => {
                var t;
                let n = null == (t = I.current) ? void 0 : t.getListDimensions();
                null != n && (e + n.height - B >= U ? Q(!1) : Q(!0));
            },
            [U]
        ),
        J = i.useCallback(
            (e) => {
                var t;
                e(x), null == (t = I.current) || t.scrollTo(U);
            },
            [U, x]
        ),
        $ = i.useCallback(
            (e, t) => {
                let n = O[e];
                if (null == n) return 0;
                let r = q ? G : 0;
                if (n.type === T.En.RECENT) return t ? 0 : j;
                if (n.type === T.En.GUILD) {
                    let n = O[e + 1];
                    return null != n && n.type !== T.En.GUILD ? (t ? B + -2 * F + M + r : M) : t ? r : M;
                }
                return t ? M + r : 2 * M;
            },
            [O, q]
        ),
        ee = i.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(i.Fragment, { children: t }, e);
                },
            []
        ),
        et = q ? 'shortcut' : 'hiddenshortcut';
    return (0, r.jsx)(m.Z, {
        categoryListRef: I,
        expressionsListRef: n,
        className: t,
        store: h.kJ,
        categories: O,
        listPadding: w,
        onScroll: X,
        renderCategoryListItem: P,
        renderSection: ee,
        rowCount: O.length,
        categoryHeight: D,
        getScrollOffsetForIndex: $,
        rowCountBySection: z,
        children: (e) =>
            L >= Y &&
            (0, r.jsx)(
                f.P3F,
                {
                    'aria-hidden': !q,
                    'aria-label': C.NW.string(C.t.dT0ct7),
                    className: a()(R.unicodeShortcut, { [R.unicodeShortcutInvisible]: !q }),
                    tabIndex: q ? 0 : -1,
                    onClick: () => J(e),
                    children: (0, r.jsx)(f.EO4, {
                        size: 'custom',
                        color: 'currentColor',
                        height: k,
                        width: k
                    })
                },
                et
            )
    });
};
