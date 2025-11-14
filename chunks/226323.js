n.d(t, { Z: () => A }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    u = n(239091),
    d = n(586902),
    p = n(393903),
    f = n(448986),
    h = n(100527),
    g = n(906732),
    m = n(522651),
    _ = n(795318),
    b = n(512384),
    E = n(456077),
    O = n(314897),
    y = n(131951),
    v = n(51144),
    I = n(524484),
    C = n(388032),
    S = n(720711);
function T(e) {
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
function N(e, t) {
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
let j = { offset: 2 },
    P = {
        serverDeaf: {
            icon: c.Vm4,
            colorize: !0,
            getStatus: () => C.intl.string(C.t.btxSdB),
        },
        serverMute: {
            icon: c.v0G,
            colorize: !0,
            getStatus: () => C.intl.string(C.t.uLddbQ),
        },
        deaf: {
            icon: c.wE8,
            colorize: !1,
            getStatus: () => C.intl.string(C.t.NjmiOL),
        },
        mute: {
            icon: c.nRN,
            colorize: !1,
            getStatus: () => C.intl.string(C.t.tjtv3P),
        },
        localMute: {
            icon: c.v0G,
            colorize: !1,
            getStatus: () => C.intl.string(C.t["9F+xJU"]),
        },
    };
function x(e) {
    var t, l;
    let p = i.useRef(null),
        { parentAnalyticsLocation: f } = (0, g.ZP)(),
        { channel: O, user: x, nick: A, mute: Z, deaf: w, serverMute: L, serverDeaf: R } = e,
        D = (0, s.e7)([y.Z], () => y.Z.isLocalMute(x.id)),
        M = (0, d.Z)({
            userId: x.id,
            checkSoundSharing: !0,
        }),
        k = null != (t = O.getGuildId()) ? t : void 0,
        U = x.getAvatarURL(O.guild_id, 24),
        G = null != A ? A : v.ZP.getName(x),
        {
            icon: B,
            colorize: H,
            getStatus: V,
        } = null !=
        (l = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
            if (t) return P.serverDeaf;
            if (n) return P.deaf;
            if (r) return P.serverMute;
            if (l) return P.localMute;
            if (i) return P.mute;
        })({
            serverDeaf: R,
            deaf: w,
            serverMute: L,
            mute: Z,
            localMute: D,
        }))
            ? l
            : {},
        F =
            null != V
                ? C.intl.formatToPlainString(C.t["1+MVBP"], {
                      userName: G,
                      status: V(),
                  })
                : G;
    function z(e) {
        null != k
            ? (0, u.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("79695"),
                      n.e("66165"),
                      n.e("8982"),
                      n.e("7717"),
                      n.e("52021"),
                  ]).then(n.bind(n, 757387));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          N(T({}, t), {
                              user: x,
                              guildId: k,
                              channel: O,
                              showMediaItems: !0,
                              onInteraction: (0, _.u)("GuildChannelUserContextMenu", h.Z.RTC_PANEL, {
                                  targetUserId: x.id,
                              }),
                          }),
                      );
              })
            : (0, u.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("74820")]).then(
                      n.bind(n, 881351),
                  );
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          N(T({}, t), {
                              user: x,
                              showMediaItems: !0,
                              onInteraction: (0, _.u)("UserGenericContextMenu", h.Z.RTC_PANEL, { targetUserId: x.id }),
                          }),
                      );
              });
    }
    return (0, r.jsx)(E.Z, {
        targetElementRef: p,
        user: x,
        guildId: k,
        channelId: O.id,
        position: "top",
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(o.u, {
                text: F,
                children: (0, r.jsx)(c.P3F, {
                    innerRef: p,
                    onClick: (t) => {
                        e.onClick(t), (0, m.v)(f, m.d.VOICE_USER);
                    },
                    className: S.avatarContainer,
                    onContextMenu: z,
                    focusProps: j,
                    children: (0, r.jsx)(b.Z, {
                        shakeLocation: I.oZ.VOICE_USER,
                        isShaking: M,
                        children: (0, r.jsx)("div", {
                            className: a()(S.avatar, { [S.speaking]: M }),
                            style: { backgroundImage: "url(".concat(U, ")") },
                            children:
                                null != B
                                    ? (0, r.jsx)(B, {
                                          className: a()(S.avatarIconOverlay, { [S.avatarIconRed]: H }),
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
function A(e) {
    let { voiceStates: t, channel: n, className: l } = e,
        [o, u] = i.useState(!1),
        d = (0, s.e7)([O.default], () => O.default.getId()),
        { containerRef: h, maxVisibleAvatars: g } = (function (e) {
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
        [m, _] = (function (e, t, n) {
            let r = [];
            for (let i of e)
                if (i.user.id !== t && !r.some((e) => e.user.id === i.user.id)) {
                    if (r.length >= n) return [r, !0];
                    r.push(i);
                }
            return [r, !1];
        })(t, d, g),
        b = o ? c.V_R : c.qJs,
        E = (0, r.jsx)(c.M0o, {
            onClick: () => u(!o),
            color: c.YX$.PRIMARY,
            size: c.tT7.SIZE_24,
            tooltip: o ? C.intl.string(C.t["Z/Tya5"]) : C.intl.string(C.t.XR5BAc),
            icon: (0, r.jsx)(b, {
                size: "xs",
                color: "currentColor",
            }),
            focusProps: j,
        }),
        y = _ && o ? t : m;
    return y.length <= 0
        ? null
        : (0, r.jsx)(c.zJl, {
              className: a()(S.scroller, l),
              fade: !0,
              children: (0, r.jsxs)("div", {
                  ref: h,
                  className: a()(S.voiceUsers, !o && S.collapsed),
                  role: "group",
                  "aria-label": C.intl.string(C.t["/ZgaVU"]),
                  children: [
                      y.map((e) => {
                          let { user: t, nick: i, voiceState: l } = e;
                          return t.id !== d
                              ? (0, r.jsx)(
                                    x,
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
                      _ ? E : null,
                  ],
              }),
          });
}
