n.d(t, { Z: () => W }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(46973),
    c = n(481060),
    u = n(846027),
    d = n(239091),
    p = n(765250),
    h = n(872810),
    f = n(40851),
    m = n(414910),
    g = n(194082),
    y = n(569545),
    O = n(871118),
    v = n(172751),
    b = n(352978),
    E = n(833519),
    _ = n(839662),
    S = n(199902),
    x = n(314897),
    I = n(131951),
    C = n(594174),
    j = n(5192),
    w = n(444295),
    N = n(32300),
    Z = n(1226),
    T = n(981631),
    P = n(388032),
    A = n(379746);
function D(e) {
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
function R(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
            (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function L(e) {
    let { participant: t } = e;
    return (0, i.jsx)(c.ua7, {
        text: P.intl.string(P.t["4EGMWF"]),
        children: (e) => {
            var { onClick: n } = e,
                r = R(e, ["onClick"]);
            return (0, i.jsx)(
                c.P3F,
                k(D({}, r), {
                    className: A.controlAction,
                    onClick: (e) => {
                        null == n || n(),
                            (0, h.g)((0, y.V9)(t.stream), !1),
                            e.stopPropagation(),
                            (0, w.Ws)(T.Odu.GO_LIVE, {
                                type: w.Qu.SCREEN_SHARE,
                                value: w.bk.DISABLED,
                                userId: t.user.id,
                            });
                    },
                    children: (0, i.jsx)(c.g5r, {
                        size: "sm",
                        color: c.TVs.colors.WHITE,
                    }),
                }),
            );
        },
    });
}
function M(e) {
    let { participant: t } = e,
        n = t.user.id,
        l = (0, a.e7)([I.Z], () => {
            let e = (0, m.Z)(t.type);
            return I.Z.isLocalMute(t.user.id, e);
        }, [t]),
        o = (0, a.e7)([x.default], () => x.default.getId()),
        { hasVideo: d } = (0, _.Z)(t, o),
        p = l && d,
        h = r.useCallback(() => {
            u.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(c.ua7, {
        text: p ? P.intl.string(P.t.YqAjX1) : P.intl.string(P.t["w4m94+"]),
        children: (e) => {
            var { onClick: n } = e,
                r = R(e, ["onClick"]);
            return (0, i.jsx)(
                c.P3F,
                k(D({}, r), {
                    className: A.controlAction,
                    onClick: (e) => {
                        e.stopPropagation(),
                            (0, w.Ws)(T.Odu.GO_LIVE, {
                                type: w.Qu.AUDIO,
                                value: p ? w.bk.ENABLED : w.bk.DISABLED,
                                userId: t.user.id,
                            }),
                            null == n || n(),
                            h();
                    },
                    children: p
                        ? (0, i.jsx)(c.OyP, {
                              size: "sm",
                              color: "currentColor",
                          })
                        : (0, i.jsx)(c.gj8, {
                              size: "sm",
                              color: "currentColor",
                          }),
                }),
            );
        },
    });
}
function z(e, t, r) {
    return (l) => {
        (0, w.Ws)(T.Odu.GO_LIVE, {
            type: w.Qu.GO_LIVE,
            value: w.bk.SETTINGS_OPENED,
            userId: e.user.id,
        }),
            l.stopPropagation(),
            null == r || r(),
            (0, d.jW)(l, async () => {
                let { default: r } = await n.e("5704").then(n.bind(n, 360429));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        k(D({}, n), {
                            stream: e.stream,
                            exitFullscreen: () => {},
                            appContext: t,
                        }),
                    );
            });
    };
}
function V(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        l = (0, f.bp)(),
        s = n.user,
        u = (0, a.e7)([C.default], () => {
            var e;
            return null != (e = C.default.getUser(s.id)) ? e : s;
        }, [s]),
        d = t ? P.intl.string(P.t.tLxK4u) : P.intl.string(P.t.E5RDnJ),
        { enabled: p } = (0, N.aq)("GoLiveTile");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: o()(A.controlBackground, { [A.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)("div", {
                    className: A.watchActionContainer,
                    children: (0, i.jsx)(c.ua7, {
                        text: d,
                        children: (e) =>
                            (0, i.jsxs)(
                                c.P3F,
                                k(D({}, e), {
                                    className: A.watchButton,
                                    onClick: () => {
                                        var t;
                                        null == (t = e.onClick) || t.call(e),
                                            (0, h.rn)(n.stream, {
                                                forceMultiple: !0,
                                                noFocus: !0,
                                            }),
                                            r(),
                                            (0, w.Ws)(T.Odu.GO_LIVE, {
                                                type: w.Qu.GO_LIVE,
                                                value: w.bk.ENABLED,
                                                userId: n.user.id,
                                            });
                                    },
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: P.intl.string(P.t["I6JG4+"]),
                                        }),
                                        (0, i.jsx)(c.OgY, {
                                            size: "sm",
                                            color: "currentColor",
                                        }),
                                    ],
                                }),
                            ),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: A.controls,
                children: [
                    (0, i.jsx)("div", {
                        className: A.controlUser,
                        children: (0, i.jsxs)("div", {
                            className: A.controlUserContainer,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    className: A.controlUserName,
                                    children: j.ZP.getName(n.stream.guildId, n.stream.channelId, s),
                                }),
                                (0, i.jsx)(v.ZP, {
                                    primaryGuild: u.primaryGuild,
                                    userId: u.id,
                                    containerClassName: A.guildTag,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, w.Ws)(T.Odu.GO_LIVE, {
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
                        className: A.controlActions,
                        children:
                            t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    p && (0, i.jsx)(L, { participant: n }),
                                    (0, i.jsx)(M, { participant: n }),
                                    (0, i.jsx)(c.ua7, {
                                        text: P.intl.string(P.t["3D5yo6"]),
                                        children: (e) => {
                                            var { onClick: t } = e,
                                                r = R(e, ["onClick"]);
                                            return (0, i.jsx)(
                                                c.P3F,
                                                k(D({}, r), {
                                                    className: A.controlAction,
                                                    onClick: z(n, l, t),
                                                    children: (0, i.jsx)(c.xhG, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                            );
                                        },
                                    }),
                                ],
                            }),
                    }),
                ],
            }),
        ],
    });
}
let U = new Set([T.jm8.ENDED, T.jm8.FAILED, T.jm8.PAUSED]),
    W = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: l, pinned: o } = e,
            s = (0, a.e7)([S.Z], () => S.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            u = (0, f.bp)(),
            d = null != s && U.has(s.state),
            h = null != s,
            m = (0, Z.yA)(t.stream),
            y = (0, Z.xN)(t.stream);
        return (!h && r) || d
            ? null
            : (0, i.jsxs)("div", {
                  className: A.tile,
                  children: [
                      h &&
                          !r &&
                          (0, i.jsx)(g.ZP, {
                              size: g.ZP.Sizes.SMALL,
                              className: A.liveIndicator,
                          }),
                      h
                          ? (0, i.jsx)("div", {
                                className: A.streamTile,
                                children: (0, i.jsx)(c.kL8, {
                                    "aria-label": P.intl.formatToPlainString(P.t.gHPz3d, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: z(t, u),
                                    className: A.streamTile,
                                    style: { transform: "scale(".concat(m, ")") },
                                    children: (0, i.jsx)(E.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != y ? y : b.L.CONTAIN,
                                        inPopout: !0,
                                        focused: !r,
                                        selected: !1,
                                        wrapperClassName: r ? A.streamTileWrapper : void 0,
                                        inOverlayPopout: !0,
                                    }),
                                }),
                            })
                          : (0, i.jsx)("div", {
                                className: A.streamPreview,
                                children: (0, i.jsx)(O.Z, {
                                    noText: !0,
                                    className: A.absoluteFill,
                                    stream: t.stream,
                                }),
                            }),
                      r
                          ? null
                          : (0, i.jsx)(V, {
                                participant: t,
                                hasActiveStream: h,
                                onEnablePin: () => {
                                    o || (0, p.xh)(l);
                                },
                            }),
                  ],
              });
    });
