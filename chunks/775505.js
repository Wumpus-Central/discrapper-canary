"use strict";
n.d(t, { A: () => ed });
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
    p = n(537652),
    h = n(212245),
    m = n(688810),
    g = n(962125),
    E = n(850992),
    A = n(151271),
    I = n(60587),
    T = n(240864),
    y = n(887695),
    S = n(286509),
    v = n(450510),
    C = n(526292),
    b = n(89366),
    N = n(756349),
    R = n(202639),
    O = n(414872),
    D = n(253932),
    L = n(287809),
    w = n(954571),
    x = n(690521),
    P = n(474090),
    M = n(927578),
    k = n(240248),
    U = n(822123),
    G = n(535622),
    V = n(724511),
    F = n(484333),
    B = n(923861),
    j = n(732139),
    H = n(652215),
    Y = n(698279),
    W = n(788868),
    K = n(985018),
    z = n(586305);
let $ = 0,
    q = 0,
    Z = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    Q = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    X = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    J = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ee = (0, k.xI)(_.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    en = 16,
    er = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ei = 41,
    ea = 33,
    es = (e) => e + 2 * er,
    eo = (e) => {
        let {
                collapsedSections: t,
                diversitySurrogate: n,
                emojiGrid: a,
                emojiSize: o,
                onEmojiSelect: u,
                onSelectSoundmoji: _,
                searchQuery: p,
                sectionDescriptors: m,
                setCollapsedSections: g,
                getEmojiItemProps: T,
                getEmojiRowProps: y,
                isScrolling: b,
                isUsingKeyboardNavigation: R,
                allowAnimatedEmoji: D,
                channelGuildId: L,
                channelId: P,
                messageId: M,
                isBurstReaction: k,
                listHeaderClassName: W,
                activeSectionIndex: $,
                upsellGlowOpacity: er,
                emojiListRef: es,
            } = e,
            eo = (0, h.p)(),
            el = i.useRef(H.An1),
            eu = i.useMemo(() => ("" !== n ? d.A.convert.toCodePoint(n) : ""), [n]),
            ec = (0, N.A)({ location: "PremiumBrandRefreshCategorySection" }),
            ed = i.useCallback(
                (e) => {
                    let t = m[e],
                        n = m[e + 1];
                    return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                },
                [m],
            ),
            e_ = i.useCallback(
                (e) => {
                    if (e >= m.length - 1) return !1;
                    let t = m[e],
                        n = m[e + 1];
                    return !t.isNitroLocked && n.isNitroLocked;
                },
                [m],
            ),
            ef = i.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            w.default.track(H.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: eo.location,
                                tab: Y.kx.EMOJI,
                                collapsed: !i,
                                guild_id: n.id,
                            }),
                        e === j.R2.SOUNDMOJI &&
                            w.default.track(H.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        g(r);
                },
                [eo, t, g],
            ),
            ep = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === F.bm.SOUNDMOJI ? null : e.type === F.bm.EMOJI ? (0, x.N)(e.emoji) : e.name;
                el.current !== H.An1 && window.cancelAnimationFrame(el.current),
                    (el.current = window.requestAnimationFrame(() => {
                        E.Om.setInspectedExpressionPosition(t, n, I.t.MOUSE_EVENT),
                            E.Om.setSearchPlaceholder(r),
                            (el.current = H.An1);
                    }));
            }, []),
            eh = (0, c.bG)([v.HP], () => v.HP.hasHotspot(v._2.FAVORITE_EMOJI_TOOLTIP), []),
            em = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = m[t.sectionIndex],
                            s = () => {
                                es.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, r.jsx)(
                            B.A,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: eu,
                                onInspect: ep,
                                onSelect: u,
                                onSelectSoundmoji: _,
                                getEmojiItemProps: T,
                                getEmojiRowProps: y,
                                isScrolling: b,
                                isUsingKeyboardNavigation: R,
                                rowIndex: e,
                                allowAnimatedEmoji: D,
                                showEmojiFavoriteTooltip: eh,
                                channelGuildId: L,
                                category: i.sectionId,
                                selectedItemClassName: z.__invalid_selectedItem,
                                channelId: P,
                                messageId: M,
                                isBurstReaction: k,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: s,
                            },
                            e,
                        );
                    }),
                [a, m, o, eu, ep, u, _, T, y, b, R, D, eh, L, P, M, k, es],
            );
        i.useEffect(() => () => em.cache?.clear?.(), [em]);
        let eg = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = m[e];
                        if (null == n) return;
                        let { guild: i, categoryId: a, type: o, sectionId: l } = n;
                        if (o === j.s.SEARCH_RESULTS) return;
                        let u =
                                o === j.s.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(V.A, { guild: i, height: en, width: en })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(G.A, { categoryId: a, height: en, width: en, size: "custom" })
                                      : null,
                            c = i?.name;
                        null != a && (c = (0, U.Nu)(a, i?.name));
                        let d = $ === e,
                            _ = n.isNitroLocked,
                            p = _ && !d,
                            h = _ && d,
                            g =
                                o === j.s.SOUNDMOJI
                                    ? (0, r.jsx)(f.DUT, {
                                          className: z.f3,
                                          onClick: () => {
                                              (0, A.U)(Y.kx.SOUNDBOARD),
                                                  w.default.track(H.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: K.intl.string(K.t.rUEjBe),
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            S.A,
                            {
                                className: s()(z.wx, W, { [z.RA]: p, [z.sp]: h }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => ef(l, i),
                                trailing: g,
                                children: c,
                            },
                            l,
                        );
                    }),
                [m, t, ef, W, $],
            ),
            eE = (0, C.k0)(),
            eA = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        a = e_(e),
                        o = ed(e);
                    return (0, r.jsx)(
                        "div",
                        {
                            className: s()(z.Wy, {
                                [z.YD]: e === m.length - 1,
                                [z.jl]: t.has(i.sectionId),
                                [z.cW]: i.isNitroLocked,
                                [z.N4]: ec,
                                [z.T5]: a || o,
                            }),
                            children: n,
                        },
                        e,
                    );
                },
                [t, m, e_, ed, ec],
            ),
            eI = i.useCallback(
                (e) =>
                    e_(e)
                        ? eE
                            ? (0, r.jsx)(O.ap, {})
                            : (0, r.jsx)(O.Ay, { glowOpacity: er, enableBrandRefresh: ec })
                        : ed(e)
                          ? (0, r.jsx)("div", { className: s()(z.pQ, { [z.N4]: ec }) })
                          : null,
                [er, e_, ed, eE, ec],
            ),
            eT = i.useCallback((e) => (e_(e) ? ei : ed(e) ? ea : 0), [e_, ed]),
            ey = i.useCallback(
                (e) => (e === m.length - 1 || t.has(m[e]?.sectionId) || e_(e) || ed(e) ? 0 : et),
                [t, m, e_, ed],
            );
        return {
            listPadding: i.useMemo(() => ["" !== p ? J : Z, Q, X, q], [p]),
            renderRow: em,
            renderSection: eA,
            renderSectionHeader: eg,
            renderSectionFooter: eI,
            sectionMarginBottom: ey,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === j.s.SEARCH_RESULTS ? 0 : ee), [m]),
            sectionFooterHeight: eT,
        };
    },
    el = i.memo(function (e) {
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
                collapsedSections: I,
                setCollapsedSections: T,
                getEmojiItemProps: S,
                getEmojiRowProps: v,
                rowCount: C,
                isUsingKeyboardNavigation: N,
                channelGuildId: O,
                channelId: x,
                messageId: k,
                isBurstReaction: U,
                listHeaderClassName: G,
            } = e,
            V = i.useRef(!1),
            B = E.Om.useStore((e) => e.activeCategoryIndex),
            j = (0, A.RQ)((e) => e.searchQuery),
            Y = D.Sf.useSetting(),
            q = (0, c.bG)([L.default], () => L.default.getCurrentUser()),
            Z = (0, P.ki)(q),
            { location: Q } = (0, h.p)(),
            { analyticsLocations: X } = (0, m.Ay)(),
            [J, ee] = i.useState(0),
            [et, en] = i.useState(!1),
            [er, ei] = i.useState(0),
            {
                listPadding: ea,
                renderRow: el,
                renderSection: ec,
                renderSectionHeader: ed,
                renderSectionFooter: e_,
                sectionMarginBottom: ef,
                sectionHeaderHeight: ep,
                sectionFooterHeight: eh,
            } = eo({
                collapsedSections: I,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                searchQuery: j,
                sectionDescriptors: _,
                setCollapsedSections: T,
                getEmojiItemProps: S,
                getEmojiRowProps: v,
                isScrolling: V,
                isUsingKeyboardNavigation: N,
                allowAnimatedEmoji: Y,
                channelGuildId: O,
                channelId: x,
                messageId: k,
                isBurstReaction: U,
                listHeaderClassName: G,
                activeSectionIndex: J,
                upsellGlowOpacity: er,
                emojiListRef: a,
            }),
            em = (e) => {
                ee(e), "" === j && E.Om.setActiveCategoryIndex(e);
            },
            eg = (0, y.ci)({ listRef: a, searchQuery: j, nitroLockedSectionStates: _, setUpsellGlowOpacity: ei }),
            eE = (0, y.Fk)({
                activeCategoryIndex: B,
                isScrolling: V,
                listRef: a,
                onActiveCategoryIndexChange: em,
                scrollOffset: $,
                searchQuery: j,
                disableForSearch: !1,
            });
        (0, y.FV)({ searchQuery: j, activeCategoryIndex: B, listRef: a });
        let eA = i.useCallback(
                (e) => {
                    eg(e),
                        eE(e),
                        eu({ emojiListRef: a, sectionDescriptors: _, scrollTop: e, searchQuery: j, setShowUpsell: en });
                },
                [eg, eE, a, _, j, en],
            ),
            eI = _.length > 0;
        function eT() {
            let e = (0, M.Dd)(W.PremiumTypes.TIER_2);
            return K.intl.format(K.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({ type: F.a2.PREMIUM, emojiDescriptor: void 0 });
                },
            });
        }
        function ey() {
            let e = (0, b.qD)();
            return (0, M.LE)(e, W.pe.TIER_2) ?? K.intl.string(K.t.BmJkbd);
        }
        return (
            i.useEffect(() => {
                et &&
                    w.default.track(H.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: W.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: Q,
                        location_stack: X,
                    });
            }, [Q, X, et]),
            i.useEffect(() => {
                "" !== j && (ei(0), en(!1));
            }, [j]),
            (0, r.jsxs)("div", {
                className: z.AD,
                children: [
                    eI
                        ? (0, r.jsx)(g.A, {
                              role: "none presentation",
                              className: z.p_,
                              listPadding: ea,
                              onScroll: eA,
                              renderRow: el,
                              renderSection: ec,
                              renderSectionHeader: ed,
                              renderSectionFooter: e_,
                              rowCount: C,
                              rowCountBySection: f,
                              rowHeight: es(s),
                              sectionHeaderHeight: ep,
                              sectionMarginBottom: ef,
                              sectionFooterHeight: eh,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, r.jsx)(p.A, { message: K.intl.string(K.t.IxxiKF), className: z.BZ }),
                    Z || u.Fr
                        ? null
                        : (0, r.jsx)(R.d, {
                              showUpsell: et,
                              text: eT(),
                              button: ey(),
                              buttonAnalyticsObject: { section: H.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                          }),
                ],
            })
        );
    }),
    eu = l().throttle(ec, 300, { leading: !1, trailing: !0 });
function ec(e) {
    let { emojiListRef: t, sectionDescriptors: n, scrollTop: r, searchQuery: i, setShowUpsell: a } = e;
    a(
        (0, T.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: r })
            .areOnlyNitroLockedSectionsVisible,
    );
}
let ed = el;
