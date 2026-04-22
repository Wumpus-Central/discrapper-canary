n.d(t, { A: () => j }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(990078),
    d = n(615675),
    u = n(666654),
    c = n(990836),
    A = n(83107),
    h = n(939249),
    _ = n(834040),
    E = n(307301),
    p = n(408278),
    m = n(573613),
    g = n(442433),
    I = n(717558),
    C = n(770178),
    f = n(765548),
    T = n(793574),
    S = n(688810),
    N = n(384059),
    O = n(480890),
    L = n(556525),
    y = n(551826),
    v = n(342296),
    b = n(961350),
    D = n(430452),
    R = n(485296),
    P = n(427262),
    w = n(31408),
    M = n(985018),
    U = n(185571);
let x = { offset: 2 },
    G = {
        serverDeaf: { icon: d.T, colorize: !0, getStatus: () => M.intl.string(M.t.btxSdB) },
        serverMute: { icon: u.O, colorize: !0, getStatus: () => M.intl.string(M.t.uLddbQ) },
        deaf: { icon: c.c, colorize: !1, getStatus: () => M.intl.string(M.t.NjmiOL) },
        mute: { icon: A.z, colorize: !1, getStatus: () => M.intl.string(M.t.tjtv3P) },
        localMute: { icon: u.O, colorize: !1, getStatus: () => M.intl.string(M.t["9F+xJU"]) },
    };
function k(e) {
    let t = r.useRef(null),
        { parentAnalyticsLocation: a } = (0, S.Ay)(),
        { channel: d, user: u, nick: c, mute: A, deaf: _, serverMute: E, serverDeaf: p } = e,
        m = (0, s.bG)([D.Ay], () => D.Ay.isLocalMute(u.id)),
        C = (0, I.A)({ userId: u.id, checkSoundSharing: !0 }),
        f = d.getGuildId() ?? void 0,
        b = u.getAvatarURL(d.guild_id, 24),
        k = c ?? P.Ay.getName(u),
        {
            icon: j,
            colorize: V,
            getStatus: H,
        } = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: i, mute: r, localMute: a } = e;
            if (t) return G.serverDeaf;
            if (n) return G.deaf;
            if (i) return G.serverMute;
            if (a) return G.localMute;
            if (r) return G.mute;
        })({ serverDeaf: p, deaf: _, serverMute: E, mute: A, localMute: m }) ?? {},
        B = null != H ? M.intl.formatToPlainString(M.t["1+MVBP"], { userName: k, status: H() }) : k;
    function F(e) {
        null != f
            ? (0, g.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("8519")]).then(
                      n.bind(n, 107632),
                  );
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: u,
                          guildId: f,
                          channel: d,
                          showMediaItems: !0,
                          onInteraction: (0, O.s)("GuildChannelUserContextMenu", T.A.RTC_PANEL, { targetUserId: u.id }),
                      });
              })
            : (0, g.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("90660")]).then(
                      n.bind(n, 668569),
                  );
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: u,
                          showMediaItems: !0,
                          onInteraction: (0, O.s)("UserGenericContextMenu", T.A.RTC_PANEL, { targetUserId: u.id }),
                      });
              });
    }
    let Y = (0, s.bG)([R.A], () => R.A.getVoiceVolume(u.id)),
        K = (0, L.v)({ isSpeaking: C, voiceDb: Y, spreadDirection: L.O.INSET_ONLY, maxInnerSpreadRadius: 3 });
    return (0, i.jsx)(v.A, {
        targetElementRef: t,
        user: u,
        guildId: f,
        channelId: d.id,
        position: "top",
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(o.m, {
                text: B,
                children: (0, i.jsx)(h.D, {
                    innerRef: t,
                    onClick: (t) => {
                        e.onClick(t), (0, N.X)(a, N.O.VOICE_USER);
                    },
                    className: U.H,
                    onContextMenu: F,
                    focusProps: x,
                    children: (0, i.jsx)(y.A, {
                        shakeLocation: w.uD.VOICE_USER,
                        isShaking: C,
                        children: (0, i.jsx)("div", {
                            className: U.my,
                            style: { backgroundImage: `url(${b})`, ...K },
                            children:
                                null != j
                                    ? (0, i.jsx)(j, {
                                          className: l()(U.tr, { [U.qE]: V }),
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
function j(e) {
    let { voiceStates: t, channel: n, className: a } = e,
        [d, u] = r.useState(!1),
        c = (0, s.bG)([b.default], () => b.default.getId()),
        { containerRef: A, maxVisibleAvatars: h } = (function (e) {
            let [t, n] = r.useState(7),
                i = (0, f.A)(() => {
                    let t = a?.current;
                    if (null == t) return;
                    let i = Math.floor((t.offsetWidth + 4) / 28);
                    n(Math.max(1, e > i ? i - 1 : i));
                }),
                a = (0, C.w)(i, [e], { fireOnMount: !0, fireOnDepsChange: !0 });
            return { containerRef: a, maxVisibleAvatars: t };
        })(t.length - 1),
        [g, I] = (function (e, t, n) {
            let i = [];
            for (let r of e)
                if (r.user.id !== t && !i.some((e) => e.user.id === r.user.id)) {
                    if (i.length >= n) return [i, !0];
                    i.push(r);
                }
            return [i, !1];
        })(t, c, h),
        T = d ? _.Q : E.j,
        S = d ? M.intl.string(M.t["Z/Tya5"]) : M.intl.string(M.t.XR5BAc),
        N = (0, i.jsx)(o.m, {
            text: S,
            ariaHidden: !0,
            children: (0, i.jsx)(p.K, {
                "aria-label": S,
                onClick: () => u(!d),
                icon: () => (0, i.jsx)(T, { size: "md" }),
                variant: "icon-only",
                size: "sm",
            }),
        }),
        O = I && d ? t : g;
    return O.length <= 0
        ? null
        : (0, i.jsx)(m.Ip, {
              className: l()(U.XG, a),
              fade: !0,
              children: (0, i.jsxs)("div", {
                  ref: A,
                  className: l()(U.Xk, !d && U.yZ),
                  role: "group",
                  "aria-label": M.intl.string(M.t["/ZgaVU"]),
                  children: [
                      O.map((e) => {
                          let { user: t, nick: r, voiceState: a } = e;
                          return t.id !== c
                              ? (0, i.jsx)(
                                    k,
                                    {
                                        channel: n,
                                        user: t,
                                        nick: r,
                                        mute: a.isVoiceMuted(),
                                        deaf: a.isVoiceDeafened(),
                                        video: a.selfVideo,
                                        serverMute: a.mute,
                                        serverDeaf: a.deaf,
                                    },
                                    t.id,
                                )
                              : null;
                      }),
                      I ? N : null,
                  ],
              }),
          });
}
