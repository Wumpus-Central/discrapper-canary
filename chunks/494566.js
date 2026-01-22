n.d(t, {
    GF: () => ec,
    LK: () => em,
    NO: () => ep,
    Yb: () => es,
    pp: () => eo,
    sm: () => ed,
    un: () => eu,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(377802),
    o = n(348858),
    s = n(416696),
    c = n(621956),
    u = n(446080),
    d = n(397927),
    p = n(827343),
    h = n(442433),
    f = n(956793),
    m = n(793574),
    g = n(688810),
    y = n(617354),
    A = n(980923),
    O = n(206018),
    E = n(750765),
    v = n(18235),
    b = n(183184),
    S = n(47167),
    x = n(713654),
    j = n(880144),
    I = n(338771),
    N = n(263063),
    w = n(178442),
    T = n(209932),
    C = n(989799),
    _ = n(167579),
    P = n(927258),
    D = n(173660),
    R = n(675991),
    L = n(848362),
    k = n(594831),
    M = n(222692),
    V = n(709562),
    U = n(996744),
    z = n(85612),
    G = n(277342),
    H = n(616356),
    Y = n(961350),
    F = n(71393),
    K = n(430452),
    Z = n(383501),
    W = n(309010),
    B = n(287809),
    X = n(977997),
    Q = n(810412),
    J = n(823901),
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
            tooltip: o,
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
            isTrayButton: A,
        } = e,
        O = (function (e, t) {
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
    return (0, i.jsx)(V.l, {
        ref: t,
        onClick: null != p ? p : () => {},
        color: n ? c : s,
        className: ei.x6,
        disabled: r,
        popoutOpen: d,
        popoutDisabled: h,
        label: o,
        isTrayButton: A,
        onMouseEnter: (e) => {
            null == m || m(e);
        },
        onMouseLeave: (e) => {
            null == g || g(e);
        },
        iconComponent: l,
        iconColor: a,
        caretColor: u,
        isActive: n,
        onContextMenu: y,
        onPopoutClick: f,
        "aria-label": O["aria-label"],
    });
}

function eo(e) {
    var t;
    let { voiceChannel: n, locked: a } = e,
        o = r.useRef(null),
        { suppress: s, selfMute: c, mute: u } = (0, D.A)(n),
        p = c || u || s,
        h = (0, A.A)(c, u, s, !1),
        { Component: f, play: g, events: y } = (0, G.q)(p);
    r.useEffect(() => () => g(), [g, p]);
    let E = el(a),
        v = (e) => (t) => {
            e(t),
                (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                    type: Q.Z5.MICROPHONE,
                    value: Q.IP.SETTINGS_OPENED,
                });
        },
        S = null == (t = (0, ee.b4)()) ? void 0 : t.id,
        x = (0, l.bG)([q.A], () => q.A.isLimitedInteractionOverrideEnabled(S)),
        j = (0, U.Cg)({
            location: m.A.OVERLAY,
            autoTrackExposure: !0,
        });
    return (0, i.jsx)(d.YNO, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = E(t);
            return j
                ? (0, i.jsx)(z.a, {
                      wide: !0,
                      showOutputDevices: !0,
                      onSettingsButtonClick: n,
                      showSearchBar: !x,
                  })
                : (0, i.jsx)(O.A, {
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
                ref: o,
                iconComponent: f,
                isActive: p,
                highlightedColor: "red",
                tooltip: h,
                onClick: () => {
                    (0, b.A)(u, s, et.JJy.OVERLAY),
                        (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                            type: Q.Z5.MICROPHONE,
                            value: p ? Q.IP.ENABLED : Q.IP.DISABLED,
                            userId: Y.default.getId(),
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

function es(e) {
    let { voiceChannel: t, locked: n } = e,
        l = r.useRef(null),
        { selfDeaf: a, deaf: s } = (0, _.A)(t),
        c = a || s,
        {
            Component: u,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: f },
        } = (0, o.I)(c ? "undeafen" : "deafen"),
        m = s ? d.TJE : u;
    r.useEffect(() => () => p(), [c, p]);
    let g = () => {
            (0, v.A)(s, et.JJy.OVERLAY),
                (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                    type: Q.Z5.AUDIO,
                    value: s ? Q.IP.ENABLED : Q.IP.DISABLED,
                    userId: Y.default.getId(),
                });
        },
        A = (e) => (t) => {
            e(t),
                (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                    type: Q.Z5.AUDIO,
                    value: Q.IP.SETTINGS_OPENED,
                });
        },
        E = el(n);
    return (0, i.jsx)(d.YNO, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(O.A, {
                onClose: E(t),
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
                iconComponent: m,
                tooltip: (0, y.A)(a, s, !1),
                isActive: c,
                highlightedColor: "red",
                onClick: g,
                onContextMenu: A(n),
                onMouseEnter: h,
                onMouseLeave: f,
                onPopoutClick: A(n),
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}

function ec(e) {
    var t;
    let { voiceChannel: n, locked: a } = e,
        o = r.useRef(null),
        s = (0, l.bG)([K.A], () => K.A.isVideoEnabled()),
        c = (0, l.bG)([K.A], () => Object.values(K.A.getVideoDevices())[0]),
        h = null == (t = null == c ? void 0 : c.disabled) || t,
        f = !1 === h,
        m = (0, P.A)(n),
        g = (e) => {
            p.A.setVideoEnabled(e);
        },
        y = (e) => (t) => {
            e(t),
                (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                    type: Q.Z5.CAMERA,
                    value: Q.IP.SETTINGS_OPENED,
                });
        },
        A = () => {
            h ? (f ? g(!0) : (0, M.A)()) : g(!s),
                (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                    type: Q.Z5.CAMERA,
                    value: s ? Q.IP.DISABLED : Q.IP.ENABLED,
                    userId: Y.default.getId(),
                });
        },
        {
            Component: O,
            play: v,
            events: { onMouseEnter: b, onMouseLeave: S },
        } = (0, u.K)(s ? "disable" : "enable"),
        x =
            null != n
                ? (0, R.Q)({
                      enabled: s,
                      cameraUnavailable: h,
                      hasPermission: m,
                      channel: n,
                  })
                : void 0;
    r.useEffect(() => () => v(), [s, v]);
    let j = el(a),
        I = null == n || !m;
    return (0, i.jsx)(d.YNO, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.A, {
                onClose: j(t),
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
                ref: o,
                iconComponent: O,
                tooltip: x,
                onClick: A,
                isActive: s,
                highlightedColor: "green",
                onPopoutClick: y(n),
                popoutOpen: r,
                onContextMenu: y(n),
                onMouseEnter: b,
                onMouseLeave: S,
                disabled: I,
                isTrayButton: !0,
            });
        },
    });
}

function eu(e) {
    let t,
        { voiceChannel: n, locked: a } = e,
        o = r.useRef(null),
        c = (0, l.bG)([B.default], () => B.default.getCurrentUser()),
        u = (0, P.A)(n),
        p = (0, l.cf)([K.A], () => (0, j.A)(K.A)),
        h = (0, l.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
        f = (0, l.bG)([$.A], () => $.A.getTargetPID()),
        m = (0, J.y)({
            pid: f,
            allowOneClickGoLive: !0,
            analyticsLocation: et.ThZ.UNLOCKED_OVERLAY,
        }),
        g = () => {
            m(),
                (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                    type: Q.Z5.GO_LIVE,
                    value: Q.IP.ENABLED,
                    userId: Y.default.getId(),
                });
        },
        y = null != h;
    if (y) t = en.intl.string(en.t.S5anIc);
    else if (null != n) {
        let e = (0, ee.qv)();
        t = u
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
                    (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                        type: Q.Z5.GO_LIVE,
                        value: Q.IP.DISABLED,
                        userId: Y.default.getId(),
                    }),
                    (0, I.A)(h, !1)
                );
            g();
        },
        O = (e) => (t) => {
            e(t),
                (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                    type: Q.Z5.SCREEN_SHARE,
                    value: Q.IP.SETTINGS_OPENED,
                });
        },
        {
            Component: E,
            events: { onMouseEnter: v, onMouseLeave: b },
            play: S,
        } = (0, s.c)(y ? "disable" : "enable");
    r.useEffect(() => () => S(), [y, S]);
    let x = el(a);
    return (0, i.jsx)(d.YNO, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(L.A, {
                channel: n,
                currentUser: c,
                activeStreams: y ? [h] : [],
                handleGoLive: g,
                onClose: x(t),
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
                ref: o,
                iconComponent: E,
                tooltip: t,
                "aria-label": en.intl.string(en.t.FeUKeA),
                isActive: y,
                highlightedColor: "green",
                onClick: A,
                popoutOpen: l,
                popoutDisabled: !y,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: v,
                onMouseLeave: b,
                disabled: !p || !u,
                isTrayButton: !0,
            });
        },
    });
}

function ed(e) {
    var t;
    let { voiceChannel: a, locked: o } = e,
        s = r.useRef(null),
        u = null != (t = null == a ? void 0 : a.getGuildId()) ? t : null,
        { mute: p, suppress: f } = (0, D.A)(a),
        m = (0, l.bG)([K.A], () => K.A.isDeaf()),
        y = null == a || p || f || m,
        { analyticsLocations: A } = (0, g.Ay)();

    function O(e) {
        null != u &&
            ((0, Q.YX)(et.uss.QUICK_ACTIONS, {
                type: Q.Z5.SOUNDBOARD,
                value: Q.IP.SETTINGS_OPENED,
            }),
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        er(
                            {
                                sourceAnalyticsLocations: A,
                                guildId: u,
                            },
                            t,
                        ),
                    );
            }));
    }
    let {
            Component: E,
            events: { onClick: v, onMouseEnter: b, onMouseLeave: S },
        } = (0, c.E)(),
        x = el(o),
        j = (0, l.bG)([T.A, Y.default], () => T.A.isUserPlayingSounds(Y.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(d.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return y || null == a
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(C.A, {
                      guildId: u,
                      channel: a,
                      onClose: x(t),
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
                ref: s,
                iconComponent: E,
                tooltip: p
                    ? en.intl.string(en.t["Ox4/zU"])
                    : f
                      ? en.intl.string(en.t["+YBKYI"])
                      : m
                        ? en.intl.string(en.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    v(),
                        (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                            type: Q.Z5.SOUNDBOARD,
                            value: Q.IP.PANEL_OPENED,
                            userId: Y.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: j,
                defaultColor: j,
                onContextMenu: O,
                onMouseEnter: b,
                onMouseLeave: S,
                isActive: r,
                popoutOpen: r,
                disabled: y,
                isTrayButton: !0,
            });
        },
    });
}

function ep(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        s = (0, l.bG)([W.A], () => W.A.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        c = () => {
            (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                type: Q.Z5.CALL_BUTTON,
                value: Q.IP.DISABLED,
                userId: Y.default.getId(),
            }),
                s && f.default.disconnect();
        },
        u = (e, t) => {
            f.default.selectVoiceChannel(e),
                (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                    type: Q.Z5.CALL_BUTTON,
                    value: Q.IP.ENABLED,
                    userId: Y.default.getId(),
                    secondaryValue: t,
                });
        },
        [p, h] = r.useTransition(),
        m = (e) => (t) => {
            h(() => {
                e(t);
            }),
                (0, Q.YX)(et.uss.QUICK_ACTIONS, {
                    type: Q.Z5.CALL_BUTTON,
                    value: Q.IP.SETTINGS_OPENED,
                });
        },
        {
            Component: g,
            events: { onMouseEnter: y, onMouseLeave: A },
        } = (0, a.O)(),
        O = el(n),
        E = s ? g : d._jp;
    return (0, i.jsx)(d.YNO, {
        targetElementRef: o,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(k.A, {
                currentVoiceChannel: t,
                onClose: O(n),
                onSelect: u,
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
                iconComponent: E,
                tooltip: s ? en.intl.string(en.t["6vrfgt"]) : en.intl.string(en.t.S0W8Z5),
                onClick: s ? c : m(n),
                defaultColor: s ? "disconnect" : void 0,
                onMouseEnter: y,
                onMouseLeave: A,
                onContextMenu: m(n),
                isActive: r,
                onPopoutClick: s ? m(n) : void 0,
                popoutOpen: r,
                isTrayButton: !0,
            });
        },
    });
}

function eh(e) {
    let { voiceChannel: t } = e,
        n = (0, l.bG)([F.A], () => F.A.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(N.A, {
                                guild: n,
                                size: N.A.Sizes.SMOL,
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
        n = (0, x.gU)(t),
        r = (0, S.Ay)(t);
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

function em(e) {
    var t, n;
    let { voiceChannel: r } = e,
        a = null == r ? void 0 : r.id,
        o = (0, l.cf)([Z.A], () => ({
            quality: Z.A.getQuality(),
            state: Z.A.getState(),
            lastPing: Z.A.getLastPing(),
        })),
        s = (0, l.bG)([X.A], () => null != a && X.A.hasVideo(a), [a]);
    return (
        null != a &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    w.A,
                    ((t = er({}, o)),
                    (n = n =
                        {
                            channelId: a,
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
                (0, i.jsx)(eh, {
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
