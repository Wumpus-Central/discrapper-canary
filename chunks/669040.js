(n.d(t, { Z: () => ec }), n(388685));
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
    O = n(122567),
    v = n(98528),
    I = n(551058),
    T = n(536442),
    S = n(140465),
    A = n(775412),
    N = n(53691),
    C = n(75145),
    R = n(695346),
    P = n(594174),
    w = n(626135),
    D = n(111361),
    L = n(74538),
    x = n(624138),
    k = n(543241),
    M = n(883661),
    j = n(880949),
    U = n(784222),
    G = n(172800),
    B = n(149203),
    V = n(981631),
    F = n(957825),
    Z = n(474936),
    H = n(388032),
    Y = n(297961);
let W = 0,
    K = 0,
    z = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    q = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    X = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    Q = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    J = (0, x.Mg)(f.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    $ = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ee = 16,
    et = (0, x.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    en = 41,
    er = 33,
    ei = (e) => e + 2 * et,
    ea = (e) => {
        let { collapsedSections: t, diversitySurrogate: n, emojiGrid: a, emojiSize: s, onEmojiSelect: c, onSelectSoundmoji: f, searchQuery: p, sectionDescriptors: m, setCollapsedSections: g, getEmojiItemProps: O, getEmojiRowProps: v, isScrolling: A, isUsingKeyboardNavigation: N, allowAnimatedEmoji: R, channelGuildId: P, channelId: D, messageId: L, isBurstReaction: x, listHeaderClassName: Z, activeSectionIndex: W, upsellGlowOpacity: et, emojiListRef: ei } = e,
            ea = (0, h.O)(),
            eo = i.useRef(V.xAR),
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
                            w.default.track(V.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: ea.location,
                                tab: F.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id
                            }),
                        e === B.UX.SOUNDMOJI && w.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        g(r));
                },
                [ea, t, g]
            ),
            ed = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === U.ld.SOUNDMOJI ? null : e.type === U.ld.EMOJI ? e.emoji.allNamesString : e.name;
                (eo.current !== V.xAR && window.cancelAnimationFrame(eo.current),
                    (eo.current = window.requestAnimationFrame(() => {
                        (E.kJ.setInspectedExpressionPosition(t, n, y.u.MOUSE_EVENT), E.kJ.setSearchPlaceholder(r), (eo.current = V.xAR));
                    })));
            }, []),
            ef = (0, u.e7)([T.qc], () => T.qc.hasHotspot(T.v6.FAVORITE_EMOJI_TOOLTIP), []),
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
                            G.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: s,
                                surrogateCodePoint: es,
                                onInspect: ed,
                                onSelect: c,
                                onSelectSoundmoji: f,
                                getEmojiItemProps: O,
                                getEmojiRowProps: v,
                                isScrolling: A,
                                isUsingKeyboardNavigation: N,
                                rowIndex: e,
                                allowAnimatedEmoji: R,
                                showEmojiFavoriteTooltip: ef,
                                channelGuildId: P,
                                category: i.sectionId,
                                selectedItemClassName: Y.__invalid_selectedItem,
                                channelId: D,
                                messageId: L,
                                isBurstReaction: x,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: o
                            },
                            e
                        );
                    }),
                [a, m, s, es, ed, c, f, O, v, A, N, R, ef, P, D, L, x, ei]
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
                        if (s === B.En.SEARCH_RESULTS) return;
                        let c =
                                s === B.En.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(j.Z, {
                                              guild: i,
                                              height: ee,
                                              width: ee
                                          })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(M.Z, {
                                            categoryId: a,
                                            height: ee,
                                            width: ee,
                                            size: 'custom'
                                        })
                                      : null,
                            u = null == i ? void 0 : i.name;
                        null != a && (u = (0, k.Y1)(a, null == i ? void 0 : i.name));
                        let d = W === e,
                            f = n.isNitroLocked,
                            p = f && !d,
                            h = f && d,
                            g =
                                s === B.En.SOUNDMOJI
                                    ? (0, r.jsx)(_.P3F, {
                                          className: Y.soundmojiViewMore,
                                          onClick: () => {
                                              ((0, b.hr)(F.X1.SOUNDBOARD), w.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK));
                                          },
                                          children: H.intl.string(H.t.rUEjBQ)
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            I.Z,
                            {
                                className: o()(Y.header, Z, {
                                    [Y.inactiveNitroHeader]: p,
                                    [Y.activeNitroHeader]: h
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
                [m, t, eu, Z, W]
            ),
            eh = (0, S.B4)(),
            em = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        a = ec(e),
                        s = el(e);
                    return (0, r.jsx)(
                        'div',
                        {
                            className: o()(Y.categorySection, {
                                [Y.categorySectionLast]: e === m.length - 1,
                                [Y.categorySectionCollapsed]: t.has(i.sectionId),
                                [Y.categorySectionNitroLocked]: i.isNitroLocked,
                                [Y.categorySectionNitroDivider]: a || s
                            }),
                            children: n
                        },
                        e
                    );
                },
                [t, m, ec, el]
            ),
            eg = i.useCallback((e) => (ec(e) ? (eh ? (0, r.jsx)(C.fi, {}) : (0, r.jsx)(C.ZP, { glowOpacity: et })) : el(e) ? (0, r.jsx)('div', { className: Y.nitroBottomDivider }) : null), [et, ec, el, eh]),
            eE = i.useCallback((e) => (ec(e) ? en : el(e) ? er : 0), [ec, el]),
            eb = i.useCallback(
                (e) => {
                    var n;
                    return e === m.length - 1 || t.has(null == (n = m[e]) ? void 0 : n.sectionId) || ec(e) || el(e) ? 0 : $;
                },
                [t, m, ec, el]
            );
        return {
            listPadding: i.useMemo(() => ['' !== p ? Q : z, q, X, K], [p]),
            renderRow: e_,
            renderSection: em,
            renderSectionHeader: ep,
            renderSectionFooter: eg,
            sectionMarginBottom: eb,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === B.En.SEARCH_RESULTS ? 0 : J), [m]),
            sectionFooterHeight: eE
        };
    },
    eo = i.memo(function (e) {
        let { diversitySurrogate: t, emojiGrid: n, emojiListRef: a, emojiSize: o, onEmojiSelect: s, onSelectSoundmoji: l, setUpsellConfigs: d, sectionDescriptors: f, rowCountBySection: _, collapsedSections: y, setCollapsedSections: O, getEmojiItemProps: I, getEmojiRowProps: T, rowCount: S, isUsingKeyboardNavigation: C, channelGuildId: x, channelId: k, messageId: M, isBurstReaction: j, listHeaderClassName: G } = e,
            B = i.useRef(!1),
            F = E.kJ.useStore((e) => e.activeCategoryIndex),
            K = (0, b.Iu)((e) => e.searchQuery),
            z = R.Yk.useSetting(),
            q = (0, u.e7)([P.default], () => P.default.getCurrentUser()),
            X = (0, D.I5)(q),
            { location: Q } = (0, h.O)(),
            { analyticsLocations: J } = (0, m.ZP)(),
            [$, ee] = i.useState(0),
            [et, en] = i.useState(!1),
            [er, eo] = i.useState(0),
            {
                listPadding: el,
                renderRow: ec,
                renderSection: eu,
                renderSectionHeader: ed,
                renderSectionFooter: ef,
                sectionMarginBottom: e_,
                sectionHeaderHeight: ep,
                sectionFooterHeight: eh
            } = ea({
                collapsedSections: y,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: o,
                onEmojiSelect: s,
                onSelectSoundmoji: l,
                searchQuery: K,
                sectionDescriptors: f,
                setCollapsedSections: O,
                getEmojiItemProps: I,
                getEmojiRowProps: T,
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
            em = (e) => {
                (ee(e), '' === K && E.kJ.setActiveCategoryIndex(e));
            },
            eg = (0, v.fe)({
                listRef: a,
                searchQuery: K,
                nitroLockedSectionStates: f,
                setUpsellGlowOpacity: eo
            }),
            eE = (0, v.Qs)({
                activeCategoryIndex: F,
                isScrolling: B,
                listRef: a,
                onActiveCategoryIndexChange: em,
                scrollOffset: W,
                searchQuery: K,
                disableForSearch: !1
            });
        (0, v.Xs)({
            searchQuery: K,
            activeCategoryIndex: F,
            listRef: a
        });
        let eb = i.useCallback(
                (e) => {
                    (eg(e),
                        eE(e),
                        es({
                            emojiListRef: a,
                            sectionDescriptors: f,
                            scrollTop: e,
                            searchQuery: K,
                            setShowUpsell: en
                        }));
                },
                [eg, eE, a, f, K, en]
            ),
            ey = f.length > 0;
        function eO() {
            let e = (0, L.Px)(Z.p9.TIER_2);
            return H.intl.format(H.t.gMVjeX, {
                nitroTierName: e,
                onClick: () => {
                    d({
                        type: U.Bg.PREMIUM,
                        emojiDescriptor: void 0
                    });
                }
            });
        }
        function ev() {
            var e;
            let t = (0, A.J0)();
            return null != (e = (0, L.fr)(t)) ? e : H.intl.string(H.t.BmJkbW);
        }
        return (
            i.useEffect(() => {
                et &&
                    w.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Z.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: Q,
                        location_stack: J
                    });
            }, [Q, J, et]),
            i.useEffect(() => {
                '' !== K && (eo(0), en(!1));
            }, [K]),
            (0, r.jsxs)('div', {
                className: Y.listWrapper,
                children: [
                    ey
                        ? (0, r.jsx)(g.Z, {
                              role: 'none presentation',
                              className: Y.list,
                              listPadding: el,
                              onScroll: eb,
                              renderRow: ec,
                              renderSection: eu,
                              renderSectionHeader: ed,
                              renderSectionFooter: ef,
                              rowCount: S,
                              rowCountBySection: _,
                              rowHeight: ei(o),
                              sectionHeaderHeight: ep,
                              sectionMarginBottom: e_,
                              sectionFooterHeight: eh,
                              stickyHeaders: !0,
                              ref: a
                          })
                        : (0, r.jsx)(p.Z, {
                              message: H.intl.string(H.t.IxxiKC),
                              className: Y.noSearchResultsContainer
                          }),
                    X || c.tq
                        ? null
                        : (0, r.jsx)(N.p, {
                              showUpsell: et,
                              text: eO(),
                              button: ev(),
                              buttonAnalyticsObject: { section: V.jXE.EMOJI_PICKER_FLOATING_UPSELL }
                          })
                ]
            })
        );
    }),
    es = l().throttle(el, 300, {
        leading: !1,
        trailing: !0
    });
function el(e) {
    let { emojiListRef: t, sectionDescriptors: n, scrollTop: r, searchQuery: i, setShowUpsell: a } = e;
    a(
        (0, O.y)({
            listRef: t,
            searchQuery: i,
            nitroLockedSectionStates: n,
            scrollTop: r
        }).areOnlyNitroLockedSectionsVisible
    );
}
let ec = eo;
