l.d(t, { Ay: () => V, IC: () => W, Pk: () => B, gm: () => H });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a);
if (21552 == l.j) var r = l(837381);
var o = l(311907);
if (21552 == l.j) var u = l(3026);
var c = l(990078),
    d = l(97808),
    A = l(778712);
if (21552 == l.j) var h = l(834730);
if (21552 == l.j) var g = l(187322);
var E = l(25639),
    f = l(186369),
    _ = l(148719),
    m = l(47167),
    I = l(970812),
    N = l(713654),
    L = l(945096),
    v = l(922301),
    C = l(750112),
    x = l(584682),
    T = l(598104),
    p = l(95035),
    S = l(71393),
    b = l(290863),
    D = l(741961),
    y = l(287809),
    j = l(977997),
    G = l(837921),
    w = l(66933),
    O = l(652215),
    P = l(790782),
    M = l(907305),
    R = l(645591);
let F = {
    SELECTED: R.J1,
    CONNECTED: R.d4,
    UNREAD_IMPORTANT: R.V2,
    UNREAD_LESS_IMPORTANT: R.modeUnreadLessImportant,
    MUTED: R.F4,
    LOCKED: R.yg,
};
function U(e) {
    e.preventDefault(), e.stopPropagation();
}
let k = G.Ay.getEnableHardwareAcceleration() ? d.Js : d.eu;
function W(e) {
    let { channel: t, size: l = A._3.SIZE_20, className: i } = e;
    return (0, n.jsx)(T.A, { className: i, channel: t, "aria-hidden": !0, size: l });
}
function B(e) {
    let { channel: t, size: l = A._3.SIZE_20, className: i } = e,
        a = (0, o.bG)([y.default], () => y.default.getUser(t?.recipients[0])),
        s = (0, o.bG)(
            [D.A],
            () => !(null == a || null == t || t.isMultiUserDM()) && null != D.A.getTypingUsers(t?.id)[a?.id],
        ),
        {
            status: r,
            isMobile: u,
            isVR: c,
        } = (0, o.cf)([b.A], () =>
            null == a || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: b.A.getStatus(a.id), isMobile: b.A.isMobileOnline(a.id), isVR: b.A.isVROnline(a.id) },
        );
    return (0, n.jsx)(k, {
        className: i,
        size: l,
        src: a?.getAvatarURL(void 0, 40),
        status: r,
        isMobile: u,
        isVR: c,
        isTyping: s,
        "aria-label": a?.username,
        statusTooltip: !0,
    });
}
let H = i.memo(function (e) {
        let {
                className: t,
                containerClassName: l,
                channel: i,
                locked: a,
                hasActiveThreads: r,
                hasUsersInVoiceChannel: u,
            } = e,
            d = (0, o.bG)([S.A], () => S.A.getGuild(i.guild_id), [i.guild_id]),
            { enableWaveformIcon: A } = (0, f.b)(i.guild_id, "ChannelItemIcon"),
            h = (0, o.bG)([E.A], () => E.A.getAnimationStyle(i.id), [i.id]),
            g = i.type === O.rbe.GUILD_VOICE,
            m = null;
        if (A && g && !a && u)
            m = (0, n.jsx)(I.A, {
                color: "currentColor",
                className: s()(R.Kk, t),
                animationStyle: h,
                locked: (0, _.A)(i),
            });
        else {
            let e = (function (e, t, l) {
                switch (e.type) {
                    case O.rbe.DM:
                        return function (t) {
                            let { className: l } = t;
                            return (0, n.jsx)(B, { channel: e, className: l });
                        };
                    case O.rbe.GROUP_DM:
                        return function (t) {
                            let { className: l } = t;
                            return (0, n.jsx)(W, { channel: e, className: l });
                        };
                    default:
                        return (0, N.gU)(e, t, l);
                }
            })(i, d, { locked: a, hasActiveThreads: r });
            if (null == e) return null;
            m = (0, n.jsx)(e, { color: "currentColor", className: s()(R.Kk, t) });
        }
        let L = (0, N.Bq)(i, d, a, r),
            v = `${L} icon`;
        return (0, n.jsx)(c.m, {
            text: L,
            delay: 500,
            children: (0, n.jsx)("div", { role: "img", "aria-label": v, className: s()(R.zc, l), children: m }),
        });
    }),
    V =
        21552 == l.j
            ? i.forwardRef(function (e, t) {
                  let {
                          channel: l,
                          name: a,
                          muted: c,
                          selected: d,
                          connected: A,
                          unread: E,
                          locked: f,
                          hasActiveThreads: _,
                          onClick: I,
                          onMouseDown: N,
                          onMouseUp: L,
                          onContextMenu: v,
                          connectDragPreview: C,
                          className: T,
                          iconClassName: S,
                          subtitle: b,
                          subtitleColor: D,
                          channel: { type: y },
                          onMouseEnter: G,
                          onMouseLeave: k,
                          "aria-label": W,
                          children: B,
                          guild: V,
                          channelTypeOverride: z,
                          forceInteractable: K,
                          mentionCount: $,
                          resolvedUnreadSetting: Y,
                          isFavoriteSuggestion: q,
                          hasActiveEvent: J = !1,
                          transitionExtras: X,
                      } = e,
                      Q = Y === P.e.ALL_MESSAGES || (null != $ && $ > 0),
                      ee = (0, o.bG)([j.A], () => Object.values(j.A.getVoiceStatesForChannel(l.id)).length > 0, [l.id]),
                      { role: et, ...el } = (0, r.rm)(l.id),
                      en = i.useRef(null),
                      ei = i.useRef(null),
                      ea = (0, x.A)(l);
                  null != ea && w.A.getConfig({ guildId: ea, location: "channel_item" });
                  let es = O.BVt.CHANNEL(ea, l.id),
                      er = (0, m.Ay)(l),
                      eo = l.isGuildVocal(),
                      eu = null != I || null != L || null != N || K,
                      ec = (0, n.jsx)("div", {
                          className: s()({ [R.ow]: q }),
                          ref: ei,
                          children: (0, n.jsxs)(p.A, {
                              role: eo && !A ? "button" : "link",
                              href: eo ? void 0 : es,
                              target: "_blank",
                              ref: en,
                              className: R.nf,
                              onClick: () => I?.(l),
                              transitionExtras: X,
                              ...el,
                              "aria-label": W,
                              "aria-current": d ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: R.Y5,
                                      children: [
                                          (0, n.jsx)(H, {
                                              className: S,
                                              channel: l,
                                              guild: V,
                                              hasUsersInVoiceChannel: ee,
                                              hasActiveThreads: _,
                                              locked: f,
                                          }),
                                          (0, n.jsx)(u.A, {
                                              className: s()(R.UU, { [R.NW]: J }),
                                              "aria-hidden": !0,
                                              children: (0, n.jsx)(Z, { channel: l, name: null != a ? a : er }),
                                          }),
                                          i.Children.count(B) > 0
                                              ? (0, n.jsx)("div", {
                                                    onClick: U,
                                                    onKeyPress: U,
                                                    className: R.Y_,
                                                    children: B,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != b
                                      ? (0, n.jsx)("div", {
                                            className: R.MA,
                                            children: (0, n.jsx)(h.E, {
                                                color: D ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: R.VA,
                                                children: b,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, n.jsx)(g.vN, {
                      focusTarget: en,
                      ringTarget: ei,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, n.jsxs)("div", {
                          ref: t,
                          className: s()(
                              T,
                              eu ? R.iE : R.IA,
                              (() => {
                                  if (d) return s()(M.rM, F.SELECTED);
                                  if (A) return s()(M.rM, F.CONNECTED);
                                  if (f) return F.LOCKED;
                                  if (c) return F.MUTED;
                                  if (E)
                                      if (Q) return F.UNREAD_IMPORTANT;
                                      else return F.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case O.rbe.GUILD_STAGE_VOICE:
                                      case O.rbe.GUILD_VOICE:
                                          return R.typeVoice;
                                      case O.rbe.ANNOUNCEMENT_THREAD:
                                      case O.rbe.PUBLIC_THREAD:
                                      case O.rbe.PRIVATE_THREAD:
                                          return R.ZS;
                                      case O.rbe.GUILD_ANNOUNCEMENT:
                                      case O.rbe.GUILD_TEXT:
                                      case O.rbe.GUILD_STORE:
                                      case O.rbe.GUILD_FORUM:
                                      case O.rbe.GUILD_MEDIA:
                                      default:
                                          return R.typeDefault;
                                  }
                              })(z ?? y),
                          ),
                          onMouseUp: (e) => L?.(e, l),
                          onMouseDown: (e) => N?.(e, l),
                          onContextMenu: (e) => v?.(e, l),
                          onMouseEnter: G,
                          onMouseLeave: k,
                          children: [
                              c || !E ? null : (0, n.jsx)("div", { className: s()(R.gy, Q ? R.WS : void 0) }),
                              C?.(ec) ?? ec,
                          ],
                      }),
                  });
              })
            : null;
function Z(e) {
    let { channel: t, name: l } = e,
        a = t.isPrivate() && 1 === (t.rawRecipients ?? []).length,
        s = t.rawRecipients?.[0]?.display_name_styles,
        r = i.useMemo(() => (a ? (0, L.mT)(s) : null), [a, s]);
    return null != r
        ? (0, n.jsx)(C.A, { userName: l, displayNameStyles: r, effectDisplayType: v.G.PLAIN, boldFontOpacity: 0.9 })
        : l;
}
