n.d(t, {
    ZP: () => j,
    _W: () => U,
    ge: () => M,
    je: () => L
});
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i);
if (12633 == n.j) var a = n(91192);
var o = n(442837),
    u = n(481060),
    c = n(43267),
    d = n(933557),
    E = n(471445),
    _ = n(111028),
    A = n(727429),
    m = n(810123),
    T = n(690221),
    f = n(430824),
    g = n(158776),
    I = n(111583),
    h = n(594174),
    O = n(998502),
    N = n(981631),
    p = n(490897),
    R = n(915887),
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
let v = {
    SELECTED: S.modeSelected,
    CONNECTED: S.modeConnected,
    UNREAD_IMPORTANT: S.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: S.modeUnreadLessImportant,
    MUTED: S.modeMuted,
    LOCKED: S.modeLocked
};
function D(e) {
    (e.preventDefault(), e.stopPropagation());
}
let x = O.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;
function M(e) {
    let { channel: t, size: n = u.EFr.SIZE_20 } = e;
    return (0, r.jsx)(x, {
        src: (0, c.x)(t),
        'aria-hidden': !0,
        size: n
    });
}
function L(e) {
    let { channel: t, size: n = u.EFr.SIZE_20 } = e,
        l = (0, o.e7)([h.default], () => h.default.getUser(null == t ? void 0 : t.recipients[0])),
        i = (0, o.e7)([I.Z], () => !(null == l || null == t || t.isMultiUserDM()) && null != I.Z.getTypingUsers(null == t ? void 0 : t.id)[null == l ? void 0 : l.id]),
        { status: s, isMobile: a } = (0, o.cj)([g.Z], () =>
            null == l || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: g.Z.getStatus(l.id),
                      isMobile: g.Z.isMobileOnline(l.id)
                  }
        );
    return (0, r.jsx)(x, {
        size: n,
        src: null == l ? void 0 : l.getAvatarURL(void 0, 40),
        status: s,
        isMobile: a,
        isTyping: i,
        'aria-label': null == l ? void 0 : l.username,
        statusTooltip: !0
    });
}
let U = (e) => {
        let { className: t, containerClassName: n, channel: l, locked: i, hasActiveThreads: a, withGuildIcon: c } = e,
            d = (0, o.e7)([f.Z], () => f.Z.getGuild(l.guild_id), [l.guild_id]),
            _ = l.type === N.d4z.DM || l.type === N.d4z.GROUP_DM,
            A = null;
        if (c && null != d && !_)
            A = (0, r.jsx)(m.Z, {
                size: m.E.SMALL_32,
                className: S.iconContainerWithGuildIcon,
                iconClassName: S.iconWithGuildIcon,
                channel: l,
                guild: d,
                locked: i,
                hasActiveThreads: a
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case N.d4z.DM:
                        return function () {
                            return (0, r.jsx)(L, { channel: e });
                        };
                    case N.d4z.GROUP_DM:
                        return function () {
                            return (0, r.jsx)(M, { channel: e });
                        };
                    default:
                        return (0, E.KS)(e, t, n);
                }
            })(l, d, {
                locked: i,
                hasActiveThreads: a
            });
            if (null == e) return null;
            A = (0, r.jsx)(e, {
                color: 'currentColor',
                className: s()(S.icon, t)
            });
        }
        let T = c ? (null == d ? void 0 : d.name) : (0, E.bT)(l, d, i, a),
            g = c && null != d ? ''.concat(d.name, ' - ').concat(T, ' icon') : ''.concat(T, ' icon');
        return (0, r.jsx)(u.ua7, {
            text: T,
            delay: 500,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    b(C({}, e), {
                        role: 'img',
                        'aria-label': g,
                        className: s()(S.iconContainer, n),
                        children: A
                    })
                )
        });
    },
    j =
        12633 == n.j
            ? l.forwardRef(function (e, t) {
                  var n;
                  let {
                          channel: i,
                          name: o,
                          muted: c,
                          selected: E,
                          connected: m,
                          unread: f,
                          locked: g,
                          hasActiveThreads: I,
                          onClick: h,
                          onMouseDown: O,
                          onMouseUp: x,
                          onContextMenu: M,
                          connectDragPreview: L,
                          className: j,
                          iconClassName: P,
                          subtitle: y,
                          subtitleColor: w,
                          channel: { type: G },
                          onMouseEnter: k,
                          onMouseLeave: F,
                          'aria-label': Z,
                          children: z,
                          guild: B,
                          channelTypeOverride: V,
                          forceInteractable: H,
                          mentionCount: K,
                          resolvedUnreadSetting: W,
                          isFavoriteSuggestion: q,
                          withGuildIcon: Y,
                          hasActiveEvent: J = !1
                      } = e,
                      X = W === p.i.ALL_MESSAGES || (null != K && K > 0),
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
                      el = N.Z5c.CHANNEL(er, i.id),
                      ei = (0, d.ZP)(i),
                      es = i.isGuildVocal(),
                      ea = (0, r.jsx)('div', {
                          className: s()({ [S.favoritesSuggestion]: q }),
                          ref: en,
                          children: (0, r.jsxs)(
                              T.Z,
                              b(
                                  C(
                                      {
                                          role: es && !m ? 'button' : 'link',
                                          href: es ? void 0 : el,
                                          target: '_blank',
                                          ref: et,
                                          className: S.link,
                                          onClick: () => (null == h ? void 0 : h(i))
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
                                                  (0, r.jsx)(U, {
                                                      className: P,
                                                      channel: i,
                                                      guild: B,
                                                      hasActiveThreads: I,
                                                      locked: g,
                                                      withGuildIcon: Y
                                                  }),
                                                  (0, r.jsx)(_.Z, {
                                                      className: s()(S.name, { [S.activeEvent]: J }),
                                                      'aria-hidden': !0,
                                                      children: null == o ? ei : o
                                                  }),
                                                  l.Children.count(z) > 0
                                                      ? (0, r.jsx)('div', {
                                                            onClick: D,
                                                            className: S.children,
                                                            children: z
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
                              j,
                              null != h || null != x || null != O || H ? S.wrapper : S.notInteractive,
                              (() => {
                                  if (E) return s()(R.selectedChannel, v.SELECTED);
                                  if (m) return s()(R.selectedChannel, v.CONNECTED);
                                  if (g) return v.LOCKED;
                                  if (c) return v.MUTED;
                                  if (f)
                                      if (X) return v.UNREAD_IMPORTANT;
                                      else return v.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case N.d4z.GUILD_STAGE_VOICE:
                                      case N.d4z.GUILD_VOICE:
                                          return S.typeVoice;
                                      case N.d4z.ANNOUNCEMENT_THREAD:
                                      case N.d4z.PUBLIC_THREAD:
                                      case N.d4z.PRIVATE_THREAD:
                                          return S.typeThread;
                                      case N.d4z.GUILD_ANNOUNCEMENT:
                                      case N.d4z.GUILD_TEXT:
                                      case N.d4z.GUILD_STORE:
                                      case N.d4z.GUILD_FORUM:
                                      case N.d4z.GUILD_MEDIA:
                                      default:
                                          return S.typeDefault;
                                  }
                              })(null != V ? V : G)
                          ),
                          onMouseUp: (e) => (null == x ? void 0 : x(e, i)),
                          onMouseDown: (e) => (null == O ? void 0 : O(e, i)),
                          onContextMenu: (e) => (null == M ? void 0 : M(e, i)),
                          onMouseEnter: k,
                          onMouseLeave: F,
                          children: [c || !f ? null : (0, r.jsx)('div', { className: s()(S.unread, X ? S.unreadImportant : void 0) }), null != (n = null == L ? void 0 : L(ea)) ? n : ea]
                      })
                  });
              })
            : null;
