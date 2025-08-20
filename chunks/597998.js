n.d(t, {
    ZP: () => z,
    eJ: () => Y,
    nm: () => W,
}),
    n(539854),
    n(997841),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(434650),
    u = n(40851),
    d = n(456100),
    f = n(657305),
    _ = n(367907),
    p = n(906732),
    h = n(522651),
    m = n(795318),
    g = n(194082),
    E = n(7284),
    b = n(925329),
    y = n(340044),
    O = n(833858),
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
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let H = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  l.DY3,
                  {
                      className: k.iconSpacing,
                      text: M.intl.string(M.t.qstQub),
                      children: (0, r.jsx)(l.svS, { className: o()(k.icon, n) }),
                  },
                  "add-status",
              )
            : (0, r.jsx)(
                  l.DY3,
                  {
                      className: k.iconSpacing,
                      text: (0, O.O8)(t),
                      children: (0, r.jsx)(v.Z, {
                          hangStatusActivity: t,
                          className: o()(k.hangStatusIcon, n),
                      }),
                  },
                  "hang-status",
              );
    },
    Y = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: o()(i, k.list, n ? k.listCollapse : k.listDefault),
            role: "group",
            children: t,
        });
    };
function W(e) {
    let {
            className: t,
            mute: n,
            localMute: i,
            localVideoDisabled: a,
            serverMute: s,
            deaf: c,
            serverDeaf: u,
            collapsed: _,
            video: p,
            isStreaming: h,
            disabled: m,
            isWatching: E,
            iconClassName: b,
            embeddedApplication: y,
            otherClientSessionType: O,
            voicePlatform: v,
            application: I,
            guildId: T,
            channelId: S,
            user: A,
            disconnected: C,
            hangStatusActivity: w,
            showHangStatus: D,
            isSelf: U,
            handleHoverHangStatus: G,
            handleHoverIcons: B,
        } = e,
        { enabled: Z } = d.c.getCurrentConfig({ location: "VoiceUserIcons" }, { autoTrackExposure: !0 });
    if (_ || m) return null;
    let V = [],
        F = (0, r.jsx)(X, {
            iconClassName: b,
            mute: n,
            localMute: i,
            serverMute: s,
            deaf: c,
            serverDeaf: u,
        });
    p &&
        (a
            ? V.push(
                  (0, r.jsx)(
                      l.DY3,
                      {
                          className: k.iconSpacing,
                          text: M.intl.string(M.t["PXMZ//"]),
                          children: (0, r.jsx)(l.Amn, {
                              size: "md",
                              color: "currentColor",
                              className: o()(k.icon, b),
                              colorClass: k.strikethrough,
                          }),
                      },
                      "video",
                  ),
              )
            : V.push(
                  (0, r.jsx)(
                      l.DY3,
                      {
                          className: k.iconSpacing,
                          text: M.intl.string(M.t.FlNoSU),
                          children: (0, r.jsx)(l.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: o()(k.icon, b),
                          }),
                      },
                      "video",
                  ),
              )),
        C &&
            V.push(
                (0, r.jsx)(
                    l.DY3,
                    {
                        className: k.iconSpacing,
                        text: M.intl.string(M.t.HFwRpq),
                        children: (0, r.jsx)(l.Mgn, {
                            className: o()(k.icon, b),
                            color: l.TVs.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            );
    let Y = Z ? l.iWm : l.nG3;
    null != y &&
        V.push(
            (0, r.jsx)(
                l.DY3,
                {
                    text: (0, f.Z)(y.name),
                    className: k.iconSpacing,
                    children: (0, r.jsx)(Y, {
                        size: "md",
                        color: "currentColor",
                        className: o()(k.icon, b),
                    }),
                },
                "activity",
            ),
        ),
        O === j.YE.XBOX || v === L.wR.XBOX
            ? V.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(R.Z, { className: o()(k.icon, b) }),
                      },
                      "xbox",
                  ),
              )
            : (O === j.YE.PLAYSTATION || v === L.wR.PLAYSTATION) &&
              V.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(N.Z, { className: o()(k.icon, b) }),
                      },
                      "playstation",
                  ),
              ),
        E &&
            V.push(
                (0, r.jsx)(
                    l.DY3,
                    {
                        className: k.iconSpacing,
                        text: M.intl.string(M.t.JH1SJy),
                        children: (0, r.jsx)(l.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: o()(k.icon, b),
                        }),
                    },
                    "watch",
                ),
            ),
        h &&
            V.push(
                (0, r.jsx)(
                    "div",
                    {
                        className: o()(k.iconSpacing, k.liveIconSpacing),
                        children: (0, r.jsx)(g.ZP, { size: g.ZP.Sizes.SMALL }),
                    },
                    "stream",
                ),
            );
    let W = null != I && !(0, P.yE)(I.flags, x.udG.EMBEDDED),
        K = null == w && W;
    return 0 !== V.length || null != F || D || K
        ? (0, r.jsxs)("div", {
              className: o()(k.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: k.iconGroup,
                      onMouseEnter: () => (null == B ? void 0 : B(!0)),
                      onMouseLeave: () => (null == B ? void 0 : B(!1)),
                      children: [F, V],
                  }),
                  D || K
                      ? (0, r.jsx)("div", {
                            className: k.iconGroup,
                            onMouseEnter: () => (null == G ? void 0 : G(!0)),
                            onMouseLeave: () => (null == G ? void 0 : G(!1)),
                            children: K
                                ? (0, r.jsx)(
                                      q,
                                      {
                                          application: I,
                                          iconClassName: b,
                                          guildId: T,
                                          channelId: S,
                                          userId: A.id,
                                      },
                                      "".concat(A.id, "-game"),
                                  )
                                : (0, r.jsx)(H, {
                                      hangStatusActivity: w,
                                      iconClassName: b,
                                      isSelf: U,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
function K(e, t) {
    var n,
        {
            avatarContainerClass: a = k.avatarContainer,
            userNameClassName: c = k.usernameFont,
            size: d = x.ipw.SMALL,
            selected: f = !1,
            disabled: _ = !1,
            isOverlay: g = !1,
        } = e,
        b = V(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
    let {
            onClick: O,
            onKeyDown: v,
            onDoubleClick: N,
            onContextMenu: R,
            onMouseLeave: P,
            onMouseDown: j,
            priority: U,
            speaking: B,
            collapsed: F,
            mute: H,
            serverMute: Y,
            guildId: K,
            nick: z,
            isGuest: q,
            flipped: X,
            className: Q,
            overlap: J,
            "aria-label": $,
            ringing: ee,
            user: et,
            channelId: en,
        } = b,
        { parentAnalyticsLocation: er } = (0, p.ZP)(),
        ei = (0, u.bp)(),
        ea = null != en ? S.Z.getChannel(en) : null,
        eo = (0, s.e7)([T.default, A.Z], () => A.Z.isInChannel(en, T.default.getId())),
        { enabled: es } = D.P.useExperiment({ location: "VoiceUser" }),
        el = (0, E.j)({ displayNameStyles: et.displayNameStyles }),
        [ec, eu] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== C.Z.isOpen() && ((e = C.Z.isOpen()) || eu(!1));
            };
        return C.Z.addChangeListener(t), () => C.Z.removeChangeListener(t);
    }, []);
    let ed = (e) => {
            null == O || O(e, et);
        },
        ef = (e) => {
            null == N || N(e, et);
        },
        e_ = (e) => {
            null == R || R(e, et);
        },
        ep = (e) => {
            null == P || P(e, et);
        },
        eh = (e) => {
            null == j || j(e, et);
        };
    function em() {
        return U && !F
            ? (0, r.jsx)(l.ua7, {
                  text: M.intl.string(M.t.BVK71t),
                  children: (e) =>
                      (0, r.jsx)(
                          "div",
                          G(
                              {
                                  className: o()(k.iconPriortySpeaker, {
                                      [k.iconPriortySpeakerSpeaking]: !H && !Y && B,
                                  }),
                              },
                              e,
                          ),
                      ),
              })
            : null;
    }
    function eg() {
        return (0, r.jsx)("div", {
            className: o()(a, k.avatar, {
                [k.avatarLarge]: d === x.ipw.LARGE,
                [k.avatarSmall]: d === x.ipw.SMALL,
                [k.avatarSpeaking]: B,
            }),
            style: { backgroundImage: "url(".concat(et.getAvatarURL(K, d === x.ipw.LARGE ? 38 : 24), ")") },
        });
    }
    function eE() {
        let e = (0, r.jsxs)("div", {
                className: o()(c, k.username, el, { [k.usernameSpeaking]: !H && !Y && B }),
                children: [
                    null != z ? z : w.ZP.getName(et),
                    q
                        ? (0, r.jsxs)("span", {
                              className: k.guestSuffix,
                              children: ["\xA0", M.intl.string(M.t["pFO/Pj"])],
                          })
                        : "",
                ],
            }),
            t = {
                primaryGuild: et.primaryGuild,
                userId: et.id,
                contextGuildId: K,
                isOverlay: g,
                disableTooltip: !0,
                className: o()(k.clanTag, g && k.isOverlay),
                profileViewedAnalytics: { source: g ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL },
            };
        return !F || g ? (0, r.jsx)(y.Z, Z(G({}, t), { children: e })) : null;
    }
    function eb() {
        return (0, r.jsx)(W, G({ disabled: _ }, b));
    }
    function ey(e) {
        null != K &&
            null != ea &&
            ((0, h.v)(er, h.d.MORE),
            eu(!0),
            (0, I.D)(e, et, ea, { context: ei }, (e, t) => {
                (0, m.o)({
                    menuName: e,
                    menuItemProps: t,
                    entrypoint: L.A5.THREE_DOT,
                    location: er,
                    targetUserId: et.id,
                });
            }));
    }
    function eO() {
        return F || !eo || es
            ? null
            : (0, r.jsx)(l.DY3, {
                  text: M.intl.string(M.t["+1H47u"]),
                  className: o()(k.optionsButtonContainer, { [k.optionsContainerActive]: ec }),
                  children: (0, r.jsx)(l.P3F, {
                      className: o()(k.optionsButton, { [k.optionsActive]: ec }),
                      onClick: ey,
                      children: (0, r.jsx)(l.xhG, {
                          size: "md",
                          className: k.icon,
                      }),
                  }),
              });
    }
    return (0, r.jsx)(l.kL8, {
        ref: t,
        className: o()(Q, {
            [k.voiceUser]: !0,
            [k.overlap]: J,
            [k.selected]: f,
            [k.clickable]: null != O,
            [k.userSmall]: d === x.ipw.SMALL,
            [k.userLarge]: d === x.ipw.LARGE,
            [k.disabled]: !f && _,
            [k.ringing]: ee,
        }),
        onClick: ed,
        onDoubleClick: ef,
        onContextMenu: e_,
        onMouseLeave: ep,
        onMouseDown: eh,
        onKeyDown: v,
        "aria-label": null != (n = null != $ ? $ : z) ? n : et.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: o()(k.content, { [k.flipped]: X }),
            children: [em(), eg(), eE(), eb(), eO()],
        }),
    });
}
let z = i.forwardRef(K);
function q(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: s, userId: u } = e,
        [d, f] = i.useState(!1),
        p = (0, c.O)((e) => f(e));
    i.useEffect(() => {
        d &&
            _.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: s,
                guild_id: a,
                user_id: u,
            });
    }, [t.id, s, a, u, d]);
    let h = () => {
        _.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: s,
            guild_id: a,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(l.DY3, {
        text: M.intl.formatToPlainString(M.t.Sq9xJy, { game: t.name }),
        "aria-label": M.intl.formatToPlainString(M.t.Sq9xJy, { game: t.name }),
        className: k.iconSpacing,
        children: (0, r.jsx)("div", {
            ref: p,
            children: (0, r.jsx)(b.Z, {
                className: o()(k.icon, k.gameIcon, n),
                game: t,
                size: b.Z.Sizes.XSMALL,
                onMouseEnter: h,
            }),
        }),
    });
}
function X(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: s, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e,
            n = () => (i ? M.intl.string(M.t.Q8Uzoa) : a ? M.intl.string(M.t.uLddbW) : M.intl.string(M.t.tjtv3N));
        e = a || i ? l.v0G : l.nRN;
        let s = (0, r.jsx)(e, {
            className: o()(k.icon, t, { [k.iconServer]: a }),
            color: "currentColor",
        });
        u.push(
            (0, r.jsx)(
                l.DY3,
                {
                    text: n(),
                    className: k.iconSpacing,
                    children: s,
                },
                "mute",
            ),
        );
    }
    if (c || s) {
        let e = c ? l.Vm4 : l.wE8,
            n = (0, r.jsx)(e, {
                className: o()(k.icon, t, { [k.iconServer]: c }),
                color: "currentColor",
            });
        u.push(
            (0, r.jsx)(
                l.DY3,
                {
                    className: k.iconSpacing,
                    text: c ? M.intl.string(M.t.btxSdH) : M.intl.string(M.t.NjmiOD),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return 0 === u.length ? null : u;
}
