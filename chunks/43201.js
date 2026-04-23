n.d(t, { A: () => ly });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(735438),
    d = n.n(o),
    c = n(873263),
    u = n(837381),
    h = n(621466),
    A = n(17928),
    _ = n(554146),
    g = n(52133),
    m = n(451988),
    p = n(661531),
    f = n(192308),
    E = n(331322),
    C = n(312138),
    x = n(602853),
    I = n(43990),
    b = n(689175),
    S = n(951001),
    N = n(964486),
    T = n(260762),
    v = n(793574),
    y = n(688810),
    R = n(313961),
    j = n(771781),
    L = n(932001),
    O = n(313281),
    G = n(832275);
n(321073);
var M = n(43105),
    D = n(857250),
    U = n(691540),
    P = n(862328),
    w = n(67811),
    k = n(27232),
    V = n(403581),
    B = n(308528),
    H = n(933958),
    F = n(969151),
    W = n(941971),
    K = n(266062);
let Y = s.forwardRef((e, t) => {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: K.Aw, ref: t, children: n });
});
Y.displayName = "ListItem";
var z = n(406810),
    q = n(789645),
    X = n(933832),
    Q = n(22231),
    J = n(777666),
    Z = n(565787),
    $ = n(81466),
    ee = n(451394),
    et = n(31300),
    en = n(428689),
    ei = n(983851),
    el = n(323384),
    es = n(513461),
    er = n(791606);
function ea(e, t, n) {
    return (0, l.jsx)(J.hV, { count: e, color: t, "aria-hidden": n });
}
function eo(e) {
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
    if (a) t = $.C;
    else if (r) t = ee.q;
    else if (l) t = et.k;
    else if (i) t = en.n;
    else if (n) t = ei.H;
    else {
        if (!o) return null;
        t = el.k;
    }
    return ec({ icon: t, isCurrentUserConnected: s });
}
function ed(e) {
    let { guildJoinRequestStatus: t } = e,
        [n, i] = (function (e) {
            switch (e) {
                case es.B5.SUBMITTED:
                    return [void 0, z.O];
                case es.B5.REJECTED:
                    return [p.A.unsafe_rawColors.RED_400.css, q.P];
                case es.B5.APPROVED:
                    return [p.A.unsafe_rawColors.GREEN_360.css, X.A];
                default:
                    return [void 0, Q.R];
            }
        })(t);
    return ec({ icon: i, color: n });
}
function ec(e) {
    let { icon: t, color: n, isCurrentUserConnected: i } = e;
    return (0, l.jsx)(J.fk, {
        icon: t,
        className: a()(K.bG, { [K.gB]: i }),
        ...(null == n ? { disableColor: !0 } : { color: n }),
    });
}
var eu = n(855725),
    eh = n(532794),
    eA = n(366811),
    e_ = n(345942),
    eg = n(616356),
    em = n(734057),
    ep = n(309010),
    ef = n(977997),
    eE = n(935208),
    eC = n(181079),
    ex = n(422258),
    eI = n(668267),
    eb = n(5180),
    eS = n(695633),
    eN = n(152007),
    eT = n(458294),
    ev = n(576705),
    ey = n(222823),
    eR = n(543465),
    ej = n(780645),
    eL = n(990078),
    eO = n(597601),
    eG = n(834730),
    eM = n(183623),
    eD = n(104171),
    eU = n(63995),
    eP = n(69407),
    ew = n(287809),
    ek = n(607567),
    eV = n(403362),
    eB = n(652215),
    eH = n(985018),
    eF = n(621035);
function eW(e, t) {
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: eF.nM,
              children: [
                  (0, l.jsx)(e, { className: eF.RI, color: "currentColor" }),
                  (0, l.jsx)(eD.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function eK() {
    let e = (0, A.yK)([eC.A, em.A], () =>
            eE.default
                .keys(eC.A.getFavoriteChannels())
                .map((e) => em.A.getChannel(e))
                .filter(eV.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === eB.rbe.GUILD_VOICE),
        i = e.filter((e) => e.type === eB.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        s = (0, A.yK)(
            [ek.Ay],
            () =>
                d().flatMap(n, (e) =>
                    ek.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        r = (0, A.yK)([eU.A], () =>
            d().flatMap(i, (e) =>
                eU.A.getMutableParticipants(e, eP.ip.SPEAKER)
                    .filter((e) => e.type === eP.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        a = (0, A.bG)([eU.A], () => {
            let e = 0;
            for (let t of i) e += eU.A.getParticipantCount(t, eP.ip.AUDIENCE);
            return e;
        }),
        o = (0, A.yK)(
            [eg.A],
            () =>
                eg.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        c = (0, A.yK)([H.Ay], () => {
            let e = H.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        u = (0, A.yK)([ew.default], () => c.map((e) => ew.default.getUser(e)), [c]),
        h = (0, A.yK)([ew.default], () => o.map((e) => ew.default.getUser(e)), [o]),
        _ = eW(
            ei.H,
            s.filter((e) => !o.includes(e.id) && !c.includes(e.id)),
        ),
        g =
            0 === r.length
                ? null
                : (0, l.jsxs)("div", {
                      className: eF.nM,
                      children: [
                          (0, l.jsx)(ee.q, { size: "lg", color: "currentColor", className: eF.RI }),
                          (0, l.jsx)(eD.Ay, { guildId: void 0, users: r, max: 3 }),
                          (0, l.jsxs)("div", {
                              className: eF.GZ,
                              children: [
                                  (0, l.jsx)(eO.L, { size: "xs", color: "currentColor" }),
                                  (0, l.jsx)(eG.E, {
                                      className: eF._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: a,
                                  }),
                              ],
                          }),
                      ],
                  }),
        m = eW(
            eM.F,
            h.filter((e) => null != e && !c.includes(e.id)),
        ),
        p = eW(el.k, u);
    return (0, l.jsxs)(l.Fragment, { children: [g, _, m, p] });
}
function eY() {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: a()(eF.nM, eF.Dl),
                children: (0, l.jsx)("span", { className: a()(eF.cN, eF.NT), children: eH.intl.string(eH.t.wMWyci) }),
            }),
            (0, l.jsx)(eK, {}),
        ],
    });
}
function ez(e) {
    let { "aria-label": t = !1, children: n } = e,
        i = s.useMemo(() => (0, l.jsx)("div", { className: eF.A_, children: (0, l.jsx)(eY, {}) }), []);
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
var eq = n(97483),
    eX = n(49999),
    eQ = n(788868),
    eJ = n(335993),
    eZ = n(959495),
    e$ = n(988572);
let e0 = { analyticsSource: { page: eB.liQ.GUILD_CHANNEL, section: eB.JJy.CHANNEL_LIST, object: eB.ZSU.CHANNEL } };
function e1(e) {
    let t,
        i,
        r,
        a,
        o,
        d,
        c,
        h,
        _,
        g,
        m,
        p,
        { shouldShowIntroPopover: E, markIntroPopoverAsDismissed: C } = e,
        x = (0, u.Vd)("favorites"),
        { favoriteAdded: I, clearFavoriteAdded: b } = (0, O.CJ)(),
        S = s.useRef(null),
        { analyticsLocations: N } = (0, y.Ay)(v.A.FAVORITES_GUILD_BUTTON),
        [T, R] = s.useState(!1),
        j = (0, ej.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: L,
            favoriteGuildMuted: G,
            favoriteChannels: K,
        } = (0, A.cf)([eC.A], () => ({
            favoriteGuildEnabled: eC.A.favoriteGuildEnabled,
            favoriteChannels: eC.A.getFavoriteChannels(),
            favoriteGuildMuted: eC.A.favoriteGuildMuted,
        })),
        z = (0, A.bG)([ep.A], () => ep.A.getChannelId(eB.YYv)),
        q = (0, A.bG)([em.A], () => em.A.getChannel(z)),
        X = (0, eA.A)((e) => e.guildId),
        Q = (0, eb.ai)(X),
        { badge: J, unread: Z } = (0, A.cf)([eS.A, em.A, eT.default, eN.A, ev.A, ey.Ay, eR.Ay], () =>
            eE.default.keys(K).reduce(
                (e, t) => {
                    let n = em.A.getChannel(t),
                        i = n?.getGuildId(),
                        l = ey.Ay.getMentionCount(t);
                    if (
                        ((e.badge = e.badge + l),
                        (e.unread = e.unread || (ey.Ay.hasUnread(t) && eT.default.shouldCountChannelUnread(n, l))),
                        null != i)
                    ) {
                        let n = eS.A.getActiveJoinedRelevantThreadsForParent(i, t);
                        for (let t in n) {
                            let n = ey.Ay.getMentionCount(t);
                            e.badge += n;
                            let i = em.A.getChannel(t);
                            e.unread = e.unread || (ey.Ay.hasUnread(t) && eT.default.shouldCountChannelUnread(i, n));
                        }
                    }
                    return e;
                },
                { badge: 0, unread: !1 },
            ),
        ),
        $ =
            ((i = null != (t = (0, A.bG)([ep.A], () => ep.A.getVoiceChannelId())) && null != K[t]),
            (r = (0, A.bG)([eg.A], () => {
                if (!i) return !1;
                let e = eg.A.getCurrentUserActiveStream();
                return null != e && null != K[e.channelId];
            })),
            (a = (0, A.bG)([eg.A], () => eg.A.getAllApplicationStreams().some((e) => null != K[e.channelId]))),
            (o = (0, A.bG)([ef.A], () => i && null != t && ef.A.hasVideo(t), [i, t])),
            (d = (0, A.yK)([H.Ay], () =>
                eE.default.keys(K).reduce((e, t) => (e.push(...H.Ay.getEmbeddedActivitiesForChannel(t)), e), []),
            )),
            (c = (0, A.bG)([H.Ay], () =>
                Array.from(H.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                    let { location: t } = e,
                        n = (0, F.H)(t);
                    return null != n && null != K[n];
                }),
            )),
            (h = d.length > 0),
            (_ = !1),
            (g = !1),
            (m = !1),
            (p = !1),
            i ? ((_ = !o), (g = o), (m = r), (p = c)) : ((m = a), (p = h)),
            eo({ audio: _, video: g, screenshare: m, liveStage: !1, isCurrentUserConnected: i, activity: p })),
        ee = J > 0 ? (0, eu.w)(J) : null,
        et = s.useRef(!1),
        { hasAccess: en } = (0, O.TW)("FavoritesButton"),
        ei = s.useCallback(
            (e, t) => {
                (et.current = !0), C(e, t);
            },
            [C],
        ),
        el = s.useCallback(
            (e) => {
                e && ((0, eI.mv)("intro_dc"), (0, e_.u)(eB.YYv)),
                    en
                        ? (L || (0, ex.tV)(!0, "favorites_button_onboarding"),
                          e &&
                              (0, f.openModalLazy)(async () => {
                                  let { default: e } = await n.e("59839").then(n.bind(n, 889186));
                                  return (t) =>
                                      (0, l.jsx)(e, { ...t, parentId: null, source: "favorites_button_onboarding" });
                              }))
                        : e && (0, eh.A)({ subscriptionTier: eQ.pe.TIER_2, analyticsLocations: N }),
                    ei(eX.i.TAKE_ACTION);
            },
            [ei, L, en, N],
        );
    return (
        s.useEffect(() => {
            E && (et.current = !1);
        }, [E]),
        s.useEffect(
            () => () => {
                E && !et.current && ei(eX.i.AUTO_DISMISS, !0);
            },
            [ei, E],
        ),
        s.useEffect(() => {
            if (I) {
                let e = (0, D.o)(eH.intl.string(eH.t["4tSWQg"]), eq.Ck.FAVORITE);
                (0, U.P0)(e);
                let t = setTimeout(b, e.options?.duration ?? eq.jg.duration);
                return () => {
                    b(), clearTimeout(t);
                };
            }
        }, [I, b]),
        (0, l.jsxs)(Y, {
            children: [
                (0, l.jsx)(W.A, { selected: Q, hovered: T, unread: Z && !G, className: eZ.I }),
                (0, l.jsx)(ez, {
                    children: (0, l.jsx)(P.Q, {
                        selected: !0,
                        upperBadge: $,
                        lowerBadge: ee,
                        children: (0, l.jsx)("div", {
                            ref: S,
                            children: (0, l.jsx)(w.j, {
                                ...x,
                                ariaLabel: eH.intl.formatToPlainString(eH.t["/uzRss"], {
                                    guildName: eH.intl.string(eH.t.wMWyci),
                                    mentions: J,
                                }),
                                "aria-selected": Q,
                                to: { pathname: eB.BVt.CHANNEL(eB.YYv, z), state: e0 },
                                selected: Q || T,
                                onClick: () => {
                                    E && el(!1);
                                },
                                onMouseEnter: () => R(!0),
                                onMouseLeave: () => R(!1),
                                onMouseDown: function () {
                                    null != q && B.A.preload(q.guild_id, q.id);
                                },
                                onContextMenu: j,
                                children: (0, l.jsx)(k.G, {
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
                    (0, l.jsx)(M.A, {
                        targetElementRef: S,
                        gradientColor: "nitro-pink",
                        position: "right",
                        alignmentStrategy: "edge",
                        align: "top",
                        caretConfig: { align: "start" },
                        badge: { type: "beta", variant: "expressive" },
                        graphic: { src: e$.A, type: "image", aspectRatio: "16/9" },
                        title: eH.intl.string(eJ.default["bu/mLv"]),
                        body: eH.intl.string(eJ.default["/x2jT7"]),
                        onRequestClose: () => ei(eX.i.USER_DISMISS),
                        actions: [
                            {
                                icon: V.t,
                                text: en ? eH.intl.string(eJ.default["0lHa0Z"]) : eH.intl.string(eJ.default["0nZZEk"]),
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
    e9 = n(851109),
    e3 = n(912592),
    e7 = n(782603),
    e4 = n(371911),
    e5 = n(394953),
    e8 = n(355216),
    te = n(625864);
function tt(e) {
    let { children: t } = e,
        { notificationCenterVariant: n } = (0, e9.X8)({ location: "NotificationsInboxTooltip" }),
        i = n === e9.U5.LEGACY ? eH.intl.string(eH.t.GSmTKJ) : eH.intl.string(eH.t.HcoRu0);
    return (0, l.jsx)(eL.m, { spacing: 12, position: "right", text: i, children: (0, l.jsx)("div", { children: t }) });
}
n(445368);
var tn = n(790782),
    ti = n(773557);
function tl() {
    let e = (0, A.bG)([ew.default], () => ew.default.getCurrentUser());
    return (0, A.bG)([ey.Ay], () => e?.id != null && ey.Ay.getMentionCount(e.id, tn.P.NOTIFICATION_CENTER) > 0);
}
function ts(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: i, ref: r } = e,
        a = (0, u.Vd)("notifications-inbox"),
        [o, d] = s.useState(!1),
        c = (0, e5.lI)(),
        h = n || c,
        { notificationCenterVariant: _ } = (0, e9.X8)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: g,
            badgeDimensions: m,
            unreadChannelsCount: f,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, e9.X8)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, e5.U4)(),
                i = tl(),
                { badge: s, dimensions: r } = (0, e8.ux)({ isSelected: e });
            return t === e9.U5.LEGACY
                ? {
                      badge: i
                          ? (0, l.jsx)(J.SC, {
                                style: { height: 13, width: 13, position: "relative" },
                                color: p.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: { height: 13, width: 13 },
                  }
                : { badge: s, unreadChannelsCount: n.length, badgeDimensions: r };
        })(h),
        E = _ === e9.U5.LEGACY ? e3.K : e7.X,
        C = (0, A.bG)([ep.A], () => ep.A.getChannelId()),
        x = s.useMemo(() => {
            if (_ === e9.U5.SIDEBAR) return eB.BVt.CHANNEL(eB.gNP, C);
        }, [_, C]);
    return (0, l.jsxs)(Y, {
        ref: r,
        children: [
            (0, l.jsx)(W.A, {
                selected: h && _ === e9.U5.SIDEBAR,
                hovered: o && _ === e9.U5.SIDEBAR,
                unread: f > 0,
                className: ti.Io,
                disabled: _ === e9.U5.LEGACY,
            }),
            (0, l.jsx)(tt, {
                children: (0, l.jsx)(P.Q, {
                    selected: h || o,
                    lowerBadge: g,
                    lowerBadgeSize: m,
                    children: (0, l.jsx)(w.j, {
                        ...a,
                        ...i,
                        onClick: t,
                        to: x,
                        selected: h || o,
                        onMouseEnter: () => d(!0),
                        onMouseLeave: () => d(!1),
                        children: (0, l.jsx)(E, {
                            size: "custom",
                            color: "currentColor",
                            className: ti.iZ,
                            width: 20,
                            height: 20,
                        }),
                    }),
                }),
            }),
        ],
    });
}
function tr() {
    let e = s.useRef(null),
        { notificationCenterVariant: t } = (0, e9.X8)({ location: "NotificationsInboxButton" }),
        n = tl(),
        i = (0, e8.HN)();
    return t === e9.U5.SIDEBAR
        ? (0, l.jsx)(ts, { onClick: i })
        : t === e9.U5.POPOUT
          ? (0, l.jsx)(te.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, s) =>
                    (0, l.jsx)(ts, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            i(), t();
                        },
                        popoutProps: s,
                    }),
            })
          : t === e9.U5.LEGACY
            ? (0, l.jsx)(e4.C, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  children: (t, n, s) =>
                      (0, l.jsx)(ts, {
                          ref: e,
                          selectedOverride: n,
                          onClick: () => {
                              i(), t();
                          },
                          popoutProps: s,
                      }),
              })
            : null;
}
var ta = n(72314),
    to = n(543897),
    td = n(696451),
    tc = n(71393),
    tu = n(711014),
    th = n(723702),
    tA = n(757780),
    t_ = n(263715),
    tg = n(967198),
    tm = n(173860),
    tp = n(383394),
    tf = n(131677),
    tE = n(228366);
let tC = {};
class tx extends A.Ay.PersistedStore {
    static displayName = "ViewHistoryStore";
    static persistKey = "ViewHistoryStore";
    initialize(e) {
        null != e &&
            Object.keys(e).forEach((t) => {
                "number" == typeof e[t] && (tC[t] = e[t]);
            });
    }
    getState() {
        return tC;
    }
    hasViewed(e) {
        return null != tC[e];
    }
}
let tI = new tx(tE.h, {
    VIEW_HISTORY_MARK_VIEW: function (e) {
        let { key: t } = e;
        tC[t] = Date.now();
    },
});
var tb = n(531685),
    tS = n(583613);
let tN = "app-download-item",
    tT = "add-server-item";
function tv() {
    return !1;
}
function ty(e) {
    let t = eT.default.getMutableGuildStates();
    return (
        (e === eB.sFm.SERVER_DISCOVERY_BADGE && !tI.hasViewed(eB.sFm.SERVER_DISCOVERY_BADGE)) ||
        (e !== tN && e !== tT && t[e ?? "null"]?.highImportanceMentionCount > 0)
    );
}
let tR = (0, tS.L_)((e, t, n) => ["null", ...t, ...e, tT, eB.sFm.E3_SERVER_DISCOVERY_BADGE, tN]),
    tj = s.forwardRef(function (e, t) {
        let n = (0, A.yK)([tu.Ay, tf.A, eT.default], () =>
                tR(tu.Ay.getGuildFolders(), tf.A.getUnreadPrivateChannelIds(), eT.default.getStoreChangeSentinel()),
            ),
            i = (0, A.bG)([tb.A], () => tb.A.isFocused()),
            s = (0, A.bG)([tp.A], () => tp.A.getExpandedFolders());
        return (0, l.jsx)(tm.A, {
            ...e,
            ref: t,
            items: n,
            isUnread: tv,
            textUnread: eH.intl.string(eH.t.y2b7CA),
            textMention: eH.intl.string(eH.t.y2b7CA),
            isMentioned: ty,
            animate: i,
            expandedFolders: s,
        });
    });
n(667532);
var tL = n(73939),
    tO = n(763827),
    tG = n(419354),
    tM = n(778712),
    tD = n(442433),
    tU = n(620982),
    tP = n(571694),
    tw = n(47167),
    tk = n(598104),
    tV = n(994500);
function tB(e, t) {
    return e
        .filter((e) => (0, eV.Vq)(e))
        .filter((e) => !(null != t ? t.includes(e.id) : tV.A.isBlockedOrIgnored(e.id)));
}
function tH(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : tV.A.isBlockedOrIgnored(e)));
}
var tF = n(427358),
    tW = n(907459),
    tK = n(145408);
function tY(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              className: eF.nM,
              children: [
                  (0, l.jsx)(t, { className: eF.RI, color: "currentColor" }),
                  (0, l.jsx)(eD.Ay, { users: n, max: 6 }),
              ],
          });
}
function tz(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, l.jsx)(eG.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eH.intl.string(eH.t.fpKdS1),
          })
        : (0, l.jsx)(tK.A, { muteConfig: t, className: n });
}
function tq(e) {
    let t,
        n,
        i,
        r,
        o,
        d,
        c,
        u,
        h,
        _,
        g,
        m,
        p,
        { channel: f } = e,
        E = f.id,
        {
            activityUsers: C,
            streamUsers: x,
            voiceUsers: I,
        } = ((t = f.id),
        (n = (0, A.yK)([tV.A], () => tV.A.getBlockedOrIgnoredIDs())),
        (i = (0, A.bG)([tF.A], () => tF.A.getUserAffinitiesMap(), [])),
        (r = (0, A.yK)(
            [H.Ay, ew.default],
            () =>
                H.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => ew.default.getUser(e)),
            [t],
        )),
        (o = s.useMemo(() => tB(r, n), [r, n])),
        (d = s.useMemo(() => (0, tW.L)(o, i, "DirectMessageTooltip - activityUsers"), [o, i])),
        (c = (0, A.yK)(
            [eg.A, ew.default],
            () =>
                tB(
                    eg.A.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => ew.default.getUser(e)),
                    n,
                ),
            [t, n],
        )),
        (u = s.useMemo(() => tB(c, n), [c, n])),
        (h = s.useMemo(() => (0, tW.L)(u, i, "DirectMessageTooltip - activityUsers"), [u, i])),
        (_ = s.useMemo(() => h.filter((e) => !d.some((t) => t.id === e.id)), [h, d])),
        (g = (0, A.yK)(
            [ek.Ay],
            () =>
                tB(
                    ek.Ay.getVoiceStatesForChannel(f).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                    n,
                ),
            [f, n],
        )),
        (m = s.useMemo(() => tB(g, n), [g, n])),
        (p = s.useMemo(() => (0, tW.L)(m, i, "DirectMessageTooltip - voiceUsers"), [m, i])),
        {
            voiceUsers: s.useMemo(
                () => p.filter((e) => !d.some((t) => t.id === e.id) && !h.some((t) => t.id === e.id)),
                [p, d, h],
            ),
            streamUsers: _,
            activityUsers: d,
        }),
        b = (0, l.jsx)(tY, { icon: ei.H, users: I }),
        S = (0, l.jsx)(tY, { icon: eM.F, users: x }),
        N = (0, l.jsx)(tY, { icon: el.k, users: C }),
        { isMuted: T, muteConfig: v } = (0, A.cf)(
            [eR.Ay],
            () => ({ isMuted: eR.Ay.isChannelMuted(null, E), muteConfig: eR.Ay.getChannelMuteConfig(null, E) }),
            [E],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            b,
            S,
            N,
            T ? (0, l.jsx)(tz, { muteConfig: v, className: a()(eF.LM, { [eF.Sx]: null != b || null != S }) }) : null,
        ],
    });
}
function tX(e) {
    let { channel: t } = e,
        n = (0, tw.Ay)(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: a()(eF.nM, eF.Dl),
                children: (0, l.jsx)("span", { className: a()(eF.cN, eF.NT), children: n }),
            }),
            (0, l.jsx)(tq, { channel: t }),
        ],
    });
}
function tQ(e) {
    let { channel: t, children: n } = e,
        i = (0, tw.Ay)(t),
        r = s.useMemo(() => (0, l.jsx)("div", { className: eF.A_, children: (0, l.jsx)(tX, { channel: t }) }), [t]);
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
var tJ = n(647321);
let tZ = { friction: 28, tension: 600 };
function t$(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...tZ };
        case "scale":
            return { ...tZ };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class t0 extends s.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new tG.Controller({ scale: 0, height: 0, opacity: 0, config: t$ }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !tb.A.isFocused(), height: 1, opacity: 1, scale: 1, config: t$ })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: t$ }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !tb.A.isFocused(), height: 0, opacity: 0, scale: 0, config: t$ }).start().then(e),
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
            t = e.type === eB.rbe.DM ? ew.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, tP.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = t.type === eB.rbe.DM ? ew.default.getUser(t.getRecipientId()) : null;
        null != i
            ? (0, tD.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("84442"), n.e("39778"), n.e("44031")]).then(
                      n.bind(n, 385913),
                  );
                  return (n) => (0, l.jsx)(e, { ...n, channel: t, user: i });
              })
            : (0, tD.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
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
                treeItemProps: h,
            } = this.props,
            { hovered: A, animating: _ } = this.state,
            g = e.isMultiUserDM() && null == e.icon,
            m = () =>
                (0, l.jsx)(w.j, {
                    to: eB.BVt.CHANNEL(eB.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || A,
                    ariaLabel:
                        null != t
                            ? [
                                  eH.intl.formatToPlainString(eH.t.hKarnZ, { name: t, mentions: i }),
                                  d ? eH.intl.string(eH.t["fk1/bX"]) : c ? eH.intl.string(eH.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: g ? void 0 : this.getChannelIcon(),
                    backgroundStyle: g ? "on-hover" : "always",
                    children: g
                        ? (0, l.jsx)(tk.A, {
                              channel: e,
                              size: tM._3.SIZE_40,
                              facepileSizeOverride: tM._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ...h,
                });
        return (0, l.jsx)(tG.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(Y, {
                children: [
                    (0, l.jsx)(W.A, { hovered: !_ && A, selected: !_ && n, unread: !_ && u, className: tJ.I }),
                    (0, l.jsx)(tQ, {
                        channel: e,
                        children: (0, l.jsx)(P.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: i > 0 ? ea(i, void 0, !0) : null,
                            upperBadge: eo({ audio: s, video: r, screenshare: a, isCurrentUserConnected: o }),
                            lowerBadgeSize: { width: (0, J.o6)(i) },
                            children: m(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let t1 = s.forwardRef(function (e, t) {
    let n = e.channel.id,
        i = (0, tw.Ay)(e.channel),
        s = (0, u.Vd)(n, 2),
        r = (0, A.bG)([tO.A], () => tO.A.getChannelId(), []),
        a = (0, A.bG)([R.A], () => R.A.getMode(n), [n]),
        o = (0, A.bG)([eg.A], () => eg.A.getAllApplicationStreamsForChannel(n).length > 0),
        d = (0, A.bG)([ek.Ay], () => ek.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        c = (0, A.bG)([ep.A], () => ep.A.getChannelId(), []),
        h = (0, A.bG)([ey.Ay], () => ey.Ay.getMentionCount(n), [n]),
        _ = r === n,
        { isIncomingCall: g, isOngoingCall: m } = (0, tU.A)(n),
        f = !1,
        E = !1;
    (_ || d) && ((f = a === eB._Of.VOICE), (E = a === eB._Of.VIDEO));
    let C = (0, x.r)(p.A.modules.guildbar.AVATAR_SIZE);
    return (0, l.jsx)(t0, {
        ...e,
        ref: t,
        channelName: i,
        unread: h > 0,
        selected: c === n,
        badge: h,
        audio: f,
        video: E,
        stream: o,
        isCurrentUserInThisDMCall: _,
        isIncomingCall: g,
        isOngoingCall: m,
        size: C,
        treeItemProps: s,
    });
});
function t2() {
    (0, A.bG)([em.A], () => em.A.getPrivateChannelsVersion());
    let e = em.A.getMutablePrivateChannels(),
        t = (0, A.yK)([tf.A], () => tf.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: i } = (0, A.cf)([tO.A], () => ({
            selectedVoiceGuildId: tO.A.getGuildId(),
            selectedVoiceChannelId: tO.A.getChannelId(),
        })),
        r = t.map((t) => {
            let n = e[t];
            return null == n || n.id === i ? null : (0, l.jsx)(t1, { channel: n }, n.id);
        }),
        a = null == n && null != i ? e[i] : null;
    return (
        null != a && r.unshift((0, l.jsx)(t1, { channel: a }, a.id)),
        (0, l.jsx)(E.B, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": eH.intl.string(eH.t.YUU0RF),
            gap: "xs",
            hidden: r.length < 1,
            children: (0, l.jsx)(tL.F, { component: s.Fragment, children: r }),
        })
    );
}
var t6 = n(32880),
    t9 = n(939249),
    t3 = n(547732);
function t7(e) {
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
        h = s.useMemo(() => (null == n || r ? null : (0, l.jsx)("div", { className: t3.SH, children: n })), [n, r]),
        A = i ? t : (0, l.jsx)("div", { className: a()(t3.pm, { [t3.wH]: u }), children: t });
    return (0, l.jsx)(eL.m, {
        __unsupportedReactNodeAsText: h,
        position: "right",
        spacing: 12,
        hideOnClick: o,
        shouldShow: d,
        forceOpen: c,
        ariaHidden: !0,
        asContainer: !i,
        children: A,
    });
}
var t4 = n(530787);
let t5 = s.forwardRef(function (e, t) {
        let {
                id: n,
                onClick: i,
                onContextMenu: r,
                icon: o,
                selected: d,
                tooltip: c,
                upperBadge: h,
                lowerBadge: A,
                lowerBadgeSize: _,
                showPill: g = !0,
                className: m,
                "aria-label": p,
                children: f,
                onMouseEnter: E,
                onMouseLeave: C,
                onMouseDown: x,
            } = e,
            I = (0, u.Vd)(n),
            [b, S] = s.useState(!1),
            N = "string" == typeof c && null == p ? c : p;
        return (0, l.jsxs)(Y, {
            children: [
                g
                    ? (0, l.jsx)("div", { className: t4.Io, children: (0, l.jsx)(W.A, { hovered: b, selected: d }) })
                    : null,
                (0, l.jsx)(t7, {
                    text: c,
                    selected: d,
                    children: (0, l.jsx)(P.Q, {
                        selected: !0,
                        upperBadge: h,
                        lowerBadge: A,
                        lowerBadgeSize: _,
                        children: (0, l.jsx)(t9.D, {
                            innerRef: t,
                            onMouseEnter: () => {
                                E?.(), S(!0);
                            },
                            onMouseLeave: () => {
                                C?.(), S(!1);
                            },
                            onMouseDown: x,
                            className: a()(t4.oZ, m, { [t4.wH]: d || b }),
                            onClick: i,
                            "aria-label": N,
                            "aria-selected": d,
                            onContextMenu: r,
                            focusProps: { enabled: !1 },
                            ...I,
                            children: null != o && (0, l.jsx)(o, { className: t4.sF, color: "currentColor" }),
                        }),
                    }),
                }),
                f,
            ],
        });
    }),
    t8 = "DOWNLOAD_APPS";
function ne() {
    let e = (0, f.useModalsStore)((e) => (0, f.hasModalOpenSelector)(e, t8));
    return (0, l.jsx)(t5, {
        id: "app-download-button",
        onClick: () => {
            (0, f.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("56423"), n.e("33255")]).then(n.bind(n, 987482));
                    return (t) => (0, l.jsx)(e, { source: "Guilds", ...t });
                },
                { modalKey: t8 },
            );
        },
        selected: e,
        tooltip: eH.intl.string(eH.t.Z7jwrJ),
        icon: t6.s,
    });
}
var nt = n(245604),
    nn = n(272613),
    ni = n(398884),
    nl = n(772366),
    ns = n(728321),
    nr = n(260509),
    na = n(284009),
    no = n.n(na),
    nd = n(295868),
    nc = n(686956),
    nu = n(954571),
    nh = n(787426);
function nA(e) {
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
function n_(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        no()(t.type !== t_.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."),
        {
            accept: e,
            canDrop: (e) =>
                e.nodeId !== t.id &&
                (!i || e.type !== t_.PJ.FOLDER || t.type !== t_.PJ.FOLDER) &&
                (e.type !== t_.PJ.FOLDER || null == t.parentId),
            drop(e) {
                let { nodeId: l } = e;
                i && t.type !== t_.PJ.FOLDER && nu.default.track(eB.HAw.GUILD_FOLDER_CREATED),
                    nc.A.moveById(l, t.id, n, i);
            },
            collect: (e) => ({ canDrop: e.canDrop(), isOver: e.isOver() }),
        }
    );
}
function ng(e) {
    let { name: t, targetNode: n, combine: i, below: r } = e,
        a = s.useMemo(() => n_([t_.PJ.GUILD, t_.PJ.FOLDER], n, r, i), [n, r, i]),
        [{ canDrop: o, isOver: d }, c] = (0, nd.H)(a),
        u = nA([
            [o, nh.OP],
            [d, nh.NQ],
        ]);
    return (0, l.jsx)("div", {
        ref: (e) => {
            (u.current = e), c(e);
        },
        "data-dnd-name": eH.intl.formatToPlainString(eH.t["A5aDw+"], { itemName: t }),
        className: nh.aC,
    });
}
function nm(e) {
    let { name: t, targetNode: n, onDragOverChanged: i } = e,
        [{ canDrop: r, isOver: o }, d] = (0, nd.H)(() => n_([t_.PJ.GUILD], n, !0, !0));
    s.useEffect(() => {
        i?.(o);
    }, [i, o]);
    let c = nA([
        [r, nh.OP],
        [o, nh.NQ],
    ]);
    return (0, l.jsx)(t7, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, l.jsx)("div", {
            ref: (e) => {
                (c.current = e), d(e);
            },
            "data-dnd-name": eH.intl.formatToPlainString(eH.t.qiQ0QI, { itemName: t }),
            className: a()(nh.dw, {}),
        }),
    });
}
let np = s.memo(function (e) {
    let { name: t, targetNode: n, noCombine: i = !1, below: s = !1, onDragOverChanged: r } = e,
        a = !i && null == n.parentId;
    return (0, l.jsxs)("div", {
        className: nh.iE,
        "aria-hidden": !0,
        children: [
            (0, l.jsx)(ng, { name: t, targetNode: n, below: s }),
            a ? (0, l.jsx)(nm, { name: t, targetNode: n, onDragOverChanged: r }) : null,
        ],
    });
});
function nf(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: i, isOver: s }, r] = (0, nd.H)(() => n_([t_.PJ.GUILD], n, !0, !0)),
        a = nA([[s, nh.a7]]),
        o = nA([
            [s, nh.NQ],
            [i, nh.OP],
        ]);
    return (0, l.jsx)("div", {
        ref: a,
        className: nh.Ro,
        "aria-hidden": !0,
        children: (0, l.jsx)("div", {
            className: nh.aO,
            children: (0, l.jsx)("div", {
                ref: (e) => {
                    (o.current = e), r(e);
                },
                "aria-label": `At end of ${t}`,
                className: nh.aC,
            }),
        }),
    });
}
function nE(e) {
    let { children: t } = e,
        [, n] = (0, nd.H)({ accept: [] });
    return (0, l.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        children: t,
    });
}
var nC = n(819638);
let nx = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function nI(e) {
    (0, tD.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
function nb(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        i = (0, A.yK)([tc.A], () => tc.A.getGuildsArray()),
        r = (0, A.bG)([ew.default], () => ew.default.getCurrentUser()),
        a = s.useMemo(() => i.some((e) => (0, nr.bM)(e, r)), [i, r]),
        o = (0, f.useModalsStore)((e) => (0, f.hasModalOpenSelector)(e, nC.fc)),
        { analyticsLocations: d } = (0, y.Ay)();
    return (0, l.jsx)("div", {
        className: K.Uq,
        children: (0, l.jsxs)(ns.A, {
            tutorialId: a ? "create-more-servers" : "create-first-server",
            inlineSpecs: nx,
            position: "right",
            disabled: t,
            children: [
                (0, l.jsx)(t5, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: () => {
                        (0, ni.Sn)()
                            ? (0, nl.A)({
                                  analyticsSource: { page: eB.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: eB.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: eB.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: d,
                              })
                            : nn.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: o,
                    onContextMenu: nI,
                    tooltip: eH.intl.string(eH.t.l5WIbf),
                    icon: nt.U,
                }),
                null != n &&
                    (0, l.jsx)(np, { name: eH.intl.string(eH.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
var nS = n(486020),
    nN = n(962795);
function nT(e) {
    let [t, i] = s.useState(!1),
        r = (0, u.Vd)(`guild-${e.id}`);
    return (0, l.jsx)(Y, {
        children: (0, l.jsx)(t7, {
            text: e.name,
            children: (0, l.jsx)(P.Q, {
                className: nN.o,
                selected: t,
                lowerBadge: (0, l.jsx)(J.fk, { icon: (0, Z.k)(er.A), disableColor: !0, className: nN._ }),
                children: (0, l.jsx)(w.j, {
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
                            ? nS.Ay.getGuildIconURL({ id: e.id, icon: e.icon, canAnimate: !1, size: 42 })
                            : null,
                    ...r,
                }),
            }),
        }),
    });
}
var nv = n(696292),
    ny = n(836480),
    nR = n(533129),
    nj = n(726845),
    nL = n(837057),
    nO = n(310419),
    nG = n(488995),
    nM = n(324580),
    nD = n(654487);
let nU = s.forwardRef(function (e, t) {
    let { selected: n, onClick: i, questId: r, className: a } = e,
        o = s.useCallback(() => {
            (0, nR.WL)({ source: nG.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON });
            let e = void 0 !== r ? nG.GlobalDiscoveryTab.QUESTS : nj.A.getField("selectedTab");
            switch (e) {
                case nG.GlobalDiscoveryTab.QUESTS:
                    return (0, nL.transitionToGlobalDiscovery)({
                        tab: nG.GlobalDiscoveryTab.QUESTS,
                        location: nD.rE.DISCOVERY_COMPASS,
                        questContent: nv.u.DISCOVERY_COMPASS,
                        questId: r,
                    });
                case nG.GlobalDiscoveryTab.SERVERS:
                    return (0, nL.transitionToGlobalDiscovery)({
                        tab: nG.GlobalDiscoveryTab.SERVERS,
                        entrypoint: nM.J8.GUILDS_BAR,
                    });
                case nG.GlobalDiscoveryTab.APPS:
                    return (0, nL.transitionToGlobalDiscovery)({
                        tab: nG.GlobalDiscoveryTab.APPS,
                        newSessionState: {
                            entrypoint: { name: nO.sW.GLOBAL_DISCOVERY_BUTTON },
                            restorePreviousView: !0,
                        },
                    });
                default:
                    return (0, nL.transitionToGlobalDiscovery)({ tab: e });
            }
        }, [r]);
    return (0, l.jsx)(t5, {
        id: "guild-discover-button",
        ref: t,
        className: a,
        onClick: () => {
            o(), void 0 !== i && i();
        },
        selected: n,
        tooltip: eH.intl.string(eH.t["4nEZLk"]),
        icon: ny.Q,
    });
});
var nP = n(506774),
    nw = n(509963),
    nk = n(111159),
    nV = n(793943),
    nB = n(927578),
    nH = n(350972),
    nF = n(677056),
    nW = n(526162),
    nK = n(635917);
function nY() {
    let [e, t] = (0, A.yK)([ew.default, nW.A], () => [
            nW.A.getCurrentDesktopIcon(),
            nB.Ay.isPremium(ew.default.getCurrentUser()),
        ]),
        n = (0, nV.fy)().activePanel === nV.HP.APP_ICON,
        i = (0, nK.gG)(e),
        s = i.id !== nH.LW.DEFAULT && (t || n),
        r = (0, l.jsx)(nk.p, { size: "custom", color: "currentColor", width: 24, height: 24 });
    return null != i && s ? (0, l.jsx)(nF.A, { id: i.id, size: nK.N8.SIZE_48 }) : r;
}
var nz = n(531260),
    nq = n(411976),
    nX = n(912309),
    nQ = n(400492),
    nJ = n(354670),
    nZ = n(619921),
    n$ = n(340829),
    n0 = n(966846),
    n1 = n(674378),
    n2 = n(235079),
    n6 = n(30186);
let n9 = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function n3(e) {
    let { selected: t, user: n, badge: i, link: r, showProgressBadge: a } = e,
        [o, d] = s.useState(!1),
        [c, h] = s.useState(!1),
        [A, _] = s.useState(null),
        [g, m] = s.useState(0),
        p = (0, u.Vd)("home"),
        f = (0, nV.fy)().activePanel === nV.HP.APP_ICON,
        E = () => {
            _(null), m(0), clearTimeout(A);
        };
    if (null == n) return null;
    let C = eH.intl.string(eH.t.YUU0RF);
    c && (C = nP.w.get(eB.wqg) ? eH.intl.string(eH.t["nkq1l+"]) : eH.intl.string(eH.t.Be8Q5E));
    let x = null;
    !t && a && (x = (0, l.jsx)(nw.A, { className: n6.Cp, determineOwnVisibility: !1 }));
    let I = t || o || f,
        b = (0, l.jsx)(P.Q, {
            selected: !0,
            lowerBadge: i > 0 ? ea(i) : null,
            upperBadge: x,
            lowerBadgeSize: { width: (0, J.o6)(i) },
            children: (0, l.jsx)(w.j, {
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != A && clearTimeout(A), _(setTimeout(E, 500)), m(g + 1), 15 === g)) {
                        E();
                        let e = !nP.w.get(eB.wqg);
                        nP.w.set(eB.wqg, e),
                            e && nP.w.set(n2.L, !0),
                            e ? (0, nQ.Ak)("discodo") : (0, nQ.Ak)("user_leave"),
                            h(!0),
                            setTimeout(() => {
                                h(!1);
                            }, 1e3);
                    }
                },
                selected: I,
                ariaLabel: eH.intl.string(eH.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...p,
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
                children: (0, l.jsx)(nY, {}),
            }),
        });
    return (0, l.jsx)("div", {
        className: n6.Uq,
        children: (0, l.jsx)(ns.A, {
            inlineSpecs: n9,
            tutorialId: "friends-list",
            position: "right",
            children: (0, l.jsxs)(Y, {
                children: [
                    (0, l.jsx)(W.A, { selected: t, hovered: o, className: n6.Io }),
                    (0, l.jsx)(t7, { hideOnClick: !0, text: C, selected: t, children: b }),
                ],
            }),
        }),
    });
}
function n7() {
    let e = (function () {
            let e = (0, eA.A)((e) => e.guildId),
                { pathname: t } = (0, c.zy)(),
                n = t.startsWith(eB.BVt.GUILD_DISCOVERY) || t.startsWith(eB.BVt.GLOBAL_DISCOVERY),
                i = t.startsWith(eB.BVt.GUILD_MEMBER_VERIFICATION("")),
                l = (0, e5.lI)();
            return null == e && !(n || i || l);
        })(),
        t = (0, A.bG)([n0.A, n$.A], () => {
            let e = (0, nw.v)(n0.A.activeItems, n$.A),
                { total: t, progress: n } = n1.zY(e),
                i = n1.uA(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, nX.kX)(),
        i = Object.keys(eQ.TP),
        s = (0, nz.A)(),
        { unviewedTrialCount: r, unviewedDiscountCount: a } = (0, A.cf)([nJ.A], () => ({
            unviewedTrialCount: nJ.A.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: nJ.A.getUnacknowledgedDiscountOffers().length,
        })),
        o = s.fractionalState === eQ.xc.NONE ? r + a : 0,
        d = (0, A.bG)([ew.default], () => ew.default.getCurrentUser()),
        u = (0, nq.W)(),
        h = n + o + u,
        _ = h === o && o > 0 && n + u === 0,
        g = nZ.A.getHomeLink();
    return (
        _ && (g = eB.BVt.APPLICATION_STORE),
        (0, l.jsx)(n3, {
            selected: e,
            user: d,
            selectedChannelId: ep.A.getChannelId(eB.ME),
            badge: h,
            link: g,
            showProgressBadge: t,
        })
    );
}
var n4 = n(473201);
function n5(e) {
    let { fullWidth: t } = e;
    return (0, l.jsx)(Y, { children: (0, l.jsx)("div", { className: a()(n4.t, { [n4.I]: t }) }) });
}
var n8 = n(349288),
    ie = n(695366),
    it = n(919638),
    ii = n(818348),
    il = n(585212);
function is() {
    let e = (0, A.bG)([it.A, tc.A], () => it.A.unavailableGuilds.filter((e) => null == tc.A.getGuild(e)).length),
        t = (0, u.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, l.jsx)(Y, {
              children: (0, l.jsx)(t7, {
                  text: eH.intl.format(eH.t["TnH05/"], { count: e }),
                  children: (0, l.jsx)(n8.Anchor, {
                      href: ii.qF.STATUS,
                      target: "_blank",
                      className: il.h,
                      "aria-label": eH.intl.formatToPlainString(eH.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, l.jsx)(ie.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
var ir = n(312742),
    ia = n(317097),
    io = n(319060),
    id = n(866323),
    ic = n(817281),
    iu = n(534409),
    ih = n(240248),
    iA = n(678708),
    i_ = n(187322),
    ig = n(140735),
    im = n(548118),
    ip = n(273923);
function iE(e) {
    let { guildId: t, animate: n } = e,
        i = (0, A.bG)([tc.A], () => tc.A.getGuild(t), [t]),
        s = (0, x.r)(p.A.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? (0, l.jsx)("div", { className: a()(ip.VL, ip.zU), children: (0, l.jsx)(ie.E, { color: "currentColor" }) })
        : (0, l.jsx)(im.Ay, {
              guild: i,
              animate: n,
              size: im.Ay.Sizes.MINI,
              iconSize: s,
              lossless: !0,
              className: ip.VL,
              tabIndex: -1,
          });
}
function iC(e) {
    let { folderNode: t, hovered: n, sorting: i } = e,
        { children: s } = t,
        r = n && i,
        o = (0, l.jsx)("div", {
            className: ip.hJ,
            children: (0, l.jsx)("div", {
                className: ip.Eh,
                children: (0, l.jsx)(iA.s, { size: "sm", color: "currentColor" }),
            }),
        }),
        d = (0, l.jsx)("div", {
            className: ip.qJ,
            children: (0, l.jsx)("div", {
                className: ip.jg,
                children: s.slice(0, 4).map((e) => (0, l.jsx)(iE, { guildId: e.id, animate: n }, e.id)),
            }),
        });
    return (0, l.jsxs)("div", {
        "aria-hidden": !0,
        className: a()({ [ip.NG]: r, [ip.yd]: !r }),
        children: [!r && o, d],
    });
}
function ix(e) {
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
            onClick: h,
            onContextMenu: A,
            onHoverChange: _,
            onKeyDown: g,
            treeItemProps: { onFocus: m, ...f },
            "aria-setsize": E,
            "aria-posinset": C,
        } = e,
        [x, I] = s.useState(!1),
        b = s.useCallback(() => {
            i || I(!0), _?.(!0);
        }, [i, _]),
        S = s.useCallback(() => {
            i || I(!1), _?.(!1);
        }, [i, _]),
        N = n || null == r ? null : eo(r),
        T =
            !n && a > 0
                ? ea(a, o ? p.A.colors.BACKGROUND_MOD_STRONG.css : p.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css)
                : null;
    return (0, l.jsx)(i_.vN, {
        children: (0, l.jsxs)(t9.D, {
            className: ip.H3,
            onClick: h,
            onContextMenu: A,
            onMouseEnter: b,
            onMouseLeave: S,
            onKeyDown: g,
            onFocus: m,
            focusProps: { enabled: !1 },
            ...f,
            role: "treeitem",
            "aria-setsize": E,
            "aria-posinset": C,
            "aria-expanded": n,
            "aria-owns": c,
            children: [
                (0, l.jsx)(ig.A, {
                    children: eH.intl.formatToPlainString(eH.t["90/DwM"], { folderName: d, mentions: a }),
                }),
                (0, l.jsx)(P.Q, {
                    "aria-hidden": !0,
                    isFolder: !0,
                    upperBadge: N,
                    lowerBadge: T,
                    lowerBadgeSize: { width: (0, J.o6)(a) },
                    children: (0, l.jsx)("div", {
                        className: ip.vA,
                        children:
                            null != u
                                ? (0, l.jsx)("div", { className: ip.hJ, children: u })
                                : (0, l.jsx)(iC, { folderNode: t, hovered: x, sorting: i }),
                    }),
                }),
            ],
        }),
    });
}
var iI = n(573435),
    ib = n(643918);
function iS(e) {
    let { className: t, isFolder: n } = e,
        i = (0, x.r)(p.A.modules.guildbar.AVATAR_SIZE);
    return (0, l.jsx)(iI.Ay, {
        mask: iI.Ay.Masks.SQUIRCLE,
        className: a()(t, ib.OL, { [ib.lQ]: n }),
        width: i,
        height: i,
        children: (0, l.jsx)("div", { className: ib.ZU }),
    });
}
var iN = n(114329),
    iT = n(620370);
let iv = (0, ih.xI)(io.A.FOLDER_ITEM_ANIMATION_DURATION),
    iy = (0, tG.animated)(E.B),
    iR = s.memo(function (e) {
        var t;
        let n,
            i,
            r,
            {
                folderNode: o,
                setNodeRef: d,
                selected: c,
                expanded: h,
                mediaState: A,
                mentionCount: _ = 0,
                isMentionLowImportance: g,
                unread: m = !1,
                defaultFolderName: f,
                draggable: E = !1,
                sorting: C = !1,
                onDragStart: I,
                onDragEnd: b,
                onExpandCollapse: S,
                onContextMenu: N,
                renderChildNode: T,
                folderButtonSize: v,
                folderButtonContent: y,
                "aria-setsize": R,
                "aria-posinset": j,
            } = e,
            { id: L, name: O, children: G } = o,
            [M, D] = s.useState(!1),
            [U, P] = s.useState(!1),
            w = M || U,
            k = (0, iu.qK)("FolderItem");
        s.useEffect(() => {
            C && D(!1);
        }, [C]);
        let [{ dragging: V }, B] = (0, ir.i)({
                type: t_.PJ.FOLDER,
                item: () => (I?.(), { type: t_.PJ.FOLDER, nodeId: o.id }),
                end() {
                    b?.(), (0, ic.um)(tu.Ay.getCompatibleGuildFolders());
                },
                collect: (e) => ({ dragging: e.isDragging() }),
            }),
            H = s.useCallback((e) => {
                P(e);
            }, []),
            F = s.useCallback(
                (e) => {
                    (("ArrowRight" === e.key && !h) || ("ArrowLeft" === e.key && h)) && S();
                },
                [S, h],
            ),
            K = null != O && "" !== O ? O : null != f && "" !== f ? f : eH.intl.string(eH.t.xV9hVh),
            z = (0, u.Vd)(`${L}`),
            q = `folder-items-${L}`,
            X =
                ((t = G.length),
                (n = (0, x.r)(p.A.modules.guildbar.FOLDER_SIZE)),
                (i = (0, x.r)(p.A.modules.guildbar.AVATAR_SIZE)),
                t * (i + (r = (0, x.r)(p.A.space.SPACE_XS))) - r + (r - (n - i) / 2) + (0, x.r)(p.A.space.SPACE_4)),
            Q = (0, id.p)(!V && h, {
                from: { height: 0 },
                enter: { height: 1 },
                leave: { height: 0 },
                config: { duration: iv },
            }),
            J = s.useCallback((e) => d?.(L, e), [d, L]),
            Z = (0, l.jsxs)(Y, {
                children: [
                    (0, l.jsx)(W.A, { disabled: V || h, hovered: M, selected: c, unread: m, className: iT.Io }),
                    (0, l.jsx)(t7, {
                        text: K,
                        disabled: C,
                        selected: c,
                        disableWrapper: !0,
                        children: (0, l.jsx)("div", {
                            ref: E
                                ? (e) => {
                                      B(e);
                                  }
                                : void 0,
                            className: a()(ip.MJ, { [ip.L0]: "icon" === v || k, [iT.oR]: !V && U && !h }),
                            "data-dnd-name": K,
                            children: V
                                ? (0, l.jsx)(iS, { isFolder: !0 })
                                : (0, l.jsx)(ix, {
                                      folderNode: o,
                                      expanded: h,
                                      sorting: C,
                                      mediaState: A,
                                      mentionCount: _,
                                      isMentionLowImportance: g,
                                      tooltipName: K,
                                      folderGroupId: q,
                                      onClick: S,
                                      onContextMenu: N,
                                      onHoverChange: D,
                                      onKeyDown: F,
                                      treeItemProps: z,
                                      folderButtonContent: y,
                                      "aria-setsize": R,
                                      "aria-posinset": j,
                                  }),
                        }),
                    }),
                    E ? (0, l.jsx)(np, { name: K, targetNode: o, onDragOverChanged: H }) : null,
                ],
            }),
            $ = null != o.color ? o.color : iN.DO,
            ee = $ === iN.DO ? void 0 : (0, ia.Hl)($);
        return (0, l.jsxs)("div", {
            ref: J,
            className: a()(ip.qc, { [ip.Av]: h, [ip.Lg]: w }),
            style: { "--custom-folder-color": ee ?? "" },
            "data-drop-hovering": U,
            children: [
                !V && h && (0, l.jsx)("span", { className: ip.GO }),
                Z,
                Q((e, t, n) => {
                    let { key: i } = n;
                    return (
                        t &&
                        (0, l.jsx)(
                            iy,
                            {
                                id: q,
                                role: "group",
                                as: "ul",
                                gap: "xs",
                                className: ip.TN,
                                style: { height: e.height.to((e) => e * X) },
                                "aria-label": o.name,
                                children: G.map((t, n) => T(t, n, G.length, e.height)),
                            },
                            i,
                        )
                    );
                }),
                E && h ? (0, l.jsx)(nf, { name: K, targetNode: o }) : null,
            ],
        });
    });
var ij = n(354583);
let iL = s.memo(function (e) {
    let t,
        i,
        r,
        a,
        o,
        d,
        c,
        u,
        h,
        _,
        g,
        { folderNode: m, ...p } = e,
        { id: f, name: E, color: C, children: x } = m,
        I = x.map((e) => e.id),
        b = (0, eA.A)((e) => e.guildId),
        S = (0, A.bG)([tp.A], () => tp.A.isFolderExpanded(f)),
        N = (function (e) {
            let t = e.children
                    .map((e) => {
                        let t = e.id,
                            n = tc.A.getGuild(t);
                        return null != n ? n.name : null;
                    })
                    .filter(eV.Vq),
                n = 2 * eB.F05,
                i = [];
            for (let e of t) (e.length < n || 0 === i.length) && (i.push(e), (n -= e.length));
            return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
        })(m),
        T =
            ((t = (0, A.bG)([tO.A], () => tO.A.getGuildId())),
            (i = m.children.map((e) => e.id)),
            (r = null != t && i.includes(t)),
            (a = !1),
            (o = !1),
            (d = !1),
            (c = (0, A.bG)([tO.A], () => tO.A.getChannelId())),
            (h = null != (u = (0, ij.A)()?.guild_id) && i.includes(u)),
            (_ = (0, A.bG)([ef.A], () => null != c && ef.A.hasVideo(c), [c])),
            (g = (0, A.bG)([eg.A], () => eg.A.getCurrentUserActiveStream())),
            r && ((a = !_), (o = _), (d = null != g && null != g.guildId && i.includes(g.guildId))),
            s.useMemo(
                () => ({ audio: a, video: o, screenshare: d, liveStage: h, isCurrentUserConnected: r }),
                [a, o, d, h, r],
            )),
        {
            mentionCount: v,
            isMentionLowImportance: y,
            unread: R,
        } = (0, A.cf)([eT.default], () => ({
            mentionCount: I.map((e) => eT.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
            isMentionLowImportance: I.every((e) => eT.default.getIsMentionLowImportance(e)),
            unread: I.some((e) => eT.default.hasUnread(e)),
        })),
        j = s.useCallback(() => {
            nc.A.toggleGuildFolderExpand(f);
        }, [f]),
        L = s.useCallback(
            (e) => {
                (0, tD.L3)(e, async () => {
                    let { default: e } = await n.e("32857").then(n.bind(n, 842112));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, folderId: f, folderName: E, folderColor: C, unread: R || v > 0 });
                });
            },
            [f, E, C, R, v],
        );
    return (0, l.jsx)(iR, {
        ...p,
        folderNode: m,
        expanded: S,
        selected: null != b && I.includes(b),
        mentionCount: v,
        isMentionLowImportance: y,
        unread: R,
        mediaState: T,
        defaultFolderName: N,
        onExpandCollapse: j,
        onContextMenu: L,
    });
});
var iO = n(113494),
    iG = n(821124),
    iM = n(212455);
function iD(e) {
    let t = e?.features.has(eB.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, A.bG)([iM.A, ew.default, td.Ay], () => {
            if (null == e) return;
            let t = iM.A.getRequest(e.id),
                n = ew.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = td.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, iG.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
var iU = n(347951),
    iP = n(478437),
    iw = n(811024),
    ik = n(508654),
    iV = n(233993),
    iB = n(446600),
    iH = n(95701),
    iF = n(495544);
function iW(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ev.A;
    return null != e && e.type !== iP.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(eB.hVb.VIEW_CHANNEL, e);
}
function iK(e) {
    let t = (0, A.bG)([eR.Ay], () => eR.Ay.isMuted(e)),
        n = (0, ik.BP)(e),
        i = (0, A.yK)([H.Ay, tV.A], () =>
            H.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                var t, n;
                return (
                    (t = [...e.userIds]),
                    (n = tV.A.getBlockedOrIgnoredIDs()),
                    !t.some((e) => (null != n ? n.includes(e) : tV.A.isBlockedOrIgnored(e)))
                );
            }),
        ),
        l = (0, F.H)(i[0]?.location),
        s = (0, iw.Gp)(l),
        {
            guildHasVoice: r,
            guildHasVideo: a,
            selectedVoiceChannelHasVideo: o,
        } = (0, A.cf)([ep.A, ef.A, tc.A, ev.A, em.A], () => {
            var n;
            let i = ep.A.getVoiceChannelId(),
                l = tc.A.getGuild(e)?.afkChannelId,
                s = ef.A.getUsersWithVideo(e),
                r =
                    ((n = ef.A.getVoiceStates(e)),
                    d()(n)
                        .filter((e) => !tV.A.isBlockedOrIgnored(e.userId))
                        .keyBy("userId")
                        .value());
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in r) if (iW(em.A.getBasicChannel(r[e].channelId), l ?? void 0, ev.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of s) if (iW(em.A.getBasicChannel(r[e]?.channelId), l ?? void 0, ev.A)) return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && ef.A.hasVideo(i),
            };
        }, [e, t]),
        c = iF.default.getId();
    return (0, A.cf)([ep.A, em.A, H.Ay, iB.A, eg.A, ev.A], () => {
        let l = ep.A.getVoiceChannelId(),
            d = em.A.getChannel(l)?.guild_id === e,
            u = !1,
            h = !1,
            A = !1,
            _ = !1,
            g = !1,
            m = !1;
        if (!d && t)
            return {
                audio: u,
                video: _,
                screenshare: g,
                liveStage: A,
                activeEvent: h,
                activity: m,
                isCurrentUserConnected: !1,
            };
        let p = eE.default.keys(iB.A.getStageInstancesByGuild(e)).some((e) => {
                let t = em.A.getChannel(e);
                return null != t && ev.A.can(iV.Gk, t);
            }),
            f = d && (em.A.getChannel(l)?.isGuildStageVoice() ?? !1),
            E = !!d && null != eg.A.getActiveStreamForUser(c, e),
            C = eg.A.getAllApplicationStreams()
                .filter((e) => !tV.A.isBlockedOrIgnored(e.ownerId))
                .some((t) => t.guildId === e),
            x = d && o,
            I = (() => {
                if (s) return i.length > 0;
                for (let e of i) {
                    let t = em.A.getChannel((0, F.H)(e.location));
                    if (null != t && (0, iH.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            b = H.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            d
                ? ((u = !0), (h = n?.channel_id === l), (A = f), (_ = x), (g = E), (m = b))
                : ((u = r), (h = null != n), (A = p), (_ = a), (g = C), (m = I)),
            {
                audio: u,
                video: _,
                screenshare: g,
                liveStage: A,
                activeEvent: h,
                activity: m,
                isCurrentUserConnected: d || f,
            }
        );
    }, [e, t, o, c, s, i, n, r, a]);
}
var iY = n(607399),
    iz = n(702841),
    iq = n(658128),
    iX = n(976860),
    iQ = n(676279);
function iJ(e) {
    let { guild: t, show: n, active: i, onAnimationStart: s, onAnimationRest: r } = e,
        o = {},
        d = {};
    (o.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)"),
        (d.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)");
    let c = (0, x.r)(p.A.unsafe_rawColors.BRAND_500).hex(),
        u = (0, x.r)(p.A.unsafe_rawColors.PRIMARY_630).hex();
    i && null == t.icon && ((o.backgroundColor = c), (d.backgroundColor = u));
    let h = (0, id.p)(n, { from: o, enter: d, leave: o, config: { duration: 100 }, onStart: s, onRest: r });
    return (0, l.jsx)(l.Fragment, {
        children: h(
            (e, n, i) =>
                n &&
                (0, l.jsx)(
                    "div",
                    {
                        className: ip.qc,
                        children: (0, l.jsx)("div", {
                            className: a()(ip.MJ, ip.L0),
                            style: { margin: 0 },
                            children: (0, l.jsx)(tG.animated.div, {
                                className: ip.NG,
                                style: e,
                                children: (0, l.jsx)("div", {
                                    className: ip.qJ,
                                    children: (0, l.jsx)("div", {
                                        className: ip.jg,
                                        children: (0, l.jsx)(im.Ay, {
                                            guild: t,
                                            size: im.Ay.Sizes.SMOL,
                                            className: ip.VL,
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
var iZ = n(454938),
    i$ = n(714991),
    i0 = n(57991),
    i1 = n(164956),
    i2 = n(624265),
    i6 = n(970278),
    i9 = n(808728);
function i3(e, t, n) {
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: eF.nM,
              children: [
                  (0, l.jsx)(e, { className: eF.RI, color: "currentColor" }),
                  (0, l.jsx)(eD.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function i7(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, l.jsx)(eG.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: eH.intl.string(eH.t.fpKdS1),
          })
        : (0, l.jsx)(tK.A, { muteConfig: t, className: n });
}
function i4(e) {
    let t,
        n,
        i,
        r,
        o,
        c,
        u,
        h,
        _,
        g,
        m,
        p,
        f,
        E,
        C,
        x,
        I,
        b,
        S,
        N,
        { guild: T } = e,
        v = T.id,
        {
            voiceUsersToShow: y,
            stageSpeakers: R,
            numStageListeners: j,
            streamUsersToShow: L,
            embeddedActivitiesUsers: O,
        } = ((t = T.id),
        (n = (0, A.yK)(
            [i9.Ay, i6.A],
            () => [
                ...i9.Ay.getChannels(t)
                    [i9.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === eB.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(i6.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (i = (0, i2.Ay)(t)),
        (r = s.useMemo(() => i.map((e) => e.id), [i])),
        (o = (0, A.bG)([ek.Ay], () => ek.Ay.getVoiceStates(t), [t])),
        (c = (0, A.yK)([tV.A], () => tV.A.getBlockedOrIgnoredIDs())),
        (u = d().flatMap(n, (e) =>
            e === T.afkChannelId
                ? []
                : tB(
                      (o[e] ?? []).map((e) => {
                          let { user: t } = e;
                          return t;
                      }),
                      c,
                  ),
        )),
        (h = (0, A.yK)([eU.A], () =>
            d().flatMap(r, (e) =>
                e === T.afkChannelId
                    ? []
                    : tB(
                          eU.A.getMutableParticipants(e, eP.ip.SPEAKER)
                              .filter((e) => e.type === eP.wY.VOICE)
                              .map((e) => {
                                  let { user: t } = e;
                                  return t;
                              }),
                          c,
                      ),
            ),
        )),
        (_ = (0, A.bG)([eU.A], () => {
            let e = 0;
            for (let t of r) e += eU.A.getParticipantCount(t, eP.ip.AUDIENCE);
            return e;
        })),
        (g = (0, A.yK)(
            [eg.A],
            () =>
                tH(
                    eg.A.getAllApplicationStreams()
                        .filter((e) => e.guildId === t)
                        .map((e) => e.ownerId),
                    c,
                ),
            [c, t],
        )),
        (m = (0, A.yK)(
            [H.Ay],
            () =>
                tH(
                    H.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds)),
                    c,
                ),
            [t, c],
        )),
        (p = (0, A.yK)([ew.default], () => tB(m.map((e) => ew.default.getUser(e))), [m])),
        (f = (0, A.yK)([ew.default], () => g.map((e) => ew.default.getUser(e)), [g])),
        (C = tB((E = u.filter((e) => !g.includes(e.id) && !m.includes(e.id))))),
        (x = f.filter((e) => null != e && !m.includes(e.id))),
        (I = (0, A.bG)([tF.A], () => tF.A.getUserAffinitiesMap(), [])),
        (b = s.useMemo(() => (0, tW.L)(C, I, "GuildTooltip - nonBlockedUsers"), [C, I])),
        (S = s.useMemo(() => (0, tW.L)(h, I, "GuildTooltip - stageSpeakers"), [h, I])),
        (N = s.useMemo(() => (0, tW.L)(x, I, "GuildTooltip - streamUsers"), [x, I])),
        {
            voiceUsersToShow: b,
            stageSpeakers: S,
            numStageListeners: _,
            streamUsersToShow: N,
            embeddedActivitiesUsers: s.useMemo(() => (0, tW.L)(p, I, "GuildTooltip - embeddedActivitiesUsers"), [p, I]),
            hasActivity: h.length > 0 || E.length > 0 || x.length > 0 || p.length > 0,
        }),
        G = i3(ei.H, y, v),
        M =
            0 === R.length
                ? null
                : (0, l.jsxs)("div", {
                      className: eF.nM,
                      children: [
                          (0, l.jsx)(ee.q, { size: "lg", color: "currentColor", className: eF.RI }),
                          (0, l.jsx)(eD.Ay, { guildId: v, users: R, max: 3 }),
                          (0, l.jsxs)("div", {
                              className: eF.GZ,
                              children: [
                                  (0, l.jsx)(eO.L, { size: "xs", color: "currentColor" }),
                                  (0, l.jsx)(eG.E, {
                                      className: eF._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: j,
                                  }),
                              ],
                          }),
                      ],
                  }),
        D = i3(eM.F, L, v),
        U = i3(el.k, O, v),
        { isMuted: P, muteConfig: w } = (0, A.cf)(
            [eR.Ay],
            () => ({ isMuted: eR.Ay.isMuted(v), muteConfig: eR.Ay.getMuteConfig(v) }),
            [v],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            M,
            G,
            D,
            U,
            P ? (0, l.jsx)(i7, { muteConfig: w, className: a()(eF.LM, { [eF.Sx]: null != G || null != D }) }) : null,
        ],
    });
}
function i5(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, l.jsx)(eG.E, {
        className: eF.BT,
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
function i8(e) {
    let { guild: t } = e,
        n = (0, iZ.A)(t),
        i = iD(t),
        s = null != i ? (0, l.jsx)(i5, { guildJoinRequestStatus: i }) : null,
        r = (0, l.jsx)(i4, { guild: t }),
        o = (0, A.bG)([i1.A], () => i1.A.isViewingRoles(t.id)),
        d = (0, iU.Ig)(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: a()(eF.nM, eF.Dl),
                children: [
                    n
                        ? (0, l.jsx)(i0.A, { guild: t, className: eF.WX })
                        : (0, l.jsx)(i$.A, { guild: t, size: 20, className: eF.aL }),
                    (0, l.jsx)("span", { className: a()(eF.cN, eF.NT), children: t.name }),
                ],
            }),
            d
                ? (0, l.jsx)(eG.E, {
                      className: eF.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: eH.intl.string(eH.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, l.jsx)(eG.E, {
                      className: eF.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: eH.intl.string(eH.t["5LwN89"]),
                  })
                : (s ?? r),
        ],
    });
}
function le(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: r } = e,
        a = s.useMemo(
            () => (n ? null : (0, l.jsx)("div", { className: eF.A_, children: (0, l.jsx)(i8, { guild: t }) })),
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
let lt = { analyticsSource: { page: eB.liQ.GUILD_CHANNEL, section: eB.JJy.CHANNEL_LIST, object: eB.ZSU.CHANNEL } };
function ln(e, t) {
    (0, tD.L3)(e, async () => {
        let { default: e } = await Promise.all([
            n.e("49681"),
            n.e("96382"),
            n.e("20044"),
            n.e("28136"),
            n.e("82486"),
            n.e("77602"),
            n.e("68587"),
            n.e("22547"),
            n.e("86546"),
            n.e("15373"),
            n.e("42749"),
            n.e("56026"),
            n.e("16301"),
            n.e("22191"),
            n.e("30501"),
            n.e("25961"),
            n.e("2736"),
            n.e("13848"),
            n.e("47810"),
            n.e("46291"),
            n.e("41068"),
            n.e("32347"),
            n.e("8458"),
            n.e("15666"),
            n.e("11810"),
            n.e("95765"),
            n.e("13337"),
            n.e("65338"),
            n.e("4788"),
            n.e("21162"),
        ]).then(n.bind(n, 860417));
        return (n) => (0, l.jsx)(e, { ...n, guild: t });
    });
}
let li = s.memo(function (e) {
    let {
            guildNode: t,
            setRef: n,
            onDragStart: i,
            onDragEnd: r,
            route: o,
            guild: d,
            animatable: c,
            selected: h = !1,
            unread: A = !1,
            mediaState: _,
            unavailable: g = !1,
            badge: f = 0,
            isMentionLowImportance: E,
            contextMenu: C = ln,
            draggable: I = !1,
            sorting: b = !1,
            preloadOnClick: S = !0,
            guildJoinRequestStatus: N,
            height: T,
            "aria-setsize": v,
            "aria-posinset": y,
        } = e,
        { id: R, parentId: j } = t,
        L =
            e.upperBadge ??
            (g
                ? (0, l.jsx)(J.fk, { icon: (0, Z.k)(er.A), disableColor: !0, className: K.yk })
                : null != _
                  ? eo(_)
                  : void 0),
        O = e.lowerBadge ?? void 0;
    null == O && f > 0
        ? (O =
              ea(f, E ? p.A.colors.BACKGROUND_MOD_STRONG.css : p.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css) ??
              void 0)
        : null == O && null != N && (O = ed({ guildJoinRequestStatus: N }) ?? void 0);
    let G = e.lowerBadgeSize ?? { width: (0, J.o6)(f) },
        [{ dragging: M }, D] = (0, ir.i)({
            type: t_.PJ.GUILD,
            item: () => (
                requestAnimationFrame(() => {
                    i?.();
                }),
                { type: t.type, nodeId: t.id }
            ),
            end() {
                r?.(), (0, ic.um)(tu.Ay.getCompatibleGuildFolders());
            },
            collect: (e) => ({ dragging: e.isDragging() }),
        }),
        U = (0, u.Vd)(R ?? eB.dJq, null != j ? 2 : 1),
        [k, V] = s.useState(!1),
        H = !b && k,
        [F, z] = s.useState(!1),
        [q, X] = s.useState(!1),
        [Q] = s.useState(() => new m.J_(70, () => X(!0))),
        $ = (0, iQ.nr)() && !iY.Fr;
    s.useEffect(() => () => Q.cancel(), [Q]);
    let ee = s.useCallback(() => {
            null != o ? (0, iX.pX)(o, { state: lt }) : (0, e_.u)(R, { state: lt });
        }, [R, o]),
        et = s.useCallback(() => {
            if (null != o || null == d || g || !S) return;
            let e = (0, iq.W)(d.id);
            null != e && B.A.preload(d.id, e);
        }, [o, d, g, S]),
        en = (0, iz.bG)([td.Ay], () => td.Ay.isCurrentUserGuest(R)),
        ei = s.useCallback(
            (e) => {
                null == d || en || C(e, d);
            },
            [d, C, en],
        ),
        el = s.useCallback(
            (e) => {
                "ArrowLeft" === e.key && null != j && document.querySelector(`[aria-owns=folder-items-${j}]`)?.focus();
            },
            [j],
        ),
        es = s.useCallback(
            (e) => {
                e ? Q.delay() : (Q.cancel(), X(!1));
            },
            [Q],
        );
    function ec() {
        b || V(!0);
    }
    function eu() {
        b || V(!1);
    }
    let eh = s.useCallback(
            (e) => {
                n?.(R, e);
            },
            [R, n],
        ),
        eA = (0, x.r)(p.A.modules.guildbar.AVATAR_SIZE);
    if (null == d) return null;
    let eg = d.name;
    f > 0
        ? (eg = eH.intl.formatToPlainString(eH.t["/uzRss"], { guildName: d.name, mentions: f }))
        : A && (eg = eH.intl.formatToPlainString(eH.t.lzqe42, { guildName: d.name }));
    let em = (0, l.jsx)(iJ, {
            guild: d,
            show: q,
            active: h,
            onAnimationStart: function () {
                z(q);
            },
            onAnimationRest: function () {
                q || z(!1);
            },
        }),
        ep = $
            ? (0, l.jsx)(w.j, {
                  ariaLabel: eg,
                  name: d.name,
                  onClick: ee,
                  onMouseEnter: ec,
                  onMouseLeave: eu,
                  onMouseDown: et,
                  onContextMenu: ei,
                  onKeyDown: el,
                  icon: (0, nr.Iv)(d, 2 * eA, H && c, !0),
                  selected: h || H,
                  ...U,
                  "aria-setsize": v,
                  "aria-posinset": y,
                  "aria-selected": h,
              })
            : (0, l.jsx)(P.Q, {
                  selected: h,
                  children: (0, l.jsx)("div", {
                      ref: I
                          ? (e) => {
                                D(e);
                            }
                          : void 0,
                      "data-dnd-name": d.name,
                      "data-drop-hovering": q,
                      children: (0, l.jsx)(w.j, {
                          ariaLabel: eg,
                          name: d.name,
                          onClick: ee,
                          onMouseEnter: ec,
                          onMouseLeave: eu,
                          onMouseDown: et,
                          onContextMenu: ei,
                          onKeyDown: el,
                          icon: (0, nr.Iv)(d, 2 * eA, H && c, !0),
                          selected: h || H,
                          ...U,
                          "aria-setsize": v,
                          "aria-posinset": y,
                          "aria-selected": h,
                      }),
                  }),
              }),
        ef = q || F ? em : ep,
        eE = (0, l.jsx)(nE, { children: (0, l.jsx)(iS, {}) }),
        eC = $
            ? (0, l.jsx)(tG.animated.div, {
                  ref: I
                      ? (e) => {
                            D(e);
                        }
                      : void 0,
                  "data-dnd-name": d.name,
                  style: { scale: null == T ? 1 : T },
                  "data-drop-hovering": q,
                  className: a()(iT.rN, { [iT.p9]: b, [iT.oR]: q, [iT.wH]: q || h }),
                  children: (0, l.jsx)(P.Q, {
                      selected: !0,
                      upperBadge: L,
                      lowerBadge: O,
                      lowerBadgeSize: G,
                      children: ef,
                  }),
              })
            : (0, l.jsx)(tG.animated.div, {
                  style: { scale: null == T ? 1 : T },
                  className: a()(iT.rN, { [iT.p9]: b, [iT.oR]: q, [iT.wH]: q || h }),
                  "data-drop-hovering": q,
                  children: (0, l.jsx)(P.Q, {
                      selected: h,
                      upperBadge: L,
                      lowerBadge: O,
                      lowerBadgeSize: G,
                      children: ef,
                  }),
              });
    return (0, l.jsxs)(Y, {
        ref: eh,
        children: [
            (0, l.jsx)(W.A, { hovered: !M && H, selected: !M && h, unread: !M && A, className: iT.Io }),
            (0, l.jsx)(le, { guild: d, disabled: b, isDragging: M, children: M ? eE : eC }),
            I ? (0, l.jsx)(np, { name: d.name, targetNode: t, onDragOverChanged: es }) : null,
        ],
    });
});
var ll = n(182240);
let ls = s.memo(function (e) {
    let { guildNode: t, lowerBadge: n } = e,
        i = t.id,
        r = (0, A.bG)([tc.A], () => tc.A.getGuild(i)),
        a = iD(r),
        o = (0, A.bG)([tb.A], () => tb.A.isFocused()),
        d = (0, A.bG)([it.A], () => it.A.isUnavailable(i)),
        c = (0, eA.A)((e) => e.guildId),
        u = iK(i),
        {
            badge: h,
            unread: _,
            isMentionLowImportance: g,
        } = (0, A.cf)([eT.default], () => ({
            badge: eT.default.getMentionCount(i),
            isMentionLowImportance: eT.default.getIsMentionLowImportance(i),
            unread: eT.default.hasUnread(i),
        })),
        m = (0, iU.Ig)(r) && 0 === h,
        p = s.useMemo(
            () =>
                null != n
                    ? n
                    : m
                      ? (0, l.jsx)("div", {
                            className: ll.j,
                            children: (0, l.jsx)(iO.E, {
                                size: "custom",
                                color: "currentColor",
                                className: ll.v,
                                width: 10,
                                height: 10,
                            }),
                        })
                      : null,
            [n, m],
        );
    return (0, l.jsx)(li, {
        ...e,
        guild: r,
        unavailable: d,
        animatable: o,
        selected: c === i,
        badge: h,
        isMentionLowImportance: g,
        lowerBadge: p,
        unread: _,
        mediaState: u,
        guildJoinRequestStatus: a,
    });
});
var lr = n(922016),
    la = n(534514),
    lo = n(821609),
    ld = n(339350),
    lc = n(475743),
    lu = n(624458),
    lh = n(408213),
    lA = (((i = {})[(i.PENDING_JOIN_REQUESTS_FOLDER = 1)] = "PENDING_JOIN_REQUESTS_FOLDER"), i),
    l_ = n(928568);
function lg(e, t) {
    (0, tD.L3)(e, async () => {
        let { default: e } = await n.e("49056").then(n.bind(n, 97187));
        return (n) => (0, l.jsx)(e, { ...n, guild: t });
    });
}
function lm(e) {
    let { guildNode: t } = e,
        n = t.id,
        i = (0, A.bG)([iM.A], () => iM.A.getRequest(n)),
        s = (0, A.bG)([iM.A], () => iM.A.getJoinRequestGuild(n), [n]),
        r = (0, A.bG)([tb.A], () => tb.A.isFocused()),
        a = (0, A.bG)([tg.A], () => tg.A.getGuildId());
    return null == s
        ? null
        : (0, l.jsx)(li, {
              guildNode: t,
              guild: s,
              animatable: r,
              draggable: !1,
              selected: n === a,
              preloadOnClick: !1,
              contextMenu: lg,
              lowerBadge:
                  i?.applicationStatus === es.B5.REJECTED
                      ? ed({ guildJoinRequestStatus: i.applicationStatus })
                      : void 0,
              route: eB.BVt.GUILD_MEMBER_VERIFICATION(n),
          });
}
var lp = n(785439);
function lf(e) {
    let { onActivate: t, children: n } = e,
        i = s.useRef(null),
        r = (0, A.bG)([iM.A], () => iM.A.hasJoinRequestCoackmark()),
        a = s.useCallback(() => {
            lh.Ay.clearCoachmark();
        }, []),
        o = (0, lc.A)(r),
        d = s.useRef(null);
    return (
        s.useEffect(() => {
            r && r !== o && (t(), d.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [d, r, o, t]),
        (0, l.jsxs)("div", {
            className: lp.kL,
            children: [
                (0, l.jsx)(lr.Y, {
                    ref: d,
                    targetElementRef: i,
                    shouldShow: r,
                    renderPopout: () =>
                        (0, l.jsxs)("div", {
                            className: lp.jC,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: lp.Bm,
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: lp.q3,
                                            children: [
                                                (0, l.jsx)(la.D, {
                                                    variant: "heading-md/medium",
                                                    children: eH.intl.string(eH.t["0YV0YE"]),
                                                }),
                                                (0, l.jsx)(eG.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eH.intl.string(eH.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsx)(lo.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eH.intl.string(eH.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: a,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", { className: lp.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, l.jsx)("div", { ...e, className: lp.Ne, ref: i }),
                }),
                n,
            ],
        })
    );
}
function lE(e) {
    let { onActivate: t } = e,
        [n, i] = s.useState(!1),
        r = (0, A.bG)([tg.A], () => tg.A.getGuildId()),
        a = (0, A.bG)([iM.A], () => iM.A.hasFetchedRequestToJoinGuilds),
        o = (0, l_.A)(),
        d = (0, lc.A)(r),
        c = s.useMemo(() => {
            let e = (0, t_.xW)({
                folderId: lA.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: eH.intl.string(eH.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of o) e.children.push((0, t_.EL)(t, e.id));
            return e;
        }, [o, n]);
    s.useEffect(() => {
        n && !a && lu.A.fetchRequestToJoinGuilds();
    }, [n, a]);
    let u = null != r && o.includes(r);
    return (s.useEffect(() => {
        !n && u && d !== r && i(!0);
    }, [n, u, d, r]),
    0 === o.length)
        ? null
        : (0, l.jsx)(lf, {
              onActivate: t,
              children: (0, l.jsx)(iR, {
                  folderNode: c,
                  expanded: n,
                  selected: u,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      i(!n), lh.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, l.jsx)("div", {
                      className: lp.rH,
                      children: (0, l.jsx)(ld.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== t_.PJ.GUILD
                          ? null
                          : (0, l.jsx)(lm, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
function lC(e) {
    let { guildId: t } = e,
        n = s.useMemo(() => (0, t_.EL)(t), [t]),
        i = (0, A.bG)([tc.A], () => tc.A.getGuild(t)),
        r = (0, A.bG)([tb.A], () => tb.A.isFocused()),
        a =
            t ===
            (0, eA.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        o = iK(t);
    return null == i
        ? null
        : (0, l.jsx)(li, { guildNode: n, guild: i, animatable: r, selected: a, draggable: !1, mediaState: o });
}
var lx = n(803921);
let lI = (0, th.isWindows)() ? 4 : 12 * !(0, th.isMac)();
function lb(e) {
    return e.startsWith(eB.BVt.GUILD_DISCOVERY) || e.startsWith(eB.BVt.GLOBAL_DISCOVERY);
}
class lS {
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
            (null == e && lb(window.location.pathname)) ||
            e === eB.sFm.SERVER_DISCOVERY_BADGE ||
            e === eB.sFm.E3_SERVER_DISCOVERY_BADGE
        )
            return;
        if (null == e) return void n.scrollTo({ to: 0, animate: t });
        let i = this.nodeRefs[e];
        for (; null == i; ) {
            let t = this.guildsTree.getNode(e);
            if (t?.parentId == null) break;
            i = this.nodeRefs[t.parentId];
        }
        null != i && (0, h.vq)(i)
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
        S.A.updateGuildListScrollTo(t), this.onScroll();
    }, 200);
    _handleScrollThrottled = d().throttle(() => {
        let e = this.scrollerRef.current;
        null != e && this.setIsScrolledToBottom(e.isScrolledToBottom());
    }, 100);
    setNodeRef = (e, t) => {
        this.nodeRefs[e] = t;
    };
}
function lN(e) {
    let { hideDms: t, scrollToTop: n, lurkingGuildIds: i } = e,
        r = (0, G.A)("TopSection"),
        { isExperimentEnabled: a } = (0, O.TW)("TopSection"),
        o = (0, A.bG)([ep.A], () => null != ep.A.getVoiceChannelId()),
        d = (0, f.useHasAnyModalOpen)(),
        c = (0, j.Ay)((e) => e.postConnectionOpen),
        [u, h] = (0, L.kn)(c && a && !o && !d ? [_.M.FAVORITES_SERVER_ONBOARDING_INTRO] : []),
        g = u === _.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        [m] = (0, L.kn)(g ? [_.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM] : [], void 0, !0),
        p = m === _.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM,
        E = s.useRef(!1),
        C = p && r;
    s.useEffect(() => {
        C && !E.current && n(), (E.current = C);
    }, [n, C]);
    let x = (0, A.yK)([tc.A, td.Ay], () => tc.A.getGuildIds().filter((e) => td.Ay.isCurrentUserGuest(e))),
        I = i.concat(x),
        { entrypoint: b } = (0, e9.X8)({ location: "GuildsBar" });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(n7, {}),
            b === e9.RK.SERVER_RAIL_TOP && (0, l.jsx)(tr, {}),
            r ? (0, l.jsx)(e1, { shouldShowIntroPopover: p, markIntroPopoverAsDismissed: h }) : null,
            !t && (0, l.jsx)(t2, {}),
            I.map((e) => (0, l.jsx)(lC, { guildId: e }, e)),
            (0, l.jsx)(lE, { onActivate: n }),
        ],
    });
}
function lT(e) {
    let { guildDiscoveryButton: t, disableAppDownload: n, isOverlay: i, renderTreeNode: s, lurkingGuildIds: r } = e,
        [a] = (0, A.yK)([tu.Ay], () => {
            let e = tu.Ay.getGuildsTree();
            return [e, e.version];
        }),
        o = a.getRoots(),
        d = (0, A.yK)([to.A], () => to.A.getGeoRestrictedGuilds()).map((e) =>
            (0, l.jsx)(nT, { id: e.id, name: e.name, icon: e.icon }, e.id),
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.B, {
                role: "group",
                "aria-label": eH.intl.string(eH.t["7hB4kg"]),
                gap: "xs",
                children: o.map((e, t) => s(e, t, o.length)),
            }),
            d,
            (0, l.jsx)(is, {}),
            i ? null : (0, l.jsx)(nb, { disableTooltip: r.length > 0, lastTargetNode: o[o.length - 1] }),
            i ? null : t,
            n ? null : (0, l.jsx)(ne, {}),
        ],
    });
}
function lv(e) {
    var t;
    let { disableAppDownload: n = th.isPlatformEmbedded, isOverlay: i = !1, className: r, themeOverride: o } = e,
        [d] = (0, A.yK)([tu.Ay], () => {
            let e = tu.Ay.getGuildsTree();
            return [e, e.version];
        }),
        h = (0, A.bG)([e6.A], () => e6.A.lurkingGuildIds()),
        _ = s.useMemo(() => (i ? [] : h), [h, i]),
        g = (0, A.bG)([R.A], () => R.A.isFullscreenInContext()),
        { isSorting: f, startSorting: E, stopSorting: S } = (0, tA.A)(),
        T = s.useRef(!1),
        [j] = s.useState(() => new m.Ep()),
        L = s.useRef(null),
        O = s.useRef(null),
        { ref: M, ...D } = (0, u.$y)(),
        U = (0, C.R7)(),
        [P, w] = s.useState(!1),
        k = (0, x.r)(p.A.modules.guildbar.AVATAR_SIZE),
        V = (0, x.r)(p.A.space.SPACE_XS),
        B = (0, G.A)("GuildsBar"),
        { pathname: H } = (0, c.zy)(),
        { entrypoint: F } = (0, e9.X8)({ location: "GuildsBar" }),
        W = +!!B + +(F === e9.RK.SERVER_RAIL_TOP),
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
                        heightBeforeGuilds: lI + t + W * e,
                        bottomInset: 16,
                    });
            return new lS(
                d,
                w,
                eB.tEg,
                () => {
                    L.current?.calculateState(), O.current?.calculateState();
                },
                n,
            );
        }, [k, V, d, W]);
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
                L.current?.calculateState(), O.current?.calculateState();
            };
            return eT.default.addChangeListener(e), () => eT.default.removeChangeListener(e);
        }, []);
    let { analyticsLocations: Y } = (0, y.Ay)(v.A.GUILDS_LIST),
        z = lb(H);
    (0, N.u5)(() => {
        if (!T.current && 0 !== d.size) {
            if (!z) {
                let { scrollTop: e } = ta.A.getGuildListDimensions();
                K.scrollTo({ to: e, animate: !1 });
            }
            return (T.current = !0), () => j.stop();
        }
    }),
        s.useEffect(() => {
            if ((K.setGuildsTree(d), T.current || 0 === d.size)) return;
            let e = eA.A.getState().guildId;
            K.scrollToGuild(e, !1);
            let t = null;
            return eA.A.subscribe((e) => {
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
                let n = tg.A.getGuildId();
                n !== e && ((e = n ?? null), t(n ?? null, !1));
            }
            return (
                tg.A.addChangeListener(n),
                () => {
                    tg.A.removeChangeListener(n);
                }
            );
        }, [t]);
    let X = s.useCallback(
            function e(t, n, i) {
                switch (t.type) {
                    case t_.PJ.FOLDER:
                        return (0, l.jsx)(
                            iL,
                            {
                                folderNode: t,
                                setNodeRef: K.setNodeRef,
                                draggable: !0,
                                sorting: f,
                                onDragStart: E,
                                onDragEnd: S,
                                renderChildNode: e,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    case t_.PJ.GUILD:
                        return (0, l.jsx)(
                            ls,
                            {
                                guildNode: t,
                                setRef: K.setNodeRef,
                                draggable: !0,
                                sorting: f,
                                onDragStart: E,
                                onDragEnd: S,
                                "aria-setsize": i,
                                "aria-posinset": void 0 !== n ? n + 1 : void 0,
                            },
                            t.id,
                        );
                    default:
                        return null;
                }
            },
            [E, S, f, K.setNodeRef],
        ),
        Q = (0, l.jsx)(nU, { selected: z, className: lx.ai }),
        J = F === e9.RK.SERVER_RAIL_BOTTOM;
    return (0, l.jsx)(y.f5, {
        value: Y,
        children: (0, l.jsx)(I.N, {
            theme: o,
            children: (e) =>
                (0, l.jsxs)("nav", {
                    className: a()(lx.iE, r, e, { [lx.R]: g }),
                    "aria-label": eH.intl.string(eH.t.PjnF2t),
                    children: [
                        (0, l.jsx)(tj, {
                            ref: L,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: lx.Xl,
                            barClassName: lx.Sh,
                        }),
                        (0, l.jsx)("ul", {
                            ref: M,
                            ...D,
                            ...U,
                            role: "tree",
                            className: lx.B2,
                            children: (0, l.jsxs)("div", {
                                className: lx.qD,
                                children: [
                                    (0, l.jsxs)(b.zC, {
                                        className: a()({ [lx.XG]: !0, [lx.qw]: P }),
                                        experimental_useStack: !0,
                                        gap: "xs",
                                        ref: K.scrollerRef,
                                        onScroll: K.handleScroll,
                                        children: [
                                            (0, l.jsx)(lN, { scrollToTop: q, lurkingGuildIds: _ }),
                                            (0, l.jsx)(n5, {}),
                                            (0, l.jsx)(lT, {
                                                guildDiscoveryButton: Q,
                                                disableAppDownload: n,
                                                isOverlay: i,
                                                renderTreeNode: X,
                                                lurkingGuildIds: _,
                                            }),
                                        ],
                                    }),
                                    J &&
                                        (0, l.jsxs)("div", {
                                            children: [
                                                (0, l.jsx)(n5, { fullWidth: !0 }),
                                                (0, l.jsx)("div", { className: lx.JU, children: (0, l.jsx)(tr, {}) }),
                                            ],
                                        }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(tj, {
                            reverse: !0,
                            ref: O,
                            isVisible: K.isItemVisible,
                            onJumpTo: K.handleJumpToGuild,
                            className: a()(lx.LZ, { [lx.CH]: !i && !J, [lx.c0]: !i && J }),
                            barClassName: lx.Sh,
                        }),
                    ],
                }),
        }),
    });
}
let ly = s.memo(
    function (e) {
        let t = (0, T.A)("guildsnav");
        return (0, l.jsx)(u.hD, { navigator: t, children: (0, l.jsx)(lv, { ...e }) });
    },
    (e, t) => !1 === t.isVisible || (0, g.A)(e, t),
);
