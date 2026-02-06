"use strict";
n.d(t, { r: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(206845),
    s = n(453854),
    o = n(985018);
let l = {
    name: "SkuPreview",
    id: "skupreview",
    component: (e) => {
        let { skuId: t } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(s.A, { skuId: t }),
                (0, r.jsx)("hr", {}),
                (0, r.jsx)(i.Text, { variant: "text-md/bold", children: "Sample Skus:" }),
                (0, r.jsxs)(i.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                        (0, r.jsx)(a.A, {
                            text: o.intl.string(o.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704192811088",
                            children: (e) =>
                                (0, r.jsx)(i.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458472704192811088",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsxs)(i.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-sm/bold", children: "Profile Effect" }),
                        (0, r.jsx)(a.A, {
                            text: o.intl.string(o.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458479739110166560",
                            children: (e) =>
                                (0, r.jsx)(i.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: "1458479739110166560",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsxs)(i.BJc, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-sm/bold", children: "Nameplate" }),
                        (0, r.jsx)(a.A, {
                            text: o.intl.string(o.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704524156959",
                            children: (e) =>
                                (0, r.jsx)(i.DUT, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(i.Text, {
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
