n.d(t, { A: () => u }), n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(147925),
    s = n(659612),
    o = n(898612),
    l = n(232492),
    c = n(974105);
function u(e) {
    let { benefit: t, guildId: n, onClick: u } = e,
        d = (0, l.A)(n, t.ref_id),
        f = () => {
            null == d || d.navigateToChannel(), u();
        },
        p = (0, r.jsx)(s.A, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name,
        });
    return (0, r.jsxs)(i.DUT, {
        className: c.kL,
        onClick: f,
        "aria-label": null == d ? void 0 : d.ariaLabel,
        role: "link",
        children: [
            (0, r.jsx)("div", {
                className: c.qq,
                children: p,
            }),
            (0, r.jsxs)("div", {
                className: c.op,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: c.UU,
                        children: (0, o.A)(t),
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, r.jsx)(a.A, {
                direction: a.A.Directions.RIGHT,
                className: c.OW,
            }),
        ],
    });
}
