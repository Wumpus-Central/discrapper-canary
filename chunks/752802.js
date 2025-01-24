n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(399606),
    s = n(46973),
    c = n(481060),
    d = n(846027),
    u = n(239091),
    h = n(765250),
    m = n(872810),
    p = n(40851),
    x = n(414910),
    f = n(194082),
    v = n(979264),
    g = n(871118),
    C = n(352978),
    Z = n(833519),
    b = n(839662),
    _ = n(199902),
    j = n(314897),
    I = n(131951),
    E = n(594174),
    k = n(5192),
    N = n(1226),
    w = n(981631),
    y = n(388032),
    T = n(2847);
function S(e) {
    let { participant: t } = e,
        n = t.user.id,
        o = (0, a.e7)(
            [I.Z],
            () => {
                let e = (0, x.Z)(t.type);
                return I.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        l = (0, a.e7)([j.default], () => j.default.getId()),
        { hasVideo: u } = (0, b.Z)(t, l),
        h = o && u,
        m = r.useCallback(() => {
            d.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(c.Tooltip, {
        text: h ? y.intl.string(y.t.YqAjX1) : y.intl.string(y.t['w4m94+']),
        children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(c.Clickable, {
                ...n,
                className: T.controlAction,
                onClick: (e) => {
                    e.stopPropagation(), null == t || t(), m();
                },
                children: h
                    ? (0, i.jsx)(c.VoiceXIcon, {
                          size: 'sm',
                          color: 'currentColor'
                      })
                    : (0, i.jsx)(c.VoiceNormalIcon, {
                          size: 'sm',
                          color: 'currentColor'
                      })
            });
        }
    });
}
function L(e, t, r) {
    return (o) => {
        o.stopPropagation(),
            null == r || r(),
            (0, u.jW)(o, async () => {
                let { default: r } = await n.e('5704').then(n.bind(n, 360429));
                return (n) =>
                    (0, i.jsx)(r, {
                        ...n,
                        stream: e.stream,
                        exitFullscreen: () => {},
                        appContext: t
                    });
            });
    };
}
function A(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        o = (0, p.bp)(),
        s = n.user,
        d = (0, a.e7)(
            [E.default],
            () => {
                var e;
                return null !== (e = E.default.getUser(s.id)) && void 0 !== e ? e : s;
            },
            [s]
        ),
        u = t ? y.intl.string(y.t.tLxK4u) : y.intl.string(y.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: l()(T.controlBackground, { [T.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: T.watchActionContainer,
                    children: (0, i.jsx)(c.Tooltip, {
                        text: u,
                        children: (e) =>
                            (0, i.jsxs)(c.Clickable, {
                                ...e,
                                className: T.watchButton,
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e),
                                        (0, m.rn)(n.stream, {
                                            forceMultiple: !0,
                                            noFocus: !0
                                        }),
                                        r();
                                },
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'always-white',
                                        children: y.intl.string(y.t['I6JG4+'])
                                    }),
                                    (0, i.jsx)(c.EyePlusIcon, {
                                        size: 'sm',
                                        color: 'currentColor'
                                    })
                                ]
                            })
                    })
                }),
            (0, i.jsxs)('div', {
                className: T.controls,
                children: [
                    (0, i.jsx)('div', {
                        className: T.controlUser,
                        children: (0, i.jsxs)('div', {
                            className: T.controlUserContainer,
                            children: [
                                (0, i.jsx)(c.ScreenIcon, {
                                    size: 'xs',
                                    color: c.tokens.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: k.ZP.getName(n.stream.guildId, n.stream.channelId, s)
                                }),
                                (0, i.jsx)(v.ZP, {
                                    primaryGuild: d.primaryGuild,
                                    userId: s.id
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: T.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(S, { participant: n }),
                                    (0, i.jsx)(c.Tooltip, {
                                        text: y.intl.string(y.t['3D5yo6']),
                                        children: (e) => {
                                            let { onClick: t, ...r } = e;
                                            return (0, i.jsx)(c.Clickable, {
                                                ...r,
                                                className: T.controlAction,
                                                onClick: L(n, o, t),
                                                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                                    size: 'sm',
                                                    color: 'currentColor'
                                                })
                                            });
                                        }
                                    })
                                ]
                            })
                    })
                ]
            })
        ]
    });
}
let O = new Set([w.jm8.ENDED, w.jm8.FAILED, w.jm8.PAUSED]),
    P = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: s } = e,
            d = (0, a.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            u = (0, p.bp)(),
            m = null != d && O.has(d.state),
            x = null != d,
            v = (0, N.yA)(t.stream),
            b = (0, N.xN)(t.stream);
        return (!x && r) || m
            ? null
            : (0, i.jsxs)('div', {
                  className: T.tile,
                  children: [
                      x &&
                          !r &&
                          (0, i.jsx)(f.ZP, {
                              size: f.ZP.Sizes.SMALL,
                              className: T.liveIndicator
                          }),
                      x
                          ? (0, i.jsx)('div', {
                                className: T.streamTile,
                                children: (0, i.jsx)(c.ClickableContainer, {
                                    'aria-label': y.intl.formatToPlainString(y.t.gHPz3d, { streamerName: t.user.username }),
                                    onClick: () => {},
                                    onContextMenu: L(t, u),
                                    className: T.streamTile,
                                    style: { transform: 'scale('.concat(v, ')') },
                                    children: (0, i.jsx)(Z.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != b ? b : C.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !r,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: r ? T.streamTileWrapper : void 0,
                                        inOverlayPopout: !0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: T.streamPreview,
                                children: (0, i.jsx)(g.Z, {
                                    noText: !0,
                                    className: l()(T.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      r
                          ? null
                          : (0, i.jsx)(A, {
                                participant: t,
                                hasActiveStream: x,
                                onEnablePin: () => {
                                    !s && (0, h.xh)(o);
                                }
                            })
                  ]
              });
    });
