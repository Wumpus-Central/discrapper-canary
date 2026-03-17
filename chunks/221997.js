a.d(t, { Q: () => i });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(261225),
    o = a(673277),
    s = a(458306),
    d = a(304973);
let i = {
    name: "FeaturedChip",
    id: "featured-chip",
    component: (e) => {
        let { backgroundImage: t, ...a } = e,
            i = { backgroundImage: { src: t }, ...a };
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children:
                        "Featured Chip will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                }),
                (0, l.jsx)(o.A, { children: (0, l.jsx)(d.A, { ...i }) }),
                (0, l.jsxs)(o.A, {
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-lg/semibold", children: "Grid (3):" }),
                        (0, l.jsxs)(n.A, {
                            columns: 3,
                            children: [
                                (0, l.jsx)(d.A, { ...i }),
                                (0, l.jsx)(d.A, { ...i }),
                                (0, l.jsx)(d.A, { ...i }),
                                (0, l.jsx)(d.A, { ...i }),
                                (0, l.jsx)(d.A, { ...i }),
                                (0, l.jsx)(d.A, { ...i }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)(o.A, {
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-lg/semibold", children: "Stack:" }),
                        (0, l.jsxs)(s.Kp, {
                            direction: "horizontal",
                            children: [
                                (0, l.jsx)(d.A, { ...i }),
                                (0, l.jsx)(d.A, { ...i }),
                                (0, l.jsx)(d.A, { ...i }),
                                (0, l.jsx)(d.A, { ...i }),
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
