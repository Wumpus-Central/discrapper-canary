n.d(t, {
    ZP: () => q,
    eJ: () => W,
    nm: () => K,
}),
    n(539854),
    n(997841),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(434650),
    d = n(40851),
    f = n(456100),
    _ = n(657305),
    p = n(367907),
    h = n(906732),
    m = n(522651),
    g = n(795318),
    E = n(194082),
    b = n(7284),
    y = n(925329),
    O = n(340044),
    v = n(223135),
    I = n(880395),
    T = n(314897),
    S = n(592125),
    A = n(979651),
    C = n(574254),
    N = n(374129),
    R = n(639351),
    P = n(630388),
    w = n(51144),
    D = n(91088),
    x = n(981631),
    L = n(354459),
    j = n(927923),
    M = n(388032),
    k = n(368736);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let H = 16,
    Y = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  l.u,
                  {
                      text: M.intl.string(M.t.qstQub),
                      children: (0, r.jsx)(c.svS, { className: o()(k.icon, n) }),
                  },
                  "add-status",
              )
            : (0, r.jsx)(v.Z, {
                  size: H,
                  hangStatusActivity: t,
                  className: o()(k.icon, n),
              });
    },
    W = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: o()(i, k.list, n ? k.listCollapse : k.listDefault),
            role: "group",
            children: t,
        });
    };
function K(e) {
    let {
            className: t,
            mute: n,
            localMute: i,
            localVideoDisabled: a,
            serverMute: s,
            deaf: u,
            serverDeaf: d,
            collapsed: p,
            video: h,
            isStreaming: m,
            disabled: g,
            isWatching: b,
            iconClassName: y,
            embeddedApplication: O,
            otherClientSessionType: v,
            voicePlatform: I,
            application: T,
            guildId: S,
            channelId: A,
            user: C,
            disconnected: w,
            hangStatusActivity: D,
            showHangStatus: U,
            isSelf: G,
            handleHoverHangStatus: B,
            handleHoverIcons: Z,
        } = e,
        { enabled: F } = f.c.getCurrentConfig({ location: "VoiceUserIcons" }, { autoTrackExposure: !0 });
    if (p || g) return null;
    let V = [],
        H = (0, r.jsx)(Q, {
            iconClassName: y,
            mute: n,
            localMute: i,
            serverMute: s,
            deaf: u,
            serverDeaf: d,
        });
    h &&
        (a
            ? V.push(
                  (0, r.jsx)(
                      l.u,
                      {
                          text: M.intl.string(M.t["PXMZ//"]),
                          children: (0, r.jsx)(c.Amn, {
                              size: "md",
                              color: "currentColor",
                              className: o()(k.icon, y),
                              colorClass: k.strikethrough,
                          }),
                      },
                      "video",
                  ),
              )
            : V.push(
                  (0, r.jsx)(
                      l.u,
                      {
                          text: M.intl.string(M.t.FlNoSU),
                          children: (0, r.jsx)(c.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: o()(k.icon, y),
                          }),
                      },
                      "video",
                  ),
              )),
        w &&
            V.push(
                (0, r.jsx)(
                    l.u,
                    {
                        text: M.intl.string(M.t.HFwRpq),
                        children: (0, r.jsx)(c.Mgn, {
                            className: o()(k.icon, y),
                            color: c.TVs.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            );
    let W = F ? c.iWm : c.nG3;
    null != O &&
        V.push(
            (0, r.jsx)(
                l.u,
                {
                    text: (0, _.Z)(O.name),
                    children: (0, r.jsx)(W, {
                        size: "md",
                        color: "currentColor",
                        className: o()(k.icon, y),
                    }),
                },
                "activity",
            ),
        ),
        v === j.YE.XBOX || I === L.wR.XBOX
            ? V.push((0, r.jsx)(R.Z, { className: o()(k.icon, y) }, "xbox"))
            : (v === j.YE.PLAYSTATION || I === L.wR.PLAYSTATION) &&
              V.push((0, r.jsx)(N.Z, { className: o()(k.icon, y) }, "playstation")),
        b &&
            V.push(
                (0, r.jsx)(
                    l.u,
                    {
                        text: M.intl.string(M.t.JH1SJy),
                        children: (0, r.jsx)(c.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: o()(k.icon, y),
                        }),
                    },
                    "watch",
                ),
            ),
        m && V.push((0, r.jsx)(E.ZP, { size: E.ZP.Sizes.SMALL }, "stream"));
    let K = null != T && !(0, P.yE)(T.flags, x.udG.EMBEDDED),
        z = null == D && K;
    return 0 !== V.length || null != H || U || z
        ? (0, r.jsxs)("div", {
              className: o()(k.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: k.iconGroup,
                      onMouseEnter: () => (null == Z ? void 0 : Z(!0)),
                      onMouseLeave: () => (null == Z ? void 0 : Z(!1)),
                      children: [H, V],
                  }),
                  U || z
                      ? (0, r.jsx)("div", {
                            className: k.iconGroup,
                            onMouseEnter: () => (null == B ? void 0 : B(!0)),
                            onMouseLeave: () => (null == B ? void 0 : B(!1)),
                            children: z
                                ? (0, r.jsx)(
                                      X,
                                      {
                                          application: T,
                                          iconClassName: y,
                                          guildId: S,
                                          channelId: A,
                                          userId: C.id,
                                      },
                                      "".concat(C.id, "-game"),
                                  )
                                : (0, r.jsx)(Y, {
                                      hangStatusActivity: D,
                                      iconClassName: y,
                                      isSelf: G,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
function z(e, t) {
    var n,
        {
            avatarContainerClass: a = k.avatarContainer,
            userNameClassName: u = k.usernameFont,
            size: f = x.ipw.SMALL,
            selected: _ = !1,
            disabled: p = !1,
            isOverlay: E = !1,
        } = e,
        y = F(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
    let {
            onClick: v,
            onKeyDown: N,
            onDoubleClick: R,
            onContextMenu: P,
            onMouseLeave: j,
            onMouseDown: U,
            priority: B,
            speaking: V,
            collapsed: H,
            mute: Y,
            serverMute: W,
            guildId: z,
            nick: q,
            isGuest: X,
            flipped: Q,
            className: J,
            overlap: $,
            "aria-label": ee,
            ringing: et,
            user: en,
            channelId: er,
        } = y,
        { parentAnalyticsLocation: ei } = (0, h.ZP)(),
        ea = (0, d.bp)(),
        eo = null != er ? S.Z.getChannel(er) : null,
        es = (0, s.e7)([T.default, A.Z], () => A.Z.isInChannel(er, T.default.getId())),
        { enabled: el } = D.P.useExperiment({ location: "VoiceUser" }),
        ec = (0, b.j)({ displayNameStyles: en.displayNameStyles }),
        [eu, ed] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== C.Z.isOpen() && ((e = C.Z.isOpen()) || ed(!1));
            };
        return C.Z.addChangeListener(t), () => C.Z.removeChangeListener(t);
    }, []);
    let ef = (e) => {
            null == v || v(e, en);
        },
        e_ = (e) => {
            null == R || R(e, en);
        },
        ep = (e) => {
            null == P || P(e, en);
        },
        eh = (e) => {
            null == j || j(e, en);
        },
        em = (e) => {
            null == U || U(e, en);
        };
    function eg() {
        return B && !H
            ? (0, r.jsx)(c.ua7, {
                  text: M.intl.string(M.t.BVK71t),
                  children: (e) =>
                      (0, r.jsx)(
                          "div",
                          G(
                              {
                                  className: o()(k.iconPriortySpeaker, {
                                      [k.iconPriortySpeakerSpeaking]: !Y && !W && V,
                                  }),
                              },
                              e,
                          ),
                      ),
              })
            : null;
    }
    function eE() {
        return (0, r.jsx)("div", {
            className: o()(a, k.avatar, {
                [k.avatarLarge]: f === x.ipw.LARGE,
                [k.avatarSmall]: f === x.ipw.SMALL,
                [k.avatarSpeaking]: V,
            }),
            style: { backgroundImage: "url(".concat(en.getAvatarURL(z, f === x.ipw.LARGE ? 38 : 24), ")") },
        });
    }
    function eb() {
        let e = (0, r.jsxs)("div", {
                className: o()(u, k.username, ec, { [k.usernameSpeaking]: !Y && !W && V }),
                children: [
                    null != q ? q : w.ZP.getName(en),
                    X
                        ? (0, r.jsxs)("span", {
                              className: k.guestSuffix,
                              children: ["\xA0", M.intl.string(M.t["pFO/Pj"])],
                          })
                        : "",
                ],
            }),
            t = {
                primaryGuild: en.primaryGuild,
                userId: en.id,
                contextGuildId: z,
                isOverlay: E,
                disableTooltip: !0,
                className: o()(k.clanTag, E && k.isOverlay),
                profileViewedAnalytics: { source: E ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL },
            };
        return !H || E ? (0, r.jsx)(O.Z, Z(G({}, t), { children: e })) : null;
    }
    function ey() {
        return (0, r.jsx)(K, G({ disabled: p }, y));
    }
    function eO(e) {
        null != z &&
            null != eo &&
            ((0, m.v)(ei, m.d.MORE),
            ed(!0),
            (0, I.D)(e, en, eo, { context: ea }, (e, t) => {
                (0, g.o)({
                    menuName: e,
                    menuItemProps: t,
                    entrypoint: L.A5.THREE_DOT,
                    location: ei,
                    targetUserId: en.id,
                });
            }));
    }
    function ev() {
        return H || !es || el
            ? null
            : (0, r.jsx)(l.u, {
                  asContainer: !0,
                  text: M.intl.string(M.t["+1H47u"]),
                  children: (0, r.jsx)(c.P3F, {
                      className: o()(k.optionsButton, { [k.optionsActive]: eu }),
                      onClick: eO,
                      children: (0, r.jsx)(c.xhG, {
                          size: "md",
                          className: k.icon,
                      }),
                  }),
              });
    }
    return (0, r.jsx)(c.kL8, {
        ref: t,
        className: o()(J, {
            [k.voiceUser]: !0,
            [k.overlap]: $,
            [k.selected]: _,
            [k.clickable]: null != v,
            [k.userSmall]: f === x.ipw.SMALL,
            [k.userLarge]: f === x.ipw.LARGE,
            [k.disabled]: !_ && p,
            [k.ringing]: et,
        }),
        onClick: ef,
        onDoubleClick: e_,
        onContextMenu: ep,
        onMouseLeave: eh,
        onMouseDown: em,
        onKeyDown: N,
        "aria-label": null != (n = null != ee ? ee : q) ? n : en.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: o()(k.content, { [k.flipped]: Q }),
            children: [eg(), eE(), eb(), ey(), ev()],
        }),
    });
}
let q = i.forwardRef(z);
function X(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: s, userId: c } = e,
        [d, f] = i.useState(!1),
        _ = (0, u.O)((e) => f(e));
    i.useEffect(() => {
        d &&
            p.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: s,
                guild_id: a,
                user_id: c,
            });
    }, [t.id, s, a, c, d]);
    let h = () => {
        p.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: s,
            guild_id: a,
            game_name: t.name,
            user_id: c,
        });
    };
    return (0, r.jsx)(l.u, {
        text: M.intl.formatToPlainString(M.t.Sq9xJy, { game: t.name }),
        "aria-label": M.intl.formatToPlainString(M.t.Sq9xJy, { game: t.name }),
        children: (0, r.jsx)(y.Z, {
            ref: _,
            className: o()(k.icon, k.gameIcon, n),
            game: t,
            size: y.A.XSMALL,
            onMouseEnter: h,
        }),
    });
}
function Q(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: s, serverDeaf: u } = e,
        d = [];
    if (n) {
        let e,
            n = () => (i ? M.intl.string(M.t.Q8Uzoa) : a ? M.intl.string(M.t.uLddbW) : M.intl.string(M.t.tjtv3N));
        e = a || i ? c.v0G : c.nRN;
        let s = (0, r.jsx)(e, {
            className: o()(k.icon, t, { [k.iconServer]: a }),
            color: "currentColor",
        });
        d.push(
            (0, r.jsx)(
                l.u,
                {
                    text: n(),
                    children: s,
                },
                "mute",
            ),
        );
    }
    if (u || s) {
        let e = u ? c.Vm4 : c.wE8,
            n = (0, r.jsx)(e, {
                className: o()(k.icon, t, { [k.iconServer]: u }),
                color: "currentColor",
            });
        d.push(
            (0, r.jsx)(
                l.u,
                {
                    text: u ? M.intl.string(M.t.btxSdH) : M.intl.string(M.t.NjmiOD),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return 0 === d.length ? null : d;
}
