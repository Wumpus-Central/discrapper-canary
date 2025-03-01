n.d(t, { Z: () => W }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(399606),
    a = n(46973),
    u = n(481060),
    c = n(846027),
    d = n(239091),
    p = n(765250),
    h = n(872810),
    f = n(40851),
    m = n(414910),
    g = n(194082),
    O = n(979264),
    v = n(871118),
    y = n(352978),
    E = n(833519),
    b = n(839662),
    x = n(199902),
    j = n(314897),
    S = n(131951),
    I = n(594174),
    C = n(5192),
    N = n(444295),
    Z = n(1226),
    w = n(981631),
    _ = n(388032),
    P = n(958914);
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
function D(e, t) {
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
function k(e) {
    let { participant: t } = e,
        n = t.user.id,
        o = (0, s.e7)(
            [S.Z],
            () => {
                let e = (0, m.Z)(t.type);
                return S.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        l = (0, s.e7)([j.default], () => j.default.getId()),
        { hasVideo: d } = (0, b.Z)(t, l),
        p = o && d,
        h = r.useCallback(() => {
            c.Z.toggleLocalMute(n, a.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(u.ua7, {
        text: p ? _.NW.string(_.t.YqAjX1) : _.NW.string(_.t['w4m94+']),
        children: (e) => {
            var { onClick: n } = e,
                r = A(e, ['onClick']);
            return (0, i.jsx)(
                u.P3F,
                D(T({}, r), {
                    className: P.controlAction,
                    onClick: (e) => {
                        e.stopPropagation(),
                            (0, N.Ws)(w.Odu.GO_LIVE, {
                                type: N.Qu.AUDIO,
                                value: p ? N.bk.ENABLED : N.bk.DISABLED,
                                userId: t.user.id
                            }),
                            null == n || n(),
                            h();
                    },
                    children: p
                        ? (0, i.jsx)(u.OyP, {
                              size: 'sm',
                              color: 'currentColor'
                          })
                        : (0, i.jsx)(u.gj8, {
                              size: 'sm',
                              color: 'currentColor'
                          })
                })
            );
        }
    });
}
function L(e, t, r) {
    return (o) => {
        (0, N.Ws)(w.Odu.GO_LIVE, {
            type: N.Qu.GO_LIVE,
            value: N.bk.SETTINGS_OPENED,
            userId: e.user.id
        }),
            o.stopPropagation(),
            null == r || r(),
            (0, d.jW)(o, async () => {
                let { default: r } = await n.e('5704').then(n.bind(n, 360429));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        D(T({}, n), {
                            stream: e.stream,
                            exitFullscreen: () => {},
                            appContext: t
                        })
                    );
            });
    };
}
function R(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        o = (0, f.bp)(),
        a = n.user,
        c = (0, s.e7)(
            [I.default],
            () => {
                var e;
                return null !== (e = I.default.getUser(a.id)) && void 0 !== e ? e : a;
            },
            [a]
        ),
        d = t ? _.NW.string(_.t.tLxK4u) : _.NW.string(_.t.E5RDnJ);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: l()(P.controlBackground, { [P.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)('div', {
                    className: P.watchActionContainer,
                    children: (0, i.jsx)(u.ua7, {
                        text: d,
                        children: (e) =>
                            (0, i.jsxs)(
                                u.P3F,
                                D(T({}, e), {
                                    className: P.watchButton,
                                    onClick: () => {
                                        var t;
                                        null === (t = e.onClick) || void 0 === t || t.call(e),
                                            (0, h.rn)(n.stream, {
                                                forceMultiple: !0,
                                                noFocus: !0
                                            }),
                                            r(),
                                            (0, N.Ws)(w.Odu.GO_LIVE, {
                                                type: N.Qu.GO_LIVE,
                                                value: N.bk.ENABLED,
                                                userId: n.user.id
                                            });
                                    },
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: _.NW.string(_.t['I6JG4+'])
                                        }),
                                        (0, i.jsx)(u.OgY, {
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
                                (0, i.jsx)(u.pzj, {
                                    size: 'xs',
                                    color: u.TVs.colors.INTERACTIVE_ACTIVE
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    className: P.controlUserName,
                                    children: C.ZP.getName(n.stream.guildId, n.stream.channelId, a)
                                }),
                                (0, i.jsx)(O.ZP, {
                                    primaryGuild: c.primaryGuild,
                                    userId: c.id,
                                    containerClassName: P.guildTag,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, N.Ws)(w.Odu.GO_LIVE, {
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
                        className: P.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(k, { participant: n }),
                                    (0, i.jsx)(u.ua7, {
                                        text: _.NW.string(_.t['3D5yo6']),
                                        children: (e) => {
                                            var { onClick: t } = e,
                                                r = A(e, ['onClick']);
                                            return (0, i.jsx)(
                                                u.P3F,
                                                D(T({}, r), {
                                                    className: P.controlAction,
                                                    onClick: L(n, o, t),
                                                    children: (0, i.jsx)(u.xhG, {
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
let M = new Set([w.jm8.ENDED, w.jm8.FAILED, w.jm8.PAUSED]),
    W = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: a } = e,
            c = (0, s.e7)([x.Z], () => x.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            d = (0, f.bp)(),
            h = null != c && M.has(c.state),
            m = null != c,
            O = (0, Z.yA)(t.stream),
            b = (0, Z.xN)(t.stream);
        return (!m && r) || h
            ? null
            : (0, i.jsxs)('div', {
                  className: P.tile,
                  children: [
                      m &&
                          !r &&
                          (0, i.jsx)(g.ZP, {
                              size: g.ZP.Sizes.SMALL,
                              className: P.liveIndicator
                          }),
                      m
                          ? (0, i.jsx)('div', {
                                className: P.streamTile,
                                children: (0, i.jsx)(u.kL8, {
                                    'aria-label': _.NW.formatToPlainString(_.t.gHPz3d, { streamerName: t.user.username }),
                                    onClick: () => {},
                                    onContextMenu: L(t, d),
                                    className: P.streamTile,
                                    style: { transform: 'scale('.concat(O, ')') },
                                    children: (0, i.jsx)(E.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != b ? b : y.L.CONTAIN,
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
                          : (0, i.jsx)(R, {
                                participant: t,
                                hasActiveStream: m,
                                onEnablePin: () => {
                                    a || (0, p.xh)(o);
                                }
                            })
                  ]
              });
    });
