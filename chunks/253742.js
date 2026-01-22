n.d(t, { A: () => L }), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(717558),
    p = n(770178),
    f = n(765548),
    h = n(793574),
    A = n(688810),
    g = n(659974),
    m = n(384059),
    b = n(480890),
    _ = n(551826),
    E = n(342296),
    O = n(961350),
    y = n(430452),
    I = n(485296),
    v = n(427262),
    S = n(31408),
    C = n(985018),
    N = n(603108);
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
function j(e, t) {
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
    P = {
        serverDeaf: {
            icon: c.TJE,
            colorize: !0,
            getStatus: () => C.intl.string(C.t.btxSdB),
        },
        serverMute: {
            icon: c.O1p,
            colorize: !0,
            getStatus: () => C.intl.string(C.t.uLddbQ),
        },
        deaf: {
            icon: c.cQT,
            colorize: !1,
            getStatus: () => C.intl.string(C.t.NjmiOL),
        },
        mute: {
            icon: c.z0P,
            colorize: !1,
            getStatus: () => C.intl.string(C.t.tjtv3P),
        },
        localMute: {
            icon: c.O1p,
            colorize: !1,
            getStatus: () => C.intl.string(C.t["9F+xJU"]),
        },
    };
function w(e) {
    var t, l;
    let p = i.useRef(null),
        { parentAnalyticsLocation: f } = (0, A.Ay)(),
        { channel: O, user: w, nick: L, mute: R, deaf: D, serverMute: M, serverDeaf: k } = e,
        U = (0, s.bG)([y.A], () => y.A.isLocalMute(w.id)),
        G = (0, d.A)({
            userId: w.id,
            checkSoundSharing: !0,
        }),
        V = null != (t = O.getGuildId()) ? t : void 0,
        B = w.getAvatarURL(O.guild_id, 24),
        H = null != L ? L : v.Ay.getName(w),
        {
            icon: F,
            colorize: Y,
            getStatus: K,
        } = null !=
        (l = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: r, mute: i, localMute: l } = e;
            if (t) return P.serverDeaf;
            if (n) return P.deaf;
            if (r) return P.serverMute;
            if (l) return P.localMute;
            if (i) return P.mute;
        })({
            serverDeaf: k,
            deaf: D,
            serverMute: M,
            mute: R,
            localMute: U,
        }))
            ? l
            : {},
        z =
            null != K
                ? C.intl.formatToPlainString(C.t["1+MVBP"], {
                      userName: H,
                      status: K(),
                  })
                : H;
    function W(e) {
        null != V
            ? (0, u.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("97262"),
                      n.e("29534"),
                      n.e("55296"),
                      n.e("84841"),
                      n.e("91609"),
                  ]).then(n.bind(n, 107632));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          j(T({}, t), {
                              user: w,
                              guildId: V,
                              channel: O,
                              showMediaItems: !0,
                              onInteraction: (0, b.s)("GuildChannelUserContextMenu", h.A.RTC_PANEL, {
                                  targetUserId: w.id,
                              }),
                          }),
                      );
              })
            : (0, u.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("99871")]).then(
                      n.bind(n, 668569),
                  );
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          j(T({}, t), {
                              user: w,
                              showMediaItems: !0,
                              onInteraction: (0, b.s)("UserGenericContextMenu", h.A.RTC_PANEL, { targetUserId: w.id }),
                          }),
                      );
              });
    }
    let q = (0, s.bG)([I.A], () => I.A.getVoiceVolume(w.id)),
        Q = (0, g.v)({
            isSpeaking: G,
            voiceDb: q,
            spreadDirection: g.O.INSET_ONLY,
            maxInnerSpreadRadius: 3,
        });
    return (0, r.jsx)(E.A, {
        targetElementRef: p,
        user: w,
        guildId: V,
        channelId: O.id,
        position: "top",
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(o.m, {
                text: z,
                children: (0, r.jsx)(c.DUT, {
                    innerRef: p,
                    onClick: (t) => {
                        e.onClick(t), (0, m.X)(f, m.O.VOICE_USER);
                    },
                    className: N.H,
                    onContextMenu: W,
                    focusProps: x,
                    children: (0, r.jsx)(_.A, {
                        shakeLocation: S.uD.VOICE_USER,
                        isShaking: G,
                        children: (0, r.jsx)("div", {
                            className: N.my,
                            style: T({ backgroundImage: "url(".concat(B, ")") }, Q),
                            children:
                                null != F
                                    ? (0, r.jsx)(F, {
                                          className: a()(N.tr, { [N.qE]: Y }),
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
function L(e) {
    let { voiceStates: t, channel: n, className: l } = e,
        [u, d] = i.useState(!1),
        h = (0, s.bG)([O.default], () => O.default.getId()),
        { containerRef: A, maxVisibleAvatars: g } = (function (e) {
            let [t, n] = i.useState(7),
                r = (0, f.A)(() => {
                    let t = null == l ? void 0 : l.current;
                    if (null == t) return;
                    let r = Math.floor((t.offsetWidth + 4) / 28);
                    n(Math.max(1, e > r ? r - 1 : r));
                }),
                l = (0, p.w)(r, [e], {
                    fireOnMount: !0,
                    fireOnDepsChange: !0,
                });
            return {
                containerRef: l,
                maxVisibleAvatars: t,
            };
        })(t.length - 1),
        [m, b] = (function (e, t, n) {
            let r = [];
            for (let i of e)
                if (i.user.id !== t && !r.some((e) => e.user.id === i.user.id)) {
                    if (r.length >= n) return [r, !0];
                    r.push(i);
                }
            return [r, !1];
        })(t, h, g),
        _ = u ? c.QGg : c.j96,
        E = u ? C.intl.string(C.t["Z/Tya5"]) : C.intl.string(C.t.XR5BAc),
        y = (0, r.jsx)(o.m, {
            text: E,
            ariaHidden: !0,
            children: (0, r.jsx)(c.K0, {
                "aria-label": E,
                onClick: () => d(!u),
                icon: () => (0, r.jsx)(_, { size: "md" }),
                variant: "icon-only",
                size: "sm",
            }),
        }),
        I = b && u ? t : m;
    return I.length <= 0
        ? null
        : (0, r.jsx)(c.IpV, {
              className: a()(N.XG, l),
              fade: !0,
              children: (0, r.jsxs)("div", {
                  ref: A,
                  className: a()(N.Xk, !u && N.yZ),
                  role: "group",
                  "aria-label": C.intl.string(C.t["/ZgaVU"]),
                  children: [
                      I.map((e) => {
                          let { user: t, nick: i, voiceState: l } = e;
                          return t.id !== h
                              ? (0, r.jsx)(
                                    w,
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
                      b ? y : null,
                  ],
              }),
          });
}
