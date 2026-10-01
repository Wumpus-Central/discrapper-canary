l.d(n, { A: () => d });
var t = l(477900);
l(582128);
var r = l(939249),
    i = l(834730),
    u = l(147925),
    s = l(807973),
    a = l(898612),
    o = l(232492),
    c = l(80595);
function d(e) {
    let { benefit: n, guildId: l, onClick: d } = e,
        m = (0, o.A)(l, n.ref_id),
        E = (0, t.jsx)(s.A, { guildId: l, emojiId: n.emoji_id, emojiName: n.emoji_name });
    return (0, t.jsxs)(r.D, {
        className: c.kL,
        onClick: function () {
            (m?.navigateToChannel(), d());
        },
        "aria-label": m?.ariaLabel,
        role: "link",
        children: [
            (0, t.jsx)("div", { className: c.qq, children: E }),
            (0, t.jsxs)("div", {
                className: c.op,
                children: [
                    (0, t.jsx)(i.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: c.UU,
                        children: (0, a.A)(n),
                    }),
                    (0, t.jsx)(i.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: n.description,
                    }),
                ],
            }),
            (0, t.jsx)(u.A, { direction: u.A.Directions.RIGHT, className: c.OW }),
        ],
    });
}
