a.r(t), a.d(t, { cmsConfig: () => ew, cmsCollection: () => eC });
var l = a(627968),
    r = a(64700),
    n = a(834730),
    s = a(534514),
    i = a(219561),
    o = a(261225),
    d = a(673277),
    c = a(427941),
    u = a(653793);
let h = () => (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120, minWidth: 120 } });
var m = a(18769),
    x = a(118713);
let b = () =>
        (0, l.jsx)("div", {
            style: { display: "flex", justifyContent: "center", alignItems: "center" },
            children: (0, l.jsx)("div", { style: { height: 96, width: 96, borderRadius: 48, background: "grey" } }),
        }),
    p = () => (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 240 } });
var g = a(204990),
    f = a(970488);
let v = (e) => {
        let { color: t, children: a } = e;
        return (0, l.jsx)("div", {
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
    j = {
        name: "Grid",
        id: "grid",
        component: (e) => {
            let {
                columns: t,
                paginationStrategy: a,
                perPage: r,
                paginationPosition: s,
                gridItemColumns: i,
                gridItemRows: d,
            } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(n.E, {
                        variant: "text-lg/semibold",
                        children:
                            "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens.",
                    }),
                    (0, l.jsx)("br", {}),
                    (0, l.jsx)(n.E, {
                        variant: "text-lg/semibold",
                        children: "GridItem is (optionally) used to set the size of a grid itme in the grid.",
                    }),
                    (0, l.jsx)("div", {
                        style: { marginTop: 24 },
                        children: (0, l.jsxs)(o.A, {
                            columns: t,
                            paginationOptions: { paginationStrategy: a, perPage: r, paginationPosition: s },
                            children: [
                                (0, l.jsx)(v, { color: "red" }),
                                (0, l.jsx)(f.A, {
                                    columns: i,
                                    rows: d,
                                    children: (0, l.jsx)(v, {
                                        color: "orange",
                                        children: (0, l.jsx)(n.E, {
                                            variant: "text-lg/semibold",
                                            children: "GridItem",
                                        }),
                                    }),
                                }),
                                (0, l.jsx)(v, { color: "yellow" }),
                                (0, l.jsx)(v, { color: "green" }),
                                (0, l.jsx)(v, { color: "blue" }),
                                (0, l.jsx)(v, { color: "violet" }),
                                (0, l.jsx)(v, { color: "red" }),
                                (0, l.jsx)(v, { color: "orange" }),
                                (0, l.jsx)(v, { color: "yellow" }),
                                (0, l.jsx)(v, { color: "green" }),
                                (0, l.jsx)(v, { color: "blue" }),
                                (0, l.jsx)(v, { color: "violet" }),
                                (0, l.jsx)(v, { color: "red" }),
                                (0, l.jsx)(v, { color: "orange" }),
                                (0, l.jsx)(v, { color: "yellow" }),
                                (0, l.jsx)(v, { color: "green" }),
                                (0, l.jsx)(v, { color: "blue" }),
                                (0, l.jsx)(v, { color: "violet" }),
                                (0, l.jsx)(v, { color: "red" }),
                                (0, l.jsx)(v, { color: "orange" }),
                                (0, l.jsx)(v, { color: "yellow" }),
                                (0, l.jsx)(v, { color: "green" }),
                                (0, l.jsx)(v, { color: "blue" }),
                                (0, l.jsx)(v, {
                                    color: "violet",
                                    children: (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Last Child" }),
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
                defaultValue: g.o.PAGINATE,
                options: [
                    { label: "Paginate", value: g.o.PAGINATE },
                    { label: "Truncate", value: g.o.TRUNCATE },
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
var _ = a(735438),
    y = a(939249),
    S = a(331322),
    A = a(821609),
    E = a(150934),
    k = a(292666),
    I = a(691885),
    C = a(52822),
    w = a(951707),
    T = a(614822);
let L = [
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
    R = () => (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120 } });
var V = a(954644),
    N = a(700263);
let P = {
    title: "Containers",
    stories: [
        j,
        {
            name: "Card",
            id: "card",
            component: () =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Card wraps its children in a container that has border-radius and elevation on hover.",
                        }),
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/semibold",
                            children:
                                "It will take up the full width of the parent, and the minimum height for its children",
                        }),
                        (0, l.jsxs)(d.A, {
                            children: [
                                (0, l.jsx)(u.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "red" },
                                        children: (0, l.jsx)(h, {}),
                                    }),
                                }),
                                (0, l.jsx)(u.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "orange" },
                                        children: (0, l.jsx)(h, {}),
                                    }),
                                }),
                                (0, l.jsx)(u.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "yellow" },
                                        children: (0, l.jsx)(h, {}),
                                    }),
                                }),
                                (0, l.jsx)(u.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "green" },
                                        children: (0, l.jsx)(h, {}),
                                    }),
                                }),
                                (0, l.jsx)(u.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "blue" },
                                        children: (0, l.jsx)(h, {}),
                                    }),
                                }),
                                (0, l.jsx)(u.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "violet" },
                                        children: (0, l.jsx)(h, {}),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(d.A, {
                            children: [
                                (0, l.jsx)(n.E, {
                                    variant: "text-md/normal",
                                    children: "Cards inside of a horizontal stack with a min-width of 120px",
                                }),
                                (0, l.jsxs)(i.Kp, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(u.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "red" },
                                                children: (0, l.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(u.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "orange" },
                                                children: (0, l.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(u.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "yellow" },
                                                children: (0, l.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(u.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "green" },
                                                children: (0, l.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(u.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "blue" },
                                                children: (0, l.jsx)(h, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(u.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "violet" },
                                                children: (0, l.jsx)(h, {}),
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
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Section is used to space out sections of the page. It takes a vertical margin to apply margin above and below, as well as padding to inset its children.",
                        }),
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)("div", {
                                    style: { background: "red" },
                                    children: (0, l.jsx)(d.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(R, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "orange" },
                                    children: (0, l.jsx)(d.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(R, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "yellow" },
                                    children: (0, l.jsx)(d.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(R, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "green" },
                                    children: (0, l.jsx)(d.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(R, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "blue" },
                                    children: (0, l.jsx)(d.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(R, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "violet" },
                                    children: (0, l.jsx)(d.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(R, {}),
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
                return (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Background Image just takes children and displays them in with a background image behind them, and some padding to add inset",
                        }),
                        (0, l.jsx)(c.A, {
                            backgroundImage: { src: t },
                            children: (0, l.jsx)(d.A, {
                                children: (0, l.jsx)(o.A, {
                                    columns: 2,
                                    children: (0, l.jsxs)(i.Kp, {
                                        direction: "vertical",
                                        children: [
                                            (0, l.jsx)(s.D, {
                                                variant: "heading-xxl/bold",
                                                children: "What can I get with orbs?",
                                            }),
                                            (0, l.jsx)(n.E, {
                                                variant: "text-md/normal",
                                                children:
                                                    "Spend Orbs on exclusives or grab your favorites from the shop",
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                        (0, l.jsx)(d.A, {
                            children: (0, l.jsx)(n.E, {
                                variant: "text-lg/semibold",
                                children: "It also automatically handles animated asset urls",
                            }),
                        }),
                        (0, l.jsx)(c.A, {
                            backgroundImage: { src: a },
                            children: (0, l.jsx)(d.A, {
                                children: (0, l.jsx)(o.A, {
                                    columns: 2,
                                    children: (0, l.jsxs)(i.Kp, {
                                        direction: "vertical",
                                        children: [
                                            (0, l.jsx)(s.D, {
                                                variant: "heading-xxl/bold",
                                                children: "What can I get with orbs?",
                                            }),
                                            (0, l.jsx)(n.E, {
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
                    [a, n] = r.useState(8),
                    [s, i] = r.useState("xl"),
                    [o, d] = r.useState(!0),
                    c = r.useMemo(
                        () =>
                            [...Array(e)].map((e, t) =>
                                (0, l.jsx)(
                                    y.D,
                                    {
                                        className: T.j,
                                        onClick: () => console.log(t),
                                        children: (0, l.jsxs)(S.B, {
                                            direction: "vertical",
                                            justify: "space-between",
                                            align: "center",
                                            children: [
                                                (0, l.jsx)("div", { children: t }),
                                                t % 3 == 0 &&
                                                    (0, l.jsx)(A.$, {
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
                return (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(w.A, { gap: a, edgeFade: s, hideActionsWhenDisabled: o, children: c }),
                        (0, l.jsx)(C.nB, {}),
                        (0, l.jsxs)(C.MG, {
                            children: [
                                (0, l.jsx)(E.S, {
                                    checked: o,
                                    onChange: () => d(!o),
                                    label: "Hide Actions When Disabled",
                                }),
                                (0, l.jsx)(k.k, {
                                    type: "number",
                                    min: 0,
                                    value: e.toString(),
                                    onChange: (e) => {
                                        t((0, _.clamp)(+e, 0, 100));
                                    },
                                    label: "Children Count",
                                }),
                            ],
                        }),
                        (0, l.jsx)(C.MG, {
                            children: (0, l.jsx)(I.l, {
                                value: a,
                                options: L,
                                onSelectionChange: n,
                                label: "Children Gap",
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        }),
                        (0, l.jsx)(C.MG, {
                            children: (0, l.jsx)(I.l, {
                                value: s,
                                options: L,
                                onSelectionChange: i,
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
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/normal",
                            children: "Carousel steps through the children with a swipe and fade animation.",
                        }),
                        (0, l.jsx)(n.E, {
                            variant: "text-md/normal",
                            children:
                                "It has very minimal configuration options, instead choosing to be opinionated about the functionality of a carousel in a CMS world.",
                        }),
                        (0, l.jsx)(n.E, {
                            variant: "text-md/normal",
                            children:
                                "The carousel will pause slidding when the mouse hovers it, and resume on mouse leave.",
                        }),
                        (0, l.jsx)(d.A, {
                            children: (0, l.jsxs)(x.A, {
                                ...e,
                                children: [
                                    (0, l.jsx)("div", { style: { background: "red" }, children: (0, l.jsx)(p, {}) }),
                                    (0, l.jsx)("div", { style: { background: "orange" }, children: (0, l.jsx)(p, {}) }),
                                    (0, l.jsx)("div", { style: { background: "yellow" }, children: (0, l.jsx)(p, {}) }),
                                    (0, l.jsx)("div", { style: { background: "green" }, children: (0, l.jsx)(p, {}) }),
                                    (0, l.jsx)("div", { style: { background: "blue" }, children: (0, l.jsx)(p, {}) }),
                                    (0, l.jsx)("div", { style: { background: "violet" }, children: (0, l.jsx)(p, {}) }),
                                ],
                            }),
                        }),
                        (0, l.jsxs)(d.A, {
                            children: [
                                (0, l.jsx)(n.E, {
                                    variant: "text-md/normal",
                                    children:
                                        "Here is an example of what a carousel inside of a card might look like for showing off different products",
                                }),
                                (0, l.jsx)("br", {}),
                                (0, l.jsx)(u.A, {
                                    children: (0, l.jsx)("div", {
                                        style: {
                                            background: "white",
                                            padding: 12,
                                            borderRadius: 8,
                                            aspectRatio: "1/1",
                                            maxWidth: 240,
                                            display: "flex",
                                            overflow: "hidden",
                                        },
                                        children: (0, l.jsxs)(x.A, {
                                            ...e,
                                            children: [
                                                (0, l.jsx)(b, {}),
                                                (0, l.jsx)(b, {}),
                                                (0, l.jsx)(b, {}),
                                                (0, l.jsx)(b, {}),
                                                (0, l.jsx)(b, {}),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(d.A, {
                            children: [
                                (0, l.jsx)(n.E, {
                                    variant: "text-md/normal",
                                    children: "And here is an example of a FeaturedBlock Carousel",
                                }),
                                (0, l.jsx)("br", {}),
                                (0, l.jsxs)(x.A, {
                                    ...e,
                                    children: [
                                        (0, l.jsx)(m.A, {
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
                                        (0, l.jsx)(m.A, {
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
                                        (0, l.jsx)(m.A, {
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
                                        (0, l.jsx)(m.A, {
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
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Skeleton provides a loading placeholder with a shimmer effect while content is being loaded.",
                        }),
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/normal",
                            children:
                                "Skeleton hides its children and applies a mask over the whole container of the child",
                        }),
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/normal",
                            children:
                                "Skeleton always puts a border radius on the shimmer. It might not match the child's radius.",
                        }),
                        (0, l.jsxs)(d.A, {
                            children: [
                                (0, l.jsx)(n.E, { variant: "text-md/normal", children: "Basic rectangular skeleton" }),
                                (0, l.jsx)(N.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { height: 120, width: "100%", background: "transparent" },
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/normal",
                            children:
                                "Here we have a Grid with three Skeleton children that are wrapping three ShopProductCard to simulate a shop loading state",
                        }),
                        (0, l.jsx)(d.A, {
                            children: (0, l.jsxs)(o.A, {
                                columns: 3,
                                children: [
                                    (0, l.jsx)(N.A, { children: (0, l.jsx)(V.A, { skuId: "1458472704192811088" }) }),
                                    (0, l.jsx)(N.A, { children: (0, l.jsx)(V.A, { skuId: "1458472704192811088" }) }),
                                    (0, l.jsx)(N.A, { children: (0, l.jsx)(V.A, { skuId: "1458472704192811088" }) }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/normal",
                            children:
                                "Here we have a Grid with two Skeleton children that are wrapping two FeaturedCollection to simulate a shop loading state",
                        }),
                        (0, l.jsx)(d.A, {
                            children: (0, l.jsxs)(o.A, {
                                columns: 2,
                                children: [
                                    (0, l.jsx)(N.A, {
                                        children: (0, l.jsx)(m.A, {
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
                                    (0, l.jsx)(N.A, {
                                        children: (0, l.jsx)(m.A, {
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
var M = a(724560),
    O = a(706992),
    D = a(304973),
    B = a(53566),
    G = a(228880);
let H = (e) => {
    let { backgroundImage: t, href: a, ctaText: r } = e,
        s = (0, B.S)(r ?? "");
    return (0, l.jsx)("div", {
        className: G.q,
        children: (0, l.jsx)(c.A, {
            backgroundImage: t,
            backgroundPosition: "left",
            children: (0, l.jsx)("div", {
                className: G.R,
                children: (0, l.jsx)(n.E, { variant: "text-lg/bold", color: "always-white", children: s }),
            }),
        }),
    });
};
var U = a(618473);
let F = () => (0, l.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } });
var W = a(260779);
let z = () => (0, l.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } }),
    K = {
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
                            animatedBannerSrc: n,
                            logoSrc: s,
                            href: i,
                            backgroundColor: o,
                        } = e,
                        d = () =>
                            a
                                ? (0, l.jsxs)(w.A, {
                                      children: [
                                          (0, l.jsx)(F, {}),
                                          (0, l.jsx)(F, {}),
                                          (0, l.jsx)(F, {}),
                                          (0, l.jsx)(F, {}),
                                          (0, l.jsx)(F, {}),
                                          (0, l.jsx)(F, {}),
                                          (0, l.jsx)(F, {}),
                                          (0, l.jsx)(F, {}),
                                          (0, l.jsx)(F, {}),
                                          (0, l.jsx)(F, {}),
                                      ],
                                  })
                                : null;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", {
                                style: { height: a ? void 0 : t },
                                children: (0, l.jsx)(U.A, {
                                    bannerSrc: { src: r },
                                    logoSrc: { src: s },
                                    href: i,
                                    backgroundColor: o,
                                    children: d(),
                                }),
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("div", {
                                style: { height: a ? void 0 : t },
                                children: (0, l.jsx)(U.A, {
                                    bannerSrc: { src: n },
                                    logoSrc: { src: s },
                                    href: i,
                                    backgroundColor: o,
                                    children: d(),
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
                    let { bannerSrc: t, animatedBannerSrc: a, logoSrc: r, backgroundColor: n, href: s } = e;
                    return (0, l.jsx)(W.A, {
                        bannerSrc: "" !== a ? [{ src: a }, { src: t }] : { src: t },
                        logoSrc: "" !== r ? { src: r } : void 0,
                        backgroundColor: n,
                        href: "" !== s ? s : void 0,
                        children: (0, l.jsxs)(w.A, {
                            children: [
                                (0, l.jsx)(z, {}),
                                (0, l.jsx)(z, {}),
                                (0, l.jsx)(z, {}),
                                (0, l.jsx)(z, {}),
                                (0, l.jsx)(z, {}),
                                (0, l.jsx)(z, {}),
                                (0, l.jsx)(z, {}),
                                (0, l.jsx)(z, {}),
                                (0, l.jsx)(z, {}),
                                (0, l.jsx)(z, {}),
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
var Z = a(561769),
    Y = a(41770),
    q = a(503698),
    Q = a.n(q),
    X = a(157941),
    $ = a(585289);
function J(e) {
    let { value: t, onChange: n } = e,
        s = "json",
        i = r.useRef(null),
        [o, d] = r.useState("");
    return (
        r.useEffect(() => {
            let e = !1,
                l = (t ?? "") + "\n";
            return (
                Promise.resolve()
                    .then(a.bind(a, 981776))
                    .then((a) => {
                        if (e) return;
                        let r = a.default;
                        if (null != t && r.hasLanguage(s)) {
                            let e = r.highlight(s, t, !0);
                            if (null != e) return void d(e.value + "\n");
                        }
                        d(l);
                    })
                    .catch(() => {
                        e || d(l);
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, s]),
        (0, l.jsxs)("div", {
            className: $.t,
            children: [
                (0, l.jsx)("pre", {
                    className: $.c5,
                    "aria-hidden": "true",
                    children: (0, l.jsx)(X.l, {
                        location: "LayoutEditor",
                        code: t,
                        lang: "json",
                        className: "hljs",
                        children: (0, l.jsx)("code", {
                            className: Q()("hljs", s),
                            dangerouslySetInnerHTML: { __html: o ?? "" },
                        }),
                    }),
                }),
                (0, l.jsx)("textarea", {
                    ref: i,
                    className: $.mW,
                    value: t,
                    onChange: (e) => {
                        n(e.target.value);
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
                                l = a.selectionStart,
                                r = a.selectionEnd;
                            if (e.shiftKey) {
                                let e = t.lastIndexOf("\n", l - 1) + 1,
                                    a = t.indexOf("\n", l),
                                    r = t.substring(e, -1 === a ? t.length : a),
                                    s = 0;
                                for (let e = 0; e < Math.min(2, r.length); e++)
                                    if (" " === r[e]) s++;
                                    else break;
                                s > 0 &&
                                    (n(t.substring(0, e) + t.substring(e + s)),
                                    setTimeout(() => {
                                        if (null != i.current) {
                                            let t = Math.max(e, l - s);
                                            i.current.selectionStart = i.current.selectionEnd = t;
                                        }
                                    }, 0));
                            } else
                                n(t.substring(0, l) + "  " + t.substring(r)),
                                    setTimeout(() => {
                                        null != i.current &&
                                            (i.current.selectionStart = i.current.selectionEnd = l + 2);
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
    el = a(692914);
let er = {
        name: "Remote Layouts",
        id: "remote-layouts",
        component: (e) => {
            let { layoutId: t, tenantId: a } = e;
            return (0, l.jsx)(ee.Qs, { layoutId: t, tenantId: a });
        },
        controls: {
            layoutId: { label: "Layout Id", type: "text", defaultValue: "1465939725649973269" },
            tenantId: { label: "Tenant Id", type: "text", defaultValue: et.FYj },
        },
    },
    en = {
        name: "Remote Templates",
        id: "remote-templates",
        component: (e) => {
            let { templateId: t, tenantId: a } = e;
            return (0, l.jsx)(ee.Z_, { templateId: t, tenantId: a });
        },
        controls: {
            templateId: { label: "Template Id", type: "text", defaultValue: "popular-picks" },
            tenantId: { label: "Tenant Id", type: "text", defaultValue: et.FYj },
        },
    };
var es = a(646092),
    ei = a(377890),
    eo = a(359778),
    ed = a(264302);
let ec = (e) => {
    let { color: t, children: a } = e;
    return (0, l.jsx)(eo.Z, {
        style: { backgroundColor: t, padding: "16px", minWidth: "100px", minHeight: "100px" },
        children: (0, l.jsx)(n.E, { variant: "text-md/semibold", children: a }),
    });
};
var eu = a(605248),
    eh = a(287944);
let em = {
    title: "Mana",
    stories: [
        {
            name: "Button",
            id: "cms-button",
            component: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/semibold",
                            children: "Button component for CMS interactions.",
                        }),
                        (0, l.jsxs)(S.B, {
                            direction: "vertical",
                            children: [
                                (0, l.jsx)(es.A, { ...e }),
                                (0, l.jsx)("hr", {}),
                                (0, l.jsx)(es.A, { href: e.href, ctaText: "Variant = primary", variant: "primary" }),
                                (0, l.jsx)(es.A, {
                                    href: e.href,
                                    ctaText: "Variant = secondary",
                                    variant: "secondary",
                                }),
                                (0, l.jsx)(es.A, {
                                    href: e.href,
                                    ctaText: "Variant = critical-primary",
                                    variant: "critical-primary",
                                }),
                                (0, l.jsx)(es.A, {
                                    href: e.href,
                                    ctaText: "Variant = critical-secondary",
                                    variant: "critical-secondary",
                                }),
                                (0, l.jsx)(es.A, { href: e.href, ctaText: "Variant = active", variant: "active" }),
                                (0, l.jsx)(es.A, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-primary",
                                    variant: "overlay-primary",
                                }),
                                (0, l.jsx)(es.A, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-secondary",
                                    variant: "overlay-secondary",
                                }),
                                (0, l.jsx)(es.A, {
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
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(n.E, {
                            variant: "text-lg/semibold",
                            children: "Heading component for CMS content.",
                        }),
                        (0, l.jsx)(ei.A, { ...e }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(ei.A, { content: "Variant = heading-sm/normal", variant: "heading-sm/normal" }),
                        (0, l.jsx)(ei.A, { content: "Variant = heading-sm/medium", variant: "heading-sm/medium" }),
                        (0, l.jsx)(ei.A, { content: "Variant = heading-sm/semibold", variant: "heading-sm/semibold" }),
                        (0, l.jsx)(ei.A, { content: "Variant = heading-md/normal", variant: "heading-md/normal" }),
                        (0, l.jsx)(ei.A, { content: "Variant = heading-md/medium", variant: "heading-md/medium" }),
                        (0, l.jsx)(ei.A, { content: "Variant = heading-md/semibold", variant: "heading-md/semibold" }),
                        (0, l.jsx)(ei.A, { content: "Variant = heading-lg/normal", variant: "heading-lg/normal" }),
                        (0, l.jsx)(ei.A, { content: "Variant = heading-lg/medium", variant: "heading-lg/medium" }),
                        (0, l.jsx)(ei.A, { content: "Variant = heading-lg/semibold", variant: "heading-lg/semibold" }),
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
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Stack component for CMS layouts." }),
                        (0, l.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, l.jsxs)(ed.A, {
                                ...e,
                                children: [
                                    (0, l.jsx)(ec, { color: "#5865F2", children: "Item 1" }),
                                    (0, l.jsx)(ec, { color: "#57F287", children: "Item 2" }),
                                    (0, l.jsx)(ec, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(n.E, { variant: "text-md/semibold", children: "Horizontal Stack" }),
                        (0, l.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, l.jsxs)(ed.A, {
                                ...e,
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(ec, { color: "#5865F2", children: "Item 1" }),
                                    (0, l.jsx)(ec, { color: "#57F287", children: "Item 2" }),
                                    (0, l.jsx)(ec, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(n.E, { variant: "text-md/semibold", children: "Vertical Stack" }),
                        (0, l.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, l.jsxs)(ed.A, {
                                ...e,
                                direction: "vertical",
                                children: [
                                    (0, l.jsx)(ec, { color: "#5865F2", children: "Item 1" }),
                                    (0, l.jsx)(ec, { color: "#57F287", children: "Item 2" }),
                                    (0, l.jsx)(ec, { color: "#FEE75C", children: "Item 3" }),
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
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Text component for CMS content." }),
                        (0, l.jsx)(eu.A, { ...e }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(eu.A, { content: "Variant = text-xs/normal", variant: "text-xs/normal" }),
                        (0, l.jsx)(eu.A, { content: "Variant = text-sm/normal", variant: "text-sm/normal" }),
                        (0, l.jsx)(eu.A, { content: "Variant = text-sm/medium", variant: "text-sm/medium" }),
                        (0, l.jsx)(eu.A, { content: "Variant = text-sm/semibold", variant: "text-sm/semibold" }),
                        (0, l.jsx)(eu.A, { content: "Variant = text-md/normal", variant: "text-md/normal" }),
                        (0, l.jsx)(eu.A, { content: "Variant = text-md/medium", variant: "text-md/medium" }),
                        (0, l.jsx)(eu.A, { content: "Variant = text-md/semibold", variant: "text-md/semibold" }),
                        (0, l.jsx)(eu.A, { content: "Variant = text-lg/normal", variant: "text-lg/normal" }),
                        (0, l.jsx)(eu.A, { content: "Variant = text-lg/medium", variant: "text-lg/medium" }),
                        (0, l.jsx)(eu.A, { content: "Variant = text-lg/semibold", variant: "text-lg/semibold" }),
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
                (0, l.jsx)(eh.A, {
                    ...e,
                    children: (0, l.jsx)("div", {
                        style: { width: 300, background: "pink", borderRadius: 8, padding: 12 },
                        children: (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Hover me." }),
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
var ex = a(206845),
    eb = a(77534),
    ep = a(519642);
let eg = {
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
    ef = {
        title: "Recursive",
        stories: [
            {
                name: "SkuList",
                id: "skulist",
                component: (e) => {
                    let { skuIds: t, sortPurchased: a, eagerLoad: r, showSkeleton: i } = e,
                        d = (0, eb.e)();
                    return (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(s.D, {
                                variant: "heading-lg/bold",
                                children: "The SkuList component takes a list of skus and maps them into a block",
                            }),
                            (0, l.jsx)(n.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here, we have a list of 3 skuIds and we map over them, pushing them into ShopProductCards",
                            }),
                            (0, l.jsx)(n.E, {
                                variant: "text-md/semibold",
                                children:
                                    "This will be useful when wanting to get a dynamic list of sku ids from the server (like popular picks) and push them into a product grid",
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(o.A, {
                                columns: 3,
                                children: (0, l.jsx)(ep.A, {
                                    skuIds: t?.split(","),
                                    skuBlock: "ShopProductCard",
                                    sortPurchased: a,
                                    eagerLoad: r,
                                    showSkeleton: i,
                                    componentMap: d,
                                }),
                            }),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)(n.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                            (0, l.jsxs)(S.B, {
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(n.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                                    (0, l.jsx)(ex.A, {
                                        text: ea.intl.string(ea.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704192811088",
                                        children: (e) =>
                                            (0, l.jsx)(y.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, l.jsx)(n.E, {
                                                    variant: "text-sm/normal",
                                                    children: "1458472704192811088",
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(S.B, {
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(n.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                                    (0, l.jsx)(ex.A, {
                                        text: ea.intl.string(ea.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458479739110166560",
                                        children: (e) =>
                                            (0, l.jsx)(y.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, l.jsx)(n.E, {
                                                    variant: "text-sm/normal",
                                                    children: "1458479739110166560",
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(S.B, {
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(n.E, { variant: "text-sm/bold", children: "Nameplate" }),
                                    (0, l.jsx)(ex.A, {
                                        text: ea.intl.string(ea.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704524156959",
                                        children: (e) =>
                                            (0, l.jsx)(y.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, l.jsx)(n.E, {
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
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(s.D, {
                                variant: "heading-lg/bold",
                                children: 'The SubLayout component accepts a layout id and "get or fetch"es the layout',
                            }),
                            (0, l.jsx)(n.E, {
                                variant: "text-md/semibold",
                                children:
                                    "When resolved, the layout trees are merged into one layout. This allows for the asynchronous resolution of layouts, for faster first paints",
                            }),
                            (0, l.jsx)(n.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here, the \"popular picks\" are actually a sub layout with the id 'dummy-popular-picks'",
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(ee.Ay, { layout: Y.uG }),
                        ],
                    }),
                controls: {},
            },
            {
                name: "SubLayout - Loading State",
                id: "sub-layout-skeleton",
                component: () =>
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(s.D, {
                                variant: "heading-lg/bold",
                                children:
                                    'The SubLayout can take a "Skeleton" property which is just `children` to display if the layout is being fetched from the api',
                            }),
                            (0, l.jsx)(n.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here we use the `Skeleton` component to show the shop cards loading while the (dummy) Shop Cards SubLayout are resolving (it will never stop loading for demonstration purposes)",
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(ee.Ay, { layout: eg }),
                        ],
                    }),
                controls: {},
            },
        ],
    };
var ev = a(575593),
    ej = a(674658),
    e_ = a(88686),
    ey = a(780898),
    eS = a(174755),
    eA = a(486020);
let eE = (e) => {
    let { skuId: t, size: a = 128, animated: r = !1 } = e,
        { product: n } = (0, ej.q)(t, !0),
        s = n?.items[0];
    if (null == s) return null;
    if (s.type === ev.R.AVATAR_DECORATION) {
        let e = eA.Ay.getAvatarDecorationURL({ avatarDecoration: s, size: a, canAnimate: r });
        return null != e ? (0, l.jsx)("img", { src: e, alt: s.label }) : null;
    }
    if (s.type === ev.R.PROFILE_EFFECT) {
        let e = s.thumbnailPreviewSrc;
        return (0, l.jsx)("img", { src: e, alt: s.accessibilityLabel });
    }
    if (s.type === ev.R.NAMEPLATE) {
        let e = (0, ey.WK)(s);
        return (0, l.jsx)(eS.A, { nameplate: e, placement: e_.u.PREVIEW });
    }
    return null;
};
var ek = a(634791),
    eI = a(190503);
let eC = {
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
                                [a, n] = r.useState(e);
                            return (
                                r.useEffect(() => {
                                    try {
                                        (0, ee.F2)(JSON.parse(e)) && n(e);
                                    } catch {}
                                }, [e]),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(J, { value: e, onChange: (e) => t(e) }),
                                        (0, l.jsx)("hr", {}),
                                        (0, l.jsx)(ee.Ay, { layout: JSON.parse(a) }),
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
                            return (0, l.jsxs)("div", {
                                style: { position: "relative" },
                                children: [
                                    (0, l.jsx)("div", {
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
                                    (0, l.jsx)(Z.v3.Provider, {
                                        value: { prioritizedCurrency: Z.Hi.ORBS },
                                        children: (0, l.jsx)("div", {
                                            style: { position: "relative" },
                                            children: (0, l.jsx)(ee.Ay, { layout: e }),
                                        }),
                                    }),
                                ],
                            });
                        },
                        controls: {},
                    },
                    er,
                    en,
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
                            return (0, l.jsx)(ee.Ay, { layout: r });
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
                            (0, ea.useSyncMessages)(el.c);
                            let a = (0, B.S)(t);
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)(n.E, {
                                        variant: "text-lg/bold",
                                        children: [
                                            "Any registered string key can be used to reference client-side international strings",
                                            " ",
                                        ],
                                    }),
                                    (0, l.jsx)(n.E, {
                                        variant: "text-md/normal",
                                        children: "Strings are registered in `useCmsString.tsx`",
                                    }),
                                    (0, l.jsx)("br", {}),
                                    (0, l.jsx)("hr", {}),
                                    (0, l.jsx)("br", {}),
                                    (0, l.jsxs)(n.E, { variant: "text-md/semibold", children: ["Received: ", t] }),
                                    (0, l.jsxs)(n.E, { variant: "text-md/semibold", children: ["Resolved: ", a] }),
                                ],
                            });
                        },
                        controls: {
                            text: { label: "Text", type: "text", defaultValue: "COLLECTIBLES_SHOP_THE_COLLECTION" },
                        },
                    },
                ],
            },
            em,
            P,
            {
                title: "Content Wrappers",
                stories: [
                    {
                        name: "NarrowContent",
                        id: "narrow-content",
                        component: (e) => {
                            let { padding: t } = e;
                            return (0, l.jsx)("div", {
                                style: { background: "#5865f2", width: "100%" },
                                children: (0, l.jsx)(O.A, {
                                    padding: t,
                                    children: (0, l.jsx)("div", {
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
                            return (0, l.jsx)("div", {
                                style: { background: "#5865f2", width: "100%" },
                                children: (0, l.jsx)(M.A, {
                                    padding: t,
                                    children: (0, l.jsx)("div", {
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
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(n.E, {
                                        variant: "text-lg/semibold",
                                        children:
                                            "Featured Chip will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                                    }),
                                    (0, l.jsx)(d.A, { children: (0, l.jsx)(D.A, { ...r }) }),
                                    (0, l.jsxs)(d.A, {
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                                            (0, l.jsxs)(o.A, {
                                                columns: 3,
                                                children: [
                                                    (0, l.jsx)(D.A, { ...r }),
                                                    (0, l.jsx)(D.A, { ...r }),
                                                    (0, l.jsx)(D.A, { ...r }),
                                                    (0, l.jsx)(D.A, { ...r }),
                                                    (0, l.jsx)(D.A, { ...r }),
                                                    (0, l.jsx)(D.A, { ...r }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(d.A, {
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, l.jsxs)(i.Kp, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, l.jsx)(D.A, { ...r }),
                                                    (0, l.jsx)(D.A, { ...r }),
                                                    (0, l.jsx)(D.A, { ...r }),
                                                    (0, l.jsx)(D.A, { ...r }),
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
                                    supplementalImage: s,
                                    ctaText: c,
                                    href: u,
                                } = e,
                                h = {
                                    backgroundImage: { src: a },
                                    logoSrc: { src: r },
                                    supplementalImage: { src: s },
                                    ctaText: c,
                                    href: u,
                                };
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(n.E, {
                                        variant: "text-lg/semibold",
                                        children:
                                            "Featured Collection will take up the full width of the parent, so it is best suited for CmsStack or Grid parents",
                                    }),
                                    (0, l.jsx)(d.A, { children: (0, l.jsx)(m.A, { ...h }) }),
                                    (0, l.jsxs)(d.A, {
                                        children: [
                                            (0, l.jsxs)(n.E, {
                                                variant: "text-lg/semibold",
                                                children: ["Grid (", t, "):"],
                                            }),
                                            (0, l.jsxs)(o.A, {
                                                columns: t,
                                                children: [(0, l.jsx)(m.A, { ...h }), (0, l.jsx)(m.A, { ...h })],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(d.A, {
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, l.jsxs)(i.Kp, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, l.jsx)(m.A, { ...h }),
                                                    (0, l.jsx)(m.A, { ...h }),
                                                    (0, l.jsx)(m.A, { ...h }),
                                                    (0, l.jsx)(m.A, { ...h }),
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
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "PLACEHOLDER" }),
                                    (0, l.jsx)(d.A, { children: (0, l.jsx)(H, { ...r }) }),
                                    (0, l.jsxs)(d.A, {
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                                            (0, l.jsxs)(o.A, {
                                                columns: 3,
                                                children: [
                                                    (0, l.jsx)(H, { ...r }),
                                                    (0, l.jsx)(H, { ...r }),
                                                    (0, l.jsx)(H, { ...r }),
                                                    (0, l.jsx)(H, { ...r }),
                                                    (0, l.jsx)(H, { ...r }),
                                                    (0, l.jsx)(H, { ...r }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(d.A, {
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, l.jsxs)(i.Kp, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, l.jsx)(H, { ...r }),
                                                    (0, l.jsx)(H, { ...r }),
                                                    (0, l.jsx)(H, { ...r }),
                                                    (0, l.jsx)(H, { ...r }),
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
            K,
            ef,
            {
                title: "Sku",
                stories: [
                    {
                        name: "ShopProductCard",
                        id: "shopProduct-card",
                        component: (e) => {
                            let { skuId: t } = e;
                            return (0, l.jsx)("div", { children: (0, l.jsx)(V.A, { skuId: t }) });
                        },
                        controls: { skuId: { label: "SKU Id", type: "text", defaultValue: "1458472704192811088" } },
                    },
                    {
                        name: "SkuPreview",
                        id: "skupreview",
                        component: (e) => {
                            let { skuId: t } = e;
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(eE, { skuId: t }),
                                    (0, l.jsx)("hr", {}),
                                    (0, l.jsx)(n.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                                    (0, l.jsxs)(S.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                                            (0, l.jsx)(ex.A, {
                                                text: ea.intl.string(ea.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458472704192811088",
                                                children: (e) =>
                                                    (0, l.jsx)(y.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, l.jsx)(n.E, {
                                                            variant: "text-sm/normal",
                                                            children: "1458472704192811088",
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(S.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                                            (0, l.jsx)(ex.A, {
                                                text: ea.intl.string(ea.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458479739110166560",
                                                children: (e) =>
                                                    (0, l.jsx)(y.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, l.jsx)(n.E, {
                                                            variant: "text-sm/normal",
                                                            children: "1458479739110166560",
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(S.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-sm/bold", children: "Nameplate" }),
                                            (0, l.jsx)(ex.A, {
                                                text: ea.intl.string(ea.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458472704524156959",
                                                children: (e) =>
                                                    (0, l.jsx)(y.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, l.jsx)(n.E, {
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
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(n.E, {
                                        variant: "text-md/semibold",
                                        children:
                                            "The Any component is used to allow injecting super-bespoke components into a layout without defining a new block type.",
                                    }),
                                    (0, l.jsx)(n.E, {
                                        variant: "text-md/semibold",
                                        children:
                                            "It's ONLY use is to be overriden by another block in `useComponentRegistry`",
                                    }),
                                    (0, l.jsx)(d.A, { children: (0, l.jsx)(ek.A, {}) }),
                                ],
                            }),
                        controls: {},
                    },
                    {
                        name: "Image",
                        id: "cms-image",
                        component: (e) => {
                            let { imageSrc: t, videoSrc: a } = e;
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)(d.A, {
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Static image" }),
                                            (0, l.jsx)("div", {
                                                style: { height: 200 },
                                                children: (0, l.jsx)(eI.A, { src: { src: t } }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(d.A, {
                                        children: [
                                            (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Video asset" }),
                                            (0, l.jsx)("div", {
                                                style: { height: 200 },
                                                children: (0, l.jsx)(eI.A, { src: { src: a } }),
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
    ew = { collections: [eC] };
