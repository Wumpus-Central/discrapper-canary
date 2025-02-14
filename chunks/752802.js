n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(399606),
    s = n(46973),
    d = n(481060),
    u = n(846027),
    c = n(239091),
    h = n(765250),
    _ = n(872810),
    p = n(40851),
    f = n(414910),
    m = n(194082),
    g = n(979264),
    v = n(871118),
    E = n(352978),
    x = n(833519),
    I = n(839662),
    C = n(199902),
    S = n(314897),
    Z = n(131951),
    y = n(594174),
    O = n(5192),
    N = n(444295),
    b = n(1226),
    T = n(981631),
    w = n(388032),
    A = n(233654);
function j(e) {
    let { participant: t } = e,
        n = t.user.id,
        r = (0, a.e7)(
            [Z.Z],
            () => {
                let e = (0, f.Z)(t.type);
                return Z.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        o = (0, a.e7)([S.default], () => S.default.getId()),
        { hasVideo: c } = (0, I.Z)(t, o),
        h = r && c,
        _ = l.useCallback(() => {
            u.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(d.ua7, {
        text: h ? w.intl.string(w.t.YqAjX1) : w.intl.string(w.t['w4m94+']),
        children: (e) => {
            let { onClick: n, ...l } = e;
            return (0, i.jsx)(d.P3F, {
                ...l,
                className: A.controlAction,
                onClick: (e) => {
                    e.stopPropagation(),
                        (0, N.Ws)(T.Odu.GO_LIVE, {
                            type: N.Qu.AUDIO,
                            value: h ? N.bk.ENABLED : N.bk.DISABLED,
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
function k(e, t, l) {
    return (r) => {
        (0, N.Ws)(T.Odu.GO_LIVE, {
            type: N.Qu.GO_LIVE,
            value: N.bk.SETTINGS_OPENED,
            userId: e.user.id
        }),
            r.stopPropagation(),
            null == l || l(),
            (0, c.jW)(r, async () => {
                let { default: l } = await n.e('5704').then(n.bind(n, 782270));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        stream: e.stream,
                        exitFullscreen: () => {},
                        appContext: t
                    });
            });
    };
}
function R(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: l } = e,
        r = (0, p.bp)(),
        s = n.user,
        u = (0, a.e7)(
            [y.default],
            () => {
                var e;
                return null !== (e = y.default.getUser(s.id)) && void 0 !== e ? e : s;
            },
            [s]
        ),
        c = t ? w.intl.string(w.t.tLxK4u) : w.intl.string(w.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: o()(A.controlBackground, { [A.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: A.watchActionContainer,
                    children: (0, i.jsx)(d.ua7, {
                        text: c,
                        children: (e) =>
                            (0, i.jsxs)(d.P3F, {
                                ...e,
                                className: A.watchButton,
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e),
                                        (0, _.rn)(n.stream, {
                                            forceMultiple: !0,
                                            noFocus: !0
                                        }),
                                        l(),
                                        (0, N.Ws)(T.Odu.GO_LIVE, {
                                            type: N.Qu.GO_LIVE,
                                            value: N.bk.ENABLED,
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
                className: A.controls,
                children: [
                    (0, i.jsx)('div', {
                        className: A.controlUser,
                        children: (0, i.jsxs)('div', {
                            className: A.controlUserContainer,
                            children: [
                                (0, i.jsx)(d.pzj, {
                                    size: 'xs',
                                    color: d.TVs.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: O.ZP.getName(n.stream.guildId, n.stream.channelId, s)
                                }),
                                (0, i.jsx)(g.ZP, {
                                    primaryGuild: u.primaryGuild,
                                    userId: s.id,
                                    onShowProfile: () => {
                                        (0, N.Ws)(T.Odu.GO_LIVE, {
                                            type: N.Qu.GO_LIVE,
                                            value: N.bk.GUILD_PROFILE_OPENED,
                                            userId: n.user.id
                                        });
                                    }
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: A.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(j, { participant: n }),
                                    (0, i.jsx)(d.ua7, {
                                        text: w.intl.string(w.t['3D5yo6']),
                                        children: (e) => {
                                            let { onClick: t, ...l } = e;
                                            return (0, i.jsx)(d.P3F, {
                                                ...l,
                                                className: A.controlAction,
                                                onClick: k(n, r, t),
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
    D = l.memo(function (e) {
        let { participant: t, width: n, locked: l, widgetId: r, pinned: s } = e,
            u = (0, a.e7)([C.Z], () => C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            c = (0, p.bp)(),
            _ = null != u && L.has(u.state),
            f = null != u,
            g = (0, b.yA)(t.stream),
            I = (0, b.xN)(t.stream);
        return (!f && l) || _
            ? null
            : (0, i.jsxs)('div', {
                  className: A.tile,
                  children: [
                      f &&
                          !l &&
                          (0, i.jsx)(m.ZP, {
                              size: m.ZP.Sizes.SMALL,
                              className: A.liveIndicator
                          }),
                      f
                          ? (0, i.jsx)('div', {
                                className: A.streamTile,
                                children: (0, i.jsx)(d.kL8, {
                                    'aria-label': w.intl.formatToPlainString(w.t.gHPz3d, { streamerName: t.user.username }),
                                    onClick: () => {},
                                    onContextMenu: k(t, c),
                                    className: A.streamTile,
                                    style: { transform: 'scale('.concat(g, ')') },
                                    children: (0, i.jsx)(x.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != I ? I : E.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !l,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: l ? A.streamTileWrapper : void 0,
                                        inOverlayPopout: !0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: A.streamPreview,
                                children: (0, i.jsx)(v.Z, {
                                    noText: !0,
                                    className: o()(A.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      l
                          ? null
                          : (0, i.jsx)(R, {
                                participant: t,
                                hasActiveStream: f,
                                onEnablePin: () => {
                                    s || (0, h.xh)(r);
                                }
                            })
                  ]
              });
    });
