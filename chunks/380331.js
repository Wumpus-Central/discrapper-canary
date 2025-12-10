n.d(t, { Z: () => z }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(477690),
    f = n(481060),
    p = n(2052),
    _ = n(607070),
    m = n(806966),
    h = n(254494),
    g = n(648307),
    E = n(451478),
    b = n(626135),
    y = n(624138),
    O = n(543241),
    v = n(883661),
    S = n(880949),
    I = n(784222),
    T = n(149203),
    C = n(981631),
    A = n(957825),
    N = n(388032),
    P = n(911166);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    j = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    M = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    k = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    U = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    G = (0, y.Mg)(P.__invalid_unicodeCategoryShortcutHeight),
    Z = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    B = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    F = M + j + 2 * U,
    V = L + j,
    H = V + (Z + 2 * B),
    Y = M + k + 2 * U,
    W = 7;
function K(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: a,
            categories: s,
            category: l,
            handleCategorySelect: u,
            isWindowFocused: d,
            useReducedMotion: p,
        } = e,
        _ = (0, c.JA)("expression-guild-".concat(n)),
        m = l.type === T.En.GUILD ? null : l.id,
        h = t === n,
        E = l.type === T.En.GUILD ? l.guild : null,
        y = (0, r.jsxs)(
            f.P3F,
            x(D({}, _), {
                "aria-label": (0, O.Nf)(l, E),
                className: o()({
                    [P.categoryItemGuildCategory]: null != E,
                    [P.categoryItemDefaultCategory]: null == E,
                    [P.categoryItemDefaultCategorySelected]: null == E && h,
                    [P.categoryItemRecentEmoji]: l.type === T.En.RECENT,
                }),
                onClick: () => {
                    null != E &&
                        b.default.track(C.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: null == a ? void 0 : a.location,
                            tab: A.X1.EMOJI,
                            guild_id: E.id,
                        }),
                        u(n);
                },
                children: [
                    null != E
                        ? (0, r.jsx)(S.Z, {
                              guild: E,
                              isSelected: h,
                              shouldAnimate: !p && d,
                              isLocked: l.isNitroLocked,
                          })
                        : null,
                    null == E && null != m
                        ? (0, r.jsx)(v.Z, {
                              categoryId: m,
                              className: P.categoryIcon,
                              height: M,
                              width: M,
                              size: "custom",
                          })
                        : null,
                ],
            }),
        ),
        I = s[n + 1],
        N = null != I && l.type === T.En.GUILD && I.type !== T.En.GUILD;
    return null != E
        ? (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(g.V, {
                      guild: E,
                      children: (0, r.jsx)("div", { children: y }),
                  }),
                  N ? (0, r.jsx)("hr", { className: P.guildCategorySeparator }, "separator") : null,
              ],
          })
        : y;
}
let z = (e) => {
    var t;
    let {
            className: n,
            emojiListRef: a,
            sectionDescriptors: s,
            intention: c,
            channel: d,
            fallbackGuildId: g,
            shouldShowSoundmojiInEmojiPicker: b = !1,
            showOnlyUnicode: y = !1,
        } = e,
        v = m.kJ.useStore((e) => e.activeCategoryIndex),
        S = (0, I.Ni)({
            sectionDescriptors: s,
            emojiListRef: a,
        }),
        C = (0, p.O)(),
        A = (0, O.kI)(c, d, null != (t = null == d ? void 0 : d.guild_id) ? t : g, b),
        R = i.useMemo(() => (y ? (0, O.ZF)() : A), [A, y]),
        D = i.useRef(null),
        w = (0, u.e7)([E.Z], () => E.Z.isFocused()),
        x = (0, u.e7)([_.Z], () => _.Z.useReducedMotion, []),
        L = i.useMemo(
            () =>
                l().memoize((e, t) => {
                    let n = R[t];
                    if (null != n)
                        return (0, r.jsx)(
                            K,
                            {
                                activeIndex: v,
                                analyticsContext: C,
                                categories: R,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: S,
                                isWindowFocused: w,
                                useReducedMotion: x,
                            },
                            t,
                        );
                }),
            [v, C, R, S, w, x],
        ),
        U = i.useMemo(() => [8, 8, 0, 8], []),
        z = i.useCallback(
            (e, t) => {
                let n = R[t];
                if (n.type === T.En.RECENT) return F;
                if (n.type === T.En.GUILD) {
                    let e = R[t + 1];
                    return null != e && e.type !== T.En.GUILD ? H : V;
                }
                return Y;
            },
            [R],
        ),
        {
            nonUnicodeCategoryCount: q,
            firstUnicodeCategoryIndex: Q,
            firstUnicodeCategoryOffsetTop: X,
            rowCountBySection: J,
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                r = 0;
            R.forEach((i) => {
                i.type === T.En.GUILD
                    ? ((t += 1), (n += 1))
                    : i.type === T.En.UNICODE
                      ? (r += 1)
                      : ((e += 1), (t += 1));
            });
            let i = F + t * V + H;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, r],
            };
        }, [R]),
        [$, ee] = i.useState(!0);
    i.useLayoutEffect(() => {
        ee(q >= W);
    }, [q]);
    let et = i.useCallback(
            (e) => {
                var t;
                let n = null == (t = D.current) ? void 0 : t.getListDimensions();
                null != n && (e + n.height - Z >= X ? ee(!1) : ee(!0));
            },
            [X],
        ),
        en = i.useCallback(
            (e) => {
                var t;
                e(Q), null == (t = D.current) || t.scrollTo(X);
            },
            [X, Q],
        ),
        er = i.useCallback(
            (e, t) => {
                let n = R[e];
                if (null == n) return 0;
                let r = $ ? G : 0;
                if (n.type === T.En.RECENT) return t ? 0 : k;
                if (n.type === T.En.GUILD) {
                    let n = R[e + 1];
                    return null != n && n.type !== T.En.GUILD ? (t ? Z + -2 * B + j + r : j) : t ? r : j;
                }
                return t ? j + r : 2 * j;
            },
            [R, $],
        ),
        ei = i.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(i.Fragment, { children: t }, e);
                },
            [],
        ),
        ea = $ ? "shortcut" : "hiddenshortcut";
    return (0, r.jsx)(h.Z, {
        categoryListRef: D,
        expressionsListRef: a,
        className: n,
        store: m.kJ,
        categories: R,
        listPadding: U,
        onScroll: et,
        renderCategoryListItem: L,
        renderSection: ei,
        rowCount: R.length,
        categoryHeight: z,
        getScrollOffsetForIndex: er,
        rowCountBySection: J,
        children: (e) =>
            q >= W &&
            (0, r.jsx)(
                f.P3F,
                {
                    "aria-hidden": !$,
                    "aria-label": N.intl.string(N.t.dT0ctw),
                    className: o()(P.unicodeShortcut, { [P.unicodeShortcutInvisible]: !$ }),
                    tabIndex: $ ? 0 : -1,
                    onClick: () => en(e),
                    children: (0, r.jsx)(f.EO4, {
                        size: "custom",
                        color: "currentColor",
                        height: M,
                        width: M,
                    }),
                },
                ea,
            ),
    });
};
