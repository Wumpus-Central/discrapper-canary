n.d(t, { Ay: () => W, IC: () => k, Pk: () => w, gm: () => U });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a);
if (21552 == n.j) var r = n(837381);
var u = n(311907),
    o = n(3026),
    c = n(990078),
    d = n(397927),
    A = n(25639),
    h = n(186369),
    E = n(148719),
    _ = n(47167),
    g = n(970812),
    m = n(713654),
    f = n(945096),
    I = n(922301),
    N = n(750112),
    L = n(584682),
    T = n(598104),
    C = n(95035),
    x = n(71393),
    S = n(290863),
    b = n(741961),
    D = n(287809),
    p = n(977997),
    y = n(837921),
    v = n(66933),
    G = n(652215),
    j = n(790782),
    O = n(907305),
    P = n(645591);
let M = {
    SELECTED: P.J1,
    CONNECTED: P.d4,
    UNREAD_IMPORTANT: P.V2,
    UNREAD_LESS_IMPORTANT: P.modeUnreadLessImportant,
    MUTED: P.F4,
    LOCKED: P.yg,
};
function F(e) {
    e.preventDefault(), e.stopPropagation();
}
let R = y.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
function k(e) {
    let { channel: t, size: n = d._3J.SIZE_20, className: l } = e;
    return (0, i.jsx)(T.A, { className: l, channel: t, "aria-hidden": !0, size: n });
}
function w(e) {
    let { channel: t, size: n = d._3J.SIZE_20, className: l } = e,
        a = (0, u.bG)([D.default], () => D.default.getUser(t?.recipients[0])),
        s = (0, u.bG)(
            [b.A],
            () => !(null == a || null == t || t.isMultiUserDM()) && null != b.A.getTypingUsers(t?.id)[a?.id],
        ),
        {
            status: r,
            isMobile: o,
            isVR: c,
        } = (0, u.cf)([S.A], () =>
            null == a || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: S.A.getStatus(a.id), isMobile: S.A.isMobileOnline(a.id), isVR: S.A.isVROnline(a.id) },
        );
    return (0, i.jsx)(R, {
        className: l,
        size: n,
        src: a?.getAvatarURL(void 0, 40),
        status: r,
        isMobile: o,
        isVR: c,
        isTyping: s,
        "aria-label": a?.username,
        statusTooltip: !0,
    });
}
let U = l.memo(function (e) {
        let {
                className: t,
                containerClassName: n,
                channel: l,
                locked: a,
                hasActiveThreads: r,
                hasUsersInVoiceChannel: o,
            } = e,
            d = (0, u.bG)([x.A], () => x.A.getGuild(l.guild_id), [l.guild_id]),
            { enableWaveformIcon: _ } = (0, h.b)(l.guild_id, "ChannelItemIcon"),
            f = (0, u.bG)([A.A], () => A.A.getAnimationStyle(l.id), [l.id]),
            I = l.type === G.rbe.GUILD_VOICE,
            N = null;
        if (_ && I && !a && o)
            N = (0, i.jsx)(g.A, {
                color: "currentColor",
                className: s()(P.Kk, t),
                animationStyle: f,
                locked: (0, E.A)(l),
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case G.rbe.DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, i.jsx)(w, { channel: e, className: n });
                        };
                    case G.rbe.GROUP_DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, i.jsx)(k, { channel: e, className: n });
                        };
                    default:
                        return (0, m.gU)(e, t, n);
                }
            })(l, d, { locked: a, hasActiveThreads: r });
            if (null == e) return null;
            N = (0, i.jsx)(e, { color: "currentColor", className: s()(P.Kk, t) });
        }
        let L = (0, m.Bq)(l, d, a, r),
            T = `${L} icon`;
        return (0, i.jsx)(c.m, {
            text: L,
            delay: 500,
            children: (0, i.jsx)("div", { role: "img", "aria-label": T, className: s()(P.zc, n), children: N }),
        });
    }),
    W =
        21552 == n.j
            ? l.forwardRef(function (e, t) {
                  let {
                          channel: n,
                          name: a,
                          muted: c,
                          selected: A,
                          connected: h,
                          unread: E,
                          locked: g,
                          hasActiveThreads: m,
                          onClick: f,
                          onMouseDown: I,
                          onMouseUp: N,
                          onContextMenu: T,
                          connectDragPreview: x,
                          className: S,
                          iconClassName: b,
                          subtitle: D,
                          subtitleColor: y,
                          channel: { type: R },
                          onMouseEnter: k,
                          onMouseLeave: w,
                          "aria-label": W,
                          children: H,
                          guild: z,
                          channelTypeOverride: K,
                          forceInteractable: V,
                          mentionCount: $,
                          resolvedUnreadSetting: Y,
                          isFavoriteSuggestion: Z,
                          hasActiveEvent: J = !1,
                          transitionExtras: q,
                      } = e,
                      Q = Y === j.e.ALL_MESSAGES || (null != $ && $ > 0),
                      X = (0, u.bG)([p.A], () => Object.values(p.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
                      { role: ee, ...et } = (0, r.rm)(n.id),
                      en = l.useRef(null),
                      ei = l.useRef(null),
                      el = (0, L.A)(n);
                  null != el && v.A.getConfig({ guildId: el, location: "channel_item" });
                  let ea = G.BVt.CHANNEL(el, n.id),
                      es = (0, _.Ay)(n),
                      er = n.isGuildVocal(),
                      eu = null != f || null != N || null != I || V,
                      eo = (0, i.jsx)("div", {
                          className: s()({ [P.ow]: Z }),
                          ref: ei,
                          children: (0, i.jsxs)(C.A, {
                              role: er && !h ? "button" : "link",
                              href: er ? void 0 : ea,
                              target: "_blank",
                              ref: en,
                              className: P.nf,
                              onClick: () => f?.(n),
                              transitionExtras: q,
                              ...et,
                              "aria-label": W,
                              "aria-current": A ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: P.Y5,
                                      children: [
                                          (0, i.jsx)(U, {
                                              className: b,
                                              channel: n,
                                              guild: z,
                                              hasUsersInVoiceChannel: X,
                                              hasActiveThreads: m,
                                              locked: g,
                                          }),
                                          (0, i.jsx)(o.A, {
                                              className: s()(P.UU, { [P.NW]: J }),
                                              "aria-hidden": !0,
                                              children: (0, i.jsx)(B, { channel: n, name: null != a ? a : es }),
                                          }),
                                          l.Children.count(H) > 0
                                              ? (0, i.jsx)("div", {
                                                    onClick: F,
                                                    onKeyPress: F,
                                                    className: P.Y_,
                                                    children: H,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != D
                                      ? (0, i.jsx)("div", {
                                            className: P.MA,
                                            children: (0, i.jsx)(d.Text, {
                                                color: y ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: P.VA,
                                                children: D,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, i.jsx)(d.vN3, {
                      focusTarget: en,
                      ringTarget: ei,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, i.jsxs)("div", {
                          ref: t,
                          className: s()(
                              S,
                              eu ? P.iE : P.IA,
                              (() => {
                                  if (A) return s()(O.rM, M.SELECTED);
                                  if (h) return s()(O.rM, M.CONNECTED);
                                  if (g) return M.LOCKED;
                                  if (c) return M.MUTED;
                                  if (E)
                                      if (Q) return M.UNREAD_IMPORTANT;
                                      else return M.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case G.rbe.GUILD_STAGE_VOICE:
                                      case G.rbe.GUILD_VOICE:
                                          return P.typeVoice;
                                      case G.rbe.ANNOUNCEMENT_THREAD:
                                      case G.rbe.PUBLIC_THREAD:
                                      case G.rbe.PRIVATE_THREAD:
                                          return P.ZS;
                                      case G.rbe.GUILD_ANNOUNCEMENT:
                                      case G.rbe.GUILD_TEXT:
                                      case G.rbe.GUILD_STORE:
                                      case G.rbe.GUILD_FORUM:
                                      case G.rbe.GUILD_MEDIA:
                                      default:
                                          return P.typeDefault;
                                  }
                              })(K ?? R),
                          ),
                          onMouseUp: (e) => N?.(e, n),
                          onMouseDown: (e) => I?.(e, n),
                          onContextMenu: (e) => T?.(e, n),
                          onMouseEnter: k,
                          onMouseLeave: w,
                          children: [
                              c || !E ? null : (0, i.jsx)("div", { className: s()(P.gy, Q ? P.WS : void 0) }),
                              x?.(eo) ?? eo,
                          ],
                      }),
                  });
              })
            : null;
function B(e) {
    let { channel: t, name: n } = e,
        a = t.isPrivate() && 1 === (t.rawRecipients ?? []).length,
        s = t.rawRecipients?.[0]?.display_name_styles,
        r = l.useMemo(() => (a ? (0, f.mT)(s) : null), [a, s]);
    return null != r
        ? (0, i.jsx)(N.A, { userName: n, displayNameStyles: r, effectDisplayType: I.G.PLAIN, boldFontOpacity: 0.9 })
        : n;
}
