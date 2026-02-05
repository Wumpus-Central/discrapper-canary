"use strict";
n.d(t, { A: () => G });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(240248),
    E = n(256449),
    A = n(679382),
    I = n(842086),
    T = n(378058),
    y = n(148355),
    S = n(652215),
    v = n(698279),
    C = n(985018),
    b = n(89945);
let N = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    R = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    O = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    D = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    L = (0, g.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    w = (0, g.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    x = [N, N, N, N],
    P = (R + O) * 2 + N,
    M = L + 2 * w,
    k = 7,
    U = (e) => {
        let {
                activeIndex: t,
                stickerPickerCategories: n,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: l,
                setShouldRenderShortcut: _,
            } = e,
            p = (0, c.p)(),
            g = (0, f.RQ)((e) => "" !== e.searchQuery),
            E = i.useCallback(
                (e, a, l) => {
                    let c,
                        _ = n[0]?.type === I.Z2.FAVORITE,
                        f = +!!_,
                        E = n[f]?.type === I.Z2.RECENT,
                        N = n.length > 0,
                        O = n.length;
                    if (0 === a && _)
                        return (0, r.jsx)(
                            "div",
                            {
                                role: "listitem",
                                "aria-setsize": O,
                                "aria-posinset": a,
                                children: (0, r.jsx)(u.DUT, {
                                    "aria-label": C.intl.string(C.t.y3LQCG),
                                    className: s()(b._0, b.dC, {
                                        [b.d8]: N && !_,
                                        [b.k1]: !g && _ && 0 === t,
                                        [b.ls]: !E,
                                    }),
                                    onClick: l,
                                    children: (0, r.jsx)(u.Gg5, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: b.AB,
                                        height: D,
                                        width: D,
                                    }),
                                }),
                            },
                            "favorites",
                        );
                    if (a === f && E)
                        return (0, r.jsx)(
                            "div",
                            {
                                role: "listitem",
                                "aria-setsize": O,
                                "aria-posinset": a,
                                children: (0, r.jsx)(u.DUT, {
                                    "aria-label": C.intl.string(C.t.RxAmVC),
                                    className: s()(b._0, b.dC, b.ls, { [b.d8]: N && !E, [b.k1]: !g && E && t === f }),
                                    onClick: l,
                                    children: (0, r.jsx)(u.O4, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: b.AB,
                                        height: D,
                                        width: D,
                                    }),
                                }),
                            },
                            "recent",
                        );
                    let L = t === a,
                        w = n[a],
                        x = n[a + 1],
                        P = null != x && w.type === I.Z2.GUILD && x.type !== I.Z2.GUILD,
                        M = w.type === I.Z2.PACK,
                        k = "",
                        U = null;
                    if (w.type === I.Z2.GUILD || w.type === I.Z2.EMPTY_GUILD_UPSELL) {
                        let e = h.A.getGuild(w.id);
                        null != e && ((c = e.id), (k = e.name), (U = (0, r.jsx)(d.A, { guild: e, isSelected: L })));
                    } else if (M) {
                        let e = A.A.getStickerPack(w.id);
                        null != e &&
                            ((k = e.name),
                            (U = (0, r.jsx)(y.A, { disableAnimation: !L || g, size: R, sticker: (0, T.Id)(e) })));
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
                                        "aria-setsize": O,
                                        "aria-posinset": a,
                                        children: (0, r.jsx)(u.DUT, {
                                            "aria-label": k,
                                            className: s()(b._0, { [b.ND]: M, [b.Ms]: !g && L && M }),
                                            onClick: () => {
                                                w.type === I.Z2.PACK &&
                                                    m.default.track(S.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
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
                                P ? (0, r.jsx)("hr", { className: b.ny }, "separator") : null,
                            ],
                        },
                        w.id,
                    );
                },
                [t, p, g, n],
            ),
            N = i.useCallback((e, t) => (t ? P : 0), []);
        return {
            getScrollOffsetForIndex: N,
            renderCategoryListItem: E,
            rowHeight: i.useCallback(
                (e, t) => {
                    let r = n[t],
                        i = n[t + 1];
                    return R + (null != i && r.type === I.Z2.GUILD && i.type !== I.Z2.GUILD ? M : O);
                },
                [n],
            ),
            onScroll: i.useCallback(
                (e) => {
                    let t = a.current?.getListDimensions();
                    null == t || _(e + t.height - L < l);
                },
                [l, a, _],
            ),
        };
    },
    G = (e) => {
        let { stickersListRef: t, channel: n } = e,
            a = i.useRef(null),
            [o, l] = i.useState(!0),
            c = _.bM.useStore((e) => e.activeCategoryIndex),
            d = (0, E.pD)(n),
            {
                firstStandardStickerCategoryIndex: f,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: m,
                hasFirstPartyStickerPacks: g,
            } = i.useMemo(() => {
                let e = d.filter((e) => e.type === I.Z2.GUILD).length,
                    t = e + +(d[0]?.type === I.Z2.RECENT) + +(d[0]?.type === I.Z2.FAVORITE),
                    n = t * (R + O) - O + M;
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
                onScroll: y,
            } = U({
                activeIndex: c,
                stickerPickerCategories: d,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: h,
                setShouldRenderShortcut: l,
            }),
            S = i.useCallback(
                (e) => {
                    e(f), a.current?.scrollTo(h);
                },
                [f, h],
            );
        return (0, r.jsx)(p.A, {
            className: b.jv,
            categoryListRef: a,
            expressionsListRef: t,
            store: _.bM,
            listPadding: x,
            onScroll: y,
            renderCategoryListItem: A,
            rowCount: d.length,
            categories: d,
            categoryHeight: T,
            children: (e) =>
                g &&
                o &&
                (0, r.jsx)(u.DUT, {
                    className: s()(b.Fe, { [b.Q6]: !o }),
                    onClick: () => S(e),
                    children: (0, r.jsx)(u.tEP, { size: "md", color: "currentColor" }),
                }),
        });
    };
