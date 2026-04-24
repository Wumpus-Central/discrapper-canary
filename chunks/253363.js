n.d(t, { A: () => lE });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(735438),
    d = n.n(o),
    c = n(873263),
    u = n(837381),
    _ = n(621466),
    h = n(17928),
    p = n(554146),
    g = n(52133),
    m = n(451988),
    A = n(661531),
    f = n(192308),
    E = n(331322),
    I = n(312138),
    C = n(602853),
    S = n(43990),
    x = n(689175),
    b = n(951001),
    N = n(964486),
    T = n(260762),
    y = n(793574),
    v = n(688810),
    R = n(313961),
    j = n(268218),
    O = n(771781),
    L = n(932001),
    M = n(313281),
    G = n(832275);
n(321073);
var D = n(43105),
    w = n(857250),
    P = n(691540),
    U = n(862328),
    k = n(67811),
    V = n(27232),
    B = n(403581),
    F = n(308528),
    W = n(933958),
    H = n(969151),
    K = n(941971),
    Y = n(900848),
    z = n(406810),
    q = n(789645),
    Q = n(933832),
    J = n(22231),
    X = n(777666),
    $ = n(565787),
    Z = n(81466),
    ee = n(451394),
    et = n(31300),
    en = n(428689),
    ei = n(983851),
    el = n(323384),
    es = n(513461),
    er = n(791606),
    ea = n(266062);
function eo(e, t, n) {
    return (0, l.jsx)(X.hV, { count: e, color: t, "aria-hidden": n });
}
function ed(e) {
    let t,
        {
            audio: n,
            video: i,
            screenshare: l,
            isCurrentUserConnected: s,
            liveStage: r,
            activeEvent: a,
            activity: o,
        } = e;
    if (a) t = Z.C;
    else if (r) t = ee.q;
    else if (l) t = et.k;
    else if (i) t = en.n;
    else if (n) t = ei.H;
    else {
        if (!o) return null;
        t = el.k;
    }
    return eu({ icon: t, isCurrentUserConnected: s });
}
function ec(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case es.B5.SUBMITTED:
                    return [void 0, z.O];
                case es.B5.REJECTED:
                    return [A.A.unsafe_rawColors.RED_400.css, q.P];
                case es.B5.APPROVED:
                    return [A.A.unsafe_rawColors.GREEN_360.css, Q.A];
                default:
                    return [void 0, J.R];
            }
        })(t);
    return eu({ icon: i, color: n });
}
function eu(e) {
    let { icon: t, color: n, isCurrentUserConnected: i } = e;
    return (0, l.jsx)(X.fk, {
        icon: t,
        className: a()(ea.bG, { [ea.gB]: i }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
var e_ = n(855725),
    eh = n(532794),
    ep = n(366811),
    eg = n(345942),
    em = n(616356),
    eA = n(734057),
    ef = n(309010),
    eE = n(977997),
    eI = n(935208),
    eC = n(181079),
    eS = n(422258),
    ex = n(668267),
    eb = n(5180),
    eN = n(695633),
    eT = n(152007),
    ey = n(458294),
    ev = n(576705),
    eR = n(222823),
    ej = n(543465),
    eO = n(780645),
    eL = n(990078),
    eM = n(597601),
    eG = n(834730),
    eD = n(183623),
    ew = n(104171),
    eP = n(63995),
    eU = n(69407),
    ek = n(287809),
    eV = n(607567),
    eB = n(403362),
    eF = n(652215),
    eW = n(985018),
    eH = n(621035);
function eK(e, t) {
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: eH.nM,
              children: [
                  (0, l.jsx)(e, { className: eH.RI, color: "currentColor" }),
                  (0, l.jsx)(ew.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eY() {
    let e = (0, h.yK)([eC.A, eA.A], () =>
            eI.default
                .keys(eC.A.getFavoriteChannels())
                .map((e) => eA.A.getChannel(e))
                .filter(eB.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eF.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eF.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        s = (0, h.yK)(
            [eV.Ay],
            () =>
                d().flatMap(n, (e) =>
                    eV.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        r = (0, h.yK)([eP.A], () =>
            d().flatMap(i, (e) =>
                eP.A.getMutableParticipants(e, eU.ip.SPEAKER)
                    .filter((e) => e.type === eU.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        a = (0, h.bG)([eP.A], () => {
            let e = 0;
            for (let t of i) e += eP.A.getParticipantCount(t, eU.ip.AUDIENCE);
            return e;
        }),
        o = (0, h.yK)(
            [em.A],
            () =>
                em.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, h.yK)([W.Ay], () => {
            let e = W.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        u = (0, h.yK)([ek.default], () => c.map((e) => ek.default.getUser(e)), [c]),
        _ = (0, h.yK)([ek.default], () => o.map((e) => ek.default.getUser(e)), [o]),
        p = eK(
            ei.H,
            s.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        g =
            0 === r.length
                ? null
                : (0, l.jsxs)("div", {
                      className: eH.nM,
                      children: [
                          (0, l.jsx)(ee.q, { size: "lg", color: "currentColor", className: eH.RI }),
                          (0, l.jsx)(ew.Ay, { guildId: void 0, users: r, max: 3 }),
                          (0, l.jsxs)("div", {
                              className: eH.GZ,
                              children: [
                                  (0, l.jsx)(eM.L, { size: "xs", color: "currentColor" }),
                                  (0, l.jsx)(eG.E, {
                                      className: eH._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: a,
                                  }),
                              ],
                          }),
                      ],
                  }),
        m = eK(
            eD.F,
            _.filter((e) => null != e && !c.includes(e.id)),
        ),
        A = eK(el.k, u);
    return (0, l.jsxs)(l.Fragment, { children: [g, p, m, A] });
}
function ez() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: a()(eH.nM, eH.Dl),
                children: (0, l.jsx)("span", { className: a()(eH.cN, eH.NT), children: eW.intl.string(eW.t.wMWyci) }),
            }),
            (0, l.jsx)(eY, {}),
        ],
    });
}
function eq(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = s.useMemo(() => (0, l.jsx)("div", { className: eH.A_, children: (0, l.jsx)(ez, {}) }), []);
    return (0, l.jsx)(eL.m, {
        __unsupportedReactNodeAsText: i,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
var eQ = n(97483),
    eJ = n(49999),
    eX = n(788868),
    e$ = n(335993),
    eZ = n(959495),
    e0 = n(988572);
let e1 = { analyticsSource: { page: eF.liQ.GUILD_CHANNEL, section: eF.JJy.CHANNEL_LIST, object: eF.ZSU.CHANNEL } };
function e9(e) {
    let t,
        i,
        r,
        a,
        o,
        d,
        c,
        _,
        p,
        g,
        m,
        A,
        { shouldShowIntroPopover: E, markIntroPopoverAsDismissed: I } = e,
        C = (0, u.Vd)("favorites"),
        { favoriteAdded: S, clearFavoriteAdded: x } = (0, M.CJ)(),
        b = s.useRef(null),
        { analyticsLocations: N } = (0, v.Ay)(y.A.FAVORITES_GUILD_BUTTON),
        [T, R] = s.useState(!1),
        j = (0, eO.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: O,
            favoriteGuildMuted: L,
            favoriteChannels: G,
        } = (0, h.cf)([eC.A], () => ({
            favoriteGuildEnabled: eC.A.favoriteGuildEnabled,
            favoriteChannels: eC.A.getFavoriteChannels(),
            favoriteGuildMuted: eC.A.favoriteGuildMuted,
        })),
        z = (0, h.bG)([ef.A], () => ef.A.getChannelId(eF.YYv)),
        q = (0, h.bG)([eA.A], () => eA.A.getChannel(z)),
        Q = (0, ep.A)((e) => e.guildId),
        J = (0, eb.ai)(Q),
        { badge: X, unread: $ } = (0, h.cf)([eN.A, eA.A, ey.default, eT.A, ev.A, eR.Ay, ej.Ay], () =>
            eI.default.keys(G).reduce(
                (e, t) => {
                    let n = eA.A.getChannel(t),
                        i = n?.getGuildId(),
                        l = eR.Ay.getMentionCount(t);
                    if (
                        ((e.badge = e.badge + l),
                        (e.unread = e.unread || (eR.Ay.hasUnread(t) && ey.default.shouldCountChannelUnread(n, l))),
                        null != i)
                    ) {
                        let n = eN.A.getActiveJoinedRelevantThreadsForParent(i, t);
                        for (let t in n) {
                            let n = eR.Ay.getMentionCount(t);
                            e.badge += n;
                            let i = eA.A.getChannel(t);
                            e.unread = e.unread || (eR.Ay.hasUnread(t) && ey.default.shouldCountChannelUnread(i, n));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            ),
        ),
        Z =
            ((i = null != (t = (0, h.bG)([ef.A], () => ef.A.getVoiceChannelId())) && null != G[t]),
            (r = (0, h.bG)([em.A], () => {
                if (!i) return !1;
                let e = em.A.getCurrentUserActiveStream();
                return null != e && null != G[e.channelId];
            })),
            (a = (0, h.bG)([em.A], () => em.A.getAllApplicationStreams().some((e) => null != G[e.channelId]))),
            (o = (0, h.bG)([eE.A], () => i && null != t && eE.A.hasVideo(t), [i, t])),
            (d = (0, h.yK)([W.Ay], () =>
                eI.default.keys(G).reduce((e, t) => (e.push(...W.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (c = (0, h.bG)([W.Ay], () =>
                Array.from(W.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, H.H)(t);
                    return null != n && null != G[n];
                }),
            )),
            (_ = d.length > 0),
            (p = !1),
            (g = !1),
            (m = !1),
            (A = !1),
            i ? ((p = !o), (g = o), (m = r), (A = c)) : ((m = a), (A = _)),
            ed({ audio: p, video: g, screenshare: m, liveStage: !1, isCurrentUserConnected: i, activity: A })),
        ee = X > 0 ? (0, e_.w)(X) : null,
        et = s.useRef(!1),
        { hasAccess: en } = (0, M.TW)("FavoritesButton"),
        ei = s.useCallback(
            (e, t) => {
                (et.current = !0), I(e, t);
            },
            [I],
        ),
        el = s.useCallback(
            (e) => {
                e && ((0, ex.mv)("intro_dc"), (0, eg.u)(eF.YYv)),
                    en
                        ? (O || (0, eS.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, f.openModalLazy)(async () => {
                                  let { default: e } = await n.e("59839").then(n.bind(n, 889186));
                                  return (t) =>
                                      (0, l.jsx)(e, { ...t, parentId: null, source: "favorites_button_onboarding" });
                              }))
                        : e && (0, eh.A)({ subscriptionTier: eX.pe.TIER_2, analyticsLocations: N }),
                    ei(eJ.i.TAKE_ACTION);
            },
            [ei, O, en, N],
        );
    return (
        s.useEffect(() => {
            E && (et.current = !1);
        }, [E]),
        s.useEffect(
            () => () => {
                E && !et.current && ei(eJ.i.AUTO_DISMISS, !0);
            },
            [ei, E],
        ),
        s.useEffect(() => {
            if (S) {
                let e = (0, w.o)(eW.intl.string(eW.t["4tSWQg"]), eQ.Ck.FAVORITE);
                (0, P.P0)(e);
                let t = setTimeout(x, e.options?.duration ?? eQ.jg.duration);
                return () => {
                    x(), clearTimeout(t);
                };
            }
        }, [S, x]),
        (0, l.jsxs)(Y.c, {
            children: [
                (0, l.jsx)(K.A, { selected: J, hovered: T, unread: $ && !L, className: eZ.I }),
                (0, l.jsx)(eq, {
                    children: (0, l.jsx)(U.Q, {
                        selected: !0,
                        upperBadge: Z,
                        lowerBadge: ee,
                        children: (0, l.jsx)("div", {
                            ref: b,
                            children: (0, l.jsx)(k.j, {
                                ...C,
                                ariaLabel: eW.intl.formatToPlainString(eW.t["/uzRss"], {
                                    guildName: eW.intl.string(eW.t.wMWyci),
                                    mentions: X,
                                }),
                                "aria-selected": J,
                                to: { pathname: eF.BVt.CHANNEL(eF.YYv, z), state: e1 },
                                selected: J || T,
                                onClick: () => {
                                    E && el(!1);
                                },
                                onMouseEnter: () => R(!0),
                                onMouseLeave: () => R(!1),
                                onMouseDown: function () {
                                    null != q && F.A.preload(q.guild_id, q.id);
                                },
                                onContextMenu: j,
                                children: (0, l.jsx)(V.G, {
                                    size: "custom",
                                    color: "currentColor",
                                    className: eZ.w,
                                    width: 20,
                                    height: 20,
                                }),
                            }),
                        }),
                    }),
                }),
                E &&
                    (0, l.jsx)(D.A, {
                        targetElementRef: b,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: e0.A, type: "image", aspectRatio: "16/9" },
                        title: eW.intl.string(e$.default["bu/mLv"]),
                        body: eW.intl.string(e$.default["/x2jT7"]),
                        onRequestClose: () => ei(eJ.i.USER_DISMISS),
                        actions: [
                            {
                                icon: B.t,
                                text: en ? eW.intl.string(e$.default["0lHa0Z"]) : eW.intl.string(e$.default["0nZZEk"]),
                                onClick: () => el(!0),
                                variant: en ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
var e2 = n(633965),
    e6 = n(857071),
    e3 = n(851109),
    e5 = n(72314),
    e8 = n(543897),
    e7 = n(696451),
    e4 = n(71393),
    te = n(711014),
    tt = n(723702),
    tn = n(757780),
    ti = n(263715),
    tl = n(967198),
    ts = n(173860),
    tr = n(383394),
    ta = n(131677),
    to = n(228366);
let td = {};
class tc extends h.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (td[t] = e[t]);
            });
    }
    getState() {
        return td;
    }
    hasViewed(e) {
        return null != td[e];
    }
}
let tu = new tc(to.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        td[t] = Date.now();
    },
});
var t_ = n(531685),
    th = n(583613);
let tp = "app-download-item",
    tg = "add-server-item";
function tm() {
    return !1;
}
function tA(e) {
    let t = ey.default.getMutableGuildStates();
    return (
        (e === eF.sFm.SERVER_DISCOVERY_BADGE && !tu.hasViewed(eF.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== tp && e !== tg && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tf = (0, th.L_)((e, t, n) => ["null", ...t, ...e, tg, eF.sFm.E3_SERVER_DISCOVERY_BADGE, tp]),
    tE = s.forwardRef(function (e, t) {
        let n = (0, h.yK)([te.Ay, ta.A, ey.default], () =>
                tf(te.Ay.getGuildFolders(), ta.A.getUnreadPrivateChannelIds(), ey.default.getStoreChangeSentinel()),
            ),
            i = (0, h.bG)([t_.A], () => t_.A.isFocused()),
            s = (0, h.bG)([tr.A], () => tr.A.getExpandedFolders());
        return (0, l.jsx)(ts.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: tm,
            textUnread: eW.intl.string(eW.t.y2b7CA),
            textMention: eW.intl.string(eW.t.y2b7CA),
            isMentioned: tA,
            animate: i,
            expandedFolders: s,
        });
    });
n(667532);
var tI = n(73939),
    tC = n(763827),
    tS = n(419354),
    tx = n(778712),
    tb = n(442433),
    tN = n(620982),
    tT = n(571694),
    ty = n(47167),
    tv = n(598104),
    tR = n(994500);
function tj(e, t) {
    return e
        .filter((e) => (0, eB.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tR.A.isBlockedOrIgnored(e.id)));
}
function tO(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tR.A.isBlockedOrIgnored(e)));
}
var tL = n(427358),
    tM = n(907459),
    tG = n(145408);
function tD(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              className: eH.nM,
              children: [
                  (0, l.jsx)(t, { className: eH.RI, color: "currentColor" }),
                  (0, l.jsx)(ew.Ay, { users: n, max: 6 }),
              ],
          });
}
function tw(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, l.jsx)(eG.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eW.intl.string(eW.t.fpKdS1),
          })
        : (0, l.jsx)(tG.A, { muteConfig: t, className: n });
}
function tP(e) {
    let t,
        n,
        i,
        r,
        o,
        d,
        c,
        u,
        _,
        p,
        g,
        m,
        A,
        { channel: f } = e,
        E = f.id,
        {
            activityUsers: I,
            streamUsers: C,
            voiceUsers: S,
        } = ((t = f.id),
        (n = (0, h.yK)([tR.A], () => tR.A.getBlockedOrIgnoredIDs())),
        (i = (0, h.bG)([tL.A], () => tL.A.getUserAffinitiesMap(), [])),
        (r = (0, h.yK)(
            [W.Ay, ek.default],
            () =>
                W.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => ek.default.getUser(e)),
            [t],
        )),
        (o = s.useMemo(() => tj(r, n), [r, n])),
        (d = s.useMemo(() => (0, tM.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, h.yK)(
            [em.A, ek.default],
            () =>
                tj(
                    em.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => ek.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (u = s.useMemo(() => tj(c, n), [c, n])),
        (_ = s.useMemo(() => (0, tM.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (p = s.useMemo(() => _.filter((e) => !d.some((t) => t.id === e.id)), [_, d])),
        (g = (0, h.yK)(
            [eV.Ay],
            () =>
                tj(
                    eV.Ay.getVoiceStatesForChannel(f).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [f, n],
        )),
        (m = s.useMemo(() => tj(g, n), [g, n])),
        (A = s.useMemo(() => (0, tM.L)(m, i, "DirectMessageTooltip - voiceUsers"), [m, i])),
        {
            voiceUsers: s.useMemo(
                () => A.filter((e) => !d.some((t) => t.id === e.id) && !_.some((t) => t.id === e.id)),
                [A, d, _],
            ),
            streamUsers: p,
            activityUsers: d,
        }),
        x = (0, l.jsx)(tD, { icon: ei.H, users: S }),
        b = (0, l.jsx)(tD, { icon: eD.F, users: C }),
        N = (0, l.jsx)(tD, { icon: el.k, users: I }),
        { isMuted: T, muteConfig: y } = (0, h.cf)(
            [ej.Ay],
            () => ({ isMuted: ej.Ay.isChannelMuted(null, E), muteConfig: ej.Ay.getChannelMuteConfig(null, E) }),
            [E],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            x,
            b,
            N,
            T ? (0, l.jsx)(tw, { muteConfig: y, className: a()(eH.LM, { [eH.Sx]: null != x || null != b }) }) : null,
        ],
    });
}
function tU(e) {
    let { channel: t } = e,
        n = (0, ty.Ay)(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: a()(eH.nM, eH.Dl),
                children: (0, l.jsx)("span", { className: a()(eH.cN, eH.NT), children: n }),
            }),
            (0, l.jsx)(tP, { channel: t }),
        ],
    });
}
function tk(e) {
    let { channel: t, children: n } = e,
        i = (0, ty.Ay)(t),
        r = s.useMemo(() => (0, l.jsx)("div", { className: eH.A_, children: (0, l.jsx)(tU, { channel: t }) }), [t]);
    return (0, l.jsx)(eL.m, {
        __unsupportedReactNodeAsText: r,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
var tV = n(647321);
let tB = { friction: 28, tension: 600 };
function tF(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tB };
        case "scale":
            return { ...tB };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tW extends s.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new tS.Controller({ scale: 0, height: 0, opacity: 0, config: tF }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !t_.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tF })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tF }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !t_.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tF }).start().then(e),
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { size: e } = this.props,
            { controller: t } = this.state,
            { opacity: n, height: i, scale: l } = t.springs;
        return { opacity: n, height: i.to([0, 1], [0, e]), transform: l.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`) };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === eF.rbe.DM ? ek.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tT.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eF.rbe.DM ? ek.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, tb.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("97262"),
                      n.e("93103"),
                      n.e("88342"),
                      n.e("35313"),
                      n.e("84442"),
                      n.e("39778"),
                      n.e("28545"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, l.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, tb.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("60200"), n.e("68530")]).then(
                      n.bind(n, 4027),
                  );
                  return (n) => (0, l.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: i,
                audio: s,
                video: r,
                stream: a,
                isCurrentUserInThisDMCall: o,
                isIncomingCall: d,
                isOngoingCall: c,
                unread: u,
                treeItemProps: _,
            } = this.props,
            { hovered: h, animating: p } = this.state,
            g = e.isMultiUserDM() && null == e.icon,
            m = () =>
                (0, l.jsx)(k.j, {
                    to: eF.BVt.CHANNEL(eF.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || h,
                    ariaLabel:
                        null != t
                            ? [
                                  eW.intl.formatToPlainString(eW.t.hKarnZ, { name: t, mentions: i }),
                                  d ? eW.intl.string(eW.t["fk1/bX"]) : c ? eW.intl.string(eW.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: g ? void 0 : this.getChannelIcon(),
                    backgroundStyle: g ? "on-hover" : "always",
                    children: g
                        ? (0, l.jsx)(tv.A, {
                              channel: e,
                              size: tx._3.SIZE_40,
                              facepileSizeOverride: tx._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ..._,
                });
        return (0, l.jsx)(tS.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(Y.c, {
                children: [
                    (0, l.jsx)(K.A, { hovered: !p && h, selected: !p && n, unread: !p && u, className: tV.I }),
                    (0, l.jsx)(tk, {
                        channel: e,
                        children: (0, l.jsx)(U.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? eo(i, void 0, !0) : null,
                            upperBadge: ed({ audio: s, video: r, screenshare: a, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, X.o6)(i) },
                            children: m(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tH = s.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, ty.Ay)(e.channel),
        s = (0, u.Vd)(n, 2),
        r = (0, h.bG)([tC.A], () => tC.A.getChannelId(), []),
        a = (0, h.bG)([R.A], () => R.A.getMode(n), [n]),
        o = (0, h.bG)([em.A], () => em.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, h.bG)([eV.Ay], () => eV.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, h.bG)([ef.A], () => ef.A.getChannelId(), []),
        _ = (0, h.bG)([eR.Ay], () => eR.Ay.getMentionCount(n), [n]),
        p = r === n,
        { isIncomingCall: g, isOngoingCall: m } = (0, tN.A)(n),
        f = !1,
        E = !1;
    (p || d) && ((f = a === eF._Of.VOICE), (E = a === eF._Of.VIDEO));
    let I = (0, C.r)(A.A.modules.guildbar.AVATAR_SIZE);
    return (0, l.jsx)(tW, {
        ...e,
        ref: t,
        channelName: i,
        unread: _ > 0,
        selected: c === n,
        badge: _,
        audio: f,
        video: E,
        stream: o,
        isCurrentUserInThisDMCall: p,
        isIncomingCall: g,
        isOngoingCall: m,
        size: I,
        treeItemProps: s,
    });
});
function tK() {
    (0, h.bG)([eA.A], () => eA.A.getPrivateChannelsVersion());
    let e = eA.A.getMutablePrivateChannels(),
        t = (0, h.yK)([ta.A], () => ta.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, h.cf)([tC.A], () => ({
            selectedVoiceGuildId: tC.A.getGuildId(),
            selectedVoiceChannelId: tC.A.getChannelId(),
        })),
        r = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, l.jsx)(tH, { channel: n }, n.id);
        }),
        a = null == n && null != i ? e[i] : null;
    return (
        null != a && r.unshift((0, l.jsx)(tH, { channel: a }, a.id)),
        (0, l.jsx)(E.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eW.intl.string(eW.t.YUU0RF),
            gap: "xs",
            hidden: r.length < 1,
            children: (0, l.jsx)(tI.F, { component: s.Fragment, children: r }),
        })
    );
}
var tY = n(32880),
    tz = n(939249),
    tq = n(547732);
function tQ(e) {
    let {
            children: t,
            text: n,
            disableWrapper: i = !1,
            disabled: r = !1,
            hideOnClick: o = !0,
            shouldShow: d,
            forceOpen: c,
            selected: u = !1,
        } = e,
        _ = s.useMemo(() => (null == n || r ? null : (0, l.jsx)("div", { className: tq.SH, children: n })), [n, r]),
        h = i ? t : (0, l.jsx)("div", { className: a()(tq.pm, { [tq.wH]: u }), children: t });
    return (0, l.jsx)(eL.m, {
        __unsupportedReactNodeAsText: _,
        position: "right",
        spacing: 12,
        hideOnClick: o,
        shouldShow: d,
        forceOpen: c,
        ariaHidden: !0,
        asContainer: !i,
        children: h,
    });
}
var tJ = n(530787);
let tX = s.forwardRef(function (e, t) {
        let {
                id: n,
                onClick: i,
                onContextMenu: r,
                icon: o,
                selected: d,
                tooltip: c,
                upperBadge: _,
                lowerBadge: h,
                lowerBadgeSize: p,
                showPill: g = !0,
                className: m,
                "aria-label": A,
                children: f,
                onMouseEnter: E,
                onMouseLeave: I,
                onMouseDown: C,
            } = e,
            S = (0, u.Vd)(n),
            [x, b] = s.useState(!1),
            N = "string" == typeof c && null == A ? c : A;
        return (0, l.jsxs)(Y.c, {
            children: [
                g
                    ? (0, l.jsx)("div", { className: tJ.Io, children: (0, l.jsx)(K.A, { hovered: x, selected: d }) })
                    : null,
                (0, l.jsx)(tQ, {
                    text: c,
                    selected: d,
                    children: (0, l.jsx)(U.Q, {
                        selected: !0,
                        upperBadge: _,
                        lowerBadge: h,
                        lowerBadgeSize: p,
                        children: (0, l.jsx)(tz.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                E?.(), b(!0);
                            },
                            onMouseLeave: () => {
                                I?.(), b(!1);
                            },
                            onMouseDown: C,
                            className: a()(tJ.oZ, m, { [tJ.wH]: d || x }),
                            onClick: i,
                            "aria-label": N,
                            "aria-selected": d,
                            onContextMenu: r,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != o && (0, l.jsx)(o, { className: tJ.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                f,
            ],
        });
    }),
    t$ = "DOWNLOAD_APPS";
function tZ() {
    let e = (0, f.useModalsStore)((e) => (0, f.hasModalOpenSelector)(e, t$));
    return (0, l.jsx)(tX, {
        id: "app-download-button",
        onClick: () => {
            (0, f.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("56423"), n.e("33255")]).then(n.bind(n, 987482));
                    return (t) => (0, l.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: t$ },
            );
        },
        selected: e,
        tooltip: eW.intl.string(eW.t.Z7jwrJ),
        icon: tY.s,
    });
}
var t0 = n(245604),
    t1 = n(272613),
    t9 = n(398884),
    t2 = n(772366),
    t6 = n(728321),
    t3 = n(260509),
    t5 = n(284009),
    t8 = n.n(t5),
    t7 = n(295868),
    t4 = n(686956),
    ne = n(954571),
    nt = n(787426);
function nn(e) {
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
function ni(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        t8()(t.type !== ti.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== ti.PJ.FOLDER || t.type !== ti.PJ.FOLDER) &&
                (e.type !== ti.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: l } = e;
                i && t.type !== ti.PJ.FOLDER && ne.default.track(eF.HAw.GUILD_FOLDER_CREATED),
                    t4.A.moveById(l, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function nl(e) {
    let { name: t, targetNode: n, combine: i, below: r } = e,
        a = s.useMemo(() => ni([ti.PJ.GUILD, ti.PJ.FOLDER], n, r, i), [n, r, i]),
        [{ canDrop: o, isOver: d }, c] = (0, t7.H)(a),
        u = nn([
            [o, nt.OP],
            [d, nt.NQ],
        ]);
    return (0, l.jsx)("div", {
        ref: (e) => {
            (u.current = e), c(e);
        },
        "data-dnd-name": eW.intl.formatToPlainString(eW.t["A5aDw+"], { itemName: t }),
        className: nt.aC,
    });
}
function ns(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: r, isOver: o }, d] = (0, t7.H)(() => ni([ti.PJ.GUILD], n, !0, !0));
    s.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = nn([
        [r, nt.OP],
        [o, nt.NQ],
    ]);
    return (0, l.jsx)(tQ, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, l.jsx)("div", {
            ref: (e) => {
                (c.current = e), d(e);
            },
            "data-dnd-name": eW.intl.formatToPlainString(eW.t.qiQ0QI, { itemName: t }),
            className: a()(nt.dw, {}),
        }),
    });
}
let nr = s.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: s = !1, onDragOverChanged: r } = e,
        a = !i && null == n.parentId;
    return (0, l.jsxs)("div", {
        className: nt.iE,
        "aria-hidden": !0,
        children: [
            (0, l.jsx)(nl, { name: t, targetNode: n, below: s }),
            a ? (0, l.jsx)(ns, { name: t, targetNode: n, onDragOverChanged: r }) : null,
        ],
    });
});
function na(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: s }, r] = (0, t7.H)(() => ni([ti.PJ.GUILD], n, !0, !0)),
        a = nn([[s, nt.a7]]),
        o = nn([
            [s, nt.NQ],
            [i, nt.OP],
        ]);
    return (0, l.jsx)("div", {
        ref: a,
        className: nt.Ro,
        "aria-hidden": !0,
        children: (0, l.jsx)("div", {
            className: nt.aO,
            children: (0, l.jsx)("div", {
                ref: (e) => {
                    (o.current = e), r(e);
                },
                "aria-label": `At end of ${t}`,
                className: nt.aC,
            }),
        }),
    });
}
function no(e) {
    let { children: t } = e,
        [, n] = (0, t7.H)({ accept: [] });
    return (0, l.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var nd = n(819638);
let nc = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nu(e) {
    (0, tb.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function n_(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, h.yK)([e4.A], () => e4.A.getGuildsArray()),
        r = (0, h.bG)([ek.default], () => ek.default.getCurrentUser()),
        a = s.useMemo(() => i.some((e) => (0, t3.bM)(e, r)), [i, r]),
        o = (0, f.useModalsStore)((e) => (0, f.hasModalOpenSelector)(e, nd.fc)),
        { analyticsLocations: d } = (0, v.Ay)();
    return (0, l.jsx)("div", {
        className: ea.Uq,
        children: (0, l.jsxs)(t6.A, {
            tutorialId: a ? "create-more-servers" : "create-first-server",
            inlineSpecs: nc,
            position: "right",
            disabled: t,
            children: [
                (0, l.jsx)(tX, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: () => {
                        (0, t9.Sn)()
                            ? (0, t2.A)({
                                  analyticsSource: { page: eF.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eF.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eF.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : t1.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: nu,
                    tooltip: eW.intl.string(eW.t.l5WIbf),
                    icon: t0.U,
                }),
                null != n &&
                    (0, l.jsx)(nr, { name: eW.intl.string(eW.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var nh = n(486020),
    np = n(962795);
function ng(e) {
    let [t, i] = s.useState(!1),
        r = (0, u.Vd)(`guild-${e.id}`);
    return (0, l.jsx)(Y.c, {
        children: (0, l.jsx)(tQ, {
            text: e.name,
            children: (0, l.jsx)(U.Q, {
                className: np.o,
                selected: t,
                lowerBadge: (0, l.jsx)(X.fk, { icon: (0, $.k)(er.A), disableColor: !0, className: np._ }),
                children: (0, l.jsx)(k.j, {
                    name: e.name,
                    onMouseEnter: () => {
                        i(!0);
                    },
                    onMouseLeave: () => {
                        i(!1);
                    },
                    onClick: () => {
                        (0, f.openModalLazy)(async () => {
                            let { default: t } = await n.e("42945").then(n.bind(n, 537560));
                            return (n) => (0, l.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? nh.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...r,
                }),
            }),
        }),
    });
}
var nm = n(696292),
    nA = n(836480),
    nf = n(533129),
    nE = n(726845),
    nI = n(837057),
    nC = n(310419),
    nS = n(488995),
    nx = n(324580),
    nb = n(654487);
let nN = s.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: r, className: a } = e,
        o = s.useCallback(() => {
            (0, nf.WL)({ source: nS.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== r ? nS.GlobalDiscoveryTab.QUESTS : nE.A.getField("selectedTab");
            switch (e) {
                case nS.GlobalDiscoveryTab.QUESTS:
                    return (0, nI.transitionToGlobalDiscovery)({
                        tab: nS.GlobalDiscoveryTab.QUESTS,
                        location: nb.rE.DISCOVERY_COMPASS,
                        questContent: nm.u.DISCOVERY_COMPASS,
                        questId: r,
                    });
                case nS.GlobalDiscoveryTab.SERVERS:
                    return (0, nI.transitionToGlobalDiscovery)({
                        tab: nS.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nx.J8.GUILDS_BAR,
                    });
                case nS.GlobalDiscoveryTab.APPS:
                    return (0, nI.transitionToGlobalDiscovery)({
                        tab: nS.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nC.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, nI.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [r]);
    return (0, l.jsx)(tX, {
        id: "guild-discover-button",
        ref: t,
        className: a,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: eW.intl.string(eW.t["4nEZLk"]),
        icon: nA.Q,
    });
});
var nT = n(506774),
    ny = n(509963),
    nv = n(111159),
    nR = n(793943),
    nj = n(927578),
    nO = n(350972),
    nL = n(677056),
    nM = n(526162),
    nG = n(635917);
function nD() {
    let [e, t] = (0, h.yK)([ek.default, nM.A], () => [
            nM.A.getCurrentDesktopIcon(),
            nj.Ay.isPremium(ek.default.getCurrentUser()),
        ]),
        n = (0, nR.fy)().activePanel === nR.HP.APP_ICON,
        i = (0, nG.gG)(e),
        s = i.id !== nO.LW.DEFAULT && (t || n),
        r = (0, l.jsx)(nv.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && s ? (0, l.jsx)(nL.A, { id: i.id, size: nG.N8.SIZE_48 }) : r;
}
var nw = n(531260),
    nP = n(411976),
    nU = n(912309),
    nk = n(400492),
    nV = n(354670),
    nB = n(619921),
    nF = n(340829),
    nW = n(966846),
    nH = n(674378),
    nK = n(394953),
    nY = n(235079),
    nz = n(30186);
let nq = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nQ(e) {
    let { selected: t, user: n, badge: i, link: r, showProgressBadge: a } = e,
        [o, d] = s.useState(!1),
        [c, _] = s.useState(!1),
        [h, p] = s.useState(null),
        [g, m] = s.useState(0),
        A = (0, u.Vd)("home"),
        f = (0, nR.fy)().activePanel === nR.HP.APP_ICON,
        E = () => {
            p(null), m(0), clearTimeout(h);
        };
    if (null == n) return null;
    let I = eW.intl.string(eW.t.YUU0RF);
    c && (I = nT.w.get(eF.wqg) ? eW.intl.string(eW.t["nkq1l+"]) : eW.intl.string(eW.t.Be8Q5E));
    let C = null;
    !t && a && (C = (0, l.jsx)(ny.A, { className: nz.Cp, determineOwnVisibility: !1 }));
    let S = t || o || f,
        x = (0, l.jsx)(U.Q, {
            selected: !0,
            lowerBadge: i > 0 ? eo(i) : null,
            upperBadge: C,
            lowerBadgeSize: { width: (0, X.o6)(i) },
            children: (0, l.jsx)(k.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != h && clearTimeout(h), p(setTimeout(E, 500)), m(g + 1), 15 === g)) {
                        E();
                        let e = !nT.w.get(eF.wqg);
                        nT.w.set(eF.wqg, e),
                            e && nT.w.set(nY.L, !0),
                            e ? (0, nk.Ak)("discodo") : (0, nk.Ak)("user_leave"),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: eW.intl.string(eW.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...A,
                to: {
                    pathname: r,
                    state: {
                        analyticsSource: {
                            page: eF.liQ.GUILD_CHANNEL,
                            section: eF.JJy.NAVIGATION,
                            object: eF.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, l.jsx)(nD, {}),
            }),
        });
    return (0, l.jsx)("div", {
        className: nz.Uq,
        children: (0, l.jsx)(t6.A, {
            inlineSpecs: nq,
            tutorialId: "friends-list",
            position: "right",
            children: (0, l.jsxs)(Y.c, {
                children: [
                    (0, l.jsx)(K.A, { selected: t, hovered: o, className: nz.Io }),
                    (0, l.jsx)(tQ, { hideOnClick: !0, text: I, selected: t, children: x }),
                ],
            }),
        }),
    });
}
function nJ() {
    let e = (function () {
            let e = (0, ep.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eF.BVt.GUILD_DISCOVERY) || t.startsWith(eF.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eF.BVt.GUILD_MEMBER_VERIFICATION("")),
                l = (0, nK.lI)();
            return null == e && !(n || i || l);
        })(),
        t = (0, h.bG)([nW.A, nF.A], () => {
            let e = (0, ny.v)(nW.A.activeItems, nF.A),
                { total: t, progress: n } = nH.zY(e),
                i = nH.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nU.kX)(),
        i = Object.keys(eX.TP),
        s = (0, nw.A)(),
        { unviewedTrialCount: r, unviewedDiscountCount: a } = (0, h.cf)([nV.A], () => ({
            unviewedTrialCount: nV.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nV.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = s.fractionalState === eX.xc.NONE ? r + a : 0,
        d = (0, h.bG)([ek.default], () => ek.default.getCurrentUser()),
        u = (0, nP.W)(),
        _ = n + o + u,
        p = _ === o && o > 0 && n + u === 0,
        g = nB.A.getHomeLink();
    return (
        p && (g = eF.BVt.APPLICATION_STORE),
        (0, l.jsx)(nQ, {
            selected: e,
            user: d,
            selectedChannelId: ef.A.getChannelId(eF.ME),
            badge: _,
            link: g,
            showProgressBadge: t,
        })
    );
}
var nX = n(473201);
function n$(e) {
    let { fullWidth: t } = e;
    return (0, l.jsx)(Y.c, { children: (0, l.jsx)("div", { className: a()(nX.t, { [nX.I]: t }) }) });
}
var nZ = n(349288),
    n0 = n(695366),
    n1 = n(919638),
    n9 = n(818348),
    n2 = n(585212);
function n6() {
    let e = (0, h.bG)([n1.A, e4.A], () => n1.A.unavailableGuilds.filter((e) => null == e4.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, l.jsx)(Y.c, {
              children: (0, l.jsx)(tQ, {
                  text: eW.intl.format(eW.t["TnH05/"], { count: e }),
                  children: (0, l.jsx)(nZ.Anchor, {
                      href: n9.qF.STATUS,
                      target: "_blank",
                      className: n2.h,
                      "aria-label": eW.intl.formatToPlainString(eW.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, l.jsx)(n0.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var n3 = n(312742),
    n5 = n(317097),
    n8 = n(319060),
    n7 = n(866323),
    n4 = n(817281),
    ie = n(534409),
    it = n(240248),
    ii = n(678708),
    il = n(187322),
    is = n(140735),
    ir = n(548118),
    ia = n(273923);
function io(e) {
    let { guildId: t, animate: n } = e,
        i = (0, h.bG)([e4.A], () => e4.A.getGuild(t), [t]),
        s = (0, C.r)(A.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, l.jsx)("div", { className: a()(ia.VL, ia.zU), children: (0, l.jsx)(n0.E, { color: "currentColor" }) })
        : (0, l.jsx)(ir.Ay, {
              guild: i,
              animate: n,
              size: ir.Ay.Sizes.MINI,
              iconSize: s,
              lossless: !0,
              className: ia.VL,
              tabIndex: -1,
          });
}
function id(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: s } = t,
        r = n && i,
        o = (0, l.jsx)("div", {
            className: ia.hJ,
            children: (0, l.jsx)("div", {
                className: ia.Eh,
                children: (0, l.jsx)(ii.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, l.jsx)("div", {
            className: ia.qJ,
            children: (0, l.jsx)("div", {
                className: ia.jg,
                children: s.slice(0, 4).map((e) => (0, l.jsx)(io, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, l.jsxs)("div", {
        "aria-hidden": !0,
        className: a()({ [ia.NG]: r, [ia.yd]: !r }),
        children: [!r && o, d],
    });
}
function ic(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: i,
            mediaState: r,
            mentionCount: a = 0,
            isMentionLowImportance: o,
            tooltipName: d,
            folderGroupId: c,
            folderButtonContent: u,
            onClick: _,
            onContextMenu: h,
            onHoverChange: p,
            onKeyDown: g,
            treeItemProps: { onFocus: m, ...f },
            "aria-setsize": E,
            "aria-posinset": I,
        } = e,
        [C, S] = s.useState(!1),
        x = s.useCallback(() => {
            i || S(!0), p?.(!0);
        }, [i, p]),
        b = s.useCallback(() => {
            i || S(!1), p?.(!1);
        }, [i, p]),
        N = n || null == r ? null : ed(r),
        T =
            !n && a > 0
                ? eo(a, o ? A.A.colors.BACKGROUND_MOD_STRONG.css : A.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css)
                : null;
    return (0, l.jsx)(il.vN, {
        children: (0, l.jsxs)(tz.D, {
            className: ia.H3,
            onClick: _,
            onContextMenu: h,
            onMouseEnter: x,
            onMouseLeave: b,
            onKeyDown: g,
            onFocus: m,
            focusProps: { enabled: !1 },
            ...f,
            role: "treeitem",
            "aria-setsize": E,
            "aria-posinset": I,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, l.jsx)(is.A, {
                    children: eW.intl.formatToPlainString(eW.t["90/DwM"], { folderName: d, mentions: a }),
                }),
                (0, l.jsx)(U.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: N,
                    lowerBadge: T,
                    lowerBadgeSize: { width: (0, X.o6)(a) },
                    children: (0, l.jsx)("div", {
                        className: ia.vA,
                        children:
                            null != u
                                ? (0, l.jsx)("div", { className: ia.hJ, children: u })
                                : (0, l.jsx)(id, { folderNode: t, hovered: C, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var iu = n(573435),
    i_ = n(643918);
function ih(e) {
    let { className: t, isFolder: n } = e,
        i = (0, C.r)(A.A.modules.guildbar.AVATAR_SIZE);
    return (0, l.jsx)(iu.Ay, {
        mask: iu.Ay.Masks.SQUIRCLE,
        className: a()(t, i_.OL, { [i_.lQ]: n }),
        width: i,
        height: i,
        children: (0, l.jsx)("div", { className: i_.ZU }),
    });
}
var ip = n(114329),
    ig = n(620370);
let im = (0, it.xI)(n8.A.FOLDER_ITEM_ANIMATION_DURATION),
    iA = (0, tS.animated)(E.B),
    iE = s.memo(function (e) {
        var t;
        let n,
            i,
            r,
            {
                folderNode: o,
                setNodeRef: d,
                selected: c,
                expanded: _,
                mediaState: h,
                mentionCount: p = 0,
                isMentionLowImportance: g,
                unread: m = !1,
                defaultFolderName: f,
                draggable: E = !1,
                sorting: I = !1,
                onDragStart: S,
                onDragEnd: x,
                onExpandCollapse: b,
                onContextMenu: N,
                renderChildNode: T,
                folderButtonSize: y,
                folderButtonContent: v,
                "aria-setsize": R,
                "aria-posinset": j,
            } = e,
            { id: O, name: L, children: M } = o,
            [G, D] = s.useState(!1),
            [w, P] = s.useState(!1),
            U = G || w,
            k = (0, ie.qK)("FolderItem");
        s.useEffect(() => {
            I && D(!1);
        }, [I]);
        let [{ dragging: V }, B] = (0, n3.i)({
                type: ti.PJ.FOLDER,
                item: () => (S?.(), { type: ti.PJ.FOLDER, nodeId: o.id }),
                end() {
                    x?.(), (0, n4.um)(te.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            F = s.useCallback((e) => {
                P(e);
            }, []),
            W = s.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !_) || ("ArrowLeft" === e.key && _)) && b();
                },
                [b, _],
            ),
            H = null != L && "" !== L ? L : null != f && "" !== f ? f : eW.intl.string(eW.t.xV9hVh),
            z = (0, u.Vd)(`${O}`),
            q = `folder-items-${O}`,
            Q =
                ((t = M.length),
                (n = (0, C.r)(A.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, C.r)(A.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (r = (0, C.r)(A.A.space.SPACE_XS))) - r + (r - (n - i) / 2) + (0, C.r)(A.A.space.SPACE_4)),
            J = (0, n7.p)(!V && _, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: im },
            }),
            X = s.useCallback((e) => d?.(O, e), [d, O]),
            $ = (0, l.jsxs)(Y.c, {
                children: [
                    (0, l.jsx)(K.A, { disabled: V || _, hovered: G, selected: c, unread: m, className: ig.Io }),
                    (0, l.jsx)(tQ, {
                        text: H,
                        disabled: I,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, l.jsx)("div", {
                            ref: E
                                ? (e) => {
                                      B(e);
                                  }
                                : void 0,
                            className: a()(ia.MJ, { [ia.L0]: "icon" === y || k, [ig.oR]: !V && w && !_ }),
                            "data-dnd-name": H,
                            children: V
                                ? (0, l.jsx)(ih, { isFolder: !0 })
                                : (0, l.jsx)(ic, {
                                      folderNode: o,
                                      expanded: _,
                                      sorting: I,
                                      mediaState: h,
                                      mentionCount: p,
                                      isMentionLowImportance: g,
                                      tooltipName: H,
                                      folderGroupId: q,
                                      onClick: b,
                                      onContextMenu: N,
                                      onHoverChange: D,
                                      onKeyDown: W,
                                      treeItemProps: z,
                                      folderButtonContent: v,
                                      "aria-setsize": R,
                                      "aria-posinset": j,
                                  }),
                        }),
                    }),
                    E ? (0, l.jsx)(nr, { name: H, targetNode: o, onDragOverChanged: F }) : null,
                ],
            }),
            Z = null != o.color ? o.color : ip.DO,
            ee = Z === ip.DO ? void 0 : (0, n5.Hl)(Z);
        return (0, l.jsxs)("div", {
            ref: X,
            className: a()(ia.qc, { [ia.Av]: _, [ia.Lg]: U }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": w,
            children: [
                !V && _ && (0, l.jsx)("span", { className: ia.GO }),
                $,
                J((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, l.jsx)(
                            iA,
                            {
                                id: q,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: ia.TN,
                                style: { height: e.height.to((e) => e * Q) },
                                "aria-label": o.name,
                                children: M.map((t, n) => T(t, n, M.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                E && _ ? (0, l.jsx)(na, { name: H, targetNode: o }) : null,
            ],
        });
    });
var iI = n(354583);
let iC = s.memo(function (e) {
    let t,
        i,
        r,
        a,
        o,
        d,
        c,
        u,
        _,
        p,
        g,
        { folderNode: m, ...A } = e,
        { id: f, name: E, color: I, children: C } = m,
        S = C.map((e) => e.id),
        x = (0, ep.A)((e) => e.guildId),
        b = (0, h.bG)([tr.A], () => tr.A.isFolderExpanded(f)),
        N = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = e4.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eB.Vq),
                n = 2 * eF.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(m),
        T =
            ((t = (0, h.bG)([tC.A], () => tC.A.getGuildId())),
            (i = m.children.map((e) => e.id)),
            (r = null != t && i.includes(t)),
            (a = !1),
            (o = !1),
            (d = !1),
            (c = (0, h.bG)([tC.A], () => tC.A.getChannelId())),
            (_ = null != (u = (0, iI.A)()?.guild_id) && i.includes(u)),
            (p = (0, h.bG)([eE.A], () => null != c && eE.A.hasVideo(c), [c])),
            (g = (0, h.bG)([em.A], () => em.A.getCurrentUserActiveStream())),
            r && ((a = !p), (o = p), (d = null != g && null != g.guildId && i.includes(g.guildId))),
            s.useMemo(
                () => ({ audio: a, video: o, screenshare: d, liveStage: _, isCurrentUserConnected: r }),
                [a, o, d, _, r],
            )),
        {
            mentionCount: y,
            isMentionLowImportance: v,
            unread: R,
        } = (0, h.cf)([ey.default], () => ({
            mentionCount: S.map((e) => ey.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => ey.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => ey.default.hasUnread(e)),
        })),
        j = s.useCallback(() => {
            t4.A.toggleGuildFolderExpand(f);
        }, [f]),
        O = s.useCallback(
            (e) => {
                (0, tb.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, folderId: f, folderName: E, folderColor: I, unread: R || y > 0 });
                });
            },
            [f, E, I, R, y],
        );
    return (0, l.jsx)(iE, {
        ...A,
        folderNode: m,
        expanded: b,
        selected: null != x && S.includes(x),
        mentionCount: y,
        isMentionLowImportance: v,
        unread: R,
        mediaState: T,
        defaultFolderName: N,
        onExpandCollapse: j,
        onContextMenu: O,
    });
});
var iS = n(113494),
    ix = n(821124),
    ib = n(212455);
function iN(e) {
    let t = e?.features.has(eF.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, h.bG)([ib.A, ek.default, e7.Ay], () => {
            if (null == e) return;
            let t = ib.A.getRequest(e.id),
                n = ek.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = e7.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, ix.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var iT = n(347951),
    iy = n(478437),
    iv = n(811024),
    iR = n(508654),
    ij = n(233993),
    iO = n(446600),
    iL = n(95701),
    iM = n(495544);
function iG(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ev.A;
    return null != e && e.type !== iy.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eF.hVb.VIEW_CHANNEL, e);
}
function iD(e) {
    let t = (0, h.bG)([ej.Ay], () => ej.Ay.isMuted(e)),
        n = (0, iR.BP)(e),
        i = (0, h.yK)([W.Ay, tR.A], () =>
            W.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tR.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tR.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        l = (0, H.H)(i[0]?.location),
        s = (0, iv.Gp)(l),
        {
            guildHasVoice: r,
            guildHasVideo: a,
            selectedVoiceChannelHasVideo: o,
        } = (0, h.cf)([ef.A, eE.A, e4.A, ev.A, eA.A], () => {
            var n;
            let i = ef.A.getVoiceChannelId(),
                l = e4.A.getGuild(e)?.afkChannelId,
                s = eE.A.getUsersWithVideo(e),
                r =
                    ((n = eE.A.getVoiceStates(e)),
                    d()(n)
                        .filter((e) => !tR.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in r) if (iG(eA.A.getBasicChannel(r[e].channelId), l ?? void 0, ev.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of s) if (iG(eA.A.getBasicChannel(r[e]?.channelId), l ?? void 0, ev.A)) return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && eE.A.hasVideo(i),
            };
        }, [e, t]),
        c = iM.default.getId();
    return (0, h.cf)([ef.A, eA.A, W.Ay, iO.A, em.A, ev.A], () => {
        let l = ef.A.getVoiceChannelId(),
            d = eA.A.getChannel(l)?.guild_id === e,
            u = !1,
            _ = !1,
            h = !1,
            p = !1,
            g = !1,
            m = !1;
        if (!d && t)
            return {
                audio: u,
                video: p,
                screenshare: g,
                liveStage: h,
                activeEvent: _,
                activity: m,
                isCurrentUserConnected: !1,
            };
        let A = eI.default.keys(iO.A.getStageInstancesByGuild(e)).some((e) => {
                let t = eA.A.getChannel(e);
                return null != t && ev.A.can(ij.Gk, t);
            }),
            f = d && (eA.A.getChannel(l)?.isGuildStageVoice() ?? !1),
            E = !!d && null != em.A.getActiveStreamForUser(c, e),
            I = em.A.getAllApplicationStreams()
                .filter((e) => !tR.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e),
            C = d && o,
            S = (() => {
                if (s) return i.length > 0;
                for (let e of i) {
                    let t = eA.A.getChannel((0, H.H)(e.location));
                    if (null != t && (0, iL.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            x = W.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            d
                ? ((u = !0), (_ = n?.channel_id === l), (h = f), (p = C), (g = E), (m = x))
                : ((u = r), (_ = null != n), (h = A), (p = a), (g = I), (m = S)),
            {
                audio: u,
                video: p,
                screenshare: g,
                liveStage: h,
                activeEvent: _,
                activity: m,
                isCurrentUserConnected: d || f,
            }
        );
    }, [e, t, o, c, s, i, n, r, a]);
}
var iw = n(607399),
    iP = n(702841),
    iU = n(658128),
    ik = n(976860),
    iV = n(676279);
function iB(e) {
    let { guild: t, show: n, active: i, onAnimationStart: s, onAnimationRest: r } = e,
        o = {},
        d = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, C.r)(A.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, C.r)(A.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let _ = (0, n7.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: s, onRest: r });
    return (0, l.jsx)(l.Fragment, {
        children: _(
            (e, n, i) =>
                n &&
                (0, l.jsx)(
                    "div",
                    {
                        className: ia.qc,
                        children: (0, l.jsx)("div", {
                            className: a()(ia.MJ, ia.L0),
                            style: { margin: 0 },
                            children: (0, l.jsx)(tS.animated.div, {
                                className: ia.NG,
                                style: e,
                                children: (0, l.jsx)("div", {
                                    className: ia.qJ,
                                    children: (0, l.jsx)("div", {
                                        className: ia.jg,
                                        children: (0, l.jsx)(ir.Ay, {
                                            guild: t,
                                            size: ir.Ay.Sizes.SMOL,
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
var iF = n(454938),
    iW = n(714991),
    iH = n(57991),
    iK = n(164956),
    iY = n(624265),
    iz = n(970278),
    iq = n(808728);
function iQ(e, t, n) {
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: eH.nM,
              children: [
                  (0, l.jsx)(e, { className: eH.RI, color: "currentColor" }),
                  (0, l.jsx)(ew.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iJ(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, l.jsx)(eG.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eW.intl.string(eW.t.fpKdS1),
          })
        : (0, l.jsx)(tG.A, { muteConfig: t, className: n });
}
function iX(e) {
    let t,
        n,
        i,
        r,
        o,
        c,
        u,
        _,
        p,
        g,
        m,
        A,
        f,
        E,
        I,
        C,
        S,
        x,
        b,
        N,
        { guild: T } = e,
        y = T.id,
        {
            voiceUsersToShow: v,
            stageSpeakers: R,
            numStageListeners: j,
            streamUsersToShow: O,
            embeddedActivitiesUsers: L,
        } = ((t = T.id),
        (n = (0, h.yK)(
            [iq.Ay, iz.A],
            () => [
                ...iq.Ay.getChannels(t)
                    [iq.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === eF.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(iz.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (i = (0, iY.Ay)(t)),
        (r = s.useMemo(() => i.map((e) => e.id), [i])),
        (o = (0, h.bG)([eV.Ay], () => eV.Ay.getVoiceStates(t), [t])),
        (c = (0, h.yK)([tR.A], () => tR.A.getBlockedOrIgnoredIDs())),
        (u = d().flatMap(n, (e) =>
            e === T.afkChannelId
                ? []
                : tj(
                      (o[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      c,
                  ),
        )),
        (_ = (0, h.yK)([eP.A], () =>
            d().flatMap(r, (e) =>
                e === T.afkChannelId
                    ? []
                    : tj(
                          eP.A.getMutableParticipants(e, eU.ip.SPEAKER)
                              .filter((e) => e.type === eU.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          c,
                      ),
            ),
        )),
        (p = (0, h.bG)([eP.A], () => {
            let e = 0;
            for (let t of r) e += eP.A.getParticipantCount(t, eU.ip.AUDIENCE);
            return e;
        })),
        (g = (0, h.yK)(
            [em.A],
            () =>
                tO(
                    em.A.getAllApplicationStreams()
                        .filter((e) => e.guildId === t)
                        .map((e) => e.ownerId),
                    c,
                ),
            [c, t],
        )),
        (m = (0, h.yK)(
            [W.Ay],
            () =>
                tO(
                    W.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    c,
                ),
            [t, c],
        )),
        (A = (0, h.yK)([ek.default], () => tj(m.map((e) => ek.default.getUser(e))), [m])),
        (f = (0, h.yK)([ek.default], () => g.map((e) => ek.default.getUser(e)), [g])),
        (I = tj((E = u.filter((e) => !g.includes(e.id) && !m.includes(e.id))))),
        (C = f.filter((e) => null != e && !m.includes(e.id))),
        (S = (0, h.bG)([tL.A], () => tL.A.getUserAffinitiesMap(), [])),
        (x = s.useMemo(() => (0, tM.L)(I, S, "GuildTooltip - nonBlockedUsers"), [I, S])),
        (b = s.useMemo(() => (0, tM.L)(_, S, "GuildTooltip - stageSpeakers"), [_, S])),
        (N = s.useMemo(() => (0, tM.L)(C, S, "GuildTooltip - streamUsers"), [C, S])),
        {
            voiceUsersToShow: x,
            stageSpeakers: b,
            numStageListeners: p,
            streamUsersToShow: N,
            embeddedActivitiesUsers: s.useMemo(() => (0, tM.L)(A, S, "GuildTooltip - embeddedActivitiesUsers"), [A, S]),
            hasActivity: _.length > 0 || E.length > 0 || C.length > 0 || A.length > 0,
        }),
        M = iQ(ei.H, v, y),
        G =
            0 === R.length
                ? null
                : (0, l.jsxs)("div", {
                      className: eH.nM,
                      children: [
                          (0, l.jsx)(ee.q, { size: "lg", color: "currentColor", className: eH.RI }),
                          (0, l.jsx)(ew.Ay, { guildId: y, users: R, max: 3 }),
                          (0, l.jsxs)("div", {
                              className: eH.GZ,
                              children: [
                                  (0, l.jsx)(eM.L, { size: "xs", color: "currentColor" }),
                                  (0, l.jsx)(eG.E, {
                                      className: eH._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: j,
                                  }),
                              ],
                          }),
                      ],
                  }),
        D = iQ(eD.F, O, y),
        w = iQ(el.k, L, y),
        { isMuted: P, muteConfig: U } = (0, h.cf)(
            [ej.Ay],
            () => ({ isMuted: ej.Ay.isMuted(y), muteConfig: ej.Ay.getMuteConfig(y) }),
            [y],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            G,
            M,
            D,
            w,
            P ? (0, l.jsx)(iJ, { muteConfig: U, className: a()(eH.LM, { [eH.Sx]: null != M || null != D }) }) : null,
        ],
    });
}
function i$(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, l.jsx)(eG.E, {
        className: eH.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case es.B5.SUBMITTED:
                    return eW.intl.string(eW.t["9KFC98"]);
                case es.B5.REJECTED:
                    return eW.intl.string(eW.t["TQY/Rd"]);
                case es.B5.APPROVED:
                    return eW.intl.string(eW.t.WXHcq5);
                default:
                    return eW.intl.string(eW.t.fjHFC8);
            }
        })(t),
    });
}
function iZ(e) {
    let { guild: t } = e,
        n = (0, iF.A)(t),
        i = iN(t),
        s = null != i ? (0, l.jsx)(i$, { guildJoinRequestStatus: i }) : null,
        r = (0, l.jsx)(iX, { guild: t }),
        o = (0, h.bG)([iK.A], () => iK.A.isViewingRoles(t.id)),
        d = (0, iT.Ig)(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: a()(eH.nM, eH.Dl),
                children: [
                    n
                        ? (0, l.jsx)(iH.A, { guild: t, className: eH.WX })
                        : (0, l.jsx)(iW.A, { guild: t, size: 20, className: eH.aL }),
                    (0, l.jsx)("span", { className: a()(eH.cN, eH.NT), children: t.name }),
                ],
            }),
            d
                ? (0, l.jsx)(eG.E, {
                      className: eH.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eW.intl.string(eW.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, l.jsx)(eG.E, {
                      className: eH.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eW.intl.string(eW.t["5LwN89"]),
                  })
                : (s ?? r),
        ],
    });
}
function i0(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: r } = e,
        a = s.useMemo(
            () => (n ? null : (0, l.jsx)("div", { className: eH.A_, children: (0, l.jsx)(iZ, { guild: t }) })),
            [n, t],
        );
    return (0, l.jsx)(eL.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: r,
    });
}
let i1 = { analyticsSource: { page: eF.liQ.GUILD_CHANNEL, section: eF.JJy.CHANNEL_LIST, object: eF.ZSU.CHANNEL } };
function i9(e, t) {
    (0, tb.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("32292"),
            n.e("49681"),
            n.e("96382"),
            n.e("20044"),
            n.e("28367"),
            n.e("45174"),
            n.e("85519"),
            n.e("87963"),
            n.e("37266"),
            n.e("55057"),
            n.e("76021"),
            n.e("63229"),
            n.e("31988"),
            n.e("55343"),
            n.e("93103"),
            n.e("88342"),
            n.e("8555"),
            n.e("40142"),
            n.e("60161"),
            n.e("98765"),
            n.e("65437"),
            n.e("34983"),
            n.e("92414"),
            n.e("95208"),
            n.e("72401"),
            n.e("47417"),
            n.e("19558"),
            n.e("53142"),
            n.e("76390"),
            n.e("93312"),
            n.e("95752"),
            n.e("67339"),
            n.e("21055"),
            n.e("31538"),
            n.e("21453"),
            n.e("54436"),
            n.e("98954"),
            n.e("421"),
            n.e("227"),
            n.e("90184"),
            n.e("62718"),
            n.e("29594"),
            n.e("52286"),
            n.e("8018"),
            n.e("7637"),
            n.e("28136"),
            n.e("3025"),
            n.e("86674"),
            n.e("4009"),
            n.e("49862"),
            n.e("80093"),
            n.e("22547"),
            n.e("60989"),
            n.e("82486"),
            n.e("77602"),
            n.e("68587"),
            n.e("86546"),
            n.e("15373"),
            n.e("42749"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("46411"),
            n.e("25961"),
            n.e("44935"),
            n.e("13848"),
            n.e("62890"),
            n.e("46291"),
            n.e("41068"),
            n.e("32347"),
            n.e("8458"),
            n.e("15666"),
            n.e("11810"),
            n.e("95765"),
            n.e("31742"),
            n.e("13337"),
            n.e("65338"),
            n.e("49036"),
            n.e("77473"),
        ]).then(n.bind(n, 860417));
        return (n) => (0, l.jsx)(e, { ...n, guild: t });
    });
}
let i2 = s.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: i,
            onDragEnd: r,
            route: o,
            guild: d,
            animatable: c,
            selected: _ = !1,
            unread: h = !1,
            mediaState: p,
            unavailable: g = !1,
            badge: f = 0,
            isMentionLowImportance: E,
            contextMenu: I = i9,
            draggable: S = !1,
            sorting: x = !1,
            preloadOnClick: b = !0,
            guildJoinRequestStatus: N,
            height: T,
            "aria-setsize": y,
            "aria-posinset": v,
        } = e,
        { id: R, parentId: j } = t,
        O =
            e.upperBadge ??
            (g
                ? (0, l.jsx)(X.fk, { icon: (0, $.k)(er.A), disableColor: !0, className: ea.yk })
                : null != p
                  ? ed(p)
                  : void 0),
        L = e.lowerBadge ?? void 0;
    null == L && f > 0
        ? (L =
              eo(f, E ? A.A.colors.BACKGROUND_MOD_STRONG.css : A.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css) ??
              void 0)
        : null == L && null != N && (L = ec({ guildJoinRequestStatus: N }) ?? void 0);
    let M = e.lowerBadgeSize ?? { width: (0, X.o6)(f) },
        [{ dragging: G }, D] = (0, n3.i)({
            type: ti.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                r?.(), (0, n4.um)(te.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        w = (0, u.Vd)(R ?? eF.dJq, null != j ? 2 : 1),
        [P, V] = s.useState(!1),
        B = !x && P,
        [W, H] = s.useState(!1),
        [z, q] = s.useState(!1),
        [Q] = s.useState(() => new m.J_(70, () => q(!0))),
        J = (0, iV.nr)() && !iw.Fr;
    s.useEffect(() => () => Q.cancel(), [Q]);
    let Z = s.useCallback(() => {
            null != o ? (0, ik.pX)(o, { state: i1 }) : (0, eg.u)(R, { state: i1 });
        }, [R, o]),
        ee = s.useCallback(() => {
            if (null != o || null == d || g || !b) return;
            let e = (0, iU.W)(d.id);
            null != e && F.A.preload(d.id, e);
        }, [o, d, g, b]),
        et = (0, iP.bG)([e7.Ay], () => e7.Ay.isCurrentUserGuest(R)),
        en = s.useCallback(
            (e) => {
                null == d || et || I(e, d);
            },
            [d, I, et],
        ),
        ei = s.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != j && document.querySelector(`[aria-owns=folder-items-${j}]`)?.focus();
            },
            [j],
        ),
        el = s.useCallback(
            (e) => {
                e ? Q.delay() : (Q.cancel(), q(!1));
            },
            [Q],
        );
    function es() {
        x || V(!0);
    }
    function eu() {
        x || V(!1);
    }
    let e_ = s.useCallback(
            (e) => {
                n?.(R, e);
            },
            [R, n],
        ),
        eh = (0, C.r)(A.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let ep = d.name;
    f > 0
        ? (ep = eW.intl.formatToPlainString(eW.t["/uzRss"], { guildName: d.name, mentions: f }))
        : h && (ep = eW.intl.formatToPlainString(eW.t.lzqe42, { guildName: d.name }));
    let em = (0, l.jsx)(iB, {
            guild: d,
            show: z,
            active: _,
            onAnimationStart: function () {
                H(z);
            },
            onAnimationRest: function () {
                z || H(!1);
            },
        }),
        eA = J
            ? (0, l.jsx)(k.j, {
                  ariaLabel: ep,
                  name: d.name,
                  onClick: Z,
                  onMouseEnter: es,
                  onMouseLeave: eu,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, t3.Iv)(d, 2 * eh, B && c, !0),
                  selected: _ || B,
                  ...w,
                  "aria-setsize": y,
                  "aria-posinset": v,
                  "aria-selected": _,
              })
            : (0, l.jsx)(U.Q, {
                  selected: _,
                  children: (0, l.jsx)("div", {
                      ref: S
                          ? (e) => {
                                D(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": z,
                      children: (0, l.jsx)(k.j, {
                          ariaLabel: ep,
                          name: d.name,
                          onClick: Z,
                          onMouseEnter: es,
                          onMouseLeave: eu,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, t3.Iv)(d, 2 * eh, B && c, !0),
                          selected: _ || B,
                          ...w,
                          "aria-setsize": y,
                          "aria-posinset": v,
                          "aria-selected": _,
                      }),
                  }),
              }),
        ef = z || W ? em : eA,
        eE = (0, l.jsx)(no, { children: (0, l.jsx)(ih, {}) }),
        eI = J
            ? (0, l.jsx)(tS.animated.div, {
                  ref: S
                      ? (e) => {
                            D(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == T ? 1 : T },
                  "data-drop-hovering": z,
                  className: a()(ig.rN, { [ig.p9]: x, [ig.oR]: z, [ig.wH]: z || _ }),
                  children: (0, l.jsx)(U.Q, {
                      selected: !0,
                      upperBadge: O,
                      lowerBadge: L,
                      lowerBadgeSize: M,
                      children: ef,
                  }),
              })
            : (0, l.jsx)(tS.animated.div, {
                  style: { scale: null == T ? 1 : T },
                  className: a()(ig.rN, { [ig.p9]: x, [ig.oR]: z, [ig.wH]: z || _ }),
                  "data-drop-hovering": z,
                  children: (0, l.jsx)(U.Q, {
                      selected: _,
                      upperBadge: O,
                      lowerBadge: L,
                      lowerBadgeSize: M,
                      children: ef,
                  }),
              });
    return (0, l.jsxs)(Y.c, {
        ref: e_,
        children: [
            (0, l.jsx)(K.A, { hovered: !G && B, selected: !G && _, unread: !G && h, className: ig.Io }),
            (0, l.jsx)(i0, { guild: d, disabled: x, isDragging: G, children: G ? eE : eI }),
            S ? (0, l.jsx)(nr, { name: d.name, targetNode: t, onDragOverChanged: el }) : null,
        ],
    });
});
var i6 = n(182240);
let i3 = s.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        r = (0, h.bG)([e4.A], () => e4.A.getGuild(i)),
        a = iN(r),
        o = (0, h.bG)([t_.A], () => t_.A.isFocused()),
        d = (0, h.bG)([n1.A], () => n1.A.isUnavailable(i)),
        c = (0, ep.A)((e) => e.guildId),
        u = iD(i),
        {
            badge: _,
            unread: p,
            isMentionLowImportance: g,
        } = (0, h.cf)([ey.default], () => ({
            badge: ey.default.getMentionCount(i),
            isMentionLowImportance: ey.default.getIsMentionLowImportance(i),
            unread: ey.default.hasUnread(i),
        })),
        m = (0, iT.Ig)(r) && 0 === _,
        A = s.useMemo(
            () =>
                null != n
                    ? n
                    : m
                      ? (0, l.jsx)("div", {
                            className: i6.j,
                            children: (0, l.jsx)(iS.E, {
                                size: "custom",
                                color: "currentColor",
                                className: i6.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, m],
        );
    return (0, l.jsx)(i2, {
        ...e,
        guild: r,
        unavailable: d,
        animatable: o,
        selected: c === i,
        badge: _,
        isMentionLowImportance: g,
        lowerBadge: A,
        unread: p,
        mediaState: u,
        guildJoinRequestStatus: a,
    });
});
var i5 = n(922016),
    i8 = n(534514),
    i7 = n(821609),
    i4 = n(339350),
    le = n(475743),
    lt = n(624458),
    ln = n(408213),
    li = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    ll = n(928568);
function ls(e, t) {
    (0, tb.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, l.jsx)(e, { ...n, guild: t });
    });
}
function lr(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, h.bG)([ib.A], () => ib.A.getRequest(n)),
        s = (0, h.bG)([ib.A], () => ib.A.getJoinRequestGuild(n), [n]),
        r = (0, h.bG)([t_.A], () => t_.A.isFocused()),
        a = (0, h.bG)([tl.A], () => tl.A.getGuildId());
    return null == s
        ? null
        : (0, l.jsx)(i2, {
              guildNode: t,
              guild: s,
              animatable: r,
              draggable: !1,
              selected: n === a,
              preloadOnClick: !1,
              contextMenu: ls,
              lowerBadge:
                  i?.applicationStatus === es.B5.REJECTED
                      ? ec({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eF.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var la = n(785439);
function lo(e) {
    let { onActivate: t, children: n } = e,
        i = s.useRef(null),
        r = (0, h.bG)([ib.A], () => ib.A.hasJoinRequestCoackmark()),
        a = s.useCallback(() => {
            ln.Ay.clearCoachmark();
        }, []),
        o = (0, le.A)(r),
        d = s.useRef(null);
    return (
        s.useEffect(() => {
            r && r !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, r, o, t]),
        (0, l.jsxs)("div", {
            className: la.kL,
            children: [
                (0, l.jsx)(i5.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: r,
                    renderPopout: () =>
                        (0, l.jsxs)("div", {
                            className: la.jC,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: la.Bm,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: la.q3,
                                            children: [
                                                (0, l.jsx)(i8.D, {
                                                    variant: "heading-md/medium",
                                                    children: eW.intl.string(eW.t["0YV0YE"]),
                                                }),
                                                (0, l.jsx)(eG.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eW.intl.string(eW.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsx)(i7.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eW.intl.string(eW.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: a,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: la.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, l.jsx)("div", { ...e, className: la.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function ld(e) {
    let { onActivate: t } = e,
        [n, i] = s.useState(!1),
        r = (0, h.bG)([tl.A], () => tl.A.getGuildId()),
        a = (0, h.bG)([ib.A], () => ib.A.hasFetchedRequestToJoinGuilds),
        o = (0, ll.A)(),
        d = (0, le.A)(r),
        c = s.useMemo(() => {
            let e = (0, ti.xW)({
                folderId: li.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eW.intl.string(eW.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, ti.EL)(t, e.id));
            return e;
        }, [o, n]);
    s.useEffect(() => {
        n && !a && lt.A.fetchRequestToJoinGuilds();
    }, [n, a]);
    let u = null != r && o.includes(r);
    return (s.useEffect(() => {
        !n && u && d !== r && i(!0);
    }, [n, u, d, r]),
    0 === o.length)
        ? null
        : (0, l.jsx)(lo, {
              onActivate: t,
              children: (0, l.jsx)(iE, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), ln.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, l.jsx)("div", {
                      className: la.rH,
                      children: (0, l.jsx)(i4.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== ti.PJ.GUILD
                          ? null
                          : (0, l.jsx)(lr, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function lc(e) {
    let { guildId: t } = e,
        n = s.useMemo(() => (0, ti.EL)(t), [t]),
        i = (0, h.bG)([e4.A], () => e4.A.getGuild(t)),
        r = (0, h.bG)([t_.A], () => t_.A.isFocused()),
        a =
            t ===
            (0, ep.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = iD(t);
    return null == i
        ? null
        : (0, l.jsx)(i2, { guildNode: n, guild: i, animatable: r, selected: a, draggable: !1, mediaState: o });
}
var lu = n(803921);
let l_ = (0, j.Fe)({
        createPromise: () =>
            Promise.all([n.e("60161"), n.e("73644"), n.e("2529"), n.e("81505"), n.e("96296")]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    lh = (0, tt.isWindows)() ? 4 : 12 * !(0, tt.isMac)();
function lp(e) {
    return e.startsWith(eF.BVt.GUILD_DISCOVERY) || e.startsWith(eF.BVt.GLOBAL_DISCOVERY);
}
class lg {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = s.createRef();
    nodeRefs = {};
    timeout = new m.Ep();
    observer;
    constructor(e, t, n, i, l) {
        (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = l),
            (0, e2.u9)(this.getVisibleGuildIds);
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
            (null == e && lp(window.location.pathname)) ||
            e === eF.sFm.SERVER_DISCOVERY_BADGE ||
            e === eF.sFm.E3_SERVER_DISCOVERY_BADGE
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
        let { iconTotalSize: i, badgeVisibleBuffer: l, heightBeforeGuilds: s, bottomInset: r } = this.sizes,
            a = this.scrollerRef.current;
        if (null == a) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let d = i * o + s,
            c = a.getScrollerState();
        return (!t && !!(d >= c.scrollTop)) || (!!t && !!(d + i + l <= c.scrollTop + c.offsetHeight - r));
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
                          l = this.nodeRefs[i];
                      if (null == l) return !1;
                      let s = l.getBoundingClientRect(),
                          r = s.top - n;
                      return r + s.height > 0 && r < t;
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
        b.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = d().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function lm(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        r = (0, G.A)("TopSection"),
        { isExperimentEnabled: a } = (0, M.TW)("TopSection"),
        o = (0, h.bG)([ef.A], () => null != ef.A.getVoiceChannelId()),
        d = (0, f.useHasAnyModalOpen)(),
        c = (0, O.Ay)((e) => e.postConnectionOpen),
        [u, _] = (0, L.kn)(c && a && !o && !d ? [p.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        g = u === p.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [m] = (0, L.kn)(g ? [p.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        A = m === p.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        E = s.useRef(!1),
        I = A && r;
    s.useEffect(() => {
        I && !E.current && n(), (E.current = I);
    }, [n, I]);
    let C = (0, h.yK)([e4.A, e7.Ay], () => e4.A.getGuildIds().filter((e) => e7.Ay.isCurrentUserGuest(e))),
        S = i.concat(C),
        { entrypoint: x } = (0, e3.X8)({ location: "GuildsBar" });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nJ, {}),
            x === e3.RK.SERVER_RAIL_TOP && (0, l.jsx)(l_, {}),
            r ? (0, l.jsx)(e9, { shouldShowIntroPopover: A, markIntroPopoverAsDismissed: _ }) : null,
            !t && (0, l.jsx)(tK, {}),
            S.map((e) => (0, l.jsx)(lc, { guildId: e }, e)),
            (0, l.jsx)(ld, { onActivate: n }),
        ],
    });
}
function lA(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: s, lurkingGuildIds: r } = e,
        [a] = (0, h.yK)([te.Ay], () => {
            let e = te.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = a.getRoots(),
        d = (0, h.yK)([e8.A], () => e8.A.getGeoRestrictedGuilds()).map((e) =>
            (0, l.jsx)(ng, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.B, {
                role: "group",
                "aria-label": eW.intl.string(eW.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => s(e, t, o.length)),
            }),
            d,
            (0, l.jsx)(n6, {}),
            i ? null : (0, l.jsx)(n_, { disableTooltip: r.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, l.jsx)(tZ, {}),
        ],
    });
}
function lf(e) {
    var t;
    let { disableAppDownload: n = tt.isPlatformEmbedded, isOverlay: i = !1, className: r, themeOverride: o } = e,
        [d] = (0, h.yK)([te.Ay], () => {
            let e = te.Ay.getGuildsTree();
            return [e, e.version];
        }),
        _ = (0, h.bG)([e6.A], () => e6.A.lurkingGuildIds()),
        p = s.useMemo(() => (i ? [] : _), [_, i]),
        g = (0, h.bG)([R.A], () => R.A.isFullscreenInContext()),
        { isSorting: f, startSorting: E, stopSorting: b } = (0, tn.A)(),
        T = s.useRef(!1),
        [j] = s.useState(() => new m.Ep()),
        O = s.useRef(null),
        L = s.useRef(null),
        { ref: M, ...D } = (0, u.$y)(),
        w = (0, I.R7)(),
        [P, U] = s.useState(!1),
        k = (0, C.r)(A.A.modules.guildbar.AVATAR_SIZE),
        V = (0, C.r)(A.A.space.SPACE_XS),
        B = (0, G.A)("GuildsBar"),
        { pathname: F } = (0, c.zy)(),
        { entrypoint: W } = (0, e3.X8)({ location: "GuildsBar" }),
        H = +!!B + +(W === e3.RK.SERVER_RAIL_TOP),
        K = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = k + V),
                    {
                        iconSize: k,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + V),
                        heightBeforeGuilds: lh + t + H * e,
                        bottomInset: 16,
                    });
            return new lg(
                d,
                U,
                eF.tEg,
                () => {
                    O.current?.calculateState(), L.current?.calculateState();
                },
                n,
            );
        }, [k, V, d, H]);
    s.useEffect(
        () => (
            K.setResizeObserver(),
            () => {
                K.clearResizeObserver();
            }
        ),
        [K],
    ),
        s.useEffect(() => {
            let e = () => {
                O.current?.calculateState(), L.current?.calculateState();
            };
            return ey.default.addChangeListener(e), () => ey.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: Y } = (0, v.Ay)(y.A.GUILDS_LIST),
        z = lp(F);
    (0, N.u5)(() => {
        if (!T.current && 0 !== d.size) {
            if (!z) {
                let { scrollTop: e } = e5.A.getGuildListDimensions();
                K.scrollTo({ to: e, animate: !1 });
            }
            return (T.current = !0), () => j.stop();
        }
    }),
        s.useEffect(() => {
            if ((K.setGuildsTree(d), T.current || 0 === d.size)) return;
            let e = ep.A.getState().guildId;
            K.scrollToGuild(e, !1);
            let t = null;
            return ep.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), K.scrollToGuild(t, !1));
            });
        }, [d, K]);
    let q = s.useCallback(() => {
        K.scrollTo({ to: 0, animate: !1 });
    }, [K]);
    (t = K.scrollToGuild),
        s.useEffect(() => {
            let e = null;
            function n() {
                let n = tl.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                tl.A.addChangeListener(n),
                () => {
                    tl.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let Q = s.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case ti.PJ.FOLDER:
                        return (0, l.jsx)(
                            iC,
                            {
                                folderNode: t,
                                setNodeRef: K.setNodeRef,
                                draggable: !0,
                                sorting: f,
                                onDragStart: E,
                                onDragEnd: b,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case ti.PJ.GUILD:
                        return (0, l.jsx)(
                            i3,
                            {
                                guildNode: t,
                                setRef: K.setNodeRef,
                                draggable: !0,
                                sorting: f,
                                onDragStart: E,
                                onDragEnd: b,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [E, b, f, K.setNodeRef],
        ),
        J = (0, l.jsx)(nN, { selected: z, className: lu.ai }),
        X = W === e3.RK.SERVER_RAIL_BOTTOM;
    return (0, l.jsx)(v.f5, {
        value: Y,
        children: (0, l.jsx)(S.N, {
            theme: o,
            children: (e) =>
                (0, l.jsxs)("nav", {
                    className: a()(lu.iE, r, e, { [lu.R]: g }),
                    "aria-label": eW.intl.string(eW.t.PjnF2t),
                    children: [
                        (0, l.jsx)(tE, {
                            ref: O,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: lu.Xl,
                            barClassName: lu.Sh,
                        }),
                        (0, l.jsx)("ul", {
                            ref: M,
                            ...D,
                            ...w,
                            role: "tree",
                            className: lu.B2,
                            children: (0, l.jsxs)("div", {
                                className: lu.qD,
                                children: [
                                    (0, l.jsxs)(x.zC, {
                                        className: a()({ [lu.XG]: !0, [lu.qw]: P }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: K.scrollerRef,
                                        onScroll: K.handleScroll,
                                        children: [
                                            (0, l.jsx)(lm, { scrollToTop: q, lurkingGuildIds: p }),
                                            (0, l.jsx)(n$, {}),
                                            (0, l.jsx)(lA, {
                                                guildDiscoveryButton: J,
                                                disableAppDownload: n,
                                                isOverlay: i,
                                                renderTreeNode: Q,
                                                lurkingGuildIds: p,
                                            }),
                                        ],
                                    }),
                                    X &&
                                        (0, l.jsxs)("div", {
                                            children: [
                                                (0, l.jsx)(n$, { fullWidth: !0 }),
                                                (0, l.jsx)("div", { className: lu.JU, children: (0, l.jsx)(l_, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(tE, {
                            reverse: !0,
                            ref: L,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: a()(lu.LZ, { [lu.CH]: !i && !X, [lu.c0]: !i && X }),
                            barClassName: lu.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let lE = s.memo(
    function (e) {
        let t = (0, T.A)("guildsnav");
        return (0, l.jsx)(u.hD, { navigator: t, children: (0, l.jsx)(lf, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, g.A)(e, t),
);
