n.d(t, { e: () => c });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(397927),
    o = n(979286),
    d = n(194878);
let c = () => {
    let [e, t] = i.useState(void 0);
    return (0, a.jsxs)("div", {
        className: l()(d.kL, d.fi),
        children: [
            (0, a.jsx)(r.ksK, {
                fullWidth: !0,
                label: "Shop Layout URL Override",
                value: e,
                onChange: (e) => ("" === e ? t(void 0) : t(e)),
                placeholder: "https://cdn.discordapp.com/assets/content/...",
            }),
            (0, a.jsxs)("div", {
                className: d.o1,
                children: [
                    (0, a.jsx)(r.Button, {
                        variant: "critical-primary",
                        text: "Clear",
                        onClick: () => {
                            t(void 0), (0, o.Aq)(void 0);
                        },
                    }),
                    (0, a.jsx)(r.Button, {
                        variant: "primary",
                        text: "Set",
                        onClick: () => (0, o.Aq)("" !== e ? e : void 0),
                    }),
                ],
            }),
        ],
    });
};
