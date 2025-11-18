n.d(t, { T: () => c });
var r = n(54381),
    i = n(657707),
    a = n(159691),
    o = n(481060),
    s = n(572004),
    l = n(64617);
let c = (e) => {
    let { label: t, value: n } = e;
    return (0, r.jsxs)("div", {
        className: l.labelValueRow,
        children: [
            (0, r.jsxs)(o.Text, {
                variant: "text-sm/medium",
                children: [t, ":"],
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: n,
            }),
            (0, r.jsx)(a.hU, {
                size: "sm",
                "aria-label": "Copy Link",
                variant: "icon-only",
                icon: i.TIy,
                onClick: () => (0, s.JG)(n),
            }),
        ],
    });
};
