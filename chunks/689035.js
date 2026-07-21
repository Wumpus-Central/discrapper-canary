"use strict";
n.d(t, { A: () => r_ });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(435558),
    d = n.n(o),
    c = n(873263),
    u = n(837381),
    _ = n(621466),
    E = n(17928),
    A = n(554146),
    h = n(52133),
    I = n(451988),
    f = n(661531),
    p = n(192308),
    T = n(331322),
    m = n(312138),
    g = n(602853),
    S = n(43990),
    N = n(689175),
    C = n(951001),
    O = n(964486),
    R = n(260762),
    L = n(793574),
    y = n(688810),
    D = n(313961),
    v = n(268218),
    b = n(558845),
    M = n(131607),
    P = n(313281),
    U = n(832275);
n(321073);
var w = n(43105),
    G = n(857250),
    x = n(691540),
    k = n(862328),
    F = n(67811),
    V = n(27232),
    B = n(403581),
    H = n(308528),
    j = n(933958),
    W = n(969151),
    Y = n(941971),
    K = n(900848),
    $ = n(771640),
    z = n(532794),
    q = n(366811),
    Z = n(345942),
    X = n(616356),
    Q = n(734057),
    J = n(309010),
    ee = n(977997),
    et = n(935208),
    en = n(181079),
    ei = n(422258),
    er = n(668267),
    ea = n(5180),
    es = n(695633),
    el = n(152007),
    eo = n(458294),
    ed = n(576705),
    ec = n(568548),
    eu = n(543465),
    e_ = n(780645),
    eE = n(451394),
    eA = n(597601),
    eh = n(834730),
    eI = n(983851),
    ef = n(183623),
    ep = n(323384),
    eT = n(866665),
    em = n(104171),
    eg = n(63995),
    eS = n(518769),
    eN = n(287809),
    eC = n(607567),
    eO = n(403362),
    eR = n(652215),
    eL = n(375708),
    ey = n(833971);
function eD(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: ey.nM,
              children: [
                  (0, r.jsx)(e, { className: ey.RI, color: "currentColor" }),
                  (0, r.jsx)(em.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function ev() {
    let e = (0, E.yK)([en.A, Q.A], () =>
            et.default
                .keys(en.A.getFavoriteChannels())
                .map((e) => Q.A.getChannel(e))
                .filter(eO.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eR.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eR.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, E.yK)(
            [eC.Ay],
            () =>
                d().flatMap(n, (e) =>
                    eC.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, E.yK)([eg.A], () =>
            d().flatMap(i, (e) =>
                eg.A.getMutableParticipants(e, eS.ip.SPEAKER)
                    .filter((e) => e.type === eS.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, E.bG)([eg.A], () => {
            let e = 0;
            for (let t of i) e += eg.A.getParticipantCount(t, eS.ip.AUDIENCE);
            return e;
        }),
        o = (0, E.yK)(
            [X.A],
            () =>
                X.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, E.yK)([j.Ay], () => {
            let e = j.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        u = (0, E.yK)([eN.default], () => c.map((e) => eN.default.getUser(e)), [c]),
        _ = (0, E.yK)([eN.default], () => o.map((e) => eN.default.getUser(e)), [o]),
        A = eD(
            eI.H,
            a.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, r.jsxs)("div", {
                      className: ey.nM,
                      children: [
                          (0, r.jsx)(eE.q, { size: "lg", color: "currentColor", className: ey.RI }),
                          (0, r.jsx)(em.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: ey.GZ,
                              children: [
                                  (0, r.jsx)(eA.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eh.E, {
                                      className: ey._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        I = eD(
            ef.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        f = eD(ep.k, u);
    return (0, r.jsxs)(r.Fragment, { children: [h, A, I, f] });
}
function eb() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(ey.nM, ey.Dl),
                children: (0, r.jsx)("span", { className: l()(ey.cN, ey.NT), children: eL.intl.string(eL.t.wMWyci) }),
            }),
            (0, r.jsx)(ev, {}),
        ],
    });
}
function eM(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = a.useMemo(
            () =>
                (0, r.jsx)(eh.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: ey.A_,
                    children: (0, r.jsx)(eb, {}),
                }),
            [],
        );
    return (0, r.jsx)(eT.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eP = n(97483),
    eU = n(49999),
    ew = n(202541),
    eG = n(335993),
    ex = n(191775),
    ek = n(988572);
let eF = { analyticsSource: { page: eR.liQ.GUILD_CHANNEL, section: eR.JJy.CHANNEL_LIST, object: eR.ZSU.CHANNEL } };
function eV(e) {
    let t,
        i,
        s,
        l,
        o,
        d,
        c,
        _,
        A,
        h,
        I,
        f,
        { shouldShowIntroPopover: T, markIntroPopoverAsDismissed: m } = e,
        g = (0, u.Vd)("favorites"),
        { favoriteAdded: S, clearFavoriteAdded: N } = (0, P.CJ)(),
        C = a.useRef(null),
        { analyticsLocations: O } = (0, y.Ay)(L.A.FAVORITES_GUILD_BUTTON),
        [R, D] = a.useState(!1),
        v = (0, e_.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: b,
            favoriteGuildMuted: M,
            favoriteChannels: U,
        } = (0, E.cf)([en.A], () => ({
            favoriteGuildEnabled: en.A.favoriteGuildEnabled,
            favoriteChannels: en.A.getFavoriteChannels(),
            favoriteGuildMuted: en.A.favoriteGuildMuted,
        })),
        eE = (0, E.bG)([J.Ay], () => J.Ay.getChannelId(eR.YYv)),
        eA = (0, E.bG)([Q.A], () => Q.A.getChannel(eE)),
        eh = (0, q.A)((e) => e.guildId),
        eI = (0, ea.ai)(eh),
        { badge: ef, unread: ep } = (0, E.cf)([es.A, Q.A, eo.default, el.A, ed.A, ec.Ay, eu.Ay], () => {
            let e = et.default.keys(U),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = Q.A.getChannel(n),
                        r = i?.getGuildId(),
                        a = ec.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + a)),
                        (e.unread = e.unread || (ec.Ay.hasUnread(n) && eo.default.shouldCountChannelUnread(i, a))),
                        null != r)
                    ) {
                        let i = es.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = ec.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = Q.A.getChannel(n);
                            e.unread = e.unread || (ec.Ay.hasUnread(n) && eo.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        eT =
            ((i = null != (t = (0, E.bG)([J.Ay], () => J.Ay.getVoiceChannelId())) && null != U[t]),
            (s = (0, E.bG)([X.A], () => {
                if (!i) return !1;
                let e = X.A.getCurrentUserActiveStream();
                return null != e && null != U[e.channelId];
            })),
            (l = (0, E.bG)([X.A], () => X.A.getAllApplicationStreams().some((e) => null != U[e.channelId]))),
            (o = (0, E.bG)([ee.A], () => i && null != t && ee.A.hasVideo(t), [i, t])),
            (d = (0, E.yK)([j.Ay], () =>
                et.default.keys(U).reduce((e, t) => (e.push(...j.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (c = (0, E.bG)([j.Ay], () =>
                Array.from(j.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, W.H)(t);
                    return null != n && null != U[n];
                }),
            )),
            (_ = d.length > 0),
            (A = !1),
            (h = !1),
            (I = !1),
            (f = !1),
            i ? ((A = !o), (h = o), (I = s), (f = c)) : ((I = l), (f = _)),
            (0, $.oi)({ audio: A, video: h, screenshare: I, liveStage: !1, isCurrentUserConnected: i, activity: f })),
        em = ef > 0 ? (0, $.wN)(ef) : null,
        eg = a.useRef(!1),
        { hasAccess: eS } = (0, P.TW)("FavoritesButton"),
        eN = a.useCallback(
            (e, t) => {
                (eg.current = !0), m(e, t);
            },
            [m],
        ),
        eC = a.useCallback(
            (e) => {
                e && ((0, er.mv)("intro_dc"), (0, Z.u)(eR.YYv)),
                    eS
                        ? (b || (0, ei.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, p.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("73216"),
                                      n.e("73883"),
                                      n.e("74390"),
                                      n.e("36946"),
                                      n.e("92639"),
                                      n.e("40963"),
                                      n.e("66031"),
                                      n.e("59839"),
                                  ]).then(n.bind(n, 889186));
                                  return (t) =>
                                      (0, r.jsx)(e, { ...t, parentId: null, source: "favorites_button_onboarding" });
                              }))
                        : e && (0, z.A)({ subscriptionTier: ew.pe.TIER_2, analyticsLocations: O }),
                    eN(eU.i.TAKE_ACTION);
            },
            [eN, b, eS, O],
        );
    return (
        a.useEffect(() => {
            T && (eg.current = !1);
        }, [T]),
        a.useEffect(
            () => () => {
                T && !eg.current && eN(eU.i.AUTO_DISMISS, !0);
            },
            [eN, T],
        ),
        a.useEffect(() => {
            if (S) {
                let e = (0, G.o)(eL.intl.string(eL.t["4tSWQg"]), eP.Ck.FAVORITE);
                (0, x.P0)(e);
                let t = setTimeout(N, e.options?.duration ?? eP.jg.duration);
                return () => {
                    N(), clearTimeout(t);
                };
            }
        }, [S, N]),
        (0, r.jsxs)(K.c, {
            children: [
                (0, r.jsx)(Y.A, { overlay: !0, selected: eI, hovered: R, unread: ep && !M }),
                (0, r.jsx)(eM, {
                    children: (0, r.jsx)(k.Q, {
                        selected: !0,
                        upperBadge: eT,
                        lowerBadge: em,
                        children: (0, r.jsx)("div", {
                            ref: C,
                            children: (0, r.jsx)(F.j, {
                                ...g,
                                ariaLabel: eL.intl.formatToPlainString(eL.t["/uzRss"], {
                                    guildName: eL.intl.string(eL.t.wMWyci),
                                    mentions: ef,
                                }),
                                "aria-selected": eI,
                                to: { pathname: eR.BVt.CHANNEL(eR.YYv, eE), state: eF },
                                selected: eI || R,
                                onClick: () => {
                                    T && eC(!1);
                                },
                                onMouseEnter: () => D(!0),
                                onMouseLeave: () => D(!1),
                                onMouseDown: function () {
                                    null != eA && H.A.preload(eA.guild_id, eA.id);
                                },
                                onContextMenu: v,
                                children: (0, r.jsx)(V.G, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: ex.w,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
                T &&
                    (0, r.jsx)(w.A, {
                        targetElementRef: C,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: ek.A, type: "image", aspectRatio: "16/9" },
                        title: eL.intl.string(eG.default["bu/mLv"]),
                        body: eL.intl.string(eG.default["/x2jT7"]),
                        onRequestClose: () => eN(eU.i.USER_DISMISS),
                        actions: [
                            {
                                icon: B.t,
                                text: eS ? eL.intl.string(eG.default["0lHa0Z"]) : eL.intl.string(eG.default["0nZZEk"]),
                                onClick: () => eC(!0),
                                variant: eS ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
var eB = n(633965),
    eH = n(857071),
    ej = n(851109),
    eW = n(72314),
    eY = n(543897),
    eK = n(696451),
    e$ = n(71393),
    ez = n(711014),
    eq = n(723702),
    eZ = n(757780),
    eX = n(263715),
    eQ = n(967198),
    eJ = n(173860),
    e0 = n(383394),
    e1 = n(131677),
    e2 = n(228366);
let e3 = {};
class e6 extends E.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (e3[t] = e[t]);
            });
    }
    getState() {
        return e3;
    }
    hasViewed(e) {
        return null != e3[e];
    }
}
let e4 = new e6(e2.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        e3[t] = Date.now();
    },
});
var e5 = n(531685),
    e7 = n(583613);
let e8 = "app-download-item",
    e9 = "add-server-item";
function te() {
    return !1;
}
function tt(e) {
    let t = eo.default.getMutableGuildStates();
    return (
        (e === eR.sFm.SERVER_DISCOVERY_BADGE && !e4.hasViewed(eR.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e8 && e !== e9 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tn = (0, e7.L_)((e, t, n) => ["null", ...t, ...e, e9, eR.sFm.E3_SERVER_DISCOVERY_BADGE, e8]),
    ti = a.forwardRef(function (e, t) {
        let n = (0, E.yK)([ez.Ay, e1.A, eo.default], () =>
                tn(ez.Ay.getGuildFolders(), e1.A.getUnreadPrivateChannelIds(), eo.default.getStoreChangeSentinel()),
            ),
            i = (0, E.bG)([e5.A], () => e5.A.isFocused()),
            a = (0, E.bG)([e0.A], () => e0.A.getExpandedFolders());
        return (0, r.jsx)(eJ.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: te,
            textUnread: eL.intl.string(eL.t.y2b7CA),
            textMention: eL.intl.string(eL.t.y2b7CA),
            isMentioned: tt,
            animate: i,
            expandedFolders: a,
        });
    });
n(667532);
var tr = n(868285),
    ta = n(763827),
    ts = n(617498),
    tl = n(778712),
    to = n(812993),
    td = n(442433),
    tc = n(620982),
    tu = n(571694),
    t_ = n(47167),
    tE = n(562819),
    tA = n(963977),
    th = n(598104),
    tI = n(956705),
    tf = n(994500);
function tp(e, t) {
    return e
        .filter((e) => (0, eO.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tf.A.isBlockedOrIgnored(e.id)));
}
function tT(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tf.A.isBlockedOrIgnored(e)));
}
var tm = n(427358),
    tg = n(907459),
    tS = n(145408);
function tN(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: ey.nM,
              children: [
                  (0, r.jsx)(t, { className: ey.RI, color: "currentColor" }),
                  (0, r.jsx)(em.Ay, { users: n, max: 6 }),
              ],
          });
}
function tC(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eh.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eL.intl.string(eL.t.fpKdS1),
          })
        : (0, r.jsx)(tS.A, { muteConfig: t, className: n });
}
function tO(e) {
    let t,
        n,
        i,
        s,
        o,
        d,
        c,
        u,
        _,
        A,
        h,
        I,
        f,
        { channel: p } = e,
        T = p.id,
        {
            activityUsers: m,
            streamUsers: g,
            voiceUsers: S,
        } = ((t = p.id),
        (n = (0, E.yK)([tf.A], () => tf.A.getBlockedOrIgnoredIDs())),
        (i = (0, E.bG)([tm.A], () => tm.A.getUserAffinitiesMap(), [])),
        (s = (0, E.yK)(
            [j.Ay, eN.default],
            () =>
                j.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eN.default.getUser(e)),
            [t],
        )),
        (o = a.useMemo(() => tp(s, n), [s, n])),
        (d = a.useMemo(() => (0, tg.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, E.yK)(
            [X.A, eN.default],
            () =>
                tp(
                    X.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => eN.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (u = a.useMemo(() => tp(c, n), [c, n])),
        (_ = a.useMemo(() => (0, tg.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (A = a.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, E.yK)(
            [eC.Ay],
            () =>
                tp(
                    eC.Ay.getVoiceStatesForChannel(p).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [p, n],
        )),
        (I = a.useMemo(() => tp(h, n), [h, n])),
        (f = a.useMemo(() => (0, tg.L)(I, i, "DirectMessageTooltip - voiceUsers"), [I, i])),
        {
            voiceUsers: a.useMemo(
                () => f.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [f, d, _],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, r.jsx)(tN, { icon: eI.H, users: S }),
        C = (0, r.jsx)(tN, { icon: ef.F, users: g }),
        O = (0, r.jsx)(tN, { icon: ep.k, users: m }),
        { isMuted: R, muteConfig: L } = (0, E.cf)(
            [eu.Ay],
            () => ({ isMuted: eu.Ay.isChannelMuted(null, T), muteConfig: eu.Ay.getChannelMuteConfig(null, T) }),
            [T],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            C,
            O,
            R ? (0, r.jsx)(tC, { muteConfig: L, className: l()(ey.LM, { [ey.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tR(e) {
    let { channel: t } = e,
        n = (0, t_.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(ey.nM, ey.Dl),
                children: (0, r.jsx)("span", { className: l()(ey.cN, ey.NT), children: n }),
            }),
            (0, r.jsx)(tO, { channel: t }),
        ],
    });
}
function tL(e) {
    let { channel: t, children: n } = e,
        i = (0, t_.Ay)(t),
        s = a.useMemo(
            () =>
                (0, r.jsx)(eh.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: ey.A_,
                    children: (0, r.jsx)(tR, { channel: t }),
                }),
            [t],
        );
    return (0, r.jsx)(eT.m, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let ty = { friction: 28, tension: 600 };
function tD(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...ty };
        case "scale":
            return { ...ty };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tv extends a.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new ts.Controller({ scale: 0, height: 0, opacity: 0, config: tD }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !e5.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tD })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tD }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !e5.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tD }).start().then(e),
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { size: e } = this.props,
            { controller: t } = this.state,
            { opacity: n, height: i, scale: r } = t.springs;
        return { opacity: n, height: i.to([0, 1], [0, e]), transform: r.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`) };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === eR.rbe.DM ? eN.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tu.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eR.rbe.DM ? eN.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, td.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("97422"),
                      n.e("40351"),
                      n.e("76279"),
                      n.e("45309"),
                      n.e("97705"),
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93103"),
                      n.e("93190"),
                      n.e("34552"),
                      n.e("91763"),
                      n.e("8757"),
                      n.e("71210"),
                      n.e("85968"),
                      n.e("38730"),
                      n.e("89673"),
                      n.e("68403"),
                      n.e("88342"),
                      n.e("29787"),
                      n.e("89421"),
                      n.e("98965"),
                      n.e("82073"),
                      n.e("97558"),
                      n.e("91994"),
                      n.e("76665"),
                      n.e("35313"),
                      n.e("76273"),
                      n.e("36564"),
                      n.e("34971"),
                      n.e("45996"),
                      n.e("792"),
                      n.e("92822"),
                      n.e("23427"),
                      n.e("29422"),
                      n.e("74610"),
                      n.e("38056"),
                      n.e("9291"),
                      n.e("7059"),
                      n.e("8829"),
                      n.e("42339"),
                      n.e("16054"),
                      n.e("98199"),
                      n.e("17244"),
                      n.e("41175"),
                      n.e("39778"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, td.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("91763"),
                      n.e("38730"),
                      n.e("34971"),
                      n.e("42339"),
                      n.e("68530"),
                      n.e("12520"),
                      n.e("17244"),
                      n.e("53416"),
                      n.e("60200"),
                  ]).then(n.bind(n, 4027));
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: i,
                audio: a,
                video: s,
                stream: l,
                isCurrentUserInThisDMCall: o,
                isIncomingCall: d,
                isOngoingCall: c,
                unread: u,
                treeItemProps: _,
                avatarDecorationSrc: E,
                onDecorationMouseEnter: A,
                onDecorationMouseLeave: h,
            } = this.props,
            { hovered: I, animating: f } = this.state,
            p = e.isMultiUserDM() && null == e.icon,
            T = () =>
                (0, r.jsx)(F.j, {
                    to: eR.BVt.CHANNEL(eR.ME, e.id),
                    onMouseEnter: () => {
                        this.setState({ hovered: !0 }), A?.();
                    },
                    onMouseLeave: () => {
                        this.setState({ hovered: !1 }), h?.();
                    },
                    selected: n || I,
                    ariaLabel:
                        null != t
                            ? [
                                  eL.intl.formatToPlainString(eL.t.hKarnZ, { name: t, mentions: i }),
                                  d ? eL.intl.string(eL.t["fk1/bX"]) : c ? eL.intl.string(eL.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: p ? void 0 : this.getChannelIcon(),
                    backgroundStyle: p ? "on-hover" : "always",
                    children: p
                        ? (0, r.jsx)(th.A, {
                              channel: e,
                              size: tl._3.SIZE_40,
                              facepileSizeOverride: tl._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, r.jsx)(ts.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, hovered: !f && I, selected: !f && n, unread: !f && u }),
                    (0, r.jsx)(tL, {
                        channel: e,
                        children: (0, r.jsx)(k.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, $.wN)(i, void 0, !0) : null,
                            upperBadge: (0, $.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, to.o6)(i) },
                            decorationSrc: E,
                            children: T(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tb = a.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, t_.Ay)(e.channel),
        a = (0, u.Vd)(n, 2),
        s = (0, E.bG)([ta.A], () => ta.A.getChannelId(), []),
        l = (0, E.bG)([D.A], () => D.A.getMode(n), [n]),
        o = (0, E.bG)([X.A], () => X.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, E.bG)([eC.Ay], () => eC.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, E.bG)([J.Ay], () => J.Ay.getChannelId(), []),
        _ = (0, E.bG)([ec.Ay], () => ec.Ay.getMentionCount(n), [n]),
        A = s === n,
        { isIncomingCall: h, isOngoingCall: I } = (0, tc.A)(n),
        p = !1,
        T = !1;
    (A || d) && ((p = l === eR._Of.VOICE), (T = l === eR._Of.VIDEO));
    let m = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE),
        S = (0, tI.r)("GuildsBarDirectMessage"),
        N = (0, E.bG)(
            [eN.default],
            () => (e.channel.type === eR.rbe.DM ? eN.default.getUser(e.channel.getRecipientId()) : null),
            [e.channel],
        ),
        {
            avatarDecorationSrc: C,
            eventHandlers: { onMouseEnter: O, onMouseLeave: R },
        } = (0, tA.A)({ user: N, size: (0, tE.Te)(m), onlyAnimateOnHoverOrFocus: !0 }),
        L = S && null != N;
    return (0, r.jsx)(tv, {
        ...e,
        ref: t,
        channelName: i,
        unread: _ > 0,
        selected: c === n,
        badge: _,
        audio: p,
        video: T,
        stream: o,
        isCurrentUserInThisDMCall: A,
        isIncomingCall: h,
        isOngoingCall: I,
        size: m,
        treeItemProps: a,
        avatarDecorationSrc: L ? C : null,
        onDecorationMouseEnter: O,
        onDecorationMouseLeave: R,
    });
});
function tM() {
    (0, E.bG)([Q.A], () => Q.A.getPrivateChannelsVersion());
    let e = Q.A.getMutablePrivateChannels(),
        t = (0, E.yK)([e1.A], () => e1.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, E.cf)([ta.A], () => ({
            selectedVoiceGuildId: ta.A.getGuildId(),
            selectedVoiceChannelId: ta.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tb, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && s.unshift((0, r.jsx)(tb, { channel: l }, l.id)),
        (0, r.jsx)(T.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eL.intl.string(eL.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, r.jsx)(tr.F, { component: a.Fragment, children: s }),
        })
    );
}
var tP = n(32880),
    tU = n(939249),
    tw = n(589340);
function tG(e) {
    let {
            children: t,
            text: n,
            disableWrapper: i = !1,
            disabled: s = !1,
            hideOnClick: o = !0,
            shouldShow: d,
            forceOpen: c,
            selected: u = !1,
        } = e,
        _ = a.useMemo(
            () =>
                null == n || s
                    ? null
                    : (0, r.jsx)(eh.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: ey.A_,
                          children: n,
                      }),
            [n, s],
        ),
        E = i ? t : (0, r.jsx)("div", { className: l()(tw.p, { [tw.w]: u }), children: t });
    return (0, r.jsx)(eT.m, {
        __unsupportedReactNodeAsText: _,
        position: "right",
        spacing: 12,
        hideOnClick: o,
        shouldShow: d,
        forceOpen: c,
        ariaHidden: !0,
        asContainer: !i,
        children: E,
    });
}
var tx = n(633435);
let tk = a.forwardRef(function (e, t) {
        let {
                id: n,
                onClick: i,
                onContextMenu: s,
                icon: o,
                selected: d,
                tooltip: c,
                upperBadge: _,
                lowerBadge: E,
                lowerBadgeSize: A,
                showPill: h = !0,
                className: I,
                "aria-label": f,
                children: p,
                onMouseEnter: T,
                onMouseLeave: m,
                onMouseDown: g,
            } = e,
            S = (0, u.Vd)(n),
            [N, C] = a.useState(!1),
            O = f ?? ("string" == typeof c ? c : void 0);
        return (0, r.jsxs)(K.c, {
            children: [
                h ? (0, r.jsx)(Y.A, { overlay: !0, hovered: N, selected: d }) : null,
                (0, r.jsx)(tG, {
                    text: c,
                    selected: d,
                    children: (0, r.jsx)(k.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: E,
                        lowerBadgeSize: A,
                        children: (0, r.jsx)(tU.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                T?.(), C(!0);
                            },
                            onMouseLeave: () => {
                                m?.(), C(!1);
                            },
                            onMouseDown: g,
                            className: l()(tx.oZ, I, { [tx.wH]: d || N }),
                            onClick: i,
                            "aria-label": O,
                            "aria-selected": d,
                            onContextMenu: s,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != o && (0, r.jsx)(o, { className: tx.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                p,
            ],
        });
    }),
    tF = "DOWNLOAD_APPS";
function tV() {
    let e = (0, p.useModalsStore)((e) => (0, p.hasModalOpenSelector)(e, tF));
    return (0, r.jsx)(tk, {
        id: "app-download-button",
        onClick: () => {
            (0, p.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tF },
            );
        },
        selected: e,
        tooltip: eL.intl.string(eL.t.Z7jwrJ),
        icon: tP.s,
    });
}
var tB = n(245604),
    tH = n(272613),
    tj = n(398884),
    tW = n(772366),
    tY = n(728321),
    tK = n(260509),
    t$ = n(284009),
    tz = n.n(t$),
    tq = n(295868),
    tZ = n(66834),
    tX = n(174459),
    tQ = n(896970);
function tJ(e) {
    let t = a.useRef(null),
        n = e.map((e) => e[0]);
    return (
        a.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
                let n = t.current;
                if (null != n) for (let [t, i] of e) t ? n.classList.add(i) : n.classList.remove(i);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function t0(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tz()(t.type !== eX.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eX.PJ.FOLDER || t.type !== eX.PJ.FOLDER) &&
                (e.type !== eX.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                i && t.type !== eX.PJ.FOLDER && tX.default.track(eR.HAw.GUILD_FOLDER_CREATED),
                    tZ.A.moveById(r, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function t1(e) {
    let { name: t, targetNode: n, combine: i, below: s } = e,
        l = a.useMemo(() => t0([eX.PJ.GUILD, eX.PJ.FOLDER], n, s, i), [n, s, i]),
        [{ canDrop: o, isOver: d }, c] = (0, tq.H)(l),
        u = tJ([
            [o, tQ.OP],
            [d, tQ.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (u.current = e), c(e);
        },
        "data-dnd-name": eL.intl.formatToPlainString(eL.t["A5aDw+"], { itemName: t }),
        className: tQ.aC,
    });
}
function t2(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, d] = (0, tq.H)(() => t0([eX.PJ.GUILD], n, !0, !0));
    a.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = tJ([
        [s, tQ.OP],
        [o, tQ.NQ],
    ]);
    return (0, r.jsx)(tG, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (c.current = e), d(e);
            },
            "data-dnd-name": eL.intl.formatToPlainString(eL.t.qiQ0QI, { itemName: t }),
            className: l()(tQ.dw, {}),
        }),
    });
}
let t3 = a.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: a = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: tQ.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(t1, { name: t, targetNode: n, below: a }),
            l ? (0, r.jsx)(t2, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function t6(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: a }, s] = (0, tq.H)(() => t0([eX.PJ.GUILD], n, !0, !0)),
        l = tJ([[a, tQ.a7]]),
        o = tJ([
            [a, tQ.NQ],
            [i, tQ.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: l,
        className: tQ.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: tQ.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (o.current = e), s(e);
                },
                "aria-label": `At end of ${t}`,
                className: tQ.aC,
            }),
        }),
    });
}
function t4(e) {
    let { children: t } = e,
        [, n] = (0, tq.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var t5 = n(819638),
    t7 = n(441174);
let t8 = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function t9(e) {
    (0, td.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function ne(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, E.yK)([e$.A], () => e$.A.getGuildsArray()),
        s = (0, E.bG)([eN.default], () => eN.default.getCurrentUser()),
        l = a.useMemo(() => i.some((e) => (0, tK.bM)(e, s)), [i, s]),
        o = (0, p.useModalsStore)((e) => (0, p.hasModalOpenSelector)(e, t5.fc)),
        { analyticsLocations: d } = (0, y.Ay)();
    return (0, r.jsx)("div", {
        className: t7.Uq,
        children: (0, r.jsxs)(tY.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: t8,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tk, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tj.Sn)()
                            ? (0, tW.A)({
                                  analyticsSource: { page: eR.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eR.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eR.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tH.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: t9,
                    tooltip: eL.intl.string(eL.t.l5WIbf),
                    icon: tB.U,
                }),
                null != n &&
                    (0, r.jsx)(t3, { name: eL.intl.string(eL.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var nt = n(565787),
    nn = n(791606),
    ni = n(486020),
    nr = n(184291);
function na(e) {
    let [t, i] = a.useState(!1),
        s = (0, u.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(K.c, {
        children: (0, r.jsx)(tG, {
            text: e.name,
            children: (0, r.jsx)(k.Q, {
                className: nr.o,
                selected: t,
                lowerBadge: (0, r.jsx)(to.fk, { icon: (0, nt.k)(nn.A), disableColor: !0, className: nr._ }),
                children: (0, r.jsx)(F.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        i(!0);
                    },
                    onMouseLeave: function () {
                        i(!1);
                    },
                    onClick: function () {
                        (0, p.openModalLazy)(async () => {
                            let { default: t } = await n.e("42945").then(n.bind(n, 537560));
                            return (n) => (0, r.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? ni.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var ns = n(696292),
    nl = n(836480),
    no = n(533129),
    nd = n(726845),
    nc = n(837057),
    nu = n(310419),
    n_ = n(488995),
    nE = n(324580),
    nA = n(190107);
let nh = a.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: s, className: l } = e,
        o = a.useCallback(() => {
            (0, no.WL)({ source: n_.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== s ? n_.GlobalDiscoveryTab.QUESTS : nd.A.getField("selectedTab");
            switch (e) {
                case n_.GlobalDiscoveryTab.QUESTS:
                    return (0, nc.transitionToGlobalDiscovery)({
                        tab: n_.GlobalDiscoveryTab.QUESTS,
                        location: nA.rE.DISCOVERY_COMPASS,
                        questContent: ns.u.DISCOVERY_COMPASS,
                        questId: s,
                    });
                case n_.GlobalDiscoveryTab.SERVERS:
                    return (0, nc.transitionToGlobalDiscovery)({
                        tab: n_.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nE.J8.GUILDS_BAR,
                    });
                case n_.GlobalDiscoveryTab.APPS:
                    return (0, nc.transitionToGlobalDiscovery)({
                        tab: n_.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nu.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, nc.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [s]);
    return (0, r.jsx)(tk, {
        id: "guild-discover-button",
        ref: t,
        className: l,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: eL.intl.string(eL.t["4nEZLk"]),
        icon: nl.Q,
    });
});
var nI = n(506774),
    nf = n(509963),
    np = n(111159),
    nT = n(793943),
    nm = n(428262),
    ng = n(350972),
    nS = n(677056),
    nN = n(526162),
    nC = n(174197);
function nO() {
    let [e, t] = (0, E.yK)([eN.default, nN.A], () => [
            nN.A.getCurrentDesktopIcon(),
            nm.Ay.isPremium(eN.default.getCurrentUser()),
        ]),
        n = (0, nT.fy)().activePanel === nT.HP.APP_ICON,
        i = (0, nC.gG)(e),
        a = i.id !== ng.LW.DEFAULT && (t || n),
        s = (0, r.jsx)(np.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && a ? (0, r.jsx)(nS.A, { id: i.id, size: nC.N8.SIZE_48 }) : s;
}
var nR = n(531260),
    nL = n(411976),
    ny = n(912309),
    nD = n(400492),
    nv = n(354670),
    nb = n(619921),
    nM = n(340829),
    nP = n(966846),
    nU = n(674378),
    nw = n(394953),
    nG = n(235079),
    nx = n(143170);
let nk = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nF(e) {
    let { selected: t, user: n, badge: i, link: s, showProgressBadge: l } = e,
        [o, d] = a.useState(!1),
        [c, _] = a.useState(!1),
        [E, A] = a.useState(null),
        [h, I] = a.useState(0),
        f = (0, u.Vd)("home"),
        p = (0, nT.fy)().activePanel === nT.HP.APP_ICON;
    function T() {
        A(null), I(0), clearTimeout(E);
    }
    if (null == n) return null;
    let m = eL.intl.string(eL.t.YUU0RF);
    c && (m = nI.w.get(eR.wqg) ? eL.intl.string(eL.t["nkq1l+"]) : eL.intl.string(eL.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, r.jsx)(nf.A, { className: nx.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, r.jsx)(k.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, $.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, to.o6)(i) },
            children: (0, r.jsx)(F.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), I(h + 1), 15 === h)) {
                        T();
                        let e = !nI.w.get(eR.wqg);
                        nI.w.set(eR.wqg, e),
                            e && nI.w.set(nG.L, !0),
                            e ? (0, nD.Ak)("discodo") : (0, nD.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: eL.intl.string(eL.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...f,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eR.liQ.GUILD_CHANNEL,
                            section: eR.JJy.NAVIGATION,
                            object: eR.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(nO, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nx.Uq,
        children: (0, r.jsx)(tY.A, {
            inlineSpecs: nk,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, selected: t, hovered: o }),
                    (0, r.jsx)(tG, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nV() {
    let e = (function () {
            let e = (0, q.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eR.BVt.GUILD_DISCOVERY) || t.startsWith(eR.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eR.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nw.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, E.bG)([nP.A, nM.A], () => {
            let e = (0, nf.v)(nP.A.activeItems, nM.A),
                { total: t, progress: n } = nU.zY(e),
                i = nU.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, ny.kX)(),
        i = Object.keys(ew.TP),
        a = (0, nR.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, E.cf)([nv.A], () => ({
            unviewedTrialCount: nv.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nv.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === ew.xc.NONE ? s + l : 0,
        d = (0, E.bG)([eN.default], () => eN.default.getCurrentUser()),
        u = (0, nL.W)(),
        _ = n + o + u,
        A = _ === o && o > 0 && n + u === 0,
        h = nb.A.getHomeLink();
    return (
        A && (h = eR.BVt.APPLICATION_STORE),
        (0, r.jsx)(nF, {
            selected: e,
            user: d,
            selectedChannelId: J.Ay.getChannelId(eR.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nB = n(550281);
function nH(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(K.c, { children: (0, r.jsx)("div", { className: l()(nB.t, { [nB.I]: t }) }) });
}
var nj = n(349288),
    nW = n(695366),
    nY = n(919638),
    nK = n(818348),
    n$ = n(135492);
function nz() {
    let e = (0, E.bG)([nY.A, e$.A], () => nY.A.unavailableGuilds.filter((e) => null == e$.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(K.c, {
              children: (0, r.jsx)(tG, {
                  text: eL.intl.format(eL.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nj.Anchor, {
                      href: nK.qF.STATUS,
                      target: "_blank",
                      className: n$.h,
                      "aria-label": eL.intl.formatToPlainString(eL.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nW.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nq = n(312742),
    nZ = n(317097),
    nX = n(319060),
    nQ = n(866323),
    nJ = n(817281),
    n0 = n(534409),
    n1 = n(240248),
    n2 = n(678708),
    n3 = n(187322),
    n6 = n(140735),
    n4 = n(548118),
    n5 = n(195451);
function n7(e) {
    let { guildId: t, animate: n } = e,
        i = (0, E.bG)([e$.A], () => e$.A.getGuild(t), [t]),
        a = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: l()(n5.VL, n5.zU), children: (0, r.jsx)(nW.E, { color: "currentColor" }) })
        : (0, r.jsx)(n4.Ay, {
              guild: i,
              animate: n,
              size: n4.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: n5.VL,
              tabIndex: -1,
          });
}
function n8(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: a } = t,
        s = n && i,
        o = (0, r.jsx)("div", {
            className: n5.hJ,
            children: (0, r.jsx)("div", {
                className: n5.Eh,
                children: (0, r.jsx)(n2.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, r.jsx)("div", {
            className: n5.qJ,
            children: (0, r.jsx)("div", {
                className: n5.jg,
                children: a.slice(0, 4).map((e) => (0, r.jsx)(n7, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()({ [n5.NG]: s, [n5.yd]: !s }),
        children: [!s && o, d],
    });
}
function n9(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: i,
            mediaState: s,
            mentionCount: l = 0,
            isMentionLowImportance: o,
            tooltipName: d,
            folderGroupId: c,
            folderButtonContent: u,
            onClick: _,
            onContextMenu: E,
            onHoverChange: A,
            onKeyDown: h,
            treeItemProps: { onFocus: I, ...p },
            "aria-setsize": T,
            "aria-posinset": m,
        } = e,
        [g, S] = a.useState(!1),
        N = a.useCallback(() => {
            i || S(!0), A?.(!0);
        }, [i, A]),
        C = a.useCallback(() => {
            i || S(!1), A?.(!1);
        }, [i, A]),
        O = n || null == s ? null : (0, $.oi)(s),
        R =
            !n && l > 0
                ? (0, $.wN)(
                      l,
                      o ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(n3.vN, {
        children: (0, r.jsxs)(tU.D, {
            className: n5.H3,
            onClick: _,
            onContextMenu: E,
            onMouseEnter: N,
            onMouseLeave: C,
            onKeyDown: h,
            onFocus: I,
            focusProps: { enabled: !1 },
            ...p,
            role: "treeitem",
            "aria-setsize": T,
            "aria-posinset": m,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, r.jsx)(n6.A, {
                    children: eL.intl.formatToPlainString(eL.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, r.jsx)(k.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: O,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, to.o6)(l) },
                    children: (0, r.jsx)("div", {
                        className: n5.vA,
                        children:
                            null != u
                                ? (0, r.jsx)("div", { className: n5.hJ, children: u })
                                : (0, r.jsx)(n8, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var ie = n(573435),
    it = n(32294);
function ii(e) {
    let { className: t, isFolder: n } = e,
        i = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(ie.Ay, {
        mask: ie.Ay.Masks.SQUIRCLE,
        className: l()(t, it.OL, { [it.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: it.ZU }),
    });
}
var ir = n(114329),
    ia = n(167546);
let is = (0, n1.xI)(nX.A.FOLDER_ITEM_ANIMATION_DURATION),
    il = (0, ts.animated)(T.B),
    io = a.memo(function (e) {
        var t;
        let n,
            i,
            s,
            {
                folderNode: o,
                setNodeRef: d,
                selected: c,
                expanded: _,
                mediaState: E,
                mentionCount: A = 0,
                isMentionLowImportance: h,
                unread: I = !1,
                defaultFolderName: p,
                draggable: T = !1,
                sorting: m = !1,
                onDragStart: S,
                onDragEnd: N,
                onExpandCollapse: C,
                onContextMenu: O,
                renderChildNode: R,
                folderButtonSize: L,
                folderButtonContent: y,
                "aria-setsize": D,
                "aria-posinset": v,
            } = e,
            { id: b, name: M, children: P } = o,
            [U, w] = a.useState(!1),
            [G, x] = a.useState(!1),
            k = U || G,
            F = (0, n0.qK)("FolderItem");
        a.useEffect(() => {
            m && w(!1);
        }, [m]);
        let [{ dragging: V }, B] = (0, nq.i)({
                type: eX.PJ.FOLDER,
                item: () => (S?.(), { type: eX.PJ.FOLDER, nodeId: o.id }),
                end() {
                    N?.(), (0, nJ.um)(ez.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            H = a.useCallback((e) => {
                x(e);
            }, []),
            j = a.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !_) || ("ArrowLeft" === e.key && _)) && C();
                },
                [C, _],
            ),
            W = null != M && "" !== M ? M : null != p && "" !== p ? p : eL.intl.string(eL.t.xV9hVh),
            $ = (0, u.Vd)(`${b}`),
            z = `folder-items-${b}`,
            q =
                ((t = P.length),
                (n = (0, g.r)(f.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (s = (0, g.r)(f.A.space.SPACE_XS))) - s + (s - (n - i) / 2) + (0, g.r)(f.A.space.SPACE_4)),
            Z = (0, nQ.p)(!V && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: is },
            }),
            X = a.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, disabled: V || _, hovered: U, selected: c, unread: I }),
                    (0, r.jsx)(tG, {
                        text: W,
                        disabled: m,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: T
                                ? (e) => {
                                      B(e);
                                  }
                                : void 0,
                            className: l()(n5.MJ, { [n5.L0]: "icon" === L || F, [ia.oR]: !V && G && !_ }),
                            "data-dnd-name": W,
                            children: V
                                ? (0, r.jsx)(ii, { isFolder: !0 })
                                : (0, r.jsx)(n9, {
                                      folderNode: o,
                                      expanded: _,
                                      sorting: m,
                                      mediaState: E,
                                      mentionCount: A,
                                      isMentionLowImportance: h,
                                      tooltipName: W,
                                      folderGroupId: z,
                                      onClick: C,
                                      onContextMenu: O,
                                      onHoverChange: w,
                                      onKeyDown: j,
                                      treeItemProps: $,
                                      folderButtonContent: y,
                                      "aria-setsize": D,
                                      "aria-posinset": v,
                                  }),
                        }),
                    }),
                    T ? (0, r.jsx)(t3, { name: W, targetNode: o, onDragOverChanged: H }) : null,
                ],
            }),
            J = null != o.color ? o.color : ir.DO,
            ee = J === ir.DO ? void 0 : (0, nZ.Hl)(J);
        return (0, r.jsxs)("div", {
            ref: X,
            className: l()(n5.qc, { [n5.Av]: _, [n5.Lg]: k }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": G,
            children: [
                !V && _ && (0, r.jsx)("span", { className: n5.GO }),
                Q,
                Z((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            il,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: n5.TN,
                                style: { height: e.height.to((e) => e * q) },
                                "aria-label": o.name,
                                children: P.map((t, n) => R(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                T && _ ? (0, r.jsx)(t6, { name: W, targetNode: o }) : null,
            ],
        });
    });
var id = n(354583);
let ic = a.memo(function (e) {
    let t,
        i,
        s,
        l,
        o,
        d,
        c,
        u,
        _,
        A,
        h,
        { folderNode: I, ...f } = e,
        { id: p, name: T, color: m, children: g } = I,
        S = g.map((e) => e.id),
        N = (0, q.A)((e) => e.guildId),
        C = (0, E.bG)([e0.A], () => e0.A.isFolderExpanded(p)),
        O = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = e$.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eO.Vq),
                n = 2 * eR.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(I),
        R =
            ((t = (0, E.bG)([ta.A], () => ta.A.getGuildId())),
            (i = I.children.map((e) => e.id)),
            (s = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, E.bG)([ta.A], () => ta.A.getChannelId())),
            (_ = null != (u = (0, id.A)()?.guild_id) && i.includes(u)),
            (A = (0, E.bG)([ee.A], () => null != c && ee.A.hasVideo(c), [c])),
            (h = (0, E.bG)([X.A], () => X.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != h && null != h.guildId && i.includes(h.guildId))),
            a.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: _, isCurrentUserConnected: s }),
                [l, o, d, _, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: y,
            unread: D,
        } = (0, E.cf)([eo.default], () => ({
            mentionCount: S.map((e) => eo.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => eo.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => eo.default.hasUnread(e)),
        })),
        v = a.useCallback(() => {
            tZ.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = a.useCallback(
            (e) => {
                (0, td.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: D || L > 0 });
                });
            },
            [p, T, m, D, L],
        );
    return (0, r.jsx)(io, {
        ...f,
        folderNode: I,
        expanded: C,
        selected: null != N && S.includes(N),
        mentionCount: L,
        isMentionLowImportance: y,
        unread: D,
        mediaState: R,
        defaultFolderName: O,
        onExpandCollapse: v,
        onContextMenu: b,
    });
});
var iu = n(113494),
    i_ = n(821124),
    iE = n(212455);
function iA(e) {
    let t = e?.features.has(eR.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, E.bG)([iE.A, eN.default, eK.Ay], () => {
            if (null == e) return;
            let t = iE.A.getRequest(e.id),
                n = eN.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = eK.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, i_.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var ih = n(347951),
    iI = n(478437),
    ip = n(811024),
    iT = n(508654),
    im = n(233993),
    ig = n(446600),
    iS = n(95701),
    iN = n(280450);
let iC = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-06-dont-badge-muted-vcs",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function iO(e) {
    return iC.useConfig({ location: e }).enabled;
}
function iR(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ed.A;
    return null != e && e.type !== iI.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eR.hVb.VIEW_CHANNEL, e);
}
function iL(e) {
    let t = (0, E.bG)([eu.Ay], () => eu.Ay.isMuted(e)),
        n = iO("useGuildMediaState"),
        i = (0, iT.BP)(e),
        r = (0, E.yK)([j.Ay, tf.A], () =>
            j.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tf.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tf.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        a = (0, W.H)(r[0]?.location),
        s = (0, ip.Gp)(a),
        {
            guildHasVoice: l,
            guildHasVideo: o,
            selectedVoiceChannelHasVideo: c,
        } = (0, E.cf)([J.Ay, ee.A, e$.A, ed.A, Q.A, eu.Ay], () => {
            var i;
            let r = J.Ay.getVoiceChannelId(),
                a = e$.A.getGuild(e)?.afkChannelId,
                s = ee.A.getUsersWithVideo(e),
                l =
                    ((i = ee.A.getVoiceStates(e)),
                    d()(i)
                        .filter((e) => !tf.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let t in l) {
                        let i = l[t].channelId;
                        if (
                            null != i &&
                            iR(Q.A.getBasicChannel(i), a ?? void 0, ed.A) &&
                            (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let t of s) {
                        let i = l[t]?.channelId;
                        if (
                            null != i &&
                            iR(Q.A.getBasicChannel(i), a ?? void 0, ed.A) &&
                            (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != r && ee.A.hasVideo(r),
            };
        }, [e, t, n]),
        u = iN.default.getId();
    return (0, E.cf)([J.Ay, Q.A, j.Ay, ig.A, X.A, ed.A, eu.Ay], () => {
        let a = J.Ay.getVoiceChannelId(),
            d = Q.A.getChannel(a)?.guild_id === e,
            _ = !1,
            E = !1,
            A = !1,
            h = !1,
            I = !1,
            f = !1;
        if (!d && t)
            return {
                audio: _,
                video: h,
                screenshare: I,
                liveStage: A,
                activeEvent: E,
                activity: f,
                isCurrentUserConnected: !1,
            };
        let p = et.default.keys(ig.A.getStageInstancesByGuild(e)).some((e) => {
                let t = Q.A.getChannel(e);
                return null != t && ed.A.can(im.Gk, t);
            }),
            T = d && (Q.A.getChannel(a)?.isGuildStageVoice() ?? !1),
            m = !!d && null != X.A.getActiveStreamForUser(u, e),
            g = X.A.getAllApplicationStreams()
                .filter((e) => !tf.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e && (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(e, t.channelId))),
            S = d && c,
            N = (() => {
                if (s) return r.length > 0;
                for (let e of r) {
                    let t = Q.A.getChannel((0, W.H)(e.location));
                    if (null != t && (0, iS.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            C = j.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            d
                ? ((_ = !0), (E = i?.channel_id === a), (A = T), (h = S), (I = m), (f = C))
                : ((_ = l), (E = null != i), (A = p), (h = o), (I = g), (f = N)),
            {
                audio: _,
                video: h,
                screenshare: I,
                liveStage: A,
                activeEvent: E,
                activity: f,
                isCurrentUserConnected: d || T,
            }
        );
    }, [e, t, c, u, s, r, i, l, o, n]);
}
var iy = n(607399),
    iD = n(702841),
    iv = n(658128),
    ib = n(976860),
    iM = n(676279);
function iP(e) {
    let { guild: t, show: n, active: i, onAnimationStart: a, onAnimationRest: s } = e,
        o = {},
        d = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, g.r)(f.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, g.r)(f.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nQ.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: s });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: n5.qc,
                        children: (0, r.jsx)("div", {
                            className: l()(n5.MJ, n5.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(ts.animated.div, {
                                className: n5.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: n5.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: n5.jg,
                                        children: (0, r.jsx)(n4.Ay, {
                                            guild: t,
                                            size: n4.Ay.Sizes.SMOL,
                                            className: n5.VL,
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    },
                    i.key,
                ),
        ),
    });
}
var iU = n(454938),
    iw = n(714991),
    iG = n(107773),
    ix = n(513461),
    ik = n(164956),
    iF = n(624265),
    iV = n(970278),
    iB = n(808728);
function iH(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: ey.nM,
              children: [
                  (0, r.jsx)(e, { className: ey.RI, color: "currentColor" }),
                  (0, r.jsx)(em.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function ij(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eh.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eL.intl.string(eL.t.fpKdS1),
          })
        : (0, r.jsx)(tS.A, { muteConfig: t, className: n });
}
function iW(e) {
    let t,
        n,
        i,
        s,
        o,
        c,
        u,
        _,
        A,
        h,
        I,
        f,
        p,
        T,
        m,
        g,
        S,
        N,
        C,
        O,
        R,
        { guild: L } = e,
        y = L.id,
        {
            voiceUsersToShow: D,
            stageSpeakers: v,
            numStageListeners: b,
            streamUsersToShow: M,
            embeddedActivitiesUsers: P,
        } = ((t = L.id),
        (n = iO("useGuildTooltipActivity")),
        (i = (0, E.yK)(
            [iB.Ay, iV.A, eu.Ay],
            () => [
                ...iB.Ay.getChannels(t)
                    [iB.vM].filter((e) => {
                        let { channel: i } = e;
                        return i.type === eR.rbe.GUILD_VOICE && (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(t, i.id));
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(iV.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t, n],
        )),
        (s = (0, iF.Ay)(t)),
        (o = a.useMemo(() => s.map((e) => e.id), [s])),
        (c = (0, E.bG)([eC.Ay], () => eC.Ay.getVoiceStates(t), [t])),
        (u = (0, E.yK)([tf.A], () => tf.A.getBlockedOrIgnoredIDs())),
        (_ = d().flatMap(i, (e) =>
            e === L.afkChannelId
                ? []
                : tp(
                      (c[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      u,
                  ),
        )),
        (A = (0, E.yK)([eg.A], () =>
            d().flatMap(o, (e) =>
                e === L.afkChannelId
                    ? []
                    : tp(
                          eg.A.getMutableParticipants(e, eS.ip.SPEAKER)
                              .filter((e) => e.type === eS.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          u,
                      ),
            ),
        )),
        (h = (0, E.bG)([eg.A], () => {
            let e = 0;
            for (let t of o) e += eg.A.getParticipantCount(t, eS.ip.AUDIENCE);
            return e;
        })),
        (I = (0, E.yK)(
            [X.A, eu.Ay],
            () =>
                tT(
                    X.A.getAllApplicationStreams()
                        .filter(
                            (e) => e.guildId === t && (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(t, e.channelId)),
                        )
                        .map((e) => e.ownerId),
                    u,
                ),
            [u, t, n],
        )),
        (f = (0, E.yK)(
            [j.Ay],
            () =>
                tT(
                    j.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    u,
                ),
            [t, u],
        )),
        (p = (0, E.yK)([eN.default], () => tp(f.map((e) => eN.default.getUser(e))), [f])),
        (T = (0, E.yK)([eN.default], () => I.map((e) => eN.default.getUser(e)), [I])),
        (g = tp((m = _.filter((e) => !I.includes(e.id) && !f.includes(e.id))))),
        (S = T.filter((e) => null != e && !f.includes(e.id))),
        (N = (0, E.bG)([tm.A], () => tm.A.getUserAffinitiesMap(), [])),
        (C = a.useMemo(() => (0, tg.L)(g, N, "GuildTooltip - nonBlockedUsers"), [g, N])),
        (O = a.useMemo(() => (0, tg.L)(A, N, "GuildTooltip - stageSpeakers"), [A, N])),
        (R = a.useMemo(() => (0, tg.L)(S, N, "GuildTooltip - streamUsers"), [S, N])),
        {
            voiceUsersToShow: C,
            stageSpeakers: O,
            numStageListeners: h,
            streamUsersToShow: R,
            embeddedActivitiesUsers: a.useMemo(() => (0, tg.L)(p, N, "GuildTooltip - embeddedActivitiesUsers"), [p, N]),
            hasActivity: A.length > 0 || m.length > 0 || S.length > 0 || p.length > 0,
        }),
        U = iH(eI.H, D, y),
        w =
            0 === v.length
                ? null
                : (0, r.jsxs)("div", {
                      className: ey.nM,
                      children: [
                          (0, r.jsx)(eE.q, { size: "lg", color: "currentColor", className: ey.RI }),
                          (0, r.jsx)(em.Ay, { guildId: y, users: v, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: ey.GZ,
                              children: [
                                  (0, r.jsx)(eA.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eh.E, {
                                      className: ey._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: b,
                                  }),
                              ],
                          }),
                      ],
                  }),
        G = iH(ef.F, M, y),
        x = iH(ep.k, P, y),
        { isMuted: k, muteConfig: F } = (0, E.cf)(
            [eu.Ay],
            () => ({ isMuted: eu.Ay.isMuted(y), muteConfig: eu.Ay.getMuteConfig(y) }),
            [y],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            w,
            U,
            G,
            x,
            k ? (0, r.jsx)(ij, { muteConfig: F, className: l()(ey.LM, { [ey.Sx]: null != U || null != G }) }) : null,
        ],
    });
}
function iY(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(eh.E, {
        className: ey.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case ix.B5.SUBMITTED:
                    return eL.intl.string(eL.t["9KFC98"]);
                case ix.B5.REJECTED:
                    return eL.intl.string(eL.t["TQY/Rd"]);
                case ix.B5.APPROVED:
                    return eL.intl.string(eL.t.WXHcq5);
                default:
                    return eL.intl.string(eL.t.fjHFC8);
            }
        })(t),
    });
}
function iK(e) {
    let { guild: t } = e,
        n = (0, iU.A)(t),
        i = iA(t),
        a = null != i ? (0, r.jsx)(iY, { guildJoinRequestStatus: i }) : null,
        s = (0, r.jsx)(iW, { guild: t }),
        o = (0, E.bG)([ik.A], () => ik.A.isViewingRoles(t.id)),
        d = (0, ih.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l()(ey.nM, ey.Dl),
                children: [
                    n
                        ? (0, r.jsx)(iG.A, { disableBoostClick: !0, guild: t, className: ey.WX })
                        : (0, r.jsx)(iw.A, { guild: t, size: 20, className: ey.aL }),
                    (0, r.jsx)("span", { className: l()(ey.cN, ey.NT), children: t.name }),
                ],
            }),
            d
                ? (0, r.jsx)(eh.E, {
                      className: ey.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eL.intl.string(eL.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, r.jsx)(eh.E, {
                      className: ey.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eL.intl.string(eL.t["5LwN89"]),
                  })
                : (a ?? s),
        ],
    });
}
function i$(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: s } = e,
        l = a.useMemo(
            () =>
                n
                    ? null
                    : (0, r.jsx)(eh.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: ey.A_,
                          children: (0, r.jsx)(iK, { guild: t }),
                      }),
            [n, t],
        );
    return (0, r.jsx)(eT.m, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: s,
    });
}
let iz = { analyticsSource: { page: eR.liQ.GUILD_CHANNEL, section: eR.JJy.CHANNEL_LIST, object: eR.ZSU.CHANNEL } };
function iq(e, t) {
    (0, td.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("94614"),
            n.e("24343"),
            n.e("31668"),
            n.e("35285"),
            n.e("53969"),
            n.e("40351"),
            n.e("6389"),
            n.e("80352"),
            n.e("94629"),
            n.e("67792"),
            n.e("73153"),
            n.e("9445"),
            n.e("15214"),
            n.e("76684"),
            n.e("85631"),
            n.e("21532"),
            n.e("75030"),
            n.e("47899"),
            n.e("8248"),
            n.e("18698"),
            n.e("37175"),
            n.e("1248"),
            n.e("24092"),
            n.e("33004"),
            n.e("3557"),
            n.e("4240"),
            n.e("98942"),
            n.e("31076"),
            n.e("66806"),
            n.e("26572"),
            n.e("39737"),
            n.e("85391"),
            n.e("56356"),
            n.e("29062"),
            n.e("5270"),
            n.e("42293"),
            n.e("44018"),
            n.e("60574"),
            n.e("82222"),
            n.e("23102"),
            n.e("2285"),
            n.e("97726"),
            n.e("42394"),
            n.e("44459"),
            n.e("98986"),
            n.e("18379"),
            n.e("21133"),
            n.e("60061"),
            n.e("44083"),
            n.e("62329"),
            n.e("18917"),
            n.e("94450"),
            n.e("86307"),
            n.e("3574"),
            n.e("711"),
            n.e("18151"),
            n.e("10543"),
            n.e("40981"),
            n.e("58235"),
            n.e("51869"),
            n.e("50693"),
            n.e("6487"),
            n.e("69794"),
            n.e("20661"),
            n.e("69190"),
            n.e("18315"),
            n.e("17776"),
            n.e("78969"),
            n.e("77770"),
            n.e("61275"),
            n.e("49557"),
            n.e("30072"),
            n.e("18629"),
            n.e("48227"),
            n.e("13920"),
            n.e("99424"),
            n.e("670"),
            n.e("99496"),
            n.e("44565"),
            n.e("88563"),
            n.e("24212"),
            n.e("20459"),
            n.e("1301"),
            n.e("55983"),
            n.e("47519"),
            n.e("80197"),
            n.e("48132"),
            n.e("61686"),
            n.e("91778"),
            n.e("94757"),
            n.e("97312"),
            n.e("38469"),
            n.e("9009"),
            n.e("80126"),
            n.e("91072"),
            n.e("43422"),
            n.e("49181"),
            n.e("9"),
            n.e("28863"),
            n.e("35182"),
            n.e("76913"),
            n.e("50766"),
            n.e("33925"),
            n.e("72723"),
            n.e("69977"),
            n.e("94149"),
            n.e("13108"),
            n.e("66756"),
            n.e("25167"),
            n.e("3650"),
            n.e("25996"),
            n.e("54948"),
            n.e("85251"),
            n.e("28634"),
            n.e("39644"),
            n.e("73432"),
            n.e("39086"),
            n.e("17104"),
            n.e("18021"),
            n.e("28212"),
            n.e("35353"),
            n.e("97551"),
            n.e("10743"),
            n.e("42745"),
            n.e("70148"),
            n.e("22878"),
            n.e("74318"),
            n.e("10887"),
            n.e("99439"),
            n.e("74362"),
            n.e("13162"),
            n.e("78849"),
            n.e("3567"),
            n.e("32886"),
            n.e("92111"),
            n.e("64648"),
            n.e("95013"),
            n.e("76858"),
            n.e("6819"),
            n.e("55"),
            n.e("58921"),
            n.e("19728"),
            n.e("94373"),
            n.e("35238"),
            n.e("58818"),
            n.e("66763"),
            n.e("11689"),
            n.e("14520"),
            n.e("4142"),
            n.e("19059"),
            n.e("92576"),
            n.e("4349"),
            n.e("73763"),
            n.e("79751"),
            n.e("12345"),
            n.e("23241"),
            n.e("9172"),
            n.e("65420"),
            n.e("3056"),
            n.e("84710"),
            n.e("97106"),
            n.e("78015"),
            n.e("22570"),
            n.e("99998"),
            n.e("54540"),
            n.e("32744"),
            n.e("52123"),
            n.e("26738"),
            n.e("41295"),
            n.e("69960"),
            n.e("46148"),
            n.e("91922"),
            n.e("79414"),
            n.e("64488"),
            n.e("91109"),
            n.e("61439"),
            n.e("75201"),
            n.e("68087"),
            n.e("39653"),
            n.e("39013"),
            n.e("99265"),
            n.e("40804"),
            n.e("45827"),
            n.e("64477"),
            n.e("68254"),
            n.e("96393"),
            n.e("16123"),
            n.e("73193"),
            n.e("78250"),
            n.e("42529"),
            n.e("31464"),
            n.e("3263"),
            n.e("54964"),
            n.e("76279"),
            n.e("51962"),
            n.e("35459"),
            n.e("47623"),
            n.e("63933"),
            n.e("64464"),
            n.e("20182"),
            n.e("47426"),
            n.e("202"),
            n.e("49273"),
            n.e("83647"),
            n.e("87085"),
            n.e("72118"),
            n.e("65831"),
            n.e("80759"),
            n.e("33587"),
            n.e("88391"),
            n.e("59729"),
            n.e("3240"),
            n.e("72767"),
            n.e("38647"),
            n.e("102"),
            n.e("25473"),
            n.e("48149"),
            n.e("46420"),
            n.e("19834"),
            n.e("51872"),
            n.e("75091"),
            n.e("27574"),
            n.e("21149"),
            n.e("99561"),
            n.e("49817"),
            n.e("67578"),
            n.e("45850"),
            n.e("92254"),
            n.e("42205"),
            n.e("55675"),
            n.e("5581"),
            n.e("49681"),
            n.e("69047"),
            n.e("96382"),
            n.e("62052"),
            n.e("71657"),
            n.e("22218"),
            n.e("64827"),
            n.e("63232"),
            n.e("7167"),
            n.e("10471"),
            n.e("84569"),
            n.e("61060"),
            n.e("54484"),
            n.e("60235"),
            n.e("77333"),
            n.e("6338"),
            n.e("47834"),
            n.e("18573"),
            n.e("78157"),
            n.e("44057"),
            n.e("53782"),
            n.e("88774"),
            n.e("31988"),
            n.e("44571"),
            n.e("34303"),
            n.e("40291"),
            n.e("2368"),
            n.e("33115"),
            n.e("97270"),
            n.e("73122"),
            n.e("8304"),
            n.e("93159"),
            n.e("55936"),
            n.e("89088"),
            n.e("69294"),
            n.e("94723"),
            n.e("62931"),
            n.e("45959"),
            n.e("58529"),
            n.e("58038"),
            n.e("71202"),
            n.e("62531"),
            n.e("44230"),
            n.e("6174"),
            n.e("93103"),
            n.e("28367"),
            n.e("81647"),
            n.e("11310"),
            n.e("91763"),
            n.e("76602"),
            n.e("7170"),
            n.e("21921"),
            n.e("36877"),
            n.e("72963"),
            n.e("52511"),
            n.e("7575"),
            n.e("40402"),
            n.e("54241"),
            n.e("24303"),
            n.e("53930"),
            n.e("42724"),
            n.e("93766"),
            n.e("13823"),
            n.e("21930"),
            n.e("14761"),
            n.e("39970"),
            n.e("76418"),
            n.e("40258"),
            n.e("98329"),
            n.e("71210"),
            n.e("92583"),
            n.e("43437"),
            n.e("21957"),
            n.e("66495"),
            n.e("8555"),
            n.e("88342"),
            n.e("30233"),
            n.e("86127"),
            n.e("46070"),
            n.e("88599"),
            n.e("75842"),
            n.e("36863"),
            n.e("21200"),
            n.e("72789"),
            n.e("54622"),
            n.e("28203"),
            n.e("25949"),
            n.e("44502"),
            n.e("17249"),
            n.e("71273"),
            n.e("89421"),
            n.e("79049"),
            n.e("9640"),
            n.e("62422"),
            n.e("90365"),
            n.e("66707"),
            n.e("52548"),
            n.e("17989"),
            n.e("35027"),
            n.e("67861"),
            n.e("1518"),
            n.e("37977"),
            n.e("49653"),
            n.e("47626"),
            n.e("23354"),
            n.e("82644"),
            n.e("3589"),
            n.e("24689"),
            n.e("53984"),
            n.e("43780"),
            n.e("20590"),
            n.e("4848"),
            n.e("65437"),
            n.e("80830"),
            n.e("79745"),
            n.e("80854"),
            n.e("35395"),
            n.e("45413"),
            n.e("46844"),
            n.e("39075"),
            n.e("63235"),
            n.e("45596"),
            n.e("86672"),
            n.e("94427"),
            n.e("32756"),
            n.e("64850"),
            n.e("70104"),
            n.e("2564"),
            n.e("71477"),
            n.e("81347"),
            n.e("19558"),
            n.e("58946"),
            n.e("14285"),
            n.e("48330"),
            n.e("95752"),
            n.e("3332"),
            n.e("1657"),
            n.e("30788"),
            n.e("8362"),
            n.e("41678"),
            n.e("72401"),
            n.e("52617"),
            n.e("4744"),
            n.e("2698"),
            n.e("37021"),
            n.e("93350"),
            n.e("18465"),
            n.e("71430"),
            n.e("501"),
            n.e("86243"),
            n.e("85794"),
            n.e("67837"),
            n.e("73384"),
            n.e("82783"),
            n.e("32209"),
            n.e("9371"),
            n.e("2362"),
            n.e("39171"),
            n.e("87478"),
            n.e("74630"),
            n.e("48948"),
            n.e("63244"),
            n.e("83952"),
            n.e("68214"),
            n.e("44780"),
            n.e("95340"),
            n.e("91450"),
            n.e("93438"),
            n.e("36227"),
            n.e("89916"),
            n.e("60773"),
            n.e("66948"),
            n.e("5557"),
            n.e("9004"),
            n.e("62718"),
            n.e("8018"),
            n.e("65927"),
            n.e("49145"),
            n.e("68763"),
            n.e("18113"),
            n.e("58273"),
            n.e("92295"),
            n.e("6949"),
            n.e("20930"),
            n.e("79548"),
            n.e("74610"),
            n.e("99976"),
            n.e("59957"),
            n.e("26001"),
            n.e("30997"),
            n.e("29666"),
            n.e("14591"),
            n.e("52111"),
            n.e("15109"),
            n.e("94607"),
            n.e("8536"),
            n.e("57458"),
            n.e("38601"),
            n.e("1243"),
            n.e("18706"),
            n.e("872"),
            n.e("59797"),
            n.e("93336"),
            n.e("15920"),
            n.e("3930"),
            n.e("28136"),
            n.e("69495"),
            n.e("3663"),
            n.e("27659"),
            n.e("75859"),
            n.e("66580"),
            n.e("43116"),
            n.e("68530"),
            n.e("78046"),
            n.e("83230"),
            n.e("82486"),
            n.e("16084"),
            n.e("73669"),
            n.e("10943"),
            n.e("7775"),
            n.e("60989"),
            n.e("28235"),
            n.e("61058"),
            n.e("50342"),
            n.e("33097"),
            n.e("3710"),
            n.e("36624"),
            n.e("45830"),
            n.e("1888"),
            n.e("77602"),
            n.e("10262"),
            n.e("41786"),
            n.e("95602"),
            n.e("46313"),
            n.e("34409"),
            n.e("53683"),
            n.e("22547"),
            n.e("29569"),
            n.e("36002"),
            n.e("43233"),
            n.e("63726"),
            n.e("71329"),
            n.e("56373"),
            n.e("83827"),
            n.e("42749"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("25961"),
            n.e("74333"),
            n.e("8364"),
            n.e("99108"),
            n.e("66147"),
            n.e("89541"),
            n.e("52823"),
            n.e("56967"),
            n.e("31203"),
            n.e("66913"),
            n.e("71719"),
            n.e("19690"),
            n.e("93767"),
            n.e("13848"),
            n.e("39214"),
            n.e("88307"),
            n.e("14878"),
            n.e("26508"),
            n.e("61347"),
            n.e("91643"),
            n.e("47011"),
            n.e("42935"),
            n.e("73091"),
            n.e("69178"),
            n.e("86692"),
            n.e("52695"),
            n.e("16373"),
            n.e("81398"),
            n.e("24484"),
            n.e("44943"),
            n.e("32347"),
            n.e("8458"),
            n.e("11810"),
            n.e("91977"),
            n.e("90152"),
            n.e("46570"),
            n.e("87973"),
            n.e("74337"),
            n.e("57197"),
            n.e("14863"),
            n.e("84951"),
            n.e("60165"),
            n.e("12390"),
            n.e("71167"),
            n.e("13446"),
            n.e("6410"),
            n.e("61309"),
            n.e("94529"),
            n.e("30313"),
            n.e("68264"),
            n.e("21300"),
            n.e("17699"),
            n.e("57032"),
            n.e("22941"),
            n.e("94832"),
            n.e("26386"),
            n.e("65338"),
            n.e("71790"),
            n.e("74572"),
        ]).then(n.bind(n, 860417));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
let iZ = a.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: i,
            onDragEnd: s,
            route: o,
            guild: d,
            animatable: c,
            selected: _ = !1,
            unread: E = !1,
            mediaState: A,
            unavailable: h = !1,
            badge: p = 0,
            isMentionLowImportance: T,
            contextMenu: m = iq,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: O,
            height: R,
            "aria-setsize": L,
            "aria-posinset": y,
        } = e,
        { id: D, parentId: v } = t,
        b = e.upperBadge ?? (h ? (0, $.em)() : null != A ? (0, $.oi)(A) : void 0),
        M = e.lowerBadge ?? void 0;
    null == M && p > 0
        ? (M =
              (0, $.wN)(
                  p,
                  T ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == M && null != O && (M = (0, $.eW)({ guildJoinRequestStatus: O }) ?? void 0);
    let P = e.lowerBadgeSize ?? { width: (0, to.o6)(p) },
        [{ dragging: U }, w] = (0, nq.i)({
            type: eX.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                s?.(), (0, nJ.um)(ez.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        G = (0, u.Vd)(D ?? eR.dJq, null != v ? 2 : 1),
        [x, V] = a.useState(!1),
        B = !N && x,
        [j, W] = a.useState(!1),
        [z, q] = a.useState(!1),
        [X] = a.useState(() => new I.J_(70, () => q(!0))),
        Q = (0, iM.nr)() && !iy.Fr;
    a.useEffect(() => () => X.cancel(), [X]);
    let J = a.useCallback(() => {
            null != o ? (0, ib.pX)(o, { state: iz }) : (0, Z.u)(D, { state: iz });
        }, [D, o]),
        ee = a.useCallback(() => {
            if (null != o || null == d || h || !C) return;
            let e = (0, iv.W)(d.id);
            null != e && H.A.preload(d.id, e);
        }, [o, d, h, C]),
        et = (0, iD.bG)([eK.Ay], () => eK.Ay.isCurrentUserGuest(D)),
        en = a.useCallback(
            (e) => {
                null == d || et || m(e, d);
            },
            [d, m, et],
        ),
        ei = a.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != v && document.querySelector(`[aria-owns=folder-items-${v}]`)?.focus();
            },
            [v],
        ),
        er = a.useCallback(
            (e) => {
                e ? X.delay() : (X.cancel(), q(!1));
            },
            [X],
        );
    function ea() {
        N || V(!0);
    }
    function es() {
        N || V(!1);
    }
    let el = a.useCallback(
            (e) => {
                n?.(D, e);
            },
            [D, n],
        ),
        eo = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ed = d.name;
    if (
        (p > 0
            ? (ed = eL.intl.formatToPlainString(eL.t["/uzRss"], { guildName: d.name, mentions: p }))
            : E && (ed = eL.intl.formatToPlainString(eL.t.lzqe42, { guildName: d.name })),
        null != A)
    ) {
        let e = [];
        A.activeEvent && e.push(eL.intl.string(eL.t.dHvJ2p)),
            A.liveStage && e.push(eL.intl.string(eL.t.OO7ndG)),
            A.screenshare && e.push(eL.intl.string(eL.t.wsHMZ7)),
            A.video && e.push(eL.intl.string(eL.t.BrLCS0)),
            A.audio && e.push(eL.intl.string(eL.t.jPBhKy)),
            A.activity && e.push(eL.intl.string(eL.t.Y3Gii5)),
            e.length > 0 && (ed = `${ed}, ${e.join(" ")}`);
    }
    let ec = (0, r.jsx)(iP, {
            guild: d,
            show: z,
            active: _,
            onAnimationStart: function () {
                W(z);
            },
            onAnimationRest: function () {
                z || W(!1);
            },
        }),
        eu = Q
            ? (0, r.jsx)(F.j, {
                  ariaLabel: ed,
                  name: d.name,
                  onClick: J,
                  onMouseEnter: ea,
                  onMouseLeave: es,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, tK.Iv)(d, 2 * eo, B && c, !0),
                  selected: _ || B,
                  ...G,
                  "aria-setsize": L,
                  "aria-posinset": y,
                  "aria-selected": _,
              })
            : (0, r.jsx)(k.Q, {
                  selected: _,
                  children: (0, r.jsx)("div", {
                      ref: S
                          ? (e) => {
                                w(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": z,
                      children: (0, r.jsx)(F.j, {
                          ariaLabel: ed,
                          name: d.name,
                          onClick: J,
                          onMouseEnter: ea,
                          onMouseLeave: es,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, tK.Iv)(d, 2 * eo, B && c, !0),
                          selected: _ || B,
                          ...G,
                          "aria-setsize": L,
                          "aria-posinset": y,
                          "aria-selected": _,
                      }),
                  }),
              }),
        e_ = z || j ? ec : eu,
        eE = (0, r.jsx)(t4, { children: (0, r.jsx)(ii, {}) }),
        eA = Q
            ? (0, r.jsx)(ts.animated.div, {
                  ref: S
                      ? (e) => {
                            w(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": z,
                  className: l()(ia.rN, { [ia.p9]: N, [ia.oR]: z, [ia.wH]: z || _ }),
                  children: (0, r.jsx)(k.Q, {
                      selected: !0,
                      upperBadge: b,
                      lowerBadge: M,
                      lowerBadgeSize: P,
                      children: e_,
                  }),
              })
            : (0, r.jsx)(ts.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: l()(ia.rN, { [ia.p9]: N, [ia.oR]: z, [ia.wH]: z || _ }),
                  "data-drop-hovering": z,
                  children: (0, r.jsx)(k.Q, {
                      selected: _,
                      upperBadge: b,
                      lowerBadge: M,
                      lowerBadgeSize: P,
                      children: e_,
                  }),
              });
    return (0, r.jsxs)(K.c, {
        ref: el,
        children: [
            (0, r.jsx)(Y.A, { overlay: !0, hovered: !U && B, selected: !U && _, unread: !U && E }),
            (0, r.jsx)(i$, { guild: d, disabled: N, isDragging: U, children: U ? eE : eA }),
            S ? (0, r.jsx)(t3, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iX = n(342216);
let iQ = a.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        s = (0, E.bG)([e$.A], () => e$.A.getGuild(i)),
        l = iA(s),
        o = (0, E.bG)([e5.A], () => e5.A.isFocused()),
        d = (0, E.bG)([nY.A], () => nY.A.isUnavailable(i)),
        c = (0, q.A)((e) => e.guildId),
        u = iL(i),
        {
            badge: _,
            unread: A,
            isMentionLowImportance: h,
        } = (0, E.cf)([eo.default], () => ({
            badge: eo.default.getMentionCount(i),
            isMentionLowImportance: eo.default.getIsMentionLowImportance(i),
            unread: eo.default.hasUnread(i),
        })),
        I = (0, ih.Ig)(s) && 0 === _,
        f = a.useMemo(
            () =>
                null != n
                    ? n
                    : I
                      ? (0, r.jsx)("div", {
                            className: iX.j,
                            children: (0, r.jsx)(iu.E, {
                                size: "custom",
                                color: "currentColor",
                                className: iX.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, I],
        );
    return (0, r.jsx)(iZ, {
        ...e,
        guild: s,
        unavailable: d,
        animatable: o,
        selected: c === i,
        badge: _,
        isMentionLowImportance: h,
        lowerBadge: f,
        unread: A,
        mediaState: u,
        guildJoinRequestStatus: l,
    });
});
var iJ = n(922016),
    i0 = n(297264),
    i1 = n(821609),
    i2 = n(339350),
    i3 = n(475743),
    i6 = n(624458),
    i4 = n(408213),
    i5 = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    i7 = n(928568);
function i8(e, t) {
    (0, td.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function i9(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, E.bG)([iE.A], () => iE.A.getRequest(n)),
        a = (0, E.bG)([iE.A], () => iE.A.getJoinRequestGuild(n), [n]),
        s = (0, E.bG)([e5.A], () => e5.A.isFocused()),
        l = (0, E.bG)([eQ.A], () => eQ.A.getGuildId());
    return null == a
        ? null
        : (0, r.jsx)(iZ, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: i8,
              lowerBadge:
                  i?.applicationStatus === ix.B5.REJECTED
                      ? (0, $.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eR.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var re = n(295783);
function rt(e) {
    let { onActivate: t, children: n } = e,
        i = a.useRef(null),
        s = (0, E.bG)([iE.A], () => iE.A.hasJoinRequestCoackmark()),
        l = a.useCallback(() => {
            i4.Ay.clearCoachmark();
        }, []),
        o = (0, i3.A)(s),
        d = a.useRef(null);
    return (
        a.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, r.jsxs)("div", {
            className: re.kL,
            children: [
                (0, r.jsx)(iJ.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: re.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: re.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: re.q3,
                                            children: [
                                                (0, r.jsx)(i0.D, {
                                                    variant: "heading-md/medium",
                                                    children: eL.intl.string(eL.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(eh.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eL.intl.string(eL.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(i1.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eL.intl.string(eL.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: re.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: re.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function rn(e) {
    let { onActivate: t } = e,
        [n, i] = a.useState(!1),
        s = (0, E.bG)([eQ.A], () => eQ.A.getGuildId()),
        l = (0, E.bG)([iE.A], () => iE.A.hasFetchedRequestToJoinGuilds),
        o = (0, i7.A)(),
        d = (0, i3.A)(s),
        c = a.useMemo(() => {
            let e = (0, eX.xW)({
                folderId: i5.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eL.intl.string(eL.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eX.EL)(t, e.id));
            return e;
        }, [o, n]);
    a.useEffect(() => {
        n && !l && i6.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (a.useEffect(() => {
        !n && u && d !== s && i(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, r.jsx)(rt, {
              onActivate: t,
              children: (0, r.jsx)(io, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), i4.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: re.rH,
                      children: (0, r.jsx)(i2.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eX.PJ.GUILD
                          ? null
                          : (0, r.jsx)(i9, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function ri(e) {
    let { guildId: t } = e,
        n = a.useMemo(() => (0, eX.EL)(t), [t]),
        i = (0, E.bG)([e$.A], () => e$.A.getGuild(t)),
        s = (0, E.bG)([e5.A], () => e5.A.isFocused()),
        l =
            t ===
            (0, q.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = iL(t);
    return null == i
        ? null
        : (0, r.jsx)(iZ, { guildNode: n, guild: i, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var rr = n(221305);
let ra = (0, v.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("75442"),
                n.e("14520"),
                n.e("598"),
                n.e("69977"),
                n.e("1248"),
                n.e("94149"),
                n.e("58921"),
                n.e("24092"),
                n.e("31727"),
                n.e("34084"),
                n.e("81647"),
                n.e("91763"),
                n.e("76602"),
                n.e("40402"),
                n.e("39970"),
                n.e("43437"),
                n.e("72789"),
                n.e("17249"),
                n.e("62422"),
                n.e("82644"),
                n.e("35321"),
                n.e("50033"),
                n.e("44780"),
                n.e("66948"),
                n.e("65927"),
                n.e("15109"),
                n.e("59466"),
                n.e("75133"),
                n.e("28850"),
                n.e("27659"),
                n.e("65200"),
                n.e("60003"),
                n.e("59373"),
                n.e("85802"),
                n.e("41348"),
                n.e("53402"),
                n.e("46240"),
                n.e("81505"),
                n.e("85685"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    rs = (0, eq.isWindows)() ? 4 : 12 * !(0, eq.isMac)();
function rl(e) {
    return e.startsWith(eR.BVt.GUILD_DISCOVERY) || e.startsWith(eR.BVt.GLOBAL_DISCOVERY);
}
class ro {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = a.createRef();
    nodeRefs = {};
    timeout = new I.Ep();
    observer;
    constructor(e, t, n, i, r) {
        (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = r),
            (0, eB.u9)(this.getVisibleGuildIds);
    }
    setResizeObserver = () => {
        let e = this.scrollerRef.current?.getScrollerNode();
        null != e && ((this.observer = new ResizeObserver(this.handleScroll)), this.observer.observe(e));
    };
    clearResizeObserver = () => {
        this.observer?.disconnect(), (this.observer = void 0);
    };
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    scrollToGuild = (e, t) => {
        let n = this.scrollerRef.current;
        if (
            null == n ||
            (null == e && rl(window.location.pathname)) ||
            e === eR.sFm.SERVER_DISCOVERY_BADGE ||
            e === eR.sFm.E3_SERVER_DISCOVERY_BADGE
        )
            return;
        if (null == e) return void n.scrollTo({ to: 0, animate: t });
        let i = this.nodeRefs[e];
        for (; null == i; ) {
            let t = this.guildsTree.getNode(e);
            if (t?.parentId == null) break;
            i = this.nodeRefs[t.parentId];
        }
        null != i && (0, _.vq)(i)
            ? n.scrollIntoViewNode({ node: i, animate: t, padding: 24 })
            : n.scrollTo({ to: 0, animate: t });
    };
    handleJumpToGuild = (e) => {
        this.scrollToGuild(e, !0);
    };
    scrollTo = (e) => {
        this.scrollerRef.current?.scrollTo(e);
    };
    scrollToBottom = () => {
        this.scrollerRef.current?.scrollToBottom();
    };
    isItemVisible = (e, t, n) => {
        let { iconTotalSize: i, badgeVisibleBuffer: r, heightBeforeGuilds: a, bottomInset: s } = this.sizes,
            l = this.scrollerRef.current;
        if (null == l) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let d = i * o + a,
            c = l.getScrollerState();
        return (!t && !!(d >= c.scrollTop)) || (!!t && !!(d + i + r <= c.scrollTop + c.offsetHeight - s));
    };
    getVisibleGuildIds = () => {
        let e = this.scrollerRef.current;
        if (null == e) return [];
        let t = e.getScrollerState().offsetHeight,
            n = e.getScrollerNode()?.getBoundingClientRect().top;
        return void 0 === n
            ? []
            : this.guildsTree
                  .sortedGuildNodes()
                  .filter((e) => {
                      let i = e.parentId ?? e.id,
                          r = this.nodeRefs[i];
                      if (null == r) return !1;
                      let a = r.getBoundingClientRect(),
                          s = a.top - n;
                      return s + a.height > 0 && s < t;
                  })
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  });
    };
    handleScroll = () => {
        this.setScrolling(!0),
            this.timeout.start(200, () => this.setScrolling(!1)),
            this._handleScrollDebounced(),
            this._handleScrollThrottled();
    };
    _handleScrollDebounced = d().debounce(() => {
        let e = this.scrollerRef.current;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState();
        C.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = d().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function rd(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        s = (0, U.A)("TopSection"),
        { isExperimentEnabled: l } = (0, P.TW)("TopSection"),
        o = (0, E.bG)([J.Ay], () => null != J.Ay.getVoiceChannelId()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, b.Ay)((e) => e.postConnectionOpen),
        [u, _] = (0, M.kn)(c && l && !o && !d ? [A.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        h = u === A.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [I] = (0, M.kn)(h ? [A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        f = I === A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        T = a.useRef(!1),
        m = f && s;
    a.useEffect(() => {
        m && !T.current && n(), (T.current = m);
    }, [n, m]);
    let g = (0, E.yK)([e$.A, eK.Ay], () => e$.A.getGuildIds().filter((e) => eK.Ay.isCurrentUserGuest(e))),
        S = i.concat(g),
        { entrypoint: N } = (0, ej.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nV, {}),
            N === ej.RK.SERVER_RAIL_TOP && (0, r.jsx)(ra, {}),
            s ? (0, r.jsx)(eV, { shouldShowIntroPopover: f, markIntroPopoverAsDismissed: _ }) : null,
            !t && (0, r.jsx)(tM, {}),
            S.map((e) => (0, r.jsx)(ri, { guildId: e }, e)),
            (0, r.jsx)(rn, { onActivate: n }),
        ],
    });
}
function rc(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, E.yK)([ez.Ay], () => {
            let e = ez.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, E.yK)([eY.A], () => eY.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(na, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T.B, {
                role: "group",
                "aria-label": eL.intl.string(eL.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, r.jsx)(nz, {}),
            i ? null : (0, r.jsx)(ne, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tV, {}),
        ],
    });
}
function ru(e) {
    var t;
    let { disableAppDownload: n = eq.isPlatformEmbedded, isOverlay: i = !1, className: s, themeOverride: o } = e,
        [d] = (0, E.yK)([ez.Ay], () => {
            let e = ez.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, E.bG)([eH.A], () => eH.A.lurkingGuildIds()),
        A = a.useMemo(() => (i ? [] : _), [_, i]),
        h = (0, E.bG)([D.A], () => D.A.isFullscreenInContext()),
        { isSorting: p, startSorting: T, stopSorting: C } = (0, eZ.A)(),
        R = a.useRef(!1),
        [v] = a.useState(() => new I.Ep()),
        b = a.useRef(null),
        M = a.useRef(null),
        { ref: P, ...w } = (0, u.$y)(),
        G = (0, m.R7)(),
        [x, k] = a.useState(!1),
        F = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE),
        V = (0, g.r)(f.A.space.SPACE_XS),
        B = (0, U.A)("GuildsBar"),
        { pathname: H } = (0, c.zy)(),
        { entrypoint: j } = (0, ej.X8)({ location: "GuildsBar" }),
        W = +!!B + +(j === ej.RK.SERVER_RAIL_TOP),
        Y = a.useMemo(() => {
            let e,
                t,
                n =
                    ((e = F + V),
                    {
                        iconSize: F,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + V),
                        heightBeforeGuilds: rs + t + W * e,
                        bottomInset: 16,
                    });
            return new ro(
                d,
                k,
                eR.tEg,
                () => {
                    b.current?.calculateState(), M.current?.calculateState();
                },
                n,
            );
        }, [F, V, d, W]);
    a.useEffect(
        () => (
            Y.setResizeObserver(),
            () => {
                Y.clearResizeObserver();
            }
        ),
        [Y],
    ),
        a.useEffect(() => {
            function e() {
                b.current?.calculateState(), M.current?.calculateState();
            }
            return eo.default.addChangeListener(e), () => eo.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: K } = (0, y.Ay)(L.A.GUILDS_LIST),
        $ = rl(H);
    (0, O.u5)(() => {
        if (!R.current && 0 !== d.size) {
            if (!$) {
                let { scrollTop: e } = eW.A.getGuildListDimensions();
                Y.scrollTo({ to: e, animate: !1 });
            }
            return (R.current = !0), () => v.stop();
        }
    }),
        a.useEffect(() => {
            if ((Y.setGuildsTree(d), R.current || 0 === d.size)) return;
            let e = q.A.getState().guildId;
            Y.scrollToGuild(e, !1);
            let t = null;
            return q.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), Y.scrollToGuild(t, !1));
            });
        }, [d, Y]);
    let z = a.useCallback(() => {
        Y.scrollTo({ to: 0, animate: !1 });
    }, [Y]);
    (t = Y.scrollToGuild),
        a.useEffect(() => {
            let e = null;
            function n() {
                let n = eQ.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                eQ.A.addChangeListener(n),
                () => {
                    eQ.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let Z = a.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case eX.PJ.FOLDER:
                        return (0, r.jsx)(
                            ic,
                            {
                                folderNode: t,
                                setNodeRef: Y.setNodeRef,
                                draggable: !0,
                                sorting: p,
                                onDragStart: T,
                                onDragEnd: C,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case eX.PJ.GUILD:
                        return (0, r.jsx)(
                            iQ,
                            {
                                guildNode: t,
                                setRef: Y.setNodeRef,
                                draggable: !0,
                                sorting: p,
                                onDragStart: T,
                                onDragEnd: C,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [T, C, p, Y.setNodeRef],
        ),
        X = (0, r.jsx)(nh, { selected: $, className: rr.ai }),
        Q = j === ej.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(y.f5, {
        value: K,
        children: (0, r.jsx)(S.N, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: l()(rr.iE, s, e, { [rr.R]: h }),
                    "aria-label": eL.intl.string(eL.t.PjnF2t),
                    children: [
                        (0, r.jsx)(ti, {
                            ref: b,
                            isVisible: Y.isItemVisible,
                            onJumpTo: Y.handleJumpToGuild,
                            className: rr.Xl,
                            barClassName: rr.Sh,
                        }),
                        (0, r.jsxs)("div", {
                            ref: P,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: rr.B2,
                            children: [
                                (0, r.jsxs)(N.zC, {
                                    className: l()({ [rr.XG]: !0, [rr.qw]: x }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: Y.scrollerRef,
                                    onScroll: Y.handleScroll,
                                    children: [
                                        (0, r.jsx)(rd, { scrollToTop: z, lurkingGuildIds: A }),
                                        (0, r.jsx)(nH, {}),
                                        (0, r.jsx)(rc, {
                                            guildDiscoveryButton: X,
                                            disableAppDownload: n,
                                            isOverlay: i,
                                            renderTreeNode: Z,
                                            lurkingGuildIds: A,
                                        }),
                                    ],
                                }),
                                Q &&
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(nH, { fullWidth: !0 }),
                                            (0, r.jsx)("div", { className: rr.JU, children: (0, r.jsx)(ra, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(ti, {
                            reverse: !0,
                            ref: M,
                            isVisible: Y.isItemVisible,
                            onJumpTo: Y.handleJumpToGuild,
                            className: l()(rr.LZ, { [rr.CH]: !i && !Q, [rr.c0]: !i && Q }),
                            barClassName: rr.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let r_ = a.memo(
    function (e) {
        let t = (0, R.A)("guildsnav");
        return (0, r.jsx)(u.hD, { navigator: t, children: (0, r.jsx)(ru, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, h.A)(e, t),
);
