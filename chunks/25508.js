"use strict";
n.d(t, { A: () => np }), n(321073);
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
    O = n(646865),
    R = n(795816),
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
    k = n(935154),
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
    q = n(485135);
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
    ed = n(206828),
    ec = n(627363),
    eu = n(429913),
    e_ = n(568598),
    eE = n(384059),
    eA = n(47167),
    eh = n(131607),
    eI = n(780964),
    ef = n(766075),
    ep = n(763827),
    eT = n(927813),
    em = n(915725),
    eg = n(572164),
    eS = n(430795),
    eN = n(118328),
    eC = n(253146);
let eO = 2 * eT.A.Millis.WEEK;
function eR(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
        i = (0, eg.Et)(),
        a = (0, _.bG)([em.Ay], () => em.Ay.getEnableAutoclipping()),
        s = (0, _.bG)([ep.A], () => ep.A.getChannelId());
    return (0, r.jsx)(
        h.A,
        {
            shouldShow: !0,
            targetElementRef: t,
            title: "Auto clipping is here",
            body: "Automatically capture gaming moments with Auto-Clip.",
            badge: "early_access",
            graphic: { type: "image", src: eC, aspectRatio: "6/4" },
            position: "top",
            caretConfig: { align: "center" },
            actions: [
                {
                    text: "Enable Autoclipping",
                    onClick: () => {
                        n(er.i.TAKE_ACTION),
                            i || (0, eS.yO)({ clipsEnabled: !0, trackAnalytics: !0 }),
                            a || (0, eS.uL)(!0),
                            (0, ef.openUserSettings)(eI.X.CLIPS_PANEL);
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
var eL = n(404374),
    ey = n(113854),
    eD = n(91242),
    ev = n(66834);
function eb(e) {
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
                            ev.A.joinGuild(s, { source: G.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
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
var eU = n(952818);
let ew = eU.Ay.getRunningGames(),
    eG = [];
class ex extends _.Ay.Store {
    initialize() {
        this.syncWith([eU.Ay], () =>
            (function () {
                let e = eU.Ay.getRunningGames();
                if (ew === e) return !1;
                let t = ew.filter(
                    (t) =>
                        null ==
                        e.find(
                            (e) =>
                                (null != t.id && t.id === e.id) ||
                                (null != t.sku && t.sku === e.sku) ||
                                (null != t.name && t.name === e.name),
                        ),
                );
                if (((ew = e), 0 === t.length)) return !1;
                eG = [...eG, ...t.map((e) => ({ ...e, endedAt: Date.now() }))].slice(-5);
            })(),
        );
    }
    getPreviousRunningGames() {
        return eG;
    }
    getLastPreviouslyRunningGame() {
        return eG[eG.length - 1] ?? null;
    }
}
let ek = new ex(p.h, {}),
    eF = 5 * eT.A.Millis.MINUTE;
var eV = n(769015),
    eB = n(334074),
    eH = n(279250),
    ej = n(880144),
    eW = n(277680),
    eY = n(118277),
    eK = n(905552),
    e$ = n(95035),
    ez = n(567249),
    eq = n(929921),
    eZ = n(650338),
    eX = n(753070),
    eQ = n(945224);
function eJ(e) {
    let { className: t, color: n, ...i } = e;
    return (0, r.jsx)(x.E, { className: l()({ [eQ.Q]: null == n }, t), color: n, ...i });
}
var e0 = n(95701),
    e1 = n(616356),
    e2 = n(280450),
    e3 = n(734057),
    e4 = n(184989),
    e6 = n(71393),
    e5 = n(293246),
    e7 = n(576705),
    e8 = n(290863),
    e9 = n(994500),
    te = n(309010),
    tt = n(287809),
    tn = n(157257),
    ti = n(975571),
    tr = n(723702);
let ta = (0, eM.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var ts = n(994314),
    tl = n(485599),
    to = n(141628),
    td = n(192308),
    tc = n(959988),
    tu = n(183623),
    t_ = n(241541),
    tE = n(70688),
    tA = n(687966),
    th = n(34188),
    tI = n(942857),
    tf = n(55730),
    tp = n(869003),
    tT = n(521588),
    tm = n(702841),
    tg = n(176781),
    tS = n(442433),
    tN = n(42473),
    tC = n(200542),
    tO = n(414405);
function tR(e) {
    (0, tS.L3)(e, async () => {
        let { default: e } = await Promise.all([n.e("66601"), n.e("44751")]).then(n.bind(n, 575538));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
let tL = function () {
    let { parentAnalyticsLocation: e } = (0, es.Ay)(),
        t = (0, eg.Et)(),
        n = (0, eg.XT)(),
        i = (0, tm.bG)([em.Ay], () => em.Ay.getIsAtMaxSaveClipOperations()),
        a = (0, tm.bG)([e1.A], () => e1.A.getCurrentUserActiveStream()),
        s = t && (a?.state === G.XYD.ACTIVE || n),
        { enableGamePanelEntrypoint: l } = tC.A.useConfig({ location: "ClipsPanelButton" }),
        { tooltip: o, clipsSourceAttached: d } = (0, tO.A)();
    return l && s
        ? (0, r.jsx)(tN.A, {
              disabled: i || !d,
              tooltipText: o,
              onClick: () => {
                  (0, eS.l0)(), (0, eE.X)(e, eE.O.CLIP);
              },
              onContextMenu: tR,
              icon: tg.x,
          })
        : null;
};
var ty = n(338771),
    tD = n(212637),
    tv = n(397400),
    tb = n(488803);
let tM = (0, eM.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tP = n(823748),
    tU = n(522055),
    tw = n(576709);
function tG(e) {
    let { title: t, body: n, ctaText: i, runningGameId: a, targetElementRef: s, onClick: l, onClose: o } = e,
        d = (0, _.bG)([tU.A], () => null != a && tU.A.getGlobalCatalogGame(a)?.can_market === !0, [a]);
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
function tx(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tG, {
        title: z.intl.formatToPlainString(tw.default.lKzVNu, { gameName: t }),
        body: z.intl.string(tw.default.qqjm8O),
        ctaText: z.intl.string(tw.default["eJg+Zm"]),
        ...n,
    });
}
function tk(e) {
    let { gameName: t, ...n } = e;
    return (0, r.jsx)(tG, {
        title: z.intl.formatToPlainString(tw.default.lwwiHE, { gameName: t }),
        body: z.intl.string(tw.default.B33GXN),
        ctaText: z.intl.string(tw.default["968/QC"]),
        ...n,
    });
}
var tF = n(453774),
    tV = n(44724),
    tB = n(153488),
    tH = n(942370),
    tj = n(493285);
function tW(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === G.$pd.PLAYING &&
              (0, tf.A)(t, G.jUm.JOIN))
    );
}
let tY = a.memo(function (e) {
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
                connectionApp: R,
            } = e,
            { parentAnalyticsLocation: L, analyticsLocations: y } = (0, es.Ay)(),
            D = (0, tF.A)(f?.id),
            v = tW(f, I, E),
            { enabled: b } = tM.useConfig({ location: "activity-panel" }),
            M = (0, tP.Bp)("activity-panel"),
            P = (0, tb.C$)(s ?? void 0, "activity-panel"),
            w = (0, _.bG)([tB.A], () => tB.A.hasConsented(G.YAq.PERSONALIZATION)),
            x = (0, tP.TF)(u?.id, { shouldFetch: M || P }),
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
                    (0, eE.X)(L, eE.O.INVITE),
                    U.default.track(G.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: I.application_id,
                        location: p.location,
                    }),
                    (0, T.qf)(I, !1);
            }, [I, p, L, u]),
            H = a.useCallback(
                (e, t) => () => {
                    (0, eE.X)(L, eE.O.LEAVE_ACTIVITY),
                        tp.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [L],
            ),
            j = a.useCallback(
                (e) => () => {
                    (0, eE.X)(L, eE.O.LEAVE_ACTIVITY), ey.A.stopFrame({ applicationId: e });
                },
                [L],
            ),
            W = a.useCallback(() => {
                (0, ty.A)(t);
            }, [t]),
            Y = a.useCallback(() => {
                (0, td.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("16123"),
                        n.e("18710"),
                        n.e("76171"),
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
                            selectSource: null != te.Ay.getVoiceChannelId(),
                            analyticsLocations: y,
                        });
                });
            }, [u, y]),
            K = f?.name ?? u?.name ?? "",
            $ = a.useCallback(() => {
                (0, tv.pK)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                    (0, td.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("50601"), n.e("37084"), n.e("74132")]).then(
                            n.bind(n, 279871),
                        );
                        return (t) => (0, r.jsx)(e, { gameName: K, gameApplicationId: u?.id, ...t });
                    });
            }, [K, u?.id]),
            q = a.useCallback(() => {
                d()(null != s, "Received null guildId"),
                    (0, tv.pK)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                    (0, tD.A)({ analyticsLocations: y, analyticsLocation: p.location, guildId: s });
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
        let J = null == D || null == f ? null : (0, r.jsx)(tz, { applicationId: D.id }),
            ee = F
                ? (0, r.jsx)(t$, {
                      tooltipText: z.intl.formatToPlainString(tw.default.YhnUVO, { gameName: K }),
                      onClick: $,
                      onViewed: () => (0, tv.ET)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, r.jsx)(tx, {
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
                  ? (0, r.jsx)(t$, {
                        tooltipText: z.intl.formatToPlainString(tw.default.lwwiHE, { gameName: K }),
                        onClick: q,
                        onViewed: () => (0, tv.ET)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, r.jsx)(tk, {
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
                if ((null == u && null != E && !(0, O.f)()) || (!l && !i)) return null;
                let a = null;
                return (
                    l
                        ? ((e = !1),
                          (t = () => {
                              W(), (0, eE.X)(L, eE.O.STREAM, !1);
                          }),
                          (n = tc.G),
                          (a = z.intl.string(z.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                Y(), (0, eE.X)(L, eE.O.STREAM, !0);
                            }),
                            (n = tu.F),
                            (a =
                                null != u
                                    ? z.intl.formatToPlainString(z.t.AB5gTy, { game: u.name })
                                    : z.intl.string(z.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = tu.F),
                            null != o && (0, e0.gV)(o.type) && (a = z.intl.string(z.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: tj.IF,
                        children: (0, r.jsx)(tN.A, { tooltipText: a, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                v && null == E
                    ? (0, r.jsx)(tN.A, { ref: m, tooltipText: z.intl.string(z.t["hC/Zey"]), onClick: B, icon: t_.D })
                    : null,
            ei =
                null == E
                    ? null
                    : (0, r.jsx)(tN.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: H(E.applicationId, E.location),
                          icon: tE.o,
                      }),
            ea =
                null == A
                    ? null
                    : (0, r.jsx)(tN.A, {
                          tooltipText: z.intl.string(z.t["R/FK4A"]),
                          onClick: j(A.applicationId),
                          icon: tE.o,
                      }),
            el =
                !N || C
                    ? null
                    : (0, r.jsx)(tK, {
                          runningGame: u,
                          startAuthorization: function () {
                              S({ analyticsLocations: y }) === tH._M.RPC &&
                                  (Q(!0),
                                  null != Z.current && clearTimeout(Z.current),
                                  (Z.current = setTimeout(() => {
                                      Q(!1);
                                  }, 9e4)));
                          },
                          connectionApp: R,
                          ref: g,
                      }),
            eo =
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
        return (0, r.jsxs)("div", {
            className: tj.o1,
            children: [el ?? J ?? en, ee, (ei ?? ea) == null ? (0, r.jsx)(tL, {}) : null, et, ei ?? ea, eo],
        });
    }),
    tK = a.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: a } = e;
        return (0, r.jsx)(tN.A, {
            ref: t,
            onClick: () => {
                U.default.track(G.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: a?.id ?? null,
                }),
                    i();
            },
            icon: to.A,
            tooltipText: z.intl.string(z.t.sbdnpw),
        });
    });
function t$(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: s } = e,
        l = a.useRef(null),
        o = a.useRef(!1);
    a.useEffect(() => {
        o.current || ((o.current = !0), i());
    }, [i]);
    let d = (0, tI.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: u } = (0, v.c9)(),
        [_, A] = (0, eh.kn)(!d && c && u ? [E.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [h, I] = (0, eh.kn)([E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        f = a.useCallback(() => {
            A(er.i.TAKE_ACTION), I(er.i.TAKE_ACTION), n();
        }, [A, I, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: tj.IF,
                children: [
                    (0, r.jsx)("div", { className: tj.uD, children: (0, r.jsx)("div", { className: tj.Z9 }) }),
                    (0, r.jsx)(tN.A, { ref: l, tooltipText: t, onClick: f, icon: tA._ }),
                    h === E.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, r.jsx)(tT.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != _ && s({ targetElementRef: l, markAsDismissed: A, markBadgeAsDismissed: I }),
        ],
    });
}
function tz(e) {
    let { applicationId: t } = e,
        n = a.useRef(null);
    a.useEffect(() => {
        U.default.track(G.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let i = a.useCallback(() => {
            (0, tV.G)({ applicationId: t });
        }, [t]),
        s = a.useCallback(() => {
            (0, tV.default)({ applicationId: t });
        }, [t]),
        l = a.useCallback(() => {
            U.default.track(G.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), s();
        }, [t, s]);
    return (0, r.jsx)(tN.A, { tooltipText: z.intl.string(z.t.vyaWs7), onClick: l, onMouseDown: i, icon: th.U, ref: n });
}
var tq = n(428689),
    tZ = n(409626),
    tX = n(692969);
let tQ = (0, eM.mj)({
    kind: "user",
    name: "2026-07-rtc-panel-game-card",
    defaultConfig: { improvedGameCard: !1 },
    variations: { 1: { improvedGameCard: !0 } },
});
var tJ = n(475358),
    t0 = n(205302);
function t1(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(I.D, {
        className: t0.kL,
        onClick: t,
        children: (0, r.jsx)(x.E, {
            className: t0.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: z.intl.string(z.t.jfrLLb),
        }),
    });
}
var t2 = n(532624),
    t3 = n(350535),
    t4 = n(16590),
    t6 = n(412126);
function t5(e) {
    let { isStreaming: t, isCurrentlyRunningGame: n, onClickNotSharing: i } = e,
        a = (0, _.bG)([t2.Ay], () => t2.Ay.getKeybindForAction(G.hCu.SAVE_CLIP)),
        s = null != a && a.shortcut.length > 0 ? t3.dI(a.shortcut, !0) : null,
        l = (0, eg.Et)(),
        o = (0, eg.XT)(),
        d = b.tz.useSetting(),
        c = (0, _.bG)([P.A], () => P.A.getStatus()),
        u = !__OVERLAY__ && (!d || c === G.clD.INVISIBLE),
        E = l && (t || o) && n && null != s;
    return n
        ? u
            ? (0, r.jsx)(t1, { onClick: i })
            : E
              ? (0, r.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    className: t6.En,
                    tag: "div",
                    children: z.intl.format(t4.default.ESZwQX, {
                        keybind: s,
                        keybindHook: () => (0, r.jsx)(tJ.e, { shortcut: s, className: t6.oH, keyClassName: t6.Bj }),
                    }),
                })
              : null
        : (0, r.jsx)(x.E, { variant: "text-xs/medium", color: "text-subtle", children: z.intl.string(z.t.W4N1ru) });
}
var t7 = n(914782);
function t8(e) {
    let { name: t, applicationId: n } = e,
        i = (0, tX.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: tZ.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, r.jsx)(I.D, {
        onClick: i,
        className: l()(null != i && t7.On),
        children: (0, r.jsx)(tl.A, { className: t7.mO, children: t }),
    });
}
function t9(e) {
    let { application: t, game: n, showLiveBadge: i, ref: a } = e;
    return (0, r.jsxs)("div", {
        className: t7.f9,
        children: [
            (0, r.jsx)(eV.A, { className: t7.Gt, game: t, pid: n?.pid, ref: a }),
            i ? (0, r.jsx)(tq.n, { size: "md", color: "currentColor", className: t7.it }) : null,
        ],
    });
}
function ne(e) {
    let { name: t, application: n, game: i, isStreaming: a, clickable: s, ref: l } = e,
        o = (0, tX.A)({
            location: "ActivityPanelGameCardIcon",
            applicationId: n?.id,
            source: tZ.GameProfileSources.RtcPanel,
            trackEntryPointImpression: !1,
        }),
        d = s && null != o,
        c = (0, r.jsx)(t9, { application: n, game: i, showLiveBadge: a && !d, ref: l });
    return d
        ? (0, r.jsx)(I.D, {
              onClick: o,
              className: t7.Ow,
              "aria-label": z.intl.formatToPlainString(z.t["8QLQB+"], { gameName: t ?? "" }),
              children: c,
          })
        : c;
}
function nt(e) {
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
    let { improvedGameCard: I } = tQ.useConfig({ location: "RunningGameCard" });
    return (0, r.jsxs)("div", {
        className: t7.cm,
        children: [
            (0, r.jsx)(ne, { name: h, application: s, game: l, isStreaming: i, clickable: I, ref: u }),
            (0, r.jsx)(ea, {
                popoutTargetRef: E,
                isForceShowSharingPopout: d,
                setIsForceShowSharingPopout: c,
                hidePopout: !A,
                children: (0, r.jsxs)("div", {
                    className: t7.pq,
                    children: [
                        null != h ? (0, r.jsx)(t8, { name: h, applicationId: s?.id }) : null,
                        (0, r.jsx)(t5, { isStreaming: i, isCurrentlyRunningGame: A, onClickNotSharing: o }),
                    ],
                }),
            }),
        ],
    });
}
var nn = n(5867),
    ni = n(165610);
let nr = {
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
var na = n(534952),
    ns = n(911070),
    nl = n(524224),
    no = n(268920),
    nd = n(633217);
function nc(e) {
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
        E = ta.useConfig({ location: "ActivityPanelGameCard" }),
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
    s && (m = z.intl.string(ns.default["2cOIOr"]));
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
            (p = z.intl.formatToPlainString(ns.default.dPuaZE, { applicationName: I.name })),
            (T = z.intl.string(ns.default.jR3bbS)),
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
function nu(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: a } = e,
        s = z.intl.string(z.t.MxAlrB),
        l = z.intl.string(z.t["/UTTEg"]),
        o = [
            {
                text: z.intl.string(z.t.aRIFWD),
                onClick: () => {
                    i(er.i.TAKE_ACTION), window.open(ti.A.getArticleURL(G.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((s = z.intl.string(ns.default.ublzTG)),
            (l = z.intl.string(ns.default.JgM2xu)),
            (t = { type: "video", src: nd.A, fallbackImageSrc: no.A, aspectRatio: "2/1", loop: !0 })),
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
function n_(e) {
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
                        (0, eE.X)(s, eE.O.INVITE),
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
function nE(e) {
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
                { data: n } = (0, ec.YY)(t?.parentId ?? t?.id),
                i = na.ji.find((e) => e.applicationId === n?.id);
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
            return (0, r.jsx)(nc, {
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
            return (0, r.jsx)(nu, {
                incentivizedAccountLinkingRewarded: N,
                markAsDismissed: n,
                accountLinkUpsellTargetRef: E,
            });
        case 2:
            return (0, r.jsx)(n_, {
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
                (0, r.jsx)(eb, {
                    targetElementRef: E,
                    gameId: i.id,
                    gameName: i.name,
                    gameCommunityGuildId: f,
                    markAsDismissed: n,
                })
            );
        case 4:
            return (0, r.jsx)(eR, { targetElementRef: A, markAsDismissed: n });
        default:
            return null;
    }
}
let nA = (0, S.A)(function (e) {
    let { message: t } = e;
    return (0, r.jsx)(ts.A, { children: t });
});
function nh(e) {
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
            g.A.channelListScrollTo(a.guild_id ?? G.ME, a.id),
            !E &&
                ((0, e0.gV)(a.type) &&
                    m.A.selectParticipant(
                        a.id,
                        (0, e_.Qt)({ applicationId: i.applicationId, instanceId: i.compositeInstanceId }),
                    ),
                (0, e0.pQ)(a.type) && (0, R.gk)(nn.Gd.PANEL));
    }
    null != l && null != a
        ? ((t = G.BVt.CHANNEL(l.id, a.id)), (h = `${h} / ${l.name}`))
        : null != a && (t = G.BVt.CHANNEL(G.ME, a.id));
    let f = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eV.A, { className: nl.Gt, game: n, size: eV.M.SMALL, ref: u }),
            (0, r.jsx)(ea, {
                popoutTargetRef: _,
                isForceShowSharingPopout: o,
                setIsForceShowSharingPopout: c,
                children: (0, r.jsxs)("div", {
                    className: nl.pq,
                    children: [
                        (0, r.jsx)(e$.A, {
                            href: t,
                            onClick: function () {
                                I(), E && p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                            },
                            children: (0, r.jsx)(tl.A, { className: nl._W, children: n.name }),
                        }),
                        null != a && (0, e0.pQ)(a.type)
                            ? (0, r.jsx)(e$.A, {
                                  href: t,
                                  onClick: I,
                                  children: (0, r.jsx)(ts.A, { className: nl.Ix, children: h }),
                              })
                            : (0, r.jsx)(nA, { timestamps: A }),
                    ],
                }),
            }),
        ],
    });
    return (0, r.jsx)("div", { className: nl.cm, children: f });
}
function nI(e) {
    let { frame: t, application: n, accountLinkUpsellTargetRef: i, isActivityPopoutOpen: s } = e,
        l = a.useMemo(() => ({ start: t.connectedSince }), [t.connectedSince]),
        o = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eV.A, { className: nl.Gt, game: n, size: eV.M.SMALL, ref: i }),
                (0, r.jsxs)("div", {
                    className: nl.pq,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: function () {
                                s
                                    ? p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
                                    : ey.A.updateFrameLayoutMode({
                                          applicationId: t.applicationId,
                                          layoutMode: ni.y.FOCUSED,
                                      });
                            },
                            onMouseDown: (e) => {
                                e.stopPropagation();
                            },
                            className: nl.rB,
                            children: (0, r.jsx)(tl.A, { className: nl._W, children: n.name }),
                        }),
                        (0, r.jsx)(nA, { timestamps: l }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)("div", { className: nl.cm, children: o });
}
function nf(e) {
    let { streamMetadata: t, accountLinkUpsellTargetRef: n, streamQualityIndicator: i } = e,
        { title: a, sanitizedTitle: s } = (0, eW.A)(t);
    return (0, r.jsxs)("div", {
        className: nl.cm,
        ref: n,
        children: [
            (0, r.jsx)(eY.A, { title: s, icon: t?.sourceIcon }),
            (0, r.jsxs)("div", {
                className: nl.pq,
                children: [
                    (0, r.jsx)(tl.A, { children: a }),
                    null != i &&
                        (0, r.jsxs)("div", {
                            className: nl.qi,
                            children: [
                                (0, r.jsx)(f.t, { size: "xxs", color: eL.k0.PREMIUM_TIER_2 }),
                                (0, r.jsx)(eJ, { className: nl.s, variant: "text-xxs/semibold", children: i }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
let np = (0, N.A)(function (e) {
    let { guildId: t, analyticsContext: n, className: i } = e,
        s = a.useRef(null),
        o = a.useRef(null),
        d = a.useRef(null),
        c = (0, _.bG)([e2.default], () => e2.default.getId()),
        A = (0, _.bG)([eU.Ay, tn.A], () => (0, eK.A)(eU.Ay, tn.A)),
        { enabled: h } = eP.useConfig({ location: "ActivityPanelGameCard" }),
        { previouslyRunningGame: I, isWithinThreshold: f } = (function () {
            let [e, t] = (0, a.useState)(Date.now()),
                n = (0, _.bG)([ek], () => ek.getLastPreviouslyRunningGame());
            if (
                ((0, a.useEffect)(() => {
                    if (null == n || Date.now() - n.endedAt >= eF) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + eF - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [n]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let i = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i < eF };
        })(),
        p = (0, _.bG)([te.Ay, e3.A], () => e3.A.getChannel(te.Ay.getVoiceChannelId())),
        T = (0, _.bG)([L.Ay], () => L.Ay.getConnectedActivityChannelId()),
        m = (0, _.bG)([e3.A], () => e3.A.getChannel(T)),
        g = (0, _.bG)([e6.A], () => e6.A.getGuild(m?.guild_id)),
        [S, N] = (0, _.yK)([e1.A], () => [e1.A.getCurrentUserActiveStream(), e1.A.getStreamerActiveStreamMetadata()]),
        O = (0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
        R = (0, _.bG)([eD.A], () => eD.A.getConnectedFrame()),
        y = (0, _.bG)([e6.A, e7.A], () => null == p || eH.vz(p, e6.A, e7.A, !1)),
        [b] = (0, eu.A)([
            (function () {
                if (null != N && null != N.id) return N.id;
                if (null != A) return A.id;
                if (null != O) return O.applicationId;
                if (null != R) return R.applicationId;
                if (null != I && null != I.id) return I.id;
            })(),
        ]),
        P =
            ((0, _.bG)([L.Ay], () => L.Ay.getCurrentEmbeddedActivity()),
            (0, _.bG)([e5.Ay], () => (0, ej.A)(e5.Ay) && (0, tr.isWindows)()) || !1),
        w = (0, _.bG)([e8.A], () => (null != c ? e8.A.findActivity(c, (e) => e.type === G.$pd.PLAYING) : null)),
        x = null != S && S.ownerId === c && S.state !== G.XYD.ENDED,
        k = (0, _.bG)([tt.default, e9.A], () => (null != m ? (0, eA.m1)(m, tt.default, e9.A) : void 0)),
        F = (function () {
            let { resolution: e, fps: t } = (0, _.cf)([eq.A], () => eq.A.getState());
            if (e !== eX.on.RESOLUTION_720 || t === eX.kn.FPS_60) return `${(0, eX.zr)(e)} ${(0, eZ.Bs)(t)}`;
        })(),
        [V, B] = a.useState(!1),
        H = (0, _.bG)([ez.A], () => ez.A.getWindowOpen(G.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: j, analyticsLocations: W } = (0, es.Ay)(),
        {
            hasAlreadyLinked: Y,
            canStartAuthorization: K,
            connectionApp: $,
            startAuthorization: z,
        } = (0, ed.RD)(b, { allowedFlows: [tH._M.RPC, tH._M.WEB] }),
        [q, Z] = a.useState(null),
        X = null != q,
        Q = a.useCallback(
            function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return Z(b?.id ?? null), z(...t);
            },
            [b?.id, z],
        ),
        J = (0, C.A)(b?.id);
    a.useEffect(() => {
        null != b && J !== b?.id && Z(null);
    }, [b, J]);
    let ee = (0, u.K)((e) => {
            e &&
                null != $ &&
                U.default.track(G.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: A?.id ?? null, application_id: $.id });
        }),
        et = a.useMemo(() => {
            let e = A?.id ?? I?.id;
            return null != e ? nr[e] : void 0;
        }, [A?.id, I?.id]),
        en = (0, _.bG)([e4.A], () => null != et && e4.A.isMember(et), [et]),
        ei = h && null != et && !en && (null != A || f) ? et : void 0,
        ea = null != A && (P || K) && (!x || N?.pid != null),
        [el, eo] = (function (e) {
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
                { shouldShow: T, markAsDismissed: m } = (0, eB.D3)({
                    application: t,
                    disabled: !p,
                    dismissibleContent: E.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                    dismissibleContentGroupName: er.m.ACCOUNT_NAME_ZONE,
                    bypassAutoDismiss: !0,
                    cooldownConfig: eB.Yb,
                }),
                g = !f && null != r && o,
                S = a.useMemo(() => {
                    if (f || T) return [];
                    let e = [];
                    return (
                        o && d && tW(t, n, i) && null == i && e.push(E.M.ACCOUNT_LINK_INVITE_FRIENDS),
                        null != c && t?.id != null && t?.name != null && e.push(E.M.JOIN_GAME_COMMUNITY_RTC_CTA),
                        e
                    );
                }, [n, t, f, d, i, c, o, T]),
                [N, C] = (0, eh.kn)(S, er.m.ACCOUNT_NAME_ZONE, !1),
                { shouldShow: O, markAsDismissed: R } = (function () {
                    let { disabled: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, eN.A)("AutoclippingAccountPanelCoachmark"),
                        n = (0, eg.Et)(),
                        i = (0, _.bG)(
                            [em.Ay],
                            () => !em.Ay.hasUserSetAutoclippingSettings() && !em.Ay.getEnableAutoclipping(),
                        ),
                        r = (0, D.A)((e) => e.isOpen),
                        a = (0, M.G)(),
                        s = !e && t && n && i && !r && !a,
                        [l, o] = (0, eh.Wl)(
                            s ? E.M.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK : null,
                            { cooldownDurationMs: eO },
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
                return T ? [0, m] : g ? [1, () => s(null)] : O ? [4, R] : [null, () => {}];
            }, [m, R, C, s, O, T, g, N]);
        })({
            application: b,
            activity: w,
            embeddedActivity: O,
            connectingGameId: q,
            setConnectingGameId: Z,
            canStartAuthorization: K,
            hasAlreadyLinked: Y,
            didStartAuthorization: X,
            gameCommunityGuildId: ei,
            canShowCurrentRunningGamePanel: ea,
            isStreamingCurrentRunningGame: x && null != A && N?.id != null && N.id === A.id,
        }),
        ec = null != I && (1 === el || (f && (0 === el || 3 === el))) ? I : null,
        e_ = a.useCallback(
            (e, t, n) => {
                let { isGameRunning: i } = n;
                return (0, r.jsx)(nt, {
                    isStreaming: x,
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
            [V, x],
        ),
        eE = a.useMemo(
            () =>
                ea
                    ? e_(b, A, { isGameRunning: !0 })
                    : null != O && null != b && tW(b, w, O)
                      ? (0, r.jsx)(nh, {
                            application: b,
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
                          null != b &&
                          (function (e) {
                              let { application: t, frame: n } = e;
                              return null != t && null != n && n.applicationId === t.id;
                          })({ application: b, frame: R })
                        ? (0, r.jsx)(nI, {
                              application: b,
                              accountLinkUpsellTargetRef: o,
                              frame: R,
                              isActivityPopoutOpen: H,
                          })
                        : x
                          ? (0, r.jsx)(nf, {
                                streamMetadata: N,
                                accountLinkUpsellTargetRef: o,
                                streamQualityIndicator: F,
                            })
                          : null != ec
                            ? e_(b, ec, { isGameRunning: !1 })
                            : null,
            [N, w, b, k, m, O, R, g, H, V, x, ea, ec, e_, A, F],
        );
    return null == eE
        ? null
        : (0, r.jsx)("div", {
              className: l()(nl.nd, i),
              ref: s,
              children: (0, r.jsxs)("div", {
                  className: nl.rf,
                  children: [
                      eE,
                      (0, r.jsx)(tY, {
                          stream: S,
                          canGoLive: P,
                          guildId: t,
                          isStreaming: x,
                          channel: m,
                          canStream: y,
                          runningGame: A,
                          activity: w,
                          application: b,
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
                      (0, r.jsx)(nE, {
                          popover: el,
                          dismissPopover: eo,
                          application: b,
                          connectionApp: $,
                          activity: w,
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
