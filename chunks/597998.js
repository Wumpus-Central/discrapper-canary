n.d(t, {
    ZP: () => z,
    eJ: () => Y,
    nm: () => W,
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
    E = n(7284),
    b = n(925329),
    y = n(340044),
    O = n(833858),
    v = n(223135),
    I = n(880395),
    T = n(314897),
    S = n(592125),
    A = n(979651),
    N = n(574254),
    C = n(374129),
    R = n(639351),
    P = n(630388),
    w = n(51144),
    D = n(91088),
    L = n(981631),
    x = n(354459),
    M = n(927923),
    j = n(388032),
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let H = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  l.DY3,
                  {
                      className: k.iconSpacing,
                      text: j.intl.string(j.t.qstQub),
                      children: (0, r.jsx)(l.svS, { className: a()(k.icon, n) }),
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
                          className: a()(k.hangStatusIcon, n),
                      }),
                  },
                  "hang-status",
              );
    },
    Y = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: a()(i, k.list, n ? k.listCollapse : k.listDefault),
            role: "group",
            children: t,
        });
    };
function W(e) {
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
            disconnected: N,
            hangStatusActivity: w,
            showHangStatus: D,
            isSelf: U,
            handleHoverHangStatus: G,
            handleHoverIcons: B,
        } = e,
        { enabled: Z } = d.c.getCurrentConfig({ location: "VoiceUserIcons" }, { autoTrackExposure: !0 });
    if (_ || m) return null;
    let F = [],
        V = (0, r.jsx)(X, {
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
                          text: j.intl.string(j.t["PXMZ//"]),
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
                          text: j.intl.string(j.t.FlNoSU),
                          children: (0, r.jsx)(l.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: a()(k.icon, b),
                          }),
                      },
                      "video",
                  ),
              )),
        N &&
            F.push(
                (0, r.jsx)(
                    l.DY3,
                    {
                        className: k.iconSpacing,
                        text: j.intl.string(j.t.HFwRpq),
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
        O === M.YE.XBOX || v === x.wR.XBOX
            ? F.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(R.Z, { className: a()(k.icon, b) }),
                      },
                      "xbox",
                  ),
              )
            : (O === M.YE.PLAYSTATION || v === x.wR.PLAYSTATION) &&
              F.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: k.iconSpacing,
                          children: (0, r.jsx)(C.Z, { className: a()(k.icon, b) }),
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
                        text: j.intl.string(j.t.JH1SJy),
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
    let W = null != I && !(0, P.yE)(I.flags, L.udG.EMBEDDED),
        K = null == w && W;
    return 0 !== F.length || null != V || D || K
        ? (0, r.jsxs)("div", {
              className: a()(k.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: k.iconGroup,
                      onMouseEnter: () => (null == B ? void 0 : B(!0)),
                      onMouseLeave: () => (null == B ? void 0 : B(!1)),
                      children: [V, F],
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
            avatarContainerClass: o = k.avatarContainer,
            userNameClassName: c = k.usernameFont,
            size: d = L.ipw.SMALL,
            selected: f = !1,
            disabled: _ = !1,
            isOverlay: g = !1,
        } = e,
        b = F(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
    let {
            onClick: O,
            onKeyDown: v,
            onDoubleClick: C,
            onContextMenu: R,
            onMouseLeave: P,
            onMouseDown: M,
            priority: U,
            speaking: B,
            collapsed: V,
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
        eo = null != en ? S.Z.getChannel(en) : null,
        ea = (0, s.e7)([T.default, A.Z], () => A.Z.isInChannel(en, T.default.getId())),
        { enabled: es } = D.P.useExperiment({ location: "VoiceUser" }),
        el = (0, E.j)({ displayNameStyles: et.displayNameStyles }),
        [ec, eu] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== N.Z.isOpen() && ((e = N.Z.isOpen()) || eu(!1));
            };
        return N.Z.addChangeListener(t), () => N.Z.removeChangeListener(t);
    }, []);
    let ed = (e) => {
            null == O || O(e, et);
        },
        ef = (e) => {
            null == C || C(e, et);
        },
        e_ = (e) => {
            null == R || R(e, et);
        },
        ep = (e) => {
            null == P || P(e, et);
        },
        eh = (e) => {
            null == M || M(e, et);
        };
    function em() {
        return U && !V
            ? (0, r.jsx)(l.ua7, {
                  text: j.intl.string(j.t.BVK71t),
                  children: (e) =>
                      (0, r.jsx)(
                          "div",
                          G(
                              {
                                  className: a()(k.iconPriortySpeaker, {
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
            className: a()(o, k.avatar, {
                [k.avatarLarge]: d === L.ipw.LARGE,
                [k.avatarSmall]: d === L.ipw.SMALL,
                [k.avatarSpeaking]: B,
            }),
            style: { backgroundImage: "url(".concat(et.getAvatarURL(K, d === L.ipw.LARGE ? 38 : 24), ")") },
        });
    }
    function eE() {
        let e = (0, r.jsxs)("div", {
                className: a()(c, k.username, el, { [k.usernameSpeaking]: !H && !Y && B }),
                children: [
                    null != z ? z : w.ZP.getName(et),
                    q
                        ? (0, r.jsxs)("span", {
                              className: k.guestSuffix,
                              children: ["\xA0", j.intl.string(j.t["pFO/Pj"])],
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
                className: a()(k.clanTag, g && k.isOverlay),
                profileViewedAnalytics: { source: g ? L.jXE.OVERLAY : L.Sbl.VOICE_PANEL },
            };
        return !V || g ? (0, r.jsx)(y.Z, Z(G({}, t), { children: e })) : null;
    }
    function eb() {
        return (0, r.jsx)(W, G({ disabled: _ }, b));
    }
    function ey(e) {
        null != K &&
            null != eo &&
            ((0, h.v)(er, h.d.MORE),
            eu(!0),
            (0, I.D)(e, et, eo, { context: ei }, (e, t) => {
                (0, m.o)({
                    menuName: e,
                    menuItemProps: t,
                    entrypoint: x.A5.THREE_DOT,
                    location: er,
                    targetUserId: et.id,
                });
            }));
    }
    function eO() {
        return V || !ea || es
            ? null
            : (0, r.jsx)(l.DY3, {
                  text: j.intl.string(j.t["+1H47u"]),
                  className: a()(k.optionsButtonContainer, { [k.optionsContainerActive]: ec }),
                  children: (0, r.jsx)(l.P3F, {
                      className: a()(k.optionsButton, { [k.optionsActive]: ec }),
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
        className: a()(Q, {
            [k.voiceUser]: !0,
            [k.overlap]: J,
            [k.selected]: f,
            [k.clickable]: null != O,
            [k.userSmall]: d === L.ipw.SMALL,
            [k.userLarge]: d === L.ipw.LARGE,
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
            className: a()(k.content, { [k.flipped]: X }),
            children: [em(), eg(), eE(), eb(), eO()],
        }),
    });
}
let z = i.forwardRef(K);
function q(e) {
    let { application: t, iconClassName: n, guildId: o, channelId: s, userId: u } = e,
        [d, f] = i.useState(!1),
        p = (0, c.O)((e) => f(e));
    i.useEffect(() => {
        d &&
            _.ZP.trackWithMetadata(L.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: s,
                guild_id: o,
                user_id: u,
            });
    }, [t.id, s, o, u, d]);
    let h = () => {
        _.ZP.trackWithMetadata(L.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: s,
            guild_id: o,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(l.DY3, {
        text: j.intl.formatToPlainString(j.t.Sq9xJy, { game: t.name }),
        "aria-label": j.intl.formatToPlainString(j.t.Sq9xJy, { game: t.name }),
        className: k.iconSpacing,
        children: (0, r.jsx)("div", {
            ref: p,
            children: (0, r.jsx)(b.Z, {
                className: a()(k.icon, n),
                game: t,
                size: b.Z.Sizes.XSMALL,
                onMouseEnter: h,
            }),
        }),
    });
}
function X(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: o, deaf: s, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e,
            n = () => (i ? j.intl.string(j.t.Q8Uzoa) : o ? j.intl.string(j.t.uLddbW) : j.intl.string(j.t.tjtv3N));
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
                    text: c ? j.intl.string(j.t.btxSdH) : j.intl.string(j.t.NjmiOD),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return 0 === u.length ? null : u;
}
