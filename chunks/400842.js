i.d(t, { d: () => d }), i(953529);
var n = i(54381);
i(473749);
var c = i(120356),
    r = i.n(c),
    l = i(692547),
    o = i(481060);
i(651711);
var s = i(551556);
i(388032);
var a = i(107767);
i(347157), i(177266);
let d = (e) => {
    let { name: t, description: i, checked: c, actionLabel: d, actionHandler: h } = e,
        u = null;
    return (
        (u = c
            ? (0, n.jsx)(s.Z, {
                  width: 20,
                  height: 20,
              })
            : (0, n.jsx)(o.k$p, {
                  size: "custom",
                  color: l.Z.colors.STATUS_DANGER.css,
                  width: 20,
                  height: 20,
              })),
        (0, n.jsxs)("div", {
            className: a.checklistItem,
            children: [
                (0, n.jsx)("div", {
                    className: a.checklistIcon,
                    children: u,
                }),
                (0, n.jsxs)("div", {
                    className: r()(a.__invalid_checklistText, c && a.ineligibleRow),
                    children: [
                        (0, n.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            className: a.checklistItemName,
                            children: t,
                        }),
                        (0, n.jsx)(o.Text, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: i,
                        }),
                    ],
                }),
                null != d &&
                    (0, n.jsx)("div", {
                        className: a.eligibilityActionContainer,
                        children: (0, n.jsx)(o.Button, {
                            variant: "primary",
                            onClick: h,
                            text: d,
                            size: "sm",
                        }),
                    }),
            ],
        })
    );
};
