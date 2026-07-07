"use strict";
n.d(t, { A: () => nc }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(284009),
    u = n.n(l),
    c = n(562708),
    d = n(172218),
    _ = n(17928),
    h = n(554146),
    f = n(116833),
    E = n(43105),
    p = n(939249),
    m = n(403581),
    g = n(228366),
    A = n(298990),
    I = n(367513),
    T = n(951001),
    S = n(492684),
    N = n(707606),
    C = n(475743),
    y = n(646865),
    O = n(795816),
    R = n(933958),
    v = n(379848),
    b = n(832248),
    L = n(371912),
    D = n(885386),
    w = n(843010),
    P = n(461213),
    M = n(174459),
    x = n(821609),
    U = n(652215),
    k = n(834730),
    G = n(133171),
    V = n(243721),
    F = n(315710),
    B = n(404778),
    H = n(331322),
    j = n(534514),
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
        children: (0, r.jsx)(x.$, {
            variant: "primary",
            size: "sm",
            text: z.intl.string($.default.Poezn1),
            onClick: () => {
                t(), (0, Y.A)({ nextStatus: U.clD.ONLINE });
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
                    (0, r.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: z.intl.string($.default.WhdCGP),
                    }),
                    n &&
                        (0, r.jsxs)("div", {
                            className: q.$v,
                            children: [
                                (0, r.jsx)(G.nW, { status: U.clD.ONLINE, size: 8 }),
                                (0, r.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === U.clD.INVISIBLE
                                            ? z.intl.string($.default.a3AofS)
                                            : z.intl.string(z.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(V.d, {
                onChange: (e) => {
                    D.tz.updateSetting(e), n && (0, Y.A)({ nextStatus: e ? U.clD.ONLINE : U.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function Q(e) {
    let { children: t } = e,
        n = (0, s.useRef)(null);
    return (
        (0, F.tj)(n),
        (0, r.jsx)("div", { className: q.iE, ref: n, children: (0, r.jsx)("div", { className: q.Qs, children: t }) })
    );
}
function J(e) {
    let { closePopout: t } = e,
        n = D.tz.useSetting();
    return (0, r.jsxs)(Q, {
        children: [
            (0, r.jsx)(X, { showCurrentGame: n }),
            (0, r.jsx)(k.E, {
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
                            (0, r.jsx)(G.nW, { status: U.clD.ONLINE, size: 8 }),
                            (0, r.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: z.intl.string($.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(k.E, {
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
        n = D.tz.useSetting();
    return (0, r.jsxs)(Q, {
        children: [
            (0, r.jsx)(X, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, r.jsx)(k.E, {
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
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: a, children: o } = e,
        [l, u] = (0, s.useState)(n),
        c = (0, s.useRef)(null),
        d = (function (e) {
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
                                D.tz.updateSetting(!0);
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
                                (0, Y.A)({ nextStatus: U.clD.ONLINE });
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
                                D.tz.updateSetting(!0), (0, Y.A)({ nextStatus: U.clD.ONLINE });
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
        })(l),
        _ = (0, s.useRef)(t);
    if (
        ((0, s.useEffect)(() => {
            t && !_.current && u(n), t !== _.current && (_.current = t);
        }, [n, t]),
        null == d || !t)
    )
        return o;
    if ("popover" === d.type) {
        let { action: e, title: t, body: n, textLink: s } = d;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(E.A, {
                    targetElementRef: a,
                    shouldShow: !0,
                    position: "top",
                    align: "center",
                    onRequestClose: i,
                    title: t,
                    body: n,
                    textLink: s,
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
                o,
            ],
        });
    }
    let { children: h } = d;
    return (0, r.jsx)(W.Y, {
        targetElementRef: c,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(h, { closePopout: t });
        },
        onRequestClose: i,
        children: () => (0, r.jsx)(p.D, { innerRef: c, onClick: i, children: o }),
    });
}
var er = n(49999);
function es(e) {
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: i,
            popoutTargetRef: a,
            hidePopout: o = !1,
        } = e,
        l = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, L.c9)(),
                r = D.tz.useSetting(),
                s = (0, w.G)(),
                a = (0, _.bG)([P.A], () => P.A.getStatus()),
                { isOpen: o } = (0, b.A)();
            if (((n && i) || t) && !s && !o && !__OVERLAY__) {
                if (!r && a === U.clD.INVISIBLE) return t ? en.ActivityAndStatus : en.ActivityAndStatusNux;
                if (!r) return t ? en.Activity : en.ActivityNux;
                if (a === U.clD.INVISIBLE) return t ? en.Status : en.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, s.useEffect)(() => {
        n && M.default.track(U.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let u = n || o ? [] : [h.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(v.Ay, {
        contentTypes: u,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: o } = e,
                u = s === h.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(ei, {
                showPopout: u,
                popoutState: l,
                handleClose: function () {
                    o(er.i.USER_DISMISS), i(!1);
                },
                popoutTargetRef: a,
                children: t,
            });
        },
    });
}
var ea = n(688810),
    eo = n(139286),
    el = n(772680),
    eu = n(945810);
let ec = (0, eu.mj)({
    name: "2026-04-game-account-linking-post-game-close",
    kind: "user",
    defaultConfig: { allowAccountLinkingUpsellPostGameClose: !1 },
    variations: {
        0: { allowAccountLinkingUpsellPostGameClose: !1 },
        1: { allowAccountLinkingUpsellPostGameClose: !0 },
    },
});
var ed = n(941314),
    e_ = n(206828),
    eh = n(627363),
    ef = n(429913),
    eE = n(568598),
    ep = n(384059),
    em = n(47167),
    eg = n(404374),
    eA = n(131607),
    eI = n(113854),
    eT = n(91242),
    eS = n(66834);
function eN(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: a, markAsDismissed: o } = e,
        { analyticsLocations: l } = (0, ea.Ay)();
    return (
        s.useEffect(() => {
            M.default.track(U.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: l, application_id: n, guild_id: a });
        }, [n, a, l]),
        (0, r.jsx)(E.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                M.default.track(U.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: l,
                    application_id: n,
                    guild_id: a,
                }),
                    o(er.i.USER_DISMISS);
            },
            title: z.intl.formatToPlainString(z.t.ry9SJw, { gameName: i }),
            body: z.intl.string(z.t.YPpOov),
            actions: [
                {
                    text: z.intl.string(z.t.RVfNGU),
                    onClick: () => {
                        M.default.track(U.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: l,
                            application_id: n,
                            guild_id: a,
                        }),
                            o(er.i.TAKE_ACTION),
                            eS.A.joinGuild(a, { source: U.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
let eC = (0, eu.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ey = n(952818),
    eO = n(927813);
let eR = ey.Ay.getRunningGames(),
    ev = [];
class eb extends _.Ay.Store {
    initialize() {
        this.syncWith([ey.Ay], () =>
            (function () {
                let e = ey.Ay.getRunningGames();
                if (eR === e) return !1;
                let t = eR.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((eR = e), 0 === t.length)) return !1;
                ev = [...ev, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return ev;
    }
    getLastPreviouslyRunningGame() {
        return ev[ev.length - 1] ?? null;
    }
}
let eL = new eb(g.h, {}),
    eD = 5 * eO.A.Millis.MINUTE;
var ew = n(769015),
    eP = n(334074),
    eM = n(279250),
    ex = n(880144),
    eU = n(277680),
    ek = n(118277),
    eG = n(905552),
    eV = n(95035),
    eF = n(567249),
    eB = n(929921),
    eH = n(650338),
    ej = n(753070),
    eW = n(194368);
function eY(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(k.E, { className: o()({ [eW.Q]: null == n }, t), color: n, ...i });
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
let e7 = (0, eu.mj)({
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
    ts = n(70688),
    ta = n(687966),
    to = n(34188),
    tl = n(942857),
    tu = n(55730),
    tc = n(869003),
    td = n(521588),
    t_ = n(702841),
    th = n(475358),
    tf = n(176781),
    tE = n(442433),
    tp = n(42473),
    tm = n(186111),
    tg = n(532624),
    tA = n(350535),
    tI = n(274372),
    tT = n(572164),
    tS = n(430795),
    tN = n(646693);
function tC(e) {
    (0, tE.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
function ty(e) {
    let { keybindString: t, targetElementRef: n } = e,
        [i, a] = s.useState(!1),
        o = s.useCallback(() => a(!1), []);
    return (0, r.jsx)(E.A, {
        shouldShow: i,
        targetElementRef: n,
        position: "top",
        title: z.intl.format(z.t["o+srEw"], {
            keybind: t,
            keybindHook: () =>
                (0, r.jsx)("span", { className: tN.E, children: (0, r.jsx)(th.e, { className: tN.d, shortcut: t }) }),
        }),
        body: z.intl.format(z.t.DWeRm1, { keybindHook: () => t, keybind: t }),
        graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
        caretConfig: { align: "center" },
        onRequestClose: o,
    });
}
let tO = function () {
    let e = s.useRef(null),
        { parentAnalyticsLocation: t } = (0, ea.Ay)(),
        n = (0, t_.bG)([tm.A], () => tm.A.hasLayers()),
        i = (0, tT.Et)(),
        a = (0, t_.bG)([tI.Ay], () => tI.Ay.getIsAtMaxSaveClipOperations()),
        o = (0, t_.bG)([tg.Ay], () => tg.Ay.getKeybindForAction(U.hCu.SAVE_CLIP));
    if (!i || null == o || n) return null;
    let l = tA.dI(o.shortcut, !0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ty, { keybindString: l, targetElementRef: e }),
            (0, r.jsx)(tp.A, {
                ref: e,
                disabled: a,
                tooltipText:
                    null != o
                        ? z.intl.formatToPlainString(z.t.HIMcv1, { hotkey: tA.dI(o?.shortcut, !0) })
                        : z.intl.string(z.t.s52pju),
                onClick: () => {
                    (0, tS.l0)(), (0, ep.X)(t, ep.O.CLIP);
                },
                onContextMenu: tC,
                icon: tf.x,
            }),
        ],
    });
};
var tR = n(338771),
    tv = n(212637),
    tb = n(397400),
    tL = n(488803);
let tD = (0, eu.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tw = n(823748),
    tP = n(522055),
    tM = n(576709);
function tx(e) {
    let { title: t, body: n, ctaText: i, runningGameId: s, targetElementRef: a, onClick: o, onClose: l } = e,
        u = (0, _.bG)([tP.A], () => null != s && tP.A.getGlobalCatalogGame(s)?.can_market === !0, [s]);
    return (0, r.jsx)(E.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            u && null != s
                ? {
                      type: "dynamic",
                      component: f.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: s },
                      aspectRatio: "6/4",
                  }
                : {
                      type: "image",
                      src: "https://cdn.discordapp.com/assets/content/24bc847e3e4dae2b04997ce7374d99a3d11da678af3c9d7664bbff99ed1bfdb1.svg",
                      aspectRatio: "6/4",
                  },
        actions: [{ text: i, variant: "primary", onClick: o }],
        targetElementRef: a,
        shouldShow: !0,
        position: "top",
        onRequestClose: l,
    });
}
function tU(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tx, {
        title: z.intl.formatToPlainString(tM.default.lKzVNu, { gameName: t }),
        body: z.intl.string(tM.default.qqjm8O),
        ctaText: z.intl.string(tM.default["eJg+Zm"]),
        ...n,
    });
}
function tk(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tx, {
        title: z.intl.formatToPlainString(tM.default.lwwiHE, { gameName: t }),
        body: z.intl.string(tM.default.B33GXN),
        ctaText: z.intl.string(tM.default["968/QC"]),
        ...n,
    });
}
var tG = n(453774),
    tV = n(44724),
    tF = n(153488),
    tB = n(942370),
    tH = n(610861);
function tj(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === U.$pd.PLAYING &&
              (0, tu.A)(t, U.jUm.JOIN))
    );
}
let tW = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: i,
                guildId: a,
                isStreaming: o,
                channel: l,
                canStream: c,
                runningGame: d,
                embeddedActivity: h,
                frame: f,
                activity: p,
                application: m,
                analyticsContext: g,
                inviteButtonRef: I,
                accountLinkButtonRef: T,
                startAuthorization: S,
                canStartAuthorization: N,
                hasAlreadyLinked: C,
                connectionApp: O,
            } = e,
            { parentAnalyticsLocation: R, analyticsLocations: v } = (0, ea.Ay)(),
            b = (0, tG.A)(m?.id),
            L = tj(m, p, h),
            { enabled: D } = tD.useConfig({ location: "activity-panel" }),
            w = (0, tw.Bp)("activity-panel"),
            P = (0, tL.C$)(a ?? void 0, "activity-panel"),
            x = (0, _.bG)([tF.A], () => tF.A.hasConsented(U.YAq.PERSONALIZATION)),
            k = (0, tw.TF)(d?.id, { shouldFetch: w || P }),
            G = D && x && k,
            V = G && w,
            F = G && P,
            B = s.useCallback(() => {
                u()(null != p, "Received null activity"),
                    M.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: d?.id ?? null,
                        application_id: p.application_id,
                    }),
                    (0, ep.X)(R, ep.O.INVITE),
                    M.default.track(U.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: p.application_id,
                        location: g.location,
                    }),
                    (0, A.qf)(p, !1);
            }, [p, g, R, d]),
            H = s.useCallback(
                (e, t) => () => {
                    (0, ep.X)(R, ep.O.LEAVE_ACTIVITY),
                        tc.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [R],
            ),
            j = s.useCallback(
                (e) => () => {
                    (0, ep.X)(R, ep.O.LEAVE_ACTIVITY), eI.A.stopFrame({ applicationId: e });
                },
                [R],
            ),
            W = s.useCallback(() => {
                (0, tR.A)(t);
            }, [t]),
            Y = s.useCallback(() => {
                (0, tt.openModalLazy)(async () => {
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
                            sourcePID: d?.pid,
                            selectSource: null != e2.A.getVoiceChannelId(),
                            analyticsLocations: v,
                        });
                });
            }, [d, v]),
            K = m?.name ?? d?.name ?? "",
            $ = s.useCallback(() => {
                (0, tb.pK)({ gameApplicationId: d?.id, buttonVariant: "admin" }),
                    (0, tt.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("42209"), n.e("37084"), n.e("74132")]).then(
                            n.bind(n, 279871),
                        );
                        return (t) => (0, r.jsx)(e, { gameName: K, gameApplicationId: d?.id, ...t });
                    });
            }, [K, d?.id]),
            q = s.useCallback(() => {
                u()(null != a, "Received null guildId"),
                    (0, tb.pK)({ gameApplicationId: d?.id, buttonVariant: "member" }),
                    (0, tv.A)({ analyticsLocations: v, analyticsLocation: g.location, guildId: a });
            }, [a, v, g.location, d?.id]),
            Z = s.useRef(null),
            [X, Q] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != Z.current && clearTimeout(Z.current);
            },
            [],
        ),
            s.useEffect(() => {
                C && (Q(!1), null != Z.current && (clearTimeout(Z.current), (Z.current = null)));
            }, [C]);
        let J = null == b || null == m ? null : (0, r.jsx)(t$, { applicationId: b.id }),
            ee = V
                ? (0, r.jsx)(tK, {
                      tooltipText: z.intl.formatToPlainString(tM.default.YhnUVO, { gameName: K }),
                      onClick: $,
                      onViewed: () => (0, tb.ET)({ gameApplicationId: d?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, r.jsx)(tU, {
                              gameName: K,
                              runningGameId: d?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  $(), n(er.i.TAKE_ACTION), i(er.i.TAKE_ACTION);
                              },
                              onClose: () => n(er.i.USER_DISMISS),
                          });
                      },
                  })
                : F
                  ? (0, r.jsx)(tK, {
                        tooltipText: z.intl.formatToPlainString(tM.default.lwwiHE, { gameName: K }),
                        onClick: q,
                        onViewed: () => (0, tb.ET)({ gameApplicationId: d?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, r.jsx)(tk, {
                                gameName: K,
                                runningGameId: d?.id,
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
                if ((null == d && null != h && !(0, y.f)()) || (!o && !i)) return null;
                let s = null;
                return (
                    o
                        ? ((e = !1),
                          (t = () => {
                              W(), (0, ep.X)(R, ep.O.STREAM, !1);
                          }),
                          (n = tn.G),
                          (s = z.intl.string(z.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                Y(), (0, ep.X)(R, ep.O.STREAM, !0);
                            }),
                            (n = ti.F),
                            (s =
                                null != d
                                    ? z.intl.formatToPlainString(z.t.AB5gTy, { game: d.name })
                                    : z.intl.string(z.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = ti.F),
                            null != l && (0, eK.gV)(l.type) && (s = z.intl.string(z.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: tH.IF,
                        children: (0, r.jsx)(tp.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                L && null == h
                    ? (0, r.jsx)(tp.A, { ref: I, tooltipText: z.intl.string(z.t["hC/Zey"]), onClick: B, icon: tr.D })
                    : null,
            ei =
                null == h
                    ? null
                    : (0, r.jsx)(tp.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: H(h.applicationId, h.location),
                          icon: ts.o,
                      }),
            es =
                null == f
                    ? null
                    : (0, r.jsx)(tp.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: j(f.applicationId),
                          icon: ts.o,
                      }),
            eo = null == t ? null : (0, r.jsx)(tO, {}),
            el =
                !N || C
                    ? null
                    : (0, r.jsx)(tY, {
                          runningGame: d,
                          startAuthorization: function () {
                              S({ analyticsLocations: v }) === tB._M.RPC &&
                                  (Q(!0),
                                  null != Z.current && clearTimeout(Z.current),
                                  (Z.current = setTimeout(() => {
                                      Q(!1);
                                  }, 9e4)));
                          },
                          connectionApp: O,
                          ref: T,
                      }),
            eu =
                !N || C
                    ? null
                    : (0, r.jsx)(E.A, {
                          title: z.intl.string(z.t.ULvRFd),
                          body: z.intl.string(z.t["HJJDr+"]),
                          targetElementRef: T,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: X,
                          onRequestClose: () => {
                              Q(!1), null != Z.current && (clearTimeout(Z.current), (Z.current = null));
                          },
                      });
        return null == et && null == en && null == ei && null == es && null == el && null == J && null == ee
            ? null
            : (0, r.jsxs)("div", { className: tH.o1, children: [el ?? J ?? en, ee, et, ei ?? es ?? eo, eu] });
    }),
    tY = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: s } = e;
        return (0, r.jsx)(tp.A, {
            ref: t,
            onClick: () => {
                M.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    i();
            },
            icon: te.A,
            tooltipText: z.intl.string(z.t.sbdnpw),
        });
    });
function tK(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: a } = e,
        o = s.useRef(null),
        l = s.useRef(!1);
    s.useEffect(() => {
        l.current || ((l.current = !0), i());
    }, [i]);
    let u = (0, tl.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: d } = (0, L.c9)(),
        [_, f] = (0, eA.kn)(!u && c && d ? [h.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [E, p] = (0, eA.kn)([h.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        m = s.useCallback(() => {
            f(er.i.TAKE_ACTION), p(er.i.TAKE_ACTION), n();
        }, [f, p, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tH.IF,
                children: [
                    (0, r.jsx)("div", { className: tH.uD, children: (0, r.jsx)("div", { className: tH.Z9 }) }),
                    (0, r.jsx)(tp.A, { ref: o, tooltipText: t, onClick: m, icon: ta._ }),
                    E === h.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, r.jsx)(td.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != _ && a({ targetElementRef: o, markAsDismissed: f, markBadgeAsDismissed: p }),
        ],
    });
}
function t$(e) {
    let { applicationId: t } = e,
        n = s.useRef(null);
    s.useEffect(() => {
        M.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = s.useCallback(() => {
            (0, tV.G)({ applicationId: t });
        }, [t]),
        a = s.useCallback(() => {
            (0, tV.default)({ applicationId: t });
        }, [t]),
        o = s.useCallback(() => {
            M.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), a();
        }, [t, a]);
    return (0, r.jsx)(tp.A, { tooltipText: z.intl.string(z.t.vyaWs7), onClick: o, onMouseDown: i, icon: to.U, ref: n });
}
var tz = n(428689),
    tq = n(409626),
    tZ = n(692969),
    tX = n(673294);
function tQ(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(p.D, {
        className: tX.kL,
        onClick: t,
        children: (0, r.jsx)(k.E, {
            className: tX.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: z.intl.string(z.t.jfrLLb),
        }),
    });
}
var tJ = n(16590),
    t0 = n(118902);
function t1(e) {
    let { isStreaming: t, isCurrentlyRunningGame: n, onClickNotSharing: i } = e,
        s = (0, _.bG)([tg.Ay], () => tg.Ay.getKeybindForAction(U.hCu.SAVE_CLIP)),
        a = null != s && s.shortcut.length > 0 ? tA.dI(s.shortcut, !0) : null,
        o = (0, tT.Et)(),
        l = (0, tT.XT)(),
        u = D.tz.useSetting(),
        c = (0, _.bG)([P.A], () => P.A.getStatus()),
        d = !__OVERLAY__ && (!u || c === U.clD.INVISIBLE),
        h = o && (t || l) && n && null != a;
    return n
        ? d
            ? (0, r.jsx)(tQ, { onClick: i })
            : h
              ? (0, r.jsx)(k.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: t0.En,
                    tag: "div",
                    children: z.intl.format(tJ.default.ESZwQX, {
                        keybind: a,
                        keybindHook: () => (0, r.jsx)(th.e, { shortcut: a, className: t0.oH, keyClassName: t0.Bj }),
                    }),
                })
              : null
        : (0, r.jsx)(k.E, { variant: "text-xs/medium", color: "text-subtle", children: z.intl.string(z.t.W4N1ru) });
}
var t2 = n(379414);
function t3(e) {
    let { name: t, applicationId: n } = e,
        i = (0, tZ.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: tq.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(p.D, {
        onClick: i,
        className: o()(null != i && t2.On),
        children: (0, r.jsx)(e9.A, { className: t2.mO, children: t }),
    });
}
function t6(e) {
    let t,
        n,
        {
            isStreaming: i,
            application: a,
            game: o,
            onClickNotSharing: l,
            isForceShowSharingPopout: u,
            setIsForceShowSharingPopout: c,
            ref: d,
            popoutTargetRef: h,
            isCurrentlyRunningGame: f,
        } = e,
        E = null != a ? a.name : null != o ? o.name : z.intl.string(z.t["UQMV/E"]);
    return (
        (t = D.tz.useSetting()),
        (n = (0, _.bG)([P.A], () => P.A.getStatus())),
        (0, s.useEffect)(() => {
            M.default.track(U.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === U.clD.INVISIBLE,
            });
        }, [t, n]),
        (0, r.jsxs)("div", {
            className: t2.cm,
            children: [
                (0, r.jsxs)("div", {
                    className: t2.f9,
                    children: [
                        (0, r.jsx)(ew.A, { className: t2.Gt, game: a, pid: o?.pid, ref: d }),
                        i ? (0, r.jsx)(tz.n, { size: "md", color: "currentColor", className: t2.it }) : null,
                    ],
                }),
                (0, r.jsx)(es, {
                    popoutTargetRef: h,
                    isForceShowSharingPopout: u,
                    setIsForceShowSharingPopout: c,
                    hidePopout: !f,
                    children: (0, r.jsxs)("div", {
                        className: t2.pq,
                        children: [
                            null != E ? (0, r.jsx)(t3, { name: E, applicationId: a?.id }) : null,
                            (0, r.jsx)(t1, { isStreaming: i, isCurrentlyRunningGame: f, onClickNotSharing: l }),
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
var t8 = n(911070),
    t9 = n(490696),
    ne = n(268920),
    nt = n(633217);
function nn(e) {
    let t,
        n,
        {
            application: i,
            connectionApp: s,
            isEligibleForIncentivizedAccountLinking: a,
            incentivizedAccountLinkingDisplayedApp: o,
            markAccountLinkingUpsellAsDismissed: l,
            startAuthorization: u,
            analyticsLocations: d,
            accountLinkButtonRef: _,
        } = e,
        h = e7.useConfig({ location: "ActivityPanelGameCard" }),
        p = a ? o : i,
        m = null == p;
    if (
        ((0, eo.A)(
            {
                type: c.ImpressionTypes.POPOUT,
                name: c.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: i?.id,
                    parent_application_id: s?.parentId,
                    type: a ? "incentivized" : "default",
                },
            },
            { disableTrack: m },
        ),
        m)
    )
        return null;
    let g = z.intl.formatToPlainString(h.altTitle ? z.t.hUbQT2 : z.t["lo6H6+"], { gameName: p.name }),
        A = z.intl.string(z.t["2lfjU+"]),
        I = z.intl.string(h.altCta ? z.t.jynBQ5 : z.t.lw71Nf);
    a && (I = z.intl.string(t8.default["2cOIOr"]));
    let T = [
        {
            text: I,
            onClick: () => {
                l(er.i.TAKE_ACTION), u({ analyticsLocations: d });
            },
        },
    ];
    return (
        a &&
            ((t = "beta"),
            (g = z.intl.formatToPlainString(t8.default.dPuaZE, { applicationName: p.name })),
            (A = z.intl.string(t8.default.jR3bbS)),
            (n = {
                text: z.intl.string(z.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, r.jsx)(E.A, {
            size: a ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: f.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: p, isIncentivizedAccountLinking: a },
            },
            badge: t,
            title: g,
            body: A,
            textLink: n,
            targetElementRef: _,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => l(er.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: T,
        })
    );
}
function ni(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: s } = e,
        a = z.intl.string(z.t.MxAlrB),
        o = z.intl.string(z.t["/UTTEg"]),
        l = [
            {
                text: z.intl.string(z.t.aRIFWD),
                onClick: () => {
                    i(er.i.TAKE_ACTION), window.open(e4.A.getArticleURL(U.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((a = z.intl.string(t8.default.ublzTG)),
            (o = z.intl.string(t8.default.JgM2xu)),
            (t = { type: "video", src: nt.A, fallbackImageSrc: ne.A, aspectRatio: "2/1", loop: !0 })),
        (0, r.jsx)(E.A, {
            graphic: t,
            title: a,
            body: o,
            targetElementRef: s,
            position: "top",
            align: "left",
            caretConfig: { align: "start" },
            actions: l,
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
        inviteButtonRef: s,
        parentAnalyticsLocation: a,
        analyticsContext: o,
    } = e;
    return (0, r.jsx)(E.A, {
        title: z.intl.string(z.t["0l2pEt"]),
        body: z.intl.string(z.t["DSZUK/"]),
        targetElementRef: s,
        align: "right",
        shouldShow: !0,
        onRequestClose: () => i(er.i.USER_DISMISS),
        caretConfig: { align: "end" },
        actions: [
            {
                text: z.intl.string(z.t.YdkBCH),
                onClick: () => {
                    i(er.i.TAKE_ACTION),
                        u()(null != t, "Received null activity"),
                        M.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                            action_type: "invite_to_game",
                            game_id: n?.id ?? null,
                            application_id: t.application_id,
                        }),
                        (0, ep.X)(a, ep.O.INVITE),
                        M.default.track(U.HAw.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: t.application_id,
                            location: o.location,
                        }),
                        (0, A.qf)(t, !1);
                },
            },
        ],
    });
}
function ns(e) {
    let {
            popover: t,
            dismissPopover: n,
            application: i,
            connectionApp: a,
            activity: o,
            runningGame: l,
            hasAlreadyLinked: c,
            didStartAuthorization: d,
            startAuthorization: _,
            accountLinkUpsellTargetRef: h,
            inviteButtonRef: f,
            accountLinkButtonRef: E,
            gameCommunityGuildId: p,
            parentAnalyticsLocation: m,
            analyticsLocations: g,
            analyticsContext: A,
        } = e,
        { isEligible: I, displayedApp: T } = (function (e) {
            let { connectionApp: t } = e,
                n = (0, ed.useIsRiotSocialSDKMigrationEnabled)({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, eh.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && tB.YJ.has(t.id), displayedApp: i };
        })({ connectionApp: a }),
        { rewarded: S } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: r } = e,
                [a, o] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (!t || !n || !i || a || null == r) return;
                    let e = !1;
                    return (
                        (0, el.RI)({
                            applicationId: r.id,
                            onSuccess: () => {
                                e || o(!0);
                            },
                            onError: () => {},
                        }),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, i, a, r]),
                { rewarded: a }
            );
        })({ isEligible: I, hasAlreadyLinked: c, didStartAuthorization: d, application: a });
    switch (t) {
        case 0:
            return (0, r.jsx)(nn, {
                application: i,
                connectionApp: a,
                isEligibleForIncentivizedAccountLinking: I,
                incentivizedAccountLinkingDisplayedApp: T,
                markAccountLinkingUpsellAsDismissed: n,
                startAuthorization: _,
                analyticsLocations: g,
                accountLinkButtonRef: E,
            });
        case 1:
            return (0, r.jsx)(ni, {
                incentivizedAccountLinkingRewarded: S,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: h,
            });
        case 2:
            return (0, r.jsx)(nr, {
                activity: o,
                game: l,
                markAsDismissed: n,
                inviteButtonRef: f,
                parentAnalyticsLocation: m,
                analyticsContext: A,
            });
        case 3:
            return (
                u()(i?.id != null && i?.name != null && null != p, "Game community upsell requires these as non null"),
                (0, r.jsx)(eN, {
                    targetElementRef: h,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: p,
                    markAsDismissed: n,
                })
            );
        default:
            return null;
    }
}
let na = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(e8.A, { children: t });
});
function no(e) {
    let t,
        {
            application: n,
            embeddedActivity: i,
            channel: s,
            channelName: a,
            guildForConnectedChannel: o,
            isForceShowSharingPopout: l,
            setIsForceShowSharingPopout: c,
            accountLinkUpsellTargetRef: d,
            activityPopoutTargetRef: _,
            isActivityPopoutOpen: h,
        } = e,
        f = { start: i.connectedSince },
        E = a;
    null != o && null != s
        ? ((t = U.BVt.CHANNEL(o.id, s.id)), (E = `${E} / ${o.name}`))
        : null != s && (t = U.BVt.CHANNEL(U.ME, s.id));
    let p = () => {
            u()(null != s, "Channel cannot be null during navigation click"),
                T.A.channelListScrollTo(s.guild_id ?? U.ME, s.id),
                !h &&
                    ((0, eK.gV)(s.type) &&
                        I.A.selectParticipant(
                            s.id,
                            (0, eE.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                        ),
                    (0, eK.pQ)(s.type) && (0, O.gk)(t4.Gd.PANEL));
        },
        m = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ew.A, { className: t9.Gt, game: n, size: ew.M.SMALL, ref: d }),
                (0, r.jsx)(es, {
                    popoutTargetRef: _,
                    isForceShowSharingPopout: l,
                    setIsForceShowSharingPopout: c,
                    children: (0, r.jsxs)("div", {
                        className: t9.pq,
                        children: [
                            (0, r.jsx)(eV.A, {
                                href: t,
                                onClick: function () {
                                    p(), h && g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                                },
                                children: (0, r.jsx)(e9.A, { className: t9._W, children: n.name }),
                            }),
                            null != s && (0, eK.pQ)(s.type)
                                ? (0, r.jsx)(eV.A, {
                                      href: t,
                                      onClick: p,
                                      children: (0, r.jsx)(e8.A, { className: t9.Ix, children: E }),
                                  })
                                : (0, r.jsx)(na, { timestamps: f }),
                        ],
                    }),
                }),
            ],
        });
    return (0, r.jsx)("div", { className: t9.cm, children: m });
}
function nl(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: a } = e,
        o = s.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        l = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ew.A, { className: t9.Gt, game: n, size: ew.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: t9.pq,
                    children: [
                        (0, r.jsx)(p.D, {
                            onClick: function () {
                                a
                                    ? g.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : eI.A.updateFrameLayoutMode({
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
                        (0, r.jsx)(na, { timestamps: o }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: t9.cm, children: l });
}
function nu(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: s, sanitizedTitle: a } = (0, eU.A)(t);
    return (0, r.jsxs)("div", {
        className: t9.cm,
        ref: n,
        children: [
            (0, r.jsx)(ek.A, { title: a, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: t9.pq,
                children: [
                    (0, r.jsx)(e9.A, { children: s }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: t9.qi,
                            children: [
                                (0, r.jsx)(m.t, { size: "xxs", color: eg.k0.PREMIUM_TIER_2 }),
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
        a = s.useRef(null),
        l = s.useRef(null),
        u = s.useRef(null),
        c = (0, _.bG)([ez.default], () => ez.default.getId()),
        f = (0, _.bG)([ey.Ay, e6.A], () => (0, eG.A)(ey.Ay, e6.A)),
        { allowAccountLinkingUpsellPostGameClose: E } = ec.useConfig({ location: "ActivityPanelGameCard" }),
        { enabled: p } = eC.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: m, isWithinThreshold: g } = (function (e) {
            let { enabled: t } = e,
                [n, i] = (0, s.useState)(Date.now()),
                r = (0, _.bG)([eL], () => eL.getLastPreviouslyRunningGame());
            if (
                ((0, s.useEffect)(() => {
                    if (!t || null == r || Date.now() - r.endedAt >= eD) return;
                    let e = setTimeout(
                        () => {
                            i(Date.now());
                        },
                        r.endedAt + eD - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [t, r]),
                null == r)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let a = n - r.endedAt;
            return { previouslyRunningGame: r, isWithinThreshold: t && a < eD };
        })({ enabled: E || p }),
        A = (0, _.bG)([e2.A, eq.A], () => eq.A.getChannel(e2.A.getVoiceChannelId())),
        I = (0, _.bG)([R.Ay], () => R.Ay.getConnectedActivityChannelId()),
        T = (0, _.bG)([eq.A], () => eq.A.getChannel(I)),
        S = (0, _.bG)([eX.A], () => eX.A.getGuild(T?.guild_id)),
        [N, y] = (0, _.yK)([e$.A], () => [e$.A.getCurrentUserActiveStream(), e$.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([R.Ay], () => R.Ay.getCurrentEmbeddedActivity()),
        v = (0, _.bG)([eT.A], () => eT.A.getConnectedFrame()),
        b = (0, _.bG)([eX.A, eJ.A], () => null == A || eM.vz(A, eX.A, eJ.A, !1)),
        [D] = (0, ef.A)([
            (function () {
                if (null != y && null != y.id) return y.id;
                if (null != f) return f.id;
                if (null != O) return O.applicationId;
                if (null != v) return v.applicationId;
                if (null != m && null != m.id) return m.id;
            })(),
        ]),
        w =
            ((0, _.bG)([R.Ay], () => R.Ay.getCurrentEmbeddedActivity()),
            (0, _.bG)([eQ.Ay], () => (0, ex.A)(eQ.Ay) && (0, e5.isWindows)()) || !1),
        P = (0, _.bG)([e0.A], () => (null != c ? e0.A.findActivity(c, (e) => e.type === U.$pd.PLAYING) : null)),
        x = null != N && N.ownerId === c && N.state !== U.XYD.ENDED,
        k = (0, _.bG)([e3.default, e1.A], () => (null != T ? (0, em.m1)(T, e3.default, e1.A) : void 0)),
        G = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([eB.A], () => eB.A.getState());
            if (e !== ej.on.RESOLUTION_720 || t === ej.kn.FPS_60) return `${(0, ej.zr)(e)} ${(0, eH.Bs)(t)}`;
        })(),
        [V, F] = s.useState(!1),
        B = (0, _.bG)([eF.A], () => eF.A.getWindowOpen(U.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: H, analyticsLocations: j } = (0, ea.Ay)(),
        {
            hasAlreadyLinked: W,
            canStartAuthorization: Y,
            connectionApp: K,
            startAuthorization: $,
        } = (0, e_.RD)(D, { allowedFlows: [tB._M.RPC, tB._M.WEB] }),
        [z, q] = s.useState(null),
        Z = null != z,
        X = s.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return q(D?.id ?? null), $(...t);
            },
            [D?.id, $],
        ),
        Q = (0, C.A)(D?.id);
    s.useEffect(() => {
        null != D && Q !== D?.id && q(null);
    }, [D, Q]);
    let J = (0, d.K)((e) => {
            e &&
                null != K &&
                M.default.track(U.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: f?.id ?? null, application_id: K.id });
        }),
        ee = s.useMemo(() => {
            let e = f?.id ?? m?.id;
            return null != e ? t7[e] : void 0;
        }, [f?.id, m?.id]),
        et = (0, _.bG)([eZ.A], () => null != ee && eZ.A.isMember(ee), [ee]),
        en = p && null != ee && !et && (null != f || g) ? ee : void 0,
        [ei, es] = (function (e) {
            let {
                    application: t,
                    activity: n,
                    embeddedActivity: i,
                    connectingGameId: r,
                    setConnectingGameId: a,
                    canStartAuthorization: o,
                    hasAlreadyLinked: l,
                    didStartAuthorization: u,
                    gameCommunityGuildId: c,
                } = e,
                { isQuestBarEmpty: d, hasLoadedQuestBar: _ } = (0, L.c9)(),
                f = !_ || !d,
                E = !f && !l && null == r && o && null != t,
                { shouldShow: p, markAsDismissed: m } = (0, eP.D3)({
                    application: t,
                    disabled: !E,
                    dismissibleContent: h.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: er.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eP.Yb,
                }),
                g = !f && null != r && l,
                A = s.useMemo(() => {
                    if (f || p) return [];
                    let e = [];
                    return (
                        l && u && tj(t, n, i) && null == i && e.push(h.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(h.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, f, u, i, c, l, p]),
                [I, T] = (0, eA.kn)(A, er.m.ACCOUNT_NAME_ZONE, !1);
            return s.useMemo(() => {
                if (null != I)
                    switch (I) {
                        case h.M.ACCOUNT_LINK_INVITE_FRIENDS:
                            return [
                                2,
                                (e) => {
                                    a(null), T(e);
                                },
                            ];
                        case h.M.JOIN_GAME_COMMUNITY_RTC_CTA:
                            return [3, T];
                        default:
                            return [null, T];
                    }
                return p ? [0, m] : g ? [1, () => a(null)] : [null, () => {}];
            }, [m, T, a, p, g, I]);
        })({
            application: D,
            activity: P,
            embeddedActivity: O,
            connectingGameId: z,
            setConnectingGameId: q,
            canStartAuthorization: Y,
            hasAlreadyLinked: W,
            didStartAuthorization: Z,
            gameCommunityGuildId: en,
        }),
        eo = null != m && (1 === ei || (g && ((E && 0 === ei) || 3 === ei))) ? m : null,
        el = s.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(t6, {
                    isStreaming: x,
                    application: e,
                    game: t,
                    onClickNotSharing: () => F(!0),
                    isForceShowSharingPopout: V,
                    setIsForceShowSharingPopout: F,
                    ref: l,
                    popoutTargetRef: a,
                    isCurrentlyRunningGame: i,
                });
            },
            [V, x],
        ),
        eu = s.useMemo(
            () =>
                null != f && (w || Y) && (!x || y?.pid != null)
                    ? el(D, f, { isGameRunning: !0 })
                    : null != O && null != D && tj(D, P, O)
                      ? (0, r.jsx)(no, {
                            application: D,
                            embeddedActivity: O,
                            channel: T,
                            channelName: k,
                            guildForConnectedChannel: S,
                            isForceShowSharingPopout: V,
                            setIsForceShowSharingPopout: F,
                            accountLinkUpsellTargetRef: l,
                            activityPopoutTargetRef: a,
                            isActivityPopoutOpen: B,
                        })
                      : null != v &&
                          null != D &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: D, frame: v })
                        ? (0, r.jsx)(nl, {
                              application: D,
                              accountLinkUpsellTargetRef: l,
                              frame: v,
                              isActivityPopoutOpen: B,
                          })
                        : x
                          ? (0, r.jsx)(nu, {
                                streamMetadata: y,
                                accountLinkUpsellTargetRef: l,
                                streamQualityIndicator: G,
                            })
                          : null != eo
                            ? el(D, eo, { isGameRunning: !1 })
                            : null,
            [y, P, D, w, Y, k, T, O, v, S, B, V, x, eo, el, f, G],
        );
    return null == eu
        ? null
        : (0, r.jsx)("div", {
              className: o()(t9.nd, i),
              ref: a,
              children: (0, r.jsxs)("div", {
                  className: t9.rf,
                  children: [
                      eu,
                      (0, r.jsx)(tW, {
                          stream: N,
                          canGoLive: w,
                          guildId: t,
                          isStreaming: x,
                          channel: T,
                          canStream: b,
                          runningGame: f,
                          activity: P,
                          application: D,
                          embeddedActivity: O,
                          frame: v,
                          analyticsContext: n,
                          inviteButtonRef: u,
                          accountLinkButtonRef: J,
                          canStartAuthorization: Y,
                          startAuthorization: X,
                          hasAlreadyLinked: W,
                          connectionApp: K,
                      }),
                      (0, r.jsx)(ns, {
                          popover: ei,
                          dismissPopover: es,
                          application: D,
                          connectionApp: K,
                          activity: P,
                          runningGame: f,
                          hasAlreadyLinked: W,
                          didStartAuthorization: Z,
                          startAuthorization: X,
                          accountLinkUpsellTargetRef: l,
                          inviteButtonRef: u,
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
