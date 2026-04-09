n.d(t, { Ay: () => F, IC: () => U, Pk: () => B, gm: () => z });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a);
if (21552 == n.j) var r = n(837381);
var o = n(311907),
    u = n(3026),
    c = n(990078),
    d = n(397927),
    h = n(25639),
    g = n(186369),
    f = n(571694),
    m = n(148719),
    p = n(47167),
    E = n(970812),
    N = n(713654),
    A = n(945096),
    x = n(922301),
    T = n(750112),
    v = n(93055),
    b = n(584682),
    S = n(598104),
    R = n(95035),
    y = n(71393),
    D = n(290863),
    C = n(741961),
    M = n(287809),
    j = n(977997),
    I = n(837921),
    _ = n(66933),
    L = n(652215),
    w = n(790782),
    O = n(928409),
    P = n(567431);
let G = {
    SELECTED: P.J1,
    CONNECTED: P.d4,
    UNREAD_IMPORTANT: P.V2,
    UNREAD_LESS_IMPORTANT: P.modeUnreadLessImportant,
    MUTED: P.F4,
    LOCKED: P.yg,
};
function k(e) {
    e.preventDefault(), e.stopPropagation();
}
let H = I.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
function U(e) {
    let { channel: t, size: n = d._3J.SIZE_20, className: i, useDynamicFacepile: a = !1 } = e;
    return a
        ? (0, l.jsx)(S.A, { className: i, channel: t, "aria-hidden": !0, size: n })
        : (0, l.jsx)(H, { className: i, src: (0, f.Y)(t), "aria-hidden": !0, size: n });
}
function B(e) {
    let { channel: t, size: n = d._3J.SIZE_20, className: i } = e,
        a = (0, o.bG)([M.default], () => M.default.getUser(t?.recipients[0])),
        s = (0, o.bG)(
            [C.A],
            () => !(null == a || null == t || t.isMultiUserDM()) && null != C.A.getTypingUsers(t?.id)[a?.id],
        ),
        {
            status: r,
            isMobile: u,
            isVR: c,
        } = (0, o.cf)([D.A], () =>
            null == a || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: D.A.getStatus(a.id), isMobile: D.A.isMobileOnline(a.id), isVR: D.A.isVROnline(a.id) },
        );
    return (0, l.jsx)(H, {
        className: i,
        size: n,
        src: a?.getAvatarURL(void 0, 40),
        status: r,
        isMobile: u,
        isVR: c,
        isTyping: s,
        "aria-label": a?.username,
        statusTooltip: !0,
    });
}
let z = i.memo(function (e) {
        let {
                className: t,
                containerClassName: n,
                channel: i,
                locked: a,
                hasActiveThreads: r,
                hasUsersInVoiceChannel: u,
            } = e,
            f = (0, o.bG)([y.A], () => y.A.getGuild(i.guild_id), [i.guild_id]),
            p = i.type === L.rbe.DM || i.type === L.rbe.GROUP_DM,
            A = (0, v.DZ)(),
            x = A && p,
            { enableWaveformIcon: T } = (0, g.b)(i.guild_id, "ChannelItemIcon"),
            b = (0, o.bG)([h.A], () => h.A.getAnimationStyle(i.id), [i.id]),
            S = i.type === L.rbe.GUILD_VOICE,
            R = null;
        if (T && S && !a && u)
            R = (0, l.jsx)(E.A, {
                color: "currentColor",
                className: s()(P.Kk, t),
                animationStyle: b,
                locked: (0, m.A)(i),
            });
        else {
            let e = (function (e, t, n, i, a) {
                let s = i ? d._3J.SIZE_24 : d._3J.SIZE_20;
                switch (e.type) {
                    case L.rbe.DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, l.jsx)(B, { channel: e, size: s, className: n });
                        };
                    case L.rbe.GROUP_DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, l.jsx)(U, { channel: e, size: s, className: n, useDynamicFacepile: a });
                        };
                    default:
                        return (0, N.gU)(e, t, n);
                }
            })(i, f, { locked: a, hasActiveThreads: r }, x, x);
            if (null == e) return null;
            R = (0, l.jsx)(e, { color: "currentColor", className: s()(P.Kk, t) });
        }
        let D = (0, N.Bq)(i, f, a, r),
            C = `${D} icon`;
        return (0, l.jsx)(c.m, {
            text: D,
            delay: 500,
            children: (0, l.jsx)("div", {
                role: "img",
                "aria-label": C,
                className: s()(P.zc, n),
                children: A ? (0, l.jsx)("div", { className: P.QO, children: R }) : R,
            }),
        });
    }),
    F =
        21552 == n.j
            ? i.forwardRef(function (e, t) {
                  let {
                          channel: n,
                          name: a,
                          muted: c,
                          selected: h,
                          connected: g,
                          unread: f,
                          locked: m,
                          hasActiveThreads: E,
                          onClick: N,
                          onMouseDown: A,
                          onMouseUp: x,
                          onContextMenu: T,
                          connectDragPreview: v,
                          className: S,
                          iconClassName: y,
                          subtitle: D,
                          subtitleColor: C,
                          channel: { type: M },
                          onMouseEnter: I,
                          onMouseLeave: H,
                          "aria-label": U,
                          children: B,
                          guild: F,
                          channelTypeOverride: K,
                          forceInteractable: W,
                          mentionCount: $,
                          resolvedUnreadSetting: Z,
                          isFavoriteSuggestion: q,
                          hasActiveEvent: J = !1,
                          transitionExtras: Y,
                      } = e,
                      X = Z === w.e.ALL_MESSAGES || (null != $ && $ > 0),
                      Q = (0, o.bG)([j.A], () => Object.values(j.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
                      { role: ee, ...et } = (0, r.rm)(n.id),
                      en = i.useRef(null),
                      el = i.useRef(null),
                      ei = (0, b.A)(n);
                  null != ei && _.A.getConfig({ guildId: ei, location: "channel_item" });
                  let ea = L.BVt.CHANNEL(ei, n.id),
                      es = (0, p.Ay)(n),
                      er = n.isGuildVocal(),
                      eo = null != N || null != x || null != A || W,
                      eu = (0, l.jsx)("div", {
                          className: s()({ [P.ow]: q }),
                          ref: el,
                          children: (0, l.jsxs)(R.A, {
                              role: er && !g ? "button" : "link",
                              href: er ? void 0 : ea,
                              target: "_blank",
                              ref: en,
                              className: P.nf,
                              onClick: () => N?.(n),
                              transitionExtras: Y,
                              ...et,
                              "aria-label": U,
                              "aria-current": h ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: P.Y5,
                                      children: [
                                          (0, l.jsx)(z, {
                                              className: y,
                                              channel: n,
                                              guild: F,
                                              hasUsersInVoiceChannel: Q,
                                              hasActiveThreads: E,
                                              locked: m,
                                          }),
                                          (0, l.jsx)(u.A, {
                                              className: s()(P.UU, { [P.NW]: J }),
                                              "aria-hidden": !0,
                                              children: (0, l.jsx)(V, { channel: n, name: null != a ? a : es }),
                                          }),
                                          i.Children.count(B) > 0
                                              ? (0, l.jsx)("div", {
                                                    onClick: k,
                                                    onKeyPress: k,
                                                    className: P.Y_,
                                                    children: B,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != D
                                      ? (0, l.jsx)("div", {
                                            className: P.MA,
                                            children: (0, l.jsx)(d.Text, {
                                                color: C ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: P.VA,
                                                children: D,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, l.jsx)(d.vN3, {
                      focusTarget: en,
                      ringTarget: el,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, l.jsxs)("div", {
                          ref: t,
                          className: s()(
                              S,
                              eo ? P.iE : P.IA,
                              (() => {
                                  if (h) return s()(O.rM, G.SELECTED);
                                  if (g) return s()(O.rM, G.CONNECTED);
                                  if (m) return G.LOCKED;
                                  if (c) return G.MUTED;
                                  if (f)
                                      if (X) return G.UNREAD_IMPORTANT;
                                      else return G.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case L.rbe.GUILD_STAGE_VOICE:
                                      case L.rbe.GUILD_VOICE:
                                          return P.typeVoice;
                                      case L.rbe.ANNOUNCEMENT_THREAD:
                                      case L.rbe.PUBLIC_THREAD:
                                      case L.rbe.PRIVATE_THREAD:
                                          return P.ZS;
                                      case L.rbe.GUILD_ANNOUNCEMENT:
                                      case L.rbe.GUILD_TEXT:
                                      case L.rbe.GUILD_STORE:
                                      case L.rbe.GUILD_FORUM:
                                      case L.rbe.GUILD_MEDIA:
                                      default:
                                          return P.typeDefault;
                                  }
                              })(K ?? M),
                          ),
                          onMouseUp: (e) => x?.(e, n),
                          onMouseDown: (e) => A?.(e, n),
                          onContextMenu: (e) => T?.(e, n),
                          onMouseEnter: I,
                          onMouseLeave: H,
                          children: [
                              c || !f ? null : (0, l.jsx)("div", { className: s()(P.gy, X ? P.WS : void 0) }),
                              v?.(eu) ?? eu,
                          ],
                      }),
                  });
              })
            : null;
function V(e) {
    let { channel: t, name: n } = e,
        a = t.isPrivate() && 1 === (t.rawRecipients ?? []).length,
        s = t.rawRecipients?.[0]?.display_name_styles,
        r = i.useMemo(() => (a ? (0, A.mT)(s) : null), [a, s]);
    return null != r
        ? (0, l.jsx)(T.A, { userName: n, displayNameStyles: r, effectDisplayType: x.G.PLAIN, boldFontOpacity: 0.9 })
        : n;
}
