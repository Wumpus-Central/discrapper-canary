"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(147925),
    s = n(659612),
    o = n(898612),
    l = n(232492),
    u = n(974105);
function c(e) {
    let { benefit: t, guildId: n, onClick: c } = e,
        d = (0, l.A)(n, t.ref_id),
        _ = () => {
            d?.navigateToChannel(), c();
        },
        f = (0, r.jsx)(s.A, { guildId: n, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, r.jsxs)(i.DUT, {
        className: u.kL,
        onClick: _,
        "aria-label": d?.ariaLabel,
        role: "link",
        children: [
            (0, r.jsx)("div", { className: u.qq, children: f }),
            (0, r.jsxs)("div", {
                className: u.op,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: u.UU,
                        children: (0, o.A)(t),
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, r.jsx)(a.A, { direction: a.A.Directions.RIGHT, className: u.OW }),
        ],
    });
}
