n.d(t, {
    L: () => eh,
    N3: () => es,
    Ox: () => el,
    SE: () => ea,
    aG: () => eu,
    c_: () => ed,
    sm: () => ec,
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    o = n(442837),
    l = n(685072),
    a = n(400354),
    s = n(864094),
    c = n(582019),
    u = n(75735),
    d = n(481060),
    p = n(846027),
    f = n(239091),
    h = n(287734),
    m = n(100527),
    g = n(906732),
    y = n(571250),
    O = n(628581),
    b = n(659580),
    v = n(793865),
    E = n(55311),
    _ = n(575175),
    x = n(933557),
    S = n(471445),
    I = n(74299),
    j = n(803647),
    C = n(565138),
    N = n(917405),
    w = n(763296),
    Z = n(603074),
    P = n(879815),
    T = n(189771),
    A = n(294629),
    k = n(67844),
    D = n(544384),
    R = n(890828),
    L = n(560688),
    M = n(871499),
    z = n(540650),
    U = n(8404),
    V = n(199902),
    W = n(314897),
    F = n(430824),
    G = n(131951),
    B = n(19780),
    H = n(944486),
    Y = n(594174),
    Q = n(979651),
    K = n(145597),
    X = n(444295),
    J = n(624864),
    q = n(388627),
    $ = n(810632),
    ee = n(981631),
    et = n(388032),
    en = n(131714);
function ei(e) {
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
function er(e) {
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
            iconComponent: o,
            iconColor: l,
            tooltip: a,
            defaultColor: s = "primaryDark",
            highlightedColor: c = "primaryDark",
            caretColor: u,
            popoutOpen: d,
            onClick: p,
            popoutDisabled: f,
            onPopoutClick: h,
            onMouseEnter: m,
            onMouseLeave: g,
            onContextMenu: y,
            isTrayButton: O,
        } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++)
                    (n = o[i]),
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
        onClick: null != p ? p : () => {},
        color: n ? c : s,
        className: en.button,
        disabled: r,
        popoutOpen: d,
        popoutDisabled: f,
        label: a,
        isTrayButton: O,
        onMouseEnter: (e) => {
            null == m || m(e);
        },
        onMouseLeave: (e) => {
            null == g || g(e);
        },
        iconComponent: o,
        iconColor: l,
        caretColor: u,
        isActive: n,
        onContextMenu: y,
        onPopoutClick: h,
        "aria-label": b["aria-label"],
    });
}
function el(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        { suppress: s, selfMute: c, mute: u } = (0, A.Z)(n),
        p = c || u || s,
        f = (0, O.Z)(c, u, s, !1),
        { Component: h, play: g, events: y } = (0, U.b)(p);
    r.useEffect(() => () => g(), [g, p]);
    let b = er(l),
        v = (e) => (t) => {
            e(t),
                (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: X.Qu.MICROPHONE,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        E = null == (t = (0, q.II)()) ? void 0 : t.id,
        x = (0, o.e7)([J.Z], () => J.Z.isLimitedInteractionOverrideEnabled(E));
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(z.R, {
                onClose: b(t),
                location: m.Z.OVERLAY,
                overlayLimitedInteraction: x,
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
                iconComponent: h,
                isActive: p,
                highlightedColor: "red",
                tooltip: f,
                onClick: () => {
                    (0, _.Z)(u, s, ee.jXE.OVERLAY),
                        (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                            type: X.Qu.MICROPHONE,
                            value: p ? X.bk.ENABLED : X.bk.DISABLED,
                            userId: W.default.getId(),
                        });
                },
                onPopoutClick: v(n),
                onContextMenu: v(n),
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
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        { selfDeaf: l, deaf: s } = (0, P.Z)(t),
        c = l || s,
        {
            Component: u,
            play: p,
            events: { onMouseEnter: f, onMouseLeave: h },
        } = (0, a.l)(c ? "undeafen" : "deafen"),
        m = s ? d.Vm4 : u;
    r.useEffect(() => () => p(), [c, p]);
    let g = () => {
            (0, E.Z)(s, ee.jXE.OVERLAY),
                (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: X.Qu.AUDIO,
                    value: s ? X.bk.ENABLED : X.bk.DISABLED,
                    userId: W.default.getId(),
                });
        },
        O = (e) => (t) => {
            e(t),
                (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: X.Qu.AUDIO,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        v = er(n);
    return (0, i.jsx)(d.yRy, {
        targetElementRef: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(b.default, {
                onClose: v(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: ee.IlC.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: o,
                iconComponent: m,
                tooltip: (0, y.Z)(l, s, !1),
                isActive: c,
                highlightedColor: "red",
                onClick: g,
                onContextMenu: O(n),
                onMouseEnter: f,
                onMouseLeave: h,
                onPopoutClick: O(n),
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}
function es(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        s = (0, o.e7)([G.Z], () => G.Z.isVideoEnabled()),
        c = (0, o.e7)([G.Z], () => Object.values(G.Z.getVideoDevices())[0]),
        f = null == (t = null == c ? void 0 : c.disabled) || t,
        h = !1 === f,
        m = (0, T.Z)(n),
        g = (e) => {
            p.Z.setVideoEnabled(e);
        },
        y = (e) => (t) => {
            e(t),
                (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: X.Qu.CAMERA,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        O = () => {
            f ? (h ? g(!0) : (0, L.Z)()) : g(!s),
                (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: X.Qu.CAMERA,
                    value: s ? X.bk.DISABLED : X.bk.ENABLED,
                    userId: W.default.getId(),
                });
        },
        {
            Component: b,
            play: E,
            events: { onMouseEnter: _, onMouseLeave: x },
        } = (0, u.o)(s ? "disable" : "enable"),
        S =
            null != n
                ? (0, k.X)({
                      enabled: s,
                      cameraUnavailable: f,
                      hasPermission: m,
                      channel: n,
                  })
                : void 0;
    r.useEffect(() => () => E(), [s, E]);
    let I = er(l),
        j = null == n || !m;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.Z, {
                onClose: I(t),
                appContext: ee.IlC.OVERLAY,
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
                iconComponent: b,
                tooltip: S,
                onClick: O,
                isActive: s,
                highlightedColor: "green",
                onPopoutClick: y(n),
                popoutOpen: r,
                onContextMenu: y(n),
                onMouseEnter: _,
                onMouseLeave: x,
                disabled: j,
                isTrayButton: !0,
            });
        },
    });
}
function ec(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        c = (0, o.e7)([Y.default], () => Y.default.getCurrentUser()),
        u = (0, T.Z)(n),
        p = (0, o.cj)([G.Z], () => (0, I.Z)(G.Z)),
        f = (0, o.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
        h = (0, $.g)((0, K.getPID)()),
        m = () => {
            h(),
                (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: X.Qu.GO_LIVE,
                    value: X.bk.ENABLED,
                    userId: W.default.getId(),
                });
        },
        g = null != f;
    if (g) t = et.intl.string(et.t.S5anIS);
    else if (null != n) {
        let e = (0, q.pL)();
        t = u
            ? null != e
                ? et.intl.format(et.t.AB5gT0, { game: e.name })
                : et.intl.string(et.t.FeUKeH)
            : et.intl.string(et.t.uQn9Bw);
    }
    let y = () => {
            if (g)
                return (
                    (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                        type: X.Qu.GO_LIVE,
                        value: X.bk.DISABLED,
                        userId: W.default.getId(),
                    }),
                    (0, j.Z)(f, !1)
                );
            m();
        },
        O = (e) => (t) => {
            e(t),
                (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: X.Qu.SCREEN_SHARE,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        {
            Component: b,
            events: { onMouseEnter: v, onMouseLeave: E },
            play: _,
        } = (0, s.P)(g ? "disable" : "enable");
    r.useEffect(() => () => _(), [g, _]);
    let x = er(l);
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(D.Z, {
                channel: n,
                currentUser: c,
                activeStreams: g ? [f] : [],
                handleGoLive: m,
                onClose: x(t),
                appContext: ee.IlC.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: d.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(eo, {
                ref: a,
                iconComponent: b,
                tooltip: t,
                "aria-label": et.intl.string(et.t.FeUKeH),
                isActive: g,
                highlightedColor: "green",
                onClick: y,
                popoutOpen: o,
                popoutDisabled: !g,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: v,
                onMouseLeave: E,
                disabled: !p || !u,
                isTrayButton: !0,
            });
        },
    });
}
function eu(e) {
    var t;
    let { voiceChannel: l, locked: a } = e,
        s = r.useRef(null),
        u = null != (t = null == l ? void 0 : l.getGuildId()) ? t : null,
        { mute: p, suppress: h } = (0, A.Z)(l),
        m = (0, o.e7)([G.Z], () => G.Z.isDeaf()),
        y = null == l || p || h || m,
        { analyticsLocations: O } = (0, g.ZP)();
    function b(e) {
        null != u &&
            ((0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                type: X.Qu.SOUNDBOARD,
                value: X.bk.SETTINGS_OPENED,
            }),
            (0, f.jW)(e, async () => {
                let { default: e } = await n.e("56049").then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        ei(
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
            Component: v,
            events: { onClick: E, onMouseEnter: _, onMouseLeave: x },
        } = (0, c.j)(),
        S = er(a),
        I = (0, o.e7)([w.Z, W.default], () => w.Z.isUserPlayingSounds(W.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return y || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(Z.Z, {
                      guildId: u,
                      channel: l,
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
            return (0, i.jsx)(eo, {
                ref: s,
                iconComponent: v,
                tooltip: p
                    ? et.intl.string(et.t["Ox4/zc"])
                    : h
                      ? et.intl.string(et.t["+YBKYG"])
                      : m
                        ? et.intl.string(et.t.X1lQlp)
                        : void 0,
                onClick: (e) => {
                    E(),
                        (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                            type: X.Qu.SOUNDBOARD,
                            value: X.bk.PANEL_OPENED,
                            userId: W.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: I,
                defaultColor: I,
                onContextMenu: b,
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
function ed(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        s = (0, o.e7)([H.Z], () => H.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        c = () => {
            (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                type: X.Qu.CALL_BUTTON,
                value: X.bk.DISABLED,
                userId: W.default.getId(),
            }),
                s && h.default.disconnect();
        },
        u = (e) => {
            h.default.selectVoiceChannel(e),
                (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: X.Qu.CALL_BUTTON,
                    value: X.bk.ENABLED,
                    userId: W.default.getId(),
                });
        },
        [p, f] = r.useTransition(),
        m = (e) => (t) => {
            f(() => {
                e(t);
            }),
                (0, X.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: X.Qu.CALL_BUTTON,
                    value: X.bk.SETTINGS_OPENED,
                });
        },
        {
            Component: g,
            events: { onMouseEnter: y, onMouseLeave: O },
        } = (0, l.K)(),
        b = er(n),
        v = s ? g : d.Csw;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(R.Z, {
                currentVoiceChannel: t,
                onClose: b(n),
                onSelect: u,
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
                tooltip: s ? et.intl.string(et.t["6vrfgo"]) : et.intl.string(et.t.S0W8Z2),
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
function ep(e) {
    let { voiceChannel: t } = e,
        n = (0, o.e7)([F.Z], () => F.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: en.separatorDot }),
                    (0, i.jsxs)("div", {
                        className: en.guildIconContainer,
                        children: [
                            (0, i.jsx)(C.Z, {
                                guild: n,
                                size: C.Z.Sizes.SMOL,
                                className: en.guildIcon,
                            }),
                            (0, i.jsx)(d.Text, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-primary",
                                className: en.guildName,
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
        n = (0, S.KS)(t),
        r = (0, x.ZP)(t);
    return (0, i.jsxs)("div", {
        className: en.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(d.Text, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: en.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: "sm",
                        color: "currentColor",
                    }),
                }),
            null != r &&
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: en.channelName,
                    children: r,
                }),
        ],
    });
}
function eh(e) {
    var t, n;
    let { voiceChannel: r } = e,
        l = null == r ? void 0 : r.id,
        a = (0, o.cj)([B.Z], () => ({
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing(),
        })),
        s = (0, o.e7)([Q.Z], () => null != l && Q.Z.hasVideo(l), [l]);
    return (
        null != l &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    N.Z,
                    ((t = ei({}, a)),
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
                (0, i.jsx)(ep, { voiceChannel: r }),
                (0, i.jsx)("div", { className: en.separatorDot }),
                (0, i.jsx)(ef, { voiceChannel: r }),
            ],
        })
    );
}
