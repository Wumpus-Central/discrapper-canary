"use strict";
n.d(t, { A: () => n3 }), n(321073);
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    d = n(111956),
    _ = n.n(d),
    u = n(788413),
    c = n(17928),
    E = n(554146),
    h = n(319060),
    m = n(305866),
    f = n(554375),
    g = n(820284),
    p = n(212245),
    A = n(793574),
    I = n(58149),
    T = n(688810),
    S = n(379848),
    N = n(159273),
    C = n(989349),
    R = n.n(C),
    O = n(228366),
    y = n(935208);
let v = { lastSeenNewlyAddedEmojiIds: {} },
    D = v,
    L = {};
function b() {
    for (let e in L) D.lastSeenNewlyAddedEmojiIds[e] = L[e];
}
class w extends c.Ay.PersistedStore {
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
        D = e ?? v;
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
        if (null == n || y.default.compare(t, n.id) > 0) return !0;
        {
            let e = R()(n.lastSeen);
            return R()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let P = new w(O.h, {
    LOGOUT: function () {
        (D = v), (L = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? D.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > y.default.compare(i.id, n)
            ? (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (L[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = L[t] ?? D.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > y.default.compare(i.id, n)) && (L[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: b,
    CLEAR_CACHES: function () {
        (D = v), b();
    },
    CONNECTION_CLOSED: b,
});
var k = n(451731),
    M = n(850992),
    U = n(151271),
    x = n(60587),
    G = n(464651),
    V = n(110259),
    F = n(462887),
    B = n(939249),
    H = n(789645),
    j = n(696986),
    W = n(534514),
    Y = n(834730),
    K = n(736653),
    z = n(139286),
    $ = n(976860),
    q = n(71393),
    X = n(384684),
    Z = n(985242),
    Q = n(652215),
    J = n(746080),
    ee = n(985018),
    et = n(271019);
function en(e) {
    let t,
        { onClose: i, guildId: r, emojiId: a } = e,
        o = ((t = (0, K.Ay)()), (0, F.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: l } = (0, T.Ay)(A.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, z.A)({
        type: V.ImpressionTypes.MODAL,
        name: V.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: l, emoji_guild_id: r, emoji_id: a ?? null },
    });
    let d = (0, c.bG)([q.A], () => q.A.getGuild(r)),
        _ = (0, c.bG)([X.A], () => null != r && X.A.getUserSubscriptionRoles(r).size > 0),
        u = _ ? ee.intl.string(ee.t.GoLM9z) : ee.intl.formatToPlainString(ee.t["h0u/Hi"], { serverName: d?.name }),
        E = _ ? ee.intl.string(ee.t.PjZ7Db) : ee.intl.string(ee.t.p8FG1D);
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
                    (0, s.jsx)(W.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: et.wx,
                        children: ee.intl.string(ee.t.cBjkcx),
                    }),
                    (0, s.jsx)(j.h, { size: 4 }),
                    (0, s.jsx)(Y.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: et.h_,
                        children: u,
                    }),
                    (0, s.jsx)(j.h, { size: 24 }),
                    (0, s.jsx)(Z.A, {
                        text: E,
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
    er = n(253932),
    es = n(808728),
    ea = n(287809),
    eo = n(954571),
    el = n(474090),
    ed = n(240248),
    e_ = n(822123),
    eu = n(734057),
    ec = n(309010),
    eE = n(690521),
    eh = n(818645),
    em = n(316884),
    ef = n(307731),
    eg = n(698279);
function ep(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: r, analyticsObject: s } = e,
        a = eu.A.getChannel(ec.A.getChannelId()),
        o = a?.getGuildId(),
        l =
            t === ef.EmojiIntention.REACTION
                ? N.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : N.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        d = null != a ? N.Ay.getDisambiguatedEmojiContext(a.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        _ =
            t === ef.EmojiIntention.REACTION
                ? N.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : N.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        u = l.slice(0, _),
        c = null != o ? N.Ay.getGuildEmoji(o) : [],
        E = N.Ay.getDisambiguatedEmojiContext(a?.getGuildId()).getCustomEmoji(),
        { topEmojis: h, newlyAddedEmojis: m } = (0, em.b)({ guildId: a?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: f, visibleNewlyAddedEmojis: g } = (0, eh.W)({
            topEmojis: h,
            newlyAddedEmojis: m,
            rowSize: i,
        });
    I.Ay.trackWithMetadata(
        t === ef.EmojiIntention.REACTION ? Q.HAw.REACTION_PICKER_OPENED : Q.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: eg.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: d.length,
            num_animated_expressions_favorites: d.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: d.filter(eE.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: d.filter((e) => null == e.id).length,
            num_expressions_frecent: u.length,
            num_animated_expressions_frecent: u.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: u.filter(eE.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: u.filter((e) => null == e.id).length,
            num_current_guild_expressions: c.length,
            num_custom_expressions_total: E.size,
            num_expressions_top_server: f.length,
            num_animated_expressions_top_server: f.filter((e) => e.animated).length,
            num_expressions_newly_added: g.length,
            num_animated_expressions_newly_added: g.filter((e) => e.animated).length,
            ...(t === ef.EmojiIntention.REACTION && { is_burst: r }),
            ...(null != s && { location_object: s }),
        },
    );
}
var eA = n(403581),
    eI = n(775602),
    eT = n(607470),
    eS = n(422936),
    eN = n(234419),
    eC = n(725807),
    eR = n(811611),
    eO = n(788868),
    ey = n(151867);
function ev(e) {
    let { onDismiss: t } = e,
        n = (0, c.bG)([eI.A], () => eI.A.useReducedMotion),
        i = ee.intl.string(ee.t.eikz43),
        r = (0, eN.V)(),
        a = (0, eS.O)(),
        o = r?.subscription_trial != null || null != a,
        d = { object: Q.ZSU.BUTTON_CTA, section: Q.JJy.SUPER_REACTION_PICKER };
    return (0, s.jsxs)("div", {
        className: ey.iE,
        children: [
            (0, s.jsx)(B.D, {
                onClick: t,
                className: ey.b,
                "aria-label": ee.intl.string(ee.t.WAI6xu),
                children: (0, s.jsx)(H.P, { size: "md", color: "currentColor" }),
            }),
            (0, s.jsxs)("div", {
                className: ey.Qs,
                children: [
                    (0, s.jsx)("div", {
                        className: ey.jo,
                        children: (0, s.jsx)(eT.A, {
                            className: l()(ey.vK, { [ey.Vk]: o }),
                            src: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                            loop: !0,
                            autoPlay: !n,
                            muted: !0,
                            controls: !0,
                            disablePictureInPicture: !0,
                        }),
                    }),
                    o
                        ? (0, s.jsx)(eR.Ay, {
                              type: eO.e.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: r?.subscription_trial?.sku_id ?? eO.pe.TIER_2,
                              headingText: ee.intl.string(ee.t.Wfl5zp),
                              analyticsLocationObject: d,
                              discountOffer: a,
                              trialOffer: r,
                              children: i,
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsxs)("div", {
                                      className: ey.wx,
                                      children: [
                                          (0, s.jsx)(eA.t, {
                                              size: "custom",
                                              color: "currentColor",
                                              className: ey.ax,
                                              width: 32,
                                              height: 32,
                                          }),
                                          (0, s.jsx)(W.D, {
                                              className: ey.TK,
                                              variant: "heading-xl/bold",
                                              children: ee.intl.string(ee.t.Wfl5zp),
                                          }),
                                      ],
                                  }),
                                  (0, s.jsx)(Y.E, { className: ey.Fb, variant: "text-md/normal", children: i }),
                                  (0, s.jsx)("div", {
                                      className: ey.sk,
                                      children: (0, s.jsx)(eC.A, {
                                          subscriptionTier: eO.pe.TIER_2,
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
var eD = n(735438),
    eL = n.n(eD),
    eb = n(837381),
    ew = n(460905),
    eP = n(802019),
    ek = n(407698),
    eM = n(531685),
    eU = n(406810),
    ex = n(27232),
    eG = n(369606),
    eV = n(413249),
    eF = n(141060),
    eB = n(687966),
    eH = n(115979),
    ej = n(524501),
    eW = n(926268),
    eY = n(138134),
    eK = n(7807),
    ez = n(732139);
let e$ = a.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = ((e) => {
            switch (e) {
                case ez.R2.RECENT:
                    return eU.O;
                case ez.R2.FAVORITES:
                    return ex.G;
                case ez.R2.TOP_GUILD_EMOJI:
                    return eG.O;
                case ez.R2.PEOPLE:
                    return ew.n;
                case ez.R2.NATURE:
                    return eV.p;
                case ez.R2.FOOD:
                    return eF.i;
                case ez.R2.ACTIVITY:
                    return eB._;
                case ez.R2.TRAVEL:
                    return eH.h;
                case ez.R2.OBJECTS:
                    return ej.D;
                case ez.R2.SYMBOLS:
                    return eW.C;
                case ez.R2.FLAGS:
                    return eY.i;
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
    eX = n(132500),
    eZ = n(770335),
    eQ = n(7584),
    eJ = n(526292),
    e0 = n(704591),
    e1 = n(711014),
    e2 =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let e3 = [ef.EmojiDisabledReasons.DISALLOW_EXTERNAL, ef.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e6 = (((r = {})[(r.PREMIUM = 0)] = "PREMIUM"), (r[(r.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), r),
    e4 = n(619182);
let e7 = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    e5 = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    e8 = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    e9 = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    te = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tt = (0, ed.xI)(e4.__invalid_unicodeCategoryShortcutHeight),
    tn = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    ti = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tr = e8 + e5 + 2 * te,
    ts = e7 + e5,
    ta = ts + (tn + 2 * ti),
    to = e8 + e9 + 2 * te;
function tl(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: i,
            categories: r,
            category: o,
            handleCategorySelect: d,
            isWindowFocused: _,
            useReducedMotion: u,
        } = e,
        c = (0, eb.rm)(`expression-guild-${n}`),
        E = o.type === ez.s.GUILD ? null : o.id,
        h = t === n,
        m = o.type === ez.s.GUILD ? o.guild : null,
        f = (0, s.jsxs)(B.D, {
            ...c,
            "aria-label": (0, e_.wt)(o, m),
            className: l()({
                [e4.ZG]: null != m,
                [e4.Bj]: null == m,
                [e4.s6]: null == m && h,
                [e4.xg]: o.type === ez.s.RECENT,
            }),
            onClick: () => {
                null != m &&
                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: eg.kx.EMOJI,
                        guild_id: m.id,
                    }),
                    d(n);
            },
            children: [
                null != m
                    ? (0, s.jsx)(eq.A, { guild: m, isSelected: h, shouldAnimate: !u && _, isLocked: o.isNitroLocked })
                    : null,
                null == m && null != E
                    ? (0, s.jsx)(e$, { categoryId: E, className: e4.Yl, height: e8, width: e8, size: "custom" })
                    : null,
            ],
        }),
        g = r[n + 1],
        p = null != g && o.type === ez.s.GUILD && g.type !== ez.s.GUILD;
    return null != m
        ? (0, s.jsxs)(a.Fragment, {
              children: [
                  (0, s.jsx)(ek.Q, { guild: m, children: (0, s.jsx)("div", { children: f }) }),
                  p ? (0, s.jsx)("hr", { className: e4.ny }, "separator") : null,
              ],
          })
        : f;
}
let td = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: r,
            channel: o,
            fallbackGuildId: d,
            shouldShowSoundmojiInEmojiPicker: _ = !1,
            showOnlyUnicode: u = !1,
        } = e,
        E = M.Om.useStore((e) => e.activeCategoryIndex),
        h = ((e) => {
            let { emojiListRef: t } = e,
                n = (0, U.RQ)((e) => e.searchQuery),
                i = a.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return a.useCallback(
                (e) => {
                    "" !== n ? ((0, U.Ri)(""), M.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        m = (0, p.p)(),
        f = (0, e_.ss)(r, o, o?.guild_id ?? d, _),
        g = a.useMemo(() => (u ? (0, e_.CQ)() : f), [f, u]),
        A = a.useRef(null),
        I = (0, c.bG)([eM.A], () => eM.A.isFocused()),
        T = (0, c.bG)([eI.A], () => eI.A.useReducedMotion, []),
        S = a.useMemo(
            () =>
                eL().memoize((e, t) => {
                    let n = g[t];
                    if (null != n)
                        return (0, s.jsx)(
                            tl,
                            {
                                activeIndex: E,
                                analyticsContext: m,
                                categories: g,
                                category: n,
                                categoryIndex: t,
                                handleCategorySelect: h,
                                isWindowFocused: I,
                                useReducedMotion: T,
                            },
                            t,
                        );
                }),
            [E, m, g, h, I, T],
        ),
        N = a.useMemo(() => [8, 8, 0, 8], []),
        C = a.useCallback(
            (e, t) => {
                let n = g[t];
                if (n.type === ez.s.RECENT) return tr;
                if (n.type === ez.s.GUILD) {
                    let e = g[t + 1];
                    return null != e && e.type !== ez.s.GUILD ? ta : ts;
                }
                return to;
            },
            [g],
        ),
        {
            nonUnicodeCategoryCount: R,
            firstUnicodeCategoryIndex: O,
            firstUnicodeCategoryOffsetTop: y,
            rowCountBySection: v,
        } = a.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            g.forEach((r) => {
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
        }, [g]),
        [D, L] = a.useState(!0);
    a.useLayoutEffect(() => {
        L(R >= 7);
    }, [R]);
    let b = a.useCallback(
            (e) => {
                let t = A.current?.getListDimensions();
                null == t || (e + t.height - tn >= y ? L(!1) : L(!0));
            },
            [y],
        ),
        w = a.useCallback(
            (e) => {
                e(O), A.current?.scrollTo(y);
            },
            [y, O],
        ),
        P = a.useCallback(
            (e, t) => {
                let n = g[e];
                if (null == n) return 0;
                let i = D ? tt : 0;
                if (n.type === ez.s.RECENT) return t ? 0 : e9;
                if (n.type === ez.s.GUILD) {
                    let n = g[e + 1];
                    return null != n && n.type !== ez.s.GUILD ? (t ? tn + -2 * ti + e5 + i : e5) : t ? i : e5;
                }
                return t ? e5 + i : 2 * e5;
            },
            [g, D],
        ),
        k = a.useMemo(
            () =>
                function (e, t) {
                    return (0, s.jsx)(a.Fragment, { children: t }, e);
                },
            [],
        ),
        x = D ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(eP.A, {
        categoryListRef: A,
        expressionsListRef: n,
        className: t,
        store: M.Om,
        categories: g,
        listPadding: N,
        onScroll: b,
        renderCategoryListItem: S,
        renderSection: k,
        rowCount: g.length,
        categoryHeight: C,
        getScrollOffsetForIndex: P,
        rowCountBySection: v,
        children: (e) =>
            R >= 7 &&
            (0, s.jsx)(
                B.D,
                {
                    "aria-hidden": !D,
                    "aria-label": ee.intl.string(ee.t.dT0ctw),
                    className: l()(e4.KB, { [e4.h_]: !D }),
                    tabIndex: D ? 0 : -1,
                    onClick: () => w(e),
                    children: (0, s.jsx)(ew.n, { size: "custom", color: "currentColor", height: e8, width: e8 }),
                },
                x,
            ),
    });
};
var t_ = n(49999),
    tu = n(868836);
let tc = (e) => {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)("div", {
        className: tu.iE,
        children: [
            (0, s.jsx)(eW.C, { size: "md", color: "currentColor", className: tu.Kk }),
            (0, s.jsx)("div", {
                className: tu.Qs,
                children: (0, s.jsx)(Y.E, { variant: "text-xs/normal", children: ee.intl.string(ee.t.xdRf69) }),
            }),
            (0, s.jsx)(B.D, {
                onClick: () => t(t_.i.UNKNOWN),
                children: (0, s.jsx)(H.P, { size: "md", color: "currentColor", className: tu.VN }),
            }),
        ],
    });
};
var tE = n(419354),
    th = n(459192),
    tm = n(717421),
    tf = n(343032),
    tg = n(932001),
    tp = n(927578),
    tA = n(337889);
let tI = { tension: 750, mass: 2.5, friction: 70 };
function tT(e) {
    let { checked: t, onClick: n } = e,
        i = (0, c.bG)([eI.A], () => eI.A.useReducedMotion),
        r = ea.default.getCurrentUser(),
        o = null == r || (0, tp.TW)(r) ? [E.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [d, _] = (0, tg.kn)(o),
        [u, h] = a.useState(!1),
        [m, f] = (0, tm.z)(() => ({})),
        g = (0, tE.animated)(tf.i);
    a.useEffect(() => {
        let e = d === E.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (_(t_.i.DISMISS), setTimeout(() => h(e), 200));
    }, [d, _]);
    let p = u ? ee.intl.string(ee.t["Osi/uy"]) : t ? ee.intl.string(ee.t["5cRA/b"]) : ee.intl.string(ee.t.buV4av),
        A = u ? ee.intl.string(ee.t.ORK94p) : void 0;
    return (0, s.jsx)(th.u, {
        position: "top",
        title: A,
        body: p,
        asset: (0, s.jsx)(eA.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: u,
        children: (0, s.jsx)(B.D, {
            "aria-label": p,
            "aria-pressed": t,
            onClick: function () {
                f({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tI }),
                    n?.(),
                    h(!1);
            },
            focusProps: { enabled: !1 },
            className: l()(tA.Pf, { [tA.wM]: t }),
            children: (0, s.jsx)(g, {
                style: i ? void 0 : m,
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
    tC = n(824832),
    tR = n(638263);
function tO(e) {
    let { channel: t } = e,
        n = a.useRef(null),
        i = a.useRef(0),
        [r, o] = a.useState(!1),
        [l, d] = a.useState(!1),
        _ = l || r,
        u = a.useCallback(
            async (e, n, r) => {
                d(!0),
                    await (0, tN.f)({
                        userImage: { data: e, file: n, image: r },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: Q.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                        },
                    }),
                    (i.current += 1),
                    d(!1);
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
                disabled: _,
            }),
            (0, s.jsx)("div", {
                className: tR.F,
                children: (0, s.jsx)(tC.Ay, { ref: n, onChange: u, setLoading: o, disabled: _ }, i.current),
            }),
        ],
    });
}
n(667532);
var ty = n(838677),
    tv = n(82495),
    tD = n(260762),
    tL = n(915089),
    tb = n(650583),
    tw = n(46274);
let tP = (0, tL.Ld)(),
    tk = ty.A.convert.fromCodePoint("1f44f"),
    tM = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
    tU = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: r, index: a } = e,
            o = (0, eb.rm)(`item-${a}`),
            l = eE.Ay.getURL(tk + n),
            d = (0, tm.z)({ opacity: 1, from: { opacity: +!t }, delay: r }, "animate-always");
        return (0, s.jsx)(B.D, {
            ...o,
            role: "option",
            "aria-selected": 0 === a,
            onClick: () => i(n),
            className: tw.B6,
            children: (0, s.jsx)(tE.animated.div, {
                "aria-label": (function (e) {
                    switch (ty.A.convert.toCodePoint(e)) {
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
                style: { backgroundImage: `url("${l}")`, ...d },
            }),
        });
    },
    tx = (e) => {
        let { id: t, selectedSurrogate: n, onClick: i } = e,
            r = (0, tD.A)("diversity"),
            o = (0, tm.z)({
                height: (tM + 14) * (eQ.W$.length + 1),
                from: { height: tM + 14 },
                config: { duration: 125 },
            });
        a.useEffect(() => {
            r.focusFirstVisibleItem();
        }, [r]);
        let l = ["", ...eQ.W$];
        return (
            eL().remove(l, (e) => e === n),
            l.unshift(n),
            (0, s.jsx)(eb.hD, {
                navigator: r,
                children: (0, s.jsx)(eb.PR, {
                    children: (e) => {
                        let { ref: n, ...r } = e;
                        return (0, s.jsx)(tE.animated.div, {
                            ...r,
                            id: t,
                            ref: n,
                            className: tw.J6,
                            style: o,
                            role: "listbox",
                            children: l.map((e, t) =>
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
            r = eE.Ay.getURL(tk + n),
            [o, d] = a.useState(!1),
            _ = (0, tv.A)(null, () => d(!1)),
            u = a.useRef(null);
        return (0, s.jsxs)("div", {
            ref: _,
            className: l()(tw.fx, i),
            children: [
                (0, s.jsx)(B.D, {
                    innerRef: u,
                    className: tw.Dj,
                    onClick: () => {
                        d(!0);
                    },
                    "aria-label": ee.intl.string(ee.t.pAVHxa),
                    "aria-haspopup": !0,
                    "aria-expanded": o,
                    "aria-controls": tP,
                    tabIndex: o ? -1 : 0,
                    children: (0, s.jsx)("div", { className: tw.g4, style: { backgroundImage: `url("${r}")` } }),
                }),
                o
                    ? (0, s.jsx)("div", {
                          onKeyDown: (e) => {
                              e.key === tb.dh.ESCAPE &&
                                  (e.stopPropagation(), d(!1), null != u.current && u.current.focus());
                          },
                          children: (0, s.jsx)(tx, {
                              id: tP,
                              selectedSurrogate: n,
                              onClick: (e) => {
                                  (0, f.dK)(e), d(!1), t.current?.focus();
                              },
                          }),
                      })
                    : null,
            ],
        });
    };
var tV = n(942381),
    tF = n(602034),
    tB = n(892547);
let tH = a.forwardRef(function (e, t) {
        let {
                emojiListRef: n,
                gridNavigatorId: i,
                onKeyDown: r,
                onFocus: o,
                autoFocus: l,
                defaultSearchPlaceholder: d,
            } = e,
            _ = a.useRef(null),
            u = (0, U.RQ)((e) => e.searchQuery),
            [c, E, h] = M.Om.useStore(
                (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
                tV.x,
            ),
            m = a.useCallback(
                (e) => {
                    M.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        M.Om.setInspectedExpressionPosition(0, 0),
                        M.Om.setSearchPlaceholder(null),
                        (0, U.Ri)(e),
                        n.current?.scrollTo(0);
                },
                [n],
            ),
            f = a.useCallback(() => {
                m("");
            }, [m]);
        return (
            a.useImperativeHandle(t, () => ({ focus: () => _.current?.focus() })),
            (0, s.jsx)(tB.I, {
                autoFocus: l,
                query: u,
                ref: _,
                placeholder: E ?? d,
                onClear: f,
                onKeyDown: (e) => {
                    switch (e.key) {
                        case tb.dh.ARROW_LEFT:
                        case tb.dh.ARROW_RIGHT:
                        case tb.dh.ARROW_UP:
                        case tb.dh.ARROW_DOWN:
                            document.activeElement !== e.target && e.preventDefault();
                    }
                    r(e);
                },
                onFocus: o,
                onChange: m,
                inputProps: {
                    "aria-label": ee.intl.string(ee.t.tCauZX),
                    "aria-haspopup": "grid",
                    "aria-controls": i,
                    "aria-expanded": !0,
                    ...(h ? { "aria-activedescendant": (0, tF.Aq)(i, c.columnIndex, c.rowIndex) } : void 0),
                },
            })
        );
    }),
    tj = a.memo(tH);
var tW = n(873426);
let tY = (e) => {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: r,
            emojiListRef: a,
            onKeyDown: o,
            onFocus: d,
            autoFocus: _,
            searchBarRef: u,
            diversitySurrogate: c,
            isBurstReaction: E,
            onBurstReactionToggle: h,
            renderHeader: m,
            showAddEmojiButton: f = !0,
        } = e,
        g = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tj, {
                    emojiListRef: a,
                    gridNavigatorId: ez.lq,
                    onKeyDown: o,
                    ref: u,
                    onFocus: d,
                    autoFocus: _,
                    defaultSearchPlaceholder: (0, e_.wT)(i, E),
                }),
                i === ef.EmojiIntention.REACTION ? (0, s.jsx)(tT, { checked: E, onClick: h }) : null,
                n ?? (0, s.jsx)(tG, { searchBarRef: u, className: tW.fx, selectedSurrogate: c }),
                i !== ef.EmojiIntention.NO_CUSTOM_EMOJI && f ? (0, s.jsx)(tO, { channel: t }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: l()(tW.wx, r), children: null != m ? m(g) : g });
};
var tK = n(182922),
    tz = n(363195),
    t$ = n(486020),
    tq = n(854469);
function tX(e) {
    return null != e && "animated" in e;
}
let tZ = a.memo(function (e) {
    let t,
        i,
        r,
        { className: o, emojiGrid: l, guildId: d, pickerIntention: _, channel: u } = e,
        E = M.Om.useStore((e) => e.inspectedExpressionPosition),
        h = a.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = E;
            return l[e]?.[t];
        }, [l, E]);
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
    let m = (0, c.bG)([q.A], () => (null !== t && t.type === eZ.i.GUILD ? q.A.getGuild(t.guildId) : null), [t]),
        f = (0, c.bG)([eM.A], () => eM.A.isFocused()),
        g = (0, c.bG)([eI.A], () => eI.A.useReducedMotion, []),
        p = er.Sf.useSetting(),
        A = (0, e_.O7)(d, tX(t) ? t : null),
        I = (0, c.bG)([N.Ay], () => N.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: T } = (0, em.A)(d, _),
        S = h?.type === e2.EMOJI ? h.subCategory : ez.tm.NONE;
    if (
        (a.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    tX(t) &&
                    S !== ez.tm.NONE &&
                    (S === ez.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eZ.i.GUILD &&
                        (0, k.mz)(t.guildId, T[0].id),
                    null != E.source &&
                        (0, e_.yB)({
                            emoji: t,
                            subCategory: S,
                            position: h.columnIndex + 1,
                            newlyAddedHighlight: S === ez.tm.NEWLY_ADDED_EMOJI && P.isNewerThanLastSeen(d, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = tz.A.theme;
    if (tX(t)) {
        let e = null != t.id ? t$.Ay.getEmojiURL({ id: t.id, animated: p && t.animated, size: 28 }) : t.url;
        i =
            "" === e
                ? (0, s.jsx)(Y.E, {
                      variant: "text-md/normal",
                      className: tq.J_,
                      children: "surrogates" in t ? t.surrogates : null,
                  })
                : (0, s.jsx)("img", { alt: (0, eE.N)(t) ?? "", src: e, className: tq.Zg });
    } else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
        let e = n(619508),
            r = n(404828),
            a = n(600003),
            o = n(318121);
        i = I.has(t.guildId)
            ? (0, s.jsx)("img", { className: tq.Kk, src: (0, F.M)(C) ? a : o, alt: "" })
            : (0, s.jsx)("img", { className: tq.Kk, src: (0, F.M)(C) ? e : r, alt: "" });
    }
    let R =
        null != m ? (0, s.jsx)(eq.A, { className: tq.__invalid_guildIcon, guild: m, shouldAnimate: !g && f }) : null;
    r =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? I.has(t.guildId)
                ? ee.intl.string(ee.t["/K2RDH"])
                : ee.intl.string(ee.t.NZI2Zk)
            : (0, eE.N)(t);
    let O = ((e) => {
        let { inspectedEmoji: t, guild: n } = e,
            i = tX(t);
        return null != n && i ? ee.intl.format(ee.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: d, intention: _, guild: m });
    return (0, s.jsx)(tK.A, {
        className: o,
        graphicPrimary: i,
        graphicSecondary: R,
        titlePrimary: r,
        titleSecondary: O,
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
    t7 = n(400669),
    t5 = n(909536),
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
        d = (0, c.bG)([ni.A], () => !ni.A.isFetching() && !ni.A.hasFetchedAllSounds(), []),
        _ = (0, c.bG)([eu.A], () => eu.A.getChannel(o)),
        u =
            ((t = (0, c.bG)([ea.default], () => tp.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, c.bG)([ni.A], () => ni.A.getSoundsForGuild("0"))),
            (i = (0, c.yK)([q.A], () => q.A.getGuildIds())),
            (r = a.useMemo(() => ns.A.can(na.xB.USE_EXTERNAL_SOUNDS, _), [_])),
            a.useMemo(() => {
                let e = [];
                if (t && r) {
                    let t = i.flatMap((e) => ni.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eL().sampleSize(t, 4));
                } else if (_?.guild_id != null) {
                    let t = ni.A.getSoundsForGuild(_?.guild_id)?.filter((e) => e.available);
                    e.push(...eL().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eL().sampleSize(n ?? [], 4 - e.length)), e;
            }, [r, _?.guild_id, n, i, t]));
    return (a.useEffect(() => {
        (0, nn.E7)();
    }, [d]),
    0 === u.length)
        ? (0, s.jsx)(nt.y, {})
        : (0, s.jsx)("div", {
              className: no.q,
              children: u.map((e, t) =>
                  (0, s.jsx)(
                      nr.Ay,
                      {
                          suppressPlaySound: !0,
                          enableSecondaryActions: !0,
                          isSoundmoji: !0,
                          sound: e,
                          channel: _,
                          onSelectItem: (t) => l?.(e, !t.shiftKey),
                      },
                      t,
                  ),
              ),
          });
});
var nd = n(594061),
    n_ = n(771104),
    nu = n(990078),
    nc = n(442433),
    nE = n(147421),
    nh = n(723702),
    nm = n(140735),
    nf = n(194261),
    ng = n(881274);
let np = (e) => {
    let { src: t, alt: n, size: i, "aria-label": r, className: o } = e,
        d = a.useRef(null),
        _ = a.useRef(!1),
        u = _.current ? ng.S : ng.Y;
    return (0, s.jsx)("img", {
        className: l()(u, o),
        alt: n,
        src: t,
        ref: d,
        "aria-label": r,
        style: { backgroundSize: i, height: i, width: i },
        onLoad: _.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != d.current &&
                          ((_.current = !0), d.current.classList.remove(ng.Y), d.current.classList.add(ng.S));
                  });
              },
    });
};
var nA = n(297547);
let nI = eL().memoize(
        (e) =>
            `${e * ef.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(eQ.Ay.numNonDiversitySprites / ef.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nT = eL().memoize(
        (e) =>
            `${e * ef.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eQ.Ay.numDiversitySprites / ef.EmojiSprites.DiversityPerRow)}px`,
    ),
    nS = a.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: r, allowAnimatedEmoji: o, "aria-label": d, isLocked: _ } = e,
            u = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : t$.Ay.getEmojiURL({ id: t.id, animated: o && t.animated, size: ef.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(np, {
                              className: nA.N1,
                              "aria-label": d,
                              src: e,
                              size: i,
                              alt: (0, eE.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: l()(nA.xA, { [nA.N1]: _ }),
                    style: ((e, t, i) => {
                        let r, s, a;
                        if (!e.useSpriteSheet) return;
                        let o = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((r = n(983660)(`./spritesheet-${t}-${i}.png`)),
                              (s = nT(i)),
                              (a = ef.EmojiSprites.DiversityPerRow))
                            : ((r = n(883740)(`./spritesheet-emoji-${i}.png`)),
                              (s = nI(i)),
                              (a = ef.EmojiSprites.NonDiversityPerRow));
                        let l = (-o % a) * i,
                            d = -Math.floor(o / a) * i;
                        return {
                            backgroundImage: `url('${r}')`,
                            backgroundPosition: `${l}px ${d}px`,
                            backgroundSize: s,
                            height: i,
                            width: i,
                        };
                    })(t, r, i),
                    children: (0, s.jsx)(nm.A, { children: d }),
                });
            })();
        return (0, s.jsxs)(a.Fragment, {
            children: [
                u,
                _
                    ? (0, s.jsx)("div", {
                          className: nA.iD,
                          children: (0, s.jsx)(nf.X, { size: "xs", color: "currentColor", className: nA.fi }),
                      })
                    : null,
            ],
        });
    });
var nN = n(6376);
let nC = (e, t) => `${e}:${t}`,
    nR = a.forwardRef(function (e, t) {
        let n,
            {
                emoji: i,
                isFavorite: r,
                isLargeSize: a,
                isMediumSize: o,
                isInspected: d,
                isDisabled: _,
                showPulse: u,
                columnIndex: E,
                rowIndex: h,
                size: m,
                surrogateCodePoint: f,
                allowAnimatedEmoji: g,
                selectedItemClassName: p,
                inNitroLockedSection: A,
                ...I
            } = e,
            T = (0, c.bG)([q.A], () => (i.type === eZ.i.GUILD ? q.A.getGuild(i.guildId) : void 0), [i]);
        return (0, s.jsx)(t8.vN, {
            children: (0, s.jsx)("button", {
                ...I,
                className: l()(nN._X, { [nN.lG]: a, [nN.Lh]: o, [nN.Bx]: d, [p ?? ""]: d, [nN.TV]: u }),
                "data-type": x.g.EMOJI,
                "data-id": i.id,
                "data-name": i.name,
                "data-surrogates": "surrogates" in i ? i.surrogates : null,
                "data-animated": i.animated ? "true" : null,
                ref: t,
                children: (0, s.jsx)(nS, {
                    "aria-label":
                        ((n = (0, eE.N)(i)),
                        (T?.name != null &&
                            (n = ee.intl.formatToPlainString(ee.t["nXv4/B"], { names: n, guildName: T.name })),
                        r)
                            ? ee.intl.formatToPlainString(ee.t["9FI9Z0"], { names: n })
                            : n),
                    columnIndex: E,
                    rowIndex: h,
                    emoji: i,
                    size: m,
                    surrogateCodePoint: f,
                    allowAnimatedEmoji: g,
                    isLocked: _ && !A,
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
            onInspect: d,
            onSelect: _,
            isScrolling: u,
            isUsingKeyboardNavigation: E,
            showEmojiFavoriteTooltip: h,
            surrogateCodePoint: m,
            selectedItemClassName: f,
            getEmojiItemProps: g,
            isMediumSize: p,
            isLargeSize: A,
            pulseItemKey: I,
            allowAnimatedEmoji: T,
            setPulseItemKey: S,
            messageId: C,
            isBurstReaction: R,
            rowPosition: O,
            inNitroLockedSection: y,
        } = e,
        [v, D] = a.useState(""),
        L = (0, c.bG)([eI.A], () => eI.A.useReducedMotion),
        b = (0, c.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(l), [l]),
        w = a.useRef(null),
        { emoji: P, size: k, isDisabled: M, columnIndex: U } = t,
        x = () => {
            u.current || E.current || d(t);
        },
        { ref: G, tabIndex: V, onFocus: F, ...B } = g(U, o) ?? {},
        H =
            v !== nC(U, o)
                ? (0, s.jsx)(nR, {
                      ref: G,
                      emoji: P,
                      isFavorite: b.isFavoriteEmojiWithoutFetchingLatest(P),
                      isLargeSize: A,
                      isMediumSize: p,
                      isInspected: r,
                      isDisabled: M,
                      showPulse: I === i,
                      allowAnimatedEmoji: T,
                      onFocus: F ?? x,
                      onMouseMove: x,
                      onClick: (e) => {
                          if (
                              null != w.current &&
                              null != O &&
                              null != C &&
                              !e.shiftKey &&
                              null != P.name &&
                              R &&
                              !L &&
                              T
                          ) {
                              let e = null == P.id ? eQ.Ay.convertNameToSurrogate(P.name) : P.name,
                                  t = w.current.getBoundingClientRect();
                              (t.x = O.x + (U + 1) * k), D(nC(U, o)), (0, nE.h)(C, e, P.id, t);
                          }
                          ((e) => {
                              if ((e.stopPropagation(), u.current || E.current)) return;
                              let n = e.altKey;
                              n && !N.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(P) && S(i),
                                  (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP),
                                  _(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: (e) => {
                          (0, nc.L3)(e, async () => {
                              let { default: e } = await n.e("23751").then(n.bind(n, 233503));
                              return (t) => (0, s.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: V,
                      columnIndex: U,
                      rowIndex: o,
                      size: k,
                      surrogateCodePoint: m,
                      selectedItemClassName: f,
                      inNitroLockedSection: y,
                  })
                : null;
    return (0, a.createElement)(
        "li",
        { ...B, key: i, ref: w },
        h
            ? (0, s.jsx)(nu.m, {
                  text: ee.intl.formatToPlainString(ee.t.glqNsf, { key: (0, nh.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let ny = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: r,
            onSelectSoundmoji: o,
            onInspect: d,
            surrogateCodePoint: _,
            getEmojiItemProps: u,
            getEmojiRowProps: c,
            isScrolling: E,
            isUsingKeyboardNavigation: h,
            rowIndex: m,
            allowAnimatedEmoji: f,
            showEmojiFavoriteTooltip: g,
            channelGuildId: p,
            category: A,
            selectedItemClassName: I,
            channelId: T,
            messageId: S,
            isBurstReaction: N,
            inNitroLockedSection: C,
            handleScrollUpOnSectionCollapse: R,
        } = e,
        O = n(619508),
        y = n(404828),
        v = n(600003),
        D = n(318121),
        L = n(443336),
        b = n(258901),
        w = n(135974),
        k = n(8013),
        U = (0, K.Ay)(),
        x = M.Om.getState(),
        [G, V] = a.useState(x.inspectedExpressionPosition),
        [B, H] = (0, t9.A)(null, 300),
        j = a.useRef(null);
    a.useEffect(
        () =>
            M.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => V(e),
            ),
        [],
    ),
        a.useEffect(() => {
            nd.bW.loadIfNecessary();
        }, []);
    let W = i === ez.as.LARGE,
        z = i === ez.as.MEDIUM,
        $ = (e) => {
            let t = `${e.rowIndex}c${e.columnIndex}`;
            switch (e.type) {
                case e2.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: i } = e,
                        o = G.rowIndex === n && G.columnIndex === i,
                        _ = e.sectionCollapsedToThreeRows
                            ? o
                                ? (0, F.M)(U)
                                    ? b
                                    : k
                                : (0, F.M)(U)
                                  ? O
                                  : y
                            : o
                              ? (0, F.M)(U)
                                  ? L
                                  : w
                              : (0, F.M)(U)
                                ? v
                                : D,
                        c = ee.intl.string(e.sectionCollapsedToThreeRows ? ee.t.NZI2Zk : ee.t["/K2RDH"]);
                    return (function () {
                        let {
                                onMouseEnter: n,
                                onMouseLeave: i,
                                handleSelect: r,
                                icon: o,
                                ariaLabel: _,
                                shouldShowRoundHighlight: c,
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            { visibleRowIndex: f, columnIndex: g } = e,
                            { ref: p, tabIndex: A, onFocus: T, ...S } = u(g, m) ?? {},
                            N = G.rowIndex === f && G.columnIndex === g,
                            C = () => {
                                E.current || h.current || d(e);
                            };
                        return (0, a.createElement)(
                            "li",
                            { ...S, key: t },
                            (0, s.jsx)(t8.vN, {
                                children: (0, s.jsx)("button", {
                                    "aria-label": _,
                                    ref: p,
                                    className: l()(nN._X, {
                                        [nN.lG]: W,
                                        [nN.Lh]: z,
                                        [nN.Bx]: N && !c,
                                        [I ?? ""]: N,
                                        [nN.TV]: B === t,
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
                                E.current ||
                                    h.current ||
                                    (r(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                    (0, ne.G)(e.guildId),
                                    e.sectionCollapsedToThreeRows || R(),
                                    eo.default.track(Q.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        icon: (0, s.jsx)("img", { className: nN.Kk, src: _, alt: "" }),
                        ariaLabel: c,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case e2.EMOJI: {
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        a = G.rowIndex === i && G.columnIndex === n;
                    return (0, s.jsx)(
                        nO,
                        {
                            rowIndex: m,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: a,
                            isScrolling: E,
                            isUsingKeyboardNavigation: h,
                            surrogateCodePoint: _,
                            allowAnimatedEmoji: f,
                            selectedItemClassName: I,
                            onSelect: r,
                            onInspect: d,
                            channelGuildId: p,
                            getEmojiItemProps: u,
                            isMediumSize: z,
                            isLargeSize: W,
                            pulseItemKey: B,
                            setPulseItemKey: H,
                            showEmojiFavoriteTooltip: g,
                            messageId: S,
                            isBurstReaction: N,
                            rowPosition: j?.current?.getBoundingClientRect(),
                            inNitroLockedSection: C,
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
                ...c(m),
                className: l()(nN.ND, { [nN.HO]: W, [nN.X$]: z }),
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
    let X = t.filter(
            (e) =>
                e.subCategory === ez.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eZ.i.GUILD &&
                    !P.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        Z = t.filter(
            (e) =>
                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eZ.i.GUILD &&
                P.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === Z.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nN.Ng,
              children: [
                  (0, s.jsx)("div", { className: l()(nN.V6, { [nN.$3]: 0 === X.length }), children: q(X) }),
                  (0, s.jsxs)("div", {
                      className: nN.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: l()(nN.eE, { [nN.eM]: 1 === Z.length, [nN.Wk]: X.length > 0 }),
                              children: q(Z),
                          }),
                          (0, s.jsxs)("div", {
                              className: l()(nN.lD, { [nN.EI]: W, [nN.qU]: z, [nN.Wk]: X.length > 0 }),
                              children: [
                                  (0, s.jsx)(n_.A, { foreground: nN.rI }),
                                  (0, s.jsx)(Y.E, {
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
var nv = n(98090);
let nD = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nL = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nb = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nw = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nP = (0, ed.xI)(h.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nk = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nM = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nU = a.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: r,
                emojiListRef: o,
                emojiSize: d,
                onEmojiSelect: _,
                onSelectSoundmoji: u,
                setUpsellConfigs: E,
                sectionDescriptors: h,
                rowCountBySection: m,
                collapsedSections: f,
                setCollapsedSections: g,
                getEmojiItemProps: I,
                getEmojiRowProps: S,
                rowCount: N,
                isUsingKeyboardNavigation: C,
                channelGuildId: R,
                channelId: O,
                messageId: y,
                isBurstReaction: v,
                listHeaderClassName: D,
            } = e,
            L = a.useRef(!1),
            b = M.Om.useStore((e) => e.activeCategoryIndex),
            w = (0, U.RQ)((e) => e.searchQuery),
            P = er.Sf.useSetting(),
            k = (0, c.bG)([ea.default], () => ea.default.getCurrentUser()),
            V = (0, el.ki)(k),
            F = (0, t5.St)("emoji_picker_floating_upsell"),
            { location: H } = (0, p.p)(),
            { analyticsLocations: j } = (0, T.Ay)(),
            [W, Y] = a.useState(0),
            [K, z] = a.useState(!1),
            {
                listPadding: $,
                renderRow: q,
                renderSection: X,
                renderSectionHeader: Z,
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
                        onSelectSoundmoji: d,
                        searchQuery: _,
                        sectionDescriptors: u,
                        setCollapsedSections: E,
                        getEmojiItemProps: h,
                        getEmojiRowProps: m,
                        isScrolling: f,
                        isUsingKeyboardNavigation: g,
                        allowAnimatedEmoji: A,
                        channelGuildId: I,
                        channelId: T,
                        messageId: S,
                        isBurstReaction: N,
                        listHeaderClassName: C,
                        activeSectionIndex: R,
                        emojiListRef: O,
                    } = e,
                    y = (0, p.p)(),
                    v = a.useRef(Q.An1),
                    D = a.useMemo(() => ("" !== n ? ty.A.convert.toCodePoint(n) : ""), [n]),
                    L = a.useCallback(
                        (e) => {
                            let t = u[e],
                                n = u[e + 1];
                            return e >= u.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
                        },
                        [u],
                    ),
                    b = a.useCallback(
                        (e) => {
                            if (e >= u.length - 1) return !1;
                            let t = u[e],
                                n = u[e + 1];
                            return !t.isNitroLocked && n.isNitroLocked;
                        },
                        [u],
                    ),
                    w = a.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                r = t.has(e);
                            r ? i.delete(e) : i.add(e),
                                null != n &&
                                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: y.location,
                                        tab: eg.kx.EMOJI,
                                        collapsed: !r,
                                        guild_id: n.id,
                                    }),
                                e === ez.R2.SOUNDMOJI &&
                                    eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !r }),
                                E(i);
                        },
                        [y, t, E],
                    ),
                    P = a.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === e2.SOUNDMOJI ? null : e.type === e2.EMOJI ? (0, eE.N)(e.emoji) : e.name;
                        v.current !== Q.An1 && window.cancelAnimationFrame(v.current),
                            (v.current = window.requestAnimationFrame(() => {
                                M.Om.setInspectedExpressionPosition(t, n, x.t.MOUSE_EVENT),
                                    M.Om.setSearchPlaceholder(i),
                                    (v.current = Q.An1);
                            }));
                    }, []),
                    k = (0, c.bG)([ei.HP], () => ei.HP.hasHotspot(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                    G = a.useMemo(
                        () =>
                            eL().memoize((e, t) => {
                                let n = i[e],
                                    a = u[t.sectionIndex];
                                return (0, s.jsx)(
                                    ny,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: r,
                                        surrogateCodePoint: D,
                                        onInspect: P,
                                        onSelect: o,
                                        onSelectSoundmoji: d,
                                        getEmojiItemProps: h,
                                        getEmojiRowProps: m,
                                        isScrolling: f,
                                        isUsingKeyboardNavigation: g,
                                        rowIndex: e,
                                        allowAnimatedEmoji: A,
                                        showEmojiFavoriteTooltip: k,
                                        channelGuildId: I,
                                        category: a.sectionId,
                                        selectedItemClassName: nv.__invalid_selectedItem,
                                        channelId: T,
                                        messageId: S,
                                        isBurstReaction: N,
                                        inNitroLockedSection: a.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: () => {
                                            O.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, u, r, D, P, o, d, h, m, f, g, A, k, I, T, S, N, O],
                    );
                a.useEffect(() => () => G.cache?.clear?.(), [G]);
                let V = a.useMemo(
                        () =>
                            eL().memoize((e) => {
                                let n = u[e];
                                if (null == n) return;
                                let { guild: i, categoryId: r, type: a, sectionId: o } = n;
                                if (a === ez.s.SEARCH_RESULTS) return;
                                let d =
                                        a === ez.s.GUILD
                                            ? null != i
                                                ? (0, s.jsx)(eq.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != r
                                              ? (0, s.jsx)(e$, { categoryId: r, height: 16, width: 16, size: "custom" })
                                              : null,
                                    _ = i?.name;
                                null != r && (_ = (0, e_.Nu)(r, i?.name));
                                let c = R === e,
                                    E = n.isNitroLocked,
                                    h = E && !c,
                                    m = E && c,
                                    f =
                                        a === ez.s.SOUNDMOJI
                                            ? (0, s.jsx)(B.D, {
                                                  className: nv.f3,
                                                  onClick: () => {
                                                      (0, U.U)(eg.kx.SOUNDBOARD),
                                                          eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: ee.intl.string(ee.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t2.A,
                                    {
                                        className: l()(nv.wx, C, { [nv.RA]: h, [nv.sp]: m }),
                                        icon: d,
                                        isCollapsed: t.has(o),
                                        onClick: () => w(o, i),
                                        trailing: f,
                                        children: _,
                                    },
                                    o,
                                );
                            }),
                        [u, t, w, C, R],
                    ),
                    F = (0, eJ.k0)(),
                    H = a.useCallback(
                        (e, n) => {
                            let i = u[e],
                                r = b(e),
                                a = L(e);
                            return (0, s.jsx)(
                                "div",
                                {
                                    className: l()(nv.Wy, {
                                        [nv.YD]: e === u.length - 1,
                                        [nv.jl]: t.has(i.sectionId),
                                        [nv.cW]: i.isNitroLocked,
                                        [nv.T5]: r || a,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, u, b, L],
                    ),
                    j = a.useCallback(
                        (e) =>
                            b(e)
                                ? F
                                    ? (0, s.jsx)(t4.ap, {})
                                    : (0, s.jsx)(t4.Ay, {})
                                : L(e)
                                  ? (0, s.jsx)("div", { className: nv.pQ })
                                  : null,
                        [b, L, F],
                    ),
                    W = a.useCallback((e) => (b(e) ? 41 : 33 * !!L(e)), [b, L]),
                    Y = a.useCallback(
                        (e) => (e === u.length - 1 || t.has(u[e]?.sectionId) || b(e) || L(e) ? 0 : nk),
                        [t, u, b, L],
                    );
                return {
                    listPadding: a.useMemo(() => ["" !== _ ? nw : nD, nL, nb, 0], [_]),
                    renderRow: G,
                    renderSection: H,
                    renderSectionHeader: V,
                    renderSectionFooter: j,
                    sectionMarginBottom: Y,
                    sectionHeaderHeight: a.useCallback((e) => (u[e].type === ez.s.SEARCH_RESULTS ? 0 : nP), [u]),
                    sectionFooterHeight: W,
                };
            })({
                collapsedSections: f,
                diversitySurrogate: i,
                emojiGrid: r,
                emojiSize: d,
                onEmojiSelect: _,
                onSelectSoundmoji: u,
                searchQuery: w,
                sectionDescriptors: h,
                setCollapsedSections: g,
                getEmojiItemProps: I,
                getEmojiRowProps: S,
                isScrolling: L,
                isUsingKeyboardNavigation: C,
                allowAnimatedEmoji: P,
                channelGuildId: R,
                channelId: O,
                messageId: y,
                isBurstReaction: v,
                listHeaderClassName: D,
                activeSectionIndex: W,
                emojiListRef: o,
            }),
            ed = (0, G.Fk)({
                activeCategoryIndex: b,
                isScrolling: L,
                listRef: o,
                onActiveCategoryIndexChange: (e) => {
                    Y(e), "" === w && M.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: w,
                disableForSearch: !1,
            });
        (0, G.FV)({ searchQuery: w, activeCategoryIndex: b, listRef: o });
        let eu = a.useCallback(
                (e) => {
                    ed(e),
                        nx({ emojiListRef: o, sectionDescriptors: h, scrollTop: e, searchQuery: w, setShowUpsell: z });
                },
                [ed, o, h, w, z],
            ),
            ec = h.length > 0;
        return (
            a.useEffect(() => {
                K &&
                    eo.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: eO.e.EMOJI_PICKER_FLOATING_UPSELL,
                        location: H,
                        location_stack: j,
                    });
            }, [H, j, K]),
            a.useEffect(() => {
                "" !== w && z(!1);
            }, [w]),
            (0, s.jsxs)("div", {
                className: nv.AD,
                children: [
                    ec
                        ? (0, s.jsx)(t0.A, {
                              role: "none presentation",
                              className: nv.p_,
                              listPadding: $,
                              onScroll: eu,
                              renderRow: q,
                              renderSection: X,
                              renderSectionHeader: Z,
                              renderSectionFooter: J,
                              rowCount: N,
                              rowCountBySection: m,
                              rowHeight: d + 2 * nM,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: et,
                              sectionFooterHeight: es,
                              stickyHeaders: !0,
                              ref: o,
                          })
                        : (0, s.jsx)(tJ.A, { message: ee.intl.string(ee.t.IxxiKF), className: nv.BZ }),
                    V || tQ.Fr
                        ? null
                        : (0, s.jsx)(t6.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, tp.Dd)(eO.PremiumTypes.TIER_2)),
                                  ee.intl.format(ee.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          E({ type: e6.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t3.qD)()), (0, tp.LE)(n, eO.pe.TIER_2) ?? ee.intl.string(ee.t.BmJkbd)),
                              buttonAnalyticsObject: { section: Q.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: F
                                  ? (0, s.jsx)(t7.l, {
                                        size: "sm",
                                        className: nv.ij,
                                        location: A.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                                    })
                                  : void 0,
                          }),
                ],
            })
        );
    }),
    nx = eL().throttle(
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
    nV = n(349288),
    nF = n(323082),
    nB = n(404374),
    nH = n(780964),
    nj = n(858897),
    nW = n(166403),
    nY = n(542863);
let nK = "premiumRetentionEmojiPickerNotice",
    nz = nG.w.get(nK),
    n$ = (e) => {
        let { closePopout: t, channel: n } = e,
            [i, r] = a.useState(!1),
            { subscription: o, hasFetchedSubscriptions: l } = (0, c.cf)([nW.A], () => ({
                subscription: nW.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nW.A.hasFetchedSubscriptions(),
            }));
        if (
            (a.useEffect(() => {
                l || (0, nF.hP)();
            }, [l]),
            null == o || !(0, tp.PK)(o.status) || i)
        )
            return null;
        let d = o.status === Q.Dmq.PAST_DUE ? (0, tp.ji)(o).expiresDate : R()(o.currentPeriodStart).add(eO.ph),
            _ = `${o.id}:${d.toISOString()}`;
        if (nz === _) return null;
        let u =
            tp.Ay.getPremiumType(o.planId) === eO.PremiumTypes.TIER_0
                ? nB.k0.PREMIUM_TIER_0
                : tp.Ay.getPremiumType(o.planId) === eO.PremiumTypes.TIER_1
                  ? nB.k0.PREMIUM_TIER_1
                  : nB.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)("div", {
            className: nY.g$,
            children: [
                (0, s.jsx)(eA.t, { size: "md", className: nY.lu, color: u }),
                (0, s.jsxs)("div", {
                    className: nY.Xn,
                    children: [
                        (0, s.jsx)(Y.E, {
                            variant: "text-xs/normal",
                            children: ee.intl.format(ee.t.bTMjiO, {
                                planName: tp.Ay.getTierDisplayNameByPlanId(o.planId),
                                endsAt: d.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nV.Anchor, {
                                onClick: () => {
                                    (0, e_.xf)(n), t(), (0, nj.openUserSettings)(nH.X.NITRO_PANEL);
                                },
                                children: ee.intl.string(ee.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(B.D, {
                    onClick: () => {
                        nG.w.set(nK, _), (nz = _), r(!0);
                    },
                    children: (0, s.jsx)(H.P, { size: "md", color: "currentColor", className: nY.YF }),
                }),
            ],
        });
    };
var nq = n(148361);
let nX = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    nZ = (0, ed.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    nQ = (e) => e.stopPropagation(),
    nJ = (e, t) => {
        M.Om.setInspectedExpressionPosition(e, t, x.t.GRID_NAVIGATOR_EVENT);
    },
    n0 = _()(e_.bo, 200),
    n1 = _()(e_.Wi, 200),
    n2 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n3 = a.memo(
        a.forwardRef(function (e, t) {
            let n,
                i,
                {
                    pickerIntention: r,
                    channel: o,
                    guildId: d,
                    closePopout: _,
                    emojiSize: h = ez.as.MEDIUM,
                    hasTabWrapper: C = !1,
                    onSelectEmoji: R,
                    onSelectSoundmoji: O,
                    containerWidth: y,
                    onNavigateAway: v,
                    persistSearch: D,
                    className: L,
                    headerClassName: b,
                    analyticsOverride: w = n2,
                    searchProps: V = {},
                    wrapper: F,
                    shouldHidePickerActions: B = !1,
                    messageId: H,
                    renderHeader: j,
                    listHeaderClassName: W,
                    categoryListClassName: Y,
                    shouldShowSoundmojiInEmojiPicker: K = !1,
                    showOnlyUnicode: z = !1,
                    showAddEmojiButton: $,
                } = e,
                { onFocus: X, onKeyDown: Z, autoFocus: J = !0, accessory: et } = V,
                ed = (0, c.bG)([es.Ay], () => (null != d ? es.Ay.getDefaultChannel(d) : null), [d]),
                [eu, ec] = a.useState(null),
                eg = a.useRef(""),
                eA = (0, U.RQ)((e) => e.searchQuery),
                eI = a.useRef(null),
                eT = a.useRef(null),
                eS = a.useRef(null);
            null == o && null != ed && (o = ed);
            let eN = o?.getGuildId() ?? d ?? null,
                [eC, eR] = a.useState(!1),
                eO = ea.default.getCurrentUser(),
                ey = (0, el.ki)(eO);
            a.useImperativeHandle(t, () => ({ onPickerOpen: e7 }));
            let { location: eD } = (0, p.p)(),
                { page: eb, section: ew, object: eP, openPopoutType: ek, popoutLocation: eM } = w,
                eU = a.useMemo(() => ({ ...eD, section: ew ?? Q.JJy.EMOJI_PICKER_POPOUT }), [eD, ew]),
                { analyticsLocations: ex } = (0, T.Ay)(A.A.EMOJI_PICKER),
                { diversitySurrogate: eG } = (0, c.cf)([N.Ay], () => ({ diversitySurrogate: N.Ay.diversitySurrogate })),
                eV = (0, e_.sL)(eA, o, r, z),
                eF = null == eV ? 0 : eV.locked.length + eV.unlocked.length,
                eB = er.iM.useSetting(),
                eH = a.useMemo(() => new Set(eB), [eB]),
                ej = a.useCallback((e) => {
                    er.iM.updateSetting(Array.from(e));
                }, []),
                eW = (0, G.oV)({ gridWrapperRef: eI, containerWidth: y, listPaddingLeft: nZ, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eY,
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
                            emojiSpriteSize: d,
                            shouldShowSoundmojiInEmojiPicker: _,
                            showOnlyUnicode: u,
                        } = e,
                        E = (0, c.bG)([N.Ay], () => N.Ay.categories),
                        h = a.useMemo(() => (u ? eQ.Ay.getCategories() : E), [E, u]),
                        m = (0, c.bG)([q.A], () => q.A.getGuild(t?.getGuildId()), [t]),
                        f = t?.getGuildId() ?? n,
                        g = (0, c.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(f), [f]),
                        p = (0, e_.XI)(f),
                        A = (0, e_.Fj)(f),
                        I = (0, e_.QZ)(f),
                        { topEmojis: T, newlyAddedEmojis: S } = (0, em.A)(f, r),
                        C = (0, c.yK)([e1.Ay], () => e1.Ay.getFlattenedGuildIds(), []),
                        R = (0, c.bG)([N.Ay], () => N.Ay.expandedSectionsByGuildIds),
                        O = (0, c.bG)([ea.default], () => ea.default.getCurrentUser()),
                        y = (0, el.ki)(O),
                        v = (0, eJ.k0)(),
                        D = g.getGroupedCustomEmoji(),
                        L = (0, e0.Ym)({ location: "useEmojiGrid" });
                    return a.useMemo(() => {
                        let e = [],
                            n = [],
                            a = [],
                            u = [],
                            c = 0,
                            E = 0;
                        if (null != g && null != o) {
                            let f = Math.floor(o / (d + 2 * l)),
                                g = 3 * f,
                                N = (s, o) => {
                                    let l = new Map(),
                                        _ = i.has(o.sectionId),
                                        [h, m] = eL().partition(s, (e) => {
                                            let n = eE.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: r });
                                            return l.set(e, n), !n;
                                        }),
                                        p = h.concat(m),
                                        A = o.guild,
                                        I = p.length > g && null != A && o.isNitroLocked,
                                        N = I && !R.has(A.id);
                                    N && p.splice(g - 1);
                                    let C = Math.ceil((I ? p.length + 1 : p.length) / f),
                                        O = [];
                                    for (let e = 0; e < C; e++) {
                                        let t = e * f,
                                            n = t + f,
                                            i = p
                                                .slice(t, n)
                                                .map((e, t) => ({
                                                    type: 0,
                                                    emoji: e,
                                                    size: d,
                                                    isDisabled: l.get(e),
                                                    rowIndex: E,
                                                    columnIndex: t,
                                                    visibleRowIndex: c,
                                                    category: o.type,
                                                    subCategory:
                                                        o.sectionId === ez.s.TOP_GUILD_EMOJI
                                                            ? (0, e_.DA)(T, S, e.id ?? e.uniqueName ?? e.name)
                                                            : ez.tm.NONE,
                                                }));
                                        if ((O.push(i), !_)) {
                                            if (I && e === C - 1) {
                                                let t = O[e];
                                                t.push({
                                                    type: 1,
                                                    guildId: A.id,
                                                    name: ee.intl.string(ee.t.NZI2Zk),
                                                    size: d,
                                                    rowIndex: e,
                                                    columnIndex: t.length,
                                                    visibleRowIndex: c,
                                                    sectionCollapsedToThreeRows: N,
                                                });
                                            }
                                            u.push(i.length), a.push(i), c++;
                                        }
                                        E++;
                                    }
                                    let y = { ...o, count: s.length };
                                    n.push(y), e.push(_ ? 0 : C);
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
                                            isNitroLocked: !y,
                                        });
                            else {
                                if (L && _) {
                                    let t = [{ type: 2, rowIndex: E, columnIndex: 0, visibleRowIndex: c }];
                                    n.push({
                                        type: ez.s.SOUNDMOJI,
                                        categoryId: ez.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let r = i.has(ez.R2.SOUNDMOJI);
                                    !r && (u.push(t.length), a.push(t), c++), e.push(+!r), E++;
                                }
                                for (let e of h)
                                    if (e === ez.R2.CUSTOM) {
                                        let n = (n) => {
                                            let i = D.get(n);
                                            if (null == i) return;
                                            let s = i.filter(
                                                (e) =>
                                                    !e3.includes(
                                                        eE.Ay.getEmojiUnavailableReason({
                                                            emoji: e,
                                                            channel: t ?? es.Ay.getDefaultChannel(n),
                                                            intention: r,
                                                        }),
                                                    ),
                                            );
                                            if (0 === s.length) return;
                                            let a = q.A.getGuild(n),
                                                o =
                                                    v ||
                                                    (!y &&
                                                        eE.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: r,
                                                        }));
                                            N(s, {
                                                categoryId: e,
                                                guild: a,
                                                type: ez.s.GUILD,
                                                sectionId: null != a ? a.id : (0, eX.A)(),
                                                count: s.length,
                                                isNitroLocked: o,
                                            });
                                        };
                                        if ((null != m && n(m.id), (0, ef.isExternalEmojiAllowedForIntention)(r)))
                                            for (let e of C) (null == m || m.id !== e) && n(e);
                                    } else if (e === ez.R2.TOP_GUILD_EMOJI) {
                                        if (null != m) {
                                            let { allEmojis: t } = (0, eh.W)({ topEmojis: T, newlyAddedEmojis: S });
                                            t.length > 0 &&
                                                N(t, {
                                                    categoryId: e,
                                                    guild: q.A.getGuild(m.id),
                                                    type: ez.s.TOP_GUILD_EMOJI,
                                                    sectionId: ez.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === ez.R2.RECENT) {
                                        let n = (r === ef.EmojiIntention.REACTION ? I : A).filter(
                                            (e) => !eE.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                                        );
                                        N(n, {
                                            categoryId: e,
                                            type: ez.s.RECENT,
                                            sectionId: ez.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === ez.R2.FAVORITES) {
                                        let n = p.filter(
                                            (e) => !eE.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
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
                        return { columnCounts: u, emojiGrid: a, rowCountBySection: e, sectionDescriptors: n };
                    }, [g, o, d, l, s, i, D, R, t, r, T, S, y, h, m, C, I, A, p, v, L, _]);
                })({
                    gridWidth: eW,
                    fallbackGuildId: eN,
                    channel: o,
                    pickerIntention: r,
                    emojiSearchResults: eV,
                    collapsedSections: eH,
                    emojiPaddingHorizontal: nX,
                    emojiSpriteSize: h,
                    shouldShowSoundmojiInEmojiPicker: K,
                    showOnlyUnicode: z,
                }),
                { newlyAddedEmojis: e4 } = (0, em.A)(eN, r);
            (n = a.useRef({ intention: r, isBurstReaction: eC, analyticsObject: eP })),
                a.useEffect(() => {
                    n.current.intention === ef.EmojiIntention.REACTION && ep(n.current);
                }, []);
            let e7 = a.useCallback(() => {
                    let e = e4.length > 0 ? e4[0].id : null;
                    (0, k.uV)(eN, e), ep({ intention: r, isBurstReaction: eC, analyticsObject: eP });
                }, [e4, eN, r, eC, eP]),
                e5 = ((e) => {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: i,
                            onSelectEmoji: r,
                            setUpsellConfigs: s,
                            emojiSelectAnalytics: o,
                            trackEmojiFavorited: l,
                        } = e,
                        d = (0, c.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                    return a.useCallback(
                        (e, i) => {
                            if (0 === e.type) {
                                let { emoji: a } = e;
                                if (null == a) return;
                                let _ = eE.Ay.getEmojiUnavailableReason({ emoji: a, channel: n, intention: t });
                                if (i.toggleFavorite)
                                    return void (d.isFavoriteEmojiWithoutFetchingLatest(a) || null != _
                                        ? (0, f.Sw)(a)
                                        : (l?.(e), (0, f.V4)(a)));
                                if (_ !== ef.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                    if (_ === ef.EmojiDisabledReasons.PREMIUM_LOCKED)
                                        return void s({ type: 0, emojiDescriptor: e });
                                    if (_ === ef.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && a.type === eZ.i.GUILD)
                                        return void s({ type: 1, guildId: a.guildId, emojiId: a.id });
                                    _ !== ef.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                        (o?.(e), r({ emoji: a, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                                }
                            }
                        },
                        [n, t, r, s, d, o, l],
                    );
                })({
                    pickerIntention: r,
                    selectedChannel: o,
                    fallbackGuildId: eN,
                    closePopout: _,
                    onSelectEmoji: R,
                    setUpsellConfigs: ec,
                    emojiSelectAnalytics: (e) => {
                        "" !== eA
                            ? (0, e_.Wf)({
                                  emoji: e.emoji,
                                  location: { ...eU, object: Q.ZSU.EMOJI },
                                  searchQuery: eA,
                                  intention: r,
                                  messageId: H,
                              })
                            : (0, e_._7)({
                                  emoji: e.emoji,
                                  location: { ...eU, object: eP ?? Q.ZSU.EMOJI, ...(null != eb && { page: eb }) },
                                  pickerIntention: r,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                      P.isNewerThanLastSeen(eN, e.emoji.id),
                                  isBurstReaction: eC,
                                  messageId: H,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, e_.C5)({ emoji: e.emoji, location: { ...eU, object: Q.ZSU.EMOJI } });
                    },
                }),
                e8 = a.useCallback(() => {
                    _(), v?.();
                }, [_, v]),
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
                            isBurstReaction: d,
                        } = e,
                        _ = (0, c.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(l), [l]),
                        E = a.useCallback(
                            (e, i) => {
                                if (e.type === e2.EMOJI) {
                                    if (null != e.emoji && i.altKey)
                                        return void (_.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, f.Sw)(e.emoji)
                                            : ((0, e_.C5)({ emoji: e.emoji, location: { ...t, object: Q.ZSU.EMOJI } }),
                                              (0, f.V4)(e.emoji)));
                                    let s = {
                                        page: null != l ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                        section: Q.JJy.EMOJI_PICKER_POPOUT,
                                        object: Q.ZSU.EMOJI,
                                    };
                                    d &&
                                        (s = {
                                            page: null != l ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                            section: Q.JJy.EMOJI_PICKER_POPOUT,
                                            object: Q.ZSU.EMOJI,
                                        }),
                                        (0, e_._7)({
                                            emoji: e.emoji,
                                            location: s,
                                            pickerIntention: n,
                                            category: e.category,
                                            subCategory: e.subCategory,
                                            newlyAddedHighlight:
                                                e.subCategory === ez.tm.NEWLY_ADDED_EMOJI &&
                                                P.isNewerThanLastSeen(l, e.emoji.id),
                                        }),
                                        r({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: d });
                                }
                            },
                            [r, l, n, _, t, d],
                        ),
                        {
                            gridDispatch: h,
                            getItemProps: m,
                            getRowProps: g,
                            gridContainerProps: p,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        } = (0, G.Ff)({
                            columnCounts: i,
                            gridNavigatorId: ez.lq,
                            itemGrid: s,
                            itemList: o,
                            onGridNavigatorItemSelect: E,
                            onGridNavigatorPositionChange: nJ,
                        });
                    return (
                        a.useEffect(
                            () =>
                                M.Om.subscribe(
                                    (e) => e.inspectedExpressionPosition,
                                    (e) => {
                                        if (null == e) return;
                                        let { columnIndex: t, rowIndex: n, source: i } = e;
                                        i !== x.t.GRID_NAVIGATOR_EVENT &&
                                            h({ type: u.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [h],
                        ),
                        {
                            getItemProps: m,
                            getRowProps: g,
                            gridContainerProps: p,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        }
                    );
                })({
                    pickerIntention: r,
                    analyticsLocation: eU,
                    columnCounts: eq,
                    onSelectEmoji: R,
                    emojiGrid: e$,
                    emojiList: eT,
                    channelGuildId: eN,
                    isBurstReaction: eC,
                });
            ((e, t) => {
                let [n, i] = a.useState(null);
                a.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), i(null));
                }, [t, n]),
                    a.useEffect(() => {
                        i(M.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(y, eT),
                a.useLayoutEffect(() => {
                    J && eS.current?.focus();
                }, [y, eG, eS, J]),
                a.useEffect(() => {
                    D || (0, U.Ri)("");
                }, [D]),
                a.useEffect(
                    () => (
                        eo.default.track(Q.HAw.OPEN_POPOUT, {
                            type: ek ?? "Emoji Picker",
                            guild_id: eN,
                            location: eM,
                            ...(0, I.dI)(o),
                        }),
                        M.Om.resetStoreState
                    ),
                    [ek, eN, eM, o],
                ),
                a.useEffect(() => () => (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                a.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = M.Om.getState().inspectedExpressionPosition;
                    e$[t]?.[e] == null && 0 !== e && M.Om.setInspectedExpressionPosition(0, 0);
                }, [e$]),
                a.useEffect(() => {
                    "" === eg.current && "" !== eA && (0, e_.EG)(eU, r),
                        0 === eF && "" !== eA
                            ? n0(eU, eA)
                            : "" !== eA && eg.current !== eA && n1(eF, eV?.locked.length ?? 0, eU, eA, r),
                        (eg.current = eA);
                }, [eA, eU, eF, eV, r]);
            let tr = F ?? (C ? "div" : m.l),
                ts = null != eW;
            eu?.type === e6.PREMIUM
                ? (i = (0, s.jsx)(nq.default, {
                      onLearnMore: e8,
                      emojiDescriptor: eu.emojiDescriptor,
                      pickerIntention: r,
                      analyticsLocation: eU,
                      onClose: () => ec(null),
                      channel: o,
                  }))
                : eu?.type === e6.ROLE_SUBSCRIPTION
                  ? (i = (0, s.jsx)(en, { onClose: () => ec(null), guildId: eu.guildId, emojiId: eu.emojiId }))
                  : eC && !ey && (i = (0, s.jsx)(ev, { onDismiss: () => eR(!1) }));
            let ta = (0, s.jsx)(tY, {
                    channel: o,
                    pickerIntention: r,
                    emojiListRef: eT,
                    onKeyDown: (e) => {
                        tn?.(e), Z?.(e);
                    },
                    searchBarRef: eS,
                    onFocus: X,
                    autoFocus: J,
                    accessory: et,
                    headerClassName: b,
                    diversitySurrogate: eG,
                    isBurstReaction: eC,
                    onBurstReactionToggle: () => {
                        eR(!eC), eS.current?.focus();
                    },
                    renderHeader: j,
                    showAddEmojiButton: $,
                }),
                to = [];
            r === ef.EmojiIntention.REACTION && to.push(E.M.SUPER_REACTIONS_NITRO_MARKETING),
                N.Ay.hasFavoriteEmojis(eN) || to.push(E.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let tl = (0, s.jsx)(g.A, {
                ...eU,
                children: (0, s.jsxs)(tr, {
                    id: ez.Do,
                    "aria-labelledby": C ? ez.k1 : void 0,
                    role: C ? "tabpanel" : void 0,
                    className: l()(tW.iE, { [tW.r6]: C, [tW.cB]: eC && ey }),
                    children: [
                        C ? null : ta,
                        (0, s.jsxs)("div", {
                            className: l()(tW.Fb, L),
                            onScroll: nQ,
                            children: [
                                C ? ta : null,
                                (0, s.jsxs)("div", {
                                    className: tW.uK,
                                    ref: eI,
                                    children: [
                                        (0, s.jsx)(n$, { channel: o, closePopout: _ }),
                                        (0, s.jsx)(S.Ay, {
                                            contentTypes: to,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === E.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(tc, { markAsDismissed: () => n(t_.i.UNKNOWN) });
                                            },
                                        }),
                                        B
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: tW.Iy,
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
                                                            gridWidth: eW,
                                                            isUsingKeyboardNavigation: ti,
                                                            onEmojiSelect: (e, t) => {
                                                                e5(e, { ...t, isBurst: eC });
                                                            },
                                                            onSelectSoundmoji: O,
                                                            setUpsellConfigs: ec,
                                                            rowCount: e$.length,
                                                            rowCountBySection: eY,
                                                            sectionDescriptors: eK,
                                                            setCollapsedSections: ej,
                                                            channelGuildId: eN,
                                                            channelId: o?.id,
                                                            messageId: H,
                                                            isBurstReaction: eC,
                                                            listHeaderClassName: W,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(tZ, {
                                    emojiGrid: e$,
                                    className: tW.qV,
                                    guildId: eN,
                                    pickerIntention: r,
                                    channel: o,
                                }),
                                i,
                            ],
                        }),
                        B
                            ? null
                            : (0, s.jsx)(td, {
                                  className: l()(tW.jv, Y),
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
            return (0, s.jsx)(T.f5, { value: ex, children: tl });
        }),
    );
