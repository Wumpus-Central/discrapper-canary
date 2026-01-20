n.d(t, {
    L: () => em,
    N3: () => eu,
    Ox: () => ea,
    SE: () => es,
    aG: () => ed,
    c_: () => eh,
    sm: () => ec,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    o = n(685072),
    a = n(400354),
    s = n(864094),
    u = n(582019),
    c = n(75735),
    d = n(481060),
    h = n(846027),
    p = n(239091),
    f = n(287734),
    m = n(100527),
    g = n(906732),
    y = n(571250),
    O = n(628581),
    E = n(855844),
    v = n(793865),
    b = n(55311),
    S = n(575175),
    x = n(933557),
    j = n(471445),
    I = n(74299),
    Z = n(803647),
    C = n(565138),
    N = n(917405),
    w = n(763296),
    T = n(603074),
    _ = n(879815),
    P = n(189771),
    A = n(294629),
    D = n(67844),
    R = n(544384),
    k = n(890828),
    L = n(560688),
    M = n(871499),
    V = n(875527),
    z = n(306609),
    U = n(8404),
    W = n(199902),
    G = n(314897),
    F = n(430824),
    H = n(131951),
    Y = n(19780),
    B = n(944486),
    Q = n(594174),
    K = n(979651),
    X = n(444295),
    J = n(371053),
    q = n(624864),
    $ = n(610394),
    ee = n(388627),
    et = n(981631),
    en = n(388032),
    ei = n(936046);
function er(e) {
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
function el(e) {
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
function eo(e) {
    var {
            ref: t,
            isActive: n,
            disabled: r,
            iconComponent: l,
            iconColor: o,
            tooltip: a,
            defaultColor: s = "primaryDark",
            highlightedColor: u = "primaryDark",
            caretColor: c,
            popoutOpen: d,
            onClick: h,
            popoutDisabled: p,
            onPopoutClick: f,
            onMouseEnter: m,
            onMouseLeave: g,
            onContextMenu: y,
            isTrayButton: O,
        } = e,
        E = (function (e, t) {
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
    return (0, i.jsx)(M.d, {
        ref: t,
        onClick: null != h ? h : () => {},
        color: n ? u : s,
        className: ei.button,
        disabled: r,
        popoutOpen: d,
        popoutDisabled: p,
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
        caretColor: c,
        isActive: n,
        onContextMenu: y,
        onPopoutClick: f,
        "aria-label": E["aria-label"],
    });
}
function ea(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        a = r.useRef(null),
        { suppress: s, selfMute: u, mute: c } = (0, A.Z)(n),
        h = u || c || s,
        p = (0, O.Z)(u, c, s, !1),
        { Component: f, play: g, events: y } = (0, U.b)(h);
    r.useEffect(() => () => g(), [g, h]);
    let v = el(o),
        b = (e) => (t) => {
            e(t),
                (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: X.Qu.MICROPHONE,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        x = null == (t = (0, ee.II)()) ? void 0 : t.id,
        j = (0, l.e7)([q.Z], () => q.Z.isLimitedInteractionOverrideEnabled(x)),
        I = (0, V.Hu)({
            location: m.Z.OVERLAY,
            autoTrackExposure: !0,
        });
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = v(t);
            return I
                ? (0, i.jsx)(z.l, {
                      wide: !0,
                      showOutputDevices: !0,
                      onSettingsButtonClick: n,
                      showSearchBar: !j,
                  })
                : (0, i.jsx)(E.Z, {
                      onClose: n,
                      maybeRenderPTTCheckbox: !0,
                      renderInputProfiles: !0,
                      renderInputDevices: !0,
                      renderInputVolume: !0,
                      maybeRenderInputMeter: !0,
                      renderSettingsButton: !0,
                      appContext: et.IlC.OVERLAY,
                  });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: a,
                iconComponent: f,
                isActive: h,
                highlightedColor: "red",
                tooltip: p,
                onClick: () => {
                    (0, S.Z)(c, s, et.jXE.OVERLAY),
                        (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                            type: X.Qu.MICROPHONE,
                            value: h ? X.bk.ENABLED : X.bk.DISABLED,
                            userId: G.default.getId(),
                        });
                },
                onPopoutClick: b(n),
                onContextMenu: b(n),
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
function es(e) {
    let { voiceChannel: t, locked: n } = e,
        l = r.useRef(null),
        { selfDeaf: o, deaf: s } = (0, _.Z)(t),
        u = o || s,
        {
            Component: c,
            play: h,
            events: { onMouseEnter: p, onMouseLeave: f },
        } = (0, a.l)(u ? "undeafen" : "deafen"),
        m = s ? d.Vm4 : c;
    r.useEffect(() => () => h(), [u, h]);
    let g = () => {
            (0, b.Z)(s, et.jXE.OVERLAY),
                (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: X.Qu.AUDIO,
                    value: s ? X.bk.ENABLED : X.bk.DISABLED,
                    userId: G.default.getId(),
                });
        },
        O = (e) => (t) => {
            e(t),
                (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: X.Qu.AUDIO,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        v = el(n);
    return (0, i.jsx)(d.yRy, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.Z, {
                onClose: v(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: et.IlC.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: l,
                iconComponent: m,
                tooltip: (0, y.Z)(o, s, !1),
                isActive: u,
                highlightedColor: "red",
                onClick: g,
                onContextMenu: O(n),
                onMouseEnter: p,
                onMouseLeave: f,
                onPopoutClick: O(n),
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}
function eu(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        a = r.useRef(null),
        s = (0, l.e7)([H.Z], () => H.Z.isVideoEnabled()),
        u = (0, l.e7)([H.Z], () => Object.values(H.Z.getVideoDevices())[0]),
        p = null == (t = null == u ? void 0 : u.disabled) || t,
        f = !1 === p,
        m = (0, P.Z)(n),
        g = (e) => {
            h.Z.setVideoEnabled(e);
        },
        y = (e) => (t) => {
            e(t),
                (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: X.Qu.CAMERA,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        O = () => {
            p ? (f ? g(!0) : (0, L.Z)()) : g(!s),
                (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: X.Qu.CAMERA,
                    value: s ? X.bk.DISABLED : X.bk.ENABLED,
                    userId: G.default.getId(),
                });
        },
        {
            Component: E,
            play: b,
            events: { onMouseEnter: S, onMouseLeave: x },
        } = (0, c.o)(s ? "disable" : "enable"),
        j =
            null != n
                ? (0, D.X)({
                      enabled: s,
                      cameraUnavailable: p,
                      hasPermission: m,
                      channel: n,
                  })
                : void 0;
    r.useEffect(() => () => b(), [s, b]);
    let I = el(o),
        Z = null == n || !m;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.Z, {
                onClose: I(t),
                appContext: et.IlC.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: a,
                iconComponent: E,
                tooltip: j,
                onClick: O,
                isActive: s,
                highlightedColor: "green",
                onPopoutClick: y(n),
                popoutOpen: r,
                onContextMenu: y(n),
                onMouseEnter: S,
                onMouseLeave: x,
                disabled: Z,
                isTrayButton: !0,
            });
        },
    });
}
function ec(e) {
    let t,
        { voiceChannel: n, locked: o } = e,
        a = r.useRef(null),
        u = (0, l.e7)([Q.default], () => Q.default.getCurrentUser()),
        c = (0, P.Z)(n),
        h = (0, l.cj)([H.Z], () => (0, I.Z)(H.Z)),
        p = (0, l.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
        f = (0, l.e7)([$.Z], () => $.Z.getTargetPID()),
        m = (0, J.P)({
            pid: f,
            allowOneClickGoLive: !0,
            analyticsLocation: et.Sbl.UNLOCKED_OVERLAY,
        }),
        g = () => {
            m(),
                (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: X.Qu.GO_LIVE,
                    value: X.bk.ENABLED,
                    userId: G.default.getId(),
                });
        },
        y = null != p;
    if (y) t = en.intl.string(en.t.S5anIc);
    else if (null != n) {
        let e = (0, ee.pL)();
        t = c
            ? null != e
                ? en.intl.format(en.t.AB5gTy, { game: e.name })
                : en.intl.string(en.t.FeUKeA)
            : en.intl.string(en.t.uQn9B8);
    }
    let O = () => {
            if (y)
                return (
                    (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                        type: X.Qu.GO_LIVE,
                        value: X.bk.DISABLED,
                        userId: G.default.getId(),
                    }),
                    (0, Z.Z)(p, !1)
                );
            g();
        },
        E = (e) => (t) => {
            e(t),
                (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: X.Qu.SCREEN_SHARE,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        {
            Component: v,
            events: { onMouseEnter: b, onMouseLeave: S },
            play: x,
        } = (0, s.P)(y ? "disable" : "enable");
    r.useEffect(() => () => x(), [y, x]);
    let j = el(o);
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(R.Z, {
                channel: n,
                currentUser: u,
                activeStreams: y ? [p] : [],
                handleGoLive: g,
                onClose: j(t),
                appContext: et.IlC.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: l } = n;
            return (0, i.jsx)(eo, {
                ref: a,
                iconComponent: v,
                tooltip: t,
                "aria-label": en.intl.string(en.t.FeUKeA),
                isActive: y,
                highlightedColor: "green",
                onClick: O,
                popoutOpen: l,
                popoutDisabled: !y,
                onPopoutClick: E(r),
                onContextMenu: E(r),
                onMouseEnter: b,
                onMouseLeave: S,
                disabled: !h || !c,
                isTrayButton: !0,
            });
        },
    });
}
function ed(e) {
    var t;
    let { voiceChannel: o, locked: a } = e,
        s = r.useRef(null),
        c = null != (t = null == o ? void 0 : o.getGuildId()) ? t : null,
        { mute: h, suppress: f } = (0, A.Z)(o),
        m = (0, l.e7)([H.Z], () => H.Z.isDeaf()),
        y = null == o || h || f || m,
        { analyticsLocations: O } = (0, g.ZP)();
    function E(e) {
        null != c &&
            ((0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                type: X.Qu.SOUNDBOARD,
                value: X.bk.SETTINGS_OPENED,
            }),
            (0, p.jW)(e, async () => {
                let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        er(
                            {
                                sourceAnalyticsLocations: O,
                                guildId: c,
                            },
                            t,
                        ),
                    );
            }));
    }
    let {
            Component: v,
            events: { onClick: b, onMouseEnter: S, onMouseLeave: x },
        } = (0, u.j)(),
        j = el(a),
        I = (0, l.e7)([w.Z, G.default], () => w.Z.isUserPlayingSounds(G.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return y || null == o
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(T.Z, {
                      guildId: c,
                      channel: o,
                      onClose: j(t),
                      analyticsSource: "action bar button",
                  });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: s,
                iconComponent: v,
                tooltip: h
                    ? en.intl.string(en.t["Ox4/zU"])
                    : f
                      ? en.intl.string(en.t["+YBKYI"])
                      : m
                        ? en.intl.string(en.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    b(),
                        (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                            type: X.Qu.SOUNDBOARD,
                            value: X.bk.PANEL_OPENED,
                            userId: G.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: I,
                defaultColor: I,
                onContextMenu: E,
                onMouseEnter: S,
                onMouseLeave: x,
                isActive: r,
                popoutOpen: r,
                disabled: y,
                isTrayButton: !0,
            });
        },
    });
}
function eh(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        s = (0, l.e7)([B.Z], () => B.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        u = () => {
            (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                type: X.Qu.CALL_BUTTON,
                value: X.bk.DISABLED,
                userId: G.default.getId(),
            }),
                s && f.default.disconnect();
        },
        c = (e, t) => {
            f.default.selectVoiceChannel(e),
                (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: X.Qu.CALL_BUTTON,
                    value: X.bk.ENABLED,
                    userId: G.default.getId(),
                    secondaryValue: t,
                });
        },
        [h, p] = r.useTransition(),
        m = (e) => (t) => {
            p(() => {
                e(t);
            }),
                (0, X.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: X.Qu.CALL_BUTTON,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        {
            Component: g,
            events: { onMouseEnter: y, onMouseLeave: O },
        } = (0, o.K)(),
        E = el(n),
        v = s ? g : d.Csw;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(k.Z, {
                currentVoiceChannel: t,
                onClose: E(n),
                onSelect: c,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: a,
                iconComponent: v,
                tooltip: s ? en.intl.string(en.t["6vrfgt"]) : en.intl.string(en.t.S0W8Z5),
                onClick: s ? u : m(n),
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
function ep(e) {
    let { voiceChannel: t } = e,
        n = (0, l.e7)([F.Z], () => F.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: ei.separatorDot }),
                    (0, i.jsxs)("div", {
                        className: ei.guildIconContainer,
                        children: [
                            (0, i.jsx)(C.Z, {
                                guild: n,
                                size: C.Z.Sizes.SMOL,
                                className: ei.guildIcon,
                            }),
                            (0, i.jsx)(d.Text, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: ei.guildName,
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
function ef(e) {
    let { voiceChannel: t } = e,
        n = (0, j.KS)(t),
        r = (0, x.ZP)(t);
    return (0, i.jsxs)("div", {
        className: ei.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(d.Text, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: ei.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: "sm",
                        color: "currentColor",
                    }),
                }),
            null != r &&
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ei.channelName,
                    children: r,
                }),
        ],
    });
}
function em(e) {
    var t, n;
    let { voiceChannel: r } = e,
        o = null == r ? void 0 : r.id,
        a = (0, l.cj)([Y.Z], () => ({
            quality: Y.Z.getQuality(),
            state: Y.Z.getState(),
            lastPing: Y.Z.getLastPing(),
        })),
        s = (0, l.e7)([K.Z], () => null != o && K.Z.hasVideo(o), [o]);
    return (
        null != o &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    N.Z,
                    ((t = er({}, a)),
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
                (0, i.jsx)(ep, { voiceChannel: r }),
                (0, i.jsx)("div", { className: ei.separatorDot }),
                (0, i.jsx)(ef, { voiceChannel: r }),
            ],
        })
    );
}
