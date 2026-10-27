(n.d(t, { A: () => nW }), n(321073));
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
    D = n(360906),
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
    q = n(57129),
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
    eg = n(793574),
    eS = n(131607),
    eN = n(780964),
    eC = n(766075),
    eO = n(763827),
    eR = n(927813),
    eL = n(572164),
    ey = n(614584),
    eD = n(118328),
    ev = n(268378),
    eb = n(253146);
let eM = 2 * eR.A.Millis.WEEK;
function eP(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        i = (0, _.bG)([eO.A], () => eO.A.getChannelId());
    return (0, r.jsx)(
        h.A,
        {
            shouldShow: !0,
            targetElementRef: t,
            title: Z.intl.string(ev.default["owG+AO"]),
            body: Z.intl.string(ev.default.peZtJo),
            badge: "early_access",
            graphic: { type: "image", src: eb, aspectRatio: "6/4" },
            position: "top",
            caretConfig: { align: "center" },
            actions: [
                {
                    text: Z.intl.string(ev.default.oaIXoz),
                    onClick: () => {
                        (n(el.i.TAKE_ACTION),
                            (0, ey.yO)({
                                clipsEnabled: !0,
                                trackAnalytics: !0,
                                analyticsLocation: eg.A.CLIPS_ACCOUNT_PANEL_COACHMARK,
                            }),
                            (0, eC.openUserSettings)(eN.X.CLIPS_PANEL));
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
var eU = n(566870),
    ew = n(260498),
    eG = n(404374),
    ex = n(197184),
    ek = n(747180),
    eF = n(625180),
    eB = n(91242),
    eV = n(66834);
function eH(e) {
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
                            eV.A.joinGuild(s, { source: F.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL }));
                    },
                },
            ],
        })
    );
}
var ej = n(945810);
let eW = (0, ej.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eY = n(952818);
let eK = eY.Ay.getRunningGames(),
    e$ = [];
class ez extends _.Ay.Store {
    initialize() {
        this.syncWith([eY.Ay], () =>
            (function () {
                let e = eY.Ay.getRunningGames();
                if (eK === e) return !1;
                let t = eK.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eK = e), 0 === t.length)) return !1;
                e$ = [...e$, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return e$;
    }
    getLastPreviouslyRunningGame() {
        return e$[e$.length - 1] ?? null;
    }
}
let eX = new ez(p.h, {}),
    eq = 5 * eR.A.Millis.MINUTE;
var eZ = n(769015),
    eQ = n(334074),
    eJ = n(454908),
    e0 = n(279250),
    e1 = n(880144),
    e2 = n(277680),
    e3 = n(118277),
    e5 = n(905552),
    e6 = n(95035),
    e4 = n(567249),
    e7 = n(507756),
    e8 = n(929921),
    e9 = n(616356),
    te = n(650338),
    tt = n(753070),
    tn = n(900795);
function ti(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(B.E, { className: l()({ [tn.Q]: null == n }, t), color: n, ...i });
}
var tr = n(976860),
    ta = n(95701),
    ts = n(280450),
    tl = n(734057),
    to = n(184989),
    td = n(71393),
    tc = n(576705),
    tu = n(290863),
    t_ = n(994500),
    tE = n(309010),
    tA = n(287809),
    th = n(157257),
    tf = n(975571),
    tI = n(723702),
    tp = n(994314),
    tT = n(485599),
    tm = n(141628),
    tg = n(192308),
    tS = n(959988),
    tN = n(183623),
    tC = n(241541),
    tO = n(70688),
    tR = n(687966),
    tL = n(34188),
    ty = n(942857),
    tD = n(646865),
    tv = n(988534),
    tb = n(55730),
    tM = n(521588),
    tP = n(702841),
    tU = n(176781),
    tw = n(442433),
    tG = n(42473),
    tx = n(200542),
    tk = n(274372),
    tF = n(414405);
function tB(e) {
    (0, tw.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e("666601"), n.e("344751")]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tV = function (e) {
    let { isActivity: t = !1 } = e,
        { parentAnalyticsLocation: n } = (0, ed.Ay)(),
        i = (0, eL.E)(),
        a = (0, tP.bG)([tk.Ay], () => tk.Ay.getIsAtMaxSaveClipOperations()),
        { enableGamePanelEntrypoint: s } = tx.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: l, clipsSourceAttached: o } = (0, tF.A)({ isActivity: t });
    return s && i
        ? (0, r.jsx)(tG.A, {
              disabled: a || !o,
              tooltipText: l,
              onClick: () => {
                  ((0, ey.l0)(), (0, eT.X)(n, eT.O.CLIP));
              },
              onContextMenu: tB,
              icon: tU.x,
          })
        : null;
};
var tH = n(457827),
    tj = n(907878),
    tW = n(831617),
    tY = n(196736);
let tK = (0, ej.mj)({
        name: "2026-08-gsh-subs-activity-bar",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    t$ = (0, ej.mj)({
        name: "2026-02-gsh-game-detection-upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var tz = n(610010),
    tX = n(475669),
    tq = n(394107);
function tZ(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tX.A], () => null != a && tX.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
function tQ(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tZ, {
        title: Z.intl.formatToPlainString(tq.default.k9KZ2L, { gameName: t }),
        body: Z.intl.string(tq.default.gOrBCw),
        ctaText: Z.intl.string(tq.default.sElzfG),
        ...n,
    });
}
var tJ = n(338771),
    t0 = n(473161),
    t1 = n(453774),
    t2 = n(44724),
    t3 = n(153488),
    t5 = n(942370),
    t6 = n(758836),
    t4 = n(165610),
    t7 = n(79958);
function t8(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === F.$pd.PLAYING &&
              (0, tb.A)(t, F.jUm.JOIN))
    );
}
let t9 = a.memo(function (e) {
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
        b = (0, t1.A)(m?.id),
        M = t8(m, p, f),
        { enabled: P } = t$.useConfig({ location: "activity-panel" }),
        U = (0, tY.H)({ location: "activity-panel" }),
        w = (0, tz.Bp)("activity-panel"),
        G = (0, tW.C$)(l ?? void 0, "activity-panel"),
        k = (0, _.bG)([t3.A], () => t3.A.hasConsented(F.YAq.PERSONALIZATION)),
        B = (0, tz.TF)(A?.id, { shouldFetch: w || G }),
        V = U && k && (0, tz.k0)(A?.id),
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
                ((0, eT.X)(D, eT.O.LEAVE_ACTIVITY), (0, tv.d)({ location: t, applicationId: e, showFeedback: !0 }));
            },
            [D],
        ),
        $ = a.useCallback(
            (e) => () => {
                ((0, eT.X)(D, eT.O.LEAVE_ACTIVITY), (0, tH.r)(e));
            },
            [D],
        ),
        z = a.useCallback(() => {
            (0, tJ.A)(t);
        }, [t]),
        X = a.useCallback(() => {
            (0, tg.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("249169"),
                    n.e("473782"),
                    n.e("553464"),
                    n.e("130662"),
                    n.e("498552"),
                    n.e("236946"),
                    n.e("338601"),
                    n.e("944727"),
                    n.e("118577"),
                    n.e("39404"),
                    n.e("82001"),
                ]).then(n.bind(n, 266536));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        sourcePID: A?.pid,
                        selectSource: null != tE.Ay.getVoiceChannelId(),
                        analyticsLocations: v,
                    });
            });
        }, [A, v]),
        q = null == A && s && (null != f || null != I),
        Q = a.useCallback(() => {
            let e = (0, y.YX)();
            null == e
                ? X()
                : (0, tg.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("249169"),
                          n.e("473782"),
                          n.e("553464"),
                          n.e("130662"),
                          n.e("498552"),
                          n.e("236946"),
                          n.e("338601"),
                          n.e("944727"),
                          n.e("118577"),
                          n.e("39404"),
                          n.e("82001"),
                      ]).then(n.bind(n, 266536));
                      return (n) =>
                          (0, r.jsx)(t, {
                              ...n,
                              activitySource: e,
                              selectSource: null != tE.Ay.getVoiceChannelId(),
                              analyticsLocations: v,
                          });
                  });
        }, [X, v]),
        J = m?.name ?? A?.name ?? "",
        ee = a.useCallback(() => {
            ((0, tj.pK)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                (0, tg.openModalLazy)(async () => {
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
                (0, tj.pK)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                (0, t0.A)({ analyticsLocations: v, analyticsLocation: g.location, guildId: l }));
        }, [l, v, g.location, A?.id]),
        en = a.useCallback(() => {
            let e = A?.id;
            (0, tj.pK)({ gameApplicationId: e, buttonVariant: "shop" });
            let t = F.BVt.COLLECTIBLES_SHOP_WITH_TAB(t6.G2.GAME_SERVERS);
            (0, tr.pX)(null != e ? `${t}&${t6.tD}=${e}` : t);
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
    let es = null == b || null == m ? null : (0, r.jsx)(ni, { applicationId: b.id }),
        el = V
            ? (0, r.jsx)(nn, { gameName: J, runningGameId: A?.id, isGameServerHostingInShopEnabled: U, onClick: en })
            : j
              ? (0, r.jsx)(nt, {
                    tooltipText: Z.intl.formatToPlainString(tq.default.YhnUVO, { gameName: J }),
                    badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                    onClick: ee,
                    onViewed: () => (0, tj.ET)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                })
              : W
                ? (0, r.jsx)(nt, {
                      tooltipText: Z.intl.formatToPlainString(tq.default.lwwiHE, { gameName: J }),
                      badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                      onClick: et,
                      onViewed: () => (0, tj.ET)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                  })
                : null,
        eo = (function () {
            let e, t, n;
            if ((null == A && null != f && !(0, tD.f)() && !q) || (!o && !i)) return null;
            let a = null;
            return (
                o
                    ? ((e = !1),
                      (t = () => {
                          (z(), (0, eT.X)(D, eT.O.STREAM, !1));
                      }),
                      (n = tS.G),
                      (a = Z.intl.string(Z.t.S5anIc)))
                    : u
                      ? ((e = !1),
                        (t = () => {
                            (q ? Q() : X(), (0, eT.X)(D, eT.O.STREAM, !0));
                        }),
                        (n = tN.F),
                        (a =
                            null != A
                                ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: A.name })
                                : q && null != m
                                  ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: m.name })
                                  : Z.intl.string(Z.t.FeUKeA)))
                      : ((e = !0),
                        (t = null),
                        (n = tN.F),
                        null != c && (0, ta.gV)(c.type) && (a = Z.intl.string(Z.t.uQn9B8))),
                (0, r.jsx)("div", {
                    className: t7.IF,
                    children: (0, r.jsx)(tG.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                })
            );
        })(),
        ec =
            M && null == f
                ? (0, r.jsx)(tG.A, { ref: S, tooltipText: Z.intl.string(Z.t["hC/Zey"]), onClick: Y, icon: tC.D })
                : null,
        eu =
            null == f
                ? null
                : (0, r.jsx)(tG.A, {
                      tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                      onClick: K(f.applicationId, f.location),
                      icon: tO.DoorExitIcon,
                  }),
        e_ =
            null == I || I.intent !== t4.sV.MAIN
                ? null
                : (0, r.jsx)(tG.A, {
                      tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                      onClick: $(I.id),
                      icon: tO.DoorExitIcon,
                  }),
        eE =
            !O || R
                ? null
                : (0, r.jsx)(ne, {
                      runningGame: A,
                      startAuthorization: function () {
                          C({ analyticsLocations: v }) === t5._.RPC &&
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
        className: t7.o1,
        children: [
            eE ?? es ?? ec,
            el,
            (eu ?? e_) == null
                ? (0, r.jsx)(tV, { isActivity: null == A && null != I && I.intent !== t4.sV.MAIN })
                : null,
            eo,
            eu ?? e_,
            eA,
        ],
    });
});
function ne(e) {
    let { runningGame: t, startAuthorization: n, connectionApp: i, ref: a } = e;
    return (0, r.jsx)(tG.A, {
        ref: a,
        onClick: () => {
            (x.default.track(F.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "link_account",
                game_id: t?.id ?? null,
                application_id: i?.id ?? null,
            }),
                n());
        },
        icon: tm.A,
        tooltipText: Z.intl.string(Z.t.sbdnpw),
    });
}
function nt(e) {
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
    let _ = (0, ty.A)(),
        { isQuestBarEmpty: E, hasLoadedQuestBar: A } = (0, P.c9)(),
        h = d && null != l && null != s && !_ && E && A,
        [f, I] = (0, eS.kn)(h && null != l ? [l] : [], { bypassAutoDismiss: !0 }),
        [p, T] = (0, eS.kn)(d ? [o] : [], { bypassAutoDismiss: !0 }),
        m = a.useCallback(() => {
            (I(el.i.TAKE_ACTION), T(el.i.TAKE_ACTION), n());
        }, [I, T, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: t7.IF,
                children: [
                    (0, r.jsx)("div", { className: t7.uD, children: (0, r.jsx)("div", { className: t7.Z9 }) }),
                    (0, r.jsx)(tG.A, { ref: c, tooltipText: t, onClick: m, icon: tR.GameControllerIcon }),
                    p === o && (0, r.jsx)(tM.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != f && null != s && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: T }),
        ],
    });
}
function nn(e) {
    let { gameName: t, runningGameId: n, isGameServerHostingInShopEnabled: i, onClick: a } = e,
        s = (function (e) {
            let { location: t } = e;
            return tK.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(nt, {
        tooltipText: Z.intl.formatToPlainString(tq.default.oZ4ZFn, { gameName: t }),
        coachmarkContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
        badgeContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_NEW_BADGE,
        marketingEnabled: i && s,
        onClick: a,
        onViewed: () => (0, tj.ET)({ gameApplicationId: n, buttonVariant: "shop" }),
        renderCoachmark: (e) => {
            let { targetElementRef: i, markAsDismissed: s, markBadgeAsDismissed: l } = e;
            return (0, r.jsx)(tQ, {
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
function ni(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, t2.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, t2.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            (x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s());
        }, [t, s]);
    return (0, r.jsx)(tG.A, { tooltipText: Z.intl.string(Z.t.vyaWs7), onClick: l, onMouseDown: i, icon: tL.U, ref: n });
}
var nr = n(428689),
    na = n(409626),
    ns = n(692969),
    nl = n(202163),
    no = n(152367),
    nd = n(123292),
    nc = n(475358),
    nu = n(939409);
function n_(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(f.D, {
        className: nu.kL,
        onClick: t,
        children: (0, r.jsx)(B.E, {
            className: nu.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: Z.intl.string(Z.t.jfrLLb),
        }),
    });
}
var nE = n(37595),
    nA = n(395771),
    nh = n(455426),
    nf = n(207228),
    nI = n(233741),
    np = n(532624),
    nT = n(350535),
    nm = n(248675),
    ng = n(369409);
function nS(e) {
    let { isCurrentlyRunningGame: t, gamePid: n, onClickNotSharing: i } = e,
        a = (0, _.bG)([np.Ay], () => np.Ay.getKeybindForAction(F.hCu.SAVE_CLIP)),
        s = null != a && a.shortcut.length > 0 ? nT.dI(a.shortcut, !0) : null,
        o = (0, eL.E)(),
        d = U.tz.useSetting(),
        c = (0, _.bG)([G.A], () => G.A.getStatus()),
        u = !__OVERLAY__ && (!d || c === F.clD.INVISIBLE),
        E = o && t && null != s,
        A = (0, _.bG)([nA.A, eY.Ay, nI.A], () => {
            let e = nA.A.getCapturingApp(),
                t = (0, nE.V)(eY.Ay, nI.A);
            return null == e || null == n || t?.windowHandle == null || t.pid !== n ? null : e;
        });
    return t
        ? null != A
            ? (0, r.jsxs)(B.E, {
                  variant: "text-xs/medium",
                  color: "text-subtle",
                  className: l()(ng.En, ng.ef),
                  tag: "div",
                  children: [
                      (0, r.jsx)(no.D, { size: "xxs", color: "currentColor", className: ng.MY, "aria-hidden": !0 }),
                      (0, r.jsx)("span", {
                          className: ng.us,
                          children: Z.intl.format(nm.default["Q/RPC2"], { appName: A.appName }),
                      }),
                      (0, r.jsx)(nd.Q, {
                          text: Z.intl.string(nm.default.VIjH42),
                          "aria-label": Z.intl.formatToPlainString(nm.default["Tl/1iM"], { appName: A.appName }),
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          onClick: () => {
                              (p.h.dispatch({
                                  type: "CONJURE_DEVICE_PERMISSIONS_RESET",
                                  applicationId: A.appId,
                                  permissions: ["screen_capture"],
                              }),
                                  (0, nh.s)(),
                                  (0, nf.ik)());
                          },
                      }),
                  ],
              })
            : u
              ? (0, r.jsx)(n_, { onClick: i })
              : E
                ? (0, r.jsx)(B.E, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      className: ng.En,
                      tag: "div",
                      children: Z.intl.format(ev.default.ESZwQX, {
                          keybind: s,
                          keybindHook: () => (0, r.jsx)(nc.e, { shortcut: s, className: ng.oH, keyClassName: ng.Bj }),
                      }),
                  })
                : null
        : (0, r.jsx)(B.E, { variant: "text-xs/medium", color: "text-subtle", children: Z.intl.string(Z.t.W4N1ru) });
}
var nN = n(450173);
function nC(e) {
    let { name: t, applicationId: n } = e,
        i = (0, ns.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: na.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(f.D, {
        onClick: i,
        className: l()(null != i && nN.On),
        children: (0, r.jsx)(tT.A, { className: nN.mO, children: t }),
    });
}
function nO(e) {
    let { gameRecord: t, application: n, game: i, showLiveBadge: a, ref: s } = e;
    return (0, r.jsxs)("div", {
        className: nN.f9,
        children: [
            (0, r.jsx)(eZ.A, { className: nN.Gt, game: t ?? n, pid: i?.pid, ref: s }),
            a ? (0, r.jsx)(nr.VideoIcon, { size: "md", color: "currentColor", className: nN.it }) : null,
        ],
    });
}
function nR(e) {
    let { name: t, gameRecord: n, application: i, game: a, isStreaming: s, ref: l } = e,
        o = (0, ns.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: i?.id,
            source: na.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = null != o,
        c = (0, r.jsx)(nO, { gameRecord: n, application: i, game: a, showLiveBadge: s && !d, ref: l });
    return d
        ? (0, r.jsx)(f.D, {
              onClick: o,
              className: nN.Ow,
              "aria-label": Z.intl.formatToPlainString(Z.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nL(e) {
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
        { gameRecord: p } = (0, nl.A)(d?.id),
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
            className: nN.cm,
            children: [
                (0, r.jsx)(nR, { name: T, gameRecord: p, application: d, game: c, isStreaming: o, ref: h }),
                (0, r.jsx)(eo, {
                    popoutTargetRef: f,
                    isForceShowSharingPopout: E,
                    setIsForceShowSharingPopout: A,
                    hidePopout: !I,
                    children: (0, r.jsxs)("div", {
                        className: nN.pq,
                        children: [
                            null != T ? (0, r.jsx)(nC, { name: T, applicationId: d?.id }) : null,
                            (0, r.jsx)(nS, { isCurrentlyRunningGame: I, gamePid: c?.pid, onClickNotSharing: u }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var ny = n(5867);
let nD = {
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
var nv = n(534952),
    nb = n(731854),
    nM = n(559626),
    nP = n(821095),
    nU = n(268920),
    nw = n(633217);
function nG(e) {
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
        { data: f, isLoading: I } = (0, eJ.I)(i?.getCanonicalGameId()),
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
    s && (S = Z.intl.string(nM.default["2cOIOr"]));
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
            (g = Z.intl.formatToPlainString(nM.default.dPuaZE, { applicationName: p.name })),
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
function nx(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = Z.intl.string(Z.t.MxAlrB),
        l = Z.intl.string(Z.t["/UTTEg"]),
        o = [
            {
                text: Z.intl.string(Z.t.aRIFWD),
                onClick: () => {
                    (i(el.i.TAKE_ACTION), window.open(tf.A.getArticleURL(F.MVz.IN_GAME_FEATURES), "_blank"));
                },
            },
        ];
    return (
        n &&
            ((s = Z.intl.string(nM.default.ublzTG)),
            (l = Z.intl.string(nM.default.JgM2xu)),
            (t = { type: "video", src: nw.A, fallbackImageSrc: nU.A, aspectRatio: "2/1", loop: !0 })),
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
function nk(e) {
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
function nF(e) {
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
                { data: n, isLoading: i } = (0, eh.YY)(t?.parentId ?? t?.id);
            return {
                isEligible:
                    null !=
                        nv.APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS.find(
                            (e) => e.applicationId === n?.id,
                        ) && null != t,
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
            return (0, r.jsx)(nG, {
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
            return (0, r.jsx)(nx, {
                incentivizedAccountLinkingRewarded: C,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nk, {
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
                (0, r.jsx)(eH, {
                    targetElementRef: E,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: I,
                    markAsDismissed: n,
                })
            );
        case 4:
            return (0, r.jsx)(eP, { targetElementRef: A, markAsDismissed: n });
        default:
            return null;
    }
}
let nB = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(tp.A, { children: t });
});
function nV(e) {
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
                ((0, ta.gV)(a.type) &&
                    m.A.selectParticipant(
                        a.id,
                        (0, ep.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, ta.pQ)(a.type) && (0, R.gk)(ny.Gd.PANEL)));
    }
    null != l && null != a
        ? ((t = F.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = F.BVt.CHANNEL(F.ME, a.id));
    let I = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eZ.A, { className: nP.n8, game: n, size: eZ.M.SMALL, ref: u }),
            (0, r.jsx)(eo, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nP.pq,
                    children: [
                        (0, r.jsx)(e6.A, {
                            href: t,
                            onClick: function () {
                                (f(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
                            },
                            children: (0, r.jsx)(tT.A, { className: nP._W, children: n.name }),
                        }),
                        null != a && (0, ta.pQ)(a.type)
                            ? (0, r.jsx)(e6.A, {
                                  href: t,
                                  onClick: f,
                                  children: (0, r.jsx)(tp.A, { className: nP.Ix, children: h }),
                              })
                            : (0, r.jsx)(nB, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nP.cm, children: I });
}
function nH(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eZ.A, { className: nP.n8, game: n, size: eZ.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nP.pq,
                    children: [
                        (0, r.jsx)(f.D, {
                            onClick: function () {
                                if (s) return void p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                if (t.intent !== t4.sV.MAIN) {
                                    let e = (0, ex.A)(t.surface);
                                    null != e && (0, tr.pX)(F.BVt.CHANNEL((0, ek.A)(t.surface) ?? F.ME, e));
                                    return;
                                }
                                eF.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: t4.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nP.rB,
                            children: (0, r.jsx)(tT.A, { className: nP._W, children: n.name }),
                        }),
                        (0, r.jsx)(nB, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nP.cm, children: o });
}
function nj(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, e2.A)(t);
    return (0, r.jsxs)("div", {
        className: nP.cm,
        ref: n,
        children: [
            (0, r.jsx)(e3.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nP.pq,
                children: [
                    (0, r.jsx)(tT.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nP.qi,
                            children: [
                                (0, r.jsx)(I.t, { size: "xxs", color: eG.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(ti, { className: nP.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nW = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([ts.default], () => ts.default.getId()),
        A = (0, _.bG)([eY.Ay, th.A], () => (0, e5.A)(eY.Ay, th.A)),
        { enabled: h } = eW.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: f, isWithinThreshold: I } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, _.bG)([eX], () => eX.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (null == n || Date.now() - n.endedAt >= eq) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + eq - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [n]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let i = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i < eq };
        })(),
        p = (0, _.bG)([tE.Ay, tl.A], () => tl.A.getChannel(tE.Ay.getVoiceChannelId())),
        T = (0, _.bG)([L.Ay], () => L.Ay.getConnectedActivityChannelId()),
        m = (0, _.bG)([tl.A], () => tl.A.getChannel(T)),
        g = (0, _.bG)([td.A], () => td.A.getGuild(m?.guild_id)),
        [S, N] = (0, _.yK)([e9.A], () => [e9.A.getCurrentUserActiveStream(), e9.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
        R = m?.type === F.rbe.GUILD_SPACE ? null : O,
        b = (0, _.bG)([eB.A, ef.A, ew.Ay], () => {
            let e = (0, t4.ny)(eB.A.getMainFrame());
            return null != e && (0, eU.A)(e) ? null : e;
        }),
        U = (0, _.bG)([td.A, tc.A], () => null == p || e0.vz(p, td.A, tc.A, !1)),
        [G] = (0, eI.A)([
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
        B = (0, _.bG)([D.Ay], () => (0, e1.A)(D.Ay) && (0, tI.isWindows)()) || k,
        V = (0, _.bG)([tu.A], () => (null != c ? tu.A.findActivity(c, (e) => e.type === F.$pd.PLAYING) : null)),
        H = null != S && S.ownerId === c && S.state !== F.XYD.ENDED,
        j = (0, _.bG)([tA.default, t_.A], () => (null != m ? (0, em.m1)(m, tA.default, t_.A) : void 0)),
        W = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([e8.A], () => e8.A.getState()),
                n = (0, _.bG)([e9.A], () => e9.A.getCurrentUserActiveStream()?.guildId),
                i = (0, e7.A)("useStreamQualityIndicator", n, e, t);
            if (i !== tt.on.RESOLUTION_720 || t === tt.kn.FPS_60) return `${(0, tt.zr)(i)} ${(0, te.Bs)(t)}`;
        })(),
        [Y, K] = a.useState(!1),
        $ = (0, _.bG)([e4.A], () => e4.A.getWindowOpen(F.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: z, analyticsLocations: X } = (0, ed.Ay)(),
        {
            hasAlreadyLinked: q,
            canStartAuthorization: Z,
            connectionApp: Q,
            startAuthorization: J,
            token: ee,
        } = (0, eE.RD)(G, { allowedFlows: [t5._.RPC, t5._.WEB] }),
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
            return null != e ? nD[e] : void 0;
        }, [A?.id, f?.id]),
        eh = (0, _.bG)([to.A], () => null != eu && to.A.isMember(eu), [eu]),
        ep = h && null != eu && !eh && (null != A || I) ? eu : void 0,
        eT = !(0, _.bG)([D.Ay], () => D.Ay.supports(nb.O5.VIDEO)) && (0, tI.isWindows)(),
        eg = null != A && (B || Z || eT) && (!H || N?.pid != null),
        [eN, eC] = (function (e) {
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
                { shouldShow: p, markAsDismissed: T } = (0, eQ.D3)({
                    application: t,
                    disabled: !I,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: el.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eQ.Yb,
                }),
                m = !f && null != r && o,
                g = a.useMemo(() => {
                    if (f || p) return [];
                    let e = [];
                    return (
                        o && d && t8(t, n, i) && null == i && e.push(E.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(E.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, f, d, i, c, o, p]),
                [S, N] = (0, eS.kn)(g, { groupName: el.m.ACCOUNT_NAME_ZONE }),
                { shouldShow: C, markAsDismissed: O } = (function () {
                    let { disabled: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, eD.A)("AutoclippingAccountPanelCoachmark"),
                        n = (0, eL.E)(),
                        i = (0, M.A)((e) => e.isOpen),
                        r = (0, w.G)(),
                        [a, s] = (0, eS.Wl)(
                            e || !t || n || i || r ? null : E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK,
                            { cooldownDurationMs: eM },
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
            gameCommunityGuildId: ep,
            canShowCurrentRunningGamePanel: eg,
            isStreamingCurrentRunningGame: H && null != A && N?.id != null && N.id === A.id,
        }),
        eO = null != f && (1 === eN || (I && (0 === eN || 3 === eN))) ? f : null,
        eR = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nL, {
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
        ey = a.useMemo(
            () =>
                eg
                    ? eR(G, A, { isGameRunning: !0 })
                    : null != R && null != G && t8(G, V, R)
                      ? (0, r.jsx)(nV, {
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
                        ? (0, r.jsx)(nH, {
                              application: G,
                              accountLinkUpsellTargetRef: o,
                              frame: b,
                              isActivityPopoutOpen: $,
                          })
                        : H
                          ? (0, r.jsx)(nj, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: W,
                            })
                          : null != eO
                            ? eR(G, eO, { isGameRunning: !1 })
                            : null,
            [N, V, G, j, m, R, b, g, $, Y, H, eg, eO, eR, A, W],
        );
    return null == ey
        ? null
        : (0, r.jsx)("div", {
              className: l()(nP.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: nP.rf,
                  children: [
                      ey,
                      (0, r.jsx)(t9, {
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
                      (0, r.jsx)(nF, {
                          popover: eN,
                          dismissPopover: eC,
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
                          gameCommunityGuildId: ep,
                          parentAnalyticsLocation: z,
                          analyticsLocations: X,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
