n.d(t, {
    Zh: () => A,
    e: () => N,
    iq: () => C,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(657707),
    l = n(481060),
    c = n(596454),
    u = n(739566),
    d = n(590956),
    f = n(834129),
    _ = n(222677),
    p = n(768581),
    h = n(585483),
    m = n(139688),
    g = n(981631),
    E = n(388032),
    b = n(871130);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function A(e) {
    let { message: t, rendered: n } = e;
    return null == (0, m.xE)(t.content)
        ? E.intl.format(E.t.k6Jc9f, {
              username: null,
              usernameHook: () => null,
          })
        : E.intl.format(E.t.IihHBw, {
              emojiPreview: n,
              emojiName: null,
              username: null,
              usernameHook: () => null,
          });
}
function N(e) {
    let { message: t, className: n } = e,
        [o, s] = i.useState(!1),
        u = t.getChannelId(),
        d = (0, m.xE)(t.content),
        f = i.useCallback(() => {
            null != d &&
                (0, _.rU)(
                    u,
                    t.id,
                    {
                        id: d.id,
                        name: d.name,
                    },
                    _.TW.MESSAGE,
                );
        }, [u, d, t.id]);
    return null == d
        ? null
        : (0, r.jsx)(l.ua7, {
              "aria-label": !1,
              text: (0, r.jsx)(c.Z, {
                  emojiName: d.name,
                  size: "jumbo",
                  emojiId: d.id,
                  animated: d.animated,
                  isInteracting: !0,
                  channelId: u,
                  messageId: t.id,
              }),
              children: (e) => {
                  var { onMouseEnter: i, onMouseLeave: _ } = e,
                      p = T(e, ["onMouseEnter", "onMouseLeave"]);
                  return (0, r.jsx)(
                      l.P3F,
                      I(O({}, p), {
                          className: a()(n, b.ctaReactionButton),
                          onClick: f,
                          onMouseEnter: () => {
                              s(!0), null == i || i();
                          },
                          onMouseLeave: () => {
                              s(!1), null == _ || _();
                          },
                          children: (0, r.jsx)(l.Text, {
                              variant: "text-sm/semibold",
                              color: "text-secondary",
                              className: b.ctaText,
                              children: E.intl.format(E.t.z5Rnl5, {
                                  renderedEmoji: (0, r.jsx)(c.Z, {
                                      emojiName: d.name,
                                      size: "default",
                                      emojiId: d.id,
                                      animated: d.animated,
                                      isInteracting: o,
                                      channelId: u,
                                      messageId: t.id,
                                      className: b.ctaEmoji,
                                  }),
                              }),
                          }),
                      }),
                  );
              },
          });
}
function C(e) {
    var t;
    let { message: n, compact: o, usernameHook: a } = e,
        c = n.content,
        [_, y] = i.useState(!1),
        O = (0, u.ZP)(n),
        v = a(O),
        I = (0, m.xE)(c),
        T = i.useCallback(() => {
            null != I &&
                h.S.dispatchToLastSubscribed(g.CkL.INSERT_TEXT, {
                    plainText: ":".concat(I.name, ":"),
                    rawText: c,
                    addSpace: !0,
                });
        }, [I, c]),
        S = i.useMemo(() => {
            var e;
            return null == I
                ? null
                : {
                      src: p.ZP.getEmojiURL({
                          id: I.id,
                          animated: I.animated,
                          size: 48,
                      }),
                      emojiId: I.id,
                      name: ":".concat(null != (e = I.originalName) ? e : I.name, ":"),
                      animated: I.animated,
                  };
        }, [I]);
    return (0, r.jsx)(f.Z, {
        iconNode: (0, r.jsx)(s.EO4, {
            size: "refresh_sm",
            color: "currentColor",
        }),
        iconContainerClassName: b.iconContainer,
        timestamp: n.timestamp,
        compact: o,
        contentClassName: b.content,
        children: (0, r.jsx)("span", {
            children:
                null == I || null == S
                    ? E.intl.format(E.t.k6Jc9f, {
                          username: O.nick,
                          usernameHook: v,
                      })
                    : E.intl.format(E.t.IihHBw, {
                          username: O.nick,
                          usernameHook: v,
                          emojiPreview: (0, r.jsx)(d.Y, {
                              node: S,
                              isInteracting: _,
                          }),
                          emojiName: (0, r.jsx)(l.P3F, {
                              className: b.clickableEmoji,
                              tag: "span",
                              onClick: T,
                              onMouseEnter: () => y(!0),
                              onMouseLeave: () => y(!1),
                              children: (0, r.jsx)(l.Text, {
                                  tag: "span",
                                  variant: "text-md/medium",
                                  color: "text-primary",
                                  children: ":".concat(null != (t = I.originalName) ? t : I.name, ":"),
                              }),
                          }),
                      }),
        }),
    });
}
