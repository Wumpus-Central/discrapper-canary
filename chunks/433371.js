"use strict";
n.d(t, { A: () => nm }), n(321073);
var i,
    r = n(627968),
    a = n(64700),
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
    R = n(646865),
    O = n(795816),
    L = n(933958),
    y = n(379848),
    D = n(832248),
    v = n(764336),
    b = n(885386),
    M = n(843010),
    P = n(461213),
    U = n(174459),
    w = n(821609),
    G = n(652215),
    x = n(834730),
    k = n(133171),
    F = n(243721),
    V = n(315710),
    B = n(404778),
    H = n(331322),
    j = n(297264),
    W = n(922016),
    Y = n(827827),
    K = n(481045),
    $ = n(395277),
    z = n(375708),
    q = n(982375);
function Z(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: q.K2,
        children: (0, r.jsx)(w.$, {
            variant: "primary",
            size: "sm",
            text: z.intl.string($.default.Poezn1),
            onClick: () => {
                t(), (0, Y.A)({ nextStatus: G.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function X(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, _.bG)([P.A], () => P.A.getStatus());
    return (0, r.jsxs)("div", {
        className: q.E3,
        children: [
            (0, r.jsxs)("div", {
                className: q.fu,
                children: [
                    (0, r.jsx)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: z.intl.string($.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: q.$v,
                            children: [
                                (0, r.jsx)(k.nW, { status: G.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(x.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === G.clD.INVISIBLE
                                            ? z.intl.string($.default.a3AofS)
                                            : z.intl.string(z.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(F.d, {
                onChange: (e) => {
                    b.tz.updateSetting(e), n && (0, Y.A)({ nextStatus: e ? G.clD.ONLINE : G.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function Q(e) {
    let { children: t } = e,
        n = (0, a.useRef)(null);
    return (
        (0, V.tj)(n),
        (0, r.jsx)("div", { className: q.iE, ref: n, children: (0, r.jsx)("div", { className: q.Qs, children: t }) })
    );
}
function J(e) {
    let { closePopout: t } = e,
        n = b.tz.useSetting();
    return (0, r.jsxs)(Q, {
        children: [
            (0, r.jsx)(X, { showCurrentGame: n }),
            (0, r.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: z.intl.string($.default["7cfFob"]),
            }),
            (0, r.jsx)(B.c, { className: q.yF }),
            (0, r.jsx)(K.qA, { onClosePopout: t }),
        ],
    });
}
function ee(e) {
    let { closePopout: t } = e;
    return (0, r.jsxs)(Q, {
        children: [
            (0, r.jsxs)(H.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, r.jsx)(j.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: q._M,
                        children: z.intl.string($.default["5YsmGI"]),
                    }),
                    (0, r.jsxs)("div", {
                        className: q.$v,
                        children: [
                            (0, r.jsx)(k.nW, { status: G.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: z.intl.string($.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: z.intl.string($.default.Yl0mh4),
            }),
            (0, r.jsx)(Z, { closePopout: t }),
        ],
    });
}
function et(e) {
    let { closePopout: t } = e,
        n = b.tz.useSetting();
    return (0, r.jsxs)(Q, {
        children: [
            (0, r.jsx)(X, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, r.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: z.intl.string($.default["7cfFob"]),
            }),
            (0, r.jsx)(B.c, { className: q.yF }),
            (0, r.jsx)(K.qA, { onClosePopout: t }),
        ],
    });
}
var en =
    (((i = {})[(i.ActivityNux = 0)] = "ActivityNux"),
    (i[(i.StatusNux = 1)] = "StatusNux"),
    (i[(i.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (i[(i.Activity = 3)] = "Activity"),
    (i[(i.Status = 4)] = "Status"),
    (i[(i.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    i);
function ei(e) {
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: s, children: l } = e,
        [o, d] = (0, a.useState)(n),
        c = (0, a.useRef)(null),
        u = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: z.intl.string($.default.vxVbGP),
                        body: [z.intl.string($.default["7cfFob"])],
                        action: {
                            text: z.intl.string($.default.k4tCg2),
                            onClick: () => {
                                b.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: z.intl.string(z.t["ZrN+DT"]), onClick: K.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: z.intl.string($.default.qKDqet),
                        body: [z.intl.string($.default.Yl0mh4)],
                        action: {
                            text: z.intl.string($.default.Poezn1),
                            onClick: () => {
                                (0, Y.A)({ nextStatus: G.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: z.intl.string($.default["6cA8HZ"]),
                        body: [z.intl.string($.default["7cfFob"])],
                        action: {
                            text: z.intl.string($.default.k4tCg2),
                            onClick: () => {
                                b.tz.updateSetting(!0), (0, Y.A)({ nextStatus: G.clD.ONLINE });
                            },
                        },
                        textLink: { text: z.intl.string(z.t["ZrN+DT"]), onClick: K.L7 },
                    };
                case 3:
                    return { type: "popout", children: J };
                case 4:
                    return { type: "popout", children: ee };
                case 5:
                    return { type: "popout", children: et };
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
    return (0, r.jsx)(W.Y, {
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
var er = n(49999);
function ea(e) {
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: i,
            popoutTargetRef: s,
            hidePopout: l = !1,
        } = e,
        o = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, v.c9)(),
                r = b.tz.useSetting(),
                a = (0, M.G)(),
                s = (0, _.bG)([P.A], () => P.A.getStatus()),
                { isOpen: l } = (0, D.A)();
            if (((n && i) || t) && !a && !l && !__OVERLAY__) {
                if (!r && s === G.clD.INVISIBLE) return t ? en.ActivityAndStatus : en.ActivityAndStatusNux;
                if (!r) return t ? en.Activity : en.ActivityNux;
                if (s === G.clD.INVISIBLE) return t ? en.Status : en.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, a.useEffect)(() => {
        n && U.default.track(G.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let d = n || l ? [] : [E.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(y.Ay, {
        contentTypes: d,
        children: (e) => {
            let { visibleContent: a, markAsDismissed: l } = e,
                d = a === E.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(ei, {
                showPopout: d,
                popoutState: o,
                handleClose: function () {
                    l(er.i.USER_DISMISS), i(!1);
                },
                popoutTargetRef: s,
                children: t,
            });
        },
    });
}
var es = n(688810),
    el = n(139286),
    eo = n(772680),
    ed = n(945810);
let ec = (0, ed.mj)({
    name: "2026-04-game-account-linking-post-game-close",
    kind: "user",
    defaultConfig: { allowAccountLinkingUpsellPostGameClose: !1 },
    variations: {
        0: { allowAccountLinkingUpsellPostGameClose: !1 },
        1: { allowAccountLinkingUpsellPostGameClose: !0 },
    },
});
var eu = n(472636),
    e_ = n(206828),
    eE = n(627363),
    eA = n(429913),
    eh = n(568598),
    eI = n(384059),
    ef = n(47167),
    ep = n(131607),
    eT = n(780964),
    em = n(766075),
    eg = n(763827),
    eS = n(927813),
    eN = n(915725),
    eC = n(572164),
    eR = n(430795),
    eO = n(118328),
    eL = n(253146);
let ey = 2 * eS.A.Millis.WEEK;
function eD(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        i = (0, eC.Et)(),
        a = (0, _.bG)([eN.Ay], () => eN.Ay.getEnableAutoclipping()),
        s = (0, _.bG)([eg.A], () => eg.A.getChannelId());
    return (0, r.jsx)(
        h.A,
        {
            shouldShow: !0,
            targetElementRef: t,
            title: "Auto clipping is here",
            body: "Automatically capture gaming moments with Auto-Clip.",
            badge: "early_access",
            graphic: { type: "image", src: eL, aspectRatio: "6/4" },
            position: "top",
            caretConfig: { align: "center" },
            actions: [
                {
                    text: "Enable Autoclipping",
                    onClick: () => {
                        n(er.i.TAKE_ACTION),
                            i || (0, eR.yO)({ clipsEnabled: !0, trackAnalytics: !0 }),
                            a || (0, eR.uL)(!0),
                            (0, em.openUserSettings)(eT.X.CLIPS_PANEL);
                    },
                },
            ],
            onRequestClose: () => {
                n(er.i.USER_DISMISS);
            },
        },
        s ?? "disconnected",
    );
}
var ev = n(404374),
    eb = n(113854),
    eM = n(91242),
    eP = n(66834);
function eU(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: s, markAsDismissed: l } = e,
        { analyticsLocations: o } = (0, es.Ay)();
    return (
        a.useEffect(() => {
            U.default.track(G.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: o, application_id: n, guild_id: s });
        }, [n, s, o]),
        (0, r.jsx)(h.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                U.default.track(G.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: o,
                    application_id: n,
                    guild_id: s,
                }),
                    l(er.i.USER_DISMISS);
            },
            title: z.intl.formatToPlainString(z.t.ry9SJw, { gameName: i }),
            body: z.intl.string(z.t.YPpOov),
            actions: [
                {
                    text: z.intl.string(z.t.RVfNGU),
                    onClick: () => {
                        U.default.track(G.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: s,
                        }),
                            l(er.i.TAKE_ACTION),
                            eP.A.joinGuild(s, { source: G.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
let ew = (0, ed.mj)({
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
    eB = 5 * eS.A.Millis.MINUTE;
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
    e0 = n(194368);
function e1(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(x.E, { className: l()({ [e0.Q]: null == n }, t), color: n, ...i });
}
var e2 = n(95701),
    e3 = n(616356),
    e6 = n(280450),
    e4 = n(734057),
    e5 = n(184989),
    e7 = n(71393),
    e8 = n(186295),
    e9 = n(576705),
    te = n(290863),
    tt = n(994500),
    tn = n(309010),
    ti = n(287809),
    tr = n(157257),
    ta = n(975571),
    ts = n(723702);
let tl = (0, ed.mj)({
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
    tN = n(475358),
    tC = n(176781),
    tR = n(442433),
    tO = n(42473),
    tL = n(186111),
    ty = n(532624),
    tD = n(350535),
    tv = n(646693);
function tb(e) {
    (0, tR.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function tM(e) {
    let { keybindString: t, targetElementRef: n } = e,
        [i, s] = a.useState(!1),
        l = a.useCallback(() => s(!1), []);
    return (0, r.jsx)(h.A, {
        shouldShow: i,
        targetElementRef: n,
        position: "top",
        title: z.intl.format(z.t["o+srEw"], {
            keybind: t,
            keybindHook: () =>
                (0, r.jsx)("span", { className: tv.E, children: (0, r.jsx)(tN.e, { className: tv.d, shortcut: t }) }),
        }),
        body: z.intl.format(z.t.DWeRm1, { keybindHook: () => t, keybind: t }),
        graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
        caretConfig: { align: "center" },
        onRequestClose: l,
    });
}
let tP = function () {
    let e = a.useRef(null),
        { parentAnalyticsLocation: t } = (0, es.Ay)(),
        n = (0, tS.bG)([tL.A], () => tL.A.hasLayers()),
        i = (0, eC.Et)(),
        s = (0, tS.bG)([eN.Ay], () => eN.Ay.getIsAtMaxSaveClipOperations()),
        l = (0, tS.bG)([ty.Ay], () => ty.Ay.getKeybindForAction(G.hCu.SAVE_CLIP));
    if (!i || null == l || n) return null;
    let o = tD.dI(l.shortcut, !0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tM, { keybindString: o, targetElementRef: e }),
            (0, r.jsx)(tO.A, {
                ref: e,
                disabled: s,
                tooltipText:
                    null != l
                        ? z.intl.formatToPlainString(z.t.HIMcv1, { hotkey: tD.dI(l?.shortcut, !0) })
                        : z.intl.string(z.t.s52pju),
                onClick: () => {
                    (0, eR.l0)(), (0, eI.X)(t, eI.O.CLIP);
                },
                onContextMenu: tb,
                icon: tC.x,
            }),
        ],
    });
};
var tU = n(338771),
    tw = n(212637),
    tG = n(397400),
    tx = n(488803);
let tk = (0, ed.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tF = n(823748),
    tV = n(522055),
    tB = n(576709);
function tH(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tV.A], () => null != a && tV.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
function tj(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tH, {
        title: z.intl.formatToPlainString(tB.default.lKzVNu, { gameName: t }),
        body: z.intl.string(tB.default.qqjm8O),
        ctaText: z.intl.string(tB.default["eJg+Zm"]),
        ...n,
    });
}
function tW(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tH, {
        title: z.intl.formatToPlainString(tB.default.lwwiHE, { gameName: t }),
        body: z.intl.string(tB.default.B33GXN),
        ctaText: z.intl.string(tB.default["968/QC"]),
        ...n,
    });
}
var tY = n(453774),
    tK = n(44724),
    t$ = n(153488),
    tz = n(942370),
    tq = n(610861);
function tZ(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === G.$pd.PLAYING &&
              (0, tT.A)(t, G.jUm.JOIN))
    );
}
let tX = a.memo(function (e) {
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
            { parentAnalyticsLocation: L, analyticsLocations: y } = (0, es.Ay)(),
            D = (0, tY.A)(f?.id),
            v = tZ(f, I, E),
            { enabled: b } = tk.useConfig({ location: "activity-panel" }),
            M = (0, tF.Bp)("activity-panel"),
            P = (0, tx.C$)(s ?? void 0, "activity-panel"),
            w = (0, _.bG)([t$.A], () => t$.A.hasConsented(G.YAq.PERSONALIZATION)),
            x = (0, tF.TF)(u?.id, { shouldFetch: M || P }),
            k = b && w && x,
            F = k && M,
            V = k && P,
            B = a.useCallback(() => {
                d()(null != I, "Received null activity"),
                    U.default.track(G.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: u?.id ?? null,
                        application_id: I.application_id,
                    }),
                    (0, eI.X)(L, eI.O.INVITE),
                    U.default.track(G.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: I.application_id,
                        location: p.location,
                    }),
                    (0, T.qf)(I, !1);
            }, [I, p, L, u]),
            H = a.useCallback(
                (e, t) => () => {
                    (0, eI.X)(L, eI.O.LEAVE_ACTIVITY),
                        tm.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [L],
            ),
            j = a.useCallback(
                (e) => () => {
                    (0, eI.X)(L, eI.O.LEAVE_ACTIVITY), eb.A.stopFrame({ applicationId: e });
                },
                [L],
            ),
            W = a.useCallback(() => {
                (0, tU.A)(t);
            }, [t]),
            Y = a.useCallback(() => {
                (0, tu.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("64379"),
                        n.e("17918"),
                        n.e("76171"),
                        n.e("86672"),
                        n.e("38601"),
                        n.e("36946"),
                        n.e("44727"),
                        n.e("6565"),
                        n.e("14304"),
                        n.e("76229"),
                    ]).then(n.bind(n, 477156));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourcePID: u?.pid,
                            selectSource: null != tn.Ay.getVoiceChannelId(),
                            analyticsLocations: y,
                        });
                });
            }, [u, y]),
            K = f?.name ?? u?.name ?? "",
            $ = a.useCallback(() => {
                (0, tG.pK)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                    (0, tu.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("42209"), n.e("37084"), n.e("74132")]).then(
                            n.bind(n, 279871),
                        );
                        return (t) => (0, r.jsx)(e, { gameName: K, gameApplicationId: u?.id, ...t });
                    });
            }, [K, u?.id]),
            q = a.useCallback(() => {
                d()(null != s, "Received null guildId"),
                    (0, tG.pK)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                    (0, tw.A)({ analyticsLocations: y, analyticsLocation: p.location, guildId: s });
            }, [s, y, p.location, u?.id]),
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
        let J = null == D || null == f ? null : (0, r.jsx)(t0, { applicationId: D.id }),
            ee = F
                ? (0, r.jsx)(tJ, {
                      tooltipText: z.intl.formatToPlainString(tB.default.YhnUVO, { gameName: K }),
                      onClick: $,
                      onViewed: () => (0, tG.ET)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, r.jsx)(tj, {
                              gameName: K,
                              runningGameId: u?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  $(), n(er.i.TAKE_ACTION), i(er.i.TAKE_ACTION);
                              },
                              onClose: () => n(er.i.USER_DISMISS),
                          });
                      },
                  })
                : V
                  ? (0, r.jsx)(tJ, {
                        tooltipText: z.intl.formatToPlainString(tB.default.lwwiHE, { gameName: K }),
                        onClick: q,
                        onViewed: () => (0, tG.ET)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, r.jsx)(tW, {
                                gameName: K,
                                runningGameId: u?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    q(), n(er.i.TAKE_ACTION), i(er.i.TAKE_ACTION);
                                },
                                onClose: () => n(er.i.USER_DISMISS),
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
                              W(), (0, eI.X)(L, eI.O.STREAM, !1);
                          }),
                          (n = t_.G),
                          (a = z.intl.string(z.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                Y(), (0, eI.X)(L, eI.O.STREAM, !0);
                            }),
                            (n = tE.F),
                            (a =
                                null != u
                                    ? z.intl.formatToPlainString(z.t.AB5gTy, { game: u.name })
                                    : z.intl.string(z.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = tE.F),
                            null != o && (0, e2.gV)(o.type) && (a = z.intl.string(z.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: tq.IF,
                        children: (0, r.jsx)(tO.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                v && null == E
                    ? (0, r.jsx)(tO.A, { ref: m, tooltipText: z.intl.string(z.t["hC/Zey"]), onClick: B, icon: tA.D })
                    : null,
            ei =
                null == E
                    ? null
                    : (0, r.jsx)(tO.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: H(E.applicationId, E.location),
                          icon: th.o,
                      }),
            ea =
                null == A
                    ? null
                    : (0, r.jsx)(tO.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: j(A.applicationId),
                          icon: th.o,
                      }),
            el = null == t ? null : (0, r.jsx)(tP, {}),
            eo =
                !N || C
                    ? null
                    : (0, r.jsx)(tQ, {
                          runningGame: u,
                          startAuthorization: function () {
                              S({ analyticsLocations: y }) === tz._M.RPC &&
                                  (Q(!0),
                                  null != Z.current && clearTimeout(Z.current),
                                  (Z.current = setTimeout(() => {
                                      Q(!1);
                                  }, 9e4)));
                          },
                          connectionApp: O,
                          ref: g,
                      }),
            ed =
                !N || C
                    ? null
                    : (0, r.jsx)(h.A, {
                          title: z.intl.string(z.t.ULvRFd),
                          body: z.intl.string(z.t["HJJDr+"]),
                          targetElementRef: g,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: X,
                          onRequestClose: () => {
                              Q(!1), null != Z.current && (clearTimeout(Z.current), (Z.current = null));
                          },
                      });
        return null == et && null == en && null == ei && null == ea && null == eo && null == J && null == ee
            ? null
            : (0, r.jsxs)("div", { className: tq.o1, children: [eo ?? J ?? en, ee, et, ei ?? ea ?? el, ed] });
    }),
    tQ = a.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: a } = e;
        return (0, r.jsx)(tO.A, {
            ref: t,
            onClick: () => {
                U.default.track(G.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: a?.id ?? null,
                }),
                    i();
            },
            icon: tc.A,
            tooltipText: z.intl.string(z.t.sbdnpw),
        });
    });
function tJ(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: s } = e,
        l = a.useRef(null),
        o = a.useRef(!1);
    a.useEffect(() => {
        o.current || ((o.current = !0), i());
    }, [i]);
    let d = (0, tp.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: u } = (0, v.c9)(),
        [_, A] = (0, ep.kn)(!d && c && u ? [E.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [h, I] = (0, ep.kn)([E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        f = a.useCallback(() => {
            A(er.i.TAKE_ACTION), I(er.i.TAKE_ACTION), n();
        }, [A, I, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tq.IF,
                children: [
                    (0, r.jsx)("div", { className: tq.uD, children: (0, r.jsx)("div", { className: tq.Z9 }) }),
                    (0, r.jsx)(tO.A, { ref: l, tooltipText: t, onClick: f, icon: tI._ }),
                    h === E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, r.jsx)(tg.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != _ && s({ targetElementRef: l, markAsDismissed: A, markBadgeAsDismissed: I }),
        ],
    });
}
function t0(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        U.default.track(G.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tK.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tK.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            U.default.track(G.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s();
        }, [t, s]);
    return (0, r.jsx)(tO.A, { tooltipText: z.intl.string(z.t.vyaWs7), onClick: l, onMouseDown: i, icon: tf.U, ref: n });
}
var t1 = n(428689),
    t2 = n(409626),
    t3 = n(692969);
let t6 = (0, ed.mj)({
    kind: "user",
    name: "2026-07-rtc-panel-game-card",
    defaultConfig: { improvedGameCard: !1 },
    variations: { 1: { improvedGameCard: !0 } },
});
var t4 = n(673294);
function t5(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(I.D, {
        className: t4.kL,
        onClick: t,
        children: (0, r.jsx)(x.E, {
            className: t4.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: z.intl.string(z.t.jfrLLb),
        }),
    });
}
var t7 = n(16590),
    t8 = n(118902);
function t9(e) {
    let { isStreaming: t, isCurrentlyRunningGame: n, onClickNotSharing: i } = e,
        a = (0, _.bG)([ty.Ay], () => ty.Ay.getKeybindForAction(G.hCu.SAVE_CLIP)),
        s = null != a && a.shortcut.length > 0 ? tD.dI(a.shortcut, !0) : null,
        l = (0, eC.Et)(),
        o = (0, eC.XT)(),
        d = b.tz.useSetting(),
        c = (0, _.bG)([P.A], () => P.A.getStatus()),
        u = !__OVERLAY__ && (!d || c === G.clD.INVISIBLE),
        E = l && (t || o) && n && null != s;
    return n
        ? u
            ? (0, r.jsx)(t5, { onClick: i })
            : E
              ? (0, r.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: t8.En,
                    tag: "div",
                    children: z.intl.format(t7.default.ESZwQX, {
                        keybind: s,
                        keybindHook: () => (0, r.jsx)(tN.e, { shortcut: s, className: t8.oH, keyClassName: t8.Bj }),
                    }),
                })
              : null
        : (0, r.jsx)(x.E, { variant: "text-xs/medium", color: "text-subtle", children: z.intl.string(z.t.W4N1ru) });
}
var ne = n(379414);
function nt(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t3.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t2.GameProfileSources.RtcPanel,
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
            i ? (0, r.jsx)(t1.n, { size: "md", color: "currentColor", className: ne.it }) : null,
        ],
    });
}
function ni(e) {
    let { name: t, application: n, game: i, isStreaming: a, clickable: s, ref: l } = e,
        o = (0, t3.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: n?.id,
            source: t2.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = s && null != o,
        c = (0, r.jsx)(nn, { application: n, game: i, showLiveBadge: a && !d, ref: l });
    return d
        ? (0, r.jsx)(I.D, {
              onClick: o,
              className: ne.Ow,
              "aria-label": z.intl.formatToPlainString(z.t["8QLQB+"], { gameName: t ?? "" }),
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
        h = null != s ? s.name : null != l ? l.name : z.intl.string(z.t["UQMV/E"]);
    (t = b.tz.useSetting()),
        (n = (0, _.bG)([P.A], () => P.A.getStatus())),
        (0, a.useEffect)(() => {
            U.default.track(G.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === G.clD.INVISIBLE,
            });
        }, [t, n]);
    let { improvedGameCard: I } = t6.useConfig({ location: "RunningGameCard" });
    return (0, r.jsxs)("div", {
        className: ne.cm,
        children: [
            (0, r.jsx)(ni, { name: h, application: s, game: l, isStreaming: i, clickable: I, ref: u }),
            (0, r.jsx)(ea, {
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
var no = n(911070),
    nd = n(490696),
    nc = n(268920),
    nu = n(633217);
function n_(e) {
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
        f = null == I;
    if (
        ((0, el.A)(
            {
                type: c.ImpressionTypes.POPOUT,
                name: c.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: i?.id,
                    parent_application_id: a?.parentId,
                    type: s ? "incentivized" : "default",
                },
            },
            { disableTrack: f },
        ),
        f)
    )
        return null;
    let p = z.intl.formatToPlainString(E.altTitle ? z.t.hUbQT2 : z.t["lo6H6+"], { gameName: I.name }),
        T = z.intl.string(z.t["2lfjU+"]),
        m = z.intl.string(E.altCta ? z.t.jynBQ5 : z.t.lw71Nf);
    s && (m = z.intl.string(no.default["2cOIOr"]));
    let g = [
        {
            text: m,
            onClick: () => {
                o(er.i.TAKE_ACTION), d({ analyticsLocations: u });
            },
        },
    ];
    return (
        s &&
            ((t = "beta"),
            (p = z.intl.formatToPlainString(no.default.dPuaZE, { applicationName: I.name })),
            (T = z.intl.string(no.default.jR3bbS)),
            (n = {
                text: z.intl.string(z.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, r.jsx)(h.A, {
            size: s ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: A.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: I, isIncentivizedAccountLinking: s },
            },
            badge: t,
            title: p,
            body: T,
            textLink: n,
            targetElementRef: _,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(er.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: g,
        })
    );
}
function nE(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = z.intl.string(z.t.MxAlrB),
        l = z.intl.string(z.t["/UTTEg"]),
        o = [
            {
                text: z.intl.string(z.t.aRIFWD),
                onClick: () => {
                    i(er.i.TAKE_ACTION), window.open(ta.A.getArticleURL(G.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((s = z.intl.string(no.default.ublzTG)),
            (l = z.intl.string(no.default.JgM2xu)),
            (t = { type: "video", src: nu.A, fallbackImageSrc: nc.A, aspectRatio: "2/1", loop: !0 })),
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
            onRequestClose: () => i(er.i.USER_DISMISS),
        })
    );
}
function nA(e) {
    let {
        activity: t,
        game: n,
        markAsDismissed: i,
        inviteButtonRef: a,
        parentAnalyticsLocation: s,
        analyticsContext: l,
    } = e;
    return (0, r.jsx)(h.A, {
        title: z.intl.string(z.t["0l2pEt"]),
        body: z.intl.string(z.t["DSZUK/"]),
        targetElementRef: a,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(er.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: z.intl.string(z.t.YdkBCH),
                onClick: () => {
                    i(er.i.TAKE_ACTION),
                        d()(null != t, "Received null activity"),
                        U.default.track(G.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, eI.X)(s, eI.O.INVITE),
                        U.default.track(G.HAw.OPEN_MODAL, {
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
function nh(e) {
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
                n = (0, eu.useIsRiotSocialSDKMigrationEnabled)({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, eE.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && tz.YJ.has(t.id), displayedApp: i };
        })({ connectionApp: s }),
        { rewarded: N } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: r } = e,
                [s, l] = a.useState(!1);
            return (
                a.useEffect(() => {
                    if (!t || !n || !i || s || null == r) return;
                    let e = !1;
                    return (
                        (0, eo.RI)({
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
            return (0, r.jsx)(n_, {
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
            return (0, r.jsx)(nE, {
                incentivizedAccountLinkingRewarded: N,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nA, {
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
let nI = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(to.A, { children: t });
});
function nf(e) {
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
    null != l && null != a
        ? ((t = G.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = G.BVt.CHANNEL(G.ME, a.id));
    let I = () => {
            d()(null != a, "Channel cannot be null during navigation click"),
                g.A.channelListScrollTo(a.guild_id ?? G.ME, a.id),
                !E &&
                    ((0, e2.gV)(a.type) &&
                        m.A.selectParticipant(
                            a.id,
                            (0, eh.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                        ),
                    (0, e2.pQ)(a.type) && (0, O.gk)(na.Gd.PANEL));
        },
        f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eH.A, { className: nd.Gt, game: n, size: eH.M.SMALL, ref: u }),
                (0, r.jsx)(ea, {
                    popoutTargetRef: _,
                    isForceShowSharingPopout: o,
                    setIsForceShowSharingPopout: c,
                    children: (0, r.jsxs)("div", {
                        className: nd.pq,
                        children: [
                            (0, r.jsx)(eq.A, {
                                href: t,
                                onClick: function () {
                                    I(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                },
                                children: (0, r.jsx)(td.A, { className: nd._W, children: n.name }),
                            }),
                            null != a && (0, e2.pQ)(a.type)
                                ? (0, r.jsx)(eq.A, {
                                      href: t,
                                      onClick: I,
                                      children: (0, r.jsx)(to.A, { className: nd.Ix, children: h }),
                                  })
                                : (0, r.jsx)(nI, { timestamps: A }),
                        ],
                    }),
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nd.cm, children: f });
}
function np(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eH.A, { className: nd.Gt, game: n, size: eH.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nd.pq,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: function () {
                                s
                                    ? p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : eb.A.updateFrameLayoutMode({
                                          applicationId: t.applicationId,
                                          layoutMode: ns.y.FOCUSED,
                                      });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nd.rB,
                            children: (0, r.jsx)(td.A, { className: nd._W, children: n.name }),
                        }),
                        (0, r.jsx)(nI, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nd.cm, children: o });
}
function nT(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eK.A)(t);
    return (0, r.jsxs)("div", {
        className: nd.cm,
        ref: n,
        children: [
            (0, r.jsx)(e$.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nd.pq,
                children: [
                    (0, r.jsx)(td.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nd.qi,
                            children: [
                                (0, r.jsx)(f.t, { size: "xxs", color: ev.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(e1, { className: nd.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nm = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([e6.default], () => e6.default.getId()),
        A = (0, _.bG)([eG.Ay, tr.A], () => (0, ez.A)(eG.Ay, tr.A)),
        { allowAccountLinkingUpsellPostGameClose: h } = ec.useConfig({ location: "ActivityPanelGameCard" }),
        { enabled: I } = ew.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: f, isWithinThreshold: p } = (function (e) {
            let { enabled: t } = e,
                [n, i] = (0, a.useState)(Date.now()),
                r = (0, _.bG)([eV], () => eV.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (!t || null == r || Date.now() - r.endedAt >= eB) return;
                    let e = setTimeout(
                        () => {
                            i(Date.now());
                        },
                        r.endedAt + eB - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [t, r]),
                null == r)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let s = n - r.endedAt;
            return { previouslyRunningGame: r, isWithinThreshold: t && s < eB };
        })({ enabled: h || I }),
        T = (0, _.bG)([tn.Ay, e4.A], () => e4.A.getChannel(tn.Ay.getVoiceChannelId())),
        m = (0, _.bG)([L.Ay], () => L.Ay.getConnectedActivityChannelId()),
        g = (0, _.bG)([e4.A], () => e4.A.getChannel(m)),
        S = (0, _.bG)([e7.A], () => e7.A.getGuild(g?.guild_id)),
        [N, R] = (0, _.yK)([e3.A], () => [e3.A.getCurrentUserActiveStream(), e3.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
        y = (0, _.bG)([eM.A], () => eM.A.getConnectedFrame()),
        b = (0, _.bG)([e7.A, e9.A], () => null == T || eW.vz(T, e7.A, e9.A, !1)),
        [P] = (0, eA.A)([
            (function () {
                if (null != R && null != R.id) return R.id;
                if (null != A) return A.id;
                if (null != O) return O.applicationId;
                if (null != y) return y.applicationId;
                if (null != f && null != f.id) return f.id;
            })(),
        ]),
        w =
            ((0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
            (0, _.bG)([e8.Ay], () => (0, eY.A)(e8.Ay) && (0, ts.isWindows)()) || !1),
        x = (0, _.bG)([te.A], () => (null != c ? te.A.findActivity(c, (e) => e.type === G.$pd.PLAYING) : null)),
        k = null != N && N.ownerId === c && N.state !== G.XYD.ENDED,
        F = (0, _.bG)([ti.default, tt.A], () => (null != g ? (0, ef.m1)(g, ti.default, tt.A) : void 0)),
        V = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([eX.A], () => eX.A.getState());
            if (e !== eJ.on.RESOLUTION_720 || t === eJ.kn.FPS_60) return `${(0, eJ.zr)(e)} ${(0, eQ.Bs)(t)}`;
        })(),
        [B, H] = a.useState(!1),
        j = (0, _.bG)([eZ.A], () => eZ.A.getWindowOpen(G.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: W, analyticsLocations: Y } = (0, es.Ay)(),
        {
            hasAlreadyLinked: K,
            canStartAuthorization: $,
            connectionApp: z,
            startAuthorization: q,
        } = (0, e_.RD)(P, { allowedFlows: [tz._M.RPC, tz._M.WEB] }),
        [Z, X] = a.useState(null),
        Q = null != Z,
        J = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return X(P?.id ?? null), q(...t);
            },
            [P?.id, q],
        ),
        ee = (0, C.A)(P?.id);
    a.useEffect(() => {
        null != P && ee !== P?.id && X(null);
    }, [P, ee]);
    let et = (0, u.K)((e) => {
            e &&
                null != z &&
                U.default.track(G.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: A?.id ?? null, application_id: z.id });
        }),
        en = a.useMemo(() => {
            let e = A?.id ?? f?.id;
            return null != e ? nl[e] : void 0;
        }, [A?.id, f?.id]),
        ei = (0, _.bG)([e5.A], () => null != en && e5.A.isMember(en), [en]),
        ea = I && null != en && !ei && (null != A || p) ? en : void 0,
        el = null != A && (w || $) && (!k || R?.pid != null),
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
                { isQuestBarEmpty: h, hasLoadedQuestBar: I } = (0, v.c9)(),
                f = !I || !h,
                p = !f && !o && null == r && l && null != t,
                { shouldShow: T, markAsDismissed: m } = (0, ej.D3)({
                    application: t,
                    disabled: !p,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: er.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: ej.Yb,
                }),
                g = !f && null != r && o,
                S = a.useMemo(() => {
                    if (f || T) return [];
                    let e = [];
                    return (
                        o && d && tZ(t, n, i) && null == i && e.push(E.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(E.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, f, d, i, c, o, T]),
                [N, C] = (0, ep.kn)(S, er.m.ACCOUNT_NAME_ZONE, !1),
                { shouldShow: R, markAsDismissed: O } = (function () {
                    let { disabled: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, eO.A)("AutoclippingAccountPanelCoachmark"),
                        n = (0, eC.Et)(),
                        i = (0, _.bG)(
                            [eN.Ay],
                            () => !eN.Ay.hasUserSetAutoclippingSettings() && !eN.Ay.getEnableAutoclipping(),
                        ),
                        r = (0, D.A)((e) => e.isOpen),
                        a = (0, M.G)(),
                        s = !e && t && n && i && !r && !a,
                        [l, o] = (0, ep.Wl)(
                            s ? E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK : null,
                            { cooldownDurationMs: ey },
                            er.m.ACCOUNT_NAME_ZONE,
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
                return T ? [0, m] : g ? [1, () => s(null)] : R ? [4, O] : [null, () => {}];
            }, [m, O, C, s, R, T, g, N]);
        })({
            application: P,
            activity: x,
            embeddedActivity: O,
            connectingGameId: Z,
            setConnectingGameId: X,
            canStartAuthorization: $,
            hasAlreadyLinked: K,
            didStartAuthorization: Q,
            gameCommunityGuildId: ea,
            canShowCurrentRunningGamePanel: el,
            isStreamingCurrentRunningGame: k && null != A && R?.id != null && R.id === A.id,
        }),
        eu = null != f && (1 === eo || (p && ((h && 0 === eo) || 3 === eo))) ? f : null,
        eE = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nr, {
                    isStreaming: k,
                    application: e,
                    game: t,
                    onClickNotSharing: () => H(!0),
                    isForceShowSharingPopout: B,
                    setIsForceShowSharingPopout: H,
                    ref: o,
                    popoutTargetRef: s,
                    isCurrentlyRunningGame: i,
                });
            },
            [B, k],
        ),
        eh = a.useMemo(
            () =>
                el
                    ? eE(P, A, { isGameRunning: !0 })
                    : null != O && null != P && tZ(P, x, O)
                      ? (0, r.jsx)(nf, {
                            application: P,
                            embeddedActivity: O,
                            channel: g,
                            channelName: F,
                            guildForConnectedChannel: S,
                            isForceShowSharingPopout: B,
                            setIsForceShowSharingPopout: H,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: s,
                            isActivityPopoutOpen: j,
                        })
                      : null != y &&
                          null != P &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: P, frame: y })
                        ? (0, r.jsx)(np, {
                              application: P,
                              accountLinkUpsellTargetRef: o,
                              frame: y,
                              isActivityPopoutOpen: j,
                          })
                        : k
                          ? (0, r.jsx)(nT, {
                                streamMetadata: R,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: V,
                            })
                          : null != eu
                            ? eE(P, eu, { isGameRunning: !1 })
                            : null,
            [R, x, P, F, g, O, y, S, j, B, k, el, eu, eE, A, V],
        );
    return null == eh
        ? null
        : (0, r.jsx)("div", {
              className: l()(nd.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: nd.rf,
                  children: [
                      eh,
                      (0, r.jsx)(tX, {
                          stream: N,
                          canGoLive: w,
                          guildId: t,
                          isStreaming: k,
                          channel: g,
                          canStream: b,
                          runningGame: A,
                          activity: x,
                          application: P,
                          embeddedActivity: O,
                          frame: y,
                          analyticsContext: n,
                          inviteButtonRef: d,
                          accountLinkButtonRef: et,
                          canStartAuthorization: $,
                          startAuthorization: J,
                          hasAlreadyLinked: K,
                          connectionApp: z,
                      }),
                      (0, r.jsx)(nh, {
                          popover: eo,
                          dismissPopover: ed,
                          application: P,
                          connectionApp: z,
                          activity: x,
                          runningGame: A,
                          hasAlreadyLinked: K,
                          didStartAuthorization: Q,
                          startAuthorization: J,
                          accountLinkUpsellTargetRef: o,
                          activityPopoutTargetRef: s,
                          inviteButtonRef: d,
                          accountLinkButtonRef: et,
                          gameCommunityGuildId: ea,
                          parentAnalyticsLocation: W,
                          analyticsLocations: Y,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
