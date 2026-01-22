n.d(t, {
    A: () => U,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(319060),
    c = n(397927),
    u = n(212245),
    d = n(724511),
    f = n(850992),
    p = n(151271),
    _ = n(802019),
    h = n(71393),
    m = n(954571),
    g = n(240248),
    E = n(256449),
    b = n(679382),
    y = n(842086),
    O = n(378058),
    A = n(148355),
    v = n(652215),
    S = n(698279),
    I = n(985018),
    T = n(89945);
let C = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    N = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    R = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    w = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    P = (0, g.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    D = (0, g.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    x = [C, C, C, C],
    L = (N + R) * 2 + C,
    j = P + 2 * D,
    M = 7,
    k = (e) => {
        let {
                activeIndex: t,
                stickerPickerCategories: n,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: l,
                setShouldRenderShortcut: f,
            } = e,
            _ = (0, u.p)(),
            g = (0, p.RQ)((e) => "" !== e.searchQuery),
            E = i.useCallback(
                (e, a, l) => {
                    var u, f;
                    let p,
                        E = (null == (u = n[0]) ? void 0 : u.type) === y.Z2.FAVORITE,
                        C = +!!E,
                        R = (null == (f = n[C]) ? void 0 : f.type) === y.Z2.RECENT,
                        P = n.length > 0,
                        D = n.length;
                    if (0 === a && E)
                        return (0, r.jsx)(
                            "div",
                            {
                                role: "listitem",
                                "aria-setsize": D,
                                "aria-posinset": a,
                                children: (0, r.jsx)(c.DUT, {
                                    "aria-label": I.intl.string(I.t.y3LQCG),
                                    className: s()(T._0, T.dC, {
                                        [T.d8]: P && !E,
                                        [T.k1]: !g && E && 0 === t,
                                        [T.ls]: !R,
                                    }),
                                    onClick: l,
                                    children: (0, r.jsx)(c.Gg5, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: T.AB,
                                        height: w,
                                        width: w,
                                    }),
                                }),
                            },
                            "favorites",
                        );
                    if (a === C && R)
                        return (0, r.jsx)(
                            "div",
                            {
                                role: "listitem",
                                "aria-setsize": D,
                                "aria-posinset": a,
                                children: (0, r.jsx)(c.DUT, {
                                    "aria-label": I.intl.string(I.t.RxAmVC),
                                    className: s()(T._0, T.dC, T.ls, {
                                        [T.d8]: P && !R,
                                        [T.k1]: !g && R && t === C,
                                    }),
                                    onClick: l,
                                    children: (0, r.jsx)(c.O4, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: T.AB,
                                        height: w,
                                        width: w,
                                    }),
                                }),
                            },
                            "recent",
                        );
                    let x = t === a,
                        L = n[a],
                        j = n[a + 1],
                        M = null != j && L.type === y.Z2.GUILD && j.type !== y.Z2.GUILD,
                        k = L.type === y.Z2.PACK,
                        U = "",
                        G = null;
                    if (L.type === y.Z2.GUILD || L.type === y.Z2.EMPTY_GUILD_UPSELL) {
                        let e = h.A.getGuild(L.id);
                        null != e &&
                            ((p = e.id),
                            (U = e.name),
                            (G = (0, r.jsx)(d.A, {
                                guild: e,
                                isSelected: x,
                            })));
                    } else if (k) {
                        let e = b.A.getStickerPack(L.id);
                        null != e &&
                            ((U = e.name),
                            (G = (0, r.jsx)(A.A, {
                                disableAnimation: !x || g,
                                size: N,
                                sticker: (0, O.Id)(e),
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
                                        "aria-setsize": D,
                                        "aria-posinset": a,
                                        children: (0, r.jsx)(c.DUT, {
                                            "aria-label": U,
                                            className: s()(T._0, {
                                                [T.ND]: k,
                                                [T.Ms]: !g && x && k,
                                            }),
                                            onClick: () => {
                                                L.type === y.Z2.PACK &&
                                                    m.default.track(v.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                        location: null == _ ? void 0 : _.location,
                                                        tab: S.kx.STICKER,
                                                        sticker_pack_id: L.id,
                                                        guild_id: p,
                                                    }),
                                                    l();
                                            },
                                            children: G,
                                        }),
                                    }),
                                }),
                                M
                                    ? (0, r.jsx)(
                                          "hr",
                                          {
                                              className: T.ny,
                                          },
                                          "separator",
                                      )
                                    : null,
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
                    return N + (null != i && r.type === y.Z2.GUILD && i.type !== y.Z2.GUILD ? j : R);
                },
                [n],
            ),
            onScroll: i.useCallback(
                (e) => {
                    var t;
                    let n = null == (t = a.current) ? void 0 : t.getListDimensions();
                    null == n || f(e + n.height - P < l);
                },
                [l, a, f],
            ),
        };
    },
    U = (e) => {
        let { stickersListRef: t, channel: n } = e,
            a = i.useRef(null),
            [o, l] = i.useState(!0),
            u = f.bM.useStore((e) => e.activeCategoryIndex),
            d = (0, E.pD)(n),
            {
                firstStandardStickerCategoryIndex: p,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: m,
                hasFirstPartyStickerPacks: g,
            } = i.useMemo(() => {
                var e, t;
                let n = d.filter((e) => e.type === y.Z2.GUILD).length,
                    r =
                        n +
                        +((null == (e = d[0]) ? void 0 : e.type) === y.Z2.RECENT) +
                        +((null == (t = d[0]) ? void 0 : t.type) === y.Z2.FAVORITE),
                    i = r * (N + R) - R + j;
                return {
                    firstStandardStickerCategoryIndex: r + 1,
                    firstStandardStickerCategoryOffsetTop: i,
                    guildCategoryCount: n,
                    hasFirstPartyStickerPacks: null != d.find((e) => e.type === y.Z2.PACK),
                };
            }, [d]);
        i.useLayoutEffect(() => {
            l(m >= M);
        }, [m]);
        let {
                renderCategoryListItem: b,
                rowHeight: O,
                onScroll: A,
            } = k({
                activeIndex: u,
                stickerPickerCategories: d,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: h,
                setShouldRenderShortcut: l,
            }),
            v = i.useCallback(
                (e) => {
                    var t;
                    e(p), null == (t = a.current) || t.scrollTo(h);
                },
                [p, h],
            );
        return (0, r.jsx)(_.A, {
            className: T.jv,
            categoryListRef: a,
            expressionsListRef: t,
            store: f.bM,
            listPadding: x,
            onScroll: A,
            renderCategoryListItem: b,
            rowCount: d.length,
            categories: d,
            categoryHeight: O,
            children: (e) =>
                g &&
                o &&
                (0, r.jsx)(c.DUT, {
                    className: s()(T.Fe, {
                        [T.Q6]: !o,
                    }),
                    onClick: () => v(e),
                    children: (0, r.jsx)(c.tEP, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
        });
    };
