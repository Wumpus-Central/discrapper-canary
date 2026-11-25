(n.r(t), n.d(t, { EmojiPickerContainerContext: () => t0, default: () => t6 }), n(321073));
var i,
    s = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(649852),
    c = n.n(o),
    u = n(788413),
    d = n(855986),
    m = n(554146),
    f = n(319060),
    E = n(305866),
    I = n(554375),
    h = n(820284),
    g = n(212245),
    A = n(964486),
    p = n(765548),
    _ = n(793574),
    N = n(149468),
    C = n(688810),
    y = n(263775),
    x = n(379848),
    j = n(121681),
    O = n(770335),
    S = n(490035),
    T = n(934499),
    b = n(429573),
    R = n(807300),
    v = n(598770),
    P = n(451731),
    L = n(850992),
    M = n(151271),
    D = n(60587),
    w = n(887695),
    k = n(564068),
    U = n(450510),
    G = n(778705),
    F = n(253932),
    J = n(808728),
    K = n(287809),
    V = n(129230),
    B = n(474090),
    H = n(240248),
    W = n(822123),
    X = n(141862),
    z = n(316884),
    Y = n(370968),
    Z = n(200589),
    $ = n(435558),
    q = n.n($),
    Q = n(837381),
    ee = n(939249),
    et = n(866665),
    en = n(460905),
    ei = n(565645),
    es = n(775602),
    el = n(713517),
    er = n(113140),
    ea = n(318845),
    eo = n(407698),
    ec = n(941971),
    eu = n(531685),
    ed = n(535622),
    em = n(724511),
    ef = n(484333),
    eE = n(732139),
    eI = n(652215),
    eh = n(698279),
    eg = n(792996),
    eA = n(342379);
let ep = "expression-guild-",
    { itemIdForIndex: e_ } = (0, ea.J)(ep),
    eN = `${ep}view-emoji-packs`,
    eC = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    ey = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    ex = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    ej = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    eO = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    eS = (0, H.xI)(eA.__invalid_unicodeCategoryShortcutHeight),
    eT = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eb = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eR = ex + ey + 2 * eO,
    ev = eT + 2 * eb,
    eP = eC + ey,
    eL = eP + ev,
    eM = ex + ej + 2 * eO,
    eD = ex + 2 * eO + 2 * ey + eT;
function ew(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: i,
            categories: r,
            category: o,
            handleCategorySelect: c,
            isWindowFocused: u,
            useReducedMotion: d,
        } = e,
        m = l.useRef(null),
        { isHoveringOrFocusing: f } = (0, el.A)(m),
        E = (0, Q.rm)(e_(n)),
        I = o.type === eE.s.GUILD || o.type === eE.s.PACK ? null : o.id,
        h = t === n,
        g = !d && u,
        A = o.type === eE.s.GUILD ? o.guild : null,
        p = o.type === eE.s.PACK ? o.pack : null,
        _ = (0, s.jsxs)(ee.D, {
            innerRef: m,
            ...E,
            "aria-label": o.type === eE.s.PACK ? o.pack.name : (0, W.wt)(o, A),
            className: a()({
                [eA.ZG]: null != A,
                [eA.td]: null != p,
                [eA.Q0]: null != p && h,
                [eA.Bj]: null == A && null == p,
                [eA.s6]: null == A && null == p && h,
                [eA.xg]: o.type === eE.s.RECENT,
            }),
            onClick: () => {
                (null != A &&
                    V.default.track(eI.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eh.kx.EMOJI,
                        guild_id: A.id,
                    }),
                    c(n));
            },
            children: [
                (0, s.jsx)("div", {
                    className: eA.a$,
                    children: (0, s.jsx)(ec.A, { hovered: f, selected: h, size: "small" }),
                }),
                o.type === eE.s.GUILD
                    ? (0, s.jsx)(em.A, { guild: o.guild, isSelected: h, shouldAnimate: g, isLocked: o.isNitroLocked })
                    : null,
                null != p
                    ? (0, s.jsx)(ei.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: g,
                          className: eA.ty,
                          emojiId: p.representativeEmojiId,
                      })
                    : null,
                null == A && null != I
                    ? (0, s.jsx)(ed.A, { categoryId: I, className: eA.Yl, height: ex, width: ex, size: "custom" })
                    : null,
            ],
        }),
        N = r[n + 1],
        C = r[n - 1],
        y = null != p && null != C && C.type !== eE.s.PACK,
        x = null != p && N?.type !== eE.s.PACK,
        j = null != N && o.type === eE.s.GUILD && N.type !== eE.s.GUILD;
    return null != A
        ? (0, s.jsxs)(l.Fragment, {
              children: [
                  (0, s.jsx)(eo.Q, { guild: A, children: _ }),
                  j ? (0, s.jsx)("hr", { className: eA.ny }, "separator") : null,
              ],
          })
        : null != p
          ? (0, s.jsxs)(l.Fragment, {
                children: [
                    y ? (0, s.jsx)("hr", { className: eA.ny }) : null,
                    (0, s.jsx)(et.m, { ariaHidden: !0, position: "right", text: p.name, children: _ }),
                    x ? (0, s.jsx)("hr", { className: eA.ny }) : null,
                ],
            })
          : _;
}
let ek = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: r,
            channel: o,
            fallbackGuildId: c,
            showOnlyUnicode: u = !1,
            pinnedPacks: m,
            onViewEmojiPacks: f,
            showEmojiPacksDiscovery: E,
            onDismissEmojiPacksDiscovery: I,
        } = e,
        h = L.Om.useStore((e) => e.activeCategoryIndex),
        A = (0, ef.cr)({ sectionDescriptors: i, emojiListRef: n }),
        p = (0, g.p)(),
        _ = (0, W.ss)(r, o, { guildId: o?.guild_id ?? c }),
        N = l.useMemo(() => (0, Z.t)(u ? (0, W.CQ)() : _, m), [_, m, u]),
        C = l.useRef(null),
        y = (0, d.bG)([eu.A], () => eu.A.isFocused()),
        x = (0, d.bG)([es.Ay], () => es.Ay.useReducedMotion, []),
        j = l.useMemo(
            () =>
                q().memoize(
                    (e, t) => {
                        let n = N[t];
                        if (null != n)
                            return (0, s.jsx)(
                                ew,
                                {
                                    activeIndex: h,
                                    analyticsContext: p,
                                    categories: N,
                                    category: n,
                                    categoryIndex: t,
                                    handleCategorySelect: A,
                                    isWindowFocused: y,
                                    useReducedMotion: x,
                                },
                                t,
                            );
                    },
                    (e, t) => t,
                ),
            [h, p, N, A, y, x],
        ),
        O = l.useMemo(() => [8, 8, 0, 8], []),
        S = null != f ? eD : 0,
        T = l.useMemo(() => {
            if (null != f)
                return function () {
                    return (0, s.jsx)(
                        er.A,
                        { listItemId: eN, onClick: f, showDiscoveryDot: E, onDismissDiscovery: I },
                        "view-emoji-packs",
                    );
                };
        }, [f, E, I]),
        b = l.useCallback(
            (e, t) => {
                let n = N[t];
                if (n.type === eE.s.RECENT) return eR;
                if (n.type === eE.s.PACK) {
                    let e = N[t - 1],
                        n = N[t + 1];
                    return eP + (Number(null != e && e.type !== eE.s.PACK) + Number(n?.type !== eE.s.PACK)) * ev;
                }
                if (n.type === eE.s.GUILD) {
                    let e = N[t + 1];
                    return null != e && e.type !== eE.s.GUILD ? eL : eP;
                }
                return eM;
            },
            [N],
        ),
        {
            nonUnicodeCategoryCount: R,
            firstUnicodeCategoryIndex: v,
            firstUnicodeCategoryOffsetTop: P,
            rowCountBySection: M,
        } = l.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            N.forEach((s) => {
                s.type === eE.s.GUILD || s.type === eE.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === eE.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = N.some((e) => e.type === eE.s.PACK) ? (N[0]?.type === eE.s.PACK ? 1 : 2) : 0,
                r = S + eR + t * eP + eL + l * ev;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: s,
            };
        }, [N, S]),
        [D, w] = l.useState(!0);
    l.useLayoutEffect(() => {
        w(R >= 7);
    }, [R]);
    let k = l.useCallback(
            (e) => {
                let t = C.current?.getListDimensions();
                null == t || (e + t.height - eT >= P ? w(!1) : w(!0));
            },
            [P],
        ),
        U = l.useCallback(
            (e) => {
                (e(v), C.current?.scrollTo(P));
            },
            [P, v],
        ),
        G = l.useCallback(
            (e, t) => {
                let n = N[e];
                if (null == n) return 0;
                let i = D ? eS : 0;
                if (n.type === eE.s.RECENT) return t ? 0 : ej;
                if (n.type === eE.s.PACK) return t ? i : ey;
                if (n.type === eE.s.GUILD) {
                    let n = N[e + 1];
                    return null != n && n.type !== eE.s.GUILD ? (t ? eT + -2 * eb + ey + i : ey) : t ? i : ey;
                }
                return t ? ey + i : 2 * ey;
            },
            [N, D],
        ),
        F = l.useMemo(
            () =>
                function (e, t) {
                    return (0, s.jsx)(l.Fragment, { children: t }, e);
                },
            [],
        ),
        J = D ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(ea.A, {
        categoryListRef: C,
        expressionsListRef: n,
        className: t,
        store: L.Om,
        categories: N,
        listPadding: O,
        onScroll: k,
        renderCategoryListItem: j,
        renderSection: F,
        rowCount: N.length,
        categoryHeight: b,
        getScrollOffsetForIndex: G,
        rowCountBySection: M,
        navId: "emoji-picker-categories",
        itemIdPrefix: ep,
        renderListHeader: T,
        listHeaderHeight: S,
        children: (e) =>
            R >= 7 &&
            (0, s.jsx)(
                ee.D,
                {
                    "aria-hidden": !D,
                    "aria-label": eg.intl.string(eg.t.dT0ctw),
                    className: a()(eA.KB, { [eA.h_]: !D }),
                    tabIndex: D ? 0 : -1,
                    onClick: () => U(e),
                    children: (0, s.jsx)(en.ReactionIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: ex,
                        width: ex,
                    }),
                },
                J,
            ),
    });
};
var eU = n(624751),
    eG = n(780042),
    eF = n(821609),
    eJ = n(644508),
    eK = n(824832),
    eV = n(267102),
    eB = n(242812);
function eH(e) {
    let { channel: t, closePopout: n } = e,
        i = l.useRef(null),
        r = l.useRef(0),
        [a, o] = l.useState(!1),
        [c, u] = l.useState(!1),
        d = (0, eV.Us)() === eI.BRT.OVERLAY,
        m = c || a,
        f = l.useCallback(
            async (e, i, s) => {
                (u(!0),
                    n(),
                    await (0, eJ.f)({
                        userImage: { data: e, file: i, image: s },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eI.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eI.liQ.GUILD_CHANNEL : eI.liQ.DM_CHANNEL,
                        },
                    }),
                    (r.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(et.m, {
                asContainer: !0,
                text: d ? eg.intl.string(eg.t.RMbedC) : null,
                children: (0, s.jsx)(eF.$, {
                    text: eg.intl.string(eg.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        (N.Ay.trackWithMetadata(eI.HAw.EXPRESSION_PICKER_ADD_EMOJI_CLICKED, {
                            guild_id: t?.guild_id ?? null,
                            channel_id: t?.id ?? null,
                            location_section: eI.JJy.EXPRESSION_PICKER,
                            location_page: t?.guild_id != null ? eI.liQ.GUILD_CHANNEL : eI.liQ.DM_CHANNEL,
                        }),
                            i.current?.activateUploadDialogue());
                    },
                    disabled: m || d,
                }),
            }),
            (0, s.jsx)("div", {
                className: eB.F,
                children: (0, s.jsx)(eK.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, r.current),
            }),
        ],
    });
}
var eW = n(4703),
    eX = n(672594),
    ez = n(307731),
    eY = n(381575);
let eZ = function (e) {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: l,
            emojiListRef: r,
            onKeyDown: o,
            onFocus: c,
            autoFocus: u,
            searchBarRef: d,
            diversitySurrogate: m,
            isBurstReaction: f,
            onBurstReactionToggle: E,
            burstToggleRef: I,
            renderHeader: h,
            showAddEmojiButton: g = !0,
            closePopout: A,
        } = e,
        p = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eX.A, {
                    emojiListRef: r,
                    gridNavigatorId: eE.lq,
                    onKeyDown: o,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, W.wT)(i, f),
                }),
                i === ez.EmojiIntention.REACTION ? (0, s.jsx)(eG.A, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, s.jsx)(eW.A, { searchBarRef: d, className: eY.fx, selectedSurrogate: m }),
                i !== ez.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, s.jsx)(eH, { channel: t, closePopout: A }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: a()(eY.wx, l), children: null != h ? h(p) : p });
};
var e$ = n(462887),
    eq = n(403581),
    eQ = n(834730),
    e0 = n(956396),
    e1 = n(371680),
    e2 = n(413599),
    e3 = n(71393),
    e5 = n(486020),
    e4 = n(690521),
    e8 = n(236432),
    e6 = n(977566);
function e9(e) {
    return null != e && "animated" in e;
}
let e7 = l.memo(function (e) {
    let t,
        i,
        { className: r, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        m = L.Om.useStore((e) => e.inspectedExpressionPosition),
        f = l.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = m;
            return a[e]?.[t];
        }, [a, m]);
    switch (f?.type) {
        case ef.bm.EMOJI:
            t = f?.emoji;
            break;
        case ef.bm.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, d.bG)([e3.A], () => (null !== t && t.type === O.i.GUILD ? e3.A.getGuild(t.guildId) : null), [t]),
        I = (0, d.bG)([e0.A], () => (null !== t && t.type === O.i.PACK ? e0.A.getPack(t.packId) : null), [t]),
        h = (0, d.bG)([eu.A], () => eu.A.isFocused()),
        g = (0, d.bG)([es.Ay], () => es.Ay.useReducedMotion, []),
        A = F.Sf.useSetting(),
        p = (0, W.O7)(o, e9(t) ? t : null),
        _ = (0, d.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: N } = (0, z.A)(o, c),
        C = f?.type === ef.bm.EMOJI ? f.subCategory : eE.tm.NONE;
    if (
        (l.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    e9(t) &&
                    C !== eE.tm.NONE &&
                    (C === eE.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === O.i.GUILD &&
                        (0, P.mz)(t.guildId, N[0].id),
                    null != m.source &&
                        (0, W.yB)({
                            emoji: t,
                            subCategory: C,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: C === eE.tm.NEWLY_ADDED_EMOJI && v.A.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: l, theme: r } = t;
            if (e9(e)) {
                let t = null != e.id ? e5.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, s.jsx)(eQ.E, {
                          variant: "body-md/normal",
                          className: e6.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, s.jsx)("img", { alt: (0, e4.N)(e) ?? "", src: t, className: e6.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return l.has(e.guildId)
                    ? (0, s.jsx)("img", { className: e6.Kk, src: (0, e$.M)(r) ? a : o, alt: "" })
                    : (0, s.jsx)("img", { className: e6.Kk, src: (0, e$.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: A, sectionsExpandedFromThreeRows: _, theme: e2.A.theme }),
        x =
            null != E
                ? (0, s.jsx)(em.A, { className: e6.__invalid_guildIcon, guild: E, shouldAnimate: !g && h })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? eg.intl.string(eg.t["/K2RDH"])
                : eg.intl.string(eg.t.NZI2Zk)
            : (0, e4.N)(t);
    let S = (function (e) {
        let { inspectedEmoji: t, guild: n, pack: i } = e,
            l = e9(t);
        return null != n && l
            ? eg.intl.format(eg.t.KFW2aY, { guildName: n.name })
            : null != i && l
              ? eg.intl.format(e8.default.VEfeux, {
                    packName: (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(eq.NitroWheelIcon, {
                                size: "custom",
                                width: 10,
                                height: 10,
                                color: "currentColor",
                                className: e6.C5,
                                "aria-label": eg.intl.string(e8.default.leUgZw),
                            }),
                            " ",
                            i.name,
                        ],
                    }),
                })
              : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E, pack: I });
    return (0, s.jsx)(e1.A, {
        className: r,
        graphicPrimary: y,
        graphicSecondary: x,
        titlePrimary: i,
        titleSecondary: S,
        isFavorite: p,
        emojiSubCategory: C,
    });
});
n(30146);
var te = n(607399),
    tt = n(833272),
    tn = n(123292),
    ti = n(646514),
    ts = n(765178),
    tl = n(331322),
    tr = n(537652),
    ta = n(962125),
    to = n(856459),
    tc = n(240864),
    tu = n(286509),
    td = n(526292),
    tm = n(89366),
    tf = n(739053),
    tE = n(82498),
    tI = n(202639),
    th = n(414872),
    tg = n(521440),
    tA = n(448645),
    tp = n(559106),
    t_ = n(304072),
    tN = n(736653),
    tC = n(189551),
    ty = n(594061),
    tx = n(771104),
    tj = n(442433),
    tO = n(7584),
    tS = n(147421),
    tT = n(723702),
    tb = n(379350),
    tR = n(537911);
function tv(e) {
    let t,
        {
            emoji: n,
            isFavorite: i,
            isLargeSize: l,
            isMediumSize: r,
            isInspected: o,
            isDisabled: c,
            showPulse: u,
            columnIndex: m,
            rowIndex: f,
            size: E,
            surrogateCodePoint: I,
            allowAnimatedEmoji: h,
            selectedItemClassName: g,
            inNitroLockedSection: A,
            ref: p,
            ..._
        } = e,
        N = (0, d.bG)([e3.A], () => (n.type === O.i.GUILD ? e3.A.getGuild(n.guildId) : void 0), [n]);
    return (0, s.jsx)(tp.vN, {
        children: (0, s.jsx)("button", {
            ..._,
            className: a()(tR._X, { [tR.lG]: l, [tR.Lh]: r, [tR.Bx]: o, [g ?? ""]: o, [tR.TV]: u }),
            "data-type": D.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: p,
            children: (0, s.jsx)(tb.A, {
                "aria-label":
                    ((t = (0, e4.N)(n)),
                    (N?.name != null &&
                        (t = eg.intl.formatToPlainString(eg.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? eg.intl.formatToPlainString(eg.t["9FI9Z0"], { names: t })
                        : t),
                columnIndex: m,
                rowIndex: f,
                emoji: n,
                size: E,
                surrogateCodePoint: I,
                allowAnimatedEmoji: h,
                isLocked: c && !A,
            }),
        }),
    });
}
function tP(e) {
    let {
            descriptor: t,
            emojiItemKey: i,
            isInspected: r,
            rowIndex: a,
            channelGuildId: o,
            onInspect: c,
            onSelect: u,
            isScrolling: m,
            isUsingKeyboardNavigation: f,
            showEmojiFavoriteTooltip: E,
            surrogateCodePoint: I,
            selectedItemClassName: h,
            getEmojiItemProps: g,
            isMediumSize: A,
            isLargeSize: p,
            pulseItemKey: _,
            allowAnimatedEmoji: N,
            setPulseItemKey: C,
            messageId: y,
            isBurstReaction: x,
            rowPosition: S,
            inNitroLockedSection: T,
        } = e,
        [b, R] = l.useState(""),
        v = (0, d.bG)([es.Ay], () => es.Ay.useReducedMotion),
        P = (0, d.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(o), [o]),
        L = l.useRef(null),
        { emoji: M, size: D, isDisabled: w, columnIndex: k } = t;
    function G() {
        m.current || f.current || c(t);
    }
    let { ref: F, tabIndex: J, onFocus: K, ...V } = g(k, a) ?? {},
        B =
            b !== `${k}:${a}`
                ? (0, s.jsx)(tv, {
                      ref: F,
                      emoji: M,
                      isFavorite: P.isFavoriteEmojiWithoutFetchingLatest(M),
                      isLargeSize: p,
                      isMediumSize: A,
                      isInspected: r,
                      isDisabled: w,
                      showPulse: _ === i,
                      allowAnimatedEmoji: N,
                      onFocus: K ?? G,
                      onMouseMove: G,
                      onClick: (e) => {
                          if (
                              null != L.current &&
                              null != S &&
                              null != y &&
                              !e.shiftKey &&
                              null != M.name &&
                              x &&
                              !v &&
                              N
                          ) {
                              let e = null == M.id ? tO.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = L.current.getBoundingClientRect();
                              ((t.x = S.x + (k + 1) * D), R(`${k}:${a}`), (0, tS.h)(y, e, M.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), m.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !j.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) &&
                                  C(i),
                                  (0, U.sF)(U._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, tj.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e(73500),
                                  n.e(496715),
                                  n.e(904774),
                                  n.e(446132),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, s.jsx)(e, { ...t, showFavoriteOnly: M.type === O.i.PACK });
                          });
                      },
                      tabIndex: J,
                      columnIndex: k,
                      rowIndex: a,
                      size: D,
                      surrogateCodePoint: I,
                      selectedItemClassName: h,
                      inNitroLockedSection: T,
                  })
                : null;
    return (0, l.createElement)(
        "li",
        { ...V, key: i, ref: L },
        E
            ? (0, s.jsx)(et.m, {
                  text: eg.intl.formatToPlainString(eg.t.glqNsf, { key: (0, tT.cX)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let tL = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: r,
            onInspect: o,
            surrogateCodePoint: c,
            getEmojiItemProps: u,
            getEmojiRowProps: d,
            isScrolling: m,
            isUsingKeyboardNavigation: f,
            rowIndex: E,
            allowAnimatedEmoji: I,
            showEmojiFavoriteTooltip: h,
            channelGuildId: g,
            category: A,
            selectedItemClassName: p,
            messageId: _,
            isBurstReaction: N,
            inNitroLockedSection: C,
            handleScrollUpOnSectionCollapse: y,
        } = e,
        x = n(619508),
        j = n(404828),
        S = n(600003),
        T = n(318121),
        b = n(443336),
        R = n(258901),
        P = n(135974),
        M = n(8013),
        D = (0, tN.Ay)(),
        w = L.Om.getState(),
        [k, U] = l.useState(w.inspectedExpressionPosition),
        [G, F] = (0, t_.A)(null, 300),
        J = l.useRef(null);
    (l.useEffect(
        () =>
            L.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => U(e),
            ),
        [],
    ),
        l.useEffect(() => {
            ty.bW.loadIfNecessary();
        }, []));
    let K = i === eE.as.LARGE,
        B = i === eE.as.MEDIUM;
    function H(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case ef.bm.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = k.rowIndex === n && k.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, e$.M)(D)
                                ? R
                                : M
                            : (0, e$.M)(D)
                              ? x
                              : j
                        : c
                          ? (0, e$.M)(D)
                              ? b
                              : P
                          : (0, e$.M)(D)
                            ? S
                            : T,
                    I = eg.intl.string(e.sectionCollapsedToThreeRows ? eg.t.NZI2Zk : eg.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: r,
                            icon: c,
                            ariaLabel: d,
                            shouldShowRoundHighlight: I,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: h, columnIndex: g } = e,
                        { ref: A, tabIndex: _, onFocus: N, ...C } = u(g, E) ?? {},
                        y = k.rowIndex === h && k.columnIndex === g;
                    function x() {
                        m.current || f.current || o(e);
                    }
                    return (0, l.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, s.jsx)(tp.vN, {
                            children: (0, s.jsx)("button", {
                                "aria-label": d,
                                ref: A,
                                className: a()(tR._X, {
                                    [tR.lG]: K,
                                    [tR.Lh]: B,
                                    [tR.Bx]: y && !I,
                                    [p ?? ""]: y,
                                    [tR.TV]: G === t,
                                }),
                                onFocus: N ?? x,
                                onMouseOver: x,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                onClick: r,
                                tabIndex: _,
                                children: c,
                            }),
                        }),
                    );
                })({
                    handleSelect: function (t) {
                        e.type !== ef.bm.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (r(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, tC.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || y(),
                                V.default.track(eI.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, s.jsx)("img", { className: tR.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case ef.bm.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    l = k.rowIndex === i && k.columnIndex === n;
                return (0, s.jsx)(
                    tP,
                    {
                        rowIndex: E,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: l,
                        isScrolling: m,
                        isUsingKeyboardNavigation: f,
                        surrogateCodePoint: c,
                        allowAnimatedEmoji: I,
                        selectedItemClassName: p,
                        onSelect: r,
                        onInspect: o,
                        channelGuildId: g,
                        getEmojiItemProps: u,
                        isMediumSize: B,
                        isLargeSize: K,
                        pulseItemKey: G,
                        setPulseItemKey: F,
                        showEmojiFavoriteTooltip: h,
                        messageId: _,
                        isBurstReaction: N,
                        rowPosition: J?.current?.getBoundingClientRect(),
                        inNitroLockedSection: C,
                    },
                    t,
                );
            }
        }
    }
    function W(e) {
        return (0, s.jsx)("ul", {
            ...d(E),
            className: a()(tR.ND, { [tR.HO]: K, [tR.X$]: B }),
            ref: J,
            children: e.map(H),
        });
    }
    if (A !== eE.s.TOP_GUILD_EMOJI) return W(t);
    let X = t.filter(
            (e) =>
                e.subCategory === eE.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === eE.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === O.i.GUILD &&
                    !v.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        z = t.filter(
            (e) =>
                e.subCategory === eE.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === O.i.GUILD &&
                v.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === z.length
        ? W(t)
        : (0, s.jsxs)("div", {
              className: tR.Ng,
              children: [
                  (0, s.jsx)("div", { className: a()(tR.V6, { [tR.$3]: 0 === X.length }), children: W(X) }),
                  (0, s.jsxs)("div", {
                      className: tR.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: a()(tR.eE, { [tR.eM]: 1 === z.length, [tR.Wk]: X.length > 0 }),
                              children: W(z),
                          }),
                          (0, s.jsxs)("div", {
                              className: a()(tR.lD, { [tR.EI]: K, [tR.qU]: B, [tR.Wk]: X.length > 0 }),
                              children: [
                                  (0, s.jsx)(tx.A, { foreground: tR.rI }),
                                  (0, s.jsx)(eQ.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-overlay-light",
                                      children: eg.intl.string(eg.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var tM = n(682901),
    tD = n(650583),
    tw = n(618723);
let tk = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    tU = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    tG = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    tF = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    tJ = (0, H.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tK = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    tV = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    tB = to.D + (0, H.xI)(ti.A.space.PX_10),
    tH = tB + tF,
    tW = l.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: r,
                emojiListRef: o,
                emojiSize: c,
                onEmojiSelect: u,
                onRemovePack: m,
                onViewEmojiPacks: f,
                showEmojiPacksDiscovery: E,
                onDismissEmojiPacksDiscovery: I,
                setUpsellConfigs: h,
                sectionDescriptors: A,
                rowCountBySection: p,
                collapsedSections: N,
                setCollapsedSections: y,
                getEmojiItemProps: x,
                getEmojiRowProps: j,
                rowCount: O,
                isUsingKeyboardNavigation: T,
                channelGuildId: b,
                messageId: R,
                isBurstReaction: v,
                listHeaderClassName: P,
            } = e,
            k = +!!(0, S.H)("emoji_picker_list"),
            G = (0, M.RQ)((e) => e.searchQuery),
            J = "" !== G,
            H = E && null != f,
            X = 0;
        H && (X = J ? tH : tB);
        let z = l.useCallback(
                (e) => {
                    (o.current?.scrollTo(0), I(e));
                },
                [o, I],
            ),
            Y = l.useCallback(
                () =>
                    H && null != f
                        ? (0, s.jsx)(
                              "div",
                              {
                                  className: a()(tw.cn, { [tw.tY]: J }),
                                  onKeyDown: (e) => {
                                      e.key !== tD.dh.ESCAPE && e.stopPropagation();
                                  },
                                  children: (0, s.jsx)(to.A, { onViewEmojiPacks: f, onDismiss: z }),
                              },
                              "discovery-banner",
                          )
                        : null,
                [H, J, f, z],
            ),
            Z = l.useRef(!1),
            $ = L.Om.useStore((e) => e.activeCategoryIndex),
            Q = F.Sf.useSetting(),
            ee = (0, d.bG)([K.default], () => K.default.getCurrentUser()),
            et = (0, B.ki)(ee),
            { location: en } = (0, g.p)(),
            { analyticsLocations: ei } = (0, C.Ay)(),
            [es, el] = l.useState(0),
            [er, ea] = l.useState(!1),
            {
                listPadding: eo,
                renderRow: ec,
                renderSection: eu,
                renderSectionHeader: eA,
                renderSectionFooter: ep,
                sectionMarginBottom: e_,
                sectionHeaderHeight: eN,
                sectionFooterHeight: eC,
            } = (function (e) {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: i,
                        emojiSize: r,
                        onEmojiSelect: o,
                        onRemovePack: c,
                        searchQuery: u,
                        sectionDescriptors: m,
                        setCollapsedSections: f,
                        getEmojiItemProps: E,
                        getEmojiRowProps: I,
                        isScrolling: h,
                        isUsingKeyboardNavigation: A,
                        allowAnimatedEmoji: p,
                        channelGuildId: _,
                        messageId: N,
                        isBurstReaction: C,
                        listHeaderClassName: y,
                        activeSectionIndex: x,
                        emojiListRef: j,
                        hasListHeader: O,
                    } = e,
                    S = (0, g.p)(),
                    T = l.useRef(0),
                    b = l.useMemo(() => ("" !== n ? tt.A.convert.toCodePoint(n) : ""), [n]),
                    R = l.useCallback(
                        (e) => {
                            let t = m[e],
                                n = m[e + 1];
                            return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [m],
                    ),
                    v = l.useCallback(
                        (e) => {
                            if (e >= m.length - 1) return !1;
                            let t = m[e],
                                n = m[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [m],
                    ),
                    P = l.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                s = t.has(e);
                            (s ? i.delete(e) : i.add(e),
                                null != n &&
                                    V.default.track(eI.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: S.location,
                                        tab: eh.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [S, t, f],
                    ),
                    M = l.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === ef.bm.EMOJI ? (0, e4.N)(e.emoji) : e.name;
                        (0 !== T.current && window.cancelAnimationFrame(T.current),
                            (T.current = window.requestAnimationFrame(() => {
                                (L.Om.setInspectedExpressionPosition(t, n, D.t.MOUSE_EVENT),
                                    L.Om.setSearchPlaceholder(i),
                                    (T.current = 0));
                            })));
                    }, []),
                    w = (0, d.bG)([U.HP], () => U.HP.hasHotspot(U._2.FAVORITE_EMOJI_TOOLTIP), []),
                    k = l.useMemo(
                        () =>
                            q().memoize((e, t) => {
                                let n = i[e],
                                    l = m[t.sectionIndex];
                                return (0, s.jsx)(
                                    tL,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: r,
                                        surrogateCodePoint: b,
                                        onInspect: M,
                                        onSelect: o,
                                        getEmojiItemProps: E,
                                        getEmojiRowProps: I,
                                        isScrolling: h,
                                        isUsingKeyboardNavigation: A,
                                        rowIndex: e,
                                        allowAnimatedEmoji: p,
                                        showEmojiFavoriteTooltip: w,
                                        channelGuildId: _,
                                        category: l.sectionId,
                                        selectedItemClassName: tw.__invalid_selectedItem,
                                        messageId: N,
                                        isBurstReaction: C,
                                        inNitroLockedSection: l.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            j.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, m, r, b, M, o, E, I, h, A, p, w, _, N, C, j],
                    );
                l.useEffect(() => () => k.cache?.clear?.(), [k]);
                let G = l.useMemo(
                        () =>
                            q().memoize((e) => {
                                let n = m[e];
                                if (null == n) return;
                                let { guild: i, pack: l, categoryId: r, type: o, sectionId: u } = n;
                                if (o === eE.s.SEARCH_RESULTS) return;
                                let d = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === eE.s.PACK
                                            ? (0, s.jsx)(eq.NitroWheelIcon, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === eE.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, s.jsx)(em.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, s.jsx)(ed.A, {
                                                      categoryId: i,
                                                      height: 16,
                                                      width: 16,
                                                      size: "custom",
                                                  });
                                    })(n),
                                    f = l?.name ?? i?.name;
                                null != r && (f = (0, W.Nu)(r, i?.name));
                                let E = x === e,
                                    I = n.isNitroLocked,
                                    h = I && !E,
                                    g = I && E,
                                    A =
                                        o === eE.s.PACK
                                            ? (0, s.jsx)("div", {
                                                  className: tw.uE,
                                                  children: (0, s.jsx)(tn.Q, {
                                                      text: eg.intl.string(e8.default["2zxYCx"]),
                                                      textVariant: "body-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${eg.intl.string(e8.default["2zxYCx"])} ${l.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== tD.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(l.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    tu.A,
                                    {
                                        className: a()(tw.wx, y, { [tw.RA]: h, [tw.sp]: g }),
                                        icon: d,
                                        isCollapsed: t.has(u),
                                        onClick: () => P(u, i),
                                        trailing: A,
                                        children: f,
                                    },
                                    u,
                                );
                            }),
                        [m, t, P, y, x, c],
                    ),
                    F = (0, td.k0)(),
                    J = l.useCallback(
                        (e, n) => {
                            let i = m[e],
                                l = v(e),
                                r = R(e),
                                o = i.type === eE.s.PACK && 0 === i.count;
                            return (0, s.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: a()(tw.Wy, {
                                        [tw.YD]: e === m.length - 1,
                                        [tw.jl]: t.has(i.sectionId) || o,
                                        [tw.cW]: i.isNitroLocked,
                                        [tw.T5]: l || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, m, v, R],
                    ),
                    K = l.useCallback(
                        (e) =>
                            v(e)
                                ? F
                                    ? (0, s.jsx)(th.a, {})
                                    : (0, s.jsx)(th.A, {})
                                : R(e)
                                  ? (0, s.jsx)("div", { className: tw.pQ })
                                  : null,
                        [v, R, F],
                    ),
                    B = l.useCallback((e) => (v(e) ? 41 : 33 * !!R(e)), [v, R]),
                    H = l.useCallback(
                        (e) =>
                            e === m.length - 1 ||
                            t.has(m[e]?.sectionId) ||
                            (m[e]?.type === eE.s.PACK && m[e]?.count === 0) ||
                            v(e) ||
                            R(e)
                                ? 0
                                : tK,
                        [t, m, v, R],
                    );
                return {
                    listPadding: l.useMemo(() => ["" === u || O ? tk : tF, tU, tG, 0], [u, O]),
                    renderRow: k,
                    renderSection: J,
                    renderSectionHeader: G,
                    renderSectionFooter: K,
                    sectionMarginBottom: H,
                    sectionHeaderHeight: l.useCallback((e) => (m[e].type === eE.s.SEARCH_RESULTS ? 0 : tJ), [m]),
                    sectionFooterHeight: B,
                };
            })({
                collapsedSections: N,
                diversitySurrogate: i,
                emojiGrid: r,
                emojiSize: c,
                onEmojiSelect: u,
                onRemovePack: m,
                searchQuery: G,
                sectionDescriptors: A,
                setCollapsedSections: y,
                getEmojiItemProps: x,
                getEmojiRowProps: j,
                isScrolling: Z,
                isUsingKeyboardNavigation: T,
                allowAnimatedEmoji: Q,
                channelGuildId: b,
                messageId: R,
                isBurstReaction: v,
                listHeaderClassName: P,
                activeSectionIndex: es,
                emojiListRef: o,
                hasListHeader: H,
            }),
            ey = l.useCallback(
                (e) => {
                    let t = o.current?.getSectionDescriptors();
                    null == t ||
                        el(
                            Math.max(
                                t.findLastIndex((t) => t.offset.top <= e + k),
                                0,
                            ),
                        );
                },
                [o, k],
            );
        l.useLayoutEffect(() => {
            ey(o.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [o, ey, A, p, G, X]);
        let ex = (0, w.Fk)({
            activeCategoryIndex: $,
            isScrolling: Z,
            listRef: o,
            onActiveCategoryIndexChange: function (e) {
                "" === G && L.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: k,
            searchQuery: G,
            disableForSearch: !1,
        });
        (0, w.FV)({ searchQuery: G, activeCategoryIndex: $, listRef: o });
        let ej = l.useCallback(
                (e) => {
                    (ex(e),
                        ey(e),
                        tX({
                            emojiListRef: o,
                            sectionDescriptors: A,
                            scrollTop: e,
                            searchQuery: G,
                            setShowUpsell: ea,
                        }));
                },
                [ex, ey, o, A, G, ea],
            ),
            eO = A.length > 0;
        (l.useEffect(() => {
            er &&
                (V.default.track(eI.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: tM.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: en,
                    location_stack: ei,
                }),
                (0, tf.sq)(eI.U7l.PREMIUM_UPSELL_VIEWED, ei, () => (0, tE.uq)(tM.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [en, ei, er]),
            l.useEffect(() => {
                "" !== G && ea(!1);
            }, [G]));
        let eS = l.useRef(null);
        l.useEffect(
            () => (
                clearTimeout(eS.current),
                (eS.current = setTimeout(() => {
                    (eO
                        ? ts.O.announce(eg.intl.string(eg.t.uZ4F2O), "polite")
                        : ts.O.announce(eg.intl.string(eg.t.IxxiKF), "assertive"),
                        (eS.current = null));
                }, 200)),
                () => {
                    clearTimeout(eS.current);
                }
            ),
            [eO, G],
        );
        let eT = (0, s.jsx)(eQ.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: eg.intl.string(eg.t.IxxiKF),
        });
        return (0, s.jsxs)("div", {
            className: tw.AD,
            children: [
                eO
                    ? (0, s.jsx)(ta.A, {
                          role: "none presentation",
                          className: tw.p_,
                          listPadding: eo,
                          renderListHeader: H ? Y : void 0,
                          listHeaderHeight: H ? X : void 0,
                          onScroll: ej,
                          renderRow: ec,
                          renderSection: eu,
                          renderSectionHeader: eA,
                          renderSectionFooter: ep,
                          rowCount: O,
                          rowCountBySection: p,
                          rowHeight: c + 2 * tV,
                          sectionHeaderHeight: eN,
                          sectionMarginBottom: e_,
                          sectionFooterHeight: eC,
                          stickyHeaders: !0,
                          ref: o,
                      })
                    : H
                      ? (0, s.jsxs)(tl.B, {
                            className: tw.wL,
                            direction: "vertical",
                            gap: 0,
                            children: [Y(), (0, s.jsx)(tr.A, { message: eT, className: tw.XE })],
                        })
                      : (0, s.jsx)(tr.A, { message: eT, className: tw.BZ }),
                et || te.Fr
                    ? null
                    : (0, s.jsx)(tI.d, {
                          showUpsell: er,
                          text:
                              ((t = (0, tA.Dd)(tM.PremiumTypes.TIER_2)),
                              eg.intl.format(eg.t.gMVjeS, {
                                  nitroTierName: t,
                                  onClick: () => {
                                      h({ type: ef.a2.PREMIUM, emojiDescriptor: void 0 });
                                  },
                              })),
                          button: ((n = (0, tm.qD)()), (0, tA.LE)(n, tM.pe.TIER_2) ?? eg.intl.string(eg.t.BmJkbd)),
                          buttonAnalyticsObject: { section: eI.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, s.jsx)(tg.l, {
                              size: "sm",
                              className: tw.ij,
                              location: _.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                          }),
                      }),
            ],
        });
    }),
    tX = q().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, tc.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var tz = n(178898),
    tY = n(148361),
    tZ = n(49999);
let t$ = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    tq = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function tQ(e) {
    return e.stopPropagation();
}
var t0 =
    (((i = {})[(i.NONE = 0)] = "NONE"),
    (i[(i.TABS_EXPRESSION_PICKER = 1)] = "TABS_EXPRESSION_PICKER"),
    (i[(i.NO_TABS_EXPRESSION_PICKER = 2)] = "NO_TABS_EXPRESSION_PICKER"),
    i);
function t1(e, t) {
    L.Om.setInspectedExpressionPosition(e, t, D.t.GRID_NAVIGATOR_EVENT);
}
let t2 = c()(W.bo, 200),
    t3 = c()(W.Wi, 200),
    t5 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    t4 = [m.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT],
    t8 = [],
    t6 = l.memo(function (e) {
        let t,
            n,
            {
                pickerIntention: i,
                channel: r,
                guildId: o,
                closePopout: c,
                emojiSize: f = eE.as.MEDIUM,
                hasTabWrapper: H = !1,
                onSelectEmoji: $,
                containerWidth: q,
                onNavigateAway: Q,
                persistSearch: ee,
                className: et,
                headerClassName: en,
                analyticsOverride: ei = t5,
                searchProps: es = {},
                wrapper: el,
                shouldHidePickerActions: er = !1,
                messageId: ea,
                renderHeader: eo,
                listHeaderClassName: ec,
                categoryListClassName: eu,
                showOnlyUnicode: ed = !1,
                showAddEmojiButton: em,
                ref: eh,
                isViewingEmojiPacks: eg,
                onViewEmojiPacksChange: eA,
            } = e,
            { onFocus: ep, onKeyDown: e_, autoFocus: eN = !0, accessory: eC } = es,
            ey = (0, d.bG)([J.A], () => (null != o ? J.A.getDefaultChannel(o) : null), [o]),
            [ex, ej] = l.useState(null),
            eO = l.useRef(""),
            eS = (0, M.RQ)((e) => e.searchQuery),
            eT = l.useRef(null),
            eb = l.useRef(null),
            eR = l.useRef(null),
            ev = (0, S.H)("emoji_picker") && !ed && (0, Z.z)(i);
        l.useEffect(() => {
            ev && (0, T.Fp)();
        }, [ev]);
        let [eP, eL] = l.useState(!1),
            eM = ev && (eg ?? eP),
            eD = eA ?? eL,
            ew = l.useCallback(() => eD(!0), [eD]),
            [eG, eF] = (0, y.kn)(!ev || er || eM ? t8 : t4),
            eJ = eG === m.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT,
            eK = l.useCallback(
                (e) => {
                    (e === tZ.i.USER_DISMISS && eR.current?.focus(), eF(e));
                },
                [eF],
            ),
            eV = l.useCallback((e) => {
                (eR.current?.focus(), (0, T.M5)(e));
            }, []),
            eB = (0, R.A)(ev);
        null == r && null != ey && (r = ey);
        let eH = r?.getGuildId() ?? o ?? null,
            [eW, eX] = l.useState(!1),
            e$ = l.useRef(null),
            eq = K.default.getCurrentUser(),
            eQ = (0, B.ki)(eq),
            e0 = eW && eQ;
        l.useImperativeHandle(eh, () => ({ onPickerOpen: tm }));
        let { location: e1 } = (0, g.p)(),
            { page: e2, section: e3, object: e5, openPopoutType: e4, popoutLocation: e8 } = ei,
            e6 = l.useMemo(() => ({ ...e1, section: e3 ?? eI.JJy.EMOJI_PICKER_POPOUT }), [e1, e3]),
            { analyticsLocations: e9 } = (0, C.Ay)(_.A.EMOJI_PICKER),
            { diversitySurrogate: te } = (0, d.cf)([j.Ay], () => ({ diversitySurrogate: j.Ay.diversitySurrogate })),
            tt = (0, W.sL)(eS, r, i, ed),
            tn = null == tt ? 0 : tt.locked.length + tt.unlocked.length,
            ti = F.iM.useSetting(),
            ts = l.useMemo(() => new Set(ti), [ti]),
            tl = l.useCallback((e) => {
                F.iM.updateSetting(Array.from(e));
            }, []),
            tr = (0, w.oV)({
                gridWrapperRef: eT,
                containerWidth: q,
                showingEmptyState: eM,
                listPaddingLeft: tq,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: ta,
                sectionDescriptors: to,
                emojiGrid: tc,
                columnCounts: tu,
            } = (0, ef.wu)({
                gridWidth: tr,
                fallbackGuildId: eH,
                channel: r,
                pickerIntention: i,
                emojiSearchResults: tt,
                collapsedSections: ts,
                emojiPaddingHorizontal: t$,
                emojiSpriteSize: f,
                pinnedPacks: eB,
                showOnlyUnicode: ed,
            }),
            { newlyAddedEmojis: td } = (0, z.A)(eH, i);
        (0, X.y)({ intention: i, isBurstReaction: eW, analyticsObject: e5 });
        let tm = l.useCallback(() => {
                let e = td.length > 0 ? td[0].id : null;
                ((0, P.uV)(eH, e), (0, X.A)({ intention: i, isBurstReaction: eW, analyticsObject: e5 }));
            }, [td, eH, i, eW, e5]),
            tf = l.useCallback(() => {
                (c(),
                    Q?.(),
                    (0, G.A)({
                        subscriptionTier: tM.pe.TIER_2,
                        analyticsLocations: [...e9, _.A.EMOJI_PACKS],
                        analyticsObject: { ...e6, object: eI.ZSU.EMOJI },
                    }));
            }, [e6, e9, c, Q]),
            tE = (0, ef.Mq)({
                pickerIntention: i,
                selectedChannel: r,
                fallbackGuildId: eH,
                closePopout: c,
                onSelectEmoji: $,
                setUpsellConfigs: (e) => {
                    e?.type === ef.a2.PREMIUM && e.emojiDescriptor?.emoji?.type === O.i.PACK ? tf() : ej(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== eS
                        ? (0, W.Wf)({
                              emoji: e.emoji,
                              location: { ...e6, object: eI.ZSU.EMOJI },
                              searchQuery: eS,
                              isLocked: null != t,
                              intention: i,
                              messageId: ea,
                          })
                        : (0, W._7)({
                              emoji: e.emoji,
                              location: { ...e6, object: e5 ?? eI.ZSU.EMOJI, ...(null != e2 && { page: e2 }) },
                              pickerIntention: i,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === eE.tm.NEWLY_ADDED_EMOJI && v.A.isNewerThanLastSeen(eH, e.emoji.id),
                              isBurstReaction: eW,
                              messageId: ea,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, W.C5)({ emoji: e.emoji, location: { ...e6, object: eI.ZSU.EMOJI } });
                },
            }),
            tI = l.useCallback(() => {
                (c(), Q?.());
            }, [c, Q]),
            {
                getItemProps: th,
                getRowProps: tg,
                gridContainerProps: tA,
                handleGridContainerKeyDown: tp,
                isUsingKeyboardNavigation: t_,
            } = (function (e) {
                let {
                        analyticsLocation: t,
                        pickerIntention: n,
                        columnCounts: i,
                        onSelectEmoji: s,
                        onSelectPackEmoji: r,
                        emojiGrid: a,
                        emojiList: o,
                        channelGuildId: c,
                        isBurstReaction: m,
                    } = e,
                    f = (0, d.bG)([j.Ay], () => j.Ay.getDisambiguatedEmojiContext(c), [c]),
                    E = l.useCallback(
                        (e, i) => {
                            if (e.type === ef.bm.EMOJI) {
                                if (e.emoji.type === O.i.PACK)
                                    return void r(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: m,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, I.Sw)(e.emoji)
                                        : ((0, W.C5)({ emoji: e.emoji, location: { ...t, object: eI.ZSU.EMOJI } }),
                                          (0, I.V4)(e.emoji)));
                                let l = {
                                    page: null != c ? eI.liQ.GUILD_CHANNEL : eI.liQ.DM_CHANNEL,
                                    section: eI.JJy.EMOJI_PICKER_POPOUT,
                                    object: eI.ZSU.EMOJI,
                                };
                                (m &&
                                    (l = {
                                        page: null != c ? eI.liQ.GUILD_CHANNEL : eI.liQ.DM_CHANNEL,
                                        section: eI.JJy.EMOJI_PICKER_POPOUT,
                                        object: eI.ZSU.EMOJI,
                                    }),
                                    (0, W._7)({
                                        emoji: e.emoji,
                                        location: l,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === eE.tm.NEWLY_ADDED_EMOJI &&
                                            v.A.isNewerThanLastSeen(c, e.emoji.id),
                                    }),
                                    s({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: m }));
                            }
                        },
                        [s, r, c, n, f, t, m],
                    ),
                    {
                        gridDispatch: h,
                        getItemProps: g,
                        getRowProps: A,
                        gridContainerProps: p,
                        handleGridContainerKeyDown: _,
                        isUsingKeyboardNavigation: N,
                    } = (0, w.Ff)({
                        columnCounts: i,
                        gridNavigatorId: eE.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: t1,
                    });
                return (
                    l.useEffect(
                        () =>
                            L.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== D.t.GRID_NAVIGATOR_EVENT && h({ type: u.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [h],
                    ),
                    {
                        getItemProps: g,
                        getRowProps: A,
                        gridContainerProps: p,
                        handleGridContainerKeyDown: _,
                        isUsingKeyboardNavigation: N,
                    }
                );
            })({
                pickerIntention: i,
                analyticsLocation: e6,
                columnCounts: tu,
                onSelectEmoji: $,
                onSelectPackEmoji: tE,
                emojiGrid: tc,
                emojiList: eb,
                channelGuildId: eH,
                isBurstReaction: e0,
            });
        (((e, t) => {
            let [n, i] = l.useState(null);
            (l.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                l.useEffect(() => {
                    i(L.Om.getState().activeCategoryIndex);
                }, [e]));
        })(q, eb),
            l.useLayoutEffect(() => {
                eN && eR.current?.focus();
            }, [q, te, eR, eN]),
            (t = l.useRef(eM)),
            l.useEffect(() => {
                (eN && t.current && !eM && eR.current?.focus(), (t.current = eM));
            }, [eN, eM, eR]),
            l.useEffect(() => {
                ee || (0, M.Ri)("");
            }, [ee]),
            l.useEffect(
                () => (
                    V.default.track(eI.HAw.OPEN_POPOUT, {
                        type: e4 ?? "Emoji Picker",
                        guild_id: eH,
                        location: e8,
                        ...(0, N.dI)(r),
                    }),
                    () => {
                        (t2.cancel(), t3.cancel());
                    }
                ),
                [e4, eH, e8, r],
            ),
            (0, A.Ay)(() => ((0, W.V$)({ intention: i, location: e6 }), (eO.current = eS), L.Om.resetStoreState)),
            l.useEffect(() => () => (0, U.sF)(U._2.FAVORITE_EMOJI_TOOLTIP), []),
            l.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = L.Om.getState().inspectedExpressionPosition;
                tc[t]?.[e] == null && 0 !== e && L.Om.setInspectedExpressionPosition(0, 0);
            }, [tc]),
            l.useEffect(() => {
                if (("" === eO.current && "" !== eS && (0, W.EG)(e6, i), "" !== eS && eO.current !== eS)) {
                    let e = L.Om.getAnalyticsId();
                    0 === tn
                        ? t2({ location: e6, searchQuery: eS, intention: i, loadId: e })
                        : t3({
                              totalResults: tn,
                              numEmojiLocked: tt?.locked.length ?? 0,
                              location: e6,
                              searchQuery: eS,
                              intention: i,
                              loadId: e,
                          });
                }
                eO.current = eS;
            }, [eS, e6, tn, tt, i]));
        let tN = el ?? (H ? "div" : E.l),
            tC = null != tr;
        function ty(e, t) {
            tE(e, { ...t, isBurst: e0 });
        }
        ex?.type === ef.a2.PREMIUM
            ? (n = (0, s.jsx)(tY.default, {
                  onUpsellClicked: tI,
                  emojiDescriptor: ex.emojiDescriptor,
                  pickerIntention: i,
                  analyticsLocation: e6,
                  onClose: () => ej(null),
                  channel: r,
              }))
            : ex?.type === ef.a2.ROLE_SUBSCRIPTION &&
              (n = (0, s.jsx)(k.A, { onClose: () => ej(null), guildId: ex.guildId, emojiId: ex.emojiId }));
        let tx = (0, p.A)((e, t, n) => {
                ty(
                    {
                        type: ef.bm.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: f,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: eE.s.PACK,
                        subCategory: eE.tm.NONE,
                    },
                    n,
                );
            }),
            tj = (0, s.jsx)(eZ, {
                channel: r,
                pickerIntention: i,
                emojiListRef: eb,
                onKeyDown: (e) => {
                    (tp?.(e), e_?.(e));
                },
                searchBarRef: eR,
                onFocus: ep,
                autoFocus: eN,
                accessory: eC,
                headerClassName: en,
                diversitySurrogate: te,
                isBurstReaction: eW,
                onBurstReactionToggle: function () {
                    (eX(!eW), eR.current?.focus());
                },
                burstToggleRef: e$,
                renderHeader: eo,
                showAddEmojiButton: em,
                closePopout: c,
            }),
            tO = [];
        j.Ay.hasFavoriteEmojis(eH) || tO.push(m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tS = (0, s.jsxs)(l.Fragment, {
                children: [
                    H ? tj : null,
                    (0, s.jsxs)("div", {
                        className: eY.uK,
                        ref: eT,
                        children: [
                            (0, s.jsxs)("div", {
                                children: [
                                    (0, s.jsx)(tz.A, { channel: r, closePopout: c }),
                                    (0, s.jsx)(x.Ay, {
                                        contentTypes: tO,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, s.jsx)(eU.A, { markAsDismissed: () => n(tZ.i.UNKNOWN) });
                                        },
                                    }),
                                ],
                            }),
                            er
                                ? null
                                : (0, s.jsx)("div", {
                                      className: eY.Iy,
                                      id: eE.lq,
                                      ...tA,
                                      children: tC
                                          ? (0, s.jsx)(tW, {
                                                collapsedSections: ts,
                                                diversitySurrogate: te,
                                                emojiGrid: tc,
                                                emojiListRef: eb,
                                                emojiSize: f,
                                                getEmojiItemProps: th,
                                                getEmojiRowProps: tg,
                                                gridWidth: tr,
                                                isUsingKeyboardNavigation: t_,
                                                onEmojiSelect: ty,
                                                onRemovePack: eV,
                                                onViewEmojiPacks: ev ? ew : void 0,
                                                showEmojiPacksDiscovery: eJ,
                                                onDismissEmojiPacksDiscovery: eK,
                                                setUpsellConfigs: ej,
                                                rowCount: tc.length,
                                                rowCountBySection: ta,
                                                sectionDescriptors: to,
                                                setCollapsedSections: tl,
                                                channelGuildId: eH,
                                                messageId: ea,
                                                isBurstReaction: e0,
                                                listHeaderClassName: ec,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, s.jsx)(e7, { emojiGrid: tc, className: eY.qV, guildId: eH, pickerIntention: i, channel: r }),
                    n,
                    i === ez.EmojiIntention.REACTION
                        ? (0, s.jsx)(Y.A, { targetElementRef: e$, shouldShow: eW && !eQ, onDismiss: () => eX(!1) })
                        : null,
                ],
            }),
            tT = (0, s.jsx)(h.A, {
                ...e6,
                children: (0, s.jsxs)(tN, {
                    id: eE.Do,
                    "aria-labelledby": H && !eM ? eE.k1 : void 0,
                    role: H && !eM ? "tabpanel" : void 0,
                    className: a()(eY.iE, { [eY.r6]: H, [eY.cB]: e0 }),
                    children: [
                        H || eM ? null : tj,
                        (0, s.jsx)("div", {
                            className: a()(eY.Fb, et, { [eY.eW]: eM && !H }),
                            onScroll: tQ,
                            children: eM ? (0, s.jsx)(b.A, { onBack: () => eD?.(!1), onSelectEmoji: tx }) : tS,
                        }),
                        er || eM
                            ? null
                            : (0, s.jsx)(ek, {
                                  className: a()(eY.jv, eu),
                                  emojiListRef: eb,
                                  sectionDescriptors: to,
                                  intention: i,
                                  channel: r,
                                  fallbackGuildId: eH,
                                  showOnlyUnicode: ed,
                                  pinnedPacks: eB,
                                  onViewEmojiPacks: ev ? ew : void 0,
                                  showEmojiPacksDiscovery: eJ,
                                  onDismissEmojiPacksDiscovery: eF,
                              }),
                    ],
                }),
            });
        return (0, s.jsx)(C.f5, { value: e9, children: tT });
    });
