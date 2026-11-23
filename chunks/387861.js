(n.d(t, { A: () => n8 }), n(321073));
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
    b = n(988468),
    v = n(379848),
    P = n(832248),
    M = n(201805),
    U = n(253932),
    w = n(843010),
    G = n(894768),
    x = n(129230),
    k = n(821609),
    F = n(652215),
    B = n(834730),
    V = n(935154),
    H = n(143129),
    j = n(315710),
    W = n(404778),
    Y = n(331322),
    K = n(534514),
    $ = n(265872),
    X = n(827827),
    z = n(481045),
    q = n(966756),
    Q = n(792996),
    J = n(293686);
function Z(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: J.K2,
        children: (0, r.jsx)(k.$, {
            variant: "primary",
            size: "sm",
            text: Q.intl.string(q.default.Poezn1),
            onClick: () => {
                (t(), (0, X.A)({ nextStatus: F.clD.ONLINE }));
            },
            fullWidth: !0,
        }),
    });
}
function ee(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, E.bG)([G.A], () => G.A.getStatus());
    return (0, r.jsxs)("div", {
        className: J.E3,
        children: [
            (0, r.jsxs)("div", {
                className: J.fu,
                children: [
                    (0, r.jsx)(B.E, {
                        variant: "body-sm/medium",
                        color: "text-strong",
                        children: Q.intl.string(q.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: J.$v,
                            children: [
                                (0, r.jsx)(V.nW, { status: F.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(B.E, {
                                    variant: "body-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === F.clD.INVISIBLE
                                            ? Q.intl.string(q.default.a3AofS)
                                            : Q.intl.string(Q.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(H.d, {
                onChange: (e) => {
                    (U.tz.updateSetting(e), n && (0, X.A)({ nextStatus: e ? F.clD.ONLINE : F.clD.INVISIBLE }));
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
        (0, r.jsx)("div", { className: J.iE, ref: n, children: (0, r.jsx)("div", { className: J.Qs, children: t }) })
    );
}
function en(e) {
    let { closePopout: t } = e,
        n = U.tz.useSetting();
    return (0, r.jsxs)(et, {
        children: [
            (0, r.jsx)(ee, { showCurrentGame: n }),
            (0, r.jsx)(B.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: Q.intl.string(q.default["7cfFob"]),
            }),
            (0, r.jsx)(W.c, { className: J.yF }),
            (0, r.jsx)(z.qA, { onClosePopout: t }),
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
                        variant: "heading-xs/semibold",
                        color: "text-strong",
                        className: J._M,
                        children: Q.intl.string(q.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: J.$v,
                        children: [
                            (0, r.jsx)(V.nW, { status: F.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(B.E, {
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                children: Q.intl.string(q.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(B.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: Q.intl.string(q.default.Yl0mh4),
            }),
            (0, r.jsx)(Z, { closePopout: t }),
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
                variant: "body-sm/normal",
                color: "text-subtle",
                children: Q.intl.string(q.default["7cfFob"]),
            }),
            (0, r.jsx)(W.c, { className: J.yF }),
            (0, r.jsx)(z.qA, { onClosePopout: t }),
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
                        title: Q.intl.string(q.default.vxVbGP),
                        body: [Q.intl.string(q.default["7cfFob"])],
                        action: {
                            text: Q.intl.string(q.default.k4tCg2),
                            onClick: () => {
                                U.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: Q.intl.string(Q.t["ZrN+DT"]), onClick: z.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: Q.intl.string(q.default.qKDqet),
                        body: [Q.intl.string(q.default.Yl0mh4)],
                        action: {
                            text: Q.intl.string(q.default.Poezn1),
                            onClick: () => {
                                (0, X.A)({ nextStatus: F.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: Q.intl.string(q.default["6cA8HZ"]),
                        body: [Q.intl.string(q.default["7cfFob"])],
                        action: {
                            text: Q.intl.string(q.default.k4tCg2),
                            onClick: () => {
                                (U.tz.updateSetting(!0), (0, X.A)({ nextStatus: F.clD.ONLINE }));
                            },
                        },
                        textLink: { text: Q.intl.string(Q.t["ZrN+DT"]), onClick: z.L7 },
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
        children: () => (0, r.jsx)(I.D, { innerRef: c, onClick: i, children: l }),
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
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, M.c9)(),
                r = U.tz.useSetting(),
                a = (0, w.G)(),
                s = (0, E.bG)([G.A], () => G.A.getStatus()),
                { isOpen: l } = (0, P.A)();
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
    let d = n || l ? [] : [A.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(v.Ay, {
        contentTypes: d,
        children: (e) => {
            let { visibleContent: a, markAsDismissed: l } = e,
                d = a === A.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
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
    eE = n(660298),
    eA = n(382034),
    ef = n(627363),
    eh = n(587895),
    eI = n(429913),
    ep = n(568598),
    em = n(384059),
    eg = n(47167),
    eT = n(566870),
    eS = n(260498),
    eN = n(522265),
    eC = n(104299),
    eO = n(404374),
    eR = n(263775),
    eL = n(197184),
    ey = n(747180),
    eD = n(625180),
    eb = n(91242),
    ev = n(778858);
function eP(e) {
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
            title: Q.intl.formatToPlainString(Q.t.ry9SJw, { gameName: i }),
            body: Q.intl.string(Q.t.YPpOov),
            actions: [
                {
                    text: Q.intl.string(Q.t.RVfNGU),
                    onClick: () => {
                        (x.default.track(F.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: s,
                        }),
                            l(el.i.TAKE_ACTION),
                            ev.A.joinGuild(s, { source: F.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL }));
                    },
                },
            ],
        })
    );
}
var eM = n(945810);
let eU = (0, eM.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ew = n(644727),
    eG = n(927813);
let ex = ew.Ay.getRunningGames(),
    ek = [];
class eF extends E.Ay.Store {
    initialize() {
        this.syncWith([ew.Ay], () =>
            (function () {
                let e = ew.Ay.getRunningGames();
                if (ex === e) return !1;
                let t = ex.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((ex = e), 0 === t.length)) return !1;
                ek = [...ek, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return ek;
    }
    getLastPreviouslyRunningGame() {
        return ek[ek.length - 1] ?? null;
    }
}
let eB = new eF(m.h, {}),
    eV = 5 * eG.A.Millis.MINUTE;
var eH = n(769015),
    ej = n(334074),
    eW = n(454908),
    eY = n(279250),
    eK = n(880144),
    e$ = n(277680),
    eX = n(118277),
    ez = n(905552),
    eq = n(95035),
    eQ = n(293432),
    eJ = n(507756),
    eZ = n(929921),
    e0 = n(616356),
    e1 = n(650338),
    e2 = n(753070),
    e3 = n(900795);
function e6(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(B.E, { className: l()({ [e3.Q]: null == n }, t), color: n, ...i });
}
var e5 = n(976860),
    e8 = n(95701),
    e4 = n(46653),
    e7 = n(734057),
    e9 = n(184989),
    te = n(71393),
    tt = n(576705),
    tn = n(290863),
    ti = n(994500),
    tr = n(309010),
    ta = n(287809),
    ts = n(157257),
    tl = n(975571),
    to = n(723702);
let td = (0, eM.mj)({
    name: "2026-11-cross-platform-game-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tc = n(994314),
    tu = n(485599),
    t_ = n(141628),
    tE = n(192308),
    tA = n(687966),
    tf = n(959988),
    th = n(183623),
    tI = n(241541),
    tp = n(70688),
    tm = n(34188),
    tg = n(942857),
    tT = n(646865),
    tS = n(988534),
    tN = n(55730),
    tC = n(521588),
    tO = n(164636),
    tR = n(650684),
    tL = n(176781),
    ty = n(442433),
    tD = n(42473),
    tb = n(419490),
    tv = n(572164),
    tP = n(489496),
    tM = n(464132),
    tU = n(414405);
function tw(e) {
    (0, ty.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e(666601), n.e(344751)]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tG = function (e) {
    let { isActivity: t = !1 } = e,
        { parentAnalyticsLocation: n } = (0, ed.Ay)(),
        i = (0, tv.E)(),
        a = (0, tO.bG)([tb.Ay], () => tb.Ay.getIsAtMaxSaveClipOperations()),
        { tooltip: s, clipsSourceAttached: l } = (0, tU.A)({ isActivity: t }),
        o = "auto" === (0, tM.U)().value;
    return i
        ? (0, r.jsx)(tD.A, {
              disabled: a || !l,
              tooltipText: s,
              onClick: () => {
                  ((0, tP.l0)(), (0, em.XJ)(n, em.OP.CLIP));
              },
              onContextMenu: tw,
              icon: o ? tR.ClipsAutoIcon : tL.ClipsIcon,
          })
        : null;
};
var tx = n(457827),
    tk = n(907878),
    tF = n(196736);
let tB = (0, eM.mj)({
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
        title: Q.intl.formatToPlainString(tj.default.k9KZ2L, { gameName: t }),
        body: Q.intl.string(tj.default.gOrBCw),
        ctaText: Q.intl.string(tj.default.sElzfG),
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
              (0, tN.A)(t, F.jUm.JOIN))
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
            inviteButtonRef: T,
            accountLinkButtonRef: S,
            startAuthorization: N,
            canStartAuthorization: C,
            hasAlreadyLinked: O,
            connectionApp: R,
        } = e,
        { parentAnalyticsLocation: L, analyticsLocations: y } = (0, ed.Ay)(),
        b = (0, tq.A)(p?.id),
        v = t6(p, I, A),
        P = (0, tF.H)({ location: "activity-panel" }),
        M = (0, E.bG)([tr.Ay], () => null != tr.Ay.getVoiceChannelId()),
        U = (0, E.bG)([tJ.A], () => tJ.A.hasConsented(F.YAq.PERSONALIZATION)),
        w = P && U && null != (t = _?.id) && tH.has(t),
        G = a.useCallback(() => {
            (d()(null != I, "Received null activity"),
                x.default.track(F.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "invite_to_game",
                    game_id: _?.id ?? null,
                    application_id: I.application_id,
                }),
                (0, em.XJ)(L, em.OP.INVITE),
                x.default.track(F.HAw.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: I.application_id,
                    location: m.location,
                }),
                (0, g.qf)(I, !1));
        }, [I, m, L, _]),
        k = a.useCallback(
            (e, t) => () => {
                ((0, em.XJ)(L, em.OP.LEAVE_ACTIVITY), (0, tS.d)({ location: t, applicationId: e, showFeedback: !0 }));
            },
            [L],
        ),
        B = a.useCallback(
            (e) => () => {
                ((0, em.XJ)(L, em.OP.LEAVE_ACTIVITY), (0, tx.r)(e));
            },
            [L],
        ),
        V = a.useCallback(() => {
            (0, tK.A)(i);
        }, [i]),
        H = a.useCallback(() => {
            (0, tE.mM)(async () => {
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
                        sourcePID: (0, to.uF)() ? _?.pid : void 0,
                        selectSource: null != tr.Ay.getVoiceChannelId(),
                        analyticsLocations: y,
                    });
            });
        }, [_, y]),
        j = null == _ && l && (null != A || null != f),
        W = a.useCallback(() => {
            let e = (0, D.YX)();
            null == e
                ? H()
                : (0, tE.mM)(async () => {
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
                              selectSource: null != tr.Ay.getVoiceChannelId(),
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
            let t = F.BVt.COLLECTIBLES_SHOP_WITH_TAB(t0.G2.GAME_SERVERS);
            (0, e5.pX)(null != e ? `${t}&${t0.tD}=${e}` : t);
        }, [_?.id]),
        q = a.useRef(null),
        [J, Z] = a.useState(!1);
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
            ? (0, r.jsx)(t7, { gameName: X, runningGameId: _?.id, isGameServerHostingInShopEnabled: P, onClick: z })
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
                          icon: tA.GameControllerIcon,
                          iconForeground: Y?.isActive === !0 ? t3.Q6 : null,
                      }),
                  }),
        ei = (function () {
            let e, t, n;
            if ((null == _ && null != A && !(0, tT.f)() && !j) || (!o && !s)) return null;
            let i = null;
            return (
                o
                    ? ((e = !1),
                      (t = () => {
                          (V(), (0, em.XJ)(L, em.OP.STREAM, !1));
                      }),
                      (n = tf.ScreenXIcon),
                      (i = Q.intl.string(Q.t.S5anIc)))
                    : u
                      ? M || (0, to.uF)()
                          ? ((e = !1),
                            (t = () => {
                                (j ? W() : H(), (0, em.XJ)(L, em.OP.STREAM, !0));
                            }),
                            (n = th.ScreenArrowIcon),
                            (i =
                                null != _
                                    ? Q.intl.formatToPlainString(Q.t.AB5gTy, { game: _.name })
                                    : j && null != p
                                      ? Q.intl.formatToPlainString(Q.t.AB5gTy, { game: p.name })
                                      : Q.intl.string(Q.t.FeUKeA)))
                          : ((e = !0), (t = null), (n = th.ScreenArrowIcon), (i = Q.intl.string(Q.t["2JQX8q"])))
                      : ((e = !0),
                        (t = null),
                        (n = th.ScreenArrowIcon),
                        null != c && (0, e8.gV)(c.type) && (i = Q.intl.string(Q.t.uQn9B8))),
                (0, r.jsx)("div", {
                    className: t3.IF,
                    children: (0, r.jsx)(tD.A, { tooltipText: i, disabled: e, onClick: t, icon: n }),
                })
            );
        })(),
        er =
            v && null == A
                ? (0, r.jsx)(tD.A, {
                      ref: T,
                      tooltipText: Q.intl.string(Q.t["hC/Zey"]),
                      onClick: G,
                      icon: tI.GroupPlusIcon,
                  })
                : null,
        ea =
            null == A
                ? null
                : (0, r.jsx)(tD.A, {
                      tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                      onClick: k(A.applicationId, A.location),
                      icon: tp.DoorExitIcon,
                  }),
        es =
            null == f || f.intent !== t1.sV.MAIN
                ? null
                : (0, r.jsx)(tD.A, {
                      tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                      onClick: B(f.id),
                      icon: tp.DoorExitIcon,
                  }),
        el =
            !C || O
                ? null
                : (0, r.jsx)(t8, {
                      runningGame: _,
                      startAuthorization: function () {
                          N({ analyticsLocations: y }) === tZ._M.RPC &&
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
                      title: Q.intl.string(Q.t.ULvRFd),
                      body: Q.intl.string(Q.t["HJJDr+"]),
                      targetElementRef: S,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                      shouldShow: J,
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
function t8(e) {
    let { runningGame: t, startAuthorization: n, connectionApp: i, ref: a } = e;
    return (0, r.jsx)(tD.A, {
        ref: a,
        onClick: () => {
            (x.default.track(F.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "link_account",
                game_id: t?.id ?? null,
                application_id: i?.id ?? null,
            }),
                n());
        },
        icon: t_.ExperimentalGameControllerLinkIcon,
        tooltipText: Q.intl.string(Q.t.sbdnpw),
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
        { isQuestBarEmpty: E, hasLoadedQuestBar: A } = (0, M.c9)(),
        f = d && null != l && null != s && !_ && E && A,
        [h, I] = (0, eR.kn)(f && null != l ? [l] : [], { bypassAutoDismiss: !0 }),
        [p, m] = (0, eR.kn)(d ? [o] : [], { bypassAutoDismiss: !0 }),
        g = a.useCallback(() => {
            (I(el.i.TAKE_ACTION), m(el.i.TAKE_ACTION), n());
        }, [I, m, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: t3.IF,
                children: [
                    (0, r.jsx)("div", { className: t3.uD, children: (0, r.jsx)("div", { className: t3.Z9 }) }),
                    (0, r.jsx)(tD.A, { ref: c, tooltipText: t, onClick: g, icon: tA.GameControllerIcon }),
                    p === o && (0, r.jsx)(tC.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != h && null != s && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: m }),
        ],
    });
}
function t7(e) {
    let { gameName: t, runningGameId: n, isGameServerHostingInShopEnabled: i, onClick: a } = e,
        s = (function (e) {
            let { location: t } = e;
            return tB.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(t4, {
        tooltipText: Q.intl.formatToPlainString(tj.default.oZ4ZFn, { gameName: t }),
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
                    (a(), s(el.i.TAKE_ACTION), l(el.i.TAKE_ACTION));
                },
                onClose: () => s(el.i.USER_DISMISS),
            });
        },
    });
}
function t9(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tQ.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tQ.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            (x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s());
        }, [t, s]);
    return (0, r.jsx)(tD.A, {
        tooltipText: Q.intl.string(Q.t.vyaWs7),
        onClick: l,
        onMouseDown: i,
        icon: tm.ShopIcon,
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
            (0, r.jsx)(B.E, {
                className: nc.P_,
                variant: "body-xs/medium",
                color: "none",
                children: Q.intl.string(Q.t.jfrLLb),
            }),
            (0, r.jsx)(i, { className: nc.Kk, size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        ],
    });
}
var n_ = n(734066),
    nE = n(424739),
    nA = n(707116),
    nf = n(28863),
    nh = n(780964),
    nI = n(766075),
    np = n(271597),
    nm = n(683825);
let ng = [A.M.AUTOCLIPPING_EARLY_ACCESS_FIRST_CALL_EDUCATION],
    nT = [];
function nS(e) {
    let { targetElementRef: t } = e,
        { value: n } = (0, tM.U)(),
        i = (0, E.bG)([ta.default], () => (0, n_.qj)(ta.default.getCurrentUser())),
        a = "off" === n;
    return !__OVERLAY__ && ("auto" === n || (a && i)) ? (0, r.jsx)(nN, { targetElementRef: t, isOff: a }) : null;
}
function nN(e) {
    let { targetElementRef: t, isOff: n } = e,
        i = (0, nE.H)("ClipsFirstCallEducationPopover"),
        [a, s] = (0, eR.kn)(i ? ng : nT, { bypassAutoDismiss: !0 });
    if (null == a) return null;
    function l() {
        (s(el.i.INDIRECT_ACTION), (0, nI.openUserSettings)(nh.X.CLIPS_PANEL));
    }
    let o = n
        ? {
              title: Q.intl.string(nm.default["+ASaTr"]),
              body: Q.intl.string(nm.default.VJdv2W),
              action: {
                  text: Q.intl.string(nm.default.lAMNaO),
                  onClick: function () {
                      (s(el.i.TAKE_ACTION), requestAnimationFrame(() => t.current?.click()));
                  },
              },
          }
        : {
              title: Q.intl.string(nm.default.OyFpJy),
              body: [
                  Q.intl.format(nm.default.I0bdwM, {
                      settingsHook: (e, t) => (0, r.jsx)(nf.Anchor, { onClick: l, children: e }, t),
                  }),
              ],
              action: {
                  text: Q.intl.string(nm.default.AshjCb),
                  variant: "secondary",
                  onClick: function () {
                      (s(el.i.TAKE_ACTION), (0, np.p)());
                  },
              },
          };
    return (0, r.jsx)(h.A, {
        targetElementRef: t,
        shouldShow: !0,
        position: "top",
        alignmentStrategy: "edge",
        align: "left",
        caretConfig: { align: "start" },
        gradientColor: "nitro-pink",
        badge: { type: "early_access", variant: "inverted", icon: p.NitroWheelIcon },
        title: o.title,
        body: o.body,
        actions: [o.action],
        onRequestClose: () => s(el.i.USER_DISMISS),
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
        { value: s } = (0, tM.U)(),
        o = (0, E.bG)([ta.default], () => (0, n_.qj)(ta.default.getCurrentUser())),
        d = (0, nA.Y)(),
        c = (0, nA.T)(),
        u = o ? ("off" === s ? nm.default.RfYFQu : "manual" === s ? nm.default.iHA2eT : null) : null,
        [_, f] = (0, eR.kn)(__OVERLAY__ || null == u ? nU : nM, { bypassAutoDismiss: !0 }),
        h = _ === A.M.AUTOCLIPPING_EARLY_ACCESS_RTC_NUDGE_ACKNOWLEDGMENT && null != u ? Q.intl.string(u) : null;
    function p() {
        return (0, r.jsx)(nr.e, { shortcut: c, className: l()(nP.oH, nP.m8), keyClassName: nP.Bj }, "shortcut");
    }
    let m = d;
    c.length > 0 && "auto" === s
        ? (m = (0, r.jsxs)(r.Fragment, {
              children: [
                  Q.intl.string(nm.default["6ZXEjB"]),
                  (0, r.jsx)("span", { className: nP.YW, "aria-hidden": !0, children: "\xb7" }),
                  p(),
              ],
          }))
        : c.length > 0 &&
          "manual" === s &&
          (m = (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("span", {
                      className: nP.zV,
                      children: Q.intl.format(nm.default.Dd1dUI, { shortcut: c, shortcutHook: p }),
                  }),
                  (0, r.jsx)("span", { className: nP.hl, children: Q.intl.string(nm.default.ms4ibY) }),
              ],
          }));
    let g = t ? na.ChevronSmallUpIcon : ns.ChevronSmallDownIcon;
    return (0, r.jsxs)("div", {
        className: nP.ON,
        children: [
            (0, r.jsx)(nl.m, {
                text: Q.intl.string(nm.default.Hxldbz),
                shouldShow: !t,
                children: (0, r.jsx)(I.D, {
                    innerRef: e,
                    onClick: function (e) {
                        (null != h && f(el.i.TAKE_ACTION),
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
                    "aria-label": h ?? d,
                    "aria-haspopup": "menu",
                    "aria-expanded": t,
                    className: l()(nP.d4, { [nP.pS]: t }),
                    children:
                        null != h
                            ? (0, r.jsx)(B.E, {
                                  variant: "body-xs/medium",
                                  color: "text-link",
                                  className: nP.UX,
                                  tag: "div",
                                  children: h,
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(B.E, {
                                          variant: "body-xs/medium",
                                          color: "none",
                                          className: nP.UX,
                                          tag: "div",
                                          children: m,
                                      }),
                                      (0, r.jsx)(g, {
                                          size: "xxs",
                                          color: "currentColor",
                                          className: nP.ql,
                                          "aria-hidden": !0,
                                      }),
                                  ],
                              }),
                }),
            }),
            (0, r.jsx)(nS, { targetElementRef: e }),
        ],
    });
}
function nG(e) {
    let { legacyHint: t } = e;
    return (0, nE.H)("autoclips_ea:rtc_mode_row") ? (0, r.jsx)(nw, {}) : t;
}
function nx(e) {
    let { isCurrentlyRunningGame: t, gamePid: n, onClickNotSharing: i, isSharingPopoutOpen: a } = e,
        s = (0, E.bG)([nD.Ay], () => nD.Ay.getKeybindForAction(F.hCu.SAVE_CLIP)),
        o = null != s && s.shortcut.length > 0 ? nb.dI(s.shortcut, !0) : null,
        d = (0, tv.E)(),
        c = (0, n_.W1)(),
        u = U.tz.useSetting(),
        _ = (0, E.bG)([G.A], () => G.A.getStatus()),
        A = !__OVERLAY__ && (!u || _ === F.clD.INVISIBLE),
        f = d && t && null != o,
        h = (0, E.bG)([nO.A, ew.Ay, ny.A], () => {
            let e = nO.A.getCapturingApp(),
                t = (0, nC.V)(ew.Ay, ny.A);
            return null == e || null == n || t?.windowHandle == null || t.pid !== n ? null : e;
        });
    if (t) {
        if (null != h)
            return (0, r.jsxs)(B.E, {
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
                        children: Q.intl.format(nv.default["Q/RPC2"], { appName: h.appName }),
                    }),
                    (0, r.jsx)(nd.Q, {
                        text: Q.intl.string(nv.default.VIjH42),
                        "aria-label": Q.intl.formatToPlainString(nv.default["Tl/1iM"], { appName: h.appName }),
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
            ? (0, r.jsx)(B.E, {
                  variant: "body-xs/medium",
                  color: "text-subtle",
                  className: nP.En,
                  tag: "div",
                  children: Q.intl.format(nm.default.ESZwQX, {
                      keybind: o,
                      keybindHook: () => (0, r.jsx)(nr.e, { shortcut: o, className: nP.oH, keyClassName: nP.Bj }),
                  }),
              })
            : null;
        return !__OVERLAY__ && c ? (0, r.jsx)(nG, { legacyHint: e }) : e;
    }
    return (0, r.jsx)(B.E, { variant: "body-xs/medium", color: "text-subtle", children: Q.intl.string(Q.t.W4N1ru) });
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
        children: (0, r.jsx)(tu.A, { className: nk.mO, children: t }),
    });
}
function nB(e) {
    let { gameRecord: t, application: n, game: i, showLiveBadge: a, ref: s } = e;
    return (0, r.jsxs)("div", {
        className: nk.f9,
        children: [
            (0, r.jsx)(eH.A, { className: nk.Gt, game: t ?? n, pid: i?.pid, ref: s }),
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
              "aria-label": Q.intl.formatToPlainString(Q.t["8QLQB+"], { gameName: t ?? "" }),
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
            null != t ? t.name : null != n ? n.name : null != i ? i.name : Q.intl.string(Q.t["UQMV/E"]));
    return (
        (s = U.tz.useSetting()),
        (l = (0, E.bG)([G.A], () => G.A.getStatus())),
        (0, a.useEffect)(() => {
            x.default.track(F.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: s,
                status: l,
                rtc_popout_available: !s || l === F.clD.INVISIBLE,
            });
        }, [s, l]),
        (0, r.jsxs)("div", {
            className: nk.cm,
            children: [
                (0, r.jsx)(nV, { name: m, gameRecord: p, application: d, game: c, isStreaming: o, ref: f }),
                (0, r.jsx)(eo, {
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
        return (0, r.jsx)(eC.A, {
            applicationId: e.id,
            name: e.name,
            glyphSize: (0, eN.w)(32).glyphSize,
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
        { data: A, isLoading: I } = (0, eW.I)(i?.getCanonicalGameId()),
        p = s ? l : (A ?? i),
        m = R.A.find((e) => null != p && e.migrationData?.replacedBy === p.id),
        g = null == p || I || E;
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
            { disableTrack: g },
        ),
        g)
    )
        return null;
    let T = Q.intl.formatToPlainString(Q.t.hUbQT2, { gameName: p.name }),
        S = Q.intl.string(Q.t.jynBQ5);
    s && (S = Q.intl.string(n$.default["2cOIOr"]));
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
            (T = Q.intl.formatToPlainString(n$.default.dPuaZE, { applicationName: p.name })),
            (n = { text: Q.intl.string(Q.t.hvVgAZ), link: m?.migrationData?.helpCenterLink, external: !0 })),
        (0, r.jsx)(h.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: f.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
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
            onRequestClose: () => o(el.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: N,
        })
    );
}
function nZ(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = Q.intl.string(Q.t.MxAlrB),
        l = Q.intl.string(Q.t["/UTTEg"]),
        o = [
            {
                text: Q.intl.string(Q.t.aRIFWD),
                onClick: () => {
                    (i(el.i.TAKE_ACTION), window.open(tl.A.getArticleURL(F.MVz.IN_GAME_FEATURES), "_blank"));
                },
            },
        ];
    return (
        n &&
            ((s = Q.intl.string(n$.default.ublzTG)),
            (l = Q.intl.string(n$.default.JgM2xu)),
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
            onRequestClose: () => i(el.i.USER_DISMISS),
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
        title: Q.intl.string(Q.t["0l2pEt"]),
        body: Q.intl.string(Q.t["DSZUK/"]),
        targetElementRef: a,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(el.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: Q.intl.string(Q.t.YdkBCH),
                onClick: () => {
                    (i(el.i.TAKE_ACTION),
                        d()(null != t, "Received null activity"),
                        x.default.track(F.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, em.XJ)(s, em.OP.INVITE),
                        x.default.track(F.HAw.OPEN_MODAL, {
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
            isEligible: g,
            displayedApp: T,
            isLoading: S,
        } = (function (e) {
            let { connectionApp: t } = e,
                { data: n, isLoading: i } = (0, ef.YY)(t?.parentId ?? t?.id);
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
            return (0, r.jsx)(nJ, {
                application: i,
                connectionApp: s,
                isEligibleForIncentivizedAccountLinking: g,
                incentivizedAccountLinkingDisplayedApp: T,
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
                (0, r.jsx)(eP, {
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
    return (0, r.jsx)(tc.A, { children: t });
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
            S.A.channelListScrollTo(a.guild_id ?? F.ME, a.id),
            !E &&
                ((0, e8.gV)(a.type) &&
                    T.A.selectParticipant(
                        a.id,
                        (0, ep.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, e8.pQ)(a.type) && (0, L.gk)(nj.Gd.PANEL)));
    }
    null != l && null != a
        ? ((t = F.BVt.CHANNEL(l.id, a.id)), (f = `${f} / ${l.name}`))
        : null != a && (t = F.BVt.CHANNEL(F.ME, a.id));
    let I = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eH.A, { className: nX.Gt, game: n, size: eH.M.SMALL, ref: u, unknownGameIconFallback: nQ(n) }),
            (0, r.jsx)(eo, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nX.pq,
                    children: [
                        (0, r.jsx)(eq.A, {
                            href: t,
                            onClick: function () {
                                (h(), E && m.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
                            },
                            children: (0, r.jsx)(tu.A, { className: nX._W, children: n.name }),
                        }),
                        null != a && (0, e8.pQ)(a.type)
                            ? (0, r.jsx)(eq.A, {
                                  href: t,
                                  onClick: h,
                                  children: (0, r.jsx)(tc.A, { className: nX.Ix, children: f }),
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
                (0, r.jsx)(eH.A, {
                    className: nX.Gt,
                    game: n,
                    size: eH.M.SMALL,
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
                                    let e = (0, eL.A)(t.surface);
                                    null != e && (0, e5.pX)(F.BVt.CHANNEL((0, ey.A)(t.surface) ?? F.ME, e));
                                    return;
                                }
                                eD.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: t1.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nX.rB,
                            children: (0, r.jsx)(tu.A, { className: nX._W, children: n.name }),
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
        { title: a, sanitizedTitle: s } = (0, e$.A)(t);
    return (0, r.jsxs)("div", {
        className: nX.cm,
        ref: n,
        children: [
            (0, r.jsx)(eX.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nX.pq,
                children: [
                    (0, r.jsx)(tu.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nX.qi,
                            children: [
                                (0, r.jsx)(p.NitroWheelIcon, { size: "xxs", color: eO.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e6, { className: nX.s, variant: "footnote/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let n8 = (0, C.A)(function (e) {
    let { analyticsContext: t, className: n } = e,
        i = a.useRef(null),
        s = a.useRef(null),
        o = a.useRef(null),
        d = (0, E.bG)([e4.default], () => e4.default.getId()),
        c = (0, E.bG)([ew.Ay, ts.A], () => (0, ez.A)(ew.Ay, ts.A)),
        { enabled: f } = eU.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: h, isWithinThreshold: I } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, E.bG)([eB], () => eB.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (null == n || Date.now() - n.endedAt >= eV) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + eV - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [n]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let i = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i < eV };
        })(),
        p = (0, E.bG)([tr.Ay, e7.A], () => e7.A.getChannel(tr.Ay.getVoiceChannelId())),
        m = (0, E.bG)([y.Ay], () => y.Ay.getConnectedActivityChannelId()),
        g = (0, E.bG)([e7.A], () => e7.A.getChannel(m)),
        T = (0, E.bG)([te.A], () => te.A.getGuild(g?.guild_id)),
        [S, N] = (0, E.yK)([e0.A], () => [e0.A.getCurrentUserActiveStream(), e0.A.getStreamerActiveStreamMetadata()]),
        C = (0, E.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        R = g?.type === F.rbe.GUILD_SPACE ? null : C,
        L = (0, E.bG)([eb.A, eh.A, eS.Ay], () => {
            let e = (0, t1.ny)(eb.A.getMainFrame());
            return null != e && (0, eT.A)(e) ? null : e;
        }),
        v = (0, E.bG)([te.A, tt.A], () => null == p || eY.vz(p, te.A, tt.A, !1)),
        [P] = (0, eI.A)([
            (function () {
                if (null != N && null != N.id) return N.id;
                if (null != c) return c.id;
                if (null != R) return R.applicationId;
                if (null != L) return L.applicationId;
                if (null != h && null != h.id) return h.id;
            })(),
        ]),
        U = (0, E.bG)([b.Ay], D.sV) && (null != R || null != L),
        w = td.useConfig({ location: "ActivityPanelGameCard" }),
        G = null != c && !(0, to.uF)() && w.enabled,
        k = (0, E.bG)([b.Ay], () => (0, eK.A)(b.Ay) && ((0, to.uF)() || G), [G]) || U,
        B = (0, E.bG)([tn.A], () => (null != d ? tn.A.findActivity(d, (e) => e.type === _.$.PLAYING) : null)),
        V = null != S && S.ownerId === d && S.state !== F.XYD.ENDED,
        H = (0, E.bG)([ta.default, ti.A], () => (null != g ? (0, eg.m1)(g, ta.default, ti.A) : void 0)),
        j = (function () {
            let { resolution: e, fps: t } = (0, E.cf)([eZ.A], () => eZ.A.getState()),
                n = (0, E.bG)([e0.A], () => e0.A.getCurrentUserActiveStream()?.guildId),
                i = (0, eJ.A)("useStreamQualityIndicator", n, e, t);
            if (i !== e2.on.RESOLUTION_720 || t === e2.kn.FPS_60) return `${(0, e2.zr)(i)} ${(0, e1.Bs)(t)}`;
        })(),
        [W, Y] = a.useState(!1),
        K = (0, E.bG)([eQ.A], () => eQ.A.getWindowOpen(F.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: $, analyticsLocations: X } = (0, ed.Ay)(),
        {
            hasAlreadyLinked: z,
            canStartAuthorization: q,
            connectionApp: Q,
            startAuthorization: J,
            token: Z,
        } = (0, eE.RD)(P, { allowedFlows: [tZ._M.RPC, tZ._M.WEB] }),
        [ee, et] = a.useState(null),
        en = null != ee,
        ei = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (et(P?.id ?? null), J(...t));
            },
            [P?.id, J],
        ),
        er = e_.l.getConfig({ location: "ActivityPanelGameCard" }).enabled && (0, eA.e)(Z),
        ea = !!z && !er,
        es = (0, O.Ay)(P?.id);
    a.useEffect(() => {
        null != P && es !== P?.id && et(null);
    }, [P, es]);
    let eo = (0, u.K)((e) => {
            e &&
                null != Q &&
                x.default.track(F.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: c?.id ?? null, application_id: Q.id });
        }),
        ec = a.useMemo(() => {
            let e = c?.id ?? h?.id;
            return null != e ? nW[e] : void 0;
        }, [c?.id, h?.id]),
        eu = (0, E.bG)([e9.A], () => null != ec && e9.A.isMember(ec), [ec]),
        ef = f && null != ec && !eu && (null != c || I) ? ec : void 0,
        ep = !(0, E.bG)([b.Ay], () => b.Ay.supports(nK.O5.VIDEO)) && ((0, to.uF)() || G),
        em = null != c && (k || q || ep) && (!V || N?.pid != null),
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
                } = e,
                { isQuestBarEmpty: u, hasLoadedQuestBar: _ } = (0, M.c9)(),
                E = !_ || !u,
                f = !E && !o && null == r && l && null != t,
                { shouldShow: h, markAsDismissed: I } = (0, ej.D3)({
                    application: t,
                    disabled: !f,
                    dismissibleContent: A.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: el.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: ej.Yb,
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
                [g, T] = (0, eR.kn)(m, { groupName: el.m.ACCOUNT_NAME_ZONE });
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
                return h ? [0, I] : p ? [1, () => s(null)] : [null, () => {}];
            }, [I, T, s, h, p, g]);
        })({
            application: P,
            activity: B,
            embeddedActivity: R,
            connectingGameId: ee,
            setConnectingGameId: et,
            canStartAuthorization: q,
            hasAlreadyLinked: ea,
            didStartAuthorization: en,
            gameCommunityGuildId: ef,
        }),
        eO = null != h && (1 === eN || (I && (0 === eN || 3 === eN))) ? h : null,
        eL = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: a } = n;
                return (0, r.jsx)(nH, {
                    isStreaming: V,
                    application: e,
                    game: t,
                    onClickNotSharing: () => Y(!0),
                    isForceShowSharingPopout: W,
                    setIsForceShowSharingPopout: Y,
                    ref: s,
                    popoutTargetRef: i,
                    isCurrentlyRunningGame: a,
                });
            },
            [W, V],
        ),
        ey = a.useMemo(
            () =>
                em
                    ? eL(P, c, { isGameRunning: !0 })
                    : null != R && null != P && t6(P, B, R)
                      ? (0, r.jsx)(n3, {
                            application: P,
                            embeddedActivity: R,
                            channel: g,
                            channelName: H,
                            guildForConnectedChannel: T,
                            isForceShowSharingPopout: W,
                            setIsForceShowSharingPopout: Y,
                            accountLinkUpsellTargetRef: s,
                            activityPopoutTargetRef: i,
                            isActivityPopoutOpen: K,
                        })
                      : null != L &&
                          null != P &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: P, frame: L })
                        ? (0, r.jsx)(n6, {
                              application: P,
                              accountLinkUpsellTargetRef: s,
                              frame: L,
                              isActivityPopoutOpen: K,
                          })
                        : V
                          ? (0, r.jsx)(n5, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: s,
                                streamQualityIndicator: j,
                            })
                          : null != eO
                            ? eL(P, eO, { isGameRunning: !1 })
                            : null,
            [N, B, P, H, g, R, L, T, K, W, V, em, eO, eL, c, j],
        );
    return null == ey
        ? null
        : (0, r.jsx)("div", {
              className: l()(nX.nd, n),
              ref: i,
              children: (0, r.jsxs)("div", {
                  className: nX.rf,
                  children: [
                      ey,
                      (0, r.jsx)(t5, {
                          stream: S,
                          canGoLive: k,
                          canGoLiveActivity: U,
                          isStreaming: V,
                          channel: g,
                          canStream: v,
                          runningGame: c,
                          activity: B,
                          application: P,
                          embeddedActivity: R,
                          frame: L,
                          analyticsContext: t,
                          inviteButtonRef: o,
                          accountLinkButtonRef: eo,
                          canStartAuthorization: q,
                          startAuthorization: ei,
                          hasAlreadyLinked: ea,
                          connectionApp: Q,
                      }),
                      (0, r.jsx)(n1, {
                          popover: eN,
                          dismissPopover: eC,
                          application: P,
                          connectionApp: Q,
                          activity: B,
                          runningGame: c,
                          hasAlreadyLinked: ea,
                          didStartAuthorization: en,
                          startAuthorization: ei,
                          accountLinkUpsellTargetRef: s,
                          inviteButtonRef: o,
                          accountLinkButtonRef: eo,
                          gameCommunityGuildId: ef,
                          parentAnalyticsLocation: $,
                          analyticsLocations: X,
                          analyticsContext: t,
                      }),
                  ],
              }),
          });
});
