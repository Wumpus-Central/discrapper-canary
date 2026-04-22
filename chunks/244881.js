a.d(t, { e: () => u });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(292666),
    o = a(821609),
    d = a(979286),
    c = a(172471);
let u = () => {
    let [e, t] = l.useState(void 0);
    return (0, n.jsxs)("div", {
        className: s()(c.kL, c.fi),
        children: [
            (0, n.jsx)(r.k, {
                fullWidth: !0,
                label: "Shop Layout URL Override",
                value: e,
                onChange: (e) => ("" === e ? t(void 0) : t(e)),
                placeholder: "https://cdn.discordapp.com/assets/content/...",
            }),
            (0, n.jsxs)("div", {
                className: c.o1,
                children: [
                    (0, n.jsx)(o.$, {
                        variant: "critical-primary",
                        text: "Clear",
                        onClick: () => {
                            t(void 0), (0, d.Aq)(void 0);
                        },
                    }),
                    (0, n.jsx)(o.$, {
                        variant: "primary",
                        text: "Set",
                        onClick: () => (0, d.Aq)("" !== e ? e : void 0),
                    }),
                ],
            }),
        ],
    });
};
