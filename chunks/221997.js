"use strict";
n.d(t, { Q: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(261225),
    s = n(673277),
    o = n(458306),
    l = n(304973);
let u = {
    name: "FeaturedChip",
    id: "featured-chip",
    component: (e) =>
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(i.Text, {
                    variant: "text-lg/semibold",
                    children:
                        "Featured Chip will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                }),
                (0, r.jsx)(s.A, { children: (0, r.jsx)(l.A, { ...e }) }),
                (0, r.jsxs)(s.A, {
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-lg/semibold", children: "Grid (3):" }),
                        (0, r.jsxs)(a.A, {
                            columns: 3,
                            children: [
                                (0, r.jsx)(l.A, { ...e }),
                                (0, r.jsx)(l.A, { ...e }),
                                (0, r.jsx)(l.A, { ...e }),
                                (0, r.jsx)(l.A, { ...e }),
                                (0, r.jsx)(l.A, { ...e }),
                                (0, r.jsx)(l.A, { ...e }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(s.A, {
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-lg/semibold", children: "Stack:" }),
                        (0, r.jsxs)(o.Kp, {
                            direction: "horizontal",
                            children: [
                                (0, r.jsx)(l.A, { ...e }),
                                (0, r.jsx)(l.A, { ...e }),
                                (0, r.jsx)(l.A, { ...e }),
                                (0, r.jsx)(l.A, { ...e }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    controls: {
        backgroundImage: {
            label: "Background Image",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
        },
        ctaText: { label: "Background Image", type: "text", defaultValue: "Browse" },
        href: { label: "href", type: "text", defaultValue: "/shop/things" },
    },
};
