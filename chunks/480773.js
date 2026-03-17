a.d(t, { u: () => i });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(261225),
    o = a(673277),
    s = a(458306),
    d = a(18769);
let i = {
    name: "FeaturedCollection",
    id: "featured-collection",
    component: (e) => {
        let { columns: t, backgroundImage: a, logoSrc: i, supplementalImage: c, ctaText: x, href: u } = e,
            h = {
                backgroundImage: { src: a },
                logoSrc: { src: i },
                supplementalImage: { src: c },
                ctaText: x,
                href: u,
            };
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(r.Text, {
                    variant: "text-lg/semibold",
                    children:
                        "Featured Collection will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                }),
                (0, l.jsx)(o.A, { children: (0, l.jsx)(d.A, { ...h }) }),
                (0, l.jsxs)(o.A, {
                    children: [
                        (0, l.jsxs)(r.Text, { variant: "text-lg/semibold", children: ["Grid (", t, "):"] }),
                        (0, l.jsxs)(n.A, {
                            columns: t,
                            children: [(0, l.jsx)(d.A, { ...h }), (0, l.jsx)(d.A, { ...h })],
                        }),
                    ],
                }),
                (0, l.jsxs)(o.A, {
                    children: [
                        (0, l.jsx)(r.Text, { variant: "text-lg/semibold", children: "Stack:" }),
                        (0, l.jsxs)(s.Kp, {
                            direction: "horizontal",
                            children: [
                                (0, l.jsx)(d.A, { ...h }),
                                (0, l.jsx)(d.A, { ...h }),
                                (0, l.jsx)(d.A, { ...h }),
                                (0, l.jsx)(d.A, { ...h }),
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
        logoSrc: {
            label: "Logo Source",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
        },
        supplementalImage: {
            label: "supplemental Image",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
        },
        ctaText: { label: "Background Image", type: "text", defaultValue: "Browse" },
        href: { label: "href", type: "text", defaultValue: "/shop/things" },
        columns: { label: "Columns", type: "number", defaultValue: 2 },
    },
};
