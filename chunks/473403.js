n.d(t, {
    ZP: () => C,
    _W: () => Z,
    ge: () => I,
    je: () => _,
});
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i);
if (12633 == n.j) var a = n(91192);
var o = n(442837),
    c = n(194983),
    u = n(28664),
    d = n(481060),
    p = n(43267),
    h = n(933557),
    f = n(471445),
    g = n(131016),
    v = n(821795),
    m = n(892567),
    b = n(727429),
    O = n(810123),
    j = n(690221),
    D = n(430824),
    y = n(158776),
    x = n(111583),
    E = n(594174),
    N = n(998502),
    w = n(981631),
    P = n(490897),
    L = n(55940),
    S = n(509612);
let M = {
    SELECTED: S.modeSelected,
    CONNECTED: S.modeConnected,
    UNREAD_IMPORTANT: S.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: S.modeUnreadLessImportant,
    MUTED: S.modeMuted,
    LOCKED: S.modeLocked,
};
function T(e) {
    e.preventDefault(), e.stopPropagation();
}
let A = N.ZP.getEnableHardwareAcceleration() ? d.Xo$ : d.qEK;
function I(e) {
    let { channel: t, size: n = d.EFr.SIZE_20 } = e;
    return (0, r.jsx)(A, {
        src: (0, p.x)(t),
        "aria-hidden": !0,
        size: n,
    });
}
function _(e) {
    let { channel: t, size: n = d.EFr.SIZE_20 } = e,
        l = (0, o.e7)([E.default], () => E.default.getUser(null == t ? void 0 : t.recipients[0])),
        i = (0, o.e7)(
            [x.Z],
            () =>
                !(null == l || null == t || t.isMultiUserDM()) &&
                null != x.Z.getTypingUsers(null == t ? void 0 : t.id)[null == l ? void 0 : l.id],
        ),
        { status: s, isMobile: a } = (0, o.cj)([y.Z], () =>
            null == l || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1,
                  }
                : {
                      status: y.Z.getStatus(l.id),
                      isMobile: y.Z.isMobileOnline(l.id),
                  },
        );
    return (0, r.jsx)(A, {
        size: n,
        src: null == l ? void 0 : l.getAvatarURL(void 0, 40),
        status: s,
        isMobile: a,
        isTyping: i,
        "aria-label": null == l ? void 0 : l.username,
        statusTooltip: !0,
    });
}
let Z = (e) => {
        let { className: t, containerClassName: n, channel: l, locked: i, hasActiveThreads: a, withGuildIcon: c } = e,
            d = (0, o.e7)([D.Z], () => D.Z.getGuild(l.guild_id), [l.guild_id]),
            p = l.type === w.d4z.DM || l.type === w.d4z.GROUP_DM,
            h = null;
        if (c && null != d && !p)
            h = (0, r.jsx)(O.Z, {
                size: O.E.SMALL_32,
                className: S.iconContainerWithGuildIcon,
                iconClassName: S.iconWithGuildIcon,
                channel: l,
                guild: d,
                locked: i,
                hasActiveThreads: a,
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case w.d4z.DM:
                        return function () {
                            return (0, r.jsx)(_, { channel: e });
                        };
                    case w.d4z.GROUP_DM:
                        return function () {
                            return (0, r.jsx)(I, { channel: e });
                        };
                    default:
                        return (0, f.KS)(e, t, n);
                }
            })(l, d, {
                locked: i,
                hasActiveThreads: a,
            });
            if (null == e) return null;
            h = (0, r.jsx)(e, {
                color: "currentColor",
                className: s()(S.icon, t),
            });
        }
        let g = c ? (null == d ? void 0 : d.name) : (0, f.bT)(l, d, i, a),
            v = c && null != d ? "".concat(d.name, " - ").concat(g, " icon") : "".concat(g, " icon");
        return (0, r.jsx)(u.u, {
            text: g,
            delay: 500,
            children: (0, r.jsx)("div", {
                role: "img",
                "aria-label": v,
                className: s()(S.iconContainer, n),
                children: h,
            }),
        });
    },
    C =
        12633 == n.j
            ? l.forwardRef(function (e, t) {
                  var n, i, o;
                  let {
                          channel: u,
                          name: p,
                          muted: f,
                          selected: g,
                          connected: v,
                          unread: m,
                          locked: O,
                          hasActiveThreads: D,
                          onClick: y,
                          onMouseDown: x,
                          onMouseUp: E,
                          onContextMenu: N,
                          connectDragPreview: A,
                          className: I,
                          iconClassName: _,
                          subtitle: C,
                          subtitleColor: R,
                          channel: { type: k },
                          onMouseEnter: z,
                          onMouseLeave: G,
                          "aria-label": W,
                          children: F,
                          guild: H,
                          channelTypeOverride: K,
                          forceInteractable: V,
                          mentionCount: B,
                          resolvedUnreadSetting: q,
                          isFavoriteSuggestion: J,
                          withGuildIcon: Y,
                          hasActiveEvent: Q = !1,
                      } = e,
                      X = q === P.i.ALL_MESSAGES || (null != B && B > 0),
                      $ = (0, a.JA)(u.id),
                      { role: ee } = $,
                      et = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              l = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      l = {},
                                      i = Object.keys(e);
                                  for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                  return l;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < i.length; r++)
                                  (n = i[r]),
                                      !(t.indexOf(n) >= 0) &&
                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                          (l[n] = e[n]);
                          }
                          return l;
                      })($, ["role"]),
                      en = l.useRef(null),
                      er = l.useRef(null),
                      el = (0, b.Z)(u),
                      ei = w.Z5c.CHANNEL(el, u.id),
                      es = (0, h.ZP)(u),
                      ea = u.isGuildVocal(),
                      eo = (0, r.jsx)("div", {
                          className: s()({ [S.favoritesSuggestion]: J }),
                          ref: er,
                          children: (0, r.jsxs)(
                              j.Z,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })(
                                  {
                                      role: ea && !v ? "button" : "link",
                                      href: ea ? void 0 : ei,
                                      target: "_blank",
                                      ref: en,
                                      className: S.link,
                                      onClick: () => (null == y ? void 0 : y(u)),
                                  },
                                  et,
                              )),
                              (o = o =
                                  {
                                      "aria-label": W,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: S.linkTop,
                                              children: [
                                                  (0, r.jsx)(Z, {
                                                      className: _,
                                                      channel: u,
                                                      guild: H,
                                                      hasActiveThreads: D,
                                                      locked: O,
                                                      withGuildIcon: Y,
                                                  }),
                                                  (0, r.jsx)(c.Z, {
                                                      className: s()(S.name, { [S.activeEvent]: Q }),
                                                      "aria-hidden": !0,
                                                      children: (0, r.jsx)(U, {
                                                          channel: u,
                                                          name: null != p ? p : es,
                                                      }),
                                                  }),
                                                  l.Children.count(F) > 0
                                                      ? (0, r.jsx)("div", {
                                                            onClick: T,
                                                            className: S.children,
                                                            children: F,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          null != C
                                              ? (0, r.jsx)("div", {
                                                    className: s()(S.linkBottom, { [S.withGuildIcon]: Y }),
                                                    children: (0, r.jsx)(d.Text, {
                                                        color: null != R ? R : "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: S.subtitle,
                                                        children: C,
                                                    }),
                                                })
                                              : null,
                                      ],
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              i),
                          ),
                      });
                  return (0, r.jsx)(d.tEY, {
                      focusTarget: en,
                      ringTarget: er,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4,
                      },
                      children: (0, r.jsxs)("div", {
                          ref: t,
                          className: s()(
                              I,
                              null != y || null != E || null != x || V ? S.wrapper : S.notInteractive,
                              (() => {
                                  if (g) return s()(L.selectedChannel, M.SELECTED);
                                  if (v) return s()(L.selectedChannel, M.CONNECTED);
                                  if (O) return M.LOCKED;
                                  if (f) return M.MUTED;
                                  if (m)
                                      if (X) return M.UNREAD_IMPORTANT;
                                      else return M.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case w.d4z.GUILD_STAGE_VOICE:
                                      case w.d4z.GUILD_VOICE:
                                          return S.typeVoice;
                                      case w.d4z.ANNOUNCEMENT_THREAD:
                                      case w.d4z.PUBLIC_THREAD:
                                      case w.d4z.PRIVATE_THREAD:
                                          return S.typeThread;
                                      case w.d4z.GUILD_ANNOUNCEMENT:
                                      case w.d4z.GUILD_TEXT:
                                      case w.d4z.GUILD_STORE:
                                      case w.d4z.GUILD_FORUM:
                                      case w.d4z.GUILD_MEDIA:
                                      default:
                                          return S.typeDefault;
                                  }
                              })(null != K ? K : k),
                          ),
                          onMouseUp: (e) => (null == E ? void 0 : E(e, u)),
                          onMouseDown: (e) => (null == x ? void 0 : x(e, u)),
                          onContextMenu: (e) => (null == N ? void 0 : N(e, u)),
                          onMouseEnter: z,
                          onMouseLeave: G,
                          children: [
                              f || !m
                                  ? null
                                  : (0, r.jsx)("div", { className: s()(S.unread, X ? S.unreadImportant : void 0) }),
                              null != (n = null == A ? void 0 : A(eo)) ? n : eo,
                          ],
                      }),
                  });
              })
            : null;
function U(e) {
    var t, n, i;
    let { channel: s, name: a } = e,
        o = s.isPrivate() && 1 === (null != (i = s.rawRecipients) ? i : []).length,
        c = null == (n = s.rawRecipients) || null == (t = n[0]) ? void 0 : t.display_name_styles,
        u = l.useMemo(() => (o ? (0, g.bN)(c) : null), [o, c]);
    return null != u
        ? (0, r.jsx)(m.Z, {
              userName: a,
              displayNameStyles: u,
              effectDisplayType: v.F.PLAIN,
              boldFontOpacity: 0.9,
          })
        : a;
}
