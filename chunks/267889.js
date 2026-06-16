"use strict";
n.d(t, { A: () => n7 }), n(321073);
var l,
    i,
    s = n(627968),
    r = n(64700),
    a = n(503698),
    o = n.n(a),
    c = n(111956),
    u = n.n(c),
    d = n(788413),
    h = n(17928),
    m = n(554146),
    p = n(319060),
    f = n(305866),
    g = n(554375),
    x = n(820284),
    A = n(212245),
    E = n(964486),
    C = n(793574),
    I = n(95561),
    y = n(688810),
    S = n(379848),
    v = n(159273),
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
class w extends h.Ay.PersistedStore {
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
let L = new w(T.h, {
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
    V = n(464651),
    G = n(562708),
    F = n(462887),
    H = n(939249),
    B = n(789645),
    W = n(696986),
    K = n(534514),
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
    en = n(271019);
function el(e) {
    let t,
        { onClose: l, guildId: i, emojiId: r } = e,
        a = ((t = (0, Z.Ay)()), (0, F.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, y.Ay)(C.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, Y.A)({
        type: G.ImpressionTypes.MODAL,
        name: G.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: i, emoji_id: r ?? null },
    });
    let c = (0, h.bG)([J.A], () => J.A.getGuild(i)),
        u = (0, h.bG)([$.A], () => null != i && $.A.getUserSubscriptionRoles(i).size > 0),
        d = u ? et.intl.string(et.t.GoLM9z) : et.intl.formatToPlainString(et.t["h0u/Hi"], { serverName: c?.name }),
        m = u ? et.intl.string(et.t.PjZ7Db) : et.intl.string(et.t.p8FG1D);
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
                        onClick: () => {
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
    ec = n(474090),
    eu = n(240248),
    ed = n(822123),
    eh = n(734057),
    em = n(309010),
    ep = n(690521),
    ef = n(818645),
    eg = n(316884),
    ex = n(307731),
    eA = n(698279);
function eE(e) {
    let { intention: t, containerWidth: n, rowSize: l, isBurstReaction: i, analyticsObject: s } = e,
        r = eh.A.getChannel(em.A.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === ex.EmojiIntention.REACTION
                ? v.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : v.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? v.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === ex.EmojiIntention.REACTION
                ? v.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : v.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        h = null != a ? v.Ay.getGuildEmoji(a) : [],
        m = v.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: p, newlyAddedEmojis: f } = (0, eg.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: x } = (0, ef.W)({
            topEmojis: p,
            newlyAddedEmojis: f,
            rowSize: l,
        });
    I.Ay.trackWithMetadata(
        t === ex.EmojiIntention.REACTION ? Q.HAw.REACTION_PICKER_OPENED : Q.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eA.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(ep.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(ep.Ay.isCustomEmoji).length,
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
var eC = n(403581),
    eI = n(775602),
    ey = n(607470),
    eS = n(422936),
    ev = n(234419),
    eN = n(725807),
    e_ = n(811611),
    eT = n(788868),
    ej = n(151867);
function eb(e) {
    let { onDismiss: t } = e,
        n = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        l = et.intl.string(et.t.eikz43),
        i = (0, ev.V)(),
        r = (0, eS.O)(),
        a = i?.subscription_trial != null || null != r,
        c = { object: Q.ZSU.BUTTON_CTA, section: Q.JJy.SUPER_REACTION_PICKER };
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
                              subscriptionTier: i?.subscription_trial?.sku_id ?? eT.pe.TIER_2,
                              headingText: et.intl.string(et.t.Wfl5zp),
                              analyticsLocationObject: c,
                              discountOffer: r,
                              trialOffer: i,
                              children: l,
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: ej.wx,
                                      children: [
                                          (0, s.jsx)(eC.t, {
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
var eR = n(735438),
    eO = n.n(eR),
    eM = n(837381),
    ew = n(460905),
    eL = n(802019),
    ek = n(407698),
    eP = n(531685),
    eD = n(406810),
    eU = n(27232),
    eV = n(369606),
    eG = n(413249),
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
        l = ((e) => {
            switch (e) {
                case eY.R2.RECENT:
                    return eD.O;
                case eY.R2.FAVORITES:
                    return eU.G;
                case eY.R2.TOP_GUILD_EMOJI:
                    return eV.O;
                case eY.R2.PEOPLE:
                    return ew.n;
                case eY.R2.NATURE:
                    return eG.p;
                case eY.R2.FOOD:
                    return eF.i;
                case eY.R2.ACTIVITY:
                    return eH._;
                case eY.R2.TRAVEL:
                    return eB.h;
                case eY.R2.OBJECTS:
                    return eW.D;
                case eY.R2.SYMBOLS:
                    return eK.C;
                case eY.R2.FLAGS:
                    return ez.i;
                case eY.R2.PREMIUM_UPSELL:
                    return eC.t;
                case eY.R2.SOUNDMOJI:
                    return eZ.J;
                default:
                    return;
            }
        })(t);
    return null == l ? null : (0, s.jsx)(l, { color: "currentColor", ...n });
});
var eJ = n(724511),
    e$ = n(835245),
    eX = n(770335),
    eQ = n(7584),
    e0 = n(526292),
    e1 = n(926972),
    e2 = n(711014),
    e6 =
        (((l = {})[(l.EMOJI = 0)] = "EMOJI"),
        (l[(l.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (l[(l.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        l);
let e3 = [ex.EmojiDisabledReasons.DISALLOW_EXTERNAL, ex.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e7 = (((i = {})[(i.PREMIUM = 0)] = "PREMIUM"), (i[(i.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), i),
    e4 = n(619182);
let e5 = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e8 = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    e9 = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    te = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tt = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tn = (0, eu.xI)(e4.__invalid_unicodeCategoryShortcutHeight),
    tl = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    ti = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ts = e9 + e8 + 2 * tt,
    tr = e5 + e8,
    ta = tr + (tl + 2 * ti),
    to = e9 + te + 2 * tt;
function tc(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: l,
            categories: i,
            category: a,
            handleCategorySelect: c,
            isWindowFocused: u,
            useReducedMotion: d,
        } = e,
        h = (0, eM.rm)(`expression-guild-${n}`),
        m = a.type === eY.s.GUILD ? null : a.id,
        p = t === n,
        f = a.type === eY.s.GUILD ? a.guild : null,
        g = (0, s.jsxs)(H.D, {
            ...h,
            "aria-label": (0, ed.wt)(a, f),
            className: o()({
                [e4.ZG]: null != f,
                [e4.Bj]: null == f,
                [e4.s6]: null == f && p,
                [e4.xg]: a.type === eY.s.RECENT,
            }),
            onClick: () => {
                null != f &&
                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: l?.location,
                        tab: eA.kx.EMOJI,
                        guild_id: f.id,
                    }),
                    c(n);
            },
            children: [
                null != f
                    ? (0, s.jsx)(eJ.A, { guild: f, isSelected: p, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == f && null != m
                    ? (0, s.jsx)(eq, { categoryId: m, className: e4.Yl, height: e9, width: e9, size: "custom" })
                    : null,
            ],
        }),
        x = i[n + 1],
        A = null != x && a.type === eY.s.GUILD && x.type !== eY.s.GUILD;
    return null != f
        ? (0, s.jsxs)(r.Fragment, {
              children: [
                  (0, s.jsx)(ek.Q, { guild: f, children: (0, s.jsx)("div", { children: g }) }),
                  A ? (0, s.jsx)("hr", { className: e4.ny }, "separator") : null,
              ],
          })
        : g;
}
let tu = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: l,
            intention: i,
            channel: a,
            fallbackGuildId: c,
            shouldShowSoundmojiInEmojiPicker: u = !1,
            showOnlyUnicode: d = !1,
        } = e,
        m = P.Om.useStore((e) => e.activeCategoryIndex),
        p = ((e) => {
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
        f = (0, A.p)(),
        g = (0, ed.ss)(i, a, a?.guild_id ?? c, u),
        x = r.useMemo(() => (d ? (0, ed.CQ)() : g), [g, d]),
        E = r.useRef(null),
        C = (0, h.bG)([eP.A], () => eP.A.isFocused()),
        I = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion, []),
        y = r.useMemo(
            () =>
                eO().memoize((e, t) => {
                    let n = x[t];
                    if (null != n)
                        return (0, s.jsx)(
                            tc,
                            {
                                activeIndex: m,
                                analyticsContext: f,
                                categories: x,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: p,
                                isWindowFocused: C,
                                useReducedMotion: I,
                            },
                            t,
                        );
                }),
            [m, f, x, p, C, I],
        ),
        S = r.useMemo(() => [8, 8, 0, 8], []),
        v = r.useCallback(
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
                let t = E.current?.getListDimensions();
                null == t || (e + t.height - tl >= T ? R(!1) : R(!0));
            },
            [T],
        ),
        M = r.useCallback(
            (e) => {
                e(_), E.current?.scrollTo(T);
            },
            [T, _],
        ),
        w = r.useCallback(
            (e, t) => {
                let n = x[e];
                if (null == n) return 0;
                let l = b ? tn : 0;
                if (n.type === eY.s.RECENT) return t ? 0 : te;
                if (n.type === eY.s.GUILD) {
                    let n = x[e + 1];
                    return null != n && n.type !== eY.s.GUILD ? (t ? tl + -2 * ti + e8 + l : e8) : t ? l : e8;
                }
                return t ? e8 + l : 2 * e8;
            },
            [x, b],
        ),
        L = r.useMemo(
            () =>
                function (e, t) {
                    return (0, s.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        k = b ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(eL.A, {
        categoryListRef: E,
        expressionsListRef: n,
        className: t,
        store: P.Om,
        categories: x,
        listPadding: S,
        onScroll: O,
        renderCategoryListItem: y,
        renderSection: L,
        rowCount: x.length,
        categoryHeight: v,
        getScrollOffsetForIndex: w,
        rowCountBySection: j,
        children: (e) =>
            N >= 7 &&
            (0, s.jsx)(
                H.D,
                {
                    "aria-hidden": !b,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: o()(e4.KB, { [e4.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => M(e),
                    children: (0, s.jsx)(ew.n, { size: "custom", color: "currentColor", height: e9, width: e9 }),
                },
                k,
            ),
    });
};
var td = n(49999),
    th = n(868836);
let tm = (e) => {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: th.iE,
        children: [
            (0, s.jsx)(eK.C, { size: "md", color: "currentColor", className: th.Kk }),
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
var tp = n(922139),
    tf = n(459192),
    tg = n(717421),
    tx = n(343032),
    tA = n(131607),
    tE = n(428262),
    tC = n(337889);
let tI = { tension: 750, mass: 2.5, friction: 70 };
function ty(e) {
    let { checked: t, onClick: n } = e,
        l = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        i = ea.default.getCurrentUser(),
        a = null != i && !(0, tE.TW)(i),
        c = a ? [] : [m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [u, d] = (0, tA.kn)(c),
        [p, f] = r.useState(!1),
        [g, x] = (0, tg.z)(() => ({})),
        A = (0, tp.animated)(tx.i);
    r.useEffect(() => {
        let e = u === m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (d(td.i.DISMISS), setTimeout(() => f(e), 200));
    }, [u, d]);
    let E = p ? et.intl.string(et.t["Osi/uy"]) : t && !a ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        C = p ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, s.jsx)(tf.u, {
        position: "top",
        title: C,
        body: E,
        asset: (0, s.jsx)(eC.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: p,
        children: (0, s.jsx)(H.D, {
            "aria-label": E,
            "aria-pressed": t,
            onClick: function () {
                x({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tI }),
                    n?.(),
                    f(!1);
            },
            focusProps: { enabled: !1 },
            className: o()(tC.Pf, { [tC.wM]: t }),
            children: (0, s.jsx)(A, {
                style: l ? void 0 : g,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tC.Kk,
            }),
        }),
    });
}
var tS = n(821609),
    tv = n(644508),
    tN = n(824832),
    t_ = n(638263);
function tT(e) {
    let { channel: t } = e,
        n = r.useRef(null),
        l = r.useRef(0),
        [i, a] = r.useState(!1),
        [o, c] = r.useState(!1),
        u = o || i,
        d = r.useCallback(
            async (e, n, i) => {
                c(!0),
                    await (0, tv.f)({
                        userImage: { data: e, file: n, image: i },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: Q.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                        },
                    }),
                    (l.current += 1),
                    c(!1);
            },
            [t],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tS.$, {
                text: et.intl.string(et.t.iMJO37),
                variant: "secondary",
                onClick: () => {
                    n.current?.activateUploadDialogue();
                },
                disabled: u,
            }),
            (0, s.jsx)("div", {
                className: t_.F,
                children: (0, s.jsx)(tN.Ay, { ref: n, onChange: d, setLoading: a, disabled: u }, l.current),
            }),
        ],
    });
}
n(667532);
var tj = n(833272),
    tb = n(82495),
    tR = n(260762),
    tO = n(915089),
    tM = n(650583),
    tw = n(46274);
let tL = (0, tO.Ld)(),
    tk = tj.A.convert.fromCodePoint("1f44f"),
    tP = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tD(e) {
    switch (tj.A.convert.toCodePoint(e)) {
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
let tU = (e) => {
        let { fade: t, surrogate: n, onClick: l, delay: i, index: r } = e,
            a = (0, eM.rm)(`item-${r}`),
            o = ep.Ay.getURL(tk + n),
            c = (0, tg.z)({ opacity: 1, from: { opacity: +!t }, delay: i }, "animate-always");
        return (0, s.jsx)(H.D, {
            ...a,
            role: "option",
            "aria-selected": 0 === r,
            onClick: () => l(n),
            className: tw.B6,
            children: (0, s.jsx)(tp.animated.div, {
                "aria-label": tD(n),
                className: tw.g4,
                style: { backgroundImage: `url("${o}")`, ...c },
            }),
        });
    },
    tV = (e) => {
        let { id: t, selectedSurrogate: n, onClick: l } = e,
            i = (0, tR.A)("diversity"),
            a = (0, tg.z)({
                height: (tP + 14) * (eQ.W$.length + 1),
                from: { height: tP + 14 },
                config: { duration: 125 },
            }),
            o = r.useRef(i);
        r.useEffect(() => {
            o.current.focusFirstVisibleItem();
        }, []);
        let c = ["", ...eQ.W$];
        return (
            eO().remove(c, (e) => e === n),
            c.unshift(n),
            (0, s.jsx)(eM.hD, {
                navigator: i,
                children: (0, s.jsx)(eM.PR, {
                    children: (e) => {
                        let { ref: n, ...i } = e;
                        return (0, s.jsx)(tp.animated.div, {
                            ...i,
                            id: t,
                            ref: n,
                            className: tw.J6,
                            style: a,
                            role: "listbox",
                            children: c.map((e, t) =>
                                (0, s.jsx)(tU, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: l }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    tG = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: l } = e,
            i = ep.Ay.getURL(tk + n),
            [a, c] = r.useState(!1),
            u = (0, tb.A)(null, () => c(!1)),
            d = r.useRef(null);
        return (0, s.jsxs)("div", {
            ref: u,
            className: o()(tw.fx, l),
            children: [
                (0, s.jsx)(H.D, {
                    innerRef: d,
                    className: tw.Dj,
                    onClick: () => {
                        c(!0);
                    },
                    "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tD(n) }),
                    "aria-haspopup": !0,
                    "aria-expanded": a,
                    "aria-controls": tL,
                    tabIndex: a ? -1 : 0,
                    children: (0, s.jsx)("div", { className: tw.g4, style: { backgroundImage: `url("${i}")` } }),
                }),
                a
                    ? (0, s.jsx)("div", {
                          onKeyDown: (e) => {
                              e.key === tM.dh.ESCAPE
                                  ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                                  : "Tab" === e.key && c(!1);
                          },
                          children: (0, s.jsx)(tV, {
                              id: tL,
                              selectedSurrogate: n,
                              onClick: (e) => {
                                  (0, g.dK)(e), c(!1), t.current?.focus();
                              },
                          }),
                      })
                    : null,
            ],
        });
    };
var tF = n(942381),
    tH = n(602034),
    tB = n(892547);
let tW = r.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: l,
                onKeyDown: i,
                onFocus: a,
                autoFocus: o,
                defaultSearchPlaceholder: c,
            } = e,
            u = r.useRef(null),
            d = (0, D.RQ)((e) => e.searchQuery),
            [h, m, p] = P.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tF.x,
            ),
            f = r.useCallback(
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
                f("");
            }, [f]);
        return (
            r.useImperativeHandle(t, () => ({ focus: () => u.current?.focus() })),
            (0, s.jsx)(tB.I, {
                autoFocus: o,
                query: d,
                ref: u,
                placeholder: m ?? c,
                onClear: g,
                onKeyDown: (e) => {
                    switch (e.key) {
                        case tM.dh.ARROW_LEFT:
                        case tM.dh.ARROW_RIGHT:
                        case tM.dh.ARROW_UP:
                        case tM.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    i(e);
                },
                onFocus: a,
                onChange: f,
                inputProps: {
                    "aria-label": et.intl.string(et.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": l,
                    "aria-expanded": !0,
                    ...(p ? { "aria-activedescendant": (0, tH.Aq)(l, h.columnIndex, h.rowIndex) } : void 0),
                },
            })
        );
    }),
    tK = r.memo(tW);
var tz = n(873426);
let tZ = (e) => {
    let {
            channel: t,
            accessory: n,
            pickerIntention: l,
            headerClassName: i,
            emojiListRef: r,
            onKeyDown: a,
            onFocus: c,
            autoFocus: u,
            searchBarRef: d,
            diversitySurrogate: h,
            isBurstReaction: m,
            onBurstReactionToggle: p,
            renderHeader: f,
            showAddEmojiButton: g = !0,
        } = e,
        x = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tK, {
                    emojiListRef: r,
                    gridNavigatorId: eY.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, ed.wT)(l, m),
                }),
                l === ex.EmojiIntention.REACTION ? (0, s.jsx)(ty, { checked: m, onClick: p }) : null,
                n ?? (0, s.jsx)(tG, { searchBarRef: d, className: tz.fx, selectedSurrogate: h }),
                l !== ex.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, s.jsx)(tT, { channel: t }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: o()(tz.wx, i), children: null != f ? f(x) : x });
};
var tY = n(182922),
    tq = n(363195),
    tJ = n(486020),
    t$ = n(854469);
function tX(e) {
    return null != e && "animated" in e;
}
let tQ = r.memo(function (e) {
    let t,
        l,
        i,
        { className: a, emojiGrid: o, guildId: c, pickerIntention: u, channel: d } = e,
        m = P.Om.useStore((e) => e.inspectedExpressionPosition),
        p = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = m;
            return o[e]?.[t];
        }, [o, m]);
    switch (p?.type) {
        case e6.EMOJI:
            t = p?.emoji;
            break;
        case e6.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: p?.guildId, allNamesString: p?.name };
            break;
        case e6.SOUNDMOJI:
        default:
            t = null;
    }
    let f = (0, h.bG)([J.A], () => (null !== t && t.type === eX.i.GUILD ? J.A.getGuild(t.guildId) : null), [t]),
        g = (0, h.bG)([eP.A], () => eP.A.isFocused()),
        x = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion, []),
        A = es.Sf.useSetting(),
        E = (0, ed.O7)(c, tX(t) ? t : null),
        C = (0, h.bG)([v.Ay], () => v.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: I } = (0, eg.A)(c, u),
        y = p?.type === e6.EMOJI ? p.subCategory : eY.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    tX(t) &&
                    y !== eY.tm.NONE &&
                    (y === eY.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eX.i.GUILD &&
                        (0, k.mz)(t.guildId, I[0].id),
                    null != m.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: y,
                            position: p.columnIndex + 1,
                            newlyAddedHighlight: y === eY.tm.NEWLY_ADDED_EMOJI && L.isNewerThanLastSeen(c, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let S = tq.A.theme;
    if (tX(t)) {
        let e = null != t.id ? tJ.Ay.getEmojiURL({ id: t.id, animated: A && t.animated, size: 28 }) : t.url;
        l =
            "" === e
                ? (0, s.jsx)(z.E, {
                      variant: "text-md/normal",
                      className: t$.J_,
                      children: "surrogates" in t ? t.surrogates : null,
                  })
                : (0, s.jsx)("img", { alt: (0, ep.N)(t) ?? "", src: e, className: t$.Zg });
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
        let e = n(619508),
            i = n(404828),
            r = n(600003),
            a = n(318121);
        l = C.has(t.guildId)
            ? (0, s.jsx)("img", { className: t$.Kk, src: (0, F.M)(S) ? r : a, alt: "" })
            : (0, s.jsx)("img", { className: t$.Kk, src: (0, F.M)(S) ? e : i, alt: "" });
    }
    let N =
        null != f ? (0, s.jsx)(eJ.A, { className: t$.__invalid_guildIcon, guild: f, shouldAnimate: !x && g }) : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? C.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, ep.N)(t);
    let _ = ((e) => {
        let { inspectedEmoji: t, guild: n } = e,
            l = tX(t);
        return null != n && l ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: d, guildId: c, intention: u, guild: f });
    return (0, s.jsx)(tY.A, {
        className: a,
        graphicPrimary: l,
        graphicSecondary: N,
        titlePrimary: i,
        titleSecondary: _,
        isFavorite: E,
        emojiSubCategory: y,
    });
});
var t0 = n(607399),
    t1 = n(537652),
    t2 = n(962125),
    t6 = n(240864),
    t3 = n(286509),
    t7 = n(89366),
    t4 = n(202639),
    t5 = n(414872),
    t8 = n(400669),
    t9 = n(909536),
    ne = n(187322),
    nt = n(304072),
    nn = n(189551),
    nl = n(289873),
    ni = n(796774),
    ns = n(209932),
    nr = n(805945),
    na = n(576705);
n(980504);
var no = n(818348),
    nc = n(219920);
let nu = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        { channelId: a, onSelectSoundmoji: o } = e,
        c = (0, h.bG)([ns.A], () => !ns.A.isFetching() && !ns.A.hasFetchedAllSounds(), []),
        u = (0, h.bG)([eh.A], () => eh.A.getChannel(a)),
        d =
            ((t = (0, h.bG)([ea.default], () => tE.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, h.bG)([ns.A], () => ns.A.getSoundsForGuild("0"))),
            (l = (0, h.yK)([J.A], () => J.A.getGuildIds())),
            (i = r.useMemo(() => na.A.can(no.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            r.useMemo(() => {
                let e = [];
                if (t && i) {
                    let t = l.flatMap((e) => ns.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eO().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = ns.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...eO().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eO().sampleSize(n ?? [], 4 - e.length)), e;
            }, [i, u?.guild_id, n, l, t]));
    return (r.useEffect(() => {
        (0, ni.E7)();
    }, [c]),
    0 === d.length)
        ? (0, s.jsx)(nl.y, {})
        : (0, s.jsx)("div", {
              className: nc.q,
              children: d.map((e, t) =>
                  (0, s.jsx)(
                      nr.Ay,
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
var nd = n(594061),
    nh = n(771104),
    nm = n(990078),
    np = n(442433),
    nf = n(147421),
    ng = n(723702),
    nx = n(140735),
    nA = n(194261),
    nE = n(881274);
let nC = (e) => {
    let { src: t, alt: n, size: l, "aria-label": i, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nE.S : nE.Y;
    return (0, s.jsx)("img", {
        className: o()(d, a),
        alt: n,
        src: t,
        ref: c,
        "aria-label": i,
        style: { backgroundSize: l, height: l, width: l },
        onLoad: u.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != c.current &&
                          ((u.current = !0), c.current.classList.remove(nE.Y), c.current.classList.add(nE.S));
                  });
              },
    });
};
var nI = n(297547);
let ny = eO().memoize(
        (e) =>
            `${e * ex.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(eQ.Ay.numNonDiversitySprites / ex.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nS = eO().memoize(
        (e) =>
            `${e * ex.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eQ.Ay.numDiversitySprites / ex.EmojiSprites.DiversityPerRow)}px`,
    ),
    nv = r.memo(function (e) {
        let { emoji: t, size: l, surrogateCodePoint: i, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : tJ.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: ex.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(nC, {
                              className: nI.N1,
                              "aria-label": c,
                              src: e,
                              size: l,
                              alt: (0, ep.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: o()(nI.xA, { [nI.N1]: u }),
                    style: ((e, t, l) => {
                        let i, s, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((i = n(12303)(`./spritesheet-${t}-${l}.png.js`).default),
                              (s = nS(l)),
                              (r = ex.EmojiSprites.DiversityPerRow))
                            : ((i = n(145519)(`./spritesheet-emoji-${l}.png.js`).default),
                              (s = ny(l)),
                              (r = ex.EmojiSprites.NonDiversityPerRow));
                        let o = (-a % r) * l,
                            c = -Math.floor(a / r) * l;
                        return {
                            backgroundImage: `url('${i}')`,
                            backgroundPosition: `${o}px ${c}px`,
                            backgroundSize: s,
                            height: l,
                            width: l,
                        };
                    })(t, i, l),
                    children: (0, s.jsx)(nx.A, { children: c }),
                });
            })();
        return (0, s.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, s.jsx)("div", {
                          className: nI.iD,
                          children: (0, s.jsx)(nA.X, { size: "xs", color: "currentColor", className: nI.fi }),
                      })
                    : null,
            ],
        });
    });
var nN = n(6376);
let n_ = (e, t) => `${e}:${t}`,
    nT = r.forwardRef(function (e, t) {
        let n,
            {
                emoji: l,
                isFavorite: i,
                isLargeSize: r,
                isMediumSize: a,
                isInspected: c,
                isDisabled: u,
                showPulse: d,
                columnIndex: m,
                rowIndex: p,
                size: f,
                surrogateCodePoint: g,
                allowAnimatedEmoji: x,
                selectedItemClassName: A,
                inNitroLockedSection: E,
                ...C
            } = e,
            I = (0, h.bG)([J.A], () => (l.type === eX.i.GUILD ? J.A.getGuild(l.guildId) : void 0), [l]);
        return (0, s.jsx)(ne.vN, {
            children: (0, s.jsx)("button", {
                ...C,
                className: o()(nN._X, { [nN.lG]: r, [nN.Lh]: a, [nN.Bx]: c, [A ?? ""]: c, [nN.TV]: d }),
                "data-type": U.g.EMOJI,
                "data-id": l.id,
                "data-name": l.name,
                "data-surrogates": "surrogates" in l ? l.surrogates : null,
                "data-animated": l.animated ? "true" : null,
                ref: t,
                children: (0, s.jsx)(nv, {
                    "aria-label":
                        ((n = (0, ep.N)(l)),
                        (I?.name != null &&
                            (n = et.intl.formatToPlainString(et.t["nXv4/B"], { names: n, guildName: I.name })),
                        i)
                            ? et.intl.formatToPlainString(et.t["9FI9Z0"], { names: n })
                            : n),
                    columnIndex: m,
                    rowIndex: p,
                    emoji: l,
                    size: f,
                    surrogateCodePoint: g,
                    allowAnimatedEmoji: x,
                    isLocked: u && !E,
                }),
            }),
        });
    });
function nj(e) {
    let {
            descriptor: t,
            emojiItemKey: l,
            isInspected: i,
            rowIndex: a,
            channelGuildId: o,
            onInspect: c,
            onSelect: u,
            isScrolling: d,
            isUsingKeyboardNavigation: m,
            showEmojiFavoriteTooltip: p,
            surrogateCodePoint: f,
            selectedItemClassName: g,
            getEmojiItemProps: x,
            isMediumSize: A,
            isLargeSize: E,
            pulseItemKey: C,
            allowAnimatedEmoji: I,
            setPulseItemKey: y,
            messageId: S,
            isBurstReaction: N,
            rowPosition: _,
            inNitroLockedSection: T,
        } = e,
        [j, b] = r.useState(""),
        R = (0, h.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        O = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: w, size: L, isDisabled: k, columnIndex: P } = t,
        D = () => {
            d.current || m.current || c(t);
        },
        { ref: U, tabIndex: V, onFocus: G, ...F } = x(P, a) ?? {},
        H =
            j !== n_(P, a)
                ? (0, s.jsx)(nT, {
                      ref: U,
                      emoji: w,
                      isFavorite: O.isFavoriteEmojiWithoutFetchingLatest(w),
                      isLargeSize: E,
                      isMediumSize: A,
                      isInspected: i,
                      isDisabled: k,
                      showPulse: C === l,
                      allowAnimatedEmoji: I,
                      onFocus: G ?? D,
                      onMouseMove: D,
                      onClick: (e) => {
                          if (
                              null != M.current &&
                              null != _ &&
                              null != S &&
                              !e.shiftKey &&
                              null != w.name &&
                              N &&
                              !R &&
                              I
                          ) {
                              let e = null == w.id ? eQ.Ay.convertNameToSurrogate(w.name) : w.name,
                                  t = M.current.getBoundingClientRect();
                              (t.x = _.x + (P + 1) * L), b(n_(P, a)), (0, nf.h)(S, e, w.id, t);
                          }
                          ((e) => {
                              if ((e.stopPropagation(), d.current || m.current)) return;
                              let n = e.altKey;
                              n && !v.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(w) && y(l),
                                  (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: (e) => {
                          (0, np.L3)(e, async () => {
                              let { default: e } = await Promise.all([n.e("4774"), n.e("46132")]).then(
                                  n.bind(n, 233503),
                              );
                              return (t) => (0, s.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: V,
                      columnIndex: P,
                      rowIndex: a,
                      size: L,
                      surrogateCodePoint: f,
                      selectedItemClassName: g,
                      inNitroLockedSection: T,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...F, key: l, ref: M },
        p
            ? (0, s.jsx)(nm.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, ng.isMac)() ? "Opt" : "Alt" }),
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
            emojiSize: l,
            onSelect: i,
            onSelectSoundmoji: a,
            onInspect: c,
            surrogateCodePoint: u,
            getEmojiItemProps: d,
            getEmojiRowProps: h,
            isScrolling: m,
            isUsingKeyboardNavigation: p,
            rowIndex: f,
            allowAnimatedEmoji: g,
            showEmojiFavoriteTooltip: x,
            channelGuildId: A,
            category: E,
            selectedItemClassName: C,
            channelId: I,
            messageId: y,
            isBurstReaction: S,
            inNitroLockedSection: v,
            handleScrollUpOnSectionCollapse: N,
        } = e,
        _ = n(619508),
        T = n(404828),
        j = n(600003),
        b = n(318121),
        R = n(443336),
        O = n(258901),
        M = n(135974),
        w = n(8013),
        k = (0, Z.Ay)(),
        D = P.Om.getState(),
        [U, V] = r.useState(D.inspectedExpressionPosition),
        [G, H] = (0, nt.A)(null, 300),
        B = r.useRef(null);
    r.useEffect(
        () =>
            P.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => V(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nd.bW.loadIfNecessary();
        }, []);
    let W = l === eY.as.LARGE,
        K = l === eY.as.MEDIUM,
        Y = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`;
            switch (e.type) {
                case e6.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: l } = e,
                        a = U.rowIndex === n && U.columnIndex === l,
                        u = e.sectionCollapsedToThreeRows
                            ? a
                                ? (0, F.M)(k)
                                    ? O
                                    : w
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
                                ariaLabel: u,
                                shouldShowRoundHighlight: h,
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            { visibleRowIndex: g, columnIndex: x } = e,
                            { ref: A, tabIndex: E, onFocus: I, ...y } = d(x, f) ?? {},
                            S = U.rowIndex === g && U.columnIndex === x,
                            v = () => {
                                m.current || p.current || c(e);
                            };
                        return (0, r.createElement)(
                            "li",
                            { ...y, key: t },
                            (0, s.jsx)(ne.vN, {
                                children: (0, s.jsx)("button", {
                                    "aria-label": u,
                                    ref: A,
                                    className: o()(nN._X, {
                                        [nN.lG]: W,
                                        [nN.Lh]: K,
                                        [nN.Bx]: S && !h,
                                        [C ?? ""]: S,
                                        [nN.TV]: G === t,
                                    }),
                                    onFocus: I ?? v,
                                    onMouseOver: v,
                                    onMouseEnter: n,
                                    onMouseLeave: l,
                                    onClick: i,
                                    tabIndex: E,
                                    children: a,
                                }),
                            }),
                        );
                    })({
                        handleSelect: (t) => {
                            t.stopPropagation(),
                                m.current ||
                                    p.current ||
                                    (i(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                    (0, nn.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || N(),
                                    eo.default.track(Q.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        icon: (0, s.jsx)("img", { className: nN.Kk, src: u, alt: "" }),
                        ariaLabel: h,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case e6.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: l } = e,
                        r = U.rowIndex === l && U.columnIndex === n;
                    return (0, s.jsx)(
                        nj,
                        {
                            rowIndex: f,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: r,
                            isScrolling: m,
                            isUsingKeyboardNavigation: p,
                            surrogateCodePoint: u,
                            allowAnimatedEmoji: g,
                            selectedItemClassName: C,
                            onSelect: i,
                            onInspect: c,
                            channelGuildId: A,
                            getEmojiItemProps: d,
                            isMediumSize: K,
                            isLargeSize: W,
                            pulseItemKey: G,
                            setPulseItemKey: H,
                            showEmojiFavoriteTooltip: x,
                            messageId: y,
                            isBurstReaction: S,
                            rowPosition: B?.current?.getBoundingClientRect(),
                            inNitroLockedSection: v,
                        },
                        t,
                    );
                }
                case e6.SOUNDMOJI:
                    return;
            }
        },
        q = (e) =>
            (0, s.jsx)("ul", {
                ...h(f),
                className: o()(nN.ND, { [nN.HO]: W, [nN.X$]: K }),
                ref: B,
                children: e.map(Y),
            });
    if (E === eY.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nN.ND,
            ref: B,
            children: (0, s.jsx)(nu, { channelId: I, onSelectSoundmoji: a }),
        });
    if (E !== eY.s.TOP_GUILD_EMOJI) return q(t);
    let J = t.filter(
            (e) =>
                e.subCategory === eY.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eX.i.GUILD &&
                    !L.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        $ = t.filter(
            (e) =>
                e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eX.i.GUILD &&
                L.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === $.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nN.Ng,
              children: [
                  (0, s.jsx)("div", { className: o()(nN.V6, { [nN.$3]: 0 === J.length }), children: q(J) }),
                  (0, s.jsxs)("div", {
                      className: nN.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(nN.eE, { [nN.eM]: 1 === $.length, [nN.Wk]: J.length > 0 }),
                              children: q($),
                          }),
                          (0, s.jsxs)("div", {
                              className: o()(nN.lD, { [nN.EI]: W, [nN.qU]: K, [nN.Wk]: J.length > 0 }),
                              children: [
                                  (0, s.jsx)(nh.A, { foreground: nN.rI }),
                                  (0, s.jsx)(z.E, {
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
var nR = n(98090);
let nO = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nM = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nw = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nL = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nk = (0, eu.xI)(p.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nP = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nD = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nU = r.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: l,
                emojiGrid: i,
                emojiListRef: a,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                setUpsellConfigs: m,
                sectionDescriptors: p,
                rowCountBySection: f,
                collapsedSections: g,
                setCollapsedSections: x,
                getEmojiItemProps: E,
                getEmojiRowProps: I,
                rowCount: S,
                isUsingKeyboardNavigation: v,
                channelGuildId: N,
                channelId: _,
                messageId: T,
                isBurstReaction: j,
                listHeaderClassName: b,
            } = e,
            R = r.useRef(!1),
            O = P.Om.useStore((e) => e.activeCategoryIndex),
            M = (0, D.RQ)((e) => e.searchQuery),
            w = es.Sf.useSetting(),
            L = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
            k = (0, ec.ki)(L),
            G = (0, t9.St)("emoji_picker_floating_upsell"),
            { location: F } = (0, A.p)(),
            { analyticsLocations: B } = (0, y.Ay)(),
            [W, K] = r.useState(0),
            [z, Z] = r.useState(!1),
            {
                listPadding: Y,
                renderRow: q,
                renderSection: J,
                renderSectionHeader: $,
                renderSectionFooter: X,
                sectionMarginBottom: ee,
                sectionHeaderHeight: en,
                sectionFooterHeight: el,
            } = ((e) => {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: l,
                        emojiSize: i,
                        onEmojiSelect: a,
                        onSelectSoundmoji: c,
                        searchQuery: u,
                        sectionDescriptors: d,
                        setCollapsedSections: m,
                        getEmojiItemProps: p,
                        getEmojiRowProps: f,
                        isScrolling: g,
                        isUsingKeyboardNavigation: x,
                        allowAnimatedEmoji: E,
                        channelGuildId: C,
                        channelId: I,
                        messageId: y,
                        isBurstReaction: S,
                        listHeaderClassName: v,
                        activeSectionIndex: N,
                        emojiListRef: _,
                    } = e,
                    T = (0, A.p)(),
                    j = r.useRef(Q.An1),
                    b = r.useMemo(() => ("" !== n ? tj.A.convert.toCodePoint(n) : ""), [n]),
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
                    w = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            l = e.type === e6.SOUNDMOJI ? null : e.type === e6.EMOJI ? (0, ep.N)(e.emoji) : e.name;
                        j.current !== Q.An1 && window.cancelAnimationFrame(j.current),
                            (j.current = window.requestAnimationFrame(() => {
                                P.Om.setInspectedExpressionPosition(t, n, U.t.MOUSE_EVENT),
                                    P.Om.setSearchPlaceholder(l),
                                    (j.current = Q.An1);
                            }));
                    }, []),
                    L = (0, h.bG)([ei.HP], () => ei.HP.hasHotspot(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                    k = r.useMemo(
                        () =>
                            eO().memoize((e, t) => {
                                let n = l[e],
                                    r = d[t.sectionIndex];
                                return (0, s.jsx)(
                                    nb,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: i,
                                        surrogateCodePoint: b,
                                        onInspect: w,
                                        onSelect: a,
                                        onSelectSoundmoji: c,
                                        getEmojiItemProps: p,
                                        getEmojiRowProps: f,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: x,
                                        rowIndex: e,
                                        allowAnimatedEmoji: E,
                                        showEmojiFavoriteTooltip: L,
                                        channelGuildId: C,
                                        category: r.sectionId,
                                        selectedItemClassName: nR.__invalid_selectedItem,
                                        channelId: I,
                                        messageId: y,
                                        isBurstReaction: S,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: () => {
                                            _.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [l, d, i, b, w, a, c, p, f, g, x, E, L, C, I, y, S, _],
                    );
                r.useEffect(() => () => k.cache?.clear?.(), [k]);
                let V = r.useMemo(
                        () =>
                            eO().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: l, categoryId: i, type: r, sectionId: a } = n;
                                if (r === eY.s.SEARCH_RESULTS) return;
                                let c =
                                        r === eY.s.GUILD
                                            ? null != l
                                                ? (0, s.jsx)(eJ.A, { guild: l, height: 16, width: 16 })
                                                : null
                                            : null != i
                                              ? (0, s.jsx)(eq, { categoryId: i, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = l?.name;
                                null != i && (u = (0, ed.Nu)(i, l?.name));
                                let h = N === e,
                                    m = n.isNitroLocked,
                                    p = m && !h,
                                    f = m && h,
                                    g =
                                        r === eY.s.SOUNDMOJI
                                            ? (0, s.jsx)(H.D, {
                                                  className: nR.f3,
                                                  onClick: () => {
                                                      (0, D.U)(eA.kx.SOUNDBOARD),
                                                          eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t3.A,
                                    {
                                        className: o()(nR.wx, v, { [nR.RA]: p, [nR.sp]: f }),
                                        icon: c,
                                        isCollapsed: t.has(a),
                                        onClick: () => M(a, l),
                                        trailing: g,
                                        children: u,
                                    },
                                    a,
                                );
                            }),
                        [d, t, M, v, N],
                    ),
                    G = (0, e0.k0)(),
                    F = r.useCallback(
                        (e, n) => {
                            let l = d[e],
                                i = O(e),
                                r = R(e);
                            return (0, s.jsx)(
                                "div",
                                {
                                    className: o()(nR.Wy, {
                                        [nR.YD]: e === d.length - 1,
                                        [nR.jl]: t.has(l.sectionId),
                                        [nR.cW]: l.isNitroLocked,
                                        [nR.T5]: i || r,
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
                                ? G
                                    ? (0, s.jsx)(t5.ap, {})
                                    : (0, s.jsx)(t5.Ay, {})
                                : R(e)
                                  ? (0, s.jsx)("div", { className: nR.pQ })
                                  : null,
                        [O, R, G],
                    ),
                    W = r.useCallback((e) => (O(e) ? 41 : 33 * !!R(e)), [O, R]),
                    K = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || O(e) || R(e) ? 0 : nP),
                        [t, d, O, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? nL : nO, nM, nw, 0], [u]),
                    renderRow: k,
                    renderSection: F,
                    renderSectionHeader: V,
                    renderSectionFooter: B,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === eY.s.SEARCH_RESULTS ? 0 : nk), [d]),
                    sectionFooterHeight: W,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: l,
                emojiGrid: i,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                searchQuery: M,
                sectionDescriptors: p,
                setCollapsedSections: x,
                getEmojiItemProps: E,
                getEmojiRowProps: I,
                isScrolling: R,
                isUsingKeyboardNavigation: v,
                allowAnimatedEmoji: w,
                channelGuildId: N,
                channelId: _,
                messageId: T,
                isBurstReaction: j,
                listHeaderClassName: b,
                activeSectionIndex: W,
                emojiListRef: a,
            }),
            er = (0, V.Fk)({
                activeCategoryIndex: O,
                isScrolling: R,
                listRef: a,
                onActiveCategoryIndexChange: (e) => {
                    K(e), "" === M && P.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: M,
                disableForSearch: !1,
            });
        (0, V.FV)({ searchQuery: M, activeCategoryIndex: O, listRef: a });
        let eu = r.useCallback(
                (e) => {
                    er(e),
                        nV({ emojiListRef: a, sectionDescriptors: p, scrollTop: e, searchQuery: M, setShowUpsell: Z });
                },
                [er, a, p, M, Z],
            ),
            eh = p.length > 0;
        return (
            r.useEffect(() => {
                z &&
                    eo.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: eT.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: F,
                        location_stack: B,
                    });
            }, [F, B, z]),
            r.useEffect(() => {
                "" !== M && Z(!1);
            }, [M]),
            (0, s.jsxs)("div", {
                className: nR.AD,
                children: [
                    eh
                        ? (0, s.jsx)(t2.A, {
                              role: "none presentation",
                              className: nR.p_,
                              listPadding: Y,
                              onScroll: eu,
                              renderRow: q,
                              renderSection: J,
                              renderSectionHeader: $,
                              renderSectionFooter: X,
                              rowCount: S,
                              rowCountBySection: f,
                              rowHeight: c + 2 * nD,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: ee,
                              sectionFooterHeight: el,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, s.jsx)(t1.A, { message: et.intl.string(et.t.IxxiKF), className: nR.BZ }),
                    k || t0.Fr
                        ? null
                        : (0, s.jsx)(t4.d, {
                              showUpsell: z,
                              text:
                                  ((t = (0, tE.Dd)(eT.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          m({ type: e7.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t7.qD)()), (0, tE.LE)(n, eT.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: Q.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: G
                                  ? (0, s.jsx)(t8.l, {
                                        size: "sm",
                                        className: nR.ij,
                                        location: C.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
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
var nG = n(506774),
    nF = n(349288),
    nH = n(753390),
    nB = n(404374),
    nW = n(780964),
    nK = n(766075),
    nz = n(166403),
    nZ = n(542863);
let nY = "premiumRetentionEmojiPickerNotice",
    nq = nG.w.get(nY),
    nJ = (e) => {
        let { closePopout: t, channel: n } = e,
            [l, i] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, h.cf)([nz.A], () => ({
                subscription: nz.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nz.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, nH.hP)();
            }, [o]),
            null == a || !(0, tE.PK)(a.status) || l)
        )
            return null;
        let c = a.status === Q.Dmq.PAST_DUE ? (0, tE.ji)(a).expiresDate : _()(a.currentPeriodStart).add(eT.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (nq === u) return null;
        let d =
            tE.Ay.getPremiumType(a.planId) === eT.PremiumTypes.TIER_0
                ? nB.k0.PREMIUM_TIER_0
                : tE.Ay.getPremiumType(a.planId) === eT.PremiumTypes.TIER_1
                  ? nB.k0.PREMIUM_TIER_1
                  : nB.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)("div", {
            className: nZ.g$,
            children: [
                (0, s.jsx)(eC.t, { size: "md", className: nZ.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: nZ.Xn,
                    children: [
                        (0, s.jsx)(z.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: tE.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nF.Anchor, {
                                onClick: () => {
                                    (0, ed.xf)(n), t(), (0, nK.openUserSettings)(nW.X.NITRO_PANEL);
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(H.D, {
                    onClick: () => {
                        nG.w.set(nY, u), (nq = u), i(!0);
                    },
                    children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: nZ.YF }),
                }),
            ],
        });
    };
var n$ = n(148361);
let nX = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    nQ = (0, eu.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    n0 = (e) => e.stopPropagation(),
    n1 = (e, t) => {
        P.Om.setInspectedExpressionPosition(e, t, U.t.GRID_NAVIGATOR_EVENT);
    },
    n2 = u()(ed.bo, 200),
    n6 = u()(ed.Wi, 200),
    n3 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n7 = r.memo(
        r.forwardRef(function (e, t) {
            let n,
                l,
                {
                    pickerIntention: i,
                    channel: a,
                    guildId: c,
                    closePopout: u,
                    emojiSize: p = eY.as.MEDIUM,
                    hasTabWrapper: N = !1,
                    onSelectEmoji: _,
                    onSelectSoundmoji: T,
                    containerWidth: j,
                    onNavigateAway: b,
                    persistSearch: R,
                    className: O,
                    headerClassName: M,
                    analyticsOverride: w = n3,
                    searchProps: G = {},
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
                { onFocus: $, onKeyDown: X, autoFocus: ee = !0, accessory: en } = G,
                eu = (0, h.bG)([er.Ay], () => (null != c ? er.Ay.getDefaultChannel(c) : null), [c]),
                [eh, em] = r.useState(null),
                eA = r.useRef(""),
                eC = (0, D.RQ)((e) => e.searchQuery),
                eI = r.useRef(null),
                ey = r.useRef(null),
                eS = r.useRef(null);
            null == a && null != eu && (a = eu);
            let ev = a?.getGuildId() ?? c ?? null,
                [eN, e_] = r.useState(!1),
                eT = ea.default.getCurrentUser(),
                ej = (0, ec.ki)(eT);
            r.useImperativeHandle(t, () => ({ onPickerOpen: e5 }));
            let { location: eR } = (0, A.p)(),
                { page: eM, section: ew, object: eL, openPopoutType: ek, popoutLocation: eP } = w,
                eD = r.useMemo(() => ({ ...eR, section: ew ?? Q.JJy.EMOJI_PICKER_POPOUT }), [eR, ew]),
                { analyticsLocations: eU } = (0, y.Ay)(C.A.EMOJI_PICKER),
                { diversitySurrogate: eV } = (0, h.cf)([v.Ay], () => ({ diversitySurrogate: v.Ay.diversitySurrogate })),
                eG = (0, ed.sL)(eC, a, i, Y),
                eF = null == eG ? 0 : eG.locked.length + eG.unlocked.length,
                eH = es.iM.useSetting(),
                eB = r.useMemo(() => new Set(eH), [eH]),
                eW = r.useCallback((e) => {
                    es.iM.updateSetting(Array.from(e));
                }, []),
                eK = (0, V.oV)({ gridWrapperRef: eI, containerWidth: j, listPaddingLeft: nQ, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: ez,
                    sectionDescriptors: eZ,
                    emojiGrid: eq,
                    columnCounts: eJ,
                } = ((e) => {
                    let {
                            channel: t,
                            fallbackGuildId: n,
                            collapsedSections: l,
                            pickerIntention: i,
                            emojiSearchResults: s,
                            gridWidth: a,
                            emojiPaddingHorizontal: o,
                            emojiSpriteSize: c,
                            shouldShowSoundmojiInEmojiPicker: u,
                            showOnlyUnicode: d,
                        } = e,
                        m = (0, h.bG)([v.Ay], () => v.Ay.categories),
                        p = r.useMemo(() => (d ? eQ.Ay.getCategories() : m), [m, d]),
                        f = (0, h.bG)([J.A], () => J.A.getGuild(t?.getGuildId()), [t]),
                        g = t?.getGuildId() ?? n,
                        x = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(g), [g]),
                        A = (0, ed.XI)(g),
                        E = (0, ed.Fj)(g),
                        C = (0, ed.QZ)(g),
                        { topEmojis: I, newlyAddedEmojis: y } = (0, eg.A)(g, i),
                        S = (0, h.yK)([e2.Ay], () => e2.Ay.getFlattenedGuildIds(), []),
                        N = (0, h.bG)([v.Ay], () => v.Ay.expandedSectionsByGuildIds),
                        _ = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
                        T = (0, ec.ki)(_),
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
                            let g = Math.floor(a / (c + 2 * o)),
                                x = 3 * g,
                                v = (s, a) => {
                                    let o = new Map(),
                                        u = l.has(a.sectionId),
                                        [p, f] = eO().partition(s, (e) => {
                                            let n = ep.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: i });
                                            return o.set(e, n), !n;
                                        }),
                                        A = p.concat(f),
                                        E = a.guild,
                                        C = A.length > x && null != E && a.isNitroLocked,
                                        S = C && !N.has(E.id);
                                    S && A.splice(x - 1);
                                    let v = Math.ceil((C ? A.length + 1 : A.length) / g),
                                        _ = [];
                                    for (let e = 0; e < v; e++) {
                                        let t = e * g,
                                            n = t + g,
                                            l = A.slice(t, n).map((e, t) => ({
                                                type: 0,
                                                emoji: e,
                                                size: c,
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
                                        if ((_.push(l), !u)) {
                                            if (C && e === v - 1) {
                                                let t = _[e];
                                                t.push({
                                                    type: 1,
                                                    guildId: E.id,
                                                    name: et.intl.string(et.t.NZI2Zk),
                                                    size: c,
                                                    rowIndex: e,
                                                    columnIndex: t.length,
                                                    visibleRowIndex: h,
                                                    sectionCollapsedToThreeRows: S,
                                                });
                                            }
                                            d.push(l.length), r.push(l), h++;
                                        }
                                        m++;
                                    }
                                    let T = { ...a, count: s.length };
                                    n.push(T), e.push(u ? 0 : v);
                                };
                            if (null != s)
                                0 !== s.unlocked.length &&
                                    v(s.unlocked, {
                                        type: eY.s.SEARCH_RESULTS,
                                        sectionId: eY.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        v(s.locked, {
                                            type: eY.s.PREMIUM_UPSELL,
                                            categoryId: eY.R2.PREMIUM_UPSELL,
                                            sectionId: eY.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !T,
                                        });
                            else {
                                if (R && u) {
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
                                for (let e of p)
                                    if (e === eY.R2.CUSTOM) {
                                        let n = (n) => {
                                            let l = b.get(n);
                                            if (null == l) return;
                                            let s = l.filter(
                                                (e) =>
                                                    !e3.includes(
                                                        ep.Ay.getEmojiUnavailableReason({
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
                                                        ep.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: i,
                                                        }));
                                            v(s, {
                                                categoryId: e,
                                                guild: r,
                                                type: eY.s.GUILD,
                                                sectionId: null != r ? r.id : (0, e$.A)(),
                                                count: s.length,
                                                isNitroLocked: a,
                                            });
                                        };
                                        if ((null != f && n(f.id), (0, ex.isExternalEmojiAllowedForIntention)(i)))
                                            for (let e of S) (null == f || f.id !== e) && n(e);
                                    } else if (e === eY.R2.TOP_GUILD_EMOJI) {
                                        if (null != f) {
                                            let { allEmojis: t } = (0, ef.W)({ topEmojis: I, newlyAddedEmojis: y });
                                            t.length > 0 &&
                                                v(t, {
                                                    categoryId: e,
                                                    guild: J.A.getGuild(f.id),
                                                    type: eY.s.TOP_GUILD_EMOJI,
                                                    sectionId: eY.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === eY.R2.RECENT) {
                                        let n = (i === ex.EmojiIntention.REACTION ? C : E).filter(
                                            (e) => !ep.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        v(n, {
                                            categoryId: e,
                                            type: eY.s.RECENT,
                                            sectionId: eY.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === eY.R2.FAVORITES) {
                                        let n = A.filter(
                                            (e) => !ep.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        0 !== n.length &&
                                            v(n, {
                                                categoryId: e,
                                                type: eY.s.FAVORITES,
                                                sectionId: eY.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = eQ.Ay.getByCategory(e);
                                        null != t &&
                                            v(t, {
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
                    }, [x, a, c, o, s, l, b, N, t, i, I, y, T, p, f, S, C, E, A, j, R, u]);
                })({
                    gridWidth: eK,
                    fallbackGuildId: ev,
                    channel: a,
                    pickerIntention: i,
                    emojiSearchResults: eG,
                    collapsedSections: eB,
                    emojiPaddingHorizontal: nX,
                    emojiSpriteSize: p,
                    shouldShowSoundmojiInEmojiPicker: Z,
                    showOnlyUnicode: Y,
                }),
                { newlyAddedEmojis: e4 } = (0, eg.A)(ev, i);
            (n = r.useRef({ intention: i, isBurstReaction: eN, analyticsObject: eL })),
                r.useEffect(() => {
                    n.current.intention === ex.EmojiIntention.REACTION && eE(n.current);
                }, []);
            let e5 = r.useCallback(() => {
                    let e = e4.length > 0 ? e4[0].id : null;
                    (0, k.uV)(ev, e), eE({ intention: i, isBurstReaction: eN, analyticsObject: eL });
                }, [e4, ev, i, eN, eL]),
                e8 = ((e) => {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: l,
                            onSelectEmoji: i,
                            setUpsellConfigs: s,
                            emojiSelectAnalytics: a,
                            trackEmojiFavorited: o,
                        } = e,
                        c = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? l), [l, n]);
                    return r.useCallback(
                        (e, l) => {
                            if (0 === e.type) {
                                let { emoji: r } = e;
                                if (null == r) return;
                                let u = ep.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                                if (l.toggleFavorite)
                                    return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                        ? (0, g.Sw)(r)
                                        : (o?.(e), (0, g.V4)(r)));
                                if (u !== ex.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (u === ex.EmojiDisabledReasons.PREMIUM_LOCKED)
                                        return void s({ type: 0, emojiDescriptor: e });
                                    if (u === ex.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === eX.i.GUILD)
                                        return void s({ type: 1, guildId: r.guildId, emojiId: r.id });
                                    u !== ex.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                        (a?.(e), i({ emoji: r, willClose: l.isFinalSelection, isBurst: l.isBurst }));
                                }
                            }
                        },
                        [n, t, i, s, c, a, o],
                    );
                })({
                    pickerIntention: i,
                    selectedChannel: a,
                    fallbackGuildId: ev,
                    closePopout: u,
                    onSelectEmoji: _,
                    setUpsellConfigs: em,
                    emojiSelectAnalytics: (e) => {
                        "" !== eC
                            ? (0, ed.Wf)({
                                  emoji: e.emoji,
                                  location: { ...eD, object: Q.ZSU.EMOJI },
                                  searchQuery: eC,
                                  intention: i,
                                  messageId: B,
                              })
                            : (0, ed._7)({
                                  emoji: e.emoji,
                                  location: { ...eD, object: eL ?? Q.ZSU.EMOJI, ...(null != eM && { page: eM }) },
                                  pickerIntention: i,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                                      L.isNewerThanLastSeen(ev, e.emoji.id),
                                  isBurstReaction: eN,
                                  messageId: B,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, ed.C5)({ emoji: e.emoji, location: { ...eD, object: Q.ZSU.EMOJI } });
                    },
                }),
                e9 = r.useCallback(() => {
                    u(), b?.();
                }, [u, b]),
                {
                    getItemProps: te,
                    getRowProps: tt,
                    gridContainerProps: tn,
                    handleGridContainerKeyDown: tl,
                    isUsingKeyboardNavigation: ti,
                } = ((e) => {
                    let {
                            analyticsLocation: t,
                            pickerIntention: n,
                            columnCounts: l,
                            onSelectEmoji: i,
                            emojiGrid: s,
                            emojiList: a,
                            channelGuildId: o,
                            isBurstReaction: c,
                        } = e,
                        u = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(o), [o]),
                        m = r.useCallback(
                            (e, l) => {
                                if (e.type === e6.EMOJI) {
                                    if (null != e.emoji && l.altKey)
                                        return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, g.Sw)(e.emoji)
                                            : ((0, ed.C5)({ emoji: e.emoji, location: { ...t, object: Q.ZSU.EMOJI } }),
                                              (0, g.V4)(e.emoji)));
                                    let s = {
                                        page: null != o ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                        section: Q.JJy.EMOJI_PICKER_POPOUT,
                                        object: Q.ZSU.EMOJI,
                                    };
                                    c &&
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
                                                L.isNewerThanLastSeen(o, e.emoji.id),
                                        }),
                                        i({ emoji: e.emoji, willClose: !l.shiftKey, isBurst: c });
                                }
                            },
                            [i, o, n, u, t, c],
                        ),
                        {
                            gridDispatch: p,
                            getItemProps: f,
                            getRowProps: x,
                            gridContainerProps: A,
                            handleGridContainerKeyDown: E,
                            isUsingKeyboardNavigation: C,
                        } = (0, V.Ff)({
                            columnCounts: l,
                            gridNavigatorId: eY.lq,
                            itemGrid: s,
                            itemList: a,
                            onGridNavigatorItemSelect: m,
                            onGridNavigatorPositionChange: n1,
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
                                            p({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [p],
                        ),
                        {
                            getItemProps: f,
                            getRowProps: x,
                            gridContainerProps: A,
                            handleGridContainerKeyDown: E,
                            isUsingKeyboardNavigation: C,
                        }
                    );
                })({
                    pickerIntention: i,
                    analyticsLocation: eD,
                    columnCounts: eJ,
                    onSelectEmoji: _,
                    emojiGrid: eq,
                    emojiList: ey,
                    channelGuildId: ev,
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
                    ee && eS.current?.focus();
                }, [j, eV, eS, ee]),
                r.useEffect(() => {
                    R || (0, D.Ri)("");
                }, [R]),
                r.useEffect(
                    () => (
                        eo.default.track(Q.HAw.OPEN_POPOUT, {
                            type: ek ?? "Emoji Picker",
                            guild_id: ev,
                            location: eP,
                            ...(0, I.dI)(a),
                        }),
                        () => {
                            n2.cancel(), n6.cancel();
                        }
                    ),
                    [ek, ev, eP, a],
                ),
                (0, E.Ay)(() => ((0, ed.V$)({ intention: i, location: eD }), (eA.current = eC), P.Om.resetStoreState)),
                r.useEffect(() => () => (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                r.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = P.Om.getState().inspectedExpressionPosition;
                    eq[t]?.[e] == null && 0 !== e && P.Om.setInspectedExpressionPosition(0, 0);
                }, [eq]),
                r.useEffect(() => {
                    if (("" === eA.current && "" !== eC && (0, ed.EG)(eD, i), "" !== eC && eA.current !== eC)) {
                        let e = P.Om.getAnalyticsId();
                        0 === eF
                            ? n2({ location: eD, searchQuery: eC, intention: i, loadId: e })
                            : n6({
                                  totalResults: eF,
                                  numEmojiLocked: eG?.locked.length ?? 0,
                                  location: eD,
                                  searchQuery: eC,
                                  intention: i,
                                  loadId: e,
                              });
                    }
                    eA.current = eC;
                }, [eC, eD, eF, eG, i]);
            let ts = F ?? (N ? "div" : f.l),
                tr = null != eK;
            eh?.type === e7.PREMIUM
                ? (l = (0, s.jsx)(n$.default, {
                      onUpsellClicked: e9,
                      emojiDescriptor: eh.emojiDescriptor,
                      pickerIntention: i,
                      analyticsLocation: eD,
                      onClose: () => em(null),
                      channel: a,
                  }))
                : eh?.type === e7.ROLE_SUBSCRIPTION
                  ? (l = (0, s.jsx)(el, { onClose: () => em(null), guildId: eh.guildId, emojiId: eh.emojiId }))
                  : eN && !ej && (l = (0, s.jsx)(eb, { onDismiss: () => e_(!1) }));
            let ta = (0, s.jsx)(tZ, {
                    channel: a,
                    pickerIntention: i,
                    emojiListRef: ey,
                    onKeyDown: (e) => {
                        tl?.(e), X?.(e);
                    },
                    searchBarRef: eS,
                    onFocus: $,
                    autoFocus: ee,
                    accessory: en,
                    headerClassName: M,
                    diversitySurrogate: eV,
                    isBurstReaction: eN,
                    onBurstReactionToggle: () => {
                        e_(!eN), eS.current?.focus();
                    },
                    renderHeader: W,
                    showAddEmojiButton: q,
                }),
                to = [];
            i === ex.EmojiIntention.REACTION && to.push(m.M.SUPER_REACTIONS_NITRO_MARKETING),
                v.Ay.hasFavoriteEmojis(ev) || to.push(m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let tc = (0, s.jsx)(x.A, {
                ...eD,
                children: (0, s.jsxs)(ts, {
                    id: eY.Do,
                    "aria-labelledby": N ? eY.k1 : void 0,
                    role: N ? "tabpanel" : void 0,
                    className: o()(tz.iE, { [tz.r6]: N, [tz.cB]: eN && ej }),
                    children: [
                        N ? null : ta,
                        (0, s.jsxs)("div", {
                            className: o()(tz.Fb, O),
                            onScroll: n0,
                            children: [
                                N ? ta : null,
                                (0, s.jsxs)("div", {
                                    className: tz.uK,
                                    ref: eI,
                                    children: [
                                        (0, s.jsx)(nJ, { channel: a, closePopout: u }),
                                        (0, s.jsx)(S.Ay, {
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
                                                  className: tz.Iy,
                                                  id: eY.lq,
                                                  ...tn,
                                                  children: tr
                                                      ? (0, s.jsx)(nU, {
                                                            collapsedSections: eB,
                                                            diversitySurrogate: eV,
                                                            emojiGrid: eq,
                                                            emojiListRef: ey,
                                                            emojiSize: p,
                                                            getEmojiItemProps: te,
                                                            getEmojiRowProps: tt,
                                                            gridWidth: eK,
                                                            isUsingKeyboardNavigation: ti,
                                                            onEmojiSelect: (e, t) => {
                                                                e8(e, { ...t, isBurst: eN });
                                                            },
                                                            onSelectSoundmoji: T,
                                                            setUpsellConfigs: em,
                                                            rowCount: eq.length,
                                                            rowCountBySection: ez,
                                                            sectionDescriptors: eZ,
                                                            setCollapsedSections: eW,
                                                            channelGuildId: ev,
                                                            channelId: a?.id,
                                                            messageId: B,
                                                            isBurstReaction: eN,
                                                            listHeaderClassName: K,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(tQ, {
                                    emojiGrid: eq,
                                    className: tz.qV,
                                    guildId: ev,
                                    pickerIntention: i,
                                    channel: a,
                                }),
                                l,
                            ],
                        }),
                        H
                            ? null
                            : (0, s.jsx)(tu, {
                                  className: o()(tz.jv, z),
                                  emojiListRef: ey,
                                  sectionDescriptors: eZ,
                                  intention: i,
                                  channel: a,
                                  fallbackGuildId: ev,
                                  shouldShowSoundmojiInEmojiPicker: Z,
                                  showOnlyUnicode: Y,
                              }),
                    ],
                }),
            });
            return (0, s.jsx)(y.f5, { value: eU, children: tc });
        }),
    );
