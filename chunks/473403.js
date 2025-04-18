n.d(t, {
    ZP: () => x,
    _W: () => P,
    ge: () => v,
    je: () => b
});
var r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s);
if (12633 == n.j) var i = n(91192);
var o = n(442837),
    E = n(481060),
    u = n(43267),
    c = n(933557),
    _ = n(471445),
    d = n(111028),
    A = n(727429),
    T = n(810123),
    N = n(690221),
    I = n(430824),
    O = n(158776),
    R = n(111583),
    g = n(594174),
    f = n(998502),
    S = n(981631),
    U = n(490897),
    h = n(915887),
    L = n(768107);
function p(e) {
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
    SELECTED: L.modeSelected,
    CONNECTED: L.modeConnected,
    UNREAD_IMPORTANT: L.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: L.modeUnreadLessImportant,
    MUTED: L.modeMuted,
    LOCKED: L.modeLocked
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
        { status: a, isMobile: i } = (0, o.cj)([O.Z], () =>
            null == l || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: O.Z.getStatus(l.id),
                      isMobile: O.Z.isMobileOnline(l.id)
                  }
        );
    return (0, r.jsx)(m, {
        size: n,
        src: null == l ? void 0 : l.getAvatarURL(void 0, 40),
        status: a,
        isMobile: i,
        isTyping: s,
        'aria-label': null == l ? void 0 : l.username,
        statusTooltip: !0
    });
}
let P = (e) => {
        let { className: t, containerClassName: n, channel: l, locked: s, hasActiveThreads: i, withGuildIcon: u } = e,
            c = (0, o.e7)([I.Z], () => I.Z.getGuild(l.guild_id), [l.guild_id]),
            d = l.type === S.d4z.DM || l.type === S.d4z.GROUP_DM,
            A = null;
        if (u && null != c && !d)
            A = (0, r.jsx)(T.Z, {
                size: T.E.SMALL_32,
                className: L.iconContainerWithGuildIcon,
                iconClassName: L.iconWithGuildIcon,
                channel: l,
                guild: c,
                locked: s,
                hasActiveThreads: i
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
                hasActiveThreads: i
            });
            if (null == e) return null;
            A = (0, r.jsx)(e, {
                color: 'currentColor',
                className: a()(L.icon, t)
            });
        }
        let N = u ? (null == c ? void 0 : c.name) : (0, _.bT)(l, c, s, i),
            O = u && null != c ? ''.concat(c.name, ' - ').concat(N, ' icon') : ''.concat(N, ' icon');
        return (0, r.jsx)(E.ua7, {
            text: N,
            delay: 500,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    D(p({}, e), {
                        role: 'img',
                        'aria-label': O,
                        className: a()(L.iconContainer, n),
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
                          unread: I,
                          locked: O,
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
                          onMouseEnter: W,
                          onMouseLeave: z,
                          'aria-label': B,
                          children: w,
                          guild: H,
                          channelTypeOverride: V,
                          forceInteractable: k,
                          mentionCount: K,
                          resolvedUnreadSetting: Z,
                          isFavoriteSuggestion: Y,
                          withGuildIcon: q,
                          hasActiveEvent: X = !1
                      } = e,
                      J = Z === U.i.ALL_MESSAGES || (null != K && K > 0),
                      Q = (0, i.JA)(s.id),
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
                      ea = s.isGuildVocal(),
                      ei = (0, r.jsx)('div', {
                          className: a()({ [L.favoritesSuggestion]: Y }),
                          ref: en,
                          children: (0, r.jsxs)(
                              N.Z,
                              D(
                                  p(
                                      {
                                          role: ea && !T ? 'button' : 'link',
                                          href: ea ? void 0 : el,
                                          target: '_blank',
                                          ref: et,
                                          className: L.link,
                                          onClick: () => (null == g ? void 0 : g(s))
                                      },
                                      ee
                                  ),
                                  {
                                      'aria-label': B,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: L.linkTop,
                                              children: [
                                                  (0, r.jsx)(P, {
                                                      className: j,
                                                      channel: s,
                                                      guild: H,
                                                      hasActiveThreads: R,
                                                      locked: O,
                                                      withGuildIcon: q
                                                  }),
                                                  (0, r.jsx)(d.Z, {
                                                      className: a()(L.name, { [L.activeEvent]: X }),
                                                      'aria-hidden': !0,
                                                      children: null == o ? es : o
                                                  }),
                                                  l.Children.count(w) > 0
                                                      ? (0, r.jsx)('div', {
                                                            onClick: M,
                                                            className: L.children,
                                                            children: w
                                                        })
                                                      : null
                                              ]
                                          }),
                                          null != y
                                              ? (0, r.jsx)('div', {
                                                    className: a()(L.linkBottom, { [L.withGuildIcon]: q }),
                                                    children: (0, r.jsx)(E.Text, {
                                                        color: null != G ? G : 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: L.subtitle,
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
                          className: a()(
                              x,
                              null != g || null != m || null != f || k ? L.wrapper : L.notInteractive,
                              (() => {
                                  if (_) return a()(h.selectedChannel, C.SELECTED);
                                  if (T) return a()(h.selectedChannel, C.CONNECTED);
                                  if (O) return C.LOCKED;
                                  if (u) return C.MUTED;
                                  if (I)
                                      if (J) return C.UNREAD_IMPORTANT;
                                      else return C.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case S.d4z.GUILD_STAGE_VOICE:
                                      case S.d4z.GUILD_VOICE:
                                          return L.typeVoice;
                                      case S.d4z.ANNOUNCEMENT_THREAD:
                                      case S.d4z.PUBLIC_THREAD:
                                      case S.d4z.PRIVATE_THREAD:
                                          return L.typeThread;
                                      case S.d4z.GUILD_ANNOUNCEMENT:
                                      case S.d4z.GUILD_TEXT:
                                      case S.d4z.GUILD_STORE:
                                      case S.d4z.GUILD_FORUM:
                                      case S.d4z.GUILD_MEDIA:
                                      default:
                                          return L.typeDefault;
                                  }
                              })(null != V ? V : F)
                          ),
                          onMouseUp: (e) => (null == m ? void 0 : m(e, s)),
                          onMouseDown: (e) => (null == f ? void 0 : f(e, s)),
                          onContextMenu: (e) => (null == v ? void 0 : v(e, s)),
                          onMouseEnter: W,
                          onMouseLeave: z,
                          children: [u || !I ? null : (0, r.jsx)('div', { className: a()(L.unread, J ? L.unreadImportant : void 0) }), null != (n = null == b ? void 0 : b(ei)) ? n : ei]
                      })
                  });
              })
            : null;
