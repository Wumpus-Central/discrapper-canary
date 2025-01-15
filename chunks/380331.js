var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(91192),
    f = r(442837),
    _ = r(477690),
    h = r(481060),
    p = r(2052),
    m = r(607070),
    g = r(806966),
    E = r(254494),
    v = r(593618),
    I = r(451478),
    T = r(626135),
    b = r(624138),
    y = r(543241),
    S = r(883661),
    A = r(880949),
    N = r(784222),
    C = r(149203),
    R = r(981631),
    O = r(957825),
    D = r(388032),
    L = r(367786);
let x = (0, b.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    w = (0, b.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    P = (0, b.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    M = (0, b.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    k = (0, b.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    U = (0, b.Mg)(L.__invalid_unicodeCategoryShortcutHeight),
    B = (0, b.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    G = (0, b.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    F = P + w + 2 * k,
    Z = x + w,
    V = Z + (B + 2 * G),
    j = P + M + 2 * k,
    H = 7;
function Y(e) {
    let { activeIndex: n, categoryIndex: r, analyticsContext: i, categories: o, category: u, handleCategorySelect: c, isWindowFocused: f, useReducedMotion: _ } = e,
        p = (0, d.JA)('expression-guild-'.concat(r)),
        m = u.type === C.En.GUILD ? null : u.id,
        g = n === r,
        E = u.type === C.En.GUILD ? u.guild : null,
        I = (0, a.jsxs)(h.Clickable, {
            ...p,
            'aria-label': (0, y.Nf)(u, E),
            className: l()({
                [L.categoryItemGuildCategory]: null != E,
                [L.categoryItemDefaultCategory]: null == E,
                [L.categoryItemDefaultCategorySelected]: null == E && g,
                [L.categoryItemRecentEmoji]: u.type === C.En.RECENT
            }),
            onClick: () => {
                null != E &&
                    T.default.track(R.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
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
                          shouldAnimate: !_ && f,
                          isLocked: u.isNitroLocked
                      })
                    : null,
                null == E && null != m
                    ? (0, a.jsx)(S.Z, {
                          categoryId: m,
                          className: L.categoryIcon,
                          height: P,
                          width: P,
                          size: 'custom'
                      })
                    : null
            ]
        }),
        b = o[r + 1],
        N = null != b && u.type === C.En.GUILD && b.type !== C.En.GUILD;
    return null != E
        ? (0, a.jsxs)(s.Fragment, {
              children: [
                  (0, a.jsx)(v.Z, {
                      guild: E,
                      includeActivity: !1,
                      children: (0, a.jsx)('div', { children: I })
                  }),
                  N ? (0, a.jsx)('hr', { className: L.guildCategorySeparator }, 'separator') : null
              ]
          })
        : I;
}
let W = (e) => {
    let { className: n, emojiListRef: r, sectionDescriptors: i, intention: o, channel: u, shouldShowSoundmojiInEmojiPicker: d = !1 } = e,
        _ = g.kJ.useStore((e) => e.activeCategoryIndex),
        v = (0, N.Ni)({
            sectionDescriptors: i,
            emojiListRef: r
        }),
        T = (0, p.O)(),
        b = (0, y.kI)(o, u, null == u ? void 0 : u.guild_id, d),
        S = s.useRef(null),
        A = (0, f.e7)([I.Z], () => I.Z.isFocused()),
        R = (0, f.e7)([m.Z], () => m.Z.useReducedMotion, []),
        O = s.useMemo(
            () =>
                c().memoize((e, n) => {
                    let r = b[n];
                    if (null != r)
                        return (0, a.jsx)(
                            Y,
                            {
                                activeIndex: _,
                                analyticsContext: T,
                                categories: b,
                                category: r,
                                categoryIndex: n,
                                handleCategorySelect: v,
                                isWindowFocused: A,
                                useReducedMotion: R
                            },
                            n
                        );
                }),
            [_, T, b, v, A, R]
        ),
        x = s.useMemo(() => [8, 8, 0, 8], []),
        k = s.useCallback(
            (e, n) => {
                let r = b[n];
                if (r.type === C.En.RECENT) return F;
                if (r.type === C.En.GUILD) {
                    let e = b[n + 1];
                    return null != e && e.type !== C.En.GUILD ? V : Z;
                }
                return j;
            },
            [b]
        ),
        {
            nonUnicodeCategoryCount: W,
            firstUnicodeCategoryIndex: K,
            firstUnicodeCategoryOffsetTop: z,
            rowCountBySection: q
        } = s.useMemo(() => {
            let e = 0,
                n = 0,
                r = 0,
                i = 0;
            b.forEach((a) => {
                a.type === C.En.GUILD ? ((n += 1), (r += 1)) : a.type === C.En.UNICODE ? (i += 1) : ((e += 1), (n += 1));
            });
            let a = F + n * Z + V;
            return {
                nonUnicodeCategoryCount: n,
                firstUnicodeCategoryIndex: n,
                firstUnicodeCategoryOffsetTop: a,
                rowCountBySection: [e, r, i]
            };
        }, [b]),
        [Q, X] = s.useState(!0);
    s.useLayoutEffect(() => {
        X(W >= H);
    }, [W]);
    let J = s.useCallback(
            (e) => {
                var n;
                let r = null === (n = S.current) || void 0 === n ? void 0 : n.getListDimensions();
                if (null != r) e + r.height - B >= z ? X(!1) : X(!0);
            },
            [z]
        ),
        $ = s.useCallback(
            (e) => {
                var n;
                e(K), null === (n = S.current) || void 0 === n || n.scrollTo(z);
            },
            [z, K]
        ),
        ee = s.useCallback(
            (e, n) => {
                let r = b[e];
                if (null == r) return 0;
                let i = Q ? U : 0;
                if (r.type === C.En.RECENT) return n ? 0 : M;
                if (r.type === C.En.GUILD) {
                    let r = b[e + 1];
                    return null != r && r.type !== C.En.GUILD ? (n ? B + -2 * G + w + i : w) : n ? i : w;
                }
                return n ? w + i : 2 * w;
            },
            [b, Q]
        ),
        et = s.useMemo(
            () =>
                function (e, n) {
                    return (0, a.jsx)(s.Fragment, { children: n }, e);
                },
            []
        ),
        en = Q ? 'shortcut' : 'hiddenshortcut';
    return (0, a.jsx)(E.Z, {
        categoryListRef: S,
        expressionsListRef: r,
        className: n,
        store: g.kJ,
        categories: b,
        listPadding: x,
        onScroll: J,
        renderCategoryListItem: O,
        renderSection: et,
        rowCount: b.length,
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
                    className: l()(L.unicodeShortcut, { [L.unicodeShortcutInvisible]: !Q }),
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
