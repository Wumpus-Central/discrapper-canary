r.d(t, { e: () => d }), r(228524);
var n = r(627968);
r(64700);
var i = r(503698),
    l = r.n(i),
    c = r(827734),
    o = r(397927);
r(748112);
var a = r(820193);
r(985018);
var s = r(975398);
r(950506), r(848887);
let d = (e) => {
    let { name: t, description: r, checked: i, actionLabel: d, actionHandler: u } = e,
        b = null;
    return (
        (b = i
            ? (0, n.jsx)(a.A, {
                  width: 20,
                  height: 20,
              })
            : (0, n.jsx)(o.aXh, {
                  size: "custom",
                  color: c.A.colors.ICON_FEEDBACK_CRITICAL,
                  width: 20,
                  height: 20,
              })),
        (0, n.jsxs)("div", {
            className: s.gd,
            children: [
                (0, n.jsx)("div", {
                    className: s.aV,
                    children: b,
                }),
                (0, n.jsxs)("div", {
                    className: l()(s.__invalid_checklistText, i && s.lu),
                    children: [
                        (0, n.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            className: s.LA,
                            children: t,
                        }),
                        (0, n.jsx)(o.Text, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: r,
                        }),
                    ],
                }),
                null != d &&
                    (0, n.jsx)("div", {
                        className: s.dT,
                        children: (0, n.jsx)(o.Button, {
                            variant: "primary",
                            onClick: u,
                            text: d,
                            size: "sm",
                        }),
                    }),
            ],
        })
    );
};
