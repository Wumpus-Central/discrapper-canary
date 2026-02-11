"use strict";
n.d(t, { A: () => W });
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
    h = n(775602),
    p = n(850992),
    g = n(802019),
    E = n(407698),
    A = n(531685),
    I = n(954571),
    T = n(240248),
    y = n(822123),
    S = n(535622),
    v = n(724511),
    C = n(484333),
    b = n(732139),
    N = n(652215),
    R = n(698279),
    O = n(985018),
    D = n(497481);
let L = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    w = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    x = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    P = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    M = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    k = (0, T.xI)(D.__invalid_unicodeCategoryShortcutHeight),
    U = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    G = (0, T.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    F = x + w + 2 * M,
    V = L + w,
    B = V + (U + 2 * G),
    j = x + P + 2 * M,
    H = 7;
function Y(e) {
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
        h = (0, u.rm)(`expression-guild-${n}`),
        p = l.type === b.s.GUILD ? null : l.id,
        g = t === n,
        A = l.type === b.s.GUILD ? l.guild : null,
        T = (0, r.jsxs)(_.DUT, {
            ...h,
            "aria-label": (0, y.wt)(l, A),
            className: s()({
                [D.ZG]: null != A,
                [D.Bj]: null == A,
                [D.s6]: null == A && g,
                [D.xg]: l.type === b.s.RECENT,
            }),
            onClick: () => {
                null != A &&
                    I.default.track(N.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: a?.location,
                        tab: R.kx.EMOJI,
                        guild_id: A.id,
                    }),
                    c(n);
            },
            children: [
                null != A
                    ? (0, r.jsx)(v.A, { guild: A, isSelected: g, shouldAnimate: !f && d, isLocked: l.isNitroLocked })
                    : null,
                null == A && null != p
                    ? (0, r.jsx)(S.A, { categoryId: p, className: D.Yl, height: x, width: x, size: "custom" })
                    : null,
            ],
        }),
        C = o[n + 1],
        O = null != C && l.type === b.s.GUILD && C.type !== b.s.GUILD;
    return null != A
        ? (0, r.jsxs)(i.Fragment, {
              children: [
                  (0, r.jsx)(E.Q, { guild: A, children: (0, r.jsx)("div", { children: T }) }),
                  O ? (0, r.jsx)("hr", { className: D.ny }, "separator") : null,
              ],
          })
        : T;
}
let W = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: a,
            intention: o,
            channel: u,
            fallbackGuildId: d,
            shouldShowSoundmojiInEmojiPicker: E = !1,
            showOnlyUnicode: I = !1,
        } = e,
        T = p.Om.useStore((e) => e.activeCategoryIndex),
        S = (0, C.cr)({ sectionDescriptors: a, emojiListRef: n }),
        v = (0, f.p)(),
        N = (0, y.ss)(o, u, u?.guild_id ?? d, E),
        R = i.useMemo(() => (I ? (0, y.CQ)() : N), [N, I]),
        L = i.useRef(null),
        M = (0, c.bG)([A.A], () => A.A.isFocused()),
        W = (0, c.bG)([h.A], () => h.A.useReducedMotion, []),
        K = i.useMemo(
            () =>
                l().memoize((e, t) => {
                    let n = R[t];
                    if (null != n)
                        return (0, r.jsx)(
                            Y,
                            {
                                activeIndex: T,
                                analyticsContext: v,
                                categories: R,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: S,
                                isWindowFocused: M,
                                useReducedMotion: W,
                            },
                            t,
                        );
                }),
            [T, v, R, S, M, W],
        ),
        $ = i.useMemo(() => [8, 8, 0, 8], []),
        z = i.useCallback(
            (e, t) => {
                let n = R[t];
                if (n.type === b.s.RECENT) return F;
                if (n.type === b.s.GUILD) {
                    let e = R[t + 1];
                    return null != e && e.type !== b.s.GUILD ? B : V;
                }
                return j;
            },
            [R],
        ),
        {
            nonUnicodeCategoryCount: q,
            firstUnicodeCategoryIndex: X,
            firstUnicodeCategoryOffsetTop: Z,
            rowCountBySection: Q,
        } = i.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                r = 0;
            R.forEach((i) => {
                i.type === b.s.GUILD ? ((t += 1), (n += 1)) : i.type === b.s.UNICODE ? (r += 1) : ((e += 1), (t += 1));
            });
            let i = F + t * V + B;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, r],
            };
        }, [R]),
        [J, ee] = i.useState(!0);
    i.useLayoutEffect(() => {
        ee(q >= H);
    }, [q]);
    let et = i.useCallback(
            (e) => {
                let t = L.current?.getListDimensions();
                null == t || (e + t.height - U >= Z ? ee(!1) : ee(!0));
            },
            [Z],
        ),
        en = i.useCallback(
            (e) => {
                e(X), L.current?.scrollTo(Z);
            },
            [Z, X],
        ),
        er = i.useCallback(
            (e, t) => {
                let n = R[e];
                if (null == n) return 0;
                let r = J ? k : 0;
                if (n.type === b.s.RECENT) return t ? 0 : P;
                if (n.type === b.s.GUILD) {
                    let n = R[e + 1];
                    return null != n && n.type !== b.s.GUILD ? (t ? U + -2 * G + w + r : w) : t ? r : w;
                }
                return t ? w + r : 2 * w;
            },
            [R, J],
        ),
        ei = i.useMemo(
            () =>
                function (e, t) {
                    return (0, r.jsx)(i.Fragment, { children: t }, e);
                },
            [],
        ),
        ea = J ? "shortcut" : "hiddenshortcut";
    return (0, r.jsx)(g.A, {
        categoryListRef: L,
        expressionsListRef: n,
        className: t,
        store: p.Om,
        categories: R,
        listPadding: $,
        onScroll: et,
        renderCategoryListItem: K,
        renderSection: ei,
        rowCount: R.length,
        categoryHeight: z,
        getScrollOffsetForIndex: er,
        rowCountBySection: Q,
        children: (e) =>
            q >= H &&
            (0, r.jsx)(
                _.DUT,
                {
                    "aria-hidden": !J,
                    "aria-label": O.intl.string(O.t.dT0ctw),
                    className: s()(D.KB, { [D.h_]: !J }),
                    tabIndex: J ? 0 : -1,
                    onClick: () => en(e),
                    children: (0, r.jsx)(_.nm2, { size: "custom", color: "currentColor", height: x, width: x }),
                },
                ea,
            ),
    });
};
