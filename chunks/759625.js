n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var r = n(939249),
    i = n(834730),
    a = n(147925),
    o = n(807973),
    s = n(898612),
    u = n(232492),
    c = n(500174);
function d(e) {
    let { benefit: t, guildId: n, onClick: d } = e,
        m = (0, u.A)(n, t.ref_id),
        E = (0, l.jsx)(o.A, { guildId: n, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, l.jsxs)(r.D, {
        className: c.kL,
        onClick: function () {
            m?.navigateToChannel(), d();
        },
        "aria-label": m?.ariaLabel,
        role: "link",
        children: [
            (0, l.jsx)("div", { className: c.qq, children: E }),
            (0, l.jsxs)("div", {
                className: c.op,
                children: [
                    (0, l.jsx)(i.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: c.UU,
                        children: (0, s.A)(t),
                    }),
                    (0, l.jsx)(i.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, l.jsx)(a.A, { direction: a.A.Directions.RIGHT, className: c.OW }),
        ],
    });
}
