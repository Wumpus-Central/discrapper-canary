(n.d(t, { Z: () => ea }), n(388685));
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
    E = n(806966),
    b = n(28546),
    y = n(691251),
    O = n(98528),
    v = n(551058),
    I = n(536442),
    T = n(140465),
    S = n(775412),
    A = n(53691),
    N = n(75145),
    C = n(695346),
    R = n(594174),
    P = n(626135),
    w = n(111361),
    D = n(74538),
    L = n(624138),
    x = n(543241),
    k = n(883661),
    M = n(880949),
    j = n(784222),
    U = n(172800),
    G = n(149203),
    B = n(981631),
    V = n(957825),
    F = n(474936),
    Z = n(388032),
    H = n(297961);
let Y = 0,
    W = 0,
    K = (0, L.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    z = (0, L.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    q = (0, L.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    X = (0, L.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    Q = (0, L.Mg)(f.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    J = (0, L.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    $ = 16,
    ee = (0, L.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    et = 41,
    en = 33,
    er = (e) => e + 2 * ee,
    ei = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: a, emojiSize: s, onEmojiSelect: c, onSelectSoundmoji: f, searchQuery: p, sectionDescriptors: m, setCollapsedSections: g, getEmojiItemProps: O, getEmojiRowProps: S, isScrolling: A, isUsingKeyboardNavigation: C, allowAnimatedEmoji: R, channelGuildId: w, channelId: D, messageId: L, isBurstReaction: F, listHeaderClassName: Y, activeSectionIndex: ee, upsellGlowOpacity: er, emojiListRef: ei } = e,
            ea = (0, h.O)(),
            eo = i.useRef(B.xAR),
            es = i.useMemo(() => ('' !== n ? d.Z.convert.toCodePoint(n) : ''), [n]),
            el = i.useCallback(
                (e) => {
                    let t = m[e],
                        n = m[e + 1];
                    return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [m]
            ),
            ec = i.useCallback(
                (e) => {
                    if (e >= m.length - 1) return !1;
                    let t = m[e],
                        n = m[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [m]
            ),
            eu = i.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    (i ? r.delete(e) : r.add(e),
                        null != n &&
                            P.default.track(B.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: ea.location,
                                tab: V.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        e === G.UX.SOUNDMOJI && P.default.track(B.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        g(r));
                },
                [ea, t, g]
            ),
            ed = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === j.ld.SOUNDMOJI ? null : e.type === j.ld.EMOJI ? e.emoji.allNamesString : e.name;
                (eo.current !== B.xAR && window.cancelAnimationFrame(eo.current),
                    (eo.current = window.requestAnimationFrame(() => {
                        (E.kJ.setInspectedExpressionPosition(t, n, y.u.MOUSE_EVENT), E.kJ.setSearchPlaceholder(r), (eo.current = B.xAR));
                    })));
            }, []),
            ef = (0, u.e7)([I.qc], () => I.qc.hasHotspot(I.v6.FAVORITE_EMOJI_TOOLTIP), []),
            e_ = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = m[t.sectionIndex],
                            o = () => {
                                var e;
                                null == (e = ei.current) || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, r.jsx)(
                            U.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: s,
                                surrogateCodePoint: es,
                                onInspect: ed,
                                onSelect: c,
                                onSelectSoundmoji: f,
                                getEmojiItemProps: O,
                                getEmojiRowProps: S,
                                isScrolling: A,
                                isUsingKeyboardNavigation: C,
                                rowIndex: e,
                                allowAnimatedEmoji: R,
                                showEmojiFavoriteTooltip: ef,
                                channelGuildId: w,
                                category: i.sectionId,
                                selectedItemClassName: H.__invalid_selectedItem,
                                channelId: D,
                                messageId: L,
                                isBurstReaction: F,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: o
                            },
                            e
                        );
                    }),
                [a, m, s, es, ed, c, f, O, S, A, C, R, ef, w, D, L, F, ei]
            );
        i.useEffect(
            () => () => {
                var e, t;
                return null == (t = e_.cache) || null == (e = t.clear) ? void 0 : e.call(t);
            },
            [e_]
        );
        let ep = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = m[e];
                        if (null == n) return;
                        let { guild: i, categoryId: a, type: s, sectionId: l } = n;
                        if (s === G.En.SEARCH_RESULTS) return;
                        let c =
                                s === G.En.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(M.Z, {
                                              guild: i,
                                              height: $,
                                              width: $
                                          })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(k.Z, {
                                            categoryId: a,
                                            height: $,
                                            width: $,
                                            size: 'custom'
                                        })
                                      : null,
                            u = null == i ? void 0 : i.toString();
                        null != a && (u = (0, x.Y1)(a, null == i ? void 0 : i.toString()));
                        let d = ee === e,
                            f = n.isNitroLocked,
                            p = f && !d,
                            h = f && d,
                            g =
                                s === G.En.SOUNDMOJI
                                    ? (0, r.jsx)(_.P3F, {
                                          className: H.soundmojiViewMore,
                                          onClick: () => {
                                              ((0, b.hr)(V.X1.SOUNDBOARD), P.default.track(B.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK));
                                          },
                                          children: Z.intl.string(Z.t.rUEjBQ)
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            v.Z,
                            {
                                className: o()(H.header, Y, {
                                    [H.inactiveNitroHeader]: p,
                                    [H.activeNitroHeader]: h
                                }),
                                icon: c,
                                isCollapsed: t.has(l),
                                onClick: () => eu(l, i),
                                trailing: g,
                                children: u
                            },
                            l
                        );
                    }),
                [m, t, eu, Y, ee]
            ),
            eh = (0, T.B4)(),
            em = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        a = ec(e),
                        s = el(e);
                    return (0, r.jsx)(
                        'div',
                        {
                            className: o()(H.categorySection, {
                                [H.categorySectionLast]: e === m.length - 1,
                                [H.categorySectionCollapsed]: t.has(i.sectionId),
                                [H.categorySectionNitroLocked]: i.isNitroLocked,
                                [H.categorySectionNitroDivider]: a || s
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, m, ec, el]
            ),
            eg = i.useCallback((e) => (ec(e) ? (eh ? (0, r.jsx)(N.fi, {}) : (0, r.jsx)(N.ZP, { glowOpacity: er })) : el(e) ? (0, r.jsx)('div', { className: H.nitroBottomDivider }) : null), [er, ec, el, eh]),
            eE = i.useCallback((e) => (ec(e) ? et : el(e) ? en : 0), [ec, el]),
            eb = i.useCallback(
                (e) => {
                    var n;
                    return e === m.length - 1 || t.has(null == (n = m[e]) ? void 0 : n.sectionId) || ec(e) || el(e) ? 0 : J;
                },
                [t, m, ec, el]
            );
        return {
            listPadding: i.useMemo(() => ['' !== p ? X : K, z, q, W], [p]),
            renderRow: e_,
            renderSection: em,
            renderSectionHeader: ep,
            renderSectionFooter: eg,
            sectionMarginBottom: eb,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === G.En.SEARCH_RESULTS ? 0 : Q), [m]),
            sectionFooterHeight: eE
        };
    },
    ea = i.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: a, emojiSize: o, onEmojiSelect: s, onSelectSoundmoji: l, setUpsellConfigs: d, sectionDescriptors: f, rowCountBySection: _, collapsedSections: y, setCollapsedSections: v, getEmojiItemProps: I, getEmojiRowProps: T, rowCount: N, isUsingKeyboardNavigation: L, channelGuildId: x, channelId: k, messageId: M, isBurstReaction: U, listHeaderClassName: G } = e,
            V = i.useRef(!1),
            W = E.kJ.useStore((e) => e.activeCategoryIndex),
            K = (0, b.Iu)((e) => e.searchQuery),
            z = C.Yk.useSetting(),
            q = (0, u.e7)([R.default], () => R.default.getCurrentUser()),
            X = (0, w.I5)(q),
            { location: Q } = (0, h.O)(),
            { analyticsLocations: J } = (0, m.ZP)(),
            [$, ee] = i.useState(0),
            [et, en] = i.useState(!1),
            [ea, eo] = i.useState(0),
            {
                listPadding: es,
                renderRow: el,
                renderSection: ec,
                renderSectionHeader: eu,
                renderSectionFooter: ed,
                sectionMarginBottom: ef,
                sectionHeaderHeight: e_,
                sectionFooterHeight: ep
            } = ei({
                collapsedSections: y,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: o,
                onEmojiSelect: s,
                onSelectSoundmoji: l,
                searchQuery: K,
                sectionDescriptors: f,
                setCollapsedSections: v,
                getEmojiItemProps: I,
                getEmojiRowProps: T,
                isScrolling: V,
                isUsingKeyboardNavigation: L,
                allowAnimatedEmoji: z,
                channelGuildId: x,
                channelId: k,
                messageId: M,
                isBurstReaction: U,
                listHeaderClassName: G,
                activeSectionIndex: $,
                upsellGlowOpacity: ea,
                emojiListRef: a
            }),
            eh = (e) => {
                (ee(e), '' === K && E.kJ.setActiveCategoryIndex(e));
            },
            em = (0, O.Uf)({
                listRef: a,
                searchQuery: K,
                nitroLockedSectionStates: f,
                setShowUpsell: en,
                setUpsellGlowOpacity: eo
            }),
            eg = (0, O.Qs)({
                activeCategoryIndex: W,
                isScrolling: V,
                listRef: a,
                onActiveCategoryIndexChange: eh,
                scrollOffset: Y,
                searchQuery: K,
                disableForSearch: !1
            });
        (0, O.Xs)({
            searchQuery: K,
            activeCategoryIndex: W,
            listRef: a
        });
        let eE = i.useCallback(
                (e) => {
                    (em(e), eg(e));
                },
                [em, eg]
            ),
            eb = f.length > 0;
        function ey() {
            let e = (0, D.Px)(F.p9.TIER_2);
            return Z.intl.format(Z.t.gMVjeX, {
                nitroTierName: e,
                onClick: () => {
                    d({
                        type: j.Bg.PREMIUM,
                        emojiDescriptor: void 0
                    });
                }
            });
        }
        function eO() {
            var e;
            let t = (0, S.J0)();
            return null != (e = (0, D.fr)(t)) ? e : Z.intl.string(Z.t.BmJkbW);
        }
        return (
            i.useEffect(() => {
                et &&
                    P.default.track(B.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: F.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: Q,
                        location_stack: J
                    });
            }, [Q, J, et]),
            i.useEffect(() => {
                '' !== K && (eo(0), en(!1));
            }, [K]),
            (0, r.jsxs)('div', {
                className: H.listWrapper,
                children: [
                    eb
                        ? (0, r.jsx)(g.Z, {
                              role: 'none presentation',
                              className: H.list,
                              listPadding: es,
                              onScroll: eE,
                              renderRow: el,
                              renderSection: ec,
                              renderSectionHeader: eu,
                              renderSectionFooter: ed,
                              rowCount: N,
                              rowCountBySection: _,
                              rowHeight: er(o),
                              sectionHeaderHeight: e_,
                              sectionMarginBottom: ef,
                              sectionFooterHeight: ep,
                              stickyHeaders: !0,
                              ref: a
                          })
                        : (0, r.jsx)(p.Z, {
                              message: Z.intl.string(Z.t.IxxiKC),
                              className: H.noSearchResultsContainer
                          }),
                    X || c.tq
                        ? null
                        : (0, r.jsx)(A.p, {
                              showUpsell: et,
                              text: ey(),
                              button: eO(),
                              buttonAnalyticsObject: { section: B.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    });
