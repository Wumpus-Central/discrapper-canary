n.d(t, {
    L: () => ep,
    N3: () => el,
    Ox: () => er,
    SE: () => eo,
    aG: () => es,
    c_: () => ec,
    sm: () => ea
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
    N = n(77880),
    w = n(917405),
    Z = n(763296),
    P = n(603074),
    T = n(879815),
    k = n(189771),
    D = n(294629),
    A = n(67844),
    R = n(544384),
    L = n(890828),
    M = n(560688),
    z = n(871499),
    U = n(199902),
    V = n(314897),
    W = n(430824),
    G = n(131951),
    F = n(19780),
    B = n(944486),
    H = n(594174),
    Y = n(979651),
    Q = n(145597),
    K = n(444295),
    X = n(388627),
    J = n(810632),
    q = n(981631),
    $ = n(388032),
    ee = n(859714);
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
                null == (n = t.current) || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function ei(e) {
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
    return (0, i.jsx)(z.d, {
        ref: t,
        onClick: null != p ? p : () => {},
        color: n ? c : s,
        className: ee.button,
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
function er(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        { suppress: l, selfMute: a, mute: c } = (0, D.Z)(t),
        u = a || c || l,
        d = (0, O.Z)(a, c, l, !1),
        { Component: h, play: f, events: m } = (0, s.O)(u ? 'unmute' : 'mute');
    r.useEffect(() => () => f(), [f, u]);
    let g = en(n),
        y = (e) => (t) => {
            e(t),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.MICROPHONE,
                    value: K.bk.SETTINGS_OPENED
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
                appContext: q.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ei, {
                ref: o,
                iconComponent: h,
                isActive: u,
                highlightedColor: 'red',
                tooltip: d,
                onClick: () => {
                    (0, _.Z)(c, l, q.jXE.OVERLAY),
                        (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                            type: K.Qu.MICROPHONE,
                            value: u ? K.bk.ENABLED : K.bk.DISABLED,
                            userId: V.default.getId()
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
function eo(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        { selfDeaf: l, deaf: s } = (0, T.Z)(t),
        c = l || s,
        {
            Component: u,
            play: d,
            events: { onMouseEnter: h, onMouseLeave: f }
        } = (0, a.l)(c ? 'undeafen' : 'deafen'),
        m = s ? p.Vm4 : u;
    r.useEffect(() => () => d(), [c, d]);
    let g = () => {
            (0, E.Z)(s, q.jXE.OVERLAY),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.AUDIO,
                    value: s ? K.bk.ENABLED : K.bk.DISABLED,
                    userId: V.default.getId()
                });
        },
        O = (e) => (t) => {
            e(t),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.AUDIO,
                    value: K.bk.SETTINGS_OPENED
                });
        },
        b = en(n);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: b(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: q.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ei, {
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
function el(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        s = (0, o.e7)([G.Z], () => G.Z.isVideoEnabled()),
        c = (0, o.e7)([G.Z], () => Object.values(G.Z.getVideoDevices())[0]),
        u = null == (t = null == c ? void 0 : c.disabled) || t,
        f = !1 === u,
        m = (0, k.Z)(n),
        g = (e) => {
            h.Z.setVideoEnabled(e);
        },
        y = () => {
            f ? g(!0) : (0, M.Z)();
        },
        O = (e) => (t) => {
            e(t),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CAMERA,
                    value: K.bk.SETTINGS_OPENED
                });
        },
        v = () => {
            u ? y() : g(!s),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CAMERA,
                    value: s ? K.bk.DISABLED : K.bk.ENABLED,
                    userId: V.default.getId()
                });
        },
        {
            Component: E,
            play: _,
            events: { onMouseEnter: x, onMouseLeave: S }
        } = (0, d.o)(s ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, A.X)({
                      enabled: s,
                      cameraUnavailable: u,
                      hasPermission: m,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => _(), [s, _]);
    let j = en(l),
        C = null == n || !m;
    return (0, i.jsx)(p.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(b.Z, {
                onClose: j(t),
                appContext: q.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ei, {
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
function ea(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        s = (0, o.e7)([H.default], () => H.default.getCurrentUser()),
        u = (0, k.Z)(n),
        d = (0, o.cj)([G.Z], () => (0, I.Z)(G.Z)),
        h = (0, o.e7)([U.Z], () => U.Z.getCurrentUserActiveStream()),
        f = (0, J.g)((0, Q.getPID)()),
        m = () => {
            f(),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.GO_LIVE,
                    value: K.bk.ENABLED,
                    userId: V.default.getId()
                });
        },
        g = null != h;
    if (g) t = $.intl.string($.t.S5anIS);
    else if (null != n) {
        let e = (0, X.pL)();
        t = u ? (null != e ? $.intl.format($.t.AB5gT0, { game: e.name }) : $.intl.string($.t.FeUKeH)) : $.intl.string($.t.uQn9Bw);
    }
    let y = () => {
            if (g)
                return (
                    (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                        type: K.Qu.GO_LIVE,
                        value: K.bk.DISABLED,
                        userId: V.default.getId()
                    }),
                    (0, j.Z)(h, !1)
                );
            m();
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
            events: { onMouseEnter: b, onMouseLeave: E },
            play: _
        } = (0, c.P)(g ? 'disable' : 'enable');
    r.useEffect(() => () => _(), [g, _]);
    let x = en(l);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(R.Z, {
                channel: n,
                currentUser: s,
                activeStreams: g ? [h] : [],
                handleGoLive: m,
                onClose: x(t),
                appContext: q.IlC.OVERLAY,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(ei, {
                ref: a,
                iconComponent: v,
                tooltip: t,
                'aria-label': $.intl.string($.t.FeUKeH),
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
function es(e) {
    var t;
    let { voiceChannel: l, locked: a } = e,
        s = r.useRef(null),
        c = null != (t = null == l ? void 0 : l.getGuildId()) ? t : null,
        { mute: d, suppress: h } = (0, D.Z)(l),
        m = (0, o.e7)([G.Z], () => G.Z.isDeaf()),
        y = null == l || d || h || m,
        { analyticsLocations: O } = (0, g.ZP)();
    function v(e) {
        null != c &&
            ((0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                type: K.Qu.SOUNDBOARD,
                value: K.bk.SETTINGS_OPENED
            }),
            (0, f.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        et(
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
        S = en(a),
        I = (0, o.e7)([Z.Z, V.default], () => Z.Z.isUserPlayingSounds(V.default.getId()), []) ? 'green' : void 0;
    return (0, i.jsx)(p.yRy, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return y || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(P.Z, {
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
            return (0, i.jsx)(ei, {
                ref: s,
                iconComponent: b,
                tooltip: d ? $.intl.string($.t['Ox4/zc']) : h ? $.intl.string($.t['+YBKYG']) : m ? $.intl.string($.t.X1lQlp) : void 0,
                onClick: (e) => {
                    E(),
                        (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                            type: K.Qu.SOUNDBOARD,
                            value: K.bk.PANEL_OPENED,
                            userId: V.default.getId()
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
function ec(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        s = (0, o.e7)([B.Z], () => B.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        { changeLeaveCallAndActivityIcons: c } = (0, N.A)({ location: 'DisconnectActionButton' }),
        u = () => {
            (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                type: K.Qu.CALL_BUTTON,
                value: K.bk.DISABLED,
                userId: V.default.getId()
            }),
                s && m.default.disconnect();
        },
        d = (e) => {
            m.default.selectVoiceChannel(e),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CALL_BUTTON,
                    value: K.bk.ENABLED,
                    userId: V.default.getId()
                });
        },
        [h, f] = r.useTransition(),
        g = (e) => (t) => {
            f(() => {
                e(t);
            }),
                (0, K.Ws)(q.Odu.QUICK_ACTIONS, {
                    type: K.Qu.CALL_BUTTON,
                    value: K.bk.SETTINGS_OPENED
                });
        },
        {
            Component: y,
            events: { onMouseEnter: O, onMouseLeave: v }
        } = (0, l.K)(),
        b = en(n);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(L.Z, {
                currentVoiceChannel: t,
                onClose: b(n),
                onSelect: d
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ei, {
                ref: a,
                iconComponent: s ? (c ? p.PBZ : y) : p.Csw,
                tooltip: s ? (c ? $.intl.string($.t['Hi1/aW']) : $.intl.string($.t['6vrfgo'])) : $.intl.string($.t.S0W8Z2),
                onClick: s ? u : g(n),
                defaultColor: s ? 'disconnect' : void 0,
                onMouseEnter: O,
                onMouseLeave: v,
                onContextMenu: g(n),
                isActive: r,
                onPopoutClick: s ? g(n) : void 0,
                popoutOpen: r,
                isTrayButton: !1
            });
        }
    });
}
function eu(e) {
    let { voiceChannel: t } = e,
        n = (0, o.e7)([W.Z], () => W.Z.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(C.Z, {
                                guild: n,
                                size: C.Z.Sizes.SMOL,
                                className: ee.guildIcon
                            }),
                            (0, i.jsx)(p.Text, {
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
                (0, i.jsx)(p.Text, {
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
                (0, i.jsx)(p.Text, {
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
        c = (0, o.e7)([Y.Z], () => null != l && Y.Z.hasVideo(l), [l]);
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
                (0, i.jsx)(eu, { voiceChannel: r }),
                (0, i.jsx)('div', { className: ee.separatorDot }),
                (0, i.jsx)(ed, { voiceChannel: r })
            ]
        })
    );
}
