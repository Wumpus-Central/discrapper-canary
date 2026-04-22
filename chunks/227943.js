"use strict";
a.d(t, { z: () => c });
var r = a(627968),
    l = a(834730),
    n = a(18769),
    i = a(954644),
    s = a(261225),
    o = a(673277),
    d = a(700263);
let c = {
    name: "Skeleton",
    id: "skeleton",
    component: () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.E, {
                    variant: "text-lg/semibold",
                    children:
                        "Skeleton provides a loading placeholder with a shimmer effect while content is being loaded.",
                }),
                (0, r.jsx)(l.E, {
                    variant: "text-lg/normal",
                    children: "Skeleton hides its children and applies a mask over the whole container of the child",
                }),
                (0, r.jsx)(l.E, {
                    variant: "text-lg/normal",
                    children:
                        "Skeleton always puts a border radius on the shimmer. It might not match the child's radius.",
                }),
                (0, r.jsxs)(o.A, {
                    children: [
                        (0, r.jsx)(l.E, { variant: "text-md/normal", children: "Basic rectangular skeleton" }),
                        (0, r.jsx)(d.A, {
                            children: (0, r.jsx)("div", {
                                style: { height: 120, width: "100%", background: "transparent" },
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.E, {
                    variant: "text-lg/normal",
                    children:
                        "Here we have a Grid with three Skeleton children that are wrapping three ShopProductCard to simulate a shop loading state",
                }),
                (0, r.jsx)(o.A, {
                    children: (0, r.jsxs)(s.A, {
                        columns: 3,
                        children: [
                            (0, r.jsx)(d.A, { children: (0, r.jsx)(i.A, { skuId: "1458472704192811088" }) }),
                            (0, r.jsx)(d.A, { children: (0, r.jsx)(i.A, { skuId: "1458472704192811088" }) }),
                            (0, r.jsx)(d.A, { children: (0, r.jsx)(i.A, { skuId: "1458472704192811088" }) }),
                        ],
                    }),
                }),
                (0, r.jsx)(l.E, {
                    variant: "text-lg/normal",
                    children:
                        "Here we have a Grid with two Skeleton children that are wrapping two FeaturedCollection to simulate a shop loading state",
                }),
                (0, r.jsx)(o.A, {
                    children: (0, r.jsxs)(s.A, {
                        columns: 2,
                        children: [
                            (0, r.jsx)(d.A, {
                                children: (0, r.jsx)(n.A, {
                                    backgroundImage: {
                                        src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                    },
                                    logoSrc: {
                                        src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                    },
                                    supplementalImage: {
                                        src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                    },
                                    href: "",
                                    ctaText: "Take Me There",
                                }),
                            }),
                            (0, r.jsx)(d.A, {
                                children: (0, r.jsx)(n.A, {
                                    backgroundImage: {
                                        src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                    },
                                    logoSrc: {
                                        src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                    },
                                    supplementalImage: {
                                        src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                    },
                                    href: "",
                                    ctaText: "Take Me There",
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    controls: {},
};
