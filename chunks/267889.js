(n.d(t, { A: () => le }), n(321073));
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
    b = n(935208);
let T = { lastSeenNewlyAddedEmojiIds: {} },
    R = T,
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
        R = e ?? T;
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
        if (null == n || b.default.compare(t, n.id) > 0) return !0;
        {
            let e = _()(n.lastSeen);
            return _()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
        }
    }
}
let k = new M(j.h, {
    LOGOUT: function () {
        ((R = T), (O = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = O[t] ?? R.lastSeenNewlyAddedEmojiIds[t];
        null == l || 0 > b.default.compare(l.id, n)
            ? (O[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
            : (O[t] = { ...l, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
        let { guildId: t, emojiId: n } = e,
            l = O[t] ?? R.lastSeenNewlyAddedEmojiIds[t];
        (null == l || 0 > b.default.compare(l.id, n)) && (O[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: L,
    CLEAR_CACHES: function () {
        ((R = T), L());
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
var eE = n(206248),
    eI = n(403581),
    ey = n(724651),
    eS = n(732280),
    ev = n(783420),
    eN = n(158045),
    e_ = n(202541);
let ej = { object: Q.ZSU.BUTTON_CTA, section: Q.JJy.SUPER_REACTION_PICKER };
function eb(e) {
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
var eT = n(435558),
    eR = n.n(eT),
    eO = n(837381),
    eL = n(460905),
    eM = n(775602),
    ek = n(713517),
    ew = n(88218),
    eP = n(407698),
    eD = n(941971),
    eU = n(531685),
    eG = n(406810),
    eV = n(27232),
    eF = n(369606),
    eH = n(413249),
    eB = n(141060),
    eW = n(687966),
    eK = n(115979),
    ez = n(524501),
    eZ = n(926268),
    eY = n(138134),
    eq = n(7807),
    eJ = n(732139);
let e$ = r.memo(function (e) {
    let { categoryId: t, ...n } = e,
        l = (function (e) {
            switch (e) {
                case eJ.R2.RECENT:
                    return eG.ClockIcon;
                case eJ.R2.FAVORITES:
                    return eV.StarIcon;
                case eJ.R2.TOP_GUILD_EMOJI:
                    return eF.TrophyIcon;
                case eJ.R2.PEOPLE:
                    return eL.n;
                case eJ.R2.NATURE:
                    return eH.p;
                case eJ.R2.FOOD:
                    return eB.i;
                case eJ.R2.ACTIVITY:
                    return eW.GameControllerIcon;
                case eJ.R2.TRAVEL:
                    return eK.h;
                case eJ.R2.OBJECTS:
                    return ez.D;
                case eJ.R2.SYMBOLS:
                    return eZ.HeartIcon;
                case eJ.R2.FLAGS:
                    return eY.FlagIcon;
                case eJ.R2.PREMIUM_UPSELL:
                    return eI.t;
                case eJ.R2.SOUNDMOJI:
                    return eq.J;
                default:
                    return;
            }
        })(t);
    return null == l ? null : (0, s.jsx)(l, { color: "currentColor", ...n });
});
var eX = n(724511),
    eQ = n(132500),
    e0 = n(770335),
    e1 = n(7584),
    e2 = n(526292),
    e3 = n(926972),
    e6 = n(711014),
    e7 =
        (((l = {})[(l.EMOJI = 0)] = "EMOJI"),
        (l[(l.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
        (l[(l.SOUNDMOJI = 2)] = "SOUNDMOJI"),
        l);
let e8 = [ex.EmojiDisabledReasons.DISALLOW_EXTERNAL, ex.EmojiDisabledReasons.DISALLOW_CUSTOM];
var e5 = (((i = {})[(i.PREMIUM = 0)] = "PREMIUM"), (i[(i.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"), i),
    e4 = n(342379);
let e9 = "expression-guild-",
    { itemIdForIndex: te } = (0, ew.J)(e9),
    tt = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tn = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    tl = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    ti = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    ts = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tr = (0, ec.xI)(e4.__invalid_unicodeCategoryShortcutHeight),
    ta = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    to = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tu = tl + tn + 2 * ts,
    tc = tt + tn,
    td = tc + (ta + 2 * to),
    th = tl + ti + 2 * ts;
function tm(e) {
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
        h = r.useRef(null),
        { isHoveringOrFocusing: m } = (0, ek.A)(h),
        f = (0, eO.rm)(te(n)),
        p = a.type === eJ.s.GUILD ? null : a.id,
        g = t === n,
        x = a.type === eJ.s.GUILD ? a.guild : null,
        A = (0, s.jsxs)(H.D, {
            innerRef: h,
            ...f,
            "aria-label": (0, ed.wt)(a, x),
            className: o()({
                [e4.ZG]: null != x,
                [e4.Bj]: null == x,
                [e4.s6]: null == x && g,
                [e4.xg]: a.type === eJ.s.RECENT,
            }),
            onClick: () => {
                (null != x &&
                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                        location: l?.location,
                        tab: eA.kx.EMOJI,
                        guild_id: x.id,
                    }),
                    u(n));
            },
            children: [
                (0, s.jsx)("div", {
                    className: e4.a$,
                    children: (0, s.jsx)(eD.A, { hovered: m, selected: g, size: "small" }),
                }),
                null != x
                    ? (0, s.jsx)(eX.A, { guild: x, isSelected: g, shouldAnimate: !d && c, isLocked: a.isNitroLocked })
                    : null,
                null == x && null != p
                    ? (0, s.jsx)(e$, { categoryId: p, className: e4.Yl, height: tl, width: tl, size: "custom" })
                    : null,
            ],
        }),
        C = i[n + 1],
        E = null != C && a.type === eJ.s.GUILD && C.type !== eJ.s.GUILD;
    return null != x
        ? (0, s.jsxs)(r.Fragment, {
              children: [
                  (0, s.jsx)(eP.Q, { guild: x, children: A }),
                  E ? (0, s.jsx)("hr", { className: e4.ny }, "separator") : null,
              ],
          })
        : A;
}
let tf = (e) => {
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
        E = (0, h.bG)([eU.A], () => eU.A.isFocused()),
        I = (0, h.bG)([eM.Ay], () => eM.Ay.useReducedMotion, []),
        y = r.useMemo(
            () =>
                eR().memoize(
                    (e, t) => {
                        let n = x[t];
                        if (null != n)
                            return (0, s.jsx)(
                                tm,
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
                if (n.type === eJ.s.RECENT) return tu;
                if (n.type === eJ.s.GUILD) {
                    let e = x[t + 1];
                    return null != e && e.type !== eJ.s.GUILD ? td : tc;
                }
                return th;
            },
            [x],
        ),
        {
            nonUnicodeCategoryCount: N,
            firstUnicodeCategoryIndex: _,
            firstUnicodeCategoryOffsetTop: j,
            rowCountBySection: b,
        } = r.useMemo(() => {
            let e = 0,
                t = 0,
                n = 0,
                l = 0;
            x.forEach((i) => {
                i.type === eJ.s.GUILD
                    ? ((t += 1), (n += 1))
                    : i.type === eJ.s.UNICODE
                      ? (l += 1)
                      : ((e += 1), (t += 1));
            });
            let i = tu + t * tc + td;
            return {
                nonUnicodeCategoryCount: t,
                firstUnicodeCategoryIndex: t,
                firstUnicodeCategoryOffsetTop: i,
                rowCountBySection: [e, n, l],
            };
        }, [x]),
        [T, R] = r.useState(!0);
    r.useLayoutEffect(() => {
        R(N >= 7);
    }, [N]);
    let O = r.useCallback(
            (e) => {
                let t = C.current?.getListDimensions();
                null == t || (e + t.height - ta >= j ? R(!1) : R(!0));
            },
            [j],
        ),
        L = r.useCallback(
            (e) => {
                (e(_), C.current?.scrollTo(j));
            },
            [j, _],
        ),
        M = r.useCallback(
            (e, t) => {
                let n = x[e];
                if (null == n) return 0;
                let l = T ? tr : 0;
                if (n.type === eJ.s.RECENT) return t ? 0 : ti;
                if (n.type === eJ.s.GUILD) {
                    let n = x[e + 1];
                    return null != n && n.type !== eJ.s.GUILD ? (t ? ta + -2 * to + tn + l : tn) : t ? l : tn;
                }
                return t ? tn + l : 2 * tn;
            },
            [x, T],
        ),
        k = r.useMemo(
            () =>
                function (e, t) {
                    return (0, s.jsx)(r.Fragment, { children: t }, e);
                },
            [],
        ),
        w = T ? "shortcut" : "hiddenshortcut";
    return (0, s.jsx)(ew.A, {
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
        rowCountBySection: b,
        navId: "emoji-picker-categories",
        itemIdPrefix: e9,
        children: (e) =>
            N >= 7 &&
            (0, s.jsx)(
                H.D,
                {
                    "aria-hidden": !T,
                    "aria-label": et.intl.string(et.t.dT0ctw),
                    className: o()(e4.KB, { [e4.h_]: !T }),
                    tabIndex: T ? 0 : -1,
                    onClick: () => L(e),
                    children: (0, s.jsx)(eL.n, { size: "custom", color: "currentColor", height: tl, width: tl }),
                },
                w,
            ),
    });
};
var tp = n(49999),
    tg = n(860197);
let tx = function (e) {
    let { markAsDismissed: t } = e;
    return (0, s.jsxs)(z.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: tg.iE,
        children: [
            (0, s.jsx)(eZ.HeartIcon, { size: "md", color: "currentColor", className: tg.Kk }),
            (0, s.jsx)("div", {
                className: tg.Qs,
                children: (0, s.jsx)(z.E, { variant: "text-xs/normal", children: et.intl.string(et.t.xdRf69) }),
            }),
            (0, s.jsx)(H.D, {
                onClick: () => t(tp.i.UNKNOWN),
                children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: tg.VN }),
            }),
        ],
    });
};
var tA = n(892437),
    tC = n(717421),
    tE = n(343032),
    tI = n(683063),
    ty = n(131607),
    tS = n(748798);
let tv = { tension: 750, mass: 2.5, friction: 70 };
function tN(e) {
    let { checked: t, onClick: n, buttonRef: l } = e,
        i = (0, h.bG)([eM.Ay], () => eM.Ay.useReducedMotion),
        a = ea.default.getCurrentUser(),
        u = null != a && !(0, eN.TW)(a),
        c = u ? [] : [m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
        [d, f] = (0, ty.kn)(c),
        [p, g] = r.useState(!1),
        [x, A] = (0, tC.z)(() => ({})),
        C = (0, tA.animated)(tE.i);
    r.useEffect(() => {
        let e = d === m.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (f(tp.i.DISMISS), setTimeout(() => g(e), 200));
    }, [d, f]);
    let E = p ? et.intl.string(et.t["Osi/uy"]) : t && !u ? et.intl.string(et.t["5cRA/b"]) : et.intl.string(et.t.buV4av),
        I = p ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, s.jsx)(tI.u, {
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
                (A({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: tv }),
                    n?.(),
                    g(!1));
            },
            focusProps: { enabled: !1 },
            className: o()(tS.Pf, { [tS.wM]: t }),
            children: (0, s.jsx)(C, {
                style: i ? void 0 : x,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: tS.Kk,
            }),
        }),
    });
}
var t_ = n(866665),
    tj = n(821609),
    tb = n(644508),
    tT = n(824832),
    tR = n(267102),
    tO = n(242812);
function tL(e) {
    let { channel: t, closePopout: n } = e,
        l = r.useRef(null),
        i = r.useRef(0),
        [a, o] = r.useState(!1),
        [u, c] = r.useState(!1),
        d = (0, tR.Us)() === Q.BRT.OVERLAY,
        h = u || a,
        m = r.useCallback(
            async (e, l, s) => {
                (c(!0),
                    n(),
                    await (0, tb.f)({
                        userImage: { data: e, file: l, image: s },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: Q.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                        },
                    }),
                    (i.current += 1),
                    c(!1));
            },
            [t, n],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(t_.m, {
                asContainer: !0,
                text: d ? et.intl.string(et.t.RMbedC) : null,
                children: (0, s.jsx)(tj.$, {
                    text: et.intl.string(et.t.iMJO37),
                    variant: "secondary",
                    onClick: function () {
                        l.current?.activateUploadDialogue();
                    },
                    disabled: h || d,
                }),
            }),
            (0, s.jsx)("div", {
                className: tO.F,
                children: (0, s.jsx)(tT.Ay, { ref: l, onChange: m, setLoading: o, disabled: h }, i.current),
            }),
        ],
    });
}
n(667532);
var tM = n(833272),
    tk = n(82495),
    tw = n(260762),
    tP = n(915089),
    tD = n(650583),
    tU = n(683829);
let tG = (0, tP.Ld)(),
    tV = tM.A.convert.fromCodePoint("1f44f"),
    tF = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function tH(e) {
    switch (tM.A.convert.toCodePoint(e)) {
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
        a = (0, eO.rm)(`item-${r}`),
        o = ef.Ay.getURL(tV + n),
        u = (0, tC.z)({ opacity: 1, from: { opacity: +!t }, delay: i }, "animate-always");
    return (0, s.jsx)(H.D, {
        ...a,
        role: "option",
        "aria-selected": 0 === r,
        onClick: () => l(n),
        className: tU.B6,
        children: (0, s.jsx)(tA.animated.div, {
            "aria-label": tH(n),
            className: tU.g4,
            style: { backgroundImage: `url("${o}")`, ...u },
        }),
    });
};
function tW(e) {
    let { id: t, selectedSurrogate: n, onClick: l } = e,
        i = (0, tw.A)("diversity"),
        a = (0, tC.z)({ height: (tF + 14) * (e1.W$.length + 1), from: { height: tF + 14 }, config: { duration: 125 } }),
        o = r.useRef(i);
    r.useEffect(() => {
        o.current.focusFirstVisibleItem();
    }, []);
    let u = ["", ...e1.W$];
    return (
        eR().remove(u, (e) => e === n),
        u.unshift(n),
        (0, s.jsx)(eO.hD, {
            navigator: i,
            children: (0, s.jsx)(eO.PR, {
                children: (e) => {
                    let { ref: n, ...i } = e;
                    return (0, s.jsx)(tA.animated.div, {
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
        c = (0, tk.A)(null, () => u(!1)),
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
                              ((0, g.dK)(e), u(!1), t.current?.focus());
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
                    (P.Om.setActiveCategoryIndex("" === e ? 0 : -1),
                        P.Om.setInspectedExpressionPosition(0, 0),
                        P.Om.setSearchPlaceholder(null),
                        (0, D.Ri)(e),
                        n.current?.scrollTo(0));
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
            burstToggleRef: p,
            renderHeader: g,
            showAddEmojiButton: x = !0,
            closePopout: A,
        } = e,
        C = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(tJ, {
                    emojiListRef: r,
                    gridNavigatorId: eJ.lq,
                    onKeyDown: a,
                    ref: d,
                    onFocus: u,
                    autoFocus: c,
                    defaultSearchPlaceholder: (0, ed.wT)(l, m),
                }),
                l === ex.EmojiIntention.REACTION ? (0, s.jsx)(tN, { checked: m, onClick: f, buttonRef: p }) : null,
                n ?? (0, s.jsx)(tK, { searchBarRef: d, className: t$.fx, selectedSurrogate: h }),
                l !== ex.EmojiIntention.NO_CUSTOM_EMOJI && x ? (0, s.jsx)(tL, { channel: t, closePopout: A }) : null,
            ],
        });
    return (0, s.jsx)("div", { className: o()(t$.wx, i), children: null != g ? g(C) : C });
};
var tQ = n(182922),
    t0 = n(363195),
    t1 = n(486020),
    t2 = n(977566);
function t3(e) {
    return null != e && "animated" in e;
}
let t6 = r.memo(function (e) {
    let t,
        l,
        { className: i, emojiGrid: a, guildId: o, pickerIntention: u, channel: c } = e,
        d = P.Om.useStore((e) => e.inspectedExpressionPosition),
        m = r.useMemo(() => {
            let { rowIndex: e, columnIndex: t } = d;
            return a[e]?.[t];
        }, [a, d]);
    switch (m?.type) {
        case e7.EMOJI:
            t = m?.emoji;
            break;
        case e7.EXPAND_OR_COLLAPSE_EMOJIS:
            t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: m?.guildId, allNamesString: m?.name };
            break;
        case e7.SOUNDMOJI:
        default:
            t = null;
    }
    let f = (0, h.bG)([J.A], () => (null !== t && t.type === e0.i.GUILD ? J.A.getGuild(t.guildId) : null), [t]),
        p = (0, h.bG)([eU.A], () => eU.A.isFocused()),
        g = (0, h.bG)([eM.Ay], () => eM.Ay.useReducedMotion, []),
        x = es.Sf.useSetting(),
        A = (0, ed.O7)(o, t3(t) ? t : null),
        C = (0, h.bG)([v.Ay], () => v.Ay.expandedSectionsByGuildIds),
        { newlyAddedEmojis: E } = (0, eg.A)(o, u),
        I = m?.type === e7.EMOJI ? m.subCategory : eJ.tm.NONE;
    if (
        (r.useEffect(() => {
            let e = Date.now();
            return () => {
                Date.now() - e >= 250 &&
                    t3(t) &&
                    I !== eJ.tm.NONE &&
                    (I === eJ.tm.NEWLY_ADDED_EMOJI &&
                        null !== t &&
                        t.type === e0.i.GUILD &&
                        (0, w.mz)(t.guildId, E[0].id),
                    null != d.source &&
                        (0, ed.yB)({
                            emoji: t,
                            subCategory: I,
                            position: m.columnIndex + 1,
                            newlyAddedHighlight: I === eJ.tm.NEWLY_ADDED_EMOJI && k.isNewerThanLastSeen(o, t.id),
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
        S =
            null != f
                ? (0, s.jsx)(eX.A, { className: t2.__invalid_guildIcon, guild: f, shouldAnimate: !g && p })
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
        graphicSecondary: S,
        titlePrimary: l,
        titleSecondary: N,
        isFavorite: A,
        emojiSubCategory: I,
    });
});
var t7 = n(607399),
    t8 = n(765178),
    t5 = n(537652),
    t4 = n(962125),
    t9 = n(240864),
    ne = n(286509),
    nt = n(89366),
    nn = n(10392),
    nl = n(82498),
    ni = n(202639),
    ns = n(414872),
    nr = n(285373),
    na = n(259678),
    no = n(304072),
    nu = n(189551),
    nc = n(289873),
    nd = n(796774),
    nh = n(209932),
    nm = n(805945),
    nf = n(576705);
n(980504);
var np = n(818348),
    ng = n(821425);
let nx = r.memo(function (e) {
    let t,
        n,
        l,
        i,
        { channelId: a, onSelectSoundmoji: o } = e,
        u = (0, h.bG)([nh.A], () => !nh.A.isFetching() && !nh.A.hasFetchedAllSounds(), []),
        c = (0, h.bG)([eh.A], () => eh.A.getChannel(a)),
        d =
            ((t = (0, h.bG)([ea.default], () => eN.Ay.canUseSoundboardEverywhere(ea.default.getCurrentUser()))),
            (n = (0, h.bG)([nh.A], () => nh.A.getSoundsForGuild("0"))),
            (l = (0, h.yK)([J.A], () => J.A.getGuildIds())),
            (i = r.useMemo(() => nf.A.can(np.xB.USE_EXTERNAL_SOUNDS, c), [c])),
            r.useMemo(() => {
                let e = [];
                if (t && i) {
                    let t = l.flatMap((e) => nh.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
                    e.push(...eR().sampleSize(t, 4));
                } else if (c?.guild_id != null) {
                    let t = nh.A.getSoundsForGuild(c?.guild_id)?.filter((e) => e.available);
                    e.push(...eR().sampleSize(t, 4));
                }
                return (e.length < 4 && e.push(...eR().sampleSize(n ?? [], 4 - e.length)), e);
            }, [i, c?.guild_id, n, l, t]));
    return (r.useEffect(() => {
        (0, nd.E7)();
    }, [u]),
    0 === d.length)
        ? (0, s.jsx)(nc.y, {})
        : (0, s.jsx)("div", {
              className: ng.q,
              children: d.map((e, t) =>
                  (0, s.jsx)(
                      nm.Ay,
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
var nA = n(594061),
    nC = n(771104),
    nE = n(442433),
    nI = n(147421),
    ny = n(723702),
    nS = n(140735),
    nv = n(194261),
    nN = n(703413);
let n_ = (e) => {
    let { src: t, alt: n, size: l, "aria-label": i, className: a } = e,
        u = r.useRef(null),
        c = r.useRef(!1),
        d = c.current ? nN.S : nN.Y;
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
                          ((c.current = !0), u.current.classList.remove(nN.Y), u.current.classList.add(nN.S));
                  });
              },
    });
};
var nj = n(955388);
let nb = eR().memoize(
        (e) =>
            `${e * ex.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(e1.Ay.numNonDiversitySprites / ex.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nT = eR().memoize(
        (e) =>
            `${e * ex.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(e1.Ay.numDiversitySprites / ex.EmojiSprites.DiversityPerRow)}px`,
    ),
    nR = r.memo(function (e) {
        let { emoji: t, size: l, surrogateCodePoint: i, allowAnimatedEmoji: a, "aria-label": u, isLocked: c } = e,
            d = (() => {
                if (!t.useSpriteSheet) {
                    let e =
                        null == t.id
                            ? t.url
                            : t1.Ay.getEmojiURL({ id: t.id, animated: a && t.animated, size: ex.EMOJI_URL_BASE_SIZE });
                    return null != e
                        ? (0, s.jsx)(n_, {
                              className: nj.N1,
                              "aria-label": u,
                              src: e,
                              size: l,
                              alt: (0, ef.N)(t) ?? "",
                          })
                        : null;
                }
                return (0, s.jsx)("div", {
                    className: o()(nj.xA, { [nj.N1]: c }),
                    style: (function (e, t, l) {
                        let i, s, r;
                        if (!e.useSpriteSheet) return;
                        let a = null != e.index ? e.index : 0;
                        e.hasDiversity
                            ? ((i = n(12303)(`./spritesheet-${t}-${l}.png.js`).default),
                              (s = nT(l)),
                              (r = ex.EmojiSprites.DiversityPerRow))
                            : ((i = n(145519)(`./spritesheet-emoji-${l}.png.js`).default),
                              (s = nb(l)),
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
                    children: (0, s.jsx)(nS.A, { children: u }),
                });
            })();
        return (0, s.jsxs)(r.Fragment, {
            children: [
                d,
                c
                    ? (0, s.jsx)("div", {
                          className: nj.iD,
                          children: (0, s.jsx)(nv.LockIcon, { size: "xs", color: "currentColor", className: nj.fi }),
                      })
                    : null,
            ],
        });
    });
var nO = n(537911);
let nL = r.forwardRef(function (e, t) {
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
        I = (0, h.bG)([J.A], () => (l.type === e0.i.GUILD ? J.A.getGuild(l.guildId) : void 0), [l]);
    return (0, s.jsx)(na.vN, {
        children: (0, s.jsx)("button", {
            ...E,
            className: o()(nO._X, { [nO.lG]: r, [nO.Lh]: a, [nO.Bx]: u, [A ?? ""]: u, [nO.TV]: d }),
            "data-type": U.g.EMOJI,
            "data-id": l.id,
            "data-name": l.name,
            "data-surrogates": "surrogates" in l ? l.surrogates : null,
            "data-animated": l.animated ? "true" : null,
            ref: t,
            children: (0, s.jsx)(nR, {
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
function nM(e) {
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
        [b, T] = r.useState(""),
        R = (0, h.bG)([eM.Ay], () => eM.Ay.useReducedMotion),
        O = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(o), [o]),
        L = r.useRef(null),
        { emoji: M, size: k, isDisabled: w, columnIndex: P } = t;
    function D() {
        d.current || m.current || u(t);
    }
    let { ref: U, tabIndex: G, onFocus: V, ...F } = x(P, a) ?? {},
        H =
            b !== `${P}:${a}`
                ? (0, s.jsx)(nL, {
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
                              let e = null == M.id ? e1.Ay.convertNameToSurrogate(M.name) : M.name,
                                  t = L.current.getBoundingClientRect();
                              ((t.x = _.x + (P + 1) * k), T(`${P}:${a}`), (0, nI.h)(S, e, M.id, t));
                          }
                          !(function (e) {
                              if ((e.stopPropagation(), d.current || m.current)) return;
                              let n = e.altKey;
                              (n &&
                                  !v.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(M) &&
                                  y(l),
                                  (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP),
                                  c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                          })(e);
                      },
                      onContextMenu: function (e) {
                          (0, nE.L3)(e, async () => {
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
            ? (0, s.jsx)(t_.m, {
                  text: et.intl.formatToPlainString(et.t.glqNsf, { key: (0, ny.isMac)() ? "Opt" : "Alt" }),
                  position: "top",
                  delay: 200,
                  children: H,
              })
            : H,
    );
}
let nk = (e) => {
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
        b = n(600003),
        T = n(318121),
        R = n(443336),
        O = n(258901),
        L = n(135974),
        M = n(8013),
        w = (0, Z.Ay)(),
        D = P.Om.getState(),
        [U, G] = r.useState(D.inspectedExpressionPosition),
        [V, H] = (0, no.A)(null, 300),
        B = r.useRef(null);
    (r.useEffect(
        () =>
            P.Om.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => G(e),
            ),
        [],
    ),
        r.useEffect(() => {
            nA.bW.loadIfNecessary();
        }, []));
    let W = l === eJ.as.LARGE,
        K = l === eJ.as.MEDIUM;
    function Y(e) {
        let t = `${e.rowIndex}c${e.columnIndex}`;
        switch (e.type) {
            case e7.EXPAND_OR_COLLAPSE_EMOJIS: {
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
                            ? b
                            : T,
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
                        (0, s.jsx)(na.vN, {
                            children: (0, s.jsx)("button", {
                                "aria-label": c,
                                ref: A,
                                className: o()(nO._X, {
                                    [nO.lG]: W,
                                    [nO.Lh]: K,
                                    [nO.Bx]: S && !h,
                                    [E ?? ""]: S,
                                    [nO.TV]: V === t,
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
                        e.type !== e7.EXPAND_OR_COLLAPSE_EMOJIS ||
                            (t.stopPropagation(),
                            m.current ||
                                f.current ||
                                (i(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                                (0, nu.G)(e.guildId),
                                e.sectionCollapsedToThreeRows || N(),
                                eo.default.track(Q.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId,
                                })));
                    },
                    icon: (0, s.jsx)("img", { className: nO.Kk, src: c, alt: "" }),
                    ariaLabel: h,
                    shouldShowRoundHighlight: !0,
                });
            }
            case e7.EMOJI: {
                let { columnIndex: n, visibleRowIndex: l } = e,
                    r = U.rowIndex === l && U.columnIndex === n;
                return (0, s.jsx)(
                    nM,
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
            case e7.SOUNDMOJI:
                return;
        }
    }
    function q(e) {
        return (0, s.jsx)("ul", {
            ...h(p),
            className: o()(nO.ND, { [nO.HO]: W, [nO.X$]: K }),
            ref: B,
            children: e.map(Y),
        });
    }
    if (C === eJ.R2.SOUNDMOJI)
        return (0, s.jsx)("ul", {
            className: nO.ND,
            ref: B,
            children: (0, s.jsx)(nx, { channelId: I, onSelectSoundmoji: a }),
        });
    if (C !== eJ.s.TOP_GUILD_EMOJI) return q(t);
    let J = t.filter(
            (e) =>
                e.subCategory === eJ.tm.TOP_GUILD_EMOJI ||
                (e.subCategory === eJ.tm.NEWLY_ADDED_EMOJI &&
                    e.emoji.type === e0.i.GUILD &&
                    !k.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
        ),
        $ = t.filter(
            (e) =>
                e.subCategory === eJ.tm.NEWLY_ADDED_EMOJI &&
                e.emoji.type === e0.i.GUILD &&
                k.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
        );
    return 0 === $.length
        ? q(t)
        : (0, s.jsxs)("div", {
              className: nO.Ng,
              children: [
                  (0, s.jsx)("div", { className: o()(nO.V6, { [nO.$3]: 0 === J.length }), children: q(J) }),
                  (0, s.jsxs)("div", {
                      className: nO.bc,
                      children: [
                          (0, s.jsx)("div", {
                              className: o()(nO.eE, { [nO.eM]: 1 === $.length, [nO.Wk]: J.length > 0 }),
                              children: q($),
                          }),
                          (0, s.jsxs)("div", {
                              className: o()(nO.lD, { [nO.EI]: W, [nO.qU]: K, [nO.Wk]: J.length > 0 }),
                              children: [
                                  (0, s.jsx)(nC.A, { foreground: nO.rI }),
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
let nP = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nD = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nU = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nG = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nV = (0, ec.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nF = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nH = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nB = r.memo(function (e) {
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
                isBurstReaction: b,
                listHeaderClassName: T,
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
                    b = r.useRef(Q.An1),
                    T = r.useMemo(() => ("" !== n ? tM.A.convert.toCodePoint(n) : ""), [n]),
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
                            (i ? l.delete(e) : l.add(e),
                                null != n &&
                                    eo.default.track(Q.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                        location: j.location,
                                        tab: eA.kx.EMOJI,
                                        collapsed: !i,
                                        guild_id: n.id,
                                    }),
                                e === eJ.R2.SOUNDMOJI &&
                                    eo.default.track(Q.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, { collapsed: !i }),
                                m(l));
                        },
                        [j, t, m],
                    ),
                    M = r.useCallback((e) => {
                        let { columnIndex: t, visibleRowIndex: n } = e,
                            l = e.type === e7.SOUNDMOJI ? null : e.type === e7.EMOJI ? (0, ef.N)(e.emoji) : e.name;
                        (b.current !== Q.An1 && window.cancelAnimationFrame(b.current),
                            (b.current = window.requestAnimationFrame(() => {
                                (P.Om.setInspectedExpressionPosition(t, n, U.t.MOUSE_EVENT),
                                    P.Om.setSearchPlaceholder(l),
                                    (b.current = Q.An1));
                            })));
                    }, []),
                    k = (0, h.bG)([ei.HP], () => ei.HP.hasHotspot(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                    w = r.useMemo(
                        () =>
                            eR().memoize((e, t) => {
                                let n = l[e],
                                    r = d[t.sectionIndex];
                                return (0, s.jsx)(
                                    nk,
                                    {
                                        emojiDescriptors: n,
                                        emojiSize: i,
                                        surrogateCodePoint: T,
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
                                        selectedItemClassName: nw.__invalid_selectedItem,
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
                        [l, d, i, T, M, a, u, f, p, g, x, C, k, E, I, y, S, _],
                    );
                r.useEffect(() => () => w.cache?.clear?.(), [w]);
                let G = r.useMemo(
                        () =>
                            eR().memoize((e) => {
                                let n = d[e];
                                if (null == n) return;
                                let { guild: l, categoryId: i, type: r, sectionId: a } = n;
                                if (r === eJ.s.SEARCH_RESULTS) return;
                                let u =
                                        r === eJ.s.GUILD
                                            ? null != l
                                                ? (0, s.jsx)(eX.A, { guild: l, height: 16, width: 16 })
                                                : null
                                            : null != i
                                              ? (0, s.jsx)(e$, { categoryId: i, height: 16, width: 16, size: "custom" })
                                              : null,
                                    c = l?.name;
                                null != i && (c = (0, ed.Nu)(i, l?.name));
                                let h = N === e,
                                    m = n.isNitroLocked,
                                    f = m && !h,
                                    p = m && h,
                                    g =
                                        r === eJ.s.SOUNDMOJI
                                            ? (0, s.jsx)(H.D, {
                                                  className: nw.f3,
                                                  onClick: () => {
                                                      ((0, D.U)(eA.kx.SOUNDBOARD),
                                                          eo.default.track(
                                                              Q.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK,
                                                          ));
                                                  },
                                                  children: et.intl.string(et.t.rUEjBe),
                                              })
                                            : void 0;
                                return (0, s.jsx)(
                                    ne.A,
                                    {
                                        className: o()(nw.wx, v, { [nw.RA]: f, [nw.sp]: p }),
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
                    V = (0, e2.k0)(),
                    F = r.useCallback(
                        (e, n) => {
                            let l = d[e],
                                i = O(e),
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
                        [t, d, O, R],
                    ),
                    B = r.useCallback(
                        (e) =>
                            O(e)
                                ? V
                                    ? (0, s.jsx)(ns.ap, {})
                                    : (0, s.jsx)(ns.Ay, {})
                                : R(e)
                                  ? (0, s.jsx)("div", { className: nw.pQ })
                                  : null,
                        [O, R, V],
                    ),
                    W = r.useCallback((e) => (O(e) ? 41 : 33 * !!R(e)), [O, R]),
                    K = r.useCallback(
                        (e) => (e === d.length - 1 || t.has(d[e]?.sectionId) || O(e) || R(e) ? 0 : nF),
                        [t, d, O, R],
                    );
                return {
                    listPadding: r.useMemo(() => ["" !== c ? nG : nP, nD, nU, 0], [c]),
                    renderRow: w,
                    renderSection: F,
                    renderSectionHeader: G,
                    renderSectionFooter: B,
                    sectionMarginBottom: K,
                    sectionHeaderHeight: r.useCallback((e) => (d[e].type === eJ.s.SEARCH_RESULTS ? 0 : nV), [d]),
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
                isBurstReaction: b,
                listHeaderClassName: T,
                activeSectionIndex: B,
                emojiListRef: a,
            }),
            er = (0, G.Fk)({
                activeCategoryIndex: O,
                isScrolling: R,
                listRef: a,
                onActiveCategoryIndexChange: function (e) {
                    (W(e), "" === L && P.Om.setActiveCategoryIndex(e));
                },
                scrollOffset: 0,
                searchQuery: L,
                disableForSearch: !1,
            });
        (0, G.FV)({ searchQuery: L, activeCategoryIndex: O, listRef: a });
        let ec = r.useCallback(
                (e) => {
                    (er(e),
                        nW({ emojiListRef: a, sectionDescriptors: f, scrollTop: e, searchQuery: L, setShowUpsell: Z }));
                },
                [er, a, f, L, Z],
            ),
            eh = f.length > 0;
        (r.useEffect(() => {
            K &&
                (eo.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: e_.e.EMOJI_PICKER_FLOATING_UPSELL,
                    location: V,
                    location_stack: F,
                }),
                (0, nn.sq)(Q.U7l.PREMIUM_UPSELL_VIEWED, F, () => (0, nl.uq)(e_.e.EMOJI_PICKER_FLOATING_UPSELL)));
        }, [V, F, K]),
            r.useEffect(() => {
                "" !== L && Z(!1);
            }, [L]));
        let em = r.useRef(null);
        return (
            r.useEffect(
                () => (
                    clearTimeout(em.current),
                    (em.current = setTimeout(() => {
                        (eh
                            ? t8.O.announce(et.intl.string(et.t.uZ4F2O), "polite")
                            : t8.O.announce(et.intl.string(et.t.IxxiKF), "assertive"),
                            (em.current = null));
                    }, 200)),
                    () => {
                        clearTimeout(em.current);
                    }
                ),
                [eh, L],
            ),
            (0, s.jsxs)("div", {
                className: nw.AD,
                children: [
                    eh
                        ? (0, s.jsx)(t4.A, {
                              role: "none presentation",
                              className: nw.p_,
                              listPadding: Y,
                              onScroll: ec,
                              renderRow: q,
                              renderSection: J,
                              renderSectionHeader: $,
                              renderSectionFooter: X,
                              rowCount: S,
                              rowCountBySection: p,
                              rowHeight: u + 2 * nH,
                              sectionHeaderHeight: en,
                              sectionMarginBottom: ee,
                              sectionFooterHeight: el,
                              stickyHeaders: !0,
                              ref: a,
                          })
                        : (0, s.jsx)(t5.A, {
                              message: (0, s.jsx)(z.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: et.intl.string(et.t.IxxiKF),
                              }),
                              className: nw.BZ,
                          }),
                    w || t7.Fr
                        ? null
                        : (0, s.jsx)(ni.d, {
                              showUpsell: K,
                              text:
                                  ((t = (0, eN.Dd)(e_.PremiumTypes.TIER_2)),
                                  et.intl.format(et.t.gMVjeS, {
                                      nitroTierName: t,
                                      onClick: () => {
                                          m({ type: e5.PREMIUM, emojiDescriptor: void 0 });
                                      },
                                  })),
                              button: ((n = (0, nt.qD)()), (0, eN.LE)(n, e_.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                              buttonAnalyticsObject: { section: Q.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                              leadingAction: (0, s.jsx)(nr.l, {
                                  size: "sm",
                                  className: nw.ij,
                                  location: E.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                              }),
                          }),
                ],
            })
        );
    }),
    nW = eR().throttle(
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
var nK = n(506774),
    nz = n(28863),
    nZ = n(277984),
    nY = n(404374),
    nq = n(780964),
    nJ = n(766075),
    n$ = n(166403),
    nX = n(506150);
let nQ = "premiumRetentionEmojiPickerNotice",
    n0 = nK.w.get(nQ),
    n1 = function (e) {
        let { closePopout: t, channel: n } = e,
            [l, i] = r.useState(!1),
            { subscription: a, hasFetchedSubscriptions: o } = (0, h.cf)([n$.A], () => ({
                subscription: n$.A.getPremiumSubscription(),
                hasFetchedSubscriptions: n$.A.hasFetchedSubscriptions(),
            }));
        if (
            (r.useEffect(() => {
                o || (0, nZ.hP)();
            }, [o]),
            null == a || !(0, eN.PK)(a.status) || l)
        )
            return null;
        let u = a.status === Q.Dmq.PAST_DUE ? (0, eN.ji)(a).expiresDate : _()(a.currentPeriodStart).add(e_.ph),
            c = `${a.id}:${u.toISOString()}`;
        if (n0 === c) return null;
        let d =
            eN.Ay.getPremiumType(a.planId) === e_.PremiumTypes.TIER_0
                ? nY.k0.PREMIUM_TIER_0
                : eN.Ay.getPremiumType(a.planId) === e_.PremiumTypes.TIER_1
                  ? nY.k0.PREMIUM_TIER_1
                  : nY.k0.PREMIUM_TIER_2;
        return (0, s.jsxs)(z.E, {
            variant: "text-xs/medium",
            color: "text-default",
            className: nX.g$,
            children: [
                (0, s.jsx)(eI.t, { size: "md", className: nX.lu, color: d }),
                (0, s.jsxs)("div", {
                    className: nX.Xn,
                    children: [
                        (0, s.jsx)(z.E, {
                            variant: "text-xs/normal",
                            children: et.intl.format(et.t.bTMjiO, {
                                planName: eN.Ay.getTierDisplayNameByPlanId(a.planId),
                                endsAt: u.toDate(),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            children: (0, s.jsx)(nz.Anchor, {
                                onClick: () => {
                                    ((0, ed.xf)(n), t(), (0, nJ.openUserSettings)(nq.X.NITRO_PANEL));
                                },
                                children: et.intl.string(et.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(H.D, {
                    onClick: () => {
                        (nK.w.set(nQ, c), (n0 = c), i(!0));
                    },
                    children: (0, s.jsx)(B.P, { size: "md", color: "currentColor", className: nX.YF }),
                }),
            ],
        });
    };
var n2 = n(148361);
let n3 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n6 = (0, ec.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
function n7(e) {
    return e.stopPropagation();
}
function n8(e, t) {
    P.Om.setInspectedExpressionPosition(e, t, U.t.GRID_NAVIGATOR_EVENT);
}
let n5 = c()(ed.bo, 200),
    n4 = c()(ed.Wi, 200),
    n9 = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    le = r.memo(
        r.forwardRef(function (e, t) {
            let n,
                l,
                {
                    pickerIntention: i,
                    channel: a,
                    guildId: u,
                    closePopout: c,
                    emojiSize: f = eJ.as.MEDIUM,
                    hasTabWrapper: N = !1,
                    onSelectEmoji: _,
                    onSelectSoundmoji: j,
                    containerWidth: b,
                    onNavigateAway: T,
                    persistSearch: R,
                    className: O,
                    headerClassName: L,
                    analyticsOverride: M = n9,
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
                eT = ea.default.getCurrentUser(),
                eO = (0, eu.ki)(eT),
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
                eZ = (0, G.oV)({ gridWrapperRef: eI, containerWidth: b, listPaddingLeft: n6, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: eY,
                    sectionDescriptors: eq,
                    emojiGrid: e$,
                    columnCounts: eX,
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
                        f = r.useMemo(() => (d ? e1.Ay.getCategories() : m), [m, d]),
                        p = (0, h.bG)([J.A], () => J.A.getGuild(t?.getGuildId()), [t]),
                        g = t?.getGuildId() ?? n,
                        x = (0, h.bG)([v.Ay], () => v.Ay.getDisambiguatedEmojiContext(g), [g]),
                        A = (0, ed.XI)(g),
                        C = (0, ed.Fj)(g),
                        E = (0, ed.QZ)(g),
                        { topEmojis: I, newlyAddedEmojis: y } = (0, eg.A)(g, i),
                        S = (0, h.yK)([e6.Ay], () => e6.Ay.getFlattenedGuildIds(), []),
                        N = (0, h.bG)([v.Ay], () => v.Ay.expandedSectionsByGuildIds),
                        _ = (0, h.bG)([ea.default], () => ea.default.getCurrentUser()),
                        j = (0, eu.ki)(_),
                        b = (0, e2.k0)(),
                        T = x.getGroupedCustomEmoji(),
                        R = (0, e3.Ym)({ location: "useEmojiGrid" });
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
                                        return (o.set(e, n), !n);
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
                                                    a.sectionId === eJ.s.TOP_GUILD_EMOJI
                                                        ? (0, ed.DA)(I, y, e.id ?? e.uniqueName ?? e.name)
                                                        : eJ.tm.NONE,
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
                                        (d.push(l.length), r.push(l), h++);
                                    }
                                    m++;
                                }
                                let j = { ...a, count: s.length };
                                (n.push(j), e.push(c ? 0 : S));
                            }
                            if (null != s)
                                (0 !== s.unlocked.length &&
                                    g(s.unlocked, {
                                        type: eJ.s.SEARCH_RESULTS,
                                        sectionId: eJ.s.SEARCH_RESULTS,
                                        count: s.unlocked.length,
                                        isNitroLocked: !1,
                                    }),
                                    0 !== s.locked.length &&
                                        g(s.locked, {
                                            type: eJ.s.PREMIUM_UPSELL,
                                            categoryId: eJ.R2.PREMIUM_UPSELL,
                                            sectionId: eJ.s.PREMIUM_UPSELL,
                                            count: s.locked.length,
                                            isNitroLocked: !j,
                                        }));
                            else {
                                if (R && c) {
                                    let t = [{ type: 2, rowIndex: m, columnIndex: 0, visibleRowIndex: h }];
                                    n.push({
                                        type: eJ.s.SOUNDMOJI,
                                        categoryId: eJ.R2.SOUNDMOJI,
                                        sectionId: "soundmoji",
                                        count: t.length,
                                        isNitroLocked: !1,
                                    });
                                    let i = l.has(eJ.R2.SOUNDMOJI);
                                    (!i && (d.push(t.length), r.push(t), h++), e.push(+!i), m++);
                                }
                                for (let e of f)
                                    if (e === eJ.R2.CUSTOM) {
                                        function v(n) {
                                            let l = T.get(n);
                                            if (null == l) return;
                                            let s = l.filter(
                                                (e) =>
                                                    !e8.includes(
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
                                                    b ||
                                                    (!j &&
                                                        ef.Ay.isEmojiCategoryNitroLocked({
                                                            categoryEmojis: s,
                                                            channel: t,
                                                            intention: i,
                                                        }));
                                            g(s, {
                                                categoryId: e,
                                                guild: r,
                                                type: eJ.s.GUILD,
                                                sectionId: null != r ? r.id : (0, eQ.A)(),
                                                count: s.length,
                                                isNitroLocked: a,
                                            });
                                        }
                                        if ((null != p && v(p.id), (0, ex.isExternalEmojiAllowedForIntention)(i)))
                                            for (let e of S) (null == p || p.id !== e) && v(e);
                                    } else if (e === eJ.R2.TOP_GUILD_EMOJI) {
                                        if (null != p) {
                                            let { allEmojis: t } = (0, ep.W)({ topEmojis: I, newlyAddedEmojis: y });
                                            t.length > 0 &&
                                                g(t, {
                                                    categoryId: e,
                                                    guild: J.A.getGuild(p.id),
                                                    type: eJ.s.TOP_GUILD_EMOJI,
                                                    sectionId: eJ.s.TOP_GUILD_EMOJI,
                                                    count: t.length,
                                                    isNitroLocked: !1,
                                                });
                                        }
                                    } else if (e === eJ.R2.RECENT) {
                                        let n = (i === ex.EmojiIntention.REACTION ? E : C).filter(
                                            (e) => !ef.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        g(n, {
                                            categoryId: e,
                                            type: eJ.s.RECENT,
                                            sectionId: eJ.s.RECENT,
                                            count: n.length,
                                            isNitroLocked: !1,
                                        });
                                    } else if (e === eJ.R2.FAVORITES) {
                                        let n = A.filter(
                                            (e) => !ef.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: i }),
                                        );
                                        0 !== n.length &&
                                            g(n, {
                                                categoryId: e,
                                                type: eJ.s.FAVORITES,
                                                sectionId: eJ.s.FAVORITES,
                                                count: n.length,
                                                isNitroLocked: !1,
                                            });
                                    } else {
                                        let t = e1.Ay.getByCategory(e);
                                        null != t &&
                                            g(t, {
                                                categoryId: e,
                                                type: eJ.s.UNICODE,
                                                sectionId: e,
                                                count: t.length,
                                                isNitroLocked: !1,
                                            });
                                    }
                            }
                        }
                        return { columnCounts: d, emojiGrid: r, rowCountBySection: e, sectionDescriptors: n };
                    }, [x, a, u, o, s, l, T, N, t, i, I, y, j, f, p, S, E, C, A, b, R, c]);
                })({
                    gridWidth: eZ,
                    fallbackGuildId: ev,
                    channel: a,
                    pickerIntention: i,
                    emojiSearchResults: eH,
                    collapsedSections: eK,
                    emojiPaddingHorizontal: n3,
                    emojiSpriteSize: f,
                    shouldShowSoundmojiInEmojiPicker: Z,
                    showOnlyUnicode: Y,
                }),
                { newlyAddedEmojis: e4 } = (0, eg.A)(ev, i);
            ((n = r.useRef({ intention: i, isBurstReaction: eN, analyticsObject: eP })),
                r.useEffect(() => {
                    n.current.intention === ex.EmojiIntention.REACTION && eC(n.current);
                }, []));
            let e9 = r.useCallback(() => {
                    let e = e4.length > 0 ? e4[0].id : null;
                    ((0, w.uV)(ev, e), eC({ intention: i, isBurstReaction: eN, analyticsObject: eP }));
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
                                        (a?.(e, c), s({ type: 0, emojiDescriptor: e }));
                                        return;
                                    }
                                    if (
                                        c === ex.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED &&
                                        r.type === e0.i.GUILD
                                    ) {
                                        (a?.(e, c), s({ type: 1, guildId: r.guildId, emojiId: r.id }));
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
                                      e.subCategory === eJ.tm.NEWLY_ADDED_EMOJI &&
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
                    (c(), T?.());
                }, [c, T]),
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
                                if (e.type === e7.EMOJI) {
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
                                    (u &&
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
                                                e.subCategory === eJ.tm.NEWLY_ADDED_EMOJI &&
                                                k.isNewerThanLastSeen(o, e.emoji.id),
                                        }),
                                        i({ emoji: e.emoji, willClose: !l.shiftKey, isBurst: u }));
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
                            gridNavigatorId: eJ.lq,
                            itemGrid: s,
                            itemList: a,
                            onGridNavigatorItemSelect: m,
                            onGridNavigatorPositionChange: n8,
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
                    columnCounts: eX,
                    onSelectEmoji: _,
                    emojiGrid: e$,
                    emojiList: ey,
                    channelGuildId: ev,
                    isBurstReaction: eL,
                });
            (((e, t) => {
                let [n, l] = r.useState(null);
                (r.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), l(null));
                }, [t, n]),
                    r.useEffect(() => {
                        l(P.Om.getState().activeCategoryIndex);
                    }, [e]));
            })(b, ey),
                r.useLayoutEffect(() => {
                    ee && eS.current?.focus();
                }, [b, eF, eS, ee]),
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
                            (n5.cancel(), n4.cancel());
                        }
                    ),
                    [eD, ev, eU, a],
                ),
                (0, C.Ay)(() => ((0, ed.V$)({ intention: i, location: eG }), (eA.current = eE), P.Om.resetStoreState)),
                r.useEffect(() => () => (0, ei.sF)(ei._2.FAVORITE_EMOJI_TOOLTIP), []),
                r.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = P.Om.getState().inspectedExpressionPosition;
                    e$[t]?.[e] == null && 0 !== e && P.Om.setInspectedExpressionPosition(0, 0);
                }, [e$]),
                r.useEffect(() => {
                    if (("" === eA.current && "" !== eE && (0, ed.EG)(eG, i), "" !== eE && eA.current !== eE)) {
                        let e = P.Om.getAnalyticsId();
                        0 === eB
                            ? n5({ location: eG, searchQuery: eE, intention: i, loadId: e })
                            : n4({
                                  totalResults: eB,
                                  numEmojiLocked: eH?.locked.length ?? 0,
                                  location: eG,
                                  searchQuery: eE,
                                  intention: i,
                                  loadId: e,
                              });
                    }
                    eA.current = eE;
                }, [eE, eG, eB, eH, i]));
            let ta = F ?? (N ? "div" : p.l),
                to = null != eZ;
            eh?.type === e5.PREMIUM
                ? (l = (0, s.jsx)(n2.default, {
                      onUpsellClicked: tt,
                      emojiDescriptor: eh.emojiDescriptor,
                      pickerIntention: i,
                      analyticsLocation: eG,
                      onClose: () => em(null),
                      channel: a,
                  }))
                : eh?.type === e5.ROLE_SUBSCRIPTION &&
                  (l = (0, s.jsx)(el, { onClose: () => em(null), guildId: eh.guildId, emojiId: eh.emojiId }));
            let tu = (0, s.jsx)(tX, {
                    channel: a,
                    pickerIntention: i,
                    emojiListRef: ey,
                    onKeyDown: (e) => {
                        (ts?.(e), X?.(e));
                    },
                    searchBarRef: eS,
                    onFocus: $,
                    autoFocus: ee,
                    accessory: en,
                    headerClassName: L,
                    diversitySurrogate: eF,
                    isBurstReaction: eN,
                    onBurstReactionToggle: function () {
                        (e_(!eN), eS.current?.focus());
                    },
                    burstToggleRef: ej,
                    renderHeader: W,
                    showAddEmojiButton: q,
                    closePopout: c,
                }),
                tc = [];
            v.Ay.hasFavoriteEmojis(ev) || tc.push(m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let td = (0, s.jsx)(x.A, {
                ...eG,
                children: (0, s.jsxs)(ta, {
                    id: eJ.Do,
                    "aria-labelledby": N ? eJ.k1 : void 0,
                    role: N ? "tabpanel" : void 0,
                    className: o()(t$.iE, { [t$.r6]: N, [t$.cB]: eL }),
                    children: [
                        N ? null : tu,
                        (0, s.jsxs)("div", {
                            className: o()(t$.Fb, O),
                            onScroll: n7,
                            children: [
                                N ? tu : null,
                                (0, s.jsxs)("div", {
                                    className: t$.uK,
                                    ref: eI,
                                    children: [
                                        (0, s.jsx)(n1, { channel: a, closePopout: c }),
                                        (0, s.jsx)(S.Ay, {
                                            contentTypes: tc,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === m.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, s.jsx)(tx, { markAsDismissed: () => n(tp.i.UNKNOWN) });
                                            },
                                        }),
                                        H
                                            ? null
                                            : (0, s.jsx)("div", {
                                                  className: t$.Iy,
                                                  id: eJ.lq,
                                                  ...ti,
                                                  children: to
                                                      ? (0, s.jsx)(nB, {
                                                            collapsedSections: eK,
                                                            diversitySurrogate: eF,
                                                            emojiGrid: e$,
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
                                                            rowCount: e$.length,
                                                            rowCountBySection: eY,
                                                            sectionDescriptors: eq,
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
                                (0, s.jsx)(t6, {
                                    emojiGrid: e$,
                                    className: t$.qV,
                                    guildId: ev,
                                    pickerIntention: i,
                                    channel: a,
                                }),
                                l,
                                i === ex.EmojiIntention.REACTION
                                    ? (0, s.jsx)(eb, {
                                          targetElementRef: ej,
                                          shouldShow: eN && !eO,
                                          onDismiss: () => e_(!1),
                                      })
                                    : null,
                            ],
                        }),
                        H
                            ? null
                            : (0, s.jsx)(tf, {
                                  className: o()(t$.jv, z),
                                  emojiListRef: ey,
                                  sectionDescriptors: eq,
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
