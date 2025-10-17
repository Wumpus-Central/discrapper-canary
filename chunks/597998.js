n.d(t, {
    ZP: () => U,
    eJ: () => k,
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
    p = n(386725),
    h = n(7284),
    m = n(925329),
    g = n(340044),
    E = n(223135),
    b = n(374129),
    y = n(639351),
    O = n(630388),
    v = n(51144),
    I = n(981631),
    T = n(354459),
    S = n(927923),
    A = n(388032),
    C = n(368736);
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
function R(e) {
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
function w(e, t) {
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
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let x = 16,
    M = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i, onAddHangStatusClicked: a, userId: s } = e,
            l = (e) => {
                e.stopPropagation(), null == a || a();
            };
        return i && null == t
            ? (0, r.jsx)(c.P3F, {
                  onClick: l,
                  className: C.icons,
                  children: (0, r.jsx)(c.EO4, {
                      color: "currentColor",
                      className: o()(C.icon, C.hoverableIcon, n),
                  }),
              })
            : (0, r.jsx)(c.P3F, {
                  onClick: l,
                  className: C.icons,
                  children: (0, r.jsx)(E.Z, {
                      userId: s,
                      size: x,
                      hangStatusActivity: t,
                      className: o()(C.icon, n),
                  }),
              });
    },
    k = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, r.jsx)("div", {
            className: o()(i, C.list, n ? C.listCollapse : C.listDefault),
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
            disabled: E,
            isWatching: v,
            iconClassName: N,
            embeddedApplication: R,
            otherClientSessionType: P,
            voicePlatform: w,
            application: D,
            guildId: L,
            channelId: x,
            user: k,
            disconnected: j,
            hangStatusActivity: U,
            showHangStatus: Z,
            isSelf: F,
            handleHoverHangStatus: V,
            handleHoverIcons: H,
            onAddHangStatusClicked: Y,
        } = e,
        { enabled: W } = u.c.getCurrentConfig({ location: "VoiceUserIcons" }, { autoTrackExposure: !0 });
    if (h || E) return null;
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
                          text: A.intl.string(A.t["PXMZ//"]),
                          children: (0, r.jsx)(c.Amn, {
                              size: "md",
                              color: "currentColor",
                              className: o()(C.icon, N),
                              colorClass: C.strikethrough,
                          }),
                      },
                      "video",
                  ),
              )
            : K.push(
                  (0, r.jsx)(
                      l.u,
                      {
                          text: A.intl.string(A.t.FlNoSU),
                          children: (0, r.jsx)(c.Odl, {
                              size: "md",
                              color: "currentColor",
                              className: o()(C.icon, N),
                          }),
                      },
                      "video",
                  ),
              )),
        j &&
            K.push(
                (0, r.jsx)(
                    l.u,
                    {
                        text: A.intl.string(A.t.HFwRpq),
                        children: (0, r.jsx)(c.Mgn, {
                            className: o()(C.icon, N),
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
                        className: o()(C.icon, N),
                    }),
                },
                "activity",
            ),
        ),
        P === S.YE.XBOX || w === T.wR.XBOX
            ? K.push((0, r.jsx)(y.Z, { className: o()(C.icon, N) }, "xbox"))
            : (P === S.YE.PLAYSTATION || w === T.wR.PLAYSTATION) &&
              K.push((0, r.jsx)(b.Z, { className: o()(C.icon, N) }, "playstation")),
        v &&
            K.push(
                (0, r.jsx)(
                    l.u,
                    {
                        text: A.intl.string(A.t.JH1SJy),
                        children: (0, r.jsx)(c.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: o()(C.icon, N),
                        }),
                    },
                    "watch",
                ),
            ),
        g && K.push((0, r.jsx)(_.ZP, { size: _.ZP.Sizes.SMALL }, "stream"));
    let X = null != D && !(0, O.yE)(D.flags, I.udG.EMBEDDED),
        Q = null == U && X;
    return 0 !== K.length || 0 !== z.length || Z || Q
        ? (0, r.jsxs)("div", {
              className: o()(C.icons, t),
              children: [
                  (0, r.jsxs)("div", {
                      className: C.iconGroup,
                      onMouseEnter: () => (null == H ? void 0 : H(!0)),
                      onMouseLeave: () => (null == H ? void 0 : H(!1)),
                      children: [z, K],
                  }),
                  Z || Q
                      ? (0, r.jsx)("div", {
                            className: C.iconGroup,
                            onMouseEnter: () => (null == V ? void 0 : V(!0)),
                            onMouseLeave: () => (null == V ? void 0 : V(!1)),
                            children: Q
                                ? (0, r.jsx)(
                                      G,
                                      {
                                          application: D,
                                          iconClassName: N,
                                          guildId: L,
                                          channelId: x,
                                          userId: k.id,
                                      },
                                      "".concat(k.id, "-game"),
                                  )
                                : (0, r.jsx)(M, {
                                      userId: k.id,
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
let U = function (e) {
    var t,
        {
            avatarContainerClass: n = C.avatarContainer,
            userNameClassName: i = C.usernameFont,
            size: a = I.ipw.SMALL,
            selected: s = !1,
            disabled: u = !1,
            isOverlay: d = !1,
            ref: f,
        } = e,
        _ = D(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]);
    let {
            onClick: m,
            onKeyDown: E,
            onDoubleClick: b,
            onContextMenu: y,
            onMouseLeave: O,
            onMouseDown: T,
            priority: S,
            speaking: N,
            collapsed: P,
            mute: L,
            serverMute: x,
            guildId: M,
            nick: k,
            isGuest: U,
            flipped: G,
            className: B,
            overlap: Z,
            "aria-label": F,
            ringing: V,
            user: H,
        } = _,
        Y = (0, p.Z)({
            userId: H.id,
            guildId: M,
        }),
        W = (0, h.j)({ displayNameStyles: Y }),
        K = (e) => {
            null == m || m(e, H);
        },
        z = (e) => {
            null == b || b(e, H);
        },
        q = (e) => {
            null == y || y(e, H);
        },
        X = (e) => {
            null == O || O(e, H);
        },
        Q = (e) => {
            null == T || T(e, H);
        };
    function J() {
        return S && !P
            ? (0, r.jsx)(l.u, {
                  text: A.intl.string(A.t.BVK71t),
                  children: (0, r.jsx)("div", {
                      className: o()(C.iconPriortySpeaker, { [C.iconPriortySpeakerSpeaking]: !L && !x && N }),
                  }),
              })
            : null;
    }
    function $() {
        return (0, r.jsx)("div", {
            className: o()(n, C.avatar, {
                [C.avatarLarge]: a === I.ipw.LARGE,
                [C.avatarSmall]: a === I.ipw.SMALL,
                [C.avatarSpeaking]: N,
            }),
            style: { backgroundImage: "url(".concat(H.getAvatarURL(M, a === I.ipw.LARGE ? 38 : 24), ")") },
        });
    }
    function ee() {
        let e = (0, r.jsxs)("div", {
                className: o()(i, C.username, W, { [C.usernameSpeaking]: !L && !x && N }),
                children: [
                    null != k ? k : v.ZP.getName(H),
                    U
                        ? (0, r.jsxs)("span", {
                              className: C.guestSuffix,
                              children: ["\xA0", A.intl.string(A.t["pFO/Pj"])],
                          })
                        : "",
                ],
            }),
            t = {
                primaryGuild: H.primaryGuild,
                userId: H.id,
                contextGuildId: M,
                isOverlay: d,
                disableTooltip: !0,
                className: o()(C.clanTag, d && C.isOverlay),
                profileViewedAnalytics: { source: d ? I.jXE.OVERLAY : I.Sbl.VOICE_PANEL },
            };
        return !P || d ? (0, r.jsx)(g.Z, w(R({}, t), { children: e })) : null;
    }
    function et() {
        return (0, r.jsx)(j, R({ disabled: u }, _));
    }
    return (0, r.jsx)(c.kL8, {
        ref: f,
        className: o()(B, {
            [C.voiceUser]: !0,
            [C.overlap]: Z,
            [C.selected]: s,
            [C.clickable]: null != m,
            [C.userSmall]: a === I.ipw.SMALL,
            [C.userLarge]: a === I.ipw.LARGE,
            [C.disabled]: !s && u,
            [C.ringing]: V,
        }),
        onClick: K,
        onDoubleClick: z,
        onContextMenu: q,
        onMouseLeave: X,
        onMouseDown: Q,
        onKeyDown: E,
        "aria-label": null != (t = null != F ? F : k) ? t : H.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: o()(C.content, { [C.flipped]: G }),
            children: [J(), $(), ee(), et()],
        }),
    });
};
function G(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: c, userId: u } = e,
        [d, _] = i.useState(!1),
        p = (0, s.O)((e) => _(e));
    i.useEffect(() => {
        d &&
            f.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: c,
                guild_id: a,
                user_id: u,
            });
    }, [t.id, c, a, u, d]);
    let h = () => {
        f.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: c,
            guild_id: a,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(l.u, {
        text: A.intl.formatToPlainString(A.t.Sq9xJy, { game: t.name }),
        "aria-label": A.intl.formatToPlainString(A.t.Sq9xJy, { game: t.name }),
        children: (0, r.jsx)(m.Z, {
            ref: p,
            className: o()(C.icon, C.gameIcon, n),
            game: t,
            size: m.A.XSMALL,
            onMouseEnter: h,
        }),
    });
}
function B(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: s, serverDeaf: u } = e,
        d = [];
    if (n) {
        let e,
            n = () => (i ? A.intl.string(A.t.Q8Uzoa) : a ? A.intl.string(A.t.uLddbW) : A.intl.string(A.t.tjtv3N));
        e = a || i ? c.v0G : c.nRN;
        let s = (0, r.jsx)(e, {
            className: o()(C.icon, t, { [C.iconServer]: a }),
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
                className: o()(C.icon, t, { [C.iconServer]: u }),
                color: "currentColor",
            });
        d.push(
            (0, r.jsx)(
                l.u,
                {
                    text: u ? A.intl.string(A.t.btxSdH) : A.intl.string(A.t.NjmiOD),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return d;
}
