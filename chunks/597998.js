n.d(t, {
    ZP: () => B,
    eJ: () => V,
    nm: () => F,
}),
    n(539854),
    n(997841),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(434650),
    u = n(40851),
    d = n(456100),
    p = n(657305),
    f = n(367907),
    m = n(906732),
    g = n(522651),
    v = n(795318),
    _ = n(194082),
    b = n(7284),
    h = n(925329),
    y = n(340044),
    O = n(833858),
    j = n(223135),
    S = n(880395),
    x = n(314897),
    I = n(592125),
    P = n(979651),
    C = n(574254),
    E = n(374129),
    w = n(639351),
    T = n(630388),
    N = n(51144),
    Z = n(91088),
    A = n(981631),
    D = n(354459),
    k = n(927923),
    L = n(388032),
    M = n(368736);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let R = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, r.jsx)(
                  s.DY3,
                  {
                      className: M.iconSpacing,
                      text: L.intl.string(L.t.qstQub),
                      children: (0, r.jsx)(s.svS, { className: a()(M.icon, n) }),
                  },
                  "add-status",
              )
            : (0, r.jsx)(
                  s.DY3,
                  {
                      className: M.iconSpacing,
                      text: (0, O.O8)(t),
                      children: (0, r.jsx)(j.Z, {
                          hangStatusActivity: t,
                          className: a()(M.hangStatusIcon, n),
                      }),
                  },
                  "hang-status",
              );
    },
    V = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: a()(i, M.list, n ? M.listCollapse : M.listDefault),
            role: "group",
            children: t,
        });
    };
function F(e) {
    let {
            className: t,
            mute: n,
            localMute: i,
            localVideoDisabled: l,
            serverMute: o,
            deaf: c,
            serverDeaf: u,
            collapsed: f,
            video: m,
            isStreaming: g,
            disabled: v,
            isWatching: b,
            iconClassName: h,
            embeddedApplication: y,
            otherClientSessionType: O,
            voicePlatform: j,
            application: S,
            guildId: x,
            channelId: I,
            user: P,
            disconnected: C,
            hangStatusActivity: N,
            showHangStatus: Z,
            isSelf: U,
            handleHoverHangStatus: V,
            handleHoverIcons: F,
        } = e,
        { enabled: B } = d.c.getCurrentConfig({ location: "VoiceUserIcons" }, { autoTrackExposure: !0 });
    if (f || v) return null;
    let H = [],
        G = (0, r.jsx)(Y, {
            iconClassName: h,
            mute: n,
            localMute: i,
            serverMute: o,
            deaf: c,
            serverDeaf: u,
        });
    m &&
        (l
            ? H.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: M.iconSpacing,
                          text: L.intl.string(L.t["PXMZ//"]),
                          children: (0, r.jsx)(s.Amn, {
                              size: "md",
                              color: "currentColor",
                              className: a()(M.icon, h),
                              colorClass: M.strikethrough,
                          }),
                      },
                      "video",
                  ),
              )
            : H.push(
                  (0, r.jsx)(
                      s.DY3,
                      {
                          className: M.iconSpacing,
                          text: L.intl.string(L.t.FlNoSU),
                          children: (0, r.jsx)(s.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: a()(M.icon, h),
                          }),
                      },
                      "video",
                  ),
              )),
        C &&
            H.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: M.iconSpacing,
                        text: L.intl.string(L.t.HFwRpq),
                        children: (0, r.jsx)(s.Mgn, {
                            className: a()(M.icon, h),
                            color: s.TVs.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            );
    let z = B ? s.iWm : s.nG3;
    null != y &&
        H.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: (0, p.Z)(y.name),
                    className: M.iconSpacing,
                    children: (0, r.jsx)(z, {
                        size: "md",
                        color: "currentColor",
                        className: a()(M.icon, h),
                    }),
                },
                "activity",
            ),
        ),
        O === k.YE.XBOX || j === D.wR.XBOX
            ? H.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: M.iconSpacing,
                          children: (0, r.jsx)(w.Z, { className: a()(M.icon, h) }),
                      },
                      "xbox",
                  ),
              )
            : (O === k.YE.PLAYSTATION || j === D.wR.PLAYSTATION) &&
              H.push(
                  (0, r.jsx)(
                      "div",
                      {
                          className: M.iconSpacing,
                          children: (0, r.jsx)(E.Z, { className: a()(M.icon, h) }),
                      },
                      "playstation",
                  ),
              ),
        b &&
            H.push(
                (0, r.jsx)(
                    s.DY3,
                    {
                        className: M.iconSpacing,
                        text: L.intl.string(L.t.JH1SJy),
                        children: (0, r.jsx)(s.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: a()(M.icon, h),
                        }),
                    },
                    "watch",
                ),
            ),
        g &&
            H.push(
                (0, r.jsx)(
                    "div",
                    {
                        className: a()(M.iconSpacing, M.liveIconSpacing),
                        children: (0, r.jsx)(_.ZP, { size: _.ZP.Sizes.SMALL }),
                    },
                    "stream",
                ),
            );
    let J = null != S && !(0, T.yE)(S.flags, A.udG.EMBEDDED),
        X = null == N && J;
    return 0 !== H.length || null != G || Z || X
        ? (0, r.jsxs)("div", {
              className: a()(M.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: M.iconGroup,
                      onMouseEnter: () => (null == F ? void 0 : F(!0)),
                      onMouseLeave: () => (null == F ? void 0 : F(!1)),
                      children: [G, H],
                  }),
                  Z || X
                      ? (0, r.jsx)("div", {
                            className: M.iconGroup,
                            onMouseEnter: () => (null == V ? void 0 : V(!0)),
                            onMouseLeave: () => (null == V ? void 0 : V(!1)),
                            children: X
                                ? (0, r.jsx)(
                                      W,
                                      {
                                          application: S,
                                          iconClassName: h,
                                          guildId: x,
                                          channelId: I,
                                          userId: P.id,
                                      },
                                      "".concat(P.id, "-game"),
                                  )
                                : (0, r.jsx)(R, {
                                      hangStatusActivity: N,
                                      iconClassName: h,
                                      isSelf: U,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let B = i.forwardRef(function (e, t) {
    var n,
        {
            avatarContainerClass: l = M.avatarContainer,
            userNameClassName: c = M.usernameFont,
            size: d = A.ipw.SMALL,
            selected: p = !1,
            disabled: f = !1,
            isOverlay: _ = !1,
        } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
    let {
            onClick: O,
            onKeyDown: j,
            onDoubleClick: E,
            onContextMenu: w,
            onMouseLeave: T,
            onMouseDown: k,
            priority: R,
            speaking: V,
            collapsed: B,
            mute: W,
            serverMute: Y,
            guildId: H,
            nick: G,
            isGuest: z,
            flipped: J,
            className: X,
            overlap: q,
            "aria-label": K,
            ringing: Q,
            user: $,
            channelId: ee,
        } = h,
        { parentAnalyticsLocation: et } = (0, m.ZP)(),
        en = (0, u.bp)(),
        er = null != ee ? I.Z.getChannel(ee) : null,
        ei = (0, o.e7)([x.default, P.Z], () => P.Z.isInChannel(ee, x.default.getId())),
        { enabled: el } = Z.P.useExperiment({ location: "VoiceUser" }),
        ea = (0, b.j)({ displayNameStyles: $.displayNameStyles }),
        [eo, es] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = !1,
                t = () => {
                    e !== C.Z.isOpen() && ((e = C.Z.isOpen()) || es(!1));
                };
            return C.Z.addChangeListener(t), () => C.Z.removeChangeListener(t);
        }, []),
        (0, r.jsx)(s.kL8, {
            ref: t,
            className: a()(X, {
                [M.voiceUser]: !0,
                [M.overlap]: q,
                [M.selected]: p,
                [M.clickable]: null != O,
                [M.userSmall]: d === A.ipw.SMALL,
                [M.userLarge]: d === A.ipw.LARGE,
                [M.disabled]: !p && f,
                [M.ringing]: Q,
            }),
            onClick: (e) => {
                null == O || O(e, $);
            },
            onDoubleClick: (e) => {
                null == E || E(e, $);
            },
            onContextMenu: (e) => {
                null == w || w(e, $);
            },
            onMouseLeave: (e) => {
                null == T || T(e, $);
            },
            onMouseDown: (e) => {
                null == k || k(e, $);
            },
            onKeyDown: j,
            "aria-label": null != (n = null != K ? K : G) ? n : $.username,
            focusProps: { offset: { right: 4 } },
            children: (0, r.jsxs)("div", {
                className: a()(M.content, { [M.flipped]: J }),
                children: [
                    R && !B
                        ? (0, r.jsx)(s.ua7, {
                              text: L.intl.string(L.t.BVK71t),
                              children: (e) =>
                                  (0, r.jsx)(
                                      "div",
                                      U(
                                          {
                                              className: a()(M.iconPriortySpeaker, {
                                                  [M.iconPriortySpeakerSpeaking]: !W && !Y && V,
                                              }),
                                          },
                                          e,
                                      ),
                                  ),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: a()(l, M.avatar, {
                            [M.avatarLarge]: d === A.ipw.LARGE,
                            [M.avatarSmall]: d === A.ipw.SMALL,
                            [M.avatarSpeaking]: V,
                        }),
                        style: { backgroundImage: "url(".concat($.getAvatarURL(H, d === A.ipw.LARGE ? 38 : 24), ")") },
                    }),
                    (function () {
                        var e, t;
                        let n = (0, r.jsxs)("div", {
                                className: a()(c, M.username, ea, { [M.usernameSpeaking]: !W && !Y && V }),
                                children: [
                                    null != G ? G : N.ZP.getName($),
                                    z
                                        ? (0, r.jsxs)("span", {
                                              className: M.guestSuffix,
                                              children: ["\xA0", L.intl.string(L.t["pFO/Pj"])],
                                          })
                                        : "",
                                ],
                            }),
                            i = {
                                primaryGuild: $.primaryGuild,
                                userId: $.id,
                                contextGuildId: H,
                                isOverlay: _,
                                disableTooltip: !0,
                                className: a()(M.clanTag, _ && M.isOverlay),
                                profileViewedAnalytics: { source: _ ? A.jXE.OVERLAY : A.Sbl.VOICE_PANEL },
                            };
                        return !B || _
                            ? (0, r.jsx)(
                                  y.Z,
                                  ((e = U({}, i)),
                                  (t = t = { children: n }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(t)).forEach(function (n) {
                                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                        }),
                                  e),
                              )
                            : null;
                    })(),
                    (0, r.jsx)(F, U({ disabled: f }, h)),
                    B || !ei || el
                        ? null
                        : (0, r.jsx)(s.DY3, {
                              text: L.intl.string(L.t["+1H47u"]),
                              className: a()(M.optionsButtonContainer, { [M.optionsContainerActive]: eo }),
                              children: (0, r.jsx)(s.P3F, {
                                  className: a()(M.optionsButton, { [M.optionsActive]: eo }),
                                  onClick: function (e) {
                                      null != H &&
                                          null != er &&
                                          ((0, g.v)(et, g.d.MORE),
                                          es(!0),
                                          (0, S.D)(e, $, er, { context: en }, (e, t) => {
                                              (0, v.o)({
                                                  menuName: e,
                                                  menuItemProps: t,
                                                  entrypoint: D.A5.THREE_DOT,
                                                  location: et,
                                                  targetUserId: $.id,
                                              });
                                          }));
                                  },
                                  children: (0, r.jsx)(s.xhG, {
                                      size: "md",
                                      className: M.icon,
                                  }),
                              }),
                          }),
                ],
            }),
        })
    );
});
function W(e) {
    let { application: t, iconClassName: n, guildId: l, channelId: o, userId: u } = e,
        [d, p] = i.useState(!1),
        m = (0, c.O)((e) => p(e));
    return (
        i.useEffect(() => {
            d &&
                f.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: o,
                    guild_id: l,
                    user_id: u,
                });
        }, [t.id, o, l, u, d]),
        (0, r.jsx)(s.DY3, {
            text: L.intl.formatToPlainString(L.t.Sq9xJy, { game: t.name }),
            "aria-label": L.intl.formatToPlainString(L.t.Sq9xJy, { game: t.name }),
            className: M.iconSpacing,
            children: (0, r.jsx)("div", {
                ref: m,
                children: (0, r.jsx)(h.Z, {
                    className: a()(M.icon, n),
                    game: t,
                    size: h.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        f.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                            channel_id: o,
                            guild_id: l,
                            game_name: t.name,
                            user_id: u,
                        });
                    },
                }),
            }),
        })
    );
}
function Y(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: l, deaf: o, serverDeaf: c } = e,
        u = [];
    if (n) {
        let e;
        e = l || i ? s.v0G : s.nRN;
        let n = (0, r.jsx)(e, {
            className: a()(M.icon, t, { [M.iconServer]: l }),
            color: "currentColor",
        });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    text: i ? L.intl.string(L.t.Q8Uzoa) : l ? L.intl.string(L.t.uLddbW) : L.intl.string(L.t.tjtv3N),
                    className: M.iconSpacing,
                    children: n,
                },
                "mute",
            ),
        );
    }
    if (c || o) {
        let e = c ? s.Vm4 : s.wE8,
            n = (0, r.jsx)(e, {
                className: a()(M.icon, t, { [M.iconServer]: c }),
                color: "currentColor",
            });
        u.push(
            (0, r.jsx)(
                s.DY3,
                {
                    className: M.iconSpacing,
                    text: c ? L.intl.string(L.t.btxSdH) : L.intl.string(L.t.NjmiOD),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return 0 === u.length ? null : u;
}
