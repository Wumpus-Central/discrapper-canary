"use strict";
n.d(t, { A: () => ed });
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
    f = n(397927),
    p = n(537652),
    h = n(212245),
    m = n(688810),
    E = n(962125),
    g = n(850992),
    A = n(151271),
    I = n(60587),
    T = n(240864),
    S = n(887695),
    y = n(286509),
    v = n(450510),
    N = n(526292),
    C = n(89366),
    b = n(756349),
    R = n(202639),
    O = n(414872),
    D = n(253932),
    L = n(287809),
    w = n(954571),
    x = n(690521),
    M = n(474090),
    P = n(927578),
    k = n(240248),
    U = n(822123),
    G = n(535622),
    F = n(724511),
    V = n(484333),
    B = n(923861),
    H = n(732139),
    j = n(652215),
    Y = n(698279),
    W = n(788868),
    K = n(985018),
    z = n(586305);
let $ = 0,
    q = 0,
    Z = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    X = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    Q = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    J = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ee = (0, k.xI)(_.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    en = 16,
    er = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ei = 41,
    es = 33,
    ea = (e) => e + 2 * er,
    eo = (e) => {
        let {
                collapsedSections: t,
                diversitySurrogate: n,
                emojiGrid: s,
                emojiSize: o,
                onEmojiSelect: u,
                onSelectSoundmoji: _,
                searchQuery: p,
                sectionDescriptors: m,
                setCollapsedSections: E,
                getEmojiItemProps: T,
                getEmojiRowProps: S,
                isScrolling: C,
                isUsingKeyboardNavigation: R,
                allowAnimatedEmoji: D,
                channelGuildId: L,
                channelId: M,
                messageId: P,
                isBurstReaction: k,
                listHeaderClassName: W,
                activeSectionIndex: $,
                upsellGlowOpacity: er,
                emojiListRef: ea,
            } = e,
            eo = (0, h.p)(),
            el = i.useRef(j.An1),
            eu = i.useMemo(() => ("" !== n ? d.A.convert.toCodePoint(n) : ""), [n]),
            ec = (0, b.A)({ location: "PremiumBrandRefreshCategorySection" }),
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
                            w.default.track(j.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: eo.location,
                                tab: Y.kx.EMOJI,
                                collapsed: !i,
                                guild_id: n.id,
                            }),
                        e === H.R2.SOUNDMOJI &&
                            w.default.track(j.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        E(r);
                },
                [eo, t, E],
            ),
            ep = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === V.bm.SOUNDMOJI ? null : e.type === V.bm.EMOJI ? (0, x.N)(e.emoji) : e.name;
                el.current !== j.An1 && window.cancelAnimationFrame(el.current),
                    (el.current = window.requestAnimationFrame(() => {
                        g.Om.setInspectedExpressionPosition(t, n, I.t.MOUSE_EVENT),
                            g.Om.setSearchPlaceholder(r),
                            (el.current = j.An1);
                    }));
            }, []),
            eh = (0, c.bG)([v.HP], () => v.HP.hasHotspot(v._2.FAVORITE_EMOJI_TOOLTIP), []),
            em = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = s[e],
                            i = m[t.sectionIndex],
                            a = () => {
                                ea.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
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
                                getEmojiRowProps: S,
                                isScrolling: C,
                                isUsingKeyboardNavigation: R,
                                rowIndex: e,
                                allowAnimatedEmoji: D,
                                showEmojiFavoriteTooltip: eh,
                                channelGuildId: L,
                                category: i.sectionId,
                                selectedItemClassName: z.__invalid_selectedItem,
                                channelId: M,
                                messageId: P,
                                isBurstReaction: k,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: a,
                            },
                            e,
                        );
                    }),
                [s, m, o, eu, ep, u, _, T, S, C, R, D, eh, L, M, P, k, ea],
            );
        i.useEffect(() => () => em.cache?.clear?.(), [em]);
        let eE = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = m[e];
                        if (null == n) return;
                        let { guild: i, categoryId: s, type: o, sectionId: l } = n;
                        if (o === H.s.SEARCH_RESULTS) return;
                        let u =
                                o === H.s.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(F.A, { guild: i, height: en, width: en })
                                        : null
                                    : null != s
                                      ? (0, r.jsx)(G.A, { categoryId: s, height: en, width: en, size: "custom" })
                                      : null,
                            c = i?.name;
                        null != s && (c = (0, U.Nu)(s, i?.name));
                        let d = $ === e,
                            _ = n.isNitroLocked,
                            p = _ && !d,
                            h = _ && d,
                            E =
                                o === H.s.SOUNDMOJI
                                    ? (0, r.jsx)(f.DUT, {
                                          className: z.f3,
                                          onClick: () => {
                                              (0, A.U)(Y.kx.SOUNDBOARD),
                                                  w.default.track(j.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: K.intl.string(K.t.rUEjBe),
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            y.A,
                            {
                                className: a()(z.wx, W, { [z.RA]: p, [z.sp]: h }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => ef(l, i),
                                trailing: E,
                                children: c,
                            },
                            l,
                        );
                    }),
                [m, t, ef, W, $],
            ),
            eg = (0, N.k0)(),
            eA = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        s = e_(e),
                        o = ed(e);
                    return (0, r.jsx)(
                        "div",
                        {
                            className: a()(z.Wy, {
                                [z.YD]: e === m.length - 1,
                                [z.jl]: t.has(i.sectionId),
                                [z.cW]: i.isNitroLocked,
                                [z.N4]: ec,
                                [z.T5]: s || o,
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
                        ? eg
                            ? (0, r.jsx)(O.ap, {})
                            : (0, r.jsx)(O.Ay, { glowOpacity: er, enableBrandRefresh: ec })
                        : ed(e)
                          ? (0, r.jsx)("div", { className: a()(z.pQ, { [z.N4]: ec }) })
                          : null,
                [er, e_, ed, eg, ec],
            ),
            eT = i.useCallback((e) => (e_(e) ? ei : ed(e) ? es : 0), [e_, ed]),
            eS = i.useCallback(
                (e) => (e === m.length - 1 || t.has(m[e]?.sectionId) || e_(e) || ed(e) ? 0 : et),
                [t, m, e_, ed],
            );
        return {
            listPadding: i.useMemo(() => ["" !== p ? J : Z, X, Q, q], [p]),
            renderRow: em,
            renderSection: eA,
            renderSectionHeader: eE,
            renderSectionFooter: eI,
            sectionMarginBottom: eS,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === H.s.SEARCH_RESULTS ? 0 : ee), [m]),
            sectionFooterHeight: eT,
        };
    },
    el = i.memo(function (e) {
        let {
                diversitySurrogate: t,
                emojiGrid: n,
                emojiListRef: s,
                emojiSize: a,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                setUpsellConfigs: d,
                sectionDescriptors: _,
                rowCountBySection: f,
                collapsedSections: I,
                setCollapsedSections: T,
                getEmojiItemProps: y,
                getEmojiRowProps: v,
                rowCount: N,
                isUsingKeyboardNavigation: b,
                channelGuildId: O,
                channelId: x,
                messageId: k,
                isBurstReaction: U,
                listHeaderClassName: G,
            } = e,
            F = i.useRef(!1),
            B = g.Om.useStore((e) => e.activeCategoryIndex),
            H = (0, A.RQ)((e) => e.searchQuery),
            Y = D.Sf.useSetting(),
            q = (0, c.bG)([L.default], () => L.default.getCurrentUser()),
            Z = (0, M.ki)(q),
            { location: X } = (0, h.p)(),
            { analyticsLocations: Q } = (0, m.Ay)(),
            [J, ee] = i.useState(0),
            [et, en] = i.useState(!1),
            [er, ei] = i.useState(0),
            {
                listPadding: es,
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
                emojiSize: a,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                searchQuery: H,
                sectionDescriptors: _,
                setCollapsedSections: T,
                getEmojiItemProps: y,
                getEmojiRowProps: v,
                isScrolling: F,
                isUsingKeyboardNavigation: b,
                allowAnimatedEmoji: Y,
                channelGuildId: O,
                channelId: x,
                messageId: k,
                isBurstReaction: U,
                listHeaderClassName: G,
                activeSectionIndex: J,
                upsellGlowOpacity: er,
                emojiListRef: s,
            }),
            em = (e) => {
                ee(e), "" === H && g.Om.setActiveCategoryIndex(e);
            },
            eE = (0, S.ci)({ listRef: s, searchQuery: H, nitroLockedSectionStates: _, setUpsellGlowOpacity: ei }),
            eg = (0, S.Fk)({
                activeCategoryIndex: B,
                isScrolling: F,
                listRef: s,
                onActiveCategoryIndexChange: em,
                scrollOffset: $,
                searchQuery: H,
                disableForSearch: !1,
            });
        (0, S.FV)({ searchQuery: H, activeCategoryIndex: B, listRef: s });
        let eA = i.useCallback(
                (e) => {
                    eE(e),
                        eg(e),
                        eu({ emojiListRef: s, sectionDescriptors: _, scrollTop: e, searchQuery: H, setShowUpsell: en });
                },
                [eE, eg, s, _, H, en],
            ),
            eI = _.length > 0;
        function eT() {
            let e = (0, P.Dd)(W.PremiumTypes.TIER_2);
            return K.intl.format(K.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({ type: V.a2.PREMIUM, emojiDescriptor: void 0 });
                },
            });
        }
        function eS() {
            let e = (0, C.qD)();
            return (0, P.LE)(e, W.pe.TIER_2) ?? K.intl.string(K.t.BmJkbd);
        }
        return (
            i.useEffect(() => {
                et &&
                    w.default.track(j.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: W.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: X,
                        location_stack: Q,
                    });
            }, [X, Q, et]),
            i.useEffect(() => {
                "" !== H && (ei(0), en(!1));
            }, [H]),
            (0, r.jsxs)("div", {
                className: z.AD,
                children: [
                    eI
                        ? (0, r.jsx)(E.A, {
                              role: "none presentation",
                              className: z.p_,
                              listPadding: es,
                              onScroll: eA,
                              renderRow: el,
                              renderSection: ec,
                              renderSectionHeader: ed,
                              renderSectionFooter: e_,
                              rowCount: N,
                              rowCountBySection: f,
                              rowHeight: ea(a),
                              sectionHeaderHeight: ep,
                              sectionMarginBottom: ef,
                              sectionFooterHeight: eh,
                              stickyHeaders: !0,
                              ref: s,
                          })
                        : (0, r.jsx)(p.A, { message: K.intl.string(K.t.IxxiKF), className: z.BZ }),
                    Z || u.Fr
                        ? null
                        : (0, r.jsx)(R.d, {
                              showUpsell: et,
                              text: eT(),
                              button: eS(),
                              buttonAnalyticsObject: { section: j.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                          }),
                ],
            })
        );
    }),
    eu = l().throttle(ec, 300, { leading: !1, trailing: !0 });
function ec(e) {
    let { emojiListRef: t, sectionDescriptors: n, scrollTop: r, searchQuery: i, setShowUpsell: s } = e;
    s(
        (0, T.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: r })
            .areOnlyNitroLockedSectionsVisible,
    );
}
let ed = el;
