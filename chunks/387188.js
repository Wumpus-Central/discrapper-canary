(n.d(t, {
    Zh: () => O,
    e: () => v,
    iq: () => b
}),
    n(388685));
var s = n(255367),
    a = n(73800),
    r = n(120356),
    l = n.n(r),
    i = n(657707),
    o = n(481060),
    c = n(596454),
    u = n(739566),
    m = n(590956),
    d = n(834129),
    p = n(222677),
    g = n(768581),
    h = n(585483),
    j = n(139688),
    x = n(981631),
    f = n(388032),
    C = n(841935);
function O(e) {
    let { message: t, rendered: n } = e;
    return null == (0, j.xE)(t.content) ? f.intl.string(f.t['lcP/KC']) : f.intl.format(f.t.DzUzkZ, { emoji: n });
}
function v(e) {
    let { message: t, className: n } = e,
        [r, i] = a.useState(!1),
        u = t.getChannelId(),
        m = (0, j.xE)(t.content),
        d = a.useCallback(() => {
            null != m &&
                (0, p.rU)(
                    u,
                    t.id,
                    {
                        id: m.id,
                        name: m.name
                    },
                    p.TW.MESSAGE
                );
        }, [u, m, t.id]);
    return null == m
        ? null
        : (0, s.jsx)(o.ua7, {
              'aria-label': !1,
              text: (0, s.jsx)(c.Z, {
                  emojiName: m.name,
                  size: 'jumbo',
                  emojiId: m.id,
                  animated: m.animated,
                  isInteracting: !0,
                  channelId: u,
                  messageId: t.id
              }),
              children: (e) => {
                  var a,
                      p,
                      { onMouseEnter: g, onMouseLeave: h } = e,
                      j = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              s,
                              a = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      s,
                                      a = {},
                                      r = Object.keys(e);
                                  for (s = 0; s < r.length; s++) ((n = r[s]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                  return a;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              for (s = 0; s < r.length; s++) ((n = r[s]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
                          }
                          return a;
                      })(e, ['onMouseEnter', 'onMouseLeave']);
                  return (0, s.jsx)(
                      o.P3F,
                      ((a = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  s = Object.keys(n);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (s = s.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  s.forEach(function (t) {
                                      var s;
                                      ((s = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: s,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = s));
                                  }));
                          }
                          return e;
                      })({}, j)),
                      (p = p =
                          {
                              className: l()(n, C.ctaReactionButton),
                              onClick: d,
                              onMouseEnter: () => {
                                  (i(!0), null == g || g());
                              },
                              onMouseLeave: () => {
                                  (i(!1), null == h || h());
                              },
                              children: (0, s.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-secondary',
                                  className: C.ctaText,
                                  children: f.intl.format(f.t.z5Rnl5, {
                                      renderedEmoji: (0, s.jsx)(c.Z, {
                                          emojiName: m.name,
                                          size: 'default',
                                          emojiId: m.id,
                                          animated: m.animated,
                                          isInteracting: r,
                                          channelId: u,
                                          messageId: t.id,
                                          className: C.ctaEmoji
                                      })
                                  })
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(p))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var s = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, s);
                                }
                                return n;
                            })(Object(p)).forEach(function (e) {
                                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(p, e));
                            }),
                      a)
                  );
              }
          });
}
function b(e) {
    var t;
    let { message: n, compact: r, usernameHook: l } = e,
        c = n.content,
        [p, O] = a.useState(!1),
        v = (0, u.ZP)(n),
        b = l(v),
        y = (0, j.xE)(c),
        P = a.useCallback(() => {
            null != y &&
                h.S.dispatchToLastSubscribed(x.CkL.INSERT_TEXT, {
                    plainText: ':'.concat(y.name, ':'),
                    rawText: c,
                    addSpace: !0
                });
        }, [y, c]),
        E = a.useMemo(() => {
            var e;
            return null == y
                ? null
                : {
                      src: g.ZP.getEmojiURL({
                          id: y.id,
                          animated: y.animated,
                          size: 48
                      }),
                      emojiId: y.id,
                      name: ':'.concat(null != (e = y.originalName) ? e : y.name, ':'),
                      animated: y.animated
                  };
        }, [y]);
    return (0, s.jsx)(d.Z, {
        iconNode: (0, s.jsx)(i.EO4, {
            size: 'refresh_sm',
            color: 'currentColor'
        }),
        iconContainerClassName: C.iconContainer,
        timestamp: n.timestamp,
        compact: r,
        contentClassName: C.content,
        children: (0, s.jsx)('span', {
            children:
                null == y || null == E
                    ? f.intl.format(f.t.k6Jc9f, {
                          username: v.nick,
                          usernameHook: b
                      })
                    : f.intl.format(f.t.IihHBw, {
                          username: v.nick,
                          usernameHook: b,
                          emojiPreview: (0, s.jsx)(m.Y, {
                              node: E,
                              isInteracting: p
                          }),
                          emojiName: (0, s.jsx)(o.P3F, {
                              className: C.clickableEmoji,
                              tag: 'span',
                              onClick: P,
                              onMouseEnter: () => O(!0),
                              onMouseLeave: () => O(!1),
                              children: (0, s.jsx)(o.Text, {
                                  tag: 'span',
                                  variant: 'text-md/medium',
                                  color: 'text-primary',
                                  children: ':'.concat(null != (t = y.originalName) ? t : y.name, ':')
                              })
                          })
                      })
        })
    });
}
