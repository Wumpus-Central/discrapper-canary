"use strict";
n.d(t, { A: () => rg });
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
    z = n(406810),
    $ = n(789645),
    q = n(933832),
    Z = n(22231),
    X = n(777666),
    Q = n(565787),
    J = n(81466),
    ee = n(451394),
    et = n(31300),
    en = n(428689),
    ei = n(983851),
    er = n(323384),
    es = n(513461),
    ea = n(791606),
    eo = n(266062);
function el(e, t, n) {
    return (0, r.jsx)(X.hV, { count: e, color: t, "aria-hidden": n });
}
function eu(e) {
    let t,
        {
            audio: n,
            video: i,
            screenshare: r,
            isCurrentUserConnected: s,
            liveStage: a,
            activeEvent: o,
            activity: l,
        } = e;
    if (o) t = J.C;
    else if (a) t = ee.q;
    else if (r) t = et.k;
    else if (i) t = en.n;
    else if (n) t = ei.H;
    else {
        if (!l) return null;
        t = er.k;
    }
    return ed({ icon: t, isCurrentUserConnected: s });
}
function ec(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case es.B5.SUBMITTED:
                    return [void 0, z.O];
                case es.B5.REJECTED:
                    return [m.A.unsafe_rawColors.RED_400.css, $.P];
                case es.B5.APPROVED:
                    return [m.A.unsafe_rawColors.GREEN_360.css, q.A];
                default:
                    return [void 0, Z.R];
            }
        })(t);
    return ed({ icon: i, color: n });
}
function ed(e) {
    let { icon: t, color: n, isCurrentUserConnected: i } = e;
    return (0, r.jsx)(X.fk, {
        icon: t,
        className: o()(eo.bG, { [eo.gB]: i }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
var e_ = n(855725),
    ef = n(532794),
    eh = n(366811),
    ep = n(345942),
    eE = n(616356),
    em = n(734057),
    eg = n(309010),
    eA = n(977997),
    eI = n(935208),
    eT = n(181079),
    eS = n(422258),
    eN = n(668267),
    ey = n(5180),
    eC = n(695633),
    ev = n(152007),
    eO = n(458294),
    eR = n(576705),
    eb = n(222823),
    eD = n(543465),
    eL = n(3026),
    ew = n(990078),
    eM = n(597601),
    eP = n(834730),
    ex = n(183623),
    eU = n(104171),
    ek = n(63995),
    eG = n(518769),
    eF = n(287809),
    eV = n(607567),
    eB = n(403362),
    eH = n(652215),
    ej = n(375708),
    eY = n(621035);
function eW(e, t) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eY.nM,
              children: [
                  (0, r.jsx)(e, { className: eY.RI, color: "currentColor" }),
                  (0, r.jsx)(eU.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eK() {
    let e = (0, f.yK)([eT.A, em.A], () =>
            eI.default
                .keys(eT.A.getFavoriteChannels())
                .map((e) => em.A.getChannel(e))
                .filter(eB.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eH.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eH.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        s = (0, f.yK)(
            [eV.Ay],
            () =>
                u().flatMap(n, (e) =>
                    eV.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        a = (0, f.yK)([ek.A], () =>
            u().flatMap(i, (e) =>
                ek.A.getMutableParticipants(e, eG.ip.SPEAKER)
                    .filter((e) => e.type === eG.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        o = (0, f.bG)([ek.A], () => {
            let e = 0;
            for (let t of i) e += ek.A.getParticipantCount(t, eG.ip.AUDIENCE);
            return e;
        }),
        l = (0, f.yK)(
            [eE.A],
            () =>
                eE.A.getAllApplicationStreams()
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
        d = (0, f.yK)([eF.default], () => c.map((e) => eF.default.getUser(e)), [c]),
        _ = (0, f.yK)([eF.default], () => l.map((e) => eF.default.getUser(e)), [l]),
        h = eW(
            ei.H,
            s.filter((e) => !l.includes(e.id) && !c.includes(e.id)),
        ),
        p =
            0 === a.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eY.nM,
                      children: [
                          (0, r.jsx)(ee.q, { size: "lg", color: "currentColor", className: eY.RI }),
                          (0, r.jsx)(eU.Ay, { guildId: void 0, users: a, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eY.GZ,
                              children: [
                                  (0, r.jsx)(eM.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eP.E, {
                                      className: eY._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: o,
                                  }),
                              ],
                          }),
                      ],
                  }),
        E = eW(
            ex.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        m = eW(er.k, d);
    return (0, r.jsxs)(r.Fragment, { children: [p, h, E, m] });
}
function ez() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: o()(eY.nM, eY.Dl),
                children: (0, r.jsx)("span", { className: o()(eY.cN, eY.NT), children: ej.intl.string(ej.t.wMWyci) }),
            }),
            (0, r.jsx)(eK, {}),
        ],
    });
}
function e$(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = s.useMemo(() => (0, r.jsx)("div", { className: eY.A_, children: (0, r.jsx)(ez, {}) }), []);
    return (0, r.jsx)(ew.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eq = n(97483),
    eZ = n(49999),
    eX = n(788868),
    eQ = n(335993),
    eJ = n(959495),
    e0 = n(988572);
let e1 = { analyticsSource: { page: eH.liQ.GUILD_CHANNEL, section: eH.JJy.CHANNEL_LIST, object: eH.ZSU.CHANNEL } };
function e2(e) {
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
        D = (0, eL.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: L,
            favoriteGuildMuted: w,
            favoriteChannels: P,
        } = (0, f.cf)([eT.A], () => ({
            favoriteGuildEnabled: eT.A.favoriteGuildEnabled,
            favoriteChannels: eT.A.getFavoriteChannels(),
            favoriteGuildMuted: eT.A.favoriteGuildMuted,
        })),
        z = (0, f.bG)([eg.A], () => eg.A.getChannelId(eH.YYv)),
        $ = (0, f.bG)([em.A], () => em.A.getChannel(z)),
        q = (0, eh.A)((e) => e.guildId),
        Z = (0, ey.ai)(q),
        { badge: X, unread: Q } = (0, f.cf)([eC.A, em.A, eO.default, ev.A, eR.A, eb.Ay, eD.Ay], () =>
            eI.default.keys(P).reduce(
                (e, t) => {
                    let n = em.A.getChannel(t),
                        i = n?.getGuildId(),
                        r = eb.Ay.getMentionCount(t);
                    if (
                        ((e.badge = e.badge + r),
                        (e.unread = e.unread || (eb.Ay.hasUnread(t) && eO.default.shouldCountChannelUnread(n, r))),
                        null != i)
                    ) {
                        let n = eC.A.getActiveJoinedRelevantThreadsForParent(i, t);
                        for (let t in n) {
                            let n = eb.Ay.getMentionCount(t);
                            e.badge += n;
                            let i = em.A.getChannel(t);
                            e.unread = e.unread || (eb.Ay.hasUnread(t) && eO.default.shouldCountChannelUnread(i, n));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            ),
        ),
        J =
            ((i = null != (t = (0, f.bG)([eg.A], () => eg.A.getVoiceChannelId())) && null != P[t]),
            (a = (0, f.bG)([eE.A], () => {
                if (!i) return !1;
                let e = eE.A.getCurrentUserActiveStream();
                return null != e && null != P[e.channelId];
            })),
            (o = (0, f.bG)([eE.A], () => eE.A.getAllApplicationStreams().some((e) => null != P[e.channelId]))),
            (l = (0, f.bG)([eA.A], () => i && null != t && eA.A.hasVideo(t), [i, t])),
            (u = (0, f.yK)([j.Ay], () =>
                eI.default.keys(P).reduce((e, t) => (e.push(...j.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
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
            eu({ audio: h, video: p, screenshare: E, liveStage: !1, isCurrentUserConnected: i, activity: m })),
        ee = X > 0 ? (0, e_.w)(X) : null,
        et = s.useRef(!1),
        { hasAccess: en } = (0, M.TW)("FavoritesButton"),
        ei = s.useCallback(
            (e, t) => {
                (et.current = !0), I(e, t);
            },
            [I],
        ),
        er = s.useCallback(
            (e) => {
                e && ((0, eN.mv)("intro_dc"), (0, ep.u)(eH.YYv)),
                    en
                        ? (L || (0, eS.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, g.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("24092"),
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
                        : e && (0, ef.A)({ subscriptionTier: eX.pe.TIER_2, analyticsLocations: C }),
                    ei(eZ.i.TAKE_ACTION);
            },
            [ei, L, en, C],
        );
    return (
        s.useEffect(() => {
            A && (et.current = !1);
        }, [A]),
        s.useEffect(
            () => () => {
                A && !et.current && ei(eZ.i.AUTO_DISMISS, !0);
            },
            [ei, A],
        ),
        s.useEffect(() => {
            if (S) {
                let e = (0, U.o)(ej.intl.string(ej.t["4tSWQg"]), eq.Ck.FAVORITE);
                (0, k.P0)(e);
                let t = setTimeout(N, e.options?.duration ?? eq.jg.duration);
                return () => {
                    N(), clearTimeout(t);
                };
            }
        }, [S, N]),
        (0, r.jsxs)(K.c, {
            children: [
                (0, r.jsx)(W.A, { overlay: !0, selected: Z, hovered: v, unread: Q && !w }),
                (0, r.jsx)(e$, {
                    children: (0, r.jsx)(G.Q, {
                        selected: !0,
                        upperBadge: J,
                        lowerBadge: ee,
                        children: (0, r.jsx)("div", {
                            ref: y,
                            children: (0, r.jsx)(F.j, {
                                ...T,
                                ariaLabel: ej.intl.formatToPlainString(ej.t["/uzRss"], {
                                    guildName: ej.intl.string(ej.t.wMWyci),
                                    mentions: X,
                                }),
                                "aria-selected": Z,
                                to: { pathname: eH.BVt.CHANNEL(eH.YYv, z), state: e1 },
                                selected: Z || v,
                                onClick: () => {
                                    A && er(!1);
                                },
                                onMouseEnter: () => b(!0),
                                onMouseLeave: () => b(!1),
                                onMouseDown: function () {
                                    null != $ && H.A.preload($.guild_id, $.id);
                                },
                                onContextMenu: D,
                                children: (0, r.jsx)(V.G, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: eJ.w,
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
                        graphic: { src: e0.A, type: "image", aspectRatio: "16/9" },
                        title: ej.intl.string(eQ.default["bu/mLv"]),
                        body: ej.intl.string(eQ.default["/x2jT7"]),
                        onRequestClose: () => ei(eZ.i.USER_DISMISS),
                        actions: [
                            {
                                icon: B.t,
                                text: en ? ej.intl.string(eQ.default["0lHa0Z"]) : ej.intl.string(eQ.default["0nZZEk"]),
                                onClick: () => er(!0),
                                variant: en ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
var e3 = n(633965),
    e6 = n(857071),
    e4 = n(851109),
    e5 = n(72314),
    e7 = n(543897),
    e8 = n(696451),
    e9 = n(71393),
    te = n(711014),
    tt = n(723702),
    tn = n(757780),
    ti = n(263715),
    tr = n(967198),
    ts = n(173860),
    ta = n(383394),
    to = n(131677),
    tl = n(228366);
let tu = {};
class tc extends f.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (tu[t] = e[t]);
            });
    }
    getState() {
        return tu;
    }
    hasViewed(e) {
        return null != tu[e];
    }
}
let td = new tc(tl.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        tu[t] = Date.now();
    },
});
var t_ = n(531685),
    tf = n(583613);
let th = "app-download-item",
    tp = "add-server-item";
function tE() {
    return !1;
}
function tm(e) {
    let t = eO.default.getMutableGuildStates();
    return (
        (e === eH.sFm.SERVER_DISCOVERY_BADGE && !td.hasViewed(eH.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== th && e !== tp && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tg = (0, tf.L_)((e, t, n) => ["null", ...t, ...e, tp, eH.sFm.E3_SERVER_DISCOVERY_BADGE, th]),
    tA = s.forwardRef(function (e, t) {
        let n = (0, f.yK)([te.Ay, to.A, eO.default], () =>
                tg(te.Ay.getGuildFolders(), to.A.getUnreadPrivateChannelIds(), eO.default.getStoreChangeSentinel()),
            ),
            i = (0, f.bG)([t_.A], () => t_.A.isFocused()),
            s = (0, f.bG)([ta.A], () => ta.A.getExpandedFolders());
        return (0, r.jsx)(ts.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: tE,
            textUnread: ej.intl.string(ej.t.y2b7CA),
            textMention: ej.intl.string(ej.t.y2b7CA),
            isMentioned: tm,
            animate: i,
            expandedFolders: s,
        });
    });
n(667532);
var tI = n(868285),
    tT = n(763827),
    tS = n(873174),
    tN = n(778712),
    ty = n(442433),
    tC = n(620982),
    tv = n(571694),
    tO = n(47167),
    tR = n(598104),
    tb = n(994500);
function tD(e, t) {
    return e
        .filter((e) => (0, eB.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tb.A.isBlockedOrIgnored(e.id)));
}
function tL(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tb.A.isBlockedOrIgnored(e)));
}
var tw = n(427358),
    tM = n(907459),
    tP = n(145408);
function tx(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: eY.nM,
              children: [
                  (0, r.jsx)(t, { className: eY.RI, color: "currentColor" }),
                  (0, r.jsx)(eU.Ay, { users: n, max: 6 }),
              ],
          });
}
function tU(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eP.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ej.intl.string(ej.t.fpKdS1),
          })
        : (0, r.jsx)(tP.A, { muteConfig: t, className: n });
}
function tk(e) {
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
        (n = (0, f.yK)([tb.A], () => tb.A.getBlockedOrIgnoredIDs())),
        (i = (0, f.bG)([tw.A], () => tw.A.getUserAffinitiesMap(), [])),
        (a = (0, f.yK)(
            [j.Ay, eF.default],
            () =>
                j.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eF.default.getUser(e)),
            [t],
        )),
        (l = s.useMemo(() => tD(a, n), [a, n])),
        (u = s.useMemo(() => (0, tM.L)(l, i, "DirectMessageTooltip - activityUsers"), [l, i])),
        (c = (0, f.yK)(
            [eE.A, eF.default],
            () =>
                tD(
                    eE.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => eF.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (d = s.useMemo(() => tD(c, n), [c, n])),
        (_ = s.useMemo(() => (0, tM.L)(d, i, "DirectMessageTooltip - activityUsers"), [d, i])),
        (h = s.useMemo(() => _.filter((e) => !u.some((t) => t.id === e.id)), [_, u])),
        (p = (0, f.yK)(
            [eV.Ay],
            () =>
                tD(
                    eV.Ay.getVoiceStatesForChannel(g).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [g, n],
        )),
        (E = s.useMemo(() => tD(p, n), [p, n])),
        (m = s.useMemo(() => (0, tM.L)(E, i, "DirectMessageTooltip - voiceUsers"), [E, i])),
        {
            voiceUsers: s.useMemo(
                () => m.filter((e) => !u.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [m, u, _],
            ),
            streamUsers: h,
            activityUsers: u,
        }),
        N = (0, r.jsx)(tx, { icon: ei.H, users: S }),
        y = (0, r.jsx)(tx, { icon: ex.F, users: T }),
        C = (0, r.jsx)(tx, { icon: er.k, users: I }),
        { isMuted: v, muteConfig: O } = (0, f.cf)(
            [eD.Ay],
            () => ({ isMuted: eD.Ay.isChannelMuted(null, A), muteConfig: eD.Ay.getChannelMuteConfig(null, A) }),
            [A],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N,
            y,
            C,
            v ? (0, r.jsx)(tU, { muteConfig: O, className: o()(eY.LM, { [eY.Sx]: null != N || null != y }) }) : null,
        ],
    });
}
function tG(e) {
    let { channel: t } = e,
        n = (0, tO.Ay)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: o()(eY.nM, eY.Dl),
                children: (0, r.jsx)("span", { className: o()(eY.cN, eY.NT), children: n }),
            }),
            (0, r.jsx)(tk, { channel: t }),
        ],
    });
}
function tF(e) {
    let { channel: t, children: n } = e,
        i = (0, tO.Ay)(t),
        a = s.useMemo(() => (0, r.jsx)("div", { className: eY.A_, children: (0, r.jsx)(tG, { channel: t }) }), [t]);
    return (0, r.jsx)(ew.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let tV = { friction: 28, tension: 600 };
function tB(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tV };
        case "scale":
            return { ...tV };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tH extends s.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new tS.Controller({ scale: 0, height: 0, opacity: 0, config: tB }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !t_.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tB })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tB }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !t_.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tB }).start().then(e),
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
            t = e.type === eH.rbe.DM ? eF.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tv.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eH.rbe.DM ? eF.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, ty.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("11397"),
                      n.e("79450"),
                      n.e("94513"),
                      n.e("30402"),
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
                      n.e("86169"),
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
            : (0, ty.L3)(e, async () => {
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
                    to: eH.BVt.CHANNEL(eH.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || f,
                    ariaLabel:
                        null != t
                            ? [
                                  ej.intl.formatToPlainString(ej.t.hKarnZ, { name: t, mentions: i }),
                                  u ? ej.intl.string(ej.t["fk1/bX"]) : c ? ej.intl.string(ej.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: p ? void 0 : this.getChannelIcon(),
                    backgroundStyle: p ? "on-hover" : "always",
                    children: p
                        ? (0, r.jsx)(tR.A, {
                              channel: e,
                              size: tN._3.SIZE_40,
                              facepileSizeOverride: tN._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, r.jsx)(tS.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(W.A, { overlay: !0, hovered: !h && f, selected: !h && n, unread: !h && d }),
                    (0, r.jsx)(tF, {
                        channel: e,
                        children: (0, r.jsx)(G.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? el(i, void 0, !0) : null,
                            upperBadge: eu({ audio: s, video: a, screenshare: o, isCurrentUserConnected: l }),
                            lowerBadgeSize: { width: (0, X.o6)(i) },
                            children: E(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tj = s.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, tO.Ay)(e.channel),
        s = (0, d.Vd)(n, 2),
        a = (0, f.bG)([tT.A], () => tT.A.getChannelId(), []),
        o = (0, f.bG)([b.A], () => b.A.getMode(n), [n]),
        l = (0, f.bG)([eE.A], () => eE.A.getAllApplicationStreamsForChannel(n).length > 0),
        u = (0, f.bG)([eV.Ay], () => eV.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, f.bG)([eg.A], () => eg.A.getChannelId(), []),
        _ = (0, f.bG)([eb.Ay], () => eb.Ay.getMentionCount(n), [n]),
        h = a === n,
        { isIncomingCall: p, isOngoingCall: E } = (0, tC.A)(n),
        g = !1,
        A = !1;
    (h || u) && ((g = o === eH._Of.VOICE), (A = o === eH._Of.VIDEO));
    let I = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(tH, {
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
function tY() {
    (0, f.bG)([em.A], () => em.A.getPrivateChannelsVersion());
    let e = em.A.getMutablePrivateChannels(),
        t = (0, f.yK)([to.A], () => to.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, f.cf)([tT.A], () => ({
            selectedVoiceGuildId: tT.A.getGuildId(),
            selectedVoiceChannelId: tT.A.getChannelId(),
        })),
        a = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, r.jsx)(tj, { channel: n }, n.id);
        }),
        o = null == n && null != i ? e[i] : null;
    return (
        null != o && a.unshift((0, r.jsx)(tj, { channel: o }, o.id)),
        (0, r.jsx)(A.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": ej.intl.string(ej.t.YUU0RF),
            gap: "xs",
            hidden: a.length < 1,
            children: (0, r.jsx)(tI.F, { component: s.Fragment, children: a }),
        })
    );
}
var tW = n(32880),
    tK = n(939249),
    tz = n(547732);
function t$(e) {
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
        _ = s.useMemo(() => (null == n || a ? null : (0, r.jsx)("div", { className: tz.SH, children: n })), [n, a]),
        f = i ? t : (0, r.jsx)("div", { className: o()(tz.pm, { [tz.wH]: d }), children: t });
    return (0, r.jsx)(ew.m, {
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
var tq = n(530787);
let tZ = s.forwardRef(function (e, t) {
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
            C = "string" == typeof c && null == m ? c : m;
        return (0, r.jsxs)(K.c, {
            children: [
                p ? (0, r.jsx)(W.A, { overlay: !0, hovered: N, selected: u }) : null,
                (0, r.jsx)(t$, {
                    text: c,
                    selected: u,
                    children: (0, r.jsx)(G.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: f,
                        lowerBadgeSize: h,
                        children: (0, r.jsx)(tK.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                A?.(), y(!0);
                            },
                            onMouseLeave: () => {
                                I?.(), y(!1);
                            },
                            onMouseDown: T,
                            className: o()(tq.oZ, E, { [tq.wH]: u || N }),
                            onClick: i,
                            "aria-label": C,
                            "aria-selected": u,
                            onContextMenu: a,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != l && (0, r.jsx)(l, { className: tq.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                g,
            ],
        });
    }),
    tX = "DOWNLOAD_APPS";
function tQ() {
    let e = (0, g.useModalsStore)((e) => (0, g.hasModalOpenSelector)(e, tX));
    return (0, r.jsx)(tZ, {
        id: "app-download-button",
        onClick: () => {
            (0, g.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, r.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tX },
            );
        },
        selected: e,
        tooltip: ej.intl.string(ej.t.Z7jwrJ),
        icon: tW.s,
    });
}
var tJ = n(245604),
    t0 = n(272613),
    t1 = n(398884),
    t2 = n(772366),
    t3 = n(728321),
    t6 = n(260509),
    t4 = n(284009),
    t5 = n.n(t4),
    t7 = n(295868),
    t8 = n(66834),
    t9 = n(174459),
    ne = n(787426);
function nt(e) {
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
function nn(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        t5()(t.type !== ti.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== ti.PJ.FOLDER || t.type !== ti.PJ.FOLDER) &&
                (e.type !== ti.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: r } = e;
                i && t.type !== ti.PJ.FOLDER && t9.default.track(eH.HAw.GUILD_FOLDER_CREATED),
                    t8.A.moveById(r, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function ni(e) {
    let { name: t, targetNode: n, combine: i, below: a } = e,
        o = s.useMemo(() => nn([ti.PJ.GUILD, ti.PJ.FOLDER], n, a, i), [n, a, i]),
        [{ canDrop: l, isOver: u }, c] = (0, t7.H)(o),
        d = nt([
            [l, ne.OP],
            [u, ne.NQ],
        ]);
    return (0, r.jsx)("div", {
        ref: (e) => {
            (d.current = e), c(e);
        },
        "data-dnd-name": ej.intl.formatToPlainString(ej.t["A5aDw+"], { itemName: t }),
        className: ne.aC,
    });
}
function nr(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: a, isOver: l }, u] = (0, t7.H)(() => nn([ti.PJ.GUILD], n, !0, !0));
    s.useEffect(() => {
        i?.(l);
    }, [i, l]);
    let c = nt([
        [a, ne.OP],
        [l, ne.NQ],
    ]);
    return (0, r.jsx)(t$, {
        text: t,
        shouldShow: l,
        forceOpen: l,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: (e) => {
                (c.current = e), u(e);
            },
            "data-dnd-name": ej.intl.formatToPlainString(ej.t.qiQ0QI, { itemName: t }),
            className: o()(ne.dw, {}),
        }),
    });
}
let ns = s.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: s = !1, onDragOverChanged: a } = e,
        o = !i && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: ne.iE,
        "aria-hidden": !0,
        children: [
            (0, r.jsx)(ni, { name: t, targetNode: n, below: s }),
            o ? (0, r.jsx)(nr, { name: t, targetNode: n, onDragOverChanged: a }) : null,
        ],
    });
});
function na(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: s }, a] = (0, t7.H)(() => nn([ti.PJ.GUILD], n, !0, !0)),
        o = nt([[s, ne.a7]]),
        l = nt([
            [s, ne.NQ],
            [i, ne.OP],
        ]);
    return (0, r.jsx)("div", {
        ref: o,
        className: ne.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: ne.aO,
            children: (0, r.jsx)("div", {
                ref: (e) => {
                    (l.current = e), a(e);
                },
                "aria-label": `At end of ${t}`,
                className: ne.aC,
            }),
        }),
    });
}
function no(e) {
    let { children: t } = e,
        [, n] = (0, t7.H)({ accept: [] });
    return (0, r.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var nl = n(819638);
let nu = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nc(e) {
    (0, ty.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function nd(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, f.yK)([e9.A], () => e9.A.getGuildsArray()),
        a = (0, f.bG)([eF.default], () => eF.default.getCurrentUser()),
        o = s.useMemo(() => i.some((e) => (0, t6.bM)(e, a)), [i, a]),
        l = (0, g.useModalsStore)((e) => (0, g.hasModalOpenSelector)(e, nl.fc)),
        { analyticsLocations: u } = (0, R.Ay)();
    return (0, r.jsx)("div", {
        className: eo.Uq,
        children: (0, r.jsxs)(t3.A, {
            tutorialId: o ? "create-more-servers" : "create-first-server",
            inlineSpecs: nu,
            position: "right",
            disabled: t,
            children: [
                (0, r.jsx)(tZ, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: () => {
                        (0, t1.Sn)()
                            ? (0, t2.A)({
                                  analyticsSource: { page: eH.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eH.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eH.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: u,
                              })
                            : t0.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: l,
                    onContextMenu: nc,
                    tooltip: ej.intl.string(ej.t.l5WIbf),
                    icon: tJ.U,
                }),
                null != n &&
                    (0, r.jsx)(ns, { name: ej.intl.string(ej.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var n_ = n(486020),
    nf = n(962795);
function nh(e) {
    let [t, i] = s.useState(!1),
        a = (0, d.Vd)(`guild-${e.id}`);
    return (0, r.jsx)(K.c, {
        children: (0, r.jsx)(t$, {
            text: e.name,
            children: (0, r.jsx)(G.Q, {
                className: nf.o,
                selected: t,
                lowerBadge: (0, r.jsx)(X.fk, { icon: (0, Q.k)(ea.A), disableColor: !0, className: nf._ }),
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
                            ? n_.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...a,
                }),
            }),
        }),
    });
}
var np = n(696292),
    nE = n(836480),
    nm = n(533129),
    ng = n(726845),
    nA = n(837057),
    nI = n(310419),
    nT = n(488995),
    nS = n(324580),
    nN = n(190107);
let ny = s.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: a, className: o } = e,
        l = s.useCallback(() => {
            (0, nm.WL)({ source: nT.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== a ? nT.GlobalDiscoveryTab.QUESTS : ng.A.getField("selectedTab");
            switch (e) {
                case nT.GlobalDiscoveryTab.QUESTS:
                    return (0, nA.transitionToGlobalDiscovery)({
                        tab: nT.GlobalDiscoveryTab.QUESTS,
                        location: nN.rE.DISCOVERY_COMPASS,
                        questContent: np.u.DISCOVERY_COMPASS,
                        questId: a,
                    });
                case nT.GlobalDiscoveryTab.SERVERS:
                    return (0, nA.transitionToGlobalDiscovery)({
                        tab: nT.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nS.J8.GUILDS_BAR,
                    });
                case nT.GlobalDiscoveryTab.APPS:
                    return (0, nA.transitionToGlobalDiscovery)({
                        tab: nT.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nI.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, nA.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [a]);
    return (0, r.jsx)(tZ, {
        id: "guild-discover-button",
        ref: t,
        className: o,
        onClick: () => {
            l(), void 0 !== i && i();
        },
        selected: n,
        tooltip: ej.intl.string(ej.t["4nEZLk"]),
        icon: nE.Q,
    });
});
var nC = n(506774),
    nv = n(509963),
    nO = n(111159),
    nR = n(793943),
    nb = n(428262),
    nD = n(350972),
    nL = n(677056),
    nw = n(526162),
    nM = n(174197);
function nP() {
    let [e, t] = (0, f.yK)([eF.default, nw.A], () => [
            nw.A.getCurrentDesktopIcon(),
            nb.Ay.isPremium(eF.default.getCurrentUser()),
        ]),
        n = (0, nR.fy)().activePanel === nR.HP.APP_ICON,
        i = (0, nM.gG)(e),
        s = i.id !== nD.LW.DEFAULT && (t || n),
        a = (0, r.jsx)(nO.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && s ? (0, r.jsx)(nL.A, { id: i.id, size: nM.N8.SIZE_48 }) : a;
}
var nx = n(531260),
    nU = n(411976),
    nk = n(912309),
    nG = n(400492),
    nF = n(354670),
    nV = n(619921),
    nB = n(340829),
    nH = n(966846),
    nj = n(674378),
    nY = n(394953),
    nW = n(235079),
    nK = n(30186);
let nz = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function n$(e) {
    let { selected: t, user: n, badge: i, link: a, showProgressBadge: o } = e,
        [l, u] = s.useState(!1),
        [c, _] = s.useState(!1),
        [f, h] = s.useState(null),
        [p, E] = s.useState(0),
        m = (0, d.Vd)("home"),
        g = (0, nR.fy)().activePanel === nR.HP.APP_ICON,
        A = () => {
            h(null), E(0), clearTimeout(f);
        };
    if (null == n) return null;
    let I = ej.intl.string(ej.t.YUU0RF);
    c && (I = nC.w.get(eH.wqg) ? ej.intl.string(ej.t["nkq1l+"]) : ej.intl.string(ej.t.Be8Q5E));
    let T = null;
    !t && o && (T = (0, r.jsx)(nv.A, { className: nK.Cp, determineOwnVisibility: !1 }));
    let S = t || l || g,
        N = (0, r.jsx)(G.Q, {
            selected: !0,
            lowerBadge: i > 0 ? el(i) : null,
            upperBadge: T,
            lowerBadgeSize: { width: (0, X.o6)(i) },
            children: (0, r.jsx)(F.j, {
                onMouseEnter: () => u(!0),
                onMouseLeave: () => u(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != f && clearTimeout(f), h(setTimeout(A, 500)), E(p + 1), 15 === p)) {
                        A();
                        let e = !nC.w.get(eH.wqg);
                        nC.w.set(eH.wqg, e),
                            e && nC.w.set(nW.L, !0),
                            e ? (0, nG.Ak)("discodo") : (0, nG.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: ej.intl.string(ej.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...m,
                to: {
                    pathname: a,
                    state: {
                        analyticsSource: {
                            page: eH.liQ.GUILD_CHANNEL,
                            section: eH.JJy.NAVIGATION,
                            object: eH.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, r.jsx)(nP, {}),
            }),
        });
    return (0, r.jsx)("div", {
        className: nK.Uq,
        children: (0, r.jsx)(t3.A, {
            inlineSpecs: nz,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(W.A, { overlay: !0, selected: t, hovered: l }),
                    (0, r.jsx)(t$, { hideOnClick: !0, text: I, selected: t, children: N }),
                ],
            }),
        }),
    });
}
function nq() {
    let e = (function () {
            let e = (0, eh.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eH.BVt.GUILD_DISCOVERY) || t.startsWith(eH.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eH.BVt.GUILD_MEMBER_VERIFICATION("")),
                r = (0, nY.lI)();
            return null == e && !(n || i || r);
        })(),
        t = (0, f.bG)([nH.A, nB.A], () => {
            let e = (0, nv.v)(nH.A.activeItems, nB.A),
                { total: t, progress: n } = nj.zY(e),
                i = nj.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nk.kX)(),
        i = Object.keys(eX.TP),
        s = (0, nx.A)(),
        { unviewedTrialCount: a, unviewedDiscountCount: o } = (0, f.cf)([nF.A], () => ({
            unviewedTrialCount: nF.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nF.A.getUnacknowledgedDiscountOffers().length,
        })),
        l = s.fractionalState === eX.xc.NONE ? a + o : 0,
        u = (0, f.bG)([eF.default], () => eF.default.getCurrentUser()),
        d = (0, nU.W)(),
        _ = n + l + d,
        h = _ === l && l > 0 && n + d === 0,
        p = nV.A.getHomeLink();
    return (
        h && (p = eH.BVt.APPLICATION_STORE),
        (0, r.jsx)(n$, {
            selected: e,
            user: u,
            selectedChannelId: eg.A.getChannelId(eH.ME),
            badge: _,
            link: p,
            showProgressBadge: t,
        })
    );
}
var nZ = n(473201);
function nX(e) {
    let { fullWidth: t } = e;
    return (0, r.jsx)(K.c, { children: (0, r.jsx)("div", { className: o()(nZ.t, { [nZ.I]: t }) }) });
}
var nQ = n(349288),
    nJ = n(695366),
    n0 = n(919638),
    n1 = n(818348),
    n2 = n(585212);
function n3() {
    let e = (0, f.bG)([n0.A, e9.A], () => n0.A.unavailableGuilds.filter((e) => null == e9.A.getGuild(e)).length),
        t = (0, d.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, r.jsx)(K.c, {
              children: (0, r.jsx)(t$, {
                  text: ej.intl.format(ej.t["TnH05/"], { count: e }),
                  children: (0, r.jsx)(nQ.Anchor, {
                      href: n1.qF.STATUS,
                      target: "_blank",
                      className: n2.h,
                      "aria-label": ej.intl.formatToPlainString(ej.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, r.jsx)(nJ.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var n6 = n(312742),
    n4 = n(317097),
    n5 = n(319060),
    n7 = n(866323),
    n8 = n(817281),
    n9 = n(534409),
    ie = n(240248),
    it = n(678708),
    ii = n(187322),
    ir = n(140735),
    is = n(548118),
    ia = n(273923);
function io(e) {
    let { guildId: t, animate: n } = e,
        i = (0, f.bG)([e9.A], () => e9.A.getGuild(t), [t]),
        s = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, r.jsx)("div", { className: o()(ia.VL, ia.zU), children: (0, r.jsx)(nJ.E, { color: "currentColor" }) })
        : (0, r.jsx)(is.Ay, {
              guild: i,
              animate: n,
              size: is.Ay.Sizes.MINI,
              iconSize: s,
              lossless: !0,
              className: ia.VL,
              tabIndex: -1,
          });
}
function il(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: s } = t,
        a = n && i,
        l = (0, r.jsx)("div", {
            className: ia.hJ,
            children: (0, r.jsx)("div", {
                className: ia.Eh,
                children: (0, r.jsx)(it.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        u = (0, r.jsx)("div", {
            className: ia.qJ,
            children: (0, r.jsx)("div", {
                className: ia.jg,
                children: s.slice(0, 4).map((e) => (0, r.jsx)(io, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: o()({ [ia.NG]: a, [ia.yd]: !a }),
        children: [!a && l, u],
    });
}
function iu(e) {
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
        C = n || null == a ? null : eu(a),
        v =
            !n && o > 0
                ? el(o, l ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css)
                : null;
    return (0, r.jsx)(ii.vN, {
        children: (0, r.jsxs)(tK.D, {
            className: ia.H3,
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
                (0, r.jsx)(ir.A, {
                    children: ej.intl.formatToPlainString(ej.t["90/DwM"], { folderName: u, mentions: o }),
                }),
                (0, r.jsx)(G.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: C,
                    lowerBadge: v,
                    lowerBadgeSize: { width: (0, X.o6)(o) },
                    children: (0, r.jsx)("div", {
                        className: ia.vA,
                        children:
                            null != d
                                ? (0, r.jsx)("div", { className: ia.hJ, children: d })
                                : (0, r.jsx)(il, { folderNode: t, hovered: T, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var ic = n(573435),
    id = n(643918);
function i_(e) {
    let { className: t, isFolder: n } = e,
        i = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsx)(ic.Ay, {
        mask: ic.Ay.Masks.SQUIRCLE,
        className: o()(t, id.OL, { [id.lQ]: n }),
        width: i,
        height: i,
        children: (0, r.jsx)("div", { className: id.ZU }),
    });
}
var ih = n(114329),
    ip = n(620370);
let iE = (0, ie.xI)(n5.A.FOLDER_ITEM_ANIMATION_DURATION),
    im = (0, tS.animated)(A.B),
    ig = s.memo(function (e) {
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
            F = (0, n9.qK)("FolderItem");
        s.useEffect(() => {
            I && x(!1);
        }, [I]);
        let [{ dragging: V }, B] = (0, n6.i)({
                type: ti.PJ.FOLDER,
                item: () => (S?.(), { type: ti.PJ.FOLDER, nodeId: l.id }),
                end() {
                    N?.(), (0, n8.um)(te.Ay.getCompatibleGuildFolders());
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
            Y = null != w && "" !== w ? w : null != g && "" !== g ? g : ej.intl.string(ej.t.xV9hVh),
            z = (0, d.Vd)(`${L}`),
            $ = `folder-items-${L}`,
            q =
                ((t = M.length),
                (n = (0, T.r)(m.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (a = (0, T.r)(m.A.space.SPACE_XS))) - a + (a - (n - i) / 2) + (0, T.r)(m.A.space.SPACE_4)),
            Z = (0, n7.p)(!V && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: iE },
            }),
            X = s.useCallback((e) => u?.(L, e), [u, L]),
            Q = (0, r.jsxs)(K.c, {
                children: [
                    (0, r.jsx)(W.A, { overlay: !0, disabled: V || _, hovered: P, selected: c, unread: E }),
                    (0, r.jsx)(t$, {
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
                            className: o()(ia.MJ, { [ia.L0]: "icon" === O || F, [ip.oR]: !V && U && !_ }),
                            "data-dnd-name": Y,
                            children: V
                                ? (0, r.jsx)(i_, { isFolder: !0 })
                                : (0, r.jsx)(iu, {
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
                    A ? (0, r.jsx)(ns, { name: Y, targetNode: l, onDragOverChanged: H }) : null,
                ],
            }),
            J = null != l.color ? l.color : ih.DO,
            ee = J === ih.DO ? void 0 : (0, n4.Hl)(J);
        return (0, r.jsxs)("div", {
            ref: X,
            className: o()(ia.qc, { [ia.Av]: _, [ia.Lg]: G }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": U,
            children: [
                !V && _ && (0, r.jsx)("span", { className: ia.GO }),
                Q,
                Z((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, r.jsx)(
                            im,
                            {
                                id: $,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: ia.TN,
                                style: { height: e.height.to((e) => e * q) },
                                "aria-label": l.name,
                                children: M.map((t, n) => v(t, n, M.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                A && _ ? (0, r.jsx)(na, { name: Y, targetNode: l }) : null,
            ],
        });
    });
var iA = n(354583);
let iI = s.memo(function (e) {
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
        N = (0, eh.A)((e) => e.guildId),
        y = (0, f.bG)([ta.A], () => ta.A.isFolderExpanded(g)),
        C = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = e9.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eB.Vq),
                n = 2 * eH.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(E),
        v =
            ((t = (0, f.bG)([tT.A], () => tT.A.getGuildId())),
            (i = E.children.map((e) => e.id)),
            (a = null != t && i.includes(t)),
            (o = !1),
            (l = !1),
            (u = !1),
            (c = (0, f.bG)([tT.A], () => tT.A.getChannelId())),
            (_ = null != (d = (0, iA.A)()?.guild_id) && i.includes(d)),
            (h = (0, f.bG)([eA.A], () => null != c && eA.A.hasVideo(c), [c])),
            (p = (0, f.bG)([eE.A], () => eE.A.getCurrentUserActiveStream())),
            a && ((o = !h), (l = h), (u = null != p && null != p.guildId && i.includes(p.guildId))),
            s.useMemo(
                () => ({ audio: o, video: l, screenshare: u, liveStage: _, isCurrentUserConnected: a }),
                [o, l, u, _, a],
            )),
        {
            mentionCount: O,
            isMentionLowImportance: R,
            unread: b,
        } = (0, f.cf)([eO.default], () => ({
            mentionCount: S.map((e) => eO.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => eO.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => eO.default.hasUnread(e)),
        })),
        D = s.useCallback(() => {
            t8.A.toggleGuildFolderExpand(g);
        }, [g]),
        L = s.useCallback(
            (e) => {
                (0, ty.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, r.jsx)(e, { ...t, folderId: g, folderName: A, folderColor: I, unread: b || O > 0 });
                });
            },
            [g, A, I, b, O],
        );
    return (0, r.jsx)(ig, {
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
var iT = n(113494),
    iS = n(821124),
    iN = n(212455);
function iy(e) {
    let t = e?.features.has(eH.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, f.bG)([iN.A, eF.default, e8.Ay], () => {
            if (null == e) return;
            let t = iN.A.getRequest(e.id),
                n = eF.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = e8.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, iS.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var iC = n(347951),
    iv = n(478437),
    iO = n(811024),
    iR = n(508654),
    ib = n(233993),
    iD = n(446600),
    iL = n(95701),
    iw = n(495544);
function iM(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eR.A;
    return null != e && e.type !== iv.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eH.hVb.VIEW_CHANNEL, e);
}
function iP(e) {
    let t = (0, f.bG)([eD.Ay], () => eD.Ay.isMuted(e)),
        n = (0, iR.BP)(e),
        i = (0, f.yK)([j.Ay, tb.A], () =>
            j.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tb.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tb.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        r = (0, Y.H)(i[0]?.location),
        s = (0, iO.Gp)(r),
        {
            guildHasVoice: a,
            guildHasVideo: o,
            selectedVoiceChannelHasVideo: l,
        } = (0, f.cf)([eg.A, eA.A, e9.A, eR.A, em.A], () => {
            var n;
            let i = eg.A.getVoiceChannelId(),
                r = e9.A.getGuild(e)?.afkChannelId,
                s = eA.A.getUsersWithVideo(e),
                a =
                    ((n = eA.A.getVoiceStates(e)),
                    u()(n)
                        .filter((e) => !tb.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in a) if (iM(em.A.getBasicChannel(a[e].channelId), r ?? void 0, eR.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of s) if (iM(em.A.getBasicChannel(a[e]?.channelId), r ?? void 0, eR.A)) return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && eA.A.hasVideo(i),
            };
        }, [e, t]),
        c = iw.default.getId();
    return (0, f.cf)([eg.A, em.A, j.Ay, iD.A, eE.A, eR.A], () => {
        let r = eg.A.getVoiceChannelId(),
            u = em.A.getChannel(r)?.guild_id === e,
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
        let m = eI.default.keys(iD.A.getStageInstancesByGuild(e)).some((e) => {
                let t = em.A.getChannel(e);
                return null != t && eR.A.can(ib.Gk, t);
            }),
            g = u && (em.A.getChannel(r)?.isGuildStageVoice() ?? !1),
            A = !!u && null != eE.A.getActiveStreamForUser(c, e),
            I = eE.A.getAllApplicationStreams()
                .filter((e) => !tb.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e),
            T = u && l,
            S = (() => {
                if (s) return i.length > 0;
                for (let e of i) {
                    let t = em.A.getChannel((0, Y.H)(e.location));
                    if (null != t && (0, iL.gV)(t.type)) return !0;
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
var ix = n(607399),
    iU = n(702841),
    ik = n(658128),
    iG = n(976860),
    iF = n(676279);
function iV(e) {
    let { guild: t, show: n, active: i, onAnimationStart: s, onAnimationRest: a } = e,
        l = {},
        u = {};
    (l.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (u.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, T.r)(m.A.unsafe_rawColors.BRAND_500).hex(),
        d = (0, T.r)(m.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((l.backgroundColor = c), (u.backgroundColor = d));
    let _ = (0, n7.p)(n, { from: l, enter: u, leave: l, config: { duration: 100 }, onStart: s, onRest: a });
    return (0, r.jsx)(r.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, r.jsx)(
                    "div",
                    {
                        className: ia.qc,
                        children: (0, r.jsx)("div", {
                            className: o()(ia.MJ, ia.L0),
                            style: { margin: 0 },
                            children: (0, r.jsx)(tS.animated.div, {
                                className: ia.NG,
                                style: e,
                                children: (0, r.jsx)("div", {
                                    className: ia.qJ,
                                    children: (0, r.jsx)("div", {
                                        className: ia.jg,
                                        children: (0, r.jsx)(is.Ay, {
                                            guild: t,
                                            size: is.Ay.Sizes.SMOL,
                                            className: ia.VL,
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
var iB = n(454938),
    iH = n(714991),
    ij = n(107773),
    iY = n(164956),
    iW = n(624265),
    iK = n(970278),
    iz = n(808728);
function i$(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: eY.nM,
              children: [
                  (0, r.jsx)(e, { className: eY.RI, color: "currentColor" }),
                  (0, r.jsx)(eU.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iq(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, r.jsx)(eP.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ej.intl.string(ej.t.fpKdS1),
          })
        : (0, r.jsx)(tP.A, { muteConfig: t, className: n });
}
function iZ(e) {
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
            [iz.Ay, iK.A],
            () => [
                ...iz.Ay.getChannels(t)
                    [iz.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === eH.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(iK.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (i = (0, iW.Ay)(t)),
        (a = s.useMemo(() => i.map((e) => e.id), [i])),
        (l = (0, f.bG)([eV.Ay], () => eV.Ay.getVoiceStates(t), [t])),
        (c = (0, f.yK)([tb.A], () => tb.A.getBlockedOrIgnoredIDs())),
        (d = u().flatMap(n, (e) =>
            e === v.afkChannelId
                ? []
                : tD(
                      (l[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      c,
                  ),
        )),
        (_ = (0, f.yK)([ek.A], () =>
            u().flatMap(a, (e) =>
                e === v.afkChannelId
                    ? []
                    : tD(
                          ek.A.getMutableParticipants(e, eG.ip.SPEAKER)
                              .filter((e) => e.type === eG.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          c,
                      ),
            ),
        )),
        (h = (0, f.bG)([ek.A], () => {
            let e = 0;
            for (let t of a) e += ek.A.getParticipantCount(t, eG.ip.AUDIENCE);
            return e;
        })),
        (p = (0, f.yK)(
            [eE.A],
            () =>
                tL(
                    eE.A.getAllApplicationStreams()
                        .filter((e) => e.guildId === t)
                        .map((e) => e.ownerId),
                    c,
                ),
            [c, t],
        )),
        (E = (0, f.yK)(
            [j.Ay],
            () =>
                tL(
                    j.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    c,
                ),
            [t, c],
        )),
        (m = (0, f.yK)([eF.default], () => tD(E.map((e) => eF.default.getUser(e))), [E])),
        (g = (0, f.yK)([eF.default], () => p.map((e) => eF.default.getUser(e)), [p])),
        (I = tD((A = d.filter((e) => !p.includes(e.id) && !E.includes(e.id))))),
        (T = g.filter((e) => null != e && !E.includes(e.id))),
        (S = (0, f.bG)([tw.A], () => tw.A.getUserAffinitiesMap(), [])),
        (N = s.useMemo(() => (0, tM.L)(I, S, "GuildTooltip - nonBlockedUsers"), [I, S])),
        (y = s.useMemo(() => (0, tM.L)(_, S, "GuildTooltip - stageSpeakers"), [_, S])),
        (C = s.useMemo(() => (0, tM.L)(T, S, "GuildTooltip - streamUsers"), [T, S])),
        {
            voiceUsersToShow: N,
            stageSpeakers: y,
            numStageListeners: h,
            streamUsersToShow: C,
            embeddedActivitiesUsers: s.useMemo(() => (0, tM.L)(m, S, "GuildTooltip - embeddedActivitiesUsers"), [m, S]),
            hasActivity: _.length > 0 || A.length > 0 || T.length > 0 || m.length > 0,
        }),
        M = i$(ei.H, R, O),
        P =
            0 === b.length
                ? null
                : (0, r.jsxs)("div", {
                      className: eY.nM,
                      children: [
                          (0, r.jsx)(ee.q, { size: "lg", color: "currentColor", className: eY.RI }),
                          (0, r.jsx)(eU.Ay, { guildId: O, users: b, max: 3 }),
                          (0, r.jsxs)("div", {
                              className: eY.GZ,
                              children: [
                                  (0, r.jsx)(eM.L, { size: "xs", color: "currentColor" }),
                                  (0, r.jsx)(eP.E, {
                                      className: eY._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: D,
                                  }),
                              ],
                          }),
                      ],
                  }),
        x = i$(ex.F, L, O),
        U = i$(er.k, w, O),
        { isMuted: k, muteConfig: G } = (0, f.cf)(
            [eD.Ay],
            () => ({ isMuted: eD.Ay.isMuted(O), muteConfig: eD.Ay.getMuteConfig(O) }),
            [O],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            P,
            M,
            x,
            U,
            k ? (0, r.jsx)(iq, { muteConfig: G, className: o()(eY.LM, { [eY.Sx]: null != M || null != x }) }) : null,
        ],
    });
}
function iX(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(eP.E, {
        className: eY.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case es.B5.SUBMITTED:
                    return ej.intl.string(ej.t["9KFC98"]);
                case es.B5.REJECTED:
                    return ej.intl.string(ej.t["TQY/Rd"]);
                case es.B5.APPROVED:
                    return ej.intl.string(ej.t.WXHcq5);
                default:
                    return ej.intl.string(ej.t.fjHFC8);
            }
        })(t),
    });
}
function iQ(e) {
    let { guild: t } = e,
        n = (0, iB.A)(t),
        i = iy(t),
        s = null != i ? (0, r.jsx)(iX, { guildJoinRequestStatus: i }) : null,
        a = (0, r.jsx)(iZ, { guild: t }),
        l = (0, f.bG)([iY.A], () => iY.A.isViewingRoles(t.id)),
        u = (0, iC.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(eY.nM, eY.Dl),
                children: [
                    n
                        ? (0, r.jsx)(ij.A, { disableBoostClick: !0, guild: t, className: eY.WX })
                        : (0, r.jsx)(iH.A, { guild: t, size: 20, className: eY.aL }),
                    (0, r.jsx)("span", { className: o()(eY.cN, eY.NT), children: t.name }),
                ],
            }),
            u
                ? (0, r.jsx)(eP.E, {
                      className: eY.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: ej.intl.string(ej.t["2n0/Fk"]),
                  })
                : null,
            l
                ? (0, r.jsx)(eP.E, {
                      className: eY.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: ej.intl.string(ej.t["5LwN89"]),
                  })
                : (s ?? a),
        ],
    });
}
function iJ(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: a } = e,
        o = s.useMemo(
            () => (n ? null : (0, r.jsx)("div", { className: eY.A_, children: (0, r.jsx)(iQ, { guild: t }) })),
            [n, t],
        );
    return (0, r.jsx)(ew.m, {
        __unsupportedReactNodeAsText: o,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: a,
    });
}
let i0 = { analyticsSource: { page: eH.liQ.GUILD_CHANNEL, section: eH.JJy.CHANNEL_LIST, object: eH.ZSU.CHANNEL } };
function i1(e, t) {
    (0, ty.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("63915"),
            n.e("67537"),
            n.e("37813"),
            n.e("94513"),
            n.e("86624"),
            n.e("11397"),
            n.e("79450"),
            n.e("78220"),
            n.e("53395"),
            n.e("46709"),
            n.e("45788"),
            n.e("99961"),
            n.e("94898"),
            n.e("71670"),
            n.e("86028"),
            n.e("43147"),
            n.e("34324"),
            n.e("45650"),
            n.e("97189"),
            n.e("24059"),
            n.e("51402"),
            n.e("85484"),
            n.e("78720"),
            n.e("44186"),
            n.e("79705"),
            n.e("54081"),
            n.e("30708"),
            n.e("83928"),
            n.e("92702"),
            n.e("1271"),
            n.e("33957"),
            n.e("14078"),
            n.e("57006"),
            n.e("85549"),
            n.e("63635"),
            n.e("86479"),
            n.e("68340"),
            n.e("5688"),
            n.e("90238"),
            n.e("69668"),
            n.e("87845"),
            n.e("45317"),
            n.e("30402"),
            n.e("47199"),
            n.e("49089"),
            n.e("61175"),
            n.e("5007"),
            n.e("56574"),
            n.e("4974"),
            n.e("71232"),
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
            n.e("50689"),
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
            n.e("74548"),
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
            n.e("82263"),
            n.e("40258"),
            n.e("66495"),
            n.e("88342"),
            n.e("86127"),
            n.e("39970"),
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
            n.e("75842"),
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
            n.e("48760"),
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
            n.e("234"),
            n.e("87478"),
            n.e("44780"),
            n.e("5557"),
            n.e("59957"),
            n.e("83952"),
            n.e("95340"),
            n.e("62718"),
            n.e("89916"),
            n.e("90301"),
            n.e("49145"),
            n.e("57355"),
            n.e("60773"),
            n.e("9004"),
            n.e("8018"),
            n.e("92295"),
            n.e("68763"),
            n.e("15109"),
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
            n.e("10943"),
            n.e("15920"),
            n.e("68530"),
            n.e("3930"),
            n.e("44057"),
            n.e("3663"),
            n.e("87317"),
            n.e("66580"),
            n.e("78046"),
            n.e("80093"),
            n.e("38601"),
            n.e("73669"),
            n.e("7775"),
            n.e("22547"),
            n.e("60989"),
            n.e("82486"),
            n.e("3710"),
            n.e("45830"),
            n.e("61058"),
            n.e("50342"),
            n.e("33097"),
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
            n.e("34409"),
            n.e("61309"),
            n.e("94529"),
            n.e("30313"),
            n.e("98093"),
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
let i2 = s.memo(function (e) {
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
            contextMenu: I = i1,
            draggable: S = !1,
            sorting: N = !1,
            preloadOnClick: y = !0,
            guildJoinRequestStatus: C,
            height: v,
            "aria-setsize": O,
            "aria-posinset": R,
        } = e,
        { id: b, parentId: D } = t,
        L =
            e.upperBadge ??
            (p
                ? (0, r.jsx)(X.fk, { icon: (0, Q.k)(ea.A), disableColor: !0, className: eo.yk })
                : null != h
                  ? eu(h)
                  : void 0),
        w = e.lowerBadge ?? void 0;
    null == w && g > 0
        ? (w =
              el(g, A ? m.A.colors.BACKGROUND_MOD_STRONG.css : m.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css) ??
              void 0)
        : null == w && null != C && (w = ec({ guildJoinRequestStatus: C }) ?? void 0);
    let M = e.lowerBadgeSize ?? { width: (0, X.o6)(g) },
        [{ dragging: P }, x] = (0, n6.i)({
            type: ti.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                a?.(), (0, n8.um)(te.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        U = (0, d.Vd)(b ?? eH.dJq, null != D ? 2 : 1),
        [k, V] = s.useState(!1),
        B = !N && k,
        [j, Y] = s.useState(!1),
        [z, $] = s.useState(!1),
        [q] = s.useState(() => new E.J_(70, () => $(!0))),
        Z = (0, iF.nr)() && !ix.Fr;
    s.useEffect(() => () => q.cancel(), [q]);
    let J = s.useCallback(() => {
            null != l ? (0, iG.pX)(l, { state: i0 }) : (0, ep.u)(b, { state: i0 });
        }, [b, l]),
        ee = s.useCallback(() => {
            if (null != l || null == u || p || !y) return;
            let e = (0, ik.W)(u.id);
            null != e && H.A.preload(u.id, e);
        }, [l, u, p, y]),
        et = (0, iU.bG)([e8.Ay], () => e8.Ay.isCurrentUserGuest(b)),
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
                e ? q.delay() : (q.cancel(), $(!1));
            },
            [q],
        );
    function es() {
        N || V(!0);
    }
    function ed() {
        N || V(!1);
    }
    let e_ = s.useCallback(
            (e) => {
                n?.(b, e);
            },
            [b, n],
        ),
        ef = (0, T.r)(m.A.modules.guildbar.AVATAR_SIZE);
    if (null == u) return null;
    let eh = u.name;
    if (
        (g > 0
            ? (eh = ej.intl.formatToPlainString(ej.t["/uzRss"], { guildName: u.name, mentions: g }))
            : f && (eh = ej.intl.formatToPlainString(ej.t.lzqe42, { guildName: u.name })),
        null != h)
    ) {
        let e = [];
        h.activeEvent && e.push(ej.intl.string(ej.t.dHvJ2p)),
            h.liveStage && e.push(ej.intl.string(ej.t.OO7ndG)),
            h.screenshare && e.push(ej.intl.string(ej.t.wsHMZ7)),
            h.video && e.push(ej.intl.string(ej.t.BrLCS0)),
            h.audio && e.push(ej.intl.string(ej.t.jPBhKy)),
            h.activity && e.push(ej.intl.string(ej.t.Y3Gii5)),
            e.length > 0 && (eh = `${eh}, ${e.join(" ")}`);
    }
    let eE = (0, r.jsx)(iV, {
            guild: u,
            show: z,
            active: _,
            onAnimationStart: function () {
                Y(z);
            },
            onAnimationRest: function () {
                z || Y(!1);
            },
        }),
        em = Z
            ? (0, r.jsx)(F.j, {
                  ariaLabel: eh,
                  name: u.name,
                  onClick: J,
                  onMouseEnter: es,
                  onMouseLeave: ed,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, t6.Iv)(u, 2 * ef, B && c, !0),
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
                      "data-drop-hovering": z,
                      children: (0, r.jsx)(F.j, {
                          ariaLabel: eh,
                          name: u.name,
                          onClick: J,
                          onMouseEnter: es,
                          onMouseLeave: ed,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, t6.Iv)(u, 2 * ef, B && c, !0),
                          selected: _ || B,
                          ...U,
                          "aria-setsize": O,
                          "aria-posinset": R,
                          "aria-selected": _,
                      }),
                  }),
              }),
        eg = z || j ? eE : em,
        eA = (0, r.jsx)(no, { children: (0, r.jsx)(i_, {}) }),
        eI = Z
            ? (0, r.jsx)(tS.animated.div, {
                  ref: S
                      ? (e) => {
                            x(e);
                        }
                      : void 0,
                  "data-dnd-name": u.name,
                  style: { scale: null == v ? 1 : v },
                  "data-drop-hovering": z,
                  className: o()(ip.rN, { [ip.p9]: N, [ip.oR]: z, [ip.wH]: z || _ }),
                  children: (0, r.jsx)(G.Q, {
                      selected: !0,
                      upperBadge: L,
                      lowerBadge: w,
                      lowerBadgeSize: M,
                      children: eg,
                  }),
              })
            : (0, r.jsx)(tS.animated.div, {
                  style: { scale: null == v ? 1 : v },
                  className: o()(ip.rN, { [ip.p9]: N, [ip.oR]: z, [ip.wH]: z || _ }),
                  "data-drop-hovering": z,
                  children: (0, r.jsx)(G.Q, {
                      selected: _,
                      upperBadge: L,
                      lowerBadge: w,
                      lowerBadgeSize: M,
                      children: eg,
                  }),
              });
    return (0, r.jsxs)(K.c, {
        ref: e_,
        children: [
            (0, r.jsx)(W.A, { overlay: !0, hovered: !P && B, selected: !P && _, unread: !P && f }),
            (0, r.jsx)(iJ, { guild: u, disabled: N, isDragging: P, children: P ? eA : eI }),
            S ? (0, r.jsx)(ns, { name: u.name, targetNode: t, onDragOverChanged: er }) : null,
        ],
    });
});
var i3 = n(182240);
let i6 = s.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        a = (0, f.bG)([e9.A], () => e9.A.getGuild(i)),
        o = iy(a),
        l = (0, f.bG)([t_.A], () => t_.A.isFocused()),
        u = (0, f.bG)([n0.A], () => n0.A.isUnavailable(i)),
        c = (0, eh.A)((e) => e.guildId),
        d = iP(i),
        {
            badge: _,
            unread: h,
            isMentionLowImportance: p,
        } = (0, f.cf)([eO.default], () => ({
            badge: eO.default.getMentionCount(i),
            isMentionLowImportance: eO.default.getIsMentionLowImportance(i),
            unread: eO.default.hasUnread(i),
        })),
        E = (0, iC.Ig)(a) && 0 === _,
        m = s.useMemo(
            () =>
                null != n
                    ? n
                    : E
                      ? (0, r.jsx)("div", {
                            className: i3.j,
                            children: (0, r.jsx)(iT.E, {
                                size: "custom",
                                color: "currentColor",
                                className: i3.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, E],
        );
    return (0, r.jsx)(i2, {
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
var i4 = n(922016),
    i5 = n(534514),
    i7 = n(821609),
    i8 = n(339350),
    i9 = n(475743),
    re = n(624458),
    rt = n(408213),
    rn = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    ri = n(928568);
function rr(e, t) {
    (0, ty.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, r.jsx)(e, { ...n, guild: t });
    });
}
function rs(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, f.bG)([iN.A], () => iN.A.getRequest(n)),
        s = (0, f.bG)([iN.A], () => iN.A.getJoinRequestGuild(n), [n]),
        a = (0, f.bG)([t_.A], () => t_.A.isFocused()),
        o = (0, f.bG)([tr.A], () => tr.A.getGuildId());
    return null == s
        ? null
        : (0, r.jsx)(i2, {
              guildNode: t,
              guild: s,
              animatable: a,
              draggable: !1,
              selected: n === o,
              preloadOnClick: !1,
              contextMenu: rr,
              lowerBadge:
                  i?.applicationStatus === es.B5.REJECTED
                      ? ec({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eH.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var ra = n(785439);
function ro(e) {
    let { onActivate: t, children: n } = e,
        i = s.useRef(null),
        a = (0, f.bG)([iN.A], () => iN.A.hasJoinRequestCoackmark()),
        o = s.useCallback(() => {
            rt.Ay.clearCoachmark();
        }, []),
        l = (0, i9.A)(a),
        u = s.useRef(null);
    return (
        s.useEffect(() => {
            a && a !== l && (t(), u.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [u, a, l, t]),
        (0, r.jsxs)("div", {
            className: ra.kL,
            children: [
                (0, r.jsx)(i4.Y, {
                    ref: u,
                    targetElementRef: i,
                    shouldShow: a,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: ra.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: ra.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: ra.q3,
                                            children: [
                                                (0, r.jsx)(i5.D, {
                                                    variant: "heading-md/medium",
                                                    children: ej.intl.string(ej.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(eP.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: ej.intl.string(ej.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(i7.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: ej.intl.string(ej.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: o,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: ra.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, r.jsx)("div", { ...e, className: ra.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function rl(e) {
    let { onActivate: t } = e,
        [n, i] = s.useState(!1),
        a = (0, f.bG)([tr.A], () => tr.A.getGuildId()),
        o = (0, f.bG)([iN.A], () => iN.A.hasFetchedRequestToJoinGuilds),
        l = (0, ri.A)(),
        u = (0, i9.A)(a),
        c = s.useMemo(() => {
            let e = (0, ti.xW)({
                folderId: rn.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: ej.intl.string(ej.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of l) e.children.push((0, ti.EL)(t, e.id));
            return e;
        }, [l, n]);
    s.useEffect(() => {
        n && !o && re.A.fetchRequestToJoinGuilds();
    }, [n, o]);
    let d = null != a && l.includes(a);
    return (s.useEffect(() => {
        !n && d && u !== a && i(!0);
    }, [n, d, u, a]),
    0 === l.length)
        ? null
        : (0, r.jsx)(ro, {
              onActivate: t,
              children: (0, r.jsx)(ig, {
                  folderNode: c,
                  expanded: n,
                  selected: d,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), rt.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: ra.rH,
                      children: (0, r.jsx)(i8.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== ti.PJ.GUILD
                          ? null
                          : (0, r.jsx)(rs, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function ru(e) {
    let { guildId: t } = e,
        n = s.useMemo(() => (0, ti.EL)(t), [t]),
        i = (0, f.bG)([e9.A], () => e9.A.getGuild(t)),
        a = (0, f.bG)([t_.A], () => t_.A.isFocused()),
        o =
            t ===
            (0, eh.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        l = iP(t);
    return null == i
        ? null
        : (0, r.jsx)(i2, { guildNode: n, guild: i, animatable: a, selected: o, draggable: !1, mediaState: l });
}
var rc = n(803921);
let rd = (0, D.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("98594"),
                n.e("63915"),
                n.e("81154"),
                n.e("30708"),
                n.e("45788"),
                n.e("99961"),
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
    r_ = (0, tt.isWindows)() ? 4 : 12 * !(0, tt.isMac)();
function rf(e) {
    return e.startsWith(eH.BVt.GUILD_DISCOVERY) || e.startsWith(eH.BVt.GLOBAL_DISCOVERY);
}
class rh {
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
            (0, e3.u9)(this.getVisibleGuildIds);
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
            (null == e && rf(window.location.pathname)) ||
            e === eH.sFm.SERVER_DISCOVERY_BADGE ||
            e === eH.sFm.E3_SERVER_DISCOVERY_BADGE
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
function rp(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        a = (0, P.A)("TopSection"),
        { isExperimentEnabled: o } = (0, M.TW)("TopSection"),
        l = (0, f.bG)([eg.A], () => null != eg.A.getVoiceChannelId()),
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
    let T = (0, f.yK)([e9.A, e8.Ay], () => e9.A.getGuildIds().filter((e) => e8.Ay.isCurrentUserGuest(e))),
        S = i.concat(T),
        { entrypoint: N } = (0, e4.X8)({ location: "GuildsBar" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nq, {}),
            N === e4.RK.SERVER_RAIL_TOP && (0, r.jsx)(rd, {}),
            a ? (0, r.jsx)(e2, { shouldShowIntroPopover: m, markIntroPopoverAsDismissed: _ }) : null,
            !t && (0, r.jsx)(tY, {}),
            S.map((e) => (0, r.jsx)(ru, { guildId: e }, e)),
            (0, r.jsx)(rl, { onActivate: n }),
        ],
    });
}
function rE(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: s, lurkingGuildIds: a } = e,
        [o] = (0, f.yK)([te.Ay], () => {
            let e = te.Ay.getGuildsTree();
            return [e, e.version];
        }),
        l = o.getRoots(),
        u = (0, f.yK)([e7.A], () => e7.A.getGeoRestrictedGuilds()).map((e) =>
            (0, r.jsx)(nh, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.B, {
                role: "group",
                "aria-label": ej.intl.string(ej.t["7hB4kg"]),
                gap: "xs",
                children: l.map((e, t) => s(e, t, l.length)),
            }),
            u,
            (0, r.jsx)(n3, {}),
            i ? null : (0, r.jsx)(nd, { disableTooltip: a.length > 0, lastTargetNode: l[l.length - 1] }),
            i ? null : t,
            n ? null : (0, r.jsx)(tQ, {}),
        ],
    });
}
function rm(e) {
    var t;
    let { disableAppDownload: n = tt.isPlatformEmbedded, isOverlay: i = !1, className: a, themeOverride: l } = e,
        [u] = (0, f.yK)([te.Ay], () => {
            let e = te.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, f.bG)([e6.A], () => e6.A.lurkingGuildIds()),
        h = s.useMemo(() => (i ? [] : _), [_, i]),
        p = (0, f.bG)([b.A], () => b.A.isFullscreenInContext()),
        { isSorting: g, startSorting: A, stopSorting: y } = (0, tn.A)(),
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
        { entrypoint: j } = (0, e4.X8)({ location: "GuildsBar" }),
        Y = +!!B + +(j === e4.RK.SERVER_RAIL_TOP),
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
                        heightBeforeGuilds: r_ + t + Y * e,
                        bottomInset: 16,
                    });
            return new rh(
                u,
                G,
                eH.tEg,
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
            return eO.default.addChangeListener(e), () => eO.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: K } = (0, R.Ay)(O.A.GUILDS_LIST),
        z = rf(H);
    (0, C.u5)(() => {
        if (!v.current && 0 !== u.size) {
            if (!z) {
                let { scrollTop: e } = e5.A.getGuildListDimensions();
                W.scrollTo({ to: e, animate: !1 });
            }
            return (v.current = !0), () => D.stop();
        }
    }),
        s.useEffect(() => {
            if ((W.setGuildsTree(u), v.current || 0 === u.size)) return;
            let e = eh.A.getState().guildId;
            W.scrollToGuild(e, !1);
            let t = null;
            return eh.A.subscribe((e) => {
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
                let n = tr.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                tr.A.addChangeListener(n),
                () => {
                    tr.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let q = s.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case ti.PJ.FOLDER:
                        return (0, r.jsx)(
                            iI,
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
                    case ti.PJ.GUILD:
                        return (0, r.jsx)(
                            i6,
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
        Z = (0, r.jsx)(ny, { selected: z, className: rc.ai }),
        X = j === e4.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(R.f5, {
        value: K,
        children: (0, r.jsx)(S.N, {
            theme: l,
            children: (e) =>
                (0, r.jsxs)("nav", {
                    className: o()(rc.iE, a, e, { [rc.R]: p }),
                    "aria-label": ej.intl.string(ej.t.PjnF2t),
                    children: [
                        (0, r.jsx)(tA, {
                            ref: L,
                            isVisible: W.isItemVisible,
                            onJumpTo: W.handleJumpToGuild,
                            className: rc.Xl,
                            barClassName: rc.Sh,
                        }),
                        (0, r.jsx)("ul", {
                            ref: M,
                            ...x,
                            ...U,
                            role: "tree",
                            className: rc.B2,
                            children: (0, r.jsxs)("div", {
                                className: rc.qD,
                                children: [
                                    (0, r.jsxs)(N.zC, {
                                        className: o()({ [rc.XG]: !0, [rc.qw]: k }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: W.scrollerRef,
                                        onScroll: W.handleScroll,
                                        children: [
                                            (0, r.jsx)(rp, { scrollToTop: $, lurkingGuildIds: h }),
                                            (0, r.jsx)(nX, {}),
                                            (0, r.jsx)(rE, {
                                                guildDiscoveryButton: Z,
                                                disableAppDownload: n,
                                                isOverlay: i,
                                                renderTreeNode: q,
                                                lurkingGuildIds: h,
                                            }),
                                        ],
                                    }),
                                    X &&
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsx)(nX, { fullWidth: !0 }),
                                                (0, r.jsx)("div", { className: rc.JU, children: (0, r.jsx)(rd, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(tA, {
                            reverse: !0,
                            ref: w,
                            isVisible: W.isItemVisible,
                            onJumpTo: W.handleJumpToGuild,
                            className: o()(rc.LZ, { [rc.CH]: !i && !X, [rc.c0]: !i && X }),
                            barClassName: rc.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let rg = s.memo(
    function (e) {
        let t = (0, v.A)("guildsnav");
        return (0, r.jsx)(d.hD, { navigator: t, children: (0, r.jsx)(rm, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, p.A)(e, t),
);
