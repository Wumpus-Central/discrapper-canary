"use strict";
n.d(t, { A: () => ru });
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
    h = n(17928),
    f = n(554146),
    E = n(52133),
    p = n(451988),
    m = n(661531),
    g = n(192308),
    A = n(331322),
    I = n(312138),
    T = n(602853),
    S = n(43990),
    N = n(689175),
    C = n(951001),
    y = n(964486),
    O = n(260762),
    R = n(793574),
    v = n(688810),
    b = n(313961),
    L = n(268218),
    D = n(558845),
    w = n(131607),
    P = n(313281),
    M = n(832275);
n(321073);
var x = n(43105),
    U = n(857250),
    k = n(691540),
    G = n(862328),
    V = n(67811),
    F = n(27232),
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
    es = n(5180),
    ea = n(695633),
    eo = n(152007),
    el = n(458294),
    eu = n(576705),
    ec = n(568548),
    ed = n(543465),
    e_ = n(780645),
    eh = n(990078),
    ef = n(451394),
    eE = n(597601),
    ep = n(834730),
    em = n(983851),
    eg = n(183623),
    eA = n(323384),
    eI = n(104171),
    eT = n(63995),
    eS = n(518769),
    eN = n(287809),
    eC = n(607567),
    ey = n(403362),
    eO = n(652215),
    eR = n(375708),
    ev = n(621035);
function eb(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: ev.nM,
              children: [
                  (0, r.jsx)(e, { className: ev.RI, color: "currentColor" }),
                  (0, r.jsx)(eI.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eL() {
    let e = (0, h.yK)([en.A, Q.A], () =>
            et.default
                .keys(en.A.getFavoriteChannels())
                .map((e) => Q.A.getChannel(e))
                .filter(ey.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eO.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eO.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        s = (0, h.yK)(
            [eC.Ay],
            () =>
                u().flatMap(n, (e) =>
                    eC.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        a = (0, h.yK)([eT.A], () =>
            u().flatMap(i, (e) =>
                eT.A.getMutableParticipants(e, eS.ip.SPEAKER)
                    .filter((e) => e.type === eS.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        o = (0, h.bG)([eT.A], () => {
            let e = 0;
            for (let t of i) e += eT.A.getParticipantCount(t, eS.ip.AUDIENCE);
            return e;
        }),
        l = (0, h.yK)(
            [X.A],
            () =>
                X.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, h.yK)([j.Ay], () => {
            let e = j.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        d = (0, h.yK)([eN.default], () => c.map((e) => eN.default.getUser(e)), [c]),
        _ = (0, h.yK)([eN.default], () => l.map((e) => eN.default.getUser(e)), [l]),
        f = eb(
            em.H,
            s.filter((e) => !l.includes(e.id) && !c.includes(e.id)),
        ),
        E =
            0 === a.length
                ? null
                : (0, r.jsxs)("div", {
                      className: ev.nM,
                      children: [
                          (0, r.jsx)(ef.q, { size: "lg", color: "currentColor", className: ev.RI }),
                          (0, r.jsx)(eI.Ay, { guildId: void 0, users: a, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: ev.GZ,
                              children: [
                                  (0, r.jsx)(eE.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(ep.E, {
                                      className: ev._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: o,
                                  }),
                              ],
                          }),
                      ],
                  }),
        p = eb(
            eg.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        m = eb(eA.k, d);
    return (0, r.jsxs)(r.Fragment, { children: [E, f, p, m] });
}
function eD() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: o()(ev.nM, ev.Dl),
                children: (0, r.jsx)("span", { className: o()(ev.cN, ev.NT), children: eR.intl.string(eR.t.wMWyci) }),
            }),
            (0, r.jsx)(eL, {}),
        ],
    });
}
function ew(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = s.useMemo(() => (0, r.jsx)("div", { className: ev.A_, children: (0, r.jsx)(eD, {}) }), []);
    return (0, r.jsx)(eh.m, {
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
    eM = n(49999),
    ex = n(202541),
    eU = n(335993),
    ek = n(959495),
    eG = n(988572);
let eV = { analyticsSource: { page: eO.liQ.GUILD_CHANNEL, section: eO.JJy.CHANNEL_LIST, object: eO.ZSU.CHANNEL } };
function eF(e) {
    let t,
        i,
        a,
        o,
        l,
        u,
        c,
        _,
        f,
        E,
        p,
        m,
        { shouldShowIntroPopover: A, markIntroPopoverAsDismissed: I } = e,
        T = (0, d.Vd)("favorites"),
        { favoriteAdded: S, clearFavoriteAdded: N } = (0, P.CJ)(),
        C = s.useRef(null),
        { analyticsLocations: y } = (0, v.Ay)(R.A.FAVORITES_GUILD_BUTTON),
        [O, b] = s.useState(!1),
        L = (0, e_.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: D,
            favoriteGuildMuted: w,
            favoriteChannels: M,
        } = (0, h.cf)([en.A], () => ({
            favoriteGuildEnabled: en.A.favoriteGuildEnabled,
            favoriteChannels: en.A.getFavoriteChannels(),
            favoriteGuildMuted: en.A.favoriteGuildMuted,
        })),
        eh = (0, h.bG)([J.A], () => J.A.getChannelId(eO.YYv)),
        ef = (0, h.bG)([Q.A], () => Q.A.getChannel(eh)),
        eE = (0, q.A)((e) => e.guildId),
        ep = (0, es.ai)(eE),
        { badge: em, unread: eg } = (0, h.cf)([ea.A, Q.A, el.default, eo.A, eu.A, ec.Ay, ed.Ay], () => {
            let e = et.default.keys(M),
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
            ((i = null != (t = (0, h.bG)([J.A], () => J.A.getVoiceChannelId())) && null != M[t]),
            (a = (0, h.bG)([X.A], () => {
                if (!i) return !1;
                let e = X.A.getCurrentUserActiveStream();
                return null != e && null != M[e.channelId];
            })),
            (o = (0, h.bG)([X.A], () => X.A.getAllApplicationStreams().some((e) => null != M[e.channelId]))),
            (l = (0, h.bG)([ee.A], () => i && null != t && ee.A.hasVideo(t), [i, t])),
            (u = (0, h.yK)([j.Ay], () =>
                et.default.keys(M).reduce((e, t) => (e.push(...j.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (c = (0, h.bG)([j.Ay], () =>
                Array.from(j.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, W.H)(t);
                    return null != n && null != M[n];
                }),
            )),
            (_ = u.length > 0),
            (f = !1),
            (E = !1),
            (p = !1),
            (m = !1),
            i ? ((f = !l), (E = l), (p = a), (m = c)) : ((p = o), (m = _)),
            (0, $.oi)({ audio: f, video: E, screenshare: p, liveStage: !1, isCurrentUserConnected: i, activity: m })),
        eI = em > 0 ? (0, $.wN)(em) : null,
        eT = s.useRef(!1),
        { hasAccess: eS } = (0, P.TW)("FavoritesButton"),
        eN = s.useCallback(
            (e, t) => {
                (eT.current = !0), I(e, t);
            },
            [I],
        ),
        eC = s.useCallback(
            (e) => {
                e && ((0, er.mv)("intro_dc"), (0, Z.u)(eO.YYv)),
                    eS
                        ? (D || (0, ei.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, g.openModalLazy)(async () => {
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
                        : e && (0, z.A)({ subscriptionTier: ex.pe.TIER_2, analyticsLocations: y }),
                    eN(eM.i.TAKE_ACTION);
            },
            [eN, D, eS, y],
        );
    return (
        s.useEffect(() => {
            A && (eT.current = !1);
        }, [A]),
        s.useEffect(
            () => () => {
                A && !eT.current && eN(eM.i.AUTO_DISMISS, !0);
            },
            [eN, A],
        ),
        s.useEffect(() => {
            if (S) {
                let e = (0, U.o)(eR.intl.string(eR.t["4tSWQg"]), eP.Ck.FAVORITE);
                (0, k.P0)(e);
                let t = setTimeout(N, e.options?.duration ?? eP.jg.duration);
                return () => {
                    N(), clearTimeout(t);
                };
            }
        }, [S, N]),
        (0, r.jsxs)(K.c, {
            children: [
                (0, r.jsx)(Y.A, { overlay: !0, selected: ep, hovered: O, unread: eg && !w }),
                (0, r.jsx)(ew, {
                    children: (0, r.jsx)(G.Q, {
                        selected: !0,
                        upperBadge: eA,
                        lowerBadge: eI,
                        children: (0, r.jsx)("div", {
                            ref: C,
                            children: (0, r.jsx)(V.j, {
                                ...T,
                                ariaLabel: eR.intl.formatToPlainString(eR.t["/uzRss"], {
                                    guildName: eR.intl.string(eR.t.wMWyci),
                                    mentions: em,
                                }),
                                "aria-selected": ep,
                                to: { pathname: eO.BVt.CHANNEL(eO.YYv, eh), state: eV },
                                selected: ep || O,
                                onClick: () => {
                                    A && eC(!1);
                                },
                                onMouseEnter: () => b(!0),
                                onMouseLeave: () => b(!1),
                                onMouseDown: function () {
                                    null != ef && H.A.preload(ef.guild_id, ef.id);
                                },
                                onContextMenu: L,
                                children: (0, r.jsx)(F.G, {
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
                        targetElementRef: C,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: eG.A, type: "image", aspectRatio: "16/9" },
                        title: eR.intl.string(eU.default["bu/mLv"]),
                        body: eR.intl.string(eU.default["/x2jT7"]),
                        onRequestClose: () => eN(eM.i.USER_DISMISS),
                        actions: [
                            {
                                icon: B.t,
                                text: eS ? eR.intl.string(eU.default["0lHa0Z"]) : eR.intl.string(eU.default["0nZZEk"]),
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
class e6 extends h.Ay.PersistedStore {
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
        (e === eO.sFm.SERVER_DISCOVERY_BADGE && !e4.hasViewed(eO.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== e8 && e !== e9 && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tn = (0, e7.L_)((e, t, n) => ["null", ...t, ...e, e9, eO.sFm.E3_SERVER_DISCOVERY_BADGE, e8]),
    ti = s.forwardRef(function (e, t) {
        let n = (0, h.yK)([ez.Ay, e1.A, el.default], () =>
                tn(ez.Ay.getGuildFolders(), e1.A.getUnreadPrivateChannelIds(), el.default.getStoreChangeSentinel()),
            ),
            i = (0, h.bG)([e5.A], () => e5.A.isFocused()),
            s = (0, h.bG)([e0.A], () => e0.A.getExpandedFolders());
        return (0, r.jsx)(eJ.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: te,
            textUnread: eR.intl.string(eR.t.y2b7CA),
            textMention: eR.intl.string(eR.t.y2b7CA),
            isMentioned: tt,
            animate: i,
            expandedFolders: s,
        });
    });
n(667532);
var tr = n(868285),
    ts = n(763827),
    ta = n(580929),
    to = n(778712),
    tl = n(812993),
    tu = n(442433),
    tc = n(620982),
    td = n(571694),
    t_ = n(47167),
    th = n(598104),
    tf = n(994500);
function tE(e, t) {
    return e
        .filter((e) => (0, ey.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tf.A.isBlockedOrIgnored(e.id)));
}
function tp(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tf.A.isBlockedOrIgnored(e)));
}
var tm = n(427358),
    tg = n(907459),
    tA = n(145408);
function tI(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: ev.nM,
              children: [
                  (0, r.jsx)(t, { className: ev.RI, color: "currentColor" }),
                  (0, r.jsx)(eI.Ay, { users: n, max: 6 }),
              ],
          });
}
function tT(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(ep.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eR.intl.string(eR.t.fpKdS1),
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
        f,
        E,
        p,
        m,
        { channel: g } = e,
        A = g.id,
        {
            activityUsers: I,
            streamUsers: T,
            voiceUsers: S,
        } = ((t = g.id),
        (n = (0, h.yK)([tf.A], () => tf.A.getBlockedOrIgnoredIDs())),
        (i = (0, h.bG)([tm.A], () => tm.A.getUserAffinitiesMap(), [])),
        (a = (0, h.yK)(
            [j.Ay, eN.default],
            () =>
                j.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eN.default.getUser(e)),
            [t],
        )),
        (l = s.useMemo(() => tE(a, n), [a, n])),
        (u = s.useMemo(() => (0, tg.L)(l, i, "DirectMessageTooltip - activityUsers"), [l, i])),
        (c = (0, h.yK)(
            [X.A, eN.default],
            () =>
                tE(
                    X.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => eN.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (d = s.useMemo(() => tE(c, n), [c, n])),
        (_ = s.useMemo(() => (0, tg.L)(d, i, "DirectMessageTooltip - activityUsers"), [d, i])),
        (f = s.useMemo(() => _.filter((e) => !u.some((t) => t.id === e.id)), [_, u])),
        (E = (0, h.yK)(
            [eC.Ay],
            () =>
                tE(
                    eC.Ay.getVoiceStatesForChannel(g).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [g, n],
        )),
        (p = s.useMemo(() => tE(E, n), [E, n])),
        (m = s.useMemo(() => (0, tg.L)(p, i, "DirectMessageTooltip - voiceUsers"), [p, i])),
        {
            voiceUsers: s.useMemo(
                () => m.filter((e) => !u.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [m, u, _],
            ),
            streamUsers: f,
            activityUsers: u,
        }),
        N = (0, r.jsx)(tI, { icon: em.H, users: S }),
        C = (0, r.jsx)(tI, { icon: eg.F, users: T }),
        y = (0, r.jsx)(tI, { icon: eA.k, users: I }),
        { isMuted: O, muteConfig: R } = (0, h.cf)(
            [ed.Ay],
            () => ({ isMuted: ed.Ay.isChannelMuted(null, A), muteConfig: ed.Ay.getChannelMuteConfig(null, A) }),
            [A],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            C,
            y,
            O ? (0, r.jsx)(tT, { muteConfig: R, className: o()(ev.LM, { [ev.Sx]: null != N || null != C }) }) : null,
        ],
    });
}
function tN(e) {
    let { channel: t } = e,
        n = (0, t_.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: o()(ev.nM, ev.Dl),
                children: (0, r.jsx)("span", { className: o()(ev.cN, ev.NT), children: n }),
            }),
            (0, r.jsx)(tS, { channel: t }),
        ],
    });
}
function tC(e) {
    let { channel: t, children: n } = e,
        i = (0, t_.Ay)(t),
        a = s.useMemo(
            () =>
                (0, r.jsx)(ep.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: ev.A_,
                    children: (0, r.jsx)(tN, { channel: t }),
                }),
            [t],
        );
    return (0, r.jsx)(eh.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let ty = { friction: 28, tension: 600 };
function tO(e) {
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
class tR extends s.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new ta.Controller({ scale: 0, height: 0, opacity: 0, config: tO }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !e5.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tO })
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
            t.update({ immediate: !e5.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tO }).start().then(e),
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
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, td.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eO.rbe.DM ? eN.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, tu.L3)(e, async () => {
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
                audio: s,
                video: a,
                stream: o,
                isCurrentUserInThisDMCall: l,
                isIncomingCall: u,
                isOngoingCall: c,
                unread: d,
                treeItemProps: _,
            } = this.props,
            { hovered: h, animating: f } = this.state,
            E = e.isMultiUserDM() && null == e.icon,
            p = () =>
                (0, r.jsx)(V.j, {
                    to: eO.BVt.CHANNEL(eO.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || h,
                    ariaLabel:
                        null != t
                            ? [
                                  eR.intl.formatToPlainString(eR.t.hKarnZ, { name: t, mentions: i }),
                                  u ? eR.intl.string(eR.t["fk1/bX"]) : c ? eR.intl.string(eR.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: E ? void 0 : this.getChannelIcon(),
                    backgroundStyle: E ? "on-hover" : "always",
                    children: E
                        ? (0, r.jsx)(th.A, {
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
                    (0, r.jsx)(Y.A, { overlay: !0, hovered: !f && h, selected: !f && n, unread: !f && d }),
                    (0, r.jsx)(tC, {
                        channel: e,
                        children: (0, r.jsx)(G.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? (0, $.wN)(i, void 0, !0) : null,
                            upperBadge: (0, $.oi)({ audio: s, video: a, screenshare: o, isCurrentUserConnected: l }),
                            lowerBadgeSize: { width: (0, tl.o6)(i) },
                            children: p(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tv = s.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, t_.Ay)(e.channel),
        s = (0, d.Vd)(n, 2),
        a = (0, h.bG)([ts.A], () => ts.A.getChannelId(), []),
        o = (0, h.bG)([b.A], () => b.A.getMode(n), [n]),
        l = (0, h.bG)([X.A], () => X.A.getAllApplicationStreamsForChannel(n).length > 0),
        u = (0, h.bG)([eC.Ay], () => eC.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, h.bG)([J.A], () => J.A.getChannelId(), []),
        _ = (0, h.bG)([ec.Ay], () => ec.Ay.getMentionCount(n), [n]),
        f = a === n,
        { isIncomingCall: E, isOngoingCall: p } = (0, tc.A)(n),
        g = !1,
        A = !1;
    (f || u) && ((g = o === eO._Of.VOICE), (A = o === eO._Of.VIDEO));
    let I = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(tR, {
        ...e,
        ref: t,
        channelName: i,
        unread: _ > 0,
        selected: c === n,
        badge: _,
        audio: g,
        video: A,
        stream: l,
        isCurrentUserInThisDMCall: f,
        isIncomingCall: E,
        isOngoingCall: p,
        size: I,
        treeItemProps: s,
    });
});
function tb() {
    (0, h.bG)([Q.A], () => Q.A.getPrivateChannelsVersion());
    let e = Q.A.getMutablePrivateChannels(),
        t = (0, h.yK)([e1.A], () => e1.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, h.cf)([ts.A], () => ({
            selectedVoiceGuildId: ts.A.getGuildId(),
            selectedVoiceChannelId: ts.A.getChannelId(),
        })),
        a = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tv, { channel: n }, n.id);
        }),
        o = null == n && null != i ? e[i] : null;
    return (
        null != o && a.unshift((0, r.jsx)(tv, { channel: o }, o.id)),
        (0, r.jsx)(A.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eR.intl.string(eR.t.YUU0RF),
            gap: "xs",
            hidden: a.length < 1,
            children: (0, r.jsx)(tr.F, { component: s.Fragment, children: a }),
        })
    );
}
var tL = n(32880),
    tD = n(939249),
    tw = n(547732);
function tP(e) {
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
        _ = s.useMemo(
            () =>
                null == n || a
                    ? null
                    : (0, r.jsx)(ep.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: ev.A_,
                          children: n,
                      }),
            [n, a],
        ),
        h = i ? t : (0, r.jsx)("div", { className: o()(tw.p, { [tw.w]: d }), children: t });
    return (0, r.jsx)(eh.m, {
        __unsupportedReactNodeAsText: _,
        position: "right",
        spacing: 12,
        hideOnClick: l,
        shouldShow: u,
        forceOpen: c,
        ariaHidden: !0,
        asContainer: !i,
        children: h,
    });
}
var tM = n(530787);
let tx = s.forwardRef(function (e, t) {
        let {
                id: n,
                onClick: i,
                onContextMenu: a,
                icon: l,
                selected: u,
                tooltip: c,
                upperBadge: _,
                lowerBadge: h,
                lowerBadgeSize: f,
                showPill: E = !0,
                className: p,
                "aria-label": m,
                children: g,
                onMouseEnter: A,
                onMouseLeave: I,
                onMouseDown: T,
            } = e,
            S = (0, d.Vd)(n),
            [N, C] = s.useState(!1),
            y = m ?? ("string" == typeof c ? c : void 0);
        return (0, r.jsxs)(K.c, {
            children: [
                E ? (0, r.jsx)(Y.A, { overlay: !0, hovered: N, selected: u }) : null,
                (0, r.jsx)(tP, {
                    text: c,
                    selected: u,
                    children: (0, r.jsx)(G.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: h,
                        lowerBadgeSize: f,
                        children: (0, r.jsx)(tD.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                A?.(), C(!0);
                            },
                            onMouseLeave: () => {
                                I?.(), C(!1);
                            },
                            onMouseDown: T,
                            className: o()(tM.oZ, p, { [tM.wH]: u || N }),
                            onClick: i,
                            "aria-label": y,
                            "aria-selected": u,
                            onContextMenu: a,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != l && (0, r.jsx)(l, { className: tM.sF, color: "currentColor" }),
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
        tooltip: eR.intl.string(eR.t.Z7jwrJ),
        icon: tL.s,
    });
}
var tG = n(245604),
    tV = n(272613),
    tF = n(398884),
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
        "data-dnd-name": eR.intl.formatToPlainString(eR.t["A5aDw+"], { itemName: t }),
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
    return (0, r.jsx)(tP, {
        text: t,
        shouldShow: l,
        forceOpen: l,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (c.current = e), u(e);
            },
            "data-dnd-name": eR.intl.formatToPlainString(eR.t.qiQ0QI, { itemName: t }),
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
        i = (0, h.yK)([e$.A], () => e$.A.getGuildsArray()),
        a = (0, h.bG)([eN.default], () => eN.default.getCurrentUser()),
        o = s.useMemo(() => i.some((e) => (0, tj.bM)(e, a)), [i, a]),
        l = (0, g.useModalsStore)((e) => (0, g.hasModalOpenSelector)(e, t3.fc)),
        { analyticsLocations: u } = (0, v.Ay)();
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
                    onClick: function () {
                        (0, tF.Sn)()
                            ? (0, tB.A)({
                                  analyticsSource: { page: eO.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eO.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eO.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: u,
                              })
                            : tV.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: l,
                    onContextMenu: t5,
                    tooltip: eR.intl.string(eR.t.l5WIbf),
                    icon: tG.U,
                }),
                null != n &&
                    (0, r.jsx)(t0, { name: eR.intl.string(eR.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
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
        children: (0, r.jsx)(tP, {
            text: e.name,
            children: (0, r.jsx)(G.Q, {
                className: nt.o,
                selected: t,
                lowerBadge: (0, r.jsx)(tl.fk, { icon: (0, t8.k)(t9.A), disableColor: !0, className: nt._ }),
                children: (0, r.jsx)(V.j, {
                    name: e.name,
                    onMouseEnter: function () {
                        i(!0);
                    },
                    onMouseLeave: function () {
                        i(!1);
                    },
                    onClick: function () {
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
        tooltip: eR.intl.string(eR.t["4nEZLk"]),
        icon: nr.Q,
    });
});
var nh = n(506774),
    nf = n(509963),
    nE = n(111159),
    np = n(793943),
    nm = n(428262),
    ng = n(350972),
    nA = n(677056),
    nI = n(526162),
    nT = n(174197);
function nS() {
    let [e, t] = (0, h.yK)([eN.default, nI.A], () => [
            nI.A.getCurrentDesktopIcon(),
            nm.Ay.isPremium(eN.default.getCurrentUser()),
        ]),
        n = (0, np.fy)().activePanel === np.HP.APP_ICON,
        i = (0, nT.gG)(e),
        s = i.id !== ng.LW.DEFAULT && (t || n),
        a = (0, r.jsx)(nE.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && s ? (0, r.jsx)(nA.A, { id: i.id, size: nT.N8.SIZE_48 }) : a;
}
var nN = n(531260),
    nC = n(411976),
    ny = n(912309),
    nO = n(400492),
    nR = n(354670),
    nv = n(619921),
    nb = n(340829),
    nL = n(966846),
    nD = n(674378),
    nw = n(394953),
    nP = n(235079),
    nM = n(30186);
let nx = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nU(e) {
    let { selected: t, user: n, badge: i, link: a, showProgressBadge: o } = e,
        [l, u] = s.useState(!1),
        [c, _] = s.useState(!1),
        [h, f] = s.useState(null),
        [E, p] = s.useState(0),
        m = (0, d.Vd)("home"),
        g = (0, np.fy)().activePanel === np.HP.APP_ICON;
    function A() {
        f(null), p(0), clearTimeout(h);
    }
    if (null == n) return null;
    let I = eR.intl.string(eR.t.YUU0RF);
    c && (I = nh.w.get(eO.wqg) ? eR.intl.string(eR.t["nkq1l+"]) : eR.intl.string(eR.t.Be8Q5E));
    let T = null;
    !t && o && (T = (0, r.jsx)(nf.A, { className: nM.Cp, determineOwnVisibility: !1 }));
    let S = t || l || g,
        N = (0, r.jsx)(G.Q, {
            selected: !0,
            lowerBadge: i > 0 ? (0, $.wN)(i) : null,
            upperBadge: T,
            lowerBadgeSize: { width: (0, tl.o6)(i) },
            children: (0, r.jsx)(V.j, {
                onMouseEnter: () => u(!0),
                onMouseLeave: () => u(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != h && clearTimeout(h), f(setTimeout(A, 500)), p(E + 1), 15 === E)) {
                        A();
                        let e = !nh.w.get(eO.wqg);
                        nh.w.set(eO.wqg, e),
                            e && nh.w.set(nP.L, !0),
                            e ? (0, nO.Ak)("discodo") : (0, nO.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: eR.intl.string(eR.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...m,
                to: {
                    pathname: a,
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
        className: nM.Uq,
        children: (0, r.jsx)(tH.A, {
            inlineSpecs: nx,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, selected: t, hovered: l }),
                    (0, r.jsx)(tP, { hideOnClick: !0, text: I, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nk() {
    let e = (function () {
            let e = (0, q.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eO.BVt.GUILD_DISCOVERY) || t.startsWith(eO.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eO.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nw.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, h.bG)([nL.A, nb.A], () => {
            let e = (0, nf.v)(nL.A.activeItems, nb.A),
                { total: t, progress: n } = nD.zY(e),
                i = nD.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, ny.kX)(),
        i = Object.keys(ex.TP),
        s = (0, nN.A)(),
        { unviewedTrialCount: a, unviewedDiscountCount: o } = (0, h.cf)([nR.A], () => ({
            unviewedTrialCount: nR.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nR.A.getUnacknowledgedDiscountOffers().length,
        })),
        l = s.fractionalState === ex.xc.NONE ? a + o : 0,
        u = (0, h.bG)([eN.default], () => eN.default.getCurrentUser()),
        d = (0, nC.W)(),
        _ = n + l + d,
        f = _ === l && l > 0 && n + d === 0,
        E = nv.A.getHomeLink();
    return (
        f && (E = eO.BVt.APPLICATION_STORE),
        (0, r.jsx)(nU, {
            selected: e,
            user: u,
            selectedChannelId: J.A.getChannelId(eO.ME),
            badge: _,
            link: E,
            showProgressBadge: t,
        })
    );
}
var nG = n(473201);
function nV(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(K.c, { children: (0, r.jsx)("div", { className: o()(nG.t, { [nG.I]: t }) }) });
}
var nF = n(349288),
    nB = n(695366),
    nH = n(919638),
    nj = n(818348),
    nW = n(585212);
function nY() {
    let e = (0, h.bG)([nH.A, e$.A], () => nH.A.unavailableGuilds.filter((e) => null == e$.A.getGuild(e)).length),
        t = (0, d.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(K.c, {
              children: (0, r.jsx)(tP, {
                  text: eR.intl.format(eR.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nF.Anchor, {
                      href: nj.qF.STATUS,
                      target: "_blank",
                      className: nW.h,
                      "aria-label": eR.intl.formatToPlainString(eR.t["MEpX+2"], { count: e }),
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
        i = (0, h.bG)([e$.A], () => e$.A.getGuild(t), [t]),
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
            onContextMenu: h,
            onHoverChange: f,
            onKeyDown: E,
            treeItemProps: { onFocus: p, ...g },
            "aria-setsize": A,
            "aria-posinset": I,
        } = e,
        [T, S] = s.useState(!1),
        N = s.useCallback(() => {
            i || S(!0), f?.(!0);
        }, [i, f]),
        C = s.useCallback(() => {
            i || S(!1), f?.(!1);
        }, [i, f]),
        y = n || null == a ? null : (0, $.oi)(a),
        O =
            !n && o > 0
                ? (0, $.wN)(
                      o,
                      l ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                  )
                : null;
    return (0, r.jsx)(n0.vN, {
        children: (0, r.jsxs)(tD.D, {
            className: n3.H3,
            onClick: _,
            onContextMenu: h,
            onMouseEnter: N,
            onMouseLeave: C,
            onKeyDown: E,
            onFocus: p,
            focusProps: { enabled: !1 },
            ...g,
            role: "treeitem",
            "aria-setsize": A,
            "aria-posinset": I,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, r.jsx)(n1.A, {
                    children: eR.intl.formatToPlainString(eR.t["90/DwM"], { folderName: u, mentions: o }),
                }),
                (0, r.jsx)(G.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: y,
                    lowerBadge: O,
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
let ii = (0, nQ.xI)(nz.A.FOLDER_ITEM_ANIMATION_DURATION),
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
                mediaState: h,
                mentionCount: f = 0,
                isMentionLowImportance: E,
                unread: p = !1,
                defaultFolderName: g,
                draggable: A = !1,
                sorting: I = !1,
                onDragStart: S,
                onDragEnd: N,
                onExpandCollapse: C,
                onContextMenu: y,
                renderChildNode: O,
                folderButtonSize: R,
                folderButtonContent: v,
                "aria-setsize": b,
                "aria-posinset": L,
            } = e,
            { id: D, name: w, children: P } = l,
            [M, x] = s.useState(!1),
            [U, k] = s.useState(!1),
            G = M || U,
            V = (0, nX.qK)("FolderItem");
        s.useEffect(() => {
            I && x(!1);
        }, [I]);
        let [{ dragging: F }, B] = (0, nK.i)({
                type: eX.PJ.FOLDER,
                item: () => (S?.(), { type: eX.PJ.FOLDER, nodeId: l.id }),
                end() {
                    N?.(), (0, nZ.um)(ez.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            H = s.useCallback((e) => {
                k(e);
            }, []),
            j = s.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !_) || ("ArrowLeft" === e.key && _)) && C();
                },
                [C, _],
            ),
            W = null != w && "" !== w ? w : null != g && "" !== g ? g : eR.intl.string(eR.t.xV9hVh),
            $ = (0, d.Vd)(`${D}`),
            z = `folder-items-${D}`,
            q =
                ((t = P.length),
                (n = (0, T.r)(m.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (a = (0, T.r)(m.A.space.SPACE_XS))) - a + (a - (n - i) / 2) + (0, T.r)(m.A.space.SPACE_4)),
            Z = (0, nq.p)(!F && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: ii },
            }),
            X = s.useCallback((e) => u?.(D, e), [u, D]),
            Q = (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(Y.A, { overlay: !0, disabled: F || _, hovered: M, selected: c, unread: p }),
                    (0, r.jsx)(tP, {
                        text: W,
                        disabled: I,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, r.jsx)("div", {
                            ref: A
                                ? (e) => {
                                      B(e);
                                  }
                                : void 0,
                            className: o()(n3.MJ, { [n3.L0]: "icon" === R || V, [it.oR]: !F && U && !_ }),
                            "data-dnd-name": W,
                            children: F
                                ? (0, r.jsx)(n9, { isFolder: !0 })
                                : (0, r.jsx)(n5, {
                                      folderNode: l,
                                      expanded: _,
                                      sorting: I,
                                      mediaState: h,
                                      mentionCount: f,
                                      isMentionLowImportance: E,
                                      tooltipName: W,
                                      folderGroupId: z,
                                      onClick: C,
                                      onContextMenu: y,
                                      onHoverChange: x,
                                      onKeyDown: j,
                                      treeItemProps: $,
                                      folderButtonContent: v,
                                      "aria-setsize": b,
                                      "aria-posinset": L,
                                  }),
                        }),
                    }),
                    A ? (0, r.jsx)(t0, { name: W, targetNode: l, onDragOverChanged: H }) : null,
                ],
            }),
            J = null != l.color ? l.color : ie.DO,
            ee = J === ie.DO ? void 0 : (0, n$.Hl)(J);
        return (0, r.jsxs)("div", {
            ref: X,
            className: o()(n3.qc, { [n3.Av]: _, [n3.Lg]: G }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": U,
            children: [
                !F && _ && (0, r.jsx)("span", { className: n3.GO }),
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
                                "aria-label": l.name,
                                children: P.map((t, n) => O(t, n, P.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                A && _ ? (0, r.jsx)(t1, { name: W, targetNode: l }) : null,
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
        f,
        E,
        { folderNode: p, ...m } = e,
        { id: g, name: A, color: I, children: T } = p,
        S = T.map((e) => e.id),
        N = (0, q.A)((e) => e.guildId),
        C = (0, h.bG)([e0.A], () => e0.A.isFolderExpanded(g)),
        y = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = e$.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(ey.Vq),
                n = 2 * eO.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(p),
        O =
            ((t = (0, h.bG)([ts.A], () => ts.A.getGuildId())),
            (i = p.children.map((e) => e.id)),
            (a = null != t && i.includes(t)),
            (o = !1),
            (l = !1),
            (u = !1),
            (c = (0, h.bG)([ts.A], () => ts.A.getChannelId())),
            (_ = null != (d = (0, ia.A)()?.guild_id) && i.includes(d)),
            (f = (0, h.bG)([ee.A], () => null != c && ee.A.hasVideo(c), [c])),
            (E = (0, h.bG)([X.A], () => X.A.getCurrentUserActiveStream())),
            a && ((o = !f), (l = f), (u = null != E && null != E.guildId && i.includes(E.guildId))),
            s.useMemo(
                () => ({ audio: o, video: l, screenshare: u, liveStage: _, isCurrentUserConnected: a }),
                [o, l, u, _, a],
            )),
        {
            mentionCount: R,
            isMentionLowImportance: v,
            unread: b,
        } = (0, h.cf)([el.default], () => ({
            mentionCount: S.map((e) => el.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => el.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => el.default.hasUnread(e)),
        })),
        L = s.useCallback(() => {
            t$.A.toggleGuildFolderExpand(g);
        }, [g]),
        D = s.useCallback(
            (e) => {
                (0, tu.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: g, folderName: A, folderColor: I, unread: b || R > 0 });
                });
            },
            [g, A, I, b, R],
        );
    return (0, r.jsx)(is, {
        ...m,
        folderNode: p,
        expanded: C,
        selected: null != N && S.includes(N),
        mentionCount: R,
        isMentionLowImportance: v,
        unread: b,
        mediaState: O,
        defaultFolderName: y,
        onExpandCollapse: L,
        onContextMenu: D,
    });
});
var il = n(113494),
    iu = n(821124),
    ic = n(212455);
function id(e) {
    let t = e?.features.has(eO.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, h.bG)([ic.A, eN.default, eK.Ay], () => {
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
    iE = n(811024),
    ip = n(508654),
    im = n(233993),
    ig = n(446600),
    iA = n(95701),
    iI = n(280450);
let iT = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-06-dont-badge-muted-vcs",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function iS(e) {
    return iT.useConfig({ location: e }).enabled;
}
function iN(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eu.A;
    return null != e && e.type !== ih.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eO.hVb.VIEW_CHANNEL, e);
}
function iC(e) {
    let t = (0, h.bG)([ed.Ay], () => ed.Ay.isMuted(e)),
        n = iS("useGuildMediaState"),
        i = (0, ip.BP)(e),
        r = (0, h.yK)([j.Ay, tf.A], () =>
            j.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tf.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tf.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        s = (0, W.H)(r[0]?.location),
        a = (0, iE.Gp)(s),
        {
            guildHasVoice: o,
            guildHasVideo: l,
            selectedVoiceChannelHasVideo: c,
        } = (0, h.cf)([J.A, ee.A, e$.A, eu.A, Q.A, ed.Ay], () => {
            var i;
            let r = J.A.getVoiceChannelId(),
                s = e$.A.getGuild(e)?.afkChannelId,
                a = ee.A.getUsersWithVideo(e),
                o =
                    ((i = ee.A.getVoiceStates(e)),
                    u()(i)
                        .filter((e) => !tf.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let t in o) {
                        let i = o[t].channelId;
                        if (
                            null != i &&
                            iN(Q.A.getBasicChannel(i), s ?? void 0, eu.A) &&
                            (!n || !ed.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let t of a) {
                        let i = o[t]?.channelId;
                        if (
                            null != i &&
                            iN(Q.A.getBasicChannel(i), s ?? void 0, eu.A) &&
                            (!n || !ed.Ay.isGuildOrCategoryOrChannelMuted(e, i))
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != r && ee.A.hasVideo(r),
            };
        }, [e, t, n]),
        d = iI.default.getId();
    return (0, h.cf)([J.A, Q.A, j.Ay, ig.A, X.A, eu.A, ed.Ay], () => {
        let s = J.A.getVoiceChannelId(),
            u = Q.A.getChannel(s)?.guild_id === e,
            _ = !1,
            h = !1,
            f = !1,
            E = !1,
            p = !1,
            m = !1;
        if (!u && t)
            return {
                audio: _,
                video: E,
                screenshare: p,
                liveStage: f,
                activeEvent: h,
                activity: m,
                isCurrentUserConnected: !1,
            };
        let g = et.default.keys(ig.A.getStageInstancesByGuild(e)).some((e) => {
                let t = Q.A.getChannel(e);
                return null != t && eu.A.can(im.Gk, t);
            }),
            A = u && (Q.A.getChannel(s)?.isGuildStageVoice() ?? !1),
            I = !!u && null != X.A.getActiveStreamForUser(d, e),
            T = X.A.getAllApplicationStreams()
                .filter((e) => !tf.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e && (!n || !ed.Ay.isGuildOrCategoryOrChannelMuted(e, t.channelId))),
            S = u && c,
            N = (() => {
                if (a) return r.length > 0;
                for (let e of r) {
                    let t = Q.A.getChannel((0, W.H)(e.location));
                    if (null != t && (0, iA.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            C = j.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            u
                ? ((_ = !0), (h = i?.channel_id === s), (f = A), (E = S), (p = I), (m = C))
                : ((_ = o), (h = null != i), (f = g), (E = l), (p = T), (m = N)),
            {
                audio: _,
                video: E,
                screenshare: p,
                liveStage: f,
                activeEvent: h,
                activity: m,
                isCurrentUserConnected: u || A,
            }
        );
    }, [e, t, c, d, a, r, i, o, l, n]);
}
var iy = n(607399),
    iO = n(702841),
    iR = n(658128),
    iv = n(976860),
    ib = n(676279);
function iL(e) {
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
var iD = n(454938),
    iw = n(714991),
    iP = n(107773),
    iM = n(513461),
    ix = n(164956),
    iU = n(624265),
    ik = n(970278),
    iG = n(808728);
function iV(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: ev.nM,
              children: [
                  (0, r.jsx)(e, { className: ev.RI, color: "currentColor" }),
                  (0, r.jsx)(eI.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iF(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(ep.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eR.intl.string(eR.t.fpKdS1),
          })
        : (0, r.jsx)(tA.A, { muteConfig: t, className: n });
}
function iB(e) {
    let t,
        n,
        i,
        a,
        l,
        c,
        d,
        _,
        f,
        E,
        p,
        m,
        g,
        A,
        I,
        T,
        S,
        N,
        C,
        y,
        O,
        { guild: R } = e,
        v = R.id,
        {
            voiceUsersToShow: b,
            stageSpeakers: L,
            numStageListeners: D,
            streamUsersToShow: w,
            embeddedActivitiesUsers: P,
        } = ((t = R.id),
        (n = iS("useGuildTooltipActivity")),
        (i = (0, h.yK)(
            [iG.Ay, ik.A, ed.Ay],
            () => [
                ...iG.Ay.getChannels(t)
                    [iG.vM].filter((e) => {
                        let { channel: i } = e;
                        return i.type === eO.rbe.GUILD_VOICE && (!n || !ed.Ay.isGuildOrCategoryOrChannelMuted(t, i.id));
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(ik.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t, n],
        )),
        (a = (0, iU.Ay)(t)),
        (l = s.useMemo(() => a.map((e) => e.id), [a])),
        (c = (0, h.bG)([eC.Ay], () => eC.Ay.getVoiceStates(t), [t])),
        (d = (0, h.yK)([tf.A], () => tf.A.getBlockedOrIgnoredIDs())),
        (_ = u().flatMap(i, (e) =>
            e === R.afkChannelId
                ? []
                : tE(
                      (c[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      d,
                  ),
        )),
        (f = (0, h.yK)([eT.A], () =>
            u().flatMap(l, (e) =>
                e === R.afkChannelId
                    ? []
                    : tE(
                          eT.A.getMutableParticipants(e, eS.ip.SPEAKER)
                              .filter((e) => e.type === eS.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          d,
                      ),
            ),
        )),
        (E = (0, h.bG)([eT.A], () => {
            let e = 0;
            for (let t of l) e += eT.A.getParticipantCount(t, eS.ip.AUDIENCE);
            return e;
        })),
        (p = (0, h.yK)(
            [X.A, ed.Ay],
            () =>
                tp(
                    X.A.getAllApplicationStreams()
                        .filter(
                            (e) => e.guildId === t && (!n || !ed.Ay.isGuildOrCategoryOrChannelMuted(t, e.channelId)),
                        )
                        .map((e) => e.ownerId),
                    d,
                ),
            [d, t, n],
        )),
        (m = (0, h.yK)(
            [j.Ay],
            () =>
                tp(
                    j.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    d,
                ),
            [t, d],
        )),
        (g = (0, h.yK)([eN.default], () => tE(m.map((e) => eN.default.getUser(e))), [m])),
        (A = (0, h.yK)([eN.default], () => p.map((e) => eN.default.getUser(e)), [p])),
        (T = tE((I = _.filter((e) => !p.includes(e.id) && !m.includes(e.id))))),
        (S = A.filter((e) => null != e && !m.includes(e.id))),
        (N = (0, h.bG)([tm.A], () => tm.A.getUserAffinitiesMap(), [])),
        (C = s.useMemo(() => (0, tg.L)(T, N, "GuildTooltip - nonBlockedUsers"), [T, N])),
        (y = s.useMemo(() => (0, tg.L)(f, N, "GuildTooltip - stageSpeakers"), [f, N])),
        (O = s.useMemo(() => (0, tg.L)(S, N, "GuildTooltip - streamUsers"), [S, N])),
        {
            voiceUsersToShow: C,
            stageSpeakers: y,
            numStageListeners: E,
            streamUsersToShow: O,
            embeddedActivitiesUsers: s.useMemo(() => (0, tg.L)(g, N, "GuildTooltip - embeddedActivitiesUsers"), [g, N]),
            hasActivity: f.length > 0 || I.length > 0 || S.length > 0 || g.length > 0,
        }),
        M = iV(em.H, b, v),
        x =
            0 === L.length
                ? null
                : (0, r.jsxs)("div", {
                      className: ev.nM,
                      children: [
                          (0, r.jsx)(ef.q, { size: "lg", color: "currentColor", className: ev.RI }),
                          (0, r.jsx)(eI.Ay, { guildId: v, users: L, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: ev.GZ,
                              children: [
                                  (0, r.jsx)(eE.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(ep.E, {
                                      className: ev._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: D,
                                  }),
                              ],
                          }),
                      ],
                  }),
        U = iV(eg.F, w, v),
        k = iV(eA.k, P, v),
        { isMuted: G, muteConfig: V } = (0, h.cf)(
            [ed.Ay],
            () => ({ isMuted: ed.Ay.isMuted(v), muteConfig: ed.Ay.getMuteConfig(v) }),
            [v],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            x,
            M,
            U,
            k,
            G ? (0, r.jsx)(iF, { muteConfig: V, className: o()(ev.LM, { [ev.Sx]: null != M || null != U }) }) : null,
        ],
    });
}
function iH(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(ep.E, {
        className: ev.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case iM.B5.SUBMITTED:
                    return eR.intl.string(eR.t["9KFC98"]);
                case iM.B5.REJECTED:
                    return eR.intl.string(eR.t["TQY/Rd"]);
                case iM.B5.APPROVED:
                    return eR.intl.string(eR.t.WXHcq5);
                default:
                    return eR.intl.string(eR.t.fjHFC8);
            }
        })(t),
    });
}
function ij(e) {
    let { guild: t } = e,
        n = (0, iD.A)(t),
        i = id(t),
        s = null != i ? (0, r.jsx)(iH, { guildJoinRequestStatus: i }) : null,
        a = (0, r.jsx)(iB, { guild: t }),
        l = (0, h.bG)([ix.A], () => ix.A.isViewingRoles(t.id)),
        u = (0, i_.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(ev.nM, ev.Dl),
                children: [
                    n
                        ? (0, r.jsx)(iP.A, { disableBoostClick: !0, guild: t, className: ev.WX })
                        : (0, r.jsx)(iw.A, { guild: t, size: 20, className: ev.aL }),
                    (0, r.jsx)("span", { className: o()(ev.cN, ev.NT), children: t.name }),
                ],
            }),
            u
                ? (0, r.jsx)(ep.E, {
                      className: ev.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eR.intl.string(eR.t["2n0/Fk"]),
                  })
                : null,
            l
                ? (0, r.jsx)(ep.E, {
                      className: ev.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eR.intl.string(eR.t["5LwN89"]),
                  })
                : (s ?? a),
        ],
    });
}
function iW(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: a } = e,
        o = s.useMemo(
            () =>
                n
                    ? null
                    : (0, r.jsx)(ep.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          className: ev.A_,
                          children: (0, r.jsx)(ij, { guild: t }),
                      }),
            [n, t],
        );
    return (0, r.jsx)(eh.m, {
        __unsupportedReactNodeAsText: o,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: a,
    });
}
let iY = { analyticsSource: { page: eO.liQ.GUILD_CHANNEL, section: eO.JJy.CHANNEL_LIST, object: eO.ZSU.CHANNEL } };
function iK(e, t) {
    (0, tu.L3)(e, async () => {
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
            n.e("95512"),
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
            n.e("21918"),
            n.e("54483"),
            n.e("62461"),
            n.e("25677"),
            n.e("73679"),
            n.e("73178"),
            n.e("333"),
            n.e("97638"),
            n.e("22995"),
            n.e("84896"),
            n.e("51943"),
            n.e("90072"),
            n.e("88016"),
            n.e("84133"),
            n.e("13627"),
            n.e("57940"),
            n.e("58171"),
            n.e("48404"),
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
            n.e("61312"),
            n.e("57328"),
            n.e("44135"),
            n.e("79555"),
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
            n.e("26543"),
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
            n.e("96643"),
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
            n.e("88131"),
            n.e("42834"),
            n.e("43430"),
            n.e("94723"),
            n.e("28866"),
            n.e("62931"),
            n.e("58529"),
            n.e("58038"),
            n.e("62531"),
            n.e("34801"),
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
            n.e("86127"),
            n.e("28095"),
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
            n.e("95752"),
            n.e("51011"),
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
            n.e("62819"),
            n.e("71430"),
            n.e("501"),
            n.e("86243"),
            n.e("85794"),
            n.e("67837"),
            n.e("73384"),
            n.e("82783"),
            n.e("32209"),
            n.e("9371"),
            n.e("13658"),
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
            n.e("26001"),
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
            n.e("43116"),
            n.e("66580"),
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
            n.e("99108"),
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
let i$ = s.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: i,
            onDragEnd: a,
            route: l,
            guild: u,
            animatable: c,
            selected: _ = !1,
            unread: h = !1,
            mediaState: f,
            unavailable: E = !1,
            badge: g = 0,
            isMentionLowImportance: A,
            contextMenu: I = iK,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: y,
            height: O,
            "aria-setsize": R,
            "aria-posinset": v,
        } = e,
        { id: b, parentId: L } = t,
        D = e.upperBadge ?? (E ? (0, $.em)() : null != f ? (0, $.oi)(f) : void 0),
        w = e.lowerBadge ?? void 0;
    null == w && g > 0
        ? (w =
              (0, $.wN)(
                  g,
                  A ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
              ) ?? void 0)
        : null == w && null != y && (w = (0, $.eW)({ guildJoinRequestStatus: y }) ?? void 0);
    let P = e.lowerBadgeSize ?? { width: (0, tl.o6)(g) },
        [{ dragging: M }, x] = (0, nK.i)({
            type: eX.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                a?.(), (0, nZ.um)(ez.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        U = (0, d.Vd)(b ?? eO.dJq, null != L ? 2 : 1),
        [k, F] = s.useState(!1),
        B = !N && k,
        [j, W] = s.useState(!1),
        [z, q] = s.useState(!1),
        [X] = s.useState(() => new p.J_(70, () => q(!0))),
        Q = (0, ib.nr)() && !iy.Fr;
    s.useEffect(() => () => X.cancel(), [X]);
    let J = s.useCallback(() => {
            null != l ? (0, iv.pX)(l, { state: iY }) : (0, Z.u)(b, { state: iY });
        }, [b, l]),
        ee = s.useCallback(() => {
            if (null != l || null == u || E || !C) return;
            let e = (0, iR.W)(u.id);
            null != e && H.A.preload(u.id, e);
        }, [l, u, E, C]),
        et = (0, iO.bG)([eK.Ay], () => eK.Ay.isCurrentUserGuest(b)),
        en = s.useCallback(
            (e) => {
                null == u || et || I(e, u);
            },
            [u, I, et],
        ),
        ei = s.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != L && document.querySelector(`[aria-owns=folder-items-${L}]`)?.focus();
            },
            [L],
        ),
        er = s.useCallback(
            (e) => {
                e ? X.delay() : (X.cancel(), q(!1));
            },
            [X],
        );
    function es() {
        N || F(!0);
    }
    function ea() {
        N || F(!1);
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
            ? (eu = eR.intl.formatToPlainString(eR.t["/uzRss"], { guildName: u.name, mentions: g }))
            : h && (eu = eR.intl.formatToPlainString(eR.t.lzqe42, { guildName: u.name })),
        null != f)
    ) {
        let e = [];
        f.activeEvent && e.push(eR.intl.string(eR.t.dHvJ2p)),
            f.liveStage && e.push(eR.intl.string(eR.t.OO7ndG)),
            f.screenshare && e.push(eR.intl.string(eR.t.wsHMZ7)),
            f.video && e.push(eR.intl.string(eR.t.BrLCS0)),
            f.audio && e.push(eR.intl.string(eR.t.jPBhKy)),
            f.activity && e.push(eR.intl.string(eR.t.Y3Gii5)),
            e.length > 0 && (eu = `${eu}, ${e.join(" ")}`);
    }
    let ec = (0, r.jsx)(iL, {
            guild: u,
            show: z,
            active: _,
            onAnimationStart: function () {
                W(z);
            },
            onAnimationRest: function () {
                z || W(!1);
            },
        }),
        ed = Q
            ? (0, r.jsx)(V.j, {
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
                  "aria-setsize": R,
                  "aria-posinset": v,
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
                      "data-drop-hovering": z,
                      children: (0, r.jsx)(V.j, {
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
                          "aria-setsize": R,
                          "aria-posinset": v,
                          "aria-selected": _,
                      }),
                  }),
              }),
        e_ = z || j ? ec : ed,
        eh = (0, r.jsx)(t2, { children: (0, r.jsx)(n9, {}) }),
        ef = Q
            ? (0, r.jsx)(ta.animated.div, {
                  ref: S
                      ? (e) => {
                            x(e);
                        }
                      : void 0,
                  "data-dnd-name": u.name,
                  style: { scale: null == O ? 1 : O },
                  "data-drop-hovering": z,
                  className: o()(it.rN, { [it.p9]: N, [it.oR]: z, [it.wH]: z || _ }),
                  children: (0, r.jsx)(G.Q, {
                      selected: !0,
                      upperBadge: D,
                      lowerBadge: w,
                      lowerBadgeSize: P,
                      children: e_,
                  }),
              })
            : (0, r.jsx)(ta.animated.div, {
                  style: { scale: null == O ? 1 : O },
                  className: o()(it.rN, { [it.p9]: N, [it.oR]: z, [it.wH]: z || _ }),
                  "data-drop-hovering": z,
                  children: (0, r.jsx)(G.Q, {
                      selected: _,
                      upperBadge: D,
                      lowerBadge: w,
                      lowerBadgeSize: P,
                      children: e_,
                  }),
              });
    return (0, r.jsxs)(K.c, {
        ref: eo,
        children: [
            (0, r.jsx)(Y.A, { overlay: !0, hovered: !M && B, selected: !M && _, unread: !M && h }),
            (0, r.jsx)(iW, { guild: u, disabled: N, isDragging: M, children: M ? eh : ef }),
            S ? (0, r.jsx)(t0, { name: u.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var iz = n(182240);
let iq = s.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        a = (0, h.bG)([e$.A], () => e$.A.getGuild(i)),
        o = id(a),
        l = (0, h.bG)([e5.A], () => e5.A.isFocused()),
        u = (0, h.bG)([nH.A], () => nH.A.isUnavailable(i)),
        c = (0, q.A)((e) => e.guildId),
        d = iC(i),
        {
            badge: _,
            unread: f,
            isMentionLowImportance: E,
        } = (0, h.cf)([el.default], () => ({
            badge: el.default.getMentionCount(i),
            isMentionLowImportance: el.default.getIsMentionLowImportance(i),
            unread: el.default.hasUnread(i),
        })),
        p = (0, i_.Ig)(a) && 0 === _,
        m = s.useMemo(
            () =>
                null != n
                    ? n
                    : p
                      ? (0, r.jsx)("div", {
                            className: iz.j,
                            children: (0, r.jsx)(il.E, {
                                size: "custom",
                                color: "currentColor",
                                className: iz.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, p],
        );
    return (0, r.jsx)(i$, {
        ...e,
        guild: a,
        unavailable: u,
        animatable: l,
        selected: c === i,
        badge: _,
        isMentionLowImportance: E,
        lowerBadge: m,
        unread: f,
        mediaState: d,
        guildJoinRequestStatus: o,
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
    (0, tu.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function i5(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, h.bG)([ic.A], () => ic.A.getRequest(n)),
        s = (0, h.bG)([ic.A], () => ic.A.getJoinRequestGuild(n), [n]),
        a = (0, h.bG)([e5.A], () => e5.A.isFocused()),
        o = (0, h.bG)([eQ.A], () => eQ.A.getGuildId());
    return null == s
        ? null
        : (0, r.jsx)(i$, {
              guildNode: t,
              guild: s,
              animatable: a,
              draggable: !1,
              selected: n === o,
              preloadOnClick: !1,
              contextMenu: i4,
              lowerBadge:
                  i?.applicationStatus === iM.B5.REJECTED
                      ? (0, $.eW)({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eO.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var i7 = n(785439);
function i8(e) {
    let { onActivate: t, children: n } = e,
        i = s.useRef(null),
        a = (0, h.bG)([ic.A], () => ic.A.hasJoinRequestCoackmark()),
        o = s.useCallback(() => {
            i2.Ay.clearCoachmark();
        }, []),
        l = (0, i0.A)(a),
        u = s.useRef(null);
    return (
        s.useEffect(() => {
            a && a !== l && (t(), u.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [u, a, l, t]),
        (0, r.jsxs)("div", {
            className: i7.kL,
            children: [
                (0, r.jsx)(iZ.Y, {
                    ref: u,
                    targetElementRef: i,
                    shouldShow: a,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: i7.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: i7.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: i7.q3,
                                            children: [
                                                (0, r.jsx)(iX.D, {
                                                    variant: "heading-md/medium",
                                                    children: eR.intl.string(eR.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(ep.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eR.intl.string(eR.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(iQ.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eR.intl.string(eR.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: o,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: i7.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: i7.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function i9(e) {
    let { onActivate: t } = e,
        [n, i] = s.useState(!1),
        a = (0, h.bG)([eQ.A], () => eQ.A.getGuildId()),
        o = (0, h.bG)([ic.A], () => ic.A.hasFetchedRequestToJoinGuilds),
        l = (0, i6.A)(),
        u = (0, i0.A)(a),
        c = s.useMemo(() => {
            let e = (0, eX.xW)({
                folderId: i3.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eR.intl.string(eR.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of l) e.children.push((0, eX.EL)(t, e.id));
            return e;
        }, [l, n]);
    s.useEffect(() => {
        n && !o && i1.A.fetchRequestToJoinGuilds();
    }, [n, o]);
    let d = null != a && l.includes(a);
    return (s.useEffect(() => {
        !n && d && u !== a && i(!0);
    }, [n, d, u, a]),
    0 === l.length)
        ? null
        : (0, r.jsx)(i8, {
              onActivate: t,
              children: (0, r.jsx)(is, {
                  folderNode: c,
                  expanded: n,
                  selected: d,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), i2.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: i7.rH,
                      children: (0, r.jsx)(iJ.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== eX.PJ.GUILD
                          ? null
                          : (0, r.jsx)(i5, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function re(e) {
    let { guildId: t } = e,
        n = s.useMemo(() => (0, eX.EL)(t), [t]),
        i = (0, h.bG)([e$.A], () => e$.A.getGuild(t)),
        a = (0, h.bG)([e5.A], () => e5.A.isFocused()),
        o =
            t ===
            (0, q.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        l = iC(t);
    return null == i
        ? null
        : (0, r.jsx)(i$, { guildNode: n, guild: i, animatable: a, selected: o, draggable: !1, mediaState: l });
}
var rt = n(803921);
let rn = (0, L.Fe)({
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
    ri = (0, eq.isWindows)() ? 4 : 12 * !(0, eq.isMac)();
function rr(e) {
    return e.startsWith(eO.BVt.GUILD_DISCOVERY) || e.startsWith(eO.BVt.GLOBAL_DISCOVERY);
}
class rs {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = s.createRef();
    nodeRefs = {};
    timeout = new p.Ep();
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
        C.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = u().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function ra(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        a = (0, M.A)("TopSection"),
        { isExperimentEnabled: o } = (0, P.TW)("TopSection"),
        l = (0, h.bG)([J.A], () => null != J.A.getVoiceChannelId()),
        u = (0, g.useHasAnyModalOpen)(),
        c = (0, D.Ay)((e) => e.postConnectionOpen),
        [d, _] = (0, w.kn)(c && o && !l && !u ? [f.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        E = d === f.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [p] = (0, w.kn)(E ? [f.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        m = p === f.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        A = s.useRef(!1),
        I = m && a;
    s.useEffect(() => {
        I && !A.current && n(), (A.current = I);
    }, [n, I]);
    let T = (0, h.yK)([e$.A, eK.Ay], () => e$.A.getGuildIds().filter((e) => eK.Ay.isCurrentUserGuest(e))),
        S = i.concat(T),
        { entrypoint: N } = (0, ej.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nk, {}),
            N === ej.RK.SERVER_RAIL_TOP && (0, r.jsx)(rn, {}),
            a ? (0, r.jsx)(eF, { shouldShowIntroPopover: m, markIntroPopoverAsDismissed: _ }) : null,
            !t && (0, r.jsx)(tb, {}),
            S.map((e) => (0, r.jsx)(re, { guildId: e }, e)),
            (0, r.jsx)(i9, { onActivate: n }),
        ],
    });
}
function ro(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: s, lurkingGuildIds: a } = e,
        [o] = (0, h.yK)([ez.Ay], () => {
            let e = ez.Ay.getGuildsTree();
            return [e, e.version];
        }),
        l = o.getRoots(),
        u = (0, h.yK)([eY.A], () => eY.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(nn, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.B, {
                role: "group",
                "aria-label": eR.intl.string(eR.t["7hB4kg"]),
                gap: "xs",
                children: l.map((e, t) => s(e, t, l.length)),
            }),
            u,
            (0, r.jsx)(nY, {}),
            i ? null : (0, r.jsx)(t7, { disableTooltip: a.length > 0, lastTargetNode: l[l.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tk, {}),
        ],
    });
}
function rl(e) {
    var t;
    let { disableAppDownload: n = eq.isPlatformEmbedded, isOverlay: i = !1, className: a, themeOverride: l } = e,
        [u] = (0, h.yK)([ez.Ay], () => {
            let e = ez.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, h.bG)([eH.A], () => eH.A.lurkingGuildIds()),
        f = s.useMemo(() => (i ? [] : _), [_, i]),
        E = (0, h.bG)([b.A], () => b.A.isFullscreenInContext()),
        { isSorting: g, startSorting: A, stopSorting: C } = (0, eZ.A)(),
        O = s.useRef(!1),
        [L] = s.useState(() => new p.Ep()),
        D = s.useRef(null),
        w = s.useRef(null),
        { ref: P, ...x } = (0, d.$y)(),
        U = (0, I.R7)(),
        [k, G] = s.useState(!1),
        V = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE),
        F = (0, T.r)(m.A.space.SPACE_XS),
        B = (0, M.A)("GuildsBar"),
        { pathname: H } = (0, c.zy)(),
        { entrypoint: j } = (0, ej.X8)({ location: "GuildsBar" }),
        W = +!!B + +(j === ej.RK.SERVER_RAIL_TOP),
        Y = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = V + F),
                    {
                        iconSize: V,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + F),
                        heightBeforeGuilds: ri + t + W * e,
                        bottomInset: 16,
                    });
            return new rs(
                u,
                G,
                eO.tEg,
                () => {
                    D.current?.calculateState(), w.current?.calculateState();
                },
                n,
            );
        }, [V, F, u, W]);
    s.useEffect(
        () => (
            Y.setResizeObserver(),
            () => {
                Y.clearResizeObserver();
            }
        ),
        [Y],
    ),
        s.useEffect(() => {
            function e() {
                D.current?.calculateState(), w.current?.calculateState();
            }
            return el.default.addChangeListener(e), () => el.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: K } = (0, v.Ay)(R.A.GUILDS_LIST),
        $ = rr(H);
    (0, y.u5)(() => {
        if (!O.current && 0 !== u.size) {
            if (!$) {
                let { scrollTop: e } = eW.A.getGuildListDimensions();
                Y.scrollTo({ to: e, animate: !1 });
            }
            return (O.current = !0), () => L.stop();
        }
    }),
        s.useEffect(() => {
            if ((Y.setGuildsTree(u), O.current || 0 === u.size)) return;
            let e = q.A.getState().guildId;
            Y.scrollToGuild(e, !1);
            let t = null;
            return q.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), Y.scrollToGuild(t, !1));
            });
        }, [u, Y]);
    let z = s.useCallback(() => {
        Y.scrollTo({ to: 0, animate: !1 });
    }, [Y]);
    (t = Y.scrollToGuild),
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
                                setNodeRef: Y.setNodeRef,
                                draggable: !0,
                                sorting: g,
                                onDragStart: A,
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
                                sorting: g,
                                onDragStart: A,
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
            [A, C, g, Y.setNodeRef],
        ),
        X = (0, r.jsx)(n_, { selected: $, className: rt.ai }),
        Q = j === ej.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(v.f5, {
        value: K,
        children: (0, r.jsx)(S.N, {
            theme: l,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: o()(rt.iE, a, e, { [rt.R]: E }),
                    "aria-label": eR.intl.string(eR.t.PjnF2t),
                    children: [
                        (0, r.jsx)(ti, {
                            ref: D,
                            isVisible: Y.isItemVisible,
                            onJumpTo: Y.handleJumpToGuild,
                            className: rt.Xl,
                            barClassName: rt.Sh,
                        }),
                        (0, r.jsxs)("div", {
                            ref: P,
                            ...x,
                            ...U,
                            role: "tree",
                            "aria-multiselectable": !1,
                            className: rt.B2,
                            children: [
                                (0, r.jsxs)(N.zC, {
                                    className: o()({ [rt.XG]: !0, [rt.qw]: k }),
                                    experimental_useStack: !0,
                                    gap: "xs",
                                    ref: Y.scrollerRef,
                                    onScroll: Y.handleScroll,
                                    children: [
                                        (0, r.jsx)(ra, { scrollToTop: z, lurkingGuildIds: f }),
                                        (0, r.jsx)(nV, {}),
                                        (0, r.jsx)(ro, {
                                            guildDiscoveryButton: X,
                                            disableAppDownload: n,
                                            isOverlay: i,
                                            renderTreeNode: Z,
                                            lurkingGuildIds: f,
                                        }),
                                    ],
                                }),
                                Q &&
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(nV, { fullWidth: !0 }),
                                            (0, r.jsx)("div", { className: rt.JU, children: (0, r.jsx)(rn, {}) }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(ti, {
                            reverse: !0,
                            ref: w,
                            isVisible: Y.isItemVisible,
                            onJumpTo: Y.handleJumpToGuild,
                            className: o()(rt.LZ, { [rt.CH]: !i && !Q, [rt.c0]: !i && Q }),
                            barClassName: rt.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let ru = s.memo(
    function (e) {
        let t = (0, O.A)("guildsnav");
        return (0, r.jsx)(d.hD, { navigator: t, children: (0, r.jsx)(rl, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, E.A)(e, t),
);
