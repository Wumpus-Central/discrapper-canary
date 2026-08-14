l.d(n, { Ay: () => Z, IC: () => z, Pk: () => B, dG: () => K, gm: () => F });
var a = l(477900),
    s = l(582128),
    t = l(503698),
    i = l.n(t);
if (21552 == l.j) var r = l(837381);
var c = l(17928);
if (21552 == l.j) var u = l(3026);
var o = l(97808),
    d = l(778712),
    A = l(866665);
if (21552 == l.j) var f = l(834730);
if (21552 == l.j) var m = l(259678);
var E = l(25639),
    N = l(186369),
    h = l(148719),
    b = l(47167),
    _ = l(970812),
    p = l(713654),
    x = l(945096),
    D = l(922301),
    T = l(660184),
    g = l(598104),
    C = l(95035),
    M = l(162199),
    U = l(683180),
    j = l(51923),
    I = l(71393),
    v = l(290863),
    R = l(741961),
    y = l(287809),
    L = l(977997),
    G = l(19575),
    O = l(66933),
    S = l(652215),
    V = l(790782),
    k = l(180961),
    P = l(601551);
let w = {
    SELECTED: P.J1,
    CONNECTED: P.d4,
    UNREAD_IMPORTANT: P.V2,
    UNREAD_LESS_IMPORTANT: P.modeUnreadLessImportant,
    MUTED: P.F4,
    LOCKED: P.yg,
};
function K(e) {
    e.preventDefault(), e.stopPropagation();
}
let H = G.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function z(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: s } = e;
    return (0, a.jsx)(g.A, { className: s, channel: n, "aria-hidden": !0, size: l });
}
function B(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: s } = e,
        t = (0, c.bG)([y.default], () => y.default.getUser(n?.recipients[0])),
        i = (0, c.bG)(
            [R.A],
            () => !(null == t || null == n || n.isMultiUserDM()) && null != R.A.getTypingUsers(n?.id)[t?.id],
        ),
        {
            status: r,
            isMobile: u,
            isVR: o,
        } = (0, c.cf)([v.A], () =>
            null == t || null == n || n.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: v.A.getStatus(t.id), isMobile: v.A.isMobileOnline(t.id), isVR: v.A.isVROnline(t.id) },
        );
    return (0, a.jsx)(H, {
        className: s,
        size: l,
        src: t?.getAvatarURL(void 0, 40),
        status: r,
        isMobile: u,
        isVR: o,
        isTyping: i,
        "aria-label": t?.username,
        statusTooltip: !0,
    });
}
let F = s.memo(function (e) {
        let {
                className: n,
                containerClassName: l,
                channel: s,
                locked: t,
                hasActiveThreads: r,
                hasUsersInVoiceChannel: u,
            } = e,
            o = (0, c.bG)([I.A], () => I.A.getGuild(s.guild_id), [s.guild_id]),
            { enableWaveformIcon: d } = (0, N.b)(s.guild_id, "ChannelItemIcon"),
            f = (0, U.Bp)(s, "ChannelItemIcon"),
            m = (0, c.bG)([E.A], () => E.A.getAnimationStyle(s.id), [s.id]);
        if (f) return (0, a.jsx)(j.A, { channel: s, iconClassName: i()(P.Kk, n), containerClassName: i()(P.zc, l) });
        let b = s.type === S.rbe.GUILD_VOICE,
            x = null;
        if (d && b && !t && u)
            x = (0, a.jsx)(_.A, {
                color: "currentColor",
                className: i()(P.Kk, n),
                animationStyle: m,
                locked: (0, h.A)(s),
            });
        else {
            let e = (function (e, n, l) {
                switch (e.type) {
                    case S.rbe.DM:
                        return function (n) {
                            let { className: l } = n;
                            return (0, a.jsx)(B, { channel: e, className: l });
                        };
                    case S.rbe.GROUP_DM:
                        return function (n) {
                            let { className: l } = n;
                            return (0, a.jsx)(z, { channel: e, className: l });
                        };
                    default:
                        return (0, p.gU)(e, n, l);
                }
            })(s, o, { locked: t, hasActiveThreads: r });
            if (null == e) return null;
            x = (0, a.jsx)(e, { color: "currentColor", className: i()(P.Kk, n) });
        }
        let D = (0, p.Bq)(s, o, t, r),
            T = `${D} icon`;
        return (0, a.jsx)(A.m, {
            text: D,
            delay: 500,
            children: (0, a.jsx)("div", { role: "img", "aria-label": T, className: i()(P.zc, l), children: x }),
        });
    }),
    Z =
        21552 == l.j
            ? s.forwardRef(function (e, n) {
                  let {
                          channel: l,
                          name: t,
                          muted: o,
                          selected: d,
                          connected: A,
                          unread: E,
                          locked: N,
                          hasActiveThreads: h,
                          onClick: _,
                          onMouseDown: p,
                          onMouseUp: x,
                          onContextMenu: D,
                          connectDragPreview: T,
                          className: g,
                          iconClassName: U,
                          subtitle: j,
                          subtitleColor: I,
                          channel: { type: v },
                          onMouseEnter: R,
                          onMouseLeave: y,
                          "aria-label": G,
                          children: H,
                          guild: z,
                          channelTypeOverride: B,
                          forceInteractable: Z,
                          mentionCount: W,
                          resolvedUnreadSetting: Y,
                          isFavoriteSuggestion: q,
                          hasActiveEvent: X = !1,
                          transitionExtras: $,
                      } = e,
                      Q = Y === V.e.ALL_MESSAGES || (null != W && W > 0),
                      ee = (0, c.bG)([L.A], () => Object.values(L.A.getVoiceStatesForChannel(l.id)).length > 0, [l.id]),
                      { role: en, ...el } = (0, r.rm)(l.id),
                      ea = s.useRef(null),
                      es = s.useRef(null),
                      et = (0, M.A)(l);
                  null != et && O.A.getConfig({ guildId: et, location: "channel_item" });
                  let ei = S.BVt.CHANNEL(et, l.id),
                      er = (0, b.Ay)(l),
                      ec = l.isGuildVocal(),
                      eu = null != _ || null != x || null != p || Z,
                      eo = (0, a.jsx)("div", {
                          className: i()({ [P.ow]: q }),
                          ref: es,
                          children: (0, a.jsxs)(C.A, {
                              role: ec && !A ? "button" : "link",
                              href: ec ? void 0 : ei,
                              target: "_blank",
                              ref: ea,
                              className: P.nf,
                              onClick: () => _?.(l),
                              transitionExtras: $,
                              ...el,
                              "aria-label": G,
                              "aria-current": d ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: P.Y5,
                                      children: [
                                          (0, a.jsx)(F, {
                                              className: U,
                                              channel: l,
                                              guild: z,
                                              hasUsersInVoiceChannel: ee,
                                              hasActiveThreads: h,
                                              locked: N,
                                          }),
                                          (0, a.jsx)(u.A, {
                                              className: i()(P.UU, { [P.NW]: X }),
                                              "aria-hidden": !0,
                                              children: (0, a.jsx)(J, {
                                                  textVariant: "text-md/medium",
                                                  channel: l,
                                                  name: null != t ? t : er,
                                              }),
                                          }),
                                          s.Children.count(H) > 0
                                              ? (0, a.jsx)("div", {
                                                    onClick: K,
                                                    onKeyPress: K,
                                                    className: P.Y_,
                                                    children: H,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != j
                                      ? (0, a.jsx)("div", {
                                            className: P.MA,
                                            children: (0, a.jsx)(f.E, {
                                                color: I ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: P.VA,
                                                children: j,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, a.jsx)(m.vN, {
                      focusTarget: ea,
                      ringTarget: es,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, a.jsxs)("div", {
                          ref: n,
                          className: i()(
                              g,
                              eu ? P.iE : P.IA,
                              (function () {
                                  if (d) return i()(k.rM, w.SELECTED);
                                  if (A) return i()(k.rM, w.CONNECTED);
                                  if (N) return w.LOCKED;
                                  if (o) return w.MUTED;
                                  if (E)
                                      if (Q) return w.UNREAD_IMPORTANT;
                                      else return w.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case S.rbe.GUILD_STAGE_VOICE:
                                      case S.rbe.GUILD_VOICE:
                                          return P.typeVoice;
                                      case S.rbe.ANNOUNCEMENT_THREAD:
                                      case S.rbe.PUBLIC_THREAD:
                                      case S.rbe.PRIVATE_THREAD:
                                          return P.ZS;
                                      case S.rbe.GUILD_ANNOUNCEMENT:
                                      case S.rbe.GUILD_TEXT:
                                      case S.rbe.GUILD_STORE:
                                      case S.rbe.GUILD_FORUM:
                                      case S.rbe.GUILD_MEDIA:
                                      default:
                                          return P.typeDefault;
                                  }
                              })(B ?? v),
                          ),
                          onMouseUp: (e) => x?.(e, l),
                          onMouseDown: (e) => p?.(e, l),
                          onContextMenu: (e) => D?.(e, l),
                          onMouseEnter: R,
                          onMouseLeave: y,
                          children: [
                              o || !E ? null : (0, a.jsx)("div", { className: i()(P.gy, Q ? P.WS : void 0) }),
                              T?.(eo) ?? eo,
                          ],
                      }),
                  });
              })
            : null;
function J(e) {
    let { channel: n, name: l, textVariant: t } = e,
        i = n.isPrivate() && 1 === (n.rawRecipients ?? []).length,
        r = n.rawRecipients?.[0]?.display_name_styles,
        c = s.useMemo(() => (i ? (0, x.mT)(r) : null), [i, r]);
    return null != c
        ? (0, a.jsx)(T.A, {
              userName: l,
              displayNameStyles: c,
              effectDisplayType: D.G.PLAIN,
              boldFontOpacity: 0.9,
              textVariant: t,
          })
        : (0, a.jsx)(f.E, { variant: t, tag: "span", color: "none", children: l });
}
