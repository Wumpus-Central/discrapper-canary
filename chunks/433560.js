n.d(t, {
    O: () => z,
    d: () => G,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(417597),
    s = n(205693),
    c = n(435371),
    u = n(397927),
    d = n(827343),
    p = n(442433),
    h = n(391973),
    f = n(401843),
    m = n(520698),
    g = n(164617),
    y = n(402216),
    A = n(652896),
    O = n(607407),
    E = n(534400),
    v = n(267102),
    b = n(401901),
    S = n(203355),
    x = n(110234),
    j = n(616356),
    I = n(961350),
    N = n(430452),
    w = n(287809),
    T = n(562153),
    C = n(810412),
    _ = n(589051),
    P = n(761661),
    D = n(652215),
    R = n(985018),
    L = n(444638);
function k(e) {
    let { participant: t } = e;
    return (0, i.jsx)(c.m_, {
        text: R.intl.string(R.t["4EGMWL"]),
        children: (0, i.jsx)(u.DUT, {
            className: L.IF,
            onClick: (e) => {
                (0, f.vN)((0, A._z)(t.stream), !1),
                    e.stopPropagation(),
                    (0, C.YX)(D.uss.GO_LIVE, {
                        type: C.Z5.SCREEN_SHARE,
                        value: C.IP.DISABLED,
                        userId: t.user.id,
                    });
            },
            children: (0, i.jsx)(u.GT3, {
                size: "sm",
                color: u.LU0.colors.WHITE,
            }),
        }),
    });
}
function M(e) {
    let { participant: t } = e,
        n = t.user.id,
        l = (0, o.bG)([N.A], () => {
            let e = (0, m.A)(t.type);
            return N.A.isLocalMute(t.user.id, e);
        }, [t]),
        a = (0, o.bG)([I.default], () => I.default.getId()),
        { hasVideo: p } = (0, x.A)(t, a),
        h = l && p,
        f = r.useCallback(() => {
            d.A.toggleLocalMute(n, s.x.STREAM);
        }, [n]);
    return (0, i.jsx)(c.m_, {
        text: h ? R.intl.string(R.t.YqAjXy) : R.intl.string(R.t.w4m945),
        children: (0, i.jsx)(u.DUT, {
            className: L.IF,
            onClick: (e) => {
                e.stopPropagation(),
                    (0, C.YX)(D.uss.GO_LIVE, {
                        type: C.Z5.AUDIO,
                        value: h ? C.IP.ENABLED : C.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    f();
            },
            children: h
                ? (0, i.jsx)(u._RO, {
                      size: "sm",
                      color: "currentColor",
                  })
                : (0, i.jsx)(u.HKD, {
                      size: "sm",
                      color: "currentColor",
                  }),
        }),
    });
}
function V(e, t) {
    return (r) => {
        (0, C.YX)(D.uss.GO_LIVE, {
            type: C.Z5.GO_LIVE,
            value: C.IP.SETTINGS_OPENED,
            userId: e.user.id,
        }),
            r.stopPropagation(),
            (0, p.L3)(r, async () => {
                let { default: r } = await n.e("61361").then(n.bind(n, 663912));
                return (n) => {
                    var l, a;
                    return (0, i.jsx)(
                        r,
                        ((l = (function (e) {
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
                        (a = a =
                            {
                                stream: e.stream,
                                exitFullscreen: () => {},
                                appContext: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        l),
                    );
                };
            });
    };
}
function U(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        l = (0, v.Us)(),
        s = n.user,
        d = (0, o.bG)([w.default], () => {
            var e;
            return null != (e = w.default.getUser(s.id)) ? e : s;
        }, [s]),
        p = t ? R.intl.string(R.t.tLxK4l) : R.intl.string(R.t.E5RDnK),
        { enabled: h } = (0, _.QC)("GoLiveTile");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: a()(L.MI, { [L.te]: t }) }),
            !t &&
                (0, i.jsx)("div", {
                    className: L.TP,
                    children: (0, i.jsx)(c.m_, {
                        text: p,
                        children: (0, i.jsxs)(u.DUT, {
                            className: L.kx,
                            onClick: () => {
                                (0, f.A9)(n.stream, {
                                    forceMultiple: !0,
                                    noFocus: !0,
                                }),
                                    r(),
                                    (0, C.YX)(D.uss.GO_LIVE, {
                                        type: C.Z5.GO_LIVE,
                                        value: C.IP.ENABLED,
                                        userId: n.user.id,
                                    });
                            },
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: R.intl.string(R.t.I6JG46),
                                }),
                                (0, i.jsx)(u.vAm, {
                                    size: "sm",
                                    color: "currentColor",
                                }),
                            ],
                        }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: L.ne,
                children: [
                    (0, i.jsx)("div", {
                        className: L.fL,
                        children: (0, i.jsxs)("div", {
                            className: L.K8,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    className: L.yb,
                                    children: T.Ay.getName(n.stream.guildId, n.stream.channelId, s),
                                }),
                                (0, i.jsx)(E.Ay, {
                                    primaryGuild: d.primaryGuild,
                                    userId: d.id,
                                    containerClassName: L.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, C.YX)(D.uss.GO_LIVE, {
                                            type: C.Z5.GO_LIVE,
                                            value: C.IP.GUILD_PROFILE_OPENED,
                                            userId: n.user.id,
                                        });
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: L.FO,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    h && (0, i.jsx)(k, { participant: n }),
                                    (0, i.jsx)(M, { participant: n }),
                                    (0, i.jsx)(c.m_, {
                                        text: R.intl.string(R.t["3D5yo/"]),
                                        children: (0, i.jsx)(u.DUT, {
                                            className: L.IF,
                                            onClick: V(n, l),
                                            children: (0, i.jsx)(u.jNK, {
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
let z = new Set([D.XYD.ENDED, D.XYD.FAILED, D.XYD.PAUSED]),
    G = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: l, pinned: a } = e,
            s = (0, o.bG)([j.A], () => j.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            c = (0, v.Us)(),
            d = null != s && z.has(s.state),
            p = null != s,
            f = (0, P.dh)(t.stream),
            m = (0, P.XG)(t.stream);
        return (!p && r) || d
            ? null
            : (0, i.jsxs)("div", {
                  className: L.Vs,
                  children: [
                      p &&
                          !r &&
                          (0, i.jsx)(y.Ay, {
                              size: y.Ay.Sizes.SMALL,
                              className: L.Ok,
                          }),
                      p
                          ? (0, i.jsx)("div", {
                                className: L.X$,
                                children: (0, i.jsx)(u.sqX, {
                                    "aria-label": R.intl.formatToPlainString(R.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: V(t, c),
                                    className: L.X$,
                                    style: { transform: "scale(".concat(f, ")") },
                                    children: (0, i.jsx)(S.A, {
                                        participant: t,
                                        width: n,
                                        fit: null != m ? m : b.$.CONTAIN,
                                        popoutType: g.N.OVERLAY,
                                        focused: !r,
                                        selected: !1,
                                        wrapperClassName: r ? L.Gq : void 0,
                                    }),
                                }),
                            })
                          : (0, i.jsx)("div", {
                                className: L.Rh,
                                children: (0, i.jsx)(O.A, {
                                    noText: !0,
                                    className: L.HL,
                                    stream: t.stream,
                                }),
                            }),
                      r
                          ? null
                          : (0, i.jsx)(U, {
                                participant: t,
                                hasActiveStream: p,
                                onEnablePin: () => {
                                    a || (0, h.v0)(l);
                                },
                            }),
                  ],
              });
    });
