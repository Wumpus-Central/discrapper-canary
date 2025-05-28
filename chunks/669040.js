n.d(t, { Z: () => es }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
    N = n(53691),
    C = n(75145),
    P = n(695346),
    R = n(594174),
    w = n(626135),
    D = n(111361),
    L = n(74538),
    x = n(624138),
    k = n(543241),
    M = n(883661),
    j = n(880949),
    U = n(784222),
    G = n(172800),
    B = n(663605),
    F = n(149203),
    V = n(981631),
    Z = n(957825),
    H = n(474936),
    Y = n(388032),
    W = n(297961);
let K = 0,
    z = 0,
    q = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    Q = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    X = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    J = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    $ = (0, x.Mg)(f.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ee = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    et = 16,
    en = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    er = 41,
    ei = 33,
    ea = (e) => e + 2 * en,
    eo = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: a, emojiSize: s, onEmojiSelect: c, onSelectSoundmoji: f, searchQuery: p, sectionDescriptors: m, setCollapsedSections: g, getEmojiItemProps: v, getEmojiRowProps: A, isScrolling: N, isUsingKeyboardNavigation: P, allowAnimatedEmoji: R, channelGuildId: D, channelId: L, messageId: x, isBurstReaction: H, listHeaderClassName: K, activeSectionIndex: en, upsellGlowOpacity: ea, emojiListRef: eo } = e,
            es = (0, h.O)(),
            el = i.useRef(V.xAR),
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
                            w.default.track(V.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: es.location,
                                tab: Z.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        e === F.UX.SOUNDMOJI && w.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        g(r);
                },
                [es, t, g]
            ),
            ep = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === U.ld.SOUNDMOJI ? null : e.type === U.ld.EMOJI ? e.emoji.allNamesString : e.name;
                el.current !== V.xAR && window.cancelAnimationFrame(el.current),
                    (el.current = window.requestAnimationFrame(() => {
                        b.kJ.setInspectedExpressionPosition(t, n, O.u.MOUSE_EVENT), b.kJ.setSearchPlaceholder(r), (el.current = V.xAR);
                    }));
            }, []),
            eh = (0, u.e7)([S.qc], () => S.qc.hasHotspot(S.v6.FAVORITE_EMOJI_TOOLTIP), []),
            em = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = m[t.sectionIndex],
                            o = () => {
                                var e;
                                null == (e = eo.current) || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, r.jsx)(
                            G.Z,
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
                                isUsingKeyboardNavigation: P,
                                rowIndex: e,
                                allowAnimatedEmoji: R,
                                showEmojiFavoriteTooltip: eh,
                                channelGuildId: D,
                                category: i.sectionId,
                                selectedItemClassName: W.__invalid_selectedItem,
                                channelId: L,
                                messageId: x,
                                isBurstReaction: H,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: o
                            },
                            e
                        );
                    }),
                [a, m, s, ec, ep, c, f, v, A, N, P, R, eh, D, L, x, H, eo]
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
                        let { guild: a, categoryId: s, type: l, sectionId: c } = i;
                        if (l === F.En.SEARCH_RESULTS) return;
                        let u =
                                l === F.En.GUILD
                                    ? null != a
                                        ? (0, r.jsx)(j.Z, {
                                              guild: a,
                                              height: et,
                                              width: et
                                          })
                                        : null
                                    : null != s
                                      ? (0, r.jsx)(M.Z, {
                                            categoryId: s,
                                            height: et,
                                            width: et,
                                            size: 'custom'
                                        })
                                      : null,
                            d = null == a ? void 0 : a.toString();
                        null != s && (d = (0, k.Y1)(s, null == a ? void 0 : a.toString()));
                        let f = en === e,
                            p = i.isNitroLocked,
                            h = p && !f,
                            g = p && f;
                        return (
                            l === F.En.SOUNDMOJI &&
                                (n = (0, r.jsx)(_.P3F, {
                                    className: W.soundmojiViewMore,
                                    onClick: () => {
                                        (0, y.hr)(Z.X1.SOUNDBOARD), w.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                    },
                                    children: Y.intl.string(Y.t.rUEjBQ)
                                })),
                            l === F.En.GUILD && eu && (n = (0, r.jsx)(B.I, { guildId: null == a ? void 0 : a.id })),
                            (0, r.jsx)(
                                I.Z,
                                {
                                    className: o()(W.header, K, {
                                        [W.inactiveNitroHeader]: h,
                                        [W.activeNitroHeader]: g
                                    }),
                                    icon: u,
                                    isCollapsed: t.has(c),
                                    onClick: () => e_(c, a),
                                    trailing: n,
                                    children: d
                                },
                                c
                            )
                        );
                    }),
                [m, t, e_, K, en, eu]
            ),
            eE = (0, T.B4)(),
            eb = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        a = ef(e),
                        s = ed(e);
                    return (0, r.jsx)(
                        'div',
                        {
                            className: o()(W.categorySection, {
                                [W.categorySectionLast]: e === m.length - 1,
                                [W.categorySectionCollapsed]: t.has(i.sectionId),
                                [W.categorySectionNitroLocked]: i.isNitroLocked,
                                [W.categorySectionNitroDivider]: a || s
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, m, ef, ed]
            ),
            ey = i.useCallback((e) => (ef(e) ? (eE ? (0, r.jsx)(C.fi, {}) : (0, r.jsx)(C.ZP, { glowOpacity: ea })) : ed(e) ? (0, r.jsx)('div', { className: W.nitroBottomDivider }) : null), [ea, ef, ed, eE]),
            eO = i.useCallback((e) => (ef(e) ? er : ed(e) ? ei : 0), [ef, ed]),
            ev = i.useCallback(
                (e) => {
                    var n;
                    return e === m.length - 1 || t.has(null == (n = m[e]) ? void 0 : n.sectionId) || ef(e) || ed(e) ? 0 : ee;
                },
                [t, m, ef, ed]
            );
        return {
            listPadding: i.useMemo(() => ['' !== p ? J : q, Q, X, z], [p]),
            renderRow: em,
            renderSection: eb,
            renderSectionHeader: eg,
            renderSectionFooter: ey,
            sectionMarginBottom: ev,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === F.En.SEARCH_RESULTS ? 0 : $), [m]),
            sectionFooterHeight: eO
        };
    },
    es = i.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: a, emojiSize: o, onEmojiSelect: s, onSelectSoundmoji: l, setUpsellConfigs: d, sectionDescriptors: f, rowCountBySection: _, collapsedSections: E, setCollapsedSections: O, getEmojiItemProps: I, getEmojiRowProps: S, rowCount: T, isUsingKeyboardNavigation: C, channelGuildId: x, channelId: k, messageId: M, isBurstReaction: j, listHeaderClassName: G } = e,
            B = i.useRef(!1),
            F = b.kJ.useStore((e) => e.activeCategoryIndex),
            Z = (0, y.Iu)((e) => e.searchQuery),
            z = P.Yk.useSetting(),
            q = (0, u.e7)([R.default], () => R.default.getCurrentUser()),
            Q = (0, D.I5)(q),
            { location: X } = (0, h.O)(),
            { analyticsLocations: J } = (0, m.ZP)(),
            [$, ee] = i.useState(0),
            [et, en] = i.useState(!1),
            [er, ei] = i.useState(0),
            {
                listPadding: es,
                renderRow: el,
                renderSection: ec,
                renderSectionHeader: eu,
                renderSectionFooter: ed,
                sectionMarginBottom: ef,
                sectionHeaderHeight: e_,
                sectionFooterHeight: ep
            } = eo({
                collapsedSections: E,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: o,
                onEmojiSelect: s,
                onSelectSoundmoji: l,
                searchQuery: Z,
                sectionDescriptors: f,
                setCollapsedSections: O,
                getEmojiItemProps: I,
                getEmojiRowProps: S,
                isScrolling: B,
                isUsingKeyboardNavigation: C,
                allowAnimatedEmoji: z,
                channelGuildId: x,
                channelId: k,
                messageId: M,
                isBurstReaction: j,
                listHeaderClassName: G,
                activeSectionIndex: $,
                upsellGlowOpacity: er,
                emojiListRef: a
            }),
            eh = (e) => {
                ee(e), '' === Z && b.kJ.setActiveCategoryIndex(e);
            },
            em = (0, v.Uf)({
                listRef: a,
                searchQuery: Z,
                nitroLockedSectionStates: f,
                setShowUpsell: en,
                setUpsellGlowOpacity: ei
            }),
            eg = (0, v.Qs)({
                activeCategoryIndex: F,
                isScrolling: B,
                listRef: a,
                onActiveCategoryIndexChange: eh,
                scrollOffset: K,
                searchQuery: Z,
                disableForSearch: !1
            });
        (0, v.Xs)({
            searchQuery: Z,
            activeCategoryIndex: F,
            listRef: a
        });
        let eE = i.useCallback(
                (e) => {
                    em(e), eg(e);
                },
                [em, eg]
            ),
            eb = f.length > 0;
        function ey() {
            let e = (0, L.Px)(H.p9.TIER_2);
            return Y.intl.format(Y.t.gMVjeX, {
                nitroTierName: e,
                onClick: () => {
                    d({
                        type: U.Bg.PREMIUM,
                        emojiDescriptor: void 0
                    });
                }
            });
        }
        function eO() {
            var e;
            let t = (0, A.J0)();
            return null != (e = (0, L.fr)(t)) ? e : Y.intl.string(Y.t.BmJkbW);
        }
        return (
            i.useEffect(() => {
                et &&
                    w.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: H.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: X,
                        location_stack: J
                    });
            }, [X, J, et]),
            i.useEffect(() => {
                '' !== Z && (ei(0), en(!1));
            }, [Z]),
            (0, r.jsxs)('div', {
                className: W.listWrapper,
                children: [
                    eb
                        ? (0, r.jsx)(g.Z, {
                              role: 'none presentation',
                              className: W.list,
                              listPadding: es,
                              onScroll: eE,
                              renderRow: el,
                              renderSection: ec,
                              renderSectionHeader: eu,
                              renderSectionFooter: ed,
                              rowCount: T,
                              rowCountBySection: _,
                              rowHeight: ea(o),
                              sectionHeaderHeight: e_,
                              sectionMarginBottom: ef,
                              sectionFooterHeight: ep,
                              stickyHeaders: !0,
                              ref: a
                          })
                        : (0, r.jsx)(p.Z, {
                              message: Y.intl.string(Y.t.IxxiKC),
                              className: W.noSearchResultsContainer
                          }),
                    Q || c.tq
                        ? null
                        : (0, r.jsx)(N.p, {
                              showUpsell: et,
                              text: ey(),
                              button: eO(),
                              buttonAnalyticsObject: { section: V.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
