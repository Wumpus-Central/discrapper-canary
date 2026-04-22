"use strict";
a.d(t, { Q: () => d });
var r = a(627968);
a(64700);
var l = a(834730),
    n = a(261225),
    i = a(673277),
    s = a(219561),
    o = a(304973);
let d = {
    name: "FeaturedChip",
    id: "featured-chip",
    component: (e) => {
        let { backgroundImage: t, ...a } = e,
            d = { backgroundImage: { src: t }, ...a };
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.E, {
                    variant: "text-lg/semibold",
                    children:
                        "Featured Chip will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                }),
                (0, r.jsx)(i.A, { children: (0, r.jsx)(o.A, { ...d }) }),
                (0, r.jsxs)(i.A, {
                    children: [
                        (0, r.jsx)(l.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                        (0, r.jsxs)(n.A, {
                            columns: 3,
                            children: [
                                (0, r.jsx)(o.A, { ...d }),
                                (0, r.jsx)(o.A, { ...d }),
                                (0, r.jsx)(o.A, { ...d }),
                                (0, r.jsx)(o.A, { ...d }),
                                (0, r.jsx)(o.A, { ...d }),
                                (0, r.jsx)(o.A, { ...d }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(i.A, {
                    children: [
                        (0, r.jsx)(l.E, { variant: "text-lg/semibold", children: "Stack:" }),
                        (0, r.jsxs)(s.Kp, {
                            direction: "horizontal",
                            children: [
                                (0, r.jsx)(o.A, { ...d }),
                                (0, r.jsx)(o.A, { ...d }),
                                (0, r.jsx)(o.A, { ...d }),
                                (0, r.jsx)(o.A, { ...d }),
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
