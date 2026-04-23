i.d(t, { A: () => u });
var l = i(627968);
i(64700);
var n = i(939249),
    s = i(834730),
    a = i(147925),
    r = i(659612),
    c = i(898612),
    d = i(232492),
    o = i(500174);
function u(e) {
    let { benefit: t, guildId: i, onClick: u } = e,
        m = (0, d.A)(i, t.ref_id),
        x = (0, l.jsx)(r.A, { guildId: i, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, l.jsxs)(n.D, {
        className: o.kL,
        onClick: () => {
            m?.navigateToChannel(), u();
        },
        "aria-label": m?.ariaLabel,
        role: "link",
        children: [
            (0, l.jsx)("div", { className: o.qq, children: x }),
            (0, l.jsxs)("div", {
                className: o.op,
                children: [
                    (0, l.jsx)(s.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: o.UU,
                        children: (0, c.A)(t),
                    }),
                    (0, l.jsx)(s.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, l.jsx)(a.A, { direction: a.A.Directions.RIGHT, className: o.OW }),
        ],
    });
}
