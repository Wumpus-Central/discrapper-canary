n.d(t, { GF: () => eo, LK: () => em, NO: () => ec, Yb: () => ea, pp: () => er, sm: () => eu, un: () => ed });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(377802),
    a = n(348858),
    o = n(416696),
    d = n(621956),
    u = n(446080),
    c = n(397927),
    h = n(827343),
    g = n(442433),
    m = n(956793),
    p = n(793574),
    A = n(688810),
    x = n(617354),
    E = n(980923),
    f = n(206018),
    S = n(750765),
    I = n(18235),
    T = n(183184),
    v = n(47167),
    C = n(713654),
    j = n(880144),
    y = n(338771),
    w = n(263063),
    O = n(178442),
    _ = n(209932),
    N = n(989799),
    b = n(167579),
    R = n(704877),
    M = n(173660),
    L = n(675991),
    z = n(848362),
    D = n(594831),
    k = n(222692),
    P = n(709562),
    G = n(996744),
    V = n(85612),
    U = n(277342),
    H = n(616356),
    Y = n(961350),
    Z = n(71393),
    W = n(430452),
    X = n(383501),
    F = n(309010),
    K = n(287809),
    B = n(977997),
    q = n(810412),
    Q = n(823901),
    J = n(592598),
    $ = n(395011),
    ee = n(243612),
    et = n(652215),
    en = n(985018),
    ei = n(647990);
function es(e) {
    let t = s.useRef(null);
    return (
        s.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function el(e) {
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
        isTrayButton: E,
        ...f
    } = e;
    return (0, i.jsx)(P.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? d : o,
        className: ei.x6,
        disabled: s,
        popoutOpen: c,
        popoutDisabled: g,
        label: a,
        isTrayButton: E,
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
        "aria-label": f["aria-label"],
    });
}
function er(e) {
    let { voiceChannel: t, locked: n } = e,
        r = s.useRef(null),
        { suppress: a, selfMute: o, mute: d } = (0, M.A)(t),
        u = o || d || a,
        h = (0, E.A)(o, d, a, !1),
        { Component: g, play: m, events: A } = (0, U.q)(u);
    s.useEffect(() => () => m(), [m, u]);
    let x = es(n),
        S = (e) => (t) => {
            e(t), (0, q.YX)(et.uss.QUICK_ACTIONS, { type: q.Z5.MICROPHONE, value: q.IP.SETTINGS_OPENED });
        },
        I = (0, ee.b4)()?.id,
        v = (0, l.bG)([J.A], () => J.A.isLimitedInteractionOverrideEnabled(I)),
        C = (0, G.Cg)({ location: p.A.OVERLAY, autoTrackExposure: !0 });
    return (0, i.jsx)(c.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = x(t);
            return C
                ? (0, i.jsx)(V.a, { wide: !0, showOutputDevices: !0, onSettingsButtonClick: n, showSearchBar: !v })
                : (0, i.jsx)(f.A, {
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
                { isShown: s } = t;
            return (0, i.jsx)(el, {
                ref: r,
                iconComponent: g,
                isActive: u,
                highlightedColor: "red",
                tooltip: h,
                onClick: () => {
                    (0, T.A)(d, a, et.JJy.OVERLAY),
                        (0, q.YX)(et.uss.QUICK_ACTIONS, {
                            type: q.Z5.MICROPHONE,
                            value: u ? q.IP.ENABLED : q.IP.DISABLED,
                            userId: Y.default.getId(),
                        });
                },
                onPopoutClick: S(n),
                onContextMenu: S(n),
                popoutOpen: s,
                onMouseEnter: () => {
                    A.onMouseEnter();
                },
                onMouseLeave: () => {
                    A.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        l = s.useRef(null),
        { selfDeaf: r, deaf: o } = (0, b.A)(t),
        d = r || o,
        {
            Component: u,
            play: h,
            events: { onMouseEnter: g, onMouseLeave: m },
        } = (0, a.I)(d ? "undeafen" : "deafen"),
        p = o ? c.TJE : u;
    s.useEffect(() => () => h(), [d, h]);
    let A = () => {
            (0, I.A)(o, et.JJy.OVERLAY),
                (0, q.YX)(et.uss.QUICK_ACTIONS, {
                    type: q.Z5.AUDIO,
                    value: o ? q.IP.ENABLED : q.IP.DISABLED,
                    userId: Y.default.getId(),
                });
        },
        E = (e) => (t) => {
            e(t), (0, q.YX)(et.uss.QUICK_ACTIONS, { type: q.Z5.AUDIO, value: q.IP.SETTINGS_OPENED });
        },
        S = es(n);
    return (0, i.jsx)(c.YNO, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(f.A, {
                onClose: S(t),
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
                { isShown: s } = t;
            return (0, i.jsx)(el, {
                ref: l,
                iconComponent: p,
                tooltip: (0, x.A)(r, o, !1),
                isActive: d,
                highlightedColor: "red",
                onClick: A,
                onContextMenu: E(n),
                onMouseEnter: g,
                onMouseLeave: m,
                onPopoutClick: E(n),
                popoutOpen: s,
                isTrayButton: !0,
            });
        },
    });
}
function eo(e) {
    let { voiceChannel: t, locked: n } = e,
        r = s.useRef(null),
        a = (0, l.bG)([W.Ay], () => W.Ay.isVideoEnabled()),
        o = (0, l.bG)([W.Ay], () => Object.values(W.Ay.getVideoDevices())[0]),
        d = o?.disabled ?? !0,
        g = !1 === d,
        m = (0, R.A)(t),
        p = (e) => {
            h.A.setVideoEnabled(e);
        },
        A = (e) => (t) => {
            e(t), (0, q.YX)(et.uss.QUICK_ACTIONS, { type: q.Z5.CAMERA, value: q.IP.SETTINGS_OPENED });
        },
        x = () => {
            d ? (g ? p(!0) : (0, k.A)()) : p(!a),
                (0, q.YX)(et.uss.QUICK_ACTIONS, {
                    type: q.Z5.CAMERA,
                    value: a ? q.IP.DISABLED : q.IP.ENABLED,
                    userId: Y.default.getId(),
                });
        },
        {
            Component: E,
            play: f,
            events: { onMouseEnter: I, onMouseLeave: T },
        } = (0, u.K)(a ? "disable" : "enable"),
        v = null != t ? (0, L.Q)({ enabled: a, cameraUnavailable: d, hasPermission: m, channel: t }) : void 0;
    s.useEffect(() => () => f(), [a, f]);
    let C = es(n),
        j = null == t || !m;
    return (0, i.jsx)(c.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(S.A, { onClose: C(t), appContext: et.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, i.jsx)(el, {
                ref: r,
                iconComponent: E,
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
function ed(e) {
    let t,
        { voiceChannel: n, locked: r } = e,
        a = s.useRef(null),
        d = (0, l.bG)([K.default], () => K.default.getCurrentUser()),
        u = (0, R.A)(n),
        h = (0, l.cf)([W.Ay], () => (0, j.A)(W.Ay)),
        g = (0, l.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
        m = (0, l.bG)([$.A], () => $.A.getTargetPID()),
        p = (0, Q.y)({ pid: m, allowOneClickGoLive: !0, analyticsLocation: et.ThZ.UNLOCKED_OVERLAY }),
        A = () => {
            p(),
                (0, q.YX)(et.uss.QUICK_ACTIONS, { type: q.Z5.GO_LIVE, value: q.IP.ENABLED, userId: Y.default.getId() });
        },
        x = null != g;
    if (x) t = en.intl.string(en.t.S5anIc);
    else if (null != n) {
        let e = (0, ee.qv)();
        t = u
            ? null != e
                ? en.intl.format(en.t.AB5gTy, { game: e.name })
                : en.intl.string(en.t.FeUKeA)
            : en.intl.string(en.t.uQn9B8);
    }
    let E = () => {
            if (x)
                return (
                    (0, q.YX)(et.uss.QUICK_ACTIONS, {
                        type: q.Z5.GO_LIVE,
                        value: q.IP.DISABLED,
                        userId: Y.default.getId(),
                    }),
                    (0, y.A)(g, !1)
                );
            A();
        },
        f = (e) => (t) => {
            e(t), (0, q.YX)(et.uss.QUICK_ACTIONS, { type: q.Z5.SCREEN_SHARE, value: q.IP.SETTINGS_OPENED });
        },
        {
            Component: S,
            events: { onMouseEnter: I, onMouseLeave: T },
            play: v,
        } = (0, o.c)(x ? "disable" : "enable");
    s.useEffect(() => () => v(), [x, v]);
    let C = es(r);
    return (0, i.jsx)(c.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(z.A, {
                channel: n,
                currentUser: d,
                activeStreams: x ? [g] : [],
                handleGoLive: A,
                onClose: C(t),
                appContext: et.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, n) => {
            let { onClick: s } = e,
                { isShown: l } = n;
            return (0, i.jsx)(el, {
                ref: a,
                iconComponent: S,
                tooltip: t,
                "aria-label": en.intl.string(en.t.FeUKeA),
                isActive: x,
                highlightedColor: "green",
                onClick: E,
                popoutOpen: l,
                popoutDisabled: !x,
                onPopoutClick: f(s),
                onContextMenu: f(s),
                onMouseEnter: I,
                onMouseLeave: T,
                disabled: !h || !u,
                isTrayButton: !0,
            });
        },
    });
}
function eu(e) {
    let { voiceChannel: t, locked: r } = e,
        a = s.useRef(null),
        o = t?.getGuildId() ?? null,
        { mute: u, suppress: h } = (0, M.A)(t),
        m = (0, l.bG)([W.Ay], () => W.Ay.isDeaf()),
        p = null == t || u || h || m,
        { analyticsLocations: x } = (0, A.Ay)();
    function E(e) {
        null != o &&
            ((0, q.YX)(et.uss.QUICK_ACTIONS, { type: q.Z5.SOUNDBOARD, value: q.IP.SETTINGS_OPENED }),
            (0, g.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: x, guildId: o, ...t });
            }));
    }
    let {
            Component: f,
            events: { onClick: S, onMouseEnter: I, onMouseLeave: T },
        } = (0, d.E)(),
        v = es(r),
        C = (0, l.bG)([_.A, Y.default], () => _.A.isUserPlayingSounds(Y.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(c.YNO, {
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
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, i.jsx)(el, {
                ref: a,
                iconComponent: f,
                tooltip: u
                    ? en.intl.string(en.t["Ox4/zU"])
                    : h
                      ? en.intl.string(en.t["+YBKYI"])
                      : m
                        ? en.intl.string(en.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    S(),
                        (0, q.YX)(et.uss.QUICK_ACTIONS, {
                            type: q.Z5.SOUNDBOARD,
                            value: q.IP.PANEL_OPENED,
                            userId: Y.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: C,
                defaultColor: C,
                onContextMenu: E,
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
function ec(e) {
    let { voiceChannel: t, locked: n } = e,
        a = s.useRef(null),
        o = (0, l.bG)([F.A], () => F.A.getVoiceChannelId() === t?.id),
        d = () => {
            (0, q.YX)(et.uss.QUICK_ACTIONS, {
                type: q.Z5.CALL_BUTTON,
                value: q.IP.DISABLED,
                userId: Y.default.getId(),
            }),
                o && m.default.disconnect();
        },
        u = (e, t) => {
            m.default.selectVoiceChannel(e),
                (0, q.YX)(et.uss.QUICK_ACTIONS, {
                    type: q.Z5.CALL_BUTTON,
                    value: q.IP.ENABLED,
                    userId: Y.default.getId(),
                    secondaryValue: t,
                });
        },
        [h, g] = s.useTransition(),
        p = (e) => (t) => {
            g(() => {
                e(t);
            }),
                (0, q.YX)(et.uss.QUICK_ACTIONS, { type: q.Z5.CALL_BUTTON, value: q.IP.SETTINGS_OPENED });
        },
        {
            Component: A,
            events: { onMouseEnter: x, onMouseLeave: E },
        } = (0, r.O)(),
        f = es(n),
        S = (0, D.qZ)(),
        I = o ? A : c._jp;
    return (0, i.jsx)(c.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(D.Ay, { allAvailableChannelRows: S, currentVoiceChannel: t, onClose: f(n), onSelect: u });
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, i.jsx)(el, {
                ref: a,
                iconComponent: I,
                tooltip: o ? en.intl.string(en.t["6vrfgt"]) : en.intl.string(en.t.S0W8Z5),
                onClick: o ? d : p(n),
                defaultColor: o ? "disconnect" : void 0,
                onMouseEnter: x,
                onMouseLeave: E,
                onContextMenu: p(n),
                isActive: s,
                onPopoutClick: o ? p(n) : void 0,
                popoutOpen: s,
                isTrayButton: !0,
            });
        },
    });
}
function eh(e) {
    let { voiceChannel: t } = e,
        n = (0, l.bG)([Z.A], () => Z.A.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(w.Ay, { guild: n, size: w.Ay.Sizes.SMOL, className: ei.$f }),
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
function eg(e) {
    let { voiceChannel: t } = e,
        n = (0, C.gU)(t),
        s = (0, v.Ay)(t);
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
            null != s &&
                (0, i.jsx)(c.Text, { variant: "text-sm/medium", color: "text-muted", className: ei.HA, children: s }),
        ],
    });
}
function em(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        s = (0, l.cf)([X.A], () => ({ quality: X.A.getQuality(), state: X.A.getState(), lastPing: X.A.getLastPing() })),
        r = (0, l.bG)([B.A], () => null != n && B.A.hasVideo(n), [n]);
    return (
        null != n &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O.A, { ...s, channelId: n, hasVideo: r, connectionStatusTextVariant: "text-sm/medium" }),
                (0, i.jsx)(eh, { voiceChannel: t }),
                (0, i.jsx)("div", { className: ei.rK }),
                (0, i.jsx)(eg, { voiceChannel: t }),
            ],
        })
    );
}
