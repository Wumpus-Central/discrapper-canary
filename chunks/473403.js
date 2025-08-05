e.d(t, {
    ZP: () => X,
    _W: () => L,
    ge: () => y,
    je: () => x
});
var r = e(255367),
    g = e(73800),
    v = e(120356),
    n = e.n(v);
if (12633 == e.j) var f = e(91192);
var B = e(442837),
    l = e(481060),
    h = e(43267),
    i = e(933557),
    o = e(471445),
    C = e(111028),
    a = e(131016),
    w = e(7284),
    s = e(727429),
    Q = e(810123),
    H = e(690221),
    c = e(430824),
    D = e(158776),
    M = e(111583),
    d = e(594174),
    p = e(998502),
    b = e(981631),
    V = e(490897),
    E = e(915887),
    P = e(768107);
function u(A) {
    for (var t = 1; t < arguments.length; t++) {
        var e = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(e);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(e).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(e, A).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = e[t]),
                    t in A
                        ? Object.defineProperty(A, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[t] = r));
            }));
    }
    return A;
}
function I(A, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t))
            : (function (A, t) {
                  var e = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(A);
                      e.push.apply(e, r);
                  }
                  return e;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        A
    );
}
let j = {
    SELECTED: P.modeSelected,
    CONNECTED: P.modeConnected,
    UNREAD_IMPORTANT: P.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: P.modeUnreadLessImportant,
    MUTED: P.modeMuted,
    LOCKED: P.modeLocked
};
function Z(A) {
    (A.preventDefault(), A.stopPropagation());
}
let O = p.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function y(A) {
    let { channel: t, size: e = l.EFr.SIZE_20 } = A;
    return (0, r.jsx)(O, {
        src: (0, h.x)(t),
        'aria-hidden': !0,
        size: e
    });
}
function x(A) {
    let { channel: t, size: e = l.EFr.SIZE_20 } = A,
        g = (0, B.e7)([d.default], () => d.default.getUser(null == t ? void 0 : t.recipients[0])),
        v = (0, B.e7)([M.Z], () => !(null == g || null == t || t.isMultiUserDM()) && null != M.Z.getTypingUsers(null == t ? void 0 : t.id)[null == g ? void 0 : g.id]),
        { status: n, isMobile: f } = (0, B.cj)([D.Z], () =>
            null == g || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: D.Z.getStatus(g.id),
                      isMobile: D.Z.isMobileOnline(g.id)
                  }
        );
    return (0, r.jsx)(O, {
        size: e,
        src: null == g ? void 0 : g.getAvatarURL(void 0, 40),
        status: n,
        isMobile: f,
        isTyping: v,
        'aria-label': null == g ? void 0 : g.username,
        statusTooltip: !0
    });
}
let L = (A) => {
        let { className: t, containerClassName: e, channel: g, locked: v, hasActiveThreads: f, withGuildIcon: h } = A,
            i = (0, B.e7)([c.Z], () => c.Z.getGuild(g.guild_id), [g.guild_id]),
            C = g.type === b.d4z.DM || g.type === b.d4z.GROUP_DM,
            a = null;
        if (h && null != i && !C)
            a = (0, r.jsx)(Q.Z, {
                size: Q.E.SMALL_32,
                className: P.iconContainerWithGuildIcon,
                iconClassName: P.iconWithGuildIcon,
                channel: g,
                guild: i,
                locked: v,
                hasActiveThreads: f
            });
        else {
            let A = (function (A, t, e) {
                switch (A.type) {
                    case b.d4z.DM:
                        return function () {
                            return (0, r.jsx)(x, { channel: A });
                        };
                    case b.d4z.GROUP_DM:
                        return function () {
                            return (0, r.jsx)(y, { channel: A });
                        };
                    default:
                        return (0, o.KS)(A, t, e);
                }
            })(g, i, {
                locked: v,
                hasActiveThreads: f
            });
            if (null == A) return null;
            a = (0, r.jsx)(A, {
                color: 'currentColor',
                className: n()(P.icon, t)
            });
        }
        let w = h ? (null == i ? void 0 : i.name) : (0, o.bT)(g, i, v, f),
            s = h && null != i ? ''.concat(i.name, ' - ').concat(w, ' icon') : ''.concat(w, ' icon');
        return (0, r.jsx)(l.ua7, {
            text: w,
            delay: 500,
            children: (A) =>
                (0, r.jsx)(
                    'div',
                    I(u({}, A), {
                        role: 'img',
                        'aria-label': s,
                        className: n()(P.iconContainer, e),
                        children: a
                    })
                )
        });
    },
    X =
        12633 == e.j
            ? g.forwardRef(function (A, t) {
                  var e, v, B;
                  let {
                          channel: h,
                          name: o,
                          muted: Q,
                          selected: c,
                          connected: D,
                          unread: M,
                          locked: d,
                          hasActiveThreads: p,
                          onClick: O,
                          onMouseDown: y,
                          onMouseUp: x,
                          onContextMenu: X,
                          connectDragPreview: m,
                          className: G,
                          iconClassName: T,
                          subtitle: F,
                          subtitleColor: k,
                          channel: { type: Y },
                          onMouseEnter: N,
                          onMouseLeave: K,
                          'aria-label': z,
                          children: J,
                          guild: W,
                          channelTypeOverride: S,
                          forceInteractable: U,
                          mentionCount: R,
                          resolvedUnreadSetting: q,
                          isFavoriteSuggestion: _,
                          withGuildIcon: $,
                          hasActiveEvent: AA = !1
                      } = A,
                      At = q === V.i.ALL_MESSAGES || (null != R && R > 0),
                      Ae = (0, f.JA)(h.id),
                      { role: Ar } = Ae,
                      Ag = (function (A, t) {
                          if (null == A) return {};
                          var e,
                              r,
                              g = (function (A, t) {
                                  if (null == A) return {};
                                  var e,
                                      r,
                                      g = {},
                                      v = Object.keys(A);
                                  for (r = 0; r < v.length; r++) ((e = v[r]), t.indexOf(e) >= 0 || (g[e] = A[e]));
                                  return g;
                              })(A, t);
                          if (Object.getOwnPropertySymbols) {
                              var v = Object.getOwnPropertySymbols(A);
                              for (r = 0; r < v.length; r++) ((e = v[r]), !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (g[e] = A[e]));
                          }
                          return g;
                      })(Ae, ['role']),
                      Av = g.useRef(null),
                      An = g.useRef(null),
                      Af = (0, s.Z)(h),
                      AB = b.Z5c.CHANNEL(Af, h.id),
                      Al = (0, i.ZP)(h),
                      Ah = null;
                  h.isPrivate() && 1 === (null != (e = h.rawRecipients) ? e : []).length && (Ah = (0, a.bN)(null == (v = h.rawRecipients[0]) ? void 0 : v.display_name_styles));
                  let Ai = (0, w.j)({ displayNameStyles: Ah }),
                      Ao = h.isGuildVocal(),
                      AC = (0, r.jsx)('div', {
                          className: n()({ [P.favoritesSuggestion]: _ }),
                          ref: An,
                          children: (0, r.jsxs)(
                              H.Z,
                              I(
                                  u(
                                      {
                                          role: Ao && !D ? 'button' : 'link',
                                          href: Ao ? void 0 : AB,
                                          target: '_blank',
                                          ref: Av,
                                          className: P.link,
                                          onClick: () => (null == O ? void 0 : O(h))
                                      },
                                      Ag
                                  ),
                                  {
                                      'aria-label': z,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: P.linkTop,
                                              children: [
                                                  (0, r.jsx)(L, {
                                                      className: T,
                                                      channel: h,
                                                      guild: W,
                                                      hasActiveThreads: p,
                                                      locked: d,
                                                      withGuildIcon: $
                                                  }),
                                                  (0, r.jsx)(C.Z, {
                                                      className: n()(P.name, Ai, { [P.activeEvent]: AA }),
                                                      'aria-hidden': !0,
                                                      children: null == o ? Al : o
                                                  }),
                                                  g.Children.count(J) > 0
                                                      ? (0, r.jsx)('div', {
                                                            onClick: Z,
                                                            className: P.children,
                                                            children: J
                                                        })
                                                      : null
                                              ]
                                          }),
                                          null != F
                                              ? (0, r.jsx)('div', {
                                                    className: n()(P.linkBottom, { [P.withGuildIcon]: $ }),
                                                    children: (0, r.jsx)(l.Text, {
                                                        color: null != k ? k : 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: P.subtitle,
                                                        children: F
                                                    })
                                                })
                                              : null
                                      ]
                                  }
                              )
                          )
                      });
                  return (0, r.jsx)(l.tEY, {
                      focusTarget: Av,
                      ringTarget: An,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4
                      },
                      children: (0, r.jsxs)('div', {
                          ref: t,
                          className: n()(
                              G,
                              null != O || null != x || null != y || U ? P.wrapper : P.notInteractive,
                              (() => {
                                  if (c) return n()(E.selectedChannel, j.SELECTED);
                                  if (D) return n()(E.selectedChannel, j.CONNECTED);
                                  if (d) return j.LOCKED;
                                  if (Q) return j.MUTED;
                                  if (M)
                                      if (At) return j.UNREAD_IMPORTANT;
                                      else return j.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (A) {
                                  switch (A) {
                                      case b.d4z.GUILD_STAGE_VOICE:
                                      case b.d4z.GUILD_VOICE:
                                          return P.typeVoice;
                                      case b.d4z.ANNOUNCEMENT_THREAD:
                                      case b.d4z.PUBLIC_THREAD:
                                      case b.d4z.PRIVATE_THREAD:
                                          return P.typeThread;
                                      case b.d4z.GUILD_ANNOUNCEMENT:
                                      case b.d4z.GUILD_TEXT:
                                      case b.d4z.GUILD_STORE:
                                      case b.d4z.GUILD_FORUM:
                                      case b.d4z.GUILD_MEDIA:
                                      default:
                                          return P.typeDefault;
                                  }
                              })(null != S ? S : Y)
                          ),
                          onMouseUp: (A) => (null == x ? void 0 : x(A, h)),
                          onMouseDown: (A) => (null == y ? void 0 : y(A, h)),
                          onContextMenu: (A) => (null == X ? void 0 : X(A, h)),
                          onMouseEnter: N,
                          onMouseLeave: K,
                          children: [Q || !M ? null : (0, r.jsx)('div', { className: n()(P.unread, At ? P.unreadImportant : void 0) }), null != (B = null == m ? void 0 : m(AC)) ? B : AC]
                      })
                  });
              })
            : null;
