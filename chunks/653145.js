"use strict";
n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(837381),
    u = n(311907),
    d = n(319060),
    h = n(939249),
    m = n(460905),
    p = n(212245),
    f = n(775602),
    g = n(850992),
    _ = n(802019),
    x = n(407698),
    A = n(531685),
    C = n(954571),
    E = n(240248),
    I = n(822123),
    v = n(535622),
    y = n(724511),
    S = n(484333),
    b = n(732139),
    N = n(652215),
    T = n(698279),
    j = n(985018),
    R = n(619182);
let w = (0, E.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    L = (0, E.xI)(d.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    M = (0, E.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    k = (0, E.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    O = (0, E.xI)(d.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    P = (0, E.xI)(R.__invalid_unicodeCategoryShortcutHeight),
    D = (0, E.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    U = (0, E.xI)(d.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    V = M + L + 2 * O,
    G = w + L,
    F = G + (D + 2 * U),
    B = M + k + 2 * O;
function H(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: s,
            categories: a,
            category: o,
            handleCategorySelect: u,
            isWindowFocused: d,
            useReducedMotion: m,
        } = e,
        p = (0, c.rm)(`expression-guild-${n}`),
        f = o.type === b.s.GUILD ? null : o.id,
        g = t === n,
        _ = o.type === b.s.GUILD ? o.guild : null,
        A = (0, i.jsxs)(h.D, {
            ...p,
            "aria-label": (0, I.wt)(o, _),
            className: r()({
                [R.ZG]: null != _,
                [R.Bj]: null == _,
                [R.s6]: null == _ && g,
                [R.xg]: o.type === b.s.RECENT,
            }),
            onClick: () => {
                null != _ &&
                    C.default.track(N.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: s?.location,
                        tab: T.kx.EMOJI,
                        guild_id: _.id,
                    }),
                    u(n);
            },
            children: [
                null != _
                    ? (0, i.jsx)(y.A, { guild: _, isSelected: g, shouldAnimate: !m && d, isLocked: o.isNitroLocked })
                    : null,
                null == _ && null != f
                    ? (0, i.jsx)(v.A, { categoryId: f, className: R.Yl, height: M, width: M, size: "custom" })
                    : null,
            ],
        }),
        E = a[n + 1],
        S = null != E && o.type === b.s.GUILD && E.type !== b.s.GUILD;
    return null != _
        ? (0, i.jsxs)(l.Fragment, {
              children: [
                  (0, i.jsx)(x.Q, { guild: _, children: (0, i.jsx)("div", { children: A }) }),
                  S ? (0, i.jsx)("hr", { className: R.ny }, "separator") : null,
              ],
          })
        : A;
}
let W = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: s,
            intention: a,
            channel: c,
            fallbackGuildId: d,
            shouldShowSoundmojiInEmojiPicker: x = !1,
            showOnlyUnicode: C = !1,
        } = e,
        E = g.Om.useStore((e) => e.activeCategoryIndex),
        v = (0, S.cr)({ sectionDescriptors: s, emojiListRef: n }),
        y = (0, p.p)(),
        N = (0, I.ss)(a, c, c?.guild_id ?? d, x),
        T = l.useMemo(() => (C ? (0, I.CQ)() : N), [N, C]),
        w = l.useRef(null),
        O = (0, u.bG)([A.A], () => A.A.isFocused()),
        W = (0, u.bG)([f.A], () => f.A.useReducedMotion, []),
        K = l.useMemo(
            () =>
                o().memoize((e, t) => {
                    let n = T[t];
                    if (null != n)
                        return (0, i.jsx)(
                            H,
                            {
                                activeIndex: E,
                                analyticsContext: y,
                                categories: T,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: v,
                                isWindowFocused: O,
                                useReducedMotion: W,
                            },
                            t,
                        );
                }),
            [E, y, T, v, O, W],
        ),
        z = l.useMemo(() => [8, 8, 0, 8], []),
        Z = l.useCallback(
            (e, t) => {
                let n = T[t];
                if (n.type === b.s.RECENT) return V;
                if (n.type === b.s.GUILD) {
                    let e = T[t + 1];
                    return null != e && e.type !== b.s.GUILD ? F : G;
                }
                return B;
            },
            [T],
        ),
        {
            nonUnicodeCategoryCount: q,
            firstUnicodeCategoryIndex: Y,
            firstUnicodeCategoryOffsetTop: J,
            rowCountBySection: $,
        } = l.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            T.forEach((l) => {
                l.type === b.s.GUILD ? ((t += 1), (n += 1)) : l.type === b.s.UNICODE ? (i += 1) : ((e += 1), (t += 1));
            });
            let l = V + t * G + F;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: l,
                rowCountBySection: [e, n, i],
            };
        }, [T]),
        [X, Q] = l.useState(!0);
    l.useLayoutEffect(() => {
        Q(q >= 7);
    }, [q]);
    let ee = l.useCallback(
            (e) => {
                let t = w.current?.getListDimensions();
                null == t || (e + t.height - D >= J ? Q(!1) : Q(!0));
            },
            [J],
        ),
        et = l.useCallback(
            (e) => {
                e(Y), w.current?.scrollTo(J);
            },
            [J, Y],
        ),
        en = l.useCallback(
            (e, t) => {
                let n = T[e];
                if (null == n) return 0;
                let i = X ? P : 0;
                if (n.type === b.s.RECENT) return t ? 0 : k;
                if (n.type === b.s.GUILD) {
                    let n = T[e + 1];
                    return null != n && n.type !== b.s.GUILD ? (t ? D + -2 * U + L + i : L) : t ? i : L;
                }
                return t ? L + i : 2 * L;
            },
            [T, X],
        ),
        ei = l.useMemo(
            () =>
                function (e, t) {
                    return (0, i.jsx)(l.Fragment, { children: t }, e);
                },
            [],
        ),
        el = X ? "shortcut" : "hiddenshortcut";
    return (0, i.jsx)(_.A, {
        categoryListRef: w,
        expressionsListRef: n,
        className: t,
        store: g.Om,
        categories: T,
        listPadding: z,
        onScroll: ee,
        renderCategoryListItem: K,
        renderSection: ei,
        rowCount: T.length,
        categoryHeight: Z,
        getScrollOffsetForIndex: en,
        rowCountBySection: $,
        children: (e) =>
            q >= 7 &&
            (0, i.jsx)(
                h.D,
                {
                    "aria-hidden": !X,
                    "aria-label": j.intl.string(j.t.dT0ctw),
                    className: r()(R.KB, { [R.h_]: !X }),
                    tabIndex: X ? 0 : -1,
                    onClick: () => et(e),
                    children: (0, i.jsx)(m.n, { size: "custom", color: "currentColor", height: M, width: M }),
                },
                el,
            ),
    });
};
