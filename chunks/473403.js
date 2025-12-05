n.d(t, {
    ZP: () => k,
    _W: () => U,
    ge: () => G,
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
    v = n(471445),
    p = n(131016),
    T = n(821795),
    O = n(892567),
    y = n(727429),
    b = n(810123),
    S = n(690221),
    I = n(430824),
    j = n(158776),
    x = n(111583),
    D = n(594174),
    _ = n(979651),
    C = n(998502),
    A = n(981631),
    w = n(490897),
    L = n(55940),
    M = n(509612);
let R = {
    SELECTED: M.modeSelected,
    CONNECTED: M.modeConnected,
    UNREAD_IMPORTANT: M.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: M.modeUnreadLessImportant,
    MUTED: M.modeMuted,
    LOCKED: M.modeLocked,
    HOISTING_NOT_CONNECTED: M.hoistingNotConnected,
};
function P(e) {
    e.preventDefault(), e.stopPropagation();
}
let Z = C.ZP.getEnableHardwareAcceleration() ? d.Xo$ : d.qEK;
function G(e) {
    let { channel: t, size: n = d.EFr.SIZE_20 } = e;
    return (0, l.jsx)(Z, {
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
        { status: a, isMobile: o } = (0, s.cj)([j.Z], () =>
            null == i || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1,
                  }
                : {
                      status: j.Z.getStatus(i.id),
                      isMobile: j.Z.isMobileOnline(i.id),
                  },
        );
    return (0, l.jsx)(Z, {
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
            h = (0, s.e7)([I.Z], () => I.Z.getGuild(i.guild_id), [i.guild_id]),
            N = i.type === A.d4z.DM || i.type === A.d4z.GROUP_DM,
            { enableWaveformIcon: p } = f.Z.useConfig({
                guildId: i.guild_id,
                location: "ChannelItemIcon",
            }),
            T = (0, s.e7)([g.Z], () => g.Z.getAnimationStyle(i.id), [i.id]),
            O = i.type === A.d4z.GUILD_VOICE,
            y = p && O && !r && u,
            S = null;
        if (d && null != h && !N)
            S = (0, l.jsx)(b.Z, {
                size: b.E.SMALL_32,
                className: M.iconContainerWithGuildIcon,
                iconClassName: M.iconWithGuildIcon,
                channel: i,
                guild: h,
                locked: r,
                hasActiveThreads: o,
            });
        else if (y)
            S = (0, l.jsx)(E.Z, {
                color: "currentColor",
                className: a()(M.icon, t),
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
                            return (0, l.jsx)(G, { channel: e });
                        };
                    default:
                        return (0, v.KS)(e, t, n);
                }
            })(i, h, {
                locked: r,
                hasActiveThreads: o,
            });
            if (null == e) return null;
            S = (0, l.jsx)(e, {
                color: "currentColor",
                className: a()(M.icon, t),
            });
        }
        let j = d ? (null == h ? void 0 : h.name) : (0, v.bT)(i, h, r, o),
            x = d && null != h ? "".concat(h.name, " - ").concat(j, " icon") : "".concat(j, " icon");
        return (0, l.jsx)(c.u, {
            text: j,
            delay: 500,
            children: (0, l.jsx)("div", {
                role: "img",
                "aria-label": x,
                className: a()(M.iconContainer, n),
                children: S,
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
                          connected: v,
                          unread: p,
                          locked: T,
                          hasActiveThreads: O,
                          onClick: b,
                          onMouseDown: I,
                          onMouseUp: j,
                          onContextMenu: x,
                          connectDragPreview: D,
                          className: C,
                          iconClassName: Z,
                          subtitle: G,
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
                      { enableWaveformIcon: en, enableHighlight: el } = f.Z.useConfig({
                          guildId: g.guild_id,
                          location: "ChannelItem",
                      }),
                      ei = en || el,
                      er = (0, s.e7)([_.Z], () => Object.values(_.Z.getVoiceStatesForChannel(g.id)).length > 0, [g.id]),
                      ea = ei && g.isGuildVocal() && er,
                      eo = (0, o.JA)(g.id),
                      { role: es } = eo,
                      eu = (function (e, t) {
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
                      })(eo, ["role"]),
                      ec = i.useRef(null),
                      ed = i.useRef(null),
                      eg = (0, y.Z)(g),
                      ef = A.Z5c.CHANNEL(eg, g.id),
                      eh = (0, N.ZP)(g),
                      em = g.isGuildVocal(),
                      eN = (0, l.jsx)("div", {
                          className: a()({ [M.favoritesSuggestion]: Q }),
                          ref: ed,
                          children: (0, l.jsxs)(
                              S.Z,
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
                                      role: em && !v ? "button" : "link",
                                      href: em ? void 0 : ef,
                                      target: "_blank",
                                      ref: ec,
                                      className: M.link,
                                      onClick: () => (null == b ? void 0 : b(g)),
                                  },
                                  eu,
                              )),
                              (c = c =
                                  {
                                      "aria-label": W,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: M.linkTop,
                                              children: [
                                                  (0, l.jsx)(U, {
                                                      className: Z,
                                                      channel: g,
                                                      guild: q,
                                                      hasUsersInVoiceChannel: er,
                                                      hasActiveThreads: O,
                                                      locked: T,
                                                      withGuildIcon: $,
                                                  }),
                                                  (0, l.jsx)(u.Z, {
                                                      className: a()(M.name, { [M.activeEvent]: ee }),
                                                      "aria-hidden": !0,
                                                      children: (0, l.jsx)(B, {
                                                          channel: g,
                                                          name: null != h ? h : eh,
                                                      }),
                                                  }),
                                                  i.Children.count(F) > 0
                                                      ? (0, l.jsx)("div", {
                                                            onClick: P,
                                                            className: M.children,
                                                            children: F,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          null != G
                                              ? (0, l.jsx)("div", {
                                                    className: a()(M.linkBottom, { [M.withGuildIcon]: $ }),
                                                    children: (0, l.jsx)(d.Text, {
                                                        color: null != H ? H : "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: M.subtitle,
                                                        children: G,
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
                      focusTarget: ec,
                      ringTarget: ed,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4,
                      },
                      children: (0, l.jsxs)("div", {
                          ref: t,
                          className: a()(
                              C,
                              null != b || null != j || null != I || Y ? M.wrapper : M.notInteractive,
                              (() => {
                                  if (E) return a()(L.selectedChannel, R.SELECTED);
                                  if (v) return a()(L.selectedChannel, R.CONNECTED);
                                  if (T) return R.LOCKED;
                                  if (m) return R.MUTED;
                                  if (ei && !v && ea) return R.HOISTING_NOT_CONNECTED;
                                  if (p)
                                      if (et) return R.UNREAD_IMPORTANT;
                                      else return R.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case A.d4z.GUILD_STAGE_VOICE:
                                      case A.d4z.GUILD_VOICE:
                                          return M.typeVoice;
                                      case A.d4z.ANNOUNCEMENT_THREAD:
                                      case A.d4z.PUBLIC_THREAD:
                                      case A.d4z.PRIVATE_THREAD:
                                          return M.typeThread;
                                      case A.d4z.GUILD_ANNOUNCEMENT:
                                      case A.d4z.GUILD_TEXT:
                                      case A.d4z.GUILD_STORE:
                                      case A.d4z.GUILD_FORUM:
                                      case A.d4z.GUILD_MEDIA:
                                      default:
                                          return M.typeDefault;
                                  }
                              })(null != K ? K : k),
                          ),
                          onMouseUp: (e) => (null == j ? void 0 : j(e, g)),
                          onMouseDown: (e) => (null == I ? void 0 : I(e, g)),
                          onContextMenu: (e) => (null == x ? void 0 : x(e, g)),
                          onMouseEnter: z,
                          onMouseLeave: V,
                          children: [
                              !ea &&
                                  p &&
                                  !m &&
                                  (0, l.jsx)("div", { className: a()(M.unread, et ? M.unreadImportant : void 0) }),
                              null != (n = null == D ? void 0 : D(eN)) ? n : eN,
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
        c = i.useMemo(() => (s ? (0, p.bN)(u) : null), [s, u]);
    return null != c
        ? (0, l.jsx)(O.Z, {
              userName: o,
              displayNameStyles: c,
              effectDisplayType: T.F.PLAIN,
              boldFontOpacity: 0.9,
          })
        : o;
}
