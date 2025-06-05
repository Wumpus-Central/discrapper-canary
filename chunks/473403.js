n.d(t, {
    ZP: () => x,
    _W: () => P,
    ge: () => v,
    je: () => b
});
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s);
if (12633 == n.j) var a = n(91192);
var o = n(442837),
    E = n(481060),
    u = n(43267),
    c = n(933557),
    _ = n(471445),
    d = n(111028),
    A = n(727429),
    T = n(810123),
    I = n(690221),
    O = n(430824),
    N = n(158776),
    R = n(111583),
    g = n(594174),
    f = n(998502),
    S = n(981631),
    h = n(490897),
    U = n(915887),
    p = n(768107);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = {
    SELECTED: p.modeSelected,
    CONNECTED: p.modeConnected,
    UNREAD_IMPORTANT: p.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: p.modeUnreadLessImportant,
    MUTED: p.modeMuted,
    LOCKED: p.modeLocked
};
function M(e) {
    e.preventDefault(), e.stopPropagation();
}
let m = f.ZP.getEnableHardwareAcceleration() ? E.Xo$ : E.qEK;
function v(e) {
    let { channel: t, size: n = E.EFr.SIZE_20 } = e;
    return (0, r.jsx)(m, {
        src: (0, u.x)(t),
        'aria-hidden': !0,
        size: n
    });
}
function b(e) {
    let { channel: t, size: n = E.EFr.SIZE_20 } = e,
        l = (0, o.e7)([g.default], () => g.default.getUser(null == t ? void 0 : t.recipients[0])),
        s = (0, o.e7)([R.Z], () => !(null == l || null == t || t.isMultiUserDM()) && null != R.Z.getTypingUsers(null == t ? void 0 : t.id)[null == l ? void 0 : l.id]),
        { status: i, isMobile: a } = (0, o.cj)([N.Z], () =>
            null == l || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: N.Z.getStatus(l.id),
                      isMobile: N.Z.isMobileOnline(l.id)
                  }
        );
    return (0, r.jsx)(m, {
        size: n,
        src: null == l ? void 0 : l.getAvatarURL(void 0, 40),
        status: i,
        isMobile: a,
        isTyping: s,
        'aria-label': null == l ? void 0 : l.username,
        statusTooltip: !0
    });
}
let P = (e) => {
        let { className: t, containerClassName: n, channel: l, locked: s, hasActiveThreads: a, withGuildIcon: u } = e,
            c = (0, o.e7)([O.Z], () => O.Z.getGuild(l.guild_id), [l.guild_id]),
            d = l.type === S.d4z.DM || l.type === S.d4z.GROUP_DM,
            A = null;
        if (u && null != c && !d)
            A = (0, r.jsx)(T.Z, {
                size: T.E.SMALL_32,
                className: p.iconContainerWithGuildIcon,
                iconClassName: p.iconWithGuildIcon,
                channel: l,
                guild: c,
                locked: s,
                hasActiveThreads: a
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case S.d4z.DM:
                        return function () {
                            return (0, r.jsx)(b, { channel: e });
                        };
                    case S.d4z.GROUP_DM:
                        return function () {
                            return (0, r.jsx)(v, { channel: e });
                        };
                    default:
                        return (0, _.KS)(e, t, n);
                }
            })(l, c, {
                locked: s,
                hasActiveThreads: a
            });
            if (null == e) return null;
            A = (0, r.jsx)(e, {
                color: 'currentColor',
                className: i()(p.icon, t)
            });
        }
        let I = u ? (null == c ? void 0 : c.name) : (0, _.bT)(l, c, s, a),
            N = u && null != c ? ''.concat(c.name, ' - ').concat(I, ' icon') : ''.concat(I, ' icon');
        return (0, r.jsx)(E.ua7, {
            text: I,
            delay: 500,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    D(L({}, e), {
                        role: 'img',
                        'aria-label': N,
                        className: i()(p.iconContainer, n),
                        children: A
                    })
                )
        });
    },
    x =
        12633 == n.j
            ? l.forwardRef(function (e, t) {
                  var n;
                  let {
                          channel: s,
                          name: o,
                          muted: u,
                          selected: _,
                          connected: T,
                          unread: O,
                          locked: N,
                          hasActiveThreads: R,
                          onClick: g,
                          onMouseDown: f,
                          onMouseUp: m,
                          onContextMenu: v,
                          connectDragPreview: b,
                          className: x,
                          iconClassName: j,
                          subtitle: y,
                          subtitleColor: G,
                          channel: { type: F },
                          onMouseEnter: z,
                          onMouseLeave: B,
                          'aria-label': w,
                          children: H,
                          guild: V,
                          channelTypeOverride: k,
                          forceInteractable: K,
                          mentionCount: Z,
                          resolvedUnreadSetting: W,
                          isFavoriteSuggestion: Y,
                          withGuildIcon: q,
                          hasActiveEvent: X = !1
                      } = e,
                      J = W === h.i.ALL_MESSAGES || (null != Z && Z > 0),
                      Q = (0, a.JA)(s.id),
                      { role: $ } = Q,
                      ee = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              l = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      l = {},
                                      s = Object.keys(e);
                                  for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                  return l;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var s = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                          }
                          return l;
                      })(Q, ['role']),
                      et = l.useRef(null),
                      en = l.useRef(null),
                      er = (0, A.Z)(s),
                      el = S.Z5c.CHANNEL(er, s.id),
                      es = (0, c.ZP)(s),
                      ei = s.isGuildVocal(),
                      ea = (0, r.jsx)('div', {
                          className: i()({ [p.favoritesSuggestion]: Y }),
                          ref: en,
                          children: (0, r.jsxs)(
                              I.Z,
                              D(
                                  L(
                                      {
                                          role: ei && !T ? 'button' : 'link',
                                          href: ei ? void 0 : el,
                                          target: '_blank',
                                          ref: et,
                                          className: p.link,
                                          onClick: () => (null == g ? void 0 : g(s))
                                      },
                                      ee
                                  ),
                                  {
                                      'aria-label': w,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: p.linkTop,
                                              children: [
                                                  (0, r.jsx)(P, {
                                                      className: j,
                                                      channel: s,
                                                      guild: V,
                                                      hasActiveThreads: R,
                                                      locked: N,
                                                      withGuildIcon: q
                                                  }),
                                                  (0, r.jsx)(d.Z, {
                                                      className: i()(p.name, { [p.activeEvent]: X }),
                                                      'aria-hidden': !0,
                                                      children: null == o ? es : o
                                                  }),
                                                  l.Children.count(H) > 0
                                                      ? (0, r.jsx)('div', {
                                                            onClick: M,
                                                            className: p.children,
                                                            children: H
                                                        })
                                                      : null
                                              ]
                                          }),
                                          null != y
                                              ? (0, r.jsx)('div', {
                                                    className: i()(p.linkBottom, { [p.withGuildIcon]: q }),
                                                    children: (0, r.jsx)(E.Text, {
                                                        color: null != G ? G : 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: p.subtitle,
                                                        children: y
                                                    })
                                                })
                                              : null
                                      ]
                                  }
                              )
                          )
                      });
                  return (0, r.jsx)(E.tEY, {
                      focusTarget: et,
                      ringTarget: en,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4
                      },
                      children: (0, r.jsxs)('div', {
                          ref: t,
                          className: i()(
                              x,
                              null != g || null != m || null != f || K ? p.wrapper : p.notInteractive,
                              (() => {
                                  if (_) return i()(U.selectedChannel, C.SELECTED);
                                  if (T) return i()(U.selectedChannel, C.CONNECTED);
                                  if (N) return C.LOCKED;
                                  if (u) return C.MUTED;
                                  if (O)
                                      if (J) return C.UNREAD_IMPORTANT;
                                      else return C.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case S.d4z.GUILD_STAGE_VOICE:
                                      case S.d4z.GUILD_VOICE:
                                          return p.typeVoice;
                                      case S.d4z.ANNOUNCEMENT_THREAD:
                                      case S.d4z.PUBLIC_THREAD:
                                      case S.d4z.PRIVATE_THREAD:
                                          return p.typeThread;
                                      case S.d4z.GUILD_ANNOUNCEMENT:
                                      case S.d4z.GUILD_TEXT:
                                      case S.d4z.GUILD_STORE:
                                      case S.d4z.GUILD_FORUM:
                                      case S.d4z.GUILD_MEDIA:
                                      default:
                                          return p.typeDefault;
                                  }
                              })(null != k ? k : F)
                          ),
                          onMouseUp: (e) => (null == m ? void 0 : m(e, s)),
                          onMouseDown: (e) => (null == f ? void 0 : f(e, s)),
                          onContextMenu: (e) => (null == v ? void 0 : v(e, s)),
                          onMouseEnter: z,
                          onMouseLeave: B,
                          children: [u || !O ? null : (0, r.jsx)('div', { className: i()(p.unread, J ? p.unreadImportant : void 0) }), null != (n = null == b ? void 0 : b(ea)) ? n : ea]
                      })
                  });
              })
            : null;
