"use strict";
n.d(t, { A: () => n7 }), n(321073);
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    u = n(111956),
    c = n.n(u),
    d = n(788413),
    _ = n(17928),
    h = n(554146),
    f = n(319060),
    E = n(305866),
    p = n(554375),
    m = n(820284),
    g = n(212245),
    A = n(964486),
    I = n(793574),
    T = n(95561),
    S = n(688810),
    N = n(379848),
    C = n(159273),
    y = n(989349),
    O = n.n(y),
    R = n(228366),
    v = n(935208);
let b = { lastSeenNewlyAddedEmojiIds: {} },
    L = b,
    D = {};
function w() {
    for (let e in D) L.lastSeenNewlyAddedEmojiIds[e] = D[e];
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
        L = e ?? b;
    }
    getState() {
        return L;
    }
    getLastSeenEmojiByGuild(e) {
        return L.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || v.default.compare(t, n.id) > 0) return !0;
        {
            let e = O()(n.lastSeen);
            return O()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let M = new P(R.h, {
    LOGOUT: function () {
        (L = b), (D = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = D[t] ?? L.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > v.default.compare(i.id, n)
            ? (D[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (D[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = D[t] ?? L.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > v.default.compare(i.id, n)) && (D[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: w,
    CLEAR_CACHES: function () {
        (L = b), w();
    },
    CONNECTION_CLOSED: w,
});
var x = n(451731),
    U = n(850992),
    k = n(151271),
    G = n(60587),
    V = n(464651),
    F = n(562708),
    B = n(462887),
    H = n(939249),
    j = n(789645),
    W = n(696986),
    Y = n(534514),
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
    en = n(271019);
function ei(e) {
    let t,
        { onClose: i, guildId: r, emojiId: a } = e,
        o = ((t = (0, $.Ay)()), (0, B.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: l } = (0, S.Ay)(I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, z.A)({
        type: F.ImpressionTypes.MODAL,
        name: F.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: l, emoji_guild_id: r, emoji_id: a ?? null },
    });
    let u = (0, _.bG)([Z.A], () => Z.A.getGuild(r)),
        c = (0, _.bG)([X.A], () => null != r && X.A.getUserSubscriptionRoles(r).size > 0),
        d = c ? et.intl.string(et.t.GoLM9z) : et.intl.formatToPlainString(et.t["h0u/Hi"], { serverName: u?.name }),
        h = c ? et.intl.string(et.t.PjZ7Db) : et.intl.string(et.t.p8FG1D);
    return (0, s.jsxs)("div", {
        className: en.kL,
        children: [
            (0, s.jsx)("div", { className: en.Tp }),
            (0, s.jsxs)("div", {
                className: en.Qs,
                children: [
                    (0, s.jsx)(H.D, {
                        className: en.b,
                        "aria-label": et.intl.string(et.t.cpT0Cq),
                        onClick: i,
                        children: (0, s.jsx)(j.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": et.intl.string(et.t.cpT0Cq),
                            className: en.yP,
                        }),
                    }),
                    (0, s.jsx)("img", { alt: "", src: o, className: en.Tn }),
                    (0, s.jsx)(W.h, { size: 22 }),
                    (0, s.jsx)(Y.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: en.wx,
                        children: et.intl.string(et.t.cBjkcx),
                    }),
                    (0, s.jsx)(W.h, { size: 4 }),
                    (0, s.jsx)(K.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: en.h_,
                        children: d,
                    }),
                    (0, s.jsx)(W.h, { size: 24 }),
                    (0, s.jsx)(Q.A, {
                        text: h,
                        onClick: function () {
                            (0, q.pX)(J.BVt.CHANNEL(r, ee.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: l });
                        },
                    }),
                ],
            }),
        ],
    });
}
var er = n(450510),
    es = n(885386),
    ea = n(808728),
    eo = n(287809),
    el = n(174459),
    eu = n(474090),
    ec = n(240248),
    ed = n(822123),
    e_ = n(734057),
    eh = n(309010),
    ef = n(690521),
    eE = n(818645),
    ep = n(316884),
    em = n(307731),
    eg = n(698279);
function eA(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: r, analyticsObject: s } = e,
        a = e_.A.getChannel(eh.A.getChannelId()),
        o = a?.getGuildId(),
        l =
            t === em.EmojiIntention.REACTION
                ? C.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : C.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        u = null != a ? C.Ay.getDisambiguatedEmojiContext(a.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        c =
            t === em.EmojiIntention.REACTION
                ? C.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : C.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = l.slice(0, c),
        _ = null != o ? C.Ay.getGuildEmoji(o) : [],
        h = C.Ay.getDisambiguatedEmojiContext(a?.getGuildId()).getCustomEmoji(),
        { topEmojis: f, newlyAddedEmojis: E } = (0, ep.b)({ guildId: a?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: p, visibleNewlyAddedEmojis: m } = (0, eE.W)({
            topEmojis: f,
            newlyAddedEmojis: E,
            rowSize: i,
        });
    T.Ay.trackWithMetadata(
        t === em.EmojiIntention.REACTION ? J.HAw.REACTION_PICKER_OPENED : J.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eg.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: u.length,
            num_animated_expressions_favorites: u.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: u.filter(ef.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: u.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(ef.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: _.length,
            num_custom_expressions_total: h.size,
            num_expressions_top_server: p.length,
            num_animated_expressions_top_server: p.filter((e) => e.animated).length,
            num_expressions_newly_added: m.length,
            num_animated_expressions_newly_added: m.filter((e) => e.animated).length,
            ...(t === em.EmojiIntention.REACTION && { is_burst: r }),
            ...(null != s && { location_object: s }),
        },
    );
}
var eI = n(403581),
    eT = n(775602),
    eS = n(607470),
    eN = n(422936),
    eC = n(234419),
    ey = n(725807),
    eO = n(811611),
    eR = n(202541),
    ev = n(151867);
function eb(e) {
    let { onDismiss: t } = e,
        n = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        i = et.intl.string(et.t.eikz43),
        r = (0, eC.V)(),
        a = (0, eN.O)(),
        o = r?.subscription_trial != null || null != a,
        u = { object: J.ZSU.BUTTON_CTA, section: J.JJy.SUPER_REACTION_PICKER };
    return (0, s.jsxs)("div", {
        className: ev.iE,
        children: [
            (0, s.jsx)(H.D, {
                onClick: t,
                className: ev.b,
                "aria-label": et.intl.string(et.t.WAI6xu),
                children: (0, s.jsx)(j.P, { size: "md", color: "currentColor" }),
            }),
            (0, s.jsxs)("div", {
                className: ev.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: ev.jo,
                        children: (0, s.jsx)(eS.A, {
                            className: l()(ev.vK, { [ev.Vk]: o }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    o
                        ? (0, s.jsx)(eO.Ay, {
                              type: eR.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: r?.subscription_trial?.sku_id ?? eR.pe.TIER_2,
                              headingText: et.intl.string(et.t.Wfl5zp),
                              analyticsLocationObject: u,
                              discountOffer: a,
                              trialOffer: r,
                              children: i,
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: ev.wx,
                                      children: [
                                          (0, s.jsx)(eI.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: ev.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, s.jsx)(Y.D, {
                                              className: ev.TK,
                                              variant: "heading-xl/bold",
                                              children: et.intl.string(et.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(K.E, { className: ev.Fb, variant: "text-md/normal", children: i }),
                                  (0, s.jsx)("div", {
                                      className: ev.sk,
                                      children: (0, s.jsx)(ey.A, {
                                          subscriptionTier: eR.pe.TIER_2,
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
var eL = n(735438),
    eD = n.n(eL),
    ew = n(837381),
    eP = n(460905),
    eM = n(802019),
    ex = n(407698),
    eU = n(531685),
    ek = n(406810),
    eG = n(27232),
    eV = n(369606),
    eF = n(413249),
    eB = n(141060),
    eH = n(687966),
    ej = n(115979),
    eW = n(524501),
    eY = n(926268),
    eK = n(138134),
    e$ = n(7807),
    ez = n(732139);
let eq = a.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case ez.R2.RECENT:
                    return ek.O;
                case ez.R2.FAVORITES:
                    return eG.G;
                case ez.R2.TOP_GUILD_EMOJI:
                    return eV.O;
                case ez.R2.PEOPLE:
                    return eP.n;
                case ez.R2.NATURE:
                    return eF.p;
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
                    return eI.t;
                case ez.R2.SOUNDMOJI:
                    return e$.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, s.jsx)(i, { color: "currentColor", ...n });
});
var eZ = n(724511),
    eX = n(835245),
    eQ = n(770335),
    eJ = n(7584),
    e0 = n(526292),
    e1 = n(926972),
    e2 = n(711014);
let e3 = (0, n(945810).mj)({
    name: "2026-06-emoji-frecent-test",
    kind: "user",
    defaultConfig: { maxFrequentEmojis: null },
    variations: { 1: { maxFrequentEmojis: 9 }, 2: { maxFrequentEmojis: 18 } },
});
var e6 =
    (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
    (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
    (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
    i);
let e4 = [em.EmojiDisabledReasons.DISALLOW_EXTERNAL, em.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e5 = (((r = {})[(r.PREMIUM = 0)] = "PREMIUM"), (r[(r.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), r),
    e7 = n(619182);
let e8 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e9 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    te = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tt = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tn = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    ti = (0, ec.xI)(e7.__invalid_unicodeCategoryShortcutHeight),
    tr = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    ts = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ta = te + e9 + 2 * tn,
    to = e8 + e9,
    tl = to + (tr + 2 * ts),
    tu = te + tt + 2 * tn;
function tc(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: i,
            categories: r,
            category: o,
            handleCategorySelect: u,
            isWindowFocused: c,
            useReducedMotion: d,
        } = e,
        _ = (0, ew.rm)(`expression-guild-${n}`),
        h = o.type === ez.s.GUILD ? null : o.id,
        f = t === n,
        E = o.type === ez.s.GUILD ? o.guild : null,
        p = (0, s.jsxs)(H.D, {
            ..._,
            "aria-label": (0, ed.wt)(o, E),
            className: l()({
                [e7.ZG]: null != E,
                [e7.Bj]: null == E,
                [e7.s6]: null == E && f,
                [e7.xg]: o.type === ez.s.RECENT,
            }),
            onClick: () => {
                null != E &&
                    el.default.track(J.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eg.kx.EMOJI,
                        guild_id: E.id,
                    }),
                    u(n);
            },
            children: [
                null != E
                    ? (0, s.jsx)(eZ.A, { guild: E, isSelected: f, shouldAnimate: !d && c, isLocked: o.isNitroLocked })
                    : null,
                null == E && null != h
                    ? (0, s.jsx)(eq, { categoryId: h, className: e7.Yl, height: te, width: te, size: "custom" })
                    : null,
            ],
        }),
        m = r[n + 1],
        g = null != m && o.type === ez.s.GUILD && m.type !== ez.s.GUILD;
    return null != E
        ? (0, s.jsxs)(a.Fragment, {
              children: [
                  (0, s.jsx)(ex.Q, { guild: E, children: (0, s.jsx)("div", { children: p }) }),
                  g ? (0, s.jsx)("hr", { className: e7.ny }, "separator") : null,
              ],
          })
        : p;
}
let td = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: r,
            channel: o,
            fallbackGuildId: u,
            shouldShowSoundmojiInEmojiPicker: c = !1,
            showOnlyUnicode: d = !1,
        } = e,
        h = U.Om.useStore((e) => e.activeCategoryIndex),
        f = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, k.RQ)((e) => e.searchQuery),
                i = a.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return a.useCallback(
                (e) => {
                    "" !== n ? ((0, k.Ri)(""), U.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        E = (0, g.p)(),
        p = (0, ed.ss)(r, o, o?.guild_id ?? u, c),
        m = a.useMemo(() => (d ? (0, ed.CQ)() : p), [p, d]),
        A = a.useRef(null),
        I = (0, _.bG)([eU.A], () => eU.A.isFocused()),
        T = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion, []),
        S = a.useMemo(
            () =>
                eD().memoize((e, t) => {
                    let n = m[t];
                    if (null != n)
                        return (0, s.jsx)(
                            tc,
                            {
                                activeIndex: h,
                                analyticsContext: E,
                                categories: m,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: f,
                                isWindowFocused: I,
                                useReducedMotion: T,
                            },
                            t,
                        );
                }),
            [h, E, m, f, I, T],
        ),
        N = a.useMemo(() => [8, 8, 0, 8], []),
        C = a.useCallback(
            (e, t) => {
                let n = m[t];
                if (n.type === ez.s.RECENT) return ta;
                if (n.type === ez.s.GUILD) {
                    let e = m[t + 1];
                    return null != e && e.type !== ez.s.GUILD ? tl : to;
                }
                return tu;
            },
            [m],
        ),
        {
            nonUnicodeCategoryCount: y,
            firstUnicodeCategoryIndex: O,
            firstUnicodeCategoryOffsetTop: R,
            rowCountBySection: v,
        } = a.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            m.forEach((r) => {
                r.type === ez.s.GUILD
                    ? ((t += 1), (n += 1))
                    : r.type === ez.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let r = ta + t * to + tl;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: [e, n, i],
            };
        }, [m]),
        [b, L] = a.useState(!0);
    a.useLayoutEffect(() => {
        L(y >= 7);
    }, [y]);
    let D = a.useCallback(
            (e) => {
                let t = A.current?.getListDimensions();
                null == t || (e + t.height - tr >= R ? L(!1) : L(!0));
            },
            [R],
        ),
        w = a.useCallback(
            (e) => {
                e(O), A.current?.scrollTo(R);
            },
            [R, O],
        ),
        P = a.useCallback(
            (e, t) => {
                let n = m[e];
                if (null == n) return 0;
                let i = b ? ti : 0;
                if (n.type === ez.s.RECENT) return t ? 0 : tt;
                if (n.type === ez.s.GUILD) {
                    let n = m[e + 1];
                    return null != n && n.type !== ez.s.GUILD ? (t ? tr + -2 * ts + e9 + i : e9) : t ? i : e9;
                }
                return t ? e9 + i : 2 * e9;
            },
            [m, b],
        ),
        M = a.useMemo(
            () =>
                function (e, t) {
                    return (0, s.jsx)(a.Fragment, { children: t }, e);
                },
            [],
        ),
        x = b ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(eM.A, {
        categoryListRef: A,
        expressionsListRef: n,
        className: t,
        store: U.Om,
        categories: m,
        listPadding: N,
        onScroll: D,
        renderCategoryListItem: S,
        renderSection: M,
        rowCount: m.length,
        categoryHeight: C,
        getScrollOffsetForIndex: P,
        rowCountBySection: v,
        children: (e) =>
            y >= 7 &&
            (0, s.jsx)(
                H.D,
                {
                    "aria-hidden": !b,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: l()(e7.KB, { [e7.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => w(e),
                    children: (0, s.jsx)(eP.n, { size: "custom", color: "currentColor", height: te, width: te }),
                },
                x,
            ),
    });
};
var t_ = n(49999),
    th = n(868836);
let tf = function (e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)(K.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: th.iE,
        children: [
            (0, s.jsx)(eY.C, { size: "md", color: "currentColor", className: th.Kk }),
            (0, s.jsx)("div", {
                className: th.Qs,
                children: (0, s.jsx)(K.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, s.jsx)(H.D, {
                onClick: () => t(t_.i.UNKNOWN),
                children: (0, s.jsx)(j.P, { size: "md", color: "currentColor", className: th.VN }),
            }),
        ],
    });
};
var tE = n(580929),
    tp = n(459192),
    tm = n(717421),
    tg = n(343032),
    tA = n(131607),
    tI = n(428262),
    tT = n(337889);
let tS = { tension: 750, mass: 2.5, friction: 70 };
function tN(e) {
    let { checked: t, onClick: n } = e,
        i = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        r = eo.default.getCurrentUser(),
        o = null != r && !(0, tI.TW)(r),
        u = o ? [] : [h.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [c, d] = (0, tA.kn)(u),
        [f, E] = a.useState(!1),
        [p, m] = (0, tm.z)(() => ({})),
        g = (0, tE.animated)(tg.i);
    a.useEffect(() => {
        let e = c === h.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (d(t_.i.DISMISS), setTimeout(() => E(e), 200));
    }, [c, d]);
    let A = f ? et.intl.string(et.t["Osi/uy"]) : t && !o ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        I = f ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, s.jsx)(tp.u, {
        position: "top",
        title: I,
        body: A,
        asset: (0, s.jsx)(eI.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: f,
        children: (0, s.jsx)(H.D, {
            "aria-label": A,
            "aria-pressed": t,
            onClick: function () {
                m({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tS }),
                    n?.(),
                    E(!1);
            },
            focusProps: { enabled: !1 },
            className: l()(tT.Pf, { [tT.wM]: t }),
            children: (0, s.jsx)(g, {
                style: i ? void 0 : p,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tT.Kk,
            }),
        }),
    });
}
var tC = n(990078),
    ty = n(821609),
    tO = n(644508),
    tR = n(824832),
    tv = n(267102),
    tb = n(638263);
function tL(e) {
    let { channel: t } = e,
        n = a.useRef(null),
        i = a.useRef(0),
        [r, o] = a.useState(!1),
        [l, u] = a.useState(!1),
        c = (0, tv.Us)() === J.BRT.OVERLAY,
        d = l || r,
        _ = a.useCallback(
            async (e, n, r) => {
                u(!0),
                    await (0, tO.f)({
                        userImage: { data: e, file: n, image: r },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: J.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
                        },
                    }),
                    (i.current += 1),
                    u(!1);
            },
            [t],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tC.m, {
                asContainer: !0,
                text: c ? et.intl.string(et.t.RMbedC) : null,
                children: (0, s.jsx)(ty.$, {
                    text: et.intl.string(et.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        n.current?.activateUploadDialogue();
                    },
                    disabled: d || c,
                }),
            }),
            (0, s.jsx)("div", {
                className: tb.F,
                children: (0, s.jsx)(tR.Ay, { ref: n, onChange: _, setLoading: o, disabled: d }, i.current),
            }),
        ],
    });
}
n(667532);
var tD = n(833272),
    tw = n(82495),
    tP = n(260762),
    tM = n(915089),
    tx = n(650583),
    tU = n(46274);
let tk = (0, tM.Ld)(),
    tG = tD.A.convert.fromCodePoint("1f44f"),
    tV = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tF(e) {
    switch (tD.A.convert.toCodePoint(e)) {
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
let tB = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: r, index: a } = e,
            o = (0, ew.rm)(`item-${a}`),
            l = ef.Ay.getURL(tG + n),
            u = (0, tm.z)({ opacity: 1, from: { opacity: +!t }, delay: r }, "animate-always");
        return (0, s.jsx)(H.D, {
            ...o,
            role: "option",
            "aria-selected": 0 === a,
            onClick: () => i(n),
            className: tU.B6,
            children: (0, s.jsx)(tE.animated.div, {
                "aria-label": tF(n),
                className: tU.g4,
                style: { backgroundImage: `url("${l}")`, ...u },
            }),
        });
    },
    tH = (e) => {
        let { id: t, selectedSurrogate: n, onClick: i } = e,
            r = (0, tP.A)("diversity"),
            o = (0, tm.z)({
                height: (tV + 14) * (eJ.W$.length + 1),
                from: { height: tV + 14 },
                config: { duration: 125 },
            }),
            l = a.useRef(r);
        a.useEffect(() => {
            l.current.focusFirstVisibleItem();
        }, []);
        let u = ["", ...eJ.W$];
        return (
            eD().remove(u, (e) => e === n),
            u.unshift(n),
            (0, s.jsx)(ew.hD, {
                navigator: r,
                children: (0, s.jsx)(ew.PR, {
                    children: (e) => {
                        let { ref: n, ...r } = e;
                        return (0, s.jsx)(tE.animated.div, {
                            ...r,
                            id: t,
                            ref: n,
                            className: tU.J6,
                            style: o,
                            role: "listbox",
                            children: u.map((e, t) =>
                                (0, s.jsx)(tB, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    tj = function (e) {
        let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
            r = ef.Ay.getURL(tG + n),
            [o, u] = a.useState(!1),
            c = (0, tw.A)(null, () => u(!1)),
            d = a.useRef(null);
        return (0, s.jsxs)("div", {
            ref: c,
            className: l()(tU.fx, i),
            children: [
                (0, s.jsx)(H.D, {
                    innerRef: d,
                    className: tU.Dj,
                    onClick: function () {
                        u(!0);
                    },
                    "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tF(n) }),
                    "aria-haspopup": !0,
                    "aria-expanded": o,
                    "aria-controls": tk,
                    tabIndex: o ? -1 : 0,
                    children: (0, s.jsx)("div", { className: tU.g4, style: { backgroundImage: `url("${r}")` } }),
                }),
                o
                    ? (0, s.jsx)("div", {
                          onKeyDown: function (e) {
                              e.key === tx.dh.ESCAPE
                                  ? (e.stopPropagation(), u(!1), null != d.current && d.current.focus())
                                  : "Tab" === e.key && u(!1);
                          },
                          children: (0, s.jsx)(tH, {
                              id: tk,
                              selectedSurrogate: n,
                              onClick: function (e) {
                                  (0, p.dK)(e), u(!1), t.current?.focus();
                              },
                          }),
                      })
                    : null,
            ],
        });
    };
var tW = n(942381),
    tY = n(602034),
    tK = n(892547);
let t$ = a.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: i,
                onKeyDown: r,
                onFocus: o,
                autoFocus: l,
                defaultSearchPlaceholder: u,
            } = e,
            c = a.useRef(null),
            d = (0, k.RQ)((e) => e.searchQuery),
            [_, h, f] = U.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tW.x,
            ),
            E = a.useCallback(
                (e) => {
                    U.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        U.Om.setInspectedExpressionPosition(0, 0),
                        U.Om.setSearchPlaceholder(null),
                        (0, k.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            p = a.useCallback(() => {
                E("");
            }, [E]);
        return (
            a.useImperativeHandle(t, () => ({ focus: () => c.current?.focus() })),
            (0, s.jsx)(tK.I, {
                autoFocus: l,
                query: d,
                ref: c,
                placeholder: h ?? u,
                onClear: p,
                onKeyDown: function (e) {
                    switch (e.key) {
                        case tx.dh.ARROW_LEFT:
                        case tx.dh.ARROW_RIGHT:
                        case tx.dh.ARROW_UP:
                        case tx.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    r(e);
                },
                onFocus: o,
                onChange: E,
                inputProps: {
                    "aria-label": et.intl.string(et.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": i,
                    "aria-expanded": !0,
                    ...(f ? { "aria-activedescendant": (0, tY.Aq)(i, _.columnIndex, _.rowIndex) } : void 0),
                },
            })
        );
    }),
    tz = a.memo(t$);
var tq = n(873426);
let tZ = function (e) {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: r,
            emojiListRef: a,
            onKeyDown: o,
            onFocus: u,
            autoFocus: c,
            searchBarRef: d,
            diversitySurrogate: _,
            isBurstReaction: h,
            onBurstReactionToggle: f,
            renderHeader: E,
            showAddEmojiButton: p = !0,
        } = e,
        m = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tz, {
                    emojiListRef: a,
                    gridNavigatorId: ez.lq,
                    onKeyDown: o,
                    ref: d,
                    onFocus: u,
                    autoFocus: c,
                    defaultSearchPlaceholder: (0, ed.wT)(i, h),
                }),
                i === em.EmojiIntention.REACTION ? (0, s.jsx)(tN, { checked: h, onClick: f }) : null,
                n ?? (0, s.jsx)(tj, { searchBarRef: d, className: tq.fx, selectedSurrogate: _ }),
                i !== em.EmojiIntention.NO_CUSTOM_EMOJI && p ? (0, s.jsx)(tL, { channel: t }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: l()(tq.wx, r), children: null != E ? E(m) : m });
};
var tX = n(182922),
    tQ = n(363195),
    tJ = n(486020),
    t0 = n(854469);
function t1(e) {
    return null != e && "animated" in e;
}
let t2 = a.memo(function (e) {
    let t,
        i,
        { className: r, emojiGrid: o, guildId: l, pickerIntention: u, channel: c } = e,
        d = U.Om.useStore((e) => e.inspectedExpressionPosition),
        h = a.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return o[e]?.[t];
        }, [o, d]);
    switch (h?.type) {
        case e6.EMOJI:
            t = h?.emoji;
            break;
        case e6.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: h?.guildId, allNamesString: h?.name };
            break;
        case e6.SOUNDMOJI:
        default:
            t = null;
    }
    let f = (0, _.bG)([Z.A], () => (null !== t && t.type === eQ.i.GUILD ? Z.A.getGuild(t.guildId) : null), [t]),
        E = (0, _.bG)([eU.A], () => eU.A.isFocused()),
        p = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion, []),
        m = es.Sf.useSetting(),
        g = (0, ed.O7)(l, t1(t) ? t : null),
        A = (0, _.bG)([C.Ay], () => C.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: I } = (0, ep.A)(l, u),
        T = h?.type === e6.EMOJI ? h.subCategory : ez.tm.NONE;
    if (
        (a.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    t1(t) &&
                    T !== ez.tm.NONE &&
                    (T === ez.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eQ.i.GUILD &&
                        (0, x.mz)(t.guildId, I[0].id),
                    null != d.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: T,
                            position: h.columnIndex + 1,
                            newlyAddedHighlight: T === ez.tm.NEWLY_ADDED_EMOJI && M.isNewerThanLastSeen(l, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let S = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: r, theme: a } = t;
            if (t1(e)) {
                let t = null != e.id ? tJ.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, s.jsx)(K.E, {
                          variant: "text-md/normal",
                          className: t0.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, s.jsx)("img", { alt: (0, ef.N)(e) ?? "", src: t, className: t0.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    o = n(600003),
                    l = n(318121);
                return r.has(e.guildId)
                    ? (0, s.jsx)("img", { className: t0.Kk, src: (0, B.M)(a) ? o : l, alt: "" })
                    : (0, s.jsx)("img", { className: t0.Kk, src: (0, B.M)(a) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: m, sectionsExpandedFromThreeRows: A, theme: tQ.A.theme }),
        N =
            null != f
                ? (0, s.jsx)(eZ.A, { className: t0.__invalid_guildIcon, guild: f, shouldAnimate: !p && E })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? A.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, ef.N)(t);
    let y = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = t1(t);
        return null != n && i ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: c, guildId: l, intention: u, guild: f });
    return (0, s.jsx)(tX.A, {
        className: r,
        graphicPrimary: S,
        graphicSecondary: N,
        titlePrimary: i,
        titleSecondary: y,
        isFavorite: g,
        emojiSubCategory: T,
    });
});
var t3 = n(607399),
    t6 = n(537652),
    t4 = n(962125),
    t5 = n(240864),
    t7 = n(286509),
    t8 = n(89366),
    t9 = n(754998),
    ne = n(202639),
    nt = n(414872),
    nn = n(400669),
    ni = n(909536),
    nr = n(187322),
    ns = n(304072),
    na = n(189551),
    no = n(289873),
    nl = n(796774),
    nu = n(209932),
    nc = n(805945),
    nd = n(576705);
n(980504);
var n_ = n(818348),
    nh = n(219920);
let nf = a.memo(function (e) {
    let t,
        n,
        i,
        r,
        { channelId: o, onSelectSoundmoji: l } = e,
        u = (0, _.bG)([nu.A], () => !nu.A.isFetching() && !nu.A.hasFetchedAllSounds(), []),
        c = (0, _.bG)([e_.A], () => e_.A.getChannel(o)),
        d =
            ((t = (0, _.bG)([eo.default], () => tI.Ay.canUseSoundboardEverywhere(eo.default.getCurrentUser()))),
            (n = (0, _.bG)([nu.A], () => nu.A.getSoundsForGuild("0"))),
            (i = (0, _.yK)([Z.A], () => Z.A.getGuildIds())),
            (r = a.useMemo(() => nd.A.can(n_.xB.USE_EXTERNAL_SOUNDS, c), [c])),
            a.useMemo(() => {
                let e = [];
                if (t && r) {
                    let t = i.flatMap((e) => nu.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eD().sampleSize(t, 4));
                } else if (c?.guild_id != null) {
                    let t = nu.A.getSoundsForGuild(c?.guild_id)?.filter((e) => e.available);
                    e.push(...eD().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eD().sampleSize(n ?? [], 4 - e.length)), e;
            }, [r, c?.guild_id, n, i, t]));
    return (a.useEffect(() => {
        (0, nl.E7)();
    }, [u]),
    0 === d.length)
        ? (0, s.jsx)(no.y, {})
        : (0, s.jsx)("div", {
              className: nh.q,
              children: d.map((e, t) =>
                  (0, s.jsx)(
                      nc.Ay,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: c,
                          onSelectItem: (t) => l?.(e, !t.shiftKey),
                      },
                      t,
                  ),
              ),
          });
});
var nE = n(594061),
    np = n(771104),
    nm = n(442433),
    ng = n(147421),
    nA = n(723702),
    nI = n(140735),
    nT = n(194261),
    nS = n(881274);
let nN = (e) => {
    let { src: t, alt: n, size: i, "aria-label": r, className: o } = e,
        u = a.useRef(null),
        c = a.useRef(!1),
        d = c.current ? nS.S : nS.Y;
    return (0, s.jsx)("img", {
        className: l()(d, o),
        alt: n,
        src: t,
        ref: u,
        "aria-label": r,
        style: { backgroundSize: i, height: i, width: i },
        onLoad: c.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != u.current &&
                          ((c.current = !0), u.current.classList.remove(nS.Y), u.current.classList.add(nS.S));
                  });
              },
    });
};
var nC = n(297547);
let ny = eD().memoize(
        (e) =>
            `${e * em.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(eJ.Ay.numNonDiversitySprites / em.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nO = eD().memoize(
        (e) =>
            `${e * em.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eJ.Ay.numDiversitySprites / em.EmojiSprites.DiversityPerRow)}px`,
    ),
    nR = a.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: r, allowAnimatedEmoji: o, "aria-label": u, isLocked: c } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : tJ.Ay.getEmojiURL({ id: t.id, animated: o && t.animated, size: em.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(nN, {
                              className: nC.N1,
                              "aria-label": u,
                              src: e,
                              size: i,
                              alt: (0, ef.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: l()(nC.xA, { [nC.N1]: c }),
                    style: (function (e, t, i) {
                        let r, s, a;
                        if (!e.useSpriteSheet) return;
                        let o = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((r = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (s = nO(i)),
                              (a = em.EmojiSprites.DiversityPerRow))
                            : ((r = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (s = ny(i)),
                              (a = em.EmojiSprites.NonDiversityPerRow));
                        let l = (-o % a) * i,
                            u = -Math.floor(o / a) * i;
                        return {
                            backgroundImage: `url('${r}')`,
                            backgroundPosition: `${l}px ${u}px`,
                            backgroundSize: s,
                            height: i,
                            width: i,
                        };
                    })(t, r, i),
                    children: (0, s.jsx)(nI.A, { children: u }),
                });
            })();
        return (0, s.jsxs)(a.Fragment, {
            children: [
                d,
                c
                    ? (0, s.jsx)("div", {
                          className: nC.iD,
                          children: (0, s.jsx)(nT.X, { size: "xs", color: "currentColor", className: nC.fi }),
                      })
                    : null,
            ],
        });
    });
var nv = n(6376);
let nb = a.forwardRef(function (e, t) {
    let n,
        {
            emoji: i,
            isFavorite: r,
            isLargeSize: a,
            isMediumSize: o,
            isInspected: u,
            isDisabled: c,
            showPulse: d,
            columnIndex: h,
            rowIndex: f,
            size: E,
            surrogateCodePoint: p,
            allowAnimatedEmoji: m,
            selectedItemClassName: g,
            inNitroLockedSection: A,
            ...I
        } = e,
        T = (0, _.bG)([Z.A], () => (i.type === eQ.i.GUILD ? Z.A.getGuild(i.guildId) : void 0), [i]);
    return (0, s.jsx)(nr.vN, {
        children: (0, s.jsx)("button", {
            ...I,
            className: l()(nv._X, { [nv.lG]: a, [nv.Lh]: o, [nv.Bx]: u, [g ?? ""]: u, [nv.TV]: d }),
            "data-type": G.g.EMOJI,
            "data-id": i.id,
            "data-name": i.name,
            "data-surrogates": "surrogates" in i ? i.surrogates : null,
            "data-animated": i.animated ? "true" : null,
            ref: t,
            children: (0, s.jsx)(nR, {
                "aria-label":
                    ((n = (0, ef.N)(i)),
                    (T?.name != null &&
                        (n = et.intl.formatToPlainString(et.t["nXv4/B"], { names: n, guildName: T.name })),
                    r)
                        ? et.intl.formatToPlainString(et.t["9FI9Z0"], { names: n })
                        : n),
                columnIndex: h,
                rowIndex: f,
                emoji: i,
                size: E,
                surrogateCodePoint: p,
                allowAnimatedEmoji: m,
                isLocked: c && !A,
            }),
        }),
    });
});
function nL(e) {
    let {
            descriptor: t,
            emojiItemKey: i,
            isInspected: r,
            rowIndex: o,
            channelGuildId: l,
            onInspect: u,
            onSelect: c,
            isScrolling: d,
            isUsingKeyboardNavigation: h,
            showEmojiFavoriteTooltip: f,
            surrogateCodePoint: E,
            selectedItemClassName: p,
            getEmojiItemProps: m,
            isMediumSize: g,
            isLargeSize: A,
            pulseItemKey: I,
            allowAnimatedEmoji: T,
            setPulseItemKey: S,
            messageId: N,
            isBurstReaction: y,
            rowPosition: O,
            inNitroLockedSection: R,
        } = e,
        [v, b] = a.useState(""),
        L = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        D = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(l), [l]),
        w = a.useRef(null),
        { emoji: P, size: M, isDisabled: x, columnIndex: U } = t;
    function k() {
        d.current || h.current || u(t);
    }
    let { ref: G, tabIndex: V, onFocus: F, ...B } = m(U, o) ?? {},
        H =
            v !== `${U}:${o}`
                ? (0, s.jsx)(nb, {
                      ref: G,
                      emoji: P,
                      isFavorite: D.isFavoriteEmojiWithoutFetchingLatest(P),
                      isLargeSize: A,
                      isMediumSize: g,
                      isInspected: r,
                      isDisabled: x,
                      showPulse: I === i,
                      allowAnimatedEmoji: T,
                      onFocus: F ?? k,
                      onMouseMove: k,
                      onClick: (e) => {
                          if (
                              null != w.current &&
                              null != O &&
                              null != N &&
                              !e.shiftKey &&
                              null != P.name &&
                              y &&
                              !L &&
                              T
                          ) {
                              let e = null == P.id ? eJ.Ay.convertNameToSurrogate(P.name) : P.name,
                                  t = w.current.getBoundingClientRect();
                              (t.x = O.x + (U + 1) * M), b(`${U}:${o}`), (0, ng.h)(N, e, P.id, t);
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || h.current)) return;
                              let n = e.altKey;
                              n && !C.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(P) && S(i),
                                  (0, er.sF)(er._2.FAVORITE_EMOJI_TOOLTIP),
                                  c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nm.L3)(e, async () => {
                              let { default: e } = await Promise.all([n.e("4774"), n.e("46132")]).then(
                                  n.bind(n, 233503),
                              );
                              return (t) => (0, s.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: V,
                      columnIndex: U,
                      rowIndex: o,
                      size: M,
                      surrogateCodePoint: E,
                      selectedItemClassName: p,
                      inNitroLockedSection: R,
                  })
                : null;
    return (0, a.createElement)(
        "li",
        { ...B, key: i, ref: w },
        f
            ? (0, s.jsx)(tC.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, nA.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let nD = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: r,
            onSelectSoundmoji: o,
            onInspect: u,
            surrogateCodePoint: c,
            getEmojiItemProps: d,
            getEmojiRowProps: _,
            isScrolling: h,
            isUsingKeyboardNavigation: f,
            rowIndex: E,
            allowAnimatedEmoji: p,
            showEmojiFavoriteTooltip: m,
            channelGuildId: g,
            category: A,
            selectedItemClassName: I,
            channelId: T,
            messageId: S,
            isBurstReaction: N,
            inNitroLockedSection: C,
            handleScrollUpOnSectionCollapse: y,
        } = e,
        O = n(619508),
        R = n(404828),
        v = n(600003),
        b = n(318121),
        L = n(443336),
        D = n(258901),
        w = n(135974),
        P = n(8013),
        x = (0, $.Ay)(),
        k = U.Om.getState(),
        [G, V] = a.useState(k.inspectedExpressionPosition),
        [F, H] = (0, ns.A)(null, 300),
        j = a.useRef(null);
    a.useEffect(
        () =>
            U.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => V(e),
            ),
        [],
    ),
        a.useEffect(() => {
            nE.bW.loadIfNecessary();
        }, []);
    let W = i === ez.as.LARGE,
        Y = i === ez.as.MEDIUM;
    function z(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case e6.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    o = G.rowIndex === n && G.columnIndex === i,
                    c = e.sectionCollapsedToThreeRows
                        ? o
                            ? (0, B.M)(x)
                                ? D
                                : P
                            : (0, B.M)(x)
                              ? O
                              : R
                        : o
                          ? (0, B.M)(x)
                              ? L
                              : w
                          : (0, B.M)(x)
                            ? v
                            : b,
                    _ = et.intl.string(e.sectionCollapsedToThreeRows ? et.t.NZI2Zk : et.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: r,
                            icon: o,
                            ariaLabel: c,
                            shouldShowRoundHighlight: _,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: p, columnIndex: m } = e,
                        { ref: g, tabIndex: A, onFocus: T, ...S } = d(m, E) ?? {},
                        N = G.rowIndex === p && G.columnIndex === m;
                    function C() {
                        h.current || f.current || u(e);
                    }
                    return (0, a.createElement)(
                        "li",
                        { ...S, key: t },
                        (0, s.jsx)(nr.vN, {
                            children: (0, s.jsx)("button", {
                                "aria-label": c,
                                ref: g,
                                className: l()(nv._X, {
                                    [nv.lG]: W,
                                    [nv.Lh]: Y,
                                    [nv.Bx]: N && !_,
                                    [I ?? ""]: N,
                                    [nv.TV]: F === t,
                                }),
                                onFocus: T ?? C,
                                onMouseOver: C,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                onClick: r,
                                tabIndex: A,
                                children: o,
                            }),
                        }),
                    );
                })({
                    handleSelect: (t) => {
                        t.stopPropagation(),
                            h.current ||
                                f.current ||
                                (r(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, na.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || y(),
                                el.default.track(J.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                }));
                    },
                    icon: (0, s.jsx)("img", { className: nv.Kk, src: c, alt: "" }),
                    ariaLabel: _,
                    shouldShowRoundHighlight: !0,
                });
            }
            case e6.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    a = G.rowIndex === i && G.columnIndex === n;
                return (0, s.jsx)(
                    nL,
                    {
                        rowIndex: E,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: a,
                        isScrolling: h,
                        isUsingKeyboardNavigation: f,
                        surrogateCodePoint: c,
                        allowAnimatedEmoji: p,
                        selectedItemClassName: I,
                        onSelect: r,
                        onInspect: u,
                        channelGuildId: g,
                        getEmojiItemProps: d,
                        isMediumSize: Y,
                        isLargeSize: W,
                        pulseItemKey: F,
                        setPulseItemKey: H,
                        showEmojiFavoriteTooltip: m,
                        messageId: S,
                        isBurstReaction: N,
                        rowPosition: j?.current?.getBoundingClientRect(),
                        inNitroLockedSection: C,
                    },
                    t,
                );
            }
            case e6.SOUNDMOJI:
                return;
        }
    }
    function q(e) {
        return (0, s.jsx)("ul", {
            ..._(E),
            className: l()(nv.ND, { [nv.HO]: W, [nv.X$]: Y }),
            ref: j,
            children: e.map(z),
        });
    }
    if (A === ez.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nv.ND,
            ref: j,
            children: (0, s.jsx)(nf, { channelId: T, onSelectSoundmoji: o }),
        });
    if (A !== ez.s.TOP_GUILD_EMOJI) return q(t);
    let Z = t.filter(
            (e) =>
                e.subCategory === ez.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eQ.i.GUILD &&
                    !M.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        X = t.filter(
            (e) =>
                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eQ.i.GUILD &&
                M.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === X.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nv.Ng,
              children: [
                  (0, s.jsx)("div", { className: l()(nv.V6, { [nv.$3]: 0 === Z.length }), children: q(Z) }),
                  (0, s.jsxs)("div", {
                      className: nv.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: l()(nv.eE, { [nv.eM]: 1 === X.length, [nv.Wk]: Z.length > 0 }),
                              children: q(X),
                          }),
                          (0, s.jsxs)("div", {
                              className: l()(nv.lD, { [nv.EI]: W, [nv.qU]: Y, [nv.Wk]: Z.length > 0 }),
                              children: [
                                  (0, s.jsx)(np.A, { foreground: nv.rI }),
                                  (0, s.jsx)(K.E, {
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
var nw = n(98090);
let nP = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nM = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nx = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nU = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nk = (0, ec.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nG = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nV = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nF = a.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: r,
                emojiListRef: o,
                emojiSize: u,
                onEmojiSelect: c,
                onSelectSoundmoji: d,
                setUpsellConfigs: h,
                sectionDescriptors: f,
                rowCountBySection: E,
                collapsedSections: p,
                setCollapsedSections: m,
                getEmojiItemProps: A,
                getEmojiRowProps: T,
                rowCount: N,
                isUsingKeyboardNavigation: C,
                channelGuildId: y,
                channelId: O,
                messageId: R,
                isBurstReaction: v,
                listHeaderClassName: b,
            } = e,
            L = a.useRef(!1),
            D = U.Om.useStore((e) => e.activeCategoryIndex),
            w = (0, k.RQ)((e) => e.searchQuery),
            P = es.Sf.useSetting(),
            M = (0, _.bG)([eo.default], () => eo.default.getCurrentUser()),
            x = (0, eu.ki)(M),
            F = (0, ni.St)("emoji_picker_floating_upsell"),
            B = (0, t9.$)("emoji_picker_floating_upsell"),
            { location: j } = (0, g.p)(),
            { analyticsLocations: W } = (0, S.Ay)(),
            [Y, K] = a.useState(0),
            [$, z] = a.useState(!1),
            {
                listPadding: q,
                renderRow: Z,
                renderSection: X,
                renderSectionHeader: Q,
                renderSectionFooter: ee,
                sectionMarginBottom: en,
                sectionHeaderHeight: ei,
                sectionFooterHeight: ea,
            } = ((e) => {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: i,
                        emojiSize: r,
                        onEmojiSelect: o,
                        onSelectSoundmoji: u,
                        searchQuery: c,
                        sectionDescriptors: d,
                        setCollapsedSections: h,
                        getEmojiItemProps: f,
                        getEmojiRowProps: E,
                        isScrolling: p,
                        isUsingKeyboardNavigation: m,
                        allowAnimatedEmoji: A,
                        channelGuildId: I,
                        channelId: T,
                        messageId: S,
                        isBurstReaction: N,
                        listHeaderClassName: C,
                        activeSectionIndex: y,
                        emojiListRef: O,
                    } = e,
                    R = (0, g.p)(),
                    v = a.useRef(J.An1),
                    b = a.useMemo(() => ("" !== n ? tD.A.convert.toCodePoint(n) : ""), [n]),
                    L = a.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    D = a.useCallback(
                        (e) => {
                            if (e >= d.length - 1) return !1;
                            let t = d[e],
                                n = d[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [d],
                    ),
                    w = a.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                r = t.has(e);
                            r ? i.delete(e) : i.add(e),
                                null != n &&
                                    el.default.track(J.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: R.location,
                                        tab: eg.kx.EMOJI,
                                        collapsed: !r,
                                        guild_id: n.id,
                                    }),
                                e === ez.R2.SOUNDMOJI &&
                                    el.default.track(J.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !r }),
                                h(i);
                        },
                        [R, t, h],
                    ),
                    P = a.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === e6.SOUNDMOJI ? null : e.type === e6.EMOJI ? (0, ef.N)(e.emoji) : e.name;
                        v.current !== J.An1 && window.cancelAnimationFrame(v.current),
                            (v.current = window.requestAnimationFrame(() => {
                                U.Om.setInspectedExpressionPosition(t, n, G.t.MOUSE_EVENT),
                                    U.Om.setSearchPlaceholder(i),
                                    (v.current = J.An1);
                            }));
                    }, []),
                    M = (0, _.bG)([er.HP], () => er.HP.hasHotspot(er._2.FAVORITE_EMOJI_TOOLTIP), []),
                    x = a.useMemo(
                        () =>
                            eD().memoize((e, t) => {
                                let n = i[e],
                                    a = d[t.sectionIndex];
                                return (0, s.jsx)(
                                    nD,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: r,
                                        surrogateCodePoint: b,
                                        onInspect: P,
                                        onSelect: o,
                                        onSelectSoundmoji: u,
                                        getEmojiItemProps: f,
                                        getEmojiRowProps: E,
                                        isScrolling: p,
                                        isUsingKeyboardNavigation: m,
                                        rowIndex: e,
                                        allowAnimatedEmoji: A,
                                        showEmojiFavoriteTooltip: M,
                                        channelGuildId: I,
                                        category: a.sectionId,
                                        selectedItemClassName: nw.__invalid_selectedItem,
                                        channelId: T,
                                        messageId: S,
                                        isBurstReaction: N,
                                        inNitroLockedSection: a.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            O.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, r, b, P, o, u, f, E, p, m, A, M, I, T, S, N, O],
                    );
                a.useEffect(() => () => x.cache?.clear?.(), [x]);
                let V = a.useMemo(
                        () =>
                            eD().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: r, type: a, sectionId: o } = n;
                                if (a === ez.s.SEARCH_RESULTS) return;
                                let u =
                                        a === ez.s.GUILD
                                            ? null != i
                                                ? (0, s.jsx)(eZ.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != r
                                              ? (0, s.jsx)(eq, { categoryId: r, height: 16, width: 16, size: "custom" })
                                              : null,
                                    c = i?.name;
                                null != r && (c = (0, ed.Nu)(r, i?.name));
                                let _ = y === e,
                                    h = n.isNitroLocked,
                                    f = h && !_,
                                    E = h && _,
                                    p =
                                        a === ez.s.SOUNDMOJI
                                            ? (0, s.jsx)(H.D, {
                                                  className: nw.f3,
                                                  onClick: () => {
                                                      (0, k.U)(eg.kx.SOUNDBOARD),
                                                          el.default.track(J.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t7.A,
                                    {
                                        className: l()(nw.wx, C, { [nw.RA]: f, [nw.sp]: E }),
                                        icon: u,
                                        isCollapsed: t.has(o),
                                        onClick: () => w(o, i),
                                        trailing: p,
                                        children: c,
                                    },
                                    o,
                                );
                            }),
                        [d, t, w, C, y],
                    ),
                    F = (0, e0.k0)(),
                    B = a.useCallback(
                        (e, n) => {
                            let i = d[e],
                                r = D(e),
                                a = L(e);
                            return (0, s.jsx)(
                                "div",
                                {
                                    className: l()(nw.Wy, {
                                        [nw.YD]: e === d.length - 1,
                                        [nw.jl]: t.has(i.sectionId),
                                        [nw.cW]: i.isNitroLocked,
                                        [nw.T5]: r || a,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, D, L],
                    ),
                    j = a.useCallback(
                        (e) =>
                            D(e)
                                ? F
                                    ? (0, s.jsx)(nt.ap, {})
                                    : (0, s.jsx)(nt.Ay, {})
                                : L(e)
                                  ? (0, s.jsx)("div", { className: nw.pQ })
                                  : null,
                        [D, L, F],
                    ),
                    W = a.useCallback((e) => (D(e) ? 41 : 33 * !!L(e)), [D, L]),
                    Y = a.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || D(e) || L(e) ? 0 : nG),
                        [t, d, D, L],
                    );
                return {
                    listPadding: a.useMemo(() => ["" !== c ? nU : nP, nM, nx, 0], [c]),
                    renderRow: x,
                    renderSection: B,
                    renderSectionHeader: V,
                    renderSectionFooter: j,
                    sectionMarginBottom: Y,
                    sectionHeaderHeight: a.useCallback((e) => (d[e].type === ez.s.SEARCH_RESULTS ? 0 : nk), [d]),
                    sectionFooterHeight: W,
                };
            })({
                collapsedSections: p,
                diversitySurrogate: i,
                emojiGrid: r,
                emojiSize: u,
                onEmojiSelect: c,
                onSelectSoundmoji: d,
                searchQuery: w,
                sectionDescriptors: f,
                setCollapsedSections: m,
                getEmojiItemProps: A,
                getEmojiRowProps: T,
                isScrolling: L,
                isUsingKeyboardNavigation: C,
                allowAnimatedEmoji: P,
                channelGuildId: y,
                channelId: O,
                messageId: R,
                isBurstReaction: v,
                listHeaderClassName: b,
                activeSectionIndex: Y,
                emojiListRef: o,
            }),
            ec = (0, V.Fk)({
                activeCategoryIndex: D,
                isScrolling: L,
                listRef: o,
                onActiveCategoryIndexChange: function (e) {
                    K(e), "" === w && U.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: w,
                disableForSearch: !1,
            });
        (0, V.FV)({ searchQuery: w, activeCategoryIndex: D, listRef: o });
        let e_ = a.useCallback(
                (e) => {
                    ec(e),
                        nB({ emojiListRef: o, sectionDescriptors: f, scrollTop: e, searchQuery: w, setShowUpsell: z });
                },
                [ec, o, f, w, z],
            ),
            eh = f.length > 0;
        return (
            a.useEffect(() => {
                $ &&
                    el.default.track(J.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: eR.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: j,
                        location_stack: W,
                    });
            }, [j, W, $]),
            a.useEffect(() => {
                "" !== w && z(!1);
            }, [w]),
            (0, s.jsxs)("div", {
                className: nw.AD,
                children: [
                    eh
                        ? (0, s.jsx)(t4.A, {
                              role: "none presentation",
                              className: nw.p_,
                              listPadding: q,
                              onScroll: e_,
                              renderRow: Z,
                              renderSection: X,
                              renderSectionHeader: Q,
                              renderSectionFooter: ee,
                              rowCount: N,
                              rowCountBySection: E,
                              rowHeight: u + 2 * nV,
                              sectionHeaderHeight: ei,
                              sectionMarginBottom: en,
                              sectionFooterHeight: ea,
                              stickyHeaders: !0,
                              ref: o,
                          })
                        : (0, s.jsx)(t6.A, { message: et.intl.string(et.t.IxxiKF), className: nw.BZ }),
                    x || t3.Fr
                        ? null
                        : (0, s.jsx)(ne.d, {
                              showUpsell: $,
                              text:
                                  ((t = (0, tI.Dd)(eR.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          h({ type: e5.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t8.qD)()), (0, tI.LE)(n, eR.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: J.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              subscribeButtonVariantOverride: B,
                              leadingAction: F
                                  ? (0, s.jsx)(nn.l, {
                                        size: "sm",
                                        className: nw.ij,
                                        location: I.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    nB = eD().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: r, setShowUpsell: s } = e;
            s(
                (0, t5.s)({ listRef: t, searchQuery: r, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nH = n(506774),
    nj = n(349288),
    nW = n(277984),
    nY = n(404374),
    nK = n(780964),
    n$ = n(766075),
    nz = n(166403),
    nq = n(542863);
let nZ = "premiumRetentionEmojiPickerNotice",
    nX = nH.w.get(nZ),
    nQ = (e) => {
        let { closePopout: t, channel: n } = e,
            [i, r] = a.useState(!1),
            { subscription: o, hasFetchedSubscriptions: l } = (0, _.cf)([nz.A], () => ({
                subscription: nz.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nz.A.hasFetchedSubscriptions(),
            }));
        if (
            (a.useEffect(() => {
                l || (0, nW.hP)();
            }, [l]),
            null == o || !(0, tI.PK)(o.status) || i)
        )
            return null;
        let u = o.status === J.Dmq.PAST_DUE ? (0, tI.ji)(o).expiresDate : O()(o.currentPeriodStart).add(eR.ph),
            c = `${o.id}:${u.toISOString()}`;
        if (nX === c) return null;
        let d =
            tI.Ay.getPremiumType(o.planId) === eR.PremiumTypes.TIER_0
                ? nY.k0.PREMIUM_TIER_0
                : tI.Ay.getPremiumType(o.planId) === eR.PremiumTypes.TIER_1
                  ? nY.k0.PREMIUM_TIER_1
                  : nY.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)(K.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: nq.g$,
            children: [
                (0, s.jsx)(eI.t, { size: "md", className: nq.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: nq.Xn,
                    children: [
                        (0, s.jsx)(K.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: tI.Ay.getTierDisplayNameByPlanId(o.planId),
                                endsAt: u.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nj.Anchor, {
                                onClick: () => {
                                    (0, ed.xf)(n), t(), (0, n$.openUserSettings)(nK.X.NITRO_PANEL);
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(H.D, {
                    onClick: () => {
                        nH.w.set(nZ, c), (nX = c), r(!0);
                    },
                    children: (0, s.jsx)(j.P, { size: "md", color: "currentColor", className: nq.YF }),
                }),
            ],
        });
    };
var nJ = n(148361);
let n0 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n1 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function n2(e) {
    return e.stopPropagation();
}
function n3(e, t) {
    U.Om.setInspectedExpressionPosition(e, t, G.t.GRID_NAVIGATOR_EVENT);
}
let n6 = c()(ed.bo, 200),
    n4 = c()(ed.Wi, 200),
    n5 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n7 = a.memo(
        a.forwardRef(function (e, t) {
            let n,
                i,
                {
                    pickerIntention: r,
                    channel: o,
                    guildId: u,
                    closePopout: c,
                    emojiSize: f = ez.as.MEDIUM,
                    hasTabWrapper: y = !1,
                    onSelectEmoji: O,
                    onSelectSoundmoji: R,
                    containerWidth: v,
                    onNavigateAway: b,
                    persistSearch: L,
                    className: D,
                    headerClassName: w,
                    analyticsOverride: P = n5,
                    searchProps: F = {},
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
                { onFocus: X, onKeyDown: Q, autoFocus: ee = !0, accessory: en } = F,
                ec = (0, _.bG)([ea.Ay], () => (null != u ? ea.Ay.getDefaultChannel(u) : null), [u]),
                [e_, eh] = a.useState(null),
                eg = a.useRef(""),
                eI = (0, k.RQ)((e) => e.searchQuery),
                eT = a.useRef(null),
                eS = a.useRef(null),
                eN = a.useRef(null);
            null == o && null != ec && (o = ec);
            let eC = o?.getGuildId() ?? u ?? null,
                [ey, eO] = a.useState(!1),
                eR = eo.default.getCurrentUser(),
                ev = (0, eu.ki)(eR);
            a.useImperativeHandle(t, () => ({ onPickerOpen: e8 }));
            let { location: eL } = (0, g.p)(),
                { page: ew, section: eP, object: eM, openPopoutType: ex, popoutLocation: eU } = P,
                ek = a.useMemo(() => ({ ...eL, section: eP ?? J.JJy.EMOJI_PICKER_POPOUT }), [eL, eP]),
                { analyticsLocations: eG } = (0, S.Ay)(I.A.EMOJI_PICKER),
                { diversitySurrogate: eV } = (0, _.cf)([C.Ay], () => ({ diversitySurrogate: C.Ay.diversitySurrogate })),
                eF = (0, ed.sL)(eI, o, r, z),
                eB = null == eF ? 0 : eF.locked.length + eF.unlocked.length,
                eH = es.iM.useSetting(),
                ej = a.useMemo(() => new Set(eH), [eH]),
                eW = a.useCallback((e) => {
                    es.iM.updateSetting(Array.from(e));
                }, []),
                eY = (0, V.oV)({ gridWrapperRef: eT, containerWidth: v, listPaddingLeft: n1, listScrollbarWidth: 8 }),
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
                            emojiSearchResults: s,
                            gridWidth: o,
                            emojiPaddingHorizontal: l,
                            emojiSpriteSize: u,
                            shouldShowSoundmojiInEmojiPicker: c,
                            showOnlyUnicode: d,
                        } = e,
                        h = (0, _.bG)([C.Ay], () => C.Ay.categories),
                        f = a.useMemo(() => (d ? eJ.Ay.getCategories() : h), [h, d]),
                        E = (0, _.bG)([Z.A], () => Z.A.getGuild(t?.getGuildId()), [t]),
                        p = t?.getGuildId() ?? n,
                        m = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(p), [p]),
                        g = (0, ed.XI)(p),
                        A = (0, ed.Fj)(p),
                        I = (0, ed.QZ)(p),
                        { topEmojis: T, newlyAddedEmojis: S } = (0, ep.A)(p, r),
                        N = (0, _.yK)([e2.Ay], () => e2.Ay.getFlattenedGuildIds(), []),
                        y = (0, _.bG)([C.Ay], () => C.Ay.expandedSectionsByGuildIds),
                        O = (0, _.bG)([eo.default], () => eo.default.getCurrentUser()),
                        R = (0, eu.ki)(O),
                        v = (0, e0.k0)(),
                        b = m.getGroupedCustomEmoji(),
                        L = (0, e1.Ym)({ location: "useEmojiGrid" }),
                        D = (function (e) {
                            let { location: t } = e;
                            return e3.useConfig({ location: t }).maxFrequentEmojis;
                        })({ location: "useEmojiGrid" });
                    return a.useMemo(() => {
                        let e = [],
                            n = [],
                            a = [],
                            d = [],
                            _ = 0,
                            h = 0;
                        if (null != m && null != o) {
                            let m = Math.floor(o / (u + 2 * l)),
                                C = 3 * m;
                            function p(s, o) {
                                let l = new Map(),
                                    c = i.has(o.sectionId),
                                    [f, E] = eD().partition(s, (e) => {
                                        let n = ef.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: r });
                                        return l.set(e, n), !n;
                                    }),
                                    p = f.concat(E),
                                    g = o.guild,
                                    A = p.length > C && null != g && o.isNitroLocked,
                                    I = A && !y.has(g.id);
                                I && p.splice(C - 1);
                                let N = Math.ceil((A ? p.length + 1 : p.length) / m),
                                    O = [];
                                for (let e = 0; e < N; e++) {
                                    let t = e * m,
                                        n = t + m,
                                        i = p
                                            .slice(t, n)
                                            .map((e, t) => ({
                                                type: 0,
                                                emoji: e,
                                                size: u,
                                                isDisabled: l.get(e),
                                                rowIndex: h,
                                                columnIndex: t,
                                                visibleRowIndex: _,
                                                category: o.type,
                                                subCategory:
                                                    o.sectionId === ez.s.TOP_GUILD_EMOJI
                                                        ? (0, ed.DA)(T, S, e.id ?? e.uniqueName ?? e.name)
                                                        : ez.tm.NONE,
                                            }));
                                    if ((O.push(i), !c)) {
                                        if (A && e === N - 1) {
                                            let t = O[e];
                                            t.push({
                                                type: 1,
                                                guildId: g.id,
                                                name: et.intl.string(et.t.NZI2Zk),
                                                size: u,
                                                rowIndex: e,
                                                columnIndex: t.length,
                                                visibleRowIndex: _,
                                                sectionCollapsedToThreeRows: I,
                                            });
                                        }
                                        d.push(i.length), a.push(i), _++;
                                    }
                                    h++;
                                }
                                let R = { ...o, count: s.length };
                                n.push(R), e.push(c ? 0 : N);
                            }
                            if (null != s)
                                0 !== s.unlocked.length &&
                                    p(s.unlocked, {
                                        type: ez.s.SEARCH_RESULTS,
                                        sectionId: ez.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        p(s.locked, {
                                            type: ez.s.PREMIUM_UPSELL,
                                            categoryId: ez.R2.PREMIUM_UPSELL,
                                            sectionId: ez.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !R,
                                        });
                            else {
                                if (L && c) {
                                    let t = [{ type: 2, rowIndex: h, columnIndex: 0, visibleRowIndex: _ }];
                                    n.push({
                                        type: ez.s.SOUNDMOJI,
                                        categoryId: ez.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let r = i.has(ez.R2.SOUNDMOJI);
                                    !r && (d.push(t.length), a.push(t), _++), e.push(+!r), h++;
                                }
                                for (let e of f)
                                    if (e === ez.R2.CUSTOM) {
                                        let n = (n) => {
                                            let i = b.get(n);
                                            if (null == i) return;
                                            let s = i.filter(
                                                (e) =>
                                                    !e4.includes(
                                                        ef.Ay.getEmojiUnavailableReason({
                                                            emoji: e,
                                                            channel: t ?? ea.Ay.getDefaultChannel(n),
                                                            intention: r,
                                                        }),
                                                    ),
                                            );
                                            if (0 === s.length) return;
                                            let a = Z.A.getGuild(n),
                                                o =
                                                    v ||
                                                    (!R &&
                                                        ef.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: r,
                                                        }));
                                            p(s, {
                                                categoryId: e,
                                                guild: a,
                                                type: ez.s.GUILD,
                                                sectionId: null != a ? a.id : (0, eX.A)(),
                                                count: s.length,
                                                isNitroLocked: o,
                                            });
                                        };
                                        if ((null != E && n(E.id), (0, em.isExternalEmojiAllowedForIntention)(r)))
                                            for (let e of N) (null == E || E.id !== e) && n(e);
                                    } else if (e === ez.R2.TOP_GUILD_EMOJI) {
                                        if (null != E) {
                                            let { allEmojis: t } = (0, eE.W)({ topEmojis: T, newlyAddedEmojis: S });
                                            t.length > 0 &&
                                                p(t, {
                                                    categoryId: e,
                                                    guild: Z.A.getGuild(E.id),
                                                    type: ez.s.TOP_GUILD_EMOJI,
                                                    sectionId: ez.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === ez.R2.RECENT) {
                                        let n = (r === em.EmojiIntention.REACTION ? I : A).filter(
                                            (e) => !ef.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                                        );
                                        R || null == D || (n = n.slice(0, D)),
                                            p(n, {
                                                categoryId: e,
                                                type: ez.s.RECENT,
                                                sectionId: ez.s.RECENT,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else if (e === ez.R2.FAVORITES) {
                                        let n = g.filter(
                                            (e) => !ef.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                                        );
                                        0 !== n.length &&
                                            p(n, {
                                                categoryId: e,
                                                type: ez.s.FAVORITES,
                                                sectionId: ez.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = eJ.Ay.getByCategory(e);
                                        null != t &&
                                            p(t, {
                                                categoryId: e,
                                                type: ez.s.UNICODE,
                                                sectionId: e,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                            }
                        }
                        return { columnCounts: d, emojiGrid: a, rowCountBySection: e, sectionDescriptors: n };
                    }, [m, o, u, l, s, i, b, y, t, r, T, S, R, f, E, N, I, A, g, v, L, c, D]);
                })({
                    gridWidth: eY,
                    fallbackGuildId: eC,
                    channel: o,
                    pickerIntention: r,
                    emojiSearchResults: eF,
                    collapsedSections: ej,
                    emojiPaddingHorizontal: n0,
                    emojiSpriteSize: f,
                    shouldShowSoundmojiInEmojiPicker: $,
                    showOnlyUnicode: z,
                }),
                { newlyAddedEmojis: e7 } = (0, ep.A)(eC, r);
            (n = a.useRef({ intention: r, isBurstReaction: ey, analyticsObject: eM })),
                a.useEffect(() => {
                    n.current.intention === em.EmojiIntention.REACTION && eA(n.current);
                }, []);
            let e8 = a.useCallback(() => {
                    let e = e7.length > 0 ? e7[0].id : null;
                    (0, x.uV)(eC, e), eA({ intention: r, isBurstReaction: ey, analyticsObject: eM });
                }, [e7, eC, r, ey, eM]),
                e9 = (function (e) {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: i,
                            onSelectEmoji: r,
                            setUpsellConfigs: s,
                            emojiSelectAnalytics: o,
                            trackEmojiFavorited: l,
                        } = e,
                        u = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                    return a.useCallback(
                        (e, i) => {
                            if (0 === e.type) {
                                let { emoji: a } = e;
                                if (null == a) return;
                                let c = ef.Ay.getEmojiUnavailableReason({ emoji: a, channel: n, intention: t });
                                if (i.toggleFavorite)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(a) || null != c
                                        ? (0, p.Sw)(a)
                                        : (l?.(e), (0, p.V4)(a)));
                                if (c !== em.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (c === em.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                        o?.(e, c), s({ type: 0, emojiDescriptor: e });
                                        return;
                                    }
                                    if (
                                        c === em.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED &&
                                        a.type === eQ.i.GUILD
                                    ) {
                                        o?.(e, c), s({ type: 1, guildId: a.guildId, emojiId: a.id });
                                        return;
                                    }
                                    c !== em.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                        (o?.(e), r({ emoji: a, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                                }
                            }
                        },
                        [n, t, r, s, u, o, l],
                    );
                })({
                    pickerIntention: r,
                    selectedChannel: o,
                    fallbackGuildId: eC,
                    closePopout: c,
                    onSelectEmoji: O,
                    setUpsellConfigs: eh,
                    emojiSelectAnalytics: (e, t) => {
                        "" !== eI
                            ? (0, ed.Wf)({
                                  emoji: e.emoji,
                                  location: { ...ek, object: J.ZSU.EMOJI },
                                  searchQuery: eI,
                                  isLocked: null != t,
                                  intention: r,
                                  messageId: j,
                              })
                            : (0, ed._7)({
                                  emoji: e.emoji,
                                  location: { ...ek, object: eM ?? J.ZSU.EMOJI, ...(null != ew && { page: ew }) },
                                  pickerIntention: r,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                      M.isNewerThanLastSeen(eC, e.emoji.id),
                                  isBurstReaction: ey,
                                  messageId: j,
                                  lockedReason: t,
                                  visibleRowIndex: e.visibleRowIndex,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, ed.C5)({ emoji: e.emoji, location: { ...ek, object: J.ZSU.EMOJI } });
                    },
                }),
                te = a.useCallback(() => {
                    c(), b?.();
                }, [c, b]),
                {
                    getItemProps: tt,
                    getRowProps: tn,
                    gridContainerProps: ti,
                    handleGridContainerKeyDown: tr,
                    isUsingKeyboardNavigation: ts,
                } = (function (e) {
                    let {
                            analyticsLocation: t,
                            pickerIntention: n,
                            columnCounts: i,
                            onSelectEmoji: r,
                            emojiGrid: s,
                            emojiList: o,
                            channelGuildId: l,
                            isBurstReaction: u,
                        } = e,
                        c = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(l), [l]),
                        h = a.useCallback(
                            (e, i) => {
                                if (e.type === e6.EMOJI) {
                                    if (null != e.emoji && i.altKey)
                                        return void (c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, p.Sw)(e.emoji)
                                            : ((0, ed.C5)({ emoji: e.emoji, location: { ...t, object: J.ZSU.EMOJI } }),
                                              (0, p.V4)(e.emoji)));
                                    let s = {
                                        page: null != l ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
                                        section: J.JJy.EMOJI_PICKER_POPOUT,
                                        object: J.ZSU.EMOJI,
                                    };
                                    u &&
                                        (s = {
                                            page: null != l ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
                                            section: J.JJy.EMOJI_PICKER_POPOUT,
                                            object: J.ZSU.EMOJI,
                                        }),
                                        (0, ed._7)({
                                            emoji: e.emoji,
                                            location: s,
                                            pickerIntention: n,
                                            category: e.category,
                                            subCategory: e.subCategory,
                                            newlyAddedHighlight:
                                                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                                M.isNewerThanLastSeen(l, e.emoji.id),
                                        }),
                                        r({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: u });
                                }
                            },
                            [r, l, n, c, t, u],
                        ),
                        {
                            gridDispatch: f,
                            getItemProps: E,
                            getRowProps: m,
                            gridContainerProps: g,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        } = (0, V.Ff)({
                            columnCounts: i,
                            gridNavigatorId: ez.lq,
                            itemGrid: s,
                            itemList: o,
                            onGridNavigatorItemSelect: h,
                            onGridNavigatorPositionChange: n3,
                        });
                    return (
                        a.useEffect(
                            () =>
                                U.Om.subscribe(
                                    (e) => e.inspectedExpressionPosition,
                                    (e) => {
                                        if (null == e) return;
                                        let { columnIndex: t, rowIndex: n, source: i } = e;
                                        i !== G.t.GRID_NAVIGATOR_EVENT &&
                                            f({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [f],
                        ),
                        {
                            getItemProps: E,
                            getRowProps: m,
                            gridContainerProps: g,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        }
                    );
                })({
                    pickerIntention: r,
                    analyticsLocation: ek,
                    columnCounts: eZ,
                    onSelectEmoji: O,
                    emojiGrid: eq,
                    emojiList: eS,
                    channelGuildId: eC,
                    isBurstReaction: ey,
                });
            ((e, t) => {
                let [n, i] = a.useState(null);
                a.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), i(null));
                }, [t, n]),
                    a.useEffect(() => {
                        i(U.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(v, eS),
                a.useLayoutEffect(() => {
                    ee && eN.current?.focus();
                }, [v, eV, eN, ee]),
                a.useEffect(() => {
                    L || (0, k.Ri)("");
                }, [L]),
                a.useEffect(
                    () => (
                        el.default.track(J.HAw.OPEN_POPOUT, {
                            type: ex ?? "Emoji Picker",
                            guild_id: eC,
                            location: eU,
                            ...(0, T.dI)(o),
                        }),
                        () => {
                            n6.cancel(), n4.cancel();
                        }
                    ),
                    [ex, eC, eU, o],
                ),
                (0, A.Ay)(() => ((0, ed.V$)({ intention: r, location: ek }), (eg.current = eI), U.Om.resetStoreState)),
                a.useEffect(() => () => (0, er.sF)(er._2.FAVORITE_EMOJI_TOOLTIP), []),
                a.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = U.Om.getState().inspectedExpressionPosition;
                    eq[t]?.[e] == null && 0 !== e && U.Om.setInspectedExpressionPosition(0, 0);
                }, [eq]),
                a.useEffect(() => {
                    if (("" === eg.current && "" !== eI && (0, ed.EG)(ek, r), "" !== eI && eg.current !== eI)) {
                        let e = U.Om.getAnalyticsId();
                        0 === eB
                            ? n6({ location: ek, searchQuery: eI, intention: r, loadId: e })
                            : n4({
                                  totalResults: eB,
                                  numEmojiLocked: eF?.locked.length ?? 0,
                                  location: ek,
                                  searchQuery: eI,
                                  intention: r,
                                  loadId: e,
                              });
                    }
                    eg.current = eI;
                }, [eI, ek, eB, eF, r]);
            let ta = B ?? (y ? "div" : E.l),
                to = null != eY;
            e_?.type === e5.PREMIUM
                ? (i = (0, s.jsx)(nJ.default, {
                      onUpsellClicked: te,
                      emojiDescriptor: e_.emojiDescriptor,
                      pickerIntention: r,
                      analyticsLocation: ek,
                      onClose: () => eh(null),
                      channel: o,
                  }))
                : e_?.type === e5.ROLE_SUBSCRIPTION
                  ? (i = (0, s.jsx)(ei, { onClose: () => eh(null), guildId: e_.guildId, emojiId: e_.emojiId }))
                  : ey && !ev && (i = (0, s.jsx)(eb, { onDismiss: () => eO(!1) }));
            let tl = (0, s.jsx)(tZ, {
                    channel: o,
                    pickerIntention: r,
                    emojiListRef: eS,
                    onKeyDown: (e) => {
                        tr?.(e), Q?.(e);
                    },
                    searchBarRef: eN,
                    onFocus: X,
                    autoFocus: ee,
                    accessory: en,
                    headerClassName: w,
                    diversitySurrogate: eV,
                    isBurstReaction: ey,
                    onBurstReactionToggle: function () {
                        eO(!ey), eN.current?.focus();
                    },
                    renderHeader: W,
                    showAddEmojiButton: q,
                }),
                tu = [];
            r === em.EmojiIntention.REACTION && tu.push(h.M.SUPER_REACTIONS_NITRO_MARKETING),
                C.Ay.hasFavoriteEmojis(eC) || tu.push(h.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let tc = (0, s.jsx)(m.A, {
                ...ek,
                children: (0, s.jsxs)(ta, {
                    id: ez.Do,
                    "aria-labelledby": y ? ez.k1 : void 0,
                    role: y ? "tabpanel" : void 0,
                    className: l()(tq.iE, { [tq.r6]: y, [tq.cB]: ey && ev }),
                    children: [
                        y ? null : tl,
                        (0, s.jsxs)("div", {
                            className: l()(tq.Fb, D),
                            onScroll: n2,
                            children: [
                                y ? tl : null,
                                (0, s.jsxs)("div", {
                                    className: tq.uK,
                                    ref: eT,
                                    children: [
                                        (0, s.jsx)(nQ, { channel: o, closePopout: c }),
                                        (0, s.jsx)(N.Ay, {
                                            contentTypes: tu,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === h.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(tf, { markAsDismissed: () => n(t_.i.UNKNOWN) });
                                            },
                                        }),
                                        H
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: tq.Iy,
                                                  id: ez.lq,
                                                  ...ti,
                                                  children: to
                                                      ? (0, s.jsx)(nF, {
                                                            collapsedSections: ej,
                                                            diversitySurrogate: eV,
                                                            emojiGrid: eq,
                                                            emojiListRef: eS,
                                                            emojiSize: f,
                                                            getEmojiItemProps: tt,
                                                            getEmojiRowProps: tn,
                                                            gridWidth: eY,
                                                            isUsingKeyboardNavigation: ts,
                                                            onEmojiSelect: function (e, t) {
                                                                e9(e, { ...t, isBurst: ey });
                                                            },
                                                            onSelectSoundmoji: R,
                                                            setUpsellConfigs: eh,
                                                            rowCount: eq.length,
                                                            rowCountBySection: eK,
                                                            sectionDescriptors: e$,
                                                            setCollapsedSections: eW,
                                                            channelGuildId: eC,
                                                            channelId: o?.id,
                                                            messageId: j,
                                                            isBurstReaction: ey,
                                                            listHeaderClassName: Y,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(t2, {
                                    emojiGrid: eq,
                                    className: tq.qV,
                                    guildId: eC,
                                    pickerIntention: r,
                                    channel: o,
                                }),
                                i,
                            ],
                        }),
                        H
                            ? null
                            : (0, s.jsx)(td, {
                                  className: l()(tq.jv, K),
                                  emojiListRef: eS,
                                  sectionDescriptors: e$,
                                  intention: r,
                                  channel: o,
                                  fallbackGuildId: eC,
                                  shouldShowSoundmojiInEmojiPicker: $,
                                  showOnlyUnicode: z,
                              }),
                    ],
                }),
            });
            return (0, s.jsx)(S.f5, { value: eG, children: tc });
        }),
    );
