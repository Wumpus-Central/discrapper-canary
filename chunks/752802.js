n.d(t, { Z: () => M }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(399606),
    s = n(46973),
    c = n(481060),
    u = n(846027),
    d = n(239091),
    p = n(765250),
    f = n(872810),
    h = n(40851),
    g = n(414910),
    _ = n(194082),
    m = n(979264),
    v = n(871118),
    O = n(352978),
    b = n(833519),
    y = n(839662),
    E = n(199902),
    x = n(314897),
    I = n(131951),
    S = n(594174),
    C = n(5192),
    j = n(444295),
    w = n(1226),
    Z = n(981631),
    N = n(388032),
    P = n(549789);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                o = Object.keys(e);
            for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function D(e) {
    let { participant: t } = e,
        n = t.user.id,
        o = (0, a.e7)(
            [I.Z],
            () => {
                let e = (0, g.Z)(t.type);
                return I.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        l = (0, a.e7)([x.default], () => x.default.getId()),
        { hasVideo: d } = (0, y.Z)(t, l),
        p = o && d,
        f = r.useCallback(() => {
            u.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(c.ua7, {
        text: p ? N.NW.string(N.t.YqAjX1) : N.NW.string(N.t['w4m94+']),
        children: (e) => {
            var { onClick: n } = e,
                r = A(e, ['onClick']);
            return (0, i.jsx)(
                c.P3F,
                k(T({}, r), {
                    className: P.controlAction,
                    onClick: (e) => {
                        e.stopPropagation(),
                            (0, j.Ws)(Z.Odu.GO_LIVE, {
                                type: j.Qu.AUDIO,
                                value: p ? j.bk.ENABLED : j.bk.DISABLED,
                                userId: t.user.id
                            }),
                            null == n || n(),
                            f();
                    },
                    children: p
                        ? (0, i.jsx)(c.OyP, {
                              size: 'sm',
                              color: 'currentColor'
                          })
                        : (0, i.jsx)(c.gj8, {
                              size: 'sm',
                              color: 'currentColor'
                          })
                })
            );
        }
    });
}
function R(e, t, r) {
    return (o) => {
        (0, j.Ws)(Z.Odu.GO_LIVE, {
            type: j.Qu.GO_LIVE,
            value: j.bk.SETTINGS_OPENED,
            userId: e.user.id
        }),
            o.stopPropagation(),
            null == r || r(),
            (0, d.jW)(o, async () => {
                let { default: r } = await n.e('5704').then(n.bind(n, 360429));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        k(T({}, n), {
                            stream: e.stream,
                            exitFullscreen: () => {},
                            appContext: t
                        })
                    );
            });
    };
}
function L(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        o = (0, h.bp)(),
        s = n.user,
        u = (0, a.e7)(
            [S.default],
            () => {
                var e;
                return null !== (e = S.default.getUser(s.id)) && void 0 !== e ? e : s;
            },
            [s]
        ),
        d = t ? N.NW.string(N.t.tLxK4u) : N.NW.string(N.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: l()(P.controlBackground, { [P.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: P.watchActionContainer,
                    children: (0, i.jsx)(c.ua7, {
                        text: d,
                        children: (e) =>
                            (0, i.jsxs)(
                                c.P3F,
                                k(T({}, e), {
                                    className: P.watchButton,
                                    onClick: () => {
                                        var t;
                                        null === (t = e.onClick) || void 0 === t || t.call(e),
                                            (0, f.rn)(n.stream, {
                                                forceMultiple: !0,
                                                noFocus: !0
                                            }),
                                            r(),
                                            (0, j.Ws)(Z.Odu.GO_LIVE, {
                                                type: j.Qu.GO_LIVE,
                                                value: j.bk.ENABLED,
                                                userId: n.user.id
                                            });
                                    },
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: N.NW.string(N.t['I6JG4+'])
                                        }),
                                        (0, i.jsx)(c.OgY, {
                                            size: 'sm',
                                            color: 'currentColor'
                                        })
                                    ]
                                })
                            )
                    })
                }),
            (0, i.jsxs)('div', {
                className: P.controls,
                children: [
                    (0, i.jsx)('div', {
                        className: P.controlUser,
                        children: (0, i.jsxs)('div', {
                            className: P.controlUserContainer,
                            children: [
                                (0, i.jsx)(c.pzj, {
                                    size: 'xs',
                                    color: c.TVs.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: C.ZP.getName(n.stream.guildId, n.stream.channelId, s)
                                }),
                                (0, i.jsx)(m.ZP, {
                                    primaryGuild: u.primaryGuild,
                                    userId: s.id,
                                    onShowProfile: () => {
                                        (0, j.Ws)(Z.Odu.GO_LIVE, {
                                            type: j.Qu.GO_LIVE,
                                            value: j.bk.GUILD_PROFILE_OPENED,
                                            userId: n.user.id
                                        });
                                    }
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: P.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(D, { participant: n }),
                                    (0, i.jsx)(c.ua7, {
                                        text: N.NW.string(N.t['3D5yo6']),
                                        children: (e) => {
                                            var { onClick: t } = e,
                                                r = A(e, ['onClick']);
                                            return (0, i.jsx)(
                                                c.P3F,
                                                k(T({}, r), {
                                                    className: P.controlAction,
                                                    onClick: R(n, o, t),
                                                    children: (0, i.jsx)(c.xhG, {
                                                        size: 'sm',
                                                        color: 'currentColor'
                                                    })
                                                })
                                            );
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
let W = new Set([Z.jm8.ENDED, Z.jm8.FAILED, Z.jm8.PAUSED]),
    M = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: s } = e,
            u = (0, a.e7)([E.Z], () => E.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            d = (0, h.bp)(),
            f = null != u && W.has(u.state),
            g = null != u,
            m = (0, w.yA)(t.stream),
            y = (0, w.xN)(t.stream);
        return (!g && r) || f
            ? null
            : (0, i.jsxs)('div', {
                  className: P.tile,
                  children: [
                      g &&
                          !r &&
                          (0, i.jsx)(_.ZP, {
                              size: _.ZP.Sizes.SMALL,
                              className: P.liveIndicator
                          }),
                      g
                          ? (0, i.jsx)('div', {
                                className: P.streamTile,
                                children: (0, i.jsx)(c.kL8, {
                                    'aria-label': N.NW.formatToPlainString(N.t.gHPz3d, { streamerName: t.user.username }),
                                    onClick: () => {},
                                    onContextMenu: R(t, d),
                                    className: P.streamTile,
                                    style: { transform: 'scale('.concat(m, ')') },
                                    children: (0, i.jsx)(b.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != y ? y : O.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !r,
                                        paused: !1,
                                        selected: !1,
                                        wrapperClassName: r ? P.streamTileWrapper : void 0,
                                        inOverlayPopout: !0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: P.streamPreview,
                                children: (0, i.jsx)(v.Z, {
                                    noText: !0,
                                    className: l()(P.absoluteFill),
                                    stream: t.stream
                                })
                            }),
                      r
                          ? null
                          : (0, i.jsx)(L, {
                                participant: t,
                                hasActiveStream: g,
                                onEnablePin: () => {
                                    s || (0, p.xh)(o);
                                }
                            })
                  ]
              });
    });
