n.d(t, {
    GF: () => eu,
    LK: () => eg,
    NO: () => eh,
    Yb: () => eo,
    pp: () => es,
    sm: () => ed,
    un: () => ec,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(377802),
    s = n(348858),
    o = n(416696),
    u = n(621956),
    c = n(446080),
    d = n(397927),
    h = n(827343),
    p = n(442433),
    f = n(956793),
    g = n(793574),
    m = n(688810),
    y = n(617354),
    A = n(980923),
    v = n(206018),
    b = n(750765),
    E = n(18235),
    O = n(183184),
    x = n(47167),
    _ = n(713654),
    S = n(880144),
    I = n(338771),
    j = n(263063),
    T = n(178442),
    C = n(209932),
    N = n(989799),
    w = n(167579),
    P = n(704877),
    D = n(173660),
    R = n(675991),
    k = n(848362),
    M = n(594831),
    L = n(222692),
    U = n(709562),
    G = n(996744),
    V = n(85612),
    z = n(277342),
    F = n(616356),
    H = n(961350),
    Y = n(71393),
    K = n(430452),
    W = n(383501),
    B = n(309010),
    Z = n(287809),
    X = n(977997),
    J = n(810412),
    Q = n(823901),
    q = n(592598),
    $ = n(395011),
    ee = n(243612),
    et = n(652215),
    en = n(985018),
    ei = n(991256);

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

function ea(e) {
    let {
            ref: t,
            isActive: n,
            disabled: r,
            iconComponent: l,
            iconColor: a,
            tooltip: s,
            defaultColor: o = "primaryDark",
            highlightedColor: u = "primaryDark",
            caretColor: c,
            popoutOpen: d,
            onClick: h,
            popoutDisabled: p,
            onPopoutClick: f,
            onMouseEnter: g,
            onMouseLeave: m,
            onContextMenu: y,
            isTrayButton: A,
        } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.getOwnPropertyNames(e);
                    for (i = 0; i < l.length; i++)
                        (n = l[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l;
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
    return (0, i.jsx)(U.l, {
        ref: t,
        onClick: null != h ? h : () => {},
        color: n ? u : o,
        className: ei.x6,
        disabled: r,
        popoutOpen: d,
        popoutDisabled: p,
        label: s,
        isTrayButton: A,
        onMouseEnter: (e) => {
            null == g || g(e);
        },
        onMouseLeave: (e) => {
            null == m || m(e);
        },
        iconComponent: l,
        iconColor: a,
        caretColor: c,
        isActive: n,
        onContextMenu: y,
        onPopoutClick: f,
        "aria-label": v["aria-label"],
    });
}

function es(e) {
    var t;
    let { voiceChannel: n, locked: a } = e,
        s = r.useRef(null),
        { suppress: o, selfMute: u, mute: c } = (0, D.A)(n),
        h = u || c || o,
        p = (0, A.A)(u, c, o, !1),
        { Component: f, play: m, events: y } = (0, z.q)(h);
    r.useEffect(() => () => m(), [m, h]);
    let b = el(a),
        E = (e) => (t) => {
            e(t),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.MICROPHONE,
                    value: J.IP.SETTINGS_OPENED,
                });
        },
        x = null == (t = (0, ee.b4)()) ? void 0 : t.id,
        _ = (0, l.bG)([q.A], () => q.A.isLimitedInteractionOverrideEnabled(x)),
        S = (0, G.Cg)({
            location: g.A.OVERLAY,
            autoTrackExposure: !0,
        });
    return (0, i.jsx)(d.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = b(t);
            return S
                ? (0, i.jsx)(V.a, {
                      wide: !0,
                      showOutputDevices: !0,
                      onSettingsButtonClick: n,
                      showSearchBar: !_,
                  })
                : (0, i.jsx)(v.A, {
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
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ea, {
                ref: s,
                iconComponent: f,
                isActive: h,
                highlightedColor: "red",
                tooltip: p,
                onClick: () => {
                    (0, O.A)(c, o, et.JJy.OVERLAY),
                        (0, J.YX)(et.uss.QUICK_ACTIONS, {
                            type: J.Z5.MICROPHONE,
                            value: h ? J.IP.ENABLED : J.IP.DISABLED,
                            userId: H.default.getId(),
                        });
                },
                onPopoutClick: E(n),
                onContextMenu: E(n),
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

function eo(e) {
    let { voiceChannel: t, locked: n } = e,
        l = r.useRef(null),
        { selfDeaf: a, deaf: o } = (0, w.A)(t),
        u = a || o,
        {
            Component: c,
            play: h,
            events: { onMouseEnter: p, onMouseLeave: f },
        } = (0, s.I)(u ? "undeafen" : "deafen"),
        g = o ? d.TJE : c;
    r.useEffect(() => () => h(), [u, h]);
    let m = () => {
            (0, E.A)(o, et.JJy.OVERLAY),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.AUDIO,
                    value: o ? J.IP.ENABLED : J.IP.DISABLED,
                    userId: H.default.getId(),
                });
        },
        A = (e) => (t) => {
            e(t),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.AUDIO,
                    value: J.IP.SETTINGS_OPENED,
                });
        },
        b = el(n);
    return (0, i.jsx)(d.YNO, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.A, {
                onClose: b(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: et.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ea, {
                ref: l,
                iconComponent: g,
                tooltip: (0, y.A)(a, o, !1),
                isActive: u,
                highlightedColor: "red",
                onClick: m,
                onContextMenu: A(n),
                onMouseEnter: p,
                onMouseLeave: f,
                onPopoutClick: A(n),
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}

function eu(e) {
    var t;
    let { voiceChannel: n, locked: a } = e,
        s = r.useRef(null),
        o = (0, l.bG)([K.A], () => K.A.isVideoEnabled()),
        u = (0, l.bG)([K.A], () => Object.values(K.A.getVideoDevices())[0]),
        p = null == (t = null == u ? void 0 : u.disabled) || t,
        f = !1 === p,
        g = (0, P.A)(n),
        m = (e) => {
            h.A.setVideoEnabled(e);
        },
        y = (e) => (t) => {
            e(t),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.CAMERA,
                    value: J.IP.SETTINGS_OPENED,
                });
        },
        A = () => {
            p ? (f ? m(!0) : (0, L.A)()) : m(!o),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.CAMERA,
                    value: o ? J.IP.DISABLED : J.IP.ENABLED,
                    userId: H.default.getId(),
                });
        },
        {
            Component: v,
            play: E,
            events: { onMouseEnter: O, onMouseLeave: x },
        } = (0, c.K)(o ? "disable" : "enable"),
        _ =
            null != n
                ? (0, R.Q)({
                      enabled: o,
                      cameraUnavailable: p,
                      hasPermission: g,
                      channel: n,
                  })
                : void 0;
    r.useEffect(() => () => E(), [o, E]);
    let S = el(a),
        I = null == n || !g;
    return (0, i.jsx)(d.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(b.A, {
                onClose: S(t),
                appContext: et.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ea, {
                ref: s,
                iconComponent: v,
                tooltip: _,
                onClick: A,
                isActive: o,
                highlightedColor: "green",
                onPopoutClick: y(n),
                popoutOpen: r,
                onContextMenu: y(n),
                onMouseEnter: O,
                onMouseLeave: x,
                disabled: I,
                isTrayButton: !0,
            });
        },
    });
}

function ec(e) {
    let t,
        { voiceChannel: n, locked: a } = e,
        s = r.useRef(null),
        u = (0, l.bG)([Z.default], () => Z.default.getCurrentUser()),
        c = (0, P.A)(n),
        h = (0, l.cf)([K.A], () => (0, S.A)(K.A)),
        p = (0, l.bG)([F.A], () => F.A.getCurrentUserActiveStream()),
        f = (0, l.bG)([$.A], () => $.A.getTargetPID()),
        g = (0, Q.y)({
            pid: f,
            allowOneClickGoLive: !0,
            analyticsLocation: et.ThZ.UNLOCKED_OVERLAY,
        }),
        m = () => {
            g(),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.GO_LIVE,
                    value: J.IP.ENABLED,
                    userId: H.default.getId(),
                });
        },
        y = null != p;
    if (y) t = en.intl.string(en.t.S5anIc);
    else if (null != n) {
        let e = (0, ee.qv)();
        t = c
            ? null != e
                ? en.intl.format(en.t.AB5gTy, {
                      game: e.name,
                  })
                : en.intl.string(en.t.FeUKeA)
            : en.intl.string(en.t.uQn9B8);
    }
    let A = () => {
            if (y)
                return (
                    (0, J.YX)(et.uss.QUICK_ACTIONS, {
                        type: J.Z5.GO_LIVE,
                        value: J.IP.DISABLED,
                        userId: H.default.getId(),
                    }),
                    (0, I.A)(p, !1)
                );
            m();
        },
        v = (e) => (t) => {
            e(t),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.SCREEN_SHARE,
                    value: J.IP.SETTINGS_OPENED,
                });
        },
        {
            Component: b,
            events: { onMouseEnter: E, onMouseLeave: O },
            play: x,
        } = (0, o.c)(y ? "disable" : "enable");
    r.useEffect(() => () => x(), [y, x]);
    let _ = el(a);
    return (0, i.jsx)(d.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(k.A, {
                channel: n,
                currentUser: u,
                activeStreams: y ? [p] : [],
                handleGoLive: m,
                onClose: _(t),
                appContext: et.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: l } = n;
            return (0, i.jsx)(ea, {
                ref: s,
                iconComponent: b,
                tooltip: t,
                "aria-label": en.intl.string(en.t.FeUKeA),
                isActive: y,
                highlightedColor: "green",
                onClick: A,
                popoutOpen: l,
                popoutDisabled: !y,
                onPopoutClick: v(r),
                onContextMenu: v(r),
                onMouseEnter: E,
                onMouseLeave: O,
                disabled: !h || !c,
                isTrayButton: !0,
            });
        },
    });
}

function ed(e) {
    var t;
    let { voiceChannel: a, locked: s } = e,
        o = r.useRef(null),
        c = null != (t = null == a ? void 0 : a.getGuildId()) ? t : null,
        { mute: h, suppress: f } = (0, D.A)(a),
        g = (0, l.bG)([K.A], () => K.A.isDeaf()),
        y = null == a || h || f || g,
        { analyticsLocations: A } = (0, m.Ay)();

    function v(e) {
        null != c &&
            ((0, J.YX)(et.uss.QUICK_ACTIONS, {
                type: J.Z5.SOUNDBOARD,
                value: J.IP.SETTINGS_OPENED,
            }),
            (0, p.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        er(
                            {
                                sourceAnalyticsLocations: A,
                                guildId: c,
                            },
                            t,
                        ),
                    );
            }));
    }
    let {
            Component: b,
            events: { onClick: E, onMouseEnter: O, onMouseLeave: x },
        } = (0, u.E)(),
        _ = el(s),
        S = (0, l.bG)([C.A, H.default], () => C.A.isUserPlayingSounds(H.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(d.YNO, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return y || null == a
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(N.A, {
                      guildId: c,
                      channel: a,
                      onClose: _(t),
                      analyticsSource: "action bar button",
                  });
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ea, {
                ref: o,
                iconComponent: b,
                tooltip: h
                    ? en.intl.string(en.t["Ox4/zU"])
                    : f
                      ? en.intl.string(en.t["+YBKYI"])
                      : g
                        ? en.intl.string(en.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    E(),
                        (0, J.YX)(et.uss.QUICK_ACTIONS, {
                            type: J.Z5.SOUNDBOARD,
                            value: J.IP.PANEL_OPENED,
                            userId: H.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: S,
                defaultColor: S,
                onContextMenu: v,
                onMouseEnter: O,
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
        s = r.useRef(null),
        o = (0, l.bG)([B.A], () => B.A.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        u = () => {
            (0, J.YX)(et.uss.QUICK_ACTIONS, {
                type: J.Z5.CALL_BUTTON,
                value: J.IP.DISABLED,
                userId: H.default.getId(),
            }),
                o && f.default.disconnect();
        },
        c = (e, t) => {
            f.default.selectVoiceChannel(e),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.CALL_BUTTON,
                    value: J.IP.ENABLED,
                    userId: H.default.getId(),
                    secondaryValue: t,
                });
        },
        [h, p] = r.useTransition(),
        g = (e) => (t) => {
            p(() => {
                e(t);
            }),
                (0, J.YX)(et.uss.QUICK_ACTIONS, {
                    type: J.Z5.CALL_BUTTON,
                    value: J.IP.SETTINGS_OPENED,
                });
        },
        {
            Component: m,
            events: { onMouseEnter: y, onMouseLeave: A },
        } = (0, a.O)(),
        v = el(n),
        b = (0, M.qZ)(),
        E = o ? m : d._jp;
    return (0, i.jsx)(d.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(M.Ay, {
                allAvailableChannelRows: b,
                currentVoiceChannel: t,
                onClose: v(n),
                onSelect: c,
            });
        },
        align: "center",
        position: "top",
        animation: d.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ea, {
                ref: s,
                iconComponent: E,
                tooltip: o ? en.intl.string(en.t["6vrfgt"]) : en.intl.string(en.t.S0W8Z5),
                onClick: o ? u : g(n),
                defaultColor: o ? "disconnect" : void 0,
                onMouseEnter: y,
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

function ep(e) {
    let { voiceChannel: t } = e,
        n = (0, l.bG)([Y.A], () => Y.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", {
                        className: ei.rK,
                    }),
                    (0, i.jsxs)("div", {
                        className: ei._C,
                        children: [
                            (0, i.jsx)(j.A, {
                                guild: n,
                                size: j.A.Sizes.SMOL,
                                className: ei.$f,
                            }),
                            (0, i.jsx)(d.Text, {
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

function ef(e) {
    let { voiceChannel: t } = e,
        n = (0, _.gU)(t),
        r = (0, x.Ay)(t);
    return (0, i.jsxs)("div", {
        className: ei.Wh,
        children: [
            null != n &&
                (0, i.jsx)(d.Text, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: ei.p,
                    children: (0, i.jsx)(n, {
                        size: "sm",
                        color: "currentColor",
                    }),
                }),
            null != r &&
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ei.HA,
                    children: r,
                }),
        ],
    });
}

function eg(e) {
    var t, n;
    let { voiceChannel: r } = e,
        a = null == r ? void 0 : r.id,
        s = (0, l.cf)([W.A], () => ({
            quality: W.A.getQuality(),
            state: W.A.getState(),
            lastPing: W.A.getLastPing(),
        })),
        o = (0, l.bG)([X.A], () => null != a && X.A.hasVideo(a), [a]);
    return (
        null != a &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    T.A,
                    ((t = er({}, s)),
                    (n = n =
                        {
                            channelId: a,
                            hasVideo: o,
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
                (0, i.jsx)(ep, {
                    voiceChannel: r,
                }),
                (0, i.jsx)("div", {
                    className: ei.rK,
                }),
                (0, i.jsx)(ef, {
                    voiceChannel: r,
                }),
            ],
        })
    );
}
