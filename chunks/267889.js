"use strict";
n.d(t, { A: () => n3 }), n(321073);
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
    A = n(793574),
    I = n(95561),
    T = n(688810),
    S = n(379848),
    N = n(159273),
    y = n(989349),
    C = n.n(y),
    v = n(228366),
    O = n(935208);
let R = { lastSeenNewlyAddedEmojiIds: {} },
    b = R,
    D = {};
function L() {
    for (let e in D) b.lastSeenNewlyAddedEmojiIds[e] = D[e];
}
class w extends _.Ay.PersistedStore {
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
        if (null == n || O.default.compare(t, n.id) > 0) return !0;
        {
            let e = C()(n.lastSeen);
            return C()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let M = new w(v.h, {
    LOGOUT: function () {
        (b = R), (D = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = D[t] ?? b.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > O.default.compare(i.id, n)
            ? (D[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (D[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = D[t] ?? b.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > O.default.compare(i.id, n)) && (D[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: L,
    CLEAR_CACHES: function () {
        (b = R), L();
    },
    CONNECTION_CLOSED: L,
});
var P = n(451731),
    x = n(850992),
    U = n(151271),
    k = n(60587),
    G = n(464651),
    F = n(562708),
    V = n(462887),
    B = n(939249),
    H = n(789645),
    j = n(696986),
    Y = n(534514),
    W = n(834730),
    K = n(736653),
    z = n(139286),
    $ = n(976860),
    q = n(71393),
    Z = n(384684),
    X = n(985242),
    Q = n(652215),
    J = n(746080),
    ee = n(375708),
    et = n(271019);
function en(e) {
    let t,
        { onClose: i, guildId: r, emojiId: a } = e,
        o = ((t = (0, K.Ay)()), (0, V.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: l } = (0, T.Ay)(A.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, z.A)({
        type: F.ImpressionTypes.MODAL,
        name: F.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: l, emoji_guild_id: r, emoji_id: a ?? null },
    });
    let u = (0, _.bG)([q.A], () => q.A.getGuild(r)),
        c = (0, _.bG)([Z.A], () => null != r && Z.A.getUserSubscriptionRoles(r).size > 0),
        d = c ? ee.intl.string(ee.t.GoLM9z) : ee.intl.formatToPlainString(ee.t["h0u/Hi"], { serverName: u?.name }),
        f = c ? ee.intl.string(ee.t.PjZ7Db) : ee.intl.string(ee.t.p8FG1D);
    return (0, s.jsxs)("div", {
        className: et.kL,
        children: [
            (0, s.jsx)("div", { className: et.Tp }),
            (0, s.jsxs)("div", {
                className: et.Qs,
                children: [
                    (0, s.jsx)(B.D, {
                        className: et.b,
                        "aria-label": ee.intl.string(ee.t.cpT0Cq),
                        onClick: i,
                        children: (0, s.jsx)(H.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": ee.intl.string(ee.t.cpT0Cq),
                            className: et.yP,
                        }),
                    }),
                    (0, s.jsx)("img", { alt: "", src: o, className: et.Tn }),
                    (0, s.jsx)(j.h, { size: 22 }),
                    (0, s.jsx)(Y.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: et.wx,
                        children: ee.intl.string(ee.t.cBjkcx),
                    }),
                    (0, s.jsx)(j.h, { size: 4 }),
                    (0, s.jsx)(W.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: et.h_,
                        children: d,
                    }),
                    (0, s.jsx)(j.h, { size: 24 }),
                    (0, s.jsx)(X.A, {
                        text: f,
                        onClick: () => {
                            (0, $.pX)(Q.BVt.CHANNEL(r, J.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: l });
                        },
                    }),
                ],
            }),
        ],
    });
}
var ei = n(450510),
    er = n(885386),
    es = n(808728),
    ea = n(287809),
    eo = n(174459),
    el = n(474090),
    eu = n(240248),
    ec = n(822123),
    ed = n(734057),
    e_ = n(309010),
    ef = n(690521),
    eh = n(818645),
    ep = n(316884),
    eE = n(307731),
    em = n(698279);
function eg(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: r, analyticsObject: s } = e,
        a = ed.A.getChannel(e_.A.getChannelId()),
        o = a?.getGuildId(),
        l =
            t === eE.EmojiIntention.REACTION
                ? N.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : N.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        u = null != a ? N.Ay.getDisambiguatedEmojiContext(a.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        c =
            t === eE.EmojiIntention.REACTION
                ? N.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : N.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = l.slice(0, c),
        _ = null != o ? N.Ay.getGuildEmoji(o) : [],
        f = N.Ay.getDisambiguatedEmojiContext(a?.getGuildId()).getCustomEmoji(),
        { topEmojis: h, newlyAddedEmojis: p } = (0, ep.b)({ guildId: a?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: E, visibleNewlyAddedEmojis: m } = (0, eh.W)({
            topEmojis: h,
            newlyAddedEmojis: p,
            rowSize: i,
        });
    I.Ay.trackWithMetadata(
        t === eE.EmojiIntention.REACTION ? Q.HAw.REACTION_PICKER_OPENED : Q.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: em.kx.EMOJI,
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
            num_custom_expressions_total: f.size,
            num_expressions_top_server: E.length,
            num_animated_expressions_top_server: E.filter((e) => e.animated).length,
            num_expressions_newly_added: m.length,
            num_animated_expressions_newly_added: m.filter((e) => e.animated).length,
            ...(t === eE.EmojiIntention.REACTION && { is_burst: r }),
            ...(null != s && { location_object: s }),
        },
    );
}
var eA = n(403581),
    eI = n(775602),
    eT = n(607470),
    eS = n(422936),
    eN = n(234419),
    ey = n(725807),
    eC = n(811611),
    ev = n(788868),
    eO = n(151867);
function eR(e) {
    let { onDismiss: t } = e,
        n = (0, _.bG)([eI.A], () => eI.A.useReducedMotion),
        i = ee.intl.string(ee.t.eikz43),
        r = (0, eN.V)(),
        a = (0, eS.O)(),
        o = r?.subscription_trial != null || null != a,
        u = { object: Q.ZSU.BUTTON_CTA, section: Q.JJy.SUPER_REACTION_PICKER };
    return (0, s.jsxs)("div", {
        className: eO.iE,
        children: [
            (0, s.jsx)(B.D, {
                onClick: t,
                className: eO.b,
                "aria-label": ee.intl.string(ee.t.WAI6xu),
                children: (0, s.jsx)(H.P, { size: "md", color: "currentColor" }),
            }),
            (0, s.jsxs)("div", {
                className: eO.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: eO.jo,
                        children: (0, s.jsx)(eT.A, {
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
                        ? (0, s.jsx)(eC.Ay, {
                              type: ev.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: r?.subscription_trial?.sku_id ?? ev.pe.TIER_2,
                              headingText: ee.intl.string(ee.t.Wfl5zp),
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
                                          (0, s.jsx)(eA.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: eO.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, s.jsx)(Y.D, {
                                              className: eO.TK,
                                              variant: "heading-xl/bold",
                                              children: ee.intl.string(ee.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(W.E, { className: eO.Fb, variant: "text-md/normal", children: i }),
                                  (0, s.jsx)("div", {
                                      className: eO.sk,
                                      children: (0, s.jsx)(ey.A, {
                                          subscriptionTier: ev.pe.TIER_2,
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
    eD = n.n(eb),
    eL = n(837381),
    ew = n(460905),
    eM = n(802019),
    eP = n(407698),
    ex = n(531685),
    eU = n(406810),
    ek = n(27232),
    eG = n(369606),
    eF = n(413249),
    eV = n(141060),
    eB = n(687966),
    eH = n(115979),
    ej = n(524501),
    eY = n(926268),
    eW = n(138134),
    eK = n(7807),
    ez = n(732139);
let e$ = a.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = ((e) => {
            switch (e) {
                case ez.R2.RECENT:
                    return eU.O;
                case ez.R2.FAVORITES:
                    return ek.G;
                case ez.R2.TOP_GUILD_EMOJI:
                    return eG.O;
                case ez.R2.PEOPLE:
                    return ew.n;
                case ez.R2.NATURE:
                    return eF.p;
                case ez.R2.FOOD:
                    return eV.i;
                case ez.R2.ACTIVITY:
                    return eB._;
                case ez.R2.TRAVEL:
                    return eH.h;
                case ez.R2.OBJECTS:
                    return ej.D;
                case ez.R2.SYMBOLS:
                    return eY.C;
                case ez.R2.FLAGS:
                    return eW.i;
                case ez.R2.PREMIUM_UPSELL:
                    return eA.t;
                case ez.R2.SOUNDMOJI:
                    return eK.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, s.jsx)(i, { color: "currentColor", ...n });
});
var eq = n(724511),
    eZ = n(835245),
    eX = n(770335),
    eQ = n(7584),
    eJ = n(367319),
    e0 = n(926972),
    e1 = n(711014),
    e2 =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let e3 = [eE.EmojiDisabledReasons.DISALLOW_EXTERNAL, eE.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e6 = (((r = {})[(r.PREMIUM = 0)] = "PREMIUM"), (r[(r.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), r),
    e4 = n(619182);
let e5 = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e7 = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    e8 = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    e9 = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    te = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tt = (0, eu.xI)(e4.__invalid_unicodeCategoryShortcutHeight),
    tn = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    ti = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tr = e8 + e7 + 2 * te,
    ts = e5 + e7,
    ta = ts + (tn + 2 * ti),
    to = e8 + e9 + 2 * te;
function tl(e) {
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
        _ = (0, eL.rm)(`expression-guild-${n}`),
        f = o.type === ez.s.GUILD ? null : o.id,
        h = t === n,
        p = o.type === ez.s.GUILD ? o.guild : null,
        E = (0, s.jsxs)(B.D, {
            ..._,
            "aria-label": (0, ec.wt)(o, p),
            className: l()({
                [e4.ZG]: null != p,
                [e4.Bj]: null == p,
                [e4.s6]: null == p && h,
                [e4.xg]: o.type === ez.s.RECENT,
            }),
            onClick: () => {
                null != p &&
                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: em.kx.EMOJI,
                        guild_id: p.id,
                    }),
                    u(n);
            },
            children: [
                null != p
                    ? (0, s.jsx)(eq.A, { guild: p, isSelected: h, shouldAnimate: !d && c, isLocked: o.isNitroLocked })
                    : null,
                null == p && null != f
                    ? (0, s.jsx)(e$, { categoryId: f, className: e4.Yl, height: e8, width: e8, size: "custom" })
                    : null,
            ],
        }),
        m = r[n + 1],
        g = null != m && o.type === ez.s.GUILD && m.type !== ez.s.GUILD;
    return null != p
        ? (0, s.jsxs)(a.Fragment, {
              children: [
                  (0, s.jsx)(eP.Q, { guild: p, children: (0, s.jsx)("div", { children: E }) }),
                  g ? (0, s.jsx)("hr", { className: e4.ny }, "separator") : null,
              ],
          })
        : E;
}
let tu = (e) => {
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
        f = x.Om.useStore((e) => e.activeCategoryIndex),
        h = ((e) => {
            let { emojiListRef: t } = e,
                n = (0, U.RQ)((e) => e.searchQuery),
                i = a.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return a.useCallback(
                (e) => {
                    "" !== n ? ((0, U.Ri)(""), x.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        p = (0, g.p)(),
        E = (0, ec.ss)(r, o, o?.guild_id ?? u, c),
        m = a.useMemo(() => (d ? (0, ec.CQ)() : E), [E, d]),
        A = a.useRef(null),
        I = (0, _.bG)([ex.A], () => ex.A.isFocused()),
        T = (0, _.bG)([eI.A], () => eI.A.useReducedMotion, []),
        S = a.useMemo(
            () =>
                eD().memoize((e, t) => {
                    let n = m[t];
                    if (null != n)
                        return (0, s.jsx)(
                            tl,
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
                if (n.type === ez.s.RECENT) return tr;
                if (n.type === ez.s.GUILD) {
                    let e = m[t + 1];
                    return null != e && e.type !== ez.s.GUILD ? ta : ts;
                }
                return to;
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
                r.type === ez.s.GUILD
                    ? ((t += 1), (n += 1))
                    : r.type === ez.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let r = tr + t * ts + ta;
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
                null == t || (e + t.height - tn >= O ? D(!1) : D(!0));
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
                let i = b ? tt : 0;
                if (n.type === ez.s.RECENT) return t ? 0 : e9;
                if (n.type === ez.s.GUILD) {
                    let n = m[e + 1];
                    return null != n && n.type !== ez.s.GUILD ? (t ? tn + -2 * ti + e7 + i : e7) : t ? i : e7;
                }
                return t ? e7 + i : 2 * e7;
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
        k = b ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(eM.A, {
        categoryListRef: A,
        expressionsListRef: n,
        className: t,
        store: x.Om,
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
                B.D,
                {
                    "aria-hidden": !b,
                    "aria-label": ee.intl.string(ee.t.dT0ctw),
                    className: l()(e4.KB, { [e4.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => w(e),
                    children: (0, s.jsx)(ew.n, { size: "custom", color: "currentColor", height: e8, width: e8 }),
                },
                k,
            ),
    });
};
var tc = n(49999),
    td = n(868836);
let t_ = (e) => {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: td.iE,
        children: [
            (0, s.jsx)(eY.C, { size: "md", color: "currentColor", className: td.Kk }),
            (0, s.jsx)("div", {
                className: td.Qs,
                children: (0, s.jsx)(W.E, { variant: "text-xs/normal", children: ee.intl.string(ee.t.xdRf69) }),
            }),
            (0, s.jsx)(B.D, {
                onClick: () => t(tc.i.UNKNOWN),
                children: (0, s.jsx)(H.P, { size: "md", color: "currentColor", className: td.VN }),
            }),
        ],
    });
};
var tf = n(873174),
    th = n(459192),
    tp = n(717421),
    tE = n(343032),
    tm = n(131607),
    tg = n(927578),
    tA = n(337889);
let tI = { tension: 750, mass: 2.5, friction: 70 };
function tT(e) {
    let { checked: t, onClick: n } = e,
        i = (0, _.bG)([eI.A], () => eI.A.useReducedMotion),
        r = ea.default.getCurrentUser(),
        o = null != r && !(0, tg.TW)(r),
        u = o ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [c, d] = (0, tm.kn)(u),
        [h, p] = a.useState(!1),
        [E, m] = (0, tp.z)(() => ({})),
        g = (0, tf.animated)(tE.i);
    a.useEffect(() => {
        let e = c === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (d(tc.i.DISMISS), setTimeout(() => p(e), 200));
    }, [c, d]);
    let A = h ? ee.intl.string(ee.t["Osi/uy"]) : t && !o ? ee.intl.string(ee.t["5cRA/b"]) : ee.intl.string(ee.t.buV4av),
        I = h ? ee.intl.string(ee.t.ORK94p) : void 0;
    return (0, s.jsx)(th.u, {
        position: "top",
        title: I,
        body: A,
        asset: (0, s.jsx)(eA.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: h,
        children: (0, s.jsx)(B.D, {
            "aria-label": A,
            "aria-pressed": t,
            onClick: function () {
                m({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tI }),
                    n?.(),
                    p(!1);
            },
            focusProps: { enabled: !1 },
            className: l()(tA.Pf, { [tA.wM]: t }),
            children: (0, s.jsx)(g, {
                style: i ? void 0 : E,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tA.Kk,
            }),
        }),
    });
}
var tS = n(821609),
    tN = n(644508),
    ty = n(824832),
    tC = n(638263);
function tv(e) {
    let { channel: t } = e,
        n = a.useRef(null),
        i = a.useRef(0),
        [r, o] = a.useState(!1),
        [l, u] = a.useState(!1),
        c = l || r,
        d = a.useCallback(
            async (e, n, r) => {
                u(!0),
                    await (0, tN.f)({
                        userImage: { data: e, file: n, image: r },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: Q.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                        },
                    }),
                    (i.current += 1),
                    u(!1);
            },
            [t],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tS.$, {
                text: ee.intl.string(ee.t.iMJO37),
                variant: "secondary",
                onClick: () => {
                    n.current?.activateUploadDialogue();
                },
                disabled: c,
            }),
            (0, s.jsx)("div", {
                className: tC.F,
                children: (0, s.jsx)(ty.Ay, { ref: n, onChange: d, setLoading: o, disabled: c }, i.current),
            }),
        ],
    });
}
n(667532);
var tO = n(833272),
    tR = n(82495),
    tb = n(260762),
    tD = n(915089),
    tL = n(650583),
    tw = n(46274);
let tM = (0, tD.Ld)(),
    tP = tO.A.convert.fromCodePoint("1f44f"),
    tx = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
    tU = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: r, index: a } = e,
            o = (0, eL.rm)(`item-${a}`),
            l = ef.Ay.getURL(tP + n),
            u = (0, tp.z)({ opacity: 1, from: { opacity: +!t }, delay: r }, "animate-always");
        return (0, s.jsx)(B.D, {
            ...o,
            role: "option",
            "aria-selected": 0 === a,
            onClick: () => i(n),
            className: tw.B6,
            children: (0, s.jsx)(tf.animated.div, {
                "aria-label": (function (e) {
                    switch (tO.A.convert.toCodePoint(e)) {
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
                className: tw.g4,
                style: { backgroundImage: `url("${l}")`, ...u },
            }),
        });
    },
    tk = (e) => {
        let { id: t, selectedSurrogate: n, onClick: i } = e,
            r = (0, tb.A)("diversity"),
            o = (0, tp.z)({
                height: (tx + 14) * (eQ.W$.length + 1),
                from: { height: tx + 14 },
                config: { duration: 125 },
            }),
            l = a.useRef(r);
        a.useEffect(() => {
            l.current.focusFirstVisibleItem();
        }, []);
        let u = ["", ...eQ.W$];
        return (
            eD().remove(u, (e) => e === n),
            u.unshift(n),
            (0, s.jsx)(eL.hD, {
                navigator: r,
                children: (0, s.jsx)(eL.PR, {
                    children: (e) => {
                        let { ref: n, ...r } = e;
                        return (0, s.jsx)(tf.animated.div, {
                            ...r,
                            id: t,
                            ref: n,
                            className: tw.J6,
                            style: o,
                            role: "listbox",
                            children: u.map((e, t) =>
                                (0, s.jsx)(tU, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                            ),
                        });
                    },
                }),
            })
        );
    },
    tG = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
            r = ef.Ay.getURL(tP + n),
            [o, u] = a.useState(!1),
            c = (0, tR.A)(null, () => u(!1)),
            d = a.useRef(null);
        return (0, s.jsxs)("div", {
            ref: c,
            className: l()(tw.fx, i),
            children: [
                (0, s.jsx)(B.D, {
                    innerRef: d,
                    className: tw.Dj,
                    onClick: () => {
                        u(!0);
                    },
                    "aria-label": ee.intl.string(ee.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": o,
                    "aria-controls": tM,
                    tabIndex: o ? -1 : 0,
                    children: (0, s.jsx)("div", { className: tw.g4, style: { backgroundImage: `url("${r}")` } }),
                }),
                o
                    ? (0, s.jsx)("div", {
                          onKeyDown: (e) => {
                              e.key === tL.dh.ESCAPE
                                  ? (e.stopPropagation(), u(!1), null != d.current && d.current.focus())
                                  : "Tab" === e.key && u(!1);
                          },
                          children: (0, s.jsx)(tk, {
                              id: tM,
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
var tF = n(942381),
    tV = n(602034),
    tB = n(892547);
let tH = a.forwardRef(function (e, t) {
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
            [_, f, h] = x.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tF.x,
            ),
            p = a.useCallback(
                (e) => {
                    x.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        x.Om.setInspectedExpressionPosition(0, 0),
                        x.Om.setSearchPlaceholder(null),
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
            (0, s.jsx)(tB.I, {
                autoFocus: l,
                query: d,
                ref: c,
                placeholder: f ?? u,
                onClear: E,
                onKeyDown: (e) => {
                    switch (e.key) {
                        case tL.dh.ARROW_LEFT:
                        case tL.dh.ARROW_RIGHT:
                        case tL.dh.ARROW_UP:
                        case tL.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    r(e);
                },
                onFocus: o,
                onChange: p,
                inputProps: {
                    "aria-label": ee.intl.string(ee.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": i,
                    "aria-expanded": !0,
                    ...(h ? { "aria-activedescendant": (0, tV.Aq)(i, _.columnIndex, _.rowIndex) } : void 0),
                },
            })
        );
    }),
    tj = a.memo(tH);
var tY = n(873426);
let tW = (e) => {
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
                (0, s.jsx)(tj, {
                    emojiListRef: a,
                    gridNavigatorId: ez.lq,
                    onKeyDown: o,
                    ref: d,
                    onFocus: u,
                    autoFocus: c,
                    defaultSearchPlaceholder: (0, ec.wT)(i, f),
                }),
                i === eE.EmojiIntention.REACTION ? (0, s.jsx)(tT, { checked: f, onClick: h }) : null,
                n ?? (0, s.jsx)(tG, { searchBarRef: d, className: tY.fx, selectedSurrogate: _ }),
                i !== eE.EmojiIntention.NO_CUSTOM_EMOJI && E ? (0, s.jsx)(tv, { channel: t }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: l()(tY.wx, r), children: null != p ? p(m) : m });
};
var tK = n(182922),
    tz = n(363195),
    t$ = n(486020),
    tq = n(854469);
function tZ(e) {
    return null != e && "animated" in e;
}
let tX = a.memo(function (e) {
    let t,
        i,
        r,
        { className: o, emojiGrid: l, guildId: u, pickerIntention: c, channel: d } = e,
        f = x.Om.useStore((e) => e.inspectedExpressionPosition),
        h = a.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = f;
            return l[e]?.[t];
        }, [l, f]);
    switch (h?.type) {
        case e2.EMOJI:
            t = h?.emoji;
            break;
        case e2.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: h?.guildId, allNamesString: h?.name };
            break;
        case e2.SOUNDMOJI:
        default:
            t = null;
    }
    let p = (0, _.bG)([q.A], () => (null !== t && t.type === eX.i.GUILD ? q.A.getGuild(t.guildId) : null), [t]),
        E = (0, _.bG)([ex.A], () => ex.A.isFocused()),
        m = (0, _.bG)([eI.A], () => eI.A.useReducedMotion, []),
        g = er.Sf.useSetting(),
        A = (0, ec.O7)(u, tZ(t) ? t : null),
        I = (0, _.bG)([N.Ay], () => N.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: T } = (0, ep.A)(u, c),
        S = h?.type === e2.EMOJI ? h.subCategory : ez.tm.NONE;
    if (
        (a.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    tZ(t) &&
                    S !== ez.tm.NONE &&
                    (S === ez.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eX.i.GUILD &&
                        (0, P.mz)(t.guildId, T[0].id),
                    null != f.source &&
                        (0, ec.yB)({
                            emoji: t,
                            subCategory: S,
                            position: h.columnIndex + 1,
                            newlyAddedHighlight: S === ez.tm.NEWLY_ADDED_EMOJI && M.isNewerThanLastSeen(u, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = tz.A.theme;
    if (tZ(t)) {
        let e = null != t.id ? t$.Ay.getEmojiURL({ id: t.id, animated: g && t.animated, size: 28 }) : t.url;
        i =
            "" === e
                ? (0, s.jsx)(W.E, {
                      variant: "text-md/normal",
                      className: tq.J_,
                      children: "surrogates" in t ? t.surrogates : null,
                  })
                : (0, s.jsx)("img", { alt: (0, ef.N)(t) ?? "", src: e, className: tq.Zg });
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
        let e = n(619508),
            r = n(404828),
            a = n(600003),
            o = n(318121);
        i = I.has(t.guildId)
            ? (0, s.jsx)("img", { className: tq.Kk, src: (0, V.M)(y) ? a : o, alt: "" })
            : (0, s.jsx)("img", { className: tq.Kk, src: (0, V.M)(y) ? e : r, alt: "" });
    }
    let C =
        null != p ? (0, s.jsx)(eq.A, { className: tq.__invalid_guildIcon, guild: p, shouldAnimate: !m && E }) : null;
    r =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? I.has(t.guildId)
                ? ee.intl.string(ee.t["/K2RDH"])
                : ee.intl.string(ee.t.NZI2Zk)
            : (0, ef.N)(t);
    let v = ((e) => {
        let { inspectedEmoji: t, guild: n } = e,
            i = tZ(t);
        return null != n && i ? ee.intl.format(ee.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: d, guildId: u, intention: c, guild: p });
    return (0, s.jsx)(tK.A, {
        className: o,
        graphicPrimary: i,
        graphicSecondary: C,
        titlePrimary: r,
        titleSecondary: v,
        isFavorite: A,
        emojiSubCategory: S,
    });
});
var tQ = n(607399),
    tJ = n(537652),
    t0 = n(962125),
    t1 = n(240864),
    t2 = n(286509),
    t3 = n(89366),
    t6 = n(959249),
    t4 = n(414872),
    t5 = n(400669),
    t7 = n(909536),
    t8 = n(187322),
    t9 = n(304072),
    ne = n(189551),
    nt = n(289873),
    nn = n(796774),
    ni = n(209932),
    nr = n(805945),
    ns = n(576705);
n(980504);
var na = n(818348),
    no = n(219920);
let nl = a.memo(function (e) {
    let t,
        n,
        i,
        r,
        { channelId: o, onSelectSoundmoji: l } = e,
        u = (0, _.bG)([ni.A], () => !ni.A.isFetching() && !ni.A.hasFetchedAllSounds(), []),
        c = (0, _.bG)([ed.A], () => ed.A.getChannel(o)),
        d =
            ((t = (0, _.bG)([ea.default], () => tg.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, _.bG)([ni.A], () => ni.A.getSoundsForGuild("0"))),
            (i = (0, _.yK)([q.A], () => q.A.getGuildIds())),
            (r = a.useMemo(() => ns.A.can(na.xB.USE_EXTERNAL_SOUNDS, c), [c])),
            a.useMemo(() => {
                let e = [];
                if (t && r) {
                    let t = i.flatMap((e) => ni.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eD().sampleSize(t, 4));
                } else if (c?.guild_id != null) {
                    let t = ni.A.getSoundsForGuild(c?.guild_id)?.filter((e) => e.available);
                    e.push(...eD().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eD().sampleSize(n ?? [], 4 - e.length)), e;
            }, [r, c?.guild_id, n, i, t]));
    return (a.useEffect(() => {
        (0, nn.E7)();
    }, [u]),
    0 === d.length)
        ? (0, s.jsx)(nt.y, {})
        : (0, s.jsx)("div", {
              className: no.q,
              children: d.map((e, t) =>
                  (0, s.jsx)(
                      nr.Ay,
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
var nu = n(594061),
    nc = n(771104),
    nd = n(990078),
    n_ = n(442433),
    nf = n(147421),
    nh = n(723702),
    np = n(140735),
    nE = n(194261),
    nm = n(881274);
let ng = (e) => {
    let { src: t, alt: n, size: i, "aria-label": r, className: o } = e,
        u = a.useRef(null),
        c = a.useRef(!1),
        d = c.current ? nm.S : nm.Y;
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
                          ((c.current = !0), u.current.classList.remove(nm.Y), u.current.classList.add(nm.S));
                  });
              },
    });
};
var nA = n(297547);
let nI = eD().memoize(
        (e) =>
            `${e * eE.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(eQ.Ay.numNonDiversitySprites / eE.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nT = eD().memoize(
        (e) =>
            `${e * eE.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eQ.Ay.numDiversitySprites / eE.EmojiSprites.DiversityPerRow)}px`,
    ),
    nS = a.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: r, allowAnimatedEmoji: o, "aria-label": u, isLocked: c } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : t$.Ay.getEmojiURL({ id: t.id, animated: o && t.animated, size: eE.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(ng, {
                              className: nA.N1,
                              "aria-label": u,
                              src: e,
                              size: i,
                              alt: (0, ef.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: l()(nA.xA, { [nA.N1]: c }),
                    style: ((e, t, i) => {
                        let r, s, a;
                        if (!e.useSpriteSheet) return;
                        let o = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((r = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (s = nT(i)),
                              (a = eE.EmojiSprites.DiversityPerRow))
                            : ((r = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (s = nI(i)),
                              (a = eE.EmojiSprites.NonDiversityPerRow));
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
                    children: (0, s.jsx)(np.A, { children: u }),
                });
            })();
        return (0, s.jsxs)(a.Fragment, {
            children: [
                d,
                c
                    ? (0, s.jsx)("div", {
                          className: nA.iD,
                          children: (0, s.jsx)(nE.X, { size: "xs", color: "currentColor", className: nA.fi }),
                      })
                    : null,
            ],
        });
    });
var nN = n(6376);
let ny = (e, t) => `${e}:${t}`,
    nC = a.forwardRef(function (e, t) {
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
            T = (0, _.bG)([q.A], () => (i.type === eX.i.GUILD ? q.A.getGuild(i.guildId) : void 0), [i]);
        return (0, s.jsx)(t8.vN, {
            children: (0, s.jsx)("button", {
                ...I,
                className: l()(nN._X, { [nN.lG]: a, [nN.Lh]: o, [nN.Bx]: u, [g ?? ""]: u, [nN.TV]: d }),
                "data-type": k.g.EMOJI,
                "data-id": i.id,
                "data-name": i.name,
                "data-surrogates": "surrogates" in i ? i.surrogates : null,
                "data-animated": i.animated ? "true" : null,
                ref: t,
                children: (0, s.jsx)(nS, {
                    "aria-label":
                        ((n = (0, ef.N)(i)),
                        (T?.name != null &&
                            (n = ee.intl.formatToPlainString(ee.t["nXv4/B"], { names: n, guildName: T.name })),
                        r)
                            ? ee.intl.formatToPlainString(ee.t["9FI9Z0"], { names: n })
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
function nv(e) {
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
            messageId: y,
            isBurstReaction: C,
            rowPosition: v,
            inNitroLockedSection: O,
        } = e,
        [R, b] = a.useState(""),
        D = (0, _.bG)([eI.A], () => eI.A.useReducedMotion),
        L = (0, _.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(l), [l]),
        w = a.useRef(null),
        { emoji: M, size: P, isDisabled: x, columnIndex: U } = t,
        k = () => {
            d.current || f.current || u(t);
        },
        { ref: G, tabIndex: F, onFocus: V, ...B } = m(U, o) ?? {},
        H =
            R !== ny(U, o)
                ? (0, s.jsx)(nC, {
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
                              null != y &&
                              !e.shiftKey &&
                              null != M.name &&
                              C &&
                              !D &&
                              T
                          ) {
                              let e = null == M.id ? eQ.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = w.current.getBoundingClientRect();
                              (t.x = v.x + (U + 1) * P), b(ny(U, o)), (0, nf.h)(y, e, M.id, t);
                          }
                          ((e) => {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              n && !N.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) && S(i),
                                  (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP),
                                  c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: (e) => {
                          (0, n_.L3)(e, async () => {
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
            ? (0, s.jsx)(nd.m, {
                  text: ee.intl.formatToPlainString(ee.t.glqNsf, { key: (0, nh.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let nO = (e) => {
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
        P = n(8013),
        U = (0, K.Ay)(),
        k = x.Om.getState(),
        [G, F] = a.useState(k.inspectedExpressionPosition),
        [B, H] = (0, t9.A)(null, 300),
        j = a.useRef(null);
    a.useEffect(
        () =>
            x.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => F(e),
            ),
        [],
    ),
        a.useEffect(() => {
            nu.bW.loadIfNecessary();
        }, []);
    let Y = i === ez.as.LARGE,
        z = i === ez.as.MEDIUM,
        $ = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`;
            switch (e.type) {
                case e2.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: i } = e,
                        o = G.rowIndex === n && G.columnIndex === i,
                        c = e.sectionCollapsedToThreeRows
                            ? o
                                ? (0, V.M)(U)
                                    ? L
                                    : P
                                : (0, V.M)(U)
                                  ? v
                                  : O
                            : o
                              ? (0, V.M)(U)
                                  ? D
                                  : w
                              : (0, V.M)(U)
                                ? R
                                : b,
                        _ = ee.intl.string(e.sectionCollapsedToThreeRows ? ee.t.NZI2Zk : ee.t["/K2RDH"]);
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
                            (0, s.jsx)(t8.vN, {
                                children: (0, s.jsx)("button", {
                                    "aria-label": c,
                                    ref: g,
                                    className: l()(nN._X, {
                                        [nN.lG]: Y,
                                        [nN.Lh]: z,
                                        [nN.Bx]: N && !_,
                                        [I ?? ""]: N,
                                        [nN.TV]: B === t,
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
                                    (0, ne.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || C(),
                                    eo.default.track(Q.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        icon: (0, s.jsx)("img", { className: nN.Kk, src: c, alt: "" }),
                        ariaLabel: _,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case e2.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        a = G.rowIndex === i && G.columnIndex === n;
                    return (0, s.jsx)(
                        nv,
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
                            isMediumSize: z,
                            isLargeSize: Y,
                            pulseItemKey: B,
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
                case e2.SOUNDMOJI:
                    return;
            }
        },
        q = (e) =>
            (0, s.jsx)("ul", {
                ..._(p),
                className: l()(nN.ND, { [nN.HO]: Y, [nN.X$]: z }),
                ref: j,
                children: e.map($),
            });
    if (A === ez.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nN.ND,
            ref: j,
            children: (0, s.jsx)(nl, { channelId: T, onSelectSoundmoji: o }),
        });
    if (A !== ez.s.TOP_GUILD_EMOJI) return q(t);
    let Z = t.filter(
            (e) =>
                e.subCategory === ez.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eX.i.GUILD &&
                    !M.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        X = t.filter(
            (e) =>
                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eX.i.GUILD &&
                M.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
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
                              className: l()(nN.lD, { [nN.EI]: Y, [nN.qU]: z, [nN.Wk]: Z.length > 0 }),
                              children: [
                                  (0, s.jsx)(nc.A, { foreground: nN.rI }),
                                  (0, s.jsx)(W.E, {
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
var nR = n(98090);
let nb = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nD = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nL = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nw = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nM = (0, eu.xI)(h.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nP = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nx = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nU = a.memo(function (e) {
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
                getEmojiItemProps: I,
                getEmojiRowProps: S,
                rowCount: N,
                isUsingKeyboardNavigation: y,
                channelGuildId: C,
                channelId: v,
                messageId: O,
                isBurstReaction: R,
                listHeaderClassName: b,
            } = e,
            D = a.useRef(!1),
            L = x.Om.useStore((e) => e.activeCategoryIndex),
            w = (0, U.RQ)((e) => e.searchQuery),
            M = er.Sf.useSetting(),
            P = (0, _.bG)([ea.default], () => ea.default.getCurrentUser()),
            F = (0, el.ki)(P),
            V = (0, t7.St)("emoji_picker_floating_upsell"),
            { location: H } = (0, g.p)(),
            { analyticsLocations: j } = (0, T.Ay)(),
            [Y, W] = a.useState(0),
            [K, z] = a.useState(!1),
            {
                listPadding: $,
                renderRow: q,
                renderSection: Z,
                renderSectionHeader: X,
                renderSectionFooter: J,
                sectionMarginBottom: et,
                sectionHeaderHeight: en,
                sectionFooterHeight: es,
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
                    R = a.useRef(Q.An1),
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
                                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: O.location,
                                        tab: em.kx.EMOJI,
                                        collapsed: !r,
                                        guild_id: n.id,
                                    }),
                                e === ez.R2.SOUNDMOJI &&
                                    eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !r }),
                                f(i);
                        },
                        [O, t, f],
                    ),
                    M = a.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === e2.SOUNDMOJI ? null : e.type === e2.EMOJI ? (0, ef.N)(e.emoji) : e.name;
                        R.current !== Q.An1 && window.cancelAnimationFrame(R.current),
                            (R.current = window.requestAnimationFrame(() => {
                                x.Om.setInspectedExpressionPosition(t, n, k.t.MOUSE_EVENT),
                                    x.Om.setSearchPlaceholder(i),
                                    (R.current = Q.An1);
                            }));
                    }, []),
                    P = (0, _.bG)([ei.HP], () => ei.HP.hasHotspot(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                    G = a.useMemo(
                        () =>
                            eD().memoize((e, t) => {
                                let n = i[e],
                                    a = d[t.sectionIndex];
                                return (0, s.jsx)(
                                    nO,
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
                                        selectedItemClassName: nR.__invalid_selectedItem,
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
                a.useEffect(() => () => G.cache?.clear?.(), [G]);
                let F = a.useMemo(
                        () =>
                            eD().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: r, type: a, sectionId: o } = n;
                                if (a === ez.s.SEARCH_RESULTS) return;
                                let u =
                                        a === ez.s.GUILD
                                            ? null != i
                                                ? (0, s.jsx)(eq.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != r
                                              ? (0, s.jsx)(e$, { categoryId: r, height: 16, width: 16, size: "custom" })
                                              : null,
                                    c = i?.name;
                                null != r && (c = (0, ec.Nu)(r, i?.name));
                                let _ = C === e,
                                    f = n.isNitroLocked,
                                    h = f && !_,
                                    p = f && _,
                                    E =
                                        a === ez.s.SOUNDMOJI
                                            ? (0, s.jsx)(B.D, {
                                                  className: nR.f3,
                                                  onClick: () => {
                                                      (0, U.U)(em.kx.SOUNDBOARD),
                                                          eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: ee.intl.string(ee.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t2.A,
                                    {
                                        className: l()(nR.wx, y, { [nR.RA]: h, [nR.sp]: p }),
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
                    V = (0, eJ.k0)(),
                    H = a.useCallback(
                        (e, n) => {
                            let i = d[e],
                                r = L(e),
                                a = D(e);
                            return (0, s.jsx)(
                                "div",
                                {
                                    className: l()(nR.Wy, {
                                        [nR.YD]: e === d.length - 1,
                                        [nR.jl]: t.has(i.sectionId),
                                        [nR.cW]: i.isNitroLocked,
                                        [nR.T5]: r || a,
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
                                    ? (0, s.jsx)(t4.ap, {})
                                    : (0, s.jsx)(t4.Ay, {})
                                : D(e)
                                  ? (0, s.jsx)("div", { className: nR.pQ })
                                  : null,
                        [L, D, V],
                    ),
                    Y = a.useCallback((e) => (L(e) ? 41 : 33 * !!D(e)), [L, D]),
                    W = a.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || L(e) || D(e) ? 0 : nP),
                        [t, d, L, D],
                    );
                return {
                    listPadding: a.useMemo(() => ["" !== c ? nw : nb, nD, nL, 0], [c]),
                    renderRow: G,
                    renderSection: H,
                    renderSectionHeader: F,
                    renderSectionFooter: j,
                    sectionMarginBottom: W,
                    sectionHeaderHeight: a.useCallback((e) => (d[e].type === ez.s.SEARCH_RESULTS ? 0 : nM), [d]),
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
                getEmojiItemProps: I,
                getEmojiRowProps: S,
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
            eu = (0, G.Fk)({
                activeCategoryIndex: L,
                isScrolling: D,
                listRef: o,
                onActiveCategoryIndexChange: (e) => {
                    W(e), "" === w && x.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: w,
                disableForSearch: !1,
            });
        (0, G.FV)({ searchQuery: w, activeCategoryIndex: L, listRef: o });
        let ed = a.useCallback(
                (e) => {
                    eu(e),
                        nk({ emojiListRef: o, sectionDescriptors: h, scrollTop: e, searchQuery: w, setShowUpsell: z });
                },
                [eu, o, h, w, z],
            ),
            e_ = h.length > 0;
        return (
            a.useEffect(() => {
                K &&
                    eo.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: ev.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: H,
                        location_stack: j,
                    });
            }, [H, j, K]),
            a.useEffect(() => {
                "" !== w && z(!1);
            }, [w]),
            (0, s.jsxs)("div", {
                className: nR.AD,
                children: [
                    e_
                        ? (0, s.jsx)(t0.A, {
                              role: "none presentation",
                              className: nR.p_,
                              listPadding: $,
                              onScroll: ed,
                              renderRow: q,
                              renderSection: Z,
                              renderSectionHeader: X,
                              renderSectionFooter: J,
                              rowCount: N,
                              rowCountBySection: p,
                              rowHeight: u + 2 * nx,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: et,
                              sectionFooterHeight: es,
                              stickyHeaders: !0,
                              ref: o,
                          })
                        : (0, s.jsx)(tJ.A, { message: ee.intl.string(ee.t.IxxiKF), className: nR.BZ }),
                    F || tQ.Fr
                        ? null
                        : (0, s.jsx)(t6.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, tg.Dd)(ev.PremiumTypes.TIER_2)),
                                  ee.intl.format(ee.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: e6.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t3.qD)()), (0, tg.LE)(n, ev.pe.TIER_2) ?? ee.intl.string(ee.t.BmJkbd)),
                              buttonAnalyticsObject: { section: Q.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: V
                                  ? (0, s.jsx)(t5.l, {
                                        size: "sm",
                                        className: nR.ij,
                                        location: A.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    nk = eD().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: r, setShowUpsell: s } = e;
            s(
                (0, t1.s)({ listRef: t, searchQuery: r, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nG = n(506774),
    nF = n(349288),
    nV = n(753390),
    nB = n(404374),
    nH = n(780964),
    nj = n(858897),
    nY = n(166403),
    nW = n(542863);
let nK = "premiumRetentionEmojiPickerNotice",
    nz = nG.w.get(nK),
    n$ = (e) => {
        let { closePopout: t, channel: n } = e,
            [i, r] = a.useState(!1),
            { subscription: o, hasFetchedSubscriptions: l } = (0, _.cf)([nY.A], () => ({
                subscription: nY.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nY.A.hasFetchedSubscriptions(),
            }));
        if (
            (a.useEffect(() => {
                l || (0, nV.hP)();
            }, [l]),
            null == o || !(0, tg.PK)(o.status) || i)
        )
            return null;
        let u = o.status === Q.Dmq.PAST_DUE ? (0, tg.ji)(o).expiresDate : C()(o.currentPeriodStart).add(ev.ph),
            c = `${o.id}:${u.toISOString()}`;
        if (nz === c) return null;
        let d =
            tg.Ay.getPremiumType(o.planId) === ev.PremiumTypes.TIER_0
                ? nB.k0.PREMIUM_TIER_0
                : tg.Ay.getPremiumType(o.planId) === ev.PremiumTypes.TIER_1
                  ? nB.k0.PREMIUM_TIER_1
                  : nB.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)("div", {
            className: nW.g$,
            children: [
                (0, s.jsx)(eA.t, { size: "md", className: nW.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: nW.Xn,
                    children: [
                        (0, s.jsx)(W.E, {
                            variant: "text-xs/normal",
                            children: ee.intl.format(ee.t.bTMjiO, {
                                planName: tg.Ay.getTierDisplayNameByPlanId(o.planId),
                                endsAt: u.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nF.Anchor, {
                                onClick: () => {
                                    (0, ec.xf)(n), t(), (0, nj.openUserSettings)(nH.X.NITRO_PANEL);
                                },
                                children: ee.intl.string(ee.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(B.D, {
                    onClick: () => {
                        nG.w.set(nK, c), (nz = c), r(!0);
                    },
                    children: (0, s.jsx)(H.P, { size: "md", color: "currentColor", className: nW.YF }),
                }),
            ],
        });
    };
var nq = n(148361);
let nZ = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    nX = (0, eu.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    nQ = (e) => e.stopPropagation(),
    nJ = (e, t) => {
        x.Om.setInspectedExpressionPosition(e, t, k.t.GRID_NAVIGATOR_EVENT);
    },
    n0 = c()(ec.bo, 200),
    n1 = c()(ec.Wi, 200),
    n2 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n3 = a.memo(
        a.forwardRef(function (e, t) {
            let n,
                i,
                {
                    pickerIntention: r,
                    channel: o,
                    guildId: u,
                    closePopout: c,
                    emojiSize: h = ez.as.MEDIUM,
                    hasTabWrapper: y = !1,
                    onSelectEmoji: C,
                    onSelectSoundmoji: v,
                    containerWidth: O,
                    onNavigateAway: R,
                    persistSearch: b,
                    className: D,
                    headerClassName: L,
                    analyticsOverride: w = n2,
                    searchProps: F = {},
                    wrapper: V,
                    shouldHidePickerActions: B = !1,
                    messageId: H,
                    renderHeader: j,
                    listHeaderClassName: Y,
                    categoryListClassName: W,
                    shouldShowSoundmojiInEmojiPicker: K = !1,
                    showOnlyUnicode: z = !1,
                    showAddEmojiButton: $,
                } = e,
                { onFocus: Z, onKeyDown: X, autoFocus: J = !0, accessory: et } = F,
                eu = (0, _.bG)([es.Ay], () => (null != u ? es.Ay.getDefaultChannel(u) : null), [u]),
                [ed, e_] = a.useState(null),
                em = a.useRef(""),
                eA = (0, U.RQ)((e) => e.searchQuery),
                eI = a.useRef(null),
                eT = a.useRef(null),
                eS = a.useRef(null);
            null == o && null != eu && (o = eu);
            let eN = o?.getGuildId() ?? u ?? null,
                [ey, eC] = a.useState(!1),
                ev = ea.default.getCurrentUser(),
                eO = (0, el.ki)(ev);
            a.useImperativeHandle(t, () => ({ onPickerOpen: e5 }));
            let { location: eb } = (0, g.p)(),
                { page: eL, section: ew, object: eM, openPopoutType: eP, popoutLocation: ex } = w,
                eU = a.useMemo(() => ({ ...eb, section: ew ?? Q.JJy.EMOJI_PICKER_POPOUT }), [eb, ew]),
                { analyticsLocations: ek } = (0, T.Ay)(A.A.EMOJI_PICKER),
                { diversitySurrogate: eG } = (0, _.cf)([N.Ay], () => ({ diversitySurrogate: N.Ay.diversitySurrogate })),
                eF = (0, ec.sL)(eA, o, r, z),
                eV = null == eF ? 0 : eF.locked.length + eF.unlocked.length,
                eB = er.iM.useSetting(),
                eH = a.useMemo(() => new Set(eB), [eB]),
                ej = a.useCallback((e) => {
                    er.iM.updateSetting(Array.from(e));
                }, []),
                eY = (0, G.oV)({ gridWrapperRef: eI, containerWidth: O, listPaddingLeft: nX, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eW,
                    sectionDescriptors: eK,
                    emojiGrid: e$,
                    columnCounts: eq,
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
                        f = (0, _.bG)([N.Ay], () => N.Ay.categories),
                        h = a.useMemo(() => (d ? eQ.Ay.getCategories() : f), [f, d]),
                        p = (0, _.bG)([q.A], () => q.A.getGuild(t?.getGuildId()), [t]),
                        E = t?.getGuildId() ?? n,
                        m = (0, _.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(E), [E]),
                        g = (0, ec.XI)(E),
                        A = (0, ec.Fj)(E),
                        I = (0, ec.QZ)(E),
                        { topEmojis: T, newlyAddedEmojis: S } = (0, ep.A)(E, r),
                        y = (0, _.yK)([e1.Ay], () => e1.Ay.getFlattenedGuildIds(), []),
                        C = (0, _.bG)([N.Ay], () => N.Ay.expandedSectionsByGuildIds),
                        v = (0, _.bG)([ea.default], () => ea.default.getCurrentUser()),
                        O = (0, el.ki)(v),
                        R = (0, eJ.k0)(),
                        b = m.getGroupedCustomEmoji(),
                        D = (0, e0.Ym)({ location: "useEmojiGrid" });
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
                                N = (s, o) => {
                                    let l = new Map(),
                                        c = i.has(o.sectionId),
                                        [h, p] = eD().partition(s, (e) => {
                                            let n = ef.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: r });
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
                                                        o.sectionId === ez.s.TOP_GUILD_EMOJI
                                                            ? (0, ec.DA)(T, S, e.id ?? e.uniqueName ?? e.name)
                                                            : ez.tm.NONE,
                                                }));
                                        if ((v.push(i), !c)) {
                                            if (I && e === y - 1) {
                                                let t = v[e];
                                                t.push({
                                                    type: 1,
                                                    guildId: A.id,
                                                    name: ee.intl.string(ee.t.NZI2Zk),
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
                                    N(s.unlocked, {
                                        type: ez.s.SEARCH_RESULTS,
                                        sectionId: ez.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        N(s.locked, {
                                            type: ez.s.PREMIUM_UPSELL,
                                            categoryId: ez.R2.PREMIUM_UPSELL,
                                            sectionId: ez.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !O,
                                        });
                            else {
                                if (D && c) {
                                    let t = [{ type: 2, rowIndex: f, columnIndex: 0, visibleRowIndex: _ }];
                                    n.push({
                                        type: ez.s.SOUNDMOJI,
                                        categoryId: ez.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let r = i.has(ez.R2.SOUNDMOJI);
                                    !r && (d.push(t.length), a.push(t), _++), e.push(+!r), f++;
                                }
                                for (let e of h)
                                    if (e === ez.R2.CUSTOM) {
                                        let n = (n) => {
                                            let i = b.get(n);
                                            if (null == i) return;
                                            let s = i.filter(
                                                (e) =>
                                                    !e3.includes(
                                                        ef.Ay.getEmojiUnavailableReason({
                                                            emoji: e,
                                                            channel: t ?? es.Ay.getDefaultChannel(n),
                                                            intention: r,
                                                        }),
                                                    ),
                                            );
                                            if (0 === s.length) return;
                                            let a = q.A.getGuild(n),
                                                o =
                                                    R ||
                                                    (!O &&
                                                        ef.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: r,
                                                        }));
                                            N(s, {
                                                categoryId: e,
                                                guild: a,
                                                type: ez.s.GUILD,
                                                sectionId: null != a ? a.id : (0, eZ.A)(),
                                                count: s.length,
                                                isNitroLocked: o,
                                            });
                                        };
                                        if ((null != p && n(p.id), (0, eE.isExternalEmojiAllowedForIntention)(r)))
                                            for (let e of y) (null == p || p.id !== e) && n(e);
                                    } else if (e === ez.R2.TOP_GUILD_EMOJI) {
                                        if (null != p) {
                                            let { allEmojis: t } = (0, eh.W)({ topEmojis: T, newlyAddedEmojis: S });
                                            t.length > 0 &&
                                                N(t, {
                                                    categoryId: e,
                                                    guild: q.A.getGuild(p.id),
                                                    type: ez.s.TOP_GUILD_EMOJI,
                                                    sectionId: ez.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === ez.R2.RECENT) {
                                        let n = (r === eE.EmojiIntention.REACTION ? I : A).filter(
                                            (e) => !ef.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                                        );
                                        N(n, {
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
                                            N(n, {
                                                categoryId: e,
                                                type: ez.s.FAVORITES,
                                                sectionId: ez.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = eQ.Ay.getByCategory(e);
                                        null != t &&
                                            N(t, {
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
                    }, [m, o, u, l, s, i, b, C, t, r, T, S, O, h, p, y, I, A, g, R, D, c]);
                })({
                    gridWidth: eY,
                    fallbackGuildId: eN,
                    channel: o,
                    pickerIntention: r,
                    emojiSearchResults: eF,
                    collapsedSections: eH,
                    emojiPaddingHorizontal: nZ,
                    emojiSpriteSize: h,
                    shouldShowSoundmojiInEmojiPicker: K,
                    showOnlyUnicode: z,
                }),
                { newlyAddedEmojis: e4 } = (0, ep.A)(eN, r);
            (n = a.useRef({ intention: r, isBurstReaction: ey, analyticsObject: eM })),
                a.useEffect(() => {
                    n.current.intention === eE.EmojiIntention.REACTION && eg(n.current);
                }, []);
            let e5 = a.useCallback(() => {
                    let e = e4.length > 0 ? e4[0].id : null;
                    (0, P.uV)(eN, e), eg({ intention: r, isBurstReaction: ey, analyticsObject: eM });
                }, [e4, eN, r, ey, eM]),
                e7 = ((e) => {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: i,
                            onSelectEmoji: r,
                            setUpsellConfigs: s,
                            emojiSelectAnalytics: o,
                            trackEmojiFavorited: l,
                        } = e,
                        u = (0, _.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
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
                                if (c !== eE.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (c === eE.EmojiDisabledReasons.PREMIUM_LOCKED)
                                        return void s({ type: 0, emojiDescriptor: e });
                                    if (c === eE.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && a.type === eX.i.GUILD)
                                        return void s({ type: 1, guildId: a.guildId, emojiId: a.id });
                                    c !== eE.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                        (o?.(e), r({ emoji: a, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                                }
                            }
                        },
                        [n, t, r, s, u, o, l],
                    );
                })({
                    pickerIntention: r,
                    selectedChannel: o,
                    fallbackGuildId: eN,
                    closePopout: c,
                    onSelectEmoji: C,
                    setUpsellConfigs: e_,
                    emojiSelectAnalytics: (e) => {
                        "" !== eA
                            ? (0, ec.Wf)({
                                  emoji: e.emoji,
                                  location: { ...eU, object: Q.ZSU.EMOJI },
                                  searchQuery: eA,
                                  intention: r,
                                  messageId: H,
                              })
                            : (0, ec._7)({
                                  emoji: e.emoji,
                                  location: { ...eU, object: eM ?? Q.ZSU.EMOJI, ...(null != eL && { page: eL }) },
                                  pickerIntention: r,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                      M.isNewerThanLastSeen(eN, e.emoji.id),
                                  isBurstReaction: ey,
                                  messageId: H,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, ec.C5)({ emoji: e.emoji, location: { ...eU, object: Q.ZSU.EMOJI } });
                    },
                }),
                e8 = a.useCallback(() => {
                    c(), R?.();
                }, [c, R]),
                {
                    getItemProps: e9,
                    getRowProps: te,
                    gridContainerProps: tt,
                    handleGridContainerKeyDown: tn,
                    isUsingKeyboardNavigation: ti,
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
                        c = (0, _.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(l), [l]),
                        f = a.useCallback(
                            (e, i) => {
                                if (e.type === e2.EMOJI) {
                                    if (null != e.emoji && i.altKey)
                                        return void (c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, E.Sw)(e.emoji)
                                            : ((0, ec.C5)({ emoji: e.emoji, location: { ...t, object: Q.ZSU.EMOJI } }),
                                              (0, E.V4)(e.emoji)));
                                    let s = {
                                        page: null != l ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                        section: Q.JJy.EMOJI_PICKER_POPOUT,
                                        object: Q.ZSU.EMOJI,
                                    };
                                    u &&
                                        (s = {
                                            page: null != l ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                            section: Q.JJy.EMOJI_PICKER_POPOUT,
                                            object: Q.ZSU.EMOJI,
                                        }),
                                        (0, ec._7)({
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
                            gridDispatch: h,
                            getItemProps: p,
                            getRowProps: m,
                            gridContainerProps: g,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        } = (0, G.Ff)({
                            columnCounts: i,
                            gridNavigatorId: ez.lq,
                            itemGrid: s,
                            itemList: o,
                            onGridNavigatorItemSelect: f,
                            onGridNavigatorPositionChange: nJ,
                        });
                    return (
                        a.useEffect(
                            () =>
                                x.Om.subscribe(
                                    (e) => e.inspectedExpressionPosition,
                                    (e) => {
                                        if (null == e) return;
                                        let { columnIndex: t, rowIndex: n, source: i } = e;
                                        i !== k.t.GRID_NAVIGATOR_EVENT &&
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
                    analyticsLocation: eU,
                    columnCounts: eq,
                    onSelectEmoji: C,
                    emojiGrid: e$,
                    emojiList: eT,
                    channelGuildId: eN,
                    isBurstReaction: ey,
                });
            ((e, t) => {
                let [n, i] = a.useState(null);
                a.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), i(null));
                }, [t, n]),
                    a.useEffect(() => {
                        i(x.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(O, eT),
                a.useLayoutEffect(() => {
                    J && eS.current?.focus();
                }, [O, eG, eS, J]),
                a.useEffect(() => {
                    b || (0, U.Ri)("");
                }, [b]),
                a.useEffect(
                    () => (
                        eo.default.track(Q.HAw.OPEN_POPOUT, {
                            type: eP ?? "Emoji Picker",
                            guild_id: eN,
                            location: ex,
                            ...(0, I.dI)(o),
                        }),
                        x.Om.resetStoreState
                    ),
                    [eP, eN, ex, o],
                ),
                a.useEffect(() => () => (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                a.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = x.Om.getState().inspectedExpressionPosition;
                    e$[t]?.[e] == null && 0 !== e && x.Om.setInspectedExpressionPosition(0, 0);
                }, [e$]),
                a.useEffect(() => {
                    "" === em.current && "" !== eA && (0, ec.EG)(eU, r),
                        0 === eV && "" !== eA
                            ? n0(eU, eA)
                            : "" !== eA && em.current !== eA && n1(eV, eF?.locked.length ?? 0, eU, eA, r),
                        (em.current = eA);
                }, [eA, eU, eV, eF, r]);
            let tr = V ?? (y ? "div" : p.l),
                ts = null != eY;
            ed?.type === e6.PREMIUM
                ? (i = (0, s.jsx)(nq.default, {
                      onUpsellClicked: e8,
                      emojiDescriptor: ed.emojiDescriptor,
                      pickerIntention: r,
                      analyticsLocation: eU,
                      onClose: () => e_(null),
                      channel: o,
                  }))
                : ed?.type === e6.ROLE_SUBSCRIPTION
                  ? (i = (0, s.jsx)(en, { onClose: () => e_(null), guildId: ed.guildId, emojiId: ed.emojiId }))
                  : ey && !eO && (i = (0, s.jsx)(eR, { onDismiss: () => eC(!1) }));
            let ta = (0, s.jsx)(tW, {
                    channel: o,
                    pickerIntention: r,
                    emojiListRef: eT,
                    onKeyDown: (e) => {
                        tn?.(e), X?.(e);
                    },
                    searchBarRef: eS,
                    onFocus: Z,
                    autoFocus: J,
                    accessory: et,
                    headerClassName: L,
                    diversitySurrogate: eG,
                    isBurstReaction: ey,
                    onBurstReactionToggle: () => {
                        eC(!ey), eS.current?.focus();
                    },
                    renderHeader: j,
                    showAddEmojiButton: $,
                }),
                to = [];
            r === eE.EmojiIntention.REACTION && to.push(f.M.SUPER_REACTIONS_NITRO_MARKETING),
                N.Ay.hasFavoriteEmojis(eN) || to.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let tl = (0, s.jsx)(m.A, {
                ...eU,
                children: (0, s.jsxs)(tr, {
                    id: ez.Do,
                    "aria-labelledby": y ? ez.k1 : void 0,
                    role: y ? "tabpanel" : void 0,
                    className: l()(tY.iE, { [tY.r6]: y, [tY.cB]: ey && eO }),
                    children: [
                        y ? null : ta,
                        (0, s.jsxs)("div", {
                            className: l()(tY.Fb, D),
                            onScroll: nQ,
                            children: [
                                y ? ta : null,
                                (0, s.jsxs)("div", {
                                    className: tY.uK,
                                    ref: eI,
                                    children: [
                                        (0, s.jsx)(n$, { channel: o, closePopout: c }),
                                        (0, s.jsx)(S.Ay, {
                                            contentTypes: to,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(t_, { markAsDismissed: () => n(tc.i.UNKNOWN) });
                                            },
                                        }),
                                        B
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: tY.Iy,
                                                  id: ez.lq,
                                                  ...tt,
                                                  children: ts
                                                      ? (0, s.jsx)(nU, {
                                                            collapsedSections: eH,
                                                            diversitySurrogate: eG,
                                                            emojiGrid: e$,
                                                            emojiListRef: eT,
                                                            emojiSize: h,
                                                            getEmojiItemProps: e9,
                                                            getEmojiRowProps: te,
                                                            gridWidth: eY,
                                                            isUsingKeyboardNavigation: ti,
                                                            onEmojiSelect: (e, t) => {
                                                                e7(e, { ...t, isBurst: ey });
                                                            },
                                                            onSelectSoundmoji: v,
                                                            setUpsellConfigs: e_,
                                                            rowCount: e$.length,
                                                            rowCountBySection: eW,
                                                            sectionDescriptors: eK,
                                                            setCollapsedSections: ej,
                                                            channelGuildId: eN,
                                                            channelId: o?.id,
                                                            messageId: H,
                                                            isBurstReaction: ey,
                                                            listHeaderClassName: Y,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(tX, {
                                    emojiGrid: e$,
                                    className: tY.qV,
                                    guildId: eN,
                                    pickerIntention: r,
                                    channel: o,
                                }),
                                i,
                            ],
                        }),
                        B
                            ? null
                            : (0, s.jsx)(tu, {
                                  className: l()(tY.jv, W),
                                  emojiListRef: eT,
                                  sectionDescriptors: eK,
                                  intention: r,
                                  channel: o,
                                  fallbackGuildId: eN,
                                  shouldShowSoundmojiInEmojiPicker: K,
                                  showOnlyUnicode: z,
                              }),
                    ],
                }),
            });
            return (0, s.jsx)(T.f5, { value: ek, children: tl });
        }),
    );
