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
    h = n(554146),
    f = n(319060),
    p = n(305866),
    E = n(554375),
    m = n(820284),
    g = n(212245),
    A = n(964486),
    I = n(793574),
    T = n(95561),
    S = n(688810),
    y = n(379848),
    C = n(159273),
    N = n(989349),
    v = n.n(N),
    R = n(228366),
    O = n(935208);
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
        if (null == n || O.default.compare(t, n.id) > 0) return !0;
        {
            let e = v()(n.lastSeen);
            return v()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let P = new M(R.h, {
    LOGOUT: function () {
        (D = b), (L = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? D.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > O.default.compare(i.id, n)
            ? (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (L[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? D.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > O.default.compare(i.id, n)) && (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: w,
    CLEAR_CACHES: function () {
        (D = b), w();
    },
    CONNECTION_CLOSED: w,
});
var x = n(451731),
    k = n(850992),
    U = n(151271),
    G = n(60587),
    F = n(464651),
    V = n(562708),
    B = n(462887),
    j = n(939249),
    H = n(789645),
    Y = n(696986),
    W = n(534514),
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
        type: V.ImpressionTypes.MODAL,
        name: V.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
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
                    (0, s.jsx)(j.D, {
                        className: en.b,
                        "aria-label": et.intl.string(et.t.cpT0Cq),
                        onClick: i,
                        children: (0, s.jsx)(H.P, {
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
                        text: h,
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
    eh = n(309010),
    ef = n(690521),
    ep = n(818645),
    eE = n(316884),
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
        { topEmojis: f, newlyAddedEmojis: p } = (0, eE.b)({ guildId: a?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: E, visibleNewlyAddedEmojis: m } = (0, ep.W)({
            topEmojis: f,
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
            num_custom_expressions_favorites: u.filter(ef.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: u.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(ef.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: _.length,
            num_custom_expressions_total: h.size,
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
    ey = n(422936),
    eC = n(234419),
    eN = n(725807),
    ev = n(811611),
    eR = n(788868),
    eO = n(151867);
function eb(e) {
    let { onDismiss: t } = e,
        n = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        i = et.intl.string(et.t.eikz43),
        r = (0, eC.V)(),
        a = (0, ey.O)(),
        o = r?.subscription_trial != null || null != a,
        u = { object: J.ZSU.BUTTON_CTA, section: J.JJy.SUPER_REACTION_PICKER };
    return (0, s.jsxs)("div", {
        className: eO.iE,
        children: [
            (0, s.jsx)(j.D, {
                onClick: t,
                className: eO.b,
                "aria-label": et.intl.string(et.t.WAI6xu),
                children: (0, s.jsx)(H.P, { size: "md", color: "currentColor" }),
            }),
            (0, s.jsxs)("div", {
                className: eO.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: eO.jo,
                        children: (0, s.jsx)(eS.A, {
                            className: l()(eO.vK, { [eO.Vk]: o }),
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
                                      className: eO.wx,
                                      children: [
                                          (0, s.jsx)(eI.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: eO.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, s.jsx)(W.D, {
                                              className: eO.TK,
                                              variant: "heading-xl/bold",
                                              children: et.intl.string(et.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(K.E, { className: eO.Fb, variant: "text-md/normal", children: i }),
                                  (0, s.jsx)("div", {
                                      className: eO.sk,
                                      children: (0, s.jsx)(eN.A, {
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
var eD = n(735438),
    eL = n.n(eD),
    ew = n(837381),
    eM = n(460905),
    eP = n(802019),
    ex = n(407698),
    ek = n(531685),
    eU = n(406810),
    eG = n(27232),
    eF = n(369606),
    eV = n(413249),
    eB = n(141060),
    ej = n(687966),
    eH = n(115979),
    eY = n(524501),
    eW = n(926268),
    eK = n(138134),
    e$ = n(7807),
    ez = n(732139);
let eq = a.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = ((e) => {
            switch (e) {
                case ez.R2.RECENT:
                    return eU.O;
                case ez.R2.FAVORITES:
                    return eG.G;
                case ez.R2.TOP_GUILD_EMOJI:
                    return eF.O;
                case ez.R2.PEOPLE:
                    return eM.n;
                case ez.R2.NATURE:
                    return eV.p;
                case ez.R2.FOOD:
                    return eB.i;
                case ez.R2.ACTIVITY:
                    return ej._;
                case ez.R2.TRAVEL:
                    return eH.h;
                case ez.R2.OBJECTS:
                    return eY.D;
                case ez.R2.SYMBOLS:
                    return eW.C;
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
    e2 = n(711014),
    e3 =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let e6 = [em.EmojiDisabledReasons.DISALLOW_EXTERNAL, em.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e4 = (((r = {})[(r.PREMIUM = 0)] = "PREMIUM"), (r[(r.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), r),
    e5 = n(619182);
let e7 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e8 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    e9 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    te = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tt = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tn = (0, ec.xI)(e5.__invalid_unicodeCategoryShortcutHeight),
    ti = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tr = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
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
        h = o.type === ez.s.GUILD ? null : o.id,
        f = t === n,
        p = o.type === ez.s.GUILD ? o.guild : null,
        E = (0, s.jsxs)(j.D, {
            ..._,
            "aria-label": (0, ed.wt)(o, p),
            className: l()({
                [e5.ZG]: null != p,
                [e5.Bj]: null == p,
                [e5.s6]: null == p && f,
                [e5.xg]: o.type === ez.s.RECENT,
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
                    ? (0, s.jsx)(eZ.A, { guild: p, isSelected: f, shouldAnimate: !d && c, isLocked: o.isNitroLocked })
                    : null,
                null == p && null != h
                    ? (0, s.jsx)(eq, { categoryId: h, className: e5.Yl, height: e9, width: e9, size: "custom" })
                    : null,
            ],
        }),
        m = r[n + 1],
        g = null != m && o.type === ez.s.GUILD && m.type !== ez.s.GUILD;
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
        h = k.Om.useStore((e) => e.activeCategoryIndex),
        f = ((e) => {
            let { emojiListRef: t } = e,
                n = (0, U.RQ)((e) => e.searchQuery),
                i = a.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return a.useCallback(
                (e) => {
                    "" !== n ? ((0, U.Ri)(""), k.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        p = (0, g.p)(),
        E = (0, ed.ss)(r, o, o?.guild_id ?? u, c),
        m = a.useMemo(() => (d ? (0, ed.CQ)() : E), [E, d]),
        A = a.useRef(null),
        I = (0, _.bG)([ek.A], () => ek.A.isFocused()),
        T = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion, []),
        S = a.useMemo(
            () =>
                eL().memoize((e, t) => {
                    let n = m[t];
                    if (null != n)
                        return (0, s.jsx)(
                            tu,
                            {
                                activeIndex: h,
                                analyticsContext: p,
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
            [h, p, m, f, I, T],
        ),
        y = a.useMemo(() => [8, 8, 0, 8], []),
        C = a.useCallback(
            (e, t) => {
                let n = m[t];
                if (n.type === ez.s.RECENT) return ts;
                if (n.type === ez.s.GUILD) {
                    let e = m[t + 1];
                    return null != e && e.type !== ez.s.GUILD ? to : ta;
                }
                return tl;
            },
            [m],
        ),
        {
            nonUnicodeCategoryCount: N,
            firstUnicodeCategoryIndex: v,
            firstUnicodeCategoryOffsetTop: R,
            rowCountBySection: O,
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
        D(N >= 7);
    }, [N]);
    let L = a.useCallback(
            (e) => {
                let t = A.current?.getListDimensions();
                null == t || (e + t.height - ti >= R ? D(!1) : D(!0));
            },
            [R],
        ),
        w = a.useCallback(
            (e) => {
                e(v), A.current?.scrollTo(R);
            },
            [R, v],
        ),
        M = a.useCallback(
            (e, t) => {
                let n = m[e];
                if (null == n) return 0;
                let i = b ? tn : 0;
                if (n.type === ez.s.RECENT) return t ? 0 : te;
                if (n.type === ez.s.GUILD) {
                    let n = m[e + 1];
                    return null != n && n.type !== ez.s.GUILD ? (t ? ti + -2 * tr + e8 + i : e8) : t ? i : e8;
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
        store: k.Om,
        categories: m,
        listPadding: y,
        onScroll: L,
        renderCategoryListItem: S,
        renderSection: P,
        rowCount: m.length,
        categoryHeight: C,
        getScrollOffsetForIndex: M,
        rowCountBySection: O,
        children: (e) =>
            N >= 7 &&
            (0, s.jsx)(
                j.D,
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
let th = (e) => {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: t_.iE,
        children: [
            (0, s.jsx)(eW.C, { size: "md", color: "currentColor", className: t_.Kk }),
            (0, s.jsx)("div", {
                className: t_.Qs,
                children: (0, s.jsx)(K.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, s.jsx)(j.D, {
                onClick: () => t(td.i.UNKNOWN),
                children: (0, s.jsx)(H.P, { size: "md", color: "currentColor", className: t_.VN }),
            }),
        ],
    });
};
var tf = n(922139),
    tp = n(459192),
    tE = n(717421),
    tm = n(343032),
    tg = n(131607),
    tA = n(428262),
    tI = n(337889);
let tT = { tension: 750, mass: 2.5, friction: 70 };
function tS(e) {
    let { checked: t, onClick: n } = e,
        i = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        r = eo.default.getCurrentUser(),
        o = null != r && !(0, tA.TW)(r),
        u = o ? [] : [h.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [c, d] = (0, tg.kn)(u),
        [f, p] = a.useState(!1),
        [E, m] = (0, tE.z)(() => ({})),
        g = (0, tf.animated)(tm.i);
    a.useEffect(() => {
        let e = c === h.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (d(td.i.DISMISS), setTimeout(() => p(e), 200));
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
        children: (0, s.jsx)(j.D, {
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
var ty = n(821609),
    tC = n(644508),
    tN = n(824832),
    tv = n(638263);
function tR(e) {
    let { channel: t } = e,
        n = a.useRef(null),
        i = a.useRef(0),
        [r, o] = a.useState(!1),
        [l, u] = a.useState(!1),
        c = l || r,
        d = a.useCallback(
            async (e, n, r) => {
                u(!0),
                    await (0, tC.f)({
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
            (0, s.jsx)(ty.$, {
                text: et.intl.string(et.t.iMJO37),
                variant: "secondary",
                onClick: () => {
                    n.current?.activateUploadDialogue();
                },
                disabled: c,
            }),
            (0, s.jsx)("div", {
                className: tv.F,
                children: (0, s.jsx)(tN.Ay, { ref: n, onChange: d, setLoading: o, disabled: c }, i.current),
            }),
        ],
    });
}
n(667532);
var tO = n(833272),
    tb = n(82495),
    tD = n(260762),
    tL = n(915089),
    tw = n(650583),
    tM = n(46274);
let tP = (0, tL.Ld)(),
    tx = tO.A.convert.fromCodePoint("1f44f"),
    tk = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tU(e) {
    switch (tO.A.convert.toCodePoint(e)) {
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
            l = ef.Ay.getURL(tx + n),
            u = (0, tE.z)({ opacity: 1, from: { opacity: +!t }, delay: r }, "animate-always");
        return (0, s.jsx)(j.D, {
            ...o,
            role: "option",
            "aria-selected": 0 === a,
            onClick: () => i(n),
            className: tM.B6,
            children: (0, s.jsx)(tf.animated.div, {
                "aria-label": tU(n),
                className: tM.g4,
                style: { backgroundImage: `url("${l}")`, ...u },
            }),
        });
    },
    tF = (e) => {
        let { id: t, selectedSurrogate: n, onClick: i } = e,
            r = (0, tD.A)("diversity"),
            o = (0, tE.z)({
                height: (tk + 14) * (eJ.W$.length + 1),
                from: { height: tk + 14 },
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
                        return (0, s.jsx)(tf.animated.div, {
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
            r = ef.Ay.getURL(tx + n),
            [o, u] = a.useState(!1),
            c = (0, tb.A)(null, () => u(!1)),
            d = a.useRef(null);
        return (0, s.jsxs)("div", {
            ref: c,
            className: l()(tM.fx, i),
            children: [
                (0, s.jsx)(j.D, {
                    innerRef: d,
                    className: tM.Dj,
                    onClick: () => {
                        u(!0);
                    },
                    "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tU(n) }),
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
    tj = n(602034),
    tH = n(892547);
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
            d = (0, U.RQ)((e) => e.searchQuery),
            [_, h, f] = k.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tB.x,
            ),
            p = a.useCallback(
                (e) => {
                    k.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        k.Om.setInspectedExpressionPosition(0, 0),
                        k.Om.setSearchPlaceholder(null),
                        (0, U.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            E = a.useCallback(() => {
                p("");
            }, [p]);
        return (
            a.useImperativeHandle(t, () => ({ focus: () => c.current?.focus() })),
            (0, s.jsx)(tH.I, {
                autoFocus: l,
                query: d,
                ref: c,
                placeholder: h ?? u,
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
                    ...(f ? { "aria-activedescendant": (0, tj.Aq)(i, _.columnIndex, _.rowIndex) } : void 0),
                },
            })
        );
    }),
    tW = a.memo(tY);
var tK = n(873426);
let t$ = (e) => {
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
            renderHeader: p,
            showAddEmojiButton: E = !0,
        } = e,
        m = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tW, {
                    emojiListRef: a,
                    gridNavigatorId: ez.lq,
                    onKeyDown: o,
                    ref: d,
                    onFocus: u,
                    autoFocus: c,
                    defaultSearchPlaceholder: (0, ed.wT)(i, h),
                }),
                i === em.EmojiIntention.REACTION ? (0, s.jsx)(tS, { checked: h, onClick: f }) : null,
                n ?? (0, s.jsx)(tV, { searchBarRef: d, className: tK.fx, selectedSurrogate: _ }),
                i !== em.EmojiIntention.NO_CUSTOM_EMOJI && E ? (0, s.jsx)(tR, { channel: t }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: l()(tK.wx, r), children: null != p ? p(m) : m });
};
var tz = n(182922),
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
        h = k.Om.useStore((e) => e.inspectedExpressionPosition),
        f = a.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = h;
            return l[e]?.[t];
        }, [l, h]);
    switch (f?.type) {
        case e3.EMOJI:
            t = f?.emoji;
            break;
        case e3.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        case e3.SOUNDMOJI:
        default:
            t = null;
    }
    let p = (0, _.bG)([Z.A], () => (null !== t && t.type === eQ.i.GUILD ? Z.A.getGuild(t.guildId) : null), [t]),
        E = (0, _.bG)([ek.A], () => ek.A.isFocused()),
        m = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion, []),
        g = es.Sf.useSetting(),
        A = (0, ed.O7)(u, tQ(t) ? t : null),
        I = (0, _.bG)([C.Ay], () => C.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: T } = (0, eE.A)(u, c),
        S = f?.type === e3.EMOJI ? f.subCategory : ez.tm.NONE;
    if (
        (a.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    tQ(t) &&
                    S !== ez.tm.NONE &&
                    (S === ez.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eQ.i.GUILD &&
                        (0, x.mz)(t.guildId, T[0].id),
                    null != h.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: S,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: S === ez.tm.NEWLY_ADDED_EMOJI && P.isNewerThanLastSeen(u, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = tq.A.theme;
    if (tQ(t)) {
        let e = null != t.id ? tZ.Ay.getEmojiURL({ id: t.id, animated: g && t.animated, size: 28 }) : t.url;
        i =
            "" === e
                ? (0, s.jsx)(K.E, {
                      variant: "text-md/normal",
                      className: tX.J_,
                      children: "surrogates" in t ? t.surrogates : null,
                  })
                : (0, s.jsx)("img", { alt: (0, ef.N)(t) ?? "", src: e, className: tX.Zg });
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
        let e = n(619508),
            r = n(404828),
            a = n(600003),
            o = n(318121);
        i = I.has(t.guildId)
            ? (0, s.jsx)("img", { className: tX.Kk, src: (0, B.M)(y) ? a : o, alt: "" })
            : (0, s.jsx)("img", { className: tX.Kk, src: (0, B.M)(y) ? e : r, alt: "" });
    }
    let N =
        null != p ? (0, s.jsx)(eZ.A, { className: tX.__invalid_guildIcon, guild: p, shouldAnimate: !m && E }) : null;
    r =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? I.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, ef.N)(t);
    let v = ((e) => {
        let { inspectedEmoji: t, guild: n } = e,
            i = tQ(t);
        return null != n && i ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: d, guildId: u, intention: c, guild: p });
    return (0, s.jsx)(tz.A, {
        className: o,
        graphicPrimary: i,
        graphicSecondary: N,
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
    nh = n(990078),
    nf = n(442433),
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
    ny = eL().memoize(
        (e) =>
            `${e * em.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eJ.Ay.numDiversitySprites / em.EmojiSprites.DiversityPerRow)}px`,
    ),
    nC = a.memo(function (e) {
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
                              alt: (0, ef.N)(t) ?? "",
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
                              (s = ny(i)),
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
var nN = n(6376);
let nv = (e, t) => `${e}:${t}`,
    nR = a.forwardRef(function (e, t) {
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
                className: l()(nN._X, { [nN.lG]: a, [nN.Lh]: o, [nN.Bx]: u, [g ?? ""]: u, [nN.TV]: d }),
                "data-type": G.g.EMOJI,
                "data-id": i.id,
                "data-name": i.name,
                "data-surrogates": "surrogates" in i ? i.surrogates : null,
                "data-animated": i.animated ? "true" : null,
                ref: t,
                children: (0, s.jsx)(nC, {
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
                    size: p,
                    surrogateCodePoint: E,
                    allowAnimatedEmoji: m,
                    isLocked: c && !A,
                }),
            }),
        });
    });
function nO(e) {
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
            surrogateCodePoint: p,
            selectedItemClassName: E,
            getEmojiItemProps: m,
            isMediumSize: g,
            isLargeSize: A,
            pulseItemKey: I,
            allowAnimatedEmoji: T,
            setPulseItemKey: S,
            messageId: y,
            isBurstReaction: N,
            rowPosition: v,
            inNitroLockedSection: R,
        } = e,
        [O, b] = a.useState(""),
        D = (0, _.bG)([eT.Ay], () => eT.Ay.useReducedMotion),
        L = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(l), [l]),
        w = a.useRef(null),
        { emoji: M, size: P, isDisabled: x, columnIndex: k } = t,
        U = () => {
            d.current || h.current || u(t);
        },
        { ref: G, tabIndex: F, onFocus: V, ...B } = m(k, o) ?? {},
        j =
            O !== nv(k, o)
                ? (0, s.jsx)(nR, {
                      ref: G,
                      emoji: M,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(M),
                      isLargeSize: A,
                      isMediumSize: g,
                      isInspected: r,
                      isDisabled: x,
                      showPulse: I === i,
                      allowAnimatedEmoji: T,
                      onFocus: V ?? U,
                      onMouseMove: U,
                      onClick: (e) => {
                          if (
                              null != w.current &&
                              null != v &&
                              null != y &&
                              !e.shiftKey &&
                              null != M.name &&
                              N &&
                              !D &&
                              T
                          ) {
                              let e = null == M.id ? eJ.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = w.current.getBoundingClientRect();
                              (t.x = v.x + (k + 1) * P), b(nv(k, o)), (0, np.h)(y, e, M.id, t);
                          }
                          ((e) => {
                              if ((e.stopPropagation(), d.current || h.current)) return;
                              let n = e.altKey;
                              n && !C.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) && S(i),
                                  (0, er.sF)(er._2.FAVORITE_EMOJI_TOOLTIP),
                                  c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: (e) => {
                          (0, nf.L3)(e, async () => {
                              let { default: e } = await Promise.all([n.e("4774"), n.e("46132")]).then(
                                  n.bind(n, 233503),
                              );
                              return (t) => (0, s.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: F,
                      columnIndex: k,
                      rowIndex: o,
                      size: P,
                      surrogateCodePoint: p,
                      selectedItemClassName: E,
                      inNitroLockedSection: R,
                  })
                : null;
    return (0, a.createElement)(
        "li",
        { ...B, key: i, ref: w },
        f
            ? (0, s.jsx)(nh.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, nE.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: j,
              })
            : j,
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
            isScrolling: h,
            isUsingKeyboardNavigation: f,
            rowIndex: p,
            allowAnimatedEmoji: E,
            showEmojiFavoriteTooltip: m,
            channelGuildId: g,
            category: A,
            selectedItemClassName: I,
            channelId: T,
            messageId: S,
            isBurstReaction: y,
            inNitroLockedSection: C,
            handleScrollUpOnSectionCollapse: N,
        } = e,
        v = n(619508),
        R = n(404828),
        O = n(600003),
        b = n(318121),
        D = n(443336),
        L = n(258901),
        w = n(135974),
        M = n(8013),
        x = (0, $.Ay)(),
        U = k.Om.getState(),
        [G, F] = a.useState(U.inspectedExpressionPosition),
        [V, j] = (0, nt.A)(null, 300),
        H = a.useRef(null);
    a.useEffect(
        () =>
            k.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => F(e),
            ),
        [],
    ),
        a.useEffect(() => {
            nd.bW.loadIfNecessary();
        }, []);
    let Y = i === ez.as.LARGE,
        W = i === ez.as.MEDIUM,
        z = (e) => {
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
                                  : R
                            : o
                              ? (0, B.M)(x)
                                  ? D
                                  : w
                              : (0, B.M)(x)
                                ? O
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
                            y = G.rowIndex === E && G.columnIndex === m,
                            C = () => {
                                h.current || f.current || u(e);
                            };
                        return (0, a.createElement)(
                            "li",
                            { ...S, key: t },
                            (0, s.jsx)(ne.vN, {
                                children: (0, s.jsx)("button", {
                                    "aria-label": c,
                                    ref: g,
                                    className: l()(nN._X, {
                                        [nN.lG]: Y,
                                        [nN.Lh]: W,
                                        [nN.Bx]: y && !_,
                                        [I ?? ""]: y,
                                        [nN.TV]: V === t,
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
                                    (0, nn.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || N(),
                                    el.default.track(J.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        icon: (0, s.jsx)("img", { className: nN.Kk, src: c, alt: "" }),
                        ariaLabel: _,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case e3.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        a = G.rowIndex === i && G.columnIndex === n;
                    return (0, s.jsx)(
                        nO,
                        {
                            rowIndex: p,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: a,
                            isScrolling: h,
                            isUsingKeyboardNavigation: f,
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
                            setPulseItemKey: j,
                            showEmojiFavoriteTooltip: m,
                            messageId: S,
                            isBurstReaction: y,
                            rowPosition: H?.current?.getBoundingClientRect(),
                            inNitroLockedSection: C,
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
                className: l()(nN.ND, { [nN.HO]: Y, [nN.X$]: W }),
                ref: H,
                children: e.map(z),
            });
    if (A === ez.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nN.ND,
            ref: H,
            children: (0, s.jsx)(nc, { channelId: T, onSelectSoundmoji: o }),
        });
    if (A !== ez.s.TOP_GUILD_EMOJI) return q(t);
    let Z = t.filter(
            (e) =>
                e.subCategory === ez.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eQ.i.GUILD &&
                    !P.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        X = t.filter(
            (e) =>
                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eQ.i.GUILD &&
                P.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === X.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nN.Ng,
              children: [
                  (0, s.jsx)("div", { className: l()(nN.V6, { [nN.$3]: 0 === Z.length }), children: q(Z) }),
                  (0, s.jsxs)("div", {
                      className: nN.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: l()(nN.eE, { [nN.eM]: 1 === X.length, [nN.Wk]: Z.length > 0 }),
                              children: q(X),
                          }),
                          (0, s.jsxs)("div", {
                              className: l()(nN.lD, { [nN.EI]: Y, [nN.qU]: W, [nN.Wk]: Z.length > 0 }),
                              children: [
                                  (0, s.jsx)(n_.A, { foreground: nN.rI }),
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
let nL = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nw = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nM = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nP = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nx = (0, ec.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nk = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nU = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
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
                setUpsellConfigs: h,
                sectionDescriptors: f,
                rowCountBySection: p,
                collapsedSections: E,
                setCollapsedSections: m,
                getEmojiItemProps: A,
                getEmojiRowProps: T,
                rowCount: y,
                isUsingKeyboardNavigation: C,
                channelGuildId: N,
                channelId: v,
                messageId: R,
                isBurstReaction: O,
                listHeaderClassName: b,
            } = e,
            D = a.useRef(!1),
            L = k.Om.useStore((e) => e.activeCategoryIndex),
            w = (0, U.RQ)((e) => e.searchQuery),
            M = es.Sf.useSetting(),
            P = (0, _.bG)([eo.default], () => eo.default.getCurrentUser()),
            x = (0, eu.ki)(P),
            V = (0, t9.St)("emoji_picker_floating_upsell"),
            { location: B } = (0, g.p)(),
            { analyticsLocations: H } = (0, S.Ay)(),
            [Y, W] = a.useState(0),
            [K, $] = a.useState(!1),
            {
                listPadding: z,
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
                        setCollapsedSections: h,
                        getEmojiItemProps: f,
                        getEmojiRowProps: p,
                        isScrolling: E,
                        isUsingKeyboardNavigation: m,
                        allowAnimatedEmoji: A,
                        channelGuildId: I,
                        channelId: T,
                        messageId: S,
                        isBurstReaction: y,
                        listHeaderClassName: C,
                        activeSectionIndex: N,
                        emojiListRef: v,
                    } = e,
                    R = (0, g.p)(),
                    O = a.useRef(J.An1),
                    b = a.useMemo(() => ("" !== n ? tO.A.convert.toCodePoint(n) : ""), [n]),
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
                    M = a.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === e3.SOUNDMOJI ? null : e.type === e3.EMOJI ? (0, ef.N)(e.emoji) : e.name;
                        O.current !== J.An1 && window.cancelAnimationFrame(O.current),
                            (O.current = window.requestAnimationFrame(() => {
                                k.Om.setInspectedExpressionPosition(t, n, G.t.MOUSE_EVENT),
                                    k.Om.setSearchPlaceholder(i),
                                    (O.current = J.An1);
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
                                        getEmojiItemProps: f,
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
                                        isBurstReaction: y,
                                        inNitroLockedSection: a.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: () => {
                                            v.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, r, b, M, o, u, f, p, E, m, A, P, I, T, S, y, v],
                    );
                a.useEffect(() => () => x.cache?.clear?.(), [x]);
                let F = a.useMemo(
                        () =>
                            eL().memoize((e) => {
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
                                let _ = N === e,
                                    h = n.isNitroLocked,
                                    f = h && !_,
                                    p = h && _,
                                    E =
                                        a === ez.s.SOUNDMOJI
                                            ? (0, s.jsx)(j.D, {
                                                  className: nD.f3,
                                                  onClick: () => {
                                                      (0, U.U)(eg.kx.SOUNDBOARD),
                                                          el.default.track(J.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t6.A,
                                    {
                                        className: l()(nD.wx, C, { [nD.RA]: f, [nD.sp]: p }),
                                        icon: u,
                                        isCollapsed: t.has(o),
                                        onClick: () => w(o, i),
                                        trailing: E,
                                        children: c,
                                    },
                                    o,
                                );
                            }),
                        [d, t, w, C, N],
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
                    H = a.useCallback(
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
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || L(e) || D(e) ? 0 : nk),
                        [t, d, L, D],
                    );
                return {
                    listPadding: a.useMemo(() => ["" !== c ? nP : nL, nw, nM, 0], [c]),
                    renderRow: x,
                    renderSection: B,
                    renderSectionHeader: F,
                    renderSectionFooter: H,
                    sectionMarginBottom: W,
                    sectionHeaderHeight: a.useCallback((e) => (d[e].type === ez.s.SEARCH_RESULTS ? 0 : nx), [d]),
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
                sectionDescriptors: f,
                setCollapsedSections: m,
                getEmojiItemProps: A,
                getEmojiRowProps: T,
                isScrolling: D,
                isUsingKeyboardNavigation: C,
                allowAnimatedEmoji: M,
                channelGuildId: N,
                channelId: v,
                messageId: R,
                isBurstReaction: O,
                listHeaderClassName: b,
                activeSectionIndex: Y,
                emojiListRef: o,
            }),
            ea = (0, F.Fk)({
                activeCategoryIndex: L,
                isScrolling: D,
                listRef: o,
                onActiveCategoryIndexChange: (e) => {
                    W(e), "" === w && k.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: w,
                disableForSearch: !1,
            });
        (0, F.FV)({ searchQuery: w, activeCategoryIndex: L, listRef: o });
        let ec = a.useCallback(
                (e) => {
                    ea(e),
                        nF({ emojiListRef: o, sectionDescriptors: f, scrollTop: e, searchQuery: w, setShowUpsell: $ });
                },
                [ea, o, f, w, $],
            ),
            e_ = f.length > 0;
        return (
            a.useEffect(() => {
                K &&
                    el.default.track(J.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: eR.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: B,
                        location_stack: H,
                    });
            }, [B, H, K]),
            a.useEffect(() => {
                "" !== w && $(!1);
            }, [w]),
            (0, s.jsxs)("div", {
                className: nD.AD,
                children: [
                    e_
                        ? (0, s.jsx)(t2.A, {
                              role: "none presentation",
                              className: nD.p_,
                              listPadding: z,
                              onScroll: ec,
                              renderRow: q,
                              renderSection: Z,
                              renderSectionHeader: X,
                              renderSectionFooter: Q,
                              rowCount: y,
                              rowCountBySection: p,
                              rowHeight: u + 2 * nU,
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
                                  ((t = (0, tA.Dd)(eR.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          h({ type: e4.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t4.qD)()), (0, tA.LE)(n, eR.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
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
    nj = n(753390),
    nH = n(404374),
    nY = n(780964),
    nW = n(766075),
    nK = n(166403),
    n$ = n(542863);
let nz = "premiumRetentionEmojiPickerNotice",
    nq = nV.w.get(nz),
    nZ = (e) => {
        let { closePopout: t, channel: n } = e,
            [i, r] = a.useState(!1),
            { subscription: o, hasFetchedSubscriptions: l } = (0, _.cf)([nK.A], () => ({
                subscription: nK.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nK.A.hasFetchedSubscriptions(),
            }));
        if (
            (a.useEffect(() => {
                l || (0, nj.hP)();
            }, [l]),
            null == o || !(0, tA.PK)(o.status) || i)
        )
            return null;
        let u = o.status === J.Dmq.PAST_DUE ? (0, tA.ji)(o).expiresDate : v()(o.currentPeriodStart).add(eR.ph),
            c = `${o.id}:${u.toISOString()}`;
        if (nq === c) return null;
        let d =
            tA.Ay.getPremiumType(o.planId) === eR.PremiumTypes.TIER_0
                ? nH.k0.PREMIUM_TIER_0
                : tA.Ay.getPremiumType(o.planId) === eR.PremiumTypes.TIER_1
                  ? nH.k0.PREMIUM_TIER_1
                  : nH.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)("div", {
            className: n$.g$,
            children: [
                (0, s.jsx)(eI.t, { size: "md", className: n$.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: n$.Xn,
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
                (0, s.jsx)(j.D, {
                    onClick: () => {
                        nV.w.set(nz, c), (nq = c), r(!0);
                    },
                    children: (0, s.jsx)(H.P, { size: "md", color: "currentColor", className: n$.YF }),
                }),
            ],
        });
    };
var nX = n(148361);
let nQ = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    nJ = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    n0 = (e) => e.stopPropagation(),
    n1 = (e, t) => {
        k.Om.setInspectedExpressionPosition(e, t, G.t.GRID_NAVIGATOR_EVENT);
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
                    emojiSize: f = ez.as.MEDIUM,
                    hasTabWrapper: N = !1,
                    onSelectEmoji: v,
                    onSelectSoundmoji: R,
                    containerWidth: O,
                    onNavigateAway: b,
                    persistSearch: D,
                    className: L,
                    headerClassName: w,
                    analyticsOverride: M = n6,
                    searchProps: V = {},
                    wrapper: B,
                    shouldHidePickerActions: j = !1,
                    messageId: H,
                    renderHeader: Y,
                    listHeaderClassName: W,
                    categoryListClassName: K,
                    shouldShowSoundmojiInEmojiPicker: $ = !1,
                    showOnlyUnicode: z = !1,
                    showAddEmojiButton: q,
                } = e,
                { onFocus: X, onKeyDown: Q, autoFocus: ee = !0, accessory: en } = V,
                ec = (0, _.bG)([ea.Ay], () => (null != u ? ea.Ay.getDefaultChannel(u) : null), [u]),
                [e_, eh] = a.useState(null),
                eg = a.useRef(""),
                eI = (0, U.RQ)((e) => e.searchQuery),
                eT = a.useRef(null),
                eS = a.useRef(null),
                ey = a.useRef(null);
            null == o && null != ec && (o = ec);
            let eC = o?.getGuildId() ?? u ?? null,
                [eN, ev] = a.useState(!1),
                eR = eo.default.getCurrentUser(),
                eO = (0, eu.ki)(eR);
            a.useImperativeHandle(t, () => ({ onPickerOpen: e7 }));
            let { location: eD } = (0, g.p)(),
                { page: ew, section: eM, object: eP, openPopoutType: ex, popoutLocation: ek } = M,
                eU = a.useMemo(() => ({ ...eD, section: eM ?? J.JJy.EMOJI_PICKER_POPOUT }), [eD, eM]),
                { analyticsLocations: eG } = (0, S.Ay)(I.A.EMOJI_PICKER),
                { diversitySurrogate: eF } = (0, _.cf)([C.Ay], () => ({ diversitySurrogate: C.Ay.diversitySurrogate })),
                eV = (0, ed.sL)(eI, o, r, z),
                eB = null == eV ? 0 : eV.locked.length + eV.unlocked.length,
                ej = es.iM.useSetting(),
                eH = a.useMemo(() => new Set(ej), [ej]),
                eY = a.useCallback((e) => {
                    es.iM.updateSetting(Array.from(e));
                }, []),
                eW = (0, F.oV)({ gridWrapperRef: eT, containerWidth: O, listPaddingLeft: nJ, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eK,
                    sectionDescriptors: e$,
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
                        h = (0, _.bG)([C.Ay], () => C.Ay.categories),
                        f = a.useMemo(() => (d ? eJ.Ay.getCategories() : h), [h, d]),
                        p = (0, _.bG)([Z.A], () => Z.A.getGuild(t?.getGuildId()), [t]),
                        E = t?.getGuildId() ?? n,
                        m = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(E), [E]),
                        g = (0, ed.XI)(E),
                        A = (0, ed.Fj)(E),
                        I = (0, ed.QZ)(E),
                        { topEmojis: T, newlyAddedEmojis: S } = (0, eE.A)(E, r),
                        y = (0, _.yK)([e2.Ay], () => e2.Ay.getFlattenedGuildIds(), []),
                        N = (0, _.bG)([C.Ay], () => C.Ay.expandedSectionsByGuildIds),
                        v = (0, _.bG)([eo.default], () => eo.default.getCurrentUser()),
                        R = (0, eu.ki)(v),
                        O = (0, e0.k0)(),
                        b = m.getGroupedCustomEmoji(),
                        D = (0, e1.Ym)({ location: "useEmojiGrid" });
                    return a.useMemo(() => {
                        let e = [],
                            n = [],
                            a = [],
                            d = [],
                            _ = 0,
                            h = 0;
                        if (null != m && null != o) {
                            let E = Math.floor(o / (u + 2 * l)),
                                m = 3 * E,
                                C = (s, o) => {
                                    let l = new Map(),
                                        c = i.has(o.sectionId),
                                        [f, p] = eL().partition(s, (e) => {
                                            let n = ef.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: r });
                                            return l.set(e, n), !n;
                                        }),
                                        g = f.concat(p),
                                        A = o.guild,
                                        I = g.length > m && null != A && o.isNitroLocked,
                                        y = I && !N.has(A.id);
                                    y && g.splice(m - 1);
                                    let C = Math.ceil((I ? g.length + 1 : g.length) / E),
                                        v = [];
                                    for (let e = 0; e < C; e++) {
                                        let t = e * E,
                                            n = t + E,
                                            i = g
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
                                        if ((v.push(i), !c)) {
                                            if (I && e === C - 1) {
                                                let t = v[e];
                                                t.push({
                                                    type: 1,
                                                    guildId: A.id,
                                                    name: et.intl.string(et.t.NZI2Zk),
                                                    size: u,
                                                    rowIndex: e,
                                                    columnIndex: t.length,
                                                    visibleRowIndex: _,
                                                    sectionCollapsedToThreeRows: y,
                                                });
                                            }
                                            d.push(i.length), a.push(i), _++;
                                        }
                                        h++;
                                    }
                                    let R = { ...o, count: s.length };
                                    n.push(R), e.push(c ? 0 : C);
                                };
                            if (null != s)
                                0 !== s.unlocked.length &&
                                    C(s.unlocked, {
                                        type: ez.s.SEARCH_RESULTS,
                                        sectionId: ez.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        C(s.locked, {
                                            type: ez.s.PREMIUM_UPSELL,
                                            categoryId: ez.R2.PREMIUM_UPSELL,
                                            sectionId: ez.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !R,
                                        });
                            else {
                                if (D && c) {
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
                                                    !e6.includes(
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
                                                    O ||
                                                    (!R &&
                                                        ef.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: r,
                                                        }));
                                            C(s, {
                                                categoryId: e,
                                                guild: a,
                                                type: ez.s.GUILD,
                                                sectionId: null != a ? a.id : (0, eX.A)(),
                                                count: s.length,
                                                isNitroLocked: o,
                                            });
                                        };
                                        if ((null != p && n(p.id), (0, em.isExternalEmojiAllowedForIntention)(r)))
                                            for (let e of y) (null == p || p.id !== e) && n(e);
                                    } else if (e === ez.R2.TOP_GUILD_EMOJI) {
                                        if (null != p) {
                                            let { allEmojis: t } = (0, ep.W)({ topEmojis: T, newlyAddedEmojis: S });
                                            t.length > 0 &&
                                                C(t, {
                                                    categoryId: e,
                                                    guild: Z.A.getGuild(p.id),
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
                                        C(n, {
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
                                            C(n, {
                                                categoryId: e,
                                                type: ez.s.FAVORITES,
                                                sectionId: ez.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = eJ.Ay.getByCategory(e);
                                        null != t &&
                                            C(t, {
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
                    }, [m, o, u, l, s, i, b, N, t, r, T, S, R, f, p, y, I, A, g, O, D, c]);
                })({
                    gridWidth: eW,
                    fallbackGuildId: eC,
                    channel: o,
                    pickerIntention: r,
                    emojiSearchResults: eV,
                    collapsedSections: eH,
                    emojiPaddingHorizontal: nQ,
                    emojiSpriteSize: f,
                    shouldShowSoundmojiInEmojiPicker: $,
                    showOnlyUnicode: z,
                }),
                { newlyAddedEmojis: e5 } = (0, eE.A)(eC, r);
            (n = a.useRef({ intention: r, isBurstReaction: eN, analyticsObject: eP })),
                a.useEffect(() => {
                    n.current.intention === em.EmojiIntention.REACTION && eA(n.current);
                }, []);
            let e7 = a.useCallback(() => {
                    let e = e5.length > 0 ? e5[0].id : null;
                    (0, x.uV)(eC, e), eA({ intention: r, isBurstReaction: eN, analyticsObject: eP });
                }, [e5, eC, r, eN, eP]),
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
                        u = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                    return a.useCallback(
                        (e, i) => {
                            if (0 === e.type) {
                                let { emoji: a } = e;
                                if (null == a) return;
                                let c = ef.Ay.getEmojiUnavailableReason({ emoji: a, channel: n, intention: t });
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
                    fallbackGuildId: eC,
                    closePopout: c,
                    onSelectEmoji: v,
                    setUpsellConfigs: eh,
                    emojiSelectAnalytics: (e) => {
                        "" !== eI
                            ? (0, ed.Wf)({
                                  emoji: e.emoji,
                                  location: { ...eU, object: J.ZSU.EMOJI },
                                  searchQuery: eI,
                                  intention: r,
                                  messageId: H,
                              })
                            : (0, ed._7)({
                                  emoji: e.emoji,
                                  location: { ...eU, object: eP ?? J.ZSU.EMOJI, ...(null != ew && { page: ew }) },
                                  pickerIntention: r,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                      P.isNewerThanLastSeen(eC, e.emoji.id),
                                  isBurstReaction: eN,
                                  messageId: H,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, ed.C5)({ emoji: e.emoji, location: { ...eU, object: J.ZSU.EMOJI } });
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
                        c = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(l), [l]),
                        h = a.useCallback(
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
                                                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                                P.isNewerThanLastSeen(l, e.emoji.id),
                                        }),
                                        r({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: u });
                                }
                            },
                            [r, l, n, c, t, u],
                        ),
                        {
                            gridDispatch: f,
                            getItemProps: p,
                            getRowProps: m,
                            gridContainerProps: g,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        } = (0, F.Ff)({
                            columnCounts: i,
                            gridNavigatorId: ez.lq,
                            itemGrid: s,
                            itemList: o,
                            onGridNavigatorItemSelect: h,
                            onGridNavigatorPositionChange: n1,
                        });
                    return (
                        a.useEffect(
                            () =>
                                k.Om.subscribe(
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
                            getItemProps: p,
                            getRowProps: m,
                            gridContainerProps: g,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        }
                    );
                })({
                    pickerIntention: r,
                    analyticsLocation: eU,
                    columnCounts: eZ,
                    onSelectEmoji: v,
                    emojiGrid: eq,
                    emojiList: eS,
                    channelGuildId: eC,
                    isBurstReaction: eN,
                });
            ((e, t) => {
                let [n, i] = a.useState(null);
                a.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), i(null));
                }, [t, n]),
                    a.useEffect(() => {
                        i(k.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(O, eS),
                a.useLayoutEffect(() => {
                    ee && ey.current?.focus();
                }, [O, eF, ey, ee]),
                a.useEffect(() => {
                    D || (0, U.Ri)("");
                }, [D]),
                a.useEffect(
                    () => (
                        el.default.track(J.HAw.OPEN_POPOUT, {
                            type: ex ?? "Emoji Picker",
                            guild_id: eC,
                            location: ek,
                            ...(0, T.dI)(o),
                        }),
                        () => {
                            n2.cancel(), n3.cancel();
                        }
                    ),
                    [ex, eC, ek, o],
                ),
                (0, A.Ay)(() => ((0, ed.V$)({ intention: r, location: eU }), (eg.current = eI), k.Om.resetStoreState)),
                a.useEffect(() => () => (0, er.sF)(er._2.FAVORITE_EMOJI_TOOLTIP), []),
                a.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = k.Om.getState().inspectedExpressionPosition;
                    eq[t]?.[e] == null && 0 !== e && k.Om.setInspectedExpressionPosition(0, 0);
                }, [eq]),
                a.useEffect(() => {
                    if (("" === eg.current && "" !== eI && (0, ed.EG)(eU, r), "" !== eI && eg.current !== eI)) {
                        let e = k.Om.getAnalyticsId();
                        0 === eB
                            ? n2({ location: eU, searchQuery: eI, intention: r, loadId: e })
                            : n3({
                                  totalResults: eB,
                                  numEmojiLocked: eV?.locked.length ?? 0,
                                  location: eU,
                                  searchQuery: eI,
                                  intention: r,
                                  loadId: e,
                              });
                    }
                    eg.current = eI;
                }, [eI, eU, eB, eV, r]);
            let ts = B ?? (N ? "div" : p.l),
                ta = null != eW;
            e_?.type === e4.PREMIUM
                ? (i = (0, s.jsx)(nX.default, {
                      onUpsellClicked: e9,
                      emojiDescriptor: e_.emojiDescriptor,
                      pickerIntention: r,
                      analyticsLocation: eU,
                      onClose: () => eh(null),
                      channel: o,
                  }))
                : e_?.type === e4.ROLE_SUBSCRIPTION
                  ? (i = (0, s.jsx)(ei, { onClose: () => eh(null), guildId: e_.guildId, emojiId: e_.emojiId }))
                  : eN && !eO && (i = (0, s.jsx)(eb, { onDismiss: () => ev(!1) }));
            let to = (0, s.jsx)(t$, {
                    channel: o,
                    pickerIntention: r,
                    emojiListRef: eS,
                    onKeyDown: (e) => {
                        ti?.(e), Q?.(e);
                    },
                    searchBarRef: ey,
                    onFocus: X,
                    autoFocus: ee,
                    accessory: en,
                    headerClassName: w,
                    diversitySurrogate: eF,
                    isBurstReaction: eN,
                    onBurstReactionToggle: () => {
                        ev(!eN), ey.current?.focus();
                    },
                    renderHeader: Y,
                    showAddEmojiButton: q,
                }),
                tl = [];
            r === em.EmojiIntention.REACTION && tl.push(h.M.SUPER_REACTIONS_NITRO_MARKETING),
                C.Ay.hasFavoriteEmojis(eC) || tl.push(h.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let tu = (0, s.jsx)(m.A, {
                ...eU,
                children: (0, s.jsxs)(ts, {
                    id: ez.Do,
                    "aria-labelledby": N ? ez.k1 : void 0,
                    role: N ? "tabpanel" : void 0,
                    className: l()(tK.iE, { [tK.r6]: N, [tK.cB]: eN && eO }),
                    children: [
                        N ? null : to,
                        (0, s.jsxs)("div", {
                            className: l()(tK.Fb, L),
                            onScroll: n0,
                            children: [
                                N ? to : null,
                                (0, s.jsxs)("div", {
                                    className: tK.uK,
                                    ref: eT,
                                    children: [
                                        (0, s.jsx)(nZ, { channel: o, closePopout: c }),
                                        (0, s.jsx)(y.Ay, {
                                            contentTypes: tl,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === h.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(th, { markAsDismissed: () => n(td.i.UNKNOWN) });
                                            },
                                        }),
                                        j
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: tK.Iy,
                                                  id: ez.lq,
                                                  ...tn,
                                                  children: ta
                                                      ? (0, s.jsx)(nG, {
                                                            collapsedSections: eH,
                                                            diversitySurrogate: eF,
                                                            emojiGrid: eq,
                                                            emojiListRef: eS,
                                                            emojiSize: f,
                                                            getEmojiItemProps: te,
                                                            getEmojiRowProps: tt,
                                                            gridWidth: eW,
                                                            isUsingKeyboardNavigation: tr,
                                                            onEmojiSelect: (e, t) => {
                                                                e8(e, { ...t, isBurst: eN });
                                                            },
                                                            onSelectSoundmoji: R,
                                                            setUpsellConfigs: eh,
                                                            rowCount: eq.length,
                                                            rowCountBySection: eK,
                                                            sectionDescriptors: e$,
                                                            setCollapsedSections: eY,
                                                            channelGuildId: eC,
                                                            channelId: o?.id,
                                                            messageId: H,
                                                            isBurstReaction: eN,
                                                            listHeaderClassName: W,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(tJ, {
                                    emojiGrid: eq,
                                    className: tK.qV,
                                    guildId: eC,
                                    pickerIntention: r,
                                    channel: o,
                                }),
                                i,
                            ],
                        }),
                        j
                            ? null
                            : (0, s.jsx)(tc, {
                                  className: l()(tK.jv, K),
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
            return (0, s.jsx)(S.f5, { value: eG, children: tu });
        }),
    );
