n.d(t, { Z: () => V }), n(388685);
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
    m = n(414910),
    g = n(194082),
    y = n(871118),
    O = n(172751),
    v = n(352978),
    b = n(833519),
    E = n(839662),
    _ = n(199902),
    I = n(314897),
    x = n(131951),
    j = n(594174),
    S = n(5192),
    C = n(444295),
    N = n(1226),
    Z = n(981631),
    w = n(388032),
    P = n(652156);
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
function D(e, t) {
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
function A(e) {
    let { participant: t } = e,
        n = t.user.id,
        o = (0, a.e7)(
            [x.Z],
            () => {
                let e = (0, m.Z)(t.type);
                return x.Z.isLocalMute(t.user.id, e);
            },
            [t]
        ),
        l = (0, a.e7)([I.default], () => I.default.getId()),
        { hasVideo: d } = (0, E.Z)(t, l),
        p = o && d,
        f = r.useCallback(() => {
            u.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(c.ua7, {
        text: p ? w.intl.string(w.t.YqAjX1) : w.intl.string(w.t['w4m94+']),
        children: (e) => {
            var { onClick: n } = e,
                r = D(e, ['onClick']);
            return (0, i.jsx)(
                c.P3F,
                k(T({}, r), {
                    className: P.controlAction,
                    onClick: (e) => {
                        e.stopPropagation(),
                            (0, C.Ws)(Z.Odu.GO_LIVE, {
                                type: C.Qu.AUDIO,
                                value: p ? C.bk.ENABLED : C.bk.DISABLED,
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
function L(e, t, r) {
    return (o) => {
        (0, C.Ws)(Z.Odu.GO_LIVE, {
            type: C.Qu.GO_LIVE,
            value: C.bk.SETTINGS_OPENED,
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
function R(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        o = (0, h.bp)(),
        s = n.user,
        u = (0, a.e7)(
            [j.default],
            () => {
                var e;
                return null != (e = j.default.getUser(s.id)) ? e : s;
            },
            [s]
        ),
        d = t ? w.intl.string(w.t.tLxK4u) : w.intl.string(w.t.E5RDnJ);
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
                                        null == (t = e.onClick) || t.call(e),
                                            (0, f.rn)(n.stream, {
                                                forceMultiple: !0,
                                                noFocus: !0
                                            }),
                                            r(),
                                            (0, C.Ws)(Z.Odu.GO_LIVE, {
                                                type: C.Qu.GO_LIVE,
                                                value: C.bk.ENABLED,
                                                userId: n.user.id
                                            });
                                    },
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'always-white',
                                            children: w.intl.string(w.t['I6JG4+'])
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
                                    className: P.controlUserName,
                                    children: S.ZP.getName(n.stream.guildId, n.stream.channelId, s)
                                }),
                                (0, i.jsx)(O.ZP, {
                                    primaryGuild: u.primaryGuild,
                                    userId: u.id,
                                    containerClassName: P.guildTag,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, C.Ws)(Z.Odu.GO_LIVE, {
                                            type: C.Qu.GO_LIVE,
                                            value: C.bk.GUILD_PROFILE_OPENED,
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
                                    (0, i.jsx)(A, { participant: n }),
                                    (0, i.jsx)(c.ua7, {
                                        text: w.intl.string(w.t['3D5yo6']),
                                        children: (e) => {
                                            var { onClick: t } = e,
                                                r = D(e, ['onClick']);
                                            return (0, i.jsx)(
                                                c.P3F,
                                                k(T({}, r), {
                                                    className: P.controlAction,
                                                    onClick: L(n, o, t),
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
let M = new Set([Z.jm8.ENDED, Z.jm8.FAILED, Z.jm8.PAUSED]),
    V = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: o, pinned: l } = e,
            s = (0, a.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]),
            u = (0, h.bp)(),
            d = null != s && M.has(s.state),
            f = null != s,
            m = (0, N.yA)(t.stream),
            O = (0, N.xN)(t.stream);
        return (!f && r) || d
            ? null
            : (0, i.jsxs)('div', {
                  className: P.tile,
                  children: [
                      f &&
                          !r &&
                          (0, i.jsx)(g.ZP, {
                              size: g.ZP.Sizes.SMALL,
                              className: P.liveIndicator
                          }),
                      f
                          ? (0, i.jsx)('div', {
                                className: P.streamTile,
                                children: (0, i.jsx)(c.kL8, {
                                    'aria-label': w.intl.formatToPlainString(w.t.gHPz3d, { streamerName: t.user.username }),
                                    onClick: () => {},
                                    onContextMenu: L(t, u),
                                    className: P.streamTile,
                                    style: { transform: 'scale('.concat(m, ')') },
                                    children: (0, i.jsx)(b.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != O ? O : v.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !r,
                                        selected: !1,
                                        wrapperClassName: r ? P.streamTileWrapper : void 0,
                                        inOverlayPopout: !0
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: P.streamPreview,
                                children: (0, i.jsx)(y.Z, {
                                    noText: !0,
                                    className: P.absoluteFill,
                                    stream: t.stream
                                })
                            }),
                      r
                          ? null
                          : (0, i.jsx)(R, {
                                participant: t,
                                hasActiveStream: f,
                                onEnablePin: () => {
                                    l || (0, p.xh)(o);
                                }
                            })
                  ]
              });
    });
