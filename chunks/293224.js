n.d(t, {
    L: () => ec,
    N3: () => er,
    Ox: () => en,
    SE: () => ei,
    aG: () => eo,
    c_: () => ea,
    sm: () => el
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(685072),
    a = n(400354),
    s = n(652844),
    u = n(864094),
    c = n(582019),
    d = n(75735),
    p = n(481060),
    h = n(846027),
    f = n(239091),
    m = n(287734),
    g = n(571250),
    O = n(628581),
    v = n(659580),
    y = n(793865),
    E = n(55311),
    b = n(575175),
    j = n(933557),
    x = n(471445),
    S = n(74299),
    I = n(803647),
    C = n(565138),
    N = n(917405),
    Z = n(763296),
    w = n(603074),
    P = n(879815),
    _ = n(189771),
    T = n(294629),
    D = n(67844),
    k = n(544384),
    A = n(890828),
    L = n(560688),
    R = n(871499),
    M = n(199902),
    W = n(314897),
    V = n(430824),
    z = n(131951),
    U = n(19780),
    G = n(944486),
    F = n(594174),
    Y = n(979651),
    H = n(145597),
    B = n(444295),
    Q = n(388627),
    K = n(810632),
    X = n(981631),
    J = n(388032),
    q = n(434779);
function $(e) {
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
function ee(e) {
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
function et(e) {
    var { isActive: t, disabled: n, iconComponent: r, iconColor: l, tooltip: o, defaultColor: a = 'primaryDark', highlightedColor: s = 'primaryDark', caretColor: u, popoutOpen: c, onClick: d, popoutDisabled: p, onPopoutClick: h, onMouseEnter: f, onMouseLeave: m, onContextMenu: g, fullRegionButton: O } = e,
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
                for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['isActive', 'disabled', 'iconComponent', 'iconColor', 'tooltip', 'defaultColor', 'highlightedColor', 'caretColor', 'popoutOpen', 'onClick', 'popoutDisabled', 'onPopoutClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'fullRegionButton']);
    return (0, i.jsx)(R.d, {
        onClick: null != d ? d : () => {},
        color: t ? s : a,
        className: q.button,
        disabled: n,
        popoutOpen: c,
        popoutDisabled: p,
        label: o,
        fullRegionButton: O,
        forceGroupedButtons: !0,
        onMouseEnter: (e) => {
            null == f || f(e);
        },
        onMouseLeave: (e) => {
            null == m || m(e);
        },
        ignoreColorForCaret: !c,
        iconComponent: r,
        iconColor: l,
        caretColor: u,
        isActive: t,
        onContextMenu: g,
        onPopoutClick: h,
        'aria-label': v['aria-label']
    });
}
function en(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: l, selfMute: o, mute: a } = (0, T.Z)(t),
        u = o || a || l,
        c = (0, O.Z)(o, a, l, !1),
        { Component: d, play: h, events: f } = (0, s.O)(u ? 'unmute' : 'mute');
    r.useEffect(() => () => h(), [h, u]);
    let m = ee(n),
        g = (e) => (t) => {
            e(t),
                (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                    type: B.Qu.MICROPHONE,
                    value: B.bk.SETTINGS_OPENED
                });
        };
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: m(t),
                renderInputDevices: !0,
                renderInputModes: !0,
                appContext: X.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: d,
                isActive: u,
                highlightedColor: 'red',
                tooltip: c,
                onClick: () => {
                    (0, b.Z)(a, l, X.jXE.OVERLAY),
                        (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                            type: B.Qu.MICROPHONE,
                            value: u ? B.bk.ENABLED : B.bk.DISABLED,
                            userId: W.default.getId()
                        });
                },
                onPopoutClick: g(n),
                onContextMenu: g(n),
                popoutOpen: r,
                onMouseEnter: () => {
                    f.onMouseEnter();
                },
                onMouseLeave: () => {
                    f.onMouseLeave();
                }
            });
        }
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { selfDeaf: l, deaf: o } = (0, P.Z)(t),
        s = l || o,
        {
            Component: u,
            play: c,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, a.l)(s ? 'undeafen' : 'deafen'),
        f = o ? p.Vm4 : u;
    r.useEffect(() => () => c(), [s, c]);
    let m = () => {
            (0, E.Z)(o, X.jXE.OVERLAY),
                (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                    type: B.Qu.AUDIO,
                    value: o ? B.bk.ENABLED : B.bk.DISABLED,
                    userId: W.default.getId()
                });
        },
        O = (e) => (t) => {
            e(t),
                (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                    type: B.Qu.AUDIO,
                    value: B.bk.SETTINGS_OPENED
                });
        },
        y = ee(n);
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: y(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: X.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: f,
                tooltip: (0, g.Z)(l, o, !1),
                isActive: s,
                highlightedColor: 'red',
                onClick: m,
                onContextMenu: O(n),
                onMouseEnter: d,
                onMouseLeave: h,
                onPopoutClick: O(n),
                popoutOpen: r
            });
        }
    });
}
function er(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        a = (0, l.e7)([z.Z], () => z.Z.isVideoEnabled()),
        s = (0, l.e7)([z.Z], () => Object.values(z.Z.getVideoDevices())[0]),
        u = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        c = !1 === u,
        f = (0, _.Z)(n),
        m = (e) => {
            h.Z.setVideoEnabled(e);
        },
        g = () => {
            c ? m(!0) : (0, L.Z)();
        },
        O = (e) => (t) => {
            e(t),
                (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                    type: B.Qu.CAMERA,
                    value: B.bk.SETTINGS_OPENED
                });
        },
        v = () => {
            u ? g() : m(!a),
                (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                    type: B.Qu.CAMERA,
                    value: a ? B.bk.DISABLED : B.bk.ENABLED,
                    userId: W.default.getId()
                });
        },
        {
            Component: E,
            play: b,
            events: { onMouseEnter: j, onMouseLeave: x }
        } = (0, d.o)(a ? 'disable' : 'enable'),
        S =
            null != n
                ? (0, D.X)({
                      enabled: a,
                      cameraUnavailable: u,
                      hasPermission: f,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => b(), [a, b]);
    let I = ee(o),
        C = null == n || !f;
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(y.Z, {
                onClose: I(t),
                appContext: X.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: E,
                tooltip: S,
                onClick: v,
                isActive: a,
                highlightedColor: 'green',
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
function el(e) {
    let t,
        { voiceChannel: n, locked: o } = e,
        a = (0, l.e7)([F.default], () => F.default.getCurrentUser()),
        s = (0, _.Z)(n),
        c = (0, l.cj)([z.Z], () => (0, S.Z)(z.Z)),
        d = (0, l.e7)([M.Z], () => M.Z.getCurrentUserActiveStream()),
        h = (0, K.g)((0, H.getPID)()),
        f = () => {
            h(),
                (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                    type: B.Qu.GO_LIVE,
                    value: B.bk.ENABLED,
                    userId: W.default.getId()
                });
        },
        m = null != d;
    if (m) t = J.NW.string(J.t.S5anIS);
    else if (null != n) {
        let e = (0, Q.pL)();
        t = s ? (null != e ? J.NW.format(J.t.AB5gT0, { game: e.name }) : J.NW.string(J.t.FeUKeH)) : J.NW.string(J.t.uQn9Bw);
    }
    let g = () => {
            if (m)
                return (
                    (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                        type: B.Qu.GO_LIVE,
                        value: B.bk.DISABLED,
                        userId: W.default.getId()
                    }),
                    (0, I.Z)(d, !1)
                );
            f();
        },
        O = (e) => (t) => {
            e(t),
                (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                    type: B.Qu.SCREEN_SHARE,
                    value: B.bk.SETTINGS_OPENED
                });
        },
        {
            Component: v,
            events: { onMouseEnter: y, onMouseLeave: E },
            play: b
        } = (0, u.P)(m ? 'disable' : 'enable');
    r.useEffect(() => () => b(), [m, b]);
    let j = ee(o);
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(k.Z, {
                channel: n,
                currentUser: a,
                activeStreams: m ? [d] : [],
                handleGoLive: f,
                onClose: j(t),
                appContext: X.IlC.OVERLAY,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: l } = n;
            return (0, i.jsx)(et, {
                iconComponent: v,
                tooltip: t,
                'aria-label': J.NW.string(J.t.FeUKeH),
                isActive: m,
                highlightedColor: 'green',
                onClick: g,
                popoutOpen: l,
                popoutDisabled: !m,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: y,
                onMouseLeave: E,
                disabled: !c || !s
            });
        }
    });
}
function eo(e) {
    var t;
    let { voiceChannel: r, locked: o } = e,
        a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: u } = (0, T.Z)(r),
        d = (0, l.e7)([z.Z], () => z.Z.isDeaf()),
        h = null == r || s || u || d;
    function m(e) {
        null != a &&
            ((0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                type: B.Qu.SOUNDBOARD,
                value: B.bk.SETTINGS_OPENED
            }),
            (0, f.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, i.jsx)(e, $({ guildId: a }, t));
            }));
    }
    let {
            Component: g,
            events: { onClick: O, onMouseEnter: v, onMouseLeave: y }
        } = (0, c.j)(),
        E = ee(o),
        b = (0, l.e7)([Z.Z, W.default], () => Z.Z.isUserPlayingSounds(W.default.getId()), []) ? 'green' : void 0;
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == r
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(w.Z, {
                      guildId: a,
                      channel: r,
                      onClose: E(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: g,
                tooltip: s ? J.NW.string(J.t['Ox4/zc']) : u ? J.NW.string(J.t['+YBKYG']) : d ? J.NW.string(J.t.X1lQlp) : void 0,
                onClick: (e) => {
                    O(),
                        (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                            type: B.Qu.SOUNDBOARD,
                            value: B.bk.PANEL_OPENED,
                            userId: W.default.getId()
                        }),
                        n(e);
                },
                highlightedColor: b,
                defaultColor: b,
                onContextMenu: m,
                onMouseEnter: v,
                onMouseLeave: y,
                isActive: r,
                popoutOpen: r,
                disabled: h
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        a = (0, l.e7)([G.Z], () => G.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        s = () => {
            (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                type: B.Qu.CALL_BUTTON,
                value: B.bk.DISABLED,
                userId: W.default.getId()
            }),
                a && m.default.disconnect();
        },
        u = (e) => {
            m.default.selectVoiceChannel(e),
                (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                    type: B.Qu.CALL_BUTTON,
                    value: B.bk.ENABLED,
                    userId: W.default.getId()
                });
        },
        [c, d] = r.useTransition(),
        h = (e) => (t) => {
            d(() => {
                e(t);
            }),
                (0, B.Ws)(X.Odu.QUICK_ACTIONS, {
                    type: B.Qu.CALL_BUTTON,
                    value: B.bk.SETTINGS_OPENED
                });
        },
        {
            Component: f,
            events: { onMouseEnter: g, onMouseLeave: O }
        } = (0, o.K)(),
        v = ee(n),
        y = a ? f : p.Csw;
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(A.Z, {
                currentVoiceChannel: t,
                onClose: v(n),
                onSelect: u
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: l } = n;
            return (0, i.jsx)(et, {
                iconComponent: y,
                tooltip: null != t ? J.NW.string(J.t['6vrfgo']) : J.NW.string(J.t.S0W8Z2),
                onClick: a ? s : h(r),
                defaultColor: a ? 'disconnect' : void 0,
                onMouseEnter: g,
                onMouseLeave: O,
                onContextMenu: h(r),
                isActive: l,
                onPopoutClick: a ? h(r) : void 0,
                popoutOpen: l
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t } = e,
        n = (0, l.e7)([V.Z], () => V.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: q.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: q.guildIconContainer,
                        children: [
                            (0, i.jsx)(C.Z, {
                                guild: n,
                                size: C.Z.Sizes.SMOL,
                                className: q.guildIcon
                            }),
                            (0, i.jsx)(p.Text, {
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'text-primary',
                                className: q.guildName,
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
        n = (0, x.KS)(t),
        r = (0, j.ZP)(t);
    return (0, i.jsxs)('div', {
        className: q.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(p.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: q.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'sm',
                        color: 'currentColor'
                    })
                }),
            null != r &&
                (0, i.jsx)(p.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: q.channelName,
                    children: r
                })
        ]
    });
}
function ec(e) {
    var t, n;
    let { voiceChannel: r } = e,
        o = null == r ? void 0 : r.id,
        a = (0, l.cj)([U.Z], () => ({
            channelId: U.Z.getChannelId(),
            quality: U.Z.getQuality(),
            state: U.Z.getState(),
            lastPing: U.Z.getLastPing()
        })),
        s = null != o,
        u = (0, l.e7)([Y.Z], () => null != o && Y.Z.hasVideo(o), [o]);
    return (
        s &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    N.Z,
                    ((t = $({}, a)),
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
                (0, i.jsx)(es, { voiceChannel: r }),
                (0, i.jsx)('div', { className: q.separatorDot }),
                (0, i.jsx)(eu, { voiceChannel: r })
            ]
        })
    );
}
