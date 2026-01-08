n.d(t, { Z: () => w }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(239091),
    d = n(586902),
    p = n(393903),
    f = n(448986),
    g = n(100527),
    h = n(906732),
    m = n(538870),
    b = n(522651),
    _ = n(795318),
    E = n(512384),
    O = n(670188),
    v = n(314897),
    y = n(131951),
    I = n(606304),
    C = n(51144),
    S = n(524484),
    T = n(388032),
    N = n(328607);
function j(e) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
let x = { offset: 2 },
    A = {
        serverDeaf: {
            icon: c.Vm4,
            colorize: !0,
            getStatus: () => T.intl.string(T.t.btxSdB),
        },
        serverMute: {
            icon: c.v0G,
            colorize: !0,
            getStatus: () => T.intl.string(T.t.uLddbQ),
        },
        deaf: {
            icon: c.wE8,
            colorize: !1,
            getStatus: () => T.intl.string(T.t.NjmiOL),
        },
        mute: {
            icon: c.nRN,
            colorize: !1,
            getStatus: () => T.intl.string(T.t.tjtv3P),
        },
        localMute: {
            icon: c.v0G,
            colorize: !1,
            getStatus: () => T.intl.string(T.t["9F+xJU"]),
        },
    };
function Z(e) {
    var t, l;
    let p = i.useRef(null),
        { parentAnalyticsLocation: f } = (0, h.ZP)(),
        { channel: v, user: Z, nick: w, mute: L, deaf: R, serverMute: D, serverDeaf: M } = e,
        k = (0, o.e7)([y.Z], () => y.Z.isLocalMute(Z.id)),
        U = (0, d.Z)({
            userId: Z.id,
            checkSoundSharing: !0,
        }),
        G = null != (t = v.getGuildId()) ? t : void 0,
        H = Z.getAvatarURL(v.guild_id, 24),
        B = null != w ? w : C.ZP.getName(Z),
        {
            icon: V,
            colorize: F,
            getStatus: z,
        } = null !=
        (l = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
            if (t) return A.serverDeaf;
            if (n) return A.deaf;
            if (r) return A.serverMute;
            if (l) return A.localMute;
            if (i) return A.mute;
        })({
            serverDeaf: M,
            deaf: R,
            serverMute: D,
            mute: L,
            localMute: k,
        }))
            ? l
            : {},
        Y =
            null != z
                ? T.intl.formatToPlainString(T.t["1+MVBP"], {
                      userName: B,
                      status: z(),
                  })
                : B;
    function W(e) {
        null != G
            ? (0, u.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("4040"),
                      n.e("92524"),
                      n.e("7717"),
                      n.e("9393"),
                  ]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          P(j({}, t), {
                              user: Z,
                              guildId: G,
                              channel: v,
                              showMediaItems: !0,
                              onInteraction: (0, _.u)("GuildChannelUserContextMenu", g.Z.RTC_PANEL, {
                                  targetUserId: Z.id,
                              }),
                          }),
                      );
              })
            : (0, u.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("18030")]).then(
                      n.bind(n, 881351),
                  );
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          P(j({}, t), {
                              user: Z,
                              showMediaItems: !0,
                              onInteraction: (0, _.u)("UserGenericContextMenu", g.Z.RTC_PANEL, { targetUserId: Z.id }),
                          }),
                      );
              });
    }
    let K = (0, o.e7)([I.Z], () => I.Z.getVoiceVolume(Z.id)),
        q = (0, m._)({
            isSpeaking: U,
            voiceDb: K,
            spreadDirection: m.h.INSET_ONLY,
            maxInnerSpreadRadius: 5,
        });
    return (0, r.jsx)(O.Z, {
        targetElementRef: p,
        user: Z,
        guildId: G,
        channelId: v.id,
        position: "top",
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(s.u, {
                text: Y,
                children: (0, r.jsx)(c.P3F, {
                    innerRef: p,
                    onClick: (t) => {
                        e.onClick(t), (0, b.v)(f, b.d.VOICE_USER);
                    },
                    className: N.avatarContainer,
                    onContextMenu: W,
                    focusProps: x,
                    children: (0, r.jsx)(E.Z, {
                        shakeLocation: S.oZ.VOICE_USER,
                        isShaking: U,
                        children: (0, r.jsx)("div", {
                            className: N.avatar,
                            style: j({ backgroundImage: "url(".concat(H, ")") }, q),
                            children:
                                null != V
                                    ? (0, r.jsx)(V, {
                                          className: a()(N.avatarIconOverlay, { [N.avatarIconRed]: F }),
                                          color: "currentColor",
                                          size: "xs",
                                      })
                                    : null,
                        }),
                    }),
                }),
            }),
    });
}
function w(e) {
    let { voiceStates: t, channel: n, className: l } = e,
        [u, d] = i.useState(!1),
        g = (0, o.e7)([v.default], () => v.default.getId()),
        { containerRef: h, maxVisibleAvatars: m } = (function (e) {
            let [t, n] = i.useState(7),
                r = (0, f.Z)(() => {
                    let t = null == l ? void 0 : l.current;
                    if (null == t) return;
                    let r = Math.floor((t.offsetWidth + 4) / 28);
                    n(Math.max(1, e > r ? r - 1 : r));
                }),
                l = (0, p.y)(r, [e], {
                    fireOnMount: !0,
                    fireOnDepsChange: !0,
                });
            return {
                containerRef: l,
                maxVisibleAvatars: t,
            };
        })(t.length - 1),
        [b, _] = (function (e, t, n) {
            let r = [];
            for (let i of e)
                if (i.user.id !== t && !r.some((e) => e.user.id === i.user.id)) {
                    if (r.length >= n) return [r, !0];
                    r.push(i);
                }
            return [r, !1];
        })(t, g, m),
        E = u ? c.V_R : c.qJs,
        O = u ? T.intl.string(T.t["Z/Tya5"]) : T.intl.string(T.t.XR5BAc),
        y = (0, r.jsx)(s.u, {
            text: O,
            ariaHidden: !0,
            children: (0, r.jsx)(c.hU, {
                "aria-label": O,
                onClick: () => d(!u),
                icon: () => (0, r.jsx)(E, { size: "md" }),
                variant: "icon-only",
                size: "sm",
            }),
        }),
        I = _ && u ? t : b;
    return I.length <= 0
        ? null
        : (0, r.jsx)(c.zJl, {
              className: a()(N.scroller, l),
              fade: !0,
              children: (0, r.jsxs)("div", {
                  ref: h,
                  className: a()(N.voiceUsers, !u && N.collapsed),
                  role: "group",
                  "aria-label": T.intl.string(T.t["/ZgaVU"]),
                  children: [
                      I.map((e) => {
                          let { user: t, nick: i, voiceState: l } = e;
                          return t.id !== g
                              ? (0, r.jsx)(
                                    Z,
                                    {
                                        channel: n,
                                        user: t,
                                        nick: i,
                                        mute: l.isVoiceMuted(),
                                        deaf: l.isVoiceDeafened(),
                                        video: l.selfVideo,
                                        serverMute: l.mute,
                                        serverDeaf: l.deaf,
                                    },
                                    t.id,
                                )
                              : null;
                      }),
                      _ ? y : null,
                  ],
              }),
          });
}
