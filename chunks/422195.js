var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(477690),
    c = r(481060),
    d = r(2052),
    f = r(880949),
    _ = r(806966),
    h = r(28546),
    p = r(254494),
    m = r(430824),
    g = r(626135),
    E = r(624138),
    v = r(453070),
    I = r(926491),
    T = r(373228),
    b = r(378233),
    y = r(419922),
    S = r(981631),
    A = r(957825),
    N = r(388032),
    C = r(944727);
let R = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    O = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    D = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    L = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    x = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    w = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    P = [R, R, R, R],
    M = (O + D) * 2 + R,
    k = x + 2 * w,
    U = 7,
    B = (e) => {
        let { activeIndex: n, stickerPickerCategories: r, categoryListRef: i, firstStandardStickerCategoryOffsetTop: o, setShouldRenderShortcut: u } = e,
            _ = (0, d.O)(),
            p = (0, h.Iu)((e) => '' !== e.searchQuery),
            E = s.useCallback(
                (e, i, o) => {
                    var u, d;
                    let h;
                    let E = (null === (u = r[0]) || void 0 === u ? void 0 : u.type) === T.Ih.FAVORITE,
                        v = E ? 1 : 0,
                        R = (null === (d = r[v]) || void 0 === d ? void 0 : d.type) === T.Ih.RECENT,
                        D = r.length > 0,
                        x = r.length;
                    if (0 === i && E)
                        return (0, a.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': x,
                                'aria-posinset': i,
                                children: (0, a.jsx)(c.Clickable, {
                                    'aria-label': N.intl.string(N.t.y3LQCA),
                                    className: l()(C.stickerCategory, C.stickerCategoryGeneric, {
                                        [C.stickerCategoryGenericDisabled]: D && !E,
                                        [C.stickerCategoryGenericSelected]: !p && E && 0 === n
                                    }),
                                    onClick: o,
                                    children: (0, a.jsx)(c.StarIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: C.stickerCategoryGenericIcon,
                                        height: L,
                                        width: L
                                    })
                                })
                            },
                            'favorites'
                        );
                    if (i === v && R)
                        return (0, a.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': x,
                                'aria-posinset': i,
                                children: (0, a.jsx)(c.Clickable, {
                                    'aria-label': N.intl.string(N.t.RxAmVF),
                                    className: l()(C.stickerCategory, C.stickerCategoryGeneric, {
                                        [C.stickerCategoryGenericDisabled]: D && !R,
                                        [C.stickerCategoryGenericSelected]: !p && R && n === v
                                    }),
                                    onClick: o,
                                    children: (0, a.jsx)(c.ClockIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: C.stickerCategoryGenericIcon,
                                        height: L,
                                        width: L
                                    })
                                })
                            },
                            'recent'
                        );
                    let w = n === i,
                        P = r[i],
                        M = r[i + 1],
                        k = null != M && P.type === T.Ih.GUILD && M.type !== T.Ih.GUILD,
                        U = P.type === T.Ih.PACK,
                        B = '',
                        G = null;
                    if (P.type === T.Ih.GUILD || P.type === T.Ih.EMPTY_GUILD_UPSELL) {
                        let e = m.Z.getGuild(P.id);
                        null != e &&
                            ((h = e.id),
                            (B = e.name),
                            (G = (0, a.jsx)(f.Z, {
                                guild: e,
                                isSelected: w
                            })));
                    } else if (U) {
                        let e = I.Z.getStickerPack(P.id);
                        null != e &&
                            ((B = e.name),
                            (G = (0, a.jsx)(y.ZP, {
                                disableAnimation: !w || p,
                                size: O,
                                sticker: (0, b.Zt)(e)
                            })));
                    }
                    return (0, a.jsxs)(
                        s.Fragment,
                        {
                            children: [
                                (0, a.jsx)(c.Tooltip, {
                                    position: 'right',
                                    text: B,
                                    tooltipContentClassName: C.__invalid_tooltip,
                                    children: (e) =>
                                        (0, a.jsx)('div', {
                                            role: 'listitem',
                                            'aria-setsize': x,
                                            'aria-posinset': i,
                                            children: (0, a.jsx)(c.Clickable, {
                                                ...e,
                                                'aria-label': B,
                                                className: l()(C.stickerCategory, {
                                                    [C.firstPartyCategory]: U,
                                                    [C.firstPartyCategorySelected]: !p && w && U
                                                }),
                                                onClick: () => {
                                                    P.type === T.Ih.PACK &&
                                                        g.default.track(S.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: null == _ ? void 0 : _.location,
                                                            tab: A.X1.STICKER,
                                                            sticker_pack_id: P.id,
                                                            guild_id: h
                                                        }),
                                                        o();
                                                },
                                                children: G
                                            })
                                        })
                                }),
                                k ? (0, a.jsx)('hr', { className: C.guildCategorySeparator }, 'separator') : null
                            ]
                        },
                        P.id
                    );
                },
                [n, _, p, r]
            ),
            v = s.useCallback((e, n) => (n ? M : 0), []),
            R = s.useCallback(
                (e, n) => {
                    let i = r[n],
                        a = r[n + 1];
                    return O + (null != a && i.type === T.Ih.GUILD && a.type !== T.Ih.GUILD ? k : D);
                },
                [r]
            );
        return {
            getScrollOffsetForIndex: v,
            renderCategoryListItem: E,
            rowHeight: R,
            onScroll: s.useCallback(
                (e) => {
                    var n;
                    let r = null === (n = i.current) || void 0 === n ? void 0 : n.getListDimensions();
                    if (null != r) u(e + r.height - x < o);
                },
                [o, i, u]
            )
        };
    },
    G = (e) => {
        let { stickersListRef: n, channel: r } = e,
            i = s.useRef(null),
            [o, u] = s.useState(!0),
            d = _.ZN.useStore((e) => e.activeCategoryIndex),
            f = (0, v.Sd)(r),
            {
                firstStandardStickerCategoryIndex: h,
                firstStandardStickerCategoryOffsetTop: m,
                guildCategoryCount: g,
                hasFirstPartyStickerPacks: E
            } = s.useMemo(() => {
                var e, n;
                let r = f.filter((e) => e.type === T.Ih.GUILD).length,
                    i = (null === (e = f[0]) || void 0 === e ? void 0 : e.type) === T.Ih.RECENT,
                    a = r + (i ? 1 : 0) + ((null === (n = f[0]) || void 0 === n ? void 0 : n.type) === T.Ih.FAVORITE ? 1 : 0),
                    s = a * (O + D) - D + k;
                return {
                    firstStandardStickerCategoryIndex: a + 1,
                    firstStandardStickerCategoryOffsetTop: s,
                    guildCategoryCount: r,
                    hasFirstPartyStickerPacks: null != f.find((e) => e.type === T.Ih.PACK)
                };
            }, [f]);
        s.useLayoutEffect(() => {
            u(g >= U);
        }, [g]);
        let {
                renderCategoryListItem: I,
                rowHeight: b,
                onScroll: y
            } = B({
                activeIndex: d,
                stickerPickerCategories: f,
                categoryListRef: i,
                firstStandardStickerCategoryOffsetTop: m,
                setShouldRenderShortcut: u
            }),
            S = s.useCallback(
                (e) => {
                    var n;
                    e(h), null === (n = i.current) || void 0 === n || n.scrollTo(m);
                },
                [h, m]
            );
        return (0, a.jsx)(p.Z, {
            className: C.categoryList,
            categoryListRef: i,
            expressionsListRef: n,
            store: _.ZN,
            listPadding: P,
            onScroll: y,
            renderCategoryListItem: I,
            rowCount: f.length,
            categories: f,
            categoryHeight: b,
            children: (e) =>
                E &&
                o &&
                (0, a.jsx)(c.Clickable, {
                    className: l()(C.standardStickerShortcut, { [C.invisibleShortcut]: !o }),
                    onClick: () => S(e),
                    children: (0, a.jsx)(c.StickerIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
        });
    };
n.Z = G;
