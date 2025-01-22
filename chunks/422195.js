var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(477690),
    c = r(481060),
    d = r(2052),
    f = r(880949),
    p = r(806966),
    h = r(28546),
    _ = r(254494),
    m = r(430824),
    g = r(626135),
    E = r(624138),
    v = r(453070),
    y = r(926491),
    b = r(373228),
    I = r(378233),
    T = r(419922),
    S = r(981631),
    A = r(957825),
    C = r(388032),
    N = r(944727);
let R = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    O = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    D = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    x = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    L = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    w = (0, E.Mg)(u.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    P = [R, R, R, R],
    M = (O + D) * 2 + R,
    k = L + 2 * w,
    U = 7,
    B = (e) => {
        let { activeIndex: n, stickerPickerCategories: r, categoryListRef: i, firstStandardStickerCategoryOffsetTop: s, setShouldRenderShortcut: u } = e,
            p = (0, d.O)(),
            _ = (0, h.Iu)((e) => '' !== e.searchQuery),
            E = o.useCallback(
                (e, i, s) => {
                    var u, d;
                    let h;
                    let E = (null === (u = r[0]) || void 0 === u ? void 0 : u.type) === b.Ih.FAVORITE,
                        v = E ? 1 : 0,
                        R = (null === (d = r[v]) || void 0 === d ? void 0 : d.type) === b.Ih.RECENT,
                        D = r.length > 0,
                        L = r.length;
                    if (0 === i && E)
                        return (0, a.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': L,
                                'aria-posinset': i,
                                children: (0, a.jsx)(c.Clickable, {
                                    'aria-label': C.intl.string(C.t.y3LQCA),
                                    className: l()(N.stickerCategory, N.stickerCategoryGeneric, {
                                        [N.stickerCategoryGenericDisabled]: D && !E,
                                        [N.stickerCategoryGenericSelected]: !_ && E && 0 === n
                                    }),
                                    onClick: s,
                                    children: (0, a.jsx)(c.StarIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: N.stickerCategoryGenericIcon,
                                        height: x,
                                        width: x
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
                                'aria-setsize': L,
                                'aria-posinset': i,
                                children: (0, a.jsx)(c.Clickable, {
                                    'aria-label': C.intl.string(C.t.RxAmVF),
                                    className: l()(N.stickerCategory, N.stickerCategoryGeneric, {
                                        [N.stickerCategoryGenericDisabled]: D && !R,
                                        [N.stickerCategoryGenericSelected]: !_ && R && n === v
                                    }),
                                    onClick: s,
                                    children: (0, a.jsx)(c.ClockIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: N.stickerCategoryGenericIcon,
                                        height: x,
                                        width: x
                                    })
                                })
                            },
                            'recent'
                        );
                    let w = n === i,
                        P = r[i],
                        M = r[i + 1],
                        k = null != M && P.type === b.Ih.GUILD && M.type !== b.Ih.GUILD,
                        U = P.type === b.Ih.PACK,
                        B = '',
                        G = null;
                    if (P.type === b.Ih.GUILD || P.type === b.Ih.EMPTY_GUILD_UPSELL) {
                        let e = m.Z.getGuild(P.id);
                        null != e &&
                            ((h = e.id),
                            (B = e.name),
                            (G = (0, a.jsx)(f.Z, {
                                guild: e,
                                isSelected: w
                            })));
                    } else if (U) {
                        let e = y.Z.getStickerPack(P.id);
                        null != e &&
                            ((B = e.name),
                            (G = (0, a.jsx)(T.ZP, {
                                disableAnimation: !w || _,
                                size: O,
                                sticker: (0, I.Zt)(e)
                            })));
                    }
                    return (0, a.jsxs)(
                        o.Fragment,
                        {
                            children: [
                                (0, a.jsx)(c.Tooltip, {
                                    position: 'right',
                                    text: B,
                                    tooltipContentClassName: N.__invalid_tooltip,
                                    children: (e) =>
                                        (0, a.jsx)('div', {
                                            role: 'listitem',
                                            'aria-setsize': L,
                                            'aria-posinset': i,
                                            children: (0, a.jsx)(c.Clickable, {
                                                ...e,
                                                'aria-label': B,
                                                className: l()(N.stickerCategory, {
                                                    [N.firstPartyCategory]: U,
                                                    [N.firstPartyCategorySelected]: !_ && w && U
                                                }),
                                                onClick: () => {
                                                    P.type === b.Ih.PACK &&
                                                        g.default.track(S.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: null == p ? void 0 : p.location,
                                                            tab: A.X1.STICKER,
                                                            sticker_pack_id: P.id,
                                                            guild_id: h
                                                        }),
                                                        s();
                                                },
                                                children: G
                                            })
                                        })
                                }),
                                k ? (0, a.jsx)('hr', { className: N.guildCategorySeparator }, 'separator') : null
                            ]
                        },
                        P.id
                    );
                },
                [n, p, _, r]
            ),
            v = o.useCallback((e, n) => (n ? M : 0), []),
            R = o.useCallback(
                (e, n) => {
                    let i = r[n],
                        a = r[n + 1];
                    return O + (null != a && i.type === b.Ih.GUILD && a.type !== b.Ih.GUILD ? k : D);
                },
                [r]
            );
        return {
            getScrollOffsetForIndex: v,
            renderCategoryListItem: E,
            rowHeight: R,
            onScroll: o.useCallback(
                (e) => {
                    var n;
                    let r = null === (n = i.current) || void 0 === n ? void 0 : n.getListDimensions();
                    if (null != r) u(e + r.height - L < s);
                },
                [s, i, u]
            )
        };
    },
    G = (e) => {
        let { stickersListRef: n, channel: r } = e,
            i = o.useRef(null),
            [s, u] = o.useState(!0),
            d = p.ZN.useStore((e) => e.activeCategoryIndex),
            f = (0, v.Sd)(r),
            {
                firstStandardStickerCategoryIndex: h,
                firstStandardStickerCategoryOffsetTop: m,
                guildCategoryCount: g,
                hasFirstPartyStickerPacks: E
            } = o.useMemo(() => {
                var e, n;
                let r = f.filter((e) => e.type === b.Ih.GUILD).length,
                    i = (null === (e = f[0]) || void 0 === e ? void 0 : e.type) === b.Ih.RECENT,
                    a = r + (i ? 1 : 0) + ((null === (n = f[0]) || void 0 === n ? void 0 : n.type) === b.Ih.FAVORITE ? 1 : 0),
                    o = a * (O + D) - D + k;
                return {
                    firstStandardStickerCategoryIndex: a + 1,
                    firstStandardStickerCategoryOffsetTop: o,
                    guildCategoryCount: r,
                    hasFirstPartyStickerPacks: null != f.find((e) => e.type === b.Ih.PACK)
                };
            }, [f]);
        o.useLayoutEffect(() => {
            u(g >= U);
        }, [g]);
        let {
                renderCategoryListItem: y,
                rowHeight: I,
                onScroll: T
            } = B({
                activeIndex: d,
                stickerPickerCategories: f,
                categoryListRef: i,
                firstStandardStickerCategoryOffsetTop: m,
                setShouldRenderShortcut: u
            }),
            S = o.useCallback(
                (e) => {
                    var n;
                    e(h), null === (n = i.current) || void 0 === n || n.scrollTo(m);
                },
                [h, m]
            );
        return (0, a.jsx)(_.Z, {
            className: N.categoryList,
            categoryListRef: i,
            expressionsListRef: n,
            store: p.ZN,
            listPadding: P,
            onScroll: T,
            renderCategoryListItem: y,
            rowCount: f.length,
            categories: f,
            categoryHeight: I,
            children: (e) =>
                E &&
                s &&
                (0, a.jsx)(c.Clickable, {
                    className: l()(N.standardStickerShortcut, { [N.invisibleShortcut]: !s }),
                    onClick: () => S(e),
                    children: (0, a.jsx)(c.StickerIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
        });
    };
n.Z = G;
