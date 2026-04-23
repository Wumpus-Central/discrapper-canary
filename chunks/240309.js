n.d(t, { A: () => nu }), n(321073);
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
    g = n(116833),
    _ = n(43105),
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
                (0, l.jsx)(_.A, {
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
    let {
            children: t,
            isForceShowSharingPopout: n,
            setIsForceShowSharingPopout: i,
            popoutTargetRef: r,
            hidePopout: a = !1,
        } = e,
        o = (function (e) {
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
    let d = n || a ? [] : [A.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, l.jsx)(j.Ay, {
        contentTypes: d,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e,
                d = s === A.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, l.jsx)(es, {
                showPopout: d,
                popoutState: o,
                handleClose: () => {
                    a(er.i.USER_DISMISS), i(!1);
                },
                popoutTargetRef: r,
                children: t,
            });
        },
    });
};
var eo = n(688810),
    ed = n(139286),
    ec = n(945810),
    eu = n(927813);
let eh = (0, ec.mj)({
    name: "2026-04-game-account-linking-post-game-close",
    kind: "user",
    defaultConfig: { allowAccountLinkingUpsellPostGameClose: !1, timeToShowUpsellPostGameCloseMs: 0 },
    variations: {
        0: { allowAccountLinkingUpsellPostGameClose: !1, timeToShowUpsellPostGameCloseMs: 0 },
        1: { allowAccountLinkingUpsellPostGameClose: !0, timeToShowUpsellPostGameCloseMs: 5 * eu.A.Millis.MINUTE },
    },
});
var eA = n(941314),
    eg = n(46225),
    e_ = n(627363),
    em = n(429913),
    ep = n(568598),
    ef = n(384059),
    eE = n(47167),
    eC = n(402216),
    ex = n(404374),
    eI = n(932001),
    eb = n(625180),
    eS = n(91242),
    eN = n(686956);
function eT(e) {
    let { targetElementRef: t, gameId: n, gameName: i, gameCommunityGuildId: r, markAsDismissed: a } = e,
        { analyticsLocations: o } = (0, eo.Ay)();
    return (
        s.useEffect(() => {
            U.default.track(w.HAw.GAME_COMMUNITY_UPSELL_VIEWED, { location_stack: o, application_id: n, guild_id: r });
        }, [n, r, o]),
        (0, l.jsx)(_.A, {
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
                            eN.A.joinGuild(r, { source: w.Q4z.ACTIVITY_PANEL_GAME_COMMUNITY_UPSELL });
                    },
                },
            ],
        })
    );
}
let ev = (0, ec.mj)({
    name: "2026-02-join-game-community-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ey = n(328153);
let eR = ey.Ay.getRunningGames(),
    ej = [];
class eL extends h.Ay.Store {
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
let eO = new eL(E.h, {});
var eG = n(137177);
let eM = { gameUpsellsDismissal: {} },
    eD = { ...eM };
class eU extends h.Ay.PersistedStore {
    static displayName = "GameUpsellStore";
    static persistKey = "GameUpsellStore";
    initialize(e) {
        eD = e ?? eD;
    }
    getState() {
        return eD;
    }
    getGameUpsellDismissal(e, t) {
        return eD.gameUpsellsDismissal[t]?.[e] ?? null;
    }
}
let eP = new eU(E.h, {
    LOGOUT: function () {
        eD = { ...eM };
    },
    GAME_UPSELL_DISMISS: function (e) {
        let { applicationId: t, dismissedAt: n, dismissibleContent: i } = e,
            l = eD.gameUpsellsDismissal[i]?.[t],
            s = null != l ? l.timesDismissed + 1 : 1;
        eD = {
            gameUpsellsDismissal: {
                ...eD.gameUpsellsDismissal,
                [i]: { ...eD.gameUpsellsDismissal[i], [t]: { dismissedAt: n, timesDismissed: s } },
            },
        };
    },
});
var ew = n(279250),
    ek = n(880144),
    eV = n(277680),
    eB = n(118277),
    eH = n(905552),
    eF = n(95035),
    eW = n(716965),
    eK = n(567249),
    eY = n(929921),
    ez = n(650338),
    eq = n(753070),
    eX = n(194368);
function eQ(e) {
    let { className: t, color: n, ...i } = e;
    return (0, l.jsx)(k.E, { className: a()({ [eX.Q]: null == n }, t), color: n, ...i });
}
var eJ = n(95701),
    eZ = n(616356),
    e$ = n(495544),
    e0 = n(734057),
    e1 = n(184989),
    e2 = n(71393),
    e6 = n(969341),
    e9 = n(576705),
    e3 = n(290863),
    e7 = n(994500),
    e4 = n(309010),
    e5 = n(287809),
    e8 = n(157257),
    te = n(975571),
    tt = n(723702);
let tn = (0, ec.mj)({
    name: "2025-11-rtc-panel-entry-point-new-copy",
    kind: "user",
    defaultConfig: { altTitle: !1, altBody: !1, altCta: !1 },
    variations: { 0: { altTitle: !1, altBody: !1, altCta: !1 }, 1: { altTitle: !0, altBody: !1, altCta: !0 } },
});
var ti = n(994314),
    tl = n(485599),
    ts = n(141628),
    tr = n(192308),
    ta = n(959988),
    to = n(183623),
    td = n(241541),
    tc = n(70688),
    tu = n(687966),
    th = n(34188),
    tA = n(942857),
    tg = n(833349),
    t_ = n(869003),
    tm = n(521588),
    tp = n(702841),
    tf = n(475358),
    tE = n(176781),
    tC = n(442433),
    tx = n(42473),
    tI = n(186111),
    tb = n(532624),
    tS = n(350535),
    tN = n(274372),
    tT = n(572164),
    tv = n(399925),
    ty = n(646693);
function tR(e) {
    (0, tC.L3)(e, async () => {
        let { default: e } = await n.e("40638").then(n.bind(n, 562733));
        return (t) => (0, l.jsx)(e, { ...t });
    });
}
let tj = (e) => {
        let { keybindString: t, targetElementRef: n } = e,
            [i, r] = s.useState(!1),
            a = s.useCallback(() => r(!1), []);
        return (0, l.jsx)(_.A, {
            shouldShow: i,
            targetElementRef: n,
            position: "top",
            title: Q.intl.format(Q.t["o+srEw"], {
                keybind: t,
                keybindHook: () =>
                    (0, l.jsx)("span", {
                        className: ty.E,
                        children: (0, l.jsx)(tf.e, { className: ty.d, shortcut: t }),
                    }),
            }),
            body: Q.intl.format(Q.t.DWeRm1, { keybindHook: () => t, keybind: t }),
            graphic: { type: "image", src: "/assets/451ad77ebce44152.svg" },
            caretConfig: { align: "center" },
            onRequestClose: a,
        });
    },
    tL = () => {
        let e = s.useRef(null),
            { parentAnalyticsLocation: t } = (0, eo.Ay)(),
            n = (0, tp.bG)([tI.A], () => tI.A.hasLayers()),
            i = (0, tT.Et)(),
            r = (0, tp.bG)([tN.A], () => tN.A.getIsAtMaxSaveClipOperations()),
            a = (0, tp.bG)([tb.Ay], () => tb.Ay.getKeybindForAction(w.hCu.SAVE_CLIP));
        if (!i || null == a || n) return null;
        let o = tS.dI(a.shortcut, !0);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tj, { keybindString: o, targetElementRef: e }),
                (0, l.jsx)(tx.A, {
                    ref: e,
                    disabled: r,
                    tooltipText:
                        null != a
                            ? Q.intl.formatToPlainString(Q.t.HIMcv1, { hotkey: tS.dI(a?.shortcut, !0) })
                            : Q.intl.string(Q.t.s52pju),
                    onClick: () => {
                        (0, tv.l0)(), (0, ef.X)(t, ef.O.CLIP);
                    },
                    onContextMenu: tR,
                    icon: tE.x,
                }),
            ],
        });
    };
var tO = n(338771),
    tG = n(212637),
    tM = n(397400),
    tD = n(488803);
let tU = (0, ec.mj)({
    name: "2026-02-gsh-game-detection-upsell",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tP = n(823748),
    tw = n(522055),
    tk = n(576709);
function tV(e) {
    let { title: t, body: n, ctaText: i, runningGameId: s, targetElementRef: r, onClick: a, onClose: o } = e,
        d = (0, h.bG)([tw.A], () => null != s && tw.A.getGlobalCatalogGame(s)?.can_market === !0, [s]);
    return (0, l.jsx)(_.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            d && null != s
                ? {
                      type: "dynamic",
                      component: g.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
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
function tB(e) {
    let { gameName: t, ...n } = e;
    return (0, l.jsx)(tV, {
        title: Q.intl.formatToPlainString(tk.default.lKzVNu, { gameName: t }),
        body: Q.intl.string(tk.default.qqjm8O),
        ctaText: Q.intl.string(tk.default["eJg+Zm"]),
        ...n,
    });
}
function tH(e) {
    let { gameName: t, ...n } = e;
    return (0, l.jsx)(tV, {
        title: Q.intl.formatToPlainString(tk.default.lwwiHE, { gameName: t }),
        body: Q.intl.string(tk.default.B33GXN),
        ctaText: Q.intl.string(tk.default["968/QC"]),
        ...n,
    });
}
var tF = n(453774),
    tW = n(44724),
    tK = n(84764),
    tY = n(153488),
    tz = n(610861);
function tq(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === w.$pd.PLAYING &&
              (0, tg.A)(t, w.jUm.JOIN))
    );
}
let tX = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: i,
                guildId: r,
                isStreaming: a,
                channel: o,
                canStream: c,
                runningGame: u,
                embeddedActivity: A,
                frame: g,
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
            R = (0, tF.A)(p?.id),
            j = tq(p, m, A),
            { enabled: L } = tU.useConfig({ location: "activity-panel" }),
            O = (0, tP.Bp)("activity-panel"),
            G = (0, tD.C$)(r ?? void 0, "activity-panel"),
            M = (0, h.bG)([tY.A], () => tY.A.hasConsented(w.YAq.PERSONALIZATION)),
            D = (0, tP.TF)(u?.id, { shouldFetch: O || G }),
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
                    (0, ef.X)(T, ef.O.INVITE),
                    U.default.track(w.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: m.application_id,
                        location: f.location,
                    }),
                    (0, C.qf)(m, !1);
            }, [m, f, T, u]),
            H = s.useCallback(
                (e, t) => () => {
                    (0, ef.X)(T, ef.O.LEAVE_ACTIVITY),
                        t_.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [T],
            ),
            F = s.useCallback(
                (e) => () => {
                    (0, ef.X)(T, ef.O.LEAVE_ACTIVITY), eb.A.stopFrame({ applicationId: e });
                },
                [T],
            ),
            W = s.useCallback(() => {
                (0, tO.A)(t);
            }, [t]),
            K = s.useCallback(() => {
                (0, tr.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("27713"), n.e("45150")]).then(n.bind(n, 301400));
                    return (t) =>
                        (0, l.jsx)(e, {
                            ...t,
                            sourcePID: u?.pid,
                            selectSource: null != e4.A.getVoiceChannelId(),
                            analyticsLocations: y,
                        });
                });
            }, [u, y]),
            Y = p?.name ?? u?.name ?? "",
            z = s.useCallback(() => {
                (0, tM.pK)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                    (0, tr.openModalLazy)(async () => {
                        let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                        return (t) => (0, l.jsx)(e, { gameName: Y, gameApplicationId: u?.id, ...t });
                    });
            }, [Y, u?.id]),
            q = s.useCallback(() => {
                d()(null != r, "Received null guildId"),
                    (0, tM.pK)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                    (0, tG.A)({ analyticsLocations: y, analyticsLocation: f.location, guildId: r });
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
        let $ = R?.guildId == null || null == p ? null : (0, l.jsx)(tZ, { guildId: R.guildId, applicationId: R.id }),
            ee = k
                ? (0, l.jsx)(tJ, {
                      tooltipText: Q.intl.formatToPlainString(tk.default.YhnUVO, { gameName: Y }),
                      onClick: z,
                      onViewed: () => (0, tM.ET)({ gameApplicationId: u?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                          return (0, l.jsx)(tB, {
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
                  ? (0, l.jsx)(tJ, {
                        tooltipText: Q.intl.formatToPlainString(tk.default.lwwiHE, { gameName: Y }),
                        onClick: q,
                        onViewed: () => (0, tM.ET)({ gameApplicationId: u?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: i } = e;
                            return (0, l.jsx)(tH, {
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
                              W(), (0, ef.X)(T, ef.O.STREAM, !1);
                          }),
                          (n = ta.G),
                          (s = Q.intl.string(Q.t.S5anIc)))
                        : c
                          ? ((e = !1),
                            (t = () => {
                                K(), (0, ef.X)(T, ef.O.STREAM, !0);
                            }),
                            (n = to.F),
                            (s =
                                null != u
                                    ? Q.intl.formatToPlainString(Q.t.AB5gTy, { game: u.name })
                                    : Q.intl.string(Q.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = to.F),
                            null != o && (0, eJ.gV)(o.type) && (s = Q.intl.string(Q.t.uQn9B8))),
                    (0, l.jsx)("div", {
                        className: tz.IF,
                        children: (0, l.jsx)(tx.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            en =
                j && null == A
                    ? (0, l.jsx)(tx.A, { ref: E, tooltipText: Q.intl.string(Q.t["hC/Zey"]), onClick: B, icon: td.D })
                    : null,
            ei =
                null == A
                    ? null
                    : (0, l.jsx)(tx.A, {
                          tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                          onClick: H(A.applicationId, A.location),
                          icon: tc.o,
                      }),
            el =
                null == g
                    ? null
                    : (0, l.jsx)(tx.A, {
                          tooltipText: Q.intl.string(Q.t["R/FK4A"]),
                          onClick: F(g.applicationId),
                          icon: tc.o,
                      }),
            es = null == t ? null : (0, l.jsx)(tL, {}),
            ea =
                !b || S
                    ? null
                    : (0, l.jsx)(tQ, {
                          runningGame: u,
                          startAuthorization: () => {
                              I({ analyticsLocations: y }) === eg._M.RPC &&
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
                    : (0, l.jsx)(_.A, {
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
            : (0, l.jsxs)("div", { className: tz.o1, children: [$ ?? ea ?? en, ee, et, ei ?? el ?? es, ed] });
    }),
    tQ = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: s } = e;
        return (0, l.jsx)(tx.A, {
            ref: t,
            onClick: () => {
                U.default.track(w.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    i();
            },
            icon: ts.A,
            tooltipText: Q.intl.string(Q.t.sbdnpw),
        });
    });
function tJ(e) {
    let { tooltipText: t, onClick: n, onViewed: i, renderCoachmark: r } = e,
        a = s.useRef(null),
        o = s.useRef(!1);
    s.useEffect(() => {
        o.current || ((o.current = !0), i());
    }, [i]);
    let d = (0, tA.A)(),
        { isQuestBarEmpty: c, hasLoadedQuestBar: u } = (0, O.c9)(),
        [h, g] = (0, eI.kn)(!d && c && u ? [A.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [_, m] = (0, eI.kn)([A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        p = s.useCallback(() => {
            g(er.i.TAKE_ACTION), m(er.i.TAKE_ACTION), n();
        }, [g, m, n]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: tz.IF,
                children: [
                    (0, l.jsx)("div", { className: tz.uD, children: (0, l.jsx)("div", { className: tz.Z9 }) }),
                    (0, l.jsx)(tx.A, { ref: a, tooltipText: t, onClick: p, icon: tu._ }),
                    _ === A.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, l.jsx)(tm.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != h && r({ targetElementRef: a, markAsDismissed: g, markBadgeAsDismissed: m }),
        ],
    });
}
function tZ(e) {
    let { applicationId: t, guildId: n } = e,
        i = s.useRef(null);
    s.useEffect(() => {
        U.default.track(w.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [r, a] = (0, eI.kn)([A.M.GAME_SHOP_RTC_POPOVER], er.m.ACCOUNT_NAME_ZONE, !0),
        o = s.useCallback(() => {
            (0, tW.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, tW.default)({ guildId: n }), a(er.i.USER_DISMISS);
        }, [n, a]),
        c = s.useCallback(() => {
            U.default.track(w.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        u = s.useCallback(() => {
            a(er.i.USER_DISMISS);
        }, [a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tx.A, {
                tooltipText: Q.intl.string(Q.t.vyaWs7),
                onClick: c,
                onMouseDown: o,
                icon: th.U,
                ref: i,
            }),
            r === A.M.GAME_SHOP_RTC_POPOVER
                ? (0, l.jsx)(tK.A, {
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
var t$ = n(428689),
    t0 = n(673294);
function t1(e) {
    let { onClick: t } = e;
    return (0, l.jsx)(f.D, {
        className: t0.kL,
        onClick: t,
        children: (0, l.jsx)(k.E, {
            className: t0.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: Q.intl.string(Q.t.jfrLLb),
        }),
    });
}
function t2(e) {
    let { onClick: t } = e,
        n = G.tz.useSetting(),
        i = (0, h.bG)([D.A], () => D.A.getStatus());
    return __OVERLAY__ || (n && i !== w.clD.INVISIBLE) ? null : (0, l.jsx)(t1, { onClick: t });
}
var t6 = n(409626),
    t9 = n(692969),
    t3 = n(379414);
function t7(e) {
    let { name: t, applicationId: n } = e,
        i = (0, t9.A)({
            location: "ActivityPanelGameCard",
            applicationId: n,
            source: t6.Ob.RtcPanel,
            trackEntryPointImpression: !0,
        });
    return (0, l.jsx)(f.D, {
        onClick: i,
        className: a()(null != i && t3.On),
        children: (0, l.jsx)(tl.A, { className: t3.mO, children: t }),
    });
}
function t4(e) {
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
            isCurrentlyRunningGame: g,
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
            className: t3.cm,
            children: [
                (0, l.jsxs)("div", {
                    className: t3.f9,
                    children: [
                        (0, l.jsx)(eG.A, { className: t3.Gt, game: r, pid: a?.pid, ref: u }),
                        i ? (0, l.jsx)(t$.n, { size: "md", color: "currentColor", className: t3.it }) : null,
                    ],
                }),
                (0, l.jsx)(ea, {
                    popoutTargetRef: A,
                    isForceShowSharingPopout: d,
                    setIsForceShowSharingPopout: c,
                    hidePopout: !g,
                    children: (0, l.jsxs)("div", {
                        className: t3.pq,
                        children: [
                            null != _ ? (0, l.jsx)(t7, { name: _, applicationId: r?.id }) : null,
                            g
                                ? (0, l.jsx)(t2, { onClick: o })
                                : (0, l.jsx)(k.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: Q.intl.string(Q.t.W4N1ru),
                                  }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var t5 = n(5867);
let t8 = new Set(["1443349464290168976", "1443350165678198935"]);
var ne = n(165610);
let nt = {
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
var nn = n(911070),
    ni = n(490696),
    nl = n(268920),
    ns = n(633217);
function nr(e) {
    let t,
        n,
        {
            application: i,
            connectionApp: s,
            isEligibleForIncentivizedAccountLinking: r,
            incentivizedAccountLinkingDisplayedApp: a,
            markAccountLinkingUpsellAsDismissed: o,
            startAuthorization: d,
            analyticsLocations: u,
            accountLinkButtonRef: h,
        } = e,
        A = tn.useConfig({ location: "ActivityPanelGameCard" }),
        { defaultBody: m } = eA.A.useConfig({ location: "ActivityPanelGameCard" }),
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
    r && (x = Q.intl.string(nn.default["2cOIOr"]));
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
            (E = Q.intl.formatToPlainString(nn.default.dPuaZE, { applicationName: p.name })),
            (C = Q.intl.string(nn.default.jR3bbS)),
            (n = {
                text: Q.intl.string(Q.t.hvVgAZ),
                link: "https://www.riotgames.com/integrating-with-discord",
                external: !0,
            })),
        (0, l.jsx)(_.A, {
            size: r ? "lg" : void 0,
            graphic: {
                type: "dynamic",
                component: g.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
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
function na(e) {
    let t,
        { incentivizedAccountLinkingRewarded: n, markAsDismissed: i, accountLinkUpsellTargetRef: s } = e,
        r = Q.intl.string(Q.t.MxAlrB),
        a = Q.intl.string(Q.t["/UTTEg"]),
        o = [
            {
                text: Q.intl.string(Q.t.aRIFWD),
                onClick: () => {
                    i(er.i.TAKE_ACTION), window.open(te.A.getArticleURL(w.MVz.IN_GAME_FEATURES), "_blank");
                },
            },
        ];
    return (
        n &&
            ((r = Q.intl.string(nn.default.ublzTG)),
            (a = Q.intl.string(nn.default.JgM2xu)),
            (t = { type: "video", src: ns.A, fallbackImageSrc: nl.A, aspectRatio: "2/1", loop: !0 })),
        (0, l.jsx)(_.A, {
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
function no(e) {
    let {
            application: t,
            connectionApp: n,
            activity: i,
            embeddedActivity: r,
            game: a,
            hasAlreadyLinked: o,
            didStartAuthorization: c,
            startAuthorization: u,
            accountLinkUpsellTargetRef: h,
            inviteButtonRef: g,
            accountLinkButtonRef: m,
            gameCommunityGuildId: p,
            shouldShowAccountLinkingUpsell: f,
            markAccountLinkingUpsellAsDismissed: E,
            shouldShowPostAccountLinkingUpsell: x,
            markPostAccountLinkingUpsellAsDismissed: I,
            setConnectingGameId: b,
            blockAccountLinkDismissibleContent: S,
            parentAnalyticsLocation: N,
            analyticsLocations: T,
            analyticsContext: v,
        } = e,
        y = tq(t, i, r),
        R = [],
        { isEligible: L, displayedApp: O } = (function (e) {
            let { connectionApp: t } = e,
                { enabled: n } = eA.A.useConfig({ location: "ActivityPanelGameCard" }),
                { data: i } = (0, e_.YY)(t?.parentId ?? t?.id);
            return { isEligible: n && null != t && t8.has(t.id), displayedApp: i };
        })({ connectionApp: n });
    S ||
        (o && c && y && null == r && R.push(A.M.ACCOUNT_LINK_INVITE_FRIENDS),
        null != p && a?.id != null && a?.name != null && R.push(A.M.JOIN_GAME_COMMUNITY_RTC_CTA));
    let { rewarded: G } = (function (e) {
        let { isEligible: t, hasAlreadyLinked: n, didStartAuthorization: i, application: l } = e,
            [r, a] = s.useState(!1);
        return (
            s.useEffect(() => {
                if (!t || !n || !i || r || null == l) return;
                let e = !1;
                return (
                    (0, eW.RI)({
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
    return S
        ? null
        : (0, l.jsx)(j.Ay, {
              contentTypes: R,
              groupName: er.m.ACCOUNT_NAME_ZONE,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: r } = e;
                  return s === A.M.ACCOUNT_LINK_INVITE_FRIENDS
                      ? (0, l.jsx)(_.A, {
                            title: Q.intl.string(Q.t["0l2pEt"]),
                            body: Q.intl.string(Q.t["DSZUK/"]),
                            targetElementRef: g,
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
                                            (0, ef.X)(N, ef.O.INVITE),
                                            U.default.track(w.HAw.OPEN_MODAL, {
                                                type: "Send Join Invite",
                                                application_id: i.application_id,
                                                location: v.location,
                                            }),
                                            (0, C.qf)(i, !1);
                                    },
                                },
                            ],
                        })
                      : x
                        ? (0, l.jsx)(na, {
                              incentivizedAccountLinkingRewarded: G,
                              markAsDismissed: (e) => {
                                  b(null), I(e);
                              },
                              accountLinkUpsellTargetRef: h,
                          })
                        : f
                          ? (0, l.jsx)(nr, {
                                application: t,
                                connectionApp: n,
                                isEligibleForIncentivizedAccountLinking: L,
                                incentivizedAccountLinkingDisplayedApp: O,
                                markAccountLinkingUpsellAsDismissed: E,
                                startAuthorization: u,
                                analyticsLocations: T,
                                accountLinkButtonRef: m,
                            })
                          : s === A.M.JOIN_GAME_COMMUNITY_RTC_CTA && null != p && a?.id != null && a?.name != null
                            ? (0, l.jsx)(eT, {
                                  targetElementRef: h,
                                  gameId: a.id,
                                  gameName: a.name,
                                  gameCommunityGuildId: p,
                                  markAsDismissed: r,
                              })
                            : void 0;
              },
          });
}
let nd = (0, b.A)(function (e) {
    let { message: t } = e;
    return (0, l.jsx)(ti.A, { children: t });
});
class nc extends s.PureComponent {
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
            className: ni.YX,
            children: (0, l.jsx)(m.a, { importData: t, shouldAnimate: !e, className: ni._7 }),
        });
    }
    renderActions() {
        return (0, l.jsx)(tX, { ...this.props, inviteButtonRef: this.inviteButtonRef });
    }
    renderDismissiblePopovers() {
        let {
            application: e,
            activity: t,
            embeddedActivity: n,
            runningGame: i,
            previouslyRunningGame: s,
            hasAlreadyLinked: r,
            didStartAuthorization: a,
            startAuthorization: o,
            accountLinkButtonRef: d,
            shouldShowAccountLinkingUpsell: c,
            markAccountLinkingUpsellAsDismissed: u,
            shouldShowPostAccountLinkingUpsell: h,
            markPostAccountLinkingUpsellAsDismissed: A,
            setConnectingGameId: g,
            blockAccountLinkDismissibleContent: _,
            parentAnalyticsLocation: m,
            analyticsLocations: p,
            gameCommunityGuildId: f,
            analyticsContext: E,
            connectionApp: C,
        } = this.props;
        return (0, l.jsx)(no, {
            application: e,
            connectionApp: C,
            activity: t,
            embeddedActivity: n,
            game: i ?? s,
            hasAlreadyLinked: r,
            didStartAuthorization: a,
            startAuthorization: o,
            accountLinkUpsellTargetRef: this.accountLinkUpsellTargetRef,
            inviteButtonRef: this.inviteButtonRef,
            accountLinkButtonRef: d,
            gameCommunityGuildId: f,
            activityPopoutTargetRef: this.activityPopoutTargetRef,
            shouldShowAccountLinkingUpsell: c,
            markAccountLinkingUpsellAsDismissed: u,
            shouldShowPostAccountLinkingUpsell: h,
            markPostAccountLinkingUpsellAsDismissed: A,
            setConnectingGameId: g,
            blockAccountLinkDismissibleContent: _,
            parentAnalyticsLocation: m,
            analyticsLocations: p,
            analyticsContext: E,
        });
    }
    renderGame() {
        let {
            isStreaming: e,
            application: t,
            runningGame: n,
            previouslyRunningGame: i,
            isForceShowSharingPopout: s,
            setIsForceShowSharingPopout: r,
        } = this.props;
        return (0, l.jsx)(t4, {
            isStreaming: e,
            application: t,
            game: n ?? i,
            onClickNotSharing: () => r(!0),
            isForceShowSharingPopout: s,
            setIsForceShowSharingPopout: r,
            ref: this.accountLinkUpsellTargetRef,
            popoutTargetRef: this.activityPopoutTargetRef,
            isCurrentlyRunningGame: null != n,
        });
    }
    renderScreenshare() {
        let { isStreaming: e, streamMetadata: t, streamQualityIndicator: n } = this.props,
            { title: i, sanitizedTitle: s } = (0, eV.A)(t);
        return (0, l.jsxs)("div", {
            className: ni.cm,
            ref: this.accountLinkUpsellTargetRef,
            children: [
                e
                    ? (0, l.jsx)(eB.A, { title: s, icon: t?.sourceIcon })
                    : (0, l.jsx)(eC.Ay, { look: eC.Ay.Looks.GRAY, size: eC.Ay.Sizes.SMALL, className: ni.Ok }),
                (0, l.jsxs)("div", {
                    className: ni.pq,
                    children: [
                        (0, l.jsx)(tl.A, { children: i }),
                        null != n &&
                            (0, l.jsxs)("div", {
                                className: ni.qi,
                                children: [
                                    (0, l.jsx)(p.t, { size: "xxs", color: ex.k0.PREMIUM_TIER_2 }),
                                    (0, l.jsx)(eQ, { className: ni.s, variant: "text-xxs/semibold", children: n }),
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
                ((0, eJ.gV)(e.type) &&
                    x.A.selectParticipant(
                        e.id,
                        (0, ep.Qt)({ applicationId: t.applicationId, instanceId: t.compositeInstanceId }),
                    ),
                (0, eJ.pQ)(e.type) && (0, y.gk)(t5.Gd.PANEL));
    };
    handleFrameLinkClick = () => {
        let { frame: e, isActivityPopoutOpen: t } = this.props;
        (d()(null != e, "Frame cannot be null during navigation click"), t)
            ? E.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })
            : eb.A.updateFrameLayoutMode({ applicationId: e.applicationId, layoutMode: ne.y.FOCUSED });
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
        let u = (0, l.jsx)(eF.A, {
                href: e,
                onClick: this.handleChannelLinkClick,
                children: (0, l.jsx)(ti.A, { className: ni.Ix, children: c }),
            }),
            h = (0, l.jsx)(eF.A, {
                href: e,
                onClick: this.handleApplicationLinkClick,
                children: (0, l.jsx)(tl.A, { className: ni._W, children: t.name }),
            }),
            A = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(eG.A, {
                        className: ni.Gt,
                        game: t,
                        size: eG.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, l.jsx)(ea, {
                        popoutTargetRef: this.activityPopoutTargetRef,
                        isForceShowSharingPopout: a,
                        setIsForceShowSharingPopout: o,
                        children: (0, l.jsxs)("div", {
                            className: ni.pq,
                            children: [h, null != i && (0, eJ.pQ)(i.type) ? u : (0, l.jsx)(nd, { timestamps: d })],
                        }),
                    }),
                ],
            });
        return (0, l.jsx)("div", { className: ni.cm, children: A });
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
                className: ni.rB,
                children: (0, l.jsx)(tl.A, { className: ni._W, children: e.name }),
            }),
            s = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(eG.A, {
                        className: ni.Gt,
                        game: e,
                        size: eG.M.SMALL,
                        ref: this.accountLinkUpsellTargetRef,
                    }),
                    (0, l.jsxs)("div", { className: ni.pq, children: [i, (0, l.jsx)(nd, { timestamps: n })] }),
                ],
            });
        return (0, l.jsx)("div", { className: ni.cm, children: s });
    }
    render() {
        let {
                canGoLive: e,
                embeddedActivity: t,
                frame: n,
                runningGame: i,
                previouslyRunningGame: s,
                isStreaming: r,
                streamMetadata: o,
                application: d,
                activity: c,
                className: u,
                canStartAuthorization: h,
                allowAccountLinkingUpsellPostGameClose: A,
            } = this.props,
            g = null != i && (e || h) && (!r || o?.pid != null),
            _ = A && null != s && !r,
            m = null != t && tq(d, c, t),
            p =
                null != n &&
                (function (e) {
                    let { application: t, frame: n } = e;
                    return null != t && null != n && n.applicationId === t.id;
                })({ application: d, frame: n });
        if (!r && !g && !m && !p && !_) return null;
        let f = () =>
            g
                ? this.renderGame()
                : m
                  ? this.renderEmbeddedActivity()
                  : p
                    ? this.renderFrame()
                    : _
                      ? this.renderGame()
                      : this.renderScreenshare();
        return (0, l.jsx)("div", {
            className: a()(ni.nd, u),
            ref: this.activityPopoutTargetRef,
            children: (0, l.jsxs)("div", {
                className: ni.rf,
                children: [f(), this.renderActions(), this.renderDismissiblePopovers()],
            }),
        });
    }
}
let nu = (0, S.A)(function (e) {
    let { guildId: t, ...n } = e,
        i = (0, h.bG)([e$.default], () => e$.default.getId()),
        r = (0, h.bG)([ey.Ay, e8.A], () => (0, eH.A)(ey.Ay, e8.A)),
        { previouslyRunningGame: a, isWithinThreshold: o } = (function () {
            let [e, t] = (0, s.useState)(Date.now()),
                n = (0, h.bG)([eO], () => eO.getLastPreviouslyRunningGame()),
                { allowAccountLinkingUpsellPostGameClose: i, timeToShowUpsellPostGameCloseMs: l } = eh.useConfig({
                    location: "ActivityPanelGameCard",
                });
            if (
                ((0, s.useEffect)(() => {
                    if (null == n || !i || Date.now() - n.endedAt >= l) return;
                    let e = setTimeout(
                        () => {
                            t(Date.now());
                        },
                        n.endedAt + l - Date.now(),
                    );
                    return () => clearTimeout(e);
                }, [i, n, l]),
                null == n)
            )
                return { previouslyRunningGame: null, isWithinThreshold: !1 };
            let r = e - n.endedAt;
            return { previouslyRunningGame: n, isWithinThreshold: i && r < l };
        })(),
        d = (0, h.bG)([e4.A, e0.A], () => e0.A.getChannel(e4.A.getVoiceChannelId())),
        c = (0, h.bG)([R.Ay], () => R.Ay.getConnectedActivityChannelId()),
        g = (0, h.bG)([e0.A], () => e0.A.getChannel(c)),
        _ = (0, h.bG)([e2.A], () => e2.A.getGuild(g?.guild_id)),
        [m, p] = (0, h.yK)([eZ.A], () => [eZ.A.getCurrentUserActiveStream(), eZ.A.getStreamerActiveStreamMetadata()]),
        f = (0, h.bG)([T.A], () => T.A.useReducedMotion),
        C = (0, h.bG)([R.Ay], () => R.Ay.getCurrentEmbeddedActivity()),
        x = (0, h.bG)([eS.A], () => eS.A.getConnectedFrame()),
        I = (0, h.bG)([e2.A, e9.A], () => null == d || ew.vz(d, e2.A, e9.A, !1)),
        [b] = (0, em.A)([
            (function () {
                if (null != p && null != p.id) return p.id;
                if (null != r && null != r.id) return r.id;
                if (null != C) return C.applicationId;
                if (null != x) return x.applicationId;
                if (null != a && null != a.id) return a.id;
            })() ?? "",
        ]),
        S =
            ((0, h.bG)([R.Ay], () => R.Ay.getCurrentEmbeddedActivity()),
            (0, h.bG)([e6.Ay], () => (0, ek.A)(e6.Ay) && (0, tt.isWindows)())),
        v = (0, h.bG)([e3.A], () => (null != i ? e3.A.findActivity(i, (e) => e.type === w.$pd.PLAYING) : null)),
        y = null != m && m.ownerId === i && m.state !== w.XYD.ENDED,
        j = (0, h.bG)([e5.default, e7.A], () => (null != g ? (0, eE.m1)(g, e5.default, e7.A) : void 0)),
        L = (function () {
            let { resolution: e, fps: t } = (0, h.cf)([eY.A], () => eY.A.getState());
            if (e !== eq.on.RESOLUTION_720 || t === eq.kn.FPS_60) return `${(0, eq.zr)(e)} ${(0, ez.Bs)(t)}`;
        })(),
        [G, M] = s.useState(!1),
        D = (0, h.bG)([eK.A], () => eK.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT)),
        { parentAnalyticsLocation: P, analyticsLocations: k } = (0, eo.Ay)(),
        {
            hasAlreadyLinked: V,
            canStartAuthorization: B,
            connectionApp: H,
            startAuthorization: F,
        } = (0, eg.RD)(b, { allowedFlows: [eg._M.RPC, eg._M.WEB] }),
        [W, K] = s.useState(null),
        Y = (0, N.A)(b?.id);
    s.useEffect(() => {
        null != b && Y !== b?.id && K(null);
    }, [b, Y]);
    let z = (0, u.K)((e) => {
            e &&
                null != H &&
                U.default.track(w.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED, { game_id: r?.id ?? null, application_id: H.id });
        }),
        { allowAccountLinkingUpsellPostGameClose: q } = eh.useConfig({ location: "ActivityPanelGameCard" }),
        { isQuestBarEmpty: X, hasLoadedQuestBar: Q } = (0, O.c9)(),
        J = !Q || !X,
        Z = !J && !V && null == W && B && null != b,
        { shouldShow: $, markAsDismissed: ee } = (function (e) {
            let {
                    application: t,
                    disabled: n = !1,
                    dismissibleContent: i,
                    dismissibleContentGroupName: l,
                    bypassAutoDismiss: r = !1,
                } = e,
                a = (0, h.bG)([eP], () => (null != t ? eP.getGameUpsellDismissal(t.id, i) : null)),
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
                [u, A] = (0, eI.Wl)(c ? i : null, { cooldownDurationMs: 864e5 }, l, r);
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
            application: b,
            disabled: !Z,
            dismissibleContent: A.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
            dismissibleContentGroupName: er.m.ACCOUNT_NAME_ZONE,
            bypassAutoDismiss: !0,
        }),
        et = null != W && V,
        [en, ei] = (0, eI.Wl)(
            et ? A.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER : null,
            { cooldownDurationMs: 0 },
            er.m.ACCOUNT_NAME_ZONE,
        ),
        el = en === A.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER,
        es = null != a && ((o && $) || el),
        { enabled: ea } = ev.useConfig({ location: "ActivityPanelGameCard" }),
        ed = s.useMemo(() => (r?.id != null ? nt[r.id] : void 0), [r?.id]),
        ec = (0, h.bG)([e1.A], () => null != ed && e1.A.isMember(ed), [ed]),
        eu = ea && null != ed && !ec ? ed : void 0;
    return (0, l.jsx)(nc, {
        ...n,
        guildId: t,
        canGoLive: S || !1,
        activity: v,
        embeddedActivity: C,
        frame: x,
        userId: i,
        runningGame: r,
        previouslyRunningGame: es ? a : null,
        shouldShowAccountLinkingUpsell: $,
        markAccountLinkingUpsellAsDismissed: ee,
        shouldShowPostAccountLinkingUpsell: el,
        markPostAccountLinkingUpsellAsDismissed: ei,
        setConnectingGameId: K,
        blockAccountLinkDismissibleContent: J,
        allowAccountLinkingUpsellPostGameClose: q,
        application: b,
        useReducedMotion: f,
        isStreaming: y,
        channel: g,
        canStream: I,
        stream: m,
        streamMetadata: p,
        channelName: j,
        guildForConnectedChannel: _,
        streamQualityIndicator: L,
        isForceShowSharingPopout: G,
        setIsForceShowSharingPopout: M,
        isActivityPopoutOpen: D,
        hasAlreadyLinked: V,
        parentAnalyticsLocation: P,
        analyticsLocations: k,
        canStartAuthorization: B,
        accountLinkButtonRef: z,
        startAuthorization: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return K(b?.id ?? null), F(...t);
        },
        didStartAuthorization: null != W,
        connectionApp: H,
        gameCommunityGuildId: eu,
    });
});
