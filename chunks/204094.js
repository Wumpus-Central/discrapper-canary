a.d(t, { r: () => d });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(206845),
    o = a(453854),
    s = a(985018);
let d = {
    name: "SkuPreview",
    id: "skupreview",
    component: (e) => {
        let { skuId: t } = e;
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(o.A, { skuId: t }),
                (0, l.jsx)("hr", {}),
                (0, l.jsx)(r.Text, { variant: "text-md/bold", children: "Sample Skus:" }),
                (0, l.jsxs)(r.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                        (0, l.jsx)(n.A, {
                            text: s.intl.string(s.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704192811088",
                            children: (e) =>
                                (0, l.jsx)(r.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458472704192811088",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, l.jsxs)(r.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-sm/bold", children: "Profile Effect" }),
                        (0, l.jsx)(n.A, {
                            text: s.intl.string(s.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458479739110166560",
                            children: (e) =>
                                (0, l.jsx)(r.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458479739110166560",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, l.jsxs)(r.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-sm/bold", children: "Nameplate" }),
                        (0, l.jsx)(n.A, {
                            text: s.intl.string(s.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704524156959",
                            children: (e) =>
                                (0, l.jsx)(r.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458472704524156959",
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    },
    controls: { skuId: { label: "SKU Id", type: "text", defaultValue: "1458472704192811088" } },
};
