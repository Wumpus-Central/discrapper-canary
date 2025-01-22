var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(873546),
    f = r(442837),
    p = r(336317),
    h = r(477690),
    _ = r(481060),
    m = r(788911),
    g = r(2052),
    E = r(906732),
    v = r(218867),
    y = r(806966),
    b = r(28546),
    I = r(691251),
    T = r(98528),
    S = r(551058),
    A = r(536442),
    C = r(140465),
    N = r(775412),
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
    eo = 41,
    es = 33,
    el = (e) => e + 2 * ea,
    eu = (e) => {
        let { collapsedSections: n, diversitySurrogate: r, emojiGrid: i, emojiSize: s, onEmojiSelect: u, onSelectSoundmoji: d, searchQuery: h, sectionDescriptors: m, setCollapsedSections: E, getEmojiItemProps: v, getEmojiRowProps: T, isScrolling: N, isUsingKeyboardNavigation: R, allowAnimatedEmoji: O, channelGuildId: D, channelId: x, messageId: w, isBurstReaction: P, listHeaderClassName: k, activeSectionIndex: U, upsellGlowOpacity: B, emojiListRef: K } = e,
            Q = (0, g.O)(),
            ea = o.useRef(Y.xAR),
            el = o.useMemo(() => ('' !== r ? p.Z.convert.toCodePoint(r) : ''), [r]),
            eu = o.useCallback(
                (e) => {
                    let n = m[e],
                        r = m[e + 1];
                    return e >= m.length - 1 ? n.isNitroLocked : n.isNitroLocked && !r.isNitroLocked;
                },
                [m]
            ),
            ec = o.useCallback(
                (e) => {
                    if (e >= m.length - 1) return !1;
                    let n = m[e],
                        r = m[e + 1];
                    return !n.isNitroLocked && r.isNitroLocked;
                },
                [m]
            ),
            ed = o.useCallback(
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
                        e === H.UX.SOUNDMOJI && M.default.track(Y.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !a }),
                        E(i);
                },
                [Q, n, E]
            ),
            ef = o.useCallback((e) => {
                let { columnIndex: n, visibleRowIndex: r } = e,
                    i = e.type === V.ld.SOUNDMOJI ? null : e.type === V.ld.EMOJI ? e.emoji.allNamesString : e.name;
                ea.current !== Y.xAR && window.cancelAnimationFrame(ea.current),
                    (ea.current = window.requestAnimationFrame(() => {
                        y.kJ.setInspectedExpressionPosition(n, r, I.u.MOUSE_EVENT), y.kJ.setSearchPlaceholder(i), (ea.current = Y.xAR);
                    }));
            }, []),
            ep = (0, f.e7)([A.qc], () => A.qc.hasHotspot(A.v6.FAVORITE_EMOJI_TOOLTIP), []),
            eh = o.useMemo(
                () =>
                    c().memoize((e, n) => {
                        let r = i[e],
                            o = m[n.sectionIndex],
                            l = () => {
                                var e;
                                null === (e = K.current) || void 0 === e || e.scrollToSectionTop(n.sectionIndex, { animate: !0 });
                            };
                        return (0, a.jsx)(
                            j.Z,
                            {
                                emojiDescriptors: r,
                                emojiSize: s,
                                surrogateCodePoint: el,
                                onInspect: ef,
                                onSelect: u,
                                onSelectSoundmoji: d,
                                getEmojiItemProps: v,
                                getEmojiRowProps: T,
                                isScrolling: N,
                                isUsingKeyboardNavigation: R,
                                rowIndex: e,
                                allowAnimatedEmoji: O,
                                showEmojiFavoriteTooltip: ep,
                                channelGuildId: D,
                                category: o.sectionId,
                                selectedItemClassName: q.__invalid_selectedItem,
                                channelId: x,
                                messageId: w,
                                isBurstReaction: P,
                                inNitroLockedSection: o.isNitroLocked,
                                handleScrollUpOnSectionCollapse: l
                            },
                            e
                        );
                    }),
                [i, m, s, el, ef, u, d, v, T, N, R, O, ep, D, x, w, P, K]
            );
        o.useEffect(
            () => () => {
                var e, n;
                return null === (n = eh.cache) || void 0 === n ? void 0 : null === (e = n.clear) || void 0 === e ? void 0 : e.call(n);
            },
            [eh]
        );
        let e_ = o.useMemo(
                () =>
                    c().memoize((e) => {
                        let r = m[e];
                        if (null == r) return;
                        let { guild: i, categoryId: o, type: s, sectionId: u } = r;
                        if (s === H.En.SEARCH_RESULTS) return;
                        let c =
                                s === H.En.GUILD
                                    ? null != i
                                        ? (0, a.jsx)(F.Z, {
                                              guild: i,
                                              height: ei,
                                              width: ei
                                          })
                                        : null
                                    : null != o
                                      ? (0, a.jsx)(Z.Z, {
                                            categoryId: o,
                                            height: ei,
                                            width: ei,
                                            size: 'custom'
                                        })
                                      : null,
                            d = null == i ? void 0 : i.toString();
                        null != o && (d = (0, G.Y1)(o, null == i ? void 0 : i.toString()));
                        let f = U === e,
                            p = r.isNitroLocked,
                            h = p && !f,
                            g = p && f,
                            E =
                                s === H.En.SOUNDMOJI
                                    ? (0, a.jsx)(_.Clickable, {
                                          className: q.soundmojiViewMore,
                                          onClick: () => {
                                              (0, b.hr)(W.X1.SOUNDBOARD), M.default.track(Y.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
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
            em = (0, C.B4)({ location: 'EmojiPickerList-useListRenderers' }),
            eg = o.useCallback(
                (e, r) => {
                    let i = m[e],
                        o = ec(e),
                        s = eu(e);
                    return (0, a.jsx)(
                        'div',
                        {
                            className: l()(q.categorySection, {
                                [q.categorySectionLast]: e === m.length - 1,
                                [q.categorySectionCollapsed]: n.has(i.sectionId),
                                [q.categorySectionNitroLocked]: i.isNitroLocked,
                                [q.categorySectionNitroDivider]: o || s
                            }),
                            children: r
                        },
                        e
                    );
                },
                [n, m, ec, eu]
            ),
            eE = o.useCallback(
                (e) => {
                    if (ec(e)) return em ? (0, a.jsx)(L.fi, {}) : (0, a.jsx)(L.ZP, { glowOpacity: B });
                    return eu(e) ? (0, a.jsx)('div', { className: q.nitroBottomDivider }) : null;
                },
                [B, ec, eu, em]
            ),
            ev = o.useCallback((e) => (ec(e) ? eo : eu(e) ? es : 0), [ec, eu]),
            ey = o.useCallback(
                (e) => {
                    var r;
                    return e === m.length - 1 || n.has(null === (r = m[e]) || void 0 === r ? void 0 : r.sectionId) || ec(e) || eu(e) ? 0 : er;
                },
                [n, m, ec, eu]
            ),
            eb = o.useMemo(() => ['' !== h ? et : J, $, ee, X], [h]);
        return {
            listPadding: eb,
            renderRow: eh,
            renderSection: eg,
            renderSectionHeader: e_,
            renderSectionFooter: eE,
            sectionMarginBottom: ey,
            sectionHeaderHeight: o.useCallback((e) => (m[e].type === H.En.SEARCH_RESULTS ? 0 : en), [m]),
            sectionFooterHeight: ev
        };
    },
    ec = o.memo(function (e) {
        let { diversitySurrogate: n, emojiGrid: r, emojiListRef: i, emojiSize: s, onEmojiSelect: l, onSelectSoundmoji: u, setUpsellConfigs: c, sectionDescriptors: p, rowCountBySection: h, collapsedSections: _, setCollapsedSections: I, getEmojiItemProps: S, getEmojiRowProps: A, rowCount: C, isUsingKeyboardNavigation: L, channelGuildId: B, channelId: G, messageId: Z, isBurstReaction: F, listHeaderClassName: j } = e,
            H = o.useRef(!1),
            W = y.kJ.useStore((e) => e.activeCategoryIndex),
            X = (0, b.Iu)((e) => e.searchQuery),
            J = w.Yk.useSetting(),
            $ = (0, f.e7)([P.default], () => P.default.getCurrentUser()),
            ee = (0, k.I5)($),
            { location: et } = (0, g.O)(),
            { analyticsLocations: en } = (0, E.ZP)(),
            [er, ei] = o.useState(0),
            [ea, eo] = o.useState(!1),
            [es, ec] = o.useState(0),
            ed = (0, O.N)(),
            ef = (0, R.Ng)(),
            ep = ea && !ee && !d.tq,
            eh = null != ed || null != ef,
            { enabled: e_ } = x.Gi.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: ep && !eh,
                    disable: !ep || eh
                }
            ),
            em = e_ || (ep && null != ed),
            {
                listPadding: eg,
                renderRow: eE,
                renderSection: ev,
                renderSectionHeader: ey,
                renderSectionFooter: eb,
                sectionMarginBottom: eI,
                sectionHeaderHeight: eT,
                sectionFooterHeight: eS
            } = eu({
                collapsedSections: _,
                diversitySurrogate: n,
                emojiGrid: r,
                emojiSize: s,
                onEmojiSelect: l,
                onSelectSoundmoji: u,
                searchQuery: X,
                sectionDescriptors: p,
                setCollapsedSections: I,
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
                upsellGlowOpacity: es,
                emojiListRef: i
            }),
            eA = (e) => {
                ei(e), '' === X && y.kJ.setActiveCategoryIndex(e);
            },
            eC = (0, T.Uf)({
                listRef: i,
                searchQuery: X,
                nitroLockedSectionStates: p,
                setShowUpsell: eo,
                setUpsellGlowOpacity: ec
            }),
            eN = (0, T.Qs)({
                activeCategoryIndex: W,
                isScrolling: H,
                listRef: i,
                onActiveCategoryIndexChange: eA,
                scrollOffset: Q,
                searchQuery: X,
                disableForSearch: !1
            });
        (0, T.Xs)({
            searchQuery: X,
            activeCategoryIndex: W,
            listRef: i
        });
        let eR = o.useCallback(
                (e) => {
                    eC(e), eN(e);
                },
                [eC, eN]
            ),
            eO = p.length > 0;
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
                let n = (0, N.J0)();
                return null !== (e = (0, U.fr)(n)) && void 0 !== e ? e : z.intl.string(z.t.BmJkbW);
            }
            return z.intl.string(z.t.BmJkbW);
        }
        return (
            o.useEffect(() => {
                ea &&
                    M.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: K.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: et,
                        location_stack: en
                    });
            }, [et, en, ea]),
            o.useEffect(() => {
                '' !== X && (ec(0), eo(!1));
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
                              renderSectionHeader: ey,
                              renderSectionFooter: eb,
                              rowCount: C,
                              rowCountBySection: h,
                              rowHeight: el(s),
                              sectionHeaderHeight: eT,
                              sectionMarginBottom: eI,
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
