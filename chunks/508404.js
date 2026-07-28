"use strict";
n.d(t, { A: () => rc });
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
    P = n(281980),
    U = n(749884);
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
    ei = n(659324),
    er = n(668267),
    ea = n(5180),
    es = n(695633),
    el = n(152007),
    eo = n(458294),
    ed = n(576705),
    ec = n(568548),
    eu = n(543465),
    e_ = n(551289),
    eE = n(428784),
    eA = n(451394),
    eh = n(597601),
    eI = n(834730),
    ef = n(983851),
    ep = n(183623),
    eT = n(323384),
    em = n(866665),
    eg = n(104171),
    eS = n(63995),
    eN = n(518769),
    eC = n(287809),
    eO = n(607567),
    eR = n(403362),
    eL = n(652215),
    ey = n(375708),
    eD = n(833971);
function ev(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, r.jsx)(e, { className: eD.RI, color: "currentColor" }),
                  (0, r.jsx)(eg.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eb() {
    let e = (0, E.yK)([en.A, Q.A], () =>
            et.default
                .keys(en.A.getFavoriteChannels())
                .map((e) => Q.A.getChannel(e))
                .filter(eR.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eL.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eL.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        a = (0, E.yK)(
            [eO.Ay],
            () =>
                d().flatMap(n, (e) =>
                    eO.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, E.yK)([eS.A], () =>
            d().flatMap(i, (e) =>
                eS.A.getMutableParticipants(e, eN.ip.SPEAKER)
                    .filter((e) => e.type === eN.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, E.bG)([eS.A], () => {
            let e = 0;
            for (let t of i) e += eS.A.getParticipantCount(t, eN.ip.AUDIENCE);
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
        u = (0, E.yK)([eC.default], () => c.map((e) => eC.default.getUser(e)), [c]),
        _ = (0, E.yK)([eC.default], () => o.map((e) => eC.default.getUser(e)), [o]),
        A = ev(
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
                          (0, r.jsx)(eg.Ay, { guildId: void 0, users: s, max: 3 }),
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
        I = ev(
            ep.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        f = ev(eT.k, u);
    return (0, r.jsxs)(r.Fragment, { children: [h, A, I, f] });
}
function eM() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eD.nM, eD.Dl),
                children: (0, r.jsx)("span", { className: l()(eD.cN, eD.NT), children: ey.intl.string(ey.t.wMWyci) }),
            }),
            (0, r.jsx)(eb, {}),
        ],
    });
}
function eP(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = a.useMemo(
            () =>
                (0, r.jsx)(eI.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eD.A_,
                    children: (0, r.jsx)(eM, {}),
                }),
            [],
        );
    return (0, r.jsx)(em.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eU = n(97483),
    ew = n(49999),
    eG = n(202541),
    ex = n(449817),
    ek = n(191775),
    eF = n(988572);
let eV = { analyticsSource: { page: eL.liQ.GUILD_CHANNEL, section: eL.JJy.CHANNEL_LIST, object: eL.ZSU.CHANNEL } };
function eB(e) {
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
        v = (0, eE.$)("favorite-server-context"),
        { favoriteGuildMuted: b, favoriteChannels: M } = (0, E.cf)([en.A], () => ({
            favoriteChannels: en.A.getFavoriteChannels(),
            favoriteGuildMuted: en.A.favoriteGuildMuted,
        })),
        U = (0, E.bG)([J.Ay], () => J.Ay.getChannelId(eL.YYv)),
        eA = (0, E.bG)([Q.A], () => Q.A.getChannel(U)),
        eh = (0, q.A)((e) => e.guildId),
        eI = (0, ea.ai)(eh),
        { badge: ef, unread: ep } = (0, E.cf)([es.A, Q.A, eo.default, el.A, ed.A, ec.Ay, eu.Ay], () => {
            let e = et.default.keys(M),
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
            ((i = null != (t = (0, E.bG)([J.Ay], () => J.Ay.getVoiceChannelId())) && null != M[t]),
            (s = (0, E.bG)([X.A], () => {
                if (!i) return !1;
                let e = X.A.getCurrentUserActiveStream();
                return null != e && null != M[e.channelId];
            })),
            (l = (0, E.bG)([X.A], () => X.A.getAllApplicationStreams().some((e) => null != M[e.channelId]))),
            (o = (0, E.bG)([ee.A], () => i && null != t && ee.A.hasVideo(t), [i, t])),
            (d = (0, E.yK)([j.Ay], () =>
                et.default.keys(M).reduce((e, t) => (e.push(...j.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (c = (0, E.bG)([j.Ay], () =>
                Array.from(j.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, W.H)(t);
                    return null != n && null != M[n];
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
                e && ((0, er.mv)("intro_dc"), (0, Z.u)(eL.YYv)),
                    eS
                        ? ((0, e_.Yz)() || (0, ei.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, p.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("73883"),
                                      n.e("73216"),
                                      n.e("69977"),
                                      n.e("74390"),
                                      n.e("36946"),
                                      n.e("92639"),
                                      n.e("90480"),
                                      n.e("40963"),
                                      n.e("56169"),
                                      n.e("64307"),
                                  ]).then(n.bind(n, 420222));
                                  return (t) =>
                                      (0, r.jsx)(e, { ...t, parentId: null, source: "favorites_button_onboarding" });
                              }))
                        : e && (0, z.A)({ subscriptionTier: eG.pe.TIER_2, analyticsLocations: O }),
                    eN(ew.i.TAKE_ACTION);
            },
            [eN, eS, O],
        );
    return (
        a.useEffect(() => {
            T && (eg.current = !1);
        }, [T]),
        a.useEffect(
            () => () => {
                T && !eg.current && eN(ew.i.AUTO_DISMISS, !0);
            },
            [eN, T],
        ),
        a.useEffect(() => {
            if (S) {
                let e = (0, G.o)(ey.intl.string(ey.t["4tSWQg"]), eU.Ck.FAVORITE);
                (0, x.P0)(e);
                let t = setTimeout(N, e.options?.duration ?? eU.jg.duration);
                return () => {
                    N(), clearTimeout(t);
                };
            }
        }, [S, N]),
        (0, r.jsxs)(K.c, {
            children: [
                (0, r.jsx)(Y.A, { overlay: !0, selected: eI, hovered: R, unread: ep && !b }),
                (0, r.jsx)(eP, {
                    children: (0, r.jsx)(k.Q, {
                        selected: !0,
                        upperBadge: eT,
                        lowerBadge: em,
                        children: (0, r.jsx)("div", {
                            ref: C,
                            children: (0, r.jsx)(F.j, {
                                ...g,
                                ariaLabel: ey.intl.formatToPlainString(ey.t["/uzRss"], {
                                    guildName: ey.intl.string(ey.t.wMWyci),
                                    mentions: ef,
                                }),
                                "aria-selected": eI,
                                to: { pathname: eL.BVt.CHANNEL(eL.YYv, U), state: eV },
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
                                    className: ek.w,
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
                        graphic: { src: eF.A, type: "image", aspectRatio: "16/9" },
                        title: ey.intl.string(ex.default["bu/mLv"]),
                        body: ey.intl.string(ex.default["/x2jT7"]),
                        onRequestClose: () => eN(ew.i.USER_DISMISS),
                        actions: [
                            {
                                icon: B.t,
                                text: eS ? ey.intl.string(ex.default["0lHa0Z"]) : ey.intl.string(ex.default["0nZZEk"]),
                                onClick: () => eC(!0),
                                variant: eS ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
var eH = n(633965),
    ej = n(857071),
    eW = n(851109),
    eY = n(72314),
    eK = n(543897),
    e$ = n(696451),
    ez = n(71393),
    eq = n(711014),
    eZ = n(723702),
    eX = n(757780),
    eQ = n(263715),
    eJ = n(967198),
    e0 = n(173860),
    e1 = n(383394),
    e2 = n(131677),
    e3 = n(228366);
let e6 = {};
class e4 extends E.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (e6[t] = e[t]);
            });
    }
    getState() {
        return e6;
    }
    hasViewed(e) {
        return null != e6[e];
    }
}
let e5 = new e4(e3.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        e6[t] = Date.now();
    },
});
var e7 = n(531685),
    e8 = n(583613);
let e9 = "app-download-item",
    te = "add-server-item";
function tt() {
    return !1;
}
function tn(e) {
    let t = eo.default.getMutableGuildStates();
    return (
        (e === eL.sFm.SERVER_DISCOVERY_BADGE && !e5.hasViewed(eL.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e9 && e !== te && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let ti = (0, e8.L_)((e, t, n) => ["null", ...t, ...e, te, eL.sFm.E3_SERVER_DISCOVERY_BADGE, e9]),
    tr = a.forwardRef(function (e, t) {
        let n = (0, E.yK)([eq.Ay, e2.A, eo.default], () =>
                ti(eq.Ay.getGuildFolders(), e2.A.getUnreadPrivateChannelIds(), eo.default.getStoreChangeSentinel()),
            ),
            i = (0, E.bG)([e7.A], () => e7.A.isFocused()),
            a = (0, E.bG)([e1.A], () => e1.A.getExpandedFolders());
        return (0, r.jsx)(e0.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: tt,
            textUnread: ey.intl.string(ey.t.y2b7CA),
            textMention: ey.intl.string(ey.t.y2b7CA),
            isMentioned: tn,
            animate: i,
            expandedFolders: a,
        });
    });
n(667532);
var ta = n(868285),
    ts = n(763827),
    tl = n(4798),
    to = n(778712),
    td = n(812993),
    tc = n(442433),
    tu = n(620982),
    t_ = n(571694),
    tE = n(47167),
    tA = n(598104),
    th = n(994500);
function tI(e, t) {
    return e
        .filter((e) => (0, eR.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : th.A.isBlockedOrIgnored(e.id)));
}
function tf(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : th.A.isBlockedOrIgnored(e)));
}
var tp = n(427358),
    tT = n(907459),
    tm = n(145408);
function tg(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, r.jsx)(t, { className: eD.RI, color: "currentColor" }),
                  (0, r.jsx)(eg.Ay, { users: n, max: 6 }),
              ],
          });
}
function tS(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eI.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ey.intl.string(ey.t.fpKdS1),
          })
        : (0, r.jsx)(tm.A, { muteConfig: t, className: n });
}
function tN(e) {
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
        (n = (0, E.yK)([th.A], () => th.A.getBlockedOrIgnoredIDs())),
        (i = (0, E.bG)([tp.A], () => tp.A.getUserAffinitiesMap(), [])),
        (s = (0, E.yK)(
            [j.Ay, eC.default],
            () =>
                j.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eC.default.getUser(e)),
            [t],
        )),
        (o = a.useMemo(() => tI(s, n), [s, n])),
        (d = a.useMemo(() => (0, tT.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, E.yK)(
            [X.A, eC.default],
            () =>
                tI(
                    X.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => eC.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (u = a.useMemo(() => tI(c, n), [c, n])),
        (_ = a.useMemo(() => (0, tT.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (A = a.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (h = (0, E.yK)(
            [eO.Ay],
            () =>
                tI(
                    eO.Ay.getVoiceStatesForChannel(p).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [p, n],
        )),
        (I = a.useMemo(() => tI(h, n), [h, n])),
        (f = a.useMemo(() => (0, tT.L)(I, i, "DirectMessageTooltip - voiceUsers"), [I, i])),
        {
            voiceUsers: a.useMemo(
                () => f.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [f, d, _],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        N = (0, r.jsx)(tg, { icon: ef.H, users: S }),
        C = (0, r.jsx)(tg, { icon: ep.F, users: g }),
        O = (0, r.jsx)(tg, { icon: eT.k, users: m }),
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
            R ? (0, r.jsx)(tS, { muteConfig: L, className: l()(eD.LM, { [eD.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tC(e) {
    let { channel: t } = e,
        n = (0, tE.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(eD.nM, eD.Dl),
                children: (0, r.jsx)("span", { className: l()(eD.cN, eD.NT), children: n }),
            }),
            (0, r.jsx)(tN, { channel: t }),
        ],
    });
}
function tO(e) {
    let { channel: t, children: n } = e,
        i = (0, tE.Ay)(t),
        s = a.useMemo(
            () =>
                (0, r.jsx)(eI.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: eD.A_,
                    children: (0, r.jsx)(tC, { channel: t }),
                }),
            [t],
        );
    return (0, r.jsx)(em.m, {
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
function tL(e) {
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
class ty extends a.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new tl.Controller({ scale: 0, height: 0, opacity: 0, config: tL }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !e7.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tL })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tL }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !e7.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tL }).start().then(e),
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
            t = e.type === eL.rbe.DM ? eC.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, t_.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eL.rbe.DM ? eC.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, tc.L3)(e, async () => {
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
                      n.e("91763"),
                      n.e("34552"),
                      n.e("8757"),
                      n.e("38730"),
                      n.e("71210"),
                      n.e("85968"),
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
                      n.e("47502"),
                      n.e("74610"),
                      n.e("36564"),
                      n.e("45996"),
                      n.e("792"),
                      n.e("92822"),
                      n.e("23427"),
                      n.e("29422"),
                      n.e("38056"),
                      n.e("9291"),
                      n.e("7059"),
                      n.e("8829"),
                      n.e("80740"),
                      n.e("16054"),
                      n.e("98199"),
                      n.e("17244"),
                      n.e("64464"),
                      n.e("39778"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, tc.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("91763"),
                      n.e("38730"),
                      n.e("47502"),
                      n.e("68530"),
                      n.e("80740"),
                      n.e("66378"),
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
                    to: eL.BVt.CHANNEL(eL.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || E,
                    ariaLabel:
                        null != t
                            ? [
                                  ey.intl.formatToPlainString(ey.t.hKarnZ, { name: t, mentions: i }),
                                  d ? ey.intl.string(ey.t["fk1/bX"]) : c ? ey.intl.string(ey.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: h ? void 0 : this.getChannelIcon(),
                    backgroundStyle: h ? "on-hover" : "always",
                    children: h
                        ? (0, r.jsx)(tA.A, {
                              channel: e,
                              size: to._3.SIZE_40,
                              facepileSizeOverride: to._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, r.jsx)(tl.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, hovered: !A && E, selected: !A && n, unread: !A && u }),
                    (0, r.jsx)(tO, {
                        channel: e,
                        children: (0, r.jsx)(k.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, $.wN)(i, void 0, !0) : null,
                            upperBadge: (0, $.oi)({ audio: a, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, td.o6)(i) },
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
        i = (0, tE.Ay)(e.channel),
        a = (0, u.Vd)(n, 2),
        s = (0, E.bG)([ts.A], () => ts.A.getChannelId(), []),
        l = (0, E.bG)([D.A], () => D.A.getMode(n), [n]),
        o = (0, E.bG)([X.A], () => X.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, E.bG)([eO.Ay], () => eO.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, E.bG)([J.Ay], () => J.Ay.getChannelId(), []),
        _ = (0, E.bG)([ec.Ay], () => ec.Ay.getMentionCount(n), [n]),
        A = s === n,
        { isIncomingCall: h, isOngoingCall: I } = (0, tu.A)(n),
        p = !1,
        T = !1;
    (A || d) && ((p = l === eL._Of.VOICE), (T = l === eL._Of.VIDEO));
    let m = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(ty, {
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
function tv() {
    (0, E.bG)([Q.A], () => Q.A.getPrivateChannelsVersion());
    let e = Q.A.getMutablePrivateChannels(),
        t = (0, E.yK)([e2.A], () => e2.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, E.cf)([ts.A], () => ({
            selectedVoiceGuildId: ts.A.getGuildId(),
            selectedVoiceChannelId: ts.A.getChannelId(),
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
            "aria-label": ey.intl.string(ey.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, r.jsx)(ta.F, { component: a.Fragment, children: s }),
        })
    );
}
var tb = n(32880),
    tM = n(939249),
    tP = n(589340);
function tU(e) {
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
        E = i ? t : (0, r.jsx)("div", { className: l()(tP.p, { [tP.w]: u }), children: t });
    return (0, r.jsx)(em.m, {
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
var tw = n(633435);
let tG = a.forwardRef(function (e, t) {
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
                (0, r.jsx)(tU, {
                    text: c,
                    selected: d,
                    children: (0, r.jsx)(k.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: E,
                        lowerBadgeSize: A,
                        children: (0, r.jsx)(tM.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                T?.(), C(!0);
                            },
                            onMouseLeave: () => {
                                m?.(), C(!1);
                            },
                            onMouseDown: g,
                            className: l()(tw.oZ, I, { [tw.wH]: d || N }),
                            onClick: i,
                            "aria-label": O,
                            "aria-selected": d,
                            onContextMenu: s,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != o && (0, r.jsx)(o, { className: tw.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                p,
            ],
        });
    }),
    tx = "DOWNLOAD_APPS";
function tk() {
    let e = (0, p.useModalsStore)((e) => (0, p.hasModalOpenSelector)(e, tx));
    return (0, r.jsx)(tG, {
        id: "app-download-button",
        onClick: () => {
            (0, p.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tx },
            );
        },
        selected: e,
        tooltip: ey.intl.string(ey.t.Z7jwrJ),
        icon: tb.s,
    });
}
var tF = n(245604),
    tV = n(272613),
    tB = n(398884),
    tH = n(772366),
    tj = n(728321),
    tW = n(260509),
    tY = n(284009),
    tK = n.n(tY),
    t$ = n(295868),
    tz = n(66834),
    tq = n(174459),
    tZ = n(896970);
function tX(e) {
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
function tQ(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        tK()(t.type !== eQ.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eQ.PJ.FOLDER || t.type !== eQ.PJ.FOLDER) &&
                (e.type !== eQ.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                i && t.type !== eQ.PJ.FOLDER && tq.default.track(eL.HAw.GUILD_FOLDER_CREATED),
                    tz.A.moveById(r, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tJ(e) {
    let { name: t, targetNode: n, combine: i, below: s } = e,
        l = a.useMemo(() => tQ([eQ.PJ.GUILD, eQ.PJ.FOLDER], n, s, i), [n, s, i]),
        [{ canDrop: o, isOver: d }, c] = (0, t$.H)(l),
        u = tX([
            [o, tZ.OP],
            [d, tZ.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (u.current = e), c(e);
        },
        "data-dnd-name": ey.intl.formatToPlainString(ey.t["A5aDw+"], { itemName: t }),
        className: tZ.aC,
    });
}
function t0(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, d] = (0, t$.H)(() => tQ([eQ.PJ.GUILD], n, !0, !0));
    a.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = tX([
        [s, tZ.OP],
        [o, tZ.NQ],
    ]);
    return (0, r.jsx)(tU, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (c.current = e), d(e);
            },
            "data-dnd-name": ey.intl.formatToPlainString(ey.t.qiQ0QI, { itemName: t }),
            className: l()(tZ.dw, {}),
        }),
    });
}
let t1 = a.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: a = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: tZ.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(tJ, { name: t, targetNode: n, below: a }),
            l ? (0, r.jsx)(t0, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function t2(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: a }, s] = (0, t$.H)(() => tQ([eQ.PJ.GUILD], n, !0, !0)),
        l = tX([[a, tZ.a7]]),
        o = tX([
            [a, tZ.NQ],
            [i, tZ.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: l,
        className: tZ.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: tZ.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (o.current = e), s(e);
                },
                "aria-label": `At end of ${t}`,
                className: tZ.aC,
            }),
        }),
    });
}
function t3(e) {
    let { children: t } = e,
        [, n] = (0, t$.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var t6 = n(819638),
    t4 = n(441174);
let t5 = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function t7(e) {
    (0, tc.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function t8(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, E.yK)([ez.A], () => ez.A.getGuildsArray()),
        s = (0, E.bG)([eC.default], () => eC.default.getCurrentUser()),
        l = a.useMemo(() => i.some((e) => (0, tW.bM)(e, s)), [i, s]),
        o = (0, p.useModalsStore)((e) => (0, p.hasModalOpenSelector)(e, t6.fc)),
        { analyticsLocations: d } = (0, y.Ay)();
    return (0, r.jsx)("div", {
        className: t4.Uq,
        children: (0, r.jsxs)(tj.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: t5,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tG, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: function () {
                        (0, tB.Sn)()
                            ? (0, tH.A)({
                                  analyticsSource: { page: eL.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eL.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eL.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : tV.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: t7,
                    tooltip: ey.intl.string(ey.t.l5WIbf),
                    icon: tF.U,
                }),
                null != n &&
                    (0, r.jsx)(t1, { name: ey.intl.string(ey.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var t9 = n(565787),
    ne = n(791606),
    nt = n(486020),
    nn = n(184291);
function ni(e) {
    let [t, i] = a.useState(!1),
        s = (0, u.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(K.c, {
        children: (0, r.jsx)(tU, {
            text: e.name,
            children: (0, r.jsx)(k.Q, {
                className: nn.o,
                selected: t,
                lowerBadge: (0, r.jsx)(td.fk, { icon: (0, t9.k)(ne.A), disableColor: !0, className: nn._ }),
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
                            ? nt.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var nr = n(696292),
    na = n(836480),
    ns = n(533129),
    nl = n(726845),
    no = n(837057),
    nd = n(310419),
    nc = n(488995),
    nu = n(324580),
    n_ = n(190107);
let nE = a.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: s, className: l } = e,
        o = a.useCallback(() => {
            (0, ns.WL)({ source: nc.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== s ? nc.GlobalDiscoveryTab.QUESTS : nl.A.getField("selectedTab");
            switch (e) {
                case nc.GlobalDiscoveryTab.QUESTS:
                    return (0, no.transitionToGlobalDiscovery)({
                        tab: nc.GlobalDiscoveryTab.QUESTS,
                        location: n_.rE.DISCOVERY_COMPASS,
                        questContent: nr.u.DISCOVERY_COMPASS,
                        questId: s,
                    });
                case nc.GlobalDiscoveryTab.SERVERS:
                    return (0, no.transitionToGlobalDiscovery)({
                        tab: nc.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nu.J8.GUILDS_BAR,
                    });
                case nc.GlobalDiscoveryTab.APPS:
                    return (0, no.transitionToGlobalDiscovery)({
                        tab: nc.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nd.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, no.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [s]);
    return (0, r.jsx)(tG, {
        id: "guild-discover-button",
        ref: t,
        className: l,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: ey.intl.string(ey.t["4nEZLk"]),
        icon: na.Q,
    });
});
var nA = n(506774),
    nh = n(509963),
    nI = n(111159),
    nf = n(793943),
    np = n(428262),
    nT = n(350972),
    nm = n(677056),
    ng = n(526162),
    nS = n(174197);
function nN() {
    let [e, t] = (0, E.yK)([eC.default, ng.A], () => [
            ng.A.getCurrentDesktopIcon(),
            np.Ay.isPremium(eC.default.getCurrentUser()),
        ]),
        n = (0, nf.fy)().activePanel === nf.HP.APP_ICON,
        i = (0, nS.gG)(e),
        a = i.id !== nT.LW.DEFAULT && (t || n),
        s = (0, r.jsx)(nI.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && a ? (0, r.jsx)(nm.A, { id: i.id, size: nS.N8.SIZE_48 }) : s;
}
var nC = n(531260),
    nO = n(411976),
    nR = n(912309),
    nL = n(400492),
    ny = n(354670),
    nD = n(619921),
    nv = n(340829),
    nb = n(966846),
    nM = n(674378),
    nP = n(394953),
    nU = n(235079),
    nw = n(143170);
let nG = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nx(e) {
    let { selected: t, user: n, badge: i, link: s, showProgressBadge: l } = e,
        [o, d] = a.useState(!1),
        [c, _] = a.useState(!1),
        [E, A] = a.useState(null),
        [h, I] = a.useState(0),
        f = (0, u.Vd)("home"),
        p = (0, nf.fy)().activePanel === nf.HP.APP_ICON;
    function T() {
        A(null), I(0), clearTimeout(E);
    }
    if (null == n) return null;
    let m = ey.intl.string(ey.t.YUU0RF);
    c && (m = nA.w.get(eL.wqg) ? ey.intl.string(ey.t["nkq1l+"]) : ey.intl.string(ey.t.Be8Q5E));
    let g = null;
    !t && l && (g = (0, r.jsx)(nh.A, { className: nw.Cp, determineOwnVisibility: !1 }));
    let S = t || o || p,
        N = (0, r.jsx)(k.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, $.wN)(i) : null,
            upperBadge: g,
            lowerBadgeSize: { width: (0, td.o6)(i) },
            children: (0, r.jsx)(F.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: function () {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), A(setTimeout(T, 500)), I(h + 1), 15 === h)) {
                        T();
                        let e = !nA.w.get(eL.wqg);
                        nA.w.set(eL.wqg, e),
                            e && nA.w.set(nU.L, !0),
                            e ? (0, nL.Ak)("discodo") : (0, nL.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: ey.intl.string(ey.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...f,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eL.liQ.GUILD_CHANNEL,
                            section: eL.JJy.NAVIGATION,
                            object: eL.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(nN, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nw.Uq,
        children: (0, r.jsx)(tj.A, {
            inlineSpecs: nG,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, selected: t, hovered: o }),
                    (0, r.jsx)(tU, { hideOnClick: !0, text: m, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nk() {
    let e = (function () {
            let e = (0, q.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eL.BVt.GUILD_DISCOVERY) || t.startsWith(eL.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eL.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nP.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, E.bG)([nb.A, nv.A], () => {
            let e = (0, nh.v)(nb.A.activeItems, nv.A),
                { total: t, progress: n } = nM.zY(e),
                i = nM.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nR.kX)(),
        i = Object.keys(eG.TP),
        a = (0, nC.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, E.cf)([ny.A], () => ({
            unviewedTrialCount: ny.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: ny.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = a.fractionalState === eG.xc.NONE ? s + l : 0,
        d = (0, E.bG)([eC.default], () => eC.default.getCurrentUser()),
        u = (0, nO.W)(),
        _ = n + o + u,
        A = _ === o && o > 0 && n + u === 0,
        h = nD.A.getHomeLink();
    return (
        A && (h = eL.BVt.APPLICATION_STORE),
        (0, r.jsx)(nx, {
            selected: e,
            user: d,
            selectedChannelId: J.Ay.getChannelId(eL.ME),
            badge: _,
            link: h,
            showProgressBadge: t,
        })
    );
}
var nF = n(550281);
function nV(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(K.c, { children: (0, r.jsx)("div", { className: l()(nF.t, { [nF.I]: t }) }) });
}
var nB = n(349288),
    nH = n(695366),
    nj = n(919638),
    nW = n(818348),
    nY = n(135492);
function nK() {
    let e = (0, E.bG)([nj.A, ez.A], () => nj.A.unavailableGuilds.filter((e) => null == ez.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(K.c, {
              children: (0, r.jsx)(tU, {
                  text: ey.intl.format(ey.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nB.Anchor, {
                      href: nW.qF.STATUS,
                      target: "_blank",
                      className: nY.h,
                      "aria-label": ey.intl.formatToPlainString(ey.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nH.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var n$ = n(312742),
    nz = n(317097),
    nq = n(319060),
    nZ = n(866323),
    nX = n(817281),
    nQ = n(534409),
    nJ = n(240248),
    n0 = n(678708),
    n1 = n(187322),
    n2 = n(140735),
    n3 = n(548118),
    n6 = n(195451);
function n4(e) {
    let { guildId: t, animate: n } = e,
        i = (0, E.bG)([ez.A], () => ez.A.getGuild(t), [t]),
        a = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: l()(n6.VL, n6.zU), children: (0, r.jsx)(nH.E, { color: "currentColor" }) })
        : (0, r.jsx)(n3.Ay, {
              guild: i,
              animate: n,
              size: n3.Ay.Sizes.MINI,
              iconSize: a,
              lossless: !0,
              className: n6.VL,
              tabIndex: -1,
          });
}
function n5(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: a } = t,
        s = n && i,
        o = (0, r.jsx)("div", {
            className: n6.hJ,
            children: (0, r.jsx)("div", {
                className: n6.Eh,
                children: (0, r.jsx)(n0.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, r.jsx)("div", {
            className: n6.qJ,
            children: (0, r.jsx)("div", {
                className: n6.jg,
                children: a.slice(0, 4).map((e) => (0, r.jsx)(n4, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()({ [n6.NG]: s, [n6.yd]: !s }),
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
        O = n || null == s ? null : (0, $.oi)(s),
        R =
            !n && l > 0
                ? (0, $.wN)(
                      l,
                      o ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(n1.vN, {
        children: (0, r.jsxs)(tM.D, {
            className: n6.H3,
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
                (0, r.jsx)(n2.A, {
                    children: ey.intl.formatToPlainString(ey.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, r.jsx)(k.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: O,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, td.o6)(l) },
                    children: (0, r.jsx)("div", {
                        className: n6.vA,
                        children:
                            null != u
                                ? (0, r.jsx)("div", { className: n6.hJ, children: u })
                                : (0, r.jsx)(n5, { folderNode: t, hovered: g, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var n8 = n(573435),
    n9 = n(32294);
function ie(e) {
    let { className: t, isFolder: n } = e,
        i = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(n8.Ay, {
        mask: n8.Ay.Masks.SQUIRCLE,
        className: l()(t, n9.OL, { [n9.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: n9.ZU }),
    });
}
var it = n(114329),
    ii = n(167546);
let ir = (0, nJ.xI)(nq.A.FOLDER_ITEM_ANIMATION_DURATION),
    ia = (0, tl.animated)(T.B),
    is = a.memo(function (e) {
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
            F = (0, nQ.qK)("FolderItem");
        a.useEffect(() => {
            m && w(!1);
        }, [m]);
        let [{ dragging: V }, B] = (0, n$.i)({
                type: eQ.PJ.FOLDER,
                item: () => (S?.(), { type: eQ.PJ.FOLDER, nodeId: o.id }),
                end() {
                    N?.(), (0, nX.um)(eq.Ay.getCompatibleGuildFolders());
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
            W = null != M && "" !== M ? M : null != p && "" !== p ? p : ey.intl.string(ey.t.xV9hVh),
            $ = (0, u.Vd)(`${b}`),
            z = `folder-items-${b}`,
            q =
                ((t = P.length),
                (n = (0, g.r)(f.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, g.r)(f.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (s = (0, g.r)(f.A.space.SPACE_XS))) - s + (s - (n - i) / 2) + (0, g.r)(f.A.space.SPACE_4)),
            Z = (0, nZ.p)(!V && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: ir },
            }),
            X = a.useCallback((e) => d?.(b, e), [d, b]),
            Q = (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, disabled: V || _, hovered: U, selected: c, unread: I }),
                    (0, r.jsx)(tU, {
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
                            className: l()(n6.MJ, { [n6.L0]: "icon" === L || F, [ii.oR]: !V && G && !_ }),
                            "data-dnd-name": W,
                            children: V
                                ? (0, r.jsx)(ie, { isFolder: !0 })
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
                    T ? (0, r.jsx)(t1, { name: W, targetNode: o, onDragOverChanged: H }) : null,
                ],
            }),
            J = null != o.color ? o.color : it.DO,
            ee = J === it.DO ? void 0 : (0, nz.Hl)(J);
        return (0, r.jsxs)("div", {
            ref: X,
            className: l()(n6.qc, { [n6.Av]: _, [n6.Lg]: k }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": G,
            children: [
                !V && _ && (0, r.jsx)("span", { className: n6.GO }),
                Q,
                Z((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            ia,
                            {
                                id: z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: n6.TN,
                                style: { height: e.height.to((e) => e * q) },
                                "aria-label": o.name,
                                children: P.map((t, n) => R(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                T && _ ? (0, r.jsx)(t2, { name: W, targetNode: o }) : null,
            ],
        });
    });
var il = n(354583);
let io = a.memo(function (e) {
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
        C = (0, E.bG)([e1.A], () => e1.A.isFolderExpanded(p)),
        O = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = ez.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eR.Vq),
                n = 2 * eL.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(I),
        R =
            ((t = (0, E.bG)([ts.A], () => ts.A.getGuildId())),
            (i = I.children.map((e) => e.id)),
            (s = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, E.bG)([ts.A], () => ts.A.getChannelId())),
            (_ = null != (u = (0, il.A)()?.guild_id) && i.includes(u)),
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
            tz.A.toggleGuildFolderExpand(p);
        }, [p]),
        b = a.useCallback(
            (e) => {
                (0, tc.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: p, folderName: T, folderColor: m, unread: D || L > 0 });
                });
            },
            [p, T, m, D, L],
        );
    return (0, r.jsx)(is, {
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
var id = n(113494),
    ic = n(821124),
    iu = n(212455);
function i_(e) {
    let t = e?.features.has(eL.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, E.bG)([iu.A, eC.default, e$.Ay], () => {
            if (null == e) return;
            let t = iu.A.getRequest(e.id),
                n = eC.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = e$.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, ic.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var iE = n(347951),
    iA = n(478437),
    ih = n(811024),
    iI = n(508654),
    ip = n(233993),
    iT = n(446600),
    im = n(95701),
    ig = n(280450);
let iS = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-06-dont-badge-muted-vcs",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function iN(e) {
    return iS.useConfig({ location: e }).enabled;
}
function iC(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ed.A;
    return null != e && e.type !== iA.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eL.hVb.VIEW_CHANNEL, e);
}
function iO(e) {
    let t = (0, E.bG)([eu.Ay], () => eu.Ay.isMuted(e)),
        n = iN("useGuildMediaState"),
        i = (0, iI.BP)(e),
        r = (0, E.yK)([j.Ay, th.A], () =>
            j.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = th.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : th.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        a = (0, W.H)(r[0]?.location),
        s = (0, ih.Gp)(a),
        {
            guildHasVoice: l,
            guildHasVideo: o,
            selectedVoiceChannelHasVideo: c,
        } = (0, E.cf)([J.Ay, ee.A, ez.A, ed.A, Q.A, eu.Ay], () => {
            var i;
            let r = J.Ay.getVoiceChannelId(),
                a = ez.A.getGuild(e)?.afkChannelId,
                s = ee.A.getUsersWithVideo(e),
                l =
                    ((i = ee.A.getVoiceStates(e)),
                    d()(i)
                        .filter((e) => !th.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let t in l) {
                        let i = l[t].channelId;
                        if (
                            null != i &&
                            iC(Q.A.getBasicChannel(i), a ?? void 0, ed.A) &&
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
                            iC(Q.A.getBasicChannel(i), a ?? void 0, ed.A) &&
                            (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != r && ee.A.hasVideo(r),
            };
        }, [e, t, n]),
        u = ig.default.getId();
    return (0, E.cf)([J.Ay, Q.A, j.Ay, iT.A, X.A, ed.A, eu.Ay], () => {
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
        let p = et.default.keys(iT.A.getStageInstancesByGuild(e)).some((e) => {
                let t = Q.A.getChannel(e);
                return null != t && ed.A.can(ip.Gk, t);
            }),
            T = d && (Q.A.getChannel(a)?.isGuildStageVoice() ?? !1),
            m = !!d && null != X.A.getActiveStreamForUser(u, e),
            g = X.A.getAllApplicationStreams()
                .filter((e) => !th.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e && (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(e, t.channelId))),
            S = d && c,
            N = (() => {
                if (s) return r.length > 0;
                for (let e of r) {
                    let t = Q.A.getChannel((0, W.H)(e.location));
                    if (null != t && (0, im.gV)(t.type)) return !0;
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
    iL = n(702841),
    iy = n(658128),
    iD = n(976860),
    iv = n(676279);
function ib(e) {
    let { guild: t, show: n, active: i, onAnimationStart: a, onAnimationRest: s } = e,
        o = {},
        d = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, g.r)(f.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, g.r)(f.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, nZ.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: a, onRest: s });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: n6.qc,
                        children: (0, r.jsx)("div", {
                            className: l()(n6.MJ, n6.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(tl.animated.div, {
                                className: n6.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: n6.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: n6.jg,
                                        children: (0, r.jsx)(n3.Ay, {
                                            guild: t,
                                            size: n3.Ay.Sizes.SMOL,
                                            className: n6.VL,
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
var iM = n(454938),
    iP = n(714991),
    iU = n(107773),
    iw = n(513461),
    iG = n(164956),
    ix = n(624265),
    ik = n(970278),
    iF = n(808728);
function iV(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eD.nM,
              children: [
                  (0, r.jsx)(e, { className: eD.RI, color: "currentColor" }),
                  (0, r.jsx)(eg.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iB(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eI.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ey.intl.string(ey.t.fpKdS1),
          })
        : (0, r.jsx)(tm.A, { muteConfig: t, className: n });
}
function iH(e) {
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
        (n = iN("useGuildTooltipActivity")),
        (i = (0, E.yK)(
            [iF.Ay, ik.A, eu.Ay],
            () => [
                ...iF.Ay.getChannels(t)
                    [iF.vM].filter((e) => {
                        let { channel: i } = e;
                        return i.type === eL.rbe.GUILD_VOICE && (!n || !eu.Ay.isGuildOrCategoryOrChannelMuted(t, i.id));
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(ik.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t, n],
        )),
        (s = (0, ix.Ay)(t)),
        (o = a.useMemo(() => s.map((e) => e.id), [s])),
        (c = (0, E.bG)([eO.Ay], () => eO.Ay.getVoiceStates(t), [t])),
        (u = (0, E.yK)([th.A], () => th.A.getBlockedOrIgnoredIDs())),
        (_ = d().flatMap(i, (e) =>
            e === L.afkChannelId
                ? []
                : tI(
                      (c[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      u,
                  ),
        )),
        (A = (0, E.yK)([eS.A], () =>
            d().flatMap(o, (e) =>
                e === L.afkChannelId
                    ? []
                    : tI(
                          eS.A.getMutableParticipants(e, eN.ip.SPEAKER)
                              .filter((e) => e.type === eN.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          u,
                      ),
            ),
        )),
        (h = (0, E.bG)([eS.A], () => {
            let e = 0;
            for (let t of o) e += eS.A.getParticipantCount(t, eN.ip.AUDIENCE);
            return e;
        })),
        (I = (0, E.yK)(
            [X.A, eu.Ay],
            () =>
                tf(
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
                tf(
                    j.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    u,
                ),
            [t, u],
        )),
        (p = (0, E.yK)([eC.default], () => tI(f.map((e) => eC.default.getUser(e))), [f])),
        (T = (0, E.yK)([eC.default], () => I.map((e) => eC.default.getUser(e)), [I])),
        (g = tI((m = _.filter((e) => !I.includes(e.id) && !f.includes(e.id))))),
        (S = T.filter((e) => null != e && !f.includes(e.id))),
        (N = (0, E.bG)([tp.A], () => tp.A.getUserAffinitiesMap(), [])),
        (C = a.useMemo(() => (0, tT.L)(g, N, "GuildTooltip - nonBlockedUsers"), [g, N])),
        (O = a.useMemo(() => (0, tT.L)(A, N, "GuildTooltip - stageSpeakers"), [A, N])),
        (R = a.useMemo(() => (0, tT.L)(S, N, "GuildTooltip - streamUsers"), [S, N])),
        {
            voiceUsersToShow: C,
            stageSpeakers: O,
            numStageListeners: h,
            streamUsersToShow: R,
            embeddedActivitiesUsers: a.useMemo(() => (0, tT.L)(p, N, "GuildTooltip - embeddedActivitiesUsers"), [p, N]),
            hasActivity: A.length > 0 || m.length > 0 || S.length > 0 || p.length > 0,
        }),
        U = iV(ef.H, D, y),
        w =
            0 === v.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eD.nM,
                      children: [
                          (0, r.jsx)(eA.q, { size: "lg", color: "currentColor", className: eD.RI }),
                          (0, r.jsx)(eg.Ay, { guildId: y, users: v, max: 3 }),
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
        G = iV(ep.F, M, y),
        x = iV(eT.k, P, y),
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
            k ? (0, r.jsx)(iB, { muteConfig: F, className: l()(eD.LM, { [eD.Sx]: null != U || null != G }) }) : null,
        ],
    });
}
function ij(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(eI.E, {
        className: eD.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case iw.B5.SUBMITTED:
                    return ey.intl.string(ey.t["9KFC98"]);
                case iw.B5.REJECTED:
                    return ey.intl.string(ey.t["TQY/Rd"]);
                case iw.B5.APPROVED:
                    return ey.intl.string(ey.t.WXHcq5);
                default:
                    return ey.intl.string(ey.t.fjHFC8);
            }
        })(t),
    });
}
function iW(e) {
    let { guild: t } = e,
        n = (0, iM.A)(t),
        i = i_(t),
        a = null != i ? (0, r.jsx)(ij, { guildJoinRequestStatus: i }) : null,
        s = (0, r.jsx)(iH, { guild: t }),
        o = (0, E.bG)([iG.A], () => iG.A.isViewingRoles(t.id)),
        d = (0, iE.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l()(eD.nM, eD.Dl),
                children: [
                    n
                        ? (0, r.jsx)(iU.A, { disableBoostClick: !0, guild: t, className: eD.WX })
                        : (0, r.jsx)(iP.A, { guild: t, size: 20, className: eD.aL }),
                    (0, r.jsx)("span", { className: l()(eD.cN, eD.NT), children: t.name }),
                ],
            }),
            d
                ? (0, r.jsx)(eI.E, {
                      className: eD.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: ey.intl.string(ey.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, r.jsx)(eI.E, {
                      className: eD.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: ey.intl.string(ey.t["5LwN89"]),
                  })
                : (a ?? s),
        ],
    });
}
function iY(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: s } = e,
        l = a.useMemo(
            () =>
                n
                    ? null
                    : (0, r.jsx)(eI.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: eD.A_,
                          children: (0, r.jsx)(iW, { guild: t }),
                      }),
            [n, t],
        );
    return (0, r.jsx)(em.m, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: s,
    });
}
let iK = { analyticsSource: { page: eL.liQ.GUILD_CHANNEL, section: eL.JJy.CHANNEL_LIST, object: eL.ZSU.CHANNEL } };
function i$(e, t) {
    (0, tc.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("94614"),
            n.e("38108"),
            n.e("31668"),
            n.e("35285"),
            n.e("53969"),
            n.e("40351"),
            n.e("6389"),
            n.e("48180"),
            n.e("94629"),
            n.e("67792"),
            n.e("73153"),
            n.e("14767"),
            n.e("15214"),
            n.e("76684"),
            n.e("85631"),
            n.e("21532"),
            n.e("75030"),
            n.e("47899"),
            n.e("8248"),
            n.e("58388"),
            n.e("37175"),
            n.e("1248"),
            n.e("24092"),
            n.e("33004"),
            n.e("3557"),
            n.e("63229"),
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
            n.e("63576"),
            n.e("50693"),
            n.e("6487"),
            n.e("69794"),
            n.e("20661"),
            n.e("46809"),
            n.e("18315"),
            n.e("17776"),
            n.e("78969"),
            n.e("17569"),
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
            n.e("77873"),
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
            n.e("75459"),
            n.e("43300"),
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
            n.e("63232"),
            n.e("11689"),
            n.e("14520"),
            n.e("4142"),
            n.e("19059"),
            n.e("92576"),
            n.e("4349"),
            n.e("73763"),
            n.e("98833"),
            n.e("47352"),
            n.e("38280"),
            n.e("12345"),
            n.e("23241"),
            n.e("9172"),
            n.e("65420"),
            n.e("3056"),
            n.e("84710"),
            n.e("80263"),
            n.e("97106"),
            n.e("78015"),
            n.e("22570"),
            n.e("99998"),
            n.e("80759"),
            n.e("33587"),
            n.e("88391"),
            n.e("988"),
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
            n.e("39653"),
            n.e("39013"),
            n.e("99265"),
            n.e("40804"),
            n.e("45827"),
            n.e("64477"),
            n.e("2490"),
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
            n.e("2861"),
            n.e("63933"),
            n.e("42083"),
            n.e("20182"),
            n.e("47426"),
            n.e("202"),
            n.e("49273"),
            n.e("83647"),
            n.e("87085"),
            n.e("72118"),
            n.e("65831"),
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
            n.e("21398"),
            n.e("50482"),
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
            n.e("40851"),
            n.e("7167"),
            n.e("84569"),
            n.e("61060"),
            n.e("10471"),
            n.e("40135"),
            n.e("60235"),
            n.e("77333"),
            n.e("6338"),
            n.e("47834"),
            n.e("18573"),
            n.e("97595"),
            n.e("68708"),
            n.e("44057"),
            n.e("55112"),
            n.e("28504"),
            n.e("31988"),
            n.e("62156"),
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
            n.e("81987"),
            n.e("58038"),
            n.e("71202"),
            n.e("62531"),
            n.e("81813"),
            n.e("6174"),
            n.e("93103"),
            n.e("28367"),
            n.e("81647"),
            n.e("91763"),
            n.e("11310"),
            n.e("7170"),
            n.e("76602"),
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
            n.e("71210"),
            n.e("92583"),
            n.e("43437"),
            n.e("21957"),
            n.e("66495"),
            n.e("98329"),
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
            n.e("91671"),
            n.e("49653"),
            n.e("47626"),
            n.e("23354"),
            n.e("88070"),
            n.e("82644"),
            n.e("3589"),
            n.e("24689"),
            n.e("53984"),
            n.e("43780"),
            n.e("20590"),
            n.e("4848"),
            n.e("31267"),
            n.e("80830"),
            n.e("79745"),
            n.e("80854"),
            n.e("35395"),
            n.e("74630"),
            n.e("45413"),
            n.e("46844"),
            n.e("39075"),
            n.e("63235"),
            n.e("86672"),
            n.e("48948"),
            n.e("94427"),
            n.e("63244"),
            n.e("32756"),
            n.e("64850"),
            n.e("76413"),
            n.e("70104"),
            n.e("68214"),
            n.e("2564"),
            n.e("71477"),
            n.e("17563"),
            n.e("19558"),
            n.e("58946"),
            n.e("14285"),
            n.e("48330"),
            n.e("91450"),
            n.e("95752"),
            n.e("3332"),
            n.e("8362"),
            n.e("41678"),
            n.e("72401"),
            n.e("52617"),
            n.e("2698"),
            n.e("4744"),
            n.e("36227"),
            n.e("37021"),
            n.e("82820"),
            n.e("18465"),
            n.e("71430"),
            n.e("501"),
            n.e("86243"),
            n.e("85794"),
            n.e("67837"),
            n.e("73384"),
            n.e("82783"),
            n.e("32209"),
            n.e("5557"),
            n.e("93438"),
            n.e("9371"),
            n.e("45437"),
            n.e("74610"),
            n.e("39171"),
            n.e("87478"),
            n.e("83952"),
            n.e("44780"),
            n.e("95340"),
            n.e("89916"),
            n.e("60773"),
            n.e("66948"),
            n.e("9004"),
            n.e("59957"),
            n.e("8018"),
            n.e("65927"),
            n.e("49145"),
            n.e("68763"),
            n.e("18113"),
            n.e("58273"),
            n.e("6949"),
            n.e("20930"),
            n.e("79548"),
            n.e("99976"),
            n.e("26001"),
            n.e("30997"),
            n.e("3930"),
            n.e("29666"),
            n.e("14591"),
            n.e("52111"),
            n.e("3663"),
            n.e("19454"),
            n.e("15109"),
            n.e("94607"),
            n.e("81754"),
            n.e("8536"),
            n.e("28136"),
            n.e("57458"),
            n.e("38601"),
            n.e("1243"),
            n.e("18706"),
            n.e("872"),
            n.e("59797"),
            n.e("93336"),
            n.e("15920"),
            n.e("68530"),
            n.e("36894"),
            n.e("16084"),
            n.e("27659"),
            n.e("75859"),
            n.e("66580"),
            n.e("43116"),
            n.e("79888"),
            n.e("78046"),
            n.e("83230"),
            n.e("82486"),
            n.e("73669"),
            n.e("36624"),
            n.e("10943"),
            n.e("7775"),
            n.e("20402"),
            n.e("28235"),
            n.e("21778"),
            n.e("22547"),
            n.e("61058"),
            n.e("66147"),
            n.e("50342"),
            n.e("33097"),
            n.e("80098"),
            n.e("3710"),
            n.e("45830"),
            n.e("10262"),
            n.e("41786"),
            n.e("95602"),
            n.e("46313"),
            n.e("34409"),
            n.e("53683"),
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
            n.e("89541"),
            n.e("52823"),
            n.e("56967"),
            n.e("31203"),
            n.e("66913"),
            n.e("71719"),
            n.e("19690"),
            n.e("93767"),
            n.e("31488"),
            n.e("13848"),
            n.e("39214"),
            n.e("88307"),
            n.e("14878"),
            n.e("76376"),
            n.e("26508"),
            n.e("61347"),
            n.e("91643"),
            n.e("85311"),
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
            n.e("52694"),
            n.e("57683"),
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
let iz = a.memo(function (e) {
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
            contextMenu: m = i$,
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
    let P = e.lowerBadgeSize ?? { width: (0, td.o6)(p) },
        [{ dragging: U }, w] = (0, n$.i)({
            type: eQ.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                s?.(), (0, nX.um)(eq.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        G = (0, u.Vd)(D ?? eL.dJq, null != v ? 2 : 1),
        [x, V] = a.useState(!1),
        B = !N && x,
        [j, W] = a.useState(!1),
        [z, q] = a.useState(!1),
        [X] = a.useState(() => new I.J_(70, () => q(!0))),
        Q = (0, iv.nr)() && !iR.Fr;
    a.useEffect(() => () => X.cancel(), [X]);
    let J = a.useCallback(() => {
            null != o ? (0, iD.pX)(o, { state: iK }) : (0, Z.u)(D, { state: iK });
        }, [D, o]),
        ee = a.useCallback(() => {
            if (null != o || null == d || h || !C) return;
            let e = (0, iy.W)(d.id);
            null != e && H.A.preload(d.id, e);
        }, [o, d, h, C]),
        et = (0, iL.bG)([e$.Ay], () => e$.Ay.isCurrentUserGuest(D)),
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
            ? (ed = ey.intl.formatToPlainString(ey.t["/uzRss"], { guildName: d.name, mentions: p }))
            : E && (ed = ey.intl.formatToPlainString(ey.t.lzqe42, { guildName: d.name })),
        null != A)
    ) {
        let e = [];
        A.activeEvent && e.push(ey.intl.string(ey.t.dHvJ2p)),
            A.liveStage && e.push(ey.intl.string(ey.t.OO7ndG)),
            A.screenshare && e.push(ey.intl.string(ey.t.wsHMZ7)),
            A.video && e.push(ey.intl.string(ey.t.BrLCS0)),
            A.audio && e.push(ey.intl.string(ey.t.jPBhKy)),
            A.activity && e.push(ey.intl.string(ey.t.Y3Gii5)),
            e.length > 0 && (ed = `${ed}, ${e.join(" ")}`);
    }
    let ec = (0, r.jsx)(ib, {
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
                  icon: (0, tW.Iv)(d, 2 * eo, B && c, !0),
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
                          icon: (0, tW.Iv)(d, 2 * eo, B && c, !0),
                          selected: _ || B,
                          ...G,
                          "aria-setsize": L,
                          "aria-posinset": y,
                          "aria-selected": _,
                      }),
                  }),
              }),
        e_ = z || j ? ec : eu,
        eE = (0, r.jsx)(t3, { children: (0, r.jsx)(ie, {}) }),
        eA = Q
            ? (0, r.jsx)(tl.animated.div, {
                  ref: S
                      ? (e) => {
                            w(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": z,
                  className: l()(ii.rN, { [ii.p9]: N, [ii.oR]: z, [ii.wH]: z || _ }),
                  children: (0, r.jsx)(k.Q, {
                      selected: !0,
                      upperBadge: b,
                      lowerBadge: M,
                      lowerBadgeSize: P,
                      children: e_,
                  }),
              })
            : (0, r.jsx)(tl.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: l()(ii.rN, { [ii.p9]: N, [ii.oR]: z, [ii.wH]: z || _ }),
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
            (0, r.jsx)(iY, { guild: d, disabled: N, isDragging: U, children: U ? eE : eA }),
            S ? (0, r.jsx)(t1, { name: d.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iq = n(342216);
let iZ = a.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        s = (0, E.bG)([ez.A], () => ez.A.getGuild(i)),
        l = i_(s),
        o = (0, E.bG)([e7.A], () => e7.A.isFocused()),
        d = (0, E.bG)([nj.A], () => nj.A.isUnavailable(i)),
        c = (0, q.A)((e) => e.guildId),
        u = iO(i),
        {
            badge: _,
            unread: A,
            isMentionLowImportance: h,
        } = (0, E.cf)([eo.default], () => ({
            badge: eo.default.getMentionCount(i),
            isMentionLowImportance: eo.default.getIsMentionLowImportance(i),
            unread: eo.default.hasUnread(i),
        })),
        I = (0, iE.Ig)(s) && 0 === _,
        f = a.useMemo(
            () =>
                null != n
                    ? n
                    : I
                      ? (0, r.jsx)("div", {
                            className: iq.j,
                            children: (0, r.jsx)(id.E, {
                                size: "custom",
                                color: "currentColor",
                                className: iq.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, I],
        );
    return (0, r.jsx)(iz, {
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
var iX = n(922016),
    iQ = n(297264),
    iJ = n(821609),
    i0 = n(339350),
    i1 = n(475743),
    i2 = n(624458),
    i3 = n(408213),
    i6 = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    i4 = n(928568);
function i5(e, t) {
    (0, tc.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function i7(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, E.bG)([iu.A], () => iu.A.getRequest(n)),
        a = (0, E.bG)([iu.A], () => iu.A.getJoinRequestGuild(n), [n]),
        s = (0, E.bG)([e7.A], () => e7.A.isFocused()),
        l = (0, E.bG)([eJ.A], () => eJ.A.getGuildId());
    return null == a
        ? null
        : (0, r.jsx)(iz, {
              guildNode: t,
              guild: a,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: i5,
              lowerBadge:
                  i?.applicationStatus === iw.B5.REJECTED
                      ? (0, $.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eL.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var i8 = n(295783);
function i9(e) {
    let { onActivate: t, children: n } = e,
        i = a.useRef(null),
        s = (0, E.bG)([iu.A], () => iu.A.hasJoinRequestCoackmark()),
        l = a.useCallback(() => {
            i3.Ay.clearCoachmark();
        }, []),
        o = (0, i1.A)(s),
        d = a.useRef(null);
    return (
        a.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, r.jsxs)("div", {
            className: i8.kL,
            children: [
                (0, r.jsx)(iX.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: i8.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: i8.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: i8.q3,
                                            children: [
                                                (0, r.jsx)(iQ.D, {
                                                    variant: "heading-md/medium",
                                                    children: ey.intl.string(ey.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(eI.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: ey.intl.string(ey.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(iJ.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: ey.intl.string(ey.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: i8.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: i8.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function re(e) {
    let { onActivate: t } = e,
        [n, i] = a.useState(!1),
        s = (0, E.bG)([eJ.A], () => eJ.A.getGuildId()),
        l = (0, E.bG)([iu.A], () => iu.A.hasFetchedRequestToJoinGuilds),
        o = (0, i4.A)(),
        d = (0, i1.A)(s),
        c = a.useMemo(() => {
            let e = (0, eQ.xW)({
                folderId: i6.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: ey.intl.string(ey.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, eQ.EL)(t, e.id));
            return e;
        }, [o, n]);
    a.useEffect(() => {
        n && !l && i2.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let u = null != s && o.includes(s);
    return (a.useEffect(() => {
        !n && u && d !== s && i(!0);
    }, [n, u, d, s]),
    0 === o.length)
        ? null
        : (0, r.jsx)(i9, {
              onActivate: t,
              children: (0, r.jsx)(is, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), i3.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: i8.rH,
                      children: (0, r.jsx)(i0.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eQ.PJ.GUILD
                          ? null
                          : (0, r.jsx)(i7, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function rt(e) {
    let { guildId: t } = e,
        n = a.useMemo(() => (0, eQ.EL)(t), [t]),
        i = (0, E.bG)([ez.A], () => ez.A.getGuild(t)),
        s = (0, E.bG)([e7.A], () => e7.A.isFocused()),
        l =
            t ===
            (0, q.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = iO(t);
    return null == i
        ? null
        : (0, r.jsx)(iz, { guildNode: n, guild: i, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var rn = n(221305);
let ri = (0, v.Fe)({
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
                n.e("76413"),
                n.e("35321"),
                n.e("50033"),
                n.e("44780"),
                n.e("66948"),
                n.e("65927"),
                n.e("15109"),
                n.e("81754"),
                n.e("75133"),
                n.e("80945"),
                n.e("28850"),
                n.e("27659"),
                n.e("65200"),
                n.e("60003"),
                n.e("85802"),
                n.e("41348"),
                n.e("90103"),
                n.e("46240"),
                n.e("81505"),
                n.e("85685"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    rr = (0, eZ.isWindows)() ? 4 : 12 * !(0, eZ.isMac)();
function ra(e) {
    return e.startsWith(eL.BVt.GUILD_DISCOVERY) || e.startsWith(eL.BVt.GLOBAL_DISCOVERY);
}
class rs {
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
            (0, eH.u9)(this.getVisibleGuildIds);
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
            (null == e && ra(window.location.pathname)) ||
            e === eL.sFm.SERVER_DISCOVERY_BADGE ||
            e === eL.sFm.E3_SERVER_DISCOVERY_BADGE
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
function rl(e) {
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
    let g = (0, E.yK)([ez.A, e$.Ay], () => ez.A.getGuildIds().filter((e) => e$.Ay.isCurrentUserGuest(e))),
        S = i.concat(g),
        { entrypoint: N } = (0, eW.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nk, {}),
            N === eW.RK.SERVER_RAIL_TOP && (0, r.jsx)(ri, {}),
            s ? (0, r.jsx)(eB, { shouldShowIntroPopover: f, markIntroPopoverAsDismissed: _ }) : null,
            !t && (0, r.jsx)(tv, {}),
            S.map((e) => (0, r.jsx)(rt, { guildId: e }, e)),
            (0, r.jsx)(re, { onActivate: n }),
        ],
    });
}
function ro(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: a, lurkingGuildIds: s } = e,
        [l] = (0, E.yK)([eq.Ay], () => {
            let e = eq.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, E.yK)([eK.A], () => eK.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(ni, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T.B, {
                role: "group",
                "aria-label": ey.intl.string(ey.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => a(e, t, o.length)),
            }),
            d,
            (0, r.jsx)(nK, {}),
            i ? null : (0, r.jsx)(t8, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tk, {}),
        ],
    });
}
function rd(e) {
    var t;
    let { disableAppDownload: n = eZ.isPlatformEmbedded, isOverlay: i = !1, className: s, themeOverride: o } = e,
        [d] = (0, E.yK)([eq.Ay], () => {
            let e = eq.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, E.bG)([ej.A], () => ej.A.lurkingGuildIds()),
        A = a.useMemo(() => (i ? [] : _), [_, i]),
        h = (0, E.bG)([D.A], () => D.A.isFullscreenInContext()),
        { isSorting: p, startSorting: T, stopSorting: C } = (0, eX.A)(),
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
        { entrypoint: j } = (0, eW.X8)({ location: "GuildsBar" }),
        W = +!!B + +(j === eW.RK.SERVER_RAIL_TOP),
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
                        heightBeforeGuilds: rr + t + W * e,
                        bottomInset: 16,
                    });
            return new rs(
                d,
                k,
                eL.tEg,
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
        $ = ra(H);
    (0, O.u5)(() => {
        if (!R.current && 0 !== d.size) {
            if (!$) {
                let { scrollTop: e } = eY.A.getGuildListDimensions();
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
                let n = eJ.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                eJ.A.addChangeListener(n),
                () => {
                    eJ.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let Z = a.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case eQ.PJ.FOLDER:
                        return (0, r.jsx)(
                            io,
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
                    case eQ.PJ.GUILD:
                        return (0, r.jsx)(
                            iZ,
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
        X = (0, r.jsx)(nE, { selected: $, className: rn.ai }),
        Q = j === eW.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(y.f5, {
        value: K,
        children: (0, r.jsx)(S.N, {
            theme: o,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: l()(rn.iE, s, e, { [rn.R]: h }),
                    "aria-label": ey.intl.string(ey.t.PjnF2t),
                    children: [
                        (0, r.jsx)(tr, {
                            ref: b,
                            isVisible: Y.isItemVisible,
                            onJumpTo: Y.handleJumpToGuild,
                            className: rn.Xl,
                            barClassName: rn.Sh,
                        }),
                        (0, r.jsxs)("div", {
                            ref: P,
                            ...w,
                            ...G,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: rn.B2,
                            children: [
                                (0, r.jsxs)(N.zC, {
                                    className: l()({ [rn.XG]: !0, [rn.qw]: x }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: Y.scrollerRef,
                                    onScroll: Y.handleScroll,
                                    children: [
                                        (0, r.jsx)(rl, { scrollToTop: z, lurkingGuildIds: A }),
                                        (0, r.jsx)(nV, {}),
                                        (0, r.jsx)(ro, {
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
                                            (0, r.jsx)(nV, { fullWidth: !0 }),
                                            (0, r.jsx)("div", { className: rn.JU, children: (0, r.jsx)(ri, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(tr, {
                            reverse: !0,
                            ref: M,
                            isVisible: Y.isItemVisible,
                            onJumpTo: Y.handleJumpToGuild,
                            className: l()(rn.LZ, { [rn.CH]: !i && !Q, [rn.c0]: !i && Q }),
                            barClassName: rn.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let rc = a.memo(
    function (e) {
        let t = (0, R.A)("guildsnav");
        return (0, r.jsx)(u.hD, { navigator: t, children: (0, r.jsx)(rd, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, h.A)(e, t),
);
