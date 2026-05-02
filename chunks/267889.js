"use strict";
n.d(t, { A: () => n6 }), n(321073);
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
    C = n(793574),
    E = n(95561),
    I = n(688810),
    y = n(379848),
    S = n(159273),
    v = n(989349),
    N = n.n(v),
    _ = n(228366),
    T = n(935208);
let j = { lastSeenNewlyAddedEmojiIds: {} },
    b = j,
    R = {};
function O() {
    for (let e in R) b.lastSeenNewlyAddedEmojiIds[e] = R[e];
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
        b = e ?? j;
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
        if (null == n || T.default.compare(t, n.id) > 0) return !0;
        {
            let e = N()(n.lastSeen);
            return N()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let M = new L(_.h, {
    LOGOUT: function () {
        (b = j), (R = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = R[t] ?? b.lastSeenNewlyAddedEmojiIds[t];
        null == l || 0 > T.default.compare(l.id, n)
            ? (R[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (R[t] = { ...l, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = R[t] ?? b.lastSeenNewlyAddedEmojiIds[t];
        (null == l || 0 > T.default.compare(l.id, n)) && (R[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: O,
    CLEAR_CACHES: function () {
        (b = j), O();
    },
    CONNECTION_CLOSED: O,
});
var w = n(451731),
    k = n(850992),
    P = n(151271),
    D = n(60587),
    U = n(464651),
    G = n(562708),
    V = n(462887),
    F = n(939249),
    H = n(789645),
    W = n(696986),
    B = n(534514),
    K = n(834730),
    z = n(736653),
    Z = n(139286),
    Y = n(976860),
    q = n(71393),
    J = n(384684),
    $ = n(985242),
    X = n(652215),
    Q = n(746080),
    ee = n(375708),
    et = n(271019);
function en(e) {
    let t,
        { onClose: l, guildId: i, emojiId: r } = e,
        a = ((t = (0, z.Ay)()), (0, V.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, I.Ay)(C.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, Z.A)({
        type: G.ImpressionTypes.MODAL,
        name: G.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: i, emoji_id: r ?? null },
    });
    let c = (0, h.bG)([q.A], () => q.A.getGuild(i)),
        u = (0, h.bG)([J.A], () => null != i && J.A.getUserSubscriptionRoles(i).size > 0),
        d = u ? ee.intl.string(ee.t.GoLM9z) : ee.intl.formatToPlainString(ee.t["h0u/Hi"], { serverName: c?.name }),
        m = u ? ee.intl.string(ee.t.PjZ7Db) : ee.intl.string(ee.t.p8FG1D);
    return (0, s.jsxs)("div", {
        className: et.kL,
        children: [
            (0, s.jsx)("div", { className: et.Tp }),
            (0, s.jsxs)("div", {
                className: et.Qs,
                children: [
                    (0, s.jsx)(F.D, {
                        className: et.b,
                        "aria-label": ee.intl.string(ee.t.cpT0Cq),
                        onClick: l,
                        children: (0, s.jsx)(H.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": ee.intl.string(ee.t.cpT0Cq),
                            className: et.yP,
                        }),
                    }),
                    (0, s.jsx)("img", { alt: "", src: a, className: et.Tn }),
                    (0, s.jsx)(W.h, { size: 22 }),
                    (0, s.jsx)(B.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: et.wx,
                        children: ee.intl.string(ee.t.cBjkcx),
                    }),
                    (0, s.jsx)(W.h, { size: 4 }),
                    (0, s.jsx)(K.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: et.h_,
                        children: d,
                    }),
                    (0, s.jsx)(W.h, { size: 24 }),
                    (0, s.jsx)($.A, {
                        text: m,
                        onClick: () => {
                            (0, Y.pX)(X.BVt.CHANNEL(i, Q.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var el = n(450510),
    ei = n(885386),
    es = n(808728),
    er = n(287809),
    ea = n(174459),
    eo = n(474090),
    ec = n(240248),
    eu = n(822123),
    ed = n(734057),
    eh = n(309010),
    em = n(690521),
    ep = n(818645),
    ef = n(316884),
    eg = n(307731),
    ex = n(698279);
function eA(e) {
    let { intention: t, containerWidth: n, rowSize: l, isBurstReaction: i, analyticsObject: s } = e,
        r = ed.A.getChannel(eh.A.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eg.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : S.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? S.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eg.EmojiIntention.REACTION
                ? S.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : S.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        h = null != a ? S.Ay.getGuildEmoji(a) : [],
        m = S.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: p, newlyAddedEmojis: f } = (0, ef.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: x } = (0, ep.W)({
            topEmojis: p,
            newlyAddedEmojis: f,
            rowSize: l,
        });
    E.Ay.trackWithMetadata(
        t === eg.EmojiIntention.REACTION ? X.HAw.REACTION_PICKER_OPENED : X.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: ex.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(em.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(em.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: h.length,
            num_custom_expressions_total: m.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: x.length,
            num_animated_expressions_newly_added: x.filter((e) => e.animated).length,
            ...(t === eg.EmojiIntention.REACTION && { is_burst: i }),
            ...(null != s && { location_object: s }),
        },
    );
}
var eC = n(403581),
    eE = n(775602),
    eI = n(607470),
    ey = n(422936),
    eS = n(234419),
    ev = n(725807),
    eN = n(811611),
    e_ = n(788868),
    eT = n(151867);
function ej(e) {
    let { onDismiss: t } = e,
        n = (0, h.bG)([eE.A], () => eE.A.useReducedMotion),
        l = ee.intl.string(ee.t.eikz43),
        i = (0, eS.V)(),
        r = (0, ey.O)(),
        a = i?.subscription_trial != null || null != r,
        c = { object: X.ZSU.BUTTON_CTA, section: X.JJy.SUPER_REACTION_PICKER };
    return (0, s.jsxs)("div", {
        className: eT.iE,
        children: [
            (0, s.jsx)(F.D, {
                onClick: t,
                className: eT.b,
                "aria-label": ee.intl.string(ee.t.WAI6xu),
                children: (0, s.jsx)(H.P, { size: "md", color: "currentColor" }),
            }),
            (0, s.jsxs)("div", {
                className: eT.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: eT.jo,
                        children: (0, s.jsx)(eI.A, {
                            className: o()(eT.vK, { [eT.Vk]: a }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    a
                        ? (0, s.jsx)(eN.Ay, {
                              type: e_.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: i?.subscription_trial?.sku_id ?? e_.pe.TIER_2,
                              headingText: ee.intl.string(ee.t.Wfl5zp),
                              analyticsLocationObject: c,
                              discountOffer: r,
                              trialOffer: i,
                              children: l,
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: eT.wx,
                                      children: [
                                          (0, s.jsx)(eC.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: eT.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, s.jsx)(B.D, {
                                              className: eT.TK,
                                              variant: "heading-xl/bold",
                                              children: ee.intl.string(ee.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(K.E, { className: eT.Fb, variant: "text-md/normal", children: l }),
                                  (0, s.jsx)("div", {
                                      className: eT.sk,
                                      children: (0, s.jsx)(ev.A, {
                                          subscriptionTier: e_.pe.TIER_2,
                                          textOptions: { textOverride: ee.intl.string(ee.t.sEAnVH) },
                                      }),
                                  }),
                              ],
                          }),
                ],
            }),
        ],
    });
}
var eb = n(735438),
    eR = n.n(eb),
    eO = n(837381),
    eL = n(460905),
    eM = n(802019),
    ew = n(407698),
    ek = n(531685),
    eP = n(406810),
    eD = n(27232),
    eU = n(369606),
    eG = n(413249),
    eV = n(141060),
    eF = n(687966),
    eH = n(115979),
    eW = n(524501),
    eB = n(926268),
    eK = n(138134),
    ez = n(7807),
    eZ = n(732139);
let eY = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        l = ((e) => {
            switch (e) {
                case eZ.R2.RECENT:
                    return eP.O;
                case eZ.R2.FAVORITES:
                    return eD.G;
                case eZ.R2.TOP_GUILD_EMOJI:
                    return eU.O;
                case eZ.R2.PEOPLE:
                    return eL.n;
                case eZ.R2.NATURE:
                    return eG.p;
                case eZ.R2.FOOD:
                    return eV.i;
                case eZ.R2.ACTIVITY:
                    return eF._;
                case eZ.R2.TRAVEL:
                    return eH.h;
                case eZ.R2.OBJECTS:
                    return eW.D;
                case eZ.R2.SYMBOLS:
                    return eB.C;
                case eZ.R2.FLAGS:
                    return eK.i;
                case eZ.R2.PREMIUM_UPSELL:
                    return eC.t;
                case eZ.R2.SOUNDMOJI:
                    return ez.J;
                default:
                    return;
            }
        })(t);
    return null == l ? null : (0, s.jsx)(l, { color: "currentColor", ...n });
});
var eq = n(724511),
    eJ = n(835245),
    e$ = n(770335),
    eX = n(7584),
    eQ = n(367319),
    e0 = n(704591),
    e1 = n(711014),
    e2 =
        (((l = {})[(l.EMOJI = 0)] = "EMOJI"),
        (l[(l.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (l[(l.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        l);
let e6 = [eg.EmojiDisabledReasons.DISALLOW_EXTERNAL, eg.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e3 = (((i = {})[(i.PREMIUM = 0)] = "PREMIUM"), (i[(i.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), i),
    e7 = n(619182);
let e4 = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e8 = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    e5 = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    e9 = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    te = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tt = (0, ec.xI)(e7.__invalid_unicodeCategoryShortcutHeight),
    tn = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tl = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ti = e5 + e8 + 2 * te,
    ts = e4 + e8,
    tr = ts + (tn + 2 * tl),
    ta = e5 + e9 + 2 * te;
function to(e) {
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
        h = (0, eO.rm)(`expression-guild-${n}`),
        m = a.type === eZ.s.GUILD ? null : a.id,
        p = t === n,
        f = a.type === eZ.s.GUILD ? a.guild : null,
        g = (0, s.jsxs)(F.D, {
            ...h,
            "aria-label": (0, eu.wt)(a, f),
            className: o()({
                [e7.ZG]: null != f,
                [e7.Bj]: null == f,
                [e7.s6]: null == f && p,
                [e7.xg]: a.type === eZ.s.RECENT,
            }),
            onClick: () => {
                null != f &&
                    ea.default.track(X.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: l?.location,
                        tab: ex.kx.EMOJI,
                        guild_id: f.id,
                    }),
                    c(n);
            },
            children: [
                null != f
                    ? (0, s.jsx)(eq.A, { guild: f, isSelected: p, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == f && null != m
                    ? (0, s.jsx)(eY, { categoryId: m, className: e7.Yl, height: e5, width: e5, size: "custom" })
                    : null,
            ],
        }),
        x = i[n + 1],
        A = null != x && a.type === eZ.s.GUILD && x.type !== eZ.s.GUILD;
    return null != f
        ? (0, s.jsxs)(r.Fragment, {
              children: [
                  (0, s.jsx)(ew.Q, { guild: f, children: (0, s.jsx)("div", { children: g }) }),
                  A ? (0, s.jsx)("hr", { className: e7.ny }, "separator") : null,
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
            fallbackGuildId: c,
            shouldShowSoundmojiInEmojiPicker: u = !1,
            showOnlyUnicode: d = !1,
        } = e,
        m = k.Om.useStore((e) => e.activeCategoryIndex),
        p = ((e) => {
            let { emojiListRef: t } = e,
                n = (0, P.RQ)((e) => e.searchQuery),
                l = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, P.Ri)(""), k.Om.setActiveCategoryIndex(e)) : l(e);
                },
                [l, n],
            );
        })({ sectionDescriptors: l, emojiListRef: n }),
        f = (0, A.p)(),
        g = (0, eu.ss)(i, a, a?.guild_id ?? c, u),
        x = r.useMemo(() => (d ? (0, eu.CQ)() : g), [g, d]),
        C = r.useRef(null),
        E = (0, h.bG)([ek.A], () => ek.A.isFocused()),
        I = (0, h.bG)([eE.A], () => eE.A.useReducedMotion, []),
        y = r.useMemo(
            () =>
                eR().memoize((e, t) => {
                    let n = x[t];
                    if (null != n)
                        return (0, s.jsx)(
                            to,
                            {
                                activeIndex: m,
                                analyticsContext: f,
                                categories: x,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: p,
                                isWindowFocused: E,
                                useReducedMotion: I,
                            },
                            t,
                        );
                }),
            [m, f, x, p, E, I],
        ),
        S = r.useMemo(() => [8, 8, 0, 8], []),
        v = r.useCallback(
            (e, t) => {
                let n = x[t];
                if (n.type === eZ.s.RECENT) return ti;
                if (n.type === eZ.s.GUILD) {
                    let e = x[t + 1];
                    return null != e && e.type !== eZ.s.GUILD ? tr : ts;
                }
                return ta;
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
                i.type === eZ.s.GUILD
                    ? ((t += 1), (n += 1))
                    : i.type === eZ.s.UNICODE
                      ? (l += 1)
                      : ((e += 1), (t += 1));
            });
            let i = ti + t * ts + tr;
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
                null == t || (e + t.height - tn >= T ? R(!1) : R(!0));
            },
            [T],
        ),
        L = r.useCallback(
            (e) => {
                e(_), C.current?.scrollTo(T);
            },
            [T, _],
        ),
        M = r.useCallback(
            (e, t) => {
                let n = x[e];
                if (null == n) return 0;
                let l = b ? tt : 0;
                if (n.type === eZ.s.RECENT) return t ? 0 : e9;
                if (n.type === eZ.s.GUILD) {
                    let n = x[e + 1];
                    return null != n && n.type !== eZ.s.GUILD ? (t ? tn + -2 * tl + e8 + l : e8) : t ? l : e8;
                }
                return t ? e8 + l : 2 * e8;
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
        D = b ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(eM.A, {
        categoryListRef: C,
        expressionsListRef: n,
        className: t,
        store: k.Om,
        categories: x,
        listPadding: S,
        onScroll: O,
        renderCategoryListItem: y,
        renderSection: w,
        rowCount: x.length,
        categoryHeight: v,
        getScrollOffsetForIndex: M,
        rowCountBySection: j,
        children: (e) =>
            N >= 7 &&
            (0, s.jsx)(
                F.D,
                {
                    "aria-hidden": !b,
                    "aria-label": ee.intl.string(ee.t.dT0ctw),
                    className: o()(e7.KB, { [e7.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => L(e),
                    children: (0, s.jsx)(eL.n, { size: "custom", color: "currentColor", height: e5, width: e5 }),
                },
                D,
            ),
    });
};
var tu = n(49999),
    td = n(868836);
let th = (e) => {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: td.iE,
        children: [
            (0, s.jsx)(eB.C, { size: "md", color: "currentColor", className: td.Kk }),
            (0, s.jsx)("div", {
                className: td.Qs,
                children: (0, s.jsx)(K.E, { variant: "text-xs/normal", children: ee.intl.string(ee.t.xdRf69) }),
            }),
            (0, s.jsx)(F.D, {
                onClick: () => t(tu.i.UNKNOWN),
                children: (0, s.jsx)(H.P, { size: "md", color: "currentColor", className: td.VN }),
            }),
        ],
    });
};
var tm = n(785651),
    tp = n(459192),
    tf = n(717421),
    tg = n(343032),
    tx = n(131607),
    tA = n(927578),
    tC = n(337889);
let tE = { tension: 750, mass: 2.5, friction: 70 };
function tI(e) {
    let { checked: t, onClick: n } = e,
        l = (0, h.bG)([eE.A], () => eE.A.useReducedMotion),
        i = er.default.getCurrentUser(),
        a = null != i && !(0, tA.TW)(i),
        c = a ? [] : [m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [u, d] = (0, tx.kn)(c),
        [p, f] = r.useState(!1),
        [g, x] = (0, tf.z)(() => ({})),
        A = (0, tm.animated)(tg.i);
    r.useEffect(() => {
        let e = u === m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (d(tu.i.DISMISS), setTimeout(() => f(e), 200));
    }, [u, d]);
    let C = p ? ee.intl.string(ee.t["Osi/uy"]) : t && !a ? ee.intl.string(ee.t["5cRA/b"]) : ee.intl.string(ee.t.buV4av),
        E = p ? ee.intl.string(ee.t.ORK94p) : void 0;
    return (0, s.jsx)(tp.u, {
        position: "top",
        title: E,
        body: C,
        asset: (0, s.jsx)(eC.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: p,
        children: (0, s.jsx)(F.D, {
            "aria-label": C,
            "aria-pressed": t,
            onClick: function () {
                x({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tE }),
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
var ty = n(821609),
    tS = n(644508),
    tv = n(824832),
    tN = n(638263);
function t_(e) {
    let { channel: t } = e,
        n = r.useRef(null),
        l = r.useRef(0),
        [i, a] = r.useState(!1),
        [o, c] = r.useState(!1),
        u = o || i,
        d = r.useCallback(
            async (e, n, i) => {
                c(!0),
                    await (0, tS.f)({
                        userImage: { data: e, file: n, image: i },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: X.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? X.liQ.GUILD_CHANNEL : X.liQ.DM_CHANNEL,
                        },
                    }),
                    (l.current += 1),
                    c(!1);
            },
            [t],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ty.$, {
                text: ee.intl.string(ee.t.iMJO37),
                variant: "secondary",
                onClick: () => {
                    n.current?.activateUploadDialogue();
                },
                disabled: u,
            }),
            (0, s.jsx)("div", {
                className: tN.F,
                children: (0, s.jsx)(tv.Ay, { ref: n, onChange: d, setLoading: a, disabled: u }, l.current),
            }),
        ],
    });
}
n(667532);
var tT = n(838677),
    tj = n(82495),
    tb = n(260762),
    tR = n(915089),
    tO = n(650583),
    tL = n(46274);
let tM = (0, tR.Ld)(),
    tw = tT.A.convert.fromCodePoint("1f44f"),
    tk = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
    tP = (e) => {
        let { fade: t, surrogate: n, onClick: l, delay: i, index: r } = e,
            a = (0, eO.rm)(`item-${r}`),
            o = em.Ay.getURL(tw + n),
            c = (0, tf.z)({ opacity: 1, from: { opacity: +!t }, delay: i }, "animate-always");
        return (0, s.jsx)(F.D, {
            ...a,
            role: "option",
            "aria-selected": 0 === r,
            onClick: () => l(n),
            className: tL.B6,
            children: (0, s.jsx)(tm.animated.div, {
                "aria-label": (function (e) {
                    switch (tT.A.convert.toCodePoint(e)) {
                        case "1f3fb":
                            return ee.intl.string(ee.t["BVK5b/"]);
                        case "1f3fc":
                            return ee.intl.string(ee.t.xJWOK8);
                        case "1f3fd":
                            return ee.intl.string(ee.t["MB+T5g"]);
                        case "1f3fe":
                            return ee.intl.string(ee.t.MODud2);
                        case "1f3ff":
                            return ee.intl.string(ee.t["0uzqsc"]);
                        default:
                            return ee.intl.string(ee.t.bGN1ow);
                    }
                })(n),
                className: tL.g4,
                style: { backgroundImage: `url("${o}")`, ...c },
            }),
        });
    },
    tD = (e) => {
        let { id: t, selectedSurrogate: n, onClick: l } = e,
            i = (0, tb.A)("diversity"),
            a = (0, tf.z)({
                height: (tk + 14) * (eX.W$.length + 1),
                from: { height: tk + 14 },
                config: { duration: 125 },
            });
        r.useEffect(() => {
            i.focusFirstVisibleItem();
        }, [i]);
        let o = ["", ...eX.W$];
        return (
            eR().remove(o, (e) => e === n),
            o.unshift(n),
            (0, s.jsx)(eO.hD, {
                navigator: i,
                children: (0, s.jsx)(eO.PR, {
                    children: (e) => {
                        let { ref: n, ...i } = e;
                        return (0, s.jsx)(tm.animated.div, {
                            ...i,
                            id: t,
                            ref: n,
                            className: tL.J6,
                            style: a,
                            role: "listbox",
                            children: o.map((e, t) =>
                                (0, s.jsx)(tP, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: l }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    tU = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: l } = e,
            i = em.Ay.getURL(tw + n),
            [a, c] = r.useState(!1),
            u = (0, tj.A)(null, () => c(!1)),
            d = r.useRef(null);
        return (0, s.jsxs)("div", {
            ref: u,
            className: o()(tL.fx, l),
            children: [
                (0, s.jsx)(F.D, {
                    innerRef: d,
                    className: tL.Dj,
                    onClick: () => {
                        c(!0);
                    },
                    "aria-label": ee.intl.string(ee.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": a,
                    "aria-controls": tM,
                    tabIndex: a ? -1 : 0,
                    children: (0, s.jsx)("div", { className: tL.g4, style: { backgroundImage: `url("${i}")` } }),
                }),
                a
                    ? (0, s.jsx)("div", {
                          onKeyDown: (e) => {
                              e.key === tO.dh.ESCAPE &&
                                  (e.stopPropagation(), c(!1), null != d.current && d.current.focus());
                          },
                          children: (0, s.jsx)(tD, {
                              id: tM,
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
var tG = n(942381),
    tV = n(602034),
    tF = n(892547);
let tH = r.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: l,
                onKeyDown: i,
                onFocus: a,
                autoFocus: o,
                defaultSearchPlaceholder: c,
            } = e,
            u = r.useRef(null),
            d = (0, P.RQ)((e) => e.searchQuery),
            [h, m, p] = k.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tG.x,
            ),
            f = r.useCallback(
                (e) => {
                    k.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        k.Om.setInspectedExpressionPosition(0, 0),
                        k.Om.setSearchPlaceholder(null),
                        (0, P.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            g = r.useCallback(() => {
                f("");
            }, [f]);
        return (
            r.useImperativeHandle(t, () => ({ focus: () => u.current?.focus() })),
            (0, s.jsx)(tF.I, {
                autoFocus: o,
                query: d,
                ref: u,
                placeholder: m ?? c,
                onClear: g,
                onKeyDown: (e) => {
                    switch (e.key) {
                        case tO.dh.ARROW_LEFT:
                        case tO.dh.ARROW_RIGHT:
                        case tO.dh.ARROW_UP:
                        case tO.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    i(e);
                },
                onFocus: a,
                onChange: f,
                inputProps: {
                    "aria-label": ee.intl.string(ee.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": l,
                    "aria-expanded": !0,
                    ...(p ? { "aria-activedescendant": (0, tV.Aq)(l, h.columnIndex, h.rowIndex) } : void 0),
                },
            })
        );
    }),
    tW = r.memo(tH);
var tB = n(873426);
let tK = (e) => {
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
                (0, s.jsx)(tW, {
                    emojiListRef: r,
                    gridNavigatorId: eZ.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eu.wT)(l, m),
                }),
                l === eg.EmojiIntention.REACTION ? (0, s.jsx)(tI, { checked: m, onClick: p }) : null,
                n ?? (0, s.jsx)(tU, { searchBarRef: d, className: tB.fx, selectedSurrogate: h }),
                l !== eg.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, s.jsx)(t_, { channel: t }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: o()(tB.wx, i), children: null != f ? f(x) : x });
};
var tz = n(182922),
    tZ = n(363195),
    tY = n(486020),
    tq = n(854469);
function tJ(e) {
    return null != e && "animated" in e;
}
let t$ = r.memo(function (e) {
    let t,
        l,
        i,
        { className: a, emojiGrid: o, guildId: c, pickerIntention: u, channel: d } = e,
        m = k.Om.useStore((e) => e.inspectedExpressionPosition),
        p = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = m;
            return o[e]?.[t];
        }, [o, m]);
    switch (p?.type) {
        case e2.EMOJI:
            t = p?.emoji;
            break;
        case e2.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: p?.guildId, allNamesString: p?.name };
            break;
        case e2.SOUNDMOJI:
        default:
            t = null;
    }
    let f = (0, h.bG)([q.A], () => (null !== t && t.type === e$.i.GUILD ? q.A.getGuild(t.guildId) : null), [t]),
        g = (0, h.bG)([ek.A], () => ek.A.isFocused()),
        x = (0, h.bG)([eE.A], () => eE.A.useReducedMotion, []),
        A = ei.Sf.useSetting(),
        C = (0, eu.O7)(c, tJ(t) ? t : null),
        E = (0, h.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: I } = (0, ef.A)(c, u),
        y = p?.type === e2.EMOJI ? p.subCategory : eZ.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    tJ(t) &&
                    y !== eZ.tm.NONE &&
                    (y === eZ.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === e$.i.GUILD &&
                        (0, w.mz)(t.guildId, I[0].id),
                    null != m.source &&
                        (0, eu.yB)({
                            emoji: t,
                            subCategory: y,
                            position: p.columnIndex + 1,
                            newlyAddedHighlight: y === eZ.tm.NEWLY_ADDED_EMOJI && M.isNewerThanLastSeen(c, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let v = tZ.A.theme;
    if (tJ(t)) {
        let e = null != t.id ? tY.Ay.getEmojiURL({ id: t.id, animated: A && t.animated, size: 28 }) : t.url;
        l =
            "" === e
                ? (0, s.jsx)(K.E, {
                      variant: "text-md/normal",
                      className: tq.J_,
                      children: "surrogates" in t ? t.surrogates : null,
                  })
                : (0, s.jsx)("img", { alt: (0, em.N)(t) ?? "", src: e, className: tq.Zg });
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
        let e = n(619508),
            i = n(404828),
            r = n(600003),
            a = n(318121);
        l = E.has(t.guildId)
            ? (0, s.jsx)("img", { className: tq.Kk, src: (0, V.M)(v) ? r : a, alt: "" })
            : (0, s.jsx)("img", { className: tq.Kk, src: (0, V.M)(v) ? e : i, alt: "" });
    }
    let N =
        null != f ? (0, s.jsx)(eq.A, { className: tq.__invalid_guildIcon, guild: f, shouldAnimate: !x && g }) : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? E.has(t.guildId)
                ? ee.intl.string(ee.t["/K2RDH"])
                : ee.intl.string(ee.t.NZI2Zk)
            : (0, em.N)(t);
    let _ = ((e) => {
        let { inspectedEmoji: t, guild: n } = e,
            l = tJ(t);
        return null != n && l ? ee.intl.format(ee.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: d, guildId: c, intention: u, guild: f });
    return (0, s.jsx)(tz.A, {
        className: a,
        graphicPrimary: l,
        graphicSecondary: N,
        titlePrimary: i,
        titleSecondary: _,
        isFavorite: C,
        emojiSubCategory: y,
    });
});
var tX = n(607399),
    tQ = n(537652),
    t0 = n(962125),
    t1 = n(240864),
    t2 = n(286509),
    t6 = n(89366),
    t3 = n(959249),
    t7 = n(414872),
    t4 = n(400669),
    t8 = n(909536),
    t5 = n(187322),
    t9 = n(304072),
    ne = n(189551),
    nt = n(289873),
    nn = n(796774),
    nl = n(209932),
    ni = n(805945),
    ns = n(576705);
n(980504);
var nr = n(818348),
    na = n(219920);
let no = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        { channelId: a, onSelectSoundmoji: o } = e,
        c = (0, h.bG)([nl.A], () => !nl.A.isFetching() && !nl.A.hasFetchedAllSounds(), []),
        u = (0, h.bG)([ed.A], () => ed.A.getChannel(a)),
        d =
            ((t = (0, h.bG)([er.default], () => tA.Ay.canUseSoundboardEverywhere(er.default.getCurrentUser()))),
            (n = (0, h.bG)([nl.A], () => nl.A.getSoundsForGuild("0"))),
            (l = (0, h.yK)([q.A], () => q.A.getGuildIds())),
            (i = r.useMemo(() => ns.A.can(nr.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            r.useMemo(() => {
                let e = [];
                if (t && i) {
                    let t = l.flatMap((e) => nl.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eR().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = nl.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...eR().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eR().sampleSize(n ?? [], 4 - e.length)), e;
            }, [i, u?.guild_id, n, l, t]));
    return (r.useEffect(() => {
        (0, nn.E7)();
    }, [c]),
    0 === d.length)
        ? (0, s.jsx)(nt.y, {})
        : (0, s.jsx)("div", {
              className: na.q,
              children: d.map((e, t) =>
                  (0, s.jsx)(
                      ni.Ay,
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
var nc = n(594061),
    nu = n(771104),
    nd = n(990078),
    nh = n(442433),
    nm = n(147421),
    np = n(723702),
    nf = n(140735),
    ng = n(194261),
    nx = n(881274);
let nA = (e) => {
    let { src: t, alt: n, size: l, "aria-label": i, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nx.S : nx.Y;
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
                          ((u.current = !0), c.current.classList.remove(nx.Y), c.current.classList.add(nx.S));
                  });
              },
    });
};
var nC = n(297547);
let nE = eR().memoize(
        (e) =>
            `${e * eg.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(eX.Ay.numNonDiversitySprites / eg.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nI = eR().memoize(
        (e) =>
            `${e * eg.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eX.Ay.numDiversitySprites / eg.EmojiSprites.DiversityPerRow)}px`,
    ),
    ny = r.memo(function (e) {
        let { emoji: t, size: l, surrogateCodePoint: i, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : tY.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eg.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(nA, {
                              className: nC.N1,
                              "aria-label": c,
                              src: e,
                              size: l,
                              alt: (0, em.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: o()(nC.xA, { [nC.N1]: u }),
                    style: ((e, t, l) => {
                        let i, s, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((i = n(983660)(`./spritesheet-${t}-${l}.png`)),
                              (s = nI(l)),
                              (r = eg.EmojiSprites.DiversityPerRow))
                            : ((i = n(883740)(`./spritesheet-emoji-${l}.png`)),
                              (s = nE(l)),
                              (r = eg.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, s.jsx)(nf.A, { children: c }),
                });
            })();
        return (0, s.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, s.jsx)("div", {
                          className: nC.iD,
                          children: (0, s.jsx)(ng.X, { size: "xs", color: "currentColor", className: nC.fi }),
                      })
                    : null,
            ],
        });
    });
var nS = n(6376);
let nv = (e, t) => `${e}:${t}`,
    nN = r.forwardRef(function (e, t) {
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
                inNitroLockedSection: C,
                ...E
            } = e,
            I = (0, h.bG)([q.A], () => (l.type === e$.i.GUILD ? q.A.getGuild(l.guildId) : void 0), [l]);
        return (0, s.jsx)(t5.vN, {
            children: (0, s.jsx)("button", {
                ...E,
                className: o()(nS._X, { [nS.lG]: r, [nS.Lh]: a, [nS.Bx]: c, [A ?? ""]: c, [nS.TV]: d }),
                "data-type": D.g.EMOJI,
                "data-id": l.id,
                "data-name": l.name,
                "data-surrogates": "surrogates" in l ? l.surrogates : null,
                "data-animated": l.animated ? "true" : null,
                ref: t,
                children: (0, s.jsx)(ny, {
                    "aria-label":
                        ((n = (0, em.N)(l)),
                        (I?.name != null &&
                            (n = ee.intl.formatToPlainString(ee.t["nXv4/B"], { names: n, guildName: I.name })),
                        i)
                            ? ee.intl.formatToPlainString(ee.t["9FI9Z0"], { names: n })
                            : n),
                    columnIndex: m,
                    rowIndex: p,
                    emoji: l,
                    size: f,
                    surrogateCodePoint: g,
                    allowAnimatedEmoji: x,
                    isLocked: u && !C,
                }),
            }),
        });
    });
function n_(e) {
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
        R = (0, h.bG)([eE.A], () => eE.A.useReducedMotion),
        O = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
        L = r.useRef(null),
        { emoji: M, size: w, isDisabled: k, columnIndex: P } = t,
        D = () => {
            d.current || m.current || c(t);
        },
        { ref: U, tabIndex: G, onFocus: V, ...F } = x(P, a) ?? {},
        H =
            j !== nv(P, a)
                ? (0, s.jsx)(nN, {
                      ref: U,
                      emoji: M,
                      isFavorite: O.isFavoriteEmojiWithoutFetchingLatest(M),
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
                              null != L.current &&
                              null != _ &&
                              null != v &&
                              !e.shiftKey &&
                              null != M.name &&
                              N &&
                              !R &&
                              I
                          ) {
                              let e = null == M.id ? eX.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = L.current.getBoundingClientRect();
                              (t.x = _.x + (P + 1) * w), b(nv(P, a)), (0, nm.h)(v, e, M.id, t);
                          }
                          ((e) => {
                              if ((e.stopPropagation(), d.current || m.current)) return;
                              let n = e.altKey;
                              n && !S.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) && y(l),
                                  (0, el.sF)(el._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
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
                      tabIndex: G,
                      columnIndex: P,
                      rowIndex: a,
                      size: w,
                      surrogateCodePoint: f,
                      selectedItemClassName: g,
                      inNitroLockedSection: T,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...F, key: l, ref: L },
        p
            ? (0, s.jsx)(nd.m, {
                  text: ee.intl.formatToPlainString(ee.t.glqNsf, { key: (0, np.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let nT = (e) => {
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
            category: C,
            selectedItemClassName: E,
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
        L = n(135974),
        w = n(8013),
        P = (0, z.Ay)(),
        D = k.Om.getState(),
        [U, G] = r.useState(D.inspectedExpressionPosition),
        [F, H] = (0, t9.A)(null, 300),
        W = r.useRef(null);
    r.useEffect(
        () =>
            k.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => G(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nc.bW.loadIfNecessary();
        }, []);
    let B = l === eZ.as.LARGE,
        Z = l === eZ.as.MEDIUM,
        Y = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`;
            switch (e.type) {
                case e2.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: l } = e,
                        a = U.rowIndex === n && U.columnIndex === l,
                        u = e.sectionCollapsedToThreeRows
                            ? a
                                ? (0, V.M)(P)
                                    ? O
                                    : w
                                : (0, V.M)(P)
                                  ? _
                                  : T
                            : a
                              ? (0, V.M)(P)
                                  ? R
                                  : L
                              : (0, V.M)(P)
                                ? j
                                : b,
                        h = ee.intl.string(e.sectionCollapsedToThreeRows ? ee.t.NZI2Zk : ee.t["/K2RDH"]);
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
                            { ref: A, tabIndex: C, onFocus: I, ...y } = d(x, f) ?? {},
                            S = U.rowIndex === g && U.columnIndex === x,
                            v = () => {
                                m.current || p.current || c(e);
                            };
                        return (0, r.createElement)(
                            "li",
                            { ...y, key: t },
                            (0, s.jsx)(t5.vN, {
                                children: (0, s.jsx)("button", {
                                    "aria-label": u,
                                    ref: A,
                                    className: o()(nS._X, {
                                        [nS.lG]: B,
                                        [nS.Lh]: Z,
                                        [nS.Bx]: S && !h,
                                        [E ?? ""]: S,
                                        [nS.TV]: F === t,
                                    }),
                                    onFocus: I ?? v,
                                    onMouseOver: v,
                                    onMouseEnter: n,
                                    onMouseLeave: l,
                                    onClick: i,
                                    tabIndex: C,
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
                                    (0, ne.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || N(),
                                    ea.default.track(X.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        icon: (0, s.jsx)("img", { className: nS.Kk, src: u, alt: "" }),
                        ariaLabel: h,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case e2.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: l } = e,
                        r = U.rowIndex === l && U.columnIndex === n;
                    return (0, s.jsx)(
                        n_,
                        {
                            rowIndex: f,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: r,
                            isScrolling: m,
                            isUsingKeyboardNavigation: p,
                            surrogateCodePoint: u,
                            allowAnimatedEmoji: g,
                            selectedItemClassName: E,
                            onSelect: i,
                            onInspect: c,
                            channelGuildId: A,
                            getEmojiItemProps: d,
                            isMediumSize: Z,
                            isLargeSize: B,
                            pulseItemKey: F,
                            setPulseItemKey: H,
                            showEmojiFavoriteTooltip: x,
                            messageId: y,
                            isBurstReaction: S,
                            rowPosition: W?.current?.getBoundingClientRect(),
                            inNitroLockedSection: v,
                        },
                        t,
                    );
                }
                case e2.SOUNDMOJI:
                    return;
            }
        },
        q = (e) =>
            (0, s.jsx)("ul", {
                ...h(f),
                className: o()(nS.ND, { [nS.HO]: B, [nS.X$]: Z }),
                ref: W,
                children: e.map(Y),
            });
    if (C === eZ.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nS.ND,
            ref: W,
            children: (0, s.jsx)(no, { channelId: I, onSelectSoundmoji: a }),
        });
    if (C !== eZ.s.TOP_GUILD_EMOJI) return q(t);
    let J = t.filter(
            (e) =>
                e.subCategory === eZ.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === eZ.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === e$.i.GUILD &&
                    !M.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        $ = t.filter(
            (e) =>
                e.subCategory === eZ.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === e$.i.GUILD &&
                M.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === $.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nS.Ng,
              children: [
                  (0, s.jsx)("div", { className: o()(nS.V6, { [nS.$3]: 0 === J.length }), children: q(J) }),
                  (0, s.jsxs)("div", {
                      className: nS.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(nS.eE, { [nS.eM]: 1 === $.length, [nS.Wk]: J.length > 0 }),
                              children: q($),
                          }),
                          (0, s.jsxs)("div", {
                              className: o()(nS.lD, { [nS.EI]: B, [nS.qU]: Z, [nS.Wk]: J.length > 0 }),
                              children: [
                                  (0, s.jsx)(nu.A, { foreground: nS.rI }),
                                  (0, s.jsx)(K.E, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: ee.intl.string(ee.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nj = n(98090);
let nb = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nR = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nO = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nL = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nM = (0, ec.xI)(p.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nw = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nk = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nP = r.memo(function (e) {
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
                getEmojiRowProps: y,
                rowCount: S,
                isUsingKeyboardNavigation: v,
                channelGuildId: N,
                channelId: _,
                messageId: T,
                isBurstReaction: j,
                listHeaderClassName: b,
            } = e,
            R = r.useRef(!1),
            O = k.Om.useStore((e) => e.activeCategoryIndex),
            L = (0, P.RQ)((e) => e.searchQuery),
            M = ei.Sf.useSetting(),
            w = (0, h.bG)([er.default], () => er.default.getCurrentUser()),
            G = (0, eo.ki)(w),
            V = (0, t8.St)("emoji_picker_floating_upsell"),
            { location: H } = (0, A.p)(),
            { analyticsLocations: W } = (0, I.Ay)(),
            [B, K] = r.useState(0),
            [z, Z] = r.useState(!1),
            {
                listPadding: Y,
                renderRow: q,
                renderSection: J,
                renderSectionHeader: $,
                renderSectionFooter: Q,
                sectionMarginBottom: et,
                sectionHeaderHeight: en,
                sectionFooterHeight: es,
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
                        allowAnimatedEmoji: C,
                        channelGuildId: E,
                        channelId: I,
                        messageId: y,
                        isBurstReaction: S,
                        listHeaderClassName: v,
                        activeSectionIndex: N,
                        emojiListRef: _,
                    } = e,
                    T = (0, A.p)(),
                    j = r.useRef(X.An1),
                    b = r.useMemo(() => ("" !== n ? tT.A.convert.toCodePoint(n) : ""), [n]),
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
                    L = r.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                l = new Set(t),
                                i = t.has(e);
                            i ? l.delete(e) : l.add(e),
                                null != n &&
                                    ea.default.track(X.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: T.location,
                                        tab: ex.kx.EMOJI,
                                        collapsed: !i,
                                        guild_id: n.id,
                                    }),
                                e === eZ.R2.SOUNDMOJI &&
                                    ea.default.track(X.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                                m(l);
                        },
                        [T, t, m],
                    ),
                    M = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            l = e.type === e2.SOUNDMOJI ? null : e.type === e2.EMOJI ? (0, em.N)(e.emoji) : e.name;
                        j.current !== X.An1 && window.cancelAnimationFrame(j.current),
                            (j.current = window.requestAnimationFrame(() => {
                                k.Om.setInspectedExpressionPosition(t, n, D.t.MOUSE_EVENT),
                                    k.Om.setSearchPlaceholder(l),
                                    (j.current = X.An1);
                            }));
                    }, []),
                    w = (0, h.bG)([el.HP], () => el.HP.hasHotspot(el._2.FAVORITE_EMOJI_TOOLTIP), []),
                    U = r.useMemo(
                        () =>
                            eR().memoize((e, t) => {
                                let n = l[e],
                                    r = d[t.sectionIndex];
                                return (0, s.jsx)(
                                    nT,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: i,
                                        surrogateCodePoint: b,
                                        onInspect: M,
                                        onSelect: a,
                                        onSelectSoundmoji: c,
                                        getEmojiItemProps: p,
                                        getEmojiRowProps: f,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: x,
                                        rowIndex: e,
                                        allowAnimatedEmoji: C,
                                        showEmojiFavoriteTooltip: w,
                                        channelGuildId: E,
                                        category: r.sectionId,
                                        selectedItemClassName: nj.__invalid_selectedItem,
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
                        [l, d, i, b, M, a, c, p, f, g, x, C, w, E, I, y, S, _],
                    );
                r.useEffect(() => () => U.cache?.clear?.(), [U]);
                let G = r.useMemo(
                        () =>
                            eR().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: l, categoryId: i, type: r, sectionId: a } = n;
                                if (r === eZ.s.SEARCH_RESULTS) return;
                                let c =
                                        r === eZ.s.GUILD
                                            ? null != l
                                                ? (0, s.jsx)(eq.A, { guild: l, height: 16, width: 16 })
                                                : null
                                            : null != i
                                              ? (0, s.jsx)(eY, { categoryId: i, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = l?.name;
                                null != i && (u = (0, eu.Nu)(i, l?.name));
                                let h = N === e,
                                    m = n.isNitroLocked,
                                    p = m && !h,
                                    f = m && h,
                                    g =
                                        r === eZ.s.SOUNDMOJI
                                            ? (0, s.jsx)(F.D, {
                                                  className: nj.f3,
                                                  onClick: () => {
                                                      (0, P.U)(ex.kx.SOUNDBOARD),
                                                          ea.default.track(X.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: ee.intl.string(ee.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t2.A,
                                    {
                                        className: o()(nj.wx, v, { [nj.RA]: p, [nj.sp]: f }),
                                        icon: c,
                                        isCollapsed: t.has(a),
                                        onClick: () => L(a, l),
                                        trailing: g,
                                        children: u,
                                    },
                                    a,
                                );
                            }),
                        [d, t, L, v, N],
                    ),
                    V = (0, eQ.k0)(),
                    H = r.useCallback(
                        (e, n) => {
                            let l = d[e],
                                i = O(e),
                                r = R(e);
                            return (0, s.jsx)(
                                "div",
                                {
                                    className: o()(nj.Wy, {
                                        [nj.YD]: e === d.length - 1,
                                        [nj.jl]: t.has(l.sectionId),
                                        [nj.cW]: l.isNitroLocked,
                                        [nj.T5]: i || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, O, R],
                    ),
                    W = r.useCallback(
                        (e) =>
                            O(e)
                                ? V
                                    ? (0, s.jsx)(t7.ap, {})
                                    : (0, s.jsx)(t7.Ay, {})
                                : R(e)
                                  ? (0, s.jsx)("div", { className: nj.pQ })
                                  : null,
                        [O, R, V],
                    ),
                    B = r.useCallback((e) => (O(e) ? 41 : 33 * !!R(e)), [O, R]),
                    K = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || O(e) || R(e) ? 0 : nw),
                        [t, d, O, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? nL : nb, nR, nO, 0], [u]),
                    renderRow: U,
                    renderSection: H,
                    renderSectionHeader: G,
                    renderSectionFooter: W,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === eZ.s.SEARCH_RESULTS ? 0 : nM), [d]),
                    sectionFooterHeight: B,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: l,
                emojiGrid: i,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                searchQuery: L,
                sectionDescriptors: p,
                setCollapsedSections: x,
                getEmojiItemProps: E,
                getEmojiRowProps: y,
                isScrolling: R,
                isUsingKeyboardNavigation: v,
                allowAnimatedEmoji: M,
                channelGuildId: N,
                channelId: _,
                messageId: T,
                isBurstReaction: j,
                listHeaderClassName: b,
                activeSectionIndex: B,
                emojiListRef: a,
            }),
            ec = (0, U.Fk)({
                activeCategoryIndex: O,
                isScrolling: R,
                listRef: a,
                onActiveCategoryIndexChange: (e) => {
                    K(e), "" === L && k.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: L,
                disableForSearch: !1,
            });
        (0, U.FV)({ searchQuery: L, activeCategoryIndex: O, listRef: a });
        let ed = r.useCallback(
                (e) => {
                    ec(e),
                        nD({ emojiListRef: a, sectionDescriptors: p, scrollTop: e, searchQuery: L, setShowUpsell: Z });
                },
                [ec, a, p, L, Z],
            ),
            eh = p.length > 0;
        return (
            r.useEffect(() => {
                z &&
                    ea.default.track(X.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: e_.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: H,
                        location_stack: W,
                    });
            }, [H, W, z]),
            r.useEffect(() => {
                "" !== L && Z(!1);
            }, [L]),
            (0, s.jsxs)("div", {
                className: nj.AD,
                children: [
                    eh
                        ? (0, s.jsx)(t0.A, {
                              role: "none presentation",
                              className: nj.p_,
                              listPadding: Y,
                              onScroll: ed,
                              renderRow: q,
                              renderSection: J,
                              renderSectionHeader: $,
                              renderSectionFooter: Q,
                              rowCount: S,
                              rowCountBySection: f,
                              rowHeight: c + 2 * nk,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: et,
                              sectionFooterHeight: es,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, s.jsx)(tQ.A, { message: ee.intl.string(ee.t.IxxiKF), className: nj.BZ }),
                    G || tX.Fr
                        ? null
                        : (0, s.jsx)(t3.d, {
                              showUpsell: z,
                              text:
                                  ((t = (0, tA.Dd)(e_.PremiumTypes.TIER_2)),
                                  ee.intl.format(ee.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          m({ type: e3.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t6.qD)()), (0, tA.LE)(n, e_.pe.TIER_2) ?? ee.intl.string(ee.t.BmJkbd)),
                              buttonAnalyticsObject: { section: X.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: V
                                  ? (0, s.jsx)(t4.l, {
                                        size: "sm",
                                        className: nj.ij,
                                        location: C.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    nD = eR().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: l, searchQuery: i, setShowUpsell: s } = e;
            s(
                (0, t1.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: l })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nU = n(506774),
    nG = n(349288),
    nV = n(753390),
    nF = n(404374),
    nH = n(780964),
    nW = n(858897),
    nB = n(166403),
    nK = n(542863);
let nz = "premiumRetentionEmojiPickerNotice",
    nZ = nU.w.get(nz),
    nY = (e) => {
        let { closePopout: t, channel: n } = e,
            [l, i] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, h.cf)([nB.A], () => ({
                subscription: nB.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nB.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, nV.hP)();
            }, [o]),
            null == a || !(0, tA.PK)(a.status) || l)
        )
            return null;
        let c = a.status === X.Dmq.PAST_DUE ? (0, tA.ji)(a).expiresDate : N()(a.currentPeriodStart).add(e_.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (nZ === u) return null;
        let d =
            tA.Ay.getPremiumType(a.planId) === e_.PremiumTypes.TIER_0
                ? nF.k0.PREMIUM_TIER_0
                : tA.Ay.getPremiumType(a.planId) === e_.PremiumTypes.TIER_1
                  ? nF.k0.PREMIUM_TIER_1
                  : nF.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)("div", {
            className: nK.g$,
            children: [
                (0, s.jsx)(eC.t, { size: "md", className: nK.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: nK.Xn,
                    children: [
                        (0, s.jsx)(K.E, {
                            variant: "text-xs/normal",
                            children: ee.intl.format(ee.t.bTMjiO, {
                                planName: tA.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nG.Anchor, {
                                onClick: () => {
                                    (0, eu.xf)(n), t(), (0, nW.openUserSettings)(nH.X.NITRO_PANEL);
                                },
                                children: ee.intl.string(ee.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(F.D, {
                    onClick: () => {
                        nU.w.set(nz, u), (nZ = u), i(!0);
                    },
                    children: (0, s.jsx)(H.P, { size: "md", color: "currentColor", className: nK.YF }),
                }),
            ],
        });
    };
var nq = n(148361);
let nJ = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n$ = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    nX = (e) => e.stopPropagation(),
    nQ = (e, t) => {
        k.Om.setInspectedExpressionPosition(e, t, D.t.GRID_NAVIGATOR_EVENT);
    },
    n0 = u()(eu.bo, 200),
    n1 = u()(eu.Wi, 200),
    n2 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n6 = r.memo(
        r.forwardRef(function (e, t) {
            let n,
                l,
                {
                    pickerIntention: i,
                    channel: a,
                    guildId: c,
                    closePopout: u,
                    emojiSize: p = eZ.as.MEDIUM,
                    hasTabWrapper: v = !1,
                    onSelectEmoji: N,
                    onSelectSoundmoji: _,
                    containerWidth: T,
                    onNavigateAway: j,
                    persistSearch: b,
                    className: R,
                    headerClassName: O,
                    analyticsOverride: L = n2,
                    searchProps: G = {},
                    wrapper: V,
                    shouldHidePickerActions: F = !1,
                    messageId: H,
                    renderHeader: W,
                    listHeaderClassName: B,
                    categoryListClassName: K,
                    shouldShowSoundmojiInEmojiPicker: z = !1,
                    showOnlyUnicode: Z = !1,
                    showAddEmojiButton: Y,
                } = e,
                { onFocus: J, onKeyDown: $, autoFocus: Q = !0, accessory: et } = G,
                ec = (0, h.bG)([es.Ay], () => (null != c ? es.Ay.getDefaultChannel(c) : null), [c]),
                [ed, eh] = r.useState(null),
                ex = r.useRef(""),
                eC = (0, P.RQ)((e) => e.searchQuery),
                eE = r.useRef(null),
                eI = r.useRef(null),
                ey = r.useRef(null);
            null == a && null != ec && (a = ec);
            let eS = a?.getGuildId() ?? c ?? null,
                [ev, eN] = r.useState(!1),
                e_ = er.default.getCurrentUser(),
                eT = (0, eo.ki)(e_);
            r.useImperativeHandle(t, () => ({ onPickerOpen: e4 }));
            let { location: eb } = (0, A.p)(),
                { page: eO, section: eL, object: eM, openPopoutType: ew, popoutLocation: ek } = L,
                eP = r.useMemo(() => ({ ...eb, section: eL ?? X.JJy.EMOJI_PICKER_POPOUT }), [eb, eL]),
                { analyticsLocations: eD } = (0, I.Ay)(C.A.EMOJI_PICKER),
                { diversitySurrogate: eU } = (0, h.cf)([S.Ay], () => ({ diversitySurrogate: S.Ay.diversitySurrogate })),
                eG = (0, eu.sL)(eC, a, i, Z),
                eV = null == eG ? 0 : eG.locked.length + eG.unlocked.length,
                eF = ei.iM.useSetting(),
                eH = r.useMemo(() => new Set(eF), [eF]),
                eW = r.useCallback((e) => {
                    ei.iM.updateSetting(Array.from(e));
                }, []),
                eB = (0, U.oV)({ gridWrapperRef: eE, containerWidth: T, listPaddingLeft: n$, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eK,
                    sectionDescriptors: ez,
                    emojiGrid: eY,
                    columnCounts: eq,
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
                        m = (0, h.bG)([S.Ay], () => S.Ay.categories),
                        p = r.useMemo(() => (d ? eX.Ay.getCategories() : m), [m, d]),
                        f = (0, h.bG)([q.A], () => q.A.getGuild(t?.getGuildId()), [t]),
                        g = t?.getGuildId() ?? n,
                        x = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(g), [g]),
                        A = (0, eu.XI)(g),
                        C = (0, eu.Fj)(g),
                        E = (0, eu.QZ)(g),
                        { topEmojis: I, newlyAddedEmojis: y } = (0, ef.A)(g, i),
                        v = (0, h.yK)([e1.Ay], () => e1.Ay.getFlattenedGuildIds(), []),
                        N = (0, h.bG)([S.Ay], () => S.Ay.expandedSectionsByGuildIds),
                        _ = (0, h.bG)([er.default], () => er.default.getCurrentUser()),
                        T = (0, eo.ki)(_),
                        j = (0, eQ.k0)(),
                        b = x.getGroupedCustomEmoji(),
                        R = (0, e0.Ym)({ location: "useEmojiGrid" });
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
                                S = (s, a) => {
                                    let o = new Map(),
                                        u = l.has(a.sectionId),
                                        [p, f] = eR().partition(s, (e) => {
                                            let n = em.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: i });
                                            return o.set(e, n), !n;
                                        }),
                                        A = p.concat(f),
                                        C = a.guild,
                                        E = A.length > x && null != C && a.isNitroLocked,
                                        S = E && !N.has(C.id);
                                    S && A.splice(x - 1);
                                    let v = Math.ceil((E ? A.length + 1 : A.length) / g),
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
                                                    a.sectionId === eZ.s.TOP_GUILD_EMOJI
                                                        ? (0, eu.DA)(I, y, e.id ?? e.uniqueName ?? e.name)
                                                        : eZ.tm.NONE,
                                            }));
                                        if ((_.push(l), !u)) {
                                            if (E && e === v - 1) {
                                                let t = _[e];
                                                t.push({
                                                    type: 1,
                                                    guildId: C.id,
                                                    name: ee.intl.string(ee.t.NZI2Zk),
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
                                    S(s.unlocked, {
                                        type: eZ.s.SEARCH_RESULTS,
                                        sectionId: eZ.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        S(s.locked, {
                                            type: eZ.s.PREMIUM_UPSELL,
                                            categoryId: eZ.R2.PREMIUM_UPSELL,
                                            sectionId: eZ.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !T,
                                        });
                            else {
                                if (R && u) {
                                    let t = [{ type: 2, rowIndex: m, columnIndex: 0, visibleRowIndex: h }];
                                    n.push({
                                        type: eZ.s.SOUNDMOJI,
                                        categoryId: eZ.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let i = l.has(eZ.R2.SOUNDMOJI);
                                    !i && (d.push(t.length), r.push(t), h++), e.push(+!i), m++;
                                }
                                for (let e of p)
                                    if (e === eZ.R2.CUSTOM) {
                                        let n = (n) => {
                                            let l = b.get(n);
                                            if (null == l) return;
                                            let s = l.filter(
                                                (e) =>
                                                    !e6.includes(
                                                        em.Ay.getEmojiUnavailableReason({
                                                            emoji: e,
                                                            channel: t ?? es.Ay.getDefaultChannel(n),
                                                            intention: i,
                                                        }),
                                                    ),
                                            );
                                            if (0 === s.length) return;
                                            let r = q.A.getGuild(n),
                                                a =
                                                    j ||
                                                    (!T &&
                                                        em.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: i,
                                                        }));
                                            S(s, {
                                                categoryId: e,
                                                guild: r,
                                                type: eZ.s.GUILD,
                                                sectionId: null != r ? r.id : (0, eJ.A)(),
                                                count: s.length,
                                                isNitroLocked: a,
                                            });
                                        };
                                        if ((null != f && n(f.id), (0, eg.isExternalEmojiAllowedForIntention)(i)))
                                            for (let e of v) (null == f || f.id !== e) && n(e);
                                    } else if (e === eZ.R2.TOP_GUILD_EMOJI) {
                                        if (null != f) {
                                            let { allEmojis: t } = (0, ep.W)({ topEmojis: I, newlyAddedEmojis: y });
                                            t.length > 0 &&
                                                S(t, {
                                                    categoryId: e,
                                                    guild: q.A.getGuild(f.id),
                                                    type: eZ.s.TOP_GUILD_EMOJI,
                                                    sectionId: eZ.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === eZ.R2.RECENT) {
                                        let n = (i === eg.EmojiIntention.REACTION ? E : C).filter(
                                            (e) => !em.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        S(n, {
                                            categoryId: e,
                                            type: eZ.s.RECENT,
                                            sectionId: eZ.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === eZ.R2.FAVORITES) {
                                        let n = A.filter(
                                            (e) => !em.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        0 !== n.length &&
                                            S(n, {
                                                categoryId: e,
                                                type: eZ.s.FAVORITES,
                                                sectionId: eZ.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = eX.Ay.getByCategory(e);
                                        null != t &&
                                            S(t, {
                                                categoryId: e,
                                                type: eZ.s.UNICODE,
                                                sectionId: e,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                            }
                        }
                        return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                    }, [x, a, c, o, s, l, b, N, t, i, I, y, T, p, f, v, E, C, A, j, R, u]);
                })({
                    gridWidth: eB,
                    fallbackGuildId: eS,
                    channel: a,
                    pickerIntention: i,
                    emojiSearchResults: eG,
                    collapsedSections: eH,
                    emojiPaddingHorizontal: nJ,
                    emojiSpriteSize: p,
                    shouldShowSoundmojiInEmojiPicker: z,
                    showOnlyUnicode: Z,
                }),
                { newlyAddedEmojis: e7 } = (0, ef.A)(eS, i);
            (n = r.useRef({ intention: i, isBurstReaction: ev, analyticsObject: eM })),
                r.useEffect(() => {
                    n.current.intention === eg.EmojiIntention.REACTION && eA(n.current);
                }, []);
            let e4 = r.useCallback(() => {
                    let e = e7.length > 0 ? e7[0].id : null;
                    (0, w.uV)(eS, e), eA({ intention: i, isBurstReaction: ev, analyticsObject: eM });
                }, [e7, eS, i, ev, eM]),
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
                        c = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? l), [l, n]);
                    return r.useCallback(
                        (e, l) => {
                            if (0 === e.type) {
                                let { emoji: r } = e;
                                if (null == r) return;
                                let u = em.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                                if (l.toggleFavorite)
                                    return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                        ? (0, g.Sw)(r)
                                        : (o?.(e), (0, g.V4)(r)));
                                if (u !== eg.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (u === eg.EmojiDisabledReasons.PREMIUM_LOCKED)
                                        return void s({ type: 0, emojiDescriptor: e });
                                    if (u === eg.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === e$.i.GUILD)
                                        return void s({ type: 1, guildId: r.guildId, emojiId: r.id });
                                    u !== eg.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                        (a?.(e), i({ emoji: r, willClose: l.isFinalSelection, isBurst: l.isBurst }));
                                }
                            }
                        },
                        [n, t, i, s, c, a, o],
                    );
                })({
                    pickerIntention: i,
                    selectedChannel: a,
                    fallbackGuildId: eS,
                    closePopout: u,
                    onSelectEmoji: N,
                    setUpsellConfigs: eh,
                    emojiSelectAnalytics: (e) => {
                        "" !== eC
                            ? (0, eu.Wf)({
                                  emoji: e.emoji,
                                  location: { ...eP, object: X.ZSU.EMOJI },
                                  searchQuery: eC,
                                  intention: i,
                                  messageId: H,
                              })
                            : (0, eu._7)({
                                  emoji: e.emoji,
                                  location: { ...eP, object: eM ?? X.ZSU.EMOJI, ...(null != eO && { page: eO }) },
                                  pickerIntention: i,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === eZ.tm.NEWLY_ADDED_EMOJI &&
                                      M.isNewerThanLastSeen(eS, e.emoji.id),
                                  isBurstReaction: ev,
                                  messageId: H,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, eu.C5)({ emoji: e.emoji, location: { ...eP, object: X.ZSU.EMOJI } });
                    },
                }),
                e5 = r.useCallback(() => {
                    u(), j?.();
                }, [u, j]),
                {
                    getItemProps: e9,
                    getRowProps: te,
                    gridContainerProps: tt,
                    handleGridContainerKeyDown: tn,
                    isUsingKeyboardNavigation: tl,
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
                        u = (0, h.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(o), [o]),
                        m = r.useCallback(
                            (e, l) => {
                                if (e.type === e2.EMOJI) {
                                    if (null != e.emoji && l.altKey)
                                        return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, g.Sw)(e.emoji)
                                            : ((0, eu.C5)({ emoji: e.emoji, location: { ...t, object: X.ZSU.EMOJI } }),
                                              (0, g.V4)(e.emoji)));
                                    let s = {
                                        page: null != o ? X.liQ.GUILD_CHANNEL : X.liQ.DM_CHANNEL,
                                        section: X.JJy.EMOJI_PICKER_POPOUT,
                                        object: X.ZSU.EMOJI,
                                    };
                                    c &&
                                        (s = {
                                            page: null != o ? X.liQ.GUILD_CHANNEL : X.liQ.DM_CHANNEL,
                                            section: X.JJy.EMOJI_PICKER_POPOUT,
                                            object: X.ZSU.EMOJI,
                                        }),
                                        (0, eu._7)({
                                            emoji: e.emoji,
                                            location: s,
                                            pickerIntention: n,
                                            category: e.category,
                                            subCategory: e.subCategory,
                                            newlyAddedHighlight:
                                                e.subCategory === eZ.tm.NEWLY_ADDED_EMOJI &&
                                                M.isNewerThanLastSeen(o, e.emoji.id),
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
                            handleGridContainerKeyDown: C,
                            isUsingKeyboardNavigation: E,
                        } = (0, U.Ff)({
                            columnCounts: l,
                            gridNavigatorId: eZ.lq,
                            itemGrid: s,
                            itemList: a,
                            onGridNavigatorItemSelect: m,
                            onGridNavigatorPositionChange: nQ,
                        });
                    return (
                        r.useEffect(
                            () =>
                                k.Om.subscribe(
                                    (e) => e.inspectedExpressionPosition,
                                    (e) => {
                                        if (null == e) return;
                                        let { columnIndex: t, rowIndex: n, source: l } = e;
                                        l !== D.t.GRID_NAVIGATOR_EVENT &&
                                            p({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [p],
                        ),
                        {
                            getItemProps: f,
                            getRowProps: x,
                            gridContainerProps: A,
                            handleGridContainerKeyDown: C,
                            isUsingKeyboardNavigation: E,
                        }
                    );
                })({
                    pickerIntention: i,
                    analyticsLocation: eP,
                    columnCounts: eq,
                    onSelectEmoji: N,
                    emojiGrid: eY,
                    emojiList: eI,
                    channelGuildId: eS,
                    isBurstReaction: ev,
                });
            ((e, t) => {
                let [n, l] = r.useState(null);
                r.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), l(null));
                }, [t, n]),
                    r.useEffect(() => {
                        l(k.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(T, eI),
                r.useLayoutEffect(() => {
                    Q && ey.current?.focus();
                }, [T, eU, ey, Q]),
                r.useEffect(() => {
                    b || (0, P.Ri)("");
                }, [b]),
                r.useEffect(
                    () => (
                        ea.default.track(X.HAw.OPEN_POPOUT, {
                            type: ew ?? "Emoji Picker",
                            guild_id: eS,
                            location: ek,
                            ...(0, E.dI)(a),
                        }),
                        k.Om.resetStoreState
                    ),
                    [ew, eS, ek, a],
                ),
                r.useEffect(() => () => (0, el.sF)(el._2.FAVORITE_EMOJI_TOOLTIP), []),
                r.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = k.Om.getState().inspectedExpressionPosition;
                    eY[t]?.[e] == null && 0 !== e && k.Om.setInspectedExpressionPosition(0, 0);
                }, [eY]),
                r.useEffect(() => {
                    "" === ex.current && "" !== eC && (0, eu.EG)(eP, i),
                        0 === eV && "" !== eC
                            ? n0(eP, eC)
                            : "" !== eC && ex.current !== eC && n1(eV, eG?.locked.length ?? 0, eP, eC, i),
                        (ex.current = eC);
                }, [eC, eP, eV, eG, i]);
            let ti = V ?? (v ? "div" : f.l),
                ts = null != eB;
            ed?.type === e3.PREMIUM
                ? (l = (0, s.jsx)(nq.default, {
                      onUpsellClicked: e5,
                      emojiDescriptor: ed.emojiDescriptor,
                      pickerIntention: i,
                      analyticsLocation: eP,
                      onClose: () => eh(null),
                      channel: a,
                  }))
                : ed?.type === e3.ROLE_SUBSCRIPTION
                  ? (l = (0, s.jsx)(en, { onClose: () => eh(null), guildId: ed.guildId, emojiId: ed.emojiId }))
                  : ev && !eT && (l = (0, s.jsx)(ej, { onDismiss: () => eN(!1) }));
            let tr = (0, s.jsx)(tK, {
                    channel: a,
                    pickerIntention: i,
                    emojiListRef: eI,
                    onKeyDown: (e) => {
                        tn?.(e), $?.(e);
                    },
                    searchBarRef: ey,
                    onFocus: J,
                    autoFocus: Q,
                    accessory: et,
                    headerClassName: O,
                    diversitySurrogate: eU,
                    isBurstReaction: ev,
                    onBurstReactionToggle: () => {
                        eN(!ev), ey.current?.focus();
                    },
                    renderHeader: W,
                    showAddEmojiButton: Y,
                }),
                ta = [];
            i === eg.EmojiIntention.REACTION && ta.push(m.M.SUPER_REACTIONS_NITRO_MARKETING),
                S.Ay.hasFavoriteEmojis(eS) || ta.push(m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let to = (0, s.jsx)(x.A, {
                ...eP,
                children: (0, s.jsxs)(ti, {
                    id: eZ.Do,
                    "aria-labelledby": v ? eZ.k1 : void 0,
                    role: v ? "tabpanel" : void 0,
                    className: o()(tB.iE, { [tB.r6]: v, [tB.cB]: ev && eT }),
                    children: [
                        v ? null : tr,
                        (0, s.jsxs)("div", {
                            className: o()(tB.Fb, R),
                            onScroll: nX,
                            children: [
                                v ? tr : null,
                                (0, s.jsxs)("div", {
                                    className: tB.uK,
                                    ref: eE,
                                    children: [
                                        (0, s.jsx)(nY, { channel: a, closePopout: u }),
                                        (0, s.jsx)(y.Ay, {
                                            contentTypes: ta,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(th, { markAsDismissed: () => n(tu.i.UNKNOWN) });
                                            },
                                        }),
                                        F
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: tB.Iy,
                                                  id: eZ.lq,
                                                  ...tt,
                                                  children: ts
                                                      ? (0, s.jsx)(nP, {
                                                            collapsedSections: eH,
                                                            diversitySurrogate: eU,
                                                            emojiGrid: eY,
                                                            emojiListRef: eI,
                                                            emojiSize: p,
                                                            getEmojiItemProps: e9,
                                                            getEmojiRowProps: te,
                                                            gridWidth: eB,
                                                            isUsingKeyboardNavigation: tl,
                                                            onEmojiSelect: (e, t) => {
                                                                e8(e, { ...t, isBurst: ev });
                                                            },
                                                            onSelectSoundmoji: _,
                                                            setUpsellConfigs: eh,
                                                            rowCount: eY.length,
                                                            rowCountBySection: eK,
                                                            sectionDescriptors: ez,
                                                            setCollapsedSections: eW,
                                                            channelGuildId: eS,
                                                            channelId: a?.id,
                                                            messageId: H,
                                                            isBurstReaction: ev,
                                                            listHeaderClassName: B,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(t$, {
                                    emojiGrid: eY,
                                    className: tB.qV,
                                    guildId: eS,
                                    pickerIntention: i,
                                    channel: a,
                                }),
                                l,
                            ],
                        }),
                        F
                            ? null
                            : (0, s.jsx)(tc, {
                                  className: o()(tB.jv, K),
                                  emojiListRef: eI,
                                  sectionDescriptors: ez,
                                  intention: i,
                                  channel: a,
                                  fallbackGuildId: eS,
                                  shouldShowSoundmojiInEmojiPicker: z,
                                  showOnlyUnicode: Z,
                              }),
                    ],
                }),
            });
            return (0, s.jsx)(I.f5, { value: eD, children: to });
        }),
    );
