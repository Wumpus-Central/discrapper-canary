(n.d(t, { A: () => ic }), n(321073));
var i,
    s,
    l = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    c = n(649852),
    u = n.n(c),
    d = n(788413),
    m = n(17928),
    f = n(554146),
    E = n(319060),
    I = n(305866),
    g = n(554375),
    h = n(820284),
    A = n(212245),
    p = n(964486),
    _ = n(793574),
    N = n(666860),
    C = n(688810),
    O = n(379848),
    x = n(236285),
    S = n(331322),
    T = n(939249),
    y = n(477155),
    j = n(297264),
    R = n(62010),
    b = n(732447),
    v = n(105292),
    L = n(429800);
function M(e) {
    let { onBack: t } = e,
        n = v.intl.string(b.default.Nwj3fK),
        i = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            i.current?.focus();
        }, []),
        (0, l.jsxs)("div", {
            className: L.kL,
            children: [
                (0, l.jsx)("div", { "aria-hidden": !0, className: L.Tp }),
                (0, l.jsxs)(S.B, {
                    align: "center",
                    className: L.wx,
                    direction: "horizontal",
                    gap: 8,
                    padding: 16,
                    children: [
                        (0, l.jsx)(T.D, {
                            "aria-label": n,
                            className: L.Gv,
                            innerRef: i,
                            onClick: t,
                            children: (0, l.jsx)(y.r, { size: "sm", color: "currentColor" }),
                        }),
                        (0, l.jsx)(j.D, {
                            variant: "heading-md/semibold",
                            children: v.intl.string(b.default["0+5+Oy"]),
                        }),
                        (0, l.jsx)(R.E, { type: "beta", variant: "primary" }),
                    ],
                }),
            ],
        })
    );
}
var D = n(536637),
    P = n.n(D),
    w = n(73153),
    U = n(935208);
let G = { lastSeenNewlyAddedEmojiIds: {} },
    k = G,
    F = {};
function J() {
    for (let e in F) k.lastSeenNewlyAddedEmojiIds[e] = F[e];
}
class V extends m.Ay.PersistedStore {
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
        k = e ?? G;
    }
    getState() {
        return k;
    }
    getLastSeenEmojiByGuild(e) {
        return k.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n || U.default.compare(t, n.id) > 0) return !0;
        {
            let e = P()(n.lastSeen);
            return P()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let K = new V(w.h, {
    LOGOUT: function () {
        ((k = G), (F = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = F[t] ?? k.lastSeenNewlyAddedEmojiIds[t];
        null == i || 0 > U.default.compare(i.id, n)
            ? (F[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (F[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            i = F[t] ?? k.lastSeenNewlyAddedEmojiIds[t];
        (null == i || 0 > U.default.compare(i.id, n)) && (F[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: J,
    CLEAR_CACHES: function () {
        ((k = G), J());
    },
    CONNECTION_CLOSED: J,
});
var B = n(451731),
    H = n(850992),
    X = n(151271),
    W = n(60587),
    Z = n(887695),
    z = n(562708),
    Y = n(462887),
    q = n(789645),
    $ = n(696986),
    Q = n(834730),
    ee = n(736653),
    et = n(139286),
    en = n(976860),
    ei = n(71393),
    es = n(384684),
    el = n(985242),
    er = n(652215),
    ea = n(746080),
    eo = n(196404);
function ec(e) {
    let t,
        { onClose: i, guildId: s, emojiId: r } = e,
        a = ((t = (0, ee.Ay)()), (0, Y.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: o } = (0, C.Ay)(_.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, et.A)({
        type: z.ImpressionTypes.MODAL,
        name: z.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: o, emoji_guild_id: s, emoji_id: r ?? null },
    });
    let c = (0, m.bG)([ei.A], () => ei.A.getGuild(s)),
        u = (0, m.bG)([es.A], () => null != s && es.A.getUserSubscriptionRoles(s).size > 0),
        d = u ? v.intl.string(v.t.GoLM9z) : v.intl.formatToPlainString(v.t["h0u/Hi"], { serverName: c?.name }),
        f = u ? v.intl.string(v.t.PjZ7Db) : v.intl.string(v.t.p8FG1D);
    return (0, l.jsxs)("div", {
        className: eo.kL,
        children: [
            (0, l.jsx)("div", { className: eo.Tp }),
            (0, l.jsxs)("div", {
                className: eo.Qs,
                children: [
                    (0, l.jsx)(T.D, {
                        className: eo.b,
                        "aria-label": v.intl.string(v.t.cpT0Cq),
                        onClick: i,
                        children: (0, l.jsx)(q.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": v.intl.string(v.t.cpT0Cq),
                            className: eo.yP,
                        }),
                    }),
                    (0, l.jsx)("img", { alt: "", src: a, className: eo.Tn }),
                    (0, l.jsx)($.h, { size: 22 }),
                    (0, l.jsx)(j.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: eo.wx,
                        children: v.intl.string(v.t.cBjkcx),
                    }),
                    (0, l.jsx)($.h, { size: 4 }),
                    (0, l.jsx)(Q.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: eo.h_,
                        children: d,
                    }),
                    (0, l.jsx)($.h, { size: 24 }),
                    (0, l.jsx)(el.A, {
                        text: f,
                        onClick: function () {
                            (0, en.pX)(er.BVt.CHANNEL(s, ea.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
                        },
                    }),
                ],
            }),
        ],
    });
}
var eu = n(450510),
    ed = n(885386),
    em = n(808728),
    ef = n(287809),
    eE = n(174459),
    eI = n(474090),
    eg = n(240248),
    eh = n(822123),
    eA = n(734057),
    ep = n(309010),
    e_ = n(690521),
    eN = n(818645),
    eC = n(316884),
    eO = n(307731),
    ex = n(698279);
function eS(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: s, analyticsObject: l } = e,
        r = eA.A.getChannel(ep.Ay.getChannelId()),
        a = r?.getGuildId(),
        o =
            t === eO.EmojiIntention.REACTION
                ? x.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
                : x.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
        c = null != r ? x.Ay.getDisambiguatedEmojiContext(r.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
        u =
            t === eO.EmojiIntention.REACTION
                ? x.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
                : x.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
        d = o.slice(0, u),
        m = null != a ? x.Ay.getGuildEmoji(a) : [],
        f = x.Ay.getDisambiguatedEmojiContext(r?.getGuildId()).getCustomEmoji(),
        { topEmojis: E, newlyAddedEmojis: I } = (0, eC.b)({ guildId: r?.getGuildId(), pickerIntention: t }),
        { visibleTopEmojis: g, visibleNewlyAddedEmojis: h } = (0, eN.W)({
            topEmojis: E,
            newlyAddedEmojis: I,
            rowSize: i,
        });
    N.Ay.trackWithMetadata(
        t === eO.EmojiIntention.REACTION ? er.HAw.REACTION_PICKER_OPENED : er.HAw.EXPRESSION_PICKER_OPENED,
        {
            width: n,
            tab: ex.kx.EMOJI,
            badged: !1,
            num_expressions_favorites: c.length,
            num_animated_expressions_favorites: c.filter((e) => e?.animated).length,
            num_custom_expressions_favorites: c.filter(e_.Ay.isCustomEmoji).length,
            num_standard_expressions_favorites: c.filter((e) => null == e.id).length,
            num_expressions_frecent: d.length,
            num_animated_expressions_frecent: d.filter((e) => e?.animated).length,
            num_custom_expressions_frecent: d.filter(e_.Ay.isCustomEmoji).length,
            num_standard_expressions_frecent: d.filter((e) => null == e.id).length,
            num_current_guild_expressions: m.length,
            num_custom_expressions_total: f.size,
            num_expressions_top_server: g.length,
            num_animated_expressions_top_server: g.filter((e) => e.animated).length,
            num_expressions_newly_added: h.length,
            num_animated_expressions_newly_added: h.filter((e) => e.animated).length,
            ...(t === eO.EmojiIntention.REACTION && { is_burst: s }),
            ...(null != l && { location_object: l }),
        },
    );
}
var eT = n(206248),
    ey = n(403581),
    ej = n(724651),
    eR = n(732280),
    eb = n(783420),
    ev = n(158045),
    eL = n(202541);
let eM = { object: er.ZSU.BUTTON_CTA, section: er.JJy.SUPER_REACTION_PICKER };
function eD(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
        s = v.intl.string(v.t.eikz43),
        r = (0, eR.V)(),
        a = (0, ej.O)(),
        o = r?.subscriptionTrial,
        c = null != o || null != a,
        u = o?.skuId ?? eL.pe.TIER_2,
        d = c
            ? null != a
                ? v.intl.formatToPlainString(v.t.bkQ4bH, { percent: a.discount.amount })
                : (0, ev.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
            : v.intl.string(v.t.sEAnVH);
    return (0, l.jsx)(eb.A, {
        subscriptionTier: u,
        premiumModalAnalyticsLocation: eM,
        onSubscribeModalClose: (e) => {
            e && i();
        },
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(eT.H, {
                targetElementRef: t,
                shouldShow: n,
                onRequestClose: i,
                position: "bottom",
                assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                disableMediaViewer: !0,
                badge: c ? { type: "free_trial", variant: "expressive" } : void 0,
                title: v.intl.string(v.t.N4SCJ0),
                body: s,
                action: { text: d, variant: "expressive", icon: ey.t, onClick: r },
            });
        },
    });
}
var eP = n(435558),
    ew = n.n(eP),
    eU = n(837381),
    eG = n(460905),
    ek = n(775602),
    eF = n(713517),
    eJ = n(866665),
    eV = n(499373),
    eK = n(938612);
function eB(e) {
    let { onClick: t } = e,
        n = v.intl.string(b.default["3D0GLv"]);
    return (0, l.jsx)("div", {
        className: eK.n,
        children: (0, l.jsx)(eJ.m, {
            ariaHidden: !0,
            position: "right",
            text: n,
            children: (0, l.jsx)(T.D, {
                "aria-label": n,
                className: eK.x,
                onClick: t,
                children: (0, l.jsx)(eV.T, { size: "md", color: "currentColor" }),
            }),
        }),
    });
}
var eH = n(88218),
    eX = n(407698),
    eW = n(941971),
    eZ = n(531685),
    ez = n(406810),
    eY = n(27232),
    eq = n(369606),
    e$ = n(413249),
    eQ = n(141060),
    e0 = n(687966),
    e1 = n(115979),
    e2 = n(524501),
    e3 = n(926268),
    e5 = n(138134),
    e4 = n(7807),
    e8 = n(732139);
let e6 = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        i = (function (e) {
            switch (e) {
                case e8.R2.RECENT:
                    return ez.ClockIcon;
                case e8.R2.FAVORITES:
                    return eY.StarIcon;
                case e8.R2.TOP_GUILD_EMOJI:
                    return eq.TrophyIcon;
                case e8.R2.PEOPLE:
                    return eG.n;
                case e8.R2.NATURE:
                    return e$.p;
                case e8.R2.FOOD:
                    return eQ.i;
                case e8.R2.ACTIVITY:
                    return e0.GameControllerIcon;
                case e8.R2.TRAVEL:
                    return e1.h;
                case e8.R2.OBJECTS:
                    return e2.D;
                case e8.R2.SYMBOLS:
                    return e3.HeartIcon;
                case e8.R2.FLAGS:
                    return e5.FlagIcon;
                case e8.R2.PREMIUM_UPSELL:
                    return ey.t;
                case e8.R2.SOUNDMOJI:
                    return e4.J;
                default:
                    return;
            }
        })(t);
    return null == i ? null : (0, l.jsx)(i, { color: "currentColor", ...n });
});
var e7 = n(724511),
    e9 = n(132500),
    te = n(770335),
    tt = n(7584),
    tn = n(526292),
    ti = n(926972),
    ts = n(711014),
    tl =
        (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
        (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        i);
let tr = [eO.EmojiDisabledReasons.DISALLOW_EXTERNAL, eO.EmojiDisabledReasons.DISALLOW_CUSTOM];
var ta = (((s = {})[(s.PREMIUM = 0)] = "PREMIUM"), (s[(s.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), s),
    to = n(342379);
let tc = "expression-guild-",
    { itemIdForIndex: tu } = (0, eH.J)(tc),
    td = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tm = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tf = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    tE = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tI = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tg = (0, eg.xI)(to.__invalid_unicodeCategoryShortcutHeight),
    th = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tA = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tp = tf + tm + 2 * tI,
    t_ = td + tm,
    tN = t_ + (th + 2 * tA),
    tC = tf + tE + 2 * tI;
function tO(e) {
    let {
            activeIndex: t,
            categoryIndex: n,
            analyticsContext: i,
            categories: s,
            category: a,
            handleCategorySelect: c,
            isWindowFocused: u,
            useReducedMotion: d,
        } = e,
        m = r.useRef(null),
        { isHoveringOrFocusing: f } = (0, eF.A)(m),
        E = (0, eU.rm)(tu(n)),
        I = a.type === e8.s.GUILD ? null : a.id,
        g = t === n,
        h = a.type === e8.s.GUILD ? a.guild : null,
        A = (0, l.jsxs)(T.D, {
            innerRef: m,
            ...E,
            "aria-label": (0, eh.wt)(a, h),
            className: o()({
                [to.ZG]: null != h,
                [to.Bj]: null == h,
                [to.s6]: null == h && g,
                [to.xg]: a.type === e8.s.RECENT,
            }),
            onClick: () => {
                (null != h &&
                    eE.default.track(er.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: i?.location,
                        tab: ex.kx.EMOJI,
                        guild_id: h.id,
                    }),
                    c(n));
            },
            children: [
                (0, l.jsx)("div", {
                    className: to.a$,
                    children: (0, l.jsx)(eW.A, { hovered: f, selected: g, size: "small" }),
                }),
                null != h
                    ? (0, l.jsx)(e7.A, { guild: h, isSelected: g, shouldAnimate: !d && u, isLocked: a.isNitroLocked })
                    : null,
                null == h && null != I
                    ? (0, l.jsx)(e6, { categoryId: I, className: to.Yl, height: tf, width: tf, size: "custom" })
                    : null,
            ],
        }),
        p = s[n + 1],
        _ = null != p && a.type === e8.s.GUILD && p.type !== e8.s.GUILD;
    return null != h
        ? (0, l.jsxs)(r.Fragment, {
              children: [
                  (0, l.jsx)(eX.Q, { guild: h, children: A }),
                  _ ? (0, l.jsx)("hr", { className: to.ny }, "separator") : null,
              ],
          })
        : A;
}
let tx = (e) => {
    let {
            className: t,
            emojiListRef: n,
            sectionDescriptors: i,
            intention: s,
            channel: a,
            fallbackGuildId: c,
            shouldShowSoundmojiInEmojiPicker: u = !1,
            showOnlyUnicode: d = !1,
            onViewEmojiPacks: f,
        } = e,
        E = H.Om.useStore((e) => e.activeCategoryIndex),
        I = (function (e) {
            let { emojiListRef: t } = e,
                n = (0, X.RQ)((e) => e.searchQuery),
                i = r.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
            return r.useCallback(
                (e) => {
                    "" !== n ? ((0, X.Ri)(""), H.Om.setActiveCategoryIndex(e)) : i(e);
                },
                [i, n],
            );
        })({ sectionDescriptors: i, emojiListRef: n }),
        g = (0, A.p)(),
        h = (0, eh.ss)(s, a, { guildId: a?.guild_id ?? c, shouldShowSoundmojiInEmojiPicker: u }),
        p = r.useMemo(() => (d ? (0, eh.CQ)() : h), [h, d]),
        _ = r.useRef(null),
        N = (0, m.bG)([eZ.A], () => eZ.A.isFocused()),
        C = (0, m.bG)([ek.Ay], () => ek.Ay.useReducedMotion, []),
        O = r.useMemo(
            () =>
                ew().memoize(
                    (e, t) => {
                        let n = p[t];
                        if (null != n)
                            return (0, l.jsx)(
                                tO,
                                {
                                    activeIndex: E,
                                    analyticsContext: g,
                                    categories: p,
                                    category: n,
                                    categoryIndex: t,
                                    handleCategorySelect: I,
                                    isWindowFocused: N,
                                    useReducedMotion: C,
                                },
                                t,
                            );
                    },
                    (e, t) => t,
                ),
            [E, g, p, I, N, C],
        ),
        x = r.useMemo(() => [8, 8, 0, 8], []),
        S = r.useCallback(
            (e, t) => {
                let n = p[t];
                if (n.type === e8.s.RECENT) return tp;
                if (n.type === e8.s.GUILD) {
                    let e = p[t + 1];
                    return null != e && e.type !== e8.s.GUILD ? tN : t_;
                }
                return tC;
            },
            [p],
        ),
        {
            nonUnicodeCategoryCount: y,
            firstUnicodeCategoryIndex: j,
            firstUnicodeCategoryOffsetTop: R,
            rowCountBySection: b,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                i = 0;
            p.forEach((s) => {
                s.type === e8.s.GUILD
                    ? ((t += 1), (n += 1))
                    : s.type === e8.s.UNICODE
                      ? (i += 1)
                      : ((e += 1), (t += 1));
            });
            let s = tp + t * t_ + tN;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: s,
                rowCountBySection: [e, n, i],
            };
        }, [p]),
        [L, M] = r.useState(!0);
    r.useLayoutEffect(() => {
        M(y >= 7);
    }, [y]);
    let D = r.useCallback(
            (e) => {
                let t = _.current?.getListDimensions();
                null == t || (e + t.height - th >= R ? M(!1) : M(!0));
            },
            [R],
        ),
        P = r.useCallback(
            (e) => {
                (e(j), _.current?.scrollTo(R));
            },
            [R, j],
        ),
        w = r.useCallback(
            (e, t) => {
                let n = p[e];
                if (null == n) return 0;
                let i = L ? tg : 0;
                if (n.type === e8.s.RECENT) return t ? 0 : tE;
                if (n.type === e8.s.GUILD) {
                    let n = p[e + 1];
                    return null != n && n.type !== e8.s.GUILD ? (t ? th + -2 * tA + tm + i : tm) : t ? i : tm;
                }
                return t ? tm + i : 2 * tm;
            },
            [p, L],
        ),
        U = r.useMemo(
            () =>
                function (e, t) {
                    return (0, l.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        G = L ? "shortcut" : "hiddenshortcut";
    return (0, l.jsx)(eH.A, {
        categoryListRef: _,
        expressionsListRef: n,
        className: t,
        store: H.Om,
        categories: p,
        listPadding: x,
        onScroll: D,
        renderCategoryListItem: O,
        renderSection: U,
        rowCount: p.length,
        categoryHeight: S,
        getScrollOffsetForIndex: w,
        rowCountBySection: b,
        navId: "emoji-picker-categories",
        itemIdPrefix: tc,
        emojiPacksHeader: null != f ? (0, l.jsx)(eB, { onClick: f }) : null,
        children: (e) =>
            y >= 7 &&
            (0, l.jsx)(
                T.D,
                {
                    "aria-hidden": !L,
                    "aria-label": v.intl.string(v.t.dT0ctw),
                    className: o()(to.KB, { [to.h_]: !L }),
                    tabIndex: L ? 0 : -1,
                    onClick: () => P(e),
                    children: (0, l.jsx)(eG.n, { size: "custom", color: "currentColor", height: tf, width: tf }),
                },
                G,
            ),
    });
};
var tS = n(49999),
    tT = n(860197);
let ty = function (e) {
    let { markAsDismissed: t } = e;
    return (0, l.jsxs)(Q.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tT.iE,
        children: [
            (0, l.jsx)(e3.HeartIcon, { size: "md", color: "currentColor", className: tT.Kk }),
            (0, l.jsx)("div", {
                className: tT.Qs,
                children: (0, l.jsx)(Q.E, { variant: "text-xs/normal", children: v.intl.string(v.t.xdRf69) }),
            }),
            (0, l.jsx)(T.D, {
                onClick: () => t(tS.i.UNKNOWN),
                children: (0, l.jsx)(q.P, { size: "md", color: "currentColor", className: tT.VN }),
            }),
        ],
    });
};
var tj = n(202091),
    tR = n(717421),
    tb = n(343032),
    tv = n(683063),
    tL = n(131607),
    tM = n(748798);
let tD = { tension: 750, mass: 2.5, friction: 70 };
function tP(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
        s = (0, m.bG)([ek.Ay], () => ek.Ay.useReducedMotion),
        a = ef.default.getCurrentUser(),
        c = null != a && !(0, ev.TW)(a),
        u = c ? [] : [f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, E] = (0, tL.kn)(u),
        [I, g] = r.useState(!1),
        [h, A] = (0, tR.z)(() => ({})),
        p = (0, tj.animated)(tb.i);
    r.useEffect(() => {
        let e = d === f.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (E(tS.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, E]);
    let _ = I ? v.intl.string(v.t["Osi/uy"]) : t && !c ? v.intl.string(v.t["5cRA/b"]) : v.intl.string(v.t.buV4av),
        N = I ? v.intl.string(v.t.ORK94p) : void 0;
    return (0, l.jsx)(tv.u, {
        position: "top",
        title: N,
        body: _,
        asset: (0, l.jsx)(ey.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: I,
        children: (0, l.jsx)(T.D, {
            innerRef: i,
            "aria-label": _,
            "aria-pressed": t,
            onClick: function () {
                (A({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tD }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tM.Pf, { [tM.wM]: t }),
            children: (0, l.jsx)(p, {
                style: s ? void 0 : h,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tM.Kk,
            }),
        }),
    });
}
var tw = n(821609),
    tU = n(644508),
    tG = n(824832),
    tk = n(267102),
    tF = n(242812);
function tJ(e) {
    let { channel: t, closePopout: n } = e,
        i = r.useRef(null),
        s = r.useRef(0),
        [a, o] = r.useState(!1),
        [c, u] = r.useState(!1),
        d = (0, tk.Us)() === er.BRT.OVERLAY,
        m = c || a,
        f = r.useCallback(
            async (e, i, l) => {
                (u(!0),
                    n(),
                    await (0, tU.f)({
                        userImage: { data: e, file: i, image: l },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: er.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? er.liQ.GUILD_CHANNEL : er.liQ.DM_CHANNEL,
                        },
                    }),
                    (s.current += 1),
                    u(!1));
            },
            [t, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eJ.m, {
                asContainer: !0,
                text: d ? v.intl.string(v.t.RMbedC) : null,
                children: (0, l.jsx)(tw.$, {
                    text: v.intl.string(v.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        i.current?.activateUploadDialogue();
                    },
                    disabled: m || d,
                }),
            }),
            (0, l.jsx)("div", {
                className: tF.F,
                children: (0, l.jsx)(tG.Ay, { ref: i, onChange: f, setLoading: o, disabled: m }, s.current),
            }),
        ],
    });
}
n(667532);
var tV = n(833272),
    tK = n(82495),
    tB = n(260762),
    tH = n(915089),
    tX = n(650583),
    tW = n(683829);
let tZ = (0, tH.Ld)(),
    tz = tV.A.convert.fromCodePoint("1f44f"),
    tY = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tq(e) {
    switch (tV.A.convert.toCodePoint(e)) {
        case "1f3fb":
            return v.intl.string(v.t["BVK5b/"]);
        case "1f3fc":
            return v.intl.string(v.t.xJWOK8);
        case "1f3fd":
            return v.intl.string(v.t["MB+T5g"]);
        case "1f3fe":
            return v.intl.string(v.t.MODud2);
        case "1f3ff":
            return v.intl.string(v.t["0uzqsc"]);
        default:
            return v.intl.string(v.t.bGN1ow);
    }
}
let t$ = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: s, index: r } = e,
        a = (0, eU.rm)(`item-${r}`),
        o = e_.Ay.getURL(tz + n),
        c = (0, tR.z)({ opacity: 1, from: { opacity: +!t }, delay: s }, "animate-always");
    return (0, l.jsx)(T.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => i(n),
        className: tW.B6,
        children: (0, l.jsx)(tj.animated.div, {
            "aria-label": tq(n),
            className: tW.g4,
            style: { backgroundImage: `url("${o}")`, ...c },
        }),
    });
};
function tQ(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
        s = (0, tB.A)("diversity"),
        a = (0, tR.z)({ height: (tY + 14) * (tt.W$.length + 1), from: { height: tY + 14 }, config: { duration: 125 } }),
        o = r.useRef(s);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let c = ["", ...tt.W$];
    return (
        ew().remove(c, (e) => e === n),
        c.unshift(n),
        (0, l.jsx)(eU.hD, {
            navigator: s,
            children: (0, l.jsx)(eU.PR, {
                children: (e) => {
                    let { ref: n, ...s } = e;
                    return (0, l.jsx)(tj.animated.div, {
                        ...s,
                        id: t,
                        ref: n,
                        className: tW.J6,
                        style: a,
                        role: "listbox",
                        children: c.map((e, t) =>
                            (0, l.jsx)(t$, { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i }, t),
                        ),
                    });
                },
            }),
        })
    );
}
let t0 = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
        s = e_.Ay.getURL(tz + n),
        [a, c] = r.useState(!1),
        u = (0, tK.A)(null, () => c(!1)),
        d = r.useRef(null);
    return (0, l.jsxs)("div", {
        ref: u,
        className: o()(tW.fx, i),
        children: [
            (0, l.jsx)(T.D, {
                innerRef: d,
                className: tW.Dj,
                onClick: function () {
                    c(!0);
                },
                "aria-label": v.intl.formatToPlainString(v.t["2SfnMp"], { skinTone: tq(n) }),
                "aria-haspopup": !0,
                "aria-expanded": a,
                "aria-controls": tZ,
                tabIndex: a ? -1 : 0,
                children: (0, l.jsx)("div", { className: tW.g4, style: { backgroundImage: `url("${s}")` } }),
            }),
            a
                ? (0, l.jsx)("div", {
                      onKeyDown: function (e) {
                          e.key === tX.dh.ESCAPE
                              ? (e.stopPropagation(), c(!1), null != d.current && d.current.focus())
                              : "Tab" === e.key && c(!1);
                      },
                      children: (0, l.jsx)(tQ, {
                          id: tZ,
                          selectedSurrogate: n,
                          onClick: function (e) {
                              ((0, g.dK)(e), c(!1), t.current?.focus());
                          },
                      }),
                  })
                : null,
        ],
    });
};
var t1 = n(462180),
    t2 = n(602034),
    t3 = n(683438);
let t5 = r.memo(function (e) {
    let {
            emojiListRef: t,
            gridNavigatorId: n,
            onKeyDown: i,
            onFocus: s,
            autoFocus: a,
            defaultSearchPlaceholder: o,
            ref: c,
        } = e,
        u = r.useRef(null),
        d = (0, X.RQ)((e) => e.searchQuery),
        [m, f, E] = H.Om.useStore((e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted], t1.x),
        I = r.useCallback(
            (e) => {
                (H.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                    H.Om.setInspectedExpressionPosition(0, 0),
                    H.Om.setSearchPlaceholder(null),
                    (0, X.Ri)(e),
                    t.current?.scrollTo(0));
            },
            [t],
        ),
        g = r.useCallback(() => {
            I("");
        }, [I]);
    return (
        r.useImperativeHandle(c, () => ({ focus: () => u.current?.focus() })),
        (0, l.jsx)(t3.I, {
            autoFocus: a,
            query: d,
            ref: u,
            placeholder: f ?? o,
            onClear: g,
            onKeyDown: function (e) {
                switch (e.key) {
                    case tX.dh.ARROW_LEFT:
                    case tX.dh.ARROW_RIGHT:
                    case tX.dh.ARROW_UP:
                    case tX.dh.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault();
                }
                i(e);
            },
            onFocus: s,
            onChange: I,
            inputProps: {
                role: "combobox",
                "aria-label": v.intl.string(v.t.tCauZX),
                "aria-haspopup": "grid",
                "aria-autocomplete": "list",
                "aria-controls": n,
                "aria-expanded": !0,
                ...(E ? { "aria-activedescendant": (0, t2.Aq)(n, m.columnIndex, m.rowIndex) } : void 0),
            },
        })
    );
});
var t4 = n(381575);
let t8 = function (e) {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: s,
            emojiListRef: r,
            onKeyDown: a,
            onFocus: c,
            autoFocus: u,
            searchBarRef: d,
            diversitySurrogate: m,
            isBurstReaction: f,
            onBurstReactionToggle: E,
            burstToggleRef: I,
            renderHeader: g,
            showAddEmojiButton: h = !0,
            closePopout: A,
        } = e,
        p = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(t5, {
                    emojiListRef: r,
                    gridNavigatorId: e8.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: c,
                    autoFocus: u,
                    defaultSearchPlaceholder: (0, eh.wT)(i, f),
                }),
                i === eO.EmojiIntention.REACTION ? (0, l.jsx)(tP, { checked: f, onClick: E, buttonRef: I }) : null,
                n ?? (0, l.jsx)(t0, { searchBarRef: d, className: t4.fx, selectedSurrogate: m }),
                i !== eO.EmojiIntention.NO_CUSTOM_EMOJI && h ? (0, l.jsx)(tJ, { channel: t, closePopout: A }) : null,
            ],
        });
    return (0, l.jsx)("div", { className: o()(t4.wx, s), children: null != g ? g(p) : p });
};
var t6 = n(182922),
    t7 = n(363195),
    t9 = n(486020),
    ne = n(977566);
function nt(e) {
    return null != e && "animated" in e;
}
let nn = r.memo(function (e) {
    let t,
        i,
        { className: s, emojiGrid: a, guildId: o, pickerIntention: c, channel: u } = e,
        d = H.Om.useStore((e) => e.inspectedExpressionPosition),
        f = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (f?.type) {
        case tl.EMOJI:
            t = f?.emoji;
            break;
        case tl.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: f?.guildId, allNamesString: f?.name };
            break;
        case tl.SOUNDMOJI:
        default:
            t = null;
    }
    let E = (0, m.bG)([ei.A], () => (null !== t && t.type === te.i.GUILD ? ei.A.getGuild(t.guildId) : null), [t]),
        I = (0, m.bG)([eZ.A], () => eZ.A.isFocused()),
        g = (0, m.bG)([ek.Ay], () => ek.Ay.useReducedMotion, []),
        h = ed.Sf.useSetting(),
        A = (0, eh.O7)(o, nt(t) ? t : null),
        p = (0, m.bG)([x.Ay], () => x.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: _ } = (0, eC.A)(o, c),
        N = f?.type === tl.EMOJI ? f.subCategory : e8.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    nt(t) &&
                    N !== e8.tm.NONE &&
                    (N === e8.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === te.i.GUILD &&
                        (0, B.mz)(t.guildId, _[0].id),
                    null != d.source &&
                        (0, eh.yB)({
                            emoji: t,
                            subCategory: N,
                            position: f.columnIndex + 1,
                            newlyAddedHighlight: N === e8.tm.NEWLY_ADDED_EMOJI && K.isNewerThanLastSeen(o, t.id),
                        }));
            };
        }),
        null == t)
    )
        return null;
    let C = (function (e, t) {
            let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: s, theme: r } = t;
            if (nt(e)) {
                let t = null != e.id ? t9.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 }) : e.url;
                return "" === t
                    ? (0, l.jsx)(Q.E, {
                          variant: "text-md/normal",
                          className: ne.J_,
                          children: "surrogates" in e ? e.surrogates : null,
                      })
                    : (0, l.jsx)("img", { alt: (0, e_.N)(e) ?? "", src: t, className: ne.Zg });
            }
            if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
            {
                let t = n(619508),
                    i = n(404828),
                    a = n(600003),
                    o = n(318121);
                return s.has(e.guildId)
                    ? (0, l.jsx)("img", { className: ne.Kk, src: (0, Y.M)(r) ? a : o, alt: "" })
                    : (0, l.jsx)("img", { className: ne.Kk, src: (0, Y.M)(r) ? t : i, alt: "" });
            }
        })(t, { allowAnimatedEmoji: h, sectionsExpandedFromThreeRows: p, theme: t7.A.theme }),
        O =
            null != E
                ? (0, l.jsx)(e7.A, { className: ne.__invalid_guildIcon, guild: E, shouldAnimate: !g && I })
                : null;
    i =
        "EXPAND_OR_COLLAPSE_EMOJI" === t.type
            ? p.has(t.guildId)
                ? v.intl.string(v.t["/K2RDH"])
                : v.intl.string(v.t.NZI2Zk)
            : (0, e_.N)(t);
    let S = (function (e) {
        let { inspectedEmoji: t, guild: n } = e,
            i = nt(t);
        return null != n && i ? v.intl.format(v.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: u, guildId: o, intention: c, guild: E });
    return (0, l.jsx)(t6.A, {
        className: s,
        graphicPrimary: C,
        graphicSecondary: O,
        titlePrimary: i,
        titleSecondary: S,
        isFavorite: A,
        emojiSubCategory: N,
    });
});
n(30146);
var ni = n(607399),
    ns = n(765178),
    nl = n(537652),
    nr = n(962125),
    na = n(240864),
    no = n(286509),
    nc = n(89366),
    nu = n(10392),
    nd = n(82498),
    nm = n(202639),
    nf = n(414872),
    nE = n(285373),
    nI = n(559106),
    ng = n(304072),
    nh = n(189551),
    nA = n(289873),
    np = n(796774),
    n_ = n(209932),
    nN = n(817232),
    nC = n(576705);
n(980504);
var nO = n(818348),
    nx = n(821425);
let nS = r.memo(function (e) {
    let t,
        n,
        i,
        s,
        { channelId: a, onSelectSoundmoji: o } = e,
        c = (0, m.bG)([n_.A], () => !n_.A.isFetching() && !n_.A.hasFetchedAllSounds(), []),
        u = (0, m.bG)([eA.A], () => eA.A.getChannel(a)),
        d =
            ((t = (0, m.bG)([ef.default], () => ev.Ay.canUseSoundboardEverywhere(ef.default.getCurrentUser()))),
            (n = (0, m.bG)([n_.A], () => n_.A.getSoundsForGuild("0"))),
            (i = (0, m.yK)([ei.A], () => ei.A.getGuildIds())),
            (s = r.useMemo(() => nC.A.can(nO.xB.USE_EXTERNAL_SOUNDS, u), [u])),
            r.useMemo(() => {
                let e = [];
                if (t && s) {
                    let t = i.flatMap((e) => n_.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...ew().sampleSize(t, 4));
                } else if (u?.guild_id != null) {
                    let t = n_.A.getSoundsForGuild(u?.guild_id)?.filter((e) => e.available);
                    e.push(...ew().sampleSize(t, 4));
                }
                return (e.length < 4 && e.push(...ew().sampleSize(n ?? [], 4 - e.length)), e);
            }, [s, u?.guild_id, n, i, t]));
    return (r.useEffect(() => {
        (0, np.E7)();
    }, [c]),
    0 === d.length)
        ? (0, l.jsx)(nA.y, {})
        : (0, l.jsx)("div", {
              className: nx.q,
              children: d.map((e, t) =>
                  (0, l.jsx)(
                      nN.Ay,
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
var nT = n(594061),
    ny = n(771104),
    nj = n(442433),
    nR = n(147421),
    nb = n(723702),
    nv = n(140735),
    nL = n(194261),
    nM = n(703413);
let nD = (e) => {
    let { src: t, alt: n, size: i, "aria-label": s, className: a } = e,
        c = r.useRef(null),
        u = r.useRef(!1),
        d = u.current ? nM.S : nM.Y;
    return (0, l.jsx)("img", {
        className: o()(d, a),
        alt: n,
        src: t,
        ref: c,
        "aria-label": s,
        style: { backgroundSize: i, height: i, width: i },
        onLoad: u.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != c.current &&
                          ((u.current = !0), c.current.classList.remove(nM.Y), c.current.classList.add(nM.S));
                  });
              },
    });
};
var nP = n(955388);
let nw = ew().memoize(
        (e) =>
            `${e * eO.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(tt.Ay.numNonDiversitySprites / eO.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nU = ew().memoize(
        (e) =>
            `${e * eO.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(tt.Ay.numDiversitySprites / eO.EmojiSprites.DiversityPerRow)}px`,
    ),
    nG = r.memo(function (e) {
        let { emoji: t, size: i, surrogateCodePoint: s, allowAnimatedEmoji: a, "aria-label": c, isLocked: u } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : t9.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: eO.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, l.jsx)(nD, {
                              className: nP.N1,
                              "aria-label": c,
                              src: e,
                              size: i,
                              alt: (0, e_.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, l.jsx)("div", {
                    className: o()(nP.xA, { [nP.N1]: u }),
                    style: (function (e, t, i) {
                        let s, l, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((s = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                              (l = nU(i)),
                              (r = eO.EmojiSprites.DiversityPerRow))
                            : ((s = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                              (l = nw(i)),
                              (r = eO.EmojiSprites.NonDiversityPerRow));
                        let o = (-a % r) * i,
                            c = -Math.floor(a / r) * i;
                        return {
                            backgroundImage: `url('${s}')`,
                            backgroundPosition: `${o}px ${c}px`,
                            backgroundSize: l,
                            height: i,
                            width: i,
                        };
                    })(t, s, i),
                    children: (0, l.jsx)(nv.A, { children: c }),
                });
            })();
        return (0, l.jsxs)(r.Fragment, {
            children: [
                d,
                u
                    ? (0, l.jsx)("div", {
                          className: nP.iD,
                          children: (0, l.jsx)(nL.LockIcon, { size: "xs", color: "currentColor", className: nP.fi }),
                      })
                    : null,
            ],
        });
    });
var nk = n(537911);
function nF(e) {
    let t,
        {
            emoji: n,
            isFavorite: i,
            isLargeSize: s,
            isMediumSize: r,
            isInspected: a,
            isDisabled: c,
            showPulse: u,
            columnIndex: d,
            rowIndex: f,
            size: E,
            surrogateCodePoint: I,
            allowAnimatedEmoji: g,
            selectedItemClassName: h,
            inNitroLockedSection: A,
            ref: p,
            ..._
        } = e,
        N = (0, m.bG)([ei.A], () => (n.type === te.i.GUILD ? ei.A.getGuild(n.guildId) : void 0), [n]);
    return (0, l.jsx)(nI.vN, {
        children: (0, l.jsx)("button", {
            ..._,
            className: o()(nk._X, { [nk.lG]: s, [nk.Lh]: r, [nk.Bx]: a, [h ?? ""]: a, [nk.TV]: u }),
            "data-type": W.g.EMOJI,
            "data-id": n.id,
            "data-name": n.name,
            "data-surrogates": "surrogates" in n ? n.surrogates : null,
            "data-animated": n.animated ? "true" : null,
            ref: p,
            children: (0, l.jsx)(nG, {
                "aria-label":
                    ((t = (0, e_.N)(n)),
                    (N?.name != null &&
                        (t = v.intl.formatToPlainString(v.t["nXv4/B"], { names: t, guildName: N.name })),
                    i)
                        ? v.intl.formatToPlainString(v.t["9FI9Z0"], { names: t })
                        : t),
                columnIndex: d,
                rowIndex: f,
                emoji: n,
                size: E,
                surrogateCodePoint: I,
                allowAnimatedEmoji: g,
                isLocked: c && !A,
            }),
        }),
    });
}
function nJ(e) {
    let {
            descriptor: t,
            emojiItemKey: i,
            isInspected: s,
            rowIndex: a,
            channelGuildId: o,
            onInspect: c,
            onSelect: u,
            isScrolling: d,
            isUsingKeyboardNavigation: f,
            showEmojiFavoriteTooltip: E,
            surrogateCodePoint: I,
            selectedItemClassName: g,
            getEmojiItemProps: h,
            isMediumSize: A,
            isLargeSize: p,
            pulseItemKey: _,
            allowAnimatedEmoji: N,
            setPulseItemKey: C,
            messageId: O,
            isBurstReaction: S,
            rowPosition: T,
            inNitroLockedSection: y,
        } = e,
        [j, R] = r.useState(""),
        b = (0, m.bG)([ek.Ay], () => ek.Ay.useReducedMotion),
        L = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(o), [o]),
        M = r.useRef(null),
        { emoji: D, size: P, isDisabled: w, columnIndex: U } = t;
    function G() {
        d.current || f.current || c(t);
    }
    let { ref: k, tabIndex: F, onFocus: J, ...V } = h(U, a) ?? {},
        K =
            j !== `${U}:${a}`
                ? (0, l.jsx)(nF, {
                      ref: k,
                      emoji: D,
                      isFavorite: L.isFavoriteEmojiWithoutFetchingLatest(D),
                      isLargeSize: p,
                      isMediumSize: A,
                      isInspected: s,
                      isDisabled: w,
                      showPulse: _ === i,
                      allowAnimatedEmoji: N,
                      onFocus: J ?? G,
                      onMouseMove: G,
                      onClick: (e) => {
                          if (
                              null != M.current &&
                              null != T &&
                              null != O &&
                              !e.shiftKey &&
                              null != D.name &&
                              S &&
                              !b &&
                              N
                          ) {
                              let e = null == D.id ? tt.Ay.convertNameToSurrogate(D.name) : D.name,
                                  t = M.current.getBoundingClientRect();
                              ((t.x = T.x + (U + 1) * P), R(`${U}:${a}`), (0, nR.h)(O, e, D.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || f.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !x.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(D) &&
                                  C(i),
                                  (0, eu.sF)(eu._2.FAVORITE_EMOJI_TOOLTIP),
                                  u(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nj.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("638221"),
                                  n.e("73500"),
                                  n.e("377766"),
                                  n.e("496715"),
                                  n.e("293697"),
                                  n.e("904774"),
                                  n.e("446132"),
                              ]).then(n.bind(n, 233503));
                              return (t) => (0, l.jsx)(e, { ...t });
                          });
                      },
                      tabIndex: F,
                      columnIndex: U,
                      rowIndex: a,
                      size: P,
                      surrogateCodePoint: I,
                      selectedItemClassName: g,
                      inNitroLockedSection: y,
                  })
                : null;
    return (0, r.createElement)(
        "li",
        { ...V, key: i, ref: M },
        E
            ? (0, l.jsx)(eJ.m, {
                  text: v.intl.formatToPlainString(v.t.glqNsf, { key: (0, nb.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: K,
              })
            : K,
    );
}
let nV = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: i,
            onSelect: s,
            onSelectSoundmoji: a,
            onInspect: c,
            surrogateCodePoint: u,
            getEmojiItemProps: d,
            getEmojiRowProps: m,
            isScrolling: f,
            isUsingKeyboardNavigation: E,
            rowIndex: I,
            allowAnimatedEmoji: g,
            showEmojiFavoriteTooltip: h,
            channelGuildId: A,
            category: p,
            selectedItemClassName: _,
            channelId: N,
            messageId: C,
            isBurstReaction: O,
            inNitroLockedSection: x,
            handleScrollUpOnSectionCollapse: S,
        } = e,
        T = n(619508),
        y = n(404828),
        j = n(600003),
        R = n(318121),
        b = n(443336),
        L = n(258901),
        M = n(135974),
        D = n(8013),
        P = (0, ee.Ay)(),
        w = H.Om.getState(),
        [U, G] = r.useState(w.inspectedExpressionPosition),
        [k, F] = (0, ng.A)(null, 300),
        J = r.useRef(null);
    (r.useEffect(
        () =>
            H.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => G(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nT.bW.loadIfNecessary();
        }, []));
    let V = i === e8.as.LARGE,
        B = i === e8.as.MEDIUM;
    function X(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case tl.EXPAND_OR_COLLAPSE_EMOJIS: {
                let { visibleRowIndex: n, columnIndex: i } = e,
                    a = U.rowIndex === n && U.columnIndex === i,
                    u = e.sectionCollapsedToThreeRows
                        ? a
                            ? (0, Y.M)(P)
                                ? L
                                : D
                            : (0, Y.M)(P)
                              ? T
                              : y
                        : a
                          ? (0, Y.M)(P)
                              ? b
                              : M
                          : (0, Y.M)(P)
                            ? j
                            : R,
                    m = v.intl.string(e.sectionCollapsedToThreeRows ? v.t.NZI2Zk : v.t["/K2RDH"]);
                return (function () {
                    let {
                            onMouseEnter: n,
                            onMouseLeave: i,
                            handleSelect: s,
                            icon: a,
                            ariaLabel: u,
                            shouldShowRoundHighlight: m,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: g, columnIndex: h } = e,
                        { ref: A, tabIndex: p, onFocus: N, ...C } = d(h, I) ?? {},
                        O = U.rowIndex === g && U.columnIndex === h;
                    function x() {
                        f.current || E.current || c(e);
                    }
                    return (0, r.createElement)(
                        "li",
                        { ...C, key: t },
                        (0, l.jsx)(nI.vN, {
                            children: (0, l.jsx)("button", {
                                "aria-label": u,
                                ref: A,
                                className: o()(nk._X, {
                                    [nk.lG]: V,
                                    [nk.Lh]: B,
                                    [nk.Bx]: O && !m,
                                    [_ ?? ""]: O,
                                    [nk.TV]: k === t,
                                }),
                                onFocus: N ?? x,
                                onMouseOver: x,
                                onMouseEnter: n,
                                onMouseLeave: i,
                                onClick: s,
                                tabIndex: p,
                                children: a,
                            }),
                        }),
                    );
                })({
                    handleSelect: function (t) {
                        e.type !== tl.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            f.current ||
                                E.current ||
                                (s(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nh.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || S(),
                                eE.default.track(er.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, l.jsx)("img", { className: nk.Kk, src: u, alt: "" }),
                    ariaLabel: m,
                    shouldShowRoundHighlight: !0,
                });
            }
            case tl.EMOJI: {
                let { columnIndex: n, visibleRowIndex: i } = e,
                    r = U.rowIndex === i && U.columnIndex === n;
                return (0, l.jsx)(
                    nJ,
                    {
                        rowIndex: I,
                        descriptor: e,
                        emojiItemKey: t,
                        isInspected: r,
                        isScrolling: f,
                        isUsingKeyboardNavigation: E,
                        surrogateCodePoint: u,
                        allowAnimatedEmoji: g,
                        selectedItemClassName: _,
                        onSelect: s,
                        onInspect: c,
                        channelGuildId: A,
                        getEmojiItemProps: d,
                        isMediumSize: B,
                        isLargeSize: V,
                        pulseItemKey: k,
                        setPulseItemKey: F,
                        showEmojiFavoriteTooltip: h,
                        messageId: C,
                        isBurstReaction: O,
                        rowPosition: J?.current?.getBoundingClientRect(),
                        inNitroLockedSection: x,
                    },
                    t,
                );
            }
            case tl.SOUNDMOJI:
                return;
        }
    }
    function W(e) {
        return (0, l.jsx)("ul", {
            ...m(I),
            className: o()(nk.ND, { [nk.HO]: V, [nk.X$]: B }),
            ref: J,
            children: e.map(X),
        });
    }
    if (p === e8.R2.SOUNDMOJI)
        return (0, l.jsx)("ul", {
            className: nk.ND,
            ref: J,
            children: (0, l.jsx)(nS, { channelId: N, onSelectSoundmoji: a }),
        });
    if (p !== e8.s.TOP_GUILD_EMOJI) return W(t);
    let Z = t.filter(
            (e) =>
                e.subCategory === e8.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === e8.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === te.i.GUILD &&
                    !K.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        z = t.filter(
            (e) =>
                e.subCategory === e8.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === te.i.GUILD &&
                K.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === z.length
        ? W(t)
        : (0, l.jsxs)("div", {
              className: nk.Ng,
              children: [
                  (0, l.jsx)("div", { className: o()(nk.V6, { [nk.$3]: 0 === Z.length }), children: W(Z) }),
                  (0, l.jsxs)("div", {
                      className: nk.bc,
                      children: [
                          (0, l.jsx)("div", {
                              className: o()(nk.eE, { [nk.eM]: 1 === z.length, [nk.Wk]: Z.length > 0 }),
                              children: W(z),
                          }),
                          (0, l.jsxs)("div", {
                              className: o()(nk.lD, { [nk.EI]: V, [nk.qU]: B, [nk.Wk]: Z.length > 0 }),
                              children: [
                                  (0, l.jsx)(ny.A, { foreground: nk.rI }),
                                  (0, l.jsx)(Q.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-overlay-light",
                                      children: v.intl.string(v.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var nK = n(618723);
let nB = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nH = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nX = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nW = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nZ = (0, eg.xI)(E.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nz = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nY = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nq = r.memo(function (e) {
        let t,
            n,
            {
                diversitySurrogate: i,
                emojiGrid: s,
                emojiListRef: a,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                setUpsellConfigs: f,
                sectionDescriptors: E,
                rowCountBySection: I,
                collapsedSections: g,
                setCollapsedSections: h,
                getEmojiItemProps: p,
                getEmojiRowProps: N,
                rowCount: O,
                isUsingKeyboardNavigation: x,
                channelGuildId: S,
                channelId: y,
                messageId: j,
                isBurstReaction: R,
                listHeaderClassName: b,
            } = e,
            L = r.useRef(!1),
            M = H.Om.useStore((e) => e.activeCategoryIndex),
            D = (0, X.RQ)((e) => e.searchQuery),
            P = ed.Sf.useSetting(),
            w = (0, m.bG)([ef.default], () => ef.default.getCurrentUser()),
            U = (0, eI.ki)(w),
            { location: G } = (0, A.p)(),
            { analyticsLocations: k } = (0, C.Ay)(),
            [F, J] = r.useState(0),
            [V, K] = r.useState(!1),
            {
                listPadding: B,
                renderRow: z,
                renderSection: Y,
                renderSectionHeader: q,
                renderSectionFooter: $,
                sectionMarginBottom: ee,
                sectionHeaderHeight: et,
                sectionFooterHeight: en,
            } = (function (e) {
                let {
                        collapsedSections: t,
                        diversitySurrogate: n,
                        emojiGrid: i,
                        emojiSize: s,
                        onEmojiSelect: a,
                        onSelectSoundmoji: c,
                        searchQuery: u,
                        sectionDescriptors: d,
                        setCollapsedSections: f,
                        getEmojiItemProps: E,
                        getEmojiRowProps: I,
                        isScrolling: g,
                        isUsingKeyboardNavigation: h,
                        allowAnimatedEmoji: p,
                        channelGuildId: _,
                        channelId: N,
                        messageId: C,
                        isBurstReaction: O,
                        listHeaderClassName: x,
                        activeSectionIndex: S,
                        emojiListRef: y,
                    } = e,
                    j = (0, A.p)(),
                    R = r.useRef(er.An1),
                    b = r.useMemo(() => ("" !== n ? tV.A.convert.toCodePoint(n) : ""), [n]),
                    L = r.useCallback(
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
                    D = r.useCallback(
                        function (e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = new Set(t),
                                s = t.has(e);
                            (s ? i.delete(e) : i.add(e),
                                null != n &&
                                    eE.default.track(er.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: j.location,
                                        tab: ex.kx.EMOJI,
                                        collapsed: !s,
                                        guild_id: n.id,
                                    }),
                                e === e8.R2.SOUNDMOJI &&
                                    eE.default.track(er.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !s }),
                                f(i));
                        },
                        [j, t, f],
                    ),
                    P = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            i = e.type === tl.SOUNDMOJI ? null : e.type === tl.EMOJI ? (0, e_.N)(e.emoji) : e.name;
                        (R.current !== er.An1 && window.cancelAnimationFrame(R.current),
                            (R.current = window.requestAnimationFrame(() => {
                                (H.Om.setInspectedExpressionPosition(t, n, W.t.MOUSE_EVENT),
                                    H.Om.setSearchPlaceholder(i),
                                    (R.current = er.An1));
                            })));
                    }, []),
                    w = (0, m.bG)([eu.HP], () => eu.HP.hasHotspot(eu._2.FAVORITE_EMOJI_TOOLTIP), []),
                    U = r.useMemo(
                        () =>
                            ew().memoize((e, t) => {
                                let n = i[e],
                                    r = d[t.sectionIndex];
                                return (0, l.jsx)(
                                    nV,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: s,
                                        surrogateCodePoint: b,
                                        onInspect: P,
                                        onSelect: a,
                                        onSelectSoundmoji: c,
                                        getEmojiItemProps: E,
                                        getEmojiRowProps: I,
                                        isScrolling: g,
                                        isUsingKeyboardNavigation: h,
                                        rowIndex: e,
                                        allowAnimatedEmoji: p,
                                        showEmojiFavoriteTooltip: w,
                                        channelGuildId: _,
                                        category: r.sectionId,
                                        selectedItemClassName: nK.__invalid_selectedItem,
                                        channelId: N,
                                        messageId: C,
                                        isBurstReaction: O,
                                        inNitroLockedSection: r.isNitroLocked,
                                        handleScrollUpOnSectionCollapse: function () {
                                            y.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                                        },
                                    },
                                    e,
                                );
                            }),
                        [i, d, s, b, P, a, c, E, I, g, h, p, w, _, N, C, O, y],
                    );
                r.useEffect(() => () => U.cache?.clear?.(), [U]);
                let G = r.useMemo(
                        () =>
                            ew().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: i, categoryId: s, type: r, sectionId: a } = n;
                                if (r === e8.s.SEARCH_RESULTS) return;
                                let c =
                                        r === e8.s.GUILD
                                            ? null != i
                                                ? (0, l.jsx)(e7.A, { guild: i, height: 16, width: 16 })
                                                : null
                                            : null != s
                                              ? (0, l.jsx)(e6, { categoryId: s, height: 16, width: 16, size: "custom" })
                                              : null,
                                    u = i?.name;
                                null != s && (u = (0, eh.Nu)(s, i?.name));
                                let m = S === e,
                                    f = n.isNitroLocked,
                                    E = f && !m,
                                    I = f && m,
                                    g =
                                        r === e8.s.SOUNDMOJI
                                            ? (0, l.jsx)(T.D, {
                                                  className: nK.f3,
                                                  onClick: () => {
                                                      ((0, X.U)(ex.kx.SOUNDBOARD),
                                                          eE.default.track(
                                                              er.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK,
                                                          ));
                                                  },
                                                  children: v.intl.string(v.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, l.jsx)(
                                    no.A,
                                    {
                                        className: o()(nK.wx, x, { [nK.RA]: E, [nK.sp]: I }),
                                        icon: c,
                                        isCollapsed: t.has(a),
                                        onClick: () => D(a, i),
                                        trailing: g,
                                        children: u,
                                    },
                                    a,
                                );
                            }),
                        [d, t, D, x, S],
                    ),
                    k = (0, tn.k0)(),
                    F = r.useCallback(
                        (e, n) => {
                            let i = d[e],
                                s = M(e),
                                r = L(e);
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "rowgroup",
                                    className: o()(nK.Wy, {
                                        [nK.YD]: e === d.length - 1,
                                        [nK.jl]: t.has(i.sectionId),
                                        [nK.cW]: i.isNitroLocked,
                                        [nK.T5]: s || r,
                                    }),
                                    children: n,
                                },
                                e,
                            );
                        },
                        [t, d, M, L],
                    ),
                    J = r.useCallback(
                        (e) =>
                            M(e)
                                ? k
                                    ? (0, l.jsx)(nf.ap, {})
                                    : (0, l.jsx)(nf.Ay, {})
                                : L(e)
                                  ? (0, l.jsx)("div", { className: nK.pQ })
                                  : null,
                        [M, L, k],
                    ),
                    V = r.useCallback((e) => (M(e) ? 41 : 33 * !!L(e)), [M, L]),
                    K = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || M(e) || L(e) ? 0 : nz),
                        [t, d, M, L],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== u ? nW : nB, nH, nX, 0], [u]),
                    renderRow: U,
                    renderSection: F,
                    renderSectionHeader: G,
                    renderSectionFooter: J,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === e8.s.SEARCH_RESULTS ? 0 : nZ), [d]),
                    sectionFooterHeight: V,
                };
            })({
                collapsedSections: g,
                diversitySurrogate: i,
                emojiGrid: s,
                emojiSize: c,
                onEmojiSelect: u,
                onSelectSoundmoji: d,
                searchQuery: D,
                sectionDescriptors: E,
                setCollapsedSections: h,
                getEmojiItemProps: p,
                getEmojiRowProps: N,
                isScrolling: L,
                isUsingKeyboardNavigation: x,
                allowAnimatedEmoji: P,
                channelGuildId: S,
                channelId: y,
                messageId: j,
                isBurstReaction: R,
                listHeaderClassName: b,
                activeSectionIndex: F,
                emojiListRef: a,
            }),
            ei = r.useCallback(
                (e) => {
                    let t = a.current?.getSectionDescriptors();
                    null == t ||
                        J(
                            Math.max(
                                t.findLastIndex((t) => t.offset.top <= e),
                                0,
                            ),
                        );
                },
                [a],
            );
        r.useLayoutEffect(() => {
            ei(a.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [a, ei, E, I, D]);
        let es = (0, Z.Fk)({
            activeCategoryIndex: M,
            isScrolling: L,
            listRef: a,
            onActiveCategoryIndexChange: function (e) {
                "" === D && H.Om.setActiveCategoryIndex(e);
            },
            scrollOffset: 0,
            searchQuery: D,
            disableForSearch: !1,
        });
        (0, Z.FV)({ searchQuery: D, activeCategoryIndex: M, listRef: a });
        let el = r.useCallback(
                (e) => {
                    (es(e),
                        ei(e),
                        n$({ emojiListRef: a, sectionDescriptors: E, scrollTop: e, searchQuery: D, setShowUpsell: K }));
                },
                [es, ei, a, E, D, K],
            ),
            ea = E.length > 0;
        (r.useEffect(() => {
            V &&
                (eE.default.track(er.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eL.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: G,
                    location_stack: k,
                }),
                (0, nu.sq)(er.U7l.PREMIUM_UPSELL_VIEWED, k, () => (0, nd.uq)(eL.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [G, k, V]),
            r.useEffect(() => {
                "" !== D && K(!1);
            }, [D]));
        let eo = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(eo.current),
                    (eo.current = setTimeout(() => {
                        (ea
                            ? ns.O.announce(v.intl.string(v.t.uZ4F2O), "polite")
                            : ns.O.announce(v.intl.string(v.t.IxxiKF), "assertive"),
                            (eo.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(eo.current);
                    }
                ),
                [ea, D],
            ),
            (0, l.jsxs)("div", {
                className: nK.AD,
                children: [
                    ea
                        ? (0, l.jsx)(nr.A, {
                              role: "none presentation",
                              className: nK.p_,
                              listPadding: B,
                              onScroll: el,
                              renderRow: z,
                              renderSection: Y,
                              renderSectionHeader: q,
                              renderSectionFooter: $,
                              rowCount: O,
                              rowCountBySection: I,
                              rowHeight: c + 2 * nY,
                              sectionHeaderHeight: et,
                              sectionMarginBottom: ee,
                              sectionFooterHeight: en,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, l.jsx)(nl.A, {
                              message: (0, l.jsx)(Q.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: v.intl.string(v.t.IxxiKF),
                              }),
                              className: nK.BZ,
                          }),
                    U || ni.Fr
                        ? null
                        : (0, l.jsx)(nm.d, {
                              showUpsell: V,
                              text:
                                  ((t = (0, ev.Dd)(eL.PremiumTypes.TIER_2)),
                                  v.intl.format(v.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          f({ type: ta.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nc.qD)()), (0, ev.LE)(n, eL.pe.TIER_2) ?? v.intl.string(v.t.BmJkbd)),
                              buttonAnalyticsObject: { section: er.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, l.jsx)(nE.l, {
                                  size: "sm",
                                  className: nK.ij,
                                  location: _.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    n$ = ew().throttle(
        function (e) {
            let { emojiListRef: t, sectionDescriptors: n, scrollTop: i, searchQuery: s, setShowUpsell: l } = e;
            l(
                (0, na.s)({ listRef: t, searchQuery: s, nitroLockedSectionStates: n, scrollTop: i })
                    .areOnlyNitroLockedSectionsVisible,
            );
        },
        300,
        { leading: !1, trailing: !0 },
    );
var nQ = n(506774),
    n0 = n(28863),
    n1 = n(277984),
    n2 = n(404374),
    n3 = n(780964),
    n5 = n(766075),
    n4 = n(166403),
    n8 = n(506150);
let n6 = "premiumRetentionEmojiPickerNotice",
    n7 = nQ.w.get(n6),
    n9 = function (e) {
        let { closePopout: t, channel: n } = e,
            [i, s] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, m.cf)([n4.A], () => ({
                subscription: n4.A.getPremiumSubscription(),
                hasFetchedSubscriptions: n4.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, n1.hP)();
            }, [o]),
            null == a || !(0, ev.PK)(a.status) || i)
        )
            return null;
        let c = a.status === er.Dmq.PAST_DUE ? (0, ev.ji)(a).expiresDate : P()(a.currentPeriodStart).add(eL.ph),
            u = `${a.id}:${c.toISOString()}`;
        if (n7 === u) return null;
        let d =
            ev.Ay.getPremiumType(a.planId) === eL.PremiumTypes.TIER_0
                ? n2.k0.PREMIUM_TIER_0
                : ev.Ay.getPremiumType(a.planId) === eL.PremiumTypes.TIER_1
                  ? n2.k0.PREMIUM_TIER_1
                  : n2.k0.PREMIUM_TIER_2;
        return (0, l.jsxs)(Q.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: n8.g$,
            children: [
                (0, l.jsx)(ey.t, { size: "md", className: n8.lu, color: d }),
                (0, l.jsxs)("div", {
                    className: n8.Xn,
                    children: [
                        (0, l.jsx)(Q.E, {
                            variant: "text-xs/normal",
                            children: v.intl.format(v.t.bTMjiO, {
                                planName: ev.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: c.toDate(),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(n0.Anchor, {
                                onClick: () => {
                                    ((0, eh.xf)(n), t(), (0, n5.openUserSettings)(n3.X.NITRO_PANEL));
                                },
                                children: v.intl.string(v.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(T.D, {
                    onClick: () => {
                        (nQ.w.set(n6, u), (n7 = u), s(!0));
                    },
                    children: (0, l.jsx)(q.P, { size: "md", color: "currentColor", className: n8.YF }),
                }),
            ],
        });
    };
var ie = n(148361);
let it = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ii = (0, eg.xI)(E.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function is(e) {
    return e.stopPropagation();
}
function il(e, t) {
    H.Om.setInspectedExpressionPosition(e, t, W.t.GRID_NAVIGATOR_EVENT);
}
let ir = u()(eh.bo, 200),
    ia = u()(eh.Wi, 200),
    io = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    ic = r.memo(function (e) {
        let t,
            n,
            i,
            {
                pickerIntention: s,
                channel: a,
                guildId: c,
                closePopout: u,
                emojiSize: E = e8.as.MEDIUM,
                hasTabWrapper: S = !1,
                onSelectEmoji: T,
                onSelectSoundmoji: y,
                containerWidth: j,
                onNavigateAway: R,
                persistSearch: b,
                className: L,
                headerClassName: D,
                analyticsOverride: P = io,
                searchProps: w = {},
                wrapper: U,
                shouldHidePickerActions: G = !1,
                messageId: k,
                renderHeader: F,
                listHeaderClassName: J,
                categoryListClassName: V,
                shouldShowSoundmojiInEmojiPicker: z = !1,
                showOnlyUnicode: Y = !1,
                showAddEmojiButton: q,
                ref: $,
                isViewingEmojiPacks: Q = !1,
                onViewEmojiPacksChange: ee,
            } = e,
            { onFocus: et, onKeyDown: en, autoFocus: es = !0, accessory: el } = w,
            ea = (0, m.bG)([em.Ay], () => (null != c ? em.Ay.getDefaultChannel(c) : null), [c]),
            [eo, eg] = r.useState(null),
            eA = r.useRef(""),
            ep = (0, X.RQ)((e) => e.searchQuery),
            ex = r.useRef(null),
            eT = r.useRef(null),
            ey = r.useRef(null);
        null == a && null != ea && (a = ea);
        let ej = a?.getGuildId() ?? c ?? null,
            [eR, eb] = r.useState(!1),
            ev = r.useRef(null),
            eL = ef.default.getCurrentUser(),
            eM = (0, eI.ki)(eL),
            eP = eR && eM;
        r.useImperativeHandle($, () => ({ onPickerOpen: e3 }));
        let { location: eU } = (0, A.p)(),
            { page: eG, section: ek, object: eF, openPopoutType: eJ, popoutLocation: eV } = P,
            eK = r.useMemo(() => ({ ...eU, section: ek ?? er.JJy.EMOJI_PICKER_POPOUT }), [eU, ek]),
            { analyticsLocations: eB } = (0, C.Ay)(_.A.EMOJI_PICKER),
            { diversitySurrogate: eH } = (0, m.cf)([x.Ay], () => ({ diversitySurrogate: x.Ay.diversitySurrogate })),
            eX = (0, eh.sL)(ep, a, s, Y),
            eW = null == eX ? 0 : eX.locked.length + eX.unlocked.length,
            eZ = ed.iM.useSetting(),
            ez = r.useMemo(() => new Set(eZ), [eZ]),
            eY = r.useCallback((e) => {
                ed.iM.updateSetting(Array.from(e));
            }, []),
            eq = (0, Z.oV)({ gridWrapperRef: ex, containerWidth: j, listPaddingLeft: ii, listScrollbarWidth: 8 }),
            {
                rowCountBySection: e$,
                sectionDescriptors: eQ,
                emojiGrid: e0,
                columnCounts: e1,
            } = (function (e) {
                let {
                        channel: t,
                        fallbackGuildId: n,
                        collapsedSections: i,
                        pickerIntention: s,
                        emojiSearchResults: l,
                        gridWidth: a,
                        emojiPaddingHorizontal: o,
                        emojiSpriteSize: c,
                        shouldShowSoundmojiInEmojiPicker: u,
                        showOnlyUnicode: d,
                    } = e,
                    f = (0, m.bG)([x.Ay], () => x.Ay.categories),
                    E = r.useMemo(() => (d ? tt.Ay.getCategories() : f), [f, d]),
                    I = (0, m.bG)([ei.A], () => ei.A.getGuild(t?.getGuildId()), [t]),
                    g = t?.getGuildId() ?? n,
                    h = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(g), [g]),
                    A = (0, eh.XI)(g),
                    p = (0, eh.Fj)(g),
                    _ = (0, eh.QZ)(g),
                    { topEmojis: N, newlyAddedEmojis: C } = (0, eC.A)(g, s),
                    O = (0, m.yK)([ts.Ay], () => ts.Ay.getFlattenedGuildIds(), []),
                    S = (0, m.bG)([x.Ay], () => x.Ay.expandedSectionsByGuildIds),
                    T = (0, m.bG)([ef.default], () => ef.default.getCurrentUser()),
                    y = (0, eI.ki)(T),
                    j = (0, tn.k0)(),
                    R = h.getGroupedCustomEmoji(),
                    b = (0, ti.Ym)({ location: "useEmojiGrid" });
                return r.useMemo(() => {
                    let e = [],
                        n = [],
                        r = [],
                        d = [],
                        m = 0,
                        f = 0;
                    if (null != h && null != a) {
                        let h = Math.floor(a / (c + 2 * o)),
                            T = 3 * h;
                        function g(l, a) {
                            let o = new Map(),
                                u = i.has(a.sectionId),
                                [E, I] = ew().partition(l, (e) => {
                                    let n = e_.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: s });
                                    return (o.set(e, n), !n);
                                }),
                                g = E.concat(I),
                                A = a.guild,
                                p = g.length > T && null != A && a.isNitroLocked,
                                _ = p && !S.has(A.id);
                            _ && g.splice(T - 1);
                            let O = Math.ceil((p ? g.length + 1 : g.length) / h),
                                x = [];
                            for (let e = 0; e < O; e++) {
                                let t = e * h,
                                    n = t + h,
                                    i = g
                                        .slice(t, n)
                                        .map((e, t) => ({
                                            type: 0,
                                            emoji: e,
                                            size: c,
                                            isDisabled: o.get(e),
                                            rowIndex: f,
                                            columnIndex: t,
                                            visibleRowIndex: m,
                                            category: a.type,
                                            subCategory:
                                                a.sectionId === e8.s.TOP_GUILD_EMOJI
                                                    ? (0, eh.DA)(N, C, e.id ?? e.uniqueName ?? e.name)
                                                    : e8.tm.NONE,
                                        }));
                                if ((x.push(i), !u)) {
                                    if (p && e === O - 1) {
                                        let t = x[e];
                                        t.push({
                                            type: 1,
                                            guildId: A.id,
                                            name: v.intl.string(v.t.NZI2Zk),
                                            size: c,
                                            rowIndex: e,
                                            columnIndex: t.length,
                                            visibleRowIndex: m,
                                            sectionCollapsedToThreeRows: _,
                                        });
                                    }
                                    (d.push(i.length), r.push(i), m++);
                                }
                                f++;
                            }
                            let y = { ...a, count: l.length };
                            (n.push(y), e.push(u ? 0 : O));
                        }
                        if (null != l)
                            (0 !== l.unlocked.length &&
                                g(l.unlocked, {
                                    type: e8.s.SEARCH_RESULTS,
                                    sectionId: e8.s.SEARCH_RESULTS,
                                    count: l.unlocked.length,
                                    isNitroLocked: !1,
                                }),
                                0 !== l.locked.length &&
                                    g(l.locked, {
                                        type: e8.s.PREMIUM_UPSELL,
                                        categoryId: e8.R2.PREMIUM_UPSELL,
                                        sectionId: e8.s.PREMIUM_UPSELL,
                                        count: l.locked.length,
                                        isNitroLocked: !y,
                                    }));
                        else {
                            if (b && u) {
                                let t = [{ type: 2, rowIndex: f, columnIndex: 0, visibleRowIndex: m }];
                                n.push({
                                    type: e8.s.SOUNDMOJI,
                                    categoryId: e8.R2.SOUNDMOJI,
                                    sectionId: "soundmoji",
                                    count: t.length,
                                    isNitroLocked: !1,
                                });
                                let s = i.has(e8.R2.SOUNDMOJI);
                                (!s && (d.push(t.length), r.push(t), m++), e.push(+!s), f++);
                            }
                            for (let e of E)
                                if (e === e8.R2.CUSTOM) {
                                    function x(n) {
                                        let i = R.get(n);
                                        if (null == i) return;
                                        let l = i.filter(
                                            (e) =>
                                                !tr.includes(
                                                    e_.Ay.getEmojiUnavailableReason({
                                                        emoji: e,
                                                        channel: t ?? em.Ay.getDefaultChannel(n),
                                                        intention: s,
                                                    }),
                                                ),
                                        );
                                        if (0 === l.length) return;
                                        let r = ei.A.getGuild(n),
                                            a =
                                                j ||
                                                (!y &&
                                                    e_.Ay.isEmojiCategoryNitroLocked({
                                                        categoryEmojis: l,
                                                        channel: t,
                                                        intention: s,
                                                    }));
                                        g(l, {
                                            categoryId: e,
                                            guild: r,
                                            type: e8.s.GUILD,
                                            sectionId: null != r ? r.id : (0, e9.A)(),
                                            count: l.length,
                                            isNitroLocked: a,
                                        });
                                    }
                                    if ((null != I && x(I.id), (0, eO.isExternalEmojiAllowedForIntention)(s)))
                                        for (let e of O) (null == I || I.id !== e) && x(e);
                                } else if (e === e8.R2.TOP_GUILD_EMOJI) {
                                    if (null != I) {
                                        let { allEmojis: t } = (0, eN.W)({ topEmojis: N, newlyAddedEmojis: C });
                                        t.length > 0 &&
                                            g(t, {
                                                categoryId: e,
                                                guild: ei.A.getGuild(I.id),
                                                type: e8.s.TOP_GUILD_EMOJI,
                                                sectionId: e8.s.TOP_GUILD_EMOJI,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                                } else if (e === e8.R2.RECENT) {
                                    let n = (s === eO.EmojiIntention.REACTION ? _ : p).filter(
                                        (e) => !e_.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    g(n, {
                                        categoryId: e,
                                        type: e8.s.RECENT,
                                        sectionId: e8.s.RECENT,
                                        count: n.length,
                                        isNitroLocked: !1,
                                    });
                                } else if (e === e8.R2.FAVORITES) {
                                    let n = A.filter(
                                        (e) => !e_.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: s }),
                                    );
                                    0 !== n.length &&
                                        g(n, {
                                            categoryId: e,
                                            type: e8.s.FAVORITES,
                                            sectionId: e8.s.FAVORITES,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                } else {
                                    let t = tt.Ay.getByCategory(e);
                                    null != t &&
                                        g(t, {
                                            categoryId: e,
                                            type: e8.s.UNICODE,
                                            sectionId: e,
                                            count: t.length,
                                            isNitroLocked: !1,
                                        });
                                }
                        }
                    }
                    return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                }, [h, a, c, o, l, i, R, S, t, s, N, C, y, E, I, O, _, p, A, j, b, u]);
            })({
                gridWidth: eq,
                fallbackGuildId: ej,
                channel: a,
                pickerIntention: s,
                emojiSearchResults: eX,
                collapsedSections: ez,
                emojiPaddingHorizontal: it,
                emojiSpriteSize: E,
                shouldShowSoundmojiInEmojiPicker: z,
                showOnlyUnicode: Y,
            }),
            { newlyAddedEmojis: e2 } = (0, eC.A)(ej, s);
        ((t = r.useRef({ intention: s, isBurstReaction: eR, analyticsObject: eF })),
            r.useEffect(() => {
                t.current.intention === eO.EmojiIntention.REACTION && eS(t.current);
            }, []));
        let e3 = r.useCallback(() => {
                let e = e2.length > 0 ? e2[0].id : null;
                ((0, B.uV)(ej, e), eS({ intention: s, isBurstReaction: eR, analyticsObject: eF }));
            }, [e2, ej, s, eR, eF]),
            e5 = (function (e) {
                let {
                        pickerIntention: t,
                        selectedChannel: n,
                        fallbackGuildId: i,
                        onSelectEmoji: s,
                        setUpsellConfigs: l,
                        emojiSelectAnalytics: a,
                        trackEmojiFavorited: o,
                    } = e,
                    c = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [i, n]);
                return r.useCallback(
                    (e, i) => {
                        if (0 === e.type) {
                            let { emoji: r } = e;
                            if (null == r) return;
                            let u = e_.Ay.getEmojiUnavailableReason({ emoji: r, channel: n, intention: t });
                            if (i.toggleFavorite)
                                return void (c.isFavoriteEmojiWithoutFetchingLatest(r) || null != u
                                    ? (0, g.Sw)(r)
                                    : (o?.(e), (0, g.V4)(r)));
                            if (u !== eO.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                                if (u === eO.EmojiDisabledReasons.PREMIUM_LOCKED) {
                                    (a?.(e, u), l({ type: 0, emojiDescriptor: e }));
                                    return;
                                }
                                if (u === eO.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && r.type === te.i.GUILD) {
                                    (a?.(e, u), l({ type: 1, guildId: r.guildId, emojiId: r.id }));
                                    return;
                                }
                                u !== eO.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                                    (a?.(e), s({ emoji: r, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                            }
                        }
                    },
                    [n, t, s, l, c, a, o],
                );
            })({
                pickerIntention: s,
                selectedChannel: a,
                fallbackGuildId: ej,
                closePopout: u,
                onSelectEmoji: T,
                setUpsellConfigs: eg,
                emojiSelectAnalytics: (e, t) => {
                    "" !== ep
                        ? (0, eh.Wf)({
                              emoji: e.emoji,
                              location: { ...eK, object: er.ZSU.EMOJI },
                              searchQuery: ep,
                              isLocked: null != t,
                              intention: s,
                              messageId: k,
                          })
                        : (0, eh._7)({
                              emoji: e.emoji,
                              location: { ...eK, object: eF ?? er.ZSU.EMOJI, ...(null != eG && { page: eG }) },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === e8.tm.NEWLY_ADDED_EMOJI && K.isNewerThanLastSeen(ej, e.emoji.id),
                              isBurstReaction: eR,
                              messageId: k,
                              lockedReason: t,
                              visibleRowIndex: e.visibleRowIndex,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, eh.C5)({ emoji: e.emoji, location: { ...eK, object: er.ZSU.EMOJI } });
                },
            }),
            e4 = r.useCallback(() => {
                (u(), R?.());
            }, [u, R]),
            {
                getItemProps: e6,
                getRowProps: e7,
                gridContainerProps: to,
                handleGridContainerKeyDown: tc,
                isUsingKeyboardNavigation: tu,
            } = (function (e) {
                let {
                        analyticsLocation: t,
                        pickerIntention: n,
                        columnCounts: i,
                        onSelectEmoji: s,
                        emojiGrid: l,
                        emojiList: a,
                        channelGuildId: o,
                        isBurstReaction: c,
                    } = e,
                    u = (0, m.bG)([x.Ay], () => x.Ay.getDisambiguatedEmojiContext(o), [o]),
                    f = r.useCallback(
                        (e, i) => {
                            if (e.type === tl.EMOJI) {
                                if (null != e.emoji && i.altKey)
                                    return void (u.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                        ? (0, g.Sw)(e.emoji)
                                        : ((0, eh.C5)({ emoji: e.emoji, location: { ...t, object: er.ZSU.EMOJI } }),
                                          (0, g.V4)(e.emoji)));
                                let l = {
                                    page: null != o ? er.liQ.GUILD_CHANNEL : er.liQ.DM_CHANNEL,
                                    section: er.JJy.EMOJI_PICKER_POPOUT,
                                    object: er.ZSU.EMOJI,
                                };
                                (c &&
                                    (l = {
                                        page: null != o ? er.liQ.GUILD_CHANNEL : er.liQ.DM_CHANNEL,
                                        section: er.JJy.EMOJI_PICKER_POPOUT,
                                        object: er.ZSU.EMOJI,
                                    }),
                                    (0, eh._7)({
                                        emoji: e.emoji,
                                        location: l,
                                        pickerIntention: n,
                                        category: e.category,
                                        subCategory: e.subCategory,
                                        newlyAddedHighlight:
                                            e.subCategory === e8.tm.NEWLY_ADDED_EMOJI &&
                                            K.isNewerThanLastSeen(o, e.emoji.id),
                                    }),
                                    s({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: c }));
                            }
                        },
                        [s, o, n, u, t, c],
                    ),
                    {
                        gridDispatch: E,
                        getItemProps: I,
                        getRowProps: h,
                        gridContainerProps: A,
                        handleGridContainerKeyDown: p,
                        isUsingKeyboardNavigation: _,
                    } = (0, Z.Ff)({
                        columnCounts: i,
                        gridNavigatorId: e8.lq,
                        itemGrid: l,
                        itemList: a,
                        onGridNavigatorItemSelect: f,
                        onGridNavigatorPositionChange: il,
                    });
                return (
                    r.useEffect(
                        () =>
                            H.Om.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== W.t.GRID_NAVIGATOR_EVENT && E({ type: d.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [E],
                    ),
                    {
                        getItemProps: I,
                        getRowProps: h,
                        gridContainerProps: A,
                        handleGridContainerKeyDown: p,
                        isUsingKeyboardNavigation: _,
                    }
                );
            })({
                pickerIntention: s,
                analyticsLocation: eK,
                columnCounts: e1,
                onSelectEmoji: T,
                emojiGrid: e0,
                emojiList: eT,
                channelGuildId: ej,
                isBurstReaction: eP,
            });
        (((e, t) => {
            let [n, i] = r.useState(null);
            (r.useEffect(() => {
                null != n && (t.current?.scrollToSectionTop(n), i(null));
            }, [t, n]),
                r.useEffect(() => {
                    i(H.Om.getState().activeCategoryIndex);
                }, [e]));
        })(j, eT),
            r.useLayoutEffect(() => {
                es && ey.current?.focus();
            }, [j, eH, ey, es]),
            (n = r.useRef(Q)),
            r.useEffect(() => {
                (es && n.current && !Q && ey.current?.focus(), (n.current = Q));
            }, [es, Q, ey]),
            r.useEffect(() => {
                b || (0, X.Ri)("");
            }, [b]),
            r.useEffect(
                () => (
                    eE.default.track(er.HAw.OPEN_POPOUT, {
                        type: eJ ?? "Emoji Picker",
                        guild_id: ej,
                        location: eV,
                        ...(0, N.dI)(a),
                    }),
                    () => {
                        (ir.cancel(), ia.cancel());
                    }
                ),
                [eJ, ej, eV, a],
            ),
            (0, p.Ay)(() => ((0, eh.V$)({ intention: s, location: eK }), (eA.current = ep), H.Om.resetStoreState)),
            r.useEffect(() => () => (0, eu.sF)(eu._2.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = H.Om.getState().inspectedExpressionPosition;
                e0[t]?.[e] == null && 0 !== e && H.Om.setInspectedExpressionPosition(0, 0);
            }, [e0]),
            r.useEffect(() => {
                if (("" === eA.current && "" !== ep && (0, eh.EG)(eK, s), "" !== ep && eA.current !== ep)) {
                    let e = H.Om.getAnalyticsId();
                    0 === eW
                        ? ir({ location: eK, searchQuery: ep, intention: s, loadId: e })
                        : ia({
                              totalResults: eW,
                              numEmojiLocked: eX?.locked.length ?? 0,
                              location: eK,
                              searchQuery: ep,
                              intention: s,
                              loadId: e,
                          });
                }
                eA.current = ep;
            }, [ep, eK, eW, eX, s]));
        let td = U ?? (S ? "div" : I.l),
            tm = null != eq;
        eo?.type === ta.PREMIUM
            ? (i = (0, l.jsx)(ie.default, {
                  onUpsellClicked: e4,
                  emojiDescriptor: eo.emojiDescriptor,
                  pickerIntention: s,
                  analyticsLocation: eK,
                  onClose: () => eg(null),
                  channel: a,
              }))
            : eo?.type === ta.ROLE_SUBSCRIPTION &&
              (i = (0, l.jsx)(ec, { onClose: () => eg(null), guildId: eo.guildId, emojiId: eo.emojiId }));
        let tf = (0, l.jsx)(t8, {
                channel: a,
                pickerIntention: s,
                emojiListRef: eT,
                onKeyDown: (e) => {
                    (tc?.(e), en?.(e));
                },
                searchBarRef: ey,
                onFocus: et,
                autoFocus: es,
                accessory: el,
                headerClassName: D,
                diversitySurrogate: eH,
                isBurstReaction: eR,
                onBurstReactionToggle: function () {
                    (eb(!eR), ey.current?.focus());
                },
                burstToggleRef: ev,
                renderHeader: F,
                showAddEmojiButton: q,
                closePopout: u,
            }),
            tE = [];
        x.Ay.hasFavoriteEmojis(ej) || tE.push(f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tI = (0, l.jsxs)(r.Fragment, {
                children: [
                    S ? tf : null,
                    (0, l.jsxs)("div", {
                        className: t4.uK,
                        ref: ex,
                        children: [
                            (0, l.jsx)(n9, { channel: a, closePopout: u }),
                            (0, l.jsx)(O.Ay, {
                                contentTypes: tE,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === f.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                        return (0, l.jsx)(ty, { markAsDismissed: () => n(tS.i.UNKNOWN) });
                                },
                            }),
                            G
                                ? null
                                : (0, l.jsx)("div", {
                                      className: t4.Iy,
                                      id: e8.lq,
                                      ...to,
                                      children: tm
                                          ? (0, l.jsx)(nq, {
                                                collapsedSections: ez,
                                                diversitySurrogate: eH,
                                                emojiGrid: e0,
                                                emojiListRef: eT,
                                                emojiSize: E,
                                                getEmojiItemProps: e6,
                                                getEmojiRowProps: e7,
                                                gridWidth: eq,
                                                isUsingKeyboardNavigation: tu,
                                                onEmojiSelect: function (e, t) {
                                                    e5(e, { ...t, isBurst: eP });
                                                },
                                                onSelectSoundmoji: y,
                                                setUpsellConfigs: eg,
                                                rowCount: e0.length,
                                                rowCountBySection: e$,
                                                sectionDescriptors: eQ,
                                                setCollapsedSections: eY,
                                                channelGuildId: ej,
                                                channelId: a?.id,
                                                messageId: k,
                                                isBurstReaction: eP,
                                                listHeaderClassName: J,
                                            })
                                          : null,
                                  }),
                        ],
                    }),
                    (0, l.jsx)(nn, { emojiGrid: e0, className: t4.qV, guildId: ej, pickerIntention: s, channel: a }),
                    i,
                    s === eO.EmojiIntention.REACTION
                        ? (0, l.jsx)(eD, { targetElementRef: ev, shouldShow: eR && !eM, onDismiss: () => eb(!1) })
                        : null,
                ],
            }),
            tg = (0, l.jsx)(h.A, {
                ...eK,
                children: (0, l.jsxs)(td, {
                    id: e8.Do,
                    "aria-labelledby": S && !Q ? e8.k1 : void 0,
                    role: S && !Q ? "tabpanel" : void 0,
                    className: o()(t4.iE, { [t4.r6]: S, [t4.cB]: eP }),
                    children: [
                        S || Q ? null : tf,
                        (0, l.jsx)("div", {
                            className: o()(t4.Fb, L),
                            onScroll: is,
                            children: Q ? (0, l.jsx)(M, { onBack: () => ee?.(!1) }) : tI,
                        }),
                        G || Q
                            ? null
                            : (0, l.jsx)(tx, {
                                  className: o()(t4.jv, V),
                                  emojiListRef: eT,
                                  sectionDescriptors: eQ,
                                  intention: s,
                                  channel: a,
                                  fallbackGuildId: ej,
                                  shouldShowSoundmojiInEmojiPicker: z,
                                  showOnlyUnicode: Y,
                                  onViewEmojiPacks: null != ee ? () => ee(!0) : void 0,
                              }),
                    ],
                }),
            });
        return (0, l.jsx)(C.f5, { value: eB, children: tg });
    });
