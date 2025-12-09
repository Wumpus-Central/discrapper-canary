n.d(t, {
    ZP: () => k,
    eJ: () => j,
    nm: () => M,
}),
    n(539854),
    n(997841),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(907331),
    l = n(95015),
    c = n(28664),
    u = n(481060),
    d = n(657305),
    f = n(367907),
    p = n(194082),
    _ = n(386725),
    m = n(7284),
    h = n(925329),
    g = n(340044),
    E = n(223135),
    b = n(374129),
    y = n(639351),
    O = n(51144),
    v = n(981631),
    S = n(354459),
    I = n(927923),
    T = n(388032),
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
function P(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let x = 16,
    L = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i, onAddHangStatusClicked: a, userId: s } = e,
            l = (e) => {
                e.stopPropagation(), null == a || a();
            };
        return i && null == t
            ? (0, r.jsx)(u.P3F, {
                  onClick: l,
                  className: A.icons,
                  children: (0, r.jsx)(u.EO4, {
                      color: "currentColor",
                      className: o()(A.icon, A.hoverableIcon, n),
                  }),
              })
            : (0, r.jsx)(u.P3F, {
                  onClick: l,
                  className: A.icons,
                  children: (0, r.jsx)(E.Z, {
                      userId: s,
                      size: x,
                      hangStatusActivity: t,
                      className: o()(A.icon, n),
                  }),
              });
    },
    j = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: o()(i, A.list, n ? A.listCollapse : A.listDefault),
            role: "group",
            children: t,
        });
    };
function M(e) {
    let {
        className: t,
        mute: n,
        localMute: i,
        localVideoDisabled: a,
        serverMute: s,
        deaf: f,
        serverDeaf: _,
        collapsed: m,
        video: h,
        isStreaming: g,
        disabled: E,
        isWatching: O,
        iconClassName: C,
        embeddedApplication: N,
        otherClientSessionType: P,
        voicePlatform: R,
        application: D,
        guildId: w,
        channelId: x,
        user: j,
        disconnected: M,
        hangStatusActivity: k,
        showHangStatus: Z,
        isSelf: B,
        handleHoverHangStatus: F,
        handleHoverIcons: V,
        onAddHangStatusClicked: H,
    } = e;
    if (m || E) return null;
    let Y = [],
        W = G({
            iconClassName: C,
            mute: n,
            localMute: i,
            serverMute: s,
            deaf: f,
            serverDeaf: _,
        });
    h &&
        (a
            ? Y.push(
                  (0, r.jsx)(
                      c.u,
                      {
                          text: T.intl.string(T.t["PXMZ/+"]),
                          children: (0, r.jsx)(u.Amn, {
                              size: "md",
                              color: "currentColor",
                              className: o()(A.icon, C),
                              colorClass: A.strikethrough,
                          }),
                      },
                      "video",
                  ),
              )
            : Y.push(
                  (0, r.jsx)(
                      c.u,
                      {
                          text: T.intl.string(T.t.FlNoSV),
                          children: (0, r.jsx)(u.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: o()(A.icon, C),
                          }),
                      },
                      "video",
                  ),
              )),
        M &&
            Y.push(
                (0, r.jsx)(
                    c.u,
                    {
                        text: T.intl.string(T.t.HFwRpk),
                        children: (0, r.jsx)(u.Mgn, {
                            className: o()(A.icon, C),
                            color: u.TVs.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            ),
        null != N &&
            Y.push(
                (0, r.jsx)(
                    c.u,
                    {
                        text: (0, d.Z)(N.name),
                        children: (0, r.jsx)(u.nG3, {
                            size: "md",
                            color: "currentColor",
                            className: o()(A.icon, C),
                        }),
                    },
                    "activity",
                ),
            ),
        P === I.YE.XBOX || R === S.wR.XBOX
            ? Y.push((0, r.jsx)(y.Z, { className: o()(A.icon, C) }, "xbox"))
            : (P === I.YE.PLAYSTATION || R === S.wR.PLAYSTATION) &&
              Y.push((0, r.jsx)(b.Z, { className: o()(A.icon, C) }, "playstation")),
        O &&
            Y.push(
                (0, r.jsx)(
                    c.u,
                    {
                        text: T.intl.string(T.t["JH1SJ+"]),
                        children: (0, r.jsx)(u.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: o()(A.icon, C),
                        }),
                    },
                    "watch",
                ),
            ),
        g && Y.push((0, r.jsx)(p.ZP, { size: p.ZP.Sizes.SMALL }, "stream"));
    let K = null != D && !(0, l.yE)(D.flags, v.udG.EMBEDDED),
        z = null == k && K;
    return 0 !== Y.length || 0 !== W.length || Z || z
        ? (0, r.jsxs)("div", {
              className: o()(A.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: A.iconGroup,
                      onMouseEnter: () => (null == V ? void 0 : V(!0)),
                      onMouseLeave: () => (null == V ? void 0 : V(!1)),
                      children: [W, Y],
                  }),
                  Z || z
                      ? (0, r.jsx)("div", {
                            className: A.iconGroup,
                            onMouseEnter: () => (null == F ? void 0 : F(!0)),
                            onMouseLeave: () => (null == F ? void 0 : F(!1)),
                            children: z
                                ? (0, r.jsx)(
                                      U,
                                      {
                                          application: D,
                                          iconClassName: C,
                                          guildId: w,
                                          channelId: x,
                                          userId: j.id,
                                      },
                                      "".concat(j.id, "-game"),
                                  )
                                : (0, r.jsx)(L, {
                                      userId: j.id,
                                      hangStatusActivity: k,
                                      iconClassName: C,
                                      isSelf: B,
                                      onAddHangStatusClicked: H,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let k = function (e) {
    var t,
        {
            avatarContainerClass: n = A.avatarContainer,
            userNameClassName: i = A.usernameFont,
            size: a = v.ipw.SMALL,
            selected: s = !1,
            disabled: l = !1,
            isOverlay: d = !1,
            ref: f,
        } = e,
        p = D(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]);
    let {
            onClick: h,
            onKeyDown: E,
            onDoubleClick: b,
            onContextMenu: y,
            onMouseLeave: S,
            onMouseDown: I,
            priority: C,
            speaking: P,
            latched: w,
            collapsed: x,
            mute: L,
            serverMute: j,
            guildId: k,
            nick: U,
            isGuest: G,
            flipped: Z,
            className: B,
            overlap: F,
            "aria-label": V,
            ringing: H,
            user: Y,
        } = p,
        W = (0, _.Z)({
            userId: Y.id,
            guildId: k,
        }),
        K = (0, m.j)({ displayNameStyles: W }),
        z = (e) => {
            null == h || h(e, Y);
        },
        q = (e) => {
            null == b || b(e, Y);
        },
        Q = (e) => {
            null == y || y(e, Y);
        },
        X = (e) => {
            null == S || S(e, Y);
        },
        J = (e) => {
            null == I || I(e, Y);
        };
    function $() {
        return C && !x
            ? (0, r.jsx)(c.u, {
                  text: T.intl.string(T.t.BVK71i),
                  children: (0, r.jsx)("div", {
                      className: o()(A.iconPriortySpeaker, { [A.iconPriortySpeakerSpeaking]: !L && !j && P }),
                  }),
              })
            : null;
    }
    function ee() {
        return (0, r.jsx)("div", {
            className: o()(n, A.avatar, {
                [A.avatarLarge]: a === v.ipw.LARGE,
                [A.avatarSmall]: a === v.ipw.SMALL,
                [A.avatarSpeaking]: P,
                [A.avatarLatched]: w && !P,
            }),
            style: { backgroundImage: "url(".concat(Y.getAvatarURL(k, a === v.ipw.LARGE ? 38 : 24), ")") },
        });
    }
    function et() {
        let e = (0, r.jsxs)("div", {
                className: o()(i, A.username, K, { [A.usernameSpeaking]: !L && !j && P }),
                children: [
                    null != U ? U : O.ZP.getName(Y),
                    G
                        ? (0, r.jsxs)("span", {
                              className: A.guestSuffix,
                              children: ["\xA0", T.intl.string(T.t["pFO/Ph"])],
                          })
                        : "",
                ],
            }),
            t = {
                primaryGuild: Y.primaryGuild,
                userId: Y.id,
                contextGuildId: k,
                isOverlay: d,
                disableTooltip: !0,
                className: o()(A.clanTag, d && A.isOverlay),
                profileViewedAnalytics: { source: d ? v.jXE.OVERLAY : v.Sbl.VOICE_PANEL },
            };
        return !x || d ? (0, r.jsx)(g.Z, R(N({}, t), { children: e })) : null;
    }
    function en() {
        return (0, r.jsx)(M, N({ disabled: l }, p));
    }
    return (0, r.jsx)(u.kL8, {
        ref: f,
        className: o()(B, {
            [A.voiceUser]: !0,
            [A.overlap]: F,
            [A.selected]: s,
            [A.clickable]: null != h,
            [A.userSmall]: a === v.ipw.SMALL,
            [A.userLarge]: a === v.ipw.LARGE,
            [A.disabled]: !s && l,
            [A.ringing]: H,
        }),
        onClick: z,
        onDoubleClick: q,
        onContextMenu: Q,
        onMouseLeave: X,
        onMouseDown: J,
        onKeyDown: E,
        "aria-label": null != (t = null != V ? V : U) ? t : Y.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: o()(A.content, { [A.flipped]: Z }),
            children: [$(), ee(), et(), en()],
        }),
    });
};
function U(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: l, userId: u } = e,
        [d, p] = i.useState(!1),
        _ = (0, s.O)((e) => p(e));
    i.useEffect(() => {
        d &&
            f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: l,
                guild_id: a,
                user_id: u,
            });
    }, [t.id, l, a, u, d]);
    let m = () => {
        f.ZP.trackWithMetadata(v.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: l,
            guild_id: a,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(c.u, {
        text: T.intl.formatToPlainString(T.t.Sq9xJ7, { game: t.name }),
        "aria-label": T.intl.formatToPlainString(T.t.Sq9xJ7, { game: t.name }),
        children: (0, r.jsx)(h.Z, {
            ref: _,
            className: o()(A.icon, A.gameIcon, n),
            game: t,
            size: h.A.XSMALL,
            onMouseEnter: m,
        }),
    });
}
function G(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: s, serverDeaf: l } = e,
        d = [];
    if (n) {
        let e,
            n = () => (i ? T.intl.string(T.t.Q8Uzof) : a ? T.intl.string(T.t.uLddbQ) : T.intl.string(T.t.tjtv3P));
        e = a || i ? u.v0G : u.nRN;
        let s = (0, r.jsx)(e, {
            className: o()(A.icon, t, { [A.iconServer]: a }),
            color: "currentColor",
        });
        d.push(
            (0, r.jsx)(
                c.u,
                {
                    text: n(),
                    children: s,
                },
                "mute",
            ),
        );
    }
    if (l || s) {
        let e = l ? u.Vm4 : u.wE8,
            n = (0, r.jsx)(e, {
                className: o()(A.icon, t, { [A.iconServer]: l }),
                color: "currentColor",
            });
        d.push(
            (0, r.jsx)(
                c.u,
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
