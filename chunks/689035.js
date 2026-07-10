"use strict";
n.d(t, { A: () => rd });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(735438),
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
    R = n(964486),
    O = n(260762),
    L = n(793574),
    D = n(688810),
    y = n(313961),
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
    eE = n(990078),
    eA = n(451394),
    eh = n(597601),
    eI = n(834730),
    ef = n(983851),
    ep = n(183623),
    eT = n(323384),
    em = n(104171),
    eg = n(63995),
    eS = n(518769),
    eN = n(287809),
    eC = n(607567),
    eR = n(403362),
    eO = n(652215),
    eL = n(375708),
    eD = n(621035);
function ey(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, r.jsx)(e, { className: eD.RI, color: "currentColor" }),
                  (0, r.jsx)(em.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function ev() {
    let e = (0, E.yK)([en.A, Q.A], () =>
            et.default
                .keys(en.A.getFavoriteChannels())
                .map((e) => Q.A.getChannel(e))
                .filter(eR.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eO.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eO.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
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
        A = ey(
            ef.H,
            a.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        h =
            0 === s.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eD.nM,
                      children: [
                          (0, r.jsx)(eA.q, { size: "lg", color: "currentColor", className: eD.RI }),
                          (0, r.jsx)(em.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eD.GZ,
                              children: [
                                  (0, r.jsx)(eh.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eI.E, {
                                      className: eD._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        I = ey(
            ep.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        f = ey(eT.k, u);
    return (0, r.jsxs)(r.Fragment, { children: [h, A, I, f] });
}
function eb() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eD.nM, eD.Dl),
                children: (0, r.jsx)("span", { className: l()(eD.cN, eD.NT), children: eL.intl.string(eL.t.wMWyci) }),
            }),
            (0, r.jsx)(ev, {}),
        ],
    });
}
function eM(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = a.useMemo(
            () =>
                (0, r.jsx)(eI.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eD.A_,
                    children: (0, r.jsx)(eb, {}),
                }),
            [],
        );
    return (0, r.jsx)(eE.m, {
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
    ex = n(959495),
    ek = n(988572);
let eF = { analyticsSource: { page: eO.liQ.GUILD_CHANNEL, section: eO.JJy.CHANNEL_LIST, object: eO.ZSU.CHANNEL } };
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
        { analyticsLocations: R } = (0, D.Ay)(L.A.FAVORITES_GUILD_BUTTON),
        [O, y] = a.useState(!1),
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
        eE = (0, E.bG)([J.A], () => J.A.getChannelId(eO.YYv)),
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
            ((i = null != (t = (0, E.bG)([J.A], () => J.A.getVoiceChannelId())) && null != U[t]),
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
                e && ((0, er.mv)("intro_dc"), (0, Z.u)(eO.YYv)),
                    eS
                        ? (b || (0, ei.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, p.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("43880"),
                                      n.e("94635"),
                                      n.e("94494"),
                                      n.e("36946"),
                                      n.e("92639"),
                                      n.e("40963"),
                                      n.e("66031"),
                                      n.e("59839"),
                                  ]).then(n.bind(n, 889186));
                                  return (t) =>
                                      (0, r.jsx)(e, { ...t, parentId: null, source: "favorites_button_onboarding" });
                              }))
                        : e && (0, z.A)({ subscriptionTier: ew.pe.TIER_2, analyticsLocations: R }),
                    eN(eU.i.TAKE_ACTION);
            },
            [eN, b, eS, R],
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
                (0, r.jsx)(Y.A, { overlay: !0, selected: eI, hovered: O, unread: ep && !M }),
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
                                to: { pathname: eO.BVt.CHANNEL(eO.YYv, eE), state: eF },
                                selected: eI || O,
                                onClick: () => {
                                    T && eC(!1);
                                },
                                onMouseEnter: () => y(!0),
                                onMouseLeave: () => y(!1),
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
var e7 = n(531685),
    e5 = n(583613);
let e8 = "app-download-item",
    e9 = "add-server-item";
function te() {
    return !1;
}
function tt(e) {
    let t = eo.default.getMutableGuildStates();
    return (
        (e === eO.sFm.SERVER_DISCOVERY_BADGE && !e4.hasViewed(eO.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e8 && e !== e9 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tn = (0, e5.L_)((e, t, n) => ["null", ...t, ...e, e9, eO.sFm.E3_SERVER_DISCOVERY_BADGE, e8]),
    ti = a.forwardRef(function (e, t) {
        let n = (0, E.yK)([ez.Ay, e1.A, eo.default], () =>
                tn(ez.Ay.getGuildFolders(), e1.A.getUnreadPrivateChannelIds(), eo.default.getStoreChangeSentinel()),
            ),
            i = (0, E.bG)([e7.A], () => e7.A.isFocused()),
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
    ts = n(580929),
    tl = n(778712),
    to = n(812993),
    td = n(442433),
    tc = n(620982),
    tu = n(571694),
    t_ = n(47167),
    tE = n(598104),
    tA = n(994500);
function th(e, t) {
    return e
        .filter((e) => (0, eR.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tA.A.isBlockedOrIgnored(e.id)));
}
function tI(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tA.A.isBlockedOrIgnored(e)));
}
var tf = n(427358),
    tp = n(907459),
    tT = n(145408);
function tm(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, r.jsx)(t, { className: eD.RI, color: "currentColor" }),
                  (0, r.jsx)(em.Ay, { users: n, max: 6 }),
              ],
          });
}
function tg(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eI.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eL.intl.string(eL.t.fpKdS1),
          })
        : (0, r.jsx)(tT.A, { muteConfig: t, className: n });
}
function tS(e) {
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
        (n = (0, E.yK)([tA.A], () => tA.A.getBlockedOrIgnoredIDs())),
        (i = (0, E.bG)([tf.A], () => tf.A.getUserAffinitiesMap(), [])),
        (s = (0, E.yK)(
            [j.Ay, eN.default],
            () =>
                j.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eN.default.getUser(e)),
            [t],
        )),
        (o = a.useMemo(() => th(s, n), [s, n])),
        (d = a.useMemo(() => (0, tp.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, E.yK)(
            [X.A, eN.default],
            () =>
                th(
                    X.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => eN.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (u = a.useMemo(() => th(c, n), [c, n])),
        (_ = a.useMemo(() => (0, tp.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (A = a.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, E.yK)(
            [eC.Ay],
            () =>
                th(
                    eC.Ay.getVoiceStatesForChannel(p).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [p, n],
        )),
        (I = a.useMemo(() => th(h, n), [h, n])),
        (f = a.useMemo(() => (0, tp.L)(I, i, "DirectMessageTooltip - voiceUsers"), [I, i])),
        {
            voiceUsers: a.useMemo(
                () => f.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [f, d, _],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, r.jsx)(tm, { icon: ef.H, users: S }),
        C = (0, r.jsx)(tm, { icon: ep.F, users: g }),
        R = (0, r.jsx)(tm, { icon: eT.k, users: m }),
        { isMuted: O, muteConfig: L } = (0, E.cf)(
            [eu.Ay],
            () => ({ isMuted: eu.Ay.isChannelMuted(null, T), muteConfig: eu.Ay.getChannelMuteConfig(null, T) }),
            [T],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            C,
            R,
            O ? (0, r.jsx)(tg, { muteConfig: L, className: l()(eD.LM, { [eD.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tN(e) {
    let { channel: t } = e,
        n = (0, t_.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eD.nM, eD.Dl),
                children: (0, r.jsx)("span", { className: l()(eD.cN, eD.NT), children: n }),
            }),
            (0, r.jsx)(tS, { channel: t }),
        ],
    });
}
function tC(e) {
    let { channel: t, children: n } = e,
        i = (0, t_.Ay)(t),
        s = a.useMemo(
            () =>
                (0, r.jsx)(eI.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eD.A_,
                    children: (0, r.jsx)(tN, { channel: t }),
                }),
            [t],
        );
    return (0, r.jsx)(eE.m, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let tR = { friction: 28, tension: 600 };
function tO(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tR };
        case "scale":
            return { ...tR };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tL extends a.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new ts.Controller({ scale: 0, height: 0, opacity: 0, config: tO }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !e7.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tO })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tO }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !e7.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tO }).start().then(e),
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
            t = e.type === eO.rbe.DM ? eN.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tu.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eO.rbe.DM ? eN.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, td.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("71406"),
                      n.e("41831"),
                      n.e("18078"),
                      n.e("88429"),
                      n.e("94881"),
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
                      n.e("17244"),
                      n.e("98199"),
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
            } = this.props,
            { hovered: E, animating: A } = this.state,
            h = e.isMultiUserDM() && null == e.icon,
            I = () =>
                (0, r.jsx)(F.j, {
                    to: eO.BVt.CHANNEL(eO.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
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
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, r.jsx)(tE.A, {
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
                    (0, r.jsx)(Y.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, r.jsx)(tC, {
                        channel: e,
                        children: (0, r.jsx)(k.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, $.wN)(i, void 0, !0) : null,
                            upperBadge: (0, $.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, to.o6)(i) },
                            children: I(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tD = a.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, t_.Ay)(e.channel),
        a = (0, u.Vd)(n, 2),
        s = (0, E.bG)([ta.A], () => ta.A.getChannelId(), []),
        l = (0, E.bG)([y.A], () => y.A.getMode(n), [n]),
        o = (0, E.bG)([X.A], () => X.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, E.bG)([eC.Ay], () => eC.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, E.bG)([J.A], () => J.A.getChannelId(), []),
        _ = (0, E.bG)([ec.Ay], () => ec.Ay.getMentionCount(n), [n]),
        A = s === n,
        { isIncomingCall: h, isOngoingCall: I } = (0, tc.A)(n),
        p = !1,
        T = !1;
    (A || d) && ((p = l === eO._Of.VOICE), (T = l === eO._Of.VIDEO));
    let m = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(tL, {
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
    });
});
function ty() {
    (0, E.bG)([Q.A], () => Q.A.getPrivateChannelsVersion());
    let e = Q.A.getMutablePrivateChannels(),
        t = (0, E.yK)([e1.A], () => e1.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, E.cf)([ta.A], () => ({
            selectedVoiceGuildId: ta.A.getGuildId(),
            selectedVoiceChannelId: ta.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tD, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && s.unshift((0, r.jsx)(tD, { channel: l }, l.id)),
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
var tv = n(32880),
    tb = n(939249),
    tM = n(547732);
function tP(e) {
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
                    : (0, r.jsx)(eI.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eD.A_,
                          children: n,
                      }),
            [n, s],
        ),
        E = i ? t : (0, r.jsx)("div", { className: l()(tM.p, { [tM.w]: u }), children: t });
    return (0, r.jsx)(eE.m, {
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
var tU = n(530787);
let tw = a.forwardRef(function (e, t) {
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
            R = f ?? ("string" == typeof c ? c : void 0);
        return (0, r.jsxs)(K.c, {
            children: [
                h ? (0, r.jsx)(Y.A, { overlay: !0, hovered: N, selected: d }) : null,
                (0, r.jsx)(tP, {
                    text: c,
                    selected: d,
                    children: (0, r.jsx)(k.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: E,
                        lowerBadgeSize: A,
                        children: (0, r.jsx)(tb.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                T?.(), C(!0);
                            },
                            onMouseLeave: () => {
                                m?.(), C(!1);
                            },
                            onMouseDown: g,
                            className: l()(tU.oZ, I, { [tU.wH]: d || N }),
                            onClick: i,
                            "aria-label": R,
                            "aria-selected": d,
                            onContextMenu: s,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != o && (0, r.jsx)(o, { className: tU.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                p,
            ],
        });
    }),
    tG = "DOWNLOAD_APPS";
function tx() {
    let e = (0, p.useModalsStore)((e) => (0, p.hasModalOpenSelector)(e, tG));
    return (0, r.jsx)(tw, {
        id: "app-download-button",
        onClick: () => {
            (0, p.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tG },
            );
        },
        selected: e,
        tooltip: eL.intl.string(eL.t.Z7jwrJ),
        icon: tv.s,
    });
}
var tk = n(245604),
    tF = n(272613),
    tV = n(398884),
    tB = n(772366),
    tH = n(728321),
    tj = n(260509),
    tW = n(284009),
    tY = n.n(tW),
    tK = n(295868),
    t$ = n(66834),
    tz = n(174459),
    tq = n(787426);
function tZ(e) {
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
function tX(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tY()(t.type !== eX.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eX.PJ.FOLDER || t.type !== eX.PJ.FOLDER) &&
                (e.type !== eX.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                i && t.type !== eX.PJ.FOLDER && tz.default.track(eO.HAw.GUILD_FOLDER_CREATED),
                    t$.A.moveById(r, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tQ(e) {
    let { name: t, targetNode: n, combine: i, below: s } = e,
        l = a.useMemo(() => tX([eX.PJ.GUILD, eX.PJ.FOLDER], n, s, i), [n, s, i]),
        [{ canDrop: o, isOver: d }, c] = (0, tK.H)(l),
        u = tZ([
            [o, tq.OP],
            [d, tq.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (u.current = e), c(e);
        },
        "data-dnd-name": eL.intl.formatToPlainString(eL.t["A5aDw+"], { itemName: t }),
        className: tq.aC,
    });
}
function tJ(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, d] = (0, tK.H)(() => tX([eX.PJ.GUILD], n, !0, !0));
    a.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = tZ([
        [s, tq.OP],
        [o, tq.NQ],
    ]);
    return (0, r.jsx)(tP, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (c.current = e), d(e);
            },
            "data-dnd-name": eL.intl.formatToPlainString(eL.t.qiQ0QI, { itemName: t }),
            className: l()(tq.dw, {}),
        }),
    });
}
let t0 = a.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: a = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: tq.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(tQ, { name: t, targetNode: n, below: a }),
            l ? (0, r.jsx)(tJ, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function t1(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: a }, s] = (0, tK.H)(() => tX([eX.PJ.GUILD], n, !0, !0)),
        l = tZ([[a, tq.a7]]),
        o = tZ([
            [a, tq.NQ],
            [i, tq.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: l,
        className: tq.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: tq.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (o.current = e), s(e);
                },
                "aria-label": `At end of ${t}`,
                className: tq.aC,
            }),
        }),
    });
}
function t2(e) {
    let { children: t } = e,
        [, n] = (0, tK.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var t3 = n(819638),
    t6 = n(266062);
let t4 = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function t7(e) {
    (0, td.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function t5(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, E.yK)([e$.A], () => e$.A.getGuildsArray()),
        s = (0, E.bG)([eN.default], () => eN.default.getCurrentUser()),
        l = a.useMemo(() => i.some((e) => (0, tj.bM)(e, s)), [i, s]),
        o = (0, p.useModalsStore)((e) => (0, p.hasModalOpenSelector)(e, t3.fc)),
        { analyticsLocations: d } = (0, D.Ay)();
    return (0, r.jsx)("div", {
        className: t6.Uq,
        children: (0, r.jsxs)(tH.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: t4,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tw, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tV.Sn)()
                            ? (0, tB.A)({
                                  analyticsSource: { page: eO.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eO.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eO.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tF.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: t7,
                    tooltip: eL.intl.string(eL.t.l5WIbf),
                    icon: tk.U,
                }),
                null != n &&
                    (0, r.jsx)(t0, { name: eL.intl.string(eL.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var t8 = n(565787),
    t9 = n(791606),
    ne = n(486020),
    nt = n(962795);
function nn(e) {
    let [t, i] = a.useState(!1),
        s = (0, u.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(K.c, {
        children: (0, r.jsx)(tP, {
            text: e.name,
            children: (0, r.jsx)(k.Q, {
                className: nt.o,
                selected: t,
                lowerBadge: (0, r.jsx)(to.fk, { icon: (0, t8.k)(t9.A), disableColor: !0, className: nt._ }),
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
                            ? ne.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var ni = n(696292),
    nr = n(836480),
    na = n(533129),
    ns = n(726845),
    nl = n(837057),
    no = n(310419),
    nd = n(488995),
    nc = n(324580),
    nu = n(190107);
let n_ = a.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: s, className: l } = e,
        o = a.useCallback(() => {
            (0, na.WL)({ source: nd.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== s ? nd.GlobalDiscoveryTab.QUESTS : ns.A.getField("selectedTab");
            switch (e) {
                case nd.GlobalDiscoveryTab.QUESTS:
                    return (0, nl.transitionToGlobalDiscovery)({
                        tab: nd.GlobalDiscoveryTab.QUESTS,
                        location: nu.rE.DISCOVERY_COMPASS,
                        questContent: ni.u.DISCOVERY_COMPASS,
                        questId: s,
                    });
                case nd.GlobalDiscoveryTab.SERVERS:
                    return (0, nl.transitionToGlobalDiscovery)({
                        tab: nd.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nc.J8.GUILDS_BAR,
                    });
                case nd.GlobalDiscoveryTab.APPS:
                    return (0, nl.transitionToGlobalDiscovery)({
                        tab: nd.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: no.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, nl.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [s]);
    return (0, r.jsx)(tw, {
        id: "guild-discover-button",
        ref: t,
        className: l,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: eL.intl.string(eL.t["4nEZLk"]),
        icon: nr.Q,
    });
});
var nE = n(506774),
    nA = n(509963),
    nh = n(111159),
    nI = n(793943),
    nf = n(428262),
    np = n(350972),
    nT = n(677056),
    nm = n(526162),
    ng = n(174197);
function nS() {
    let [e, t] = (0, E.yK)([eN.default, nm.A], () => [
            nm.A.getCurrentDesktopIcon(),
            nf.Ay.isPremium(eN.default.getCurrentUser()),
        ]),
        n = (0, nI.fy)().activePanel === nI.HP.APP_ICON,
        i = (0, ng.gG)(e),
        a = i.id !== np.LW.DEFAULT && (t || n),
        s = (0, r.jsx)(nh.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && a ? (0, r.jsx)(nT.A, { id: i.id, size: ng.N8.SIZE_48 }) : s;
}
var nN = n(531260),
    nC = n(411976),
    nR = n(912309),
    nO = n(400492),
    nL = n(354670),
    nD = n(619921),
    ny = n(340829),
    nv = n(966846),
    nb = n(674378),
    nM = n(394953),
    nP = n(235079),
    nU = n(30186);
let nw = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nG(e) {
    let { selected: t, user: n, badge: i, link: s, showProgressBadge: l } = e,
        [o, d] = a.useState(!1),
        [c, _] = a.useState(!1),
        [E, A] = a.useState(null),
        [h, I] = a.useState(0),
        f = (0, u.Vd)("home"),
        p = (0, nI.fy)().activePanel === nI.HP.APP_ICON;
    function T() {
        A(null), I(0), clearTimeout(E);
    }
    if (null == n) return null;
    let m = eL.intl.string(eL.t.YUU0RF);
    c && (m = nE.w.get(eO.wqg) ? eL.intl.string(eL.t["nkq1l+"]) : eL.intl.string(eL.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, r.jsx)(nA.A, { className: nU.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, r.jsx)(k.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, $.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, to.o6)(i) },
            children: (0, r.jsx)(F.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), I(h + 1), 15 === h)) {
                        T();
                        let e = !nE.w.get(eO.wqg);
                        nE.w.set(eO.wqg, e),
                            e && nE.w.set(nP.L, !0),
                            e ? (0, nO.Ak)("discodo") : (0, nO.Ak)("user_leave"),
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
                            page: eO.liQ.GUILD_CHANNEL,
                            section: eO.JJy.NAVIGATION,
                            object: eO.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(nS, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nU.Uq,
        children: (0, r.jsx)(tH.A, {
            inlineSpecs: nw,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, selected: t, hovered: o }),
                    (0, r.jsx)(tP, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nx() {
    let e = (function () {
            let e = (0, q.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eO.BVt.GUILD_DISCOVERY) || t.startsWith(eO.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eO.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nM.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, E.bG)([nv.A, ny.A], () => {
            let e = (0, nA.v)(nv.A.activeItems, ny.A),
                { total: t, progress: n } = nb.zY(e),
                i = nb.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nR.kX)(),
        i = Object.keys(ew.TP),
        a = (0, nN.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, E.cf)([nL.A], () => ({
            unviewedTrialCount: nL.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nL.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === ew.xc.NONE ? s + l : 0,
        d = (0, E.bG)([eN.default], () => eN.default.getCurrentUser()),
        u = (0, nC.W)(),
        _ = n + o + u,
        A = _ === o && o > 0 && n + u === 0,
        h = nD.A.getHomeLink();
    return (
        A && (h = eO.BVt.APPLICATION_STORE),
        (0, r.jsx)(nG, {
            selected: e,
            user: d,
            selectedChannelId: J.A.getChannelId(eO.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nk = n(473201);
function nF(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(K.c, { children: (0, r.jsx)("div", { className: l()(nk.t, { [nk.I]: t }) }) });
}
var nV = n(349288),
    nB = n(695366),
    nH = n(919638),
    nj = n(818348),
    nW = n(585212);
function nY() {
    let e = (0, E.bG)([nH.A, e$.A], () => nH.A.unavailableGuilds.filter((e) => null == e$.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(K.c, {
              children: (0, r.jsx)(tP, {
                  text: eL.intl.format(eL.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nV.Anchor, {
                      href: nj.qF.STATUS,
                      target: "_blank",
                      className: nW.h,
                      "aria-label": eL.intl.formatToPlainString(eL.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nB.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nK = n(312742),
    n$ = n(317097),
    nz = n(319060),
    nq = n(866323),
    nZ = n(817281),
    nX = n(534409),
    nQ = n(240248),
    nJ = n(678708),
    n0 = n(187322),
    n1 = n(140735),
    n2 = n(548118),
    n3 = n(273923);
function n6(e) {
    let { guildId: t, animate: n } = e,
        i = (0, E.bG)([e$.A], () => e$.A.getGuild(t), [t]),
        a = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: l()(n3.VL, n3.zU), children: (0, r.jsx)(nB.E, { color: "currentColor" }) })
        : (0, r.jsx)(n2.Ay, {
              guild: i,
              animate: n,
              size: n2.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: n3.VL,
              tabIndex: -1,
          });
}
function n4(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: a } = t,
        s = n && i,
        o = (0, r.jsx)("div", {
            className: n3.hJ,
            children: (0, r.jsx)("div", {
                className: n3.Eh,
                children: (0, r.jsx)(nJ.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, r.jsx)("div", {
            className: n3.qJ,
            children: (0, r.jsx)("div", {
                className: n3.jg,
                children: a.slice(0, 4).map((e) => (0, r.jsx)(n6, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()({ [n3.NG]: s, [n3.yd]: !s }),
        children: [!s && o, d],
    });
}
function n7(e) {
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
        R = n || null == s ? null : (0, $.oi)(s),
        O =
            !n && l > 0
                ? (0, $.wN)(
                      l,
                      o ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(n0.vN, {
        children: (0, r.jsxs)(tb.D, {
            className: n3.H3,
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
                (0, r.jsx)(n1.A, {
                    children: eL.intl.formatToPlainString(eL.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, r.jsx)(k.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: R,
                    lowerBadge: O,
                    lowerBadgeSize: { width: (0, to.o6)(l) },
                    children: (0, r.jsx)("div", {
                        className: n3.vA,
                        children:
                            null != u
                                ? (0, r.jsx)("div", { className: n3.hJ, children: u })
                                : (0, r.jsx)(n4, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var n5 = n(573435),
    n8 = n(643918);
function n9(e) {
    let { className: t, isFolder: n } = e,
        i = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(n5.Ay, {
        mask: n5.Ay.Masks.SQUIRCLE,
        className: l()(t, n8.OL, { [n8.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: n8.ZU }),
    });
}
var ie = n(114329),
    it = n(620370);
let ii = (0, nQ.xI)(nz.A.FOLDER_ITEM_ANIMATION_DURATION),
    ir = (0, ts.animated)(T.B),
    ia = a.memo(function (e) {
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
                onContextMenu: R,
                renderChildNode: O,
                folderButtonSize: L,
                folderButtonContent: D,
                "aria-setsize": y,
                "aria-posinset": v,
            } = e,
            { id: b, name: M, children: P } = o,
            [U, w] = a.useState(!1),
            [G, x] = a.useState(!1),
            k = U || G,
            F = (0, nX.qK)("FolderItem");
        a.useEffect(() => {
            m && w(!1);
        }, [m]);
        let [{ dragging: V }, B] = (0, nK.i)({
                type: eX.PJ.FOLDER,
                item: () => (S?.(), { type: eX.PJ.FOLDER, nodeId: o.id }),
                end() {
                    N?.(), (0, nZ.um)(ez.Ay.getCompatibleGuildFolders());
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
            Z = (0, nq.p)(!V && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: ii },
            }),
            X = a.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, disabled: V || _, hovered: U, selected: c, unread: I }),
                    (0, r.jsx)(tP, {
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
                            className: l()(n3.MJ, { [n3.L0]: "icon" === L || F, [it.oR]: !V && G && !_ }),
                            "data-dnd-name": W,
                            children: V
                                ? (0, r.jsx)(n9, { isFolder: !0 })
                                : (0, r.jsx)(n7, {
                                      folderNode: o,
                                      expanded: _,
                                      sorting: m,
                                      mediaState: E,
                                      mentionCount: A,
                                      isMentionLowImportance: h,
                                      tooltipName: W,
                                      folderGroupId: z,
                                      onClick: C,
                                      onContextMenu: R,
                                      onHoverChange: w,
                                      onKeyDown: j,
                                      treeItemProps: $,
                                      folderButtonContent: D,
                                      "aria-setsize": y,
                                      "aria-posinset": v,
                                  }),
                        }),
                    }),
                    T ? (0, r.jsx)(t0, { name: W, targetNode: o, onDragOverChanged: H }) : null,
                ],
            }),
            J = null != o.color ? o.color : ie.DO,
            ee = J === ie.DO ? void 0 : (0, n$.Hl)(J);
        return (0, r.jsxs)("div", {
            ref: X,
            className: l()(n3.qc, { [n3.Av]: _, [n3.Lg]: k }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": G,
            children: [
                !V && _ && (0, r.jsx)("span", { className: n3.GO }),
                Q,
                Z((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            ir,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: n3.TN,
                                style: { height: e.height.to((e) => e * q) },
                                "aria-label": o.name,
                                children: P.map((t, n) => O(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                T && _ ? (0, r.jsx)(t1, { name: W, targetNode: o }) : null,
            ],
        });
    });
var is = n(354583);
let il = a.memo(function (e) {
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
        R = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = e$.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eR.Vq),
                n = 2 * eO.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(I),
        O =
            ((t = (0, E.bG)([ta.A], () => ta.A.getGuildId())),
            (i = I.children.map((e) => e.id)),
            (s = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, E.bG)([ta.A], () => ta.A.getChannelId())),
            (_ = null != (u = (0, is.A)()?.guild_id) && i.includes(u)),
            (A = (0, E.bG)([ee.A], () => null != c && ee.A.hasVideo(c), [c])),
            (h = (0, E.bG)([X.A], () => X.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != h && null != h.guildId && i.includes(h.guildId))),
            a.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: _, isCurrentUserConnected: s }),
                [l, o, d, _, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: D,
            unread: y,
        } = (0, E.cf)([eo.default], () => ({
            mentionCount: S.map((e) => eo.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => eo.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => eo.default.hasUnread(e)),
        })),
        v = a.useCallback(() => {
            t$.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = a.useCallback(
            (e) => {
                (0, td.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: y || L > 0 });
                });
            },
            [p, T, m, y, L],
        );
    return (0, r.jsx)(ia, {
        ...f,
        folderNode: I,
        expanded: C,
        selected: null != N && S.includes(N),
        mentionCount: L,
        isMentionLowImportance: D,
        unread: y,
        mediaState: O,
        defaultFolderName: R,
        onExpandCollapse: v,
        onContextMenu: b,
    });
});
var io = n(113494),
    id = n(821124),
    ic = n(212455);
function iu(e) {
    let t = e?.features.has(eO.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, E.bG)([ic.A, eN.default, eK.Ay], () => {
            if (null == e) return;
            let t = ic.A.getRequest(e.id),
                n = eN.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = eK.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, id.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var i_ = n(347951),
    iE = n(478437),
    iA = n(811024),
    ih = n(508654),
    iI = n(233993),
    ip = n(446600),
    iT = n(95701),
    im = n(280450);
let ig = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-06-dont-badge-muted-vcs",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function iS(e) {
    return ig.useConfig({ location: e }).enabled;
}
function iN(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ed.A;
    return null != e && e.type !== iE.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eO.hVb.VIEW_CHANNEL, e);
}
function iC(e) {
    let t = (0, E.bG)([eu.Ay], () => eu.Ay.isMuted(e)),
        n = iS("useGuildMediaState"),
        i = (0, ih.BP)(e),
        r = (0, E.yK)([j.Ay, tA.A], () =>
            j.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tA.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tA.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        a = (0, W.H)(r[0]?.location),
        s = (0, iA.Gp)(a),
        {
            guildHasVoice: l,
            guildHasVideo: o,
            selectedVoiceChannelHasVideo: c,
        } = (0, E.cf)([J.A, ee.A, e$.A, ed.A, Q.A, eu.Ay], () => {
            var i;
            let r = J.A.getVoiceChannelId(),
                a = e$.A.getGuild(e)?.afkChannelId,
                s = ee.A.getUsersWithVideo(e),
                l =
                    ((i = ee.A.getVoiceStates(e)),
                    d()(i)
                        .filter((e) => !tA.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let t in l) {
                        let i = l[t].channelId;
                        if (
                            null != i &&
                            iN(Q.A.getBasicChannel(i), a ?? void 0, ed.A) &&
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
                            iN(Q.A.getBasicChannel(i), a ?? void 0, ed.A) &&
                            (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != r && ee.A.hasVideo(r),
            };
        }, [e, t, n]),
        u = im.default.getId();
    return (0, E.cf)([J.A, Q.A, j.Ay, ip.A, X.A, ed.A, eu.Ay], () => {
        let a = J.A.getVoiceChannelId(),
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
        let p = et.default.keys(ip.A.getStageInstancesByGuild(e)).some((e) => {
                let t = Q.A.getChannel(e);
                return null != t && ed.A.can(iI.Gk, t);
            }),
            T = d && (Q.A.getChannel(a)?.isGuildStageVoice() ?? !1),
            m = !!d && null != X.A.getActiveStreamForUser(u, e),
            g = X.A.getAllApplicationStreams()
                .filter((e) => !tA.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e && (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(e, t.channelId))),
            S = d && c,
            N = (() => {
                if (s) return r.length > 0;
                for (let e of r) {
                    let t = Q.A.getChannel((0, W.H)(e.location));
                    if (null != t && (0, iT.gV)(t.type)) return !0;
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
var iR = n(607399),
    iO = n(702841),
    iL = n(658128),
    iD = n(976860),
    iy = n(676279);
function iv(e) {
    let { guild: t, show: n, active: i, onAnimationStart: a, onAnimationRest: s } = e,
        o = {},
        d = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, g.r)(f.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, g.r)(f.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nq.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: s });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: n3.qc,
                        children: (0, r.jsx)("div", {
                            className: l()(n3.MJ, n3.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(ts.animated.div, {
                                className: n3.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: n3.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: n3.jg,
                                        children: (0, r.jsx)(n2.Ay, {
                                            guild: t,
                                            size: n2.Ay.Sizes.SMOL,
                                            className: n3.VL,
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
var ib = n(454938),
    iM = n(714991),
    iP = n(107773),
    iU = n(513461),
    iw = n(164956),
    iG = n(624265),
    ix = n(970278),
    ik = n(808728);
function iF(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, r.jsx)(e, { className: eD.RI, color: "currentColor" }),
                  (0, r.jsx)(em.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iV(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eI.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eL.intl.string(eL.t.fpKdS1),
          })
        : (0, r.jsx)(tT.A, { muteConfig: t, className: n });
}
function iB(e) {
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
        R,
        O,
        { guild: L } = e,
        D = L.id,
        {
            voiceUsersToShow: y,
            stageSpeakers: v,
            numStageListeners: b,
            streamUsersToShow: M,
            embeddedActivitiesUsers: P,
        } = ((t = L.id),
        (n = iS("useGuildTooltipActivity")),
        (i = (0, E.yK)(
            [ik.Ay, ix.A, eu.Ay],
            () => [
                ...ik.Ay.getChannels(t)
                    [ik.vM].filter((e) => {
                        let { channel: i } = e;
                        return i.type === eO.rbe.GUILD_VOICE && (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(t, i.id));
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(ix.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t, n],
        )),
        (s = (0, iG.Ay)(t)),
        (o = a.useMemo(() => s.map((e) => e.id), [s])),
        (c = (0, E.bG)([eC.Ay], () => eC.Ay.getVoiceStates(t), [t])),
        (u = (0, E.yK)([tA.A], () => tA.A.getBlockedOrIgnoredIDs())),
        (_ = d().flatMap(i, (e) =>
            e === L.afkChannelId
                ? []
                : th(
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
                    : th(
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
                tI(
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
                tI(
                    j.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    u,
                ),
            [t, u],
        )),
        (p = (0, E.yK)([eN.default], () => th(f.map((e) => eN.default.getUser(e))), [f])),
        (T = (0, E.yK)([eN.default], () => I.map((e) => eN.default.getUser(e)), [I])),
        (g = th((m = _.filter((e) => !I.includes(e.id) && !f.includes(e.id))))),
        (S = T.filter((e) => null != e && !f.includes(e.id))),
        (N = (0, E.bG)([tf.A], () => tf.A.getUserAffinitiesMap(), [])),
        (C = a.useMemo(() => (0, tp.L)(g, N, "GuildTooltip - nonBlockedUsers"), [g, N])),
        (R = a.useMemo(() => (0, tp.L)(A, N, "GuildTooltip - stageSpeakers"), [A, N])),
        (O = a.useMemo(() => (0, tp.L)(S, N, "GuildTooltip - streamUsers"), [S, N])),
        {
            voiceUsersToShow: C,
            stageSpeakers: R,
            numStageListeners: h,
            streamUsersToShow: O,
            embeddedActivitiesUsers: a.useMemo(() => (0, tp.L)(p, N, "GuildTooltip - embeddedActivitiesUsers"), [p, N]),
            hasActivity: A.length > 0 || m.length > 0 || S.length > 0 || p.length > 0,
        }),
        U = iF(ef.H, y, D),
        w =
            0 === v.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eD.nM,
                      children: [
                          (0, r.jsx)(eA.q, { size: "lg", color: "currentColor", className: eD.RI }),
                          (0, r.jsx)(em.Ay, { guildId: D, users: v, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eD.GZ,
                              children: [
                                  (0, r.jsx)(eh.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eI.E, {
                                      className: eD._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: b,
                                  }),
                              ],
                          }),
                      ],
                  }),
        G = iF(ep.F, M, D),
        x = iF(eT.k, P, D),
        { isMuted: k, muteConfig: F } = (0, E.cf)(
            [eu.Ay],
            () => ({ isMuted: eu.Ay.isMuted(D), muteConfig: eu.Ay.getMuteConfig(D) }),
            [D],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            w,
            U,
            G,
            x,
            k ? (0, r.jsx)(iV, { muteConfig: F, className: l()(eD.LM, { [eD.Sx]: null != U || null != G }) }) : null,
        ],
    });
}
function iH(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(eI.E, {
        className: eD.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case iU.B5.SUBMITTED:
                    return eL.intl.string(eL.t["9KFC98"]);
                case iU.B5.REJECTED:
                    return eL.intl.string(eL.t["TQY/Rd"]);
                case iU.B5.APPROVED:
                    return eL.intl.string(eL.t.WXHcq5);
                default:
                    return eL.intl.string(eL.t.fjHFC8);
            }
        })(t),
    });
}
function ij(e) {
    let { guild: t } = e,
        n = (0, ib.A)(t),
        i = iu(t),
        a = null != i ? (0, r.jsx)(iH, { guildJoinRequestStatus: i }) : null,
        s = (0, r.jsx)(iB, { guild: t }),
        o = (0, E.bG)([iw.A], () => iw.A.isViewingRoles(t.id)),
        d = (0, i_.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l()(eD.nM, eD.Dl),
                children: [
                    n
                        ? (0, r.jsx)(iP.A, { disableBoostClick: !0, guild: t, className: eD.WX })
                        : (0, r.jsx)(iM.A, { guild: t, size: 20, className: eD.aL }),
                    (0, r.jsx)("span", { className: l()(eD.cN, eD.NT), children: t.name }),
                ],
            }),
            d
                ? (0, r.jsx)(eI.E, {
                      className: eD.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eL.intl.string(eL.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, r.jsx)(eI.E, {
                      className: eD.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eL.intl.string(eL.t["5LwN89"]),
                  })
                : (a ?? s),
        ],
    });
}
function iW(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: s } = e,
        l = a.useMemo(
            () =>
                n
                    ? null
                    : (0, r.jsx)(eI.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eD.A_,
                          children: (0, r.jsx)(ij, { guild: t }),
                      }),
            [n, t],
        );
    return (0, r.jsx)(eE.m, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: s,
    });
}
let iY = { analyticsSource: { page: eO.liQ.GUILD_CHANNEL, section: eO.JJy.CHANNEL_LIST, object: eO.ZSU.CHANNEL } };
function iK(e, t) {
    (0, td.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("26142"),
            n.e("84287"),
            n.e("1780"),
            n.e("47173"),
            n.e("60361"),
            n.e("41831"),
            n.e("51437"),
            n.e("87960"),
            n.e("21293"),
            n.e("93200"),
            n.e("41625"),
            n.e("90629"),
            n.e("8886"),
            n.e("6212"),
            n.e("78279"),
            n.e("78220"),
            n.e("11262"),
            n.e("16227"),
            n.e("37520"),
            n.e("12410"),
            n.e("38759"),
            n.e("37634"),
            n.e("812"),
            n.e("89209"),
            n.e("86832"),
            n.e("76342"),
            n.e("60988"),
            n.e("69273"),
            n.e("72210"),
            n.e("3155"),
            n.e("82104"),
            n.e("41711"),
            n.e("49623"),
            n.e("35316"),
            n.e("38838"),
            n.e("45214"),
            n.e("99253"),
            n.e("17202"),
            n.e("90862"),
            n.e("97189"),
            n.e("16918"),
            n.e("33730"),
            n.e("24059"),
            n.e("42306"),
            n.e("11291"),
            n.e("96846"),
            n.e("19709"),
            n.e("4251"),
            n.e("47412"),
            n.e("65327"),
            n.e("96490"),
            n.e("85484"),
            n.e("51772"),
            n.e("6605"),
            n.e("54483"),
            n.e("62461"),
            n.e("25677"),
            n.e("73679"),
            n.e("73178"),
            n.e("333"),
            n.e("97638"),
            n.e("22995"),
            n.e("59096"),
            n.e("55953"),
            n.e("56386"),
            n.e("51943"),
            n.e("90072"),
            n.e("88016"),
            n.e("84133"),
            n.e("13627"),
            n.e("57940"),
            n.e("58171"),
            n.e("44511"),
            n.e("39375"),
            n.e("47944"),
            n.e("84473"),
            n.e("70990"),
            n.e("15130"),
            n.e("74051"),
            n.e("50541"),
            n.e("32697"),
            n.e("64622"),
            n.e("47728"),
            n.e("31270"),
            n.e("6514"),
            n.e("8641"),
            n.e("6247"),
            n.e("70298"),
            n.e("82041"),
            n.e("97238"),
            n.e("30541"),
            n.e("74187"),
            n.e("62279"),
            n.e("67454"),
            n.e("42157"),
            n.e("85148"),
            n.e("4676"),
            n.e("53727"),
            n.e("57034"),
            n.e("85948"),
            n.e("12940"),
            n.e("52443"),
            n.e("11266"),
            n.e("12124"),
            n.e("18712"),
            n.e("60654"),
            n.e("70179"),
            n.e("97690"),
            n.e("87103"),
            n.e("52865"),
            n.e("57215"),
            n.e("22535"),
            n.e("31481"),
            n.e("83140"),
            n.e("18670"),
            n.e("33238"),
            n.e("31591"),
            n.e("39111"),
            n.e("58530"),
            n.e("35426"),
            n.e("71505"),
            n.e("69487"),
            n.e("87550"),
            n.e("20631"),
            n.e("8736"),
            n.e("61285"),
            n.e("97242"),
            n.e("98795"),
            n.e("65123"),
            n.e("23549"),
            n.e("83566"),
            n.e("69722"),
            n.e("80083"),
            n.e("28510"),
            n.e("78104"),
            n.e("8502"),
            n.e("29483"),
            n.e("39680"),
            n.e("21194"),
            n.e("99272"),
            n.e("20993"),
            n.e("34161"),
            n.e("69164"),
            n.e("92116"),
            n.e("84200"),
            n.e("33217"),
            n.e("25610"),
            n.e("42548"),
            n.e("80050"),
            n.e("37502"),
            n.e("68316"),
            n.e("46819"),
            n.e("81619"),
            n.e("17738"),
            n.e("31463"),
            n.e("57328"),
            n.e("44135"),
            n.e("26858"),
            n.e("82393"),
            n.e("39328"),
            n.e("48845"),
            n.e("34383"),
            n.e("83185"),
            n.e("79247"),
            n.e("41069"),
            n.e("37261"),
            n.e("69337"),
            n.e("62965"),
            n.e("47587"),
            n.e("32317"),
            n.e("84209"),
            n.e("78777"),
            n.e("64379"),
            n.e("79465"),
            n.e("83314"),
            n.e("32129"),
            n.e("85776"),
            n.e("83671"),
            n.e("63980"),
            n.e("18078"),
            n.e("73099"),
            n.e("47199"),
            n.e("78381"),
            n.e("62280"),
            n.e("78230"),
            n.e("11002"),
            n.e("47170"),
            n.e("39361"),
            n.e("15079"),
            n.e("70613"),
            n.e("25870"),
            n.e("76831"),
            n.e("37870"),
            n.e("3515"),
            n.e("77335"),
            n.e("8177"),
            n.e("41027"),
            n.e("37351"),
            n.e("22671"),
            n.e("36518"),
            n.e("79785"),
            n.e("46757"),
            n.e("90324"),
            n.e("20578"),
            n.e("36592"),
            n.e("10027"),
            n.e("92430"),
            n.e("54453"),
            n.e("79254"),
            n.e("38977"),
            n.e("20802"),
            n.e("91474"),
            n.e("17566"),
            n.e("23924"),
            n.e("42205"),
            n.e("55675"),
            n.e("25845"),
            n.e("19402"),
            n.e("49681"),
            n.e("22687"),
            n.e("96382"),
            n.e("62052"),
            n.e("63202"),
            n.e("82596"),
            n.e("10471"),
            n.e("64827"),
            n.e("63232"),
            n.e("68261"),
            n.e("7167"),
            n.e("11301"),
            n.e("12721"),
            n.e("84569"),
            n.e("60235"),
            n.e("61737"),
            n.e("92789"),
            n.e("21335"),
            n.e("77333"),
            n.e("47834"),
            n.e("11735"),
            n.e("85927"),
            n.e("834"),
            n.e("2368"),
            n.e("42842"),
            n.e("33115"),
            n.e("6338"),
            n.e("18573"),
            n.e("55936"),
            n.e("85404"),
            n.e("44057"),
            n.e("17879"),
            n.e("88774"),
            n.e("10120"),
            n.e("62175"),
            n.e("31988"),
            n.e("44571"),
            n.e("34303"),
            n.e("97270"),
            n.e("45959"),
            n.e("73122"),
            n.e("8304"),
            n.e("93159"),
            n.e("71202"),
            n.e("8739"),
            n.e("42834"),
            n.e("88131"),
            n.e("43430"),
            n.e("94723"),
            n.e("62931"),
            n.e("58529"),
            n.e("58038"),
            n.e("62531"),
            n.e("44974"),
            n.e("6174"),
            n.e("93103"),
            n.e("28367"),
            n.e("81647"),
            n.e("11310"),
            n.e("76602"),
            n.e("91763"),
            n.e("21921"),
            n.e("9233"),
            n.e("36877"),
            n.e("72963"),
            n.e("52511"),
            n.e("40402"),
            n.e("7575"),
            n.e("53930"),
            n.e("42724"),
            n.e("93766"),
            n.e("13823"),
            n.e("24303"),
            n.e("39970"),
            n.e("76418"),
            n.e("40258"),
            n.e("98329"),
            n.e("92583"),
            n.e("43437"),
            n.e("21957"),
            n.e("66495"),
            n.e("71210"),
            n.e("8555"),
            n.e("28095"),
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
            n.e("88342"),
            n.e("6949"),
            n.e("54638"),
            n.e("17249"),
            n.e("71273"),
            n.e("79049"),
            n.e("9640"),
            n.e("62422"),
            n.e("90365"),
            n.e("89088"),
            n.e("52548"),
            n.e("17989"),
            n.e("89421"),
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
            n.e("47958"),
            n.e("65437"),
            n.e("80830"),
            n.e("79745"),
            n.e("80854"),
            n.e("35395"),
            n.e("45413"),
            n.e("46844"),
            n.e("63235"),
            n.e("90757"),
            n.e("86672"),
            n.e("94427"),
            n.e("32756"),
            n.e("64850"),
            n.e("70104"),
            n.e("2564"),
            n.e("95152"),
            n.e("71477"),
            n.e("19558"),
            n.e("58946"),
            n.e("86023"),
            n.e("14285"),
            n.e("48330"),
            n.e("40153"),
            n.e("95752"),
            n.e("3332"),
            n.e("30788"),
            n.e("8362"),
            n.e("41678"),
            n.e("72401"),
            n.e("52617"),
            n.e("4744"),
            n.e("2698"),
            n.e("37021"),
            n.e("81314"),
            n.e("27012"),
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
            n.e("87478"),
            n.e("39171"),
            n.e("74630"),
            n.e("48948"),
            n.e("63244"),
            n.e("68214"),
            n.e("44780"),
            n.e("91450"),
            n.e("83952"),
            n.e("93438"),
            n.e("36227"),
            n.e("95340"),
            n.e("44567"),
            n.e("5557"),
            n.e("62718"),
            n.e("89916"),
            n.e("1812"),
            n.e("60773"),
            n.e("92128"),
            n.e("9004"),
            n.e("18113"),
            n.e("8018"),
            n.e("92295"),
            n.e("49145"),
            n.e("41807"),
            n.e("68763"),
            n.e("79548"),
            n.e("99549"),
            n.e("58273"),
            n.e("20930"),
            n.e("74610"),
            n.e("15109"),
            n.e("59957"),
            n.e("48382"),
            n.e("16988"),
            n.e("30997"),
            n.e("29666"),
            n.e("14591"),
            n.e("52111"),
            n.e("18706"),
            n.e("872"),
            n.e("57458"),
            n.e("59797"),
            n.e("38601"),
            n.e("93336"),
            n.e("1243"),
            n.e("69495"),
            n.e("15920"),
            n.e("75859"),
            n.e("3930"),
            n.e("28136"),
            n.e("3663"),
            n.e("27659"),
            n.e("68530"),
            n.e("66580"),
            n.e("43116"),
            n.e("78046"),
            n.e("83230"),
            n.e("82486"),
            n.e("16084"),
            n.e("73669"),
            n.e("10943"),
            n.e("7775"),
            n.e("60989"),
            n.e("61058"),
            n.e("50342"),
            n.e("33097"),
            n.e("3710"),
            n.e("36624"),
            n.e("45830"),
            n.e("77602"),
            n.e("10262"),
            n.e("95602"),
            n.e("46313"),
            n.e("41786"),
            n.e("34409"),
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
            n.e("57197"),
            n.e("74337"),
            n.e("14863"),
            n.e("84951"),
            n.e("60165"),
            n.e("71167"),
            n.e("12390"),
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
            n.e("94171"),
            n.e("76064"),
            n.e("74572"),
        ]).then(n.bind(n, 860417));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
let i$ = a.memo(function (e) {
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
            contextMenu: m = iK,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: R,
            height: O,
            "aria-setsize": L,
            "aria-posinset": D,
        } = e,
        { id: y, parentId: v } = t,
        b = e.upperBadge ?? (h ? (0, $.em)() : null != A ? (0, $.oi)(A) : void 0),
        M = e.lowerBadge ?? void 0;
    null == M && p > 0
        ? (M =
              (0, $.wN)(
                  p,
                  T ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == M && null != R && (M = (0, $.eW)({ guildJoinRequestStatus: R }) ?? void 0);
    let P = e.lowerBadgeSize ?? { width: (0, to.o6)(p) },
        [{ dragging: U }, w] = (0, nK.i)({
            type: eX.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                s?.(), (0, nZ.um)(ez.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        G = (0, u.Vd)(y ?? eO.dJq, null != v ? 2 : 1),
        [x, V] = a.useState(!1),
        B = !N && x,
        [j, W] = a.useState(!1),
        [z, q] = a.useState(!1),
        [X] = a.useState(() => new I.J_(70, () => q(!0))),
        Q = (0, iy.nr)() && !iR.Fr;
    a.useEffect(() => () => X.cancel(), [X]);
    let J = a.useCallback(() => {
            null != o ? (0, iD.pX)(o, { state: iY }) : (0, Z.u)(y, { state: iY });
        }, [y, o]),
        ee = a.useCallback(() => {
            if (null != o || null == d || h || !C) return;
            let e = (0, iL.W)(d.id);
            null != e && H.A.preload(d.id, e);
        }, [o, d, h, C]),
        et = (0, iO.bG)([eK.Ay], () => eK.Ay.isCurrentUserGuest(y)),
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
                n?.(y, e);
            },
            [y, n],
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
    let ec = (0, r.jsx)(iv, {
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
                  icon: (0, tj.Iv)(d, 2 * eo, B && c, !0),
                  selected: _ || B,
                  ...G,
                  "aria-setsize": L,
                  "aria-posinset": D,
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
                          icon: (0, tj.Iv)(d, 2 * eo, B && c, !0),
                          selected: _ || B,
                          ...G,
                          "aria-setsize": L,
                          "aria-posinset": D,
                          "aria-selected": _,
                      }),
                  }),
              }),
        e_ = z || j ? ec : eu,
        eE = (0, r.jsx)(t2, { children: (0, r.jsx)(n9, {}) }),
        eA = Q
            ? (0, r.jsx)(ts.animated.div, {
                  ref: S
                      ? (e) => {
                            w(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == O ? 1 : O },
                  "data-drop-hovering": z,
                  className: l()(it.rN, { [it.p9]: N, [it.oR]: z, [it.wH]: z || _ }),
                  children: (0, r.jsx)(k.Q, {
                      selected: !0,
                      upperBadge: b,
                      lowerBadge: M,
                      lowerBadgeSize: P,
                      children: e_,
                  }),
              })
            : (0, r.jsx)(ts.animated.div, {
                  style: { scale: null == O ? 1 : O },
                  className: l()(it.rN, { [it.p9]: N, [it.oR]: z, [it.wH]: z || _ }),
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
            (0, r.jsx)(iW, { guild: d, disabled: N, isDragging: U, children: U ? eE : eA }),
            S ? (0, r.jsx)(t0, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iz = n(182240);
let iq = a.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        s = (0, E.bG)([e$.A], () => e$.A.getGuild(i)),
        l = iu(s),
        o = (0, E.bG)([e7.A], () => e7.A.isFocused()),
        d = (0, E.bG)([nH.A], () => nH.A.isUnavailable(i)),
        c = (0, q.A)((e) => e.guildId),
        u = iC(i),
        {
            badge: _,
            unread: A,
            isMentionLowImportance: h,
        } = (0, E.cf)([eo.default], () => ({
            badge: eo.default.getMentionCount(i),
            isMentionLowImportance: eo.default.getIsMentionLowImportance(i),
            unread: eo.default.hasUnread(i),
        })),
        I = (0, i_.Ig)(s) && 0 === _,
        f = a.useMemo(
            () =>
                null != n
                    ? n
                    : I
                      ? (0, r.jsx)("div", {
                            className: iz.j,
                            children: (0, r.jsx)(io.E, {
                                size: "custom",
                                color: "currentColor",
                                className: iz.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, I],
        );
    return (0, r.jsx)(i$, {
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
var iZ = n(922016),
    iX = n(534514),
    iQ = n(821609),
    iJ = n(339350),
    i0 = n(475743),
    i1 = n(624458),
    i2 = n(408213),
    i3 = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    i6 = n(928568);
function i4(e, t) {
    (0, td.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function i7(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, E.bG)([ic.A], () => ic.A.getRequest(n)),
        a = (0, E.bG)([ic.A], () => ic.A.getJoinRequestGuild(n), [n]),
        s = (0, E.bG)([e7.A], () => e7.A.isFocused()),
        l = (0, E.bG)([eQ.A], () => eQ.A.getGuildId());
    return null == a
        ? null
        : (0, r.jsx)(i$, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: i4,
              lowerBadge:
                  i?.applicationStatus === iU.B5.REJECTED
                      ? (0, $.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eO.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var i5 = n(785439);
function i8(e) {
    let { onActivate: t, children: n } = e,
        i = a.useRef(null),
        s = (0, E.bG)([ic.A], () => ic.A.hasJoinRequestCoackmark()),
        l = a.useCallback(() => {
            i2.Ay.clearCoachmark();
        }, []),
        o = (0, i0.A)(s),
        d = a.useRef(null);
    return (
        a.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, r.jsxs)("div", {
            className: i5.kL,
            children: [
                (0, r.jsx)(iZ.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: i5.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: i5.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: i5.q3,
                                            children: [
                                                (0, r.jsx)(iX.D, {
                                                    variant: "heading-md/medium",
                                                    children: eL.intl.string(eL.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(eI.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eL.intl.string(eL.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(iQ.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eL.intl.string(eL.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: i5.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: i5.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function i9(e) {
    let { onActivate: t } = e,
        [n, i] = a.useState(!1),
        s = (0, E.bG)([eQ.A], () => eQ.A.getGuildId()),
        l = (0, E.bG)([ic.A], () => ic.A.hasFetchedRequestToJoinGuilds),
        o = (0, i6.A)(),
        d = (0, i0.A)(s),
        c = a.useMemo(() => {
            let e = (0, eX.xW)({
                folderId: i3.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eL.intl.string(eL.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eX.EL)(t, e.id));
            return e;
        }, [o, n]);
    a.useEffect(() => {
        n && !l && i1.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (a.useEffect(() => {
        !n && u && d !== s && i(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, r.jsx)(i8, {
              onActivate: t,
              children: (0, r.jsx)(ia, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), i2.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: i5.rH,
                      children: (0, r.jsx)(iJ.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eX.PJ.GUILD
                          ? null
                          : (0, r.jsx)(i7, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function re(e) {
    let { guildId: t } = e,
        n = a.useMemo(() => (0, eX.EL)(t), [t]),
        i = (0, E.bG)([e$.A], () => e$.A.getGuild(t)),
        s = (0, E.bG)([e7.A], () => e7.A.isFocused()),
        l =
            t ===
            (0, q.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = iC(t);
    return null == i
        ? null
        : (0, r.jsx)(i$, { guildNode: n, guild: i, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var rt = n(803921);
let rn = (0, v.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("98594"),
                n.e("78104"),
                n.e("66622"),
                n.e("62279"),
                n.e("67454"),
                n.e("37634"),
                n.e("42157"),
                n.e("812"),
                n.e("7927"),
                n.e("7580"),
                n.e("81647"),
                n.e("76602"),
                n.e("91763"),
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
                n.e("44567"),
                n.e("1812"),
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
                n.e("8066"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    ri = (0, eq.isWindows)() ? 4 : 12 * !(0, eq.isMac)();
function rr(e) {
    return e.startsWith(eO.BVt.GUILD_DISCOVERY) || e.startsWith(eO.BVt.GLOBAL_DISCOVERY);
}
class ra {
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
            (null == e && rr(window.location.pathname)) ||
            e === eO.sFm.SERVER_DISCOVERY_BADGE ||
            e === eO.sFm.E3_SERVER_DISCOVERY_BADGE
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
function rs(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        s = (0, U.A)("TopSection"),
        { isExperimentEnabled: l } = (0, P.TW)("TopSection"),
        o = (0, E.bG)([J.A], () => null != J.A.getVoiceChannelId()),
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
            (0, r.jsx)(nx, {}),
            N === ej.RK.SERVER_RAIL_TOP && (0, r.jsx)(rn, {}),
            s ? (0, r.jsx)(eV, { shouldShowIntroPopover: f, markIntroPopoverAsDismissed: _ }) : null,
            !t && (0, r.jsx)(ty, {}),
            S.map((e) => (0, r.jsx)(re, { guildId: e }, e)),
            (0, r.jsx)(i9, { onActivate: n }),
        ],
    });
}
function rl(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, E.yK)([ez.Ay], () => {
            let e = ez.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, E.yK)([eY.A], () => eY.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(nn, { id: e.id, name: e.name, icon: e.icon }, e.id),
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
            (0, r.jsx)(nY, {}),
            i ? null : (0, r.jsx)(t5, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tx, {}),
        ],
    });
}
function ro(e) {
    var t;
    let { disableAppDownload: n = eq.isPlatformEmbedded, isOverlay: i = !1, className: s, themeOverride: o } = e,
        [d] = (0, E.yK)([ez.Ay], () => {
            let e = ez.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, E.bG)([eH.A], () => eH.A.lurkingGuildIds()),
        A = a.useMemo(() => (i ? [] : _), [_, i]),
        h = (0, E.bG)([y.A], () => y.A.isFullscreenInContext()),
        { isSorting: p, startSorting: T, stopSorting: C } = (0, eZ.A)(),
        O = a.useRef(!1),
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
                        heightBeforeGuilds: ri + t + W * e,
                        bottomInset: 16,
                    });
            return new ra(
                d,
                k,
                eO.tEg,
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
    let { analyticsLocations: K } = (0, D.Ay)(L.A.GUILDS_LIST),
        $ = rr(H);
    (0, R.u5)(() => {
        if (!O.current && 0 !== d.size) {
            if (!$) {
                let { scrollTop: e } = eW.A.getGuildListDimensions();
                Y.scrollTo({ to: e, animate: !1 });
            }
            return (O.current = !0), () => v.stop();
        }
    }),
        a.useEffect(() => {
            if ((Y.setGuildsTree(d), O.current || 0 === d.size)) return;
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
                            il,
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
                            iq,
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
        X = (0, r.jsx)(n_, { selected: $, className: rt.ai }),
        Q = j === ej.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(D.f5, {
        value: K,
        children: (0, r.jsx)(S.N, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: l()(rt.iE, s, e, { [rt.R]: h }),
                    "aria-label": eL.intl.string(eL.t.PjnF2t),
                    children: [
                        (0, r.jsx)(ti, {
                            ref: b,
                            isVisible: Y.isItemVisible,
                            onJumpTo: Y.handleJumpToGuild,
                            className: rt.Xl,
                            barClassName: rt.Sh,
                        }),
                        (0, r.jsxs)("div", {
                            ref: P,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: rt.B2,
                            children: [
                                (0, r.jsxs)(N.zC, {
                                    className: l()({ [rt.XG]: !0, [rt.qw]: x }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: Y.scrollerRef,
                                    onScroll: Y.handleScroll,
                                    children: [
                                        (0, r.jsx)(rs, { scrollToTop: z, lurkingGuildIds: A }),
                                        (0, r.jsx)(nF, {}),
                                        (0, r.jsx)(rl, {
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
                                            (0, r.jsx)(nF, { fullWidth: !0 }),
                                            (0, r.jsx)("div", { className: rt.JU, children: (0, r.jsx)(rn, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(ti, {
                            reverse: !0,
                            ref: M,
                            isVisible: Y.isItemVisible,
                            onJumpTo: Y.handleJumpToGuild,
                            className: l()(rt.LZ, { [rt.CH]: !i && !Q, [rt.c0]: !i && Q }),
                            barClassName: rt.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let rd = a.memo(
    function (e) {
        let t = (0, O.A)("guildsnav");
        return (0, r.jsx)(u.hD, { navigator: t, children: (0, r.jsx)(ro, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, h.A)(e, t),
);
