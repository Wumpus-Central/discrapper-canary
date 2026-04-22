"use strict";
a.d(t, { r: () => c });
var r = a(627968);
a(64700);
var l = a(834730),
    n = a(331322),
    i = a(939249),
    s = a(206845),
    o = a(453854),
    d = a(985018);
let c = {
    name: "SkuPreview",
    id: "skupreview",
    component: (e) => {
        let { skuId: t } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(o.A, { skuId: t }),
                (0, r.jsx)("hr", {}),
                (0, r.jsx)(l.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                (0, r.jsxs)(n.B, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(l.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                        (0, r.jsx)(s.A, {
                            text: d.intl.string(d.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704192811088",
                            children: (e) =>
                                (0, r.jsx)(i.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(l.E, {
                                        variant: "text-sm/normal",
                                        children: "1458472704192811088",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsxs)(n.B, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(l.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                        (0, r.jsx)(s.A, {
                            text: d.intl.string(d.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458479739110166560",
                            children: (e) =>
                                (0, r.jsx)(i.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(l.E, {
                                        variant: "text-sm/normal",
                                        children: "1458479739110166560",
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsxs)(n.B, {
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(l.E, { variant: "text-sm/bold", children: "Nameplate" }),
                        (0, r.jsx)(s.A, {
                            text: d.intl.string(d.t.OpuAlK),
                            delay: 0,
                            "aria-label": !1,
                            copyValue: "1458472704524156959",
                            children: (e) =>
                                (0, r.jsx)(i.D, {
                                    ...e,
                                    style: { cursor: "pointer" },
                                    children: (0, r.jsx)(l.E, {
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
