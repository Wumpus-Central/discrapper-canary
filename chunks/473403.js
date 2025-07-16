n.d(t, {
    ZP: () => P,
    _W: () => x,
    ge: () => L,
    je: () => M
});
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i);
if (12633 == n.j) var a = n(91192);
var o = n(442837),
    u = n(481060),
    c = n(43267),
    E = n(933557),
    d = n(471445),
    _ = n(111028),
    A = n(727429),
    T = n(810123),
    I = n(690221),
    g = n(430824),
    m = n(158776),
    f = n(111583),
    O = n(594174),
    N = n(998502),
    h = n(981631),
    R = n(490897),
    p = n(915887),
    S = n(768107);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function b(e, t) {
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
let D = {
    SELECTED: S.modeSelected,
    CONNECTED: S.modeConnected,
    UNREAD_IMPORTANT: S.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: S.modeUnreadLessImportant,
    MUTED: S.modeMuted,
    LOCKED: S.modeLocked
};
function v(e) {
    (e.preventDefault(), e.stopPropagation());
}
let U = N.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;
function L(e) {
    let { channel: t, size: n = u.EFr.SIZE_20 } = e;
    return (0, r.jsx)(U, {
        src: (0, c.x)(t),
        'aria-hidden': !0,
        size: n
    });
}
function M(e) {
    let { channel: t, size: n = u.EFr.SIZE_20 } = e,
        l = (0, o.e7)([O.default], () => O.default.getUser(null == t ? void 0 : t.recipients[0])),
        i = (0, o.e7)([f.Z], () => !(null == l || null == t || t.isMultiUserDM()) && null != f.Z.getTypingUsers(null == t ? void 0 : t.id)[null == l ? void 0 : l.id]),
        { status: s, isMobile: a } = (0, o.cj)([m.Z], () =>
            null == l || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: m.Z.getStatus(l.id),
                      isMobile: m.Z.isMobileOnline(l.id)
                  }
        );
    return (0, r.jsx)(U, {
        size: n,
        src: null == l ? void 0 : l.getAvatarURL(void 0, 40),
        status: s,
        isMobile: a,
        isTyping: i,
        'aria-label': null == l ? void 0 : l.username,
        statusTooltip: !0
    });
}
let x = (e) => {
        let { className: t, containerClassName: n, channel: l, locked: i, hasActiveThreads: a, withGuildIcon: c } = e,
            E = (0, o.e7)([g.Z], () => g.Z.getGuild(l.guild_id), [l.guild_id]),
            _ = l.type === h.d4z.DM || l.type === h.d4z.GROUP_DM,
            A = null;
        if (c && null != E && !_)
            A = (0, r.jsx)(T.Z, {
                size: T.E.SMALL_32,
                className: S.iconContainerWithGuildIcon,
                iconClassName: S.iconWithGuildIcon,
                channel: l,
                guild: E,
                locked: i,
                hasActiveThreads: a
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case h.d4z.DM:
                        return function () {
                            return (0, r.jsx)(M, { channel: e });
                        };
                    case h.d4z.GROUP_DM:
                        return function () {
                            return (0, r.jsx)(L, { channel: e });
                        };
                    default:
                        return (0, d.KS)(e, t, n);
                }
            })(l, E, {
                locked: i,
                hasActiveThreads: a
            });
            if (null == e) return null;
            A = (0, r.jsx)(e, {
                color: 'currentColor',
                className: s()(S.icon, t)
            });
        }
        let I = c ? (null == E ? void 0 : E.name) : (0, d.bT)(l, E, i, a),
            m = c && null != E ? ''.concat(E.name, ' - ').concat(I, ' icon') : ''.concat(I, ' icon');
        return (0, r.jsx)(u.ua7, {
            text: I,
            delay: 500,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    b(C({}, e), {
                        role: 'img',
                        'aria-label': m,
                        className: s()(S.iconContainer, n),
                        children: A
                    })
                )
        });
    },
    P =
        12633 == n.j
            ? l.forwardRef(function (e, t) {
                  var n;
                  let {
                          channel: i,
                          name: o,
                          muted: c,
                          selected: d,
                          connected: T,
                          unread: g,
                          locked: m,
                          hasActiveThreads: f,
                          onClick: O,
                          onMouseDown: N,
                          onMouseUp: U,
                          onContextMenu: L,
                          connectDragPreview: M,
                          className: P,
                          iconClassName: j,
                          subtitle: y,
                          subtitleColor: w,
                          channel: { type: G },
                          onMouseEnter: z,
                          onMouseLeave: B,
                          'aria-label': Z,
                          children: F,
                          guild: V,
                          channelTypeOverride: H,
                          forceInteractable: k,
                          mentionCount: K,
                          resolvedUnreadSetting: W,
                          isFavoriteSuggestion: q,
                          withGuildIcon: Y,
                          hasActiveEvent: J = !1
                      } = e,
                      X = W === R.i.ALL_MESSAGES || (null != K && K > 0),
                      Q = (0, a.JA)(i.id),
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
                                      i = Object.keys(e);
                                  for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                                  return l;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                          }
                          return l;
                      })(Q, ['role']),
                      et = l.useRef(null),
                      en = l.useRef(null),
                      er = (0, A.Z)(i),
                      el = h.Z5c.CHANNEL(er, i.id),
                      ei = (0, E.ZP)(i),
                      es = i.isGuildVocal(),
                      ea = (0, r.jsx)('div', {
                          className: s()({ [S.favoritesSuggestion]: q }),
                          ref: en,
                          children: (0, r.jsxs)(
                              I.Z,
                              b(
                                  C(
                                      {
                                          role: es && !T ? 'button' : 'link',
                                          href: es ? void 0 : el,
                                          target: '_blank',
                                          ref: et,
                                          className: S.link,
                                          onClick: () => (null == O ? void 0 : O(i))
                                      },
                                      ee
                                  ),
                                  {
                                      'aria-label': Z,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: S.linkTop,
                                              children: [
                                                  (0, r.jsx)(x, {
                                                      className: j,
                                                      channel: i,
                                                      guild: V,
                                                      hasActiveThreads: f,
                                                      locked: m,
                                                      withGuildIcon: Y
                                                  }),
                                                  (0, r.jsx)(_.Z, {
                                                      className: s()(S.name, { [S.activeEvent]: J }),
                                                      'aria-hidden': !0,
                                                      children: null == o ? ei : o
                                                  }),
                                                  l.Children.count(F) > 0
                                                      ? (0, r.jsx)('div', {
                                                            onClick: v,
                                                            className: S.children,
                                                            children: F
                                                        })
                                                      : null
                                              ]
                                          }),
                                          null != y
                                              ? (0, r.jsx)('div', {
                                                    className: s()(S.linkBottom, { [S.withGuildIcon]: Y }),
                                                    children: (0, r.jsx)(u.Text, {
                                                        color: null != w ? w : 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: S.subtitle,
                                                        children: y
                                                    })
                                                })
                                              : null
                                      ]
                                  }
                              )
                          )
                      });
                  return (0, r.jsx)(u.tEY, {
                      focusTarget: et,
                      ringTarget: en,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4
                      },
                      children: (0, r.jsxs)('div', {
                          ref: t,
                          className: s()(
                              P,
                              null != O || null != U || null != N || k ? S.wrapper : S.notInteractive,
                              (() => {
                                  if (d) return s()(p.selectedChannel, D.SELECTED);
                                  if (T) return s()(p.selectedChannel, D.CONNECTED);
                                  if (m) return D.LOCKED;
                                  if (c) return D.MUTED;
                                  if (g)
                                      if (X) return D.UNREAD_IMPORTANT;
                                      else return D.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case h.d4z.GUILD_STAGE_VOICE:
                                      case h.d4z.GUILD_VOICE:
                                          return S.typeVoice;
                                      case h.d4z.ANNOUNCEMENT_THREAD:
                                      case h.d4z.PUBLIC_THREAD:
                                      case h.d4z.PRIVATE_THREAD:
                                          return S.typeThread;
                                      case h.d4z.GUILD_ANNOUNCEMENT:
                                      case h.d4z.GUILD_TEXT:
                                      case h.d4z.GUILD_STORE:
                                      case h.d4z.GUILD_FORUM:
                                      case h.d4z.GUILD_MEDIA:
                                      default:
                                          return S.typeDefault;
                                  }
                              })(null != H ? H : G)
                          ),
                          onMouseUp: (e) => (null == U ? void 0 : U(e, i)),
                          onMouseDown: (e) => (null == N ? void 0 : N(e, i)),
                          onContextMenu: (e) => (null == L ? void 0 : L(e, i)),
                          onMouseEnter: z,
                          onMouseLeave: B,
                          children: [c || !g ? null : (0, r.jsx)('div', { className: s()(S.unread, X ? S.unreadImportant : void 0) }), null != (n = null == M ? void 0 : M(ea)) ? n : ea]
                      })
                  });
              })
            : null;
