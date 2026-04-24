a.r(t), a.d(t, { cmsConfig: () => eR, cmsCollection: () => eT });
var n = a(627968),
    r = a(64700),
    l = a(834730),
    i = a(534514),
    s = a(219561),
    o = a(261225),
    c = a(673277),
    d = a(427941),
    u = a(653793);
let h = () => (0, n.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120, minWidth: 120 } });
var p = a(18769),
    m = a(118713);
let f = () =>
        (0, n.jsx)("div", {
            style: { display: "flex", justifyContent: "center", alignItems: "center" },
            children: (0, n.jsx)("div", { style: { height: 96, width: 96, borderRadius: 48, background: "grey" } }),
        }),
    b = () => (0, n.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 240 } });
var _ = a(204990),
    g = a(970488);
let x = (e) => {
        let { color: t, children: a } = e;
        return (0, n.jsx)("div", {
            style: {
                background: t,
                minHeight: 120,
                height: "100%",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
            },
            children: a,
        });
    },
    v = {
        name: "Grid",
        id: "grid",
        component: (e) => {
            let {
                columns: t,
                paginationStrategy: a,
                perPage: r,
                paginationPosition: i,
                gridItemColumns: s,
                gridItemRows: c,
            } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(l.E, {
                        variant: "text-lg/semibold",
                        children:
                            "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens.",
                    }),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)(l.E, {
                        variant: "text-lg/semibold",
                        children: "GridItem is (optionally) used to set the size of a grid itme in the grid.",
                    }),
                    (0, n.jsx)("div", {
                        style: { marginTop: 24 },
                        children: (0, n.jsxs)(o.Ay, {
                            columns: t,
                            paginationOptions: { paginationStrategy: a, perPage: r, paginationPosition: i },
                            children: [
                                (0, n.jsx)(x, { color: "red" }),
                                (0, n.jsx)(g.A, {
                                    columns: s,
                                    rows: c,
                                    children: (0, n.jsx)(x, {
                                        color: "orange",
                                        children: (0, n.jsx)(l.E, {
                                            variant: "text-lg/semibold",
                                            children: "GridItem",
                                        }),
                                    }),
                                }),
                                (0, n.jsx)(x, { color: "yellow" }),
                                (0, n.jsx)(x, { color: "green" }),
                                (0, n.jsx)(x, { color: "blue" }),
                                (0, n.jsx)(x, { color: "violet" }),
                                (0, n.jsx)(x, { color: "red" }),
                                (0, n.jsx)(x, { color: "orange" }),
                                (0, n.jsx)(x, { color: "yellow" }),
                                (0, n.jsx)(x, { color: "green" }),
                                (0, n.jsx)(x, { color: "blue" }),
                                (0, n.jsx)(x, { color: "violet" }),
                                (0, n.jsx)(x, { color: "red" }),
                                (0, n.jsx)(x, { color: "orange" }),
                                (0, n.jsx)(x, { color: "yellow" }),
                                (0, n.jsx)(x, { color: "green" }),
                                (0, n.jsx)(x, { color: "blue" }),
                                (0, n.jsx)(x, { color: "violet" }),
                                (0, n.jsx)(x, { color: "red" }),
                                (0, n.jsx)(x, { color: "orange" }),
                                (0, n.jsx)(x, { color: "yellow" }),
                                (0, n.jsx)(x, { color: "green" }),
                                (0, n.jsx)(x, { color: "blue" }),
                                (0, n.jsx)(x, {
                                    color: "violet",
                                    children: (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Last Child" }),
                                }),
                            ],
                        }),
                    }),
                ],
            });
        },
        controls: {
            columns: { label: "Columns", type: "number", defaultValue: 3 },
            paginationStrategy: {
                label: "Pagination Strategy",
                type: "select",
                defaultValue: _.o.PAGINATE,
                options: [
                    { label: "Paginate", value: _.o.PAGINATE },
                    { label: "Truncate", value: _.o.TRUNCATE },
                ],
            },
            perPage: { label: "Grid Items per Page (default, all)", type: "number", defaultValue: 3 },
            paginationPosition: {
                label: "Pagination Position",
                type: "select",
                defaultValue: "bottom",
                options: [
                    { label: "Top", value: "top" },
                    { label: "Bottom", value: "bottom" },
                ],
            },
            gridItemColumns: { label: "Grid Item Columns", type: "number", defaultValue: 1 },
            gridItemRows: { label: "Grid Item Rows", type: "number", defaultValue: 1 },
        },
    };
var A = a(735438),
    E = a(939249),
    y = a(331322),
    I = a(821609),
    S = a(150934),
    j = a(292666),
    C = a(691885),
    T = a(52822),
    R = a(951707),
    w = a(614822);
let k = [
        { id: "xxs", label: "xxs", value: "xxs" },
        { id: "xs", label: "xs", value: "xs" },
        { id: "sm", label: "sm", value: "sm" },
        { id: "md", label: "md", value: "md" },
        { id: "lg", label: "lg", value: "lg" },
        { id: "xl", label: "xl", value: "xl" },
        { id: "xxl", label: "xxl", value: "xxl" },
        { id: "none", label: "0px", value: 0 },
        { id: "4px", label: "4px", value: 4 },
        { id: "6px", label: "6px", value: 6 },
        { id: "8px", label: "8px", value: 8 },
        { id: "12px", label: "12px", value: 12 },
        { id: "16px", label: "16px", value: 16 },
        { id: "20px", label: "20px", value: 20 },
        { id: "24px", label: "24px", value: 24 },
        { id: "32px", label: "32px", value: 32 },
        { id: "40px", label: "40px", value: 40 },
    ],
    L = () => (0, n.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120 } });
var N = a(954644),
    O = a(700263);
let P = {
    title: "Containers",
    stories: [
        v,
        {
            name: "Card",
            id: "card",
            component: () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Card wraps its children in a container that has border-radius and elevation on hover.",
                        }),
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/semibold",
                            children:
                                "It will take up the full width of the parent, and the minimum height for its children",
                        }),
                        (0, n.jsxs)(c.A, {
                            children: [
                                (0, n.jsx)(u.A, {
                                    children: (0, n.jsx)("div", {
                                        style: { background: "red" },
                                        children: (0, n.jsx)(h, {}),
                                    }),
                                }),
                                (0, n.jsx)(u.A, {
                                    children: (0, n.jsx)("div", {
                                        style: { background: "orange" },
                                        children: (0, n.jsx)(h, {}),
                                    }),
                                }),
                                (0, n.jsx)(u.A, {
                                    children: (0, n.jsx)("div", {
                                        style: { background: "yellow" },
                                        children: (0, n.jsx)(h, {}),
                                    }),
                                }),
                                (0, n.jsx)(u.A, {
                                    children: (0, n.jsx)("div", {
                                        style: { background: "green" },
                                        children: (0, n.jsx)(h, {}),
                                    }),
                                }),
                                (0, n.jsx)(u.A, {
                                    children: (0, n.jsx)("div", {
                                        style: { background: "blue" },
                                        children: (0, n.jsx)(h, {}),
                                    }),
                                }),
                                (0, n.jsx)(u.A, {
                                    children: (0, n.jsx)("div", {
                                        style: { background: "violet" },
                                        children: (0, n.jsx)(h, {}),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(c.A, {
                            children: [
                                (0, n.jsx)(l.E, {
                                    variant: "text-md/normal",
                                    children: "Cards inside of a horizontal stack with a min-width of 120px",
                                }),
                                (0, n.jsxs)(s.Kp, {
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(u.A, {
                                            children: (0, n.jsx)("div", {
                                                style: { background: "red" },
                                                children: (0, n.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, n.jsx)(u.A, {
                                            children: (0, n.jsx)("div", {
                                                style: { background: "orange" },
                                                children: (0, n.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, n.jsx)(u.A, {
                                            children: (0, n.jsx)("div", {
                                                style: { background: "yellow" },
                                                children: (0, n.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, n.jsx)(u.A, {
                                            children: (0, n.jsx)("div", {
                                                style: { background: "green" },
                                                children: (0, n.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, n.jsx)(u.A, {
                                            children: (0, n.jsx)("div", {
                                                style: { background: "blue" },
                                                children: (0, n.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, n.jsx)(u.A, {
                                            children: (0, n.jsx)("div", {
                                                style: { background: "violet" },
                                                children: (0, n.jsx)(h, {}),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            controls: {},
        },
        {
            name: "Section",
            id: "section",
            component: (e) => {
                let { verticalMargin: t, padding: a } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Section is used to space out sections of the page. It takes a vertical margin to apply margin above and below, as well as padding to inset its children.",
                        }),
                        (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)("div", {
                                    style: { background: "red" },
                                    children: (0, n.jsx)(c.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, n.jsx)(L, {}),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    style: { background: "orange" },
                                    children: (0, n.jsx)(c.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, n.jsx)(L, {}),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    style: { background: "yellow" },
                                    children: (0, n.jsx)(c.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, n.jsx)(L, {}),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    style: { background: "green" },
                                    children: (0, n.jsx)(c.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, n.jsx)(L, {}),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    style: { background: "blue" },
                                    children: (0, n.jsx)(c.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, n.jsx)(L, {}),
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    style: { background: "violet" },
                                    children: (0, n.jsx)(c.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, n.jsx)(L, {}),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                verticalMargin: { label: "Vertical Margin", type: "number", defaultValue: 16 },
                padding: { label: "Padding", type: "number", defaultValue: 8 },
            },
        },
        {
            name: "BackgroundImage",
            id: "background-image",
            component: (e) => {
                let { backgroundImage: t, secondBackgroundImage: a } = e;
                return (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Background Image just takes children and displays them in with a background image behind them, and some padding to add inset",
                        }),
                        (0, n.jsx)(d.A, {
                            backgroundImage: { src: t },
                            children: (0, n.jsx)(c.A, {
                                children: (0, n.jsx)(o.Ay, {
                                    columns: 2,
                                    children: (0, n.jsxs)(s.Kp, {
                                        direction: "vertical",
                                        children: [
                                            (0, n.jsx)(i.D, {
                                                variant: "heading-xxl/bold",
                                                children: "What can I get with orbs?",
                                            }),
                                            (0, n.jsx)(l.E, {
                                                variant: "text-md/normal",
                                                children:
                                                    "Spend Orbs on exclusives or grab your favorites from the shop",
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                        (0, n.jsx)(c.A, {
                            children: (0, n.jsx)(l.E, {
                                variant: "text-lg/semibold",
                                children: "It also automatically handles animated asset urls",
                            }),
                        }),
                        (0, n.jsx)(d.A, {
                            backgroundImage: { src: a },
                            children: (0, n.jsx)(c.A, {
                                children: (0, n.jsx)(o.Ay, {
                                    columns: 2,
                                    children: (0, n.jsxs)(s.Kp, {
                                        direction: "vertical",
                                        children: [
                                            (0, n.jsx)(i.D, {
                                                variant: "heading-xxl/bold",
                                                children: "What can I get with orbs?",
                                            }),
                                            (0, n.jsx)(l.E, {
                                                variant: "text-md/normal",
                                                children:
                                                    "Spend Orbs on exclusives or grab your favorites from the shop",
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
        },
        {
            name: "Interactive H Scroll",
            id: "interactive-h-scroll",
            component: () => {
                let [e, t] = r.useState(15),
                    [a, l] = r.useState(8),
                    [i, s] = r.useState("xl"),
                    [o, c] = r.useState(!0),
                    d = r.useMemo(
                        () =>
                            [...Array(e)].map((e, t) =>
                                (0, n.jsx)(
                                    E.D,
                                    {
                                        className: w.j,
                                        onClick: () => console.log(t),
                                        children: (0, n.jsxs)(y.B, {
                                            direction: "vertical",
                                            justify: "space-between",
                                            align: "center",
                                            children: [
                                                (0, n.jsx)("div", { children: t }),
                                                t % 3 == 0 &&
                                                    (0, n.jsx)(I.$, {
                                                        onClick: () => console.log(`clicked button ${t}`),
                                                        text: "Click Me",
                                                    }),
                                            ],
                                        }),
                                    },
                                    t,
                                ),
                            ),
                        [e],
                    );
                return (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(R.A, { gap: a, edgeFade: i, hideActionsWhenDisabled: o, children: d }),
                        (0, n.jsx)(T.nB, {}),
                        (0, n.jsxs)(T.MG, {
                            children: [
                                (0, n.jsx)(S.S, {
                                    checked: o,
                                    onChange: () => c(!o),
                                    label: "Hide Actions When Disabled",
                                }),
                                (0, n.jsx)(j.k, {
                                    type: "number",
                                    min: 0,
                                    value: e.toString(),
                                    onChange: (e) => {
                                        t((0, A.clamp)(+e, 0, 100));
                                    },
                                    label: "Children Count",
                                }),
                            ],
                        }),
                        (0, n.jsx)(T.MG, {
                            children: (0, n.jsx)(C.l, {
                                value: a,
                                options: k,
                                onSelectionChange: l,
                                label: "Children Gap",
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        }),
                        (0, n.jsx)(T.MG, {
                            children: (0, n.jsx)(C.l, {
                                value: i,
                                options: k,
                                onSelectionChange: s,
                                label: "Edge Fade Space",
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                });
            },
            controls: {},
        },
        {
            name: "Carousel",
            id: "carousel",
            component: (e) =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/normal",
                            children: "Carousel steps through the children with a swipe and fade animation.",
                        }),
                        (0, n.jsx)(l.E, {
                            variant: "text-md/normal",
                            children:
                                "It has very minimal configuration options, instead choosing to be opinionated about the functionality of a carousel in a CMS world.",
                        }),
                        (0, n.jsx)(l.E, {
                            variant: "text-md/normal",
                            children:
                                "The carousel will pause slidding when the mouse hovers it, and resume on mouse leave.",
                        }),
                        (0, n.jsx)(c.A, {
                            children: (0, n.jsxs)(m.A, {
                                ...e,
                                children: [
                                    (0, n.jsx)("div", { style: { background: "red" }, children: (0, n.jsx)(b, {}) }),
                                    (0, n.jsx)("div", { style: { background: "orange" }, children: (0, n.jsx)(b, {}) }),
                                    (0, n.jsx)("div", { style: { background: "yellow" }, children: (0, n.jsx)(b, {}) }),
                                    (0, n.jsx)("div", { style: { background: "green" }, children: (0, n.jsx)(b, {}) }),
                                    (0, n.jsx)("div", { style: { background: "blue" }, children: (0, n.jsx)(b, {}) }),
                                    (0, n.jsx)("div", { style: { background: "violet" }, children: (0, n.jsx)(b, {}) }),
                                ],
                            }),
                        }),
                        (0, n.jsxs)(c.A, {
                            children: [
                                (0, n.jsx)(l.E, {
                                    variant: "text-md/normal",
                                    children:
                                        "Here is an example of what a carousel inside of a card might look like for showing off different products",
                                }),
                                (0, n.jsx)("br", {}),
                                (0, n.jsx)(u.A, {
                                    children: (0, n.jsx)("div", {
                                        style: {
                                            background: "white",
                                            padding: 12,
                                            borderRadius: 8,
                                            aspectRatio: "1/1",
                                            maxWidth: 240,
                                            display: "flex",
                                            overflow: "hidden",
                                        },
                                        children: (0, n.jsxs)(m.A, {
                                            ...e,
                                            children: [
                                                (0, n.jsx)(f, {}),
                                                (0, n.jsx)(f, {}),
                                                (0, n.jsx)(f, {}),
                                                (0, n.jsx)(f, {}),
                                                (0, n.jsx)(f, {}),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(c.A, {
                            children: [
                                (0, n.jsx)(l.E, {
                                    variant: "text-md/normal",
                                    children: "And here is an example of a FeaturedBlock Carousel",
                                }),
                                (0, n.jsx)("br", {}),
                                (0, n.jsxs)(m.A, {
                                    ...e,
                                    children: [
                                        (0, n.jsx)(p.A, {
                                            href: "",
                                            backgroundImage: {
                                                src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                            },
                                            logoSrc: {
                                                src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                            },
                                            supplementalImage: {
                                                src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                            },
                                            ctaText: "View The Collection",
                                        }),
                                        (0, n.jsx)(p.A, {
                                            href: "",
                                            backgroundImage: {
                                                src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                            },
                                            logoSrc: {
                                                src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                            },
                                            supplementalImage: {
                                                src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                            },
                                            ctaText: "View The Collection",
                                        }),
                                        (0, n.jsx)(p.A, {
                                            href: "",
                                            backgroundImage: {
                                                src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                            },
                                            logoSrc: {
                                                src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                            },
                                            supplementalImage: {
                                                src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                            },
                                            ctaText: "View The Collection",
                                        }),
                                        (0, n.jsx)(p.A, {
                                            href: "",
                                            backgroundImage: {
                                                src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                            },
                                            logoSrc: {
                                                src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                            },
                                            supplementalImage: {
                                                src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                            },
                                            ctaText: "View The Collection",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            controls: {
                slideDuration: {
                    label: "Slide Duration (production default is 5000)",
                    type: "number",
                    defaultValue: 2500,
                },
                paused: { label: "Pause", type: "boolean", defaultValue: !1 },
            },
        },
        {
            name: "Skeleton",
            id: "skeleton",
            component: () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Skeleton provides a loading placeholder with a shimmer effect while content is being loaded.",
                        }),
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/normal",
                            children:
                                "Skeleton hides its children and applies a mask over the whole container of the child",
                        }),
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/normal",
                            children:
                                "Skeleton always puts a border radius on the shimmer. It might not match the child's radius.",
                        }),
                        (0, n.jsxs)(c.A, {
                            children: [
                                (0, n.jsx)(l.E, { variant: "text-md/normal", children: "Basic rectangular skeleton" }),
                                (0, n.jsx)(O.A, {
                                    children: (0, n.jsx)("div", {
                                        style: { height: 120, width: "100%", background: "transparent" },
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/normal",
                            children:
                                "Here we have a Grid with three Skeleton children that are wrapping three ShopProductCard to simulate a shop loading state",
                        }),
                        (0, n.jsx)(c.A, {
                            children: (0, n.jsxs)(o.Ay, {
                                columns: 3,
                                children: [
                                    (0, n.jsx)(O.A, { children: (0, n.jsx)(N.A, { skuId: "1458472704192811088" }) }),
                                    (0, n.jsx)(O.A, { children: (0, n.jsx)(N.A, { skuId: "1458472704192811088" }) }),
                                    (0, n.jsx)(O.A, { children: (0, n.jsx)(N.A, { skuId: "1458472704192811088" }) }),
                                ],
                            }),
                        }),
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/normal",
                            children:
                                "Here we have a Grid with two Skeleton children that are wrapping two FeaturedCollection to simulate a shop loading state",
                        }),
                        (0, n.jsx)(c.A, {
                            children: (0, n.jsxs)(o.Ay, {
                                columns: 2,
                                children: [
                                    (0, n.jsx)(O.A, {
                                        children: (0, n.jsx)(p.A, {
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
                                    (0, n.jsx)(O.A, {
                                        children: (0, n.jsx)(p.A, {
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
        },
    ],
};
var D = a(724560),
    M = a(706992),
    U = a(304973),
    F = a(53566),
    V = a(228880);
let B = (e) => {
    let { backgroundImage: t, href: a, ctaText: r } = e,
        i = (0, F.S)(r ?? "");
    return (0, n.jsx)("div", {
        className: V.q,
        children: (0, n.jsx)(d.A, {
            backgroundImage: t,
            backgroundPosition: "left",
            children: (0, n.jsx)("div", {
                className: V.R,
                children: (0, n.jsx)(l.E, { variant: "text-lg/bold", color: "always-white", children: i }),
            }),
        }),
    });
};
var G = a(618473);
let H = () => (0, n.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } });
var W = a(260779);
let z = () => (0, n.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } }),
    Z = {
        title: "Heroes",
        stories: [
            {
                name: "ContainedHero",
                id: "contained-hero",
                component: (e) => {
                    let {
                            containerHeight: t,
                            showChildren: a,
                            bannerSrc: r,
                            animatedBannerSrc: l,
                            logoSrc: i,
                            href: s,
                            backgroundColor: o,
                        } = e,
                        c = () =>
                            a
                                ? (0, n.jsxs)(R.A, {
                                      children: [
                                          (0, n.jsx)(H, {}),
                                          (0, n.jsx)(H, {}),
                                          (0, n.jsx)(H, {}),
                                          (0, n.jsx)(H, {}),
                                          (0, n.jsx)(H, {}),
                                          (0, n.jsx)(H, {}),
                                          (0, n.jsx)(H, {}),
                                          (0, n.jsx)(H, {}),
                                          (0, n.jsx)(H, {}),
                                          (0, n.jsx)(H, {}),
                                      ],
                                  })
                                : null;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", {
                                style: { height: a ? void 0 : t },
                                children: (0, n.jsx)(G.A, {
                                    bannerSrc: { src: r },
                                    logoSrc: { src: i },
                                    href: s,
                                    backgroundColor: o,
                                    children: c(),
                                }),
                            }),
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)("div", {
                                style: { height: a ? void 0 : t },
                                children: (0, n.jsx)(G.A, {
                                    bannerSrc: { src: l },
                                    logoSrc: { src: i },
                                    href: s,
                                    backgroundColor: o,
                                    children: c(),
                                }),
                            }),
                        ],
                    });
                },
                controls: {
                    bannerSrc: {
                        label: "Banner Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                    },
                    animatedBannerSrc: {
                        label: "Animated Banner Source (GIF/WebP)",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/5029a9a78bdc28cef510f1bfdac9addb8b88664ecd81902baccba38d3e1104b0",
                    },
                    logoSrc: {
                        label: "Logo Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                    },
                    backgroundColor: { label: "Background Color", type: "text", defaultValue: "#171D55" },
                    href: { label: "Href", type: "text", defaultValue: "/shop?tab=catalog" },
                    containerHeight: { label: "Container Height", type: "number", defaultValue: 150 },
                    showChildren: { label: "Show Children", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "FullHero",
                id: "full-hero",
                component: (e) => {
                    let { bannerSrc: t, animatedBannerSrc: a, logoSrc: r, backgroundColor: l, href: i } = e;
                    return (0, n.jsx)(W.A, {
                        bannerSrc: "" !== a ? [{ src: a }, { src: t }] : { src: t },
                        logoSrc: "" !== r ? { src: r } : void 0,
                        backgroundColor: l,
                        href: "" !== i ? i : void 0,
                        children: (0, n.jsxs)(R.A, {
                            children: [
                                (0, n.jsx)(z, {}),
                                (0, n.jsx)(z, {}),
                                (0, n.jsx)(z, {}),
                                (0, n.jsx)(z, {}),
                                (0, n.jsx)(z, {}),
                                (0, n.jsx)(z, {}),
                                (0, n.jsx)(z, {}),
                                (0, n.jsx)(z, {}),
                                (0, n.jsx)(z, {}),
                                (0, n.jsx)(z, {}),
                            ],
                        }),
                    });
                },
                controls: {
                    bannerSrc: {
                        label: "Banner Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                    },
                    animatedBannerSrc: { label: "Animated Banner Source (GIF/WebP)", type: "text", defaultValue: "" },
                    logoSrc: {
                        label: "Logo Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                    },
                    backgroundColor: { label: "Background Color", type: "text", defaultValue: "#171D55" },
                    href: { label: "Href", type: "text", defaultValue: "/shop?tab=catalog" },
                },
            },
        ],
    };
var K = a(561769),
    Y = a(41770),
    X = a(503698),
    $ = a.n(X),
    J = a(157941),
    q = a(585289);
function Q(e) {
    let { value: t, onChange: l } = e,
        i = "json",
        s = r.useRef(null),
        [o, c] = r.useState("");
    return (
        r.useEffect(() => {
            let e = !1,
                n = (t ?? "") + "\n";
            return (
                Promise.all([a.e("57036"), a.e("75134")])
                    .then(a.bind(a, 981776))
                    .then((a) => {
                        if (e) return;
                        let r = a.default;
                        if (null != t && r.hasLanguage(i)) {
                            let e = r.highlight(i, t, !0);
                            if (null != e) return void c(e.value + "\n");
                        }
                        c(n);
                    })
                    .catch(() => {
                        e || c(n);
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, i]),
        (0, n.jsxs)("div", {
            className: q.t,
            children: [
                (0, n.jsx)("pre", {
                    className: q.c5,
                    "aria-hidden": "true",
                    children: (0, n.jsx)(J.l, {
                        location: "LayoutEditor",
                        code: t,
                        lang: "json",
                        className: "hljs",
                        children: (0, n.jsx)("code", {
                            className: $()("hljs", i),
                            dangerouslySetInnerHTML: { __html: o ?? "" },
                        }),
                    }),
                }),
                (0, n.jsx)("textarea", {
                    ref: s,
                    className: q.mW,
                    value: t,
                    onChange: (e) => {
                        l(e.target.value);
                    },
                    onScroll: (e) => {
                        let t = e.target,
                            a = t.previousElementSibling;
                        null != a && ((a.scrollTop = t.scrollTop), (a.scrollLeft = t.scrollLeft));
                    },
                    onKeyDown: (e) => {
                        if ("Tab" === e.key) {
                            e.preventDefault();
                            let a = e.target,
                                n = a.selectionStart,
                                r = a.selectionEnd;
                            if (e.shiftKey) {
                                let e = t.lastIndexOf("\n", n - 1) + 1,
                                    a = t.indexOf("\n", n),
                                    r = t.substring(e, -1 === a ? t.length : a),
                                    i = 0;
                                for (let e = 0; e < Math.min(2, r.length); e++)
                                    if (" " === r[e]) i++;
                                    else break;
                                i > 0 &&
                                    (l(t.substring(0, e) + t.substring(e + i)),
                                    setTimeout(() => {
                                        if (null != s.current) {
                                            let t = Math.max(e, n - i);
                                            s.current.selectionStart = s.current.selectionEnd = t;
                                        }
                                    }, 0));
                            } else
                                l(t.substring(0, n) + "  " + t.substring(r)),
                                    setTimeout(() => {
                                        null != s.current &&
                                            (s.current.selectionStart = s.current.selectionEnd = n + 2);
                                    }, 0);
                        }
                    },
                    spellCheck: !1,
                    autoCapitalize: "off",
                    autoComplete: "off",
                    autoCorrect: "off",
                    rows: 30,
                }),
            ],
        })
    );
}
var ee = a(785330),
    et = a(652215),
    ea = a(985018),
    en = a(692914);
let er = {
        name: "Remote Layouts",
        id: "remote-layouts",
        component: (e) => {
            let { layoutId: t, tenantId: a } = e;
            return (0, n.jsx)(ee.Qs, { layoutId: t, tenantId: a });
        },
        controls: {
            layoutId: { label: "Layout Id", type: "text", defaultValue: "1465939725649973269" },
            tenantId: { label: "Tenant Id", type: "text", defaultValue: et.FYj },
        },
    },
    el = {
        name: "Remote Templates",
        id: "remote-templates",
        component: (e) => {
            let { templateId: t, tenantId: a } = e;
            return (0, n.jsx)(ee.Z_, { templateId: t, tenantId: a });
        },
        controls: {
            templateId: { label: "Template Id", type: "text", defaultValue: "popular-picks" },
            tenantId: { label: "Tenant Id", type: "text", defaultValue: et.FYj },
        },
    };
var ei = a(646092),
    es = a(377890),
    eo = a(359778),
    ec = a(264302);
let ed = (e) => {
    let { color: t, children: a } = e;
    return (0, n.jsx)(eo.Z, {
        style: { backgroundColor: t, padding: "16px", minWidth: "100px", minHeight: "100px" },
        children: (0, n.jsx)(l.E, { variant: "text-md/semibold", children: a }),
    });
};
var eu = a(605248),
    eh = a(287944);
let ep = {
    title: "Mana",
    stories: [
        {
            name: "Button",
            id: "cms-button",
            component: (e) =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/semibold",
                            children: "Button component for CMS interactions.",
                        }),
                        (0, n.jsxs)(y.B, {
                            direction: "vertical",
                            children: [
                                (0, n.jsx)(ei.A, { ...e }),
                                (0, n.jsx)("hr", {}),
                                (0, n.jsx)(ei.A, { href: e.href, ctaText: "Variant = primary", variant: "primary" }),
                                (0, n.jsx)(ei.A, {
                                    href: e.href,
                                    ctaText: "Variant = secondary",
                                    variant: "secondary",
                                }),
                                (0, n.jsx)(ei.A, {
                                    href: e.href,
                                    ctaText: "Variant = critical-primary",
                                    variant: "critical-primary",
                                }),
                                (0, n.jsx)(ei.A, {
                                    href: e.href,
                                    ctaText: "Variant = critical-secondary",
                                    variant: "critical-secondary",
                                }),
                                (0, n.jsx)(ei.A, { href: e.href, ctaText: "Variant = active", variant: "active" }),
                                (0, n.jsx)(ei.A, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-primary",
                                    variant: "overlay-primary",
                                }),
                                (0, n.jsx)(ei.A, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-secondary",
                                    variant: "overlay-secondary",
                                }),
                                (0, n.jsx)(ei.A, {
                                    href: e.href,
                                    ctaText: "Variant = expressive",
                                    variant: "expressive",
                                }),
                            ],
                        }),
                    ],
                }),
            controls: {
                href: { type: "text", label: "URL", defaultValue: "https://discord.com" },
                ctaText: { type: "text", label: "Button Text", defaultValue: "Click Me" },
                variant: {
                    type: "select",
                    label: "Variant",
                    defaultValue: "secondary",
                    options: [
                        { label: "Primary", value: "primary" },
                        { label: "Secondary", value: "secondary" },
                        { label: "Critical Primary", value: "critical-primary" },
                        { label: "Critical Secondary", value: "critical-secondary" },
                        { label: "Active", value: "active" },
                        { label: "Overlay Primary", value: "overlay-primary" },
                        { label: "Overlay Secondary", value: "overlay-secondary" },
                        { label: "Expressive", value: "expressive" },
                    ],
                },
            },
        },
        {
            name: "Heading",
            id: "cms-heading",
            component: (e) =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.E, {
                            variant: "text-lg/semibold",
                            children: "Heading component for CMS content.",
                        }),
                        (0, n.jsx)(es.A, { ...e }),
                        (0, n.jsx)("hr", {}),
                        (0, n.jsx)(es.A, { content: "Variant = heading-sm/normal", variant: "heading-sm/normal" }),
                        (0, n.jsx)(es.A, { content: "Variant = heading-sm/medium", variant: "heading-sm/medium" }),
                        (0, n.jsx)(es.A, { content: "Variant = heading-sm/semibold", variant: "heading-sm/semibold" }),
                        (0, n.jsx)(es.A, { content: "Variant = heading-md/normal", variant: "heading-md/normal" }),
                        (0, n.jsx)(es.A, { content: "Variant = heading-md/medium", variant: "heading-md/medium" }),
                        (0, n.jsx)(es.A, { content: "Variant = heading-md/semibold", variant: "heading-md/semibold" }),
                        (0, n.jsx)(es.A, { content: "Variant = heading-lg/normal", variant: "heading-lg/normal" }),
                        (0, n.jsx)(es.A, { content: "Variant = heading-lg/medium", variant: "heading-lg/medium" }),
                        (0, n.jsx)(es.A, { content: "Variant = heading-lg/semibold", variant: "heading-lg/semibold" }),
                    ],
                }),
            controls: {
                content: { type: "text", label: "Content", defaultValue: "Hello, world!" },
                variant: {
                    type: "select",
                    label: "Variant",
                    defaultValue: "heading-md/semibold",
                    options: [
                        { label: "heading-sm/normal", value: "heading-sm/normal" },
                        { label: "heading-sm/medium", value: "heading-sm/medium" },
                        { label: "heading-sm/semibold", value: "heading-sm/semibold" },
                        { label: "heading-md/normal", value: "heading-md/normal" },
                        { label: "heading-md/medium", value: "heading-md/medium" },
                        { label: "heading-md/semibold", value: "heading-md/semibold" },
                        { label: "heading-lg/normal", value: "heading-lg/normal" },
                        { label: "heading-lg/medium", value: "heading-lg/medium" },
                        { label: "heading-lg/semibold", value: "heading-lg/semibold" },
                    ],
                },
            },
        },
        {
            name: "Stack",
            id: "cms-stack",
            component: (e) =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Stack component for CMS layouts." }),
                        (0, n.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, n.jsxs)(ec.A, {
                                ...e,
                                children: [
                                    (0, n.jsx)(ed, { color: "#5865F2", children: "Item 1" }),
                                    (0, n.jsx)(ed, { color: "#57F287", children: "Item 2" }),
                                    (0, n.jsx)(ed, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, n.jsx)("hr", {}),
                        (0, n.jsx)(l.E, { variant: "text-md/semibold", children: "Horizontal Stack" }),
                        (0, n.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, n.jsxs)(ec.A, {
                                ...e,
                                direction: "horizontal",
                                children: [
                                    (0, n.jsx)(ed, { color: "#5865F2", children: "Item 1" }),
                                    (0, n.jsx)(ed, { color: "#57F287", children: "Item 2" }),
                                    (0, n.jsx)(ed, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, n.jsx)(l.E, { variant: "text-md/semibold", children: "Vertical Stack" }),
                        (0, n.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, n.jsxs)(ec.A, {
                                ...e,
                                direction: "vertical",
                                children: [
                                    (0, n.jsx)(ed, { color: "#5865F2", children: "Item 1" }),
                                    (0, n.jsx)(ed, { color: "#57F287", children: "Item 2" }),
                                    (0, n.jsx)(ed, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                    ],
                }),
            controls: {
                direction: {
                    type: "select",
                    label: "Direction",
                    defaultValue: "vertical",
                    options: [
                        { label: "Horizontal", value: "horizontal" },
                        { label: "Vertical", value: "vertical" },
                    ],
                },
                align: {
                    type: "select",
                    label: "Align",
                    defaultValue: "start",
                    options: [
                        { label: "Start", value: "start" },
                        { label: "Center", value: "center" },
                        { label: "End", value: "end" },
                        { label: "Stretch", value: "stretch" },
                    ],
                },
                justify: {
                    type: "select",
                    label: "Justify",
                    defaultValue: "start",
                    options: [
                        { label: "Start", value: "start" },
                        { label: "Center", value: "center" },
                        { label: "End", value: "end" },
                        { label: "Space Between", value: "space-between" },
                        { label: "Space Around", value: "space-around" },
                    ],
                },
            },
        },
        {
            name: "Text",
            id: "cms-text",
            component: (e) =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Text component for CMS content." }),
                        (0, n.jsx)(eu.A, { ...e }),
                        (0, n.jsx)("hr", {}),
                        (0, n.jsx)(eu.A, { content: "Variant = text-xs/normal", variant: "text-xs/normal" }),
                        (0, n.jsx)(eu.A, { content: "Variant = text-sm/normal", variant: "text-sm/normal" }),
                        (0, n.jsx)(eu.A, { content: "Variant = text-sm/medium", variant: "text-sm/medium" }),
                        (0, n.jsx)(eu.A, { content: "Variant = text-sm/semibold", variant: "text-sm/semibold" }),
                        (0, n.jsx)(eu.A, { content: "Variant = text-md/normal", variant: "text-md/normal" }),
                        (0, n.jsx)(eu.A, { content: "Variant = text-md/medium", variant: "text-md/medium" }),
                        (0, n.jsx)(eu.A, { content: "Variant = text-md/semibold", variant: "text-md/semibold" }),
                        (0, n.jsx)(eu.A, { content: "Variant = text-lg/normal", variant: "text-lg/normal" }),
                        (0, n.jsx)(eu.A, { content: "Variant = text-lg/medium", variant: "text-lg/medium" }),
                        (0, n.jsx)(eu.A, { content: "Variant = text-lg/semibold", variant: "text-lg/semibold" }),
                    ],
                }),
            controls: {
                content: { type: "text", label: "Content", defaultValue: "Hello, world!" },
                variant: {
                    type: "select",
                    label: "Variant",
                    defaultValue: "text-md/normal",
                    options: [
                        { label: "text-xs/normal", value: "text-xs/normal" },
                        { label: "text-sm/normal", value: "text-sm/normal" },
                        { label: "text-sm/medium", value: "text-sm/medium" },
                        { label: "text-sm/semibold", value: "text-sm/semibold" },
                        { label: "text-md/normal", value: "text-md/normal" },
                        { label: "text-md/medium", value: "text-md/medium" },
                        { label: "text-md/semibold", value: "text-md/semibold" },
                        { label: "text-lg/normal", value: "text-lg/normal" },
                        { label: "text-lg/medium", value: "text-lg/medium" },
                        { label: "text-lg/semibold", value: "text-lg/semibold" },
                    ],
                },
            },
        },
        {
            name: "Tooltip",
            id: "cms-tooltip",
            component: (e) =>
                (0, n.jsx)(eh.A, {
                    ...e,
                    children: (0, n.jsx)("div", {
                        style: { width: 300, background: "pink", borderRadius: 8, padding: 12 },
                        children: (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Hover me." }),
                    }),
                }),
            controls: {
                text: { type: "text", label: "Content", defaultValue: "Hello, world!" },
                position: {
                    type: "select",
                    label: "Position",
                    defaultValue: "top",
                    options: [
                        { label: "top", value: "top" },
                        { label: "left", value: "left" },
                        { label: "right", value: "right" },
                        { label: "bottom", value: "bottom" },
                    ],
                },
            },
        },
    ],
};
var em = a(206845),
    ef = a(77534),
    eb = a(519642);
let e_ = {
        id: "dummy-show-of-skeletons",
        children: [
            {
                block: "ContainedHero",
                bannerSrc: {
                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                },
                logoSrc: {
                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                },
                backgroundColor: "rgb(25, 32, 86)",
                children: [
                    {
                        block: "SubLayout",
                        tenantId: "dummy-tenant",
                        layoutId: "dummy-skeleton",
                        skeleton: [
                            {
                                block: "InteractiveHScroll",
                                children: [
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704079434020" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704167379109" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704192811088" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704222171347" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704272498709" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704306053202" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704087818312" }],
                                    },
                                    {
                                        block: "Skeleton",
                                        children: [{ block: "ShopProductCard", skuId: "1458472704096075816" }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    eg = {
        title: "Recursive",
        stories: [
            {
                name: "SkuList",
                id: "skulist",
                component: (e) => {
                    let { skuIds: t, sortPurchased: a, eagerLoad: r, showSkeleton: s } = e,
                        c = (0, ef.e)();
                    return (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(i.D, {
                                variant: "heading-lg/bold",
                                children: "The SkuList component takes a list of skus and maps them into a block",
                            }),
                            (0, n.jsx)(l.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here, we have a list of 3 skuIds and we map over them, pushing them into ShopProductCards",
                            }),
                            (0, n.jsx)(l.E, {
                                variant: "text-md/semibold",
                                children:
                                    "This will be useful when wanting to get a dynamic list of sku ids from the server (like popular picks) and push them into a product grid",
                            }),
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)(o.Ay, {
                                columns: 3,
                                children: (0, n.jsx)(eb.A, {
                                    skuIds: t?.split(","),
                                    skuBlock: "ShopProductCard",
                                    sortPurchased: a,
                                    eagerLoad: r,
                                    showSkeleton: s,
                                    componentMap: c,
                                }),
                            }),
                            (0, n.jsx)("hr", {}),
                            (0, n.jsx)(l.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                            (0, n.jsxs)(y.B, {
                                direction: "horizontal",
                                children: [
                                    (0, n.jsx)(l.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                                    (0, n.jsx)(em.A, {
                                        text: ea.intl.string(ea.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704192811088",
                                        children: (e) =>
                                            (0, n.jsx)(E.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, n.jsx)(l.E, {
                                                    variant: "text-sm/normal",
                                                    children: "1458472704192811088",
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(y.B, {
                                direction: "horizontal",
                                children: [
                                    (0, n.jsx)(l.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                                    (0, n.jsx)(em.A, {
                                        text: ea.intl.string(ea.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458479739110166560",
                                        children: (e) =>
                                            (0, n.jsx)(E.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, n.jsx)(l.E, {
                                                    variant: "text-sm/normal",
                                                    children: "1458479739110166560",
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(y.B, {
                                direction: "horizontal",
                                children: [
                                    (0, n.jsx)(l.E, { variant: "text-sm/bold", children: "Nameplate" }),
                                    (0, n.jsx)(em.A, {
                                        text: ea.intl.string(ea.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704524156959",
                                        children: (e) =>
                                            (0, n.jsx)(E.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, n.jsx)(l.E, {
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
                controls: {
                    skuIds: {
                        label: "SKU Ids",
                        type: "text",
                        defaultValue: "1458472704192811088,1458479739110166560,1458472704524156959",
                    },
                    sortPurchased: { label: "Sort Purchased to Back", type: "boolean", defaultValue: !1 },
                    eagerLoad: { label: "Eager Load", type: "boolean", defaultValue: !1 },
                    showSkeleton: { label: "Show Skeleton", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "SubLayout",
                id: "sub-layout-basic",
                component: () =>
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(i.D, {
                                variant: "heading-lg/bold",
                                children: 'The SubLayout component accepts a layout id and "get or fetch"es the layout',
                            }),
                            (0, n.jsx)(l.E, {
                                variant: "text-md/semibold",
                                children:
                                    "When resolved, the layout trees are merged into one layout. This allows for the asynchronous resolution of layouts, for faster first paints",
                            }),
                            (0, n.jsx)(l.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here, the \"popular picks\" are actually a sub layout with the id 'dummy-popular-picks'",
                            }),
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)("hr", {}),
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)(ee.Ay, { layout: Y.uG }),
                        ],
                    }),
                controls: {},
            },
            {
                name: "SubLayout - Loading State",
                id: "sub-layout-skeleton",
                component: () =>
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(i.D, {
                                variant: "heading-lg/bold",
                                children:
                                    'The SubLayout can take a "Skeleton" property which is just `children` to display if the layout is being fetched from the api',
                            }),
                            (0, n.jsx)(l.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here we use the `Skeleton` component to show the shop cards loading while the (dummy) Shop Cards SubLayout are resolving (it will never stop loading for demonstration purposes)",
                            }),
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)("hr", {}),
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)(ee.Ay, { layout: e_ }),
                        ],
                    }),
                controls: {},
            },
        ],
    };
var ex = a(575593),
    ev = a(674658),
    eA = a(88686),
    eE = a(780898),
    ey = a(174755),
    eI = a(486020);
let eS = (e) => {
    let { skuId: t, size: a = 128, animated: r = !1 } = e,
        { product: l } = (0, ev.q)(t, !0),
        i = l?.items[0];
    if (null == i) return null;
    if (i.type === ex.R.AVATAR_DECORATION) {
        let e = eI.Ay.getAvatarDecorationURL({ avatarDecoration: i, size: a, canAnimate: r });
        return null != e ? (0, n.jsx)("img", { src: e, alt: i.label }) : null;
    }
    if (i.type === ex.R.PROFILE_EFFECT) {
        let e = i.thumbnailPreviewSrc;
        return (0, n.jsx)("img", { src: e, alt: i.accessibilityLabel });
    }
    if (i.type === ex.R.NAMEPLATE) {
        let e = (0, eE.WK)(i);
        return (0, n.jsx)(ey.A, { nameplate: e, placement: eA.u.PREVIEW });
    }
    return null;
};
var ej = a(634791),
    eC = a(190503);
let eT = {
        id: "cms",
        name: "CMS",
        groups: [
            {
                title: "Layout Builder",
                stories: [
                    {
                        name: "Layout Builder",
                        id: "layout-builder",
                        component: () => {
                            let [e, t] = r.useState(JSON.stringify(Y.uG, null, 2)),
                                [a, l] = r.useState(e);
                            return (
                                r.useEffect(() => {
                                    try {
                                        (0, ee.F2)(JSON.parse(e)) && l(e);
                                    } catch {}
                                }, [e]),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(Q, { value: e, onChange: (e) => t(e) }),
                                        (0, n.jsx)("hr", {}),
                                        (0, n.jsx)(ee.Ay, { layout: JSON.parse(a) }),
                                    ],
                                })
                            );
                        },
                        controls: {},
                    },
                    {
                        name: "Orb Home (sample)",
                        id: "orb-home",
                        component: () => {
                            let e = {
                                id: "orb-home",
                                children: [
                                    {
                                        block: "Section",
                                        children: [
                                            { block: "Section", verticalMargin: 256, children: [] },
                                            {
                                                block: "Stack",
                                                direction: "horizontal",
                                                justify: "space-between",
                                                children: [
                                                    {
                                                        block: "Stack",
                                                        direction: "vertical",
                                                        children: [
                                                            {
                                                                block: "Heading",
                                                                variant: "heading-xxl/bold",
                                                                content: "Introducing Discord Orbs",
                                                            },
                                                            {
                                                                block: "Text",
                                                                variant: "text-lg/normal",
                                                                content:
                                                                    "Reward your play. Earn through Quests. Spend in the Shop",
                                                            },
                                                        ],
                                                    },
                                                    { block: "Button", href: "", ctaText: "Go to Quest Home" },
                                                ],
                                            },
                                            { block: "Section", verticalMargin: 64, children: [] },
                                            {
                                                block: "Section",
                                                children: [
                                                    {
                                                        block: "Grid",
                                                        columns: 4,
                                                        children: [
                                                            {
                                                                block: "SkuList",
                                                                eagerLoad: !0,
                                                                showSkeleton: !0,
                                                                sortPurchased: !0,
                                                                skuBlock: "ShopProductCard",
                                                                skuIds: [
                                                                    "1333912750274904064",
                                                                    "1342211853484429445",
                                                                    "1427463138634109025",
                                                                    "1427463138634109026",
                                                                    "1427463138634109027",
                                                                    "1332505467980873728",
                                                                    "1427463138634109028",
                                                                    "1351351503339913256",
                                                                    "1427463138646954035",
                                                                    "1427463138646954036",
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                            {
                                                block: "Section",
                                                children: [
                                                    {
                                                        block: "BackgroundImage",
                                                        backgroundImage: {
                                                            src: "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                                                        },
                                                        children: [
                                                            {
                                                                block: "Grid",
                                                                columns: 2,
                                                                children: [
                                                                    {
                                                                        block: "Stack",
                                                                        direction: "vertical",
                                                                        children: [
                                                                            {
                                                                                block: "Heading",
                                                                                variant: "heading-xxl/bold",
                                                                                content: "What can I get with orbs?",
                                                                            },
                                                                            {
                                                                                block: "Text",
                                                                                variant: "text-md/normal",
                                                                                content:
                                                                                    "Spend Orbs on exclusives or grab your favorites from the shop",
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                            {
                                                block: "Section",
                                                children: [
                                                    {
                                                        block: "SubTemplate",
                                                        tenantId: et.FYj,
                                                        templateId: "popular-picks",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            };
                            return (0, n.jsxs)("div", {
                                style: { position: "relative" },
                                children: [
                                    (0, n.jsx)("div", {
                                        style: {
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            opacity: 0.4,
                                            top: -168,
                                            left: 0,
                                            right: 0,
                                            backgroundImage:
                                                "url('https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d')",
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                        },
                                    }),
                                    (0, n.jsx)(K.v3.Provider, {
                                        value: { prioritizedCurrency: K.Hi.ORBS },
                                        children: (0, n.jsx)("div", {
                                            style: { position: "relative" },
                                            children: (0, n.jsx)(ee.Ay, { layout: e }),
                                        }),
                                    }),
                                ],
                            });
                        },
                        controls: {},
                    },
                    er,
                    el,
                    {
                        name: "Themed Images",
                        id: "themed-images",
                        component: (e) => {
                            let { lightAsset: t, darkAsset: a } = e,
                                r = {
                                    id: "themed-images",
                                    children: [
                                        {
                                            block: "BackgroundImage",
                                            backgroundImage: { src: { light: t, dark: a } },
                                            children: [
                                                {
                                                    block: "Stack",
                                                    direction: "vertical",
                                                    children: [
                                                        {
                                                            block: "Heading",
                                                            variant: "heading-xl/bold",
                                                            content: "Theme-aware images",
                                                        },
                                                        {
                                                            block: "Text",
                                                            variant: "text-md/normal",
                                                            content: "Switch your app theme to see this change",
                                                        },
                                                        {
                                                            block: "Text",
                                                            variant: "text-sm/normal",
                                                            content:
                                                                "(Light shows multiple orbs, dark shows hands holding an orb)",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                };
                            return (0, n.jsx)(ee.Ay, { layout: r });
                        },
                        controls: {
                            lightAsset: {
                                label: "Light Asset URL",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/8f774ab3b8482a9fd205e8b7285cc372448c4893d8fe9b50d37ddb70c922240d",
                            },
                            darkAsset: {
                                label: "Dark Asset URL",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                            },
                        },
                    },
                    {
                        name: "CMS String",
                        id: "cms-string",
                        component: (e) => {
                            let { text: t } = e;
                            (0, ea.useSyncMessages)(en.c);
                            let a = (0, F.S)(t);
                            return (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsxs)(l.E, {
                                        variant: "text-lg/bold",
                                        children: [
                                            "Any registered string key can be used to reference client-side international strings",
                                            " ",
                                        ],
                                    }),
                                    (0, n.jsx)(l.E, {
                                        variant: "text-md/normal",
                                        children: "Strings are registered in `useCmsString.tsx`",
                                    }),
                                    (0, n.jsx)("br", {}),
                                    (0, n.jsx)("hr", {}),
                                    (0, n.jsx)("br", {}),
                                    (0, n.jsxs)(l.E, { variant: "text-md/semibold", children: ["Received: ", t] }),
                                    (0, n.jsxs)(l.E, { variant: "text-md/semibold", children: ["Resolved: ", a] }),
                                ],
                            });
                        },
                        controls: {
                            text: { label: "Text", type: "text", defaultValue: "COLLECTIBLES_SHOP_THE_COLLECTION" },
                        },
                    },
                ],
            },
            ep,
            P,
            {
                title: "Content Wrappers",
                stories: [
                    {
                        name: "NarrowContent",
                        id: "narrow-content",
                        component: (e) => {
                            let { padding: t } = e;
                            return (0, n.jsx)("div", {
                                style: { background: "#5865f2", width: "100%" },
                                children: (0, n.jsx)(M.A, {
                                    padding: t,
                                    children: (0, n.jsx)("div", {
                                        style: { background: "white", color: "#000", padding: 16, fontWeight: "bold" },
                                        children: "Content constrained to 1080px, centered",
                                    }),
                                }),
                            });
                        },
                        controls: { padding: { label: "Padding", type: "number", defaultValue: 32, minValue: 0 } },
                    },
                    {
                        name: "FullBleedContent",
                        id: "full-bleed-content",
                        component: (e) => {
                            let { padding: t } = e;
                            return (0, n.jsx)("div", {
                                style: { background: "#5865f2", width: "100%" },
                                children: (0, n.jsx)(D.A, {
                                    padding: t,
                                    children: (0, n.jsx)("div", {
                                        style: { background: "white", color: "#000", padding: 16, fontWeight: "bold" },
                                        children: "Full-width content",
                                    }),
                                }),
                            });
                        },
                        controls: { padding: { label: "Padding", type: "number", defaultValue: 0, minValue: 0 } },
                    },
                ],
            },
            {
                title: "Featured Blocks",
                stories: [
                    {
                        name: "FeaturedChip",
                        id: "featured-chip",
                        component: (e) => {
                            let { backgroundImage: t, ...a } = e,
                                r = { backgroundImage: { src: t }, ...a };
                            return (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(l.E, {
                                        variant: "text-lg/semibold",
                                        children:
                                            "Featured Chip will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                                    }),
                                    (0, n.jsx)(c.A, { children: (0, n.jsx)(U.A, { ...r }) }),
                                    (0, n.jsxs)(c.A, {
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                                            (0, n.jsxs)(o.Ay, {
                                                columns: 3,
                                                children: [
                                                    (0, n.jsx)(U.A, { ...r }),
                                                    (0, n.jsx)(U.A, { ...r }),
                                                    (0, n.jsx)(U.A, { ...r }),
                                                    (0, n.jsx)(U.A, { ...r }),
                                                    (0, n.jsx)(U.A, { ...r }),
                                                    (0, n.jsx)(U.A, { ...r }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)(c.A, {
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, n.jsxs)(s.Kp, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, n.jsx)(U.A, { ...r }),
                                                    (0, n.jsx)(U.A, { ...r }),
                                                    (0, n.jsx)(U.A, { ...r }),
                                                    (0, n.jsx)(U.A, { ...r }),
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
                    },
                    {
                        name: "FeaturedCollection",
                        id: "featured-collection",
                        component: (e) => {
                            let {
                                    columns: t,
                                    backgroundImage: a,
                                    logoSrc: r,
                                    supplementalImage: i,
                                    ctaText: d,
                                    href: u,
                                } = e,
                                h = {
                                    backgroundImage: { src: a },
                                    logoSrc: { src: r },
                                    supplementalImage: { src: i },
                                    ctaText: d,
                                    href: u,
                                };
                            return (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(l.E, {
                                        variant: "text-lg/semibold",
                                        children:
                                            "Featured Collection will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                                    }),
                                    (0, n.jsx)(c.A, { children: (0, n.jsx)(p.A, { ...h }) }),
                                    (0, n.jsxs)(c.A, {
                                        children: [
                                            (0, n.jsxs)(l.E, {
                                                variant: "text-lg/semibold",
                                                children: ["Grid (", t, "):"],
                                            }),
                                            (0, n.jsxs)(o.Ay, {
                                                columns: t,
                                                children: [(0, n.jsx)(p.A, { ...h }), (0, n.jsx)(p.A, { ...h })],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)(c.A, {
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, n.jsxs)(s.Kp, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, n.jsx)(p.A, { ...h }),
                                                    (0, n.jsx)(p.A, { ...h }),
                                                    (0, n.jsx)(p.A, { ...h }),
                                                    (0, n.jsx)(p.A, { ...h }),
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
                    },
                    {
                        name: "FeaturedProduct",
                        id: "featured-product",
                        component: (e) => {
                            let { backgroundImage: t, ...a } = e,
                                r = { backgroundImage: { src: t }, ...a };
                            return (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "PLACEHOLDER" }),
                                    (0, n.jsx)(c.A, { children: (0, n.jsx)(B, { ...r }) }),
                                    (0, n.jsxs)(c.A, {
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                                            (0, n.jsxs)(o.Ay, {
                                                columns: 3,
                                                children: [
                                                    (0, n.jsx)(B, { ...r }),
                                                    (0, n.jsx)(B, { ...r }),
                                                    (0, n.jsx)(B, { ...r }),
                                                    (0, n.jsx)(B, { ...r }),
                                                    (0, n.jsx)(B, { ...r }),
                                                    (0, n.jsx)(B, { ...r }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)(c.A, {
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, n.jsxs)(s.Kp, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, n.jsx)(B, { ...r }),
                                                    (0, n.jsx)(B, { ...r }),
                                                    (0, n.jsx)(B, { ...r }),
                                                    (0, n.jsx)(B, { ...r }),
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
                            skuId: { label: "Sku Id", type: "text", defaultValue: "1458472704192811088" },
                        },
                    },
                ],
            },
            Z,
            eg,
            {
                title: "Sku",
                stories: [
                    {
                        name: "ShopProductCard",
                        id: "shopProduct-card",
                        component: (e) => {
                            let { skuId: t } = e;
                            return (0, n.jsx)("div", { children: (0, n.jsx)(N.A, { skuId: t }) });
                        },
                        controls: { skuId: { label: "SKU Id", type: "text", defaultValue: "1458472704192811088" } },
                    },
                    {
                        name: "SkuPreview",
                        id: "skupreview",
                        component: (e) => {
                            let { skuId: t } = e;
                            return (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(eS, { skuId: t }),
                                    (0, n.jsx)("hr", {}),
                                    (0, n.jsx)(l.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                                    (0, n.jsxs)(y.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                                            (0, n.jsx)(em.A, {
                                                text: ea.intl.string(ea.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458472704192811088",
                                                children: (e) =>
                                                    (0, n.jsx)(E.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, n.jsx)(l.E, {
                                                            variant: "text-sm/normal",
                                                            children: "1458472704192811088",
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)(y.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                                            (0, n.jsx)(em.A, {
                                                text: ea.intl.string(ea.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458479739110166560",
                                                children: (e) =>
                                                    (0, n.jsx)(E.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, n.jsx)(l.E, {
                                                            variant: "text-sm/normal",
                                                            children: "1458479739110166560",
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)(y.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-sm/bold", children: "Nameplate" }),
                                            (0, n.jsx)(em.A, {
                                                text: ea.intl.string(ea.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458472704524156959",
                                                children: (e) =>
                                                    (0, n.jsx)(E.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, n.jsx)(l.E, {
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
                    },
                ],
            },
            {
                title: "Utilities",
                stories: [
                    {
                        name: "The Any Block",
                        id: "any",
                        component: () =>
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsx)(l.E, {
                                        variant: "text-md/semibold",
                                        children:
                                            "The Any component is used to allow injecting super-bespoke components into a layout without defining a new block type.",
                                    }),
                                    (0, n.jsx)(l.E, {
                                        variant: "text-md/semibold",
                                        children:
                                            "It's ONLY use is to be overriden by another block in `useComponentRegistry`",
                                    }),
                                    (0, n.jsx)(c.A, { children: (0, n.jsx)(ej.A, {}) }),
                                ],
                            }),
                        controls: {},
                    },
                    {
                        name: "Image",
                        id: "cms-image",
                        component: (e) => {
                            let { imageSrc: t, videoSrc: a } = e;
                            return (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsxs)(c.A, {
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Static image" }),
                                            (0, n.jsx)("div", {
                                                style: { height: 200 },
                                                children: (0, n.jsx)(eC.A, { src: { src: t } }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)(c.A, {
                                        children: [
                                            (0, n.jsx)(l.E, { variant: "text-lg/semibold", children: "Video asset" }),
                                            (0, n.jsx)("div", {
                                                style: { height: 200 },
                                                children: (0, n.jsx)(eC.A, { src: { src: a } }),
                                            }),
                                        ],
                                    }),
                                ],
                            });
                        },
                        controls: {
                            imageSrc: {
                                label: "Image URL",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/1a68031e600ecb954fd6ea9d28ab0c0544457623f7a2c0f2b9137569c32800e8",
                            },
                            videoSrc: {
                                label: "Video URL",
                                type: "text",
                                defaultValue:
                                    "https://cdn.discordapp.com/assets/content/5029a9a78bdc28cef510f1bfdac9addb8b88664ecd81902baccba38d3e1104b0",
                            },
                        },
                    },
                ],
            },
        ],
    },
    eR = { collections: [eT] };
