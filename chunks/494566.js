n.d(t, { GF: () => ed, LK: () => eg, NO: () => eh, Yb: () => eo, pp: () => el, sm: () => eu, un: () => ec });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    s = n(377802),
    l = n(348858),
    o = n(523875),
    d = n(416696),
    c = n(621956),
    u = n(446080),
    h = n(265872),
    m = n(615675),
    p = n(978940),
    g = n(834730),
    f = n(827343),
    _ = n(442433),
    x = n(956793),
    A = n(688810),
    E = n(617354),
    S = n(980923),
    I = n(206018),
    v = n(750765),
    b = n(18235),
    C = n(183184),
    T = n(47167),
    j = n(713654),
    y = n(880144),
    w = n(338771),
    N = n(263063),
    R = n(178442),
    M = n(209932),
    O = n(989799),
    k = n(167579),
    D = n(704877),
    z = n(173660),
    P = n(675991),
    L = n(848362),
    V = n(594831),
    G = n(222692),
    U = n(709562),
    H = n(616356),
    F = n(961350),
    W = n(71393),
    Z = n(430452),
    Y = n(383501),
    X = n(309010),
    B = n(351906),
    K = n(287809),
    q = n(977997),
    Q = n(810412),
    $ = n(589051),
    J = n(46282),
    ee = n(395011),
    et = n(243612),
    en = n(652215),
    ei = n(985018),
    er = n(296841);
function ea(e) {
    let t = r.useRef(null);
    return (
        r.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function es(e) {
    let {
        ref: t,
        isActive: n,
        disabled: r,
        iconComponent: a,
        iconColor: s,
        tooltip: l,
        defaultColor: o = "primaryDark",
        highlightedColor: d = "primaryDark",
        caretColor: c,
        popoutOpen: u,
        onClick: h,
        popoutDisabled: m,
        onPopoutClick: p,
        onMouseEnter: g,
        onMouseLeave: f,
        onContextMenu: _,
        isTrayButton: x,
        ...A
    } = e;
    return (0, i.jsx)(U.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? d : o,
        className: er.x6,
        disabled: r,
        popoutOpen: u,
        popoutDisabled: m,
        label: l,
        isTrayButton: x,
        onMouseEnter: (e) => {
            g?.(e);
        },
        onMouseLeave: (e) => {
            f?.(e);
        },
        iconComponent: a,
        iconColor: s,
        caretColor: c,
        isActive: n,
        onContextMenu: _,
        onPopoutClick: p,
        "aria-label": A["aria-label"],
    });
}
function el(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        { suppress: s, selfMute: l, mute: d } = (0, z.A)(t),
        c = l || d || s,
        u = (0, S.A)(l, d, s, !1),
        { Component: m, play: p, events: g } = (0, o.L)(c ? "unmute" : "mute");
    r.useEffect(() => () => p(), [p, c]);
    let f = ea(n),
        _ = (e) => (t) => {
            e(t), (0, Q.YX)(en.uss.QUICK_ACTIONS, { type: Q.Z5.MICROPHONE, value: Q.IP.SETTINGS_OPENED });
        };
    return (0, i.jsx)(h.Y, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = f(t);
            return (0, i.jsx)(I.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: en.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: h.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: a,
                iconComponent: m,
                isActive: c,
                highlightedColor: "red",
                tooltip: u,
                onClick: () => {
                    (0, C.A)(d, s, en.JJy.OVERLAY),
                        (0, Q.YX)(en.uss.QUICK_ACTIONS, {
                            type: Q.Z5.MICROPHONE,
                            value: c ? Q.IP.ENABLED : Q.IP.DISABLED,
                            userId: F.default.getId(),
                        });
                },
                onPopoutClick: _(n),
                onContextMenu: _(n),
                popoutOpen: r,
                onMouseEnter: () => {
                    g.onMouseEnter();
                },
                onMouseLeave: () => {
                    g.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function eo(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        { selfDeaf: s, deaf: o } = (0, k.A)(t),
        d = s || o,
        {
            Component: c,
            play: u,
            events: { onMouseEnter: p, onMouseLeave: g },
        } = (0, l.I)(d ? "undeafen" : "deafen"),
        f = o ? m.T : c;
    r.useEffect(() => () => u(), [d, u]);
    let _ = () => {
            (0, b.A)(o, en.JJy.OVERLAY),
                (0, Q.YX)(en.uss.QUICK_ACTIONS, {
                    type: Q.Z5.AUDIO,
                    value: o ? Q.IP.ENABLED : Q.IP.DISABLED,
                    userId: F.default.getId(),
                });
        },
        x = (e) => (t) => {
            e(t), (0, Q.YX)(en.uss.QUICK_ACTIONS, { type: Q.Z5.AUDIO, value: Q.IP.SETTINGS_OPENED });
        },
        A = ea(n);
    return (0, i.jsx)(h.Y, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.A, {
                onClose: A(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: en.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: h.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: a,
                iconComponent: f,
                tooltip: (0, E.A)(s, o, !1),
                isActive: d,
                highlightedColor: "red",
                onClick: _,
                onContextMenu: x(n),
                onMouseEnter: p,
                onMouseLeave: g,
                onPopoutClick: x(n),
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}
function ed(e) {
    let { voiceChannel: t, locked: n } = e,
        s = r.useRef(null),
        l = (0, a.bG)([Z.Ay], () => Z.Ay.isVideoEnabled()),
        o = (0, a.bG)([Z.Ay], () => Object.values(Z.Ay.getVideoDevices())[0]),
        d = o?.disabled ?? !0,
        c = !1 === d,
        m = (0, D.A)(t),
        p = (e) => {
            f.A.setVideoEnabled(e);
        },
        g = (e) => (t) => {
            e(t), (0, Q.YX)(en.uss.QUICK_ACTIONS, { type: Q.Z5.CAMERA, value: Q.IP.SETTINGS_OPENED });
        },
        _ = () => {
            d ? (c ? p(!0) : (0, G.A)()) : p(!l),
                (0, Q.YX)(en.uss.QUICK_ACTIONS, {
                    type: Q.Z5.CAMERA,
                    value: l ? Q.IP.DISABLED : Q.IP.ENABLED,
                    userId: F.default.getId(),
                });
        },
        {
            Component: x,
            play: A,
            events: { onMouseEnter: E, onMouseLeave: S },
        } = (0, u.K)(l ? "disable" : "enable"),
        I = null != t ? (0, P.Q)({ enabled: l, cameraUnavailable: d, hasPermission: m, channel: t }) : void 0;
    r.useEffect(() => () => A(), [l, A]);
    let b = ea(n),
        C = null == t || !m;
    return (0, i.jsx)(h.Y, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.A, { onClose: b(t), appContext: en.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: h.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: s,
                iconComponent: x,
                tooltip: I,
                onClick: _,
                isActive: l,
                highlightedColor: "green",
                onPopoutClick: g(n),
                popoutOpen: r,
                onContextMenu: g(n),
                onMouseEnter: E,
                onMouseLeave: S,
                disabled: C,
                isTrayButton: !0,
            });
        },
    });
}
function ec(e) {
    let t,
        { voiceChannel: n, locked: s } = e,
        l = r.useRef(null),
        o = (0, a.bG)([K.default], () => K.default.getCurrentUser()),
        c = (0, D.A)(n),
        u = (0, a.cf)([Z.Ay], () => (0, y.A)(Z.Ay)),
        m = (0, a.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
        p = (0, a.bG)([ee.A], () => ee.A.getTargetPID()),
        g = (0, J.y)({ pid: p, allowOneClickGoLive: !0, analyticsLocation: en.ThZ.UNLOCKED_OVERLAY }),
        f = () => {
            g(),
                (0, Q.YX)(en.uss.QUICK_ACTIONS, { type: Q.Z5.GO_LIVE, value: Q.IP.ENABLED, userId: F.default.getId() });
        },
        _ = null != m;
    if (_) t = ei.intl.string(ei.t.S5anIc);
    else if (null != n) {
        let e = (0, et.qv)();
        t = c
            ? null != e
                ? ei.intl.format(ei.t.AB5gTy, { game: e.name })
                : ei.intl.string(ei.t.FeUKeA)
            : ei.intl.string(ei.t.uQn9B8);
    }
    let x = () => {
            if (_)
                return (
                    (0, Q.YX)(en.uss.QUICK_ACTIONS, {
                        type: Q.Z5.GO_LIVE,
                        value: Q.IP.DISABLED,
                        userId: F.default.getId(),
                    }),
                    (0, w.A)(m, !1)
                );
            f();
        },
        A = (e) => (t) => {
            e(t), (0, Q.YX)(en.uss.QUICK_ACTIONS, { type: Q.Z5.SCREEN_SHARE, value: Q.IP.SETTINGS_OPENED });
        },
        {
            Component: E,
            events: { onMouseEnter: S, onMouseLeave: I },
            play: v,
        } = (0, d.c)(_ ? "disable" : "enable");
    r.useEffect(() => () => v(), [_, v]);
    let b = ea(s);
    return (0, i.jsx)(h.Y, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(L.A, {
                channel: n,
                currentUser: o,
                activeStreams: _ ? [m] : [],
                handleGoLive: f,
                onClose: b(t),
                appContext: en.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: h.Y.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: a } = n;
            return (0, i.jsx)(es, {
                ref: l,
                iconComponent: E,
                tooltip: t,
                "aria-label": ei.intl.string(ei.t.FeUKeA),
                isActive: _,
                highlightedColor: "green",
                onClick: x,
                popoutOpen: a,
                popoutDisabled: !_,
                onPopoutClick: A(r),
                onContextMenu: A(r),
                onMouseEnter: S,
                onMouseLeave: I,
                disabled: !u || !c,
                isTrayButton: !0,
            });
        },
    });
}
function eu(e) {
    let { voiceChannel: t, locked: s } = e,
        l = r.useRef(null),
        o = t?.getGuildId() ?? null,
        { mute: d, suppress: u } = (0, z.A)(t),
        m = (0, a.bG)([Z.Ay], () => Z.Ay.isDeaf()),
        p = null == t || d || u || m,
        { analyticsLocations: g } = (0, A.Ay)();
    function f(e) {
        null != o &&
            ((0, Q.YX)(en.uss.QUICK_ACTIONS, { type: Q.Z5.SOUNDBOARD, value: Q.IP.SETTINGS_OPENED }),
            (0, _.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: g, guildId: o, ...t });
            }));
    }
    let {
            Component: x,
            events: { onClick: E, onMouseEnter: S, onMouseLeave: I },
        } = (0, c.E)(),
        v = ea(s),
        b = (0, a.bG)([M.A, F.default], () => M.A.isUserPlayingSounds(F.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(h.Y, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return p || null == t
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(O.A, { guildId: o, channel: t, onClose: v(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: h.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: l,
                iconComponent: x,
                tooltip: d
                    ? ei.intl.string(ei.t["Ox4/zU"])
                    : u
                      ? ei.intl.string(ei.t["+YBKYI"])
                      : m
                        ? ei.intl.string(ei.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    E(),
                        (0, Q.YX)(en.uss.QUICK_ACTIONS, {
                            type: Q.Z5.SOUNDBOARD,
                            value: Q.IP.PANEL_OPENED,
                            userId: F.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: b,
                defaultColor: b,
                onContextMenu: f,
                onMouseEnter: S,
                onMouseLeave: I,
                isActive: r,
                popoutOpen: r,
                disabled: p,
                isTrayButton: !0,
            });
        },
    });
}
function eh(e) {
    let { voiceChannel: t, locked: n } = e,
        l = r.useRef(null),
        o = (0, a.bG)([X.A], () => X.A.getVoiceChannelId() === t?.id),
        d = () => {
            (0, Q.YX)(en.uss.QUICK_ACTIONS, {
                type: Q.Z5.CALL_BUTTON,
                value: Q.IP.DISABLED,
                userId: F.default.getId(),
            }),
                o && x.default.disconnect();
        },
        c = (e, t) => {
            x.default.selectVoiceChannel(e),
                (0, Q.YX)(en.uss.QUICK_ACTIONS, {
                    type: Q.Z5.CALL_BUTTON,
                    value: Q.IP.ENABLED,
                    userId: F.default.getId(),
                    secondaryValue: t,
                });
        },
        [u, m] = r.useTransition(),
        g = (e) => (t) => {
            m(() => {
                e(t);
            }),
                (0, Q.YX)(en.uss.QUICK_ACTIONS, { type: Q.Z5.CALL_BUTTON, value: Q.IP.SETTINGS_OPENED });
        },
        {
            Component: f,
            events: { onMouseEnter: _, onMouseLeave: A },
        } = (0, s.O)(),
        E = ea(n),
        S = (0, V.qZ)(),
        I = o ? f : p._;
    return (0, i.jsx)(h.Y, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(V.Ay, { allAvailableChannelRows: S, currentVoiceChannel: t, onClose: E(n), onSelect: c });
        },
        align: "center",
        position: "top",
        animation: h.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: l,
                iconComponent: I,
                tooltip: o ? ei.intl.string(ei.t["6vrfgt"]) : ei.intl.string(ei.t.S0W8Z5),
                onClick: o ? d : g(n),
                defaultColor: o ? "disconnect" : void 0,
                onMouseEnter: _,
                onMouseLeave: A,
                onContextMenu: g(n),
                isActive: r,
                onPopoutClick: o ? g(n) : void 0,
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}
function em(e) {
    let { voiceChannel: t } = e,
        n = (0, a.bG)([W.A], () => W.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: er.rK }),
                    (0, i.jsxs)("div", {
                        className: er._C,
                        children: [
                            (0, i.jsx)(N.Ay, { guild: n, size: N.Ay.Sizes.SMOL, className: er.$f }),
                            (0, i.jsx)(g.E, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: er.J5,
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
function ep(e) {
    let { voiceChannel: t } = e,
        n = (0, j.gU)(t),
        r = (0, T.Ay)(t);
    return (0, i.jsxs)("div", {
        className: er.Wh,
        children: [
            null != n &&
                (0, i.jsx)(g.E, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: er.p,
                    children: (0, i.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != r &&
                (0, i.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", className: er.HA, children: r }),
        ],
    });
}
function eg(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        r = (0, a.cf)([Y.A], () => ({ quality: Y.A.getQuality(), state: Y.A.getState(), lastPing: Y.A.getLastPing() })),
        s = (0, a.bG)([q.A], () => null != n && q.A.hasVideo(n), [n]),
        l = (0, $.Mn)("VoiceConnectionStatus"),
        o = (0, a.bG)([B.A], () => B.A.hidePersonalInformation);
    return (
        null != n &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(R.A, { ...r, channelId: n, hasVideo: s, connectionStatusTextVariant: "text-sm/medium" }),
                !(l && o) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(em, { voiceChannel: t }),
                            (0, i.jsx)("div", { className: er.rK }),
                            (0, i.jsx)(ep, { voiceChannel: t }),
                        ],
                    }),
            ],
        })
    );
}
