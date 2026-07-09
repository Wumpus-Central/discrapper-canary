"use strict";
n.d(t, { A: () => nc }), n(321073);
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
    D = n(379848),
    y = n(832248),
    v = n(371912),
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
    j = n(534514),
    W = n(922016),
    Y = n(827827),
    K = n(481045),
    $ = n(900640),
    z = n(375708),
    q = n(159143);
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
                { isOpen: l } = (0, y.A)();
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
    return (0, r.jsx)(D.Ay, {
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
    ep = n(404374),
    eT = n(131607),
    em = n(113854),
    eg = n(91242),
    eS = n(66834);
function eN(e) {
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
                            eS.A.joinGuild(s, { source: G.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
let eC = (0, ed.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eR = n(952818),
    eO = n(927813);
let eL = eR.Ay.getRunningGames(),
    eD = [];
class ey extends _.Ay.Store {
    initialize() {
        this.syncWith([eR.Ay], () =>
            (function () {
                let e = eR.Ay.getRunningGames();
                if (eL === e) return !1;
                let t = eL.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eL = e), 0 === t.length)) return !1;
                eD = [...eD, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return eD;
    }
    getLastPreviouslyRunningGame() {
        return eD[eD.length - 1] ?? null;
    }
}
let ev = new ey(p.h, {}),
    eb = 5 * eO.A.Millis.MINUTE;
var eM = n(769015),
    eP = n(334074),
    eU = n(279250),
    ew = n(880144),
    eG = n(277680),
    ex = n(118277),
    ek = n(905552),
    eF = n(95035),
    eV = n(567249),
    eB = n(929921),
    eH = n(650338),
    ej = n(753070),
    eW = n(521920);
function eY(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(x.E, { className: l()({ [eW.Q]: null == n }, t), color: n, ...i });
}
var eK = n(95701),
    e$ = n(616356),
    ez = n(280450),
    eq = n(734057),
    eZ = n(184989),
    eX = n(71393),
    eQ = n(451409),
    eJ = n(576705),
    e0 = n(290863),
    e1 = n(994500),
    e2 = n(309010),
    e3 = n(287809),
    e6 = n(157257),
    e4 = n(975571),
    e5 = n(723702);
let e7 = (0, ed.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var e8 = n(994314),
    e9 = n(485599),
    te = n(141628),
    tt = n(192308),
    tn = n(959988),
    ti = n(183623),
    tr = n(241541),
    ta = n(70688),
    ts = n(687966),
    tl = n(34188),
    to = n(942857),
    td = n(55730),
    tc = n(869003),
    tu = n(521588),
    t_ = n(702841),
    tE = n(475358),
    tA = n(176781),
    th = n(442433),
    tI = n(42473),
    tf = n(186111),
    tp = n(532624),
    tT = n(350535),
    tm = n(274372),
    tg = n(572164),
    tS = n(430795),
    tN = n(794981);
function tC(e) {
    (0, th.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 785114));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function tR(e) {
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
                (0, r.jsx)("span", { className: tN.E, children: (0, r.jsx)(tE.e, { className: tN.d, shortcut: t }) }),
        }),
        body: z.intl.format(z.t.DWeRm1, { keybindHook: () => t, keybind: t }),
        graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
        caretConfig: { align: "center" },
        onRequestClose: l,
    });
}
let tO = function () {
    let e = a.useRef(null),
        { parentAnalyticsLocation: t } = (0, es.Ay)(),
        n = (0, t_.bG)([tf.A], () => tf.A.hasLayers()),
        i = (0, tg.Et)(),
        s = (0, t_.bG)([tm.Ay], () => tm.Ay.getIsAtMaxSaveClipOperations()),
        l = (0, t_.bG)([tp.Ay], () => tp.Ay.getKeybindForAction(G.hCu.SAVE_CLIP));
    if (!i || null == l || n) return null;
    let o = tT.dI(l.shortcut, !0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tR, { keybindString: o, targetElementRef: e }),
            (0, r.jsx)(tI.A, {
                ref: e,
                disabled: s,
                tooltipText:
                    null != l
                        ? z.intl.formatToPlainString(z.t.HIMcv1, { hotkey: tT.dI(l?.shortcut, !0) })
                        : z.intl.string(z.t.s52pju),
                onClick: () => {
                    (0, tS.l0)(), (0, eI.X)(t, eI.O.CLIP);
                },
                onContextMenu: tC,
                icon: tA.x,
            }),
        ],
    });
};
var tL = n(338771),
    tD = n(212637),
    ty = n(397400),
    tv = n(488803);
let tb = (0, ed.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tM = n(823748),
    tP = n(522055),
    tU = n(76660);
function tw(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tP.A], () => null != a && tP.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
function tG(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tw, {
        title: z.intl.formatToPlainString(tU.default.lKzVNu, { gameName: t }),
        body: z.intl.string(tU.default.qqjm8O),
        ctaText: z.intl.string(tU.default["eJg+Zm"]),
        ...n,
    });
}
function tx(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tw, {
        title: z.intl.formatToPlainString(tU.default.lwwiHE, { gameName: t }),
        body: z.intl.string(tU.default.B33GXN),
        ctaText: z.intl.string(tU.default["968/QC"]),
        ...n,
    });
}
var tk = n(453774),
    tF = n(44724),
    tV = n(153488),
    tB = n(942370),
    tH = n(215917);
function tj(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === G.$pd.PLAYING &&
              (0, td.A)(t, G.jUm.JOIN))
    );
}
let tW = a.memo(function (e) {
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
            { parentAnalyticsLocation: L, analyticsLocations: D } = (0, es.Ay)(),
            y = (0, tk.A)(f?.id),
            v = tj(f, I, E),
            { enabled: b } = tb.useConfig({ location: "activity-panel" }),
            M = (0, tM.Bp)("activity-panel"),
            P = (0, tv.C$)(s ?? void 0, "activity-panel"),
            w = (0, _.bG)([tV.A], () => tV.A.hasConsented(G.YAq.PERSONALIZATION)),
            x = (0, tM.TF)(u?.id, { shouldFetch: M || P }),
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
                        tc.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [L],
            ),
            j = a.useCallback(
                (e) => () => {
                    (0, eI.X)(L, eI.O.LEAVE_ACTIVITY), em.A.stopFrame({ applicationId: e });
                },
                [L],
            ),
            W = a.useCallback(() => {
                (0, tL.A)(t);
            }, [t]),
            Y = a.useCallback(() => {
                (0, tt.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("4615"),
                        n.e("81218"),
                        n.e("76171"),
                        n.e("86672"),
                        n.e("38601"),
                        n.e("36946"),
                        n.e("44727"),
                        n.e("28724"),
                        n.e("82013"),
                        n.e("76229"),
                    ]).then(n.bind(n, 477156));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourcePID: u?.pid,
                            selectSource: null != e2.A.getVoiceChannelId(),
                            analyticsLocations: D,
                        });
                });
            }, [u, D]),
            K = f?.name ?? u?.name ?? "",
            $ = a.useCallback(() => {
                (0, ty.pK)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                    (0, tt.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("99681"), n.e("37084"), n.e("74132")]).then(
                            n.bind(n, 279871),
                        );
                        return (t) => (0, r.jsx)(e, { gameName: K, gameApplicationId: u?.id, ...t });
                    });
            }, [K, u?.id]),
            q = a.useCallback(() => {
                d()(null != s, "Received null guildId"),
                    (0, ty.pK)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                    (0, tD.A)({ analyticsLocations: D, analyticsLocation: p.location, guildId: s });
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
        let J = null == y || null == f ? null : (0, r.jsx)(t$, { applicationId: y.id }),
            ee = F
                ? (0, r.jsx)(tK, {
                      tooltipText: z.intl.formatToPlainString(tU.default.YhnUVO, { gameName: K }),
                      onClick: $,
                      onViewed: () => (0, ty.ET)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, r.jsx)(tG, {
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
                  ? (0, r.jsx)(tK, {
                        tooltipText: z.intl.formatToPlainString(tU.default.lwwiHE, { gameName: K }),
                        onClick: q,
                        onViewed: () => (0, ty.ET)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, r.jsx)(tx, {
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
                          (n = tn.G),
                          (a = z.intl.string(z.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                Y(), (0, eI.X)(L, eI.O.STREAM, !0);
                            }),
                            (n = ti.F),
                            (a =
                                null != u
                                    ? z.intl.formatToPlainString(z.t.AB5gTy, { game: u.name })
                                    : z.intl.string(z.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = ti.F),
                            null != o && (0, eK.gV)(o.type) && (a = z.intl.string(z.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: tH.IF,
                        children: (0, r.jsx)(tI.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                v && null == E
                    ? (0, r.jsx)(tI.A, { ref: m, tooltipText: z.intl.string(z.t["hC/Zey"]), onClick: B, icon: tr.D })
                    : null,
            ei =
                null == E
                    ? null
                    : (0, r.jsx)(tI.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: H(E.applicationId, E.location),
                          icon: ta.o,
                      }),
            ea =
                null == A
                    ? null
                    : (0, r.jsx)(tI.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: j(A.applicationId),
                          icon: ta.o,
                      }),
            el = null == t ? null : (0, r.jsx)(tO, {}),
            eo =
                !N || C
                    ? null
                    : (0, r.jsx)(tY, {
                          runningGame: u,
                          startAuthorization: function () {
                              S({ analyticsLocations: D }) === tB._M.RPC &&
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
            : (0, r.jsxs)("div", { className: tH.o1, children: [eo ?? J ?? en, ee, et, ei ?? ea ?? el, ed] });
    }),
    tY = a.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: a } = e;
        return (0, r.jsx)(tI.A, {
            ref: t,
            onClick: () => {
                U.default.track(G.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: a?.id ?? null,
                }),
                    i();
            },
            icon: te.A,
            tooltipText: z.intl.string(z.t.sbdnpw),
        });
    });
function tK(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: s } = e,
        l = a.useRef(null),
        o = a.useRef(!1);
    a.useEffect(() => {
        o.current || ((o.current = !0), i());
    }, [i]);
    let d = (0, to.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: u } = (0, v.c9)(),
        [_, A] = (0, eT.kn)(!d && c && u ? [E.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [h, I] = (0, eT.kn)([E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        f = a.useCallback(() => {
            A(er.i.TAKE_ACTION), I(er.i.TAKE_ACTION), n();
        }, [A, I, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tH.IF,
                children: [
                    (0, r.jsx)("div", { className: tH.uD, children: (0, r.jsx)("div", { className: tH.Z9 }) }),
                    (0, r.jsx)(tI.A, { ref: l, tooltipText: t, onClick: f, icon: ts._ }),
                    h === E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, r.jsx)(tu.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != _ && s({ targetElementRef: l, markAsDismissed: A, markBadgeAsDismissed: I }),
        ],
    });
}
function t$(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        U.default.track(G.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tF.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tF.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            U.default.track(G.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s();
        }, [t, s]);
    return (0, r.jsx)(tI.A, { tooltipText: z.intl.string(z.t.vyaWs7), onClick: l, onMouseDown: i, icon: tl.U, ref: n });
}
var tz = n(428689),
    tq = n(409626),
    tZ = n(692969),
    tX = n(686926);
function tQ(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(I.D, {
        className: tX.kL,
        onClick: t,
        children: (0, r.jsx)(x.E, {
            className: tX.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: z.intl.string(z.t.jfrLLb),
        }),
    });
}
var tJ = n(788077),
    t0 = n(559753);
function t1(e) {
    let { isStreaming: t, isCurrentlyRunningGame: n, onClickNotSharing: i } = e,
        a = (0, _.bG)([tp.Ay], () => tp.Ay.getKeybindForAction(G.hCu.SAVE_CLIP)),
        s = null != a && a.shortcut.length > 0 ? tT.dI(a.shortcut, !0) : null,
        l = (0, tg.Et)(),
        o = (0, tg.XT)(),
        d = b.tz.useSetting(),
        c = (0, _.bG)([P.A], () => P.A.getStatus()),
        u = !__OVERLAY__ && (!d || c === G.clD.INVISIBLE),
        E = l && (t || o) && n && null != s;
    return n
        ? u
            ? (0, r.jsx)(tQ, { onClick: i })
            : E
              ? (0, r.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: t0.En,
                    tag: "div",
                    children: z.intl.format(tJ.default.ESZwQX, {
                        keybind: s,
                        keybindHook: () => (0, r.jsx)(tE.e, { shortcut: s, className: t0.oH, keyClassName: t0.Bj }),
                    }),
                })
              : null
        : (0, r.jsx)(x.E, { variant: "text-xs/medium", color: "text-subtle", children: z.intl.string(z.t.W4N1ru) });
}
var t2 = n(984470);
function t3(e) {
    let { name: t, applicationId: n } = e,
        i = (0, tZ.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: tq.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(I.D, {
        onClick: i,
        className: l()(null != i && t2.On),
        children: (0, r.jsx)(e9.A, { className: t2.mO, children: t }),
    });
}
function t6(e) {
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
    return (
        (t = b.tz.useSetting()),
        (n = (0, _.bG)([P.A], () => P.A.getStatus())),
        (0, a.useEffect)(() => {
            U.default.track(G.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === G.clD.INVISIBLE,
            });
        }, [t, n]),
        (0, r.jsxs)("div", {
            className: t2.cm,
            children: [
                (0, r.jsxs)("div", {
                    className: t2.f9,
                    children: [
                        (0, r.jsx)(eM.A, { className: t2.Gt, game: s, pid: l?.pid, ref: u }),
                        i ? (0, r.jsx)(tz.n, { size: "md", color: "currentColor", className: t2.it }) : null,
                    ],
                }),
                (0, r.jsx)(ea, {
                    popoutTargetRef: E,
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: c,
                    hidePopout: !A,
                    children: (0, r.jsxs)("div", {
                        className: t2.pq,
                        children: [
                            null != h ? (0, r.jsx)(t3, { name: h, applicationId: s?.id }) : null,
                            (0, r.jsx)(t1, { isStreaming: i, isCurrentlyRunningGame: A, onClickNotSharing: o }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var t4 = n(5867),
    t5 = n(165610);
let t7 = {
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
var t8 = n(41959),
    t9 = n(503432),
    ne = n(268920),
    nt = n(633217);
function nn(e) {
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
        E = e7.useConfig({ location: "ActivityPanelGameCard" }),
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
    s && (m = z.intl.string(t8.default["2cOIOr"]));
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
            (p = z.intl.formatToPlainString(t8.default.dPuaZE, { applicationName: I.name })),
            (T = z.intl.string(t8.default.jR3bbS)),
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
function ni(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = z.intl.string(z.t.MxAlrB),
        l = z.intl.string(z.t["/UTTEg"]),
        o = [
            {
                text: z.intl.string(z.t.aRIFWD),
                onClick: () => {
                    i(er.i.TAKE_ACTION), window.open(e4.A.getArticleURL(G.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((s = z.intl.string(t8.default.ublzTG)),
            (l = z.intl.string(t8.default.JgM2xu)),
            (t = { type: "video", src: nt.A, fallbackImageSrc: ne.A, aspectRatio: "2/1", loop: !0 })),
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
function nr(e) {
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
function na(e) {
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
            gameCommunityGuildId: I,
            parentAnalyticsLocation: f,
            analyticsLocations: p,
            analyticsContext: T,
        } = e,
        { isEligible: m, displayedApp: g } = (function (e) {
            let { connectionApp: t } = e,
                n = (0, eu.useIsRiotSocialSDKMigrationEnabled)({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, eE.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && tB.YJ.has(t.id), displayedApp: i };
        })({ connectionApp: s }),
        { rewarded: S } = (function (e) {
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
        })({ isEligible: m, hasAlreadyLinked: c, didStartAuthorization: u, application: s });
    switch (t) {
        case 0:
            return (0, r.jsx)(nn, {
                application: i,
                connectionApp: s,
                isEligibleForIncentivizedAccountLinking: m,
                incentivizedAccountLinkingDisplayedApp: g,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: _,
                analyticsLocations: p,
                accountLinkButtonRef: h,
            });
        case 1:
            return (0, r.jsx)(ni, {
                incentivizedAccountLinkingRewarded: S,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(nr, {
                activity: l,
                game: o,
                markAsDismissed: n,
                inviteButtonRef: A,
                parentAnalyticsLocation: f,
                analyticsContext: T,
            });
        case 3:
            return (
                d()(i?.id != null && i?.name != null && null != I, "Game community upsell requires these as non null"),
                (0, r.jsx)(eN, {
                    targetElementRef: E,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: I,
                    markAsDismissed: n,
                })
            );
        default:
            return null;
    }
}
let ns = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(e8.A, { children: t });
});
function nl(e) {
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
                    ((0, eK.gV)(a.type) &&
                        m.A.selectParticipant(
                            a.id,
                            (0, eh.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                        ),
                    (0, eK.pQ)(a.type) && (0, O.gk)(t4.Gd.PANEL));
        },
        f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eM.A, { className: t9.Gt, game: n, size: eM.M.SMALL, ref: u }),
                (0, r.jsx)(ea, {
                    popoutTargetRef: _,
                    isForceShowSharingPopout: o,
                    setIsForceShowSharingPopout: c,
                    children: (0, r.jsxs)("div", {
                        className: t9.pq,
                        children: [
                            (0, r.jsx)(eF.A, {
                                href: t,
                                onClick: function () {
                                    I(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                },
                                children: (0, r.jsx)(e9.A, { className: t9._W, children: n.name }),
                            }),
                            null != a && (0, eK.pQ)(a.type)
                                ? (0, r.jsx)(eF.A, {
                                      href: t,
                                      onClick: I,
                                      children: (0, r.jsx)(e8.A, { className: t9.Ix, children: h }),
                                  })
                                : (0, r.jsx)(ns, { timestamps: A }),
                        ],
                    }),
                }),
            ],
        });
    return (0, r.jsx)("div", { className: t9.cm, children: f });
}
function no(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eM.A, { className: t9.Gt, game: n, size: eM.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: t9.pq,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: function () {
                                s
                                    ? p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : em.A.updateFrameLayoutMode({
                                          applicationId: t.applicationId,
                                          layoutMode: t5.y.FOCUSED,
                                      });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: t9.rB,
                            children: (0, r.jsx)(e9.A, { className: t9._W, children: n.name }),
                        }),
                        (0, r.jsx)(ns, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: t9.cm, children: o });
}
function nd(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eG.A)(t);
    return (0, r.jsxs)("div", {
        className: t9.cm,
        ref: n,
        children: [
            (0, r.jsx)(ex.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: t9.pq,
                children: [
                    (0, r.jsx)(e9.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: t9.qi,
                            children: [
                                (0, r.jsx)(f.t, { size: "xxs", color: ep.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(eY, { className: t9.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let nc = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([ez.default], () => ez.default.getId()),
        A = (0, _.bG)([eR.Ay, e6.A], () => (0, ek.A)(eR.Ay, e6.A)),
        { allowAccountLinkingUpsellPostGameClose: h } = ec.useConfig({ location: "ActivityPanelGameCard" }),
        { enabled: I } = eC.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: f, isWithinThreshold: p } = (function (e) {
            let { enabled: t } = e,
                [n, i] = (0, a.useState)(Date.now()),
                r = (0, _.bG)([ev], () => ev.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (!t || null == r || Date.now() - r.endedAt >= eb) return;
                    let e = setTimeout(
                        () => {
                            i(Date.now());
                        },
                        r.endedAt + eb - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [t, r]),
                null == r)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let s = n - r.endedAt;
            return { previouslyRunningGame: r, isWithinThreshold: t && s < eb };
        })({ enabled: h || I }),
        T = (0, _.bG)([e2.A, eq.A], () => eq.A.getChannel(e2.A.getVoiceChannelId())),
        m = (0, _.bG)([L.Ay], () => L.Ay.getConnectedActivityChannelId()),
        g = (0, _.bG)([eq.A], () => eq.A.getChannel(m)),
        S = (0, _.bG)([eX.A], () => eX.A.getGuild(g?.guild_id)),
        [N, R] = (0, _.yK)([e$.A], () => [e$.A.getCurrentUserActiveStream(), e$.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
        D = (0, _.bG)([eg.A], () => eg.A.getConnectedFrame()),
        y = (0, _.bG)([eX.A, eJ.A], () => null == T || eU.vz(T, eX.A, eJ.A, !1)),
        [b] = (0, eA.A)([
            (function () {
                if (null != R && null != R.id) return R.id;
                if (null != A) return A.id;
                if (null != O) return O.applicationId;
                if (null != D) return D.applicationId;
                if (null != f && null != f.id) return f.id;
            })(),
        ]),
        M =
            ((0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
            (0, _.bG)([eQ.Ay], () => (0, ew.A)(eQ.Ay) && (0, e5.isWindows)()) || !1),
        P = (0, _.bG)([e0.A], () => (null != c ? e0.A.findActivity(c, (e) => e.type === G.$pd.PLAYING) : null)),
        w = null != N && N.ownerId === c && N.state !== G.XYD.ENDED,
        x = (0, _.bG)([e3.default, e1.A], () => (null != g ? (0, ef.m1)(g, e3.default, e1.A) : void 0)),
        k = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([eB.A], () => eB.A.getState());
            if (e !== ej.on.RESOLUTION_720 || t === ej.kn.FPS_60) return `${(0, ej.zr)(e)} ${(0, eH.Bs)(t)}`;
        })(),
        [F, V] = a.useState(!1),
        B = (0, _.bG)([eV.A], () => eV.A.getWindowOpen(G.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: H, analyticsLocations: j } = (0, es.Ay)(),
        {
            hasAlreadyLinked: W,
            canStartAuthorization: Y,
            connectionApp: K,
            startAuthorization: $,
        } = (0, e_.RD)(b, { allowedFlows: [tB._M.RPC, tB._M.WEB] }),
        [z, q] = a.useState(null),
        Z = null != z,
        X = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return q(b?.id ?? null), $(...t);
            },
            [b?.id, $],
        ),
        Q = (0, C.A)(b?.id);
    a.useEffect(() => {
        null != b && Q !== b?.id && q(null);
    }, [b, Q]);
    let J = (0, u.K)((e) => {
            e &&
                null != K &&
                U.default.track(G.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: A?.id ?? null, application_id: K.id });
        }),
        ee = a.useMemo(() => {
            let e = A?.id ?? f?.id;
            return null != e ? t7[e] : void 0;
        }, [A?.id, f?.id]),
        et = (0, _.bG)([eZ.A], () => null != ee && eZ.A.isMember(ee), [ee]),
        en = I && null != ee && !et && (null != A || p) ? ee : void 0,
        [ei, ea] = (function (e) {
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
                { isQuestBarEmpty: u, hasLoadedQuestBar: _ } = (0, v.c9)(),
                A = !_ || !u,
                h = !A && !o && null == r && l && null != t,
                { shouldShow: I, markAsDismissed: f } = (0, eP.D3)({
                    application: t,
                    disabled: !h,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: er.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eP.Yb,
                }),
                p = !A && null != r && o,
                T = a.useMemo(() => {
                    if (A || I) return [];
                    let e = [];
                    return (
                        o && d && tj(t, n, i) && null == i && e.push(E.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(E.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, A, d, i, c, o, I]),
                [m, g] = (0, eT.kn)(T, er.m.ACCOUNT_NAME_ZONE, !1);
            return a.useMemo(() => {
                if (null != m)
                    switch (m) {
                        case E.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    s(null), g(e);
                                },
                            ];
                        case E.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, g];
                        default:
                            return [null, g];
                    }
                return I ? [0, f] : p ? [1, () => s(null)] : [null, () => {}];
            }, [f, g, s, I, p, m]);
        })({
            application: b,
            activity: P,
            embeddedActivity: O,
            connectingGameId: z,
            setConnectingGameId: q,
            canStartAuthorization: Y,
            hasAlreadyLinked: W,
            didStartAuthorization: Z,
            gameCommunityGuildId: en,
        }),
        el = null != f && (1 === ei || (p && ((h && 0 === ei) || 3 === ei))) ? f : null,
        eo = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(t6, {
                    isStreaming: w,
                    application: e,
                    game: t,
                    onClickNotSharing: () => V(!0),
                    isForceShowSharingPopout: F,
                    setIsForceShowSharingPopout: V,
                    ref: o,
                    popoutTargetRef: s,
                    isCurrentlyRunningGame: i,
                });
            },
            [F, w],
        ),
        ed = a.useMemo(
            () =>
                null != A && (M || Y) && (!w || R?.pid != null)
                    ? eo(b, A, { isGameRunning: !0 })
                    : null != O && null != b && tj(b, P, O)
                      ? (0, r.jsx)(nl, {
                            application: b,
                            embeddedActivity: O,
                            channel: g,
                            channelName: x,
                            guildForConnectedChannel: S,
                            isForceShowSharingPopout: F,
                            setIsForceShowSharingPopout: V,
                            accountLinkUpsellTargetRef: o,
                            activityPopoutTargetRef: s,
                            isActivityPopoutOpen: B,
                        })
                      : null != D &&
                          null != b &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: b, frame: D })
                        ? (0, r.jsx)(no, {
                              application: b,
                              accountLinkUpsellTargetRef: o,
                              frame: D,
                              isActivityPopoutOpen: B,
                          })
                        : w
                          ? (0, r.jsx)(nd, {
                                streamMetadata: R,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: k,
                            })
                          : null != el
                            ? eo(b, el, { isGameRunning: !1 })
                            : null,
            [R, P, b, M, Y, x, g, O, D, S, B, F, w, el, eo, A, k],
        );
    return null == ed
        ? null
        : (0, r.jsx)("div", {
              className: l()(t9.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: t9.rf,
                  children: [
                      ed,
                      (0, r.jsx)(tW, {
                          stream: N,
                          canGoLive: M,
                          guildId: t,
                          isStreaming: w,
                          channel: g,
                          canStream: y,
                          runningGame: A,
                          activity: P,
                          application: b,
                          embeddedActivity: O,
                          frame: D,
                          analyticsContext: n,
                          inviteButtonRef: d,
                          accountLinkButtonRef: J,
                          canStartAuthorization: Y,
                          startAuthorization: X,
                          hasAlreadyLinked: W,
                          connectionApp: K,
                      }),
                      (0, r.jsx)(na, {
                          popover: ei,
                          dismissPopover: ea,
                          application: b,
                          connectionApp: K,
                          activity: P,
                          runningGame: A,
                          hasAlreadyLinked: W,
                          didStartAuthorization: Z,
                          startAuthorization: X,
                          accountLinkUpsellTargetRef: o,
                          inviteButtonRef: d,
                          accountLinkButtonRef: J,
                          gameCommunityGuildId: en,
                          parentAnalyticsLocation: H,
                          analyticsLocations: j,
                          analyticsContext: n,
                      }),
                  ],
              }),
          });
});
