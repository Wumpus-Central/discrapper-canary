n.d(t, {
    L: function () {
        return ec;
    },
    N3: function () {
        return ei;
    },
    Ox: function () {
        return et;
    },
    SE: function () {
        return en;
    },
    aG: function () {
        return el;
    },
    c_: function () {
        return eo;
    },
    sm: function () {
        return er;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(685072),
    c = n(400354),
    u = n(652844),
    d = n(864094),
    h = n(582019),
    f = n(75735),
    m = n(481060),
    v = n(846027),
    p = n(239091),
    x = n(287734),
    g = n(40851),
    C = n(100527),
    Z = n(906732),
    I = n(571250),
    _ = n(628581),
    j = n(659580),
    E = n(793865),
    b = n(55311),
    w = n(575175),
    N = n(933557),
    k = n(471445),
    L = n(74299),
    S = n(803647),
    y = n(565138),
    T = n(917405),
    A = n(603074),
    O = n(879815),
    V = n(189771),
    M = n(294629),
    P = n(67844),
    z = n(544384),
    R = n(892807),
    D = n(560688),
    W = n(199902),
    U = n(430824),
    F = n(131951),
    G = n(19780),
    B = n(944486),
    Y = n(594174),
    H = n(979651),
    K = n(388627),
    X = n(810632),
    Q = n(981631),
    q = n(388032),
    J = n(725775);
function $(e) {
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
function ee(e) {
    let { isToggled: t, disabled: n, cutoutIcon: r, icon: l, tooltip: a, defaultColor: s = m.Button.Colors.TRANSPARENT, highlightedColor: c = m.Button.Colors.WHITE, onClick: u, onCutoutClick: d, onMouseEnter: h, onMouseLeave: f, onContextMenu: v } = e;
    return (0, i.jsx)(m.Tooltip, {
        text: a,
        'aria-label': !1,
        children: (e) => {
            let { onMouseEnter: a, onMouseLeave: p, ...x } = e;
            return (0, i.jsxs)(m.Button, {
                ...x,
                onClick: u,
                size: m.Button.Sizes.SMALL,
                color: t ? c : s,
                className: J.button,
                disabled: n,
                onMouseEnter: (e) => {
                    null == a || a(), null == h || h(e);
                },
                onMouseLeave: (e) => {
                    null == p || p(), null == f || f(e);
                },
                onContextMenu: v,
                children: [
                    l,
                    null != r &&
                        (0, i.jsx)(m.Clickable, {
                            onClick: (e) => {
                                e.stopPropagation(), e.preventDefault(), null == d || d(e);
                            },
                            className: o()(J.cutoutContainer, t && J.toggledCutoutContainer),
                            children: r
                        })
                ]
            });
        }
    });
}
function et(e) {
    let { voiceChannel: t, locked: n } = e,
        { suppress: l, selfMute: o, mute: a } = (0, M.Z)(t),
        s = o || a || l,
        c = (0, _.Z)(o, a, l, !1),
        { Component: d, play: h, events: f } = (0, u.O)(s ? 'unmute' : 'mute');
    r.useEffect(() => () => h(), [h, s]);
    let v = $(n);
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(j.default, {
                onClose: v(t),
                renderInputDevices: !0,
                renderOutputDevices: !0,
                renderInputModes: !0
            });
        },
        align: 'center',
        position: 'top',
        animation: m.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ee, {
                icon: (0, i.jsx)(d, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: c,
                isToggled: !s,
                onClick: () => (0, w.Z)(a, l, Q.jXE.OVERLAY),
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: () => {
                    f.onMouseEnter();
                },
                onMouseLeave: () => {
                    f.onMouseLeave();
                },
                cutoutIcon: r
                    ? (0, i.jsx)(m.ChevronSmallUpIcon, {
                          color: 'currentColor',
                          size: 'sm'
                      })
                    : (0, i.jsx)(m.ChevronSmallDownIcon, {
                          color: 'currentColor',
                          size: 'sm'
                      })
            });
        }
    });
}
function en(e) {
    let { voiceChannel: t } = e,
        { selfDeaf: l, deaf: o } = (0, O.Z)(t),
        a = l || o,
        {
            Component: s,
            play: u,
            events: { onMouseEnter: d, onMouseLeave: h }
        } = (0, c.l)(a ? 'undeafen' : 'deafen'),
        f = o ? m.HeadphonesDenyIcon : s,
        { analyticsLocations: v } = (0, Z.ZP)(C.Z.OVERLAY);
    return (
        r.useEffect(() => () => u(), [a, u]),
        (0, i.jsx)(ee, {
            icon: (0, i.jsx)(f, {
                color: 'currentColor',
                size: 'sm'
            }),
            tooltip: (0, I.Z)(l, o, !1),
            isToggled: a,
            onClick: () => {
                (0, b.Z)(o, Q.jXE.OVERLAY);
            },
            onCutoutClick: (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(Z.Gt, {
                            value: v,
                            children: (0, i.jsx)(e, {
                                onClose: p.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0
                            })
                        });
                });
            },
            onMouseEnter: d,
            onMouseLeave: h
        })
    );
}
function ei(e) {
    var t;
    let { voiceChannel: n, locked: l } = e,
        o = (0, a.e7)([F.Z], () => F.Z.isVideoEnabled()),
        s = (0, a.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]),
        c = null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
        u = !1 === c,
        d = (0, V.Z)(n),
        h = (e) => {
            v.Z.setVideoEnabled(e);
        },
        p = () => {
            u ? h(!0) : (0, D.Z)();
        },
        x = c ? () => p() : () => h(!o),
        {
            Component: g,
            play: C,
            events: { onMouseEnter: Z, onMouseLeave: I }
        } = (0, f.o)(o ? 'disable' : 'enable'),
        _ =
            null != n
                ? (0, P.X)({
                      enabled: o,
                      cameraUnavailable: c,
                      hasPermission: d,
                      channel: n
                  })
                : void 0;
    r.useEffect(() => () => C(), [o, C]);
    let j = $(l),
        b = null == n || !d;
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.Z, { onClose: j(t) });
        },
        align: 'center',
        position: 'top',
        animation: m.Popout.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: r } = t;
            return (0, i.jsx)(ee, {
                icon: (0, i.jsx)(g, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: _,
                onClick: x,
                isToggled: o,
                onCutoutClick: n,
                onContextMenu: n,
                onMouseEnter: Z,
                onMouseLeave: I,
                cutoutIcon: b
                    ? null
                    : r
                      ? (0, i.jsx)(m.ChevronSmallUpIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        })
                      : (0, i.jsx)(m.ChevronSmallDownIcon, {
                            color: 'currentColor',
                            size: 'sm'
                        }),
                disabled: b
            });
        }
    });
}
function er(e) {
    let t,
        { voiceChannel: n, locked: l } = e,
        o = (0, a.e7)([Y.default], () => Y.default.getCurrentUser()),
        s = (0, V.Z)(n),
        c = (0, a.cj)([F.Z], () => (0, L.Z)(F.Z)),
        u = (0, a.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
        h = (0, g.bp)(),
        f = (0, X.B)(),
        v = null != u;
    if (v) t = q.intl.string(q.t.S5anIS);
    else if (null != n) {
        let e = (0, K.pL)();
        t = s ? (null != e ? q.intl.format(q.t.AB5gT0, { game: e.name }) : q.intl.string(q.t.FeUKeH)) : q.intl.string(q.t.uQn9Bw);
    }
    let p = () => {
            if (v) return (0, S.Z)(u, !1);
            f();
        },
        {
            Component: x,
            events: { onMouseEnter: C, onMouseLeave: Z },
            play: I
        } = (0, d.P)(v ? 'disable' : 'enable');
    r.useEffect(() => () => I(), [v, I]);
    let _ = $(l);
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != n
                ? (0, i.jsx)(z.Z, {
                      channel: n,
                      currentUser: o,
                      activeStreams: null != u ? [u] : [],
                      handleGoLive: f,
                      onClose: _(t),
                      appContext: h,
                      disableChangeWindows: !0
                  })
                : (0, i.jsx)(i.Fragment, {});
        },
        align: 'center',
        position: 'top',
        animation: m.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: l } = n;
            return (0, i.jsx)(ee, {
                icon: (0, i.jsx)(x, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: t,
                isToggled: v,
                cutoutIcon:
                    null != u
                        ? l
                            ? (0, i.jsx)(m.ChevronSmallUpIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(m.ChevronSmallDownIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : null,
                onClick: p,
                onCutoutClick: r,
                onContextMenu: r,
                onMouseEnter: C,
                onMouseLeave: Z,
                disabled: !c || !s
            });
        }
    });
}
function el(e) {
    var t;
    let { voiceChannel: r, locked: l } = e,
        o = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : null,
        { mute: s, suppress: c } = (0, M.Z)(r),
        u = (0, a.e7)([F.Z], () => F.Z.isDeaf()),
        d = null == r || s || c || u;
    function f(e) {
        null != o &&
            (0, p.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: o,
                        ...t
                    });
            });
    }
    let {
            Component: v,
            events: { onClick: x, onMouseEnter: g, onMouseLeave: C }
        } = (0, h.j)(),
        Z = $(l);
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return d || null == r
                ? (0, i.jsx)(i.Fragment, {})
                : (0, i.jsx)(A.Z, {
                      guildId: o,
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
            return (0, i.jsx)(ee, {
                icon: (0, i.jsx)(v, {
                    color: 'currentColor',
                    size: 'sm'
                }),
                tooltip: (function () {
                    if (s) return q.intl.string(q.t['Ox4/zc']);
                    if (c) return q.intl.string(q.t['+YBKYG']);
                    if (u) return q.intl.string(q.t.X1lQlp);
                })(),
                onClick: (e) => {
                    x(), n(e);
                },
                onContextMenu: f,
                onMouseEnter: g,
                onMouseLeave: C,
                isToggled: r,
                disabled: d
            });
        }
    });
}
function eo(e) {
    let { voiceChannel: t, locked: n } = e,
        r = (0, a.e7)([B.Z], () => B.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)),
        l = () => {
            r && x.default.disconnect();
        },
        o = (e) => {
            x.default.selectVoiceChannel(e.id);
        },
        {
            Component: c,
            events: { onMouseEnter: u, onMouseLeave: d }
        } = (0, s.K)(),
        h = $(n),
        f = r
            ? (0, i.jsx)(c, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(m.PhoneCallIcon, {
                  color: 'currentColor',
                  size: 'sm'
              }),
        v = (e) =>
            e
                ? (0, i.jsx)(m.ChevronSmallUpIcon, {
                      color: 'currentColor',
                      size: 'sm'
                  })
                : (0, i.jsx)(m.ChevronSmallDownIcon, {
                      color: 'currentColor',
                      size: 'sm'
                  });
    return (0, i.jsx)(m.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(R.Z, {
                currentVoiceChannel: t,
                onClose: h(n),
                onSelect: o
            });
        },
        align: 'center',
        position: 'top',
        animation: m.Popout.Animation.FADE,
        children: (e, n) => {
            let { onClick: o } = e,
                { isShown: a } = n;
            return (0, i.jsx)(ee, {
                icon: f,
                tooltip: null != t ? q.intl.string(q.t['6vrfgo']) : q.intl.string(q.t.S0W8Z2),
                onClick: r ? l : o,
                defaultColor: r ? m.Button.Colors.RED : m.Button.Colors.TRANSPARENT,
                onMouseEnter: u,
                onMouseLeave: d,
                onContextMenu: o,
                isToggled: a,
                cutoutIcon: r ? v(a) : null,
                onCutoutClick: r ? o : void 0
            });
        }
    });
}
function ea(e) {
    let { voiceChannel: t } = e,
        n = (0, a.e7)([U.Z], () => U.Z.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: J.separatorDot }),
                    (0, i.jsxs)('div', {
                        className: J.guildIconContainer,
                        children: [
                            (0, i.jsx)(y.Z, {
                                guild: n,
                                size: y.Z.Sizes.SMOL,
                                className: J.guildIcon
                            }),
                            (0, i.jsx)(m.Text, {
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'text-primary',
                                className: J.guildName,
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
        n = (0, k.KS)(t),
        r = (0, N.ZP)(t);
    return (0, i.jsxs)('div', {
        className: J.voiceChannelNameContainer,
        children: [
            null != n &&
                (0, i.jsx)(m.Text, {
                    tag: 'div',
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    className: J.channelIcon,
                    children: (0, i.jsx)(n, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                }),
            null != r &&
                (0, i.jsx)(m.Text, {
                    variant: 'text-xs/semibold',
                    color: 'text-muted',
                    className: J.channelName,
                    children: r
                })
        ]
    });
}
function ec(e) {
    let { voiceChannel: t } = e,
        n = null == t ? void 0 : t.id,
        r = (0, a.cj)([G.Z], () => ({
            channelId: G.Z.getChannelId(),
            quality: G.Z.getQuality(),
            state: G.Z.getState(),
            lastPing: G.Z.getLastPing()
        })),
        l = null != n,
        o = (0, a.e7)([H.Z], () => null != n && H.Z.hasVideo(n), [n]);
    return (
        l &&
        null != t &&
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.Z, {
                    ...r,
                    hasVideo: o
                }),
                (0, i.jsx)(ea, { voiceChannel: t }),
                (0, i.jsx)('div', { className: J.separatorDot }),
                (0, i.jsx)(es, { voiceChannel: t })
            ]
        })
    );
}
