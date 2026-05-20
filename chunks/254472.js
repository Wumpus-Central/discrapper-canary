"use strict";
n.d(t, { A: () => ro });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(735438),
    u = n.n(l),
    c = n(873263),
    d = n(837381),
    _ = n(621466),
    f = n(17928),
    h = n(554146),
    p = n(52133),
    E = n(451988),
    m = n(661531),
    g = n(192308),
    A = n(331322),
    I = n(312138),
    T = n(602853),
    S = n(43990),
    N = n(689175),
    y = n(951001),
    C = n(964486),
    v = n(260762),
    O = n(793574),
    R = n(688810),
    b = n(313961),
    D = n(268218),
    L = n(558845),
    w = n(131607),
    M = n(313281),
    P = n(832275);
n(321073);
var x = n(43105),
    U = n(857250),
    k = n(691540),
    G = n(862328),
    F = n(67811),
    V = n(27232),
    B = n(403581),
    H = n(308528),
    j = n(933958),
    Y = n(969151),
    W = n(941971),
    K = n(900848),
    z = n(771640),
    $ = n(532794),
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
    es = n(5180),
    ea = n(695633),
    eo = n(152007),
    el = n(458294),
    eu = n(576705),
    ec = n(222823),
    ed = n(543465),
    e_ = n(3026),
    ef = n(990078),
    eh = n(451394),
    ep = n(597601),
    eE = n(834730),
    em = n(983851),
    eg = n(183623),
    eA = n(323384),
    eI = n(104171),
    eT = n(63995),
    eS = n(518769),
    eN = n(287809),
    ey = n(607567),
    eC = n(403362),
    ev = n(652215),
    eO = n(375708),
    eR = n(621035);
function eb(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eR.nM,
              children: [
                  (0, r.jsx)(e, { className: eR.RI, color: "currentColor" }),
                  (0, r.jsx)(eI.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eD() {
    let e = (0, f.yK)([en.A, Q.A], () =>
            et.default
                .keys(en.A.getFavoriteChannels())
                .map((e) => Q.A.getChannel(e))
                .filter(eC.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === ev.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === ev.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        s = (0, f.yK)(
            [ey.Ay],
            () =>
                u().flatMap(n, (e) =>
                    ey.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        a = (0, f.yK)([eT.A], () =>
            u().flatMap(i, (e) =>
                eT.A.getMutableParticipants(e, eS.ip.SPEAKER)
                    .filter((e) => e.type === eS.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        o = (0, f.bG)([eT.A], () => {
            let e = 0;
            for (let t of i) e += eT.A.getParticipantCount(t, eS.ip.AUDIENCE);
            return e;
        }),
        l = (0, f.yK)(
            [X.A],
            () =>
                X.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, f.yK)([j.Ay], () => {
            let e = j.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        d = (0, f.yK)([eN.default], () => c.map((e) => eN.default.getUser(e)), [c]),
        _ = (0, f.yK)([eN.default], () => l.map((e) => eN.default.getUser(e)), [l]),
        h = eb(
            em.H,
            s.filter((e) => !l.includes(e.id) && !c.includes(e.id)),
        ),
        p =
            0 === a.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eR.nM,
                      children: [
                          (0, r.jsx)(eh.q, { size: "lg", color: "currentColor", className: eR.RI }),
                          (0, r.jsx)(eI.Ay, { guildId: void 0, users: a, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eR.GZ,
                              children: [
                                  (0, r.jsx)(ep.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eE.E, {
                                      className: eR._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: o,
                                  }),
                              ],
                          }),
                      ],
                  }),
        E = eb(
            eg.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        m = eb(eA.k, d);
    return (0, r.jsxs)(r.Fragment, { children: [p, h, E, m] });
}
function eL() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: o()(eR.nM, eR.Dl),
                children: (0, r.jsx)("span", { className: o()(eR.cN, eR.NT), children: eO.intl.string(eO.t.wMWyci) }),
            }),
            (0, r.jsx)(eD, {}),
        ],
    });
}
function ew(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = s.useMemo(() => (0, r.jsx)("div", { className: eR.A_, children: (0, r.jsx)(eL, {}) }), []);
    return (0, r.jsx)(ef.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eM = n(97483),
    eP = n(49999),
    ex = n(788868),
    eU = n(335993),
    ek = n(959495),
    eG = n(988572);
let eF = { analyticsSource: { page: ev.liQ.GUILD_CHANNEL, section: ev.JJy.CHANNEL_LIST, object: ev.ZSU.CHANNEL } };
function eV(e) {
    let t,
        i,
        a,
        o,
        l,
        u,
        c,
        _,
        h,
        p,
        E,
        m,
        { shouldShowIntroPopover: A, markIntroPopoverAsDismissed: I } = e,
        T = (0, d.Vd)("favorites"),
        { favoriteAdded: S, clearFavoriteAdded: N } = (0, M.CJ)(),
        y = s.useRef(null),
        { analyticsLocations: C } = (0, R.Ay)(O.A.FAVORITES_GUILD_BUTTON),
        [v, b] = s.useState(!1),
        D = (0, e_.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: L,
            favoriteGuildMuted: w,
            favoriteChannels: P,
        } = (0, f.cf)([en.A], () => ({
            favoriteGuildEnabled: en.A.favoriteGuildEnabled,
            favoriteChannels: en.A.getFavoriteChannels(),
            favoriteGuildMuted: en.A.favoriteGuildMuted,
        })),
        ef = (0, f.bG)([J.A], () => J.A.getChannelId(ev.YYv)),
        eh = (0, f.bG)([Q.A], () => Q.A.getChannel(ef)),
        ep = (0, q.A)((e) => e.guildId),
        eE = (0, es.ai)(ep),
        { badge: em, unread: eg } = (0, f.cf)([ea.A, Q.A, el.default, eo.A, eu.A, ec.Ay, ed.Ay], () => {
            let e = et.default.keys(P),
                t = new Set();
            return e.reduce(
                (e, n) => {
                    let i = Q.A.getChannel(n),
                        r = i?.getGuildId(),
                        s = ec.Ay.getMentionCount(n);
                    if (
                        (t.has(n) || (t.add(n), (e.badge = e.badge + s)),
                        (e.unread = e.unread || (ec.Ay.hasUnread(n) && el.default.shouldCountChannelUnread(i, s))),
                        null != r)
                    ) {
                        let i = ea.A.getActiveJoinedRelevantThreadsForParent(r, n);
                        for (let n in i) {
                            let i = ec.Ay.getMentionCount(n);
                            t.has(n) || (t.add(n), (e.badge += i));
                            let r = Q.A.getChannel(n);
                            e.unread = e.unread || (ec.Ay.hasUnread(n) && el.default.shouldCountChannelUnread(r, i));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            );
        }),
        eA =
            ((i = null != (t = (0, f.bG)([J.A], () => J.A.getVoiceChannelId())) && null != P[t]),
            (a = (0, f.bG)([X.A], () => {
                if (!i) return !1;
                let e = X.A.getCurrentUserActiveStream();
                return null != e && null != P[e.channelId];
            })),
            (o = (0, f.bG)([X.A], () => X.A.getAllApplicationStreams().some((e) => null != P[e.channelId]))),
            (l = (0, f.bG)([ee.A], () => i && null != t && ee.A.hasVideo(t), [i, t])),
            (u = (0, f.yK)([j.Ay], () =>
                et.default.keys(P).reduce((e, t) => (e.push(...j.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (c = (0, f.bG)([j.Ay], () =>
                Array.from(j.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, Y.H)(t);
                    return null != n && null != P[n];
                }),
            )),
            (_ = u.length > 0),
            (h = !1),
            (p = !1),
            (E = !1),
            (m = !1),
            i ? ((h = !l), (p = l), (E = a), (m = c)) : ((E = o), (m = _)),
            (0, z.oi)({ audio: h, video: p, screenshare: E, liveStage: !1, isCurrentUserConnected: i, activity: m })),
        eI = em > 0 ? (0, z.wN)(em) : null,
        eT = s.useRef(!1),
        { hasAccess: eS } = (0, M.TW)("FavoritesButton"),
        eN = s.useCallback(
            (e, t) => {
                (eT.current = !0), I(e, t);
            },
            [I],
        ),
        ey = s.useCallback(
            (e) => {
                e && ((0, er.mv)("intro_dc"), (0, Z.u)(ev.YYv)),
                    eS
                        ? (L || (0, ei.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, g.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("13218"),
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
                        : e && (0, $.A)({ subscriptionTier: ex.pe.TIER_2, analyticsLocations: C }),
                    eN(eP.i.TAKE_ACTION);
            },
            [eN, L, eS, C],
        );
    return (
        s.useEffect(() => {
            A && (eT.current = !1);
        }, [A]),
        s.useEffect(
            () => () => {
                A && !eT.current && eN(eP.i.AUTO_DISMISS, !0);
            },
            [eN, A],
        ),
        s.useEffect(() => {
            if (S) {
                let e = (0, U.o)(eO.intl.string(eO.t["4tSWQg"]), eM.Ck.FAVORITE);
                (0, k.P0)(e);
                let t = setTimeout(N, e.options?.duration ?? eM.jg.duration);
                return () => {
                    N(), clearTimeout(t);
                };
            }
        }, [S, N]),
        (0, r.jsxs)(K.c, {
            children: [
                (0, r.jsx)(W.A, { overlay: !0, selected: eE, hovered: v, unread: eg && !w }),
                (0, r.jsx)(ew, {
                    children: (0, r.jsx)(G.Q, {
                        selected: !0,
                        upperBadge: eA,
                        lowerBadge: eI,
                        children: (0, r.jsx)("div", {
                            ref: y,
                            children: (0, r.jsx)(F.j, {
                                ...T,
                                ariaLabel: eO.intl.formatToPlainString(eO.t["/uzRss"], {
                                    guildName: eO.intl.string(eO.t.wMWyci),
                                    mentions: em,
                                }),
                                "aria-selected": eE,
                                to: { pathname: ev.BVt.CHANNEL(ev.YYv, ef), state: eF },
                                selected: eE || v,
                                onClick: () => {
                                    A && ey(!1);
                                },
                                onMouseEnter: () => b(!0),
                                onMouseLeave: () => b(!1),
                                onMouseDown: function () {
                                    null != eh && H.A.preload(eh.guild_id, eh.id);
                                },
                                onContextMenu: D,
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
                A &&
                    (0, r.jsx)(x.A, {
                        targetElementRef: y,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: eG.A, type: "image", aspectRatio: "16/9" },
                        title: eO.intl.string(eU.default["bu/mLv"]),
                        body: eO.intl.string(eU.default["/x2jT7"]),
                        onRequestClose: () => eN(eP.i.USER_DISMISS),
                        actions: [
                            {
                                icon: B.t,
                                text: eS ? eO.intl.string(eU.default["0lHa0Z"]) : eO.intl.string(eU.default["0nZZEk"]),
                                onClick: () => ey(!0),
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
    eY = n(72314),
    eW = n(543897),
    eK = n(696451),
    ez = n(71393),
    e$ = n(711014),
    eq = n(723702),
    eZ = n(757780),
    eX = n(263715),
    eQ = n(967198),
    eJ = n(173860),
    e0 = n(383394),
    e1 = n(131677),
    e2 = n(228366);
let e3 = {};
class e6 extends f.Ay.PersistedStore {
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
    let t = el.default.getMutableGuildStates();
    return (
        (e === ev.sFm.SERVER_DISCOVERY_BADGE && !e4.hasViewed(ev.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e8 && e !== e9 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tn = (0, e7.L_)((e, t, n) => ["null", ...t, ...e, e9, ev.sFm.E3_SERVER_DISCOVERY_BADGE, e8]),
    ti = s.forwardRef(function (e, t) {
        let n = (0, f.yK)([e$.Ay, e1.A, el.default], () =>
                tn(e$.Ay.getGuildFolders(), e1.A.getUnreadPrivateChannelIds(), el.default.getStoreChangeSentinel()),
            ),
            i = (0, f.bG)([e5.A], () => e5.A.isFocused()),
            s = (0, f.bG)([e0.A], () => e0.A.getExpandedFolders());
        return (0, r.jsx)(eJ.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: te,
            textUnread: eO.intl.string(eO.t.y2b7CA),
            textMention: eO.intl.string(eO.t.y2b7CA),
            isMentioned: tt,
            animate: i,
            expandedFolders: s,
        });
    });
n(667532);
var tr = n(868285),
    ts = n(763827),
    ta = n(873174),
    to = n(778712),
    tl = n(777666),
    tu = n(442433),
    tc = n(620982),
    td = n(571694),
    t_ = n(47167),
    tf = n(598104),
    th = n(994500);
function tp(e, t) {
    return e
        .filter((e) => (0, eC.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : th.A.isBlockedOrIgnored(e.id)));
}
function tE(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : th.A.isBlockedOrIgnored(e)));
}
var tm = n(427358),
    tg = n(907459),
    tA = n(145408);
function tI(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: eR.nM,
              children: [
                  (0, r.jsx)(t, { className: eR.RI, color: "currentColor" }),
                  (0, r.jsx)(eI.Ay, { users: n, max: 6 }),
              ],
          });
}
function tT(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eE.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eO.intl.string(eO.t.fpKdS1),
          })
        : (0, r.jsx)(tA.A, { muteConfig: t, className: n });
}
function tS(e) {
    let t,
        n,
        i,
        a,
        l,
        u,
        c,
        d,
        _,
        h,
        p,
        E,
        m,
        { channel: g } = e,
        A = g.id,
        {
            activityUsers: I,
            streamUsers: T,
            voiceUsers: S,
        } = ((t = g.id),
        (n = (0, f.yK)([th.A], () => th.A.getBlockedOrIgnoredIDs())),
        (i = (0, f.bG)([tm.A], () => tm.A.getUserAffinitiesMap(), [])),
        (a = (0, f.yK)(
            [j.Ay, eN.default],
            () =>
                j.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eN.default.getUser(e)),
            [t],
        )),
        (l = s.useMemo(() => tp(a, n), [a, n])),
        (u = s.useMemo(() => (0, tg.L)(l, i, "DirectMessageTooltip - activityUsers"), [l, i])),
        (c = (0, f.yK)(
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
        (d = s.useMemo(() => tp(c, n), [c, n])),
        (_ = s.useMemo(() => (0, tg.L)(d, i, "DirectMessageTooltip - activityUsers"), [d, i])),
        (h = s.useMemo(() => _.filter((e) => !u.some((t) => t.id === e.id)), [_, u])),
        (p = (0, f.yK)(
            [ey.Ay],
            () =>
                tp(
                    ey.Ay.getVoiceStatesForChannel(g).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [g, n],
        )),
        (E = s.useMemo(() => tp(p, n), [p, n])),
        (m = s.useMemo(() => (0, tg.L)(E, i, "DirectMessageTooltip - voiceUsers"), [E, i])),
        {
            voiceUsers: s.useMemo(
                () => m.filter((e) => !u.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [m, u, _],
            ),
            streamUsers: h,
            activityUsers: u,
        }),
        N = (0, r.jsx)(tI, { icon: em.H, users: S }),
        y = (0, r.jsx)(tI, { icon: eg.F, users: T }),
        C = (0, r.jsx)(tI, { icon: eA.k, users: I }),
        { isMuted: v, muteConfig: O } = (0, f.cf)(
            [ed.Ay],
            () => ({ isMuted: ed.Ay.isChannelMuted(null, A), muteConfig: ed.Ay.getChannelMuteConfig(null, A) }),
            [A],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            y,
            C,
            v ? (0, r.jsx)(tT, { muteConfig: O, className: o()(eR.LM, { [eR.Sx]: null != N || null != y }) }) : null,
        ],
    });
}
function tN(e) {
    let { channel: t } = e,
        n = (0, t_.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: o()(eR.nM, eR.Dl),
                children: (0, r.jsx)("span", { className: o()(eR.cN, eR.NT), children: n }),
            }),
            (0, r.jsx)(tS, { channel: t }),
        ],
    });
}
function ty(e) {
    let { channel: t, children: n } = e,
        i = (0, t_.Ay)(t),
        a = s.useMemo(() => (0, r.jsx)("div", { className: eR.A_, children: (0, r.jsx)(tN, { channel: t }) }), [t]);
    return (0, r.jsx)(ef.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let tC = { friction: 28, tension: 600 };
function tv(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tC };
        case "scale":
            return { ...tC };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tO extends s.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new ta.Controller({ scale: 0, height: 0, opacity: 0, config: tv }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !e5.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tv })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tv }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !e5.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tv }).start().then(e),
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
            t = e.type === ev.rbe.DM ? eN.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, td.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === ev.rbe.DM ? eN.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, tu.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("56386"),
                      n.e("8516"),
                      n.e("23531"),
                      n.e("94881"),
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("34552"),
                      n.e("93103"),
                      n.e("8757"),
                      n.e("91763"),
                      n.e("89673"),
                      n.e("85968"),
                      n.e("60195"),
                      n.e("68403"),
                      n.e("29787"),
                      n.e("71210"),
                      n.e("97558"),
                      n.e("94000"),
                      n.e("88342"),
                      n.e("91994"),
                      n.e("38730"),
                      n.e("42451"),
                      n.e("76665"),
                      n.e("98965"),
                      n.e("35313"),
                      n.e("76273"),
                      n.e("36564"),
                      n.e("34971"),
                      n.e("45996"),
                      n.e("792"),
                      n.e("92822"),
                      n.e("23427"),
                      n.e("29422"),
                      n.e("9291"),
                      n.e("74610"),
                      n.e("38056"),
                      n.e("7059"),
                      n.e("8829"),
                      n.e("42339"),
                      n.e("16054"),
                      n.e("98199"),
                      n.e("41175"),
                      n.e("39778"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, r.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, tu.L3)(e, async () => {
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
                audio: s,
                video: a,
                stream: o,
                isCurrentUserInThisDMCall: l,
                isIncomingCall: u,
                isOngoingCall: c,
                unread: d,
                treeItemProps: _,
            } = this.props,
            { hovered: f, animating: h } = this.state,
            p = e.isMultiUserDM() && null == e.icon,
            E = () =>
                (0, r.jsx)(F.j, {
                    to: ev.BVt.CHANNEL(ev.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || f,
                    ariaLabel:
                        null != t
                            ? [
                                  eO.intl.formatToPlainString(eO.t.hKarnZ, { name: t, mentions: i }),
                                  u ? eO.intl.string(eO.t["fk1/bX"]) : c ? eO.intl.string(eO.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: p ? void 0 : this.getChannelIcon(),
                    backgroundStyle: p ? "on-hover" : "always",
                    children: p
                        ? (0, r.jsx)(tf.A, {
                              channel: e,
                              size: to._3.SIZE_40,
                              facepileSizeOverride: to._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, r.jsx)(ta.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(W.A, { overlay: !0, hovered: !h && f, selected: !h && n, unread: !h && d }),
                    (0, r.jsx)(ty, {
                        channel: e,
                        children: (0, r.jsx)(G.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, z.wN)(i, void 0, !0) : null,
                            upperBadge: (0, z.oi)({ audio: s, video: a, screenshare: o, isCurrentUserConnected: l }),
                            lowerBadgeSize: { width: (0, tl.o6)(i) },
                            children: E(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tR = s.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, t_.Ay)(e.channel),
        s = (0, d.Vd)(n, 2),
        a = (0, f.bG)([ts.A], () => ts.A.getChannelId(), []),
        o = (0, f.bG)([b.A], () => b.A.getMode(n), [n]),
        l = (0, f.bG)([X.A], () => X.A.getAllApplicationStreamsForChannel(n).length > 0),
        u = (0, f.bG)([ey.Ay], () => ey.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, f.bG)([J.A], () => J.A.getChannelId(), []),
        _ = (0, f.bG)([ec.Ay], () => ec.Ay.getMentionCount(n), [n]),
        h = a === n,
        { isIncomingCall: p, isOngoingCall: E } = (0, tc.A)(n),
        g = !1,
        A = !1;
    (h || u) && ((g = o === ev._Of.VOICE), (A = o === ev._Of.VIDEO));
    let I = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(tO, {
        ...e,
        ref: t,
        channelName: i,
        unread: _ > 0,
        selected: c === n,
        badge: _,
        audio: g,
        video: A,
        stream: l,
        isCurrentUserInThisDMCall: h,
        isIncomingCall: p,
        isOngoingCall: E,
        size: I,
        treeItemProps: s,
    });
});
function tb() {
    (0, f.bG)([Q.A], () => Q.A.getPrivateChannelsVersion());
    let e = Q.A.getMutablePrivateChannels(),
        t = (0, f.yK)([e1.A], () => e1.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, f.cf)([ts.A], () => ({
            selectedVoiceGuildId: ts.A.getGuildId(),
            selectedVoiceChannelId: ts.A.getChannelId(),
        })),
        a = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tR, { channel: n }, n.id);
        }),
        o = null == n && null != i ? e[i] : null;
    return (
        null != o && a.unshift((0, r.jsx)(tR, { channel: o }, o.id)),
        (0, r.jsx)(A.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eO.intl.string(eO.t.YUU0RF),
            gap: "xs",
            hidden: a.length < 1,
            children: (0, r.jsx)(tr.F, { component: s.Fragment, children: a }),
        })
    );
}
var tD = n(32880),
    tL = n(939249),
    tw = n(547732);
function tM(e) {
    let {
            children: t,
            text: n,
            disableWrapper: i = !1,
            disabled: a = !1,
            hideOnClick: l = !0,
            shouldShow: u,
            forceOpen: c,
            selected: d = !1,
        } = e,
        _ = s.useMemo(() => (null == n || a ? null : (0, r.jsx)("div", { className: eR.A_, children: n })), [n, a]),
        f = i ? t : (0, r.jsx)("div", { className: o()(tw.p, { [tw.w]: d }), children: t });
    return (0, r.jsx)(ef.m, {
        __unsupportedReactNodeAsText: _,
        position: "right",
        spacing: 12,
        hideOnClick: l,
        shouldShow: u,
        forceOpen: c,
        ariaHidden: !0,
        asContainer: !i,
        children: f,
    });
}
var tP = n(530787);
let tx = s.forwardRef(function (e, t) {
        let {
                id: n,
                onClick: i,
                onContextMenu: a,
                icon: l,
                selected: u,
                tooltip: c,
                upperBadge: _,
                lowerBadge: f,
                lowerBadgeSize: h,
                showPill: p = !0,
                className: E,
                "aria-label": m,
                children: g,
                onMouseEnter: A,
                onMouseLeave: I,
                onMouseDown: T,
            } = e,
            S = (0, d.Vd)(n),
            [N, y] = s.useState(!1),
            C = m ?? ("string" == typeof c ? c : void 0);
        return (0, r.jsxs)(K.c, {
            children: [
                p ? (0, r.jsx)(W.A, { overlay: !0, hovered: N, selected: u }) : null,
                (0, r.jsx)(tM, {
                    text: c,
                    selected: u,
                    children: (0, r.jsx)(G.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: f,
                        lowerBadgeSize: h,
                        children: (0, r.jsx)(tL.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                A?.(), y(!0);
                            },
                            onMouseLeave: () => {
                                I?.(), y(!1);
                            },
                            onMouseDown: T,
                            className: o()(tP.oZ, E, { [tP.wH]: u || N }),
                            onClick: i,
                            "aria-label": C,
                            "aria-selected": u,
                            onContextMenu: a,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != l && (0, r.jsx)(l, { className: tP.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                g,
            ],
        });
    }),
    tU = "DOWNLOAD_APPS";
function tk() {
    let e = (0, g.useModalsStore)((e) => (0, g.hasModalOpenSelector)(e, tU));
    return (0, r.jsx)(tx, {
        id: "app-download-button",
        onClick: () => {
            (0, g.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tU },
            );
        },
        selected: e,
        tooltip: eO.intl.string(eO.t.Z7jwrJ),
        icon: tD.s,
    });
}
var tG = n(245604),
    tF = n(272613),
    tV = n(398884),
    tB = n(772366),
    tH = n(728321),
    tj = n(260509),
    tY = n(284009),
    tW = n.n(tY),
    tK = n(295868),
    tz = n(66834),
    t$ = n(174459),
    tq = n(787426);
function tZ(e) {
    let t = s.useRef(null),
        n = e.map((e) => e[0]);
    return (
        s.useLayoutEffect(() => {
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
        tW()(t.type !== eX.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== eX.PJ.FOLDER || t.type !== eX.PJ.FOLDER) &&
                (e.type !== eX.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                i && t.type !== eX.PJ.FOLDER && t$.default.track(ev.HAw.GUILD_FOLDER_CREATED),
                    tz.A.moveById(r, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function tQ(e) {
    let { name: t, targetNode: n, combine: i, below: a } = e,
        o = s.useMemo(() => tX([eX.PJ.GUILD, eX.PJ.FOLDER], n, a, i), [n, a, i]),
        [{ canDrop: l, isOver: u }, c] = (0, tK.H)(o),
        d = tZ([
            [l, tq.OP],
            [u, tq.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (d.current = e), c(e);
        },
        "data-dnd-name": eO.intl.formatToPlainString(eO.t["A5aDw+"], { itemName: t }),
        className: tq.aC,
    });
}
function tJ(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: a, isOver: l }, u] = (0, tK.H)(() => tX([eX.PJ.GUILD], n, !0, !0));
    s.useEffect(() => {
        i?.(l);
    }, [i, l]);
    let c = tZ([
        [a, tq.OP],
        [l, tq.NQ],
    ]);
    return (0, r.jsx)(tM, {
        text: t,
        shouldShow: l,
        forceOpen: l,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (c.current = e), u(e);
            },
            "data-dnd-name": eO.intl.formatToPlainString(eO.t.qiQ0QI, { itemName: t }),
            className: o()(tq.dw, {}),
        }),
    });
}
let t0 = s.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: s = !1, onDragOverChanged: a } = e,
        o = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: tq.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(tQ, { name: t, targetNode: n, below: s }),
            o ? (0, r.jsx)(tJ, { name: t, targetNode: n, onDragOverChanged: a }) : null,
        ],
    });
});
function t1(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: s }, a] = (0, tK.H)(() => tX([eX.PJ.GUILD], n, !0, !0)),
        o = tZ([[s, tq.a7]]),
        l = tZ([
            [s, tq.NQ],
            [i, tq.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: o,
        className: tq.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: tq.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (l.current = e), a(e);
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
function t5(e) {
    (0, tu.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function t7(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, f.yK)([ez.A], () => ez.A.getGuildsArray()),
        a = (0, f.bG)([eN.default], () => eN.default.getCurrentUser()),
        o = s.useMemo(() => i.some((e) => (0, tj.bM)(e, a)), [i, a]),
        l = (0, g.useModalsStore)((e) => (0, g.hasModalOpenSelector)(e, t3.fc)),
        { analyticsLocations: u } = (0, R.Ay)();
    return (0, r.jsx)("div", {
        className: t6.Uq,
        children: (0, r.jsxs)(tH.A, {
            tutorialId: o ? "create-more-servers" : "create-first-server",
            inlineSpecs: t4,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tx, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: () => {
                        (0, tV.Sn)()
                            ? (0, tB.A)({
                                  analyticsSource: { page: ev.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: ev.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: ev.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: u,
                              })
                            : tF.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: l,
                    onContextMenu: t5,
                    tooltip: eO.intl.string(eO.t.l5WIbf),
                    icon: tG.U,
                }),
                null != n &&
                    (0, r.jsx)(t0, { name: eO.intl.string(eO.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var t8 = n(565787),
    t9 = n(791606),
    ne = n(486020),
    nt = n(962795);
function nn(e) {
    let [t, i] = s.useState(!1),
        a = (0, d.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(K.c, {
        children: (0, r.jsx)(tM, {
            text: e.name,
            children: (0, r.jsx)(G.Q, {
                className: nt.o,
                selected: t,
                lowerBadge: (0, r.jsx)(tl.fk, { icon: (0, t8.k)(t9.A), disableColor: !0, className: nt._ }),
                children: (0, r.jsx)(F.j, {
                    name: e.name,
                    onMouseEnter: () => {
                        i(!0);
                    },
                    onMouseLeave: () => {
                        i(!1);
                    },
                    onClick: () => {
                        (0, g.openModalLazy)(async () => {
                            let { default: t } = await n.e("42945").then(n.bind(n, 537560));
                            return (n) => (0, r.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? ne.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...a,
                }),
            }),
        }),
    });
}
var ni = n(696292),
    nr = n(836480),
    ns = n(533129),
    na = n(726845),
    no = n(837057),
    nl = n(310419),
    nu = n(488995),
    nc = n(324580),
    nd = n(190107);
let n_ = s.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: a, className: o } = e,
        l = s.useCallback(() => {
            (0, ns.WL)({ source: nu.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== a ? nu.GlobalDiscoveryTab.QUESTS : na.A.getField("selectedTab");
            switch (e) {
                case nu.GlobalDiscoveryTab.QUESTS:
                    return (0, no.transitionToGlobalDiscovery)({
                        tab: nu.GlobalDiscoveryTab.QUESTS,
                        location: nd.rE.DISCOVERY_COMPASS,
                        questContent: ni.u.DISCOVERY_COMPASS,
                        questId: a,
                    });
                case nu.GlobalDiscoveryTab.SERVERS:
                    return (0, no.transitionToGlobalDiscovery)({
                        tab: nu.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nc.J8.GUILDS_BAR,
                    });
                case nu.GlobalDiscoveryTab.APPS:
                    return (0, no.transitionToGlobalDiscovery)({
                        tab: nu.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nl.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, no.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [a]);
    return (0, r.jsx)(tx, {
        id: "guild-discover-button",
        ref: t,
        className: o,
        onClick: () => {
            l(), void 0 !== i && i();
        },
        selected: n,
        tooltip: eO.intl.string(eO.t["4nEZLk"]),
        icon: nr.Q,
    });
});
var nf = n(506774),
    nh = n(509963),
    np = n(111159),
    nE = n(793943),
    nm = n(428262),
    ng = n(350972),
    nA = n(677056),
    nI = n(526162),
    nT = n(174197);
function nS() {
    let [e, t] = (0, f.yK)([eN.default, nI.A], () => [
            nI.A.getCurrentDesktopIcon(),
            nm.Ay.isPremium(eN.default.getCurrentUser()),
        ]),
        n = (0, nE.fy)().activePanel === nE.HP.APP_ICON,
        i = (0, nT.gG)(e),
        s = i.id !== ng.LW.DEFAULT && (t || n),
        a = (0, r.jsx)(np.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && s ? (0, r.jsx)(nA.A, { id: i.id, size: nT.N8.SIZE_48 }) : a;
}
var nN = n(531260),
    ny = n(411976),
    nC = n(912309),
    nv = n(400492),
    nO = n(354670),
    nR = n(619921),
    nb = n(340829),
    nD = n(966846),
    nL = n(674378),
    nw = n(394953),
    nM = n(235079),
    nP = n(30186);
let nx = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nU(e) {
    let { selected: t, user: n, badge: i, link: a, showProgressBadge: o } = e,
        [l, u] = s.useState(!1),
        [c, _] = s.useState(!1),
        [f, h] = s.useState(null),
        [p, E] = s.useState(0),
        m = (0, d.Vd)("home"),
        g = (0, nE.fy)().activePanel === nE.HP.APP_ICON,
        A = () => {
            h(null), E(0), clearTimeout(f);
        };
    if (null == n) return null;
    let I = eO.intl.string(eO.t.YUU0RF);
    c && (I = nf.w.get(ev.wqg) ? eO.intl.string(eO.t["nkq1l+"]) : eO.intl.string(eO.t.Be8Q5E));
    let T = null;
    !t && o && (T = (0, r.jsx)(nh.A, { className: nP.Cp, determineOwnVisibility: !1 }));
    let S = t || l || g,
        N = (0, r.jsx)(G.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, z.wN)(i) : null,
            upperBadge: T,
            lowerBadgeSize: { width: (0, tl.o6)(i) },
            children: (0, r.jsx)(F.j, {
                onMouseEnter: () => u(!0),
                onMouseLeave: () => u(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != f && clearTimeout(f), h(setTimeout(A, 500)), E(p + 1), 15 === p)) {
                        A();
                        let e = !nf.w.get(ev.wqg);
                        nf.w.set(ev.wqg, e),
                            e && nf.w.set(nM.L, !0),
                            e ? (0, nv.Ak)("discodo") : (0, nv.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: eO.intl.string(eO.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...m,
                to: {
                    pathname: a,
                    state: {
                        analyticsSource: {
                            page: ev.liQ.GUILD_CHANNEL,
                            section: ev.JJy.NAVIGATION,
                            object: ev.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(nS, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nP.Uq,
        children: (0, r.jsx)(tH.A, {
            inlineSpecs: nx,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(W.A, { overlay: !0, selected: t, hovered: l }),
                    (0, r.jsx)(tM, { hideOnClick: !0, text: I, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nk() {
    let e = (function () {
            let e = (0, q.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(ev.BVt.GUILD_DISCOVERY) || t.startsWith(ev.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(ev.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nw.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, f.bG)([nD.A, nb.A], () => {
            let e = (0, nh.v)(nD.A.activeItems, nb.A),
                { total: t, progress: n } = nL.zY(e),
                i = nL.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nC.kX)(),
        i = Object.keys(ex.TP),
        s = (0, nN.A)(),
        { unviewedTrialCount: a, unviewedDiscountCount: o } = (0, f.cf)([nO.A], () => ({
            unviewedTrialCount: nO.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nO.A.getUnacknowledgedDiscountOffers().length,
        })),
        l = s.fractionalState === ex.xc.NONE ? a + o : 0,
        u = (0, f.bG)([eN.default], () => eN.default.getCurrentUser()),
        d = (0, ny.W)(),
        _ = n + l + d,
        h = _ === l && l > 0 && n + d === 0,
        p = nR.A.getHomeLink();
    return (
        h && (p = ev.BVt.APPLICATION_STORE),
        (0, r.jsx)(nU, {
            selected: e,
            user: u,
            selectedChannelId: J.A.getChannelId(ev.ME),
            badge: _,
            link: p,
            showProgressBadge: t,
        })
    );
}
var nG = n(473201);
function nF(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(K.c, { children: (0, r.jsx)("div", { className: o()(nG.t, { [nG.I]: t }) }) });
}
var nV = n(349288),
    nB = n(695366),
    nH = n(919638),
    nj = n(818348),
    nY = n(585212);
function nW() {
    let e = (0, f.bG)([nH.A, ez.A], () => nH.A.unavailableGuilds.filter((e) => null == ez.A.getGuild(e)).length),
        t = (0, d.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(K.c, {
              children: (0, r.jsx)(tM, {
                  text: eO.intl.format(eO.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nV.Anchor, {
                      href: nj.qF.STATUS,
                      target: "_blank",
                      className: nY.h,
                      "aria-label": eO.intl.formatToPlainString(eO.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nB.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var nK = n(312742),
    nz = n(317097),
    n$ = n(319060),
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
        i = (0, f.bG)([ez.A], () => ez.A.getGuild(t), [t]),
        s = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: o()(n3.VL, n3.zU), children: (0, r.jsx)(nB.E, { color: "currentColor" }) })
        : (0, r.jsx)(n2.Ay, {
              guild: i,
              animate: n,
              size: n2.Ay.Sizes.MINI,
              iconSize: s,
              lossless: !0,
              className: n3.VL,
              tabIndex: -1,
          });
}
function n4(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: s } = t,
        a = n && i,
        l = (0, r.jsx)("div", {
            className: n3.hJ,
            children: (0, r.jsx)("div", {
                className: n3.Eh,
                children: (0, r.jsx)(nJ.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        u = (0, r.jsx)("div", {
            className: n3.qJ,
            children: (0, r.jsx)("div", {
                className: n3.jg,
                children: s.slice(0, 4).map((e) => (0, r.jsx)(n6, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: o()({ [n3.NG]: a, [n3.yd]: !a }),
        children: [!a && l, u],
    });
}
function n5(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: i,
            mediaState: a,
            mentionCount: o = 0,
            isMentionLowImportance: l,
            tooltipName: u,
            folderGroupId: c,
            folderButtonContent: d,
            onClick: _,
            onContextMenu: f,
            onHoverChange: h,
            onKeyDown: p,
            treeItemProps: { onFocus: E, ...g },
            "aria-setsize": A,
            "aria-posinset": I,
        } = e,
        [T, S] = s.useState(!1),
        N = s.useCallback(() => {
            i || S(!0), h?.(!0);
        }, [i, h]),
        y = s.useCallback(() => {
            i || S(!1), h?.(!1);
        }, [i, h]),
        C = n || null == a ? null : (0, z.oi)(a),
        v =
            !n && o > 0
                ? (0, z.wN)(
                      o,
                      l ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(n0.vN, {
        children: (0, r.jsxs)(tL.D, {
            className: n3.H3,
            onClick: _,
            onContextMenu: f,
            onMouseEnter: N,
            onMouseLeave: y,
            onKeyDown: p,
            onFocus: E,
            focusProps: { enabled: !1 },
            ...g,
            role: "treeitem",
            "aria-setsize": A,
            "aria-posinset": I,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, r.jsx)(n1.A, {
                    children: eO.intl.formatToPlainString(eO.t["90/DwM"], { folderName: u, mentions: o }),
                }),
                (0, r.jsx)(G.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: C,
                    lowerBadge: v,
                    lowerBadgeSize: { width: (0, tl.o6)(o) },
                    children: (0, r.jsx)("div", {
                        className: n3.vA,
                        children:
                            null != d
                                ? (0, r.jsx)("div", { className: n3.hJ, children: d })
                                : (0, r.jsx)(n4, { folderNode: t, hovered: T, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var n7 = n(573435),
    n8 = n(643918);
function n9(e) {
    let { className: t, isFolder: n } = e,
        i = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(n7.Ay, {
        mask: n7.Ay.Masks.SQUIRCLE,
        className: o()(t, n8.OL, { [n8.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: n8.ZU }),
    });
}
var ie = n(114329),
    it = n(620370);
let ii = (0, nQ.xI)(n$.A.FOLDER_ITEM_ANIMATION_DURATION),
    ir = (0, ta.animated)(A.B),
    is = s.memo(function (e) {
        var t;
        let n,
            i,
            a,
            {
                folderNode: l,
                setNodeRef: u,
                selected: c,
                expanded: _,
                mediaState: f,
                mentionCount: h = 0,
                isMentionLowImportance: p,
                unread: E = !1,
                defaultFolderName: g,
                draggable: A = !1,
                sorting: I = !1,
                onDragStart: S,
                onDragEnd: N,
                onExpandCollapse: y,
                onContextMenu: C,
                renderChildNode: v,
                folderButtonSize: O,
                folderButtonContent: R,
                "aria-setsize": b,
                "aria-posinset": D,
            } = e,
            { id: L, name: w, children: M } = l,
            [P, x] = s.useState(!1),
            [U, k] = s.useState(!1),
            G = P || U,
            F = (0, nX.qK)("FolderItem");
        s.useEffect(() => {
            I && x(!1);
        }, [I]);
        let [{ dragging: V }, B] = (0, nK.i)({
                type: eX.PJ.FOLDER,
                item: () => (S?.(), { type: eX.PJ.FOLDER, nodeId: l.id }),
                end() {
                    N?.(), (0, nZ.um)(e$.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            H = s.useCallback((e) => {
                k(e);
            }, []),
            j = s.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !_) || ("ArrowLeft" === e.key && _)) && y();
                },
                [y, _],
            ),
            Y = null != w && "" !== w ? w : null != g && "" !== g ? g : eO.intl.string(eO.t.xV9hVh),
            z = (0, d.Vd)(`${L}`),
            $ = `folder-items-${L}`,
            q =
                ((t = M.length),
                (n = (0, T.r)(m.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (a = (0, T.r)(m.A.space.SPACE_XS))) - a + (a - (n - i) / 2) + (0, T.r)(m.A.space.SPACE_4)),
            Z = (0, nq.p)(!V && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: ii },
            }),
            X = s.useCallback((e) => u?.(L, e), [u, L]),
            Q = (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(W.A, { overlay: !0, disabled: V || _, hovered: P, selected: c, unread: E }),
                    (0, r.jsx)(tM, {
                        text: Y,
                        disabled: I,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: A
                                ? (e) => {
                                      B(e);
                                  }
                                : void 0,
                            className: o()(n3.MJ, { [n3.L0]: "icon" === O || F, [it.oR]: !V && U && !_ }),
                            "data-dnd-name": Y,
                            children: V
                                ? (0, r.jsx)(n9, { isFolder: !0 })
                                : (0, r.jsx)(n5, {
                                      folderNode: l,
                                      expanded: _,
                                      sorting: I,
                                      mediaState: f,
                                      mentionCount: h,
                                      isMentionLowImportance: p,
                                      tooltipName: Y,
                                      folderGroupId: $,
                                      onClick: y,
                                      onContextMenu: C,
                                      onHoverChange: x,
                                      onKeyDown: j,
                                      treeItemProps: z,
                                      folderButtonContent: R,
                                      "aria-setsize": b,
                                      "aria-posinset": D,
                                  }),
                        }),
                    }),
                    A ? (0, r.jsx)(t0, { name: Y, targetNode: l, onDragOverChanged: H }) : null,
                ],
            }),
            J = null != l.color ? l.color : ie.DO,
            ee = J === ie.DO ? void 0 : (0, nz.Hl)(J);
        return (0, r.jsxs)("div", {
            ref: X,
            className: o()(n3.qc, { [n3.Av]: _, [n3.Lg]: G }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": U,
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
                                id: $,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: n3.TN,
                                style: { height: e.height.to((e) => e * q) },
                                "aria-label": l.name,
                                children: M.map((t, n) => v(t, n, M.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                A && _ ? (0, r.jsx)(t1, { name: Y, targetNode: l }) : null,
            ],
        });
    });
var ia = n(354583);
let io = s.memo(function (e) {
    let t,
        i,
        a,
        o,
        l,
        u,
        c,
        d,
        _,
        h,
        p,
        { folderNode: E, ...m } = e,
        { id: g, name: A, color: I, children: T } = E,
        S = T.map((e) => e.id),
        N = (0, q.A)((e) => e.guildId),
        y = (0, f.bG)([e0.A], () => e0.A.isFolderExpanded(g)),
        C = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = ez.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eC.Vq),
                n = 2 * ev.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(E),
        v =
            ((t = (0, f.bG)([ts.A], () => ts.A.getGuildId())),
            (i = E.children.map((e) => e.id)),
            (a = null != t && i.includes(t)),
            (o = !1),
            (l = !1),
            (u = !1),
            (c = (0, f.bG)([ts.A], () => ts.A.getChannelId())),
            (_ = null != (d = (0, ia.A)()?.guild_id) && i.includes(d)),
            (h = (0, f.bG)([ee.A], () => null != c && ee.A.hasVideo(c), [c])),
            (p = (0, f.bG)([X.A], () => X.A.getCurrentUserActiveStream())),
            a && ((o = !h), (l = h), (u = null != p && null != p.guildId && i.includes(p.guildId))),
            s.useMemo(
                () => ({ audio: o, video: l, screenshare: u, liveStage: _, isCurrentUserConnected: a }),
                [o, l, u, _, a],
            )),
        {
            mentionCount: O,
            isMentionLowImportance: R,
            unread: b,
        } = (0, f.cf)([el.default], () => ({
            mentionCount: S.map((e) => el.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => el.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => el.default.hasUnread(e)),
        })),
        D = s.useCallback(() => {
            tz.A.toggleGuildFolderExpand(g);
        }, [g]),
        L = s.useCallback(
            (e) => {
                (0, tu.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: g, folderName: A, folderColor: I, unread: b || O > 0 });
                });
            },
            [g, A, I, b, O],
        );
    return (0, r.jsx)(is, {
        ...m,
        folderNode: E,
        expanded: y,
        selected: null != N && S.includes(N),
        mentionCount: O,
        isMentionLowImportance: R,
        unread: b,
        mediaState: v,
        defaultFolderName: C,
        onExpandCollapse: D,
        onContextMenu: L,
    });
});
var il = n(113494),
    iu = n(821124),
    ic = n(212455);
function id(e) {
    let t = e?.features.has(ev.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, f.bG)([ic.A, eN.default, eK.Ay], () => {
            if (null == e) return;
            let t = ic.A.getRequest(e.id),
                n = eN.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = eK.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, iu.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var i_ = n(347951),
    ih = n(478437),
    ip = n(811024),
    iE = n(508654),
    im = n(233993),
    ig = n(446600),
    iA = n(95701),
    iI = n(495544);
function iT(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eu.A;
    return null != e && e.type !== ih.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(ev.hVb.VIEW_CHANNEL, e);
}
function iS(e) {
    let t = (0, f.bG)([ed.Ay], () => ed.Ay.isMuted(e)),
        n = (0, iE.BP)(e),
        i = (0, f.yK)([j.Ay, th.A], () =>
            j.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = th.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : th.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        r = (0, Y.H)(i[0]?.location),
        s = (0, ip.Gp)(r),
        {
            guildHasVoice: a,
            guildHasVideo: o,
            selectedVoiceChannelHasVideo: l,
        } = (0, f.cf)([J.A, ee.A, ez.A, eu.A, Q.A], () => {
            var n;
            let i = J.A.getVoiceChannelId(),
                r = ez.A.getGuild(e)?.afkChannelId,
                s = ee.A.getUsersWithVideo(e),
                a =
                    ((n = ee.A.getVoiceStates(e)),
                    u()(n)
                        .filter((e) => !th.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in a) if (iT(Q.A.getBasicChannel(a[e].channelId), r ?? void 0, eu.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of s) if (iT(Q.A.getBasicChannel(a[e]?.channelId), r ?? void 0, eu.A)) return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && ee.A.hasVideo(i),
            };
        }, [e, t]),
        c = iI.default.getId();
    return (0, f.cf)([J.A, Q.A, j.Ay, ig.A, X.A, eu.A], () => {
        let r = J.A.getVoiceChannelId(),
            u = Q.A.getChannel(r)?.guild_id === e,
            d = !1,
            _ = !1,
            f = !1,
            h = !1,
            p = !1,
            E = !1;
        if (!u && t)
            return {
                audio: d,
                video: h,
                screenshare: p,
                liveStage: f,
                activeEvent: _,
                activity: E,
                isCurrentUserConnected: !1,
            };
        let m = et.default.keys(ig.A.getStageInstancesByGuild(e)).some((e) => {
                let t = Q.A.getChannel(e);
                return null != t && eu.A.can(im.Gk, t);
            }),
            g = u && (Q.A.getChannel(r)?.isGuildStageVoice() ?? !1),
            A = !!u && null != X.A.getActiveStreamForUser(c, e),
            I = X.A.getAllApplicationStreams()
                .filter((e) => !th.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e),
            T = u && l,
            S = (() => {
                if (s) return i.length > 0;
                for (let e of i) {
                    let t = Q.A.getChannel((0, Y.H)(e.location));
                    if (null != t && (0, iA.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            N = j.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            u
                ? ((d = !0), (_ = n?.channel_id === r), (f = g), (h = T), (p = A), (E = N))
                : ((d = a), (_ = null != n), (f = m), (h = o), (p = I), (E = S)),
            {
                audio: d,
                video: h,
                screenshare: p,
                liveStage: f,
                activeEvent: _,
                activity: E,
                isCurrentUserConnected: u || g,
            }
        );
    }, [e, t, l, c, s, i, n, a, o]);
}
var iN = n(607399),
    iy = n(702841),
    iC = n(658128),
    iv = n(976860),
    iO = n(676279);
function iR(e) {
    let { guild: t, show: n, active: i, onAnimationStart: s, onAnimationRest: a } = e,
        l = {},
        u = {};
    (l.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (u.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, T.r)(m.A.unsafe_rawColors.BRAND_500).hex(),
        d = (0, T.r)(m.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((l.backgroundColor = c), (u.backgroundColor = d));
    let _ = (0, nq.p)(n, { from: l, enter: u, leave: l, config: { duration: 100 }, onStart: s, onRest: a });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: n3.qc,
                        children: (0, r.jsx)("div", {
                            className: o()(n3.MJ, n3.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(ta.animated.div, {
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
    iD = n(714991),
    iL = n(107773),
    iw = n(513461),
    iM = n(164956),
    iP = n(624265),
    ix = n(970278),
    iU = n(808728);
function ik(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eR.nM,
              children: [
                  (0, r.jsx)(e, { className: eR.RI, color: "currentColor" }),
                  (0, r.jsx)(eI.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iG(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eE.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eO.intl.string(eO.t.fpKdS1),
          })
        : (0, r.jsx)(tA.A, { muteConfig: t, className: n });
}
function iF(e) {
    let t,
        n,
        i,
        a,
        l,
        c,
        d,
        _,
        h,
        p,
        E,
        m,
        g,
        A,
        I,
        T,
        S,
        N,
        y,
        C,
        { guild: v } = e,
        O = v.id,
        {
            voiceUsersToShow: R,
            stageSpeakers: b,
            numStageListeners: D,
            streamUsersToShow: L,
            embeddedActivitiesUsers: w,
        } = ((t = v.id),
        (n = (0, f.yK)(
            [iU.Ay, ix.A],
            () => [
                ...iU.Ay.getChannels(t)
                    [iU.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === ev.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(ix.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (i = (0, iP.Ay)(t)),
        (a = s.useMemo(() => i.map((e) => e.id), [i])),
        (l = (0, f.bG)([ey.Ay], () => ey.Ay.getVoiceStates(t), [t])),
        (c = (0, f.yK)([th.A], () => th.A.getBlockedOrIgnoredIDs())),
        (d = u().flatMap(n, (e) =>
            e === v.afkChannelId
                ? []
                : tp(
                      (l[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      c,
                  ),
        )),
        (_ = (0, f.yK)([eT.A], () =>
            u().flatMap(a, (e) =>
                e === v.afkChannelId
                    ? []
                    : tp(
                          eT.A.getMutableParticipants(e, eS.ip.SPEAKER)
                              .filter((e) => e.type === eS.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          c,
                      ),
            ),
        )),
        (h = (0, f.bG)([eT.A], () => {
            let e = 0;
            for (let t of a) e += eT.A.getParticipantCount(t, eS.ip.AUDIENCE);
            return e;
        })),
        (p = (0, f.yK)(
            [X.A],
            () =>
                tE(
                    X.A.getAllApplicationStreams()
                        .filter((e) => e.guildId === t)
                        .map((e) => e.ownerId),
                    c,
                ),
            [c, t],
        )),
        (E = (0, f.yK)(
            [j.Ay],
            () =>
                tE(
                    j.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    c,
                ),
            [t, c],
        )),
        (m = (0, f.yK)([eN.default], () => tp(E.map((e) => eN.default.getUser(e))), [E])),
        (g = (0, f.yK)([eN.default], () => p.map((e) => eN.default.getUser(e)), [p])),
        (I = tp((A = d.filter((e) => !p.includes(e.id) && !E.includes(e.id))))),
        (T = g.filter((e) => null != e && !E.includes(e.id))),
        (S = (0, f.bG)([tm.A], () => tm.A.getUserAffinitiesMap(), [])),
        (N = s.useMemo(() => (0, tg.L)(I, S, "GuildTooltip - nonBlockedUsers"), [I, S])),
        (y = s.useMemo(() => (0, tg.L)(_, S, "GuildTooltip - stageSpeakers"), [_, S])),
        (C = s.useMemo(() => (0, tg.L)(T, S, "GuildTooltip - streamUsers"), [T, S])),
        {
            voiceUsersToShow: N,
            stageSpeakers: y,
            numStageListeners: h,
            streamUsersToShow: C,
            embeddedActivitiesUsers: s.useMemo(() => (0, tg.L)(m, S, "GuildTooltip - embeddedActivitiesUsers"), [m, S]),
            hasActivity: _.length > 0 || A.length > 0 || T.length > 0 || m.length > 0,
        }),
        M = ik(em.H, R, O),
        P =
            0 === b.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eR.nM,
                      children: [
                          (0, r.jsx)(eh.q, { size: "lg", color: "currentColor", className: eR.RI }),
                          (0, r.jsx)(eI.Ay, { guildId: O, users: b, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eR.GZ,
                              children: [
                                  (0, r.jsx)(ep.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eE.E, {
                                      className: eR._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: D,
                                  }),
                              ],
                          }),
                      ],
                  }),
        x = ik(eg.F, L, O),
        U = ik(eA.k, w, O),
        { isMuted: k, muteConfig: G } = (0, f.cf)(
            [ed.Ay],
            () => ({ isMuted: ed.Ay.isMuted(O), muteConfig: ed.Ay.getMuteConfig(O) }),
            [O],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            P,
            M,
            x,
            U,
            k ? (0, r.jsx)(iG, { muteConfig: G, className: o()(eR.LM, { [eR.Sx]: null != M || null != x }) }) : null,
        ],
    });
}
function iV(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(eE.E, {
        className: eR.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case iw.B5.SUBMITTED:
                    return eO.intl.string(eO.t["9KFC98"]);
                case iw.B5.REJECTED:
                    return eO.intl.string(eO.t["TQY/Rd"]);
                case iw.B5.APPROVED:
                    return eO.intl.string(eO.t.WXHcq5);
                default:
                    return eO.intl.string(eO.t.fjHFC8);
            }
        })(t),
    });
}
function iB(e) {
    let { guild: t } = e,
        n = (0, ib.A)(t),
        i = id(t),
        s = null != i ? (0, r.jsx)(iV, { guildJoinRequestStatus: i }) : null,
        a = (0, r.jsx)(iF, { guild: t }),
        l = (0, f.bG)([iM.A], () => iM.A.isViewingRoles(t.id)),
        u = (0, i_.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(eR.nM, eR.Dl),
                children: [
                    n
                        ? (0, r.jsx)(iL.A, { disableBoostClick: !0, guild: t, className: eR.WX })
                        : (0, r.jsx)(iD.A, { guild: t, size: 20, className: eR.aL }),
                    (0, r.jsx)("span", { className: o()(eR.cN, eR.NT), children: t.name }),
                ],
            }),
            u
                ? (0, r.jsx)(eE.E, {
                      className: eR.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eO.intl.string(eO.t["2n0/Fk"]),
                  })
                : null,
            l
                ? (0, r.jsx)(eE.E, {
                      className: eR.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eO.intl.string(eO.t["5LwN89"]),
                  })
                : (s ?? a),
        ],
    });
}
function iH(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: a } = e,
        o = s.useMemo(
            () => (n ? null : (0, r.jsx)("div", { className: eR.A_, children: (0, r.jsx)(iB, { guild: t }) })),
            [n, t],
        );
    return (0, r.jsx)(ef.m, {
        __unsupportedReactNodeAsText: o,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: a,
    });
}
let ij = { analyticsSource: { page: ev.liQ.GUILD_CHANNEL, section: ev.JJy.CHANNEL_LIST, object: ev.ZSU.CHANNEL } };
function iY(e, t) {
    (0, tu.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("4512"),
            n.e("63897"),
            n.e("18320"),
            n.e("60361"),
            n.e("8516"),
            n.e("73589"),
            n.e("15249"),
            n.e("19397"),
            n.e("41816"),
            n.e("72888"),
            n.e("67485"),
            n.e("8802"),
            n.e("54518"),
            n.e("94898"),
            n.e("5959"),
            n.e("46461"),
            n.e("76090"),
            n.e("12289"),
            n.e("81857"),
            n.e("45650"),
            n.e("95700"),
            n.e("27660"),
            n.e("85484"),
            n.e("98848"),
            n.e("5067"),
            n.e("6432"),
            n.e("36407"),
            n.e("69134"),
            n.e("79705"),
            n.e("54081"),
            n.e("83928"),
            n.e("92702"),
            n.e("1271"),
            n.e("33957"),
            n.e("59204"),
            n.e("48628"),
            n.e("57006"),
            n.e("64422"),
            n.e("56386"),
            n.e("60389"),
            n.e("44710"),
            n.e("37261"),
            n.e("25812"),
            n.e("87845"),
            n.e("50862"),
            n.e("23531"),
            n.e("10859"),
            n.e("45970"),
            n.e("5007"),
            n.e("90427"),
            n.e("1472"),
            n.e("83852"),
            n.e("4974"),
            n.e("80186"),
            n.e("23924"),
            n.e("42205"),
            n.e("71091"),
            n.e("19402"),
            n.e("49681"),
            n.e("96382"),
            n.e("22687"),
            n.e("62052"),
            n.e("63202"),
            n.e("82596"),
            n.e("28367"),
            n.e("10471"),
            n.e("35429"),
            n.e("63232"),
            n.e("11301"),
            n.e("60235"),
            n.e("64827"),
            n.e("30938"),
            n.e("96643"),
            n.e("94493"),
            n.e("92789"),
            n.e("47834"),
            n.e("74016"),
            n.e("19551"),
            n.e("84569"),
            n.e("6338"),
            n.e("96811"),
            n.e("7743"),
            n.e("45959"),
            n.e("60658"),
            n.e("8304"),
            n.e("18573"),
            n.e("55936"),
            n.e("31988"),
            n.e("39667"),
            n.e("5812"),
            n.e("26073"),
            n.e("34303"),
            n.e("28866"),
            n.e("1368"),
            n.e("58038"),
            n.e("93159"),
            n.e("31716"),
            n.e("8751"),
            n.e("62931"),
            n.e("81987"),
            n.e("50417"),
            n.e("62465"),
            n.e("93103"),
            n.e("91763"),
            n.e("76602"),
            n.e("9233"),
            n.e("28229"),
            n.e("21921"),
            n.e("76418"),
            n.e("71210"),
            n.e("42724"),
            n.e("43437"),
            n.e("40258"),
            n.e("66495"),
            n.e("88342"),
            n.e("86127"),
            n.e("39970"),
            n.e("82263"),
            n.e("6174"),
            n.e("91146"),
            n.e("8555"),
            n.e("46070"),
            n.e("42451"),
            n.e("72789"),
            n.e("6949"),
            n.e("86814"),
            n.e("17249"),
            n.e("88599"),
            n.e("75842"),
            n.e("35027"),
            n.e("53917"),
            n.e("62422"),
            n.e("25949"),
            n.e("90365"),
            n.e("89088"),
            n.e("71273"),
            n.e("36863"),
            n.e("67861"),
            n.e("1518"),
            n.e("15186"),
            n.e("9640"),
            n.e("98765"),
            n.e("47626"),
            n.e("23354"),
            n.e("82644"),
            n.e("52548"),
            n.e("3589"),
            n.e("20590"),
            n.e("65437"),
            n.e("74810"),
            n.e("28083"),
            n.e("78453"),
            n.e("80830"),
            n.e("79745"),
            n.e("53984"),
            n.e("80854"),
            n.e("35395"),
            n.e("43780"),
            n.e("96194"),
            n.e("46844"),
            n.e("63235"),
            n.e("45413"),
            n.e("44571"),
            n.e("86672"),
            n.e("90664"),
            n.e("30788"),
            n.e("32756"),
            n.e("64850"),
            n.e("70104"),
            n.e("52617"),
            n.e("2564"),
            n.e("25246"),
            n.e("47417"),
            n.e("19558"),
            n.e("58946"),
            n.e("48330"),
            n.e("23995"),
            n.e("14285"),
            n.e("95752"),
            n.e("8362"),
            n.e("41678"),
            n.e("72401"),
            n.e("62875"),
            n.e("4744"),
            n.e("2698"),
            n.e("5500"),
            n.e("501"),
            n.e("73384"),
            n.e("82783"),
            n.e("86243"),
            n.e("32209"),
            n.e("39171"),
            n.e("37021"),
            n.e("78300"),
            n.e("87478"),
            n.e("83952"),
            n.e("44780"),
            n.e("5557"),
            n.e("59957"),
            n.e("95340"),
            n.e("62718"),
            n.e("89916"),
            n.e("90301"),
            n.e("49145"),
            n.e("60773"),
            n.e("92128"),
            n.e("9004"),
            n.e("8018"),
            n.e("92295"),
            n.e("68763"),
            n.e("15109"),
            n.e("99549"),
            n.e("29666"),
            n.e("58273"),
            n.e("19454"),
            n.e("20930"),
            n.e("74610"),
            n.e("26001"),
            n.e("16988"),
            n.e("30997"),
            n.e("14591"),
            n.e("52111"),
            n.e("28136"),
            n.e("57458"),
            n.e("59797"),
            n.e("93336"),
            n.e("60358"),
            n.e("87436"),
            n.e("16084"),
            n.e("1243"),
            n.e("75859"),
            n.e("43116"),
            n.e("27659"),
            n.e("15920"),
            n.e("68530"),
            n.e("3930"),
            n.e("44057"),
            n.e("3663"),
            n.e("87317"),
            n.e("10943"),
            n.e("66580"),
            n.e("78046"),
            n.e("80093"),
            n.e("38601"),
            n.e("73669"),
            n.e("7775"),
            n.e("22547"),
            n.e("60989"),
            n.e("82486"),
            n.e("45830"),
            n.e("61058"),
            n.e("50342"),
            n.e("33097"),
            n.e("3710"),
            n.e("77602"),
            n.e("10262"),
            n.e("95602"),
            n.e("46313"),
            n.e("5896"),
            n.e("69178"),
            n.e("29569"),
            n.e("36002"),
            n.e("43233"),
            n.e("41786"),
            n.e("91643"),
            n.e("63726"),
            n.e("71329"),
            n.e("34409"),
            n.e("56373"),
            n.e("83827"),
            n.e("42749"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("25961"),
            n.e("30501"),
            n.e("8364"),
            n.e("66147"),
            n.e("89541"),
            n.e("74337"),
            n.e("52823"),
            n.e("56967"),
            n.e("47011"),
            n.e("31203"),
            n.e("66913"),
            n.e("71719"),
            n.e("72847"),
            n.e("19690"),
            n.e("93767"),
            n.e("13848"),
            n.e("39214"),
            n.e("99108"),
            n.e("14878"),
            n.e("88307"),
            n.e("26508"),
            n.e("61347"),
            n.e("73091"),
            n.e("86692"),
            n.e("52695"),
            n.e("16237"),
            n.e("16373"),
            n.e("81398"),
            n.e("24484"),
            n.e("44943"),
            n.e("32347"),
            n.e("8458"),
            n.e("11810"),
            n.e("48111"),
            n.e("90152"),
            n.e("87973"),
            n.e("57197"),
            n.e("14863"),
            n.e("84951"),
            n.e("71167"),
            n.e("12390"),
            n.e("13446"),
            n.e("61309"),
            n.e("70284"),
            n.e("94529"),
            n.e("30313"),
            n.e("93305"),
            n.e("21300"),
            n.e("17699"),
            n.e("57032"),
            n.e("45322"),
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
let iW = s.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: i,
            onDragEnd: a,
            route: l,
            guild: u,
            animatable: c,
            selected: _ = !1,
            unread: f = !1,
            mediaState: h,
            unavailable: p = !1,
            badge: g = 0,
            isMentionLowImportance: A,
            contextMenu: I = iY,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: y = !0,
            guildJoinRequestStatus: C,
            height: v,
            "aria-setsize": O,
            "aria-posinset": R,
        } = e,
        { id: b, parentId: D } = t,
        L = e.upperBadge ?? (p ? (0, z.em)() : null != h ? (0, z.oi)(h) : void 0),
        w = e.lowerBadge ?? void 0;
    null == w && g > 0
        ? (w =
              (0, z.wN)(
                  g,
                  A ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == w && null != C && (w = (0, z.eW)({ guildJoinRequestStatus: C }) ?? void 0);
    let M = e.lowerBadgeSize ?? { width: (0, tl.o6)(g) },
        [{ dragging: P }, x] = (0, nK.i)({
            type: eX.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                a?.(), (0, nZ.um)(e$.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        U = (0, d.Vd)(b ?? ev.dJq, null != D ? 2 : 1),
        [k, V] = s.useState(!1),
        B = !N && k,
        [j, Y] = s.useState(!1),
        [$, q] = s.useState(!1),
        [X] = s.useState(() => new E.J_(70, () => q(!0))),
        Q = (0, iO.nr)() && !iN.Fr;
    s.useEffect(() => () => X.cancel(), [X]);
    let J = s.useCallback(() => {
            null != l ? (0, iv.pX)(l, { state: ij }) : (0, Z.u)(b, { state: ij });
        }, [b, l]),
        ee = s.useCallback(() => {
            if (null != l || null == u || p || !y) return;
            let e = (0, iC.W)(u.id);
            null != e && H.A.preload(u.id, e);
        }, [l, u, p, y]),
        et = (0, iy.bG)([eK.Ay], () => eK.Ay.isCurrentUserGuest(b)),
        en = s.useCallback(
            (e) => {
                null == u || et || I(e, u);
            },
            [u, I, et],
        ),
        ei = s.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != D && document.querySelector(`[aria-owns=folder-items-${D}]`)?.focus();
            },
            [D],
        ),
        er = s.useCallback(
            (e) => {
                e ? X.delay() : (X.cancel(), q(!1));
            },
            [X],
        );
    function es() {
        N || V(!0);
    }
    function ea() {
        N || V(!1);
    }
    let eo = s.useCallback(
            (e) => {
                n?.(b, e);
            },
            [b, n],
        ),
        el = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE);
    if (null == u) return null;
    let eu = u.name;
    if (
        (g > 0
            ? (eu = eO.intl.formatToPlainString(eO.t["/uzRss"], { guildName: u.name, mentions: g }))
            : f && (eu = eO.intl.formatToPlainString(eO.t.lzqe42, { guildName: u.name })),
        null != h)
    ) {
        let e = [];
        h.activeEvent && e.push(eO.intl.string(eO.t.dHvJ2p)),
            h.liveStage && e.push(eO.intl.string(eO.t.OO7ndG)),
            h.screenshare && e.push(eO.intl.string(eO.t.wsHMZ7)),
            h.video && e.push(eO.intl.string(eO.t.BrLCS0)),
            h.audio && e.push(eO.intl.string(eO.t.jPBhKy)),
            h.activity && e.push(eO.intl.string(eO.t.Y3Gii5)),
            e.length > 0 && (eu = `${eu}, ${e.join(" ")}`);
    }
    let ec = (0, r.jsx)(iR, {
            guild: u,
            show: $,
            active: _,
            onAnimationStart: function () {
                Y($);
            },
            onAnimationRest: function () {
                $ || Y(!1);
            },
        }),
        ed = Q
            ? (0, r.jsx)(F.j, {
                  ariaLabel: eu,
                  name: u.name,
                  onClick: J,
                  onMouseEnter: es,
                  onMouseLeave: ea,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, tj.Iv)(u, 2 * el, B && c, !0),
                  selected: _ || B,
                  ...U,
                  "aria-setsize": O,
                  "aria-posinset": R,
                  "aria-selected": _,
              })
            : (0, r.jsx)(G.Q, {
                  selected: _,
                  children: (0, r.jsx)("div", {
                      ref: S
                          ? (e) => {
                                x(e);
                            }
                          : void 0,
                      "data-dnd-name": u.name,
                      "data-drop-hovering": $,
                      children: (0, r.jsx)(F.j, {
                          ariaLabel: eu,
                          name: u.name,
                          onClick: J,
                          onMouseEnter: es,
                          onMouseLeave: ea,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, tj.Iv)(u, 2 * el, B && c, !0),
                          selected: _ || B,
                          ...U,
                          "aria-setsize": O,
                          "aria-posinset": R,
                          "aria-selected": _,
                      }),
                  }),
              }),
        e_ = $ || j ? ec : ed,
        ef = (0, r.jsx)(t2, { children: (0, r.jsx)(n9, {}) }),
        eh = Q
            ? (0, r.jsx)(ta.animated.div, {
                  ref: S
                      ? (e) => {
                            x(e);
                        }
                      : void 0,
                  "data-dnd-name": u.name,
                  style: { scale: null == v ? 1 : v },
                  "data-drop-hovering": $,
                  className: o()(it.rN, { [it.p9]: N, [it.oR]: $, [it.wH]: $ || _ }),
                  children: (0, r.jsx)(G.Q, {
                      selected: !0,
                      upperBadge: L,
                      lowerBadge: w,
                      lowerBadgeSize: M,
                      children: e_,
                  }),
              })
            : (0, r.jsx)(ta.animated.div, {
                  style: { scale: null == v ? 1 : v },
                  className: o()(it.rN, { [it.p9]: N, [it.oR]: $, [it.wH]: $ || _ }),
                  "data-drop-hovering": $,
                  children: (0, r.jsx)(G.Q, {
                      selected: _,
                      upperBadge: L,
                      lowerBadge: w,
                      lowerBadgeSize: M,
                      children: e_,
                  }),
              });
    return (0, r.jsxs)(K.c, {
        ref: eo,
        children: [
            (0, r.jsx)(W.A, { overlay: !0, hovered: !P && B, selected: !P && _, unread: !P && f }),
            (0, r.jsx)(iH, { guild: u, disabled: N, isDragging: P, children: P ? ef : eh }),
            S ? (0, r.jsx)(t0, { name: u.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iK = n(182240);
let iz = s.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        a = (0, f.bG)([ez.A], () => ez.A.getGuild(i)),
        o = id(a),
        l = (0, f.bG)([e5.A], () => e5.A.isFocused()),
        u = (0, f.bG)([nH.A], () => nH.A.isUnavailable(i)),
        c = (0, q.A)((e) => e.guildId),
        d = iS(i),
        {
            badge: _,
            unread: h,
            isMentionLowImportance: p,
        } = (0, f.cf)([el.default], () => ({
            badge: el.default.getMentionCount(i),
            isMentionLowImportance: el.default.getIsMentionLowImportance(i),
            unread: el.default.hasUnread(i),
        })),
        E = (0, i_.Ig)(a) && 0 === _,
        m = s.useMemo(
            () =>
                null != n
                    ? n
                    : E
                      ? (0, r.jsx)("div", {
                            className: iK.j,
                            children: (0, r.jsx)(il.E, {
                                size: "custom",
                                color: "currentColor",
                                className: iK.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, E],
        );
    return (0, r.jsx)(iW, {
        ...e,
        guild: a,
        unavailable: u,
        animatable: l,
        selected: c === i,
        badge: _,
        isMentionLowImportance: p,
        lowerBadge: m,
        unread: h,
        mediaState: d,
        guildJoinRequestStatus: o,
    });
});
var i$ = n(922016),
    iq = n(534514),
    iZ = n(821609),
    iX = n(339350),
    iQ = n(475743),
    iJ = n(624458),
    i0 = n(408213),
    i1 = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    i2 = n(928568);
function i3(e, t) {
    (0, tu.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function i6(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, f.bG)([ic.A], () => ic.A.getRequest(n)),
        s = (0, f.bG)([ic.A], () => ic.A.getJoinRequestGuild(n), [n]),
        a = (0, f.bG)([e5.A], () => e5.A.isFocused()),
        o = (0, f.bG)([eQ.A], () => eQ.A.getGuildId());
    return null == s
        ? null
        : (0, r.jsx)(iW, {
              guildNode: t,
              guild: s,
              animatable: a,
              draggable: !1,
              selected: n === o,
              preloadOnClick: !1,
              contextMenu: i3,
              lowerBadge:
                  i?.applicationStatus === iw.B5.REJECTED
                      ? (0, z.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: ev.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var i4 = n(785439);
function i5(e) {
    let { onActivate: t, children: n } = e,
        i = s.useRef(null),
        a = (0, f.bG)([ic.A], () => ic.A.hasJoinRequestCoackmark()),
        o = s.useCallback(() => {
            i0.Ay.clearCoachmark();
        }, []),
        l = (0, iQ.A)(a),
        u = s.useRef(null);
    return (
        s.useEffect(() => {
            a && a !== l && (t(), u.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [u, a, l, t]),
        (0, r.jsxs)("div", {
            className: i4.kL,
            children: [
                (0, r.jsx)(i$.Y, {
                    ref: u,
                    targetElementRef: i,
                    shouldShow: a,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: i4.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: i4.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: i4.q3,
                                            children: [
                                                (0, r.jsx)(iq.D, {
                                                    variant: "heading-md/medium",
                                                    children: eO.intl.string(eO.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(eE.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eO.intl.string(eO.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(iZ.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eO.intl.string(eO.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: o,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: i4.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: i4.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function i7(e) {
    let { onActivate: t } = e,
        [n, i] = s.useState(!1),
        a = (0, f.bG)([eQ.A], () => eQ.A.getGuildId()),
        o = (0, f.bG)([ic.A], () => ic.A.hasFetchedRequestToJoinGuilds),
        l = (0, i2.A)(),
        u = (0, iQ.A)(a),
        c = s.useMemo(() => {
            let e = (0, eX.xW)({
                folderId: i1.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eO.intl.string(eO.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of l) e.children.push((0, eX.EL)(t, e.id));
            return e;
        }, [l, n]);
    s.useEffect(() => {
        n && !o && iJ.A.fetchRequestToJoinGuilds();
    }, [n, o]);
    let d = null != a && l.includes(a);
    return (s.useEffect(() => {
        !n && d && u !== a && i(!0);
    }, [n, d, u, a]),
    0 === l.length)
        ? null
        : (0, r.jsx)(i5, {
              onActivate: t,
              children: (0, r.jsx)(is, {
                  folderNode: c,
                  expanded: n,
                  selected: d,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), i0.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: i4.rH,
                      children: (0, r.jsx)(iX.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eX.PJ.GUILD
                          ? null
                          : (0, r.jsx)(i6, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function i8(e) {
    let { guildId: t } = e,
        n = s.useMemo(() => (0, eX.EL)(t), [t]),
        i = (0, f.bG)([ez.A], () => ez.A.getGuild(t)),
        a = (0, f.bG)([e5.A], () => e5.A.isFocused()),
        o =
            t ===
            (0, q.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        l = iS(t);
    return null == i
        ? null
        : (0, r.jsx)(iW, { guildNode: n, guild: i, animatable: a, selected: o, draggable: !1, mediaState: l });
}
var i9 = n(803921);
let re = (0, D.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("98594"),
                n.e("19397"),
                n.e("81154"),
                n.e("66622"),
                n.e("54518"),
                n.e("7927"),
                n.e("7580"),
                n.e("91763"),
                n.e("76602"),
                n.e("28229"),
                n.e("43437"),
                n.e("39970"),
                n.e("72789"),
                n.e("17249"),
                n.e("62422"),
                n.e("82644"),
                n.e("35321"),
                n.e("50033"),
                n.e("44780"),
                n.e("90301"),
                n.e("15109"),
                n.e("59466"),
                n.e("75133"),
                n.e("28850"),
                n.e("27659"),
                n.e("60003"),
                n.e("59373"),
                n.e("85802"),
                n.e("65200"),
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
    rt = (0, eq.isWindows)() ? 4 : 12 * !(0, eq.isMac)();
function rn(e) {
    return e.startsWith(ev.BVt.GUILD_DISCOVERY) || e.startsWith(ev.BVt.GLOBAL_DISCOVERY);
}
class ri {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = s.createRef();
    nodeRefs = {};
    timeout = new E.Ep();
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
            (null == e && rn(window.location.pathname)) ||
            e === ev.sFm.SERVER_DISCOVERY_BADGE ||
            e === ev.sFm.E3_SERVER_DISCOVERY_BADGE
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
        let { iconTotalSize: i, badgeVisibleBuffer: r, heightBeforeGuilds: s, bottomInset: a } = this.sizes,
            o = this.scrollerRef.current;
        if (null == o) return !1;
        let l = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (l < 0) return !1;
        let u = i * l + s,
            c = o.getScrollerState();
        return (!t && !!(u >= c.scrollTop)) || (!!t && !!(u + i + r <= c.scrollTop + c.offsetHeight - a));
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
                      let s = r.getBoundingClientRect(),
                          a = s.top - n;
                      return a + s.height > 0 && a < t;
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
    _handleScrollDebounced = u().debounce(() => {
        let e = this.scrollerRef.current;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState();
        y.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = u().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function rr(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        a = (0, P.A)("TopSection"),
        { isExperimentEnabled: o } = (0, M.TW)("TopSection"),
        l = (0, f.bG)([J.A], () => null != J.A.getVoiceChannelId()),
        u = (0, g.useHasAnyModalOpen)(),
        c = (0, L.Ay)((e) => e.postConnectionOpen),
        [d, _] = (0, w.kn)(c && o && !l && !u ? [h.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        p = d === h.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [E] = (0, w.kn)(p ? [h.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        m = E === h.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        A = s.useRef(!1),
        I = m && a;
    s.useEffect(() => {
        I && !A.current && n(), (A.current = I);
    }, [n, I]);
    let T = (0, f.yK)([ez.A, eK.Ay], () => ez.A.getGuildIds().filter((e) => eK.Ay.isCurrentUserGuest(e))),
        S = i.concat(T),
        { entrypoint: N } = (0, ej.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nk, {}),
            N === ej.RK.SERVER_RAIL_TOP && (0, r.jsx)(re, {}),
            a ? (0, r.jsx)(eV, { shouldShowIntroPopover: m, markIntroPopoverAsDismissed: _ }) : null,
            !t && (0, r.jsx)(tb, {}),
            S.map((e) => (0, r.jsx)(i8, { guildId: e }, e)),
            (0, r.jsx)(i7, { onActivate: n }),
        ],
    });
}
function rs(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: s, lurkingGuildIds: a } = e,
        [o] = (0, f.yK)([e$.Ay], () => {
            let e = e$.Ay.getGuildsTree();
            return [e, e.version];
        }),
        l = o.getRoots(),
        u = (0, f.yK)([eW.A], () => eW.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(nn, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.B, {
                role: "group",
                "aria-label": eO.intl.string(eO.t["7hB4kg"]),
                gap: "xs",
                children: l.map((e, t) => s(e, t, l.length)),
            }),
            u,
            (0, r.jsx)(nW, {}),
            i ? null : (0, r.jsx)(t7, { disableTooltip: a.length > 0, lastTargetNode: l[l.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tk, {}),
        ],
    });
}
function ra(e) {
    var t;
    let { disableAppDownload: n = eq.isPlatformEmbedded, isOverlay: i = !1, className: a, themeOverride: l } = e,
        [u] = (0, f.yK)([e$.Ay], () => {
            let e = e$.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, f.bG)([eH.A], () => eH.A.lurkingGuildIds()),
        h = s.useMemo(() => (i ? [] : _), [_, i]),
        p = (0, f.bG)([b.A], () => b.A.isFullscreenInContext()),
        { isSorting: g, startSorting: A, stopSorting: y } = (0, eZ.A)(),
        v = s.useRef(!1),
        [D] = s.useState(() => new E.Ep()),
        L = s.useRef(null),
        w = s.useRef(null),
        { ref: M, ...x } = (0, d.$y)(),
        U = (0, I.R7)(),
        [k, G] = s.useState(!1),
        F = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE),
        V = (0, T.r)(m.A.space.SPACE_XS),
        B = (0, P.A)("GuildsBar"),
        { pathname: H } = (0, c.zy)(),
        { entrypoint: j } = (0, ej.X8)({ location: "GuildsBar" }),
        Y = +!!B + +(j === ej.RK.SERVER_RAIL_TOP),
        W = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = F + V),
                    {
                        iconSize: F,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + V),
                        heightBeforeGuilds: rt + t + Y * e,
                        bottomInset: 16,
                    });
            return new ri(
                u,
                G,
                ev.tEg,
                () => {
                    L.current?.calculateState(), w.current?.calculateState();
                },
                n,
            );
        }, [F, V, u, Y]);
    s.useEffect(
        () => (
            W.setResizeObserver(),
            () => {
                W.clearResizeObserver();
            }
        ),
        [W],
    ),
        s.useEffect(() => {
            let e = () => {
                L.current?.calculateState(), w.current?.calculateState();
            };
            return el.default.addChangeListener(e), () => el.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: K } = (0, R.Ay)(O.A.GUILDS_LIST),
        z = rn(H);
    (0, C.u5)(() => {
        if (!v.current && 0 !== u.size) {
            if (!z) {
                let { scrollTop: e } = eY.A.getGuildListDimensions();
                W.scrollTo({ to: e, animate: !1 });
            }
            return (v.current = !0), () => D.stop();
        }
    }),
        s.useEffect(() => {
            if ((W.setGuildsTree(u), v.current || 0 === u.size)) return;
            let e = q.A.getState().guildId;
            W.scrollToGuild(e, !1);
            let t = null;
            return q.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), W.scrollToGuild(t, !1));
            });
        }, [u, W]);
    let $ = s.useCallback(() => {
        W.scrollTo({ to: 0, animate: !1 });
    }, [W]);
    (t = W.scrollToGuild),
        s.useEffect(() => {
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
    let Z = s.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case eX.PJ.FOLDER:
                        return (0, r.jsx)(
                            io,
                            {
                                folderNode: t,
                                setNodeRef: W.setNodeRef,
                                draggable: !0,
                                sorting: g,
                                onDragStart: A,
                                onDragEnd: y,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case eX.PJ.GUILD:
                        return (0, r.jsx)(
                            iz,
                            {
                                guildNode: t,
                                setRef: W.setNodeRef,
                                draggable: !0,
                                sorting: g,
                                onDragStart: A,
                                onDragEnd: y,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [A, y, g, W.setNodeRef],
        ),
        X = (0, r.jsx)(n_, { selected: z, className: i9.ai }),
        Q = j === ej.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(R.f5, {
        value: K,
        children: (0, r.jsx)(S.N, {
            theme: l,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: o()(i9.iE, a, e, { [i9.R]: p }),
                    "aria-label": eO.intl.string(eO.t.PjnF2t),
                    children: [
                        (0, r.jsx)(ti, {
                            ref: L,
                            isVisible: W.isItemVisible,
                            onJumpTo: W.handleJumpToGuild,
                            className: i9.Xl,
                            barClassName: i9.Sh,
                        }),
                        (0, r.jsx)("ul", {
                            ref: M,
                            ...x,
                            ...U,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: i9.B2,
                            children: (0, r.jsxs)("div", {
                                className: i9.qD,
                                children: [
                                    (0, r.jsxs)(N.zC, {
                                        className: o()({ [i9.XG]: !0, [i9.qw]: k }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: W.scrollerRef,
                                        onScroll: W.handleScroll,
                                        children: [
                                            (0, r.jsx)(rr, { scrollToTop: $, lurkingGuildIds: h }),
                                            (0, r.jsx)(nF, {}),
                                            (0, r.jsx)(rs, {
                                                guildDiscoveryButton: X,
                                                disableAppDownload: n,
                                                isOverlay: i,
                                                renderTreeNode: Z,
                                                lurkingGuildIds: h,
                                            }),
                                        ],
                                    }),
                                    Q &&
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsx)(nF, { fullWidth: !0 }),
                                                (0, r.jsx)("div", { className: i9.JU, children: (0, r.jsx)(re, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(ti, {
                            reverse: !0,
                            ref: w,
                            isVisible: W.isItemVisible,
                            onJumpTo: W.handleJumpToGuild,
                            className: o()(i9.LZ, { [i9.CH]: !i && !Q, [i9.c0]: !i && Q }),
                            barClassName: i9.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let ro = s.memo(
    function (e) {
        let t = (0, v.A)("guildsnav");
        return (0, r.jsx)(d.hD, { navigator: t, children: (0, r.jsx)(ra, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, p.A)(e, t),
);
