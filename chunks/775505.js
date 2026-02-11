"use strict";
n.d(t, { A: () => e_ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(607399),
    c = n(311907),
    d = n(838677),
    _ = n(319060),
    f = n(397927),
    h = n(537652),
    p = n(212245),
    g = n(688810),
    E = n(962125),
    A = n(850992),
    I = n(151271),
    T = n(60587),
    y = n(240864),
    S = n(887695),
    v = n(286509),
    C = n(450510),
    b = n(526292),
    N = n(89366),
    R = n(756349),
    O = n(202639),
    D = n(414872),
    L = n(253932),
    w = n(287809),
    x = n(954571),
    P = n(690521),
    M = n(474090),
    k = n(927578),
    U = n(240248),
    G = n(822123),
    F = n(535622),
    V = n(724511),
    B = n(484333),
    j = n(923861),
    H = n(732139),
    Y = n(652215),
    W = n(698279),
    K = n(788868),
    $ = n(985018),
    z = n(586305);
let q = 0,
    X = 0,
    Z = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    Q = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    J = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    ee = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    et = (0, U.xI)(_.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    en = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    er = 16,
    ei = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ea = 41,
    es = 33,
    eo = (e) => e + 2 * ei,
    el = (e) => {
        let {
                collapsedSections: t,
                diversitySurrogate: n,
                emojiGrid: a,
                emojiSize: o,
                onEmojiSelect: u,
                onSelectSoundmoji: _,
                searchQuery: h,
                sectionDescriptors: g,
                setCollapsedSections: E,
                getEmojiItemProps: y,
                getEmojiRowProps: S,
                isScrolling: N,
                isUsingKeyboardNavigation: O,
                allowAnimatedEmoji: L,
                channelGuildId: w,
                channelId: M,
                messageId: k,
                isBurstReaction: U,
                listHeaderClassName: K,
                activeSectionIndex: q,
                upsellGlowOpacity: ei,
                emojiListRef: eo,
            } = e,
            el = (0, p.p)(),
            eu = i.useRef(Y.An1),
            ec = i.useMemo(() => ("" !== n ? d.A.convert.toCodePoint(n) : ""), [n]),
            ed = (0, R.A)({ location: "PremiumBrandRefreshCategorySection" }),
            e_ = i.useCallback(
                (e) => {
                    let t = g[e],
                        n = g[e + 1];
                    return e >= g.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [g],
            ),
            ef = i.useCallback(
                (e) => {
                    if (e >= g.length - 1) return !1;
                    let t = g[e],
                        n = g[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [g],
            ),
            eh = i.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            x.default.track(Y.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: el.location,
                                tab: W.kx.EMOJI,
                                collapsed: !i,
                                guild_id: n.id,
                            }),
                        e === H.R2.SOUNDMOJI &&
                            x.default.track(Y.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        E(r);
                },
                [el, t, E],
            ),
            ep = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === B.bm.SOUNDMOJI ? null : e.type === B.bm.EMOJI ? (0, P.N)(e.emoji) : e.name;
                eu.current !== Y.An1 && window.cancelAnimationFrame(eu.current),
                    (eu.current = window.requestAnimationFrame(() => {
                        A.Om.setInspectedExpressionPosition(t, n, T.t.MOUSE_EVENT),
                            A.Om.setSearchPlaceholder(r),
                            (eu.current = Y.An1);
                    }));
            }, []),
            em = (0, c.bG)([C.HP], () => C.HP.hasHotspot(C._2.FAVORITE_EMOJI_TOOLTIP), []),
            eg = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = g[t.sectionIndex],
                            s = () => {
                                eo.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, r.jsx)(
                            j.A,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: ec,
                                onInspect: ep,
                                onSelect: u,
                                onSelectSoundmoji: _,
                                getEmojiItemProps: y,
                                getEmojiRowProps: S,
                                isScrolling: N,
                                isUsingKeyboardNavigation: O,
                                rowIndex: e,
                                allowAnimatedEmoji: L,
                                showEmojiFavoriteTooltip: em,
                                channelGuildId: w,
                                category: i.sectionId,
                                selectedItemClassName: z.__invalid_selectedItem,
                                channelId: M,
                                messageId: k,
                                isBurstReaction: U,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: s,
                            },
                            e,
                        );
                    }),
                [a, g, o, ec, ep, u, _, y, S, N, O, L, em, w, M, k, U, eo],
            );
        i.useEffect(() => () => eg.cache?.clear?.(), [eg]);
        let eE = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = g[e];
                        if (null == n) return;
                        let { guild: i, categoryId: a, type: o, sectionId: l } = n;
                        if (o === H.s.SEARCH_RESULTS) return;
                        let u =
                                o === H.s.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(V.A, { guild: i, height: er, width: er })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(F.A, { categoryId: a, height: er, width: er, size: "custom" })
                                      : null,
                            c = i?.name;
                        null != a && (c = (0, G.Nu)(a, i?.name));
                        let d = q === e,
                            _ = n.isNitroLocked,
                            h = _ && !d,
                            p = _ && d,
                            E =
                                o === H.s.SOUNDMOJI
                                    ? (0, r.jsx)(f.DUT, {
                                          className: z.f3,
                                          onClick: () => {
                                              (0, I.U)(W.kx.SOUNDBOARD),
                                                  x.default.track(Y.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: $.intl.string($.t.rUEjBe),
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            v.A,
                            {
                                className: s()(z.wx, K, { [z.RA]: h, [z.sp]: p }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => eh(l, i),
                                trailing: E,
                                children: c,
                            },
                            l,
                        );
                    }),
                [g, t, eh, K, q],
            ),
            eA = (0, b.k0)(),
            eI = i.useCallback(
                (e, n) => {
                    let i = g[e],
                        a = ef(e),
                        o = e_(e);
                    return (0, r.jsx)(
                        "div",
                        {
                            className: s()(z.Wy, {
                                [z.YD]: e === g.length - 1,
                                [z.jl]: t.has(i.sectionId),
                                [z.cW]: i.isNitroLocked,
                                [z.N4]: ed,
                                [z.T5]: a || o,
                            }),
                            children: n,
                        },
                        e,
                    );
                },
                [t, g, ef, e_, ed],
            ),
            eT = i.useCallback(
                (e) =>
                    ef(e)
                        ? eA
                            ? (0, r.jsx)(D.ap, {})
                            : (0, r.jsx)(D.Ay, { glowOpacity: ei, enableBrandRefresh: ed })
                        : e_(e)
                          ? (0, r.jsx)("div", { className: s()(z.pQ, { [z.N4]: ed }) })
                          : null,
                [ei, ef, e_, eA, ed],
            ),
            ey = i.useCallback((e) => (ef(e) ? ea : e_(e) ? es : 0), [ef, e_]),
            eS = i.useCallback(
                (e) => (e === g.length - 1 || t.has(g[e]?.sectionId) || ef(e) || e_(e) ? 0 : en),
                [t, g, ef, e_],
            );
        return {
            listPadding: i.useMemo(() => ["" !== h ? ee : Z, Q, J, X], [h]),
            renderRow: eg,
            renderSection: eI,
            renderSectionHeader: eE,
            renderSectionFooter: eT,
            sectionMarginBottom: eS,
            sectionHeaderHeight: i.useCallback((e) => (g[e].type === H.s.SEARCH_RESULTS ? 0 : et), [g]),
            sectionFooterHeight: ey,
        };
    },
    eu = i.memo(function (e) {
        let {
                diversitySurrogate: t,
                emojiGrid: n,
                emojiListRef: a,
                emojiSize: s,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                setUpsellConfigs: d,
                sectionDescriptors: _,
                rowCountBySection: f,
                collapsedSections: T,
                setCollapsedSections: y,
                getEmojiItemProps: v,
                getEmojiRowProps: C,
                rowCount: b,
                isUsingKeyboardNavigation: R,
                channelGuildId: D,
                channelId: P,
                messageId: U,
                isBurstReaction: G,
                listHeaderClassName: F,
            } = e,
            V = i.useRef(!1),
            j = A.Om.useStore((e) => e.activeCategoryIndex),
            H = (0, I.RQ)((e) => e.searchQuery),
            W = L.Sf.useSetting(),
            X = (0, c.bG)([w.default], () => w.default.getCurrentUser()),
            Z = (0, M.ki)(X),
            { location: Q } = (0, p.p)(),
            { analyticsLocations: J } = (0, g.Ay)(),
            [ee, et] = i.useState(0),
            [en, er] = i.useState(!1),
            [ei, ea] = i.useState(0),
            {
                listPadding: es,
                renderRow: eu,
                renderSection: ed,
                renderSectionHeader: e_,
                renderSectionFooter: ef,
                sectionMarginBottom: eh,
                sectionHeaderHeight: ep,
                sectionFooterHeight: em,
            } = el({
                collapsedSections: T,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                searchQuery: H,
                sectionDescriptors: _,
                setCollapsedSections: y,
                getEmojiItemProps: v,
                getEmojiRowProps: C,
                isScrolling: V,
                isUsingKeyboardNavigation: R,
                allowAnimatedEmoji: W,
                channelGuildId: D,
                channelId: P,
                messageId: U,
                isBurstReaction: G,
                listHeaderClassName: F,
                activeSectionIndex: ee,
                upsellGlowOpacity: ei,
                emojiListRef: a,
            }),
            eg = (e) => {
                et(e), "" === H && A.Om.setActiveCategoryIndex(e);
            },
            eE = (0, S.ci)({ listRef: a, searchQuery: H, nitroLockedSectionStates: _, setUpsellGlowOpacity: ea }),
            eA = (0, S.Fk)({
                activeCategoryIndex: j,
                isScrolling: V,
                listRef: a,
                onActiveCategoryIndexChange: eg,
                scrollOffset: q,
                searchQuery: H,
                disableForSearch: !1,
            });
        (0, S.FV)({ searchQuery: H, activeCategoryIndex: j, listRef: a });
        let eI = i.useCallback(
                (e) => {
                    eE(e),
                        eA(e),
                        ec({ emojiListRef: a, sectionDescriptors: _, scrollTop: e, searchQuery: H, setShowUpsell: er });
                },
                [eE, eA, a, _, H, er],
            ),
            eT = _.length > 0;
        function ey() {
            let e = (0, k.Dd)(K.PremiumTypes.TIER_2);
            return $.intl.format($.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({ type: B.a2.PREMIUM, emojiDescriptor: void 0 });
                },
            });
        }
        function eS() {
            let e = (0, N.qD)();
            return (0, k.LE)(e, K.pe.TIER_2) ?? $.intl.string($.t.BmJkbd);
        }
        return (
            i.useEffect(() => {
                en &&
                    x.default.track(Y.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: K.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: Q,
                        location_stack: J,
                    });
            }, [Q, J, en]),
            i.useEffect(() => {
                "" !== H && (ea(0), er(!1));
            }, [H]),
            (0, r.jsxs)("div", {
                className: z.AD,
                children: [
                    eT
                        ? (0, r.jsx)(E.A, {
                              role: "none presentation",
                              className: z.p_,
                              listPadding: es,
                              onScroll: eI,
                              renderRow: eu,
                              renderSection: ed,
                              renderSectionHeader: e_,
                              renderSectionFooter: ef,
                              rowCount: b,
                              rowCountBySection: f,
                              rowHeight: eo(s),
                              sectionHeaderHeight: ep,
                              sectionMarginBottom: eh,
                              sectionFooterHeight: em,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, r.jsx)(h.A, { message: $.intl.string($.t.IxxiKF), className: z.BZ }),
                    Z || u.Fr
                        ? null
                        : (0, r.jsx)(O.d, {
                              showUpsell: en,
                              text: ey(),
                              button: eS(),
                              buttonAnalyticsObject: { section: Y.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                          }),
                ],
            })
        );
    }),
    ec = l().throttle(ed, 300, { leading: !1, trailing: !0 });
function ed(e) {
    let { emojiListRef: t, sectionDescriptors: n, scrollTop: r, searchQuery: i, setShowUpsell: a } = e;
    a(
        (0, y.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: r })
            .areOnlyNitroLockedSectionsVisible,
    );
}
let e_ = eu;
