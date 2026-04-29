n.d(t, { Ay: () => $, IC: () => B, Pk: () => V, gm: () => F });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l);
if (21552 == n.j) var s = n(837381);
var u = n(17928);
if (21552 == n.j) var o = n(780645);
var c = n(990078),
    d = n(97808),
    g = n(778712);
if (21552 == n.j) var h = n(834730);
if (21552 == n.j) var f = n(187322);
var m = n(25639),
    A = n(186369),
    N = n(148719),
    x = n(47167),
    E = n(970812),
    v = n(713654),
    S = n(945096),
    D = n(922301),
    b = n(368919),
    T = n(584682),
    j = n(598104),
    y = n(95035),
    M = n(71393),
    p = n(290863),
    R = n(741961),
    C = n(287809),
    w = n(977997),
    _ = n(19575),
    I = n(66933),
    L = n(652215),
    U = n(790782),
    G = n(907305),
    k = n(645591);
let H = {
    SELECTED: k.J1,
    CONNECTED: k.d4,
    UNREAD_IMPORTANT: k.V2,
    UNREAD_LESS_IMPORTANT: k.modeUnreadLessImportant,
    MUTED: k.F4,
    LOCKED: k.yg,
};
function O(e) {
    e.preventDefault(), e.stopPropagation();
}
let P = _.Ay.getEnableHardwareAcceleration() ? d.Js : d.eu;
function B(e) {
    let { channel: t, size: n = g._3.SIZE_20, className: a } = e;
    return (0, i.jsx)(j.A, { className: a, channel: t, "aria-hidden": !0, size: n });
}
function V(e) {
    let { channel: t, size: n = g._3.SIZE_20, className: a } = e,
        l = (0, u.bG)([C.default], () => C.default.getUser(t?.recipients[0])),
        r = (0, u.bG)(
            [R.A],
            () => !(null == l || null == t || t.isMultiUserDM()) && null != R.A.getTypingUsers(t?.id)[l?.id],
        ),
        {
            status: s,
            isMobile: o,
            isVR: c,
        } = (0, u.cf)([p.A], () =>
            null == l || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: p.A.getStatus(l.id), isMobile: p.A.isMobileOnline(l.id), isVR: p.A.isVROnline(l.id) },
        );
    return (0, i.jsx)(P, {
        className: a,
        size: n,
        src: l?.getAvatarURL(void 0, 40),
        status: s,
        isMobile: o,
        isVR: c,
        isTyping: r,
        "aria-label": l?.username,
        statusTooltip: !0,
    });
}
let F = a.memo(function (e) {
        let {
                className: t,
                containerClassName: n,
                channel: a,
                locked: l,
                hasActiveThreads: s,
                hasUsersInVoiceChannel: o,
            } = e,
            d = (0, u.bG)([M.A], () => M.A.getGuild(a.guild_id), [a.guild_id]),
            { enableWaveformIcon: g } = (0, A.b)(a.guild_id, "ChannelItemIcon"),
            h = (0, u.bG)([m.A], () => m.A.getAnimationStyle(a.id), [a.id]),
            f = a.type === L.rbe.GUILD_VOICE,
            x = null;
        if (g && f && !l && o)
            x = (0, i.jsx)(E.A, {
                color: "currentColor",
                className: r()(k.Kk, t),
                animationStyle: h,
                locked: (0, N.A)(a),
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case L.rbe.DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, i.jsx)(V, { channel: e, className: n });
                        };
                    case L.rbe.GROUP_DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, i.jsx)(B, { channel: e, className: n });
                        };
                    default:
                        return (0, v.gU)(e, t, n);
                }
            })(a, d, { locked: l, hasActiveThreads: s });
            if (null == e) return null;
            x = (0, i.jsx)(e, { color: "currentColor", className: r()(k.Kk, t) });
        }
        let S = (0, v.Bq)(a, d, l, s),
            D = `${S} icon`;
        return (0, i.jsx)(c.m, {
            text: S,
            delay: 500,
            children: (0, i.jsx)("div", { role: "img", "aria-label": D, className: r()(k.zc, n), children: x }),
        });
    }),
    $ =
        21552 == n.j
            ? a.forwardRef(function (e, t) {
                  let {
                          channel: n,
                          name: l,
                          muted: c,
                          selected: d,
                          connected: g,
                          unread: m,
                          locked: A,
                          hasActiveThreads: N,
                          onClick: E,
                          onMouseDown: v,
                          onMouseUp: S,
                          onContextMenu: D,
                          connectDragPreview: b,
                          className: j,
                          iconClassName: M,
                          subtitle: p,
                          subtitleColor: R,
                          channel: { type: C },
                          onMouseEnter: _,
                          onMouseLeave: P,
                          "aria-label": B,
                          children: V,
                          guild: $,
                          channelTypeOverride: z,
                          forceInteractable: K,
                          mentionCount: Z,
                          resolvedUnreadSetting: W,
                          isFavoriteSuggestion: Y,
                          hasActiveEvent: J = !1,
                          transitionExtras: X,
                      } = e,
                      Q = W === U.e.ALL_MESSAGES || (null != Z && Z > 0),
                      ee = (0, u.bG)([w.A], () => Object.values(w.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
                      { role: et, ...en } = (0, s.rm)(n.id),
                      ei = a.useRef(null),
                      ea = a.useRef(null),
                      el = (0, T.A)(n);
                  null != el && I.A.getConfig({ guildId: el, location: "channel_item" });
                  let er = L.BVt.CHANNEL(el, n.id),
                      es = (0, x.Ay)(n),
                      eu = n.isGuildVocal(),
                      eo = null != E || null != S || null != v || K,
                      ec = (0, i.jsx)("div", {
                          className: r()({ [k.ow]: Y }),
                          ref: ea,
                          children: (0, i.jsxs)(y.A, {
                              role: eu && !g ? "button" : "link",
                              href: eu ? void 0 : er,
                              target: "_blank",
                              ref: ei,
                              className: k.nf,
                              onClick: () => E?.(n),
                              transitionExtras: X,
                              ...en,
                              "aria-label": B,
                              "aria-current": d ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: k.Y5,
                                      children: [
                                          (0, i.jsx)(F, {
                                              className: M,
                                              channel: n,
                                              guild: $,
                                              hasUsersInVoiceChannel: ee,
                                              hasActiveThreads: N,
                                              locked: A,
                                          }),
                                          (0, i.jsx)(o.A, {
                                              className: r()(k.UU, { [k.NW]: J }),
                                              "aria-hidden": !0,
                                              children: (0, i.jsx)(q, { channel: n, name: null != l ? l : es }),
                                          }),
                                          a.Children.count(V) > 0
                                              ? (0, i.jsx)("div", {
                                                    onClick: O,
                                                    onKeyPress: O,
                                                    className: k.Y_,
                                                    children: V,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != p
                                      ? (0, i.jsx)("div", {
                                            className: k.MA,
                                            children: (0, i.jsx)(h.E, {
                                                color: R ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: k.VA,
                                                children: p,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, i.jsx)(f.vN, {
                      focusTarget: ei,
                      ringTarget: ea,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, i.jsxs)("div", {
                          ref: t,
                          className: r()(
                              j,
                              eo ? k.iE : k.IA,
                              (() => {
                                  if (d) return r()(G.rM, H.SELECTED);
                                  if (g) return r()(G.rM, H.CONNECTED);
                                  if (A) return H.LOCKED;
                                  if (c) return H.MUTED;
                                  if (m)
                                      if (Q) return H.UNREAD_IMPORTANT;
                                      else return H.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case L.rbe.GUILD_STAGE_VOICE:
                                      case L.rbe.GUILD_VOICE:
                                          return k.typeVoice;
                                      case L.rbe.ANNOUNCEMENT_THREAD:
                                      case L.rbe.PUBLIC_THREAD:
                                      case L.rbe.PRIVATE_THREAD:
                                          return k.ZS;
                                      case L.rbe.GUILD_ANNOUNCEMENT:
                                      case L.rbe.GUILD_TEXT:
                                      case L.rbe.GUILD_STORE:
                                      case L.rbe.GUILD_FORUM:
                                      case L.rbe.GUILD_MEDIA:
                                      default:
                                          return k.typeDefault;
                                  }
                              })(z ?? C),
                          ),
                          onMouseUp: (e) => S?.(e, n),
                          onMouseDown: (e) => v?.(e, n),
                          onContextMenu: (e) => D?.(e, n),
                          onMouseEnter: _,
                          onMouseLeave: P,
                          children: [
                              c || !m ? null : (0, i.jsx)("div", { className: r()(k.gy, Q ? k.WS : void 0) }),
                              b?.(ec) ?? ec,
                          ],
                      }),
                  });
              })
            : null;
function q(e) {
    let { channel: t, name: n } = e,
        l = t.isPrivate() && 1 === (t.rawRecipients ?? []).length,
        r = t.rawRecipients?.[0]?.display_name_styles,
        s = a.useMemo(() => (l ? (0, S.mT)(r) : null), [l, r]);
    return null != s
        ? (0, i.jsx)(b.A, { userName: n, displayNameStyles: s, effectDisplayType: D.G.PLAIN, boldFontOpacity: 0.9 })
        : n;
}
