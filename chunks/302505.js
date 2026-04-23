n.d(t, { A: () => ns }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(284009),
    d = n.n(o),
    c = n(110259),
    u = n(172218),
    h = n(17928),
    A = n(554146),
    _ = n(116833),
    g = n(43105),
    m = n(604121),
    p = n(403581),
    f = n(939249),
    E = n(228366),
    C = n(298990),
    x = n(367513),
    I = n(951001),
    b = n(492684),
    S = n(707606),
    N = n(475743),
    T = n(775602),
    v = n(646865),
    y = n(795816),
    R = n(933958),
    j = n(379848),
    L = n(832248),
    O = n(371912),
    G = n(253932),
    M = n(904481),
    D = n(461213),
    U = n(954571),
    P = n(821609),
    w = n(652215),
    k = n(834730),
    V = n(133171),
    B = n(243721),
    H = n(315710),
    F = n(404778),
    W = n(331322),
    K = n(534514),
    Y = n(922016),
    z = n(827827),
    q = n(481045),
    X = n(395277),
    Q = n(985018),
    J = n(982375);
function Z(e) {
    let { closePopout: t } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: J.K2,
        children: (0, l.jsx)(P.$, {
            variant: "primary",
            size: "sm",
            text: Q.intl.string(X.default.Poezn1),
            onClick: () => {
                t(), (0, z.A)({ nextStatus: w.clD.ONLINE });
            },
            fullWidth: !0,
        }),
    });
}
function $(e) {
    let { showCurrentGame: t, shouldShowStatus: n = !1 } = e,
        i = (0, h.bG)([D.A], () => D.A.getStatus());
    return (0, l.jsxs)("div", {
        className: J.E3,
        children: [
            (0, l.jsxs)("div", {
                className: J.fu,
                children: [
                    (0, l.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: Q.intl.string(X.default.WhdCGP),
                    }),
                    n &&
                        (0, l.jsxs)("div", {
                            className: J.$v,
                            children: [
                                (0, l.jsx)(V.nW, { status: w.clD.ONLINE, size: 8 }),
                                (0, l.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    children:
                                        i === w.clD.INVISIBLE
                                            ? Q.intl.string(X.default.a3AofS)
                                            : Q.intl.string(Q.t.WbGtnH),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsx)(B.d, {
                onChange: (e) => {
                    G.tz.updateSetting(e), n && (0, z.A)({ nextStatus: e ? w.clD.ONLINE : w.clD.INVISIBLE });
                },
                checked: t,
            }),
        ],
    });
}
function ee(e) {
    let { children: t } = e,
        n = (0, s.useRef)(null);
    return (
        (0, H.t)(n),
        (0, l.jsx)("div", { className: J.iE, ref: n, children: (0, l.jsx)("div", { className: J.Qs, children: t }) })
    );
}
function et(e) {
    let { closePopout: t } = e,
        n = G.tz.useSetting();
    return (0, l.jsxs)(ee, {
        children: [
            (0, l.jsx)($, { showCurrentGame: n }),
            (0, l.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Q.intl.string(X.default["7cfFob"]),
            }),
            (0, l.jsx)(F.c, { className: J.yF }),
            (0, l.jsx)(q.qA, { onClosePopout: t }),
        ],
    });
}
function en(e) {
    let { closePopout: t } = e;
    return (0, l.jsxs)(ee, {
        children: [
            (0, l.jsxs)(W.B, {
                align: "start",
                gap: 0,
                style: { marginBottom: 8 },
                children: [
                    (0, l.jsx)(K.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: J._M,
                        children: Q.intl.string(X.default["5YsmGI"]),
                    }),
                    (0, l.jsxs)("div", {
                        className: J.$v,
                        children: [
                            (0, l.jsx)(V.nW, { status: w.clD.ONLINE, size: 8 }),
                            (0, l.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: Q.intl.string(X.default.U8MFdR),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Q.intl.string(X.default.Yl0mh4),
            }),
            (0, l.jsx)(Z, { closePopout: t }),
        ],
    });
}
function ei(e) {
    let { closePopout: t } = e,
        n = G.tz.useSetting();
    return (0, l.jsxs)(ee, {
        children: [
            (0, l.jsx)($, { showCurrentGame: n, shouldShowStatus: !0 }),
            (0, l.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: Q.intl.string(X.default["7cfFob"]),
            }),
            (0, l.jsx)(F.c, { className: J.yF }),
            (0, l.jsx)(q.qA, { onClosePopout: t }),
        ],
    });
}
var el =
    (((i = {})[(i.ActivityNux = 0)] = "ActivityNux"),
    (i[(i.StatusNux = 1)] = "StatusNux"),
    (i[(i.ActivityAndStatusNux = 2)] = "ActivityAndStatusNux"),
    (i[(i.Activity = 3)] = "Activity"),
    (i[(i.Status = 4)] = "Status"),
    (i[(i.ActivityAndStatus = 5)] = "ActivityAndStatus"),
    i);
function es(e) {
    let { showPopout: t, popoutState: n, handleClose: i, popoutTargetRef: r, children: a } = e,
        [o, d] = (0, s.useState)(n),
        c = (0, s.useRef)(null),
        u = (function (e) {
            if (null === e) return null;
            switch (e) {
                case 0:
                    return {
                        type: "popover",
                        title: Q.intl.string(X.default.vxVbGP),
                        body: [Q.intl.string(X.default["7cfFob"])],
                        action: {
                            text: Q.intl.string(X.default.k4tCg2),
                            onClick: () => {
                                G.tz.updateSetting(!0);
                            },
                        },
                        textLink: { text: Q.intl.string(Q.t["ZrN+DT"]), onClick: q.L7 },
                    };
                case 1:
                    return {
                        type: "popover",
                        title: Q.intl.string(X.default.qKDqet),
                        body: [Q.intl.string(X.default.Yl0mh4)],
                        action: {
                            text: Q.intl.string(X.default.Poezn1),
                            onClick: () => {
                                (0, z.A)({ nextStatus: w.clD.ONLINE });
                            },
                        },
                    };
                case 2:
                    return {
                        type: "popover",
                        title: Q.intl.string(X.default["6cA8HZ"]),
                        body: [Q.intl.string(X.default["7cfFob"])],
                        action: {
                            text: Q.intl.string(X.default.k4tCg2),
                            onClick: () => {
                                G.tz.updateSetting(!0), (0, z.A)({ nextStatus: w.clD.ONLINE });
                            },
                        },
                        textLink: { text: Q.intl.string(Q.t["ZrN+DT"]), onClick: q.L7 },
                    };
                case 3:
                    return { type: "popout", children: et };
                case 4:
                    return { type: "popout", children: en };
                case 5:
                    return { type: "popout", children: ei };
                default:
                    return null;
            }
        })(o),
        h = (0, s.useRef)(t);
    if (
        ((0, s.useEffect)(() => {
            t && !h.current && d(n), t !== h.current && (h.current = t);
        }, [n, t]),
        null == u || !t)
    )
        return a;
    if ("popover" === u.type) {
        let { action: e, title: t, body: n, textLink: s } = u;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(g.A, {
                    targetElementRef: r,
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
                a,
            ],
        });
    }
    let { children: A } = u;
    return (0, l.jsx)(Y.Y, {
        targetElementRef: c,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(A, { closePopout: t });
        },
        onRequestClose: i,
        children: () => (0, l.jsx)(f.D, { innerRef: c, onClick: i, children: a }),
    });
}
var er = n(49999);
let ea = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: i, popoutTargetRef: r } = e,
        a = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, O.c9)(),
                l = G.tz.useSetting(),
                s = (0, M.G)(),
                r = (0, h.bG)([D.A], () => D.A.getStatus()),
                { isOpen: a } = (0, L.A)();
            if (((n && i) || t) && !s && !a && !__OVERLAY__) {
                if (!l && r === w.clD.INVISIBLE) return t ? el.ActivityAndStatus : el.ActivityAndStatusNux;
                if (!l) return t ? el.Activity : el.ActivityNux;
                if (r === w.clD.INVISIBLE) return t ? el.Status : el.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, s.useEffect)(() => {
        n && U.default.track(w.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let o = n ? [] : [A.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, l.jsx)(j.Ay, {
        contentTypes: o,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: o } = e,
                d = s === A.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, l.jsx)(es, {
                showPopout: d,
                popoutState: a,
                handleClose: () => {
                    o(er.i.USER_DISMISS), i(!1);
                },
                popoutTargetRef: r,
                children: t,
            });
        },
    });
};
var eo = n(688810),
    ed = n(139286),
    ec = n(941314),
    eu = n(46225),
    eh = n(627363),
    eA = n(429913),
    e_ = n(568598),
    eg = n(384059),
    em = n(47167),
    ep = n(402216),
    ef = n(404374),
    eE = n(625180),
    eC = n(91242),
    ex = n(686956);
function eI(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: r, markAsDismissed: a } = e,
        { analyticsLocations: o } = (0, eo.Ay)();
    return (
        s.useEffect(() => {
            U.default.track(w.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: o, application_id: n, guild_id: r });
        }, [n, r, o]),
        (0, l.jsx)(g.A, {
            targetElementRef: t,
            position: "top",
            onRequestClose: () => {
                U.default.track(w.HAw.GAME_COMMUNITY_UPSELL_DISMISSED, {
                    location_stack: o,
                    application_id: n,
                    guild_id: r,
                }),
                    a(er.i.USER_DISMISS);
            },
            title: Q.intl.formatToPlainString(Q.t.ry9SJw, { gameName: i }),
            body: Q.intl.string(Q.t.YPpOov),
            actions: [
                {
                    text: Q.intl.string(Q.t.RVfNGU),
                    onClick: () => {
                        U.default.track(w.HAw.GAME_COMMUNITY_UPSELL_ACCEPTED, {
                            location_stack: o,
                            application_id: n,
                            guild_id: r,
                        }),
                            a(er.i.TAKE_ACTION),
                            ex.A.joinGuild(r, { source: w.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
var eb = n(945810);
let eS = (0, eb.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eN = n(328153),
    eT = n(137177),
    ev = n(932001);
let ey = { gameUpsellsDismissal: {} },
    eR = { ...ey };
class ej extends h.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        eR = e ?? eR;
    }
    getState() {
        return eR;
    }
    getGameUpsellDismissal(e, t) {
        return eR.gameUpsellsDismissal[t]?.[e] ?? null;
    }
}
let eL = new ej(E.h, {
    LOGOUT: function () {
        eR = { ...ey };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationId: t, dismissedAt: n, dismissibleContent: i } = e,
            l = eR.gameUpsellsDismissal[i]?.[t],
            s = null != l ? l.timesDismissed + 1 : 1;
        eR = {
            gameUpsellsDismissal: {
                ...eR.gameUpsellsDismissal,
                [i]: { ...eR.gameUpsellsDismissal[i], [t]: { dismissedAt: n, timesDismissed: s } },
            },
        };
    },
});
var eO = n(279250),
    eG = n(880144),
    eM = n(277680),
    eD = n(118277),
    eU = n(905552),
    eP = n(95035),
    ew = n(716965),
    ek = n(567249),
    eV = n(929921),
    eB = n(650338),
    eH = n(753070),
    eF = n(194368);
function eW(e) {
    let { className: t, color: n, ...i } = e;
    return (0, l.jsx)(k.E, { className: a()({ [eF.Q]: null == n }, t), color: n, ...i });
}
var eK = n(95701),
    eY = n(616356),
    ez = n(495544),
    eq = n(734057),
    eX = n(184989),
    eQ = n(71393),
    eJ = n(969341),
    eZ = n(576705),
    e$ = n(290863),
    e0 = n(994500),
    e1 = n(309010),
    e2 = n(287809),
    e6 = n(157257),
    e9 = n(975571),
    e3 = n(723702);
let e7 = (0, eb.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var e4 = n(994314),
    e5 = n(485599),
    e8 = n(141628),
    te = n(192308),
    tt = n(959988),
    tn = n(183623),
    ti = n(241541),
    tl = n(70688),
    ts = n(687966),
    tr = n(34188),
    ta = n(942857),
    to = n(833349),
    td = n(869003),
    tc = n(521588),
    tu = n(702841),
    th = n(475358),
    tA = n(176781),
    t_ = n(442433),
    tg = n(42473),
    tm = n(186111),
    tp = n(532624),
    tf = n(350535),
    tE = n(274372),
    tC = n(572164),
    tx = n(399925),
    tI = n(646693);
function tb(e) {
    (0, t_.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
let tS = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [i, r] = s.useState(!1),
            a = s.useCallback(() => r(!1), []);
        return (0, l.jsx)(g.A, {
            shouldShow: i,
            targetElementRef: n,
            position: "top",
            title: Q.intl.format(Q.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, l.jsx)("span", {
                        className: tI.E,
                        children: (0, l.jsx)(th.e, { className: tI.d, shortcut: t }),
                    }),
            }),
            body: Q.intl.format(Q.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
            caretConfig: { align: "center" },
            onRequestClose: a,
        });
    },
    tN = () => {
        let e = s.useRef(null),
            { parentAnalyticsLocation: t } = (0, eo.Ay)(),
            n = (0, tu.bG)([tm.A], () => tm.A.hasLayers()),
            i = (0, tC.Et)(),
            r = (0, tu.bG)([tE.A], () => tE.A.getIsAtMaxSaveClipOperations()),
            a = (0, tu.bG)([tp.Ay], () => tp.Ay.getKeybindForAction(w.hCu.SAVE_CLIP));
        if (!i || null == a || n) return null;
        let o = tf.dI(a.shortcut, !0);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tS, { keybindString: o, targetElementRef: e }),
                (0, l.jsx)(tg.A, {
                    ref: e,
                    disabled: r,
                    tooltipText:
                        null != a
                            ? Q.intl.formatToPlainString(Q.t.HIMcv1, { hotkey: tf.dI(a?.shortcut, !0) })
                            : Q.intl.string(Q.t.s52pju),
                    onClick: () => {
                        (0, tx.l0)(), (0, eg.X)(t, eg.O.CLIP);
                    },
                    onContextMenu: tb,
                    icon: tA.x,
                }),
            ],
        });
    };
var tT = n(338771),
    tv = n(212637),
    ty = n(397400),
    tR = n(488803);
let tj = (0, eb.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tL = n(823748),
    tO = n(522055),
    tG = n(576709);
function tM(e) {
    let { title: t, body: n, ctaText: i, runningGameId: s, targetElementRef: r, onClick: a, onClose: o } = e,
        d = (0, h.bG)([tO.A], () => null != s && tO.A.getGlobalCatalogGame(s)?.can_market === !0, [s]);
    return (0, l.jsx)(g.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            d && null != s
                ? {
                      type: "dynamic",
                      component: _.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: s },
                      aspectRatio: "6/4",
                  }
                : {
                      type: "image",
                      src: "https://cdn.discordapp.com/assets/content/24bc847e3e4dae2b04997ce7374d99a3d11da678af3c9d7664bbff99ed1bfdb1.svg",
                      aspectRatio: "6/4",
                  },
        actions: [{ text: i, variant: "primary", onClick: a }],
        targetElementRef: r,
        shouldShow: !0,
        position: "top",
        onRequestClose: o,
    });
}
function tD(e) {
    let { gameName: t, ...n } = e;
    return (0, l.jsx)(tM, {
        title: Q.intl.formatToPlainString(tG.default.lKzVNu, { gameName: t }),
        body: Q.intl.string(tG.default.qqjm8O),
        ctaText: Q.intl.string(tG.default["eJg+Zm"]),
        ...n,
    });
}
function tU(e) {
    let { gameName: t, ...n } = e;
    return (0, l.jsx)(tM, {
        title: Q.intl.formatToPlainString(tG.default.lwwiHE, { gameName: t }),
        body: Q.intl.string(tG.default.B33GXN),
        ctaText: Q.intl.string(tG.default["968/QC"]),
        ...n,
    });
}
var tP = n(453774),
    tw = n(44724),
    tk = n(84764),
    tV = n(153488),
    tB = n(610861);
function tH(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === w.$pd.PLAYING &&
              (0, to.A)(t, w.jUm.JOIN))
    );
}
let tF = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: i,
                guildId: r,
                isStreaming: a,
                channel: o,
                canStream: c,
                runningGame: u,
                embeddedActivity: A,
                frame: _,
                activity: m,
                application: p,
                analyticsContext: f,
                inviteButtonRef: E,
                accountLinkButtonRef: x,
                startAuthorization: I,
                canStartAuthorization: b,
                hasAlreadyLinked: S,
                connectionApp: N,
            } = e,
            { parentAnalyticsLocation: T, analyticsLocations: y } = (0, eo.Ay)(),
            R = (0, tP.A)(p?.id),
            j = tH(p, m, A),
            { enabled: L } = tj.useConfig({ location: "activity-panel" }),
            O = (0, tL.Bp)("activity-panel"),
            G = (0, tR.C$)(r ?? void 0, "activity-panel"),
            M = (0, h.bG)([tV.A], () => tV.A.hasConsented(w.YAq.PERSONALIZATION)),
            D = (0, tL.TF)(u?.id, { shouldFetch: O || G }),
            P = L && M && D,
            k = P && O,
            V = P && G,
            B = s.useCallback(() => {
                d()(null != m, "Received null activity"),
                    U.default.track(w.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: u?.id ?? null,
                        application_id: m.application_id,
                    }),
                    (0, eg.X)(T, eg.O.INVITE),
                    U.default.track(w.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: m.application_id,
                        location: f.location,
                    }),
                    (0, C.qf)(m, !1);
            }, [m, f, T, u]),
            H = s.useCallback(
                (e, t) => () => {
                    (0, eg.X)(T, eg.O.LEAVE_ACTIVITY),
                        td.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [T],
            ),
            F = s.useCallback(
                (e) => () => {
                    (0, eg.X)(T, eg.O.LEAVE_ACTIVITY), eE.A.stopFrame({ applicationId: e });
                },
                [T],
            ),
            W = s.useCallback(() => {
                (0, tT.A)(t);
            }, [t]),
            K = s.useCallback(() => {
                (0, te.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("27713"), n.e("45150")]).then(n.bind(n, 301400));
                    return (t) =>
                        (0, l.jsx)(e, {
                            ...t,
                            sourcePID: u?.pid,
                            selectSource: null != e1.A.getVoiceChannelId(),
                            analyticsLocations: y,
                        });
                });
            }, [u, y]),
            Y = p?.name ?? u?.name ?? "",
            z = s.useCallback(() => {
                (0, ty.pK)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                    (0, te.openModalLazy)(async () => {
                        let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                        return (t) => (0, l.jsx)(e, { gameName: Y, gameApplicationId: u?.id, ...t });
                    });
            }, [Y, u?.id]),
            q = s.useCallback(() => {
                d()(null != r, "Received null guildId"),
                    (0, ty.pK)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                    (0, tv.A)({ analyticsLocations: y, analyticsLocation: f.location, guildId: r });
            }, [r, y, f.location, u?.id]),
            X = s.useRef(null),
            [J, Z] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != X.current && clearTimeout(X.current);
            },
            [],
        ),
            s.useEffect(() => {
                S && (Z(!1), null != X.current && (clearTimeout(X.current), (X.current = null)));
            }, [S]);
        let $ = R?.guildId == null || null == p ? null : (0, l.jsx)(tY, { guildId: R.guildId, applicationId: R.id }),
            ee = k
                ? (0, l.jsx)(tK, {
                      tooltipText: Q.intl.formatToPlainString(tG.default.YhnUVO, { gameName: Y }),
                      onClick: z,
                      onViewed: () => (0, ty.ET)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, l.jsx)(tD, {
                              gameName: Y,
                              runningGameId: u?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  z(), n(er.i.TAKE_ACTION), i(er.i.TAKE_ACTION);
                              },
                              onClose: () => n(er.i.USER_DISMISS),
                          });
                      },
                  })
                : V
                  ? (0, l.jsx)(tK, {
                        tooltipText: Q.intl.formatToPlainString(tG.default.lwwiHE, { gameName: Y }),
                        onClick: q,
                        onViewed: () => (0, ty.ET)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, l.jsx)(tU, {
                                gameName: Y,
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
                if ((null == u && null != A && !(0, v.f)()) || (!a && !i)) return null;
                let s = null;
                return (
                    a
                        ? ((e = !1),
                          (t = () => {
                              W(), (0, eg.X)(T, eg.O.STREAM, !1);
                          }),
                          (n = tt.G),
                          (s = Q.intl.string(Q.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                K(), (0, eg.X)(T, eg.O.STREAM, !0);
                            }),
                            (n = tn.F),
                            (s =
                                null != u
                                    ? Q.intl.formatToPlainString(Q.t.AB5gTy, { game: u.name })
                                    : Q.intl.string(Q.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = tn.F),
                            null != o && (0, eK.gV)(o.type) && (s = Q.intl.string(Q.t.uQn9B8))),
                    (0, l.jsx)("div", {
                        className: tB.IF,
                        children: (0, l.jsx)(tg.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                j && null == A
                    ? (0, l.jsx)(tg.A, { ref: E, tooltipText: Q.intl.string(Q.t["hC/Zey"]), onClick: B, icon: ti.D })
                    : null,
            ei =
                null == A
                    ? null
                    : (0, l.jsx)(tg.A, {
                          tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                          onClick: H(A.applicationId, A.location),
                          icon: tl.o,
                      }),
            el =
                null == _
                    ? null
                    : (0, l.jsx)(tg.A, {
                          tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                          onClick: F(_.applicationId),
                          icon: tl.o,
                      }),
            es = null == t ? null : (0, l.jsx)(tN, {}),
            ea =
                !b || S
                    ? null
                    : (0, l.jsx)(tW, {
                          runningGame: u,
                          startAuthorization: () => {
                              I({ analyticsLocations: y }) === eu._M.RPC &&
                                  (Z(!0),
                                  null != X.current && clearTimeout(X.current),
                                  (X.current = setTimeout(() => {
                                      Z(!1);
                                  }, 9e4)));
                          },
                          connectionApp: N,
                          ref: x,
                      }),
            ed =
                !b || S
                    ? null
                    : (0, l.jsx)(g.A, {
                          title: Q.intl.string(Q.t.ULvRFd),
                          body: Q.intl.string(Q.t["HJJDr+"]),
                          targetElementRef: x,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: J,
                          onRequestClose: () => {
                              Z(!1), null != X.current && (clearTimeout(X.current), (X.current = null));
                          },
                      });
        return null == et && null == en && null == ei && null == el && null == ea && null == $ && null == ee
            ? null
            : (0, l.jsxs)("div", { className: tB.o1, children: [$ ?? ea ?? en, ee, et, ei ?? el ?? es, ed] });
    }),
    tW = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: s } = e;
        return (0, l.jsx)(tg.A, {
            ref: t,
            onClick: () => {
                U.default.track(w.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    i();
            },
            icon: e8.A,
            tooltipText: Q.intl.string(Q.t.sbdnpw),
        });
    });
function tK(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: r } = e,
        a = s.useRef(null),
        o = s.useRef(!1);
    s.useEffect(() => {
        o.current || ((o.current = !0), i());
    }, [i]);
    let d = (0, ta.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: u } = (0, O.c9)(),
        [h, _] = (0, ev.kn)(!d && c && u ? [A.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [g, m] = (0, ev.kn)([A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        p = s.useCallback(() => {
            _(er.i.TAKE_ACTION), m(er.i.TAKE_ACTION), n();
        }, [_, m, n]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: tB.IF,
                children: [
                    (0, l.jsx)("div", { className: tB.uD, children: (0, l.jsx)("div", { className: tB.Z9 }) }),
                    (0, l.jsx)(tg.A, { ref: a, tooltipText: t, onClick: p, icon: ts._ }),
                    g === A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, l.jsx)(tc.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != h && r({ targetElementRef: a, markAsDismissed: _, markBadgeAsDismissed: m }),
        ],
    });
}
function tY(e) {
    let { applicationId: t, guildId: n } = e,
        i = s.useRef(null);
    s.useEffect(() => {
        U.default.track(w.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [r, a] = (0, ev.kn)([A.M.GAME_SHOP_RTC_POPOVER], er.m.ACCOUNT_NAME_ZONE, !0),
        o = s.useCallback(() => {
            (0, tw.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, tw.default)({ guildId: n }), a(er.i.USER_DISMISS);
        }, [n, a]),
        c = s.useCallback(() => {
            U.default.track(w.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        u = s.useCallback(() => {
            a(er.i.USER_DISMISS);
        }, [a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tg.A, {
                tooltipText: Q.intl.string(Q.t.vyaWs7),
                onClick: c,
                onMouseDown: o,
                icon: tr.U,
                ref: i,
            }),
            r === A.M.GAME_SHOP_RTC_POPOVER
                ? (0, l.jsx)(tk.A, {
                      onActionClick: d,
                      onRequestClose: u,
                      targetElementRef: i,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        ],
    });
}
var tz = n(428689),
    tq = n(673294);
function tX(e) {
    let { onClick: t } = e;
    return (0, l.jsx)(f.D, {
        className: tq.kL,
        onClick: t,
        children: (0, l.jsx)(k.E, {
            className: tq.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: Q.intl.string(Q.t.jfrLLb),
        }),
    });
}
function tQ(e) {
    let { onClick: t } = e,
        n = G.tz.useSetting(),
        i = (0, h.bG)([D.A], () => D.A.getStatus());
    return __OVERLAY__ || (n && i !== w.clD.INVISIBLE) ? null : (0, l.jsx)(tX, { onClick: t });
}
var tJ = n(409626),
    tZ = n(692969),
    t$ = n(379414);
function t0(e) {
    let { name: t, applicationId: n } = e,
        i = (0, tZ.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: tJ.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, l.jsx)(f.D, {
        onClick: i,
        className: a()(null != i && t$.On),
        children: (0, l.jsx)(e5.A, { className: t$.mO, children: t }),
    });
}
function t1(e) {
    let t,
        n,
        {
            isStreaming: i,
            application: r,
            game: a,
            onClickNotSharing: o,
            isForceShowSharingPopout: d,
            setIsForceShowSharingPopout: c,
            ref: u,
            popoutTargetRef: A,
        } = e,
        _ = null != r ? r.name : null != a ? a.name : Q.intl.string(Q.t["UQMV/E"]);
    return (
        (t = G.tz.useSetting()),
        (n = (0, h.bG)([D.A], () => D.A.getStatus())),
        (0, s.useEffect)(() => {
            U.default.track(w.HAw.RUNNING_GAME_CARD_STATE_CHANGED, {
                show_current_game: t,
                status: n,
                rtc_popout_available: !t || n === w.clD.INVISIBLE,
            });
        }, [t, n]),
        (0, l.jsxs)("div", {
            className: t$.cm,
            children: [
                (0, l.jsxs)("div", {
                    className: t$.f9,
                    children: [
                        (0, l.jsx)(eT.A, { className: t$.Gt, game: r, pid: a?.pid, ref: u }),
                        i ? (0, l.jsx)(tz.n, { size: "md", color: "currentColor", className: t$.it }) : null,
                    ],
                }),
                (0, l.jsx)(ea, {
                    popoutTargetRef: A,
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: c,
                    children: (0, l.jsxs)("div", {
                        className: t$.pq,
                        children: [
                            null != _ ? (0, l.jsx)(t0, { name: _, applicationId: r?.id }) : null,
                            (0, l.jsx)(tQ, { onClick: o }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var t2 = n(5867);
let t6 = new Set(["1443349464290168976", "1443350165678198935"]);
var t9 = n(165610);
let t3 = {
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
var t7 = n(911070),
    t4 = n(490696),
    t5 = n(268920),
    t8 = n(633217);
function ne(e) {
    let t,
        n,
        {
            application: i,
            connectionApp: s,
            isEligibleForIncentivizedAccountLinking: r,
            incentivizedAccountLinkingDisplayedApp: a,
            markRecurringAsDismissed: o,
            startAuthorization: d,
            analyticsLocations: u,
            accountLinkButtonRef: h,
        } = e,
        A = e7.useConfig({ location: "ActivityPanelGameCard" }),
        { defaultBody: m } = ec.A.useConfig({ location: "ActivityPanelGameCard" }),
        p = r ? a : i,
        f = null == p;
    if (
        ((0, ed.A)(
            {
                type: c.ImpressionTypes.POPOUT,
                name: c.ImpressionNames.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
                properties: {
                    application_id: i?.id,
                    parent_application_id: s?.parentId,
                    type: r ? "incentivized" : "default",
                },
            },
            { disableTrack: f },
        ),
        f)
    )
        return null;
    let E = Q.intl.formatToPlainString(A.altTitle ? Q.t.hUbQT2 : Q.t["lo6H6+"], { gameName: p.name }),
        C = Q.intl.string(m ?? (A.altBody ? Q.t["JKqu+4"] : Q.t.qYAzOp)),
        x = Q.intl.string(A.altCta ? Q.t.jynBQ5 : Q.t.lw71Nf);
    r && (x = Q.intl.string(t7.default["2cOIOr"]));
    let I = [
        {
            text: x,
            onClick: () => {
                o(er.i.TAKE_ACTION), d({ analyticsLocations: u });
            },
        },
    ];
    return (
        r &&
            ((t = "beta"),
            (E = Q.intl.formatToPlainString(t7.default.dPuaZE, { applicationName: p.name })),
            (C = Q.intl.string(t7.default.jR3bbS)),
            (n = {
                text: Q.intl.string(Q.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, l.jsx)(g.A, {
            size: r ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: _.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                props: { application: p, isIncentivizedAccountLinking: r },
            },
            badge: t,
            title: E,
            body: C,
            textLink: n,
            targetElementRef: h,
            align: "right",
            shouldShow: !0,
            gradientColor: "purple",
            onRequestClose: () => o(er.i.USER_DISMISS),
            caretConfig: { align: "end" },
            actions: I,
        })
    );
}
function nt(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: s } = e,
        r = Q.intl.string(Q.t.MxAlrB),
        a = Q.intl.string(Q.t["/UTTEg"]),
        o = [
            {
                text: Q.intl.string(Q.t.aRIFWD),
                onClick: () => {
                    i(er.i.TAKE_ACTION), window.open(e9.A.getArticleURL(w.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((r = Q.intl.string(t7.default.ublzTG)),
            (a = Q.intl.string(t7.default.JgM2xu)),
            (t = { type: "video", src: t8.A, fallbackImageSrc: t5.A, aspectRatio: "2/1", loop: !0 })),
        (0, l.jsx)(g.A, {
            graphic: t,
            title: r,
            body: a,
            targetElementRef: s,
            position: "top",
            align: "left",
            caretConfig: { align: "start" },
            actions: o,
            shouldShow: !0,
            onRequestClose: () => i(er.i.USER_DISMISS),
        })
    );
}
function nn(e) {
    let {
            application: t,
            connectionApp: n,
            activity: i,
            embeddedActivity: r,
            runningGame: a,
            hasAlreadyLinked: o,
            didStartAuthorization: c,
            canStartAuthorization: u,
            startAuthorization: _,
            accountLinkUpsellTargetRef: m,
            inviteButtonRef: p,
            accountLinkButtonRef: f,
            gameCommunityGuildId: x,
            parentAnalyticsLocation: I,
            analyticsLocations: b,
            analyticsContext: S,
        } = e,
        { isQuestBarEmpty: N, hasLoadedQuestBar: T } = (0, O.c9)(),
        v = !T || !N,
        y = tH(t, i, r),
        R = [],
        { isEligible: L, displayedApp: G } = (function (e) {
            let { connectionApp: t } = e,
                { enabled: n } = ec.A.useConfig({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, eh.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && t6.has(t.id), displayedApp: i };
        })({ connectionApp: n }),
        M = !1;
    v ||
        (o && c
            ? y && null == r
                ? R.push(A.M.ACCOUNT_LINK_INVITE_FRIENDS)
                : R.push(A.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER)
            : !o && u && null != t && (M = !0),
        null != x && a?.id != null && a?.name != null && R.push(A.M.JOIN_GAME_COMMUNITY_RTC_CTA));
    let { shouldShow: D, markAsDismissed: P } = (function (e) {
            let {
                    application: t,
                    disabled: n = !1,
                    dismissibleContent: i,
                    dismissibleContentGroupName: l,
                    bypassAutoDismiss: r = !1,
                } = e,
                a = (0, h.bG)([eL], () => (null != t ? eL.getGameUpsellDismissal(t.id, i) : null)),
                [o, d] = (0, s.useState)(!1);
            (0, s.useEffect)(() => {
                let e = null != a ? a.dismissedAt + Math.min(864e5 * Math.pow(2, a.timesDismissed - 1), 24192e5) : 0,
                    t = 0,
                    n = () => {
                        d(Date.now() >= e);
                        let i = Math.min(e - Date.now(), w.mnr);
                        i > 0 && (t = setTimeout(n, i));
                    };
                return n(), () => clearTimeout(t);
            }, [a]);
            let c = !n && null != t && o,
                [u, A] = (0, ev.Wl)(c ? i : null, { cooldownDurationMs: 864e5 }, l, r);
            return {
                shouldShow: u === i,
                markAsDismissed: (e) => {
                    if (null != t) {
                        var n;
                        (n = t.id),
                            E.h.dispatch({
                                type: "GAME_UPSELL_DISMISS",
                                applicationId: n,
                                dismissedAt: Date.now(),
                                dismissibleContent: i,
                            }),
                            A(e);
                    }
                },
            };
        })({
            application: t,
            disabled: !M,
            dismissibleContent: A.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
            dismissibleContentGroupName: er.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        }),
        { rewarded: k } = (function (e) {
            let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: l } = e,
                [r, a] = s.useState(!1);
            return (
                s.useEffect(() => {
                    if (!t || !n || !i || r || null == l) return;
                    let e = !1;
                    return (
                        (0, ew.RI)({
                            applicationId: l.id,
                            onSuccess: () => {
                                e || a(!0);
                            },
                            onError: () => {},
                        }),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, i, r, l]),
                { rewarded: r }
            );
        })({ isEligible: L, hasAlreadyLinked: o, didStartAuthorization: c, application: n });
    return v
        ? null
        : (0, l.jsx)(j.Ay, {
              contentTypes: R,
              groupName: er.m.ACCOUNT_NAME_ZONE,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: r } = e;
                  return s === A.M.ACCOUNT_LINK_INVITE_FRIENDS
                      ? (0, l.jsx)(g.A, {
                            title: Q.intl.string(Q.t["0l2pEt"]),
                            body: Q.intl.string(Q.t["DSZUK/"]),
                            targetElementRef: p,
                            align: "right",
                            shouldShow: !0,
                            onRequestClose: () => r(er.i.USER_DISMISS),
                            caretConfig: { align: "end" },
                            actions: [
                                {
                                    text: Q.intl.string(Q.t.YdkBCH),
                                    onClick: () => {
                                        r(er.i.TAKE_ACTION),
                                            d()(null != i, "Received null activity"),
                                            U.default.track(w.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                                                action_type: "invite_to_game",
                                                game_id: a?.id ?? null,
                                                application_id: i.application_id,
                                            }),
                                            (0, eg.X)(I, eg.O.INVITE),
                                            U.default.track(w.HAw.OPEN_MODAL, {
                                                type: "Send Join Invite",
                                                application_id: i.application_id,
                                                location: S.location,
                                            }),
                                            (0, C.qf)(i, !1);
                                    },
                                },
                            ],
                        })
                      : s === A.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER
                        ? (0, l.jsx)(nt, {
                              incentivizedAccountLinkingRewarded: k,
                              markAsDismissed: r,
                              accountLinkUpsellTargetRef: m,
                          })
                        : D
                          ? (0, l.jsx)(ne, {
                                application: t,
                                connectionApp: n,
                                isEligibleForIncentivizedAccountLinking: L,
                                incentivizedAccountLinkingDisplayedApp: G,
                                markRecurringAsDismissed: P,
                                startAuthorization: _,
                                analyticsLocations: b,
                                accountLinkButtonRef: f,
                            })
                          : s === A.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != x && a?.id != null && a?.name != null
                            ? (0, l.jsx)(eI, {
                                  targetElementRef: m,
                                  gameId: a.id,
                                  gameName: a.name,
                                  gameCommunityGuildId: x,
                                  markAsDismissed: r,
                              })
                            : void 0;
              },
          });
}
let ni = (0, b.A)(function (e) {
    let { message: t } = e;
    return (0, l.jsx)(e4.A, { children: t });
});
class nl extends s.PureComponent {
    activityPopoutTargetRef = s.createRef();
    accountLinkUpsellTargetRef = s.createRef();
    inviteButtonRef = s.createRef();
    renderSparkles() {
        let { useReducedMotion: e } = this.props;
        async function t() {
            let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
            return e;
        }
        return (0, l.jsx)("div", {
            className: t4.YX,
            children: (0, l.jsx)(m.a, { importData: t, shouldAnimate: !e, className: t4._7 }),
        });
    }
    renderActions() {
        return (0, l.jsx)(tF, { ...this.props, inviteButtonRef: this.inviteButtonRef });
    }
    renderDismissiblePopovers() {
        let {
            application: e,
            activity: t,
            embeddedActivity: n,
            runningGame: i,
            hasAlreadyLinked: s,
            didStartAuthorization: r,
            canStartAuthorization: a,
            startAuthorization: o,
            accountLinkButtonRef: d,
            parentAnalyticsLocation: c,
            analyticsLocations: u,
            gameCommunityGuildId: h,
            analyticsContext: A,
            connectionApp: _,
        } = this.props;
        return (0, l.jsx)(nn, {
            application: e,
            connectionApp: _,
            activity: t,
            embeddedActivity: n,
            runningGame: i,
            hasAlreadyLinked: s,
            didStartAuthorization: r,
            canStartAuthorization: a,
            startAuthorization: o,
            accountLinkUpsellTargetRef: this.accountLinkUpsellTargetRef,
            inviteButtonRef: this.inviteButtonRef,
            accountLinkButtonRef: d,
            gameCommunityGuildId: h,
            activityPopoutTargetRef: this.activityPopoutTargetRef,
            parentAnalyticsLocation: c,
            analyticsLocations: u,
            analyticsContext: A,
        });
    }
    renderGame() {
        let {
            isStreaming: e,
            application: t,
            runningGame: n,
            isForceShowSharingPopout: i,
            setIsForceShowSharingPopout: s,
        } = this.props;
        return (0, l.jsx)(t1, {
            isStreaming: e,
            application: t,
            game: n,
            onClickNotSharing: () => s(!0),
            isForceShowSharingPopout: i,
            setIsForceShowSharingPopout: s,
            ref: this.accountLinkUpsellTargetRef,
            popoutTargetRef: this.activityPopoutTargetRef,
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: i, sanitizedTitle: s } = (0, eM.A)(t);
        return (0, l.jsxs)("div", {
            className: t4.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, l.jsx)(eD.A, { title: s, icon: t?.sourceIcon })
                    : (0, l.jsx)(ep.Ay, { look: ep.Ay.Looks.GRAY, size: ep.Ay.Sizes.SMALL, className: t4.Ok }),
                (0, l.jsxs)("div", {
                    className: t4.pq,
                    children: [
                        (0, l.jsx)(e5.A, { children: i }),
                        null != n &&
                            (0, l.jsxs)("div", {
                                className: t4.qi,
                                children: [
                                    (0, l.jsx)(p.t, { size: "xxs", color: ef.k0.PREMIUM_TIER_2 }),
                                    (0, l.jsx)(eW, { className: t4.s, variant: "text-xxs/semibold", children: n }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    handleApplicationLinkClick = () => {
        let { isActivityPopoutOpen: e } = this.props;
        this.handleChannelLinkClick(), e && E.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
    };
    handleChannelLinkClick = () => {
        let { channel: e, embeddedActivity: t, isActivityPopoutOpen: n } = this.props;
        d()(null != t, "Activity cannot be null during navigation click"),
            d()(null != e, "Channel cannot be null during navigation click"),
            I.A.channelListScrollTo(e.guild_id ?? w.ME, e.id),
            !n &&
                ((0, eK.gV)(e.type) &&
                    x.A.selectParticipant(
                        e.id,
                        (0, e_.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, eK.pQ)(e.type) && (0, y.gk)(t2.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (d()(null != e, "Frame cannot be null during navigation click"), t)
            ? E.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : eE.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: t9.y.FOCUSED });
    };
    renderEmbeddedActivity() {
        let e,
            {
                application: t,
                embeddedActivity: n,
                channel: i,
                channelName: s,
                guildForConnectedChannel: r,
                isForceShowSharingPopout: a,
                setIsForceShowSharingPopout: o,
            } = this.props;
        if (null == n || null == t) return null;
        let d = { start: n.connectedSince },
            c = s;
        null != r && null != i
            ? ((e = w.BVt.CHANNEL(r.id, i.id)), (c = `${c} / ${r.name}`))
            : null != i && (e = w.BVt.CHANNEL(w.ME, i.id));
        let u = (0, l.jsx)(eP.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, l.jsx)(e4.A, { className: t4.Ix, children: c }),
            }),
            h = (0, l.jsx)(eP.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, l.jsx)(e5.A, { className: t4._W, children: t.name }),
            }),
            A = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(eT.A, {
                        className: t4.Gt,
                        game: t,
                        size: eT.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, l.jsx)(ea, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: o,
                        children: (0, l.jsxs)("div", {
                            className: t4.pq,
                            children: [h, null != i && (0, eK.pQ)(i.type) ? u : (0, l.jsx)(ni, { timestamps: d })],
                        }),
                    }),
                ],
            });
        return (0, l.jsx)("div", { className: t4.cm, children: A });
    }
    renderFrame() {
        let { application: e, frame: t } = this.props;
        if (null == t || null == e) return null;
        let n = { start: t.connectedSince },
            i = (0, l.jsx)(f.D, {
                onClick: this.handleFrameLinkClick,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                className: t4.rB,
                children: (0, l.jsx)(e5.A, { className: t4._W, children: e.name }),
            }),
            s = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(eT.A, {
                        className: t4.Gt,
                        game: e,
                        size: eT.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, l.jsxs)("div", { className: t4.pq, children: [i, (0, l.jsx)(ni, { timestamps: n })] }),
                ],
            });
        return (0, l.jsx)("div", { className: t4.cm, children: s });
    }
    render() {
        let {
            canGoLive: e,
            embeddedActivity: t,
            frame: n,
            runningGame: i,
            debugRunningGame: s,
            isStreaming: r,
            streamMetadata: o,
            application: d,
            activity: c,
            className: u,
        } = this.props;
        if (
            !r &&
            ((!tH(d, c, t) &&
                !(function (e) {
                    let { application: t, frame: n } = e;
                    return null != t && null != n && n.applicationId === t.id;
                })({ application: d, frame: n }) &&
                !e &&
                null == s) ||
                (null == i && null == t && null == n))
        )
            return null;
        let h = () =>
            null == i || (r && o?.pid == null)
                ? null != t
                    ? this.renderEmbeddedActivity()
                    : null != n
                      ? this.renderFrame()
                      : this.renderScreenshare()
                : this.renderGame();
        return (0, l.jsx)("div", {
            className: a()(t4.nd, u),
            ref: this.activityPopoutTargetRef,
            children: (0, l.jsxs)("div", {
                className: t4.rf,
                children: [h(), this.renderActions(), this.renderDismissiblePopovers()],
            }),
        });
    }
}
let ns = (0, S.A)(function (e) {
    let { guildId: t, ...n } = e,
        i = (0, h.bG)([ez.default], () => ez.default.getId()),
        r = (0, h.bG)([eN.Ay, e6.A], () => (0, eU.A)(eN.Ay, e6.A)),
        a = (0, h.bG)([eN.Ay], () => eN.Ay.getDebugRunningGame()),
        o = (0, h.bG)([e1.A, eq.A], () => eq.A.getChannel(e1.A.getVoiceChannelId())),
        d = (0, h.bG)([R.Ay], () => R.Ay.getConnectedActivityChannelId()),
        c = (0, h.bG)([eq.A], () => eq.A.getChannel(d)),
        A = (0, h.bG)([eQ.A], () => eQ.A.getGuild(c?.guild_id)),
        [_, g] = (0, h.yK)([eY.A], () => [eY.A.getCurrentUserActiveStream(), eY.A.getStreamerActiveStreamMetadata()]),
        m = (0, h.bG)([T.A], () => T.A.useReducedMotion),
        p = (0, h.bG)([R.Ay], () => R.Ay.getCurrentEmbeddedActivity()),
        f = (0, h.bG)([eC.A], () => eC.A.getConnectedFrame()),
        E = (0, h.bG)([eQ.A, eZ.A], () => null == o || eO.vz(o, eQ.A, eZ.A, !1)),
        [C] = (0, eA.A)([
            (null != g && null != g.id
                ? g.id
                : null != r && null != r.id
                  ? r.id
                  : null != p
                    ? p.applicationId
                    : null != f
                      ? f.applicationId
                      : void 0) ?? "",
        ]),
        x =
            ((0, h.bG)([R.Ay], () => R.Ay.getCurrentEmbeddedActivity()),
            (0, h.bG)([eJ.Ay], () => (0, eG.A)(eJ.Ay) && (0, e3.isWindows)())),
        I = (0, h.bG)([e$.A], () => (null != i ? e$.A.findActivity(i, (e) => e.type === w.$pd.PLAYING) : null)),
        b = null != _ && _.ownerId === i && _.state !== w.XYD.ENDED,
        S = (0, h.bG)([e2.default, e0.A], () => (null != c ? (0, em.m1)(c, e2.default, e0.A) : void 0)),
        v = (function () {
            let { resolution: e, fps: t } = (0, h.cf)([eV.A], () => eV.A.getState());
            if (e !== eH.on.RESOLUTION_720 || t === eH.kn.FPS_60) return `${(0, eH.zr)(e)} ${(0, eB.Bs)(t)}`;
        })(),
        [y, j] = s.useState(!1),
        L = (0, h.bG)([ek.A], () => ek.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: O, analyticsLocations: G } = (0, eo.Ay)(),
        {
            hasAlreadyLinked: M,
            canStartAuthorization: D,
            connectionApp: P,
            startAuthorization: k,
        } = (0, eu.RD)(C, { allowedFlows: [eu._M.RPC, eu._M.WEB] }),
        [V, B] = s.useState(!1),
        H = (0, N.A)(C?.id);
    s.useEffect(() => {
        H !== C?.id && B(!1);
    }, [C, H, B]);
    let F = (0, u.K)((e) => {
            e &&
                null != P &&
                U.default.track(w.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: r?.id ?? null, application_id: P.id });
        }),
        { enabled: W } = eS.useConfig({ location: "ActivityPanelGameCard" }),
        K = s.useMemo(() => (r?.id != null ? t3[r.id] : void 0), [r?.id]),
        Y = (0, h.bG)([eX.A], () => null != K && eX.A.isMember(K), [K]),
        z = W && null != K && !Y ? K : void 0;
    return (0, l.jsx)(nl, {
        ...n,
        guildId: t,
        canGoLive: x || !1,
        activity: I,
        embeddedActivity: p,
        frame: f,
        userId: i,
        runningGame: r,
        debugRunningGame: a,
        application: C,
        useReducedMotion: m,
        isStreaming: b,
        channel: c,
        canStream: E,
        stream: _,
        streamMetadata: g,
        channelName: S,
        guildForConnectedChannel: A,
        streamQualityIndicator: v,
        isForceShowSharingPopout: y,
        setIsForceShowSharingPopout: j,
        isActivityPopoutOpen: L,
        hasAlreadyLinked: M,
        parentAnalyticsLocation: O,
        analyticsLocations: G,
        canStartAuthorization: D,
        accountLinkButtonRef: F,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return B(!0), k(...t);
        },
        didStartAuthorization: V,
        connectionApp: P,
        gameCommunityGuildId: z,
    });
});
