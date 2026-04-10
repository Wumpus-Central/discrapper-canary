n.d(t, { GF: () => es, LK: () => eh, NO: () => eu, Yb: () => er, pp: () => el, sm: () => eo, un: () => ea });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(377802),
    a = n(348858),
    o = n(523875),
    u = n(416696),
    d = n(621956),
    c = n(446080),
    h = n(397927),
    g = n(827343),
    m = n(442433),
    f = n(956793),
    A = n(688810),
    I = n(617354),
    E = n(980923),
    p = n(206018),
    _ = n(750765),
    S = n(18235),
    x = n(183184),
    T = n(47167),
    N = n(713654),
    C = n(880144),
    v = n(338771),
    y = n(263063),
    M = n(178442),
    R = n(209932),
    D = n(989799),
    b = n(167579),
    O = n(704877),
    w = n(173660),
    j = n(675991),
    U = n(848362),
    L = n(594831),
    k = n(222692),
    G = n(709562),
    P = n(616356),
    F = n(961350),
    V = n(71393),
    z = n(430452),
    H = n(383501),
    Y = n(309010),
    W = n(351906),
    B = n(287809),
    X = n(977997),
    Z = n(810412),
    K = n(589051),
    $ = n(823901),
    q = n(395011),
    Q = n(243612),
    J = n(652215),
    ee = n(985018),
    et = n(453977);
function en(e) {
    let t = l.useRef(null);
    return (
        l.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function ei(e) {
    let {
        ref: t,
        isActive: n,
        disabled: l,
        iconComponent: r,
        iconColor: s,
        tooltip: a,
        defaultColor: o = "primaryDark",
        highlightedColor: u = "primaryDark",
        caretColor: d,
        popoutOpen: c,
        onClick: h,
        popoutDisabled: g,
        onPopoutClick: m,
        onMouseEnter: f,
        onMouseLeave: A,
        onContextMenu: I,
        isTrayButton: E,
        ...p
    } = e;
    return (0, i.jsx)(G.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? u : o,
        className: et.x6,
        disabled: l,
        popoutOpen: c,
        popoutDisabled: g,
        label: a,
        isTrayButton: E,
        onMouseEnter: (e) => {
            f?.(e);
        },
        onMouseLeave: (e) => {
            A?.(e);
        },
        iconComponent: r,
        iconColor: s,
        caretColor: d,
        isActive: n,
        onContextMenu: I,
        onPopoutClick: m,
        "aria-label": p["aria-label"],
    });
}
function el(e) {
    let { voiceChannel: t, locked: n } = e,
        r = l.useRef(null),
        { suppress: s, selfMute: a, mute: u } = (0, w.A)(t),
        d = a || u || s,
        c = (0, E.A)(a, u, s, !1),
        { Component: g, play: m, events: f } = (0, o.L)(d ? "unmute" : "mute");
    l.useEffect(() => () => m(), [m, d]);
    let A = en(n),
        I = (e) => (t) => {
            e(t), (0, Z.YX)(J.uss.QUICK_ACTIONS, { type: Z.Z5.MICROPHONE, value: Z.IP.SETTINGS_OPENED });
        };
    return (0, i.jsx)(h.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = A(t);
            return (0, i.jsx)(p.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: J.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ei, {
                ref: r,
                iconComponent: g,
                isActive: d,
                highlightedColor: "red",
                tooltip: c,
                onClick: () => {
                    (0, x.A)(u, s, J.JJy.OVERLAY),
                        (0, Z.YX)(J.uss.QUICK_ACTIONS, {
                            type: Z.Z5.MICROPHONE,
                            value: d ? Z.IP.ENABLED : Z.IP.DISABLED,
                            userId: F.default.getId(),
                        });
                },
                onPopoutClick: I(n),
                onContextMenu: I(n),
                popoutOpen: l,
                onMouseEnter: () => {
                    f.onMouseEnter();
                },
                onMouseLeave: () => {
                    f.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function er(e) {
    let { voiceChannel: t, locked: n } = e,
        r = l.useRef(null),
        { selfDeaf: s, deaf: o } = (0, b.A)(t),
        u = s || o,
        {
            Component: d,
            play: c,
            events: { onMouseEnter: g, onMouseLeave: m },
        } = (0, a.I)(u ? "undeafen" : "deafen"),
        f = o ? h.TJE : d;
    l.useEffect(() => () => c(), [u, c]);
    let A = () => {
            (0, S.A)(o, J.JJy.OVERLAY),
                (0, Z.YX)(J.uss.QUICK_ACTIONS, {
                    type: Z.Z5.AUDIO,
                    value: o ? Z.IP.ENABLED : Z.IP.DISABLED,
                    userId: F.default.getId(),
                });
        },
        E = (e) => (t) => {
            e(t), (0, Z.YX)(J.uss.QUICK_ACTIONS, { type: Z.Z5.AUDIO, value: Z.IP.SETTINGS_OPENED });
        },
        _ = en(n);
    return (0, i.jsx)(h.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(p.A, {
                onClose: _(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: J.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ei, {
                ref: r,
                iconComponent: f,
                tooltip: (0, I.A)(s, o, !1),
                isActive: u,
                highlightedColor: "red",
                onClick: A,
                onContextMenu: E(n),
                onMouseEnter: g,
                onMouseLeave: m,
                onPopoutClick: E(n),
                popoutOpen: l,
                isTrayButton: !0,
            });
        },
    });
}
function es(e) {
    let { voiceChannel: t, locked: n } = e,
        s = l.useRef(null),
        a = (0, r.bG)([z.Ay], () => z.Ay.isVideoEnabled()),
        o = (0, r.bG)([z.Ay], () => Object.values(z.Ay.getVideoDevices())[0]),
        u = o?.disabled ?? !0,
        d = !1 === u,
        m = (0, O.A)(t),
        f = (e) => {
            g.A.setVideoEnabled(e);
        },
        A = (e) => (t) => {
            e(t), (0, Z.YX)(J.uss.QUICK_ACTIONS, { type: Z.Z5.CAMERA, value: Z.IP.SETTINGS_OPENED });
        },
        I = () => {
            u ? (d ? f(!0) : (0, k.A)()) : f(!a),
                (0, Z.YX)(J.uss.QUICK_ACTIONS, {
                    type: Z.Z5.CAMERA,
                    value: a ? Z.IP.DISABLED : Z.IP.ENABLED,
                    userId: F.default.getId(),
                });
        },
        {
            Component: E,
            play: p,
            events: { onMouseEnter: S, onMouseLeave: x },
        } = (0, c.K)(a ? "disable" : "enable"),
        T = null != t ? (0, j.Q)({ enabled: a, cameraUnavailable: u, hasPermission: m, channel: t }) : void 0;
    l.useEffect(() => () => p(), [a, p]);
    let N = en(n),
        C = null == t || !m;
    return (0, i.jsx)(h.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(_.A, { onClose: N(t), appContext: J.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ei, {
                ref: s,
                iconComponent: E,
                tooltip: T,
                onClick: I,
                isActive: a,
                highlightedColor: "green",
                onPopoutClick: A(n),
                popoutOpen: l,
                onContextMenu: A(n),
                onMouseEnter: S,
                onMouseLeave: x,
                disabled: C,
                isTrayButton: !0,
            });
        },
    });
}
function ea(e) {
    let t,
        { voiceChannel: n, locked: s } = e,
        a = l.useRef(null),
        o = (0, r.bG)([B.default], () => B.default.getCurrentUser()),
        d = (0, O.A)(n),
        c = (0, r.cf)([z.Ay], () => (0, C.A)(z.Ay)),
        g = (0, r.bG)([P.A], () => P.A.getCurrentUserActiveStream()),
        m = (0, r.bG)([q.A], () => q.A.getTargetPID()),
        f = (0, $.y)({ pid: m, allowOneClickGoLive: !0, analyticsLocation: J.ThZ.UNLOCKED_OVERLAY }),
        A = () => {
            f(), (0, Z.YX)(J.uss.QUICK_ACTIONS, { type: Z.Z5.GO_LIVE, value: Z.IP.ENABLED, userId: F.default.getId() });
        },
        I = null != g;
    if (I) t = ee.intl.string(ee.t.S5anIc);
    else if (null != n) {
        let e = (0, Q.qv)();
        t = d
            ? null != e
                ? ee.intl.format(ee.t.AB5gTy, { game: e.name })
                : ee.intl.string(ee.t.FeUKeA)
            : ee.intl.string(ee.t.uQn9B8);
    }
    let E = () => {
            if (I)
                return (
                    (0, Z.YX)(J.uss.QUICK_ACTIONS, {
                        type: Z.Z5.GO_LIVE,
                        value: Z.IP.DISABLED,
                        userId: F.default.getId(),
                    }),
                    (0, v.A)(g, !1)
                );
            A();
        },
        p = (e) => (t) => {
            e(t), (0, Z.YX)(J.uss.QUICK_ACTIONS, { type: Z.Z5.SCREEN_SHARE, value: Z.IP.SETTINGS_OPENED });
        },
        {
            Component: _,
            events: { onMouseEnter: S, onMouseLeave: x },
            play: T,
        } = (0, u.c)(I ? "disable" : "enable");
    l.useEffect(() => () => T(), [I, T]);
    let N = en(s);
    return (0, i.jsx)(h.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(U.A, {
                channel: n,
                currentUser: o,
                activeStreams: I ? [g] : [],
                handleGoLive: A,
                onClose: N(t),
                appContext: J.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: r } = n;
            return (0, i.jsx)(ei, {
                ref: a,
                iconComponent: _,
                tooltip: t,
                "aria-label": ee.intl.string(ee.t.FeUKeA),
                isActive: I,
                highlightedColor: "green",
                onClick: E,
                popoutOpen: r,
                popoutDisabled: !I,
                onPopoutClick: p(l),
                onContextMenu: p(l),
                onMouseEnter: S,
                onMouseLeave: x,
                disabled: !c || !d,
                isTrayButton: !0,
            });
        },
    });
}
function eo(e) {
    let { voiceChannel: t, locked: s } = e,
        a = l.useRef(null),
        o = t?.getGuildId() ?? null,
        { mute: u, suppress: c } = (0, w.A)(t),
        g = (0, r.bG)([z.Ay], () => z.Ay.isDeaf()),
        f = null == t || u || c || g,
        { analyticsLocations: I } = (0, A.Ay)();
    function E(e) {
        null != o &&
            ((0, Z.YX)(J.uss.QUICK_ACTIONS, { type: Z.Z5.SOUNDBOARD, value: Z.IP.SETTINGS_OPENED }),
            (0, m.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: I, guildId: o, ...t });
            }));
    }
    let {
            Component: p,
            events: { onClick: _, onMouseEnter: S, onMouseLeave: x },
        } = (0, d.E)(),
        T = en(s),
        N = (0, r.bG)([R.A, F.default], () => R.A.isUserPlayingSounds(F.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(h.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return f || null == t
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(D.A, { guildId: o, channel: t, onClose: T(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ei, {
                ref: a,
                iconComponent: p,
                tooltip: u
                    ? ee.intl.string(ee.t["Ox4/zU"])
                    : c
                      ? ee.intl.string(ee.t["+YBKYI"])
                      : g
                        ? ee.intl.string(ee.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    _(),
                        (0, Z.YX)(J.uss.QUICK_ACTIONS, {
                            type: Z.Z5.SOUNDBOARD,
                            value: Z.IP.PANEL_OPENED,
                            userId: F.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: N,
                defaultColor: N,
                onContextMenu: E,
                onMouseEnter: S,
                onMouseLeave: x,
                isActive: l,
                popoutOpen: l,
                disabled: f,
                isTrayButton: !0,
            });
        },
    });
}
function eu(e) {
    let { voiceChannel: t, locked: n } = e,
        a = l.useRef(null),
        o = (0, r.bG)([Y.A], () => Y.A.getVoiceChannelId() === t?.id),
        u = () => {
            (0, Z.YX)(J.uss.QUICK_ACTIONS, { type: Z.Z5.CALL_BUTTON, value: Z.IP.DISABLED, userId: F.default.getId() }),
                o && f.default.disconnect();
        },
        d = (e, t) => {
            f.default.selectVoiceChannel(e),
                (0, Z.YX)(J.uss.QUICK_ACTIONS, {
                    type: Z.Z5.CALL_BUTTON,
                    value: Z.IP.ENABLED,
                    userId: F.default.getId(),
                    secondaryValue: t,
                });
        },
        [c, g] = l.useTransition(),
        m = (e) => (t) => {
            g(() => {
                e(t);
            }),
                (0, Z.YX)(J.uss.QUICK_ACTIONS, { type: Z.Z5.CALL_BUTTON, value: Z.IP.SETTINGS_OPENED });
        },
        {
            Component: A,
            events: { onMouseEnter: I, onMouseLeave: E },
        } = (0, s.O)(),
        p = en(n),
        _ = (0, L.qZ)(),
        S = o ? A : h._jp;
    return (0, i.jsx)(h.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(L.Ay, { allAvailableChannelRows: _, currentVoiceChannel: t, onClose: p(n), onSelect: d });
        },
        align: "center",
        position: "top",
        animation: h.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ei, {
                ref: a,
                iconComponent: S,
                tooltip: o ? ee.intl.string(ee.t["6vrfgt"]) : ee.intl.string(ee.t.S0W8Z5),
                onClick: o ? u : m(n),
                defaultColor: o ? "disconnect" : void 0,
                onMouseEnter: I,
                onMouseLeave: E,
                onContextMenu: m(n),
                isActive: l,
                onPopoutClick: o ? m(n) : void 0,
                popoutOpen: l,
                isTrayButton: !0,
            });
        },
    });
}
function ed(e) {
    let { voiceChannel: t } = e,
        n = (0, r.bG)([V.A], () => V.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: et.rK }),
                    (0, i.jsxs)("div", {
                        className: et._C,
                        children: [
                            (0, i.jsx)(y.Ay, { guild: n, size: y.Ay.Sizes.SMOL, className: et.$f }),
                            (0, i.jsx)(h.Text, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: et.J5,
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
function ec(e) {
    let { voiceChannel: t } = e,
        n = (0, N.gU)(t),
        l = (0, T.Ay)(t);
    return (0, i.jsxs)("div", {
        className: et.Wh,
        children: [
            null != n &&
                (0, i.jsx)(h.Text, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: et.p,
                    children: (0, i.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != l &&
                (0, i.jsx)(h.Text, { variant: "text-sm/medium", color: "text-muted", className: et.HA, children: l }),
        ],
    });
}
function eh(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        l = (0, r.cf)([H.A], () => ({ quality: H.A.getQuality(), state: H.A.getState(), lastPing: H.A.getLastPing() })),
        s = (0, r.bG)([X.A], () => null != n && X.A.hasVideo(n), [n]),
        a = (0, K.Mn)("VoiceConnectionStatus"),
        o = (0, r.bG)([W.A], () => W.A.hidePersonalInformation);
    return (
        null != n &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(M.A, { ...l, channelId: n, hasVideo: s, connectionStatusTextVariant: "text-sm/medium" }),
                !(a && o) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(ed, { voiceChannel: t }),
                            (0, i.jsx)("div", { className: et.rK }),
                            (0, i.jsx)(ec, { voiceChannel: t }),
                        ],
                    }),
            ],
        })
    );
}
