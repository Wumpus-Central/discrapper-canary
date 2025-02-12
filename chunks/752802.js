n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
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
    x = n(352978),
    E = n(833519),
    C = n(839662),
    Z = n(199902),
    I = n(314897),
    S = n(131951),
    b = n(594174),
    y = n(5192),
    w = n(1226),
    O = n(981631),
    N = n(388032),
    T = n(359501);
function j(e) {
    let { participant: t } = e,
        n = t.user.id,
        r = (0, a.e7)(
            [S.Z],
            () => {
                let e = (0, f.Z)(t.type);
                return S.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        l = (0, a.e7)([I.default], () => I.default.getId()),
        { hasVideo: u } = (0, C.Z)(t, l),
        h = r && u,
        _ = o.useCallback(() => {
            c.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(d.ua7, {
        text: h ? N.intl.string(N.t.YqAjX1) : N.intl.string(N.t['w4m94+']),
        children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(d.P3F, {
                ...n,
                className: T.controlAction,
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
function k(e, t, o) {
    return (r) => {
        r.stopPropagation(),
            null == o || o(),
            (0, u.jW)(r, async () => {
                let { default: o } = await n.e('5704').then(n.bind(n, 360429));
                return (n) =>
                    (0, i.jsx)(o, {
                        ...n,
                        stream: e.stream,
                        exitFullscreen: () => {},
                        appContext: t
                    });
            });
    };
}
function R(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: o } = e,
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
        u = t ? N.intl.string(N.t.tLxK4u) : N.intl.string(N.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: l()(T.controlBackground, { [T.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: T.watchActionContainer,
                    children: (0, i.jsx)(d.ua7, {
                        text: u,
                        children: (e) =>
                            (0, i.jsxs)(d.P3F, {
                                ...e,
                                className: T.watchButton,
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e),
                                        (0, _.rn)(n.stream, {
                                            forceMultiple: !0,
                                            noFocus: !0
                                        }),
                                        o();
                                },
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'always-white',
                                        children: N.intl.string(N.t['I6JG4+'])
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
                className: T.controls,
                children: [
                    (0, i.jsx)('div', {
                        className: T.controlUser,
                        children: (0, i.jsxs)('div', {
                            className: T.controlUserContainer,
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
                        className: T.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(j, { participant: n }),
                                    (0, i.jsx)(d.ua7, {
                                        text: N.intl.string(N.t['3D5yo6']),
                                        children: (e) => {
                                            let { onClick: t, ...o } = e;
                                            return (0, i.jsx)(d.P3F, {
                                                ...o,
                                                className: T.controlAction,
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
let A = new Set([O.jm8.ENDED, O.jm8.FAILED, O.jm8.PAUSED]),
    L = o.memo(function (e) {
        let { participant: t, width: n, locked: o, widgetId: r, pinned: s } = e,
            c = (0, a.e7)([Z.Z], () => Z.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            u = (0, p.bp)(),
            _ = null != c && A.has(c.state),
            f = null != c,
            m = (0, w.yA)(t.stream),
            C = (0, w.xN)(t.stream);
        return (!f && o) || _
            ? null
            : (0, i.jsxs)('div', {
                  className: T.tile,
                  children: [
                      f &&
                          !o &&
                          (0, i.jsx)(g.ZP, {
                              size: g.ZP.Sizes.SMALL,
                              className: T.liveIndicator
                          }),
                      f
                          ? (0, i.jsx)('div', {
                                className: T.streamTile,
                                children: (0, i.jsx)(d.kL8, {
                                    'aria-label': N.intl.formatToPlainString(N.t.gHPz3d, { streamerName: t.user.username }),
                                    onClick: () => {},
                                    onContextMenu: k(t, u),
                                    className: T.streamTile,
                                    style: { transform: 'scale('.concat(m, ')') },
                                    children: (0, i.jsx)(E.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != C ? C : x.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !o,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: o ? T.streamTileWrapper : void 0,
                                        inOverlayPopout: !0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: T.streamPreview,
                                children: (0, i.jsx)(v.Z, {
                                    noText: !0,
                                    className: l()(T.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      o
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
