n.d(t, {
    ZP: () => U,
    eJ: () => k,
    nm: () => j,
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
    d = n(456100),
    f = n(657305),
    _ = n(367907),
    p = n(194082),
    h = n(386725),
    m = n(7284),
    g = n(925329),
    E = n(340044),
    b = n(223135),
    y = n(374129),
    O = n(639351),
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
function D(e, t) {
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
function w(e, t) {
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
            ? (0, r.jsx)(u.P3F, {
                  onClick: l,
                  className: C.icons,
                  children: (0, r.jsx)(u.EO4, {
                      color: "currentColor",
                      className: o()(C.icon, C.hoverableIcon, n),
                  }),
              })
            : (0, r.jsx)(u.P3F, {
                  onClick: l,
                  className: C.icons,
                  children: (0, r.jsx)(b.Z, {
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
            deaf: _,
            serverDeaf: h,
            collapsed: m,
            video: g,
            isStreaming: E,
            disabled: b,
            isWatching: v,
            iconClassName: N,
            embeddedApplication: R,
            otherClientSessionType: P,
            voicePlatform: D,
            application: w,
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
        { enabled: W } = d.c.getCurrentConfig({ location: "VoiceUserIcons" }, { autoTrackExposure: !0 });
    if (m || b) return null;
    let K = [],
        z = B({
            iconClassName: N,
            mute: n,
            localMute: i,
            serverMute: s,
            deaf: _,
            serverDeaf: h,
        });
    g &&
        (a
            ? K.push(
                  (0, r.jsx)(
                      c.u,
                      {
                          text: A.intl.string(A.t["PXMZ/+"]),
                          children: (0, r.jsx)(u.Amn, {
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
                      c.u,
                      {
                          text: A.intl.string(A.t.FlNoSV),
                          children: (0, r.jsx)(u.Odl, {
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
                    c.u,
                    {
                        text: A.intl.string(A.t.HFwRpk),
                        children: (0, r.jsx)(u.Mgn, {
                            className: o()(C.icon, N),
                            color: u.TVs.colors.STATUS_WARNING_BACKGROUND,
                        }),
                    },
                    "disconnected",
                ),
            );
    let q = W ? u.iWm : u.nG3;
    null != R &&
        K.push(
            (0, r.jsx)(
                c.u,
                {
                    text: (0, f.Z)(R.name),
                    children: (0, r.jsx)(q, {
                        size: "md",
                        color: "currentColor",
                        className: o()(C.icon, N),
                    }),
                },
                "activity",
            ),
        ),
        P === S.YE.XBOX || D === T.wR.XBOX
            ? K.push((0, r.jsx)(O.Z, { className: o()(C.icon, N) }, "xbox"))
            : (P === S.YE.PLAYSTATION || D === T.wR.PLAYSTATION) &&
              K.push((0, r.jsx)(y.Z, { className: o()(C.icon, N) }, "playstation")),
        v &&
            K.push(
                (0, r.jsx)(
                    c.u,
                    {
                        text: A.intl.string(A.t["JH1SJ+"]),
                        children: (0, r.jsx)(u.tEF, {
                            size: "xs",
                            color: "currentColor",
                            className: o()(C.icon, N),
                        }),
                    },
                    "watch",
                ),
            ),
        E && K.push((0, r.jsx)(p.ZP, { size: p.ZP.Sizes.SMALL }, "stream"));
    let X = null != w && !(0, l.yE)(w.flags, I.udG.EMBEDDED),
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
                                          application: w,
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
            disabled: l = !1,
            isOverlay: d = !1,
            ref: f,
        } = e,
        _ = w(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]);
    let {
            onClick: p,
            onKeyDown: g,
            onDoubleClick: b,
            onContextMenu: y,
            onMouseLeave: O,
            onMouseDown: T,
            priority: S,
            speaking: N,
            latched: P,
            collapsed: L,
            mute: x,
            serverMute: M,
            guildId: k,
            nick: U,
            isGuest: G,
            flipped: B,
            className: Z,
            overlap: F,
            "aria-label": V,
            ringing: H,
            user: Y,
        } = _,
        W = (0, h.Z)({
            userId: Y.id,
            guildId: k,
        }),
        K = (0, m.j)({ displayNameStyles: W }),
        z = (e) => {
            null == p || p(e, Y);
        },
        q = (e) => {
            null == b || b(e, Y);
        },
        X = (e) => {
            null == y || y(e, Y);
        },
        Q = (e) => {
            null == O || O(e, Y);
        },
        J = (e) => {
            null == T || T(e, Y);
        };
    function $() {
        return S && !L
            ? (0, r.jsx)(c.u, {
                  text: A.intl.string(A.t.BVK71i),
                  children: (0, r.jsx)("div", {
                      className: o()(C.iconPriortySpeaker, { [C.iconPriortySpeakerSpeaking]: !x && !M && N }),
                  }),
              })
            : null;
    }
    function ee() {
        return (0, r.jsx)("div", {
            className: o()(n, C.avatar, {
                [C.avatarLarge]: a === I.ipw.LARGE,
                [C.avatarSmall]: a === I.ipw.SMALL,
                [C.avatarSpeaking]: N,
                [C.avatarLatched]: P && !N,
            }),
            style: { backgroundImage: "url(".concat(Y.getAvatarURL(k, a === I.ipw.LARGE ? 38 : 24), ")") },
        });
    }
    function et() {
        let e = (0, r.jsxs)("div", {
                className: o()(i, C.username, K, { [C.usernameSpeaking]: !x && !M && N }),
                children: [
                    null != U ? U : v.ZP.getName(Y),
                    G
                        ? (0, r.jsxs)("span", {
                              className: C.guestSuffix,
                              children: ["\xA0", A.intl.string(A.t["pFO/Ph"])],
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
                className: o()(C.clanTag, d && C.isOverlay),
                profileViewedAnalytics: { source: d ? I.jXE.OVERLAY : I.Sbl.VOICE_PANEL },
            };
        return !L || d ? (0, r.jsx)(E.Z, D(R({}, t), { children: e })) : null;
    }
    function en() {
        return (0, r.jsx)(j, R({ disabled: l }, _));
    }
    return (0, r.jsx)(u.kL8, {
        ref: f,
        className: o()(Z, {
            [C.voiceUser]: !0,
            [C.overlap]: F,
            [C.selected]: s,
            [C.clickable]: null != p,
            [C.userSmall]: a === I.ipw.SMALL,
            [C.userLarge]: a === I.ipw.LARGE,
            [C.disabled]: !s && l,
            [C.ringing]: H,
        }),
        onClick: z,
        onDoubleClick: q,
        onContextMenu: X,
        onMouseLeave: Q,
        onMouseDown: J,
        onKeyDown: g,
        "aria-label": null != (t = null != V ? V : U) ? t : Y.username,
        focusProps: { offset: { right: 4 } },
        children: (0, r.jsxs)("div", {
            className: o()(C.content, { [C.flipped]: B }),
            children: [$(), ee(), et(), en()],
        }),
    });
};
function G(e) {
    let { application: t, iconClassName: n, guildId: a, channelId: l, userId: u } = e,
        [d, f] = i.useState(!1),
        p = (0, s.O)((e) => f(e));
    i.useEffect(() => {
        d &&
            _.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                channel_id: l,
                guild_id: a,
                user_id: u,
            });
    }, [t.id, l, a, u, d]);
    let h = () => {
        _.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
            channel_id: l,
            guild_id: a,
            game_name: t.name,
            user_id: u,
        });
    };
    return (0, r.jsx)(c.u, {
        text: A.intl.formatToPlainString(A.t.Sq9xJ7, { game: t.name }),
        "aria-label": A.intl.formatToPlainString(A.t.Sq9xJ7, { game: t.name }),
        children: (0, r.jsx)(g.Z, {
            ref: p,
            className: o()(C.icon, C.gameIcon, n),
            game: t,
            size: g.A.XSMALL,
            onMouseEnter: h,
        }),
    });
}
function B(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: s, serverDeaf: l } = e,
        d = [];
    if (n) {
        let e,
            n = () => (i ? A.intl.string(A.t.Q8Uzof) : a ? A.intl.string(A.t.uLddbQ) : A.intl.string(A.t.tjtv3P));
        e = a || i ? u.v0G : u.nRN;
        let s = (0, r.jsx)(e, {
            className: o()(C.icon, t, { [C.iconServer]: a }),
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
                className: o()(C.icon, t, { [C.iconServer]: l }),
                color: "currentColor",
            });
        d.push(
            (0, r.jsx)(
                c.u,
                {
                    text: l ? A.intl.string(A.t.btxSdB) : A.intl.string(A.t.NjmiOL),
                    children: n,
                },
                "deaf",
            ),
        );
    }
    return d;
}
