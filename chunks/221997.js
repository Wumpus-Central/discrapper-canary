"use strict";
a.d(t, { Q: () => d });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(261225),
    s = a(673277),
    i = a(458306),
    o = a(304973);
let d = {
    name: "FeaturedChip",
    id: "featured-chip",
    component: (e) => {
        let { backgroundImage: t, ...a } = e,
            d = { backgroundImage: { src: t }, ...a };
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children:
                        "Featured Chip will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                }),
                (0, l.jsx)(s.A, { children: (0, l.jsx)(o.A, { ...d }) }),
                (0, l.jsxs)(s.A, {
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-lg/semibold", children: "Grid (3):" }),
                        (0, l.jsxs)(n.A, {
                            columns: 3,
                            children: [
                                (0, l.jsx)(o.A, { ...d }),
                                (0, l.jsx)(o.A, { ...d }),
                                (0, l.jsx)(o.A, { ...d }),
                                (0, l.jsx)(o.A, { ...d }),
                                (0, l.jsx)(o.A, { ...d }),
                                (0, l.jsx)(o.A, { ...d }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)(s.A, {
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-lg/semibold", children: "Stack:" }),
                        (0, l.jsxs)(i.Kp, {
                            direction: "horizontal",
                            children: [
                                (0, l.jsx)(o.A, { ...d }),
                                (0, l.jsx)(o.A, { ...d }),
                                (0, l.jsx)(o.A, { ...d }),
                                (0, l.jsx)(o.A, { ...d }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
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
