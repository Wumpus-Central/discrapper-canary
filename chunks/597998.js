n.d(t, {
    ZP: () => K,
    eJ: () => H,
    nm: () => Y,
}),
    n(539854),
    n(997841),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    E = n(925329),
    b = n(340044),
    y = n(833858),
    O = n(223135),
    v = n(880395),
    I = n(314897),
    T = n(592125),
    S = n(979651),
    A = n(574254),
    N = n(374129),
    C = n(639351),
    R = n(630388),
    P = n(51144),
    w = n(91088),
    D = n(981631),
    L = n(354459),
    x = n(927923),
    M = n(388032),
    k = n(850999);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let V = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  l.DY3,
                  {
                      className: k.iconSpacing,
                      text: M.intl.string(M.t.qstQub),
                      children: (0, r.jsx)(l.svS, { className: a()(k.icon, n) }),
                  },
                  "add-status",
              )
            : (0, r.jsx)(
                  l.DY3,
                  {
                      className: k.iconSpacing,
                      text: (0, y.O8)(t),
                      children: (0, r.jsx)(O.Z, {
                          hangStatusActivity: t,
                          className: a()(k.hangStatusIcon, n),
                      }),
                  },
                  "hang-status",
              );
    },
    H = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: a()(i, k.list, n ? k.listCollapse : k.listDefault),
            role: "group",
            children: t,
        });
    };
function Y(e) {
    let {
            className: t,
            mute: n,
            localMute: i,
            localVideoDisabled: o,
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
            disconnected: P,
            hangStatusActivity: w,
            showHangStatus: j,
            isSelf: U,
            handleHoverHangStatus: G,
            handleHoverIcons: B,
        } = e,
        { enabled: Z } = d.c.getCurrentConfig({ location: "VoiceUserIcons" }, { autoTrackExposure: !0 });
    if (_ || m) return null;
    let F = [],
        H = (0, r.jsx)(q, {
            iconClassName: b,
            mute: n,
            localMute: i,
            serverMute: s,
            deaf: c,
            serverDeaf: u,
        });
    p &&
        (o
            ? F.push(
                  (0, r.jsx)(
                      l.DY3,
                      {
                          className: k.iconSpacing,
                          text: M.intl.string(M.t["PXMZ//"]),
                          children: (0, r.jsx)(l.Amn, {
                              size: "md",
                              color: "currentColor",
                              className: a()(k.icon, b),
                              colorClass: k.strikethrough,
                          }),
                      },
                      "video",
                  ),
              )
            : F.push(
                  (0, r.jsx)(
                      l.DY3,
                      {
                          className: k.iconSpacing,
                          text: M.intl.string(M.t.FlNoSU),
                          children: (0, r.jsx)(l.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: a()(k.icon, b),
                          }),
                      },
                      "video",
                  ),
              )),
        P &&
            F.push(
                (0, r.jsx)(
                    l.DY3,
                    {
                        className: k.iconSpacing,
                        text: M.intl.string(M.t.HFwRpq),
                        children: (0, r.jsx)(l.Mgn, {
                            className: a()(k.icon, b),
                            color: l.TVs.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            );
    let Y = Z ? l.iWm : l.nG3;
    null != y &&
        F.push(
            (0, r.jsx)(
                l.DY3,
                {
                    text: (0, f.Z)(y.name),
                    className: k.iconSpacing,
                    children: (0, r.jsx)(Y, {
                        size: "md",
                        color: "currentColor",
                        className: a()(k.icon, b),
                    }),
                },
                "activity",
            ),
        ),
        O === x.YE.XBOX || v === L.wR.XBOX
            ? F.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(C.Z, { className: a()(k.icon, b) }),
                      },
                      "xbox",
                  ),
              )
            : (O === x.YE.PLAYSTATION || v === L.wR.PLAYSTATION) &&
              F.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(N.Z, { className: a()(k.icon, b) }),
                      },
                      "playstation",
                  ),
              ),
        E &&
            F.push(
                (0, r.jsx)(
                    l.DY3,
                    {
                        className: k.iconSpacing,
                        text: M.intl.string(M.t.JH1SJy),
                        children: (0, r.jsx)(l.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(k.icon, b),
                        }),
                    },
                    "watch",
                ),
            ),
        h &&
            F.push(
                (0, r.jsx)(
                    "div",
                    {
                        className: a()(k.iconSpacing, k.liveIconSpacing),
                        children: (0, r.jsx)(g.ZP, { size: g.ZP.Sizes.SMALL }),
                    },
                    "stream",
                ),
            );
    let W = null != I && !(0, R.yE)(I.flags, D.udG.EMBEDDED),
        K = null == w && W;
    return 0 !== F.length || null != H || j || K
        ? (0, r.jsxs)("div", {
              className: a()(k.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: k.iconGroup,
                      onMouseEnter: () => (null == B ? void 0 : B(!0)),
                      onMouseLeave: () => (null == B ? void 0 : B(!1)),
                      children: [H, F],
                  }),
                  j || K
                      ? (0, r.jsx)("div", {
                            className: k.iconGroup,
                            onMouseEnter: () => (null == G ? void 0 : G(!0)),
                            onMouseLeave: () => (null == G ? void 0 : G(!1)),
                            children: K
                                ? (0, r.jsx)(
                                      z,
                                      {
                                          application: I,
                                          iconClassName: b,
                                          guildId: T,
                                          channelId: S,
                                          userId: A.id,
                                      },
                                      "".concat(A.id, "-game"),
                                  )
                                : (0, r.jsx)(V, {
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
function W(e, t) {
    var n,
        {
            avatarContainerClass: o = k.avatarContainer,
            userNameClassName: c = k.usernameFont,
            size: d = D.ipw.SMALL,
            selected: f = !1,
            disabled: _ = !1,
            isOverlay: g = !1,
        } = e,
        E = Z(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
    let {
            onClick: y,
            onKeyDown: O,
            onDoubleClick: N,
            onContextMenu: C,
            onMouseLeave: R,
            onMouseDown: x,
            priority: j,
            speaking: G,
            collapsed: F,
            mute: V,
            serverMute: H,
            guildId: W,
            nick: K,
            isGuest: z,
            flipped: q,
            className: X,
            overlap: Q,
            "aria-label": J,
            ringing: $,
            user: ee,
            channelId: et,
        } = E,
        { parentAnalyticsLocation: en } = (0, p.ZP)(),
        er = (0, u.bp)(),
        ei = null != et ? T.Z.getChannel(et) : null,
        eo = (0, s.e7)([I.default, S.Z], () => S.Z.isInChannel(et, I.default.getId())),
        { enabled: ea } = w.P.useExperiment({ location: "VoiceUser" }),
        [es, el] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== A.Z.isOpen() && ((e = A.Z.isOpen()) || el(!1));
            };
        return A.Z.addChangeListener(t), () => A.Z.removeChangeListener(t);
    }, []);
    let ec = (e) => {
            null == y || y(e, ee);
        },
        eu = (e) => {
            null == N || N(e, ee);
        },
        ed = (e) => {
            null == C || C(e, ee);
        },
        ef = (e) => {
            null == R || R(e, ee);
        },
        e_ = (e) => {
            null == x || x(e, ee);
        };
    function ep() {
        return j && !F
            ? (0, r.jsx)(l.ua7, {
                  text: M.intl.string(M.t.BVK71t),
                  children: (e) =>
                      (0, r.jsx)(
                          "div",
                          U(
                              {
                                  className: a()(k.iconPriortySpeaker, {
                                      [k.iconPriortySpeakerSpeaking]: !V && !H && G,
                                  }),
                              },
                              e,
                          ),
                      ),
              })
            : null;
    }
    function eh() {
        return (0, r.jsx)("div", {
            className: a()(o, k.avatar, {
                [k.avatarLarge]: d === D.ipw.LARGE,
                [k.avatarSmall]: d === D.ipw.SMALL,
                [k.avatarSpeaking]: G,
            }),
            style: { backgroundImage: "url(".concat(ee.getAvatarURL(W, d === D.ipw.LARGE ? 38 : 24), ")") },
        });
    }
    function em() {
        let e = (0, r.jsxs)("div", {
                className: a()(c, {
                    [k.username]: !0,
                    [k.usernameSpeaking]: !V && !H && G,
                }),
                children: [
                    null != K ? K : P.ZP.getName(ee),
                    z
                        ? (0, r.jsxs)("span", {
                              className: k.guestSuffix,
                              children: ["\xA0", M.intl.string(M.t["pFO/Pj"])],
                          })
                        : "",
                ],
            }),
            t = {
                primaryGuild: ee.primaryGuild,
                userId: ee.id,
                contextGuildId: W,
                isOverlay: g,
                disableTooltip: !0,
                className: a()(k.clanTag, g && k.isOverlay),
                profileViewedAnalytics: { source: g ? D.jXE.OVERLAY : D.Sbl.VOICE_PANEL },
            };
        return !F || g ? (0, r.jsx)(b.Z, B(U({}, t), { children: e })) : null;
    }
    function eg() {
        return (0, r.jsx)(Y, U({ disabled: _ }, E));
    }
    function eE(e) {
        null != W &&
            null != ei &&
            ((0, h.v)(en, h.d.MORE),
            el(!0),
            (0, v.D)(e, ee, ei, { context: er }, (e, t) => {
                (0, m.o)({
                    menuName: e,
                    menuItemProps: t,
                    entrypoint: L.A5.THREE_DOT,
                    location: en,
                    targetUserId: ee.id,
                });
            }));
    }
    function eb() {
        return F || !eo || ea
            ? null
            : (0, r.jsx)(l.DY3, {
                  text: M.intl.string(M.t["+1H47u"]),
                  className: a()(k.optionsButtonContainer, { [k.optionsContainerActive]: es }),
                  children: (0, r.jsx)(l.P3F, {
                      className: a()(k.optionsButton, { [k.optionsActive]: es }),
                      onClick: eE,
                      children: (0, r.jsx)(l.xhG, {
                          size: "md",
                          className: k.icon,
                      }),
                  }),
              });
    }
    return (0, r.jsx)(l.kL8, {
        ref: t,
        className: a()(X, {
            [k.voiceUser]: !0,
            [k.overlap]: Q,
            [k.selected]: f,
            [k.clickable]: null != y,
            [k.userSmall]: d === D.ipw.SMALL,
            [k.userLarge]: d === D.ipw.LARGE,
            [k.disabled]: !f && _,
            [k.ringing]: $,
        }),
        onClick: ec,
        onDoubleClick: eu,
        onContextMenu: ed,
        onMouseLeave: ef,
        onMouseDown: e_,
        onKeyDown: O,
        "aria-label": null != (n = null != J ? J : K) ? n : ee.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: a()(k.content, { [k.flipped]: q }),
            children: [ep(), eh(), em(), eg(), eb()],
        }),
    });
}
let K = i.forwardRef(W);
function z(e) {
    let { application: t, iconClassName: n, guildId: o, channelId: s, userId: u } = e,
        [d, f] = i.useState(!1),
        p = (0, c.O)((e) => f(e));
    i.useEffect(() => {
        d &&
            _.ZP.trackWithMetadata(D.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: s,
                guild_id: o,
                user_id: u,
            });
    }, [t.id, s, o, u, d]);
    let h = () => {
        _.ZP.trackWithMetadata(D.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: s,
            guild_id: o,
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
            children: (0, r.jsx)(E.Z, {
                className: a()(k.icon, n),
                game: t,
                size: E.Z.Sizes.XSMALL,
                onMouseEnter: h,
            }),
        }),
    });
}
function q(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: o, deaf: s, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e,
            n = () => (i ? M.intl.string(M.t.Q8Uzoa) : o ? M.intl.string(M.t.uLddbW) : M.intl.string(M.t.tjtv3N));
        e = o || i ? l.v0G : l.nRN;
        let s = (0, r.jsx)(e, {
            className: a()(k.icon, t, { [k.iconServer]: o }),
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
                className: a()(k.icon, t, { [k.iconServer]: c }),
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
