t.d(s, { HN: () => E, _W: () => _, _x: () => I });
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
    h = t(888675),
    g = t(649963),
    A = t(486020),
    x = t(203982),
    N = t(395031),
    C = t(652215),
    p = t(985018),
    j = t(696007);
function E(e) {
    let { message: s, rendered: t } = e;
    return null == (0, N.Ys)(s.content)
        ? p.intl.format(p.t.k6Jc9Y, { username: null, usernameHook: () => null })
        : p.intl.format(p.t.IihHB0, { emojiPreview: t, emojiName: null, username: null, usernameHook: () => null });
}
function I(e) {
    let { message: s, className: t } = e,
        [l, r] = a.useState(!1),
        u = s.getChannelId(),
        d = (0, N.Ys)(s.content),
        h = a.useCallback(() => {
            null != d && (0, g.BB)(u, s.id, { id: d.id, name: d.name }, g.qN.MESSAGE);
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
                  className: i()(t, j.qx),
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
                      className: j.Ic,
                      children: p.intl.format(p.t.z5Rnl8, {
                          renderedEmoji: (0, n.jsx)(m.A, {
                              emojiName: d.name,
                              size: "default",
                              emojiId: d.id,
                              animated: d.animated,
                              isInteracting: l,
                              channelId: u,
                              messageId: s.id,
                              className: j.ti,
                          }),
                      }),
                  }),
              }),
          });
}
function _(e) {
    let { message: s, compact: t, usernameHook: l } = e,
        i = s.content,
        [o, m] = a.useState(!1),
        g = (0, u.Ay)(s),
        E = l(g),
        I = (0, N.Ys)(i),
        _ = a.useCallback(() => {
            null != I &&
                x._.dispatchToLastSubscribed(C.jej.INSERT_TEXT, { plainText: `:${I.name}:`, rawText: i, addSpace: !0 });
        }, [I, i]),
        M = a.useMemo(
            () =>
                null == I
                    ? null
                    : {
                          src: A.Ay.getEmojiURL({ id: I.id, animated: I.animated, size: 48 }),
                          emojiId: I.id,
                          name: `:${I.name}:`,
                          animated: I.animated,
                      },
            [I],
        );
    return (0, n.jsx)(h.A, {
        iconNode: (0, n.jsx)(r.ReactionIcon, { size: "refresh_sm", color: "currentColor" }),
        iconContainerClassName: j.zc,
        timestamp: s.timestamp,
        compact: t,
        contentClassName: j.Qs,
        children: (0, n.jsx)("span", {
            children:
                null == I || null == M
                    ? p.intl.format(p.t.k6Jc9Y, { username: g.nick, usernameHook: E })
                    : p.intl.format(p.t.IihHB0, {
                          username: g.nick,
                          usernameHook: E,
                          emojiPreview: (0, n.jsx)(d.X, { node: M, isInteracting: o }),
                          emojiName: (0, n.jsx)(c.DUT, {
                              className: j.hX,
                              tag: "span",
                              onClick: _,
                              onMouseEnter: () => m(!0),
                              onMouseLeave: () => m(!1),
                              children: (0, n.jsx)(c.Text, {
                                  tag: "span",
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: `:${I.name}:`,
                              }),
                          }),
                      }),
        }),
    });
}
