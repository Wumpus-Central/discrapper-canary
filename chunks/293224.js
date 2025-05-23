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
var i = n(255367),
    r = n(73800),
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
    k = n(294629),
    D = n(67844),
    A = n(544384),
    R = n(890828),
    L = n(560688),
    M = n(871499),
    z = n(199902),
    U = n(314897),
    V = n(430824),
    W = n(131951),
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
    var { ref: t, isActive: n, disabled: r, iconComponent: o, iconColor: l, tooltip: a, defaultColor: s = 'primaryDark', highlightedColor: c = 'primaryDark', caretColor: u, popoutOpen: d, onClick: p, popoutDisabled: h, onPopoutClick: f, onMouseEnter: m, onMouseLeave: g, onContextMenu: y, isTrayButton: O } = e,
        v = (function (e, t) {
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
        })(e, ['ref', 'isActive', 'disabled', 'iconComponent', 'iconColor', 'tooltip', 'defaultColor', 'highlightedColor', 'caretColor', 'popoutOpen', 'onClick', 'popoutDisabled', 'onPopoutClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'isTrayButton']);
    return (0, i.jsx)(M.d, {
        ref: t,
        onClick: null != p ? p : () => {},
        color: n ? c : s,
        className: $.button,
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
        iconComponent: o,
        iconColor: l,
        caretColor: u,
        isActive: n,
        onContextMenu: y,
        onPopoutClick: f,
        'aria-label': v['aria-label']
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        { suppress: l, selfMute: a, mute: c } = (0, k.Z)(t),
        u = a || c || l,
        d = (0, O.Z)(a, c, l, !1),
        { Component: h, play: f, events: m } = (0, s.O)(u ? 'unmute' : 'mute');
    r.useEffect(() => () => f(), [f, u]);
    let g = et(n),
        y = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.MICROPHONE,
                    value: Q.bk.SETTINGS_OPENED
                });
        };
    return (0, i.jsx)(p.yRy, {
        targetElementRef: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: g(t),
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
                ref: o,
                iconComponent: h,
                isActive: u,
                highlightedColor: 'red',
                tooltip: d,
                onClick: () => {
                    (0, _.Z)(c, l, J.jXE.OVERLAY),
                        (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                            type: Q.Qu.MICROPHONE,
                            value: u ? Q.bk.ENABLED : Q.bk.DISABLED,
                            userId: U.default.getId()
                        });
                },
                onPopoutClick: y(n),
                onContextMenu: y(n),
                popoutOpen: r,
                onMouseEnter: () => {
                    m.onMouseEnter();
                },
                onMouseLeave: () => {
                    m.onMouseLeave();
                },
                isTrayButton: !0
            });
        }
    });
}
function er(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        { selfDeaf: l, deaf: s } = (0, P.Z)(t),
        c = l || s,
        {
            Component: u,
            play: d,
            events: { onMouseEnter: h, onMouseLeave: f }
        } = (0, a.l)(c ? 'undeafen' : 'deafen'),
        m = s ? p.Vm4 : u;
    r.useEffect(() => () => d(), [c, d]);
    let g = () => {
            (0, E.Z)(s, J.jXE.OVERLAY),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.AUDIO,
                    value: s ? Q.bk.ENABLED : Q.bk.DISABLED,
                    userId: U.default.getId()
                });
        },
        O = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.AUDIO,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        b = et(n);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: b(t),
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
                ref: o,
                iconComponent: m,
                tooltip: (0, y.Z)(l, s, !1),
                isActive: c,
                highlightedColor: 'red',
                onClick: g,
                onContextMenu: O(n),
                onMouseEnter: h,
                onMouseLeave: f,
                onPopoutClick: O(n),
                popoutOpen: r,
                isTrayButton: !0
            });
        }
    });
}
function eo(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        s = (0, o.e7)([W.Z], () => W.Z.isVideoEnabled()),
        c = (0, o.e7)([W.Z], () => Object.values(W.Z.getVideoDevices())[0]),
        u = null == (t = null == c ? void 0 : c.disabled) || t,
        f = !1 === u,
        m = (0, T.Z)(n),
        g = (e) => {
            h.Z.setVideoEnabled(e);
        },
        y = () => {
            f ? g(!0) : (0, L.Z)();
        },
        O = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CAMERA,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        v = () => {
            u ? y() : g(!s),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CAMERA,
                    value: s ? Q.bk.DISABLED : Q.bk.ENABLED,
                    userId: U.default.getId()
                });
        },
        {
            Component: E,
            play: _,
            events: { onMouseEnter: x, onMouseLeave: S }
        } = (0, d.o)(s ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, D.X)({
                      enabled: s,
                      cameraUnavailable: u,
                      hasPermission: m,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => _(), [s, _]);
    let j = et(l),
        C = null == n || !m;
    return (0, i.jsx)(p.yRy, {
        targetElementRef: a,
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
                ref: a,
                iconComponent: E,
                tooltip: I,
                onClick: v,
                isActive: s,
                highlightedColor: 'green',
                onPopoutClick: O(n),
                popoutOpen: r,
                onContextMenu: O(n),
                onMouseEnter: x,
                onMouseLeave: S,
                disabled: C,
                isTrayButton: !0
            });
        }
    });
}
function el(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        s = (0, o.e7)([B.default], () => B.default.getCurrentUser()),
        u = (0, T.Z)(n),
        d = (0, o.cj)([W.Z], () => (0, I.Z)(W.Z)),
        h = (0, o.e7)([z.Z], () => z.Z.getCurrentUserActiveStream()),
        f = (0, X.g)((0, Y.getPID)()),
        m = () => {
            f(),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.GO_LIVE,
                    value: Q.bk.ENABLED,
                    userId: U.default.getId()
                });
        },
        g = null != h;
    if (g) t = q.intl.string(q.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = u ? (null != e ? q.intl.format(q.t.AB5gT0, { game: e.name }) : q.intl.string(q.t.FeUKeH)) : q.intl.string(q.t.uQn9Bw);
    }
    let y = () => {
            if (g)
                return (
                    (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                        type: Q.Qu.GO_LIVE,
                        value: Q.bk.DISABLED,
                        userId: U.default.getId()
                    }),
                    (0, j.Z)(h, !1)
                );
            m();
        },
        O = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.SCREEN_SHARE,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        {
            Component: v,
            events: { onMouseEnter: b, onMouseLeave: E },
            play: _
        } = (0, c.P)(g ? 'disable' : 'enable');
    r.useEffect(() => () => _(), [g, _]);
    let x = et(l);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(A.Z, {
                channel: n,
                currentUser: s,
                activeStreams: g ? [h] : [],
                handleGoLive: m,
                onClose: x(t),
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
                ref: a,
                iconComponent: v,
                tooltip: t,
                'aria-label': q.intl.string(q.t.FeUKeH),
                isActive: g,
                highlightedColor: 'green',
                onClick: y,
                popoutOpen: o,
                popoutDisabled: !g,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: b,
                onMouseLeave: E,
                disabled: !d || !u,
                isTrayButton: !0
            });
        }
    });
}
function ea(e) {
    var t;
    let { voiceChannel: l, locked: a } = e,
        s = r.useRef(null),
        c = null != (t = null == l ? void 0 : l.getGuildId()) ? t : null,
        { mute: d, suppress: h } = (0, k.Z)(l),
        m = (0, o.e7)([W.Z], () => W.Z.isDeaf()),
        y = null == l || d || h || m,
        { analyticsLocations: O } = (0, g.ZP)();
    function v(e) {
        null != c &&
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
                                sourceAnalyticsLocations: O,
                                guildId: c
                            },
                            t
                        )
                    );
            }));
    }
    let {
            Component: b,
            events: { onClick: E, onMouseEnter: _, onMouseLeave: x }
        } = (0, u.j)(),
        S = et(a),
        I = (0, o.e7)([w.Z, U.default], () => w.Z.isUserPlayingSounds(U.default.getId()), []) ? 'green' : void 0;
    return (0, i.jsx)(p.yRy, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return y || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(Z.Z, {
                      guildId: c,
                      channel: l,
                      onClose: S(t),
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
                ref: s,
                iconComponent: b,
                tooltip: d ? q.intl.string(q.t['Ox4/zc']) : h ? q.intl.string(q.t['+YBKYG']) : m ? q.intl.string(q.t.X1lQlp) : void 0,
                onClick: (e) => {
                    E(),
                        (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                            type: Q.Qu.SOUNDBOARD,
                            value: Q.bk.PANEL_OPENED,
                            userId: U.default.getId()
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
                isTrayButton: !0
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        s = (0, o.e7)([F.Z], () => F.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        c = () => {
            (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                type: Q.Qu.CALL_BUTTON,
                value: Q.bk.DISABLED,
                userId: U.default.getId()
            }),
                s && m.default.disconnect();
        },
        u = (e) => {
            m.default.selectVoiceChannel(e),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CALL_BUTTON,
                    value: Q.bk.ENABLED,
                    userId: U.default.getId()
                });
        },
        [d, h] = r.useTransition(),
        f = (e) => (t) => {
            h(() => {
                e(t);
            }),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CALL_BUTTON,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        {
            Component: g,
            events: { onMouseEnter: y, onMouseLeave: O }
        } = (0, l.K)(),
        v = et(n),
        b = s ? g : p.Csw;
    return (0, i.jsx)(p.yRy, {
        targetElementRef: a,
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
        animation: p.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(en, {
                ref: a,
                iconComponent: b,
                tooltip: null != t ? q.intl.string(q.t['6vrfgo']) : q.intl.string(q.t.S0W8Z2),
                onClick: s ? c : f(r),
                defaultColor: s ? 'disconnect' : void 0,
                onMouseEnter: y,
                onMouseLeave: O,
                onContextMenu: f(r),
                isActive: o,
                onPopoutClick: s ? f(r) : void 0,
                popoutOpen: o,
                isTrayButton: !1
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
                            (0, i.jsx)(C.Z, {
                                guild: n,
                                size: C.Z.Sizes.SMOL,
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
        n = (0, S.KS)(t),
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
