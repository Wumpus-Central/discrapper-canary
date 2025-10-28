l.d(n, {
    ZP: () => w,
    _W: () => U,
    ge: () => C,
    je: () => P,
});
var t = l(951288),
    r = l(647438),
    i = l(120356),
    s = l.n(i);
if (12633 == l.j) var a = l(91192);
var o = l(442837),
    c = l(194983),
    u = l(28664),
    d = l(481060),
    f = l(43267),
    h = l(933557),
    p = l(471445),
    m = l(131016),
    E = l(821795),
    v = l(892567),
    O = l(727429),
    b = l(810123),
    j = l(690221),
    N = l(430824),
    g = l(158776),
    y = l(111583),
    _ = l(594174),
    D = l(998502),
    T = l(981631),
    M = l(490897),
    x = l(55940),
    I = l(509612);
let L = {
    SELECTED: I.modeSelected,
    CONNECTED: I.modeConnected,
    UNREAD_IMPORTANT: I.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: I.modeUnreadLessImportant,
    MUTED: I.modeMuted,
    LOCKED: I.modeLocked,
};
function S(e) {
    e.preventDefault(), e.stopPropagation();
}
let A = D.ZP.getEnableHardwareAcceleration() ? d.Xo$ : d.qEK;
function C(e) {
    let { channel: n, size: l = d.EFr.SIZE_20 } = e;
    return (0, t.jsx)(A, {
        src: (0, f.x)(n),
        "aria-hidden": !0,
        size: l,
    });
}
function P(e) {
    let { channel: n, size: l = d.EFr.SIZE_20 } = e,
        r = (0, o.e7)([_.default], () => _.default.getUser(null == n ? void 0 : n.recipients[0])),
        i = (0, o.e7)(
            [y.Z],
            () =>
                !(null == r || null == n || n.isMultiUserDM()) &&
                null != y.Z.getTypingUsers(null == n ? void 0 : n.id)[null == r ? void 0 : r.id],
        ),
        { status: s, isMobile: a } = (0, o.cj)([g.Z], () =>
            null == r || null == n || n.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1,
                  }
                : {
                      status: g.Z.getStatus(r.id),
                      isMobile: g.Z.isMobileOnline(r.id),
                  },
        );
    return (0, t.jsx)(A, {
        size: l,
        src: null == r ? void 0 : r.getAvatarURL(void 0, 40),
        status: s,
        isMobile: a,
        isTyping: i,
        "aria-label": null == r ? void 0 : r.username,
        statusTooltip: !0,
    });
}
let U = (e) => {
        let { className: n, containerClassName: l, channel: r, locked: i, hasActiveThreads: a, withGuildIcon: c } = e,
            d = (0, o.e7)([N.Z], () => N.Z.getGuild(r.guild_id), [r.guild_id]),
            f = r.type === T.d4z.DM || r.type === T.d4z.GROUP_DM,
            h = null;
        if (c && null != d && !f)
            h = (0, t.jsx)(b.Z, {
                size: b.E.SMALL_32,
                className: I.iconContainerWithGuildIcon,
                iconClassName: I.iconWithGuildIcon,
                channel: r,
                guild: d,
                locked: i,
                hasActiveThreads: a,
            });
        else {
            let e = (function (e, n, l) {
                switch (e.type) {
                    case T.d4z.DM:
                        return function () {
                            return (0, t.jsx)(P, { channel: e });
                        };
                    case T.d4z.GROUP_DM:
                        return function () {
                            return (0, t.jsx)(C, { channel: e });
                        };
                    default:
                        return (0, p.KS)(e, n, l);
                }
            })(r, d, {
                locked: i,
                hasActiveThreads: a,
            });
            if (null == e) return null;
            h = (0, t.jsx)(e, {
                color: "currentColor",
                className: s()(I.icon, n),
            });
        }
        let m = c ? (null == d ? void 0 : d.name) : (0, p.bT)(r, d, i, a),
            E = c && null != d ? "".concat(d.name, " - ").concat(m, " icon") : "".concat(m, " icon");
        return (0, t.jsx)(u.u, {
            text: m,
            delay: 500,
            children: (0, t.jsx)("div", {
                role: "img",
                "aria-label": E,
                className: s()(I.iconContainer, l),
                children: h,
            }),
        });
    },
    w =
        12633 == l.j
            ? r.forwardRef(function (e, n) {
                  var l, i, o;
                  let {
                          channel: u,
                          name: f,
                          muted: p,
                          selected: m,
                          connected: E,
                          unread: v,
                          locked: b,
                          hasActiveThreads: N,
                          onClick: g,
                          onMouseDown: y,
                          onMouseUp: _,
                          onContextMenu: D,
                          connectDragPreview: A,
                          className: C,
                          iconClassName: P,
                          subtitle: w,
                          subtitleColor: G,
                          channel: { type: Z },
                          onMouseEnter: k,
                          onMouseLeave: z,
                          "aria-label": H,
                          children: F,
                          guild: K,
                          channelTypeOverride: V,
                          forceInteractable: W,
                          mentionCount: B,
                          resolvedUnreadSetting: X,
                          isFavoriteSuggestion: Y,
                          withGuildIcon: q,
                          hasActiveEvent: J = !1,
                      } = e,
                      Q = X === M.i.ALL_MESSAGES || (null != B && B > 0),
                      $ = (0, a.JA)(u.id),
                      { role: ee } = $,
                      en = (function (e, n) {
                          if (null == e) return {};
                          var l,
                              t,
                              r = (function (e, n) {
                                  if (null == e) return {};
                                  var l,
                                      t,
                                      r = {},
                                      i = Object.keys(e);
                                  for (t = 0; t < i.length; t++) (l = i[t]), n.indexOf(l) >= 0 || (r[l] = e[l]);
                                  return r;
                              })(e, n);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              for (t = 0; t < i.length; t++)
                                  (l = i[t]),
                                      !(n.indexOf(l) >= 0) &&
                                          Object.prototype.propertyIsEnumerable.call(e, l) &&
                                          (r[l] = e[l]);
                          }
                          return r;
                      })($, ["role"]),
                      el = r.useRef(null),
                      et = r.useRef(null),
                      er = (0, O.Z)(u),
                      ei = T.Z5c.CHANNEL(er, u.id),
                      es = (0, h.ZP)(u),
                      ea = u.isGuildVocal(),
                      eo = (0, t.jsx)("div", {
                          className: s()({ [I.favoritesSuggestion]: Y }),
                          ref: et,
                          children: (0, t.jsxs)(
                              j.Z,
                              ((i = (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var l = null != arguments[n] ? arguments[n] : {},
                                          t = Object.keys(l);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (t = t.concat(
                                              Object.getOwnPropertySymbols(l).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                              }),
                                          )),
                                          t.forEach(function (n) {
                                              var t;
                                              (t = l[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: t,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[n] = t);
                                          });
                                  }
                                  return e;
                              })(
                                  {
                                      role: ea && !E ? "button" : "link",
                                      href: ea ? void 0 : ei,
                                      target: "_blank",
                                      ref: el,
                                      className: I.link,
                                      onClick: () => (null == g ? void 0 : g(u)),
                                  },
                                  en,
                              )),
                              (o = o =
                                  {
                                      "aria-label": H,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, t.jsxs)("div", {
                                              className: I.linkTop,
                                              children: [
                                                  (0, t.jsx)(U, {
                                                      className: P,
                                                      channel: u,
                                                      guild: K,
                                                      hasActiveThreads: N,
                                                      locked: b,
                                                      withGuildIcon: q,
                                                  }),
                                                  (0, t.jsx)(c.Z, {
                                                      className: s()(I.name, { [I.activeEvent]: J }),
                                                      "aria-hidden": !0,
                                                      children: (0, t.jsx)(R, {
                                                          channel: u,
                                                          name: null != f ? f : es,
                                                      }),
                                                  }),
                                                  r.Children.count(F) > 0
                                                      ? (0, t.jsx)("div", {
                                                            onClick: S,
                                                            className: I.children,
                                                            children: F,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          null != w
                                              ? (0, t.jsx)("div", {
                                                    className: s()(I.linkBottom, { [I.withGuildIcon]: q }),
                                                    children: (0, t.jsx)(d.Text, {
                                                        color: null != G ? G : "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: I.subtitle,
                                                        children: w,
                                                    }),
                                                })
                                              : null,
                                      ],
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, n) {
                                        var l = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var t = Object.getOwnPropertySymbols(e);
                                            l.push.apply(l, t);
                                        }
                                        return l;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              i),
                          ),
                      });
                  return (0, t.jsx)(d.tEY, {
                      focusTarget: el,
                      ringTarget: et,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4,
                      },
                      children: (0, t.jsxs)("div", {
                          ref: n,
                          className: s()(
                              C,
                              null != g || null != _ || null != y || W ? I.wrapper : I.notInteractive,
                              (() => {
                                  if (m) return s()(x.selectedChannel, L.SELECTED);
                                  if (E) return s()(x.selectedChannel, L.CONNECTED);
                                  if (b) return L.LOCKED;
                                  if (p) return L.MUTED;
                                  if (v)
                                      if (Q) return L.UNREAD_IMPORTANT;
                                      else return L.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case T.d4z.GUILD_STAGE_VOICE:
                                      case T.d4z.GUILD_VOICE:
                                          return I.typeVoice;
                                      case T.d4z.ANNOUNCEMENT_THREAD:
                                      case T.d4z.PUBLIC_THREAD:
                                      case T.d4z.PRIVATE_THREAD:
                                          return I.typeThread;
                                      case T.d4z.GUILD_ANNOUNCEMENT:
                                      case T.d4z.GUILD_TEXT:
                                      case T.d4z.GUILD_STORE:
                                      case T.d4z.GUILD_FORUM:
                                      case T.d4z.GUILD_MEDIA:
                                      default:
                                          return I.typeDefault;
                                  }
                              })(null != V ? V : Z),
                          ),
                          onMouseUp: (e) => (null == _ ? void 0 : _(e, u)),
                          onMouseDown: (e) => (null == y ? void 0 : y(e, u)),
                          onContextMenu: (e) => (null == D ? void 0 : D(e, u)),
                          onMouseEnter: k,
                          onMouseLeave: z,
                          children: [
                              p || !v
                                  ? null
                                  : (0, t.jsx)("div", { className: s()(I.unread, Q ? I.unreadImportant : void 0) }),
                              null != (l = null == A ? void 0 : A(eo)) ? l : eo,
                          ],
                      }),
                  });
              })
            : null;
function R(e) {
    var n, l, i;
    let { channel: s, name: a } = e,
        o = s.isPrivate() && 1 === (null != (i = s.rawRecipients) ? i : []).length,
        c = null == (l = s.rawRecipients) || null == (n = l[0]) ? void 0 : n.display_name_styles,
        u = r.useMemo(() => (o ? (0, m.bN)(c) : null), [o, c]);
    return null != u
        ? (0, t.jsx)(v.Z, {
              userName: a,
              displayNameStyles: u,
              effectDisplayType: E.F.PLAIN,
              boldFontOpacity: 0.9,
          })
        : a;
}
