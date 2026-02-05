n.d(t, { Ay: () => B, IC: () => P, Pk: () => H, gm: () => U });
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
    N = n(970812),
    A = n(713654),
    E = n(945096),
    x = n(922301),
    T = n(750112),
    v = n(584682),
    b = n(255266),
    S = n(95035),
    R = n(71393),
    y = n(290863),
    C = n(741961),
    D = n(287809),
    M = n(977997),
    j = n(837921),
    I = n(652215),
    _ = n(790782),
    L = n(728444),
    w = n(811094);
let k = {
    SELECTED: w.J1,
    CONNECTED: w.d4,
    UNREAD_IMPORTANT: w.V2,
    UNREAD_LESS_IMPORTANT: w.modeUnreadLessImportant,
    MUTED: w.F4,
    LOCKED: w.yg,
};
function G(e) {
    e.preventDefault(), e.stopPropagation();
}
let O = j.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
function P(e) {
    let { channel: t, size: n = d._3J.SIZE_20 } = e;
    return (0, l.jsx)(O, { src: (0, f.Y)(t), "aria-hidden": !0, size: n });
}
function H(e) {
    let { channel: t, size: n = d._3J.SIZE_20 } = e,
        i = (0, o.bG)([D.default], () => D.default.getUser(t?.recipients[0])),
        a = (0, o.bG)(
            [C.A],
            () => !(null == i || null == t || t.isMultiUserDM()) && null != C.A.getTypingUsers(t?.id)[i?.id],
        ),
        {
            status: s,
            isMobile: r,
            isVR: u,
        } = (0, o.cf)([y.A], () =>
            null == i || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: y.A.getStatus(i.id), isMobile: y.A.isMobileOnline(i.id), isVR: y.A.isVROnline(i.id) },
        );
    return (0, l.jsx)(O, {
        size: n,
        src: i?.getAvatarURL(void 0, 40),
        status: s,
        isMobile: r,
        isVR: u,
        isTyping: a,
        "aria-label": i?.username,
        statusTooltip: !0,
    });
}
let U = i.memo(function (e) {
        let {
                className: t,
                containerClassName: n,
                channel: i,
                locked: a,
                hasActiveThreads: r,
                hasUsersInVoiceChannel: u,
                withGuildIcon: d,
            } = e,
            f = (0, o.bG)([R.A], () => R.A.getGuild(i.guild_id), [i.guild_id]),
            p = i.type === I.rbe.DM || i.type === I.rbe.GROUP_DM,
            { enableWaveformIcon: E } = (0, g.b)(i.guild_id, "ChannelItemIcon"),
            x = (0, o.bG)([h.A], () => h.A.getAnimationStyle(i.id), [i.id]),
            T = i.type === I.rbe.GUILD_VOICE,
            v = E && T && !a && u,
            S = null;
        if (d && null != f && !p)
            S = (0, l.jsx)(b.A, {
                size: b.q.SMALL_32,
                className: w.h5,
                iconClassName: w.Is,
                channel: i,
                guild: f,
                locked: a,
                hasActiveThreads: r,
            });
        else if (v)
            S = (0, l.jsx)(N.A, {
                color: "currentColor",
                className: s()(w.Kk, t),
                animationStyle: x,
                locked: (0, m.A)(i),
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case I.rbe.DM:
                        return function () {
                            return (0, l.jsx)(H, { channel: e });
                        };
                    case I.rbe.GROUP_DM:
                        return function () {
                            return (0, l.jsx)(P, { channel: e });
                        };
                    default:
                        return (0, A.gU)(e, t, n);
                }
            })(i, f, { locked: a, hasActiveThreads: r });
            if (null == e) return null;
            S = (0, l.jsx)(e, { color: "currentColor", className: s()(w.Kk, t) });
        }
        let y = d ? f?.name : (0, A.Bq)(i, f, a, r),
            C = d && null != f ? `${f.name} - ${y} icon` : `${y} icon`;
        return (0, l.jsx)(c.m, {
            text: y,
            delay: 500,
            children: (0, l.jsx)("div", { role: "img", "aria-label": C, className: s()(w.zc, n), children: S }),
        });
    }),
    B =
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
                          hasActiveThreads: N,
                          onClick: A,
                          onMouseDown: E,
                          onMouseUp: x,
                          onContextMenu: T,
                          connectDragPreview: b,
                          className: R,
                          iconClassName: y,
                          subtitle: C,
                          subtitleColor: D,
                          channel: { type: j },
                          onMouseEnter: O,
                          onMouseLeave: P,
                          "aria-label": H,
                          children: B,
                          guild: F,
                          channelTypeOverride: V,
                          forceInteractable: K,
                          mentionCount: W,
                          resolvedUnreadSetting: q,
                          isFavoriteSuggestion: $,
                          withGuildIcon: Z,
                          hasActiveEvent: Y = !1,
                      } = e,
                      J = q === _.e.ALL_MESSAGES || (null != W && W > 0),
                      X = (0, o.bG)([M.A], () => Object.values(M.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
                      { role: Q, ...ee } = (0, r.rm)(n.id),
                      et = i.useRef(null),
                      en = i.useRef(null),
                      el = (0, v.A)(n),
                      ei = I.BVt.CHANNEL(el, n.id),
                      ea = (0, p.Ay)(n),
                      es = n.isGuildVocal(),
                      er = null != A || null != x || null != E || K,
                      eo = (0, l.jsx)("div", {
                          className: s()({ [w.ow]: $ }),
                          ref: en,
                          children: (0, l.jsxs)(S.A, {
                              role: es && !g ? "button" : "link",
                              href: es ? void 0 : ei,
                              target: "_blank",
                              ref: et,
                              className: w.nf,
                              onClick: () => A?.(n),
                              ...ee,
                              "aria-label": H,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: w.Y5,
                                      children: [
                                          (0, l.jsx)(U, {
                                              className: y,
                                              channel: n,
                                              guild: F,
                                              hasUsersInVoiceChannel: X,
                                              hasActiveThreads: N,
                                              locked: m,
                                              withGuildIcon: Z,
                                          }),
                                          (0, l.jsx)(u.A, {
                                              className: s()(w.UU, { [w.NW]: Y }),
                                              "aria-hidden": !0,
                                              children: (0, l.jsx)(z, { channel: n, name: null != a ? a : ea }),
                                          }),
                                          i.Children.count(B) > 0
                                              ? (0, l.jsx)("div", { onClick: G, className: w.Y_, children: B })
                                              : null,
                                      ],
                                  }),
                                  null != C
                                      ? (0, l.jsx)("div", {
                                            className: s()(w.MA, { [w.lY]: Z }),
                                            children: (0, l.jsx)(d.Text, {
                                                color: D ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: w.VA,
                                                children: C,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, l.jsx)(d.vN3, {
                      focusTarget: et,
                      ringTarget: en,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, l.jsxs)("div", {
                          ref: t,
                          className: s()(
                              R,
                              er ? w.iE : w.IA,
                              (() => {
                                  if (h) return s()(L.rM, k.SELECTED);
                                  if (g) return s()(L.rM, k.CONNECTED);
                                  if (m) return k.LOCKED;
                                  if (c) return k.MUTED;
                                  if (f)
                                      if (J) return k.UNREAD_IMPORTANT;
                                      else return k.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case I.rbe.GUILD_STAGE_VOICE:
                                      case I.rbe.GUILD_VOICE:
                                          return w.typeVoice;
                                      case I.rbe.ANNOUNCEMENT_THREAD:
                                      case I.rbe.PUBLIC_THREAD:
                                      case I.rbe.PRIVATE_THREAD:
                                          return w.ZS;
                                      case I.rbe.GUILD_ANNOUNCEMENT:
                                      case I.rbe.GUILD_TEXT:
                                      case I.rbe.GUILD_STORE:
                                      case I.rbe.GUILD_FORUM:
                                      case I.rbe.GUILD_MEDIA:
                                      default:
                                          return w.typeDefault;
                                  }
                              })(V ?? j),
                          ),
                          onMouseUp: (e) => x?.(e, n),
                          onMouseDown: (e) => E?.(e, n),
                          onContextMenu: (e) => T?.(e, n),
                          onMouseEnter: O,
                          onMouseLeave: P,
                          children: [
                              c || !f ? null : (0, l.jsx)("div", { className: s()(w.gy, J ? w.WS : void 0) }),
                              b?.(eo) ?? eo,
                          ],
                      }),
                  });
              })
            : null;
function z(e) {
    let { channel: t, name: n } = e,
        a = t.isPrivate() && 1 === (t.rawRecipients ?? []).length,
        s = t.rawRecipients?.[0]?.display_name_styles,
        r = i.useMemo(() => (a ? (0, E.mT)(s) : null), [a, s]);
    return null != r
        ? (0, l.jsx)(T.A, { userName: n, displayNameStyles: r, effectDisplayType: x.G.PLAIN, boldFontOpacity: 0.9 })
        : n;
}
