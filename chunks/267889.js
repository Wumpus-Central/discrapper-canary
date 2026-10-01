(n.d(t, { A: () => ie }), n(321073));
var i,
    s,
    l = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    c = n(649852),
    u = n.n(c),
    d = n(788413),
    m = n(17928),
    f = n(554146),
    E = n(319060),
    I = n(305866),
    g = n(554375),
    h = n(820284),
    A = n(212245),
    _ = n(964486),
    p = n(793574),
    N = n(95561),
    C = n(688810),
    O = n(379848),
    S = n(236285),
    x = n(536637),
    T = n.n(x),
    y = n(73153),
    j = n(935208);
let R = { lastSeenNewlyAddedEmojiIds: {} },
    b = R,
    L = {};
function v() {
    for (let e in L) b.lastSeenNewlyAddedEmojiIds[e] = L[e];
}
class M extends m.Ay.PersistedStore {
    static displayName = "NewlyAddedEmojiStore";
    static persistKey = "NewlyAddedEmojiStore";
    static migrations = [
        (e) => {
            let t = e.lastSeenNewlyAddedEmojiIds,
                n = {};
            for (let e in t) {
                let i = t[e];
                n[e] = { id: i, lastSeen: Date.now(), acknowledged: !1 };
            }
            return { lastSeenNewlyAddedEmojiIds: n };
        },
    ];
    initialize(e) {
        b = e ?? R;
    }
    getState() {
        return b;
    }
    getLastSeenEmojiByGuild(e) {
        return b.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || j.default.compare(t, n.id) > 0) return !0;
        {
            let e = T()(n.lastSeen);
            return T()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let D = new M(y.h, {
    LOGOUT: function () {
        ((b = R), (L = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? b.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > j.default.compare(i.id, n)
            ? (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (L[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? b.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > j.default.compare(i.id, n)) && (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: v,
    CLEAR_CACHES: function () {
        ((b = R), v());
    },
    CONNECTION_CLOSED: v,
});
var P = n(451731),
    w = n(850992),
    U = n(151271),
    G = n(60587),
    k = n(887695),
    F = n(562708),
    J = n(462887),
    V = n(939249),
    K = n(789645),
    B = n(696986),
    H = n(297264),
    X = n(834730),
    W = n(736653),
    Z = n(139286),
    Y = n(976860),
    z = n(71393),
    q = n(384684),
    $ = n(985242),
    Q = n(652215),
    ee = n(746080),
    et = n(375708),
    en = n(196404);
function ei(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, W.Ay)()), (0, J.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, C.Ay)(p.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, Z.A)({
        type: F.ImpressionTypes.MODAL,
        name: F.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([z.A], () => z.A.getGuild(s)),
        u = (0, m.bG)([q.A], () => null != s && q.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? et.intl.string(et.t.GoLM9z) : et.intl.formatToPlainString(et.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? et.intl.string(et.t.PjZ7Db) : et.intl.string(et.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: en.kL,
        children: [
            (0, l.jsx)("div", { className: en.Tp }),
            (0, l.jsxs)("div", {
                className: en.Qs,
                children: [
                    (0, l.jsx)(V.D, {
                        className: en.b,
                        "aria-label": et.intl.string(et.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(K.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": et.intl.string(et.t.cpT0Cq),
                            className: en.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: en.Tn }),
                    (0, l.jsx)(B.h, { size: 22 }),
                    (0, l.jsx)(H.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: en.wx,
                        children: et.intl.string(et.t.cBjkcx),
                    }),
                    (0, l.jsx)(B.h, { size: 4 }),
                    (0, l.jsx)(X.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: en.h_,
                        children: d,
                    }),
                    (0, l.jsx)(B.h, { size: 24 }),
                    (0, l.jsx)($.A, {
                        text: f,
                        onClick: function () {
                            (0, Y.pX)(Q.BVt.CHANNEL(s, ee.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var es = n(450510),
    el = n(885386),
    er = n(808728),
    ea = n(287809),
    eo = n(174459),
    ec = n(474090),
    eu = n(240248),
    ed = n(822123),
    em = n(734057),
    ef = n(309010),
    eE = n(690521),
    eI = n(818645),
    eg = n(316884),
    eh = n(307731),
    eA = n(698279);
function e_(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = em.A.getChannel(ef.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eh.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : S.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? S.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eh.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : S.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? S.Ay.getGuildEmoji(a) : [],
        f = S.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eg.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eI.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    N.Ay.trackWithMetadata(
        t === eh.EmojiIntention.REACTION ? Q.HAw.REACTION_PICKER_OPENED : Q.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eA.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(eE.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eE.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eh.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var ep = n(206248),
    eN = n(403581),
    eC = n(724651),
    eO = n(732280),
    eS = n(783420),
    ex = n(158045),
    eT = n(202541);
let ey = { object: Q.ZSU.BUTTON_CTA, section: Q.JJy.SUPER_REACTION_PICKER };
function ej(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = et.intl.string(et.t.eikz43),
        r = (0, eO.V)(),
        a = (0, eC.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? eT.pe.TIER_2,
        d = c
            ? null != a
                ? et.intl.formatToPlainString(et.t.bkQ4bH, { percent: a.discount.amount })
                : (0, ex.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : et.intl.string(et.t.sEAnVH);
    return (0, l.jsx)(eS.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: ey,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(ep.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: et.intl.string(et.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: eN.t, onClick: r },
            });
        },
    });
}
var eR = n(435558),
    eb = n.n(eR),
    eL = n(837381),
    ev = n(460905),
    eM = n(775602),
    eD = n(713517),
    eP = n(88218),
    ew = n(407698),
    eU = n(941971),
    eG = n(531685),
    ek = n(406810),
    eF = n(27232),
    eJ = n(369606),
    eV = n(413249),
    eK = n(141060),
    eB = n(687966),
    eH = n(115979),
    eX = n(524501),
    eW = n(926268),
    eZ = n(138134),
    eY = n(7807),
    ez = n(732139);
let eq = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case ez.R2.RECENT:
                    return ek.ClockIcon;
                case ez.R2.FAVORITES:
                    return eF.StarIcon;
                case ez.R2.TOP_GUILD_EMOJI:
                    return eJ.TrophyIcon;
                case ez.R2.PEOPLE:
                    return ev.n;
                case ez.R2.NATURE:
                    return eV.p;
                case ez.R2.FOOD:
                    return eK.i;
                case ez.R2.ACTIVITY:
                    return eB.GameControllerIcon;
                case ez.R2.TRAVEL:
                    return eH.h;
                case ez.R2.OBJECTS:
                    return eX.D;
                case ez.R2.SYMBOLS:
                    return eW.HeartIcon;
                case ez.R2.FLAGS:
                    return eZ.FlagIcon;
                case ez.R2.PREMIUM_UPSELL:
                    return eN.t;
                case ez.R2.SOUNDMOJI:
                    return eY.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var e$ = n(724511),
    eQ = n(132500),
    e0 = n(770335),
    e1 = n(7584),
    e2 = n(526292),
    e3 = n(926972),
    e5 = n(711014),
    e8 =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let e4 = [eh.EmojiDisabledReasons.DISALLOW_EXTERNAL, eh.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e7 = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    e6 = n(342379);
let e9 = "expression-guild-",
    { itemIdForIndex: te } = (0, eP.J)(e9),
    tt = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tn = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    ti = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    ts = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tl = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tr = (0, eu.xI)(e6.__invalid_unicodeCategoryShortcutHeight),
    ta = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    to = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tc = ti + tn + 2 * tl,
    tu = tt + tn,
    td = tu + (ta + 2 * to),
    tm = ti + ts + 2 * tl;
function tf(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: i,
            categories: s,
            category: a,
            handleCategorySelect: c,
            isWindowFocused: u,
            useReducedMotion: d,
        } = e,
        m = r.useRef(null),
        { isHoveringOrFocusing: f } = (0, eD.A)(m),
        E = (0, eL.rm)(te(n)),
        I = a.type === ez.s.GUILD ? null : a.id,
        g = t === n,
        h = a.type === ez.s.GUILD ? a.guild : null,
        A = (0, l.jsxs)(V.D, {
            innerRef: m,
            ...E,
            "aria-label": (0, ed.wt)(a, h),
            className: o()({
                [e6.ZG]: null != h,
                [e6.Bj]: null == h,
                [e6.s6]: null == h && g,
                [e6.xg]: a.type === ez.s.RECENT,
            }),
            onClick: () => {
                (null != h &&
                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eA.kx.EMOJI,
                        guild_id: h.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: e6.a$,
                    children: (0, l.jsx)(eU.A, { hovered: f, selected: g, size: "small" }),
                }),
                null != h
                    ? (0, l.jsx)(e$.A, { guild: h, isSelected: g, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == h && null != I
                    ? (0, l.jsx)(eq, { categoryId: I, className: e6.Yl, height: ti, width: ti, size: "custom" })
                    : null,
            ],
        }),
        _ = s[n + 1],
        p = null != _ && a.type === ez.s.GUILD && _.type !== ez.s.GUILD;
    return null != h
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(ew.Q, { guild: h, children: A }),
                  p ? (0, l.jsx)("hr", { className: e6.ny }, "separator") : null,
              ],
          })
        : A;
}
let tE = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: s,
            channel: a,
            fallbackGuildId: c,
            shouldShowSoundmojiInEmojiPicker: u = !1,
            showOnlyUnicode: d = !1,
        } = e,
        f = w.Om.useStore((e) => e.activeCategoryIndex),
        E = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, U.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, U.Ri)(""), w.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        I = (0, A.p)(),
        g = (0, ed.ss)(s, a, { guildId: a?.guild_id ?? c, shouldShowSoundmojiInEmojiPicker: u }),
        h = r.useMemo(() => (d ? (0, ed.CQ)() : g), [g, d]),
        _ = r.useRef(null),
        p = (0, m.bG)([eG.A], () => eG.A.isFocused()),
        N = (0, m.bG)([eM.Ay], () => eM.Ay.useReducedMotion, []),
        C = r.useMemo(
            () =>
                eb().memoize(
                    (e, t) => {
                        let n = h[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tf,
                                {
                                    activeIndex: f,
                                    analyticsContext: I,
                                    categories: h,
                                    category: n,
                                    categoryIndex: t,
                                    handleCategorySelect: E,
                                    isWindowFocused: p,
                                    useReducedMotion: N,
                                },
                                t,
                            );
                    },
                    (e, t) => t,
                ),
            [f, I, h, E, p, N],
        ),
        O = r.useMemo(() => [8, 8, 0, 8], []),
        S = r.useCallback(
            (e, t) => {
                let n = h[t];
                if (n.type === ez.s.RECENT) return tc;
                if (n.type === ez.s.GUILD) {
                    let e = h[t + 1];
                    return null != e && e.type !== ez.s.GUILD ? td : tu;
                }
                return tm;
            },
            [h],
        ),
        {
            nonUnicodeCategoryCount: x,
            firstUnicodeCategoryIndex: T,
            firstUnicodeCategoryOffsetTop: y,
            rowCountBySection: j,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            h.forEach((s) => {
                s.type === ez.s.GUILD
                    ? ((t += 1), (n += 1))
                    : s.type === ez.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = tc + t * tu + td;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: s,
                rowCountBySection: [e, n, i],
            };
        }, [h]),
        [R, b] = r.useState(!0);
    r.useLayoutEffect(() => {
        b(x >= 7);
    }, [x]);
    let L = r.useCallback(
            (e) => {
                let t = _.current?.getListDimensions();
                null == t || (e + t.height - ta >= y ? b(!1) : b(!0));
            },
            [y],
        ),
        v = r.useCallback(
            (e) => {
                (e(T), _.current?.scrollTo(y));
            },
            [y, T],
        ),
        M = r.useCallback(
            (e, t) => {
                let n = h[e];
                if (null == n) return 0;
                let i = R ? tr : 0;
                if (n.type === ez.s.RECENT) return t ? 0 : ts;
                if (n.type === ez.s.GUILD) {
                    let n = h[e + 1];
                    return null != n && n.type !== ez.s.GUILD ? (t ? ta + -2 * to + tn + i : tn) : t ? i : tn;
                }
                return t ? tn + i : 2 * tn;
            },
            [h, R],
        ),
        D = r.useMemo(
            () =>
                function (e, t) {
                    return (0, l.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        P = R ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(eP.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: w.Om,
        categories: h,
        listPadding: O,
        onScroll: L,
        renderCategoryListItem: C,
        renderSection: D,
        rowCount: h.length,
        categoryHeight: S,
        getScrollOffsetForIndex: M,
        rowCountBySection: j,
        navId: "emoji-picker-categories",
        itemIdPrefix: e9,
        children: (e) =>
            x >= 7 &&
            (0, l.jsx)(
                V.D,
                {
                    "aria-hidden": !R,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: o()(e6.KB, { [e6.h_]: !R }),
                    tabIndex: R ? 0 : -1,
                    onClick: () => v(e),
                    children: (0, l.jsx)(ev.n, { size: "custom", color: "currentColor", height: ti, width: ti }),
                },
                P,
            ),
    });
};
var tI = n(49999),
    tg = n(860197);
let th = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(X.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tg.iE,
        children: [
            (0, l.jsx)(eW.HeartIcon, { size: "md", color: "currentColor", className: tg.Kk }),
            (0, l.jsx)("div", {
                className: tg.Qs,
                children: (0, l.jsx)(X.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, l.jsx)(V.D, {
                onClick: () => t(tI.i.UNKNOWN),
                children: (0, l.jsx)(K.P, { size: "md", color: "currentColor", className: tg.VN }),
            }),
        ],
    });
};
var tA = n(202091),
    t_ = n(717421),
    tp = n(343032),
    tN = n(683063),
    tC = n(131607),
    tO = n(748798);
let tS = { tension: 750, mass: 2.5, friction: 70 };
function tx(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([eM.Ay], () => eM.Ay.useReducedMotion),
        a = ea.default.getCurrentUser(),
        c = null != a && !(0, ex.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tC.kn)(u),
        [I, g] = r.useState(!1),
        [h, A] = (0, t_.z)(() => ({})),
        _ = (0, tA.animated)(tp.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tI.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let p = I ? et.intl.string(et.t["Osi/uy"]) : t && !c ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        N = I ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, l.jsx)(tN.u, {
        position: "top",
        title: N,
        body: p,
        asset: (0, l.jsx)(eN.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(V.D, {
            innerRef: i,
            "aria-label": p,
            "aria-pressed": t,
            onClick: function () {
                (A({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tS }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tO.Pf, { [tO.wM]: t }),
            children: (0, l.jsx)(_, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tO.Kk,
            }),
        }),
    });
}
var tT = n(866665),
    ty = n(821609),
    tj = n(644508),
    tR = n(824832),
    tb = n(267102),
    tL = n(242812);
function tv(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, tb.Us)() === Q.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, tj.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: Q.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tT.m, {
                asContainer: !0,
                text: d ? et.intl.string(et.t.RMbedC) : null,
                children: (0, l.jsx)(ty.$, {
                    text: et.intl.string(et.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: tL.F,
                children: (0, l.jsx)(tR.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var tM = n(833272),
    tD = n(82495),
    tP = n(260762),
    tw = n(915089),
    tU = n(650583),
    tG = n(683829);
let tk = (0, tw.Ld)(),
    tF = tM.A.convert.fromCodePoint("1f44f"),
    tJ = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tV(e) {
    switch (tM.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return et.intl.string(et.t["BVK5b/"]);
        case "1f3fc":
            return et.intl.string(et.t.xJWOK8);
        case "1f3fd":
            return et.intl.string(et.t["MB+T5g"]);
        case "1f3fe":
            return et.intl.string(et.t.MODud2);
        case "1f3ff":
            return et.intl.string(et.t["0uzqsc"]);
        default:
            return et.intl.string(et.t.bGN1ow);
    }
}
let tK = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, eL.rm)(`item-${r}`),
        o = eE.Ay.getURL(tF + n),
        c = (0, t_.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(V.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: tG.B6,
        children: (0, l.jsx)(tA.animated.div, {
            "aria-label": tV(n),
            className: tG.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function tB(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, tP.A)("diversity"),
        a = (0, t_.z)({ height: (tJ + 14) * (e1.W$.length + 1), from: { height: tJ + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...e1.W$];
    return (
        eb().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(eL.hD, {
            navigator: s,
            children: (0, l.jsx)(eL.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tA.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: tG.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(tK, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let tH = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = eE.Ay.getURL(tF + n),
        [a, c] = r.useState(!1),
        u = (0, tD.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(tG.fx, i),
        children: [
            (0, l.jsx)(V.D, {
                innerRef: d,
                className: tG.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tV(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": tk,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: tG.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === tU.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(tB, {
                          id: tk,
                          selectedSurrogate: n,
                          onClick: function (e) {
                              ((0, g.dK)(e), c(!1), t.current?.focus());
                          },
                      }),
                  })
                : null,
        ],
    });
};
var tX = n(462180),
    tW = n(602034),
    tZ = n(683438);
let tY = r.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: i,
                onKeyDown: s,
                onFocus: a,
                autoFocus: o,
                defaultSearchPlaceholder: c,
            } = e,
            u = r.useRef(null),
            d = (0, U.RQ)((e) => e.searchQuery),
            [m, f, E] = w.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tX.x,
            ),
            I = r.useCallback(
                (e) => {
                    (w.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        w.Om.setInspectedExpressionPosition(0, 0),
                        w.Om.setSearchPlaceholder(null),
                        (0, U.Ri)(e),
                        n.current?.scrollTo(0));
                },
                [n],
            ),
            g = r.useCallback(() => {
                I("");
            }, [I]);
        return (
            r.useImperativeHandle(t, () => ({ focus: () => u.current?.focus() })),
            (0, l.jsx)(tZ.I, {
                autoFocus: o,
                query: d,
                ref: u,
                placeholder: f ?? c,
                onClear: g,
                onKeyDown: function (e) {
                    switch (e.key) {
                        case tU.dh.ARROW_LEFT:
                        case tU.dh.ARROW_RIGHT:
                        case tU.dh.ARROW_UP:
                        case tU.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    s(e);
                },
                onFocus: a,
                onChange: I,
                inputProps: {
                    role: "combobox",
                    "aria-label": et.intl.string(et.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-autocomplete": "list",
                    "aria-controls": i,
                    "aria-expanded": !0,
                    ...(E ? { "aria-activedescendant": (0, tW.Aq)(i, m.columnIndex, m.rowIndex) } : void 0),
                },
            })
        );
    }),
    tz = r.memo(tY);
var tq = n(381575);
let t$ = function (e) {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: s,
            emojiListRef: r,
            onKeyDown: a,
            onFocus: c,
            autoFocus: u,
            searchBarRef: d,
            diversitySurrogate: m,
            isBurstReaction: f,
            onBurstReactionToggle: E,
            burstToggleRef: I,
            renderHeader: g,
            showAddEmojiButton: h = !0,
            closePopout: A,
        } = e,
        _ = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tz, {
                    emojiListRef: r,
                    gridNavigatorId: ez.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, ed.wT)(i, f),
                }),
                i === eh.EmojiIntention.REACTION ? (0, l.jsx)(tx, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(tH, { searchBarRef: d, className: tq.fx, selectedSurrogate: m }),
                i !== eh.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(tv, { channel: t, closePopout: A }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(tq.wx, s), children: null != g ? g(_) : _ });
};
var tQ = n(182922),
    t0 = n(363195),
    t1 = n(486020),
    t2 = n(977566);
function t3(e) {
    return null != e && "animated" in e;
}
let t5 = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = w.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case e8.EMOJI:
            t = f?.emoji;
            break;
        case e8.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        case e8.SOUNDMOJI:
        default:
            t = null;
    }
    let E = (0, m.bG)([z.A], () => (null !== t && t.type === e0.i.GUILD ? z.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([eG.A], () => eG.A.isFocused()),
        g = (0, m.bG)([eM.Ay], () => eM.Ay.useReducedMotion, []),
        h = el.Sf.useSetting(),
        A = (0, ed.O7)(o, t3(t) ? t : null),
        _ = (0, m.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: p } = (0, eg.A)(o, c),
        N = f?.type === e8.EMOJI ? f.subCategory : ez.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    t3(t) &&
                    N !== ez.tm.NONE &&
                    (N === ez.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === e0.i.GUILD &&
                        (0, P.mz)(t.guildId, p[0].id),
                    null != d.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === ez.tm.NEWLY_ADDED_EMOJI && D.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (t3(e)) {
                let t = null != e.id ? t1.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(X.E, {
                          variant: "text-md/normal",
                          className: t2.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, eE.N)(e) ?? "", src: t, className: t2.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: t2.Kk, src: (0, J.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: t2.Kk, src: (0, J.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: _, theme: t0.A.theme }),
        O =
            null != E
                ? (0, l.jsx)(e$.A, { className: t2.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? _.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, eE.N)(t);
    let x = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = t3(t);
        return null != n && i ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(tQ.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: O,
        titlePrimary: i,
        titleSecondary: x,
        isFavorite: A,
        emojiSubCategory: N,
    });
});
var t8 = n(607399),
    t4 = n(765178),
    t7 = n(537652),
    t6 = n(962125),
    t9 = n(240864),
    ne = n(286509),
    nt = n(89366),
    nn = n(10392),
    ni = n(82498),
    ns = n(202639),
    nl = n(414872),
    nr = n(285373),
    na = n(559106),
    no = n(304072),
    nc = n(189551),
    nu = n(289873),
    nd = n(796774),
    nm = n(209932),
    nf = n(817232),
    nE = n(576705);
n(980504);
var nI = n(818348),
    ng = n(821425);
let nh = r.memo(function (e) {
    let t,
        n,
        i,
        s,
        { channelId: a, onSelectSoundmoji: o } = e,
        c = (0, m.bG)([nm.A], () => !nm.A.isFetching() && !nm.A.hasFetchedAllSounds(), []),
        u = (0, m.bG)([em.A], () => em.A.getChannel(a)),
        d =
            ((t = (0, m.bG)([ea.default], () => ex.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, m.bG)([nm.A], () => nm.A.getSoundsForGuild("0"))),
            (i = (0, m.yK)([z.A], () => z.A.getGuildIds())),
            (s = r.useMemo(() => nE.A.can(nI.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            r.useMemo(() => {
                let e = [];
                if (t && s) {
                    let t = i.flatMap((e) => nm.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eb().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = nm.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...eb().sampleSize(t, 4));
                }
                return (e.length < 4 && e.push(...eb().sampleSize(n ?? [], 4 - e.length)), e);
            }, [s, u?.guild_id, n, i, t]));
    return (r.useEffect(() => {
        (0, nd.E7)();
    }, [c]),
    0 === d.length)
        ? (0, l.jsx)(nu.y, {})
        : (0, l.jsx)("div", {
              className: ng.q,
              children: d.map((e, t) =>
                  (0, l.jsx)(
                      nf.Ay,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: u,
                          onSelectItem: (t) => o?.(e, !t.shiftKey),
                      },
                      t,
                  ),
              ),
          });
});
var nA = n(594061),
    n_ = n(771104),
    np = n(442433),
    nN = n(147421),
    nC = n(723702),
    nO = n(140735),
    nS = n(194261),
    nx = n(703413);
let nT = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nx.S : nx.Y;
    return (0, l.jsx)("img", {
        className: o()(d, a),
        alt: n,
        src: t,
        ref: c,
        "aria-label": s,
        style: { backgroundSize: i, height: i, width: i },
        onLoad: u.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != c.current &&
                          ((u.current = !0), c.current.classList.remove(nx.Y), c.current.classList.add(nx.S));
                  });
              },
    });
};
var ny = n(955388);
let nj = eb().memoize(
        (e) =>
            `${e * eh.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(e1.Ay.numNonDiversitySprites / eh.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nR = eb().memoize(
        (e) =>
            `${e * eh.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(e1.Ay.numDiversitySprites / eh.EmojiSprites.DiversityPerRow)}px`,
    ),
    nb = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : t1.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eh.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nT, {
                              className: ny.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, eE.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(ny.xA, { [ny.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nR(i)),
                              (r = eh.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nj(i)),
                              (r = eh.EmojiSprites.NonDiversityPerRow));
                        let o = (-a % r) * i,
                            c = -Math.floor(a / r) * i;
                        return {
                            backgroundImage: `url('${s}')`,
                            backgroundPosition: `${o}px ${c}px`,
                            backgroundSize: l,
                            height: i,
                            width: i,
                        };
                    })(t, s, i),
                    children: (0, l.jsx)(nO.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: ny.iD,
                          children: (0, l.jsx)(nS.LockIcon, { size: "xs", color: "currentColor", className: ny.fi }),
                      })
                    : null,
            ],
        });
    });
var nL = n(537911);
let nv = r.forwardRef(function (e, t) {
    let n,
        {
            emoji: i,
            isFavorite: s,
            isLargeSize: r,
            isMediumSize: a,
            isInspected: c,
            isDisabled: u,
            showPulse: d,
            columnIndex: f,
            rowIndex: E,
            size: I,
            surrogateCodePoint: g,
            allowAnimatedEmoji: h,
            selectedItemClassName: A,
            inNitroLockedSection: _,
            ...p
        } = e,
        N = (0, m.bG)([z.A], () => (i.type === e0.i.GUILD ? z.A.getGuild(i.guildId) : void 0), [i]);
    return (0, l.jsx)(na.vN, {
        children: (0, l.jsx)("button", {
            ...p,
            className: o()(nL._X, { [nL.lG]: r, [nL.Lh]: a, [nL.Bx]: c, [A ?? ""]: c, [nL.TV]: d }),
            "data-type": G.g.EMOJI,
            "data-id": i.id,
            "data-name": i.name,
            "data-surrogates": "surrogates" in i ? i.surrogates : null,
            "data-animated": i.animated ? "true" : null,
            ref: t,
            children: (0, l.jsx)(nb, {
                "aria-label":
                    ((n = (0, eE.N)(i)),
                    (N?.name != null &&
                        (n = et.intl.formatToPlainString(et.t["nXv4/B"], { names: n, guildName: N.name })),
                    s)
                        ? et.intl.formatToPlainString(et.t["9FI9Z0"], { names: n })
                        : n),
                columnIndex: f,
                rowIndex: E,
                emoji: i,
                size: I,
                surrogateCodePoint: g,
                allowAnimatedEmoji: h,
                isLocked: u && !_,
            }),
        }),
    });
});
function nM(e) {
    let {
            descriptor: t,
            emojiItemKey: i,
            isInspected: s,
            rowIndex: a,
            channelGuildId: o,
            onInspect: c,
            onSelect: u,
            isScrolling: d,
            isUsingKeyboardNavigation: f,
            showEmojiFavoriteTooltip: E,
            surrogateCodePoint: I,
            selectedItemClassName: g,
            getEmojiItemProps: h,
            isMediumSize: A,
            isLargeSize: _,
            pulseItemKey: p,
            allowAnimatedEmoji: N,
            setPulseItemKey: C,
            messageId: O,
            isBurstReaction: x,
            rowPosition: T,
            inNitroLockedSection: y,
        } = e,
        [j, R] = r.useState(""),
        b = (0, m.bG)([eM.Ay], () => eM.Ay.useReducedMotion),
        L = (0, m.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
        v = r.useRef(null),
        { emoji: M, size: D, isDisabled: P, columnIndex: w } = t;
    function U() {
        d.current || f.current || c(t);
    }
    let { ref: G, tabIndex: k, onFocus: F, ...J } = h(w, a) ?? {},
        V =
            j !== `${w}:${a}`
                ? (0, l.jsx)(nv, {
                      ref: G,
                      emoji: M,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(M),
                      isLargeSize: _,
                      isMediumSize: A,
                      isInspected: s,
                      isDisabled: P,
                      showPulse: p === i,
                      allowAnimatedEmoji: N,
                      onFocus: F ?? U,
                      onMouseMove: U,
                      onClick: (e) => {
                          if (
                              null != v.current &&
                              null != T &&
                              null != O &&
                              !e.shiftKey &&
                              null != M.name &&
                              x &&
                              !b &&
                              N
                          ) {
                              let e = null == M.id ? e1.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = v.current.getBoundingClientRect();
                              ((t.x = T.x + (w + 1) * D), R(`${w}:${a}`), (0, nN.h)(O, e, M.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !S.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) &&
                                  C(i),
                                  (0, es.sF)(es._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, np.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("638221"),
                                  n.e("73500"),
                                  n.e("377766"),
                                  n.e("496715"),
                                  n.e("293697"),
                                  n.e("904774"),
                                  n.e("446132"),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, l.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: k,
                      columnIndex: w,
                      rowIndex: a,
                      size: D,
                      surrogateCodePoint: I,
                      selectedItemClassName: g,
                      inNitroLockedSection: y,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...J, key: i, ref: v },
        E
            ? (0, l.jsx)(tT.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, nC.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: V,
              })
            : V,
    );
}
let nD = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: s,
            onSelectSoundmoji: a,
            onInspect: c,
            surrogateCodePoint: u,
            getEmojiItemProps: d,
            getEmojiRowProps: m,
            isScrolling: f,
            isUsingKeyboardNavigation: E,
            rowIndex: I,
            allowAnimatedEmoji: g,
            showEmojiFavoriteTooltip: h,
            channelGuildId: A,
            category: _,
            selectedItemClassName: p,
            channelId: N,
            messageId: C,
            isBurstReaction: O,
            inNitroLockedSection: S,
            handleScrollUpOnSectionCollapse: x,
        } = e,
        T = n(619508),
        y = n(404828),
        j = n(600003),
        R = n(318121),
        b = n(443336),
        L = n(258901),
        v = n(135974),
        M = n(8013),
        P = (0, W.Ay)(),
        U = w.Om.getState(),
        [G, k] = r.useState(U.inspectedExpressionPosition),
        [F, V] = (0, no.A)(null, 300),
        K = r.useRef(null);
    (r.useEffect(
        () =>
            w.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => k(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nA.bW.loadIfNecessary();
        }, []));
    let B = i === ez.as.LARGE,
        H = i === ez.as.MEDIUM;
    function Z(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case e8.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    a = G.rowIndex === n && G.columnIndex === i,
                    u = e.sectionCollapsedToThreeRows
                        ? a
                            ? (0, J.M)(P)
                                ? L
                                : M
                            : (0, J.M)(P)
                              ? T
                              : y
                        : a
                          ? (0, J.M)(P)
                              ? b
                              : v
                          : (0, J.M)(P)
                            ? j
                            : R,
                    m = et.intl.string(e.sectionCollapsedToThreeRows ? et.t.NZI2Zk : et.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: s,
                            icon: a,
                            ariaLabel: u,
                            shouldShowRoundHighlight: m,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: g, columnIndex: h } = e,
                        { ref: A, tabIndex: _, onFocus: N, ...C } = d(h, I) ?? {},
                        O = G.rowIndex === g && G.columnIndex === h;
                    function S() {
                        f.current || E.current || c(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(na.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": u,
                                ref: A,
                                className: o()(nL._X, {
                                    [nL.lG]: B,
                                    [nL.Lh]: H,
                                    [nL.Bx]: O && !m,
                                    [p ?? ""]: O,
                                    [nL.TV]: F === t,
                                }),
                                onFocus: N ?? S,
                                onMouseOver: S,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                onClick: s,
                                tabIndex: _,
                                children: a,
                            }),
                        }),
                    );
                })({
                    handleSelect: function (t) {
                        e.type !== e8.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            f.current ||
                                E.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nc.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || x(),
                                eo.default.track(Q.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nL.Kk, src: u, alt: "" }),
                    ariaLabel: m,
                    shouldShowRoundHighlight: !0,
                });
            }
            case e8.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = G.rowIndex === i && G.columnIndex === n;
                return (0, l.jsx)(
                    nM,
                    {
                        rowIndex: I,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: r,
                        isScrolling: f,
                        isUsingKeyboardNavigation: E,
                        surrogateCodePoint: u,
                        allowAnimatedEmoji: g,
                        selectedItemClassName: p,
                        onSelect: s,
                        onInspect: c,
                        channelGuildId: A,
                        getEmojiItemProps: d,
                        isMediumSize: H,
                        isLargeSize: B,
                        pulseItemKey: F,
                        setPulseItemKey: V,
                        showEmojiFavoriteTooltip: h,
                        messageId: C,
                        isBurstReaction: O,
                        rowPosition: K?.current?.getBoundingClientRect(),
                        inNitroLockedSection: S,
                    },
                    t,
                );
            }
            case e8.SOUNDMOJI:
                return;
        }
    }
    function Y(e) {
        return (0, l.jsx)("ul", {
            ...m(I),
            className: o()(nL.ND, { [nL.HO]: B, [nL.X$]: H }),
            ref: K,
            children: e.map(Z),
        });
    }
    if (_ === ez.R2.SOUNDMOJI)
        return (0, l.jsx)("ul", {
            className: nL.ND,
            ref: K,
            children: (0, l.jsx)(nh, { channelId: N, onSelectSoundmoji: a }),
        });
    if (_ !== ez.s.TOP_GUILD_EMOJI) return Y(t);
    let z = t.filter(
            (e) =>
                e.subCategory === ez.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === e0.i.GUILD &&
                    !D.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        q = t.filter(
            (e) =>
                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === e0.i.GUILD &&
                D.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === q.length
        ? Y(t)
        : (0, l.jsxs)("div", {
              className: nL.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nL.V6, { [nL.$3]: 0 === z.length }), children: Y(z) }),
                  (0, l.jsxs)("div", {
                      className: nL.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nL.eE, { [nL.eM]: 1 === q.length, [nL.Wk]: z.length > 0 }),
                              children: Y(q),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nL.lD, { [nL.EI]: B, [nL.qU]: H, [nL.Wk]: z.length > 0 }),
                              children: [
                                  (0, l.jsx)(n_.A, { foreground: nL.rI }),
                                  (0, l.jsx)(X.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: et.intl.string(et.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nP = n(618723);
let nw = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nU = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nG = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nk = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nF = (0, eu.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nJ = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nV = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nK = r.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: s,
                emojiListRef: a,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                setUpsellConfigs: f,
                sectionDescriptors: E,
                rowCountBySection: I,
                collapsedSections: g,
                setCollapsedSections: h,
                getEmojiItemProps: _,
                getEmojiRowProps: N,
                rowCount: O,
                isUsingKeyboardNavigation: S,
                channelGuildId: x,
                channelId: T,
                messageId: y,
                isBurstReaction: j,
                listHeaderClassName: R,
            } = e,
            b = r.useRef(!1),
            L = w.Om.useStore((e) => e.activeCategoryIndex),
            v = (0, U.RQ)((e) => e.searchQuery),
            M = el.Sf.useSetting(),
            D = (0, m.bG)([ea.default], () => ea.default.getCurrentUser()),
            P = (0, ec.ki)(D),
            { location: F } = (0, A.p)(),
            { analyticsLocations: J } = (0, C.Ay)(),
            [K, B] = r.useState(0),
            [H, W] = r.useState(!1),
            {
                listPadding: Z,
                renderRow: Y,
                renderSection: z,
                renderSectionHeader: q,
                renderSectionFooter: $,
                sectionMarginBottom: ee,
                sectionHeaderHeight: en,
                sectionFooterHeight: ei,
            } = (function (e) {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: i,
                        emojiSize: s,
                        onEmojiSelect: a,
                        onSelectSoundmoji: c,
                        searchQuery: u,
                        sectionDescriptors: d,
                        setCollapsedSections: f,
                        getEmojiItemProps: E,
                        getEmojiRowProps: I,
                        isScrolling: g,
                        isUsingKeyboardNavigation: h,
                        allowAnimatedEmoji: _,
                        channelGuildId: p,
                        channelId: N,
                        messageId: C,
                        isBurstReaction: O,
                        listHeaderClassName: S,
                        activeSectionIndex: x,
                        emojiListRef: T,
                    } = e,
                    y = (0, A.p)(),
                    j = r.useRef(Q.An1),
                    R = r.useMemo(() => ("" !== n ? tM.A.convert.toCodePoint(n) : ""), [n]),
                    b = r.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    L = r.useCallback(
                        (e) => {
                            if (e >= d.length - 1) return !1;
                            let t = d[e],
                                n = d[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [d],
                    ),
                    v = r.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                s = t.has(e);
                            (s ? i.delete(e) : i.add(e),
                                null != n &&
                                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: y.location,
                                        tab: eA.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                e === ez.R2.SOUNDMOJI &&
                                    eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !s }),
                                f(i));
                        },
                        [y, t, f],
                    ),
                    M = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === e8.SOUNDMOJI ? null : e.type === e8.EMOJI ? (0, eE.N)(e.emoji) : e.name;
                        (j.current !== Q.An1 && window.cancelAnimationFrame(j.current),
                            (j.current = window.requestAnimationFrame(() => {
                                (w.Om.setInspectedExpressionPosition(t, n, G.t.MOUSE_EVENT),
                                    w.Om.setSearchPlaceholder(i),
                                    (j.current = Q.An1));
                            })));
                    }, []),
                    D = (0, m.bG)([es.HP], () => es.HP.hasHotspot(es._2.FAVORITE_EMOJI_TOOLTIP), []),
                    P = r.useMemo(
                        () =>
                            eb().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    nD,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: R,
                                        onInspect: M,
                                        onSelect: a,
                                        onSelectSoundmoji: c,
                                        getEmojiItemProps: E,
                                        getEmojiRowProps: I,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: h,
                                        rowIndex: e,
                                        allowAnimatedEmoji: _,
                                        showEmojiFavoriteTooltip: D,
                                        channelGuildId: p,
                                        category: r.sectionId,
                                        selectedItemClassName: nP.__invalid_selectedItem,
                                        channelId: N,
                                        messageId: C,
                                        isBurstReaction: O,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            T.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, R, M, a, c, E, I, g, h, _, D, p, N, C, O, T],
                    );
                r.useEffect(() => () => P.cache?.clear?.(), [P]);
                let k = r.useMemo(
                        () =>
                            eb().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: r, sectionId: a } = n;
                                if (r === ez.s.SEARCH_RESULTS) return;
                                let c =
                                        r === ez.s.GUILD
                                            ? null != i
                                                ? (0, l.jsx)(e$.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, l.jsx)(eq, { categoryId: s, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = i?.name;
                                null != s && (u = (0, ed.Nu)(s, i?.name));
                                let m = x === e,
                                    f = n.isNitroLocked,
                                    E = f && !m,
                                    I = f && m,
                                    g =
                                        r === ez.s.SOUNDMOJI
                                            ? (0, l.jsx)(V.D, {
                                                  className: nP.f3,
                                                  onClick: () => {
                                                      ((0, U.U)(eA.kx.SOUNDBOARD),
                                                          eo.default.track(
                                                              Q.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK,
                                                          ));
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    ne.A,
                                    {
                                        className: o()(nP.wx, S, { [nP.RA]: E, [nP.sp]: I }),
                                        icon: c,
                                        isCollapsed: t.has(a),
                                        onClick: () => v(a, i),
                                        trailing: g,
                                        children: u,
                                    },
                                    a,
                                );
                            }),
                        [d, t, v, S, x],
                    ),
                    F = (0, e2.k0)(),
                    J = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = L(e),
                                r = b(e);
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nP.Wy, {
                                        [nP.YD]: e === d.length - 1,
                                        [nP.jl]: t.has(i.sectionId),
                                        [nP.cW]: i.isNitroLocked,
                                        [nP.T5]: s || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, L, b],
                    ),
                    K = r.useCallback(
                        (e) =>
                            L(e)
                                ? F
                                    ? (0, l.jsx)(nl.ap, {})
                                    : (0, l.jsx)(nl.Ay, {})
                                : b(e)
                                  ? (0, l.jsx)("div", { className: nP.pQ })
                                  : null,
                        [L, b, F],
                    ),
                    B = r.useCallback((e) => (L(e) ? 41 : 33 * !!b(e)), [L, b]),
                    H = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || L(e) || b(e) ? 0 : nJ),
                        [t, d, L, b],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? nk : nw, nU, nG, 0], [u]),
                    renderRow: P,
                    renderSection: J,
                    renderSectionHeader: k,
                    renderSectionFooter: K,
                    sectionMarginBottom: H,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === ez.s.SEARCH_RESULTS ? 0 : nF), [d]),
                    sectionFooterHeight: B,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                searchQuery: v,
                sectionDescriptors: E,
                setCollapsedSections: h,
                getEmojiItemProps: _,
                getEmojiRowProps: N,
                isScrolling: b,
                isUsingKeyboardNavigation: S,
                allowAnimatedEmoji: M,
                channelGuildId: x,
                channelId: T,
                messageId: y,
                isBurstReaction: j,
                listHeaderClassName: R,
                activeSectionIndex: K,
                emojiListRef: a,
            }),
            er = (0, k.Fk)({
                activeCategoryIndex: L,
                isScrolling: b,
                listRef: a,
                onActiveCategoryIndexChange: function (e) {
                    (B(e), "" === v && w.Om.setActiveCategoryIndex(e));
                },
                scrollOffset: 0,
                searchQuery: v,
                disableForSearch: !1,
            });
        (0, k.FV)({ searchQuery: v, activeCategoryIndex: L, listRef: a });
        let eu = r.useCallback(
                (e) => {
                    (er(e),
                        nB({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: v, setShowUpsell: W }));
                },
                [er, a, E, v, W],
            ),
            em = E.length > 0;
        (r.useEffect(() => {
            H &&
                (eo.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eT.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: F,
                    location_stack: J,
                }),
                (0, nn.sq)(Q.U7l.PREMIUM_UPSELL_VIEWED, J, () => (0, ni.uq)(eT.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [F, J, H]),
            r.useEffect(() => {
                "" !== v && W(!1);
            }, [v]));
        let ef = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(ef.current),
                    (ef.current = setTimeout(() => {
                        (em
                            ? t4.O.announce(et.intl.string(et.t.uZ4F2O), "polite")
                            : t4.O.announce(et.intl.string(et.t.IxxiKF), "assertive"),
                            (ef.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(ef.current);
                    }
                ),
                [em, v],
            ),
            (0, l.jsxs)("div", {
                className: nP.AD,
                children: [
                    em
                        ? (0, l.jsx)(t6.A, {
                              role: "none presentation",
                              className: nP.p_,
                              listPadding: Z,
                              onScroll: eu,
                              renderRow: Y,
                              renderSection: z,
                              renderSectionHeader: q,
                              renderSectionFooter: $,
                              rowCount: O,
                              rowCountBySection: I,
                              rowHeight: c + 2 * nV,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: ee,
                              sectionFooterHeight: ei,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(t7.A, {
                              message: (0, l.jsx)(X.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: et.intl.string(et.t.IxxiKF),
                              }),
                              className: nP.BZ,
                          }),
                    P || t8.Fr
                        ? null
                        : (0, l.jsx)(ns.d, {
                              showUpsell: H,
                              text:
                                  ((t = (0, ex.Dd)(eT.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: e7.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nt.qD)()), (0, ex.LE)(n, eT.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: Q.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nr.l, {
                                  size: "sm",
                                  className: nP.ij,
                                  location: p.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    nB = eb().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, t9.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nH = n(506774),
    nX = n(28863),
    nW = n(277984),
    nZ = n(404374),
    nY = n(780964),
    nz = n(766075),
    nq = n(166403),
    n$ = n(506150);
let nQ = "premiumRetentionEmojiPickerNotice",
    n0 = nH.w.get(nQ),
    n1 = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([nq.A], () => ({
                subscription: nq.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nq.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, nW.hP)();
            }, [o]),
            null == a || !(0, ex.PK)(a.status) || i)
        )
            return null;
        let c = a.status === Q.Dmq.PAST_DUE ? (0, ex.ji)(a).expiresDate : T()(a.currentPeriodStart).add(eT.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (n0 === u) return null;
        let d =
            ex.Ay.getPremiumType(a.planId) === eT.PremiumTypes.TIER_0
                ? nZ.k0.PREMIUM_TIER_0
                : ex.Ay.getPremiumType(a.planId) === eT.PremiumTypes.TIER_1
                  ? nZ.k0.PREMIUM_TIER_1
                  : nZ.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(X.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: n$.g$,
            children: [
                (0, l.jsx)(eN.t, { size: "md", className: n$.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: n$.Xn,
                    children: [
                        (0, l.jsx)(X.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: ex.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(nX.Anchor, {
                                onClick: () => {
                                    ((0, ed.xf)(n), t(), (0, nz.openUserSettings)(nY.X.NITRO_PANEL));
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(V.D, {
                    onClick: () => {
                        (nH.w.set(nQ, u), (n0 = u), s(!0));
                    },
                    children: (0, l.jsx)(K.P, { size: "md", color: "currentColor", className: n$.YF }),
                }),
            ],
        });
    };
var n2 = n(148361);
let n3 = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n5 = (0, eu.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function n8(e) {
    return e.stopPropagation();
}
function n4(e, t) {
    w.Om.setInspectedExpressionPosition(e, t, G.t.GRID_NAVIGATOR_EVENT);
}
let n7 = u()(ed.bo, 200),
    n6 = u()(ed.Wi, 200),
    n9 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    ie = r.memo(
        r.forwardRef(function (e, t) {
            let n,
                i,
                {
                    pickerIntention: s,
                    channel: a,
                    guildId: c,
                    closePopout: u,
                    emojiSize: E = ez.as.MEDIUM,
                    hasTabWrapper: x = !1,
                    onSelectEmoji: T,
                    onSelectSoundmoji: y,
                    containerWidth: j,
                    onNavigateAway: R,
                    persistSearch: b,
                    className: L,
                    headerClassName: v,
                    analyticsOverride: M = n9,
                    searchProps: F = {},
                    wrapper: J,
                    shouldHidePickerActions: V = !1,
                    messageId: K,
                    renderHeader: B,
                    listHeaderClassName: H,
                    categoryListClassName: X,
                    shouldShowSoundmojiInEmojiPicker: W = !1,
                    showOnlyUnicode: Z = !1,
                    showAddEmojiButton: Y,
                } = e,
                { onFocus: q, onKeyDown: $, autoFocus: ee = !0, accessory: en } = F,
                eu = (0, m.bG)([er.Ay], () => (null != c ? er.Ay.getDefaultChannel(c) : null), [c]),
                [em, ef] = r.useState(null),
                eA = r.useRef(""),
                ep = (0, U.RQ)((e) => e.searchQuery),
                eN = r.useRef(null),
                eC = r.useRef(null),
                eO = r.useRef(null);
            null == a && null != eu && (a = eu);
            let eS = a?.getGuildId() ?? c ?? null,
                [ex, eT] = r.useState(!1),
                ey = r.useRef(null),
                eR = ea.default.getCurrentUser(),
                eL = (0, ec.ki)(eR),
                ev = ex && eL;
            r.useImperativeHandle(t, () => ({ onPickerOpen: e9 }));
            let { location: eM } = (0, A.p)(),
                { page: eD, section: eP, object: ew, openPopoutType: eU, popoutLocation: eG } = M,
                ek = r.useMemo(() => ({ ...eM, section: eP ?? Q.JJy.EMOJI_PICKER_POPOUT }), [eM, eP]),
                { analyticsLocations: eF } = (0, C.Ay)(p.A.EMOJI_PICKER),
                { diversitySurrogate: eJ } = (0, m.cf)([S.Ay], () => ({ diversitySurrogate: S.Ay.diversitySurrogate })),
                eV = (0, ed.sL)(ep, a, s, Z),
                eK = null == eV ? 0 : eV.locked.length + eV.unlocked.length,
                eB = el.iM.useSetting(),
                eH = r.useMemo(() => new Set(eB), [eB]),
                eX = r.useCallback((e) => {
                    el.iM.updateSetting(Array.from(e));
                }, []),
                eW = (0, k.oV)({ gridWrapperRef: eN, containerWidth: j, listPaddingLeft: n5, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eZ,
                    sectionDescriptors: eY,
                    emojiGrid: eq,
                    columnCounts: e$,
                } = (function (e) {
                    let {
                            channel: t,
                            fallbackGuildId: n,
                            collapsedSections: i,
                            pickerIntention: s,
                            emojiSearchResults: l,
                            gridWidth: a,
                            emojiPaddingHorizontal: o,
                            emojiSpriteSize: c,
                            shouldShowSoundmojiInEmojiPicker: u,
                            showOnlyUnicode: d,
                        } = e,
                        f = (0, m.bG)([S.Ay], () => S.Ay.categories),
                        E = r.useMemo(() => (d ? e1.Ay.getCategories() : f), [f, d]),
                        I = (0, m.bG)([z.A], () => z.A.getGuild(t?.getGuildId()), [t]),
                        g = t?.getGuildId() ?? n,
                        h = (0, m.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(g), [g]),
                        A = (0, ed.XI)(g),
                        _ = (0, ed.Fj)(g),
                        p = (0, ed.QZ)(g),
                        { topEmojis: N, newlyAddedEmojis: C } = (0, eg.A)(g, s),
                        O = (0, m.yK)([e5.Ay], () => e5.Ay.getFlattenedGuildIds(), []),
                        x = (0, m.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
                        T = (0, m.bG)([ea.default], () => ea.default.getCurrentUser()),
                        y = (0, ec.ki)(T),
                        j = (0, e2.k0)(),
                        R = h.getGroupedCustomEmoji(),
                        b = (0, e3.Ym)({ location: "useEmojiGrid" });
                    return r.useMemo(() => {
                        let e = [],
                            n = [],
                            r = [],
                            d = [],
                            m = 0,
                            f = 0;
                        if (null != h && null != a) {
                            let h = Math.floor(a / (c + 2 * o)),
                                T = 3 * h;
                            function g(l, a) {
                                let o = new Map(),
                                    u = i.has(a.sectionId),
                                    [E, I] = eb().partition(l, (e) => {
                                        let n = eE.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                        return (o.set(e, n), !n);
                                    }),
                                    g = E.concat(I),
                                    A = a.guild,
                                    _ = g.length > T && null != A && a.isNitroLocked,
                                    p = _ && !x.has(A.id);
                                p && g.splice(T - 1);
                                let O = Math.ceil((_ ? g.length + 1 : g.length) / h),
                                    S = [];
                                for (let e = 0; e < O; e++) {
                                    let t = e * h,
                                        n = t + h,
                                        i = g
                                            .slice(t, n)
                                            .map((e, t) => ({
                                                type: 0,
                                                emoji: e,
                                                size: c,
                                                isDisabled: o.get(e),
                                                rowIndex: f,
                                                columnIndex: t,
                                                visibleRowIndex: m,
                                                category: a.type,
                                                subCategory:
                                                    a.sectionId === ez.s.TOP_GUILD_EMOJI
                                                        ? (0, ed.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                        : ez.tm.NONE,
                                            }));
                                    if ((S.push(i), !u)) {
                                        if (_ && e === O - 1) {
                                            let t = S[e];
                                            t.push({
                                                type: 1,
                                                guildId: A.id,
                                                name: et.intl.string(et.t.NZI2Zk),
                                                size: c,
                                                rowIndex: e,
                                                columnIndex: t.length,
                                                visibleRowIndex: m,
                                                sectionCollapsedToThreeRows: p,
                                            });
                                        }
                                        (d.push(i.length), r.push(i), m++);
                                    }
                                    f++;
                                }
                                let y = { ...a, count: l.length };
                                (n.push(y), e.push(u ? 0 : O));
                            }
                            if (null != l)
                                (0 !== l.unlocked.length &&
                                    g(l.unlocked, {
                                        type: ez.s.SEARCH_RESULTS,
                                        sectionId: ez.s.SEARCH_RESULTS,
                                        count: l.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== l.locked.length &&
                                        g(l.locked, {
                                            type: ez.s.PREMIUM_UPSELL,
                                            categoryId: ez.R2.PREMIUM_UPSELL,
                                            sectionId: ez.s.PREMIUM_UPSELL,
                                            count: l.locked.length,
                                            isNitroLocked: !y,
                                        }));
                            else {
                                if (b && u) {
                                    let t = [{ type: 2, rowIndex: f, columnIndex: 0, visibleRowIndex: m }];
                                    n.push({
                                        type: ez.s.SOUNDMOJI,
                                        categoryId: ez.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let s = i.has(ez.R2.SOUNDMOJI);
                                    (!s && (d.push(t.length), r.push(t), m++), e.push(+!s), f++);
                                }
                                for (let e of E)
                                    if (e === ez.R2.CUSTOM) {
                                        function S(n) {
                                            let i = R.get(n);
                                            if (null == i) return;
                                            let l = i.filter(
                                                (e) =>
                                                    !e4.includes(
                                                        eE.Ay.getEmojiUnavailableReason({
                                                            emoji: e,
                                                            channel: t ?? er.Ay.getDefaultChannel(n),
                                                            intention: s,
                                                        }),
                                                    ),
                                            );
                                            if (0 === l.length) return;
                                            let r = z.A.getGuild(n),
                                                a =
                                                    j ||
                                                    (!y &&
                                                        eE.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: l,
                                                            channel: t,
                                                            intention: s,
                                                        }));
                                            g(l, {
                                                categoryId: e,
                                                guild: r,
                                                type: ez.s.GUILD,
                                                sectionId: null != r ? r.id : (0, eQ.A)(),
                                                count: l.length,
                                                isNitroLocked: a,
                                            });
                                        }
                                        if ((null != I && S(I.id), (0, eh.isExternalEmojiAllowedForIntention)(s)))
                                            for (let e of O) (null == I || I.id !== e) && S(e);
                                    } else if (e === ez.R2.TOP_GUILD_EMOJI) {
                                        if (null != I) {
                                            let { allEmojis: t } = (0, eI.W)({ topEmojis: N, newlyAddedEmojis: C });
                                            t.length > 0 &&
                                                g(t, {
                                                    categoryId: e,
                                                    guild: z.A.getGuild(I.id),
                                                    type: ez.s.TOP_GUILD_EMOJI,
                                                    sectionId: ez.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === ez.R2.RECENT) {
                                        let n = (s === eh.EmojiIntention.REACTION ? p : _).filter(
                                            (e) => !eE.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                        );
                                        g(n, {
                                            categoryId: e,
                                            type: ez.s.RECENT,
                                            sectionId: ez.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === ez.R2.FAVORITES) {
                                        let n = A.filter(
                                            (e) => !eE.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                        );
                                        0 !== n.length &&
                                            g(n, {
                                                categoryId: e,
                                                type: ez.s.FAVORITES,
                                                sectionId: ez.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = e1.Ay.getByCategory(e);
                                        null != t &&
                                            g(t, {
                                                categoryId: e,
                                                type: ez.s.UNICODE,
                                                sectionId: e,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                            }
                        }
                        return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                    }, [h, a, c, o, l, i, R, x, t, s, N, C, y, E, I, O, p, _, A, j, b, u]);
                })({
                    gridWidth: eW,
                    fallbackGuildId: eS,
                    channel: a,
                    pickerIntention: s,
                    emojiSearchResults: eV,
                    collapsedSections: eH,
                    emojiPaddingHorizontal: n3,
                    emojiSpriteSize: E,
                    shouldShowSoundmojiInEmojiPicker: W,
                    showOnlyUnicode: Z,
                }),
                { newlyAddedEmojis: e6 } = (0, eg.A)(eS, s);
            ((n = r.useRef({ intention: s, isBurstReaction: ex, analyticsObject: ew })),
                r.useEffect(() => {
                    n.current.intention === eh.EmojiIntention.REACTION && e_(n.current);
                }, []));
            let e9 = r.useCallback(() => {
                    let e = e6.length > 0 ? e6[0].id : null;
                    ((0, P.uV)(eS, e), e_({ intention: s, isBurstReaction: ex, analyticsObject: ew }));
                }, [e6, eS, s, ex, ew]),
                te = (function (e) {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: i,
                            onSelectEmoji: s,
                            setUpsellConfigs: l,
                            emojiSelectAnalytics: a,
                            trackEmojiFavorited: o,
                        } = e,
                        c = (0, m.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                    return r.useCallback(
                        (e, i) => {
                            if (0 === e.type) {
                                let { emoji: r } = e;
                                if (null == r) return;
                                let u = eE.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                                if (i.toggleFavorite)
                                    return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                        ? (0, g.Sw)(r)
                                        : (o?.(e), (0, g.V4)(r)));
                                if (u !== eh.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (u === eh.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                        (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                        return;
                                    }
                                    if (
                                        u === eh.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED &&
                                        r.type === e0.i.GUILD
                                    ) {
                                        (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                        return;
                                    }
                                    u !== eh.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                        (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                                }
                            }
                        },
                        [n, t, s, l, c, a, o],
                    );
                })({
                    pickerIntention: s,
                    selectedChannel: a,
                    fallbackGuildId: eS,
                    closePopout: u,
                    onSelectEmoji: T,
                    setUpsellConfigs: ef,
                    emojiSelectAnalytics: (e, t) => {
                        "" !== ep
                            ? (0, ed.Wf)({
                                  emoji: e.emoji,
                                  location: { ...ek, object: Q.ZSU.EMOJI },
                                  searchQuery: ep,
                                  isLocked: null != t,
                                  intention: s,
                                  messageId: K,
                              })
                            : (0, ed._7)({
                                  emoji: e.emoji,
                                  location: { ...ek, object: ew ?? Q.ZSU.EMOJI, ...(null != eD && { page: eD }) },
                                  pickerIntention: s,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                      D.isNewerThanLastSeen(eS, e.emoji.id),
                                  isBurstReaction: ex,
                                  messageId: K,
                                  lockedReason: t,
                                  visibleRowIndex: e.visibleRowIndex,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, ed.C5)({ emoji: e.emoji, location: { ...ek, object: Q.ZSU.EMOJI } });
                    },
                }),
                tt = r.useCallback(() => {
                    (u(), R?.());
                }, [u, R]),
                {
                    getItemProps: tn,
                    getRowProps: ti,
                    gridContainerProps: ts,
                    handleGridContainerKeyDown: tl,
                    isUsingKeyboardNavigation: tr,
                } = (function (e) {
                    let {
                            analyticsLocation: t,
                            pickerIntention: n,
                            columnCounts: i,
                            onSelectEmoji: s,
                            emojiGrid: l,
                            emojiList: a,
                            channelGuildId: o,
                            isBurstReaction: c,
                        } = e,
                        u = (0, m.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
                        f = r.useCallback(
                            (e, i) => {
                                if (e.type === e8.EMOJI) {
                                    if (null != e.emoji && i.altKey)
                                        return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, g.Sw)(e.emoji)
                                            : ((0, ed.C5)({ emoji: e.emoji, location: { ...t, object: Q.ZSU.EMOJI } }),
                                              (0, g.V4)(e.emoji)));
                                    let l = {
                                        page: null != o ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                        section: Q.JJy.EMOJI_PICKER_POPOUT,
                                        object: Q.ZSU.EMOJI,
                                    };
                                    (c &&
                                        (l = {
                                            page: null != o ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                            section: Q.JJy.EMOJI_PICKER_POPOUT,
                                            object: Q.ZSU.EMOJI,
                                        }),
                                        (0, ed._7)({
                                            emoji: e.emoji,
                                            location: l,
                                            pickerIntention: n,
                                            category: e.category,
                                            subCategory: e.subCategory,
                                            newlyAddedHighlight:
                                                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                                D.isNewerThanLastSeen(o, e.emoji.id),
                                        }),
                                        s({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: c }));
                                }
                            },
                            [s, o, n, u, t, c],
                        ),
                        {
                            gridDispatch: E,
                            getItemProps: I,
                            getRowProps: h,
                            gridContainerProps: A,
                            handleGridContainerKeyDown: _,
                            isUsingKeyboardNavigation: p,
                        } = (0, k.Ff)({
                            columnCounts: i,
                            gridNavigatorId: ez.lq,
                            itemGrid: l,
                            itemList: a,
                            onGridNavigatorItemSelect: f,
                            onGridNavigatorPositionChange: n4,
                        });
                    return (
                        r.useEffect(
                            () =>
                                w.Om.subscribe(
                                    (e) => e.inspectedExpressionPosition,
                                    (e) => {
                                        if (null == e) return;
                                        let { columnIndex: t, rowIndex: n, source: i } = e;
                                        i !== G.t.GRID_NAVIGATOR_EVENT &&
                                            E({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [E],
                        ),
                        {
                            getItemProps: I,
                            getRowProps: h,
                            gridContainerProps: A,
                            handleGridContainerKeyDown: _,
                            isUsingKeyboardNavigation: p,
                        }
                    );
                })({
                    pickerIntention: s,
                    analyticsLocation: ek,
                    columnCounts: e$,
                    onSelectEmoji: T,
                    emojiGrid: eq,
                    emojiList: eC,
                    channelGuildId: eS,
                    isBurstReaction: ev,
                });
            (((e, t) => {
                let [n, i] = r.useState(null);
                (r.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), i(null));
                }, [t, n]),
                    r.useEffect(() => {
                        i(w.Om.getState().activeCategoryIndex);
                    }, [e]));
            })(j, eC),
                r.useLayoutEffect(() => {
                    ee && eO.current?.focus();
                }, [j, eJ, eO, ee]),
                r.useEffect(() => {
                    b || (0, U.Ri)("");
                }, [b]),
                r.useEffect(
                    () => (
                        eo.default.track(Q.HAw.OPEN_POPOUT, {
                            type: eU ?? "Emoji Picker",
                            guild_id: eS,
                            location: eG,
                            ...(0, N.dI)(a),
                        }),
                        () => {
                            (n7.cancel(), n6.cancel());
                        }
                    ),
                    [eU, eS, eG, a],
                ),
                (0, _.Ay)(() => ((0, ed.V$)({ intention: s, location: ek }), (eA.current = ep), w.Om.resetStoreState)),
                r.useEffect(() => () => (0, es.sF)(es._2.FAVORITE_EMOJI_TOOLTIP), []),
                r.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = w.Om.getState().inspectedExpressionPosition;
                    eq[t]?.[e] == null && 0 !== e && w.Om.setInspectedExpressionPosition(0, 0);
                }, [eq]),
                r.useEffect(() => {
                    if (("" === eA.current && "" !== ep && (0, ed.EG)(ek, s), "" !== ep && eA.current !== ep)) {
                        let e = w.Om.getAnalyticsId();
                        0 === eK
                            ? n7({ location: ek, searchQuery: ep, intention: s, loadId: e })
                            : n6({
                                  totalResults: eK,
                                  numEmojiLocked: eV?.locked.length ?? 0,
                                  location: ek,
                                  searchQuery: ep,
                                  intention: s,
                                  loadId: e,
                              });
                    }
                    eA.current = ep;
                }, [ep, ek, eK, eV, s]));
            let ta = J ?? (x ? "div" : I.l),
                to = null != eW;
            em?.type === e7.PREMIUM
                ? (i = (0, l.jsx)(n2.default, {
                      onUpsellClicked: tt,
                      emojiDescriptor: em.emojiDescriptor,
                      pickerIntention: s,
                      analyticsLocation: ek,
                      onClose: () => ef(null),
                      channel: a,
                  }))
                : em?.type === e7.ROLE_SUBSCRIPTION &&
                  (i = (0, l.jsx)(ei, { onClose: () => ef(null), guildId: em.guildId, emojiId: em.emojiId }));
            let tc = (0, l.jsx)(t$, {
                    channel: a,
                    pickerIntention: s,
                    emojiListRef: eC,
                    onKeyDown: (e) => {
                        (tl?.(e), $?.(e));
                    },
                    searchBarRef: eO,
                    onFocus: q,
                    autoFocus: ee,
                    accessory: en,
                    headerClassName: v,
                    diversitySurrogate: eJ,
                    isBurstReaction: ex,
                    onBurstReactionToggle: function () {
                        (eT(!ex), eO.current?.focus());
                    },
                    burstToggleRef: ey,
                    renderHeader: B,
                    showAddEmojiButton: Y,
                    closePopout: u,
                }),
                tu = [];
            S.Ay.hasFavoriteEmojis(eS) || tu.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let td = (0, l.jsx)(h.A, {
                ...ek,
                children: (0, l.jsxs)(ta, {
                    id: ez.Do,
                    "aria-labelledby": x ? ez.k1 : void 0,
                    role: x ? "tabpanel" : void 0,
                    className: o()(tq.iE, { [tq.r6]: x, [tq.cB]: ev }),
                    children: [
                        x ? null : tc,
                        (0, l.jsxs)("div", {
                            className: o()(tq.Fb, L),
                            onScroll: n8,
                            children: [
                                x ? tc : null,
                                (0, l.jsxs)("div", {
                                    className: tq.uK,
                                    ref: eN,
                                    children: [
                                        (0, l.jsx)(n1, { channel: a, closePopout: u }),
                                        (0, l.jsx)(O.Ay, {
                                            contentTypes: tu,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, l.jsx)(th, { markAsDismissed: () => n(tI.i.UNKNOWN) });
                                            },
                                        }),
                                        V
                                            ? null
                                            : (0, l.jsx)("div", {
                                                  className: tq.Iy,
                                                  id: ez.lq,
                                                  ...ts,
                                                  children: to
                                                      ? (0, l.jsx)(nK, {
                                                            collapsedSections: eH,
                                                            diversitySurrogate: eJ,
                                                            emojiGrid: eq,
                                                            emojiListRef: eC,
                                                            emojiSize: E,
                                                            getEmojiItemProps: tn,
                                                            getEmojiRowProps: ti,
                                                            gridWidth: eW,
                                                            isUsingKeyboardNavigation: tr,
                                                            onEmojiSelect: function (e, t) {
                                                                te(e, { ...t, isBurst: ev });
                                                            },
                                                            onSelectSoundmoji: y,
                                                            setUpsellConfigs: ef,
                                                            rowCount: eq.length,
                                                            rowCountBySection: eZ,
                                                            sectionDescriptors: eY,
                                                            setCollapsedSections: eX,
                                                            channelGuildId: eS,
                                                            channelId: a?.id,
                                                            messageId: K,
                                                            isBurstReaction: ev,
                                                            listHeaderClassName: H,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, l.jsx)(t5, {
                                    emojiGrid: eq,
                                    className: tq.qV,
                                    guildId: eS,
                                    pickerIntention: s,
                                    channel: a,
                                }),
                                i,
                                s === eh.EmojiIntention.REACTION
                                    ? (0, l.jsx)(ej, {
                                          targetElementRef: ey,
                                          shouldShow: ex && !eL,
                                          onDismiss: () => eT(!1),
                                      })
                                    : null,
                            ],
                        }),
                        V
                            ? null
                            : (0, l.jsx)(tE, {
                                  className: o()(tq.jv, X),
                                  emojiListRef: eC,
                                  sectionDescriptors: eY,
                                  intention: s,
                                  channel: a,
                                  fallbackGuildId: eS,
                                  shouldShowSoundmojiInEmojiPicker: W,
                                  showOnlyUnicode: Z,
                              }),
                    ],
                }),
            });
            return (0, l.jsx)(C.f5, { value: eF, children: td });
        }),
    );
