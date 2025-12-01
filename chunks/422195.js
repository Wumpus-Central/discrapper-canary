n.d(t, { Z: () => U }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(477690),
    c = n(481060),
    u = n(2052),
    d = n(880949),
    f = n(806966),
    p = n(28546),
    _ = n(254494),
    m = n(430824),
    h = n(626135),
    g = n(624138),
    E = n(453070),
    b = n(926491),
    y = n(373228),
    O = n(378233),
    v = n(419922),
    S = n(981631),
    I = n(957825),
    T = n(388032),
    A = n(163289);
let C = (0, g.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    N = (0, g.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    P = (0, g.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    R = (0, g.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    w = (0, g.Mg)(l.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    D = (0, g.Mg)(l.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    x = [C, C, C, C],
    L = (N + P) * 2 + C,
    j = w + 2 * D,
    M = 7,
    k = (e) => {
        let {
                activeIndex: t,
                stickerPickerCategories: n,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: l,
                setShouldRenderShortcut: f,
            } = e,
            _ = (0, u.O)(),
            g = (0, p.Iu)((e) => "" !== e.searchQuery),
            E = i.useCallback(
                (e, a, l) => {
                    var u, f;
                    let p,
                        E = (null == (u = n[0]) ? void 0 : u.type) === y.Ih.FAVORITE,
                        C = +!!E,
                        P = (null == (f = n[C]) ? void 0 : f.type) === y.Ih.RECENT,
                        w = n.length > 0,
                        D = n.length;
                    if (0 === a && E)
                        return (0, r.jsx)(
                            "div",
                            {
                                role: "listitem",
                                "aria-setsize": D,
                                "aria-posinset": a,
                                children: (0, r.jsx)(c.P3F, {
                                    "aria-label": T.intl.string(T.t.y3LQCG),
                                    className: o()(A.stickerCategory, A.stickerCategoryGeneric, {
                                        [A.stickerCategoryGenericDisabled]: w && !E,
                                        [A.stickerCategoryGenericSelected]: !g && E && 0 === t,
                                        [A.stickerCategoryGenericLast]: !P,
                                    }),
                                    onClick: l,
                                    children: (0, r.jsx)(c.r7p, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: A.stickerCategoryGenericIcon,
                                        height: R,
                                        width: R,
                                    }),
                                }),
                            },
                            "favorites",
                        );
                    if (a === C && P)
                        return (0, r.jsx)(
                            "div",
                            {
                                role: "listitem",
                                "aria-setsize": D,
                                "aria-posinset": a,
                                children: (0, r.jsx)(c.P3F, {
                                    "aria-label": T.intl.string(T.t.RxAmVC),
                                    className: o()(
                                        A.stickerCategory,
                                        A.stickerCategoryGeneric,
                                        A.stickerCategoryGenericLast,
                                        {
                                            [A.stickerCategoryGenericDisabled]: w && !P,
                                            [A.stickerCategoryGenericSelected]: !g && P && t === C,
                                        },
                                    ),
                                    onClick: l,
                                    children: (0, r.jsx)(c.T39, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: A.stickerCategoryGenericIcon,
                                        height: R,
                                        width: R,
                                    }),
                                }),
                            },
                            "recent",
                        );
                    let x = t === a,
                        L = n[a],
                        j = n[a + 1],
                        M = null != j && L.type === y.Ih.GUILD && j.type !== y.Ih.GUILD,
                        k = L.type === y.Ih.PACK,
                        U = "",
                        G = null;
                    if (L.type === y.Ih.GUILD || L.type === y.Ih.EMPTY_GUILD_UPSELL) {
                        let e = m.Z.getGuild(L.id);
                        null != e &&
                            ((p = e.id),
                            (U = e.name),
                            (G = (0, r.jsx)(d.Z, {
                                guild: e,
                                isSelected: x,
                            })));
                    } else if (k) {
                        let e = b.Z.getStickerPack(L.id);
                        null != e &&
                            ((U = e.name),
                            (G = (0, r.jsx)(v.Z, {
                                disableAnimation: !x || g,
                                size: N,
                                sticker: (0, O.Zt)(e),
                            })));
                    }
                    return (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(s.u, {
                                    position: "right",
                                    text: U,
                                    children: (0, r.jsx)("div", {
                                        role: "listitem",
                                        "aria-setsize": D,
                                        "aria-posinset": a,
                                        children: (0, r.jsx)(c.P3F, {
                                            "aria-label": U,
                                            className: o()(A.stickerCategory, {
                                                [A.firstPartyCategory]: k,
                                                [A.firstPartyCategorySelected]: !g && x && k,
                                            }),
                                            onClick: () => {
                                                L.type === y.Ih.PACK &&
                                                    h.default.track(S.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                        location: null == _ ? void 0 : _.location,
                                                        tab: I.X1.STICKER,
                                                        sticker_pack_id: L.id,
                                                        guild_id: p,
                                                    }),
                                                    l();
                                            },
                                            children: G,
                                        }),
                                    }),
                                }),
                                M ? (0, r.jsx)("hr", { className: A.guildCategorySeparator }, "separator") : null,
                            ],
                        },
                        L.id,
                    );
                },
                [t, _, g, n],
            ),
            C = i.useCallback((e, t) => (t ? L : 0), []);
        return {
            getScrollOffsetForIndex: C,
            renderCategoryListItem: E,
            rowHeight: i.useCallback(
                (e, t) => {
                    let r = n[t],
                        i = n[t + 1];
                    return N + (null != i && r.type === y.Ih.GUILD && i.type !== y.Ih.GUILD ? j : P);
                },
                [n],
            ),
            onScroll: i.useCallback(
                (e) => {
                    var t;
                    let n = null == (t = a.current) ? void 0 : t.getListDimensions();
                    null != n && f(e + n.height - w < l);
                },
                [l, a, f],
            ),
        };
    },
    U = (e) => {
        let { stickersListRef: t, channel: n } = e,
            a = i.useRef(null),
            [s, l] = i.useState(!0),
            u = f.ZN.useStore((e) => e.activeCategoryIndex),
            d = (0, E.Sd)(n),
            {
                firstStandardStickerCategoryIndex: p,
                firstStandardStickerCategoryOffsetTop: m,
                guildCategoryCount: h,
                hasFirstPartyStickerPacks: g,
            } = i.useMemo(() => {
                var e, t;
                let n = d.filter((e) => e.type === y.Ih.GUILD).length,
                    r =
                        n +
                        +((null == (e = d[0]) ? void 0 : e.type) === y.Ih.RECENT) +
                        +((null == (t = d[0]) ? void 0 : t.type) === y.Ih.FAVORITE),
                    i = r * (N + P) - P + j;
                return {
                    firstStandardStickerCategoryIndex: r + 1,
                    firstStandardStickerCategoryOffsetTop: i,
                    guildCategoryCount: n,
                    hasFirstPartyStickerPacks: null != d.find((e) => e.type === y.Ih.PACK),
                };
            }, [d]);
        i.useLayoutEffect(() => {
            l(h >= M);
        }, [h]);
        let {
                renderCategoryListItem: b,
                rowHeight: O,
                onScroll: v,
            } = k({
                activeIndex: u,
                stickerPickerCategories: d,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: m,
                setShouldRenderShortcut: l,
            }),
            S = i.useCallback(
                (e) => {
                    var t;
                    e(p), null == (t = a.current) || t.scrollTo(m);
                },
                [p, m],
            );
        return (0, r.jsx)(_.Z, {
            className: A.categoryList,
            categoryListRef: a,
            expressionsListRef: t,
            store: f.ZN,
            listPadding: x,
            onScroll: v,
            renderCategoryListItem: b,
            rowCount: d.length,
            categories: d,
            categoryHeight: O,
            children: (e) =>
                g &&
                s &&
                (0, r.jsx)(c.P3F, {
                    className: o()(A.standardStickerShortcut, { [A.invisibleShortcut]: !s }),
                    onClick: () => S(e),
                    children: (0, r.jsx)(c.SlE, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
        });
    };
