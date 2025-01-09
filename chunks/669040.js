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
    p = r(481060),
    m = r(788911),
    g = r(2052),
    E = r(906732),
    v = r(218867),
    I = r(806966),
    T = r(28546),
    b = r(691251),
    y = r(98528),
    S = r(551058),
    A = r(536442),
    N = r(140465),
    C = r(775412),
    R = r(104494),
    O = r(639119),
    D = r(53691),
    L = r(75145),
    x = r(631771),
    w = r(695346),
    P = r(594174),
    M = r(626135),
    k = r(111361),
    U = r(74538),
    B = r(624138),
    G = r(543241),
    Z = r(883661),
    F = r(880949),
    V = r(784222),
    j = r(172800),
    H = r(149203),
    Y = r(981631),
    W = r(957825),
    K = r(474936),
    z = r(388032),
    q = r(332706);
let Q = 0,
    X = 0,
    J = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    $ = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    ee = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    et = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    en = (0, B.Mg)(h.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    er = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ei = 16,
    ea = (0, B.Mg)(h.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    es = 41,
    eo = 33,
    el = (e) => e + 2 * ea,
    eu = (e) => {
        let { collapsedSections: n, diversitySurrogate: r, emojiGrid: i, emojiSize: o, onEmojiSelect: u, onSelectSoundmoji: d, searchQuery: h, sectionDescriptors: m, setCollapsedSections: E, getEmojiItemProps: v, getEmojiRowProps: y, isScrolling: C, isUsingKeyboardNavigation: R, allowAnimatedEmoji: O, channelGuildId: D, channelId: x, messageId: w, isBurstReaction: P, listHeaderClassName: k, activeSectionIndex: U, upsellGlowOpacity: B, emojiListRef: K } = e,
            Q = (0, g.O)(),
            ea = s.useRef(Y.xAR),
            el = s.useMemo(() => ('' !== r ? _.Z.convert.toCodePoint(r) : ''), [r]),
            eu = s.useCallback(
                (e) => {
                    let n = m[e],
                        r = m[e + 1];
                    return e >= m.length - 1 ? n.isNitroLocked : n.isNitroLocked && !r.isNitroLocked;
                },
                [m]
            ),
            ec = s.useCallback(
                (e) => {
                    if (e >= m.length - 1) return !1;
                    let n = m[e],
                        r = m[e + 1];
                    return !n.isNitroLocked && r.isNitroLocked;
                },
                [m]
            ),
            ed = s.useCallback(
                function (e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = new Set(n),
                        a = n.has(e);
                    a ? i.delete(e) : i.add(e),
                        null != r &&
                            M.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: Q.location,
                                tab: W.X1.EMOJI,
                                collapsed: !a,
                                guild_id: r.id
                            }),
                        E(i);
                },
                [Q, n, E]
            ),
            ef = s.useCallback((e) => {
                let { columnIndex: n, visibleRowIndex: r } = e,
                    i = e.type === V.ld.SOUNDMOJI ? null : e.type === V.ld.EMOJI ? e.emoji.allNamesString : e.name;
                ea.current !== Y.xAR && window.cancelAnimationFrame(ea.current),
                    (ea.current = window.requestAnimationFrame(() => {
                        I.kJ.setInspectedExpressionPosition(n, r, b.u.MOUSE_EVENT), I.kJ.setSearchPlaceholder(i), (ea.current = Y.xAR);
                    }));
            }, []),
            e_ = (0, f.e7)([A.qc], () => A.qc.hasHotspot(A.v6.FAVORITE_EMOJI_TOOLTIP), []),
            eh = s.useMemo(
                () =>
                    c().memoize((e, n) => {
                        let r = i[e],
                            s = m[n.sectionIndex],
                            l = () => {
                                var e;
                                null === (e = K.current) || void 0 === e || e.scrollToSectionTop(n.sectionIndex, { animate: !0 });
                            };
                        return (0, a.jsx)(
                            j.Z,
                            {
                                emojiDescriptors: r,
                                emojiSize: o,
                                surrogateCodePoint: el,
                                onInspect: ef,
                                onSelect: u,
                                onSelectSoundmoji: d,
                                getEmojiItemProps: v,
                                getEmojiRowProps: y,
                                isScrolling: C,
                                isUsingKeyboardNavigation: R,
                                rowIndex: e,
                                allowAnimatedEmoji: O,
                                showEmojiFavoriteTooltip: e_,
                                channelGuildId: D,
                                category: s.sectionId,
                                selectedItemClassName: q.__invalid_selectedItem,
                                channelId: x,
                                messageId: w,
                                isBurstReaction: P,
                                inNitroLockedSection: s.isNitroLocked,
                                handleScrollUpOnSectionCollapse: l
                            },
                            e
                        );
                    }),
                [i, m, o, el, ef, u, d, v, y, C, R, O, e_, D, x, w, P, K]
            );
        s.useEffect(
            () => () => {
                var e, n;
                return null === (n = eh.cache) || void 0 === n ? void 0 : null === (e = n.clear) || void 0 === e ? void 0 : e.call(n);
            },
            [eh]
        );
        let ep = s.useMemo(
                () =>
                    c().memoize((e) => {
                        let r = m[e];
                        if (null == r) return;
                        let { guild: i, categoryId: s, type: o, sectionId: u } = r;
                        if (o === H.En.SEARCH_RESULTS) return;
                        let c =
                                o === H.En.GUILD
                                    ? null != i
                                        ? (0, a.jsx)(F.Z, {
                                              guild: i,
                                              height: ei,
                                              width: ei
                                          })
                                        : null
                                    : null != s
                                      ? (0, a.jsx)(Z.Z, {
                                            categoryId: s,
                                            height: ei,
                                            width: ei,
                                            size: 'custom'
                                        })
                                      : null,
                            d = null == i ? void 0 : i.toString();
                        null != s && (d = (0, G.Y1)(s, null == i ? void 0 : i.toString()));
                        let f = U === e,
                            _ = r.isNitroLocked,
                            h = _ && !f,
                            g = _ && f,
                            E =
                                o === H.En.SOUNDMOJI
                                    ? (0, a.jsx)(p.Clickable, {
                                          className: q.soundmojiViewMore,
                                          onClick: () => (0, T.hr)(W.X1.SOUNDBOARD),
                                          children: z.intl.string(z.t.rUEjBQ)
                                      })
                                    : void 0;
                        return (0, a.jsx)(
                            S.Z,
                            {
                                className: l()(q.header, k, {
                                    [q.inactiveNitroHeader]: h,
                                    [q.activeNitroHeader]: g
                                }),
                                icon: c,
                                isCollapsed: n.has(u),
                                onClick: () => ed(u, i),
                                trailing: E,
                                children: d
                            },
                            u
                        );
                    }),
                [m, n, ed, k, U]
            ),
            em = (0, N.B4)({ location: 'EmojiPickerList-useListRenderers' }),
            eg = s.useCallback(
                (e, r) => {
                    let i = m[e],
                        s = ec(e),
                        o = eu(e);
                    return (0, a.jsx)(
                        'div',
                        {
                            className: l()(q.categorySection, {
                                [q.categorySectionLast]: e === m.length - 1,
                                [q.categorySectionCollapsed]: n.has(i.sectionId),
                                [q.categorySectionNitroLocked]: i.isNitroLocked,
                                [q.categorySectionNitroDivider]: s || o
                            }),
                            children: r
                        },
                        e
                    );
                },
                [n, m, ec, eu]
            ),
            eE = s.useCallback(
                (e) => {
                    if (ec(e)) return em ? (0, a.jsx)(L.fi, {}) : (0, a.jsx)(L.ZP, { glowOpacity: B });
                    return eu(e) ? (0, a.jsx)('div', { className: q.nitroBottomDivider }) : null;
                },
                [B, ec, eu, em]
            ),
            ev = s.useCallback((e) => (ec(e) ? es : eu(e) ? eo : 0), [ec, eu]),
            eI = s.useCallback(
                (e) => {
                    var r;
                    return e === m.length - 1 || n.has(null === (r = m[e]) || void 0 === r ? void 0 : r.sectionId) || ec(e) || eu(e) ? 0 : er;
                },
                [n, m, ec, eu]
            ),
            eT = s.useMemo(() => ['' !== h ? et : J, $, ee, X], [h]);
        return {
            listPadding: eT,
            renderRow: eh,
            renderSection: eg,
            renderSectionHeader: ep,
            renderSectionFooter: eE,
            sectionMarginBottom: eI,
            sectionHeaderHeight: s.useCallback((e) => (m[e].type === H.En.SEARCH_RESULTS ? 0 : en), [m]),
            sectionFooterHeight: ev
        };
    },
    ec = s.memo(function (e) {
        let { diversitySurrogate: n, emojiGrid: r, emojiListRef: i, emojiSize: o, onEmojiSelect: l, onSelectSoundmoji: u, setUpsellConfigs: c, sectionDescriptors: _, rowCountBySection: h, collapsedSections: p, setCollapsedSections: b, getEmojiItemProps: S, getEmojiRowProps: A, rowCount: N, isUsingKeyboardNavigation: L, channelGuildId: B, channelId: G, messageId: Z, isBurstReaction: F, listHeaderClassName: j } = e,
            H = s.useRef(!1),
            W = I.kJ.useStore((e) => e.activeCategoryIndex),
            X = (0, T.Iu)((e) => e.searchQuery),
            J = w.Yk.useSetting(),
            $ = (0, f.e7)([P.default], () => P.default.getCurrentUser()),
            ee = (0, k.I5)($),
            { location: et } = (0, g.O)(),
            { analyticsLocations: en } = (0, E.ZP)(),
            [er, ei] = s.useState(0),
            [ea, es] = s.useState(!1),
            [eo, ec] = s.useState(0),
            ed = (0, O.N)(),
            ef = (0, R.Ng)(),
            e_ = ea && !ee && !d.tq,
            eh = null != ed || null != ef,
            { enabled: ep } = x.Gi.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: e_ && !eh,
                    disable: !e_ || eh
                }
            ),
            em = ep || (e_ && null != ed),
            {
                listPadding: eg,
                renderRow: eE,
                renderSection: ev,
                renderSectionHeader: eI,
                renderSectionFooter: eT,
                sectionMarginBottom: eb,
                sectionHeaderHeight: ey,
                sectionFooterHeight: eS
            } = eu({
                collapsedSections: p,
                diversitySurrogate: n,
                emojiGrid: r,
                emojiSize: o,
                onEmojiSelect: l,
                onSelectSoundmoji: u,
                searchQuery: X,
                sectionDescriptors: _,
                setCollapsedSections: b,
                getEmojiItemProps: S,
                getEmojiRowProps: A,
                isScrolling: H,
                isUsingKeyboardNavigation: L,
                allowAnimatedEmoji: J,
                channelGuildId: B,
                channelId: G,
                messageId: Z,
                isBurstReaction: F,
                listHeaderClassName: j,
                activeSectionIndex: er,
                upsellGlowOpacity: eo,
                emojiListRef: i
            }),
            eA = (e) => {
                ei(e), '' === X && I.kJ.setActiveCategoryIndex(e);
            },
            eN = (0, y.Uf)({
                listRef: i,
                searchQuery: X,
                nitroLockedSectionStates: _,
                setShowUpsell: es,
                setUpsellGlowOpacity: ec
            }),
            eC = (0, y.Qs)({
                activeCategoryIndex: W,
                isScrolling: H,
                listRef: i,
                onActiveCategoryIndexChange: eA,
                scrollOffset: Q,
                searchQuery: X,
                disableForSearch: !1
            });
        (0, y.Xs)({
            searchQuery: X,
            activeCategoryIndex: W,
            listRef: i
        });
        let eR = s.useCallback(
                (e) => {
                    eN(e), eC(e);
                },
                [eN, eC]
            ),
            eO = _.length > 0;
        function eD() {
            if (!em) return z.intl.string(z.t.EtmOFh);
            {
                let e = (0, U.Px)(K.p9.TIER_2);
                return z.intl.format(z.t.gMVjeX, {
                    nitroTierName: e,
                    onClick: () => {
                        c({
                            type: V.Bg.PREMIUM,
                            emojiDescriptor: void 0
                        });
                    }
                });
            }
        }
        function eL() {
            if (em) {
                var e;
                let n = (0, C.J0)();
                return null !== (e = (0, U.fr)(n)) && void 0 !== e ? e : z.intl.string(z.t.BmJkbW);
            }
            return z.intl.string(z.t.BmJkbW);
        }
        return (
            s.useEffect(() => {
                ea &&
                    M.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: K.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: et,
                        location_stack: en
                    });
            }, [et, en, ea]),
            s.useEffect(() => {
                '' !== X && (ec(0), es(!1));
            }, [X]),
            (0, a.jsxs)('div', {
                className: q.listWrapper,
                children: [
                    eO
                        ? (0, a.jsx)(v.Z, {
                              role: 'none presentation',
                              className: q.list,
                              listPadding: eg,
                              onScroll: eR,
                              renderRow: eE,
                              renderSection: ev,
                              renderSectionHeader: eI,
                              renderSectionFooter: eT,
                              rowCount: N,
                              rowCountBySection: h,
                              rowHeight: el(o),
                              sectionHeaderHeight: ey,
                              sectionMarginBottom: eb,
                              sectionFooterHeight: eS,
                              stickyHeaders: !0,
                              ref: i
                          })
                        : (0, a.jsx)(m.Z, {
                              message: z.intl.string(z.t.IxxiKC),
                              className: q.noSearchResultsContainer
                          }),
                    ee || d.tq
                        ? null
                        : (0, a.jsx)(D.p, {
                              showUpsell: ea,
                              text: eD(),
                              button: eL(),
                              buttonAnalyticsObject: { section: Y.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
n.Z = ec;
