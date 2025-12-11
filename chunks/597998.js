n.d(t, {
    ZP: () => U,
    eJ: () => M,
    nm: () => k,
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
    p = n(538870),
    _ = n(194082),
    m = n(386725),
    h = n(7284),
    g = n(925329),
    E = n(340044),
    b = n(223135),
    y = n(374129),
    O = n(639351),
    v = n(51144),
    S = n(981631),
    I = n(354459),
    T = n(927923),
    C = n(388032),
    A = n(960414);
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
function P(e) {
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
function w(e, t) {
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
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = 16,
    j = (e) => {
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
                  children: (0, r.jsx)(b.Z, {
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
function k(e) {
    let {
        className: t,
        mute: n,
        localMute: i,
        localVideoDisabled: a,
        serverMute: s,
        deaf: f,
        serverDeaf: p,
        collapsed: m,
        video: h,
        isStreaming: g,
        disabled: E,
        isWatching: b,
        iconClassName: v,
        embeddedApplication: N,
        otherClientSessionType: P,
        voicePlatform: R,
        application: w,
        guildId: D,
        channelId: x,
        user: L,
        disconnected: M,
        hangStatusActivity: k,
        showHangStatus: U,
        isSelf: B,
        handleHoverHangStatus: F,
        handleHoverIcons: V,
        onAddHangStatusClicked: H,
    } = e;
    if (m || E) return null;
    let Y = [],
        W = Z({
            iconClassName: v,
            mute: n,
            localMute: i,
            serverMute: s,
            deaf: f,
            serverDeaf: p,
        });
    h &&
        (a
            ? Y.push(
                  (0, r.jsx)(
                      c.u,
                      {
                          text: C.intl.string(C.t["PXMZ/+"]),
                          children: (0, r.jsx)(u.Amn, {
                              size: "md",
                              color: "currentColor",
                              className: o()(A.icon, v),
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
                          text: C.intl.string(C.t.FlNoSV),
                          children: (0, r.jsx)(u.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: o()(A.icon, v),
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
                        text: C.intl.string(C.t.HFwRpk),
                        children: (0, r.jsx)(u.Mgn, {
                            className: o()(A.icon, v),
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
                            className: o()(A.icon, v),
                        }),
                    },
                    "activity",
                ),
            ),
        P === T.YE.XBOX || R === I.wR.XBOX
            ? Y.push((0, r.jsx)(O.Z, { className: o()(A.icon, v) }, "xbox"))
            : (P === T.YE.PLAYSTATION || R === I.wR.PLAYSTATION) &&
              Y.push((0, r.jsx)(y.Z, { className: o()(A.icon, v) }, "playstation")),
        b &&
            Y.push(
                (0, r.jsx)(
                    c.u,
                    {
                        text: C.intl.string(C.t["JH1SJ+"]),
                        children: (0, r.jsx)(u.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: o()(A.icon, v),
                        }),
                    },
                    "watch",
                ),
            ),
        g && Y.push((0, r.jsx)(_.ZP, { size: _.ZP.Sizes.SMALL }, "stream"));
    let K = null != w && !(0, l.yE)(w.flags, S.udG.EMBEDDED),
        z = null == k && K;
    return 0 !== Y.length || 0 !== W.length || U || z
        ? (0, r.jsxs)("div", {
              className: o()(A.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: A.iconGroup,
                      onMouseEnter: () => (null == V ? void 0 : V(!0)),
                      onMouseLeave: () => (null == V ? void 0 : V(!1)),
                      children: [W, Y],
                  }),
                  U || z
                      ? (0, r.jsx)("div", {
                            className: A.iconGroup,
                            onMouseEnter: () => (null == F ? void 0 : F(!0)),
                            onMouseLeave: () => (null == F ? void 0 : F(!1)),
                            children: z
                                ? (0, r.jsx)(
                                      G,
                                      {
                                          application: w,
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
                                      isSelf: B,
                                      onAddHangStatusClicked: H,
                                  }),
                        })
                      : null,
              ],
          })
        : null;
}
let U = function (e) {
    var t,
        {
            avatarContainerClass: n = A.avatarContainer,
            userNameClassName: i = A.usernameFont,
            size: a = S.ipw.SMALL,
            selected: s = !1,
            disabled: l = !1,
            isOverlay: d = !1,
            ref: f,
        } = e,
        _ = D(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]);
    let {
            onClick: g,
            onKeyDown: b,
            onDoubleClick: y,
            onContextMenu: O,
            onMouseLeave: I,
            onMouseDown: T,
            priority: N,
            speaking: R = !1,
            voiceDb: x = -1 / 0,
            latched: L,
            collapsed: j,
            mute: M,
            serverMute: U,
            guildId: G,
            nick: Z,
            isGuest: B,
            flipped: F,
            className: V,
            overlap: H,
            "aria-label": Y,
            ringing: W,
            user: K,
        } = _,
        z = (0, m.Z)({
            userId: K.id,
            guildId: G,
        }),
        q = (0, h.j)({ displayNameStyles: z }),
        Q = (0, p._)({
            isSpeaking: R,
            isLatched: L,
            voiceDb: x,
        }),
        X = (e) => {
            null == g || g(e, K);
        },
        J = (e) => {
            null == y || y(e, K);
        },
        $ = (e) => {
            null == O || O(e, K);
        },
        ee = (e) => {
            null == I || I(e, K);
        },
        et = (e) => {
            null == T || T(e, K);
        };
    function en() {
        return N && !j
            ? (0, r.jsx)(c.u, {
                  text: C.intl.string(C.t.BVK71i),
                  children: (0, r.jsx)("div", {
                      className: o()(A.iconPriortySpeaker, { [A.iconPriortySpeakerSpeaking]: !M && !U && R }),
                  }),
              })
            : null;
    }
    function er() {
        return (0, r.jsx)("div", {
            className: o()(n, A.avatar, {
                [A.avatarLarge]: a === S.ipw.LARGE,
                [A.avatarSmall]: a === S.ipw.SMALL,
            }),
            style: P({ backgroundImage: "url(".concat(K.getAvatarURL(G, a === S.ipw.LARGE ? 38 : 24), ")") }, Q),
        });
    }
    function ei() {
        let e = (0, r.jsxs)("div", {
                className: o()(i, A.username, q, { [A.usernameSpeaking]: !M && !U && R }),
                children: [
                    null != Z ? Z : v.ZP.getName(K),
                    B
                        ? (0, r.jsxs)("span", {
                              className: A.guestSuffix,
                              children: ["\xA0", C.intl.string(C.t["pFO/Ph"])],
                          })
                        : "",
                ],
            }),
            t = {
                primaryGuild: K.primaryGuild,
                userId: K.id,
                contextGuildId: G,
                isOverlay: d,
                disableTooltip: !0,
                className: o()(A.clanTag, d && A.isOverlay),
                profileViewedAnalytics: { source: d ? S.jXE.OVERLAY : S.Sbl.VOICE_PANEL },
            };
        return !j || d ? (0, r.jsx)(E.Z, w(P({}, t), { children: e })) : null;
    }
    function ea() {
        return (0, r.jsx)(k, P({ disabled: l }, _));
    }
    return (0, r.jsx)(u.kL8, {
        ref: f,
        className: o()(V, {
            [A.voiceUser]: !0,
            [A.overlap]: H,
            [A.selected]: s,
            [A.clickable]: null != g,
            [A.userSmall]: a === S.ipw.SMALL,
            [A.userLarge]: a === S.ipw.LARGE,
            [A.disabled]: !s && l,
            [A.ringing]: W,
        }),
        onClick: X,
        onDoubleClick: J,
        onContextMenu: $,
        onMouseLeave: ee,
        onMouseDown: et,
        onKeyDown: b,
        "aria-label": null != (t = null != Y ? Y : Z) ? t : K.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: o()(A.content, { [A.flipped]: F }),
            children: [en(), er(), ei(), ea()],
        }),
    });
};
function G(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: l, userId: u } = e,
        [d, p] = i.useState(!1),
        _ = (0, s.O)((e) => p(e));
    i.useEffect(() => {
        d &&
            f.ZP.trackWithMetadata(S.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: l,
                guild_id: a,
                user_id: u,
            });
    }, [t.id, l, a, u, d]);
    let m = () => {
        f.ZP.trackWithMetadata(S.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: l,
            guild_id: a,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(c.u, {
        text: C.intl.formatToPlainString(C.t.Sq9xJ7, { game: t.name }),
        "aria-label": C.intl.formatToPlainString(C.t.Sq9xJ7, { game: t.name }),
        children: (0, r.jsx)(g.Z, {
            ref: _,
            className: o()(A.icon, A.gameIcon, n),
            game: t,
            size: g.A.XSMALL,
            onMouseEnter: m,
        }),
    });
}
function Z(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: s, serverDeaf: l } = e,
        d = [];
    if (n) {
        let e,
            n = () => (i ? C.intl.string(C.t.Q8Uzof) : a ? C.intl.string(C.t.uLddbQ) : C.intl.string(C.t.tjtv3P));
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
                    text: l ? C.intl.string(C.t.btxSdB) : C.intl.string(C.t.NjmiOL),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return d;
}
