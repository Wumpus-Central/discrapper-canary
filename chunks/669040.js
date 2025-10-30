n.d(t, { Z: () => eu }), n(388685);
var r = n(951288),
    i = n(647438),
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
    C = n(53691),
    N = n(75145),
    R = n(695346),
    P = n(594174),
    w = n(626135),
    D = n(176354),
    x = n(111361),
    L = n(74538),
    M = n(624138),
    k = n(543241),
    j = n(883661),
    U = n(880949),
    G = n(784222),
    B = n(172800),
    Z = n(149203),
    F = n(981631),
    V = n(957825),
    H = n(474936),
    Y = n(388032),
    W = n(4670);
let K = 0,
    z = 0,
    q = (0, M.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    X = (0, M.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    Q = (0, M.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    J = (0, M.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    $ = (0, M.Mg)(f.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ee = (0, M.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    et = 16,
    en = (0, M.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    er = 41,
    ei = 33,
    ea = (e) => e + 2 * en,
    eo = (e) => {
        let {
                collapsedSections: t,
                diversitySurrogate: n,
                emojiGrid: a,
                emojiSize: s,
                onEmojiSelect: c,
                onSelectSoundmoji: f,
                searchQuery: p,
                sectionDescriptors: m,
                setCollapsedSections: g,
                getEmojiItemProps: O,
                getEmojiRowProps: v,
                isScrolling: A,
                isUsingKeyboardNavigation: C,
                allowAnimatedEmoji: R,
                channelGuildId: P,
                channelId: x,
                messageId: L,
                isBurstReaction: M,
                listHeaderClassName: H,
                activeSectionIndex: K,
                upsellGlowOpacity: en,
                emojiListRef: ea,
            } = e,
            eo = (0, h.O)(),
            es = i.useRef(F.xAR),
            el = i.useMemo(() => ("" !== n ? d.Z.convert.toCodePoint(n) : ""), [n]),
            ec = i.useCallback(
                (e) => {
                    let t = m[e],
                        n = m[e + 1];
                    return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [m],
            ),
            eu = i.useCallback(
                (e) => {
                    if (e >= m.length - 1) return !1;
                    let t = m[e],
                        n = m[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [m],
            ),
            ed = i.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            w.default.track(F.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: eo.location,
                                tab: V.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id,
                            }),
                        e === Z.UX.SOUNDMOJI &&
                            w.default.track(F.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        g(r);
                },
                [eo, t, g],
            ),
            ef = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === G.ld.SOUNDMOJI ? null : e.type === G.ld.EMOJI ? (0, D.nY)(e.emoji) : e.name;
                es.current !== F.xAR && window.cancelAnimationFrame(es.current),
                    (es.current = window.requestAnimationFrame(() => {
                        E.kJ.setInspectedExpressionPosition(t, n, y.u.MOUSE_EVENT),
                            E.kJ.setSearchPlaceholder(r),
                            (es.current = F.xAR);
                    }));
            }, []),
            e_ = (0, u.e7)([T.qc], () => T.qc.hasHotspot(T.v6.FAVORITE_EMOJI_TOOLTIP), []),
            ep = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = m[t.sectionIndex],
                            o = () => {
                                var e;
                                null == (e = ea.current) || e.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, r.jsx)(
                            B.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: s,
                                surrogateCodePoint: el,
                                onInspect: ef,
                                onSelect: c,
                                onSelectSoundmoji: f,
                                getEmojiItemProps: O,
                                getEmojiRowProps: v,
                                isScrolling: A,
                                isUsingKeyboardNavigation: C,
                                rowIndex: e,
                                allowAnimatedEmoji: R,
                                showEmojiFavoriteTooltip: e_,
                                channelGuildId: P,
                                category: i.sectionId,
                                selectedItemClassName: W.__invalid_selectedItem,
                                channelId: x,
                                messageId: L,
                                isBurstReaction: M,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: o,
                            },
                            e,
                        );
                    }),
                [a, m, s, el, ef, c, f, O, v, A, C, R, e_, P, x, L, M, ea],
            );
        i.useEffect(
            () => () => {
                var e, t;
                return null == (t = ep.cache) || null == (e = t.clear) ? void 0 : e.call(t);
            },
            [ep],
        );
        let eh = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = m[e];
                        if (null == n) return;
                        let { guild: i, categoryId: a, type: s, sectionId: l } = n;
                        if (s === Z.En.SEARCH_RESULTS) return;
                        let c =
                                s === Z.En.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(U.Z, {
                                              guild: i,
                                              height: et,
                                              width: et,
                                          })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(j.Z, {
                                            categoryId: a,
                                            height: et,
                                            width: et,
                                            size: "custom",
                                        })
                                      : null,
                            u = null == i ? void 0 : i.name;
                        null != a && (u = (0, k.Y1)(a, null == i ? void 0 : i.name));
                        let d = K === e,
                            f = n.isNitroLocked,
                            p = f && !d,
                            h = f && d,
                            g =
                                s === Z.En.SOUNDMOJI
                                    ? (0, r.jsx)(_.P3F, {
                                          className: W.soundmojiViewMore,
                                          onClick: () => {
                                              (0, b.hr)(V.X1.SOUNDBOARD),
                                                  w.default.track(F.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: Y.intl.string(Y.t.rUEjBe),
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            I.Z,
                            {
                                className: o()(W.header, H, {
                                    [W.inactiveNitroHeader]: p,
                                    [W.activeNitroHeader]: h,
                                }),
                                icon: c,
                                isCollapsed: t.has(l),
                                onClick: () => ed(l, i),
                                trailing: g,
                                children: u,
                            },
                            l,
                        );
                    }),
                [m, t, ed, H, K],
            ),
            em = (0, S.B4)(),
            eg = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        a = eu(e),
                        s = ec(e);
                    return (0, r.jsx)(
                        "div",
                        {
                            className: o()(W.categorySection, {
                                [W.categorySectionLast]: e === m.length - 1,
                                [W.categorySectionCollapsed]: t.has(i.sectionId),
                                [W.categorySectionNitroLocked]: i.isNitroLocked,
                                [W.categorySectionNitroDivider]: a || s,
                            }),
                            children: n,
                        },
                        e,
                    );
                },
                [t, m, eu, ec],
            ),
            eE = i.useCallback(
                (e) =>
                    eu(e)
                        ? em
                            ? (0, r.jsx)(N.fi, {})
                            : (0, r.jsx)(N.ZP, { glowOpacity: en })
                        : ec(e)
                          ? (0, r.jsx)("div", { className: W.nitroBottomDivider })
                          : null,
                [en, eu, ec, em],
            ),
            eb = i.useCallback((e) => (eu(e) ? er : ec(e) ? ei : 0), [eu, ec]),
            ey = i.useCallback(
                (e) => {
                    var n;
                    return e === m.length - 1 || t.has(null == (n = m[e]) ? void 0 : n.sectionId) || eu(e) || ec(e)
                        ? 0
                        : ee;
                },
                [t, m, eu, ec],
            );
        return {
            listPadding: i.useMemo(() => ["" !== p ? J : q, X, Q, z], [p]),
            renderRow: ep,
            renderSection: eg,
            renderSectionHeader: eh,
            renderSectionFooter: eE,
            sectionMarginBottom: ey,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === Z.En.SEARCH_RESULTS ? 0 : $), [m]),
            sectionFooterHeight: eb,
        };
    },
    es = i.memo(function (e) {
        let {
                diversitySurrogate: t,
                emojiGrid: n,
                emojiListRef: a,
                emojiSize: o,
                onEmojiSelect: s,
                onSelectSoundmoji: l,
                setUpsellConfigs: d,
                sectionDescriptors: f,
                rowCountBySection: _,
                collapsedSections: y,
                setCollapsedSections: O,
                getEmojiItemProps: I,
                getEmojiRowProps: T,
                rowCount: S,
                isUsingKeyboardNavigation: N,
                channelGuildId: D,
                channelId: M,
                messageId: k,
                isBurstReaction: j,
                listHeaderClassName: U,
            } = e,
            B = i.useRef(!1),
            Z = E.kJ.useStore((e) => e.activeCategoryIndex),
            V = (0, b.Iu)((e) => e.searchQuery),
            z = R.Yk.useSetting(),
            q = (0, u.e7)([P.default], () => P.default.getCurrentUser()),
            X = (0, x.I5)(q),
            { location: Q } = (0, h.O)(),
            { analyticsLocations: J } = (0, m.ZP)(),
            [$, ee] = i.useState(0),
            [et, en] = i.useState(!1),
            [er, ei] = i.useState(0),
            {
                listPadding: es,
                renderRow: ec,
                renderSection: eu,
                renderSectionHeader: ed,
                renderSectionFooter: ef,
                sectionMarginBottom: e_,
                sectionHeaderHeight: ep,
                sectionFooterHeight: eh,
            } = eo({
                collapsedSections: y,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: o,
                onEmojiSelect: s,
                onSelectSoundmoji: l,
                searchQuery: V,
                sectionDescriptors: f,
                setCollapsedSections: O,
                getEmojiItemProps: I,
                getEmojiRowProps: T,
                isScrolling: B,
                isUsingKeyboardNavigation: N,
                allowAnimatedEmoji: z,
                channelGuildId: D,
                channelId: M,
                messageId: k,
                isBurstReaction: j,
                listHeaderClassName: U,
                activeSectionIndex: $,
                upsellGlowOpacity: er,
                emojiListRef: a,
            }),
            em = (e) => {
                ee(e), "" === V && E.kJ.setActiveCategoryIndex(e);
            },
            eg = (0, v.fe)({
                listRef: a,
                searchQuery: V,
                nitroLockedSectionStates: f,
                setUpsellGlowOpacity: ei,
            }),
            eE = (0, v.Qs)({
                activeCategoryIndex: Z,
                isScrolling: B,
                listRef: a,
                onActiveCategoryIndexChange: em,
                scrollOffset: K,
                searchQuery: V,
                disableForSearch: !1,
            });
        (0, v.Xs)({
            searchQuery: V,
            activeCategoryIndex: Z,
            listRef: a,
        });
        let eb = i.useCallback(
                (e) => {
                    eg(e),
                        eE(e),
                        el({
                            emojiListRef: a,
                            sectionDescriptors: f,
                            scrollTop: e,
                            searchQuery: V,
                            setShowUpsell: en,
                        });
                },
                [eg, eE, a, f, V, en],
            ),
            ey = f.length > 0;
        function eO() {
            let e = (0, L.Px)(H.PremiumTypes.TIER_2);
            return Y.intl.format(Y.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({
                        type: G.Bg.PREMIUM,
                        emojiDescriptor: void 0,
                    });
                },
            });
        }
        function ev() {
            var e;
            let t = (0, A.J0)();
            return null != (e = (0, L.fr)(t, H.Si.TIER_2)) ? e : Y.intl.string(Y.t.BmJkbd);
        }
        return (
            i.useEffect(() => {
                et &&
                    w.default.track(F.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: H.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: Q,
                        location_stack: J,
                    });
            }, [Q, J, et]),
            i.useEffect(() => {
                "" !== V && (ei(0), en(!1));
            }, [V]),
            (0, r.jsxs)("div", {
                className: W.listWrapper,
                children: [
                    ey
                        ? (0, r.jsx)(g.Z, {
                              role: "none presentation",
                              className: W.list,
                              listPadding: es,
                              onScroll: eb,
                              renderRow: ec,
                              renderSection: eu,
                              renderSectionHeader: ed,
                              renderSectionFooter: ef,
                              rowCount: S,
                              rowCountBySection: _,
                              rowHeight: ea(o),
                              sectionHeaderHeight: ep,
                              sectionMarginBottom: e_,
                              sectionFooterHeight: eh,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, r.jsx)(p.Z, {
                              message: Y.intl.string(Y.t.IxxiKF),
                              className: W.noSearchResultsContainer,
                          }),
                    X || c.tq
                        ? null
                        : (0, r.jsx)(C.p, {
                              showUpsell: et,
                              text: eO(),
                              button: ev(),
                              buttonAnalyticsObject: { section: F.jXE.EMOJI_PICKER_FLOATING_UPSELL },
                          }),
                ],
            })
        );
    }),
    el = l().throttle(ec, 300, {
        leading: !1,
        trailing: !0,
    });
function ec(e) {
    let { emojiListRef: t, sectionDescriptors: n, scrollTop: r, searchQuery: i, setShowUpsell: a } = e;
    a(
        (0, O.y)({
            listRef: t,
            searchQuery: i,
            nitroLockedSectionStates: n,
            scrollTop: r,
        }).areOnlyNitroLockedSectionsVisible,
    );
}
let eu = es;
