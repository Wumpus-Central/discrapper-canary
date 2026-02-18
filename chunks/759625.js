i.d(t, { A: () => o });
var l = i(627968);
i(64700);
var n = i(397927),
    a = i(147925),
    s = i(659612),
    r = i(898612),
    c = i(232492),
    d = i(974105);
function o(e) {
    let { benefit: t, guildId: i, onClick: o } = e,
        u = (0, c.A)(i, t.ref_id),
        m = (0, l.jsx)(s.A, { guildId: i, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, l.jsxs)(n.DUT, {
        className: d.kL,
        onClick: () => {
            u?.navigateToChannel(), o();
        },
        "aria-label": u?.ariaLabel,
        role: "link",
        children: [
            (0, l.jsx)("div", { className: d.qq, children: m }),
            (0, l.jsxs)("div", {
                className: d.op,
                children: [
                    (0, l.jsx)(n.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: d.UU,
                        children: (0, r.A)(t),
                    }),
                    (0, l.jsx)(n.Text, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, l.jsx)(a.A, { direction: a.A.Directions.RIGHT, className: d.OW }),
        ],
    });
}
