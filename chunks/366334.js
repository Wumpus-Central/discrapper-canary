i.d(t, { A: () => m });
var l = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(939249),
    r = i(834730),
    c = i(659612),
    d = i(898612),
    o = i(232492),
    u = i(740012);
function m(e) {
    let { benefit: t, guildId: i } = e,
        n = (0, o.A)(i, t.ref_id),
        m = (0, l.jsx)(c.A, { guildId: i, emojiId: t.emoji_id, emojiName: t.emoji_name }),
        x =
            null != n
                ? (0, l.jsx)(a.D, {
                      className: u.__invalid_channelLink,
                      onClick: n.navigateToChannel,
                      "aria-label": n.ariaLabel,
                      role: "link",
                      children: (0, l.jsx)(r.E, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: s()(u.UU, u.F$),
                          children: (0, d.A)(t),
                      }),
                  })
                : (0, l.jsx)(r.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: u.UU,
                      children: (0, d.A)(t),
                  });
    return (0, l.jsxs)("div", {
        className: u.kL,
        children: [
            (0, l.jsxs)("div", {
                className: u.op,
                children: [
                    x,
                    (0, l.jsx)(r.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: u.qq, children: m }),
        ],
    });
}
