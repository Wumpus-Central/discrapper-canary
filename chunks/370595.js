n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(50493),
    s = n(388032),
    a = n(546679),
    o = n(152540);
function u(e) {
    let { onNavigate: t, backPanel: n = i.k.INFO } = e;
    return (0, r.jsxs)("div", {
        className: o.header,
        children: [
            (0, r.jsx)("div", {
                className: o.headerTitle,
                children: (0, r.jsxs)(l.P3F, {
                    className: a.backButton,
                    onClick: () => (null == t ? void 0 : t(n)),
                    children: [
                        (0, r.jsx)(l.whL, {
                            size: "custom",
                            width: 20,
                            height: 20,
                        }),
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: s.intl.string(s.t["13/7kX"]),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(l.M2$, {
                shortcut: "esc",
                keyClassName: a.keyComboInner,
                className: a.keyComboContainer,
            }),
        ],
    });
}
