(n.d(t, { A: () => n7 }), n(321073));
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(284009),
    d = n.n(o),
    c = n(613412),
    u = n(172218),
    _ = n(350835),
    E = n(855986),
    A = n(554146),
    f = n(116833),
    h = n(43105),
    I = n(939249),
    p = n(403581),
    m = n(73153),
    T = n(298990),
    g = n(367513),
    S = n(951001),
    N = n(492684),
    C = n(707606),
    O = n(475743),
    R = n(573648),
    L = n(795816),
    y = n(933958),
    D = n(260643),
    b = n(754712),
    v = n(756042),
    P = n(379848),
    M = n(832248),
    U = n(201805),
    w = n(253932),
    G = n(843010),
    x = n(894768),
    k = n(129230),
    F = n(821609),
    B = n(652215),
    V = n(834730),
    H = n(935154),
    j = n(143129),
    W = n(315710),
    Y = n(404778),
    K = n(331322),
    $ = n(534514),
    X = n(265872),
    z = n(827827),
    q = n(481045),
    Q = n(966756),
    J = n(792996),
    Z = n(293686);
function ee(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: Z.K2,
        children: (0, r.jsx)(F.$, {
            variant: "primary",
            size: "sm",
            text: J.intl.string(Q.default.Poezn1),
            onClick: () => {
                (t(), (0, z.A)({ nextStatus: B.clD.ONLINE }));
            },
            fullWidth: !0,
        }),
    });
}
function et(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, E.bG)([x.A], () => x.A.getStatus());
    return (0, r.jsxs)("div", {
        className: Z.E3,
        children: [
            (0, r.jsxs)("div", {
                className: Z.fu,
                children: [
                    (0, r.jsx)(V.E, {
                        variant: "body-sm/medium",
                        color: "text-strong",
                        children: J.intl.string(Q.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: Z.$v,
                            children: [
                                (0, r.jsx)(H.nW, { status: B.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(V.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === B.clD.INVISIBLE
                                            ? J.intl.string(Q.default.a3AofS)
                                            : J.intl.string(J.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(j.d, {
                onChange: (e) => {
                    (w.tz.updateSetting(e), n && (0, z.A)({ nextStatus: e ? B.clD.ONLINE : B.clD.INVISIBLE }));
                },
                checked: t,
            }),
        ],
    });
}
function en(e) {
    let { children: t } = e,
        n = (0, a.useRef)(null);
    return (
        (0, W.tj)(n),
        (0, r.jsx)("div", { className: Z.iE, ref: n, children: (0, r.jsx)("div", { className: Z.Qs, children: t }) })
    );
}
function ei(e) {
    let { closePopout: t } = e,
        n = w.tz.useSetting();
    return (0, r.jsxs)(en, {
        children: [
            (0, r.jsx)(et, { showCurrentGame: n }),
            (0, r.jsx)(V.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: J.intl.string(Q.default["7cfFob"]),
            }),
            (0, r.jsx)(Y.c, { className: Z.yF }),
            (0, r.jsx)(q.qA, { onClosePopout: t }),
        ],
    });
}
function er(e) {
    let { closePopout: t } = e;
    return (0, r.jsxs)(en, {
        children: [
            (0, r.jsxs)(K.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, r.jsx)($.D, {
                        variant: "heading-xs/semibold",
                        color: "text-strong",
                        className: Z._M,
                        children: J.intl.string(Q.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: Z.$v,
                        children: [
                            (0, r.jsx)(H.nW, { status: B.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(V.E, {
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                children: J.intl.string(Q.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(V.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: J.intl.string(Q.default.Yl0mh4),
            }),
            (0, r.jsx)(ee, { closePopout: t }),
        ],
    });
}
function ea(e) {
    let { closePopout: t } = e,
        n = w.tz.useSetting();
    return (0, r.jsxs)(en, {
        children: [
            (0, r.jsx)(et, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, r.jsx)(V.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: J.intl.string(Q.default["7cfFob"]),
            }),
            (0, r.jsx)(Y.c, { className: Z.yF }),
            (0, r.jsx)(q.qA, { onClosePopout: t }),
        ],
    });
}
var es =
    (((i = {})[(i.ActivityNux = 0)] = "ActivityNux"),
    (i[(i.StatusNux = 1)] = "StatusNux"),
    (i[(i.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (i[(i.Activity = 3)] = "Activity"),
    (i[(i.Status = 4)] = "Status"),
    (i[(i.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    i);
function el(e) {
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: s, children: l } = e,
        [o, d] = (0, a.useState)(n),
        c = (0, a.useRef)(null),
        u = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: J.intl.string(Q.default.vxVbGP),
                        body: [J.intl.string(Q.default["7cfFob"])],
                        action: {
                            text: J.intl.string(Q.default.k4tCg2),
                            onClick: () => {
                                w.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: J.intl.string(J.t["ZrN+DT"]), onClick: q.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: J.intl.string(Q.default.qKDqet),
                        body: [J.intl.string(Q.default.Yl0mh4)],
                        action: {
                            text: J.intl.string(Q.default.Poezn1),
                            onClick: () => {
                                (0, z.A)({ nextStatus: B.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: J.intl.string(Q.default["6cA8HZ"]),
                        body: [J.intl.string(Q.default["7cfFob"])],
                        action: {
                            text: J.intl.string(Q.default.k4tCg2),
                            onClick: () => {
                                (w.tz.updateSetting(!0), (0, z.A)({ nextStatus: B.clD.ONLINE }));
                            },
                        },
                        textLink: { text: J.intl.string(J.t["ZrN+DT"]), onClick: q.L7 },
                    };
                case 3:
                    return { type: "popout", children: ei };
                case 4:
                    return { type: "popout", children: er };
                case 5:
                    return { type: "popout", children: ea };
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
    return (0, r.jsx)(X.Y, {
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
        children: () => (0, r.jsx)(I.D, { innerRef: c, onClick: i, children: l }),
    });
}
var eo = n(49999);
function ed(e) {
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: i,
            popoutTargetRef: s,
            hidePopout: l = !1,
        } = e,
        o = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, U.c9)(),
                r = w.tz.useSetting(),
                a = (0, G.G)(),
                s = (0, E.bG)([x.A], () => x.A.getStatus()),
                { isOpen: l } = (0, M.A)();
            if (((n && i) || t) && !a && !l && !__OVERLAY__) {
                if (!r && s === B.clD.INVISIBLE) return t ? es.ActivityAndStatus : es.ActivityAndStatusNux;
                if (!r) return t ? es.Activity : es.ActivityNux;
                if (s === B.clD.INVISIBLE) return t ? es.Status : es.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, a.useEffect)(() => {
        n && k.default.track(B.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let d = n || l ? [] : [A.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(P.Ay, {
        contentTypes: d,
        children: (e) => {
            let { visibleContent: a, markAsDismissed: l } = e,
                d = a === A.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(el, {
                showPopout: d,
                popoutState: o,
                handleClose: function () {
                    (l(eo.i.USER_DISMISS), i(!1));
                },
                popoutTargetRef: s,
                children: t,
            });
        },
    });
}
var ec = n(688810),
    eu = n(139286),
    e_ = n(772680),
    eE = n(200093),
    eA = n(724302),
    ef = n(382034),
    eh = n(627363),
    eI = n(587895),
    ep = n(429913),
    em = n(568598),
    eT = n(384059),
    eg = n(47167),
    eS = n(566870),
    eN = n(260498),
    eC = n(522265),
    eO = n(104299),
    eR = n(404374),
    eL = n(263775),
    ey = n(197184),
    eD = n(747180),
    eb = n(625180),
    ev = n(91242),
    eP = n(778858);
function eM(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: s, markAsDismissed: l } = e,
        { analyticsLocations: o } = (0, ec.Ay)();
    return (
        a.useEffect(() => {
            k.default.track(B.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: o, application_id: n, guild_id: s });
        }, [n, s, o]),
        (0, r.jsx)(h.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                (k.default.track(B.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: o,
                    application_id: n,
                    guild_id: s,
                }),
                    l(eo.i.USER_DISMISS));
            },
            title: J.intl.formatToPlainString(J.t.ry9SJw, { gameName: i }),
            body: J.intl.string(J.t.YPpOov),
            actions: [
                {
                    text: J.intl.string(J.t.RVfNGU),
                    onClick: () => {
                        (k.default.track(B.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: s,
                        }),
                            l(eo.i.TAKE_ACTION),
                            eP.A.joinGuild(s, { source: B.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL }));
                    },
                },
            ],
        })
    );
}
var eU = n(945810);
let ew = (0, eU.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eG = n(644727),
    ex = n(927813);
let ek = eG.Ay.getRunningGames(),
    eF = [];
class eB extends E.Ay.Store {
    initialize() {
        this.syncWith([eG.Ay], () =>
            (function () {
                let e = eG.Ay.getRunningGames();
                if (ek === e) return !1;
                let t = ek.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((ek = e), 0 === t.length)) return !1;
                eF = [...eF, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return eF;
    }
    getLastPreviouslyRunningGame() {
        return eF[eF.length - 1] ?? null;
    }
}
let eV = new eB(m.h, {}),
    eH = 5 * ex.A.Millis.MINUTE;
var ej = n(769015),
    eW = n(334074),
    eY = n(454908),
    eK = n(279250),
    e$ = n(880144),
    eX = n(277680),
    ez = n(118277),
    eq = n(905552),
    eQ = n(95035),
    eJ = n(293432),
    eZ = n(507756),
    e0 = n(929921),
    e1 = n(616356),
    e2 = n(650338),
    e3 = n(753070),
    e6 = n(900795);
function e5(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(V.E, { className: l()({ [e6.Q]: null == n }, t), color: n, ...i });
}
var e7 = n(976860),
    e4 = n(95701),
    e8 = n(46653),
    e9 = n(734057),
    te = n(184989),
    tt = n(71393),
    tn = n(576705),
    ti = n(290863),
    tr = n(994500),
    ta = n(309010),
    ts = n(287809),
    tl = n(157257),
    to = n(975571),
    td = n(723702);
let tc = (0, eU.mj)({
    name: "2026-11-cross-platform-game-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tu = n(994314),
    t_ = n(485599),
    tE = n(141628),
    tA = n(192308),
    tf = n(687966),
    th = n(959988),
    tI = n(183623),
    tp = n(241541),
    tm = n(70688),
    tT = n(34188),
    tg = n(942857),
    tS = n(646865),
    tN = n(988534),
    tC = n(55730),
    tO = n(521588),
    tR = n(164636),
    tL = n(176781),
    ty = n(442433),
    tD = n(42473),
    tb = n(200542),
    tv = n(419490),
    tP = n(572164),
    tM = n(489496),
    tU = n(414405);
function tw(e) {
    (0, ty.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e(666601), n.e(344751)]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tG = function (e) {
    let { isActivity: t = !1 } = e,
        { parentAnalyticsLocation: n } = (0, ec.Ay)(),
        i = (0, tP.E)(),
        a = (0, tR.bG)([tv.Ay], () => tv.Ay.getIsAtMaxSaveClipOperations()),
        { enableGamePanelEntrypoint: s } = tb.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: l, clipsSourceAttached: o } = (0, tU.A)({ isActivity: t });
    return s && i
        ? (0, r.jsx)(tD.A, {
              disabled: a || !o,
              tooltipText: l,
              onClick: () => {
                  ((0, tM.l0)(), (0, eT.XJ)(n, eT.OP.CLIP));
              },
              onContextMenu: tw,
              icon: tL.ClipsIcon,
          })
        : null;
};
var tx = n(457827),
    tk = n(907878),
    tF = n(196736);
let tB = (0, eU.mj)({
    name: "2026-08-gsh-subs-activity-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(n(363487), n(940456), n(831617));
var tV = n(475669);
let tH = new Set([
    "363409643973771264",
    "1158877933042143272",
    "1199745463918788740",
    "358422126602223616",
    "1458530944955973852",
    "1402418491272986635",
    "1272751502439612486",
    "1197827812623650866",
    "1361763069696675961",
    "1402418594532298837",
    "1402418344912752671",
    "1129504121708355634",
    "1124358970618953818",
    "1441987315235946546",
]);
var tj = n(105518);
function tW(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, E.bG)([tV.A], () => null != a && tV.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
    return (0, r.jsx)(h.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            d && null != a
                ? {
                      type: "dynamic",
                      component: f.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
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
function tY(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tW, {
        title: J.intl.formatToPlainString(tj.default.k9KZ2L, { gameName: t }),
        body: J.intl.string(tj.default.gOrBCw),
        ctaText: J.intl.string(tj.default.sElzfG),
        ...n,
    });
}
var tK = n(338771),
    t$ = n(775456),
    tX = n(130444),
    tz = n(208603),
    tq = n(453774),
    tQ = n(44724),
    tJ = n(153488),
    tZ = n(942370),
    t0 = n(758836),
    t1 = n(165610),
    t2 = n(565886),
    t3 = n(79958);
function t6(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === _.$.PLAYING &&
              (0, tC.A)(t, B.jUm.JOIN))
    );
}
let t5 = a.memo(function (e) {
    var t;
    let {
            stream: i,
            canGoLive: s,
            canGoLiveActivity: l = !1,
            isStreaming: o,
            channel: c,
            canStream: u,
            runningGame: _,
            embeddedActivity: A,
            frame: f,
            activity: I,
            application: p,
            analyticsContext: m,
            inviteButtonRef: g,
            accountLinkButtonRef: S,
            startAuthorization: N,
            canStartAuthorization: C,
            hasAlreadyLinked: O,
            connectionApp: R,
        } = e,
        { parentAnalyticsLocation: L, analyticsLocations: y } = (0, ec.Ay)(),
        b = (0, tq.A)(p?.id),
        v = t6(p, I, A),
        P = (0, tF.H)({ location: "activity-panel" }),
        M = (0, E.bG)([ta.Ay], () => null != ta.Ay.getVoiceChannelId()),
        U = (0, E.bG)([tJ.A], () => tJ.A.hasConsented(B.YAq.PERSONALIZATION)),
        w = P && U && null != (t = _?.id) && tH.has(t),
        G = a.useCallback(() => {
            (d()(null != I, "Received null activity"),
                k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "invite_to_game",
                    game_id: _?.id ?? null,
                    application_id: I.application_id,
                }),
                (0, eT.XJ)(L, eT.OP.INVITE),
                k.default.track(B.HAw.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: I.application_id,
                    location: m.location,
                }),
                (0, T.qf)(I, !1));
        }, [I, m, L, _]),
        x = a.useCallback(
            (e, t) => () => {
                ((0, eT.XJ)(L, eT.OP.LEAVE_ACTIVITY), (0, tN.d)({ location: t, applicationId: e, showFeedback: !0 }));
            },
            [L],
        ),
        F = a.useCallback(
            (e) => () => {
                ((0, eT.XJ)(L, eT.OP.LEAVE_ACTIVITY), (0, tx.r)(e));
            },
            [L],
        ),
        V = a.useCallback(() => {
            (0, tK.A)(i);
        }, [i]),
        H = a.useCallback(() => {
            (0, tA.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(249169),
                    n.e(473782),
                    n.e(553464),
                    n.e(130662),
                    n.e(498552),
                    n.e(944801),
                    n.e(236946),
                    n.e(338601),
                    n.e(944727),
                    n.e(114792),
                    n.e(758913),
                    n.e(489876),
                ]).then(n.bind(n, 742527));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        sourcePID: (0, td.uF)() ? _?.pid : void 0,
                        selectSource: null != ta.Ay.getVoiceChannelId(),
                        analyticsLocations: y,
                    });
            });
        }, [_, y]),
        j = null == _ && l && (null != A || null != f),
        W = a.useCallback(() => {
            let e = (0, D.YX)();
            null == e
                ? H()
                : (0, tA.mM)(async () => {
                      let { default: t } = await Promise.all([
                          n.e(249169),
                          n.e(473782),
                          n.e(553464),
                          n.e(130662),
                          n.e(498552),
                          n.e(944801),
                          n.e(236946),
                          n.e(338601),
                          n.e(944727),
                          n.e(114792),
                          n.e(758913),
                          n.e(489876),
                      ]).then(n.bind(n, 742527));
                      return (n) =>
                          (0, r.jsx)(t, {
                              ...n,
                              activitySource: e,
                              selectSource: null != ta.Ay.getVoiceChannelId(),
                              analyticsLocations: y,
                          });
                  });
        }, [H, y]),
        Y = (0, tz.A)(o ? i : null),
        { enabled: K } = t$.A.useConfig({ guildId: c?.guild_id ?? "", location: "ActivityActions" }),
        $ = (0, t2.y)(o ? i : null),
        X = p?.name ?? _?.name ?? "",
        z = a.useCallback(() => {
            let e = _?.id;
            (0, tk.pK)({ gameApplicationId: e, buttonVariant: "shop" });
            let t = B.BVt.COLLECTIBLES_SHOP_WITH_TAB(t0.G2.GAME_SERVERS);
            (0, e7.pX)(null != e ? `${t}&${t0.tD}=${e}` : t);
        }, [_?.id]),
        q = a.useRef(null),
        [Q, Z] = a.useState(!1);
    (a.useEffect(
        () => () => {
            null != q.current && clearTimeout(q.current);
        },
        [],
    ),
        a.useEffect(() => {
            O && (Z(!1), null != q.current && (clearTimeout(q.current), (q.current = null)));
        }, [O]));
    let ee = null == b || null == p ? null : (0, r.jsx)(t9, { applicationId: b.id }),
        et = w
            ? (0, r.jsx)(t8, { gameName: X, runningGameId: _?.id, isGameServerHostingInShopEnabled: P, onClick: z })
            : null,
        en =
            !K || $
                ? null
                : (0, r.jsx)("div", {
                      className: t3.IF,
                      children: (0, r.jsx)(tD.A, {
                          tooltipText: Y?.label ?? tX.Q.NOTHING_STREAMING,
                          disabled: null == Y,
                          onClick: Y?.toggle ?? null,
                          icon: tf.GameControllerIcon,
                          iconForeground: Y?.isActive === !0 ? t3.Q6 : null,
                      }),
                  }),
        ei = (function () {
            let e, t, n;
            if ((null == _ && null != A && !(0, tS.f)() && !j) || (!o && !s)) return null;
            let i = null;
            return (
                o
                    ? ((e = !1),
                      (t = () => {
                          (V(), (0, eT.XJ)(L, eT.OP.STREAM, !1));
                      }),
                      (n = th.ScreenXIcon),
                      (i = J.intl.string(J.t.S5anIc)))
                    : u
                      ? M || (0, td.uF)()
                          ? ((e = !1),
                            (t = () => {
                                (j ? W() : H(), (0, eT.XJ)(L, eT.OP.STREAM, !0));
                            }),
                            (n = tI.ScreenArrowIcon),
                            (i =
                                null != _
                                    ? J.intl.formatToPlainString(J.t.AB5gTy, { game: _.name })
                                    : j && null != p
                                      ? J.intl.formatToPlainString(J.t.AB5gTy, { game: p.name })
                                      : J.intl.string(J.t.FeUKeA)))
                          : ((e = !0), (t = null), (n = tI.ScreenArrowIcon), (i = J.intl.string(J.t["2JQX8q"])))
                      : ((e = !0),
                        (t = null),
                        (n = tI.ScreenArrowIcon),
                        null != c && (0, e4.gV)(c.type) && (i = J.intl.string(J.t.uQn9B8))),
                (0, r.jsx)("div", {
                    className: t3.IF,
                    children: (0, r.jsx)(tD.A, { tooltipText: i, disabled: e, onClick: t, icon: n }),
                })
            );
        })(),
        er =
            v && null == A
                ? (0, r.jsx)(tD.A, {
                      ref: g,
                      tooltipText: J.intl.string(J.t["hC/Zey"]),
                      onClick: G,
                      icon: tp.GroupPlusIcon,
                  })
                : null,
        ea =
            null == A
                ? null
                : (0, r.jsx)(tD.A, {
                      tooltipText: J.intl.string(J.t["R/FK4A"]),
                      onClick: x(A.applicationId, A.location),
                      icon: tm.DoorExitIcon,
                  }),
        es =
            null == f || f.intent !== t1.sV.MAIN
                ? null
                : (0, r.jsx)(tD.A, {
                      tooltipText: J.intl.string(J.t["R/FK4A"]),
                      onClick: F(f.id),
                      icon: tm.DoorExitIcon,
                  }),
        el =
            !C || O
                ? null
                : (0, r.jsx)(t7, {
                      runningGame: _,
                      startAuthorization: function () {
                          N({ analyticsLocations: y }) === tZ._.RPC &&
                              (Z(!0),
                              null != q.current && clearTimeout(q.current),
                              (q.current = setTimeout(() => {
                                  Z(!1);
                              }, 9e4)));
                      },
                      connectionApp: R,
                      ref: S,
                  }),
        eo =
            !C || O
                ? null
                : (0, r.jsx)(h.A, {
                      title: J.intl.string(J.t.ULvRFd),
                      body: J.intl.string(J.t["HJJDr+"]),
                      targetElementRef: S,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                      shouldShow: Q,
                      onRequestClose: () => {
                          (Z(!1), null != q.current && (clearTimeout(q.current), (q.current = null)));
                      },
                  });
    return (0, r.jsxs)("div", {
        className: t3.o1,
        children: [
            el ?? ee ?? er,
            et,
            en,
            (ea ?? es) == null
                ? (0, r.jsx)(tG, { isActivity: null == _ && null != f && f.intent !== t1.sV.MAIN })
                : null,
            ei,
            ea ?? es,
            eo,
        ],
    });
});
function t7(e) {
    let { runningGame: t, startAuthorization: n, connectionApp: i, ref: a } = e;
    return (0, r.jsx)(tD.A, {
        ref: a,
        onClick: () => {
            (k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "link_account",
                game_id: t?.id ?? null,
                application_id: i?.id ?? null,
            }),
                n());
        },
        icon: tE.ExperimentalGameControllerLinkIcon,
        tooltipText: J.intl.string(J.t.sbdnpw),
    });
}
function t4(e) {
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
    let _ = (0, tg.A)(),
        { isQuestBarEmpty: E, hasLoadedQuestBar: A } = (0, U.c9)(),
        f = d && null != l && null != s && !_ && E && A,
        [h, I] = (0, eL.kn)(f && null != l ? [l] : [], { bypassAutoDismiss: !0 }),
        [p, m] = (0, eL.kn)(d ? [o] : [], { bypassAutoDismiss: !0 }),
        T = a.useCallback(() => {
            (I(eo.i.TAKE_ACTION), m(eo.i.TAKE_ACTION), n());
        }, [I, m, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: t3.IF,
                children: [
                    (0, r.jsx)("div", { className: t3.uD, children: (0, r.jsx)("div", { className: t3.Z9 }) }),
                    (0, r.jsx)(tD.A, { ref: c, tooltipText: t, onClick: T, icon: tf.GameControllerIcon }),
                    p === o && (0, r.jsx)(tO.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != h && null != s && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: m }),
        ],
    });
}
function t8(e) {
    let { gameName: t, runningGameId: n, isGameServerHostingInShopEnabled: i, onClick: a } = e,
        s = (function (e) {
            let { location: t } = e;
            return tB.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(t4, {
        tooltipText: J.intl.formatToPlainString(tj.default.oZ4ZFn, { gameName: t }),
        coachmarkContent: A.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
        badgeContent: A.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_NEW_BADGE,
        marketingEnabled: i && s,
        onClick: a,
        onViewed: () => (0, tk.ET)({ gameApplicationId: n, buttonVariant: "shop" }),
        renderCoachmark: (e) => {
            let { targetElementRef: i, markAsDismissed: s, markBadgeAsDismissed: l } = e;
            return (0, r.jsx)(tY, {
                gameName: t,
                runningGameId: n,
                targetElementRef: i,
                onClick: () => {
                    (a(), s(eo.i.TAKE_ACTION), l(eo.i.TAKE_ACTION));
                },
                onClose: () => s(eo.i.USER_DISMISS),
            });
        },
    });
}
function t9(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        k.default.track(B.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tQ.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tQ.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            (k.default.track(B.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s());
        }, [t, s]);
    return (0, r.jsx)(tD.A, {
        tooltipText: J.intl.string(J.t.vyaWs7),
        onClick: l,
        onMouseDown: i,
        icon: tT.ShopIcon,
        ref: n,
    });
}
var ne = n(428689),
    nt = n(409626),
    nn = n(692969),
    ni = n(202163),
    nr = n(475358),
    na = n(900797),
    ns = n(847374),
    nl = n(866665),
    no = n(152367),
    nd = n(123292),
    nc = n(939409);
function nu(e) {
    let { onClick: t, isPopoutOpen: n } = e,
        i = n ? na.ChevronSmallUpIcon : ns.ChevronSmallDownIcon;
    return (0, r.jsxs)(I.D, {
        className: nc.kL,
        onClick: t,
        "aria-expanded": n,
        children: [
            (0, r.jsx)(V.E, {
                className: nc.P_,
                variant: "body-xs/medium",
                color: "none",
                children: J.intl.string(J.t.jfrLLb),
            }),
            (0, r.jsx)(i, { className: nc.Kk, size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        ],
    });
}
var n_ = n(734066),
    nE = n(898105),
    nA = n(707116),
    nf = n(28863),
    nh = n(780964),
    nI = n(766075),
    np = n(271597),
    nm = n(464132),
    nT = n(683825);
let ng = [A.M.AUTOCLIPPING_EARLY_ACCESS_FIRST_CALL_EDUCATION],
    nS = [];
function nN(e) {
    let { targetElementRef: t } = e,
        { value: n } = (0, nm.U)(),
        i = !__OVERLAY__ && "auto" === n,
        { enabled: a } = (0, nE.r)("ClipsFirstCallEducationPopover"),
        [s, l] = (0, eL.kn)(i && a ? ng : nS, { bypassAutoDismiss: !0 });
    if (null == s) return null;
    function o() {
        (l(eo.i.INDIRECT_ACTION), (0, nI.openUserSettings)(nh.X.CLIPS_PANEL));
    }
    return (0, r.jsx)(h.A, {
        targetElementRef: t,
        shouldShow: !0,
        position: "top",
        caretConfig: { align: "start" },
        gradientColor: "nitro-pink",
        badge: { type: "early_access", variant: "inverted", icon: p.NitroWheelIcon },
        title: J.intl.string(nT.default.OyFpJy),
        body: [
            J.intl.format(nT.default.I0bdwM, {
                settingsHook: (e, t) => (0, r.jsx)(nf.Anchor, { onClick: o, children: e }, t),
            }),
        ],
        actions: [
            {
                text: J.intl.string(J.t.RzWDqY),
                onClick: function () {
                    (l(eo.i.TAKE_ACTION), (0, np.p)());
                },
            },
        ],
        onRequestClose: () => l(eo.i.USER_DISMISS),
    });
}
var nC = n(37595),
    nO = n(395771),
    nR = n(455426),
    nL = n(207228),
    ny = n(887287),
    nD = n(532624),
    nb = n(350535),
    nv = n(191850),
    nP = n(369409);
let nM = [A.M.AUTOCLIPPING_EARLY_ACCESS_RTC_NUDGE_ACKNOWLEDGMENT],
    nU = [];
function nw() {
    let e = a.useRef(null),
        [t, i] = a.useState(!1),
        { value: s } = (0, nm.U)(),
        o = (0, nA.Y)(),
        d = (0, nA.T)(),
        c = "off" === s ? nT.default.RfYFQu : "manual" === s ? nT.default.iHA2eT : null,
        [u, _] = (0, eL.kn)(__OVERLAY__ || null == c ? nU : nM, { bypassAutoDismiss: !0 }),
        E = u === A.M.AUTOCLIPPING_EARLY_ACCESS_RTC_NUDGE_ACKNOWLEDGMENT && null != c ? J.intl.string(c) : null;
    function f() {
        return (0, r.jsx)(nr.e, { shortcut: d, className: l()(nP.oH, nP.m8), keyClassName: nP.Bj }, "shortcut");
    }
    let h = o;
    d.length > 0 && "auto" === s
        ? (h = (0, r.jsxs)(r.Fragment, {
              children: [
                  J.intl.string(nT.default["6ZXEjB"]),
                  (0, r.jsx)("span", { className: nP.YW, "aria-hidden": !0, children: "\xb7" }),
                  f(),
              ],
          }))
        : d.length > 0 &&
          "manual" === s &&
          (h = (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("span", {
                      className: nP.zV,
                      children: J.intl.format(nT.default.Dd1dUI, { shortcut: d, shortcutHook: f }),
                  }),
                  (0, r.jsx)("span", { className: nP.hl, children: J.intl.string(nT.default.ms4ibY) }),
              ],
          }));
    let p = t ? na.ChevronSmallUpIcon : ns.ChevronSmallDownIcon;
    return (0, r.jsxs)("div", {
        className: nP.ON,
        children: [
            (0, r.jsx)(nl.m, {
                text: J.intl.string(nT.default.Hxldbz),
                shouldShow: !t,
                children: (0, r.jsx)(I.D, {
                    innerRef: e,
                    onClick: function (e) {
                        (null != E && _(eo.i.TAKE_ACTION),
                            i(!0),
                            (0, ty.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.resolve().then(n.bind(n, 707116));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                },
                                { position: "top", align: "left", onClose: () => i(!1) },
                            ));
                    },
                    "aria-label": E ?? o,
                    "aria-haspopup": "menu",
                    "aria-expanded": t,
                    className: l()(nP.d4, { [nP.pS]: t }),
                    children:
                        null != E
                            ? (0, r.jsx)(V.E, {
                                  variant: "body-xs/medium",
                                  color: "text-link",
                                  className: nP.UX,
                                  tag: "div",
                                  children: E,
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(V.E, {
                                          variant: "body-xs/medium",
                                          color: "none",
                                          className: nP.UX,
                                          tag: "div",
                                          children: h,
                                      }),
                                      (0, r.jsx)(p, {
                                          size: "xxs",
                                          color: "currentColor",
                                          className: nP.ql,
                                          "aria-hidden": !0,
                                      }),
                                  ],
                              }),
                }),
            }),
            (0, r.jsx)(nN, { targetElementRef: e }),
        ],
    });
}
function nG(e) {
    let { legacyHint: t } = e,
        { enabled: n } = (0, nE.r)("RunningGameStatus");
    return n ? (0, r.jsx)(nw, {}) : t;
}
function nx(e) {
    let { isCurrentlyRunningGame: t, gamePid: n, onClickNotSharing: i, isSharingPopoutOpen: a } = e,
        s = (0, E.bG)([nD.Ay], () => nD.Ay.getKeybindForAction(B.hCu.SAVE_CLIP)),
        o = null != s && s.shortcut.length > 0 ? nb.dI(s.shortcut, !0) : null,
        d = (0, tP.E)(),
        c = (0, n_.W1)(),
        u = w.tz.useSetting(),
        _ = (0, E.bG)([x.A], () => x.A.getStatus()),
        A = !__OVERLAY__ && (!u || _ === B.clD.INVISIBLE),
        f = d && t && null != o,
        h = (0, E.bG)([nO.A, eG.Ay, ny.A], () => {
            let e = nO.A.getCapturingApp(),
                t = (0, nC.V)(eG.Ay, ny.A);
            return null == e || null == n || t?.windowHandle == null || t.pid !== n ? null : e;
        });
    if (t) {
        if (null != h)
            return (0, r.jsxs)(V.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                className: l()(nP.En, nP.ef),
                tag: "div",
                children: [
                    (0, r.jsx)(no.MagicWandIcon, {
                        size: "xxs",
                        color: "currentColor",
                        className: nP.MY,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)("span", {
                        className: nP.us,
                        children: J.intl.format(nv.default["Q/RPC2"], { appName: h.appName }),
                    }),
                    (0, r.jsx)(nd.Q, {
                        text: J.intl.string(nv.default.VIjH42),
                        "aria-label": J.intl.formatToPlainString(nv.default["Tl/1iM"], { appName: h.appName }),
                        textVariant: "body-xs/medium",
                        variant: "secondary",
                        onClick: () => {
                            (m.h.dispatch({
                                type: "CONJURE_DEVICE_PERMISSIONS_RESET",
                                applicationId: h.appId,
                                permissions: ["screen_capture"],
                            }),
                                (0, nR.s)(),
                                (0, nL.ik)());
                        },
                    }),
                ],
            });
        if (A) return (0, r.jsx)(nu, { onClick: i, isPopoutOpen: a });
        let e = f
            ? (0, r.jsx)(V.E, {
                  variant: "body-xs/medium",
                  color: "text-subtle",
                  className: nP.En,
                  tag: "div",
                  children: J.intl.format(nT.default.ESZwQX, {
                      keybind: o,
                      keybindHook: () => (0, r.jsx)(nr.e, { shortcut: o, className: nP.oH, keyClassName: nP.Bj }),
                  }),
              })
            : null;
        return !__OVERLAY__ && c ? (0, r.jsx)(nG, { legacyHint: e }) : e;
    }
    return (0, r.jsx)(V.E, { variant: "body-xs/medium", color: "text-subtle", children: J.intl.string(J.t.W4N1ru) });
}
var nk = n(450173);
function nF(e) {
    let { name: t, applicationId: n } = e,
        i = (0, nn.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: nt.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(I.D, {
        onClick: i,
        className: l()(null != i && nk.On),
        children: (0, r.jsx)(t_.A, { className: nk.mO, children: t }),
    });
}
function nB(e) {
    let { gameRecord: t, application: n, game: i, showLiveBadge: a, ref: s } = e;
    return (0, r.jsxs)("div", {
        className: nk.f9,
        children: [
            (0, r.jsx)(ej.A, { className: nk.Gt, game: t ?? n, pid: i?.pid, ref: s }),
            a ? (0, r.jsx)(ne.VideoIcon, { size: "md", color: "currentColor", className: nk.it }) : null,
        ],
    });
}
function nV(e) {
    let { name: t, gameRecord: n, application: i, game: a, isStreaming: s, ref: l } = e,
        o = (0, nn.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: i?.id,
            source: nt.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = null != o,
        c = (0, r.jsx)(nB, { gameRecord: n, application: i, game: a, showLiveBadge: s && !d, ref: l });
    return d
        ? (0, r.jsx)(I.D, {
              onClick: o,
              className: nk.Ow,
              "aria-label": J.intl.formatToPlainString(J.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nH(e) {
    var t, n, i;
    let s,
        l,
        {
            isStreaming: o,
            application: d,
            game: c,
            onClickNotSharing: u,
            isForceShowSharingPopout: _,
            setIsForceShowSharingPopout: A,
            ref: f,
            popoutTargetRef: h,
            isCurrentlyRunningGame: I,
        } = e,
        { gameRecord: p } = (0, ni.Ay)(d?.id),
        m =
            ((t = p),
            (n = d),
            (i = c),
            null != t ? t.name : null != n ? n.name : null != i ? i.name : J.intl.string(J.t["UQMV/E"]));
    return (
        (s = w.tz.useSetting()),
        (l = (0, E.bG)([x.A], () => x.A.getStatus())),
        (0, a.useEffect)(() => {
            k.default.track(B.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: s,
                status: l,
                rtc_popout_available: !s || l === B.clD.INVISIBLE,
            });
        }, [s, l]),
        (0, r.jsxs)("div", {
            className: nk.cm,
            children: [
                (0, r.jsx)(nV, { name: m, gameRecord: p, application: d, game: c, isStreaming: o, ref: f }),
                (0, r.jsx)(ed, {
                    popoutTargetRef: h,
                    isForceShowSharingPopout: _,
                    setIsForceShowSharingPopout: A,
                    hidePopout: !I,
                    children: (0, r.jsxs)("div", {
                        className: nk.pq,
                        children: [
                            null != m ? (0, r.jsx)(nF, { name: m, applicationId: d?.id }) : null,
                            (0, r.jsx)(nx, {
                                isCurrentlyRunningGame: I,
                                gamePid: c?.pid,
                                onClickNotSharing: u,
                                isSharingPopoutOpen: _,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var nj = n(5867);
let nW = {
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
var nY = n(534952),
    nK = n(731854),
    n$ = n(920155),
    nX = n(821095),
    nz = n(268920),
    nq = n(633217);
function nQ(e) {
    if (null != e.conjureProjectId)
        return (0, r.jsx)(eO.A, {
            applicationId: e.id,
            name: e.name,
            glyphSize: (0, eC.w)(32).glyphSize,
            className: l()(nX.Gt, nX.Ps),
        });
}
function nJ(e) {
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
        { data: A, isLoading: I } = (0, eY.I)(i?.getCanonicalGameId()),
        p = s ? l : (A ?? i),
        m = R.A.find((e) => null != p && e.migrationData?.replacedBy === p.id),
        T = null == p || I || E;
    if (
        ((0, eu.A)(
            {
                type: c.ImpressionTypes.POPOUT,
                name: c.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: i?.id,
                    parent_application_id: a?.parentId,
                    type: s ? "incentivized" : "default",
                },
            },
            { disableTrack: T },
        ),
        T)
    )
        return null;
    let g = J.intl.formatToPlainString(J.t.hUbQT2, { gameName: p.name }),
        S = J.intl.string(J.t.jynBQ5);
    s && (S = J.intl.string(n$.default["2cOIOr"]));
    let N = [
        {
            text: S,
            onClick: () => {
                (o(eo.i.TAKE_ACTION), d({ analyticsLocations: u }));
            },
        },
    ];
    return (
        s &&
            ((t = "beta"),
            (g = J.intl.formatToPlainString(n$.default.dPuaZE, { applicationName: p.name })),
            (n = { text: J.intl.string(J.t.hvVgAZ), link: m?.migrationData?.helpCenterLink, external: !0 })),
        (0, r.jsx)(h.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: f.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: p, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: g,
            body: J.intl.string(J.t["2lfjU+"]),
            textLink: n,
            targetElementRef: _,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(eo.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: N,
        })
    );
}
function nZ(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = J.intl.string(J.t.MxAlrB),
        l = J.intl.string(J.t["/UTTEg"]),
        o = [
            {
                text: J.intl.string(J.t.aRIFWD),
                onClick: () => {
                    (i(eo.i.TAKE_ACTION), window.open(to.A.getArticleURL(B.MVz.IN_GAME_FEATURES), "_blank"));
                },
            },
        ];
    return (
        n &&
            ((s = J.intl.string(n$.default.ublzTG)),
            (l = J.intl.string(n$.default.JgM2xu)),
            (t = { type: "video", src: nq.A, fallbackImageSrc: nz.A, aspectRatio: "2/1", loop: !0 })),
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
            onRequestClose: () => i(eo.i.USER_DISMISS),
        })
    );
}
function n0(e) {
    let {
        activity: t,
        game: n,
        markAsDismissed: i,
        inviteButtonRef: a,
        parentAnalyticsLocation: s,
        analyticsContext: l,
    } = e;
    return (0, r.jsx)(h.A, {
        title: J.intl.string(J.t["0l2pEt"]),
        body: J.intl.string(J.t["DSZUK/"]),
        targetElementRef: a,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(eo.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: J.intl.string(J.t.YdkBCH),
                onClick: () => {
                    (i(eo.i.TAKE_ACTION),
                        d()(null != t, "Received null activity"),
                        k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, eT.XJ)(s, eT.OP.INVITE),
                        k.default.track(B.HAw.OPEN_MODAL, {
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
function n1(e) {
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
            accountLinkButtonRef: f,
            gameCommunityGuildId: h,
            parentAnalyticsLocation: I,
            analyticsLocations: p,
            analyticsContext: m,
        } = e,
        {
            isEligible: T,
            displayedApp: g,
            isLoading: S,
        } = (function (e) {
            let { connectionApp: t } = e,
                { data: n, isLoading: i } = (0, eh.YY)(t?.parentId ?? t?.id);
            return {
                isEligible: null != nY.ji.find((e) => e.applicationId === n?.id) && null != t,
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
                        (0, e_.RI)({
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
        })({ isEligible: T, hasAlreadyLinked: c, didStartAuthorization: u, application: s });
    switch (t) {
        case 0:
            return (0, r.jsx)(nJ, {
                application: i,
                connectionApp: s,
                isEligibleForIncentivizedAccountLinking: T,
                incentivizedAccountLinkingDisplayedApp: g,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: _,
                analyticsLocations: p,
                accountLinkButtonRef: f,
                incentivizedAccountLinkingIsLoading: S,
            });
        case 1:
            return (0, r.jsx)(nZ, {
                incentivizedAccountLinkingRewarded: N,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(n0, {
                activity: l,
                game: o,
                markAsDismissed: n,
                inviteButtonRef: A,
                parentAnalyticsLocation: I,
                analyticsContext: m,
            });
        case 3:
            return (
                d()(i?.id != null && i?.name != null && null != h, "Game community upsell requires these as non null"),
                (0, r.jsx)(eM, {
                    targetElementRef: E,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: h,
                    markAsDismissed: n,
                })
            );
        default:
            return null;
    }
}
let n2 = (0, N.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(tu.A, { children: t });
});
function n3(e) {
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
        f = s;
    function h() {
        (d()(null != a, "Channel cannot be null during navigation click"),
            S.A.channelListScrollTo(a.guild_id ?? B.ME, a.id),
            !E &&
                ((0, e4.gV)(a.type) &&
                    g.A.selectParticipant(
                        a.id,
                        (0, em.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, e4.pQ)(a.type) && (0, L.gk)(nj.Gd.PANEL)));
    }
    null != l && null != a
        ? ((t = B.BVt.CHANNEL(l.id, a.id)), (f = `${f} / ${l.name}`))
        : null != a && (t = B.BVt.CHANNEL(B.ME, a.id));
    let I = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ej.A, { className: nX.Gt, game: n, size: ej.M.SMALL, ref: u, unknownGameIconFallback: nQ(n) }),
            (0, r.jsx)(ed, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nX.pq,
                    children: [
                        (0, r.jsx)(eQ.A, {
                            href: t,
                            onClick: function () {
                                (h(), E && m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
                            },
                            children: (0, r.jsx)(t_.A, { className: nX._W, children: n.name }),
                        }),
                        null != a && (0, e4.pQ)(a.type)
                            ? (0, r.jsx)(eQ.A, {
                                  href: t,
                                  onClick: h,
                                  children: (0, r.jsx)(tu.A, { className: nX.Ix, children: f }),
                              })
                            : (0, r.jsx)(n2, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nX.cm, children: I });
}
function n6(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ej.A, {
                    className: nX.Gt,
                    game: n,
                    size: ej.M.SMALL,
                    ref: i,
                    unknownGameIconFallback: nQ(n),
                }),
                (0, r.jsxs)("div", {
                    className: nX.pq,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: function () {
                                if (s) return void m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                if (t.intent !== t1.sV.MAIN) {
                                    let e = (0, ey.A)(t.surface);
                                    null != e && (0, e7.pX)(B.BVt.CHANNEL((0, eD.A)(t.surface) ?? B.ME, e));
                                    return;
                                }
                                eb.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: t1.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nX.rB,
                            children: (0, r.jsx)(t_.A, { className: nX._W, children: n.name }),
                        }),
                        (0, r.jsx)(n2, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nX.cm, children: o });
}
function n5(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eX.A)(t);
    return (0, r.jsxs)("div", {
        className: nX.cm,
        ref: n,
        children: [
            (0, r.jsx)(ez.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nX.pq,
                children: [
                    (0, r.jsx)(t_.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nX.qi,
                            children: [
                                (0, r.jsx)(p.NitroWheelIcon, { size: "xxs", color: eR.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e5, { className: nX.s, variant: "footnote/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let n7 = (0, C.A)(function (e) {
    let { analyticsContext: t, className: n } = e,
        i = a.useRef(null),
        s = a.useRef(null),
        o = a.useRef(null),
        d = (0, E.bG)([e8.default], () => e8.default.getId()),
        c = (0, E.bG)([eG.Ay, tl.A], () => (0, eq.A)(eG.Ay, tl.A)),
        { enabled: f } = ew.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: h, isWithinThreshold: I } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, E.bG)([eV], () => eV.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (null == n || Date.now() - n.endedAt >= eH) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + eH - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [n]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let i = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i < eH };
        })(),
        p = (0, E.bG)([ta.Ay, e9.A], () => e9.A.getChannel(ta.Ay.getVoiceChannelId())),
        m = (0, E.bG)([y.Ay], () => y.Ay.getConnectedActivityChannelId()),
        T = (0, E.bG)([e9.A], () => e9.A.getChannel(m)),
        g = (0, E.bG)([tt.A], () => tt.A.getGuild(T?.guild_id)),
        [S, N] = (0, E.yK)([e1.A], () => [e1.A.getCurrentUserActiveStream(), e1.A.getStreamerActiveStreamMetadata()]),
        C = (0, E.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        R = T?.type === B.rbe.GUILD_SPACE ? null : C,
        L = (0, E.bG)([ev.A, eI.A, eN.Ay], () => {
            let e = (0, t1.ny)(ev.A.getMainFrame());
            return null != e && (0, eS.A)(e) ? null : e;
        }),
        P = (0, E.bG)([tt.A, tn.A], () => null == p || eK.vz(p, tt.A, tn.A, !1)),
        [M] = (0, ep.A)([
            (function () {
                if (null != N && null != N.id) return N.id;
                if (null != c) return c.id;
                if (null != R) return R.applicationId;
                if (null != L) return L.applicationId;
                if (null != h && null != h.id) return h.id;
            })(),
        ]),
        w =
            (function () {
                let { enabled: e } = v.h.useConfig({ location: "useCanGoLiveActivityFromActivityCard" }),
                    t = (0, E.bG)([b.Ay], D.sV);
                return e && t;
            })() &&
            (null != R || null != L),
        G = tc.useConfig({ location: "ActivityPanelGameCard" }),
        x = null != c && !(0, td.uF)() && G.enabled,
        F = (0, E.bG)([b.Ay], () => (0, e$.A)(b.Ay) && ((0, td.uF)() || x), [x]) || w,
        V = (0, E.bG)([ti.A], () => (null != d ? ti.A.findActivity(d, (e) => e.type === _.$.PLAYING) : null)),
        H = null != S && S.ownerId === d && S.state !== B.XYD.ENDED,
        j = (0, E.bG)([ts.default, tr.A], () => (null != T ? (0, eg.m1)(T, ts.default, tr.A) : void 0)),
        W = (function () {
            let { resolution: e, fps: t } = (0, E.cf)([e0.A], () => e0.A.getState()),
                n = (0, E.bG)([e1.A], () => e1.A.getCurrentUserActiveStream()?.guildId),
                i = (0, eZ.A)("useStreamQualityIndicator", n, e, t);
            if (i !== e3.on.RESOLUTION_720 || t === e3.kn.FPS_60) return `${(0, e3.zr)(i)} ${(0, e2.Bs)(t)}`;
        })(),
        [Y, K] = a.useState(!1),
        $ = (0, E.bG)([eJ.A], () => eJ.A.getWindowOpen(B.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: X, analyticsLocations: z } = (0, ec.Ay)(),
        {
            hasAlreadyLinked: q,
            canStartAuthorization: Q,
            connectionApp: J,
            startAuthorization: Z,
            token: ee,
        } = (0, eA.RD)(M, { allowedFlows: [tZ._.RPC, tZ._.WEB] }),
        [et, en] = a.useState(null),
        ei = null != et,
        er = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (en(M?.id ?? null), Z(...t));
            },
            [M?.id, Z],
        ),
        ea = eE.l.getConfig({ location: "ActivityPanelGameCard" }).enabled && (0, ef.e)(ee),
        es = !!q && !ea,
        el = (0, O.Ay)(M?.id);
    a.useEffect(() => {
        null != M && el !== M?.id && en(null);
    }, [M, el]);
    let ed = (0, u.K)((e) => {
            e &&
                null != J &&
                k.default.track(B.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: c?.id ?? null, application_id: J.id });
        }),
        eu = a.useMemo(() => {
            let e = c?.id ?? h?.id;
            return null != e ? nW[e] : void 0;
        }, [c?.id, h?.id]),
        e_ = (0, E.bG)([te.A], () => null != eu && te.A.isMember(eu), [eu]),
        eh = f && null != eu && !e_ && (null != c || I) ? eu : void 0,
        em = !(0, E.bG)([b.Ay], () => b.Ay.supports(nK.O5.VIDEO)) && ((0, td.uF)() || x),
        eT = null != c && (F || Q || em) && (!H || N?.pid != null),
        [eC, eO] = (function (e) {
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
                { isQuestBarEmpty: u, hasLoadedQuestBar: _ } = (0, U.c9)(),
                E = !_ || !u,
                f = !E && !o && null == r && l && null != t,
                { shouldShow: h, markAsDismissed: I } = (0, eW.D3)({
                    application: t,
                    disabled: !f,
                    dismissibleContent: A.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: eo.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eW.Yb,
                }),
                p = !E && null != r && o,
                m = a.useMemo(() => {
                    if (E || h) return [];
                    let e = [];
                    return (
                        o && d && t6(t, n, i) && null == i && e.push(A.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(A.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, E, d, i, c, o, h]),
                [T, g] = (0, eL.kn)(m, { groupName: eo.m.ACCOUNT_NAME_ZONE });
            return a.useMemo(() => {
                if (null != T)
                    switch (T) {
                        case A.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    (s(null), g(e));
                                },
                            ];
                        case A.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, g];
                        default:
                            return [null, g];
                    }
                return h ? [0, I] : p ? [1, () => s(null)] : [null, () => {}];
            }, [I, g, s, h, p, T]);
        })({
            application: M,
            activity: V,
            embeddedActivity: R,
            connectingGameId: et,
            setConnectingGameId: en,
            canStartAuthorization: Q,
            hasAlreadyLinked: es,
            didStartAuthorization: ei,
            gameCommunityGuildId: eh,
        }),
        eR = null != h && (1 === eC || (I && (0 === eC || 3 === eC))) ? h : null,
        ey = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: a } = n;
                return (0, r.jsx)(nH, {
                    isStreaming: H,
                    application: e,
                    game: t,
                    onClickNotSharing: () => K(!0),
                    isForceShowSharingPopout: Y,
                    setIsForceShowSharingPopout: K,
                    ref: s,
                    popoutTargetRef: i,
                    isCurrentlyRunningGame: a,
                });
            },
            [Y, H],
        ),
        eD = a.useMemo(
            () =>
                eT
                    ? ey(M, c, { isGameRunning: !0 })
                    : null != R && null != M && t6(M, V, R)
                      ? (0, r.jsx)(n3, {
                            application: M,
                            embeddedActivity: R,
                            channel: T,
                            channelName: j,
                            guildForConnectedChannel: g,
                            isForceShowSharingPopout: Y,
                            setIsForceShowSharingPopout: K,
                            accountLinkUpsellTargetRef: s,
                            activityPopoutTargetRef: i,
                            isActivityPopoutOpen: $,
                        })
                      : null != L &&
                          null != M &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: M, frame: L })
                        ? (0, r.jsx)(n6, {
                              application: M,
                              accountLinkUpsellTargetRef: s,
                              frame: L,
                              isActivityPopoutOpen: $,
                          })
                        : H
                          ? (0, r.jsx)(n5, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: s,
                                streamQualityIndicator: W,
                            })
                          : null != eR
                            ? ey(M, eR, { isGameRunning: !1 })
                            : null,
            [N, V, M, j, T, R, L, g, $, Y, H, eT, eR, ey, c, W],
        );
    return null == eD
        ? null
        : (0, r.jsx)("div", {
              className: l()(nX.nd, n),
              ref: i,
              children: (0, r.jsxs)("div", {
                  className: nX.rf,
                  children: [
                      eD,
                      (0, r.jsx)(t5, {
                          stream: S,
                          canGoLive: F,
                          canGoLiveActivity: w,
                          isStreaming: H,
                          channel: T,
                          canStream: P,
                          runningGame: c,
                          activity: V,
                          application: M,
                          embeddedActivity: R,
                          frame: L,
                          analyticsContext: t,
                          inviteButtonRef: o,
                          accountLinkButtonRef: ed,
                          canStartAuthorization: Q,
                          startAuthorization: er,
                          hasAlreadyLinked: es,
                          connectionApp: J,
                      }),
                      (0, r.jsx)(n1, {
                          popover: eC,
                          dismissPopover: eO,
                          application: M,
                          connectionApp: J,
                          activity: V,
                          runningGame: c,
                          hasAlreadyLinked: es,
                          didStartAuthorization: ei,
                          startAuthorization: er,
                          accountLinkUpsellTargetRef: s,
                          inviteButtonRef: o,
                          accountLinkButtonRef: ed,
                          gameCommunityGuildId: eh,
                          parentAnalyticsLocation: X,
                          analyticsLocations: z,
                          analyticsContext: t,
                      }),
                  ],
              }),
          });
});
