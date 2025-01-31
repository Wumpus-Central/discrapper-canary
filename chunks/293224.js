n.d(t, {
    L: () => ed,
    N3: () => er,
    Ox: () => en,
    SE: () => ei,
    aG: () => ea,
    c_: () => el,
    sm: () => eo
});
var i = n(200651),
    r = n(192379),
    o = n(691324),
    a = n(442837),
    l = n(685072),
    s = n(400354),
    c = n(652844),
    d = n(864094),
    u = n(582019),
    h = n(75735),
    _ = n(481060),
    m = n(846027),
    g = n(239091),
    p = n(287734),
    f = n(40851),
    x = n(571250),
    v = n(628581),
    C = n(659580),
    b = n(793865),
    Z = n(55311),
    I = n(575175),
    j = n(933557),
    w = n(471445),
    y = n(44315),
    E = n(74299),
    k = n(803647),
    N = n(565138),
    S = n(917405),
    T = n(763296),
    O = n(603074),
    P = n(879815),
    L = n(189771),
    A = n(294629),
    R = n(67844),
    V = n(544384),
    W = n(892807),
    M = n(560688),
    D = n(871499),
    z = n(199902),
    F = n(314897),
    G = n(430824),
    B = n(131951),
    U = n(19780),
    H = n(944486),
    Y = n(594174),
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
    let { isToggled: t, disabled: n, iconComponent: r, iconColor: o, tooltip: a, defaultColor: l = 'primaryDark', highlightedColor: s = 'white', popoutOpen: c, onClick: d, popoutDisabled: u, onPopoutClick: h, onMouseEnter: _, onMouseLeave: m, onContextMenu: g, fullRegionButton: p, ...f } = e;
    return (0, i.jsx)(D.d, {
        onClick: null != d ? d : () => {},
        color: t ? s : l,
        className: $.button,
        disabled: n,
        popoutOpen: c,
        popoutDisabled: u,
        label: a,
        fullRegionButton: p,
        onMouseEnter: (e) => {
            null == _ || _(e);
        },
        onMouseLeave: (e) => {
            null == m || m(e);
        },
        ignoreColorForCaret: !c,
        iconComponent: r,
        iconColor: o,
        isActive: t,
        onContextMenu: g,
        onPopoutClick: h,
        'aria-label': f['aria-label']
    });
}
function en(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: a, selfMute: l, mute: s } = (0, A.Z)(t),
        d = l || s || a,
        u = (0, v.Z)(l, s, a, !1),
        { Component: h, play: m, events: g } = (0, c.O)(d ? 'unmute' : 'mute');
    r.useEffect(() => () => m(), [m, d]);
    let p = ee(n);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(C.default, {
                onClose: p(t),
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
                onClick: () => (0, I.Z)(s, a, q.jXE.OVERLAY),
                onPopoutClick: n,
                popoutOpen: r,
                onContextMenu: n,
                iconColor: d ? (0, y.Lq)(o.I.RED_400) : void 0,
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
        { selfDeaf: o, deaf: a } = (0, P.Z)(t),
        l = o || a,
        {
            Component: c,
            play: d,
            events: { onMouseEnter: u, onMouseLeave: h }
        } = (0, s.l)(l ? 'undeafen' : 'deafen'),
        m = a ? _.Vm4 : c;
    r.useEffect(() => () => d(), [l, d]);
    let g = () => {
            (0, Z.Z)(a, q.jXE.OVERLAY);
        },
        p = ee(n);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(C.default, {
                onClose: p(t),
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
                iconComponent: m,
                tooltip: (0, x.Z)(o, a, !1),
                isToggled: l,
                onClick: g,
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
        l = (0, a.e7)([B.Z], () => B.Z.isVideoEnabled()),
        s = (0, a.e7)([B.Z], () => Object.values(B.Z.getVideoDevices())[0]),
        c = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        d = !1 === c,
        u = (0, L.Z)(n),
        g = (e) => {
            m.Z.setVideoEnabled(e);
        },
        p = () => {
            d ? g(!0) : (0, M.Z)();
        },
        f = c ? () => p() : () => g(!l),
        {
            Component: x,
            play: v,
            events: { onMouseEnter: C, onMouseLeave: Z }
        } = (0, h.o)(l ? 'disable' : 'enable'),
        I =
            null != n
                ? (0, R.X)({
                      enabled: l,
                      cameraUnavailable: c,
                      hasPermission: u,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => v(), [l, v]);
    let j = ee(o),
        w = null == n || !u;
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(b.Z, { onClose: j(t) });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(et, {
                iconComponent: x,
                tooltip: I,
                onClick: f,
                isToggled: l,
                highlightedColor: l ? 'green' : 'white',
                defaultColor: l ? 'green' : 'primaryDark',
                onPopoutClick: n,
                popoutOpen: r,
                onContextMenu: n,
                onMouseEnter: C,
                onMouseLeave: Z,
                disabled: w
            });
        }
    });
}
function eo(e) {
    let t,
        { voiceChannel: n, locked: o } = e,
        l = (0, a.e7)([Y.default], () => Y.default.getCurrentUser()),
        s = (0, L.Z)(n),
        c = (0, a.cj)([B.Z], () => (0, E.Z)(B.Z)),
        u = (0, a.e7)([z.Z], () => z.Z.getCurrentUserActiveStream()),
        h = (0, f.bp)(),
        m = (0, Q.B)(),
        g = null != u;
    if (g) t = J.intl.string(J.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = s ? (null != e ? J.intl.format(J.t.AB5gT0, { game: e.name }) : J.intl.string(J.t.FeUKeH)) : J.intl.string(J.t.uQn9Bw);
    }
    let p = () => {
            if (g) return (0, k.Z)(u, !1);
            m();
        },
        {
            Component: x,
            events: { onMouseEnter: v, onMouseLeave: C },
            play: b
        } = (0, d.P)(g ? 'disable' : 'enable');
    r.useEffect(() => () => b(), [g, b]);
    let Z = ee(o);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(V.Z, {
                channel: n,
                currentUser: l,
                activeStreams: g ? [u] : [],
                handleGoLive: m,
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
                iconComponent: x,
                tooltip: t,
                'aria-label': J.intl.string(J.t.FeUKeH),
                isToggled: g,
                onClick: p,
                popoutOpen: o,
                popoutDisabled: !g,
                onPopoutClick: r,
                onContextMenu: r,
                onMouseEnter: v,
                onMouseLeave: C,
                highlightedColor: g ? 'green' : 'white',
                defaultColor: g ? 'green' : 'primaryDark',
                disabled: !c || !s
            });
        }
    });
}
function ea(e) {
    var t;
    let { voiceChannel: r, locked: o } = e,
        l = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: c } = (0, A.Z)(r),
        d = (0, a.e7)([B.Z], () => B.Z.isDeaf()),
        h = null == r || s || c || d;
    function m(e) {
        null != l &&
            (0, g.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: l,
                        ...t
                    });
            });
    }
    let {
            Component: p,
            events: { onClick: f, onMouseEnter: x, onMouseLeave: v }
        } = (0, u.j)(),
        C = ee(o),
        b = (0, a.e7)([T.Z, F.default], () => T.Z.isUserPlayingSounds(F.default.getId()), []);
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == r
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(O.Z, {
                      guildId: l,
                      channel: r,
                      onClose: C(t),
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
                iconComponent: p,
                tooltip: s ? J.intl.string(J.t['Ox4/zc']) : c ? J.intl.string(J.t['+YBKYG']) : d ? J.intl.string(J.t.X1lQlp) : void 0,
                onClick: (e) => {
                    f(), n(e);
                },
                highlightedColor: b ? 'green' : 'white',
                defaultColor: b ? 'green' : 'primaryDark',
                onContextMenu: m,
                onMouseEnter: x,
                onMouseLeave: v,
                isToggled: r,
                popoutOpen: r,
                disabled: h
            });
        }
    });
}
function el(e) {
    let { voiceChannel: t, locked: n } = e,
        r = (0, a.e7)([H.Z], () => H.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        o = () => {
            r && p.default.disconnect();
        },
        s = (e) => {
            p.default.selectVoiceChannel(e.id);
        },
        {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: u }
        } = (0, l.K)(),
        h = ee(n),
        m = r ? c : _.Csw;
    return (0, i.jsx)(_.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(W.Z, {
                currentVoiceChannel: t,
                onClose: h(n),
                onSelect: s
            });
        },
        align: 'center',
        position: 'top',
        animation: _.yRy.Animation.FADE,
        children: (e, n) => {
            let { onClick: a } = e,
                { isShown: l } = n;
            return (0, i.jsx)(et, {
                iconComponent: m,
                tooltip: null != t ? J.intl.string(J.t['6vrfgo']) : J.intl.string(J.t.S0W8Z2),
                onClick: r ? o : a,
                defaultColor: r ? 'red' : 'primaryDark',
                onMouseEnter: d,
                onMouseLeave: u,
                onContextMenu: a,
                isToggled: l,
                onPopoutClick: r ? a : void 0,
                popoutOpen: l
            });
        }
    });
}
function es(e) {
    let { voiceChannel: t } = e,
        n = (0, a.e7)([G.Z], () => G.Z.getGuild(t.getGuildId()), [t]);
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
function ec(e) {
    let { voiceChannel: t } = e,
        n = (0, w.KS)(t),
        r = (0, j.ZP)(t);
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
function ed(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        r = (0, a.cj)([U.Z], () => ({
            channelId: U.Z.getChannelId(),
            quality: U.Z.getQuality(),
            state: U.Z.getState(),
            lastPing: U.Z.getLastPing()
        })),
        o = null != n,
        l = (0, a.e7)([X.Z], () => null != n && X.Z.hasVideo(n), [n]);
    return (
        o &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S.Z, {
                    ...r,
                    hasVideo: l,
                    connectionStatusTextVariant: 'text-xs/semibold'
                }),
                (0, i.jsx)(es, { voiceChannel: t }),
                (0, i.jsx)('div', { className: $.separatorDot }),
                (0, i.jsx)(ec, { voiceChannel: t })
            ]
        })
    );
}
