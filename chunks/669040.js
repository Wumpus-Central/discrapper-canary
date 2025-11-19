n.d(t, { Z: () => ed }), n(388685);
var r = n(54381),
    i = n(473749),
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
    C = n(597276),
    N = n(53691),
    R = n(75145),
    P = n(695346),
    D = n(594174),
    w = n(626135),
    L = n(176354),
    x = n(111361),
    M = n(74538),
    k = n(624138),
    j = n(543241),
    U = n(883661),
    G = n(880949),
    B = n(784222),
    Z = n(172800),
    F = n(149203),
    V = n(981631),
    H = n(957825),
    Y = n(474936),
    W = n(388032),
    K = n(4670);
let z = 0,
    q = 0,
    X = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    Q = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    J = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    $ = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ee = (0, k.Mg)(f.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    en = 16,
    er = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ei = 41,
    ea = 33,
    eo = (e) => e + 2 * er,
    es = (e) => {
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
                isUsingKeyboardNavigation: N,
                allowAnimatedEmoji: P,
                channelGuildId: D,
                channelId: x,
                messageId: M,
                isBurstReaction: k,
                listHeaderClassName: Y,
                activeSectionIndex: z,
                upsellGlowOpacity: er,
                emojiListRef: eo,
            } = e,
            es = (0, h.O)(),
            el = i.useRef(V.xAR),
            ec = i.useMemo(() => ("" !== n ? d.Z.convert.toCodePoint(n) : ""), [n]),
            eu = (0, C.Z)({ location: "PremiumBrandRefreshCategorySection" }),
            ed = i.useCallback(
                (e) => {
                    let t = m[e],
                        n = m[e + 1];
                    return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [m],
            ),
            ef = i.useCallback(
                (e) => {
                    if (e >= m.length - 1) return !1;
                    let t = m[e],
                        n = m[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [m],
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
                                tab: H.X1.EMOJI,
                                collapsed: !i,
                                guild_id: n.id,
                            }),
                        e === F.UX.SOUNDMOJI &&
                            w.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        g(r);
                },
                [es, t, g],
            ),
            ep = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === B.ld.SOUNDMOJI ? null : e.type === B.ld.EMOJI ? (0, L.nY)(e.emoji) : e.name;
                el.current !== V.xAR && window.cancelAnimationFrame(el.current),
                    (el.current = window.requestAnimationFrame(() => {
                        E.kJ.setInspectedExpressionPosition(t, n, y.u.MOUSE_EVENT),
                            E.kJ.setSearchPlaceholder(r),
                            (el.current = V.xAR);
                    }));
            }, []),
            eh = (0, u.e7)([T.qc], () => T.qc.hasHotspot(T.v6.FAVORITE_EMOJI_TOOLTIP), []),
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
                            Z.Z,
                            {
                                emojiDescriptors: n,
                                emojiSize: s,
                                surrogateCodePoint: ec,
                                onInspect: ep,
                                onSelect: c,
                                onSelectSoundmoji: f,
                                getEmojiItemProps: O,
                                getEmojiRowProps: v,
                                isScrolling: A,
                                isUsingKeyboardNavigation: N,
                                rowIndex: e,
                                allowAnimatedEmoji: P,
                                showEmojiFavoriteTooltip: eh,
                                channelGuildId: D,
                                category: i.sectionId,
                                selectedItemClassName: K.__invalid_selectedItem,
                                channelId: x,
                                messageId: M,
                                isBurstReaction: k,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: o,
                            },
                            e,
                        );
                    }),
                [a, m, s, ec, ep, c, f, O, v, A, N, P, eh, D, x, M, k, eo],
            );
        i.useEffect(
            () => () => {
                var e, t;
                return null == (t = em.cache) || null == (e = t.clear) ? void 0 : e.call(t);
            },
            [em],
        );
        let eg = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = m[e];
                        if (null == n) return;
                        let { guild: i, categoryId: a, type: s, sectionId: l } = n;
                        if (s === F.En.SEARCH_RESULTS) return;
                        let c =
                                s === F.En.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(G.Z, {
                                              guild: i,
                                              height: en,
                                              width: en,
                                          })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(U.Z, {
                                            categoryId: a,
                                            height: en,
                                            width: en,
                                            size: "custom",
                                        })
                                      : null,
                            u = null == i ? void 0 : i.name;
                        null != a && (u = (0, j.Y1)(a, null == i ? void 0 : i.name));
                        let d = z === e,
                            f = n.isNitroLocked,
                            p = f && !d,
                            h = f && d,
                            g =
                                s === F.En.SOUNDMOJI
                                    ? (0, r.jsx)(_.P3F, {
                                          className: K.soundmojiViewMore,
                                          onClick: () => {
                                              (0, b.hr)(H.X1.SOUNDBOARD),
                                                  w.default.track(V.rMx.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: W.intl.string(W.t.rUEjBe),
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            I.Z,
                            {
                                className: o()(K.header, Y, {
                                    [K.inactiveNitroHeader]: p,
                                    [K.activeNitroHeader]: h,
                                }),
                                icon: c,
                                isCollapsed: t.has(l),
                                onClick: () => e_(l, i),
                                trailing: g,
                                children: u,
                            },
                            l,
                        );
                    }),
                [m, t, e_, Y, z],
            ),
            eE = (0, S.B4)(),
            eb = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        a = ef(e),
                        s = ed(e);
                    return (0, r.jsx)(
                        "div",
                        {
                            className: o()(K.categorySection, {
                                [K.categorySectionLast]: e === m.length - 1,
                                [K.categorySectionCollapsed]: t.has(i.sectionId),
                                [K.categorySectionNitroLocked]: i.isNitroLocked,
                                [K.brandRefresh]: eu,
                                [K.categorySectionNitroDivider]: a || s,
                            }),
                            children: n,
                        },
                        e,
                    );
                },
                [t, m, ef, ed, eu],
            ),
            ey = i.useCallback(
                (e) =>
                    ef(e)
                        ? eE
                            ? (0, r.jsx)(R.fi, {})
                            : (0, r.jsx)(R.ZP, {
                                  glowOpacity: er,
                                  enableBrandRefresh: eu,
                              })
                        : ed(e)
                          ? (0, r.jsx)("div", { className: o()(K.nitroBottomDivider, { [K.brandRefresh]: eu }) })
                          : null,
                [er, ef, ed, eE, eu],
            ),
            eO = i.useCallback((e) => (ef(e) ? ei : ed(e) ? ea : 0), [ef, ed]),
            ev = i.useCallback(
                (e) => {
                    var n;
                    return e === m.length - 1 || t.has(null == (n = m[e]) ? void 0 : n.sectionId) || ef(e) || ed(e)
                        ? 0
                        : et;
                },
                [t, m, ef, ed],
            );
        return {
            listPadding: i.useMemo(() => ["" !== p ? $ : X, Q, J, q], [p]),
            renderRow: em,
            renderSection: eb,
            renderSectionHeader: eg,
            renderSectionFooter: ey,
            sectionMarginBottom: ev,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === F.En.SEARCH_RESULTS ? 0 : ee), [m]),
            sectionFooterHeight: eO,
        };
    },
    el = i.memo(function (e) {
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
                isUsingKeyboardNavigation: C,
                channelGuildId: R,
                channelId: L,
                messageId: k,
                isBurstReaction: j,
                listHeaderClassName: U,
            } = e,
            G = i.useRef(!1),
            Z = E.kJ.useStore((e) => e.activeCategoryIndex),
            F = (0, b.Iu)((e) => e.searchQuery),
            H = P.Yk.useSetting(),
            q = (0, u.e7)([D.default], () => D.default.getCurrentUser()),
            X = (0, x.I5)(q),
            { location: Q } = (0, h.O)(),
            { analyticsLocations: J } = (0, m.ZP)(),
            [$, ee] = i.useState(0),
            [et, en] = i.useState(!1),
            [er, ei] = i.useState(0),
            {
                listPadding: ea,
                renderRow: el,
                renderSection: eu,
                renderSectionHeader: ed,
                renderSectionFooter: ef,
                sectionMarginBottom: e_,
                sectionHeaderHeight: ep,
                sectionFooterHeight: eh,
            } = es({
                collapsedSections: y,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: o,
                onEmojiSelect: s,
                onSelectSoundmoji: l,
                searchQuery: F,
                sectionDescriptors: f,
                setCollapsedSections: O,
                getEmojiItemProps: I,
                getEmojiRowProps: T,
                isScrolling: G,
                isUsingKeyboardNavigation: C,
                allowAnimatedEmoji: H,
                channelGuildId: R,
                channelId: L,
                messageId: k,
                isBurstReaction: j,
                listHeaderClassName: U,
                activeSectionIndex: $,
                upsellGlowOpacity: er,
                emojiListRef: a,
            }),
            em = (e) => {
                ee(e), "" === F && E.kJ.setActiveCategoryIndex(e);
            },
            eg = (0, v.fe)({
                listRef: a,
                searchQuery: F,
                nitroLockedSectionStates: f,
                setUpsellGlowOpacity: ei,
            }),
            eE = (0, v.Qs)({
                activeCategoryIndex: Z,
                isScrolling: G,
                listRef: a,
                onActiveCategoryIndexChange: em,
                scrollOffset: z,
                searchQuery: F,
                disableForSearch: !1,
            });
        (0, v.Xs)({
            searchQuery: F,
            activeCategoryIndex: Z,
            listRef: a,
        });
        let eb = i.useCallback(
                (e) => {
                    eg(e),
                        eE(e),
                        ec({
                            emojiListRef: a,
                            sectionDescriptors: f,
                            scrollTop: e,
                            searchQuery: F,
                            setShowUpsell: en,
                        });
                },
                [eg, eE, a, f, F, en],
            ),
            ey = f.length > 0;
        function eO() {
            let e = (0, M.Px)(Y.PremiumTypes.TIER_2);
            return W.intl.format(W.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({
                        type: B.Bg.PREMIUM,
                        emojiDescriptor: void 0,
                    });
                },
            });
        }
        function ev() {
            var e;
            let t = (0, A.J0)();
            return null != (e = (0, M.fr)(t, Y.Si.TIER_2)) ? e : W.intl.string(W.t.BmJkbd);
        }
        return (
            i.useEffect(() => {
                et &&
                    w.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: Y.cd.EMOJI_PICKER_FLOATING_UPSELL,
                        location: Q,
                        location_stack: J,
                    });
            }, [Q, J, et]),
            i.useEffect(() => {
                "" !== F && (ei(0), en(!1));
            }, [F]),
            (0, r.jsxs)("div", {
                className: K.listWrapper,
                children: [
                    ey
                        ? (0, r.jsx)(g.Z, {
                              role: "none presentation",
                              className: K.list,
                              listPadding: ea,
                              onScroll: eb,
                              renderRow: el,
                              renderSection: eu,
                              renderSectionHeader: ed,
                              renderSectionFooter: ef,
                              rowCount: S,
                              rowCountBySection: _,
                              rowHeight: eo(o),
                              sectionHeaderHeight: ep,
                              sectionMarginBottom: e_,
                              sectionFooterHeight: eh,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, r.jsx)(p.Z, {
                              message: W.intl.string(W.t.IxxiKF),
                              className: K.noSearchResultsContainer,
                          }),
                    X || c.tq
                        ? null
                        : (0, r.jsx)(N.p, {
                              showUpsell: et,
                              text: eO(),
                              button: ev(),
                              buttonAnalyticsObject: { section: V.jXE.EMOJI_PICKER_FLOATING_UPSELL },
                          }),
                ],
            })
        );
    }),
    ec = l().throttle(eu, 300, {
        leading: !1,
        trailing: !0,
    });
function eu(e) {
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
let ed = el;
