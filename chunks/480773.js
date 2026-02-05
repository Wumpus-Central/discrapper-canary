"use strict";
n.d(t, { u: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(261225),
    s = n(673277),
    o = n(458306),
    l = n(18769);
let u = {
    name: "FeaturedCollection",
    id: "featured-collection",
    component: (e) => {
        let { columns: t, ...n } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(i.Text, {
                    variant: "text-lg/semibold",
                    children:
                        "Featured Collection will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                }),
                (0, r.jsx)(s.A, { children: (0, r.jsx)(l.A, { ...n }) }),
                (0, r.jsxs)(s.A, {
                    children: [
                        (0, r.jsxs)(i.Text, { variant: "text-lg/semibold", children: ["Grid (", t, "):"] }),
                        (0, r.jsxs)(a.A, {
                            columns: t,
                            children: [(0, r.jsx)(l.A, { ...n }), (0, r.jsx)(l.A, { ...n })],
                        }),
                    ],
                }),
                (0, r.jsxs)(s.A, {
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-lg/semibold", children: "Stack:" }),
                        (0, r.jsxs)(o.Kp, {
                            direction: "horizontal",
                            children: [
                                (0, r.jsx)(l.A, { ...n }),
                                (0, r.jsx)(l.A, { ...n }),
                                (0, r.jsx)(l.A, { ...n }),
                                (0, r.jsx)(l.A, { ...n }),
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
