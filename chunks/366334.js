"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(659612),
    l = n(898612),
    u = n(232492),
    c = n(125695);
function d(e) {
    let { benefit: t, guildId: n } = e,
        i = (0, u.A)(n, t.ref_id),
        d = (0, r.jsx)(o.A, { guildId: n, emojiId: t.emoji_id, emojiName: t.emoji_name }),
        _ =
            null != i
                ? (0, r.jsx)(s.DUT, {
                      className: c.__invalid_channelLink,
                      onClick: i.navigateToChannel,
                      "aria-label": i.ariaLabel,
                      role: "link",
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-md/medium",
                          color: "text-strong",
                          className: a()(c.UU, c.F$),
                          children: (0, l.A)(t),
                      }),
                  })
                : (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: c.UU,
                      children: (0, l.A)(t),
                  });
    return (0, r.jsxs)("div", {
        className: c.kL,
        children: [
            (0, r.jsxs)("div", {
                className: c.op,
                children: [
                    _,
                    (0, r.jsx)(s.Text, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: c.qq, children: d }),
        ],
    });
}
