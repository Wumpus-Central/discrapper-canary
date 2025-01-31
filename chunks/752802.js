n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(399606),
    s = n(46973),
    c = n(481060),
    d = n(846027),
    u = n(239091),
    h = n(765250),
    _ = n(872810),
    m = n(40851),
    g = n(414910),
    p = n(194082),
    f = n(979264),
    x = n(871118),
    v = n(352978),
    C = n(833519),
    b = n(839662),
    Z = n(199902),
    I = n(314897),
    j = n(131951),
    w = n(594174),
    y = n(5192),
    E = n(1226),
    k = n(981631),
    N = n(388032),
    S = n(2847);
function T(e) {
    let { participant: t } = e,
        n = t.user.id,
        o = (0, l.e7)(
            [j.Z],
            () => {
                let e = (0, g.Z)(t.type);
                return j.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        a = (0, l.e7)([I.default], () => I.default.getId()),
        { hasVideo: u } = (0, b.Z)(t, a),
        h = o && u,
        _ = r.useCallback(() => {
            d.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(c.ua7, {
        text: h ? N.intl.string(N.t.YqAjX1) : N.intl.string(N.t['w4m94+']),
        children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(c.P3F, {
                ...n,
                className: S.controlAction,
                onClick: (e) => {
                    e.stopPropagation(), null == t || t(), _();
                },
                children: h
                    ? (0, i.jsx)(c.OyP, {
                          size: 'sm',
                          color: 'currentColor'
                      })
                    : (0, i.jsx)(c.gj8, {
                          size: 'sm',
                          color: 'currentColor'
                      })
            });
        }
    });
}
function O(e, t, r) {
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
function P(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        o = (0, m.bp)(),
        s = n.user,
        d = (0, l.e7)(
            [w.default],
            () => {
                var e;
                return null !== (e = w.default.getUser(s.id)) && void 0 !== e ? e : s;
            },
            [s]
        ),
        u = t ? N.intl.string(N.t.tLxK4u) : N.intl.string(N.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: a()(S.controlBackground, { [S.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: S.watchActionContainer,
                    children: (0, i.jsx)(c.ua7, {
                        text: u,
                        children: (e) =>
                            (0, i.jsxs)(c.P3F, {
                                ...e,
                                className: S.watchButton,
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e),
                                        (0, _.rn)(n.stream, {
                                            forceMultiple: !0,
                                            noFocus: !0
                                        }),
                                        r();
                                },
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'always-white',
                                        children: N.intl.string(N.t['I6JG4+'])
                                    }),
                                    (0, i.jsx)(c.OgY, {
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
                                (0, i.jsx)(c.pzj, {
                                    size: 'xs',
                                    color: c.TVs.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: y.ZP.getName(n.stream.guildId, n.stream.channelId, s)
                                }),
                                (0, i.jsx)(f.ZP, {
                                    primaryGuild: d.primaryGuild,
                                    userId: s.id
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
                                    (0, i.jsx)(T, { participant: n }),
                                    (0, i.jsx)(c.ua7, {
                                        text: N.intl.string(N.t['3D5yo6']),
                                        children: (e) => {
                                            let { onClick: t, ...r } = e;
                                            return (0, i.jsx)(c.P3F, {
                                                ...r,
                                                className: S.controlAction,
                                                onClick: O(n, o, t),
                                                children: (0, i.jsx)(c.xhG, {
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
let L = new Set([k.jm8.ENDED, k.jm8.FAILED, k.jm8.PAUSED]),
    A = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: s } = e,
            d = (0, l.e7)([Z.Z], () => Z.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            u = (0, m.bp)(),
            _ = null != d && L.has(d.state),
            g = null != d,
            f = (0, E.yA)(t.stream),
            b = (0, E.xN)(t.stream);
        return (!g && r) || _
            ? null
            : (0, i.jsxs)('div', {
                  className: S.tile,
                  children: [
                      g &&
                          !r &&
                          (0, i.jsx)(p.ZP, {
                              size: p.ZP.Sizes.SMALL,
                              className: S.liveIndicator
                          }),
                      g
                          ? (0, i.jsx)('div', {
                                className: S.streamTile,
                                children: (0, i.jsx)(c.kL8, {
                                    'aria-label': N.intl.formatToPlainString(N.t.gHPz3d, { streamerName: t.user.username }),
                                    onClick: () => {},
                                    onContextMenu: O(t, u),
                                    className: S.streamTile,
                                    style: { transform: 'scale('.concat(f, ')') },
                                    children: (0, i.jsx)(C.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != b ? b : v.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !r,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: r ? S.streamTileWrapper : void 0,
                                        inOverlayPopout: !0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: S.streamPreview,
                                children: (0, i.jsx)(x.Z, {
                                    noText: !0,
                                    className: a()(S.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      r
                          ? null
                          : (0, i.jsx)(P, {
                                participant: t,
                                hasActiveStream: g,
                                onEnablePin: () => {
                                    s || (0, h.xh)(o);
                                }
                            })
                  ]
              });
    });
