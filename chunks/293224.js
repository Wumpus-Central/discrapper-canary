n.d(t, {
    L: () => ed,
    N3: () => eo,
    Ox: () => ei,
    SE: () => er,
    aG: () => ea,
    c_: () => es,
    sm: () => el
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(685072),
    a = n(400354),
    s = n(652844),
    c = n(864094),
    u = n(582019),
    d = n(75735),
    p = n(481060),
    h = n(846027),
    f = n(239091),
    m = n(287734),
    g = n(906732),
    y = n(571250),
    O = n(628581),
    v = n(659580),
    b = n(793865),
    _ = n(55311),
    E = n(575175),
    x = n(933557),
    I = n(471445),
    j = n(74299),
    C = n(803647),
    S = n(565138),
    N = n(917405),
    Z = n(763296),
    w = n(603074),
    P = n(879815),
    T = n(189771),
    k = n(294629),
    A = n(67844),
    D = n(544384),
    L = n(890828),
    R = n(560688),
    W = n(871499),
    M = n(199902),
    z = n(314897),
    V = n(430824),
    U = n(131951),
    G = n(19780),
    F = n(944486),
    B = n(594174),
    H = n(979651),
    Y = n(145597),
    Q = n(444295),
    K = n(388627),
    X = n(810632),
    J = n(981631),
    q = n(388032),
    $ = n(859714);
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
                null == (n = t.current) || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function en(e) {
    var { isActive: t, disabled: n, iconComponent: r, iconColor: o, tooltip: l, defaultColor: a = 'primaryDark', highlightedColor: s = 'primaryDark', caretColor: c, popoutOpen: u, onClick: d, popoutDisabled: p, onPopoutClick: h, onMouseEnter: f, onMouseLeave: m, onContextMenu: g, fullRegionButton: y } = e,
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
        })(e, ['isActive', 'disabled', 'iconComponent', 'iconColor', 'tooltip', 'defaultColor', 'highlightedColor', 'caretColor', 'popoutOpen', 'onClick', 'popoutDisabled', 'onPopoutClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'fullRegionButton']);
    return (0, i.jsx)(W.d, {
        onClick: null != d ? d : () => {},
        color: t ? s : a,
        className: $.button,
        disabled: n,
        popoutOpen: u,
        popoutDisabled: p,
        label: l,
        fullRegionButton: y,
        forceGroupedButtons: !0,
        onMouseEnter: (e) => {
            null == f || f(e);
        },
        onMouseLeave: (e) => {
            null == m || m(e);
        },
        ignoreColorForCaret: !u,
        iconComponent: r,
        iconColor: o,
        caretColor: c,
        isActive: t,
        onContextMenu: g,
        onPopoutClick: h,
        'aria-label': O['aria-label']
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: o, selfMute: l, mute: a } = (0, k.Z)(t),
        c = l || a || o,
        u = (0, O.Z)(l, a, o, !1),
        { Component: d, play: h, events: f } = (0, s.O)(c ? 'unmute' : 'mute');
    r.useEffect(() => () => h(), [h, c]);
    let m = et(n),
        g = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.MICROPHONE,
                    value: Q.bk.SETTINGS_OPENED
                });
        };
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: m(t),
                renderInputDevices: !0,
                renderInputModes: !0,
                appContext: J.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                iconComponent: d,
                isActive: c,
                highlightedColor: 'red',
                tooltip: u,
                onClick: () => {
                    (0, E.Z)(a, o, J.jXE.OVERLAY),
                        (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                            type: Q.Qu.MICROPHONE,
                            value: c ? Q.bk.ENABLED : Q.bk.DISABLED,
                            userId: z.default.getId()
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
function er(e) {
    let { voiceChannel: t, locked: n } = e,
        { selfDeaf: o, deaf: l } = (0, P.Z)(t),
        s = o || l,
        {
            Component: c,
            play: u,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, a.l)(s ? 'undeafen' : 'deafen'),
        f = l ? p.Vm4 : c;
    r.useEffect(() => () => u(), [s, u]);
    let m = () => {
            (0, _.Z)(l, J.jXE.OVERLAY),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.AUDIO,
                    value: l ? Q.bk.ENABLED : Q.bk.DISABLED,
                    userId: z.default.getId()
                });
        },
        g = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.AUDIO,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        O = et(n);
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: O(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: J.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                iconComponent: f,
                tooltip: (0, y.Z)(o, l, !1),
                isActive: s,
                highlightedColor: 'red',
                onClick: m,
                onContextMenu: g(n),
                onMouseEnter: d,
                onMouseLeave: h,
                onPopoutClick: g(n),
                popoutOpen: r
            });
        }
    });
}
function eo(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = (0, o.e7)([U.Z], () => U.Z.isVideoEnabled()),
        s = (0, o.e7)([U.Z], () => Object.values(U.Z.getVideoDevices())[0]),
        c = null == (t = null == s ? void 0 : s.disabled) || t,
        u = !1 === c,
        f = (0, T.Z)(n),
        m = (e) => {
            h.Z.setVideoEnabled(e);
        },
        g = () => {
            u ? m(!0) : (0, R.Z)();
        },
        y = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CAMERA,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        O = () => {
            c ? g() : m(!a),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CAMERA,
                    value: a ? Q.bk.DISABLED : Q.bk.ENABLED,
                    userId: z.default.getId()
                });
        },
        {
            Component: v,
            play: _,
            events: { onMouseEnter: E, onMouseLeave: x }
        } = (0, d.o)(a ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, A.X)({
                      enabled: a,
                      cameraUnavailable: c,
                      hasPermission: f,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => _(), [a, _]);
    let j = et(l),
        C = null == n || !f;
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(b.Z, {
                onClose: j(t),
                appContext: J.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(en, {
                iconComponent: v,
                tooltip: I,
                onClick: O,
                isActive: a,
                highlightedColor: 'green',
                onPopoutClick: y(n),
                popoutOpen: r,
                onContextMenu: y(n),
                onMouseEnter: E,
                onMouseLeave: x,
                disabled: C
            });
        }
    });
}
function el(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        a = (0, o.e7)([B.default], () => B.default.getCurrentUser()),
        s = (0, T.Z)(n),
        u = (0, o.cj)([U.Z], () => (0, j.Z)(U.Z)),
        d = (0, o.e7)([M.Z], () => M.Z.getCurrentUserActiveStream()),
        h = (0, X.g)((0, Y.getPID)()),
        f = () => {
            h(),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.GO_LIVE,
                    value: Q.bk.ENABLED,
                    userId: z.default.getId()
                });
        },
        m = null != d;
    if (m) t = q.NW.string(q.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = s ? (null != e ? q.NW.format(q.t.AB5gT0, { game: e.name }) : q.NW.string(q.t.FeUKeH)) : q.NW.string(q.t.uQn9Bw);
    }
    let g = () => {
            if (m)
                return (
                    (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                        type: Q.Qu.GO_LIVE,
                        value: Q.bk.DISABLED,
                        userId: z.default.getId()
                    }),
                    (0, C.Z)(d, !1)
                );
            f();
        },
        y = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.SCREEN_SHARE,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        {
            Component: O,
            events: { onMouseEnter: v, onMouseLeave: b },
            play: _
        } = (0, c.P)(m ? 'disable' : 'enable');
    r.useEffect(() => () => _(), [m, _]);
    let E = et(l);
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(D.Z, {
                channel: n,
                currentUser: a,
                activeStreams: m ? [d] : [],
                handleGoLive: f,
                onClose: E(t),
                appContext: J.IlC.OVERLAY,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(en, {
                iconComponent: O,
                tooltip: t,
                'aria-label': q.NW.string(q.t.FeUKeH),
                isActive: m,
                highlightedColor: 'green',
                onClick: g,
                popoutOpen: o,
                popoutDisabled: !m,
                onPopoutClick: y(r),
                onContextMenu: y(r),
                onMouseEnter: v,
                onMouseLeave: b,
                disabled: !u || !s
            });
        }
    });
}
function ea(e) {
    var t;
    let { voiceChannel: r, locked: l } = e,
        a = null != (t = null == r ? void 0 : r.getGuildId()) ? t : null,
        { mute: s, suppress: c } = (0, k.Z)(r),
        d = (0, o.e7)([U.Z], () => U.Z.isDeaf()),
        h = null == r || s || c || d,
        { analyticsLocations: m } = (0, g.ZP)();
    function y(e) {
        null != a &&
            ((0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                type: Q.Qu.SOUNDBOARD,
                value: Q.bk.SETTINGS_OPENED
            }),
            (0, f.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        ee(
                            {
                                sourceAnalyticsLocations: m,
                                guildId: a
                            },
                            t
                        )
                    );
            }));
    }
    let {
            Component: O,
            events: { onClick: v, onMouseEnter: b, onMouseLeave: _ }
        } = (0, u.j)(),
        E = et(l),
        x = (0, o.e7)([Z.Z, z.default], () => Z.Z.isUserPlayingSounds(z.default.getId()), []) ? 'green' : void 0;
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
            return (0, i.jsx)(en, {
                iconComponent: O,
                tooltip: s ? q.NW.string(q.t['Ox4/zc']) : c ? q.NW.string(q.t['+YBKYG']) : d ? q.NW.string(q.t.X1lQlp) : void 0,
                onClick: (e) => {
                    v(),
                        (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                            type: Q.Qu.SOUNDBOARD,
                            value: Q.bk.PANEL_OPENED,
                            userId: z.default.getId()
                        }),
                        n(e);
                },
                highlightedColor: x,
                defaultColor: x,
                onContextMenu: y,
                onMouseEnter: b,
                onMouseLeave: _,
                isActive: r,
                popoutOpen: r,
                disabled: h
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t, locked: n } = e,
        a = (0, o.e7)([F.Z], () => F.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        s = () => {
            (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                type: Q.Qu.CALL_BUTTON,
                value: Q.bk.DISABLED,
                userId: z.default.getId()
            }),
                a && m.default.disconnect();
        },
        c = (e) => {
            m.default.selectVoiceChannel(e),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CALL_BUTTON,
                    value: Q.bk.ENABLED,
                    userId: z.default.getId()
                });
        },
        [u, d] = r.useTransition(),
        h = (e) => (t) => {
            d(() => {
                e(t);
            }),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CALL_BUTTON,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        {
            Component: f,
            events: { onMouseEnter: g, onMouseLeave: y }
        } = (0, l.K)(),
        O = et(n),
        v = a ? f : p.Csw;
    return (0, i.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(L.Z, {
                currentVoiceChannel: t,
                onClose: O(n),
                onSelect: c
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(en, {
                iconComponent: v,
                tooltip: null != t ? q.NW.string(q.t['6vrfgo']) : q.NW.string(q.t.S0W8Z2),
                onClick: a ? s : h(r),
                defaultColor: a ? 'disconnect' : void 0,
                onMouseEnter: g,
                onMouseLeave: y,
                onContextMenu: h(r),
                isActive: o,
                onPopoutClick: a ? h(r) : void 0,
                popoutOpen: o
            });
        }
    });
}
function ec(e) {
    let { voiceChannel: t } = e,
        n = (0, o.e7)([V.Z], () => V.Z.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(S.Z, {
                                guild: n,
                                size: S.Z.Sizes.SMOL,
                                className: $.guildIcon
                            }),
                            (0, i.jsx)(p.Text, {
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
                (0, i.jsx)(p.Text, {
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
                (0, i.jsx)(p.Text, {
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
        l = null == r ? void 0 : r.id,
        a = (0, o.cj)([G.Z], () => ({
            channelId: G.Z.getChannelId(),
            quality: G.Z.getQuality(),
            state: G.Z.getState(),
            lastPing: G.Z.getLastPing()
        })),
        s = null != l,
        c = (0, o.e7)([H.Z], () => null != l && H.Z.hasVideo(l), [l]);
    return (
        s &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    N.Z,
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
