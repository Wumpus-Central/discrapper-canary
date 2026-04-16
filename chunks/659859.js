t.d(s, { HN: () => I, _W: () => M, _x: () => v });
var n = t(627968),
    a = t(64700),
    l = t(503698),
    i = t.n(l),
    r = t(934551),
    o = t(990078),
    c = t(397927),
    m = t(565645),
    u = t(763754),
    d = t(930101),
    h = t(516287),
    g = t(888675),
    x = t(649963),
    N = t(486020),
    A = t(203982),
    C = t(395031),
    j = t(652215),
    p = t(985018),
    E = t(778912);
function I(e) {
    let { message: s, rendered: t } = e;
    return null == (0, C.Ys)(s.content)
        ? p.intl.format(p.t.k6Jc9Y, { username: null, usernameHook: () => null })
        : p.intl.format(p.t.IihHB0, { emojiPreview: t, emojiName: null, username: null, usernameHook: () => null });
}
function v(e) {
    let { message: s, className: t } = e,
        [l, r] = a.useState(!1),
        u = s.getChannelId(),
        d = (0, C.Ys)(s.content),
        h = a.useCallback(() => {
            null != d && (0, x.BB)(u, s.id, { id: d.id, name: d.name }, x.qN.MESSAGE);
        }, [u, d, s.id]);
    return null == d
        ? null
        : (0, n.jsx)(o.m, {
              asContainer: !0,
              "aria-label": !1,
              __unsupportedReactNodeAsText: (0, n.jsx)(m.A, {
                  emojiName: d.name,
                  size: "jumbo",
                  emojiId: d.id,
                  animated: d.animated,
                  isInteracting: !0,
                  channelId: u,
                  messageId: s.id,
              }),
              children: (0, n.jsx)(c.DUT, {
                  className: i()(t, E.qx),
                  onClick: h,
                  onMouseEnter: () => {
                      r(!0);
                  },
                  onMouseLeave: () => {
                      r(!1);
                  },
                  children: (0, n.jsx)(c.Text, {
                      variant: "text-sm/semibold",
                      color: "text-subtle",
                      className: E.Ic,
                      children: p.intl.format(p.t.z5Rnl8, {
                          renderedEmoji: (0, n.jsx)(m.A, {
                              emojiName: d.name,
                              size: "default",
                              emojiId: d.id,
                              animated: d.animated,
                              isInteracting: l,
                              channelId: u,
                              messageId: s.id,
                              className: E.ti,
                          }),
                      }),
                  }),
              }),
          });
}
function M(e) {
    let { message: s, compact: t, usernameHook: l } = e,
        i = s.content,
        [o, m] = a.useState(!1),
        x = (0, u.Ay)(s),
        I = l(x),
        v = (0, C.Ys)(i),
        M = a.useCallback(() => {
            null != v &&
                A._.dispatchToLastSubscribed(j.jej.INSERT_TEXT, { plainText: `:${v.name}:`, rawText: i, addSpace: !0 });
        }, [v, i]),
        S = a.useMemo(
            () =>
                null == v
                    ? null
                    : {
                          src: N.Ay.getEmojiURL({ id: v.id, animated: v.animated, size: 48 }),
                          emojiId: v.id,
                          name: `:${v.name}:`,
                          animated: v.animated,
                      },
            [v],
        );
    return (0, n.jsx)(h.x, {
        value: o,
        children: (0, n.jsx)(g.A, {
            iconNode: (0, n.jsx)(r.ReactionIcon, { size: "refresh_sm", color: "currentColor" }),
            iconContainerClassName: E.zc,
            timestamp: s.timestamp,
            compact: t,
            contentClassName: E.Qs,
            children: (0, n.jsx)("span", {
                children:
                    null == v || null == S
                        ? p.intl.format(p.t.k6Jc9Y, { username: x.nick, usernameHook: I })
                        : p.intl.format(p.t.IihHB0, {
                              username: x.nick,
                              usernameHook: I,
                              emojiPreview: (0, n.jsx)(d.X, { node: S }),
                              emojiName: (0, n.jsx)(c.DUT, {
                                  className: E.hX,
                                  tag: "span",
                                  onClick: M,
                                  onMouseEnter: () => m(!0),
                                  onMouseLeave: () => m(!1),
                                  children: (0, n.jsx)(c.Text, {
                                      tag: "span",
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: `:${v.name}:`,
                                  }),
                              }),
                          }),
            }),
        }),
    });
}
