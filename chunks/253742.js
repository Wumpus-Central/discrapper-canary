n.d(t, { A: () => R }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(442433),
    u = n(717558),
    A = n(770178),
    h = n(765548),
    _ = n(793574),
    m = n(688810),
    p = n(659974),
    g = n(384059),
    E = n(480890),
    I = n(551826),
    f = n(342296),
    C = n(961350),
    N = n(430452),
    T = n(485296),
    S = n(427262),
    x = n(31408),
    v = n(985018),
    b = n(603108);
let y = { offset: 2 },
    L = {
        serverDeaf: { icon: d.TJE, colorize: !0, getStatus: () => v.intl.string(v.t.btxSdB) },
        serverMute: { icon: d.O1p, colorize: !0, getStatus: () => v.intl.string(v.t.uLddbQ) },
        deaf: { icon: d.cQT, colorize: !1, getStatus: () => v.intl.string(v.t.NjmiOL) },
        mute: { icon: d.z0P, colorize: !1, getStatus: () => v.intl.string(v.t.tjtv3P) },
        localMute: { icon: d.O1p, colorize: !1, getStatus: () => v.intl.string(v.t["9F+xJU"]) },
    };
function O(e) {
    let t = r.useRef(null),
        { parentAnalyticsLocation: a } = (0, m.Ay)(),
        { channel: A, user: h, nick: C, mute: O, deaf: R, serverMute: P, serverDeaf: j } = e,
        D = (0, s.bG)([N.A], () => N.A.isLocalMute(h.id)),
        w = (0, u.A)({ userId: h.id, checkSoundSharing: !0 }),
        M = A.getGuildId() ?? void 0,
        U = h.getAvatarURL(A.guild_id, 24),
        G = C ?? S.Ay.getName(h),
        {
            icon: k,
            colorize: V,
            getStatus: B,
        } = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: i, mute: r, localMute: a } = e;
            if (t) return L.serverDeaf;
            if (n) return L.deaf;
            if (i) return L.serverMute;
            if (a) return L.localMute;
            if (r) return L.mute;
        })({ serverDeaf: j, deaf: R, serverMute: P, mute: O, localMute: D }) ?? {},
        H = null != B ? v.intl.formatToPlainString(v.t["1+MVBP"], { userName: G, status: B() }) : G;
    function F(e) {
        null != M
            ? (0, c.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("31885")]).then(
                      n.bind(n, 107632),
                  );
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: h,
                          guildId: M,
                          channel: A,
                          showMediaItems: !0,
                          onInteraction: (0, E.s)("GuildChannelUserContextMenu", _.A.RTC_PANEL, { targetUserId: h.id }),
                      });
              })
            : (0, c.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(
                      n.bind(n, 668569),
                  );
                  return (t) =>
                      (0, i.jsx)(e, {
                          ...t,
                          user: h,
                          showMediaItems: !0,
                          onInteraction: (0, E.s)("UserGenericContextMenu", _.A.RTC_PANEL, { targetUserId: h.id }),
                      });
              });
    }
    let Y = (0, s.bG)([T.A], () => T.A.getVoiceVolume(h.id)),
        W = (0, p.v)({ isSpeaking: w, voiceDb: Y, spreadDirection: p.O.INSET_ONLY, maxInnerSpreadRadius: 3 });
    return (0, i.jsx)(f.A, {
        targetElementRef: t,
        user: h,
        guildId: M,
        channelId: A.id,
        position: "top",
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(o.m, {
                text: H,
                children: (0, i.jsx)(d.DUT, {
                    innerRef: t,
                    onClick: (t) => {
                        e.onClick(t), (0, g.X)(a, g.O.VOICE_USER);
                    },
                    className: b.H,
                    onContextMenu: F,
                    focusProps: y,
                    children: (0, i.jsx)(I.A, {
                        shakeLocation: x.uD.VOICE_USER,
                        isShaking: w,
                        children: (0, i.jsx)("div", {
                            className: b.my,
                            style: { backgroundImage: `url(${U})`, ...W },
                            children:
                                null != k
                                    ? (0, i.jsx)(k, {
                                          className: l()(b.tr, { [b.qE]: V }),
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
function R(e) {
    let { voiceStates: t, channel: n, className: a } = e,
        [c, u] = r.useState(!1),
        _ = (0, s.bG)([C.default], () => C.default.getId()),
        { containerRef: m, maxVisibleAvatars: p } = (function (e) {
            let [t, n] = r.useState(7),
                i = (0, h.A)(() => {
                    let t = a?.current;
                    if (null == t) return;
                    let i = Math.floor((t.offsetWidth + 4) / 28);
                    n(Math.max(1, e > i ? i - 1 : i));
                }),
                a = (0, A.w)(i, [e], { fireOnMount: !0, fireOnDepsChange: !0 });
            return { containerRef: a, maxVisibleAvatars: t };
        })(t.length - 1),
        [g, E] = (function (e, t, n) {
            let i = [];
            for (let r of e)
                if (r.user.id !== t && !i.some((e) => e.user.id === r.user.id)) {
                    if (i.length >= n) return [i, !0];
                    i.push(r);
                }
            return [i, !1];
        })(t, _, p),
        I = c ? d.QGg : d.j96,
        f = c ? v.intl.string(v.t["Z/Tya5"]) : v.intl.string(v.t.XR5BAc),
        N = (0, i.jsx)(o.m, {
            text: f,
            ariaHidden: !0,
            children: (0, i.jsx)(d.K0, {
                "aria-label": f,
                onClick: () => u(!c),
                icon: () => (0, i.jsx)(I, { size: "md" }),
                variant: "icon-only",
                size: "sm",
            }),
        }),
        T = E && c ? t : g;
    return T.length <= 0
        ? null
        : (0, i.jsx)(d.IpV, {
              className: l()(b.XG, a),
              fade: !0,
              children: (0, i.jsxs)("div", {
                  ref: m,
                  className: l()(b.Xk, !c && b.yZ),
                  role: "group",
                  "aria-label": v.intl.string(v.t["/ZgaVU"]),
                  children: [
                      T.map((e) => {
                          let { user: t, nick: r, voiceState: a } = e;
                          return t.id !== _
                              ? (0, i.jsx)(
                                    O,
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
                      E ? N : null,
                  ],
              }),
          });
}
