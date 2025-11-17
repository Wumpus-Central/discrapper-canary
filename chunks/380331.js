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
    _ = n(2052),
    p = n(607070),
    h = n(806966),
    m = n(254494),
    g = n(593618),
    E = n(451478),
    b = n(626135),
    y = n(624138),
    O = n(543241),
    v = n(883661),
    I = n(880949),
    T = n(784222),
    S = n(149203),
    A = n(981631),
    C = n(957825),
    N = n(388032),
    R = n(911166);
function P(e, t, n) {
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
                P(e, t, n[t]);
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
    M = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    k = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    j = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    U = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    G = (0, y.Mg)(R.__invalid_unicodeCategoryShortcutHeight),
    B = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    Z = (0, y.Mg)(d.Z.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    F = k + M + 2 * U,
    V = L + M,
    H = V + (B + 2 * Z),
    Y = k + j + 2 * U,
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
            useReducedMotion: _,
        } = e,
        p = (0, c.JA)("expression-guild-".concat(n)),
        h = l.type === S.En.GUILD ? null : l.id,
        m = t === n,
        E = l.type === S.En.GUILD ? l.guild : null,
        y = (0, r.jsxs)(
            f.P3F,
            x(D({}, p), {
                "aria-label": (0, O.Nf)(l, E),
                className: o()({
                    [R.categoryItemGuildCategory]: null != E,
                    [R.categoryItemDefaultCategory]: null == E,
                    [R.categoryItemDefaultCategorySelected]: null == E && m,
                    [R.categoryItemRecentEmoji]: l.type === S.En.RECENT,
                }),
                onClick: () => {
                    null != E &&
                        b.default.track(A.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: null == a ? void 0 : a.location,
                            tab: C.X1.EMOJI,
                            guild_id: E.id,
                        }),
                        u(n);
                },
                children: [
                    null != E
                        ? (0, r.jsx)(I.Z, {
                              guild: E,
                              isSelected: m,
                              shouldAnimate: !_ && d,
                              isLocked: l.isNitroLocked,
                          })
                        : null,
                    null == E && null != h
                        ? (0, r.jsx)(v.Z, {
                              categoryId: h,
                              className: R.categoryIcon,
                              height: k,
                              width: k,
                              size: "custom",
                          })
                        : null,
                ],
            }),
        ),
        T = s[n + 1],
        N = null != T && l.type === S.En.GUILD && T.type !== S.En.GUILD;
    return null != E
        ? (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(g.Z, {
                      guild: E,
                      includeActivity: !1,
                      children: (0, r.jsx)("div", { children: y }),
                  }),
                  N ? (0, r.jsx)("hr", { className: R.guildCategorySeparator }, "separator") : null,
              ],
          })
        : y;
}
let z = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: a,
            intention: s,
            channel: c,
            shouldShowSoundmojiInEmojiPicker: d = !1,
            showOnlyUnicode: g = !1,
        } = e,
        b = h.kJ.useStore((e) => e.activeCategoryIndex),
        y = (0, T.Ni)({
            sectionDescriptors: a,
            emojiListRef: n,
        }),
        v = (0, _.O)(),
        I = (0, O.kI)(s, c, null == c ? void 0 : c.guild_id, d),
        A = i.useMemo(() => (g ? (0, O.ZF)() : I), [I, g]),
        C = i.useRef(null),
        P = (0, u.e7)([E.Z], () => E.Z.isFocused()),
        D = (0, u.e7)([p.Z], () => p.Z.useReducedMotion, []),
        w = i.useMemo(
            () =>
                l().memoize((e, t) => {
                    let n = A[t];
                    if (null != n)
                        return (0, r.jsx)(
                            K,
                            {
                                activeIndex: b,
                                analyticsContext: v,
                                categories: A,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: y,
                                isWindowFocused: P,
                                useReducedMotion: D,
                            },
                            t,
                        );
                }),
            [b, v, A, y, P, D],
        ),
        x = i.useMemo(() => [8, 8, 0, 8], []),
        L = i.useCallback(
            (e, t) => {
                let n = A[t];
                if (n.type === S.En.RECENT) return F;
                if (n.type === S.En.GUILD) {
                    let e = A[t + 1];
                    return null != e && e.type !== S.En.GUILD ? H : V;
                }
                return Y;
            },
            [A],
        ),
        {
            nonUnicodeCategoryCount: U,
            firstUnicodeCategoryIndex: z,
            firstUnicodeCategoryOffsetTop: q,
            rowCountBySection: X,
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                r = 0;
            A.forEach((i) => {
                i.type === S.En.GUILD
                    ? ((t += 1), (n += 1))
                    : i.type === S.En.UNICODE
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
        }, [A]),
        [Q, J] = i.useState(!0);
    i.useLayoutEffect(() => {
        J(U >= W);
    }, [U]);
    let $ = i.useCallback(
            (e) => {
                var t;
                let n = null == (t = C.current) ? void 0 : t.getListDimensions();
                null != n && (e + n.height - B >= q ? J(!1) : J(!0));
            },
            [q],
        ),
        ee = i.useCallback(
            (e) => {
                var t;
                e(z), null == (t = C.current) || t.scrollTo(q);
            },
            [q, z],
        ),
        et = i.useCallback(
            (e, t) => {
                let n = A[e];
                if (null == n) return 0;
                let r = Q ? G : 0;
                if (n.type === S.En.RECENT) return t ? 0 : j;
                if (n.type === S.En.GUILD) {
                    let n = A[e + 1];
                    return null != n && n.type !== S.En.GUILD ? (t ? B + -2 * Z + M + r : M) : t ? r : M;
                }
                return t ? M + r : 2 * M;
            },
            [A, Q],
        ),
        en = i.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(i.Fragment, { children: t }, e);
                },
            [],
        ),
        er = Q ? "shortcut" : "hiddenshortcut";
    return (0, r.jsx)(m.Z, {
        categoryListRef: C,
        expressionsListRef: n,
        className: t,
        store: h.kJ,
        categories: A,
        listPadding: x,
        onScroll: $,
        renderCategoryListItem: w,
        renderSection: en,
        rowCount: A.length,
        categoryHeight: L,
        getScrollOffsetForIndex: et,
        rowCountBySection: X,
        children: (e) =>
            U >= W &&
            (0, r.jsx)(
                f.P3F,
                {
                    "aria-hidden": !Q,
                    "aria-label": N.intl.string(N.t.dT0ctw),
                    className: o()(R.unicodeShortcut, { [R.unicodeShortcutInvisible]: !Q }),
                    tabIndex: Q ? 0 : -1,
                    onClick: () => ee(e),
                    children: (0, r.jsx)(f.EO4, {
                        size: "custom",
                        color: "currentColor",
                        height: k,
                        width: k,
                    }),
                },
                er,
            ),
    });
};
