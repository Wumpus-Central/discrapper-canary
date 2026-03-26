"use strict";
n.d(t, { A: () => G });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(319060),
    u = n(397927),
    c = n(212245),
    d = n(724511),
    _ = n(850992),
    f = n(151271),
    p = n(802019),
    h = n(71393),
    m = n(954571),
    E = n(240248),
    g = n(256449),
    A = n(679382),
    I = n(842086),
    T = n(378058),
    S = n(148355),
    y = n(652215),
    v = n(698279),
    N = n(985018),
    C = n(792166);
let R = (0, E.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    O = (0, E.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    b = (0, E.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    D = (0, E.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    L = (0, E.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    w = (0, E.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    M = [R, R, R, R],
    x = (O + b) * 2 + R,
    P = L + 2 * w,
    k = 7,
    U = (e) => {
        let {
                activeIndex: t,
                stickerPickerCategories: n,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: l,
                setShouldRenderShortcut: _,
            } = e,
            p = (0, c.p)(),
            E = (0, f.RQ)((e) => "" !== e.searchQuery),
            g = i.useCallback(
                (e, s, l) => {
                    let c,
                        _ = n[0]?.type === I.Z2.FAVORITE,
                        f = +!!_,
                        g = n[f]?.type === I.Z2.RECENT,
                        R = n.length > 0,
                        b = n.length;
                    if (0 === s && _)
                        return (0, r.jsx)(
                            "div",
                            {
                                role: "listitem",
                                "aria-setsize": b,
                                "aria-posinset": s,
                                children: (0, r.jsx)(u.DUT, {
                                    "aria-label": N.intl.string(N.t.y3LQCG),
                                    className: a()(C._0, C.dC, {
                                        [C.d8]: R && !_,
                                        [C.k1]: !E && _ && 0 === t,
                                        [C.ls]: !g,
                                    }),
                                    onClick: l,
                                    children: (0, r.jsx)(u.Gg5, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: C.AB,
                                        height: D,
                                        width: D,
                                    }),
                                }),
                            },
                            "favorites",
                        );
                    if (s === f && g)
                        return (0, r.jsx)(
                            "div",
                            {
                                role: "listitem",
                                "aria-setsize": b,
                                "aria-posinset": s,
                                children: (0, r.jsx)(u.DUT, {
                                    "aria-label": N.intl.string(N.t.RxAmVC),
                                    className: a()(C._0, C.dC, C.ls, { [C.d8]: R && !g, [C.k1]: !E && g && t === f }),
                                    onClick: l,
                                    children: (0, r.jsx)(u.O4, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: C.AB,
                                        height: D,
                                        width: D,
                                    }),
                                }),
                            },
                            "recent",
                        );
                    let L = t === s,
                        w = n[s],
                        M = n[s + 1],
                        x = null != M && w.type === I.Z2.GUILD && M.type !== I.Z2.GUILD,
                        P = w.type === I.Z2.PACK,
                        k = "",
                        U = null;
                    if (w.type === I.Z2.GUILD || w.type === I.Z2.EMPTY_GUILD_UPSELL) {
                        let e = h.A.getGuild(w.id);
                        null != e && ((c = e.id), (k = e.name), (U = (0, r.jsx)(d.A, { guild: e, isSelected: L })));
                    } else if (P) {
                        let e = A.A.getStickerPack(w.id);
                        null != e &&
                            ((k = e.name),
                            (U = (0, r.jsx)(S.A, { disableAnimation: !L || E, size: O, sticker: (0, T.Id)(e) })));
                    }
                    return (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(o.m, {
                                    position: "right",
                                    text: k,
                                    children: (0, r.jsx)("div", {
                                        role: "listitem",
                                        "aria-setsize": b,
                                        "aria-posinset": s,
                                        children: (0, r.jsx)(u.DUT, {
                                            "aria-label": k,
                                            className: a()(C._0, { [C.ND]: P, [C.Ms]: !E && L && P }),
                                            onClick: () => {
                                                w.type === I.Z2.PACK &&
                                                    m.default.track(y.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                        location: p?.location,
                                                        tab: v.kx.STICKER,
                                                        sticker_pack_id: w.id,
                                                        guild_id: c,
                                                    }),
                                                    l();
                                            },
                                            children: U,
                                        }),
                                    }),
                                }),
                                x ? (0, r.jsx)("hr", { className: C.ny }, "separator") : null,
                            ],
                        },
                        w.id,
                    );
                },
                [t, p, E, n],
            ),
            R = i.useCallback((e, t) => (t ? x : 0), []);
        return {
            getScrollOffsetForIndex: R,
            renderCategoryListItem: g,
            rowHeight: i.useCallback(
                (e, t) => {
                    let r = n[t],
                        i = n[t + 1];
                    return O + (null != i && r.type === I.Z2.GUILD && i.type !== I.Z2.GUILD ? P : b);
                },
                [n],
            ),
            onScroll: i.useCallback(
                (e) => {
                    let t = s.current?.getListDimensions();
                    null == t || _(e + t.height - L < l);
                },
                [l, s, _],
            ),
        };
    },
    G = (e) => {
        let { stickersListRef: t, channel: n } = e,
            s = i.useRef(null),
            [o, l] = i.useState(!0),
            c = _.bM.useStore((e) => e.activeCategoryIndex),
            d = (0, g.pD)(n),
            {
                firstStandardStickerCategoryIndex: f,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: m,
                hasFirstPartyStickerPacks: E,
            } = i.useMemo(() => {
                let e = d.filter((e) => e.type === I.Z2.GUILD).length,
                    t = e + +(d[0]?.type === I.Z2.RECENT) + +(d[0]?.type === I.Z2.FAVORITE),
                    n = t * (O + b) - b + P;
                return {
                    firstStandardStickerCategoryIndex: t + 1,
                    firstStandardStickerCategoryOffsetTop: n,
                    guildCategoryCount: e,
                    hasFirstPartyStickerPacks: null != d.find((e) => e.type === I.Z2.PACK),
                };
            }, [d]);
        i.useLayoutEffect(() => {
            l(m >= k);
        }, [m]);
        let {
                renderCategoryListItem: A,
                rowHeight: T,
                onScroll: S,
            } = U({
                activeIndex: c,
                stickerPickerCategories: d,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: h,
                setShouldRenderShortcut: l,
            }),
            y = i.useCallback(
                (e) => {
                    e(f), s.current?.scrollTo(h);
                },
                [f, h],
            );
        return (0, r.jsx)(p.A, {
            className: C.jv,
            categoryListRef: s,
            expressionsListRef: t,
            store: _.bM,
            listPadding: M,
            onScroll: S,
            renderCategoryListItem: A,
            rowCount: d.length,
            categories: d,
            categoryHeight: T,
            children: (e) =>
                E &&
                o &&
                (0, r.jsx)(u.DUT, {
                    className: a()(C.Fe, { [C.Q6]: !o }),
                    onClick: () => y(e),
                    children: (0, r.jsx)(u.tEP, { size: "md", color: "currentColor" }),
                }),
        });
    };
