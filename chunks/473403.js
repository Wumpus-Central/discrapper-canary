t.d(e, {
    ZP: () => m,
    _W: () => y,
    ge: () => j,
    je: () => T
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
    h = t(727429),
    E = t(810123),
    u = t(690221),
    d = t(430824),
    C = t(158776),
    B = t(111583),
    w = t(594174),
    D = t(998502),
    M = t(981631),
    I = t(490897),
    p = t(915887),
    H = t(768107);
function b(A) {
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
function Q(A, e) {
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
let O = {
    SELECTED: H.modeSelected,
    CONNECTED: H.modeConnected,
    UNREAD_IMPORTANT: H.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: H.modeUnreadLessImportant,
    MUTED: H.modeMuted,
    LOCKED: H.modeLocked
};
function P(A) {
    (A.preventDefault(), A.stopPropagation());
}
let V = D.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function j(A) {
    let { channel: e, size: t = o.EFr.SIZE_20 } = A;
    return (0, n.jsx)(V, {
        src: (0, g.x)(e),
        'aria-hidden': !0,
        size: t
    });
}
function T(A) {
    let { channel: e, size: t = o.EFr.SIZE_20 } = A,
        r = (0, a.e7)([w.default], () => w.default.getUser(null == e ? void 0 : e.recipients[0])),
        l = (0, a.e7)([B.Z], () => !(null == r || null == e || e.isMultiUserDM()) && null != B.Z.getTypingUsers(null == e ? void 0 : e.id)[null == r ? void 0 : r.id]),
        { status: i, isMobile: s } = (0, a.cj)([C.Z], () =>
            null == r || null == e || e.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: C.Z.getStatus(r.id),
                      isMobile: C.Z.isMobileOnline(r.id)
                  }
        );
    return (0, n.jsx)(V, {
        size: t,
        src: null == r ? void 0 : r.getAvatarURL(void 0, 40),
        status: i,
        isMobile: s,
        isTyping: l,
        'aria-label': null == r ? void 0 : r.username,
        statusTooltip: !0
    });
}
let y = (A) => {
        let { className: e, containerClassName: t, channel: r, locked: l, hasActiveThreads: s, withGuildIcon: g } = A,
            f = (0, a.e7)([d.Z], () => d.Z.getGuild(r.guild_id), [r.guild_id]),
            c = r.type === M.d4z.DM || r.type === M.d4z.GROUP_DM,
            h = null;
        if (g && null != f && !c)
            h = (0, n.jsx)(E.Z, {
                size: E.E.SMALL_32,
                className: H.iconContainerWithGuildIcon,
                iconClassName: H.iconWithGuildIcon,
                channel: r,
                guild: f,
                locked: l,
                hasActiveThreads: s
            });
        else {
            let A = (function (A, e, t) {
                switch (A.type) {
                    case M.d4z.DM:
                        return function () {
                            return (0, n.jsx)(T, { channel: A });
                        };
                    case M.d4z.GROUP_DM:
                        return function () {
                            return (0, n.jsx)(j, { channel: A });
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
                className: i()(H.icon, e)
            });
        }
        let u = g ? (null == f ? void 0 : f.name) : (0, v.bT)(r, f, l, s),
            C = g && null != f ? ''.concat(f.name, ' - ').concat(u, ' icon') : ''.concat(u, ' icon');
        return (0, n.jsx)(o.ua7, {
            text: u,
            delay: 500,
            children: (A) =>
                (0, n.jsx)(
                    'div',
                    Q(b({}, A), {
                        role: 'img',
                        'aria-label': C,
                        className: i()(H.iconContainer, t),
                        children: h
                    })
                )
        });
    },
    m =
        12633 == t.j
            ? r.forwardRef(function (A, e) {
                  var t;
                  let {
                          channel: l,
                          name: a,
                          muted: g,
                          selected: v,
                          connected: E,
                          unread: d,
                          locked: C,
                          hasActiveThreads: B,
                          onClick: w,
                          onMouseDown: D,
                          onMouseUp: V,
                          onContextMenu: j,
                          connectDragPreview: T,
                          className: m,
                          iconClassName: L,
                          subtitle: x,
                          subtitleColor: Z,
                          channel: { type: N },
                          onMouseEnter: S,
                          onMouseLeave: R,
                          'aria-label': G,
                          children: U,
                          guild: F,
                          channelTypeOverride: X,
                          forceInteractable: z,
                          mentionCount: k,
                          resolvedUnreadSetting: K,
                          isFavoriteSuggestion: Y,
                          withGuildIcon: W,
                          hasActiveEvent: J = !1
                      } = A,
                      q = K === I.i.ALL_MESSAGES || (null != k && k > 0),
                      _ = (0, s.JA)(l.id),
                      { role: $ } = _,
                      AA = (function (A, e) {
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
                      })(_, ['role']),
                      Ae = r.useRef(null),
                      At = r.useRef(null),
                      An = (0, h.Z)(l),
                      Ar = M.Z5c.CHANNEL(An, l.id),
                      Al = (0, f.ZP)(l),
                      Ai = l.isGuildVocal(),
                      As = (0, n.jsx)('div', {
                          className: i()({ [H.favoritesSuggestion]: Y }),
                          ref: At,
                          children: (0, n.jsxs)(
                              u.Z,
                              Q(
                                  b(
                                      {
                                          role: Ai && !E ? 'button' : 'link',
                                          href: Ai ? void 0 : Ar,
                                          target: '_blank',
                                          ref: Ae,
                                          className: H.link,
                                          onClick: () => (null == w ? void 0 : w(l))
                                      },
                                      AA
                                  ),
                                  {
                                      'aria-label': G,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, n.jsxs)('div', {
                                              className: H.linkTop,
                                              children: [
                                                  (0, n.jsx)(y, {
                                                      className: L,
                                                      channel: l,
                                                      guild: F,
                                                      hasActiveThreads: B,
                                                      locked: C,
                                                      withGuildIcon: W
                                                  }),
                                                  (0, n.jsx)(c.Z, {
                                                      className: i()(H.name, { [H.activeEvent]: J }),
                                                      'aria-hidden': !0,
                                                      children: null == a ? Al : a
                                                  }),
                                                  r.Children.count(U) > 0
                                                      ? (0, n.jsx)('div', {
                                                            onClick: P,
                                                            className: H.children,
                                                            children: U
                                                        })
                                                      : null
                                              ]
                                          }),
                                          null != x
                                              ? (0, n.jsx)('div', {
                                                    className: i()(H.linkBottom, { [H.withGuildIcon]: W }),
                                                    children: (0, n.jsx)(o.Text, {
                                                        color: null != Z ? Z : 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: H.subtitle,
                                                        children: x
                                                    })
                                                })
                                              : null
                                      ]
                                  }
                              )
                          )
                      });
                  return (0, n.jsx)(o.tEY, {
                      focusTarget: Ae,
                      ringTarget: At,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4
                      },
                      children: (0, n.jsxs)('div', {
                          ref: e,
                          className: i()(
                              m,
                              null != w || null != V || null != D || z ? H.wrapper : H.notInteractive,
                              (() => {
                                  if (v) return i()(p.selectedChannel, O.SELECTED);
                                  if (E) return i()(p.selectedChannel, O.CONNECTED);
                                  if (C) return O.LOCKED;
                                  if (g) return O.MUTED;
                                  if (d)
                                      if (q) return O.UNREAD_IMPORTANT;
                                      else return O.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (A) {
                                  switch (A) {
                                      case M.d4z.GUILD_STAGE_VOICE:
                                      case M.d4z.GUILD_VOICE:
                                          return H.typeVoice;
                                      case M.d4z.ANNOUNCEMENT_THREAD:
                                      case M.d4z.PUBLIC_THREAD:
                                      case M.d4z.PRIVATE_THREAD:
                                          return H.typeThread;
                                      case M.d4z.GUILD_ANNOUNCEMENT:
                                      case M.d4z.GUILD_TEXT:
                                      case M.d4z.GUILD_STORE:
                                      case M.d4z.GUILD_FORUM:
                                      case M.d4z.GUILD_MEDIA:
                                      default:
                                          return H.typeDefault;
                                  }
                              })(null != X ? X : N)
                          ),
                          onMouseUp: (A) => (null == V ? void 0 : V(A, l)),
                          onMouseDown: (A) => (null == D ? void 0 : D(A, l)),
                          onContextMenu: (A) => (null == j ? void 0 : j(A, l)),
                          onMouseEnter: S,
                          onMouseLeave: R,
                          children: [g || !d ? null : (0, n.jsx)('div', { className: i()(H.unread, q ? H.unreadImportant : void 0) }), null != (t = null == T ? void 0 : T(As)) ? t : As]
                      })
                  });
              })
            : null;
