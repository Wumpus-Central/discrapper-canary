"use strict";
n.d(t, { A: () => es });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(607399),
    u = n(311907),
    d = n(838677),
    h = n(319060),
    m = n(939249),
    p = n(537652),
    f = n(212245),
    g = n(793574),
    _ = n(688810),
    x = n(962125),
    A = n(850992),
    C = n(151271),
    E = n(60587),
    I = n(240864),
    v = n(887695),
    y = n(286509),
    S = n(450510),
    b = n(526292),
    N = n(89366),
    j = n(202639),
    T = n(414872),
    R = n(400669),
    w = n(253932),
    L = n(909536),
    M = n(287809),
    O = n(954571),
    k = n(690521),
    P = n(474090),
    D = n(927578),
    U = n(240248),
    V = n(822123),
    G = n(535622),
    F = n(724511),
    B = n(484333),
    H = n(923861),
    W = n(732139),
    K = n(652215),
    z = n(698279),
    Z = n(788868),
    q = n(985018),
    Y = n(98090);
let J = (0, U.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    $ = (0, U.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    X = (0, U.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    Q = (0, U.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ee = (0, U.xI)(h.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, U.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    en = (0, U.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ei = l.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: s,
                emojiGrid: a,
                emojiListRef: h,
                emojiSize: I,
                onEmojiSelect: U,
                onSelectSoundmoji: ei,
                setUpsellConfigs: es,
                sectionDescriptors: er,
                rowCountBySection: ea,
                collapsedSections: eo,
                setCollapsedSections: ec,
                getEmojiItemProps: eu,
                getEmojiRowProps: ed,
                rowCount: eh,
                isUsingKeyboardNavigation: em,
                channelGuildId: ep,
                channelId: ef,
                messageId: eg,
                isBurstReaction: e_,
                listHeaderClassName: ex,
            } = e,
            eA = l.useRef(!1),
            eC = A.Om.useStore((e) => e.activeCategoryIndex),
            eE = (0, C.RQ)((e) => e.searchQuery),
            eI = w.Sf.useSetting(),
            ev = (0, u.bG)([M.default], () => M.default.getCurrentUser()),
            ey = (0, P.ki)(ev),
            eS = (0, L.St)("emoji_picker_floating_upsell"),
            { location: eb } = (0, f.p)(),
            { analyticsLocations: eN } = (0, _.Ay)(),
            [ej, eT] = l.useState(0),
            [eR, ew] = l.useState(!1),
            {
                listPadding: eL,
                renderRow: eM,
                renderSection: eO,
                renderSectionHeader: ek,
                renderSectionFooter: eP,
                sectionMarginBottom: eD,
                sectionHeaderHeight: eU,
                sectionFooterHeight: eV,
            } = ((e) => {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: s,
                        emojiSize: a,
                        onEmojiSelect: c,
                        onSelectSoundmoji: h,
                        searchQuery: p,
                        sectionDescriptors: g,
                        setCollapsedSections: _,
                        getEmojiItemProps: x,
                        getEmojiRowProps: I,
                        isScrolling: v,
                        isUsingKeyboardNavigation: N,
                        allowAnimatedEmoji: j,
                        channelGuildId: R,
                        channelId: w,
                        messageId: L,
                        isBurstReaction: M,
                        listHeaderClassName: P,
                        activeSectionIndex: D,
                        emojiListRef: U,
                    } = e,
                    Z = (0, f.p)(),
                    en = l.useRef(K.An1),
                    ei = l.useMemo(() => ("" !== n ? d.A.convert.toCodePoint(n) : ""), [n]),
                    el = l.useCallback(
                        (e) => {
                            let t = g[e],
                                n = g[e + 1];
                            return e >= g.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [g],
                    ),
                    es = l.useCallback(
                        (e) => {
                            if (e >= g.length - 1) return !1;
                            let t = g[e],
                                n = g[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [g],
                    ),
                    er = l.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                l = t.has(e);
                            l ? i.delete(e) : i.add(e),
                                null != n &&
                                    O.default.track(K.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: Z.location,
                                        tab: z.kx.EMOJI,
                                        collapsed: !l,
                                        guild_id: n.id,
                                    }),
                                e === W.R2.SOUNDMOJI &&
                                    O.default.track(K.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !l }),
                                _(i);
                        },
                        [Z, t, _],
                    ),
                    ea = l.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === B.bm.SOUNDMOJI ? null : e.type === B.bm.EMOJI ? (0, k.N)(e.emoji) : e.name;
                        en.current !== K.An1 && window.cancelAnimationFrame(en.current),
                            (en.current = window.requestAnimationFrame(() => {
                                A.Om.setInspectedExpressionPosition(t, n, E.t.MOUSE_EVENT),
                                    A.Om.setSearchPlaceholder(i),
                                    (en.current = K.An1);
                            }));
                    }, []),
                    eo = (0, u.bG)([S.HP], () => S.HP.hasHotspot(S._2.FAVORITE_EMOJI_TOOLTIP), []),
                    ec = l.useMemo(
                        () =>
                            o().memoize((e, t) => {
                                let n = s[e],
                                    l = g[t.sectionIndex];
                                return (0, i.jsx)(
                                    H.A,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: a,
                                        surrogateCodePoint: ei,
                                        onInspect: ea,
                                        onSelect: c,
                                        onSelectSoundmoji: h,
                                        getEmojiItemProps: x,
                                        getEmojiRowProps: I,
                                        isScrolling: v,
                                        isUsingKeyboardNavigation: N,
                                        rowIndex: e,
                                        allowAnimatedEmoji: j,
                                        showEmojiFavoriteTooltip: eo,
                                        channelGuildId: R,
                                        category: l.sectionId,
                                        selectedItemClassName: Y.__invalid_selectedItem,
                                        channelId: w,
                                        messageId: L,
                                        isBurstReaction: M,
                                        inNitroLockedSection: l.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: () => {
                                            U.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [s, g, a, ei, ea, c, h, x, I, v, N, j, eo, R, w, L, M, U],
                    );
                l.useEffect(() => () => ec.cache?.clear?.(), [ec]);
                let eu = l.useMemo(
                        () =>
                            o().memoize((e) => {
                                let n = g[e];
                                if (null == n) return;
                                let { guild: l, categoryId: s, type: a, sectionId: o } = n;
                                if (a === W.s.SEARCH_RESULTS) return;
                                let c =
                                        a === W.s.GUILD
                                            ? null != l
                                                ? (0, i.jsx)(F.A, { guild: l, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, i.jsx)(G.A, {
                                                    categoryId: s,
                                                    height: 16,
                                                    width: 16,
                                                    size: "custom",
                                                })
                                              : null,
                                    u = l?.name;
                                null != s && (u = (0, V.Nu)(s, l?.name));
                                let d = D === e,
                                    h = n.isNitroLocked,
                                    p = h && !d,
                                    f = h && d,
                                    _ =
                                        a === W.s.SOUNDMOJI
                                            ? (0, i.jsx)(m.D, {
                                                  className: Y.f3,
                                                  onClick: () => {
                                                      (0, C.U)(z.kx.SOUNDBOARD),
                                                          O.default.track(K.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: q.intl.string(q.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, i.jsx)(
                                    y.A,
                                    {
                                        className: r()(Y.wx, P, { [Y.RA]: p, [Y.sp]: f }),
                                        icon: c,
                                        isCollapsed: t.has(o),
                                        onClick: () => er(o, l),
                                        trailing: _,
                                        children: u,
                                    },
                                    o,
                                );
                            }),
                        [g, t, er, P, D],
                    ),
                    ed = (0, b.k0)(),
                    eh = l.useCallback(
                        (e, n) => {
                            let l = g[e],
                                s = es(e),
                                a = el(e);
                            return (0, i.jsx)(
                                "div",
                                {
                                    className: r()(Y.Wy, {
                                        [Y.YD]: e === g.length - 1,
                                        [Y.jl]: t.has(l.sectionId),
                                        [Y.cW]: l.isNitroLocked,
                                        [Y.T5]: s || a,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, g, es, el],
                    ),
                    em = l.useCallback(
                        (e) =>
                            es(e)
                                ? ed
                                    ? (0, i.jsx)(T.ap, {})
                                    : (0, i.jsx)(T.Ay, {})
                                : el(e)
                                  ? (0, i.jsx)("div", { className: Y.pQ })
                                  : null,
                        [es, el, ed],
                    ),
                    ep = l.useCallback((e) => (es(e) ? 41 : 33 * !!el(e)), [es, el]),
                    ef = l.useCallback(
                        (e) => (e === g.length - 1 || t.has(g[e]?.sectionId) || es(e) || el(e) ? 0 : et),
                        [t, g, es, el],
                    );
                return {
                    listPadding: l.useMemo(() => ["" !== p ? Q : J, $, X, 0], [p]),
                    renderRow: ec,
                    renderSection: eh,
                    renderSectionHeader: eu,
                    renderSectionFooter: em,
                    sectionMarginBottom: ef,
                    sectionHeaderHeight: l.useCallback((e) => (g[e].type === W.s.SEARCH_RESULTS ? 0 : ee), [g]),
                    sectionFooterHeight: ep,
                };
            })({
                collapsedSections: eo,
                diversitySurrogate: s,
                emojiGrid: a,
                emojiSize: I,
                onEmojiSelect: U,
                onSelectSoundmoji: ei,
                searchQuery: eE,
                sectionDescriptors: er,
                setCollapsedSections: ec,
                getEmojiItemProps: eu,
                getEmojiRowProps: ed,
                isScrolling: eA,
                isUsingKeyboardNavigation: em,
                allowAnimatedEmoji: eI,
                channelGuildId: ep,
                channelId: ef,
                messageId: eg,
                isBurstReaction: e_,
                listHeaderClassName: ex,
                activeSectionIndex: ej,
                emojiListRef: h,
            }),
            eG = (0, v.Fk)({
                activeCategoryIndex: eC,
                isScrolling: eA,
                listRef: h,
                onActiveCategoryIndexChange: (e) => {
                    eT(e), "" === eE && A.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: eE,
                disableForSearch: !1,
            });
        (0, v.FV)({ searchQuery: eE, activeCategoryIndex: eC, listRef: h });
        let eF = l.useCallback(
                (e) => {
                    eG(e),
                        el({
                            emojiListRef: h,
                            sectionDescriptors: er,
                            scrollTop: e,
                            searchQuery: eE,
                            setShowUpsell: ew,
                        });
                },
                [eG, h, er, eE, ew],
            ),
            eB = er.length > 0;
        return (
            l.useEffect(() => {
                eR &&
                    O.default.track(K.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: Z.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: eb,
                        location_stack: eN,
                    });
            }, [eb, eN, eR]),
            l.useEffect(() => {
                "" !== eE && ew(!1);
            }, [eE]),
            (0, i.jsxs)("div", {
                className: Y.AD,
                children: [
                    eB
                        ? (0, i.jsx)(x.A, {
                              role: "none presentation",
                              className: Y.p_,
                              listPadding: eL,
                              onScroll: eF,
                              renderRow: eM,
                              renderSection: eO,
                              renderSectionHeader: ek,
                              renderSectionFooter: eP,
                              rowCount: eh,
                              rowCountBySection: ea,
                              rowHeight: I + 2 * en,
                              sectionHeaderHeight: eU,
                              sectionMarginBottom: eD,
                              sectionFooterHeight: eV,
                              stickyHeaders: !0,
                              ref: h,
                          })
                        : (0, i.jsx)(p.A, { message: q.intl.string(q.t.IxxiKF), className: Y.BZ }),
                    ey || c.Fr
                        ? null
                        : (0, i.jsx)(j.d, {
                              showUpsell: eR,
                              text:
                                  ((t = (0, D.Dd)(Z.PremiumTypes.TIER_2)),
                                  q.intl.format(q.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          es({ type: B.a2.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, N.qD)()), (0, D.LE)(n, Z.pe.TIER_2) ?? q.intl.string(q.t.BmJkbd)),
                              buttonAnalyticsObject: { section: K.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: eS
                                  ? (0, i.jsx)(R.l, {
                                        size: "sm",
                                        className: Y.ij,
                                        location: g.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    el = o().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: l, setShowUpsell: s } = e;
            s(
                (0, I.s)({ listRef: t, searchQuery: l, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    ),
    es = ei;
