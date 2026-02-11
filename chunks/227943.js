"use strict";
n.d(t, { z: () => c });
var r = n(627968),
    i = n(397927),
    a = n(18769),
    s = n(954644),
    o = n(261225),
    l = n(673277),
    u = n(700263);
let c = {
    name: "Skeleton",
    id: "skeleton",
    component: () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Text, {
                    variant: "text-lg/semibold",
                    children:
                        "Skeleton provides a loading placeholder with a shimmer effect while content is being loaded.",
                }),
                (0, r.jsx)(i.Text, {
                    variant: "text-lg/normal",
                    children: "Skeleton hides its children and applies a mask over the whole container of the child",
                }),
                (0, r.jsx)(i.Text, {
                    variant: "text-lg/normal",
                    children:
                        "Skeleton always puts a border radius on the shimmer. It might not match the child's radius.",
                }),
                (0, r.jsxs)(l.A, {
                    children: [
                        (0, r.jsx)(i.Text, { variant: "text-md/normal", children: "Basic rectangular skeleton" }),
                        (0, r.jsx)(u.A, {
                            children: (0, r.jsx)("div", {
                                style: { height: 120, width: "100%", background: "transparent" },
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(i.Text, {
                    variant: "text-lg/normal",
                    children:
                        "Here we have a Grid with three Skeleton children that are wrapping three ShopProductCard to simulate a shop loading state",
                }),
                (0, r.jsx)(l.A, {
                    children: (0, r.jsxs)(o.A, {
                        columns: 3,
                        children: [
                            (0, r.jsx)(u.A, { children: (0, r.jsx)(s.A, { skuId: "1458472704192811088" }) }),
                            (0, r.jsx)(u.A, { children: (0, r.jsx)(s.A, { skuId: "1458472704192811088" }) }),
                            (0, r.jsx)(u.A, { children: (0, r.jsx)(s.A, { skuId: "1458472704192811088" }) }),
                        ],
                    }),
                }),
                (0, r.jsx)(i.Text, {
                    variant: "text-lg/normal",
                    children:
                        "Here we have a Grid with two Skeleton children that are wrapping two FeaturedCollection to simulate a shop loading state",
                }),
                (0, r.jsx)(l.A, {
                    children: (0, r.jsxs)(o.A, {
                        columns: 2,
                        children: [
                            (0, r.jsx)(u.A, {
                                children: (0, r.jsx)(a.A, {
                                    backgroundImage:
                                        "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                    logoSrc:
                                        "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                    supplementalImage:
                                        "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                    href: "",
                                    ctaText: "Take Me There",
                                }),
                            }),
                            (0, r.jsx)(u.A, {
                                children: (0, r.jsx)(a.A, {
                                    backgroundImage:
                                        "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                    logoSrc:
                                        "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                    supplementalImage:
                                        "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
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
