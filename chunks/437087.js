(n.d(t, { A: () => nx }), n(321073));
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(284009),
    d = n.n(o),
    c = n(562708),
    u = n(172218),
    _ = n(350835),
    E = n(17928),
    A = n(554146),
    h = n(116833),
    f = n(43105),
    I = n(939249),
    p = n(403581),
    T = n(73153),
    m = n(298990),
    g = n(367513),
    S = n(951001),
    N = n(492684),
    C = n(707606),
    O = n(475743),
    R = n(573648),
    L = n(795816),
    y = n(933958),
    D = n(260643),
    v = n(999926),
    b = n(756042),
    M = n(379848),
    P = n(832248),
    U = n(201805),
    w = n(253932),
    G = n(843010),
    x = n(461213),
    k = n(174459),
    F = n(821609),
    B = n(652215),
    V = n(834730),
    H = n(935154),
    j = n(193249),
    W = n(315710),
    Y = n(404778),
    K = n(331322),
    $ = n(297264),
    z = n(265872),
    X = n(827827),
    q = n(481045),
    Z = n(450216),
    Q = n(105292),
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
                (t(), (0, X.A)({ nextStatus: B.clD.ONLINE }));
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
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: Q.intl.string(Z.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: J.$v,
                            children: [
                                (0, r.jsx)(H.nW, { status: B.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(V.E, {
                                    variant: "text-xs/normal",
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
                    (w.tz.updateSetting(e), n && (0, X.A)({ nextStatus: e ? B.clD.ONLINE : B.clD.INVISIBLE }));
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
                variant: "text-sm/normal",
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
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: J._M,
                        children: Q.intl.string(Z.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: J.$v,
                        children: [
                            (0, r.jsx)(H.nW, { status: B.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(V.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: Q.intl.string(Z.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(V.E, {
                variant: "text-sm/normal",
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
                variant: "text-sm/normal",
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
                                (0, X.A)({ nextStatus: B.clD.ONLINE });
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
                                (w.tz.updateSetting(!0), (0, X.A)({ nextStatus: B.clD.ONLINE }));
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
    return (0, r.jsx)(z.Y, {
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
                { isOpen: l } = (0, P.A)();
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
    return (0, r.jsx)(M.Ay, {
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
    eA = n(206828),
    eh = n(805413),
    ef = n(627363),
    eI = n(587895),
    ep = n(429913),
    eT = n(568598),
    em = n(384059),
    eg = n(47167),
    eS = n(566870),
    eN = n(260498),
    eC = n(404374),
    eO = n(131607),
    eR = n(197184),
    eL = n(747180),
    ey = n(625180),
    eD = n(91242),
    ev = n(66834);
function eb(e) {
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
                            ev.A.joinGuild(s, { source: B.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL }));
                    },
                },
            ],
        })
    );
}
var eM = n(945810);
let eP = (0, eM.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eU = n(952818),
    ew = n(927813);
let eG = eU.Ay.getRunningGames(),
    ex = [];
class ek extends E.Ay.Store {
    initialize() {
        this.syncWith([eU.Ay], () =>
            (function () {
                let e = eU.Ay.getRunningGames();
                if (eG === e) return !1;
                let t = eG.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eG = e), 0 === t.length)) return !1;
                ex = [...ex, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return ex;
    }
    getLastPreviouslyRunningGame() {
        return ex[ex.length - 1] ?? null;
    }
}
let eF = new ek(T.h, {}),
    eB = 5 * ew.A.Millis.MINUTE;
var eV = n(769015),
    eH = n(334074),
    ej = n(454908),
    eW = n(279250),
    eY = n(880144),
    eK = n(277680),
    e$ = n(118277),
    ez = n(905552),
    eX = n(95035),
    eq = n(567249),
    eZ = n(507756),
    eQ = n(929921),
    eJ = n(616356),
    e0 = n(650338),
    e1 = n(753070),
    e2 = n(900795);
function e3(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(V.E, { className: l()({ [e2.Q]: null == n }, t), color: n, ...i });
}
var e5 = n(976860),
    e4 = n(95701),
    e6 = n(280450),
    e7 = n(734057),
    e8 = n(184989),
    e9 = n(71393),
    te = n(576705),
    tt = n(290863),
    tn = n(994500),
    ti = n(309010),
    tr = n(287809),
    ta = n(157257),
    ts = n(975571),
    tl = n(723702),
    to = n(994314),
    td = n(485599),
    tc = n(141628),
    tu = n(192308),
    t_ = n(959988),
    tE = n(183623),
    tA = n(241541),
    th = n(70688),
    tf = n(687966),
    tI = n(34188),
    tp = n(942857),
    tT = n(646865),
    tm = n(988534),
    tg = n(55730),
    tS = n(521588),
    tN = n(702841),
    tC = n(176781),
    tO = n(442433),
    tR = n(42473),
    tL = n(200542),
    ty = n(915725),
    tD = n(572164),
    tv = n(614584),
    tb = n(414405);
function tM(e) {
    (0, tO.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e("666601"), n.e("344751")]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tP = function (e) {
    let { isActivity: t = !1 } = e,
        { parentAnalyticsLocation: n } = (0, ec.Ay)(),
        i = (0, tD.E)(),
        a = (0, tN.bG)([ty.Ay], () => ty.Ay.getIsAtMaxSaveClipOperations()),
        { enableGamePanelEntrypoint: s } = tL.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: l, clipsSourceAttached: o } = (0, tb.A)({ isActivity: t });
    return s && i
        ? (0, r.jsx)(tR.A, {
              disabled: a || !o,
              tooltipText: l,
              onClick: () => {
                  ((0, tv.l0)(), (0, em.X)(n, em.O.CLIP));
              },
              onContextMenu: tM,
              icon: tC.x,
          })
        : null;
};
var tU = n(457827),
    tw = n(907878),
    tG = n(831617),
    tx = n(196736);
let tk = (0, eM.mj)({
        name: "2026-08-gsh-subs-activity-bar",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    tF = (0, eM.mj)({
        name: "2026-02-gsh-game-detection-upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var tB = n(610010),
    tV = n(475669),
    tH = n(135570);
function tj(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, E.bG)([tV.A], () => null != a && tV.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
    tK = n(473161),
    t$ = n(453774),
    tz = n(44724),
    tX = n(153488),
    tq = n(942370),
    tZ = n(758836),
    tQ = n(165610),
    tJ = n(79958);
function t0(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === _.$.PLAYING &&
              (0, tg.A)(t, B.jUm.JOIN))
    );
}
let t1 = a.memo(function (e) {
    let {
            stream: t,
            canGoLive: i,
            canGoLiveActivity: s = !1,
            guildId: l,
            isStreaming: o,
            channel: c,
            canStream: u,
            runningGame: _,
            embeddedActivity: h,
            frame: I,
            activity: p,
            application: T,
            analyticsContext: g,
            inviteButtonRef: S,
            accountLinkButtonRef: N,
            startAuthorization: C,
            canStartAuthorization: O,
            hasAlreadyLinked: R,
            connectionApp: L,
        } = e,
        { parentAnalyticsLocation: y, analyticsLocations: v } = (0, ec.Ay)(),
        b = (0, t$.A)(T?.id),
        M = t0(T, p, h),
        { enabled: P } = tF.useConfig({ location: "activity-panel" }),
        U = (0, tx.H)({ location: "activity-panel" }),
        w = (0, tB.Bp)("activity-panel"),
        G = (0, tG.C$)(l ?? void 0, "activity-panel"),
        x = (0, E.bG)([tX.A], () => tX.A.hasConsented(B.YAq.PERSONALIZATION)),
        F = (0, tB.TF)(_?.id, { shouldFetch: w || G }),
        V = U && x && (0, tB.k0)(_?.id),
        H = P && x && F,
        j = H && w,
        W = H && G,
        Y = a.useCallback(() => {
            (d()(null != p, "Received null activity"),
                k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "invite_to_game",
                    game_id: _?.id ?? null,
                    application_id: p.application_id,
                }),
                (0, em.X)(y, em.O.INVITE),
                k.default.track(B.HAw.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: p.application_id,
                    location: g.location,
                }),
                (0, m.qf)(p, !1));
        }, [p, g, y, _]),
        K = a.useCallback(
            (e, t) => () => {
                ((0, em.X)(y, em.O.LEAVE_ACTIVITY), (0, tm.d)({ location: t, applicationId: e, showFeedback: !0 }));
            },
            [y],
        ),
        $ = a.useCallback(
            (e) => () => {
                ((0, em.X)(y, em.O.LEAVE_ACTIVITY), (0, tU.r)(e));
            },
            [y],
        ),
        z = a.useCallback(() => {
            (0, tY.A)(t);
        }, [t]),
        X = a.useCallback(() => {
            (0, tu.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("249169"),
                    n.e("473782"),
                    n.e("553464"),
                    n.e("130662"),
                    n.e("498552"),
                    n.e("236946"),
                    n.e("338601"),
                    n.e("944727"),
                    n.e("707068"),
                    n.e("521221"),
                    n.e("82001"),
                ]).then(n.bind(n, 266536));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        sourcePID: _?.pid,
                        selectSource: null != ti.Ay.getVoiceChannelId(),
                        analyticsLocations: v,
                    });
            });
        }, [_, v]),
        q = null == _ && s && (null != h || null != I),
        Z = a.useCallback(() => {
            let e = (0, D.YX)();
            null == e
                ? X()
                : (0, tu.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("249169"),
                          n.e("473782"),
                          n.e("553464"),
                          n.e("130662"),
                          n.e("498552"),
                          n.e("236946"),
                          n.e("338601"),
                          n.e("944727"),
                          n.e("707068"),
                          n.e("521221"),
                          n.e("82001"),
                      ]).then(n.bind(n, 266536));
                      return (n) =>
                          (0, r.jsx)(t, {
                              ...n,
                              activitySource: e,
                              selectSource: null != ti.Ay.getVoiceChannelId(),
                              analyticsLocations: v,
                          });
                  });
        }, [X, v]),
        J = T?.name ?? _?.name ?? "",
        ee = a.useCallback(() => {
            ((0, tw.pK)({ gameApplicationId: _?.id, buttonVariant: "admin" }),
                (0, tu.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("227100"),
                        n.e("982730"),
                        n.e("650902"),
                        n.e("965058"),
                    ]).then(n.bind(n, 154649));
                    return (t) => (0, r.jsx)(e, { gameName: J, gameApplicationId: _?.id, ...t });
                }));
        }, [J, _?.id]),
        et = a.useCallback(() => {
            (d()(null != l, "Received null guildId"),
                (0, tw.pK)({ gameApplicationId: _?.id, buttonVariant: "member" }),
                (0, tK.A)({ analyticsLocations: v, analyticsLocation: g.location, guildId: l }));
        }, [l, v, g.location, _?.id]),
        en = a.useCallback(() => {
            let e = _?.id;
            (0, tw.pK)({ gameApplicationId: e, buttonVariant: "shop" });
            let t = B.BVt.COLLECTIBLES_SHOP_WITH_TAB(tZ.G2.GAME_SERVERS);
            (0, e5.pX)(null != e ? `${t}&${tZ.tD}=${e}` : t);
        }, [_?.id]),
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
    let es = null == b || null == T ? null : (0, r.jsx)(t4, { applicationId: b.id }),
        el = V
            ? (0, r.jsx)(t5, { gameName: J, runningGameId: _?.id, isGameServerHostingInShopEnabled: U, onClick: en })
            : j
              ? (0, r.jsx)(t3, {
                    tooltipText: Q.intl.formatToPlainString(tH.default.YhnUVO, { gameName: J }),
                    badgeContent: A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                    onClick: ee,
                    onViewed: () => (0, tw.ET)({ gameApplicationId: _?.id, buttonVariant: "admin" }),
                })
              : W
                ? (0, r.jsx)(t3, {
                      tooltipText: Q.intl.formatToPlainString(tH.default.lwwiHE, { gameName: J }),
                      badgeContent: A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                      onClick: et,
                      onViewed: () => (0, tw.ET)({ gameApplicationId: _?.id, buttonVariant: "member" }),
                  })
                : null,
        eo = (function () {
            let e, t, n;
            if ((null == _ && null != h && !(0, tT.f)() && !q) || (!o && !i)) return null;
            let a = null;
            return (
                o
                    ? ((e = !1),
                      (t = () => {
                          (z(), (0, em.X)(y, em.O.STREAM, !1));
                      }),
                      (n = t_.G),
                      (a = Q.intl.string(Q.t.S5anIc)))
                    : u
                      ? ((e = !1),
                        (t = () => {
                            (q ? Z() : X(), (0, em.X)(y, em.O.STREAM, !0));
                        }),
                        (n = tE.F),
                        (a =
                            null != _
                                ? Q.intl.formatToPlainString(Q.t.AB5gTy, { game: _.name })
                                : q && null != T
                                  ? Q.intl.formatToPlainString(Q.t.AB5gTy, { game: T.name })
                                  : Q.intl.string(Q.t.FeUKeA)))
                      : ((e = !0),
                        (t = null),
                        (n = tE.F),
                        null != c && (0, e4.gV)(c.type) && (a = Q.intl.string(Q.t.uQn9B8))),
                (0, r.jsx)("div", {
                    className: tJ.IF,
                    children: (0, r.jsx)(tR.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                })
            );
        })(),
        ed =
            M && null == h
                ? (0, r.jsx)(tR.A, { ref: S, tooltipText: Q.intl.string(Q.t["hC/Zey"]), onClick: Y, icon: tA.D })
                : null,
        eu =
            null == h
                ? null
                : (0, r.jsx)(tR.A, {
                      tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                      onClick: K(h.applicationId, h.location),
                      icon: th.DoorExitIcon,
                  }),
        e_ =
            null == I || I.intent !== tQ.sV.MAIN
                ? null
                : (0, r.jsx)(tR.A, {
                      tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                      onClick: $(I.id),
                      icon: th.DoorExitIcon,
                  }),
        eE =
            !O || R
                ? null
                : (0, r.jsx)(t2, {
                      runningGame: _,
                      startAuthorization: function () {
                          C({ analyticsLocations: v }) === tq._.RPC &&
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
                : (0, r.jsx)(f.A, {
                      title: Q.intl.string(Q.t.ULvRFd),
                      body: Q.intl.string(Q.t["HJJDr+"]),
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
        className: tJ.o1,
        children: [
            eE ?? es ?? ed,
            el,
            (eu ?? e_) == null
                ? (0, r.jsx)(tP, { isActivity: null == _ && null != I && I.intent !== tQ.sV.MAIN })
                : null,
            eo,
            eu ?? e_,
            eA,
        ],
    });
});
function t2(e) {
    let { runningGame: t, startAuthorization: n, connectionApp: i, ref: a } = e;
    return (0, r.jsx)(tR.A, {
        ref: a,
        onClick: () => {
            (k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "link_account",
                game_id: t?.id ?? null,
                application_id: i?.id ?? null,
            }),
                n());
        },
        icon: tc.A,
        tooltipText: Q.intl.string(Q.t.sbdnpw),
    });
}
function t3(e) {
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
    let _ = (0, tp.A)(),
        { isQuestBarEmpty: E, hasLoadedQuestBar: A } = (0, U.c9)(),
        h = d && null != l && null != s && !_ && E && A,
        [f, I] = (0, eO.kn)(h && null != l ? [l] : [], { bypassAutoDismiss: !0 }),
        [p, T] = (0, eO.kn)(d ? [o] : [], { bypassAutoDismiss: !0 }),
        m = a.useCallback(() => {
            (I(eo.i.TAKE_ACTION), T(eo.i.TAKE_ACTION), n());
        }, [I, T, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tJ.IF,
                children: [
                    (0, r.jsx)("div", { className: tJ.uD, children: (0, r.jsx)("div", { className: tJ.Z9 }) }),
                    (0, r.jsx)(tR.A, { ref: c, tooltipText: t, onClick: m, icon: tf.GameControllerIcon }),
                    p === o && (0, r.jsx)(tS.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != f && null != s && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: T }),
        ],
    });
}
function t5(e) {
    let { gameName: t, runningGameId: n, isGameServerHostingInShopEnabled: i, onClick: a } = e,
        s = (function (e) {
            let { location: t } = e;
            return tk.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(t3, {
        tooltipText: Q.intl.formatToPlainString(tH.default.oZ4ZFn, { gameName: t }),
        coachmarkContent: A.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
        badgeContent: A.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_NEW_BADGE,
        marketingEnabled: i && s,
        onClick: a,
        onViewed: () => (0, tw.ET)({ gameApplicationId: n, buttonVariant: "shop" }),
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
function t4(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        k.default.track(B.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tz.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tz.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            (k.default.track(B.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s());
        }, [t, s]);
    return (0, r.jsx)(tR.A, { tooltipText: Q.intl.string(Q.t.vyaWs7), onClick: l, onMouseDown: i, icon: tI.U, ref: n });
}
var t6 = n(428689),
    t7 = n(409626),
    t8 = n(692969),
    t9 = n(202163),
    ne = n(152367),
    nt = n(123292),
    nn = n(475358),
    ni = n(939409);
function nr(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(I.D, {
        className: ni.kL,
        onClick: t,
        children: (0, r.jsx)(V.E, {
            className: ni.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: Q.intl.string(Q.t.jfrLLb),
        }),
    });
}
var na = n(37595),
    ns = n(395771),
    nl = n(455426),
    no = n(207228),
    nd = n(233741),
    nc = n(532624),
    nu = n(350535),
    n_ = n(185973),
    nE = n(809526),
    nA = n(369409);
function nh(e) {
    let { isCurrentlyRunningGame: t, gamePid: n, onClickNotSharing: i } = e,
        a = (0, E.bG)([nc.Ay], () => nc.Ay.getKeybindForAction(B.hCu.SAVE_CLIP)),
        s = null != a && a.shortcut.length > 0 ? nu.dI(a.shortcut, !0) : null,
        o = (0, tD.E)(),
        d = w.tz.useSetting(),
        c = (0, E.bG)([x.A], () => x.A.getStatus()),
        u = !__OVERLAY__ && (!d || c === B.clD.INVISIBLE),
        _ = o && t && null != s,
        A = (0, E.bG)([ns.A, eU.Ay, nd.A], () => {
            let e = ns.A.getCapturingApp(),
                t = (0, na.V)(eU.Ay, nd.A);
            return null == e || null == n || t?.windowHandle == null || t.pid !== n ? null : e;
        });
    return t
        ? null != A
            ? (0, r.jsxs)(V.E, {
                  variant: "text-xs/medium",
                  color: "text-subtle",
                  className: l()(nA.En, nA.ef),
                  tag: "div",
                  children: [
                      (0, r.jsx)(ne.D, { size: "xxs", color: "currentColor", className: nA.MY, "aria-hidden": !0 }),
                      (0, r.jsx)("span", {
                          className: nA.us,
                          children: Q.intl.format(nE.default["Q/RPC2"], { appName: A.appName }),
                      }),
                      (0, r.jsx)(nt.Q, {
                          text: Q.intl.string(nE.default.VIjH42),
                          "aria-label": Q.intl.formatToPlainString(nE.default["Tl/1iM"], { appName: A.appName }),
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          onClick: () => {
                              (T.h.dispatch({
                                  type: "CONJURE_DEVICE_PERMISSIONS_RESET",
                                  applicationId: A.appId,
                                  permissions: ["screen_capture"],
                              }),
                                  (0, nl.s)(),
                                  (0, no.ik)());
                          },
                      }),
                  ],
              })
            : u
              ? (0, r.jsx)(nr, { onClick: i })
              : _
                ? (0, r.jsx)(V.E, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      className: nA.En,
                      tag: "div",
                      children: Q.intl.format(n_.default.ESZwQX, {
                          keybind: s,
                          keybindHook: () => (0, r.jsx)(nn.e, { shortcut: s, className: nA.oH, keyClassName: nA.Bj }),
                      }),
                  })
                : null
        : (0, r.jsx)(V.E, { variant: "text-xs/medium", color: "text-subtle", children: Q.intl.string(Q.t.W4N1ru) });
}
var nf = n(450173);
function nI(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t8.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t7.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(I.D, {
        onClick: i,
        className: l()(null != i && nf.On),
        children: (0, r.jsx)(td.A, { className: nf.mO, children: t }),
    });
}
function np(e) {
    let { gameRecord: t, application: n, game: i, showLiveBadge: a, ref: s } = e;
    return (0, r.jsxs)("div", {
        className: nf.f9,
        children: [
            (0, r.jsx)(eV.A, { className: nf.Gt, game: t ?? n, pid: i?.pid, ref: s }),
            a ? (0, r.jsx)(t6.VideoIcon, { size: "md", color: "currentColor", className: nf.it }) : null,
        ],
    });
}
function nT(e) {
    let { name: t, gameRecord: n, application: i, game: a, isStreaming: s, ref: l } = e,
        o = (0, t8.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: i?.id,
            source: t7.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = null != o,
        c = (0, r.jsx)(np, { gameRecord: n, application: i, game: a, showLiveBadge: s && !d, ref: l });
    return d
        ? (0, r.jsx)(I.D, {
              onClick: o,
              className: nf.Ow,
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
        { gameRecord: p } = (0, t9.A)(d?.id),
        T =
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
            className: nf.cm,
            children: [
                (0, r.jsx)(nT, { name: T, gameRecord: p, application: d, game: c, isStreaming: o, ref: h }),
                (0, r.jsx)(ed, {
                    popoutTargetRef: f,
                    isForceShowSharingPopout: _,
                    setIsForceShowSharingPopout: A,
                    hidePopout: !I,
                    children: (0, r.jsxs)("div", {
                        className: nf.pq,
                        children: [
                            null != T ? (0, r.jsx)(nI, { name: T, applicationId: d?.id }) : null,
                            (0, r.jsx)(nh, { isCurrentlyRunningGame: I, gamePid: c?.pid, onClickNotSharing: u }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var ng = n(5867);
let nS = {
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
var nN = n(534952),
    nC = n(731854),
    nO = n(169007),
    nR = n(821095),
    nL = n(268920),
    ny = n(633217);
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
        { data: A, isLoading: I } = (0, ej.I)(i?.getCanonicalGameId()),
        p = s ? l : (A ?? i),
        T = R.A.find((e) => null != p && e.migrationData?.replacedBy === p.id),
        m = null == p || I || E;
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
            { disableTrack: m },
        ),
        m)
    )
        return null;
    let g = Q.intl.formatToPlainString(Q.t.hUbQT2, { gameName: p.name }),
        S = Q.intl.string(Q.t.jynBQ5);
    s && (S = Q.intl.string(nO.default["2cOIOr"]));
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
            (g = Q.intl.formatToPlainString(nO.default.dPuaZE, { applicationName: p.name })),
            (n = { text: Q.intl.string(Q.t.hvVgAZ), link: T?.migrationData?.helpCenterLink, external: !0 })),
        (0, r.jsx)(f.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: h.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: p, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: g,
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
function nv(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = Q.intl.string(Q.t.MxAlrB),
        l = Q.intl.string(Q.t["/UTTEg"]),
        o = [
            {
                text: Q.intl.string(Q.t.aRIFWD),
                onClick: () => {
                    (i(eo.i.TAKE_ACTION), window.open(ts.A.getArticleURL(B.MVz.IN_GAME_FEATURES), "_blank"));
                },
            },
        ];
    return (
        n &&
            ((s = Q.intl.string(nO.default.ublzTG)),
            (l = Q.intl.string(nO.default.JgM2xu)),
            (t = { type: "video", src: ny.A, fallbackImageSrc: nL.A, aspectRatio: "2/1", loop: !0 })),
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
function nb(e) {
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
                        (0, em.X)(s, em.O.INVITE),
                        k.default.track(B.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: t.application_id,
                            location: l.location,
                        }),
                        (0, m.qf)(t, !1));
                },
            },
        ],
    });
}
function nM(e) {
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
                { data: n, isLoading: i } = (0, ef.YY)(t?.parentId ?? t?.id);
            return {
                isEligible:
                    null !=
                        nN.APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS.find(
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
        })({ isEligible: m, hasAlreadyLinked: c, didStartAuthorization: u, application: s });
    switch (t) {
        case 0:
            return (0, r.jsx)(nD, {
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
            return (0, r.jsx)(nv, {
                incentivizedAccountLinkingRewarded: N,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nb, {
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
                (0, r.jsx)(eb, {
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
let nP = (0, N.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(to.A, { children: t });
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
                ((0, e4.gV)(a.type) &&
                    g.A.selectParticipant(
                        a.id,
                        (0, eT.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, e4.pQ)(a.type) && (0, L.gk)(ng.Gd.PANEL)));
    }
    null != l && null != a
        ? ((t = B.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = B.BVt.CHANNEL(B.ME, a.id));
    let I = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eV.A, { className: nR.n8, game: n, size: eV.M.SMALL, ref: u }),
            (0, r.jsx)(ed, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nR.pq,
                    children: [
                        (0, r.jsx)(eX.A, {
                            href: t,
                            onClick: function () {
                                (f(), E && T.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
                            },
                            children: (0, r.jsx)(td.A, { className: nR._W, children: n.name }),
                        }),
                        null != a && (0, e4.pQ)(a.type)
                            ? (0, r.jsx)(eX.A, {
                                  href: t,
                                  onClick: f,
                                  children: (0, r.jsx)(to.A, { className: nR.Ix, children: h }),
                              })
                            : (0, r.jsx)(nP, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nR.cm, children: I });
}
function nw(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eV.A, { className: nR.n8, game: n, size: eV.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nR.pq,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: function () {
                                if (s) return void T.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                if (t.intent !== tQ.sV.MAIN) {
                                    let e = (0, eR.A)(t.surface);
                                    null != e && (0, e5.pX)(B.BVt.CHANNEL((0, eL.A)(t.surface) ?? B.ME, e));
                                    return;
                                }
                                ey.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: tQ.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nR.rB,
                            children: (0, r.jsx)(td.A, { className: nR._W, children: n.name }),
                        }),
                        (0, r.jsx)(nP, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nR.cm, children: o });
}
function nG(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eK.A)(t);
    return (0, r.jsxs)("div", {
        className: nR.cm,
        ref: n,
        children: [
            (0, r.jsx)(e$.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nR.pq,
                children: [
                    (0, r.jsx)(td.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nR.qi,
                            children: [
                                (0, r.jsx)(p.t, { size: "xxs", color: eC.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e3, { className: nR.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nx = (0, C.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, E.bG)([e6.default], () => e6.default.getId()),
        h = (0, E.bG)([eU.Ay, ta.A], () => (0, ez.A)(eU.Ay, ta.A)),
        { enabled: f } = eP.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: I, isWithinThreshold: p } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, E.bG)([eF], () => eF.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (null == n || Date.now() - n.endedAt >= eB) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + eB - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [n]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let i = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i < eB };
        })(),
        T = (0, E.bG)([ti.Ay, e7.A], () => e7.A.getChannel(ti.Ay.getVoiceChannelId())),
        m = (0, E.bG)([y.Ay], () => y.Ay.getConnectedActivityChannelId()),
        g = (0, E.bG)([e7.A], () => e7.A.getChannel(m)),
        S = (0, E.bG)([e9.A], () => e9.A.getGuild(g?.guild_id)),
        [N, C] = (0, E.yK)([eJ.A], () => [eJ.A.getCurrentUserActiveStream(), eJ.A.getStreamerActiveStreamMetadata()]),
        R = (0, E.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        L = g?.type === B.rbe.GUILD_SPACE ? null : R,
        M = (0, E.bG)([eD.A, eI.A, eN.Ay], () => {
            let e = (0, tQ.ny)(eD.A.getMainFrame());
            return null != e && (0, eS.A)(e) ? null : e;
        }),
        P = (0, E.bG)([e9.A, te.A], () => null == T || eW.vz(T, e9.A, te.A, !1)),
        [w] = (0, ep.A)([
            (function () {
                if (null != C && null != C.id) return C.id;
                if (null != h) return h.id;
                if (null != L) return L.applicationId;
                if (null != M) return M.applicationId;
                if (null != I && null != I.id) return I.id;
            })(),
        ]),
        G =
            (function () {
                let { enabled: e } = b.h.useConfig({ location: "useCanGoLiveActivityFromActivityCard" }),
                    t = (0, E.bG)([v.Ay], D.sV);
                return e && t;
            })() &&
            (null != L || null != M),
        x = (0, E.bG)([v.Ay], () => (0, eY.A)(v.Ay) && (0, tl.isWindows)()) || G,
        F = (0, E.bG)([tt.A], () => (null != c ? tt.A.findActivity(c, (e) => e.type === _.$.PLAYING) : null)),
        V = null != N && N.ownerId === c && N.state !== B.XYD.ENDED,
        H = (0, E.bG)([tr.default, tn.A], () => (null != g ? (0, eg.m1)(g, tr.default, tn.A) : void 0)),
        j = (function () {
            let { resolution: e, fps: t } = (0, E.cf)([eQ.A], () => eQ.A.getState()),
                n = (0, E.bG)([eJ.A], () => eJ.A.getCurrentUserActiveStream()?.guildId),
                i = (0, eZ.A)("useStreamQualityIndicator", n, e, t);
            if (i !== e1.on.RESOLUTION_720 || t === e1.kn.FPS_60) return `${(0, e1.zr)(i)} ${(0, e0.Bs)(t)}`;
        })(),
        [W, Y] = a.useState(!1),
        K = (0, E.bG)([eq.A], () => eq.A.getWindowOpen(B.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: $, analyticsLocations: z } = (0, ec.Ay)(),
        {
            hasAlreadyLinked: X,
            canStartAuthorization: q,
            connectionApp: Z,
            startAuthorization: Q,
            token: J,
        } = (0, eA.RD)(w, { allowedFlows: [tq._.RPC, tq._.WEB] }),
        [ee, et] = a.useState(null),
        en = null != ee,
        ei = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (et(w?.id ?? null), Q(...t));
            },
            [w?.id, Q],
        ),
        er = eE.l.getConfig({ location: "ActivityPanelGameCard" }).enabled && (0, eh.e)(J),
        ea = !!X && !er,
        es = (0, O.Ay)(w?.id);
    a.useEffect(() => {
        null != w && es !== w?.id && et(null);
    }, [w, es]);
    let el = (0, u.K)((e) => {
            e &&
                null != Z &&
                k.default.track(B.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: h?.id ?? null, application_id: Z.id });
        }),
        ed = a.useMemo(() => {
            let e = h?.id ?? I?.id;
            return null != e ? nS[e] : void 0;
        }, [h?.id, I?.id]),
        eu = (0, E.bG)([e8.A], () => null != ed && e8.A.isMember(ed), [ed]),
        e_ = f && null != ed && !eu && (null != h || p) ? ed : void 0,
        ef = !(0, E.bG)([v.Ay], () => v.Ay.supports(nC.O5.VIDEO)) && (0, tl.isWindows)(),
        eT = null != h && (x || q || ef) && (!V || C?.pid != null),
        [em, eC] = (function (e) {
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
                { shouldShow: f, markAsDismissed: I } = (0, eH.D3)({
                    application: t,
                    disabled: !h,
                    dismissibleContent: A.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: eo.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eH.Yb,
                }),
                p = !E && null != r && o,
                T = a.useMemo(() => {
                    if (E || f) return [];
                    let e = [];
                    return (
                        o && d && t0(t, n, i) && null == i && e.push(A.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(A.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, E, d, i, c, o, f]),
                [m, g] = (0, eO.kn)(T, { groupName: eo.m.ACCOUNT_NAME_ZONE });
            return a.useMemo(() => {
                if (null != m)
                    switch (m) {
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
                return f ? [0, I] : p ? [1, () => s(null)] : [null, () => {}];
            }, [I, g, s, f, p, m]);
        })({
            application: w,
            activity: F,
            embeddedActivity: L,
            connectingGameId: ee,
            setConnectingGameId: et,
            canStartAuthorization: q,
            hasAlreadyLinked: ea,
            didStartAuthorization: en,
            gameCommunityGuildId: e_,
        }),
        eR = null != I && (1 === em || (p && (0 === em || 3 === em))) ? I : null,
        eL = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nm, {
                    isStreaming: V,
                    application: e,
                    game: t,
                    onClickNotSharing: () => Y(!0),
                    isForceShowSharingPopout: W,
                    setIsForceShowSharingPopout: Y,
                    ref: o,
                    popoutTargetRef: s,
                    isCurrentlyRunningGame: i,
                });
            },
            [W, V],
        ),
        ey = a.useMemo(
            () =>
                eT
                    ? eL(w, h, { isGameRunning: !0 })
                    : null != L && null != w && t0(w, F, L)
                      ? (0, r.jsx)(nU, {
                            application: w,
                            embeddedActivity: L,
                            channel: g,
                            channelName: H,
                            guildForConnectedChannel: S,
                            isForceShowSharingPopout: W,
                            setIsForceShowSharingPopout: Y,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: s,
                            isActivityPopoutOpen: K,
                        })
                      : null != M &&
                          null != w &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: w, frame: M })
                        ? (0, r.jsx)(nw, {
                              application: w,
                              accountLinkUpsellTargetRef: o,
                              frame: M,
                              isActivityPopoutOpen: K,
                          })
                        : V
                          ? (0, r.jsx)(nG, {
                                streamMetadata: C,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: j,
                            })
                          : null != eR
                            ? eL(w, eR, { isGameRunning: !1 })
                            : null,
            [C, F, w, H, g, L, M, S, K, W, V, eT, eR, eL, h, j],
        );
    return null == ey
        ? null
        : (0, r.jsx)("div", {
              className: l()(nR.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: nR.rf,
                  children: [
                      ey,
                      (0, r.jsx)(t1, {
                          stream: N,
                          canGoLive: x,
                          canGoLiveActivity: G,
                          guildId: t,
                          isStreaming: V,
                          channel: g,
                          canStream: P,
                          runningGame: h,
                          activity: F,
                          application: w,
                          embeddedActivity: L,
                          frame: M,
                          analyticsContext: n,
                          inviteButtonRef: d,
                          accountLinkButtonRef: el,
                          canStartAuthorization: q,
                          startAuthorization: ei,
                          hasAlreadyLinked: ea,
                          connectionApp: Z,
                      }),
                      (0, r.jsx)(nM, {
                          popover: em,
                          dismissPopover: eC,
                          application: w,
                          connectionApp: Z,
                          activity: F,
                          runningGame: h,
                          hasAlreadyLinked: ea,
                          didStartAuthorization: en,
                          startAuthorization: ei,
                          accountLinkUpsellTargetRef: o,
                          inviteButtonRef: d,
                          accountLinkButtonRef: el,
                          gameCommunityGuildId: e_,
                          parentAnalyticsLocation: $,
                          analyticsLocations: z,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
