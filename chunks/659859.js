n.d(t, {
    HN: () => O,
    _W: () => v,
    _x: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(934551),
    l = n(990078),
    c = n(397927),
    u = n(565645),
    d = n(763754),
    f = n(930101),
    p = n(888675),
    _ = n(649963),
    h = n(486020),
    m = n(203982),
    g = n(395031),
    E = n(652215),
    b = n(985018),
    y = n(696007);
function O(e) {
    let { message: t, rendered: n } = e;
    return null == (0, g.Ys)(t.content)
        ? b.intl.format(b.t.k6Jc9Y, {
              username: null,
              usernameHook: () => null,
          })
        : b.intl.format(b.t.IihHB0, {
              emojiPreview: n,
              emojiName: null,
              username: null,
              usernameHook: () => null,
          });
}
function A(e) {
    let { message: t, className: n } = e,
        [a, o] = i.useState(!1),
        d = t.getChannelId(),
        f = (0, g.Ys)(t.content),
        p = i.useCallback(() => {
            null != f &&
                (0, _.BB)(
                    d,
                    t.id,
                    {
                        id: f.id,
                        name: f.name,
                    },
                    _.qN.MESSAGE,
                );
        }, [d, f, t.id]);
    return null == f
        ? null
        : (0, r.jsx)(l.m, {
              asContainer: !0,
              "aria-label": !1,
              __unsupportedReactNodeAsText: (0, r.jsx)(u.A, {
                  emojiName: f.name,
                  size: "jumbo",
                  emojiId: f.id,
                  animated: f.animated,
                  isInteracting: !0,
                  channelId: d,
                  messageId: t.id,
              }),
              children: (0, r.jsx)(c.DUT, {
                  className: s()(n, y.qx),
                  onClick: p,
                  onMouseEnter: () => {
                      o(!0);
                  },
                  onMouseLeave: () => {
                      o(!1);
                  },
                  children: (0, r.jsx)(c.Text, {
                      variant: "text-sm/semibold",
                      color: "text-subtle",
                      className: y.Ic,
                      children: b.intl.format(b.t.z5Rnl8, {
                          renderedEmoji: (0, r.jsx)(u.A, {
                              emojiName: f.name,
                              size: "default",
                              emojiId: f.id,
                              animated: f.animated,
                              isInteracting: a,
                              channelId: d,
                              messageId: t.id,
                              className: y.ti,
                          }),
                      }),
                  }),
              }),
          });
}
function v(e) {
    let { message: t, compact: n, usernameHook: a } = e,
        s = t.content,
        [l, u] = i.useState(!1),
        _ = (0, d.Ay)(t),
        O = a(_),
        A = (0, g.Ys)(s),
        v = i.useCallback(() => {
            null != A &&
                m._.dispatchToLastSubscribed(E.jej.INSERT_TEXT, {
                    plainText: ":".concat(A.name, ":"),
                    rawText: s,
                    addSpace: !0,
                });
        }, [A, s]),
        S = i.useMemo(
            () =>
                null == A
                    ? null
                    : {
                          src: h.Ay.getEmojiURL({
                              id: A.id,
                              animated: A.animated,
                              size: 48,
                          }),
                          emojiId: A.id,
                          name: ":".concat(A.name, ":"),
                          animated: A.animated,
                      },
            [A],
        );
    return (0, r.jsx)(p.A, {
        iconNode: (0, r.jsx)(o.ReactionIcon, {
            size: "refresh_sm",
            color: "currentColor",
        }),
        iconContainerClassName: y.zc,
        timestamp: t.timestamp,
        compact: n,
        contentClassName: y.Qs,
        children: (0, r.jsx)("span", {
            children:
                null == A || null == S
                    ? b.intl.format(b.t.k6Jc9Y, {
                          username: _.nick,
                          usernameHook: O,
                      })
                    : b.intl.format(b.t.IihHB0, {
                          username: _.nick,
                          usernameHook: O,
                          emojiPreview: (0, r.jsx)(f.X, {
                              node: S,
                              isInteracting: l,
                          }),
                          emojiName: (0, r.jsx)(c.DUT, {
                              className: y.hX,
                              tag: "span",
                              onClick: v,
                              onMouseEnter: () => u(!0),
                              onMouseLeave: () => u(!1),
                              children: (0, r.jsx)(c.Text, {
                                  tag: "span",
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: ":".concat(A.name, ":"),
                              }),
                          }),
                      }),
        }),
    });
}
