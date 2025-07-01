(n.d(t, {
    L: () => em,
    N3: () => ec,
    Ox: () => ea,
    SE: () => es,
    aG: () => ed,
    c_: () => ep,
    sm: () => eu
}),
    n(388685));
var i = n(255367),
    r = n(73800),
    o = n(442837),
    l = n(685072),
    a = n(400354),
    s = n(864094),
    c = n(582019),
    u = n(75735),
    d = n(481060),
    p = n(846027),
    f = n(239091),
    h = n(287734),
    m = n(100527),
    g = n(906732),
    y = n(571250),
    O = n(628581),
    b = n(659580),
    v = n(793865),
    E = n(55311),
    _ = n(575175),
    x = n(933557),
    I = n(471445),
    S = n(74299),
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
    U = n(540650),
    V = n(8404),
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
    q = n(624864),
    $ = n(388627),
    ee = n(810632),
    et = n(981631),
    en = n(388032),
    ei = n(859714);
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function eo(e) {
    let t = r.useRef(null);
    return (
        r.useEffect(() => {
            if (e) {
                var n;
                (null == (n = t.current) || n.call(t), (t.current = null));
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function el(e) {
    var { ref: t, isActive: n, disabled: r, iconComponent: o, iconColor: l, tooltip: a, defaultColor: s = 'primaryDark', highlightedColor: c = 'primaryDark', caretColor: u, popoutOpen: d, onClick: p, popoutDisabled: f, onPopoutClick: h, onMouseEnter: m, onMouseLeave: g, onContextMenu: y, isTrayButton: O } = e,
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
                    for (i = 0; i < o.length; i++) ((n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++) ((n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['ref', 'isActive', 'disabled', 'iconComponent', 'iconColor', 'tooltip', 'defaultColor', 'highlightedColor', 'caretColor', 'popoutOpen', 'onClick', 'popoutDisabled', 'onPopoutClick', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'isTrayButton']);
    return (0, i.jsx)(z.d, {
        ref: t,
        onClick: null != p ? p : () => {},
        color: n ? c : s,
        className: ei.button,
        disabled: r,
        popoutOpen: d,
        popoutDisabled: f,
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
        onPopoutClick: h,
        'aria-label': b['aria-label']
    });
}
function ea(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        { suppress: s, selfMute: c, mute: u } = (0, D.Z)(n),
        p = c || u || s,
        f = (0, O.Z)(c, u, s, !1),
        { Component: h, play: g, events: y } = (0, V.b)(p);
    r.useEffect(() => () => g(), [g, p]);
    let b = eo(l),
        v = (e) => (t) => {
            (e(t),
                (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: J.Qu.MICROPHONE,
                    value: J.bk.SETTINGS_OPENED
                }));
        },
        E = null == (t = (0, $.II)()) ? void 0 : t.id,
        x = (0, o.e7)([q.Z], () => q.Z.isLimitedInteractionOverrideEnabled(E));
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(U.R, {
                onClose: b(t),
                location: m.Z.OVERLAY,
                overlayLimitedInteraction: x
            });
        },
        align: 'center',
        position: 'top',
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(el, {
                ref: a,
                iconComponent: h,
                isActive: p,
                highlightedColor: 'red',
                tooltip: f,
                onClick: () => {
                    ((0, _.Z)(u, s, et.jXE.OVERLAY),
                        (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                            type: J.Qu.MICROPHONE,
                            value: p ? J.bk.ENABLED : J.bk.DISABLED,
                            userId: G.default.getId()
                        }));
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
                isTrayButton: !0
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t, locked: n } = e,
        o = r.useRef(null),
        { selfDeaf: l, deaf: s } = (0, T.Z)(t),
        c = l || s,
        {
            Component: u,
            play: p,
            events: { onMouseEnter: f, onMouseLeave: h }
        } = (0, a.l)(c ? 'undeafen' : 'deafen'),
        m = s ? d.Vm4 : u;
    r.useEffect(() => () => p(), [c, p]);
    let g = () => {
            ((0, E.Z)(s, et.jXE.OVERLAY),
                (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: J.Qu.AUDIO,
                    value: s ? J.bk.ENABLED : J.bk.DISABLED,
                    userId: G.default.getId()
                }));
        },
        O = (e) => (t) => {
            (e(t),
                (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: J.Qu.AUDIO,
                    value: J.bk.SETTINGS_OPENED
                }));
        },
        v = eo(n);
    return (0, i.jsx)(d.yRy, {
        targetElementRef: o,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(b.default, {
                onClose: v(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: et.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(el, {
                ref: o,
                iconComponent: m,
                tooltip: (0, y.Z)(l, s, !1),
                isActive: c,
                highlightedColor: 'red',
                onClick: g,
                onContextMenu: O(n),
                onMouseEnter: f,
                onMouseLeave: h,
                onPopoutClick: O(n),
                popoutOpen: r,
                isTrayButton: !0
            });
        }
    });
}
function ec(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        s = (0, o.e7)([B.Z], () => B.Z.isVideoEnabled()),
        c = (0, o.e7)([B.Z], () => Object.values(B.Z.getVideoDevices())[0]),
        f = null == (t = null == c ? void 0 : c.disabled) || t,
        h = !1 === f,
        m = (0, k.Z)(n),
        g = (e) => {
            p.Z.setVideoEnabled(e);
        },
        y = () => {
            h ? g(!0) : (0, M.Z)();
        },
        O = (e) => (t) => {
            (e(t),
                (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: J.Qu.CAMERA,
                    value: J.bk.SETTINGS_OPENED
                }));
        },
        b = () => {
            (f ? y() : g(!s),
                (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: J.Qu.CAMERA,
                    value: s ? J.bk.DISABLED : J.bk.ENABLED,
                    userId: G.default.getId()
                }));
        },
        {
            Component: E,
            play: _,
            events: { onMouseEnter: x, onMouseLeave: I }
        } = (0, u.o)(s ? 'disable' : 'enable'),
        S =
            null != n
                ? (0, A.X)({
                      enabled: s,
                      cameraUnavailable: f,
                      hasPermission: m,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => _(), [s, _]);
    let j = eo(l),
        C = null == n || !m;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(v.Z, {
                onClose: j(t),
                appContext: et.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(el, {
                ref: a,
                iconComponent: E,
                tooltip: S,
                onClick: b,
                isActive: s,
                highlightedColor: 'green',
                onPopoutClick: O(n),
                popoutOpen: r,
                onContextMenu: O(n),
                onMouseEnter: x,
                onMouseLeave: I,
                disabled: C,
                isTrayButton: !0
            });
        }
    });
}
function eu(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        a = r.useRef(null),
        c = (0, o.e7)([Q.default], () => Q.default.getCurrentUser()),
        u = (0, k.Z)(n),
        p = (0, o.cj)([B.Z], () => (0, S.Z)(B.Z)),
        f = (0, o.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
        h = (0, ee.g)((0, X.getPID)()),
        m = () => {
            (h(),
                (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: J.Qu.GO_LIVE,
                    value: J.bk.ENABLED,
                    userId: G.default.getId()
                }));
        },
        g = null != f;
    if (g) t = en.intl.string(en.t.S5anIS);
    else if (null != n) {
        let e = (0, $.pL)();
        t = u ? (null != e ? en.intl.format(en.t.AB5gT0, { game: e.name }) : en.intl.string(en.t.FeUKeH)) : en.intl.string(en.t.uQn9Bw);
    }
    let y = () => {
            if (g)
                return (
                    (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                        type: J.Qu.GO_LIVE,
                        value: J.bk.DISABLED,
                        userId: G.default.getId()
                    }),
                    (0, j.Z)(f, !1)
                );
            m();
        },
        O = (e) => (t) => {
            (e(t),
                (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: J.Qu.SCREEN_SHARE,
                    value: J.bk.SETTINGS_OPENED
                }));
        },
        {
            Component: b,
            events: { onMouseEnter: v, onMouseLeave: E },
            play: _
        } = (0, s.P)(g ? 'disable' : 'enable');
    r.useEffect(() => () => _(), [g, _]);
    let x = eo(l);
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(R.Z, {
                channel: n,
                currentUser: c,
                activeStreams: g ? [f] : [],
                handleGoLive: m,
                onClose: x(t),
                appContext: et.IlC.OVERLAY,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: d.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(el, {
                ref: a,
                iconComponent: b,
                tooltip: t,
                'aria-label': en.intl.string(en.t.FeUKeH),
                isActive: g,
                highlightedColor: 'green',
                onClick: y,
                popoutOpen: o,
                popoutDisabled: !g,
                onPopoutClick: O(r),
                onContextMenu: O(r),
                onMouseEnter: v,
                onMouseLeave: E,
                disabled: !p || !u,
                isTrayButton: !0
            });
        }
    });
}
function ed(e) {
    var t;
    let { voiceChannel: l, locked: a } = e,
        s = r.useRef(null),
        u = null != (t = null == l ? void 0 : l.getGuildId()) ? t : null,
        { mute: p, suppress: h } = (0, D.Z)(l),
        m = (0, o.e7)([B.Z], () => B.Z.isDeaf()),
        y = null == l || p || h || m,
        { analyticsLocations: O } = (0, g.ZP)();
    function b(e) {
        null != u &&
            ((0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                type: J.Qu.SOUNDBOARD,
                value: J.bk.SETTINGS_OPENED
            }),
            (0, f.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        er(
                            {
                                sourceAnalyticsLocations: O,
                                guildId: u
                            },
                            t
                        )
                    );
            }));
    }
    let {
            Component: v,
            events: { onClick: E, onMouseEnter: _, onMouseLeave: x }
        } = (0, c.j)(),
        I = eo(a),
        S = (0, o.e7)([Z.Z, G.default], () => Z.Z.isUserPlayingSounds(G.default.getId()), []) ? 'green' : void 0;
    return (0, i.jsx)(d.yRy, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return y || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(P.Z, {
                      guildId: u,
                      channel: l,
                      onClose: I(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(el, {
                ref: s,
                iconComponent: v,
                tooltip: p ? en.intl.string(en.t['Ox4/zc']) : h ? en.intl.string(en.t['+YBKYG']) : m ? en.intl.string(en.t.X1lQlp) : void 0,
                onClick: (e) => {
                    (E(),
                        (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                            type: J.Qu.SOUNDBOARD,
                            value: J.bk.PANEL_OPENED,
                            userId: G.default.getId()
                        }),
                        n(e));
                },
                highlightedColor: S,
                defaultColor: S,
                onContextMenu: b,
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
function ep(e) {
    let { voiceChannel: t, locked: n } = e,
        a = r.useRef(null),
        s = (0, o.e7)([Y.Z], () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        { changeLeaveCallAndActivityIcons: c } = (0, N.A)({ location: 'DisconnectActionButton' }),
        u = () => {
            ((0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                type: J.Qu.CALL_BUTTON,
                value: J.bk.DISABLED,
                userId: G.default.getId()
            }),
                s && h.default.disconnect());
        },
        p = (e) => {
            (h.default.selectVoiceChannel(e),
                (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: J.Qu.CALL_BUTTON,
                    value: J.bk.ENABLED,
                    userId: G.default.getId()
                }));
        },
        [f, m] = r.useTransition(),
        g = (e) => (t) => {
            (m(() => {
                e(t);
            }),
                (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
                    type: J.Qu.CALL_BUTTON,
                    value: J.bk.SETTINGS_OPENED
                }));
        },
        {
            Component: y,
            events: { onMouseEnter: O, onMouseLeave: b }
        } = (0, l.K)(),
        v = eo(n);
    return (0, i.jsx)(d.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(L.Z, {
                currentVoiceChannel: t,
                onClose: v(n),
                onSelect: p
            });
        },
        align: 'center',
        position: 'top',
        animation: d.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(el, {
                ref: a,
                iconComponent: s ? (c ? d.PBZ : y) : d.Csw,
                tooltip: s ? (c ? en.intl.string(en.t['Hi1/aW']) : en.intl.string(en.t['6vrfgo'])) : en.intl.string(en.t.S0W8Z2),
                onClick: s ? u : g(n),
                defaultColor: s ? 'disconnect' : void 0,
                onMouseEnter: O,
                onMouseLeave: b,
                onContextMenu: g(n),
                isActive: r,
                onPopoutClick: s ? g(n) : void 0,
                popoutOpen: r,
                isTrayButton: !0
            });
        }
    });
}
function ef(e) {
    let { voiceChannel: t } = e,
        n = (0, o.e7)([F.Z], () => F.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: ei.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: ei.guildIconContainer,
                        children: [
                            (0, i.jsx)(C.Z, {
                                guild: n,
                                size: C.Z.Sizes.SMOL,
                                className: ei.guildIcon
                            }),
                            (0, i.jsx)(d.Text, {
                                tag: 'div',
                                variant: 'text-sm/medium',
                                color: 'text-primary',
                                className: ei.guildName,
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
        r = (0, x.ZP)(t);
    return (0, i.jsxs)('div', {
        className: ei.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(d.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: ei.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'sm',
                        color: 'currentColor'
                    })
                }),
            null != r &&
                (0, i.jsx)(d.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    className: ei.channelName,
                    children: r
                })
        ]
    });
}
function em(e) {
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
                    w.Z,
                    ((t = er({}, a)),
                    (n = n =
                        {
                            hasVideo: c,
                            connectionStatusTextVariant: 'text-sm/medium'
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
                (0, i.jsx)(ef, { voiceChannel: r }),
                (0, i.jsx)('div', { className: ei.separatorDot }),
                (0, i.jsx)(eh, { voiceChannel: r })
            ]
        })
    );
}
