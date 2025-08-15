t.d(e, {
    ZP: () => x,
    _W: () => L,
    ge: () => T,
    je: () => y,
});
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l);
if (12633 == t.j) var a = t(91192);
var s = t(442837),
    o = t(481060),
    g = t(43267),
    c = t(933557),
    f = t(471445),
    v = t(111028),
    u = t(131016),
    h = t(7284),
    d = t(727429),
    E = t(810123),
    C = t(690221),
    B = t(430824),
    w = t(158776),
    D = t(111583),
    M = t(594174),
    p = t(998502),
    I = t(981631),
    H = t(490897),
    b = t(55940),
    O = t(509612);
function Q(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
function P(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
let j = {
    SELECTED: O.modeSelected,
    CONNECTED: O.modeConnected,
    UNREAD_IMPORTANT: O.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: O.modeUnreadLessImportant,
    MUTED: O.modeMuted,
    LOCKED: O.modeLocked,
};
function V(A) {
    A.preventDefault(), A.stopPropagation();
}
let m = p.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function T(A) {
    let { channel: e, size: t = o.EFr.SIZE_20 } = A;
    return (0, n.jsx)(m, {
        src: (0, g.x)(e),
        "aria-hidden": !0,
        size: t,
    });
}
function y(A) {
    let { channel: e, size: t = o.EFr.SIZE_20 } = A,
        r = (0, s.e7)([M.default], () => M.default.getUser(null == e ? void 0 : e.recipients[0])),
        l = (0, s.e7)(
            [D.Z],
            () =>
                !(null == r || null == e || e.isMultiUserDM()) &&
                null != D.Z.getTypingUsers(null == e ? void 0 : e.id)[null == r ? void 0 : r.id],
        ),
        { status: i, isMobile: a } = (0, s.cj)([w.Z], () =>
            null == r || null == e || e.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1,
                  }
                : {
                      status: w.Z.getStatus(r.id),
                      isMobile: w.Z.isMobileOnline(r.id),
                  },
        );
    return (0, n.jsx)(m, {
        size: t,
        src: null == r ? void 0 : r.getAvatarURL(void 0, 40),
        status: i,
        isMobile: a,
        isTyping: l,
        "aria-label": null == r ? void 0 : r.username,
        statusTooltip: !0,
    });
}
let L = (A) => {
        let { className: e, containerClassName: t, channel: r, locked: l, hasActiveThreads: a, withGuildIcon: g } = A,
            c = (0, s.e7)([B.Z], () => B.Z.getGuild(r.guild_id), [r.guild_id]),
            v = r.type === I.d4z.DM || r.type === I.d4z.GROUP_DM,
            u = null;
        if (g && null != c && !v)
            u = (0, n.jsx)(E.Z, {
                size: E.E.SMALL_32,
                className: O.iconContainerWithGuildIcon,
                iconClassName: O.iconWithGuildIcon,
                channel: r,
                guild: c,
                locked: l,
                hasActiveThreads: a,
            });
        else {
            let A = (function (A, e, t) {
                switch (A.type) {
                    case I.d4z.DM:
                        return function () {
                            return (0, n.jsx)(y, { channel: A });
                        };
                    case I.d4z.GROUP_DM:
                        return function () {
                            return (0, n.jsx)(T, { channel: A });
                        };
                    default:
                        return (0, f.KS)(A, e, t);
                }
            })(r, c, {
                locked: l,
                hasActiveThreads: a,
            });
            if (null == A) return null;
            u = (0, n.jsx)(A, {
                color: "currentColor",
                className: i()(O.icon, e),
            });
        }
        let h = g ? (null == c ? void 0 : c.name) : (0, f.bT)(r, c, l, a),
            d = g && null != c ? "".concat(c.name, " - ").concat(h, " icon") : "".concat(h, " icon");
        return (0, n.jsx)(o.ua7, {
            text: h,
            delay: 500,
            children: (A) =>
                (0, n.jsx)(
                    "div",
                    P(Q({}, A), {
                        role: "img",
                        "aria-label": d,
                        className: i()(O.iconContainer, t),
                        children: u,
                    }),
                ),
        });
    },
    x =
        12633 == t.j
            ? r.forwardRef(function (A, e) {
                  var t, l, s;
                  let {
                          channel: g,
                          name: f,
                          muted: E,
                          selected: B,
                          connected: w,
                          unread: D,
                          locked: M,
                          hasActiveThreads: p,
                          onClick: m,
                          onMouseDown: T,
                          onMouseUp: y,
                          onContextMenu: x,
                          connectDragPreview: N,
                          className: Z,
                          iconClassName: S,
                          subtitle: R,
                          subtitleColor: G,
                          channel: { type: U },
                          onMouseEnter: F,
                          onMouseLeave: k,
                          "aria-label": X,
                          children: z,
                          guild: K,
                          channelTypeOverride: Y,
                          forceInteractable: W,
                          mentionCount: J,
                          resolvedUnreadSetting: q,
                          isFavoriteSuggestion: _,
                          withGuildIcon: $,
                          hasActiveEvent: AA = !1,
                      } = A,
                      Ae = q === H.i.ALL_MESSAGES || (null != J && J > 0),
                      At = (0, a.JA)(g.id),
                      { role: An } = At,
                      Ar = (function (A, e) {
                          if (null == A) return {};
                          var t,
                              n,
                              r = (function (A, e) {
                                  if (null == A) return {};
                                  var t,
                                      n,
                                      r = {},
                                      l = Object.keys(A);
                                  for (n = 0; n < l.length; n++) (t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]);
                                  return r;
                              })(A, e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(A);
                              for (n = 0; n < l.length; n++)
                                  (t = l[n]),
                                      !(e.indexOf(t) >= 0) &&
                                          Object.prototype.propertyIsEnumerable.call(A, t) &&
                                          (r[t] = A[t]);
                          }
                          return r;
                      })(At, ["role"]),
                      Al = r.useRef(null),
                      Ai = r.useRef(null),
                      Aa = (0, d.Z)(g),
                      As = I.Z5c.CHANNEL(Aa, g.id),
                      Ao = (0, c.ZP)(g),
                      Ag = null;
                  g.isPrivate() &&
                      1 === (null != (t = g.rawRecipients) ? t : []).length &&
                      (Ag = (0, u.bN)(null == (l = g.rawRecipients[0]) ? void 0 : l.display_name_styles));
                  let Ac = (0, h.j)({ displayNameStyles: Ag }),
                      Af = g.isGuildVocal(),
                      Av = (0, n.jsx)("div", {
                          className: i()({ [O.favoritesSuggestion]: _ }),
                          ref: Ai,
                          children: (0, n.jsxs)(
                              C.Z,
                              P(
                                  Q(
                                      {
                                          role: Af && !w ? "button" : "link",
                                          href: Af ? void 0 : As,
                                          target: "_blank",
                                          ref: Al,
                                          className: O.link,
                                          onClick: () => (null == m ? void 0 : m(g)),
                                      },
                                      Ar,
                                  ),
                                  {
                                      "aria-label": X,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, n.jsxs)("div", {
                                              className: O.linkTop,
                                              children: [
                                                  (0, n.jsx)(L, {
                                                      className: S,
                                                      channel: g,
                                                      guild: K,
                                                      hasActiveThreads: p,
                                                      locked: M,
                                                      withGuildIcon: $,
                                                  }),
                                                  (0, n.jsx)(v.Z, {
                                                      className: i()(O.name, Ac, { [O.activeEvent]: AA }),
                                                      "aria-hidden": !0,
                                                      children: null == f ? Ao : f,
                                                  }),
                                                  r.Children.count(z) > 0
                                                      ? (0, n.jsx)("div", {
                                                            onClick: V,
                                                            className: O.children,
                                                            children: z,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          null != R
                                              ? (0, n.jsx)("div", {
                                                    className: i()(O.linkBottom, { [O.withGuildIcon]: $ }),
                                                    children: (0, n.jsx)(o.Text, {
                                                        color: null != G ? G : "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: O.subtitle,
                                                        children: R,
                                                    }),
                                                })
                                              : null,
                                      ],
                                  },
                              ),
                          ),
                      });
                  return (0, n.jsx)(o.tEY, {
                      focusTarget: Al,
                      ringTarget: Ai,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4,
                      },
                      children: (0, n.jsxs)("div", {
                          ref: e,
                          className: i()(
                              Z,
                              null != m || null != y || null != T || W ? O.wrapper : O.notInteractive,
                              (() => {
                                  if (B) return i()(b.selectedChannel, j.SELECTED);
                                  if (w) return i()(b.selectedChannel, j.CONNECTED);
                                  if (M) return j.LOCKED;
                                  if (E) return j.MUTED;
                                  if (D)
                                      if (Ae) return j.UNREAD_IMPORTANT;
                                      else return j.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (A) {
                                  switch (A) {
                                      case I.d4z.GUILD_STAGE_VOICE:
                                      case I.d4z.GUILD_VOICE:
                                          return O.typeVoice;
                                      case I.d4z.ANNOUNCEMENT_THREAD:
                                      case I.d4z.PUBLIC_THREAD:
                                      case I.d4z.PRIVATE_THREAD:
                                          return O.typeThread;
                                      case I.d4z.GUILD_ANNOUNCEMENT:
                                      case I.d4z.GUILD_TEXT:
                                      case I.d4z.GUILD_STORE:
                                      case I.d4z.GUILD_FORUM:
                                      case I.d4z.GUILD_MEDIA:
                                      default:
                                          return O.typeDefault;
                                  }
                              })(null != Y ? Y : U),
                          ),
                          onMouseUp: (A) => (null == y ? void 0 : y(A, g)),
                          onMouseDown: (A) => (null == T ? void 0 : T(A, g)),
                          onContextMenu: (A) => (null == x ? void 0 : x(A, g)),
                          onMouseEnter: F,
                          onMouseLeave: k,
                          children: [
                              E || !D
                                  ? null
                                  : (0, n.jsx)("div", { className: i()(O.unread, Ae ? O.unreadImportant : void 0) }),
                              null != (s = null == N ? void 0 : N(Av)) ? s : Av,
                          ],
                      }),
                  });
              })
            : null;
