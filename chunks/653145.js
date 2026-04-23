"use strict";
n.d(t, { A: () => Y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(837381),
    c = n(311907),
    d = n(319060),
    _ = n(939249),
    f = n(460905),
    p = n(212245),
    h = n(775602),
    E = n(850992),
    m = n(802019),
    g = n(407698),
    A = n(531685),
    I = n(954571),
    T = n(240248),
    S = n(822123),
    y = n(535622),
    N = n(724511),
    v = n(484333),
    C = n(732139),
    O = n(652215),
    R = n(698279),
    b = n(985018),
    D = n(619182);
let L = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    w = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    M = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    P = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    x = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    k = (0, T.xI)(D.__invalid_unicodeCategoryShortcutHeight),
    U = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    G = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    F = M + w + 2 * x,
    V = L + w,
    B = V + (U + 2 * G),
    H = M + P + 2 * x;
function j(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: s,
            categories: o,
            category: l,
            handleCategorySelect: c,
            isWindowFocused: d,
            useReducedMotion: f,
        } = e,
        p = (0, u.rm)(`expression-guild-${n}`),
        h = l.type === C.s.GUILD ? null : l.id,
        E = t === n,
        m = l.type === C.s.GUILD ? l.guild : null,
        A = (0, r.jsxs)(_.D, {
            ...p,
            "aria-label": (0, S.wt)(l, m),
            className: a()({
                [D.ZG]: null != m,
                [D.Bj]: null == m,
                [D.s6]: null == m && E,
                [D.xg]: l.type === C.s.RECENT,
            }),
            onClick: () => {
                null != m &&
                    I.default.track(O.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: s?.location,
                        tab: R.kx.EMOJI,
                        guild_id: m.id,
                    }),
                    c(n);
            },
            children: [
                null != m
                    ? (0, r.jsx)(N.A, { guild: m, isSelected: E, shouldAnimate: !f && d, isLocked: l.isNitroLocked })
                    : null,
                null == m && null != h
                    ? (0, r.jsx)(y.A, { categoryId: h, className: D.Yl, height: M, width: M, size: "custom" })
                    : null,
            ],
        }),
        T = o[n + 1],
        v = null != T && l.type === C.s.GUILD && T.type !== C.s.GUILD;
    return null != m
        ? (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(g.Q, { guild: m, children: (0, r.jsx)("div", { children: A }) }),
                  v ? (0, r.jsx)("hr", { className: D.ny }, "separator") : null,
              ],
          })
        : A;
}
let Y = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: s,
            intention: o,
            channel: u,
            fallbackGuildId: d,
            shouldShowSoundmojiInEmojiPicker: g = !1,
            showOnlyUnicode: I = !1,
        } = e,
        T = E.Om.useStore((e) => e.activeCategoryIndex),
        y = (0, v.cr)({ sectionDescriptors: s, emojiListRef: n }),
        N = (0, p.p)(),
        O = (0, S.ss)(o, u, u?.guild_id ?? d, g),
        R = i.useMemo(() => (I ? (0, S.CQ)() : O), [O, I]),
        L = i.useRef(null),
        x = (0, c.bG)([A.A], () => A.A.isFocused()),
        Y = (0, c.bG)([h.A], () => h.A.useReducedMotion, []),
        W = i.useMemo(
            () =>
                l().memoize((e, t) => {
                    let n = R[t];
                    if (null != n)
                        return (0, r.jsx)(
                            j,
                            {
                                activeIndex: T,
                                analyticsContext: N,
                                categories: R,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: y,
                                isWindowFocused: x,
                                useReducedMotion: Y,
                            },
                            t,
                        );
                }),
            [T, N, R, y, x, Y],
        ),
        K = i.useMemo(() => [8, 8, 0, 8], []),
        $ = i.useCallback(
            (e, t) => {
                let n = R[t];
                if (n.type === C.s.RECENT) return F;
                if (n.type === C.s.GUILD) {
                    let e = R[t + 1];
                    return null != e && e.type !== C.s.GUILD ? B : V;
                }
                return H;
            },
            [R],
        ),
        {
            nonUnicodeCategoryCount: z,
            firstUnicodeCategoryIndex: q,
            firstUnicodeCategoryOffsetTop: X,
            rowCountBySection: Q,
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                r = 0;
            R.forEach((i) => {
                i.type === C.s.GUILD ? ((t += 1), (n += 1)) : i.type === C.s.UNICODE ? (r += 1) : ((e += 1), (t += 1));
            });
            let i = F + t * V + B;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, r],
            };
        }, [R]),
        [Z, J] = i.useState(!0);
    i.useLayoutEffect(() => {
        J(z >= 7);
    }, [z]);
    let ee = i.useCallback(
            (e) => {
                let t = L.current?.getListDimensions();
                null == t || (e + t.height - U >= X ? J(!1) : J(!0));
            },
            [X],
        ),
        et = i.useCallback(
            (e) => {
                e(q), L.current?.scrollTo(X);
            },
            [X, q],
        ),
        en = i.useCallback(
            (e, t) => {
                let n = R[e];
                if (null == n) return 0;
                let r = Z ? k : 0;
                if (n.type === C.s.RECENT) return t ? 0 : P;
                if (n.type === C.s.GUILD) {
                    let n = R[e + 1];
                    return null != n && n.type !== C.s.GUILD ? (t ? U + -2 * G + w + r : w) : t ? r : w;
                }
                return t ? w + r : 2 * w;
            },
            [R, Z],
        ),
        er = i.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(i.Fragment, { children: t }, e);
                },
            [],
        ),
        ei = Z ? "shortcut" : "hiddenshortcut";
    return (0, r.jsx)(m.A, {
        categoryListRef: L,
        expressionsListRef: n,
        className: t,
        store: E.Om,
        categories: R,
        listPadding: K,
        onScroll: ee,
        renderCategoryListItem: W,
        renderSection: er,
        rowCount: R.length,
        categoryHeight: $,
        getScrollOffsetForIndex: en,
        rowCountBySection: Q,
        children: (e) =>
            z >= 7 &&
            (0, r.jsx)(
                _.D,
                {
                    "aria-hidden": !Z,
                    "aria-label": b.intl.string(b.t.dT0ctw),
                    className: a()(D.KB, { [D.h_]: !Z }),
                    tabIndex: Z ? 0 : -1,
                    onClick: () => et(e),
                    children: (0, r.jsx)(f.n, { size: "custom", color: "currentColor", height: M, width: M }),
                },
                ei,
            ),
    });
};
