"use strict";
n.d(t, { A: () => n4 }), n(321073);
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
    f = n(554146),
    h = n(319060),
    p = n(305866),
    E = n(554375),
    m = n(820284),
    g = n(212245),
    A = n(964486),
    I = n(793574),
    T = n(95561),
    S = n(688810),
    N = n(379848),
    y = n(159273),
    C = n(989349),
    v = n.n(C),
    O = n(228366),
    R = n(935208);
let b = { lastSeenNewlyAddedEmojiIds: {} },
    D = b,
    L = {};
function w() {
    for (let e in L) D.lastSeenNewlyAddedEmojiIds[e] = L[e];
}
class M extends _.Ay.PersistedStore {
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
        D = e ?? b;
    }
    getState() {
        return D;
    }
    getLastSeenEmojiByGuild(e) {
        return D.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || R.default.compare(t, n.id) > 0) return !0;
        {
            let e = v()(n.lastSeen);
            return v()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let P = new M(O.h, {
    LOGOUT: function () {
        (D = b), (L = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? D.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > R.default.compare(i.id, n)
            ? (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (L[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? D.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > R.default.compare(i.id, n)) && (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: w,
    CLEAR_CACHES: function () {
        (D = b), w();
    },
    CONNECTION_CLOSED: w,
});
var x = n(451731),
    U = n(850992),
    k = n(151271),
    G = n(60587),
    F = n(464651),
    V = n(562708),
    B = n(462887),
    H = n(939249),
    j = n(789645),
    Y = n(696986),
    W = n(534514),
    K = n(834730),
    z = n(736653),
    $ = n(139286),
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
        o = ((t = (0, z.Ay)()), (0, B.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: l } = (0, S.Ay)(I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, $.A)({
        type: V.ImpressionTypes.MODAL,
        name: V.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: l, emoji_guild_id: r, emoji_id: a ?? null },
    });
    let u = (0, _.bG)([Z.A], () => Z.A.getGuild(r)),
        c = (0, _.bG)([X.A], () => null != r && X.A.getUserSubscriptionRoles(r).size > 0),
        d = c ? et.intl.string(et.t.GoLM9z) : et.intl.formatToPlainString(et.t["h0u/Hi"], { serverName: u?.name }),
        f = c ? et.intl.string(et.t.PjZ7Db) : et.intl.string(et.t.p8FG1D);
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
                    (0, s.jsx)(Y.h, { size: 22 }),
                    (0, s.jsx)(W.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: en.wx,
                        children: et.intl.string(et.t.cBjkcx),
                    }),
                    (0, s.jsx)(Y.h, { size: 4 }),
                    (0, s.jsx)(K.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: en.h_,
                        children: d,
                    }),
                    (0, s.jsx)(Y.h, { size: 24 }),
                    (0, s.jsx)(Q.A, {
                        text: f,
                        onClick: () => {
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
    ef = n(309010),
    eh = n(690521),
    ep = n(818645),
    eE = n(316884),
    em = n(307731),
    eg = n(698279);
function eA(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: r, analyticsObject: s } = e,
        a = e_.A.getChannel(ef.A.getChannelId()),
        o = a?.getGuildId(),
        l =
            t === em.EmojiIntention.REACTION
                ? y.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : y.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        u = null != a ? y.Ay.getDisambiguatedEmojiContext(a.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        c =
            t === em.EmojiIntention.REACTION
                ? y.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : y.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = l.slice(0, c),
        _ = null != o ? y.Ay.getGuildEmoji(o) : [],
        f = y.Ay.getDisambiguatedEmojiContext(a?.getGuildId()).getCustomEmoji(),
        { topEmojis: h, newlyAddedEmojis: p } = (0, eE.b)({ guildId: a?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: E, visibleNewlyAddedEmojis: m } = (0, ep.W)({
            topEmojis: h,
            newlyAddedEmojis: p,
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
            num_custom_expressions_favorites: u.filter(eh.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: u.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(eh.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: _.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: E.length,
            num_animated_expressions_top_server: E.filter((e) => e.animated).length,
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
    ey = n(234419),
    eC = n(725807),
    ev = n(811611),
    eO = n(788868),
    eR = n(151867);
function eb(e) {
    let { onDismiss: t } = e,
        n = (0, _.bG)([eT.A], () => eT.A.useReducedMotion),
        i = et.intl.string(et.t.eikz43),
        r = (0, ey.V)(),
        a = (0, eN.O)(),
        o = r?.subscription_trial != null || null != a,
        u = { object: J.ZSU.BUTTON_CTA, section: J.JJy.SUPER_REACTION_PICKER };
    return (0, s.jsxs)("div", {
        className: eR.iE,
        children: [
            (0, s.jsx)(H.D, {
                onClick: t,
                className: eR.b,
                "aria-label": et.intl.string(et.t.WAI6xu),
                children: (0, s.jsx)(j.P, { size: "md", color: "currentColor" }),
            }),
            (0, s.jsxs)("div", {
                className: eR.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: eR.jo,
                        children: (0, s.jsx)(eS.A, {
                            className: l()(eR.vK, { [eR.Vk]: o }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    o
                        ? (0, s.jsx)(ev.Ay, {
                              type: eO.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: r?.subscription_trial?.sku_id ?? eO.pe.TIER_2,
                              headingText: et.intl.string(et.t.Wfl5zp),
                              analyticsLocationObject: u,
                              discountOffer: a,
                              trialOffer: r,
                              children: i,
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: eR.wx,
                                      children: [
                                          (0, s.jsx)(eI.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: eR.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, s.jsx)(W.D, {
                                              className: eR.TK,
                                              variant: "heading-xl/bold",
                                              children: et.intl.string(et.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(K.E, { className: eR.Fb, variant: "text-md/normal", children: i }),
                                  (0, s.jsx)("div", {
                                      className: eR.sk,
                                      children: (0, s.jsx)(eC.A, {
                                          subscriptionTier: eO.pe.TIER_2,
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
var eD = n(735438),
    eL = n.n(eD),
    ew = n(837381),
    eM = n(460905),
    eP = n(802019),
    ex = n(407698),
    eU = n(531685),
    ek = n(406810),
    eG = n(27232),
    eF = n(369606),
    eV = n(413249),
    eB = n(141060),
    eH = n(687966),
    ej = n(115979),
    eY = n(524501),
    eW = n(926268),
    eK = n(138134),
    ez = n(7807),
    e$ = n(732139);
let eq = a.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = ((e) => {
            switch (e) {
                case e$.R2.RECENT:
                    return ek.O;
                case e$.R2.FAVORITES:
                    return eG.G;
                case e$.R2.TOP_GUILD_EMOJI:
                    return eF.O;
                case e$.R2.PEOPLE:
                    return eM.n;
                case e$.R2.NATURE:
                    return eV.p;
                case e$.R2.FOOD:
                    return eB.i;
                case e$.R2.ACTIVITY:
                    return eH._;
                case e$.R2.TRAVEL:
                    return ej.h;
                case e$.R2.OBJECTS:
                    return eY.D;
                case e$.R2.SYMBOLS:
                    return eW.C;
                case e$.R2.FLAGS:
                    return eK.i;
                case e$.R2.PREMIUM_UPSELL:
                    return eI.t;
                case e$.R2.SOUNDMOJI:
                    return ez.J;
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
    e2 = n(711014),
    e3 =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let e6 = [em.EmojiDisabledReasons.DISALLOW_EXTERNAL, em.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e4 = (((r = {})[(r.PREMIUM = 0)] = "PREMIUM"), (r[(r.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), r),
    e5 = n(619182);
let e7 = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e8 = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    e9 = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    te = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tt = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tn = (0, ec.xI)(e5.__invalid_unicodeCategoryShortcutHeight),
    ti = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tr = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ts = e9 + e8 + 2 * tt,
    ta = e7 + e8,
    to = ta + (ti + 2 * tr),
    tl = e9 + te + 2 * tt;
function tu(e) {
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
        f = o.type === e$.s.GUILD ? null : o.id,
        h = t === n,
        p = o.type === e$.s.GUILD ? o.guild : null,
        E = (0, s.jsxs)(H.D, {
            ..._,
            "aria-label": (0, ed.wt)(o, p),
            className: l()({
                [e5.ZG]: null != p,
                [e5.Bj]: null == p,
                [e5.s6]: null == p && h,
                [e5.xg]: o.type === e$.s.RECENT,
            }),
            onClick: () => {
                null != p &&
                    el.default.track(J.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eg.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    u(n);
            },
            children: [
                null != p
                    ? (0, s.jsx)(eZ.A, { guild: p, isSelected: h, shouldAnimate: !d && c, isLocked: o.isNitroLocked })
                    : null,
                null == p && null != f
                    ? (0, s.jsx)(eq, { categoryId: f, className: e5.Yl, height: e9, width: e9, size: "custom" })
                    : null,
            ],
        }),
        m = r[n + 1],
        g = null != m && o.type === e$.s.GUILD && m.type !== e$.s.GUILD;
    return null != p
        ? (0, s.jsxs)(a.Fragment, {
              children: [
                  (0, s.jsx)(ex.Q, { guild: p, children: (0, s.jsx)("div", { children: E }) }),
                  g ? (0, s.jsx)("hr", { className: e5.ny }, "separator") : null,
              ],
          })
        : E;
}
let tc = (e) => {
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
        f = U.Om.useStore((e) => e.activeCategoryIndex),
        h = ((e) => {
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
        p = (0, g.p)(),
        E = (0, ed.ss)(r, o, o?.guild_id ?? u, c),
        m = a.useMemo(() => (d ? (0, ed.CQ)() : E), [E, d]),
        A = a.useRef(null),
        I = (0, _.bG)([eU.A], () => eU.A.isFocused()),
        T = (0, _.bG)([eT.A], () => eT.A.useReducedMotion, []),
        S = a.useMemo(
            () =>
                eL().memoize((e, t) => {
                    let n = m[t];
                    if (null != n)
                        return (0, s.jsx)(
                            tu,
                            {
                                activeIndex: f,
                                analyticsContext: p,
                                categories: m,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: h,
                                isWindowFocused: I,
                                useReducedMotion: T,
                            },
                            t,
                        );
                }),
            [f, p, m, h, I, T],
        ),
        N = a.useMemo(() => [8, 8, 0, 8], []),
        y = a.useCallback(
            (e, t) => {
                let n = m[t];
                if (n.type === e$.s.RECENT) return ts;
                if (n.type === e$.s.GUILD) {
                    let e = m[t + 1];
                    return null != e && e.type !== e$.s.GUILD ? to : ta;
                }
                return tl;
            },
            [m],
        ),
        {
            nonUnicodeCategoryCount: C,
            firstUnicodeCategoryIndex: v,
            firstUnicodeCategoryOffsetTop: O,
            rowCountBySection: R,
        } = a.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            m.forEach((r) => {
                r.type === e$.s.GUILD
                    ? ((t += 1), (n += 1))
                    : r.type === e$.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let r = ts + t * ta + to;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: r,
                rowCountBySection: [e, n, i],
            };
        }, [m]),
        [b, D] = a.useState(!0);
    a.useLayoutEffect(() => {
        D(C >= 7);
    }, [C]);
    let L = a.useCallback(
            (e) => {
                let t = A.current?.getListDimensions();
                null == t || (e + t.height - ti >= O ? D(!1) : D(!0));
            },
            [O],
        ),
        w = a.useCallback(
            (e) => {
                e(v), A.current?.scrollTo(O);
            },
            [O, v],
        ),
        M = a.useCallback(
            (e, t) => {
                let n = m[e];
                if (null == n) return 0;
                let i = b ? tn : 0;
                if (n.type === e$.s.RECENT) return t ? 0 : te;
                if (n.type === e$.s.GUILD) {
                    let n = m[e + 1];
                    return null != n && n.type !== e$.s.GUILD ? (t ? ti + -2 * tr + e8 + i : e8) : t ? i : e8;
                }
                return t ? e8 + i : 2 * e8;
            },
            [m, b],
        ),
        P = a.useMemo(
            () =>
                function (e, t) {
                    return (0, s.jsx)(a.Fragment, { children: t }, e);
                },
            [],
        ),
        x = b ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(eP.A, {
        categoryListRef: A,
        expressionsListRef: n,
        className: t,
        store: U.Om,
        categories: m,
        listPadding: N,
        onScroll: L,
        renderCategoryListItem: S,
        renderSection: P,
        rowCount: m.length,
        categoryHeight: y,
        getScrollOffsetForIndex: M,
        rowCountBySection: R,
        children: (e) =>
            C >= 7 &&
            (0, s.jsx)(
                H.D,
                {
                    "aria-hidden": !b,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: l()(e5.KB, { [e5.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => w(e),
                    children: (0, s.jsx)(eM.n, { size: "custom", color: "currentColor", height: e9, width: e9 }),
                },
                x,
            ),
    });
};
var td = n(49999),
    t_ = n(868836);
let tf = (e) => {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: t_.iE,
        children: [
            (0, s.jsx)(eW.C, { size: "md", color: "currentColor", className: t_.Kk }),
            (0, s.jsx)("div", {
                className: t_.Qs,
                children: (0, s.jsx)(K.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, s.jsx)(H.D, {
                onClick: () => t(td.i.UNKNOWN),
                children: (0, s.jsx)(j.P, { size: "md", color: "currentColor", className: t_.VN }),
            }),
        ],
    });
};
var th = n(873174),
    tp = n(459192),
    tE = n(717421),
    tm = n(343032),
    tg = n(131607),
    tA = n(428262),
    tI = n(337889);
let tT = { tension: 750, mass: 2.5, friction: 70 };
function tS(e) {
    let { checked: t, onClick: n } = e,
        i = (0, _.bG)([eT.A], () => eT.A.useReducedMotion),
        r = eo.default.getCurrentUser(),
        o = null != r && !(0, tA.TW)(r),
        u = o ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [c, d] = (0, tg.kn)(u),
        [h, p] = a.useState(!1),
        [E, m] = (0, tE.z)(() => ({})),
        g = (0, th.animated)(tm.i);
    a.useEffect(() => {
        let e = c === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (d(td.i.DISMISS), setTimeout(() => p(e), 200));
    }, [c, d]);
    let A = h ? et.intl.string(et.t["Osi/uy"]) : t && !o ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        I = h ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, s.jsx)(tp.u, {
        position: "top",
        title: I,
        body: A,
        asset: (0, s.jsx)(eI.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: h,
        children: (0, s.jsx)(H.D, {
            "aria-label": A,
            "aria-pressed": t,
            onClick: function () {
                m({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tT }),
                    n?.(),
                    p(!1);
            },
            focusProps: { enabled: !1 },
            className: l()(tI.Pf, { [tI.wM]: t }),
            children: (0, s.jsx)(g, {
                style: i ? void 0 : E,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tI.Kk,
            }),
        }),
    });
}
var tN = n(821609),
    ty = n(644508),
    tC = n(824832),
    tv = n(638263);
function tO(e) {
    let { channel: t } = e,
        n = a.useRef(null),
        i = a.useRef(0),
        [r, o] = a.useState(!1),
        [l, u] = a.useState(!1),
        c = l || r,
        d = a.useCallback(
            async (e, n, r) => {
                u(!0),
                    await (0, ty.f)({
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
            (0, s.jsx)(tN.$, {
                text: et.intl.string(et.t.iMJO37),
                variant: "secondary",
                onClick: () => {
                    n.current?.activateUploadDialogue();
                },
                disabled: c,
            }),
            (0, s.jsx)("div", {
                className: tv.F,
                children: (0, s.jsx)(tC.Ay, { ref: n, onChange: d, setLoading: o, disabled: c }, i.current),
            }),
        ],
    });
}
n(667532);
var tR = n(833272),
    tb = n(82495),
    tD = n(260762),
    tL = n(915089),
    tw = n(650583),
    tM = n(46274);
let tP = (0, tL.Ld)(),
    tx = tR.A.convert.fromCodePoint("1f44f"),
    tU = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tk(e) {
    switch (tR.A.convert.toCodePoint(e)) {
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
let tG = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: r, index: a } = e,
            o = (0, ew.rm)(`item-${a}`),
            l = eh.Ay.getURL(tx + n),
            u = (0, tE.z)({ opacity: 1, from: { opacity: +!t }, delay: r }, "animate-always");
        return (0, s.jsx)(H.D, {
            ...o,
            role: "option",
            "aria-selected": 0 === a,
            onClick: () => i(n),
            className: tM.B6,
            children: (0, s.jsx)(th.animated.div, {
                "aria-label": tk(n),
                className: tM.g4,
                style: { backgroundImage: `url("${l}")`, ...u },
            }),
        });
    },
    tF = (e) => {
        let { id: t, selectedSurrogate: n, onClick: i } = e,
            r = (0, tD.A)("diversity"),
            o = (0, tE.z)({
                height: (tU + 14) * (eJ.W$.length + 1),
                from: { height: tU + 14 },
                config: { duration: 125 },
            }),
            l = a.useRef(r);
        a.useEffect(() => {
            l.current.focusFirstVisibleItem();
        }, []);
        let u = ["", ...eJ.W$];
        return (
            eL().remove(u, (e) => e === n),
            u.unshift(n),
            (0, s.jsx)(ew.hD, {
                navigator: r,
                children: (0, s.jsx)(ew.PR, {
                    children: (e) => {
                        let { ref: n, ...r } = e;
                        return (0, s.jsx)(th.animated.div, {
                            ...r,
                            id: t,
                            ref: n,
                            className: tM.J6,
                            style: o,
                            role: "listbox",
                            children: u.map((e, t) =>
                                (0, s.jsx)(tG, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    tV = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
            r = eh.Ay.getURL(tx + n),
            [o, u] = a.useState(!1),
            c = (0, tb.A)(null, () => u(!1)),
            d = a.useRef(null);
        return (0, s.jsxs)("div", {
            ref: c,
            className: l()(tM.fx, i),
            children: [
                (0, s.jsx)(H.D, {
                    innerRef: d,
                    className: tM.Dj,
                    onClick: () => {
                        u(!0);
                    },
                    "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tk(n) }),
                    "aria-haspopup": !0,
                    "aria-expanded": o,
                    "aria-controls": tP,
                    tabIndex: o ? -1 : 0,
                    children: (0, s.jsx)("div", { className: tM.g4, style: { backgroundImage: `url("${r}")` } }),
                }),
                o
                    ? (0, s.jsx)("div", {
                          onKeyDown: (e) => {
                              e.key === tw.dh.ESCAPE
                                  ? (e.stopPropagation(), u(!1), null != d.current && d.current.focus())
                                  : "Tab" === e.key && u(!1);
                          },
                          children: (0, s.jsx)(tF, {
                              id: tP,
                              selectedSurrogate: n,
                              onClick: (e) => {
                                  (0, E.dK)(e), u(!1), t.current?.focus();
                              },
                          }),
                      })
                    : null,
            ],
        });
    };
var tB = n(942381),
    tH = n(602034),
    tj = n(892547);
let tY = a.forwardRef(function (e, t) {
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
            [_, f, h] = U.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tB.x,
            ),
            p = a.useCallback(
                (e) => {
                    U.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        U.Om.setInspectedExpressionPosition(0, 0),
                        U.Om.setSearchPlaceholder(null),
                        (0, k.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            E = a.useCallback(() => {
                p("");
            }, [p]);
        return (
            a.useImperativeHandle(t, () => ({ focus: () => c.current?.focus() })),
            (0, s.jsx)(tj.I, {
                autoFocus: l,
                query: d,
                ref: c,
                placeholder: f ?? u,
                onClear: E,
                onKeyDown: (e) => {
                    switch (e.key) {
                        case tw.dh.ARROW_LEFT:
                        case tw.dh.ARROW_RIGHT:
                        case tw.dh.ARROW_UP:
                        case tw.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    r(e);
                },
                onFocus: o,
                onChange: p,
                inputProps: {
                    "aria-label": et.intl.string(et.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": i,
                    "aria-expanded": !0,
                    ...(h ? { "aria-activedescendant": (0, tH.Aq)(i, _.columnIndex, _.rowIndex) } : void 0),
                },
            })
        );
    }),
    tW = a.memo(tY);
var tK = n(873426);
let tz = (e) => {
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
            isBurstReaction: f,
            onBurstReactionToggle: h,
            renderHeader: p,
            showAddEmojiButton: E = !0,
        } = e,
        m = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tW, {
                    emojiListRef: a,
                    gridNavigatorId: e$.lq,
                    onKeyDown: o,
                    ref: d,
                    onFocus: u,
                    autoFocus: c,
                    defaultSearchPlaceholder: (0, ed.wT)(i, f),
                }),
                i === em.EmojiIntention.REACTION ? (0, s.jsx)(tS, { checked: f, onClick: h }) : null,
                n ?? (0, s.jsx)(tV, { searchBarRef: d, className: tK.fx, selectedSurrogate: _ }),
                i !== em.EmojiIntention.NO_CUSTOM_EMOJI && E ? (0, s.jsx)(tO, { channel: t }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: l()(tK.wx, r), children: null != p ? p(m) : m });
};
var t$ = n(182922),
    tq = n(363195),
    tZ = n(486020),
    tX = n(854469);
function tQ(e) {
    return null != e && "animated" in e;
}
let tJ = a.memo(function (e) {
    let t,
        i,
        r,
        { className: o, emojiGrid: l, guildId: u, pickerIntention: c, channel: d } = e,
        f = U.Om.useStore((e) => e.inspectedExpressionPosition),
        h = a.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = f;
            return l[e]?.[t];
        }, [l, f]);
    switch (h?.type) {
        case e3.EMOJI:
            t = h?.emoji;
            break;
        case e3.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: h?.guildId, allNamesString: h?.name };
            break;
        case e3.SOUNDMOJI:
        default:
            t = null;
    }
    let p = (0, _.bG)([Z.A], () => (null !== t && t.type === eQ.i.GUILD ? Z.A.getGuild(t.guildId) : null), [t]),
        E = (0, _.bG)([eU.A], () => eU.A.isFocused()),
        m = (0, _.bG)([eT.A], () => eT.A.useReducedMotion, []),
        g = es.Sf.useSetting(),
        A = (0, ed.O7)(u, tQ(t) ? t : null),
        I = (0, _.bG)([y.Ay], () => y.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: T } = (0, eE.A)(u, c),
        S = h?.type === e3.EMOJI ? h.subCategory : e$.tm.NONE;
    if (
        (a.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    tQ(t) &&
                    S !== e$.tm.NONE &&
                    (S === e$.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eQ.i.GUILD &&
                        (0, x.mz)(t.guildId, T[0].id),
                    null != f.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: S,
                            position: h.columnIndex + 1,
                            newlyAddedHighlight: S === e$.tm.NEWLY_ADDED_EMOJI && P.isNewerThanLastSeen(u, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let N = tq.A.theme;
    if (tQ(t)) {
        let e = null != t.id ? tZ.Ay.getEmojiURL({ id: t.id, animated: g && t.animated, size: 28 }) : t.url;
        i =
            "" === e
                ? (0, s.jsx)(K.E, {
                      variant: "text-md/normal",
                      className: tX.J_,
                      children: "surrogates" in t ? t.surrogates : null,
                  })
                : (0, s.jsx)("img", { alt: (0, eh.N)(t) ?? "", src: e, className: tX.Zg });
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
        let e = n(619508),
            r = n(404828),
            a = n(600003),
            o = n(318121);
        i = I.has(t.guildId)
            ? (0, s.jsx)("img", { className: tX.Kk, src: (0, B.M)(N) ? a : o, alt: "" })
            : (0, s.jsx)("img", { className: tX.Kk, src: (0, B.M)(N) ? e : r, alt: "" });
    }
    let C =
        null != p ? (0, s.jsx)(eZ.A, { className: tX.__invalid_guildIcon, guild: p, shouldAnimate: !m && E }) : null;
    r =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? I.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, eh.N)(t);
    let v = ((e) => {
        let { inspectedEmoji: t, guild: n } = e,
            i = tQ(t);
        return null != n && i ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: d, guildId: u, intention: c, guild: p });
    return (0, s.jsx)(t$.A, {
        className: o,
        graphicPrimary: i,
        graphicSecondary: C,
        titlePrimary: r,
        titleSecondary: v,
        isFavorite: A,
        emojiSubCategory: S,
    });
});
var t0 = n(607399),
    t1 = n(537652),
    t2 = n(962125),
    t3 = n(240864),
    t6 = n(286509),
    t4 = n(89366),
    t5 = n(202639),
    t7 = n(414872),
    t8 = n(400669),
    t9 = n(909536),
    ne = n(187322),
    nt = n(304072),
    nn = n(189551),
    ni = n(289873),
    nr = n(796774),
    ns = n(209932),
    na = n(805945),
    no = n(576705);
n(980504);
var nl = n(818348),
    nu = n(219920);
let nc = a.memo(function (e) {
    let t,
        n,
        i,
        r,
        { channelId: o, onSelectSoundmoji: l } = e,
        u = (0, _.bG)([ns.A], () => !ns.A.isFetching() && !ns.A.hasFetchedAllSounds(), []),
        c = (0, _.bG)([e_.A], () => e_.A.getChannel(o)),
        d =
            ((t = (0, _.bG)([eo.default], () => tA.Ay.canUseSoundboardEverywhere(eo.default.getCurrentUser()))),
            (n = (0, _.bG)([ns.A], () => ns.A.getSoundsForGuild("0"))),
            (i = (0, _.yK)([Z.A], () => Z.A.getGuildIds())),
            (r = a.useMemo(() => no.A.can(nl.xB.USE_EXTERNAL_SOUNDS, c), [c])),
            a.useMemo(() => {
                let e = [];
                if (t && r) {
                    let t = i.flatMap((e) => ns.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eL().sampleSize(t, 4));
                } else if (c?.guild_id != null) {
                    let t = ns.A.getSoundsForGuild(c?.guild_id)?.filter((e) => e.available);
                    e.push(...eL().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eL().sampleSize(n ?? [], 4 - e.length)), e;
            }, [r, c?.guild_id, n, i, t]));
    return (a.useEffect(() => {
        (0, nr.E7)();
    }, [u]),
    0 === d.length)
        ? (0, s.jsx)(ni.y, {})
        : (0, s.jsx)("div", {
              className: nu.q,
              children: d.map((e, t) =>
                  (0, s.jsx)(
                      na.Ay,
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
var nd = n(594061),
    n_ = n(771104),
    nf = n(990078),
    nh = n(442433),
    np = n(147421),
    nE = n(723702),
    nm = n(140735),
    ng = n(194261),
    nA = n(881274);
let nI = (e) => {
    let { src: t, alt: n, size: i, "aria-label": r, className: o } = e,
        u = a.useRef(null),
        c = a.useRef(!1),
        d = c.current ? nA.S : nA.Y;
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
                          ((c.current = !0), u.current.classList.remove(nA.Y), u.current.classList.add(nA.S));
                  });
              },
    });
};
var nT = n(297547);
let nS = eL().memoize(
        (e) =>
            `${e * em.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(eJ.Ay.numNonDiversitySprites / em.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nN = eL().memoize(
        (e) =>
            `${e * em.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eJ.Ay.numDiversitySprites / em.EmojiSprites.DiversityPerRow)}px`,
    ),
    ny = a.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: r, allowAnimatedEmoji: o, "aria-label": u, isLocked: c } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : tZ.Ay.getEmojiURL({ id: t.id, animated: o && t.animated, size: em.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(nI, {
                              className: nT.N1,
                              "aria-label": u,
                              src: e,
                              size: i,
                              alt: (0, eh.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: l()(nT.xA, { [nT.N1]: c }),
                    style: ((e, t, i) => {
                        let r, s, a;
                        if (!e.useSpriteSheet) return;
                        let o = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((r = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (s = nN(i)),
                              (a = em.EmojiSprites.DiversityPerRow))
                            : ((r = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (s = nS(i)),
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
                    children: (0, s.jsx)(nm.A, { children: u }),
                });
            })();
        return (0, s.jsxs)(a.Fragment, {
            children: [
                d,
                c
                    ? (0, s.jsx)("div", {
                          className: nT.iD,
                          children: (0, s.jsx)(ng.X, { size: "xs", color: "currentColor", className: nT.fi }),
                      })
                    : null,
            ],
        });
    });
var nC = n(6376);
let nv = (e, t) => `${e}:${t}`,
    nO = a.forwardRef(function (e, t) {
        let n,
            {
                emoji: i,
                isFavorite: r,
                isLargeSize: a,
                isMediumSize: o,
                isInspected: u,
                isDisabled: c,
                showPulse: d,
                columnIndex: f,
                rowIndex: h,
                size: p,
                surrogateCodePoint: E,
                allowAnimatedEmoji: m,
                selectedItemClassName: g,
                inNitroLockedSection: A,
                ...I
            } = e,
            T = (0, _.bG)([Z.A], () => (i.type === eQ.i.GUILD ? Z.A.getGuild(i.guildId) : void 0), [i]);
        return (0, s.jsx)(ne.vN, {
            children: (0, s.jsx)("button", {
                ...I,
                className: l()(nC._X, { [nC.lG]: a, [nC.Lh]: o, [nC.Bx]: u, [g ?? ""]: u, [nC.TV]: d }),
                "data-type": G.g.EMOJI,
                "data-id": i.id,
                "data-name": i.name,
                "data-surrogates": "surrogates" in i ? i.surrogates : null,
                "data-animated": i.animated ? "true" : null,
                ref: t,
                children: (0, s.jsx)(ny, {
                    "aria-label":
                        ((n = (0, eh.N)(i)),
                        (T?.name != null &&
                            (n = et.intl.formatToPlainString(et.t["nXv4/B"], { names: n, guildName: T.name })),
                        r)
                            ? et.intl.formatToPlainString(et.t["9FI9Z0"], { names: n })
                            : n),
                    columnIndex: f,
                    rowIndex: h,
                    emoji: i,
                    size: p,
                    surrogateCodePoint: E,
                    allowAnimatedEmoji: m,
                    isLocked: c && !A,
                }),
            }),
        });
    });
function nR(e) {
    let {
            descriptor: t,
            emojiItemKey: i,
            isInspected: r,
            rowIndex: o,
            channelGuildId: l,
            onInspect: u,
            onSelect: c,
            isScrolling: d,
            isUsingKeyboardNavigation: f,
            showEmojiFavoriteTooltip: h,
            surrogateCodePoint: p,
            selectedItemClassName: E,
            getEmojiItemProps: m,
            isMediumSize: g,
            isLargeSize: A,
            pulseItemKey: I,
            allowAnimatedEmoji: T,
            setPulseItemKey: S,
            messageId: N,
            isBurstReaction: C,
            rowPosition: v,
            inNitroLockedSection: O,
        } = e,
        [R, b] = a.useState(""),
        D = (0, _.bG)([eT.A], () => eT.A.useReducedMotion),
        L = (0, _.bG)([y.Ay], () => y.Ay.getDisambiguatedEmojiContext(l), [l]),
        w = a.useRef(null),
        { emoji: M, size: P, isDisabled: x, columnIndex: U } = t,
        k = () => {
            d.current || f.current || u(t);
        },
        { ref: G, tabIndex: F, onFocus: V, ...B } = m(U, o) ?? {},
        H =
            R !== nv(U, o)
                ? (0, s.jsx)(nO, {
                      ref: G,
                      emoji: M,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(M),
                      isLargeSize: A,
                      isMediumSize: g,
                      isInspected: r,
                      isDisabled: x,
                      showPulse: I === i,
                      allowAnimatedEmoji: T,
                      onFocus: V ?? k,
                      onMouseMove: k,
                      onClick: (e) => {
                          if (
                              null != w.current &&
                              null != v &&
                              null != N &&
                              !e.shiftKey &&
                              null != M.name &&
                              C &&
                              !D &&
                              T
                          ) {
                              let e = null == M.id ? eJ.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = w.current.getBoundingClientRect();
                              (t.x = v.x + (U + 1) * P), b(nv(U, o)), (0, np.h)(N, e, M.id, t);
                          }
                          ((e) => {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              n && !y.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) && S(i),
                                  (0, er.sF)(er._2.FAVORITE_EMOJI_TOOLTIP),
                                  c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: (e) => {
                          (0, nh.L3)(e, async () => {
                              let { default: e } = await Promise.all([n.e("4774"), n.e("46132")]).then(
                                  n.bind(n, 233503),
                              );
                              return (t) => (0, s.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: F,
                      columnIndex: U,
                      rowIndex: o,
                      size: P,
                      surrogateCodePoint: p,
                      selectedItemClassName: E,
                      inNitroLockedSection: O,
                  })
                : null;
    return (0, a.createElement)(
        "li",
        { ...B, key: i, ref: w },
        h
            ? (0, s.jsx)(nf.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, nE.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let nb = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: r,
            onSelectSoundmoji: o,
            onInspect: u,
            surrogateCodePoint: c,
            getEmojiItemProps: d,
            getEmojiRowProps: _,
            isScrolling: f,
            isUsingKeyboardNavigation: h,
            rowIndex: p,
            allowAnimatedEmoji: E,
            showEmojiFavoriteTooltip: m,
            channelGuildId: g,
            category: A,
            selectedItemClassName: I,
            channelId: T,
            messageId: S,
            isBurstReaction: N,
            inNitroLockedSection: y,
            handleScrollUpOnSectionCollapse: C,
        } = e,
        v = n(619508),
        O = n(404828),
        R = n(600003),
        b = n(318121),
        D = n(443336),
        L = n(258901),
        w = n(135974),
        M = n(8013),
        x = (0, z.Ay)(),
        k = U.Om.getState(),
        [G, F] = a.useState(k.inspectedExpressionPosition),
        [V, H] = (0, nt.A)(null, 300),
        j = a.useRef(null);
    a.useEffect(
        () =>
            U.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => F(e),
            ),
        [],
    ),
        a.useEffect(() => {
            nd.bW.loadIfNecessary();
        }, []);
    let Y = i === e$.as.LARGE,
        W = i === e$.as.MEDIUM,
        $ = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`;
            switch (e.type) {
                case e3.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: i } = e,
                        o = G.rowIndex === n && G.columnIndex === i,
                        c = e.sectionCollapsedToThreeRows
                            ? o
                                ? (0, B.M)(x)
                                    ? L
                                    : M
                                : (0, B.M)(x)
                                  ? v
                                  : O
                            : o
                              ? (0, B.M)(x)
                                  ? D
                                  : w
                              : (0, B.M)(x)
                                ? R
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
                            { visibleRowIndex: E, columnIndex: m } = e,
                            { ref: g, tabIndex: A, onFocus: T, ...S } = d(m, p) ?? {},
                            N = G.rowIndex === E && G.columnIndex === m,
                            y = () => {
                                f.current || h.current || u(e);
                            };
                        return (0, a.createElement)(
                            "li",
                            { ...S, key: t },
                            (0, s.jsx)(ne.vN, {
                                children: (0, s.jsx)("button", {
                                    "aria-label": c,
                                    ref: g,
                                    className: l()(nC._X, {
                                        [nC.lG]: Y,
                                        [nC.Lh]: W,
                                        [nC.Bx]: N && !_,
                                        [I ?? ""]: N,
                                        [nC.TV]: V === t,
                                    }),
                                    onFocus: T ?? y,
                                    onMouseOver: y,
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
                                f.current ||
                                    h.current ||
                                    (r(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                    (0, nn.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || C(),
                                    el.default.track(J.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        icon: (0, s.jsx)("img", { className: nC.Kk, src: c, alt: "" }),
                        ariaLabel: _,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case e3.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        a = G.rowIndex === i && G.columnIndex === n;
                    return (0, s.jsx)(
                        nR,
                        {
                            rowIndex: p,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: a,
                            isScrolling: f,
                            isUsingKeyboardNavigation: h,
                            surrogateCodePoint: c,
                            allowAnimatedEmoji: E,
                            selectedItemClassName: I,
                            onSelect: r,
                            onInspect: u,
                            channelGuildId: g,
                            getEmojiItemProps: d,
                            isMediumSize: W,
                            isLargeSize: Y,
                            pulseItemKey: V,
                            setPulseItemKey: H,
                            showEmojiFavoriteTooltip: m,
                            messageId: S,
                            isBurstReaction: N,
                            rowPosition: j?.current?.getBoundingClientRect(),
                            inNitroLockedSection: y,
                        },
                        t,
                    );
                }
                case e3.SOUNDMOJI:
                    return;
            }
        },
        q = (e) =>
            (0, s.jsx)("ul", {
                ..._(p),
                className: l()(nC.ND, { [nC.HO]: Y, [nC.X$]: W }),
                ref: j,
                children: e.map($),
            });
    if (A === e$.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nC.ND,
            ref: j,
            children: (0, s.jsx)(nc, { channelId: T, onSelectSoundmoji: o }),
        });
    if (A !== e$.s.TOP_GUILD_EMOJI) return q(t);
    let Z = t.filter(
            (e) =>
                e.subCategory === e$.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === e$.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eQ.i.GUILD &&
                    !P.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        X = t.filter(
            (e) =>
                e.subCategory === e$.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eQ.i.GUILD &&
                P.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === X.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nC.Ng,
              children: [
                  (0, s.jsx)("div", { className: l()(nC.V6, { [nC.$3]: 0 === Z.length }), children: q(Z) }),
                  (0, s.jsxs)("div", {
                      className: nC.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: l()(nC.eE, { [nC.eM]: 1 === X.length, [nC.Wk]: Z.length > 0 }),
                              children: q(X),
                          }),
                          (0, s.jsxs)("div", {
                              className: l()(nC.lD, { [nC.EI]: Y, [nC.qU]: W, [nC.Wk]: Z.length > 0 }),
                              children: [
                                  (0, s.jsx)(n_.A, { foreground: nC.rI }),
                                  (0, s.jsx)(K.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: et.intl.string(et.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nD = n(98090);
let nL = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nw = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nM = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nP = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nx = (0, ec.xI)(h.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nU = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nk = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nG = a.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: r,
                emojiListRef: o,
                emojiSize: u,
                onEmojiSelect: c,
                onSelectSoundmoji: d,
                setUpsellConfigs: f,
                sectionDescriptors: h,
                rowCountBySection: p,
                collapsedSections: E,
                setCollapsedSections: m,
                getEmojiItemProps: A,
                getEmojiRowProps: T,
                rowCount: N,
                isUsingKeyboardNavigation: y,
                channelGuildId: C,
                channelId: v,
                messageId: O,
                isBurstReaction: R,
                listHeaderClassName: b,
            } = e,
            D = a.useRef(!1),
            L = U.Om.useStore((e) => e.activeCategoryIndex),
            w = (0, k.RQ)((e) => e.searchQuery),
            M = es.Sf.useSetting(),
            P = (0, _.bG)([eo.default], () => eo.default.getCurrentUser()),
            x = (0, eu.ki)(P),
            V = (0, t9.St)("emoji_picker_floating_upsell"),
            { location: B } = (0, g.p)(),
            { analyticsLocations: j } = (0, S.Ay)(),
            [Y, W] = a.useState(0),
            [K, z] = a.useState(!1),
            {
                listPadding: $,
                renderRow: q,
                renderSection: Z,
                renderSectionHeader: X,
                renderSectionFooter: Q,
                sectionMarginBottom: ee,
                sectionHeaderHeight: en,
                sectionFooterHeight: ei,
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
                        setCollapsedSections: f,
                        getEmojiItemProps: h,
                        getEmojiRowProps: p,
                        isScrolling: E,
                        isUsingKeyboardNavigation: m,
                        allowAnimatedEmoji: A,
                        channelGuildId: I,
                        channelId: T,
                        messageId: S,
                        isBurstReaction: N,
                        listHeaderClassName: y,
                        activeSectionIndex: C,
                        emojiListRef: v,
                    } = e,
                    O = (0, g.p)(),
                    R = a.useRef(J.An1),
                    b = a.useMemo(() => ("" !== n ? tR.A.convert.toCodePoint(n) : ""), [n]),
                    D = a.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    L = a.useCallback(
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
                                        location: O.location,
                                        tab: eg.kx.EMOJI,
                                        collapsed: !r,
                                        guild_id: n.id,
                                    }),
                                e === e$.R2.SOUNDMOJI &&
                                    el.default.track(J.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !r }),
                                f(i);
                        },
                        [O, t, f],
                    ),
                    M = a.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === e3.SOUNDMOJI ? null : e.type === e3.EMOJI ? (0, eh.N)(e.emoji) : e.name;
                        R.current !== J.An1 && window.cancelAnimationFrame(R.current),
                            (R.current = window.requestAnimationFrame(() => {
                                U.Om.setInspectedExpressionPosition(t, n, G.t.MOUSE_EVENT),
                                    U.Om.setSearchPlaceholder(i),
                                    (R.current = J.An1);
                            }));
                    }, []),
                    P = (0, _.bG)([er.HP], () => er.HP.hasHotspot(er._2.FAVORITE_EMOJI_TOOLTIP), []),
                    x = a.useMemo(
                        () =>
                            eL().memoize((e, t) => {
                                let n = i[e],
                                    a = d[t.sectionIndex];
                                return (0, s.jsx)(
                                    nb,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: r,
                                        surrogateCodePoint: b,
                                        onInspect: M,
                                        onSelect: o,
                                        onSelectSoundmoji: u,
                                        getEmojiItemProps: h,
                                        getEmojiRowProps: p,
                                        isScrolling: E,
                                        isUsingKeyboardNavigation: m,
                                        rowIndex: e,
                                        allowAnimatedEmoji: A,
                                        showEmojiFavoriteTooltip: P,
                                        channelGuildId: I,
                                        category: a.sectionId,
                                        selectedItemClassName: nD.__invalid_selectedItem,
                                        channelId: T,
                                        messageId: S,
                                        isBurstReaction: N,
                                        inNitroLockedSection: a.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: () => {
                                            v.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, r, b, M, o, u, h, p, E, m, A, P, I, T, S, N, v],
                    );
                a.useEffect(() => () => x.cache?.clear?.(), [x]);
                let F = a.useMemo(
                        () =>
                            eL().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: r, type: a, sectionId: o } = n;
                                if (a === e$.s.SEARCH_RESULTS) return;
                                let u =
                                        a === e$.s.GUILD
                                            ? null != i
                                                ? (0, s.jsx)(eZ.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != r
                                              ? (0, s.jsx)(eq, { categoryId: r, height: 16, width: 16, size: "custom" })
                                              : null,
                                    c = i?.name;
                                null != r && (c = (0, ed.Nu)(r, i?.name));
                                let _ = C === e,
                                    f = n.isNitroLocked,
                                    h = f && !_,
                                    p = f && _,
                                    E =
                                        a === e$.s.SOUNDMOJI
                                            ? (0, s.jsx)(H.D, {
                                                  className: nD.f3,
                                                  onClick: () => {
                                                      (0, k.U)(eg.kx.SOUNDBOARD),
                                                          el.default.track(J.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t6.A,
                                    {
                                        className: l()(nD.wx, y, { [nD.RA]: h, [nD.sp]: p }),
                                        icon: u,
                                        isCollapsed: t.has(o),
                                        onClick: () => w(o, i),
                                        trailing: E,
                                        children: c,
                                    },
                                    o,
                                );
                            }),
                        [d, t, w, y, C],
                    ),
                    V = (0, e0.k0)(),
                    B = a.useCallback(
                        (e, n) => {
                            let i = d[e],
                                r = L(e),
                                a = D(e);
                            return (0, s.jsx)(
                                "div",
                                {
                                    className: l()(nD.Wy, {
                                        [nD.YD]: e === d.length - 1,
                                        [nD.jl]: t.has(i.sectionId),
                                        [nD.cW]: i.isNitroLocked,
                                        [nD.T5]: r || a,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, L, D],
                    ),
                    j = a.useCallback(
                        (e) =>
                            L(e)
                                ? V
                                    ? (0, s.jsx)(t7.ap, {})
                                    : (0, s.jsx)(t7.Ay, {})
                                : D(e)
                                  ? (0, s.jsx)("div", { className: nD.pQ })
                                  : null,
                        [L, D, V],
                    ),
                    Y = a.useCallback((e) => (L(e) ? 41 : 33 * !!D(e)), [L, D]),
                    W = a.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || L(e) || D(e) ? 0 : nU),
                        [t, d, L, D],
                    );
                return {
                    listPadding: a.useMemo(() => ["" !== c ? nP : nL, nw, nM, 0], [c]),
                    renderRow: x,
                    renderSection: B,
                    renderSectionHeader: F,
                    renderSectionFooter: j,
                    sectionMarginBottom: W,
                    sectionHeaderHeight: a.useCallback((e) => (d[e].type === e$.s.SEARCH_RESULTS ? 0 : nx), [d]),
                    sectionFooterHeight: Y,
                };
            })({
                collapsedSections: E,
                diversitySurrogate: i,
                emojiGrid: r,
                emojiSize: u,
                onEmojiSelect: c,
                onSelectSoundmoji: d,
                searchQuery: w,
                sectionDescriptors: h,
                setCollapsedSections: m,
                getEmojiItemProps: A,
                getEmojiRowProps: T,
                isScrolling: D,
                isUsingKeyboardNavigation: y,
                allowAnimatedEmoji: M,
                channelGuildId: C,
                channelId: v,
                messageId: O,
                isBurstReaction: R,
                listHeaderClassName: b,
                activeSectionIndex: Y,
                emojiListRef: o,
            }),
            ea = (0, F.Fk)({
                activeCategoryIndex: L,
                isScrolling: D,
                listRef: o,
                onActiveCategoryIndexChange: (e) => {
                    W(e), "" === w && U.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: w,
                disableForSearch: !1,
            });
        (0, F.FV)({ searchQuery: w, activeCategoryIndex: L, listRef: o });
        let ec = a.useCallback(
                (e) => {
                    ea(e),
                        nF({ emojiListRef: o, sectionDescriptors: h, scrollTop: e, searchQuery: w, setShowUpsell: z });
                },
                [ea, o, h, w, z],
            ),
            e_ = h.length > 0;
        return (
            a.useEffect(() => {
                K &&
                    el.default.track(J.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: eO.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: B,
                        location_stack: j,
                    });
            }, [B, j, K]),
            a.useEffect(() => {
                "" !== w && z(!1);
            }, [w]),
            (0, s.jsxs)("div", {
                className: nD.AD,
                children: [
                    e_
                        ? (0, s.jsx)(t2.A, {
                              role: "none presentation",
                              className: nD.p_,
                              listPadding: $,
                              onScroll: ec,
                              renderRow: q,
                              renderSection: Z,
                              renderSectionHeader: X,
                              renderSectionFooter: Q,
                              rowCount: N,
                              rowCountBySection: p,
                              rowHeight: u + 2 * nk,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: ee,
                              sectionFooterHeight: ei,
                              stickyHeaders: !0,
                              ref: o,
                          })
                        : (0, s.jsx)(t1.A, { message: et.intl.string(et.t.IxxiKF), className: nD.BZ }),
                    x || t0.Fr
                        ? null
                        : (0, s.jsx)(t5.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, tA.Dd)(eO.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: e4.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t4.qD)()), (0, tA.LE)(n, eO.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: J.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: V
                                  ? (0, s.jsx)(t8.l, {
                                        size: "sm",
                                        className: nD.ij,
                                        location: I.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    nF = eL().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: r, setShowUpsell: s } = e;
            s(
                (0, t3.s)({ listRef: t, searchQuery: r, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nV = n(506774),
    nB = n(349288),
    nH = n(753390),
    nj = n(404374),
    nY = n(780964),
    nW = n(766075),
    nK = n(166403),
    nz = n(542863);
let n$ = "premiumRetentionEmojiPickerNotice",
    nq = nV.w.get(n$),
    nZ = (e) => {
        let { closePopout: t, channel: n } = e,
            [i, r] = a.useState(!1),
            { subscription: o, hasFetchedSubscriptions: l } = (0, _.cf)([nK.A], () => ({
                subscription: nK.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nK.A.hasFetchedSubscriptions(),
            }));
        if (
            (a.useEffect(() => {
                l || (0, nH.hP)();
            }, [l]),
            null == o || !(0, tA.PK)(o.status) || i)
        )
            return null;
        let u = o.status === J.Dmq.PAST_DUE ? (0, tA.ji)(o).expiresDate : v()(o.currentPeriodStart).add(eO.ph),
            c = `${o.id}:${u.toISOString()}`;
        if (nq === c) return null;
        let d =
            tA.Ay.getPremiumType(o.planId) === eO.PremiumTypes.TIER_0
                ? nj.k0.PREMIUM_TIER_0
                : tA.Ay.getPremiumType(o.planId) === eO.PremiumTypes.TIER_1
                  ? nj.k0.PREMIUM_TIER_1
                  : nj.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)("div", {
            className: nz.g$,
            children: [
                (0, s.jsx)(eI.t, { size: "md", className: nz.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: nz.Xn,
                    children: [
                        (0, s.jsx)(K.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: tA.Ay.getTierDisplayNameByPlanId(o.planId),
                                endsAt: u.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nB.Anchor, {
                                onClick: () => {
                                    (0, ed.xf)(n), t(), (0, nW.openUserSettings)(nY.X.NITRO_PANEL);
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(H.D, {
                    onClick: () => {
                        nV.w.set(n$, c), (nq = c), r(!0);
                    },
                    children: (0, s.jsx)(j.P, { size: "md", color: "currentColor", className: nz.YF }),
                }),
            ],
        });
    };
var nX = n(148361);
let nQ = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    nJ = (0, ec.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    n0 = (e) => e.stopPropagation(),
    n1 = (e, t) => {
        U.Om.setInspectedExpressionPosition(e, t, G.t.GRID_NAVIGATOR_EVENT);
    },
    n2 = c()(ed.bo, 200),
    n3 = c()(ed.Wi, 200),
    n6 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n4 = a.memo(
        a.forwardRef(function (e, t) {
            let n,
                i,
                {
                    pickerIntention: r,
                    channel: o,
                    guildId: u,
                    closePopout: c,
                    emojiSize: h = e$.as.MEDIUM,
                    hasTabWrapper: C = !1,
                    onSelectEmoji: v,
                    onSelectSoundmoji: O,
                    containerWidth: R,
                    onNavigateAway: b,
                    persistSearch: D,
                    className: L,
                    headerClassName: w,
                    analyticsOverride: M = n6,
                    searchProps: V = {},
                    wrapper: B,
                    shouldHidePickerActions: H = !1,
                    messageId: j,
                    renderHeader: Y,
                    listHeaderClassName: W,
                    categoryListClassName: K,
                    shouldShowSoundmojiInEmojiPicker: z = !1,
                    showOnlyUnicode: $ = !1,
                    showAddEmojiButton: q,
                } = e,
                { onFocus: X, onKeyDown: Q, autoFocus: ee = !0, accessory: en } = V,
                ec = (0, _.bG)([ea.Ay], () => (null != u ? ea.Ay.getDefaultChannel(u) : null), [u]),
                [e_, ef] = a.useState(null),
                eg = a.useRef(""),
                eI = (0, k.RQ)((e) => e.searchQuery),
                eT = a.useRef(null),
                eS = a.useRef(null),
                eN = a.useRef(null);
            null == o && null != ec && (o = ec);
            let ey = o?.getGuildId() ?? u ?? null,
                [eC, ev] = a.useState(!1),
                eO = eo.default.getCurrentUser(),
                eR = (0, eu.ki)(eO);
            a.useImperativeHandle(t, () => ({ onPickerOpen: e7 }));
            let { location: eD } = (0, g.p)(),
                { page: ew, section: eM, object: eP, openPopoutType: ex, popoutLocation: eU } = M,
                ek = a.useMemo(() => ({ ...eD, section: eM ?? J.JJy.EMOJI_PICKER_POPOUT }), [eD, eM]),
                { analyticsLocations: eG } = (0, S.Ay)(I.A.EMOJI_PICKER),
                { diversitySurrogate: eF } = (0, _.cf)([y.Ay], () => ({ diversitySurrogate: y.Ay.diversitySurrogate })),
                eV = (0, ed.sL)(eI, o, r, $),
                eB = null == eV ? 0 : eV.locked.length + eV.unlocked.length,
                eH = es.iM.useSetting(),
                ej = a.useMemo(() => new Set(eH), [eH]),
                eY = a.useCallback((e) => {
                    es.iM.updateSetting(Array.from(e));
                }, []),
                eW = (0, F.oV)({ gridWrapperRef: eT, containerWidth: R, listPaddingLeft: nJ, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eK,
                    sectionDescriptors: ez,
                    emojiGrid: eq,
                    columnCounts: eZ,
                } = ((e) => {
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
                        f = (0, _.bG)([y.Ay], () => y.Ay.categories),
                        h = a.useMemo(() => (d ? eJ.Ay.getCategories() : f), [f, d]),
                        p = (0, _.bG)([Z.A], () => Z.A.getGuild(t?.getGuildId()), [t]),
                        E = t?.getGuildId() ?? n,
                        m = (0, _.bG)([y.Ay], () => y.Ay.getDisambiguatedEmojiContext(E), [E]),
                        g = (0, ed.XI)(E),
                        A = (0, ed.Fj)(E),
                        I = (0, ed.QZ)(E),
                        { topEmojis: T, newlyAddedEmojis: S } = (0, eE.A)(E, r),
                        N = (0, _.yK)([e2.Ay], () => e2.Ay.getFlattenedGuildIds(), []),
                        C = (0, _.bG)([y.Ay], () => y.Ay.expandedSectionsByGuildIds),
                        v = (0, _.bG)([eo.default], () => eo.default.getCurrentUser()),
                        O = (0, eu.ki)(v),
                        R = (0, e0.k0)(),
                        b = m.getGroupedCustomEmoji(),
                        D = (0, e1.Ym)({ location: "useEmojiGrid" });
                    return a.useMemo(() => {
                        let e = [],
                            n = [],
                            a = [],
                            d = [],
                            _ = 0,
                            f = 0;
                        if (null != m && null != o) {
                            let E = Math.floor(o / (u + 2 * l)),
                                m = 3 * E,
                                y = (s, o) => {
                                    let l = new Map(),
                                        c = i.has(o.sectionId),
                                        [h, p] = eL().partition(s, (e) => {
                                            let n = eh.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: r });
                                            return l.set(e, n), !n;
                                        }),
                                        g = h.concat(p),
                                        A = o.guild,
                                        I = g.length > m && null != A && o.isNitroLocked,
                                        N = I && !C.has(A.id);
                                    N && g.splice(m - 1);
                                    let y = Math.ceil((I ? g.length + 1 : g.length) / E),
                                        v = [];
                                    for (let e = 0; e < y; e++) {
                                        let t = e * E,
                                            n = t + E,
                                            i = g
                                                .slice(t, n)
                                                .map((e, t) => ({
                                                    type: 0,
                                                    emoji: e,
                                                    size: u,
                                                    isDisabled: l.get(e),
                                                    rowIndex: f,
                                                    columnIndex: t,
                                                    visibleRowIndex: _,
                                                    category: o.type,
                                                    subCategory:
                                                        o.sectionId === e$.s.TOP_GUILD_EMOJI
                                                            ? (0, ed.DA)(T, S, e.id ?? e.uniqueName ?? e.name)
                                                            : e$.tm.NONE,
                                                }));
                                        if ((v.push(i), !c)) {
                                            if (I && e === y - 1) {
                                                let t = v[e];
                                                t.push({
                                                    type: 1,
                                                    guildId: A.id,
                                                    name: et.intl.string(et.t.NZI2Zk),
                                                    size: u,
                                                    rowIndex: e,
                                                    columnIndex: t.length,
                                                    visibleRowIndex: _,
                                                    sectionCollapsedToThreeRows: N,
                                                });
                                            }
                                            d.push(i.length), a.push(i), _++;
                                        }
                                        f++;
                                    }
                                    let O = { ...o, count: s.length };
                                    n.push(O), e.push(c ? 0 : y);
                                };
                            if (null != s)
                                0 !== s.unlocked.length &&
                                    y(s.unlocked, {
                                        type: e$.s.SEARCH_RESULTS,
                                        sectionId: e$.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        y(s.locked, {
                                            type: e$.s.PREMIUM_UPSELL,
                                            categoryId: e$.R2.PREMIUM_UPSELL,
                                            sectionId: e$.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !O,
                                        });
                            else {
                                if (D && c) {
                                    let t = [{ type: 2, rowIndex: f, columnIndex: 0, visibleRowIndex: _ }];
                                    n.push({
                                        type: e$.s.SOUNDMOJI,
                                        categoryId: e$.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let r = i.has(e$.R2.SOUNDMOJI);
                                    !r && (d.push(t.length), a.push(t), _++), e.push(+!r), f++;
                                }
                                for (let e of h)
                                    if (e === e$.R2.CUSTOM) {
                                        let n = (n) => {
                                            let i = b.get(n);
                                            if (null == i) return;
                                            let s = i.filter(
                                                (e) =>
                                                    !e6.includes(
                                                        eh.Ay.getEmojiUnavailableReason({
                                                            emoji: e,
                                                            channel: t ?? ea.Ay.getDefaultChannel(n),
                                                            intention: r,
                                                        }),
                                                    ),
                                            );
                                            if (0 === s.length) return;
                                            let a = Z.A.getGuild(n),
                                                o =
                                                    R ||
                                                    (!O &&
                                                        eh.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: r,
                                                        }));
                                            y(s, {
                                                categoryId: e,
                                                guild: a,
                                                type: e$.s.GUILD,
                                                sectionId: null != a ? a.id : (0, eX.A)(),
                                                count: s.length,
                                                isNitroLocked: o,
                                            });
                                        };
                                        if ((null != p && n(p.id), (0, em.isExternalEmojiAllowedForIntention)(r)))
                                            for (let e of N) (null == p || p.id !== e) && n(e);
                                    } else if (e === e$.R2.TOP_GUILD_EMOJI) {
                                        if (null != p) {
                                            let { allEmojis: t } = (0, ep.W)({ topEmojis: T, newlyAddedEmojis: S });
                                            t.length > 0 &&
                                                y(t, {
                                                    categoryId: e,
                                                    guild: Z.A.getGuild(p.id),
                                                    type: e$.s.TOP_GUILD_EMOJI,
                                                    sectionId: e$.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === e$.R2.RECENT) {
                                        let n = (r === em.EmojiIntention.REACTION ? I : A).filter(
                                            (e) => !eh.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                                        );
                                        y(n, {
                                            categoryId: e,
                                            type: e$.s.RECENT,
                                            sectionId: e$.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === e$.R2.FAVORITES) {
                                        let n = g.filter(
                                            (e) => !eh.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                                        );
                                        0 !== n.length &&
                                            y(n, {
                                                categoryId: e,
                                                type: e$.s.FAVORITES,
                                                sectionId: e$.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = eJ.Ay.getByCategory(e);
                                        null != t &&
                                            y(t, {
                                                categoryId: e,
                                                type: e$.s.UNICODE,
                                                sectionId: e,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                            }
                        }
                        return { columnCounts: d, emojiGrid: a, rowCountBySection: e, sectionDescriptors: n };
                    }, [m, o, u, l, s, i, b, C, t, r, T, S, O, h, p, N, I, A, g, R, D, c]);
                })({
                    gridWidth: eW,
                    fallbackGuildId: ey,
                    channel: o,
                    pickerIntention: r,
                    emojiSearchResults: eV,
                    collapsedSections: ej,
                    emojiPaddingHorizontal: nQ,
                    emojiSpriteSize: h,
                    shouldShowSoundmojiInEmojiPicker: z,
                    showOnlyUnicode: $,
                }),
                { newlyAddedEmojis: e5 } = (0, eE.A)(ey, r);
            (n = a.useRef({ intention: r, isBurstReaction: eC, analyticsObject: eP })),
                a.useEffect(() => {
                    n.current.intention === em.EmojiIntention.REACTION && eA(n.current);
                }, []);
            let e7 = a.useCallback(() => {
                    let e = e5.length > 0 ? e5[0].id : null;
                    (0, x.uV)(ey, e), eA({ intention: r, isBurstReaction: eC, analyticsObject: eP });
                }, [e5, ey, r, eC, eP]),
                e8 = ((e) => {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: i,
                            onSelectEmoji: r,
                            setUpsellConfigs: s,
                            emojiSelectAnalytics: o,
                            trackEmojiFavorited: l,
                        } = e,
                        u = (0, _.bG)([y.Ay], () => y.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                    return a.useCallback(
                        (e, i) => {
                            if (0 === e.type) {
                                let { emoji: a } = e;
                                if (null == a) return;
                                let c = eh.Ay.getEmojiUnavailableReason({ emoji: a, channel: n, intention: t });
                                if (i.toggleFavorite)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(a) || null != c
                                        ? (0, E.Sw)(a)
                                        : (l?.(e), (0, E.V4)(a)));
                                if (c !== em.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (c === em.EmojiDisabledReasons.PREMIUM_LOCKED)
                                        return void s({ type: 0, emojiDescriptor: e });
                                    if (c === em.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && a.type === eQ.i.GUILD)
                                        return void s({ type: 1, guildId: a.guildId, emojiId: a.id });
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
                    fallbackGuildId: ey,
                    closePopout: c,
                    onSelectEmoji: v,
                    setUpsellConfigs: ef,
                    emojiSelectAnalytics: (e) => {
                        "" !== eI
                            ? (0, ed.Wf)({
                                  emoji: e.emoji,
                                  location: { ...ek, object: J.ZSU.EMOJI },
                                  searchQuery: eI,
                                  intention: r,
                                  messageId: j,
                              })
                            : (0, ed._7)({
                                  emoji: e.emoji,
                                  location: { ...ek, object: eP ?? J.ZSU.EMOJI, ...(null != ew && { page: ew }) },
                                  pickerIntention: r,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === e$.tm.NEWLY_ADDED_EMOJI &&
                                      P.isNewerThanLastSeen(ey, e.emoji.id),
                                  isBurstReaction: eC,
                                  messageId: j,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, ed.C5)({ emoji: e.emoji, location: { ...ek, object: J.ZSU.EMOJI } });
                    },
                }),
                e9 = a.useCallback(() => {
                    c(), b?.();
                }, [c, b]),
                {
                    getItemProps: te,
                    getRowProps: tt,
                    gridContainerProps: tn,
                    handleGridContainerKeyDown: ti,
                    isUsingKeyboardNavigation: tr,
                } = ((e) => {
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
                        c = (0, _.bG)([y.Ay], () => y.Ay.getDisambiguatedEmojiContext(l), [l]),
                        f = a.useCallback(
                            (e, i) => {
                                if (e.type === e3.EMOJI) {
                                    if (null != e.emoji && i.altKey)
                                        return void (c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, E.Sw)(e.emoji)
                                            : ((0, ed.C5)({ emoji: e.emoji, location: { ...t, object: J.ZSU.EMOJI } }),
                                              (0, E.V4)(e.emoji)));
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
                                                e.subCategory === e$.tm.NEWLY_ADDED_EMOJI &&
                                                P.isNewerThanLastSeen(l, e.emoji.id),
                                        }),
                                        r({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: u });
                                }
                            },
                            [r, l, n, c, t, u],
                        ),
                        {
                            gridDispatch: h,
                            getItemProps: p,
                            getRowProps: m,
                            gridContainerProps: g,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        } = (0, F.Ff)({
                            columnCounts: i,
                            gridNavigatorId: e$.lq,
                            itemGrid: s,
                            itemList: o,
                            onGridNavigatorItemSelect: f,
                            onGridNavigatorPositionChange: n1,
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
                                            h({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [h],
                        ),
                        {
                            getItemProps: p,
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
                    onSelectEmoji: v,
                    emojiGrid: eq,
                    emojiList: eS,
                    channelGuildId: ey,
                    isBurstReaction: eC,
                });
            ((e, t) => {
                let [n, i] = a.useState(null);
                a.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), i(null));
                }, [t, n]),
                    a.useEffect(() => {
                        i(U.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(R, eS),
                a.useLayoutEffect(() => {
                    ee && eN.current?.focus();
                }, [R, eF, eN, ee]),
                a.useEffect(() => {
                    D || (0, k.Ri)("");
                }, [D]),
                a.useEffect(
                    () => (
                        el.default.track(J.HAw.OPEN_POPOUT, {
                            type: ex ?? "Emoji Picker",
                            guild_id: ey,
                            location: eU,
                            ...(0, T.dI)(o),
                        }),
                        () => {
                            n2.cancel(), n3.cancel();
                        }
                    ),
                    [ex, ey, eU, o],
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
                            ? n2({ location: ek, searchQuery: eI, intention: r, loadId: e })
                            : n3({
                                  totalResults: eB,
                                  numEmojiLocked: eV?.locked.length ?? 0,
                                  location: ek,
                                  searchQuery: eI,
                                  intention: r,
                                  loadId: e,
                              });
                    }
                    eg.current = eI;
                }, [eI, ek, eB, eV, r]);
            let ts = B ?? (C ? "div" : p.l),
                ta = null != eW;
            e_?.type === e4.PREMIUM
                ? (i = (0, s.jsx)(nX.default, {
                      onUpsellClicked: e9,
                      emojiDescriptor: e_.emojiDescriptor,
                      pickerIntention: r,
                      analyticsLocation: ek,
                      onClose: () => ef(null),
                      channel: o,
                  }))
                : e_?.type === e4.ROLE_SUBSCRIPTION
                  ? (i = (0, s.jsx)(ei, { onClose: () => ef(null), guildId: e_.guildId, emojiId: e_.emojiId }))
                  : eC && !eR && (i = (0, s.jsx)(eb, { onDismiss: () => ev(!1) }));
            let to = (0, s.jsx)(tz, {
                    channel: o,
                    pickerIntention: r,
                    emojiListRef: eS,
                    onKeyDown: (e) => {
                        ti?.(e), Q?.(e);
                    },
                    searchBarRef: eN,
                    onFocus: X,
                    autoFocus: ee,
                    accessory: en,
                    headerClassName: w,
                    diversitySurrogate: eF,
                    isBurstReaction: eC,
                    onBurstReactionToggle: () => {
                        ev(!eC), eN.current?.focus();
                    },
                    renderHeader: Y,
                    showAddEmojiButton: q,
                }),
                tl = [];
            r === em.EmojiIntention.REACTION && tl.push(f.M.SUPER_REACTIONS_NITRO_MARKETING),
                y.Ay.hasFavoriteEmojis(ey) || tl.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let tu = (0, s.jsx)(m.A, {
                ...ek,
                children: (0, s.jsxs)(ts, {
                    id: e$.Do,
                    "aria-labelledby": C ? e$.k1 : void 0,
                    role: C ? "tabpanel" : void 0,
                    className: l()(tK.iE, { [tK.r6]: C, [tK.cB]: eC && eR }),
                    children: [
                        C ? null : to,
                        (0, s.jsxs)("div", {
                            className: l()(tK.Fb, L),
                            onScroll: n0,
                            children: [
                                C ? to : null,
                                (0, s.jsxs)("div", {
                                    className: tK.uK,
                                    ref: eT,
                                    children: [
                                        (0, s.jsx)(nZ, { channel: o, closePopout: c }),
                                        (0, s.jsx)(N.Ay, {
                                            contentTypes: tl,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(tf, { markAsDismissed: () => n(td.i.UNKNOWN) });
                                            },
                                        }),
                                        H
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: tK.Iy,
                                                  id: e$.lq,
                                                  ...tn,
                                                  children: ta
                                                      ? (0, s.jsx)(nG, {
                                                            collapsedSections: ej,
                                                            diversitySurrogate: eF,
                                                            emojiGrid: eq,
                                                            emojiListRef: eS,
                                                            emojiSize: h,
                                                            getEmojiItemProps: te,
                                                            getEmojiRowProps: tt,
                                                            gridWidth: eW,
                                                            isUsingKeyboardNavigation: tr,
                                                            onEmojiSelect: (e, t) => {
                                                                e8(e, { ...t, isBurst: eC });
                                                            },
                                                            onSelectSoundmoji: O,
                                                            setUpsellConfigs: ef,
                                                            rowCount: eq.length,
                                                            rowCountBySection: eK,
                                                            sectionDescriptors: ez,
                                                            setCollapsedSections: eY,
                                                            channelGuildId: ey,
                                                            channelId: o?.id,
                                                            messageId: j,
                                                            isBurstReaction: eC,
                                                            listHeaderClassName: W,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(tJ, {
                                    emojiGrid: eq,
                                    className: tK.qV,
                                    guildId: ey,
                                    pickerIntention: r,
                                    channel: o,
                                }),
                                i,
                            ],
                        }),
                        H
                            ? null
                            : (0, s.jsx)(tc, {
                                  className: l()(tK.jv, K),
                                  emojiListRef: eS,
                                  sectionDescriptors: ez,
                                  intention: r,
                                  channel: o,
                                  fallbackGuildId: ey,
                                  shouldShowSoundmojiInEmojiPicker: z,
                                  showOnlyUnicode: $,
                              }),
                    ],
                }),
            });
            return (0, s.jsx)(S.f5, { value: eG, children: tu });
        }),
    );
