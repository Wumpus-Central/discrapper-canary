t.d(a, { A: () => h });
var l = t(477900);
t(582128);
var n = t(939249),
    r = t(834730),
    i = t(147925),
    s = t(807973),
    u = t(898612),
    o = t(232492),
    c = t(80595);
function h(e) {
    let { benefit: a, guildId: t, onClick: h } = e,
        d = (0, o.A)(t, a.ref_id),
        m = (0, l.jsx)(s.A, { guildId: t, emojiId: a.emoji_id, emojiName: a.emoji_name });
    return (0, l.jsxs)(n.D, {
        className: c.kL,
        onClick: function () {
            (d?.navigateToChannel(), h());
        },
        "aria-label": d?.ariaLabel,
        role: "link",
        children: [
            (0, l.jsx)("div", { className: c.qq, children: m }),
            (0, l.jsxs)("div", {
                className: c.op,
                children: [
                    (0, l.jsx)(r.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: c.UU,
                        children: (0, u.A)(a),
                    }),
                    (0, l.jsx)(r.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: a.description,
                    }),
                ],
            }),
            (0, l.jsx)(i.A, { direction: i.A.Directions.RIGHT, className: c.OW }),
        ],
    });
}
