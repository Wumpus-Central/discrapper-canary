l.d(n, { A: () => d });
var t = l(477900);
l(582128);
var r = l(939249),
    i = l(834730),
    a = l(147925),
    s = l(807973),
    u = l(898612),
    c = l(232492),
    o = l(80595);
function d(e) {
    let { benefit: n, guildId: l, onClick: d } = e,
        m = (0, c.A)(l, n.ref_id),
        h = (0, t.jsx)(s.A, { guildId: l, emojiId: n.emoji_id, emojiName: n.emoji_name });
    return (0, t.jsxs)(r.D, {
        className: o.kL,
        onClick: function () {
            (m?.navigateToChannel(), d());
        },
        "aria-label": m?.ariaLabel,
        role: "link",
        children: [
            (0, t.jsx)("div", { className: o.qq, children: h }),
            (0, t.jsxs)("div", {
                className: o.op,
                children: [
                    (0, t.jsx)(i.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: o.UU,
                        children: (0, u.A)(n),
                    }),
                    (0, t.jsx)(i.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: n.description,
                    }),
                ],
            }),
            (0, t.jsx)(a.A, { direction: a.A.Directions.RIGHT, className: o.OW }),
        ],
    });
}
