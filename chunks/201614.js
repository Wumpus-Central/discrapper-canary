(n.r(t), n.d(t, { EmojiPickerContainerContext: () => t2, default: () => t7 }), n(321073));
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
    er = n(403581),
    ea = n(329921),
    eo = n(49999),
    ec = n(236432),
    eu = n(792996),
    ed = n(938612),
    em = n(342379);
function ef(e) {
    let { onClick: t, listItemId: n, showDiscoveryDot: i, onDismissDiscovery: l } = e,
        r = eu.intl.string(ec.default["3D0GLv"]),
        o = (0, Q.rm)(n);
    return (0, s.jsx)("div", {
        className: ed.nM,
        children: (0, s.jsxs)("div", {
            className: ed.Jn,
            children: [
                (0, s.jsx)(et.m, {
                    ariaHidden: !0,
                    position: "right",
                    text: r,
                    children: (0, s.jsx)(ee.D, {
                        ...o,
                        "aria-label": i ? `${r}, ${eu.intl.string(eu.t.y2b7CA)}` : r,
                        className: a()(ed.x6, { [em.Bj]: !i }),
                        "data-show-discovery": i,
                        onClick: function () {
                            (i && l(eo.i.TAKE_ACTION), t());
                        },
                        children: (0, s.jsx)(er.NitroWheelIcon, {
                            size: "md",
                            color: "currentColor",
                            className: i ? void 0 : em.Yl,
                        }),
                    }),
                }),
                i && (0, s.jsx)(ea.N, { className: ed.aW, size: "md", cutout: "base-lower" }),
            ],
        }),
    });
}
var eE = n(318845),
    eI = n(407698),
    eh = n(941971),
    eg = n(531685),
    eA = n(535622),
    ep = n(724511),
    e_ = n(484333),
    eN = n(732139),
    eC = n(652215),
    ey = n(698279);
let ex = "expression-guild-",
    { itemIdForIndex: ej } = (0, eE.J)(ex),
    eO = `${ex}view-emoji-packs`,
    eS = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    eT = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    eb = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    eR = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    ev = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    eP = (0, H.xI)(em.__invalid_unicodeCategoryShortcutHeight),
    eL = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eM = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eD = eb + eT + 2 * ev,
    ew = eL + 2 * eM,
    ek = eS + eT,
    eU = ek + ew,
    eG = eb + eR + 2 * ev,
    eF = eb + 2 * ev + 2 * eT + eL;
function eJ(e) {
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
        E = (0, Q.rm)(ej(n)),
        I = o.type === eN.s.GUILD || o.type === eN.s.PACK ? null : o.id,
        h = t === n,
        g = !d && u,
        A = o.type === eN.s.GUILD ? o.guild : null,
        p = o.type === eN.s.PACK ? o.pack : null,
        _ = (0, s.jsxs)(ee.D, {
            innerRef: m,
            ...E,
            "aria-label": o.type === eN.s.PACK ? o.pack.name : (0, W.wt)(o, A),
            className: a()({
                [em.ZG]: null != A,
                [em.td]: null != p,
                [em.Q0]: null != p && h,
                [em.Bj]: null == A && null == p,
                [em.s6]: null == A && null == p && h,
                [em.xg]: o.type === eN.s.RECENT,
            }),
            onClick: () => {
                (null != A &&
                    V.default.track(eC.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: ey.kx.EMOJI,
                        guild_id: A.id,
                    }),
                    c(n));
            },
            children: [
                (0, s.jsx)("div", {
                    className: em.a$,
                    children: (0, s.jsx)(eh.A, { hovered: f, selected: h, size: "small" }),
                }),
                o.type === eN.s.GUILD
                    ? (0, s.jsx)(ep.A, { guild: o.guild, isSelected: h, shouldAnimate: g, isLocked: o.isNitroLocked })
                    : null,
                null != p
                    ? (0, s.jsx)(ei.A, {
                          alt: "",
                          animated: !d,
                          shouldAnimate: g,
                          className: em.ty,
                          emojiId: p.representativeEmojiId,
                      })
                    : null,
                null == A && null != I
                    ? (0, s.jsx)(eA.A, { categoryId: I, className: em.Yl, height: eb, width: eb, size: "custom" })
                    : null,
            ],
        }),
        N = r[n + 1],
        C = r[n - 1],
        y = null != p && null != C && C.type !== eN.s.PACK,
        x = null != p && N?.type !== eN.s.PACK,
        j = null != N && o.type === eN.s.GUILD && N.type !== eN.s.GUILD;
    return null != A
        ? (0, s.jsxs)(l.Fragment, {
              children: [
                  (0, s.jsx)(eI.Q, { guild: A, children: _ }),
                  j ? (0, s.jsx)("hr", { className: em.ny }, "separator") : null,
              ],
          })
        : null != p
          ? (0, s.jsxs)(l.Fragment, {
                children: [
                    y ? (0, s.jsx)("hr", { className: em.ny }) : null,
                    (0, s.jsx)(et.m, { ariaHidden: !0, position: "right", text: p.name, children: _ }),
                    x ? (0, s.jsx)("hr", { className: em.ny }) : null,
                ],
            })
          : _;
}
let eK = (e) => {
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
        A = (0, e_.cr)({ sectionDescriptors: i, emojiListRef: n }),
        p = (0, g.p)(),
        _ = (0, W.ss)(r, o, { guildId: o?.guild_id ?? c }),
        N = l.useMemo(() => (0, Z.t)(u ? (0, W.CQ)() : _, m), [_, m, u]),
        C = l.useRef(null),
        y = (0, d.bG)([eg.A], () => eg.A.isFocused()),
        x = (0, d.bG)([es.Ay], () => es.Ay.useReducedMotion, []),
        j = l.useMemo(
            () =>
                q().memoize(
                    (e, t) => {
                        let n = N[t];
                        if (null != n)
                            return (0, s.jsx)(
                                eJ,
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
        S = null != f ? eF : 0,
        T = l.useMemo(() => {
            if (null != f)
                return function () {
                    return (0, s.jsx)(
                        ef,
                        { listItemId: eO, onClick: f, showDiscoveryDot: E, onDismissDiscovery: I },
                        "view-emoji-packs",
                    );
                };
        }, [f, E, I]),
        b = l.useCallback(
            (e, t) => {
                let n = N[t];
                if (n.type === eN.s.RECENT) return eD;
                if (n.type === eN.s.PACK) {
                    let e = N[t - 1],
                        n = N[t + 1];
                    return ek + (Number(null != e && e.type !== eN.s.PACK) + Number(n?.type !== eN.s.PACK)) * ew;
                }
                if (n.type === eN.s.GUILD) {
                    let e = N[t + 1];
                    return null != e && e.type !== eN.s.GUILD ? eU : ek;
                }
                return eG;
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
                s.type === eN.s.GUILD || s.type === eN.s.PACK
                    ? ((t += 1), (n += 1))
                    : s.type === eN.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = [e, n, i],
                l = N.some((e) => e.type === eN.s.PACK) ? (N[0]?.type === eN.s.PACK ? 1 : 2) : 0,
                r = S + eD + t * ek + eU + l * ew;
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
                null == t || (e + t.height - eL >= P ? w(!1) : w(!0));
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
                let i = D ? eP : 0;
                if (n.type === eN.s.RECENT) return t ? 0 : eR;
                if (n.type === eN.s.PACK) return t ? i : eT;
                if (n.type === eN.s.GUILD) {
                    let n = N[e + 1];
                    return null != n && n.type !== eN.s.GUILD ? (t ? eL + -2 * eM + eT + i : eT) : t ? i : eT;
                }
                return t ? eT + i : 2 * eT;
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
    return (0, s.jsx)(eE.A, {
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
        itemIdPrefix: ex,
        renderListHeader: T,
        listHeaderHeight: S,
        children: (e) =>
            R >= 7 &&
            (0, s.jsx)(
                ee.D,
                {
                    "aria-hidden": !D,
                    "aria-label": eu.intl.string(eu.t.dT0ctw),
                    className: a()(em.KB, { [em.h_]: !D }),
                    tabIndex: D ? 0 : -1,
                    onClick: () => U(e),
                    children: (0, s.jsx)(en.ReactionIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: eb,
                        width: eb,
                    }),
                },
                J,
            ),
    });
};
var eV = n(624751),
    eB = n(780042),
    eH = n(821609),
    eW = n(644508),
    eX = n(824832),
    ez = n(267102),
    eY = n(242812);
function eZ(e) {
    let { channel: t, closePopout: n } = e,
        i = l.useRef(null),
        r = l.useRef(0),
        [a, o] = l.useState(!1),
        [c, u] = l.useState(!1),
        d = (0, ez.Us)() === eC.BRT.OVERLAY,
        m = c || a,
        f = l.useCallback(
            async (e, i, s) => {
                (u(!0),
                    n(),
                    await (0, eW.f)({
                        userImage: { data: e, file: i, image: s },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: eC.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? eC.liQ.GUILD_CHANNEL : eC.liQ.DM_CHANNEL,
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
                text: d ? eu.intl.string(eu.t.RMbedC) : null,
                children: (0, s.jsx)(eH.$, {
                    text: eu.intl.string(eu.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        (N.Ay.trackWithMetadata(eC.HAw.EXPRESSION_PICKER_ADD_EMOJI_CLICKED, {
                            guild_id: t?.guild_id ?? null,
                            channel_id: t?.id ?? null,
                            location_section: eC.JJy.EXPRESSION_PICKER,
                            location_page: t?.guild_id != null ? eC.liQ.GUILD_CHANNEL : eC.liQ.DM_CHANNEL,
                        }),
                            i.current?.activateUploadDialogue());
                    },
                    disabled: m || d,
                }),
            }),
            (0, s.jsx)("div", {
                className: eY.F,
                children: (0, s.jsx)(eX.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, r.current),
            }),
        ],
    });
}
var e$ = n(4703),
    eq = n(672594),
    eQ = n(307731),
    e0 = n(381575);
let e1 = function (e) {
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
                (0, s.jsx)(eq.A, {
                    emojiListRef: r,
                    gridNavigatorId: eN.lq,
                    onKeyDown: o,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, W.wT)(i, f),
                }),
                i === eQ.EmojiIntention.REACTION ? (0, s.jsx)(eB.A, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, s.jsx)(e$.A, { searchBarRef: d, className: e0.fx, selectedSurrogate: m }),
                i !== eQ.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, s.jsx)(eZ, { channel: t, closePopout: A }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: a()(e0.wx, l), children: null != h ? h(p) : p });
};
var e2 = n(462887),
    e3 = n(834730),
    e5 = n(956396),
    e4 = n(371680),
    e8 = n(413599),
    e6 = n(71393),
    e9 = n(486020),
    e7 = n(690521),
    te = n(977566);
function tt(e) {
    return null != e && "animated" in e;
}
let tn = l.memo(function (e) {
    let t,
        i,
        { className: r, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        m = L.Om.useStore((e) => e.inspectedExpressionPosition),
        f = l.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = m;
            return a[e]?.[t];
        }, [a, m]);
    switch (f?.type) {
        case e_.bm.EMOJI:
            t = f?.emoji;
            break;
        case e_.bm.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        default:
            t = null;
    }
    let E = (0, d.bG)([e6.A], () => (null !== t && t.type === O.i.GUILD ? e6.A.getGuild(t.guildId) : null), [t]),
        I = (0, d.bG)([e5.A], () => (null !== t && t.type === O.i.PACK ? e5.A.getPack(t.packId) : null), [t]),
        h = (0, d.bG)([eg.A], () => eg.A.isFocused()),
        g = (0, d.bG)([es.Ay], () => es.Ay.useReducedMotion, []),
        A = F.Sf.useSetting(),
        p = (0, W.O7)(o, tt(t) ? t : null),
        _ = (0, d.bG)([j.Ay], () => j.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: N } = (0, z.A)(o, c),
        C = f?.type === e_.bm.EMOJI ? f.subCategory : eN.tm.NONE;
    if (
        (l.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    tt(t) &&
                    C !== eN.tm.NONE &&
                    (C === eN.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === O.i.GUILD &&
                        (0, P.mz)(t.guildId, N[0].id),
                    null != m.source &&
                        (0, W.yB)({
                            emoji: t,
                            subCategory: C,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: C === eN.tm.NEWLY_ADDED_EMOJI && v.A.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: l, theme: r } = t;
            if (tt(e)) {
                let t = null != e.id ? e9.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, s.jsx)(e3.E, {
                          variant: "body-md/normal",
                          className: te.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, s.jsx)("img", { alt: (0, e7.N)(e) ?? "", src: t, className: te.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return l.has(e.guildId)
                    ? (0, s.jsx)("img", { className: te.Kk, src: (0, e2.M)(r) ? a : o, alt: "" })
                    : (0, s.jsx)("img", { className: te.Kk, src: (0, e2.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: A, sectionsExpandedFromThreeRows: _, theme: e8.A.theme }),
        x =
            null != E
                ? (0, s.jsx)(ep.A, { className: te.__invalid_guildIcon, guild: E, shouldAnimate: !g && h })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? eu.intl.string(eu.t["/K2RDH"])
                : eu.intl.string(eu.t.NZI2Zk)
            : (0, e7.N)(t);
    let S = (function (e) {
        let { inspectedEmoji: t, guild: n, pack: i } = e,
            l = tt(t);
        return null != n && l
            ? eu.intl.format(eu.t.KFW2aY, { guildName: n.name })
            : null != i && l
              ? eu.intl.format(ec.default.VEfeux, {
                    packName: (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(er.NitroWheelIcon, {
                                size: "custom",
                                width: 10,
                                height: 10,
                                color: "currentColor",
                                className: te.C5,
                                "aria-label": eu.intl.string(ec.default.leUgZw),
                            }),
                            " ",
                            i.name,
                        ],
                    }),
                })
              : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E, pack: I });
    return (0, s.jsx)(e4.A, {
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
var ti = n(607399),
    ts = n(833272),
    tl = n(123292),
    tr = n(646514),
    ta = n(765178),
    to = n(331322),
    tc = n(537652),
    tu = n(962125),
    td = n(856459),
    tm = n(240864),
    tf = n(286509),
    tE = n(526292),
    tI = n(89366),
    th = n(739053),
    tg = n(82498),
    tA = n(202639),
    tp = n(414872),
    t_ = n(521440),
    tN = n(448645),
    tC = n(559106),
    ty = n(304072),
    tx = n(736653),
    tj = n(189551),
    tO = n(594061),
    tS = n(771104),
    tT = n(442433),
    tb = n(7584),
    tR = n(147421),
    tv = n(723702),
    tP = n(379350),
    tL = n(537911);
function tM(e) {
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
        N = (0, d.bG)([e6.A], () => (n.type === O.i.GUILD ? e6.A.getGuild(n.guildId) : void 0), [n]);
    return (0, s.jsx)(tC.vN, {
        children: (0, s.jsx)("button", {
            ..._,
            className: a()(tL._X, { [tL.lG]: l, [tL.Lh]: r, [tL.Bx]: o, [g ?? ""]: o, [tL.TV]: u }),
            "data-type": D.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: p,
            children: (0, s.jsx)(tP.A, {
                "aria-label":
                    ((t = (0, e7.N)(n)),
                    (N?.name != null &&
                        (t = eu.intl.formatToPlainString(eu.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? eu.intl.formatToPlainString(eu.t["9FI9Z0"], { names: t })
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
function tD(e) {
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
                ? (0, s.jsx)(tM, {
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
                              let e = null == M.id ? tb.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = L.current.getBoundingClientRect();
                              ((t.x = S.x + (k + 1) * D), R(`${k}:${a}`), (0, tR.h)(y, e, M.id, t));
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
                          (0, tT.L3)(e, async () => {
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
                  text: eu.intl.formatToPlainString(eu.t.glqNsf, { key: (0, tv.cX)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let tw = (e) => {
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
        D = (0, tx.Ay)(),
        w = L.Om.getState(),
        [k, U] = l.useState(w.inspectedExpressionPosition),
        [G, F] = (0, ty.A)(null, 300),
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
            tO.bW.loadIfNecessary();
        }, []));
    let K = i === eN.as.LARGE,
        B = i === eN.as.MEDIUM;
    function H(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case e_.bm.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    c = k.rowIndex === n && k.columnIndex === i,
                    d = e.sectionCollapsedToThreeRows
                        ? c
                            ? (0, e2.M)(D)
                                ? R
                                : M
                            : (0, e2.M)(D)
                              ? x
                              : j
                        : c
                          ? (0, e2.M)(D)
                              ? b
                              : P
                          : (0, e2.M)(D)
                            ? S
                            : T,
                    I = eu.intl.string(e.sectionCollapsedToThreeRows ? eu.t.NZI2Zk : eu.t["/K2RDH"]);
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
                        (0, s.jsx)(tC.vN, {
                            children: (0, s.jsx)("button", {
                                "aria-label": d,
                                ref: A,
                                className: a()(tL._X, {
                                    [tL.lG]: K,
                                    [tL.Lh]: B,
                                    [tL.Bx]: y && !I,
                                    [p ?? ""]: y,
                                    [tL.TV]: G === t,
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
                        e.type !== e_.bm.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (r(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, tj.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || y(),
                                V.default.track(eC.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, s.jsx)("img", { className: tL.Kk, src: d, alt: "" }),
                    ariaLabel: I,
                    shouldShowRoundHighlight: !0,
                });
            }
            case e_.bm.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    l = k.rowIndex === i && k.columnIndex === n;
                return (0, s.jsx)(
                    tD,
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
            className: a()(tL.ND, { [tL.HO]: K, [tL.X$]: B }),
            ref: J,
            children: e.map(H),
        });
    }
    if (A !== eN.s.TOP_GUILD_EMOJI) return W(t);
    let X = t.filter(
            (e) =>
                e.subCategory === eN.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === eN.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === O.i.GUILD &&
                    !v.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        z = t.filter(
            (e) =>
                e.subCategory === eN.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === O.i.GUILD &&
                v.A.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === z.length
        ? W(t)
        : (0, s.jsxs)("div", {
              className: tL.Ng,
              children: [
                  (0, s.jsx)("div", { className: a()(tL.V6, { [tL.$3]: 0 === X.length }), children: W(X) }),
                  (0, s.jsxs)("div", {
                      className: tL.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: a()(tL.eE, { [tL.eM]: 1 === z.length, [tL.Wk]: X.length > 0 }),
                              children: W(z),
                          }),
                          (0, s.jsxs)("div", {
                              className: a()(tL.lD, { [tL.EI]: K, [tL.qU]: B, [tL.Wk]: X.length > 0 }),
                              children: [
                                  (0, s.jsx)(tS.A, { foreground: tL.rI }),
                                  (0, s.jsx)(e3.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-overlay-light",
                                      children: eu.intl.string(eu.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var tk = n(682901),
    tU = n(650583),
    tG = n(618723);
let tF = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    tJ = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    tK = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    tV = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    tB = (0, H.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tH = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    tW = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    tX = td.D + (0, H.xI)(tr.A.space.PX_10),
    tz = tX + tV,
    tY = l.memo(function (e) {
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
        H && (X = J ? tz : tX);
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
                                  className: a()(tG.cn, { [tG.tY]: J }),
                                  onKeyDown: (e) => {
                                      e.key !== tU.dh.ESCAPE && e.stopPropagation();
                                  },
                                  children: (0, s.jsx)(td.A, { onViewEmojiPacks: f, onDismiss: z }),
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
            [ea, eo] = l.useState(!1),
            {
                listPadding: ed,
                renderRow: em,
                renderSection: ef,
                renderSectionHeader: eE,
                renderSectionFooter: eI,
                sectionMarginBottom: eh,
                sectionHeaderHeight: eg,
                sectionFooterHeight: ex,
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
                    b = l.useMemo(() => ("" !== n ? ts.A.convert.toCodePoint(n) : ""), [n]),
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
                                    V.default.track(eC.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: S.location,
                                        tab: ey.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                f(i));
                        },
                        [S, t, f],
                    ),
                    M = l.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === e_.bm.EMOJI ? (0, e7.N)(e.emoji) : e.name;
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
                                    tw,
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
                                        selectedItemClassName: tG.__invalid_selectedItem,
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
                                if (o === eN.s.SEARCH_RESULTS) return;
                                let d = (function (e) {
                                        let { type: t, guild: n, categoryId: i } = e;
                                        return t === eN.s.PACK
                                            ? (0, s.jsx)(er.NitroWheelIcon, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  height: 16,
                                                  width: 16,
                                              })
                                            : t === eN.s.GUILD
                                              ? null == n
                                                  ? null
                                                  : (0, s.jsx)(ep.A, { guild: n, height: 16, width: 16 })
                                              : null == i
                                                ? null
                                                : (0, s.jsx)(eA.A, {
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
                                        o === eN.s.PACK
                                            ? (0, s.jsx)("div", {
                                                  className: tG.uE,
                                                  children: (0, s.jsx)(tl.Q, {
                                                      text: eu.intl.string(ec.default["2zxYCx"]),
                                                      textVariant: "body-sm/medium",
                                                      variant: "secondary",
                                                      "aria-label": `${eu.intl.string(ec.default["2zxYCx"])} ${l.name}`,
                                                      onKeyDown: (e) => {
                                                          e.key !== tU.dh.ESCAPE && e.stopPropagation();
                                                      },
                                                      onClick: () => c(l.id),
                                                  }),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    tf.A,
                                    {
                                        className: a()(tG.wx, y, { [tG.RA]: h, [tG.sp]: g }),
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
                    F = (0, tE.k0)(),
                    J = l.useCallback(
                        (e, n) => {
                            let i = m[e],
                                l = v(e),
                                r = R(e),
                                o = i.type === eN.s.PACK && 0 === i.count;
                            return (0, s.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: a()(tG.Wy, {
                                        [tG.YD]: e === m.length - 1,
                                        [tG.jl]: t.has(i.sectionId) || o,
                                        [tG.cW]: i.isNitroLocked,
                                        [tG.T5]: l || r,
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
                                    ? (0, s.jsx)(tp.a, {})
                                    : (0, s.jsx)(tp.A, {})
                                : R(e)
                                  ? (0, s.jsx)("div", { className: tG.pQ })
                                  : null,
                        [v, R, F],
                    ),
                    B = l.useCallback((e) => (v(e) ? 41 : 33 * !!R(e)), [v, R]),
                    H = l.useCallback(
                        (e) =>
                            e === m.length - 1 ||
                            t.has(m[e]?.sectionId) ||
                            (m[e]?.type === eN.s.PACK && m[e]?.count === 0) ||
                            v(e) ||
                            R(e)
                                ? 0
                                : tH,
                        [t, m, v, R],
                    );
                return {
                    listPadding: l.useMemo(() => ["" === u || O ? tF : tV, tJ, tK, 0], [u, O]),
                    renderRow: k,
                    renderSection: J,
                    renderSectionHeader: G,
                    renderSectionFooter: K,
                    sectionMarginBottom: H,
                    sectionHeaderHeight: l.useCallback((e) => (m[e].type === eN.s.SEARCH_RESULTS ? 0 : tB), [m]),
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
            ej = l.useCallback(
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
            ej(o.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [o, ej, A, p, G, X]);
        let eO = (0, w.Fk)({
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
        let eS = l.useCallback(
                (e) => {
                    (eO(e),
                        ej(e),
                        tZ({
                            emojiListRef: o,
                            sectionDescriptors: A,
                            scrollTop: e,
                            searchQuery: G,
                            setShowUpsell: eo,
                        }));
                },
                [eO, ej, o, A, G, eo],
            ),
            eT = A.length > 0;
        (l.useEffect(() => {
            ea &&
                (V.default.track(eC.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: tk.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: en,
                    location_stack: ei,
                }),
                (0, th.sq)(eC.U7l.PREMIUM_UPSELL_VIEWED, ei, () => (0, tg.uq)(tk.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [en, ei, ea]),
            l.useEffect(() => {
                "" !== G && eo(!1);
            }, [G]));
        let eb = l.useRef(null);
        l.useEffect(
            () => (
                clearTimeout(eb.current),
                (eb.current = setTimeout(() => {
                    (eT
                        ? ta.O.announce(eu.intl.string(eu.t.uZ4F2O), "polite")
                        : ta.O.announce(eu.intl.string(eu.t.IxxiKF), "assertive"),
                        (eb.current = null));
                }, 200)),
                () => {
                    clearTimeout(eb.current);
                }
            ),
            [eT, G],
        );
        let eR = (0, s.jsx)(e3.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: eu.intl.string(eu.t.IxxiKF),
        });
        return (0, s.jsxs)("div", {
            className: tG.AD,
            children: [
                eT
                    ? (0, s.jsx)(tu.A, {
                          role: "none presentation",
                          className: tG.p_,
                          listPadding: ed,
                          renderListHeader: H ? Y : void 0,
                          listHeaderHeight: H ? X : void 0,
                          onScroll: eS,
                          renderRow: em,
                          renderSection: ef,
                          renderSectionHeader: eE,
                          renderSectionFooter: eI,
                          rowCount: O,
                          rowCountBySection: p,
                          rowHeight: c + 2 * tW,
                          sectionHeaderHeight: eg,
                          sectionMarginBottom: eh,
                          sectionFooterHeight: ex,
                          stickyHeaders: !0,
                          ref: o,
                      })
                    : H
                      ? (0, s.jsxs)(to.B, {
                            className: tG.wL,
                            direction: "vertical",
                            gap: 0,
                            children: [Y(), (0, s.jsx)(tc.A, { message: eR, className: tG.XE })],
                        })
                      : (0, s.jsx)(tc.A, { message: eR, className: tG.BZ }),
                et || ti.Fr
                    ? null
                    : (0, s.jsx)(tA.d, {
                          showUpsell: ea,
                          text:
                              ((t = (0, tN.Dd)(tk.PremiumTypes.TIER_2)),
                              eu.intl.format(eu.t.gMVjeS, {
                                  nitroTierName: t,
                                  onClick: () => {
                                      h({ type: e_.a2.PREMIUM, emojiDescriptor: void 0 });
                                  },
                              })),
                          button: ((n = (0, tI.qD)()), (0, tN.LE)(n, tk.pe.TIER_2) ?? eu.intl.string(eu.t.BmJkbd)),
                          buttonAnalyticsObject: { section: eC.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, s.jsx)(t_.l, {
                              size: "sm",
                              className: tG.ij,
                              location: _.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                          }),
                      }),
            ],
        });
    }),
    tZ = q().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, tm.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var t$ = n(178898),
    tq = n(148361);
let tQ = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    t0 = (0, H.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function t1(e) {
    return e.stopPropagation();
}
var t2 =
    (((i = {})[(i.NONE = 0)] = "NONE"),
    (i[(i.TABS_EXPRESSION_PICKER = 1)] = "TABS_EXPRESSION_PICKER"),
    (i[(i.NO_TABS_EXPRESSION_PICKER = 2)] = "NO_TABS_EXPRESSION_PICKER"),
    i);
function t3(e, t) {
    L.Om.setInspectedExpressionPosition(e, t, D.t.GRID_NAVIGATOR_EVENT);
}
let t5 = c()(W.bo, 200),
    t4 = c()(W.Wi, 200),
    t8 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    t6 = [m.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT],
    t9 = [],
    t7 = l.memo(function (e) {
        let t,
            n,
            {
                pickerIntention: i,
                channel: r,
                guildId: o,
                closePopout: c,
                emojiSize: f = eN.as.MEDIUM,
                hasTabWrapper: H = !1,
                onSelectEmoji: $,
                containerWidth: q,
                onNavigateAway: Q,
                persistSearch: ee,
                className: et,
                headerClassName: en,
                analyticsOverride: ei = t8,
                searchProps: es = {},
                wrapper: el,
                shouldHidePickerActions: er = !1,
                messageId: ea,
                renderHeader: ec,
                listHeaderClassName: eu,
                categoryListClassName: ed,
                showOnlyUnicode: em = !1,
                showAddEmojiButton: ef,
                ref: eE,
                isViewingEmojiPacks: eI,
                onViewEmojiPacksChange: eh,
            } = e,
            { onFocus: eg, onKeyDown: eA, autoFocus: ep = !0, accessory: ey } = es,
            ex = (0, d.bG)([J.A], () => (null != o ? J.A.getDefaultChannel(o) : null), [o]),
            [ej, eO] = l.useState(null),
            eS = l.useRef(""),
            eT = (0, M.RQ)((e) => e.searchQuery),
            eb = l.useRef(null),
            eR = l.useRef(null),
            ev = l.useRef(null),
            eP = (0, S.H)("emoji_picker") && !em && (0, Z.z)(i);
        l.useEffect(() => {
            eP && (0, T.Fp)();
        }, [eP]);
        let [eL, eM] = l.useState(!1),
            eD = eP && (eI ?? eL),
            ew = eh ?? eM,
            ek = l.useCallback(() => ew(!0), [ew]),
            [eU, eG] = (0, y.kn)(!eP || er || eD ? t9 : t6),
            eF = eU === m.M.DEFAULT_EMOJIS_PACKS_DISCOVERY_DOT,
            eJ = l.useCallback(
                (e) => {
                    (e === eo.i.USER_DISMISS && ev.current?.focus(), eG(e));
                },
                [eG],
            ),
            eB = l.useCallback((e) => {
                (ev.current?.focus(), (0, T.M5)(e));
            }, []),
            eH = (0, R.A)(eP);
        null == r && null != ex && (r = ex);
        let eW = r?.getGuildId() ?? o ?? null,
            [eX, ez] = l.useState(!1),
            eY = l.useRef(null),
            eZ = K.default.getCurrentUser(),
            e$ = (0, B.ki)(eZ),
            eq = eX && e$;
        l.useImperativeHandle(eE, () => ({ onPickerOpen: tf }));
        let { location: e2 } = (0, g.p)(),
            { page: e3, section: e5, object: e4, openPopoutType: e8, popoutLocation: e6 } = ei,
            e9 = l.useMemo(() => ({ ...e2, section: e5 ?? eC.JJy.EMOJI_PICKER_POPOUT }), [e2, e5]),
            { analyticsLocations: e7 } = (0, C.Ay)(_.A.EMOJI_PICKER),
            { diversitySurrogate: te } = (0, d.cf)([j.Ay], () => ({ diversitySurrogate: j.Ay.diversitySurrogate })),
            tt = (0, W.sL)(eT, r, i, em),
            ti = null == tt ? 0 : tt.locked.length + tt.unlocked.length,
            ts = F.iM.useSetting(),
            tl = l.useMemo(() => new Set(ts), [ts]),
            tr = l.useCallback((e) => {
                F.iM.updateSetting(Array.from(e));
            }, []),
            ta = (0, w.oV)({
                gridWrapperRef: eb,
                containerWidth: q,
                showingEmptyState: eD,
                listPaddingLeft: t0,
                listScrollbarWidth: 8,
            }),
            {
                rowCountBySection: to,
                sectionDescriptors: tc,
                emojiGrid: tu,
                columnCounts: td,
            } = (0, e_.wu)({
                gridWidth: ta,
                fallbackGuildId: eW,
                channel: r,
                pickerIntention: i,
                emojiSearchResults: tt,
                collapsedSections: tl,
                emojiPaddingHorizontal: tQ,
                emojiSpriteSize: f,
                pinnedPacks: eH,
                showOnlyUnicode: em,
            }),
            { newlyAddedEmojis: tm } = (0, z.A)(eW, i);
        (0, X.y)({ intention: i, isBurstReaction: eX, analyticsObject: e4 });
        let tf = l.useCallback(() => {
                let e = tm.length > 0 ? tm[0].id : null;
                ((0, P.uV)(eW, e), (0, X.A)({ intention: i, isBurstReaction: eX, analyticsObject: e4 }));
            }, [tm, eW, i, eX, e4]),
            tE = l.useCallback(() => {
                (c(),
                    Q?.(),
                    (0, G.A)({
                        subscriptionTier: tk.pe.TIER_2,
                        analyticsLocations: [...e7, _.A.EMOJI_PACKS],
                        analyticsObject: { ...e9, object: eC.ZSU.EMOJI },
                    }));
            }, [e9, e7, c, Q]),
            tI = (0, e_.Mq)({
                pickerIntention: i,
                selectedChannel: r,
                fallbackGuildId: eW,
                closePopout: c,
                onSelectEmoji: $,
                setUpsellConfigs: (e) => {
                    e?.type === e_.a2.PREMIUM && e.emojiDescriptor?.emoji?.type === O.i.PACK ? tE() : eO(e);
                },
                emojiSelectAnalytics: (e, t) => {
                    "" !== eT
                        ? (0, W.Wf)({
                              emoji: e.emoji,
                              location: { ...e9, object: eC.ZSU.EMOJI },
                              searchQuery: eT,
                              isLocked: null != t,
                              intention: i,
                              messageId: ea,
                          })
                        : (0, W._7)({
                              emoji: e.emoji,
                              location: { ...e9, object: e4 ?? eC.ZSU.EMOJI, ...(null != e3 && { page: e3 }) },
                              pickerIntention: i,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === eN.tm.NEWLY_ADDED_EMOJI && v.A.isNewerThanLastSeen(eW, e.emoji.id),
                              isBurstReaction: eX,
                              messageId: ea,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, W.C5)({ emoji: e.emoji, location: { ...e9, object: eC.ZSU.EMOJI } });
                },
            }),
            th = l.useCallback(() => {
                (c(), Q?.());
            }, [c, Q]),
            {
                getItemProps: tg,
                getRowProps: tA,
                gridContainerProps: tp,
                handleGridContainerKeyDown: t_,
                isUsingKeyboardNavigation: tN,
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
                            if (e.type === e_.bm.EMOJI) {
                                if (e.emoji.type === O.i.PACK)
                                    return void r(e, {
                                        isFinalSelection: !i.shiftKey,
                                        toggleFavorite: i.altKey,
                                        isBurst: m,
                                    });
                                if (null != e.emoji && i.altKey)
                                    return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, I.Sw)(e.emoji)
                                        : ((0, W.C5)({ emoji: e.emoji, location: { ...t, object: eC.ZSU.EMOJI } }),
                                          (0, I.V4)(e.emoji)));
                                let l = {
                                    page: null != c ? eC.liQ.GUILD_CHANNEL : eC.liQ.DM_CHANNEL,
                                    section: eC.JJy.EMOJI_PICKER_POPOUT,
                                    object: eC.ZSU.EMOJI,
                                };
                                (m &&
                                    (l = {
                                        page: null != c ? eC.liQ.GUILD_CHANNEL : eC.liQ.DM_CHANNEL,
                                        section: eC.JJy.EMOJI_PICKER_POPOUT,
                                        object: eC.ZSU.EMOJI,
                                    }),
                                    (0, W._7)({
                                        emoji: e.emoji,
                                        location: l,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === eN.tm.NEWLY_ADDED_EMOJI &&
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
                        gridNavigatorId: eN.lq,
                        itemGrid: a,
                        itemList: o,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: t3,
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
                analyticsLocation: e9,
                columnCounts: td,
                onSelectEmoji: $,
                onSelectPackEmoji: tI,
                emojiGrid: tu,
                emojiList: eR,
                channelGuildId: eW,
                isBurstReaction: eq,
            });
        (((e, t) => {
            let [n, i] = l.useState(null);
            (l.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                l.useEffect(() => {
                    i(L.Om.getState().activeCategoryIndex);
                }, [e]));
        })(q, eR),
            l.useLayoutEffect(() => {
                ep && ev.current?.focus();
            }, [q, te, ev, ep]),
            (t = l.useRef(eD)),
            l.useEffect(() => {
                (ep && t.current && !eD && ev.current?.focus(), (t.current = eD));
            }, [ep, eD, ev]),
            l.useEffect(() => {
                ee || (0, M.Ri)("");
            }, [ee]),
            l.useEffect(
                () => (
                    V.default.track(eC.HAw.OPEN_POPOUT, {
                        type: e8 ?? "Emoji Picker",
                        guild_id: eW,
                        location: e6,
                        ...(0, N.dI)(r),
                    }),
                    () => {
                        (t5.cancel(), t4.cancel());
                    }
                ),
                [e8, eW, e6, r],
            ),
            (0, A.Ay)(() => ((0, W.V$)({ intention: i, location: e9 }), (eS.current = eT), L.Om.resetStoreState)),
            l.useEffect(() => () => (0, U.sF)(U._2.FAVORITE_EMOJI_TOOLTIP), []),
            l.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = L.Om.getState().inspectedExpressionPosition;
                tu[t]?.[e] == null && 0 !== e && L.Om.setInspectedExpressionPosition(0, 0);
            }, [tu]),
            l.useEffect(() => {
                if (("" === eS.current && "" !== eT && (0, W.EG)(e9, i), "" !== eT && eS.current !== eT)) {
                    let e = L.Om.getAnalyticsId();
                    0 === ti
                        ? t5({ location: e9, searchQuery: eT, intention: i, loadId: e })
                        : t4({
                              totalResults: ti,
                              numEmojiLocked: tt?.locked.length ?? 0,
                              location: e9,
                              searchQuery: eT,
                              intention: i,
                              loadId: e,
                          });
                }
                eS.current = eT;
            }, [eT, e9, ti, tt, i]));
        let tC = el ?? (H ? "div" : E.l),
            ty = null != ta;
        function tx(e, t) {
            tI(e, { ...t, isBurst: eq });
        }
        ej?.type === e_.a2.PREMIUM
            ? (n = (0, s.jsx)(tq.default, {
                  onUpsellClicked: th,
                  emojiDescriptor: ej.emojiDescriptor,
                  pickerIntention: i,
                  analyticsLocation: e9,
                  onClose: () => eO(null),
                  channel: r,
              }))
            : ej?.type === e_.a2.ROLE_SUBSCRIPTION &&
              (n = (0, s.jsx)(k.A, { onClose: () => eO(null), guildId: ej.guildId, emojiId: ej.emojiId }));
        let tj = (0, p.A)((e, t, n) => {
                tx(
                    {
                        type: e_.bm.EMOJI,
                        emoji: e,
                        isDisabled: !e.available,
                        size: f,
                        rowIndex: 0,
                        columnIndex: t,
                        visibleRowIndex: 0,
                        category: eN.s.PACK,
                        subCategory: eN.tm.NONE,
                    },
                    n,
                );
            }),
            tO = (0, s.jsx)(e1, {
                channel: r,
                pickerIntention: i,
                emojiListRef: eR,
                onKeyDown: (e) => {
                    (t_?.(e), eA?.(e));
                },
                searchBarRef: ev,
                onFocus: eg,
                autoFocus: ep,
                accessory: ey,
                headerClassName: en,
                diversitySurrogate: te,
                isBurstReaction: eX,
                onBurstReactionToggle: function () {
                    (ez(!eX), ev.current?.focus());
                },
                burstToggleRef: eY,
                renderHeader: ec,
                showAddEmojiButton: ef,
                closePopout: c,
            }),
            tS = [];
        j.Ay.hasFavoriteEmojis(eW) || tS.push(m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tT = (0, s.jsxs)(l.Fragment, {
                children: [
                    H ? tO : null,
                    (0, s.jsxs)("div", {
                        className: e0.uK,
                        ref: eb,
                        children: [
                            (0, s.jsxs)("div", {
                                children: [
                                    (0, s.jsx)(t$.A, { channel: r, closePopout: c }),
                                    (0, s.jsx)(x.Ay, {
                                        contentTypes: tS,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, s.jsx)(eV.A, { markAsDismissed: () => n(eo.i.UNKNOWN) });
                                        },
                                    }),
                                ],
                            }),
                            er
                                ? null
                                : (0, s.jsx)("div", {
                                      className: e0.Iy,
                                      id: eN.lq,
                                      ...tp,
                                      children: ty
                                          ? (0, s.jsx)(tY, {
                                                collapsedSections: tl,
                                                diversitySurrogate: te,
                                                emojiGrid: tu,
                                                emojiListRef: eR,
                                                emojiSize: f,
                                                getEmojiItemProps: tg,
                                                getEmojiRowProps: tA,
                                                gridWidth: ta,
                                                isUsingKeyboardNavigation: tN,
                                                onEmojiSelect: tx,
                                                onRemovePack: eB,
                                                onViewEmojiPacks: eP ? ek : void 0,
                                                showEmojiPacksDiscovery: eF,
                                                onDismissEmojiPacksDiscovery: eJ,
                                                setUpsellConfigs: eO,
                                                rowCount: tu.length,
                                                rowCountBySection: to,
                                                sectionDescriptors: tc,
                                                setCollapsedSections: tr,
                                                channelGuildId: eW,
                                                messageId: ea,
                                                isBurstReaction: eq,
                                                listHeaderClassName: eu,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, s.jsx)(tn, { emojiGrid: tu, className: e0.qV, guildId: eW, pickerIntention: i, channel: r }),
                    n,
                    i === eQ.EmojiIntention.REACTION
                        ? (0, s.jsx)(Y.A, { targetElementRef: eY, shouldShow: eX && !e$, onDismiss: () => ez(!1) })
                        : null,
                ],
            }),
            tb = (0, s.jsx)(h.A, {
                ...e9,
                children: (0, s.jsxs)(tC, {
                    id: eN.Do,
                    "aria-labelledby": H && !eD ? eN.k1 : void 0,
                    role: H && !eD ? "tabpanel" : void 0,
                    className: a()(e0.iE, { [e0.r6]: H, [e0.cB]: eq }),
                    children: [
                        H || eD ? null : tO,
                        (0, s.jsx)("div", {
                            className: a()(e0.Fb, et, { [e0.eW]: eD && !H }),
                            onScroll: t1,
                            children: eD ? (0, s.jsx)(b.A, { onBack: () => ew?.(!1), onSelectEmoji: tj }) : tT,
                        }),
                        er || eD
                            ? null
                            : (0, s.jsx)(eK, {
                                  className: a()(e0.jv, ed),
                                  emojiListRef: eR,
                                  sectionDescriptors: tc,
                                  intention: i,
                                  channel: r,
                                  fallbackGuildId: eW,
                                  showOnlyUnicode: em,
                                  pinnedPacks: eH,
                                  onViewEmojiPacks: eP ? ek : void 0,
                                  showEmojiPacksDiscovery: eF,
                                  onDismissEmojiPacksDiscovery: eG,
                              }),
                    ],
                }),
            });
        return (0, s.jsx)(C.f5, { value: e7, children: tb });
    });
