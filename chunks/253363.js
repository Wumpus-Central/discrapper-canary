n.d(t, { A: () => aS });
var i,
    a = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(735438),
    d = n.n(o),
    c = n(873263),
    _ = n(837381),
    E = n(621466),
    u = n(17928),
    A = n(554146),
    I = n(52133),
    T = n(451988),
    h = n(661531),
    S = n(192308),
    N = n(331322),
    f = n(312138),
    p = n(602853),
    m = n(43990),
    O = n(689175),
    C = n(951001),
    R = n(964486),
    g = n(260762),
    L = n(793574),
    D = n(688810),
    b = n(313961),
    M = n(268218),
    P = n(771781),
    U = n(932001),
    v = n(313281),
    y = n(832275);
n(321073);
var G = n(43105),
    w = n(857250),
    x = n(691540),
    V = n(862328),
    B = n(67811),
    F = n(27232),
    k = n(403581),
    H = n(308528),
    j = n(933958),
    Y = n(969151),
    W = n(941971),
    K = n(900848),
    $ = n(406810),
    Z = n(789645),
    q = n(933832),
    Q = n(22231),
    z = n(777666),
    X = n(565787),
    J = n(81466),
    ee = n(451394),
    et = n(31300),
    en = n(428689),
    ei = n(983851),
    ea = n(323384),
    er = n(513461),
    es = n(791606),
    el = n(266062);
function eo(e, t, n) {
    return (0, a.jsx)(z.hV, { count: e, color: t, "aria-hidden": n });
}
function ed(e) {
    let t,
        {
            audio: n,
            video: i,
            screenshare: a,
            isCurrentUserConnected: r,
            liveStage: s,
            activeEvent: l,
            activity: o,
        } = e;
    if (l) t = J.C;
    else if (s) t = ee.q;
    else if (a) t = et.k;
    else if (i) t = en.n;
    else if (n) t = ei.H;
    else {
        if (!o) return null;
        t = ea.k;
    }
    return e_({ icon: t, isCurrentUserConnected: r });
}
function ec(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case er.B5.SUBMITTED:
                    return [void 0, $.O];
                case er.B5.REJECTED:
                    return [h.A.unsafe_rawColors.RED_400.css, Z.P];
                case er.B5.APPROVED:
                    return [h.A.unsafe_rawColors.GREEN_360.css, q.A];
                default:
                    return [void 0, Q.R];
            }
        })(t);
    return e_({ icon: i, color: n });
}
function e_(e) {
    let { icon: t, color: n, isCurrentUserConnected: i } = e;
    return (0, a.jsx)(z.fk, {
        icon: t,
        className: l()(el.bG, { [el.gB]: i }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
var eE = n(855725),
    eu = n(532794),
    eA = n(366811),
    eI = n(345942),
    eT = n(616356),
    eh = n(734057),
    eS = n(309010),
    eN = n(977997),
    ef = n(935208),
    ep = n(181079),
    em = n(422258),
    eO = n(668267),
    eC = n(5180),
    eR = n(695633),
    eg = n(152007),
    eL = n(458294),
    eD = n(576705),
    eb = n(222823),
    eM = n(543465),
    eP = n(3026),
    eU = n(990078),
    ev = n(597601),
    ey = n(834730),
    eG = n(183623),
    ew = n(104171),
    ex = n(63995),
    eV = n(69407),
    eB = n(287809),
    eF = n(607567),
    ek = n(403362),
    eH = n(652215),
    ej = n(985018),
    eY = n(621035);
function eW(e, t) {
    return 0 === t.length
        ? null
        : (0, a.jsxs)("div", {
              className: eY.nM,
              children: [
                  (0, a.jsx)(e, { className: eY.RI, color: "currentColor" }),
                  (0, a.jsx)(ew.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eK() {
    let e = (0, u.yK)([ep.A, eh.A], () =>
            ef.default
                .keys(ep.A.getFavoriteChannels())
                .map((e) => eh.A.getChannel(e))
                .filter(ek.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eH.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eH.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        r = (0, u.yK)(
            [eF.Ay],
            () =>
                d().flatMap(n, (e) =>
                    eF.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        s = (0, u.yK)([ex.A], () =>
            d().flatMap(i, (e) =>
                ex.A.getMutableParticipants(e, eV.ip.SPEAKER)
                    .filter((e) => e.type === eV.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        l = (0, u.bG)([ex.A], () => {
            let e = 0;
            for (let t of i) e += ex.A.getParticipantCount(t, eV.ip.AUDIENCE);
            return e;
        }),
        o = (0, u.yK)(
            [eT.A],
            () =>
                eT.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, u.yK)([j.Ay], () => {
            let e = j.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        _ = (0, u.yK)([eB.default], () => c.map((e) => eB.default.getUser(e)), [c]),
        E = (0, u.yK)([eB.default], () => o.map((e) => eB.default.getUser(e)), [o]),
        A = eW(
            ei.H,
            r.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        I =
            0 === s.length
                ? null
                : (0, a.jsxs)("div", {
                      className: eY.nM,
                      children: [
                          (0, a.jsx)(ee.q, { size: "lg", color: "currentColor", className: eY.RI }),
                          (0, a.jsx)(ew.Ay, { guildId: void 0, users: s, max: 3 }),
                          (0, a.jsxs)("div", {
                              className: eY.GZ,
                              children: [
                                  (0, a.jsx)(ev.L, { size: "xs", color: "currentColor" }),
                                  (0, a.jsx)(ey.E, {
                                      className: eY._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: l,
                                  }),
                              ],
                          }),
                      ],
                  }),
        T = eW(
            eG.F,
            E.filter((e) => null != e && !c.includes(e.id)),
        ),
        h = eW(ea.k, _);
    return (0, a.jsxs)(a.Fragment, { children: [I, A, T, h] });
}
function e$() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: l()(eY.nM, eY.Dl),
                children: (0, a.jsx)("span", { className: l()(eY.cN, eY.NT), children: ej.intl.string(ej.t.wMWyci) }),
            }),
            (0, a.jsx)(eK, {}),
        ],
    });
}
function eZ(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = r.useMemo(() => (0, a.jsx)("div", { className: eY.A_, children: (0, a.jsx)(e$, {}) }), []);
    return (0, a.jsx)(eU.m, {
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
    eQ = n(49999),
    ez = n(788868),
    eX = n(335993),
    eJ = n(959495),
    e0 = n(988572);
let e1 = { analyticsSource: { page: eH.liQ.GUILD_CHANNEL, section: eH.JJy.CHANNEL_LIST, object: eH.ZSU.CHANNEL } };
function e2(e) {
    let t,
        i,
        s,
        l,
        o,
        d,
        c,
        E,
        A,
        I,
        T,
        h,
        { shouldShowIntroPopover: N, markIntroPopoverAsDismissed: f } = e,
        p = (0, _.Vd)("favorites"),
        { favoriteAdded: m, clearFavoriteAdded: O } = (0, v.CJ)(),
        C = r.useRef(null),
        { analyticsLocations: R } = (0, D.Ay)(L.A.FAVORITES_GUILD_BUTTON),
        [g, b] = r.useState(!1),
        M = (0, eP.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: P,
            favoriteGuildMuted: U,
            favoriteChannels: y,
        } = (0, u.cf)([ep.A], () => ({
            favoriteGuildEnabled: ep.A.favoriteGuildEnabled,
            favoriteChannels: ep.A.getFavoriteChannels(),
            favoriteGuildMuted: ep.A.favoriteGuildMuted,
        })),
        $ = (0, u.bG)([eS.A], () => eS.A.getChannelId(eH.YYv)),
        Z = (0, u.bG)([eh.A], () => eh.A.getChannel($)),
        q = (0, eA.A)((e) => e.guildId),
        Q = (0, eC.ai)(q),
        { badge: z, unread: X } = (0, u.cf)([eR.A, eh.A, eL.default, eg.A, eD.A, eb.Ay, eM.Ay], () =>
            ef.default.keys(y).reduce(
                (e, t) => {
                    let n = eh.A.getChannel(t),
                        i = n?.getGuildId(),
                        a = eb.Ay.getMentionCount(t);
                    if (
                        ((e.badge = e.badge + a),
                        (e.unread = e.unread || (eb.Ay.hasUnread(t) && eL.default.shouldCountChannelUnread(n, a))),
                        null != i)
                    ) {
                        let n = eR.A.getActiveJoinedRelevantThreadsForParent(i, t);
                        for (let t in n) {
                            let n = eb.Ay.getMentionCount(t);
                            e.badge += n;
                            let i = eh.A.getChannel(t);
                            e.unread = e.unread || (eb.Ay.hasUnread(t) && eL.default.shouldCountChannelUnread(i, n));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            ),
        ),
        J =
            ((i = null != (t = (0, u.bG)([eS.A], () => eS.A.getVoiceChannelId())) && null != y[t]),
            (s = (0, u.bG)([eT.A], () => {
                if (!i) return !1;
                let e = eT.A.getCurrentUserActiveStream();
                return null != e && null != y[e.channelId];
            })),
            (l = (0, u.bG)([eT.A], () => eT.A.getAllApplicationStreams().some((e) => null != y[e.channelId]))),
            (o = (0, u.bG)([eN.A], () => i && null != t && eN.A.hasVideo(t), [i, t])),
            (d = (0, u.yK)([j.Ay], () =>
                ef.default.keys(y).reduce((e, t) => (e.push(...j.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (c = (0, u.bG)([j.Ay], () =>
                Array.from(j.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, Y.H)(t);
                    return null != n && null != y[n];
                }),
            )),
            (E = d.length > 0),
            (A = !1),
            (I = !1),
            (T = !1),
            (h = !1),
            i ? ((A = !o), (I = o), (T = s), (h = c)) : ((T = l), (h = E)),
            ed({ audio: A, video: I, screenshare: T, liveStage: !1, isCurrentUserConnected: i, activity: h })),
        ee = z > 0 ? (0, eE.w)(z) : null,
        et = r.useRef(!1),
        { hasAccess: en } = (0, v.TW)("FavoritesButton"),
        ei = r.useCallback(
            (e, t) => {
                (et.current = !0), f(e, t);
            },
            [f],
        ),
        ea = r.useCallback(
            (e) => {
                e && ((0, eO.mv)("intro_dc"), (0, eI.u)(eH.YYv)),
                    en
                        ? (P || (0, em.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, S.openModalLazy)(async () => {
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
                                      (0, a.jsx)(e, { ...t, parentId: null, source: "favorites_button_onboarding" });
                              }))
                        : e && (0, eu.A)({ subscriptionTier: ez.pe.TIER_2, analyticsLocations: R }),
                    ei(eQ.i.TAKE_ACTION);
            },
            [ei, P, en, R],
        );
    return (
        r.useEffect(() => {
            N && (et.current = !1);
        }, [N]),
        r.useEffect(
            () => () => {
                N && !et.current && ei(eQ.i.AUTO_DISMISS, !0);
            },
            [ei, N],
        ),
        r.useEffect(() => {
            if (m) {
                let e = (0, w.o)(ej.intl.string(ej.t["4tSWQg"]), eq.Ck.FAVORITE);
                (0, x.P0)(e);
                let t = setTimeout(O, e.options?.duration ?? eq.jg.duration);
                return () => {
                    O(), clearTimeout(t);
                };
            }
        }, [m, O]),
        (0, a.jsxs)(K.c, {
            children: [
                (0, a.jsx)(W.A, { overlay: !0, selected: Q, hovered: g, unread: X && !U }),
                (0, a.jsx)(eZ, {
                    children: (0, a.jsx)(V.Q, {
                        selected: !0,
                        upperBadge: J,
                        lowerBadge: ee,
                        children: (0, a.jsx)("div", {
                            ref: C,
                            children: (0, a.jsx)(B.j, {
                                ...p,
                                ariaLabel: ej.intl.formatToPlainString(ej.t["/uzRss"], {
                                    guildName: ej.intl.string(ej.t.wMWyci),
                                    mentions: z,
                                }),
                                "aria-selected": Q,
                                to: { pathname: eH.BVt.CHANNEL(eH.YYv, $), state: e1 },
                                selected: Q || g,
                                onClick: () => {
                                    N && ea(!1);
                                },
                                onMouseEnter: () => b(!0),
                                onMouseLeave: () => b(!1),
                                onMouseDown: function () {
                                    null != Z && H.A.preload(Z.guild_id, Z.id);
                                },
                                onContextMenu: M,
                                children: (0, a.jsx)(F.G, {
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
                N &&
                    (0, a.jsx)(G.A, {
                        targetElementRef: C,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: e0.A, type: "image", aspectRatio: "16/9" },
                        title: ej.intl.string(eX.default["bu/mLv"]),
                        body: ej.intl.string(eX.default["/x2jT7"]),
                        onRequestClose: () => ei(eQ.i.USER_DISMISS),
                        actions: [
                            {
                                icon: k.t,
                                text: en ? ej.intl.string(eX.default["0lHa0Z"]) : ej.intl.string(eX.default["0nZZEk"]),
                                onClick: () => ea(!0),
                                variant: en ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
var e3 = n(633965),
    e4 = n(857071),
    e5 = n(851109),
    e6 = n(72314),
    e8 = n(543897),
    e7 = n(696451),
    e9 = n(71393),
    te = n(711014),
    tt = n(723702),
    tn = n(757780),
    ti = n(263715),
    ta = n(967198),
    tr = n(173860),
    ts = n(383394),
    tl = n(131677),
    to = n(228366);
let td = {};
class tc extends u.Ay.PersistedStore {
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
let t_ = new tc(to.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        td[t] = Date.now();
    },
});
var tE = n(531685),
    tu = n(583613);
let tA = "app-download-item",
    tI = "add-server-item";
function tT() {
    return !1;
}
function th(e) {
    let t = eL.default.getMutableGuildStates();
    return (
        (e === eH.sFm.SERVER_DISCOVERY_BADGE && !t_.hasViewed(eH.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== tA && e !== tI && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tS = (0, tu.L_)((e, t, n) => ["null", ...t, ...e, tI, eH.sFm.E3_SERVER_DISCOVERY_BADGE, tA]),
    tN = r.forwardRef(function (e, t) {
        let n = (0, u.yK)([te.Ay, tl.A, eL.default], () =>
                tS(te.Ay.getGuildFolders(), tl.A.getUnreadPrivateChannelIds(), eL.default.getStoreChangeSentinel()),
            ),
            i = (0, u.bG)([tE.A], () => tE.A.isFocused()),
            r = (0, u.bG)([ts.A], () => ts.A.getExpandedFolders());
        return (0, a.jsx)(tr.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: tT,
            textUnread: ej.intl.string(ej.t.y2b7CA),
            textMention: ej.intl.string(ej.t.y2b7CA),
            isMentioned: th,
            animate: i,
            expandedFolders: r,
        });
    });
n(667532);
var tf = n(73939),
    tp = n(763827),
    tm = n(925747),
    tO = n(778712),
    tC = n(442433),
    tR = n(620982),
    tg = n(571694),
    tL = n(47167),
    tD = n(598104),
    tb = n(994500);
function tM(e, t) {
    return e
        .filter((e) => (0, ek.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tb.A.isBlockedOrIgnored(e.id)));
}
function tP(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tb.A.isBlockedOrIgnored(e)));
}
var tU = n(427358),
    tv = n(907459),
    ty = n(145408);
function tG(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              className: eY.nM,
              children: [
                  (0, a.jsx)(t, { className: eY.RI, color: "currentColor" }),
                  (0, a.jsx)(ew.Ay, { users: n, max: 6 }),
              ],
          });
}
function tw(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, a.jsx)(ey.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ej.intl.string(ej.t.fpKdS1),
          })
        : (0, a.jsx)(ty.A, { muteConfig: t, className: n });
}
function tx(e) {
    let t,
        n,
        i,
        s,
        o,
        d,
        c,
        _,
        E,
        A,
        I,
        T,
        h,
        { channel: S } = e,
        N = S.id,
        {
            activityUsers: f,
            streamUsers: p,
            voiceUsers: m,
        } = ((t = S.id),
        (n = (0, u.yK)([tb.A], () => tb.A.getBlockedOrIgnoredIDs())),
        (i = (0, u.bG)([tU.A], () => tU.A.getUserAffinitiesMap(), [])),
        (s = (0, u.yK)(
            [j.Ay, eB.default],
            () =>
                j.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => eB.default.getUser(e)),
            [t],
        )),
        (o = r.useMemo(() => tM(s, n), [s, n])),
        (d = r.useMemo(() => (0, tv.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, u.yK)(
            [eT.A, eB.default],
            () =>
                tM(
                    eT.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => eB.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (_ = r.useMemo(() => tM(c, n), [c, n])),
        (E = r.useMemo(() => (0, tv.L)(_, i, "DirectMessageTooltip - activityUsers"), [_, i])),
        (A = r.useMemo(() => E.filter((e) => !d.some((t) => t.id === e.id)), [E, d])),
        (I = (0, u.yK)(
            [eF.Ay],
            () =>
                tM(
                    eF.Ay.getVoiceStatesForChannel(S).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [S, n],
        )),
        (T = r.useMemo(() => tM(I, n), [I, n])),
        (h = r.useMemo(() => (0, tv.L)(T, i, "DirectMessageTooltip - voiceUsers"), [T, i])),
        {
            voiceUsers: r.useMemo(
                () => h.filter((e) => !d.some((t) => t.id === e.id) && !E.some((t) => t.id === e.id)),
                [h, d, E],
            ),
            streamUsers: A,
            activityUsers: d,
        }),
        O = (0, a.jsx)(tG, { icon: ei.H, users: m }),
        C = (0, a.jsx)(tG, { icon: eG.F, users: p }),
        R = (0, a.jsx)(tG, { icon: ea.k, users: f }),
        { isMuted: g, muteConfig: L } = (0, u.cf)(
            [eM.Ay],
            () => ({ isMuted: eM.Ay.isChannelMuted(null, N), muteConfig: eM.Ay.getChannelMuteConfig(null, N) }),
            [N],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            O,
            C,
            R,
            g ? (0, a.jsx)(tw, { muteConfig: L, className: l()(eY.LM, { [eY.Sx]: null != O || null != C }) }) : null,
        ],
    });
}
function tV(e) {
    let { channel: t } = e,
        n = (0, tL.Ay)(t);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: l()(eY.nM, eY.Dl),
                children: (0, a.jsx)("span", { className: l()(eY.cN, eY.NT), children: n }),
            }),
            (0, a.jsx)(tx, { channel: t }),
        ],
    });
}
function tB(e) {
    let { channel: t, children: n } = e,
        i = (0, tL.Ay)(t),
        s = r.useMemo(() => (0, a.jsx)("div", { className: eY.A_, children: (0, a.jsx)(tV, { channel: t }) }), [t]);
    return (0, a.jsx)(eU.m, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": i ?? void 0,
        asContainer: !0,
        children: n,
    });
}
let tF = { friction: 28, tension: 600 };
function tk(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tF };
        case "scale":
            return { ...tF };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class tH extends r.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new tm.Controller({ scale: 0, height: 0, opacity: 0, config: tk }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !tE.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tk })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: tk }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !tE.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tk }).start().then(e),
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { size: e } = this.props,
            { controller: t } = this.state,
            { opacity: n, height: i, scale: a } = t.springs;
        return { opacity: n, height: i.to([0, 1], [0, e]), transform: a.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`) };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === eH.rbe.DM ? eB.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tg.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eH.rbe.DM ? eB.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, tC.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("98944"),
                      n.e("17546"),
                      n.e("80848"),
                      n.e("98042"),
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("34552"),
                      n.e("55411"),
                      n.e("93103"),
                      n.e("8757"),
                      n.e("91763"),
                      n.e("89673"),
                      n.e("68403"),
                      n.e("85968"),
                      n.e("60195"),
                      n.e("91007"),
                      n.e("29787"),
                      n.e("88342"),
                      n.e("97558"),
                      n.e("94000"),
                      n.e("91994"),
                      n.e("38730"),
                      n.e("42451"),
                      n.e("98965"),
                      n.e("76665"),
                      n.e("35313"),
                      n.e("76273"),
                      n.e("36564"),
                      n.e("86169"),
                      n.e("34971"),
                      n.e("792"),
                      n.e("45996"),
                      n.e("92822"),
                      n.e("23427"),
                      n.e("29422"),
                      n.e("9291"),
                      n.e("38056"),
                      n.e("74610"),
                      n.e("7059"),
                      n.e("8829"),
                      n.e("42339"),
                      n.e("16054"),
                      n.e("98199"),
                      n.e("41175"),
                      n.e("39778"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, a.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, tC.L3)(e, async () => {
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
                  return (n) => (0, a.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: i,
                audio: r,
                video: s,
                stream: l,
                isCurrentUserInThisDMCall: o,
                isIncomingCall: d,
                isOngoingCall: c,
                unread: _,
                treeItemProps: E,
            } = this.props,
            { hovered: u, animating: A } = this.state,
            I = e.isMultiUserDM() && null == e.icon,
            T = () =>
                (0, a.jsx)(B.j, {
                    to: eH.BVt.CHANNEL(eH.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || u,
                    ariaLabel:
                        null != t
                            ? [
                                  ej.intl.formatToPlainString(ej.t.hKarnZ, { name: t, mentions: i }),
                                  d ? ej.intl.string(ej.t["fk1/bX"]) : c ? ej.intl.string(ej.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: I ? void 0 : this.getChannelIcon(),
                    backgroundStyle: I ? "on-hover" : "always",
                    children: I
                        ? (0, a.jsx)(tD.A, {
                              channel: e,
                              size: tO._3.SIZE_40,
                              facepileSizeOverride: tO._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ...E,
                });
        return (0, a.jsx)(tm.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, a.jsxs)(K.c, {
                children: [
                    (0, a.jsx)(W.A, { overlay: !0, hovered: !A && u, selected: !A && n, unread: !A && _ }),
                    (0, a.jsx)(tB, {
                        channel: e,
                        children: (0, a.jsx)(V.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? eo(i, void 0, !0) : null,
                            upperBadge: ed({ audio: r, video: s, screenshare: l, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, z.o6)(i) },
                            children: T(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tj = r.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, tL.Ay)(e.channel),
        r = (0, _.Vd)(n, 2),
        s = (0, u.bG)([tp.A], () => tp.A.getChannelId(), []),
        l = (0, u.bG)([b.A], () => b.A.getMode(n), [n]),
        o = (0, u.bG)([eT.A], () => eT.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, u.bG)([eF.Ay], () => eF.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, u.bG)([eS.A], () => eS.A.getChannelId(), []),
        E = (0, u.bG)([eb.Ay], () => eb.Ay.getMentionCount(n), [n]),
        A = s === n,
        { isIncomingCall: I, isOngoingCall: T } = (0, tR.A)(n),
        S = !1,
        N = !1;
    (A || d) && ((S = l === eH._Of.VOICE), (N = l === eH._Of.VIDEO));
    let f = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE);
    return (0, a.jsx)(tH, {
        ...e,
        ref: t,
        channelName: i,
        unread: E > 0,
        selected: c === n,
        badge: E,
        audio: S,
        video: N,
        stream: o,
        isCurrentUserInThisDMCall: A,
        isIncomingCall: I,
        isOngoingCall: T,
        size: f,
        treeItemProps: r,
    });
});
function tY() {
    (0, u.bG)([eh.A], () => eh.A.getPrivateChannelsVersion());
    let e = eh.A.getMutablePrivateChannels(),
        t = (0, u.yK)([tl.A], () => tl.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, u.cf)([tp.A], () => ({
            selectedVoiceGuildId: tp.A.getGuildId(),
            selectedVoiceChannelId: tp.A.getChannelId(),
        })),
        s = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, a.jsx)(tj, { channel: n }, n.id);
        }),
        l = null == n && null != i ? e[i] : null;
    return (
        null != l && s.unshift((0, a.jsx)(tj, { channel: l }, l.id)),
        (0, a.jsx)(N.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": ej.intl.string(ej.t.YUU0RF),
            gap: "xs",
            hidden: s.length < 1,
            children: (0, a.jsx)(tf.F, { component: r.Fragment, children: s }),
        })
    );
}
var tW = n(32880),
    tK = n(939249),
    t$ = n(547732);
function tZ(e) {
    let {
            children: t,
            text: n,
            disableWrapper: i = !1,
            disabled: s = !1,
            hideOnClick: o = !0,
            shouldShow: d,
            forceOpen: c,
            selected: _ = !1,
        } = e,
        E = r.useMemo(() => (null == n || s ? null : (0, a.jsx)("div", { className: t$.SH, children: n })), [n, s]),
        u = i ? t : (0, a.jsx)("div", { className: l()(t$.pm, { [t$.wH]: _ }), children: t });
    return (0, a.jsx)(eU.m, {
        __unsupportedReactNodeAsText: E,
        position: "right",
        spacing: 12,
        hideOnClick: o,
        shouldShow: d,
        forceOpen: c,
        ariaHidden: !0,
        asContainer: !i,
        children: u,
    });
}
var tq = n(530787);
let tQ = r.forwardRef(function (e, t) {
        let {
                id: n,
                onClick: i,
                onContextMenu: s,
                icon: o,
                selected: d,
                tooltip: c,
                upperBadge: E,
                lowerBadge: u,
                lowerBadgeSize: A,
                showPill: I = !0,
                className: T,
                "aria-label": h,
                children: S,
                onMouseEnter: N,
                onMouseLeave: f,
                onMouseDown: p,
            } = e,
            m = (0, _.Vd)(n),
            [O, C] = r.useState(!1),
            R = "string" == typeof c && null == h ? c : h;
        return (0, a.jsxs)(K.c, {
            children: [
                I ? (0, a.jsx)(W.A, { overlay: !0, hovered: O, selected: d }) : null,
                (0, a.jsx)(tZ, {
                    text: c,
                    selected: d,
                    children: (0, a.jsx)(V.Q, {
                        selected: !0,
                        upperBadge: E,
                        lowerBadge: u,
                        lowerBadgeSize: A,
                        children: (0, a.jsx)(tK.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                N?.(), C(!0);
                            },
                            onMouseLeave: () => {
                                f?.(), C(!1);
                            },
                            onMouseDown: p,
                            className: l()(tq.oZ, T, { [tq.wH]: d || O }),
                            onClick: i,
                            "aria-label": R,
                            "aria-selected": d,
                            onContextMenu: s,
                            focusProps: { enabled: !1 },
                            ...m,
                            children: null != o && (0, a.jsx)(o, { className: tq.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                S,
            ],
        });
    }),
    tz = "DOWNLOAD_APPS";
function tX() {
    let e = (0, S.useModalsStore)((e) => (0, S.hasModalOpenSelector)(e, tz));
    return (0, a.jsx)(tQ, {
        id: "app-download-button",
        onClick: () => {
            (0, S.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 987482));
                    return (t) => (0, a.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: tz },
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
    t4 = n(260509),
    t5 = n(284009),
    t6 = n.n(t5),
    t8 = n(295868),
    t7 = n(686956),
    t9 = n(954571),
    ne = n(787426);
function nt(e) {
    let t = r.useRef(null),
        n = e.map((e) => e[0]);
    return (
        r.useLayoutEffect(() => {
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
        t6()(t.type !== ti.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== ti.PJ.FOLDER || t.type !== ti.PJ.FOLDER) &&
                (e.type !== ti.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: a } = e;
                i && t.type !== ti.PJ.FOLDER && t9.default.track(eH.HAw.GUILD_FOLDER_CREATED),
                    t7.A.moveById(a, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function ni(e) {
    let { name: t, targetNode: n, combine: i, below: s } = e,
        l = r.useMemo(() => nn([ti.PJ.GUILD, ti.PJ.FOLDER], n, s, i), [n, s, i]),
        [{ canDrop: o, isOver: d }, c] = (0, t8.H)(l),
        _ = nt([
            [o, ne.OP],
            [d, ne.NQ],
        ]);
    return (0, a.jsx)("div", {
        ref: (e) => {
            (_.current = e), c(e);
        },
        "data-dnd-name": ej.intl.formatToPlainString(ej.t["A5aDw+"], { itemName: t }),
        className: ne.aC,
    });
}
function na(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: s, isOver: o }, d] = (0, t8.H)(() => nn([ti.PJ.GUILD], n, !0, !0));
    r.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = nt([
        [s, ne.OP],
        [o, ne.NQ],
    ]);
    return (0, a.jsx)(tZ, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, a.jsx)("div", {
            ref: (e) => {
                (c.current = e), d(e);
            },
            "data-dnd-name": ej.intl.formatToPlainString(ej.t.qiQ0QI, { itemName: t }),
            className: l()(ne.dw, {}),
        }),
    });
}
let nr = r.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: r = !1, onDragOverChanged: s } = e,
        l = !i && null == n.parentId;
    return (0, a.jsxs)("div", {
        className: ne.iE,
        "aria-hidden": !0,
        children: [
            (0, a.jsx)(ni, { name: t, targetNode: n, below: r }),
            l ? (0, a.jsx)(na, { name: t, targetNode: n, onDragOverChanged: s }) : null,
        ],
    });
});
function ns(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: r }, s] = (0, t8.H)(() => nn([ti.PJ.GUILD], n, !0, !0)),
        l = nt([[r, ne.a7]]),
        o = nt([
            [r, ne.NQ],
            [i, ne.OP],
        ]);
    return (0, a.jsx)("div", {
        ref: l,
        className: ne.Ro,
        "aria-hidden": !0,
        children: (0, a.jsx)("div", {
            className: ne.aO,
            children: (0, a.jsx)("div", {
                ref: (e) => {
                    (o.current = e), s(e);
                },
                "aria-label": `At end of ${t}`,
                className: ne.aC,
            }),
        }),
    });
}
function nl(e) {
    let { children: t } = e,
        [, n] = (0, t8.H)({ accept: [] });
    return (0, a.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var no = n(819638);
let nd = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nc(e) {
    (0, tC.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, a.jsx)(e, { ...t });
    });
}
function n_(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, u.yK)([e9.A], () => e9.A.getGuildsArray()),
        s = (0, u.bG)([eB.default], () => eB.default.getCurrentUser()),
        l = r.useMemo(() => i.some((e) => (0, t4.bM)(e, s)), [i, s]),
        o = (0, S.useModalsStore)((e) => (0, S.hasModalOpenSelector)(e, no.fc)),
        { analyticsLocations: d } = (0, D.Ay)();
    return (0, a.jsx)("div", {
        className: el.Uq,
        children: (0, a.jsxs)(t3.A, {
            tutorialId: l ? "create-more-servers" : "create-first-server",
            inlineSpecs: nd,
            position: "right",
            disabled: t,
            children: [
                (0, a.jsx)(tQ, {
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
                                  analyticsLocations: d,
                              })
                            : t0.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: nc,
                    tooltip: ej.intl.string(ej.t.l5WIbf),
                    icon: tJ.U,
                }),
                null != n &&
                    (0, a.jsx)(nr, { name: ej.intl.string(ej.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var nE = n(486020),
    nu = n(962795);
function nA(e) {
    let [t, i] = r.useState(!1),
        s = (0, _.Vd)(`guild-${e.id}`);
    return (0, a.jsx)(K.c, {
        children: (0, a.jsx)(tZ, {
            text: e.name,
            children: (0, a.jsx)(V.Q, {
                className: nu.o,
                selected: t,
                lowerBadge: (0, a.jsx)(z.fk, { icon: (0, X.k)(es.A), disableColor: !0, className: nu._ }),
                children: (0, a.jsx)(B.j, {
                    name: e.name,
                    onMouseEnter: () => {
                        i(!0);
                    },
                    onMouseLeave: () => {
                        i(!1);
                    },
                    onClick: () => {
                        (0, S.openModalLazy)(async () => {
                            let { default: t } = await n.e("42945").then(n.bind(n, 537560));
                            return (n) => (0, a.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? nE.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...s,
                }),
            }),
        }),
    });
}
var nI = n(696292),
    nT = n(836480),
    nh = n(533129),
    nS = n(726845),
    nN = n(837057),
    nf = n(310419),
    np = n(488995),
    nm = n(324580),
    nO = n(654487);
let nC = r.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: s, className: l } = e,
        o = r.useCallback(() => {
            (0, nh.WL)({ source: np.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== s ? np.GlobalDiscoveryTab.QUESTS : nS.A.getField("selectedTab");
            switch (e) {
                case np.GlobalDiscoveryTab.QUESTS:
                    return (0, nN.transitionToGlobalDiscovery)({
                        tab: np.GlobalDiscoveryTab.QUESTS,
                        location: nO.rE.DISCOVERY_COMPASS,
                        questContent: nI.u.DISCOVERY_COMPASS,
                        questId: s,
                    });
                case np.GlobalDiscoveryTab.SERVERS:
                    return (0, nN.transitionToGlobalDiscovery)({
                        tab: np.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nm.J8.GUILDS_BAR,
                    });
                case np.GlobalDiscoveryTab.APPS:
                    return (0, nN.transitionToGlobalDiscovery)({
                        tab: np.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nf.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, nN.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [s]);
    return (0, a.jsx)(tQ, {
        id: "guild-discover-button",
        ref: t,
        className: l,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: ej.intl.string(ej.t["4nEZLk"]),
        icon: nT.Q,
    });
});
var nR = n(506774),
    ng = n(509963),
    nL = n(111159),
    nD = n(793943),
    nb = n(927578),
    nM = n(350972),
    nP = n(677056),
    nU = n(526162),
    nv = n(635917);
function ny() {
    let [e, t] = (0, u.yK)([eB.default, nU.A], () => [
            nU.A.getCurrentDesktopIcon(),
            nb.Ay.isPremium(eB.default.getCurrentUser()),
        ]),
        n = (0, nD.fy)().activePanel === nD.HP.APP_ICON,
        i = (0, nv.gG)(e),
        r = i.id !== nM.LW.DEFAULT && (t || n),
        s = (0, a.jsx)(nL.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && r ? (0, a.jsx)(nP.A, { id: i.id, size: nv.N8.SIZE_48 }) : s;
}
var nG = n(531260),
    nw = n(411976),
    nx = n(912309),
    nV = n(400492),
    nB = n(354670),
    nF = n(619921),
    nk = n(340829),
    nH = n(966846),
    nj = n(674378),
    nY = n(394953),
    nW = n(235079),
    nK = n(30186);
let n$ = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nZ(e) {
    let { selected: t, user: n, badge: i, link: s, showProgressBadge: l } = e,
        [o, d] = r.useState(!1),
        [c, E] = r.useState(!1),
        [u, A] = r.useState(null),
        [I, T] = r.useState(0),
        h = (0, _.Vd)("home"),
        S = (0, nD.fy)().activePanel === nD.HP.APP_ICON,
        N = () => {
            A(null), T(0), clearTimeout(u);
        };
    if (null == n) return null;
    let f = ej.intl.string(ej.t.YUU0RF);
    c && (f = nR.w.get(eH.wqg) ? ej.intl.string(ej.t["nkq1l+"]) : ej.intl.string(ej.t.Be8Q5E));
    let p = null;
    !t && l && (p = (0, a.jsx)(ng.A, { className: nK.Cp, determineOwnVisibility: !1 }));
    let m = t || o || S,
        O = (0, a.jsx)(V.Q, {
            selected: !0,
            lowerBadge: i > 0 ? eo(i) : null,
            upperBadge: p,
            lowerBadgeSize: { width: (0, z.o6)(i) },
            children: (0, a.jsx)(B.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != u && clearTimeout(u), A(setTimeout(N, 500)), T(I + 1), 15 === I)) {
                        N();
                        let e = !nR.w.get(eH.wqg);
                        nR.w.set(eH.wqg, e),
                            e && nR.w.set(nW.L, !0),
                            e ? (0, nV.Ak)("discodo") : (0, nV.Ak)("user_leave"),
                            E(!0),
                            setTimeout(() => {
                                E(!1);
                            }, 1e3);
                    }
                },
                selected: m,
                ariaLabel: ej.intl.string(ej.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...h,
                to: {
                    pathname: s,
                    state: {
                        analyticsSource: {
                            page: eH.liQ.GUILD_CHANNEL,
                            section: eH.JJy.NAVIGATION,
                            object: eH.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, a.jsx)(ny, {}),
            }),
        });
    return (0, a.jsx)("div", {
        className: nK.Uq,
        children: (0, a.jsx)(t3.A, {
            inlineSpecs: n$,
            tutorialId: "friends-list",
            position: "right",
            children: (0, a.jsxs)(K.c, {
                children: [
                    (0, a.jsx)(W.A, { overlay: !0, selected: t, hovered: o }),
                    (0, a.jsx)(tZ, { hideOnClick: !0, text: f, selected: t, children: O }),
                ],
            }),
        }),
    });
}
function nq() {
    let e = (function () {
            let e = (0, eA.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eH.BVt.GUILD_DISCOVERY) || t.startsWith(eH.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eH.BVt.GUILD_MEMBER_VERIFICATION("")),
                a = (0, nY.lI)();
            return null == e && !(n || i || a);
        })(),
        t = (0, u.bG)([nH.A, nk.A], () => {
            let e = (0, ng.v)(nH.A.activeItems, nk.A),
                { total: t, progress: n } = nj.zY(e),
                i = nj.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nx.kX)(),
        i = Object.keys(ez.TP),
        r = (0, nG.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: l } = (0, u.cf)([nB.A], () => ({
            unviewedTrialCount: nB.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nB.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = r.fractionalState === ez.xc.NONE ? s + l : 0,
        d = (0, u.bG)([eB.default], () => eB.default.getCurrentUser()),
        _ = (0, nw.W)(),
        E = n + o + _,
        A = E === o && o > 0 && n + _ === 0,
        I = nF.A.getHomeLink();
    return (
        A && (I = eH.BVt.APPLICATION_STORE),
        (0, a.jsx)(nZ, {
            selected: e,
            user: d,
            selectedChannelId: eS.A.getChannelId(eH.ME),
            badge: E,
            link: I,
            showProgressBadge: t,
        })
    );
}
var nQ = n(473201);
function nz(e) {
    let { fullWidth: t } = e;
    return (0, a.jsx)(K.c, { children: (0, a.jsx)("div", { className: l()(nQ.t, { [nQ.I]: t }) }) });
}
var nX = n(349288),
    nJ = n(695366),
    n0 = n(919638),
    n1 = n(818348),
    n2 = n(585212);
function n3() {
    let e = (0, u.bG)([n0.A, e9.A], () => n0.A.unavailableGuilds.filter((e) => null == e9.A.getGuild(e)).length),
        t = (0, _.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, a.jsx)(K.c, {
              children: (0, a.jsx)(tZ, {
                  text: ej.intl.format(ej.t["TnH05/"], { count: e }),
                  children: (0, a.jsx)(nX.Anchor, {
                      href: n1.qF.STATUS,
                      target: "_blank",
                      className: n2.h,
                      "aria-label": ej.intl.formatToPlainString(ej.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, a.jsx)(nJ.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var n4 = n(312742),
    n5 = n(317097),
    n6 = n(319060),
    n8 = n(866323),
    n7 = n(817281),
    n9 = n(534409),
    ie = n(240248),
    it = n(678708),
    ii = n(187322),
    ia = n(140735),
    ir = n(548118),
    is = n(273923);
function il(e) {
    let { guildId: t, animate: n } = e,
        i = (0, u.bG)([e9.A], () => e9.A.getGuild(t), [t]),
        r = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, a.jsx)("div", { className: l()(is.VL, is.zU), children: (0, a.jsx)(nJ.E, { color: "currentColor" }) })
        : (0, a.jsx)(ir.Ay, {
              guild: i,
              animate: n,
              size: ir.Ay.Sizes.MINI,
              iconSize: r,
              lossless: !0,
              className: is.VL,
              tabIndex: -1,
          });
}
function io(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: r } = t,
        s = n && i,
        o = (0, a.jsx)("div", {
            className: is.hJ,
            children: (0, a.jsx)("div", {
                className: is.Eh,
                children: (0, a.jsx)(it.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, a.jsx)("div", {
            className: is.qJ,
            children: (0, a.jsx)("div", {
                className: is.jg,
                children: r.slice(0, 4).map((e) => (0, a.jsx)(il, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, a.jsxs)("div", {
        "aria-hidden": !0,
        className: l()({ [is.NG]: s, [is.yd]: !s }),
        children: [!s && o, d],
    });
}
function id(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: i,
            mediaState: s,
            mentionCount: l = 0,
            isMentionLowImportance: o,
            tooltipName: d,
            folderGroupId: c,
            folderButtonContent: _,
            onClick: E,
            onContextMenu: u,
            onHoverChange: A,
            onKeyDown: I,
            treeItemProps: { onFocus: T, ...S },
            "aria-setsize": N,
            "aria-posinset": f,
        } = e,
        [p, m] = r.useState(!1),
        O = r.useCallback(() => {
            i || m(!0), A?.(!0);
        }, [i, A]),
        C = r.useCallback(() => {
            i || m(!1), A?.(!1);
        }, [i, A]),
        R = n || null == s ? null : ed(s),
        g =
            !n && l > 0
                ? eo(l, o ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css)
                : null;
    return (0, a.jsx)(ii.vN, {
        children: (0, a.jsxs)(tK.D, {
            className: is.H3,
            onClick: E,
            onContextMenu: u,
            onMouseEnter: O,
            onMouseLeave: C,
            onKeyDown: I,
            onFocus: T,
            focusProps: { enabled: !1 },
            ...S,
            role: "treeitem",
            "aria-setsize": N,
            "aria-posinset": f,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, a.jsx)(ia.A, {
                    children: ej.intl.formatToPlainString(ej.t["90/DwM"], { folderName: d, mentions: l }),
                }),
                (0, a.jsx)(V.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: R,
                    lowerBadge: g,
                    lowerBadgeSize: { width: (0, z.o6)(l) },
                    children: (0, a.jsx)("div", {
                        className: is.vA,
                        children:
                            null != _
                                ? (0, a.jsx)("div", { className: is.hJ, children: _ })
                                : (0, a.jsx)(io, { folderNode: t, hovered: p, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var ic = n(573435),
    i_ = n(643918);
function iE(e) {
    let { className: t, isFolder: n } = e,
        i = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE);
    return (0, a.jsx)(ic.Ay, {
        mask: ic.Ay.Masks.SQUIRCLE,
        className: l()(t, i_.OL, { [i_.lQ]: n }),
        width: i,
        height: i,
        children: (0, a.jsx)("div", { className: i_.ZU }),
    });
}
var iu = n(114329),
    iA = n(620370);
let iI = (0, ie.xI)(n6.A.FOLDER_ITEM_ANIMATION_DURATION),
    iT = (0, tm.animated)(N.B),
    ih = r.memo(function (e) {
        var t;
        let n,
            i,
            s,
            {
                folderNode: o,
                setNodeRef: d,
                selected: c,
                expanded: E,
                mediaState: u,
                mentionCount: A = 0,
                isMentionLowImportance: I,
                unread: T = !1,
                defaultFolderName: S,
                draggable: N = !1,
                sorting: f = !1,
                onDragStart: m,
                onDragEnd: O,
                onExpandCollapse: C,
                onContextMenu: R,
                renderChildNode: g,
                folderButtonSize: L,
                folderButtonContent: D,
                "aria-setsize": b,
                "aria-posinset": M,
            } = e,
            { id: P, name: U, children: v } = o,
            [y, G] = r.useState(!1),
            [w, x] = r.useState(!1),
            V = y || w,
            B = (0, n9.qK)("FolderItem");
        r.useEffect(() => {
            f && G(!1);
        }, [f]);
        let [{ dragging: F }, k] = (0, n4.i)({
                type: ti.PJ.FOLDER,
                item: () => (m?.(), { type: ti.PJ.FOLDER, nodeId: o.id }),
                end() {
                    O?.(), (0, n7.um)(te.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            H = r.useCallback((e) => {
                x(e);
            }, []),
            j = r.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !E) || ("ArrowLeft" === e.key && E)) && C();
                },
                [C, E],
            ),
            Y = null != U && "" !== U ? U : null != S && "" !== S ? S : ej.intl.string(ej.t.xV9hVh),
            $ = (0, _.Vd)(`${P}`),
            Z = `folder-items-${P}`,
            q =
                ((t = v.length),
                (n = (0, p.r)(h.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (s = (0, p.r)(h.A.space.SPACE_XS))) - s + (s - (n - i) / 2) + (0, p.r)(h.A.space.SPACE_4)),
            Q = (0, n8.p)(!F && E, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: iI },
            }),
            z = r.useCallback((e) => d?.(P, e), [d, P]),
            X = (0, a.jsxs)(K.c, {
                children: [
                    (0, a.jsx)(W.A, { overlay: !0, disabled: F || E, hovered: y, selected: c, unread: T }),
                    (0, a.jsx)(tZ, {
                        text: Y,
                        disabled: f,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, a.jsx)("div", {
                            ref: N
                                ? (e) => {
                                      k(e);
                                  }
                                : void 0,
                            className: l()(is.MJ, { [is.L0]: "icon" === L || B, [iA.oR]: !F && w && !E }),
                            "data-dnd-name": Y,
                            children: F
                                ? (0, a.jsx)(iE, { isFolder: !0 })
                                : (0, a.jsx)(id, {
                                      folderNode: o,
                                      expanded: E,
                                      sorting: f,
                                      mediaState: u,
                                      mentionCount: A,
                                      isMentionLowImportance: I,
                                      tooltipName: Y,
                                      folderGroupId: Z,
                                      onClick: C,
                                      onContextMenu: R,
                                      onHoverChange: G,
                                      onKeyDown: j,
                                      treeItemProps: $,
                                      folderButtonContent: D,
                                      "aria-setsize": b,
                                      "aria-posinset": M,
                                  }),
                        }),
                    }),
                    N ? (0, a.jsx)(nr, { name: Y, targetNode: o, onDragOverChanged: H }) : null,
                ],
            }),
            J = null != o.color ? o.color : iu.DO,
            ee = J === iu.DO ? void 0 : (0, n5.Hl)(J);
        return (0, a.jsxs)("div", {
            ref: z,
            className: l()(is.qc, { [is.Av]: E, [is.Lg]: V }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": w,
            children: [
                !F && E && (0, a.jsx)("span", { className: is.GO }),
                X,
                Q((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, a.jsx)(
                            iT,
                            {
                                id: Z,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: is.TN,
                                style: { height: e.height.to((e) => e * q) },
                                "aria-label": o.name,
                                children: v.map((t, n) => g(t, n, v.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                N && E ? (0, a.jsx)(ns, { name: Y, targetNode: o }) : null,
            ],
        });
    });
var iS = n(354583);
let iN = r.memo(function (e) {
    let t,
        i,
        s,
        l,
        o,
        d,
        c,
        _,
        E,
        A,
        I,
        { folderNode: T, ...h } = e,
        { id: S, name: N, color: f, children: p } = T,
        m = p.map((e) => e.id),
        O = (0, eA.A)((e) => e.guildId),
        C = (0, u.bG)([ts.A], () => ts.A.isFolderExpanded(S)),
        R = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = e9.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(ek.Vq),
                n = 2 * eH.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(T),
        g =
            ((t = (0, u.bG)([tp.A], () => tp.A.getGuildId())),
            (i = T.children.map((e) => e.id)),
            (s = null != t && i.includes(t)),
            (l = !1),
            (o = !1),
            (d = !1),
            (c = (0, u.bG)([tp.A], () => tp.A.getChannelId())),
            (E = null != (_ = (0, iS.A)()?.guild_id) && i.includes(_)),
            (A = (0, u.bG)([eN.A], () => null != c && eN.A.hasVideo(c), [c])),
            (I = (0, u.bG)([eT.A], () => eT.A.getCurrentUserActiveStream())),
            s && ((l = !A), (o = A), (d = null != I && null != I.guildId && i.includes(I.guildId))),
            r.useMemo(
                () => ({ audio: l, video: o, screenshare: d, liveStage: E, isCurrentUserConnected: s }),
                [l, o, d, E, s],
            )),
        {
            mentionCount: L,
            isMentionLowImportance: D,
            unread: b,
        } = (0, u.cf)([eL.default], () => ({
            mentionCount: m.map((e) => eL.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: m.every((e) => eL.default.getIsMentionLowImportance(e)),
            unread: m.some((e) => eL.default.hasUnread(e)),
        })),
        M = r.useCallback(() => {
            t7.A.toggleGuildFolderExpand(S);
        }, [S]),
        P = r.useCallback(
            (e) => {
                (0, tC.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, a.jsx)(e, { ...t, folderId: S, folderName: N, folderColor: f, unread: b || L > 0 });
                });
            },
            [S, N, f, b, L],
        );
    return (0, a.jsx)(ih, {
        ...h,
        folderNode: T,
        expanded: C,
        selected: null != O && m.includes(O),
        mentionCount: L,
        isMentionLowImportance: D,
        unread: b,
        mediaState: g,
        defaultFolderName: R,
        onExpandCollapse: M,
        onContextMenu: P,
    });
});
var ip = n(113494),
    im = n(821124),
    iO = n(212455);
function iC(e) {
    let t = e?.features.has(eH.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, u.bG)([iO.A, eB.default, e7.Ay], () => {
            if (null == e) return;
            let t = iO.A.getRequest(e.id),
                n = eB.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = e7.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, im.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var iR = n(347951),
    ig = n(478437),
    iL = n(811024),
    iD = n(508654),
    ib = n(233993),
    iM = n(446600),
    iP = n(95701),
    iU = n(495544);
function iv(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eD.A;
    return null != e && e.type !== ig.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eH.hVb.VIEW_CHANNEL, e);
}
function iy(e) {
    let t = (0, u.bG)([eM.Ay], () => eM.Ay.isMuted(e)),
        n = (0, iD.BP)(e),
        i = (0, u.yK)([j.Ay, tb.A], () =>
            j.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tb.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tb.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        a = (0, Y.H)(i[0]?.location),
        r = (0, iL.Gp)(a),
        {
            guildHasVoice: s,
            guildHasVideo: l,
            selectedVoiceChannelHasVideo: o,
        } = (0, u.cf)([eS.A, eN.A, e9.A, eD.A, eh.A], () => {
            var n;
            let i = eS.A.getVoiceChannelId(),
                a = e9.A.getGuild(e)?.afkChannelId,
                r = eN.A.getUsersWithVideo(e),
                s =
                    ((n = eN.A.getVoiceStates(e)),
                    d()(n)
                        .filter((e) => !tb.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in s) if (iv(eh.A.getBasicChannel(s[e].channelId), a ?? void 0, eD.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of r) if (iv(eh.A.getBasicChannel(s[e]?.channelId), a ?? void 0, eD.A)) return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && eN.A.hasVideo(i),
            };
        }, [e, t]),
        c = iU.default.getId();
    return (0, u.cf)([eS.A, eh.A, j.Ay, iM.A, eT.A, eD.A], () => {
        let a = eS.A.getVoiceChannelId(),
            d = eh.A.getChannel(a)?.guild_id === e,
            _ = !1,
            E = !1,
            u = !1,
            A = !1,
            I = !1,
            T = !1;
        if (!d && t)
            return {
                audio: _,
                video: A,
                screenshare: I,
                liveStage: u,
                activeEvent: E,
                activity: T,
                isCurrentUserConnected: !1,
            };
        let h = ef.default.keys(iM.A.getStageInstancesByGuild(e)).some((e) => {
                let t = eh.A.getChannel(e);
                return null != t && eD.A.can(ib.Gk, t);
            }),
            S = d && (eh.A.getChannel(a)?.isGuildStageVoice() ?? !1),
            N = !!d && null != eT.A.getActiveStreamForUser(c, e),
            f = eT.A.getAllApplicationStreams()
                .filter((e) => !tb.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e),
            p = d && o,
            m = (() => {
                if (r) return i.length > 0;
                for (let e of i) {
                    let t = eh.A.getChannel((0, Y.H)(e.location));
                    if (null != t && (0, iP.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            O = j.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            d
                ? ((_ = !0), (E = n?.channel_id === a), (u = S), (A = p), (I = N), (T = O))
                : ((_ = s), (E = null != n), (u = h), (A = l), (I = f), (T = m)),
            {
                audio: _,
                video: A,
                screenshare: I,
                liveStage: u,
                activeEvent: E,
                activity: T,
                isCurrentUserConnected: d || S,
            }
        );
    }, [e, t, o, c, r, i, n, s, l]);
}
var iG = n(607399),
    iw = n(702841),
    ix = n(658128),
    iV = n(976860),
    iB = n(676279);
function iF(e) {
    let { guild: t, show: n, active: i, onAnimationStart: r, onAnimationRest: s } = e,
        o = {},
        d = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, p.r)(h.A.unsafe_rawColors.BRAND_500).hex(),
        _ = (0, p.r)(h.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = _));
    let E = (0, n8.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: r, onRest: s });
    return (0, a.jsx)(a.Fragment, {
        children: E(
            (e, n, i) =>
                n &&
                (0, a.jsx)(
                    "div",
                    {
                        className: is.qc,
                        children: (0, a.jsx)("div", {
                            className: l()(is.MJ, is.L0),
                            style: { margin: 0 },
                            children: (0, a.jsx)(tm.animated.div, {
                                className: is.NG,
                                style: e,
                                children: (0, a.jsx)("div", {
                                    className: is.qJ,
                                    children: (0, a.jsx)("div", {
                                        className: is.jg,
                                        children: (0, a.jsx)(ir.Ay, {
                                            guild: t,
                                            size: ir.Ay.Sizes.SMOL,
                                            className: is.VL,
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
var ik = n(454938),
    iH = n(714991),
    ij = n(57991),
    iY = n(164956),
    iW = n(624265),
    iK = n(970278),
    i$ = n(808728);
function iZ(e, t, n) {
    return 0 === t.length
        ? null
        : (0, a.jsxs)("div", {
              className: eY.nM,
              children: [
                  (0, a.jsx)(e, { className: eY.RI, color: "currentColor" }),
                  (0, a.jsx)(ew.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function iq(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, a.jsx)(ey.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: ej.intl.string(ej.t.fpKdS1),
          })
        : (0, a.jsx)(ty.A, { muteConfig: t, className: n });
}
function iQ(e) {
    let t,
        n,
        i,
        s,
        o,
        c,
        _,
        E,
        A,
        I,
        T,
        h,
        S,
        N,
        f,
        p,
        m,
        O,
        C,
        R,
        { guild: g } = e,
        L = g.id,
        {
            voiceUsersToShow: D,
            stageSpeakers: b,
            numStageListeners: M,
            streamUsersToShow: P,
            embeddedActivitiesUsers: U,
        } = ((t = g.id),
        (n = (0, u.yK)(
            [i$.Ay, iK.A],
            () => [
                ...i$.Ay.getChannels(t)
                    [i$.vM].filter((e) => {
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
        (s = r.useMemo(() => i.map((e) => e.id), [i])),
        (o = (0, u.bG)([eF.Ay], () => eF.Ay.getVoiceStates(t), [t])),
        (c = (0, u.yK)([tb.A], () => tb.A.getBlockedOrIgnoredIDs())),
        (_ = d().flatMap(n, (e) =>
            e === g.afkChannelId
                ? []
                : tM(
                      (o[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      c,
                  ),
        )),
        (E = (0, u.yK)([ex.A], () =>
            d().flatMap(s, (e) =>
                e === g.afkChannelId
                    ? []
                    : tM(
                          ex.A.getMutableParticipants(e, eV.ip.SPEAKER)
                              .filter((e) => e.type === eV.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          c,
                      ),
            ),
        )),
        (A = (0, u.bG)([ex.A], () => {
            let e = 0;
            for (let t of s) e += ex.A.getParticipantCount(t, eV.ip.AUDIENCE);
            return e;
        })),
        (I = (0, u.yK)(
            [eT.A],
            () =>
                tP(
                    eT.A.getAllApplicationStreams()
                        .filter((e) => e.guildId === t)
                        .map((e) => e.ownerId),
                    c,
                ),
            [c, t],
        )),
        (T = (0, u.yK)(
            [j.Ay],
            () =>
                tP(
                    j.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    c,
                ),
            [t, c],
        )),
        (h = (0, u.yK)([eB.default], () => tM(T.map((e) => eB.default.getUser(e))), [T])),
        (S = (0, u.yK)([eB.default], () => I.map((e) => eB.default.getUser(e)), [I])),
        (f = tM((N = _.filter((e) => !I.includes(e.id) && !T.includes(e.id))))),
        (p = S.filter((e) => null != e && !T.includes(e.id))),
        (m = (0, u.bG)([tU.A], () => tU.A.getUserAffinitiesMap(), [])),
        (O = r.useMemo(() => (0, tv.L)(f, m, "GuildTooltip - nonBlockedUsers"), [f, m])),
        (C = r.useMemo(() => (0, tv.L)(E, m, "GuildTooltip - stageSpeakers"), [E, m])),
        (R = r.useMemo(() => (0, tv.L)(p, m, "GuildTooltip - streamUsers"), [p, m])),
        {
            voiceUsersToShow: O,
            stageSpeakers: C,
            numStageListeners: A,
            streamUsersToShow: R,
            embeddedActivitiesUsers: r.useMemo(() => (0, tv.L)(h, m, "GuildTooltip - embeddedActivitiesUsers"), [h, m]),
            hasActivity: E.length > 0 || N.length > 0 || p.length > 0 || h.length > 0,
        }),
        v = iZ(ei.H, D, L),
        y =
            0 === b.length
                ? null
                : (0, a.jsxs)("div", {
                      className: eY.nM,
                      children: [
                          (0, a.jsx)(ee.q, { size: "lg", color: "currentColor", className: eY.RI }),
                          (0, a.jsx)(ew.Ay, { guildId: L, users: b, max: 3 }),
                          (0, a.jsxs)("div", {
                              className: eY.GZ,
                              children: [
                                  (0, a.jsx)(ev.L, { size: "xs", color: "currentColor" }),
                                  (0, a.jsx)(ey.E, {
                                      className: eY._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: M,
                                  }),
                              ],
                          }),
                      ],
                  }),
        G = iZ(eG.F, P, L),
        w = iZ(ea.k, U, L),
        { isMuted: x, muteConfig: V } = (0, u.cf)(
            [eM.Ay],
            () => ({ isMuted: eM.Ay.isMuted(L), muteConfig: eM.Ay.getMuteConfig(L) }),
            [L],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            y,
            v,
            G,
            w,
            x ? (0, a.jsx)(iq, { muteConfig: V, className: l()(eY.LM, { [eY.Sx]: null != v || null != G }) }) : null,
        ],
    });
}
function iz(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, a.jsx)(ey.E, {
        className: eY.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case er.B5.SUBMITTED:
                    return ej.intl.string(ej.t["9KFC98"]);
                case er.B5.REJECTED:
                    return ej.intl.string(ej.t["TQY/Rd"]);
                case er.B5.APPROVED:
                    return ej.intl.string(ej.t.WXHcq5);
                default:
                    return ej.intl.string(ej.t.fjHFC8);
            }
        })(t),
    });
}
function iX(e) {
    let { guild: t } = e,
        n = (0, ik.A)(t),
        i = iC(t),
        r = null != i ? (0, a.jsx)(iz, { guildJoinRequestStatus: i }) : null,
        s = (0, a.jsx)(iQ, { guild: t }),
        o = (0, u.bG)([iY.A], () => iY.A.isViewingRoles(t.id)),
        d = (0, iR.Ig)(t);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: l()(eY.nM, eY.Dl),
                children: [
                    n
                        ? (0, a.jsx)(ij.A, { guild: t, className: eY.WX })
                        : (0, a.jsx)(iH.A, { guild: t, size: 20, className: eY.aL }),
                    (0, a.jsx)("span", { className: l()(eY.cN, eY.NT), children: t.name }),
                ],
            }),
            d
                ? (0, a.jsx)(ey.E, {
                      className: eY.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: ej.intl.string(ej.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, a.jsx)(ey.E, {
                      className: eY.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: ej.intl.string(ej.t["5LwN89"]),
                  })
                : (r ?? s),
        ],
    });
}
function iJ(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: s } = e,
        l = r.useMemo(
            () => (n ? null : (0, a.jsx)("div", { className: eY.A_, children: (0, a.jsx)(iX, { guild: t }) })),
            [n, t],
        );
    return (0, a.jsx)(eU.m, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: s,
    });
}
let i0 = { analyticsSource: { page: eH.liQ.GUILD_CHANNEL, section: eH.JJy.CHANNEL_LIST, object: eH.ZSU.CHANNEL } };
function i1(e, t) {
    (0, tC.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("50992"),
            n.e("48071"),
            n.e("28149"),
            n.e("90261"),
            n.e("80848"),
            n.e("75527"),
            n.e("44398"),
            n.e("98944"),
            n.e("42105"),
            n.e("89603"),
            n.e("78220"),
            n.e("40841"),
            n.e("13520"),
            n.e("99961"),
            n.e("76831"),
            n.e("69273"),
            n.e("77083"),
            n.e("63009"),
            n.e("16933"),
            n.e("45650"),
            n.e("97189"),
            n.e("62296"),
            n.e("17546"),
            n.e("333"),
            n.e("68432"),
            n.e("79705"),
            n.e("55658"),
            n.e("76032"),
            n.e("48006"),
            n.e("87080"),
            n.e("48751"),
            n.e("73607"),
            n.e("63635"),
            n.e("12721"),
            n.e("54068"),
            n.e("32480"),
            n.e("21341"),
            n.e("41884"),
            n.e("93329"),
            n.e("87845"),
            n.e("45317"),
            n.e("98042"),
            n.e("73099"),
            n.e("49089"),
            n.e("61175"),
            n.e("45229"),
            n.e("56574"),
            n.e("89694"),
            n.e("80186"),
            n.e("23924"),
            n.e("15510"),
            n.e("25845"),
            n.e("19402"),
            n.e("49681"),
            n.e("96382"),
            n.e("22687"),
            n.e("62052"),
            n.e("63202"),
            n.e("82596"),
            n.e("20287"),
            n.e("28367"),
            n.e("63232"),
            n.e("35429"),
            n.e("10471"),
            n.e("64827"),
            n.e("23808"),
            n.e("11301"),
            n.e("60235"),
            n.e("61737"),
            n.e("79428"),
            n.e("29963"),
            n.e("47834"),
            n.e("30938"),
            n.e("20317"),
            n.e("84569"),
            n.e("2368"),
            n.e("24313"),
            n.e("74016"),
            n.e("48405"),
            n.e("63185"),
            n.e("19551"),
            n.e("7743"),
            n.e("45959"),
            n.e("18573"),
            n.e("55936"),
            n.e("31988"),
            n.e("39667"),
            n.e("37794"),
            n.e("26073"),
            n.e("34303"),
            n.e("48172"),
            n.e("28866"),
            n.e("8304"),
            n.e("58038"),
            n.e("93159"),
            n.e("11566"),
            n.e("21106"),
            n.e("94723"),
            n.e("62931"),
            n.e("81987"),
            n.e("53092"),
            n.e("58007"),
            n.e("5812"),
            n.e("17363"),
            n.e("55411"),
            n.e("93103"),
            n.e("76602"),
            n.e("91763"),
            n.e("28229"),
            n.e("76418"),
            n.e("21921"),
            n.e("91007"),
            n.e("9233"),
            n.e("69747"),
            n.e("40258"),
            n.e("66495"),
            n.e("91146"),
            n.e("88342"),
            n.e("42724"),
            n.e("43437"),
            n.e("39970"),
            n.e("82263"),
            n.e("8555"),
            n.e("86127"),
            n.e("6174"),
            n.e("39851"),
            n.e("42451"),
            n.e("72789"),
            n.e("6949"),
            n.e("29871"),
            n.e("17249"),
            n.e("35027"),
            n.e("53917"),
            n.e("9640"),
            n.e("62422"),
            n.e("15423"),
            n.e("26295"),
            n.e("88599"),
            n.e("36863"),
            n.e("67861"),
            n.e("1518"),
            n.e("15186"),
            n.e("98765"),
            n.e("23354"),
            n.e("89088"),
            n.e("82644"),
            n.e("37187"),
            n.e("3589"),
            n.e("71273"),
            n.e("10957"),
            n.e("55973"),
            n.e("20590"),
            n.e("45172"),
            n.e("65437"),
            n.e("34983"),
            n.e("63235"),
            n.e("74810"),
            n.e("28083"),
            n.e("80830"),
            n.e("86814"),
            n.e("52548"),
            n.e("75842"),
            n.e("53984"),
            n.e("80854"),
            n.e("79780"),
            n.e("35395"),
            n.e("43780"),
            n.e("14041"),
            n.e("46844"),
            n.e("45413"),
            n.e("22822"),
            n.e("86672"),
            n.e("90664"),
            n.e("79745"),
            n.e("64850"),
            n.e("72401"),
            n.e("22855"),
            n.e("70104"),
            n.e("52617"),
            n.e("2564"),
            n.e("47417"),
            n.e("19558"),
            n.e("58946"),
            n.e("14285"),
            n.e("95752"),
            n.e("78100"),
            n.e("78453"),
            n.e("8362"),
            n.e("2698"),
            n.e("62875"),
            n.e("4744"),
            n.e("34654"),
            n.e("12542"),
            n.e("501"),
            n.e("46769"),
            n.e("33297"),
            n.e("73384"),
            n.e("82783"),
            n.e("86243"),
            n.e("32209"),
            n.e("30788"),
            n.e("4193"),
            n.e("39171"),
            n.e("25246"),
            n.e("37021"),
            n.e("21049"),
            n.e("8377"),
            n.e("28610"),
            n.e("44571"),
            n.e("44795"),
            n.e("71268"),
            n.e("95370"),
            n.e("97784"),
            n.e("44928"),
            n.e("3217"),
            n.e("5557"),
            n.e("44780"),
            n.e("83952"),
            n.e("95340"),
            n.e("62718"),
            n.e("89916"),
            n.e("59957"),
            n.e("90301"),
            n.e("49145"),
            n.e("60773"),
            n.e("68763"),
            n.e("15188"),
            n.e("9004"),
            n.e("15109"),
            n.e("29666"),
            n.e("58273"),
            n.e("8018"),
            n.e("92295"),
            n.e("19454"),
            n.e("20930"),
            n.e("26001"),
            n.e("99549"),
            n.e("14591"),
            n.e("52111"),
            n.e("74610"),
            n.e("16988"),
            n.e("30997"),
            n.e("28136"),
            n.e("57458"),
            n.e("59797"),
            n.e("69765"),
            n.e("1243"),
            n.e("62304"),
            n.e("16084"),
            n.e("75859"),
            n.e("44057"),
            n.e("87317"),
            n.e("43116"),
            n.e("27659"),
            n.e("10943"),
            n.e("15920"),
            n.e("68530"),
            n.e("3930"),
            n.e("78046"),
            n.e("3663"),
            n.e("66580"),
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
            n.e("5896"),
            n.e("77602"),
            n.e("10262"),
            n.e("95602"),
            n.e("46313"),
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
            n.e("19690"),
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
            n.e("93767"),
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
            n.e("98371"),
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
        return (n) => (0, a.jsx)(e, { ...n, guild: t });
    });
}
let i2 = r.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: i,
            onDragEnd: s,
            route: o,
            guild: d,
            animatable: c,
            selected: E = !1,
            unread: u = !1,
            mediaState: A,
            unavailable: I = !1,
            badge: S = 0,
            isMentionLowImportance: N,
            contextMenu: f = i1,
            draggable: m = !1,
            sorting: O = !1,
            preloadOnClick: C = !0,
            guildJoinRequestStatus: R,
            height: g,
            "aria-setsize": L,
            "aria-posinset": D,
        } = e,
        { id: b, parentId: M } = t,
        P =
            e.upperBadge ??
            (I
                ? (0, a.jsx)(z.fk, { icon: (0, X.k)(es.A), disableColor: !0, className: el.yk })
                : null != A
                  ? ed(A)
                  : void 0),
        U = e.lowerBadge ?? void 0;
    null == U && S > 0
        ? (U =
              eo(S, N ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css) ??
              void 0)
        : null == U && null != R && (U = ec({ guildJoinRequestStatus: R }) ?? void 0);
    let v = e.lowerBadgeSize ?? { width: (0, z.o6)(S) },
        [{ dragging: y }, G] = (0, n4.i)({
            type: ti.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                s?.(), (0, n7.um)(te.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        w = (0, _.Vd)(b ?? eH.dJq, null != M ? 2 : 1),
        [x, F] = r.useState(!1),
        k = !O && x,
        [j, Y] = r.useState(!1),
        [$, Z] = r.useState(!1),
        [q] = r.useState(() => new T.J_(70, () => Z(!0))),
        Q = (0, iB.nr)() && !iG.Fr;
    r.useEffect(() => () => q.cancel(), [q]);
    let J = r.useCallback(() => {
            null != o ? (0, iV.pX)(o, { state: i0 }) : (0, eI.u)(b, { state: i0 });
        }, [b, o]),
        ee = r.useCallback(() => {
            if (null != o || null == d || I || !C) return;
            let e = (0, ix.W)(d.id);
            null != e && H.A.preload(d.id, e);
        }, [o, d, I, C]),
        et = (0, iw.bG)([e7.Ay], () => e7.Ay.isCurrentUserGuest(b)),
        en = r.useCallback(
            (e) => {
                null == d || et || f(e, d);
            },
            [d, f, et],
        ),
        ei = r.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != M && document.querySelector(`[aria-owns=folder-items-${M}]`)?.focus();
            },
            [M],
        ),
        ea = r.useCallback(
            (e) => {
                e ? q.delay() : (q.cancel(), Z(!1));
            },
            [q],
        );
    function er() {
        O || F(!0);
    }
    function e_() {
        O || F(!1);
    }
    let eE = r.useCallback(
            (e) => {
                n?.(b, e);
            },
            [b, n],
        ),
        eu = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let eA = d.name;
    S > 0
        ? (eA = ej.intl.formatToPlainString(ej.t["/uzRss"], { guildName: d.name, mentions: S }))
        : u && (eA = ej.intl.formatToPlainString(ej.t.lzqe42, { guildName: d.name }));
    let eT = (0, a.jsx)(iF, {
            guild: d,
            show: $,
            active: E,
            onAnimationStart: function () {
                Y($);
            },
            onAnimationRest: function () {
                $ || Y(!1);
            },
        }),
        eh = Q
            ? (0, a.jsx)(B.j, {
                  ariaLabel: eA,
                  name: d.name,
                  onClick: J,
                  onMouseEnter: er,
                  onMouseLeave: e_,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: ei,
                  icon: (0, t4.Iv)(d, 2 * eu, k && c, !0),
                  selected: E || k,
                  ...w,
                  "aria-setsize": L,
                  "aria-posinset": D,
                  "aria-selected": E,
              })
            : (0, a.jsx)(V.Q, {
                  selected: E,
                  children: (0, a.jsx)("div", {
                      ref: m
                          ? (e) => {
                                G(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": $,
                      children: (0, a.jsx)(B.j, {
                          ariaLabel: eA,
                          name: d.name,
                          onClick: J,
                          onMouseEnter: er,
                          onMouseLeave: e_,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: ei,
                          icon: (0, t4.Iv)(d, 2 * eu, k && c, !0),
                          selected: E || k,
                          ...w,
                          "aria-setsize": L,
                          "aria-posinset": D,
                          "aria-selected": E,
                      }),
                  }),
              }),
        eS = $ || j ? eT : eh,
        eN = (0, a.jsx)(nl, { children: (0, a.jsx)(iE, {}) }),
        ef = Q
            ? (0, a.jsx)(tm.animated.div, {
                  ref: m
                      ? (e) => {
                            G(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == g ? 1 : g },
                  "data-drop-hovering": $,
                  className: l()(iA.rN, { [iA.p9]: O, [iA.oR]: $, [iA.wH]: $ || E }),
                  children: (0, a.jsx)(V.Q, {
                      selected: !0,
                      upperBadge: P,
                      lowerBadge: U,
                      lowerBadgeSize: v,
                      children: eS,
                  }),
              })
            : (0, a.jsx)(tm.animated.div, {
                  style: { scale: null == g ? 1 : g },
                  className: l()(iA.rN, { [iA.p9]: O, [iA.oR]: $, [iA.wH]: $ || E }),
                  "data-drop-hovering": $,
                  children: (0, a.jsx)(V.Q, {
                      selected: E,
                      upperBadge: P,
                      lowerBadge: U,
                      lowerBadgeSize: v,
                      children: eS,
                  }),
              });
    return (0, a.jsxs)(K.c, {
        ref: eE,
        children: [
            (0, a.jsx)(W.A, { overlay: !0, hovered: !y && k, selected: !y && E, unread: !y && u }),
            (0, a.jsx)(iJ, { guild: d, disabled: O, isDragging: y, children: y ? eN : ef }),
            m ? (0, a.jsx)(nr, { name: d.name, targetNode: t, onDragOverChanged: ea }) : null,
        ],
    });
});
var i3 = n(182240);
let i4 = r.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        s = (0, u.bG)([e9.A], () => e9.A.getGuild(i)),
        l = iC(s),
        o = (0, u.bG)([tE.A], () => tE.A.isFocused()),
        d = (0, u.bG)([n0.A], () => n0.A.isUnavailable(i)),
        c = (0, eA.A)((e) => e.guildId),
        _ = iy(i),
        {
            badge: E,
            unread: A,
            isMentionLowImportance: I,
        } = (0, u.cf)([eL.default], () => ({
            badge: eL.default.getMentionCount(i),
            isMentionLowImportance: eL.default.getIsMentionLowImportance(i),
            unread: eL.default.hasUnread(i),
        })),
        T = (0, iR.Ig)(s) && 0 === E,
        h = r.useMemo(
            () =>
                null != n
                    ? n
                    : T
                      ? (0, a.jsx)("div", {
                            className: i3.j,
                            children: (0, a.jsx)(ip.E, {
                                size: "custom",
                                color: "currentColor",
                                className: i3.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, T],
        );
    return (0, a.jsx)(i2, {
        ...e,
        guild: s,
        unavailable: d,
        animatable: o,
        selected: c === i,
        badge: E,
        isMentionLowImportance: I,
        lowerBadge: h,
        unread: A,
        mediaState: _,
        guildJoinRequestStatus: l,
    });
});
var i5 = n(922016),
    i6 = n(534514),
    i8 = n(821609),
    i7 = n(339350),
    i9 = n(475743),
    ae = n(624458),
    at = n(408213),
    an = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    ai = n(928568);
function aa(e, t) {
    (0, tC.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, a.jsx)(e, { ...n, guild: t });
    });
}
function ar(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, u.bG)([iO.A], () => iO.A.getRequest(n)),
        r = (0, u.bG)([iO.A], () => iO.A.getJoinRequestGuild(n), [n]),
        s = (0, u.bG)([tE.A], () => tE.A.isFocused()),
        l = (0, u.bG)([ta.A], () => ta.A.getGuildId());
    return null == r
        ? null
        : (0, a.jsx)(i2, {
              guildNode: t,
              guild: r,
              animatable: s,
              draggable: !1,
              selected: n === l,
              preloadOnClick: !1,
              contextMenu: aa,
              lowerBadge:
                  i?.applicationStatus === er.B5.REJECTED
                      ? ec({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eH.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var as = n(785439);
function al(e) {
    let { onActivate: t, children: n } = e,
        i = r.useRef(null),
        s = (0, u.bG)([iO.A], () => iO.A.hasJoinRequestCoackmark()),
        l = r.useCallback(() => {
            at.Ay.clearCoachmark();
        }, []),
        o = (0, i9.A)(s),
        d = r.useRef(null);
    return (
        r.useEffect(() => {
            s && s !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, s, o, t]),
        (0, a.jsxs)("div", {
            className: as.kL,
            children: [
                (0, a.jsx)(i5.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, a.jsxs)("div", {
                            className: as.jC,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: as.Bm,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: as.q3,
                                            children: [
                                                (0, a.jsx)(i6.D, {
                                                    variant: "heading-md/medium",
                                                    children: ej.intl.string(ej.t["0YV0YE"]),
                                                }),
                                                (0, a.jsx)(ey.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: ej.intl.string(ej.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(i8.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: ej.intl.string(ej.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: l,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", { className: as.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, a.jsx)("div", { ...e, className: as.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function ao(e) {
    let { onActivate: t } = e,
        [n, i] = r.useState(!1),
        s = (0, u.bG)([ta.A], () => ta.A.getGuildId()),
        l = (0, u.bG)([iO.A], () => iO.A.hasFetchedRequestToJoinGuilds),
        o = (0, ai.A)(),
        d = (0, i9.A)(s),
        c = r.useMemo(() => {
            let e = (0, ti.xW)({
                folderId: an.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: ej.intl.string(ej.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, ti.EL)(t, e.id));
            return e;
        }, [o, n]);
    r.useEffect(() => {
        n && !l && ae.A.fetchRequestToJoinGuilds();
    }, [n, l]);
    let _ = null != s && o.includes(s);
    return (r.useEffect(() => {
        !n && _ && d !== s && i(!0);
    }, [n, _, d, s]),
    0 === o.length)
        ? null
        : (0, a.jsx)(al, {
              onActivate: t,
              children: (0, a.jsx)(ih, {
                  folderNode: c,
                  expanded: n,
                  selected: _,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), at.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, a.jsx)("div", {
                      className: as.rH,
                      children: (0, a.jsx)(i7.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== ti.PJ.GUILD
                          ? null
                          : (0, a.jsx)(ar, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function ad(e) {
    let { guildId: t } = e,
        n = r.useMemo(() => (0, ti.EL)(t), [t]),
        i = (0, u.bG)([e9.A], () => e9.A.getGuild(t)),
        s = (0, u.bG)([tE.A], () => tE.A.isFocused()),
        l =
            t ===
            (0, eA.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = iy(t);
    return null == i
        ? null
        : (0, a.jsx)(i2, { guildNode: n, guild: i, animatable: s, selected: l, draggable: !1, mediaState: o });
}
var ac = n(803921);
let a_ = (0, M.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("10373"),
                n.e("17546"),
                n.e("81154"),
                n.e("55658"),
                n.e("13520"),
                n.e("99961"),
                n.e("7927"),
                n.e("7580"),
                n.e("76602"),
                n.e("91763"),
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
                n.e("76413"),
                n.e("80945"),
                n.e("18265"),
                n.e("36419"),
                n.e("28850"),
                n.e("27659"),
                n.e("60003"),
                n.e("26516"),
                n.e("85802"),
                n.e("65200"),
                n.e("41348"),
                n.e("2529"),
                n.e("46240"),
                n.e("81505"),
                n.e("8066"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    aE = (0, tt.isWindows)() ? 4 : 12 * !(0, tt.isMac)();
function au(e) {
    return e.startsWith(eH.BVt.GUILD_DISCOVERY) || e.startsWith(eH.BVt.GLOBAL_DISCOVERY);
}
class aA {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = r.createRef();
    nodeRefs = {};
    timeout = new T.Ep();
    observer;
    constructor(e, t, n, i, a) {
        (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = i),
            (this.sizes = a),
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
            (null == e && au(window.location.pathname)) ||
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
        null != i && (0, E.vq)(i)
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
        let { iconTotalSize: i, badgeVisibleBuffer: a, heightBeforeGuilds: r, bottomInset: s } = this.sizes,
            l = this.scrollerRef.current;
        if (null == l) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let d = i * o + r,
            c = l.getScrollerState();
        return (!t && !!(d >= c.scrollTop)) || (!!t && !!(d + i + a <= c.scrollTop + c.offsetHeight - s));
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
                          a = this.nodeRefs[i];
                      if (null == a) return !1;
                      let r = a.getBoundingClientRect(),
                          s = r.top - n;
                      return s + r.height > 0 && s < t;
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
function aI(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        s = (0, y.A)("TopSection"),
        { isExperimentEnabled: l } = (0, v.TW)("TopSection"),
        o = (0, u.bG)([eS.A], () => null != eS.A.getVoiceChannelId()),
        d = (0, S.useHasAnyModalOpen)(),
        c = (0, P.Ay)((e) => e.postConnectionOpen),
        [_, E] = (0, U.kn)(c && l && !o && !d ? [A.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        I = _ === A.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [T] = (0, U.kn)(I ? [A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        h = T === A.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        N = r.useRef(!1),
        f = h && s;
    r.useEffect(() => {
        f && !N.current && n(), (N.current = f);
    }, [n, f]);
    let p = (0, u.yK)([e9.A, e7.Ay], () => e9.A.getGuildIds().filter((e) => e7.Ay.isCurrentUserGuest(e))),
        m = i.concat(p),
        { entrypoint: O } = (0, e5.X8)({ location: "GuildsBar" });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nq, {}),
            O === e5.RK.SERVER_RAIL_TOP && (0, a.jsx)(a_, {}),
            s ? (0, a.jsx)(e2, { shouldShowIntroPopover: h, markIntroPopoverAsDismissed: E }) : null,
            !t && (0, a.jsx)(tY, {}),
            m.map((e) => (0, a.jsx)(ad, { guildId: e }, e)),
            (0, a.jsx)(ao, { onActivate: n }),
        ],
    });
}
function aT(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: r, lurkingGuildIds: s } = e,
        [l] = (0, u.yK)([te.Ay], () => {
            let e = te.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = l.getRoots(),
        d = (0, u.yK)([e8.A], () => e8.A.getGeoRestrictedGuilds()).map((e) =>
            (0, a.jsx)(nA, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(N.B, {
                role: "group",
                "aria-label": ej.intl.string(ej.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => r(e, t, o.length)),
            }),
            d,
            (0, a.jsx)(n3, {}),
            i ? null : (0, a.jsx)(n_, { disableTooltip: s.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, a.jsx)(tX, {}),
        ],
    });
}
function ah(e) {
    var t;
    let { disableAppDownload: n = tt.isPlatformEmbedded, isOverlay: i = !1, className: s, themeOverride: o } = e,
        [d] = (0, u.yK)([te.Ay], () => {
            let e = te.Ay.getGuildsTree();
            return [e, e.version];
        }),
        E = (0, u.bG)([e4.A], () => e4.A.lurkingGuildIds()),
        A = r.useMemo(() => (i ? [] : E), [E, i]),
        I = (0, u.bG)([b.A], () => b.A.isFullscreenInContext()),
        { isSorting: S, startSorting: N, stopSorting: C } = (0, tn.A)(),
        g = r.useRef(!1),
        [M] = r.useState(() => new T.Ep()),
        P = r.useRef(null),
        U = r.useRef(null),
        { ref: v, ...G } = (0, _.$y)(),
        w = (0, f.R7)(),
        [x, V] = r.useState(!1),
        B = (0, p.r)(h.A.modules.guildbar.AVATAR_SIZE),
        F = (0, p.r)(h.A.space.SPACE_XS),
        k = (0, y.A)("GuildsBar"),
        { pathname: H } = (0, c.zy)(),
        { entrypoint: j } = (0, e5.X8)({ location: "GuildsBar" }),
        Y = +!!k + +(j === e5.RK.SERVER_RAIL_TOP),
        W = r.useMemo(() => {
            let e,
                t,
                n =
                    ((e = B + F),
                    {
                        iconSize: B,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + F),
                        heightBeforeGuilds: aE + t + Y * e,
                        bottomInset: 16,
                    });
            return new aA(
                d,
                V,
                eH.tEg,
                () => {
                    P.current?.calculateState(), U.current?.calculateState();
                },
                n,
            );
        }, [B, F, d, Y]);
    r.useEffect(
        () => (
            W.setResizeObserver(),
            () => {
                W.clearResizeObserver();
            }
        ),
        [W],
    ),
        r.useEffect(() => {
            let e = () => {
                P.current?.calculateState(), U.current?.calculateState();
            };
            return eL.default.addChangeListener(e), () => eL.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: K } = (0, D.Ay)(L.A.GUILDS_LIST),
        $ = au(H);
    (0, R.u5)(() => {
        if (!g.current && 0 !== d.size) {
            if (!$) {
                let { scrollTop: e } = e6.A.getGuildListDimensions();
                W.scrollTo({ to: e, animate: !1 });
            }
            return (g.current = !0), () => M.stop();
        }
    }),
        r.useEffect(() => {
            if ((W.setGuildsTree(d), g.current || 0 === d.size)) return;
            let e = eA.A.getState().guildId;
            W.scrollToGuild(e, !1);
            let t = null;
            return eA.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), W.scrollToGuild(t, !1));
            });
        }, [d, W]);
    let Z = r.useCallback(() => {
        W.scrollTo({ to: 0, animate: !1 });
    }, [W]);
    (t = W.scrollToGuild),
        r.useEffect(() => {
            let e = null;
            function n() {
                let n = ta.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                ta.A.addChangeListener(n),
                () => {
                    ta.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let q = r.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case ti.PJ.FOLDER:
                        return (0, a.jsx)(
                            iN,
                            {
                                folderNode: t,
                                setNodeRef: W.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: N,
                                onDragEnd: C,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case ti.PJ.GUILD:
                        return (0, a.jsx)(
                            i4,
                            {
                                guildNode: t,
                                setRef: W.setNodeRef,
                                draggable: !0,
                                sorting: S,
                                onDragStart: N,
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
            [N, C, S, W.setNodeRef],
        ),
        Q = (0, a.jsx)(nC, { selected: $, className: ac.ai }),
        z = j === e5.RK.SERVER_RAIL_BOTTOM;
    return (0, a.jsx)(D.f5, {
        value: K,
        children: (0, a.jsx)(m.N, {
            theme: o,
            children: (e) =>
                (0, a.jsxs)("nav", {
                    className: l()(ac.iE, s, e, { [ac.R]: I }),
                    "aria-label": ej.intl.string(ej.t.PjnF2t),
                    children: [
                        (0, a.jsx)(tN, {
                            ref: P,
                            isVisible: W.isItemVisible,
                            onJumpTo: W.handleJumpToGuild,
                            className: ac.Xl,
                            barClassName: ac.Sh,
                        }),
                        (0, a.jsx)("ul", {
                            ref: v,
                            ...G,
                            ...w,
                            role: "tree",
                            className: ac.B2,
                            children: (0, a.jsxs)("div", {
                                className: ac.qD,
                                children: [
                                    (0, a.jsxs)(O.zC, {
                                        className: l()({ [ac.XG]: !0, [ac.qw]: x }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: W.scrollerRef,
                                        onScroll: W.handleScroll,
                                        children: [
                                            (0, a.jsx)(aI, { scrollToTop: Z, lurkingGuildIds: A }),
                                            (0, a.jsx)(nz, {}),
                                            (0, a.jsx)(aT, {
                                                guildDiscoveryButton: Q,
                                                disableAppDownload: n,
                                                isOverlay: i,
                                                renderTreeNode: q,
                                                lurkingGuildIds: A,
                                            }),
                                        ],
                                    }),
                                    z &&
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsx)(nz, { fullWidth: !0 }),
                                                (0, a.jsx)("div", { className: ac.JU, children: (0, a.jsx)(a_, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, a.jsx)(tN, {
                            reverse: !0,
                            ref: U,
                            isVisible: W.isItemVisible,
                            onJumpTo: W.handleJumpToGuild,
                            className: l()(ac.LZ, { [ac.CH]: !i && !z, [ac.c0]: !i && z }),
                            barClassName: ac.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let aS = r.memo(
    function (e) {
        let t = (0, g.A)("guildsnav");
        return (0, a.jsx)(_.hD, { navigator: t, children: (0, a.jsx)(ah, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, I.A)(e, t),
);
