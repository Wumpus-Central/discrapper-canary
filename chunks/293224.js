n.d(t, {
    L: () => ed,
    N3: () => eo,
    Ox: () => ei,
    SE: () => er,
    aG: () => ea,
    c_: () => es,
    sm: () => el
});
var i = n(200651),
    r = n(192379),
    o = n(691324),
    l = n(442837),
    a = n(685072),
    s = n(400354),
    c = n(652844),
    u = n(864094),
    d = n(582019),
    p = n(75735),
    f = n(481060),
    h = n(846027),
    g = n(239091),
    _ = n(287734),
    m = n(571250),
    v = n(628581),
    O = n(659580),
    b = n(793865),
    y = n(55311),
    E = n(575175),
    x = n(933557),
    I = n(471445),
    S = n(44315),
    C = n(74299),
    j = n(803647),
    w = n(565138),
    Z = n(917405),
    N = n(763296),
    P = n(603074),
    T = n(879815),
    k = n(189771),
    A = n(294629),
    D = n(67844),
    R = n(544384),
    L = n(892807),
    W = n(560688),
    M = n(871499),
    z = n(199902),
    V = n(314897),
    U = n(430824),
    F = n(131951),
    B = n(19780),
    G = n(944486),
    H = n(594174),
    Y = n(979651),
    Q = n(444295),
    K = n(388627),
    X = n(810632),
    J = n(981631),
    q = n(388032),
    $ = n(322487);
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function et(e) {
    let t = r.useRef(null);
    return (
        r.useEffect(() => {
            if (e) {
                var n;
                null === (n = t.current) || void 0 === n || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function en(e) {
    var { isToggled: t, disabled: n, iconComponent: r, iconColor: o, tooltip: l, defaultColor: a = 'primaryDark', highlightedColor: s = 'white', popoutOpen: c, onClick: u, popoutDisabled: d, onPopoutClick: p, onMouseEnter: f, onMouseLeave: h, onContextMenu: g, fullRegionButton: _ } = e,
        m = (function (e, t) {
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
                for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['isToggled', 'disabled', 'iconComponent', 'iconColor', 'tooltip', 'defaultColor', 'highlightedColor', 'popoutOpen', 'onClick', 'popoutDisabled', 'onPopoutClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'fullRegionButton']);
    return (0, i.jsx)(M.d, {
        onClick: null != u ? u : () => {},
        color: t ? s : a,
        className: $.button,
        disabled: n,
        popoutOpen: c,
        popoutDisabled: d,
        label: l,
        fullRegionButton: _,
        forceGroupedButtons: !0,
        onMouseEnter: (e) => {
            null == f || f(e);
        },
        onMouseLeave: (e) => {
            null == h || h(e);
        },
        ignoreColorForCaret: !c,
        iconComponent: r,
        iconColor: o,
        isActive: t,
        onContextMenu: g,
        onPopoutClick: p,
        'aria-label': m['aria-label']
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: l, selfMute: a, mute: s } = (0, A.Z)(t),
        u = a || s || l,
        d = (0, v.Z)(a, s, l, !1),
        { Component: p, play: h, events: g } = (0, c.O)(u ? 'unmute' : 'mute');
    r.useEffect(() => () => h(), [h, u]);
    let _ = et(n),
        m = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.MICROPHONE,
                    value: Q.bk.SETTINGS_OPENED
                });
        };
    return (0, i.jsx)(f.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(O.default, {
                onClose: _(t),
                renderInputDevices: !0,
                renderInputModes: !0,
                appContext: J.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: f.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                iconComponent: p,
                tooltip: d,
                onClick: () => {
                    (0, E.Z)(s, l, J.jXE.OVERLAY),
                        (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                            type: Q.Qu.MICROPHONE,
                            value: u ? Q.bk.ENABLED : Q.bk.DISABLED,
                            userId: V.default.getId()
                        });
                },
                onPopoutClick: m(n),
                onContextMenu: m(n),
                popoutOpen: r,
                iconColor: u ? (0, S.Lq)(o.I.RED_400) : void 0,
                onMouseEnter: () => {
                    g.onMouseEnter();
                },
                onMouseLeave: () => {
                    g.onMouseLeave();
                }
            });
        }
    });
}
function er(e) {
    let { voiceChannel: t, locked: n } = e,
        { selfDeaf: o, deaf: l } = (0, T.Z)(t),
        a = o || l,
        {
            Component: c,
            play: u,
            events: { onMouseEnter: d, onMouseLeave: p }
        } = (0, s.l)(a ? 'undeafen' : 'deafen'),
        h = l ? f.Vm4 : c;
    r.useEffect(() => () => u(), [a, u]);
    let g = () => {
            (0, y.Z)(l, J.jXE.OVERLAY),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.AUDIO,
                    value: l ? Q.bk.ENABLED : Q.bk.DISABLED,
                    userId: V.default.getId()
                });
        },
        _ = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.AUDIO,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        v = et(n);
    return (0, i.jsx)(f.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(O.default, {
                onClose: v(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: J.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: f.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                iconComponent: h,
                tooltip: (0, m.Z)(o, l, !1),
                isToggled: a,
                onClick: g,
                onContextMenu: _(n),
                onMouseEnter: d,
                onMouseLeave: p,
                onPopoutClick: _(n),
                popoutOpen: r
            });
        }
    });
}
function eo(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        a = (0, l.e7)([F.Z], () => F.Z.isVideoEnabled()),
        s = (0, l.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]),
        c = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        u = !1 === c,
        d = (0, k.Z)(n),
        g = (e) => {
            h.Z.setVideoEnabled(e);
        },
        _ = () => {
            u ? g(!0) : (0, W.Z)();
        },
        m = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CAMERA,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        v = () => {
            c ? _() : g(!a),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CAMERA,
                    value: a ? Q.bk.DISABLED : Q.bk.ENABLED,
                    userId: V.default.getId()
                });
        },
        {
            Component: O,
            play: y,
            events: { onMouseEnter: E, onMouseLeave: x }
        } = (0, p.o)(a ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, D.X)({
                      enabled: a,
                      cameraUnavailable: c,
                      hasPermission: d,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => y(), [a, y]);
    let S = et(o),
        C = null == n || !d;
    return (0, i.jsx)(f.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(b.Z, {
                onClose: S(t),
                appContext: J.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: f.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                iconComponent: O,
                tooltip: I,
                onClick: v,
                isToggled: a,
                highlightedColor: a ? 'green' : 'white',
                defaultColor: a ? 'green' : 'primaryDark',
                onPopoutClick: m(n),
                popoutOpen: r,
                onContextMenu: m(n),
                onMouseEnter: E,
                onMouseLeave: x,
                disabled: C
            });
        }
    });
}
function el(e) {
    let t,
        { voiceChannel: n, locked: o } = e,
        a = (0, l.e7)([H.default], () => H.default.getCurrentUser()),
        s = (0, k.Z)(n),
        c = (0, l.cj)([F.Z], () => (0, C.Z)(F.Z)),
        d = (0, l.e7)([z.Z], () => z.Z.getCurrentUserActiveStream()),
        p = (0, X.B)(),
        h = () => {
            p(),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.GO_LIVE,
                    value: Q.bk.ENABLED,
                    userId: V.default.getId()
                });
        },
        g = null != d;
    if (g) t = q.NW.string(q.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = s ? (null != e ? q.NW.format(q.t.AB5gT0, { game: e.name }) : q.NW.string(q.t.FeUKeH)) : q.NW.string(q.t.uQn9Bw);
    }
    let _ = () => {
            if (g)
                return (
                    (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                        type: Q.Qu.GO_LIVE,
                        value: Q.bk.DISABLED,
                        userId: V.default.getId()
                    }),
                    (0, j.Z)(d, !1)
                );
            h();
        },
        m = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.SCREEN_SHARE,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        {
            Component: v,
            events: { onMouseEnter: O, onMouseLeave: b },
            play: y
        } = (0, u.P)(g ? 'disable' : 'enable');
    r.useEffect(() => () => y(), [g, y]);
    let E = et(o);
    return (0, i.jsx)(f.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(R.Z, {
                channel: n,
                currentUser: a,
                activeStreams: g ? [d] : [],
                handleGoLive: h,
                onClose: E(t),
                appContext: J.IlC.OVERLAY,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: f.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(en, {
                iconComponent: v,
                tooltip: t,
                'aria-label': q.NW.string(q.t.FeUKeH),
                isToggled: g,
                onClick: _,
                popoutOpen: o,
                popoutDisabled: !g,
                onPopoutClick: m(r),
                onContextMenu: m(r),
                onMouseEnter: O,
                onMouseLeave: b,
                highlightedColor: g ? 'green' : 'white',
                defaultColor: g ? 'green' : 'primaryDark',
                disabled: !c || !s
            });
        }
    });
}
function ea(e) {
    var t;
    let { voiceChannel: r, locked: o } = e,
        a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: c } = (0, A.Z)(r),
        u = (0, l.e7)([F.Z], () => F.Z.isDeaf()),
        p = null == r || s || c || u;
    function h(e) {
        null != a &&
            ((0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                type: Q.Qu.SOUNDBOARD,
                value: Q.bk.SETTINGS_OPENED
            }),
            (0, g.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, i.jsx)(e, ee({ guildId: a }, t));
            }));
    }
    let {
            Component: _,
            events: { onClick: m, onMouseEnter: v, onMouseLeave: O }
        } = (0, d.j)(),
        b = et(o),
        y = (0, l.e7)([N.Z, V.default], () => N.Z.isUserPlayingSounds(V.default.getId()), []);
    return (0, i.jsx)(f.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return p || null == r
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(P.Z, {
                      guildId: a,
                      channel: r,
                      onClose: b(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: f.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                iconComponent: _,
                tooltip: s ? q.NW.string(q.t['Ox4/zc']) : c ? q.NW.string(q.t['+YBKYG']) : u ? q.NW.string(q.t.X1lQlp) : void 0,
                onClick: (e) => {
                    m(),
                        (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                            type: Q.Qu.SOUNDBOARD,
                            value: Q.bk.PANEL_OPENED,
                            userId: V.default.getId()
                        }),
                        n(e);
                },
                highlightedColor: y ? 'green' : 'white',
                defaultColor: y ? 'green' : 'primaryDark',
                onContextMenu: h,
                onMouseEnter: v,
                onMouseLeave: O,
                isToggled: r,
                popoutOpen: r,
                disabled: p
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t, locked: n } = e,
        r = (0, l.e7)([G.Z], () => G.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        o = () => {
            (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                type: Q.Qu.CALL_BUTTON,
                value: Q.bk.DISABLED,
                userId: V.default.getId()
            }),
                r && _.default.disconnect();
        },
        s = (e) => {
            _.default.selectVoiceChannel(e.id),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CALL_BUTTON,
                    value: Q.bk.ENABLED,
                    userId: V.default.getId()
                });
        },
        c = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CALL_BUTTON,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        {
            Component: u,
            events: { onMouseEnter: d, onMouseLeave: p }
        } = (0, a.K)(),
        h = et(n),
        g = r ? u : f.Csw;
    return (0, i.jsx)(f.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(L.Z, {
                currentVoiceChannel: t,
                onClose: h(n),
                onSelect: s
            });
        },
        align: 'center',
        position: 'top',
        animation: f.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, i.jsx)(en, {
                iconComponent: g,
                tooltip: null != t ? q.NW.string(q.t['6vrfgo']) : q.NW.string(q.t.S0W8Z2),
                onClick: r ? o : c(l),
                defaultColor: r ? 'disconnect' : 'primaryDark',
                onMouseEnter: d,
                onMouseLeave: p,
                onContextMenu: c(l),
                isToggled: a,
                onPopoutClick: r ? c(l) : void 0,
                popoutOpen: a
            });
        }
    });
}
function ec(e) {
    let { voiceChannel: t } = e,
        n = (0, l.e7)([U.Z], () => U.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: $.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: $.guildIconContainer,
                        children: [
                            (0, i.jsx)(w.Z, {
                                guild: n,
                                size: w.Z.Sizes.SMOL,
                                className: $.guildIcon
                            }),
                            (0, i.jsx)(f.Text, {
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'text-primary',
                                className: $.guildName,
                                children: n.name
                            })
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
function eu(e) {
    let { voiceChannel: t } = e,
        n = (0, I.KS)(t),
        r = (0, x.ZP)(t);
    return (0, i.jsxs)('div', {
        className: $.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(f.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: $.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'sm',
                        color: 'currentColor'
                    })
                }),
            null != r &&
                (0, i.jsx)(f.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: $.channelName,
                    children: r
                })
        ]
    });
}
function ed(e) {
    var t, n;
    let { voiceChannel: r } = e,
        o = null == r ? void 0 : r.id,
        a = (0, l.cj)([B.Z], () => ({
            channelId: B.Z.getChannelId(),
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing()
        })),
        s = null != o,
        c = (0, l.e7)([Y.Z], () => null != o && Y.Z.hasVideo(o), [o]);
    return (
        s &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    Z.Z,
                    ((t = ee({}, a)),
                    (n = n =
                        {
                            hasVideo: c,
                            connectionStatusTextVariant: 'text-xs/semibold'
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
                    t)
                ),
                (0, i.jsx)(ec, { voiceChannel: r }),
                (0, i.jsx)('div', { className: $.separatorDot }),
                (0, i.jsx)(eu, { voiceChannel: r })
            ]
        })
    );
}
