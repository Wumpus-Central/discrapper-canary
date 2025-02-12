n.d(t, {
    L: () => ec,
    N3: () => er,
    Ox: () => en,
    SE: () => ei,
    aG: () => eo,
    c_: () => ea,
    sm: () => el
});
var i = n(200651),
    r = n(192379),
    l = n(691324),
    o = n(442837),
    a = n(685072),
    s = n(400354),
    d = n(652844),
    c = n(864094),
    u = n(582019),
    h = n(75735),
    _ = n(481060),
    p = n(846027),
    f = n(239091),
    g = n(287734),
    m = n(571250),
    v = n(628581),
    E = n(659580),
    I = n(793865),
    x = n(55311),
    C = n(575175),
    S = n(933557),
    Z = n(471445),
    y = n(44315),
    b = n(74299),
    O = n(803647),
    N = n(565138),
    T = n(917405),
    w = n(763296),
    k = n(603074),
    A = n(879815),
    j = n(189771),
    R = n(294629),
    L = n(67844),
    D = n(544384),
    P = n(892807),
    M = n(560688),
    z = n(871499),
    V = n(199902),
    W = n(314897),
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
    $ = n(864228);
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
    let { isToggled: t, disabled: n, iconComponent: r, iconColor: l, tooltip: o, defaultColor: a = 'primaryDark', highlightedColor: s = 'white', popoutOpen: d, onClick: c, popoutDisabled: u, onPopoutClick: h, onMouseEnter: _, onMouseLeave: p, onContextMenu: f, fullRegionButton: g, ...m } = e;
    return (0, i.jsx)(z.d, {
        onClick: null != c ? c : () => {},
        color: t ? s : a,
        className: $.button,
        disabled: n,
        popoutOpen: d,
        popoutDisabled: u,
        label: o,
        fullRegionButton: g,
        forceGroupedButtons: !0,
        onMouseEnter: (e) => {
            null == _ || _(e);
        },
        onMouseLeave: (e) => {
            null == p || p(e);
        },
        ignoreColorForCaret: !d,
        iconComponent: r,
        iconColor: l,
        isActive: t,
        onContextMenu: f,
        onPopoutClick: h,
        'aria-label': m['aria-label']
    });
}
function en(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: o, selfMute: a, mute: s } = (0, R.Z)(t),
        c = a || s || o,
        u = (0, v.Z)(a, s, o, !1),
        { Component: h, play: p, events: f } = (0, d.O)(c ? 'unmute' : 'mute');
    r.useEffect(() => () => p(), [p, c]);
    let g = ee(n),
        m = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.MICROPHONE,
                    value: Q.bk.SETTINGS_OPENED
                });
        };
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.default, {
                onClose: g(t),
                renderInputDevices: !0,
                renderInputModes: !0,
                appContext: J.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: h,
                tooltip: u,
                onClick: () => {
                    (0, C.Z)(s, o, J.jXE.OVERLAY),
                        (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                            type: Q.Qu.MICROPHONE,
                            value: c ? Q.bk.ENABLED : Q.bk.DISABLED,
                            userId: W.default.getId()
                        });
                },
                onPopoutClick: m(n),
                onContextMenu: m(n),
                popoutOpen: r,
                iconColor: c ? (0, y.Lq)(l.I.RED_400) : void 0,
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
        { selfDeaf: l, deaf: o } = (0, A.Z)(t),
        a = l || o,
        {
            Component: d,
            play: c,
            events: { onMouseEnter: u, onMouseLeave: h }
        } = (0, s.l)(a ? 'undeafen' : 'deafen'),
        p = o ? _.Vm4 : d;
    r.useEffect(() => () => c(), [a, c]);
    let f = () => {
            (0, x.Z)(o, J.jXE.OVERLAY),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.AUDIO,
                    value: o ? Q.bk.ENABLED : Q.bk.DISABLED,
                    userId: W.default.getId()
                });
        },
        g = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.AUDIO,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        v = ee(n);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.default, {
                onClose: v(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: J.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: p,
                tooltip: (0, m.Z)(l, o, !1),
                isToggled: a,
                onClick: f,
                onContextMenu: g(n),
                onMouseEnter: u,
                onMouseLeave: h,
                onPopoutClick: g(n),
                popoutOpen: r
            });
        }
    });
}
function er(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        a = (0, o.e7)([F.Z], () => F.Z.isVideoEnabled()),
        s = (0, o.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]),
        d = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        c = !1 === d,
        u = (0, j.Z)(n),
        f = (e) => {
            p.Z.setVideoEnabled(e);
        },
        g = () => {
            c ? f(!0) : (0, M.Z)();
        },
        m = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CAMERA,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        v = () => {
            d ? g() : f(!a),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CAMERA,
                    value: a ? Q.bk.DISABLED : Q.bk.ENABLED,
                    userId: W.default.getId()
                });
        },
        {
            Component: E,
            play: x,
            events: { onMouseEnter: C, onMouseLeave: S }
        } = (0, h.o)(a ? 'disable' : 'enable'),
        Z =
            null != n
                ? (0, L.X)({
                      enabled: a,
                      cameraUnavailable: d,
                      hasPermission: u,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => x(), [a, x]);
    let y = ee(l),
        b = null == n || !u;
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.Z, {
                onClose: y(t),
                appContext: J.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: E,
                tooltip: Z,
                onClick: v,
                isToggled: a,
                highlightedColor: a ? 'green' : 'white',
                defaultColor: a ? 'green' : 'primaryDark',
                onPopoutClick: m(n),
                popoutOpen: r,
                onContextMenu: m(n),
                onMouseEnter: C,
                onMouseLeave: S,
                disabled: b
            });
        }
    });
}
function el(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        a = (0, o.e7)([H.default], () => H.default.getCurrentUser()),
        s = (0, j.Z)(n),
        d = (0, o.cj)([F.Z], () => (0, b.Z)(F.Z)),
        u = (0, o.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
        h = (0, X.B)(),
        p = () => {
            h(),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.GO_LIVE,
                    value: Q.bk.ENABLED,
                    userId: W.default.getId()
                });
        },
        f = null != u;
    if (f) t = q.intl.string(q.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = s ? (null != e ? q.intl.format(q.t.AB5gT0, { game: e.name }) : q.intl.string(q.t.FeUKeH)) : q.intl.string(q.t.uQn9Bw);
    }
    let g = () => {
            if (f)
                return (
                    (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                        type: Q.Qu.GO_LIVE,
                        value: Q.bk.DISABLED,
                        userId: W.default.getId()
                    }),
                    (0, O.Z)(u, !1)
                );
            p();
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
            events: { onMouseEnter: E, onMouseLeave: I },
            play: x
        } = (0, c.P)(f ? 'disable' : 'enable');
    r.useEffect(() => () => x(), [f, x]);
    let C = ee(l);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(D.Z, {
                channel: n,
                currentUser: a,
                activeStreams: f ? [u] : [],
                handleGoLive: p,
                onClose: C(t),
                appContext: J.IlC.OVERLAY,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: l } = n;
            return (0, i.jsx)(et, {
                iconComponent: v,
                tooltip: t,
                'aria-label': q.intl.string(q.t.FeUKeH),
                isToggled: f,
                onClick: g,
                popoutOpen: l,
                popoutDisabled: !f,
                onPopoutClick: m(r),
                onContextMenu: m(r),
                onMouseEnter: E,
                onMouseLeave: I,
                highlightedColor: f ? 'green' : 'white',
                defaultColor: f ? 'green' : 'primaryDark',
                disabled: !d || !s
            });
        }
    });
}
function eo(e) {
    var t;
    let { voiceChannel: r, locked: l } = e,
        a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: d } = (0, R.Z)(r),
        c = (0, o.e7)([F.Z], () => F.Z.isDeaf()),
        h = null == r || s || d || c;
    function p(e) {
        null != a &&
            ((0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                type: Q.Qu.SOUNDBOARD,
                value: Q.bk.SETTINGS_OPENED
            }),
            (0, f.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: a,
                        ...t
                    });
            }));
    }
    let {
            Component: g,
            events: { onClick: m, onMouseEnter: v, onMouseLeave: E }
        } = (0, u.j)(),
        I = ee(l),
        x = (0, o.e7)([w.Z, W.default], () => w.Z.isUserPlayingSounds(W.default.getId()), []);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == r
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(k.Z, {
                      guildId: a,
                      channel: r,
                      onClose: I(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: g,
                tooltip: s ? q.intl.string(q.t['Ox4/zc']) : d ? q.intl.string(q.t['+YBKYG']) : c ? q.intl.string(q.t.X1lQlp) : void 0,
                onClick: (e) => {
                    m(),
                        (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                            type: Q.Qu.SOUNDBOARD,
                            value: Q.bk.PANEL_OPENED,
                            userId: W.default.getId()
                        }),
                        n(e);
                },
                highlightedColor: x ? 'green' : 'white',
                defaultColor: x ? 'green' : 'primaryDark',
                onContextMenu: p,
                onMouseEnter: v,
                onMouseLeave: E,
                isToggled: r,
                popoutOpen: r,
                disabled: h
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        r = (0, o.e7)([G.Z], () => G.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        l = () => {
            (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                type: Q.Qu.CALL_BUTTON,
                value: Q.bk.DISABLED,
                userId: W.default.getId()
            }),
                r && g.default.disconnect();
        },
        s = (e) => {
            g.default.selectVoiceChannel(e.id),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CALL_BUTTON,
                    value: Q.bk.ENABLED,
                    userId: W.default.getId()
                });
        },
        d = (e) => (t) => {
            e(t),
                (0, Q.Ws)(J.Odu.QUICK_ACTIONS, {
                    type: Q.Qu.CALL_BUTTON,
                    value: Q.bk.SETTINGS_OPENED
                });
        },
        {
            Component: c,
            events: { onMouseEnter: u, onMouseLeave: h }
        } = (0, a.K)(),
        p = ee(n),
        f = r ? c : _.Csw;
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(P.Z, {
                currentVoiceChannel: t,
                onClose: p(n),
                onSelect: s
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: o } = e,
                { isShown: a } = n;
            return (0, i.jsx)(et, {
                iconComponent: f,
                tooltip: null != t ? q.intl.string(q.t['6vrfgo']) : q.intl.string(q.t.S0W8Z2),
                onClick: r ? l : d(o),
                defaultColor: r ? 'red' : 'primaryDark',
                onMouseEnter: u,
                onMouseLeave: h,
                onContextMenu: d(o),
                isToggled: a,
                onPopoutClick: r ? d(o) : void 0,
                popoutOpen: a
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t } = e,
        n = (0, o.e7)([U.Z], () => U.Z.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(N.Z, {
                                guild: n,
                                size: N.Z.Sizes.SMOL,
                                className: $.guildIcon
                            }),
                            (0, i.jsx)(_.Text, {
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
function ed(e) {
    let { voiceChannel: t } = e,
        n = (0, Z.KS)(t),
        r = (0, S.ZP)(t);
    return (0, i.jsxs)('div', {
        className: $.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(_.Text, {
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
                (0, i.jsx)(_.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: $.channelName,
                    children: r
                })
        ]
    });
}
function ec(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        r = (0, o.cj)([B.Z], () => ({
            channelId: B.Z.getChannelId(),
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing()
        })),
        l = null != n,
        a = (0, o.e7)([Y.Z], () => null != n && Y.Z.hasVideo(n), [n]);
    return (
        l &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.Z, {
                    ...r,
                    hasVideo: a,
                    connectionStatusTextVariant: 'text-xs/semibold'
                }),
                (0, i.jsx)(es, { voiceChannel: t }),
                (0, i.jsx)('div', { className: $.separatorDot }),
                (0, i.jsx)(ed, { voiceChannel: t })
            ]
        })
    );
}
