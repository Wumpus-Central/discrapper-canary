n.d(t, {
    L: () => ef,
    N3: () => es,
    Ox: () => el,
    SE: () => ea,
    aG: () => eu,
    c_: () => ed,
    sm: () => ec
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
    g = n(100527),
    y = n(906732),
    O = n(571250),
    b = n(628581),
    v = n(659580),
    E = n(793865),
    _ = n(55311),
    x = n(575175),
    S = n(933557),
    I = n(471445),
    j = n(74299),
    C = n(803647),
    N = n(565138),
    w = n(77880),
    Z = n(917405),
    P = n(763296),
    T = n(603074),
    k = n(879815),
    D = n(189771),
    A = n(294629),
    R = n(67844),
    L = n(544384),
    M = n(890828),
    z = n(560688),
    U = n(871499),
    V = n(540650),
    W = n(199902),
    G = n(314897),
    F = n(430824),
    B = n(131951),
    H = n(19780),
    Y = n(944486),
    Q = n(594174),
    K = n(979651),
    X = n(145597),
    J = n(444295),
    q = n(388627),
    $ = n(810632),
    ee = n(981631),
    et = n(388032),
    en = n(859714);
function ei(e) {
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
    var { ref: t, isActive: n, disabled: r, iconComponent: o, iconColor: l, tooltip: a, defaultColor: s = 'primaryDark', highlightedColor: c = 'primaryDark', caretColor: u, popoutOpen: d, onClick: p, popoutDisabled: h, onPopoutClick: f, onMouseEnter: m, onMouseLeave: g, onContextMenu: y, isTrayButton: O } = e,
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
                for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['ref', 'isActive', 'disabled', 'iconComponent', 'iconColor', 'tooltip', 'defaultColor', 'highlightedColor', 'caretColor', 'popoutOpen', 'onClick', 'popoutDisabled', 'onPopoutClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'isTrayButton']);
    return (0, i.jsx)(U.d, {
        ref: t,
        onClick: null != p ? p : () => {},
        color: n ? c : s,
        className: en.button,
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
        'aria-label': b['aria-label']
    });
}
function el(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        { suppress: l, selfMute: a, mute: c } = (0, A.Z)(t),
        u = a || c || l,
        d = (0, b.Z)(a, c, l, !1),
        { Component: h, play: f, events: m } = (0, s.O)(u ? 'unmute' : 'mute');
    r.useEffect(() => () => f(), [f, u]);
    let y = er(n),
        O = (e) => (t) => {
            e(t),
                (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: J.Qu.MICROPHONE,
                    value: J.bk.SETTINGS_OPENED
                });
        };
    return (0, i.jsx)(p.yRy, {
        targetElementRef: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(V.R, {
                onClose: y(t),
                location: g.Z.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: o,
                iconComponent: h,
                isActive: u,
                highlightedColor: 'red',
                tooltip: d,
                onClick: () => {
                    (0, x.Z)(c, l, ee.jXE.OVERLAY),
                        (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                            type: J.Qu.MICROPHONE,
                            value: u ? J.bk.ENABLED : J.bk.DISABLED,
                            userId: G.default.getId()
                        });
                },
                onPopoutClick: O(n),
                onContextMenu: O(n),
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
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        { selfDeaf: l, deaf: s } = (0, k.Z)(t),
        c = l || s,
        {
            Component: u,
            play: d,
            events: { onMouseEnter: h, onMouseLeave: f }
        } = (0, a.l)(c ? 'undeafen' : 'deafen'),
        m = s ? p.Vm4 : u;
    r.useEffect(() => () => d(), [c, d]);
    let g = () => {
            (0, _.Z)(s, ee.jXE.OVERLAY),
                (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: J.Qu.AUDIO,
                    value: s ? J.bk.ENABLED : J.bk.DISABLED,
                    userId: G.default.getId()
                });
        },
        y = (e) => (t) => {
            e(t),
                (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: J.Qu.AUDIO,
                    value: J.bk.SETTINGS_OPENED
                });
        },
        b = er(n);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.default, {
                onClose: b(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: ee.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: o,
                iconComponent: m,
                tooltip: (0, O.Z)(l, s, !1),
                isActive: c,
                highlightedColor: 'red',
                onClick: g,
                onContextMenu: y(n),
                onMouseEnter: h,
                onMouseLeave: f,
                onPopoutClick: y(n),
                popoutOpen: r,
                isTrayButton: !0
            });
        }
    });
}
function es(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        s = (0, o.e7)([B.Z], () => B.Z.isVideoEnabled()),
        c = (0, o.e7)([B.Z], () => Object.values(B.Z.getVideoDevices())[0]),
        u = null == (t = null == c ? void 0 : c.disabled) || t,
        f = !1 === u,
        m = (0, D.Z)(n),
        g = (e) => {
            h.Z.setVideoEnabled(e);
        },
        y = () => {
            f ? g(!0) : (0, z.Z)();
        },
        O = (e) => (t) => {
            e(t),
                (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: J.Qu.CAMERA,
                    value: J.bk.SETTINGS_OPENED
                });
        },
        b = () => {
            u ? y() : g(!s),
                (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: J.Qu.CAMERA,
                    value: s ? J.bk.DISABLED : J.bk.ENABLED,
                    userId: G.default.getId()
                });
        },
        {
            Component: v,
            play: _,
            events: { onMouseEnter: x, onMouseLeave: S }
        } = (0, d.o)(s ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, R.X)({
                      enabled: s,
                      cameraUnavailable: u,
                      hasPermission: m,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => _(), [s, _]);
    let j = er(l),
        C = null == n || !m;
    return (0, i.jsx)(p.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.Z, {
                onClose: j(t),
                appContext: ee.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: a,
                iconComponent: v,
                tooltip: I,
                onClick: b,
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
function ec(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        s = (0, o.e7)([Q.default], () => Q.default.getCurrentUser()),
        u = (0, D.Z)(n),
        d = (0, o.cj)([B.Z], () => (0, j.Z)(B.Z)),
        h = (0, o.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
        f = (0, $.g)((0, X.getPID)()),
        m = () => {
            f(),
                (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: J.Qu.GO_LIVE,
                    value: J.bk.ENABLED,
                    userId: G.default.getId()
                });
        },
        g = null != h;
    if (g) t = et.intl.string(et.t.S5anIS);
    else if (null != n) {
        let e = (0, q.pL)();
        t = u ? (null != e ? et.intl.format(et.t.AB5gT0, { game: e.name }) : et.intl.string(et.t.FeUKeH)) : et.intl.string(et.t.uQn9Bw);
    }
    let y = () => {
            if (g)
                return (
                    (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                        type: J.Qu.GO_LIVE,
                        value: J.bk.DISABLED,
                        userId: G.default.getId()
                    }),
                    (0, C.Z)(h, !1)
                );
            m();
        },
        O = (e) => (t) => {
            e(t),
                (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: J.Qu.SCREEN_SHARE,
                    value: J.bk.SETTINGS_OPENED
                });
        },
        {
            Component: b,
            events: { onMouseEnter: v, onMouseLeave: E },
            play: _
        } = (0, c.P)(g ? 'disable' : 'enable');
    r.useEffect(() => () => _(), [g, _]);
    let x = er(l);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(L.Z, {
                channel: n,
                currentUser: s,
                activeStreams: g ? [h] : [],
                handleGoLive: m,
                onClose: x(t),
                appContext: ee.IlC.OVERLAY,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(eo, {
                ref: a,
                iconComponent: b,
                tooltip: t,
                'aria-label': et.intl.string(et.t.FeUKeH),
                isActive: g,
                highlightedColor: 'green',
                onClick: y,
                popoutOpen: o,
                popoutDisabled: !g,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: v,
                onMouseLeave: E,
                disabled: !d || !u,
                isTrayButton: !0
            });
        }
    });
}
function eu(e) {
    var t;
    let { voiceChannel: l, locked: a } = e,
        s = r.useRef(null),
        c = null != (t = null == l ? void 0 : l.getGuildId()) ? t : null,
        { mute: d, suppress: h } = (0, A.Z)(l),
        m = (0, o.e7)([B.Z], () => B.Z.isDeaf()),
        g = null == l || d || h || m,
        { analyticsLocations: O } = (0, y.ZP)();
    function b(e) {
        null != c &&
            ((0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                type: J.Qu.SOUNDBOARD,
                value: J.bk.SETTINGS_OPENED
            }),
            (0, f.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        ei(
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
            Component: v,
            events: { onClick: E, onMouseEnter: _, onMouseLeave: x }
        } = (0, u.j)(),
        S = er(a),
        I = (0, o.e7)([P.Z, G.default], () => P.Z.isUserPlayingSounds(G.default.getId()), []) ? 'green' : void 0;
    return (0, i.jsx)(p.yRy, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return g || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(T.Z, {
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
            return (0, i.jsx)(eo, {
                ref: s,
                iconComponent: v,
                tooltip: d ? et.intl.string(et.t['Ox4/zc']) : h ? et.intl.string(et.t['+YBKYG']) : m ? et.intl.string(et.t.X1lQlp) : void 0,
                onClick: (e) => {
                    E(),
                        (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                            type: J.Qu.SOUNDBOARD,
                            value: J.bk.PANEL_OPENED,
                            userId: G.default.getId()
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
                disabled: g,
                isTrayButton: !0
            });
        }
    });
}
function ed(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        s = (0, o.e7)([Y.Z], () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        { changeLeaveCallAndActivityIcons: c } = (0, w.A)({ location: 'DisconnectActionButton' }),
        u = () => {
            (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                type: J.Qu.CALL_BUTTON,
                value: J.bk.DISABLED,
                userId: G.default.getId()
            }),
                s && m.default.disconnect();
        },
        d = (e) => {
            m.default.selectVoiceChannel(e),
                (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: J.Qu.CALL_BUTTON,
                    value: J.bk.ENABLED,
                    userId: G.default.getId()
                });
        },
        [h, f] = r.useTransition(),
        g = (e) => (t) => {
            f(() => {
                e(t);
            }),
                (0, J.Ws)(ee.Odu.QUICK_ACTIONS, {
                    type: J.Qu.CALL_BUTTON,
                    value: J.bk.SETTINGS_OPENED
                });
        },
        {
            Component: y,
            events: { onMouseEnter: O, onMouseLeave: b }
        } = (0, l.K)(),
        v = er(n);
    return (0, i.jsx)(p.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(M.Z, {
                currentVoiceChannel: t,
                onClose: v(n),
                onSelect: d
            });
        },
        align: 'center',
        position: 'top',
        animation: p.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(eo, {
                ref: a,
                iconComponent: s ? (c ? p.PBZ : y) : p.Csw,
                tooltip: s ? (c ? et.intl.string(et.t['Hi1/aW']) : et.intl.string(et.t['6vrfgo'])) : et.intl.string(et.t.S0W8Z2),
                onClick: s ? u : g(n),
                defaultColor: s ? 'disconnect' : void 0,
                onMouseEnter: O,
                onMouseLeave: b,
                onContextMenu: g(n),
                isActive: r,
                onPopoutClick: s ? g(n) : void 0,
                popoutOpen: r,
                isTrayButton: !1
            });
        }
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
                    (0, i.jsx)('div', { className: en.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: en.guildIconContainer,
                        children: [
                            (0, i.jsx)(N.Z, {
                                guild: n,
                                size: N.Z.Sizes.SMOL,
                                className: en.guildIcon
                            }),
                            (0, i.jsx)(p.Text, {
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'text-primary',
                                className: en.guildName,
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
function eh(e) {
    let { voiceChannel: t } = e,
        n = (0, I.KS)(t),
        r = (0, S.ZP)(t);
    return (0, i.jsxs)('div', {
        className: en.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(p.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: en.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'sm',
                        color: 'currentColor'
                    })
                }),
            null != r &&
                (0, i.jsx)(p.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: en.channelName,
                    children: r
                })
        ]
    });
}
function ef(e) {
    var t, n;
    let { voiceChannel: r } = e,
        l = null == r ? void 0 : r.id,
        a = (0, o.cj)([H.Z], () => ({
            channelId: H.Z.getChannelId(),
            quality: H.Z.getQuality(),
            state: H.Z.getState(),
            lastPing: H.Z.getLastPing()
        })),
        s = null != l,
        c = (0, o.e7)([K.Z], () => null != l && K.Z.hasVideo(l), [l]);
    return (
        s &&
        null != r &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    Z.Z,
                    ((t = ei({}, a)),
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
                (0, i.jsx)(ep, { voiceChannel: r }),
                (0, i.jsx)('div', { className: en.separatorDot }),
                (0, i.jsx)(eh, { voiceChannel: r })
            ]
        })
    );
}
