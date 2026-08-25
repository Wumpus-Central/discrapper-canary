"use strict";
n.d(t, { A: () => n9 }), n(321073);
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
    N = n(536637),
    _ = n.n(N),
    T = n(228366),
    j = n(935208);
let b = { lastSeenNewlyAddedEmojiIds: {} },
    R = b,
    M = {};
function O() {
    for (let e in M) R.lastSeenNewlyAddedEmojiIds[e] = M[e];
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
        (R = b), (M = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = M[t] ?? R.lastSeenNewlyAddedEmojiIds[t];
        null == l || 0 > j.default.compare(l.id, n)
            ? (M[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (M[t] = { ...l, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = M[t] ?? R.lastSeenNewlyAddedEmojiIds[t];
        (null == l || 0 > j.default.compare(l.id, n)) && (M[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: O,
    CLEAR_CACHES: function () {
        (R = b), O();
    },
    CONNECTION_CLOSED: O,
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
var eE = n(408278),
    eI = n(403581),
    ey = n(775602),
    ev = n(607470),
    eS = n(724651),
    eN = n(732280),
    e_ = n(725807),
    eT = n(811611),
    ej = n(202541),
    eb = n(779944);
function eR(e) {
    let { onDismiss: t } = e,
        n = (0, h.bG)([ey.Ay], () => ey.Ay.useReducedMotion),
        l = et.intl.string(et.t.eikz43),
        i = (0, eN.V)(),
        r = (0, eS.O)(),
        a = i?.subscriptionTrial != null || null != r,
        u = { object: Q.ZSU.BUTTON_CTA, section: Q.JJy.SUPER_REACTION_PICKER };
    return (0, s.jsxs)("div", {
        className: eb.iE,
        children: [
            (0, s.jsx)("div", {
                className: eb.b,
                children: (0, s.jsx)(eE.K, {
                    "aria-label": et.intl.string(et.t.WAI6xu),
                    icon: B.P,
                    onClick: t,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsxs)("div", {
                className: eb.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: o()(eb.jo, { [eb.ph]: a }),
                        children: (0, s.jsx)(ev.A, {
                            className: o()(eb.vK, { [eb.Vk]: a }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    a
                        ? (0, s.jsx)("div", {
                              className: eb.g5,
                              children: (0, s.jsx)(eT.Ay, {
                                  type: ej.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                                  subscriptionTier: i?.subscriptionTrial?.skuId ?? ej.pe.TIER_2,
                                  headingText: et.intl.string(et.t.N4SCJ0),
                                  analyticsLocationObject: u,
                                  discountOffer: r,
                                  trialOffer: i,
                                  children: l,
                              }),
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: eb.wx,
                                      children: [
                                          (0, s.jsx)(eI.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: eb.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, s.jsx)(K.D, {
                                              className: eb.TK,
                                              variant: "heading-xl/bold",
                                              children: et.intl.string(et.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(z.E, { className: eb.Fb, variant: "text-md/normal", children: l }),
                                  (0, s.jsx)("div", {
                                      className: eb.sk,
                                      children: (0, s.jsx)(e_.A, {
                                          subscriptionTier: ej.pe.TIER_2,
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
var eM = n(435558),
    eO = n.n(eM),
    eL = n(837381),
    ew = n(460905),
    ek = n(88218),
    eP = n(407698),
    eD = n(531685),
    eU = n(406810),
    eG = n(27232),
    eV = n(369606),
    eF = n(413249),
    eH = n(141060),
    eB = n(687966),
    eW = n(115979),
    eK = n(524501),
    ez = n(926268),
    eZ = n(138134),
    eY = n(7807),
    eq = n(732139);
let eJ = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        l = (function (e) {
            switch (e) {
                case eq.R2.RECENT:
                    return eU.ClockIcon;
                case eq.R2.FAVORITES:
                    return eG.StarIcon;
                case eq.R2.TOP_GUILD_EMOJI:
                    return eV.TrophyIcon;
                case eq.R2.PEOPLE:
                    return ew.n;
                case eq.R2.NATURE:
                    return eF.p;
                case eq.R2.FOOD:
                    return eH.i;
                case eq.R2.ACTIVITY:
                    return eB.GameControllerIcon;
                case eq.R2.TRAVEL:
                    return eW.h;
                case eq.R2.OBJECTS:
                    return eK.D;
                case eq.R2.SYMBOLS:
                    return ez.HeartIcon;
                case eq.R2.FLAGS:
                    return eZ.FlagIcon;
                case eq.R2.PREMIUM_UPSELL:
                    return eI.t;
                case eq.R2.SOUNDMOJI:
                    return eY.J;
                default:
                    return;
            }
        })(t);
    return null == l ? null : (0, s.jsx)(l, { color: "currentColor", ...n });
});
var e$ = n(724511),
    eX = n(132500),
    eQ = n(770335),
    e0 = n(7584),
    e1 = n(526292),
    e2 = n(926972),
    e3 = n(711014),
    e5 =
        (((l = {})[(l.EMOJI = 0)] = "EMOJI"),
        (l[(l.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (l[(l.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        l);
let e6 = [ex.EmojiDisabledReasons.DISALLOW_EXTERNAL, ex.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e8 = (((i = {})[(i.PREMIUM = 0)] = "PREMIUM"), (i[(i.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), i),
    e7 = n(342379);
let e4 = "expression-guild-",
    { itemIdForIndex: e9 } = (0, ek.J)(e4),
    te = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tt = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tn = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tl = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    ti = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    ts = (0, ec.xI)(e7.__invalid_unicodeCategoryShortcutHeight),
    tr = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    ta = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    to = tn + tt + 2 * ti,
    tu = te + tt,
    tc = tu + (tr + 2 * ta),
    td = tn + tl + 2 * ti;
function th(e) {
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
        h = (0, eL.rm)(e9(n)),
        m = a.type === eq.s.GUILD ? null : a.id,
        f = t === n,
        p = a.type === eq.s.GUILD ? a.guild : null,
        g = (0, s.jsxs)(H.D, {
            ...h,
            "aria-label": (0, ed.wt)(a, p),
            className: o()({
                [e7.ZG]: null != p,
                [e7.Bj]: null == p,
                [e7.s6]: null == p && f,
                [e7.xg]: a.type === eq.s.RECENT,
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
                    ? (0, s.jsx)(e$.A, { guild: p, isSelected: f, shouldAnimate: !d && c, isLocked: a.isNitroLocked })
                    : null,
                null == p && null != m
                    ? (0, s.jsx)(eJ, { categoryId: m, className: e7.Yl, height: tn, width: tn, size: "custom" })
                    : null,
            ],
        }),
        x = i[n + 1],
        A = null != x && a.type === eq.s.GUILD && x.type !== eq.s.GUILD;
    return null != p
        ? (0, s.jsxs)(r.Fragment, {
              children: [
                  (0, s.jsx)(eP.Q, { guild: p, children: g }),
                  A ? (0, s.jsx)("hr", { className: e7.ny }, "separator") : null,
              ],
          })
        : g;
}
let tm = (e) => {
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
        E = (0, h.bG)([eD.A], () => eD.A.isFocused()),
        I = (0, h.bG)([ey.Ay], () => ey.Ay.useReducedMotion, []),
        y = r.useMemo(
            () =>
                eO().memoize(
                    (e, t) => {
                        let n = x[t];
                        if (null != n)
                            return (0, s.jsx)(
                                th,
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
                    },
                    (e, t) => t,
                ),
            [m, p, x, f, E, I],
        ),
        v = r.useMemo(() => [8, 8, 0, 8], []),
        S = r.useCallback(
            (e, t) => {
                let n = x[t];
                if (n.type === eq.s.RECENT) return to;
                if (n.type === eq.s.GUILD) {
                    let e = x[t + 1];
                    return null != e && e.type !== eq.s.GUILD ? tc : tu;
                }
                return td;
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
                i.type === eq.s.GUILD
                    ? ((t += 1), (n += 1))
                    : i.type === eq.s.UNICODE
                      ? (l += 1)
                      : ((e += 1), (t += 1));
            });
            let i = to + t * tu + tc;
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
    let M = r.useCallback(
            (e) => {
                let t = C.current?.getListDimensions();
                null == t || (e + t.height - tr >= T ? R(!1) : R(!0));
            },
            [T],
        ),
        O = r.useCallback(
            (e) => {
                e(_), C.current?.scrollTo(T);
            },
            [T, _],
        ),
        L = r.useCallback(
            (e, t) => {
                let n = x[e];
                if (null == n) return 0;
                let l = b ? ts : 0;
                if (n.type === eq.s.RECENT) return t ? 0 : tl;
                if (n.type === eq.s.GUILD) {
                    let n = x[e + 1];
                    return null != n && n.type !== eq.s.GUILD ? (t ? tr + -2 * ta + tt + l : tt) : t ? l : tt;
                }
                return t ? tt + l : 2 * tt;
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
    return (0, s.jsx)(ek.A, {
        categoryListRef: C,
        expressionsListRef: n,
        className: t,
        store: P.Om,
        categories: x,
        listPadding: v,
        onScroll: M,
        renderCategoryListItem: y,
        renderSection: w,
        rowCount: x.length,
        categoryHeight: S,
        getScrollOffsetForIndex: L,
        rowCountBySection: j,
        navId: "emoji-picker-categories",
        itemIdPrefix: e4,
        children: (e) =>
            N >= 7 &&
            (0, s.jsx)(
                H.D,
                {
                    "aria-hidden": !b,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: o()(e7.KB, { [e7.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => O(e),
                    children: (0, s.jsx)(ew.n, { size: "custom", color: "currentColor", height: tn, width: tn }),
                },
                k,
            ),
    });
};
var tf = n(49999),
    tp = n(860197);
let tg = function (e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)(z.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tp.iE,
        children: [
            (0, s.jsx)(ez.HeartIcon, { size: "md", color: "currentColor", className: tp.Kk }),
            (0, s.jsx)("div", {
                className: tp.Qs,
                children: (0, s.jsx)(z.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, s.jsx)(H.D, {
                onClick: () => t(tf.i.UNKNOWN),
                children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: tp.VN }),
            }),
        ],
    });
};
var tx = n(296704),
    tA = n(717421),
    tC = n(343032),
    tE = n(683063),
    tI = n(131607),
    ty = n(158045),
    tv = n(748798);
let tS = { tension: 750, mass: 2.5, friction: 70 };
function tN(e) {
    let { checked: t, onClick: n } = e,
        l = (0, h.bG)([ey.Ay], () => ey.Ay.useReducedMotion),
        i = ea.default.getCurrentUser(),
        a = null != i && !(0, ty.TW)(i),
        u = a ? [] : [m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [c, d] = (0, tI.kn)(u),
        [f, p] = r.useState(!1),
        [g, x] = (0, tA.z)(() => ({})),
        A = (0, tx.animated)(tC.i);
    r.useEffect(() => {
        let e = c === m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (d(tf.i.DISMISS), setTimeout(() => p(e), 200));
    }, [c, d]);
    let C = f ? et.intl.string(et.t["Osi/uy"]) : t && !a ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        E = f ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, s.jsx)(tE.u, {
        position: "top",
        title: E,
        body: C,
        asset: (0, s.jsx)(eI.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: f,
        children: (0, s.jsx)(H.D, {
            "aria-label": C,
            "aria-pressed": t,
            onClick: function () {
                x({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tS }),
                    n?.(),
                    p(!1);
            },
            focusProps: { enabled: !1 },
            className: o()(tv.Pf, { [tv.wM]: t }),
            children: (0, s.jsx)(A, {
                style: l ? void 0 : g,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tv.Kk,
            }),
        }),
    });
}
var t_ = n(866665),
    tT = n(821609),
    tj = n(644508),
    tb = n(824832),
    tR = n(267102),
    tM = n(242812);
function tO(e) {
    let { channel: t, closePopout: n } = e,
        l = r.useRef(null),
        i = r.useRef(0),
        [a, o] = r.useState(!1),
        [u, c] = r.useState(!1),
        d = (0, tR.Us)() === Q.BRT.OVERLAY,
        h = u || a,
        m = r.useCallback(
            async (e, l, s) => {
                c(!0),
                    n(),
                    await (0, tj.f)({
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
            (0, s.jsx)(t_.m, {
                asContainer: !0,
                text: d ? et.intl.string(et.t.RMbedC) : null,
                children: (0, s.jsx)(tT.$, {
                    text: et.intl.string(et.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        l.current?.activateUploadDialogue();
                    },
                    disabled: h || d,
                }),
            }),
            (0, s.jsx)("div", {
                className: tM.F,
                children: (0, s.jsx)(tb.Ay, { ref: l, onChange: m, setLoading: o, disabled: h }, i.current),
            }),
        ],
    });
}
n(667532);
var tL = n(833272),
    tw = n(82495),
    tk = n(260762),
    tP = n(915089),
    tD = n(650583),
    tU = n(683829);
let tG = (0, tP.Ld)(),
    tV = tL.A.convert.fromCodePoint("1f44f"),
    tF = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tH(e) {
    switch (tL.A.convert.toCodePoint(e)) {
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
    let { fade: t, surrogate: n, onClick: l, delay: i, index: r } = e,
        a = (0, eL.rm)(`item-${r}`),
        o = ef.Ay.getURL(tV + n),
        u = (0, tA.z)({ opacity: 1, from: { opacity: +!t }, delay: i }, "animate-always");
    return (0, s.jsx)(H.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => l(n),
        className: tU.B6,
        children: (0, s.jsx)(tx.animated.div, {
            "aria-label": tH(n),
            className: tU.g4,
            style: { backgroundImage: `url("${o}")`, ...u },
        }),
    });
};
function tW(e) {
    let { id: t, selectedSurrogate: n, onClick: l } = e,
        i = (0, tk.A)("diversity"),
        a = (0, tA.z)({ height: (tF + 14) * (e0.W$.length + 1), from: { height: tF + 14 }, config: { duration: 125 } }),
        o = r.useRef(i);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let u = ["", ...e0.W$];
    return (
        eO().remove(u, (e) => e === n),
        u.unshift(n),
        (0, s.jsx)(eL.hD, {
            navigator: i,
            children: (0, s.jsx)(eL.PR, {
                children: (e) => {
                    let { ref: n, ...i } = e;
                    return (0, s.jsx)(tx.animated.div, {
                        ...i,
                        id: t,
                        ref: n,
                        className: tU.J6,
                        style: a,
                        role: "listbox",
                        children: u.map((e, t) =>
                            (0, s.jsx)(tB, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: l }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let tK = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: l } = e,
        i = ef.Ay.getURL(tV + n),
        [a, u] = r.useState(!1),
        c = (0, tw.A)(null, () => u(!1)),
        d = r.useRef(null);
    return (0, s.jsxs)("div", {
        ref: c,
        className: o()(tU.fx, l),
        children: [
            (0, s.jsx)(H.D, {
                innerRef: d,
                className: tU.Dj,
                onClick: function () {
                    u(!0);
                },
                "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tH(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": tG,
                tabIndex: a ? -1 : 0,
                children: (0, s.jsx)("div", { className: tU.g4, style: { backgroundImage: `url("${i}")` } }),
            }),
            a
                ? (0, s.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === tD.dh.ESCAPE
                              ? (e.stopPropagation(), u(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && u(!1);
                      },
                      children: (0, s.jsx)(tW, {
                          id: tG,
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
var tz = n(462180),
    tZ = n(602034),
    tY = n(683438);
let tq = r.forwardRef(function (e, t) {
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
                tz.x,
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
            (0, s.jsx)(tY.I, {
                autoFocus: o,
                query: d,
                ref: c,
                placeholder: m ?? u,
                onClear: g,
                onKeyDown: function (e) {
                    switch (e.key) {
                        case tD.dh.ARROW_LEFT:
                        case tD.dh.ARROW_RIGHT:
                        case tD.dh.ARROW_UP:
                        case tD.dh.ARROW_DOWN:
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
                    ...(f ? { "aria-activedescendant": (0, tZ.Aq)(l, h.columnIndex, h.rowIndex) } : void 0),
                },
            })
        );
    }),
    tJ = r.memo(tq);
var t$ = n(381575);
let tX = function (e) {
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
                (0, s.jsx)(tJ, {
                    emojiListRef: r,
                    gridNavigatorId: eq.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: u,
                    autoFocus: c,
                    defaultSearchPlaceholder: (0, ed.wT)(l, m),
                }),
                l === ex.EmojiIntention.REACTION ? (0, s.jsx)(tN, { checked: m, onClick: f }) : null,
                n ?? (0, s.jsx)(tK, { searchBarRef: d, className: t$.fx, selectedSurrogate: h }),
                l !== ex.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, s.jsx)(tO, { channel: t, closePopout: x }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: o()(t$.wx, i), children: null != p ? p(A) : A });
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
        l,
        { className: i, emojiGrid: a, guildId: o, pickerIntention: u, channel: c } = e,
        d = P.Om.useStore((e) => e.inspectedExpressionPosition),
        m = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (m?.type) {
        case e5.EMOJI:
            t = m?.emoji;
            break;
        case e5.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: m?.guildId, allNamesString: m?.name };
            break;
        case e5.SOUNDMOJI:
        default:
            t = null;
    }
    let f = (0, h.bG)([J.A], () => (null !== t && t.type === eQ.i.GUILD ? J.A.getGuild(t.guildId) : null), [t]),
        p = (0, h.bG)([eD.A], () => eD.A.isFocused()),
        g = (0, h.bG)([ey.Ay], () => ey.Ay.useReducedMotion, []),
        x = es.Sf.useSetting(),
        A = (0, ed.O7)(o, t3(t) ? t : null),
        C = (0, h.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: E } = (0, eg.A)(o, u),
        I = m?.type === e5.EMOJI ? m.subCategory : eq.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    t3(t) &&
                    I !== eq.tm.NONE &&
                    (I === eq.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eQ.i.GUILD &&
                        (0, k.mz)(t.guildId, E[0].id),
                    null != d.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: I,
                            position: m.columnIndex + 1,
                            newlyAddedHighlight: I === eq.tm.NEWLY_ADDED_EMOJI && w.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = (function (e, t) {
            let { allowAnimatedEmoji: l, sectionsExpandedFromThreeRows: i, theme: r } = t;
            if (t3(e)) {
                let t = null != e.id ? t1.Ay.getEmojiURL({ id: e.id, animated: l && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, s.jsx)(z.E, {
                          variant: "text-md/normal",
                          className: t2.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, s.jsx)("img", { alt: (0, ef.N)(e) ?? "", src: t, className: t2.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    l = n(404828),
                    a = n(600003),
                    o = n(318121);
                return i.has(e.guildId)
                    ? (0, s.jsx)("img", { className: t2.Kk, src: (0, F.M)(r) ? a : o, alt: "" })
                    : (0, s.jsx)("img", { className: t2.Kk, src: (0, F.M)(r) ? t : l, alt: "" });
            }
        })(t, { allowAnimatedEmoji: x, sectionsExpandedFromThreeRows: C, theme: t0.A.theme }),
        v =
            null != f
                ? (0, s.jsx)(e$.A, { className: t2.__invalid_guildIcon, guild: f, shouldAnimate: !g && p })
                : null;
    l =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? C.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, ef.N)(t);
    let N = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            l = t3(t);
        return null != n && l ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: c, guildId: o, intention: u, guild: f });
    return (0, s.jsx)(tQ.A, {
        className: i,
        graphicPrimary: y,
        graphicSecondary: v,
        titlePrimary: l,
        titleSecondary: N,
        isFavorite: A,
        emojiSubCategory: I,
    });
});
var t6 = n(607399),
    t8 = n(765178),
    t7 = n(537652),
    t4 = n(962125),
    t9 = n(240864),
    ne = n(286509),
    nt = n(89366),
    nn = n(202639),
    nl = n(414872),
    ni = n(400669),
    ns = n(909536),
    nr = n(259678),
    na = n(304072),
    no = n(189551),
    nu = n(289873),
    nc = n(796774),
    nd = n(209932),
    nh = n(805945),
    nm = n(576705);
n(980504);
var nf = n(818348),
    np = n(821425);
let ng = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        { channelId: a, onSelectSoundmoji: o } = e,
        u = (0, h.bG)([nd.A], () => !nd.A.isFetching() && !nd.A.hasFetchedAllSounds(), []),
        c = (0, h.bG)([eh.A], () => eh.A.getChannel(a)),
        d =
            ((t = (0, h.bG)([ea.default], () => ty.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, h.bG)([nd.A], () => nd.A.getSoundsForGuild("0"))),
            (l = (0, h.yK)([J.A], () => J.A.getGuildIds())),
            (i = r.useMemo(() => nm.A.can(nf.xB.USE_EXTERNAL_SOUNDS, c), [c])),
            r.useMemo(() => {
                let e = [];
                if (t && i) {
                    let t = l.flatMap((e) => nd.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eO().sampleSize(t, 4));
                } else if (c?.guild_id != null) {
                    let t = nd.A.getSoundsForGuild(c?.guild_id)?.filter((e) => e.available);
                    e.push(...eO().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eO().sampleSize(n ?? [], 4 - e.length)), e;
            }, [i, c?.guild_id, n, l, t]));
    return (r.useEffect(() => {
        (0, nc.E7)();
    }, [u]),
    0 === d.length)
        ? (0, s.jsx)(nu.y, {})
        : (0, s.jsx)("div", {
              className: np.q,
              children: d.map((e, t) =>
                  (0, s.jsx)(
                      nh.Ay,
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
var nx = n(594061),
    nA = n(771104),
    nC = n(442433),
    nE = n(147421),
    nI = n(723702),
    ny = n(140735),
    nv = n(194261),
    nS = n(703413);
let nN = (e) => {
    let { src: t, alt: n, size: l, "aria-label": i, className: a } = e,
        u = r.useRef(null),
        c = r.useRef(!1),
        d = c.current ? nS.S : nS.Y;
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
                          ((c.current = !0), u.current.classList.remove(nS.Y), u.current.classList.add(nS.S));
                  });
              },
    });
};
var n_ = n(955388);
let nT = eO().memoize(
        (e) =>
            `${e * ex.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(e0.Ay.numNonDiversitySprites / ex.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nj = eO().memoize(
        (e) =>
            `${e * ex.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(e0.Ay.numDiversitySprites / ex.EmojiSprites.DiversityPerRow)}px`,
    ),
    nb = r.memo(function (e) {
        let { emoji: t, size: l, surrogateCodePoint: i, allowAnimatedEmoji: a, "aria-label": u, isLocked: c } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : t1.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: ex.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(nN, {
                              className: n_.N1,
                              "aria-label": u,
                              src: e,
                              size: l,
                              alt: (0, ef.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: o()(n_.xA, { [n_.N1]: c }),
                    style: (function (e, t, l) {
                        let i, s, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((i = n(12303)(`./spritesheet-${t}-${l}.png.js`).default),
                              (s = nj(l)),
                              (r = ex.EmojiSprites.DiversityPerRow))
                            : ((i = n(145519)(`./spritesheet-emoji-${l}.png.js`).default),
                              (s = nT(l)),
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
                    children: (0, s.jsx)(ny.A, { children: u }),
                });
            })();
        return (0, s.jsxs)(r.Fragment, {
            children: [
                d,
                c
                    ? (0, s.jsx)("div", {
                          className: n_.iD,
                          children: (0, s.jsx)(nv.LockIcon, { size: "xs", color: "currentColor", className: n_.fi }),
                      })
                    : null,
            ],
        });
    });
var nR = n(537911);
let nM = r.forwardRef(function (e, t) {
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
        I = (0, h.bG)([J.A], () => (l.type === eQ.i.GUILD ? J.A.getGuild(l.guildId) : void 0), [l]);
    return (0, s.jsx)(nr.vN, {
        children: (0, s.jsx)("button", {
            ...E,
            className: o()(nR._X, { [nR.lG]: r, [nR.Lh]: a, [nR.Bx]: u, [A ?? ""]: u, [nR.TV]: d }),
            "data-type": U.g.EMOJI,
            "data-id": l.id,
            "data-name": l.name,
            "data-surrogates": "surrogates" in l ? l.surrogates : null,
            "data-animated": l.animated ? "true" : null,
            ref: t,
            children: (0, s.jsx)(nb, {
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
function nO(e) {
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
        R = (0, h.bG)([ey.Ay], () => ey.Ay.useReducedMotion),
        M = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
        O = r.useRef(null),
        { emoji: L, size: w, isDisabled: k, columnIndex: P } = t;
    function D() {
        d.current || m.current || u(t);
    }
    let { ref: U, tabIndex: G, onFocus: V, ...F } = x(P, a) ?? {},
        H =
            j !== `${P}:${a}`
                ? (0, s.jsx)(nM, {
                      ref: U,
                      emoji: L,
                      isFavorite: M.isFavoriteEmojiWithoutFetchingLatest(L),
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
                              null != O.current &&
                              null != _ &&
                              null != v &&
                              !e.shiftKey &&
                              null != L.name &&
                              N &&
                              !R &&
                              I
                          ) {
                              let e = null == L.id ? e0.Ay.convertNameToSurrogate(L.name) : L.name,
                                  t = O.current.getBoundingClientRect();
                              (t.x = _.x + (P + 1) * w), b(`${P}:${a}`), (0, nE.h)(v, e, L.id, t);
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
                          (0, nC.L3)(e, async () => {
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
        { ...F, key: l, ref: O },
        f
            ? (0, s.jsx)(t_.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, nI.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let nL = (e) => {
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
        M = n(258901),
        O = n(135974),
        L = n(8013),
        k = (0, Z.Ay)(),
        D = P.Om.getState(),
        [U, G] = r.useState(D.inspectedExpressionPosition),
        [V, H] = (0, na.A)(null, 300),
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
            nx.bW.loadIfNecessary();
        }, []);
    let W = l === eq.as.LARGE,
        K = l === eq.as.MEDIUM;
    function Y(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case e5.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: l } = e,
                    a = U.rowIndex === n && U.columnIndex === l,
                    c = e.sectionCollapsedToThreeRows
                        ? a
                            ? (0, F.M)(k)
                                ? M
                                : L
                            : (0, F.M)(k)
                              ? _
                              : T
                        : a
                          ? (0, F.M)(k)
                              ? R
                              : O
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
                        (0, s.jsx)(nr.vN, {
                            children: (0, s.jsx)("button", {
                                "aria-label": c,
                                ref: A,
                                className: o()(nR._X, {
                                    [nR.lG]: W,
                                    [nR.Lh]: K,
                                    [nR.Bx]: v && !h,
                                    [E ?? ""]: v,
                                    [nR.TV]: V === t,
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
                        e.type !== e5.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (i(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, no.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || N(),
                                eo.default.track(Q.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, s.jsx)("img", { className: nR.Kk, src: c, alt: "" }),
                    ariaLabel: h,
                    shouldShowRoundHighlight: !0,
                });
            }
            case e5.EMOJI: {
                let { columnIndex: n, visibleRowIndex: l } = e,
                    r = U.rowIndex === l && U.columnIndex === n;
                return (0, s.jsx)(
                    nO,
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
            case e5.SOUNDMOJI:
                return;
        }
    }
    function q(e) {
        return (0, s.jsx)("ul", {
            ...h(p),
            className: o()(nR.ND, { [nR.HO]: W, [nR.X$]: K }),
            ref: B,
            children: e.map(Y),
        });
    }
    if (C === eq.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nR.ND,
            ref: B,
            children: (0, s.jsx)(ng, { channelId: I, onSelectSoundmoji: a }),
        });
    if (C !== eq.s.TOP_GUILD_EMOJI) return q(t);
    let J = t.filter(
            (e) =>
                e.subCategory === eq.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === eq.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eQ.i.GUILD &&
                    !w.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        $ = t.filter(
            (e) =>
                e.subCategory === eq.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eQ.i.GUILD &&
                w.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === $.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nR.Ng,
              children: [
                  (0, s.jsx)("div", { className: o()(nR.V6, { [nR.$3]: 0 === J.length }), children: q(J) }),
                  (0, s.jsxs)("div", {
                      className: nR.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(nR.eE, { [nR.eM]: 1 === $.length, [nR.Wk]: J.length > 0 }),
                              children: q($),
                          }),
                          (0, s.jsxs)("div", {
                              className: o()(nR.lD, { [nR.EI]: W, [nR.qU]: K, [nR.Wk]: J.length > 0 }),
                              children: [
                                  (0, s.jsx)(nA.A, { foreground: nR.rI }),
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
var nw = n(618723);
let nk = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nP = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nD = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nU = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nG = (0, ec.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nV = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nF = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nH = r.memo(function (e) {
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
            M = P.Om.useStore((e) => e.activeCategoryIndex),
            O = (0, D.RQ)((e) => e.searchQuery),
            L = es.Sf.useSetting(),
            w = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
            k = (0, eu.ki)(w),
            V = (0, ns.St)("emoji_picker_floating_upsell"),
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
                    b = r.useMemo(() => ("" !== n ? tL.A.convert.toCodePoint(n) : ""), [n]),
                    R = r.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    M = r.useCallback(
                        (e) => {
                            if (e >= d.length - 1) return !1;
                            let t = d[e],
                                n = d[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [d],
                    ),
                    O = r.useCallback(
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
                                e === eq.R2.SOUNDMOJI &&
                                    eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                                m(l);
                        },
                        [T, t, m],
                    ),
                    L = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            l = e.type === e5.SOUNDMOJI ? null : e.type === e5.EMOJI ? (0, ef.N)(e.emoji) : e.name;
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
                                    nL,
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
                                        selectedItemClassName: nw.__invalid_selectedItem,
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
                                if (r === eq.s.SEARCH_RESULTS) return;
                                let u =
                                        r === eq.s.GUILD
                                            ? null != l
                                                ? (0, s.jsx)(e$.A, { guild: l, height: 16, width: 16 })
                                                : null
                                            : null != i
                                              ? (0, s.jsx)(eJ, { categoryId: i, height: 16, width: 16, size: "custom" })
                                              : null,
                                    c = l?.name;
                                null != i && (c = (0, ed.Nu)(i, l?.name));
                                let h = N === e,
                                    m = n.isNitroLocked,
                                    f = m && !h,
                                    p = m && h,
                                    g =
                                        r === eq.s.SOUNDMOJI
                                            ? (0, s.jsx)(H.D, {
                                                  className: nw.f3,
                                                  onClick: () => {
                                                      (0, D.U)(eA.kx.SOUNDBOARD),
                                                          eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    ne.A,
                                    {
                                        className: o()(nw.wx, S, { [nw.RA]: f, [nw.sp]: p }),
                                        icon: u,
                                        isCollapsed: t.has(a),
                                        onClick: () => O(a, l),
                                        trailing: g,
                                        children: c,
                                    },
                                    a,
                                );
                            }),
                        [d, t, O, S, N],
                    ),
                    V = (0, e1.k0)(),
                    F = r.useCallback(
                        (e, n) => {
                            let l = d[e],
                                i = M(e),
                                r = R(e);
                            return (0, s.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nw.Wy, {
                                        [nw.YD]: e === d.length - 1,
                                        [nw.jl]: t.has(l.sectionId),
                                        [nw.cW]: l.isNitroLocked,
                                        [nw.T5]: i || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, M, R],
                    ),
                    B = r.useCallback(
                        (e) =>
                            M(e)
                                ? V
                                    ? (0, s.jsx)(nl.ap, {})
                                    : (0, s.jsx)(nl.Ay, {})
                                : R(e)
                                  ? (0, s.jsx)("div", { className: nw.pQ })
                                  : null,
                        [M, R, V],
                    ),
                    W = r.useCallback((e) => (M(e) ? 41 : 33 * !!R(e)), [M, R]),
                    K = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || M(e) || R(e) ? 0 : nV),
                        [t, d, M, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== c ? nU : nk, nP, nD, 0], [c]),
                    renderRow: k,
                    renderSection: F,
                    renderSectionHeader: G,
                    renderSectionFooter: B,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === eq.s.SEARCH_RESULTS ? 0 : nG), [d]),
                    sectionFooterHeight: W,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: l,
                emojiGrid: i,
                emojiSize: u,
                onEmojiSelect: c,
                onSelectSoundmoji: d,
                searchQuery: O,
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
                activeCategoryIndex: M,
                isScrolling: R,
                listRef: a,
                onActiveCategoryIndexChange: function (e) {
                    K(e), "" === O && P.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: O,
                disableForSearch: !1,
            });
        (0, G.FV)({ searchQuery: O, activeCategoryIndex: M, listRef: a });
        let eh = r.useCallback(
                (e) => {
                    ec(e),
                        nB({ emojiListRef: a, sectionDescriptors: f, scrollTop: e, searchQuery: O, setShowUpsell: Y });
                },
                [ec, a, f, O, Y],
            ),
            em = f.length > 0;
        r.useEffect(() => {
            Z &&
                eo.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: ej.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: F,
                    location_stack: B,
                });
        }, [F, B, Z]),
            r.useEffect(() => {
                "" !== O && Y(!1);
            }, [O]);
        let ep = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(ep.current),
                    (ep.current = setTimeout(() => {
                        em
                            ? t8.O.announce(et.intl.string(et.t.uZ4F2O), "polite")
                            : t8.O.announce(et.intl.string(et.t.IxxiKF), "assertive"),
                            (ep.current = null);
                    }, 200)),
                    () => {
                        clearTimeout(ep.current);
                    }
                ),
                [em, O],
            ),
            (0, s.jsxs)("div", {
                className: nw.AD,
                children: [
                    em
                        ? (0, s.jsx)(t4.A, {
                              role: "none presentation",
                              className: nw.p_,
                              listPadding: q,
                              onScroll: eh,
                              renderRow: J,
                              renderSection: $,
                              renderSectionHeader: X,
                              renderSectionFooter: ee,
                              rowCount: v,
                              rowCountBySection: p,
                              rowHeight: u + 2 * nF,
                              sectionHeaderHeight: el,
                              sectionMarginBottom: en,
                              sectionFooterHeight: er,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, s.jsx)(t7.A, {
                              message: (0, s.jsx)(z.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: et.intl.string(et.t.IxxiKF),
                              }),
                              className: nw.BZ,
                          }),
                    k || t6.Fr
                        ? null
                        : (0, s.jsx)(nn.d, {
                              showUpsell: Z,
                              text:
                                  ((t = (0, ty.Dd)(ej.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          m({ type: e8.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nt.qD)()), (0, ty.LE)(n, ej.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: Q.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: V
                                  ? (0, s.jsx)(ni.l, {
                                        size: "sm",
                                        className: nw.ij,
                                        location: E.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    nB = eO().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: l, searchQuery: i, setShowUpsell: s } = e;
            s(
                (0, t9.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: l })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nW = n(506774),
    nK = n(28863),
    nz = n(277984),
    nZ = n(404374),
    nY = n(780964),
    nq = n(766075),
    nJ = n(166403),
    n$ = n(506150);
let nX = "premiumRetentionEmojiPickerNotice",
    nQ = nW.w.get(nX),
    n0 = function (e) {
        let { closePopout: t, channel: n } = e,
            [l, i] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, h.cf)([nJ.A], () => ({
                subscription: nJ.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nJ.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, nz.hP)();
            }, [o]),
            null == a || !(0, ty.PK)(a.status) || l)
        )
            return null;
        let u = a.status === Q.Dmq.PAST_DUE ? (0, ty.ji)(a).expiresDate : _()(a.currentPeriodStart).add(ej.ph),
            c = `${a.id}:${u.toISOString()}`;
        if (nQ === c) return null;
        let d =
            ty.Ay.getPremiumType(a.planId) === ej.PremiumTypes.TIER_0
                ? nZ.k0.PREMIUM_TIER_0
                : ty.Ay.getPremiumType(a.planId) === ej.PremiumTypes.TIER_1
                  ? nZ.k0.PREMIUM_TIER_1
                  : nZ.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)(z.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: n$.g$,
            children: [
                (0, s.jsx)(eI.t, { size: "md", className: n$.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: n$.Xn,
                    children: [
                        (0, s.jsx)(z.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: ty.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: u.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nK.Anchor, {
                                onClick: () => {
                                    (0, ed.xf)(n), t(), (0, nq.openUserSettings)(nY.X.NITRO_PANEL);
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(H.D, {
                    onClick: () => {
                        nW.w.set(nX, c), (nQ = c), i(!0);
                    },
                    children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: n$.YF }),
                }),
            ],
        });
    };
var n1 = n(148361);
let n2 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n3 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function n5(e) {
    return e.stopPropagation();
}
function n6(e, t) {
    P.Om.setInspectedExpressionPosition(e, t, U.t.GRID_NAVIGATOR_EVENT);
}
let n8 = c()(ed.bo, 200),
    n7 = c()(ed.Wi, 200),
    n4 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n9 = r.memo(
        r.forwardRef(function (e, t) {
            let n,
                l,
                {
                    pickerIntention: i,
                    channel: a,
                    guildId: u,
                    closePopout: c,
                    emojiSize: f = eq.as.MEDIUM,
                    hasTabWrapper: N = !1,
                    onSelectEmoji: _,
                    onSelectSoundmoji: T,
                    containerWidth: j,
                    onNavigateAway: b,
                    persistSearch: R,
                    className: M,
                    headerClassName: O,
                    analyticsOverride: L = n4,
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
            let { location: eb } = (0, A.p)(),
                { page: eM, section: eL, object: ew, openPopoutType: ek, popoutLocation: eP } = L,
                eD = r.useMemo(() => ({ ...eb, section: eL ?? Q.JJy.EMOJI_PICKER_POPOUT }), [eb, eL]),
                { analyticsLocations: eU } = (0, y.Ay)(E.A.EMOJI_PICKER),
                { diversitySurrogate: eG } = (0, h.cf)([S.Ay], () => ({ diversitySurrogate: S.Ay.diversitySurrogate })),
                eV = (0, ed.sL)(eE, a, i, Y),
                eF = null == eV ? 0 : eV.locked.length + eV.unlocked.length,
                eH = es.iM.useSetting(),
                eB = r.useMemo(() => new Set(eH), [eH]),
                eW = r.useCallback((e) => {
                    es.iM.updateSetting(Array.from(e));
                }, []),
                eK = (0, G.oV)({ gridWrapperRef: eI, containerWidth: j, listPaddingLeft: n3, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: ez,
                    sectionDescriptors: eZ,
                    emojiGrid: eY,
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
                        f = r.useMemo(() => (d ? e0.Ay.getCategories() : m), [m, d]),
                        p = (0, h.bG)([J.A], () => J.A.getGuild(t?.getGuildId()), [t]),
                        g = t?.getGuildId() ?? n,
                        x = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(g), [g]),
                        A = (0, ed.XI)(g),
                        C = (0, ed.Fj)(g),
                        E = (0, ed.QZ)(g),
                        { topEmojis: I, newlyAddedEmojis: y } = (0, eg.A)(g, i),
                        v = (0, h.yK)([e3.Ay], () => e3.Ay.getFlattenedGuildIds(), []),
                        N = (0, h.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
                        _ = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
                        T = (0, eu.ki)(_),
                        j = (0, e1.k0)(),
                        b = x.getGroupedCustomEmoji(),
                        R = (0, e2.Ym)({ location: "useEmojiGrid" });
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
                                                    a.sectionId === eq.s.TOP_GUILD_EMOJI
                                                        ? (0, ed.DA)(I, y, e.id ?? e.uniqueName ?? e.name)
                                                        : eq.tm.NONE,
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
                                        type: eq.s.SEARCH_RESULTS,
                                        sectionId: eq.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        g(s.locked, {
                                            type: eq.s.PREMIUM_UPSELL,
                                            categoryId: eq.R2.PREMIUM_UPSELL,
                                            sectionId: eq.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !T,
                                        });
                            else {
                                if (R && c) {
                                    let t = [{ type: 2, rowIndex: m, columnIndex: 0, visibleRowIndex: h }];
                                    n.push({
                                        type: eq.s.SOUNDMOJI,
                                        categoryId: eq.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let i = l.has(eq.R2.SOUNDMOJI);
                                    !i && (d.push(t.length), r.push(t), h++), e.push(+!i), m++;
                                }
                                for (let e of f)
                                    if (e === eq.R2.CUSTOM) {
                                        function S(n) {
                                            let l = b.get(n);
                                            if (null == l) return;
                                            let s = l.filter(
                                                (e) =>
                                                    !e6.includes(
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
                                                type: eq.s.GUILD,
                                                sectionId: null != r ? r.id : (0, eX.A)(),
                                                count: s.length,
                                                isNitroLocked: a,
                                            });
                                        }
                                        if ((null != p && S(p.id), (0, ex.isExternalEmojiAllowedForIntention)(i)))
                                            for (let e of v) (null == p || p.id !== e) && S(e);
                                    } else if (e === eq.R2.TOP_GUILD_EMOJI) {
                                        if (null != p) {
                                            let { allEmojis: t } = (0, ep.W)({ topEmojis: I, newlyAddedEmojis: y });
                                            t.length > 0 &&
                                                g(t, {
                                                    categoryId: e,
                                                    guild: J.A.getGuild(p.id),
                                                    type: eq.s.TOP_GUILD_EMOJI,
                                                    sectionId: eq.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === eq.R2.RECENT) {
                                        let n = (i === ex.EmojiIntention.REACTION ? E : C).filter(
                                            (e) => !ef.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        g(n, {
                                            categoryId: e,
                                            type: eq.s.RECENT,
                                            sectionId: eq.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === eq.R2.FAVORITES) {
                                        let n = A.filter(
                                            (e) => !ef.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        0 !== n.length &&
                                            g(n, {
                                                categoryId: e,
                                                type: eq.s.FAVORITES,
                                                sectionId: eq.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = e0.Ay.getByCategory(e);
                                        null != t &&
                                            g(t, {
                                                categoryId: e,
                                                type: eq.s.UNICODE,
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
                    emojiPaddingHorizontal: n2,
                    emojiSpriteSize: f,
                    shouldShowSoundmojiInEmojiPicker: Z,
                    showOnlyUnicode: Y,
                }),
                { newlyAddedEmojis: e$ } = (0, eg.A)(eS, i);
            (n = r.useRef({ intention: i, isBurstReaction: eN, analyticsObject: ew })),
                r.useEffect(() => {
                    n.current.intention === ex.EmojiIntention.REACTION && eC(n.current);
                }, []);
            let e7 = r.useCallback(() => {
                    let e = e$.length > 0 ? e$[0].id : null;
                    (0, k.uV)(eS, e), eC({ intention: i, isBurstReaction: eN, analyticsObject: ew });
                }, [e$, eS, i, eN, ew]),
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
                                        r.type === eQ.i.GUILD
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
                                      e.subCategory === eq.tm.NEWLY_ADDED_EMOJI &&
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
                                if (e.type === e5.EMOJI) {
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
                                                e.subCategory === eq.tm.NEWLY_ADDED_EMOJI &&
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
                            gridNavigatorId: eq.lq,
                            itemGrid: s,
                            itemList: a,
                            onGridNavigatorItemSelect: m,
                            onGridNavigatorPositionChange: n6,
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
                    emojiGrid: eY,
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
                            n8.cancel(), n7.cancel();
                        }
                    ),
                    [ek, eS, eP, a],
                ),
                (0, C.Ay)(() => ((0, ed.V$)({ intention: i, location: eD }), (eA.current = eE), P.Om.resetStoreState)),
                r.useEffect(() => () => (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                r.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = P.Om.getState().inspectedExpressionPosition;
                    eY[t]?.[e] == null && 0 !== e && P.Om.setInspectedExpressionPosition(0, 0);
                }, [eY]),
                r.useEffect(() => {
                    if (("" === eA.current && "" !== eE && (0, ed.EG)(eD, i), "" !== eE && eA.current !== eE)) {
                        let e = P.Om.getAnalyticsId();
                        0 === eF
                            ? n8({ location: eD, searchQuery: eE, intention: i, loadId: e })
                            : n7({
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
                ? (l = (0, s.jsx)(n1.default, {
                      onUpsellClicked: e9,
                      emojiDescriptor: eh.emojiDescriptor,
                      pickerIntention: i,
                      analyticsLocation: eD,
                      onClose: () => em(null),
                      channel: a,
                  }))
                : eh?.type === e8.ROLE_SUBSCRIPTION
                  ? (l = (0, s.jsx)(el, { onClose: () => em(null), guildId: eh.guildId, emojiId: eh.emojiId }))
                  : eN && !ej && (l = (0, s.jsx)(eR, { onDismiss: () => e_(!1) }));
            let ta = (0, s.jsx)(tX, {
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
                    headerClassName: O,
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
                    id: eq.Do,
                    "aria-labelledby": N ? eq.k1 : void 0,
                    role: N ? "tabpanel" : void 0,
                    className: o()(t$.iE, { [t$.r6]: N, [t$.cB]: eN && ej }),
                    children: [
                        N ? null : ta,
                        (0, s.jsxs)("div", {
                            className: o()(t$.Fb, M),
                            onScroll: n5,
                            children: [
                                N ? ta : null,
                                (0, s.jsxs)("div", {
                                    className: t$.uK,
                                    ref: eI,
                                    children: [
                                        (0, s.jsx)(n0, { channel: a, closePopout: c }),
                                        (0, s.jsx)(v.Ay, {
                                            contentTypes: to,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(tg, { markAsDismissed: () => n(tf.i.UNKNOWN) });
                                            },
                                        }),
                                        H
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: t$.Iy,
                                                  id: eq.lq,
                                                  ...tn,
                                                  children: tr
                                                      ? (0, s.jsx)(nH, {
                                                            collapsedSections: eB,
                                                            diversitySurrogate: eG,
                                                            emojiGrid: eY,
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
                                                            rowCount: eY.length,
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
                                (0, s.jsx)(t5, {
                                    emojiGrid: eY,
                                    className: t$.qV,
                                    guildId: eS,
                                    pickerIntention: i,
                                    channel: a,
                                }),
                                l,
                            ],
                        }),
                        H
                            ? null
                            : (0, s.jsx)(tm, {
                                  className: o()(t$.jv, z),
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
