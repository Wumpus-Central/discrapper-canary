var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(873546),
    f = r(442837),
    _ = r(336317),
    h = r(477690),
    p = r(788911),
    m = r(2052),
    g = r(906732),
    E = r(218867),
    v = r(806966),
    I = r(28546),
    T = r(691251),
    b = r(98528),
    y = r(551058),
    S = r(536442),
    A = r(140465),
    N = r(775412),
    C = r(104494),
    R = r(639119),
    O = r(53691),
    D = r(75145),
    L = r(631771),
    x = r(695346),
    w = r(594174),
    P = r(626135),
    M = r(111361),
    k = r(74538),
    U = r(624138),
    B = r(543241),
    G = r(883661),
    Z = r(880949),
    F = r(784222),
    V = r(172800),
    j = r(149203),
    H = r(981631),
    Y = r(957825),
    W = r(474936),
    K = r(388032),
    z = r(332706);
let q = 0,
    Q = 0,
    X = (0, U.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    J = (0, U.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    $ = (0, U.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    ee = (0, U.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    et = (0, U.Mg)(h.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    en = (0, U.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    er = 16,
    ei = (0, U.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ea = 41,
    es = 33,
    eo = (e) => e + 2 * ei,
    el = (e) => {
        let { collapsedSections: n, diversitySurrogate: r, emojiGrid: i, emojiSize: o, onEmojiSelect: u, searchQuery: d, sectionDescriptors: h, setCollapsedSections: p, getEmojiItemProps: g, getEmojiRowProps: E, isScrolling: I, isUsingKeyboardNavigation: b, allowAnimatedEmoji: N, channelGuildId: C, messageId: R, isBurstReaction: O, listHeaderClassName: L, activeSectionIndex: x, upsellGlowOpacity: w, emojiListRef: M } = e,
            k = (0, m.O)(),
            U = s.useRef(H.xAR),
            W = s.useMemo(() => ('' !== r ? _.Z.convert.toCodePoint(r) : ''), [r]),
            K = s.useCallback(
                (e) => {
                    let n = h[e],
                        r = h[e + 1];
                    return e >= h.length - 1 ? n.isNitroLocked : n.isNitroLocked && !r.isNitroLocked;
                },
                [h]
            ),
            q = s.useCallback(
                (e) => {
                    if (e >= h.length - 1) return !1;
                    let n = h[e],
                        r = h[e + 1];
                    return !n.isNitroLocked && r.isNitroLocked;
                },
                [h]
            ),
            ei = s.useCallback(
                function (e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = new Set(n),
                        a = n.has(e);
                    a ? i.delete(e) : i.add(e),
                        null != r &&
                            P.default.track(H.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: k.location,
                                tab: Y.X1.EMOJI,
                                collapsed: !a,
                                guild_id: r.id
                            }),
                        p(i);
                },
                [k, n, p]
            ),
            eo = s.useCallback((e) => {
                let { columnIndex: n, visibleRowIndex: r } = e,
                    i = e.type === F.ld.EMOJI ? e.emoji.allNamesString : e.name;
                U.current !== H.xAR && window.cancelAnimationFrame(U.current),
                    (U.current = window.requestAnimationFrame(() => {
                        v.kJ.setInspectedExpressionPosition(n, r, T.u.MOUSE_EVENT), v.kJ.setSearchPlaceholder(i), (U.current = H.xAR);
                    }));
            }, []),
            el = (0, f.e7)([S.qc], () => S.qc.hasHotspot(S.v6.FAVORITE_EMOJI_TOOLTIP), []),
            eu = s.useMemo(
                () =>
                    c().memoize((e, n) => {
                        let r = i[e],
                            s = h[n.sectionIndex],
                            l = () => {
                                var e;
                                null === (e = M.current) || void 0 === e || e.scrollToSectionTop(n.sectionIndex, { animate: !0 });
                            };
                        return (0, a.jsx)(
                            V.Z,
                            {
                                emojiDescriptors: r,
                                emojiSize: o,
                                surrogateCodePoint: W,
                                onInspect: eo,
                                onSelect: u,
                                getEmojiItemProps: g,
                                getEmojiRowProps: E,
                                isScrolling: I,
                                isUsingKeyboardNavigation: b,
                                rowIndex: e,
                                allowAnimatedEmoji: N,
                                showEmojiFavoriteTooltip: el,
                                channelGuildId: C,
                                category: s.sectionId,
                                selectedItemClassName: z.__invalid_selectedItem,
                                messageId: R,
                                isBurstReaction: O,
                                inNitroLockedSection: s.isNitroLocked,
                                handleScrollUpOnSectionCollapse: l
                            },
                            e
                        );
                    }),
                [i, h, o, W, eo, u, g, E, I, b, N, el, C, R, O, M]
            );
        s.useEffect(
            () => () => {
                var e, n;
                return null === (n = eu.cache) || void 0 === n ? void 0 : null === (e = n.clear) || void 0 === e ? void 0 : e.call(n);
            },
            [eu]
        );
        let ec = s.useMemo(
                () =>
                    c().memoize((e) => {
                        let r = h[e];
                        if (null == r) return;
                        let { guild: i, categoryId: s, type: o, sectionId: u } = r;
                        if (o === j.En.SEARCH_RESULTS) return;
                        let c =
                                o === j.En.GUILD
                                    ? null != i
                                        ? (0, a.jsx)(Z.Z, {
                                              guild: i,
                                              height: er,
                                              width: er
                                          })
                                        : null
                                    : null != s
                                      ? (0, a.jsx)(G.Z, {
                                            categoryId: s,
                                            height: er,
                                            width: er,
                                            size: 'custom'
                                        })
                                      : null,
                            d = null == i ? void 0 : i.toString();
                        null != s && (d = (0, B.Y1)(s, null == i ? void 0 : i.toString()));
                        let f = x === e,
                            _ = r.isNitroLocked,
                            p = _ && !f,
                            m = _ && f;
                        return (0, a.jsx)(
                            y.Z,
                            {
                                className: l()(z.header, L, {
                                    [z.inactiveNitroHeader]: p,
                                    [z.activeNitroHeader]: m
                                }),
                                icon: c,
                                isCollapsed: n.has(u),
                                onClick: () => ei(u, i),
                                children: d
                            },
                            u
                        );
                    }),
                [h, n, ei, L, x]
            ),
            ed = (0, A.B4)({ location: 'EmojiPickerList-useListRenderers' }),
            ef = s.useCallback(
                (e, r) => {
                    let i = h[e],
                        s = q(e),
                        o = K(e);
                    return (0, a.jsx)(
                        'div',
                        {
                            className: l()(z.categorySection, {
                                [z.categorySectionLast]: e === h.length - 1,
                                [z.categorySectionCollapsed]: n.has(i.sectionId),
                                [z.categorySectionNitroLocked]: i.isNitroLocked,
                                [z.categorySectionNitroDivider]: s || o
                            }),
                            children: r
                        },
                        e
                    );
                },
                [n, h, q, K]
            ),
            e_ = s.useCallback(
                (e) => {
                    if (q(e)) return ed ? (0, a.jsx)(D.fi, {}) : (0, a.jsx)(D.ZP, { glowOpacity: w });
                    return K(e) ? (0, a.jsx)('div', { className: z.nitroBottomDivider }) : null;
                },
                [w, q, K, ed]
            ),
            eh = s.useCallback((e) => (q(e) ? ea : K(e) ? es : 0), [q, K]),
            ep = s.useCallback(
                (e) => {
                    var r;
                    return e === h.length - 1 || n.has(null === (r = h[e]) || void 0 === r ? void 0 : r.sectionId) || q(e) || K(e) ? 0 : en;
                },
                [n, h, q, K]
            ),
            em = s.useMemo(() => ['' !== d ? ee : X, J, $, Q], [d]);
        return {
            listPadding: em,
            renderRow: eu,
            renderSection: ef,
            renderSectionHeader: ec,
            renderSectionFooter: e_,
            sectionMarginBottom: ep,
            sectionHeaderHeight: s.useCallback((e) => (h[e].type === j.En.SEARCH_RESULTS ? 0 : et), [h]),
            sectionFooterHeight: eh
        };
    },
    eu = s.memo(function (e) {
        let { diversitySurrogate: n, emojiGrid: r, emojiListRef: i, emojiSize: o, onEmojiSelect: l, setUpsellConfigs: u, sectionDescriptors: c, rowCountBySection: _, collapsedSections: h, setCollapsedSections: T, getEmojiItemProps: y, getEmojiRowProps: S, rowCount: A, isUsingKeyboardNavigation: D, channelGuildId: U, messageId: B, isBurstReaction: G, listHeaderClassName: Z } = e,
            V = s.useRef(!1),
            j = v.kJ.useStore((e) => e.activeCategoryIndex),
            Y = (0, I.Iu)((e) => e.searchQuery),
            Q = x.Yk.useSetting(),
            X = (0, f.e7)([w.default], () => w.default.getCurrentUser()),
            J = (0, M.I5)(X),
            { location: $ } = (0, m.O)(),
            { analyticsLocations: ee } = (0, g.ZP)(),
            [et, en] = s.useState(0),
            [er, ei] = s.useState(!1),
            [ea, es] = s.useState(0),
            eu = (0, R.N)(),
            ec = (0, C.Ng)(),
            ed = er && !J && !d.tq,
            ef = null != eu || null != ec,
            { enabled: e_ } = L.Gi.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: ed && !ef,
                    disable: !ed || ef
                }
            ),
            eh = e_ || (ed && null != eu),
            {
                listPadding: ep,
                renderRow: em,
                renderSection: eg,
                renderSectionHeader: eE,
                renderSectionFooter: ev,
                sectionMarginBottom: eI,
                sectionHeaderHeight: eT,
                sectionFooterHeight: eb
            } = el({
                collapsedSections: h,
                diversitySurrogate: n,
                emojiGrid: r,
                emojiSize: o,
                onEmojiSelect: l,
                searchQuery: Y,
                sectionDescriptors: c,
                setCollapsedSections: T,
                getEmojiItemProps: y,
                getEmojiRowProps: S,
                isScrolling: V,
                isUsingKeyboardNavigation: D,
                allowAnimatedEmoji: Q,
                channelGuildId: U,
                messageId: B,
                isBurstReaction: G,
                listHeaderClassName: Z,
                activeSectionIndex: et,
                upsellGlowOpacity: ea,
                emojiListRef: i
            }),
            ey = (e) => {
                en(e), '' === Y && v.kJ.setActiveCategoryIndex(e);
            },
            eS = (0, b.Uf)({
                listRef: i,
                searchQuery: Y,
                nitroLockedSectionStates: c,
                setShowUpsell: ei,
                setUpsellGlowOpacity: es
            }),
            eA = (0, b.Qs)({
                activeCategoryIndex: j,
                isScrolling: V,
                listRef: i,
                onActiveCategoryIndexChange: ey,
                scrollOffset: q,
                searchQuery: Y,
                disableForSearch: !1
            });
        (0, b.Xs)({
            searchQuery: Y,
            activeCategoryIndex: j,
            listRef: i
        });
        let eN = s.useCallback(
                (e) => {
                    eS(e), eA(e);
                },
                [eS, eA]
            ),
            eC = c.length > 0;
        function eR() {
            if (!eh) return K.intl.string(K.t.EtmOFh);
            {
                let e = (0, k.Px)(W.p9.TIER_2);
                return K.intl.format(K.t.gMVjeX, {
                    nitroTierName: e,
                    onClick: () => {
                        u({
                            type: F.Bg.PREMIUM,
                            emojiDescriptor: void 0
                        });
                    }
                });
            }
        }
        function eO() {
            if (eh) {
                var e;
                let n = (0, N.J0)();
                return null !== (e = (0, k.fr)(n)) && void 0 !== e ? e : K.intl.string(K.t.BmJkbW);
            }
            return K.intl.string(K.t.BmJkbW);
        }
        return (
            s.useEffect(() => {
                er &&
                    P.default.track(H.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: W.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: $,
                        location_stack: ee
                    });
            }, [$, ee, er]),
            s.useEffect(() => {
                '' !== Y && (es(0), ei(!1));
            }, [Y]),
            (0, a.jsxs)('div', {
                className: z.listWrapper,
                children: [
                    eC
                        ? (0, a.jsx)(E.Z, {
                              role: 'none presentation',
                              className: z.list,
                              listPadding: ep,
                              onScroll: eN,
                              renderRow: em,
                              renderSection: eg,
                              renderSectionHeader: eE,
                              renderSectionFooter: ev,
                              rowCount: A,
                              rowCountBySection: _,
                              rowHeight: eo(o),
                              sectionHeaderHeight: eT,
                              sectionMarginBottom: eI,
                              sectionFooterHeight: eb,
                              stickyHeaders: !0,
                              ref: i
                          })
                        : (0, a.jsx)(p.Z, {
                              message: K.intl.string(K.t.IxxiKC),
                              className: z.noSearchResultsContainer
                          }),
                    J || d.tq
                        ? null
                        : (0, a.jsx)(O.p, {
                              showUpsell: er,
                              text: eR(),
                              button: eO(),
                              buttonAnalyticsObject: { section: H.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
n.Z = eu;
