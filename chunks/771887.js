n.d(t, {
    $: () => c,
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(732955),
    a = n(397927),
    s = n(235986),
    o = n(985018),
    l = n(678863);
let c = (e) => {
        let { className: t, isEmailResent: n, resendEmail: i } = e;
        return (0, r.jsx)("div", {
            className: t,
            children: (0, r.jsxs)("div", {
                className: l.a,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-xl/bold",
                        children: o.intl.string(o.t.Q03WWV),
                    }),
                    (0, r.jsxs)("p", {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: o.intl.string(o.t.BxPxhI),
                            }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: o.intl.string(o.t.Y3fdOp),
                            }),
                            (0, r.jsx)("br", {}),
                            (0, r.jsxs)(a.Text, {
                                variant: "text-md/normal",
                                children: [
                                    o.intl.string(o.t.Paa4v4),
                                    "\xA0",
                                    n
                                        ? o.intl.string(o.t.StGVvC)
                                        : (0, r.jsx)(a.MzZ, {
                                              onClick: i,
                                              children: o.intl.string(o.t.Ex7sk9),
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    u = () =>
        (0, r.jsx)("div", {
            children: (0, r.jsx)(a.jlY, {
                justify: s.A.Justify.BETWEEN,
                align: s.A.Align.CENTER,
                "data-migration-pending": !0,
                children: (0, r.jsx)(i.$nd, {
                    "data-testid": "continue",
                    variant: "primary",
                    disabled: !0,
                    text: o.intl.string(o.t.g8vPzy),
                }),
            }),
        });
