n.d(t, { Z: () => U }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(477690),
    l = n(481060),
    u = n(2052),
    c = n(880949),
    d = n(806966),
    f = n(28546),
    _ = n(254494),
    p = n(430824),
    h = n(626135),
    m = n(624138),
    g = n(453070),
    E = n(926491),
    v = n(373228),
    y = n(378233),
    I = n(419922),
    T = n(981631),
    b = n(957825),
    S = n(388032),
    A = n(348491);
let N = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    C = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    R = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    O = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    D = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    L = (0, m.Mg)(o.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    x = [N, N, N, N],
    P = (C + R) * 2 + N,
    w = D + 2 * L,
    M = 7,
    k = (e) => {
        let { activeIndex: t, stickerPickerCategories: n, categoryListRef: a, firstStandardStickerCategoryOffsetTop: o, setShouldRenderShortcut: d } = e,
            _ = (0, u.O)(),
            m = (0, f.Iu)((e) => '' !== e.searchQuery),
            g = r.useCallback(
                (e, a, o) => {
                    var u, d;
                    let f;
                    let g = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === v.Ih.FAVORITE,
                        N = g ? 1 : 0,
                        R = (null === (d = n[N]) || void 0 === d ? void 0 : d.type) === v.Ih.RECENT,
                        D = n.length > 0,
                        L = n.length;
                    if (0 === a && g)
                        return (0, i.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': L,
                                'aria-posinset': a,
                                children: (0, i.jsx)(l.P3F, {
                                    'aria-label': S.intl.string(S.t.y3LQCA),
                                    className: s()(A.stickerCategory, A.stickerCategoryGeneric, {
                                        [A.stickerCategoryGenericDisabled]: D && !g,
                                        [A.stickerCategoryGenericSelected]: !m && g && 0 === t
                                    }),
                                    onClick: o,
                                    children: (0, i.jsx)(l.r7p, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: A.stickerCategoryGenericIcon,
                                        height: O,
                                        width: O
                                    })
                                })
                            },
                            'favorites'
                        );
                    if (a === N && R)
                        return (0, i.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': L,
                                'aria-posinset': a,
                                children: (0, i.jsx)(l.P3F, {
                                    'aria-label': S.intl.string(S.t.RxAmVF),
                                    className: s()(A.stickerCategory, A.stickerCategoryGeneric, {
                                        [A.stickerCategoryGenericDisabled]: D && !R,
                                        [A.stickerCategoryGenericSelected]: !m && R && t === N
                                    }),
                                    onClick: o,
                                    children: (0, i.jsx)(l.T39, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: A.stickerCategoryGenericIcon,
                                        height: O,
                                        width: O
                                    })
                                })
                            },
                            'recent'
                        );
                    let x = t === a,
                        P = n[a],
                        w = n[a + 1],
                        M = null != w && P.type === v.Ih.GUILD && w.type !== v.Ih.GUILD,
                        k = P.type === v.Ih.PACK,
                        U = '',
                        G = null;
                    if (P.type === v.Ih.GUILD || P.type === v.Ih.EMPTY_GUILD_UPSELL) {
                        let e = p.Z.getGuild(P.id);
                        null != e &&
                            ((f = e.id),
                            (U = e.name),
                            (G = (0, i.jsx)(c.Z, {
                                guild: e,
                                isSelected: x
                            })));
                    } else if (k) {
                        let e = E.Z.getStickerPack(P.id);
                        null != e &&
                            ((U = e.name),
                            (G = (0, i.jsx)(I.ZP, {
                                disableAnimation: !x || m,
                                size: C,
                                sticker: (0, y.Zt)(e)
                            })));
                    }
                    return (0, i.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                (0, i.jsx)(l.ua7, {
                                    position: 'right',
                                    text: U,
                                    tooltipContentClassName: A.__invalid_tooltip,
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            role: 'listitem',
                                            'aria-setsize': L,
                                            'aria-posinset': a,
                                            children: (0, i.jsx)(l.P3F, {
                                                ...e,
                                                'aria-label': U,
                                                className: s()(A.stickerCategory, {
                                                    [A.firstPartyCategory]: k,
                                                    [A.firstPartyCategorySelected]: !m && x && k
                                                }),
                                                onClick: () => {
                                                    P.type === v.Ih.PACK &&
                                                        h.default.track(T.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: null == _ ? void 0 : _.location,
                                                            tab: b.X1.STICKER,
                                                            sticker_pack_id: P.id,
                                                            guild_id: f
                                                        }),
                                                        o();
                                                },
                                                children: G
                                            })
                                        })
                                }),
                                M ? (0, i.jsx)('hr', { className: A.guildCategorySeparator }, 'separator') : null
                            ]
                        },
                        P.id
                    );
                },
                [t, _, m, n]
            ),
            N = r.useCallback((e, t) => (t ? P : 0), []);
        return {
            getScrollOffsetForIndex: N,
            renderCategoryListItem: g,
            rowHeight: r.useCallback(
                (e, t) => {
                    let i = n[t],
                        r = n[t + 1];
                    return C + (null != r && i.type === v.Ih.GUILD && r.type !== v.Ih.GUILD ? w : R);
                },
                [n]
            ),
            onScroll: r.useCallback(
                (e) => {
                    var t;
                    let n = null === (t = a.current) || void 0 === t ? void 0 : t.getListDimensions();
                    null != n && d(e + n.height - D < o);
                },
                [o, a, d]
            )
        };
    },
    U = (e) => {
        let { stickersListRef: t, channel: n } = e,
            a = r.useRef(null),
            [o, u] = r.useState(!0),
            c = d.ZN.useStore((e) => e.activeCategoryIndex),
            f = (0, g.Sd)(n),
            {
                firstStandardStickerCategoryIndex: p,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: m,
                hasFirstPartyStickerPacks: E
            } = r.useMemo(() => {
                var e, t;
                let n = f.filter((e) => e.type === v.Ih.GUILD).length,
                    i = n + ((null === (e = f[0]) || void 0 === e ? void 0 : e.type) === v.Ih.RECENT ? 1 : 0) + ((null === (t = f[0]) || void 0 === t ? void 0 : t.type) === v.Ih.FAVORITE ? 1 : 0),
                    r = i * (C + R) - R + w;
                return {
                    firstStandardStickerCategoryIndex: i + 1,
                    firstStandardStickerCategoryOffsetTop: r,
                    guildCategoryCount: n,
                    hasFirstPartyStickerPacks: null != f.find((e) => e.type === v.Ih.PACK)
                };
            }, [f]);
        r.useLayoutEffect(() => {
            u(m >= M);
        }, [m]);
        let {
                renderCategoryListItem: y,
                rowHeight: I,
                onScroll: T
            } = k({
                activeIndex: c,
                stickerPickerCategories: f,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: h,
                setShouldRenderShortcut: u
            }),
            b = r.useCallback(
                (e) => {
                    var t;
                    e(p), null === (t = a.current) || void 0 === t || t.scrollTo(h);
                },
                [p, h]
            );
        return (0, i.jsx)(_.Z, {
            className: A.categoryList,
            categoryListRef: a,
            expressionsListRef: t,
            store: d.ZN,
            listPadding: x,
            onScroll: T,
            renderCategoryListItem: y,
            rowCount: f.length,
            categories: f,
            categoryHeight: I,
            children: (e) =>
                E &&
                o &&
                (0, i.jsx)(l.P3F, {
                    className: s()(A.standardStickerShortcut, { [A.invisibleShortcut]: !o }),
                    onClick: () => b(e),
                    children: (0, i.jsx)(l.SlE, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
        });
    };
