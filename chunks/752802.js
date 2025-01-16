n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    a = n(399606),
    s = n(46973),
    c = n(481060),
    u = n(846027),
    d = n(239091),
    h = n(765250),
    f = n(872810),
    p = n(40851),
    m = n(414910),
    v = n(194082),
    x = n(979264),
    g = n(871118),
    C = n(352978),
    Z = n(833519),
    _ = n(839662),
    I = n(199902),
    j = n(314897),
    E = n(131951),
    b = n(594174),
    w = n(5192),
    k = n(1226),
    N = n(981631),
    y = n(388032),
    L = n(2847);
function S(e) {
    let { participant: t } = e,
        n = t.user.id,
        o = (0, a.e7)(
            [E.Z],
            () => {
                let e = (0, m.Z)(t.type);
                return E.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        r = (0, a.e7)([j.default], () => j.default.getId()),
        { hasVideo: d } = (0, _.Z)(t, r),
        h = o && d,
        f = l.useCallback(() => {
            u.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(c.Tooltip, {
        text: h ? y.intl.string(y.t.YqAjX1) : y.intl.string(y.t['w4m94+']),
        children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(c.Clickable, {
                ...n,
                className: L.controlAction,
                onClick: (e) => {
                    e.stopPropagation(), null == t || t(), f();
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
function T(e) {
    let { hasActiveStream: t, participant: l, onEnablePin: o } = e,
        s = (0, p.bp)(),
        u = l.user,
        h = (0, a.e7)(
            [b.default],
            () => {
                var e;
                return null !== (e = b.default.getUser(u.id)) && void 0 !== e ? e : u;
            },
            [u]
        ),
        m = t ? y.intl.string(y.t.tLxK4u) : y.intl.string(y.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: r()(L.controlBackground, { [L.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: L.watchActionContainer,
                    children: (0, i.jsx)(c.Tooltip, {
                        text: m,
                        children: (e) =>
                            (0, i.jsxs)(c.Clickable, {
                                ...e,
                                className: L.watchButton,
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e),
                                        (0, f.rn)(l.stream, {
                                            forceMultiple: !0,
                                            noFocus: !0
                                        }),
                                        o();
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
                className: L.controls,
                children: [
                    (0, i.jsx)('div', {
                        className: L.controlUser,
                        children: (0, i.jsxs)('div', {
                            className: L.controlUserContainer,
                            children: [
                                (0, i.jsx)(c.ScreenIcon, {
                                    size: 'xs',
                                    color: c.tokens.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: w.ZP.getName(l.stream.guildId, l.stream.channelId, u)
                                }),
                                (0, i.jsx)(x.ZP, {
                                    primaryGuild: h.primaryGuild,
                                    userId: u.id
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: L.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(S, { participant: l }),
                                    (0, i.jsx)(c.Tooltip, {
                                        text: y.intl.string(y.t['3D5yo6']),
                                        children: (e) => {
                                            let { onClick: t, ...o } = e;
                                            return (0, i.jsx)(c.Clickable, {
                                                ...o,
                                                className: L.controlAction,
                                                onClick: (e) => {
                                                    e.stopPropagation(),
                                                        null == t || t(),
                                                        (0, d.jW)(e, async () => {
                                                            let { default: e } = await n.e('5704').then(n.bind(n, 360429));
                                                            return (t) =>
                                                                (0, i.jsx)(e, {
                                                                    ...t,
                                                                    stream: l.stream,
                                                                    exitFullscreen: () => {},
                                                                    appContext: s
                                                                });
                                                        });
                                                },
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
let A = new Set([N.jm8.ENDED, N.jm8.FAILED, N.jm8.PAUSED]),
    O = l.memo(function (e) {
        let { participant: t, width: n, locked: l, widgetId: o, pinned: s } = e,
            c = (0, a.e7)([I.Z], () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            u = null != c && A.has(c.state),
            d = null != c,
            f = (0, k.yA)(t.stream),
            p = (0, k.xN)(t.stream);
        return (!d && l) || u
            ? null
            : (0, i.jsxs)('div', {
                  className: L.tile,
                  children: [
                      d &&
                          !l &&
                          (0, i.jsx)(v.ZP, {
                              size: v.ZP.Sizes.SMALL,
                              className: L.liveIndicator
                          }),
                      d
                          ? (0, i.jsx)('div', {
                                className: L.streamTile,
                                children: (0, i.jsx)('div', {
                                    className: L.streamTile,
                                    style: { transform: 'scale('.concat(f, ')') },
                                    children: (0, i.jsx)(Z.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != p ? p : C.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !l,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: l ? L.streamTileWrapper : void 0,
                                        inOverlayPopout: !0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: L.streamPreview,
                                children: (0, i.jsx)(g.Z, {
                                    noText: !0,
                                    className: r()(L.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      l
                          ? null
                          : (0, i.jsx)(T, {
                                participant: t,
                                hasActiveStream: d,
                                onEnablePin: () => {
                                    !s && (0, h.xh)(o);
                                }
                            })
                  ]
              });
    });
