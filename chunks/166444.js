n.d(t, { Ay: () => z, IC: () => O, Pk: () => F, gm: () => V });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r);
if (21552 == n.j) var l = n(837381);
var s = n(17928);
if (21552 == n.j) var c = n(3026);
var _ = n(990078),
    u = n(97808),
    d = n(778712);
if (21552 == n.j) var b = n(834730);
if (21552 == n.j) var m = n(187322);
var g = n(25639),
    f = n(186369),
    h = n(148719),
    p = n(47167),
    x = n(970812),
    A = n(713654),
    N = n(945096),
    v = n(922301),
    C = n(368919),
    E = n(584682),
    S = n(598104),
    D = n(95035),
    T = n(71393),
    I = n(290863),
    w = n(741961),
    k = n(287809),
    M = n(977997),
    y = n(19575),
    R = n(66933),
    j = n(652215),
    L = n(790782),
    G = n(907305),
    B = n(645591);
let U = {
    SELECTED: B.J1,
    CONNECTED: B.d4,
    UNREAD_IMPORTANT: B.V2,
    UNREAD_LESS_IMPORTANT: B.modeUnreadLessImportant,
    MUTED: B.F4,
    LOCKED: B.yg,
};
function P(e) {
    e.preventDefault(), e.stopPropagation();
}
let H = y.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function O(e) {
    let { channel: t, size: n = d._3.SIZE_20, className: i } = e;
    return (0, a.jsx)(S.A, { className: i, channel: t, "aria-hidden": !0, size: n });
}
function F(e) {
    let { channel: t, size: n = d._3.SIZE_20, className: i } = e,
        r = (0, s.bG)([k.default], () => k.default.getUser(t?.recipients[0])),
        o = (0, s.bG)(
            [w.A],
            () => !(null == r || null == t || t.isMultiUserDM()) && null != w.A.getTypingUsers(t?.id)[r?.id],
        ),
        {
            status: l,
            isMobile: c,
            isVR: _,
        } = (0, s.cf)([I.A], () =>
            null == r || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: I.A.getStatus(r.id), isMobile: I.A.isMobileOnline(r.id), isVR: I.A.isVROnline(r.id) },
        );
    return (0, a.jsx)(H, {
        className: i,
        size: n,
        src: r?.getAvatarURL(void 0, 40),
        status: l,
        isMobile: c,
        isVR: _,
        isTyping: o,
        "aria-label": r?.username,
        statusTooltip: !0,
    });
}
let V = i.memo(function (e) {
        let {
                className: t,
                containerClassName: n,
                channel: i,
                locked: r,
                hasActiveThreads: l,
                hasUsersInVoiceChannel: c,
            } = e,
            u = (0, s.bG)([T.A], () => T.A.getGuild(i.guild_id), [i.guild_id]),
            { enableWaveformIcon: d } = (0, f.b)(i.guild_id, "ChannelItemIcon"),
            b = (0, s.bG)([g.A], () => g.A.getAnimationStyle(i.id), [i.id]),
            m = i.type === j.rbe.GUILD_VOICE,
            p = null;
        if (d && m && !r && c)
            p = (0, a.jsx)(x.A, {
                color: "currentColor",
                className: o()(B.Kk, t),
                animationStyle: b,
                locked: (0, h.A)(i),
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case j.rbe.DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, a.jsx)(F, { channel: e, className: n });
                        };
                    case j.rbe.GROUP_DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, a.jsx)(O, { channel: e, className: n });
                        };
                    default:
                        return (0, A.gU)(e, t, n);
                }
            })(i, u, { locked: r, hasActiveThreads: l });
            if (null == e) return null;
            p = (0, a.jsx)(e, { color: "currentColor", className: o()(B.Kk, t) });
        }
        let N = (0, A.Bq)(i, u, r, l),
            v = `${N} icon`;
        return (0, a.jsx)(_.m, {
            text: N,
            delay: 500,
            children: (0, a.jsx)("div", { role: "img", "aria-label": v, className: o()(B.zc, n), children: p }),
        });
    }),
    z =
        21552 == n.j
            ? i.forwardRef(function (e, t) {
                  let {
                          channel: n,
                          name: r,
                          muted: _,
                          selected: u,
                          connected: d,
                          unread: g,
                          locked: f,
                          hasActiveThreads: h,
                          onClick: x,
                          onMouseDown: A,
                          onMouseUp: N,
                          onContextMenu: v,
                          connectDragPreview: C,
                          className: S,
                          iconClassName: T,
                          subtitle: I,
                          subtitleColor: w,
                          channel: { type: k },
                          onMouseEnter: y,
                          onMouseLeave: H,
                          "aria-label": O,
                          children: F,
                          guild: z,
                          channelTypeOverride: $,
                          forceInteractable: Y,
                          mentionCount: W,
                          resolvedUnreadSetting: K,
                          isFavoriteSuggestion: Z,
                          hasActiveEvent: J = !1,
                          transitionExtras: X,
                      } = e,
                      Q = K === L.e.ALL_MESSAGES || (null != W && W > 0),
                      ee = (0, s.bG)([M.A], () => Object.values(M.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
                      { role: et, ...en } = (0, l.rm)(n.id),
                      ea = i.useRef(null),
                      ei = i.useRef(null),
                      er = (0, E.A)(n);
                  null != er && R.A.getConfig({ guildId: er, location: "channel_item" });
                  let eo = j.BVt.CHANNEL(er, n.id),
                      el = (0, p.Ay)(n),
                      es = n.isGuildVocal(),
                      ec = null != x || null != N || null != A || Y,
                      e_ = (0, a.jsx)("div", {
                          className: o()({ [B.ow]: Z }),
                          ref: ei,
                          children: (0, a.jsxs)(D.A, {
                              role: es && !d ? "button" : "link",
                              href: es ? void 0 : eo,
                              target: "_blank",
                              ref: ea,
                              className: B.nf,
                              onClick: () => x?.(n),
                              transitionExtras: X,
                              ...en,
                              "aria-label": O,
                              "aria-current": u ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: B.Y5,
                                      children: [
                                          (0, a.jsx)(V, {
                                              className: T,
                                              channel: n,
                                              guild: z,
                                              hasUsersInVoiceChannel: ee,
                                              hasActiveThreads: h,
                                              locked: f,
                                          }),
                                          (0, a.jsx)(c.A, {
                                              className: o()(B.UU, { [B.NW]: J }),
                                              "aria-hidden": !0,
                                              children: (0, a.jsx)(q, { channel: n, name: null != r ? r : el }),
                                          }),
                                          i.Children.count(F) > 0
                                              ? (0, a.jsx)("div", {
                                                    onClick: P,
                                                    onKeyPress: P,
                                                    className: B.Y_,
                                                    children: F,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != I
                                      ? (0, a.jsx)("div", {
                                            className: B.MA,
                                            children: (0, a.jsx)(b.E, {
                                                color: w ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: B.VA,
                                                children: I,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, a.jsx)(m.vN, {
                      focusTarget: ea,
                      ringTarget: ei,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, a.jsxs)("div", {
                          ref: t,
                          className: o()(
                              S,
                              ec ? B.iE : B.IA,
                              (() => {
                                  if (u) return o()(G.rM, U.SELECTED);
                                  if (d) return o()(G.rM, U.CONNECTED);
                                  if (f) return U.LOCKED;
                                  if (_) return U.MUTED;
                                  if (g)
                                      if (Q) return U.UNREAD_IMPORTANT;
                                      else return U.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case j.rbe.GUILD_STAGE_VOICE:
                                      case j.rbe.GUILD_VOICE:
                                          return B.typeVoice;
                                      case j.rbe.ANNOUNCEMENT_THREAD:
                                      case j.rbe.PUBLIC_THREAD:
                                      case j.rbe.PRIVATE_THREAD:
                                          return B.ZS;
                                      case j.rbe.GUILD_ANNOUNCEMENT:
                                      case j.rbe.GUILD_TEXT:
                                      case j.rbe.GUILD_STORE:
                                      case j.rbe.GUILD_FORUM:
                                      case j.rbe.GUILD_MEDIA:
                                      default:
                                          return B.typeDefault;
                                  }
                              })($ ?? k),
                          ),
                          onMouseUp: (e) => N?.(e, n),
                          onMouseDown: (e) => A?.(e, n),
                          onContextMenu: (e) => v?.(e, n),
                          onMouseEnter: y,
                          onMouseLeave: H,
                          children: [
                              _ || !g ? null : (0, a.jsx)("div", { className: o()(B.gy, Q ? B.WS : void 0) }),
                              C?.(e_) ?? e_,
                          ],
                      }),
                  });
              })
            : null;
function q(e) {
    let { channel: t, name: n } = e,
        r = t.isPrivate() && 1 === (t.rawRecipients ?? []).length,
        o = t.rawRecipients?.[0]?.display_name_styles,
        l = i.useMemo(() => (r ? (0, N.mT)(o) : null), [r, o]);
    return null != l
        ? (0, a.jsx)(C.A, { userName: n, displayNameStyles: l, effectDisplayType: v.G.PLAIN, boldFontOpacity: 0.9 })
        : n;
}
