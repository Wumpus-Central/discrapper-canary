t.d(n, { A: () => d });
var l = t(477900);
t(582128);
var r = t(939249),
    i = t(834730),
    a = t(147925),
    s = t(807973),
    u = t(898612),
    c = t(232492),
    o = t(80595);
function d(e) {
    let { benefit: n, guildId: t, onClick: d } = e,
        m = (0, c.A)(t, n.ref_id),
        h = (0, l.jsx)(s.A, { guildId: t, emojiId: n.emoji_id, emojiName: n.emoji_name });
    return (0, l.jsxs)(r.D, {
        className: o.kL,
        onClick: function () {
            (m?.navigateToChannel(), d());
        },
        "aria-label": m?.ariaLabel,
        role: "link",
        children: [
            (0, l.jsx)("div", { className: o.qq, children: h }),
            (0, l.jsxs)("div", {
                className: o.op,
                children: [
                    (0, l.jsx)(i.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: o.UU,
                        children: (0, u.A)(n),
                    }),
                    (0, l.jsx)(i.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: n.description,
                    }),
                ],
            }),
            (0, l.jsx)(a.A, { direction: a.A.Directions.RIGHT, className: o.OW }),
        ],
    });
}
