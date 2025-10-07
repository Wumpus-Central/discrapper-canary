n.d(t, {
    ZP: () => U,
    eJ: () => M,
    nm: () => j,
}),
    n(539854),
    n(997841),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(907331),
    l = n(28664),
    c = n(481060),
    u = n(456100),
    d = n(657305),
    f = n(367907),
    _ = n(194082),
    p = n(7284),
    h = n(925329),
    m = n(340044),
    g = n(223135),
    E = n(374129),
    b = n(639351),
    y = n(630388),
    O = n(51144),
    v = n(981631),
    I = n(354459),
    T = n(927923),
    S = n(388032),
    A = n(368736);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
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
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = 16,
    x = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i, onAddHangStatusClicked: a, userId: s } = e,
            l = (e) => {
                e.stopPropagation(), null == a || a();
            };
        return i && null == t
            ? (0, r.jsx)(c.P3F, {
                  onClick: l,
                  className: A.icons,
                  children: (0, r.jsx)(c.EO4, {
                      color: "currentColor",
                      className: o()(A.icon, A.hoverableIcon, n),
                  }),
              })
            : (0, r.jsx)(c.P3F, {
                  onClick: l,
                  className: A.icons,
                  children: (0, r.jsx)(g.Z, {
                      userId: s,
                      size: L,
                      hangStatusActivity: t,
                      className: o()(A.icon, n),
                  }),
              });
    },
    M = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: o()(i, A.list, n ? A.listCollapse : A.listDefault),
            role: "group",
            children: t,
        });
    };
function j(e) {
    let {
            className: t,
            mute: n,
            localMute: i,
            localVideoDisabled: a,
            serverMute: s,
            deaf: f,
            serverDeaf: p,
            collapsed: h,
            video: m,
            isStreaming: g,
            disabled: O,
            isWatching: C,
            iconClassName: N,
            embeddedApplication: R,
            otherClientSessionType: P,
            voicePlatform: w,
            application: D,
            guildId: L,
            channelId: M,
            user: j,
            disconnected: k,
            hangStatusActivity: U,
            showHangStatus: Z,
            isSelf: F,
            handleHoverHangStatus: V,
            handleHoverIcons: H,
            onAddHangStatusClicked: Y,
        } = e,
        { enabled: W } = u.c.getCurrentConfig({ location: "VoiceUserIcons" }, { autoTrackExposure: !0 });
    if (h || O) return null;
    let K = [],
        z = B({
            iconClassName: N,
            mute: n,
            localMute: i,
            serverMute: s,
            deaf: f,
            serverDeaf: p,
        });
    m &&
        (a
            ? K.push(
                  (0, r.jsx)(
                      l.u,
                      {
                          text: S.intl.string(S.t["PXMZ//"]),
                          children: (0, r.jsx)(c.Amn, {
                              size: "md",
                              color: "currentColor",
                              className: o()(A.icon, N),
                              colorClass: A.strikethrough,
                          }),
                      },
                      "video",
                  ),
              )
            : K.push(
                  (0, r.jsx)(
                      l.u,
                      {
                          text: S.intl.string(S.t.FlNoSU),
                          children: (0, r.jsx)(c.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: o()(A.icon, N),
                          }),
                      },
                      "video",
                  ),
              )),
        k &&
            K.push(
                (0, r.jsx)(
                    l.u,
                    {
                        text: S.intl.string(S.t.HFwRpq),
                        children: (0, r.jsx)(c.Mgn, {
                            className: o()(A.icon, N),
                            color: c.TVs.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            );
    let q = W ? c.iWm : c.nG3;
    null != R &&
        K.push(
            (0, r.jsx)(
                l.u,
                {
                    text: (0, d.Z)(R.name),
                    children: (0, r.jsx)(q, {
                        size: "md",
                        color: "currentColor",
                        className: o()(A.icon, N),
                    }),
                },
                "activity",
            ),
        ),
        P === T.YE.XBOX || w === I.wR.XBOX
            ? K.push((0, r.jsx)(b.Z, { className: o()(A.icon, N) }, "xbox"))
            : (P === T.YE.PLAYSTATION || w === I.wR.PLAYSTATION) &&
              K.push((0, r.jsx)(E.Z, { className: o()(A.icon, N) }, "playstation")),
        C &&
            K.push(
                (0, r.jsx)(
                    l.u,
                    {
                        text: S.intl.string(S.t.JH1SJy),
                        children: (0, r.jsx)(c.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: o()(A.icon, N),
                        }),
                    },
                    "watch",
                ),
            ),
        g && K.push((0, r.jsx)(_.ZP, { size: _.ZP.Sizes.SMALL }, "stream"));
    let X = null != D && !(0, y.yE)(D.flags, v.udG.EMBEDDED),
        Q = null == U && X;
    return 0 !== K.length || 0 !== z.length || Z || Q
        ? (0, r.jsxs)("div", {
              className: o()(A.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: A.iconGroup,
                      onMouseEnter: () => (null == H ? void 0 : H(!0)),
                      onMouseLeave: () => (null == H ? void 0 : H(!1)),
                      children: [z, K],
                  }),
                  Z || Q
                      ? (0, r.jsx)("div", {
                            className: A.iconGroup,
                            onMouseEnter: () => (null == V ? void 0 : V(!0)),
                            onMouseLeave: () => (null == V ? void 0 : V(!1)),
                            children: Q
                                ? (0, r.jsx)(
                                      G,
                                      {
                                          application: D,
                                          iconClassName: N,
                                          guildId: L,
                                          channelId: M,
                                          userId: j.id,
                                      },
                                      "".concat(j.id, "-game"),
                                  )
                                : (0, r.jsx)(x, {
                                      userId: j.id,
                                      hangStatusActivity: U,
                                      iconClassName: N,
                                      isSelf: F,
                                      onAddHangStatusClicked: Y,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
function k(e, t) {
    var n,
        {
            avatarContainerClass: i = A.avatarContainer,
            userNameClassName: a = A.usernameFont,
            size: s = v.ipw.SMALL,
            selected: u = !1,
            disabled: d = !1,
            isOverlay: f = !1,
        } = e,
        _ = w(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
    let {
            onClick: h,
            onKeyDown: g,
            onDoubleClick: E,
            onContextMenu: b,
            onMouseLeave: y,
            onMouseDown: I,
            priority: T,
            speaking: C,
            collapsed: R,
            mute: D,
            serverMute: L,
            guildId: x,
            nick: M,
            isGuest: k,
            flipped: U,
            className: G,
            overlap: B,
            "aria-label": Z,
            ringing: F,
            user: V,
        } = _,
        H = (0, p.j)({ displayNameStyles: V.displayNameStyles }),
        Y = (e) => {
            null == h || h(e, V);
        },
        W = (e) => {
            null == E || E(e, V);
        },
        K = (e) => {
            null == b || b(e, V);
        },
        z = (e) => {
            null == y || y(e, V);
        },
        q = (e) => {
            null == I || I(e, V);
        };
    function X() {
        return T && !R
            ? (0, r.jsx)(l.u, {
                  text: S.intl.string(S.t.BVK71t),
                  children: (0, r.jsx)("div", {
                      className: o()(A.iconPriortySpeaker, { [A.iconPriortySpeakerSpeaking]: !D && !L && C }),
                  }),
              })
            : null;
    }
    function Q() {
        return (0, r.jsx)("div", {
            className: o()(i, A.avatar, {
                [A.avatarLarge]: s === v.ipw.LARGE,
                [A.avatarSmall]: s === v.ipw.SMALL,
                [A.avatarSpeaking]: C,
            }),
            style: { backgroundImage: "url(".concat(V.getAvatarURL(x, s === v.ipw.LARGE ? 38 : 24), ")") },
        });
    }
    function J() {
        let e = (0, r.jsxs)("div", {
                className: o()(a, A.username, H, { [A.usernameSpeaking]: !D && !L && C }),
                children: [
                    null != M ? M : O.ZP.getName(V),
                    k
                        ? (0, r.jsxs)("span", {
                              className: A.guestSuffix,
                              children: ["\xA0", S.intl.string(S.t["pFO/Pj"])],
                          })
                        : "",
                ],
            }),
            t = {
                primaryGuild: V.primaryGuild,
                userId: V.id,
                contextGuildId: x,
                isOverlay: f,
                disableTooltip: !0,
                className: o()(A.clanTag, f && A.isOverlay),
                profileViewedAnalytics: { source: f ? v.jXE.OVERLAY : v.Sbl.VOICE_PANEL },
            };
        return !R || f ? (0, r.jsx)(m.Z, P(N({}, t), { children: e })) : null;
    }
    function $() {
        return (0, r.jsx)(j, N({ disabled: d }, _));
    }
    return (0, r.jsx)(c.kL8, {
        ref: t,
        className: o()(G, {
            [A.voiceUser]: !0,
            [A.overlap]: B,
            [A.selected]: u,
            [A.clickable]: null != h,
            [A.userSmall]: s === v.ipw.SMALL,
            [A.userLarge]: s === v.ipw.LARGE,
            [A.disabled]: !u && d,
            [A.ringing]: F,
        }),
        onClick: Y,
        onDoubleClick: W,
        onContextMenu: K,
        onMouseLeave: z,
        onMouseDown: q,
        onKeyDown: g,
        "aria-label": null != (n = null != Z ? Z : M) ? n : V.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: o()(A.content, { [A.flipped]: U }),
            children: [X(), Q(), J(), $()],
        }),
    });
}
let U = i.forwardRef(k);
function G(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: c, userId: u } = e,
        [d, _] = i.useState(!1),
        p = (0, s.O)((e) => _(e));
    i.useEffect(() => {
        d &&
            f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: c,
                guild_id: a,
                user_id: u,
            });
    }, [t.id, c, a, u, d]);
    let m = () => {
        f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: c,
            guild_id: a,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(l.u, {
        text: S.intl.formatToPlainString(S.t.Sq9xJy, { game: t.name }),
        "aria-label": S.intl.formatToPlainString(S.t.Sq9xJy, { game: t.name }),
        children: (0, r.jsx)(h.Z, {
            ref: p,
            className: o()(A.icon, A.gameIcon, n),
            game: t,
            size: h.A.XSMALL,
            onMouseEnter: m,
        }),
    });
}
function B(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: s, serverDeaf: u } = e,
        d = [];
    if (n) {
        let e,
            n = () => (i ? S.intl.string(S.t.Q8Uzoa) : a ? S.intl.string(S.t.uLddbW) : S.intl.string(S.t.tjtv3N));
        e = a || i ? c.v0G : c.nRN;
        let s = (0, r.jsx)(e, {
            className: o()(A.icon, t, { [A.iconServer]: a }),
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
                className: o()(A.icon, t, { [A.iconServer]: u }),
                color: "currentColor",
            });
        d.push(
            (0, r.jsx)(
                l.u,
                {
                    text: u ? S.intl.string(S.t.btxSdH) : S.intl.string(S.t.NjmiOD),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return d;
}
