n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(28664),
    l = n(481060),
    a = n(449226),
    s = n(231338),
    o = n(388032),
    c = n(824804);
function d(e) {
    let { title: t, details: n } = e;
    return (0, r.jsxs)("div", {
        className: c.simpleItemWrapper,
        children: [
            (0, r.jsxs)("div", {
                className: c.itemContent,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: t,
                    }),
                    "string" == typeof n
                        ? (0, r.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "header-secondary",
                              children: n,
                          })
                        : n,
                ],
            }),
            (0, r.jsx)(i.u, {
                text: o.intl.string(o.t.NQ4nCp),
                children: (0, r.jsx)(a.Z, {
                    checked: !0,
                    disabled: !0,
                    onChange: s.dG,
                    className: c.bringToFront,
                }),
            }),
        ],
    });
}
