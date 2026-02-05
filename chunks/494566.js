n.d(t, { GF: () => eo, LK: () => em, NO: () => ec, Yb: () => er, pp: () => es, sm: () => eu, un: () => ed });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(377802),
    r = n(348858),
    o = n(416696),
    d = n(621956),
    u = n(446080),
    c = n(397927),
    h = n(827343),
    A = n(442433),
    m = n(956793),
    g = n(793574),
    p = n(688810),
    f = n(617354),
    _ = n(980923),
    E = n(206018),
    x = n(750765),
    S = n(18235),
    I = n(183184),
    T = n(47167),
    C = n(713654),
    v = n(880144),
    y = n(338771),
    N = n(263063),
    O = n(178442),
    b = n(209932),
    j = n(989799),
    w = n(167579),
    L = n(704877),
    R = n(173660),
    D = n(675991),
    M = n(848362),
    k = n(594831),
    z = n(222692),
    V = n(709562),
    U = n(996744),
    P = n(85612),
    G = n(277342),
    H = n(616356),
    Y = n(961350),
    F = n(71393),
    W = n(430452),
    K = n(383501),
    Z = n(309010),
    B = n(287809),
    X = n(977997),
    J = n(810412),
    Q = n(823901),
    q = n(592598),
    $ = n(395011),
    ee = n(243612),
    et = n(652215),
    en = n(985018),
    ei = n(991256);
function el(e) {
    let t = l.useRef(null);
    return (
        l.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function ea(e) {
    let {
        ref: t,
        isActive: n,
        disabled: l,
        iconComponent: a,
        iconColor: s,
        tooltip: r,
        defaultColor: o = "primaryDark",
        highlightedColor: d = "primaryDark",
        caretColor: u,
        popoutOpen: c,
        onClick: h,
        popoutDisabled: A,
        onPopoutClick: m,
        onMouseEnter: g,
        onMouseLeave: p,
        onContextMenu: f,
        isTrayButton: _,
        ...E
    } = e;
    return (0, i.jsx)(V.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? d : o,
        className: ei.x6,
        disabled: l,
        popoutOpen: c,
        popoutDisabled: A,
        label: r,
        isTrayButton: _,
        onMouseEnter: (e) => {
            g?.(e);
        },
        onMouseLeave: (e) => {
            p?.(e);
        },
        iconComponent: a,
        iconColor: s,
        caretColor: u,
        isActive: n,
        onContextMenu: f,
        onPopoutClick: m,
        "aria-label": E["aria-label"],
    });
}
function es(e) {
    let { voiceChannel: t, locked: n } = e,
        s = l.useRef(null),
        { suppress: r, selfMute: o, mute: d } = (0, R.A)(t),
        u = o || d || r,
        h = (0, _.A)(o, d, r, !1),
        { Component: A, play: m, events: p } = (0, G.q)(u);
    l.useEffect(() => () => m(), [m, u]);
    let f = el(n),
        x = (e) => (t) => {
            e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, { type: J.Z5.MICROPHONE, value: J.IP.SETTINGS_OPENED });
        },
        S = (0, ee.b4)()?.id,
        T = (0, a.bG)([q.A], () => q.A.isLimitedInteractionOverrideEnabled(S)),
        C = (0, U.Cg)({ location: g.A.OVERLAY, autoTrackExposure: !0 });
    return (0, i.jsx)(c.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = f(t);
            return C
                ? (0, i.jsx)(P.a, { wide: !0, showOutputDevices: !0, onSettingsButtonClick: n, showSearchBar: !T })
                : (0, i.jsx)(E.A, {
                      onClose: n,
                      maybeRenderPTTCheckbox: !0,
                      renderInputProfiles: !0,
                      renderInputDevices: !0,
                      renderInputVolume: !0,
                      maybeRenderInputMeter: !0,
                      renderSettingsButton: !0,
                      appContext: et.BRT.OVERLAY,
                  });
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ea, {
                ref: s,
                iconComponent: A,
                isActive: u,
                highlightedColor: "red",
                tooltip: h,
                onClick: () => {
                    (0, I.A)(d, r, et.JJy.OVERLAY),
                        (0, J.YX)(et.uss.QUICK_ACTIONS, {
                            type: J.Z5.MICROPHONE,
                            value: u ? J.IP.ENABLED : J.IP.DISABLED,
                            userId: Y.default.getId(),
                        });
                },
                onPopoutClick: x(n),
                onContextMenu: x(n),
                popoutOpen: l,
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
function er(e) {
    let { voiceChannel: t, locked: n } = e,
        a = l.useRef(null),
        { selfDeaf: s, deaf: o } = (0, w.A)(t),
        d = s || o,
        {
            Component: u,
            play: h,
            events: { onMouseEnter: A, onMouseLeave: m },
        } = (0, r.I)(d ? "undeafen" : "deafen"),
        g = o ? c.TJE : u;
    l.useEffect(() => () => h(), [d, h]);
    let p = () => {
            (0, S.A)(o, et.JJy.OVERLAY),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.AUDIO,
                    value: o ? J.IP.ENABLED : J.IP.DISABLED,
                    userId: Y.default.getId(),
                });
        },
        _ = (e) => (t) => {
            e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, { type: J.Z5.AUDIO, value: J.IP.SETTINGS_OPENED });
        },
        x = el(n);
    return (0, i.jsx)(c.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.A, {
                onClose: x(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: et.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ea, {
                ref: a,
                iconComponent: g,
                tooltip: (0, f.A)(s, o, !1),
                isActive: d,
                highlightedColor: "red",
                onClick: p,
                onContextMenu: _(n),
                onMouseEnter: A,
                onMouseLeave: m,
                onPopoutClick: _(n),
                popoutOpen: l,
                isTrayButton: !0,
            });
        },
    });
}
function eo(e) {
    let { voiceChannel: t, locked: n } = e,
        s = l.useRef(null),
        r = (0, a.bG)([W.A], () => W.A.isVideoEnabled()),
        o = (0, a.bG)([W.A], () => Object.values(W.A.getVideoDevices())[0]),
        d = o?.disabled ?? !0,
        A = !1 === d,
        m = (0, L.A)(t),
        g = (e) => {
            h.A.setVideoEnabled(e);
        },
        p = (e) => (t) => {
            e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, { type: J.Z5.CAMERA, value: J.IP.SETTINGS_OPENED });
        },
        f = () => {
            d ? (A ? g(!0) : (0, z.A)()) : g(!r),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.CAMERA,
                    value: r ? J.IP.DISABLED : J.IP.ENABLED,
                    userId: Y.default.getId(),
                });
        },
        {
            Component: _,
            play: E,
            events: { onMouseEnter: S, onMouseLeave: I },
        } = (0, u.K)(r ? "disable" : "enable"),
        T = null != t ? (0, D.Q)({ enabled: r, cameraUnavailable: d, hasPermission: m, channel: t }) : void 0;
    l.useEffect(() => () => E(), [r, E]);
    let C = el(n),
        v = null == t || !m;
    return (0, i.jsx)(c.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(x.A, { onClose: C(t), appContext: et.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ea, {
                ref: s,
                iconComponent: _,
                tooltip: T,
                onClick: f,
                isActive: r,
                highlightedColor: "green",
                onPopoutClick: p(n),
                popoutOpen: l,
                onContextMenu: p(n),
                onMouseEnter: S,
                onMouseLeave: I,
                disabled: v,
                isTrayButton: !0,
            });
        },
    });
}
function ed(e) {
    let t,
        { voiceChannel: n, locked: s } = e,
        r = l.useRef(null),
        d = (0, a.bG)([B.default], () => B.default.getCurrentUser()),
        u = (0, L.A)(n),
        h = (0, a.cf)([W.A], () => (0, v.A)(W.A)),
        A = (0, a.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
        m = (0, a.bG)([$.A], () => $.A.getTargetPID()),
        g = (0, Q.y)({ pid: m, allowOneClickGoLive: !0, analyticsLocation: et.ThZ.UNLOCKED_OVERLAY }),
        p = () => {
            g(),
                (0, J.YX)(et.uss.QUICK_ACTIONS, { type: J.Z5.GO_LIVE, value: J.IP.ENABLED, userId: Y.default.getId() });
        },
        f = null != A;
    if (f) t = en.intl.string(en.t.S5anIc);
    else if (null != n) {
        let e = (0, ee.qv)();
        t = u
            ? null != e
                ? en.intl.format(en.t.AB5gTy, { game: e.name })
                : en.intl.string(en.t.FeUKeA)
            : en.intl.string(en.t.uQn9B8);
    }
    let _ = () => {
            if (f)
                return (
                    (0, J.YX)(et.uss.QUICK_ACTIONS, {
                        type: J.Z5.GO_LIVE,
                        value: J.IP.DISABLED,
                        userId: Y.default.getId(),
                    }),
                    (0, y.A)(A, !1)
                );
            p();
        },
        E = (e) => (t) => {
            e(t), (0, J.YX)(et.uss.QUICK_ACTIONS, { type: J.Z5.SCREEN_SHARE, value: J.IP.SETTINGS_OPENED });
        },
        {
            Component: x,
            events: { onMouseEnter: S, onMouseLeave: I },
            play: T,
        } = (0, o.c)(f ? "disable" : "enable");
    l.useEffect(() => () => T(), [f, T]);
    let C = el(s);
    return (0, i.jsx)(c.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(M.A, {
                channel: n,
                currentUser: d,
                activeStreams: f ? [A] : [],
                handleGoLive: p,
                onClose: C(t),
                appContext: et.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, i.jsx)(ea, {
                ref: r,
                iconComponent: x,
                tooltip: t,
                "aria-label": en.intl.string(en.t.FeUKeA),
                isActive: f,
                highlightedColor: "green",
                onClick: _,
                popoutOpen: a,
                popoutDisabled: !f,
                onPopoutClick: E(l),
                onContextMenu: E(l),
                onMouseEnter: S,
                onMouseLeave: I,
                disabled: !h || !u,
                isTrayButton: !0,
            });
        },
    });
}
function eu(e) {
    let { voiceChannel: t, locked: s } = e,
        r = l.useRef(null),
        o = t?.getGuildId() ?? null,
        { mute: u, suppress: h } = (0, R.A)(t),
        m = (0, a.bG)([W.A], () => W.A.isDeaf()),
        g = null == t || u || h || m,
        { analyticsLocations: f } = (0, p.Ay)();
    function _(e) {
        null != o &&
            ((0, J.YX)(et.uss.QUICK_ACTIONS, { type: J.Z5.SOUNDBOARD, value: J.IP.SETTINGS_OPENED }),
            (0, A.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: f, guildId: o, ...t });
            }));
    }
    let {
            Component: E,
            events: { onClick: x, onMouseEnter: S, onMouseLeave: I },
        } = (0, d.E)(),
        T = el(s),
        C = (0, a.bG)([b.A, Y.default], () => b.A.isUserPlayingSounds(Y.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(c.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return g || null == t
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(j.A, { guildId: o, channel: t, onClose: T(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ea, {
                ref: r,
                iconComponent: E,
                tooltip: u
                    ? en.intl.string(en.t["Ox4/zU"])
                    : h
                      ? en.intl.string(en.t["+YBKYI"])
                      : m
                        ? en.intl.string(en.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    x(),
                        (0, J.YX)(et.uss.QUICK_ACTIONS, {
                            type: J.Z5.SOUNDBOARD,
                            value: J.IP.PANEL_OPENED,
                            userId: Y.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: C,
                defaultColor: C,
                onContextMenu: _,
                onMouseEnter: S,
                onMouseLeave: I,
                isActive: l,
                popoutOpen: l,
                disabled: g,
                isTrayButton: !0,
            });
        },
    });
}
function ec(e) {
    let { voiceChannel: t, locked: n } = e,
        r = l.useRef(null),
        o = (0, a.bG)([Z.A], () => Z.A.getVoiceChannelId() === t?.id),
        d = () => {
            (0, J.YX)(et.uss.QUICK_ACTIONS, {
                type: J.Z5.CALL_BUTTON,
                value: J.IP.DISABLED,
                userId: Y.default.getId(),
            }),
                o && m.default.disconnect();
        },
        u = (e, t) => {
            m.default.selectVoiceChannel(e),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.CALL_BUTTON,
                    value: J.IP.ENABLED,
                    userId: Y.default.getId(),
                    secondaryValue: t,
                });
        },
        [h, A] = l.useTransition(),
        g = (e) => (t) => {
            A(() => {
                e(t);
            }),
                (0, J.YX)(et.uss.QUICK_ACTIONS, { type: J.Z5.CALL_BUTTON, value: J.IP.SETTINGS_OPENED });
        },
        {
            Component: p,
            events: { onMouseEnter: f, onMouseLeave: _ },
        } = (0, s.O)(),
        E = el(n),
        x = (0, k.qZ)(),
        S = o ? p : c._jp;
    return (0, i.jsx)(c.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(k.Ay, { allAvailableChannelRows: x, currentVoiceChannel: t, onClose: E(n), onSelect: u });
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(ea, {
                ref: r,
                iconComponent: S,
                tooltip: o ? en.intl.string(en.t["6vrfgt"]) : en.intl.string(en.t.S0W8Z5),
                onClick: o ? d : g(n),
                defaultColor: o ? "disconnect" : void 0,
                onMouseEnter: f,
                onMouseLeave: _,
                onContextMenu: g(n),
                isActive: l,
                onPopoutClick: o ? g(n) : void 0,
                popoutOpen: l,
                isTrayButton: !0,
            });
        },
    });
}
function eh(e) {
    let { voiceChannel: t } = e,
        n = (0, a.bG)([F.A], () => F.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: ei.rK }),
                    (0, i.jsxs)("div", {
                        className: ei._C,
                        children: [
                            (0, i.jsx)(N.A, { guild: n, size: N.A.Sizes.SMOL, className: ei.$f }),
                            (0, i.jsx)(c.Text, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: ei.J5,
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
function eA(e) {
    let { voiceChannel: t } = e,
        n = (0, C.gU)(t),
        l = (0, T.Ay)(t);
    return (0, i.jsxs)("div", {
        className: ei.Wh,
        children: [
            null != n &&
                (0, i.jsx)(c.Text, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: ei.p,
                    children: (0, i.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != l &&
                (0, i.jsx)(c.Text, { variant: "text-sm/medium", color: "text-muted", className: ei.HA, children: l }),
        ],
    });
}
function em(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        l = (0, a.cf)([K.A], () => ({ quality: K.A.getQuality(), state: K.A.getState(), lastPing: K.A.getLastPing() })),
        s = (0, a.bG)([X.A], () => null != n && X.A.hasVideo(n), [n]);
    return (
        null != n &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O.A, { ...l, channelId: n, hasVideo: s, connectionStatusTextVariant: "text-sm/medium" }),
                (0, i.jsx)(eh, { voiceChannel: t }),
                (0, i.jsx)("div", { className: ei.rK }),
                (0, i.jsx)(eA, { voiceChannel: t }),
            ],
        })
    );
}
