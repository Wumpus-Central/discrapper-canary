n.d(t, {
    L: () => ec,
    N3: () => er,
    Ox: () => en,
    SE: () => ei,
    aG: () => el,
    c_: () => ea,
    sm: () => eo
});
var i = n(200651),
    r = n(192379),
    o = n(691324),
    l = n(442837),
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
    m = n(40851),
    v = n(571250),
    x = n(628581),
    E = n(659580),
    C = n(793865),
    Z = n(55311),
    S = n(575175),
    I = n(933557),
    y = n(471445),
    b = n(44315),
    w = n(74299),
    N = n(803647),
    O = n(565138),
    T = n(917405),
    j = n(763296),
    k = n(603074),
    R = n(879815),
    A = n(189771),
    L = n(294629),
    P = n(67844),
    D = n(544384),
    M = n(892807),
    z = n(560688),
    V = n(871499),
    W = n(199902),
    F = n(314897),
    U = n(430824),
    H = n(131951),
    B = n(19780),
    G = n(944486),
    Y = n(594174),
    X = n(979651),
    K = n(388627),
    Q = n(810632),
    J = n(981631),
    q = n(388032),
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
    let { isToggled: t, disabled: n, iconComponent: r, iconColor: o, tooltip: l, defaultColor: a = 'primaryDark', highlightedColor: s = 'white', popoutOpen: d, onClick: c, popoutDisabled: u, onPopoutClick: h, onMouseEnter: _, onMouseLeave: p, onContextMenu: f, fullRegionButton: g, ...m } = e;
    return (0, i.jsx)(V.d, {
        onClick: null != c ? c : () => {},
        color: t ? s : a,
        className: $.button,
        disabled: n,
        popoutOpen: d,
        popoutDisabled: u,
        label: l,
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
        iconColor: o,
        isActive: t,
        onContextMenu: f,
        onPopoutClick: h,
        'aria-label': m['aria-label']
    });
}
function en(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: l, selfMute: a, mute: s } = (0, L.Z)(t),
        c = a || s || l,
        u = (0, x.Z)(a, s, l, !1),
        { Component: h, play: p, events: f } = (0, d.O)(c ? 'unmute' : 'mute');
    r.useEffect(() => () => p(), [p, c]);
    let g = ee(n);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.default, {
                onClose: g(t),
                renderInputDevices: !0,
                renderInputModes: !0
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
                onClick: () => (0, S.Z)(s, l, J.jXE.OVERLAY),
                onPopoutClick: n,
                popoutOpen: r,
                onContextMenu: n,
                iconColor: c ? (0, b.Lq)(o.I.RED_400) : void 0,
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
        { selfDeaf: o, deaf: l } = (0, R.Z)(t),
        a = o || l,
        {
            Component: d,
            play: c,
            events: { onMouseEnter: u, onMouseLeave: h }
        } = (0, s.l)(a ? 'undeafen' : 'deafen'),
        p = l ? _.Vm4 : d;
    r.useEffect(() => () => c(), [a, c]);
    let f = () => {
            (0, Z.Z)(l, J.jXE.OVERLAY);
        },
        g = ee(n);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.default, {
                onClose: g(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0
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
                tooltip: (0, v.Z)(o, l, !1),
                isToggled: a,
                onClick: f,
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
        a = (0, l.e7)([H.Z], () => H.Z.isVideoEnabled()),
        s = (0, l.e7)([H.Z], () => Object.values(H.Z.getVideoDevices())[0]),
        d = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        c = !1 === d,
        u = (0, A.Z)(n),
        f = (e) => {
            p.Z.setVideoEnabled(e);
        },
        g = () => {
            c ? f(!0) : (0, z.Z)();
        },
        m = d ? () => g() : () => f(!a),
        {
            Component: v,
            play: x,
            events: { onMouseEnter: E, onMouseLeave: Z }
        } = (0, h.o)(a ? 'disable' : 'enable'),
        S =
            null != n
                ? (0, P.X)({
                      enabled: a,
                      cameraUnavailable: d,
                      hasPermission: u,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => x(), [a, x]);
    let I = ee(o),
        y = null == n || !u;
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(C.Z, { onClose: I(t) });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: v,
                tooltip: S,
                onClick: m,
                isToggled: a,
                highlightedColor: a ? 'green' : 'white',
                defaultColor: a ? 'green' : 'primaryDark',
                onPopoutClick: n,
                popoutOpen: r,
                onContextMenu: n,
                onMouseEnter: E,
                onMouseLeave: Z,
                disabled: y
            });
        }
    });
}
function eo(e) {
    let t,
        { voiceChannel: n, locked: o } = e,
        a = (0, l.e7)([Y.default], () => Y.default.getCurrentUser()),
        s = (0, A.Z)(n),
        d = (0, l.cj)([H.Z], () => (0, w.Z)(H.Z)),
        u = (0, l.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
        h = (0, m.bp)(),
        p = (0, Q.B)(),
        f = null != u;
    if (f) t = q.intl.string(q.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = s ? (null != e ? q.intl.format(q.t.AB5gT0, { game: e.name }) : q.intl.string(q.t.FeUKeH)) : q.intl.string(q.t.uQn9Bw);
    }
    let g = () => {
            if (f) return (0, N.Z)(u, !1);
            p();
        },
        {
            Component: v,
            events: { onMouseEnter: x, onMouseLeave: E },
            play: C
        } = (0, c.P)(f ? 'disable' : 'enable');
    r.useEffect(() => () => C(), [f, C]);
    let Z = ee(o);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(D.Z, {
                channel: n,
                currentUser: a,
                activeStreams: f ? [u] : [],
                handleGoLive: p,
                onClose: Z(t),
                appContext: h,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: o } = n;
            return (0, i.jsx)(et, {
                iconComponent: v,
                tooltip: t,
                'aria-label': q.intl.string(q.t.FeUKeH),
                isToggled: f,
                onClick: g,
                popoutOpen: o,
                popoutDisabled: !f,
                onPopoutClick: r,
                onContextMenu: r,
                onMouseEnter: x,
                onMouseLeave: E,
                highlightedColor: f ? 'green' : 'white',
                defaultColor: f ? 'green' : 'primaryDark',
                disabled: !d || !s
            });
        }
    });
}
function el(e) {
    var t;
    let { voiceChannel: r, locked: o } = e,
        a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: d } = (0, L.Z)(r),
        c = (0, l.e7)([H.Z], () => H.Z.isDeaf()),
        h = null == r || s || d || c;
    function p(e) {
        null != a &&
            (0, f.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: a,
                        ...t
                    });
            });
    }
    let {
            Component: g,
            events: { onClick: m, onMouseEnter: v, onMouseLeave: x }
        } = (0, u.j)(),
        E = ee(o),
        C = (0, l.e7)([j.Z, F.default], () => j.Z.isUserPlayingSounds(F.default.getId()), []);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == r
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(k.Z, {
                      guildId: a,
                      channel: r,
                      onClose: E(t),
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
                    m(), n(e);
                },
                highlightedColor: C ? 'green' : 'white',
                defaultColor: C ? 'green' : 'primaryDark',
                onContextMenu: p,
                onMouseEnter: v,
                onMouseLeave: x,
                isToggled: r,
                popoutOpen: r,
                disabled: h
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        r = (0, l.e7)([G.Z], () => G.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        o = () => {
            r && g.default.disconnect();
        },
        s = (e) => {
            g.default.selectVoiceChannel(e.id);
        },
        {
            Component: d,
            events: { onMouseEnter: c, onMouseLeave: u }
        } = (0, a.K)(),
        h = ee(n),
        p = r ? d : _.Csw;
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(M.Z, {
                currentVoiceChannel: t,
                onClose: h(n),
                onSelect: s
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, i.jsx)(et, {
                iconComponent: p,
                tooltip: null != t ? q.intl.string(q.t['6vrfgo']) : q.intl.string(q.t.S0W8Z2),
                onClick: r ? o : l,
                defaultColor: r ? 'red' : 'primaryDark',
                onMouseEnter: c,
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
        n = (0, l.e7)([U.Z], () => U.Z.getGuild(t.getGuildId()), [t]);
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
                            (0, i.jsx)(O.Z, {
                                guild: n,
                                size: O.Z.Sizes.SMOL,
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
        n = (0, y.KS)(t),
        r = (0, I.ZP)(t);
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
        r = (0, l.cj)([B.Z], () => ({
            channelId: B.Z.getChannelId(),
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing()
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
                (0, i.jsx)(ed, { voiceChannel: t })
            ]
        })
    );
}
