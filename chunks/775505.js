"use strict";
n.d(t, { A: () => ef });
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
    R = n(756349),
    O = n(202639),
    b = n(414872),
    D = n(400669),
    L = n(253932),
    w = n(909536),
    M = n(287809),
    x = n(954571),
    P = n(690521),
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
    q = n(586305);
let Z = 0,
    X = 0,
    Q = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    J = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    ee = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    et = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    en = (0, G.xI)(_.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    er = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    ei = 16,
    es = (0, G.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ea = 41,
    eo = 33,
    el = (e) => e + 2 * es,
    eu = (e) => {
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
                isUsingKeyboardNavigation: O,
                allowAnimatedEmoji: D,
                channelGuildId: L,
                channelId: w,
                messageId: M,
                isBurstReaction: k,
                listHeaderClassName: U,
                activeSectionIndex: G,
                upsellGlowOpacity: $,
                emojiListRef: Z,
            } = e,
            es = (0, h.p)(),
            el = i.useRef(W.An1),
            eu = i.useMemo(() => ("" !== n ? d.A.convert.toCodePoint(n) : ""), [n]),
            ec = (0, R.A)({ location: "PremiumBrandRefreshCategorySection" }),
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
                            x.default.track(W.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: es.location,
                                tab: K.kx.EMOJI,
                                collapsed: !i,
                                guild_id: n.id,
                            }),
                        e === Y.R2.SOUNDMOJI &&
                            x.default.track(W.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        E(r);
                },
                [es, t, E],
            ),
            ep = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === H.bm.SOUNDMOJI ? null : e.type === H.bm.EMOJI ? (0, P.N)(e.emoji) : e.name;
                el.current !== W.An1 && window.cancelAnimationFrame(el.current),
                    (el.current = window.requestAnimationFrame(() => {
                        g.Om.setInspectedExpressionPosition(t, n, I.t.MOUSE_EVENT),
                            g.Om.setSearchPlaceholder(r),
                            (el.current = W.An1);
                    }));
            }, []),
            eh = (0, c.bG)([v.HP], () => v.HP.hasHotspot(v._2.FAVORITE_EMOJI_TOOLTIP), []),
            em = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = s[e],
                            i = m[t.sectionIndex],
                            a = () => {
                                Z.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, r.jsx)(
                            j.A,
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
                                isUsingKeyboardNavigation: O,
                                rowIndex: e,
                                allowAnimatedEmoji: D,
                                showEmojiFavoriteTooltip: eh,
                                channelGuildId: L,
                                category: i.sectionId,
                                selectedItemClassName: q.__invalid_selectedItem,
                                channelId: w,
                                messageId: M,
                                isBurstReaction: k,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: a,
                            },
                            e,
                        );
                    }),
                [s, m, o, eu, ep, u, _, T, S, C, O, D, eh, L, w, M, k, Z],
            );
        i.useEffect(() => () => em.cache?.clear?.(), [em]);
        let eE = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = m[e];
                        if (null == n) return;
                        let { guild: i, categoryId: s, type: o, sectionId: l } = n;
                        if (o === Y.s.SEARCH_RESULTS) return;
                        let u =
                                o === Y.s.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(B.A, { guild: i, height: ei, width: ei })
                                        : null
                                    : null != s
                                      ? (0, r.jsx)(V.A, { categoryId: s, height: ei, width: ei, size: "custom" })
                                      : null,
                            c = i?.name;
                        null != s && (c = (0, F.Nu)(s, i?.name));
                        let d = G === e,
                            _ = n.isNitroLocked,
                            p = _ && !d,
                            h = _ && d,
                            E =
                                o === Y.s.SOUNDMOJI
                                    ? (0, r.jsx)(f.DUT, {
                                          className: q.f3,
                                          onClick: () => {
                                              (0, A.U)(K.kx.SOUNDBOARD),
                                                  x.default.track(W.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: z.intl.string(z.t.rUEjBe),
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            y.A,
                            {
                                className: a()(q.wx, U, { [q.RA]: p, [q.sp]: h }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => ef(l, i),
                                trailing: E,
                                children: c,
                            },
                            l,
                        );
                    }),
                [m, t, ef, U, G],
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
                            className: a()(q.Wy, {
                                [q.YD]: e === m.length - 1,
                                [q.jl]: t.has(i.sectionId),
                                [q.cW]: i.isNitroLocked,
                                [q.N4]: ec,
                                [q.T5]: s || o,
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
                            ? (0, r.jsx)(b.ap, {})
                            : (0, r.jsx)(b.Ay, { glowOpacity: $, enableBrandRefresh: ec })
                        : ed(e)
                          ? (0, r.jsx)("div", { className: a()(q.pQ, { [q.N4]: ec }) })
                          : null,
                [$, e_, ed, eg, ec],
            ),
            eT = i.useCallback((e) => (e_(e) ? ea : ed(e) ? eo : 0), [e_, ed]),
            eS = i.useCallback(
                (e) => (e === m.length - 1 || t.has(m[e]?.sectionId) || e_(e) || ed(e) ? 0 : er),
                [t, m, e_, ed],
            );
        return {
            listPadding: i.useMemo(() => ["" !== p ? et : Q, J, ee, X], [p]),
            renderRow: em,
            renderSection: eA,
            renderSectionHeader: eE,
            renderSectionFooter: eI,
            sectionMarginBottom: eS,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === Y.s.SEARCH_RESULTS ? 0 : en), [m]),
            sectionFooterHeight: eT,
        };
    },
    ec = i.memo(function (e) {
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
                isUsingKeyboardNavigation: R,
                channelGuildId: b,
                channelId: P,
                messageId: G,
                isBurstReaction: F,
                listHeaderClassName: V,
            } = e,
            B = i.useRef(!1),
            j = g.Om.useStore((e) => e.activeCategoryIndex),
            Y = (0, A.RQ)((e) => e.searchQuery),
            K = L.Sf.useSetting(),
            X = (0, c.bG)([M.default], () => M.default.getCurrentUser()),
            Q = (0, k.ki)(X),
            J = (0, w.St)("emoji_picker_floating_upsell"),
            { location: ee } = (0, h.p)(),
            { analyticsLocations: et } = (0, m.Ay)(),
            [en, er] = i.useState(0),
            [ei, es] = i.useState(!1),
            [ea, eo] = i.useState(0),
            {
                listPadding: ec,
                renderRow: e_,
                renderSection: ef,
                renderSectionHeader: ep,
                renderSectionFooter: eh,
                sectionMarginBottom: em,
                sectionHeaderHeight: eE,
                sectionFooterHeight: eg,
            } = eu({
                collapsedSections: I,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: a,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                searchQuery: Y,
                sectionDescriptors: _,
                setCollapsedSections: T,
                getEmojiItemProps: y,
                getEmojiRowProps: v,
                isScrolling: B,
                isUsingKeyboardNavigation: R,
                allowAnimatedEmoji: K,
                channelGuildId: b,
                channelId: P,
                messageId: G,
                isBurstReaction: F,
                listHeaderClassName: V,
                activeSectionIndex: en,
                upsellGlowOpacity: ea,
                emojiListRef: s,
            }),
            eA = (e) => {
                er(e), "" === Y && g.Om.setActiveCategoryIndex(e);
            },
            eI = (0, S.ci)({ listRef: s, searchQuery: Y, nitroLockedSectionStates: _, setUpsellGlowOpacity: eo }),
            eT = (0, S.Fk)({
                activeCategoryIndex: j,
                isScrolling: B,
                listRef: s,
                onActiveCategoryIndexChange: eA,
                scrollOffset: Z,
                searchQuery: Y,
                disableForSearch: !1,
            });
        (0, S.FV)({ searchQuery: Y, activeCategoryIndex: j, listRef: s });
        let eS = i.useCallback(
                (e) => {
                    eI(e),
                        eT(e),
                        ed({ emojiListRef: s, sectionDescriptors: _, scrollTop: e, searchQuery: Y, setShowUpsell: es });
                },
                [eI, eT, s, _, Y, es],
            ),
            ey = _.length > 0;
        function ev() {
            let e = (0, U.Dd)($.PremiumTypes.TIER_2);
            return z.intl.format(z.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({ type: H.a2.PREMIUM, emojiDescriptor: void 0 });
                },
            });
        }
        function eN() {
            let e = (0, C.qD)();
            return (0, U.LE)(e, $.pe.TIER_2) ?? z.intl.string(z.t.BmJkbd);
        }
        return (
            i.useEffect(() => {
                ei &&
                    x.default.track(W.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: $.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: ee,
                        location_stack: et,
                    });
            }, [ee, et, ei]),
            i.useEffect(() => {
                "" !== Y && (eo(0), es(!1));
            }, [Y]),
            (0, r.jsxs)("div", {
                className: q.AD,
                children: [
                    ey
                        ? (0, r.jsx)(E.A, {
                              role: "none presentation",
                              className: q.p_,
                              listPadding: ec,
                              onScroll: eS,
                              renderRow: e_,
                              renderSection: ef,
                              renderSectionHeader: ep,
                              renderSectionFooter: eh,
                              rowCount: N,
                              rowCountBySection: f,
                              rowHeight: el(a),
                              sectionHeaderHeight: eE,
                              sectionMarginBottom: em,
                              sectionFooterHeight: eg,
                              stickyHeaders: !0,
                              ref: s,
                          })
                        : (0, r.jsx)(p.A, { message: z.intl.string(z.t.IxxiKF), className: q.BZ }),
                    Q || u.Fr
                        ? null
                        : (0, r.jsx)(O.d, {
                              showUpsell: ei,
                              text: ev(),
                              button: eN(),
                              buttonAnalyticsObject: { section: W.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: J ? (0, r.jsx)(D.l, { size: "sm", className: q.ij }) : void 0,
                          }),
                ],
            })
        );
    }),
    ed = l().throttle(e_, 300, { leading: !1, trailing: !0 });
function e_(e) {
    let { emojiListRef: t, sectionDescriptors: n, scrollTop: r, searchQuery: i, setShowUpsell: s } = e;
    s(
        (0, T.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: r })
            .areOnlyNitroLockedSectionsVisible,
    );
}
let ef = ec;
