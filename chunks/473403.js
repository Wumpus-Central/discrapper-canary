n.d(t, {
    ZP: () => k,
    _W: () => j,
    ge: () => L,
    je: () => x
});
var r = n(255367),
    a = n(73800),
    i = n(120356),
    o = n.n(i);
if (12633 == n.j) var l = n(91192);
var c = n(442837),
    s = n(481060),
    u = n(43267),
    _ = n(933557),
    d = n(471445),
    f = n(111028),
    m = n(727429),
    p = n(810123),
    g = n(690221),
    v = n(430824),
    b = n(158776),
    h = n(111583),
    I = n(594174),
    y = n(998502),
    S = n(981631),
    E = n(490897),
    C = n(915887),
    P = n(768107);
function O(e) {
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
function A(e, t) {
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
let N = {
    SELECTED: P.modeSelected,
    CONNECTED: P.modeConnected,
    UNREAD_IMPORTANT: P.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: P.modeUnreadLessImportant,
    MUTED: P.modeMuted,
    LOCKED: P.modeLocked
};
function w(e) {
    e.preventDefault(), e.stopPropagation();
}
let T = y.ZP.getEnableHardwareAcceleration() ? s.Xo$ : s.qEK;
function L(e) {
    let { channel: t, size: n = s.EFr.SIZE_20 } = e;
    return (0, r.jsx)(T, {
        src: (0, u.x)(t),
        'aria-hidden': !0,
        size: n
    });
}
function x(e) {
    let { channel: t, size: n = s.EFr.SIZE_20 } = e,
        a = (0, c.e7)([I.default], () => I.default.getUser(null == t ? void 0 : t.recipients[0])),
        i = (0, c.e7)([h.Z], () => !(null == a || null == t || t.isMultiUserDM()) && null != h.Z.getTypingUsers(null == t ? void 0 : t.id)[null == a ? void 0 : a.id]),
        { status: o, isMobile: l } = (0, c.cj)([b.Z], () =>
            null == a || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: b.Z.getStatus(a.id),
                      isMobile: b.Z.isMobileOnline(a.id)
                  }
        );
    return (0, r.jsx)(T, {
        size: n,
        src: null == a ? void 0 : a.getAvatarURL(void 0, 40),
        status: o,
        isMobile: l,
        isTyping: i,
        'aria-label': null == a ? void 0 : a.username,
        statusTooltip: !0
    });
}
let j = (e) => {
        let { className: t, containerClassName: n, channel: a, locked: i, hasActiveThreads: l, withGuildIcon: u } = e,
            _ = (0, c.e7)([v.Z], () => v.Z.getGuild(a.guild_id), [a.guild_id]),
            f = a.type === S.d4z.DM || a.type === S.d4z.GROUP_DM,
            m = null;
        if (u && null != _ && !f)
            m = (0, r.jsx)(p.Z, {
                size: p.E.SMALL_32,
                className: P.iconContainerWithGuildIcon,
                iconClassName: P.iconWithGuildIcon,
                channel: a,
                guild: _,
                locked: i,
                hasActiveThreads: l
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case S.d4z.DM:
                        return function () {
                            return (0, r.jsx)(x, { channel: e });
                        };
                    case S.d4z.GROUP_DM:
                        return function () {
                            return (0, r.jsx)(L, { channel: e });
                        };
                    default:
                        return (0, d.KS)(e, t, n);
                }
            })(a, _, {
                locked: i,
                hasActiveThreads: l
            });
            if (null == e) return null;
            m = (0, r.jsx)(e, {
                color: 'currentColor',
                className: o()(P.icon, t)
            });
        }
        let g = u ? (null == _ ? void 0 : _.name) : (0, d.bT)(a, _, i, l),
            b = u && null != _ ? ''.concat(_.name, ' - ').concat(g, ' icon') : ''.concat(g, ' icon');
        return (0, r.jsx)(s.ua7, {
            text: g,
            delay: 500,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    A(O({}, e), {
                        role: 'img',
                        'aria-label': b,
                        className: o()(P.iconContainer, n),
                        children: m
                    })
                )
        });
    },
    k =
        12633 == n.j
            ? a.forwardRef(function (e, t) {
                  var n;
                  let {
                          channel: i,
                          name: c,
                          muted: u,
                          selected: d,
                          connected: p,
                          unread: v,
                          locked: b,
                          hasActiveThreads: h,
                          onClick: I,
                          onMouseDown: y,
                          onMouseUp: T,
                          onContextMenu: L,
                          connectDragPreview: x,
                          className: k,
                          iconClassName: Z,
                          subtitle: D,
                          subtitleColor: R,
                          channel: { type: G },
                          onMouseEnter: B,
                          onMouseLeave: F,
                          'aria-label': M,
                          children: U,
                          guild: W,
                          channelTypeOverride: V,
                          forceInteractable: H,
                          mentionCount: Q,
                          resolvedUnreadSetting: z,
                          isFavoriteSuggestion: q,
                          withGuildIcon: Y,
                          hasActiveEvent: X = !1
                      } = e,
                      K = z === E.i.ALL_MESSAGES || (null != Q && Q > 0),
                      J = (0, l.JA)(i.id),
                      { role: $ } = J,
                      ee = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              a = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      a = {},
                                      i = Object.keys(e);
                                  for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                  return a;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                          }
                          return a;
                      })(J, ['role']),
                      et = a.useRef(null),
                      en = a.useRef(null),
                      er = (0, m.Z)(i),
                      ea = S.Z5c.CHANNEL(er, i.id),
                      ei = (0, _.ZP)(i),
                      eo = i.isGuildVocal(),
                      el = (0, r.jsx)('div', {
                          className: o()({ [P.favoritesSuggestion]: q }),
                          ref: en,
                          children: (0, r.jsxs)(
                              g.Z,
                              A(
                                  O(
                                      {
                                          role: eo && !p ? 'button' : 'link',
                                          href: eo ? void 0 : ea,
                                          target: '_blank',
                                          ref: et,
                                          className: P.link,
                                          onClick: () => (null == I ? void 0 : I(i))
                                      },
                                      ee
                                  ),
                                  {
                                      'aria-label': M,
                                      focusProps: { enabled: !1 },
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: P.linkTop,
                                              children: [
                                                  (0, r.jsx)(j, {
                                                      className: Z,
                                                      channel: i,
                                                      guild: W,
                                                      hasActiveThreads: h,
                                                      locked: b,
                                                      withGuildIcon: Y
                                                  }),
                                                  (0, r.jsx)(f.Z, {
                                                      className: o()(P.name, { [P.activeEvent]: X }),
                                                      'aria-hidden': !0,
                                                      children: null == c ? ei : c
                                                  }),
                                                  a.Children.count(U) > 0
                                                      ? (0, r.jsx)('div', {
                                                            onClick: w,
                                                            className: P.children,
                                                            children: U
                                                        })
                                                      : null
                                              ]
                                          }),
                                          null != D
                                              ? (0, r.jsx)('div', {
                                                    className: o()(P.linkBottom, { [P.withGuildIcon]: Y }),
                                                    children: (0, r.jsx)(s.Text, {
                                                        color: null != R ? R : 'text-muted',
                                                        variant: 'text-xs/medium',
                                                        className: P.subtitle,
                                                        children: D
                                                    })
                                                })
                                              : null
                                      ]
                                  }
                              )
                          )
                      });
                  return (0, r.jsx)(s.tEY, {
                      focusTarget: et,
                      ringTarget: en,
                      offset: {
                          top: 2,
                          bottom: 2,
                          right: 4
                      },
                      children: (0, r.jsxs)('div', {
                          ref: t,
                          className: o()(
                              k,
                              null != I || null != T || null != y || H ? P.wrapper : P.notInteractive,
                              (() => {
                                  if (d) return o()(C.selectedChannel, N.SELECTED);
                                  if (p) return o()(C.selectedChannel, N.CONNECTED);
                                  if (b) return N.LOCKED;
                                  if (u) return N.MUTED;
                                  if (v)
                                      if (K) return N.UNREAD_IMPORTANT;
                                      else return N.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case S.d4z.GUILD_STAGE_VOICE:
                                      case S.d4z.GUILD_VOICE:
                                          return P.typeVoice;
                                      case S.d4z.ANNOUNCEMENT_THREAD:
                                      case S.d4z.PUBLIC_THREAD:
                                      case S.d4z.PRIVATE_THREAD:
                                          return P.typeThread;
                                      case S.d4z.GUILD_ANNOUNCEMENT:
                                      case S.d4z.GUILD_TEXT:
                                      case S.d4z.GUILD_STORE:
                                      case S.d4z.GUILD_FORUM:
                                      case S.d4z.GUILD_MEDIA:
                                      default:
                                          return P.typeDefault;
                                  }
                              })(null != V ? V : G)
                          ),
                          onMouseUp: (e) => (null == T ? void 0 : T(e, i)),
                          onMouseDown: (e) => (null == y ? void 0 : y(e, i)),
                          onContextMenu: (e) => (null == L ? void 0 : L(e, i)),
                          onMouseEnter: B,
                          onMouseLeave: F,
                          children: [u || !v ? null : (0, r.jsx)('div', { className: o()(P.unread, K ? P.unreadImportant : void 0) }), null != (n = null == x ? void 0 : x(el)) ? n : el]
                      })
                  });
              })
            : null;
