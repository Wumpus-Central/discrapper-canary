n.d(t, { A: () => d });
var r = n(477900);
n(582128);
var l = n(939249),
    o = n(834730),
    i = n(147925),
    a = n(807973),
    s = n(898612),
    u = n(232492),
    c = n(80595);
function d(e) {
    let { benefit: t, guildId: n, onClick: d } = e,
        h = (0, u.A)(n, t.ref_id),
        C = (0, r.jsx)(a.A, { guildId: n, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, r.jsxs)(l.D, {
        className: c.kL,
        onClick: function () {
            h?.navigateToChannel(), d();
        },
        "aria-label": h?.ariaLabel,
        role: "link",
        children: [
            (0, r.jsx)("div", { className: c.qq, children: C }),
            (0, r.jsxs)("div", {
                className: c.op,
                children: [
                    (0, r.jsx)(o.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: c.UU,
                        children: (0, s.A)(t),
                    }),
                    (0, r.jsx)(o.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, r.jsx)(i.A, { direction: i.A.Directions.RIGHT, className: c.OW }),
        ],
    });
}
