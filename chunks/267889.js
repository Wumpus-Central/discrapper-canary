"use strict";
n.d(t, { A: () => n6 }), n(321073);
var l,
    i,
    s = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    u = n(649852),
    c = n.n(u),
    d = n(788413),
    h = n(17928),
    m = n(554146),
    f = n(319060),
    p = n(305866),
    g = n(554375),
    x = n(820284),
    A = n(212245),
    C = n(964486),
    E = n(793574),
    I = n(95561),
    y = n(688810),
    v = n(379848),
    S = n(236285),
    N = n(989349),
    _ = n.n(N),
    T = n(228366),
    j = n(935208);
let b = { lastSeenNewlyAddedEmojiIds: {} },
    R = b,
    O = {};
function M() {
    for (let e in O) R.lastSeenNewlyAddedEmojiIds[e] = O[e];
}
class L extends h.Ay.PersistedStore {
    static displayName = "NewlyAddedEmojiStore";
    static persistKey = "NewlyAddedEmojiStore";
    static migrations = [
        (e) => {
            let t = e.lastSeenNewlyAddedEmojiIds,
                n = {};
            for (let e in t) {
                let l = t[e];
                n[e] = { id: l, lastSeen: Date.now(), acknowledged: !1 };
            }
            return { lastSeenNewlyAddedEmojiIds: n };
        },
    ];
    initialize(e) {
        R = e ?? b;
    }
    getState() {
        return R;
    }
    getLastSeenEmojiByGuild(e) {
        return R.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || j.default.compare(t, n.id) > 0) return !0;
        {
            let e = _()(n.lastSeen);
            return _()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let w = new L(T.h, {
    LOGOUT: function () {
        (R = b), (O = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = O[t] ?? R.lastSeenNewlyAddedEmojiIds[t];
        null == l || 0 > j.default.compare(l.id, n)
            ? (O[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (O[t] = { ...l, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = O[t] ?? R.lastSeenNewlyAddedEmojiIds[t];
        (null == l || 0 > j.default.compare(l.id, n)) && (O[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: M,
    CLEAR_CACHES: function () {
        (R = b), M();
    },
    CONNECTION_CLOSED: M,
});
var k = n(451731),
    P = n(850992),
    D = n(151271),
    U = n(60587),
    G = n(887695),
    V = n(562708),
    F = n(462887),
    H = n(939249),
    B = n(789645),
    W = n(696986),
    K = n(297264),
    z = n(834730),
    Z = n(736653),
    Y = n(139286),
    q = n(976860),
    J = n(71393),
    $ = n(384684),
    X = n(985242),
    Q = n(652215),
    ee = n(746080),
    et = n(375708),
    en = n(196404);
function el(e) {
    let t,
        { onClose: l, guildId: i, emojiId: r } = e,
        a = ((t = (0, Z.Ay)()), (0, F.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, y.Ay)(E.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, Y.A)({
        type: V.ImpressionTypes.MODAL,
        name: V.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: i, emoji_id: r ?? null },
    });
    let u = (0, h.bG)([J.A], () => J.A.getGuild(i)),
        c = (0, h.bG)([$.A], () => null != i && $.A.getUserSubscriptionRoles(i).size > 0),
        d = c ? et.intl.string(et.t.GoLM9z) : et.intl.formatToPlainString(et.t["h0u/Hi"], { serverName: u?.name }),
        m = c ? et.intl.string(et.t.PjZ7Db) : et.intl.string(et.t.p8FG1D);
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
                        onClick: l,
                        children: (0, s.jsx)(B.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": et.intl.string(et.t.cpT0Cq),
                            className: en.yP,
                        }),
                    }),
                    (0, s.jsx)("img", { alt: "", src: a, className: en.Tn }),
                    (0, s.jsx)(W.h, { size: 22 }),
                    (0, s.jsx)(K.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: en.wx,
                        children: et.intl.string(et.t.cBjkcx),
                    }),
                    (0, s.jsx)(W.h, { size: 4 }),
                    (0, s.jsx)(z.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: en.h_,
                        children: d,
                    }),
                    (0, s.jsx)(W.h, { size: 24 }),
                    (0, s.jsx)(X.A, {
                        text: m,
                        onClick: function () {
                            (0, q.pX)(Q.BVt.CHANNEL(i, ee.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var ei = n(450510),
    es = n(885386),
    er = n(808728),
    ea = n(287809),
    eo = n(174459),
    eu = n(474090),
    ec = n(240248),
    ed = n(822123),
    eh = n(734057),
    em = n(309010),
    ef = n(690521),
    ep = n(818645),
    eg = n(316884),
    ex = n(307731),
    eA = n(698279);
function eC(e) {
    let { intention: t, containerWidth: n, rowSize: l, isBurstReaction: i, analyticsObject: s } = e,
        r = eh.A.getChannel(em.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === ex.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : S.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        u = null != r ? S.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        c =
            t === ex.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : S.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, c),
        h = null != a ? S.Ay.getGuildEmoji(a) : [],
        m = S.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: f, newlyAddedEmojis: p } = (0, eg.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: x } = (0, ep.W)({
            topEmojis: f,
            newlyAddedEmojis: p,
            rowSize: l,
        });
    I.Ay.trackWithMetadata(
        t === ex.EmojiIntention.REACTION ? Q.HAw.REACTION_PICKER_OPENED : Q.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eA.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: u.length,
            num_animated_expressions_favorites: u.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: u.filter(ef.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: u.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(ef.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: h.length,
            num_custom_expressions_total: m.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: x.length,
            num_animated_expressions_newly_added: x.filter((e) => e.animated).length,
            ...(t === ex.EmojiIntention.REACTION && { is_burst: i }),
            ...(null != s && { location_object: s }),
        },
    );
}
var eE = n(403581),
    eI = n(775602),
    ey = n(607470),
    ev = n(724651),
    eS = n(732280),
    eN = n(725807),
    e_ = n(811611),
    eT = n(202541),
    ej = n(779944);
function eb(e) {
    let { onDismiss: t } = e,
        n = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        l = et.intl.string(et.t.eikz43),
        i = (0, eS.V)(),
        r = (0, ev.O)(),
        a = i?.subscriptionTrial != null || null != r,
        u = { object: Q.ZSU.BUTTON_CTA, section: Q.JJy.SUPER_REACTION_PICKER };
    return (0, s.jsxs)("div", {
        className: ej.iE,
        children: [
            (0, s.jsx)(H.D, {
                onClick: t,
                className: ej.b,
                "aria-label": et.intl.string(et.t.WAI6xu),
                children: (0, s.jsx)(B.P, { size: "md", color: "currentColor" }),
            }),
            (0, s.jsxs)("div", {
                className: ej.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: ej.jo,
                        children: (0, s.jsx)(ey.A, {
                            className: o()(ej.vK, { [ej.Vk]: a }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    a
                        ? (0, s.jsx)(e_.Ay, {
                              type: eT.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: i?.subscriptionTrial?.skuId ?? eT.pe.TIER_2,
                              headingText: et.intl.string(et.t.Wfl5zp),
                              analyticsLocationObject: u,
                              discountOffer: r,
                              trialOffer: i,
                              children: l,
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: ej.wx,
                                      children: [
                                          (0, s.jsx)(eE.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: ej.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, s.jsx)(K.D, {
                                              className: ej.TK,
                                              variant: "heading-xl/bold",
                                              children: et.intl.string(et.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(z.E, { className: ej.Fb, variant: "text-md/normal", children: l }),
                                  (0, s.jsx)("div", {
                                      className: ej.sk,
                                      children: (0, s.jsx)(eN.A, {
                                          subscriptionTier: eT.pe.TIER_2,
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
var eR = n(435558),
    eO = n.n(eR),
    eM = n(837381),
    eL = n(460905),
    ew = n(802019),
    ek = n(407698),
    eP = n(531685),
    eD = n(406810),
    eU = n(27232),
    eG = n(369606),
    eV = n(413249),
    eF = n(141060),
    eH = n(687966),
    eB = n(115979),
    eW = n(524501),
    eK = n(926268),
    ez = n(138134),
    eZ = n(7807),
    eY = n(732139);
let eq = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        l = (function (e) {
            switch (e) {
                case eY.R2.RECENT:
                    return eD.ClockIcon;
                case eY.R2.FAVORITES:
                    return eU.StarIcon;
                case eY.R2.TOP_GUILD_EMOJI:
                    return eG.TrophyIcon;
                case eY.R2.PEOPLE:
                    return eL.n;
                case eY.R2.NATURE:
                    return eV.p;
                case eY.R2.FOOD:
                    return eF.i;
                case eY.R2.ACTIVITY:
                    return eH.GameControllerIcon;
                case eY.R2.TRAVEL:
                    return eB.h;
                case eY.R2.OBJECTS:
                    return eW.D;
                case eY.R2.SYMBOLS:
                    return eK.HeartIcon;
                case eY.R2.FLAGS:
                    return ez.FlagIcon;
                case eY.R2.PREMIUM_UPSELL:
                    return eE.t;
                case eY.R2.SOUNDMOJI:
                    return eZ.J;
                default:
                    return;
            }
        })(t);
    return null == l ? null : (0, s.jsx)(l, { color: "currentColor", ...n });
});
var eJ = n(724511),
    e$ = n(132500),
    eX = n(770335),
    eQ = n(7584),
    e0 = n(526292),
    e1 = n(926972),
    e2 = n(711014),
    e3 =
        (((l = {})[(l.EMOJI = 0)] = "EMOJI"),
        (l[(l.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (l[(l.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        l);
let e5 = [ex.EmojiDisabledReasons.DISALLOW_EXTERNAL, ex.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e8 = (((i = {})[(i.PREMIUM = 0)] = "PREMIUM"), (i[(i.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), i),
    e6 = n(342379);
let e7 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e4 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    e9 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    te = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tt = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tn = (0, ec.xI)(e6.__invalid_unicodeCategoryShortcutHeight),
    tl = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    ti = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ts = e9 + e4 + 2 * tt,
    tr = e7 + e4,
    ta = tr + (tl + 2 * ti),
    to = e9 + te + 2 * tt;
function tu(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: l,
            categories: i,
            category: a,
            handleCategorySelect: u,
            isWindowFocused: c,
            useReducedMotion: d,
        } = e,
        h = (0, eM.rm)(`expression-guild-${n}`),
        m = a.type === eY.s.GUILD ? null : a.id,
        f = t === n,
        p = a.type === eY.s.GUILD ? a.guild : null,
        g = (0, s.jsxs)(H.D, {
            ...h,
            "aria-label": (0, ed.wt)(a, p),
            className: o()({
                [e6.ZG]: null != p,
                [e6.Bj]: null == p,
                [e6.s6]: null == p && f,
                [e6.xg]: a.type === eY.s.RECENT,
            }),
            onClick: () => {
                null != p &&
                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: l?.location,
                        tab: eA.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    u(n);
            },
            children: [
                null != p
                    ? (0, s.jsx)(eJ.A, { guild: p, isSelected: f, shouldAnimate: !d && c, isLocked: a.isNitroLocked })
                    : null,
                null == p && null != m
                    ? (0, s.jsx)(eq, { categoryId: m, className: e6.Yl, height: e9, width: e9, size: "custom" })
                    : null,
            ],
        }),
        x = i[n + 1],
        A = null != x && a.type === eY.s.GUILD && x.type !== eY.s.GUILD;
    return null != p
        ? (0, s.jsxs)(r.Fragment, {
              children: [
                  (0, s.jsx)(ek.Q, { guild: p, children: (0, s.jsx)("div", { children: g }) }),
                  A ? (0, s.jsx)("hr", { className: e6.ny }, "separator") : null,
              ],
          })
        : g;
}
let tc = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: l,
            intention: i,
            channel: a,
            fallbackGuildId: u,
            shouldShowSoundmojiInEmojiPicker: c = !1,
            showOnlyUnicode: d = !1,
        } = e,
        m = P.Om.useStore((e) => e.activeCategoryIndex),
        f = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, D.RQ)((e) => e.searchQuery),
                l = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, D.Ri)(""), P.Om.setActiveCategoryIndex(e)) : l(e);
                },
                [l, n],
            );
        })({ sectionDescriptors: l, emojiListRef: n }),
        p = (0, A.p)(),
        g = (0, ed.ss)(i, a, a?.guild_id ?? u, c),
        x = r.useMemo(() => (d ? (0, ed.CQ)() : g), [g, d]),
        C = r.useRef(null),
        E = (0, h.bG)([eP.A], () => eP.A.isFocused()),
        I = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion, []),
        y = r.useMemo(
            () =>
                eO().memoize((e, t) => {
                    let n = x[t];
                    if (null != n)
                        return (0, s.jsx)(
                            tu,
                            {
                                activeIndex: m,
                                analyticsContext: p,
                                categories: x,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: f,
                                isWindowFocused: E,
                                useReducedMotion: I,
                            },
                            t,
                        );
                }),
            [m, p, x, f, E, I],
        ),
        v = r.useMemo(() => [8, 8, 0, 8], []),
        S = r.useCallback(
            (e, t) => {
                let n = x[t];
                if (n.type === eY.s.RECENT) return ts;
                if (n.type === eY.s.GUILD) {
                    let e = x[t + 1];
                    return null != e && e.type !== eY.s.GUILD ? ta : tr;
                }
                return to;
            },
            [x],
        ),
        {
            nonUnicodeCategoryCount: N,
            firstUnicodeCategoryIndex: _,
            firstUnicodeCategoryOffsetTop: T,
            rowCountBySection: j,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                l = 0;
            x.forEach((i) => {
                i.type === eY.s.GUILD
                    ? ((t += 1), (n += 1))
                    : i.type === eY.s.UNICODE
                      ? (l += 1)
                      : ((e += 1), (t += 1));
            });
            let i = ts + t * tr + ta;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, l],
            };
        }, [x]),
        [b, R] = r.useState(!0);
    r.useLayoutEffect(() => {
        R(N >= 7);
    }, [N]);
    let O = r.useCallback(
            (e) => {
                let t = C.current?.getListDimensions();
                null == t || (e + t.height - tl >= T ? R(!1) : R(!0));
            },
            [T],
        ),
        M = r.useCallback(
            (e) => {
                e(_), C.current?.scrollTo(T);
            },
            [T, _],
        ),
        L = r.useCallback(
            (e, t) => {
                let n = x[e];
                if (null == n) return 0;
                let l = b ? tn : 0;
                if (n.type === eY.s.RECENT) return t ? 0 : te;
                if (n.type === eY.s.GUILD) {
                    let n = x[e + 1];
                    return null != n && n.type !== eY.s.GUILD ? (t ? tl + -2 * ti + e4 + l : e4) : t ? l : e4;
                }
                return t ? e4 + l : 2 * e4;
            },
            [x, b],
        ),
        w = r.useMemo(
            () =>
                function (e, t) {
                    return (0, s.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        k = b ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(ew.A, {
        categoryListRef: C,
        expressionsListRef: n,
        className: t,
        store: P.Om,
        categories: x,
        listPadding: v,
        onScroll: O,
        renderCategoryListItem: y,
        renderSection: w,
        rowCount: x.length,
        categoryHeight: S,
        getScrollOffsetForIndex: L,
        rowCountBySection: j,
        children: (e) =>
            N >= 7 &&
            (0, s.jsx)(
                H.D,
                {
                    "aria-hidden": !b,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: o()(e6.KB, { [e6.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => M(e),
                    children: (0, s.jsx)(eL.n, { size: "custom", color: "currentColor", height: e9, width: e9 }),
                },
                k,
            ),
    });
};
var td = n(49999),
    th = n(860197);
let tm = function (e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)(z.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: th.iE,
        children: [
            (0, s.jsx)(eK.HeartIcon, { size: "md", color: "currentColor", className: th.Kk }),
            (0, s.jsx)("div", {
                className: th.Qs,
                children: (0, s.jsx)(z.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, s.jsx)(H.D, {
                onClick: () => t(td.i.UNKNOWN),
                children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: th.VN }),
            }),
        ],
    });
};
var tf = n(221877),
    tp = n(717421),
    tg = n(343032),
    tx = n(683063),
    tA = n(131607),
    tC = n(158045),
    tE = n(748798);
let tI = { tension: 750, mass: 2.5, friction: 70 };
function ty(e) {
    let { checked: t, onClick: n } = e,
        l = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        i = ea.default.getCurrentUser(),
        a = null != i && !(0, tC.TW)(i),
        u = a ? [] : [m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [c, d] = (0, tA.kn)(u),
        [f, p] = r.useState(!1),
        [g, x] = (0, tp.z)(() => ({})),
        A = (0, tf.animated)(tg.i);
    r.useEffect(() => {
        let e = c === m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (d(td.i.DISMISS), setTimeout(() => p(e), 200));
    }, [c, d]);
    let C = f ? et.intl.string(et.t["Osi/uy"]) : t && !a ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        E = f ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, s.jsx)(tx.u, {
        position: "top",
        title: E,
        body: C,
        asset: (0, s.jsx)(eE.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: f,
        children: (0, s.jsx)(H.D, {
            "aria-label": C,
            "aria-pressed": t,
            onClick: function () {
                x({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tI }),
                    n?.(),
                    p(!1);
            },
            focusProps: { enabled: !1 },
            className: o()(tE.Pf, { [tE.wM]: t }),
            children: (0, s.jsx)(A, {
                style: l ? void 0 : g,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tE.Kk,
            }),
        }),
    });
}
var tv = n(866665),
    tS = n(821609),
    tN = n(644508),
    t_ = n(824832),
    tT = n(267102),
    tj = n(242812);
function tb(e) {
    let { channel: t, closePopout: n } = e,
        l = r.useRef(null),
        i = r.useRef(0),
        [a, o] = r.useState(!1),
        [u, c] = r.useState(!1),
        d = (0, tT.Us)() === Q.BRT.OVERLAY,
        h = u || a,
        m = r.useCallback(
            async (e, l, s) => {
                c(!0),
                    n(),
                    await (0, tN.f)({
                        userImage: { data: e, file: l, image: s },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: Q.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                        },
                    }),
                    (i.current += 1),
                    c(!1);
            },
            [t, n],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tv.m, {
                asContainer: !0,
                text: d ? et.intl.string(et.t.RMbedC) : null,
                children: (0, s.jsx)(tS.$, {
                    text: et.intl.string(et.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        l.current?.activateUploadDialogue();
                    },
                    disabled: h || d,
                }),
            }),
            (0, s.jsx)("div", {
                className: tj.F,
                children: (0, s.jsx)(t_.Ay, { ref: l, onChange: m, setLoading: o, disabled: h }, i.current),
            }),
        ],
    });
}
n(667532);
var tR = n(833272),
    tO = n(82495),
    tM = n(260762),
    tL = n(915089),
    tw = n(650583),
    tk = n(683829);
let tP = (0, tL.Ld)(),
    tD = tR.A.convert.fromCodePoint("1f44f"),
    tU = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tG(e) {
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
let tV = (e) => {
    let { fade: t, surrogate: n, onClick: l, delay: i, index: r } = e,
        a = (0, eM.rm)(`item-${r}`),
        o = ef.Ay.getURL(tD + n),
        u = (0, tp.z)({ opacity: 1, from: { opacity: +!t }, delay: i }, "animate-always");
    return (0, s.jsx)(H.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => l(n),
        className: tk.B6,
        children: (0, s.jsx)(tf.animated.div, {
            "aria-label": tG(n),
            className: tk.g4,
            style: { backgroundImage: `url("${o}")`, ...u },
        }),
    });
};
function tF(e) {
    let { id: t, selectedSurrogate: n, onClick: l } = e,
        i = (0, tM.A)("diversity"),
        a = (0, tp.z)({ height: (tU + 14) * (eQ.W$.length + 1), from: { height: tU + 14 }, config: { duration: 125 } }),
        o = r.useRef(i);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let u = ["", ...eQ.W$];
    return (
        eO().remove(u, (e) => e === n),
        u.unshift(n),
        (0, s.jsx)(eM.hD, {
            navigator: i,
            children: (0, s.jsx)(eM.PR, {
                children: (e) => {
                    let { ref: n, ...i } = e;
                    return (0, s.jsx)(tf.animated.div, {
                        ...i,
                        id: t,
                        ref: n,
                        className: tk.J6,
                        style: a,
                        role: "listbox",
                        children: u.map((e, t) =>
                            (0, s.jsx)(tV, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: l }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let tH = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: l } = e,
        i = ef.Ay.getURL(tD + n),
        [a, u] = r.useState(!1),
        c = (0, tO.A)(null, () => u(!1)),
        d = r.useRef(null);
    return (0, s.jsxs)("div", {
        ref: c,
        className: o()(tk.fx, l),
        children: [
            (0, s.jsx)(H.D, {
                innerRef: d,
                className: tk.Dj,
                onClick: function () {
                    u(!0);
                },
                "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tG(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": tP,
                tabIndex: a ? -1 : 0,
                children: (0, s.jsx)("div", { className: tk.g4, style: { backgroundImage: `url("${i}")` } }),
            }),
            a
                ? (0, s.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === tw.dh.ESCAPE
                              ? (e.stopPropagation(), u(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && u(!1);
                      },
                      children: (0, s.jsx)(tF, {
                          id: tP,
                          selectedSurrogate: n,
                          onClick: function (e) {
                              (0, g.dK)(e), u(!1), t.current?.focus();
                          },
                      }),
                  })
                : null,
        ],
    });
};
var tB = n(462180),
    tW = n(602034),
    tK = n(892547);
let tz = r.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: l,
                onKeyDown: i,
                onFocus: a,
                autoFocus: o,
                defaultSearchPlaceholder: u,
            } = e,
            c = r.useRef(null),
            d = (0, D.RQ)((e) => e.searchQuery),
            [h, m, f] = P.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tB.x,
            ),
            p = r.useCallback(
                (e) => {
                    P.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        P.Om.setInspectedExpressionPosition(0, 0),
                        P.Om.setSearchPlaceholder(null),
                        (0, D.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            g = r.useCallback(() => {
                p("");
            }, [p]);
        return (
            r.useImperativeHandle(t, () => ({ focus: () => c.current?.focus() })),
            (0, s.jsx)(tK.I, {
                autoFocus: o,
                query: d,
                ref: c,
                placeholder: m ?? u,
                onClear: g,
                onKeyDown: function (e) {
                    switch (e.key) {
                        case tw.dh.ARROW_LEFT:
                        case tw.dh.ARROW_RIGHT:
                        case tw.dh.ARROW_UP:
                        case tw.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    i(e);
                },
                onFocus: a,
                onChange: p,
                inputProps: {
                    role: "combobox",
                    "aria-label": et.intl.string(et.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-autocomplete": "list",
                    "aria-controls": l,
                    "aria-expanded": !0,
                    ...(f ? { "aria-activedescendant": (0, tW.Aq)(l, h.columnIndex, h.rowIndex) } : void 0),
                },
            })
        );
    }),
    tZ = r.memo(tz);
var tY = n(381575);
let tq = function (e) {
    let {
            channel: t,
            accessory: n,
            pickerIntention: l,
            headerClassName: i,
            emojiListRef: r,
            onKeyDown: a,
            onFocus: u,
            autoFocus: c,
            searchBarRef: d,
            diversitySurrogate: h,
            isBurstReaction: m,
            onBurstReactionToggle: f,
            renderHeader: p,
            showAddEmojiButton: g = !0,
            closePopout: x,
        } = e,
        A = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tZ, {
                    emojiListRef: r,
                    gridNavigatorId: eY.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: u,
                    autoFocus: c,
                    defaultSearchPlaceholder: (0, ed.wT)(l, m),
                }),
                l === ex.EmojiIntention.REACTION ? (0, s.jsx)(ty, { checked: m, onClick: f }) : null,
                n ?? (0, s.jsx)(tH, { searchBarRef: d, className: tY.fx, selectedSurrogate: h }),
                l !== ex.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, s.jsx)(tb, { channel: t, closePopout: x }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: o()(tY.wx, i), children: null != p ? p(A) : A });
};
var tJ = n(182922),
    t$ = n(363195),
    tX = n(486020),
    tQ = n(977566);
function t0(e) {
    return null != e && "animated" in e;
}
let t1 = r.memo(function (e) {
    let t,
        l,
        { className: i, emojiGrid: a, guildId: o, pickerIntention: u, channel: c } = e,
        d = P.Om.useStore((e) => e.inspectedExpressionPosition),
        m = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (m?.type) {
        case e3.EMOJI:
            t = m?.emoji;
            break;
        case e3.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: m?.guildId, allNamesString: m?.name };
            break;
        case e3.SOUNDMOJI:
        default:
            t = null;
    }
    let f = (0, h.bG)([J.A], () => (null !== t && t.type === eX.i.GUILD ? J.A.getGuild(t.guildId) : null), [t]),
        p = (0, h.bG)([eP.A], () => eP.A.isFocused()),
        g = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion, []),
        x = es.Sf.useSetting(),
        A = (0, ed.O7)(o, t0(t) ? t : null),
        C = (0, h.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: E } = (0, eg.A)(o, u),
        I = m?.type === e3.EMOJI ? m.subCategory : eY.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    t0(t) &&
                    I !== eY.tm.NONE &&
                    (I === eY.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eX.i.GUILD &&
                        (0, k.mz)(t.guildId, E[0].id),
                    null != d.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: I,
                            position: m.columnIndex + 1,
                            newlyAddedHighlight: I === eY.tm.NEWLY_ADDED_EMOJI && w.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = (function (e, t) {
            let { allowAnimatedEmoji: l, sectionsExpandedFromThreeRows: i, theme: r } = t;
            if (t0(e)) {
                let t = null != e.id ? tX.Ay.getEmojiURL({ id: e.id, animated: l && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, s.jsx)(z.E, {
                          variant: "text-md/normal",
                          className: tQ.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, s.jsx)("img", { alt: (0, ef.N)(e) ?? "", src: t, className: tQ.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    l = n(404828),
                    a = n(600003),
                    o = n(318121);
                return i.has(e.guildId)
                    ? (0, s.jsx)("img", { className: tQ.Kk, src: (0, F.M)(r) ? a : o, alt: "" })
                    : (0, s.jsx)("img", { className: tQ.Kk, src: (0, F.M)(r) ? t : l, alt: "" });
            }
        })(t, { allowAnimatedEmoji: x, sectionsExpandedFromThreeRows: C, theme: t$.A.theme }),
        v =
            null != f
                ? (0, s.jsx)(eJ.A, { className: tQ.__invalid_guildIcon, guild: f, shouldAnimate: !g && p })
                : null;
    l =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? C.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, ef.N)(t);
    let N = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            l = t0(t);
        return null != n && l ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: c, guildId: o, intention: u, guild: f });
    return (0, s.jsx)(tJ.A, {
        className: i,
        graphicPrimary: y,
        graphicSecondary: v,
        titlePrimary: l,
        titleSecondary: N,
        isFavorite: A,
        emojiSubCategory: I,
    });
});
var t2 = n(607399),
    t3 = n(765178),
    t5 = n(537652),
    t8 = n(962125),
    t6 = n(240864),
    t7 = n(286509),
    t4 = n(89366),
    t9 = n(202639),
    ne = n(414872),
    nt = n(400669),
    nn = n(909536),
    nl = n(259678),
    ni = n(304072),
    ns = n(189551),
    nr = n(289873),
    na = n(796774),
    no = n(209932),
    nu = n(805945),
    nc = n(576705);
n(980504);
var nd = n(818348),
    nh = n(821425);
let nm = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        { channelId: a, onSelectSoundmoji: o } = e,
        u = (0, h.bG)([no.A], () => !no.A.isFetching() && !no.A.hasFetchedAllSounds(), []),
        c = (0, h.bG)([eh.A], () => eh.A.getChannel(a)),
        d =
            ((t = (0, h.bG)([ea.default], () => tC.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, h.bG)([no.A], () => no.A.getSoundsForGuild("0"))),
            (l = (0, h.yK)([J.A], () => J.A.getGuildIds())),
            (i = r.useMemo(() => nc.A.can(nd.xB.USE_EXTERNAL_SOUNDS, c), [c])),
            r.useMemo(() => {
                let e = [];
                if (t && i) {
                    let t = l.flatMap((e) => no.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eO().sampleSize(t, 4));
                } else if (c?.guild_id != null) {
                    let t = no.A.getSoundsForGuild(c?.guild_id)?.filter((e) => e.available);
                    e.push(...eO().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eO().sampleSize(n ?? [], 4 - e.length)), e;
            }, [i, c?.guild_id, n, l, t]));
    return (r.useEffect(() => {
        (0, na.E7)();
    }, [u]),
    0 === d.length)
        ? (0, s.jsx)(nr.y, {})
        : (0, s.jsx)("div", {
              className: nh.q,
              children: d.map((e, t) =>
                  (0, s.jsx)(
                      nu.Ay,
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
var nf = n(594061),
    np = n(771104),
    ng = n(442433),
    nx = n(147421),
    nA = n(723702),
    nC = n(140735),
    nE = n(194261),
    nI = n(703413);
let ny = (e) => {
    let { src: t, alt: n, size: l, "aria-label": i, className: a } = e,
        u = r.useRef(null),
        c = r.useRef(!1),
        d = c.current ? nI.S : nI.Y;
    return (0, s.jsx)("img", {
        className: o()(d, a),
        alt: n,
        src: t,
        ref: u,
        "aria-label": i,
        style: { backgroundSize: l, height: l, width: l },
        onLoad: c.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != u.current &&
                          ((c.current = !0), u.current.classList.remove(nI.Y), u.current.classList.add(nI.S));
                  });
              },
    });
};
var nv = n(955388);
let nS = eO().memoize(
        (e) =>
            `${e * ex.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(eQ.Ay.numNonDiversitySprites / ex.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nN = eO().memoize(
        (e) =>
            `${e * ex.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eQ.Ay.numDiversitySprites / ex.EmojiSprites.DiversityPerRow)}px`,
    ),
    n_ = r.memo(function (e) {
        let { emoji: t, size: l, surrogateCodePoint: i, allowAnimatedEmoji: a, "aria-label": u, isLocked: c } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : tX.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: ex.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(ny, {
                              className: nv.N1,
                              "aria-label": u,
                              src: e,
                              size: l,
                              alt: (0, ef.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: o()(nv.xA, { [nv.N1]: c }),
                    style: (function (e, t, l) {
                        let i, s, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((i = n(12303)(`./spritesheet-${t}-${l}.png.js`).default),
                              (s = nN(l)),
                              (r = ex.EmojiSprites.DiversityPerRow))
                            : ((i = n(145519)(`./spritesheet-emoji-${l}.png.js`).default),
                              (s = nS(l)),
                              (r = ex.EmojiSprites.NonDiversityPerRow));
                        let o = (-a % r) * l,
                            u = -Math.floor(a / r) * l;
                        return {
                            backgroundImage: `url('${i}')`,
                            backgroundPosition: `${o}px ${u}px`,
                            backgroundSize: s,
                            height: l,
                            width: l,
                        };
                    })(t, i, l),
                    children: (0, s.jsx)(nC.A, { children: u }),
                });
            })();
        return (0, s.jsxs)(r.Fragment, {
            children: [
                d,
                c
                    ? (0, s.jsx)("div", {
                          className: nv.iD,
                          children: (0, s.jsx)(nE.LockIcon, { size: "xs", color: "currentColor", className: nv.fi }),
                      })
                    : null,
            ],
        });
    });
var nT = n(537911);
let nj = r.forwardRef(function (e, t) {
    let n,
        {
            emoji: l,
            isFavorite: i,
            isLargeSize: r,
            isMediumSize: a,
            isInspected: u,
            isDisabled: c,
            showPulse: d,
            columnIndex: m,
            rowIndex: f,
            size: p,
            surrogateCodePoint: g,
            allowAnimatedEmoji: x,
            selectedItemClassName: A,
            inNitroLockedSection: C,
            ...E
        } = e,
        I = (0, h.bG)([J.A], () => (l.type === eX.i.GUILD ? J.A.getGuild(l.guildId) : void 0), [l]);
    return (0, s.jsx)(nl.vN, {
        children: (0, s.jsx)("button", {
            ...E,
            className: o()(nT._X, { [nT.lG]: r, [nT.Lh]: a, [nT.Bx]: u, [A ?? ""]: u, [nT.TV]: d }),
            "data-type": U.g.EMOJI,
            "data-id": l.id,
            "data-name": l.name,
            "data-surrogates": "surrogates" in l ? l.surrogates : null,
            "data-animated": l.animated ? "true" : null,
            ref: t,
            children: (0, s.jsx)(n_, {
                "aria-label":
                    ((n = (0, ef.N)(l)),
                    (I?.name != null &&
                        (n = et.intl.formatToPlainString(et.t["nXv4/B"], { names: n, guildName: I.name })),
                    i)
                        ? et.intl.formatToPlainString(et.t["9FI9Z0"], { names: n })
                        : n),
                columnIndex: m,
                rowIndex: f,
                emoji: l,
                size: p,
                surrogateCodePoint: g,
                allowAnimatedEmoji: x,
                isLocked: c && !C,
            }),
        }),
    });
});
function nb(e) {
    let {
            descriptor: t,
            emojiItemKey: l,
            isInspected: i,
            rowIndex: a,
            channelGuildId: o,
            onInspect: u,
            onSelect: c,
            isScrolling: d,
            isUsingKeyboardNavigation: m,
            showEmojiFavoriteTooltip: f,
            surrogateCodePoint: p,
            selectedItemClassName: g,
            getEmojiItemProps: x,
            isMediumSize: A,
            isLargeSize: C,
            pulseItemKey: E,
            allowAnimatedEmoji: I,
            setPulseItemKey: y,
            messageId: v,
            isBurstReaction: N,
            rowPosition: _,
            inNitroLockedSection: T,
        } = e,
        [j, b] = r.useState(""),
        R = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        O = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: L, size: w, isDisabled: k, columnIndex: P } = t;
    function D() {
        d.current || m.current || u(t);
    }
    let { ref: U, tabIndex: G, onFocus: V, ...F } = x(P, a) ?? {},
        H =
            j !== `${P}:${a}`
                ? (0, s.jsx)(nj, {
                      ref: U,
                      emoji: L,
                      isFavorite: O.isFavoriteEmojiWithoutFetchingLatest(L),
                      isLargeSize: C,
                      isMediumSize: A,
                      isInspected: i,
                      isDisabled: k,
                      showPulse: E === l,
                      allowAnimatedEmoji: I,
                      onFocus: V ?? D,
                      onMouseMove: D,
                      onClick: (e) => {
                          if (
                              null != M.current &&
                              null != _ &&
                              null != v &&
                              !e.shiftKey &&
                              null != L.name &&
                              N &&
                              !R &&
                              I
                          ) {
                              let e = null == L.id ? eQ.Ay.convertNameToSurrogate(L.name) : L.name,
                                  t = M.current.getBoundingClientRect();
                              (t.x = _.x + (P + 1) * w), b(`${P}:${a}`), (0, nx.h)(v, e, L.id, t);
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || m.current)) return;
                              let n = e.altKey;
                              n && !S.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(L) && y(l),
                                  (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP),
                                  c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, ng.L3)(e, async () => {
                              let { default: e } = await Promise.all([n.e("904774"), n.e("446132")]).then(
                                  n.bind(n, 233503),
                              );
                              return (t) => (0, s.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: G,
                      columnIndex: P,
                      rowIndex: a,
                      size: w,
                      surrogateCodePoint: p,
                      selectedItemClassName: g,
                      inNitroLockedSection: T,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...F, key: l, ref: M },
        f
            ? (0, s.jsx)(tv.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, nA.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let nR = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: l,
            onSelect: i,
            onSelectSoundmoji: a,
            onInspect: u,
            surrogateCodePoint: c,
            getEmojiItemProps: d,
            getEmojiRowProps: h,
            isScrolling: m,
            isUsingKeyboardNavigation: f,
            rowIndex: p,
            allowAnimatedEmoji: g,
            showEmojiFavoriteTooltip: x,
            channelGuildId: A,
            category: C,
            selectedItemClassName: E,
            channelId: I,
            messageId: y,
            isBurstReaction: v,
            inNitroLockedSection: S,
            handleScrollUpOnSectionCollapse: N,
        } = e,
        _ = n(619508),
        T = n(404828),
        j = n(600003),
        b = n(318121),
        R = n(443336),
        O = n(258901),
        M = n(135974),
        L = n(8013),
        k = (0, Z.Ay)(),
        D = P.Om.getState(),
        [U, G] = r.useState(D.inspectedExpressionPosition),
        [V, H] = (0, ni.A)(null, 300),
        B = r.useRef(null);
    r.useEffect(
        () =>
            P.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => G(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nf.bW.loadIfNecessary();
        }, []);
    let W = l === eY.as.LARGE,
        K = l === eY.as.MEDIUM;
    function Y(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case e3.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: l } = e,
                    a = U.rowIndex === n && U.columnIndex === l,
                    c = e.sectionCollapsedToThreeRows
                        ? a
                            ? (0, F.M)(k)
                                ? O
                                : L
                            : (0, F.M)(k)
                              ? _
                              : T
                        : a
                          ? (0, F.M)(k)
                              ? R
                              : M
                          : (0, F.M)(k)
                            ? j
                            : b,
                    h = et.intl.string(e.sectionCollapsedToThreeRows ? et.t.NZI2Zk : et.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: l,
                            handleSelect: i,
                            icon: a,
                            ariaLabel: c,
                            shouldShowRoundHighlight: h,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: g, columnIndex: x } = e,
                        { ref: A, tabIndex: C, onFocus: I, ...y } = d(x, p) ?? {},
                        v = U.rowIndex === g && U.columnIndex === x;
                    function S() {
                        m.current || f.current || u(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...y, key: t },
                        (0, s.jsx)(nl.vN, {
                            children: (0, s.jsx)("button", {
                                "aria-label": c,
                                ref: A,
                                className: o()(nT._X, {
                                    [nT.lG]: W,
                                    [nT.Lh]: K,
                                    [nT.Bx]: v && !h,
                                    [E ?? ""]: v,
                                    [nT.TV]: V === t,
                                }),
                                onFocus: I ?? S,
                                onMouseOver: S,
                                onMouseEnter: n,
                                onMouseLeave: l,
                                onClick: i,
                                tabIndex: C,
                                children: a,
                            }),
                        }),
                    );
                })({
                    handleSelect: function (t) {
                        e.type !== e3.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (i(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, ns.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || N(),
                                eo.default.track(Q.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, s.jsx)("img", { className: nT.Kk, src: c, alt: "" }),
                    ariaLabel: h,
                    shouldShowRoundHighlight: !0,
                });
            }
            case e3.EMOJI: {
                let { columnIndex: n, visibleRowIndex: l } = e,
                    r = U.rowIndex === l && U.columnIndex === n;
                return (0, s.jsx)(
                    nb,
                    {
                        rowIndex: p,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: r,
                        isScrolling: m,
                        isUsingKeyboardNavigation: f,
                        surrogateCodePoint: c,
                        allowAnimatedEmoji: g,
                        selectedItemClassName: E,
                        onSelect: i,
                        onInspect: u,
                        channelGuildId: A,
                        getEmojiItemProps: d,
                        isMediumSize: K,
                        isLargeSize: W,
                        pulseItemKey: V,
                        setPulseItemKey: H,
                        showEmojiFavoriteTooltip: x,
                        messageId: y,
                        isBurstReaction: v,
                        rowPosition: B?.current?.getBoundingClientRect(),
                        inNitroLockedSection: S,
                    },
                    t,
                );
            }
            case e3.SOUNDMOJI:
                return;
        }
    }
    function q(e) {
        return (0, s.jsx)("ul", {
            ...h(p),
            className: o()(nT.ND, { [nT.HO]: W, [nT.X$]: K }),
            ref: B,
            children: e.map(Y),
        });
    }
    if (C === eY.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nT.ND,
            ref: B,
            children: (0, s.jsx)(nm, { channelId: I, onSelectSoundmoji: a }),
        });
    if (C !== eY.s.TOP_GUILD_EMOJI) return q(t);
    let J = t.filter(
            (e) =>
                e.subCategory === eY.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eX.i.GUILD &&
                    !w.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        $ = t.filter(
            (e) =>
                e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eX.i.GUILD &&
                w.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === $.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nT.Ng,
              children: [
                  (0, s.jsx)("div", { className: o()(nT.V6, { [nT.$3]: 0 === J.length }), children: q(J) }),
                  (0, s.jsxs)("div", {
                      className: nT.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(nT.eE, { [nT.eM]: 1 === $.length, [nT.Wk]: J.length > 0 }),
                              children: q($),
                          }),
                          (0, s.jsxs)("div", {
                              className: o()(nT.lD, { [nT.EI]: W, [nT.qU]: K, [nT.Wk]: J.length > 0 }),
                              children: [
                                  (0, s.jsx)(np.A, { foreground: nT.rI }),
                                  (0, s.jsx)(z.E, {
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
var nO = n(618723);
let nM = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nL = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nw = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nk = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nP = (0, ec.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nD = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nU = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nG = r.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: l,
                emojiGrid: i,
                emojiListRef: a,
                emojiSize: u,
                onEmojiSelect: c,
                onSelectSoundmoji: d,
                setUpsellConfigs: m,
                sectionDescriptors: f,
                rowCountBySection: p,
                collapsedSections: g,
                setCollapsedSections: x,
                getEmojiItemProps: C,
                getEmojiRowProps: I,
                rowCount: v,
                isUsingKeyboardNavigation: S,
                channelGuildId: N,
                channelId: _,
                messageId: T,
                isBurstReaction: j,
                listHeaderClassName: b,
            } = e,
            R = r.useRef(!1),
            O = P.Om.useStore((e) => e.activeCategoryIndex),
            M = (0, D.RQ)((e) => e.searchQuery),
            L = es.Sf.useSetting(),
            w = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
            k = (0, eu.ki)(w),
            V = (0, nn.St)("emoji_picker_floating_upsell"),
            { location: F } = (0, A.p)(),
            { analyticsLocations: B } = (0, y.Ay)(),
            [W, K] = r.useState(0),
            [Z, Y] = r.useState(!1),
            {
                listPadding: q,
                renderRow: J,
                renderSection: $,
                renderSectionHeader: X,
                renderSectionFooter: ee,
                sectionMarginBottom: en,
                sectionHeaderHeight: el,
                sectionFooterHeight: er,
            } = (function (e) {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: l,
                        emojiSize: i,
                        onEmojiSelect: a,
                        onSelectSoundmoji: u,
                        searchQuery: c,
                        sectionDescriptors: d,
                        setCollapsedSections: m,
                        getEmojiItemProps: f,
                        getEmojiRowProps: p,
                        isScrolling: g,
                        isUsingKeyboardNavigation: x,
                        allowAnimatedEmoji: C,
                        channelGuildId: E,
                        channelId: I,
                        messageId: y,
                        isBurstReaction: v,
                        listHeaderClassName: S,
                        activeSectionIndex: N,
                        emojiListRef: _,
                    } = e,
                    T = (0, A.p)(),
                    j = r.useRef(Q.An1),
                    b = r.useMemo(() => ("" !== n ? tR.A.convert.toCodePoint(n) : ""), [n]),
                    R = r.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    O = r.useCallback(
                        (e) => {
                            if (e >= d.length - 1) return !1;
                            let t = d[e],
                                n = d[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [d],
                    ),
                    M = r.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                l = new Set(t),
                                i = t.has(e);
                            i ? l.delete(e) : l.add(e),
                                null != n &&
                                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: eA.kx.EMOJI,
                                        collapsed: !i,
                                        guild_id: n.id,
                                    }),
                                e === eY.R2.SOUNDMOJI &&
                                    eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                                m(l);
                        },
                        [T, t, m],
                    ),
                    L = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            l = e.type === e3.SOUNDMOJI ? null : e.type === e3.EMOJI ? (0, ef.N)(e.emoji) : e.name;
                        j.current !== Q.An1 && window.cancelAnimationFrame(j.current),
                            (j.current = window.requestAnimationFrame(() => {
                                P.Om.setInspectedExpressionPosition(t, n, U.t.MOUSE_EVENT),
                                    P.Om.setSearchPlaceholder(l),
                                    (j.current = Q.An1);
                            }));
                    }, []),
                    w = (0, h.bG)([ei.HP], () => ei.HP.hasHotspot(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                    k = r.useMemo(
                        () =>
                            eO().memoize((e, t) => {
                                let n = l[e],
                                    r = d[t.sectionIndex];
                                return (0, s.jsx)(
                                    nR,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: i,
                                        surrogateCodePoint: b,
                                        onInspect: L,
                                        onSelect: a,
                                        onSelectSoundmoji: u,
                                        getEmojiItemProps: f,
                                        getEmojiRowProps: p,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: x,
                                        rowIndex: e,
                                        allowAnimatedEmoji: C,
                                        showEmojiFavoriteTooltip: w,
                                        channelGuildId: E,
                                        category: r.sectionId,
                                        selectedItemClassName: nO.__invalid_selectedItem,
                                        channelId: I,
                                        messageId: y,
                                        isBurstReaction: v,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            _.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [l, d, i, b, L, a, u, f, p, g, x, C, w, E, I, y, v, _],
                    );
                r.useEffect(() => () => k.cache?.clear?.(), [k]);
                let G = r.useMemo(
                        () =>
                            eO().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: l, categoryId: i, type: r, sectionId: a } = n;
                                if (r === eY.s.SEARCH_RESULTS) return;
                                let u =
                                        r === eY.s.GUILD
                                            ? null != l
                                                ? (0, s.jsx)(eJ.A, { guild: l, height: 16, width: 16 })
                                                : null
                                            : null != i
                                              ? (0, s.jsx)(eq, { categoryId: i, height: 16, width: 16, size: "custom" })
                                              : null,
                                    c = l?.name;
                                null != i && (c = (0, ed.Nu)(i, l?.name));
                                let h = N === e,
                                    m = n.isNitroLocked,
                                    f = m && !h,
                                    p = m && h,
                                    g =
                                        r === eY.s.SOUNDMOJI
                                            ? (0, s.jsx)(H.D, {
                                                  className: nO.f3,
                                                  onClick: () => {
                                                      (0, D.U)(eA.kx.SOUNDBOARD),
                                                          eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t7.A,
                                    {
                                        className: o()(nO.wx, S, { [nO.RA]: f, [nO.sp]: p }),
                                        icon: u,
                                        isCollapsed: t.has(a),
                                        onClick: () => M(a, l),
                                        trailing: g,
                                        children: c,
                                    },
                                    a,
                                );
                            }),
                        [d, t, M, S, N],
                    ),
                    V = (0, e0.k0)(),
                    F = r.useCallback(
                        (e, n) => {
                            let l = d[e],
                                i = O(e),
                                r = R(e);
                            return (0, s.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nO.Wy, {
                                        [nO.YD]: e === d.length - 1,
                                        [nO.jl]: t.has(l.sectionId),
                                        [nO.cW]: l.isNitroLocked,
                                        [nO.T5]: i || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, O, R],
                    ),
                    B = r.useCallback(
                        (e) =>
                            O(e)
                                ? V
                                    ? (0, s.jsx)(ne.ap, {})
                                    : (0, s.jsx)(ne.Ay, {})
                                : R(e)
                                  ? (0, s.jsx)("div", { className: nO.pQ })
                                  : null,
                        [O, R, V],
                    ),
                    W = r.useCallback((e) => (O(e) ? 41 : 33 * !!R(e)), [O, R]),
                    K = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || O(e) || R(e) ? 0 : nD),
                        [t, d, O, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== c ? nk : nM, nL, nw, 0], [c]),
                    renderRow: k,
                    renderSection: F,
                    renderSectionHeader: G,
                    renderSectionFooter: B,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === eY.s.SEARCH_RESULTS ? 0 : nP), [d]),
                    sectionFooterHeight: W,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: l,
                emojiGrid: i,
                emojiSize: u,
                onEmojiSelect: c,
                onSelectSoundmoji: d,
                searchQuery: M,
                sectionDescriptors: f,
                setCollapsedSections: x,
                getEmojiItemProps: C,
                getEmojiRowProps: I,
                isScrolling: R,
                isUsingKeyboardNavigation: S,
                allowAnimatedEmoji: L,
                channelGuildId: N,
                channelId: _,
                messageId: T,
                isBurstReaction: j,
                listHeaderClassName: b,
                activeSectionIndex: W,
                emojiListRef: a,
            }),
            ec = (0, G.Fk)({
                activeCategoryIndex: O,
                isScrolling: R,
                listRef: a,
                onActiveCategoryIndexChange: function (e) {
                    K(e), "" === M && P.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: M,
                disableForSearch: !1,
            });
        (0, G.FV)({ searchQuery: M, activeCategoryIndex: O, listRef: a });
        let eh = r.useCallback(
                (e) => {
                    ec(e),
                        nV({ emojiListRef: a, sectionDescriptors: f, scrollTop: e, searchQuery: M, setShowUpsell: Y });
                },
                [ec, a, f, M, Y],
            ),
            em = f.length > 0;
        r.useEffect(() => {
            Z &&
                eo.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eT.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: F,
                    location_stack: B,
                });
        }, [F, B, Z]),
            r.useEffect(() => {
                "" !== M && Y(!1);
            }, [M]);
        let ep = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(ep.current),
                    (ep.current = setTimeout(() => {
                        em
                            ? t3.O.announce(et.intl.string(et.t.uZ4F2O), "polite")
                            : t3.O.announce(et.intl.string(et.t.IxxiKF), "assertive"),
                            (ep.current = null);
                    }, 200)),
                    () => {
                        clearTimeout(ep.current);
                    }
                ),
                [em, M],
            ),
            (0, s.jsxs)("div", {
                className: nO.AD,
                children: [
                    em
                        ? (0, s.jsx)(t8.A, {
                              role: "none presentation",
                              className: nO.p_,
                              listPadding: q,
                              onScroll: eh,
                              renderRow: J,
                              renderSection: $,
                              renderSectionHeader: X,
                              renderSectionFooter: ee,
                              rowCount: v,
                              rowCountBySection: p,
                              rowHeight: u + 2 * nU,
                              sectionHeaderHeight: el,
                              sectionMarginBottom: en,
                              sectionFooterHeight: er,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, s.jsx)(t5.A, {
                              message: (0, s.jsx)(z.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: et.intl.string(et.t.IxxiKF),
                              }),
                              className: nO.BZ,
                          }),
                    k || t2.Fr
                        ? null
                        : (0, s.jsx)(t9.d, {
                              showUpsell: Z,
                              text:
                                  ((t = (0, tC.Dd)(eT.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          m({ type: e8.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t4.qD)()), (0, tC.LE)(n, eT.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: Q.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: V
                                  ? (0, s.jsx)(nt.l, {
                                        size: "sm",
                                        className: nO.ij,
                                        location: E.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    nV = eO().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: l, searchQuery: i, setShowUpsell: s } = e;
            s(
                (0, t6.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: l })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nF = n(506774),
    nH = n(349288),
    nB = n(277984),
    nW = n(404374),
    nK = n(780964),
    nz = n(766075),
    nZ = n(166403),
    nY = n(506150);
let nq = "premiumRetentionEmojiPickerNotice",
    nJ = nF.w.get(nq),
    n$ = function (e) {
        let { closePopout: t, channel: n } = e,
            [l, i] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, h.cf)([nZ.A], () => ({
                subscription: nZ.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nZ.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, nB.hP)();
            }, [o]),
            null == a || !(0, tC.PK)(a.status) || l)
        )
            return null;
        let u = a.status === Q.Dmq.PAST_DUE ? (0, tC.ji)(a).expiresDate : _()(a.currentPeriodStart).add(eT.ph),
            c = `${a.id}:${u.toISOString()}`;
        if (nJ === c) return null;
        let d =
            tC.Ay.getPremiumType(a.planId) === eT.PremiumTypes.TIER_0
                ? nW.k0.PREMIUM_TIER_0
                : tC.Ay.getPremiumType(a.planId) === eT.PremiumTypes.TIER_1
                  ? nW.k0.PREMIUM_TIER_1
                  : nW.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)(z.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: nY.g$,
            children: [
                (0, s.jsx)(eE.t, { size: "md", className: nY.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: nY.Xn,
                    children: [
                        (0, s.jsx)(z.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: tC.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: u.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nH.Anchor, {
                                onClick: () => {
                                    (0, ed.xf)(n), t(), (0, nz.openUserSettings)(nK.X.NITRO_PANEL);
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(H.D, {
                    onClick: () => {
                        nF.w.set(nq, c), (nJ = c), i(!0);
                    },
                    children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: nY.YF }),
                }),
            ],
        });
    };
var nX = n(148361);
let nQ = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n0 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function n1(e) {
    return e.stopPropagation();
}
function n2(e, t) {
    P.Om.setInspectedExpressionPosition(e, t, U.t.GRID_NAVIGATOR_EVENT);
}
let n3 = c()(ed.bo, 200),
    n5 = c()(ed.Wi, 200),
    n8 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n6 = r.memo(
        r.forwardRef(function (e, t) {
            let n,
                l,
                {
                    pickerIntention: i,
                    channel: a,
                    guildId: u,
                    closePopout: c,
                    emojiSize: f = eY.as.MEDIUM,
                    hasTabWrapper: N = !1,
                    onSelectEmoji: _,
                    onSelectSoundmoji: T,
                    containerWidth: j,
                    onNavigateAway: b,
                    persistSearch: R,
                    className: O,
                    headerClassName: M,
                    analyticsOverride: L = n8,
                    searchProps: V = {},
                    wrapper: F,
                    shouldHidePickerActions: H = !1,
                    messageId: B,
                    renderHeader: W,
                    listHeaderClassName: K,
                    categoryListClassName: z,
                    shouldShowSoundmojiInEmojiPicker: Z = !1,
                    showOnlyUnicode: Y = !1,
                    showAddEmojiButton: q,
                } = e,
                { onFocus: $, onKeyDown: X, autoFocus: ee = !0, accessory: en } = V,
                ec = (0, h.bG)([er.Ay], () => (null != u ? er.Ay.getDefaultChannel(u) : null), [u]),
                [eh, em] = r.useState(null),
                eA = r.useRef(""),
                eE = (0, D.RQ)((e) => e.searchQuery),
                eI = r.useRef(null),
                ey = r.useRef(null),
                ev = r.useRef(null);
            null == a && null != ec && (a = ec);
            let eS = a?.getGuildId() ?? u ?? null,
                [eN, e_] = r.useState(!1),
                eT = ea.default.getCurrentUser(),
                ej = (0, eu.ki)(eT);
            r.useImperativeHandle(t, () => ({ onPickerOpen: e7 }));
            let { location: eR } = (0, A.p)(),
                { page: eM, section: eL, object: ew, openPopoutType: ek, popoutLocation: eP } = L,
                eD = r.useMemo(() => ({ ...eR, section: eL ?? Q.JJy.EMOJI_PICKER_POPOUT }), [eR, eL]),
                { analyticsLocations: eU } = (0, y.Ay)(E.A.EMOJI_PICKER),
                { diversitySurrogate: eG } = (0, h.cf)([S.Ay], () => ({ diversitySurrogate: S.Ay.diversitySurrogate })),
                eV = (0, ed.sL)(eE, a, i, Y),
                eF = null == eV ? 0 : eV.locked.length + eV.unlocked.length,
                eH = es.iM.useSetting(),
                eB = r.useMemo(() => new Set(eH), [eH]),
                eW = r.useCallback((e) => {
                    es.iM.updateSetting(Array.from(e));
                }, []),
                eK = (0, G.oV)({ gridWrapperRef: eI, containerWidth: j, listPaddingLeft: n0, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: ez,
                    sectionDescriptors: eZ,
                    emojiGrid: eq,
                    columnCounts: eJ,
                } = (function (e) {
                    let {
                            channel: t,
                            fallbackGuildId: n,
                            collapsedSections: l,
                            pickerIntention: i,
                            emojiSearchResults: s,
                            gridWidth: a,
                            emojiPaddingHorizontal: o,
                            emojiSpriteSize: u,
                            shouldShowSoundmojiInEmojiPicker: c,
                            showOnlyUnicode: d,
                        } = e,
                        m = (0, h.bG)([S.Ay], () => S.Ay.categories),
                        f = r.useMemo(() => (d ? eQ.Ay.getCategories() : m), [m, d]),
                        p = (0, h.bG)([J.A], () => J.A.getGuild(t?.getGuildId()), [t]),
                        g = t?.getGuildId() ?? n,
                        x = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(g), [g]),
                        A = (0, ed.XI)(g),
                        C = (0, ed.Fj)(g),
                        E = (0, ed.QZ)(g),
                        { topEmojis: I, newlyAddedEmojis: y } = (0, eg.A)(g, i),
                        v = (0, h.yK)([e2.Ay], () => e2.Ay.getFlattenedGuildIds(), []),
                        N = (0, h.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
                        _ = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
                        T = (0, eu.ki)(_),
                        j = (0, e0.k0)(),
                        b = x.getGroupedCustomEmoji(),
                        R = (0, e1.Ym)({ location: "useEmojiGrid" });
                    return r.useMemo(() => {
                        let e = [],
                            n = [],
                            r = [],
                            d = [],
                            h = 0,
                            m = 0;
                        if (null != x && null != a) {
                            let x = Math.floor(a / (u + 2 * o)),
                                _ = 3 * x;
                            function g(s, a) {
                                let o = new Map(),
                                    c = l.has(a.sectionId),
                                    [f, p] = eO().partition(s, (e) => {
                                        let n = ef.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: i });
                                        return o.set(e, n), !n;
                                    }),
                                    g = f.concat(p),
                                    A = a.guild,
                                    C = g.length > _ && null != A && a.isNitroLocked,
                                    E = C && !N.has(A.id);
                                E && g.splice(_ - 1);
                                let v = Math.ceil((C ? g.length + 1 : g.length) / x),
                                    S = [];
                                for (let e = 0; e < v; e++) {
                                    let t = e * x,
                                        n = t + x,
                                        l = g
                                            .slice(t, n)
                                            .map((e, t) => ({
                                                type: 0,
                                                emoji: e,
                                                size: u,
                                                isDisabled: o.get(e),
                                                rowIndex: m,
                                                columnIndex: t,
                                                visibleRowIndex: h,
                                                category: a.type,
                                                subCategory:
                                                    a.sectionId === eY.s.TOP_GUILD_EMOJI
                                                        ? (0, ed.DA)(I, y, e.id ?? e.uniqueName ?? e.name)
                                                        : eY.tm.NONE,
                                            }));
                                    if ((S.push(l), !c)) {
                                        if (C && e === v - 1) {
                                            let t = S[e];
                                            t.push({
                                                type: 1,
                                                guildId: A.id,
                                                name: et.intl.string(et.t.NZI2Zk),
                                                size: u,
                                                rowIndex: e,
                                                columnIndex: t.length,
                                                visibleRowIndex: h,
                                                sectionCollapsedToThreeRows: E,
                                            });
                                        }
                                        d.push(l.length), r.push(l), h++;
                                    }
                                    m++;
                                }
                                let T = { ...a, count: s.length };
                                n.push(T), e.push(c ? 0 : v);
                            }
                            if (null != s)
                                0 !== s.unlocked.length &&
                                    g(s.unlocked, {
                                        type: eY.s.SEARCH_RESULTS,
                                        sectionId: eY.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        g(s.locked, {
                                            type: eY.s.PREMIUM_UPSELL,
                                            categoryId: eY.R2.PREMIUM_UPSELL,
                                            sectionId: eY.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !T,
                                        });
                            else {
                                if (R && c) {
                                    let t = [{ type: 2, rowIndex: m, columnIndex: 0, visibleRowIndex: h }];
                                    n.push({
                                        type: eY.s.SOUNDMOJI,
                                        categoryId: eY.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let i = l.has(eY.R2.SOUNDMOJI);
                                    !i && (d.push(t.length), r.push(t), h++), e.push(+!i), m++;
                                }
                                for (let e of f)
                                    if (e === eY.R2.CUSTOM) {
                                        function S(n) {
                                            let l = b.get(n);
                                            if (null == l) return;
                                            let s = l.filter(
                                                (e) =>
                                                    !e5.includes(
                                                        ef.Ay.getEmojiUnavailableReason({
                                                            emoji: e,
                                                            channel: t ?? er.Ay.getDefaultChannel(n),
                                                            intention: i,
                                                        }),
                                                    ),
                                            );
                                            if (0 === s.length) return;
                                            let r = J.A.getGuild(n),
                                                a =
                                                    j ||
                                                    (!T &&
                                                        ef.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: i,
                                                        }));
                                            g(s, {
                                                categoryId: e,
                                                guild: r,
                                                type: eY.s.GUILD,
                                                sectionId: null != r ? r.id : (0, e$.A)(),
                                                count: s.length,
                                                isNitroLocked: a,
                                            });
                                        }
                                        if ((null != p && S(p.id), (0, ex.isExternalEmojiAllowedForIntention)(i)))
                                            for (let e of v) (null == p || p.id !== e) && S(e);
                                    } else if (e === eY.R2.TOP_GUILD_EMOJI) {
                                        if (null != p) {
                                            let { allEmojis: t } = (0, ep.W)({ topEmojis: I, newlyAddedEmojis: y });
                                            t.length > 0 &&
                                                g(t, {
                                                    categoryId: e,
                                                    guild: J.A.getGuild(p.id),
                                                    type: eY.s.TOP_GUILD_EMOJI,
                                                    sectionId: eY.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === eY.R2.RECENT) {
                                        let n = (i === ex.EmojiIntention.REACTION ? E : C).filter(
                                            (e) => !ef.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        g(n, {
                                            categoryId: e,
                                            type: eY.s.RECENT,
                                            sectionId: eY.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === eY.R2.FAVORITES) {
                                        let n = A.filter(
                                            (e) => !ef.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        0 !== n.length &&
                                            g(n, {
                                                categoryId: e,
                                                type: eY.s.FAVORITES,
                                                sectionId: eY.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = eQ.Ay.getByCategory(e);
                                        null != t &&
                                            g(t, {
                                                categoryId: e,
                                                type: eY.s.UNICODE,
                                                sectionId: e,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                            }
                        }
                        return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                    }, [x, a, u, o, s, l, b, N, t, i, I, y, T, f, p, v, E, C, A, j, R, c]);
                })({
                    gridWidth: eK,
                    fallbackGuildId: eS,
                    channel: a,
                    pickerIntention: i,
                    emojiSearchResults: eV,
                    collapsedSections: eB,
                    emojiPaddingHorizontal: nQ,
                    emojiSpriteSize: f,
                    shouldShowSoundmojiInEmojiPicker: Z,
                    showOnlyUnicode: Y,
                }),
                { newlyAddedEmojis: e6 } = (0, eg.A)(eS, i);
            (n = r.useRef({ intention: i, isBurstReaction: eN, analyticsObject: ew })),
                r.useEffect(() => {
                    n.current.intention === ex.EmojiIntention.REACTION && eC(n.current);
                }, []);
            let e7 = r.useCallback(() => {
                    let e = e6.length > 0 ? e6[0].id : null;
                    (0, k.uV)(eS, e), eC({ intention: i, isBurstReaction: eN, analyticsObject: ew });
                }, [e6, eS, i, eN, ew]),
                e4 = (function (e) {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: l,
                            onSelectEmoji: i,
                            setUpsellConfigs: s,
                            emojiSelectAnalytics: a,
                            trackEmojiFavorited: o,
                        } = e,
                        u = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? l), [l, n]);
                    return r.useCallback(
                        (e, l) => {
                            if (0 === e.type) {
                                let { emoji: r } = e;
                                if (null == r) return;
                                let c = ef.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                                if (l.toggleFavorite)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(r) || null != c
                                        ? (0, g.Sw)(r)
                                        : (o?.(e), (0, g.V4)(r)));
                                if (c !== ex.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (c === ex.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                        a?.(e, c), s({ type: 0, emojiDescriptor: e });
                                        return;
                                    }
                                    if (
                                        c === ex.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED &&
                                        r.type === eX.i.GUILD
                                    ) {
                                        a?.(e, c), s({ type: 1, guildId: r.guildId, emojiId: r.id });
                                        return;
                                    }
                                    c !== ex.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                        (a?.(e), i({ emoji: r, willClose: l.isFinalSelection, isBurst: l.isBurst }));
                                }
                            }
                        },
                        [n, t, i, s, u, a, o],
                    );
                })({
                    pickerIntention: i,
                    selectedChannel: a,
                    fallbackGuildId: eS,
                    closePopout: c,
                    onSelectEmoji: _,
                    setUpsellConfigs: em,
                    emojiSelectAnalytics: (e, t) => {
                        "" !== eE
                            ? (0, ed.Wf)({
                                  emoji: e.emoji,
                                  location: { ...eD, object: Q.ZSU.EMOJI },
                                  searchQuery: eE,
                                  isLocked: null != t,
                                  intention: i,
                                  messageId: B,
                              })
                            : (0, ed._7)({
                                  emoji: e.emoji,
                                  location: { ...eD, object: ew ?? Q.ZSU.EMOJI, ...(null != eM && { page: eM }) },
                                  pickerIntention: i,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                                      w.isNewerThanLastSeen(eS, e.emoji.id),
                                  isBurstReaction: eN,
                                  messageId: B,
                                  lockedReason: t,
                                  visibleRowIndex: e.visibleRowIndex,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, ed.C5)({ emoji: e.emoji, location: { ...eD, object: Q.ZSU.EMOJI } });
                    },
                }),
                e9 = r.useCallback(() => {
                    c(), b?.();
                }, [c, b]),
                {
                    getItemProps: te,
                    getRowProps: tt,
                    gridContainerProps: tn,
                    handleGridContainerKeyDown: tl,
                    isUsingKeyboardNavigation: ti,
                } = (function (e) {
                    let {
                            analyticsLocation: t,
                            pickerIntention: n,
                            columnCounts: l,
                            onSelectEmoji: i,
                            emojiGrid: s,
                            emojiList: a,
                            channelGuildId: o,
                            isBurstReaction: u,
                        } = e,
                        c = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
                        m = r.useCallback(
                            (e, l) => {
                                if (e.type === e3.EMOJI) {
                                    if (null != e.emoji && l.altKey)
                                        return void (c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, g.Sw)(e.emoji)
                                            : ((0, ed.C5)({ emoji: e.emoji, location: { ...t, object: Q.ZSU.EMOJI } }),
                                              (0, g.V4)(e.emoji)));
                                    let s = {
                                        page: null != o ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                        section: Q.JJy.EMOJI_PICKER_POPOUT,
                                        object: Q.ZSU.EMOJI,
                                    };
                                    u &&
                                        (s = {
                                            page: null != o ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                            section: Q.JJy.EMOJI_PICKER_POPOUT,
                                            object: Q.ZSU.EMOJI,
                                        }),
                                        (0, ed._7)({
                                            emoji: e.emoji,
                                            location: s,
                                            pickerIntention: n,
                                            category: e.category,
                                            subCategory: e.subCategory,
                                            newlyAddedHighlight:
                                                e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                                                w.isNewerThanLastSeen(o, e.emoji.id),
                                        }),
                                        i({ emoji: e.emoji, willClose: !l.shiftKey, isBurst: u });
                                }
                            },
                            [i, o, n, c, t, u],
                        ),
                        {
                            gridDispatch: f,
                            getItemProps: p,
                            getRowProps: x,
                            gridContainerProps: A,
                            handleGridContainerKeyDown: C,
                            isUsingKeyboardNavigation: E,
                        } = (0, G.Ff)({
                            columnCounts: l,
                            gridNavigatorId: eY.lq,
                            itemGrid: s,
                            itemList: a,
                            onGridNavigatorItemSelect: m,
                            onGridNavigatorPositionChange: n2,
                        });
                    return (
                        r.useEffect(
                            () =>
                                P.Om.subscribe(
                                    (e) => e.inspectedExpressionPosition,
                                    (e) => {
                                        if (null == e) return;
                                        let { columnIndex: t, rowIndex: n, source: l } = e;
                                        l !== U.t.GRID_NAVIGATOR_EVENT &&
                                            f({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [f],
                        ),
                        {
                            getItemProps: p,
                            getRowProps: x,
                            gridContainerProps: A,
                            handleGridContainerKeyDown: C,
                            isUsingKeyboardNavigation: E,
                        }
                    );
                })({
                    pickerIntention: i,
                    analyticsLocation: eD,
                    columnCounts: eJ,
                    onSelectEmoji: _,
                    emojiGrid: eq,
                    emojiList: ey,
                    channelGuildId: eS,
                    isBurstReaction: eN,
                });
            ((e, t) => {
                let [n, l] = r.useState(null);
                r.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), l(null));
                }, [t, n]),
                    r.useEffect(() => {
                        l(P.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(j, ey),
                r.useLayoutEffect(() => {
                    ee && ev.current?.focus();
                }, [j, eG, ev, ee]),
                r.useEffect(() => {
                    R || (0, D.Ri)("");
                }, [R]),
                r.useEffect(
                    () => (
                        eo.default.track(Q.HAw.OPEN_POPOUT, {
                            type: ek ?? "Emoji Picker",
                            guild_id: eS,
                            location: eP,
                            ...(0, I.dI)(a),
                        }),
                        () => {
                            n3.cancel(), n5.cancel();
                        }
                    ),
                    [ek, eS, eP, a],
                ),
                (0, C.Ay)(() => ((0, ed.V$)({ intention: i, location: eD }), (eA.current = eE), P.Om.resetStoreState)),
                r.useEffect(() => () => (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                r.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = P.Om.getState().inspectedExpressionPosition;
                    eq[t]?.[e] == null && 0 !== e && P.Om.setInspectedExpressionPosition(0, 0);
                }, [eq]),
                r.useEffect(() => {
                    if (("" === eA.current && "" !== eE && (0, ed.EG)(eD, i), "" !== eE && eA.current !== eE)) {
                        let e = P.Om.getAnalyticsId();
                        0 === eF
                            ? n3({ location: eD, searchQuery: eE, intention: i, loadId: e })
                            : n5({
                                  totalResults: eF,
                                  numEmojiLocked: eV?.locked.length ?? 0,
                                  location: eD,
                                  searchQuery: eE,
                                  intention: i,
                                  loadId: e,
                              });
                    }
                    eA.current = eE;
                }, [eE, eD, eF, eV, i]);
            let ts = F ?? (N ? "div" : p.l),
                tr = null != eK;
            eh?.type === e8.PREMIUM
                ? (l = (0, s.jsx)(nX.default, {
                      onUpsellClicked: e9,
                      emojiDescriptor: eh.emojiDescriptor,
                      pickerIntention: i,
                      analyticsLocation: eD,
                      onClose: () => em(null),
                      channel: a,
                  }))
                : eh?.type === e8.ROLE_SUBSCRIPTION
                  ? (l = (0, s.jsx)(el, { onClose: () => em(null), guildId: eh.guildId, emojiId: eh.emojiId }))
                  : eN && !ej && (l = (0, s.jsx)(eb, { onDismiss: () => e_(!1) }));
            let ta = (0, s.jsx)(tq, {
                    channel: a,
                    pickerIntention: i,
                    emojiListRef: ey,
                    onKeyDown: (e) => {
                        tl?.(e), X?.(e);
                    },
                    searchBarRef: ev,
                    onFocus: $,
                    autoFocus: ee,
                    accessory: en,
                    headerClassName: M,
                    diversitySurrogate: eG,
                    isBurstReaction: eN,
                    onBurstReactionToggle: function () {
                        e_(!eN), ev.current?.focus();
                    },
                    renderHeader: W,
                    showAddEmojiButton: q,
                    closePopout: c,
                }),
                to = [];
            i === ex.EmojiIntention.REACTION && to.push(m.M.SUPER_REACTIONS_NITRO_MARKETING),
                S.Ay.hasFavoriteEmojis(eS) || to.push(m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let tu = (0, s.jsx)(x.A, {
                ...eD,
                children: (0, s.jsxs)(ts, {
                    id: eY.Do,
                    "aria-labelledby": N ? eY.k1 : void 0,
                    role: N ? "tabpanel" : void 0,
                    className: o()(tY.iE, { [tY.r6]: N, [tY.cB]: eN && ej }),
                    children: [
                        N ? null : ta,
                        (0, s.jsxs)("div", {
                            className: o()(tY.Fb, O),
                            onScroll: n1,
                            children: [
                                N ? ta : null,
                                (0, s.jsxs)("div", {
                                    className: tY.uK,
                                    ref: eI,
                                    children: [
                                        (0, s.jsx)(n$, { channel: a, closePopout: c }),
                                        (0, s.jsx)(v.Ay, {
                                            contentTypes: to,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(tm, { markAsDismissed: () => n(td.i.UNKNOWN) });
                                            },
                                        }),
                                        H
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: tY.Iy,
                                                  id: eY.lq,
                                                  ...tn,
                                                  children: tr
                                                      ? (0, s.jsx)(nG, {
                                                            collapsedSections: eB,
                                                            diversitySurrogate: eG,
                                                            emojiGrid: eq,
                                                            emojiListRef: ey,
                                                            emojiSize: f,
                                                            getEmojiItemProps: te,
                                                            getEmojiRowProps: tt,
                                                            gridWidth: eK,
                                                            isUsingKeyboardNavigation: ti,
                                                            onEmojiSelect: function (e, t) {
                                                                e4(e, { ...t, isBurst: eN });
                                                            },
                                                            onSelectSoundmoji: T,
                                                            setUpsellConfigs: em,
                                                            rowCount: eq.length,
                                                            rowCountBySection: ez,
                                                            sectionDescriptors: eZ,
                                                            setCollapsedSections: eW,
                                                            channelGuildId: eS,
                                                            channelId: a?.id,
                                                            messageId: B,
                                                            isBurstReaction: eN,
                                                            listHeaderClassName: K,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(t1, {
                                    emojiGrid: eq,
                                    className: tY.qV,
                                    guildId: eS,
                                    pickerIntention: i,
                                    channel: a,
                                }),
                                l,
                            ],
                        }),
                        H
                            ? null
                            : (0, s.jsx)(tc, {
                                  className: o()(tY.jv, z),
                                  emojiListRef: ey,
                                  sectionDescriptors: eZ,
                                  intention: i,
                                  channel: a,
                                  fallbackGuildId: eS,
                                  shouldShowSoundmojiInEmojiPicker: Z,
                                  showOnlyUnicode: Y,
                              }),
                    ],
                }),
            });
            return (0, s.jsx)(y.f5, { value: eU, children: tu });
        }),
    );
