(n.d(t, { A: () => nx }), n(321073));
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
    h = n(116833),
    f = n(43105),
    I = n(939249),
    p = n(403581),
    m = n(73153),
    g = n(298990),
    T = n(367513),
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
    Z = n(966756),
    Q = n(792996),
    J = n(293686);
function ee(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: J.K2,
        children: (0, r.jsx)(F.$, {
            variant: "primary",
            size: "sm",
            text: Q.intl.string(Z.default.Poezn1),
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
        className: J.E3,
        children: [
            (0, r.jsxs)("div", {
                className: J.fu,
                children: [
                    (0, r.jsx)(V.E, {
                        variant: "body-sm/medium",
                        color: "text-strong",
                        children: Q.intl.string(Z.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: J.$v,
                            children: [
                                (0, r.jsx)(H.nW, { status: B.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(V.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === B.clD.INVISIBLE
                                            ? Q.intl.string(Z.default.a3AofS)
                                            : Q.intl.string(Q.t.WbGtnH),
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
        (0, r.jsx)("div", { className: J.iE, ref: n, children: (0, r.jsx)("div", { className: J.Qs, children: t }) })
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
                children: Q.intl.string(Z.default["7cfFob"]),
            }),
            (0, r.jsx)(Y.c, { className: J.yF }),
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
                        className: J._M,
                        children: Q.intl.string(Z.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: J.$v,
                        children: [
                            (0, r.jsx)(H.nW, { status: B.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(V.E, {
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                children: Q.intl.string(Z.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(V.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: Q.intl.string(Z.default.Yl0mh4),
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
                children: Q.intl.string(Z.default["7cfFob"]),
            }),
            (0, r.jsx)(Y.c, { className: J.yF }),
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
                        title: Q.intl.string(Z.default.vxVbGP),
                        body: [Q.intl.string(Z.default["7cfFob"])],
                        action: {
                            text: Q.intl.string(Z.default.k4tCg2),
                            onClick: () => {
                                w.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: Q.intl.string(Q.t["ZrN+DT"]), onClick: q.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: Q.intl.string(Z.default.qKDqet),
                        body: [Q.intl.string(Z.default.Yl0mh4)],
                        action: {
                            text: Q.intl.string(Z.default.Poezn1),
                            onClick: () => {
                                (0, z.A)({ nextStatus: B.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: Q.intl.string(Z.default["6cA8HZ"]),
                        body: [Q.intl.string(Z.default["7cfFob"])],
                        action: {
                            text: Q.intl.string(Z.default.k4tCg2),
                            onClick: () => {
                                (w.tz.updateSetting(!0), (0, z.A)({ nextStatus: B.clD.ONLINE }));
                            },
                        },
                        textLink: { text: Q.intl.string(Q.t["ZrN+DT"]), onClick: q.L7 },
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
                (0, r.jsx)(f.A, {
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
    eh = n(382034),
    ef = n(627363),
    eI = n(587895),
    ep = n(429913),
    em = n(568598),
    eg = n(384059),
    eT = n(47167),
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
        (0, r.jsx)(f.A, {
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
            title: Q.intl.formatToPlainString(Q.t.ry9SJw, { gameName: i }),
            body: Q.intl.string(Q.t.YPpOov),
            actions: [
                {
                    text: Q.intl.string(Q.t.RVfNGU),
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
var eG = n(986322),
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
    eZ = n(95035),
    eQ = n(293432),
    eJ = n(507756),
    e0 = n(929921),
    e1 = n(616356),
    e2 = n(650338),
    e3 = n(753070),
    e6 = n(900795);
function e5(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(V.E, { className: l()({ [e6.Q]: null == n }, t), color: n, ...i });
}
var e4 = n(976860),
    e8 = n(95701),
    e7 = n(46653),
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
    td = n(723702),
    tc = n(994314),
    tu = n(485599),
    t_ = n(141628),
    tE = n(192308),
    tA = n(959988),
    th = n(183623),
    tf = n(241541),
    tI = n(70688),
    tp = n(687966),
    tm = n(34188),
    tg = n(942857),
    tT = n(646865),
    tS = n(988534),
    tN = n(55730),
    tC = n(521588),
    tO = n(164636),
    tR = n(176781),
    tL = n(442433),
    ty = n(42473),
    tD = n(200542),
    tb = n(419490),
    tv = n(572164),
    tP = n(489496),
    tM = n(414405);
function tU(e) {
    (0, tL.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e(666601), n.e(344751)]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tw = function (e) {
    let { isActivity: t = !1 } = e,
        { parentAnalyticsLocation: n } = (0, ec.Ay)(),
        i = (0, tv.E)(),
        a = (0, tO.bG)([tb.Ay], () => tb.Ay.getIsAtMaxSaveClipOperations()),
        { enableGamePanelEntrypoint: s } = tD.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: l, clipsSourceAttached: o } = (0, tM.A)({ isActivity: t });
    return s && i
        ? (0, r.jsx)(ty.A, {
              disabled: a || !o,
              tooltipText: l,
              onClick: () => {
                  ((0, tP.l0)(), (0, eg.XJ)(n, eg.OP.CLIP));
              },
              onContextMenu: tU,
              icon: tR.x,
          })
        : null;
};
var tG = n(457827),
    tx = n(907878),
    tk = n(196736);
let tF = (0, eU.mj)({
    name: "2026-08-gsh-subs-activity-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(n(363487), n(940456), n(831617));
var tB = n(475669);
let tV = new Set([
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
var tH = n(105518);
function tj(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, E.bG)([tB.A], () => null != a && tB.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
    return (0, r.jsx)(f.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            d && null != a
                ? {
                      type: "dynamic",
                      component: h.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
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
function tW(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tj, {
        title: Q.intl.formatToPlainString(tH.default.k9KZ2L, { gameName: t }),
        body: Q.intl.string(tH.default.gOrBCw),
        ctaText: Q.intl.string(tH.default.sElzfG),
        ...n,
    });
}
var tY = n(338771),
    tK = n(453774),
    t$ = n(44724),
    tX = n(153488),
    tz = n(942370),
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
              t.type === _.$.PLAYING &&
              (0, tN.A)(t, B.jUm.JOIN))
    );
}
let t0 = a.memo(function (e) {
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
            frame: h,
            activity: I,
            application: p,
            analyticsContext: m,
            inviteButtonRef: T,
            accountLinkButtonRef: S,
            startAuthorization: N,
            canStartAuthorization: C,
            hasAlreadyLinked: O,
            connectionApp: R,
        } = e,
        { parentAnalyticsLocation: L, analyticsLocations: y } = (0, ec.Ay)(),
        b = (0, tK.A)(p?.id),
        v = tJ(p, I, A),
        P = (0, tk.H)({ location: "activity-panel" }),
        M = (0, E.bG)([tX.A], () => tX.A.hasConsented(B.YAq.PERSONALIZATION)),
        U = P && M && null != (t = _?.id) && tV.has(t),
        w = a.useCallback(() => {
            (d()(null != I, "Received null activity"),
                k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "invite_to_game",
                    game_id: _?.id ?? null,
                    application_id: I.application_id,
                }),
                (0, eg.XJ)(L, eg.OP.INVITE),
                k.default.track(B.HAw.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: I.application_id,
                    location: m.location,
                }),
                (0, g.qf)(I, !1));
        }, [I, m, L, _]),
        G = a.useCallback(
            (e, t) => () => {
                ((0, eg.XJ)(L, eg.OP.LEAVE_ACTIVITY), (0, tS.d)({ location: t, applicationId: e, showFeedback: !0 }));
            },
            [L],
        ),
        x = a.useCallback(
            (e) => () => {
                ((0, eg.XJ)(L, eg.OP.LEAVE_ACTIVITY), (0, tG.r)(e));
            },
            [L],
        ),
        F = a.useCallback(() => {
            (0, tY.A)(i);
        }, [i]),
        V = a.useCallback(() => {
            (0, tE.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(249169),
                    n.e(473782),
                    n.e(553464),
                    n.e(130662),
                    n.e(498552),
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
                        sourcePID: _?.pid,
                        selectSource: null != ta.Ay.getVoiceChannelId(),
                        analyticsLocations: y,
                    });
            });
        }, [_, y]),
        H = null == _ && l && (null != A || null != h),
        j = a.useCallback(() => {
            let e = (0, D.YX)();
            null == e
                ? V()
                : (0, tE.mM)(async () => {
                      let { default: t } = await Promise.all([
                          n.e(249169),
                          n.e(473782),
                          n.e(553464),
                          n.e(130662),
                          n.e(498552),
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
        }, [V, y]),
        W = p?.name ?? _?.name ?? "",
        Y = a.useCallback(() => {
            let e = _?.id;
            (0, tx.pK)({ gameApplicationId: e, buttonVariant: "shop" });
            let t = B.BVt.COLLECTIBLES_SHOP_WITH_TAB(tq.G2.GAME_SERVERS);
            (0, e4.pX)(null != e ? `${t}&${tq.tD}=${e}` : t);
        }, [_?.id]),
        K = a.useRef(null),
        [$, X] = a.useState(!1);
    (a.useEffect(
        () => () => {
            null != K.current && clearTimeout(K.current);
        },
        [],
    ),
        a.useEffect(() => {
            O && (X(!1), null != K.current && (clearTimeout(K.current), (K.current = null)));
        }, [O]));
    let z = null == b || null == p ? null : (0, r.jsx)(t6, { applicationId: b.id }),
        q = U
            ? (0, r.jsx)(t3, { gameName: W, runningGameId: _?.id, isGameServerHostingInShopEnabled: P, onClick: Y })
            : null,
        Z = (function () {
            let e, t, n;
            if ((null == _ && null != A && !(0, tT.f)() && !H) || (!o && !s)) return null;
            let i = null;
            return (
                o
                    ? ((e = !1),
                      (t = () => {
                          (F(), (0, eg.XJ)(L, eg.OP.STREAM, !1));
                      }),
                      (n = tA.G),
                      (i = Q.intl.string(Q.t.S5anIc)))
                    : u
                      ? ((e = !1),
                        (t = () => {
                            (H ? j() : V(), (0, eg.XJ)(L, eg.OP.STREAM, !0));
                        }),
                        (n = th.F),
                        (i =
                            null != _
                                ? Q.intl.formatToPlainString(Q.t.AB5gTy, { game: _.name })
                                : H && null != p
                                  ? Q.intl.formatToPlainString(Q.t.AB5gTy, { game: p.name })
                                  : Q.intl.string(Q.t.FeUKeA)))
                      : ((e = !0),
                        (t = null),
                        (n = th.F),
                        null != c && (0, e8.gV)(c.type) && (i = Q.intl.string(Q.t.uQn9B8))),
                (0, r.jsx)("div", {
                    className: tQ.IF,
                    children: (0, r.jsx)(ty.A, { tooltipText: i, disabled: e, onClick: t, icon: n }),
                })
            );
        })(),
        J =
            v && null == A
                ? (0, r.jsx)(ty.A, { ref: T, tooltipText: Q.intl.string(Q.t["hC/Zey"]), onClick: w, icon: tf.D })
                : null,
        ee =
            null == A
                ? null
                : (0, r.jsx)(ty.A, {
                      tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                      onClick: G(A.applicationId, A.location),
                      icon: tI.DoorExitIcon,
                  }),
        et =
            null == h || h.intent !== tZ.sV.MAIN
                ? null
                : (0, r.jsx)(ty.A, {
                      tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                      onClick: x(h.id),
                      icon: tI.DoorExitIcon,
                  }),
        en =
            !C || O
                ? null
                : (0, r.jsx)(t1, {
                      runningGame: _,
                      startAuthorization: function () {
                          N({ analyticsLocations: y }) === tz._.RPC &&
                              (X(!0),
                              null != K.current && clearTimeout(K.current),
                              (K.current = setTimeout(() => {
                                  X(!1);
                              }, 9e4)));
                      },
                      connectionApp: R,
                      ref: S,
                  }),
        ei =
            !C || O
                ? null
                : (0, r.jsx)(f.A, {
                      title: Q.intl.string(Q.t.ULvRFd),
                      body: Q.intl.string(Q.t["HJJDr+"]),
                      targetElementRef: S,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                      shouldShow: $,
                      onRequestClose: () => {
                          (X(!1), null != K.current && (clearTimeout(K.current), (K.current = null)));
                      },
                  });
    return (0, r.jsxs)("div", {
        className: tQ.o1,
        children: [
            en ?? z ?? J,
            q,
            (ee ?? et) == null
                ? (0, r.jsx)(tw, { isActivity: null == _ && null != h && h.intent !== tZ.sV.MAIN })
                : null,
            Z,
            ee ?? et,
            ei,
        ],
    });
});
function t1(e) {
    let { runningGame: t, startAuthorization: n, connectionApp: i, ref: a } = e;
    return (0, r.jsx)(ty.A, {
        ref: a,
        onClick: () => {
            (k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "link_account",
                game_id: t?.id ?? null,
                application_id: i?.id ?? null,
            }),
                n());
        },
        icon: t_.A,
        tooltipText: Q.intl.string(Q.t.sbdnpw),
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
    let _ = (0, tg.A)(),
        { isQuestBarEmpty: E, hasLoadedQuestBar: A } = (0, U.c9)(),
        h = d && null != l && null != s && !_ && E && A,
        [f, I] = (0, eL.kn)(h && null != l ? [l] : [], { bypassAutoDismiss: !0 }),
        [p, m] = (0, eL.kn)(d ? [o] : [], { bypassAutoDismiss: !0 }),
        g = a.useCallback(() => {
            (I(eo.i.TAKE_ACTION), m(eo.i.TAKE_ACTION), n());
        }, [I, m, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tQ.IF,
                children: [
                    (0, r.jsx)("div", { className: tQ.uD, children: (0, r.jsx)("div", { className: tQ.Z9 }) }),
                    (0, r.jsx)(ty.A, { ref: c, tooltipText: t, onClick: g, icon: tp.GameControllerIcon }),
                    p === o && (0, r.jsx)(tC.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != f && null != s && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: m }),
        ],
    });
}
function t3(e) {
    let { gameName: t, runningGameId: n, isGameServerHostingInShopEnabled: i, onClick: a } = e,
        s = (function (e) {
            let { location: t } = e;
            return tF.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(t2, {
        tooltipText: Q.intl.formatToPlainString(tH.default.oZ4ZFn, { gameName: t }),
        coachmarkContent: A.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
        badgeContent: A.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_NEW_BADGE,
        marketingEnabled: i && s,
        onClick: a,
        onViewed: () => (0, tx.ET)({ gameApplicationId: n, buttonVariant: "shop" }),
        renderCoachmark: (e) => {
            let { targetElementRef: i, markAsDismissed: s, markBadgeAsDismissed: l } = e;
            return (0, r.jsx)(tW, {
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
function t6(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        k.default.track(B.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, t$.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, t$.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            (k.default.track(B.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s());
        }, [t, s]);
    return (0, r.jsx)(ty.A, { tooltipText: Q.intl.string(Q.t.vyaWs7), onClick: l, onMouseDown: i, icon: tm.U, ref: n });
}
var t5 = n(428689),
    t4 = n(409626),
    t8 = n(692969),
    t7 = n(202163),
    t9 = n(152367),
    ne = n(123292),
    nt = n(475358),
    nn = n(939409);
function ni(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(I.D, {
        className: nn.kL,
        onClick: t,
        children: (0, r.jsx)(V.E, {
            className: nn.P_,
            variant: "body-xs/medium",
            color: "text-subtle",
            children: Q.intl.string(Q.t.jfrLLb),
        }),
    });
}
var nr = n(37595),
    na = n(395771),
    ns = n(455426),
    nl = n(207228),
    no = n(887287),
    nd = n(532624),
    nc = n(350535),
    nu = n(683825),
    n_ = n(191850),
    nE = n(369409);
function nA(e) {
    let { isCurrentlyRunningGame: t, gamePid: n, onClickNotSharing: i } = e,
        a = (0, E.bG)([nd.Ay], () => nd.Ay.getKeybindForAction(B.hCu.SAVE_CLIP)),
        s = null != a && a.shortcut.length > 0 ? nc.dI(a.shortcut, !0) : null,
        o = (0, tv.E)(),
        d = w.tz.useSetting(),
        c = (0, E.bG)([x.A], () => x.A.getStatus()),
        u = !__OVERLAY__ && (!d || c === B.clD.INVISIBLE),
        _ = o && t && null != s,
        A = (0, E.bG)([na.A, eG.Ay, no.A], () => {
            let e = na.A.getCapturingApp(),
                t = (0, nr.V)(eG.Ay, no.A);
            return null == e || null == n || t?.windowHandle == null || t.pid !== n ? null : e;
        });
    return t
        ? null != A
            ? (0, r.jsxs)(V.E, {
                  variant: "body-xs/medium",
                  color: "text-subtle",
                  className: l()(nE.En, nE.ef),
                  tag: "div",
                  children: [
                      (0, r.jsx)(t9.D, { size: "xxs", color: "currentColor", className: nE.MY, "aria-hidden": !0 }),
                      (0, r.jsx)("span", {
                          className: nE.us,
                          children: Q.intl.format(n_.default["Q/RPC2"], { appName: A.appName }),
                      }),
                      (0, r.jsx)(ne.Q, {
                          text: Q.intl.string(n_.default.VIjH42),
                          "aria-label": Q.intl.formatToPlainString(n_.default["Tl/1iM"], { appName: A.appName }),
                          textVariant: "body-xs/medium",
                          variant: "secondary",
                          onClick: () => {
                              (m.h.dispatch({
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
              : _
                ? (0, r.jsx)(V.E, {
                      variant: "body-xs/medium",
                      color: "text-subtle",
                      className: nE.En,
                      tag: "div",
                      children: Q.intl.format(nu.default.ESZwQX, {
                          keybind: s,
                          keybindHook: () => (0, r.jsx)(nt.e, { shortcut: s, className: nE.oH, keyClassName: nE.Bj }),
                      }),
                  })
                : null
        : (0, r.jsx)(V.E, { variant: "body-xs/medium", color: "text-subtle", children: Q.intl.string(Q.t.W4N1ru) });
}
var nh = n(450173);
function nf(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t8.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t4.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(I.D, {
        onClick: i,
        className: l()(null != i && nh.On),
        children: (0, r.jsx)(tu.A, { className: nh.mO, children: t }),
    });
}
function nI(e) {
    let { gameRecord: t, application: n, game: i, showLiveBadge: a, ref: s } = e;
    return (0, r.jsxs)("div", {
        className: nh.f9,
        children: [
            (0, r.jsx)(ej.A, { className: nh.Gt, game: t ?? n, pid: i?.pid, ref: s }),
            a ? (0, r.jsx)(t5.VideoIcon, { size: "md", color: "currentColor", className: nh.it }) : null,
        ],
    });
}
function np(e) {
    let { name: t, gameRecord: n, application: i, game: a, isStreaming: s, ref: l } = e,
        o = (0, t8.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: i?.id,
            source: t4.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = null != o,
        c = (0, r.jsx)(nI, { gameRecord: n, application: i, game: a, showLiveBadge: s && !d, ref: l });
    return d
        ? (0, r.jsx)(I.D, {
              onClick: o,
              className: nh.Ow,
              "aria-label": Q.intl.formatToPlainString(Q.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nm(e) {
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
            ref: h,
            popoutTargetRef: f,
            isCurrentlyRunningGame: I,
        } = e,
        { gameRecord: p } = (0, t7.Ay)(d?.id),
        m =
            ((t = p),
            (n = d),
            (i = c),
            null != t ? t.name : null != n ? n.name : null != i ? i.name : Q.intl.string(Q.t["UQMV/E"]));
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
            className: nh.cm,
            children: [
                (0, r.jsx)(np, { name: m, gameRecord: p, application: d, game: c, isStreaming: o, ref: h }),
                (0, r.jsx)(ed, {
                    popoutTargetRef: f,
                    isForceShowSharingPopout: _,
                    setIsForceShowSharingPopout: A,
                    hidePopout: !I,
                    children: (0, r.jsxs)("div", {
                        className: nh.pq,
                        children: [
                            null != m ? (0, r.jsx)(nf, { name: m, applicationId: d?.id }) : null,
                            (0, r.jsx)(nA, { isCurrentlyRunningGame: I, gamePid: c?.pid, onClickNotSharing: u }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var ng = n(5867);
let nT = {
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
    nC = n(920155),
    nO = n(821095),
    nR = n(268920),
    nL = n(633217);
function ny(e) {
    if (null != e.conjureProjectId)
        return (0, r.jsx)(eO.A, {
            applicationId: e.id,
            name: e.name,
            glyphSize: (0, eC.w)(32).glyphSize,
            className: l()(nO.Gt, nO.Ps),
        });
}
function nD(e) {
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
        g = null == p || I || E;
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
            { disableTrack: g },
        ),
        g)
    )
        return null;
    let T = Q.intl.formatToPlainString(Q.t.hUbQT2, { gameName: p.name }),
        S = Q.intl.string(Q.t.jynBQ5);
    s && (S = Q.intl.string(nC.default["2cOIOr"]));
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
            (T = Q.intl.formatToPlainString(nC.default.dPuaZE, { applicationName: p.name })),
            (n = { text: Q.intl.string(Q.t.hvVgAZ), link: m?.migrationData?.helpCenterLink, external: !0 })),
        (0, r.jsx)(f.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: p, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: T,
            body: Q.intl.string(Q.t["2lfjU+"]),
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
function nb(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = Q.intl.string(Q.t.MxAlrB),
        l = Q.intl.string(Q.t["/UTTEg"]),
        o = [
            {
                text: Q.intl.string(Q.t.aRIFWD),
                onClick: () => {
                    (i(eo.i.TAKE_ACTION), window.open(to.A.getArticleURL(B.MVz.IN_GAME_FEATURES), "_blank"));
                },
            },
        ];
    return (
        n &&
            ((s = Q.intl.string(nC.default.ublzTG)),
            (l = Q.intl.string(nC.default.JgM2xu)),
            (t = { type: "video", src: nL.A, fallbackImageSrc: nR.A, aspectRatio: "2/1", loop: !0 })),
        (0, r.jsx)(f.A, {
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
function nv(e) {
    let {
        activity: t,
        game: n,
        markAsDismissed: i,
        inviteButtonRef: a,
        parentAnalyticsLocation: s,
        analyticsContext: l,
    } = e;
    return (0, r.jsx)(f.A, {
        title: Q.intl.string(Q.t["0l2pEt"]),
        body: Q.intl.string(Q.t["DSZUK/"]),
        targetElementRef: a,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(eo.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: Q.intl.string(Q.t.YdkBCH),
                onClick: () => {
                    (i(eo.i.TAKE_ACTION),
                        d()(null != t, "Received null activity"),
                        k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, eg.XJ)(s, eg.OP.INVITE),
                        k.default.track(B.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: t.application_id,
                            location: l.location,
                        }),
                        (0, g.qf)(t, !1));
                },
            },
        ],
    });
}
function nP(e) {
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
            analyticsContext: m,
        } = e,
        {
            isEligible: g,
            displayedApp: T,
            isLoading: S,
        } = (function (e) {
            let { connectionApp: t } = e,
                { data: n, isLoading: i } = (0, ef.YY)(t?.parentId ?? t?.id);
            return {
                isEligible: null != nS.ji.find((e) => e.applicationId === n?.id) && null != t,
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
        })({ isEligible: g, hasAlreadyLinked: c, didStartAuthorization: u, application: s });
    switch (t) {
        case 0:
            return (0, r.jsx)(nD, {
                application: i,
                connectionApp: s,
                isEligibleForIncentivizedAccountLinking: g,
                incentivizedAccountLinkingDisplayedApp: T,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: _,
                analyticsLocations: p,
                accountLinkButtonRef: h,
                incentivizedAccountLinkingIsLoading: S,
            });
        case 1:
            return (0, r.jsx)(nb, {
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
                analyticsContext: m,
            });
        case 3:
            return (
                d()(i?.id != null && i?.name != null && null != f, "Game community upsell requires these as non null"),
                (0, r.jsx)(eM, {
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
let nM = (0, N.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(tc.A, { children: t });
});
function nU(e) {
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
            S.A.channelListScrollTo(a.guild_id ?? B.ME, a.id),
            !E &&
                ((0, e8.gV)(a.type) &&
                    T.A.selectParticipant(
                        a.id,
                        (0, em.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, e8.pQ)(a.type) && (0, L.gk)(ng.Gd.PANEL)));
    }
    null != l && null != a
        ? ((t = B.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = B.BVt.CHANNEL(B.ME, a.id));
    let I = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ej.A, { className: nO.Gt, game: n, size: ej.M.SMALL, ref: u, unknownGameIconFallback: ny(n) }),
            (0, r.jsx)(ed, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nO.pq,
                    children: [
                        (0, r.jsx)(eZ.A, {
                            href: t,
                            onClick: function () {
                                (f(), E && m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
                            },
                            children: (0, r.jsx)(tu.A, { className: nO._W, children: n.name }),
                        }),
                        null != a && (0, e8.pQ)(a.type)
                            ? (0, r.jsx)(eZ.A, {
                                  href: t,
                                  onClick: f,
                                  children: (0, r.jsx)(tc.A, { className: nO.Ix, children: h }),
                              })
                            : (0, r.jsx)(nM, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nO.cm, children: I });
}
function nw(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ej.A, {
                    className: nO.Gt,
                    game: n,
                    size: ej.M.SMALL,
                    ref: i,
                    unknownGameIconFallback: ny(n),
                }),
                (0, r.jsxs)("div", {
                    className: nO.pq,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: function () {
                                if (s) return void m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                if (t.intent !== tZ.sV.MAIN) {
                                    let e = (0, ey.A)(t.surface);
                                    null != e && (0, e4.pX)(B.BVt.CHANNEL((0, eD.A)(t.surface) ?? B.ME, e));
                                    return;
                                }
                                eb.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: tZ.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nO.rB,
                            children: (0, r.jsx)(tu.A, { className: nO._W, children: n.name }),
                        }),
                        (0, r.jsx)(nM, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nO.cm, children: o });
}
function nG(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eX.A)(t);
    return (0, r.jsxs)("div", {
        className: nO.cm,
        ref: n,
        children: [
            (0, r.jsx)(ez.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nO.pq,
                children: [
                    (0, r.jsx)(tu.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nO.qi,
                            children: [
                                (0, r.jsx)(p.t, { size: "xxs", color: eR.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e5, { className: nO.s, variant: "footnote/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nx = (0, C.A)(function (e) {
    let { analyticsContext: t, className: n } = e,
        i = a.useRef(null),
        s = a.useRef(null),
        o = a.useRef(null),
        d = (0, E.bG)([e7.default], () => e7.default.getId()),
        c = (0, E.bG)([eG.Ay, tl.A], () => (0, eq.A)(eG.Ay, tl.A)),
        { enabled: h } = ew.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: f, isWithinThreshold: I } = (function () {
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
        g = (0, E.bG)([e9.A], () => e9.A.getChannel(m)),
        T = (0, E.bG)([tt.A], () => tt.A.getGuild(g?.guild_id)),
        [S, N] = (0, E.yK)([e1.A], () => [e1.A.getCurrentUserActiveStream(), e1.A.getStreamerActiveStreamMetadata()]),
        C = (0, E.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        R = g?.type === B.rbe.GUILD_SPACE ? null : C,
        L = (0, E.bG)([ev.A, eI.A, eN.Ay], () => {
            let e = (0, tZ.ny)(ev.A.getMainFrame());
            return null != e && (0, eS.A)(e) ? null : e;
        }),
        P = (0, E.bG)([tt.A, tn.A], () => null == p || eK.vz(p, tt.A, tn.A, !1)),
        [M] = (0, ep.A)([
            (function () {
                if (null != N && null != N.id) return N.id;
                if (null != c) return c.id;
                if (null != R) return R.applicationId;
                if (null != L) return L.applicationId;
                if (null != f && null != f.id) return f.id;
            })(),
        ]),
        w =
            (function () {
                let { enabled: e } = v.h.useConfig({ location: "useCanGoLiveActivityFromActivityCard" }),
                    t = (0, E.bG)([b.Ay], D.sV);
                return e && t;
            })() &&
            (null != R || null != L),
        G = (0, E.bG)([b.Ay], () => (0, e$.A)(b.Ay) && (0, td.uF)()) || w,
        x = (0, E.bG)([ti.A], () => (null != d ? ti.A.findActivity(d, (e) => e.type === _.$.PLAYING) : null)),
        F = null != S && S.ownerId === d && S.state !== B.XYD.ENDED,
        V = (0, E.bG)([ts.default, tr.A], () => (null != g ? (0, eT.m1)(g, ts.default, tr.A) : void 0)),
        H = (function () {
            let { resolution: e, fps: t } = (0, E.cf)([e0.A], () => e0.A.getState()),
                n = (0, E.bG)([e1.A], () => e1.A.getCurrentUserActiveStream()?.guildId),
                i = (0, eJ.A)("useStreamQualityIndicator", n, e, t);
            if (i !== e3.on.RESOLUTION_720 || t === e3.kn.FPS_60) return `${(0, e3.zr)(i)} ${(0, e2.Bs)(t)}`;
        })(),
        [j, W] = a.useState(!1),
        Y = (0, E.bG)([eQ.A], () => eQ.A.getWindowOpen(B.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: K, analyticsLocations: $ } = (0, ec.Ay)(),
        {
            hasAlreadyLinked: X,
            canStartAuthorization: z,
            connectionApp: q,
            startAuthorization: Z,
            token: Q,
        } = (0, eA.RD)(M, { allowedFlows: [tz._.RPC, tz._.WEB] }),
        [J, ee] = a.useState(null),
        et = null != J,
        en = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (ee(M?.id ?? null), Z(...t));
            },
            [M?.id, Z],
        ),
        ei = eE.l.getConfig({ location: "ActivityPanelGameCard" }).enabled && (0, eh.e)(Q),
        er = !!X && !ei,
        ea = (0, O.Ay)(M?.id);
    a.useEffect(() => {
        null != M && ea !== M?.id && ee(null);
    }, [M, ea]);
    let es = (0, u.K)((e) => {
            e &&
                null != q &&
                k.default.track(B.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: c?.id ?? null, application_id: q.id });
        }),
        el = a.useMemo(() => {
            let e = c?.id ?? f?.id;
            return null != e ? nT[e] : void 0;
        }, [c?.id, f?.id]),
        ed = (0, E.bG)([te.A], () => null != el && te.A.isMember(el), [el]),
        eu = h && null != el && !ed && (null != c || I) ? el : void 0,
        e_ = !(0, E.bG)([b.Ay], () => b.Ay.supports(nN.O5.VIDEO)) && (0, td.uF)(),
        ef = null != c && (G || z || e_) && (!F || N?.pid != null),
        [em, eg] = (function (e) {
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
                h = !E && !o && null == r && l && null != t,
                { shouldShow: f, markAsDismissed: I } = (0, eW.D3)({
                    application: t,
                    disabled: !h,
                    dismissibleContent: A.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: eo.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eW.Yb,
                }),
                p = !E && null != r && o,
                m = a.useMemo(() => {
                    if (E || f) return [];
                    let e = [];
                    return (
                        o && d && tJ(t, n, i) && null == i && e.push(A.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(A.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, E, d, i, c, o, f]),
                [g, T] = (0, eL.kn)(m, { groupName: eo.m.ACCOUNT_NAME_ZONE });
            return a.useMemo(() => {
                if (null != g)
                    switch (g) {
                        case A.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    (s(null), T(e));
                                },
                            ];
                        case A.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, T];
                        default:
                            return [null, T];
                    }
                return f ? [0, I] : p ? [1, () => s(null)] : [null, () => {}];
            }, [I, T, s, f, p, g]);
        })({
            application: M,
            activity: x,
            embeddedActivity: R,
            connectingGameId: J,
            setConnectingGameId: ee,
            canStartAuthorization: z,
            hasAlreadyLinked: er,
            didStartAuthorization: et,
            gameCommunityGuildId: eu,
        }),
        eC = null != f && (1 === em || (I && (0 === em || 3 === em))) ? f : null,
        eO = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: a } = n;
                return (0, r.jsx)(nm, {
                    isStreaming: F,
                    application: e,
                    game: t,
                    onClickNotSharing: () => W(!0),
                    isForceShowSharingPopout: j,
                    setIsForceShowSharingPopout: W,
                    ref: s,
                    popoutTargetRef: i,
                    isCurrentlyRunningGame: a,
                });
            },
            [j, F],
        ),
        eR = a.useMemo(
            () =>
                ef
                    ? eO(M, c, { isGameRunning: !0 })
                    : null != R && null != M && tJ(M, x, R)
                      ? (0, r.jsx)(nU, {
                            application: M,
                            embeddedActivity: R,
                            channel: g,
                            channelName: V,
                            guildForConnectedChannel: T,
                            isForceShowSharingPopout: j,
                            setIsForceShowSharingPopout: W,
                            accountLinkUpsellTargetRef: s,
                            activityPopoutTargetRef: i,
                            isActivityPopoutOpen: Y,
                        })
                      : null != L &&
                          null != M &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: M, frame: L })
                        ? (0, r.jsx)(nw, {
                              application: M,
                              accountLinkUpsellTargetRef: s,
                              frame: L,
                              isActivityPopoutOpen: Y,
                          })
                        : F
                          ? (0, r.jsx)(nG, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: s,
                                streamQualityIndicator: H,
                            })
                          : null != eC
                            ? eO(M, eC, { isGameRunning: !1 })
                            : null,
            [N, x, M, V, g, R, L, T, Y, j, F, ef, eC, eO, c, H],
        );
    return null == eR
        ? null
        : (0, r.jsx)("div", {
              className: l()(nO.nd, n),
              ref: i,
              children: (0, r.jsxs)("div", {
                  className: nO.rf,
                  children: [
                      eR,
                      (0, r.jsx)(t0, {
                          stream: S,
                          canGoLive: G,
                          canGoLiveActivity: w,
                          isStreaming: F,
                          channel: g,
                          canStream: P,
                          runningGame: c,
                          activity: x,
                          application: M,
                          embeddedActivity: R,
                          frame: L,
                          analyticsContext: t,
                          inviteButtonRef: o,
                          accountLinkButtonRef: es,
                          canStartAuthorization: z,
                          startAuthorization: en,
                          hasAlreadyLinked: er,
                          connectionApp: q,
                      }),
                      (0, r.jsx)(nP, {
                          popover: em,
                          dismissPopover: eg,
                          application: M,
                          connectionApp: q,
                          activity: x,
                          runningGame: c,
                          hasAlreadyLinked: er,
                          didStartAuthorization: et,
                          startAuthorization: en,
                          accountLinkUpsellTargetRef: s,
                          inviteButtonRef: o,
                          accountLinkButtonRef: es,
                          gameCommunityGuildId: eu,
                          parentAnalyticsLocation: K,
                          analyticsLocations: $,
                          analyticsContext: t,
                      }),
                  ],
              }),
          });
});
