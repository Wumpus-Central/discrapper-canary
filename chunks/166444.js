l.d(n, { Ay: () => z, IC: () => H, Pk: () => K, dG: () => P, gm: () => F });
var t = l(477900),
    s = l(582128),
    a = l(503698),
    i = l.n(a);
if (221552 == l.j) var r = l(837381);
var u = l(17928);
if (221552 == l.j) var c = l(3026);
var o = l(97808),
    d = l(778712),
    A = l(866665);
if (221552 == l.j) var f = l(834730);
if (221552 == l.j) var E = l(259678);
var N = l(25639),
    m = l(186369),
    h = l(148719),
    b = l(47167),
    _ = l(970812),
    D = l(713654),
    T = l(945096),
    g = l(922301),
    p = l(660184),
    x = l(598104),
    M = l(95035),
    U = l(162199),
    j = l(71393),
    v = l(290863),
    C = l(741961),
    I = l(287809),
    R = l(977997),
    y = l(19575),
    L = l(66933),
    G = l(652215),
    O = l(790782),
    S = l(180961),
    V = l(601551);
let k = {
    SELECTED: V.J1,
    CONNECTED: V.d4,
    UNREAD_IMPORTANT: V.V2,
    UNREAD_LESS_IMPORTANT: V.modeUnreadLessImportant,
    MUTED: V.F4,
    LOCKED: V.yg,
};
function P(e) {
    e.preventDefault(), e.stopPropagation();
}
let w = y.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function H(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: s } = e;
    return (0, t.jsx)(x.A, { className: s, channel: n, "aria-hidden": !0, size: l });
}
function K(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: s } = e,
        a = (0, u.bG)([I.default], () => I.default.getUser(n?.recipients[0])),
        i = (0, u.bG)(
            [C.A],
            () => !(null == a || null == n || n.isMultiUserDM()) && null != C.A.getTypingUsers(n?.id)[a?.id],
        ),
        {
            status: r,
            isMobile: c,
            isVR: o,
        } = (0, u.cf)([v.A], () =>
            null == a || null == n || n.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: v.A.getStatus(a.id), isMobile: v.A.isMobileOnline(a.id), isVR: v.A.isVROnline(a.id) },
        );
    return (0, t.jsx)(w, {
        className: s,
        size: l,
        src: a?.getAvatarURL(void 0, 40),
        status: r,
        isMobile: c,
        isVR: o,
        isTyping: i,
        "aria-label": a?.username,
        statusTooltip: !0,
    });
}
let F = s.memo(function (e) {
        let {
                className: n,
                containerClassName: l,
                channel: s,
                locked: a,
                hasActiveThreads: r,
                hasUsersInVoiceChannel: c,
            } = e,
            o = (0, u.bG)([j.A], () => j.A.getGuild(s.guild_id), [s.guild_id]),
            { enableWaveformIcon: d } = (0, m.b)(s.guild_id, "ChannelItemIcon"),
            f = (0, u.bG)([N.A], () => N.A.getAnimationStyle(s.id), [s.id]),
            E = s.type === G.rbe.GUILD_VOICE,
            b = null;
        if (d && E && !a && c)
            b = (0, t.jsx)(_.A, {
                color: "currentColor",
                className: i()(V.Kk, n),
                animationStyle: f,
                locked: (0, h.A)(s),
            });
        else {
            let e = (function (e, n, l) {
                switch (e.type) {
                    case G.rbe.DM:
                        return function (n) {
                            let { className: l } = n;
                            return (0, t.jsx)(K, { channel: e, className: l });
                        };
                    case G.rbe.GROUP_DM:
                        return function (n) {
                            let { className: l } = n;
                            return (0, t.jsx)(H, { channel: e, className: l });
                        };
                    default:
                        return (0, D.gU)(e, n, l);
                }
            })(s, o, { locked: a, hasActiveThreads: r });
            if (null == e) return null;
            b = (0, t.jsx)(e, { color: "currentColor", className: i()(V.Kk, n) });
        }
        let T = (0, D.Bq)(s, o, a, r),
            g = `${T} icon`;
        return (0, t.jsx)(A.m, {
            text: T,
            delay: 500,
            children: (0, t.jsx)("div", { role: "img", "aria-label": g, className: i()(V.zc, l), children: b }),
        });
    }),
    z =
        221552 == l.j
            ? s.forwardRef(function (e, n) {
                  let {
                          channel: l,
                          name: a,
                          muted: o,
                          selected: d,
                          connected: A,
                          unread: N,
                          locked: m,
                          hasActiveThreads: h,
                          onClick: _,
                          onMouseDown: D,
                          onMouseUp: T,
                          onContextMenu: g,
                          connectDragPreview: p,
                          className: x,
                          iconClassName: j,
                          subtitle: v,
                          subtitleColor: C,
                          channel: { type: I },
                          onMouseEnter: y,
                          onMouseLeave: w,
                          "aria-label": H,
                          children: K,
                          guild: z,
                          channelTypeOverride: Z,
                          forceInteractable: J,
                          mentionCount: W,
                          resolvedUnreadSetting: Y,
                          isFavoriteSuggestion: q,
                          hasActiveEvent: X = !1,
                          transitionExtras: $,
                      } = e,
                      Q = Y === O.e.ALL_MESSAGES || (null != W && W > 0),
                      ee = (0, u.bG)([R.A], () => Object.values(R.A.getVoiceStatesForChannel(l.id)).length > 0, [l.id]),
                      { role: en, ...el } = (0, r.rm)(l.id),
                      et = s.useRef(null),
                      es = s.useRef(null),
                      ea = (0, U.A)(l);
                  null != ea && L.A.getConfig({ guildId: ea, location: "channel_item" });
                  let ei = G.BVt.CHANNEL(ea, l.id),
                      er = (0, b.Ay)(l),
                      eu = l.isGuildVocal(),
                      ec = null != _ || null != T || null != D || J,
                      eo = (0, t.jsx)("div", {
                          className: i()({ [V.ow]: q }),
                          ref: es,
                          children: (0, t.jsxs)(M.A, {
                              role: eu && !A ? "button" : "link",
                              href: eu ? void 0 : ei,
                              target: "_blank",
                              ref: et,
                              className: V.nf,
                              onClick: () => _?.(l),
                              transitionExtras: $,
                              ...el,
                              "aria-label": H,
                              "aria-current": d ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, t.jsxs)("div", {
                                      className: V.Y5,
                                      children: [
                                          (0, t.jsx)(F, {
                                              className: j,
                                              channel: l,
                                              guild: z,
                                              hasUsersInVoiceChannel: ee,
                                              hasActiveThreads: h,
                                              locked: m,
                                          }),
                                          (0, t.jsx)(c.A, {
                                              className: i()(V.UU, { [V.NW]: X }),
                                              "aria-hidden": !0,
                                              children: (0, t.jsx)(B, {
                                                  textVariant: "text-md/medium",
                                                  channel: l,
                                                  name: null != a ? a : er,
                                              }),
                                          }),
                                          s.Children.count(K) > 0
                                              ? (0, t.jsx)("div", {
                                                    onClick: P,
                                                    onKeyPress: P,
                                                    className: V.Y_,
                                                    children: K,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != v
                                      ? (0, t.jsx)("div", {
                                            className: V.MA,
                                            children: (0, t.jsx)(f.E, {
                                                color: C ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: V.VA,
                                                children: v,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, t.jsx)(E.vN, {
                      focusTarget: et,
                      ringTarget: es,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, t.jsxs)("div", {
                          ref: n,
                          className: i()(
                              x,
                              ec ? V.iE : V.IA,
                              (function () {
                                  if (d) return i()(S.rM, k.SELECTED);
                                  if (A) return i()(S.rM, k.CONNECTED);
                                  if (m) return k.LOCKED;
                                  if (o) return k.MUTED;
                                  if (N)
                                      if (Q) return k.UNREAD_IMPORTANT;
                                      else return k.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case G.rbe.GUILD_STAGE_VOICE:
                                      case G.rbe.GUILD_VOICE:
                                          return V.typeVoice;
                                      case G.rbe.ANNOUNCEMENT_THREAD:
                                      case G.rbe.PUBLIC_THREAD:
                                      case G.rbe.PRIVATE_THREAD:
                                          return V.ZS;
                                      case G.rbe.GUILD_ANNOUNCEMENT:
                                      case G.rbe.GUILD_TEXT:
                                      case G.rbe.GUILD_STORE:
                                      case G.rbe.GUILD_FORUM:
                                      case G.rbe.GUILD_MEDIA:
                                      default:
                                          return V.typeDefault;
                                  }
                              })(Z ?? I),
                          ),
                          onMouseUp: (e) => T?.(e, l),
                          onMouseDown: (e) => D?.(e, l),
                          onContextMenu: (e) => g?.(e, l),
                          onMouseEnter: y,
                          onMouseLeave: w,
                          children: [
                              o || !N ? null : (0, t.jsx)("div", { className: i()(V.gy, Q ? V.WS : void 0) }),
                              p?.(eo) ?? eo,
                          ],
                      }),
                  });
              })
            : null;
function B(e) {
    let { channel: n, name: l, textVariant: a } = e,
        i = n.isPrivate() && 1 === (n.rawRecipients ?? []).length,
        r = n.rawRecipients?.[0]?.display_name_styles,
        u = s.useMemo(() => (i ? (0, T.mT)(r) : null), [i, r]);
    return null != u
        ? (0, t.jsx)(p.A, {
              userName: l,
              displayNameStyles: u,
              effectDisplayType: g.G.PLAIN,
              boldFontOpacity: 0.9,
              textVariant: a,
          })
        : (0, t.jsx)(f.E, { variant: a, tag: "span", color: "none", children: l });
}
