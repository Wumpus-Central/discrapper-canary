"use strict";
n.d(t, { A: () => n6 }), n(321073);
var l,
    i,
    s = n(627968),
    a = n(64700),
    r = n(503698),
    o = n.n(r),
    c = n(111956),
    u = n.n(c),
    d = n(788413),
    h = n(17928),
    m = n(554146),
    p = n(319060),
    f = n(305866),
    g = n(554375),
    _ = n(820284),
    x = n(212245),
    C = n(793574),
    A = n(58149),
    E = n(688810),
    I = n(379848),
    v = n(159273),
    y = n(989349),
    b = n.n(y),
    S = n(228366),
    N = n(935208);
let j = { lastSeenNewlyAddedEmojiIds: {} },
    T = j,
    w = {};
function R() {
    for (let e in w) T.lastSeenNewlyAddedEmojiIds[e] = w[e];
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
        T = e ?? j;
    }
    getState() {
        return T;
    }
    getLastSeenEmojiByGuild(e) {
        return T.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || N.default.compare(t, n.id) > 0) return !0;
        {
            let e = b()(n.lastSeen);
            return b()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let k = new L(S.h, {
    LOGOUT: function () {
        (T = j), (w = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = w[t] ?? T.lastSeenNewlyAddedEmojiIds[t];
        null == l || 0 > N.default.compare(l.id, n)
            ? (w[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (w[t] = { ...l, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = w[t] ?? T.lastSeenNewlyAddedEmojiIds[t];
        (null == l || 0 > N.default.compare(l.id, n)) && (w[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: R,
    CLEAR_CACHES: function () {
        (T = j), R();
    },
    CONNECTION_CLOSED: R,
});
var M = n(451731),
    O = n(850992),
    P = n(151271),
    D = n(60587),
    U = n(464651),
    V = n(110259),
    G = n(462887),
    F = n(939249),
    B = n(789645),
    H = n(696986),
    W = n(534514),
    K = n(834730),
    z = n(736653),
    Z = n(139286),
    q = n(976860),
    J = n(71393),
    Y = n(384684),
    X = n(985242),
    $ = n(652215),
    Q = n(746080),
    ee = n(985018),
    et = n(271019);
function en(e) {
    let t,
        { onClose: l, guildId: i, emojiId: a } = e,
        r = ((t = (0, z.Ay)()), (0, G.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, E.Ay)(C.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, Z.A)({
        type: V.ImpressionTypes.MODAL,
        name: V.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: i, emoji_id: a ?? null },
    });
    let c = (0, h.bG)([J.A], () => J.A.getGuild(i)),
        u = (0, h.bG)([Y.A], () => null != i && Y.A.getUserSubscriptionRoles(i).size > 0),
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
                        children: (0, s.jsx)(B.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": ee.intl.string(ee.t.cpT0Cq),
                            className: et.yP,
                        }),
                    }),
                    (0, s.jsx)("img", { alt: "", src: r, className: et.Tn }),
                    (0, s.jsx)(H.h, { size: 22 }),
                    (0, s.jsx)(W.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: et.wx,
                        children: ee.intl.string(ee.t.cBjkcx),
                    }),
                    (0, s.jsx)(H.h, { size: 4 }),
                    (0, s.jsx)(K.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: et.h_,
                        children: d,
                    }),
                    (0, s.jsx)(H.h, { size: 24 }),
                    (0, s.jsx)(X.A, {
                        text: m,
                        onClick: () => {
                            (0, q.pX)($.BVt.CHANNEL(i, Q.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var el = n(450510),
    ei = n(253932),
    es = n(808728),
    ea = n(287809),
    er = n(954571),
    eo = n(474090),
    ec = n(240248),
    eu = n(822123),
    ed = n(734057),
    eh = n(309010),
    em = n(690521),
    ep = n(818645),
    ef = n(316884),
    eg = n(307731),
    e_ = n(698279);
function ex(e) {
    let { intention: t, containerWidth: n, rowSize: l, isBurstReaction: i, analyticsObject: s } = e,
        a = ed.A.getChannel(eh.A.getChannelId()),
        r = a?.getGuildId(),
        o =
            t === eg.EmojiIntention.REACTION
                ? v.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : v.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != a ? v.Ay.getDisambiguatedEmojiContext(a.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eg.EmojiIntention.REACTION
                ? v.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : v.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        h = null != r ? v.Ay.getGuildEmoji(r) : [],
        m = v.Ay.getDisambiguatedEmojiContext(a?.getGuildId()).getCustomEmoji(),
        { topEmojis: p, newlyAddedEmojis: f } = (0, ef.b)({ guildId: a?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: _ } = (0, ep.W)({
            topEmojis: p,
            newlyAddedEmojis: f,
            rowSize: l,
        });
    A.Ay.trackWithMetadata(
        t === eg.EmojiIntention.REACTION ? $.HAw.REACTION_PICKER_OPENED : $.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: e_.kx.EMOJI,
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
            num_expressions_newly_added: _.length,
            num_animated_expressions_newly_added: _.filter((e) => e.animated).length,
            ...(t === eg.EmojiIntention.REACTION && { is_burst: i }),
            ...(null != s && { location_object: s }),
        },
    );
}
var eC = n(403581),
    eA = n(775602),
    eE = n(607470),
    eI = n(422936),
    ev = n(234419),
    ey = n(725807),
    eb = n(811611),
    eS = n(788868),
    eN = n(151867);
function ej(e) {
    let { onDismiss: t } = e,
        n = (0, h.bG)([eA.A], () => eA.A.useReducedMotion),
        l = ee.intl.string(ee.t.eikz43),
        i = (0, ev.V)(),
        a = (0, eI.O)(),
        r = i?.subscription_trial != null || null != a,
        c = { object: $.ZSU.BUTTON_CTA, section: $.JJy.SUPER_REACTION_PICKER };
    return (0, s.jsxs)("div", {
        className: eN.iE,
        children: [
            (0, s.jsx)(F.D, {
                onClick: t,
                className: eN.b,
                "aria-label": ee.intl.string(ee.t.WAI6xu),
                children: (0, s.jsx)(B.P, { size: "md", color: "currentColor" }),
            }),
            (0, s.jsxs)("div", {
                className: eN.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: eN.jo,
                        children: (0, s.jsx)(eE.A, {
                            className: o()(eN.vK, { [eN.Vk]: r }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    r
                        ? (0, s.jsx)(eb.Ay, {
                              type: eS.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: i?.subscription_trial?.sku_id ?? eS.pe.TIER_2,
                              headingText: ee.intl.string(ee.t.Wfl5zp),
                              analyticsLocationObject: c,
                              discountOffer: a,
                              trialOffer: i,
                              children: l,
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: eN.wx,
                                      children: [
                                          (0, s.jsx)(eC.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: eN.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, s.jsx)(W.D, {
                                              className: eN.TK,
                                              variant: "heading-xl/bold",
                                              children: ee.intl.string(ee.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(K.E, { className: eN.Fb, variant: "text-md/normal", children: l }),
                                  (0, s.jsx)("div", {
                                      className: eN.sk,
                                      children: (0, s.jsx)(ey.A, {
                                          subscriptionTier: eS.pe.TIER_2,
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
var eT = n(735438),
    ew = n.n(eT),
    eR = n(837381),
    eL = n(460905),
    ek = n(802019),
    eM = n(407698),
    eO = n(531685),
    eP = n(406810),
    eD = n(27232),
    eU = n(369606),
    eV = n(413249),
    eG = n(141060),
    eF = n(687966),
    eB = n(115979),
    eH = n(524501),
    eW = n(926268),
    eK = n(138134),
    ez = n(7807),
    eZ = n(732139);
let eq = a.memo(function (e) {
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
                    return eV.p;
                case eZ.R2.FOOD:
                    return eG.i;
                case eZ.R2.ACTIVITY:
                    return eF._;
                case eZ.R2.TRAVEL:
                    return eB.h;
                case eZ.R2.OBJECTS:
                    return eH.D;
                case eZ.R2.SYMBOLS:
                    return eW.C;
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
var eJ = n(724511),
    eY = n(132500),
    eX = n(770335),
    e$ = n(7584),
    eQ = n(526292),
    e0 = n(704591),
    e1 = n(711014),
    e2 =
        (((l = {})[(l.EMOJI = 0)] = "EMOJI"),
        (l[(l.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (l[(l.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        l);
let e6 = [eg.EmojiDisabledReasons.DISALLOW_EXTERNAL, eg.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e3 = (((i = {})[(i.PREMIUM = 0)] = "PREMIUM"), (i[(i.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), i),
    e4 = n(619182);
let e7 = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e8 = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    e5 = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    e9 = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    te = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tt = (0, ec.xI)(e4.__invalid_unicodeCategoryShortcutHeight),
    tn = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tl = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ti = e5 + e8 + 2 * te,
    ts = e7 + e8,
    ta = ts + (tn + 2 * tl),
    tr = e5 + e9 + 2 * te;
function to(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: l,
            categories: i,
            category: r,
            handleCategorySelect: c,
            isWindowFocused: u,
            useReducedMotion: d,
        } = e,
        h = (0, eR.rm)(`expression-guild-${n}`),
        m = r.type === eZ.s.GUILD ? null : r.id,
        p = t === n,
        f = r.type === eZ.s.GUILD ? r.guild : null,
        g = (0, s.jsxs)(F.D, {
            ...h,
            "aria-label": (0, eu.wt)(r, f),
            className: o()({
                [e4.ZG]: null != f,
                [e4.Bj]: null == f,
                [e4.s6]: null == f && p,
                [e4.xg]: r.type === eZ.s.RECENT,
            }),
            onClick: () => {
                null != f &&
                    er.default.track($.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: l?.location,
                        tab: e_.kx.EMOJI,
                        guild_id: f.id,
                    }),
                    c(n);
            },
            children: [
                null != f
                    ? (0, s.jsx)(eJ.A, { guild: f, isSelected: p, shouldAnimate: !d && u, isLocked: r.isNitroLocked })
                    : null,
                null == f && null != m
                    ? (0, s.jsx)(eq, { categoryId: m, className: e4.Yl, height: e5, width: e5, size: "custom" })
                    : null,
            ],
        }),
        _ = i[n + 1],
        x = null != _ && r.type === eZ.s.GUILD && _.type !== eZ.s.GUILD;
    return null != f
        ? (0, s.jsxs)(a.Fragment, {
              children: [
                  (0, s.jsx)(eM.Q, { guild: f, children: (0, s.jsx)("div", { children: g }) }),
                  x ? (0, s.jsx)("hr", { className: e4.ny }, "separator") : null,
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
            channel: r,
            fallbackGuildId: c,
            shouldShowSoundmojiInEmojiPicker: u = !1,
            showOnlyUnicode: d = !1,
        } = e,
        m = O.Om.useStore((e) => e.activeCategoryIndex),
        p = ((e) => {
            let { emojiListRef: t } = e,
                n = (0, P.RQ)((e) => e.searchQuery),
                l = a.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return a.useCallback(
                (e) => {
                    "" !== n ? ((0, P.Ri)(""), O.Om.setActiveCategoryIndex(e)) : l(e);
                },
                [l, n],
            );
        })({ sectionDescriptors: l, emojiListRef: n }),
        f = (0, x.p)(),
        g = (0, eu.ss)(i, r, r?.guild_id ?? c, u),
        _ = a.useMemo(() => (d ? (0, eu.CQ)() : g), [g, d]),
        C = a.useRef(null),
        A = (0, h.bG)([eO.A], () => eO.A.isFocused()),
        E = (0, h.bG)([eA.A], () => eA.A.useReducedMotion, []),
        I = a.useMemo(
            () =>
                ew().memoize((e, t) => {
                    let n = _[t];
                    if (null != n)
                        return (0, s.jsx)(
                            to,
                            {
                                activeIndex: m,
                                analyticsContext: f,
                                categories: _,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: p,
                                isWindowFocused: A,
                                useReducedMotion: E,
                            },
                            t,
                        );
                }),
            [m, f, _, p, A, E],
        ),
        v = a.useMemo(() => [8, 8, 0, 8], []),
        y = a.useCallback(
            (e, t) => {
                let n = _[t];
                if (n.type === eZ.s.RECENT) return ti;
                if (n.type === eZ.s.GUILD) {
                    let e = _[t + 1];
                    return null != e && e.type !== eZ.s.GUILD ? ta : ts;
                }
                return tr;
            },
            [_],
        ),
        {
            nonUnicodeCategoryCount: b,
            firstUnicodeCategoryIndex: S,
            firstUnicodeCategoryOffsetTop: N,
            rowCountBySection: j,
        } = a.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                l = 0;
            _.forEach((i) => {
                i.type === eZ.s.GUILD
                    ? ((t += 1), (n += 1))
                    : i.type === eZ.s.UNICODE
                      ? (l += 1)
                      : ((e += 1), (t += 1));
            });
            let i = ti + t * ts + ta;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, l],
            };
        }, [_]),
        [T, w] = a.useState(!0);
    a.useLayoutEffect(() => {
        w(b >= 7);
    }, [b]);
    let R = a.useCallback(
            (e) => {
                let t = C.current?.getListDimensions();
                null == t || (e + t.height - tn >= N ? w(!1) : w(!0));
            },
            [N],
        ),
        L = a.useCallback(
            (e) => {
                e(S), C.current?.scrollTo(N);
            },
            [N, S],
        ),
        k = a.useCallback(
            (e, t) => {
                let n = _[e];
                if (null == n) return 0;
                let l = T ? tt : 0;
                if (n.type === eZ.s.RECENT) return t ? 0 : e9;
                if (n.type === eZ.s.GUILD) {
                    let n = _[e + 1];
                    return null != n && n.type !== eZ.s.GUILD ? (t ? tn + -2 * tl + e8 + l : e8) : t ? l : e8;
                }
                return t ? e8 + l : 2 * e8;
            },
            [_, T],
        ),
        M = a.useMemo(
            () =>
                function (e, t) {
                    return (0, s.jsx)(a.Fragment, { children: t }, e);
                },
            [],
        ),
        D = T ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(ek.A, {
        categoryListRef: C,
        expressionsListRef: n,
        className: t,
        store: O.Om,
        categories: _,
        listPadding: v,
        onScroll: R,
        renderCategoryListItem: I,
        renderSection: M,
        rowCount: _.length,
        categoryHeight: y,
        getScrollOffsetForIndex: k,
        rowCountBySection: j,
        children: (e) =>
            b >= 7 &&
            (0, s.jsx)(
                F.D,
                {
                    "aria-hidden": !T,
                    "aria-label": ee.intl.string(ee.t.dT0ctw),
                    className: o()(e4.KB, { [e4.h_]: !T }),
                    tabIndex: T ? 0 : -1,
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
            (0, s.jsx)(eW.C, { size: "md", color: "currentColor", className: td.Kk }),
            (0, s.jsx)("div", {
                className: td.Qs,
                children: (0, s.jsx)(K.E, { variant: "text-xs/normal", children: ee.intl.string(ee.t.xdRf69) }),
            }),
            (0, s.jsx)(F.D, {
                onClick: () => t(tu.i.UNKNOWN),
                children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: td.VN }),
            }),
        ],
    });
};
var tm = n(487514),
    tp = n(459192),
    tf = n(717421),
    tg = n(343032),
    t_ = n(932001),
    tx = n(927578),
    tC = n(337889);
let tA = { tension: 750, mass: 2.5, friction: 70 };
function tE(e) {
    let { checked: t, onClick: n } = e,
        l = (0, h.bG)([eA.A], () => eA.A.useReducedMotion),
        i = ea.default.getCurrentUser(),
        r = null != i && !(0, tx.TW)(i),
        c = r ? [] : [m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [u, d] = (0, t_.kn)(c),
        [p, f] = a.useState(!1),
        [g, _] = (0, tf.z)(() => ({})),
        x = (0, tm.animated)(tg.i);
    a.useEffect(() => {
        let e = u === m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (d(tu.i.DISMISS), setTimeout(() => f(e), 200));
    }, [u, d]);
    let C = p ? ee.intl.string(ee.t["Osi/uy"]) : t && !r ? ee.intl.string(ee.t["5cRA/b"]) : ee.intl.string(ee.t.buV4av),
        A = p ? ee.intl.string(ee.t.ORK94p) : void 0;
    return (0, s.jsx)(tp.u, {
        position: "top",
        title: A,
        body: C,
        asset: (0, s.jsx)(eC.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: p,
        children: (0, s.jsx)(F.D, {
            "aria-label": C,
            "aria-pressed": t,
            onClick: function () {
                _({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tA }),
                    n?.(),
                    f(!1);
            },
            focusProps: { enabled: !1 },
            className: o()(tC.Pf, { [tC.wM]: t }),
            children: (0, s.jsx)(x, {
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
var tI = n(821609),
    tv = n(644508),
    ty = n(824832),
    tb = n(638263);
function tS(e) {
    let { channel: t } = e,
        n = a.useRef(null),
        l = a.useRef(0),
        [i, r] = a.useState(!1),
        [o, c] = a.useState(!1),
        u = o || i,
        d = a.useCallback(
            async (e, n, i) => {
                c(!0),
                    await (0, tv.f)({
                        userImage: { data: e, file: n, image: i },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: $.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? $.liQ.GUILD_CHANNEL : $.liQ.DM_CHANNEL,
                        },
                    }),
                    (l.current += 1),
                    c(!1);
            },
            [t],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tI.$, {
                text: ee.intl.string(ee.t.iMJO37),
                variant: "secondary",
                onClick: () => {
                    n.current?.activateUploadDialogue();
                },
                disabled: u,
            }),
            (0, s.jsx)("div", {
                className: tb.F,
                children: (0, s.jsx)(ty.Ay, { ref: n, onChange: d, setLoading: r, disabled: u }, l.current),
            }),
        ],
    });
}
n(667532);
var tN = n(838677),
    tj = n(82495),
    tT = n(260762),
    tw = n(915089),
    tR = n(650583),
    tL = n(46274);
let tk = (0, tw.Ld)(),
    tM = tN.A.convert.fromCodePoint("1f44f"),
    tO = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
    tP = (e) => {
        let { fade: t, surrogate: n, onClick: l, delay: i, index: a } = e,
            r = (0, eR.rm)(`item-${a}`),
            o = em.Ay.getURL(tM + n),
            c = (0, tf.z)({ opacity: 1, from: { opacity: +!t }, delay: i }, "animate-always");
        return (0, s.jsx)(F.D, {
            ...r,
            role: "option",
            "aria-selected": 0 === a,
            onClick: () => l(n),
            className: tL.B6,
            children: (0, s.jsx)(tm.animated.div, {
                "aria-label": (function (e) {
                    switch (tN.A.convert.toCodePoint(e)) {
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
            i = (0, tT.A)("diversity"),
            r = (0, tf.z)({
                height: (tO + 14) * (e$.W$.length + 1),
                from: { height: tO + 14 },
                config: { duration: 125 },
            });
        a.useEffect(() => {
            i.focusFirstVisibleItem();
        }, [i]);
        let o = ["", ...e$.W$];
        return (
            ew().remove(o, (e) => e === n),
            o.unshift(n),
            (0, s.jsx)(eR.hD, {
                navigator: i,
                children: (0, s.jsx)(eR.PR, {
                    children: (e) => {
                        let { ref: n, ...i } = e;
                        return (0, s.jsx)(tm.animated.div, {
                            ...i,
                            id: t,
                            ref: n,
                            className: tL.J6,
                            style: r,
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
            i = em.Ay.getURL(tM + n),
            [r, c] = a.useState(!1),
            u = (0, tj.A)(null, () => c(!1)),
            d = a.useRef(null);
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
                    "aria-expanded": r,
                    "aria-controls": tk,
                    tabIndex: r ? -1 : 0,
                    children: (0, s.jsx)("div", { className: tL.g4, style: { backgroundImage: `url("${i}")` } }),
                }),
                r
                    ? (0, s.jsx)("div", {
                          onKeyDown: (e) => {
                              e.key === tR.dh.ESCAPE &&
                                  (e.stopPropagation(), c(!1), null != d.current && d.current.focus());
                          },
                          children: (0, s.jsx)(tD, {
                              id: tk,
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
var tV = n(942381),
    tG = n(602034),
    tF = n(892547);
let tB = a.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: l,
                onKeyDown: i,
                onFocus: r,
                autoFocus: o,
                defaultSearchPlaceholder: c,
            } = e,
            u = a.useRef(null),
            d = (0, P.RQ)((e) => e.searchQuery),
            [h, m, p] = O.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tV.x,
            ),
            f = a.useCallback(
                (e) => {
                    O.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        O.Om.setInspectedExpressionPosition(0, 0),
                        O.Om.setSearchPlaceholder(null),
                        (0, P.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            g = a.useCallback(() => {
                f("");
            }, [f]);
        return (
            a.useImperativeHandle(t, () => ({ focus: () => u.current?.focus() })),
            (0, s.jsx)(tF.I, {
                autoFocus: o,
                query: d,
                ref: u,
                placeholder: m ?? c,
                onClear: g,
                onKeyDown: (e) => {
                    switch (e.key) {
                        case tR.dh.ARROW_LEFT:
                        case tR.dh.ARROW_RIGHT:
                        case tR.dh.ARROW_UP:
                        case tR.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    i(e);
                },
                onFocus: r,
                onChange: f,
                inputProps: {
                    "aria-label": ee.intl.string(ee.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": l,
                    "aria-expanded": !0,
                    ...(p ? { "aria-activedescendant": (0, tG.Aq)(l, h.columnIndex, h.rowIndex) } : void 0),
                },
            })
        );
    }),
    tH = a.memo(tB);
var tW = n(873426);
let tK = (e) => {
    let {
            channel: t,
            accessory: n,
            pickerIntention: l,
            headerClassName: i,
            emojiListRef: a,
            onKeyDown: r,
            onFocus: c,
            autoFocus: u,
            searchBarRef: d,
            diversitySurrogate: h,
            isBurstReaction: m,
            onBurstReactionToggle: p,
            renderHeader: f,
            showAddEmojiButton: g = !0,
        } = e,
        _ = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tH, {
                    emojiListRef: a,
                    gridNavigatorId: eZ.lq,
                    onKeyDown: r,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eu.wT)(l, m),
                }),
                l === eg.EmojiIntention.REACTION ? (0, s.jsx)(tE, { checked: m, onClick: p }) : null,
                n ?? (0, s.jsx)(tU, { searchBarRef: d, className: tW.fx, selectedSurrogate: h }),
                l !== eg.EmojiIntention.NO_CUSTOM_EMOJI && g ? (0, s.jsx)(tS, { channel: t }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: o()(tW.wx, i), children: null != f ? f(_) : _ });
};
var tz = n(182922),
    tZ = n(363195),
    tq = n(486020),
    tJ = n(854469);
function tY(e) {
    return null != e && "animated" in e;
}
let tX = a.memo(function (e) {
    let t,
        l,
        i,
        { className: r, emojiGrid: o, guildId: c, pickerIntention: u, channel: d } = e,
        m = O.Om.useStore((e) => e.inspectedExpressionPosition),
        p = a.useMemo(() => {
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
    let f = (0, h.bG)([J.A], () => (null !== t && t.type === eX.i.GUILD ? J.A.getGuild(t.guildId) : null), [t]),
        g = (0, h.bG)([eO.A], () => eO.A.isFocused()),
        _ = (0, h.bG)([eA.A], () => eA.A.useReducedMotion, []),
        x = ei.Sf.useSetting(),
        C = (0, eu.O7)(c, tY(t) ? t : null),
        A = (0, h.bG)([v.Ay], () => v.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: E } = (0, ef.A)(c, u),
        I = p?.type === e2.EMOJI ? p.subCategory : eZ.tm.NONE;
    if (
        (a.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    tY(t) &&
                    I !== eZ.tm.NONE &&
                    (I === eZ.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eX.i.GUILD &&
                        (0, M.mz)(t.guildId, E[0].id),
                    null != m.source &&
                        (0, eu.yB)({
                            emoji: t,
                            subCategory: I,
                            position: p.columnIndex + 1,
                            newlyAddedHighlight: I === eZ.tm.NEWLY_ADDED_EMOJI && k.isNewerThanLastSeen(c, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = tZ.A.theme;
    if (tY(t)) {
        let e = null != t.id ? tq.Ay.getEmojiURL({ id: t.id, animated: x && t.animated, size: 28 }) : t.url;
        l =
            "" === e
                ? (0, s.jsx)(K.E, {
                      variant: "text-md/normal",
                      className: tJ.J_,
                      children: "surrogates" in t ? t.surrogates : null,
                  })
                : (0, s.jsx)("img", { alt: (0, em.N)(t) ?? "", src: e, className: tJ.Zg });
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
        let e = n(619508),
            i = n(404828),
            a = n(600003),
            r = n(318121);
        l = A.has(t.guildId)
            ? (0, s.jsx)("img", { className: tJ.Kk, src: (0, G.M)(y) ? a : r, alt: "" })
            : (0, s.jsx)("img", { className: tJ.Kk, src: (0, G.M)(y) ? e : i, alt: "" });
    }
    let b =
        null != f ? (0, s.jsx)(eJ.A, { className: tJ.__invalid_guildIcon, guild: f, shouldAnimate: !_ && g }) : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? A.has(t.guildId)
                ? ee.intl.string(ee.t["/K2RDH"])
                : ee.intl.string(ee.t.NZI2Zk)
            : (0, em.N)(t);
    let S = ((e) => {
        let { inspectedEmoji: t, guild: n } = e,
            l = tY(t);
        return null != n && l ? ee.intl.format(ee.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: d, guildId: c, intention: u, guild: f });
    return (0, s.jsx)(tz.A, {
        className: r,
        graphicPrimary: l,
        graphicSecondary: b,
        titlePrimary: i,
        titleSecondary: S,
        isFavorite: C,
        emojiSubCategory: I,
    });
});
var t$ = n(607399),
    tQ = n(537652),
    t0 = n(962125),
    t1 = n(240864),
    t2 = n(286509),
    t6 = n(89366),
    t3 = n(959249),
    t4 = n(414872),
    t7 = n(400669),
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
var na = n(818348),
    nr = n(219920);
let no = a.memo(function (e) {
    let t,
        n,
        l,
        i,
        { channelId: r, onSelectSoundmoji: o } = e,
        c = (0, h.bG)([nl.A], () => !nl.A.isFetching() && !nl.A.hasFetchedAllSounds(), []),
        u = (0, h.bG)([ed.A], () => ed.A.getChannel(r)),
        d =
            ((t = (0, h.bG)([ea.default], () => tx.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, h.bG)([nl.A], () => nl.A.getSoundsForGuild("0"))),
            (l = (0, h.yK)([J.A], () => J.A.getGuildIds())),
            (i = a.useMemo(() => ns.A.can(na.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            a.useMemo(() => {
                let e = [];
                if (t && i) {
                    let t = l.flatMap((e) => nl.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...ew().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = nl.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...ew().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...ew().sampleSize(n ?? [], 4 - e.length)), e;
            }, [i, u?.guild_id, n, l, t]));
    return (a.useEffect(() => {
        (0, nn.E7)();
    }, [c]),
    0 === d.length)
        ? (0, s.jsx)(nt.y, {})
        : (0, s.jsx)("div", {
              className: nr.q,
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
    n_ = n(881274);
let nx = (e) => {
    let { src: t, alt: n, size: l, "aria-label": i, className: r } = e,
        c = a.useRef(null),
        u = a.useRef(!1),
        d = u.current ? n_.S : n_.Y;
    return (0, s.jsx)("img", {
        className: o()(d, r),
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
                          ((u.current = !0), c.current.classList.remove(n_.Y), c.current.classList.add(n_.S));
                  });
              },
    });
};
var nC = n(297547);
let nA = ew().memoize(
        (e) =>
            `${e * eg.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(e$.Ay.numNonDiversitySprites / eg.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nE = ew().memoize(
        (e) =>
            `${e * eg.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(e$.Ay.numDiversitySprites / eg.EmojiSprites.DiversityPerRow)}px`,
    ),
    nI = a.memo(function (e) {
        let { emoji: t, size: l, surrogateCodePoint: i, allowAnimatedEmoji: r, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : tq.Ay.getEmojiURL({ id: t.id, animated: r && t.animated, size: eg.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(nx, {
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
                        let i, s, a;
                        if (!e.useSpriteSheet) return;
                        let r = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((i = n(983660)(`./spritesheet-${t}-${l}.png`)),
                              (s = nE(l)),
                              (a = eg.EmojiSprites.DiversityPerRow))
                            : ((i = n(883740)(`./spritesheet-emoji-${l}.png`)),
                              (s = nA(l)),
                              (a = eg.EmojiSprites.NonDiversityPerRow));
                        let o = (-r % a) * l,
                            c = -Math.floor(r / a) * l;
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
        return (0, s.jsxs)(a.Fragment, {
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
var nv = n(6376);
let ny = (e, t) => `${e}:${t}`,
    nb = a.forwardRef(function (e, t) {
        let n,
            {
                emoji: l,
                isFavorite: i,
                isLargeSize: a,
                isMediumSize: r,
                isInspected: c,
                isDisabled: u,
                showPulse: d,
                columnIndex: m,
                rowIndex: p,
                size: f,
                surrogateCodePoint: g,
                allowAnimatedEmoji: _,
                selectedItemClassName: x,
                inNitroLockedSection: C,
                ...A
            } = e,
            E = (0, h.bG)([J.A], () => (l.type === eX.i.GUILD ? J.A.getGuild(l.guildId) : void 0), [l]);
        return (0, s.jsx)(t5.vN, {
            children: (0, s.jsx)("button", {
                ...A,
                className: o()(nv._X, { [nv.lG]: a, [nv.Lh]: r, [nv.Bx]: c, [x ?? ""]: c, [nv.TV]: d }),
                "data-type": D.g.EMOJI,
                "data-id": l.id,
                "data-name": l.name,
                "data-surrogates": "surrogates" in l ? l.surrogates : null,
                "data-animated": l.animated ? "true" : null,
                ref: t,
                children: (0, s.jsx)(nI, {
                    "aria-label":
                        ((n = (0, em.N)(l)),
                        (E?.name != null &&
                            (n = ee.intl.formatToPlainString(ee.t["nXv4/B"], { names: n, guildName: E.name })),
                        i)
                            ? ee.intl.formatToPlainString(ee.t["9FI9Z0"], { names: n })
                            : n),
                    columnIndex: m,
                    rowIndex: p,
                    emoji: l,
                    size: f,
                    surrogateCodePoint: g,
                    allowAnimatedEmoji: _,
                    isLocked: u && !C,
                }),
            }),
        });
    });
function nS(e) {
    let {
            descriptor: t,
            emojiItemKey: l,
            isInspected: i,
            rowIndex: r,
            channelGuildId: o,
            onInspect: c,
            onSelect: u,
            isScrolling: d,
            isUsingKeyboardNavigation: m,
            showEmojiFavoriteTooltip: p,
            surrogateCodePoint: f,
            selectedItemClassName: g,
            getEmojiItemProps: _,
            isMediumSize: x,
            isLargeSize: C,
            pulseItemKey: A,
            allowAnimatedEmoji: E,
            setPulseItemKey: I,
            messageId: y,
            isBurstReaction: b,
            rowPosition: S,
            inNitroLockedSection: N,
        } = e,
        [j, T] = a.useState(""),
        w = (0, h.bG)([eA.A], () => eA.A.useReducedMotion),
        R = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(o), [o]),
        L = a.useRef(null),
        { emoji: k, size: M, isDisabled: O, columnIndex: P } = t,
        D = () => {
            d.current || m.current || c(t);
        },
        { ref: U, tabIndex: V, onFocus: G, ...F } = _(P, r) ?? {},
        B =
            j !== ny(P, r)
                ? (0, s.jsx)(nb, {
                      ref: U,
                      emoji: k,
                      isFavorite: R.isFavoriteEmojiWithoutFetchingLatest(k),
                      isLargeSize: C,
                      isMediumSize: x,
                      isInspected: i,
                      isDisabled: O,
                      showPulse: A === l,
                      allowAnimatedEmoji: E,
                      onFocus: G ?? D,
                      onMouseMove: D,
                      onClick: (e) => {
                          if (
                              null != L.current &&
                              null != S &&
                              null != y &&
                              !e.shiftKey &&
                              null != k.name &&
                              b &&
                              !w &&
                              E
                          ) {
                              let e = null == k.id ? e$.Ay.convertNameToSurrogate(k.name) : k.name,
                                  t = L.current.getBoundingClientRect();
                              (t.x = S.x + (P + 1) * M), T(ny(P, r)), (0, nm.h)(y, e, k.id, t);
                          }
                          ((e) => {
                              if ((e.stopPropagation(), d.current || m.current)) return;
                              let n = e.altKey;
                              n && !v.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(k) && I(l),
                                  (0, el.sF)(el._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: (e) => {
                          (0, nh.L3)(e, async () => {
                              let { default: e } = await n.e("23751").then(n.bind(n, 233503));
                              return (t) => (0, s.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: V,
                      columnIndex: P,
                      rowIndex: r,
                      size: M,
                      surrogateCodePoint: f,
                      selectedItemClassName: g,
                      inNitroLockedSection: N,
                  })
                : null;
    return (0, a.createElement)(
        "li",
        { ...F, key: l, ref: L },
        p
            ? (0, s.jsx)(nd.m, {
                  text: ee.intl.formatToPlainString(ee.t.glqNsf, { key: (0, np.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: B,
              })
            : B,
    );
}
let nN = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: l,
            onSelect: i,
            onSelectSoundmoji: r,
            onInspect: c,
            surrogateCodePoint: u,
            getEmojiItemProps: d,
            getEmojiRowProps: h,
            isScrolling: m,
            isUsingKeyboardNavigation: p,
            rowIndex: f,
            allowAnimatedEmoji: g,
            showEmojiFavoriteTooltip: _,
            channelGuildId: x,
            category: C,
            selectedItemClassName: A,
            channelId: E,
            messageId: I,
            isBurstReaction: v,
            inNitroLockedSection: y,
            handleScrollUpOnSectionCollapse: b,
        } = e,
        S = n(619508),
        N = n(404828),
        j = n(600003),
        T = n(318121),
        w = n(443336),
        R = n(258901),
        L = n(135974),
        M = n(8013),
        P = (0, z.Ay)(),
        D = O.Om.getState(),
        [U, V] = a.useState(D.inspectedExpressionPosition),
        [F, B] = (0, t9.A)(null, 300),
        H = a.useRef(null);
    a.useEffect(
        () =>
            O.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => V(e),
            ),
        [],
    ),
        a.useEffect(() => {
            nc.bW.loadIfNecessary();
        }, []);
    let W = l === eZ.as.LARGE,
        Z = l === eZ.as.MEDIUM,
        q = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`;
            switch (e.type) {
                case e2.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: l } = e,
                        r = U.rowIndex === n && U.columnIndex === l,
                        u = e.sectionCollapsedToThreeRows
                            ? r
                                ? (0, G.M)(P)
                                    ? R
                                    : M
                                : (0, G.M)(P)
                                  ? S
                                  : N
                            : r
                              ? (0, G.M)(P)
                                  ? w
                                  : L
                              : (0, G.M)(P)
                                ? j
                                : T,
                        h = ee.intl.string(e.sectionCollapsedToThreeRows ? ee.t.NZI2Zk : ee.t["/K2RDH"]);
                    return (function () {
                        let {
                                onMouseEnter: n,
                                onMouseLeave: l,
                                handleSelect: i,
                                icon: r,
                                ariaLabel: u,
                                shouldShowRoundHighlight: h,
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            { visibleRowIndex: g, columnIndex: _ } = e,
                            { ref: x, tabIndex: C, onFocus: E, ...I } = d(_, f) ?? {},
                            v = U.rowIndex === g && U.columnIndex === _,
                            y = () => {
                                m.current || p.current || c(e);
                            };
                        return (0, a.createElement)(
                            "li",
                            { ...I, key: t },
                            (0, s.jsx)(t5.vN, {
                                children: (0, s.jsx)("button", {
                                    "aria-label": u,
                                    ref: x,
                                    className: o()(nv._X, {
                                        [nv.lG]: W,
                                        [nv.Lh]: Z,
                                        [nv.Bx]: v && !h,
                                        [A ?? ""]: v,
                                        [nv.TV]: F === t,
                                    }),
                                    onFocus: E ?? y,
                                    onMouseOver: y,
                                    onMouseEnter: n,
                                    onMouseLeave: l,
                                    onClick: i,
                                    tabIndex: C,
                                    children: r,
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
                                    e.sectionCollapsedToThreeRows || b(),
                                    er.default.track($.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        icon: (0, s.jsx)("img", { className: nv.Kk, src: u, alt: "" }),
                        ariaLabel: h,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case e2.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: l } = e,
                        a = U.rowIndex === l && U.columnIndex === n;
                    return (0, s.jsx)(
                        nS,
                        {
                            rowIndex: f,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: a,
                            isScrolling: m,
                            isUsingKeyboardNavigation: p,
                            surrogateCodePoint: u,
                            allowAnimatedEmoji: g,
                            selectedItemClassName: A,
                            onSelect: i,
                            onInspect: c,
                            channelGuildId: x,
                            getEmojiItemProps: d,
                            isMediumSize: Z,
                            isLargeSize: W,
                            pulseItemKey: F,
                            setPulseItemKey: B,
                            showEmojiFavoriteTooltip: _,
                            messageId: I,
                            isBurstReaction: v,
                            rowPosition: H?.current?.getBoundingClientRect(),
                            inNitroLockedSection: y,
                        },
                        t,
                    );
                }
                case e2.SOUNDMOJI:
                    return;
            }
        },
        J = (e) =>
            (0, s.jsx)("ul", {
                ...h(f),
                className: o()(nv.ND, { [nv.HO]: W, [nv.X$]: Z }),
                ref: H,
                children: e.map(q),
            });
    if (C === eZ.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nv.ND,
            ref: H,
            children: (0, s.jsx)(no, { channelId: E, onSelectSoundmoji: r }),
        });
    if (C !== eZ.s.TOP_GUILD_EMOJI) return J(t);
    let Y = t.filter(
            (e) =>
                e.subCategory === eZ.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === eZ.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eX.i.GUILD &&
                    !k.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        X = t.filter(
            (e) =>
                e.subCategory === eZ.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eX.i.GUILD &&
                k.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === X.length
        ? J(t)
        : (0, s.jsxs)("div", {
              className: nv.Ng,
              children: [
                  (0, s.jsx)("div", { className: o()(nv.V6, { [nv.$3]: 0 === Y.length }), children: J(Y) }),
                  (0, s.jsxs)("div", {
                      className: nv.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(nv.eE, { [nv.eM]: 1 === X.length, [nv.Wk]: Y.length > 0 }),
                              children: J(X),
                          }),
                          (0, s.jsxs)("div", {
                              className: o()(nv.lD, { [nv.EI]: W, [nv.qU]: Z, [nv.Wk]: Y.length > 0 }),
                              children: [
                                  (0, s.jsx)(nu.A, { foreground: nv.rI }),
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
let nT = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nw = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nR = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nL = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nk = (0, ec.xI)(p.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nM = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nO = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nP = a.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: l,
                emojiGrid: i,
                emojiListRef: r,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                setUpsellConfigs: m,
                sectionDescriptors: p,
                rowCountBySection: f,
                collapsedSections: g,
                setCollapsedSections: _,
                getEmojiItemProps: A,
                getEmojiRowProps: I,
                rowCount: v,
                isUsingKeyboardNavigation: y,
                channelGuildId: b,
                channelId: S,
                messageId: N,
                isBurstReaction: j,
                listHeaderClassName: T,
            } = e,
            w = a.useRef(!1),
            R = O.Om.useStore((e) => e.activeCategoryIndex),
            L = (0, P.RQ)((e) => e.searchQuery),
            k = ei.Sf.useSetting(),
            M = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
            V = (0, eo.ki)(M),
            G = (0, t8.St)("emoji_picker_floating_upsell"),
            { location: B } = (0, x.p)(),
            { analyticsLocations: H } = (0, E.Ay)(),
            [W, K] = a.useState(0),
            [z, Z] = a.useState(!1),
            {
                listPadding: q,
                renderRow: J,
                renderSection: Y,
                renderSectionHeader: X,
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
                        onEmojiSelect: r,
                        onSelectSoundmoji: c,
                        searchQuery: u,
                        sectionDescriptors: d,
                        setCollapsedSections: m,
                        getEmojiItemProps: p,
                        getEmojiRowProps: f,
                        isScrolling: g,
                        isUsingKeyboardNavigation: _,
                        allowAnimatedEmoji: C,
                        channelGuildId: A,
                        channelId: E,
                        messageId: I,
                        isBurstReaction: v,
                        listHeaderClassName: y,
                        activeSectionIndex: b,
                        emojiListRef: S,
                    } = e,
                    N = (0, x.p)(),
                    j = a.useRef($.An1),
                    T = a.useMemo(() => ("" !== n ? tN.A.convert.toCodePoint(n) : ""), [n]),
                    w = a.useCallback(
                        (e) => {
                            let t = d[e],
                                n = d[e + 1];
                            return e >= d.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [d],
                    ),
                    R = a.useCallback(
                        (e) => {
                            if (e >= d.length - 1) return !1;
                            let t = d[e],
                                n = d[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [d],
                    ),
                    L = a.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                l = new Set(t),
                                i = t.has(e);
                            i ? l.delete(e) : l.add(e),
                                null != n &&
                                    er.default.track($.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: N.location,
                                        tab: e_.kx.EMOJI,
                                        collapsed: !i,
                                        guild_id: n.id,
                                    }),
                                e === eZ.R2.SOUNDMOJI &&
                                    er.default.track($.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                                m(l);
                        },
                        [N, t, m],
                    ),
                    k = a.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            l = e.type === e2.SOUNDMOJI ? null : e.type === e2.EMOJI ? (0, em.N)(e.emoji) : e.name;
                        j.current !== $.An1 && window.cancelAnimationFrame(j.current),
                            (j.current = window.requestAnimationFrame(() => {
                                O.Om.setInspectedExpressionPosition(t, n, D.t.MOUSE_EVENT),
                                    O.Om.setSearchPlaceholder(l),
                                    (j.current = $.An1);
                            }));
                    }, []),
                    M = (0, h.bG)([el.HP], () => el.HP.hasHotspot(el._2.FAVORITE_EMOJI_TOOLTIP), []),
                    U = a.useMemo(
                        () =>
                            ew().memoize((e, t) => {
                                let n = l[e],
                                    a = d[t.sectionIndex];
                                return (0, s.jsx)(
                                    nN,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: i,
                                        surrogateCodePoint: T,
                                        onInspect: k,
                                        onSelect: r,
                                        onSelectSoundmoji: c,
                                        getEmojiItemProps: p,
                                        getEmojiRowProps: f,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: _,
                                        rowIndex: e,
                                        allowAnimatedEmoji: C,
                                        showEmojiFavoriteTooltip: M,
                                        channelGuildId: A,
                                        category: a.sectionId,
                                        selectedItemClassName: nj.__invalid_selectedItem,
                                        channelId: E,
                                        messageId: I,
                                        isBurstReaction: v,
                                        inNitroLockedSection: a.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: () => {
                                            S.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [l, d, i, T, k, r, c, p, f, g, _, C, M, A, E, I, v, S],
                    );
                a.useEffect(() => () => U.cache?.clear?.(), [U]);
                let V = a.useMemo(
                        () =>
                            ew().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: l, categoryId: i, type: a, sectionId: r } = n;
                                if (a === eZ.s.SEARCH_RESULTS) return;
                                let c =
                                        a === eZ.s.GUILD
                                            ? null != l
                                                ? (0, s.jsx)(eJ.A, { guild: l, height: 16, width: 16 })
                                                : null
                                            : null != i
                                              ? (0, s.jsx)(eq, { categoryId: i, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = l?.name;
                                null != i && (u = (0, eu.Nu)(i, l?.name));
                                let h = b === e,
                                    m = n.isNitroLocked,
                                    p = m && !h,
                                    f = m && h,
                                    g =
                                        a === eZ.s.SOUNDMOJI
                                            ? (0, s.jsx)(F.D, {
                                                  className: nj.f3,
                                                  onClick: () => {
                                                      (0, P.U)(e_.kx.SOUNDBOARD),
                                                          er.default.track($.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: ee.intl.string(ee.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t2.A,
                                    {
                                        className: o()(nj.wx, y, { [nj.RA]: p, [nj.sp]: f }),
                                        icon: c,
                                        isCollapsed: t.has(r),
                                        onClick: () => L(r, l),
                                        trailing: g,
                                        children: u,
                                    },
                                    r,
                                );
                            }),
                        [d, t, L, y, b],
                    ),
                    G = (0, eQ.k0)(),
                    B = a.useCallback(
                        (e, n) => {
                            let l = d[e],
                                i = R(e),
                                a = w(e);
                            return (0, s.jsx)(
                                "div",
                                {
                                    className: o()(nj.Wy, {
                                        [nj.YD]: e === d.length - 1,
                                        [nj.jl]: t.has(l.sectionId),
                                        [nj.cW]: l.isNitroLocked,
                                        [nj.T5]: i || a,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, R, w],
                    ),
                    H = a.useCallback(
                        (e) =>
                            R(e)
                                ? G
                                    ? (0, s.jsx)(t4.ap, {})
                                    : (0, s.jsx)(t4.Ay, {})
                                : w(e)
                                  ? (0, s.jsx)("div", { className: nj.pQ })
                                  : null,
                        [R, w, G],
                    ),
                    W = a.useCallback((e) => (R(e) ? 41 : 33 * !!w(e)), [R, w]),
                    K = a.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || R(e) || w(e) ? 0 : nM),
                        [t, d, R, w],
                    );
                return {
                    listPadding: a.useMemo(() => ["" !== u ? nL : nT, nw, nR, 0], [u]),
                    renderRow: U,
                    renderSection: B,
                    renderSectionHeader: V,
                    renderSectionFooter: H,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: a.useCallback((e) => (d[e].type === eZ.s.SEARCH_RESULTS ? 0 : nk), [d]),
                    sectionFooterHeight: W,
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
                setCollapsedSections: _,
                getEmojiItemProps: A,
                getEmojiRowProps: I,
                isScrolling: w,
                isUsingKeyboardNavigation: y,
                allowAnimatedEmoji: k,
                channelGuildId: b,
                channelId: S,
                messageId: N,
                isBurstReaction: j,
                listHeaderClassName: T,
                activeSectionIndex: W,
                emojiListRef: r,
            }),
            ec = (0, U.Fk)({
                activeCategoryIndex: R,
                isScrolling: w,
                listRef: r,
                onActiveCategoryIndexChange: (e) => {
                    K(e), "" === L && O.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: L,
                disableForSearch: !1,
            });
        (0, U.FV)({ searchQuery: L, activeCategoryIndex: R, listRef: r });
        let ed = a.useCallback(
                (e) => {
                    ec(e),
                        nD({ emojiListRef: r, sectionDescriptors: p, scrollTop: e, searchQuery: L, setShowUpsell: Z });
                },
                [ec, r, p, L, Z],
            ),
            eh = p.length > 0;
        return (
            a.useEffect(() => {
                z &&
                    er.default.track($.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: eS.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: B,
                        location_stack: H,
                    });
            }, [B, H, z]),
            a.useEffect(() => {
                "" !== L && Z(!1);
            }, [L]),
            (0, s.jsxs)("div", {
                className: nj.AD,
                children: [
                    eh
                        ? (0, s.jsx)(t0.A, {
                              role: "none presentation",
                              className: nj.p_,
                              listPadding: q,
                              onScroll: ed,
                              renderRow: J,
                              renderSection: Y,
                              renderSectionHeader: X,
                              renderSectionFooter: Q,
                              rowCount: v,
                              rowCountBySection: f,
                              rowHeight: c + 2 * nO,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: et,
                              sectionFooterHeight: es,
                              stickyHeaders: !0,
                              ref: r,
                          })
                        : (0, s.jsx)(tQ.A, { message: ee.intl.string(ee.t.IxxiKF), className: nj.BZ }),
                    V || t$.Fr
                        ? null
                        : (0, s.jsx)(t3.d, {
                              showUpsell: z,
                              text:
                                  ((t = (0, tx.Dd)(eS.PremiumTypes.TIER_2)),
                                  ee.intl.format(ee.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          m({ type: e3.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t6.qD)()), (0, tx.LE)(n, eS.pe.TIER_2) ?? ee.intl.string(ee.t.BmJkbd)),
                              buttonAnalyticsObject: { section: $.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: G
                                  ? (0, s.jsx)(t7.l, {
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
    nD = ew().throttle(
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
    nV = n(349288),
    nG = n(323082),
    nF = n(404374),
    nB = n(780964),
    nH = n(858897),
    nW = n(166403),
    nK = n(542863);
let nz = "premiumRetentionEmojiPickerNotice",
    nZ = nU.w.get(nz),
    nq = (e) => {
        let { closePopout: t, channel: n } = e,
            [l, i] = a.useState(!1),
            { subscription: r, hasFetchedSubscriptions: o } = (0, h.cf)([nW.A], () => ({
                subscription: nW.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nW.A.hasFetchedSubscriptions(),
            }));
        if (
            (a.useEffect(() => {
                o || (0, nG.hP)();
            }, [o]),
            null == r || !(0, tx.PK)(r.status) || l)
        )
            return null;
        let c = r.status === $.Dmq.PAST_DUE ? (0, tx.ji)(r).expiresDate : b()(r.currentPeriodStart).add(eS.ph),
            u = `${r.id}:${c.toISOString()}`;
        if (nZ === u) return null;
        let d =
            tx.Ay.getPremiumType(r.planId) === eS.PremiumTypes.TIER_0
                ? nF.k0.PREMIUM_TIER_0
                : tx.Ay.getPremiumType(r.planId) === eS.PremiumTypes.TIER_1
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
                                planName: tx.Ay.getTierDisplayNameByPlanId(r.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nV.Anchor, {
                                onClick: () => {
                                    (0, eu.xf)(n), t(), (0, nH.openUserSettings)(nB.X.NITRO_PANEL);
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
                    children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: nK.YF }),
                }),
            ],
        });
    };
var nJ = n(148361);
let nY = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    nX = (0, ec.xI)(p.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    n$ = (e) => e.stopPropagation(),
    nQ = (e, t) => {
        O.Om.setInspectedExpressionPosition(e, t, D.t.GRID_NAVIGATOR_EVENT);
    },
    n0 = u()(eu.bo, 200),
    n1 = u()(eu.Wi, 200),
    n2 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n6 = a.memo(
        a.forwardRef(function (e, t) {
            let n,
                l,
                {
                    pickerIntention: i,
                    channel: r,
                    guildId: c,
                    closePopout: u,
                    emojiSize: p = eZ.as.MEDIUM,
                    hasTabWrapper: y = !1,
                    onSelectEmoji: b,
                    onSelectSoundmoji: S,
                    containerWidth: N,
                    onNavigateAway: j,
                    persistSearch: T,
                    className: w,
                    headerClassName: R,
                    analyticsOverride: L = n2,
                    searchProps: V = {},
                    wrapper: G,
                    shouldHidePickerActions: F = !1,
                    messageId: B,
                    renderHeader: H,
                    listHeaderClassName: W,
                    categoryListClassName: K,
                    shouldShowSoundmojiInEmojiPicker: z = !1,
                    showOnlyUnicode: Z = !1,
                    showAddEmojiButton: q,
                } = e,
                { onFocus: Y, onKeyDown: X, autoFocus: Q = !0, accessory: et } = V,
                ec = (0, h.bG)([es.Ay], () => (null != c ? es.Ay.getDefaultChannel(c) : null), [c]),
                [ed, eh] = a.useState(null),
                e_ = a.useRef(""),
                eC = (0, P.RQ)((e) => e.searchQuery),
                eA = a.useRef(null),
                eE = a.useRef(null),
                eI = a.useRef(null);
            null == r && null != ec && (r = ec);
            let ev = r?.getGuildId() ?? c ?? null,
                [ey, eb] = a.useState(!1),
                eS = ea.default.getCurrentUser(),
                eN = (0, eo.ki)(eS);
            a.useImperativeHandle(t, () => ({ onPickerOpen: e7 }));
            let { location: eT } = (0, x.p)(),
                { page: eR, section: eL, object: ek, openPopoutType: eM, popoutLocation: eO } = L,
                eP = a.useMemo(() => ({ ...eT, section: eL ?? $.JJy.EMOJI_PICKER_POPOUT }), [eT, eL]),
                { analyticsLocations: eD } = (0, E.Ay)(C.A.EMOJI_PICKER),
                { diversitySurrogate: eU } = (0, h.cf)([v.Ay], () => ({ diversitySurrogate: v.Ay.diversitySurrogate })),
                eV = (0, eu.sL)(eC, r, i, Z),
                eG = null == eV ? 0 : eV.locked.length + eV.unlocked.length,
                eF = ei.iM.useSetting(),
                eB = a.useMemo(() => new Set(eF), [eF]),
                eH = a.useCallback((e) => {
                    ei.iM.updateSetting(Array.from(e));
                }, []),
                eW = (0, U.oV)({ gridWrapperRef: eA, containerWidth: N, listPaddingLeft: nX, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eK,
                    sectionDescriptors: ez,
                    emojiGrid: eq,
                    columnCounts: eJ,
                } = ((e) => {
                    let {
                            channel: t,
                            fallbackGuildId: n,
                            collapsedSections: l,
                            pickerIntention: i,
                            emojiSearchResults: s,
                            gridWidth: r,
                            emojiPaddingHorizontal: o,
                            emojiSpriteSize: c,
                            shouldShowSoundmojiInEmojiPicker: u,
                            showOnlyUnicode: d,
                        } = e,
                        m = (0, h.bG)([v.Ay], () => v.Ay.categories),
                        p = a.useMemo(() => (d ? e$.Ay.getCategories() : m), [m, d]),
                        f = (0, h.bG)([J.A], () => J.A.getGuild(t?.getGuildId()), [t]),
                        g = t?.getGuildId() ?? n,
                        _ = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(g), [g]),
                        x = (0, eu.XI)(g),
                        C = (0, eu.Fj)(g),
                        A = (0, eu.QZ)(g),
                        { topEmojis: E, newlyAddedEmojis: I } = (0, ef.A)(g, i),
                        y = (0, h.yK)([e1.Ay], () => e1.Ay.getFlattenedGuildIds(), []),
                        b = (0, h.bG)([v.Ay], () => v.Ay.expandedSectionsByGuildIds),
                        S = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
                        N = (0, eo.ki)(S),
                        j = (0, eQ.k0)(),
                        T = _.getGroupedCustomEmoji(),
                        w = (0, e0.Ym)({ location: "useEmojiGrid" });
                    return a.useMemo(() => {
                        let e = [],
                            n = [],
                            a = [],
                            d = [],
                            h = 0,
                            m = 0;
                        if (null != _ && null != r) {
                            let g = Math.floor(r / (c + 2 * o)),
                                _ = 3 * g,
                                v = (s, r) => {
                                    let o = new Map(),
                                        u = l.has(r.sectionId),
                                        [p, f] = ew().partition(s, (e) => {
                                            let n = em.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: i });
                                            return o.set(e, n), !n;
                                        }),
                                        x = p.concat(f),
                                        C = r.guild,
                                        A = x.length > _ && null != C && r.isNitroLocked,
                                        v = A && !b.has(C.id);
                                    v && x.splice(_ - 1);
                                    let y = Math.ceil((A ? x.length + 1 : x.length) / g),
                                        S = [];
                                    for (let e = 0; e < y; e++) {
                                        let t = e * g,
                                            n = t + g,
                                            l = x
                                                .slice(t, n)
                                                .map((e, t) => ({
                                                    type: 0,
                                                    emoji: e,
                                                    size: c,
                                                    isDisabled: o.get(e),
                                                    rowIndex: m,
                                                    columnIndex: t,
                                                    visibleRowIndex: h,
                                                    category: r.type,
                                                    subCategory:
                                                        r.sectionId === eZ.s.TOP_GUILD_EMOJI
                                                            ? (0, eu.DA)(E, I, e.id ?? e.uniqueName ?? e.name)
                                                            : eZ.tm.NONE,
                                                }));
                                        if ((S.push(l), !u)) {
                                            if (A && e === y - 1) {
                                                let t = S[e];
                                                t.push({
                                                    type: 1,
                                                    guildId: C.id,
                                                    name: ee.intl.string(ee.t.NZI2Zk),
                                                    size: c,
                                                    rowIndex: e,
                                                    columnIndex: t.length,
                                                    visibleRowIndex: h,
                                                    sectionCollapsedToThreeRows: v,
                                                });
                                            }
                                            d.push(l.length), a.push(l), h++;
                                        }
                                        m++;
                                    }
                                    let N = { ...r, count: s.length };
                                    n.push(N), e.push(u ? 0 : y);
                                };
                            if (null != s)
                                0 !== s.unlocked.length &&
                                    v(s.unlocked, {
                                        type: eZ.s.SEARCH_RESULTS,
                                        sectionId: eZ.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        v(s.locked, {
                                            type: eZ.s.PREMIUM_UPSELL,
                                            categoryId: eZ.R2.PREMIUM_UPSELL,
                                            sectionId: eZ.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !N,
                                        });
                            else {
                                if (w && u) {
                                    let t = [{ type: 2, rowIndex: m, columnIndex: 0, visibleRowIndex: h }];
                                    n.push({
                                        type: eZ.s.SOUNDMOJI,
                                        categoryId: eZ.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let i = l.has(eZ.R2.SOUNDMOJI);
                                    !i && (d.push(t.length), a.push(t), h++), e.push(+!i), m++;
                                }
                                for (let e of p)
                                    if (e === eZ.R2.CUSTOM) {
                                        let n = (n) => {
                                            let l = T.get(n);
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
                                            let a = J.A.getGuild(n),
                                                r =
                                                    j ||
                                                    (!N &&
                                                        em.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: i,
                                                        }));
                                            v(s, {
                                                categoryId: e,
                                                guild: a,
                                                type: eZ.s.GUILD,
                                                sectionId: null != a ? a.id : (0, eY.A)(),
                                                count: s.length,
                                                isNitroLocked: r,
                                            });
                                        };
                                        if ((null != f && n(f.id), (0, eg.isExternalEmojiAllowedForIntention)(i)))
                                            for (let e of y) (null == f || f.id !== e) && n(e);
                                    } else if (e === eZ.R2.TOP_GUILD_EMOJI) {
                                        if (null != f) {
                                            let { allEmojis: t } = (0, ep.W)({ topEmojis: E, newlyAddedEmojis: I });
                                            t.length > 0 &&
                                                v(t, {
                                                    categoryId: e,
                                                    guild: J.A.getGuild(f.id),
                                                    type: eZ.s.TOP_GUILD_EMOJI,
                                                    sectionId: eZ.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === eZ.R2.RECENT) {
                                        let n = (i === eg.EmojiIntention.REACTION ? A : C).filter(
                                            (e) => !em.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        v(n, {
                                            categoryId: e,
                                            type: eZ.s.RECENT,
                                            sectionId: eZ.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === eZ.R2.FAVORITES) {
                                        let n = x.filter(
                                            (e) => !em.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        0 !== n.length &&
                                            v(n, {
                                                categoryId: e,
                                                type: eZ.s.FAVORITES,
                                                sectionId: eZ.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = e$.Ay.getByCategory(e);
                                        null != t &&
                                            v(t, {
                                                categoryId: e,
                                                type: eZ.s.UNICODE,
                                                sectionId: e,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                            }
                        }
                        return { columnCounts: d, emojiGrid: a, rowCountBySection: e, sectionDescriptors: n };
                    }, [_, r, c, o, s, l, T, b, t, i, E, I, N, p, f, y, A, C, x, j, w, u]);
                })({
                    gridWidth: eW,
                    fallbackGuildId: ev,
                    channel: r,
                    pickerIntention: i,
                    emojiSearchResults: eV,
                    collapsedSections: eB,
                    emojiPaddingHorizontal: nY,
                    emojiSpriteSize: p,
                    shouldShowSoundmojiInEmojiPicker: z,
                    showOnlyUnicode: Z,
                }),
                { newlyAddedEmojis: e4 } = (0, ef.A)(ev, i);
            (n = a.useRef({ intention: i, isBurstReaction: ey, analyticsObject: ek })),
                a.useEffect(() => {
                    n.current.intention === eg.EmojiIntention.REACTION && ex(n.current);
                }, []);
            let e7 = a.useCallback(() => {
                    let e = e4.length > 0 ? e4[0].id : null;
                    (0, M.uV)(ev, e), ex({ intention: i, isBurstReaction: ey, analyticsObject: ek });
                }, [e4, ev, i, ey, ek]),
                e8 = ((e) => {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: l,
                            onSelectEmoji: i,
                            setUpsellConfigs: s,
                            emojiSelectAnalytics: r,
                            trackEmojiFavorited: o,
                        } = e,
                        c = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? l), [l, n]);
                    return a.useCallback(
                        (e, l) => {
                            if (0 === e.type) {
                                let { emoji: a } = e;
                                if (null == a) return;
                                let u = em.Ay.getEmojiUnavailableReason({ emoji: a, channel: n, intention: t });
                                if (l.toggleFavorite)
                                    return void (c.isFavoriteEmojiWithoutFetchingLatest(a) || null != u
                                        ? (0, g.Sw)(a)
                                        : (o?.(e), (0, g.V4)(a)));
                                if (u !== eg.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (u === eg.EmojiDisabledReasons.PREMIUM_LOCKED)
                                        return void s({ type: 0, emojiDescriptor: e });
                                    if (u === eg.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && a.type === eX.i.GUILD)
                                        return void s({ type: 1, guildId: a.guildId, emojiId: a.id });
                                    u !== eg.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                        (r?.(e), i({ emoji: a, willClose: l.isFinalSelection, isBurst: l.isBurst }));
                                }
                            }
                        },
                        [n, t, i, s, c, r, o],
                    );
                })({
                    pickerIntention: i,
                    selectedChannel: r,
                    fallbackGuildId: ev,
                    closePopout: u,
                    onSelectEmoji: b,
                    setUpsellConfigs: eh,
                    emojiSelectAnalytics: (e) => {
                        "" !== eC
                            ? (0, eu.Wf)({
                                  emoji: e.emoji,
                                  location: { ...eP, object: $.ZSU.EMOJI },
                                  searchQuery: eC,
                                  intention: i,
                                  messageId: B,
                              })
                            : (0, eu._7)({
                                  emoji: e.emoji,
                                  location: { ...eP, object: ek ?? $.ZSU.EMOJI, ...(null != eR && { page: eR }) },
                                  pickerIntention: i,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === eZ.tm.NEWLY_ADDED_EMOJI &&
                                      k.isNewerThanLastSeen(ev, e.emoji.id),
                                  isBurstReaction: ey,
                                  messageId: B,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, eu.C5)({ emoji: e.emoji, location: { ...eP, object: $.ZSU.EMOJI } });
                    },
                }),
                e5 = a.useCallback(() => {
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
                            emojiList: r,
                            channelGuildId: o,
                            isBurstReaction: c,
                        } = e,
                        u = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(o), [o]),
                        m = a.useCallback(
                            (e, l) => {
                                if (e.type === e2.EMOJI) {
                                    if (null != e.emoji && l.altKey)
                                        return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, g.Sw)(e.emoji)
                                            : ((0, eu.C5)({ emoji: e.emoji, location: { ...t, object: $.ZSU.EMOJI } }),
                                              (0, g.V4)(e.emoji)));
                                    let s = {
                                        page: null != o ? $.liQ.GUILD_CHANNEL : $.liQ.DM_CHANNEL,
                                        section: $.JJy.EMOJI_PICKER_POPOUT,
                                        object: $.ZSU.EMOJI,
                                    };
                                    c &&
                                        (s = {
                                            page: null != o ? $.liQ.GUILD_CHANNEL : $.liQ.DM_CHANNEL,
                                            section: $.JJy.EMOJI_PICKER_POPOUT,
                                            object: $.ZSU.EMOJI,
                                        }),
                                        (0, eu._7)({
                                            emoji: e.emoji,
                                            location: s,
                                            pickerIntention: n,
                                            category: e.category,
                                            subCategory: e.subCategory,
                                            newlyAddedHighlight:
                                                e.subCategory === eZ.tm.NEWLY_ADDED_EMOJI &&
                                                k.isNewerThanLastSeen(o, e.emoji.id),
                                        }),
                                        i({ emoji: e.emoji, willClose: !l.shiftKey, isBurst: c });
                                }
                            },
                            [i, o, n, u, t, c],
                        ),
                        {
                            gridDispatch: p,
                            getItemProps: f,
                            getRowProps: _,
                            gridContainerProps: x,
                            handleGridContainerKeyDown: C,
                            isUsingKeyboardNavigation: A,
                        } = (0, U.Ff)({
                            columnCounts: l,
                            gridNavigatorId: eZ.lq,
                            itemGrid: s,
                            itemList: r,
                            onGridNavigatorItemSelect: m,
                            onGridNavigatorPositionChange: nQ,
                        });
                    return (
                        a.useEffect(
                            () =>
                                O.Om.subscribe(
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
                            getRowProps: _,
                            gridContainerProps: x,
                            handleGridContainerKeyDown: C,
                            isUsingKeyboardNavigation: A,
                        }
                    );
                })({
                    pickerIntention: i,
                    analyticsLocation: eP,
                    columnCounts: eJ,
                    onSelectEmoji: b,
                    emojiGrid: eq,
                    emojiList: eE,
                    channelGuildId: ev,
                    isBurstReaction: ey,
                });
            ((e, t) => {
                let [n, l] = a.useState(null);
                a.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), l(null));
                }, [t, n]),
                    a.useEffect(() => {
                        l(O.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(N, eE),
                a.useLayoutEffect(() => {
                    Q && eI.current?.focus();
                }, [N, eU, eI, Q]),
                a.useEffect(() => {
                    T || (0, P.Ri)("");
                }, [T]),
                a.useEffect(
                    () => (
                        er.default.track($.HAw.OPEN_POPOUT, {
                            type: eM ?? "Emoji Picker",
                            guild_id: ev,
                            location: eO,
                            ...(0, A.dI)(r),
                        }),
                        O.Om.resetStoreState
                    ),
                    [eM, ev, eO, r],
                ),
                a.useEffect(() => () => (0, el.sF)(el._2.FAVORITE_EMOJI_TOOLTIP), []),
                a.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = O.Om.getState().inspectedExpressionPosition;
                    eq[t]?.[e] == null && 0 !== e && O.Om.setInspectedExpressionPosition(0, 0);
                }, [eq]),
                a.useEffect(() => {
                    "" === e_.current && "" !== eC && (0, eu.EG)(eP, i),
                        0 === eG && "" !== eC
                            ? n0(eP, eC)
                            : "" !== eC && e_.current !== eC && n1(eG, eV?.locked.length ?? 0, eP, eC, i),
                        (e_.current = eC);
                }, [eC, eP, eG, eV, i]);
            let ti = G ?? (y ? "div" : f.l),
                ts = null != eW;
            ed?.type === e3.PREMIUM
                ? (l = (0, s.jsx)(nJ.default, {
                      onUpsellClicked: e5,
                      emojiDescriptor: ed.emojiDescriptor,
                      pickerIntention: i,
                      analyticsLocation: eP,
                      onClose: () => eh(null),
                      channel: r,
                  }))
                : ed?.type === e3.ROLE_SUBSCRIPTION
                  ? (l = (0, s.jsx)(en, { onClose: () => eh(null), guildId: ed.guildId, emojiId: ed.emojiId }))
                  : ey && !eN && (l = (0, s.jsx)(ej, { onDismiss: () => eb(!1) }));
            let ta = (0, s.jsx)(tK, {
                    channel: r,
                    pickerIntention: i,
                    emojiListRef: eE,
                    onKeyDown: (e) => {
                        tn?.(e), X?.(e);
                    },
                    searchBarRef: eI,
                    onFocus: Y,
                    autoFocus: Q,
                    accessory: et,
                    headerClassName: R,
                    diversitySurrogate: eU,
                    isBurstReaction: ey,
                    onBurstReactionToggle: () => {
                        eb(!ey), eI.current?.focus();
                    },
                    renderHeader: H,
                    showAddEmojiButton: q,
                }),
                tr = [];
            i === eg.EmojiIntention.REACTION && tr.push(m.M.SUPER_REACTIONS_NITRO_MARKETING),
                v.Ay.hasFavoriteEmojis(ev) || tr.push(m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let to = (0, s.jsx)(_.A, {
                ...eP,
                children: (0, s.jsxs)(ti, {
                    id: eZ.Do,
                    "aria-labelledby": y ? eZ.k1 : void 0,
                    role: y ? "tabpanel" : void 0,
                    className: o()(tW.iE, { [tW.r6]: y, [tW.cB]: ey && eN }),
                    children: [
                        y ? null : ta,
                        (0, s.jsxs)("div", {
                            className: o()(tW.Fb, w),
                            onScroll: n$,
                            children: [
                                y ? ta : null,
                                (0, s.jsxs)("div", {
                                    className: tW.uK,
                                    ref: eA,
                                    children: [
                                        (0, s.jsx)(nq, { channel: r, closePopout: u }),
                                        (0, s.jsx)(I.Ay, {
                                            contentTypes: tr,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(th, { markAsDismissed: () => n(tu.i.UNKNOWN) });
                                            },
                                        }),
                                        F
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: tW.Iy,
                                                  id: eZ.lq,
                                                  ...tt,
                                                  children: ts
                                                      ? (0, s.jsx)(nP, {
                                                            collapsedSections: eB,
                                                            diversitySurrogate: eU,
                                                            emojiGrid: eq,
                                                            emojiListRef: eE,
                                                            emojiSize: p,
                                                            getEmojiItemProps: e9,
                                                            getEmojiRowProps: te,
                                                            gridWidth: eW,
                                                            isUsingKeyboardNavigation: tl,
                                                            onEmojiSelect: (e, t) => {
                                                                e8(e, { ...t, isBurst: ey });
                                                            },
                                                            onSelectSoundmoji: S,
                                                            setUpsellConfigs: eh,
                                                            rowCount: eq.length,
                                                            rowCountBySection: eK,
                                                            sectionDescriptors: ez,
                                                            setCollapsedSections: eH,
                                                            channelGuildId: ev,
                                                            channelId: r?.id,
                                                            messageId: B,
                                                            isBurstReaction: ey,
                                                            listHeaderClassName: W,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(tX, {
                                    emojiGrid: eq,
                                    className: tW.qV,
                                    guildId: ev,
                                    pickerIntention: i,
                                    channel: r,
                                }),
                                l,
                            ],
                        }),
                        F
                            ? null
                            : (0, s.jsx)(tc, {
                                  className: o()(tW.jv, K),
                                  emojiListRef: eE,
                                  sectionDescriptors: ez,
                                  intention: i,
                                  channel: r,
                                  fallbackGuildId: ev,
                                  shouldShowSoundmojiInEmojiPicker: z,
                                  showOnlyUnicode: Z,
                              }),
                    ],
                }),
            });
            return (0, s.jsx)(E.f5, { value: eD, children: to });
        }),
    );
