(n.d(t, { A: () => nb }), n(321073));
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
    Z = n(57129),
    q = n(660183),
    Q = n(293686);
function J(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: Q.K2,
        children: (0, r.jsx)(k.$, {
            variant: "primary",
            size: "sm",
            text: q.intl.string(Z.default.Poezn1),
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
                        children: q.intl.string(Z.default.WhdCGP),
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
                                            ? q.intl.string(Z.default.a3AofS)
                                            : q.intl.string(q.t.WbGtnH),
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
                children: q.intl.string(Z.default["7cfFob"]),
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
                        children: q.intl.string(Z.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: Q.$v,
                        children: [
                            (0, r.jsx)(V.nW, { status: F.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(B.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: q.intl.string(Z.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(B.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(Z.default.Yl0mh4),
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
                children: q.intl.string(Z.default["7cfFob"]),
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
                        title: q.intl.string(Z.default.vxVbGP),
                        body: [q.intl.string(Z.default["7cfFob"])],
                        action: {
                            text: q.intl.string(Z.default.k4tCg2),
                            onClick: () => {
                                U.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: q.intl.string(q.t["ZrN+DT"]), onClick: X.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: q.intl.string(Z.default.qKDqet),
                        body: [q.intl.string(Z.default.Yl0mh4)],
                        action: {
                            text: q.intl.string(Z.default.Poezn1),
                            onClick: () => {
                                (0, z.A)({ nextStatus: F.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: q.intl.string(Z.default["6cA8HZ"]),
                        body: [q.intl.string(Z.default["7cfFob"])],
                        action: {
                            text: q.intl.string(Z.default.k4tCg2),
                            onClick: () => {
                                (U.tz.updateSetting(!0), (0, z.A)({ nextStatus: F.clD.ONLINE }));
                            },
                        },
                        textLink: { text: q.intl.string(q.t["ZrN+DT"]), onClick: X.L7 },
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
    eC = n(915725),
    eO = n(572164),
    eR = n(614584),
    eL = n(118328),
    ey = n(268378),
    eD = n(253146);
let ev = 2 * eN.A.Millis.WEEK;
function eb(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        i = (0, eO.E)(),
        a = (0, _.bG)([eC.Ay], () => eC.Ay.getEnableAutoclipping()),
        s = (0, _.bG)([eS.A], () => eS.A.getChannelId());
    return (0, r.jsx)(
        h.A,
        {
            shouldShow: !0,
            targetElementRef: t,
            title: q.intl.string(ey.default["owG+AO"]),
            body: q.intl.string(ey.default.peZtJo),
            badge: "early_access",
            graphic: { type: "image", src: eD, aspectRatio: "6/4" },
            position: "top",
            caretConfig: { align: "center" },
            actions: [
                {
                    text: i ? q.intl.string(ey.default.DpZqVj) : q.intl.string(ey.default.oaIXoz),
                    onClick: () => {
                        (n(el.i.TAKE_ACTION),
                            i ||
                                (0, eR.yO)({
                                    clipsEnabled: !0,
                                    trackAnalytics: !0,
                                    analyticsLocation: ep.A.CLIPS_ACCOUNT_PANEL_COACHMARK,
                                }),
                            a || (0, eR.uL)(!0, !0, ep.A.CLIPS_ACCOUNT_PANEL_COACHMARK),
                            (0, eg.openUserSettings)(em.X.CLIPS_PANEL));
                    },
                },
            ],
            onRequestClose: () => {
                n(el.i.USER_DISMISS);
            },
        },
        s ?? "disconnected",
    );
}
var eM = n(404374),
    eP = n(197184),
    eU = n(747180),
    ew = n(625180),
    eG = n(91242),
    ex = n(66834);
function ek(e) {
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
            title: q.intl.formatToPlainString(q.t.ry9SJw, { gameName: i }),
            body: q.intl.string(q.t.YPpOov),
            actions: [
                {
                    text: q.intl.string(q.t.RVfNGU),
                    onClick: () => {
                        (x.default.track(F.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: s,
                        }),
                            l(el.i.TAKE_ACTION),
                            ex.A.joinGuild(s, { source: F.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL }));
                    },
                },
            ],
        })
    );
}
var eF = n(945810);
let eB = (0, eF.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eV = n(952818);
let eH = eV.Ay.getRunningGames(),
    ej = [];
class eW extends _.Ay.Store {
    initialize() {
        this.syncWith([eV.Ay], () =>
            (function () {
                let e = eV.Ay.getRunningGames();
                if (eH === e) return !1;
                let t = eH.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eH = e), 0 === t.length)) return !1;
                ej = [...ej, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return ej;
    }
    getLastPreviouslyRunningGame() {
        return ej[ej.length - 1] ?? null;
    }
}
let eY = new eW(p.h, {}),
    eK = 5 * eN.A.Millis.MINUTE;
var e$ = n(769015),
    ez = n(334074),
    eX = n(279250),
    eZ = n(880144),
    eq = n(277680),
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
let tE = (0, eF.mj)({
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
    tU = n(414405);
function tw(e) {
    (0, tb.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e("666601"), n.e("344751")]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tG = function (e) {
    let { isActivity: t = !1 } = e,
        { parentAnalyticsLocation: n } = (0, ed.Ay)(),
        i = (0, eO.E)(),
        a = (0, tD.bG)([eC.Ay], () => eC.Ay.getIsAtMaxSaveClipOperations()),
        { enableGamePanelEntrypoint: s } = tP.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: l, clipsSourceAttached: o } = (0, tU.A)({ isActivity: t });
    return s && i
        ? (0, r.jsx)(tM.A, {
              disabled: a || !o,
              tooltipText: l,
              onClick: () => {
                  ((0, eR.l0)(), (0, ef.X)(n, ef.O.CLIP));
              },
              onContextMenu: tw,
              icon: tv.x,
          })
        : null;
};
var tx = n(457827),
    tk = n(907878),
    tF = n(831617),
    tB = n(196736);
let tV = (0, eF.mj)({
        name: "2026-08-gsh-subs-activity-bar",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    tH = (0, eF.mj)({
        name: "2026-02-gsh-game-detection-upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var tj = n(610010),
    tW = n(475669),
    tY = n(394107);
function tK(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tW.A], () => null != a && tW.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
function t$(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tK, {
        title: q.intl.formatToPlainString(tY.default.k9KZ2L, { gameName: t }),
        body: q.intl.string(tY.default.gOrBCw),
        ctaText: q.intl.string(tY.default.sElzfG),
        ...n,
    });
}
var tz = n(338771),
    tX = n(473161),
    tZ = n(453774),
    tq = n(44724),
    tQ = n(153488),
    tJ = n(942370),
    t0 = n(758836),
    t1 = n(165610),
    t2 = n(79958);
function t3(e, t, n) {
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
let t6 = a.memo(function (e) {
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
        M = t3(m, p, f),
        { enabled: P } = tH.useConfig({ location: "activity-panel" }),
        U = (0, tB.H)({ location: "activity-panel" }),
        w = (0, tj.Bp)("activity-panel"),
        G = (0, tF.C$)(l ?? void 0, "activity-panel"),
        k = (0, _.bG)([tQ.A], () => tQ.A.hasConsented(F.YAq.PERSONALIZATION)),
        B = (0, tj.TF)(A?.id, { shouldFetch: w || G }),
        V = U && k && (0, tj.k0)(A?.id),
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
                ((0, ef.X)(D, ef.O.LEAVE_ACTIVITY), (0, tx.r)(e));
            },
            [D],
        ),
        z = a.useCallback(() => {
            (0, tz.A)(t);
        }, [t]),
        X = a.useCallback(() => {
            (0, tI.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("249169"),
                    n.e("473782"),
                    n.e("553464"),
                    n.e("130662"),
                    n.e("498552"),
                    n.e("486672"),
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
        Z = null == A && s && (null != f || null != I),
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
                          n.e("486672"),
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
            ((0, tk.pK)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                (0, tI.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("227100"), n.e("982730"), n.e("176716")]).then(
                        n.bind(n, 4039),
                    );
                    return (t) => (0, r.jsx)(e, { gameName: J, gameApplicationId: A?.id, ...t });
                }));
        }, [J, A?.id]),
        et = a.useCallback(() => {
            (d()(null != l, "Received null guildId"),
                (0, tk.pK)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                (0, tX.A)({ analyticsLocations: v, analyticsLocation: g.location, guildId: l }));
        }, [l, v, g.location, A?.id]),
        en = a.useCallback(() => {
            let e = A?.id;
            (0, tk.pK)({ gameApplicationId: e, buttonVariant: "shop" });
            let t = F.BVt.COLLECTIBLES_SHOP_WITH_TAB(t0.G2.GAME_SERVERS);
            (0, e9.pX)(null != e ? `${t}&${t0.tD}=${e}` : t);
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
    let es = null == b || null == m ? null : (0, r.jsx)(t8, { applicationId: b.id }),
        el = V
            ? (0, r.jsx)(t7, { gameName: J, runningGameId: A?.id, isGameServerHostingInShopEnabled: U, onClick: en })
            : j
              ? (0, r.jsx)(t4, {
                    tooltipText: q.intl.formatToPlainString(tY.default.YhnUVO, { gameName: J }),
                    badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                    onClick: ee,
                    onViewed: () => (0, tk.ET)({ gameApplicationId: A?.id, buttonVariant: "admin" }),
                })
              : W
                ? (0, r.jsx)(t4, {
                      tooltipText: q.intl.formatToPlainString(tY.default.lwwiHE, { gameName: J }),
                      badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                      onClick: et,
                      onViewed: () => (0, tk.ET)({ gameApplicationId: A?.id, buttonVariant: "member" }),
                  })
                : null,
        eo = (function () {
            let e, t, n;
            if ((null == A && null != f && !(0, tO.f)() && !Z) || (!o && !i)) return null;
            let a = null;
            return (
                o
                    ? ((e = !1),
                      (t = () => {
                          (z(), (0, ef.X)(D, ef.O.STREAM, !1));
                      }),
                      (n = tp.G),
                      (a = q.intl.string(q.t.S5anIc)))
                    : u
                      ? ((e = !1),
                        (t = () => {
                            (Z ? Q() : X(), (0, ef.X)(D, ef.O.STREAM, !0));
                        }),
                        (n = tT.F),
                        (a =
                            null != A
                                ? q.intl.formatToPlainString(q.t.AB5gTy, { game: A.name })
                                : Z && null != m
                                  ? q.intl.formatToPlainString(q.t.AB5gTy, { game: m.name })
                                  : q.intl.string(q.t.FeUKeA)))
                      : ((e = !0),
                        (t = null),
                        (n = tT.F),
                        null != c && (0, te.gV)(c.type) && (a = q.intl.string(q.t.uQn9B8))),
                (0, r.jsx)("div", {
                    className: t2.IF,
                    children: (0, r.jsx)(tM.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                })
            );
        })(),
        ec =
            M && null == f
                ? (0, r.jsx)(tM.A, { ref: S, tooltipText: q.intl.string(q.t["hC/Zey"]), onClick: Y, icon: tm.D })
                : null,
        eu =
            null == f
                ? null
                : (0, r.jsx)(tM.A, {
                      tooltipText: q.intl.string(q.t["R/FK4A"]),
                      onClick: K(f.applicationId, f.location),
                      icon: tg.DoorExitIcon,
                  }),
        e_ =
            null == I || I.intent !== t1.sV.MAIN
                ? null
                : (0, r.jsx)(tM.A, {
                      tooltipText: q.intl.string(q.t["R/FK4A"]),
                      onClick: $(I.id),
                      icon: tg.DoorExitIcon,
                  }),
        eE =
            !O || R
                ? null
                : (0, r.jsx)(t5, {
                      runningGame: A,
                      startAuthorization: function () {
                          C({ analyticsLocations: v }) === tJ._.RPC &&
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
                      title: q.intl.string(q.t.ULvRFd),
                      body: q.intl.string(q.t["HJJDr+"]),
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
        className: t2.o1,
        children: [
            eE ?? es ?? ec,
            el,
            (eu ?? e_) == null
                ? (0, r.jsx)(tG, { isActivity: null == A && null != I && I.intent !== t1.sV.MAIN })
                : null,
            eo,
            eu ?? e_,
            eA,
        ],
    });
});
function t5(e) {
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
        tooltipText: q.intl.string(q.t.sbdnpw),
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
                className: t2.IF,
                children: [
                    (0, r.jsx)("div", { className: t2.uD, children: (0, r.jsx)("div", { className: t2.Z9 }) }),
                    (0, r.jsx)(tM.A, { ref: c, tooltipText: t, onClick: m, icon: tS.GameControllerIcon }),
                    p === o && (0, r.jsx)(ty.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != f && null != s && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: T }),
        ],
    });
}
function t7(e) {
    let { gameName: t, runningGameId: n, isGameServerHostingInShopEnabled: i, onClick: a } = e,
        s = (function (e) {
            let { location: t } = e;
            return tV.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(t4, {
        tooltipText: q.intl.formatToPlainString(tY.default.oZ4ZFn, { gameName: t }),
        coachmarkContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
        badgeContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_NEW_BADGE,
        marketingEnabled: i && s,
        onClick: a,
        onViewed: () => (0, tk.ET)({ gameApplicationId: n, buttonVariant: "shop" }),
        renderCoachmark: (e) => {
            let { targetElementRef: i, markAsDismissed: s, markBadgeAsDismissed: l } = e;
            return (0, r.jsx)(t$, {
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
function t8(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tq.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tq.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            (x.default.track(F.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s());
        }, [t, s]);
    return (0, r.jsx)(tM.A, { tooltipText: q.intl.string(q.t.vyaWs7), onClick: l, onMouseDown: i, icon: tN.U, ref: n });
}
var t9 = n(428689),
    ne = n(409626),
    nt = n(692969),
    nn = n(202163),
    ni = n(475358),
    nr = n(939409);
function na(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(f.D, {
        className: nr.kL,
        onClick: t,
        children: (0, r.jsx)(B.E, {
            className: nr.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: q.intl.string(q.t.jfrLLb),
        }),
    });
}
var ns = n(532624),
    nl = n(350535),
    no = n(369409);
function nd(e) {
    let { isCurrentlyRunningGame: t, onClickNotSharing: n } = e,
        i = (0, _.bG)([ns.Ay], () => ns.Ay.getKeybindForAction(F.hCu.SAVE_CLIP)),
        a = null != i && i.shortcut.length > 0 ? nl.dI(i.shortcut, !0) : null,
        s = (0, eO.E)(),
        l = U.tz.useSetting(),
        o = (0, _.bG)([G.A], () => G.A.getStatus()),
        d = !__OVERLAY__ && (!l || o === F.clD.INVISIBLE),
        c = s && t && null != a;
    return t
        ? d
            ? (0, r.jsx)(na, { onClick: n })
            : c
              ? (0, r.jsx)(B.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: no.En,
                    tag: "div",
                    children: q.intl.format(ey.default.ESZwQX, {
                        keybind: a,
                        keybindHook: () => (0, r.jsx)(ni.e, { shortcut: a, className: no.oH, keyClassName: no.Bj }),
                    }),
                })
              : null
        : (0, r.jsx)(B.E, { variant: "text-xs/medium", color: "text-subtle", children: q.intl.string(q.t.W4N1ru) });
}
var nc = n(450173);
function nu(e) {
    let { name: t, applicationId: n } = e,
        i = (0, nt.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: ne.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(f.D, {
        onClick: i,
        className: l()(null != i && nc.On),
        children: (0, r.jsx)(th.A, { className: nc.mO, children: t }),
    });
}
function n_(e) {
    let { gameRecord: t, application: n, game: i, showLiveBadge: a, ref: s } = e;
    return (0, r.jsxs)("div", {
        className: nc.f9,
        children: [
            (0, r.jsx)(e$.A, { className: nc.Gt, game: t ?? n, pid: i?.pid, ref: s }),
            a ? (0, r.jsx)(t9.VideoIcon, { size: "md", color: "currentColor", className: nc.it }) : null,
        ],
    });
}
function nE(e) {
    let { name: t, gameRecord: n, application: i, game: a, isStreaming: s, ref: l } = e,
        o = (0, nt.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: i?.id,
            source: ne.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = null != o,
        c = (0, r.jsx)(n_, { gameRecord: n, application: i, game: a, showLiveBadge: s && !d, ref: l });
    return d
        ? (0, r.jsx)(f.D, {
              onClick: o,
              className: nc.Ow,
              "aria-label": q.intl.formatToPlainString(q.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nA(e) {
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
        { gameRecord: p } = (0, nn.A)(d?.id),
        T =
            ((t = p),
            (n = d),
            (i = c),
            null != t ? t.name : null != n ? n.name : null != i ? i.name : q.intl.string(q.t["UQMV/E"]));
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
            className: nc.cm,
            children: [
                (0, r.jsx)(nE, { name: T, gameRecord: p, application: d, game: c, isStreaming: o, ref: h }),
                (0, r.jsx)(eo, {
                    popoutTargetRef: f,
                    isForceShowSharingPopout: E,
                    setIsForceShowSharingPopout: A,
                    hidePopout: !I,
                    children: (0, r.jsxs)("div", {
                        className: nc.pq,
                        children: [
                            null != T ? (0, r.jsx)(nu, { name: T, applicationId: d?.id }) : null,
                            (0, r.jsx)(nd, { isCurrentlyRunningGame: I, onClickNotSharing: u }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var nh = n(5867);
let nf = {
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
var nI = n(534952),
    np = n(731854),
    nT = n(559626),
    nm = n(821095),
    ng = n(268920),
    nS = n(633217);
function nN(e) {
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
        } = e,
        E = tE.useConfig({ location: "ActivityPanelGameCard" }),
        f = s ? l : i,
        I = O.A.find((e) => null != f && e.migrationData?.replacedBy === f.id),
        p = null == f;
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
            { disableTrack: p },
        ),
        p)
    )
        return null;
    let T = q.intl.formatToPlainString(E.altTitle ? q.t.hUbQT2 : q.t["lo6H6+"], { gameName: f.name }),
        m = q.intl.string(E.altCta ? q.t.jynBQ5 : q.t.lw71Nf);
    s && (m = q.intl.string(nT.default["2cOIOr"]));
    let g = [
        {
            text: m,
            onClick: () => {
                (o(el.i.TAKE_ACTION), d({ analyticsLocations: u }));
            },
        },
    ];
    return (
        s &&
            ((t = "beta"),
            (T = q.intl.formatToPlainString(nT.default.dPuaZE, { applicationName: f.name })),
            (n = { text: q.intl.string(q.t.hvVgAZ), link: I?.migrationData?.helpCenterLink, external: !0 })),
        (0, r.jsx)(h.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: A.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: f, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: T,
            body: q.intl.string(q.t["2lfjU+"]),
            textLink: n,
            targetElementRef: _,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(el.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: g,
        })
    );
}
function nC(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = q.intl.string(q.t.MxAlrB),
        l = q.intl.string(q.t["/UTTEg"]),
        o = [
            {
                text: q.intl.string(q.t.aRIFWD),
                onClick: () => {
                    (i(el.i.TAKE_ACTION), window.open(tu.A.getArticleURL(F.MVz.IN_GAME_FEATURES), "_blank"));
                },
            },
        ];
    return (
        n &&
            ((s = q.intl.string(nT.default.ublzTG)),
            (l = q.intl.string(nT.default.JgM2xu)),
            (t = { type: "video", src: nS.A, fallbackImageSrc: ng.A, aspectRatio: "2/1", loop: !0 })),
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
function nO(e) {
    let {
        activity: t,
        game: n,
        markAsDismissed: i,
        inviteButtonRef: a,
        parentAnalyticsLocation: s,
        analyticsContext: l,
    } = e;
    return (0, r.jsx)(h.A, {
        title: q.intl.string(q.t["0l2pEt"]),
        body: q.intl.string(q.t["DSZUK/"]),
        targetElementRef: a,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(el.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: q.intl.string(q.t.YdkBCH),
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
function nR(e) {
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
        { isEligible: g, displayedApp: S } = (function (e) {
            let { connectionApp: t } = e,
                { data: n } = (0, eE.YY)(t?.parentId ?? t?.id),
                i = nI.APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS.find(
                    (e) => e.applicationId === n?.id,
                );
            return {
                isEligible: null != i && i.getMigrationExperimentEnabled("ActivityPanelGameCard") && null != t,
                displayedApp: n,
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
            return (0, r.jsx)(nN, {
                application: i,
                connectionApp: s,
                isEligibleForIncentivizedAccountLinking: g,
                incentivizedAccountLinkingDisplayedApp: S,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: _,
                analyticsLocations: T,
                accountLinkButtonRef: f,
            });
        case 1:
            return (0, r.jsx)(nC, {
                incentivizedAccountLinkingRewarded: N,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nO, {
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
                (0, r.jsx)(ek, {
                    targetElementRef: E,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: I,
                    markAsDismissed: n,
                })
            );
        case 4:
            return (0, r.jsx)(eb, { targetElementRef: A, markAsDismissed: n });
        default:
            return null;
    }
}
let nL = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(tA.A, { children: t });
});
function ny(e) {
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
                (0, te.pQ)(a.type) && (0, R.gk)(nh.Gd.PANEL)));
    }
    null != l && null != a
        ? ((t = F.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = F.BVt.CHANNEL(F.ME, a.id));
    let I = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e$.A, { className: nm.n8, game: n, size: e$.M.SMALL, ref: u }),
            (0, r.jsx)(eo, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nm.pq,
                    children: [
                        (0, r.jsx)(e0.A, {
                            href: t,
                            onClick: function () {
                                (f(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }));
                            },
                            children: (0, r.jsx)(th.A, { className: nm._W, children: n.name }),
                        }),
                        null != a && (0, te.pQ)(a.type)
                            ? (0, r.jsx)(e0.A, {
                                  href: t,
                                  onClick: f,
                                  children: (0, r.jsx)(tA.A, { className: nm.Ix, children: h }),
                              })
                            : (0, r.jsx)(nL, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nm.cm, children: I });
}
function nD(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(e$.A, { className: nm.n8, game: n, size: e$.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nm.pq,
                    children: [
                        (0, r.jsx)(f.D, {
                            onClick: function () {
                                if (s) return void p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                if (t.intent !== t1.sV.MAIN) {
                                    let e = (0, eP.A)(t.surface);
                                    null != e && (0, e9.pX)(F.BVt.CHANNEL((0, eU.A)(t.surface) ?? F.ME, e));
                                    return;
                                }
                                ew.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: t1.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nm.rB,
                            children: (0, r.jsx)(th.A, { className: nm._W, children: n.name }),
                        }),
                        (0, r.jsx)(nL, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nm.cm, children: o });
}
function nv(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eq.A)(t);
    return (0, r.jsxs)("div", {
        className: nm.cm,
        ref: n,
        children: [
            (0, r.jsx)(eQ.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nm.pq,
                children: [
                    (0, r.jsx)(th.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nm.qi,
                            children: [
                                (0, r.jsx)(I.t, { size: "xxs", color: eM.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e8, { className: nm.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nb = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([tt.default], () => tt.default.getId()),
        A = (0, _.bG)([eV.Ay, tc.A], () => (0, eJ.A)(eV.Ay, tc.A)),
        { enabled: h } = eB.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: f, isWithinThreshold: I } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, _.bG)([eY], () => eY.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (null == n || Date.now() - n.endedAt >= eK) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + eK - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [n]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let i = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i < eK };
        })(),
        p = (0, _.bG)([to.Ay, tn.A], () => tn.A.getChannel(to.Ay.getVoiceChannelId())),
        T = (0, _.bG)([L.Ay], () => L.Ay.getConnectedActivityChannelId()),
        m = (0, _.bG)([tn.A], () => tn.A.getChannel(T)),
        g = (0, _.bG)([tr.A], () => tr.A.getGuild(m?.guild_id)),
        [S, N] = (0, _.yK)([e6.A], () => [e6.A.getCurrentUserActiveStream(), e6.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
        R = m?.type === F.rbe.GUILD_SPACE ? null : O,
        b = (0, _.bG)([eG.A, to.Ay], y.eL),
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
        B = (0, _.bG)([D.Ay], () => (0, eZ.A)(D.Ay) && (0, t_.isWindows)()) || k,
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
            hasAlreadyLinked: Z,
            canStartAuthorization: q,
            connectionApp: Q,
            startAuthorization: J,
        } = (0, e_.RD)(G, { allowedFlows: [tJ._.RPC, tJ._.WEB] }),
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
            return null != e ? nf[e] : void 0;
        }, [A?.id, f?.id]),
        eo = (0, _.bG)([ti.A], () => null != es && ti.A.isMember(es), [es]),
        ec = h && null != es && !eo && (null != A || I) ? es : void 0,
        eu = !(0, _.bG)([D.Ay], () => D.Ay.supports(np.O5.VIDEO)) && (0, t_.isWindows)(),
        eE = null != A && (B || q || eu) && (!H || N?.pid != null),
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
                    isStreamingCurrentRunningGame: A,
                } = e,
                { isQuestBarEmpty: h, hasLoadedQuestBar: f } = (0, P.c9)(),
                I = !f || !h,
                p = !I && !o && null == r && l && null != t,
                { shouldShow: T, markAsDismissed: m } = (0, ez.D3)({
                    application: t,
                    disabled: !p,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: el.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: ez.Yb,
                }),
                g = !I && null != r && o,
                S = a.useMemo(() => {
                    if (I || T) return [];
                    let e = [];
                    return (
                        o && d && t3(t, n, i) && null == i && e.push(E.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(E.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, I, d, i, c, o, T]),
                [N, C] = (0, eT.kn)(S, { groupName: el.m.ACCOUNT_NAME_ZONE }),
                { shouldShow: O, markAsDismissed: R } = (function () {
                    let { disabled: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, eL.A)("AutoclippingAccountPanelCoachmark"),
                        n = (0, _.bG)(
                            [eC.Ay],
                            () => !eC.Ay.hasUserSetAutoclippingSettings() && !eC.Ay.getEnableAutoclipping(),
                        ),
                        i = (0, M.A)((e) => e.isOpen),
                        r = (0, w.G)(),
                        [a, s] = (0, eT.Wl)(
                            e || !t || !n || i || r ? null : E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK,
                            { cooldownDurationMs: ev },
                            el.m.ACCOUNT_NAME_ZONE,
                            !0,
                        );
                    return { shouldShow: a === E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK, markAsDismissed: s };
                })({ disabled: I || g || null != N || (!u && !A) });
            return a.useMemo(() => {
                if (null != N)
                    switch (N) {
                        case E.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    (s(null), C(e));
                                },
                            ];
                        case E.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, C];
                        default:
                            return [null, C];
                    }
                return T ? [0, m] : g ? [1, () => s(null)] : O ? [4, R] : [null, () => {}];
            }, [m, R, C, s, O, T, g, N]);
        })({
            application: G,
            activity: V,
            embeddedActivity: R,
            connectingGameId: ee,
            setConnectingGameId: et,
            canStartAuthorization: q,
            hasAlreadyLinked: Z,
            didStartAuthorization: en,
            gameCommunityGuildId: ec,
            canShowCurrentRunningGamePanel: eE,
            isStreamingCurrentRunningGame: H && null != A && N?.id != null && N.id === A.id,
        }),
        ep = null != f && (1 === eh || (I && (0 === eh || 3 === eh))) ? f : null,
        em = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nA, {
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
                    : null != R && null != G && t3(G, V, R)
                      ? (0, r.jsx)(ny, {
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
                        ? (0, r.jsx)(nD, {
                              application: G,
                              accountLinkUpsellTargetRef: o,
                              frame: b,
                              isActivityPopoutOpen: $,
                          })
                        : H
                          ? (0, r.jsx)(nv, {
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
              className: l()(nm.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: nm.rf,
                  children: [
                      eg,
                      (0, r.jsx)(t6, {
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
                          canStartAuthorization: q,
                          startAuthorization: ei,
                          hasAlreadyLinked: Z,
                          connectionApp: Q,
                      }),
                      (0, r.jsx)(nR, {
                          popover: eh,
                          dismissPopover: ef,
                          application: G,
                          connectionApp: Q,
                          activity: V,
                          runningGame: A,
                          hasAlreadyLinked: Z,
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
