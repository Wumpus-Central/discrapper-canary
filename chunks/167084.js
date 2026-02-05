l.d(i, { e: () => o });
var t = l(627968);
l(64700);
var n = l(503698),
    a = l.n(n),
    s = l(827734),
    c = l(397927);
l(748112);
var r = l(820193);
l(985018);
var d = l(975398);
l(950506), l(848887);
let o = (e) => {
    let { name: i, description: l, checked: n, actionLabel: o, actionHandler: h } = e,
        u = null;
    return (
        (u = n
            ? (0, t.jsx)(r.A, { width: 20, height: 20 })
            : (0, t.jsx)(c.aXh, { size: "custom", color: s.A.colors.ICON_FEEDBACK_CRITICAL, width: 20, height: 20 })),
        (0, t.jsxs)("div", {
            className: d.gd,
            children: [
                (0, t.jsx)("div", { className: d.aV, children: u }),
                (0, t.jsxs)("div", {
                    className: a()(d.__invalid_checklistText, n && d.lu),
                    children: [
                        (0, t.jsx)(c.Heading, { variant: "heading-md/semibold", className: d.LA, children: i }),
                        (0, t.jsx)(c.Text, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: l,
                        }),
                    ],
                }),
                null != o &&
                    (0, t.jsx)("div", {
                        className: d.dT,
                        children: (0, t.jsx)(c.Button, { variant: "primary", onClick: h, text: o, size: "sm" }),
                    }),
            ],
        })
    );
};
