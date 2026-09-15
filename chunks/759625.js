t.d(n, { A: () => d });
var r = t(477900);
t(582128);
var l = t(939249),
    i = t(834730),
    s = t(147925),
    o = t(807973),
    a = t(898612),
    u = t(232492),
    c = t(80595);
function d(e) {
    let { benefit: n, guildId: t, onClick: d } = e,
        h = (0, u.A)(t, n.ref_id),
        E = (0, r.jsx)(o.A, { guildId: t, emojiId: n.emoji_id, emojiName: n.emoji_name });
    return (0, r.jsxs)(l.D, {
        className: c.kL,
        onClick: function () {
            (h?.navigateToChannel(), d());
        },
        "aria-label": h?.ariaLabel,
        role: "link",
        children: [
            (0, r.jsx)("div", { className: c.qq, children: E }),
            (0, r.jsxs)("div", {
                className: c.op,
                children: [
                    (0, r.jsx)(i.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: c.UU,
                        children: (0, a.A)(n),
                    }),
                    (0, r.jsx)(i.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: n.description,
                    }),
                ],
            }),
            (0, r.jsx)(s.A, { direction: s.A.Directions.RIGHT, className: c.OW }),
        ],
    });
}
