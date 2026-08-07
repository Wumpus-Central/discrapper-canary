"use strict";
n.d(t, { A: () => ng }), n(321073);
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
    I = n(939249),
    f = n(403581),
    p = n(228366),
    T = n(298990),
    m = n(367513),
    g = n(951001),
    S = n(492684),
    N = n(707606),
    C = n(475743),
    O = n(573648),
    R = n(646865),
    L = n(795816),
    D = n(933958),
    y = n(379848),
    v = n(832248),
    b = n(764336),
    M = n(885386),
    P = n(843010),
    U = n(461213),
    w = n(174459),
    G = n(821609),
    x = n(652215),
    k = n(834730),
    F = n(935154),
    V = n(243721),
    B = n(315710),
    H = n(404778),
    j = n(331322),
    W = n(297264),
    Y = n(922016),
    K = n(827827),
    $ = n(481045),
    z = n(395277),
    q = n(375708),
    Z = n(485135);
function X(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: Z.K2,
        children: (0, r.jsx)(G.$, {
            variant: "primary",
            size: "sm",
            text: q.intl.string(z.default.Poezn1),
            onClick: () => {
                t(), (0, K.A)({ nextStatus: x.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function Q(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, _.bG)([U.A], () => U.A.getStatus());
    return (0, r.jsxs)("div", {
        className: Z.E3,
        children: [
            (0, r.jsxs)("div", {
                className: Z.fu,
                children: [
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: q.intl.string(z.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: Z.$v,
                            children: [
                                (0, r.jsx)(F.nW, { status: x.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === x.clD.INVISIBLE
                                            ? q.intl.string(z.default.a3AofS)
                                            : q.intl.string(q.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(V.d, {
                onChange: (e) => {
                    M.tz.updateSetting(e), n && (0, K.A)({ nextStatus: e ? x.clD.ONLINE : x.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function J(e) {
    let { children: t } = e,
        n = (0, a.useRef)(null);
    return (
        (0, B.tj)(n),
        (0, r.jsx)("div", { className: Z.iE, ref: n, children: (0, r.jsx)("div", { className: Z.Qs, children: t }) })
    );
}
function ee(e) {
    let { closePopout: t } = e,
        n = M.tz.useSetting();
    return (0, r.jsxs)(J, {
        children: [
            (0, r.jsx)(Q, { showCurrentGame: n }),
            (0, r.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(z.default["7cfFob"]),
            }),
            (0, r.jsx)(H.c, { className: Z.yF }),
            (0, r.jsx)($.qA, { onClosePopout: t }),
        ],
    });
}
function et(e) {
    let { closePopout: t } = e;
    return (0, r.jsxs)(J, {
        children: [
            (0, r.jsxs)(j.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, r.jsx)(W.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: Z._M,
                        children: q.intl.string(z.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: Z.$v,
                        children: [
                            (0, r.jsx)(F.nW, { status: x.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: q.intl.string(z.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(z.default.Yl0mh4),
            }),
            (0, r.jsx)(X, { closePopout: t }),
        ],
    });
}
function en(e) {
    let { closePopout: t } = e,
        n = M.tz.useSetting();
    return (0, r.jsxs)(J, {
        children: [
            (0, r.jsx)(Q, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, r.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: q.intl.string(z.default["7cfFob"]),
            }),
            (0, r.jsx)(H.c, { className: Z.yF }),
            (0, r.jsx)($.qA, { onClosePopout: t }),
        ],
    });
}
var ei =
    (((i = {})[(i.ActivityNux = 0)] = "ActivityNux"),
    (i[(i.StatusNux = 1)] = "StatusNux"),
    (i[(i.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (i[(i.Activity = 3)] = "Activity"),
    (i[(i.Status = 4)] = "Status"),
    (i[(i.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    i);
function er(e) {
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: s, children: l } = e,
        [o, d] = (0, a.useState)(n),
        c = (0, a.useRef)(null),
        u = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: q.intl.string(z.default.vxVbGP),
                        body: [q.intl.string(z.default["7cfFob"])],
                        action: {
                            text: q.intl.string(z.default.k4tCg2),
                            onClick: () => {
                                M.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: q.intl.string(q.t["ZrN+DT"]), onClick: $.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: q.intl.string(z.default.qKDqet),
                        body: [q.intl.string(z.default.Yl0mh4)],
                        action: {
                            text: q.intl.string(z.default.Poezn1),
                            onClick: () => {
                                (0, K.A)({ nextStatus: x.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: q.intl.string(z.default["6cA8HZ"]),
                        body: [q.intl.string(z.default["7cfFob"])],
                        action: {
                            text: q.intl.string(z.default.k4tCg2),
                            onClick: () => {
                                M.tz.updateSetting(!0), (0, K.A)({ nextStatus: x.clD.ONLINE });
                            },
                        },
                        textLink: { text: q.intl.string(q.t["ZrN+DT"]), onClick: $.L7 },
                    };
                case 3:
                    return { type: "popout", children: ee };
                case 4:
                    return { type: "popout", children: et };
                case 5:
                    return { type: "popout", children: en };
                default:
                    return null;
            }
        })(o),
        _ = (0, a.useRef)(t);
    if (
        ((0, a.useEffect)(() => {
            t && !_.current && d(n), t !== _.current && (_.current = t);
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
                                e.onClick?.(t), i();
                            },
                        },
                    ],
                }),
                l,
            ],
        });
    }
    let { children: E } = u;
    return (0, r.jsx)(Y.Y, {
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
var ea = n(49999);
function es(e) {
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: i,
            popoutTargetRef: s,
            hidePopout: l = !1,
        } = e,
        o = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, b.c9)(),
                r = M.tz.useSetting(),
                a = (0, P.G)(),
                s = (0, _.bG)([U.A], () => U.A.getStatus()),
                { isOpen: l } = (0, v.A)();
            if (((n && i) || t) && !a && !l && !__OVERLAY__) {
                if (!r && s === x.clD.INVISIBLE) return t ? ei.ActivityAndStatus : ei.ActivityAndStatusNux;
                if (!r) return t ? ei.Activity : ei.ActivityNux;
                if (s === x.clD.INVISIBLE) return t ? ei.Status : ei.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, a.useEffect)(() => {
        n && w.default.track(x.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let d = n || l ? [] : [E.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(y.Ay, {
        contentTypes: d,
        children: (e) => {
            let { visibleContent: a, markAsDismissed: l } = e,
                d = a === E.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(er, {
                showPopout: d,
                popoutState: o,
                handleClose: function () {
                    l(ea.i.USER_DISMISS), i(!1);
                },
                popoutTargetRef: s,
                children: t,
            });
        },
    });
}
var el = n(688810),
    eo = n(139286),
    ed = n(772680),
    ec = n(206828),
    eu = n(627363),
    e_ = n(429913),
    eE = n(568598),
    eA = n(384059),
    eh = n(47167),
    eI = n(793574),
    ef = n(131607),
    ep = n(780964),
    eT = n(766075),
    em = n(763827),
    eg = n(927813),
    eS = n(915725),
    eN = n(572164),
    eC = n(693117),
    eO = n(118328),
    eR = n(253146);
let eL = 2 * eg.A.Millis.WEEK;
function eD(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        i = (0, eN.Et)(),
        a = (0, _.bG)([eS.Ay], () => eS.Ay.getEnableAutoclipping()),
        s = (0, _.bG)([em.A], () => em.A.getChannelId());
    return (0, r.jsx)(
        h.A,
        {
            shouldShow: !0,
            targetElementRef: t,
            title: "Auto clipping is here",
            body: "Automatically capture gaming moments with Auto-Clip.",
            badge: "early_access",
            graphic: { type: "image", src: eR, aspectRatio: "6/4" },
            position: "top",
            caretConfig: { align: "center" },
            actions: [
                {
                    text: "Enable Autoclipping",
                    onClick: () => {
                        n(ea.i.TAKE_ACTION),
                            i ||
                                (0, eC.yO)({
                                    clipsEnabled: !0,
                                    trackAnalytics: !0,
                                    analyticsLocation: eI.A.CLIPS_ACCOUNT_PANEL_COACHMARK,
                                }),
                            a || (0, eC.uL)(!0, !0, eI.A.CLIPS_ACCOUNT_PANEL_COACHMARK),
                            (0, eT.openUserSettings)(ep.X.CLIPS_PANEL);
                    },
                },
            ],
            onRequestClose: () => {
                n(ea.i.USER_DISMISS);
            },
        },
        s ?? "disconnected",
    );
}
var ey = n(404374),
    ev = n(625180),
    eb = n(91242),
    eM = n(66834);
function eP(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: s, markAsDismissed: l } = e,
        { analyticsLocations: o } = (0, el.Ay)();
    return (
        a.useEffect(() => {
            w.default.track(x.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: o, application_id: n, guild_id: s });
        }, [n, s, o]),
        (0, r.jsx)(h.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                w.default.track(x.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: o,
                    application_id: n,
                    guild_id: s,
                }),
                    l(ea.i.USER_DISMISS);
            },
            title: q.intl.formatToPlainString(q.t.ry9SJw, { gameName: i }),
            body: q.intl.string(q.t.YPpOov),
            actions: [
                {
                    text: q.intl.string(q.t.RVfNGU),
                    onClick: () => {
                        w.default.track(x.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: s,
                        }),
                            l(ea.i.TAKE_ACTION),
                            eM.A.joinGuild(s, { source: x.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
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
var eG = n(952818);
let ex = eG.Ay.getRunningGames(),
    ek = [];
class eF extends _.Ay.Store {
    initialize() {
        this.syncWith([eG.Ay], () =>
            (function () {
                let e = eG.Ay.getRunningGames();
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
let eV = new eF(p.h, {}),
    eB = 5 * eg.A.Millis.MINUTE;
var eH = n(769015),
    ej = n(334074),
    eW = n(279250),
    eY = n(880144),
    eK = n(277680),
    e$ = n(118277),
    ez = n(905552),
    eq = n(95035),
    eZ = n(567249),
    eX = n(929921),
    eQ = n(650338),
    eJ = n(753070),
    e0 = n(945224);
function e1(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(k.E, { className: l()({ [e0.Q]: null == n }, t), color: n, ...i });
}
var e2 = n(95701),
    e3 = n(616356),
    e4 = n(280450),
    e5 = n(734057),
    e6 = n(184989),
    e7 = n(71393),
    e8 = n(293246),
    e9 = n(576705),
    te = n(290863),
    tt = n(994500),
    tn = n(309010),
    ti = n(287809),
    tr = n(157257),
    ta = n(975571),
    ts = n(723702);
let tl = (0, eU.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var to = n(994314),
    td = n(485599),
    tc = n(141628),
    tu = n(192308),
    t_ = n(959988),
    tE = n(183623),
    tA = n(241541),
    th = n(70688),
    tI = n(687966),
    tf = n(34188),
    tp = n(942857),
    tT = n(55730),
    tm = n(869003),
    tg = n(521588),
    tS = n(702841),
    tN = n(176781),
    tC = n(442433),
    tO = n(42473),
    tR = n(200542),
    tL = n(414405);
function tD(e) {
    (0, tC.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e("66601"), n.e("44751")]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let ty = function () {
    let { parentAnalyticsLocation: e } = (0, el.Ay)(),
        t = (0, eN.Et)(),
        n = (0, eN.XT)(),
        i = (0, tS.bG)([eS.Ay], () => eS.Ay.getIsAtMaxSaveClipOperations()),
        a = (0, tS.bG)([e3.A], () => e3.A.getCurrentUserActiveStream()),
        s = t && (a?.state === x.XYD.ACTIVE || n),
        { enableGamePanelEntrypoint: l } = tR.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: o, clipsSourceAttached: d } = (0, tL.A)();
    return l && s
        ? (0, r.jsx)(tO.A, {
              disabled: i || !d,
              tooltipText: o,
              onClick: () => {
                  (0, eC.l0)(), (0, eA.X)(e, eA.O.CLIP);
              },
              onContextMenu: tD,
              icon: tN.x,
          })
        : null;
};
var tv = n(580954),
    tb = n(907878),
    tM = n(831617);
let tP = (0, eU.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tU = n(610010),
    tw = n(475669),
    tG = n(275695);
function tx(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tw.A], () => null != a && tw.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
                      src: "https://cdn.discordapp.com/assets/content/24bc847e3e4dae2b04997ce7374d99a3d11da678af3c9d7664bbff99ed1bfdb1.svg",
                      aspectRatio: "6/4",
                  },
        actions: [{ text: i, variant: "primary", onClick: l }],
        targetElementRef: s,
        shouldShow: !0,
        position: "top",
        onRequestClose: o,
    });
}
function tk(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tx, {
        title: q.intl.formatToPlainString(tG.default.lKzVNu, { gameName: t }),
        body: q.intl.string(tG.default.qqjm8O),
        ctaText: q.intl.string(tG.default["eJg+Zm"]),
        ...n,
    });
}
function tF(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tx, {
        title: q.intl.formatToPlainString(tG.default.lwwiHE, { gameName: t }),
        body: q.intl.string(tG.default.B33GXN),
        ctaText: q.intl.string(tG.default["968/QC"]),
        ...n,
    });
}
var tV = n(338771),
    tB = n(212637),
    tH = n(453774),
    tj = n(44724),
    tW = n(153488),
    tY = n(942370),
    tK = n(493285);
function t$(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === x.$pd.PLAYING &&
              (0, tT.A)(t, x.jUm.JOIN))
    );
}
let tz = a.memo(function (e) {
        let {
                stream: t,
                canGoLive: i,
                guildId: s,
                isStreaming: l,
                channel: o,
                canStream: c,
                runningGame: u,
                embeddedActivity: E,
                frame: A,
                activity: I,
                application: f,
                analyticsContext: p,
                inviteButtonRef: m,
                accountLinkButtonRef: g,
                startAuthorization: S,
                canStartAuthorization: N,
                hasAlreadyLinked: C,
                connectionApp: O,
            } = e,
            { parentAnalyticsLocation: L, analyticsLocations: D } = (0, el.Ay)(),
            y = (0, tH.A)(f?.id),
            v = t$(f, I, E),
            { enabled: b } = tP.useConfig({ location: "activity-panel" }),
            M = (0, tU.Bp)("activity-panel"),
            P = (0, tM.C$)(s ?? void 0, "activity-panel"),
            U = (0, _.bG)([tW.A], () => tW.A.hasConsented(x.YAq.PERSONALIZATION)),
            G = (0, tU.TF)(u?.id, { shouldFetch: M || P }),
            k = b && U && G,
            F = k && M,
            V = k && P,
            B = a.useCallback(() => {
                d()(null != I, "Received null activity"),
                    w.default.track(x.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: u?.id ?? null,
                        application_id: I.application_id,
                    }),
                    (0, eA.X)(L, eA.O.INVITE),
                    w.default.track(x.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: I.application_id,
                        location: p.location,
                    }),
                    (0, T.qf)(I, !1);
            }, [I, p, L, u]),
            H = a.useCallback(
                (e, t) => () => {
                    (0, eA.X)(L, eA.O.LEAVE_ACTIVITY),
                        tm.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [L],
            ),
            j = a.useCallback(
                (e) => () => {
                    (0, eA.X)(L, eA.O.LEAVE_ACTIVITY), (0, tv.A)().leaveFrame(e);
                },
                [L],
            ),
            W = a.useCallback(() => {
                (0, tV.A)(t);
            }, [t]),
            Y = a.useCallback(() => {
                (0, tu.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("16123"),
                        n.e("18710"),
                        n.e("98552"),
                        n.e("86672"),
                        n.e("38601"),
                        n.e("36946"),
                        n.e("44727"),
                        n.e("6565"),
                        n.e("14304"),
                        n.e("98610"),
                    ]).then(n.bind(n, 477156));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourcePID: u?.pid,
                            selectSource: null != tn.Ay.getVoiceChannelId(),
                            analyticsLocations: D,
                        });
                });
            }, [u, D]),
            K = f?.name ?? u?.name ?? "",
            $ = a.useCallback(() => {
                (0, tb.pK)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                    (0, tu.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("14855"), n.e("82730"), n.e("65058")]).then(
                            n.bind(n, 154649),
                        );
                        return (t) => (0, r.jsx)(e, { gameName: K, gameApplicationId: u?.id, ...t });
                    });
            }, [K, u?.id]),
            z = a.useCallback(() => {
                d()(null != s, "Received null guildId"),
                    (0, tb.pK)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                    (0, tB.A)({ analyticsLocations: D, analyticsLocation: p.location, guildId: s });
            }, [s, D, p.location, u?.id]),
            Z = a.useRef(null),
            [X, Q] = a.useState(!1);
        a.useEffect(
            () => () => {
                null != Z.current && clearTimeout(Z.current);
            },
            [],
        ),
            a.useEffect(() => {
                C && (Q(!1), null != Z.current && (clearTimeout(Z.current), (Z.current = null)));
            }, [C]);
        let J = null == y || null == f ? null : (0, r.jsx)(tX, { applicationId: y.id }),
            ee = F
                ? (0, r.jsx)(tZ, {
                      tooltipText: q.intl.formatToPlainString(tG.default.YhnUVO, { gameName: K }),
                      onClick: $,
                      onViewed: () => (0, tb.ET)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, r.jsx)(tk, {
                              gameName: K,
                              runningGameId: u?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  $(), n(ea.i.TAKE_ACTION), i(ea.i.TAKE_ACTION);
                              },
                              onClose: () => n(ea.i.USER_DISMISS),
                          });
                      },
                  })
                : V
                  ? (0, r.jsx)(tZ, {
                        tooltipText: q.intl.formatToPlainString(tG.default.lwwiHE, { gameName: K }),
                        onClick: z,
                        onViewed: () => (0, tb.ET)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, r.jsx)(tF, {
                                gameName: K,
                                runningGameId: u?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    z(), n(ea.i.TAKE_ACTION), i(ea.i.TAKE_ACTION);
                                },
                                onClose: () => n(ea.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            et = (function () {
                let e, t, n;
                if ((null == u && null != E && !(0, R.f)()) || (!l && !i)) return null;
                let a = null;
                return (
                    l
                        ? ((e = !1),
                          (t = () => {
                              W(), (0, eA.X)(L, eA.O.STREAM, !1);
                          }),
                          (n = t_.G),
                          (a = q.intl.string(q.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                Y(), (0, eA.X)(L, eA.O.STREAM, !0);
                            }),
                            (n = tE.F),
                            (a =
                                null != u
                                    ? q.intl.formatToPlainString(q.t.AB5gTy, { game: u.name })
                                    : q.intl.string(q.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = tE.F),
                            null != o && (0, e2.gV)(o.type) && (a = q.intl.string(q.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: tK.IF,
                        children: (0, r.jsx)(tO.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                v && null == E
                    ? (0, r.jsx)(tO.A, { ref: m, tooltipText: q.intl.string(q.t["hC/Zey"]), onClick: B, icon: tA.D })
                    : null,
            ei =
                null == E
                    ? null
                    : (0, r.jsx)(tO.A, {
                          tooltipText: q.intl.string(q.t["R/FK4A"]),
                          onClick: H(E.applicationId, E.location),
                          icon: th.o,
                      }),
            er =
                null == A
                    ? null
                    : (0, r.jsx)(tO.A, { tooltipText: q.intl.string(q.t["R/FK4A"]), onClick: j(A.id), icon: th.o }),
            es =
                !N || C
                    ? null
                    : (0, r.jsx)(tq, {
                          runningGame: u,
                          startAuthorization: function () {
                              S({ analyticsLocations: D }) === tY._.RPC &&
                                  (Q(!0),
                                  null != Z.current && clearTimeout(Z.current),
                                  (Z.current = setTimeout(() => {
                                      Q(!1);
                                  }, 9e4)));
                          },
                          connectionApp: O,
                          ref: g,
                      }),
            eo =
                !N || C
                    ? null
                    : (0, r.jsx)(h.A, {
                          title: q.intl.string(q.t.ULvRFd),
                          body: q.intl.string(q.t["HJJDr+"]),
                          targetElementRef: g,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: X,
                          onRequestClose: () => {
                              Q(!1), null != Z.current && (clearTimeout(Z.current), (Z.current = null));
                          },
                      });
        return (0, r.jsxs)("div", {
            className: tK.o1,
            children: [es ?? J ?? en, ee, (ei ?? er) == null ? (0, r.jsx)(ty, {}) : null, et, ei ?? er, eo],
        });
    }),
    tq = a.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: a } = e;
        return (0, r.jsx)(tO.A, {
            ref: t,
            onClick: () => {
                w.default.track(x.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: a?.id ?? null,
                }),
                    i();
            },
            icon: tc.A,
            tooltipText: q.intl.string(q.t.sbdnpw),
        });
    });
function tZ(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: s } = e,
        l = a.useRef(null),
        o = a.useRef(!1);
    a.useEffect(() => {
        o.current || ((o.current = !0), i());
    }, [i]);
    let d = (0, tp.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: u } = (0, b.c9)(),
        [_, A] = (0, ef.kn)(!d && c && u ? [E.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [h, I] = (0, ef.kn)([E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        f = a.useCallback(() => {
            A(ea.i.TAKE_ACTION), I(ea.i.TAKE_ACTION), n();
        }, [A, I, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tK.IF,
                children: [
                    (0, r.jsx)("div", { className: tK.uD, children: (0, r.jsx)("div", { className: tK.Z9 }) }),
                    (0, r.jsx)(tO.A, { ref: l, tooltipText: t, onClick: f, icon: tI._ }),
                    h === E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, r.jsx)(tg.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != _ && s({ targetElementRef: l, markAsDismissed: A, markBadgeAsDismissed: I }),
        ],
    });
}
function tX(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        w.default.track(x.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tj.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tj.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            w.default.track(x.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s();
        }, [t, s]);
    return (0, r.jsx)(tO.A, { tooltipText: q.intl.string(q.t.vyaWs7), onClick: l, onMouseDown: i, icon: tf.U, ref: n });
}
var tQ = n(428689),
    tJ = n(409626),
    t0 = n(692969);
let t1 = (0, eU.mj)({
    kind: "user",
    name: "2026-07-rtc-panel-game-card",
    defaultConfig: { improvedGameCard: !1 },
    variations: { 1: { improvedGameCard: !0 } },
});
var t2 = n(475358),
    t3 = n(205302);
function t4(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(I.D, {
        className: t3.kL,
        onClick: t,
        children: (0, r.jsx)(k.E, {
            className: t3.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: q.intl.string(q.t.jfrLLb),
        }),
    });
}
var t5 = n(532624),
    t6 = n(350535),
    t7 = n(16590),
    t8 = n(412126);
function t9(e) {
    let { isStreaming: t, isCurrentlyRunningGame: n, onClickNotSharing: i } = e,
        a = (0, _.bG)([t5.Ay], () => t5.Ay.getKeybindForAction(x.hCu.SAVE_CLIP)),
        s = null != a && a.shortcut.length > 0 ? t6.dI(a.shortcut, !0) : null,
        l = (0, eN.Et)(),
        o = (0, eN.XT)(),
        d = M.tz.useSetting(),
        c = (0, _.bG)([U.A], () => U.A.getStatus()),
        u = !__OVERLAY__ && (!d || c === x.clD.INVISIBLE),
        E = l && (t || o) && n && null != s;
    return n
        ? u
            ? (0, r.jsx)(t4, { onClick: i })
            : E
              ? (0, r.jsx)(k.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: t8.En,
                    tag: "div",
                    children: q.intl.format(t7.default.ESZwQX, {
                        keybind: s,
                        keybindHook: () => (0, r.jsx)(t2.e, { shortcut: s, className: t8.oH, keyClassName: t8.Bj }),
                    }),
                })
              : null
        : (0, r.jsx)(k.E, { variant: "text-xs/medium", color: "text-subtle", children: q.intl.string(q.t.W4N1ru) });
}
var ne = n(914782);
function nt(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t0.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: tJ.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(I.D, {
        onClick: i,
        className: l()(null != i && ne.On),
        children: (0, r.jsx)(td.A, { className: ne.mO, children: t }),
    });
}
function nn(e) {
    let { application: t, game: n, showLiveBadge: i, ref: a } = e;
    return (0, r.jsxs)("div", {
        className: ne.f9,
        children: [
            (0, r.jsx)(eH.A, { className: ne.Gt, game: t, pid: n?.pid, ref: a }),
            i ? (0, r.jsx)(tQ.n, { size: "md", color: "currentColor", className: ne.it }) : null,
        ],
    });
}
function ni(e) {
    let { name: t, application: n, game: i, isStreaming: a, clickable: s, ref: l } = e,
        o = (0, t0.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: n?.id,
            source: tJ.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = s && null != o,
        c = (0, r.jsx)(nn, { application: n, game: i, showLiveBadge: a && !d, ref: l });
    return d
        ? (0, r.jsx)(I.D, {
              onClick: o,
              className: ne.Ow,
              "aria-label": q.intl.formatToPlainString(q.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nr(e) {
    let t,
        n,
        {
            isStreaming: i,
            application: s,
            game: l,
            onClickNotSharing: o,
            isForceShowSharingPopout: d,
            setIsForceShowSharingPopout: c,
            ref: u,
            popoutTargetRef: E,
            isCurrentlyRunningGame: A,
        } = e,
        h = null != s ? s.name : null != l ? l.name : q.intl.string(q.t["UQMV/E"]);
    (t = M.tz.useSetting()),
        (n = (0, _.bG)([U.A], () => U.A.getStatus())),
        (0, a.useEffect)(() => {
            w.default.track(x.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === x.clD.INVISIBLE,
            });
        }, [t, n]);
    let { improvedGameCard: I } = t1.useConfig({ location: "RunningGameCard" });
    return (0, r.jsxs)("div", {
        className: ne.cm,
        children: [
            (0, r.jsx)(ni, { name: h, application: s, game: l, isStreaming: i, clickable: I, ref: u }),
            (0, r.jsx)(es, {
                popoutTargetRef: E,
                isForceShowSharingPopout: d,
                setIsForceShowSharingPopout: c,
                hidePopout: !A,
                children: (0, r.jsxs)("div", {
                    className: ne.pq,
                    children: [
                        null != h ? (0, r.jsx)(nt, { name: h, applicationId: s?.id }) : null,
                        (0, r.jsx)(t9, { isStreaming: i, isCurrentlyRunningGame: A, onClickNotSharing: o }),
                    ],
                }),
            }),
        ],
    });
}
var na = n(5867),
    ns = n(165610);
let nl = {
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
var no = n(360308),
    nd = n(911070),
    nc = n(524224),
    nu = n(268920),
    n_ = n(633217);
function nE(e) {
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
        E = tl.useConfig({ location: "ActivityPanelGameCard" }),
        I = s ? l : i,
        f = O.A.find((e) => null != I && e.migrationData?.replacedBy === I.id),
        p = null == I;
    if (
        ((0, eo.A)(
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
    let T = q.intl.formatToPlainString(E.altTitle ? q.t.hUbQT2 : q.t["lo6H6+"], { gameName: I.name }),
        m = q.intl.string(E.altCta ? q.t.jynBQ5 : q.t.lw71Nf);
    s && (m = q.intl.string(nd.default["2cOIOr"]));
    let g = [
        {
            text: m,
            onClick: () => {
                o(ea.i.TAKE_ACTION), d({ analyticsLocations: u });
            },
        },
    ];
    return (
        s &&
            ((t = "beta"),
            (T = q.intl.formatToPlainString(nd.default.dPuaZE, { applicationName: I.name })),
            (n = { text: q.intl.string(q.t.hvVgAZ), link: f?.migrationData?.helpCenterLink, external: !0 })),
        (0, r.jsx)(h.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: A.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: I, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: T,
            body: q.intl.string(q.t["2lfjU+"]),
            textLink: n,
            targetElementRef: _,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(ea.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: g,
        })
    );
}
function nA(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = q.intl.string(q.t.MxAlrB),
        l = q.intl.string(q.t["/UTTEg"]),
        o = [
            {
                text: q.intl.string(q.t.aRIFWD),
                onClick: () => {
                    i(ea.i.TAKE_ACTION), window.open(ta.A.getArticleURL(x.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((s = q.intl.string(nd.default.ublzTG)),
            (l = q.intl.string(nd.default.JgM2xu)),
            (t = { type: "video", src: n_.A, fallbackImageSrc: nu.A, aspectRatio: "2/1", loop: !0 })),
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
            onRequestClose: () => i(ea.i.USER_DISMISS),
        })
    );
}
function nh(e) {
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
        onRequestClose: () => i(ea.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: q.intl.string(q.t.YdkBCH),
                onClick: () => {
                    i(ea.i.TAKE_ACTION),
                        d()(null != t, "Received null activity"),
                        w.default.track(x.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, eA.X)(s, eA.O.INVITE),
                        w.default.track(x.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: t.application_id,
                            location: l.location,
                        }),
                        (0, T.qf)(t, !1);
                },
            },
        ],
    });
}
function nI(e) {
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
            accountLinkButtonRef: I,
            gameCommunityGuildId: f,
            parentAnalyticsLocation: p,
            analyticsLocations: T,
            analyticsContext: m,
        } = e,
        { isEligible: g, displayedApp: S } = (function (e) {
            let { connectionApp: t } = e,
                { data: n } = (0, eu.YY)(t?.parentId ?? t?.id),
                i = no.APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS.find(
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
                        (0, ed.RI)({
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
            return (0, r.jsx)(nE, {
                application: i,
                connectionApp: s,
                isEligibleForIncentivizedAccountLinking: g,
                incentivizedAccountLinkingDisplayedApp: S,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: _,
                analyticsLocations: T,
                accountLinkButtonRef: I,
            });
        case 1:
            return (0, r.jsx)(nA, {
                incentivizedAccountLinkingRewarded: N,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nh, {
                activity: l,
                game: o,
                markAsDismissed: n,
                inviteButtonRef: h,
                parentAnalyticsLocation: p,
                analyticsContext: m,
            });
        case 3:
            return (
                d()(i?.id != null && i?.name != null && null != f, "Game community upsell requires these as non null"),
                (0, r.jsx)(eP, {
                    targetElementRef: E,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: f,
                    markAsDismissed: n,
                })
            );
        case 4:
            return (0, r.jsx)(eD, { targetElementRef: A, markAsDismissed: n });
        default:
            return null;
    }
}
let nf = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(to.A, { children: t });
});
function np(e) {
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
    function I() {
        d()(null != a, "Channel cannot be null during navigation click"),
            g.A.channelListScrollTo(a.guild_id ?? x.ME, a.id),
            !E &&
                ((0, e2.gV)(a.type) &&
                    m.A.selectParticipant(
                        a.id,
                        (0, eE.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, e2.pQ)(a.type) && (0, L.gk)(na.Gd.PANEL));
    }
    null != l && null != a
        ? ((t = x.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = x.BVt.CHANNEL(x.ME, a.id));
    let f = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eH.A, { className: nc.n8, game: n, size: eH.M.SMALL, ref: u }),
            (0, r.jsx)(es, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nc.pq,
                    children: [
                        (0, r.jsx)(eq.A, {
                            href: t,
                            onClick: function () {
                                I(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                            },
                            children: (0, r.jsx)(td.A, { className: nc._W, children: n.name }),
                        }),
                        null != a && (0, e2.pQ)(a.type)
                            ? (0, r.jsx)(eq.A, {
                                  href: t,
                                  onClick: I,
                                  children: (0, r.jsx)(to.A, { className: nc.Ix, children: h }),
                              })
                            : (0, r.jsx)(nf, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nc.cm, children: f });
}
function nT(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eH.A, { className: nc.n8, game: n, size: eH.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nc.pq,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: function () {
                                s
                                    ? p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : ev.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: ns.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nc.rB,
                            children: (0, r.jsx)(td.A, { className: nc._W, children: n.name }),
                        }),
                        (0, r.jsx)(nf, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nc.cm, children: o });
}
function nm(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eK.A)(t);
    return (0, r.jsxs)("div", {
        className: nc.cm,
        ref: n,
        children: [
            (0, r.jsx)(e$.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nc.pq,
                children: [
                    (0, r.jsx)(td.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nc.qi,
                            children: [
                                (0, r.jsx)(f.t, { size: "xxs", color: ey.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e1, { className: nc.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let ng = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([e4.default], () => e4.default.getId()),
        A = (0, _.bG)([eG.Ay, tr.A], () => (0, ez.A)(eG.Ay, tr.A)),
        { enabled: h } = ew.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: I, isWithinThreshold: f } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, _.bG)([eV], () => eV.getLastPreviouslyRunningGame());
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
        p = (0, _.bG)([tn.Ay, e5.A], () => e5.A.getChannel(tn.Ay.getVoiceChannelId())),
        T = (0, _.bG)([D.Ay], () => D.Ay.getConnectedActivityChannelId()),
        m = (0, _.bG)([e5.A], () => e5.A.getChannel(T)),
        g = (0, _.bG)([e7.A], () => e7.A.getGuild(m?.guild_id)),
        [S, N] = (0, _.yK)([e3.A], () => [e3.A.getCurrentUserActiveStream(), e3.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([D.Ay], () => D.Ay.getCurrentEmbeddedActivity()),
        R = (0, _.bG)([eb.A], () => (0, ns.ny)(eb.A.getMainFrame())),
        L = (0, _.bG)([e7.A, e9.A], () => null == p || eW.vz(p, e7.A, e9.A, !1)),
        [y] = (0, e_.A)([
            (function () {
                if (null != N && null != N.id) return N.id;
                if (null != A) return A.id;
                if (null != O) return O.applicationId;
                if (null != R) return R.applicationId;
                if (null != I && null != I.id) return I.id;
            })(),
        ]),
        M =
            ((0, _.bG)([D.Ay], () => D.Ay.getCurrentEmbeddedActivity()),
            (0, _.bG)([e8.Ay], () => (0, eY.A)(e8.Ay) && (0, ts.isWindows)()) || !1),
        U = (0, _.bG)([te.A], () => (null != c ? te.A.findActivity(c, (e) => e.type === x.$pd.PLAYING) : null)),
        G = null != S && S.ownerId === c && S.state !== x.XYD.ENDED,
        k = (0, _.bG)([ti.default, tt.A], () => (null != m ? (0, eh.m1)(m, ti.default, tt.A) : void 0)),
        F = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([eX.A], () => eX.A.getState());
            if (e !== eJ.on.RESOLUTION_720 || t === eJ.kn.FPS_60) return `${(0, eJ.zr)(e)} ${(0, eQ.Bs)(t)}`;
        })(),
        [V, B] = a.useState(!1),
        H = (0, _.bG)([eZ.A], () => eZ.A.getWindowOpen(x.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: j, analyticsLocations: W } = (0, el.Ay)(),
        {
            hasAlreadyLinked: Y,
            canStartAuthorization: K,
            connectionApp: $,
            startAuthorization: z,
        } = (0, ec.RD)(y, { allowedFlows: [tY._.RPC, tY._.WEB] }),
        [q, Z] = a.useState(null),
        X = null != q,
        Q = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Z(y?.id ?? null), z(...t);
            },
            [y?.id, z],
        ),
        J = (0, C.Ay)(y?.id);
    a.useEffect(() => {
        null != y && J !== y?.id && Z(null);
    }, [y, J]);
    let ee = (0, u.K)((e) => {
            e &&
                null != $ &&
                w.default.track(x.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: A?.id ?? null, application_id: $.id });
        }),
        et = a.useMemo(() => {
            let e = A?.id ?? I?.id;
            return null != e ? nl[e] : void 0;
        }, [A?.id, I?.id]),
        en = (0, _.bG)([e6.A], () => null != et && e6.A.isMember(et), [et]),
        ei = h && null != et && !en && (null != A || f) ? et : void 0,
        er = null != A && (M || K) && (!G || N?.pid != null),
        [es, eo] = (function (e) {
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
                { isQuestBarEmpty: h, hasLoadedQuestBar: I } = (0, b.c9)(),
                f = !I || !h,
                p = !f && !o && null == r && l && null != t,
                { shouldShow: T, markAsDismissed: m } = (0, ej.D3)({
                    application: t,
                    disabled: !p,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: ea.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: ej.Yb,
                }),
                g = !f && null != r && o,
                S = a.useMemo(() => {
                    if (f || T) return [];
                    let e = [];
                    return (
                        o && d && t$(t, n, i) && null == i && e.push(E.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(E.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, f, d, i, c, o, T]),
                [N, C] = (0, ef.kn)(S, ea.m.ACCOUNT_NAME_ZONE, !1),
                { shouldShow: O, markAsDismissed: R } = (function () {
                    let { disabled: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, eO.A)("AutoclippingAccountPanelCoachmark"),
                        n = (0, eN.Et)(),
                        i = (0, _.bG)(
                            [eS.Ay],
                            () => !eS.Ay.hasUserSetAutoclippingSettings() && !eS.Ay.getEnableAutoclipping(),
                        ),
                        r = (0, v.A)((e) => e.isOpen),
                        a = (0, P.G)(),
                        s = !e && t && n && i && !r && !a,
                        [l, o] = (0, ef.Wl)(
                            s ? E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK : null,
                            { cooldownDurationMs: eL },
                            ea.m.ACCOUNT_NAME_ZONE,
                            !0,
                        );
                    return { shouldShow: l === E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK, markAsDismissed: o };
                })({ disabled: f || g || null != N || (!u && !A) });
            return a.useMemo(() => {
                if (null != N)
                    switch (N) {
                        case E.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    s(null), C(e);
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
            application: y,
            activity: U,
            embeddedActivity: O,
            connectingGameId: q,
            setConnectingGameId: Z,
            canStartAuthorization: K,
            hasAlreadyLinked: Y,
            didStartAuthorization: X,
            gameCommunityGuildId: ei,
            canShowCurrentRunningGamePanel: er,
            isStreamingCurrentRunningGame: G && null != A && N?.id != null && N.id === A.id,
        }),
        ed = null != I && (1 === es || (f && (0 === es || 3 === es))) ? I : null,
        eu = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nr, {
                    isStreaming: G,
                    application: e,
                    game: t,
                    onClickNotSharing: () => B(!0),
                    isForceShowSharingPopout: V,
                    setIsForceShowSharingPopout: B,
                    ref: o,
                    popoutTargetRef: s,
                    isCurrentlyRunningGame: i,
                });
            },
            [V, G],
        ),
        eE = a.useMemo(
            () =>
                er
                    ? eu(y, A, { isGameRunning: !0 })
                    : null != O && null != y && t$(y, U, O)
                      ? (0, r.jsx)(np, {
                            application: y,
                            embeddedActivity: O,
                            channel: m,
                            channelName: k,
                            guildForConnectedChannel: g,
                            isForceShowSharingPopout: V,
                            setIsForceShowSharingPopout: B,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: s,
                            isActivityPopoutOpen: H,
                        })
                      : null != R &&
                          null != y &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: y, frame: R })
                        ? (0, r.jsx)(nT, {
                              application: y,
                              accountLinkUpsellTargetRef: o,
                              frame: R,
                              isActivityPopoutOpen: H,
                          })
                        : G
                          ? (0, r.jsx)(nm, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: F,
                            })
                          : null != ed
                            ? eu(y, ed, { isGameRunning: !1 })
                            : null,
            [N, U, y, k, m, O, R, g, H, V, G, er, ed, eu, A, F],
        );
    return null == eE
        ? null
        : (0, r.jsx)("div", {
              className: l()(nc.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: nc.rf,
                  children: [
                      eE,
                      (0, r.jsx)(tz, {
                          stream: S,
                          canGoLive: M,
                          guildId: t,
                          isStreaming: G,
                          channel: m,
                          canStream: L,
                          runningGame: A,
                          activity: U,
                          application: y,
                          embeddedActivity: O,
                          frame: R,
                          analyticsContext: n,
                          inviteButtonRef: d,
                          accountLinkButtonRef: ee,
                          canStartAuthorization: K,
                          startAuthorization: Q,
                          hasAlreadyLinked: Y,
                          connectionApp: $,
                      }),
                      (0, r.jsx)(nI, {
                          popover: es,
                          dismissPopover: eo,
                          application: y,
                          connectionApp: $,
                          activity: U,
                          runningGame: A,
                          hasAlreadyLinked: Y,
                          didStartAuthorization: X,
                          startAuthorization: Q,
                          accountLinkUpsellTargetRef: o,
                          activityPopoutTargetRef: s,
                          inviteButtonRef: d,
                          accountLinkButtonRef: ee,
                          gameCommunityGuildId: ei,
                          parentAnalyticsLocation: j,
                          analyticsLocations: W,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
