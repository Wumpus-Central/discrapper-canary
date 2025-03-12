n.d(t, {
    L: () => ep,
    N3: () => eo,
    Ox: () => er,
    SE: () => el,
    aG: () => es,
    c_: () => eu,
    sm: () => ea
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(691324),
    o = n(442837),
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
    v = n(628581),
    y = n(659580),
    E = n(793865),
    b = n(55311),
    j = n(575175),
    x = n(933557),
    I = n(471445),
    S = n(44315),
    N = n(74299),
    C = n(803647),
    Z = n(565138),
    w = n(917405),
    P = n(763296),
    _ = n(603074),
    T = n(879815),
    D = n(189771),
    k = n(294629),
    A = n(67844),
    L = n(544384),
    R = n(890828),
    M = n(560688),
    W = n(871499),
    V = n(199902),
    z = n(314897),
    U = n(430824),
    G = n(131951),
    F = n(19780),
    Y = n(944486),
    H = n(594174),
    B = n(979651),
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
    var { isToggled: t, disabled: n, iconComponent: r, iconColor: l, tooltip: o, defaultColor: a = 'primaryDark', highlightedColor: s = 'primaryDark', popoutOpen: u, onClick: c, popoutDisabled: d, onPopoutClick: p, onMouseEnter: h, onMouseLeave: f, onContextMenu: m, fullRegionButton: g } = e,
        O = (function (e, t) {
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
                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
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
        label: o,
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
        iconColor: l,
        isActive: t,
        onContextMenu: m,
        onPopoutClick: p,
        'aria-label': O['aria-label']
    });
}
function er(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: o, selfMute: a, mute: s } = (0, k.Z)(t),
        c = a || s || o,
        d = (0, v.Z)(a, s, o, !1),
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
            return (0, i.jsx)(y.default, {
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
                    (0, j.Z)(s, o, q.jXE.OVERLAY),
                        (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                            type: K.Qu.MICROPHONE,
                            value: c ? K.bk.ENABLED : K.bk.DISABLED,
                            userId: z.default.getId()
                        });
                },
                onPopoutClick: O(n),
                onContextMenu: O(n),
                popoutOpen: r,
                iconColor: c ? (0, S.Lq)(l.I.RED_400) : void 0,
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
function el(e) {
    let { voiceChannel: t, locked: n } = e,
        { selfDeaf: l, deaf: o } = (0, T.Z)(t),
        a = l || o,
        {
            Component: u,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: p }
        } = (0, s.l)(a ? 'undeafen' : 'deafen'),
        f = o ? h.Vm4 : u;
    r.useEffect(() => () => c(), [a, c]);
    let m = () => {
            (0, b.Z)(o, q.jXE.OVERLAY),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.AUDIO,
                    value: o ? K.bk.ENABLED : K.bk.DISABLED,
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
        v = en(n);
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(y.default, {
                onClose: v(t),
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
                tooltip: (0, O.Z)(l, o, !1),
                isToggled: a,
                highlightedColor: a ? 'red' : void 0,
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
function eo(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = (0, o.e7)([G.Z], () => G.Z.isVideoEnabled()),
        s = (0, o.e7)([G.Z], () => Object.values(G.Z.getVideoDevices())[0]),
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
        v = () => {
            u ? g() : m(!a),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CAMERA,
                    value: a ? K.bk.DISABLED : K.bk.ENABLED,
                    userId: z.default.getId()
                });
        },
        {
            Component: y,
            play: b,
            events: { onMouseEnter: j, onMouseLeave: x }
        } = (0, p.o)(a ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, A.X)({
                      enabled: a,
                      cameraUnavailable: u,
                      hasPermission: d,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => b(), [a, b]);
    let S = en(l),
        N = null == n || !d;
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.Z, {
                onClose: S(t),
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
                iconComponent: y,
                tooltip: I,
                onClick: v,
                isToggled: a,
                highlightedColor: a ? 'green' : void 0,
                defaultColor: a ? 'green' : void 0,
                onPopoutClick: O(n),
                popoutOpen: r,
                onContextMenu: O(n),
                onMouseEnter: j,
                onMouseLeave: x,
                disabled: N
            });
        }
    });
}
function ea(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        a = (0, o.e7)([H.default], () => H.default.getCurrentUser()),
        s = (0, D.Z)(n),
        u = (0, o.cj)([G.Z], () => (0, N.Z)(G.Z)),
        d = (0, o.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
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
                    (0, C.Z)(d, !1)
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
            Component: v,
            events: { onMouseEnter: y, onMouseLeave: E },
            play: b
        } = (0, c.P)(m ? 'disable' : 'enable');
    r.useEffect(() => () => b(), [m, b]);
    let j = en(l);
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
                { isShown: l } = n;
            return (0, i.jsx)(ei, {
                iconComponent: v,
                tooltip: t,
                'aria-label': $.NW.string($.t.FeUKeH),
                isToggled: m,
                onClick: g,
                popoutOpen: l,
                popoutDisabled: !m,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: y,
                onMouseLeave: E,
                highlightedColor: m ? 'green' : void 0,
                defaultColor: m ? 'green' : void 0,
                disabled: !u || !s
            });
        }
    });
}
function es(e) {
    var t;
    let { voiceChannel: r, locked: l } = e,
        a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: u } = (0, k.Z)(r),
        c = (0, o.e7)([G.Z], () => G.Z.isDeaf()),
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
            events: { onClick: O, onMouseEnter: v, onMouseLeave: y }
        } = (0, d.j)(),
        E = en(l),
        b = (0, o.e7)([P.Z, z.default], () => P.Z.isUserPlayingSounds(z.default.getId()), []);
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
                highlightedColor: b ? 'green' : void 0,
                defaultColor: b ? 'green' : void 0,
                onContextMenu: f,
                onMouseEnter: v,
                onMouseLeave: y,
                isToggled: r,
                popoutOpen: r,
                disabled: p
            });
        }
    });
}
function eu(e) {
    let { voiceChannel: t, locked: n } = e,
        l = (0, o.e7)([Y.Z], () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        s = () => {
            (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                type: K.Qu.CALL_BUTTON,
                value: K.bk.DISABLED,
                userId: z.default.getId()
            }),
                l && g.default.disconnect();
        },
        u = (e) => {
            g.default.selectVoiceChannel(e),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CALL_BUTTON,
                    value: K.bk.ENABLED,
                    userId: z.default.getId()
                });
        },
        [c, d] = r.useTransition(),
        p = (e) => (t) => {
            d(() => {
                e(t);
            }),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CALL_BUTTON,
                    value: K.bk.SETTINGS_OPENED
                });
        },
        {
            Component: f,
            events: { onMouseEnter: m, onMouseLeave: O }
        } = (0, a.K)(),
        v = en(n),
        y = l ? f : h.Csw;
    return (0, i.jsx)(h.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(R.Z, {
                currentVoiceChannel: t,
                onClose: v(n),
                onSelect: u
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
                tooltip: null != t ? $.NW.string($.t['6vrfgo']) : $.NW.string($.t.S0W8Z2),
                onClick: l ? s : p(r),
                defaultColor: l ? 'disconnect' : 'primaryDark',
                onMouseEnter: m,
                onMouseLeave: O,
                onContextMenu: p(r),
                isToggled: o,
                onPopoutClick: l ? p(r) : void 0,
                popoutOpen: o
            });
        }
    });
}
function ec(e) {
    let { voiceChannel: t } = e,
        n = (0, o.e7)([U.Z], () => U.Z.getGuild(t.getGuildId()), [t]);
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
        n = (0, I.KS)(t),
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
        l = null == r ? void 0 : r.id,
        a = (0, o.cj)([F.Z], () => ({
            channelId: F.Z.getChannelId(),
            quality: F.Z.getQuality(),
            state: F.Z.getState(),
            lastPing: F.Z.getLastPing()
        })),
        s = null != l,
        u = (0, o.e7)([B.Z], () => null != l && B.Z.hasVideo(l), [l]);
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
