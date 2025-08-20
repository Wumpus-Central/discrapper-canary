l.d(n, {
    ZP: () => R,
    _W: () => w,
    ge: () => P,
    je: () => U,
});
var t = l(951288),
    r = l(647438),
    i = l(120356),
    s = l.n(i);
if (12633 == l.j) var a = l(91192);
var o = l(442837),
    c = l(481060),
    u = l(43267),
    d = l(933557),
    f = l(471445),
    h = l(111028),
    p = l(131016),
    m = l(821795),
    E = l(892567),
    v = l(727429),
    O = l(810123),
    b = l(690221),
    j = l(430824),
    N = l(158776),
    g = l(111583),
    y = l(594174),
    _ = l(998502),
    D = l(981631),
    T = l(490897),
    M = l(55940),
    x = l(509612);
function I(e) {
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
}
function L(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var t = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, t);
                  }
                  return l;
              })(Object(n)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l));
              }),
        e
    );
}
let S = {
    SELECTED: x.modeSelected,
    CONNECTED: x.modeConnected,
    UNREAD_IMPORTANT: x.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: x.modeUnreadLessImportant,
    MUTED: x.modeMuted,
    LOCKED: x.modeLocked,
};
function A(e) {
    e.preventDefault(), e.stopPropagation();
}
let C = _.ZP.getEnableHardwareAcceleration() ? c.Xo$ : c.qEK;
function P(e) {
    let { channel: n, size: l = c.EFr.SIZE_20 } = e;
    return (0, t.jsx)(C, {
        src: (0, u.x)(n),
        "aria-hidden": !0,
        size: l,
    });
}
function U(e) {
    let { channel: n, size: l = c.EFr.SIZE_20 } = e,
        r = (0, o.e7)([y.default], () => y.default.getUser(null == n ? void 0 : n.recipients[0])),
        i = (0, o.e7)(
            [g.Z],
            () =>
                !(null == r || null == n || n.isMultiUserDM()) &&
                null != g.Z.getTypingUsers(null == n ? void 0 : n.id)[null == r ? void 0 : r.id],
        ),
        { status: s, isMobile: a } = (0, o.cj)([N.Z], () =>
            null == r || null == n || n.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1,
                  }
                : {
                      status: N.Z.getStatus(r.id),
                      isMobile: N.Z.isMobileOnline(r.id),
                  },
        );
    return (0, t.jsx)(C, {
        size: l,
        src: null == r ? void 0 : r.getAvatarURL(void 0, 40),
        status: s,
        isMobile: a,
        isTyping: i,
        "aria-label": null == r ? void 0 : r.username,
        statusTooltip: !0,
    });
}
let w = (e) => {
        let { className: n, containerClassName: l, channel: r, locked: i, hasActiveThreads: a, withGuildIcon: u } = e,
            d = (0, o.e7)([j.Z], () => j.Z.getGuild(r.guild_id), [r.guild_id]),
            h = r.type === D.d4z.DM || r.type === D.d4z.GROUP_DM,
            p = null;
        if (u && null != d && !h)
            p = (0, t.jsx)(O.Z, {
                size: O.E.SMALL_32,
                className: x.iconContainerWithGuildIcon,
                iconClassName: x.iconWithGuildIcon,
                channel: r,
                guild: d,
                locked: i,
                hasActiveThreads: a,
            });
        else {
            let e = (function (e, n, l) {
                switch (e.type) {
                    case D.d4z.DM:
                        return function () {
                            return (0, t.jsx)(U, { channel: e });
                        };
                    case D.d4z.GROUP_DM:
                        return function () {
                            return (0, t.jsx)(P, { channel: e });
                        };
                    default:
                        return (0, f.KS)(e, n, l);
                }
            })(r, d, {
                locked: i,
                hasActiveThreads: a,
            });
            if (null == e) return null;
            p = (0, t.jsx)(e, {
                color: "currentColor",
                className: s()(x.icon, n),
            });
        }
        let m = u ? (null == d ? void 0 : d.name) : (0, f.bT)(r, d, i, a),
            E = u && null != d ? "".concat(d.name, " - ").concat(m, " icon") : "".concat(m, " icon");
        return (0, t.jsx)(c.ua7, {
            text: m,
            delay: 500,
            children: (e) =>
                (0, t.jsx)(
                    "div",
                    L(I({}, e), {
                        role: "img",
                        "aria-label": E,
                        className: s()(x.iconContainer, l),
                        children: p,
                    }),
                ),
        });
    },
    R =
        12633 == l.j
            ? r.forwardRef(function (e, n) {
                  var l;
                  let {
                          channel: i,
                          name: o,
                          muted: u,
                          selected: f,
                          connected: p,
                          unread: m,
                          locked: E,
                          hasActiveThreads: O,
                          onClick: j,
                          onMouseDown: N,
                          onMouseUp: g,
                          onContextMenu: y,
                          connectDragPreview: _,
                          className: C,
                          iconClassName: P,
                          subtitle: U,
                          subtitleColor: R,
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
                      Q = X === T.i.ALL_MESSAGES || (null != B && B > 0),
                      $ = (0, a.JA)(i.id),
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
                      er = (0, v.Z)(i),
                      ei = D.Z5c.CHANNEL(er, i.id),
                      es = (0, d.ZP)(i),
                      ea = i.isGuildVocal(),
                      eo = (0, t.jsx)("div", {
                          className: s()({ [x.favoritesSuggestion]: Y }),
                          ref: et,
                          children: (0, t.jsxs)(
                              b.Z,
                              L(
                                  I(
                                      {
                                          role: ea && !p ? "button" : "link",
                                          href: ea ? void 0 : ei,
                                          target: "_blank",
                                          ref: el,
                                          className: x.link,
                                          onClick: () => (null == j ? void 0 : j(i)),
                                      },
                                      en,
                                  ),
                                  {
                                      "aria-label": H,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, t.jsxs)("div", {
                                              className: x.linkTop,
                                              children: [
                                                  (0, t.jsx)(w, {
                                                      className: P,
                                                      channel: i,
                                                      guild: K,
                                                      hasActiveThreads: O,
                                                      locked: E,
                                                      withGuildIcon: q,
                                                  }),
                                                  (0, t.jsx)(h.Z, {
                                                      className: s()(x.name, { [x.activeEvent]: J }),
                                                      "aria-hidden": !0,
                                                      children: (0, t.jsx)(G, {
                                                          channel: i,
                                                          name: null != o ? o : es,
                                                      }),
                                                  }),
                                                  r.Children.count(F) > 0
                                                      ? (0, t.jsx)("div", {
                                                            onClick: A,
                                                            className: x.children,
                                                            children: F,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                          null != U
                                              ? (0, t.jsx)("div", {
                                                    className: s()(x.linkBottom, { [x.withGuildIcon]: q }),
                                                    children: (0, t.jsx)(c.Text, {
                                                        color: null != R ? R : "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: x.subtitle,
                                                        children: U,
                                                    }),
                                                })
                                              : null,
                                      ],
                                  },
                              ),
                          ),
                      });
                  return (0, t.jsx)(c.tEY, {
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
                              null != j || null != g || null != N || W ? x.wrapper : x.notInteractive,
                              (() => {
                                  if (f) return s()(M.selectedChannel, S.SELECTED);
                                  if (p) return s()(M.selectedChannel, S.CONNECTED);
                                  if (E) return S.LOCKED;
                                  if (u) return S.MUTED;
                                  if (m)
                                      if (Q) return S.UNREAD_IMPORTANT;
                                      else return S.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case D.d4z.GUILD_STAGE_VOICE:
                                      case D.d4z.GUILD_VOICE:
                                          return x.typeVoice;
                                      case D.d4z.ANNOUNCEMENT_THREAD:
                                      case D.d4z.PUBLIC_THREAD:
                                      case D.d4z.PRIVATE_THREAD:
                                          return x.typeThread;
                                      case D.d4z.GUILD_ANNOUNCEMENT:
                                      case D.d4z.GUILD_TEXT:
                                      case D.d4z.GUILD_STORE:
                                      case D.d4z.GUILD_FORUM:
                                      case D.d4z.GUILD_MEDIA:
                                      default:
                                          return x.typeDefault;
                                  }
                              })(null != V ? V : Z),
                          ),
                          onMouseUp: (e) => (null == g ? void 0 : g(e, i)),
                          onMouseDown: (e) => (null == N ? void 0 : N(e, i)),
                          onContextMenu: (e) => (null == y ? void 0 : y(e, i)),
                          onMouseEnter: k,
                          onMouseLeave: z,
                          children: [
                              u || !m
                                  ? null
                                  : (0, t.jsx)("div", { className: s()(x.unread, Q ? x.unreadImportant : void 0) }),
                              null != (l = null == _ ? void 0 : _(eo)) ? l : eo,
                          ],
                      }),
                  });
              })
            : null;
function G(e) {
    var n, l, i;
    let { channel: s, name: a } = e,
        o = s.isPrivate() && 1 === (null != (i = s.rawRecipients) ? i : []).length,
        c = null == (l = s.rawRecipients) || null == (n = l[0]) ? void 0 : n.display_name_styles,
        u = r.useMemo(() => (o ? (0, p.bN)(c) : null), [o, c]);
    return null != u
        ? (0, t.jsx)(E.Z, {
              userName: a,
              displayNameStyles: u,
              effectDisplayType: m.F.PLAIN,
              boldFontOpacity: 0.9,
          })
        : a;
}
