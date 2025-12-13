n.d(t, {
    ZP: () => k,
    _W: () => U,
    ge: () => Z,
    je: () => H,
});
var l = n(54381),
    i = n(473749),
    r = n(120356),
    a = n.n(r);
if (12633 == n.j) var o = n(91192);
var s = n(442837),
    u = n(194983),
    c = n(28664),
    d = n(481060),
    g = n(454135),
    f = n(526139),
    h = n(43267),
    m = n(447003),
    N = n(933557),
    E = n(851910),
    p = n(471445),
    v = n(131016),
    T = n(821795),
    O = n(892567),
    y = n(727429),
    S = n(810123),
    b = n(690221),
    j = n(430824),
    I = n(158776),
    x = n(111583),
    D = n(594174),
    _ = n(979651),
    C = n(998502),
    A = n(981631),
    w = n(490897),
    M = n(642915),
    L = n(323453);
let R = {
    SELECTED: L.modeSelected,
    CONNECTED: L.modeConnected,
    UNREAD_IMPORTANT: L.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: L.modeUnreadLessImportant,
    MUTED: L.modeMuted,
    LOCKED: L.modeLocked,
    HOISTING_NOT_CONNECTED: L.hoistingNotConnected,
};
function P(e) {
    e.preventDefault(), e.stopPropagation();
}
let G = C.ZP.getEnableHardwareAcceleration() ? d.Xo$ : d.qEK;
function Z(e) {
    let { channel: t, size: n = d.EFr.SIZE_20 } = e;
    return (0, l.jsx)(G, {
        src: (0, h.x)(t),
        "aria-hidden": !0,
        size: n,
    });
}
function H(e) {
    let { channel: t, size: n = d.EFr.SIZE_20 } = e,
        i = (0, s.e7)([D.default], () => D.default.getUser(null == t ? void 0 : t.recipients[0])),
        r = (0, s.e7)(
            [x.Z],
            () =>
                !(null == i || null == t || t.isMultiUserDM()) &&
                null != x.Z.getTypingUsers(null == t ? void 0 : t.id)[null == i ? void 0 : i.id],
        ),
        { status: a, isMobile: o } = (0, s.cj)([I.Z], () =>
            null == i || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1,
                  }
                : {
                      status: I.Z.getStatus(i.id),
                      isMobile: I.Z.isMobileOnline(i.id),
                  },
        );
    return (0, l.jsx)(G, {
        size: n,
        src: null == i ? void 0 : i.getAvatarURL(void 0, 40),
        status: a,
        isMobile: o,
        isTyping: r,
        "aria-label": null == i ? void 0 : i.username,
        statusTooltip: !0,
    });
}
let U = i.memo(function (e) {
        let {
                className: t,
                containerClassName: n,
                channel: i,
                locked: r,
                hasActiveThreads: o,
                hasUsersInVoiceChannel: u,
                withGuildIcon: d,
            } = e,
            h = (0, s.e7)([j.Z], () => j.Z.getGuild(i.guild_id), [i.guild_id]),
            N = i.type === A.d4z.DM || i.type === A.d4z.GROUP_DM,
            { enableWaveformIcon: v } = (0, f.M)(i.guild_id, "ChannelItemIcon"),
            T = (0, s.e7)([g.Z], () => g.Z.getAnimationStyle(i.id), [i.id]),
            O = i.type === A.d4z.GUILD_VOICE,
            y = v && O && !r && u,
            b = null;
        if (d && null != h && !N)
            b = (0, l.jsx)(S.Z, {
                size: S.E.SMALL_32,
                className: L.iconContainerWithGuildIcon,
                iconClassName: L.iconWithGuildIcon,
                channel: i,
                guild: h,
                locked: r,
                hasActiveThreads: o,
            });
        else if (y)
            b = (0, l.jsx)(E.Z, {
                color: "currentColor",
                className: a()(L.icon, t),
                animationStyle: T,
                locked: (0, m.Z)(i),
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case A.d4z.DM:
                        return function () {
                            return (0, l.jsx)(H, { channel: e });
                        };
                    case A.d4z.GROUP_DM:
                        return function () {
                            return (0, l.jsx)(Z, { channel: e });
                        };
                    default:
                        return (0, p.KS)(e, t, n);
                }
            })(i, h, {
                locked: r,
                hasActiveThreads: o,
            });
            if (null == e) return null;
            b = (0, l.jsx)(e, {
                color: "currentColor",
                className: a()(L.icon, t),
            });
        }
        let I = d ? (null == h ? void 0 : h.name) : (0, p.bT)(i, h, r, o),
            x = d && null != h ? "".concat(h.name, " - ").concat(I, " icon") : "".concat(I, " icon");
        return (0, l.jsx)(c.u, {
            text: I,
            delay: 500,
            children: (0, l.jsx)("div", {
                role: "img",
                "aria-label": x,
                className: a()(L.iconContainer, n),
                children: b,
            }),
        });
    }),
    k =
        12633 == n.j
            ? i.forwardRef(function (e, t) {
                  var n, r, c;
                  let {
                          channel: g,
                          name: h,
                          muted: m,
                          selected: E,
                          connected: p,
                          unread: v,
                          locked: T,
                          hasActiveThreads: O,
                          onClick: S,
                          onMouseDown: j,
                          onMouseUp: I,
                          onContextMenu: x,
                          connectDragPreview: D,
                          className: C,
                          iconClassName: G,
                          subtitle: Z,
                          subtitleColor: H,
                          channel: { type: k },
                          onMouseEnter: z,
                          onMouseLeave: V,
                          "aria-label": W,
                          children: F,
                          guild: q,
                          channelTypeOverride: K,
                          forceInteractable: Y,
                          mentionCount: X,
                          resolvedUnreadSetting: J,
                          isFavoriteSuggestion: Q,
                          withGuildIcon: $,
                          hasActiveEvent: ee = !1,
                      } = e,
                      et = J === w.i.ALL_MESSAGES || (null != X && X > 0),
                      { enableWaveformIcon: en, enableHighlight: el } = (0, f.M)(g.guild_id, "ChannelItem"),
                      ei = en || el,
                      er = (0, s.e7)([_.Z], () => Object.values(_.Z.getVoiceStatesForChannel(g.id)).length > 0, [g.id]),
                      ea = ei && g.isGuildVocal() && er,
                      eo = el && g.isGuildVocal() && er,
                      es = (0, o.JA)(g.id),
                      { role: eu } = es,
                      ec = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              l,
                              i = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      l,
                                      i = {},
                                      r = Object.keys(e);
                                  for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                  return i;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              for (l = 0; l < r.length; l++)
                                  (n = r[l]),
                                      !(t.indexOf(n) >= 0) &&
                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                          (i[n] = e[n]);
                          }
                          return i;
                      })(es, ["role"]),
                      ed = i.useRef(null),
                      eg = i.useRef(null),
                      ef = (0, y.Z)(g),
                      eh = A.Z5c.CHANNEL(ef, g.id),
                      em = (0, N.ZP)(g),
                      eN = g.isGuildVocal(),
                      eE = (0, l.jsx)("div", {
                          className: a()({ [L.favoritesSuggestion]: Q }),
                          ref: eg,
                          children: (0, l.jsxs)(
                              b.Z,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })(
                                  {
                                      role: eN && !p ? "button" : "link",
                                      href: eN ? void 0 : eh,
                                      target: "_blank",
                                      ref: ed,
                                      className: L.link,
                                      onClick: () => (null == S ? void 0 : S(g)),
                                  },
                                  ec,
                              )),
                              (c = c =
                                  {
                                      "aria-label": W,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: L.linkTop,
                                              children: [
                                                  (0, l.jsx)(U, {
                                                      className: G,
                                                      channel: g,
                                                      guild: q,
                                                      hasUsersInVoiceChannel: er,
                                                      hasActiveThreads: O,
                                                      locked: T,
                                                      withGuildIcon: $,
                                                  }),
                                                  (0, l.jsx)(u.Z, {
                                                      className: a()(L.name, { [L.activeEvent]: ee }),
                                                      "aria-hidden": !0,
                                                      children: (0, l.jsx)(B, {
                                                          channel: g,
                                                          name: null != h ? h : em,
                                                      }),
                                                  }),
                                                  i.Children.count(F) > 0
                                                      ? (0, l.jsx)("div", {
                                                            onClick: P,
                                                            className: L.children,
                                                            children: F,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          null != Z
                                              ? (0, l.jsx)("div", {
                                                    className: a()(L.linkBottom, { [L.withGuildIcon]: $ }),
                                                    children: (0, l.jsx)(d.Text, {
                                                        color: null != H ? H : "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: L.subtitle,
                                                        children: Z,
                                                    }),
                                                })
                                              : null,
                                      ],
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(c)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e));
                                    }),
                              r),
                          ),
                      });
                  return (0, l.jsx)(d.tEY, {
                      focusTarget: ed,
                      ringTarget: eg,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4,
                      },
                      children: (0, l.jsxs)("div", {
                          ref: t,
                          className: a()(
                              C,
                              null != S || null != I || null != j || Y ? L.wrapper : L.notInteractive,
                              (() => {
                                  if (E) return a()(M.selectedChannel, R.SELECTED);
                                  if (p) return a()(M.selectedChannel, R.CONNECTED);
                                  if (T) return R.LOCKED;
                                  if (m) return R.MUTED;
                                  if (ei && !p && ea) return R.HOISTING_NOT_CONNECTED;
                                  if (v)
                                      if (et) return R.UNREAD_IMPORTANT;
                                      else return R.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case A.d4z.GUILD_STAGE_VOICE:
                                      case A.d4z.GUILD_VOICE:
                                          return L.typeVoice;
                                      case A.d4z.ANNOUNCEMENT_THREAD:
                                      case A.d4z.PUBLIC_THREAD:
                                      case A.d4z.PRIVATE_THREAD:
                                          return L.typeThread;
                                      case A.d4z.GUILD_ANNOUNCEMENT:
                                      case A.d4z.GUILD_TEXT:
                                      case A.d4z.GUILD_STORE:
                                      case A.d4z.GUILD_FORUM:
                                      case A.d4z.GUILD_MEDIA:
                                      default:
                                          return L.typeDefault;
                                  }
                              })(null != K ? K : k),
                          ),
                          onMouseUp: (e) => (null == I ? void 0 : I(e, g)),
                          onMouseDown: (e) => (null == j ? void 0 : j(e, g)),
                          onContextMenu: (e) => (null == x ? void 0 : x(e, g)),
                          onMouseEnter: z,
                          onMouseLeave: V,
                          children: [
                              !eo &&
                                  v &&
                                  !m &&
                                  (0, l.jsx)("div", { className: a()(L.unread, et ? L.unreadImportant : void 0) }),
                              null != (n = null == D ? void 0 : D(eE)) ? n : eE,
                          ],
                      }),
                  });
              })
            : null;
function B(e) {
    var t, n, r;
    let { channel: a, name: o } = e,
        s = a.isPrivate() && 1 === (null != (r = a.rawRecipients) ? r : []).length,
        u = null == (n = a.rawRecipients) || null == (t = n[0]) ? void 0 : t.display_name_styles,
        c = i.useMemo(() => (s ? (0, v.bN)(u) : null), [s, u]);
    return null != c
        ? (0, l.jsx)(O.Z, {
              userName: o,
              displayNameStyles: c,
              effectDisplayType: T.F.PLAIN,
              boldFontOpacity: 0.9,
          })
        : o;
}
