"use strict";
n.d(t, { A: () => Y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(407698),
    E = n(531685),
    A = n(954571),
    I = n(240248),
    T = n(822123),
    y = n(535622),
    S = n(724511),
    v = n(484333),
    C = n(732139),
    b = n(652215),
    N = n(698279),
    R = n(985018),
    O = n(497481);
let D = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    L = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    w = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    x = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    P = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    M = (0, I.xI)(O.__invalid_unicodeCategoryShortcutHeight),
    k = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    U = (0, I.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    G = w + L + 2 * P,
    V = D + L,
    F = V + (k + 2 * U),
    B = w + x + 2 * P,
    j = 7;
function H(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: a,
            categories: o,
            category: l,
            handleCategorySelect: c,
            isWindowFocused: d,
            useReducedMotion: f,
        } = e,
        p = (0, u.rm)(`expression-guild-${n}`),
        h = l.type === C.s.GUILD ? null : l.id,
        m = t === n,
        E = l.type === C.s.GUILD ? l.guild : null,
        I = (0, r.jsxs)(_.DUT, {
            ...p,
            "aria-label": (0, T.wt)(l, E),
            className: s()({
                [O.ZG]: null != E,
                [O.Bj]: null == E,
                [O.s6]: null == E && m,
                [O.xg]: l.type === C.s.RECENT,
            }),
            onClick: () => {
                null != E &&
                    A.default.track(b.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: a?.location,
                        tab: N.kx.EMOJI,
                        guild_id: E.id,
                    }),
                    c(n);
            },
            children: [
                null != E
                    ? (0, r.jsx)(S.A, { guild: E, isSelected: m, shouldAnimate: !f && d, isLocked: l.isNitroLocked })
                    : null,
                null == E && null != h
                    ? (0, r.jsx)(y.A, { categoryId: h, className: O.Yl, height: w, width: w, size: "custom" })
                    : null,
            ],
        }),
        v = o[n + 1],
        R = null != v && l.type === C.s.GUILD && v.type !== C.s.GUILD;
    return null != E
        ? (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(g.Q, { guild: E, children: (0, r.jsx)("div", { children: I }) }),
                  R ? (0, r.jsx)("hr", { className: O.ny }, "separator") : null,
              ],
          })
        : I;
}
let Y = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: a,
            intention: o,
            channel: u,
            fallbackGuildId: d,
            shouldShowSoundmojiInEmojiPicker: g = !1,
            showOnlyUnicode: A = !1,
        } = e,
        I = h.Om.useStore((e) => e.activeCategoryIndex),
        y = (0, v.cr)({ sectionDescriptors: a, emojiListRef: n }),
        S = (0, f.p)(),
        b = (0, T.ss)(o, u, u?.guild_id ?? d, g),
        N = i.useMemo(() => (A ? (0, T.CQ)() : b), [b, A]),
        D = i.useRef(null),
        P = (0, c.bG)([E.A], () => E.A.isFocused()),
        Y = (0, c.bG)([p.A], () => p.A.useReducedMotion, []),
        W = i.useMemo(
            () =>
                l().memoize((e, t) => {
                    let n = N[t];
                    if (null != n)
                        return (0, r.jsx)(
                            H,
                            {
                                activeIndex: I,
                                analyticsContext: S,
                                categories: N,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: y,
                                isWindowFocused: P,
                                useReducedMotion: Y,
                            },
                            t,
                        );
                }),
            [I, S, N, y, P, Y],
        ),
        K = i.useMemo(() => [8, 8, 0, 8], []),
        z = i.useCallback(
            (e, t) => {
                let n = N[t];
                if (n.type === C.s.RECENT) return G;
                if (n.type === C.s.GUILD) {
                    let e = N[t + 1];
                    return null != e && e.type !== C.s.GUILD ? F : V;
                }
                return B;
            },
            [N],
        ),
        {
            nonUnicodeCategoryCount: $,
            firstUnicodeCategoryIndex: q,
            firstUnicodeCategoryOffsetTop: Z,
            rowCountBySection: Q,
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                r = 0;
            N.forEach((i) => {
                i.type === C.s.GUILD ? ((t += 1), (n += 1)) : i.type === C.s.UNICODE ? (r += 1) : ((e += 1), (t += 1));
            });
            let i = G + t * V + F;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, r],
            };
        }, [N]),
        [X, J] = i.useState(!0);
    i.useLayoutEffect(() => {
        J($ >= j);
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
                let n = N[e];
                if (null == n) return 0;
                let r = X ? M : 0;
                if (n.type === C.s.RECENT) return t ? 0 : x;
                if (n.type === C.s.GUILD) {
                    let n = N[e + 1];
                    return null != n && n.type !== C.s.GUILD ? (t ? k + -2 * U + L + r : L) : t ? r : L;
                }
                return t ? L + r : 2 * L;
            },
            [N, X],
        ),
        er = i.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(i.Fragment, { children: t }, e);
                },
            [],
        ),
        ei = X ? "shortcut" : "hiddenshortcut";
    return (0, r.jsx)(m.A, {
        categoryListRef: D,
        expressionsListRef: n,
        className: t,
        store: h.Om,
        categories: N,
        listPadding: K,
        onScroll: ee,
        renderCategoryListItem: W,
        renderSection: er,
        rowCount: N.length,
        categoryHeight: z,
        getScrollOffsetForIndex: en,
        rowCountBySection: Q,
        children: (e) =>
            $ >= j &&
            (0, r.jsx)(
                _.DUT,
                {
                    "aria-hidden": !X,
                    "aria-label": R.intl.string(R.t.dT0ctw),
                    className: s()(O.KB, { [O.h_]: !X }),
                    tabIndex: X ? 0 : -1,
                    onClick: () => et(e),
                    children: (0, r.jsx)(_.nm2, { size: "custom", color: "currentColor", height: w, width: w }),
                },
                ei,
            ),
    });
};
