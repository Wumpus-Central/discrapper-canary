a.d(t, { r: () => c });
var l = a(627968);
a(64700);
var r = a(834730),
    n = a(331322),
    s = a(939249),
    i = a(206845),
    d = a(453854),
    o = a(985018);
let c = {
    name: "SkuPreview",
    id: "skupreview",
    component: (e) => {
        let { skuId: t } = e;
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(d.A, { skuId: t }),
                (0, l.jsx)("hr", {}),
                (0, l.jsx)(r.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                (0, l.jsxs)(n.B, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                        (0, l.jsx)(i.A, {
                            text: o.intl.string(o.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704192811088",
                            children: (e) =>
                                (0, l.jsx)(s.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(r.E, {
                                        variant: "text-sm/normal",
                                        children: "1458472704192811088",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, l.jsxs)(n.B, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                        (0, l.jsx)(i.A, {
                            text: o.intl.string(o.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458479739110166560",
                            children: (e) =>
                                (0, l.jsx)(s.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(r.E, {
                                        variant: "text-sm/normal",
                                        children: "1458479739110166560",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, l.jsxs)(n.B, {
                    direction: "horizontal",
                    children: [
                        (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Nameplate" }),
                        (0, l.jsx)(i.A, {
                            text: o.intl.string(o.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704524156959",
                            children: (e) =>
                                (0, l.jsx)(s.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, l.jsx)(r.E, {
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
