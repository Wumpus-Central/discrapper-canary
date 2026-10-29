(n.d(t, { A: () => nG }), n(321073));
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(284009),
    d = n.n(o),
    c = n(562708),
    u = n(172218),
    _ = n(17928),
    E = n(554146),
    A = n(116833),
    h = n(43105),
    f = n(939249),
    I = n(403581),
    p = n(73153),
    T = n(298990),
    m = n(367513),
    g = n(951001),
    S = n(492684),
    N = n(707606),
    C = n(475743),
    O = n(573648),
    R = n(795816),
    L = n(933958),
    y = n(260643),
    D = n(999926),
    v = n(756042),
    b = n(379848),
    M = n(832248),
    P = n(201805),
    U = n(253932),
    w = n(843010),
    G = n(461213),
    x = n(174459),
    k = n(821609),
    F = n(652215),
    B = n(834730),
    V = n(935154),
    H = n(193249),
    j = n(315710),
    W = n(404778),
    Y = n(331322),
    K = n(297264),
    $ = n(265872),
    z = n(827827),
    X = n(481045),
    q = n(305103),
    Z = n(105292),
    Q = n(293686);
function J(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: Q.K2,
        children: (0, r.jsx)(k.$, {
            variant: "primary",
            size: "sm",
            text: Z.intl.string(q.default.Poezn1),
            onClick: () => {
                (t(), (0, z.A)({ nextStatus: F.clD.ONLINE }));
            },
            fullWidth: !0,
        }),
    });
}
function ee(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, _.bG)([G.A], () => G.A.getStatus());
    return (0, r.jsxs)("div", {
        className: Q.E3,
        children: [
            (0, r.jsxs)("div", {
                className: Q.fu,
                children: [
                    (0, r.jsx)(B.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: Z.intl.string(q.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: Q.$v,
                            children: [
                                (0, r.jsx)(V.nW, { status: F.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(B.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === F.clD.INVISIBLE
                                            ? Z.intl.string(q.default.a3AofS)
                                            : Z.intl.string(Z.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(H.d, {
                onChange: (e) => {
                    (U.tz.updateSetting(e), n && (0, z.A)({ nextStatus: e ? F.clD.ONLINE : F.clD.INVISIBLE }));
                },
                checked: t,
            }),
        ],
    });
}
function et(e) {
    let { children: t } = e,
        n = (0, a.useRef)(null);
    return (
        (0, j.tj)(n),
        (0, r.jsx)("div", { className: Q.iE, ref: n, children: (0, r.jsx)("div", { className: Q.Qs, children: t }) })
    );
}
function en(e) {
    let { closePopout: t } = e,
        n = U.tz.useSetting();
    return (0, r.jsxs)(et, {
        children: [
            (0, r.jsx)(ee, { showCurrentGame: n }),
            (0, r.jsx)(B.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Z.intl.string(q.default["7cfFob"]),
            }),
            (0, r.jsx)(W.c, { className: Q.yF }),
            (0, r.jsx)(X.qA, { onClosePopout: t }),
        ],
    });
}
function ei(e) {
    let { closePopout: t } = e;
    return (0, r.jsxs)(et, {
        children: [
            (0, r.jsxs)(Y.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, r.jsx)(K.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: Q._M,
                        children: Z.intl.string(q.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: Q.$v,
                        children: [
                            (0, r.jsx)(V.nW, { status: F.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(B.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: Z.intl.string(q.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(B.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Z.intl.string(q.default.Yl0mh4),
            }),
            (0, r.jsx)(J, { closePopout: t }),
        ],
    });
}
function er(e) {
    let { closePopout: t } = e,
        n = U.tz.useSetting();
    return (0, r.jsxs)(et, {
        children: [
            (0, r.jsx)(ee, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, r.jsx)(B.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Z.intl.string(q.default["7cfFob"]),
            }),
            (0, r.jsx)(W.c, { className: Q.yF }),
            (0, r.jsx)(X.qA, { onClosePopout: t }),
        ],
    });
}
var ea =
    (((i = {})[(i.ActivityNux = 0)] = "ActivityNux"),
    (i[(i.StatusNux = 1)] = "StatusNux"),
    (i[(i.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (i[(i.Activity = 3)] = "Activity"),
    (i[(i.Status = 4)] = "Status"),
    (i[(i.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    i);
function es(e) {
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: s, children: l } = e,
        [o, d] = (0, a.useState)(n),
        c = (0, a.useRef)(null),
        u = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: Z.intl.string(q.default.vxVbGP),
                        body: [Z.intl.string(q.default["7cfFob"])],
                        action: {
                            text: Z.intl.string(q.default.k4tCg2),
                            onClick: () => {
                                U.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: Z.intl.string(Z.t["ZrN+DT"]), onClick: X.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: Z.intl.string(q.default.qKDqet),
                        body: [Z.intl.string(q.default.Yl0mh4)],
                        action: {
                            text: Z.intl.string(q.default.Poezn1),
                            onClick: () => {
                                (0, z.A)({ nextStatus: F.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: Z.intl.string(q.default["6cA8HZ"]),
                        body: [Z.intl.string(q.default["7cfFob"])],
                        action: {
                            text: Z.intl.string(q.default.k4tCg2),
                            onClick: () => {
                                (U.tz.updateSetting(!0), (0, z.A)({ nextStatus: F.clD.ONLINE }));
                            },
                        },
                        textLink: { text: Z.intl.string(Z.t["ZrN+DT"]), onClick: X.L7 },
                    };
                case 3:
                    return { type: "popout", children: en };
                case 4:
                    return { type: "popout", children: ei };
                case 5:
                    return { type: "popout", children: er };
                default:
                    return null;
            }
        })(o),
        _ = (0, a.useRef)(t);
    if (
        ((0, a.useEffect)(() => {
            (t && !_.current && d(n), t !== _.current && (_.current = t));
        }, [n, t]),
        null == u || !t)
    )
        return l;
    if ("popover" === u.type) {
        let { action: e, title: t, body: n, textLink: a } = u;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.A, {
                    targetElementRef: s,
                    shouldShow: !0,
                    position: "top",
                    align: "center",
                    onRequestClose: i,
                    title: t,
                    body: n,
                    textLink: a,
                    gradientColor: "purple",
                    graphic: {
                        type: "image",
                        src: "https://cdn.discordapp.com/assets/content/355f009edf130bbd113eb59339cf96fbf3ec337388a7da2dd296fb3b6e7b4b7c.png",
                    },
                    actions: [
                        {
                            ...e,
                            onClick: (t) => {
                                (e.onClick?.(t), i());
                            },
                        },
                    ],
                }),
                l,
            ],
        });
    }
    let { children: E } = u;
    return (0, r.jsx)($.Y, {
        targetElementRef: c,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(E, { closePopout: t });
        },
        onRequestClose: i,
        children: () => (0, r.jsx)(f.D, { innerRef: c, onClick: i, children: l }),
    });
}
var el = n(49999);
function eo(e) {
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: i,
            popoutTargetRef: s,
            hidePopout: l = !1,
        } = e,
        o = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, P.c9)(),
                r = U.tz.useSetting(),
                a = (0, w.G)(),
                s = (0, _.bG)([G.A], () => G.A.getStatus()),
                { isOpen: l } = (0, M.A)();
            if (((n && i) || t) && !a && !l && !__OVERLAY__) {
                if (!r && s === F.clD.INVISIBLE) return t ? ea.ActivityAndStatus : ea.ActivityAndStatusNux;
                if (!r) return t ? ea.Activity : ea.ActivityNux;
                if (s === F.clD.INVISIBLE) return t ? ea.Status : ea.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, a.useEffect)(() => {
        n && x.default.track(F.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let d = n || l ? [] : [E.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(b.Ay, {
        contentTypes: d,
        children: (e) => {
            let { visibleContent: a, markAsDismissed: l } = e,
                d = a === E.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(es, {
                showPopout: d,
                popoutState: o,
                handleClose: function () {
                    (l(el.i.USER_DISMISS), i(!1));
                },
                popoutTargetRef: s,
                children: t,
            });
        },
    });
}
var ed = n(688810),
    ec = n(139286),
    eu = n(772680),
    e_ = n(200093),
    eE = n(206828),
    eA = n(805413),
    eh = n(627363),
    ef = n(587895),
    eI = n(429913),
    ep = n(568598),
    eT = n(384059),
    em = n(47167),
    eg = n(566870),
    eS = n(260498),
    eN = n(404374),
    eC = n(131607),
    eO = n(197184),
    eR = n(747180),
    eL = n(625180),
    ey = n(91242),
    eD = n(66834);
function ev(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: s, markAsDismissed: l } = e,
        { analyticsLocations: o } = (0, ed.Ay)();
    return (
        a.useEffect(() => {
            x.default.track(F.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: o, application_id: n, guild_id: s });
        }, [n, s, o]),
        (0, r.jsx)(h.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                (x.default.track(F.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: o,
                    application_id: n,
                    guild_id: s,
                }),
                    l(el.i.USER_DISMISS));
            },
            title: Z.intl.formatToPlainString(Z.t.ry9SJw, { gameName: i }),
            body: Z.intl.string(Z.t.YPpOov),
            actions: [
                {
                    text: Z.intl.string(Z.t.RVfNGU),
                    onClick: () => {
                        (x.default.track(F.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: s,
                        }),
                            l(el.i.TAKE_ACTION),
                            eD.A.joinGuild(s, { source: F.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL }));
                    },
                },
            ],
        })
    );
}
var eb = n(945810);
let eM = (0, eb.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eP = n(952818),
    eU = n(927813);
let ew = eP.Ay.getRunningGames(),
    eG = [];
class ex extends _.Ay.Store {
    initialize() {
        this.syncWith([eP.Ay], () =>
            (function () {
                let e = eP.Ay.getRunningGames();
                if (ew === e) return !1;
                let t = ew.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((ew = e), 0 === t.length)) return !1;
                eG = [...eG, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return eG;
    }
    getLastPreviouslyRunningGame() {
        return eG[eG.length - 1] ?? null;
    }
}
let ek = new ex(p.h, {}),
    eF = 5 * eU.A.Millis.MINUTE;
var eB = n(769015),
    eV = n(334074),
    eH = n(454908),
    ej = n(279250),
    eW = n(880144),
    eY = n(277680),
    eK = n(118277),
    e$ = n(905552),
    ez = n(95035),
    eX = n(567249),
    eq = n(507756),
    eZ = n(929921),
    eQ = n(616356),
    eJ = n(650338),
    e0 = n(753070),
    e1 = n(900795);
function e2(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(B.E, { className: l()({ [e1.Q]: null == n }, t), color: n, ...i });
}
var e3 = n(976860),
    e5 = n(95701),
    e4 = n(280450),
    e6 = n(734057),
    e7 = n(184989),
    e8 = n(71393),
    e9 = n(576705),
    te = n(290863),
    tt = n(994500),
    tn = n(309010),
    ti = n(287809),
    tr = n(157257),
    ta = n(975571),
    ts = n(723702),
    tl = n(994314),
    to = n(485599),
    td = n(141628),
    tc = n(192308),
    tu = n(959988),
    t_ = n(183623),
    tE = n(241541),
    tA = n(70688),
    th = n(687966),
    tf = n(34188),
    tI = n(942857),
    tp = n(646865),
    tT = n(988534),
    tm = n(55730),
    tg = n(521588),
    tS = n(702841),
    tN = n(176781),
    tC = n(442433),
    tO = n(42473),
    tR = n(200542),
    tL = n(915725),
    ty = n(572164),
    tD = n(614584),
    tv = n(414405);
function tb(e) {
    (0, tC.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e("666601"), n.e("344751")]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tM = function (e) {
    let { isActivity: t = !1 } = e,
        { parentAnalyticsLocation: n } = (0, ed.Ay)(),
        i = (0, ty.E)(),
        a = (0, tS.bG)([tL.Ay], () => tL.Ay.getIsAtMaxSaveClipOperations()),
        { enableGamePanelEntrypoint: s } = tR.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: l, clipsSourceAttached: o } = (0, tv.A)({ isActivity: t });
    return s && i
        ? (0, r.jsx)(tO.A, {
              disabled: a || !o,
              tooltipText: l,
              onClick: () => {
                  ((0, tD.l0)(), (0, eT.X)(n, eT.O.CLIP));
              },
              onContextMenu: tb,
              icon: tN.x,
          })
        : null;
};
var tP = n(457827),
    tU = n(907878),
    tw = n(831617),
    tG = n(196736);
let tx = (0, eb.mj)({
        name: "2026-08-gsh-subs-activity-bar",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    tk = (0, eb.mj)({
        name: "2026-02-gsh-game-detection-upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var tF = n(610010),
    tB = n(475669),
    tV = n(351585);
function tH(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tB.A], () => null != a && tB.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
    return (0, r.jsx)(h.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            d && null != a
                ? {
                      type: "dynamic",
                      component: A.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: a },
                      aspectRatio: "6/4",
                  }
                : {
                      type: "image",
                      src: "https://cdn.discordapp.com/assets/content/47818dabb6190907067e87a277b99232792f2ab28f935531925c491007d40ee0.svg",
                      aspectRatio: "6/4",
                  },
        actions: [{ text: i, variant: "primary", onClick: l }],
        targetElementRef: s,
        shouldShow: !0,
        position: "top",
        onRequestClose: o,
    });
}
function tj(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tH, {
        title: Z.intl.formatToPlainString(tV.default.k9KZ2L, { gameName: t }),
        body: Z.intl.string(tV.default.gOrBCw),
        ctaText: Z.intl.string(tV.default.sElzfG),
        ...n,
    });
}
var tW = n(338771),
    tY = n(473161),
    tK = n(453774),
    t$ = n(44724),
    tz = n(153488),
    tX = n(942370),
    tq = n(758836),
    tZ = n(165610),
    tQ = n(79958);
function tJ(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === F.$pd.PLAYING &&
              (0, tm.A)(t, F.jUm.JOIN))
    );
}
let t0 = a.memo(function (e) {
    let {
            stream: t,
            canGoLive: i,
            canGoLiveActivity: s = !1,
            guildId: l,
            isStreaming: o,
            channel: c,
            canStream: u,
            runningGame: A,
            embeddedActivity: f,
            frame: I,
            activity: p,
            application: m,
            analyticsContext: g,
            inviteButtonRef: S,
            accountLinkButtonRef: N,
            startAuthorization: C,
            canStartAuthorization: O,
            hasAlreadyLinked: R,
            connectionApp: L,
        } = e,
        { parentAnalyticsLocation: D, analyticsLocations: v } = (0, ed.Ay)(),
        b = (0, tK.A)(m?.id),
        M = tJ(m, p, f),
        { enabled: P } = tk.useConfig({ location: "activity-panel" }),
        U = (0, tG.H)({ location: "activity-panel" }),
        w = (0, tF.Bp)("activity-panel"),
        G = (0, tw.C$)(l ?? void 0, "activity-panel"),
        k = (0, _.bG)([tz.A], () => tz.A.hasConsented(F.YAq.PERSONALIZATION)),
        B = (0, tF.TF)(A?.id, { shouldFetch: w || G }),
        V = U && k && (0, tF.k0)(A?.id),
        H = P && k && B,
        j = H && w,
        W = H && G,
        Y = a.useCallback(() => {
            (d()(null != p, "Received null activity"),
                x.default.track(F.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "invite_to_game",
                    game_id: A?.id ?? null,
                    application_id: p.application_id,
                }),
                (0, eT.X)(D, eT.O.INVITE),
                x.default.track(F.HAw.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: p.application_id,
                    location: g.location,
                }),
                (0, T.qf)(p, !1));
        }, [p, g, D, A]),
        K = a.useCallback(
            (e, t) => () => {
                ((0, eT.X)(D, eT.O.LEAVE_ACTIVITY), (0, tT.d)({ location: t, applicationId: e, showFeedback: !0 }));
            },
            [D],
        ),
        $ = a.useCallback(
            (e) => () => {
                ((0, eT.X)(D, eT.O.LEAVE_ACTIVITY), (0, tP.r)(e));
            },
            [D],
        ),
        z = a.useCallback(() => {
            (0, tW.A)(t);
        }, [t]),
        X = a.useCallback(() => {
            (0, tc.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("249169"),
                    n.e("473782"),
                    n.e("553464"),
                    n.e("130662"),
                    n.e("498552"),
                    n.e("236946"),
                    n.e("338601"),
                    n.e("944727"),
                    n.e("312159"),
                    n.e("942474"),
                    n.e("82001"),
                ]).then(n.bind(n, 266536));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        sourcePID: A?.pid,
                        selectSource: null != tn.Ay.getVoiceChannelId(),
                        analyticsLocations: v,
                    });
            });
        }, [A, v]),
        q = null == A && s && (null != f || null != I),
        Q = a.useCallback(() => {
            let e = (0, y.YX)();
            null == e
                ? X()
                : (0, tc.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("249169"),
                          n.e("473782"),
                          n.e("553464"),
                          n.e("130662"),
                          n.e("498552"),
                          n.e("236946"),
                          n.e("338601"),
                          n.e("944727"),
                          n.e("312159"),
                          n.e("942474"),
                          n.e("82001"),
                      ]).then(n.bind(n, 266536));
                      return (n) =>
                          (0, r.jsx)(t, {
                              ...n,
                              activitySource: e,
                              selectSource: null != tn.Ay.getVoiceChannelId(),
                              analyticsLocations: v,
                          });
                  });
        }, [X, v]),
        J = m?.name ?? A?.name ?? "",
        ee = a.useCallback(() => {
            ((0, tU.pK)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                (0, tc.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("227100"),
                        n.e("982730"),
                        n.e("650902"),
                        n.e("965058"),
                    ]).then(n.bind(n, 154649));
                    return (t) => (0, r.jsx)(e, { gameName: J, gameApplicationId: A?.id, ...t });
                }));
        }, [J, A?.id]),
        et = a.useCallback(() => {
            (d()(null != l, "Received null guildId"),
                (0, tU.pK)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                (0, tY.A)({ analyticsLocations: v, analyticsLocation: g.location, guildId: l }));
        }, [l, v, g.location, A?.id]),
        en = a.useCallback(() => {
            let e = A?.id;
            (0, tU.pK)({ gameApplicationId: e, buttonVariant: "shop" });
            let t = F.BVt.COLLECTIBLES_SHOP_WITH_TAB(tq.G2.GAME_SERVERS);
            (0, e3.pX)(null != e ? `${t}&${tq.tD}=${e}` : t);
        }, [A?.id]),
        ei = a.useRef(null),
        [er, ea] = a.useState(!1);
    (a.useEffect(
        () => () => {
            null != ei.current && clearTimeout(ei.current);
        },
        [],
    ),
        a.useEffect(() => {
            R && (ea(!1), null != ei.current && (clearTimeout(ei.current), (ei.current = null)));
        }, [R]));
    let es = null == b || null == m ? null : (0, r.jsx)(t5, { applicationId: b.id }),
        el = V
            ? (0, r.jsx)(t3, { gameName: J, runningGameId: A?.id, isGameServerHostingInShopEnabled: U, onClick: en })
            : j
              ? (0, r.jsx)(t2, {
                    tooltipText: Z.intl.formatToPlainString(tV.default.YhnUVO, { gameName: J }),
                    badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                    onClick: ee,
                    onViewed: () => (0, tU.ET)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                })
              : W
                ? (0, r.jsx)(t2, {
                      tooltipText: Z.intl.formatToPlainString(tV.default.lwwiHE, { gameName: J }),
                      badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                      onClick: et,
                      onViewed: () => (0, tU.ET)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                  })
                : null,
        eo = (function () {
            let e, t, n;
            if ((null == A && null != f && !(0, tp.f)() && !q) || (!o && !i)) return null;
            let a = null;
            return (
                o
                    ? ((e = !1),
                      (t = () => {
                          (z(), (0, eT.X)(D, eT.O.STREAM, !1));
                      }),
                      (n = tu.G),
                      (a = Z.intl.string(Z.t.S5anIc)))
                    : u
                      ? ((e = !1),
                        (t = () => {
                            (q ? Q() : X(), (0, eT.X)(D, eT.O.STREAM, !0));
                        }),
                        (n = t_.F),
                        (a =
                            null != A
                                ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: A.name })
                                : q && null != m
                                  ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: m.name })
                                  : Z.intl.string(Z.t.FeUKeA)))
                      : ((e = !0),
                        (t = null),
                        (n = t_.F),
                        null != c && (0, e5.gV)(c.type) && (a = Z.intl.string(Z.t.uQn9B8))),
                (0, r.jsx)("div", {
                    className: tQ.IF,
                    children: (0, r.jsx)(tO.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                })
            );
        })(),
        ec =
            M && null == f
                ? (0, r.jsx)(tO.A, { ref: S, tooltipText: Z.intl.string(Z.t["hC/Zey"]), onClick: Y, icon: tE.D })
                : null,
        eu =
            null == f
                ? null
                : (0, r.jsx)(tO.A, {
                      tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                      onClick: K(f.applicationId, f.location),
                      icon: tA.DoorExitIcon,
                  }),
        e_ =
            null == I || I.intent !== tZ.sV.MAIN
                ? null
                : (0, r.jsx)(tO.A, {
                      tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                      onClick: $(I.id),
                      icon: tA.DoorExitIcon,
                  }),
        eE =
            !O || R
                ? null
                : (0, r.jsx)(t1, {
                      runningGame: A,
                      startAuthorization: function () {
                          C({ analyticsLocations: v }) === tX._.RPC &&
                              (ea(!0),
                              null != ei.current && clearTimeout(ei.current),
                              (ei.current = setTimeout(() => {
                                  ea(!1);
                              }, 9e4)));
                      },
                      connectionApp: L,
                      ref: N,
                  }),
        eA =
            !O || R
                ? null
                : (0, r.jsx)(h.A, {
                      title: Z.intl.string(Z.t.ULvRFd),
                      body: Z.intl.string(Z.t["HJJDr+"]),
                      targetElementRef: N,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                      shouldShow: er,
                      onRequestClose: () => {
                          (ea(!1), null != ei.current && (clearTimeout(ei.current), (ei.current = null)));
                      },
                  });
    return (0, r.jsxs)("div", {
        className: tQ.o1,
        children: [
            eE ?? es ?? ec,
            el,
            (eu ?? e_) == null
                ? (0, r.jsx)(tM, { isActivity: null == A && null != I && I.intent !== tZ.sV.MAIN })
                : null,
            eo,
            eu ?? e_,
            eA,
        ],
    });
});
function t1(e) {
    let { runningGame: t, startAuthorization: n, connectionApp: i, ref: a } = e;
    return (0, r.jsx)(tO.A, {
        ref: a,
        onClick: () => {
            (x.default.track(F.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "link_account",
                game_id: t?.id ?? null,
                application_id: i?.id ?? null,
            }),
                n());
        },
        icon: td.A,
        tooltipText: Z.intl.string(Z.t.sbdnpw),
    });
}
function t2(e) {
    let {
            tooltipText: t,
            onClick: n,
            onViewed: i,
            renderCoachmark: s,
            coachmarkContent: l,
            badgeContent: o,
            marketingEnabled: d = !0,
        } = e,
        c = a.useRef(null),
        u = a.useRef(!1);
    a.useEffect(() => {
        u.current || ((u.current = !0), i());
    }, [i]);
    let _ = (0, tI.A)(),
        { isQuestBarEmpty: E, hasLoadedQuestBar: A } = (0, P.c9)(),
        h = d && null != l && null != s && !_ && E && A,
        [f, I] = (0, eC.kn)(h && null != l ? [l] : [], { bypassAutoDismiss: !0 }),
        [p, T] = (0, eC.kn)(d ? [o] : [], { bypassAutoDismiss: !0 }),
        m = a.useCallback(() => {
            (I(el.i.TAKE_ACTION), T(el.i.TAKE_ACTION), n());
        }, [I, T, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tQ.IF,
                children: [
                    (0, r.jsx)("div", { className: tQ.uD, children: (0, r.jsx)("div", { className: tQ.Z9 }) }),
                    (0, r.jsx)(tO.A, { ref: c, tooltipText: t, onClick: m, icon: th.GameControllerIcon }),
                    p === o && (0, r.jsx)(tg.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != f && null != s && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: T }),
        ],
    });
}
function t3(e) {
    let { gameName: t, runningGameId: n, isGameServerHostingInShopEnabled: i, onClick: a } = e,
        s = (function (e) {
            let { location: t } = e;
            return tx.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(t2, {
        tooltipText: Z.intl.formatToPlainString(tV.default.oZ4ZFn, { gameName: t }),
        coachmarkContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
        badgeContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_NEW_BADGE,
        marketingEnabled: i && s,
        onClick: a,
        onViewed: () => (0, tU.ET)({ gameApplicationId: n, buttonVariant: "shop" }),
        renderCoachmark: (e) => {
            let { targetElementRef: i, markAsDismissed: s, markBadgeAsDismissed: l } = e;
            return (0, r.jsx)(tj, {
                gameName: t,
                runningGameId: n,
                targetElementRef: i,
                onClick: () => {
                    (a(), s(el.i.TAKE_ACTION), l(el.i.TAKE_ACTION));
                },
                onClose: () => s(el.i.USER_DISMISS),
            });
        },
    });
}
function t5(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, t$.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, t$.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            (x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s());
        }, [t, s]);
    return (0, r.jsx)(tO.A, { tooltipText: Z.intl.string(Z.t.vyaWs7), onClick: l, onMouseDown: i, icon: tf.U, ref: n });
}
var t4 = n(428689),
    t6 = n(409626),
    t7 = n(692969),
    t8 = n(202163),
    t9 = n(152367),
    ne = n(123292),
    nt = n(475358),
    nn = n(939409);
function ni(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(f.D, {
        className: nn.kL,
        onClick: t,
        children: (0, r.jsx)(B.E, {
            className: nn.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: Z.intl.string(Z.t.jfrLLb),
        }),
    });
}
var nr = n(37595),
    na = n(395771),
    ns = n(455426),
    nl = n(207228),
    no = n(233741),
    nd = n(532624),
    nc = n(350535),
    nu = n(507216),
    n_ = n(87501),
    nE = n(369409);
function nA(e) {
    let { isCurrentlyRunningGame: t, gamePid: n, onClickNotSharing: i } = e,
        a = (0, _.bG)([nd.Ay], () => nd.Ay.getKeybindForAction(F.hCu.SAVE_CLIP)),
        s = null != a && a.shortcut.length > 0 ? nc.dI(a.shortcut, !0) : null,
        o = (0, ty.E)(),
        d = U.tz.useSetting(),
        c = (0, _.bG)([G.A], () => G.A.getStatus()),
        u = !__OVERLAY__ && (!d || c === F.clD.INVISIBLE),
        E = o && t && null != s,
        A = (0, _.bG)([na.A, eP.Ay, no.A], () => {
            let e = na.A.getCapturingApp(),
                t = (0, nr.V)(eP.Ay, no.A);
            return null == e || null == n || t?.windowHandle == null || t.pid !== n ? null : e;
        });
    return t
        ? null != A
            ? (0, r.jsxs)(B.E, {
                  variant: "text-xs/medium",
                  color: "text-subtle",
                  className: l()(nE.En, nE.ef),
                  tag: "div",
                  children: [
                      (0, r.jsx)(t9.D, { size: "xxs", color: "currentColor", className: nE.MY, "aria-hidden": !0 }),
                      (0, r.jsx)("span", {
                          className: nE.us,
                          children: Z.intl.format(n_.default["Q/RPC2"], { appName: A.appName }),
                      }),
                      (0, r.jsx)(ne.Q, {
                          text: Z.intl.string(n_.default.VIjH42),
                          "aria-label": Z.intl.formatToPlainString(n_.default["Tl/1iM"], { appName: A.appName }),
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          onClick: () => {
                              (p.h.dispatch({
                                  type: "CONJURE_DEVICE_PERMISSIONS_RESET",
                                  applicationId: A.appId,
                                  permissions: ["screen_capture"],
                              }),
                                  (0, ns.s)(),
                                  (0, nl.ik)());
                          },
                      }),
                  ],
              })
            : u
              ? (0, r.jsx)(ni, { onClick: i })
              : E
                ? (0, r.jsx)(B.E, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      className: nE.En,
                      tag: "div",
                      children: Z.intl.format(nu.default.ESZwQX, {
                          keybind: s,
                          keybindHook: () => (0, r.jsx)(nt.e, { shortcut: s, className: nE.oH, keyClassName: nE.Bj }),
                      }),
                  })
                : null
        : (0, r.jsx)(B.E, { variant: "text-xs/medium", color: "text-subtle", children: Z.intl.string(Z.t.W4N1ru) });
}
var nh = n(450173);
function nf(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t7.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t6.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(f.D, {
        onClick: i,
        className: l()(null != i && nh.On),
        children: (0, r.jsx)(to.A, { className: nh.mO, children: t }),
    });
}
function nI(e) {
    let { gameRecord: t, application: n, game: i, showLiveBadge: a, ref: s } = e;
    return (0, r.jsxs)("div", {
        className: nh.f9,
        children: [
            (0, r.jsx)(eB.A, { className: nh.Gt, game: t ?? n, pid: i?.pid, ref: s }),
            a ? (0, r.jsx)(t4.VideoIcon, { size: "md", color: "currentColor", className: nh.it }) : null,
        ],
    });
}
function np(e) {
    let { name: t, gameRecord: n, application: i, game: a, isStreaming: s, ref: l } = e,
        o = (0, t7.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: i?.id,
            source: t6.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = null != o,
        c = (0, r.jsx)(nI, { gameRecord: n, application: i, game: a, showLiveBadge: s && !d, ref: l });
    return d
        ? (0, r.jsx)(f.D, {
              onClick: o,
              className: nh.Ow,
              "aria-label": Z.intl.formatToPlainString(Z.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nT(e) {
    var t, n, i;
    let s,
        l,
        {
            isStreaming: o,
            application: d,
            game: c,
            onClickNotSharing: u,
            isForceShowSharingPopout: E,
            setIsForceShowSharingPopout: A,
            ref: h,
            popoutTargetRef: f,
            isCurrentlyRunningGame: I,
        } = e,
        { gameRecord: p } = (0, t8.A)(d?.id),
        T =
            ((t = p),
            (n = d),
            (i = c),
            null != t ? t.name : null != n ? n.name : null != i ? i.name : Z.intl.string(Z.t["UQMV/E"]));
    return (
        (s = U.tz.useSetting()),
        (l = (0, _.bG)([G.A], () => G.A.getStatus())),
        (0, a.useEffect)(() => {
            x.default.track(F.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: s,
                status: l,
                rtc_popout_available: !s || l === F.clD.INVISIBLE,
            });
        }, [s, l]),
        (0, r.jsxs)("div", {
            className: nh.cm,
            children: [
                (0, r.jsx)(np, { name: T, gameRecord: p, application: d, game: c, isStreaming: o, ref: h }),
                (0, r.jsx)(eo, {
                    popoutTargetRef: f,
                    isForceShowSharingPopout: E,
                    setIsForceShowSharingPopout: A,
                    hidePopout: !I,
                    children: (0, r.jsxs)("div", {
                        className: nh.pq,
                        children: [
                            null != T ? (0, r.jsx)(nf, { name: T, applicationId: d?.id }) : null,
                            (0, r.jsx)(nA, { isCurrentlyRunningGame: I, gamePid: c?.pid, onClickNotSharing: u }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var nm = n(5867);
let ng = {
    "356942674672091136": "398627612299362304",
    "1402418491272986635": "302094807046684672",
    "1402418571715543120": "187363008610041857",
    "1421154726023532544": "1164979454557290546",
    "1432419613165228174": "1107589599045361695",
    "1458530944955973852": "523059903812599811",
    "357607133254254632": "153566829380370432",
    "1402418344912752671": "251072485095636994",
    "356877880938070016": "152517096104919042",
    "1314395942253756416": "1193841000108531764",
    "1247227126416146462": "963760374543450182",
    "1257819671114289184": "951972846152859699",
    "762434991303950386": "522681957373575168",
    "1425690433018925056": "140933721929940992",
    "1402418714716143646": "618327687701725194",
    "1402418440685486130": "446735637413101578",
    "1402418703554842694": "322850917248663552",
    "1437509662303059998": "1180042348755963924",
    "363413743335374859": "710082165253079061",
    "1384276457596911676": "1368870708335083650",
    "1205090671527071784": "1102970375731691612",
    "1137125502985961543": "98922182746329088",
    "1402418103702524046": "435431947963990026",
    "1121201675240210523": "884849473329692723",
    "1402418594532298837": "560127830160048128",
};
var nS = n(534952),
    nN = n(731854),
    nC = n(80268),
    nO = n(821095),
    nR = n(268920),
    nL = n(633217);
function ny(e) {
    let t,
        n,
        {
            application: i,
            connectionApp: a,
            isEligibleForIncentivizedAccountLinking: s,
            incentivizedAccountLinkingDisplayedApp: l,
            markAccountLinkingUpsellAsDismissed: o,
            startAuthorization: d,
            analyticsLocations: u,
            accountLinkButtonRef: _,
            incentivizedAccountLinkingIsLoading: E,
        } = e,
        { data: f, isLoading: I } = (0, eH.I)(i?.getCanonicalGameId()),
        p = s ? l : (f ?? i),
        T = O.A.find((e) => null != p && e.migrationData?.replacedBy === p.id),
        m = null == p || I || E;
    if (
        ((0, ec.A)(
            {
                type: c.ImpressionTypes.POPOUT,
                name: c.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: i?.id,
                    parent_application_id: a?.parentId,
                    type: s ? "incentivized" : "default",
                },
            },
            { disableTrack: m },
        ),
        m)
    )
        return null;
    let g = Z.intl.formatToPlainString(Z.t.hUbQT2, { gameName: p.name }),
        S = Z.intl.string(Z.t.jynBQ5);
    s && (S = Z.intl.string(nC.default["2cOIOr"]));
    let N = [
        {
            text: S,
            onClick: () => {
                (o(el.i.TAKE_ACTION), d({ analyticsLocations: u }));
            },
        },
    ];
    return (
        s &&
            ((t = "beta"),
            (g = Z.intl.formatToPlainString(nC.default.dPuaZE, { applicationName: p.name })),
            (n = { text: Z.intl.string(Z.t.hvVgAZ), link: T?.migrationData?.helpCenterLink, external: !0 })),
        (0, r.jsx)(h.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: A.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: p, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: g,
            body: Z.intl.string(Z.t["2lfjU+"]),
            textLink: n,
            targetElementRef: _,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(el.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: N,
        })
    );
}
function nD(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = Z.intl.string(Z.t.MxAlrB),
        l = Z.intl.string(Z.t["/UTTEg"]),
        o = [
            {
                text: Z.intl.string(Z.t.aRIFWD),
                onClick: () => {
                    (i(el.i.TAKE_ACTION), window.open(ta.A.getArticleURL(F.MVz.IN_GAME_FEATURES), "_blank"));
                },
            },
        ];
    return (
        n &&
            ((s = Z.intl.string(nC.default.ublzTG)),
            (l = Z.intl.string(nC.default.JgM2xu)),
            (t = { type: "video", src: nL.A, fallbackImageSrc: nR.A, aspectRatio: "2/1", loop: !0 })),
        (0, r.jsx)(h.A, {
            graphic: t,
            title: s,
            body: l,
            targetElementRef: a,
            position: "top",
            align: "left",
            caretConfig: { align: "start" },
            actions: o,
            shouldShow: !0,
            onRequestClose: () => i(el.i.USER_DISMISS),
        })
    );
}
function nv(e) {
    let {
        activity: t,
        game: n,
        markAsDismissed: i,
        inviteButtonRef: a,
        parentAnalyticsLocation: s,
        analyticsContext: l,
    } = e;
    return (0, r.jsx)(h.A, {
        title: Z.intl.string(Z.t["0l2pEt"]),
        body: Z.intl.string(Z.t["DSZUK/"]),
        targetElementRef: a,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(el.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: Z.intl.string(Z.t.YdkBCH),
                onClick: () => {
                    (i(el.i.TAKE_ACTION),
                        d()(null != t, "Received null activity"),
                        x.default.track(F.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, eT.X)(s, eT.O.INVITE),
                        x.default.track(F.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: t.application_id,
                            location: l.location,
                        }),
                        (0, T.qf)(t, !1));
                },
            },
        ],
    });
}
function nb(e) {
    let {
            popover: t,
            dismissPopover: n,
            application: i,
            connectionApp: s,
            activity: l,
            runningGame: o,
            hasAlreadyLinked: c,
            didStartAuthorization: u,
            startAuthorization: _,
            accountLinkUpsellTargetRef: E,
            inviteButtonRef: A,
            accountLinkButtonRef: h,
            gameCommunityGuildId: f,
            parentAnalyticsLocation: I,
            analyticsLocations: p,
            analyticsContext: T,
        } = e,
        {
            isEligible: m,
            displayedApp: g,
            isLoading: S,
        } = (function (e) {
            let { connectionApp: t } = e,
                { data: n, isLoading: i } = (0, eh.YY)(t?.parentId ?? t?.id);
            return {
                isEligible:
                    null !=
                        nS.APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS.find(
                            (e) => e.applicationId === n?.id,
                        ) && null != t,
                displayedApp: n,
                isLoading: i,
            };
        })({ connectionApp: s }),
        { rewarded: N } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: r } = e,
                [s, l] = a.useState(!1);
            return (
                a.useEffect(() => {
                    if (!t || !n || !i || s || null == r) return;
                    let e = !1;
                    return (
                        (0, eu.RI)({
                            applicationId: r.id,
                            onSuccess: () => {
                                e || l(!0);
                            },
                            onError: () => {},
                        }),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, i, s, r]),
                { rewarded: s }
            );
        })({ isEligible: m, hasAlreadyLinked: c, didStartAuthorization: u, application: s });
    switch (t) {
        case 0:
            return (0, r.jsx)(ny, {
                application: i,
                connectionApp: s,
                isEligibleForIncentivizedAccountLinking: m,
                incentivizedAccountLinkingDisplayedApp: g,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: _,
                analyticsLocations: p,
                accountLinkButtonRef: h,
                incentivizedAccountLinkingIsLoading: S,
            });
        case 1:
            return (0, r.jsx)(nD, {
                incentivizedAccountLinkingRewarded: N,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nv, {
                activity: l,
                game: o,
                markAsDismissed: n,
                inviteButtonRef: A,
                parentAnalyticsLocation: I,
                analyticsContext: T,
            });
        case 3:
            return (
                d()(i?.id != null && i?.name != null && null != f, "Game community upsell requires these as non null"),
                (0, r.jsx)(ev, {
                    targetElementRef: E,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: f,
                    markAsDismissed: n,
                })
            );
        default:
            return null;
    }
}
let nM = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(tl.A, { children: t });
});
function nP(e) {
    let t,
        {
            application: n,
            embeddedActivity: i,
            channel: a,
            channelName: s,
            guildForConnectedChannel: l,
            isForceShowSharingPopout: o,
            setIsForceShowSharingPopout: c,
            accountLinkUpsellTargetRef: u,
            activityPopoutTargetRef: _,
            isActivityPopoutOpen: E,
        } = e,
        A = { start: i.connectedSince },
        h = s;
    function f() {
        (d()(null != a, "Channel cannot be null during navigation click"),
            g.A.channelListScrollTo(a.guild_id ?? F.ME, a.id),
            !E &&
                ((0, e5.gV)(a.type) &&
                    m.A.selectParticipant(
                        a.id,
                        (0, ep.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, e5.pQ)(a.type) && (0, R.gk)(nm.Gd.PANEL)));
    }
    null != l && null != a
        ? ((t = F.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = F.BVt.CHANNEL(F.ME, a.id));
    let I = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eB.A, { className: nO.n8, game: n, size: eB.M.SMALL, ref: u }),
            (0, r.jsx)(eo, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nO.pq,
                    children: [
                        (0, r.jsx)(ez.A, {
                            href: t,
                            onClick: function () {
                                (f(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
                            },
                            children: (0, r.jsx)(to.A, { className: nO._W, children: n.name }),
                        }),
                        null != a && (0, e5.pQ)(a.type)
                            ? (0, r.jsx)(ez.A, {
                                  href: t,
                                  onClick: f,
                                  children: (0, r.jsx)(tl.A, { className: nO.Ix, children: h }),
                              })
                            : (0, r.jsx)(nM, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nO.cm, children: I });
}
function nU(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eB.A, { className: nO.n8, game: n, size: eB.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nO.pq,
                    children: [
                        (0, r.jsx)(f.D, {
                            onClick: function () {
                                if (s) return void p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                if (t.intent !== tZ.sV.MAIN) {
                                    let e = (0, eO.A)(t.surface);
                                    null != e && (0, e3.pX)(F.BVt.CHANNEL((0, eR.A)(t.surface) ?? F.ME, e));
                                    return;
                                }
                                eL.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: tZ.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nO.rB,
                            children: (0, r.jsx)(to.A, { className: nO._W, children: n.name }),
                        }),
                        (0, r.jsx)(nM, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nO.cm, children: o });
}
function nw(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eY.A)(t);
    return (0, r.jsxs)("div", {
        className: nO.cm,
        ref: n,
        children: [
            (0, r.jsx)(eK.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nO.pq,
                children: [
                    (0, r.jsx)(to.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nO.qi,
                            children: [
                                (0, r.jsx)(I.t, { size: "xxs", color: eN.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e2, { className: nO.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nG = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([e4.default], () => e4.default.getId()),
        A = (0, _.bG)([eP.Ay, tr.A], () => (0, e$.A)(eP.Ay, tr.A)),
        { enabled: h } = eM.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: f, isWithinThreshold: I } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, _.bG)([ek], () => ek.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (null == n || Date.now() - n.endedAt >= eF) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + eF - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [n]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let i = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i < eF };
        })(),
        p = (0, _.bG)([tn.Ay, e6.A], () => e6.A.getChannel(tn.Ay.getVoiceChannelId())),
        T = (0, _.bG)([L.Ay], () => L.Ay.getConnectedActivityChannelId()),
        m = (0, _.bG)([e6.A], () => e6.A.getChannel(T)),
        g = (0, _.bG)([e8.A], () => e8.A.getGuild(m?.guild_id)),
        [S, N] = (0, _.yK)([eQ.A], () => [eQ.A.getCurrentUserActiveStream(), eQ.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
        R = m?.type === F.rbe.GUILD_SPACE ? null : O,
        b = (0, _.bG)([ey.A, ef.A, eS.Ay], () => {
            let e = (0, tZ.ny)(ey.A.getMainFrame());
            return null != e && (0, eg.A)(e) ? null : e;
        }),
        M = (0, _.bG)([e8.A, e9.A], () => null == p || ej.vz(p, e8.A, e9.A, !1)),
        [U] = (0, eI.A)([
            (function () {
                if (null != N && null != N.id) return N.id;
                if (null != A) return A.id;
                if (null != R) return R.applicationId;
                if (null != b) return b.applicationId;
                if (null != f && null != f.id) return f.id;
            })(),
        ]),
        w =
            (function () {
                let { enabled: e } = v.h.useConfig({ location: "useCanGoLiveActivityFromActivityCard" }),
                    t = (0, _.bG)([D.Ay], y.sV);
                return e && t;
            })() &&
            (null != R || null != b),
        G = (0, _.bG)([D.Ay], () => (0, eW.A)(D.Ay) && (0, ts.isWindows)()) || w,
        k = (0, _.bG)([te.A], () => (null != c ? te.A.findActivity(c, (e) => e.type === F.$pd.PLAYING) : null)),
        B = null != S && S.ownerId === c && S.state !== F.XYD.ENDED,
        V = (0, _.bG)([ti.default, tt.A], () => (null != m ? (0, em.m1)(m, ti.default, tt.A) : void 0)),
        H = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([eZ.A], () => eZ.A.getState()),
                n = (0, _.bG)([eQ.A], () => eQ.A.getCurrentUserActiveStream()?.guildId),
                i = (0, eq.A)("useStreamQualityIndicator", n, e, t);
            if (i !== e0.on.RESOLUTION_720 || t === e0.kn.FPS_60) return `${(0, e0.zr)(i)} ${(0, eJ.Bs)(t)}`;
        })(),
        [j, W] = a.useState(!1),
        Y = (0, _.bG)([eX.A], () => eX.A.getWindowOpen(F.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: K, analyticsLocations: $ } = (0, ed.Ay)(),
        {
            hasAlreadyLinked: z,
            canStartAuthorization: X,
            connectionApp: q,
            startAuthorization: Z,
            token: Q,
        } = (0, eE.RD)(U, { allowedFlows: [tX._.RPC, tX._.WEB] }),
        [J, ee] = a.useState(null),
        et = null != J,
        en = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (ee(U?.id ?? null), Z(...t));
            },
            [U?.id, Z],
        ),
        ei = e_.l.getConfig({ location: "ActivityPanelGameCard" }).enabled && (0, eA.e)(Q),
        er = !!z && !ei,
        ea = (0, C.Ay)(U?.id);
    a.useEffect(() => {
        null != U && ea !== U?.id && ee(null);
    }, [U, ea]);
    let es = (0, u.K)((e) => {
            e &&
                null != q &&
                x.default.track(F.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: A?.id ?? null, application_id: q.id });
        }),
        eo = a.useMemo(() => {
            let e = A?.id ?? f?.id;
            return null != e ? ng[e] : void 0;
        }, [A?.id, f?.id]),
        ec = (0, _.bG)([e7.A], () => null != eo && e7.A.isMember(eo), [eo]),
        eu = h && null != eo && !ec && (null != A || I) ? eo : void 0,
        eh = !(0, _.bG)([D.Ay], () => D.Ay.supports(nN.O5.VIDEO)) && (0, ts.isWindows)(),
        ep = null != A && (G || X || eh) && (!B || N?.pid != null),
        [eT, eN] = (function (e) {
            let {
                    application: t,
                    activity: n,
                    embeddedActivity: i,
                    connectingGameId: r,
                    setConnectingGameId: s,
                    canStartAuthorization: l,
                    hasAlreadyLinked: o,
                    didStartAuthorization: d,
                    gameCommunityGuildId: c,
                } = e,
                { isQuestBarEmpty: u, hasLoadedQuestBar: _ } = (0, P.c9)(),
                A = !_ || !u,
                h = !A && !o && null == r && l && null != t,
                { shouldShow: f, markAsDismissed: I } = (0, eV.D3)({
                    application: t,
                    disabled: !h,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: el.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eV.Yb,
                }),
                p = !A && null != r && o,
                T = a.useMemo(() => {
                    if (A || f) return [];
                    let e = [];
                    return (
                        o && d && tJ(t, n, i) && null == i && e.push(E.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(E.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, A, d, i, c, o, f]),
                [m, g] = (0, eC.kn)(T, { groupName: el.m.ACCOUNT_NAME_ZONE });
            return a.useMemo(() => {
                if (null != m)
                    switch (m) {
                        case E.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    (s(null), g(e));
                                },
                            ];
                        case E.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, g];
                        default:
                            return [null, g];
                    }
                return f ? [0, I] : p ? [1, () => s(null)] : [null, () => {}];
            }, [I, g, s, f, p, m]);
        })({
            application: U,
            activity: k,
            embeddedActivity: R,
            connectingGameId: J,
            setConnectingGameId: ee,
            canStartAuthorization: X,
            hasAlreadyLinked: er,
            didStartAuthorization: et,
            gameCommunityGuildId: eu,
        }),
        eO = null != f && (1 === eT || (I && (0 === eT || 3 === eT))) ? f : null,
        eR = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nT, {
                    isStreaming: B,
                    application: e,
                    game: t,
                    onClickNotSharing: () => W(!0),
                    isForceShowSharingPopout: j,
                    setIsForceShowSharingPopout: W,
                    ref: o,
                    popoutTargetRef: s,
                    isCurrentlyRunningGame: i,
                });
            },
            [j, B],
        ),
        eL = a.useMemo(
            () =>
                ep
                    ? eR(U, A, { isGameRunning: !0 })
                    : null != R && null != U && tJ(U, k, R)
                      ? (0, r.jsx)(nP, {
                            application: U,
                            embeddedActivity: R,
                            channel: m,
                            channelName: V,
                            guildForConnectedChannel: g,
                            isForceShowSharingPopout: j,
                            setIsForceShowSharingPopout: W,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: s,
                            isActivityPopoutOpen: Y,
                        })
                      : null != b &&
                          null != U &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: U, frame: b })
                        ? (0, r.jsx)(nU, {
                              application: U,
                              accountLinkUpsellTargetRef: o,
                              frame: b,
                              isActivityPopoutOpen: Y,
                          })
                        : B
                          ? (0, r.jsx)(nw, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: H,
                            })
                          : null != eO
                            ? eR(U, eO, { isGameRunning: !1 })
                            : null,
            [N, k, U, V, m, R, b, g, Y, j, B, ep, eO, eR, A, H],
        );
    return null == eL
        ? null
        : (0, r.jsx)("div", {
              className: l()(nO.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: nO.rf,
                  children: [
                      eL,
                      (0, r.jsx)(t0, {
                          stream: S,
                          canGoLive: G,
                          canGoLiveActivity: w,
                          guildId: t,
                          isStreaming: B,
                          channel: m,
                          canStream: M,
                          runningGame: A,
                          activity: k,
                          application: U,
                          embeddedActivity: R,
                          frame: b,
                          analyticsContext: n,
                          inviteButtonRef: d,
                          accountLinkButtonRef: es,
                          canStartAuthorization: X,
                          startAuthorization: en,
                          hasAlreadyLinked: er,
                          connectionApp: q,
                      }),
                      (0, r.jsx)(nb, {
                          popover: eT,
                          dismissPopover: eN,
                          application: U,
                          connectionApp: q,
                          activity: k,
                          runningGame: A,
                          hasAlreadyLinked: er,
                          didStartAuthorization: et,
                          startAuthorization: en,
                          accountLinkUpsellTargetRef: o,
                          inviteButtonRef: d,
                          accountLinkButtonRef: es,
                          gameCommunityGuildId: eu,
                          parentAnalyticsLocation: K,
                          analyticsLocations: $,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
