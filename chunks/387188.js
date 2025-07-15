(n.d(t, {
    e: () => v,
    i: () => O
}),
    n(35282),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(657707),
    s = n(442837),
    c = n(481060),
    u = n(596454),
    d = n(739566),
    p = n(590956),
    m = n(834129),
    f = n(222677),
    _ = n(768581),
    h = n(585483),
    g = n(339085),
    b = n(981631),
    E = n(388032),
    y = n(841935);
let x = /^<(a?):(\w+):(\d+)>/;
function C(e) {
    let t = i.useMemo(() => {
        var t;
        return null == (t = x.exec(e)) ? void 0 : t[3];
    }, [e]);
    return (0, s.e7)([g.ZP], () => (null == t ? null : g.ZP.getCustomEmojiById(t)));
}
function v(e) {
    let { message: t, className: n } = e,
        [l, o] = i.useState(!1),
        s = t.getChannelId(),
        d = C(t.content),
        p = i.useCallback(() => {
            null != d &&
                (0, f.rU)(
                    s,
                    t.id,
                    {
                        id: d.id,
                        name: d.name
                    },
                    f.TW.MESSAGE
                );
        }, [s, d, t.id]);
    return null == d
        ? null
        : (0, r.jsx)(c.ua7, {
              'aria-label': !1,
              text: (0, r.jsx)(u.Z, {
                  emojiName: d.name,
                  size: 'jumbo',
                  emojiId: d.id,
                  animated: d.animated,
                  isInteracting: !0,
                  channelId: s,
                  messageId: t.id
              }),
              children: (e) => {
                  var i,
                      m,
                      { onMouseEnter: f, onMouseLeave: _ } = e,
                      h = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              i = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = {},
                                      l = Object.keys(e);
                                  for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                  return i;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                          }
                          return i;
                      })(e, ['onMouseEnter', 'onMouseLeave']);
                  return (0, r.jsx)(
                      c.P3F,
                      ((i = (function (e) {
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
                      })({}, h)),
                      (m = m =
                          {
                              className: a()(n, y.ctaReactionButton),
                              onClick: p,
                              onMouseEnter: () => {
                                  (o(!0), null == f || f());
                              },
                              onMouseLeave: () => {
                                  (o(!1), null == _ || _());
                              },
                              children: (0, r.jsx)(c.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'text-secondary',
                                  className: y.ctaText,
                                  children: E.intl.format(E.t.z5Rnl5, {
                                      renderedEmoji: (0, r.jsx)(u.Z, {
                                          emojiName: d.name,
                                          size: 'default',
                                          emojiId: d.id,
                                          animated: d.animated,
                                          isInteracting: l,
                                          channelId: s,
                                          messageId: t.id,
                                          className: y.ctaEmoji
                                      })
                                  })
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(m))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(m)).forEach(function (e) {
                                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(m, e));
                            }),
                      i)
                  );
              }
          });
}
function O(e) {
    var t;
    let { message: n, compact: l, usernameHook: a } = e,
        s = n.content,
        [u, f] = i.useState(!1),
        g = (0, d.ZP)(n),
        x = a(g),
        v = C(s),
        O = i.useCallback(() => {
            null != v &&
                h.S.dispatchToLastSubscribed(b.CkL.INSERT_TEXT, {
                    plainText: ':'.concat(v.name, ':'),
                    rawText: s,
                    addSpace: !0
                });
        }, [v, s]),
        j = i.useMemo(() => {
            var e;
            return null == v
                ? null
                : {
                      src: _.ZP.getEmojiURL({
                          id: v.id,
                          animated: v.animated,
                          size: 48
                      }),
                      emojiId: v.id,
                      name: ':'.concat(null != (e = v.originalName) ? e : v.name, ':'),
                      animated: v.animated
                  };
        }, [v]);
    return (0, r.jsx)(m.Z, {
        iconNode: (0, r.jsx)(o.EO4, {
            size: 'refresh_sm',
            color: 'currentColor'
        }),
        iconContainerClassName: y.iconContainer,
        timestamp: n.timestamp,
        compact: l,
        contentClassName: y.content,
        children: (0, r.jsx)('span', {
            children:
                null == v || null == j
                    ? E.intl.format(E.t.k6Jc9f, {
                          username: g.nick,
                          usernameHook: x
                      })
                    : E.intl.format(E.t.IihHBw, {
                          username: g.nick,
                          usernameHook: x,
                          emojiPreview: (0, r.jsx)(p.Y, {
                              node: j,
                              isInteracting: u
                          }),
                          emojiName: (0, r.jsx)(c.P3F, {
                              className: y.clickableEmoji,
                              tag: 'span',
                              onClick: O,
                              onMouseEnter: () => f(!0),
                              onMouseLeave: () => f(!1),
                              children: (0, r.jsx)(c.Text, {
                                  tag: 'span',
                                  variant: 'text-md/medium',
                                  color: 'text-primary',
                                  children: ':'.concat(null != (t = v.originalName) ? t : v.name, ':')
                              })
                          })
                      })
        })
    });
}
