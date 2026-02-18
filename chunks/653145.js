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
    _ = n(397927),
    f = n(212245),
    p = n(775602),
    h = n(850992),
    m = n(802019),
    E = n(407698),
    g = n(531685),
    A = n(954571),
    I = n(240248),
    T = n(822123),
    S = n(535622),
    y = n(724511),
    v = n(484333),
    N = n(732139),
    C = n(652215),
    b = n(698279),
    R = n(985018),
    O = n(497481);
let D = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    L = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    w = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    x = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    M = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    P = (0, I.xI)(O.__invalid_unicodeCategoryShortcutHeight),
    k = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    U = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    G = w + L + 2 * M,
    F = D + L,
    V = F + (k + 2 * U),
    B = w + x + 2 * M,
    H = 7;
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
        h = l.type === N.s.GUILD ? null : l.id,
        m = t === n,
        g = l.type === N.s.GUILD ? l.guild : null,
        I = (0, r.jsxs)(_.DUT, {
            ...p,
            "aria-label": (0, T.wt)(l, g),
            className: a()({
                [O.ZG]: null != g,
                [O.Bj]: null == g,
                [O.s6]: null == g && m,
                [O.xg]: l.type === N.s.RECENT,
            }),
            onClick: () => {
                null != g &&
                    A.default.track(C.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: s?.location,
                        tab: b.kx.EMOJI,
                        guild_id: g.id,
                    }),
                    c(n);
            },
            children: [
                null != g
                    ? (0, r.jsx)(y.A, { guild: g, isSelected: m, shouldAnimate: !f && d, isLocked: l.isNitroLocked })
                    : null,
                null == g && null != h
                    ? (0, r.jsx)(S.A, { categoryId: h, className: O.Yl, height: w, width: w, size: "custom" })
                    : null,
            ],
        }),
        v = o[n + 1],
        R = null != v && l.type === N.s.GUILD && v.type !== N.s.GUILD;
    return null != g
        ? (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(E.Q, { guild: g, children: (0, r.jsx)("div", { children: I }) }),
                  R ? (0, r.jsx)("hr", { className: O.ny }, "separator") : null,
              ],
          })
        : I;
}
let Y = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: s,
            intention: o,
            channel: u,
            fallbackGuildId: d,
            shouldShowSoundmojiInEmojiPicker: E = !1,
            showOnlyUnicode: A = !1,
        } = e,
        I = h.Om.useStore((e) => e.activeCategoryIndex),
        S = (0, v.cr)({ sectionDescriptors: s, emojiListRef: n }),
        y = (0, f.p)(),
        C = (0, T.ss)(o, u, u?.guild_id ?? d, E),
        b = i.useMemo(() => (A ? (0, T.CQ)() : C), [C, A]),
        D = i.useRef(null),
        M = (0, c.bG)([g.A], () => g.A.isFocused()),
        Y = (0, c.bG)([p.A], () => p.A.useReducedMotion, []),
        W = i.useMemo(
            () =>
                l().memoize((e, t) => {
                    let n = b[t];
                    if (null != n)
                        return (0, r.jsx)(
                            j,
                            {
                                activeIndex: I,
                                analyticsContext: y,
                                categories: b,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: S,
                                isWindowFocused: M,
                                useReducedMotion: Y,
                            },
                            t,
                        );
                }),
            [I, y, b, S, M, Y],
        ),
        K = i.useMemo(() => [8, 8, 0, 8], []),
        z = i.useCallback(
            (e, t) => {
                let n = b[t];
                if (n.type === N.s.RECENT) return G;
                if (n.type === N.s.GUILD) {
                    let e = b[t + 1];
                    return null != e && e.type !== N.s.GUILD ? V : F;
                }
                return B;
            },
            [b],
        ),
        {
            nonUnicodeCategoryCount: $,
            firstUnicodeCategoryIndex: q,
            firstUnicodeCategoryOffsetTop: Z,
            rowCountBySection: X,
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                r = 0;
            b.forEach((i) => {
                i.type === N.s.GUILD ? ((t += 1), (n += 1)) : i.type === N.s.UNICODE ? (r += 1) : ((e += 1), (t += 1));
            });
            let i = G + t * F + V;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, r],
            };
        }, [b]),
        [Q, J] = i.useState(!0);
    i.useLayoutEffect(() => {
        J($ >= H);
    }, [$]);
    let ee = i.useCallback(
            (e) => {
                let t = D.current?.getListDimensions();
                null == t || (e + t.height - k >= Z ? J(!1) : J(!0));
            },
            [Z],
        ),
        et = i.useCallback(
            (e) => {
                e(q), D.current?.scrollTo(Z);
            },
            [Z, q],
        ),
        en = i.useCallback(
            (e, t) => {
                let n = b[e];
                if (null == n) return 0;
                let r = Q ? P : 0;
                if (n.type === N.s.RECENT) return t ? 0 : x;
                if (n.type === N.s.GUILD) {
                    let n = b[e + 1];
                    return null != n && n.type !== N.s.GUILD ? (t ? k + -2 * U + L + r : L) : t ? r : L;
                }
                return t ? L + r : 2 * L;
            },
            [b, Q],
        ),
        er = i.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(i.Fragment, { children: t }, e);
                },
            [],
        ),
        ei = Q ? "shortcut" : "hiddenshortcut";
    return (0, r.jsx)(m.A, {
        categoryListRef: D,
        expressionsListRef: n,
        className: t,
        store: h.Om,
        categories: b,
        listPadding: K,
        onScroll: ee,
        renderCategoryListItem: W,
        renderSection: er,
        rowCount: b.length,
        categoryHeight: z,
        getScrollOffsetForIndex: en,
        rowCountBySection: X,
        children: (e) =>
            $ >= H &&
            (0, r.jsx)(
                _.DUT,
                {
                    "aria-hidden": !Q,
                    "aria-label": R.intl.string(R.t.dT0ctw),
                    className: a()(O.KB, { [O.h_]: !Q }),
                    tabIndex: Q ? 0 : -1,
                    onClick: () => et(e),
                    children: (0, r.jsx)(_.nm2, { size: "custom", color: "currentColor", height: w, width: w }),
                },
                ei,
            ),
    });
};
