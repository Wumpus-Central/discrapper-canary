n.d(t, { Z: () => u }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(259580),
    o = n(528027),
    s = n(686807),
    l = n(113318),
    c = n(149349);
function u(e) {
    let { benefit: t, guildId: n, onClick: u } = e,
        d = (0, l.Z)(n, t.ref_id),
        f = () => {
            null == d || d.navigateToChannel(), u();
        },
        _ = (0, r.jsx)(o.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name,
        });
    return (0, r.jsxs)(i.P3F, {
        className: c.container,
        onClick: f,
        "aria-label": null == d ? void 0 : d.ariaLabel,
        role: "link",
        children: [
            (0, r.jsx)("div", {
                className: c.emojiContainer,
                children: _,
            }),
            (0, r.jsxs)("div", {
                className: c.infoContainer,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        className: c.name,
                        children: (0, s.Z)(t),
                    }),
                    (0, r.jsx)(i.Text, {
                        color: "interactive-normal",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, r.jsx)(a.Z, {
                direction: a.Z.Directions.RIGHT,
                className: c.caret,
            }),
        ],
    });
}
