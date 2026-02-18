i.d(t, { A: () => u });
var l = i(627968);
i(64700);
var n = i(503698),
    a = i.n(n),
    s = i(397927),
    r = i(659612),
    c = i(898612),
    d = i(232492),
    o = i(53605);
function u(e) {
    let { benefit: t, guildId: i } = e,
        n = (0, d.A)(i, t.ref_id),
        u = (0, l.jsx)(r.A, { guildId: i, emojiId: t.emoji_id, emojiName: t.emoji_name }),
        m =
            null != n
                ? (0, l.jsx)(s.DUT, {
                      className: o.__invalid_channelLink,
                      onClick: n.navigateToChannel,
                      "aria-label": n.ariaLabel,
                      role: "link",
                      children: (0, l.jsx)(s.Text, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: a()(o.UU, o.F$),
                          children: (0, c.A)(t),
                      }),
                  })
                : (0, l.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: o.UU,
                      children: (0, c.A)(t),
                  });
    return (0, l.jsxs)("div", {
        className: o.kL,
        children: [
            (0, l.jsxs)("div", {
                className: o.op,
                children: [
                    m,
                    (0, l.jsx)(s.Text, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: o.qq, children: u }),
        ],
    });
}
