l.d(n, { Ay: () => B, IC: () => K, Pk: () => F, dG: () => w, gm: () => z });
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
    x = l(713654),
    D = l(945096),
    T = l(922301),
    g = l(660184),
    p = l(598104),
    M = l(95035),
    U = l(162199),
    C = l(897898),
    j = l(71393),
    v = l(290863),
    I = l(741961),
    R = l(287809),
    y = l(977997),
    L = l(19575),
    G = l(66933),
    O = l(652215),
    S = l(790782),
    V = l(180961),
    k = l(601551);
let P = {
    SELECTED: k.J1,
    CONNECTED: k.d4,
    UNREAD_IMPORTANT: k.V2,
    UNREAD_LESS_IMPORTANT: k.modeUnreadLessImportant,
    MUTED: k.F4,
    LOCKED: k.yg,
};
function w(e) {
    e.preventDefault(), e.stopPropagation();
}
let H = L.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function K(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: s } = e;
    return (0, t.jsx)(p.A, { className: s, channel: n, "aria-hidden": !0, size: l });
}
function F(e) {
    let { channel: n, size: l = d._3.SIZE_20, className: s } = e,
        a = (0, u.bG)([R.default], () => R.default.getUser(n?.recipients[0])),
        i = (0, u.bG)(
            [I.A],
            () => !(null == a || null == n || n.isMultiUserDM()) && null != I.A.getTypingUsers(n?.id)[a?.id],
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
    return (0, t.jsx)(H, {
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
let z = s.memo(function (e) {
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
            E = s.type === O.rbe.GUILD_VOICE,
            b = null;
        if (d && E && !a && c)
            b = (0, t.jsx)(_.A, {
                color: "currentColor",
                className: i()(k.Kk, n),
                animationStyle: f,
                locked: (0, h.A)(s),
            });
        else {
            let e = (function (e, n, l) {
                switch (e.type) {
                    case O.rbe.DM:
                        return function (n) {
                            let { className: l } = n;
                            return (0, t.jsx)(F, { channel: e, className: l });
                        };
                    case O.rbe.GROUP_DM:
                        return function (n) {
                            let { className: l } = n;
                            return (0, t.jsx)(K, { channel: e, className: l });
                        };
                    default:
                        return (0, x.gU)(e, n, l);
                }
            })(s, o, { locked: a, hasActiveThreads: r });
            if (null == e) return null;
            b = (0, t.jsx)(e, { color: "currentColor", className: i()(k.Kk, n) });
        }
        let D = (0, x.Bq)(s, o, a, r),
            T = `${D} icon`;
        return (0, t.jsx)(A.m, {
            text: D,
            delay: 500,
            children: (0, t.jsx)("div", { role: "img", "aria-label": T, className: i()(k.zc, l), children: b }),
        });
    }),
    B =
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
                          onMouseDown: x,
                          onMouseUp: D,
                          onContextMenu: T,
                          connectDragPreview: g,
                          className: p,
                          iconClassName: j,
                          subtitle: v,
                          subtitleColor: I,
                          channel: { type: R },
                          onMouseEnter: L,
                          onMouseLeave: H,
                          "aria-label": K,
                          children: F,
                          guild: B,
                          channelTypeOverride: J,
                          forceInteractable: W,
                          mentionCount: Y,
                          resolvedUnreadSetting: q,
                          isFavoriteSuggestion: X,
                          hasActiveEvent: $ = !1,
                          transitionExtras: Q,
                      } = e,
                      ee = q === S.e.ALL_MESSAGES || (null != Y && Y > 0),
                      en = (0, u.bG)([y.A], () => Object.values(y.A.getVoiceStatesForChannel(l.id)).length > 0, [l.id]),
                      { role: el, ...et } = (0, r.rm)(l.id),
                      es = s.useRef(null),
                      ea = s.useRef(null),
                      ei = (0, U.A)(l);
                  null != ei && G.A.getConfig({ guildId: ei, location: "channel_item" });
                  let er = O.BVt.CHANNEL(ei, l.id),
                      eu = (0, b.Ay)(l),
                      ec = l.isGuildVocal(),
                      eo = null != _ || null != D || null != x || W,
                      ed = (0, t.jsx)("div", {
                          className: i()({ [k.ow]: X }),
                          ref: ea,
                          children: (0, t.jsxs)(M.A, {
                              role: ec && !A ? "button" : "link",
                              href: ec ? void 0 : er,
                              target: "_blank",
                              ref: es,
                              className: k.nf,
                              onClick: () => _?.(l),
                              onAuxClick: (e) => (0, C.A)(e, l),
                              transitionExtras: Q,
                              ...et,
                              "aria-label": K,
                              "aria-current": d ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, t.jsxs)("div", {
                                      className: k.Y5,
                                      children: [
                                          (0, t.jsx)(z, {
                                              className: j,
                                              channel: l,
                                              guild: B,
                                              hasUsersInVoiceChannel: en,
                                              hasActiveThreads: h,
                                              locked: m,
                                          }),
                                          (0, t.jsx)(c.A, {
                                              className: i()(k.UU, { [k.NW]: $ }),
                                              "aria-hidden": !0,
                                              children: (0, t.jsx)(Z, {
                                                  textVariant: "text-md/medium",
                                                  channel: l,
                                                  name: null != a ? a : eu,
                                              }),
                                          }),
                                          s.Children.count(F) > 0
                                              ? (0, t.jsx)("div", {
                                                    onClick: w,
                                                    onKeyPress: w,
                                                    className: k.Y_,
                                                    children: F,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != v
                                      ? (0, t.jsx)("div", {
                                            className: k.MA,
                                            children: (0, t.jsx)(f.E, {
                                                color: I ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: k.VA,
                                                children: v,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, t.jsx)(E.vN, {
                      focusTarget: es,
                      ringTarget: ea,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, t.jsxs)("div", {
                          ref: n,
                          className: i()(
                              p,
                              eo ? k.iE : k.IA,
                              (function () {
                                  if (d) return i()(V.rM, P.SELECTED);
                                  if (A) return i()(V.rM, P.CONNECTED);
                                  if (m) return P.LOCKED;
                                  if (o) return P.MUTED;
                                  if (N)
                                      if (ee) return P.UNREAD_IMPORTANT;
                                      else return P.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case O.rbe.GUILD_STAGE_VOICE:
                                      case O.rbe.GUILD_VOICE:
                                          return k.typeVoice;
                                      case O.rbe.ANNOUNCEMENT_THREAD:
                                      case O.rbe.PUBLIC_THREAD:
                                      case O.rbe.PRIVATE_THREAD:
                                          return k.ZS;
                                      case O.rbe.GUILD_ANNOUNCEMENT:
                                      case O.rbe.GUILD_TEXT:
                                      case O.rbe.GUILD_STORE:
                                      case O.rbe.GUILD_FORUM:
                                      case O.rbe.GUILD_MEDIA:
                                      default:
                                          return k.typeDefault;
                                  }
                              })(J ?? R),
                          ),
                          onMouseUp: (e) => D?.(e, l),
                          onMouseDown: (e) => x?.(e, l),
                          onContextMenu: (e) => T?.(e, l),
                          onMouseEnter: L,
                          onMouseLeave: H,
                          children: [
                              o || !N ? null : (0, t.jsx)("div", { className: i()(k.gy, ee ? k.WS : void 0) }),
                              g?.(ed) ?? ed,
                          ],
                      }),
                  });
              })
            : null;
function Z(e) {
    let { channel: n, name: l, textVariant: a } = e,
        i = n.isPrivate() && 1 === (n.rawRecipients ?? []).length,
        r = n.rawRecipients?.[0]?.display_name_styles,
        u = s.useMemo(() => (i ? (0, D.mT)(r) : null), [i, r]);
    return null != u
        ? (0, t.jsx)(g.A, {
              userName: l,
              displayNameStyles: u,
              effectDisplayType: T.G.PLAIN,
              boldFontOpacity: 0.9,
              textVariant: a,
          })
        : (0, t.jsx)(f.E, { variant: a, tag: "span", color: "none", children: l });
}
