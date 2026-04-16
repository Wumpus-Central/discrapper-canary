t.d(s, { HN: () => I, _W: () => v, _x: () => E });
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
    x = t(486020),
    N = t(203982),
    A = t(395031),
    C = t(652215),
    j = t(985018),
    p = t(778912);
function I(e) {
    let { message: s, rendered: t } = e;
    return null == (0, A.Ys)(s.content)
        ? j.intl.format(j.t.k6Jc9Y, { username: null, usernameHook: () => null })
        : j.intl.format(j.t.IihHB0, { emojiPreview: t, emojiName: null, username: null, usernameHook: () => null });
}
function E(e) {
    let { message: s, className: t } = e,
        [l, r] = a.useState(!1),
        u = s.getChannelId(),
        d = (0, A.Ys)(s.content),
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
                  className: i()(t, p.qx),
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
                      className: p.Ic,
                      children: j.intl.format(j.t.z5Rnl8, {
                          renderedEmoji: (0, n.jsx)(m.A, {
                              emojiName: d.name,
                              size: "default",
                              emojiId: d.id,
                              animated: d.animated,
                              isInteracting: l,
                              channelId: u,
                              messageId: s.id,
                              className: p.ti,
                          }),
                      }),
                  }),
              }),
          });
}
function v(e) {
    let { message: s, compact: t, usernameHook: l } = e,
        i = s.content,
        [o, m] = a.useState(!1),
        g = (0, u.Ay)(s),
        I = l(g),
        E = (0, A.Ys)(i),
        v = a.useCallback(() => {
            null != E &&
                N._.dispatchToLastSubscribed(C.jej.INSERT_TEXT, { plainText: `:${E.name}:`, rawText: i, addSpace: !0 });
        }, [E, i]),
        M = a.useMemo(
            () =>
                null == E
                    ? null
                    : {
                          src: x.Ay.getEmojiURL({ id: E.id, animated: E.animated, size: 48 }),
                          emojiId: E.id,
                          name: `:${E.name}:`,
                          animated: E.animated,
                      },
            [E],
        );
    return (0, n.jsx)(h.A, {
        iconNode: (0, n.jsx)(r.ReactionIcon, { size: "refresh_sm", color: "currentColor" }),
        iconContainerClassName: p.zc,
        timestamp: s.timestamp,
        compact: t,
        contentClassName: p.Qs,
        children: (0, n.jsx)("span", {
            children:
                null == E || null == M
                    ? j.intl.format(j.t.k6Jc9Y, { username: g.nick, usernameHook: I })
                    : j.intl.format(j.t.IihHB0, {
                          username: g.nick,
                          usernameHook: I,
                          emojiPreview: (0, n.jsx)(d.X, { node: M, isInteracting: o }),
                          emojiName: (0, n.jsx)(c.DUT, {
                              className: p.hX,
                              tag: "span",
                              onClick: v,
                              onMouseEnter: () => m(!0),
                              onMouseLeave: () => m(!1),
                              children: (0, n.jsx)(c.Text, {
                                  tag: "span",
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: `:${E.name}:`,
                              }),
                          }),
                      }),
        }),
    });
}
