n.d(t, { A: () => n4 }), n(321073);
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
    S = n(379848),
    v = n(236285),
    N = n(536637),
    _ = n.n(N),
    j = n(228366),
    T = n(935208);
let b = { lastSeenNewlyAddedEmojiIds: {} },
    R = b,
    O = {};
function L() {
    for (let e in O) R.lastSeenNewlyAddedEmojiIds[e] = O[e];
}
class M extends h.Ay.PersistedStore {
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
        if (null == n || T.default.compare(t, n.id) > 0) return !0;
        {
            let e = _()(n.lastSeen);
            return _()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let k = new M(j.h, {
    LOGOUT: function () {
        (R = b), (O = {});
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = O[t] ?? R.lastSeenNewlyAddedEmojiIds[t];
        null == l || 0 > T.default.compare(l.id, n)
            ? (O[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (O[t] = { ...l, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = O[t] ?? R.lastSeenNewlyAddedEmojiIds[t];
        (null == l || 0 > T.default.compare(l.id, n)) && (O[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: L,
    CLEAR_CACHES: function () {
        (R = b), L();
    },
    CONNECTION_CLOSED: L,
});
var w = n(451731),
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
                ? v.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : v.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        u = null != r ? v.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        c =
            t === ex.EmojiIntention.REACTION
                ? v.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : v.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, c),
        h = null != a ? v.Ay.getGuildEmoji(a) : [],
        m = v.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
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
var eE = n(338854),
    eI = n(403581),
    ey = n(724651),
    eS = n(732280),
    ev = n(783420),
    eN = n(158045),
    e_ = n(202541);
let ej = { object: Q.ZSU.BUTTON_CTA, section: Q.JJy.SUPER_REACTION_PICKER };
function eT(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: l } = e,
        i = et.intl.string(et.t.eikz43),
        r = (0, eS.V)(),
        a = (0, ey.O)(),
        o = r?.subscriptionTrial,
        u = null != o || null != a,
        c = o?.skuId ?? e_.pe.TIER_2,
        d = u
            ? null != a
                ? et.intl.formatToPlainString(et.t.bkQ4bH, { percent: a.discount.amount })
                : (0, eN.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : et.intl.string(et.t.sEAnVH);
    return (0, s.jsx)(ev.A, {
        subscriptionTier: c,
        premiumModalAnalyticsLocation: ej,
        onSubscribeModalClose: (e) => {
            e && l();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, s.jsx)(eE.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: l,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: u ? { type: "free_trial", variant: "expressive" } : void 0,
                title: et.intl.string(et.t.N4SCJ0),
                body: i,
                action: { text: d, variant: "expressive", icon: eI.t, onClick: r },
            });
        },
    });
}
var eb = n(435558),
    eR = n.n(eb),
    eO = n(837381),
    eL = n(460905),
    eM = n(775602),
    ek = n(88218),
    ew = n(407698),
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
                    return eI.t;
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
let e7 = "expression-guild-",
    { itemIdForIndex: e4 } = (0, ek.J)(e7),
    e9 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    te = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tt = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tn = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tl = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    ti = (0, ec.xI)(e6.__invalid_unicodeCategoryShortcutHeight),
    ts = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tr = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ta = tt + te + 2 * tl,
    to = e9 + te,
    tu = to + (ts + 2 * tr),
    tc = tt + tn + 2 * tl;
function td(e) {
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
        h = (0, eO.rm)(e4(n)),
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
                    ? (0, s.jsx)(eq, { categoryId: m, className: e6.Yl, height: tt, width: tt, size: "custom" })
                    : null,
            ],
        }),
        x = i[n + 1],
        A = null != x && a.type === eY.s.GUILD && x.type !== eY.s.GUILD;
    return null != p
        ? (0, s.jsxs)(r.Fragment, {
              children: [
                  (0, s.jsx)(ew.Q, { guild: p, children: g }),
                  A ? (0, s.jsx)("hr", { className: e6.ny }, "separator") : null,
              ],
          })
        : g;
}
let th = (e) => {
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
        I = (0, h.bG)([eM.Ay], () => eM.Ay.useReducedMotion, []),
        y = r.useMemo(
            () =>
                eR().memoize(
                    (e, t) => {
                        let n = x[t];
                        if (null != n)
                            return (0, s.jsx)(
                                td,
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
        S = r.useMemo(() => [8, 8, 0, 8], []),
        v = r.useCallback(
            (e, t) => {
                let n = x[t];
                if (n.type === eY.s.RECENT) return ta;
                if (n.type === eY.s.GUILD) {
                    let e = x[t + 1];
                    return null != e && e.type !== eY.s.GUILD ? tu : to;
                }
                return tc;
            },
            [x],
        ),
        {
            nonUnicodeCategoryCount: N,
            firstUnicodeCategoryIndex: _,
            firstUnicodeCategoryOffsetTop: j,
            rowCountBySection: T,
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
            let i = ta + t * to + tu;
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
                null == t || (e + t.height - ts >= j ? R(!1) : R(!0));
            },
            [j],
        ),
        L = r.useCallback(
            (e) => {
                e(_), C.current?.scrollTo(j);
            },
            [j, _],
        ),
        M = r.useCallback(
            (e, t) => {
                let n = x[e];
                if (null == n) return 0;
                let l = b ? ti : 0;
                if (n.type === eY.s.RECENT) return t ? 0 : tn;
                if (n.type === eY.s.GUILD) {
                    let n = x[e + 1];
                    return null != n && n.type !== eY.s.GUILD ? (t ? ts + -2 * tr + te + l : te) : t ? l : te;
                }
                return t ? te + l : 2 * te;
            },
            [x, b],
        ),
        k = r.useMemo(
            () =>
                function (e, t) {
                    return (0, s.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        w = b ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(ek.A, {
        categoryListRef: C,
        expressionsListRef: n,
        className: t,
        store: P.Om,
        categories: x,
        listPadding: S,
        onScroll: O,
        renderCategoryListItem: y,
        renderSection: k,
        rowCount: x.length,
        categoryHeight: v,
        getScrollOffsetForIndex: M,
        rowCountBySection: T,
        navId: "emoji-picker-categories",
        itemIdPrefix: e7,
        children: (e) =>
            N >= 7 &&
            (0, s.jsx)(
                H.D,
                {
                    "aria-hidden": !b,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: o()(e6.KB, { [e6.h_]: !b }),
                    tabIndex: b ? 0 : -1,
                    onClick: () => L(e),
                    children: (0, s.jsx)(eL.n, { size: "custom", color: "currentColor", height: tt, width: tt }),
                },
                w,
            ),
    });
};
var tm = n(49999),
    tf = n(860197);
let tp = function (e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)(z.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tf.iE,
        children: [
            (0, s.jsx)(eK.HeartIcon, { size: "md", color: "currentColor", className: tf.Kk }),
            (0, s.jsx)("div", {
                className: tf.Qs,
                children: (0, s.jsx)(z.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, s.jsx)(H.D, {
                onClick: () => t(tm.i.UNKNOWN),
                children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: tf.VN }),
            }),
        ],
    });
};
var tg = n(950372),
    tx = n(717421),
    tA = n(343032),
    tC = n(683063),
    tE = n(131607),
    tI = n(748798);
let ty = { tension: 750, mass: 2.5, friction: 70 };
function tS(e) {
    let { checked: t, onClick: n, buttonRef: l } = e,
        i = (0, h.bG)([eM.Ay], () => eM.Ay.useReducedMotion),
        a = ea.default.getCurrentUser(),
        u = null != a && !(0, eN.TW)(a),
        c = u ? [] : [m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, f] = (0, tE.kn)(c),
        [p, g] = r.useState(!1),
        [x, A] = (0, tx.z)(() => ({})),
        C = (0, tg.animated)(tA.i);
    r.useEffect(() => {
        let e = d === m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (f(tm.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, f]);
    let E = p ? et.intl.string(et.t["Osi/uy"]) : t && !u ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        I = p ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, s.jsx)(tC.u, {
        position: "top",
        title: I,
        body: E,
        asset: (0, s.jsx)(eI.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: p,
        children: (0, s.jsx)(H.D, {
            innerRef: l,
            "aria-label": E,
            "aria-pressed": t,
            onClick: function () {
                A({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: ty }),
                    n?.(),
                    g(!1);
            },
            focusProps: { enabled: !1 },
            className: o()(tI.Pf, { [tI.wM]: t }),
            children: (0, s.jsx)(C, {
                style: i ? void 0 : x,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tI.Kk,
            }),
        }),
    });
}
var tv = n(866665),
    tN = n(821609),
    t_ = n(644508),
    tj = n(824832),
    tT = n(267102),
    tb = n(242812);
function tR(e) {
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
                    await (0, t_.f)({
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
                children: (0, s.jsx)(tN.$, {
                    text: et.intl.string(et.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        l.current?.activateUploadDialogue();
                    },
                    disabled: h || d,
                }),
            }),
            (0, s.jsx)("div", {
                className: tb.F,
                children: (0, s.jsx)(tj.Ay, { ref: l, onChange: m, setLoading: o, disabled: h }, i.current),
            }),
        ],
    });
}
n(667532);
var tO = n(833272),
    tL = n(82495),
    tM = n(260762),
    tk = n(915089),
    tw = n(650583),
    tP = n(683829);
let tD = (0, tk.Ld)(),
    tU = tO.A.convert.fromCodePoint("1f44f"),
    tG = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tV(e) {
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
let tF = (e) => {
    let { fade: t, surrogate: n, onClick: l, delay: i, index: r } = e,
        a = (0, eO.rm)(`item-${r}`),
        o = ef.Ay.getURL(tU + n),
        u = (0, tx.z)({ opacity: 1, from: { opacity: +!t }, delay: i }, "animate-always");
    return (0, s.jsx)(H.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => l(n),
        className: tP.B6,
        children: (0, s.jsx)(tg.animated.div, {
            "aria-label": tV(n),
            className: tP.g4,
            style: { backgroundImage: `url("${o}")`, ...u },
        }),
    });
};
function tH(e) {
    let { id: t, selectedSurrogate: n, onClick: l } = e,
        i = (0, tM.A)("diversity"),
        a = (0, tx.z)({ height: (tG + 14) * (eQ.W$.length + 1), from: { height: tG + 14 }, config: { duration: 125 } }),
        o = r.useRef(i);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let u = ["", ...eQ.W$];
    return (
        eR().remove(u, (e) => e === n),
        u.unshift(n),
        (0, s.jsx)(eO.hD, {
            navigator: i,
            children: (0, s.jsx)(eO.PR, {
                children: (e) => {
                    let { ref: n, ...i } = e;
                    return (0, s.jsx)(tg.animated.div, {
                        ...i,
                        id: t,
                        ref: n,
                        className: tP.J6,
                        style: a,
                        role: "listbox",
                        children: u.map((e, t) =>
                            (0, s.jsx)(tF, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: l }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let tB = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: l } = e,
        i = ef.Ay.getURL(tU + n),
        [a, u] = r.useState(!1),
        c = (0, tL.A)(null, () => u(!1)),
        d = r.useRef(null);
    return (0, s.jsxs)("div", {
        ref: c,
        className: o()(tP.fx, l),
        children: [
            (0, s.jsx)(H.D, {
                innerRef: d,
                className: tP.Dj,
                onClick: function () {
                    u(!0);
                },
                "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tV(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": tD,
                tabIndex: a ? -1 : 0,
                children: (0, s.jsx)("div", { className: tP.g4, style: { backgroundImage: `url("${i}")` } }),
            }),
            a
                ? (0, s.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === tw.dh.ESCAPE
                              ? (e.stopPropagation(), u(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && u(!1);
                      },
                      children: (0, s.jsx)(tH, {
                          id: tD,
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
var tW = n(462180),
    tK = n(602034),
    tz = n(683438);
let tZ = r.forwardRef(function (e, t) {
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
                tW.x,
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
            (0, s.jsx)(tz.I, {
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
                    ...(f ? { "aria-activedescendant": (0, tK.Aq)(l, h.columnIndex, h.rowIndex) } : void 0),
                },
            })
        );
    }),
    tY = r.memo(tZ);
var tq = n(381575);
let tJ = function (e) {
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
            burstToggleRef: p,
            renderHeader: g,
            showAddEmojiButton: x = !0,
            closePopout: A,
        } = e,
        C = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tY, {
                    emojiListRef: r,
                    gridNavigatorId: eY.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: u,
                    autoFocus: c,
                    defaultSearchPlaceholder: (0, ed.wT)(l, m),
                }),
                l === ex.EmojiIntention.REACTION ? (0, s.jsx)(tS, { checked: m, onClick: f, buttonRef: p }) : null,
                n ?? (0, s.jsx)(tB, { searchBarRef: d, className: tq.fx, selectedSurrogate: h }),
                l !== ex.EmojiIntention.NO_CUSTOM_EMOJI && x ? (0, s.jsx)(tR, { channel: t, closePopout: A }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: o()(tq.wx, i), children: null != g ? g(C) : C });
};
var t$ = n(182922),
    tX = n(363195),
    tQ = n(486020),
    t0 = n(977566);
function t1(e) {
    return null != e && "animated" in e;
}
let t2 = r.memo(function (e) {
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
        g = (0, h.bG)([eM.Ay], () => eM.Ay.useReducedMotion, []),
        x = es.Sf.useSetting(),
        A = (0, ed.O7)(o, t1(t) ? t : null),
        C = (0, h.bG)([v.Ay], () => v.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: E } = (0, eg.A)(o, u),
        I = m?.type === e3.EMOJI ? m.subCategory : eY.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    t1(t) &&
                    I !== eY.tm.NONE &&
                    (I === eY.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === eX.i.GUILD &&
                        (0, w.mz)(t.guildId, E[0].id),
                    null != d.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: I,
                            position: m.columnIndex + 1,
                            newlyAddedHighlight: I === eY.tm.NEWLY_ADDED_EMOJI && k.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let y = (function (e, t) {
            let { allowAnimatedEmoji: l, sectionsExpandedFromThreeRows: i, theme: r } = t;
            if (t1(e)) {
                let t = null != e.id ? tQ.Ay.getEmojiURL({ id: e.id, animated: l && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, s.jsx)(z.E, {
                          variant: "text-md/normal",
                          className: t0.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, s.jsx)("img", { alt: (0, ef.N)(e) ?? "", src: t, className: t0.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    l = n(404828),
                    a = n(600003),
                    o = n(318121);
                return i.has(e.guildId)
                    ? (0, s.jsx)("img", { className: t0.Kk, src: (0, F.M)(r) ? a : o, alt: "" })
                    : (0, s.jsx)("img", { className: t0.Kk, src: (0, F.M)(r) ? t : l, alt: "" });
            }
        })(t, { allowAnimatedEmoji: x, sectionsExpandedFromThreeRows: C, theme: tX.A.theme }),
        S =
            null != f
                ? (0, s.jsx)(eJ.A, { className: t0.__invalid_guildIcon, guild: f, shouldAnimate: !g && p })
                : null;
    l =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? C.has(t.guildId)
                ? et.intl.string(et.t["/K2RDH"])
                : et.intl.string(et.t.NZI2Zk)
            : (0, ef.N)(t);
    let N = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            l = t1(t);
        return null != n && l ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: c, guildId: o, intention: u, guild: f });
    return (0, s.jsx)(t$.A, {
        className: i,
        graphicPrimary: y,
        graphicSecondary: S,
        titlePrimary: l,
        titleSecondary: N,
        isFavorite: A,
        emojiSubCategory: I,
    });
});
var t3 = n(607399),
    t5 = n(765178),
    t8 = n(537652),
    t6 = n(962125),
    t7 = n(240864),
    t4 = n(286509),
    t9 = n(89366),
    ne = n(10392),
    nt = n(82498),
    nn = n(202639),
    nl = n(414872),
    ni = n(285373),
    ns = n(259678),
    nr = n(304072),
    na = n(189551),
    no = n(289873),
    nu = n(796774),
    nc = n(209932),
    nd = n(805945),
    nh = n(576705);
n(980504);
var nm = n(818348),
    nf = n(821425);
let np = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        { channelId: a, onSelectSoundmoji: o } = e,
        u = (0, h.bG)([nc.A], () => !nc.A.isFetching() && !nc.A.hasFetchedAllSounds(), []),
        c = (0, h.bG)([eh.A], () => eh.A.getChannel(a)),
        d =
            ((t = (0, h.bG)([ea.default], () => eN.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, h.bG)([nc.A], () => nc.A.getSoundsForGuild("0"))),
            (l = (0, h.yK)([J.A], () => J.A.getGuildIds())),
            (i = r.useMemo(() => nh.A.can(nm.xB.USE_EXTERNAL_SOUNDS, c), [c])),
            r.useMemo(() => {
                let e = [];
                if (t && i) {
                    let t = l.flatMap((e) => nc.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eR().sampleSize(t, 4));
                } else if (c?.guild_id != null) {
                    let t = nc.A.getSoundsForGuild(c?.guild_id)?.filter((e) => e.available);
                    e.push(...eR().sampleSize(t, 4));
                }
                return e.length < 4 && e.push(...eR().sampleSize(n ?? [], 4 - e.length)), e;
            }, [i, c?.guild_id, n, l, t]));
    return (r.useEffect(() => {
        (0, nu.E7)();
    }, [u]),
    0 === d.length)
        ? (0, s.jsx)(no.y, {})
        : (0, s.jsx)("div", {
              className: nf.q,
              children: d.map((e, t) =>
                  (0, s.jsx)(
                      nd.Ay,
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
var ng = n(594061),
    nx = n(771104),
    nA = n(442433),
    nC = n(147421),
    nE = n(723702),
    nI = n(140735),
    ny = n(194261),
    nS = n(703413);
let nv = (e) => {
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
var nN = n(955388);
let n_ = eR().memoize(
        (e) =>
            `${e * ex.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(eQ.Ay.numNonDiversitySprites / ex.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nj = eR().memoize(
        (e) =>
            `${e * ex.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(eQ.Ay.numDiversitySprites / ex.EmojiSprites.DiversityPerRow)}px`,
    ),
    nT = r.memo(function (e) {
        let { emoji: t, size: l, surrogateCodePoint: i, allowAnimatedEmoji: a, "aria-label": u, isLocked: c } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : tQ.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: ex.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(nv, {
                              className: nN.N1,
                              "aria-label": u,
                              src: e,
                              size: l,
                              alt: (0, ef.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: o()(nN.xA, { [nN.N1]: c }),
                    style: (function (e, t, l) {
                        let i, s, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((i = n(12303)(`./spritesheet-${t}-${l}.png.js`).default),
                              (s = nj(l)),
                              (r = ex.EmojiSprites.DiversityPerRow))
                            : ((i = n(145519)(`./spritesheet-emoji-${l}.png.js`).default),
                              (s = n_(l)),
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
                    children: (0, s.jsx)(nI.A, { children: u }),
                });
            })();
        return (0, s.jsxs)(r.Fragment, {
            children: [
                d,
                c
                    ? (0, s.jsx)("div", {
                          className: nN.iD,
                          children: (0, s.jsx)(ny.LockIcon, { size: "xs", color: "currentColor", className: nN.fi }),
                      })
                    : null,
            ],
        });
    });
var nb = n(537911);
let nR = r.forwardRef(function (e, t) {
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
    return (0, s.jsx)(ns.vN, {
        children: (0, s.jsx)("button", {
            ...E,
            className: o()(nb._X, { [nb.lG]: r, [nb.Lh]: a, [nb.Bx]: u, [A ?? ""]: u, [nb.TV]: d }),
            "data-type": U.g.EMOJI,
            "data-id": l.id,
            "data-name": l.name,
            "data-surrogates": "surrogates" in l ? l.surrogates : null,
            "data-animated": l.animated ? "true" : null,
            ref: t,
            children: (0, s.jsx)(nT, {
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
            messageId: S,
            isBurstReaction: N,
            rowPosition: _,
            inNitroLockedSection: j,
        } = e,
        [T, b] = r.useState(""),
        R = (0, h.bG)([eM.Ay], () => eM.Ay.useReducedMotion),
        O = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(o), [o]),
        L = r.useRef(null),
        { emoji: M, size: k, isDisabled: w, columnIndex: P } = t;
    function D() {
        d.current || m.current || u(t);
    }
    let { ref: U, tabIndex: G, onFocus: V, ...F } = x(P, a) ?? {},
        H =
            T !== `${P}:${a}`
                ? (0, s.jsx)(nR, {
                      ref: U,
                      emoji: M,
                      isFavorite: O.isFavoriteEmojiWithoutFetchingLatest(M),
                      isLargeSize: C,
                      isMediumSize: A,
                      isInspected: i,
                      isDisabled: w,
                      showPulse: E === l,
                      allowAnimatedEmoji: I,
                      onFocus: V ?? D,
                      onMouseMove: D,
                      onClick: (e) => {
                          if (
                              null != L.current &&
                              null != _ &&
                              null != S &&
                              !e.shiftKey &&
                              null != M.name &&
                              N &&
                              !R &&
                              I
                          ) {
                              let e = null == M.id ? eQ.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = L.current.getBoundingClientRect();
                              (t.x = _.x + (P + 1) * k), b(`${P}:${a}`), (0, nC.h)(S, e, M.id, t);
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || m.current)) return;
                              let n = e.altKey;
                              n && !v.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) && y(l),
                                  (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP),
                                  c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n });
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nA.L3)(e, async () => {
                              let { default: e } = await Promise.all([n.e("904774"), n.e("446132")]).then(
                                  n.bind(n, 233503),
                              );
                              return (t) => (0, s.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: G,
                      columnIndex: P,
                      rowIndex: a,
                      size: k,
                      surrogateCodePoint: p,
                      selectedItemClassName: g,
                      inNitroLockedSection: j,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...F, key: l, ref: L },
        f
            ? (0, s.jsx)(tv.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, nE.isMac)() ? "Opt" : "Alt" }),
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
            isBurstReaction: S,
            inNitroLockedSection: v,
            handleScrollUpOnSectionCollapse: N,
        } = e,
        _ = n(619508),
        j = n(404828),
        T = n(600003),
        b = n(318121),
        R = n(443336),
        O = n(258901),
        L = n(135974),
        M = n(8013),
        w = (0, Z.Ay)(),
        D = P.Om.getState(),
        [U, G] = r.useState(D.inspectedExpressionPosition),
        [V, H] = (0, nr.A)(null, 300),
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
            ng.bW.loadIfNecessary();
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
                            ? (0, F.M)(w)
                                ? O
                                : M
                            : (0, F.M)(w)
                              ? _
                              : j
                        : a
                          ? (0, F.M)(w)
                              ? R
                              : L
                          : (0, F.M)(w)
                            ? T
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
                        S = U.rowIndex === g && U.columnIndex === x;
                    function v() {
                        m.current || f.current || u(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...y, key: t },
                        (0, s.jsx)(ns.vN, {
                            children: (0, s.jsx)("button", {
                                "aria-label": c,
                                ref: A,
                                className: o()(nb._X, {
                                    [nb.lG]: W,
                                    [nb.Lh]: K,
                                    [nb.Bx]: S && !h,
                                    [E ?? ""]: S,
                                    [nb.TV]: V === t,
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
                    handleSelect: function (t) {
                        e.type !== e3.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (i(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, na.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || N(),
                                eo.default.track(Q.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, s.jsx)("img", { className: nb.Kk, src: c, alt: "" }),
                    ariaLabel: h,
                    shouldShowRoundHighlight: !0,
                });
            }
            case e3.EMOJI: {
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
                        isBurstReaction: S,
                        rowPosition: B?.current?.getBoundingClientRect(),
                        inNitroLockedSection: v,
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
            className: o()(nb.ND, { [nb.HO]: W, [nb.X$]: K }),
            ref: B,
            children: e.map(Y),
        });
    }
    if (C === eY.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nb.ND,
            ref: B,
            children: (0, s.jsx)(np, { channelId: I, onSelectSoundmoji: a }),
        });
    if (C !== eY.s.TOP_GUILD_EMOJI) return q(t);
    let J = t.filter(
            (e) =>
                e.subCategory === eY.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === eX.i.GUILD &&
                    !k.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        $ = t.filter(
            (e) =>
                e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === eX.i.GUILD &&
                k.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === $.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nb.Ng,
              children: [
                  (0, s.jsx)("div", { className: o()(nb.V6, { [nb.$3]: 0 === J.length }), children: q(J) }),
                  (0, s.jsxs)("div", {
                      className: nb.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(nb.eE, { [nb.eM]: 1 === $.length, [nb.Wk]: J.length > 0 }),
                              children: q($),
                          }),
                          (0, s.jsxs)("div", {
                              className: o()(nb.lD, { [nb.EI]: W, [nb.qU]: K, [nb.Wk]: J.length > 0 }),
                              children: [
                                  (0, s.jsx)(nx.A, { foreground: nb.rI }),
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
var nM = n(618723);
let nk = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nw = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nP = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nD = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nU = (0, ec.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nG = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nV = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nF = r.memo(function (e) {
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
                rowCount: S,
                isUsingKeyboardNavigation: v,
                channelGuildId: N,
                channelId: _,
                messageId: j,
                isBurstReaction: T,
                listHeaderClassName: b,
            } = e,
            R = r.useRef(!1),
            O = P.Om.useStore((e) => e.activeCategoryIndex),
            L = (0, D.RQ)((e) => e.searchQuery),
            M = es.Sf.useSetting(),
            k = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
            w = (0, eu.ki)(k),
            { location: V } = (0, A.p)(),
            { analyticsLocations: F } = (0, y.Ay)(),
            [B, W] = r.useState(0),
            [K, Z] = r.useState(!1),
            {
                listPadding: Y,
                renderRow: q,
                renderSection: J,
                renderSectionHeader: $,
                renderSectionFooter: X,
                sectionMarginBottom: ee,
                sectionHeaderHeight: en,
                sectionFooterHeight: el,
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
                        isBurstReaction: S,
                        listHeaderClassName: v,
                        activeSectionIndex: N,
                        emojiListRef: _,
                    } = e,
                    j = (0, A.p)(),
                    T = r.useRef(Q.An1),
                    b = r.useMemo(() => ("" !== n ? tO.A.convert.toCodePoint(n) : ""), [n]),
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
                                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: j.location,
                                        tab: eA.kx.EMOJI,
                                        collapsed: !i,
                                        guild_id: n.id,
                                    }),
                                e === eY.R2.SOUNDMOJI &&
                                    eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                                m(l);
                        },
                        [j, t, m],
                    ),
                    M = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            l = e.type === e3.SOUNDMOJI ? null : e.type === e3.EMOJI ? (0, ef.N)(e.emoji) : e.name;
                        T.current !== Q.An1 && window.cancelAnimationFrame(T.current),
                            (T.current = window.requestAnimationFrame(() => {
                                P.Om.setInspectedExpressionPosition(t, n, U.t.MOUSE_EVENT),
                                    P.Om.setSearchPlaceholder(l),
                                    (T.current = Q.An1);
                            }));
                    }, []),
                    k = (0, h.bG)([ei.HP], () => ei.HP.hasHotspot(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                    w = r.useMemo(
                        () =>
                            eR().memoize((e, t) => {
                                let n = l[e],
                                    r = d[t.sectionIndex];
                                return (0, s.jsx)(
                                    nL,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: i,
                                        surrogateCodePoint: b,
                                        onInspect: M,
                                        onSelect: a,
                                        onSelectSoundmoji: u,
                                        getEmojiItemProps: f,
                                        getEmojiRowProps: p,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: x,
                                        rowIndex: e,
                                        allowAnimatedEmoji: C,
                                        showEmojiFavoriteTooltip: k,
                                        channelGuildId: E,
                                        category: r.sectionId,
                                        selectedItemClassName: nM.__invalid_selectedItem,
                                        channelId: I,
                                        messageId: y,
                                        isBurstReaction: S,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            _.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [l, d, i, b, M, a, u, f, p, g, x, C, k, E, I, y, S, _],
                    );
                r.useEffect(() => () => w.cache?.clear?.(), [w]);
                let G = r.useMemo(
                        () =>
                            eR().memoize((e) => {
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
                                                  className: nM.f3,
                                                  onClick: () => {
                                                      (0, D.U)(eA.kx.SOUNDBOARD),
                                                          eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK);
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    t4.A,
                                    {
                                        className: o()(nM.wx, v, { [nM.RA]: f, [nM.sp]: p }),
                                        icon: u,
                                        isCollapsed: t.has(a),
                                        onClick: () => L(a, l),
                                        trailing: g,
                                        children: c,
                                    },
                                    a,
                                );
                            }),
                        [d, t, L, v, N],
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
                                    className: o()(nM.Wy, {
                                        [nM.YD]: e === d.length - 1,
                                        [nM.jl]: t.has(l.sectionId),
                                        [nM.cW]: l.isNitroLocked,
                                        [nM.T5]: i || r,
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
                                    ? (0, s.jsx)(nl.ap, {})
                                    : (0, s.jsx)(nl.Ay, {})
                                : R(e)
                                  ? (0, s.jsx)("div", { className: nM.pQ })
                                  : null,
                        [O, R, V],
                    ),
                    W = r.useCallback((e) => (O(e) ? 41 : 33 * !!R(e)), [O, R]),
                    K = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || O(e) || R(e) ? 0 : nG),
                        [t, d, O, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== c ? nD : nk, nw, nP, 0], [c]),
                    renderRow: w,
                    renderSection: F,
                    renderSectionHeader: G,
                    renderSectionFooter: B,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === eY.s.SEARCH_RESULTS ? 0 : nU), [d]),
                    sectionFooterHeight: W,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: l,
                emojiGrid: i,
                emojiSize: u,
                onEmojiSelect: c,
                onSelectSoundmoji: d,
                searchQuery: L,
                sectionDescriptors: f,
                setCollapsedSections: x,
                getEmojiItemProps: C,
                getEmojiRowProps: I,
                isScrolling: R,
                isUsingKeyboardNavigation: v,
                allowAnimatedEmoji: M,
                channelGuildId: N,
                channelId: _,
                messageId: j,
                isBurstReaction: T,
                listHeaderClassName: b,
                activeSectionIndex: B,
                emojiListRef: a,
            }),
            er = (0, G.Fk)({
                activeCategoryIndex: O,
                isScrolling: R,
                listRef: a,
                onActiveCategoryIndexChange: function (e) {
                    W(e), "" === L && P.Om.setActiveCategoryIndex(e);
                },
                scrollOffset: 0,
                searchQuery: L,
                disableForSearch: !1,
            });
        (0, G.FV)({ searchQuery: L, activeCategoryIndex: O, listRef: a });
        let ec = r.useCallback(
                (e) => {
                    er(e),
                        nH({ emojiListRef: a, sectionDescriptors: f, scrollTop: e, searchQuery: L, setShowUpsell: Z });
                },
                [er, a, f, L, Z],
            ),
            eh = f.length > 0;
        r.useEffect(() => {
            K &&
                (eo.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: e_.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: V,
                    location_stack: F,
                }),
                (0, ne.sq)(Q.U7l.PREMIUM_UPSELL_VIEWED, F, () => (0, nt.uq)(e_.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [V, F, K]),
            r.useEffect(() => {
                "" !== L && Z(!1);
            }, [L]);
        let em = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(em.current),
                    (em.current = setTimeout(() => {
                        eh
                            ? t5.O.announce(et.intl.string(et.t.uZ4F2O), "polite")
                            : t5.O.announce(et.intl.string(et.t.IxxiKF), "assertive"),
                            (em.current = null);
                    }, 200)),
                    () => {
                        clearTimeout(em.current);
                    }
                ),
                [eh, L],
            ),
            (0, s.jsxs)("div", {
                className: nM.AD,
                children: [
                    eh
                        ? (0, s.jsx)(t6.A, {
                              role: "none presentation",
                              className: nM.p_,
                              listPadding: Y,
                              onScroll: ec,
                              renderRow: q,
                              renderSection: J,
                              renderSectionHeader: $,
                              renderSectionFooter: X,
                              rowCount: S,
                              rowCountBySection: p,
                              rowHeight: u + 2 * nV,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: ee,
                              sectionFooterHeight: el,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, s.jsx)(t8.A, {
                              message: (0, s.jsx)(z.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: et.intl.string(et.t.IxxiKF),
                              }),
                              className: nM.BZ,
                          }),
                    w || t3.Fr
                        ? null
                        : (0, s.jsx)(nn.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, eN.Dd)(e_.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          m({ type: e8.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, t9.qD)()), (0, eN.LE)(n, e_.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: Q.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, s.jsx)(ni.l, {
                                  size: "sm",
                                  className: nM.ij,
                                  location: E.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    nH = eR().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: l, searchQuery: i, setShowUpsell: s } = e;
            s(
                (0, t7.s)({ listRef: t, searchQuery: i, nitroLockedSectionStates: n, scrollTop: l })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nB = n(506774),
    nW = n(28863),
    nK = n(277984),
    nz = n(404374),
    nZ = n(780964),
    nY = n(766075),
    nq = n(166403),
    nJ = n(506150);
let n$ = "premiumRetentionEmojiPickerNotice",
    nX = nB.w.get(n$),
    nQ = function (e) {
        let { closePopout: t, channel: n } = e,
            [l, i] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, h.cf)([nq.A], () => ({
                subscription: nq.A.getPremiumSubscription(),
                hasFetchedSubscriptions: nq.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, nK.hP)();
            }, [o]),
            null == a || !(0, eN.PK)(a.status) || l)
        )
            return null;
        let u = a.status === Q.Dmq.PAST_DUE ? (0, eN.ji)(a).expiresDate : _()(a.currentPeriodStart).add(e_.ph),
            c = `${a.id}:${u.toISOString()}`;
        if (nX === c) return null;
        let d =
            eN.Ay.getPremiumType(a.planId) === e_.PremiumTypes.TIER_0
                ? nz.k0.PREMIUM_TIER_0
                : eN.Ay.getPremiumType(a.planId) === e_.PremiumTypes.TIER_1
                  ? nz.k0.PREMIUM_TIER_1
                  : nz.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)(z.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: nJ.g$,
            children: [
                (0, s.jsx)(eI.t, { size: "md", className: nJ.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: nJ.Xn,
                    children: [
                        (0, s.jsx)(z.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: eN.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: u.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nW.Anchor, {
                                onClick: () => {
                                    (0, ed.xf)(n), t(), (0, nY.openUserSettings)(nZ.X.NITRO_PANEL);
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(H.D, {
                    onClick: () => {
                        nB.w.set(n$, c), (nX = c), i(!0);
                    },
                    children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: nJ.YF }),
                }),
            ],
        });
    };
var n0 = n(148361);
let n1 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n2 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function n3(e) {
    return e.stopPropagation();
}
function n5(e, t) {
    P.Om.setInspectedExpressionPosition(e, t, U.t.GRID_NAVIGATOR_EVENT);
}
let n8 = c()(ed.bo, 200),
    n6 = c()(ed.Wi, 200),
    n7 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    n4 = r.memo(
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
                    onSelectSoundmoji: j,
                    containerWidth: T,
                    onNavigateAway: b,
                    persistSearch: R,
                    className: O,
                    headerClassName: L,
                    analyticsOverride: M = n7,
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
                eS = r.useRef(null);
            null == a && null != ec && (a = ec);
            let ev = a?.getGuildId() ?? u ?? null,
                [eN, e_] = r.useState(!1),
                ej = r.useRef(null),
                eb = ea.default.getCurrentUser(),
                eO = (0, eu.ki)(eb),
                eL = eN && eO;
            r.useImperativeHandle(t, () => ({ onPickerOpen: e9 }));
            let { location: eM } = (0, A.p)(),
                { page: ek, section: ew, object: eP, openPopoutType: eD, popoutLocation: eU } = M,
                eG = r.useMemo(() => ({ ...eM, section: ew ?? Q.JJy.EMOJI_PICKER_POPOUT }), [eM, ew]),
                { analyticsLocations: eV } = (0, y.Ay)(E.A.EMOJI_PICKER),
                { diversitySurrogate: eF } = (0, h.cf)([v.Ay], () => ({ diversitySurrogate: v.Ay.diversitySurrogate })),
                eH = (0, ed.sL)(eE, a, i, Y),
                eB = null == eH ? 0 : eH.locked.length + eH.unlocked.length,
                eW = es.iM.useSetting(),
                eK = r.useMemo(() => new Set(eW), [eW]),
                ez = r.useCallback((e) => {
                    es.iM.updateSetting(Array.from(e));
                }, []),
                eZ = (0, G.oV)({ gridWrapperRef: eI, containerWidth: T, listPaddingLeft: n2, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eq,
                    sectionDescriptors: eJ,
                    emojiGrid: e6,
                    columnCounts: e7,
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
                        m = (0, h.bG)([v.Ay], () => v.Ay.categories),
                        f = r.useMemo(() => (d ? eQ.Ay.getCategories() : m), [m, d]),
                        p = (0, h.bG)([J.A], () => J.A.getGuild(t?.getGuildId()), [t]),
                        g = t?.getGuildId() ?? n,
                        x = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(g), [g]),
                        A = (0, ed.XI)(g),
                        C = (0, ed.Fj)(g),
                        E = (0, ed.QZ)(g),
                        { topEmojis: I, newlyAddedEmojis: y } = (0, eg.A)(g, i),
                        S = (0, h.yK)([e2.Ay], () => e2.Ay.getFlattenedGuildIds(), []),
                        N = (0, h.bG)([v.Ay], () => v.Ay.expandedSectionsByGuildIds),
                        _ = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
                        j = (0, eu.ki)(_),
                        T = (0, e0.k0)(),
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
                                    [f, p] = eR().partition(s, (e) => {
                                        let n = ef.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: i });
                                        return o.set(e, n), !n;
                                    }),
                                    g = f.concat(p),
                                    A = a.guild,
                                    C = g.length > _ && null != A && a.isNitroLocked,
                                    E = C && !N.has(A.id);
                                E && g.splice(_ - 1);
                                let S = Math.ceil((C ? g.length + 1 : g.length) / x),
                                    v = [];
                                for (let e = 0; e < S; e++) {
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
                                    if ((v.push(l), !c)) {
                                        if (C && e === S - 1) {
                                            let t = v[e];
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
                                let j = { ...a, count: s.length };
                                n.push(j), e.push(c ? 0 : S);
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
                                            isNitroLocked: !j,
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
                                        function v(n) {
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
                                                    T ||
                                                    (!j &&
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
                                        if ((null != p && v(p.id), (0, ex.isExternalEmojiAllowedForIntention)(i)))
                                            for (let e of S) (null == p || p.id !== e) && v(e);
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
                    }, [x, a, u, o, s, l, b, N, t, i, I, y, j, f, p, S, E, C, A, T, R, c]);
                })({
                    gridWidth: eZ,
                    fallbackGuildId: ev,
                    channel: a,
                    pickerIntention: i,
                    emojiSearchResults: eH,
                    collapsedSections: eK,
                    emojiPaddingHorizontal: n1,
                    emojiSpriteSize: f,
                    shouldShowSoundmojiInEmojiPicker: Z,
                    showOnlyUnicode: Y,
                }),
                { newlyAddedEmojis: e4 } = (0, eg.A)(ev, i);
            (n = r.useRef({ intention: i, isBurstReaction: eN, analyticsObject: eP })),
                r.useEffect(() => {
                    n.current.intention === ex.EmojiIntention.REACTION && eC(n.current);
                }, []);
            let e9 = r.useCallback(() => {
                    let e = e4.length > 0 ? e4[0].id : null;
                    (0, w.uV)(ev, e), eC({ intention: i, isBurstReaction: eN, analyticsObject: eP });
                }, [e4, ev, i, eN, eP]),
                te = (function (e) {
                    let {
                            pickerIntention: t,
                            selectedChannel: n,
                            fallbackGuildId: l,
                            onSelectEmoji: i,
                            setUpsellConfigs: s,
                            emojiSelectAnalytics: a,
                            trackEmojiFavorited: o,
                        } = e,
                        u = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? l), [l, n]);
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
                    fallbackGuildId: ev,
                    closePopout: c,
                    onSelectEmoji: _,
                    setUpsellConfigs: em,
                    emojiSelectAnalytics: (e, t) => {
                        "" !== eE
                            ? (0, ed.Wf)({
                                  emoji: e.emoji,
                                  location: { ...eG, object: Q.ZSU.EMOJI },
                                  searchQuery: eE,
                                  isLocked: null != t,
                                  intention: i,
                                  messageId: B,
                              })
                            : (0, ed._7)({
                                  emoji: e.emoji,
                                  location: { ...eG, object: eP ?? Q.ZSU.EMOJI, ...(null != ek && { page: ek }) },
                                  pickerIntention: i,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === eY.tm.NEWLY_ADDED_EMOJI &&
                                      k.isNewerThanLastSeen(ev, e.emoji.id),
                                  isBurstReaction: eN,
                                  messageId: B,
                                  lockedReason: t,
                                  visibleRowIndex: e.visibleRowIndex,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, ed.C5)({ emoji: e.emoji, location: { ...eG, object: Q.ZSU.EMOJI } });
                    },
                }),
                tt = r.useCallback(() => {
                    c(), b?.();
                }, [c, b]),
                {
                    getItemProps: tn,
                    getRowProps: tl,
                    gridContainerProps: ti,
                    handleGridContainerKeyDown: ts,
                    isUsingKeyboardNavigation: tr,
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
                        c = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(o), [o]),
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
                                                k.isNewerThanLastSeen(o, e.emoji.id),
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
                            onGridNavigatorPositionChange: n5,
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
                    analyticsLocation: eG,
                    columnCounts: e7,
                    onSelectEmoji: _,
                    emojiGrid: e6,
                    emojiList: ey,
                    channelGuildId: ev,
                    isBurstReaction: eL,
                });
            ((e, t) => {
                let [n, l] = r.useState(null);
                r.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), l(null));
                }, [t, n]),
                    r.useEffect(() => {
                        l(P.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(T, ey),
                r.useLayoutEffect(() => {
                    ee && eS.current?.focus();
                }, [T, eF, eS, ee]),
                r.useEffect(() => {
                    R || (0, D.Ri)("");
                }, [R]),
                r.useEffect(
                    () => (
                        eo.default.track(Q.HAw.OPEN_POPOUT, {
                            type: eD ?? "Emoji Picker",
                            guild_id: ev,
                            location: eU,
                            ...(0, I.dI)(a),
                        }),
                        () => {
                            n8.cancel(), n6.cancel();
                        }
                    ),
                    [eD, ev, eU, a],
                ),
                (0, C.Ay)(() => ((0, ed.V$)({ intention: i, location: eG }), (eA.current = eE), P.Om.resetStoreState)),
                r.useEffect(() => () => (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                r.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = P.Om.getState().inspectedExpressionPosition;
                    e6[t]?.[e] == null && 0 !== e && P.Om.setInspectedExpressionPosition(0, 0);
                }, [e6]),
                r.useEffect(() => {
                    if (("" === eA.current && "" !== eE && (0, ed.EG)(eG, i), "" !== eE && eA.current !== eE)) {
                        let e = P.Om.getAnalyticsId();
                        0 === eB
                            ? n8({ location: eG, searchQuery: eE, intention: i, loadId: e })
                            : n6({
                                  totalResults: eB,
                                  numEmojiLocked: eH?.locked.length ?? 0,
                                  location: eG,
                                  searchQuery: eE,
                                  intention: i,
                                  loadId: e,
                              });
                    }
                    eA.current = eE;
                }, [eE, eG, eB, eH, i]);
            let ta = F ?? (N ? "div" : p.l),
                to = null != eZ;
            eh?.type === e8.PREMIUM
                ? (l = (0, s.jsx)(n0.default, {
                      onUpsellClicked: tt,
                      emojiDescriptor: eh.emojiDescriptor,
                      pickerIntention: i,
                      analyticsLocation: eG,
                      onClose: () => em(null),
                      channel: a,
                  }))
                : eh?.type === e8.ROLE_SUBSCRIPTION &&
                  (l = (0, s.jsx)(el, { onClose: () => em(null), guildId: eh.guildId, emojiId: eh.emojiId }));
            let tu = (0, s.jsx)(tJ, {
                    channel: a,
                    pickerIntention: i,
                    emojiListRef: ey,
                    onKeyDown: (e) => {
                        ts?.(e), X?.(e);
                    },
                    searchBarRef: eS,
                    onFocus: $,
                    autoFocus: ee,
                    accessory: en,
                    headerClassName: L,
                    diversitySurrogate: eF,
                    isBurstReaction: eN,
                    onBurstReactionToggle: function () {
                        e_(!eN), eS.current?.focus();
                    },
                    burstToggleRef: ej,
                    renderHeader: W,
                    showAddEmojiButton: q,
                    closePopout: c,
                }),
                tc = [];
            i === ex.EmojiIntention.REACTION && tc.push(m.M.SUPER_REACTIONS_NITRO_MARKETING),
                v.Ay.hasFavoriteEmojis(ev) || tc.push(m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let td = (0, s.jsx)(x.A, {
                ...eG,
                children: (0, s.jsxs)(ta, {
                    id: eY.Do,
                    "aria-labelledby": N ? eY.k1 : void 0,
                    role: N ? "tabpanel" : void 0,
                    className: o()(tq.iE, { [tq.r6]: N, [tq.cB]: eL }),
                    children: [
                        N ? null : tu,
                        (0, s.jsxs)("div", {
                            className: o()(tq.Fb, O),
                            onScroll: n3,
                            children: [
                                N ? tu : null,
                                (0, s.jsxs)("div", {
                                    className: tq.uK,
                                    ref: eI,
                                    children: [
                                        (0, s.jsx)(nQ, { channel: a, closePopout: c }),
                                        (0, s.jsx)(S.Ay, {
                                            contentTypes: tc,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(tp, { markAsDismissed: () => n(tm.i.UNKNOWN) });
                                            },
                                        }),
                                        H
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: tq.Iy,
                                                  id: eY.lq,
                                                  ...ti,
                                                  children: to
                                                      ? (0, s.jsx)(nF, {
                                                            collapsedSections: eK,
                                                            diversitySurrogate: eF,
                                                            emojiGrid: e6,
                                                            emojiListRef: ey,
                                                            emojiSize: f,
                                                            getEmojiItemProps: tn,
                                                            getEmojiRowProps: tl,
                                                            gridWidth: eZ,
                                                            isUsingKeyboardNavigation: tr,
                                                            onEmojiSelect: function (e, t) {
                                                                te(e, { ...t, isBurst: eL });
                                                            },
                                                            onSelectSoundmoji: j,
                                                            setUpsellConfigs: em,
                                                            rowCount: e6.length,
                                                            rowCountBySection: eq,
                                                            sectionDescriptors: eJ,
                                                            setCollapsedSections: ez,
                                                            channelGuildId: ev,
                                                            channelId: a?.id,
                                                            messageId: B,
                                                            isBurstReaction: eL,
                                                            listHeaderClassName: K,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, s.jsx)(t2, {
                                    emojiGrid: e6,
                                    className: tq.qV,
                                    guildId: ev,
                                    pickerIntention: i,
                                    channel: a,
                                }),
                                l,
                                i === ex.EmojiIntention.REACTION
                                    ? (0, s.jsx)(eT, {
                                          targetElementRef: ej,
                                          shouldShow: eN && !eO,
                                          onDismiss: () => e_(!1),
                                      })
                                    : null,
                            ],
                        }),
                        H
                            ? null
                            : (0, s.jsx)(th, {
                                  className: o()(tq.jv, z),
                                  emojiListRef: ey,
                                  sectionDescriptors: eJ,
                                  intention: i,
                                  channel: a,
                                  fallbackGuildId: ev,
                                  shouldShowSoundmojiInEmojiPicker: Z,
                                  showOnlyUnicode: Y,
                              }),
                    ],
                }),
            });
            return (0, s.jsx)(y.f5, { value: eV, children: td });
        }),
    );
