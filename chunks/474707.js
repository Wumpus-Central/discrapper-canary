(n.d(t, { A: () => nP }), n(321073));
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
    D = n(192820),
    v = n(756042),
    b = n(379848),
    M = n(832248),
    P = n(201805),
    U = n(885386),
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
    q = n(968987),
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
    ef = n(429913),
    eI = n(568598),
    ep = n(384059),
    eT = n(47167),
    em = n(793574),
    eg = n(131607),
    eS = n(780964),
    eN = n(766075),
    eC = n(763827),
    eO = n(927813),
    eR = n(572164),
    eL = n(614584),
    ey = n(118328),
    eD = n(704796),
    ev = n(253146);
let eb = 2 * eO.A.Millis.WEEK;
function eM(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        i = (0, _.bG)([eC.A], () => eC.A.getChannelId());
    return (0, r.jsx)(
        h.A,
        {
            shouldShow: !0,
            targetElementRef: t,
            title: Z.intl.string(eD.default["owG+AO"]),
            body: Z.intl.string(eD.default.peZtJo),
            badge: "early_access",
            graphic: { type: "image", src: ev, aspectRatio: "6/4" },
            position: "top",
            caretConfig: { align: "center" },
            actions: [
                {
                    text: Z.intl.string(eD.default.oaIXoz),
                    onClick: () => {
                        (n(el.i.TAKE_ACTION),
                            (0, eL.yO)({
                                clipsEnabled: !0,
                                trackAnalytics: !0,
                                analyticsLocation: em.A.CLIPS_ACCOUNT_PANEL_COACHMARK,
                            }),
                            (0, eN.openUserSettings)(eS.X.CLIPS_PANEL));
                    },
                },
            ],
            onRequestClose: () => {
                n(el.i.USER_DISMISS);
            },
        },
        i ?? "disconnected",
    );
}
var eP = n(404374),
    eU = n(197184),
    ew = n(747180),
    eG = n(625180),
    ex = n(91242),
    ek = n(66834);
function eF(e) {
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
                            ek.A.joinGuild(s, { source: F.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL }));
                    },
                },
            ],
        })
    );
}
var eB = n(945810);
let eV = (0, eB.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eH = n(952818);
let ej = eH.Ay.getRunningGames(),
    eW = [];
class eY extends _.Ay.Store {
    initialize() {
        this.syncWith([eH.Ay], () =>
            (function () {
                let e = eH.Ay.getRunningGames();
                if (ej === e) return !1;
                let t = ej.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((ej = e), 0 === t.length)) return !1;
                eW = [...eW, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return eW;
    }
    getLastPreviouslyRunningGame() {
        return eW[eW.length - 1] ?? null;
    }
}
let eK = new eY(p.h, {}),
    e$ = 5 * eO.A.Millis.MINUTE;
var ez = n(769015),
    eX = n(334074),
    eq = n(454908),
    eZ = n(279250),
    eQ = n(880144),
    eJ = n(277680),
    e0 = n(118277),
    e1 = n(905552),
    e2 = n(95035),
    e3 = n(567249),
    e5 = n(507756),
    e6 = n(929921),
    e4 = n(616356),
    e7 = n(650338),
    e8 = n(753070),
    e9 = n(900795);
function te(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(B.E, { className: l()({ [e9.Q]: null == n }, t), color: n, ...i });
}
var tt = n(976860),
    tn = n(95701),
    ti = n(280450),
    tr = n(734057),
    ta = n(184989),
    ts = n(71393),
    tl = n(576705),
    to = n(290863),
    td = n(994500),
    tc = n(309010),
    tu = n(287809),
    t_ = n(157257),
    tE = n(975571),
    tA = n(723702),
    th = n(994314),
    tf = n(485599),
    tI = n(141628),
    tp = n(192308),
    tT = n(959988),
    tm = n(183623),
    tg = n(241541),
    tS = n(70688),
    tN = n(687966),
    tC = n(34188),
    tO = n(942857),
    tR = n(646865),
    tL = n(988534),
    ty = n(55730),
    tD = n(521588),
    tv = n(702841),
    tb = n(176781),
    tM = n(442433),
    tP = n(42473),
    tU = n(200542),
    tw = n(274372),
    tG = n(414405);
function tx(e) {
    (0, tM.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e("666601"), n.e("344751")]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tk = function (e) {
    let { isActivity: t = !1 } = e,
        { parentAnalyticsLocation: n } = (0, ed.Ay)(),
        i = (0, eR.E)(),
        a = (0, tv.bG)([tw.Ay], () => tw.Ay.getIsAtMaxSaveClipOperations()),
        { enableGamePanelEntrypoint: s } = tU.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: l, clipsSourceAttached: o } = (0, tG.A)({ isActivity: t });
    return s && i
        ? (0, r.jsx)(tP.A, {
              disabled: a || !o,
              tooltipText: l,
              onClick: () => {
                  ((0, eL.l0)(), (0, ep.X)(n, ep.O.CLIP));
              },
              onContextMenu: tx,
              icon: tb.x,
          })
        : null;
};
var tF = n(457827),
    tB = n(907878),
    tV = n(831617),
    tH = n(196736);
let tj = (0, eB.mj)({
        name: "2026-08-gsh-subs-activity-bar",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    tW = (0, eB.mj)({
        name: "2026-02-gsh-game-detection-upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var tY = n(610010),
    tK = n(475669),
    t$ = n(344045);
function tz(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tK.A], () => null != a && tK.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
function tX(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tz, {
        title: Z.intl.formatToPlainString(t$.default.k9KZ2L, { gameName: t }),
        body: Z.intl.string(t$.default.gOrBCw),
        ctaText: Z.intl.string(t$.default.sElzfG),
        ...n,
    });
}
var tq = n(338771),
    tZ = n(473161),
    tQ = n(453774),
    tJ = n(44724),
    t0 = n(153488),
    t1 = n(942370),
    t2 = n(758836),
    t3 = n(165610),
    t5 = n(79958);
function t6(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === F.$pd.PLAYING &&
              (0, ty.A)(t, F.jUm.JOIN))
    );
}
let t4 = a.memo(function (e) {
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
        b = (0, tQ.A)(m?.id),
        M = t6(m, p, f),
        { enabled: P } = tW.useConfig({ location: "activity-panel" }),
        U = (0, tH.H)({ location: "activity-panel" }),
        w = (0, tY.Bp)("activity-panel"),
        G = (0, tV.C$)(l ?? void 0, "activity-panel"),
        k = (0, _.bG)([t0.A], () => t0.A.hasConsented(F.YAq.PERSONALIZATION)),
        B = (0, tY.TF)(A?.id, { shouldFetch: w || G }),
        V = U && k && (0, tY.k0)(A?.id),
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
                (0, ep.X)(D, ep.O.INVITE),
                x.default.track(F.HAw.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: p.application_id,
                    location: g.location,
                }),
                (0, T.qf)(p, !1));
        }, [p, g, D, A]),
        K = a.useCallback(
            (e, t) => () => {
                ((0, ep.X)(D, ep.O.LEAVE_ACTIVITY), (0, tL.d)({ location: t, applicationId: e, showFeedback: !0 }));
            },
            [D],
        ),
        $ = a.useCallback(
            (e) => () => {
                ((0, ep.X)(D, ep.O.LEAVE_ACTIVITY), (0, tF.r)(e));
            },
            [D],
        ),
        z = a.useCallback(() => {
            (0, tq.A)(t);
        }, [t]),
        X = a.useCallback(() => {
            (0, tp.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("249169"),
                    n.e("473782"),
                    n.e("553464"),
                    n.e("130662"),
                    n.e("498552"),
                    n.e("236946"),
                    n.e("338601"),
                    n.e("944727"),
                    n.e("561547"),
                    n.e("937494"),
                    n.e("82001"),
                ]).then(n.bind(n, 266536));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        sourcePID: A?.pid,
                        selectSource: null != tc.Ay.getVoiceChannelId(),
                        analyticsLocations: v,
                    });
            });
        }, [A, v]),
        q = null == A && s && (null != f || null != I),
        Q = a.useCallback(() => {
            let e = (0, y.YX)();
            null == e
                ? X()
                : (0, tp.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("249169"),
                          n.e("473782"),
                          n.e("553464"),
                          n.e("130662"),
                          n.e("498552"),
                          n.e("236946"),
                          n.e("338601"),
                          n.e("944727"),
                          n.e("561547"),
                          n.e("937494"),
                          n.e("82001"),
                      ]).then(n.bind(n, 266536));
                      return (n) =>
                          (0, r.jsx)(t, {
                              ...n,
                              activitySource: e,
                              selectSource: null != tc.Ay.getVoiceChannelId(),
                              analyticsLocations: v,
                          });
                  });
        }, [X, v]),
        J = m?.name ?? A?.name ?? "",
        ee = a.useCallback(() => {
            ((0, tB.pK)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                (0, tp.openModalLazy)(async () => {
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
                (0, tB.pK)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                (0, tZ.A)({ analyticsLocations: v, analyticsLocation: g.location, guildId: l }));
        }, [l, v, g.location, A?.id]),
        en = a.useCallback(() => {
            let e = A?.id;
            (0, tB.pK)({ gameApplicationId: e, buttonVariant: "shop" });
            let t = F.BVt.COLLECTIBLES_SHOP_WITH_TAB(t2.G2.GAME_SERVERS);
            (0, tt.pX)(null != e ? `${t}&${t2.tD}=${e}` : t);
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
    let es = null == b || null == m ? null : (0, r.jsx)(ne, { applicationId: b.id }),
        el = V
            ? (0, r.jsx)(t9, { gameName: J, runningGameId: A?.id, isGameServerHostingInShopEnabled: U, onClick: en })
            : j
              ? (0, r.jsx)(t8, {
                    tooltipText: Z.intl.formatToPlainString(t$.default.YhnUVO, { gameName: J }),
                    badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                    onClick: ee,
                    onViewed: () => (0, tB.ET)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                })
              : W
                ? (0, r.jsx)(t8, {
                      tooltipText: Z.intl.formatToPlainString(t$.default.lwwiHE, { gameName: J }),
                      badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                      onClick: et,
                      onViewed: () => (0, tB.ET)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                  })
                : null,
        eo = (function () {
            let e, t, n;
            if ((null == A && null != f && !(0, tR.f)() && !q) || (!o && !i)) return null;
            let a = null;
            return (
                o
                    ? ((e = !1),
                      (t = () => {
                          (z(), (0, ep.X)(D, ep.O.STREAM, !1));
                      }),
                      (n = tT.G),
                      (a = Z.intl.string(Z.t.S5anIc)))
                    : u
                      ? ((e = !1),
                        (t = () => {
                            (q ? Q() : X(), (0, ep.X)(D, ep.O.STREAM, !0));
                        }),
                        (n = tm.F),
                        (a =
                            null != A
                                ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: A.name })
                                : q && null != m
                                  ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: m.name })
                                  : Z.intl.string(Z.t.FeUKeA)))
                      : ((e = !0),
                        (t = null),
                        (n = tm.F),
                        null != c && (0, tn.gV)(c.type) && (a = Z.intl.string(Z.t.uQn9B8))),
                (0, r.jsx)("div", {
                    className: t5.IF,
                    children: (0, r.jsx)(tP.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                })
            );
        })(),
        ec =
            M && null == f
                ? (0, r.jsx)(tP.A, { ref: S, tooltipText: Z.intl.string(Z.t["hC/Zey"]), onClick: Y, icon: tg.D })
                : null,
        eu =
            null == f
                ? null
                : (0, r.jsx)(tP.A, {
                      tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                      onClick: K(f.applicationId, f.location),
                      icon: tS.DoorExitIcon,
                  }),
        e_ =
            null == I || I.intent !== t3.sV.MAIN
                ? null
                : (0, r.jsx)(tP.A, {
                      tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                      onClick: $(I.id),
                      icon: tS.DoorExitIcon,
                  }),
        eE =
            !O || R
                ? null
                : (0, r.jsx)(t7, {
                      runningGame: A,
                      startAuthorization: function () {
                          C({ analyticsLocations: v }) === t1._.RPC &&
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
        className: t5.o1,
        children: [
            eE ?? es ?? ec,
            el,
            (eu ?? e_) == null
                ? (0, r.jsx)(tk, { isActivity: null == A && null != I && I.intent !== t3.sV.MAIN })
                : null,
            eo,
            eu ?? e_,
            eA,
        ],
    });
});
function t7(e) {
    let { runningGame: t, startAuthorization: n, connectionApp: i, ref: a } = e;
    return (0, r.jsx)(tP.A, {
        ref: a,
        onClick: () => {
            (x.default.track(F.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "link_account",
                game_id: t?.id ?? null,
                application_id: i?.id ?? null,
            }),
                n());
        },
        icon: tI.A,
        tooltipText: Z.intl.string(Z.t.sbdnpw),
    });
}
function t8(e) {
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
    let _ = (0, tO.A)(),
        { isQuestBarEmpty: E, hasLoadedQuestBar: A } = (0, P.c9)(),
        h = d && null != l && null != s && !_ && E && A,
        [f, I] = (0, eg.kn)(h && null != l ? [l] : [], { bypassAutoDismiss: !0 }),
        [p, T] = (0, eg.kn)(d ? [o] : [], { bypassAutoDismiss: !0 }),
        m = a.useCallback(() => {
            (I(el.i.TAKE_ACTION), T(el.i.TAKE_ACTION), n());
        }, [I, T, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: t5.IF,
                children: [
                    (0, r.jsx)("div", { className: t5.uD, children: (0, r.jsx)("div", { className: t5.Z9 }) }),
                    (0, r.jsx)(tP.A, { ref: c, tooltipText: t, onClick: m, icon: tN.GameControllerIcon }),
                    p === o && (0, r.jsx)(tD.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != f && null != s && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: T }),
        ],
    });
}
function t9(e) {
    let { gameName: t, runningGameId: n, isGameServerHostingInShopEnabled: i, onClick: a } = e,
        s = (function (e) {
            let { location: t } = e;
            return tj.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(t8, {
        tooltipText: Z.intl.formatToPlainString(t$.default.oZ4ZFn, { gameName: t }),
        coachmarkContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
        badgeContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_NEW_BADGE,
        marketingEnabled: i && s,
        onClick: a,
        onViewed: () => (0, tB.ET)({ gameApplicationId: n, buttonVariant: "shop" }),
        renderCoachmark: (e) => {
            let { targetElementRef: i, markAsDismissed: s, markBadgeAsDismissed: l } = e;
            return (0, r.jsx)(tX, {
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
function ne(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tJ.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tJ.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            (x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s());
        }, [t, s]);
    return (0, r.jsx)(tP.A, { tooltipText: Z.intl.string(Z.t.vyaWs7), onClick: l, onMouseDown: i, icon: tC.U, ref: n });
}
var nt = n(428689),
    nn = n(409626),
    ni = n(692969),
    nr = n(202163),
    na = n(475358),
    ns = n(939409);
function nl(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(f.D, {
        className: ns.kL,
        onClick: t,
        children: (0, r.jsx)(B.E, {
            className: ns.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: Z.intl.string(Z.t.jfrLLb),
        }),
    });
}
var no = n(532624),
    nd = n(350535),
    nc = n(369409);
function nu(e) {
    let { isCurrentlyRunningGame: t, onClickNotSharing: n } = e,
        i = (0, _.bG)([no.Ay], () => no.Ay.getKeybindForAction(F.hCu.SAVE_CLIP)),
        a = null != i && i.shortcut.length > 0 ? nd.dI(i.shortcut, !0) : null,
        s = (0, eR.E)(),
        l = U.tz.useSetting(),
        o = (0, _.bG)([G.A], () => G.A.getStatus()),
        d = !__OVERLAY__ && (!l || o === F.clD.INVISIBLE),
        c = s && t && null != a;
    return t
        ? d
            ? (0, r.jsx)(nl, { onClick: n })
            : c
              ? (0, r.jsx)(B.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: nc.En,
                    tag: "div",
                    children: Z.intl.format(eD.default.ESZwQX, {
                        keybind: a,
                        keybindHook: () => (0, r.jsx)(na.e, { shortcut: a, className: nc.oH, keyClassName: nc.Bj }),
                    }),
                })
              : null
        : (0, r.jsx)(B.E, { variant: "text-xs/medium", color: "text-subtle", children: Z.intl.string(Z.t.W4N1ru) });
}
var n_ = n(450173);
function nE(e) {
    let { name: t, applicationId: n } = e,
        i = (0, ni.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: nn.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(f.D, {
        onClick: i,
        className: l()(null != i && n_.On),
        children: (0, r.jsx)(tf.A, { className: n_.mO, children: t }),
    });
}
function nA(e) {
    let { gameRecord: t, application: n, game: i, showLiveBadge: a, ref: s } = e;
    return (0, r.jsxs)("div", {
        className: n_.f9,
        children: [
            (0, r.jsx)(ez.A, { className: n_.Gt, game: t ?? n, pid: i?.pid, ref: s }),
            a ? (0, r.jsx)(nt.VideoIcon, { size: "md", color: "currentColor", className: n_.it }) : null,
        ],
    });
}
function nh(e) {
    let { name: t, gameRecord: n, application: i, game: a, isStreaming: s, ref: l } = e,
        o = (0, ni.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: i?.id,
            source: nn.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = null != o,
        c = (0, r.jsx)(nA, { gameRecord: n, application: i, game: a, showLiveBadge: s && !d, ref: l });
    return d
        ? (0, r.jsx)(f.D, {
              onClick: o,
              className: n_.Ow,
              "aria-label": Z.intl.formatToPlainString(Z.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nf(e) {
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
        { gameRecord: p } = (0, nr.A)(d?.id),
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
            className: n_.cm,
            children: [
                (0, r.jsx)(nh, { name: T, gameRecord: p, application: d, game: c, isStreaming: o, ref: h }),
                (0, r.jsx)(eo, {
                    popoutTargetRef: f,
                    isForceShowSharingPopout: E,
                    setIsForceShowSharingPopout: A,
                    hidePopout: !I,
                    children: (0, r.jsxs)("div", {
                        className: n_.pq,
                        children: [
                            null != T ? (0, r.jsx)(nE, { name: T, applicationId: d?.id }) : null,
                            (0, r.jsx)(nu, { isCurrentlyRunningGame: I, onClickNotSharing: u }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var nI = n(5867);
let np = {
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
var nT = n(534952),
    nm = n(731854),
    ng = n(545704),
    nS = n(821095),
    nN = n(268920),
    nC = n(633217);
function nO(e) {
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
        { data: f, isLoading: I } = (0, eq.I)(i?.getCanonicalGameId()),
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
    s && (S = Z.intl.string(ng.default["2cOIOr"]));
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
            (g = Z.intl.formatToPlainString(ng.default.dPuaZE, { applicationName: p.name })),
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
function nR(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = Z.intl.string(Z.t.MxAlrB),
        l = Z.intl.string(Z.t["/UTTEg"]),
        o = [
            {
                text: Z.intl.string(Z.t.aRIFWD),
                onClick: () => {
                    (i(el.i.TAKE_ACTION), window.open(tE.A.getArticleURL(F.MVz.IN_GAME_FEATURES), "_blank"));
                },
            },
        ];
    return (
        n &&
            ((s = Z.intl.string(ng.default.ublzTG)),
            (l = Z.intl.string(ng.default.JgM2xu)),
            (t = { type: "video", src: nC.A, fallbackImageSrc: nN.A, aspectRatio: "2/1", loop: !0 })),
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
function nL(e) {
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
                        (0, ep.X)(s, ep.O.INVITE),
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
function ny(e) {
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
            activityPopoutTargetRef: A,
            inviteButtonRef: h,
            accountLinkButtonRef: f,
            gameCommunityGuildId: I,
            parentAnalyticsLocation: p,
            analyticsLocations: T,
            analyticsContext: m,
        } = e,
        {
            isEligible: g,
            displayedApp: S,
            isLoading: N,
        } = (function (e) {
            let { connectionApp: t } = e,
                { data: n, isLoading: i } = (0, eh.YY)(t?.parentId ?? t?.id),
                r = nT.APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS.find(
                    (e) => e.applicationId === n?.id,
                );
            return {
                isEligible: null != r && r.getMigrationExperimentEnabled("ActivityPanelGameCard") && null != t,
                displayedApp: n,
                isLoading: i,
            };
        })({ connectionApp: s }),
        { rewarded: C } = (function (e) {
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
        })({ isEligible: g, hasAlreadyLinked: c, didStartAuthorization: u, application: s });
    switch (t) {
        case 0:
            return (0, r.jsx)(nO, {
                application: i,
                connectionApp: s,
                isEligibleForIncentivizedAccountLinking: g,
                incentivizedAccountLinkingDisplayedApp: S,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: _,
                analyticsLocations: T,
                accountLinkButtonRef: f,
                incentivizedAccountLinkingIsLoading: N,
            });
        case 1:
            return (0, r.jsx)(nR, {
                incentivizedAccountLinkingRewarded: C,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nL, {
                activity: l,
                game: o,
                markAsDismissed: n,
                inviteButtonRef: h,
                parentAnalyticsLocation: p,
                analyticsContext: m,
            });
        case 3:
            return (
                d()(i?.id != null && i?.name != null && null != I, "Game community upsell requires these as non null"),
                (0, r.jsx)(eF, {
                    targetElementRef: E,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: I,
                    markAsDismissed: n,
                })
            );
        case 4:
            return (0, r.jsx)(eM, { targetElementRef: A, markAsDismissed: n });
        default:
            return null;
    }
}
let nD = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(th.A, { children: t });
});
function nv(e) {
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
                ((0, tn.gV)(a.type) &&
                    m.A.selectParticipant(
                        a.id,
                        (0, eI.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, tn.pQ)(a.type) && (0, R.gk)(nI.Gd.PANEL)));
    }
    null != l && null != a
        ? ((t = F.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = F.BVt.CHANNEL(F.ME, a.id));
    let I = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ez.A, { className: nS.n8, game: n, size: ez.M.SMALL, ref: u }),
            (0, r.jsx)(eo, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nS.pq,
                    children: [
                        (0, r.jsx)(e2.A, {
                            href: t,
                            onClick: function () {
                                (f(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
                            },
                            children: (0, r.jsx)(tf.A, { className: nS._W, children: n.name }),
                        }),
                        null != a && (0, tn.pQ)(a.type)
                            ? (0, r.jsx)(e2.A, {
                                  href: t,
                                  onClick: f,
                                  children: (0, r.jsx)(th.A, { className: nS.Ix, children: h }),
                              })
                            : (0, r.jsx)(nD, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nS.cm, children: I });
}
function nb(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ez.A, { className: nS.n8, game: n, size: ez.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nS.pq,
                    children: [
                        (0, r.jsx)(f.D, {
                            onClick: function () {
                                if (s) return void p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                if (t.intent !== t3.sV.MAIN) {
                                    let e = (0, eU.A)(t.surface);
                                    null != e && (0, tt.pX)(F.BVt.CHANNEL((0, ew.A)(t.surface) ?? F.ME, e));
                                    return;
                                }
                                eG.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: t3.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nS.rB,
                            children: (0, r.jsx)(tf.A, { className: nS._W, children: n.name }),
                        }),
                        (0, r.jsx)(nD, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nS.cm, children: o });
}
function nM(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eJ.A)(t);
    return (0, r.jsxs)("div", {
        className: nS.cm,
        ref: n,
        children: [
            (0, r.jsx)(e0.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nS.pq,
                children: [
                    (0, r.jsx)(tf.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nS.qi,
                            children: [
                                (0, r.jsx)(I.t, { size: "xxs", color: eP.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(te, { className: nS.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nP = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([ti.default], () => ti.default.getId()),
        A = (0, _.bG)([eH.Ay, t_.A], () => (0, e1.A)(eH.Ay, t_.A)),
        { enabled: h } = eV.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: f, isWithinThreshold: I } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, _.bG)([eK], () => eK.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (null == n || Date.now() - n.endedAt >= e$) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + e$ - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [n]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let i = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i < e$ };
        })(),
        p = (0, _.bG)([tc.Ay, tr.A], () => tr.A.getChannel(tc.Ay.getVoiceChannelId())),
        T = (0, _.bG)([L.Ay], () => L.Ay.getConnectedActivityChannelId()),
        m = (0, _.bG)([tr.A], () => tr.A.getChannel(T)),
        g = (0, _.bG)([ts.A], () => ts.A.getGuild(m?.guild_id)),
        [S, N] = (0, _.yK)([e4.A], () => [e4.A.getCurrentUserActiveStream(), e4.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
        R = m?.type === F.rbe.GUILD_SPACE ? null : O,
        b = (0, _.bG)([ex.A], () => (0, t3.ny)(ex.A.getMainFrame())),
        U = (0, _.bG)([ts.A, tl.A], () => null == p || eZ.vz(p, ts.A, tl.A, !1)),
        [G] = (0, ef.A)([
            (function () {
                if (null != N && null != N.id) return N.id;
                if (null != A) return A.id;
                if (null != R) return R.applicationId;
                if (null != b) return b.applicationId;
                if (null != f && null != f.id) return f.id;
            })(),
        ]),
        k =
            (function () {
                let { enabled: e } = v.h.useConfig({ location: "useCanGoLiveActivityFromActivityCard" }),
                    t = (0, _.bG)([D.Ay], y.sV);
                return e && t;
            })() &&
            (null != R || null != b),
        B = (0, _.bG)([D.Ay], () => (0, eQ.A)(D.Ay) && (0, tA.isWindows)()) || k,
        V = (0, _.bG)([to.A], () => (null != c ? to.A.findActivity(c, (e) => e.type === F.$pd.PLAYING) : null)),
        H = null != S && S.ownerId === c && S.state !== F.XYD.ENDED,
        j = (0, _.bG)([tu.default, td.A], () => (null != m ? (0, eT.m1)(m, tu.default, td.A) : void 0)),
        W = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([e6.A], () => e6.A.getState()),
                n = (0, _.bG)([e4.A], () => e4.A.getCurrentUserActiveStream()?.guildId),
                i = (0, e5.A)("useStreamQualityIndicator", n, e, t);
            if (i !== e8.on.RESOLUTION_720 || t === e8.kn.FPS_60) return `${(0, e8.zr)(i)} ${(0, e7.Bs)(t)}`;
        })(),
        [Y, K] = a.useState(!1),
        $ = (0, _.bG)([e3.A], () => e3.A.getWindowOpen(F.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: z, analyticsLocations: X } = (0, ed.Ay)(),
        {
            hasAlreadyLinked: q,
            canStartAuthorization: Z,
            connectionApp: Q,
            startAuthorization: J,
            token: ee,
        } = (0, eE.RD)(G, { allowedFlows: [t1._.RPC, t1._.WEB] }),
        [et, en] = a.useState(null),
        ei = null != et,
        er = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (en(G?.id ?? null), J(...t));
            },
            [G?.id, J],
        ),
        ea = e_.l.getConfig({ location: "ActivityPanelGameCard" }).enabled && (0, eA.e)(ee),
        es = !!q && !ea,
        eo = (0, C.Ay)(G?.id);
    a.useEffect(() => {
        null != G && eo !== G?.id && en(null);
    }, [G, eo]);
    let ec = (0, u.K)((e) => {
            e &&
                null != Q &&
                x.default.track(F.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: A?.id ?? null, application_id: Q.id });
        }),
        eu = a.useMemo(() => {
            let e = A?.id ?? f?.id;
            return null != e ? np[e] : void 0;
        }, [A?.id, f?.id]),
        eh = (0, _.bG)([ta.A], () => null != eu && ta.A.isMember(eu), [eu]),
        eI = h && null != eu && !eh && (null != A || I) ? eu : void 0,
        ep = !(0, _.bG)([D.Ay], () => D.Ay.supports(nm.O5.VIDEO)) && (0, tA.isWindows)(),
        em = null != A && (B || Z || ep) && (!H || N?.pid != null),
        [eS, eN] = (function (e) {
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
                    canShowCurrentRunningGamePanel: u,
                    isStreamingCurrentRunningGame: _,
                } = e,
                { isQuestBarEmpty: A, hasLoadedQuestBar: h } = (0, P.c9)(),
                f = !h || !A,
                I = !f && !o && null == r && l && null != t,
                { shouldShow: p, markAsDismissed: T } = (0, eX.D3)({
                    application: t,
                    disabled: !I,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: el.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eX.Yb,
                }),
                m = !f && null != r && o,
                g = a.useMemo(() => {
                    if (f || p) return [];
                    let e = [];
                    return (
                        o && d && t6(t, n, i) && null == i && e.push(E.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(E.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, f, d, i, c, o, p]),
                [S, N] = (0, eg.kn)(g, { groupName: el.m.ACCOUNT_NAME_ZONE }),
                { shouldShow: C, markAsDismissed: O } = (function () {
                    let { disabled: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, ey.A)("AutoclippingAccountPanelCoachmark"),
                        n = (0, eR.E)(),
                        i = (0, M.A)((e) => e.isOpen),
                        r = (0, w.G)(),
                        [a, s] = (0, eg.Wl)(
                            e || !t || n || i || r ? null : E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK,
                            { cooldownDurationMs: eb },
                            el.m.ACCOUNT_NAME_ZONE,
                            !0,
                        );
                    return { shouldShow: a === E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK, markAsDismissed: s };
                })({ disabled: f || m || null != S || (!u && !_) });
            return a.useMemo(() => {
                if (null != S)
                    switch (S) {
                        case E.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    (s(null), N(e));
                                },
                            ];
                        case E.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, N];
                        default:
                            return [null, N];
                    }
                return p ? [0, T] : m ? [1, () => s(null)] : C ? [4, O] : [null, () => {}];
            }, [T, O, N, s, C, p, m, S]);
        })({
            application: G,
            activity: V,
            embeddedActivity: R,
            connectingGameId: et,
            setConnectingGameId: en,
            canStartAuthorization: Z,
            hasAlreadyLinked: es,
            didStartAuthorization: ei,
            gameCommunityGuildId: eI,
            canShowCurrentRunningGamePanel: em,
            isStreamingCurrentRunningGame: H && null != A && N?.id != null && N.id === A.id,
        }),
        eC = null != f && (1 === eS || (I && (0 === eS || 3 === eS))) ? f : null,
        eO = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nf, {
                    isStreaming: H,
                    application: e,
                    game: t,
                    onClickNotSharing: () => K(!0),
                    isForceShowSharingPopout: Y,
                    setIsForceShowSharingPopout: K,
                    ref: o,
                    popoutTargetRef: s,
                    isCurrentlyRunningGame: i,
                });
            },
            [Y, H],
        ),
        eL = a.useMemo(
            () =>
                em
                    ? eO(G, A, { isGameRunning: !0 })
                    : null != R && null != G && t6(G, V, R)
                      ? (0, r.jsx)(nv, {
                            application: G,
                            embeddedActivity: R,
                            channel: m,
                            channelName: j,
                            guildForConnectedChannel: g,
                            isForceShowSharingPopout: Y,
                            setIsForceShowSharingPopout: K,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: s,
                            isActivityPopoutOpen: $,
                        })
                      : null != b &&
                          null != G &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: G, frame: b })
                        ? (0, r.jsx)(nb, {
                              application: G,
                              accountLinkUpsellTargetRef: o,
                              frame: b,
                              isActivityPopoutOpen: $,
                          })
                        : H
                          ? (0, r.jsx)(nM, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: W,
                            })
                          : null != eC
                            ? eO(G, eC, { isGameRunning: !1 })
                            : null,
            [N, V, G, j, m, R, b, g, $, Y, H, em, eC, eO, A, W],
        );
    return null == eL
        ? null
        : (0, r.jsx)("div", {
              className: l()(nS.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: nS.rf,
                  children: [
                      eL,
                      (0, r.jsx)(t4, {
                          stream: S,
                          canGoLive: B,
                          canGoLiveActivity: k,
                          guildId: t,
                          isStreaming: H,
                          channel: m,
                          canStream: U,
                          runningGame: A,
                          activity: V,
                          application: G,
                          embeddedActivity: R,
                          frame: b,
                          analyticsContext: n,
                          inviteButtonRef: d,
                          accountLinkButtonRef: ec,
                          canStartAuthorization: Z,
                          startAuthorization: er,
                          hasAlreadyLinked: es,
                          connectionApp: Q,
                      }),
                      (0, r.jsx)(ny, {
                          popover: eS,
                          dismissPopover: eN,
                          application: G,
                          connectionApp: Q,
                          activity: V,
                          runningGame: A,
                          hasAlreadyLinked: es,
                          didStartAuthorization: ei,
                          startAuthorization: er,
                          accountLinkUpsellTargetRef: o,
                          activityPopoutTargetRef: s,
                          inviteButtonRef: d,
                          accountLinkButtonRef: ec,
                          gameCommunityGuildId: eI,
                          parentAnalyticsLocation: z,
                          analyticsLocations: X,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
