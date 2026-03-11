n.d(t, { Ay: () => z, IC: () => H, Pk: () => U, gm: () => B });
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
    v = n(584682),
    b = n(515610),
    S = n(598104),
    R = n(95035),
    y = n(71393),
    D = n(290863),
    C = n(741961),
    M = n(287809),
    j = n(977997),
    I = n(837921),
    _ = n(652215),
    L = n(790782),
    w = n(728444),
    G = n(811094);
let O = {
    SELECTED: G.J1,
    CONNECTED: G.d4,
    UNREAD_IMPORTANT: G.V2,
    UNREAD_LESS_IMPORTANT: G.modeUnreadLessImportant,
    MUTED: G.F4,
    LOCKED: G.yg,
};
function P(e) {
    e.preventDefault(), e.stopPropagation();
}
let k = I.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
function H(e) {
    let { channel: t, size: n = d._3J.SIZE_20, className: i, useDynamicFacepile: a = !1 } = e;
    return a
        ? (0, l.jsx)(S.A, { className: i, channel: t, "aria-hidden": !0, size: n })
        : (0, l.jsx)(k, { className: i, src: (0, f.Y)(t), "aria-hidden": !0, size: n });
}
function U(e) {
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
    return (0, l.jsx)(k, {
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
let B = i.memo(function (e) {
        let {
                className: t,
                containerClassName: n,
                channel: i,
                locked: a,
                hasActiveThreads: r,
                hasUsersInVoiceChannel: u,
            } = e,
            f = (0, o.bG)([y.A], () => y.A.getGuild(i.guild_id), [i.guild_id]),
            p = i.type === _.rbe.DM || i.type === _.rbe.GROUP_DM,
            A = (0, b.A)(),
            x = A && p,
            { enableWaveformIcon: T } = (0, g.b)(i.guild_id, "ChannelItemIcon"),
            v = (0, o.bG)([h.A], () => h.A.getAnimationStyle(i.id), [i.id]),
            S = i.type === _.rbe.GUILD_VOICE,
            R = null;
        if (T && S && !a && u)
            R = (0, l.jsx)(E.A, {
                color: "currentColor",
                className: s()(G.Kk, t),
                animationStyle: v,
                locked: (0, m.A)(i),
            });
        else {
            let e = (function (e, t, n, i, a) {
                let s = i ? d._3J.SIZE_24 : d._3J.SIZE_20;
                switch (e.type) {
                    case _.rbe.DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, l.jsx)(U, { channel: e, size: s, className: n });
                        };
                    case _.rbe.GROUP_DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, l.jsx)(H, { channel: e, size: s, className: n, useDynamicFacepile: a });
                        };
                    default:
                        return (0, N.gU)(e, t, n);
                }
            })(i, f, { locked: a, hasActiveThreads: r }, x, x);
            if (null == e) return null;
            R = (0, l.jsx)(e, { color: "currentColor", className: s()(G.Kk, t) });
        }
        let D = (0, N.Bq)(i, f, a, r),
            C = `${D} icon`;
        return (0, l.jsx)(c.m, {
            text: D,
            delay: 500,
            children: (0, l.jsx)("div", {
                role: "img",
                "aria-label": C,
                className: s()(G.zc, n),
                children: A ? (0, l.jsx)("div", { className: G.QO, children: R }) : R,
            }),
        });
    }),
    z =
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
                          connectDragPreview: b,
                          className: S,
                          iconClassName: y,
                          subtitle: D,
                          subtitleColor: C,
                          channel: { type: M },
                          onMouseEnter: I,
                          onMouseLeave: k,
                          "aria-label": H,
                          children: U,
                          guild: z,
                          channelTypeOverride: V,
                          forceInteractable: K,
                          mentionCount: W,
                          resolvedUnreadSetting: $,
                          isFavoriteSuggestion: q,
                          hasActiveEvent: Z = !1,
                      } = e,
                      J = $ === L.e.ALL_MESSAGES || (null != W && W > 0),
                      Y = (0, o.bG)([j.A], () => Object.values(j.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
                      { role: X, ...Q } = (0, r.rm)(n.id),
                      ee = i.useRef(null),
                      et = i.useRef(null),
                      en = (0, v.A)(n),
                      el = _.BVt.CHANNEL(en, n.id),
                      ei = (0, p.Ay)(n),
                      ea = n.isGuildVocal(),
                      es = null != N || null != x || null != A || K,
                      er = (0, l.jsx)("div", {
                          className: s()({ [G.ow]: q }),
                          ref: et,
                          children: (0, l.jsxs)(R.A, {
                              role: ea && !g ? "button" : "link",
                              href: ea ? void 0 : el,
                              target: "_blank",
                              ref: ee,
                              className: G.nf,
                              onClick: () => N?.(n),
                              ...Q,
                              "aria-label": H,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: G.Y5,
                                      children: [
                                          (0, l.jsx)(B, {
                                              className: y,
                                              channel: n,
                                              guild: z,
                                              hasUsersInVoiceChannel: Y,
                                              hasActiveThreads: E,
                                              locked: m,
                                          }),
                                          (0, l.jsx)(u.A, {
                                              className: s()(G.UU, { [G.NW]: Z }),
                                              "aria-hidden": !0,
                                              children: (0, l.jsx)(F, { channel: n, name: null != a ? a : ei }),
                                          }),
                                          i.Children.count(U) > 0
                                              ? (0, l.jsx)("div", { onClick: P, className: G.Y_, children: U })
                                              : null,
                                      ],
                                  }),
                                  null != D
                                      ? (0, l.jsx)("div", {
                                            className: G.MA,
                                            children: (0, l.jsx)(d.Text, {
                                                color: C ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: G.VA,
                                                children: D,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, l.jsx)(d.vN3, {
                      focusTarget: ee,
                      ringTarget: et,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, l.jsxs)("div", {
                          ref: t,
                          className: s()(
                              S,
                              es ? G.iE : G.IA,
                              (() => {
                                  if (h) return s()(w.rM, O.SELECTED);
                                  if (g) return s()(w.rM, O.CONNECTED);
                                  if (m) return O.LOCKED;
                                  if (c) return O.MUTED;
                                  if (f)
                                      if (J) return O.UNREAD_IMPORTANT;
                                      else return O.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case _.rbe.GUILD_STAGE_VOICE:
                                      case _.rbe.GUILD_VOICE:
                                          return G.typeVoice;
                                      case _.rbe.ANNOUNCEMENT_THREAD:
                                      case _.rbe.PUBLIC_THREAD:
                                      case _.rbe.PRIVATE_THREAD:
                                          return G.ZS;
                                      case _.rbe.GUILD_ANNOUNCEMENT:
                                      case _.rbe.GUILD_TEXT:
                                      case _.rbe.GUILD_STORE:
                                      case _.rbe.GUILD_FORUM:
                                      case _.rbe.GUILD_MEDIA:
                                      default:
                                          return G.typeDefault;
                                  }
                              })(V ?? M),
                          ),
                          onMouseUp: (e) => x?.(e, n),
                          onMouseDown: (e) => A?.(e, n),
                          onContextMenu: (e) => T?.(e, n),
                          onMouseEnter: I,
                          onMouseLeave: k,
                          children: [
                              c || !f ? null : (0, l.jsx)("div", { className: s()(G.gy, J ? G.WS : void 0) }),
                              b?.(er) ?? er,
                          ],
                      }),
                  });
              })
            : null;
function F(e) {
    let { channel: t, name: n } = e,
        a = t.isPrivate() && 1 === (t.rawRecipients ?? []).length,
        s = t.rawRecipients?.[0]?.display_name_styles,
        r = i.useMemo(() => (a ? (0, A.mT)(s) : null), [a, s]);
    return null != r
        ? (0, l.jsx)(T.A, { userName: n, displayNameStyles: r, effectDisplayType: x.G.PLAIN, boldFontOpacity: 0.9 })
        : n;
}
