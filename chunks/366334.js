n.d(t, {
    A: () => d,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(659612),
    l = n(898612),
    c = n(232492),
    u = n(53605);

function d(e) {
    let { benefit: t, guildId: n } = e,
        i = (0, c.A)(n, t.ref_id),
        d = (0, r.jsx)(o.A, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name,
        }),
        f =
            null != i
                ? (0, r.jsx)(s.DUT, {
                      className: u.__invalid_channelLink,
                      onClick: i.navigateToChannel,
                      "aria-label": i.ariaLabel,
                      role: "link",
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: a()(u.UU, u.F$),
                          children: (0, l.A)(t),
                      }),
                  })
                : (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: u.UU,
                      children: (0, l.A)(t),
                  });
    return (0, r.jsxs)("div", {
        className: u.kL,
        children: [
            (0, r.jsxs)("div", {
                className: u.op,
                children: [
                    f,
                    (0, r.jsx)(s.Text, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u.qq,
                children: d,
            }),
        ],
    });
}
