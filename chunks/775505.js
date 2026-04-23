"use strict";
n.d(t, { A: () => es });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(607399),
    c = n(311907),
    d = n(838677),
    _ = n(319060),
    f = n(939249),
    p = n(537652),
    h = n(212245),
    E = n(793574),
    m = n(688810),
    g = n(962125),
    A = n(850992),
    I = n(151271),
    T = n(60587),
    S = n(240864),
    y = n(887695),
    N = n(286509),
    v = n(450510),
    C = n(526292),
    O = n(89366),
    R = n(202639),
    b = n(414872),
    D = n(400669),
    L = n(253932),
    w = n(909536),
    M = n(287809),
    P = n(954571),
    x = n(690521),
    k = n(474090),
    U = n(927578),
    G = n(240248),
    F = n(822123),
    V = n(535622),
    B = n(724511),
    H = n(484333),
    j = n(923861),
    Y = n(732139),
    W = n(652215),
    K = n(698279),
    $ = n(788868),
    z = n(985018),
    q = n(98090);
let X = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    Q = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    Z = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    J = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ee = (0, G.xI)(_.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    en = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    er = i.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: s,
                emojiGrid: o,
                emojiListRef: _,
                emojiSize: S,
                onEmojiSelect: G,
                onSelectSoundmoji: er,
                setUpsellConfigs: es,
                sectionDescriptors: ea,
                rowCountBySection: eo,
                collapsedSections: el,
                setCollapsedSections: eu,
                getEmojiItemProps: ec,
                getEmojiRowProps: ed,
                rowCount: e_,
                isUsingKeyboardNavigation: ef,
                channelGuildId: ep,
                channelId: eh,
                messageId: eE,
                isBurstReaction: em,
                listHeaderClassName: eg,
            } = e,
            eA = i.useRef(!1),
            eI = A.Om.useStore((e) => e.activeCategoryIndex),
            eT = (0, I.RQ)((e) => e.searchQuery),
            eS = L.Sf.useSetting(),
            ey = (0, c.bG)([M.default], () => M.default.getCurrentUser()),
            eN = (0, k.ki)(ey),
            ev = (0, w.St)("emoji_picker_floating_upsell"),
            { location: eC } = (0, h.p)(),
            { analyticsLocations: eO } = (0, m.Ay)(),
            [eR, eb] = i.useState(0),
            [eD, eL] = i.useState(!1),
            {
                listPadding: ew,
                renderRow: eM,
                renderSection: eP,
                renderSectionHeader: ex,
                renderSectionFooter: ek,
                sectionMarginBottom: eU,
                sectionHeaderHeight: eG,
                sectionFooterHeight: eF,
            } = ((e) => {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: s,
                        emojiSize: o,
                        onEmojiSelect: u,
                        onSelectSoundmoji: _,
                        searchQuery: p,
                        sectionDescriptors: E,
                        setCollapsedSections: m,
                        getEmojiItemProps: g,
                        getEmojiRowProps: S,
                        isScrolling: y,
                        isUsingKeyboardNavigation: O,
                        allowAnimatedEmoji: R,
                        channelGuildId: D,
                        channelId: L,
                        messageId: w,
                        isBurstReaction: M,
                        listHeaderClassName: k,
                        activeSectionIndex: U,
                        emojiListRef: G,
                    } = e,
                    $ = (0, h.p)(),
                    en = i.useRef(W.An1),
                    er = i.useMemo(() => ("" !== n ? d.A.convert.toCodePoint(n) : ""), [n]),
                    ei = i.useCallback(
                        (e) => {
                            let t = E[e],
                                n = E[e + 1];
                            return e >= E.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [E],
                    ),
                    es = i.useCallback(
                        (e) => {
                            if (e >= E.length - 1) return !1;
                            let t = E[e],
                                n = E[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [E],
                    ),
                    ea = i.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                r = new Set(t),
                                i = t.has(e);
                            i ? r.delete(e) : r.add(e),
                                null != n &&
                                    P.default.track(W.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: $.location,
                                        tab: K.kx.EMOJI,
                                        collapsed: !i,
                                        guild_id: n.id,
                                    }),
                                e === Y.R2.SOUNDMOJI &&
                                    P.default.track(W.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                                m(r);
                        },
                        [$, t, m],
                    ),
                    eo = i.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            r = e.type === H.bm.SOUNDMOJI ? null : e.type === H.bm.EMOJI ? (0, x.N)(e.emoji) : e.name;
                        en.current !== W.An1 && window.cancelAnimationFrame(en.current),
                            (en.current = window.requestAnimationFrame(() => {
                                A.Om.setInspectedExpressionPosition(t, n, T.t.MOUSE_EVENT),
                                    A.Om.setSearchPlaceholder(r),
                                    (en.current = W.An1);
                            }));
                    }, []),
                    el = (0, c.bG)([v.HP], () => v.HP.hasHotspot(v._2.FAVORITE_EMOJI_TOOLTIP), []),
                    eu = i.useMemo(
                        () =>
                            l().memoize((e, t) => {
                                let n = s[e],
                                    i = E[t.sectionIndex];
                                return (0, r.jsx)(
                                    j.A,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: o,
                                        surrogateCodePoint: er,
                                        onInspect: eo,
                                        onSelect: u,
                                        onSelectSoundmoji: _,
                                        getEmojiItemProps: g,
                                        getEmojiRowProps: S,
                                        isScrolling: y,
                                        isUsingKeyboardNavigation: O,
                                        rowIndex: e,
                                        allowAnimatedEmoji: R,
                                        showEmojiFavoriteTooltip: el,
                                        channelGuildId: D,
                                        category: i.sectionId,
                                        selectedItemClassName: q.__invalid_selectedItem,
                                        channelId: L,
                                        messageId: w,
                                        isBurstReaction: M,
                                        inNitroLockedSection: i.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: () => {
                                            G.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [s, E, o, er, eo, u, _, g, S, y, O, R, el, D, L, w, M, G],
                    );
                i.useEffect(() => () => eu.cache?.clear?.(), [eu]);
                let ec = i.useMemo(
                        () =>
                            l().memoize((e) => {
                                let n = E[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: o, sectionId: l } = n;
                                if (o === Y.s.SEARCH_RESULTS) return;
                                let u =
                                        o === Y.s.GUILD
                                            ? null != i
                                                ? (0, r.jsx)(B.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, r.jsx)(V.A, {
                                                    categoryId: s,
                                                    height: 16,
                                                    width: 16,
                                                    size: "custom",
                                                })
                                              : null,
                                    c = i?.name;
                                null != s && (c = (0, F.Nu)(s, i?.name));
                                let d = U === e,
                                    _ = n.isNitroLocked,
                                    p = _ && !d,
                                    h = _ && d,
                                    m =
                                        o === Y.s.SOUNDMOJI
                                            ? (0, r.jsx)(f.D, {
                                                  className: q.f3,
                                                  onClick: () => {
                                                      (0, I.U)(K.kx.SOUNDBOARD),
                                                          P.default.track(W.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: z.intl.string(z.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, r.jsx)(
                                    N.A,
                                    {
                                        className: a()(q.wx, k, { [q.RA]: p, [q.sp]: h }),
                                        icon: u,
                                        isCollapsed: t.has(l),
                                        onClick: () => ea(l, i),
                                        trailing: m,
                                        children: c,
                                    },
                                    l,
                                );
                            }),
                        [E, t, ea, k, U],
                    ),
                    ed = (0, C.k0)(),
                    e_ = i.useCallback(
                        (e, n) => {
                            let i = E[e],
                                s = es(e),
                                o = ei(e);
                            return (0, r.jsx)(
                                "div",
                                {
                                    className: a()(q.Wy, {
                                        [q.YD]: e === E.length - 1,
                                        [q.jl]: t.has(i.sectionId),
                                        [q.cW]: i.isNitroLocked,
                                        [q.T5]: s || o,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, E, es, ei],
                    ),
                    ef = i.useCallback(
                        (e) =>
                            es(e)
                                ? ed
                                    ? (0, r.jsx)(b.ap, {})
                                    : (0, r.jsx)(b.Ay, {})
                                : ei(e)
                                  ? (0, r.jsx)("div", { className: q.pQ })
                                  : null,
                        [es, ei, ed],
                    ),
                    ep = i.useCallback((e) => (es(e) ? 41 : 33 * !!ei(e)), [es, ei]),
                    eh = i.useCallback(
                        (e) => (e === E.length - 1 || t.has(E[e]?.sectionId) || es(e) || ei(e) ? 0 : et),
                        [t, E, es, ei],
                    );
                return {
                    listPadding: i.useMemo(() => ["" !== p ? J : X, Q, Z, 0], [p]),
                    renderRow: eu,
                    renderSection: e_,
                    renderSectionHeader: ec,
                    renderSectionFooter: ef,
                    sectionMarginBottom: eh,
                    sectionHeaderHeight: i.useCallback((e) => (E[e].type === Y.s.SEARCH_RESULTS ? 0 : ee), [E]),
                    sectionFooterHeight: ep,
                };
            })({
                collapsedSections: el,
                diversitySurrogate: s,
                emojiGrid: o,
                emojiSize: S,
                onEmojiSelect: G,
                onSelectSoundmoji: er,
                searchQuery: eT,
                sectionDescriptors: ea,
                setCollapsedSections: eu,
                getEmojiItemProps: ec,
                getEmojiRowProps: ed,
                isScrolling: eA,
                isUsingKeyboardNavigation: ef,
                allowAnimatedEmoji: eS,
                channelGuildId: ep,
                channelId: eh,
                messageId: eE,
                isBurstReaction: em,
                listHeaderClassName: eg,
                activeSectionIndex: eR,
                emojiListRef: _,
            }),
            eV = (0, y.Fk)({
                activeCategoryIndex: eI,
                isScrolling: eA,
                listRef: _,
                onActiveCategoryIndexChange: (e) => {
                    eb(e), "" === eT && A.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: eT,
                disableForSearch: !1,
            });
        (0, y.FV)({ searchQuery: eT, activeCategoryIndex: eI, listRef: _ });
        let eB = i.useCallback(
                (e) => {
                    eV(e),
                        ei({
                            emojiListRef: _,
                            sectionDescriptors: ea,
                            scrollTop: e,
                            searchQuery: eT,
                            setShowUpsell: eL,
                        });
                },
                [eV, _, ea, eT, eL],
            ),
            eH = ea.length > 0;
        return (
            i.useEffect(() => {
                eD &&
                    P.default.track(W.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: $.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: eC,
                        location_stack: eO,
                    });
            }, [eC, eO, eD]),
            i.useEffect(() => {
                "" !== eT && eL(!1);
            }, [eT]),
            (0, r.jsxs)("div", {
                className: q.AD,
                children: [
                    eH
                        ? (0, r.jsx)(g.A, {
                              role: "none presentation",
                              className: q.p_,
                              listPadding: ew,
                              onScroll: eB,
                              renderRow: eM,
                              renderSection: eP,
                              renderSectionHeader: ex,
                              renderSectionFooter: ek,
                              rowCount: e_,
                              rowCountBySection: eo,
                              rowHeight: S + 2 * en,
                              sectionHeaderHeight: eG,
                              sectionMarginBottom: eU,
                              sectionFooterHeight: eF,
                              stickyHeaders: !0,
                              ref: _,
                          })
                        : (0, r.jsx)(p.A, { message: z.intl.string(z.t.IxxiKF), className: q.BZ }),
                    eN || u.Fr
                        ? null
                        : (0, r.jsx)(R.d, {
                              showUpsell: eD,
                              text:
                                  ((t = (0, U.Dd)($.PremiumTypes.TIER_2)),
                                  z.intl.format(z.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          es({ type: H.a2.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, O.qD)()), (0, U.LE)(n, $.pe.TIER_2) ?? z.intl.string(z.t.BmJkbd)),
                              buttonAnalyticsObject: { section: W.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: ev
                                  ? (0, r.jsx)(D.l, {
                                        size: "sm",
                                        className: q.ij,
                                        location: E.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    ei = l().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: r, searchQuery: i, setShowUpsell: s } = e;
            s(
                (0, S.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: r })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    ),
    es = er;
