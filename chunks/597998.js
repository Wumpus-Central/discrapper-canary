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
    v = n(833858),
    I = n(223135),
    T = n(880395),
    S = n(314897),
    A = n(592125),
    C = n(979651),
    N = n(574254),
    R = n(374129),
    P = n(639351),
    w = n(630388),
    D = n(51144),
    x = n(91088),
    L = n(981631),
    j = n(354459),
    M = n(927923),
    k = n(388032),
    U = n(368736);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = H(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function H(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let Y = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  l.u,
                  {
                      asContainer: !0,
                      text: k.intl.string(k.t.qstQub),
                      children: (0, r.jsx)(c.svS, { className: o()(U.icon, n) }),
                  },
                  "add-status",
              )
            : (0, r.jsx)(
                  l.u,
                  {
                      asContainer: !0,
                      text: (0, v.O8)(t),
                      children: (0, r.jsx)(I.Z, {
                          hangStatusActivity: t,
                          className: o()(U.hangStatusIcon, n),
                      }),
                  },
                  "hang-status",
              );
    },
    W = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: o()(i, U.list, n ? U.listCollapse : U.listDefault),
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
            disconnected: N,
            hangStatusActivity: D,
            showHangStatus: x,
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
                          asContainer: !0,
                          text: k.intl.string(k.t["PXMZ//"]),
                          children: (0, r.jsx)(c.Amn, {
                              size: "md",
                              color: "currentColor",
                              className: o()(U.icon, y),
                              colorClass: U.strikethrough,
                          }),
                      },
                      "video",
                  ),
              )
            : V.push(
                  (0, r.jsx)(
                      l.u,
                      {
                          asContainer: !0,
                          text: k.intl.string(k.t.FlNoSU),
                          children: (0, r.jsx)(c.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: o()(U.icon, y),
                          }),
                      },
                      "video",
                  ),
              )),
        N &&
            V.push(
                (0, r.jsx)(
                    l.u,
                    {
                        asContainer: !0,
                        text: k.intl.string(k.t.HFwRpq),
                        children: (0, r.jsx)(c.Mgn, {
                            className: o()(U.icon, y),
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
                    asContainer: !0,
                    text: (0, _.Z)(O.name),
                    children: (0, r.jsx)(W, {
                        size: "md",
                        color: "currentColor",
                        className: o()(U.icon, y),
                    }),
                },
                "activity",
            ),
        ),
        v === M.YE.XBOX || I === j.wR.XBOX
            ? V.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: U.iconSpacing,
                          children: (0, r.jsx)(P.Z, { className: o()(U.icon, y) }),
                      },
                      "xbox",
                  ),
              )
            : (v === M.YE.PLAYSTATION || I === j.wR.PLAYSTATION) &&
              V.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: U.iconSpacing,
                          children: (0, r.jsx)(R.Z, { className: o()(U.icon, y) }),
                      },
                      "playstation",
                  ),
              ),
        b &&
            V.push(
                (0, r.jsx)(
                    l.u,
                    {
                        asContainer: !0,
                        text: k.intl.string(k.t.JH1SJy),
                        children: (0, r.jsx)(c.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: o()(U.icon, y),
                        }),
                    },
                    "watch",
                ),
            ),
        m &&
            V.push(
                (0, r.jsx)(
                    "div",
                    {
                        className: o()(U.iconSpacing, U.liveIconSpacing),
                        children: (0, r.jsx)(E.ZP, { size: E.ZP.Sizes.SMALL }),
                    },
                    "stream",
                ),
            );
    let K = null != T && !(0, w.yE)(T.flags, L.udG.EMBEDDED),
        z = null == D && K;
    return 0 !== V.length || null != H || x || z
        ? (0, r.jsxs)("div", {
              className: o()(U.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: U.iconGroup,
                      onMouseEnter: () => (null == Z ? void 0 : Z(!0)),
                      onMouseLeave: () => (null == Z ? void 0 : Z(!1)),
                      children: [H, V],
                  }),
                  x || z
                      ? (0, r.jsx)("div", {
                            className: U.iconGroup,
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
            avatarContainerClass: a = U.avatarContainer,
            userNameClassName: u = U.usernameFont,
            size: f = L.ipw.SMALL,
            selected: _ = !1,
            disabled: p = !1,
            isOverlay: E = !1,
        } = e,
        y = V(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
    let {
            onClick: v,
            onKeyDown: I,
            onDoubleClick: R,
            onContextMenu: P,
            onMouseLeave: w,
            onMouseDown: M,
            priority: G,
            speaking: Z,
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
        eo = null != er ? A.Z.getChannel(er) : null,
        es = (0, s.e7)([S.default, C.Z], () => C.Z.isInChannel(er, S.default.getId())),
        { enabled: el } = x.P.useExperiment({ location: "VoiceUser" }),
        ec = (0, b.j)({ displayNameStyles: en.displayNameStyles }),
        [eu, ed] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== N.Z.isOpen() && ((e = N.Z.isOpen()) || ed(!1));
            };
        return N.Z.addChangeListener(t), () => N.Z.removeChangeListener(t);
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
            null == w || w(e, en);
        },
        em = (e) => {
            null == M || M(e, en);
        };
    function eg() {
        return G && !H
            ? (0, r.jsx)(c.ua7, {
                  text: k.intl.string(k.t.BVK71t),
                  children: (e) =>
                      (0, r.jsx)(
                          "div",
                          B(
                              {
                                  className: o()(U.iconPriortySpeaker, {
                                      [U.iconPriortySpeakerSpeaking]: !Y && !W && Z,
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
            className: o()(a, U.avatar, {
                [U.avatarLarge]: f === L.ipw.LARGE,
                [U.avatarSmall]: f === L.ipw.SMALL,
                [U.avatarSpeaking]: Z,
            }),
            style: { backgroundImage: "url(".concat(en.getAvatarURL(z, f === L.ipw.LARGE ? 38 : 24), ")") },
        });
    }
    function eb() {
        let e = (0, r.jsxs)("div", {
                className: o()(u, U.username, ec, { [U.usernameSpeaking]: !Y && !W && Z }),
                children: [
                    null != q ? q : D.ZP.getName(en),
                    X
                        ? (0, r.jsxs)("span", {
                              className: U.guestSuffix,
                              children: ["\xA0", k.intl.string(k.t["pFO/Pj"])],
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
                className: o()(U.clanTag, E && U.isOverlay),
                profileViewedAnalytics: { source: E ? L.jXE.OVERLAY : L.Sbl.VOICE_PANEL },
            };
        return !H || E ? (0, r.jsx)(O.Z, F(B({}, t), { children: e })) : null;
    }
    function ey() {
        return (0, r.jsx)(K, B({ disabled: p }, y));
    }
    function eO(e) {
        null != z &&
            null != eo &&
            ((0, m.v)(ei, m.d.MORE),
            ed(!0),
            (0, T.D)(e, en, eo, { context: ea }, (e, t) => {
                (0, g.o)({
                    menuName: e,
                    menuItemProps: t,
                    entrypoint: j.A5.THREE_DOT,
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
                  text: k.intl.string(k.t["+1H47u"]),
                  children: (0, r.jsx)(c.P3F, {
                      className: o()(U.optionsButton, { [U.optionsActive]: eu }),
                      onClick: eO,
                      children: (0, r.jsx)(c.xhG, {
                          size: "md",
                          className: U.icon,
                      }),
                  }),
              });
    }
    return (0, r.jsx)(c.kL8, {
        ref: t,
        className: o()(J, {
            [U.voiceUser]: !0,
            [U.overlap]: $,
            [U.selected]: _,
            [U.clickable]: null != v,
            [U.userSmall]: f === L.ipw.SMALL,
            [U.userLarge]: f === L.ipw.LARGE,
            [U.disabled]: !_ && p,
            [U.ringing]: et,
        }),
        onClick: ef,
        onDoubleClick: e_,
        onContextMenu: ep,
        onMouseLeave: eh,
        onMouseDown: em,
        onKeyDown: I,
        "aria-label": null != (n = null != ee ? ee : q) ? n : en.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: o()(U.content, { [U.flipped]: Q }),
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
            p.ZP.trackWithMetadata(L.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: s,
                guild_id: a,
                user_id: c,
            });
    }, [t.id, s, a, c, d]);
    let h = () => {
        p.ZP.trackWithMetadata(L.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: s,
            guild_id: a,
            game_name: t.name,
            user_id: c,
        });
    };
    return (0, r.jsx)(l.u, {
        asContainer: !0,
        text: k.intl.formatToPlainString(k.t.Sq9xJy, { game: t.name }),
        "aria-label": k.intl.formatToPlainString(k.t.Sq9xJy, { game: t.name }),
        children: (0, r.jsx)("div", {
            ref: _,
            children: (0, r.jsx)(y.Z, {
                className: o()(U.icon, U.gameIcon, n),
                game: t,
                size: y.Z.Sizes.XSMALL,
                onMouseEnter: h,
            }),
        }),
    });
}
function Q(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: s, serverDeaf: u } = e,
        d = [];
    if (n) {
        let e,
            n = () => (i ? k.intl.string(k.t.Q8Uzoa) : a ? k.intl.string(k.t.uLddbW) : k.intl.string(k.t.tjtv3N));
        e = a || i ? c.v0G : c.nRN;
        let s = (0, r.jsx)(e, {
            className: o()(U.icon, t, { [U.iconServer]: a }),
            color: "currentColor",
        });
        d.push(
            (0, r.jsx)(
                l.u,
                {
                    asContainer: !0,
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
                className: o()(U.icon, t, { [U.iconServer]: u }),
                color: "currentColor",
            });
        d.push(
            (0, r.jsx)(
                l.u,
                {
                    asContainer: !0,
                    text: u ? k.intl.string(k.t.btxSdH) : k.intl.string(k.t.NjmiOD),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return 0 === d.length ? null : d;
}
