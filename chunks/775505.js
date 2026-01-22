n.d(t, {
    A: () => ed,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(607399),
    u = n(311907),
    d = n(838677),
    f = n(319060),
    p = n(397927),
    _ = n(537652),
    h = n(212245),
    m = n(688810),
    g = n(962125),
    E = n(850992),
    b = n(151271),
    y = n(60587),
    O = n(240864),
    A = n(887695),
    v = n(286509),
    S = n(450510),
    I = n(526292),
    T = n(89366),
    C = n(756349),
    N = n(202639),
    R = n(414872),
    w = n(253932),
    P = n(287809),
    D = n(954571),
    x = n(690521),
    L = n(474090),
    j = n(927578),
    M = n(240248),
    k = n(822123),
    U = n(535622),
    G = n(724511),
    V = n(484333),
    F = n(923861),
    B = n(732139),
    H = n(652215),
    Y = n(698279),
    W = n(788868),
    K = n(985018),
    z = n(586305);
let q = 0,
    X = 0,
    Z = (0, M.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    Q = (0, M.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    $ = (0, M.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    J = (0, M.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ee = (0, M.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, M.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    en = 16,
    er = (0, M.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ei = 41,
    ea = 33,
    es = (e) => e + 2 * er,
    eo = (e) => {
        let {
                collapsedSections: t,
                diversitySurrogate: n,
                emojiGrid: a,
                emojiSize: o,
                onEmojiSelect: c,
                onSelectSoundmoji: f,
                searchQuery: _,
                sectionDescriptors: m,
                setCollapsedSections: g,
                getEmojiItemProps: O,
                getEmojiRowProps: A,
                isScrolling: T,
                isUsingKeyboardNavigation: N,
                allowAnimatedEmoji: w,
                channelGuildId: P,
                channelId: L,
                messageId: j,
                isBurstReaction: M,
                listHeaderClassName: W,
                activeSectionIndex: q,
                upsellGlowOpacity: er,
                emojiListRef: es,
            } = e,
            eo = (0, h.p)(),
            el = i.useRef(H.An1),
            ec = i.useMemo(() => ("" !== n ? d.A.convert.toCodePoint(n) : ""), [n]),
            eu = (0, C.A)({
                location: "PremiumBrandRefreshCategorySection",
            }),
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
            ep = i.useCallback(
                function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        null != n &&
                            D.default.track(H.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: eo.location,
                                tab: Y.kx.EMOJI,
                                collapsed: !i,
                                guild_id: n.id,
                            }),
                        e === B.R2.SOUNDMOJI &&
                            D.default.track(H.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, {
                                collapsed: !i,
                            }),
                        g(r);
                },
                [eo, t, g],
            ),
            e_ = i.useCallback((e) => {
                let { columnIndex: t, visibleRowIndex: n } = e,
                    r = e.type === V.bm.SOUNDMOJI ? null : e.type === V.bm.EMOJI ? (0, x.N)(e.emoji) : e.name;
                el.current !== H.An1 && window.cancelAnimationFrame(el.current),
                    (el.current = window.requestAnimationFrame(() => {
                        E.Om.setInspectedExpressionPosition(t, n, y.t.MOUSE_EVENT),
                            E.Om.setSearchPlaceholder(r),
                            (el.current = H.An1);
                    }));
            }, []),
            eh = (0, u.bG)([S.HP], () => S.HP.hasHotspot(S._2.FAVORITE_EMOJI_TOOLTIP), []),
            em = i.useMemo(
                () =>
                    l().memoize((e, t) => {
                        let n = a[e],
                            i = m[t.sectionIndex],
                            s = () => {
                                var e;
                                null == (e = es.current) ||
                                    e.scrollToSectionTop(t.sectionIndex, {
                                        animate: !0,
                                    });
                            };
                        return (0, r.jsx)(
                            F.A,
                            {
                                emojiDescriptors: n,
                                emojiSize: o,
                                surrogateCodePoint: ec,
                                onInspect: e_,
                                onSelect: c,
                                onSelectSoundmoji: f,
                                getEmojiItemProps: O,
                                getEmojiRowProps: A,
                                isScrolling: T,
                                isUsingKeyboardNavigation: N,
                                rowIndex: e,
                                allowAnimatedEmoji: w,
                                showEmojiFavoriteTooltip: eh,
                                channelGuildId: P,
                                category: i.sectionId,
                                selectedItemClassName: z.__invalid_selectedItem,
                                channelId: L,
                                messageId: j,
                                isBurstReaction: M,
                                inNitroLockedSection: i.isNitroLocked,
                                handleScrollUpOnSectionCollapse: s,
                            },
                            e,
                        );
                    }),
                [a, m, o, ec, e_, c, f, O, A, T, N, w, eh, P, L, j, M, es],
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
                        let { guild: i, categoryId: a, type: o, sectionId: l } = n;
                        if (o === B.s.SEARCH_RESULTS) return;
                        let c =
                                o === B.s.GUILD
                                    ? null != i
                                        ? (0, r.jsx)(G.A, {
                                              guild: i,
                                              height: en,
                                              width: en,
                                          })
                                        : null
                                    : null != a
                                      ? (0, r.jsx)(U.A, {
                                            categoryId: a,
                                            height: en,
                                            width: en,
                                            size: "custom",
                                        })
                                      : null,
                            u = null == i ? void 0 : i.name;
                        null != a && (u = (0, k.Nu)(a, null == i ? void 0 : i.name));
                        let d = q === e,
                            f = n.isNitroLocked,
                            _ = f && !d,
                            h = f && d,
                            g =
                                o === B.s.SOUNDMOJI
                                    ? (0, r.jsx)(p.DUT, {
                                          className: z.f3,
                                          onClick: () => {
                                              (0, b.U)(Y.kx.SOUNDBOARD),
                                                  D.default.track(H.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                          },
                                          children: K.intl.string(K.t.rUEjBe),
                                      })
                                    : void 0;
                        return (0, r.jsx)(
                            v.A,
                            {
                                className: s()(z.wx, W, {
                                    [z.RA]: _,
                                    [z.sp]: h,
                                }),
                                icon: c,
                                isCollapsed: t.has(l),
                                onClick: () => ep(l, i),
                                trailing: g,
                                children: u,
                            },
                            l,
                        );
                    }),
                [m, t, ep, W, q],
            ),
            eE = (0, I.k0)(),
            eb = i.useCallback(
                (e, n) => {
                    let i = m[e],
                        a = ef(e),
                        o = ed(e);
                    return (0, r.jsx)(
                        "div",
                        {
                            className: s()(z.Wy, {
                                [z.YD]: e === m.length - 1,
                                [z.jl]: t.has(i.sectionId),
                                [z.cW]: i.isNitroLocked,
                                [z.N4]: eu,
                                [z.T5]: a || o,
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
                            ? (0, r.jsx)(R.ap, {})
                            : (0, r.jsx)(R.Ay, {
                                  glowOpacity: er,
                                  enableBrandRefresh: eu,
                              })
                        : ed(e)
                          ? (0, r.jsx)("div", {
                                className: s()(z.pQ, {
                                    [z.N4]: eu,
                                }),
                            })
                          : null,
                [er, ef, ed, eE, eu],
            ),
            eO = i.useCallback((e) => (ef(e) ? ei : ed(e) ? ea : 0), [ef, ed]),
            eA = i.useCallback(
                (e) => {
                    var n;
                    return e === m.length - 1 || t.has(null == (n = m[e]) ? void 0 : n.sectionId) || ef(e) || ed(e)
                        ? 0
                        : et;
                },
                [t, m, ef, ed],
            );
        return {
            listPadding: i.useMemo(() => ["" !== _ ? J : Z, Q, $, X], [_]),
            renderRow: em,
            renderSection: eb,
            renderSectionHeader: eg,
            renderSectionFooter: ey,
            sectionMarginBottom: eA,
            sectionHeaderHeight: i.useCallback((e) => (m[e].type === B.s.SEARCH_RESULTS ? 0 : ee), [m]),
            sectionFooterHeight: eO,
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
                sectionDescriptors: f,
                rowCountBySection: p,
                collapsedSections: y,
                setCollapsedSections: O,
                getEmojiItemProps: v,
                getEmojiRowProps: S,
                rowCount: I,
                isUsingKeyboardNavigation: C,
                channelGuildId: R,
                channelId: x,
                messageId: M,
                isBurstReaction: k,
                listHeaderClassName: U,
            } = e,
            G = i.useRef(!1),
            F = E.Om.useStore((e) => e.activeCategoryIndex),
            B = (0, b.RQ)((e) => e.searchQuery),
            Y = w.Sf.useSetting(),
            X = (0, u.bG)([P.default], () => P.default.getCurrentUser()),
            Z = (0, L.ki)(X),
            { location: Q } = (0, h.p)(),
            { analyticsLocations: $ } = (0, m.Ay)(),
            [J, ee] = i.useState(0),
            [et, en] = i.useState(!1),
            [er, ei] = i.useState(0),
            {
                listPadding: ea,
                renderRow: el,
                renderSection: eu,
                renderSectionHeader: ed,
                renderSectionFooter: ef,
                sectionMarginBottom: ep,
                sectionHeaderHeight: e_,
                sectionFooterHeight: eh,
            } = eo({
                collapsedSections: y,
                diversitySurrogate: t,
                emojiGrid: n,
                emojiSize: s,
                onEmojiSelect: o,
                onSelectSoundmoji: l,
                searchQuery: B,
                sectionDescriptors: f,
                setCollapsedSections: O,
                getEmojiItemProps: v,
                getEmojiRowProps: S,
                isScrolling: G,
                isUsingKeyboardNavigation: C,
                allowAnimatedEmoji: Y,
                channelGuildId: R,
                channelId: x,
                messageId: M,
                isBurstReaction: k,
                listHeaderClassName: U,
                activeSectionIndex: J,
                upsellGlowOpacity: er,
                emojiListRef: a,
            }),
            em = (e) => {
                ee(e), "" === B && E.Om.setActiveCategoryIndex(e);
            },
            eg = (0, A.ci)({
                listRef: a,
                searchQuery: B,
                nitroLockedSectionStates: f,
                setUpsellGlowOpacity: ei,
            }),
            eE = (0, A.Fk)({
                activeCategoryIndex: F,
                isScrolling: G,
                listRef: a,
                onActiveCategoryIndexChange: em,
                scrollOffset: q,
                searchQuery: B,
                disableForSearch: !1,
            });
        (0, A.FV)({
            searchQuery: B,
            activeCategoryIndex: F,
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
                            searchQuery: B,
                            setShowUpsell: en,
                        });
                },
                [eg, eE, a, f, B, en],
            ),
            ey = f.length > 0;

        function eO() {
            let e = (0, j.Dd)(W.PremiumTypes.TIER_2);
            return K.intl.format(K.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({
                        type: V.a2.PREMIUM,
                        emojiDescriptor: void 0,
                    });
                },
            });
        }

        function eA() {
            var e;
            let t = (0, T.qD)();
            return null != (e = (0, j.LE)(t, W.pe.TIER_2)) ? e : K.intl.string(K.t.BmJkbd);
        }
        return (
            i.useEffect(() => {
                et &&
                    D.default.track(H.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: W.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: Q,
                        location_stack: $,
                    });
            }, [Q, $, et]),
            i.useEffect(() => {
                "" !== B && (ei(0), en(!1));
            }, [B]),
            (0, r.jsxs)("div", {
                className: z.AD,
                children: [
                    ey
                        ? (0, r.jsx)(g.A, {
                              role: "none presentation",
                              className: z.p_,
                              listPadding: ea,
                              onScroll: eb,
                              renderRow: el,
                              renderSection: eu,
                              renderSectionHeader: ed,
                              renderSectionFooter: ef,
                              rowCount: I,
                              rowCountBySection: p,
                              rowHeight: es(s),
                              sectionHeaderHeight: e_,
                              sectionMarginBottom: ep,
                              sectionFooterHeight: eh,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, r.jsx)(_.A, {
                              message: K.intl.string(K.t.IxxiKF),
                              className: z.BZ,
                          }),
                    Z || c.Fr
                        ? null
                        : (0, r.jsx)(N.d, {
                              showUpsell: et,
                              text: eO(),
                              button: eA(),
                              buttonAnalyticsObject: {
                                  section: H.JJy.EMOJI_PICKER_FLOATING_UPSELL,
                              },
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
        (0, O.s)({
            listRef: t,
            searchQuery: i,
            nitroLockedSectionStates: n,
            scrollTop: r,
        }).areOnlyNitroLockedSectionsVisible,
    );
}
let ed = el;
