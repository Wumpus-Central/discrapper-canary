r.d(n, { A: () => d });
var t = r(477900);
r(582128);
var l = r(939249),
    i = r(834730),
    s = r(147925),
    o = r(807973),
    a = r(898612),
    c = r(232492),
    u = r(80595);
function d(e) {
    let { benefit: n, guildId: r, onClick: d } = e,
        h = (0, c.A)(r, n.ref_id),
        m = (0, t.jsx)(o.A, { guildId: r, emojiId: n.emoji_id, emojiName: n.emoji_name });
    return (0, t.jsxs)(l.D, {
        className: u.kL,
        onClick: function () {
            (h?.navigateToChannel(), d());
        },
        "aria-label": h?.ariaLabel,
        role: "link",
        children: [
            (0, t.jsx)("div", { className: u.qq, children: m }),
            (0, t.jsxs)("div", {
                className: u.op,
                children: [
                    (0, t.jsx)(i.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: u.UU,
                        children: (0, a.A)(n),
                    }),
                    (0, t.jsx)(i.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: n.description,
                    }),
                ],
            }),
            (0, t.jsx)(s.A, { direction: s.A.Directions.RIGHT, className: u.OW }),
        ],
    });
}
