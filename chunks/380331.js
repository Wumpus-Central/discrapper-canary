var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(91192),
    f = r(442837),
    p = r(477690),
    h = r(481060),
    _ = r(2052),
    m = r(607070),
    g = r(806966),
    E = r(254494),
    v = r(593618),
    y = r(451478),
    b = r(626135),
    I = r(624138),
    T = r(543241),
    S = r(883661),
    A = r(880949),
    C = r(784222),
    N = r(149203),
    R = r(981631),
    O = r(957825),
    D = r(388032),
    x = r(131688);
let L = (0, I.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    w = (0, I.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    P = (0, I.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    M = (0, I.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    k = (0, I.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    U = (0, I.Mg)(x.__invalid_unicodeCategoryShortcutHeight),
    B = (0, I.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    G = (0, I.Mg)(p.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    Z = P + w + 2 * k,
    F = L + w,
    V = F + (B + 2 * G),
    j = P + M + 2 * k,
    H = 7;
function Y(e) {
    let { activeIndex: n, categoryIndex: r, analyticsContext: i, categories: s, category: u, handleCategorySelect: c, isWindowFocused: f, useReducedMotion: p } = e,
        _ = (0, d.JA)('expression-guild-'.concat(r)),
        m = u.type === N.En.GUILD ? null : u.id,
        g = n === r,
        E = u.type === N.En.GUILD ? u.guild : null,
        y = (0, a.jsxs)(h.Clickable, {
            ..._,
            'aria-label': (0, T.Nf)(u, E),
            className: l()({
                [x.categoryItemGuildCategory]: null != E,
                [x.categoryItemDefaultCategory]: null == E,
                [x.categoryItemDefaultCategorySelected]: null == E && g,
                [x.categoryItemRecentEmoji]: u.type === N.En.RECENT
            }),
            onClick: () => {
                null != E &&
                    b.default.track(R.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: null == i ? void 0 : i.location,
                        tab: O.X1.EMOJI,
                        guild_id: E.id
                    }),
                    c(r);
            },
            children: [
                null != E
                    ? (0, a.jsx)(A.Z, {
                          guild: E,
                          isSelected: g,
                          shouldAnimate: !p && f,
                          isLocked: u.isNitroLocked
                      })
                    : null,
                null == E && null != m
                    ? (0, a.jsx)(S.Z, {
                          categoryId: m,
                          className: x.categoryIcon,
                          height: P,
                          width: P,
                          size: 'custom'
                      })
                    : null
            ]
        }),
        I = s[r + 1],
        C = null != I && u.type === N.En.GUILD && I.type !== N.En.GUILD;
    return null != E
        ? (0, a.jsxs)(o.Fragment, {
              children: [
                  (0, a.jsx)(v.Z, {
                      guild: E,
                      includeActivity: !1,
                      children: (0, a.jsx)('div', { children: y })
                  }),
                  C ? (0, a.jsx)('hr', { className: x.guildCategorySeparator }, 'separator') : null
              ]
          })
        : y;
}
let W = (e) => {
    let { className: n, emojiListRef: r, sectionDescriptors: i, intention: s, channel: u, shouldShowSoundmojiInEmojiPicker: d = !1 } = e,
        p = g.kJ.useStore((e) => e.activeCategoryIndex),
        v = (0, C.Ni)({
            sectionDescriptors: i,
            emojiListRef: r
        }),
        b = (0, _.O)(),
        I = (0, T.kI)(s, u, null == u ? void 0 : u.guild_id, d),
        S = o.useRef(null),
        A = (0, f.e7)([y.Z], () => y.Z.isFocused()),
        R = (0, f.e7)([m.Z], () => m.Z.useReducedMotion, []),
        O = o.useMemo(
            () =>
                c().memoize((e, n) => {
                    let r = I[n];
                    if (null != r)
                        return (0, a.jsx)(
                            Y,
                            {
                                activeIndex: p,
                                analyticsContext: b,
                                categories: I,
                                category: r,
                                categoryIndex: n,
                                handleCategorySelect: v,
                                isWindowFocused: A,
                                useReducedMotion: R
                            },
                            n
                        );
                }),
            [p, b, I, v, A, R]
        ),
        L = o.useMemo(() => [8, 8, 0, 8], []),
        k = o.useCallback(
            (e, n) => {
                let r = I[n];
                if (r.type === N.En.RECENT) return Z;
                if (r.type === N.En.GUILD) {
                    let e = I[n + 1];
                    return null != e && e.type !== N.En.GUILD ? V : F;
                }
                return j;
            },
            [I]
        ),
        {
            nonUnicodeCategoryCount: W,
            firstUnicodeCategoryIndex: K,
            firstUnicodeCategoryOffsetTop: z,
            rowCountBySection: q
        } = o.useMemo(() => {
            let e = 0,
                n = 0,
                r = 0,
                i = 0;
            I.forEach((a) => {
                a.type === N.En.GUILD ? ((n += 1), (r += 1)) : a.type === N.En.UNICODE ? (i += 1) : ((e += 1), (n += 1));
            });
            let a = Z + n * F + V;
            return {
                nonUnicodeCategoryCount: n,
                firstUnicodeCategoryIndex: n,
                firstUnicodeCategoryOffsetTop: a,
                rowCountBySection: [e, r, i]
            };
        }, [I]),
        [Q, X] = o.useState(!0);
    o.useLayoutEffect(() => {
        X(W >= H);
    }, [W]);
    let J = o.useCallback(
            (e) => {
                var n;
                let r = null === (n = S.current) || void 0 === n ? void 0 : n.getListDimensions();
                if (null != r) e + r.height - B >= z ? X(!1) : X(!0);
            },
            [z]
        ),
        $ = o.useCallback(
            (e) => {
                var n;
                e(K), null === (n = S.current) || void 0 === n || n.scrollTo(z);
            },
            [z, K]
        ),
        ee = o.useCallback(
            (e, n) => {
                let r = I[e];
                if (null == r) return 0;
                let i = Q ? U : 0;
                if (r.type === N.En.RECENT) return n ? 0 : M;
                if (r.type === N.En.GUILD) {
                    let r = I[e + 1];
                    return null != r && r.type !== N.En.GUILD ? (n ? B + -2 * G + w + i : w) : n ? i : w;
                }
                return n ? w + i : 2 * w;
            },
            [I, Q]
        ),
        et = o.useMemo(
            () =>
                function (e, n) {
                    return (0, a.jsx)(o.Fragment, { children: n }, e);
                },
            []
        ),
        en = Q ? 'shortcut' : 'hiddenshortcut';
    return (0, a.jsx)(E.Z, {
        categoryListRef: S,
        expressionsListRef: r,
        className: n,
        store: g.kJ,
        categories: I,
        listPadding: L,
        onScroll: J,
        renderCategoryListItem: O,
        renderSection: et,
        rowCount: I.length,
        categoryHeight: k,
        getScrollOffsetForIndex: ee,
        rowCountBySection: q,
        children: (e) =>
            W >= H &&
            (0, a.jsx)(
                h.Clickable,
                {
                    'aria-hidden': !Q,
                    'aria-label': D.intl.string(D.t.dT0ct7),
                    className: l()(x.unicodeShortcut, { [x.unicodeShortcutInvisible]: !Q }),
                    tabIndex: Q ? 0 : -1,
                    onClick: () => $(e),
                    children: (0, a.jsx)(h.ReactionIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: P,
                        width: P
                    })
                },
                en
            )
    });
};
n.Z = W;
