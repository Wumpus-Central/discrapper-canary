"use strict";
n.d(t, { A: () => e_ });
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
    R = n(202639),
    O = n(414872),
    b = n(400669),
    D = n(253932),
    L = n(909536),
    w = n(287809),
    M = n(954571),
    x = n(690521),
    P = n(474090),
    k = n(927578),
    U = n(240248),
    G = n(822123),
    F = n(535622),
    V = n(724511),
    B = n(484333),
    H = n(923861),
    j = n(732139),
    Y = n(652215),
    W = n(698279),
    K = n(788868),
    $ = n(985018),
    z = n(488506);
let q = 0,
    Z = 0,
    X = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    Q = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    J = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    ee = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    et = (0, U.xI)(_.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    en = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    er = 16,
    ei = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    es = 41,
    ea = 33,
    eo = (e) => e + 2 * ei,
    el = (e) => {
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
                allowAnimatedEmoji: b,
                channelGuildId: D,
                channelId: L,
                messageId: w,
                isBurstReaction: P,
                listHeaderClassName: k,
                activeSectionIndex: U,
                emojiListRef: K,
            } = e,
            q = (0, h.p)(),
            ei = i.useRef(Y.An1),
            eo = i.useMemo(() => ("" !== n ? d.A.convert.toCodePoint(n) : ""), [n]),
            el = i.useCallback(
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
            ec = i.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            M.default.track(Y.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: q.location,
                                tab: W.kx.EMOJI,
                                collapsed: !i,
                                guild_id: n.id,
                            }),
                        e === j.R2.SOUNDMOJI &&
                            M.default.track(Y.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        E(r);
                },
                [q, t, E],
            ),
            ed = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === B.bm.SOUNDMOJI ? null : e.type === B.bm.EMOJI ? (0, x.N)(e.emoji) : e.name;
                ei.current !== Y.An1 && window.cancelAnimationFrame(ei.current),
                    (ei.current = window.requestAnimationFrame(() => {
                        g.Om.setInspectedExpressionPosition(t, n, I.t.MOUSE_EVENT),
                            g.Om.setSearchPlaceholder(r),
                            (ei.current = Y.An1);
                    }));
            }, []),
            e_ = (0, c.bG)([v.HP], () => v.HP.hasHotspot(v._2.FAVORITE_EMOJI_TOOLTIP), []),
            ef = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = s[e],
                            i = m[t.sectionIndex],
                            a = () => {
                                K.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, r.jsx)(
                            H.A,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: eo,
                                onInspect: ed,
                                onSelect: u,
                                onSelectSoundmoji: _,
                                getEmojiItemProps: T,
                                getEmojiRowProps: S,
                                isScrolling: C,
                                isUsingKeyboardNavigation: R,
                                rowIndex: e,
                                allowAnimatedEmoji: b,
                                showEmojiFavoriteTooltip: e_,
                                channelGuildId: D,
                                category: i.sectionId,
                                selectedItemClassName: z.__invalid_selectedItem,
                                channelId: L,
                                messageId: w,
                                isBurstReaction: P,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: a,
                            },
                            e,
                        );
                    }),
                [s, m, o, eo, ed, u, _, T, S, C, R, b, e_, D, L, w, P, K],
            );
        i.useEffect(() => () => ef.cache?.clear?.(), [ef]);
        let ep = i.useMemo(
                () =>
                    l().memoize((e) => {
                        let n = m[e];
                        if (null == n) return;
                        let { guild: i, categoryId: s, type: o, sectionId: l } = n;
                        if (o === j.s.SEARCH_RESULTS) return;
                        let u =
                                o === j.s.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(V.A, { guild: i, height: er, width: er })
                                        : null
                                    : null != s
                                      ? (0, r.jsx)(F.A, { categoryId: s, height: er, width: er, size: "custom" })
                                      : null,
                            c = i?.name;
                        null != s && (c = (0, G.Nu)(s, i?.name));
                        let d = U === e,
                            _ = n.isNitroLocked,
                            p = _ && !d,
                            h = _ && d,
                            E =
                                o === j.s.SOUNDMOJI
                                    ? (0, r.jsx)(f.DUT, {
                                          className: z.f3,
                                          onClick: () => {
                                              (0, A.U)(W.kx.SOUNDBOARD),
                                                  M.default.track(Y.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: $.intl.string($.t.rUEjBe),
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            y.A,
                            {
                                className: a()(z.wx, k, { [z.RA]: p, [z.sp]: h }),
                                icon: u,
                                isCollapsed: t.has(l),
                                onClick: () => ec(l, i),
                                trailing: E,
                                children: c,
                            },
                            l,
                        );
                    }),
                [m, t, ec, k, U],
            ),
            eh = (0, N.k0)(),
            em = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        s = eu(e),
                        o = el(e);
                    return (0, r.jsx)(
                        "div",
                        {
                            className: a()(z.Wy, {
                                [z.YD]: e === m.length - 1,
                                [z.jl]: t.has(i.sectionId),
                                [z.cW]: i.isNitroLocked,
                                [z.T5]: s || o,
                            }),
                            children: n,
                        },
                        e,
                    );
                },
                [t, m, eu, el],
            ),
            eE = i.useCallback(
                (e) =>
                    eu(e)
                        ? eh
                            ? (0, r.jsx)(O.ap, {})
                            : (0, r.jsx)(O.Ay, {})
                        : el(e)
                          ? (0, r.jsx)("div", { className: z.pQ })
                          : null,
                [eu, el, eh],
            ),
            eg = i.useCallback((e) => (eu(e) ? es : el(e) ? ea : 0), [eu, el]),
            eA = i.useCallback(
                (e) => (e === m.length - 1 || t.has(m[e]?.sectionId) || eu(e) || el(e) ? 0 : en),
                [t, m, eu, el],
            );
        return {
            listPadding: i.useMemo(() => ["" !== p ? ee : X, Q, J, Z], [p]),
            renderRow: ef,
            renderSection: em,
            renderSectionHeader: ep,
            renderSectionFooter: eE,
            sectionMarginBottom: eA,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === j.s.SEARCH_RESULTS ? 0 : et), [m]),
            sectionFooterHeight: eg,
        };
    },
    eu = i.memo(function (e) {
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
                isUsingKeyboardNavigation: O,
                channelGuildId: x,
                channelId: U,
                messageId: G,
                isBurstReaction: F,
                listHeaderClassName: V,
            } = e,
            H = i.useRef(!1),
            j = g.Om.useStore((e) => e.activeCategoryIndex),
            W = (0, A.RQ)((e) => e.searchQuery),
            Z = D.Sf.useSetting(),
            X = (0, c.bG)([w.default], () => w.default.getCurrentUser()),
            Q = (0, P.ki)(X),
            J = (0, L.St)("emoji_picker_floating_upsell"),
            { location: ee } = (0, h.p)(),
            { analyticsLocations: et } = (0, m.Ay)(),
            [en, er] = i.useState(0),
            [ei, es] = i.useState(!1),
            {
                listPadding: ea,
                renderRow: eu,
                renderSection: ed,
                renderSectionHeader: e_,
                renderSectionFooter: ef,
                sectionMarginBottom: ep,
                sectionHeaderHeight: eh,
                sectionFooterHeight: em,
            } = el({
                collapsedSections: I,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: a,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                searchQuery: W,
                sectionDescriptors: _,
                setCollapsedSections: T,
                getEmojiItemProps: y,
                getEmojiRowProps: v,
                isScrolling: H,
                isUsingKeyboardNavigation: O,
                allowAnimatedEmoji: Z,
                channelGuildId: x,
                channelId: U,
                messageId: G,
                isBurstReaction: F,
                listHeaderClassName: V,
                activeSectionIndex: en,
                emojiListRef: s,
            }),
            eE = (e) => {
                er(e), "" === W && g.Om.setActiveCategoryIndex(e);
            },
            eg = (0, S.Fk)({
                activeCategoryIndex: j,
                isScrolling: H,
                listRef: s,
                onActiveCategoryIndexChange: eE,
                scrollOffset: q,
                searchQuery: W,
                disableForSearch: !1,
            });
        (0, S.FV)({ searchQuery: W, activeCategoryIndex: j, listRef: s });
        let eA = i.useCallback(
                (e) => {
                    eg(e),
                        ec({ emojiListRef: s, sectionDescriptors: _, scrollTop: e, searchQuery: W, setShowUpsell: es });
                },
                [eg, s, _, W, es],
            ),
            eI = _.length > 0;
        function eT() {
            let e = (0, k.Dd)(K.PremiumTypes.TIER_2);
            return $.intl.format($.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({ type: B.a2.PREMIUM, emojiDescriptor: void 0 });
                },
            });
        }
        function eS() {
            let e = (0, C.qD)();
            return (0, k.LE)(e, K.pe.TIER_2) ?? $.intl.string($.t.BmJkbd);
        }
        return (
            i.useEffect(() => {
                ei &&
                    M.default.track(Y.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: K.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: ee,
                        location_stack: et,
                    });
            }, [ee, et, ei]),
            i.useEffect(() => {
                "" !== W && es(!1);
            }, [W]),
            (0, r.jsxs)("div", {
                className: z.AD,
                children: [
                    eI
                        ? (0, r.jsx)(E.A, {
                              role: "none presentation",
                              className: z.p_,
                              listPadding: ea,
                              onScroll: eA,
                              renderRow: eu,
                              renderSection: ed,
                              renderSectionHeader: e_,
                              renderSectionFooter: ef,
                              rowCount: N,
                              rowCountBySection: f,
                              rowHeight: eo(a),
                              sectionHeaderHeight: eh,
                              sectionMarginBottom: ep,
                              sectionFooterHeight: em,
                              stickyHeaders: !0,
                              ref: s,
                          })
                        : (0, r.jsx)(p.A, { message: $.intl.string($.t.IxxiKF), className: z.BZ }),
                    Q || u.Fr
                        ? null
                        : (0, r.jsx)(R.d, {
                              showUpsell: ei,
                              text: eT(),
                              button: eS(),
                              buttonAnalyticsObject: { section: Y.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: J ? (0, r.jsx)(b.l, { size: "sm", className: z.ij }) : void 0,
                          }),
                ],
            })
        );
    }),
    ec = l().throttle(ed, 300, { leading: !1, trailing: !0 });
function ed(e) {
    let { emojiListRef: t, sectionDescriptors: n, scrollTop: r, searchQuery: i, setShowUpsell: s } = e;
    s(
        (0, T.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: r })
            .areOnlyNitroLockedSectionsVisible,
    );
}
let e_ = eu;
