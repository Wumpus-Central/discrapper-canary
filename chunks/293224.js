n.d(t, {
    L: function () {
        return eu;
    },
    N3: function () {
        return el;
    },
    Ox: function () {
        return en;
    },
    SE: function () {
        return ei;
    },
    aG: function () {
        return er;
    },
    c_: function () {
        return ea;
    },
    sm: function () {
        return eo;
    }
});
var i = n(200651),
    l = n(192379),
    o = n(691324),
    r = n(442837),
    a = n(685072),
    s = n(400354),
    c = n(652844),
    u = n(864094),
    d = n(582019),
    h = n(75735),
    f = n(481060),
    p = n(846027),
    m = n(239091),
    v = n(287734),
    x = n(40851),
    g = n(571250),
    C = n(628581),
    Z = n(659580),
    _ = n(793865),
    I = n(55311),
    j = n(575175),
    E = n(933557),
    b = n(471445),
    w = n(44315),
    N = n(74299),
    k = n(803647),
    y = n(565138),
    L = n(917405),
    S = n(763296),
    T = n(603074),
    A = n(879815),
    O = n(189771),
    V = n(294629),
    M = n(67844),
    P = n(544384),
    R = n(892807),
    D = n(560688),
    W = n(871499),
    z = n(199902),
    F = n(314897),
    G = n(430824),
    U = n(131951),
    B = n(19780),
    Y = n(944486),
    H = n(594174),
    X = n(979651),
    K = n(388627),
    Q = n(810632),
    q = n(981631),
    J = n(388032),
    $ = n(725775);
function ee(e) {
    let t = l.useRef(null);
    return (
        l.useEffect(() => {
            if (e) {
                var n;
                null === (n = t.current) || void 0 === n || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function et(e) {
    let { isToggled: t, disabled: n, iconComponent: l, iconColor: o, tooltip: r, defaultColor: a = 'primaryDark', highlightedColor: s = 'white', popoutOpen: c, onClick: u, onPopoutClick: d, onMouseEnter: h, onMouseLeave: p, onContextMenu: m } = e;
    return (0, i.jsx)(f.Tooltip, {
        text: r,
        'aria-label': !1,
        children: (e) => {
            let { onMouseEnter: r, onMouseLeave: f, ...v } = e;
            return (0, i.jsx)(W.d, {
                ...v,
                onClick: null != u ? u : () => {},
                color: t ? s : a,
                className: $.button,
                disabled: n,
                popoutOpen: c,
                onMouseEnter: (e) => {
                    null == r || r(), null == h || h(e);
                },
                onMouseLeave: (e) => {
                    null == f || f(), null == p || p(e);
                },
                ignoreColorForCaret: !c,
                iconComponent: l,
                iconColor: o,
                isActive: t,
                onContextMenu: m,
                onPopoutClick: d
            });
        }
    });
}
function en(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: r, selfMute: a, mute: s } = (0, V.Z)(t),
        u = a || s || r,
        d = (0, C.Z)(a, s, r, !1),
        { Component: h, play: p, events: m } = (0, c.O)(u ? 'unmute' : 'mute');
    l.useEffect(() => () => p(), [p, u]);
    let v = ee(n);
    return (0, i.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
                onClose: v(t),
                renderInputDevices: !0,
                renderInputModes: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: f.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(et, {
                iconComponent: h,
                tooltip: d,
                onClick: () => (0, j.Z)(s, r, q.jXE.OVERLAY),
                onPopoutClick: n,
                popoutOpen: l,
                onContextMenu: n,
                iconColor: u ? (0, w.Lq)(o.I.RED_400) : void 0,
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
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { selfDeaf: o, deaf: r } = (0, A.Z)(t),
        a = o || r,
        {
            Component: c,
            play: u,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, s.l)(a ? 'undeafen' : 'deafen'),
        p = r ? f.HeadphonesDenyIcon : c;
    l.useEffect(() => () => u(), [a, u]);
    let m = () => {
            (0, I.Z)(r, q.jXE.OVERLAY);
        },
        v = ee(n);
    return (0, i.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
                onClose: v(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: f.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(et, {
                iconComponent: p,
                tooltip: (0, g.Z)(o, r, !1),
                isToggled: a,
                onClick: m,
                onContextMenu: n,
                onMouseEnter: d,
                onMouseLeave: h,
                onPopoutClick: n,
                popoutOpen: l
            });
        }
    });
}
function el(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        a = (0, r.e7)([U.Z], () => U.Z.isVideoEnabled()),
        s = (0, r.e7)([U.Z], () => Object.values(U.Z.getVideoDevices())[0]),
        c = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        u = !1 === c,
        d = (0, O.Z)(n),
        m = (e) => {
            p.Z.setVideoEnabled(e);
        },
        v = () => {
            u ? m(!0) : (0, D.Z)();
        },
        x = c ? () => v() : () => m(!a),
        {
            Component: g,
            play: C,
            events: { onMouseEnter: Z, onMouseLeave: I }
        } = (0, h.o)(a ? 'disable' : 'enable'),
        j =
            null != n
                ? (0, M.X)({
                      enabled: a,
                      cameraUnavailable: c,
                      hasPermission: d,
                      channel: n
                  })
                : void 0;
    l.useEffect(() => () => C(), [a, C]);
    let E = ee(o),
        b = null == n || !d;
    return (0, i.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(_.Z, { onClose: E(t) });
        },
        align: 'center',
        position: 'top',
        animation: f.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(et, {
                iconComponent: g,
                tooltip: j,
                onClick: x,
                isToggled: a,
                onPopoutClick: n,
                popoutOpen: l,
                onContextMenu: n,
                onMouseEnter: Z,
                onMouseLeave: I,
                disabled: b
            });
        }
    });
}
function eo(e) {
    let t,
        { voiceChannel: n, locked: o } = e,
        a = (0, r.e7)([H.default], () => H.default.getCurrentUser()),
        s = (0, O.Z)(n),
        c = (0, r.cj)([U.Z], () => (0, N.Z)(U.Z)),
        d = (0, r.e7)([z.Z], () => z.Z.getCurrentUserActiveStream()),
        h = (0, x.bp)(),
        p = (0, Q.B)(),
        m = null != d;
    if (m) t = J.intl.string(J.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = s ? (null != e ? J.intl.format(J.t.AB5gT0, { game: e.name }) : J.intl.string(J.t.FeUKeH)) : J.intl.string(J.t.uQn9Bw);
    }
    let v = () => {
            if (m) return (0, k.Z)(d, !1);
            p();
        },
        {
            Component: g,
            events: { onMouseEnter: C, onMouseLeave: Z },
            play: _
        } = (0, u.P)(m ? 'disable' : 'enable');
    l.useEffect(() => () => _(), [m, _]);
    let I = ee(o);
    return (0, i.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != n
                ? (0, i.jsx)(P.Z, {
                      channel: n,
                      currentUser: a,
                      activeStreams: null != d ? [d] : [],
                      handleGoLive: p,
                      onClose: I(t),
                      appContext: h,
                      disableChangeWindows: !0
                  })
                : (0, i.jsx)(i.Fragment, {});
        },
        align: 'center',
        position: 'top',
        animation: f.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: o } = n;
            return (0, i.jsx)(et, {
                iconComponent: g,
                tooltip: t,
                isToggled: m,
                onClick: v,
                onPopoutClick: null != d ? l : void 0,
                popoutOpen: o,
                onContextMenu: l,
                onMouseEnter: C,
                onMouseLeave: Z,
                disabled: !c || !s
            });
        }
    });
}
function er(e) {
    var t;
    let { voiceChannel: l, locked: o } = e,
        a = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: c } = (0, V.Z)(l),
        u = (0, r.e7)([U.Z], () => U.Z.isDeaf()),
        h = null == l || s || c || u;
    function p(e) {
        null != a &&
            (0, m.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: a,
                        ...t
                    });
            });
    }
    let {
            Component: v,
            events: { onClick: x, onMouseEnter: g, onMouseLeave: C }
        } = (0, d.j)(),
        Z = ee(o),
        _ = (0, r.e7)([S.Z, F.default], () => S.Z.isUserPlayingSounds(F.default.getId()), []);
    return (0, i.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(T.Z, {
                      guildId: a,
                      channel: l,
                      onClose: Z(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: f.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(et, {
                iconComponent: v,
                tooltip: (function () {
                    if (s) return J.intl.string(J.t['Ox4/zc']);
                    if (c) return J.intl.string(J.t['+YBKYG']);
                    if (u) return J.intl.string(J.t.X1lQlp);
                })(),
                onClick: (e) => {
                    x(), n(e);
                },
                highlightedColor: _ ? 'green' : 'white',
                defaultColor: _ ? 'green' : 'primaryDark',
                onContextMenu: p,
                onMouseEnter: g,
                onMouseLeave: C,
                isToggled: l,
                popoutOpen: l,
                disabled: h
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        l = (0, r.e7)([Y.Z], () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        o = () => {
            l && v.default.disconnect();
        },
        s = (e) => {
            v.default.selectVoiceChannel(e.id);
        },
        {
            Component: c,
            events: { onMouseEnter: u, onMouseLeave: d }
        } = (0, a.K)(),
        h = ee(n),
        p = l ? c : f.PhoneCallIcon;
    return (0, i.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(R.Z, {
                currentVoiceChannel: t,
                onClose: h(n),
                onSelect: s
            });
        },
        align: 'center',
        position: 'top',
        animation: f.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: a } = n;
            return (0, i.jsx)(et, {
                iconComponent: p,
                tooltip: null != t ? J.intl.string(J.t['6vrfgo']) : J.intl.string(J.t.S0W8Z2),
                onClick: l ? o : r,
                defaultColor: l ? 'red' : 'primaryDark',
                onMouseEnter: u,
                onMouseLeave: d,
                onContextMenu: r,
                isToggled: a,
                onPopoutClick: l ? r : void 0,
                popoutOpen: a
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t } = e,
        n = (0, r.e7)([G.Z], () => G.Z.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(y.Z, {
                                guild: n,
                                size: y.Z.Sizes.SMOL,
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
function ec(e) {
    let { voiceChannel: t } = e,
        n = (0, b.KS)(t),
        l = (0, E.ZP)(t);
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
            null != l &&
                (0, i.jsx)(f.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: $.channelName,
                    children: l
                })
        ]
    });
}
function eu(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        l = (0, r.cj)([B.Z], () => ({
            channelId: B.Z.getChannelId(),
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing()
        })),
        o = null != n,
        a = (0, r.e7)([X.Z], () => null != n && X.Z.hasVideo(n), [n]);
    return (
        o &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(L.Z, {
                    ...l,
                    hasVideo: a,
                    connectionStatusTextVariant: 'text-xs/semibold'
                }),
                (0, i.jsx)(es, { voiceChannel: t }),
                (0, i.jsx)('div', { className: $.separatorDot }),
                (0, i.jsx)(ec, { voiceChannel: t })
            ]
        })
    );
}
