n.d(t, {
    L: () => eb,
    N3: () => ed,
    Ox: () => ec,
    SE: () => eu,
    aG: () => eh,
    c_: () => ep,
    sm: () => ef,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    a = n(442837),
    l = n(685072),
    o = n(400354),
    s = n(864094),
    c = n(582019),
    u = n(75735),
    d = n(481060),
    f = n(846027),
    h = n(239091),
    p = n(287734),
    m = n(100527),
    g = n(906732),
    b = n(571250),
    y = n(628581),
    O = n(659580),
    v = n(855844),
    E = n(793865),
    S = n(55311),
    x = n(575175),
    I = n(933557),
    C = n(471445),
    j = n(74299),
    _ = n(803647),
    Z = n(565138),
    N = n(853170),
    w = n(917405),
    T = n(763296),
    P = n(603074),
    A = n(879815),
    k = n(189771),
    D = n(294629),
    R = n(67844),
    L = n(544384),
    M = n(890828),
    z = n(560688),
    V = n(871499),
    U = n(875527),
    W = n(306609),
    G = n(8404),
    F = n(199902),
    H = n(314897),
    B = n(430824),
    Y = n(131951),
    Q = n(19780),
    K = n(944486),
    X = n(594174),
    J = n(979651),
    q = n(444295),
    $ = n(371053),
    ee = n(624864),
    et = n(610394),
    en = n(388627),
    ei = n(981631),
    er = n(388032),
    ea = n(936046);
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function eo(e) {
    let t = r.useRef(null);
    return (
        r.useEffect(() => {
            if (e) {
                var n;
                null == (n = t.current) || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function es(e) {
    var {
            ref: t,
            isActive: n,
            disabled: r,
            iconComponent: a,
            iconColor: l,
            tooltip: o,
            defaultColor: s = "primaryDark",
            highlightedColor: c = "primaryDark",
            caretColor: u,
            popoutOpen: d,
            onClick: f,
            popoutDisabled: h,
            onPopoutClick: p,
            onMouseEnter: m,
            onMouseLeave: g,
            onContextMenu: b,
            isTrayButton: y,
        } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++)
                    (n = a[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, [
            "ref",
            "isActive",
            "disabled",
            "iconComponent",
            "iconColor",
            "tooltip",
            "defaultColor",
            "highlightedColor",
            "caretColor",
            "popoutOpen",
            "onClick",
            "popoutDisabled",
            "onPopoutClick",
            "onMouseEnter",
            "onMouseLeave",
            "onContextMenu",
            "isTrayButton",
        ]);
    return (0, i.jsx)(V.d, {
        ref: t,
        onClick: null != f ? f : () => {},
        color: n ? c : s,
        className: ea.button,
        disabled: r,
        popoutOpen: d,
        popoutDisabled: h,
        label: o,
        isTrayButton: y,
        onMouseEnter: (e) => {
            null == m || m(e);
        },
        onMouseLeave: (e) => {
            null == g || g(e);
        },
        iconComponent: a,
        iconColor: l,
        caretColor: u,
        isActive: n,
        onContextMenu: b,
        onPopoutClick: p,
        "aria-label": O["aria-label"],
    });
}
function ec(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        o = r.useRef(null),
        { suppress: s, selfMute: c, mute: u } = (0, D.Z)(n),
        f = c || u || s,
        h = (0, y.Z)(c, u, s, !1),
        { Component: p, play: g, events: b } = (0, G.b)(f);
    r.useEffect(() => () => g(), [g, f]);
    let E = eo(l),
        S = (e) => (t) => {
            e(t),
                (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: q.Qu.MICROPHONE,
                    value: q.bk.SETTINGS_OPENED,
                });
        },
        I = null == (t = (0, en.II)()) ? void 0 : t.id,
        C = (0, a.e7)([ee.Z], () => ee.Z.isLimitedInteractionOverrideEnabled(I)),
        j = (0, U.Hu)({
            location: m.Z.OVERLAY,
            autoTrackExposure: !0,
        }),
        { showRefreshedAudioContextMenu: _ } = (0, N.e)({ location: "MicrophoneActionButton" });
    return (0, i.jsx)(d.yRy, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = E(t);
            return j
                ? (0, i.jsx)(W.l, {
                      wide: !0,
                      showOutputDevices: !0,
                      onSettingsButtonClick: n,
                      showSearchBar: !C,
                  })
                : _
                  ? (0, i.jsx)(v.Z, {
                        onClose: n,
                        maybeRenderPTTCheckbox: !0,
                        renderInputProfiles: !0,
                        renderInputDevices: !0,
                        renderInputVolume: !0,
                        maybeRenderInputMeter: !0,
                        renderSettingsButton: !0,
                        appContext: ei.IlC.OVERLAY,
                    })
                  : (0, i.jsx)(O.default, {
                        onClose: n,
                        renderInputDevices: !0,
                        renderOutputDevices: !0,
                        renderInputModes: !0,
                        renderInputVolume: !0,
                        renderOutputVolume: !0,
                        renderDeafen: !0,
                        minimal: !0,
                        appContext: ei.IlC.OVERLAY,
                    });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: o,
                iconComponent: p,
                isActive: f,
                highlightedColor: "red",
                tooltip: h,
                onClick: () => {
                    (0, x.Z)(u, s, ei.jXE.OVERLAY),
                        (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                            type: q.Qu.MICROPHONE,
                            value: f ? q.bk.ENABLED : q.bk.DISABLED,
                            userId: H.default.getId(),
                        });
                },
                onPopoutClick: S(n),
                onContextMenu: S(n),
                popoutOpen: r,
                onMouseEnter: () => {
                    b.onMouseEnter();
                },
                onMouseLeave: () => {
                    b.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function eu(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        { selfDeaf: l, deaf: s } = (0, A.Z)(t),
        c = l || s,
        {
            Component: u,
            play: f,
            events: { onMouseEnter: h, onMouseLeave: p },
        } = (0, o.l)(c ? "undeafen" : "deafen"),
        m = s ? d.Vm4 : u;
    r.useEffect(() => () => f(), [c, f]);
    let g = () => {
            (0, S.Z)(s, ei.jXE.OVERLAY),
                (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: q.Qu.AUDIO,
                    value: s ? q.bk.ENABLED : q.bk.DISABLED,
                    userId: H.default.getId(),
                });
        },
        y = (e) => (t) => {
            e(t),
                (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: q.Qu.AUDIO,
                    value: q.bk.SETTINGS_OPENED,
                });
        },
        E = eo(n),
        { showRefreshedAudioContextMenu: x } = (0, N.e)({ location: "HeadphonesActionButton" });
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return x
                ? (0, i.jsx)(v.Z, {
                      onClose: E(t),
                      renderDeafenCheckbox: !0,
                      renderOutputDevices: !0,
                      renderOutputVolume: !0,
                      renderSettingsButton: !0,
                      appContext: ei.IlC.OVERLAY,
                  })
                : (0, i.jsx)(O.default, {
                      onClose: E(t),
                      renderOutputDevices: !0,
                      renderOutputVolume: !0,
                      appContext: ei.IlC.OVERLAY,
                  });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: a,
                iconComponent: m,
                tooltip: (0, b.Z)(l, s, !1),
                isActive: c,
                highlightedColor: "red",
                onClick: g,
                onContextMenu: y(n),
                onMouseEnter: h,
                onMouseLeave: p,
                onPopoutClick: y(n),
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}
function ed(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        o = r.useRef(null),
        s = (0, a.e7)([Y.Z], () => Y.Z.isVideoEnabled()),
        c = (0, a.e7)([Y.Z], () => Object.values(Y.Z.getVideoDevices())[0]),
        h = null == (t = null == c ? void 0 : c.disabled) || t,
        p = !1 === h,
        m = (0, k.Z)(n),
        g = (e) => {
            f.Z.setVideoEnabled(e);
        },
        b = (e) => (t) => {
            e(t),
                (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: q.Qu.CAMERA,
                    value: q.bk.SETTINGS_OPENED,
                });
        },
        y = () => {
            h ? (p ? g(!0) : (0, z.Z)()) : g(!s),
                (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: q.Qu.CAMERA,
                    value: s ? q.bk.DISABLED : q.bk.ENABLED,
                    userId: H.default.getId(),
                });
        },
        {
            Component: O,
            play: v,
            events: { onMouseEnter: S, onMouseLeave: x },
        } = (0, u.o)(s ? "disable" : "enable"),
        I =
            null != n
                ? (0, R.X)({
                      enabled: s,
                      cameraUnavailable: h,
                      hasPermission: m,
                      channel: n,
                  })
                : void 0;
    r.useEffect(() => () => v(), [s, v]);
    let C = eo(l),
        j = null == n || !m;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.Z, {
                onClose: C(t),
                appContext: ei.IlC.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: o,
                iconComponent: O,
                tooltip: I,
                onClick: y,
                isActive: s,
                highlightedColor: "green",
                onPopoutClick: b(n),
                popoutOpen: r,
                onContextMenu: b(n),
                onMouseEnter: S,
                onMouseLeave: x,
                disabled: j,
                isTrayButton: !0,
            });
        },
    });
}
function ef(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        o = r.useRef(null),
        c = (0, a.e7)([X.default], () => X.default.getCurrentUser()),
        u = (0, k.Z)(n),
        f = (0, a.cj)([Y.Z], () => (0, j.Z)(Y.Z)),
        h = (0, a.e7)([F.Z], () => F.Z.getCurrentUserActiveStream()),
        p = (0, a.e7)([et.Z], () => et.Z.getTargetPID()),
        m = (0, $.P)({
            pid: p,
            allowOneClickGoLive: !0,
            analyticsLocation: ei.Sbl.UNLOCKED_OVERLAY,
        }),
        g = () => {
            m(),
                (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: q.Qu.GO_LIVE,
                    value: q.bk.ENABLED,
                    userId: H.default.getId(),
                });
        },
        b = null != h;
    if (b) t = er.intl.string(er.t.S5anIc);
    else if (null != n) {
        let e = (0, en.pL)();
        t = u
            ? null != e
                ? er.intl.format(er.t.AB5gTy, { game: e.name })
                : er.intl.string(er.t.FeUKeA)
            : er.intl.string(er.t.uQn9B8);
    }
    let y = () => {
            if (b)
                return (
                    (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                        type: q.Qu.GO_LIVE,
                        value: q.bk.DISABLED,
                        userId: H.default.getId(),
                    }),
                    (0, _.Z)(h, !1)
                );
            g();
        },
        O = (e) => (t) => {
            e(t),
                (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: q.Qu.SCREEN_SHARE,
                    value: q.bk.SETTINGS_OPENED,
                });
        },
        {
            Component: v,
            events: { onMouseEnter: E, onMouseLeave: S },
            play: x,
        } = (0, s.P)(b ? "disable" : "enable");
    r.useEffect(() => () => x(), [b, x]);
    let I = eo(l);
    return (0, i.jsx)(d.yRy, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(L.Z, {
                channel: n,
                currentUser: c,
                activeStreams: b ? [h] : [],
                handleGoLive: g,
                onClose: I(t),
                appContext: ei.IlC.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: a } = n;
            return (0, i.jsx)(es, {
                ref: o,
                iconComponent: v,
                tooltip: t,
                "aria-label": er.intl.string(er.t.FeUKeA),
                isActive: b,
                highlightedColor: "green",
                onClick: y,
                popoutOpen: a,
                popoutDisabled: !b,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: E,
                onMouseLeave: S,
                disabled: !f || !u,
                isTrayButton: !0,
            });
        },
    });
}
function eh(e) {
    var t;
    let { voiceChannel: l, locked: o } = e,
        s = r.useRef(null),
        u = null != (t = null == l ? void 0 : l.getGuildId()) ? t : null,
        { mute: f, suppress: p } = (0, D.Z)(l),
        m = (0, a.e7)([Y.Z], () => Y.Z.isDeaf()),
        b = null == l || f || p || m,
        { analyticsLocations: y } = (0, g.ZP)();
    function O(e) {
        null != u &&
            ((0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                type: q.Qu.SOUNDBOARD,
                value: q.bk.SETTINGS_OPENED,
            }),
            (0, h.jW)(e, async () => {
                let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        el(
                            {
                                sourceAnalyticsLocations: y,
                                guildId: u,
                            },
                            t,
                        ),
                    );
            }));
    }
    let {
            Component: v,
            events: { onClick: E, onMouseEnter: S, onMouseLeave: x },
        } = (0, c.j)(),
        I = eo(o),
        C = (0, a.e7)([T.Z, H.default], () => T.Z.isUserPlayingSounds(H.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return b || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(P.Z, {
                      guildId: u,
                      channel: l,
                      onClose: I(t),
                      analyticsSource: "action bar button",
                  });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: s,
                iconComponent: v,
                tooltip: f
                    ? er.intl.string(er.t["Ox4/zU"])
                    : p
                      ? er.intl.string(er.t["+YBKYI"])
                      : m
                        ? er.intl.string(er.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    E(),
                        (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                            type: q.Qu.SOUNDBOARD,
                            value: q.bk.PANEL_OPENED,
                            userId: H.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: C,
                defaultColor: C,
                onContextMenu: O,
                onMouseEnter: S,
                onMouseLeave: x,
                isActive: r,
                popoutOpen: r,
                disabled: b,
                isTrayButton: !0,
            });
        },
    });
}
function ep(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        s = (0, a.e7)([K.Z], () => K.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        c = () => {
            (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                type: q.Qu.CALL_BUTTON,
                value: q.bk.DISABLED,
                userId: H.default.getId(),
            }),
                s && p.default.disconnect();
        },
        u = (e, t) => {
            p.default.selectVoiceChannel(e),
                (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: q.Qu.CALL_BUTTON,
                    value: q.bk.ENABLED,
                    userId: H.default.getId(),
                    secondaryValue: t,
                });
        },
        [f, h] = r.useTransition(),
        m = (e) => (t) => {
            h(() => {
                e(t);
            }),
                (0, q.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: q.Qu.CALL_BUTTON,
                    value: q.bk.SETTINGS_OPENED,
                });
        },
        {
            Component: g,
            events: { onMouseEnter: b, onMouseLeave: y },
        } = (0, l.K)(),
        O = eo(n),
        v = s ? g : d.Csw;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(M.Z, {
                currentVoiceChannel: t,
                onClose: O(n),
                onSelect: u,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(es, {
                ref: o,
                iconComponent: v,
                tooltip: s ? er.intl.string(er.t["6vrfgt"]) : er.intl.string(er.t.S0W8Z5),
                onClick: s ? c : m(n),
                defaultColor: s ? "disconnect" : void 0,
                onMouseEnter: b,
                onMouseLeave: y,
                onContextMenu: m(n),
                isActive: r,
                onPopoutClick: s ? m(n) : void 0,
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}
function em(e) {
    let { voiceChannel: t } = e,
        n = (0, a.e7)([B.Z], () => B.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: ea.separatorDot }),
                    (0, i.jsxs)("div", {
                        className: ea.guildIconContainer,
                        children: [
                            (0, i.jsx)(Z.Z, {
                                guild: n,
                                size: Z.Z.Sizes.SMOL,
                                className: ea.guildIcon,
                            }),
                            (0, i.jsx)(d.Text, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: ea.guildName,
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
        n = (0, C.KS)(t),
        r = (0, I.ZP)(t);
    return (0, i.jsxs)("div", {
        className: ea.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(d.Text, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: ea.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: "sm",
                        color: "currentColor",
                    }),
                }),
            null != r &&
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ea.channelName,
                    children: r,
                }),
        ],
    });
}
function eb(e) {
    var t, n;
    let { voiceChannel: r } = e,
        l = null == r ? void 0 : r.id,
        o = (0, a.cj)([Q.Z], () => ({
            quality: Q.Z.getQuality(),
            state: Q.Z.getState(),
            lastPing: Q.Z.getLastPing(),
        })),
        s = (0, a.e7)([J.Z], () => null != l && J.Z.hasVideo(l), [l]);
    return (
        null != l &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    w.Z,
                    ((t = el({}, o)),
                    (n = n =
                        {
                            channelId: l,
                            hasVideo: s,
                            connectionStatusTextVariant: "text-sm/medium",
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                ),
                (0, i.jsx)(em, { voiceChannel: r }),
                (0, i.jsx)("div", { className: ea.separatorDot }),
                (0, i.jsx)(eg, { voiceChannel: r }),
            ],
        })
    );
}
