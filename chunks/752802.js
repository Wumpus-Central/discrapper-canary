n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(46973),
    d = n(481060),
    c = n(846027),
    u = n(239091),
    h = n(765250),
    _ = n(872810),
    p = n(40851),
    f = n(414910),
    g = n(194082),
    m = n(979264),
    v = n(871118),
    E = n(352978),
    I = n(833519),
    x = n(839662),
    C = n(199902),
    S = n(314897),
    Z = n(131951),
    y = n(594174),
    b = n(5192),
    O = n(444295),
    N = n(1226),
    T = n(981631),
    w = n(388032),
    k = n(359501);
function A(e) {
    let { participant: t } = e,
        n = t.user.id,
        l = (0, a.e7)(
            [Z.Z],
            () => {
                let e = (0, f.Z)(t.type);
                return Z.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        o = (0, a.e7)([S.default], () => S.default.getId()),
        { hasVideo: u } = (0, x.Z)(t, o),
        h = l && u,
        _ = r.useCallback(() => {
            c.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(d.ua7, {
        text: h ? w.intl.string(w.t.YqAjX1) : w.intl.string(w.t['w4m94+']),
        children: (e) => {
            let { onClick: n, ...r } = e;
            return (0, i.jsx)(d.P3F, {
                ...r,
                className: k.controlAction,
                onClick: (e) => {
                    e.stopPropagation(),
                        (0, O.Ws)(T.Odu.GO_LIVE, {
                            type: O.Qu.AUDIO,
                            value: h ? O.bk.ENABLED : O.bk.DISABLED,
                            userId: t.user.id
                        }),
                        null == n || n(),
                        _();
                },
                children: h
                    ? (0, i.jsx)(d.OyP, {
                          size: 'sm',
                          color: 'currentColor'
                      })
                    : (0, i.jsx)(d.gj8, {
                          size: 'sm',
                          color: 'currentColor'
                      })
            });
        }
    });
}
function j(e, t, r) {
    return (l) => {
        (0, O.Ws)(T.Odu.GO_LIVE, {
            type: O.Qu.GO_LIVE,
            value: O.bk.SETTINGS_OPENED,
            userId: e.user.id
        }),
            l.stopPropagation(),
            null == r || r(),
            (0, u.jW)(l, async () => {
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
function R(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        l = (0, p.bp)(),
        s = n.user,
        c = (0, a.e7)(
            [y.default],
            () => {
                var e;
                return null !== (e = y.default.getUser(s.id)) && void 0 !== e ? e : s;
            },
            [s]
        ),
        u = t ? w.intl.string(w.t.tLxK4u) : w.intl.string(w.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: o()(k.controlBackground, { [k.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: k.watchActionContainer,
                    children: (0, i.jsx)(d.ua7, {
                        text: u,
                        children: (e) =>
                            (0, i.jsxs)(d.P3F, {
                                ...e,
                                className: k.watchButton,
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e),
                                        (0, _.rn)(n.stream, {
                                            forceMultiple: !0,
                                            noFocus: !0
                                        }),
                                        r(),
                                        (0, O.Ws)(T.Odu.GO_LIVE, {
                                            type: O.Qu.GO_LIVE,
                                            value: O.bk.ENABLED,
                                            userId: n.user.id
                                        });
                                },
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'always-white',
                                        children: w.intl.string(w.t['I6JG4+'])
                                    }),
                                    (0, i.jsx)(d.OgY, {
                                        size: 'sm',
                                        color: 'currentColor'
                                    })
                                ]
                            })
                    })
                }),
            (0, i.jsxs)('div', {
                className: k.controls,
                children: [
                    (0, i.jsx)('div', {
                        className: k.controlUser,
                        children: (0, i.jsxs)('div', {
                            className: k.controlUserContainer,
                            children: [
                                (0, i.jsx)(d.pzj, {
                                    size: 'xs',
                                    color: d.TVs.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: b.ZP.getName(n.stream.guildId, n.stream.channelId, s)
                                }),
                                (0, i.jsx)(m.ZP, {
                                    primaryGuild: c.primaryGuild,
                                    userId: s.id,
                                    onShowProfile: () => {
                                        (0, O.Ws)(T.Odu.GO_LIVE, {
                                            type: O.Qu.GO_LIVE,
                                            value: O.bk.GUILD_PROFILE_OPENED,
                                            userId: n.user.id
                                        });
                                    }
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: k.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(A, { participant: n }),
                                    (0, i.jsx)(d.ua7, {
                                        text: w.intl.string(w.t['3D5yo6']),
                                        children: (e) => {
                                            let { onClick: t, ...r } = e;
                                            return (0, i.jsx)(d.P3F, {
                                                ...r,
                                                className: k.controlAction,
                                                onClick: j(n, l, t),
                                                children: (0, i.jsx)(d.xhG, {
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
let L = new Set([T.jm8.ENDED, T.jm8.FAILED, T.jm8.PAUSED]),
    D = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: l, pinned: s } = e,
            c = (0, a.e7)([C.Z], () => C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            u = (0, p.bp)(),
            _ = null != c && L.has(c.state),
            f = null != c,
            m = (0, N.yA)(t.stream),
            x = (0, N.xN)(t.stream);
        return (!f && r) || _
            ? null
            : (0, i.jsxs)('div', {
                  className: k.tile,
                  children: [
                      f &&
                          !r &&
                          (0, i.jsx)(g.ZP, {
                              size: g.ZP.Sizes.SMALL,
                              className: k.liveIndicator
                          }),
                      f
                          ? (0, i.jsx)('div', {
                                className: k.streamTile,
                                children: (0, i.jsx)(d.kL8, {
                                    'aria-label': w.intl.formatToPlainString(w.t.gHPz3d, { streamerName: t.user.username }),
                                    onClick: () => {},
                                    onContextMenu: j(t, u),
                                    className: k.streamTile,
                                    style: { transform: 'scale('.concat(m, ')') },
                                    children: (0, i.jsx)(I.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != x ? x : E.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !r,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: r ? k.streamTileWrapper : void 0,
                                        inOverlayPopout: !0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: k.streamPreview,
                                children: (0, i.jsx)(v.Z, {
                                    noText: !0,
                                    className: o()(k.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      r
                          ? null
                          : (0, i.jsx)(R, {
                                participant: t,
                                hasActiveStream: f,
                                onEnablePin: () => {
                                    s || (0, h.xh)(l);
                                }
                            })
                  ]
              });
    });
