n.d(t, { Z: () => H }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(91192),
    c = n(442837),
    d = n(477690),
    f = n(481060),
    _ = n(2052),
    p = n(607070),
    h = n(806966),
    m = n(254494),
    g = n(593618),
    E = n(451478),
    v = n(626135),
    y = n(624138),
    I = n(543241),
    T = n(883661),
    b = n(880949),
    S = n(784222),
    A = n(149203),
    N = n(981631),
    C = n(957825),
    R = n(388032),
    O = n(220057);
let D = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    L = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    x = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    P = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    w = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    M = (0, y.Mg)(O.__invalid_unicodeCategoryShortcutHeight),
    k = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    U = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    G = x + L + 2 * w,
    B = D + L,
    Z = B + (k + 2 * U),
    F = x + P + 2 * w,
    V = 7;
function j(e) {
    let { activeIndex: t, categoryIndex: n, analyticsContext: a, categories: o, category: l, handleCategorySelect: c, isWindowFocused: d, useReducedMotion: _ } = e,
        p = (0, u.JA)('expression-guild-'.concat(n)),
        h = l.type === A.En.GUILD ? null : l.id,
        m = t === n,
        E = l.type === A.En.GUILD ? l.guild : null,
        y = (0, i.jsxs)(f.P3F, {
            ...p,
            'aria-label': (0, I.Nf)(l, E),
            className: s()({
                [O.categoryItemGuildCategory]: null != E,
                [O.categoryItemDefaultCategory]: null == E,
                [O.categoryItemDefaultCategorySelected]: null == E && m,
                [O.categoryItemRecentEmoji]: l.type === A.En.RECENT
            }),
            onClick: () => {
                null != E &&
                    v.default.track(N.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: null == a ? void 0 : a.location,
                        tab: C.X1.EMOJI,
                        guild_id: E.id
                    }),
                    c(n);
            },
            children: [
                null != E
                    ? (0, i.jsx)(b.Z, {
                          guild: E,
                          isSelected: m,
                          shouldAnimate: !_ && d,
                          isLocked: l.isNitroLocked
                      })
                    : null,
                null == E && null != h
                    ? (0, i.jsx)(T.Z, {
                          categoryId: h,
                          className: O.categoryIcon,
                          height: x,
                          width: x,
                          size: 'custom'
                      })
                    : null
            ]
        }),
        S = o[n + 1],
        R = null != S && l.type === A.En.GUILD && S.type !== A.En.GUILD;
    return null != E
        ? (0, i.jsxs)(r.Fragment, {
              children: [
                  (0, i.jsx)(g.Z, {
                      guild: E,
                      includeActivity: !1,
                      children: (0, i.jsx)('div', { children: y })
                  }),
                  R ? (0, i.jsx)('hr', { className: O.guildCategorySeparator }, 'separator') : null
              ]
          })
        : y;
}
let H = (e) => {
    let { className: t, emojiListRef: n, sectionDescriptors: a, intention: o, channel: u, shouldShowSoundmojiInEmojiPicker: d = !1 } = e,
        g = h.kJ.useStore((e) => e.activeCategoryIndex),
        v = (0, S.Ni)({
            sectionDescriptors: a,
            emojiListRef: n
        }),
        y = (0, _.O)(),
        T = (0, I.kI)(o, u, null == u ? void 0 : u.guild_id, d),
        b = r.useRef(null),
        N = (0, c.e7)([E.Z], () => E.Z.isFocused()),
        C = (0, c.e7)([p.Z], () => p.Z.useReducedMotion, []),
        D = r.useMemo(
            () =>
                l().memoize((e, t) => {
                    let n = T[t];
                    if (null != n)
                        return (0, i.jsx)(
                            j,
                            {
                                activeIndex: g,
                                analyticsContext: y,
                                categories: T,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: v,
                                isWindowFocused: N,
                                useReducedMotion: C
                            },
                            t
                        );
                }),
            [g, y, T, v, N, C]
        ),
        w = r.useMemo(() => [8, 8, 0, 8], []),
        H = r.useCallback(
            (e, t) => {
                let n = T[t];
                if (n.type === A.En.RECENT) return G;
                if (n.type === A.En.GUILD) {
                    let e = T[t + 1];
                    return null != e && e.type !== A.En.GUILD ? Z : B;
                }
                return F;
            },
            [T]
        ),
        {
            nonUnicodeCategoryCount: Y,
            firstUnicodeCategoryIndex: W,
            firstUnicodeCategoryOffsetTop: K,
            rowCountBySection: z
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            T.forEach((r) => {
                r.type === A.En.GUILD ? ((t += 1), (n += 1)) : r.type === A.En.UNICODE ? (i += 1) : ((e += 1), (t += 1));
            });
            let r = G + t * B + Z;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: [e, n, i]
            };
        }, [T]),
        [q, Q] = r.useState(!0);
    r.useLayoutEffect(() => {
        Q(Y >= V);
    }, [Y]);
    let X = r.useCallback(
            (e) => {
                var t;
                let n = null === (t = b.current) || void 0 === t ? void 0 : t.getListDimensions();
                null != n && (e + n.height - k >= K ? Q(!1) : Q(!0));
            },
            [K]
        ),
        J = r.useCallback(
            (e) => {
                var t;
                e(W), null === (t = b.current) || void 0 === t || t.scrollTo(K);
            },
            [K, W]
        ),
        $ = r.useCallback(
            (e, t) => {
                let n = T[e];
                if (null == n) return 0;
                let i = q ? M : 0;
                if (n.type === A.En.RECENT) return t ? 0 : P;
                if (n.type === A.En.GUILD) {
                    let n = T[e + 1];
                    return null != n && n.type !== A.En.GUILD ? (t ? k + -2 * U + L + i : L) : t ? i : L;
                }
                return t ? L + i : 2 * L;
            },
            [T, q]
        ),
        ee = r.useMemo(
            () =>
                function (e, t) {
                    return (0, i.jsx)(r.Fragment, { children: t }, e);
                },
            []
        ),
        et = q ? 'shortcut' : 'hiddenshortcut';
    return (0, i.jsx)(m.Z, {
        categoryListRef: b,
        expressionsListRef: n,
        className: t,
        store: h.kJ,
        categories: T,
        listPadding: w,
        onScroll: X,
        renderCategoryListItem: D,
        renderSection: ee,
        rowCount: T.length,
        categoryHeight: H,
        getScrollOffsetForIndex: $,
        rowCountBySection: z,
        children: (e) =>
            Y >= V &&
            (0, i.jsx)(
                f.P3F,
                {
                    'aria-hidden': !q,
                    'aria-label': R.intl.string(R.t.dT0ct7),
                    className: s()(O.unicodeShortcut, { [O.unicodeShortcutInvisible]: !q }),
                    tabIndex: q ? 0 : -1,
                    onClick: () => J(e),
                    children: (0, i.jsx)(f.EO4, {
                        size: 'custom',
                        color: 'currentColor',
                        height: x,
                        width: x
                    })
                },
                et
            )
    });
};
