n.d(t, { Z: () => el }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(873546),
    c = n(442837),
    d = n(336317),
    f = n(477690),
    _ = n(481060),
    p = n(788911),
    h = n(2052),
    m = n(906732),
    g = n(218867),
    E = n(806966),
    v = n(28546),
    y = n(691251),
    I = n(98528),
    T = n(551058),
    b = n(536442),
    S = n(140465),
    A = n(775412),
    N = n(104494),
    C = n(639119),
    R = n(53691),
    O = n(75145),
    D = n(631771),
    L = n(695346),
    x = n(594174),
    w = n(626135),
    P = n(111361),
    M = n(74538),
    k = n(624138),
    U = n(543241),
    G = n(883661),
    B = n(880949),
    Z = n(784222),
    F = n(172800),
    V = n(149203),
    j = n(981631),
    H = n(957825),
    Y = n(474936),
    W = n(388032),
    K = n(472689);
let z = 0,
    q = 0,
    Q = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    X = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    J = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    $ = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ee = (0, k.Mg)(f.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    en = 16,
    ei = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    er = 41,
    ea = 33,
    es = (e) => e + 2 * ei,
    eo = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: a, emojiSize: o, onEmojiSelect: u, onSelectSoundmoji: f, searchQuery: p, sectionDescriptors: m, setCollapsedSections: g, getEmojiItemProps: I, getEmojiRowProps: A, isScrolling: N, isUsingKeyboardNavigation: C, allowAnimatedEmoji: R, channelGuildId: D, channelId: L, messageId: x, isBurstReaction: P, listHeaderClassName: M, activeSectionIndex: k, upsellGlowOpacity: Y, emojiListRef: z } = e,
            ei = (0, h.O)(),
            es = r.useRef(j.xAR),
            eo = r.useMemo(() => ('' !== n ? d.Z.convert.toCodePoint(n) : ''), [n]),
            el = r.useCallback(
                (e) => {
                    let t = m[e],
                        n = m[e + 1];
                    return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [m]
            ),
            eu = r.useCallback(
                (e) => {
                    if (e >= m.length - 1) return !1;
                    let t = m[e],
                        n = m[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [m]
            ),
            ec = r.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = new Set(t),
                        r = t.has(e);
                    r ? i.delete(e) : i.add(e),
                        null != n &&
                            w.default.track(j.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: ei.location,
                                tab: H.X1.EMOJI,
                                collapsed: !r,
                                guild_id: n.id
                            }),
                        e === V.UX.SOUNDMOJI && w.default.track(j.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !r }),
                        g(i);
                },
                [ei, t, g]
            ),
            ed = r.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    i = e.type === Z.ld.SOUNDMOJI ? null : e.type === Z.ld.EMOJI ? e.emoji.allNamesString : e.name;
                es.current !== j.xAR && window.cancelAnimationFrame(es.current),
                    (es.current = window.requestAnimationFrame(() => {
                        E.kJ.setInspectedExpressionPosition(t, n, y.u.MOUSE_EVENT), E.kJ.setSearchPlaceholder(i), (es.current = j.xAR);
                    }));
            }, []),
            ef = (0, c.e7)([b.qc], () => b.qc.hasHotspot(b.v6.FAVORITE_EMOJI_TOOLTIP), []),
            e_ = r.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            r = m[t.sectionIndex],
                            s = () => {
                                var e;
                                null === (e = z.current) || void 0 === e || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, i.jsx)(
                            F.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: eo,
                                onInspect: ed,
                                onSelect: u,
                                onSelectSoundmoji: f,
                                getEmojiItemProps: I,
                                getEmojiRowProps: A,
                                isScrolling: N,
                                isUsingKeyboardNavigation: C,
                                rowIndex: e,
                                allowAnimatedEmoji: R,
                                showEmojiFavoriteTooltip: ef,
                                channelGuildId: D,
                                category: r.sectionId,
                                selectedItemClassName: K.__invalid_selectedItem,
                                channelId: L,
                                messageId: x,
                                isBurstReaction: P,
                                inNitroLockedSection: r.isNitroLocked,
                                handleScrollUpOnSectionCollapse: s
                            },
                            e
                        );
                    }),
                [a, m, o, eo, ed, u, f, I, A, N, C, R, ef, D, L, x, P, z]
            );
        r.useEffect(
            () => () => {
                var e, t;
                return null === (t = e_.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t);
            },
            [e_]
        );
        let ep = r.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = m[e];
                        if (null == n) return;
                        let { guild: r, categoryId: a, type: o, sectionId: l } = n;
                        if (o === V.En.SEARCH_RESULTS) return;
                        let u =
                                o === V.En.GUILD
                                    ? null != r
                                        ? (0, i.jsx)(B.Z, {
                                              guild: r,
                                              height: en,
                                              width: en
                                          })
                                        : null
                                    : null != a
                                      ? (0, i.jsx)(G.Z, {
                                            categoryId: a,
                                            height: en,
                                            width: en,
                                            size: 'custom'
                                        })
                                      : null,
                            c = null == r ? void 0 : r.toString();
                        null != a && (c = (0, U.Y1)(a, null == r ? void 0 : r.toString()));
                        let d = k === e,
                            f = n.isNitroLocked,
                            p = f && !d,
                            h = f && d,
                            g =
                                o === V.En.SOUNDMOJI
                                    ? (0, i.jsx)(_.P3F, {
                                          className: K.soundmojiViewMore,
                                          onClick: () => {
                                              (0, v.hr)(H.X1.SOUNDBOARD), w.default.track(j.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: W.intl.string(W.t.rUEjBQ)
                                      })
                                    : void 0;
                        return (0, i.jsx)(
                            T.Z,
                            {
                                className: s()(K.header, M, {
                                    [K.inactiveNitroHeader]: p,
                                    [K.activeNitroHeader]: h
                                }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => ec(l, r),
                                trailing: g,
                                children: c
                            },
                            l
                        );
                    }),
                [m, t, ec, M, k]
            ),
            eh = (0, S.B4)({ location: 'EmojiPickerList-useListRenderers' }),
            em = r.useCallback(
                (e, n) => {
                    let r = m[e],
                        a = eu(e),
                        o = el(e);
                    return (0, i.jsx)(
                        'div',
                        {
                            className: s()(K.categorySection, {
                                [K.categorySectionLast]: e === m.length - 1,
                                [K.categorySectionCollapsed]: t.has(r.sectionId),
                                [K.categorySectionNitroLocked]: r.isNitroLocked,
                                [K.categorySectionNitroDivider]: a || o
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, m, eu, el]
            ),
            eg = r.useCallback((e) => (eu(e) ? (eh ? (0, i.jsx)(O.fi, {}) : (0, i.jsx)(O.ZP, { glowOpacity: Y })) : el(e) ? (0, i.jsx)('div', { className: K.nitroBottomDivider }) : null), [Y, eu, el, eh]),
            eE = r.useCallback((e) => (eu(e) ? er : el(e) ? ea : 0), [eu, el]),
            ev = r.useCallback(
                (e) => {
                    var n;
                    return e === m.length - 1 || t.has(null === (n = m[e]) || void 0 === n ? void 0 : n.sectionId) || eu(e) || el(e) ? 0 : et;
                },
                [t, m, eu, el]
            );
        return {
            listPadding: r.useMemo(() => ['' !== p ? $ : Q, X, J, q], [p]),
            renderRow: e_,
            renderSection: em,
            renderSectionHeader: ep,
            renderSectionFooter: eg,
            sectionMarginBottom: ev,
            sectionHeaderHeight: r.useCallback((e) => (m[e].type === V.En.SEARCH_RESULTS ? 0 : ee), [m]),
            sectionFooterHeight: eE
        };
    },
    el = r.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: a, emojiSize: s, onEmojiSelect: o, onSelectSoundmoji: l, setUpsellConfigs: d, sectionDescriptors: f, rowCountBySection: _, collapsedSections: y, setCollapsedSections: T, getEmojiItemProps: b, getEmojiRowProps: S, rowCount: O, isUsingKeyboardNavigation: k, channelGuildId: U, channelId: G, messageId: B, isBurstReaction: F, listHeaderClassName: V } = e,
            H = r.useRef(!1),
            q = E.kJ.useStore((e) => e.activeCategoryIndex),
            Q = (0, v.Iu)((e) => e.searchQuery),
            X = L.Yk.useSetting(),
            J = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
            $ = (0, P.I5)(J),
            { location: ee } = (0, h.O)(),
            { analyticsLocations: et } = (0, m.ZP)(),
            [en, ei] = r.useState(0),
            [er, ea] = r.useState(!1),
            [el, eu] = r.useState(0),
            ec = (0, C.N)(),
            ed = (0, N.Ng)(),
            ef = er && !$ && !u.tq,
            e_ = null != ec || null != ed,
            { enabled: ep } = D.G.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: ef && !e_,
                    disable: !ef || e_
                }
            ),
            eh = ep || (ef && null != ec),
            {
                listPadding: em,
                renderRow: eg,
                renderSection: eE,
                renderSectionHeader: ev,
                renderSectionFooter: ey,
                sectionMarginBottom: eI,
                sectionHeaderHeight: eT,
                sectionFooterHeight: eb
            } = eo({
                collapsedSections: y,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                searchQuery: Q,
                sectionDescriptors: f,
                setCollapsedSections: T,
                getEmojiItemProps: b,
                getEmojiRowProps: S,
                isScrolling: H,
                isUsingKeyboardNavigation: k,
                allowAnimatedEmoji: X,
                channelGuildId: U,
                channelId: G,
                messageId: B,
                isBurstReaction: F,
                listHeaderClassName: V,
                activeSectionIndex: en,
                upsellGlowOpacity: el,
                emojiListRef: a
            }),
            eS = (e) => {
                ei(e), '' === Q && E.kJ.setActiveCategoryIndex(e);
            },
            eA = (0, I.Uf)({
                listRef: a,
                searchQuery: Q,
                nitroLockedSectionStates: f,
                setShowUpsell: ea,
                setUpsellGlowOpacity: eu
            }),
            eN = (0, I.Qs)({
                activeCategoryIndex: q,
                isScrolling: H,
                listRef: a,
                onActiveCategoryIndexChange: eS,
                scrollOffset: z,
                searchQuery: Q,
                disableForSearch: !1
            });
        (0, I.Xs)({
            searchQuery: Q,
            activeCategoryIndex: q,
            listRef: a
        });
        let eC = r.useCallback(
                (e) => {
                    eA(e), eN(e);
                },
                [eA, eN]
            ),
            eR = f.length > 0;
        function eO() {
            if (!eh) return W.intl.string(W.t.EtmOFh);
            {
                let e = (0, M.Px)(Y.p9.TIER_2);
                return W.intl.format(W.t.gMVjeX, {
                    nitroTierName: e,
                    onClick: () => {
                        d({
                            type: Z.Bg.PREMIUM,
                            emojiDescriptor: void 0
                        });
                    }
                });
            }
        }
        function eD() {
            if (eh) {
                var e;
                let t = (0, A.J0)();
                return null !== (e = (0, M.fr)(t)) && void 0 !== e ? e : W.intl.string(W.t.BmJkbW);
            }
            return W.intl.string(W.t.BmJkbW);
        }
        return (
            r.useEffect(() => {
                er &&
                    w.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Y.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: ee,
                        location_stack: et
                    });
            }, [ee, et, er]),
            r.useEffect(() => {
                '' !== Q && (eu(0), ea(!1));
            }, [Q]),
            (0, i.jsxs)('div', {
                className: K.listWrapper,
                children: [
                    eR
                        ? (0, i.jsx)(g.Z, {
                              role: 'none presentation',
                              className: K.list,
                              listPadding: em,
                              onScroll: eC,
                              renderRow: eg,
                              renderSection: eE,
                              renderSectionHeader: ev,
                              renderSectionFooter: ey,
                              rowCount: O,
                              rowCountBySection: _,
                              rowHeight: es(s),
                              sectionHeaderHeight: eT,
                              sectionMarginBottom: eI,
                              sectionFooterHeight: eb,
                              stickyHeaders: !0,
                              ref: a
                          })
                        : (0, i.jsx)(p.Z, {
                              message: W.intl.string(W.t.IxxiKC),
                              className: K.noSearchResultsContainer
                          }),
                    $ || u.tq
                        ? null
                        : (0, i.jsx)(R.p, {
                              showUpsell: er,
                              text: eO(),
                              button: eD(),
                              buttonAnalyticsObject: { section: j.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
