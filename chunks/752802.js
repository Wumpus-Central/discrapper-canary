n.d(t, {
    Z: () => W,
    q: () => U,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(46973),
    u = n(481060),
    c = n(846027),
    d = n(239091),
    p = n(765250),
    h = n(872810),
    f = n(414910),
    m = n(194082),
    g = n(569545),
    y = n(871118),
    O = n(172751),
    E = n(728285),
    v = n(352978),
    S = n(833519),
    b = n(839662),
    x = n(199902),
    j = n(314897),
    I = n(131951),
    C = n(594174),
    Z = n(5192),
    N = n(444295),
    w = n(32300),
    T = n(1226),
    _ = n(981631),
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
function R(e, t) {
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
function k(e, t) {
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
    return (0, i.jsx)(u.aML, {
        "data-migration-pending": !0,
        text: P.intl.string(P.t["4EGMWL"]),
        children: (e) => {
            var { onClick: n } = e,
                r = k(e, ["onClick"]);
            return (0, i.jsx)(
                u.P3F,
                R(D({}, r), {
                    className: A.controlAction,
                    onClick: (e) => {
                        null == n || n(),
                            (0, h.g)((0, g.V9)(t.stream), !1),
                            e.stopPropagation(),
                            (0, N.Ws)(_.Odu.GO_LIVE, {
                                type: N.Qu.SCREEN_SHARE,
                                value: N.bk.DISABLED,
                                userId: t.user.id,
                            });
                    },
                    children: (0, i.jsx)(u.g5r, {
                        size: "sm",
                        color: u.TVs.colors.WHITE,
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
            let e = (0, f.Z)(t.type);
            return I.Z.isLocalMute(t.user.id, e);
        }, [t]),
        o = (0, a.e7)([j.default], () => j.default.getId()),
        { hasVideo: d } = (0, b.Z)(t, o),
        p = l && d,
        h = r.useCallback(() => {
            c.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(u.aML, {
        "data-migration-pending": !0,
        text: p ? P.intl.string(P.t.YqAjXy) : P.intl.string(P.t.w4m945),
        children: (e) => {
            var { onClick: n } = e,
                r = k(e, ["onClick"]);
            return (0, i.jsx)(
                u.P3F,
                R(D({}, r), {
                    className: A.controlAction,
                    onClick: (e) => {
                        e.stopPropagation(),
                            (0, N.Ws)(_.Odu.GO_LIVE, {
                                type: N.Qu.AUDIO,
                                value: p ? N.bk.ENABLED : N.bk.DISABLED,
                                userId: t.user.id,
                            }),
                            null == n || n(),
                            h();
                    },
                    children: p
                        ? (0, i.jsx)(u.OyP, {
                              size: "sm",
                              color: "currentColor",
                          })
                        : (0, i.jsx)(u.gj8, {
                              size: "sm",
                              color: "currentColor",
                          }),
                }),
            );
        },
    });
}
function V(e, t, r) {
    return (l) => {
        (0, N.Ws)(_.Odu.GO_LIVE, {
            type: N.Qu.GO_LIVE,
            value: N.bk.SETTINGS_OPENED,
            userId: e.user.id,
        }),
            l.stopPropagation(),
            null == r || r(),
            (0, d.jW)(l, async () => {
                let { default: r } = await n.e("5704").then(n.bind(n, 360429));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        R(D({}, n), {
                            stream: e.stream,
                            exitFullscreen: () => {},
                            appContext: t,
                        }),
                    );
            });
    };
}
function z(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        l = (0, E.bp)(),
        s = n.user,
        c = (0, a.e7)([C.default], () => {
            var e;
            return null != (e = C.default.getUser(s.id)) ? e : s;
        }, [s]),
        d = t ? P.intl.string(P.t.tLxK4l) : P.intl.string(P.t.E5RDnK),
        { enabled: p } = (0, w.aq)("GoLiveTile");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: o()(A.controlBackground, { [A.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)("div", {
                    className: A.watchActionContainer,
                    children: (0, i.jsx)(u.aML, {
                        "data-migration-pending": !0,
                        text: d,
                        children: (e) =>
                            (0, i.jsxs)(
                                u.P3F,
                                R(D({}, e), {
                                    className: A.watchButton,
                                    onClick: () => {
                                        var t;
                                        null == (t = e.onClick) || t.call(e),
                                            (0, h.rn)(n.stream, {
                                                forceMultiple: !0,
                                                noFocus: !0,
                                            }),
                                            r(),
                                            (0, N.Ws)(_.Odu.GO_LIVE, {
                                                type: N.Qu.GO_LIVE,
                                                value: N.bk.ENABLED,
                                                userId: n.user.id,
                                            });
                                    },
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: P.intl.string(P.t.I6JG46),
                                        }),
                                        (0, i.jsx)(u.OgY, {
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
                                (0, i.jsx)(u.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    className: A.controlUserName,
                                    children: Z.ZP.getName(n.stream.guildId, n.stream.channelId, s),
                                }),
                                (0, i.jsx)(O.ZP, {
                                    primaryGuild: c.primaryGuild,
                                    userId: c.id,
                                    containerClassName: A.guildTag,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, N.Ws)(_.Odu.GO_LIVE, {
                                            type: N.Qu.GO_LIVE,
                                            value: N.bk.GUILD_PROFILE_OPENED,
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
                                    (0, i.jsx)(u.aML, {
                                        "data-migration-pending": !0,
                                        text: P.intl.string(P.t["3D5yo/"]),
                                        children: (e) => {
                                            var { onClick: t } = e,
                                                r = k(e, ["onClick"]);
                                            return (0, i.jsx)(
                                                u.P3F,
                                                R(D({}, r), {
                                                    className: A.controlAction,
                                                    onClick: V(n, l, t),
                                                    children: (0, i.jsx)(u.xhG, {
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
let U = new Set([_.jm8.ENDED, _.jm8.FAILED, _.jm8.PAUSED]),
    W = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: l, pinned: o } = e,
            s = (0, a.e7)([x.Z], () => x.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            c = (0, E.bp)(),
            d = null != s && U.has(s.state),
            h = null != s,
            f = (0, T.yA)(t.stream),
            g = (0, T.xN)(t.stream);
        return (!h && r) || d
            ? null
            : (0, i.jsxs)("div", {
                  className: A.tile,
                  children: [
                      h &&
                          !r &&
                          (0, i.jsx)(m.ZP, {
                              size: m.ZP.Sizes.SMALL,
                              className: A.liveIndicator,
                          }),
                      h
                          ? (0, i.jsx)("div", {
                                className: A.streamTile,
                                children: (0, i.jsx)(u.kL8, {
                                    "aria-label": P.intl.formatToPlainString(P.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: V(t, c),
                                    className: A.streamTile,
                                    style: { transform: "scale(".concat(f, ")") },
                                    children: (0, i.jsx)(S.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != g ? g : v.L.CONTAIN,
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
                                children: (0, i.jsx)(y.Z, {
                                    noText: !0,
                                    className: A.absoluteFill,
                                    stream: t.stream,
                                }),
                            }),
                      r
                          ? null
                          : (0, i.jsx)(z, {
                                participant: t,
                                hasActiveStream: h,
                                onEnablePin: () => {
                                    o || (0, p.xh)(l);
                                },
                            }),
                  ],
              });
    });
