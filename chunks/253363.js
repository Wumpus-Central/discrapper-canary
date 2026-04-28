n.d(t, { A: () => iI });
var l,
    i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(735438),
    u = n.n(o),
    d = n(873263),
    c = n(837381),
    h = n(621466),
    A = n(17928),
    m = n(554146),
    g = n(52133),
    p = n(451988),
    f = n(661531),
    E = n(192308),
    I = n(331322),
    _ = n(312138),
    C = n(602853),
    S = n(43990),
    x = n(689175),
    N = n(951001),
    T = n(964486),
    R = n(260762),
    y = n(793574),
    b = n(688810),
    v = n(313961),
    j = n(268218),
    O = n(771781),
    M = n(932001),
    L = n(313281),
    D = n(832275);
n(321073);
var G = n(43105),
    P = n(857250),
    w = n(691540),
    U = n(862328),
    k = n(67811),
    V = n(27232),
    F = n(403581),
    B = n(308528),
    H = n(933958),
    K = n(969151),
    W = n(941971),
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
    el = n(983851),
    ei = n(323384),
    es = n(513461),
    er = n(791606),
    ea = n(266062);
function eo(e, t, n) {
    return (0, i.jsx)(X.hV, { count: e, color: t, "aria-hidden": n });
}
function eu(e) {
    let t,
        {
            audio: n,
            video: l,
            screenshare: i,
            isCurrentUserConnected: s,
            liveStage: r,
            activeEvent: a,
            activity: o,
        } = e;
    if (a) t = Z.C;
    else if (r) t = ee.q;
    else if (i) t = et.k;
    else if (l) t = en.n;
    else if (n) t = el.H;
    else {
        if (!o) return null;
        t = ei.k;
    }
    return ec({ icon: t, isCurrentUserConnected: s });
}
function ed(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, l] = (function (e) {
            switch (e) {
                case es.B5.SUBMITTED:
                    return [void 0, z.O];
                case es.B5.REJECTED:
                    return [f.A.unsafe_rawColors.RED_400.css, q.P];
                case es.B5.APPROVED:
                    return [f.A.unsafe_rawColors.GREEN_360.css, Q.A];
                default:
                    return [void 0, J.R];
            }
        })(t);
    return ec({ icon: l, color: n });
}
function ec(e) {
    let { icon: t, color: n, isCurrentUserConnected: l } = e;
    return (0, i.jsx)(X.fk, {
        icon: t,
        className: a()(ea.bG, { [ea.gB]: l }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
var eh = n(855725),
    eA = n(532794),
    em = n(366811),
    eg = n(345942),
    ep = n(616356),
    ef = n(734057),
    eE = n(309010),
    eI = n(977997),
    e_ = n(935208),
    eC = n(181079),
    eS = n(422258),
    ex = n(668267),
    eN = n(5180),
    eT = n(695633),
    eR = n(152007),
    ey = n(458294),
    eb = n(576705),
    ev = n(222823),
    ej = n(543465),
    eO = n(780645),
    eM = n(990078),
    eL = n(597601),
    eD = n(834730),
    eG = n(183623),
    eP = n(104171),
    ew = n(63995),
    eU = n(69407),
    ek = n(287809),
    eV = n(607567),
    eF = n(403362),
    eB = n(652215),
    eH = n(985018),
    eK = n(621035);
function eW(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: eK.nM,
              children: [
                  (0, i.jsx)(e, { className: eK.RI, color: "currentColor" }),
                  (0, i.jsx)(eP.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eY() {
    let e = (0, A.yK)([eC.A, ef.A], () =>
            e_.default
                .keys(eC.A.getFavoriteChannels())
                .map((e) => ef.A.getChannel(e))
                .filter(eF.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eB.rbe.GUILD_VOICE),
        l = e.filter((e) => e.type === eB.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        s = (0, A.yK)(
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
        r = (0, A.yK)([ew.A], () =>
            u().flatMap(l, (e) =>
                ew.A.getMutableParticipants(e, eU.ip.SPEAKER)
                    .filter((e) => e.type === eU.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        a = (0, A.bG)([ew.A], () => {
            let e = 0;
            for (let t of l) e += ew.A.getParticipantCount(t, eU.ip.AUDIENCE);
            return e;
        }),
        o = (0, A.yK)(
            [ep.A],
            () =>
                ep.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        d = (0, A.yK)([H.Ay], () => {
            let e = H.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let l of t) n.push(...(e.get(l)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        c = (0, A.yK)([ek.default], () => d.map((e) => ek.default.getUser(e)), [d]),
        h = (0, A.yK)([ek.default], () => o.map((e) => ek.default.getUser(e)), [o]),
        m = eW(
            el.H,
            s.filter((e) => !o.includes(e.id) && !d.includes(e.id)),
        ),
        g =
            0 === r.length
                ? null
                : (0, i.jsxs)("div", {
                      className: eK.nM,
                      children: [
                          (0, i.jsx)(ee.q, { size: "lg", color: "currentColor", className: eK.RI }),
                          (0, i.jsx)(eP.Ay, { guildId: void 0, users: r, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: eK.GZ,
                              children: [
                                  (0, i.jsx)(eL.L, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(eD.E, {
                                      className: eK._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: a,
                                  }),
                              ],
                          }),
                      ],
                  }),
        p = eW(
            eG.F,
            h.filter((e) => null != e && !d.includes(e.id)),
        ),
        f = eW(ei.k, c);
    return (0, i.jsxs)(i.Fragment, { children: [g, m, p, f] });
}
function ez() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: a()(eK.nM, eK.Dl),
                children: (0, i.jsx)("span", { className: a()(eK.cN, eK.NT), children: eH.intl.string(eH.t.wMWyci) }),
            }),
            (0, i.jsx)(eY, {}),
        ],
    });
}
function eq(e) {
    let { "aria-label": t = !1, children: n } = e,
        l = s.useMemo(() => (0, i.jsx)("div", { className: eK.A_, children: (0, i.jsx)(ez, {}) }), []);
    return (0, i.jsx)(eM.m, {
        __unsupportedReactNodeAsText: l,
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
let e1 = { analyticsSource: { page: eB.liQ.GUILD_CHANNEL, section: eB.JJy.CHANNEL_LIST, object: eB.ZSU.CHANNEL } };
function e2(e) {
    let t,
        l,
        r,
        a,
        o,
        u,
        d,
        h,
        m,
        g,
        p,
        f,
        { shouldShowIntroPopover: I, markIntroPopoverAsDismissed: _ } = e,
        C = (0, c.Vd)("favorites"),
        { favoriteAdded: S, clearFavoriteAdded: x } = (0, L.CJ)(),
        N = s.useRef(null),
        { analyticsLocations: T } = (0, b.Ay)(y.A.FAVORITES_GUILD_BUTTON),
        [R, v] = s.useState(!1),
        j = (0, eO.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: O,
            favoriteGuildMuted: M,
            favoriteChannels: D,
        } = (0, A.cf)([eC.A], () => ({
            favoriteGuildEnabled: eC.A.favoriteGuildEnabled,
            favoriteChannels: eC.A.getFavoriteChannels(),
            favoriteGuildMuted: eC.A.favoriteGuildMuted,
        })),
        z = (0, A.bG)([eE.A], () => eE.A.getChannelId(eB.YYv)),
        q = (0, A.bG)([ef.A], () => ef.A.getChannel(z)),
        Q = (0, em.A)((e) => e.guildId),
        J = (0, eN.ai)(Q),
        { badge: X, unread: $ } = (0, A.cf)([eT.A, ef.A, ey.default, eR.A, eb.A, ev.Ay, ej.Ay], () =>
            e_.default.keys(D).reduce(
                (e, t) => {
                    let n = ef.A.getChannel(t),
                        l = n?.getGuildId(),
                        i = ev.Ay.getMentionCount(t);
                    if (
                        ((e.badge = e.badge + i),
                        (e.unread = e.unread || (ev.Ay.hasUnread(t) && ey.default.shouldCountChannelUnread(n, i))),
                        null != l)
                    ) {
                        let n = eT.A.getActiveJoinedRelevantThreadsForParent(l, t);
                        for (let t in n) {
                            let n = ev.Ay.getMentionCount(t);
                            e.badge += n;
                            let l = ef.A.getChannel(t);
                            e.unread = e.unread || (ev.Ay.hasUnread(t) && ey.default.shouldCountChannelUnread(l, n));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            ),
        ),
        Z =
            ((l = null != (t = (0, A.bG)([eE.A], () => eE.A.getVoiceChannelId())) && null != D[t]),
            (r = (0, A.bG)([ep.A], () => {
                if (!l) return !1;
                let e = ep.A.getCurrentUserActiveStream();
                return null != e && null != D[e.channelId];
            })),
            (a = (0, A.bG)([ep.A], () => ep.A.getAllApplicationStreams().some((e) => null != D[e.channelId]))),
            (o = (0, A.bG)([eI.A], () => l && null != t && eI.A.hasVideo(t), [l, t])),
            (u = (0, A.yK)([H.Ay], () =>
                e_.default.keys(D).reduce((e, t) => (e.push(...H.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (d = (0, A.bG)([H.Ay], () =>
                Array.from(H.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, K.H)(t);
                    return null != n && null != D[n];
                }),
            )),
            (h = u.length > 0),
            (m = !1),
            (g = !1),
            (p = !1),
            (f = !1),
            l ? ((m = !o), (g = o), (p = r), (f = d)) : ((p = a), (f = h)),
            eu({ audio: m, video: g, screenshare: p, liveStage: !1, isCurrentUserConnected: l, activity: f })),
        ee = X > 0 ? (0, eh.w)(X) : null,
        et = s.useRef(!1),
        { hasAccess: en } = (0, L.TW)("FavoritesButton"),
        el = s.useCallback(
            (e, t) => {
                (et.current = !0), _(e, t);
            },
            [_],
        ),
        ei = s.useCallback(
            (e) => {
                e && ((0, ex.mv)("intro_dc"), (0, eg.u)(eB.YYv)),
                    en
                        ? (O || (0, eS.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, E.openModalLazy)(async () => {
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
                                      (0, i.jsx)(e, { ...t, parentId: null, source: "favorites_button_onboarding" });
                              }))
                        : e && (0, eA.A)({ subscriptionTier: eX.pe.TIER_2, analyticsLocations: T }),
                    el(eJ.i.TAKE_ACTION);
            },
            [el, O, en, T],
        );
    return (
        s.useEffect(() => {
            I && (et.current = !1);
        }, [I]),
        s.useEffect(
            () => () => {
                I && !et.current && el(eJ.i.AUTO_DISMISS, !0);
            },
            [el, I],
        ),
        s.useEffect(() => {
            if (S) {
                let e = (0, P.o)(eH.intl.string(eH.t["4tSWQg"]), eQ.Ck.FAVORITE);
                (0, w.P0)(e);
                let t = setTimeout(x, e.options?.duration ?? eQ.jg.duration);
                return () => {
                    x(), clearTimeout(t);
                };
            }
        }, [S, x]),
        (0, i.jsxs)(Y.c, {
            children: [
                (0, i.jsx)(W.A, { selected: J, hovered: R, unread: $ && !M, className: eZ.I }),
                (0, i.jsx)(eq, {
                    children: (0, i.jsx)(U.Q, {
                        selected: !0,
                        upperBadge: Z,
                        lowerBadge: ee,
                        children: (0, i.jsx)("div", {
                            ref: N,
                            children: (0, i.jsx)(k.j, {
                                ...C,
                                ariaLabel: eH.intl.formatToPlainString(eH.t["/uzRss"], {
                                    guildName: eH.intl.string(eH.t.wMWyci),
                                    mentions: X,
                                }),
                                "aria-selected": J,
                                to: { pathname: eB.BVt.CHANNEL(eB.YYv, z), state: e1 },
                                selected: J || R,
                                onClick: () => {
                                    I && ei(!1);
                                },
                                onMouseEnter: () => v(!0),
                                onMouseLeave: () => v(!1),
                                onMouseDown: function () {
                                    null != q && B.A.preload(q.guild_id, q.id);
                                },
                                onContextMenu: j,
                                children: (0, i.jsx)(V.G, {
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
                I &&
                    (0, i.jsx)(G.A, {
                        targetElementRef: N,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: e0.A, type: "image", aspectRatio: "16/9" },
                        title: eH.intl.string(e$.default["bu/mLv"]),
                        body: eH.intl.string(e$.default["/x2jT7"]),
                        onRequestClose: () => el(eJ.i.USER_DISMISS),
                        actions: [
                            {
                                icon: F.t,
                                text: en ? eH.intl.string(e$.default["0lHa0Z"]) : eH.intl.string(e$.default["0nZZEk"]),
                                onClick: () => ei(!0),
                                variant: en ? void 0 : "expressive",
                            },
                        ],
                    }),
            ],
        })
    );
}
var e3 = n(633965),
    e9 = n(857071),
    e6 = n(851109),
    e5 = n(72314),
    e8 = n(543897),
    e7 = n(696451),
    e4 = n(71393),
    te = n(711014),
    tt = n(723702),
    tn = n(757780),
    tl = n(263715),
    ti = n(967198),
    ts = n(173860),
    tr = n(383394),
    ta = n(131677),
    to = n(228366);
let tu = {};
class td extends A.Ay.PersistedStore {
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
let tc = new td(to.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        tu[t] = Date.now();
    },
});
var th = n(531685),
    tA = n(583613);
let tm = "app-download-item",
    tg = "add-server-item";
function tp() {
    return !1;
}
function tf(e) {
    let t = ey.default.getMutableGuildStates();
    return (
        (e === eB.sFm.SERVER_DISCOVERY_BADGE && !tc.hasViewed(eB.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== tm && e !== tg && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tE = (0, tA.L_)((e, t, n) => ["null", ...t, ...e, tg, eB.sFm.E3_SERVER_DISCOVERY_BADGE, tm]),
    tI = s.forwardRef(function (e, t) {
        let n = (0, A.yK)([te.Ay, ta.A, ey.default], () =>
                tE(te.Ay.getGuildFolders(), ta.A.getUnreadPrivateChannelIds(), ey.default.getStoreChangeSentinel()),
            ),
            l = (0, A.bG)([th.A], () => th.A.isFocused()),
            s = (0, A.bG)([tr.A], () => tr.A.getExpandedFolders());
        return (0, i.jsx)(ts.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: tp,
            textUnread: eH.intl.string(eH.t.y2b7CA),
            textMention: eH.intl.string(eH.t.y2b7CA),
            isMentioned: tf,
            animate: l,
            expandedFolders: s,
        });
    });
n(667532);
var t_ = n(73939),
    tC = n(763827),
    tS = n(123924),
    tx = n(778712),
    tN = n(442433),
    tT = n(620982),
    tR = n(571694),
    ty = n(47167),
    tb = n(598104),
    tv = n(994500);
function tj(e, t) {
    return e
        .filter((e) => (0, eF.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tv.A.isBlockedOrIgnored(e.id)));
}
function tO(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tv.A.isBlockedOrIgnored(e)));
}
var tM = n(427358),
    tL = n(907459),
    tD = n(145408);
function tG(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: eK.nM,
              children: [
                  (0, i.jsx)(t, { className: eK.RI, color: "currentColor" }),
                  (0, i.jsx)(eP.Ay, { users: n, max: 6 }),
              ],
          });
}
function tP(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(eD.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eH.intl.string(eH.t.fpKdS1),
          })
        : (0, i.jsx)(tD.A, { muteConfig: t, className: n });
}
function tw(e) {
    let t,
        n,
        l,
        r,
        o,
        u,
        d,
        c,
        h,
        m,
        g,
        p,
        f,
        { channel: E } = e,
        I = E.id,
        {
            activityUsers: _,
            streamUsers: C,
            voiceUsers: S,
        } = ((t = E.id),
        (n = (0, A.yK)([tv.A], () => tv.A.getBlockedOrIgnoredIDs())),
        (l = (0, A.bG)([tM.A], () => tM.A.getUserAffinitiesMap(), [])),
        (r = (0, A.yK)(
            [H.Ay, ek.default],
            () =>
                H.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => ek.default.getUser(e)),
            [t],
        )),
        (o = s.useMemo(() => tj(r, n), [r, n])),
        (u = s.useMemo(() => (0, tL.L)(o, l, "DirectMessageTooltip - activityUsers"), [o, l])),
        (d = (0, A.yK)(
            [ep.A, ek.default],
            () =>
                tj(
                    ep.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => ek.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (c = s.useMemo(() => tj(d, n), [d, n])),
        (h = s.useMemo(() => (0, tL.L)(c, l, "DirectMessageTooltip - activityUsers"), [c, l])),
        (m = s.useMemo(() => h.filter((e) => !u.some((t) => t.id === e.id)), [h, u])),
        (g = (0, A.yK)(
            [eV.Ay],
            () =>
                tj(
                    eV.Ay.getVoiceStatesForChannel(E).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [E, n],
        )),
        (p = s.useMemo(() => tj(g, n), [g, n])),
        (f = s.useMemo(() => (0, tL.L)(p, l, "DirectMessageTooltip - voiceUsers"), [p, l])),
        {
            voiceUsers: s.useMemo(
                () => f.filter((e) => !u.some((t) => t.id === e.id) && !h.some((t) => t.id === e.id)),
                [f, u, h],
            ),
            streamUsers: m,
            activityUsers: u,
        }),
        x = (0, i.jsx)(tG, { icon: el.H, users: S }),
        N = (0, i.jsx)(tG, { icon: eG.F, users: C }),
        T = (0, i.jsx)(tG, { icon: ei.k, users: _ }),
        { isMuted: R, muteConfig: y } = (0, A.cf)(
            [ej.Ay],
            () => ({ isMuted: ej.Ay.isChannelMuted(null, I), muteConfig: ej.Ay.getChannelMuteConfig(null, I) }),
            [I],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            x,
            N,
            T,
            R ? (0, i.jsx)(tP, { muteConfig: y, className: a()(eK.LM, { [eK.Sx]: null != x || null != N }) }) : null,
        ],
    });
}
function tU(e) {
    let { channel: t } = e,
        n = (0, ty.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: a()(eK.nM, eK.Dl),
                children: (0, i.jsx)("span", { className: a()(eK.cN, eK.NT), children: n }),
            }),
            (0, i.jsx)(tw, { channel: t }),
        ],
    });
}
function tk(e) {
    let { channel: t, children: n } = e,
        l = (0, ty.Ay)(t),
        r = s.useMemo(() => (0, i.jsx)("div", { className: eK.A_, children: (0, i.jsx)(tU, { channel: t }) }), [t]);
    return (0, i.jsx)(eM.m, {
        __unsupportedReactNodeAsText: r,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": l ?? void 0,
        asContainer: !0,
        children: n,
    });
}
var tV = n(647321);
let tF = { friction: 28, tension: 600 };
function tB(e) {
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
                .update({ immediate: !th.A.isFocused(), height: 1, opacity: 1, scale: 1, config: tB })
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
            t.update({ immediate: !th.A.isFocused(), height: 0, opacity: 0, scale: 0, config: tB }).start().then(e),
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { size: e } = this.props,
            { controller: t } = this.state,
            { opacity: n, height: l, scale: i } = t.springs;
        return { opacity: n, height: l.to([0, 1], [0, e]), transform: i.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`) };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === eB.rbe.DM ? ek.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tR.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = t.type === eB.rbe.DM ? ek.default.getUser(t.getRecipientId()) : null;
        null != l
            ? (0, tN.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("90673"),
                      n.e("17764"),
                      n.e("63397"),
                      n.e("98042"),
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("34552"),
                      n.e("55411"),
                      n.e("93103"),
                      n.e("91763"),
                      n.e("13708"),
                      n.e("8757"),
                      n.e("89673"),
                      n.e("91007"),
                      n.e("68403"),
                      n.e("85968"),
                      n.e("60195"),
                      n.e("88342"),
                      n.e("29787"),
                      n.e("97558"),
                      n.e("94000"),
                      n.e("42451"),
                      n.e("91994"),
                      n.e("38730"),
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
                      n.e("74610"),
                      n.e("38056"),
                      n.e("63071"),
                      n.e("7059"),
                      n.e("8829"),
                      n.e("86697"),
                      n.e("96553"),
                      n.e("24240"),
                      n.e("42339"),
                      n.e("16054"),
                      n.e("98199"),
                      n.e("41175"),
                      n.e("39778"),
                  ]).then(n.bind(n, 385913));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, user: l });
              })
            : (0, tN.L3)(e, async () => {
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
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: l,
                audio: s,
                video: r,
                stream: a,
                isCurrentUserInThisDMCall: o,
                isIncomingCall: u,
                isOngoingCall: d,
                unread: c,
                treeItemProps: h,
            } = this.props,
            { hovered: A, animating: m } = this.state,
            g = e.isMultiUserDM() && null == e.icon,
            p = () =>
                (0, i.jsx)(k.j, {
                    to: eB.BVt.CHANNEL(eB.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || A,
                    ariaLabel:
                        null != t
                            ? [
                                  eH.intl.formatToPlainString(eH.t.hKarnZ, { name: t, mentions: l }),
                                  u ? eH.intl.string(eH.t["fk1/bX"]) : d ? eH.intl.string(eH.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: g ? void 0 : this.getChannelIcon(),
                    backgroundStyle: g ? "on-hover" : "always",
                    children: g
                        ? (0, i.jsx)(tb.A, {
                              channel: e,
                              size: tx._3.SIZE_40,
                              facepileSizeOverride: tx._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ...h,
                });
        return (0, i.jsx)(tS.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(Y.c, {
                children: [
                    (0, i.jsx)(W.A, { hovered: !m && A, selected: !m && n, unread: !m && c, className: tV.I }),
                    (0, i.jsx)(tk, {
                        channel: e,
                        children: (0, i.jsx)(U.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: l > 0 ? eo(l, void 0, !0) : null,
                            upperBadge: eu({ audio: s, video: r, screenshare: a, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, X.o6)(l) },
                            children: p(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let tK = s.forwardRef(function (e, t) {
    let n = e.channel.id,
        l = (0, ty.Ay)(e.channel),
        s = (0, c.Vd)(n, 2),
        r = (0, A.bG)([tC.A], () => tC.A.getChannelId(), []),
        a = (0, A.bG)([v.A], () => v.A.getMode(n), [n]),
        o = (0, A.bG)([ep.A], () => ep.A.getAllApplicationStreamsForChannel(n).length > 0),
        u = (0, A.bG)([eV.Ay], () => eV.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        d = (0, A.bG)([eE.A], () => eE.A.getChannelId(), []),
        h = (0, A.bG)([ev.Ay], () => ev.Ay.getMentionCount(n), [n]),
        m = r === n,
        { isIncomingCall: g, isOngoingCall: p } = (0, tT.A)(n),
        E = !1,
        I = !1;
    (m || u) && ((E = a === eB._Of.VOICE), (I = a === eB._Of.VIDEO));
    let _ = (0, C.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(tH, {
        ...e,
        ref: t,
        channelName: l,
        unread: h > 0,
        selected: d === n,
        badge: h,
        audio: E,
        video: I,
        stream: o,
        isCurrentUserInThisDMCall: m,
        isIncomingCall: g,
        isOngoingCall: p,
        size: _,
        treeItemProps: s,
    });
});
function tW() {
    (0, A.bG)([ef.A], () => ef.A.getPrivateChannelsVersion());
    let e = ef.A.getMutablePrivateChannels(),
        t = (0, A.yK)([ta.A], () => ta.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: l } = (0, A.cf)([tC.A], () => ({
            selectedVoiceGuildId: tC.A.getGuildId(),
            selectedVoiceChannelId: tC.A.getChannelId(),
        })),
        r = t.map((t) => {
            let n = e[t];
            return null == n || n.id === l ? null : (0, i.jsx)(tK, { channel: n }, n.id);
        }),
        a = null == n && null != l ? e[l] : null;
    return (
        null != a && r.unshift((0, i.jsx)(tK, { channel: a }, a.id)),
        (0, i.jsx)(I.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eH.intl.string(eH.t.YUU0RF),
            gap: "xs",
            hidden: r.length < 1,
            children: (0, i.jsx)(t_.F, { component: s.Fragment, children: r }),
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
            disableWrapper: l = !1,
            disabled: r = !1,
            hideOnClick: o = !0,
            shouldShow: u,
            forceOpen: d,
            selected: c = !1,
        } = e,
        h = s.useMemo(() => (null == n || r ? null : (0, i.jsx)("div", { className: tq.SH, children: n })), [n, r]),
        A = l ? t : (0, i.jsx)("div", { className: a()(tq.pm, { [tq.wH]: c }), children: t });
    return (0, i.jsx)(eM.m, {
        __unsupportedReactNodeAsText: h,
        position: "right",
        spacing: 12,
        hideOnClick: o,
        shouldShow: u,
        forceOpen: d,
        ariaHidden: !0,
        asContainer: !l,
        children: A,
    });
}
var tJ = n(530787);
let tX = s.forwardRef(function (e, t) {
        let {
                id: n,
                onClick: l,
                onContextMenu: r,
                icon: o,
                selected: u,
                tooltip: d,
                upperBadge: h,
                lowerBadge: A,
                lowerBadgeSize: m,
                showPill: g = !0,
                className: p,
                "aria-label": f,
                children: E,
                onMouseEnter: I,
                onMouseLeave: _,
                onMouseDown: C,
            } = e,
            S = (0, c.Vd)(n),
            [x, N] = s.useState(!1),
            T = "string" == typeof d && null == f ? d : f;
        return (0, i.jsxs)(Y.c, {
            children: [
                g
                    ? (0, i.jsx)("div", { className: tJ.Io, children: (0, i.jsx)(W.A, { hovered: x, selected: u }) })
                    : null,
                (0, i.jsx)(tQ, {
                    text: d,
                    selected: u,
                    children: (0, i.jsx)(U.Q, {
                        selected: !0,
                        upperBadge: h,
                        lowerBadge: A,
                        lowerBadgeSize: m,
                        children: (0, i.jsx)(tz.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                I?.(), N(!0);
                            },
                            onMouseLeave: () => {
                                _?.(), N(!1);
                            },
                            onMouseDown: C,
                            className: a()(tJ.oZ, p, { [tJ.wH]: u || x }),
                            onClick: l,
                            "aria-label": T,
                            "aria-selected": u,
                            onContextMenu: r,
                            focusProps: { enabled: !1 },
                            ...S,
                            children: null != o && (0, i.jsx)(o, { className: tJ.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                E,
            ],
        });
    }),
    t$ = "DOWNLOAD_APPS";
function tZ() {
    let e = (0, E.useModalsStore)((e) => (0, E.hasModalOpenSelector)(e, t$));
    return (0, i.jsx)(tX, {
        id: "app-download-button",
        onClick: () => {
            (0, E.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("75058"), n.e("25280")]).then(n.bind(n, 987482));
                    return (t) => (0, i.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: t$ },
            );
        },
        selected: e,
        tooltip: eH.intl.string(eH.t.Z7jwrJ),
        icon: tY.s,
    });
}
var t0 = n(245604),
    t1 = n(272613),
    t2 = n(398884),
    t3 = n(772366),
    t9 = n(728321),
    t6 = n(260509),
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
                if (null != n) for (let [t, l] of e) t ? n.classList.add(l) : n.classList.remove(l);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function nl(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        t8()(t.type !== tl.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!l || e.type !== tl.PJ.FOLDER || t.type !== tl.PJ.FOLDER) &&
                (e.type !== tl.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: i } = e;
                l && t.type !== tl.PJ.FOLDER && ne.default.track(eB.HAw.GUILD_FOLDER_CREATED),
                    t4.A.moveById(i, t.id, n, l);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function ni(e) {
    let { name: t, targetNode: n, combine: l, below: r } = e,
        a = s.useMemo(() => nl([tl.PJ.GUILD, tl.PJ.FOLDER], n, r, l), [n, r, l]),
        [{ canDrop: o, isOver: u }, d] = (0, t7.H)(a),
        c = nn([
            [o, nt.OP],
            [u, nt.NQ],
        ]);
    return (0, i.jsx)("div", {
        ref: (e) => {
            (c.current = e), d(e);
        },
        "data-dnd-name": eH.intl.formatToPlainString(eH.t["A5aDw+"], { itemName: t }),
        className: nt.aC,
    });
}
function ns(e) {
    let { name: t, targetNode: n, onDragOverChanged: l } = e,
        [{ canDrop: r, isOver: o }, u] = (0, t7.H)(() => nl([tl.PJ.GUILD], n, !0, !0));
    s.useEffect(() => {
        l?.(o);
    }, [l, o]);
    let d = nn([
        [r, nt.OP],
        [o, nt.NQ],
    ]);
    return (0, i.jsx)(tQ, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, i.jsx)("div", {
            ref: (e) => {
                (d.current = e), u(e);
            },
            "data-dnd-name": eH.intl.formatToPlainString(eH.t.qiQ0QI, { itemName: t }),
            className: a()(nt.dw, {}),
        }),
    });
}
let nr = s.memo(function (e) {
    let { name: t, targetNode: n, noCombine: l = !1, below: s = !1, onDragOverChanged: r } = e,
        a = !l && null == n.parentId;
    return (0, i.jsxs)("div", {
        className: nt.iE,
        "aria-hidden": !0,
        children: [
            (0, i.jsx)(ni, { name: t, targetNode: n, below: s }),
            a ? (0, i.jsx)(ns, { name: t, targetNode: n, onDragOverChanged: r }) : null,
        ],
    });
});
function na(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: l, isOver: s }, r] = (0, t7.H)(() => nl([tl.PJ.GUILD], n, !0, !0)),
        a = nn([[s, nt.a7]]),
        o = nn([
            [s, nt.NQ],
            [l, nt.OP],
        ]);
    return (0, i.jsx)("div", {
        ref: a,
        className: nt.Ro,
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: nt.aO,
            children: (0, i.jsx)("div", {
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
    return (0, i.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var nu = n(819638);
let nd = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nc(e) {
    (0, tN.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function nh(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        l = (0, A.yK)([e4.A], () => e4.A.getGuildsArray()),
        r = (0, A.bG)([ek.default], () => ek.default.getCurrentUser()),
        a = s.useMemo(() => l.some((e) => (0, t6.bM)(e, r)), [l, r]),
        o = (0, E.useModalsStore)((e) => (0, E.hasModalOpenSelector)(e, nu.fc)),
        { analyticsLocations: u } = (0, b.Ay)();
    return (0, i.jsx)("div", {
        className: ea.Uq,
        children: (0, i.jsxs)(t9.A, {
            tutorialId: a ? "create-more-servers" : "create-first-server",
            inlineSpecs: nd,
            position: "right",
            disabled: t,
            children: [
                (0, i.jsx)(tX, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: () => {
                        (0, t2.Sn)()
                            ? (0, t3.A)({
                                  analyticsSource: { page: eB.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eB.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eB.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: u,
                              })
                            : t1.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: nc,
                    tooltip: eH.intl.string(eH.t.l5WIbf),
                    icon: t0.U,
                }),
                null != n &&
                    (0, i.jsx)(nr, { name: eH.intl.string(eH.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var nA = n(486020),
    nm = n(962795);
function ng(e) {
    let [t, l] = s.useState(!1),
        r = (0, c.Vd)(`guild-${e.id}`);
    return (0, i.jsx)(Y.c, {
        children: (0, i.jsx)(tQ, {
            text: e.name,
            children: (0, i.jsx)(U.Q, {
                className: nm.o,
                selected: t,
                lowerBadge: (0, i.jsx)(X.fk, { icon: (0, $.k)(er.A), disableColor: !0, className: nm._ }),
                children: (0, i.jsx)(k.j, {
                    name: e.name,
                    onMouseEnter: () => {
                        l(!0);
                    },
                    onMouseLeave: () => {
                        l(!1);
                    },
                    onClick: () => {
                        (0, E.openModalLazy)(async () => {
                            let { default: t } = await n.e("42945").then(n.bind(n, 537560));
                            return (n) => (0, i.jsx)(t, { name: e.name, guildId: e.id, ...n });
                        });
                    },
                    icon:
                        null != e.icon
                            ? nA.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...r,
                }),
            }),
        }),
    });
}
var np = n(696292),
    nf = n(836480),
    nE = n(533129),
    nI = n(726845),
    n_ = n(837057),
    nC = n(310419),
    nS = n(488995),
    nx = n(324580),
    nN = n(654487);
let nT = s.forwardRef(function (e, t) {
    let { selected: n, onClick: l, questId: r, className: a } = e,
        o = s.useCallback(() => {
            (0, nE.WL)({ source: nS.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== r ? nS.GlobalDiscoveryTab.QUESTS : nI.A.getField("selectedTab");
            switch (e) {
                case nS.GlobalDiscoveryTab.QUESTS:
                    return (0, n_.transitionToGlobalDiscovery)({
                        tab: nS.GlobalDiscoveryTab.QUESTS,
                        location: nN.rE.DISCOVERY_COMPASS,
                        questContent: np.u.DISCOVERY_COMPASS,
                        questId: r,
                    });
                case nS.GlobalDiscoveryTab.SERVERS:
                    return (0, n_.transitionToGlobalDiscovery)({
                        tab: nS.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nx.J8.GUILDS_BAR,
                    });
                case nS.GlobalDiscoveryTab.APPS:
                    return (0, n_.transitionToGlobalDiscovery)({
                        tab: nS.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nC.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, n_.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [r]);
    return (0, i.jsx)(tX, {
        id: "guild-discover-button",
        ref: t,
        className: a,
        onClick: () => {
            o(), void 0 !== l && l();
        },
        selected: n,
        tooltip: eH.intl.string(eH.t["4nEZLk"]),
        icon: nf.Q,
    });
});
var nR = n(506774),
    ny = n(509963),
    nb = n(111159),
    nv = n(793943),
    nj = n(927578),
    nO = n(350972),
    nM = n(677056),
    nL = n(526162),
    nD = n(635917);
function nG() {
    let [e, t] = (0, A.yK)([ek.default, nL.A], () => [
            nL.A.getCurrentDesktopIcon(),
            nj.Ay.isPremium(ek.default.getCurrentUser()),
        ]),
        n = (0, nv.fy)().activePanel === nv.HP.APP_ICON,
        l = (0, nD.gG)(e),
        s = l.id !== nO.LW.DEFAULT && (t || n),
        r = (0, i.jsx)(nb.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != l && s ? (0, i.jsx)(nM.A, { id: l.id, size: nD.N8.SIZE_48 }) : r;
}
var nP = n(531260),
    nw = n(411976),
    nU = n(912309),
    nk = n(400492),
    nV = n(354670),
    nF = n(619921),
    nB = n(340829),
    nH = n(966846),
    nK = n(674378),
    nW = n(394953),
    nY = n(235079),
    nz = n(30186);
let nq = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nQ(e) {
    let { selected: t, user: n, badge: l, link: r, showProgressBadge: a } = e,
        [o, u] = s.useState(!1),
        [d, h] = s.useState(!1),
        [A, m] = s.useState(null),
        [g, p] = s.useState(0),
        f = (0, c.Vd)("home"),
        E = (0, nv.fy)().activePanel === nv.HP.APP_ICON,
        I = () => {
            m(null), p(0), clearTimeout(A);
        };
    if (null == n) return null;
    let _ = eH.intl.string(eH.t.YUU0RF);
    d && (_ = nR.w.get(eB.wqg) ? eH.intl.string(eH.t["nkq1l+"]) : eH.intl.string(eH.t.Be8Q5E));
    let C = null;
    !t && a && (C = (0, i.jsx)(ny.A, { className: nz.Cp, determineOwnVisibility: !1 }));
    let S = t || o || E,
        x = (0, i.jsx)(U.Q, {
            selected: !0,
            lowerBadge: l > 0 ? eo(l) : null,
            upperBadge: C,
            lowerBadgeSize: { width: (0, X.o6)(l) },
            children: (0, i.jsx)(k.j, {
                onMouseEnter: () => u(!0),
                onMouseLeave: () => u(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != A && clearTimeout(A), m(setTimeout(I, 500)), p(g + 1), 15 === g)) {
                        I();
                        let e = !nR.w.get(eB.wqg);
                        nR.w.set(eB.wqg, e),
                            e && nR.w.set(nY.L, !0),
                            e ? (0, nk.Ak)("discodo") : (0, nk.Ak)("user_leave"),
                            h(!0),
                            setTimeout(() => {
                                h(!1);
                            }, 1e3);
                    }
                },
                selected: S,
                ariaLabel: eH.intl.string(eH.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...f,
                to: {
                    pathname: r,
                    state: {
                        analyticsSource: {
                            page: eB.liQ.GUILD_CHANNEL,
                            section: eB.JJy.NAVIGATION,
                            object: eB.ZSU.BUTTON_HOME,
                        },
                    },
                },
                children: (0, i.jsx)(nG, {}),
            }),
        });
    return (0, i.jsx)("div", {
        className: nz.Uq,
        children: (0, i.jsx)(t9.A, {
            inlineSpecs: nq,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(Y.c, {
                children: [
                    (0, i.jsx)(W.A, { selected: t, hovered: o, className: nz.Io }),
                    (0, i.jsx)(tQ, { hideOnClick: !0, text: _, selected: t, children: x }),
                ],
            }),
        }),
    });
}
function nJ() {
    let e = (function () {
            let e = (0, em.A)((e) => e.guildId),
                { pathname: t } = (0, d.zy)(),
                n = t.startsWith(eB.BVt.GUILD_DISCOVERY) || t.startsWith(eB.BVt.GLOBAL_DISCOVERY),
                l = t.startsWith(eB.BVt.GUILD_MEMBER_VERIFICATION("")),
                i = (0, nW.lI)();
            return null == e && !(n || l || i);
        })(),
        t = (0, A.bG)([nH.A, nB.A], () => {
            let e = (0, ny.v)(nH.A.activeItems, nB.A),
                { total: t, progress: n } = nK.zY(e),
                l = nK.uA(n, t);
            return l > 0 && l < 100;
        }),
        n = (0, nU.kX)(),
        l = Object.keys(eX.TP),
        s = (0, nP.A)(),
        { unviewedTrialCount: r, unviewedDiscountCount: a } = (0, A.cf)([nV.A], () => ({
            unviewedTrialCount: nV.A.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: nV.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = s.fractionalState === eX.xc.NONE ? r + a : 0,
        u = (0, A.bG)([ek.default], () => ek.default.getCurrentUser()),
        c = (0, nw.W)(),
        h = n + o + c,
        m = h === o && o > 0 && n + c === 0,
        g = nF.A.getHomeLink();
    return (
        m && (g = eB.BVt.APPLICATION_STORE),
        (0, i.jsx)(nQ, {
            selected: e,
            user: u,
            selectedChannelId: eE.A.getChannelId(eB.ME),
            badge: h,
            link: g,
            showProgressBadge: t,
        })
    );
}
var nX = n(473201);
function n$(e) {
    let { fullWidth: t } = e;
    return (0, i.jsx)(Y.c, { children: (0, i.jsx)("div", { className: a()(nX.t, { [nX.I]: t }) }) });
}
var nZ = n(349288),
    n0 = n(695366),
    n1 = n(919638),
    n2 = n(818348),
    n3 = n(585212);
function n9() {
    let e = (0, A.bG)([n1.A, e4.A], () => n1.A.unavailableGuilds.filter((e) => null == e4.A.getGuild(e)).length),
        t = (0, c.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, i.jsx)(Y.c, {
              children: (0, i.jsx)(tQ, {
                  text: eH.intl.format(eH.t["TnH05/"], { count: e }),
                  children: (0, i.jsx)(nZ.Anchor, {
                      href: n2.qF.STATUS,
                      target: "_blank",
                      className: n3.h,
                      "aria-label": eH.intl.formatToPlainString(eH.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, i.jsx)(n0.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var n6 = n(312742),
    n5 = n(317097),
    n8 = n(319060),
    n7 = n(866323),
    n4 = n(817281),
    le = n(534409),
    lt = n(240248),
    ln = n(678708),
    ll = n(187322),
    li = n(140735),
    ls = n(548118),
    lr = n(273923);
function la(e) {
    let { guildId: t, animate: n } = e,
        l = (0, A.bG)([e4.A], () => e4.A.getGuild(t), [t]),
        s = (0, C.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return null == l
        ? (0, i.jsx)("div", { className: a()(lr.VL, lr.zU), children: (0, i.jsx)(n0.E, { color: "currentColor" }) })
        : (0, i.jsx)(ls.Ay, {
              guild: l,
              animate: n,
              size: ls.Ay.Sizes.MINI,
              iconSize: s,
              lossless: !0,
              className: lr.VL,
              tabIndex: -1,
          });
}
function lo(e) {
    let { folderNode: t, hovered: n, sorting: l } = e,
        { children: s } = t,
        r = n && l,
        o = (0, i.jsx)("div", {
            className: lr.hJ,
            children: (0, i.jsx)("div", {
                className: lr.Eh,
                children: (0, i.jsx)(ln.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        u = (0, i.jsx)("div", {
            className: lr.qJ,
            children: (0, i.jsx)("div", {
                className: lr.jg,
                children: s.slice(0, 4).map((e) => (0, i.jsx)(la, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: a()({ [lr.NG]: r, [lr.yd]: !r }),
        children: [!r && o, u],
    });
}
function lu(e) {
    let {
            folderNode: t,
            expanded: n,
            sorting: l,
            mediaState: r,
            mentionCount: a = 0,
            isMentionLowImportance: o,
            tooltipName: u,
            folderGroupId: d,
            folderButtonContent: c,
            onClick: h,
            onContextMenu: A,
            onHoverChange: m,
            onKeyDown: g,
            treeItemProps: { onFocus: p, ...E },
            "aria-setsize": I,
            "aria-posinset": _,
        } = e,
        [C, S] = s.useState(!1),
        x = s.useCallback(() => {
            l || S(!0), m?.(!0);
        }, [l, m]),
        N = s.useCallback(() => {
            l || S(!1), m?.(!1);
        }, [l, m]),
        T = n || null == r ? null : eu(r),
        R =
            !n && a > 0
                ? eo(a, o ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css)
                : null;
    return (0, i.jsx)(ll.vN, {
        children: (0, i.jsxs)(tz.D, {
            className: lr.H3,
            onClick: h,
            onContextMenu: A,
            onMouseEnter: x,
            onMouseLeave: N,
            onKeyDown: g,
            onFocus: p,
            focusProps: { enabled: !1 },
            ...E,
            role: "treeitem",
            "aria-setsize": I,
            "aria-posinset": _,
            "aria-expanded": n,
            "aria-owns": d,
            children: [
                (0, i.jsx)(li.A, {
                    children: eH.intl.formatToPlainString(eH.t["90/DwM"], { folderName: u, mentions: a }),
                }),
                (0, i.jsx)(U.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: T,
                    lowerBadge: R,
                    lowerBadgeSize: { width: (0, X.o6)(a) },
                    children: (0, i.jsx)("div", {
                        className: lr.vA,
                        children:
                            null != c
                                ? (0, i.jsx)("div", { className: lr.hJ, children: c })
                                : (0, i.jsx)(lo, { folderNode: t, hovered: C, sorting: l }),
                    }),
                }),
            ],
        }),
    });
}
var ld = n(573435),
    lc = n(643918);
function lh(e) {
    let { className: t, isFolder: n } = e,
        l = (0, C.r)(f.A.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(ld.Ay, {
        mask: ld.Ay.Masks.SQUIRCLE,
        className: a()(t, lc.OL, { [lc.lQ]: n }),
        width: l,
        height: l,
        children: (0, i.jsx)("div", { className: lc.ZU }),
    });
}
var lA = n(114329),
    lm = n(620370);
let lg = (0, lt.xI)(n8.A.FOLDER_ITEM_ANIMATION_DURATION),
    lp = (0, tS.animated)(I.B),
    lf = s.memo(function (e) {
        var t;
        let n,
            l,
            r,
            {
                folderNode: o,
                setNodeRef: u,
                selected: d,
                expanded: h,
                mediaState: A,
                mentionCount: m = 0,
                isMentionLowImportance: g,
                unread: p = !1,
                defaultFolderName: E,
                draggable: I = !1,
                sorting: _ = !1,
                onDragStart: S,
                onDragEnd: x,
                onExpandCollapse: N,
                onContextMenu: T,
                renderChildNode: R,
                folderButtonSize: y,
                folderButtonContent: b,
                "aria-setsize": v,
                "aria-posinset": j,
            } = e,
            { id: O, name: M, children: L } = o,
            [D, G] = s.useState(!1),
            [P, w] = s.useState(!1),
            U = D || P,
            k = (0, le.qK)("FolderItem");
        s.useEffect(() => {
            _ && G(!1);
        }, [_]);
        let [{ dragging: V }, F] = (0, n6.i)({
                type: tl.PJ.FOLDER,
                item: () => (S?.(), { type: tl.PJ.FOLDER, nodeId: o.id }),
                end() {
                    x?.(), (0, n4.um)(te.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            B = s.useCallback((e) => {
                w(e);
            }, []),
            H = s.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !h) || ("ArrowLeft" === e.key && h)) && N();
                },
                [N, h],
            ),
            K = null != M && "" !== M ? M : null != E && "" !== E ? E : eH.intl.string(eH.t.xV9hVh),
            z = (0, c.Vd)(`${O}`),
            q = `folder-items-${O}`,
            Q =
                ((t = L.length),
                (n = (0, C.r)(f.A.modules.guildbar.FOLDER_SIZE)),
                (l = (0, C.r)(f.A.modules.guildbar.AVATAR_SIZE)),
                t * (l + (r = (0, C.r)(f.A.space.SPACE_XS))) - r + (r - (n - l) / 2) + (0, C.r)(f.A.space.SPACE_4)),
            J = (0, n7.p)(!V && h, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: lg },
            }),
            X = s.useCallback((e) => u?.(O, e), [u, O]),
            $ = (0, i.jsxs)(Y.c, {
                children: [
                    (0, i.jsx)(W.A, { disabled: V || h, hovered: D, selected: d, unread: p, className: lm.Io }),
                    (0, i.jsx)(tQ, {
                        text: K,
                        disabled: _,
                        selected: d,
                        disableWrapper: !0,
                        children: (0, i.jsx)("div", {
                            ref: I
                                ? (e) => {
                                      F(e);
                                  }
                                : void 0,
                            className: a()(lr.MJ, { [lr.L0]: "icon" === y || k, [lm.oR]: !V && P && !h }),
                            "data-dnd-name": K,
                            children: V
                                ? (0, i.jsx)(lh, { isFolder: !0 })
                                : (0, i.jsx)(lu, {
                                      folderNode: o,
                                      expanded: h,
                                      sorting: _,
                                      mediaState: A,
                                      mentionCount: m,
                                      isMentionLowImportance: g,
                                      tooltipName: K,
                                      folderGroupId: q,
                                      onClick: N,
                                      onContextMenu: T,
                                      onHoverChange: G,
                                      onKeyDown: H,
                                      treeItemProps: z,
                                      folderButtonContent: b,
                                      "aria-setsize": v,
                                      "aria-posinset": j,
                                  }),
                        }),
                    }),
                    I ? (0, i.jsx)(nr, { name: K, targetNode: o, onDragOverChanged: B }) : null,
                ],
            }),
            Z = null != o.color ? o.color : lA.DO,
            ee = Z === lA.DO ? void 0 : (0, n5.Hl)(Z);
        return (0, i.jsxs)("div", {
            ref: X,
            className: a()(lr.qc, { [lr.Av]: h, [lr.Lg]: U }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": P,
            children: [
                !V && h && (0, i.jsx)("span", { className: lr.GO }),
                $,
                J((e, t, n) => {
                    let { key: l } = n;
                    return (
                        t &&
                        (0, i.jsx)(
                            lp,
                            {
                                id: q,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: lr.TN,
                                style: { height: e.height.to((e) => e * Q) },
                                "aria-label": o.name,
                                children: L.map((t, n) => R(t, n, L.length, e.height)),
                            },
                            l,
                        )
                    );
                }),
                I && h ? (0, i.jsx)(na, { name: K, targetNode: o }) : null,
            ],
        });
    });
var lE = n(354583);
let lI = s.memo(function (e) {
    let t,
        l,
        r,
        a,
        o,
        u,
        d,
        c,
        h,
        m,
        g,
        { folderNode: p, ...f } = e,
        { id: E, name: I, color: _, children: C } = p,
        S = C.map((e) => e.id),
        x = (0, em.A)((e) => e.guildId),
        N = (0, A.bG)([tr.A], () => tr.A.isFolderExpanded(E)),
        T = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = e4.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eF.Vq),
                n = 2 * eB.F05,
                l = [];
            for (let e of t) (e.length < n || 0 === l.length) && (l.push(e), (n -= e.length));
            return `${l.join(", ")}${l.length < t.length ? ", ..." : ""}`;
        })(p),
        R =
            ((t = (0, A.bG)([tC.A], () => tC.A.getGuildId())),
            (l = p.children.map((e) => e.id)),
            (r = null != t && l.includes(t)),
            (a = !1),
            (o = !1),
            (u = !1),
            (d = (0, A.bG)([tC.A], () => tC.A.getChannelId())),
            (h = null != (c = (0, lE.A)()?.guild_id) && l.includes(c)),
            (m = (0, A.bG)([eI.A], () => null != d && eI.A.hasVideo(d), [d])),
            (g = (0, A.bG)([ep.A], () => ep.A.getCurrentUserActiveStream())),
            r && ((a = !m), (o = m), (u = null != g && null != g.guildId && l.includes(g.guildId))),
            s.useMemo(
                () => ({ audio: a, video: o, screenshare: u, liveStage: h, isCurrentUserConnected: r }),
                [a, o, u, h, r],
            )),
        {
            mentionCount: y,
            isMentionLowImportance: b,
            unread: v,
        } = (0, A.cf)([ey.default], () => ({
            mentionCount: S.map((e) => ey.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: S.every((e) => ey.default.getIsMentionLowImportance(e)),
            unread: S.some((e) => ey.default.hasUnread(e)),
        })),
        j = s.useCallback(() => {
            t4.A.toggleGuildFolderExpand(E);
        }, [E]),
        O = s.useCallback(
            (e) => {
                (0, tN.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, i.jsx)(e, { ...t, folderId: E, folderName: I, folderColor: _, unread: v || y > 0 });
                });
            },
            [E, I, _, v, y],
        );
    return (0, i.jsx)(lf, {
        ...f,
        folderNode: p,
        expanded: N,
        selected: null != x && S.includes(x),
        mentionCount: y,
        isMentionLowImportance: b,
        unread: v,
        mediaState: R,
        defaultFolderName: T,
        onExpandCollapse: j,
        onContextMenu: O,
    });
});
var l_ = n(113494),
    lC = n(821124),
    lS = n(212455);
function lx(e) {
    let t = e?.features.has(eB.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, A.bG)([lS.A, ek.default, e7.Ay], () => {
            if (null == e) return;
            let t = lS.A.getRequest(e.id),
                n = ek.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let l = e7.Ay.getMember(e.id, t.userId);
            if (!(null != l && !l.isPending) || (0, lC.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var lN = n(347951),
    lT = n(478437),
    lR = n(811024),
    ly = n(508654),
    lb = n(233993),
    lv = n(446600),
    lj = n(95701),
    lO = n(495544);
function lM(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eb.A;
    return null != e && e.type !== lT.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eB.hVb.VIEW_CHANNEL, e);
}
function lL(e) {
    let t = (0, A.bG)([ej.Ay], () => ej.Ay.isMuted(e)),
        n = (0, ly.BP)(e),
        l = (0, A.yK)([H.Ay, tv.A], () =>
            H.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tv.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tv.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        i = (0, K.H)(l[0]?.location),
        s = (0, lR.Gp)(i),
        {
            guildHasVoice: r,
            guildHasVideo: a,
            selectedVoiceChannelHasVideo: o,
        } = (0, A.cf)([eE.A, eI.A, e4.A, eb.A, ef.A], () => {
            var n;
            let l = eE.A.getVoiceChannelId(),
                i = e4.A.getGuild(e)?.afkChannelId,
                s = eI.A.getUsersWithVideo(e),
                r =
                    ((n = eI.A.getVoiceStates(e)),
                    u()(n)
                        .filter((e) => !tv.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in r) if (lM(ef.A.getBasicChannel(r[e].channelId), i ?? void 0, eb.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of s) if (lM(ef.A.getBasicChannel(r[e]?.channelId), i ?? void 0, eb.A)) return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != l && eI.A.hasVideo(l),
            };
        }, [e, t]),
        d = lO.default.getId();
    return (0, A.cf)([eE.A, ef.A, H.Ay, lv.A, ep.A, eb.A], () => {
        let i = eE.A.getVoiceChannelId(),
            u = ef.A.getChannel(i)?.guild_id === e,
            c = !1,
            h = !1,
            A = !1,
            m = !1,
            g = !1,
            p = !1;
        if (!u && t)
            return {
                audio: c,
                video: m,
                screenshare: g,
                liveStage: A,
                activeEvent: h,
                activity: p,
                isCurrentUserConnected: !1,
            };
        let f = e_.default.keys(lv.A.getStageInstancesByGuild(e)).some((e) => {
                let t = ef.A.getChannel(e);
                return null != t && eb.A.can(lb.Gk, t);
            }),
            E = u && (ef.A.getChannel(i)?.isGuildStageVoice() ?? !1),
            I = !!u && null != ep.A.getActiveStreamForUser(d, e),
            _ = ep.A.getAllApplicationStreams()
                .filter((e) => !tv.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e),
            C = u && o,
            S = (() => {
                if (s) return l.length > 0;
                for (let e of l) {
                    let t = ef.A.getChannel((0, K.H)(e.location));
                    if (null != t && (0, lj.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            x = H.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            u
                ? ((c = !0), (h = n?.channel_id === i), (A = E), (m = C), (g = I), (p = x))
                : ((c = r), (h = null != n), (A = f), (m = a), (g = _), (p = S)),
            {
                audio: c,
                video: m,
                screenshare: g,
                liveStage: A,
                activeEvent: h,
                activity: p,
                isCurrentUserConnected: u || E,
            }
        );
    }, [e, t, o, d, s, l, n, r, a]);
}
var lD = n(607399),
    lG = n(702841),
    lP = n(658128),
    lw = n(976860),
    lU = n(676279);
function lk(e) {
    let { guild: t, show: n, active: l, onAnimationStart: s, onAnimationRest: r } = e,
        o = {},
        u = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (u.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let d = (0, C.r)(f.A.unsafe_rawColors.BRAND_500).hex(),
        c = (0, C.r)(f.A.unsafe_rawColors.PRIMARY_630).hex();
    l && null == t.icon && ((o.backgroundColor = d), (u.backgroundColor = c));
    let h = (0, n7.p)(n, { from: o, enter: u, leave: o, config: { duration: 100 }, onStart: s, onRest: r });
    return (0, i.jsx)(i.Fragment, {
        children: h(
            (e, n, l) =>
                n &&
                (0, i.jsx)(
                    "div",
                    {
                        className: lr.qc,
                        children: (0, i.jsx)("div", {
                            className: a()(lr.MJ, lr.L0),
                            style: { margin: 0 },
                            children: (0, i.jsx)(tS.animated.div, {
                                className: lr.NG,
                                style: e,
                                children: (0, i.jsx)("div", {
                                    className: lr.qJ,
                                    children: (0, i.jsx)("div", {
                                        className: lr.jg,
                                        children: (0, i.jsx)(ls.Ay, {
                                            guild: t,
                                            size: ls.Ay.Sizes.SMOL,
                                            className: lr.VL,
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    },
                    l.key,
                ),
        ),
    });
}
var lV = n(454938),
    lF = n(714991),
    lB = n(57991),
    lH = n(164956),
    lK = n(624265),
    lW = n(970278),
    lY = n(808728);
function lz(e, t, n) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: eK.nM,
              children: [
                  (0, i.jsx)(e, { className: eK.RI, color: "currentColor" }),
                  (0, i.jsx)(eP.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function lq(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(eD.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eH.intl.string(eH.t.fpKdS1),
          })
        : (0, i.jsx)(tD.A, { muteConfig: t, className: n });
}
function lQ(e) {
    let t,
        n,
        l,
        r,
        o,
        d,
        c,
        h,
        m,
        g,
        p,
        f,
        E,
        I,
        _,
        C,
        S,
        x,
        N,
        T,
        { guild: R } = e,
        y = R.id,
        {
            voiceUsersToShow: b,
            stageSpeakers: v,
            numStageListeners: j,
            streamUsersToShow: O,
            embeddedActivitiesUsers: M,
        } = ((t = R.id),
        (n = (0, A.yK)(
            [lY.Ay, lW.A],
            () => [
                ...lY.Ay.getChannels(t)
                    [lY.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === eB.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(lW.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (l = (0, lK.Ay)(t)),
        (r = s.useMemo(() => l.map((e) => e.id), [l])),
        (o = (0, A.bG)([eV.Ay], () => eV.Ay.getVoiceStates(t), [t])),
        (d = (0, A.yK)([tv.A], () => tv.A.getBlockedOrIgnoredIDs())),
        (c = u().flatMap(n, (e) =>
            e === R.afkChannelId
                ? []
                : tj(
                      (o[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      d,
                  ),
        )),
        (h = (0, A.yK)([ew.A], () =>
            u().flatMap(r, (e) =>
                e === R.afkChannelId
                    ? []
                    : tj(
                          ew.A.getMutableParticipants(e, eU.ip.SPEAKER)
                              .filter((e) => e.type === eU.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          d,
                      ),
            ),
        )),
        (m = (0, A.bG)([ew.A], () => {
            let e = 0;
            for (let t of r) e += ew.A.getParticipantCount(t, eU.ip.AUDIENCE);
            return e;
        })),
        (g = (0, A.yK)(
            [ep.A],
            () =>
                tO(
                    ep.A.getAllApplicationStreams()
                        .filter((e) => e.guildId === t)
                        .map((e) => e.ownerId),
                    d,
                ),
            [d, t],
        )),
        (p = (0, A.yK)(
            [H.Ay],
            () =>
                tO(
                    H.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    d,
                ),
            [t, d],
        )),
        (f = (0, A.yK)([ek.default], () => tj(p.map((e) => ek.default.getUser(e))), [p])),
        (E = (0, A.yK)([ek.default], () => g.map((e) => ek.default.getUser(e)), [g])),
        (_ = tj((I = c.filter((e) => !g.includes(e.id) && !p.includes(e.id))))),
        (C = E.filter((e) => null != e && !p.includes(e.id))),
        (S = (0, A.bG)([tM.A], () => tM.A.getUserAffinitiesMap(), [])),
        (x = s.useMemo(() => (0, tL.L)(_, S, "GuildTooltip - nonBlockedUsers"), [_, S])),
        (N = s.useMemo(() => (0, tL.L)(h, S, "GuildTooltip - stageSpeakers"), [h, S])),
        (T = s.useMemo(() => (0, tL.L)(C, S, "GuildTooltip - streamUsers"), [C, S])),
        {
            voiceUsersToShow: x,
            stageSpeakers: N,
            numStageListeners: m,
            streamUsersToShow: T,
            embeddedActivitiesUsers: s.useMemo(() => (0, tL.L)(f, S, "GuildTooltip - embeddedActivitiesUsers"), [f, S]),
            hasActivity: h.length > 0 || I.length > 0 || C.length > 0 || f.length > 0,
        }),
        L = lz(el.H, b, y),
        D =
            0 === v.length
                ? null
                : (0, i.jsxs)("div", {
                      className: eK.nM,
                      children: [
                          (0, i.jsx)(ee.q, { size: "lg", color: "currentColor", className: eK.RI }),
                          (0, i.jsx)(eP.Ay, { guildId: y, users: v, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: eK.GZ,
                              children: [
                                  (0, i.jsx)(eL.L, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(eD.E, {
                                      className: eK._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: j,
                                  }),
                              ],
                          }),
                      ],
                  }),
        G = lz(eG.F, O, y),
        P = lz(ei.k, M, y),
        { isMuted: w, muteConfig: U } = (0, A.cf)(
            [ej.Ay],
            () => ({ isMuted: ej.Ay.isMuted(y), muteConfig: ej.Ay.getMuteConfig(y) }),
            [y],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            D,
            L,
            G,
            P,
            w ? (0, i.jsx)(lq, { muteConfig: U, className: a()(eK.LM, { [eK.Sx]: null != L || null != G }) }) : null,
        ],
    });
}
function lJ(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, i.jsx)(eD.E, {
        className: eK.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case es.B5.SUBMITTED:
                    return eH.intl.string(eH.t["9KFC98"]);
                case es.B5.REJECTED:
                    return eH.intl.string(eH.t["TQY/Rd"]);
                case es.B5.APPROVED:
                    return eH.intl.string(eH.t.WXHcq5);
                default:
                    return eH.intl.string(eH.t.fjHFC8);
            }
        })(t),
    });
}
function lX(e) {
    let { guild: t } = e,
        n = (0, lV.A)(t),
        l = lx(t),
        s = null != l ? (0, i.jsx)(lJ, { guildJoinRequestStatus: l }) : null,
        r = (0, i.jsx)(lQ, { guild: t }),
        o = (0, A.bG)([lH.A], () => lH.A.isViewingRoles(t.id)),
        u = (0, lN.Ig)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(eK.nM, eK.Dl),
                children: [
                    n
                        ? (0, i.jsx)(lB.A, { guild: t, className: eK.WX })
                        : (0, i.jsx)(lF.A, { guild: t, size: 20, className: eK.aL }),
                    (0, i.jsx)("span", { className: a()(eK.cN, eK.NT), children: t.name }),
                ],
            }),
            u
                ? (0, i.jsx)(eD.E, {
                      className: eK.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eH.intl.string(eH.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, i.jsx)(eD.E, {
                      className: eK.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eH.intl.string(eH.t["5LwN89"]),
                  })
                : (s ?? r),
        ],
    });
}
function l$(e) {
    let { guild: t, disabled: n = !1, "aria-label": l = !1, children: r } = e,
        a = s.useMemo(
            () => (n ? null : (0, i.jsx)("div", { className: eK.A_, children: (0, i.jsx)(lX, { guild: t }) })),
            [n, t],
        );
    return (0, i.jsx)(eM.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === l ? void 0 : l,
        asContainer: !0,
        children: r,
    });
}
let lZ = { analyticsSource: { page: eB.liQ.GUILD_CHANNEL, section: eB.JJy.CHANNEL_LIST, object: eB.ZSU.CHANNEL } };
function l0(e, t) {
    (0, tN.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("62370"),
            n.e("16384"),
            n.e("45235"),
            n.e("63397"),
            n.e("43763"),
            n.e("90673"),
            n.e("61659"),
            n.e("78220"),
            n.e("40841"),
            n.e("17764"),
            n.e("89317"),
            n.e("95957"),
            n.e("81167"),
            n.e("69273"),
            n.e("63941"),
            n.e("63009"),
            n.e("84580"),
            n.e("45650"),
            n.e("97189"),
            n.e("24059"),
            n.e("51402"),
            n.e("27660"),
            n.e("85484"),
            n.e("89516"),
            n.e("39501"),
            n.e("3256"),
            n.e("19145"),
            n.e("79705"),
            n.e("55658"),
            n.e("76032"),
            n.e("33957"),
            n.e("59204"),
            n.e("75058"),
            n.e("23574"),
            n.e("63635"),
            n.e("81462"),
            n.e("44135"),
            n.e("9176"),
            n.e("33092"),
            n.e("87845"),
            n.e("20797"),
            n.e("98042"),
            n.e("75090"),
            n.e("61175"),
            n.e("92652"),
            n.e("5007"),
            n.e("56574"),
            n.e("4974"),
            n.e("80186"),
            n.e("23924"),
            n.e("15510"),
            n.e("48226"),
            n.e("19402"),
            n.e("49681"),
            n.e("96382"),
            n.e("22687"),
            n.e("62052"),
            n.e("63202"),
            n.e("82596"),
            n.e("20287"),
            n.e("28367"),
            n.e("35429"),
            n.e("10471"),
            n.e("63232"),
            n.e("64827"),
            n.e("30938"),
            n.e("23808"),
            n.e("11301"),
            n.e("60235"),
            n.e("61737"),
            n.e("79428"),
            n.e("29963"),
            n.e("47834"),
            n.e("98329"),
            n.e("20317"),
            n.e("84569"),
            n.e("2368"),
            n.e("27084"),
            n.e("24313"),
            n.e("48405"),
            n.e("63185"),
            n.e("19551"),
            n.e("84150"),
            n.e("45959"),
            n.e("18573"),
            n.e("55057"),
            n.e("37794"),
            n.e("26073"),
            n.e("7743"),
            n.e("34303"),
            n.e("48172"),
            n.e("28866"),
            n.e("54961"),
            n.e("8304"),
            n.e("58038"),
            n.e("93159"),
            n.e("55936"),
            n.e("11566"),
            n.e("21106"),
            n.e("31988"),
            n.e("94723"),
            n.e("62931"),
            n.e("81987"),
            n.e("58007"),
            n.e("5812"),
            n.e("17363"),
            n.e("55411"),
            n.e("93103"),
            n.e("58337"),
            n.e("26437"),
            n.e("91763"),
            n.e("13708"),
            n.e("76602"),
            n.e("28229"),
            n.e("71470"),
            n.e("91007"),
            n.e("76418"),
            n.e("21921"),
            n.e("9233"),
            n.e("88342"),
            n.e("69747"),
            n.e("40258"),
            n.e("20683"),
            n.e("66495"),
            n.e("91146"),
            n.e("42724"),
            n.e("43437"),
            n.e("39970"),
            n.e("82263"),
            n.e("42451"),
            n.e("30221"),
            n.e("8371"),
            n.e("8555"),
            n.e("86127"),
            n.e("6174"),
            n.e("39851"),
            n.e("58216"),
            n.e("72789"),
            n.e("6949"),
            n.e("29871"),
            n.e("17249"),
            n.e("41250"),
            n.e("35027"),
            n.e("84971"),
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
            n.e("71273"),
            n.e("27779"),
            n.e("75842"),
            n.e("12743"),
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
            n.e("86672"),
            n.e("3589"),
            n.e("86814"),
            n.e("52548"),
            n.e("35771"),
            n.e("22266"),
            n.e("53984"),
            n.e("59414"),
            n.e("80854"),
            n.e("79780"),
            n.e("35395"),
            n.e("43780"),
            n.e("14041"),
            n.e("46844"),
            n.e("45413"),
            n.e("22822"),
            n.e("75627"),
            n.e("90664"),
            n.e("79745"),
            n.e("34150"),
            n.e("64850"),
            n.e("72401"),
            n.e("22855"),
            n.e("70104"),
            n.e("68904"),
            n.e("68802"),
            n.e("52617"),
            n.e("8563"),
            n.e("2564"),
            n.e("47417"),
            n.e("19558"),
            n.e("58946"),
            n.e("14285"),
            n.e("95752"),
            n.e("78100"),
            n.e("78453"),
            n.e("8362"),
            n.e("80149"),
            n.e("2698"),
            n.e("62875"),
            n.e("4744"),
            n.e("87046"),
            n.e("12542"),
            n.e("501"),
            n.e("46769"),
            n.e("33297"),
            n.e("73384"),
            n.e("82783"),
            n.e("7833"),
            n.e("86243"),
            n.e("32209"),
            n.e("30788"),
            n.e("48295"),
            n.e("60249"),
            n.e("4193"),
            n.e("39171"),
            n.e("25246"),
            n.e("37021"),
            n.e("21049"),
            n.e("8377"),
            n.e("28610"),
            n.e("44571"),
            n.e("44795"),
            n.e("80436"),
            n.e("71268"),
            n.e("95370"),
            n.e("97784"),
            n.e("10014"),
            n.e("84783"),
            n.e("44928"),
            n.e("33416"),
            n.e("83952"),
            n.e("37752"),
            n.e("3217"),
            n.e("47678"),
            n.e("5557"),
            n.e("44780"),
            n.e("95340"),
            n.e("62718"),
            n.e("93907"),
            n.e("59957"),
            n.e("89916"),
            n.e("90301"),
            n.e("49145"),
            n.e("68763"),
            n.e("15188"),
            n.e("9004"),
            n.e("15109"),
            n.e("18489"),
            n.e("29666"),
            n.e("58273"),
            n.e("60773"),
            n.e("92295"),
            n.e("19454"),
            n.e("20930"),
            n.e("74610"),
            n.e("50535"),
            n.e("81202"),
            n.e("26001"),
            n.e("99549"),
            n.e("14591"),
            n.e("52111"),
            n.e("8018"),
            n.e("79211"),
            n.e("16988"),
            n.e("30997"),
            n.e("28136"),
            n.e("57458"),
            n.e("59797"),
            n.e("90213"),
            n.e("69765"),
            n.e("1243"),
            n.e("62304"),
            n.e("16084"),
            n.e("38090"),
            n.e("75859"),
            n.e("29080"),
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
            n.e("38601"),
            n.e("52212"),
            n.e("66580"),
            n.e("80093"),
            n.e("73669"),
            n.e("66016"),
            n.e("83518"),
            n.e("22547"),
            n.e("60989"),
            n.e("82486"),
            n.e("3710"),
            n.e("45830"),
            n.e("7775"),
            n.e("61058"),
            n.e("50342"),
            n.e("3304"),
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
            n.e("37038"),
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
            n.e("9793"),
            n.e("71719"),
            n.e("19690"),
            n.e("13848"),
            n.e("39214"),
            n.e("99108"),
            n.e("14878"),
            n.e("88307"),
            n.e("26508"),
            n.e("61347"),
            n.e("14656"),
            n.e("39855"),
            n.e("73091"),
            n.e("14530"),
            n.e("86692"),
            n.e("75933"),
            n.e("52695"),
            n.e("16237"),
            n.e("16373"),
            n.e("78"),
            n.e("81398"),
            n.e("93767"),
            n.e("24484"),
            n.e("44943"),
            n.e("32347"),
            n.e("8458"),
            n.e("11810"),
            n.e("48111"),
            n.e("90152"),
            n.e("24019"),
            n.e("87973"),
            n.e("57197"),
            n.e("14863"),
            n.e("84951"),
            n.e("72238"),
            n.e("71167"),
            n.e("12390"),
            n.e("13446"),
            n.e("34409"),
            n.e("32607"),
            n.e("61309"),
            n.e("94529"),
            n.e("30313"),
            n.e("98371"),
            n.e("21300"),
            n.e("65011"),
            n.e("17699"),
            n.e("57032"),
            n.e("45322"),
            n.e("94832"),
            n.e("26386"),
            n.e("65338"),
            n.e("15046"),
            n.e("94171"),
            n.e("74572"),
        ]).then(n.bind(n, 860417));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
let l1 = s.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: l,
            onDragEnd: r,
            route: o,
            guild: u,
            animatable: d,
            selected: h = !1,
            unread: A = !1,
            mediaState: m,
            unavailable: g = !1,
            badge: E = 0,
            isMentionLowImportance: I,
            contextMenu: _ = l0,
            draggable: S = !1,
            sorting: x = !1,
            preloadOnClick: N = !0,
            guildJoinRequestStatus: T,
            height: R,
            "aria-setsize": y,
            "aria-posinset": b,
        } = e,
        { id: v, parentId: j } = t,
        O =
            e.upperBadge ??
            (g
                ? (0, i.jsx)(X.fk, { icon: (0, $.k)(er.A), disableColor: !0, className: ea.yk })
                : null != m
                  ? eu(m)
                  : void 0),
        M = e.lowerBadge ?? void 0;
    null == M && E > 0
        ? (M =
              eo(E, I ? f.A.colors.BACKGROUND_MOD_STRONG.css : f.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css) ??
              void 0)
        : null == M && null != T && (M = ed({ guildJoinRequestStatus: T }) ?? void 0);
    let L = e.lowerBadgeSize ?? { width: (0, X.o6)(E) },
        [{ dragging: D }, G] = (0, n6.i)({
            type: tl.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    l?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                r?.(), (0, n4.um)(te.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        P = (0, c.Vd)(v ?? eB.dJq, null != j ? 2 : 1),
        [w, V] = s.useState(!1),
        F = !x && w,
        [H, K] = s.useState(!1),
        [z, q] = s.useState(!1),
        [Q] = s.useState(() => new p.J_(70, () => q(!0))),
        J = (0, lU.nr)() && !lD.Fr;
    s.useEffect(() => () => Q.cancel(), [Q]);
    let Z = s.useCallback(() => {
            null != o ? (0, lw.pX)(o, { state: lZ }) : (0, eg.u)(v, { state: lZ });
        }, [v, o]),
        ee = s.useCallback(() => {
            if (null != o || null == u || g || !N) return;
            let e = (0, lP.W)(u.id);
            null != e && B.A.preload(u.id, e);
        }, [o, u, g, N]),
        et = (0, lG.bG)([e7.Ay], () => e7.Ay.isCurrentUserGuest(v)),
        en = s.useCallback(
            (e) => {
                null == u || et || _(e, u);
            },
            [u, _, et],
        ),
        el = s.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != j && document.querySelector(`[aria-owns=folder-items-${j}]`)?.focus();
            },
            [j],
        ),
        ei = s.useCallback(
            (e) => {
                e ? Q.delay() : (Q.cancel(), q(!1));
            },
            [Q],
        );
    function es() {
        x || V(!0);
    }
    function ec() {
        x || V(!1);
    }
    let eh = s.useCallback(
            (e) => {
                n?.(v, e);
            },
            [v, n],
        ),
        eA = (0, C.r)(f.A.modules.guildbar.AVATAR_SIZE);
    if (null == u) return null;
    let em = u.name;
    E > 0
        ? (em = eH.intl.formatToPlainString(eH.t["/uzRss"], { guildName: u.name, mentions: E }))
        : A && (em = eH.intl.formatToPlainString(eH.t.lzqe42, { guildName: u.name }));
    let ep = (0, i.jsx)(lk, {
            guild: u,
            show: z,
            active: h,
            onAnimationStart: function () {
                K(z);
            },
            onAnimationRest: function () {
                z || K(!1);
            },
        }),
        ef = J
            ? (0, i.jsx)(k.j, {
                  ariaLabel: em,
                  name: u.name,
                  onClick: Z,
                  onMouseEnter: es,
                  onMouseLeave: ec,
                  onMouseDown: ee,
                  onContextMenu: en,
                  onKeyDown: el,
                  icon: (0, t6.Iv)(u, 2 * eA, F && d, !0),
                  selected: h || F,
                  ...P,
                  "aria-setsize": y,
                  "aria-posinset": b,
                  "aria-selected": h,
              })
            : (0, i.jsx)(U.Q, {
                  selected: h,
                  children: (0, i.jsx)("div", {
                      ref: S
                          ? (e) => {
                                G(e);
                            }
                          : void 0,
                      "data-dnd-name": u.name,
                      "data-drop-hovering": z,
                      children: (0, i.jsx)(k.j, {
                          ariaLabel: em,
                          name: u.name,
                          onClick: Z,
                          onMouseEnter: es,
                          onMouseLeave: ec,
                          onMouseDown: ee,
                          onContextMenu: en,
                          onKeyDown: el,
                          icon: (0, t6.Iv)(u, 2 * eA, F && d, !0),
                          selected: h || F,
                          ...P,
                          "aria-setsize": y,
                          "aria-posinset": b,
                          "aria-selected": h,
                      }),
                  }),
              }),
        eE = z || H ? ep : ef,
        eI = (0, i.jsx)(no, { children: (0, i.jsx)(lh, {}) }),
        e_ = J
            ? (0, i.jsx)(tS.animated.div, {
                  ref: S
                      ? (e) => {
                            G(e);
                        }
                      : void 0,
                  "data-dnd-name": u.name,
                  style: { scale: null == R ? 1 : R },
                  "data-drop-hovering": z,
                  className: a()(lm.rN, { [lm.p9]: x, [lm.oR]: z, [lm.wH]: z || h }),
                  children: (0, i.jsx)(U.Q, {
                      selected: !0,
                      upperBadge: O,
                      lowerBadge: M,
                      lowerBadgeSize: L,
                      children: eE,
                  }),
              })
            : (0, i.jsx)(tS.animated.div, {
                  style: { scale: null == R ? 1 : R },
                  className: a()(lm.rN, { [lm.p9]: x, [lm.oR]: z, [lm.wH]: z || h }),
                  "data-drop-hovering": z,
                  children: (0, i.jsx)(U.Q, {
                      selected: h,
                      upperBadge: O,
                      lowerBadge: M,
                      lowerBadgeSize: L,
                      children: eE,
                  }),
              });
    return (0, i.jsxs)(Y.c, {
        ref: eh,
        children: [
            (0, i.jsx)(W.A, { hovered: !D && F, selected: !D && h, unread: !D && A, className: lm.Io }),
            (0, i.jsx)(l$, { guild: u, disabled: x, isDragging: D, children: D ? eI : e_ }),
            S ? (0, i.jsx)(nr, { name: u.name, targetNode: t, onDragOverChanged: ei }) : null,
        ],
    });
});
var l2 = n(182240);
let l3 = s.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        l = t.id,
        r = (0, A.bG)([e4.A], () => e4.A.getGuild(l)),
        a = lx(r),
        o = (0, A.bG)([th.A], () => th.A.isFocused()),
        u = (0, A.bG)([n1.A], () => n1.A.isUnavailable(l)),
        d = (0, em.A)((e) => e.guildId),
        c = lL(l),
        {
            badge: h,
            unread: m,
            isMentionLowImportance: g,
        } = (0, A.cf)([ey.default], () => ({
            badge: ey.default.getMentionCount(l),
            isMentionLowImportance: ey.default.getIsMentionLowImportance(l),
            unread: ey.default.hasUnread(l),
        })),
        p = (0, lN.Ig)(r) && 0 === h,
        f = s.useMemo(
            () =>
                null != n
                    ? n
                    : p
                      ? (0, i.jsx)("div", {
                            className: l2.j,
                            children: (0, i.jsx)(l_.E, {
                                size: "custom",
                                color: "currentColor",
                                className: l2.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, p],
        );
    return (0, i.jsx)(l1, {
        ...e,
        guild: r,
        unavailable: u,
        animatable: o,
        selected: d === l,
        badge: h,
        isMentionLowImportance: g,
        lowerBadge: f,
        unread: m,
        mediaState: c,
        guildJoinRequestStatus: a,
    });
});
var l9 = n(922016),
    l6 = n(534514),
    l5 = n(821609),
    l8 = n(339350),
    l7 = n(475743),
    l4 = n(624458),
    ie = n(408213),
    it = (((l = {})[(l.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), l),
    il = n(928568);
function ii(e, t) {
    (0, tN.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, i.jsx)(e, { ...n, guild: t });
    });
}
function is(e) {
    let { guildNode: t } = e,
        n = t.id,
        l = (0, A.bG)([lS.A], () => lS.A.getRequest(n)),
        s = (0, A.bG)([lS.A], () => lS.A.getJoinRequestGuild(n), [n]),
        r = (0, A.bG)([th.A], () => th.A.isFocused()),
        a = (0, A.bG)([ti.A], () => ti.A.getGuildId());
    return null == s
        ? null
        : (0, i.jsx)(l1, {
              guildNode: t,
              guild: s,
              animatable: r,
              draggable: !1,
              selected: n === a,
              preloadOnClick: !1,
              contextMenu: ii,
              lowerBadge:
                  l?.applicationStatus === es.B5.REJECTED
                      ? ed({ guildJoinRequestStatus: l.applicationStatus })
                      : void 0,
              route: eB.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var ir = n(785439);
function ia(e) {
    let { onActivate: t, children: n } = e,
        l = s.useRef(null),
        r = (0, A.bG)([lS.A], () => lS.A.hasJoinRequestCoackmark()),
        a = s.useCallback(() => {
            ie.Ay.clearCoachmark();
        }, []),
        o = (0, l7.A)(r),
        u = s.useRef(null);
    return (
        s.useEffect(() => {
            r && r !== o && (t(), u.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [u, r, o, t]),
        (0, i.jsxs)("div", {
            className: ir.kL,
            children: [
                (0, i.jsx)(l9.Y, {
                    ref: u,
                    targetElementRef: l,
                    shouldShow: r,
                    renderPopout: () =>
                        (0, i.jsxs)("div", {
                            className: ir.jC,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ir.Bm,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: ir.q3,
                                            children: [
                                                (0, i.jsx)(l6.D, {
                                                    variant: "heading-md/medium",
                                                    children: eH.intl.string(eH.t["0YV0YE"]),
                                                }),
                                                (0, i.jsx)(eD.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eH.intl.string(eH.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(l5.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eH.intl.string(eH.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: ir.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, i.jsx)("div", { ...e, className: ir.Ne, ref: l }),
                }),
                n,
            ],
        })
    );
}
function io(e) {
    let { onActivate: t } = e,
        [n, l] = s.useState(!1),
        r = (0, A.bG)([ti.A], () => ti.A.getGuildId()),
        a = (0, A.bG)([lS.A], () => lS.A.hasFetchedRequestToJoinGuilds),
        o = (0, il.A)(),
        u = (0, l7.A)(r),
        d = s.useMemo(() => {
            let e = (0, tl.xW)({
                folderId: it.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eH.intl.string(eH.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, tl.EL)(t, e.id));
            return e;
        }, [o, n]);
    s.useEffect(() => {
        n && !a && l4.A.fetchRequestToJoinGuilds();
    }, [n, a]);
    let c = null != r && o.includes(r);
    return (s.useEffect(() => {
        !n && c && u !== r && l(!0);
    }, [n, c, u, r]),
    0 === o.length)
        ? null
        : (0, i.jsx)(ia, {
              onActivate: t,
              children: (0, i.jsx)(lf, {
                  folderNode: d,
                  expanded: n,
                  selected: c,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      l(!n), ie.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, i.jsx)("div", {
                      className: ir.rH,
                      children: (0, i.jsx)(l8.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== tl.PJ.GUILD
                          ? null
                          : (0, i.jsx)(is, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function iu(e) {
    let { guildId: t } = e,
        n = s.useMemo(() => (0, tl.EL)(t), [t]),
        l = (0, A.bG)([e4.A], () => e4.A.getGuild(t)),
        r = (0, A.bG)([th.A], () => th.A.isFocused()),
        a =
            t ===
            (0, em.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = lL(t);
    return null == l
        ? null
        : (0, i.jsx)(l1, { guildNode: n, guild: l, animatable: r, selected: a, draggable: !1, mediaState: o });
}
var id = n(803921);
let ic = (0, j.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("10373"),
                n.e("89317"),
                n.e("81154"),
                n.e("55658"),
                n.e("95957"),
                n.e("81167"),
                n.e("91763"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("43437"),
                n.e("39970"),
                n.e("8371"),
                n.e("72789"),
                n.e("17249"),
                n.e("62422"),
                n.e("82644"),
                n.e("35321"),
                n.e("50033"),
                n.e("44780"),
                n.e("90301"),
                n.e("15109"),
                n.e("88990"),
                n.e("76413"),
                n.e("3303"),
                n.e("80945"),
                n.e("18265"),
                n.e("27659"),
                n.e("36419"),
                n.e("28850"),
                n.e("60003"),
                n.e("26516"),
                n.e("85802"),
                n.e("65200"),
                n.e("41348"),
                n.e("2529"),
                n.e("5331"),
                n.e("46240"),
                n.e("81505"),
                n.e("8066"),
                n.e("72780"),
                n.e("96296"),
            ]).then(n.bind(n, 153571)),
        webpackId: 153571,
        name: "NotificationsInboxButton",
    }),
    ih = (0, tt.isWindows)() ? 4 : 12 * !(0, tt.isMac)();
function iA(e) {
    return e.startsWith(eB.BVt.GUILD_DISCOVERY) || e.startsWith(eB.BVt.GLOBAL_DISCOVERY);
}
class im {
    guildsTree;
    setScrolling;
    setIsScrolledToBottom;
    onScroll;
    sizes;
    scrollerRef = s.createRef();
    nodeRefs = {};
    timeout = new p.Ep();
    observer;
    constructor(e, t, n, l, i) {
        (this.guildsTree = e),
            (this.setScrolling = t),
            (this.setIsScrolledToBottom = n),
            (this.onScroll = l),
            (this.sizes = i),
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
            (null == e && iA(window.location.pathname)) ||
            e === eB.sFm.SERVER_DISCOVERY_BADGE ||
            e === eB.sFm.E3_SERVER_DISCOVERY_BADGE
        )
            return;
        if (null == e) return void n.scrollTo({ to: 0, animate: t });
        let l = this.nodeRefs[e];
        for (; null == l; ) {
            let t = this.guildsTree.getNode(e);
            if (t?.parentId == null) break;
            l = this.nodeRefs[t.parentId];
        }
        null != l && (0, h.vq)(l)
            ? n.scrollIntoViewNode({ node: l, animate: t, padding: 24 })
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
        let { iconTotalSize: l, badgeVisibleBuffer: i, heightBeforeGuilds: s, bottomInset: r } = this.sizes,
            a = this.scrollerRef.current;
        if (null == a) return !1;
        let o = n.findIndex((t) => ("string" == typeof t || null == t ? t === e : t.includes(e)));
        if (o < 0) return !1;
        let u = l * o + s,
            d = a.getScrollerState();
        return (!t && !!(u >= d.scrollTop)) || (!!t && !!(u + l + i <= d.scrollTop + d.offsetHeight - r));
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
                      let l = e.parentId ?? e.id,
                          i = this.nodeRefs[l];
                      if (null == i) return !1;
                      let s = i.getBoundingClientRect(),
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
    _handleScrollDebounced = u().debounce(() => {
        let e = this.scrollerRef.current;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState();
        N.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = u().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function ig(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: l } = e,
        r = (0, D.A)("TopSection"),
        { isExperimentEnabled: a } = (0, L.TW)("TopSection"),
        o = (0, A.bG)([eE.A], () => null != eE.A.getVoiceChannelId()),
        u = (0, E.useHasAnyModalOpen)(),
        d = (0, O.Ay)((e) => e.postConnectionOpen),
        [c, h] = (0, M.kn)(d && a && !o && !u ? [m.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        g = c === m.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [p] = (0, M.kn)(g ? [m.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        f = p === m.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        I = s.useRef(!1),
        _ = f && r;
    s.useEffect(() => {
        _ && !I.current && n(), (I.current = _);
    }, [n, _]);
    let C = (0, A.yK)([e4.A, e7.Ay], () => e4.A.getGuildIds().filter((e) => e7.Ay.isCurrentUserGuest(e))),
        S = l.concat(C),
        { entrypoint: x } = (0, e6.X8)({ location: "GuildsBar" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(nJ, {}),
            x === e6.RK.SERVER_RAIL_TOP && (0, i.jsx)(ic, {}),
            r ? (0, i.jsx)(e2, { shouldShowIntroPopover: f, markIntroPopoverAsDismissed: h }) : null,
            !t && (0, i.jsx)(tW, {}),
            S.map((e) => (0, i.jsx)(iu, { guildId: e }, e)),
            (0, i.jsx)(io, { onActivate: n }),
        ],
    });
}
function ip(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: l, renderTreeNode: s, lurkingGuildIds: r } = e,
        [a] = (0, A.yK)([te.Ay], () => {
            let e = te.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = a.getRoots(),
        u = (0, A.yK)([e8.A], () => e8.A.getGeoRestrictedGuilds()).map((e) =>
            (0, i.jsx)(ng, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.B, {
                role: "group",
                "aria-label": eH.intl.string(eH.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => s(e, t, o.length)),
            }),
            u,
            (0, i.jsx)(n9, {}),
            l ? null : (0, i.jsx)(nh, { disableTooltip: r.length > 0, lastTargetNode: o[o.length - 1] }),
            l ? null : t,
            n ? null : (0, i.jsx)(tZ, {}),
        ],
    });
}
function iE(e) {
    var t;
    let { disableAppDownload: n = tt.isPlatformEmbedded, isOverlay: l = !1, className: r, themeOverride: o } = e,
        [u] = (0, A.yK)([te.Ay], () => {
            let e = te.Ay.getGuildsTree();
            return [e, e.version];
        }),
        h = (0, A.bG)([e9.A], () => e9.A.lurkingGuildIds()),
        m = s.useMemo(() => (l ? [] : h), [h, l]),
        g = (0, A.bG)([v.A], () => v.A.isFullscreenInContext()),
        { isSorting: E, startSorting: I, stopSorting: N } = (0, tn.A)(),
        R = s.useRef(!1),
        [j] = s.useState(() => new p.Ep()),
        O = s.useRef(null),
        M = s.useRef(null),
        { ref: L, ...G } = (0, c.$y)(),
        P = (0, _.R7)(),
        [w, U] = s.useState(!1),
        k = (0, C.r)(f.A.modules.guildbar.AVATAR_SIZE),
        V = (0, C.r)(f.A.space.SPACE_XS),
        F = (0, D.A)("GuildsBar"),
        { pathname: B } = (0, d.zy)(),
        { entrypoint: H } = (0, e6.X8)({ location: "GuildsBar" }),
        K = +!!F + +(H === e6.RK.SERVER_RAIL_TOP),
        W = s.useMemo(() => {
            let e,
                t,
                n =
                    ((e = k + V),
                    {
                        iconSize: k,
                        iconTotalSize: e,
                        badgeVisibleBuffer: e - 16,
                        separatorSize: (t = 2 + V),
                        heightBeforeGuilds: ih + t + K * e,
                        bottomInset: 16,
                    });
            return new im(
                u,
                U,
                eB.tEg,
                () => {
                    O.current?.calculateState(), M.current?.calculateState();
                },
                n,
            );
        }, [k, V, u, K]);
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
                O.current?.calculateState(), M.current?.calculateState();
            };
            return ey.default.addChangeListener(e), () => ey.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: Y } = (0, b.Ay)(y.A.GUILDS_LIST),
        z = iA(B);
    (0, T.u5)(() => {
        if (!R.current && 0 !== u.size) {
            if (!z) {
                let { scrollTop: e } = e5.A.getGuildListDimensions();
                W.scrollTo({ to: e, animate: !1 });
            }
            return (R.current = !0), () => j.stop();
        }
    }),
        s.useEffect(() => {
            if ((W.setGuildsTree(u), R.current || 0 === u.size)) return;
            let e = em.A.getState().guildId;
            W.scrollToGuild(e, !1);
            let t = null;
            return em.A.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), W.scrollToGuild(t, !1));
            });
        }, [u, W]);
    let q = s.useCallback(() => {
        W.scrollTo({ to: 0, animate: !1 });
    }, [W]);
    (t = W.scrollToGuild),
        s.useEffect(() => {
            let e = null;
            function n() {
                let n = ti.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                ti.A.addChangeListener(n),
                () => {
                    ti.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let Q = s.useCallback(
            function e(t, n, l) {
                switch (t.type) {
                    case tl.PJ.FOLDER:
                        return (0, i.jsx)(
                            lI,
                            {
                                folderNode: t,
                                setNodeRef: W.setNodeRef,
                                draggable: !0,
                                sorting: E,
                                onDragStart: I,
                                onDragEnd: N,
                                renderChildNode: e,
                                "aria-setsize": l,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case tl.PJ.GUILD:
                        return (0, i.jsx)(
                            l3,
                            {
                                guildNode: t,
                                setRef: W.setNodeRef,
                                draggable: !0,
                                sorting: E,
                                onDragStart: I,
                                onDragEnd: N,
                                "aria-setsize": l,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [I, N, E, W.setNodeRef],
        ),
        J = (0, i.jsx)(nT, { selected: z, className: id.ai }),
        X = H === e6.RK.SERVER_RAIL_BOTTOM;
    return (0, i.jsx)(b.f5, {
        value: Y,
        children: (0, i.jsx)(S.N, {
            theme: o,
            children: (e) =>
                (0, i.jsxs)("nav", {
                    className: a()(id.iE, r, e, { [id.R]: g }),
                    "aria-label": eH.intl.string(eH.t.PjnF2t),
                    children: [
                        (0, i.jsx)(tI, {
                            ref: O,
                            isVisible: W.isItemVisible,
                            onJumpTo: W.handleJumpToGuild,
                            className: id.Xl,
                            barClassName: id.Sh,
                        }),
                        (0, i.jsx)("ul", {
                            ref: L,
                            ...G,
                            ...P,
                            role: "tree",
                            className: id.B2,
                            children: (0, i.jsxs)("div", {
                                className: id.qD,
                                children: [
                                    (0, i.jsxs)(x.zC, {
                                        className: a()({ [id.XG]: !0, [id.qw]: w }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: W.scrollerRef,
                                        onScroll: W.handleScroll,
                                        children: [
                                            (0, i.jsx)(ig, { scrollToTop: q, lurkingGuildIds: m }),
                                            (0, i.jsx)(n$, {}),
                                            (0, i.jsx)(ip, {
                                                guildDiscoveryButton: J,
                                                disableAppDownload: n,
                                                isOverlay: l,
                                                renderTreeNode: Q,
                                                lurkingGuildIds: m,
                                            }),
                                        ],
                                    }),
                                    X &&
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(n$, { fullWidth: !0 }),
                                                (0, i.jsx)("div", { className: id.JU, children: (0, i.jsx)(ic, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(tI, {
                            reverse: !0,
                            ref: M,
                            isVisible: W.isItemVisible,
                            onJumpTo: W.handleJumpToGuild,
                            className: a()(id.LZ, { [id.CH]: !l && !X, [id.c0]: !l && X }),
                            barClassName: id.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let iI = s.memo(
    function (e) {
        let t = (0, R.A)("guildsnav");
        return (0, i.jsx)(c.hD, { navigator: t, children: (0, i.jsx)(iE, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, g.A)(e, t),
);
