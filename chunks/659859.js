t.d(s, { HN: () => I, _W: () => M, _x: () => f });
var a = t(627968),
    n = t(64700),
    l = t(503698),
    i = t.n(l),
    r = t(460905),
    o = t(990078),
    c = t(939249),
    m = t(834730),
    d = t(565645),
    u = t(763754),
    h = t(930101),
    g = t(516287),
    x = t(888675),
    A = t(649963),
    N = t(486020),
    p = t(203982),
    j = t(395031),
    C = t(652215),
    v = t(985018),
    E = t(93072);
function I(e) {
    let { message: s, rendered: t } = e;
    return null == (0, j.Ys)(s.content)
        ? v.intl.format(v.t.k6Jc9Y, { username: null, usernameHook: () => null })
        : v.intl.format(v.t.IihHB0, { emojiPreview: t, emojiName: null, username: null, usernameHook: () => null });
}
function f(e) {
    let { message: s, className: t } = e,
        [l, r] = n.useState(!1),
        u = s.getChannelId(),
        h = (0, j.Ys)(s.content),
        g = n.useCallback(() => {
            null != h && (0, A.BB)(u, s.id, { id: h.id, name: h.name }, A.qN.MESSAGE);
        }, [u, h, s.id]);
    return null == h
        ? null
        : (0, a.jsx)(o.m, {
              asContainer: !0,
              "aria-label": !1,
              __unsupportedReactNodeAsText: (0, a.jsx)(d.A, {
                  emojiName: h.name,
                  size: "jumbo",
                  emojiId: h.id,
                  animated: h.animated,
                  isInteracting: !0,
                  channelId: u,
                  messageId: s.id,
              }),
              children: (0, a.jsx)(c.D, {
                  className: i()(t, E.qx),
                  onClick: g,
                  onMouseEnter: () => {
                      r(!0);
                  },
                  onMouseLeave: () => {
                      r(!1);
                  },
                  children: (0, a.jsx)(m.E, {
                      variant: "text-sm/semibold",
                      color: "text-subtle",
                      className: E.Ic,
                      children: v.intl.format(v.t.z5Rnl8, {
                          renderedEmoji: (0, a.jsx)(d.A, {
                              emojiName: h.name,
                              size: "default",
                              emojiId: h.id,
                              animated: h.animated,
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
        [o, d] = n.useState(!1),
        A = (0, u.Ay)(s),
        I = l(A),
        f = (0, j.Ys)(i),
        M = n.useCallback(() => {
            null != f &&
                p._.dispatchToLastSubscribed(C.jej.INSERT_TEXT, { plainText: `:${f.name}:`, rawText: i, addSpace: !0 });
        }, [f, i]),
        _ = n.useMemo(
            () =>
                null == f
                    ? null
                    : {
                          src: N.Ay.getEmojiURL({ id: f.id, animated: f.animated, size: 48 }),
                          emojiId: f.id,
                          name: `:${f.name}:`,
                          animated: f.animated,
                      },
            [f],
        );
    return (0, a.jsx)(g.x, {
        value: o,
        children: (0, a.jsx)(x.A, {
            iconNode: (0, a.jsx)(r.n, { size: "refresh_sm", color: "currentColor" }),
            iconContainerClassName: E.zc,
            timestamp: s.timestamp,
            compact: t,
            contentClassName: E.Qs,
            children: (0, a.jsx)("span", {
                children:
                    null == f || null == _
                        ? v.intl.format(v.t.k6Jc9Y, { username: A.nick, usernameHook: I })
                        : v.intl.format(v.t.IihHB0, {
                              username: A.nick,
                              usernameHook: I,
                              emojiPreview: (0, a.jsx)(h.X, { node: _ }),
                              emojiName: (0, a.jsx)(c.D, {
                                  className: E.hX,
                                  tag: "span",
                                  onClick: M,
                                  onMouseEnter: () => d(!0),
                                  onMouseLeave: () => d(!1),
                                  children: (0, a.jsx)(m.E, {
                                      tag: "span",
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: `:${f.name}:`,
                                  }),
                              }),
                          }),
            }),
        }),
    });
}
