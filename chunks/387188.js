n.d(t, {
    Zh: () => O,
    e: () => v,
    iq: () => S,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(657707),
    l = n(28664),
    c = n(481060),
    u = n(596454),
    d = n(739566),
    f = n(590956),
    p = n(834129),
    _ = n(222677),
    m = n(768581),
    h = n(585483),
    g = n(139688),
    E = n(981631),
    b = n(388032),
    y = n(434604);
function O(e) {
    let { message: t, rendered: n } = e;
    return null == (0, g.xE)(t.content)
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
function v(e) {
    let { message: t, className: n } = e,
        [a, s] = i.useState(!1),
        d = t.getChannelId(),
        f = (0, g.xE)(t.content),
        p = i.useCallback(() => {
            null != f &&
                (0, _.rU)(
                    d,
                    t.id,
                    {
                        id: f.id,
                        name: f.name,
                    },
                    _.TW.MESSAGE,
                );
        }, [d, f, t.id]);
    return null == f
        ? null
        : (0, r.jsx)(l.u, {
              asContainer: !0,
              "aria-label": !1,
              __unsupportedReactNodeAsText: (0, r.jsx)(u.Z, {
                  emojiName: f.name,
                  size: "jumbo",
                  emojiId: f.id,
                  animated: f.animated,
                  isInteracting: !0,
                  channelId: d,
                  messageId: t.id,
              }),
              children: (0, r.jsx)(c.P3F, {
                  className: o()(n, y.ctaReactionButton),
                  onClick: p,
                  onMouseEnter: () => {
                      s(!0);
                  },
                  onMouseLeave: () => {
                      s(!1);
                  },
                  children: (0, r.jsx)(c.Text, {
                      variant: "text-sm/semibold",
                      color: "text-subtle",
                      className: y.ctaText,
                      children: b.intl.format(b.t.z5Rnl8, {
                          renderedEmoji: (0, r.jsx)(u.Z, {
                              emojiName: f.name,
                              size: "default",
                              emojiId: f.id,
                              animated: f.animated,
                              isInteracting: a,
                              channelId: d,
                              messageId: t.id,
                              className: y.ctaEmoji,
                          }),
                      }),
                  }),
              }),
          });
}
function S(e) {
    let { message: t, compact: n, usernameHook: a } = e,
        o = t.content,
        [l, u] = i.useState(!1),
        _ = (0, d.ZP)(t),
        O = a(_),
        v = (0, g.xE)(o),
        S = i.useCallback(() => {
            null != v &&
                h.S.dispatchToLastSubscribed(E.CkL.INSERT_TEXT, {
                    plainText: ":".concat(v.name, ":"),
                    rawText: o,
                    addSpace: !0,
                });
        }, [v, o]),
        I = i.useMemo(
            () =>
                null == v
                    ? null
                    : {
                          src: m.ZP.getEmojiURL({
                              id: v.id,
                              animated: v.animated,
                              size: 48,
                          }),
                          emojiId: v.id,
                          name: ":".concat(v.name, ":"),
                          animated: v.animated,
                      },
            [v],
        );
    return (0, r.jsx)(p.Z, {
        iconNode: (0, r.jsx)(s.EO4, {
            size: "refresh_sm",
            color: "currentColor",
        }),
        iconContainerClassName: y.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        contentClassName: y.content,
        children: (0, r.jsx)("span", {
            children:
                null == v || null == I
                    ? b.intl.format(b.t.k6Jc9Y, {
                          username: _.nick,
                          usernameHook: O,
                      })
                    : b.intl.format(b.t.IihHB0, {
                          username: _.nick,
                          usernameHook: O,
                          emojiPreview: (0, r.jsx)(f.Y, {
                              node: I,
                              isInteracting: l,
                          }),
                          emojiName: (0, r.jsx)(c.P3F, {
                              className: y.clickableEmoji,
                              tag: "span",
                              onClick: S,
                              onMouseEnter: () => u(!0),
                              onMouseLeave: () => u(!1),
                              children: (0, r.jsx)(c.Text, {
                                  tag: "span",
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: ":".concat(v.name, ":"),
                              }),
                          }),
                      }),
        }),
    });
}
