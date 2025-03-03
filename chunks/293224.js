n.d(t, {
    L: () => ep,
    N3: () => el,
    Ox: () => er,
    SE: () => eo,
    aG: () => es,
    c_: () => eu,
    sm: () => ea
});
var i = n(200651),
    r = n(192379),
    o = n(691324),
    l = n(442837),
    a = n(685072),
    s = n(400354),
    u = n(652844),
    c = n(864094),
    d = n(582019),
    p = n(75735),
    h = n(481060),
    f = n(846027),
    m = n(239091),
    g = n(287734),
    O = n(571250),
    y = n(628581),
    v = n(659580),
    E = n(793865),
    b = n(55311),
    j = n(575175),
    x = n(933557),
    S = n(471445),
    I = n(44315),
    C = n(74299),
    N = n(803647),
    Z = n(565138),
    w = n(917405),
    P = n(763296),
    _ = n(603074),
    T = n(879815),
    D = n(189771),
    A = n(294629),
    k = n(67844),
    L = n(544384),
    R = n(892807),
    M = n(560688),
    W = n(871499),
    V = n(199902),
    z = n(314897),
    U = n(430824),
    F = n(131951),
    G = n(19780),
    Y = n(944486),
    B = n(594174),
    H = n(979651),
    Q = n(145597),
    K = n(444295),
    X = n(388627),
    J = n(810632),
    q = n(981631),
    $ = n(388032),
    ee = n(434779);
function et(e) {
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
function en(e) {
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
function ei(e) {
    var { isToggled: t, disabled: n, iconComponent: r, iconColor: o, tooltip: l, defaultColor: a = 'primaryDark', highlightedColor: s = 'white', popoutOpen: u, onClick: c, popoutDisabled: d, onPopoutClick: p, onMouseEnter: h, onMouseLeave: f, onContextMenu: m, fullRegionButton: g } = e,
        O = (function (e, t) {
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
    return (0, i.jsx)(W.d, {
        onClick: null != c ? c : () => {},
        color: t ? s : a,
        className: ee.button,
        disabled: n,
        popoutOpen: u,
        popoutDisabled: d,
        label: l,
        fullRegionButton: g,
        forceGroupedButtons: !0,
        onMouseEnter: (e) => {
            null == h || h(e);
        },
        onMouseLeave: (e) => {
            null == f || f(e);
        },
        ignoreColorForCaret: !u,
        iconComponent: r,
        iconColor: o,
        isActive: t,
        onContextMenu: m,
        onPopoutClick: p,
        'aria-label': O['aria-label']
    });
}
function er(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: l, selfMute: a, mute: s } = (0, A.Z)(t),
        c = a || s || l,
        d = (0, y.Z)(a, s, l, !1),
        { Component: p, play: f, events: m } = (0, u.O)(c ? 'unmute' : 'mute');
    r.useEffect(() => () => f(), [f, c]);
    let g = en(n),
        O = (e) => (t) => {
            e(t),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.MICROPHONE,
                    value: K.bk.SETTINGS_OPENED
                });
        };
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: g(t),
                renderInputDevices: !0,
                renderInputModes: !0,
                appContext: q.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: h.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ei, {
                iconComponent: p,
                tooltip: d,
                onClick: () => {
                    (0, j.Z)(s, l, q.jXE.OVERLAY),
                        (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                            type: K.Qu.MICROPHONE,
                            value: c ? K.bk.ENABLED : K.bk.DISABLED,
                            userId: z.default.getId()
                        });
                },
                onPopoutClick: O(n),
                onContextMenu: O(n),
                popoutOpen: r,
                iconColor: c ? (0, I.Lq)(o.I.RED_400) : void 0,
                onMouseEnter: () => {
                    m.onMouseEnter();
                },
                onMouseLeave: () => {
                    m.onMouseLeave();
                }
            });
        }
    });
}
function eo(e) {
    let { voiceChannel: t, locked: n } = e,
        { selfDeaf: o, deaf: l } = (0, T.Z)(t),
        a = o || l,
        {
            Component: u,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: p }
        } = (0, s.l)(a ? 'undeafen' : 'deafen'),
        f = l ? h.Vm4 : u;
    r.useEffect(() => () => c(), [a, c]);
    let m = () => {
            (0, b.Z)(l, q.jXE.OVERLAY),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.AUDIO,
                    value: l ? K.bk.ENABLED : K.bk.DISABLED,
                    userId: z.default.getId()
                });
        },
        g = (e) => (t) => {
            e(t),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.AUDIO,
                    value: K.bk.SETTINGS_OPENED
                });
        },
        y = en(n);
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: y(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: q.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: h.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ei, {
                iconComponent: f,
                tooltip: (0, O.Z)(o, l, !1),
                isToggled: a,
                onClick: m,
                onContextMenu: g(n),
                onMouseEnter: d,
                onMouseLeave: p,
                onPopoutClick: g(n),
                popoutOpen: r
            });
        }
    });
}
function el(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        a = (0, l.e7)([F.Z], () => F.Z.isVideoEnabled()),
        s = (0, l.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]),
        u = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        c = !1 === u,
        d = (0, D.Z)(n),
        m = (e) => {
            f.Z.setVideoEnabled(e);
        },
        g = () => {
            c ? m(!0) : (0, M.Z)();
        },
        O = (e) => (t) => {
            e(t),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CAMERA,
                    value: K.bk.SETTINGS_OPENED
                });
        },
        y = () => {
            u ? g() : m(!a),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CAMERA,
                    value: a ? K.bk.DISABLED : K.bk.ENABLED,
                    userId: z.default.getId()
                });
        },
        {
            Component: v,
            play: b,
            events: { onMouseEnter: j, onMouseLeave: x }
        } = (0, p.o)(a ? 'disable' : 'enable'),
        S =
            null != n
                ? (0, k.X)({
                      enabled: a,
                      cameraUnavailable: u,
                      hasPermission: d,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => b(), [a, b]);
    let I = en(o),
        C = null == n || !d;
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.Z, {
                onClose: I(t),
                appContext: q.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: h.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ei, {
                iconComponent: v,
                tooltip: S,
                onClick: y,
                isToggled: a,
                highlightedColor: a ? 'green' : 'white',
                defaultColor: a ? 'green' : 'primaryDark',
                onPopoutClick: O(n),
                popoutOpen: r,
                onContextMenu: O(n),
                onMouseEnter: j,
                onMouseLeave: x,
                disabled: C
            });
        }
    });
}
function ea(e) {
    let t,
        { voiceChannel: n, locked: o } = e,
        a = (0, l.e7)([B.default], () => B.default.getCurrentUser()),
        s = (0, D.Z)(n),
        u = (0, l.cj)([F.Z], () => (0, C.Z)(F.Z)),
        d = (0, l.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
        p = (0, J.g)((0, Q.getPID)()),
        f = () => {
            p(),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.GO_LIVE,
                    value: K.bk.ENABLED,
                    userId: z.default.getId()
                });
        },
        m = null != d;
    if (m) t = $.NW.string($.t.S5anIS);
    else if (null != n) {
        let e = (0, X.pL)();
        t = s ? (null != e ? $.NW.format($.t.AB5gT0, { game: e.name }) : $.NW.string($.t.FeUKeH)) : $.NW.string($.t.uQn9Bw);
    }
    let g = () => {
            if (m)
                return (
                    (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                        type: K.Qu.GO_LIVE,
                        value: K.bk.DISABLED,
                        userId: z.default.getId()
                    }),
                    (0, N.Z)(d, !1)
                );
            f();
        },
        O = (e) => (t) => {
            e(t),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.SCREEN_SHARE,
                    value: K.bk.SETTINGS_OPENED
                });
        },
        {
            Component: y,
            events: { onMouseEnter: v, onMouseLeave: E },
            play: b
        } = (0, c.P)(m ? 'disable' : 'enable');
    r.useEffect(() => () => b(), [m, b]);
    let j = en(o);
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(L.Z, {
                channel: n,
                currentUser: a,
                activeStreams: m ? [d] : [],
                handleGoLive: f,
                onClose: j(t),
                appContext: q.IlC.OVERLAY,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: h.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(ei, {
                iconComponent: y,
                tooltip: t,
                'aria-label': $.NW.string($.t.FeUKeH),
                isToggled: m,
                onClick: g,
                popoutOpen: o,
                popoutDisabled: !m,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: v,
                onMouseLeave: E,
                highlightedColor: m ? 'green' : 'white',
                defaultColor: m ? 'green' : 'primaryDark',
                disabled: !u || !s
            });
        }
    });
}
function es(e) {
    var t;
    let { voiceChannel: r, locked: o } = e,
        a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: u } = (0, A.Z)(r),
        c = (0, l.e7)([F.Z], () => F.Z.isDeaf()),
        p = null == r || s || u || c;
    function f(e) {
        null != a &&
            ((0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                type: K.Qu.SOUNDBOARD,
                value: K.bk.SETTINGS_OPENED
            }),
            (0, m.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, i.jsx)(e, et({ guildId: a }, t));
            }));
    }
    let {
            Component: g,
            events: { onClick: O, onMouseEnter: y, onMouseLeave: v }
        } = (0, d.j)(),
        E = en(o),
        b = (0, l.e7)([P.Z, z.default], () => P.Z.isUserPlayingSounds(z.default.getId()), []);
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return p || null == r
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(_.Z, {
                      guildId: a,
                      channel: r,
                      onClose: E(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: h.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ei, {
                iconComponent: g,
                tooltip: s ? $.NW.string($.t['Ox4/zc']) : u ? $.NW.string($.t['+YBKYG']) : c ? $.NW.string($.t.X1lQlp) : void 0,
                onClick: (e) => {
                    O(),
                        (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                            type: K.Qu.SOUNDBOARD,
                            value: K.bk.PANEL_OPENED,
                            userId: z.default.getId()
                        }),
                        n(e);
                },
                highlightedColor: b ? 'green' : 'white',
                defaultColor: b ? 'green' : 'primaryDark',
                onContextMenu: f,
                onMouseEnter: y,
                onMouseLeave: v,
                isToggled: r,
                popoutOpen: r,
                disabled: p
            });
        }
    });
}
function eu(e) {
    let { voiceChannel: t, locked: n } = e,
        r = (0, l.e7)([Y.Z], () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        o = () => {
            (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                type: K.Qu.CALL_BUTTON,
                value: K.bk.DISABLED,
                userId: z.default.getId()
            }),
                r && g.default.disconnect();
        },
        s = (e) => {
            g.default.selectVoiceChannel(e.id),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CALL_BUTTON,
                    value: K.bk.ENABLED,
                    userId: z.default.getId()
                });
        },
        u = (e) => (t) => {
            e(t),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CALL_BUTTON,
                    value: K.bk.SETTINGS_OPENED
                });
        },
        {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: p }
        } = (0, a.K)(),
        f = en(n),
        m = r ? c : h.Csw;
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(R.Z, {
                currentVoiceChannel: t,
                onClose: f(n),
                onSelect: s
            });
        },
        align: 'center',
        position: 'top',
        animation: h.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, i.jsx)(ei, {
                iconComponent: m,
                tooltip: null != t ? $.NW.string($.t['6vrfgo']) : $.NW.string($.t.S0W8Z2),
                onClick: r ? o : u(l),
                defaultColor: r ? 'disconnect' : 'primaryDark',
                onMouseEnter: d,
                onMouseLeave: p,
                onContextMenu: u(l),
                isToggled: a,
                onPopoutClick: r ? u(l) : void 0,
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
                    (0, i.jsx)('div', { className: ee.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: ee.guildIconContainer,
                        children: [
                            (0, i.jsx)(Z.Z, {
                                guild: n,
                                size: Z.Z.Sizes.SMOL,
                                className: ee.guildIcon
                            }),
                            (0, i.jsx)(h.Text, {
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'text-primary',
                                className: ee.guildName,
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
function ed(e) {
    let { voiceChannel: t } = e,
        n = (0, S.KS)(t),
        r = (0, x.ZP)(t);
    return (0, i.jsxs)('div', {
        className: ee.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(h.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: ee.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'sm',
                        color: 'currentColor'
                    })
                }),
            null != r &&
                (0, i.jsx)(h.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: ee.channelName,
                    children: r
                })
        ]
    });
}
function ep(e) {
    var t, n;
    let { voiceChannel: r } = e,
        o = null == r ? void 0 : r.id,
        a = (0, l.cj)([G.Z], () => ({
            channelId: G.Z.getChannelId(),
            quality: G.Z.getQuality(),
            state: G.Z.getState(),
            lastPing: G.Z.getLastPing()
        })),
        s = null != o,
        u = (0, l.e7)([H.Z], () => null != o && H.Z.hasVideo(o), [o]);
    return (
        s &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    w.Z,
                    ((t = et({}, a)),
                    (n = n =
                        {
                            hasVideo: u,
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
                (0, i.jsx)('div', { className: ee.separatorDot }),
                (0, i.jsx)(ed, { voiceChannel: r })
            ]
        })
    );
}
