n.d(t, {
    L: function () {
        return ed;
    },
    N3: function () {
        return er;
    },
    Ox: function () {
        return en;
    },
    SE: function () {
        return ei;
    },
    aG: function () {
        return el;
    },
    c_: function () {
        return ea;
    },
    sm: function () {
        return eo;
    }
});
var i = n(200651),
    r = n(192379),
    o = n(691324),
    l = n(442837),
    a = n(685072),
    s = n(400354),
    c = n(652844),
    d = n(864094),
    u = n(582019),
    h = n(75735),
    m = n(481060),
    p = n(846027),
    x = n(239091),
    f = n(287734),
    v = n(40851),
    g = n(571250),
    C = n(628581),
    Z = n(659580),
    _ = n(793865),
    b = n(55311),
    j = n(575175),
    I = n(933557),
    E = n(471445),
    k = n(44315),
    N = n(74299),
    w = n(803647),
    y = n(565138),
    T = n(917405),
    S = n(763296),
    L = n(603074),
    A = n(879815),
    O = n(189771),
    P = n(294629),
    V = n(67844),
    M = n(544384),
    R = n(892807),
    D = n(560688),
    W = n(871499),
    z = n(199902),
    F = n(314897),
    G = n(430824),
    B = n(131951),
    U = n(19780),
    Y = n(944486),
    H = n(594174),
    X = n(979651),
    K = n(388627),
    Q = n(810632),
    q = n(981631),
    J = n(388032),
    $ = n(725775);
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
    let { isToggled: t, disabled: n, iconComponent: r, iconColor: o, tooltip: l, defaultColor: a = 'primaryDark', highlightedColor: s = 'white', popoutOpen: c, onClick: d, popoutDisabled: u, onPopoutClick: h, onMouseEnter: m, onMouseLeave: p, onContextMenu: x, fullRegionButton: f } = e;
    return (0, i.jsx)(W.d, {
        onClick: null != d ? d : () => {},
        color: t ? s : a,
        className: $.button,
        disabled: n,
        popoutOpen: c,
        popoutDisabled: u,
        label: l,
        fullRegionButton: f,
        onMouseEnter: (e) => {
            null == m || m(e);
        },
        onMouseLeave: (e) => {
            null == p || p(e);
        },
        ignoreColorForCaret: !c,
        iconComponent: r,
        iconColor: o,
        isActive: t,
        onContextMenu: x,
        onPopoutClick: h
    });
}
function en(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: l, selfMute: a, mute: s } = (0, P.Z)(t),
        d = a || s || l,
        u = (0, C.Z)(a, s, l, !1),
        { Component: h, play: p, events: x } = (0, c.O)(d ? 'unmute' : 'mute');
    r.useEffect(() => () => p(), [p, d]);
    let f = ee(n);
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
                onClose: f(t),
                renderInputDevices: !0,
                renderInputModes: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: m.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: h,
                tooltip: u,
                onClick: () => (0, j.Z)(s, l, q.jXE.OVERLAY),
                onPopoutClick: n,
                popoutOpen: r,
                onContextMenu: n,
                iconColor: d ? (0, k.Lq)(o.I.RED_400) : void 0,
                onMouseEnter: () => {
                    x.onMouseEnter();
                },
                onMouseLeave: () => {
                    x.onMouseLeave();
                }
            });
        }
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { selfDeaf: o, deaf: l } = (0, A.Z)(t),
        a = o || l,
        {
            Component: c,
            play: d,
            events: { onMouseEnter: u, onMouseLeave: h }
        } = (0, s.l)(a ? 'undeafen' : 'deafen'),
        p = l ? m.HeadphonesDenyIcon : c;
    r.useEffect(() => () => d(), [a, d]);
    let x = () => {
            (0, b.Z)(l, q.jXE.OVERLAY);
        },
        f = ee(n);
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
                onClose: f(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: m.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: p,
                tooltip: (0, g.Z)(o, l, !1),
                isToggled: a,
                onClick: x,
                onContextMenu: n,
                onMouseEnter: u,
                onMouseLeave: h,
                onPopoutClick: n,
                popoutOpen: r
            });
        }
    });
}
function er(e) {
    var t;
    let { voiceChannel: n, locked: o } = e,
        a = (0, l.e7)([B.Z], () => B.Z.isVideoEnabled()),
        s = (0, l.e7)([B.Z], () => Object.values(B.Z.getVideoDevices())[0]),
        c = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        d = !1 === c,
        u = (0, O.Z)(n),
        x = (e) => {
            p.Z.setVideoEnabled(e);
        },
        f = () => {
            d ? x(!0) : (0, D.Z)();
        },
        v = c ? () => f() : () => x(!a),
        {
            Component: g,
            play: C,
            events: { onMouseEnter: Z, onMouseLeave: b }
        } = (0, h.o)(a ? 'disable' : 'enable'),
        j =
            null != n
                ? (0, V.X)({
                      enabled: a,
                      cameraUnavailable: c,
                      hasPermission: u,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => C(), [a, C]);
    let I = ee(o),
        E = null == n || !u;
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(_.Z, { onClose: I(t) });
        },
        align: 'center',
        position: 'top',
        animation: m.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: g,
                tooltip: j,
                onClick: v,
                isToggled: a,
                highlightedColor: a ? 'green' : 'white',
                defaultColor: a ? 'green' : 'primaryDark',
                onPopoutClick: n,
                popoutOpen: r,
                onContextMenu: n,
                onMouseEnter: Z,
                onMouseLeave: b,
                disabled: E
            });
        }
    });
}
function eo(e) {
    let t,
        { voiceChannel: n, locked: o } = e,
        a = (0, l.e7)([H.default], () => H.default.getCurrentUser()),
        s = (0, O.Z)(n),
        c = (0, l.cj)([B.Z], () => (0, N.Z)(B.Z)),
        u = (0, l.e7)([z.Z], () => z.Z.getCurrentUserActiveStream()),
        h = (0, v.bp)(),
        p = (0, Q.B)(),
        x = null != u;
    if (x) t = J.intl.string(J.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = s ? (null != e ? J.intl.format(J.t.AB5gT0, { game: e.name }) : J.intl.string(J.t.FeUKeH)) : J.intl.string(J.t.uQn9Bw);
    }
    let f = () => {
            if (x) return (0, w.Z)(u, !1);
            p();
        },
        {
            Component: g,
            events: { onMouseEnter: C, onMouseLeave: Z },
            play: _
        } = (0, d.P)(x ? 'disable' : 'enable');
    r.useEffect(() => () => _(), [x, _]);
    let b = ee(o);
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(M.Z, {
                channel: n,
                currentUser: a,
                activeStreams: x ? [u] : [],
                handleGoLive: p,
                onClose: b(t),
                appContext: h,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: m.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(et, {
                iconComponent: g,
                tooltip: t,
                isToggled: x,
                onClick: f,
                popoutOpen: o,
                popoutDisabled: !x,
                onPopoutClick: r,
                onContextMenu: r,
                onMouseEnter: C,
                onMouseLeave: Z,
                highlightedColor: x ? 'green' : 'white',
                defaultColor: x ? 'green' : 'primaryDark',
                disabled: !c || !s
            });
        }
    });
}
function el(e) {
    var t;
    let { voiceChannel: r, locked: o } = e,
        a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: c } = (0, P.Z)(r),
        d = (0, l.e7)([B.Z], () => B.Z.isDeaf()),
        h = null == r || s || c || d;
    function p(e) {
        null != a &&
            (0, x.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: a,
                        ...t
                    });
            });
    }
    let {
            Component: f,
            events: { onClick: v, onMouseEnter: g, onMouseLeave: C }
        } = (0, u.j)(),
        Z = ee(o),
        _ = (0, l.e7)([S.Z, F.default], () => S.Z.isUserPlayingSounds(F.default.getId()), []);
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == r
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(L.Z, {
                      guildId: a,
                      channel: r,
                      onClose: Z(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: m.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: f,
                tooltip: (function () {
                    if (s) return J.intl.string(J.t['Ox4/zc']);
                    if (c) return J.intl.string(J.t['+YBKYG']);
                    if (d) return J.intl.string(J.t.X1lQlp);
                })(),
                onClick: (e) => {
                    v(), n(e);
                },
                highlightedColor: _ ? 'green' : 'white',
                defaultColor: _ ? 'green' : 'primaryDark',
                onContextMenu: p,
                onMouseEnter: g,
                onMouseLeave: C,
                isToggled: r,
                popoutOpen: r,
                disabled: h
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        r = (0, l.e7)([Y.Z], () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        o = () => {
            r && f.default.disconnect();
        },
        s = (e) => {
            f.default.selectVoiceChannel(e.id);
        },
        {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: u }
        } = (0, a.K)(),
        h = ee(n),
        p = r ? c : m.PhoneCallIcon;
    return (0, i.jsx)(m.Popout, {
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
        animation: m.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, i.jsx)(et, {
                iconComponent: p,
                tooltip: null != t ? J.intl.string(J.t['6vrfgo']) : J.intl.string(J.t.S0W8Z2),
                onClick: r ? o : l,
                defaultColor: r ? 'red' : 'primaryDark',
                onMouseEnter: d,
                onMouseLeave: u,
                onContextMenu: l,
                isToggled: a,
                onPopoutClick: r ? l : void 0,
                popoutOpen: a
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t } = e,
        n = (0, l.e7)([G.Z], () => G.Z.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(m.Text, {
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
        n = (0, E.KS)(t),
        r = (0, I.ZP)(t);
    return (0, i.jsxs)('div', {
        className: $.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(m.Text, {
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
                (0, i.jsx)(m.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: $.channelName,
                    children: r
                })
        ]
    });
}
function ed(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        r = (0, l.cj)([U.Z], () => ({
            channelId: U.Z.getChannelId(),
            quality: U.Z.getQuality(),
            state: U.Z.getState(),
            lastPing: U.Z.getLastPing()
        })),
        o = null != n,
        a = (0, l.e7)([X.Z], () => null != n && X.Z.hasVideo(n), [n]);
    return (
        o &&
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
                (0, i.jsx)(ec, { voiceChannel: t })
            ]
        })
    );
}
