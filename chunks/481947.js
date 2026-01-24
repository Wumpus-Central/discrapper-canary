n.d(t, {
    Ay: () => U,
    Kc: () => k,
    Wr: () => M,
}),
    n(321073),
    n(938796),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(172218),
    l = n(665260),
    c = n(990078),
    u = n(397927),
    d = n(440594),
    f = n(58149),
    p = n(659974),
    _ = n(402216),
    h = n(609425),
    m = n(73392),
    g = n(769015),
    E = n(217356),
    y = n(559405),
    b = n(790381),
    O = n(266080),
    v = n(427262),
    A = n(652215),
    I = n(806931),
    S = n(544105),
    T = n(985018),
    C = n(77615);

function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}

function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = x(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let L = 16,
    j = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i, onAddHangStatusClicked: a, userId: o } = e,
            l = (e) => {
                e.stopPropagation(), null == a || a();
            };
        return i && null == t
            ? (0, r.jsx)(u.DUT, {
                  onClick: l,
                  className: C.Pt,
                  children: (0, r.jsx)(u.nm2, {
                      color: "currentColor",
                      className: s()(C.Kk, C.G8, n),
                  }),
              })
            : (0, r.jsx)(u.DUT, {
                  onClick: l,
                  className: C.Pt,
                  children: (0, r.jsx)(y.A, {
                      userId: o,
                      size: L,
                      hangStatusActivity: t,
                      className: s()(C.Kk, n),
                  }),
              });
    },
    M = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: s()(i, C.p_, n ? C.GT : C.m3),
            role: "group",
            children: t,
        });
    };

function k(e) {
    let {
        className: t,
        mute: n,
        localMute: i,
        localVideoDisabled: a,
        serverMute: o,
        deaf: f,
        serverDeaf: p,
        collapsed: h,
        video: m,
        isStreaming: g,
        disabled: E,
        isWatching: y,
        iconClassName: v,
        embeddedApplication: N,
        otherClientSessionType: w,
        voicePlatform: R,
        application: P,
        guildId: D,
        channelId: x,
        user: L,
        disconnected: M,
        hangStatusActivity: k,
        showHangStatus: U,
        isSelf: F,
        handleHoverHangStatus: B,
        handleHoverIcons: H,
        onAddHangStatusClicked: Y,
    } = e;
    if (h || E) return null;
    let W = [],
        K = V({
            iconClassName: v,
            mute: n,
            localMute: i,
            serverMute: o,
            deaf: f,
            serverDeaf: p,
        });
    m &&
        (a
            ? W.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: T.intl.string(T.t["PXMZ/+"]),
                          children: (0, r.jsx)(u.OCo, {
                              size: "md",
                              color: "currentColor",
                              className: s()(C.Kk, v),
                              colorClass: C.of,
                          }),
                      },
                      "video",
                  ),
              )
            : W.push(
                  (0, r.jsx)(
                      c.m,
                      {
                          text: T.intl.string(T.t.FlNoSV),
                          children: (0, r.jsx)(u.npA, {
                              size: "md",
                              color: "currentColor",
                              className: s()(C.Kk, v),
                          }),
                      },
                      "video",
                  ),
              )),
        M &&
            W.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: T.intl.string(T.t.HFwRpk),
                        children: (0, r.jsx)(u.EpV, {
                            className: s()(C.Kk, v),
                            color: u.LU0.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != N &&
            W.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: (0, d.A)(N.name),
                        children: (0, r.jsx)(u.bxf, {
                            size: "md",
                            color: "currentColor",
                            className: s()(C.Kk, v),
                        }),
                    },
                    "activity",
                ),
            ),
        w === S.f$.XBOX || R === I.J7.XBOX
            ? W.push(
                  (0, r.jsx)(
                      O.A,
                      {
                          className: s()(C.Kk, v),
                      },
                      "xbox",
                  ),
              )
            : (w === S.f$.PLAYSTATION || R === I.J7.PLAYSTATION) &&
              W.push(
                  (0, r.jsx)(
                      b.A,
                      {
                          className: s()(C.Kk, v),
                      },
                      "playstation",
                  ),
              ),
        y &&
            W.push(
                (0, r.jsx)(
                    c.m,
                    {
                        text: T.intl.string(T.t["JH1SJ+"]),
                        children: (0, r.jsx)(u.bMW, {
                            size: "xs",
                            color: "currentColor",
                            className: s()(C.Kk, v),
                        }),
                    },
                    "watch",
                ),
            ),
        g &&
            W.push(
                (0, r.jsx)(
                    _.Ay,
                    {
                        size: _.Ay.Sizes.SMALL,
                    },
                    "stream",
                ),
            );
    let z = null != P && !(0, l.Lt)(P.flags, A.gfo.EMBEDDED),
        q = null == k && z;
    return 0 !== W.length || 0 !== K.length || U || q
        ? (0, r.jsxs)("div", {
              className: s()(C.Pt, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: C.RL,
                      onMouseEnter: () => (null == H ? void 0 : H(!0)),
                      onMouseLeave: () => (null == H ? void 0 : H(!1)),
                      children: [K, W],
                  }),
                  U || q
                      ? (0, r.jsx)("div", {
                            className: C.RL,
                            onMouseEnter: () => (null == B ? void 0 : B(!0)),
                            onMouseLeave: () => (null == B ? void 0 : B(!1)),
                            children: q
                                ? (0, r.jsx)(
                                      G,
                                      {
                                          application: P,
                                          iconClassName: v,
                                          guildId: D,
                                          channelId: x,
                                          userId: L.id,
                                      },
                                      "".concat(L.id, "-game"),
                                  )
                                : (0, r.jsx)(j, {
                                      userId: L.id,
                                      hangStatusActivity: k,
                                      iconClassName: v,
                                      isSelf: F,
                                      onAddHangStatusClicked: Y,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let U = function (e) {
    var t;
    let {
            avatarContainerClass: n = C.H,
            userNameClassName: i = C.gr,
            size: a = A.OSZ.SMALL,
            selected: o = !1,
            disabled: l = !1,
            isOverlay: d = !1,
            ref: f,
        } = e,
        _ = D(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]),
        {
            onClick: g,
            onKeyDown: y,
            onDoubleClick: b,
            onContextMenu: O,
            onMouseLeave: I,
            onMouseDown: S,
            priority: N,
            speaking: R = !1,
            voiceDb: x = -1 / 0,
            latched: L,
            collapsed: j,
            mute: M,
            serverMute: U,
            guildId: G,
            nick: V,
            isGuest: F,
            flipped: B,
            className: H,
            overlap: Y,
            "aria-label": W,
            ringing: K,
            user: z,
        } = _,
        q = (0, h.A)({
            userId: z.id,
            guildId: G,
        }),
        Z = (0, m.a)({
            displayNameStyles: q,
        }),
        X = (0, p.v)({
            isSpeaking: R,
            isLatched: L && !M && !U,
            voiceDb: x,
        }),
        Q = (e) => {
            null == g || g(e, z);
        },
        J = (e) => {
            null == b || b(e, z);
        },
        $ = (e) => {
            null == O || O(e, z);
        },
        ee = (e) => {
            null == I || I(e, z);
        },
        et = (e) => {
            null == S || S(e, z);
        };

    function en() {
        return N && !j
            ? (0, r.jsx)(c.m, {
                  text: T.intl.string(T.t.BVK71i),
                  children: (0, r.jsx)("div", {
                      className: s()(C.G, {
                          [C.g4]: !M && !U && R,
                      }),
                  }),
              })
            : null;
    }

    function er() {
        return (0, r.jsx)("div", {
            className: s()(n, C.my, {
                [C.Jb]: a === A.OSZ.LARGE,
                [C.dT]: a === A.OSZ.SMALL,
            }),
            style: w(
                {
                    backgroundImage: "url(".concat(z.getAvatarURL(G, a === A.OSZ.LARGE ? 38 : 24), ")"),
                },
                X,
            ),
        });
    }

    function ei() {
        let e = (0, r.jsxs)("div", {
                className: s()(i, C.Xh, Z, {
                    [C.Pi]: !M && !U && R,
                }),
                children: [
                    null != V ? V : v.Ay.getName(z),
                    F
                        ? (0, r.jsxs)("span", {
                              className: C.IW,
                              children: ["\xa0", T.intl.string(T.t["pFO/Ph"])],
                          })
                        : "",
                ],
            }),
            t = {
                primaryGuild: z.primaryGuild,
                userId: z.id,
                contextGuildId: G,
                isOverlay: d,
                disableTooltip: !0,
                className: s()(C.fc, d && C.zW),
                profileViewedAnalytics: {
                    source: d ? A.JJy.OVERLAY : A.ThZ.VOICE_PANEL,
                },
            };
        return !j || d
            ? (0, r.jsx)(
                  E.A,
                  P(w({}, t), {
                      children: e,
                  }),
              )
            : null;
    }

    function ea() {
        return (0, r.jsx)(
            k,
            w(
                {
                    disabled: l,
                },
                _,
            ),
        );
    }
    return (0, r.jsx)(u.sqX, {
        ref: f,
        className: s()(H, {
            [C.q7]: !0,
            [C.EF]: Y,
            [C.wH]: o,
            [C.vk]: null != g,
            [C.L9]: a === A.OSZ.SMALL,
            [C.p8]: a === A.OSZ.LARGE,
            [C.r9]: !o && l,
            [C.DF]: K,
        }),
        onClick: Q,
        onDoubleClick: J,
        onContextMenu: $,
        onMouseLeave: ee,
        onMouseDown: et,
        onKeyDown: y,
        "aria-label": null != (t = null != W ? W : V) ? t : z.username,
        focusProps: {
            offset: {
                right: 4,
            },
        },
        children: (0, r.jsxs)("div", {
            className: s()(C.Qs, {
                [C.zq]: B,
            }),
            children: [en(), er(), ei(), ea()],
        }),
    });
};

function G(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: l, userId: u } = e,
        [d, p] = i.useState(!1),
        _ = (0, o.K)((e) => p(e));
    i.useEffect(() => {
        d &&
            f.Ay.trackWithMetadata(A.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: l,
                guild_id: a,
                user_id: u,
            });
    }, [t.id, l, a, u, d]);
    let h = () => {
        f.Ay.trackWithMetadata(A.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: l,
            guild_id: a,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(c.m, {
        text: T.intl.formatToPlainString(T.t.Sq9xJ7, {
            game: t.name,
        }),
        "aria-label": T.intl.formatToPlainString(T.t.Sq9xJ7, {
            game: t.name,
        }),
        children: (0, r.jsx)(g.A, {
            ref: _,
            className: s()(C.Kk, C.Gt, n),
            game: t,
            size: g.M.XSMALL,
            onMouseEnter: h,
        }),
    });
}

function V(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: o, serverDeaf: l } = e,
        d = [];
    if (n) {
        let e,
            n = () => (i ? T.intl.string(T.t.Q8Uzof) : a ? T.intl.string(T.t.uLddbQ) : T.intl.string(T.t.tjtv3P));
        e = a || i ? u.O1p : u.z0P;
        let o = (0, r.jsx)(e, {
            className: s()(C.Kk, t, {
                [C.DU]: a,
            }),
            color: "currentColor",
        });
        d.push(
            (0, r.jsx)(
                c.m,
                {
                    text: n(),
                    children: o,
                },
                "mute",
            ),
        );
    }
    if (l || o) {
        let e = l ? u.TJE : u.cQT,
            n = (0, r.jsx)(e, {
                className: s()(C.Kk, t, {
                    [C.DU]: l,
                }),
                color: "currentColor",
            });
        d.push(
            (0, r.jsx)(
                c.m,
                {
                    text: l ? T.intl.string(T.t.btxSdB) : T.intl.string(T.t.NjmiOL),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return d;
}
