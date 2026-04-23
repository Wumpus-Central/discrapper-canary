l.d(i, { e: () => x });
var a = l(627968);
l(64700);
var t = l(503698),
    n = l.n(t),
    s = l(827734),
    c = l(285796),
    r = l(534514),
    d = l(834730),
    o = l(821609);
l(748112);
var h = l(820193);
l(985018);
var u = l(487160);
l(950506), l(848887);
let x = (e) => {
    let { name: i, description: l, checked: t, actionLabel: x, actionHandler: m } = e,
        v = null;
    return (
        (v = t
            ? (0, a.jsx)(h.A, { width: 20, height: 20 })
            : (0, a.jsx)(c.a, { size: "custom", color: s.A.colors.ICON_FEEDBACK_CRITICAL, width: 20, height: 20 })),
        (0, a.jsxs)("div", {
            className: u.gd,
            children: [
                (0, a.jsx)("div", { className: u.aV, children: v }),
                (0, a.jsxs)("div", {
                    className: n()(u.__invalid_checklistText, t && u.lu),
                    children: [
                        (0, a.jsx)(r.D, { variant: "heading-md/semibold", className: u.LA, children: i }),
                        (0, a.jsx)(d.E, { color: "interactive-text-default", variant: "text-sm/normal", children: l }),
                    ],
                }),
                null != x &&
                    (0, a.jsx)("div", {
                        className: u.dT,
                        children: (0, a.jsx)(o.$, { variant: "primary", onClick: m, text: x, size: "sm" }),
                    }),
            ],
        })
    );
};
