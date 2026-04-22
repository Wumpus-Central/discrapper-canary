"use strict";
a.d(t, { x: () => c });
var r = a(627968);
a(64700);
var l = a(834730),
    n = a(534514),
    i = a(219561),
    s = a(261225),
    o = a(673277),
    d = a(427941);
let c = {
    name: "BackgroundImage",
    id: "background-image",
    component: (e) => {
        let { backgroundImage: t, secondBackgroundImage: a } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.E, {
                    variant: "text-lg/semibold",
                    children:
                        "Background Image just takes children and displays them in with a background image behind them, and some padding to add inset",
                }),
                (0, r.jsx)(d.A, {
                    backgroundImage: { src: t },
                    children: (0, r.jsx)(o.A, {
                        children: (0, r.jsx)(s.A, {
                            columns: 2,
                            children: (0, r.jsxs)(i.Kp, {
                                direction: "vertical",
                                children: [
                                    (0, r.jsx)(n.D, {
                                        variant: "heading-xxl/bold",
                                        children: "What can I get with orbs?",
                                    }),
                                    (0, r.jsx)(l.E, {
                                        variant: "text-md/normal",
                                        children: "Spend Orbs on exclusives or grab your favorites from the shop",
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
                (0, r.jsx)(o.A, {
                    children: (0, r.jsx)(l.E, {
                        variant: "text-lg/semibold",
                        children: "It also automatically handles animated asset urls",
                    }),
                }),
                (0, r.jsx)(d.A, {
                    backgroundImage: { src: a },
                    children: (0, r.jsx)(o.A, {
                        children: (0, r.jsx)(s.A, {
                            columns: 2,
                            children: (0, r.jsxs)(i.Kp, {
                                direction: "vertical",
                                children: [
                                    (0, r.jsx)(n.D, {
                                        variant: "heading-xxl/bold",
                                        children: "What can I get with orbs?",
                                    }),
                                    (0, r.jsx)(l.E, {
                                        variant: "text-md/normal",
                                        children: "Spend Orbs on exclusives or grab your favorites from the shop",
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            ],
        });
    },
    controls: {
        backgroundImage: {
            label: "Background Image",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
        },
        secondBackgroundImage: {
            label: "Second Background Image",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/5029a9a78bdc28cef510f1bfdac9addb8b88664ecd81902baccba38d3e1104b0",
        },
    },
};
