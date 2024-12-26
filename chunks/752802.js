n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(46973),
    c = n(481060),
    u = n(846027),
    d = n(239091),
    h = n(765250),
    f = n(872810),
    m = n(40851),
    v = n(414910),
    p = n(194082),
    x = n(979264),
    g = n(871118),
    C = n(352978),
    Z = n(833519),
    I = n(839662),
    _ = n(199902),
    j = n(314897),
    E = n(131951),
    b = n(594174),
    w = n(5192),
    N = n(1226),
    k = n(981631),
    L = n(388032),
    S = n(2847);
function y(e) {
    let { participant: t } = e,
        n = t.user.id,
        l = (0, a.e7)(
            [E.Z],
            () => {
                let e = (0, v.Z)(t.type);
                return E.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        o = (0, a.e7)([j.default], () => j.default.getId()),
        { hasVideo: d } = (0, I.Z)(t, o),
        h = l && d,
        f = r.useCallback(() => {
            u.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(c.Tooltip, {
        text: h ? L.intl.string(L.t.YqAjX1) : L.intl.string(L.t['w4m94+']),
        children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(c.Clickable, {
                ...n,
                className: S.controlAction,
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
    let { hasActiveStream: t, participant: r, onEnablePin: l } = e,
        s = (0, m.bp)(),
        u = r.user,
        h = (0, a.e7)(
            [b.default],
            () => {
                var e;
                return null !== (e = b.default.getUser(u.id)) && void 0 !== e ? e : u;
            },
            [u]
        ),
        v = t ? L.intl.string(L.t.tLxK4u) : L.intl.string(L.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: o()(S.controlBackground, { [S.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: S.watchActionContainer,
                    children: (0, i.jsx)(c.Tooltip, {
                        text: v,
                        children: (e) =>
                            (0, i.jsxs)(c.Clickable, {
                                ...e,
                                className: S.watchButton,
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e),
                                        (0, f.rn)(r.stream, {
                                            forceMultiple: !0,
                                            noFocus: !0
                                        }),
                                        l();
                                },
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'always-white',
                                        children: L.intl.string(L.t['I6JG4+'])
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
                className: S.controls,
                children: [
                    (0, i.jsx)('div', {
                        className: S.controlUser,
                        children: (0, i.jsxs)('div', {
                            className: S.controlUserContainer,
                            children: [
                                (0, i.jsx)(c.ScreenIcon, {
                                    size: 'xs',
                                    color: c.tokens.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: w.ZP.getName(r.stream.guildId, r.stream.channelId, u)
                                }),
                                (0, i.jsx)(x.ZP, {
                                    primaryGuild: h.primaryGuild,
                                    userId: u.id
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: S.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(y, { participant: r }),
                                    (0, i.jsx)(c.Tooltip, {
                                        text: L.intl.string(L.t['3D5yo6']),
                                        children: (e) => {
                                            let { onClick: t, ...l } = e;
                                            return (0, i.jsx)(c.Clickable, {
                                                ...l,
                                                className: S.controlAction,
                                                onClick: (e) => {
                                                    e.stopPropagation(),
                                                        null == t || t(),
                                                        (0, d.jW)(e, async () => {
                                                            let { default: e } = await n.e('5704').then(n.bind(n, 360429));
                                                            return (t) =>
                                                                (0, i.jsx)(e, {
                                                                    ...t,
                                                                    stream: r.stream,
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
let A = new Set([k.jm8.ENDED, k.jm8.FAILED, k.jm8.PAUSED]),
    O = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: l, pinned: s } = e,
            c = (0, a.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            u = null != c && A.has(c.state),
            d = null != c,
            f = (0, N.yA)(t.stream),
            m = (0, N.xN)(t.stream);
        return (!d && r) || u
            ? null
            : (0, i.jsxs)('div', {
                  className: S.tile,
                  children: [
                      d &&
                          !r &&
                          (0, i.jsx)(p.ZP, {
                              size: p.ZP.Sizes.SMALL,
                              className: S.liveIndicator
                          }),
                      d
                          ? (0, i.jsx)('div', {
                                className: S.streamTile,
                                children: (0, i.jsx)('div', {
                                    className: S.streamTile,
                                    style: { transform: 'scale('.concat(f, ')') },
                                    children: (0, i.jsx)(Z.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != m ? m : C.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !r,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: r ? S.streamTileWrapper : void 0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: S.streamPreview,
                                children: (0, i.jsx)(g.Z, {
                                    noText: !0,
                                    className: o()(S.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      r
                          ? null
                          : (0, i.jsx)(T, {
                                participant: t,
                                hasActiveStream: d,
                                onEnablePin: () => {
                                    !s && (0, h.xh)(l);
                                }
                            })
                  ]
              });
    });
