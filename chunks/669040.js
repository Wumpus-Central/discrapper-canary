n.d(t, { Z: () => eu }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(873546),
    u = n(442837),
    d = n(336317),
    f = n(477690),
    _ = n(481060),
    p = n(788911),
    h = n(2052),
    m = n(906732),
    g = n(218867),
    E = n(556019),
    b = n(806966),
    y = n(28546),
    O = n(691251),
    v = n(98528),
    I = n(551058),
    S = n(536442),
    T = n(140465),
    A = n(775412),
    N = n(104494),
    C = n(639119),
    P = n(53691),
    R = n(75145),
    w = n(631771),
    D = n(695346),
    L = n(594174),
    x = n(626135),
    k = n(111361),
    M = n(74538),
    j = n(624138),
    U = n(543241),
    G = n(883661),
    B = n(880949),
    F = n(784222),
    V = n(172800),
    Z = n(663605),
    H = n(149203),
    Y = n(981631),
    W = n(957825),
    K = n(474936),
    z = n(388032),
    q = n(297961);
let Q = 0,
    X = 0,
    J = (0, j.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    $ = (0, j.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    ee = (0, j.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    et = (0, j.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    en = (0, j.Mg)(f.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    er = (0, j.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ei = 16,
    eo = (0, j.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ea = 41,
    es = 33,
    el = (e) => e + 2 * eo,
    ec = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: o, emojiSize: s, onEmojiSelect: c, onSelectSoundmoji: f, searchQuery: p, sectionDescriptors: m, setCollapsedSections: g, getEmojiItemProps: v, getEmojiRowProps: A, isScrolling: N, isUsingKeyboardNavigation: C, allowAnimatedEmoji: P, channelGuildId: w, channelId: D, messageId: L, isBurstReaction: k, listHeaderClassName: M, activeSectionIndex: j, upsellGlowOpacity: K, emojiListRef: Q } = e,
            eo = (0, h.O)(),
            el = i.useRef(Y.xAR),
            ec = i.useMemo(() => ('' !== n ? d.Z.convert.toCodePoint(n) : ''), [n]),
            eu = (0, E.h)({
                location: 'emoji_picker_section_header',
                autoTrackExposure: !1
            }),
            ed = i.useCallback(
                (e) => {
                    let t = m[e],
                        n = m[e + 1];
                    return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [m]
            ),
            ef = i.useCallback(
                (e) => {
                    if (e >= m.length - 1) return !1;
                    let t = m[e],
                        n = m[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [m]
            ),
            e_ = i.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            x.default.track(Y.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: eo.location,
                                tab: W.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        e === H.UX.SOUNDMOJI && x.default.track(Y.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        g(r);
                },
                [eo, t, g]
            ),
            ep = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === F.ld.SOUNDMOJI ? null : e.type === F.ld.EMOJI ? e.emoji.allNamesString : e.name;
                el.current !== Y.xAR && window.cancelAnimationFrame(el.current),
                    (el.current = window.requestAnimationFrame(() => {
                        b.kJ.setInspectedExpressionPosition(t, n, O.u.MOUSE_EVENT), b.kJ.setSearchPlaceholder(r), (el.current = Y.xAR);
                    }));
            }, []),
            eh = (0, u.e7)([S.qc], () => S.qc.hasHotspot(S.v6.FAVORITE_EMOJI_TOOLTIP), []),
            em = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = o[e],
                            i = m[t.sectionIndex],
                            a = () => {
                                var e;
                                null == (e = Q.current) || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, r.jsx)(
                            V.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: s,
                                surrogateCodePoint: ec,
                                onInspect: ep,
                                onSelect: c,
                                onSelectSoundmoji: f,
                                getEmojiItemProps: v,
                                getEmojiRowProps: A,
                                isScrolling: N,
                                isUsingKeyboardNavigation: C,
                                rowIndex: e,
                                allowAnimatedEmoji: P,
                                showEmojiFavoriteTooltip: eh,
                                channelGuildId: w,
                                category: i.sectionId,
                                selectedItemClassName: q.__invalid_selectedItem,
                                channelId: D,
                                messageId: L,
                                isBurstReaction: k,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: a
                            },
                            e
                        );
                    }),
                [o, m, s, ec, ep, c, f, v, A, N, C, P, eh, w, D, L, k, Q]
            );
        i.useEffect(
            () => () => {
                var e, t;
                return null == (t = em.cache) || null == (e = t.clear) ? void 0 : e.call(t);
            },
            [em]
        );
        let eg = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n,
                            i = m[e];
                        if (null == i) return;
                        let { guild: o, categoryId: s, type: l, sectionId: c } = i;
                        if (l === H.En.SEARCH_RESULTS) return;
                        let u =
                                l === H.En.GUILD
                                    ? null != o
                                        ? (0, r.jsx)(B.Z, {
                                              guild: o,
                                              height: ei,
                                              width: ei
                                          })
                                        : null
                                    : null != s
                                      ? (0, r.jsx)(G.Z, {
                                            categoryId: s,
                                            height: ei,
                                            width: ei,
                                            size: 'custom'
                                        })
                                      : null,
                            d = null == o ? void 0 : o.toString();
                        null != s && (d = (0, U.Y1)(s, null == o ? void 0 : o.toString()));
                        let f = j === e,
                            p = i.isNitroLocked,
                            h = p && !f,
                            g = p && f;
                        return (
                            l === H.En.SOUNDMOJI &&
                                (n = (0, r.jsx)(_.P3F, {
                                    className: q.soundmojiViewMore,
                                    onClick: () => {
                                        (0, y.hr)(W.X1.SOUNDBOARD), x.default.track(Y.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                    },
                                    children: z.intl.string(z.t.rUEjBQ)
                                })),
                            l === H.En.GUILD && eu && (n = (0, r.jsx)(Z.I, { guildId: null == o ? void 0 : o.id })),
                            (0, r.jsx)(
                                I.Z,
                                {
                                    className: a()(q.header, M, {
                                        [q.inactiveNitroHeader]: h,
                                        [q.activeNitroHeader]: g
                                    }),
                                    icon: u,
                                    isCollapsed: t.has(c),
                                    onClick: () => e_(c, o),
                                    trailing: n,
                                    children: d
                                },
                                c
                            )
                        );
                    }),
                [m, t, e_, M, j, eu]
            ),
            eE = (0, T.B4)(),
            eb = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        o = ef(e),
                        s = ed(e);
                    return (0, r.jsx)(
                        'div',
                        {
                            className: a()(q.categorySection, {
                                [q.categorySectionLast]: e === m.length - 1,
                                [q.categorySectionCollapsed]: t.has(i.sectionId),
                                [q.categorySectionNitroLocked]: i.isNitroLocked,
                                [q.categorySectionNitroDivider]: o || s
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, m, ef, ed]
            ),
            ey = i.useCallback((e) => (ef(e) ? (eE ? (0, r.jsx)(R.fi, {}) : (0, r.jsx)(R.ZP, { glowOpacity: K })) : ed(e) ? (0, r.jsx)('div', { className: q.nitroBottomDivider }) : null), [K, ef, ed, eE]),
            eO = i.useCallback((e) => (ef(e) ? ea : ed(e) ? es : 0), [ef, ed]),
            ev = i.useCallback(
                (e) => {
                    var n;
                    return e === m.length - 1 || t.has(null == (n = m[e]) ? void 0 : n.sectionId) || ef(e) || ed(e) ? 0 : er;
                },
                [t, m, ef, ed]
            );
        return {
            listPadding: i.useMemo(() => ['' !== p ? et : J, $, ee, X], [p]),
            renderRow: em,
            renderSection: eb,
            renderSectionHeader: eg,
            renderSectionFooter: ey,
            sectionMarginBottom: ev,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === H.En.SEARCH_RESULTS ? 0 : en), [m]),
            sectionFooterHeight: eO
        };
    },
    eu = i.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: o, emojiSize: a, onEmojiSelect: s, onSelectSoundmoji: l, setUpsellConfigs: d, sectionDescriptors: f, rowCountBySection: _, collapsedSections: E, setCollapsedSections: O, getEmojiItemProps: I, getEmojiRowProps: S, rowCount: T, isUsingKeyboardNavigation: R, channelGuildId: j, channelId: U, messageId: G, isBurstReaction: B, listHeaderClassName: V } = e,
            Z = i.useRef(!1),
            H = b.kJ.useStore((e) => e.activeCategoryIndex),
            W = (0, y.Iu)((e) => e.searchQuery),
            X = D.Yk.useSetting(),
            J = (0, u.e7)([L.default], () => L.default.getCurrentUser()),
            $ = (0, k.I5)(J),
            { location: ee } = (0, h.O)(),
            { analyticsLocations: et } = (0, m.ZP)(),
            [en, er] = i.useState(0),
            [ei, eo] = i.useState(!1),
            [ea, es] = i.useState(0),
            eu = (0, C.N)(),
            ed = (0, N.Ng)(),
            ef = ei && !$ && !c.tq,
            e_ = null != eu || null != ed,
            { enabled: ep } = w.G.useExperiment(
                { location: 'Premium Emoji Roadblock' },
                {
                    autoTrackExposure: ef && !e_,
                    disable: !ef || e_
                }
            ),
            eh = ep || (ef && null != eu),
            {
                listPadding: em,
                renderRow: eg,
                renderSection: eE,
                renderSectionHeader: eb,
                renderSectionFooter: ey,
                sectionMarginBottom: eO,
                sectionHeaderHeight: ev,
                sectionFooterHeight: eI
            } = ec({
                collapsedSections: E,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: a,
                onEmojiSelect: s,
                onSelectSoundmoji: l,
                searchQuery: W,
                sectionDescriptors: f,
                setCollapsedSections: O,
                getEmojiItemProps: I,
                getEmojiRowProps: S,
                isScrolling: Z,
                isUsingKeyboardNavigation: R,
                allowAnimatedEmoji: X,
                channelGuildId: j,
                channelId: U,
                messageId: G,
                isBurstReaction: B,
                listHeaderClassName: V,
                activeSectionIndex: en,
                upsellGlowOpacity: ea,
                emojiListRef: o
            }),
            eS = (e) => {
                er(e), '' === W && b.kJ.setActiveCategoryIndex(e);
            },
            eT = (0, v.Uf)({
                listRef: o,
                searchQuery: W,
                nitroLockedSectionStates: f,
                setShowUpsell: eo,
                setUpsellGlowOpacity: es
            }),
            eA = (0, v.Qs)({
                activeCategoryIndex: H,
                isScrolling: Z,
                listRef: o,
                onActiveCategoryIndexChange: eS,
                scrollOffset: Q,
                searchQuery: W,
                disableForSearch: !1
            });
        (0, v.Xs)({
            searchQuery: W,
            activeCategoryIndex: H,
            listRef: o
        });
        let eN = i.useCallback(
                (e) => {
                    eT(e), eA(e);
                },
                [eT, eA]
            ),
            eC = f.length > 0;
        function eP() {
            if (!eh) return z.intl.string(z.t.EtmOFh);
            {
                let e = (0, M.Px)(K.p9.TIER_2);
                return z.intl.format(z.t.gMVjeX, {
                    nitroTierName: e,
                    onClick: () => {
                        d({
                            type: F.Bg.PREMIUM,
                            emojiDescriptor: void 0
                        });
                    }
                });
            }
        }
        function eR() {
            if (eh) {
                var e;
                let t = (0, A.J0)();
                return null != (e = (0, M.fr)(t)) ? e : z.intl.string(z.t.BmJkbW);
            }
            return z.intl.string(z.t.BmJkbW);
        }
        return (
            i.useEffect(() => {
                ei &&
                    x.default.track(Y.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: K.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: ee,
                        location_stack: et
                    });
            }, [ee, et, ei]),
            i.useEffect(() => {
                '' !== W && (es(0), eo(!1));
            }, [W]),
            (0, r.jsxs)('div', {
                className: q.listWrapper,
                children: [
                    eC
                        ? (0, r.jsx)(g.Z, {
                              role: 'none presentation',
                              className: q.list,
                              listPadding: em,
                              onScroll: eN,
                              renderRow: eg,
                              renderSection: eE,
                              renderSectionHeader: eb,
                              renderSectionFooter: ey,
                              rowCount: T,
                              rowCountBySection: _,
                              rowHeight: el(a),
                              sectionHeaderHeight: ev,
                              sectionMarginBottom: eO,
                              sectionFooterHeight: eI,
                              stickyHeaders: !0,
                              ref: o
                          })
                        : (0, r.jsx)(p.Z, {
                              message: z.intl.string(z.t.IxxiKC),
                              className: q.noSearchResultsContainer
                          }),
                    $ || c.tq
                        ? null
                        : (0, r.jsx)(P.p, {
                              showUpsell: ei,
                              text: eP(),
                              button: eR(),
                              buttonAnalyticsObject: { section: Y.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
