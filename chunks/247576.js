"use strict";
n.d(t, { A: () => ny }), n(321073);
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
    R = n(573648),
    O = n(646865),
    L = n(795816),
    y = n(933958),
    D = n(379848),
    v = n(832248),
    b = n(201805),
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
    Z = n(375708),
    q = n(485135);
function X(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: q.K2,
        children: (0, r.jsx)(G.$, {
            variant: "primary",
            size: "sm",
            text: Z.intl.string(z.default.Poezn1),
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
        className: q.E3,
        children: [
            (0, r.jsxs)("div", {
                className: q.fu,
                children: [
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: Z.intl.string(z.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: q.$v,
                            children: [
                                (0, r.jsx)(F.nW, { status: x.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === x.clD.INVISIBLE
                                            ? Z.intl.string(z.default.a3AofS)
                                            : Z.intl.string(Z.t.WbGtnH),
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
        (0, r.jsx)("div", { className: q.iE, ref: n, children: (0, r.jsx)("div", { className: q.Qs, children: t }) })
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
                children: Z.intl.string(z.default["7cfFob"]),
            }),
            (0, r.jsx)(H.c, { className: q.yF }),
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
                        className: q._M,
                        children: Z.intl.string(z.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: q.$v,
                        children: [
                            (0, r.jsx)(F.nW, { status: x.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: Z.intl.string(z.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Z.intl.string(z.default.Yl0mh4),
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
                children: Z.intl.string(z.default["7cfFob"]),
            }),
            (0, r.jsx)(H.c, { className: q.yF }),
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
                        title: Z.intl.string(z.default.vxVbGP),
                        body: [Z.intl.string(z.default["7cfFob"])],
                        action: {
                            text: Z.intl.string(z.default.k4tCg2),
                            onClick: () => {
                                M.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: Z.intl.string(Z.t["ZrN+DT"]), onClick: $.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: Z.intl.string(z.default.qKDqet),
                        body: [Z.intl.string(z.default.Yl0mh4)],
                        action: {
                            text: Z.intl.string(z.default.Poezn1),
                            onClick: () => {
                                (0, K.A)({ nextStatus: x.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: Z.intl.string(z.default["6cA8HZ"]),
                        body: [Z.intl.string(z.default["7cfFob"])],
                        action: {
                            text: Z.intl.string(z.default.k4tCg2),
                            onClick: () => {
                                M.tz.updateSetting(!0), (0, K.A)({ nextStatus: x.clD.ONLINE });
                            },
                        },
                        textLink: { text: Z.intl.string(Z.t["ZrN+DT"]), onClick: $.L7 },
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
    return (0, r.jsx)(D.Ay, {
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
    eC = n(539572),
    eR = n(118328),
    eO = n(16590),
    eL = n(253146);
let ey = 2 * eg.A.Millis.WEEK;
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
            title: Z.intl.string(eO.default["owG+AO"]),
            body: Z.intl.string(eO.default.peZtJo),
            badge: "early_access",
            graphic: { type: "image", src: eL, aspectRatio: "6/4" },
            position: "top",
            caretConfig: { align: "center" },
            actions: [
                {
                    text: i ? Z.intl.string(eO.default.DpZqVj) : Z.intl.string(eO.default.oaIXoz),
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
var ev = n(404374),
    eb = n(625180),
    eM = n(91242),
    eP = n(66834);
function eU(e) {
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
            title: Z.intl.formatToPlainString(Z.t.ry9SJw, { gameName: i }),
            body: Z.intl.string(Z.t.YPpOov),
            actions: [
                {
                    text: Z.intl.string(Z.t.RVfNGU),
                    onClick: () => {
                        w.default.track(x.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: s,
                        }),
                            l(ea.i.TAKE_ACTION),
                            eP.A.joinGuild(s, { source: x.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
var ew = n(945810);
let eG = (0, ew.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ex = n(952818);
let ek = ex.Ay.getRunningGames(),
    eF = [];
class eV extends _.Ay.Store {
    initialize() {
        this.syncWith([ex.Ay], () =>
            (function () {
                let e = ex.Ay.getRunningGames();
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
let eB = new eV(p.h, {}),
    eH = 5 * eg.A.Millis.MINUTE;
var ej = n(769015),
    eW = n(334074),
    eY = n(279250),
    eK = n(880144),
    e$ = n(277680),
    ez = n(118277),
    eZ = n(905552),
    eq = n(95035),
    eX = n(567249),
    eQ = n(929921),
    eJ = n(650338),
    e0 = n(753070),
    e1 = n(945224);
function e2(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(k.E, { className: l()({ [e1.Q]: null == n }, t), color: n, ...i });
}
var e3 = n(95701),
    e4 = n(616356),
    e5 = n(280450),
    e6 = n(734057),
    e7 = n(184989),
    e8 = n(71393),
    e9 = n(453028),
    te = n(576705),
    tt = n(290863),
    tn = n(994500),
    ti = n(309010),
    tr = n(287809),
    ta = n(157257),
    ts = n(975571),
    tl = n(723702);
let to = (0, ew.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var td = n(994314),
    tc = n(485599),
    tu = n(141628),
    t_ = n(192308),
    tE = n(959988),
    tA = n(183623),
    th = n(241541),
    tI = n(70688),
    tf = n(687966),
    tp = n(34188),
    tT = n(942857),
    tm = n(55730),
    tg = n(869003),
    tS = n(521588),
    tN = n(702841),
    tC = n(176781),
    tR = n(442433),
    tO = n(42473),
    tL = n(200542),
    ty = n(414405);
function tD(e) {
    (0, tR.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e("666601"), n.e("344751")]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tv = function () {
    let { parentAnalyticsLocation: e } = (0, el.Ay)(),
        t = (0, eN.Et)(),
        n = (0, eN.XT)(),
        i = (0, tN.bG)([eS.Ay], () => eS.Ay.getIsAtMaxSaveClipOperations()),
        a = (0, tN.bG)([e4.A], () => e4.A.getCurrentUserActiveStream()),
        s = t && (a?.state === x.XYD.ACTIVE || n),
        { enableGamePanelEntrypoint: l } = tL.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: o, clipsSourceAttached: d } = (0, ty.A)();
    return l && s
        ? (0, r.jsx)(tO.A, {
              disabled: i || !d,
              tooltipText: o,
              onClick: () => {
                  (0, eC.l0)(), (0, eA.X)(e, eA.O.CLIP);
              },
              onContextMenu: tD,
              icon: tC.x,
          })
        : null;
};
var tb = n(580954),
    tM = n(907878),
    tP = n(831617),
    tU = n(196736);
let tw = (0, ew.mj)({
        name: "2026-08-gsh-subs-activity-bar",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    tG = (0, ew.mj)({
        name: "2026-02-gsh-game-detection-upsell",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var tx = n(610010),
    tk = n(475669),
    tF = n(275695);
function tV(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tk.A], () => null != a && tk.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
function tB(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tV, {
        title: Z.intl.formatToPlainString(tF.default.lKzVNu, { gameName: t }),
        body: Z.intl.string(tF.default.qqjm8O),
        ctaText: Z.intl.string(tF.default["eJg+Zm"]),
        ...n,
    });
}
function tH(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tV, {
        title: Z.intl.formatToPlainString(tF.default.lwwiHE, { gameName: t }),
        body: Z.intl.string(tF.default.B33GXN),
        ctaText: Z.intl.string(tF.default["968/QC"]),
        ...n,
    });
}
function tj(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tV, {
        title: Z.intl.formatToPlainString(tF.default.k9KZ2L, { gameName: t }),
        body: Z.intl.string(tF.default.gOrBCw),
        ctaText: Z.intl.string(tF.default.sElzfG),
        ...n,
    });
}
var tW = n(338771),
    tY = n(212637),
    tK = n(976860),
    t$ = n(453774),
    tz = n(44724),
    tZ = n(153488),
    tq = n(942370),
    tX = n(758836),
    tQ = n(493285);
function tJ(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === x.$pd.PLAYING &&
              (0, tm.A)(t, x.jUm.JOIN))
    );
}
let t0 = a.memo(function (e) {
        let {
                stream: t,
                canGoLive: i,
                guildId: s,
                isStreaming: l,
                channel: o,
                canStream: c,
                runningGame: u,
                embeddedActivity: A,
                frame: I,
                activity: f,
                application: p,
                analyticsContext: m,
                inviteButtonRef: g,
                accountLinkButtonRef: S,
                startAuthorization: N,
                canStartAuthorization: C,
                hasAlreadyLinked: R,
                connectionApp: L,
            } = e,
            { parentAnalyticsLocation: y, analyticsLocations: D } = (0, el.Ay)(),
            v = (0, t$.A)(p?.id),
            b = tJ(p, f, A),
            { enabled: M } = tG.useConfig({ location: "activity-panel" }),
            P = (0, tU.H)({ location: "activity-panel" }),
            U = (0, tx.Bp)("activity-panel"),
            G = (0, tP.C$)(s ?? void 0, "activity-panel"),
            k = (0, _.bG)([tZ.A], () => tZ.A.hasConsented(x.YAq.PERSONALIZATION)),
            F = (0, tx.TF)(u?.id, { shouldFetch: U || G }),
            V = P && k && (0, tx.k0)(u?.id),
            B = M && k && F,
            H = B && U,
            j = B && G,
            W = a.useCallback(() => {
                d()(null != f, "Received null activity"),
                    w.default.track(x.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: u?.id ?? null,
                        application_id: f.application_id,
                    }),
                    (0, eA.X)(y, eA.O.INVITE),
                    w.default.track(x.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: f.application_id,
                        location: m.location,
                    }),
                    (0, T.qf)(f, !1);
            }, [f, m, y, u]),
            Y = a.useCallback(
                (e, t) => () => {
                    (0, eA.X)(y, eA.O.LEAVE_ACTIVITY),
                        tg.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [y],
            ),
            K = a.useCallback(
                (e) => () => {
                    (0, eA.X)(y, eA.O.LEAVE_ACTIVITY), (0, tb.A)().leaveFrame(e);
                },
                [y],
            ),
            $ = a.useCallback(() => {
                (0, tW.A)(t);
            }, [t]),
            z = a.useCallback(() => {
                (0, t_.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("316123"),
                        n.e("273133"),
                        n.e("991017"),
                        n.e("371964"),
                        n.e("498552"),
                        n.e("486672"),
                        n.e("236946"),
                        n.e("338601"),
                        n.e("944727"),
                        n.e("6565"),
                        n.e("314304"),
                        n.e("476229"),
                    ]).then(n.bind(n, 477156));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourcePID: u?.pid,
                            selectSource: null != ti.Ay.getVoiceChannelId(),
                            analyticsLocations: D,
                        });
                });
            }, [u, D]),
            q = p?.name ?? u?.name ?? "",
            X = a.useCallback(() => {
                (0, tM.pK)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                    (0, t_.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("114855"), n.e("982730"), n.e("965058")]).then(
                            n.bind(n, 154649),
                        );
                        return (t) => (0, r.jsx)(e, { gameName: q, gameApplicationId: u?.id, ...t });
                    });
            }, [q, u?.id]),
            Q = a.useCallback(() => {
                d()(null != s, "Received null guildId"),
                    (0, tM.pK)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                    (0, tY.A)({ analyticsLocations: D, analyticsLocation: m.location, guildId: s });
            }, [s, D, m.location, u?.id]),
            J = a.useCallback(() => {
                let e = u?.id;
                (0, tM.pK)({ gameApplicationId: e, buttonVariant: "shop" });
                let t = x.BVt.COLLECTIBLES_SHOP_WITH_TAB(tX.G2.GAME_SERVERS);
                (0, tK.pX)(null != e ? `${t}&${tX.tD}=${e}` : t);
            }, [u?.id]),
            ee = a.useRef(null),
            [et, en] = a.useState(!1);
        a.useEffect(
            () => () => {
                null != ee.current && clearTimeout(ee.current);
            },
            [],
        ),
            a.useEffect(() => {
                R && (en(!1), null != ee.current && (clearTimeout(ee.current), (ee.current = null)));
            }, [R]);
        let ei = null == v || null == p ? null : (0, r.jsx)(t4, { applicationId: v.id }),
            er = V
                ? (0, r.jsx)(t3, { gameName: q, runningGameId: u?.id, onClick: J })
                : H
                  ? (0, r.jsx)(t2, {
                        tooltipText: Z.intl.formatToPlainString(tF.default.YhnUVO, { gameName: q }),
                        coachmarkContent: E.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK,
                        badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                        onClick: X,
                        onViewed: () => (0, tM.ET)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, r.jsx)(tB, {
                                gameName: q,
                                runningGameId: u?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    X(), n(ea.i.TAKE_ACTION), i(ea.i.TAKE_ACTION);
                                },
                                onClose: () => n(ea.i.USER_DISMISS),
                            });
                        },
                    })
                  : j
                    ? (0, r.jsx)(t2, {
                          tooltipText: Z.intl.formatToPlainString(tF.default.lwwiHE, { gameName: q }),
                          coachmarkContent: E.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK,
                          badgeContent: E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
                          onClick: Q,
                          onViewed: () => (0, tM.ET)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                          renderCoachmark: (e) => {
                              let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                              return (0, r.jsx)(tH, {
                                  gameName: q,
                                  runningGameId: u?.id,
                                  targetElementRef: t,
                                  onClick: () => {
                                      Q(), n(ea.i.TAKE_ACTION), i(ea.i.TAKE_ACTION);
                                  },
                                  onClose: () => n(ea.i.USER_DISMISS),
                              });
                          },
                      })
                    : null,
            es = (function () {
                let e, t, n;
                if ((null == u && null != A && !(0, O.f)()) || (!l && !i)) return null;
                let a = null;
                return (
                    l
                        ? ((e = !1),
                          (t = () => {
                              $(), (0, eA.X)(y, eA.O.STREAM, !1);
                          }),
                          (n = tE.G),
                          (a = Z.intl.string(Z.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                z(), (0, eA.X)(y, eA.O.STREAM, !0);
                            }),
                            (n = tA.F),
                            (a =
                                null != u
                                    ? Z.intl.formatToPlainString(Z.t.AB5gTy, { game: u.name })
                                    : Z.intl.string(Z.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = tA.F),
                            null != o && (0, e3.gV)(o.type) && (a = Z.intl.string(Z.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: tQ.IF,
                        children: (0, r.jsx)(tO.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            eo =
                b && null == A
                    ? (0, r.jsx)(tO.A, { ref: g, tooltipText: Z.intl.string(Z.t["hC/Zey"]), onClick: W, icon: th.D })
                    : null,
            ed =
                null == A
                    ? null
                    : (0, r.jsx)(tO.A, {
                          tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                          onClick: Y(A.applicationId, A.location),
                          icon: tI.DoorExitIcon,
                      }),
            ec =
                null == I
                    ? null
                    : (0, r.jsx)(tO.A, {
                          tooltipText: Z.intl.string(Z.t["R/FK4A"]),
                          onClick: K(I.id),
                          icon: tI.DoorExitIcon,
                      }),
            eu =
                !C || R
                    ? null
                    : (0, r.jsx)(t1, {
                          runningGame: u,
                          startAuthorization: function () {
                              N({ analyticsLocations: D }) === tq._.RPC &&
                                  (en(!0),
                                  null != ee.current && clearTimeout(ee.current),
                                  (ee.current = setTimeout(() => {
                                      en(!1);
                                  }, 9e4)));
                          },
                          connectionApp: L,
                          ref: S,
                      }),
            e_ =
                !C || R
                    ? null
                    : (0, r.jsx)(h.A, {
                          title: Z.intl.string(Z.t.ULvRFd),
                          body: Z.intl.string(Z.t["HJJDr+"]),
                          targetElementRef: S,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: et,
                          onRequestClose: () => {
                              en(!1), null != ee.current && (clearTimeout(ee.current), (ee.current = null));
                          },
                      });
        return (0, r.jsxs)("div", {
            className: tQ.o1,
            children: [eu ?? ei ?? eo, er, (ed ?? ec) == null ? (0, r.jsx)(tv, {}) : null, es, ed ?? ec, e_],
        });
    }),
    t1 = a.forwardRef(function (e, t) {
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
            icon: tu.A,
            tooltipText: Z.intl.string(Z.t.sbdnpw),
        });
    });
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
    let _ = (0, tT.A)(),
        { isQuestBarEmpty: E, hasLoadedQuestBar: A } = (0, b.c9)(),
        [h, I] = (0, ef.kn)(d && !_ && E && A ? [l] : [], void 0, !0),
        [f, p] = (0, ef.kn)(d ? [o] : [], void 0, !0),
        T = a.useCallback(() => {
            I(ea.i.TAKE_ACTION), p(ea.i.TAKE_ACTION), n();
        }, [I, p, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tQ.IF,
                children: [
                    (0, r.jsx)("div", { className: tQ.uD, children: (0, r.jsx)("div", { className: tQ.Z9 }) }),
                    (0, r.jsx)(tO.A, { ref: c, tooltipText: t, onClick: T, icon: tf.GameControllerIcon }),
                    f === o && (0, r.jsx)(tS.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != h && s({ targetElementRef: c, markAsDismissed: I, markBadgeAsDismissed: p }),
        ],
    });
}
function t3(e) {
    let { gameName: t, runningGameId: n, onClick: i } = e,
        a = (function (e) {
            let { location: t } = e;
            return tw.useConfig({ location: t }).enabled;
        })({ location: "activity-panel" });
    return (0, r.jsx)(t2, {
        tooltipText: Z.intl.formatToPlainString(tF.default.oZ4ZFn, { gameName: t }),
        coachmarkContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
        badgeContent: E.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_NEW_BADGE,
        marketingEnabled: a,
        onClick: i,
        onViewed: () => (0, tM.ET)({ gameApplicationId: n, buttonVariant: "shop" }),
        renderCoachmark: (e) => {
            let { targetElementRef: a, markAsDismissed: s, markBadgeAsDismissed: l } = e;
            return (0, r.jsx)(tj, {
                gameName: t,
                runningGameId: n,
                targetElementRef: a,
                onClick: () => {
                    i(), s(ea.i.TAKE_ACTION), l(ea.i.TAKE_ACTION);
                },
                onClose: () => s(ea.i.USER_DISMISS),
            });
        },
    });
}
function t4(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        w.default.track(x.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tz.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tz.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            w.default.track(x.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s();
        }, [t, s]);
    return (0, r.jsx)(tO.A, { tooltipText: Z.intl.string(Z.t.vyaWs7), onClick: l, onMouseDown: i, icon: tp.U, ref: n });
}
var t5 = n(428689),
    t6 = n(409626),
    t7 = n(692969);
let t8 = (0, ew.mj)({
    kind: "user",
    name: "2026-07-rtc-panel-game-card",
    defaultConfig: { improvedGameCard: !1 },
    variations: { 1: { improvedGameCard: !0 } },
});
var t9 = n(475358),
    ne = n(205302);
function nt(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(I.D, {
        className: ne.kL,
        onClick: t,
        children: (0, r.jsx)(k.E, {
            className: ne.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: Z.intl.string(Z.t.jfrLLb),
        }),
    });
}
var nn = n(532624),
    ni = n(350535),
    nr = n(412126);
function na(e) {
    let { isStreaming: t, isCurrentlyRunningGame: n, onClickNotSharing: i } = e,
        a = (0, _.bG)([nn.Ay], () => nn.Ay.getKeybindForAction(x.hCu.SAVE_CLIP)),
        s = null != a && a.shortcut.length > 0 ? ni.dI(a.shortcut, !0) : null,
        l = (0, eN.Et)(),
        o = (0, eN.XT)(),
        d = M.tz.useSetting(),
        c = (0, _.bG)([U.A], () => U.A.getStatus()),
        u = !__OVERLAY__ && (!d || c === x.clD.INVISIBLE),
        E = l && (t || o) && n && null != s;
    return n
        ? u
            ? (0, r.jsx)(nt, { onClick: i })
            : E
              ? (0, r.jsx)(k.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: nr.En,
                    tag: "div",
                    children: Z.intl.format(eO.default.ESZwQX, {
                        keybind: s,
                        keybindHook: () => (0, r.jsx)(t9.e, { shortcut: s, className: nr.oH, keyClassName: nr.Bj }),
                    }),
                })
              : null
        : (0, r.jsx)(k.E, { variant: "text-xs/medium", color: "text-subtle", children: Z.intl.string(Z.t.W4N1ru) });
}
var ns = n(914782);
function nl(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t7.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t6.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(I.D, {
        onClick: i,
        className: l()(null != i && ns.On),
        children: (0, r.jsx)(tc.A, { className: ns.mO, children: t }),
    });
}
function no(e) {
    let { application: t, game: n, showLiveBadge: i, ref: a } = e;
    return (0, r.jsxs)("div", {
        className: ns.f9,
        children: [
            (0, r.jsx)(ej.A, { className: ns.Gt, game: t, pid: n?.pid, ref: a }),
            i ? (0, r.jsx)(t5.VideoIcon, { size: "md", color: "currentColor", className: ns.it }) : null,
        ],
    });
}
function nd(e) {
    let { name: t, application: n, game: i, isStreaming: a, clickable: s, ref: l } = e,
        o = (0, t7.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: n?.id,
            source: t6.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = s && null != o,
        c = (0, r.jsx)(no, { application: n, game: i, showLiveBadge: a && !d, ref: l });
    return d
        ? (0, r.jsx)(I.D, {
              onClick: o,
              className: ns.Ow,
              "aria-label": Z.intl.formatToPlainString(Z.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nc(e) {
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
        h = null != s ? s.name : null != l ? l.name : Z.intl.string(Z.t["UQMV/E"]);
    (t = M.tz.useSetting()),
        (n = (0, _.bG)([U.A], () => U.A.getStatus())),
        (0, a.useEffect)(() => {
            w.default.track(x.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === x.clD.INVISIBLE,
            });
        }, [t, n]);
    let { improvedGameCard: I } = t8.useConfig({ location: "RunningGameCard" });
    return (0, r.jsxs)("div", {
        className: ns.cm,
        children: [
            (0, r.jsx)(nd, { name: h, application: s, game: l, isStreaming: i, clickable: I, ref: u }),
            (0, r.jsx)(es, {
                popoutTargetRef: E,
                isForceShowSharingPopout: d,
                setIsForceShowSharingPopout: c,
                hidePopout: !A,
                children: (0, r.jsxs)("div", {
                    className: ns.pq,
                    children: [
                        null != h ? (0, r.jsx)(nl, { name: h, applicationId: s?.id }) : null,
                        (0, r.jsx)(na, { isStreaming: i, isCurrentlyRunningGame: A, onClickNotSharing: o }),
                    ],
                }),
            }),
        ],
    });
}
var nu = n(5867),
    n_ = n(165610);
let nE = {
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
var nA = n(534952),
    nh = n(731854),
    nI = n(911070),
    nf = n(524224),
    np = n(268920),
    nT = n(633217);
function nm(e) {
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
        E = to.useConfig({ location: "ActivityPanelGameCard" }),
        I = s ? l : i,
        f = R.A.find((e) => null != I && e.migrationData?.replacedBy === I.id),
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
    let T = Z.intl.formatToPlainString(E.altTitle ? Z.t.hUbQT2 : Z.t["lo6H6+"], { gameName: I.name }),
        m = Z.intl.string(E.altCta ? Z.t.jynBQ5 : Z.t.lw71Nf);
    s && (m = Z.intl.string(nI.default["2cOIOr"]));
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
            (T = Z.intl.formatToPlainString(nI.default.dPuaZE, { applicationName: I.name })),
            (n = { text: Z.intl.string(Z.t.hvVgAZ), link: f?.migrationData?.helpCenterLink, external: !0 })),
        (0, r.jsx)(h.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: A.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: I, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: T,
            body: Z.intl.string(Z.t["2lfjU+"]),
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
function ng(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = Z.intl.string(Z.t.MxAlrB),
        l = Z.intl.string(Z.t["/UTTEg"]),
        o = [
            {
                text: Z.intl.string(Z.t.aRIFWD),
                onClick: () => {
                    i(ea.i.TAKE_ACTION), window.open(ts.A.getArticleURL(x.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((s = Z.intl.string(nI.default.ublzTG)),
            (l = Z.intl.string(nI.default.JgM2xu)),
            (t = { type: "video", src: nT.A, fallbackImageSrc: np.A, aspectRatio: "2/1", loop: !0 })),
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
function nS(e) {
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
        onRequestClose: () => i(ea.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: Z.intl.string(Z.t.YdkBCH),
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
function nN(e) {
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
                i = nA.APPLICATION_IDENTITY_CONNECTIONS_INCENTIVIZED_APPLICATIONS.find(
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
            return (0, r.jsx)(nm, {
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
            return (0, r.jsx)(ng, {
                incentivizedAccountLinkingRewarded: N,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nS, {
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
                (0, r.jsx)(eU, {
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
let nC = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(td.A, { children: t });
});
function nR(e) {
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
                ((0, e3.gV)(a.type) &&
                    m.A.selectParticipant(
                        a.id,
                        (0, eE.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, e3.pQ)(a.type) && (0, L.gk)(nu.Gd.PANEL));
    }
    null != l && null != a
        ? ((t = x.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = x.BVt.CHANNEL(x.ME, a.id));
    let f = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ej.A, { className: nf.n8, game: n, size: ej.M.SMALL, ref: u }),
            (0, r.jsx)(es, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nf.pq,
                    children: [
                        (0, r.jsx)(eq.A, {
                            href: t,
                            onClick: function () {
                                I(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                            },
                            children: (0, r.jsx)(tc.A, { className: nf._W, children: n.name }),
                        }),
                        null != a && (0, e3.pQ)(a.type)
                            ? (0, r.jsx)(eq.A, {
                                  href: t,
                                  onClick: I,
                                  children: (0, r.jsx)(td.A, { className: nf.Ix, children: h }),
                              })
                            : (0, r.jsx)(nC, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nf.cm, children: f });
}
function nO(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.data.connectedSince }), [t.data.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ej.A, { className: nf.n8, game: n, size: ej.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nf.pq,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: function () {
                                s
                                    ? p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : eb.A.updateFrameLayoutMode({ frameId: t.id, layoutMode: n_.y0.FOCUSED });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nf.rB,
                            children: (0, r.jsx)(tc.A, { className: nf._W, children: n.name }),
                        }),
                        (0, r.jsx)(nC, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nf.cm, children: o });
}
function nL(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, e$.A)(t);
    return (0, r.jsxs)("div", {
        className: nf.cm,
        ref: n,
        children: [
            (0, r.jsx)(ez.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nf.pq,
                children: [
                    (0, r.jsx)(tc.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nf.qi,
                            children: [
                                (0, r.jsx)(f.t, { size: "xxs", color: ev.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e2, { className: nf.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let ny = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([e5.default], () => e5.default.getId()),
        A = (0, _.bG)([ex.Ay, ta.A], () => (0, eZ.A)(ex.Ay, ta.A)),
        { enabled: h } = eG.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: I, isWithinThreshold: f } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, _.bG)([eB], () => eB.getLastPreviouslyRunningGame());
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
        p = (0, _.bG)([ti.Ay, e6.A], () => e6.A.getChannel(ti.Ay.getVoiceChannelId())),
        T = (0, _.bG)([y.Ay], () => y.Ay.getConnectedActivityChannelId()),
        m = (0, _.bG)([e6.A], () => e6.A.getChannel(T)),
        g = (0, _.bG)([e8.A], () => e8.A.getGuild(m?.guild_id)),
        [S, N] = (0, _.yK)([e4.A], () => [e4.A.getCurrentUserActiveStream(), e4.A.getStreamerActiveStreamMetadata()]),
        R = (0, _.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        O = (0, _.bG)([eM.A], () => (0, n_.ny)(eM.A.getMainFrame())),
        L = (0, _.bG)([e8.A, te.A], () => null == p || eY.vz(p, e8.A, te.A, !1)),
        [D] = (0, e_.A)([
            (function () {
                if (null != N && null != N.id) return N.id;
                if (null != A) return A.id;
                if (null != R) return R.applicationId;
                if (null != O) return O.applicationId;
                if (null != I && null != I.id) return I.id;
            })(),
        ]),
        M =
            ((0, _.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
            (0, _.bG)([e9.Ay], () => (0, eK.A)(e9.Ay) && (0, tl.isWindows)()) || !1),
        U = (0, _.bG)([tt.A], () => (null != c ? tt.A.findActivity(c, (e) => e.type === x.$pd.PLAYING) : null)),
        G = null != S && S.ownerId === c && S.state !== x.XYD.ENDED,
        k = (0, _.bG)([tr.default, tn.A], () => (null != m ? (0, eh.m1)(m, tr.default, tn.A) : void 0)),
        F = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([eQ.A], () => eQ.A.getState());
            if (e !== e0.on.RESOLUTION_720 || t === e0.kn.FPS_60) return `${(0, e0.zr)(e)} ${(0, eJ.Bs)(t)}`;
        })(),
        [V, B] = a.useState(!1),
        H = (0, _.bG)([eX.A], () => eX.A.getWindowOpen(x.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: j, analyticsLocations: W } = (0, el.Ay)(),
        {
            hasAlreadyLinked: Y,
            canStartAuthorization: K,
            connectionApp: $,
            startAuthorization: z,
        } = (0, ec.RD)(D, { allowedFlows: [tq._.RPC, tq._.WEB] }),
        [Z, q] = a.useState(null),
        X = null != Z,
        Q = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return q(D?.id ?? null), z(...t);
            },
            [D?.id, z],
        ),
        J = (0, C.Ay)(D?.id);
    a.useEffect(() => {
        null != D && J !== D?.id && q(null);
    }, [D, J]);
    let ee = (0, u.K)((e) => {
            e &&
                null != $ &&
                w.default.track(x.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: A?.id ?? null, application_id: $.id });
        }),
        et = a.useMemo(() => {
            let e = A?.id ?? I?.id;
            return null != e ? nE[e] : void 0;
        }, [A?.id, I?.id]),
        en = (0, _.bG)([e7.A], () => null != et && e7.A.isMember(et), [et]),
        ei = h && null != et && !en && (null != A || f) ? et : void 0,
        er = !(0, _.bG)([e9.Ay], () => e9.Ay.supports(nh.O5.VIDEO)) && (0, tl.isWindows)(),
        es = null != A && (M || K || er) && (!G || N?.pid != null),
        [eo, ed] = (function (e) {
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
                { shouldShow: T, markAsDismissed: m } = (0, eW.D3)({
                    application: t,
                    disabled: !p,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: ea.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eW.Yb,
                }),
                g = !f && null != r && o,
                S = a.useMemo(() => {
                    if (f || T) return [];
                    let e = [];
                    return (
                        o && d && tJ(t, n, i) && null == i && e.push(E.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(E.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, f, d, i, c, o, T]),
                [N, C] = (0, ef.kn)(S, ea.m.ACCOUNT_NAME_ZONE, !1),
                { shouldShow: R, markAsDismissed: O } = (function () {
                    let { disabled: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, eR.A)("AutoclippingAccountPanelCoachmark"),
                        n = (0, _.bG)(
                            [eS.Ay],
                            () => !eS.Ay.hasUserSetAutoclippingSettings() && !eS.Ay.getEnableAutoclipping(),
                        ),
                        i = (0, v.A)((e) => e.isOpen),
                        r = (0, P.G)(),
                        [a, s] = (0, ef.Wl)(
                            e || !t || !n || i || r ? null : E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK,
                            { cooldownDurationMs: ey },
                            ea.m.ACCOUNT_NAME_ZONE,
                            !0,
                        );
                    return { shouldShow: a === E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK, markAsDismissed: s };
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
                return T ? [0, m] : g ? [1, () => s(null)] : R ? [4, O] : [null, () => {}];
            }, [m, O, C, s, R, T, g, N]);
        })({
            application: D,
            activity: U,
            embeddedActivity: R,
            connectingGameId: Z,
            setConnectingGameId: q,
            canStartAuthorization: K,
            hasAlreadyLinked: Y,
            didStartAuthorization: X,
            gameCommunityGuildId: ei,
            canShowCurrentRunningGamePanel: es,
            isStreamingCurrentRunningGame: G && null != A && N?.id != null && N.id === A.id,
        }),
        eu = null != I && (1 === eo || (f && (0 === eo || 3 === eo))) ? I : null,
        eE = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nc, {
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
        eA = a.useMemo(
            () =>
                es
                    ? eE(D, A, { isGameRunning: !0 })
                    : null != R && null != D && tJ(D, U, R)
                      ? (0, r.jsx)(nR, {
                            application: D,
                            embeddedActivity: R,
                            channel: m,
                            channelName: k,
                            guildForConnectedChannel: g,
                            isForceShowSharingPopout: V,
                            setIsForceShowSharingPopout: B,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: s,
                            isActivityPopoutOpen: H,
                        })
                      : null != O &&
                          null != D &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: D, frame: O })
                        ? (0, r.jsx)(nO, {
                              application: D,
                              accountLinkUpsellTargetRef: o,
                              frame: O,
                              isActivityPopoutOpen: H,
                          })
                        : G
                          ? (0, r.jsx)(nL, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: F,
                            })
                          : null != eu
                            ? eE(D, eu, { isGameRunning: !1 })
                            : null,
            [N, U, D, k, m, R, O, g, H, V, G, es, eu, eE, A, F],
        );
    return null == eA
        ? null
        : (0, r.jsx)("div", {
              className: l()(nf.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: nf.rf,
                  children: [
                      eA,
                      (0, r.jsx)(t0, {
                          stream: S,
                          canGoLive: M,
                          guildId: t,
                          isStreaming: G,
                          channel: m,
                          canStream: L,
                          runningGame: A,
                          activity: U,
                          application: D,
                          embeddedActivity: R,
                          frame: O,
                          analyticsContext: n,
                          inviteButtonRef: d,
                          accountLinkButtonRef: ee,
                          canStartAuthorization: K,
                          startAuthorization: Q,
                          hasAlreadyLinked: Y,
                          connectionApp: $,
                      }),
                      (0, r.jsx)(nN, {
                          popover: eo,
                          dismissPopover: ed,
                          application: D,
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
