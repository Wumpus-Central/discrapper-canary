n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(399606),
    s = n(46973),
    d = n(481060),
    c = n(846027),
    u = n(239091),
    h = n(765250),
    _ = n(872810),
    p = n(40851),
    g = n(414910),
    f = n(194082),
    m = n(979264),
    v = n(871118),
    x = n(352978),
    E = n(833519),
    Z = n(839662),
    C = n(199902),
    I = n(314897),
    S = n(131951),
    b = n(594174),
    y = n(5192),
    N = n(1226),
    w = n(981631),
    T = n(388032),
    O = n(2847);
function j(e) {
    let { participant: t } = e,
        n = t.user.id,
        r = (0, a.e7)(
            [S.Z],
            () => {
                let e = (0, g.Z)(t.type);
                return S.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        o = (0, a.e7)([I.default], () => I.default.getId()),
        { hasVideo: u } = (0, Z.Z)(t, o),
        h = r && u,
        _ = l.useCallback(() => {
            c.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(d.ua7, {
        text: h ? T.intl.string(T.t.YqAjX1) : T.intl.string(T.t['w4m94+']),
        children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(d.P3F, {
                ...n,
                className: O.controlAction,
                onClick: (e) => {
                    e.stopPropagation(), null == t || t(), _();
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
        r.stopPropagation(),
            null == l || l(),
            (0, u.jW)(r, async () => {
                let { default: l } = await n.e('5704').then(n.bind(n, 360429));
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
        c = (0, a.e7)(
            [b.default],
            () => {
                var e;
                return null !== (e = b.default.getUser(s.id)) && void 0 !== e ? e : s;
            },
            [s]
        ),
        u = t ? T.intl.string(T.t.tLxK4u) : T.intl.string(T.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: o()(O.controlBackground, { [O.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: O.watchActionContainer,
                    children: (0, i.jsx)(d.ua7, {
                        text: u,
                        children: (e) =>
                            (0, i.jsxs)(d.P3F, {
                                ...e,
                                className: O.watchButton,
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e),
                                        (0, _.rn)(n.stream, {
                                            forceMultiple: !0,
                                            noFocus: !0
                                        }),
                                        l();
                                },
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'always-white',
                                        children: T.intl.string(T.t['I6JG4+'])
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
                className: O.controls,
                children: [
                    (0, i.jsx)('div', {
                        className: O.controlUser,
                        children: (0, i.jsxs)('div', {
                            className: O.controlUserContainer,
                            children: [
                                (0, i.jsx)(d.pzj, {
                                    size: 'xs',
                                    color: d.TVs.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: y.ZP.getName(n.stream.guildId, n.stream.channelId, s)
                                }),
                                (0, i.jsx)(m.ZP, {
                                    primaryGuild: c.primaryGuild,
                                    userId: s.id
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: O.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(j, { participant: n }),
                                    (0, i.jsx)(d.ua7, {
                                        text: T.intl.string(T.t['3D5yo6']),
                                        children: (e) => {
                                            let { onClick: t, ...l } = e;
                                            return (0, i.jsx)(d.P3F, {
                                                ...l,
                                                className: O.controlAction,
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
let A = new Set([w.jm8.ENDED, w.jm8.FAILED, w.jm8.PAUSED]),
    L = l.memo(function (e) {
        let { participant: t, width: n, locked: l, widgetId: r, pinned: s } = e,
            c = (0, a.e7)([C.Z], () => C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            u = (0, p.bp)(),
            _ = null != c && A.has(c.state),
            g = null != c,
            m = (0, N.yA)(t.stream),
            Z = (0, N.xN)(t.stream);
        return (!g && l) || _
            ? null
            : (0, i.jsxs)('div', {
                  className: O.tile,
                  children: [
                      g &&
                          !l &&
                          (0, i.jsx)(f.ZP, {
                              size: f.ZP.Sizes.SMALL,
                              className: O.liveIndicator
                          }),
                      g
                          ? (0, i.jsx)('div', {
                                className: O.streamTile,
                                children: (0, i.jsx)(d.kL8, {
                                    'aria-label': T.intl.formatToPlainString(T.t.gHPz3d, { streamerName: t.user.username }),
                                    onClick: () => {},
                                    onContextMenu: k(t, u),
                                    className: O.streamTile,
                                    style: { transform: 'scale('.concat(m, ')') },
                                    children: (0, i.jsx)(E.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != Z ? Z : x.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !l,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: l ? O.streamTileWrapper : void 0,
                                        inOverlayPopout: !0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: O.streamPreview,
                                children: (0, i.jsx)(v.Z, {
                                    noText: !0,
                                    className: o()(O.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      l
                          ? null
                          : (0, i.jsx)(R, {
                                participant: t,
                                hasActiveStream: g,
                                onEnablePin: () => {
                                    s || (0, h.xh)(r);
                                }
                            })
                  ]
              });
    });
