"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(319060),
    c = n(939249),
    u = n(27232),
    d = n(406810),
    h = n(797285),
    m = n(212245),
    p = n(724511),
    f = n(850992),
    g = n(151271),
    _ = n(802019),
    x = n(71393),
    A = n(954571),
    C = n(240248),
    E = n(256449),
    I = n(679382),
    v = n(842086),
    y = n(378058),
    S = n(148355),
    b = n(652215),
    N = n(698279),
    T = n(985018),
    j = n(950646);
let R = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    w = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    L = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    M = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    k = (0, C.xI)(o.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    O = (0, C.xI)(o.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    P = [R, R, R, R],
    D = (w + L) * 2 + R,
    U = k + 2 * O,
    V = (e) => {
        let { stickersListRef: t, channel: n } = e,
            s = l.useRef(null),
            [o, C] = l.useState(!0),
            R = f.bM.useStore((e) => e.activeCategoryIndex),
            O = (0, E.pD)(n),
            {
                firstStandardStickerCategoryIndex: V,
                firstStandardStickerCategoryOffsetTop: G,
                guildCategoryCount: F,
                hasFirstPartyStickerPacks: B,
            } = l.useMemo(() => {
                let e = O.filter((e) => e.type === v.Z2.GUILD).length,
                    t = e + +(O[0]?.type === v.Z2.RECENT) + +(O[0]?.type === v.Z2.FAVORITE),
                    n = t * (w + L) - L + U;
                return {
                    firstStandardStickerCategoryIndex: t + 1,
                    firstStandardStickerCategoryOffsetTop: n,
                    guildCategoryCount: e,
                    hasFirstPartyStickerPacks: null != O.find((e) => e.type === v.Z2.PACK),
                };
            }, [O]);
        l.useLayoutEffect(() => {
            C(F >= 7);
        }, [F]);
        let {
                renderCategoryListItem: H,
                rowHeight: W,
                onScroll: K,
            } = ((e) => {
                let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: s,
                        firstStandardStickerCategoryOffsetTop: o,
                        setShouldRenderShortcut: h,
                    } = e,
                    f = (0, m.p)(),
                    _ = (0, g.RQ)((e) => "" !== e.searchQuery),
                    C = l.useCallback(
                        (e, s, o) => {
                            let h,
                                m = n[0]?.type === v.Z2.FAVORITE,
                                g = +!!m,
                                C = n[g]?.type === v.Z2.RECENT,
                                E = n.length;
                            if (0 === s && m)
                                return (0, i.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": E,
                                        "aria-posinset": s,
                                        children: (0, i.jsx)(c.D, {
                                            "aria-label": T.intl.string(T.t.y3LQCG),
                                            className: r()(j._0, j.dC, { [j.k1]: !_ && 0 === t, [j.ls]: !C }),
                                            onClick: o,
                                            children: (0, i.jsx)(u.G, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: j.AB,
                                                height: M,
                                                width: M,
                                            }),
                                        }),
                                    },
                                    "favorites",
                                );
                            if (s === g && C)
                                return (0, i.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": E,
                                        "aria-posinset": s,
                                        children: (0, i.jsx)(c.D, {
                                            "aria-label": T.intl.string(T.t.RxAmVC),
                                            className: r()(j._0, j.dC, j.ls, { [j.k1]: !_ && t === g }),
                                            onClick: o,
                                            children: (0, i.jsx)(d.O, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: j.AB,
                                                height: M,
                                                width: M,
                                            }),
                                        }),
                                    },
                                    "recent",
                                );
                            let R = t === s,
                                L = n[s],
                                k = n[s + 1],
                                O = null != k && L.type === v.Z2.GUILD && k.type !== v.Z2.GUILD,
                                P = L.type === v.Z2.PACK,
                                D = "",
                                U = null;
                            if (L.type === v.Z2.GUILD || L.type === v.Z2.EMPTY_GUILD_UPSELL) {
                                let e = x.A.getGuild(L.id);
                                null != e &&
                                    ((h = e.id), (D = e.name), (U = (0, i.jsx)(p.A, { guild: e, isSelected: R })));
                            } else if (P) {
                                let e = I.A.getStickerPack(L.id);
                                null != e &&
                                    ((D = e.name),
                                    (U = (0, i.jsx)(S.A, {
                                        disableAnimation: !R || _,
                                        size: w,
                                        sticker: (0, y.Id)(e),
                                    })));
                            }
                            return (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(a.m, {
                                            position: "right",
                                            text: D,
                                            children: (0, i.jsx)("div", {
                                                role: "listitem",
                                                "aria-setsize": E,
                                                "aria-posinset": s,
                                                children: (0, i.jsx)(c.D, {
                                                    "aria-label": D,
                                                    className: r()(j._0, { [j.ND]: P, [j.Ms]: !_ && R && P }),
                                                    onClick: () => {
                                                        L.type === v.Z2.PACK &&
                                                            A.default.track(b.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                                location: f?.location,
                                                                tab: N.kx.STICKER,
                                                                sticker_pack_id: L.id,
                                                                guild_id: h,
                                                            }),
                                                            o();
                                                    },
                                                    children: U,
                                                }),
                                            }),
                                        }),
                                        O ? (0, i.jsx)("hr", { className: j.ny }, "separator") : null,
                                    ],
                                },
                                L.id,
                            );
                        },
                        [t, f, _, n],
                    ),
                    E = l.useCallback((e, t) => (t ? D : 0), []);
                return {
                    getScrollOffsetForIndex: E,
                    renderCategoryListItem: C,
                    rowHeight: l.useCallback(
                        (e, t) => {
                            let i = n[t],
                                l = n[t + 1];
                            return w + (null != l && i.type === v.Z2.GUILD && l.type !== v.Z2.GUILD ? U : L);
                        },
                        [n],
                    ),
                    onScroll: l.useCallback(
                        (e) => {
                            let t = s.current?.getListDimensions();
                            null == t || h(e + t.height - k < o);
                        },
                        [o, s, h],
                    ),
                };
            })({
                activeIndex: R,
                stickerPickerCategories: O,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: G,
                setShouldRenderShortcut: C,
            }),
            z = l.useCallback(
                (e) => {
                    e(V), s.current?.scrollTo(G);
                },
                [V, G],
            );
        return (0, i.jsx)(_.A, {
            className: j.jv,
            categoryListRef: s,
            expressionsListRef: t,
            store: f.bM,
            listPadding: P,
            onScroll: K,
            renderCategoryListItem: H,
            rowCount: O.length,
            categories: O,
            categoryHeight: W,
            children: (e) =>
                B &&
                o &&
                (0, i.jsx)(c.D, {
                    className: r()(j.Fe, { [j.Q6]: !o }),
                    onClick: () => z(e),
                    children: (0, i.jsx)(h.t, { size: "md", color: "currentColor" }),
                }),
        });
    };
