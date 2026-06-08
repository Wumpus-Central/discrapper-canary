i.d(t, { A: () => d });
var n = i(627968);
i(64700);
var l = i(939249),
    s = i(834730),
    a = i(147925),
    r = i(659612),
    u = i(898612),
    o = i(232492),
    c = i(500174);
function d(e) {
    let { benefit: t, guildId: i, onClick: d } = e,
        f = (0, o.A)(i, t.ref_id),
        A = (0, n.jsx)(r.A, { guildId: i, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, n.jsxs)(l.D, {
        className: c.kL,
        onClick: () => {
            f?.navigateToChannel(), d();
        },
        "aria-label": f?.ariaLabel,
        role: "link",
        children: [
            (0, n.jsx)("div", { className: c.qq, children: A }),
            (0, n.jsxs)("div", {
                className: c.op,
                children: [
                    (0, n.jsx)(s.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: c.UU,
                        children: (0, u.A)(t),
                    }),
                    (0, n.jsx)(s.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, n.jsx)(a.A, { direction: a.A.Directions.RIGHT, className: c.OW }),
        ],
    });
}
