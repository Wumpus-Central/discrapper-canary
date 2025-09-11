n.d(t, {
    L: () => ey,
    N3: () => ed,
    Ox: () => ec,
    SE: () => eu,
    aG: () => eh,
    c_: () => ef,
    sm: () => ep,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    o = n(685072),
    a = n(400354),
    s = n(864094),
    c = n(582019),
    u = n(75735),
    d = n(481060),
    p = n(846027),
    h = n(239091),
    f = n(287734),
    m = n(100527),
    g = n(906732),
    y = n(571250),
    O = n(628581),
    v = n(659580),
    b = n(855844),
    E = n(793865),
    _ = n(55311),
    x = n(575175),
    S = n(933557),
    I = n(471445),
    C = n(74299),
    j = n(803647),
    w = n(565138),
    N = n(853170),
    Z = n(917405),
    T = n(763296),
    P = n(603074),
    A = n(879815),
    D = n(189771),
    k = n(294629),
    R = n(67844),
    L = n(544384),
    M = n(890828),
    V = n(560688),
    z = n(871499),
    U = n(875527),
    W = n(306609),
    G = n(8404),
    B = n(199902),
    H = n(314897),
    F = n(430824),
    Y = n(131951),
    Q = n(19780),
    K = n(944486),
    X = n(594174),
    q = n(979651),
    J = n(145597),
    $ = n(444295),
    ee = n(371053),
    et = n(624864),
    en = n(388627),
    ei = n(981631),
    er = n(388032),
    el = n(41143);
function eo(e) {
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
function ea(e) {
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
            iconComponent: l,
            iconColor: o,
            tooltip: a,
            defaultColor: s = "primaryDark",
            highlightedColor: c = "primaryDark",
            caretColor: u,
            popoutOpen: d,
            onClick: p,
            popoutDisabled: h,
            onPopoutClick: f,
            onMouseEnter: m,
            onMouseLeave: g,
            onContextMenu: y,
            isTrayButton: O,
        } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
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
    return (0, i.jsx)(z.d, {
        ref: t,
        onClick: null != p ? p : () => {},
        color: n ? c : s,
        className: el.button,
        disabled: r,
        popoutOpen: d,
        popoutDisabled: h,
        label: a,
        isTrayButton: O,
        onMouseEnter: (e) => {
            null == m || m(e);
        },
        onMouseLeave: (e) => {
            null == g || g(e);
        },
        iconComponent: l,
        iconColor: o,
        caretColor: u,
        isActive: n,
        onContextMenu: y,
        onPopoutClick: f,
        "aria-label": v["aria-label"],
    });
}
function ec(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        a = r.useRef(null),
        { suppress: s, selfMute: c, mute: u } = (0, k.Z)(n),
        p = c || u || s,
        h = (0, O.Z)(c, u, s, !1),
        { Component: f, play: g, events: y } = (0, G.b)(p);
    r.useEffect(() => () => g(), [g, p]);
    let E = ea(o),
        _ = (e) => (t) => {
            e(t),
                (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: $.Qu.MICROPHONE,
                    value: $.bk.SETTINGS_OPENED,
                });
        },
        S = null == (t = (0, en.II)()) ? void 0 : t.id,
        I = (0, l.e7)([et.Z], () => et.Z.isLimitedInteractionOverrideEnabled(S)),
        C = (0, U.Hu)({
            location: m.Z.OVERLAY,
            autoTrackExposure: !0,
        }),
        { showRefreshedAudioContextMenu: j } = (0, N.e)({ location: "MicrophoneActionButton" });
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = E(t);
            return C
                ? (0, i.jsx)(W.l, {
                      wide: !0,
                      showOutputDevices: !0,
                      onSettingsButtonClick: n,
                      showSearchBar: !I,
                  })
                : j
                  ? (0, i.jsx)(b.Z, {
                        onClose: n,
                        maybeRenderPTTCheckbox: !0,
                        renderInputProfiles: !0,
                        renderInputDevices: !0,
                        renderInputVolume: !0,
                        maybeRenderInputMeter: !0,
                        renderSettingsButton: !0,
                    })
                  : (0, i.jsx)(v.default, {
                        onClose: n,
                        renderInputDevices: !0,
                        renderOutputDevices: !0,
                        renderInputModes: !0,
                        renderInputVolume: !0,
                        renderOutputVolume: !0,
                        renderDeafen: !0,
                        minimal: !0,
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
                iconComponent: f,
                isActive: p,
                highlightedColor: "red",
                tooltip: h,
                onClick: () => {
                    (0, x.Z)(u, s, ei.jXE.OVERLAY),
                        (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                            type: $.Qu.MICROPHONE,
                            value: p ? $.bk.ENABLED : $.bk.DISABLED,
                            userId: H.default.getId(),
                        });
                },
                onPopoutClick: _(n),
                onContextMenu: _(n),
                popoutOpen: r,
                onMouseEnter: () => {
                    y.onMouseEnter();
                },
                onMouseLeave: () => {
                    y.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function eu(e) {
    let { voiceChannel: t, locked: n } = e,
        l = r.useRef(null),
        { selfDeaf: o, deaf: s } = (0, A.Z)(t),
        c = o || s,
        {
            Component: u,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: f },
        } = (0, a.l)(c ? "undeafen" : "deafen"),
        m = s ? d.Vm4 : u;
    r.useEffect(() => () => p(), [c, p]);
    let g = () => {
            (0, _.Z)(s, ei.jXE.OVERLAY),
                (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: $.Qu.AUDIO,
                    value: s ? $.bk.ENABLED : $.bk.DISABLED,
                    userId: H.default.getId(),
                });
        },
        O = (e) => (t) => {
            e(t),
                (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: $.Qu.AUDIO,
                    value: $.bk.SETTINGS_OPENED,
                });
        },
        E = ea(n),
        { showRefreshedAudioContextMenu: x } = (0, N.e)({ location: "HeadphonesActionButton" });
    return (0, i.jsx)(d.yRy, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return x
                ? (0, i.jsx)(b.Z, {
                      onClose: E(t),
                      renderDeafenCheckbox: !0,
                      renderOutputDevices: !0,
                      renderOutputVolume: !0,
                      renderSettingsButton: !0,
                  })
                : (0, i.jsx)(v.default, {
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
                ref: l,
                iconComponent: m,
                tooltip: (0, y.Z)(o, s, !1),
                isActive: c,
                highlightedColor: "red",
                onClick: g,
                onContextMenu: O(n),
                onMouseEnter: h,
                onMouseLeave: f,
                onPopoutClick: O(n),
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}
function ed(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        a = r.useRef(null),
        s = (0, l.e7)([Y.Z], () => Y.Z.isVideoEnabled()),
        c = (0, l.e7)([Y.Z], () => Object.values(Y.Z.getVideoDevices())[0]),
        h = null == (t = null == c ? void 0 : c.disabled) || t,
        f = !1 === h,
        m = (0, D.Z)(n),
        g = (e) => {
            p.Z.setVideoEnabled(e);
        },
        y = (e) => (t) => {
            e(t),
                (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: $.Qu.CAMERA,
                    value: $.bk.SETTINGS_OPENED,
                });
        },
        O = () => {
            h ? (f ? g(!0) : (0, V.Z)()) : g(!s),
                (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: $.Qu.CAMERA,
                    value: s ? $.bk.DISABLED : $.bk.ENABLED,
                    userId: H.default.getId(),
                });
        },
        {
            Component: v,
            play: b,
            events: { onMouseEnter: _, onMouseLeave: x },
        } = (0, u.o)(s ? "disable" : "enable"),
        S =
            null != n
                ? (0, R.X)({
                      enabled: s,
                      cameraUnavailable: h,
                      hasPermission: m,
                      channel: n,
                  })
                : void 0;
    r.useEffect(() => () => b(), [s, b]);
    let I = ea(o),
        C = null == n || !m;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.Z, {
                onClose: I(t),
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
                iconComponent: v,
                tooltip: S,
                onClick: O,
                isActive: s,
                highlightedColor: "green",
                onPopoutClick: y(n),
                popoutOpen: r,
                onContextMenu: y(n),
                onMouseEnter: _,
                onMouseLeave: x,
                disabled: C,
                isTrayButton: !0,
            });
        },
    });
}
function ep(e) {
    let t,
        { voiceChannel: n, locked: o } = e,
        a = r.useRef(null),
        c = (0, l.e7)([X.default], () => X.default.getCurrentUser()),
        u = (0, D.Z)(n),
        p = (0, l.cj)([Y.Z], () => (0, C.Z)(Y.Z)),
        h = (0, l.e7)([B.Z], () => B.Z.getCurrentUserActiveStream()),
        f = (0, ee.P)({
            pid: (0, J.getPID)(),
            allowOneClickGoLive: !0,
            analyticsLocation: ei.Sbl.UNLOCKED_OVERLAY,
        }),
        m = () => {
            f(),
                (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: $.Qu.GO_LIVE,
                    value: $.bk.ENABLED,
                    userId: H.default.getId(),
                });
        },
        g = null != h;
    if (g) t = er.intl.string(er.t.S5anIS);
    else if (null != n) {
        let e = (0, en.pL)();
        t = u
            ? null != e
                ? er.intl.format(er.t.AB5gT0, { game: e.name })
                : er.intl.string(er.t.FeUKeH)
            : er.intl.string(er.t.uQn9Bw);
    }
    let y = () => {
            if (g)
                return (
                    (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                        type: $.Qu.GO_LIVE,
                        value: $.bk.DISABLED,
                        userId: H.default.getId(),
                    }),
                    (0, j.Z)(h, !1)
                );
            m();
        },
        O = (e) => (t) => {
            e(t),
                (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: $.Qu.SCREEN_SHARE,
                    value: $.bk.SETTINGS_OPENED,
                });
        },
        {
            Component: v,
            events: { onMouseEnter: b, onMouseLeave: E },
            play: _,
        } = (0, s.P)(g ? "disable" : "enable");
    r.useEffect(() => () => _(), [g, _]);
    let x = ea(o);
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(L.Z, {
                channel: n,
                currentUser: c,
                activeStreams: g ? [h] : [],
                handleGoLive: m,
                onClose: x(t),
                appContext: ei.IlC.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: l } = n;
            return (0, i.jsx)(es, {
                ref: a,
                iconComponent: v,
                tooltip: t,
                "aria-label": er.intl.string(er.t.FeUKeH),
                isActive: g,
                highlightedColor: "green",
                onClick: y,
                popoutOpen: l,
                popoutDisabled: !g,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: b,
                onMouseLeave: E,
                disabled: !p || !u,
                isTrayButton: !0,
            });
        },
    });
}
function eh(e) {
    var t;
    let { voiceChannel: o, locked: a } = e,
        s = r.useRef(null),
        u = null != (t = null == o ? void 0 : o.getGuildId()) ? t : null,
        { mute: p, suppress: f } = (0, k.Z)(o),
        m = (0, l.e7)([Y.Z], () => Y.Z.isDeaf()),
        y = null == o || p || f || m,
        { analyticsLocations: O } = (0, g.ZP)();
    function v(e) {
        null != u &&
            ((0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                type: $.Qu.SOUNDBOARD,
                value: $.bk.SETTINGS_OPENED,
            }),
            (0, h.jW)(e, async () => {
                let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        eo(
                            {
                                sourceAnalyticsLocations: O,
                                guildId: u,
                            },
                            t,
                        ),
                    );
            }));
    }
    let {
            Component: b,
            events: { onClick: E, onMouseEnter: _, onMouseLeave: x },
        } = (0, c.j)(),
        S = ea(a),
        I = (0, l.e7)([T.Z, H.default], () => T.Z.isUserPlayingSounds(H.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return y || null == o
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(P.Z, {
                      guildId: u,
                      channel: o,
                      onClose: S(t),
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
                iconComponent: b,
                tooltip: p
                    ? er.intl.string(er.t["Ox4/zc"])
                    : f
                      ? er.intl.string(er.t["+YBKYG"])
                      : m
                        ? er.intl.string(er.t.X1lQlp)
                        : void 0,
                onClick: (e) => {
                    E(),
                        (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                            type: $.Qu.SOUNDBOARD,
                            value: $.bk.PANEL_OPENED,
                            userId: H.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: I,
                defaultColor: I,
                onContextMenu: v,
                onMouseEnter: _,
                onMouseLeave: x,
                isActive: r,
                popoutOpen: r,
                disabled: y,
                isTrayButton: !0,
            });
        },
    });
}
function ef(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        s = (0, l.e7)([K.Z], () => K.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        c = () => {
            (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                type: $.Qu.CALL_BUTTON,
                value: $.bk.DISABLED,
                userId: H.default.getId(),
            }),
                s && f.default.disconnect();
        },
        u = (e) => {
            f.default.selectVoiceChannel(e),
                (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: $.Qu.CALL_BUTTON,
                    value: $.bk.ENABLED,
                    userId: H.default.getId(),
                });
        },
        [p, h] = r.useTransition(),
        m = (e) => (t) => {
            h(() => {
                e(t);
            }),
                (0, $.Ws)(ei.Odu.QUICK_ACTIONS, {
                    type: $.Qu.CALL_BUTTON,
                    value: $.bk.SETTINGS_OPENED,
                });
        },
        {
            Component: g,
            events: { onMouseEnter: y, onMouseLeave: O },
        } = (0, o.K)(),
        v = ea(n),
        b = s ? g : d.Csw;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(M.Z, {
                currentVoiceChannel: t,
                onClose: v(n),
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
                ref: a,
                iconComponent: b,
                tooltip: s ? er.intl.string(er.t["6vrfgo"]) : er.intl.string(er.t.S0W8Z2),
                onClick: s ? c : m(n),
                defaultColor: s ? "disconnect" : void 0,
                onMouseEnter: y,
                onMouseLeave: O,
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
        n = (0, l.e7)([F.Z], () => F.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: el.separatorDot }),
                    (0, i.jsxs)("div", {
                        className: el.guildIconContainer,
                        children: [
                            (0, i.jsx)(w.Z, {
                                guild: n,
                                size: w.Z.Sizes.SMOL,
                                className: el.guildIcon,
                            }),
                            (0, i.jsx)(d.Text, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-primary",
                                className: el.guildName,
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
        n = (0, I.KS)(t),
        r = (0, S.ZP)(t);
    return (0, i.jsxs)("div", {
        className: el.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(d.Text, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: el.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: "sm",
                        color: "currentColor",
                    }),
                }),
            null != r &&
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: el.channelName,
                    children: r,
                }),
        ],
    });
}
function ey(e) {
    var t, n;
    let { voiceChannel: r } = e,
        o = null == r ? void 0 : r.id,
        a = (0, l.cj)([Q.Z], () => ({
            quality: Q.Z.getQuality(),
            state: Q.Z.getState(),
            lastPing: Q.Z.getLastPing(),
        })),
        s = (0, l.e7)([q.Z], () => null != o && q.Z.hasVideo(o), [o]);
    return (
        null != o &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    Z.Z,
                    ((t = eo({}, a)),
                    (n = n =
                        {
                            channelId: o,
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
                (0, i.jsx)("div", { className: el.separatorDot }),
                (0, i.jsx)(eg, { voiceChannel: r }),
            ],
        })
    );
}
