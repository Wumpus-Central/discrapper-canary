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
    m = n(793574),
    E = n(688810),
    g = n(962125),
    A = n(850992),
    I = n(151271),
    T = n(60587),
    S = n(240864),
    y = n(887695),
    v = n(286509),
    N = n(450510),
    C = n(526292),
    R = n(89366),
    O = n(202639),
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
                getEmojiItemProps: g,
                getEmojiRowProps: S,
                isScrolling: y,
                isUsingKeyboardNavigation: R,
                allowAnimatedEmoji: O,
                channelGuildId: D,
                channelId: L,
                messageId: w,
                isBurstReaction: M,
                listHeaderClassName: k,
                activeSectionIndex: U,
                emojiListRef: G,
            } = e,
            $ = (0, h.p)(),
            Z = i.useRef(W.An1),
            es = i.useMemo(() => ("" !== n ? d.A.convert.toCodePoint(n) : ""), [n]),
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
                            P.default.track(W.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: $.location,
                                tab: K.kx.EMOJI,
                                collapsed: !i,
                                guild_id: n.id,
                            }),
                        e === Y.R2.SOUNDMOJI &&
                            P.default.track(W.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                        E(r);
                },
                [$, t, E],
            ),
            ed = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === H.bm.SOUNDMOJI ? null : e.type === H.bm.EMOJI ? (0, x.N)(e.emoji) : e.name;
                Z.current !== W.An1 && window.cancelAnimationFrame(Z.current),
                    (Z.current = window.requestAnimationFrame(() => {
                        A.Om.setInspectedExpressionPosition(t, n, T.t.MOUSE_EVENT),
                            A.Om.setSearchPlaceholder(r),
                            (Z.current = W.An1);
                    }));
            }, []),
            e_ = (0, c.bG)([N.HP], () => N.HP.hasHotspot(N._2.FAVORITE_EMOJI_TOOLTIP), []),
            ef = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = s[e],
                            i = m[t.sectionIndex],
                            a = () => {
                                G.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                            };
                        return (0, r.jsx)(
                            j.A,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: es,
                                onInspect: ed,
                                onSelect: u,
                                onSelectSoundmoji: _,
                                getEmojiItemProps: g,
                                getEmojiRowProps: S,
                                isScrolling: y,
                                isUsingKeyboardNavigation: R,
                                rowIndex: e,
                                allowAnimatedEmoji: O,
                                showEmojiFavoriteTooltip: e_,
                                channelGuildId: D,
                                category: i.sectionId,
                                selectedItemClassName: q.__invalid_selectedItem,
                                channelId: L,
                                messageId: w,
                                isBurstReaction: M,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: a,
                            },
                            e,
                        );
                    }),
                [s, m, o, es, ed, u, _, g, S, y, R, O, e_, D, L, w, M, G],
            );
        i.useEffect(() => () => ef.cache?.clear?.(), [ef]);
        let ep = i.useMemo(
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
                        let d = U === e,
                            _ = n.isNitroLocked,
                            p = _ && !d,
                            h = _ && d,
                            E =
                                o === Y.s.SOUNDMOJI
                                    ? (0, r.jsx)(f.DUT, {
                                          className: q.f3,
                                          onClick: () => {
                                              (0, I.U)(K.kx.SOUNDBOARD),
                                                  P.default.track(W.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: z.intl.string(z.t.rUEjBe),
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            v.A,
                            {
                                className: a()(q.wx, k, { [q.RA]: p, [q.sp]: h }),
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
            eh = (0, C.k0)(),
            em = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        s = eu(e),
                        o = el(e);
                    return (0, r.jsx)(
                        "div",
                        {
                            className: a()(q.Wy, {
                                [q.YD]: e === m.length - 1,
                                [q.jl]: t.has(i.sectionId),
                                [q.cW]: i.isNitroLocked,
                                [q.T5]: s || o,
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
                            ? (0, r.jsx)(b.ap, {})
                            : (0, r.jsx)(b.Ay, {})
                        : el(e)
                          ? (0, r.jsx)("div", { className: q.pQ })
                          : null,
                [eu, el, eh],
            ),
            eg = i.useCallback((e) => (eu(e) ? ea : el(e) ? eo : 0), [eu, el]),
            eA = i.useCallback(
                (e) => (e === m.length - 1 || t.has(m[e]?.sectionId) || eu(e) || el(e) ? 0 : er),
                [t, m, eu, el],
            );
        return {
            listPadding: i.useMemo(() => ["" !== p ? et : Q, J, ee, X], [p]),
            renderRow: ef,
            renderSection: em,
            renderSectionHeader: ep,
            renderSectionFooter: eE,
            sectionMarginBottom: eA,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === Y.s.SEARCH_RESULTS ? 0 : en), [m]),
            sectionFooterHeight: eg,
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
                collapsedSections: T,
                setCollapsedSections: S,
                getEmojiItemProps: v,
                getEmojiRowProps: N,
                rowCount: C,
                isUsingKeyboardNavigation: b,
                channelGuildId: x,
                channelId: G,
                messageId: F,
                isBurstReaction: V,
                listHeaderClassName: B,
            } = e,
            j = i.useRef(!1),
            Y = A.Om.useStore((e) => e.activeCategoryIndex),
            K = (0, I.RQ)((e) => e.searchQuery),
            X = L.Sf.useSetting(),
            Q = (0, c.bG)([M.default], () => M.default.getCurrentUser()),
            J = (0, k.ki)(Q),
            ee = (0, w.St)("emoji_picker_floating_upsell"),
            { location: et } = (0, h.p)(),
            { analyticsLocations: en } = (0, E.Ay)(),
            [er, ei] = i.useState(0),
            [es, ea] = i.useState(!1),
            {
                listPadding: eo,
                renderRow: ec,
                renderSection: e_,
                renderSectionHeader: ef,
                renderSectionFooter: ep,
                sectionMarginBottom: eh,
                sectionHeaderHeight: em,
                sectionFooterHeight: eE,
            } = eu({
                collapsedSections: T,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: a,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                searchQuery: K,
                sectionDescriptors: _,
                setCollapsedSections: S,
                getEmojiItemProps: v,
                getEmojiRowProps: N,
                isScrolling: j,
                isUsingKeyboardNavigation: b,
                allowAnimatedEmoji: X,
                channelGuildId: x,
                channelId: G,
                messageId: F,
                isBurstReaction: V,
                listHeaderClassName: B,
                activeSectionIndex: er,
                emojiListRef: s,
            }),
            eg = (e) => {
                ei(e), "" === K && A.Om.setActiveCategoryIndex(e);
            },
            eA = (0, y.Fk)({
                activeCategoryIndex: Y,
                isScrolling: j,
                listRef: s,
                onActiveCategoryIndexChange: eg,
                scrollOffset: Z,
                searchQuery: K,
                disableForSearch: !1,
            });
        (0, y.FV)({ searchQuery: K, activeCategoryIndex: Y, listRef: s });
        let eI = i.useCallback(
                (e) => {
                    eA(e),
                        ed({ emojiListRef: s, sectionDescriptors: _, scrollTop: e, searchQuery: K, setShowUpsell: ea });
                },
                [eA, s, _, K, ea],
            ),
            eT = _.length > 0;
        function eS() {
            let e = (0, U.Dd)($.PremiumTypes.TIER_2);
            return z.intl.format(z.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({ type: H.a2.PREMIUM, emojiDescriptor: void 0 });
                },
            });
        }
        function ey() {
            let e = (0, R.qD)();
            return (0, U.LE)(e, $.pe.TIER_2) ?? z.intl.string(z.t.BmJkbd);
        }
        return (
            i.useEffect(() => {
                es &&
                    P.default.track(W.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: $.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: et,
                        location_stack: en,
                    });
            }, [et, en, es]),
            i.useEffect(() => {
                "" !== K && ea(!1);
            }, [K]),
            (0, r.jsxs)("div", {
                className: q.AD,
                children: [
                    eT
                        ? (0, r.jsx)(g.A, {
                              role: "none presentation",
                              className: q.p_,
                              listPadding: eo,
                              onScroll: eI,
                              renderRow: ec,
                              renderSection: e_,
                              renderSectionHeader: ef,
                              renderSectionFooter: ep,
                              rowCount: C,
                              rowCountBySection: f,
                              rowHeight: el(a),
                              sectionHeaderHeight: em,
                              sectionMarginBottom: eh,
                              sectionFooterHeight: eE,
                              stickyHeaders: !0,
                              ref: s,
                          })
                        : (0, r.jsx)(p.A, { message: z.intl.string(z.t.IxxiKF), className: q.BZ }),
                    J || u.Fr
                        ? null
                        : (0, r.jsx)(O.d, {
                              showUpsell: es,
                              text: eS(),
                              button: ey(),
                              buttonAnalyticsObject: { section: W.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: ee
                                  ? (0, r.jsx)(D.l, {
                                        size: "sm",
                                        className: q.ij,
                                        location: m.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    ed = l().throttle(e_, 300, { leading: !1, trailing: !0 });
function e_(e) {
    let { emojiListRef: t, sectionDescriptors: n, scrollTop: r, searchQuery: i, setShowUpsell: s } = e;
    s(
        (0, S.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: r })
            .areOnlyNitroLockedSectionsVisible,
    );
}
let ef = ec;
