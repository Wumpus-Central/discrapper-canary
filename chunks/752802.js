n.d(t, {
    Z: () => G,
    q: () => W,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(46973),
    c = n(481060),
    u = n(846027),
    d = n(239091),
    h = n(765250),
    p = n(872810),
    f = n(414910),
    m = n(598006),
    g = n(194082),
    y = n(569545),
    O = n(871118),
    v = n(172751),
    E = n(728285),
    b = n(352978),
    _ = n(833519),
    S = n(839662),
    x = n(199902),
    I = n(314897),
    C = n(131951),
    j = n(594174),
    N = n(5192),
    Z = n(444295),
    w = n(32300),
    T = n(1226),
    P = n(981631),
    A = n(388032),
    D = n(379746);
function k(e) {
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
function L(e, t) {
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
function M(e) {
    let { participant: t } = e;
    return (0, i.jsx)(c.aML, {
        "data-migration-pending": !0,
        text: A.intl.string(A.t["4EGMWL"]),
        children: (e) => {
            var { onClick: n } = e,
                r = L(e, ["onClick"]);
            return (0, i.jsx)(
                c.P3F,
                R(k({}, r), {
                    className: D.controlAction,
                    onClick: (e) => {
                        null == n || n(),
                            (0, p.g)((0, y.V9)(t.stream), !1),
                            e.stopPropagation(),
                            (0, Z.Ws)(P.Odu.GO_LIVE, {
                                type: Z.Qu.SCREEN_SHARE,
                                value: Z.bk.DISABLED,
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
function z(e) {
    let { participant: t } = e,
        n = t.user.id,
        l = (0, a.e7)([C.Z], () => {
            let e = (0, f.Z)(t.type);
            return C.Z.isLocalMute(t.user.id, e);
        }, [t]),
        o = (0, a.e7)([I.default], () => I.default.getId()),
        { hasVideo: d } = (0, S.Z)(t, o),
        h = l && d,
        p = r.useCallback(() => {
            u.Z.toggleLocalMute(n, s.Yn.STREAM);
        }, [n]);
    return (0, i.jsx)(c.aML, {
        "data-migration-pending": !0,
        text: h ? A.intl.string(A.t.YqAjXy) : A.intl.string(A.t.w4m945),
        children: (e) => {
            var { onClick: n } = e,
                r = L(e, ["onClick"]);
            return (0, i.jsx)(
                c.P3F,
                R(k({}, r), {
                    className: D.controlAction,
                    onClick: (e) => {
                        e.stopPropagation(),
                            (0, Z.Ws)(P.Odu.GO_LIVE, {
                                type: Z.Qu.AUDIO,
                                value: h ? Z.bk.ENABLED : Z.bk.DISABLED,
                                userId: t.user.id,
                            }),
                            null == n || n(),
                            p();
                    },
                    children: h
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
function V(e, t, r) {
    return (l) => {
        (0, Z.Ws)(P.Odu.GO_LIVE, {
            type: Z.Qu.GO_LIVE,
            value: Z.bk.SETTINGS_OPENED,
            userId: e.user.id,
        }),
            l.stopPropagation(),
            null == r || r(),
            (0, d.jW)(l, async () => {
                let { default: r } = await n.e("5704").then(n.bind(n, 360429));
                return (n) =>
                    (0, i.jsx)(
                        r,
                        R(k({}, n), {
                            stream: e.stream,
                            exitFullscreen: () => {},
                            appContext: t,
                        }),
                    );
            });
    };
}
function U(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: r } = e,
        l = (0, E.bp)(),
        s = n.user,
        u = (0, a.e7)([j.default], () => {
            var e;
            return null != (e = j.default.getUser(s.id)) ? e : s;
        }, [s]),
        d = t ? A.intl.string(A.t.tLxK4l) : A.intl.string(A.t.E5RDnK),
        { enabled: h } = (0, w.aq)("GoLiveTile");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: o()(D.controlBackground, { [D.controlsWithActiveStream]: t }) }),
            !t &&
                (0, i.jsx)("div", {
                    className: D.watchActionContainer,
                    children: (0, i.jsx)(c.aML, {
                        "data-migration-pending": !0,
                        text: d,
                        children: (e) =>
                            (0, i.jsxs)(
                                c.P3F,
                                R(k({}, e), {
                                    className: D.watchButton,
                                    onClick: () => {
                                        var t;
                                        null == (t = e.onClick) || t.call(e),
                                            (0, p.rn)(n.stream, {
                                                forceMultiple: !0,
                                                noFocus: !0,
                                            }),
                                            r(),
                                            (0, Z.Ws)(P.Odu.GO_LIVE, {
                                                type: Z.Qu.GO_LIVE,
                                                value: Z.bk.ENABLED,
                                                userId: n.user.id,
                                            });
                                    },
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: A.intl.string(A.t.I6JG46),
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
                className: D.controls,
                children: [
                    (0, i.jsx)("div", {
                        className: D.controlUser,
                        children: (0, i.jsxs)("div", {
                            className: D.controlUserContainer,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    className: D.controlUserName,
                                    children: N.ZP.getName(n.stream.guildId, n.stream.channelId, s),
                                }),
                                (0, i.jsx)(v.ZP, {
                                    primaryGuild: u.primaryGuild,
                                    userId: u.id,
                                    containerClassName: D.guildTag,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, Z.Ws)(P.Odu.GO_LIVE, {
                                            type: Z.Qu.GO_LIVE,
                                            value: Z.bk.GUILD_PROFILE_OPENED,
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
                                    h && (0, i.jsx)(M, { participant: n }),
                                    (0, i.jsx)(z, { participant: n }),
                                    (0, i.jsx)(c.aML, {
                                        "data-migration-pending": !0,
                                        text: A.intl.string(A.t["3D5yo/"]),
                                        children: (e) => {
                                            var { onClick: t } = e,
                                                r = L(e, ["onClick"]);
                                            return (0, i.jsx)(
                                                c.P3F,
                                                R(k({}, r), {
                                                    className: D.controlAction,
                                                    onClick: V(n, l, t),
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
let W = new Set([P.jm8.ENDED, P.jm8.FAILED, P.jm8.PAUSED]),
    G = r.memo(function (e) {
        let { participant: t, width: n, locked: r, widgetId: l, pinned: o } = e,
            s = (0, a.e7)([x.Z], () => x.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            u = (0, E.bp)(),
            d = null != s && W.has(s.state),
            p = null != s,
            f = (0, T.yA)(t.stream),
            y = (0, T.xN)(t.stream);
        return (!p && r) || d
            ? null
            : (0, i.jsxs)("div", {
                  className: D.tile,
                  children: [
                      p &&
                          !r &&
                          (0, i.jsx)(g.ZP, {
                              size: g.ZP.Sizes.SMALL,
                              className: D.liveIndicator,
                          }),
                      p
                          ? (0, i.jsx)("div", {
                                className: D.streamTile,
                                children: (0, i.jsx)(c.kL8, {
                                    "aria-label": A.intl.formatToPlainString(A.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: V(t, u),
                                    className: D.streamTile,
                                    style: { transform: "scale(".concat(f, ")") },
                                    children: (0, i.jsx)(_.Z, {
                                        participant: t,
                                        width: n,
                                        fit: null != y ? y : b.L.CONTAIN,
                                        popoutType: m.P.OVERLAY,
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
                          : (0, i.jsx)(U, {
                                participant: t,
                                hasActiveStream: p,
                                onEnablePin: () => {
                                    o || (0, h.xh)(l);
                                },
                            }),
                  ],
              });
    });
