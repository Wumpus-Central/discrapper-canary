n.d(t, {
    L: () => ec,
    N3: () => el,
    Ox: () => en,
    SE: () => ei,
    aG: () => eo,
    c_: () => ea,
    sm: () => er
});
var i = n(200651),
    l = n(192379),
    r = n(691324),
    o = n(442837),
    a = n(685072),
    s = n(400354),
    d = n(652844),
    c = n(864094),
    u = n(582019),
    h = n(75735),
    _ = n(481060),
    p = n(846027),
    g = n(239091),
    f = n(287734),
    m = n(40851),
    v = n(571250),
    x = n(628581),
    E = n(659580),
    Z = n(793865),
    C = n(55311),
    I = n(575175),
    S = n(933557),
    b = n(471445),
    y = n(44315),
    N = n(74299),
    w = n(803647),
    T = n(565138),
    O = n(917405),
    j = n(763296),
    k = n(603074),
    R = n(879815),
    A = n(189771),
    L = n(294629),
    M = n(67844),
    P = n(544384),
    D = n(892807),
    z = n(560688),
    V = n(871499),
    W = n(199902),
    F = n(314897),
    U = n(430824),
    G = n(131951),
    H = n(19780),
    B = n(944486),
    Y = n(594174),
    K = n(979651),
    Q = n(388627),
    X = n(810632),
    J = n(981631),
    q = n(388032),
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
    let { isToggled: t, disabled: n, iconComponent: l, iconColor: r, tooltip: o, defaultColor: a = 'primaryDark', highlightedColor: s = 'white', popoutOpen: d, onClick: c, popoutDisabled: u, onPopoutClick: h, onMouseEnter: _, onMouseLeave: p, onContextMenu: g, fullRegionButton: f, ...m } = e;
    return (0, i.jsx)(V.d, {
        onClick: null != c ? c : () => {},
        color: t ? s : a,
        className: $.button,
        disabled: n,
        popoutOpen: d,
        popoutDisabled: u,
        label: o,
        fullRegionButton: f,
        onMouseEnter: (e) => {
            null == _ || _(e);
        },
        onMouseLeave: (e) => {
            null == p || p(e);
        },
        ignoreColorForCaret: !d,
        iconComponent: l,
        iconColor: r,
        isActive: t,
        onContextMenu: g,
        onPopoutClick: h,
        'aria-label': m['aria-label']
    });
}
function en(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: o, selfMute: a, mute: s } = (0, L.Z)(t),
        c = a || s || o,
        u = (0, x.Z)(a, s, o, !1),
        { Component: h, play: p, events: g } = (0, d.O)(c ? 'unmute' : 'mute');
    l.useEffect(() => () => p(), [p, c]);
    let f = ee(n);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.default, {
                onClose: f(t),
                renderInputDevices: !0,
                renderInputModes: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(et, {
                iconComponent: h,
                tooltip: u,
                onClick: () => (0, I.Z)(s, o, J.jXE.OVERLAY),
                onPopoutClick: n,
                popoutOpen: l,
                onContextMenu: n,
                iconColor: c ? (0, y.Lq)(r.I.RED_400) : void 0,
                onMouseEnter: () => {
                    g.onMouseEnter();
                },
                onMouseLeave: () => {
                    g.onMouseLeave();
                }
            });
        }
    });
}
function ei(e) {
    let { voiceChannel: t, locked: n } = e,
        { selfDeaf: r, deaf: o } = (0, R.Z)(t),
        a = r || o,
        {
            Component: d,
            play: c,
            events: { onMouseEnter: u, onMouseLeave: h }
        } = (0, s.l)(a ? 'undeafen' : 'deafen'),
        p = o ? _.Vm4 : d;
    l.useEffect(() => () => c(), [a, c]);
    let g = () => {
            (0, C.Z)(o, J.jXE.OVERLAY);
        },
        f = ee(n);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.default, {
                onClose: f(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(et, {
                iconComponent: p,
                tooltip: (0, v.Z)(r, o, !1),
                isToggled: a,
                onClick: g,
                onContextMenu: n,
                onMouseEnter: u,
                onMouseLeave: h,
                onPopoutClick: n,
                popoutOpen: l
            });
        }
    });
}
function el(e) {
    var t;
    let { voiceChannel: n, locked: r } = e,
        a = (0, o.e7)([G.Z], () => G.Z.isVideoEnabled()),
        s = (0, o.e7)([G.Z], () => Object.values(G.Z.getVideoDevices())[0]),
        d = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        c = !1 === d,
        u = (0, A.Z)(n),
        g = (e) => {
            p.Z.setVideoEnabled(e);
        },
        f = () => {
            c ? g(!0) : (0, z.Z)();
        },
        m = d ? () => f() : () => g(!a),
        {
            Component: v,
            play: x,
            events: { onMouseEnter: E, onMouseLeave: C }
        } = (0, h.o)(a ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, M.X)({
                      enabled: a,
                      cameraUnavailable: d,
                      hasPermission: u,
                      channel: n
                  })
                : void 0;
    l.useEffect(() => () => x(), [a, x]);
    let S = ee(r),
        b = null == n || !u;
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.Z, { onClose: S(t) });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(et, {
                iconComponent: v,
                tooltip: I,
                onClick: m,
                isToggled: a,
                highlightedColor: a ? 'green' : 'white',
                defaultColor: a ? 'green' : 'primaryDark',
                onPopoutClick: n,
                popoutOpen: l,
                onContextMenu: n,
                onMouseEnter: E,
                onMouseLeave: C,
                disabled: b
            });
        }
    });
}
function er(e) {
    let t,
        { voiceChannel: n, locked: r } = e,
        a = (0, o.e7)([Y.default], () => Y.default.getCurrentUser()),
        s = (0, A.Z)(n),
        d = (0, o.cj)([G.Z], () => (0, N.Z)(G.Z)),
        u = (0, o.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
        h = (0, m.bp)(),
        p = (0, X.B)(),
        g = null != u;
    if (g) t = q.intl.string(q.t.S5anIS);
    else if (null != n) {
        let e = (0, Q.pL)();
        t = s ? (null != e ? q.intl.format(q.t.AB5gT0, { game: e.name }) : q.intl.string(q.t.FeUKeH)) : q.intl.string(q.t.uQn9Bw);
    }
    let f = () => {
            if (g) return (0, w.Z)(u, !1);
            p();
        },
        {
            Component: v,
            events: { onMouseEnter: x, onMouseLeave: E },
            play: Z
        } = (0, c.P)(g ? 'disable' : 'enable');
    l.useEffect(() => () => Z(), [g, Z]);
    let C = ee(r);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(P.Z, {
                channel: n,
                currentUser: a,
                activeStreams: g ? [u] : [],
                handleGoLive: p,
                onClose: C(t),
                appContext: h,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: l } = e,
                { isShown: r } = n;
            return (0, i.jsx)(et, {
                iconComponent: v,
                tooltip: t,
                'aria-label': q.intl.string(q.t.FeUKeH),
                isToggled: g,
                onClick: f,
                popoutOpen: r,
                popoutDisabled: !g,
                onPopoutClick: l,
                onContextMenu: l,
                onMouseEnter: x,
                onMouseLeave: E,
                highlightedColor: g ? 'green' : 'white',
                defaultColor: g ? 'green' : 'primaryDark',
                disabled: !d || !s
            });
        }
    });
}
function eo(e) {
    var t;
    let { voiceChannel: l, locked: r } = e,
        a = null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: d } = (0, L.Z)(l),
        c = (0, o.e7)([G.Z], () => G.Z.isDeaf()),
        h = null == l || s || d || c;
    function p(e) {
        null != a &&
            (0, g.jW)(e, async () => {
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
            events: { onClick: m, onMouseEnter: v, onMouseLeave: x }
        } = (0, u.j)(),
        E = ee(r),
        Z = (0, o.e7)([j.Z, F.default], () => j.Z.isUserPlayingSounds(F.default.getId()), []);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == l
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(k.Z, {
                      guildId: a,
                      channel: l,
                      onClose: E(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(et, {
                iconComponent: f,
                tooltip: s ? q.intl.string(q.t['Ox4/zc']) : d ? q.intl.string(q.t['+YBKYG']) : c ? q.intl.string(q.t.X1lQlp) : void 0,
                onClick: (e) => {
                    m(), n(e);
                },
                highlightedColor: Z ? 'green' : 'white',
                defaultColor: Z ? 'green' : 'primaryDark',
                onContextMenu: p,
                onMouseEnter: v,
                onMouseLeave: x,
                isToggled: l,
                popoutOpen: l,
                disabled: h
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t, locked: n } = e,
        l = (0, o.e7)([B.Z], () => B.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        r = () => {
            l && f.default.disconnect();
        },
        s = (e) => {
            f.default.selectVoiceChannel(e.id);
        },
        {
            Component: d,
            events: { onMouseEnter: c, onMouseLeave: u }
        } = (0, a.K)(),
        h = ee(n),
        p = l ? d : _.Csw;
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(D.Z, {
                currentVoiceChannel: t,
                onClose: h(n),
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
                iconComponent: p,
                tooltip: null != t ? q.intl.string(q.t['6vrfgo']) : q.intl.string(q.t.S0W8Z2),
                onClick: l ? r : o,
                defaultColor: l ? 'red' : 'primaryDark',
                onMouseEnter: c,
                onMouseLeave: u,
                onContextMenu: o,
                isToggled: a,
                onPopoutClick: l ? o : void 0,
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
                            (0, i.jsx)(T.Z, {
                                guild: n,
                                size: T.Z.Sizes.SMOL,
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
        n = (0, b.KS)(t),
        l = (0, S.ZP)(t);
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
            null != l &&
                (0, i.jsx)(_.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: $.channelName,
                    children: l
                })
        ]
    });
}
function ec(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        l = (0, o.cj)([H.Z], () => ({
            channelId: H.Z.getChannelId(),
            quality: H.Z.getQuality(),
            state: H.Z.getState(),
            lastPing: H.Z.getLastPing()
        })),
        r = null != n,
        a = (0, o.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
    return (
        r &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O.Z, {
                    ...l,
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
