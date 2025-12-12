n.d(t, {
    Z: () => U,
    q: () => V,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(399606),
    s = n(46973),
    c = n(681715),
    u = n(481060),
    d = n(846027),
    f = n(239091),
    h = n(765250),
    p = n(872810),
    m = n(414910),
    g = n(598006),
    b = n(194082),
    y = n(569545),
    O = n(871118),
    v = n(172751),
    E = n(728285),
    S = n(352978),
    x = n(833519),
    I = n(839662),
    C = n(199902),
    j = n(314897),
    _ = n(131951),
    Z = n(594174),
    N = n(5192),
    w = n(444295),
    T = n(32300),
    P = n(1226),
    A = n(981631),
    k = n(388032),
    D = n(298963);
function R(e) {
    let { participant: t } = e;
    return (0, i.jsx)(c.u, {
        text: k.intl.string(k.t["4EGMWL"]),
        children: (0, i.jsx)(u.P3F, {
            className: D.controlAction,
            onClick: (e) => {
                (0, p.g)((0, y.V9)(t.stream), !1),
                    e.stopPropagation(),
                    (0, w.Ws)(A.Odu.GO_LIVE, {
                        type: w.Qu.SCREEN_SHARE,
                        value: w.bk.DISABLED,
                        userId: t.user.id,
                    });
            },
            children: (0, i.jsx)(u.g5r, {
                size: "sm",
                color: u.TVs.colors.WHITE,
            }),
        }),
    });
}
function L(e) {
    let { participant: t } = e,
        n = t.user.id,
        a = (0, o.e7)([_.Z], () => {
            let e = (0, m.Z)(t.type);
            return _.Z.isLocalMute(t.user.id, e);
        }, [t]),
        l = (0, o.e7)([j.default], () => j.default.getId()),
        { hasVideo: f } = (0, I.Z)(t, l),
        h = a && f,
        p = r.useCallback(() => {
            d.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(c.u, {
        text: h ? k.intl.string(k.t.YqAjXy) : k.intl.string(k.t.w4m945),
        children: (0, i.jsx)(u.P3F, {
            className: D.controlAction,
            onClick: (e) => {
                e.stopPropagation(),
                    (0, w.Ws)(A.Odu.GO_LIVE, {
                        type: w.Qu.AUDIO,
                        value: h ? w.bk.ENABLED : w.bk.DISABLED,
                        userId: t.user.id,
                    }),
                    p();
            },
            children: h
                ? (0, i.jsx)(u.OyP, {
                      size: "sm",
                      color: "currentColor",
                  })
                : (0, i.jsx)(u.gj8, {
                      size: "sm",
                      color: "currentColor",
                  }),
        }),
    });
}
function M(e, t) {
    return (r) => {
        (0, w.Ws)(A.Odu.GO_LIVE, {
            type: w.Qu.GO_LIVE,
            value: w.bk.SETTINGS_OPENED,
            userId: e.user.id,
        }),
            r.stopPropagation(),
            (0, f.jW)(r, async () => {
                let { default: r } = await n.e("5704").then(n.bind(n, 360429));
                return (n) => {
                    var a, l;
                    return (0, i.jsx)(
                        r,
                        ((a = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                stream: e.stream,
                                exitFullscreen: () => {},
                                appContext: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        a),
                    );
                };
            });
    };
}
function z(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        a = (0, E.bp)(),
        s = n.user,
        d = (0, o.e7)([Z.default], () => {
            var e;
            return null != (e = Z.default.getUser(s.id)) ? e : s;
        }, [s]),
        f = t ? k.intl.string(k.t.tLxK4l) : k.intl.string(k.t.E5RDnK),
        { enabled: h } = (0, T.aq)("GoLiveTile");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: l()(D.controlBackground, { [D.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)("div", {
                    className: D.watchActionContainer,
                    children: (0, i.jsx)(c.u, {
                        text: f,
                        children: (0, i.jsxs)(u.P3F, {
                            className: D.watchButton,
                            onClick: () => {
                                (0, p.rn)(n.stream, {
                                    forceMultiple: !0,
                                    noFocus: !0,
                                }),
                                    r(),
                                    (0, w.Ws)(A.Odu.GO_LIVE, {
                                        type: w.Qu.GO_LIVE,
                                        value: w.bk.ENABLED,
                                        userId: n.user.id,
                                    });
                            },
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: k.intl.string(k.t.I6JG46),
                                }),
                                (0, i.jsx)(u.OgY, {
                                    size: "sm",
                                    color: "currentColor",
                                }),
                            ],
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: D.controls,
                children: [
                    (0, i.jsx)("div", {
                        className: D.controlUser,
                        children: (0, i.jsxs)("div", {
                            className: D.controlUserContainer,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    className: D.controlUserName,
                                    children: N.ZP.getName(n.stream.guildId, n.stream.channelId, s),
                                }),
                                (0, i.jsx)(v.ZP, {
                                    primaryGuild: d.primaryGuild,
                                    userId: d.id,
                                    containerClassName: D.guildTag,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, w.Ws)(A.Odu.GO_LIVE, {
                                            type: w.Qu.GO_LIVE,
                                            value: w.bk.GUILD_PROFILE_OPENED,
                                            userId: n.user.id,
                                        });
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: D.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    h && (0, i.jsx)(R, { participant: n }),
                                    (0, i.jsx)(L, { participant: n }),
                                    (0, i.jsx)(c.u, {
                                        text: k.intl.string(k.t["3D5yo/"]),
                                        children: (0, i.jsx)(u.P3F, {
                                            className: D.controlAction,
                                            onClick: M(n, a),
                                            children: (0, i.jsx)(u.xhG, {
                                                size: "sm",
                                                color: "currentColor",
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                    }),
                ],
            }),
        ],
    });
}
let V = new Set([A.jm8.ENDED, A.jm8.FAILED, A.jm8.PAUSED]),
    U = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: a, pinned: l } = e,
            s = (0, o.e7)([C.Z], () => C.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            c = (0, E.bp)(),
            d = null != s && V.has(s.state),
            f = null != s,
            p = (0, P.yA)(t.stream),
            m = (0, P.xN)(t.stream);
        return (!f && r) || d
            ? null
            : (0, i.jsxs)("div", {
                  className: D.tile,
                  children: [
                      f &&
                          !r &&
                          (0, i.jsx)(b.ZP, {
                              size: b.ZP.Sizes.SMALL,
                              className: D.liveIndicator,
                          }),
                      f
                          ? (0, i.jsx)("div", {
                                className: D.streamTile,
                                children: (0, i.jsx)(u.kL8, {
                                    "aria-label": k.intl.formatToPlainString(k.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: M(t, c),
                                    className: D.streamTile,
                                    style: { transform: "scale(".concat(p, ")") },
                                    children: (0, i.jsx)(x.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != m ? m : S.L.CONTAIN,
                                        popoutType: g.P.OVERLAY,
                                        focused: !r,
                                        selected: !1,
                                        wrapperClassName: r ? D.streamTileWrapper : void 0,
                                    }),
                                }),
                            })
                          : (0, i.jsx)("div", {
                                className: D.streamPreview,
                                children: (0, i.jsx)(O.Z, {
                                    noText: !0,
                                    className: D.absoluteFill,
                                    stream: t.stream,
                                }),
                            }),
                      r
                          ? null
                          : (0, i.jsx)(z, {
                                participant: t,
                                hasActiveStream: f,
                                onEnablePin: () => {
                                    l || (0, h.xh)(a);
                                },
                            }),
                  ],
              });
    });
