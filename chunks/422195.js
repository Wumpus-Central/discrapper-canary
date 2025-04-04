n.d(t, { Z: () => F }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(477690),
    l = n(481060),
    c = n(2052),
    u = n(880949),
    d = n(806966),
    f = n(28546),
    _ = n(254494),
    p = n(430824),
    h = n(626135),
    m = n(624138),
    g = n(453070),
    E = n(926491),
    b = n(373228),
    y = n(378233),
    v = n(419922),
    O = n(981631),
    I = n(957825),
    S = n(388032),
    T = n(619333);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = (0, m.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    w = (0, m.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    D = (0, m.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    L = (0, m.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    x = (0, m.Mg)(s.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    M = (0, m.Mg)(s.Z.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    k = [P, P, P, P],
    j = (w + D) * 2 + P,
    U = x + 2 * M,
    G = 7,
    B = (e) => {
        let { activeIndex: t, stickerPickerCategories: n, categoryListRef: o, firstStandardStickerCategoryOffsetTop: s, setShouldRenderShortcut: d } = e,
            _ = (0, c.O)(),
            m = (0, f.Iu)((e) => '' !== e.searchQuery),
            g = i.useCallback(
                (e, o, s) => {
                    var c, d;
                    let f,
                        g = (null == (c = n[0]) ? void 0 : c.type) === b.Ih.FAVORITE,
                        N = +!!g,
                        C = (null == (d = n[N]) ? void 0 : d.type) === b.Ih.RECENT,
                        P = n.length > 0,
                        D = n.length;
                    if (0 === o && g)
                        return (0, r.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': D,
                                'aria-posinset': o,
                                children: (0, r.jsx)(l.P3F, {
                                    'aria-label': S.NW.string(S.t.y3LQCA),
                                    className: a()(T.stickerCategory, T.stickerCategoryGeneric, {
                                        [T.stickerCategoryGenericDisabled]: P && !g,
                                        [T.stickerCategoryGenericSelected]: !m && g && 0 === t
                                    }),
                                    onClick: s,
                                    children: (0, r.jsx)(l.r7p, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: T.stickerCategoryGenericIcon,
                                        height: L,
                                        width: L
                                    })
                                })
                            },
                            'favorites'
                        );
                    if (o === N && C)
                        return (0, r.jsx)(
                            'div',
                            {
                                role: 'listitem',
                                'aria-setsize': D,
                                'aria-posinset': o,
                                children: (0, r.jsx)(l.P3F, {
                                    'aria-label': S.NW.string(S.t.RxAmVF),
                                    className: a()(T.stickerCategory, T.stickerCategoryGeneric, {
                                        [T.stickerCategoryGenericDisabled]: P && !C,
                                        [T.stickerCategoryGenericSelected]: !m && C && t === N
                                    }),
                                    onClick: s,
                                    children: (0, r.jsx)(l.T39, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        className: T.stickerCategoryGenericIcon,
                                        height: L,
                                        width: L
                                    })
                                })
                            },
                            'recent'
                        );
                    let x = t === o,
                        M = n[o],
                        k = n[o + 1],
                        j = null != k && M.type === b.Ih.GUILD && k.type !== b.Ih.GUILD,
                        U = M.type === b.Ih.PACK,
                        G = '',
                        B = null;
                    if (M.type === b.Ih.GUILD || M.type === b.Ih.EMPTY_GUILD_UPSELL) {
                        let e = p.Z.getGuild(M.id);
                        null != e &&
                            ((f = e.id),
                            (G = e.name),
                            (B = (0, r.jsx)(u.Z, {
                                guild: e,
                                isSelected: x
                            })));
                    } else if (U) {
                        let e = E.Z.getStickerPack(M.id);
                        null != e &&
                            ((G = e.name),
                            (B = (0, r.jsx)(v.Z, {
                                disableAnimation: !x || m,
                                size: w,
                                sticker: (0, y.Zt)(e)
                            })));
                    }
                    return (0, r.jsxs)(
                        i.Fragment,
                        {
                            children: [
                                (0, r.jsx)(l.ua7, {
                                    position: 'right',
                                    text: G,
                                    tooltipContentClassName: T.__invalid_tooltip,
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            role: 'listitem',
                                            'aria-setsize': D,
                                            'aria-posinset': o,
                                            children: (0, r.jsx)(
                                                l.P3F,
                                                R(A({}, e), {
                                                    'aria-label': G,
                                                    className: a()(T.stickerCategory, {
                                                        [T.firstPartyCategory]: U,
                                                        [T.firstPartyCategorySelected]: !m && x && U
                                                    }),
                                                    onClick: () => {
                                                        M.type === b.Ih.PACK &&
                                                            h.default.track(O.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                                location: null == _ ? void 0 : _.location,
                                                                tab: I.X1.STICKER,
                                                                sticker_pack_id: M.id,
                                                                guild_id: f
                                                            }),
                                                            s();
                                                    },
                                                    children: B
                                                })
                                            )
                                        })
                                }),
                                j ? (0, r.jsx)('hr', { className: T.guildCategorySeparator }, 'separator') : null
                            ]
                        },
                        M.id
                    );
                },
                [t, _, m, n]
            ),
            N = i.useCallback((e, t) => (t ? j : 0), []);
        return {
            getScrollOffsetForIndex: N,
            renderCategoryListItem: g,
            rowHeight: i.useCallback(
                (e, t) => {
                    let r = n[t],
                        i = n[t + 1];
                    return w + (null != i && r.type === b.Ih.GUILD && i.type !== b.Ih.GUILD ? U : D);
                },
                [n]
            ),
            onScroll: i.useCallback(
                (e) => {
                    var t;
                    let n = null == (t = o.current) ? void 0 : t.getListDimensions();
                    null != n && d(e + n.height - x < s);
                },
                [s, o, d]
            )
        };
    },
    F = (e) => {
        let { stickersListRef: t, channel: n } = e,
            o = i.useRef(null),
            [s, c] = i.useState(!0),
            u = d.ZN.useStore((e) => e.activeCategoryIndex),
            f = (0, g.Sd)(n),
            {
                firstStandardStickerCategoryIndex: p,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: m,
                hasFirstPartyStickerPacks: E
            } = i.useMemo(() => {
                var e, t;
                let n = f.filter((e) => e.type === b.Ih.GUILD).length,
                    r = n + +((null == (e = f[0]) ? void 0 : e.type) === b.Ih.RECENT) + +((null == (t = f[0]) ? void 0 : t.type) === b.Ih.FAVORITE),
                    i = r * (w + D) - D + U;
                return {
                    firstStandardStickerCategoryIndex: r + 1,
                    firstStandardStickerCategoryOffsetTop: i,
                    guildCategoryCount: n,
                    hasFirstPartyStickerPacks: null != f.find((e) => e.type === b.Ih.PACK)
                };
            }, [f]);
        i.useLayoutEffect(() => {
            c(m >= G);
        }, [m]);
        let {
                renderCategoryListItem: y,
                rowHeight: v,
                onScroll: O
            } = B({
                activeIndex: u,
                stickerPickerCategories: f,
                categoryListRef: o,
                firstStandardStickerCategoryOffsetTop: h,
                setShouldRenderShortcut: c
            }),
            I = i.useCallback(
                (e) => {
                    var t;
                    e(p), null == (t = o.current) || t.scrollTo(h);
                },
                [p, h]
            );
        return (0, r.jsx)(_.Z, {
            className: T.categoryList,
            categoryListRef: o,
            expressionsListRef: t,
            store: d.ZN,
            listPadding: k,
            onScroll: O,
            renderCategoryListItem: y,
            rowCount: f.length,
            categories: f,
            categoryHeight: v,
            children: (e) =>
                E &&
                s &&
                (0, r.jsx)(l.P3F, {
                    className: a()(T.standardStickerShortcut, { [T.invisibleShortcut]: !s }),
                    onClick: () => I(e),
                    children: (0, r.jsx)(l.SlE, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
        });
    };
