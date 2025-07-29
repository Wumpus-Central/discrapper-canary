t.d(e, {
    ZP: () => x,
    _W: () => L,
    ge: () => y,
    je: () => m
});
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l);
if (12633 == t.j) var s = t(91192);
var a = t(442837),
    o = t(481060),
    g = t(43267),
    f = t(933557),
    v = t(471445),
    c = t(111028),
    h = t(131016),
    E = t(7284),
    u = t(727429),
    d = t(810123),
    C = t(690221),
    B = t(430824),
    w = t(158776),
    D = t(111583),
    M = t(594174),
    I = t(998502),
    p = t(981631),
    H = t(490897),
    b = t(915887),
    Q = t(768107);
function O(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                ((n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[e] = n));
            }));
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
let V = {
    SELECTED: Q.modeSelected,
    CONNECTED: Q.modeConnected,
    UNREAD_IMPORTANT: Q.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: Q.modeUnreadLessImportant,
    MUTED: Q.modeMuted,
    LOCKED: Q.modeLocked
};
function j(A) {
    (A.preventDefault(), A.stopPropagation());
}
let T = I.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function y(A) {
    let { channel: e, size: t = o.EFr.SIZE_20 } = A;
    return (0, n.jsx)(T, {
        src: (0, g.x)(e),
        'aria-hidden': !0,
        size: t
    });
}
function m(A) {
    let { channel: e, size: t = o.EFr.SIZE_20 } = A,
        r = (0, a.e7)([M.default], () => M.default.getUser(null == e ? void 0 : e.recipients[0])),
        l = (0, a.e7)([D.Z], () => !(null == r || null == e || e.isMultiUserDM()) && null != D.Z.getTypingUsers(null == e ? void 0 : e.id)[null == r ? void 0 : r.id]),
        { status: i, isMobile: s } = (0, a.cj)([w.Z], () =>
            null == r || null == e || e.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: w.Z.getStatus(r.id),
                      isMobile: w.Z.isMobileOnline(r.id)
                  }
        );
    return (0, n.jsx)(T, {
        size: t,
        src: null == r ? void 0 : r.getAvatarURL(void 0, 40),
        status: i,
        isMobile: s,
        isTyping: l,
        'aria-label': null == r ? void 0 : r.username,
        statusTooltip: !0
    });
}
let L = (A) => {
        let { className: e, containerClassName: t, channel: r, locked: l, hasActiveThreads: s, withGuildIcon: g } = A,
            f = (0, a.e7)([B.Z], () => B.Z.getGuild(r.guild_id), [r.guild_id]),
            c = r.type === p.d4z.DM || r.type === p.d4z.GROUP_DM,
            h = null;
        if (g && null != f && !c)
            h = (0, n.jsx)(d.Z, {
                size: d.E.SMALL_32,
                className: Q.iconContainerWithGuildIcon,
                iconClassName: Q.iconWithGuildIcon,
                channel: r,
                guild: f,
                locked: l,
                hasActiveThreads: s
            });
        else {
            let A = (function (A, e, t) {
                switch (A.type) {
                    case p.d4z.DM:
                        return function () {
                            return (0, n.jsx)(m, { channel: A });
                        };
                    case p.d4z.GROUP_DM:
                        return function () {
                            return (0, n.jsx)(y, { channel: A });
                        };
                    default:
                        return (0, v.KS)(A, e, t);
                }
            })(r, f, {
                locked: l,
                hasActiveThreads: s
            });
            if (null == A) return null;
            h = (0, n.jsx)(A, {
                color: 'currentColor',
                className: i()(Q.icon, e)
            });
        }
        let E = g ? (null == f ? void 0 : f.name) : (0, v.bT)(r, f, l, s),
            u = g && null != f ? ''.concat(f.name, ' - ').concat(E, ' icon') : ''.concat(E, ' icon');
        return (0, n.jsx)(o.ua7, {
            text: E,
            delay: 500,
            children: (A) =>
                (0, n.jsx)(
                    'div',
                    P(O({}, A), {
                        role: 'img',
                        'aria-label': u,
                        className: i()(Q.iconContainer, t),
                        children: h
                    })
                )
        });
    },
    x =
        12633 == t.j
            ? r.forwardRef(function (A, e) {
                  var t, l, a;
                  let {
                          channel: g,
                          name: v,
                          muted: d,
                          selected: B,
                          connected: w,
                          unread: D,
                          locked: M,
                          hasActiveThreads: I,
                          onClick: T,
                          onMouseDown: y,
                          onMouseUp: m,
                          onContextMenu: x,
                          connectDragPreview: Z,
                          className: N,
                          iconClassName: S,
                          subtitle: R,
                          subtitleColor: G,
                          channel: { type: U },
                          onMouseEnter: F,
                          onMouseLeave: X,
                          'aria-label': z,
                          children: k,
                          guild: K,
                          channelTypeOverride: Y,
                          forceInteractable: W,
                          mentionCount: J,
                          resolvedUnreadSetting: q,
                          isFavoriteSuggestion: _,
                          withGuildIcon: $,
                          hasActiveEvent: AA = !1
                      } = A,
                      Ae = q === H.i.ALL_MESSAGES || (null != J && J > 0),
                      At = (0, s.JA)(g.id),
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
                                  for (n = 0; n < l.length; n++) ((t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]));
                                  return r;
                              })(A, e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(A);
                              for (n = 0; n < l.length; n++) ((t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]));
                          }
                          return r;
                      })(At, ['role']),
                      Al = r.useRef(null),
                      Ai = r.useRef(null),
                      As = (0, u.Z)(g),
                      Aa = p.Z5c.CHANNEL(As, g.id),
                      Ao = (0, f.ZP)(g),
                      Ag = null;
                  g.isPrivate() && 1 === (null != (t = g.rawRecipients) ? t : []).length && (Ag = (0, h.bN)(null == (l = g.rawRecipients[0]) ? void 0 : l.display_name_styles));
                  let Af = (0, E.j)({ displayNameStyles: Ag }),
                      Av = g.isGuildVocal(),
                      Ac = (0, n.jsx)('div', {
                          className: i()({ [Q.favoritesSuggestion]: _ }),
                          ref: Ai,
                          children: (0, n.jsxs)(
                              C.Z,
                              P(
                                  O(
                                      {
                                          role: Av && !w ? 'button' : 'link',
                                          href: Av ? void 0 : Aa,
                                          target: '_blank',
                                          ref: Al,
                                          className: Q.link,
                                          onClick: () => (null == T ? void 0 : T(g))
                                      },
                                      Ar
                                  ),
                                  {
                                      'aria-label': z,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, n.jsxs)('div', {
                                              className: Q.linkTop,
                                              children: [
                                                  (0, n.jsx)(L, {
                                                      className: S,
                                                      channel: g,
                                                      guild: K,
                                                      hasActiveThreads: I,
                                                      locked: M,
                                                      withGuildIcon: $
                                                  }),
                                                  (0, n.jsx)(c.Z, {
                                                      className: i()(Q.name, Af, { [Q.activeEvent]: AA }),
                                                      'aria-hidden': !0,
                                                      children: null == v ? Ao : v
                                                  }),
                                                  r.Children.count(k) > 0
                                                      ? (0, n.jsx)('div', {
                                                            onClick: j,
                                                            className: Q.children,
                                                            children: k
                                                        })
                                                      : null
                                              ]
                                          }),
                                          null != R
                                              ? (0, n.jsx)('div', {
                                                    className: i()(Q.linkBottom, { [Q.withGuildIcon]: $ }),
                                                    children: (0, n.jsx)(o.Text, {
                                                        color: null != G ? G : 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: Q.subtitle,
                                                        children: R
                                                    })
                                                })
                                              : null
                                      ]
                                  }
                              )
                          )
                      });
                  return (0, n.jsx)(o.tEY, {
                      focusTarget: Al,
                      ringTarget: Ai,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4
                      },
                      children: (0, n.jsxs)('div', {
                          ref: e,
                          className: i()(
                              N,
                              null != T || null != m || null != y || W ? Q.wrapper : Q.notInteractive,
                              (() => {
                                  if (B) return i()(b.selectedChannel, V.SELECTED);
                                  if (w) return i()(b.selectedChannel, V.CONNECTED);
                                  if (M) return V.LOCKED;
                                  if (d) return V.MUTED;
                                  if (D)
                                      if (Ae) return V.UNREAD_IMPORTANT;
                                      else return V.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (A) {
                                  switch (A) {
                                      case p.d4z.GUILD_STAGE_VOICE:
                                      case p.d4z.GUILD_VOICE:
                                          return Q.typeVoice;
                                      case p.d4z.ANNOUNCEMENT_THREAD:
                                      case p.d4z.PUBLIC_THREAD:
                                      case p.d4z.PRIVATE_THREAD:
                                          return Q.typeThread;
                                      case p.d4z.GUILD_ANNOUNCEMENT:
                                      case p.d4z.GUILD_TEXT:
                                      case p.d4z.GUILD_STORE:
                                      case p.d4z.GUILD_FORUM:
                                      case p.d4z.GUILD_MEDIA:
                                      default:
                                          return Q.typeDefault;
                                  }
                              })(null != Y ? Y : U)
                          ),
                          onMouseUp: (A) => (null == m ? void 0 : m(A, g)),
                          onMouseDown: (A) => (null == y ? void 0 : y(A, g)),
                          onContextMenu: (A) => (null == x ? void 0 : x(A, g)),
                          onMouseEnter: F,
                          onMouseLeave: X,
                          children: [d || !D ? null : (0, n.jsx)('div', { className: i()(Q.unread, Ae ? Q.unreadImportant : void 0) }), null != (a = null == Z ? void 0 : Z(Ac)) ? a : Ac]
                      })
                  });
              })
            : null;
