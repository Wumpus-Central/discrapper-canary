"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(939249),
    s = n(834730),
    a = n(147925),
    o = n(807973),
    l = n(898612),
    u = n(232492),
    c = n(500174);
function d(e) {
    let { benefit: t, guildId: n, onClick: d } = e,
        _ = (0, u.A)(n, t.ref_id),
        h = (0, i.jsx)(o.A, { guildId: n, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, i.jsxs)(r.D, {
        className: c.kL,
        onClick: function () {
            _?.navigateToChannel(), d();
        },
        "aria-label": _?.ariaLabel,
        role: "link",
        children: [
            (0, i.jsx)("div", { className: c.qq, children: h }),
            (0, i.jsxs)("div", {
                className: c.op,
                children: [
                    (0, i.jsx)(s.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: c.UU,
                        children: (0, l.A)(t),
                    }),
                    (0, i.jsx)(s.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, i.jsx)(a.A, { direction: a.A.Directions.RIGHT, className: c.OW }),
        ],
    });
}
