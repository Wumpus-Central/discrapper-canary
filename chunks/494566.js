n.d(t, { GF: () => es, LK: () => eu, NO: () => ea, Yb: () => ei, pp: () => en, sm: () => er, un: () => el });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(377802),
    a = n(348858),
    o = n(523875),
    d = n(416696),
    u = n(621956),
    c = n(446080),
    h = n(397927),
    g = n(827343),
    m = n(442433),
    p = n(956793),
    A = n(688810),
    x = n(617354),
    f = n(980923),
    E = n(206018),
    S = n(750765),
    I = n(18235),
    T = n(183184),
    v = n(47167),
    C = n(713654),
    j = n(880144),
    y = n(338771),
    w = n(263063),
    _ = n(178442),
    O = n(209932),
    N = n(989799),
    b = n(167579),
    R = n(704877),
    M = n(173660),
    L = n(675991),
    z = n(848362),
    D = n(594831),
    k = n(222692),
    P = n(709562),
    G = n(616356),
    V = n(961350),
    U = n(71393),
    H = n(430452),
    Y = n(383501),
    Z = n(309010),
    W = n(287809),
    X = n(977997),
    F = n(810412),
    K = n(823901),
    B = n(395011),
    Q = n(243612),
    q = n(652215),
    J = n(985018),
    $ = n(453977);
function ee(e) {
    let t = s.useRef(null);
    return (
        s.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function et(e) {
    let {
        ref: t,
        isActive: n,
        disabled: s,
        iconComponent: l,
        iconColor: r,
        tooltip: a,
        defaultColor: o = "primaryDark",
        highlightedColor: d = "primaryDark",
        caretColor: u,
        popoutOpen: c,
        onClick: h,
        popoutDisabled: g,
        onPopoutClick: m,
        onMouseEnter: p,
        onMouseLeave: A,
        onContextMenu: x,
        isTrayButton: f,
        ...E
    } = e;
    return (0, i.jsx)(P.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? d : o,
        className: $.x6,
        disabled: s,
        popoutOpen: c,
        popoutDisabled: g,
        label: a,
        isTrayButton: f,
        onMouseEnter: (e) => {
            p?.(e);
        },
        onMouseLeave: (e) => {
            A?.(e);
        },
        iconComponent: l,
        iconColor: r,
        caretColor: u,
        isActive: n,
        onContextMenu: x,
        onPopoutClick: m,
        "aria-label": E["aria-label"],
    });
}
function en(e) {
    let { voiceChannel: t, locked: n } = e,
        l = s.useRef(null),
        { suppress: r, selfMute: a, mute: d } = (0, M.A)(t),
        u = a || d || r,
        c = (0, f.A)(a, d, r, !1),
        { Component: g, play: m, events: p } = (0, o.L)(u ? "unmute" : "mute");
    s.useEffect(() => () => m(), [m, u]);
    let A = ee(n),
        x = (e) => (t) => {
            e(t), (0, F.YX)(q.uss.QUICK_ACTIONS, { type: F.Z5.MICROPHONE, value: F.IP.SETTINGS_OPENED });
        };
    return (0, i.jsx)(h.YNO, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = A(t);
            return (0, i.jsx)(E.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: q.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, i.jsx)(et, {
                ref: l,
                iconComponent: g,
                isActive: u,
                highlightedColor: "red",
                tooltip: c,
                onClick: () => {
                    (0, T.A)(d, r, q.JJy.OVERLAY),
                        (0, F.YX)(q.uss.QUICK_ACTIONS, {
                            type: F.Z5.MICROPHONE,
                            value: u ? F.IP.ENABLED : F.IP.DISABLED,
                            userId: V.default.getId(),
                        });
                },
                onPopoutClick: x(n),
                onContextMenu: x(n),
                popoutOpen: s,
                onMouseEnter: () => {
                    p.onMouseEnter();
                },
                onMouseLeave: () => {
                    p.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        l = s.useRef(null),
        { selfDeaf: r, deaf: o } = (0, b.A)(t),
        d = r || o,
        {
            Component: u,
            play: c,
            events: { onMouseEnter: g, onMouseLeave: m },
        } = (0, a.I)(d ? "undeafen" : "deafen"),
        p = o ? h.TJE : u;
    s.useEffect(() => () => c(), [d, c]);
    let A = () => {
            (0, I.A)(o, q.JJy.OVERLAY),
                (0, F.YX)(q.uss.QUICK_ACTIONS, {
                    type: F.Z5.AUDIO,
                    value: o ? F.IP.ENABLED : F.IP.DISABLED,
                    userId: V.default.getId(),
                });
        },
        f = (e) => (t) => {
            e(t), (0, F.YX)(q.uss.QUICK_ACTIONS, { type: F.Z5.AUDIO, value: F.IP.SETTINGS_OPENED });
        },
        S = ee(n);
    return (0, i.jsx)(h.YNO, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.A, {
                onClose: S(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: q.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, i.jsx)(et, {
                ref: l,
                iconComponent: p,
                tooltip: (0, x.A)(r, o, !1),
                isActive: d,
                highlightedColor: "red",
                onClick: A,
                onContextMenu: f(n),
                onMouseEnter: g,
                onMouseLeave: m,
                onPopoutClick: f(n),
                popoutOpen: s,
                isTrayButton: !0,
            });
        },
    });
}
function es(e) {
    let { voiceChannel: t, locked: n } = e,
        r = s.useRef(null),
        a = (0, l.bG)([H.Ay], () => H.Ay.isVideoEnabled()),
        o = (0, l.bG)([H.Ay], () => Object.values(H.Ay.getVideoDevices())[0]),
        d = o?.disabled ?? !0,
        u = !1 === d,
        m = (0, R.A)(t),
        p = (e) => {
            g.A.setVideoEnabled(e);
        },
        A = (e) => (t) => {
            e(t), (0, F.YX)(q.uss.QUICK_ACTIONS, { type: F.Z5.CAMERA, value: F.IP.SETTINGS_OPENED });
        },
        x = () => {
            d ? (u ? p(!0) : (0, k.A)()) : p(!a),
                (0, F.YX)(q.uss.QUICK_ACTIONS, {
                    type: F.Z5.CAMERA,
                    value: a ? F.IP.DISABLED : F.IP.ENABLED,
                    userId: V.default.getId(),
                });
        },
        {
            Component: f,
            play: E,
            events: { onMouseEnter: I, onMouseLeave: T },
        } = (0, c.K)(a ? "disable" : "enable"),
        v = null != t ? (0, L.Q)({ enabled: a, cameraUnavailable: d, hasPermission: m, channel: t }) : void 0;
    s.useEffect(() => () => E(), [a, E]);
    let C = ee(n),
        j = null == t || !m;
    return (0, i.jsx)(h.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(S.A, { onClose: C(t), appContext: q.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, i.jsx)(et, {
                ref: r,
                iconComponent: f,
                tooltip: v,
                onClick: x,
                isActive: a,
                highlightedColor: "green",
                onPopoutClick: A(n),
                popoutOpen: s,
                onContextMenu: A(n),
                onMouseEnter: I,
                onMouseLeave: T,
                disabled: j,
                isTrayButton: !0,
            });
        },
    });
}
function el(e) {
    let t,
        { voiceChannel: n, locked: r } = e,
        a = s.useRef(null),
        o = (0, l.bG)([W.default], () => W.default.getCurrentUser()),
        u = (0, R.A)(n),
        c = (0, l.cf)([H.Ay], () => (0, j.A)(H.Ay)),
        g = (0, l.bG)([G.A], () => G.A.getCurrentUserActiveStream()),
        m = (0, l.bG)([B.A], () => B.A.getTargetPID()),
        p = (0, K.y)({ pid: m, allowOneClickGoLive: !0, analyticsLocation: q.ThZ.UNLOCKED_OVERLAY }),
        A = () => {
            p(), (0, F.YX)(q.uss.QUICK_ACTIONS, { type: F.Z5.GO_LIVE, value: F.IP.ENABLED, userId: V.default.getId() });
        },
        x = null != g;
    if (x) t = J.intl.string(J.t.S5anIc);
    else if (null != n) {
        let e = (0, Q.qv)();
        t = u
            ? null != e
                ? J.intl.format(J.t.AB5gTy, { game: e.name })
                : J.intl.string(J.t.FeUKeA)
            : J.intl.string(J.t.uQn9B8);
    }
    let f = () => {
            if (x)
                return (
                    (0, F.YX)(q.uss.QUICK_ACTIONS, {
                        type: F.Z5.GO_LIVE,
                        value: F.IP.DISABLED,
                        userId: V.default.getId(),
                    }),
                    (0, y.A)(g, !1)
                );
            A();
        },
        E = (e) => (t) => {
            e(t), (0, F.YX)(q.uss.QUICK_ACTIONS, { type: F.Z5.SCREEN_SHARE, value: F.IP.SETTINGS_OPENED });
        },
        {
            Component: S,
            events: { onMouseEnter: I, onMouseLeave: T },
            play: v,
        } = (0, d.c)(x ? "disable" : "enable");
    s.useEffect(() => () => v(), [x, v]);
    let C = ee(r);
    return (0, i.jsx)(h.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(z.A, {
                channel: n,
                currentUser: o,
                activeStreams: x ? [g] : [],
                handleGoLive: A,
                onClose: C(t),
                appContext: q.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, n) => {
            let { onClick: s } = e,
                { isShown: l } = n;
            return (0, i.jsx)(et, {
                ref: a,
                iconComponent: S,
                tooltip: t,
                "aria-label": J.intl.string(J.t.FeUKeA),
                isActive: x,
                highlightedColor: "green",
                onClick: f,
                popoutOpen: l,
                popoutDisabled: !x,
                onPopoutClick: E(s),
                onContextMenu: E(s),
                onMouseEnter: I,
                onMouseLeave: T,
                disabled: !c || !u,
                isTrayButton: !0,
            });
        },
    });
}
function er(e) {
    let { voiceChannel: t, locked: r } = e,
        a = s.useRef(null),
        o = t?.getGuildId() ?? null,
        { mute: d, suppress: c } = (0, M.A)(t),
        g = (0, l.bG)([H.Ay], () => H.Ay.isDeaf()),
        p = null == t || d || c || g,
        { analyticsLocations: x } = (0, A.Ay)();
    function f(e) {
        null != o &&
            ((0, F.YX)(q.uss.QUICK_ACTIONS, { type: F.Z5.SOUNDBOARD, value: F.IP.SETTINGS_OPENED }),
            (0, m.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: x, guildId: o, ...t });
            }));
    }
    let {
            Component: E,
            events: { onClick: S, onMouseEnter: I, onMouseLeave: T },
        } = (0, u.E)(),
        v = ee(r),
        C = (0, l.bG)([O.A, V.default], () => O.A.isUserPlayingSounds(V.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(h.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return p || null == t
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(N.A, { guildId: o, channel: t, onClose: v(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, i.jsx)(et, {
                ref: a,
                iconComponent: E,
                tooltip: d
                    ? J.intl.string(J.t["Ox4/zU"])
                    : c
                      ? J.intl.string(J.t["+YBKYI"])
                      : g
                        ? J.intl.string(J.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    S(),
                        (0, F.YX)(q.uss.QUICK_ACTIONS, {
                            type: F.Z5.SOUNDBOARD,
                            value: F.IP.PANEL_OPENED,
                            userId: V.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: C,
                defaultColor: C,
                onContextMenu: f,
                onMouseEnter: I,
                onMouseLeave: T,
                isActive: s,
                popoutOpen: s,
                disabled: p,
                isTrayButton: !0,
            });
        },
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        a = s.useRef(null),
        o = (0, l.bG)([Z.A], () => Z.A.getVoiceChannelId() === t?.id),
        d = () => {
            (0, F.YX)(q.uss.QUICK_ACTIONS, { type: F.Z5.CALL_BUTTON, value: F.IP.DISABLED, userId: V.default.getId() }),
                o && p.default.disconnect();
        },
        u = (e, t) => {
            p.default.selectVoiceChannel(e),
                (0, F.YX)(q.uss.QUICK_ACTIONS, {
                    type: F.Z5.CALL_BUTTON,
                    value: F.IP.ENABLED,
                    userId: V.default.getId(),
                    secondaryValue: t,
                });
        },
        [c, g] = s.useTransition(),
        m = (e) => (t) => {
            g(() => {
                e(t);
            }),
                (0, F.YX)(q.uss.QUICK_ACTIONS, { type: F.Z5.CALL_BUTTON, value: F.IP.SETTINGS_OPENED });
        },
        {
            Component: A,
            events: { onMouseEnter: x, onMouseLeave: f },
        } = (0, r.O)(),
        E = ee(n),
        S = (0, D.qZ)(),
        I = o ? A : h._jp;
    return (0, i.jsx)(h.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(D.Ay, { allAvailableChannelRows: S, currentVoiceChannel: t, onClose: E(n), onSelect: u });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, i.jsx)(et, {
                ref: a,
                iconComponent: I,
                tooltip: o ? J.intl.string(J.t["6vrfgt"]) : J.intl.string(J.t.S0W8Z5),
                onClick: o ? d : m(n),
                defaultColor: o ? "disconnect" : void 0,
                onMouseEnter: x,
                onMouseLeave: f,
                onContextMenu: m(n),
                isActive: s,
                onPopoutClick: o ? m(n) : void 0,
                popoutOpen: s,
                isTrayButton: !0,
            });
        },
    });
}
function eo(e) {
    let { voiceChannel: t } = e,
        n = (0, l.bG)([U.A], () => U.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: $.rK }),
                    (0, i.jsxs)("div", {
                        className: $._C,
                        children: [
                            (0, i.jsx)(w.Ay, { guild: n, size: w.Ay.Sizes.SMOL, className: $.$f }),
                            (0, i.jsx)(h.Text, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: $.J5,
                                children: n.name,
                            }),
                        ],
                    }),
                ],
            });
        default:
            return null;
    }
}
function ed(e) {
    let { voiceChannel: t } = e,
        n = (0, C.gU)(t),
        s = (0, v.Ay)(t);
    return (0, i.jsxs)("div", {
        className: $.Wh,
        children: [
            null != n &&
                (0, i.jsx)(h.Text, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: $.p,
                    children: (0, i.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != s &&
                (0, i.jsx)(h.Text, { variant: "text-sm/medium", color: "text-muted", className: $.HA, children: s }),
        ],
    });
}
function eu(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        s = (0, l.cf)([Y.A], () => ({ quality: Y.A.getQuality(), state: Y.A.getState(), lastPing: Y.A.getLastPing() })),
        r = (0, l.bG)([X.A], () => null != n && X.A.hasVideo(n), [n]);
    return (
        null != n &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_.A, { ...s, channelId: n, hasVideo: r, connectionStatusTextVariant: "text-sm/medium" }),
                (0, i.jsx)(eo, { voiceChannel: t }),
                (0, i.jsx)("div", { className: $.rK }),
                (0, i.jsx)(ed, { voiceChannel: t }),
            ],
        })
    );
}
