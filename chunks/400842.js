i.d(t, { d: () => d }), i(953529);
var n = i(54381);
i(473749);
var r = i(120356),
    c = i.n(r),
    l = i(692547),
    o = i(481060);
i(651711);
var s = i(551556);
i(388032);
var a = i(107767);
i(347157), i(177266);
let d = (e) => {
    let { name: t, description: i, checked: r, actionLabel: d, actionHandler: h } = e,
        u = null;
    return (
        (u = r
            ? (0, n.jsx)(s.Z, {
                  width: 20,
                  height: 20,
              })
            : (0, n.jsx)(o.k$p, {
                  size: "custom",
                  color: l.Z.colors.ICON_FEEDBACK_CRITICAL,
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
                    className: c()(a.__invalid_checklistText, r && a.ineligibleRow),
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
