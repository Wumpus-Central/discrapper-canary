"use strict";
n.d(t, { A: () => n5 }), n(321073);
var i,
    r,
    a = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    d = n(649852),
    c = n.n(d),
    u = n(788413),
    _ = n(17928),
    E = n(554146),
    A = n(319060),
    h = n(305866),
    I = n(554375),
    f = n(820284),
    p = n(212245),
    T = n(964486),
    m = n(793574),
    g = n(95561),
    S = n(688810),
    N = n(379848),
    C = n(159273),
    O = n(989349),
    R = n.n(O),
    L = n(228366),
    y = n(935208);
let D = { lastSeenNewlyAddedEmojiIds: {} },
    v = D,
    b = {};
function M() {
    for (let e in b) v.lastSeenNewlyAddedEmojiIds[e] = b[e];
}
class P extends _.Ay.PersistedStore {
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
        v = e ?? D;
    }
    getState() {
        return v;
    }
    getLastSeenEmojiByGuild(e) {
        return v.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || y.default.compare(t, n.id) > 0) return !0;
        {
            let e = R()(n.lastSeen);
            return R()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let U = new P(L.h, {
    LOGOUT: function () {
        (v = D), (b = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = b[t] ?? v.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > y.default.compare(i.id, n)
            ? (b[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (b[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = b[t] ?? v.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > y.default.compare(i.id, n)) && (b[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: M,
    CLEAR_CACHES: function () {
        (v = D), M();
    },
    CONNECTION_CLOSED: M,
});
var w = n(451731),
    G = n(850992),
    x = n(151271),
    k = n(60587),
    F = n(887695),
    V = n(562708),
    B = n(462887),
    H = n(939249),
    j = n(789645),
    W = n(696986),
    Y = n(297264),
    K = n(834730),
    $ = n(736653),
    z = n(139286),
    q = n(976860),
    Z = n(71393),
    X = n(384684),
    Q = n(985242),
    J = n(652215),
    ee = n(746080),
    et = n(375708),
    en = n(367955);
function ei(e) {
    let t,
        { onClose: i, guildId: r, emojiId: s } = e,
        l = ((t = (0, $.Ay)()), (0, B.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, S.Ay)(m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, z.A)({
        type: V.ImpressionTypes.MODAL,
        name: V.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: r, emoji_id: s ?? null },
    });
    let d = (0, _.bG)([Z.A], () => Z.A.getGuild(r)),
        c = (0, _.bG)([X.A], () => null != r && X.A.getUserSubscriptionRoles(r).size > 0),
        u = c ? et.intl.string(et.t.GoLM9z) : et.intl.formatToPlainString(et.t["h0u/Hi"], { serverName: d?.name }),
        E = c ? et.intl.string(et.t.PjZ7Db) : et.intl.string(et.t.p8FG1D);
    return (0, a.jsxs)("div", {
        className: en.kL,
        children: [
            (0, a.jsx)("div", { className: en.Tp }),
            (0, a.jsxs)("div", {
                className: en.Qs,
                children: [
                    (0, a.jsx)(H.D, {
                        className: en.b,
                        "aria-label": et.intl.string(et.t.cpT0Cq),
                        onClick: i,
                        children: (0, a.jsx)(j.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": et.intl.string(et.t.cpT0Cq),
                            className: en.yP,
                        }),
                    }),
                    (0, a.jsx)("img", { alt: "", src: l, className: en.Tn }),
                    (0, a.jsx)(W.h, { size: 22 }),
                    (0, a.jsx)(Y.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: en.wx,
                        children: et.intl.string(et.t.cBjkcx),
                    }),
                    (0, a.jsx)(W.h, { size: 4 }),
                    (0, a.jsx)(K.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: en.h_,
                        children: u,
                    }),
                    (0, a.jsx)(W.h, { size: 24 }),
                    (0, a.jsx)(Q.A, {
                        text: E,
                        onClick: function () {
                            (0, q.pX)(J.BVt.CHANNEL(r, ee.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var er = n(450510),
    ea = n(885386),
    es = n(808728),
    el = n(287809),
    eo = n(174459),
    ed = n(474090),
    ec = n(240248),
    eu = n(822123),
    e_ = n(734057),
    eE = n(309010),
    eA = n(690521),
    eh = n(818645),
    eI = n(316884),
    ef = n(307731),
    ep = n(698279);
function eT(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: r, analyticsObject: a } = e,
        s = e_.A.getChannel(eE.Ay.getChannelId()),
        l = s?.getGuildId(),
        o =
            t === ef.EmojiIntention.REACTION
                ? C.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : C.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        d = null != s ? C.Ay.getDisambiguatedEmojiContext(s.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        c =
            t === ef.EmojiIntention.REACTION
                ? C.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : C.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        u = o.slice(0, c),
        _ = null != l ? C.Ay.getGuildEmoji(l) : [],
        E = C.Ay.getDisambiguatedEmojiContext(s?.getGuildId()).getCustomEmoji(),
        { topEmojis: A, newlyAddedEmojis: h } = (0, eI.b)({ guildId: s?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: I, visibleNewlyAddedEmojis: f } = (0, eh.W)({
            topEmojis: A,
            newlyAddedEmojis: h,
            rowSize: i,
        });
    g.Ay.trackWithMetadata(
        t === ef.EmojiIntention.REACTION ? J.HAw.REACTION_PICKER_OPENED : J.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: ep.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: d.length,
            num_animated_expressions_favorites: d.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: d.filter(eA.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: d.filter((e) => null == e.id).length,
            num_expressions_frecent: u.length,
            num_animated_expressions_frecent: u.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: u.filter(eA.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: u.filter((e) => null == e.id).length,
            num_current_guild_expressions: _.length,
            num_custom_expressions_total: E.size,
            num_expressions_top_server: I.length,
            num_animated_expressions_top_server: I.filter((e) => e.animated).length,
            num_expressions_newly_added: f.length,
            num_animated_expressions_newly_added: f.filter((e) => e.animated).length,
            ...(t === ef.EmojiIntention.REACTION && { is_burst: r }),
            ...(null != a && { location_object: a }),
        },
    );
}
var em = n(403581),
    eg = n(775602),
    eS = n(607470),
    eN = n(422936),
    eC = n(732280),
    eO = n(725807),
    eR = n(811611),
    eL = n(202541),
    ey = n(442147);
function eD(e) {
    let { onDismiss: t } = e,
        n = (0, _.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        i = et.intl.string(et.t.eikz43),
        r = (0, eC.V)(),
        s = (0, eN.O)(),
        l = r?.subscription_trial != null || null != s,
        d = { object: J.ZSU.BUTTON_CTA, section: J.JJy.SUPER_REACTION_PICKER };
    return (0, a.jsxs)("div", {
        className: ey.iE,
        children: [
            (0, a.jsx)(H.D, {
                onClick: t,
                className: ey.b,
                "aria-label": et.intl.string(et.t.WAI6xu),
                children: (0, a.jsx)(j.P, { size: "md", color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
                className: ey.Qs,
                children: [
                    (0, a.jsx)("div", {
                        className: ey.jo,
                        children: (0, a.jsx)(eS.A, {
                            className: o()(ey.vK, { [ey.Vk]: l }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    l
                        ? (0, a.jsx)(eR.Ay, {
                              type: eL.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: r?.subscription_trial?.sku_id ?? eL.pe.TIER_2,
                              headingText: et.intl.string(et.t.Wfl5zp),
                              analyticsLocationObject: d,
                              discountOffer: s,
                              trialOffer: r,
                              children: i,
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: ey.wx,
                                      children: [
                                          (0, a.jsx)(em.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: ey.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, a.jsx)(Y.D, {
                                              className: ey.TK,
                                              variant: "heading-xl/bold",
                                              children: et.intl.string(et.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(K.E, { className: ey.Fb, variant: "text-md/normal", children: i }),
                                  (0, a.jsx)("div", {
                                      className: ey.sk,
                                      children: (0, a.jsx)(eO.A, {
                                          subscriptionTier: eL.pe.TIER_2,
                                          textOptions: { textOverride: et.intl.string(et.t.sEAnVH) },
                                      }),
                                  }),
                              ],
                          }),
                ],
            }),
        ],
    });
}
var ev = n(435558),
    eb = n.n(ev),
    eM = n(837381),
    eP = n(460905),
    eU = n(802019),
    ew = n(407698),
    eG = n(531685),
    ex = n(406810),
    ek = n(27232),
    eF = n(369606),
    eV = n(413249),
    eB = n(141060),
    eH = n(687966),
    ej = n(115979),
    eW = n(524501),
    eY = n(926268),
    eK = n(138134),
    e$ = n(7807),
    ez = n(732139);
let eq = s.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case ez.R2.RECENT:
                    return ex.O;
                case ez.R2.FAVORITES:
                    return ek.G;
                case ez.R2.TOP_GUILD_EMOJI:
                    return eF.O;
                case ez.R2.PEOPLE:
                    return eP.n;
                case ez.R2.NATURE:
                    return eV.p;
                case ez.R2.FOOD:
                    return eB.i;
                case ez.R2.ACTIVITY:
                    return eH._;
                case ez.R2.TRAVEL:
                    return ej.h;
                case ez.R2.OBJECTS:
                    return eW.D;
                case ez.R2.SYMBOLS:
                    return eY.C;
                case ez.R2.FLAGS:
                    return eK.i;
                case ez.R2.PREMIUM_UPSELL:
                    return em.t;
                case ez.R2.SOUNDMOJI:
                    return e$.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, a.jsx)(i, { color: "currentColor", ...n });
});
var eZ = n(724511),
    eX = n(132500),
    eQ = n(770335),
    eJ = n(7584),
    e0 = n(526292),
    e1 = n(926972),
    e2 = n(711014),
    e3 =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let e6 = [ef.EmojiDisabledReasons.DISALLOW_EXTERNAL, ef.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e4 = (((r = {})[(r.PREMIUM = 0)] = "PREMIUM"), (r[(r.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), r),
    e5 = n(684454);
let e7 = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e8 = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    e9 = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    te = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tt = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tn = (0, ec.xI)(e5.__invalid_unicodeCategoryShortcutHeight),
    ti = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tr = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ta = e9 + e8 + 2 * tt,
    ts = e7 + e8,
    tl = ts + (ti + 2 * tr),
    to = e9 + te + 2 * tt;
function td(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: i,
            categories: r,
            category: l,
            handleCategorySelect: d,
            isWindowFocused: c,
            useReducedMotion: u,
        } = e,
        _ = (0, eM.rm)(`expression-guild-${n}`),
        E = l.type === ez.s.GUILD ? null : l.id,
        A = t === n,
        h = l.type === ez.s.GUILD ? l.guild : null,
        I = (0, a.jsxs)(H.D, {
            ..._,
            "aria-label": (0, eu.wt)(l, h),
            className: o()({
                [e5.ZG]: null != h,
                [e5.Bj]: null == h,
                [e5.s6]: null == h && A,
                [e5.xg]: l.type === ez.s.RECENT,
            }),
            onClick: () => {
                null != h &&
                    eo.default.track(J.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: ep.kx.EMOJI,
                        guild_id: h.id,
                    }),
                    d(n);
            },
            children: [
                null != h
                    ? (0, a.jsx)(eZ.A, { guild: h, isSelected: A, shouldAnimate: !u && c, isLocked: l.isNitroLocked })
                    : null,
                null == h && null != E
                    ? (0, a.jsx)(eq, { categoryId: E, className: e5.Yl, height: e9, width: e9, size: "custom" })
                    : null,
            ],
        }),
        f = r[n + 1],
        p = null != f && l.type === ez.s.GUILD && f.type !== ez.s.GUILD;
    return null != h
        ? (0, a.jsxs)(s.Fragment, {
              children: [
                  (0, a.jsx)(ew.Q, { guild: h, children: (0, a.jsx)("div", { children: I }) }),
                  p ? (0, a.jsx)("hr", { className: e5.ny }, "separator") : null,
              ],
          })
        : I;
}
let tc = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: r,
            channel: l,
            fallbackGuildId: d,
            shouldShowSoundmojiInEmojiPicker: c = !1,
            showOnlyUnicode: u = !1,
        } = e,
        E = G.Om.useStore((e) => e.activeCategoryIndex),
        A = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, x.RQ)((e) => e.searchQuery),
                i = s.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return s.useCallback(
                (e) => {
                    "" !== n ? ((0, x.Ri)(""), G.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        h = (0, p.p)(),
        I = (0, eu.ss)(r, l, l?.guild_id ?? d, c),
        f = s.useMemo(() => (u ? (0, eu.CQ)() : I), [I, u]),
        T = s.useRef(null),
        m = (0, _.bG)([eG.A], () => eG.A.isFocused()),
        g = (0, _.bG)([eg.Ay], () => eg.Ay.useReducedMotion, []),
        S = s.useMemo(
            () =>
                eb().memoize((e, t) => {
                    let n = f[t];
                    if (null != n)
                        return (0, a.jsx)(
                            td,
                            {
                                activeIndex: E,
                                analyticsContext: h,
                                categories: f,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: A,
                                isWindowFocused: m,
                                useReducedMotion: g,
                            },
                            t,
                        );
                }),
            [E, h, f, A, m, g],
        ),
        N = s.useMemo(() => [8, 8, 0, 8], []),
        C = s.useCallback(
            (e, t) => {
                let n = f[t];
                if (n.type === ez.s.RECENT) return ta;
                if (n.type === ez.s.GUILD) {
                    let e = f[t + 1];
                    return null != e && e.type !== ez.s.GUILD ? tl : ts;
                }
                return to;
            },
            [f],
        ),
        {
            nonUnicodeCategoryCount: O,
            firstUnicodeCategoryIndex: R,
            firstUnicodeCategoryOffsetTop: L,
            rowCountBySection: y,
        } = s.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            f.forEach((r) => {
                r.type === ez.s.GUILD
                    ? ((t += 1), (n += 1))
                    : r.type === ez.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let r = ta + t * ts + tl;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: [e, n, i],
            };
        }, [f]),
        [D, v] = s.useState(!0);
    s.useLayoutEffect(() => {
        v(O >= 7);
    }, [O]);
    let b = s.useCallback(
            (e) => {
                let t = T.current?.getListDimensions();
                null == t || (e + t.height - ti >= L ? v(!1) : v(!0));
            },
            [L],
        ),
        M = s.useCallback(
            (e) => {
                e(R), T.current?.scrollTo(L);
            },
            [L, R],
        ),
        P = s.useCallback(
            (e, t) => {
                let n = f[e];
                if (null == n) return 0;
                let i = D ? tn : 0;
                if (n.type === ez.s.RECENT) return t ? 0 : te;
                if (n.type === ez.s.GUILD) {
                    let n = f[e + 1];
                    return null != n && n.type !== ez.s.GUILD ? (t ? ti + -2 * tr + e8 + i : e8) : t ? i : e8;
                }
                return t ? e8 + i : 2 * e8;
            },
            [f, D],
        ),
        U = s.useMemo(
            () =>
                function (e, t) {
                    return (0, a.jsx)(s.Fragment, { children: t }, e);
                },
            [],
        ),
        w = D ? "shortcut" : "hiddenshortcut";
    return (0, a.jsx)(eU.A, {
        categoryListRef: T,
        expressionsListRef: n,
        className: t,
        store: G.Om,
        categories: f,
        listPadding: N,
        onScroll: b,
        renderCategoryListItem: S,
        renderSection: U,
        rowCount: f.length,
        categoryHeight: C,
        getScrollOffsetForIndex: P,
        rowCountBySection: y,
        children: (e) =>
            O >= 7 &&
            (0, a.jsx)(
                H.D,
                {
                    "aria-hidden": !D,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: o()(e5.KB, { [e5.h_]: !D }),
                    tabIndex: D ? 0 : -1,
                    onClick: () => M(e),
                    children: (0, a.jsx)(eP.n, { size: "custom", color: "currentColor", height: e9, width: e9 }),
                },
                w,
            ),
    });
};
var tu = n(49999),
    t_ = n(975244);
let tE = function (e) {
    let { markAsDismissed: t } = e;
    return (0, a.jsxs)(K.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: t_.iE,
        children: [
            (0, a.jsx)(eY.C, { size: "md", color: "currentColor", className: t_.Kk }),
            (0, a.jsx)("div", {
                className: t_.Qs,
                children: (0, a.jsx)(K.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, a.jsx)(H.D, {
                onClick: () => t(tu.i.UNKNOWN),
                children: (0, a.jsx)(j.P, { size: "md", color: "currentColor", className: t_.VN }),
            }),
        ],
    });
};
var tA = n(183812),
    th = n(459192),
    tI = n(717421),
    tf = n(343032),
    tp = n(131607),
    tT = n(428262),
    tm = n(55833);
let tg = { tension: 750, mass: 2.5, friction: 70 };
function tS(e) {
    let { checked: t, onClick: n } = e,
        i = (0, _.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        r = el.default.getCurrentUser(),
        l = null != r && !(0, tT.TW)(r),
        d = l ? [] : [E.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [c, u] = (0, tp.kn)(d),
        [A, h] = s.useState(!1),
        [I, f] = (0, tI.z)(() => ({})),
        p = (0, tA.animated)(tf.i);
    s.useEffect(() => {
        let e = c === E.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (u(tu.i.DISMISS), setTimeout(() => h(e), 200));
    }, [c, u]);
    let T = A ? et.intl.string(et.t["Osi/uy"]) : t && !l ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        m = A ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, a.jsx)(th.u, {
        position: "top",
        title: m,
        body: T,
        asset: (0, a.jsx)(em.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: A,
        children: (0, a.jsx)(H.D, {
            "aria-label": T,
            "aria-pressed": t,
            onClick: function () {
                f({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tg }),
                    n?.(),
                    h(!1);
            },
            focusProps: { enabled: !1 },
            className: o()(tm.Pf, { [tm.wM]: t }),
            children: (0, a.jsx)(p, {
                style: i ? void 0 : I,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tm.Kk,
            }),
        }),
    });
}
var tN = n(866665),
    tC = n(821609),
    tO = n(644508),
    tR = n(824832),
    tL = n(267102),
    ty = n(487487);
function tD(e) {
    let { channel: t, closePopout: n } = e,
        i = s.useRef(null),
        r = s.useRef(0),
        [l, o] = s.useState(!1),
        [d, c] = s.useState(!1),
        u = (0, tL.Us)() === J.BRT.OVERLAY,
        _ = d || l,
        E = s.useCallback(
            async (e, i, a) => {
                c(!0),
                    n(),
                    await (0, tO.f)({
                        userImage: { data: e, file: i, image: a },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: J.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
                        },
                    }),
                    (r.current += 1),
                    c(!1);
            },
            [t, n],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tN.m, {
                asContainer: !0,
                text: u ? et.intl.string(et.t.RMbedC) : null,
                children: (0, a.jsx)(tC.$, {
                    text: et.intl.string(et.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: _ || u,
                }),
            }),
            (0, a.jsx)("div", {
                className: ty.F,
                children: (0, a.jsx)(tR.Ay, { ref: i, onChange: E, setLoading: o, disabled: _ }, r.current),
            }),
        ],
    });
}
n(667532);
var tv = n(833272),
    tb = n(82495),
    tM = n(260762),
    tP = n(915089),
    tU = n(650583),
    tw = n(252346);
let tG = (0, tP.Ld)(),
    tx = tv.A.convert.fromCodePoint("1f44f"),
    tk = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tF(e) {
    switch (tv.A.convert.toCodePoint(e)) {
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
let tV = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: r, index: s } = e,
        l = (0, eM.rm)(`item-${s}`),
        o = eA.Ay.getURL(tx + n),
        d = (0, tI.z)({ opacity: 1, from: { opacity: +!t }, delay: r }, "animate-always");
    return (0, a.jsx)(H.D, {
        ...l,
        role: "option",
        "aria-selected": 0 === s,
        onClick: () => i(n),
        className: tw.B6,
        children: (0, a.jsx)(tA.animated.div, {
            "aria-label": tF(n),
            className: tw.g4,
            style: { backgroundImage: `url("${o}")`, ...d },
        }),
    });
};
function tB(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        r = (0, tM.A)("diversity"),
        l = (0, tI.z)({ height: (tk + 14) * (eJ.W$.length + 1), from: { height: tk + 14 }, config: { duration: 125 } }),
        o = s.useRef(r);
    s.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let d = ["", ...eJ.W$];
    return (
        eb().remove(d, (e) => e === n),
        d.unshift(n),
        (0, a.jsx)(eM.hD, {
            navigator: r,
            children: (0, a.jsx)(eM.PR, {
                children: (e) => {
                    let { ref: n, ...r } = e;
                    return (0, a.jsx)(tA.animated.div, {
                        ...r,
                        id: t,
                        ref: n,
                        className: tw.J6,
                        style: l,
                        role: "listbox",
                        children: d.map((e, t) =>
                            (0, a.jsx)(tV, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let tH = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        r = eA.Ay.getURL(tx + n),
        [l, d] = s.useState(!1),
        c = (0, tb.A)(null, () => d(!1)),
        u = s.useRef(null);
    return (0, a.jsxs)("div", {
        ref: c,
        className: o()(tw.fx, i),
        children: [
            (0, a.jsx)(H.D, {
                innerRef: u,
                className: tw.Dj,
                onClick: function () {
                    d(!0);
                },
                "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tF(n) }),
                "aria-haspopup": !0,
                "aria-expanded": l,
                "aria-controls": tG,
                tabIndex: l ? -1 : 0,
                children: (0, a.jsx)("div", { className: tw.g4, style: { backgroundImage: `url("${r}")` } }),
            }),
            l
                ? (0, a.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === tU.dh.ESCAPE
                              ? (e.stopPropagation(), d(!1), null != u.current && u.current.focus())
                              : "Tab" === e.key && d(!1);
                      },
                      children: (0, a.jsx)(tB, {
                          id: tG,
                          selectedSurrogate: n,
                          onClick: function (e) {
                              (0, I.dK)(e), d(!1), t.current?.focus();
                          },
                      }),
                  })
                : null,
        ],
    });
};
var tj = n(942381),
    tW = n(602034),
    tY = n(892547);
let tK = s.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: i,
                onKeyDown: r,
                onFocus: l,
                autoFocus: o,
                defaultSearchPlaceholder: d,
            } = e,
            c = s.useRef(null),
            u = (0, x.RQ)((e) => e.searchQuery),
            [_, E, A] = G.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tj.x,
            ),
            h = s.useCallback(
                (e) => {
                    G.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        G.Om.setInspectedExpressionPosition(0, 0),
                        G.Om.setSearchPlaceholder(null),
                        (0, x.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            I = s.useCallback(() => {
                h("");
            }, [h]);
        return (
            s.useImperativeHandle(t, () => ({ focus: () => c.current?.focus() })),
            (0, a.jsx)(tY.I, {
                autoFocus: o,
                query: u,
                ref: c,
                placeholder: E ?? d,
                onClear: I,
                onKeyDown: function (e) {
                    switch (e.key) {
                        case tU.dh.ARROW_LEFT:
                        case tU.dh.ARROW_RIGHT:
                        case tU.dh.ARROW_UP:
                        case tU.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    r(e);
                },
                onFocus: l,
                onChange: h,
                inputProps: {
                    role: "combobox",
                    "aria-label": et.intl.string(et.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-autocomplete": "list",
                    "aria-controls": i,
                    "aria-expanded": !0,
                    ...(A ? { "aria-activedescendant": (0, tW.Aq)(i, _.columnIndex, _.rowIndex) } : void 0),
                },
            })
        );
    }),
    t$ = s.memo(tK);
var tz = n(82058);
let tq = function (e) {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: r,
            emojiListRef: s,
            onKeyDown: l,
            onFocus: d,
            autoFocus: c,
            searchBarRef: u,
            diversitySurrogate: _,
            isBurstReaction: E,
            onBurstReactionToggle: A,
            renderHeader: h,
            showAddEmojiButton: I = !0,
            closePopout: f,
        } = e,
        p = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(t$, {
                    emojiListRef: s,
                    gridNavigatorId: ez.lq,
                    onKeyDown: l,
                    ref: u,
                    onFocus: d,
                    autoFocus: c,
                    defaultSearchPlaceholder: (0, eu.wT)(i, E),
                }),
                i === ef.EmojiIntention.REACTION ? (0, a.jsx)(tS, { checked: E, onClick: A }) : null,
                n ?? (0, a.jsx)(tH, { searchBarRef: u, className: tz.fx, selectedSurrogate: _ }),
                i !== ef.EmojiIntention.NO_CUSTOM_EMOJI && I ? (0, a.jsx)(tD, { channel: t, closePopout: f }) : null,
            ],
        });
    return (0, a.jsx)("div", { className: o()(tz.wx, r), children: null != h ? h(p) : p });
};
var tZ = n(182922),
    tX = n(363195),
    tQ = n(486020),
    tJ = n(877821);
function t0(e) {
    return null != e && "animated" in e;
}
let t1 = s.memo(function (e) {
    let t,
        i,
        { className: r, emojiGrid: l, guildId: o, pickerIntention: d, channel: c } = e,
        u = G.Om.useStore((e) => e.inspectedExpressionPosition),
        E = s.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = u;
            return l[e]?.[t];
        }, [l, u]);
    switch (E?.type) {
        case e3.EMOJI:
            t = E?.emoji;
            break;
        case e3.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: E?.guildId, allNamesString: E?.name };
            break;
        case e3.SOUNDMOJI:
        default:
            t = null;
    }
    let A = (0, _.bG)([Z.A], () => (null !== t && t.type === eQ.i.GUILD ? Z.A.getGuild(t.guildId) : null), [t]),
        h = (0, _.bG)([eG.A], () => eG.A.isFocused()),
        I = (0, _.bG)([eg.Ay], () => eg.Ay.useReducedMotion, []),
        f = ea.Sf.useSetting(),
        p = (0, eu.O7)(o, t0(t) ? t : null),
        T = (0, _.bG)([C.Ay], () => C.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: m } = (0, eI.A)(o, d),
        g = E?.type === e3.EMOJI ? E.subCategory : ez.tm.NONE;
    if (
        (s.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    t0(t) &&
                    g !== ez.tm.NONE &&
                    (g === ez.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eQ.i.GUILD &&
                        (0, w.mz)(t.guildId, m[0].id),
                    null != u.source &&
                        (0, eu.yB)({
                            emoji: t,
                            subCategory: g,
                            position: E.columnIndex + 1,
                            newlyAddedHighlight: g === ez.tm.NEWLY_ADDED_EMOJI && U.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let S = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: r, theme: s } = t;
            if (t0(e)) {
                let t = null != e.id ? tQ.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, a.jsx)(K.E, {
                          variant: "text-md/normal",
                          className: tJ.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, a.jsx)("img", { alt: (0, eA.N)(e) ?? "", src: t, className: tJ.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    l = n(600003),
                    o = n(318121);
                return r.has(e.guildId)
                    ? (0, a.jsx)("img", { className: tJ.Kk, src: (0, B.M)(s) ? l : o, alt: "" })
                    : (0, a.jsx)("img", { className: tJ.Kk, src: (0, B.M)(s) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: f, sectionsExpandedFromThreeRows: T, theme: tX.A.theme }),
        N =
            null != A
                ? (0, a.jsx)(eZ.A, { className: tJ.__invalid_guildIcon, guild: A, shouldAnimate: !I && h })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? T.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, eA.N)(t);
    let O = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = t0(t);
        return null != n && i ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: c, guildId: o, intention: d, guild: A });
    return (0, a.jsx)(tZ.A, {
        className: r,
        graphicPrimary: S,
        graphicSecondary: N,
        titlePrimary: i,
        titleSecondary: O,
        isFavorite: p,
        emojiSubCategory: g,
    });
});
var t2 = n(607399),
    t3 = n(765178),
    t6 = n(537652),
    t4 = n(962125),
    t5 = n(240864),
    t7 = n(286509),
    t8 = n(89366),
    t9 = n(202639),
    ne = n(414872),
    nt = n(400669),
    nn = n(909536),
    ni = n(187322),
    nr = n(304072),
    na = n(189551),
    ns = n(289873),
    nl = n(796774),
    no = n(209932),
    nd = n(805945),
    nc = n(576705);
n(980504);
var nu = n(818348),
    n_ = n(190264);
let nE = s.memo(function (e) {
    let t,
        n,
        i,
        r,
        { channelId: l, onSelectSoundmoji: o } = e,
        d = (0, _.bG)([no.A], () => !no.A.isFetching() && !no.A.hasFetchedAllSounds(), []),
        c = (0, _.bG)([e_.A], () => e_.A.getChannel(l)),
        u =
            ((t = (0, _.bG)([el.default], () => tT.Ay.canUseSoundboardEverywhere(el.default.getCurrentUser()))),
            (n = (0, _.bG)([no.A], () => no.A.getSoundsForGuild("0"))),
            (i = (0, _.yK)([Z.A], () => Z.A.getGuildIds())),
            (r = s.useMemo(() => nc.A.can(nu.xB.USE_EXTERNAL_SOUNDS, c), [c])),
            s.useMemo(() => {
                let e = [];
                if (t && r) {
                    let t = i.flatMap((e) => no.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eb().sampleSize(t, 4));
                } else if (c?.guild_id != null) {
                    let t = no.A.getSoundsForGuild(c?.guild_id)?.filter((e) => e.available);
                    e.push(...eb().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eb().sampleSize(n ?? [], 4 - e.length)), e;
            }, [r, c?.guild_id, n, i, t]));
    return (s.useEffect(() => {
        (0, nl.E7)();
    }, [d]),
    0 === u.length)
        ? (0, a.jsx)(ns.y, {})
        : (0, a.jsx)("div", {
              className: n_.q,
              children: u.map((e, t) =>
                  (0, a.jsx)(
                      nd.Ay,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: c,
                          onSelectItem: (t) => o?.(e, !t.shiftKey),
                      },
                      t,
                  ),
              ),
          });
});
var nA = n(594061),
    nh = n(771104),
    nI = n(442433),
    nf = n(147421),
    np = n(723702),
    nT = n(140735),
    nm = n(194261),
    ng = n(473378);
let nS = (e) => {
    let { src: t, alt: n, size: i, "aria-label": r, className: l } = e,
        d = s.useRef(null),
        c = s.useRef(!1),
        u = c.current ? ng.S : ng.Y;
    return (0, a.jsx)("img", {
        className: o()(u, l),
        alt: n,
        src: t,
        ref: d,
        "aria-label": r,
        style: { backgroundSize: i, height: i, width: i },
        onLoad: c.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != d.current &&
                          ((c.current = !0), d.current.classList.remove(ng.Y), d.current.classList.add(ng.S));
                  });
              },
    });
};
var nN = n(892579);
let nC = eb().memoize(
        (e) =>
            `${e * ef.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(eJ.Ay.numNonDiversitySprites / ef.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nO = eb().memoize(
        (e) =>
            `${e * ef.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eJ.Ay.numDiversitySprites / ef.EmojiSprites.DiversityPerRow)}px`,
    ),
    nR = s.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: r, allowAnimatedEmoji: l, "aria-label": d, isLocked: c } = e,
            u = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : tQ.Ay.getEmojiURL({ id: t.id, animated: l && t.animated, size: ef.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, a.jsx)(nS, {
                              className: nN.N1,
                              "aria-label": d,
                              src: e,
                              size: i,
                              alt: (0, eA.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, a.jsx)("div", {
                    className: o()(nN.xA, { [nN.N1]: c }),
                    style: (function (e, t, i) {
                        let r, a, s;
                        if (!e.useSpriteSheet) return;
                        let l = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((r = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (a = nO(i)),
                              (s = ef.EmojiSprites.DiversityPerRow))
                            : ((r = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (a = nC(i)),
                              (s = ef.EmojiSprites.NonDiversityPerRow));
                        let o = (-l % s) * i,
                            d = -Math.floor(l / s) * i;
                        return {
                            backgroundImage: `url('${r}')`,
                            backgroundPosition: `${o}px ${d}px`,
                            backgroundSize: a,
                            height: i,
                            width: i,
                        };
                    })(t, r, i),
                    children: (0, a.jsx)(nT.A, { children: d }),
                });
            })();
        return (0, a.jsxs)(s.Fragment, {
            children: [
                u,
                c
                    ? (0, a.jsx)("div", {
                          className: nN.iD,
                          children: (0, a.jsx)(nm.X, { size: "xs", color: "currentColor", className: nN.fi }),
                      })
                    : null,
            ],
        });
    });
var nL = n(554592);
let ny = s.forwardRef(function (e, t) {
    let n,
        {
            emoji: i,
            isFavorite: r,
            isLargeSize: s,
            isMediumSize: l,
            isInspected: d,
            isDisabled: c,
            showPulse: u,
            columnIndex: E,
            rowIndex: A,
            size: h,
            surrogateCodePoint: I,
            allowAnimatedEmoji: f,
            selectedItemClassName: p,
            inNitroLockedSection: T,
            ...m
        } = e,
        g = (0, _.bG)([Z.A], () => (i.type === eQ.i.GUILD ? Z.A.getGuild(i.guildId) : void 0), [i]);
    return (0, a.jsx)(ni.vN, {
        children: (0, a.jsx)("button", {
            ...m,
            className: o()(nL._X, { [nL.lG]: s, [nL.Lh]: l, [nL.Bx]: d, [p ?? ""]: d, [nL.TV]: u }),
            "data-type": k.g.EMOJI,
            "data-id": i.id,
            "data-name": i.name,
            "data-surrogates": "surrogates" in i ? i.surrogates : null,
            "data-animated": i.animated ? "true" : null,
            ref: t,
            children: (0, a.jsx)(nR, {
                "aria-label":
                    ((n = (0, eA.N)(i)),
                    (g?.name != null &&
                        (n = et.intl.formatToPlainString(et.t["nXv4/B"], { names: n, guildName: g.name })),
                    r)
                        ? et.intl.formatToPlainString(et.t["9FI9Z0"], { names: n })
                        : n),
                columnIndex: E,
                rowIndex: A,
                emoji: i,
                size: h,
                surrogateCodePoint: I,
                allowAnimatedEmoji: f,
                isLocked: c && !T,
            }),
        }),
    });
});
function nD(e) {
    let {
            descriptor: t,
            emojiItemKey: i,
            isInspected: r,
            rowIndex: l,
            channelGuildId: o,
            onInspect: d,
            onSelect: c,
            isScrolling: u,
            isUsingKeyboardNavigation: E,
            showEmojiFavoriteTooltip: A,
            surrogateCodePoint: h,
            selectedItemClassName: I,
            getEmojiItemProps: f,
            isMediumSize: p,
            isLargeSize: T,
            pulseItemKey: m,
            allowAnimatedEmoji: g,
            setPulseItemKey: S,
            messageId: N,
            isBurstReaction: O,
            rowPosition: R,
            inNitroLockedSection: L,
        } = e,
        [y, D] = s.useState(""),
        v = (0, _.bG)([eg.Ay], () => eg.Ay.useReducedMotion),
        b = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = s.useRef(null),
        { emoji: P, size: U, isDisabled: w, columnIndex: G } = t;
    function x() {
        u.current || E.current || d(t);
    }
    let { ref: k, tabIndex: F, onFocus: V, ...B } = f(G, l) ?? {},
        H =
            y !== `${G}:${l}`
                ? (0, a.jsx)(ny, {
                      ref: k,
                      emoji: P,
                      isFavorite: b.isFavoriteEmojiWithoutFetchingLatest(P),
                      isLargeSize: T,
                      isMediumSize: p,
                      isInspected: r,
                      isDisabled: w,
                      showPulse: m === i,
                      allowAnimatedEmoji: g,
                      onFocus: V ?? x,
                      onMouseMove: x,
                      onClick: (e) => {
                          if (
                              null != M.current &&
                              null != R &&
                              null != N &&
                              !e.shiftKey &&
                              null != P.name &&
                              O &&
                              !v &&
                              g
                          ) {
                              let e = null == P.id ? eJ.Ay.convertNameToSurrogate(P.name) : P.name,
                                  t = M.current.getBoundingClientRect();
                              (t.x = R.x + (G + 1) * U), D(`${G}:${l}`), (0, nf.h)(N, e, P.id, t);
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), u.current || E.current)) return;
                              let n = e.altKey;
                              n && !C.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(P) && S(i),
                                  (0, er.sF)(er._2.FAVORITE_EMOJI_TOOLTIP),
                                  c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nI.L3)(e, async () => {
                              let { default: e } = await Promise.all([n.e("4774"), n.e("46132")]).then(
                                  n.bind(n, 233503),
                              );
                              return (t) => (0, a.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: F,
                      columnIndex: G,
                      rowIndex: l,
                      size: U,
                      surrogateCodePoint: h,
                      selectedItemClassName: I,
                      inNitroLockedSection: L,
                  })
                : null;
    return (0, s.createElement)(
        "li",
        { ...B, key: i, ref: M },
        A
            ? (0, a.jsx)(tN.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, np.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let nv = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: r,
            onSelectSoundmoji: l,
            onInspect: d,
            surrogateCodePoint: c,
            getEmojiItemProps: u,
            getEmojiRowProps: _,
            isScrolling: E,
            isUsingKeyboardNavigation: A,
            rowIndex: h,
            allowAnimatedEmoji: I,
            showEmojiFavoriteTooltip: f,
            channelGuildId: p,
            category: T,
            selectedItemClassName: m,
            channelId: g,
            messageId: S,
            isBurstReaction: N,
            inNitroLockedSection: C,
            handleScrollUpOnSectionCollapse: O,
        } = e,
        R = n(619508),
        L = n(404828),
        y = n(600003),
        D = n(318121),
        v = n(443336),
        b = n(258901),
        M = n(135974),
        P = n(8013),
        w = (0, $.Ay)(),
        x = G.Om.getState(),
        [k, F] = s.useState(x.inspectedExpressionPosition),
        [V, H] = (0, nr.A)(null, 300),
        j = s.useRef(null);
    s.useEffect(
        () =>
            G.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => F(e),
            ),
        [],
    ),
        s.useEffect(() => {
            nA.bW.loadIfNecessary();
        }, []);
    let W = i === ez.as.LARGE,
        Y = i === ez.as.MEDIUM;
    function z(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case e3.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    l = k.rowIndex === n && k.columnIndex === i,
                    c = e.sectionCollapsedToThreeRows
                        ? l
                            ? (0, B.M)(w)
                                ? b
                                : P
                            : (0, B.M)(w)
                              ? R
                              : L
                        : l
                          ? (0, B.M)(w)
                              ? v
                              : M
                          : (0, B.M)(w)
                            ? y
                            : D,
                    _ = et.intl.string(e.sectionCollapsedToThreeRows ? et.t.NZI2Zk : et.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: r,
                            icon: l,
                            ariaLabel: c,
                            shouldShowRoundHighlight: _,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: I, columnIndex: f } = e,
                        { ref: p, tabIndex: T, onFocus: g, ...S } = u(f, h) ?? {},
                        N = k.rowIndex === I && k.columnIndex === f;
                    function C() {
                        E.current || A.current || d(e);
                    }
                    return (0, s.createElement)(
                        "li",
                        { ...S, key: t },
                        (0, a.jsx)(ni.vN, {
                            children: (0, a.jsx)("button", {
                                "aria-label": c,
                                ref: p,
                                className: o()(nL._X, {
                                    [nL.lG]: W,
                                    [nL.Lh]: Y,
                                    [nL.Bx]: N && !_,
                                    [m ?? ""]: N,
                                    [nL.TV]: V === t,
                                }),
                                onFocus: g ?? C,
                                onMouseOver: C,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                onClick: r,
                                tabIndex: T,
                                children: l,
                            }),
                        }),
                    );
                })({
                    handleSelect: function (t) {
                        e.type !== e3.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            E.current ||
                                A.current ||
                                (r(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, na.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || O(),
                                eo.default.track(J.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, a.jsx)("img", { className: nL.Kk, src: c, alt: "" }),
                    ariaLabel: _,
                    shouldShowRoundHighlight: !0,
                });
            }
            case e3.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    s = k.rowIndex === i && k.columnIndex === n;
                return (0, a.jsx)(
                    nD,
                    {
                        rowIndex: h,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: s,
                        isScrolling: E,
                        isUsingKeyboardNavigation: A,
                        surrogateCodePoint: c,
                        allowAnimatedEmoji: I,
                        selectedItemClassName: m,
                        onSelect: r,
                        onInspect: d,
                        channelGuildId: p,
                        getEmojiItemProps: u,
                        isMediumSize: Y,
                        isLargeSize: W,
                        pulseItemKey: V,
                        setPulseItemKey: H,
                        showEmojiFavoriteTooltip: f,
                        messageId: S,
                        isBurstReaction: N,
                        rowPosition: j?.current?.getBoundingClientRect(),
                        inNitroLockedSection: C,
                    },
                    t,
                );
            }
            case e3.SOUNDMOJI:
                return;
        }
    }
    function q(e) {
        return (0, a.jsx)("ul", {
            ..._(h),
            className: o()(nL.ND, { [nL.HO]: W, [nL.X$]: Y }),
            ref: j,
            children: e.map(z),
        });
    }
    if (T === ez.R2.SOUNDMOJI)
        return (0, a.jsx)("ul", {
            className: nL.ND,
            ref: j,
            children: (0, a.jsx)(nE, { channelId: g, onSelectSoundmoji: l }),
        });
    if (T !== ez.s.TOP_GUILD_EMOJI) return q(t);
    let Z = t.filter(
            (e) =>
                e.subCategory === ez.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eQ.i.GUILD &&
                    !U.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        X = t.filter(
            (e) =>
                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eQ.i.GUILD &&
                U.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === X.length
        ? q(t)
        : (0, a.jsxs)("div", {
              className: nL.Ng,
              children: [
                  (0, a.jsx)("div", { className: o()(nL.V6, { [nL.$3]: 0 === Z.length }), children: q(Z) }),
                  (0, a.jsxs)("div", {
                      className: nL.bc,
                      children: [
                          (0, a.jsx)("div", {
                              className: o()(nL.eE, { [nL.eM]: 1 === X.length, [nL.Wk]: Z.length > 0 }),
                              children: q(X),
                          }),
                          (0, a.jsxs)("div", {
                              className: o()(nL.lD, { [nL.EI]: W, [nL.qU]: Y, [nL.Wk]: Z.length > 0 }),
                              children: [
                                  (0, a.jsx)(nh.A, { foreground: nL.rI }),
                                  (0, a.jsx)(K.E, {
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
var nb = n(403714);
let nM = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nP = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nU = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nw = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nG = (0, ec.xI)(A.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nx = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nk = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nF = s.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: r,
                emojiListRef: l,
                emojiSize: d,
                onEmojiSelect: c,
                onSelectSoundmoji: u,
                setUpsellConfigs: E,
                sectionDescriptors: A,
                rowCountBySection: h,
                collapsedSections: I,
                setCollapsedSections: f,
                getEmojiItemProps: T,
                getEmojiRowProps: g,
                rowCount: N,
                isUsingKeyboardNavigation: C,
                channelGuildId: O,
                channelId: R,
                messageId: L,
                isBurstReaction: y,
                listHeaderClassName: D,
            } = e,
            v = s.useRef(!1),
            b = G.Om.useStore((e) => e.activeCategoryIndex),
            M = (0, x.RQ)((e) => e.searchQuery),
            P = ea.Sf.useSetting(),
            U = (0, _.bG)([el.default], () => el.default.getCurrentUser()),
            w = (0, ed.ki)(U),
            V = (0, nn.St)("emoji_picker_floating_upsell"),
            { location: B } = (0, p.p)(),
            { analyticsLocations: j } = (0, S.Ay)(),
            [W, Y] = s.useState(0),
            [$, z] = s.useState(!1),
            {
                listPadding: q,
                renderRow: Z,
                renderSection: X,
                renderSectionHeader: Q,
                renderSectionFooter: ee,
                sectionMarginBottom: en,
                sectionHeaderHeight: ei,
                sectionFooterHeight: es,
            } = (function (e) {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: i,
                        emojiSize: r,
                        onEmojiSelect: l,
                        onSelectSoundmoji: d,
                        searchQuery: c,
                        sectionDescriptors: u,
                        setCollapsedSections: E,
                        getEmojiItemProps: A,
                        getEmojiRowProps: h,
                        isScrolling: I,
                        isUsingKeyboardNavigation: f,
                        allowAnimatedEmoji: T,
                        channelGuildId: m,
                        channelId: g,
                        messageId: S,
                        isBurstReaction: N,
                        listHeaderClassName: C,
                        activeSectionIndex: O,
                        emojiListRef: R,
                    } = e,
                    L = (0, p.p)(),
                    y = s.useRef(J.An1),
                    D = s.useMemo(() => ("" !== n ? tv.A.convert.toCodePoint(n) : ""), [n]),
                    v = s.useCallback(
                        (e) => {
                            let t = u[e],
                                n = u[e + 1];
                            return e >= u.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [u],
                    ),
                    b = s.useCallback(
                        (e) => {
                            if (e >= u.length - 1) return !1;
                            let t = u[e],
                                n = u[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [u],
                    ),
                    M = s.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                r = t.has(e);
                            r ? i.delete(e) : i.add(e),
                                null != n &&
                                    eo.default.track(J.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: L.location,
                                        tab: ep.kx.EMOJI,
                                        collapsed: !r,
                                        guild_id: n.id,
                                    }),
                                e === ez.R2.SOUNDMOJI &&
                                    eo.default.track(J.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !r }),
                                E(i);
                        },
                        [L, t, E],
                    ),
                    P = s.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === e3.SOUNDMOJI ? null : e.type === e3.EMOJI ? (0, eA.N)(e.emoji) : e.name;
                        y.current !== J.An1 && window.cancelAnimationFrame(y.current),
                            (y.current = window.requestAnimationFrame(() => {
                                G.Om.setInspectedExpressionPosition(t, n, k.t.MOUSE_EVENT),
                                    G.Om.setSearchPlaceholder(i),
                                    (y.current = J.An1);
                            }));
                    }, []),
                    U = (0, _.bG)([er.HP], () => er.HP.hasHotspot(er._2.FAVORITE_EMOJI_TOOLTIP), []),
                    w = s.useMemo(
                        () =>
                            eb().memoize((e, t) => {
                                let n = i[e],
                                    s = u[t.sectionIndex];
                                return (0, a.jsx)(
                                    nv,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: r,
                                        surrogateCodePoint: D,
                                        onInspect: P,
                                        onSelect: l,
                                        onSelectSoundmoji: d,
                                        getEmojiItemProps: A,
                                        getEmojiRowProps: h,
                                        isScrolling: I,
                                        isUsingKeyboardNavigation: f,
                                        rowIndex: e,
                                        allowAnimatedEmoji: T,
                                        showEmojiFavoriteTooltip: U,
                                        channelGuildId: m,
                                        category: s.sectionId,
                                        selectedItemClassName: nb.__invalid_selectedItem,
                                        channelId: g,
                                        messageId: S,
                                        isBurstReaction: N,
                                        inNitroLockedSection: s.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            R.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, u, r, D, P, l, d, A, h, I, f, T, U, m, g, S, N, R],
                    );
                s.useEffect(() => () => w.cache?.clear?.(), [w]);
                let F = s.useMemo(
                        () =>
                            eb().memoize((e) => {
                                let n = u[e];
                                if (null == n) return;
                                let { guild: i, categoryId: r, type: s, sectionId: l } = n;
                                if (s === ez.s.SEARCH_RESULTS) return;
                                let d =
                                        s === ez.s.GUILD
                                            ? null != i
                                                ? (0, a.jsx)(eZ.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != r
                                              ? (0, a.jsx)(eq, { categoryId: r, height: 16, width: 16, size: "custom" })
                                              : null,
                                    c = i?.name;
                                null != r && (c = (0, eu.Nu)(r, i?.name));
                                let _ = O === e,
                                    E = n.isNitroLocked,
                                    A = E && !_,
                                    h = E && _,
                                    I =
                                        s === ez.s.SOUNDMOJI
                                            ? (0, a.jsx)(H.D, {
                                                  className: nb.f3,
                                                  onClick: () => {
                                                      (0, x.U)(ep.kx.SOUNDBOARD),
                                                          eo.default.track(J.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, a.jsx)(
                                    t7.A,
                                    {
                                        className: o()(nb.wx, C, { [nb.RA]: A, [nb.sp]: h }),
                                        icon: d,
                                        isCollapsed: t.has(l),
                                        onClick: () => M(l, i),
                                        trailing: I,
                                        children: c,
                                    },
                                    l,
                                );
                            }),
                        [u, t, M, C, O],
                    ),
                    V = (0, e0.k0)(),
                    B = s.useCallback(
                        (e, n) => {
                            let i = u[e],
                                r = b(e),
                                s = v(e);
                            return (0, a.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nb.Wy, {
                                        [nb.YD]: e === u.length - 1,
                                        [nb.jl]: t.has(i.sectionId),
                                        [nb.cW]: i.isNitroLocked,
                                        [nb.T5]: r || s,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, u, b, v],
                    ),
                    j = s.useCallback(
                        (e) =>
                            b(e)
                                ? V
                                    ? (0, a.jsx)(ne.ap, {})
                                    : (0, a.jsx)(ne.Ay, {})
                                : v(e)
                                  ? (0, a.jsx)("div", { className: nb.pQ })
                                  : null,
                        [b, v, V],
                    ),
                    W = s.useCallback((e) => (b(e) ? 41 : 33 * !!v(e)), [b, v]),
                    Y = s.useCallback(
                        (e) => (e === u.length - 1 || t.has(u[e]?.sectionId) || b(e) || v(e) ? 0 : nx),
                        [t, u, b, v],
                    );
                return {
                    listPadding: s.useMemo(() => ["" !== c ? nw : nM, nP, nU, 0], [c]),
                    renderRow: w,
                    renderSection: B,
                    renderSectionHeader: F,
                    renderSectionFooter: j,
                    sectionMarginBottom: Y,
                    sectionHeaderHeight: s.useCallback((e) => (u[e].type === ez.s.SEARCH_RESULTS ? 0 : nG), [u]),
                    sectionFooterHeight: W,
                };
            })({
                collapsedSections: I,
                diversitySurrogate: i,
                emojiGrid: r,
                emojiSize: d,
                onEmojiSelect: c,
                onSelectSoundmoji: u,
                searchQuery: M,
                sectionDescriptors: A,
                setCollapsedSections: f,
                getEmojiItemProps: T,
                getEmojiRowProps: g,
                isScrolling: v,
                isUsingKeyboardNavigation: C,
                allowAnimatedEmoji: P,
                channelGuildId: O,
                channelId: R,
                messageId: L,
                isBurstReaction: y,
                listHeaderClassName: D,
                activeSectionIndex: W,
                emojiListRef: l,
            }),
            ec = (0, F.Fk)({
                activeCategoryIndex: b,
                isScrolling: v,
                listRef: l,
                onActiveCategoryIndexChange: function (e) {
                    Y(e), "" === M && G.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: M,
                disableForSearch: !1,
            });
        (0, F.FV)({ searchQuery: M, activeCategoryIndex: b, listRef: l });
        let e_ = s.useCallback(
                (e) => {
                    ec(e),
                        nV({ emojiListRef: l, sectionDescriptors: A, scrollTop: e, searchQuery: M, setShowUpsell: z });
                },
                [ec, l, A, M, z],
            ),
            eE = A.length > 0;
        s.useEffect(() => {
            $ &&
                eo.default.track(J.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eL.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: B,
                    location_stack: j,
                });
        }, [B, j, $]),
            s.useEffect(() => {
                "" !== M && z(!1);
            }, [M]);
        let eh = s.useRef(null);
        return (
            s.useEffect(
                () => (
                    clearTimeout(eh.current),
                    (eh.current = setTimeout(() => {
                        eE
                            ? t3.O.announce(et.intl.string(et.t.uZ4F2O), "polite")
                            : t3.O.announce(et.intl.string(et.t.IxxiKF), "assertive"),
                            (eh.current = null);
                    }, 200)),
                    () => {
                        clearTimeout(eh.current);
                    }
                ),
                [eE, M],
            ),
            (0, a.jsxs)("div", {
                className: nb.AD,
                children: [
                    eE
                        ? (0, a.jsx)(t4.A, {
                              role: "none presentation",
                              className: nb.p_,
                              listPadding: q,
                              onScroll: e_,
                              renderRow: Z,
                              renderSection: X,
                              renderSectionHeader: Q,
                              renderSectionFooter: ee,
                              rowCount: N,
                              rowCountBySection: h,
                              rowHeight: d + 2 * nk,
                              sectionHeaderHeight: ei,
                              sectionMarginBottom: en,
                              sectionFooterHeight: es,
                              stickyHeaders: !0,
                              ref: l,
                          })
                        : (0, a.jsx)(t6.A, {
                              message: (0, a.jsx)(K.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: et.intl.string(et.t.IxxiKF),
                              }),
                              className: nb.BZ,
                          }),
                    w || t2.Fr
                        ? null
                        : (0, a.jsx)(t9.d, {
                              showUpsell: $,
                              text:
                                  ((t = (0, tT.Dd)(eL.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          E({ type: e4.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t8.qD)()), (0, tT.LE)(n, eL.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: J.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: V
                                  ? (0, a.jsx)(nt.l, {
                                        size: "sm",
                                        className: nb.ij,
                                        location: m.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    nV = eb().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: r, setShowUpsell: a } = e;
            a(
                (0, t5.s)({ listRef: t, searchQuery: r, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nB = n(506774),
    nH = n(349288),
    nj = n(277984),
    nW = n(404374),
    nY = n(780964),
    nK = n(766075),
    n$ = n(166403),
    nz = n(825703);
let nq = "premiumRetentionEmojiPickerNotice",
    nZ = nB.w.get(nq),
    nX = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, r] = s.useState(!1),
            { subscription: l, hasFetchedSubscriptions: o } = (0, _.cf)([n$.A], () => ({
                subscription: n$.A.getPremiumSubscription(),
                hasFetchedSubscriptions: n$.A.hasFetchedSubscriptions(),
            }));
        if (
            (s.useEffect(() => {
                o || (0, nj.hP)();
            }, [o]),
            null == l || !(0, tT.PK)(l.status) || i)
        )
            return null;
        let d = l.status === J.Dmq.PAST_DUE ? (0, tT.ji)(l).expiresDate : R()(l.currentPeriodStart).add(eL.ph),
            c = `${l.id}:${d.toISOString()}`;
        if (nZ === c) return null;
        let u =
            tT.Ay.getPremiumType(l.planId) === eL.PremiumTypes.TIER_0
                ? nW.k0.PREMIUM_TIER_0
                : tT.Ay.getPremiumType(l.planId) === eL.PremiumTypes.TIER_1
                  ? nW.k0.PREMIUM_TIER_1
                  : nW.k0.PREMIUM_TIER_2;
        return (0, a.jsxs)(K.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: nz.g$,
            children: [
                (0, a.jsx)(em.t, { size: "md", className: nz.lu, color: u }),
                (0, a.jsxs)("div", {
                    className: nz.Xn,
                    children: [
                        (0, a.jsx)(K.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: tT.Ay.getTierDisplayNameByPlanId(l.planId),
                                endsAt: d.toDate(),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            children: (0, a.jsx)(nH.Anchor, {
                                onClick: () => {
                                    (0, eu.xf)(n), t(), (0, nK.openUserSettings)(nY.X.NITRO_PANEL);
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(H.D, {
                    onClick: () => {
                        nB.w.set(nq, c), (nZ = c), r(!0);
                    },
                    children: (0, a.jsx)(j.P, { size: "md", color: "currentColor", className: nz.YF }),
                }),
            ],
        });
    };
var nQ = n(148361);
let nJ = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n0 = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function n1(e) {
    return e.stopPropagation();
}
function n2(e, t) {
    G.Om.setInspectedExpressionPosition(e, t, k.t.GRID_NAVIGATOR_EVENT);
}
let n3 = c()(eu.bo, 200),
    n6 = c()(eu.Wi, 200),
    n4 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n5 = s.memo(
        s.forwardRef(function (e, t) {
            let n,
                i,
                {
                    pickerIntention: r,
                    channel: l,
                    guildId: d,
                    closePopout: c,
                    emojiSize: A = ez.as.MEDIUM,
                    hasTabWrapper: O = !1,
                    onSelectEmoji: R,
                    onSelectSoundmoji: L,
                    containerWidth: y,
                    onNavigateAway: D,
                    persistSearch: v,
                    className: b,
                    headerClassName: M,
                    analyticsOverride: P = n4,
                    searchProps: V = {},
                    wrapper: B,
                    shouldHidePickerActions: H = !1,
                    messageId: j,
                    renderHeader: W,
                    listHeaderClassName: Y,
                    categoryListClassName: K,
                    shouldShowSoundmojiInEmojiPicker: $ = !1,
                    showOnlyUnicode: z = !1,
                    showAddEmojiButton: q,
                } = e,
                { onFocus: X, onKeyDown: Q, autoFocus: ee = !0, accessory: en } = V,
                ec = (0, _.bG)([es.Ay], () => (null != d ? es.Ay.getDefaultChannel(d) : null), [d]),
                [e_, eE] = s.useState(null),
                ep = s.useRef(""),
                em = (0, x.RQ)((e) => e.searchQuery),
                eg = s.useRef(null),
                eS = s.useRef(null),
                eN = s.useRef(null);
            null == l && null != ec && (l = ec);
            let eC = l?.getGuildId() ?? d ?? null,
                [eO, eR] = s.useState(!1),
                eL = el.default.getCurrentUser(),
                ey = (0, ed.ki)(eL);
            s.useImperativeHandle(t, () => ({ onPickerOpen: e7 }));
            let { location: ev } = (0, p.p)(),
                { page: eM, section: eP, object: eU, openPopoutType: ew, popoutLocation: eG } = P,
                ex = s.useMemo(() => ({ ...ev, section: eP ?? J.JJy.EMOJI_PICKER_POPOUT }), [ev, eP]),
                { analyticsLocations: ek } = (0, S.Ay)(m.A.EMOJI_PICKER),
                { diversitySurrogate: eF } = (0, _.cf)([C.Ay], () => ({ diversitySurrogate: C.Ay.diversitySurrogate })),
                eV = (0, eu.sL)(em, l, r, z),
                eB = null == eV ? 0 : eV.locked.length + eV.unlocked.length,
                eH = ea.iM.useSetting(),
                ej = s.useMemo(() => new Set(eH), [eH]),
                eW = s.useCallback((e) => {
                    ea.iM.updateSetting(Array.from(e));
                }, []),
                eY = (0, F.oV)({ gridWrapperRef: eg, containerWidth: y, listPaddingLeft: n0, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eK,
                    sectionDescriptors: e$,
                    emojiGrid: eq,
                    columnCounts: eZ,
                } = (function (e) {
                    let {
                            channel: t,
                            fallbackGuildId: n,
                            collapsedSections: i,
                            pickerIntention: r,
                            emojiSearchResults: a,
                            gridWidth: l,
                            emojiPaddingHorizontal: o,
                            emojiSpriteSize: d,
                            shouldShowSoundmojiInEmojiPicker: c,
                            showOnlyUnicode: u,
                        } = e,
                        E = (0, _.bG)([C.Ay], () => C.Ay.categories),
                        A = s.useMemo(() => (u ? eJ.Ay.getCategories() : E), [E, u]),
                        h = (0, _.bG)([Z.A], () => Z.A.getGuild(t?.getGuildId()), [t]),
                        I = t?.getGuildId() ?? n,
                        f = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(I), [I]),
                        p = (0, eu.XI)(I),
                        T = (0, eu.Fj)(I),
                        m = (0, eu.QZ)(I),
                        { topEmojis: g, newlyAddedEmojis: S } = (0, eI.A)(I, r),
                        N = (0, _.yK)([e2.Ay], () => e2.Ay.getFlattenedGuildIds(), []),
                        O = (0, _.bG)([C.Ay], () => C.Ay.expandedSectionsByGuildIds),
                        R = (0, _.bG)([el.default], () => el.default.getCurrentUser()),
                        L = (0, ed.ki)(R),
                        y = (0, e0.k0)(),
                        D = f.getGroupedCustomEmoji(),
                        v = (0, e1.Ym)({ location: "useEmojiGrid" });
                    return s.useMemo(() => {
                        let e = [],
                            n = [],
                            s = [],
                            u = [],
                            _ = 0,
                            E = 0;
                        if (null != f && null != l) {
                            let f = Math.floor(l / (d + 2 * o)),
                                R = 3 * f;
                            function I(a, l) {
                                let o = new Map(),
                                    c = i.has(l.sectionId),
                                    [A, h] = eb().partition(a, (e) => {
                                        let n = eA.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: r });
                                        return o.set(e, n), !n;
                                    }),
                                    I = A.concat(h),
                                    p = l.guild,
                                    T = I.length > R && null != p && l.isNitroLocked,
                                    m = T && !O.has(p.id);
                                m && I.splice(R - 1);
                                let N = Math.ceil((T ? I.length + 1 : I.length) / f),
                                    C = [];
                                for (let e = 0; e < N; e++) {
                                    let t = e * f,
                                        n = t + f,
                                        i = I.slice(t, n).map((e, t) => ({
                                            type: 0,
                                            emoji: e,
                                            size: d,
                                            isDisabled: o.get(e),
                                            rowIndex: E,
                                            columnIndex: t,
                                            visibleRowIndex: _,
                                            category: l.type,
                                            subCategory:
                                                l.sectionId === ez.s.TOP_GUILD_EMOJI
                                                    ? (0, eu.DA)(g, S, e.id ?? e.uniqueName ?? e.name)
                                                    : ez.tm.NONE,
                                        }));
                                    if ((C.push(i), !c)) {
                                        if (T && e === N - 1) {
                                            let t = C[e];
                                            t.push({
                                                type: 1,
                                                guildId: p.id,
                                                name: et.intl.string(et.t.NZI2Zk),
                                                size: d,
                                                rowIndex: e,
                                                columnIndex: t.length,
                                                visibleRowIndex: _,
                                                sectionCollapsedToThreeRows: m,
                                            });
                                        }
                                        u.push(i.length), s.push(i), _++;
                                    }
                                    E++;
                                }
                                let L = { ...l, count: a.length };
                                n.push(L), e.push(c ? 0 : N);
                            }
                            if (null != a)
                                0 !== a.unlocked.length &&
                                    I(a.unlocked, {
                                        type: ez.s.SEARCH_RESULTS,
                                        sectionId: ez.s.SEARCH_RESULTS,
                                        count: a.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== a.locked.length &&
                                        I(a.locked, {
                                            type: ez.s.PREMIUM_UPSELL,
                                            categoryId: ez.R2.PREMIUM_UPSELL,
                                            sectionId: ez.s.PREMIUM_UPSELL,
                                            count: a.locked.length,
                                            isNitroLocked: !L,
                                        });
                            else {
                                if (v && c) {
                                    let t = [{ type: 2, rowIndex: E, columnIndex: 0, visibleRowIndex: _ }];
                                    n.push({
                                        type: ez.s.SOUNDMOJI,
                                        categoryId: ez.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let r = i.has(ez.R2.SOUNDMOJI);
                                    !r && (u.push(t.length), s.push(t), _++), e.push(+!r), E++;
                                }
                                for (let e of A)
                                    if (e === ez.R2.CUSTOM) {
                                        function C(n) {
                                            let i = D.get(n);
                                            if (null == i) return;
                                            let a = i.filter(
                                                (e) =>
                                                    !e6.includes(
                                                        eA.Ay.getEmojiUnavailableReason({
                                                            emoji: e,
                                                            channel: t ?? es.Ay.getDefaultChannel(n),
                                                            intention: r,
                                                        }),
                                                    ),
                                            );
                                            if (0 === a.length) return;
                                            let s = Z.A.getGuild(n),
                                                l =
                                                    y ||
                                                    (!L &&
                                                        eA.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: a,
                                                            channel: t,
                                                            intention: r,
                                                        }));
                                            I(a, {
                                                categoryId: e,
                                                guild: s,
                                                type: ez.s.GUILD,
                                                sectionId: null != s ? s.id : (0, eX.A)(),
                                                count: a.length,
                                                isNitroLocked: l,
                                            });
                                        }
                                        if ((null != h && C(h.id), (0, ef.isExternalEmojiAllowedForIntention)(r)))
                                            for (let e of N) (null == h || h.id !== e) && C(e);
                                    } else if (e === ez.R2.TOP_GUILD_EMOJI) {
                                        if (null != h) {
                                            let { allEmojis: t } = (0, eh.W)({ topEmojis: g, newlyAddedEmojis: S });
                                            t.length > 0 &&
                                                I(t, {
                                                    categoryId: e,
                                                    guild: Z.A.getGuild(h.id),
                                                    type: ez.s.TOP_GUILD_EMOJI,
                                                    sectionId: ez.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === ez.R2.RECENT) {
                                        let n = (r === ef.EmojiIntention.REACTION ? m : T).filter(
                                            (e) => !eA.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                                        );
                                        I(n, {
                                            categoryId: e,
                                            type: ez.s.RECENT,
                                            sectionId: ez.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === ez.R2.FAVORITES) {
                                        let n = p.filter(
                                            (e) => !eA.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                                        );
                                        0 !== n.length &&
                                            I(n, {
                                                categoryId: e,
                                                type: ez.s.FAVORITES,
                                                sectionId: ez.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = eJ.Ay.getByCategory(e);
                                        null != t &&
                                            I(t, {
                                                categoryId: e,
                                                type: ez.s.UNICODE,
                                                sectionId: e,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                            }
                        }
                        return { columnCounts: u, emojiGrid: s, rowCountBySection: e, sectionDescriptors: n };
                    }, [f, l, d, o, a, i, D, O, t, r, g, S, L, A, h, N, m, T, p, y, v, c]);
                })({
                    gridWidth: eY,
                    fallbackGuildId: eC,
                    channel: l,
                    pickerIntention: r,
                    emojiSearchResults: eV,
                    collapsedSections: ej,
                    emojiPaddingHorizontal: nJ,
                    emojiSpriteSize: A,
                    shouldShowSoundmojiInEmojiPicker: $,
                    showOnlyUnicode: z,
                }),
                { newlyAddedEmojis: e5 } = (0, eI.A)(eC, r);
            (n = s.useRef({ intention: r, isBurstReaction: eO, analyticsObject: eU })),
                s.useEffect(() => {
                    n.current.intention === ef.EmojiIntention.REACTION && eT(n.current);
                }, []);
            let e7 = s.useCallback(() => {
                    let e = e5.length > 0 ? e5[0].id : null;
                    (0, w.uV)(eC, e), eT({ intention: r, isBurstReaction: eO, analyticsObject: eU });
                }, [e5, eC, r, eO, eU]),
                e8 = (function (e) {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: i,
                            onSelectEmoji: r,
                            setUpsellConfigs: a,
                            emojiSelectAnalytics: l,
                            trackEmojiFavorited: o,
                        } = e,
                        d = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                    return s.useCallback(
                        (e, i) => {
                            if (0 === e.type) {
                                let { emoji: s } = e;
                                if (null == s) return;
                                let c = eA.Ay.getEmojiUnavailableReason({ emoji: s, channel: n, intention: t });
                                if (i.toggleFavorite)
                                    return void (d.isFavoriteEmojiWithoutFetchingLatest(s) || null != c
                                        ? (0, I.Sw)(s)
                                        : (o?.(e), (0, I.V4)(s)));
                                if (c !== ef.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (c === ef.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                        l?.(e, c), a({ type: 0, emojiDescriptor: e });
                                        return;
                                    }
                                    if (
                                        c === ef.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED &&
                                        s.type === eQ.i.GUILD
                                    ) {
                                        l?.(e, c), a({ type: 1, guildId: s.guildId, emojiId: s.id });
                                        return;
                                    }
                                    c !== ef.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                        (l?.(e), r({ emoji: s, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                                }
                            }
                        },
                        [n, t, r, a, d, l, o],
                    );
                })({
                    pickerIntention: r,
                    selectedChannel: l,
                    fallbackGuildId: eC,
                    closePopout: c,
                    onSelectEmoji: R,
                    setUpsellConfigs: eE,
                    emojiSelectAnalytics: (e, t) => {
                        "" !== em
                            ? (0, eu.Wf)({
                                  emoji: e.emoji,
                                  location: { ...ex, object: J.ZSU.EMOJI },
                                  searchQuery: em,
                                  isLocked: null != t,
                                  intention: r,
                                  messageId: j,
                              })
                            : (0, eu._7)({
                                  emoji: e.emoji,
                                  location: { ...ex, object: eU ?? J.ZSU.EMOJI, ...(null != eM && { page: eM }) },
                                  pickerIntention: r,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                      U.isNewerThanLastSeen(eC, e.emoji.id),
                                  isBurstReaction: eO,
                                  messageId: j,
                                  lockedReason: t,
                                  visibleRowIndex: e.visibleRowIndex,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, eu.C5)({ emoji: e.emoji, location: { ...ex, object: J.ZSU.EMOJI } });
                    },
                }),
                e9 = s.useCallback(() => {
                    c(), D?.();
                }, [c, D]),
                {
                    getItemProps: te,
                    getRowProps: tt,
                    gridContainerProps: tn,
                    handleGridContainerKeyDown: ti,
                    isUsingKeyboardNavigation: tr,
                } = (function (e) {
                    let {
                            analyticsLocation: t,
                            pickerIntention: n,
                            columnCounts: i,
                            onSelectEmoji: r,
                            emojiGrid: a,
                            emojiList: l,
                            channelGuildId: o,
                            isBurstReaction: d,
                        } = e,
                        c = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(o), [o]),
                        E = s.useCallback(
                            (e, i) => {
                                if (e.type === e3.EMOJI) {
                                    if (null != e.emoji && i.altKey)
                                        return void (c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, I.Sw)(e.emoji)
                                            : ((0, eu.C5)({ emoji: e.emoji, location: { ...t, object: J.ZSU.EMOJI } }),
                                              (0, I.V4)(e.emoji)));
                                    let a = {
                                        page: null != o ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
                                        section: J.JJy.EMOJI_PICKER_POPOUT,
                                        object: J.ZSU.EMOJI,
                                    };
                                    d &&
                                        (a = {
                                            page: null != o ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
                                            section: J.JJy.EMOJI_PICKER_POPOUT,
                                            object: J.ZSU.EMOJI,
                                        }),
                                        (0, eu._7)({
                                            emoji: e.emoji,
                                            location: a,
                                            pickerIntention: n,
                                            category: e.category,
                                            subCategory: e.subCategory,
                                            newlyAddedHighlight:
                                                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                                U.isNewerThanLastSeen(o, e.emoji.id),
                                        }),
                                        r({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: d });
                                }
                            },
                            [r, o, n, c, t, d],
                        ),
                        {
                            gridDispatch: A,
                            getItemProps: h,
                            getRowProps: f,
                            gridContainerProps: p,
                            handleGridContainerKeyDown: T,
                            isUsingKeyboardNavigation: m,
                        } = (0, F.Ff)({
                            columnCounts: i,
                            gridNavigatorId: ez.lq,
                            itemGrid: a,
                            itemList: l,
                            onGridNavigatorItemSelect: E,
                            onGridNavigatorPositionChange: n2,
                        });
                    return (
                        s.useEffect(
                            () =>
                                G.Om.subscribe(
                                    (e) => e.inspectedExpressionPosition,
                                    (e) => {
                                        if (null == e) return;
                                        let { columnIndex: t, rowIndex: n, source: i } = e;
                                        i !== k.t.GRID_NAVIGATOR_EVENT &&
                                            A({ type: u.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [A],
                        ),
                        {
                            getItemProps: h,
                            getRowProps: f,
                            gridContainerProps: p,
                            handleGridContainerKeyDown: T,
                            isUsingKeyboardNavigation: m,
                        }
                    );
                })({
                    pickerIntention: r,
                    analyticsLocation: ex,
                    columnCounts: eZ,
                    onSelectEmoji: R,
                    emojiGrid: eq,
                    emojiList: eS,
                    channelGuildId: eC,
                    isBurstReaction: eO,
                });
            ((e, t) => {
                let [n, i] = s.useState(null);
                s.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), i(null));
                }, [t, n]),
                    s.useEffect(() => {
                        i(G.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(y, eS),
                s.useLayoutEffect(() => {
                    ee && eN.current?.focus();
                }, [y, eF, eN, ee]),
                s.useEffect(() => {
                    v || (0, x.Ri)("");
                }, [v]),
                s.useEffect(
                    () => (
                        eo.default.track(J.HAw.OPEN_POPOUT, {
                            type: ew ?? "Emoji Picker",
                            guild_id: eC,
                            location: eG,
                            ...(0, g.dI)(l),
                        }),
                        () => {
                            n3.cancel(), n6.cancel();
                        }
                    ),
                    [ew, eC, eG, l],
                ),
                (0, T.Ay)(() => ((0, eu.V$)({ intention: r, location: ex }), (ep.current = em), G.Om.resetStoreState)),
                s.useEffect(() => () => (0, er.sF)(er._2.FAVORITE_EMOJI_TOOLTIP), []),
                s.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = G.Om.getState().inspectedExpressionPosition;
                    eq[t]?.[e] == null && 0 !== e && G.Om.setInspectedExpressionPosition(0, 0);
                }, [eq]),
                s.useEffect(() => {
                    if (("" === ep.current && "" !== em && (0, eu.EG)(ex, r), "" !== em && ep.current !== em)) {
                        let e = G.Om.getAnalyticsId();
                        0 === eB
                            ? n3({ location: ex, searchQuery: em, intention: r, loadId: e })
                            : n6({
                                  totalResults: eB,
                                  numEmojiLocked: eV?.locked.length ?? 0,
                                  location: ex,
                                  searchQuery: em,
                                  intention: r,
                                  loadId: e,
                              });
                    }
                    ep.current = em;
                }, [em, ex, eB, eV, r]);
            let ta = B ?? (O ? "div" : h.l),
                ts = null != eY;
            e_?.type === e4.PREMIUM
                ? (i = (0, a.jsx)(nQ.default, {
                      onUpsellClicked: e9,
                      emojiDescriptor: e_.emojiDescriptor,
                      pickerIntention: r,
                      analyticsLocation: ex,
                      onClose: () => eE(null),
                      channel: l,
                  }))
                : e_?.type === e4.ROLE_SUBSCRIPTION
                  ? (i = (0, a.jsx)(ei, { onClose: () => eE(null), guildId: e_.guildId, emojiId: e_.emojiId }))
                  : eO && !ey && (i = (0, a.jsx)(eD, { onDismiss: () => eR(!1) }));
            let tl = (0, a.jsx)(tq, {
                    channel: l,
                    pickerIntention: r,
                    emojiListRef: eS,
                    onKeyDown: (e) => {
                        ti?.(e), Q?.(e);
                    },
                    searchBarRef: eN,
                    onFocus: X,
                    autoFocus: ee,
                    accessory: en,
                    headerClassName: M,
                    diversitySurrogate: eF,
                    isBurstReaction: eO,
                    onBurstReactionToggle: function () {
                        eR(!eO), eN.current?.focus();
                    },
                    renderHeader: W,
                    showAddEmojiButton: q,
                    closePopout: c,
                }),
                to = [];
            r === ef.EmojiIntention.REACTION && to.push(E.M.SUPER_REACTIONS_NITRO_MARKETING),
                C.Ay.hasFavoriteEmojis(eC) || to.push(E.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let td = (0, a.jsx)(f.A, {
                ...ex,
                children: (0, a.jsxs)(ta, {
                    id: ez.Do,
                    "aria-labelledby": O ? ez.k1 : void 0,
                    role: O ? "tabpanel" : void 0,
                    className: o()(tz.iE, { [tz.r6]: O, [tz.cB]: eO && ey }),
                    children: [
                        O ? null : tl,
                        (0, a.jsxs)("div", {
                            className: o()(tz.Fb, b),
                            onScroll: n1,
                            children: [
                                O ? tl : null,
                                (0, a.jsxs)("div", {
                                    className: tz.uK,
                                    ref: eg,
                                    children: [
                                        (0, a.jsx)(nX, { channel: l, closePopout: c }),
                                        (0, a.jsx)(N.Ay, {
                                            contentTypes: to,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === E.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, a.jsx)(tE, { markAsDismissed: () => n(tu.i.UNKNOWN) });
                                            },
                                        }),
                                        H
                                            ? null
                                            : (0, a.jsx)("div", {
                                                  className: tz.Iy,
                                                  id: ez.lq,
                                                  ...tn,
                                                  children: ts
                                                      ? (0, a.jsx)(nF, {
                                                            collapsedSections: ej,
                                                            diversitySurrogate: eF,
                                                            emojiGrid: eq,
                                                            emojiListRef: eS,
                                                            emojiSize: A,
                                                            getEmojiItemProps: te,
                                                            getEmojiRowProps: tt,
                                                            gridWidth: eY,
                                                            isUsingKeyboardNavigation: tr,
                                                            onEmojiSelect: function (e, t) {
                                                                e8(e, { ...t, isBurst: eO });
                                                            },
                                                            onSelectSoundmoji: L,
                                                            setUpsellConfigs: eE,
                                                            rowCount: eq.length,
                                                            rowCountBySection: eK,
                                                            sectionDescriptors: e$,
                                                            setCollapsedSections: eW,
                                                            channelGuildId: eC,
                                                            channelId: l?.id,
                                                            messageId: j,
                                                            isBurstReaction: eO,
                                                            listHeaderClassName: Y,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, a.jsx)(t1, {
                                    emojiGrid: eq,
                                    className: tz.qV,
                                    guildId: eC,
                                    pickerIntention: r,
                                    channel: l,
                                }),
                                i,
                            ],
                        }),
                        H
                            ? null
                            : (0, a.jsx)(tc, {
                                  className: o()(tz.jv, K),
                                  emojiListRef: eS,
                                  sectionDescriptors: e$,
                                  intention: r,
                                  channel: l,
                                  fallbackGuildId: eC,
                                  shouldShowSoundmojiInEmojiPicker: $,
                                  showOnlyUnicode: z,
                              }),
                    ],
                }),
            });
            return (0, a.jsx)(S.f5, { value: ek, children: td });
        }),
    );
