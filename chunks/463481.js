(n.d(t, { A: () => nM }), n(321073));
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
    P = n(518293),
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
    $ = n(922016),
    z = n(827827),
    X = n(481045),
    q = n(57129),
    Z = n(660183),
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
    e_ = n(206828),
    eE = n(627363),
    eA = n(429913),
    eh = n(568598),
    ef = n(384059),
    eI = n(47167),
    ep = n(793574),
    eT = n(131607),
    em = n(780964),
    eg = n(766075),
    eS = n(763827),
    eN = n(927813),
    eC = n(572164),
    eO = n(614584),
    eR = n(118328),
    eL = n(268378),
    ey = n(253146);
let eD = 2 * eN.A.Millis.WEEK;
function ev(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        i = (0, _.bG)([eS.A], () => eS.A.getChannelId());
    return (0, r.jsx)(
        h.A,
        {
            shouldShow: !0,
            targetElementRef: t,
            title: Z.intl.string(eL.default["owG+AO"]),
            body: Z.intl.string(eL.default.peZtJo),
            badge: "early_access",
            graphic: { type: "image", src: ey, aspectRatio: "6/4" },
            position: "top",
            caretConfig: { align: "center" },
            actions: [
                {
                    text: Z.intl.string(eL.default.oaIXoz),
                    onClick: () => {
                        (n(el.i.TAKE_ACTION),
                            (0, eO.yO)({
                                clipsEnabled: !0,
                                trackAnalytics: !0,
                                analyticsLocation: ep.A.CLIPS_ACCOUNT_PANEL_COACHMARK,
                            }),
                            (0, eg.openUserSettings)(em.X.CLIPS_PANEL));
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
var eb = n(404374),
    eM = n(197184),
    eP = n(747180),
    eU = n(625180),
    ew = n(91242),
    eG = n(66834);
function ex(e) {
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
                            eG.A.joinGuild(s, { source: F.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL }));
                    },
                },
            ],
        })
    );
}
var ek = n(945810);
let eF = (0, ek.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eB = n(952818);
let eV = eB.Ay.getRunningGames(),
    eH = [];
class ej extends _.Ay.Store {
    initialize() {
        this.syncWith([eB.Ay], () =>
            (function () {
                let e = eB.Ay.getRunningGames();
                if (eV === e) return !1;
                let t = eV.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eV = e), 0 === t.length)) return !1;
                eH = [...eH, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return eH;
    }
    getLastPreviouslyRunningGame() {
        return eH[eH.length - 1] ?? null;
    }
}
let eW = new ej(p.h, {}),
    eY = 5 * eN.A.Millis.MINUTE;
var eK = n(769015),
    e$ = n(334074),
    ez = n(569926),
    eX = n(279250),
    eq = n(880144),
    eZ = n(277680),
    eQ = n(118277),
    eJ = n(905552),
    e0 = n(95035),
    e1 = n(567249),
    e2 = n(507756),
    e3 = n(929921),
    e6 = n(616356),
    e5 = n(650338),
    e4 = n(753070),
    e7 = n(900795);
function e8(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(B.E, { className: l()({ [e7.Q]: null == n }, t), color: n, ...i });
}
var e9 = n(976860),
    te = n(95701),
    tt = n(280450),
    tn = n(734057),
    ti = n(184989),
    tr = n(71393),
    ta = n(576705),
    ts = n(290863),
    tl = n(994500),
    to = n(309010),
    td = n(287809),
    tc = n(157257),
    tu = n(975571),
    t_ = n(723702);
let tE = (0, ek.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var tA = n(994314),
    th = n(485599),
    tf = n(141628),
    tI = n(192308),
    tp = n(959988),
    tT = n(183623),
    tm = n(241541),
    tg = n(70688),
    tS = n(687966),
    tN = n(34188),
    tC = n(942857),
    tO = n(646865),
    tR = n(988534),
    tL = n(55730),
    ty = n(521588),
    tD = n(702841),
    tv = n(176781),
    tb = n(442433),
    tM = n(42473),
    tP = n(200542),
    tU = n(274372),
    tw = n(414405);
function tG(e) {
    (0, tb.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e("666601"), n.e("344751")]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tx = function (e) {
    let { isActivity: t = !1 } = e,
        { parentAnalyticsLocation: n } = (0, ed.Ay)(),
        i = (0, eC.E)(),
        a = (0, tD.bG)([tU.Ay], () => tU.Ay.getIsAtMaxSaveClipOperations()),
        { enableGamePanelEntrypoint: s } = tP.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: l, clipsSourceAttached: o } = (0, tw.A)({ isActivity: t });
    return s && i
        ? (0, r.jsx)(tM.A, {
              disabled: a || !o,
              tooltipText: l,
              onClick: () => {
                  ((0, eO.l0)(), (0, ef.X)(n, ef.O.CLIP));
              },
              onContextMenu: tG,
              icon: tv.x,
          })
        : null;
};
var tk = n(457827),
    tF = n(907878),
    tB = n(831617),
    tV = n(196736);
let tH = (0, ek.mj)({
        name: "2026-08-gsh-subs-activity-bar",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    tj = (0, ek.mj)({
        name: "2026-02-gsh-game-detection-upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var tW = n(610010),
    tY = n(475669),
    tK = n(394107);
function t$(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tY.A], () => null != a && tY.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
function tz(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(t$, {
        title: Z.intl.formatToPlainString(tK.default.k9KZ2L, { gameName: t }),
        body: Z.intl.string(tK.default.gOrBCw),
        ctaText: Z.intl.string(tK.default.sElzfG),
        ...n,
    });
}
var tX = n(338771),
    tq = n(473161),
    tZ = n(453774),
    tQ = n(44724),
    tJ = n(153488),
    t0 = n(942370),
    t1 = n(758836),
    t2 = n(165610),
    t3 = n(79958);
function t6(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === F.$pd.PLAYING &&
              (0, tL.A)(t, F.jUm.JOIN))
    );
}
let t5 = a.memo(function (e) {
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
        b = (0, tZ.A)(m?.id),
        M = t6(m, p, f),
        { enabled: P } = tj.useConfig({ location: "activity-panel" }),
        U = (0, tV.H)({ location: "activity-panel" }),
        w = (0, tW.Bp)("activity-panel"),
        G = (0, tB.C$)(l ?? void 0, "activity-panel"),
        k = (0, _.bG)([tJ.A], () => tJ.A.hasConsented(F.YAq.PERSONALIZATION)),
        B = (0, tW.TF)(A?.id, { shouldFetch: w || G }),
        V = U && k && (0, tW.k0)(A?.id),
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
                (0, ef.X)(D, ef.O.INVITE),
                x.default.track(F.HAw.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: p.application_id,
                    location: g.location,
                }),
                (0, T.qf)(p, !1));
        }, [p, g, D, A]),
        K = a.useCallback(
            (e, t) => () => {
                ((0, ef.X)(D, ef.O.LEAVE_ACTIVITY), (0, tR.d)({ location: t, applicationId: e, showFeedback: !0 }));
            },
            [D],
        ),
        $ = a.useCallback(
            (e) => () => {
                ((0, ef.X)(D, ef.O.LEAVE_ACTIVITY), (0, tk.r)(e));
            },
            [D],
        ),
        z = a.useCallback(() => {
            (0, tX.A)(t);
        }, [t]),
        X = a.useCallback(() => {
            (0, tI.openModalLazy)(async () => {
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
                        selectSource: null != to.Ay.getVoiceChannelId(),
                        analyticsLocations: v,
                    });
            });
        }, [A, v]),
        q = null == A && s && (null != f || null != I),
        Q = a.useCallback(() => {
            let e = (0, y.YX)();
            null == e
                ? X()
                : (0, tI.openModalLazy)(async () => {
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
                              selectSource: null != to.Ay.getVoiceChannelId(),
                              analyticsLocations: v,
                          });
                  });
        }, [X, v]),
        J = m?.name ?? A?.name ?? "",
        ee = a.useCallback(() => {
            ((0, tF.pK)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                (0, tI.openModalLazy)(async () => {
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
                (0, tF.pK)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                (0, tq.A)({ analyticsLocations: v, analyticsLocation: g.location, guildId: l }));
        }, [l, v, g.location, A?.id]),
        en = a.useCallback(() => {
            let e = A?.id;
            (0, tF.pK)({ gameApplicationId: e, buttonVariant: "shop" });
            let t = F.BVt.COLLECTIBLES_SHOP_WITH_TAB(t1.G2.GAME_SERVERS);
            (0, e9.pX)(null != e ? `${t}&${t1.tD}=${e}` : t);
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
    let es = null == b || null == m ? null : (0, r.jsx)(t9, { applicationId: b.id }),
        el = V
            ? (0, r.jsx)(t8, { gameName: J, runningGameId: A?.id, isGameServerHostingInShopEnabled: U, onClick: en })
            : j
              ? (0, r.jsx)(t7, {
                    tooltipText: Z.intl.formatToPlainString(tK.default.YhnUVO, { gameName: J }),
                    badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                    onClick: ee,
                    onViewed: () => (0, tF.ET)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                })
              : W
                ? (0, r.jsx)(t7, {
                      tooltipText: Z.intl.formatToPlainString(tK.default.lwwiHE, { gameName: J }),
                      badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                      onClick: et,
                      onViewed: () => (0, tF.ET)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                  })
                : null,
        eo = (function () {
            let e, t, n;
            if ((null == A && null != f && !(0, tO.f)() && !q) || (!o && !i)) return null;
            let a = null;
            return (
                o
                    ? ((e = !1),
                      (t = () => {
                          (z(), (0, ef.X)(D, ef.O.STREAM, !1));
                      }),
                      (n = tp.G),
                      (a = Z.intl.string(Z.t.S5anIc)))
                    : u
                      ? ((e = !1),
                        (t = () => {
                            (q ? Q() : X(), (0, ef.X)(D, ef.O.STREAM, !0));
                        }),
                        (n = tT.F),
                        (a =
                            null != A
                                ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: A.name })
                                : q && null != m
                                  ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: m.name })
                                  : Z.intl.string(Z.t.FeUKeA)))
                      : ((e = !0),
                        (t = null),
                        (n = tT.F),
                        null != c && (0, te.gV)(c.type) && (a = Z.intl.string(Z.t.uQn9B8))),
                (0, r.jsx)("div", {
                    className: t3.IF,
                    children: (0, r.jsx)(tM.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                })
            );
        })(),
        ec =
            M && null == f
                ? (0, r.jsx)(tM.A, { ref: S, tooltipText: Z.intl.string(Z.t["hC/Zey"]), onClick: Y, icon: tm.D })
                : null,
        eu =
            null == f
                ? null
                : (0, r.jsx)(tM.A, {
                      tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                      onClick: K(f.applicationId, f.location),
                      icon: tg.DoorExitIcon,
                  }),
        e_ =
            null == I || I.intent !== t2.sV.MAIN
                ? null
                : (0, r.jsx)(tM.A, {
                      tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                      onClick: $(I.id),
                      icon: tg.DoorExitIcon,
                  }),
        eE =
            !O || R
                ? null
                : (0, r.jsx)(t4, {
                      runningGame: A,
                      startAuthorization: function () {
                          C({ analyticsLocations: v }) === t0._.RPC &&
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
        className: t3.o1,
        children: [
            eE ?? es ?? ec,
            el,
            (eu ?? e_) == null
                ? (0, r.jsx)(tx, { isActivity: null == A && null != I && I.intent !== t2.sV.MAIN })
                : null,
            eo,
            eu ?? e_,
            eA,
        ],
    });
});
function t4(e) {
    let { runningGame: t, startAuthorization: n, connectionApp: i, ref: a } = e;
    return (0, r.jsx)(tM.A, {
        ref: a,
        onClick: () => {
            (x.default.track(F.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                action_type: "link_account",
                game_id: t?.id ?? null,
                application_id: i?.id ?? null,
            }),
                n());
        },
        icon: tf.A,
        tooltipText: Z.intl.string(Z.t.sbdnpw),
    });
}
function t7(e) {
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
    let _ = (0, tC.A)(),
        { isQuestBarEmpty: E, hasLoadedQuestBar: A } = (0, P.c9)(),
        h = d && null != l && null != s && !_ && E && A,
        [f, I] = (0, eT.kn)(h && null != l ? [l] : [], { bypassAutoDismiss: !0 }),
        [p, T] = (0, eT.kn)(d ? [o] : [], { bypassAutoDismiss: !0 }),
        m = a.useCallback(() => {
            (I(el.i.TAKE_ACTION), T(el.i.TAKE_ACTION), n());
        }, [I, T, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: t3.IF,
                children: [
                    (0, r.jsx)("div", { className: t3.uD, children: (0, r.jsx)("div", { className: t3.Z9 }) }),
                    (0, r.jsx)(tM.A, { ref: c, tooltipText: t, onClick: m, icon: tS.GameControllerIcon }),
                    p === o && (0, r.jsx)(ty.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != f && null != s && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: T }),
        ],
    });
}
function t8(e) {
    let { gameName: t, runningGameId: n, isGameServerHostingInShopEnabled: i, onClick: a } = e,
        s = (function (e) {
            let { location: t } = e;
            return tH.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(t7, {
        tooltipText: Z.intl.formatToPlainString(tK.default.oZ4ZFn, { gameName: t }),
        coachmarkContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
        badgeContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_NEW_BADGE,
        marketingEnabled: i && s,
        onClick: a,
        onViewed: () => (0, tF.ET)({ gameApplicationId: n, buttonVariant: "shop" }),
        renderCoachmark: (e) => {
            let { targetElementRef: i, markAsDismissed: s, markBadgeAsDismissed: l } = e;
            return (0, r.jsx)(tz, {
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
    return (0, r.jsx)(tM.A, { tooltipText: Z.intl.string(Z.t.vyaWs7), onClick: l, onMouseDown: i, icon: tN.U, ref: n });
}
var ne = n(428689),
    nt = n(409626),
    nn = n(692969),
    ni = n(202163),
    nr = n(475358),
    na = n(939409);
function ns(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(f.D, {
        className: na.kL,
        onClick: t,
        children: (0, r.jsx)(B.E, {
            className: na.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: Z.intl.string(Z.t.jfrLLb),
        }),
    });
}
var nl = n(532624),
    no = n(350535),
    nd = n(369409);
function nc(e) {
    let { isCurrentlyRunningGame: t, onClickNotSharing: n } = e,
        i = (0, _.bG)([nl.Ay], () => nl.Ay.getKeybindForAction(F.hCu.SAVE_CLIP)),
        a = null != i && i.shortcut.length > 0 ? no.dI(i.shortcut, !0) : null,
        s = (0, eC.E)(),
        l = U.tz.useSetting(),
        o = (0, _.bG)([G.A], () => G.A.getStatus()),
        d = !__OVERLAY__ && (!l || o === F.clD.INVISIBLE),
        c = s && t && null != a;
    return t
        ? d
            ? (0, r.jsx)(ns, { onClick: n })
            : c
              ? (0, r.jsx)(B.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: nd.En,
                    tag: "div",
                    children: Z.intl.format(eL.default.ESZwQX, {
                        keybind: a,
                        keybindHook: () => (0, r.jsx)(nr.e, { shortcut: a, className: nd.oH, keyClassName: nd.Bj }),
                    }),
                })
              : null
        : (0, r.jsx)(B.E, { variant: "text-xs/medium", color: "text-subtle", children: Z.intl.string(Z.t.W4N1ru) });
}
var nu = n(450173);
function n_(e) {
    let { name: t, applicationId: n } = e,
        i = (0, nn.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: nt.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(f.D, {
        onClick: i,
        className: l()(null != i && nu.On),
        children: (0, r.jsx)(th.A, { className: nu.mO, children: t }),
    });
}
function nE(e) {
    let { gameRecord: t, application: n, game: i, showLiveBadge: a, ref: s } = e;
    return (0, r.jsxs)("div", {
        className: nu.f9,
        children: [
            (0, r.jsx)(eK.A, { className: nu.Gt, game: t ?? n, pid: i?.pid, ref: s }),
            a ? (0, r.jsx)(ne.VideoIcon, { size: "md", color: "currentColor", className: nu.it }) : null,
        ],
    });
}
function nA(e) {
    let { name: t, gameRecord: n, application: i, game: a, isStreaming: s, ref: l } = e,
        o = (0, nn.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: i?.id,
            source: nt.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = null != o,
        c = (0, r.jsx)(nE, { gameRecord: n, application: i, game: a, showLiveBadge: s && !d, ref: l });
    return d
        ? (0, r.jsx)(f.D, {
              onClick: o,
              className: nu.Ow,
              "aria-label": Z.intl.formatToPlainString(Z.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nh(e) {
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
        { gameRecord: p } = (0, ni.A)(d?.id),
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
            className: nu.cm,
            children: [
                (0, r.jsx)(nA, { name: T, gameRecord: p, application: d, game: c, isStreaming: o, ref: h }),
                (0, r.jsx)(eo, {
                    popoutTargetRef: f,
                    isForceShowSharingPopout: E,
                    setIsForceShowSharingPopout: A,
                    hidePopout: !I,
                    children: (0, r.jsxs)("div", {
                        className: nu.pq,
                        children: [
                            null != T ? (0, r.jsx)(n_, { name: T, applicationId: d?.id }) : null,
                            (0, r.jsx)(nc, { isCurrentlyRunningGame: I, onClickNotSharing: u }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var nf = n(5867);
let nI = {
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
var np = n(534952),
    nT = n(731854),
    nm = n(559626),
    ng = n(821095),
    nS = n(268920),
    nN = n(633217);
function nC(e) {
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
        f = tE.useConfig({ location: "ActivityPanelGameCard" }),
        { data: I, isLoading: p } = (0, ez.I)(i?.getCanonicalGameId()),
        T = s ? l : (I ?? i),
        m = O.A.find((e) => null != T && e.migrationData?.replacedBy === T.id),
        g = null == T || p || E;
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
    let S = Z.intl.formatToPlainString(f.altTitle ? Z.t.hUbQT2 : Z.t["lo6H6+"], { gameName: T.name }),
        N = Z.intl.string(f.altCta ? Z.t.jynBQ5 : Z.t.lw71Nf);
    s && (N = Z.intl.string(nm.default["2cOIOr"]));
    let C = [
        {
            text: N,
            onClick: () => {
                (o(el.i.TAKE_ACTION), d({ analyticsLocations: u }));
            },
        },
    ];
    return (
        s &&
            ((t = "beta"),
            (S = Z.intl.formatToPlainString(nm.default.dPuaZE, { applicationName: T.name })),
            (n = { text: Z.intl.string(Z.t.hvVgAZ), link: m?.migrationData?.helpCenterLink, external: !0 })),
        (0, r.jsx)(h.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: A.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: T, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: S,
            body: Z.intl.string(Z.t["2lfjU+"]),
            textLink: n,
            targetElementRef: _,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(el.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: C,
        })
    );
}
function nO(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = Z.intl.string(Z.t.MxAlrB),
        l = Z.intl.string(Z.t["/UTTEg"]),
        o = [
            {
                text: Z.intl.string(Z.t.aRIFWD),
                onClick: () => {
                    (i(el.i.TAKE_ACTION), window.open(tu.A.getArticleURL(F.MVz.IN_GAME_FEATURES), "_blank"));
                },
            },
        ];
    return (
        n &&
            ((s = Z.intl.string(nm.default.ublzTG)),
            (l = Z.intl.string(nm.default.JgM2xu)),
            (t = { type: "video", src: nN.A, fallbackImageSrc: nS.A, aspectRatio: "2/1", loop: !0 })),
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
function nR(e) {
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
                        (0, ef.X)(s, ef.O.INVITE),
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
function nL(e) {
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
                { data: n, isLoading: i } = (0, eE.YY)(t?.parentId ?? t?.id),
                r = np.APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS.find(
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
            return (0, r.jsx)(nC, {
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
            return (0, r.jsx)(nO, {
                incentivizedAccountLinkingRewarded: C,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nR, {
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
                (0, r.jsx)(ex, {
                    targetElementRef: E,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: I,
                    markAsDismissed: n,
                })
            );
        case 4:
            return (0, r.jsx)(ev, { targetElementRef: A, markAsDismissed: n });
        default:
            return null;
    }
}
let ny = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(tA.A, { children: t });
});
function nD(e) {
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
                ((0, te.gV)(a.type) &&
                    m.A.selectParticipant(
                        a.id,
                        (0, eh.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, te.pQ)(a.type) && (0, R.gk)(nf.Gd.PANEL)));
    }
    null != l && null != a
        ? ((t = F.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = F.BVt.CHANNEL(F.ME, a.id));
    let I = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eK.A, { className: ng.n8, game: n, size: eK.M.SMALL, ref: u }),
            (0, r.jsx)(eo, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: ng.pq,
                    children: [
                        (0, r.jsx)(e0.A, {
                            href: t,
                            onClick: function () {
                                (f(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
                            },
                            children: (0, r.jsx)(th.A, { className: ng._W, children: n.name }),
                        }),
                        null != a && (0, te.pQ)(a.type)
                            ? (0, r.jsx)(e0.A, {
                                  href: t,
                                  onClick: f,
                                  children: (0, r.jsx)(tA.A, { className: ng.Ix, children: h }),
                              })
                            : (0, r.jsx)(ny, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: ng.cm, children: I });
}
function nv(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eK.A, { className: ng.n8, game: n, size: eK.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: ng.pq,
                    children: [
                        (0, r.jsx)(f.D, {
                            onClick: function () {
                                if (s) return void p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                if (t.intent !== t2.sV.MAIN) {
                                    let e = (0, eM.A)(t.surface);
                                    null != e && (0, e9.pX)(F.BVt.CHANNEL((0, eP.A)(t.surface) ?? F.ME, e));
                                    return;
                                }
                                eU.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: t2.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: ng.rB,
                            children: (0, r.jsx)(th.A, { className: ng._W, children: n.name }),
                        }),
                        (0, r.jsx)(ny, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: ng.cm, children: o });
}
function nb(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eZ.A)(t);
    return (0, r.jsxs)("div", {
        className: ng.cm,
        ref: n,
        children: [
            (0, r.jsx)(eQ.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: ng.pq,
                children: [
                    (0, r.jsx)(th.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: ng.qi,
                            children: [
                                (0, r.jsx)(I.t, { size: "xxs", color: eb.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e8, { className: ng.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nM = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([tt.default], () => tt.default.getId()),
        A = (0, _.bG)([eB.Ay, tc.A], () => (0, eJ.A)(eB.Ay, tc.A)),
        { enabled: h } = eF.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: f, isWithinThreshold: I } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, _.bG)([eW], () => eW.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (null == n || Date.now() - n.endedAt >= eY) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + eY - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [n]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let i = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i < eY };
        })(),
        p = (0, _.bG)([to.Ay, tn.A], () => tn.A.getChannel(to.Ay.getVoiceChannelId())),
        T = (0, _.bG)([L.Ay], () => L.Ay.getConnectedActivityChannelId()),
        m = (0, _.bG)([tn.A], () => tn.A.getChannel(T)),
        g = (0, _.bG)([tr.A], () => tr.A.getGuild(m?.guild_id)),
        [S, N] = (0, _.yK)([e6.A], () => [e6.A.getCurrentUserActiveStream(), e6.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
        R = m?.type === F.rbe.GUILD_SPACE ? null : O,
        b = (0, _.bG)([ew.A], () => (0, t2.ny)(ew.A.getMainFrame())),
        U = (0, _.bG)([tr.A, ta.A], () => null == p || eX.vz(p, tr.A, ta.A, !1)),
        [G] = (0, eA.A)([
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
        B = (0, _.bG)([D.Ay], () => (0, eq.A)(D.Ay) && (0, t_.isWindows)()) || k,
        V = (0, _.bG)([ts.A], () => (null != c ? ts.A.findActivity(c, (e) => e.type === F.$pd.PLAYING) : null)),
        H = null != S && S.ownerId === c && S.state !== F.XYD.ENDED,
        j = (0, _.bG)([td.default, tl.A], () => (null != m ? (0, eI.m1)(m, td.default, tl.A) : void 0)),
        W = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([e3.A], () => e3.A.getState()),
                n = (0, _.bG)([e6.A], () => e6.A.getCurrentUserActiveStream()?.guildId),
                i = (0, e2.A)("useStreamQualityIndicator", n, e, t);
            if (i !== e4.on.RESOLUTION_720 || t === e4.kn.FPS_60) return `${(0, e4.zr)(i)} ${(0, e5.Bs)(t)}`;
        })(),
        [Y, K] = a.useState(!1),
        $ = (0, _.bG)([e1.A], () => e1.A.getWindowOpen(F.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: z, analyticsLocations: X } = (0, ed.Ay)(),
        {
            hasAlreadyLinked: q,
            canStartAuthorization: Z,
            connectionApp: Q,
            startAuthorization: J,
        } = (0, e_.RD)(G, { allowedFlows: [t0._.RPC, t0._.WEB] }),
        [ee, et] = a.useState(null),
        en = null != ee,
        ei = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (et(G?.id ?? null), J(...t));
            },
            [G?.id, J],
        ),
        er = (0, C.Ay)(G?.id);
    a.useEffect(() => {
        null != G && er !== G?.id && et(null);
    }, [G, er]);
    let ea = (0, u.K)((e) => {
            e &&
                null != Q &&
                x.default.track(F.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: A?.id ?? null, application_id: Q.id });
        }),
        es = a.useMemo(() => {
            let e = A?.id ?? f?.id;
            return null != e ? nI[e] : void 0;
        }, [A?.id, f?.id]),
        eo = (0, _.bG)([ti.A], () => null != es && ti.A.isMember(es), [es]),
        ec = h && null != es && !eo && (null != A || I) ? es : void 0,
        eu = !(0, _.bG)([D.Ay], () => D.Ay.supports(nT.O5.VIDEO)) && (0, t_.isWindows)(),
        eE = null != A && (B || Z || eu) && (!H || N?.pid != null),
        [eh, ef] = (function (e) {
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
                { shouldShow: p, markAsDismissed: T } = (0, e$.D3)({
                    application: t,
                    disabled: !I,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: el.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: e$.Yb,
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
                [S, N] = (0, eT.kn)(g, { groupName: el.m.ACCOUNT_NAME_ZONE }),
                { shouldShow: C, markAsDismissed: O } = (function () {
                    let { disabled: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, eR.A)("AutoclippingAccountPanelCoachmark"),
                        n = (0, eC.E)(),
                        i = (0, M.A)((e) => e.isOpen),
                        r = (0, w.G)(),
                        [a, s] = (0, eT.Wl)(
                            e || !t || n || i || r ? null : E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK,
                            { cooldownDurationMs: eD },
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
            connectingGameId: ee,
            setConnectingGameId: et,
            canStartAuthorization: Z,
            hasAlreadyLinked: q,
            didStartAuthorization: en,
            gameCommunityGuildId: ec,
            canShowCurrentRunningGamePanel: eE,
            isStreamingCurrentRunningGame: H && null != A && N?.id != null && N.id === A.id,
        }),
        ep = null != f && (1 === eh || (I && (0 === eh || 3 === eh))) ? f : null,
        em = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nh, {
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
        eg = a.useMemo(
            () =>
                eE
                    ? em(G, A, { isGameRunning: !0 })
                    : null != R && null != G && t6(G, V, R)
                      ? (0, r.jsx)(nD, {
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
                        ? (0, r.jsx)(nv, {
                              application: G,
                              accountLinkUpsellTargetRef: o,
                              frame: b,
                              isActivityPopoutOpen: $,
                          })
                        : H
                          ? (0, r.jsx)(nb, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: W,
                            })
                          : null != ep
                            ? em(G, ep, { isGameRunning: !1 })
                            : null,
            [N, V, G, j, m, R, b, g, $, Y, H, eE, ep, em, A, W],
        );
    return null == eg
        ? null
        : (0, r.jsx)("div", {
              className: l()(ng.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: ng.rf,
                  children: [
                      eg,
                      (0, r.jsx)(t5, {
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
                          accountLinkButtonRef: ea,
                          canStartAuthorization: Z,
                          startAuthorization: ei,
                          hasAlreadyLinked: q,
                          connectionApp: Q,
                      }),
                      (0, r.jsx)(nL, {
                          popover: eh,
                          dismissPopover: ef,
                          application: G,
                          connectionApp: Q,
                          activity: V,
                          runningGame: A,
                          hasAlreadyLinked: q,
                          didStartAuthorization: en,
                          startAuthorization: ei,
                          accountLinkUpsellTargetRef: o,
                          activityPopoutTargetRef: s,
                          inviteButtonRef: d,
                          accountLinkButtonRef: ea,
                          gameCommunityGuildId: ec,
                          parentAnalyticsLocation: z,
                          analyticsLocations: X,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
