n.d(t, {
    L: () => ed,
    N3: () => ei,
    Ox: () => et,
    SE: () => en,
    aG: () => er,
    c_: () => el,
    sm: () => eo
});
var i = n(200651),
    o = n(192379),
    r = n(691324),
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
    m = n(571250),
    v = n(628581),
    x = n(659580),
    E = n(793865),
    C = n(55311),
    Z = n(575175),
    I = n(933557),
    S = n(471445),
    b = n(44315),
    y = n(74299),
    O = n(803647),
    w = n(565138),
    N = n(917405),
    T = n(763296),
    j = n(603074),
    k = n(879815),
    R = n(189771),
    A = n(294629),
    L = n(67844),
    P = n(544384),
    D = n(892807),
    M = n(560688),
    z = n(871499),
    V = n(199902),
    W = n(314897),
    F = n(430824),
    U = n(131951),
    H = n(19780),
    B = n(944486),
    G = n(594174),
    Y = n(979651),
    K = n(388627),
    X = n(810632),
    Q = n(981631),
    J = n(388032),
    q = n(864228);
function $(e) {
    let t = o.useRef(null);
    return (
        o.useEffect(() => {
            if (e) {
                var n;
                null === (n = t.current) || void 0 === n || n.call(t), (t.current = null);
            }
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function ee(e) {
    let { isToggled: t, disabled: n, iconComponent: o, iconColor: r, tooltip: l, defaultColor: a = 'primaryDark', highlightedColor: s = 'white', popoutOpen: d, onClick: c, popoutDisabled: u, onPopoutClick: h, onMouseEnter: _, onMouseLeave: p, onContextMenu: f, fullRegionButton: g, ...m } = e;
    return (0, i.jsx)(z.d, {
        onClick: null != c ? c : () => {},
        color: t ? s : a,
        className: q.button,
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
        iconComponent: o,
        iconColor: r,
        isActive: t,
        onContextMenu: f,
        onPopoutClick: h,
        'aria-label': m['aria-label']
    });
}
function et(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: l, selfMute: a, mute: s } = (0, A.Z)(t),
        c = a || s || l,
        u = (0, v.Z)(a, s, l, !1),
        { Component: h, play: p, events: f } = (0, d.O)(c ? 'unmute' : 'mute');
    o.useEffect(() => () => p(), [p, c]);
    let g = $(n);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(x.default, {
                onClose: g(t),
                renderInputDevices: !0,
                renderInputModes: !0,
                appContext: Q.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(ee, {
                iconComponent: h,
                tooltip: u,
                onClick: () => (0, Z.Z)(s, l, Q.jXE.OVERLAY),
                onPopoutClick: n,
                popoutOpen: o,
                onContextMenu: n,
                iconColor: c ? (0, b.Lq)(r.I.RED_400) : void 0,
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
function en(e) {
    let { voiceChannel: t, locked: n } = e,
        { selfDeaf: r, deaf: l } = (0, k.Z)(t),
        a = r || l,
        {
            Component: d,
            play: c,
            events: { onMouseEnter: u, onMouseLeave: h }
        } = (0, s.l)(a ? 'undeafen' : 'deafen'),
        p = l ? _.Vm4 : d;
    o.useEffect(() => () => c(), [a, c]);
    let f = () => {
            (0, C.Z)(l, Q.jXE.OVERLAY);
        },
        g = $(n);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(x.default, {
                onClose: g(t),
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                appContext: Q.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(ee, {
                iconComponent: p,
                tooltip: (0, m.Z)(r, l, !1),
                isToggled: a,
                onClick: f,
                onContextMenu: n,
                onMouseEnter: u,
                onMouseLeave: h,
                onPopoutClick: n,
                popoutOpen: o
            });
        }
    });
}
function ei(e) {
    var t;
    let { voiceChannel: n, locked: r } = e,
        a = (0, l.e7)([U.Z], () => U.Z.isVideoEnabled()),
        s = (0, l.e7)([U.Z], () => Object.values(U.Z.getVideoDevices())[0]),
        d = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        c = !1 === d,
        u = (0, R.Z)(n),
        f = (e) => {
            p.Z.setVideoEnabled(e);
        },
        g = () => {
            c ? f(!0) : (0, M.Z)();
        },
        m = d ? () => g() : () => f(!a),
        {
            Component: v,
            play: x,
            events: { onMouseEnter: C, onMouseLeave: Z }
        } = (0, h.o)(a ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, L.X)({
                      enabled: a,
                      cameraUnavailable: d,
                      hasPermission: u,
                      channel: n
                  })
                : void 0;
    o.useEffect(() => () => x(), [a, x]);
    let S = $(r),
        b = null == n || !u;
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.Z, {
                onClose: S(t),
                appContext: Q.IlC.OVERLAY
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(ee, {
                iconComponent: v,
                tooltip: I,
                onClick: m,
                isToggled: a,
                highlightedColor: a ? 'green' : 'white',
                defaultColor: a ? 'green' : 'primaryDark',
                onPopoutClick: n,
                popoutOpen: o,
                onContextMenu: n,
                onMouseEnter: C,
                onMouseLeave: Z,
                disabled: b
            });
        }
    });
}
function eo(e) {
    let t,
        { voiceChannel: n, locked: r } = e,
        a = (0, l.e7)([G.default], () => G.default.getCurrentUser()),
        s = (0, R.Z)(n),
        d = (0, l.cj)([U.Z], () => (0, y.Z)(U.Z)),
        u = (0, l.e7)([V.Z], () => V.Z.getCurrentUserActiveStream()),
        h = (0, X.B)(),
        p = null != u;
    if (p) t = J.intl.string(J.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = s ? (null != e ? J.intl.format(J.t.AB5gT0, { game: e.name }) : J.intl.string(J.t.FeUKeH)) : J.intl.string(J.t.uQn9Bw);
    }
    let f = () => {
            if (p) return (0, O.Z)(u, !1);
            h();
        },
        {
            Component: g,
            events: { onMouseEnter: m, onMouseLeave: v },
            play: x
        } = (0, c.P)(p ? 'disable' : 'enable');
    o.useEffect(() => () => x(), [p, x]);
    let E = $(r);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(P.Z, {
                channel: n,
                currentUser: a,
                activeStreams: p ? [u] : [],
                handleGoLive: h,
                onClose: E(t),
                appContext: Q.IlC.OVERLAY,
                disableChangeWindows: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: o } = e,
                { isShown: r } = n;
            return (0, i.jsx)(ee, {
                iconComponent: g,
                tooltip: t,
                'aria-label': J.intl.string(J.t.FeUKeH),
                isToggled: p,
                onClick: f,
                popoutOpen: r,
                popoutDisabled: !p,
                onPopoutClick: o,
                onContextMenu: o,
                onMouseEnter: m,
                onMouseLeave: v,
                highlightedColor: p ? 'green' : 'white',
                defaultColor: p ? 'green' : 'primaryDark',
                disabled: !d || !s
            });
        }
    });
}
function er(e) {
    var t;
    let { voiceChannel: o, locked: r } = e,
        a = null !== (t = null == o ? void 0 : o.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: d } = (0, A.Z)(o),
        c = (0, l.e7)([U.Z], () => U.Z.isDeaf()),
        h = null == o || s || d || c;
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
        E = $(r),
        C = (0, l.e7)([T.Z, W.default], () => T.Z.isUserPlayingSounds(W.default.getId()), []);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == o
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(j.Z, {
                      guildId: a,
                      channel: o,
                      onClose: E(t),
                      analyticsSource: 'action bar button'
                  });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, i.jsx)(ee, {
                iconComponent: g,
                tooltip: s ? J.intl.string(J.t['Ox4/zc']) : d ? J.intl.string(J.t['+YBKYG']) : c ? J.intl.string(J.t.X1lQlp) : void 0,
                onClick: (e) => {
                    m(), n(e);
                },
                highlightedColor: C ? 'green' : 'white',
                defaultColor: C ? 'green' : 'primaryDark',
                onContextMenu: p,
                onMouseEnter: v,
                onMouseLeave: x,
                isToggled: o,
                popoutOpen: o,
                disabled: h
            });
        }
    });
}
function el(e) {
    let { voiceChannel: t, locked: n } = e,
        o = (0, l.e7)([B.Z], () => B.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        r = () => {
            o && g.default.disconnect();
        },
        s = (e) => {
            g.default.selectVoiceChannel(e.id);
        },
        {
            Component: d,
            events: { onMouseEnter: c, onMouseLeave: u }
        } = (0, a.K)(),
        h = $(n),
        p = o ? d : _.Csw;
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
            let { onClick: l } = e,
                { isShown: a } = n;
            return (0, i.jsx)(ee, {
                iconComponent: p,
                tooltip: null != t ? J.intl.string(J.t['6vrfgo']) : J.intl.string(J.t.S0W8Z2),
                onClick: o ? r : l,
                defaultColor: o ? 'red' : 'primaryDark',
                onMouseEnter: c,
                onMouseLeave: u,
                onContextMenu: l,
                isToggled: a,
                onPopoutClick: o ? l : void 0,
                popoutOpen: a
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t } = e,
        n = (0, l.e7)([F.Z], () => F.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: q.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: q.guildIconContainer,
                        children: [
                            (0, i.jsx)(w.Z, {
                                guild: n,
                                size: w.Z.Sizes.SMOL,
                                className: q.guildIcon
                            }),
                            (0, i.jsx)(_.Text, {
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'text-primary',
                                className: q.guildName,
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
function es(e) {
    let { voiceChannel: t } = e,
        n = (0, S.KS)(t),
        o = (0, I.ZP)(t);
    return (0, i.jsxs)('div', {
        className: q.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(_.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: q.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'sm',
                        color: 'currentColor'
                    })
                }),
            null != o &&
                (0, i.jsx)(_.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: q.channelName,
                    children: o
                })
        ]
    });
}
function ed(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        o = (0, l.cj)([H.Z], () => ({
            channelId: H.Z.getChannelId(),
            quality: H.Z.getQuality(),
            state: H.Z.getState(),
            lastPing: H.Z.getLastPing()
        })),
        r = null != n,
        a = (0, l.e7)([Y.Z], () => null != n && Y.Z.hasVideo(n), [n]);
    return (
        r &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N.Z, {
                    ...o,
                    hasVideo: a,
                    connectionStatusTextVariant: 'text-xs/semibold'
                }),
                (0, i.jsx)(ea, { voiceChannel: t }),
                (0, i.jsx)('div', { className: q.separatorDot }),
                (0, i.jsx)(es, { voiceChannel: t })
            ]
        })
    );
}
