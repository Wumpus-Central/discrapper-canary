"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(319060),
    u = n(939249),
    c = n(27232),
    d = n(406810),
    _ = n(797285),
    f = n(212245),
    p = n(724511),
    h = n(850992),
    E = n(151271),
    m = n(802019),
    g = n(71393),
    A = n(954571),
    I = n(240248),
    T = n(256449),
    S = n(679382),
    y = n(842086),
    N = n(378058),
    v = n(148355),
    C = n(652215),
    O = n(698279),
    R = n(985018),
    b = n(950646);
let D = (0, I.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    L = (0, I.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    w = (0, I.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    M = (0, I.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    P = (0, I.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    x = (0, I.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    k = [D, D, D, D],
    U = (L + w) * 2 + D,
    G = P + 2 * x,
    F = (e) => {
        let { stickersListRef: t, channel: n } = e,
            s = i.useRef(null),
            [l, I] = i.useState(!0),
            D = h.bM.useStore((e) => e.activeCategoryIndex),
            x = (0, T.pD)(n),
            {
                firstStandardStickerCategoryIndex: F,
                firstStandardStickerCategoryOffsetTop: V,
                guildCategoryCount: B,
                hasFirstPartyStickerPacks: H,
            } = i.useMemo(() => {
                let e = x.filter((e) => e.type === y.Z2.GUILD).length,
                    t = e + +(x[0]?.type === y.Z2.RECENT) + +(x[0]?.type === y.Z2.FAVORITE),
                    n = t * (L + w) - w + G;
                return {
                    firstStandardStickerCategoryIndex: t + 1,
                    firstStandardStickerCategoryOffsetTop: n,
                    guildCategoryCount: e,
                    hasFirstPartyStickerPacks: null != x.find((e) => e.type === y.Z2.PACK),
                };
            }, [x]);
        i.useLayoutEffect(() => {
            I(B >= 7);
        }, [B]);
        let {
                renderCategoryListItem: j,
                rowHeight: Y,
                onScroll: W,
            } = ((e) => {
                let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: s,
                        firstStandardStickerCategoryOffsetTop: l,
                        setShouldRenderShortcut: _,
                    } = e,
                    h = (0, f.p)(),
                    m = (0, E.RQ)((e) => "" !== e.searchQuery),
                    I = i.useCallback(
                        (e, s, l) => {
                            let _,
                                f = n[0]?.type === y.Z2.FAVORITE,
                                E = +!!f,
                                I = n[E]?.type === y.Z2.RECENT,
                                T = n.length;
                            if (0 === s && f)
                                return (0, r.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": T,
                                        "aria-posinset": s,
                                        children: (0, r.jsx)(u.D, {
                                            "aria-label": R.intl.string(R.t.y3LQCG),
                                            className: a()(b._0, b.dC, { [b.k1]: !m && 0 === t, [b.ls]: !I }),
                                            onClick: l,
                                            children: (0, r.jsx)(c.G, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: b.AB,
                                                height: M,
                                                width: M,
                                            }),
                                        }),
                                    },
                                    "favorites",
                                );
                            if (s === E && I)
                                return (0, r.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": T,
                                        "aria-posinset": s,
                                        children: (0, r.jsx)(u.D, {
                                            "aria-label": R.intl.string(R.t.RxAmVC),
                                            className: a()(b._0, b.dC, b.ls, { [b.k1]: !m && t === E }),
                                            onClick: l,
                                            children: (0, r.jsx)(d.O, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: b.AB,
                                                height: M,
                                                width: M,
                                            }),
                                        }),
                                    },
                                    "recent",
                                );
                            let D = t === s,
                                w = n[s],
                                P = n[s + 1],
                                x = null != P && w.type === y.Z2.GUILD && P.type !== y.Z2.GUILD,
                                k = w.type === y.Z2.PACK,
                                U = "",
                                G = null;
                            if (w.type === y.Z2.GUILD || w.type === y.Z2.EMPTY_GUILD_UPSELL) {
                                let e = g.A.getGuild(w.id);
                                null != e &&
                                    ((_ = e.id), (U = e.name), (G = (0, r.jsx)(p.A, { guild: e, isSelected: D })));
                            } else if (k) {
                                let e = S.A.getStickerPack(w.id);
                                null != e &&
                                    ((U = e.name),
                                    (G = (0, r.jsx)(v.A, {
                                        disableAnimation: !D || m,
                                        size: L,
                                        sticker: (0, N.Id)(e),
                                    })));
                            }
                            return (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(o.m, {
                                            position: "right",
                                            text: U,
                                            children: (0, r.jsx)("div", {
                                                role: "listitem",
                                                "aria-setsize": T,
                                                "aria-posinset": s,
                                                children: (0, r.jsx)(u.D, {
                                                    "aria-label": U,
                                                    className: a()(b._0, { [b.ND]: k, [b.Ms]: !m && D && k }),
                                                    onClick: () => {
                                                        w.type === y.Z2.PACK &&
                                                            A.default.track(C.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                                location: h?.location,
                                                                tab: O.kx.STICKER,
                                                                sticker_pack_id: w.id,
                                                                guild_id: _,
                                                            }),
                                                            l();
                                                    },
                                                    children: G,
                                                }),
                                            }),
                                        }),
                                        x ? (0, r.jsx)("hr", { className: b.ny }, "separator") : null,
                                    ],
                                },
                                w.id,
                            );
                        },
                        [t, h, m, n],
                    ),
                    T = i.useCallback((e, t) => (t ? U : 0), []);
                return {
                    getScrollOffsetForIndex: T,
                    renderCategoryListItem: I,
                    rowHeight: i.useCallback(
                        (e, t) => {
                            let r = n[t],
                                i = n[t + 1];
                            return L + (null != i && r.type === y.Z2.GUILD && i.type !== y.Z2.GUILD ? G : w);
                        },
                        [n],
                    ),
                    onScroll: i.useCallback(
                        (e) => {
                            let t = s.current?.getListDimensions();
                            null == t || _(e + t.height - P < l);
                        },
                        [l, s, _],
                    ),
                };
            })({
                activeIndex: D,
                stickerPickerCategories: x,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: V,
                setShouldRenderShortcut: I,
            }),
            K = i.useCallback(
                (e) => {
                    e(F), s.current?.scrollTo(V);
                },
                [F, V],
            );
        return (0, r.jsx)(m.A, {
            className: b.jv,
            categoryListRef: s,
            expressionsListRef: t,
            store: h.bM,
            listPadding: k,
            onScroll: W,
            renderCategoryListItem: j,
            rowCount: x.length,
            categories: x,
            categoryHeight: Y,
            children: (e) =>
                H &&
                l &&
                (0, r.jsx)(u.D, {
                    className: a()(b.Fe, { [b.Q6]: !l }),
                    onClick: () => K(e),
                    children: (0, r.jsx)(_.t, { size: "md", color: "currentColor" }),
                }),
        });
    };
