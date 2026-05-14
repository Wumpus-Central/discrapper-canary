a.r(t), a.d(t, { layoutSystemCollection: () => eT, layoutSystemConfig: () => eL });
var l = a(627968),
    n = a(64700),
    r = a(834730),
    s = a(534514),
    d = a(498381),
    o = a(217109),
    i = a(735353),
    c = a(364801),
    h = a(975117);
let u = () => (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120, minWidth: 120 } });
var x = a(450117),
    m = a(488757);
let b = () =>
        (0, l.jsx)("div", {
            style: { display: "flex", justifyContent: "center", alignItems: "center" },
            children: (0, l.jsx)("div", { style: { height: 96, width: 96, borderRadius: 48, background: "grey" } }),
        }),
    p = () => (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 240 } });
var g = a(70613),
    j = a(152858),
    f = a(273340);
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
    y = {
        name: "Grid",
        id: "grid",
        component: (e) => {
            let {
                columns: t,
                paginationStrategy: a,
                perPage: n,
                paginationPosition: s,
                gridItemColumns: d,
                gridItemRows: i,
            } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.E, {
                        variant: "text-lg/semibold",
                        children:
                            "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens.",
                    }),
                    (0, l.jsx)("br", {}),
                    (0, l.jsx)(r.E, {
                        variant: "text-lg/semibold",
                        children: "GridItem is (optionally) used to set the size of a grid itme in the grid.",
                    }),
                    (0, l.jsx)("div", {
                        style: { marginTop: 24 },
                        children: (0, l.jsxs)(o.Ay, {
                            columns: t,
                            paginationOptions: { paginationStrategy: a, perPage: n, paginationPosition: s },
                            children: [
                                (0, l.jsx)(v, { color: "red" }),
                                (0, l.jsx)(f.A, {
                                    columns: d,
                                    rows: i,
                                    children: (0, l.jsx)(v, {
                                        color: "orange",
                                        children: (0, l.jsx)(r.E, {
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
                                    children: (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Last Child" }),
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
                defaultValue: j.o.PAGINATE,
                options: [
                    { label: "Paginate", value: j.o.PAGINATE },
                    { label: "Truncate", value: j.o.TRUNCATE },
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
var k = a(735438),
    A = a(939249),
    S = a(331322),
    I = a(821609),
    V = a(150934),
    w = a(292666),
    E = a(691885),
    C = a(52822),
    T = a(449543),
    L = a(808302);
let P = [
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
    B = () => (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120 } });
var F = a(303720),
    H = a(560275);
let R = {
    title: "Containers",
    stories: [
        y,
        {
            name: "Card",
            id: "card",
            component: () =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Card wraps its children in a container that has border-radius and elevation on hover.",
                        }),
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children:
                                "It will take up the full width of the parent, and the minimum height for its children",
                        }),
                        (0, l.jsxs)(i.A, {
                            children: [
                                (0, l.jsx)(h.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "red" },
                                        children: (0, l.jsx)(u, {}),
                                    }),
                                }),
                                (0, l.jsx)(h.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "orange" },
                                        children: (0, l.jsx)(u, {}),
                                    }),
                                }),
                                (0, l.jsx)(h.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "yellow" },
                                        children: (0, l.jsx)(u, {}),
                                    }),
                                }),
                                (0, l.jsx)(h.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "green" },
                                        children: (0, l.jsx)(u, {}),
                                    }),
                                }),
                                (0, l.jsx)(h.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "blue" },
                                        children: (0, l.jsx)(u, {}),
                                    }),
                                }),
                                (0, l.jsx)(h.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { background: "violet" },
                                        children: (0, l.jsx)(u, {}),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(i.A, {
                            children: [
                                (0, l.jsx)(r.E, {
                                    variant: "text-md/normal",
                                    children: "Cards inside of a horizontal stack with a min-width of 120px",
                                }),
                                (0, l.jsxs)(d.Ym, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(h.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "red" },
                                                children: (0, l.jsx)(u, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(h.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "orange" },
                                                children: (0, l.jsx)(u, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(h.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "yellow" },
                                                children: (0, l.jsx)(u, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(h.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "green" },
                                                children: (0, l.jsx)(u, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(h.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "blue" },
                                                children: (0, l.jsx)(u, {}),
                                            }),
                                        }),
                                        (0, l.jsx)(h.A, {
                                            children: (0, l.jsx)("div", {
                                                style: { background: "violet" },
                                                children: (0, l.jsx)(u, {}),
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
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Section is used to space out sections of the page. It takes a vertical margin to apply margin above and below, as well as padding to inset its children.",
                        }),
                        (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)("div", {
                                    style: { background: "red" },
                                    children: (0, l.jsx)(i.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(B, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "orange" },
                                    children: (0, l.jsx)(i.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(B, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "yellow" },
                                    children: (0, l.jsx)(i.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(B, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "green" },
                                    children: (0, l.jsx)(i.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(B, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "blue" },
                                    children: (0, l.jsx)(i.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(B, {}),
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    style: { background: "violet" },
                                    children: (0, l.jsx)(i.A, {
                                        verticalMargin: t,
                                        padding: a,
                                        children: (0, l.jsx)(B, {}),
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
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Background Image just takes children and displays them in with a background image behind them, and some padding to add inset",
                        }),
                        (0, l.jsx)(c.A, {
                            backgroundImage: { src: t },
                            children: (0, l.jsx)(i.A, {
                                children: (0, l.jsx)(o.Ay, {
                                    columns: 2,
                                    children: (0, l.jsxs)(d.Ym, {
                                        direction: "vertical",
                                        children: [
                                            (0, l.jsx)(s.D, {
                                                variant: "heading-xxl/bold",
                                                children: "What can I get with orbs?",
                                            }),
                                            (0, l.jsx)(r.E, {
                                                variant: "text-md/normal",
                                                children:
                                                    "Spend Orbs on exclusives or grab your favorites from the shop",
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                        (0, l.jsx)(i.A, {
                            children: (0, l.jsx)(r.E, {
                                variant: "text-lg/semibold",
                                children: "It also automatically handles animated asset urls",
                            }),
                        }),
                        (0, l.jsx)(c.A, {
                            backgroundImage: { src: a },
                            children: (0, l.jsx)(i.A, {
                                children: (0, l.jsx)(o.Ay, {
                                    columns: 2,
                                    children: (0, l.jsxs)(d.Ym, {
                                        direction: "vertical",
                                        children: [
                                            (0, l.jsx)(s.D, {
                                                variant: "heading-xxl/bold",
                                                children: "What can I get with orbs?",
                                            }),
                                            (0, l.jsx)(r.E, {
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
            name: "GradientBackground",
            id: "gradient-background",
            component: (e) => {
                let { color1: t, color2: a, color3: n, angle: c } = e,
                    h = [t, a, n].filter((e) => null != e && "" !== e);
                return (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children:
                                "GradientBackground takes a `colors` array and renders a linear gradient behind its children at the given angle.",
                        }),
                        (0, l.jsx)(g.A, {
                            colors: h,
                            angle: c,
                            children: (0, l.jsx)(i.A, {
                                children: (0, l.jsx)(o.Ay, {
                                    columns: 2,
                                    children: (0, l.jsxs)(d.Ym, {
                                        direction: "vertical",
                                        children: [
                                            (0, l.jsx)(s.D, {
                                                variant: "heading-xxl/bold",
                                                children: "What can I get with orbs?",
                                            }),
                                            (0, l.jsx)(r.E, {
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
                color1: { label: "Color 1", type: "color", defaultValue: "#5865f2" },
                color2: { label: "Color 2", type: "color", defaultValue: "#eb459e" },
                color3: { label: "Color 3 (optional)", type: "color", defaultValue: "" },
                angle: { label: "Angle (deg)", type: "slider", defaultValue: 180, minValue: 0, maxValue: 360 },
            },
        },
        {
            name: "Interactive H Scroll",
            id: "interactive-h-scroll",
            component: () => {
                let [e, t] = n.useState(15),
                    [a, r] = n.useState(8),
                    [s, d] = n.useState("xl"),
                    [o, i] = n.useState(!0),
                    c = n.useMemo(
                        () =>
                            [...Array(e)].map((e, t) =>
                                (0, l.jsx)(
                                    A.D,
                                    {
                                        className: L.j,
                                        onClick: () => console.log(t),
                                        children: (0, l.jsxs)(S.B, {
                                            direction: "vertical",
                                            justify: "space-between",
                                            align: "center",
                                            children: [
                                                (0, l.jsx)("div", { children: t }),
                                                t % 3 == 0 &&
                                                    (0, l.jsx)(I.$, {
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
                        (0, l.jsx)(T.A, { gap: a, edgeFade: s, hideActionsWhenDisabled: o, children: c }),
                        (0, l.jsx)(C.nB, {}),
                        (0, l.jsxs)(C.MG, {
                            children: [
                                (0, l.jsx)(V.S, {
                                    checked: o,
                                    onChange: () => i(!o),
                                    label: "Hide Actions When Disabled",
                                }),
                                (0, l.jsx)(w.k, {
                                    type: "number",
                                    min: 0,
                                    value: e.toString(),
                                    onChange: (e) => {
                                        t((0, k.clamp)(+e, 0, 100));
                                    },
                                    label: "Children Count",
                                }),
                            ],
                        }),
                        (0, l.jsx)(C.MG, {
                            children: (0, l.jsx)(E.l, {
                                value: a,
                                options: P,
                                onSelectionChange: r,
                                label: "Children Gap",
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        }),
                        (0, l.jsx)(C.MG, {
                            children: (0, l.jsx)(E.l, {
                                value: s,
                                options: P,
                                onSelectionChange: d,
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
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/normal",
                            children: "Carousel steps through the children with a swipe and fade animation.",
                        }),
                        (0, l.jsx)(r.E, {
                            variant: "text-md/normal",
                            children:
                                "It has very minimal configuration options, instead choosing to be opinionated about the functionality of a carousel in a Layout System world.",
                        }),
                        (0, l.jsx)(r.E, {
                            variant: "text-md/normal",
                            children:
                                "The carousel will pause slidding when the mouse hovers it, and resume on mouse leave.",
                        }),
                        (0, l.jsx)(i.A, {
                            children: (0, l.jsxs)(m.A, {
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
                        (0, l.jsxs)(i.A, {
                            children: [
                                (0, l.jsx)(r.E, {
                                    variant: "text-md/normal",
                                    children:
                                        "Here is an example of what a carousel inside of a card might look like for showing off different products",
                                }),
                                (0, l.jsx)("br", {}),
                                (0, l.jsx)(h.A, {
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
                                        children: (0, l.jsxs)(m.A, {
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
                        (0, l.jsxs)(i.A, {
                            children: [
                                (0, l.jsx)(r.E, {
                                    variant: "text-md/normal",
                                    children: "And here is an example of a FeaturedBlock Carousel",
                                }),
                                (0, l.jsx)("br", {}),
                                (0, l.jsxs)(m.A, {
                                    ...e,
                                    children: [
                                        (0, l.jsx)(x.A, {
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
                                        (0, l.jsx)(x.A, {
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
                                        (0, l.jsx)(x.A, {
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
                                        (0, l.jsx)(x.A, {
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
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children:
                                "Skeleton provides a loading placeholder with a shimmer effect while content is being loaded.",
                        }),
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/normal",
                            children:
                                "Skeleton hides its children and applies a mask over the whole container of the child",
                        }),
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/normal",
                            children:
                                "Skeleton always puts a border radius on the shimmer. It might not match the child's radius.",
                        }),
                        (0, l.jsxs)(i.A, {
                            children: [
                                (0, l.jsx)(r.E, { variant: "text-md/normal", children: "Basic rectangular skeleton" }),
                                (0, l.jsx)(H.A, {
                                    children: (0, l.jsx)("div", {
                                        style: { height: 120, width: "100%", background: "transparent" },
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/normal",
                            children:
                                "Here we have a Grid with three Skeleton children that are wrapping three ShopProductCard to simulate a shop loading state",
                        }),
                        (0, l.jsx)(i.A, {
                            children: (0, l.jsxs)(o.Ay, {
                                columns: 3,
                                children: [
                                    (0, l.jsx)(H.A, { children: (0, l.jsx)(F.A, { skuId: "1458472704192811088" }) }),
                                    (0, l.jsx)(H.A, { children: (0, l.jsx)(F.A, { skuId: "1458472704192811088" }) }),
                                    (0, l.jsx)(H.A, { children: (0, l.jsx)(F.A, { skuId: "1458472704192811088" }) }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/normal",
                            children:
                                "Here we have a Grid with two Skeleton children that are wrapping two FeaturedCollection to simulate a shop loading state",
                        }),
                        (0, l.jsx)(i.A, {
                            children: (0, l.jsxs)(o.Ay, {
                                columns: 2,
                                children: [
                                    (0, l.jsx)(H.A, {
                                        children: (0, l.jsx)(x.A, {
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
                                    (0, l.jsx)(H.A, {
                                        children: (0, l.jsx)(x.A, {
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
var O = a(436476),
    D = a(873580),
    G = a(650993),
    M = a(801966),
    W = a(200328);
let N = (e) => {
    let { backgroundImage: t, href: a, ctaText: n } = e,
        s = (0, M.W)(n ?? "");
    return (0, l.jsx)("div", {
        className: W.q,
        children: (0, l.jsx)(c.A, {
            backgroundImage: t,
            backgroundPosition: "left",
            children: (0, l.jsx)("div", {
                className: W.R,
                children: (0, l.jsx)(r.E, { variant: "text-lg/bold", color: "always-white", children: s }),
            }),
        }),
    });
};
var z = a(834805);
let K = () => (0, l.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } });
var U = a(74871);
let _ = () => (0, l.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } }),
    Y = {
        title: "Heroes",
        stories: [
            {
                name: "ContainedHero",
                id: "contained-hero",
                component: (e) => {
                    let {
                            containerHeight: t,
                            showChildren: a,
                            bannerSrc: n,
                            animatedBannerSrc: r,
                            logoSrc: s,
                            href: d,
                            backgroundColor: o,
                        } = e,
                        i = () =>
                            a
                                ? (0, l.jsxs)(T.A, {
                                      children: [
                                          (0, l.jsx)(K, {}),
                                          (0, l.jsx)(K, {}),
                                          (0, l.jsx)(K, {}),
                                          (0, l.jsx)(K, {}),
                                          (0, l.jsx)(K, {}),
                                          (0, l.jsx)(K, {}),
                                          (0, l.jsx)(K, {}),
                                          (0, l.jsx)(K, {}),
                                          (0, l.jsx)(K, {}),
                                          (0, l.jsx)(K, {}),
                                      ],
                                  })
                                : null;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", {
                                style: { height: a ? void 0 : t },
                                children: (0, l.jsx)(z.A, {
                                    bannerSrc: { src: n },
                                    logoSrc: { src: s },
                                    href: d,
                                    backgroundColor: o,
                                    children: i(),
                                }),
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("div", {
                                style: { height: a ? void 0 : t },
                                children: (0, l.jsx)(z.A, {
                                    bannerSrc: { src: r },
                                    logoSrc: { src: s },
                                    href: d,
                                    backgroundColor: o,
                                    children: i(),
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
                    let { bannerSrc: t, animatedBannerSrc: a, logoSrc: n, backgroundColor: r, href: s } = e;
                    return (0, l.jsx)(U.A, {
                        bannerSrc: "" !== a ? [{ src: a }, { src: t }] : { src: t },
                        logoSrc: "" !== n ? { src: n } : void 0,
                        backgroundColor: r,
                        href: "" !== s ? s : void 0,
                        children: (0, l.jsxs)(T.A, {
                            children: [
                                (0, l.jsx)(_, {}),
                                (0, l.jsx)(_, {}),
                                (0, l.jsx)(_, {}),
                                (0, l.jsx)(_, {}),
                                (0, l.jsx)(_, {}),
                                (0, l.jsx)(_, {}),
                                (0, l.jsx)(_, {}),
                                (0, l.jsx)(_, {}),
                                (0, l.jsx)(_, {}),
                                (0, l.jsx)(_, {}),
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
var J = a(619835),
    Q = a(561769),
    $ = a(817934),
    q = a(503698),
    Z = a.n(q),
    X = a(157941),
    ee = a(866257);
function et(e) {
    let { value: t, onChange: r } = e,
        s = "json",
        d = n.useRef(null),
        [o, i] = n.useState("");
    return (
        n.useEffect(() => {
            let e = !1,
                l = (t ?? "") + "\n";
            return (
                Promise.all([a.e("57036"), a.e("75134")])
                    .then(a.bind(a, 981776))
                    .then((a) => {
                        if (e) return;
                        let n = a.default;
                        if (null != t && n.hasLanguage(s)) {
                            let e = n.highlight(s, t, !0);
                            if (null != e) return void i(e.value + "\n");
                        }
                        i(l);
                    })
                    .catch(() => {
                        e || i(l);
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, s]),
        (0, l.jsxs)("div", {
            className: ee.t,
            children: [
                (0, l.jsx)("pre", {
                    className: ee.c5,
                    "aria-hidden": "true",
                    children: (0, l.jsx)(X.l, {
                        location: "LayoutEditor",
                        code: t,
                        lang: "json",
                        className: "hljs",
                        children: (0, l.jsx)("code", {
                            className: Z()("hljs", s),
                            dangerouslySetInnerHTML: { __html: o ?? "" },
                        }),
                    }),
                }),
                (0, l.jsx)("textarea", {
                    ref: d,
                    className: ee.mW,
                    value: t,
                    onChange: (e) => {
                        r(e.target.value);
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
                                n = a.selectionEnd;
                            if (e.shiftKey) {
                                let e = t.lastIndexOf("\n", l - 1) + 1,
                                    a = t.indexOf("\n", l),
                                    n = t.substring(e, -1 === a ? t.length : a),
                                    s = 0;
                                for (let e = 0; e < Math.min(2, n.length); e++)
                                    if (" " === n[e]) s++;
                                    else break;
                                s > 0 &&
                                    (r(t.substring(0, e) + t.substring(e + s)),
                                    setTimeout(() => {
                                        if (null != d.current) {
                                            let t = Math.max(e, l - s);
                                            d.current.selectionStart = d.current.selectionEnd = t;
                                        }
                                    }, 0));
                            } else
                                r(t.substring(0, l) + "  " + t.substring(n)),
                                    setTimeout(() => {
                                        null != d.current &&
                                            (d.current.selectionStart = d.current.selectionEnd = l + 2);
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
var ea = a(356118),
    el = a(652215),
    en = a(375708),
    er = a(692914);
let es = {
        name: "Remote Layouts",
        id: "remote-layouts",
        component: (e) => {
            let { layoutId: t, tenantId: a } = e;
            return (0, l.jsx)(ea.Qs, { layoutId: t, tenantId: a });
        },
        controls: {
            layoutId: { label: "Layout Id", type: "text", defaultValue: "1465939725649973269" },
            tenantId: { label: "Tenant Id", type: "text", defaultValue: el.FYj },
        },
    },
    ed = {
        name: "Remote Templates",
        id: "remote-templates",
        component: (e) => {
            let { templateId: t, tenantId: a } = e;
            return (0, l.jsx)(ea.Z_, { templateId: t, tenantId: a });
        },
        controls: {
            templateId: { label: "Template Id", type: "text", defaultValue: J.b.POPULAR_PICKS },
            tenantId: { label: "Tenant Id", type: "text", defaultValue: el.FYj },
        },
    };
var eo = a(3830),
    ei = a(338124),
    ec = a(359778),
    eh = a(824388);
let eu = (e) => {
    let { color: t, children: a } = e;
    return (0, l.jsx)(ec.Z, {
        style: { backgroundColor: t, padding: "16px", minWidth: "100px", minHeight: "100px" },
        children: (0, l.jsx)(r.E, { variant: "text-md/semibold", children: a }),
    });
};
var ex = a(32236),
    em = a(572204);
let eb = {
    title: "Mana",
    stories: [
        {
            name: "Button",
            id: "layout-system-button",
            component: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children: "Button component for Layout System interactions.",
                        }),
                        (0, l.jsxs)(S.B, {
                            direction: "vertical",
                            children: [
                                (0, l.jsx)(eo.A, { ...e }),
                                (0, l.jsx)("hr", {}),
                                (0, l.jsx)(eo.A, { href: e.href, ctaText: "Variant = primary", variant: "primary" }),
                                (0, l.jsx)(eo.A, {
                                    href: e.href,
                                    ctaText: "Variant = secondary",
                                    variant: "secondary",
                                }),
                                (0, l.jsx)(eo.A, {
                                    href: e.href,
                                    ctaText: "Variant = critical-primary",
                                    variant: "critical-primary",
                                }),
                                (0, l.jsx)(eo.A, {
                                    href: e.href,
                                    ctaText: "Variant = critical-secondary",
                                    variant: "critical-secondary",
                                }),
                                (0, l.jsx)(eo.A, { href: e.href, ctaText: "Variant = active", variant: "active" }),
                                (0, l.jsx)(eo.A, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-primary",
                                    variant: "overlay-primary",
                                }),
                                (0, l.jsx)(eo.A, {
                                    href: e.href,
                                    ctaText: "Variant = overlay-secondary",
                                    variant: "overlay-secondary",
                                }),
                                (0, l.jsx)(eo.A, {
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
            id: "layout-system-heading",
            component: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children: "Heading component for Layout System content.",
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
            id: "layout-system-stack",
            component: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children: "Stack component for Layout System.",
                        }),
                        (0, l.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, l.jsxs)(eh.A, {
                                ...e,
                                children: [
                                    (0, l.jsx)(eu, { color: "#5865F2", children: "Item 1" }),
                                    (0, l.jsx)(eu, { color: "#57F287", children: "Item 2" }),
                                    (0, l.jsx)(eu, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(r.E, { variant: "text-md/semibold", children: "Horizontal Stack" }),
                        (0, l.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, l.jsxs)(eh.A, {
                                ...e,
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(eu, { color: "#5865F2", children: "Item 1" }),
                                    (0, l.jsx)(eu, { color: "#57F287", children: "Item 2" }),
                                    (0, l.jsx)(eu, { color: "#FEE75C", children: "Item 3" }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(r.E, { variant: "text-md/semibold", children: "Vertical Stack" }),
                        (0, l.jsx)("div", {
                            style: { border: "1px dashed #ccc", padding: "16px" },
                            children: (0, l.jsxs)(eh.A, {
                                ...e,
                                direction: "vertical",
                                children: [
                                    (0, l.jsx)(eu, { color: "#5865F2", children: "Item 1" }),
                                    (0, l.jsx)(eu, { color: "#57F287", children: "Item 2" }),
                                    (0, l.jsx)(eu, { color: "#FEE75C", children: "Item 3" }),
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
            id: "layout-system-text",
            component: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(r.E, {
                            variant: "text-lg/semibold",
                            children: "Text component for Layout System content.",
                        }),
                        (0, l.jsx)(ex.A, { ...e }),
                        (0, l.jsx)("hr", {}),
                        (0, l.jsx)(ex.A, { content: "Variant = text-xs/normal", variant: "text-xs/normal" }),
                        (0, l.jsx)(ex.A, { content: "Variant = text-sm/normal", variant: "text-sm/normal" }),
                        (0, l.jsx)(ex.A, { content: "Variant = text-sm/medium", variant: "text-sm/medium" }),
                        (0, l.jsx)(ex.A, { content: "Variant = text-sm/semibold", variant: "text-sm/semibold" }),
                        (0, l.jsx)(ex.A, { content: "Variant = text-md/normal", variant: "text-md/normal" }),
                        (0, l.jsx)(ex.A, { content: "Variant = text-md/medium", variant: "text-md/medium" }),
                        (0, l.jsx)(ex.A, { content: "Variant = text-md/semibold", variant: "text-md/semibold" }),
                        (0, l.jsx)(ex.A, { content: "Variant = text-lg/normal", variant: "text-lg/normal" }),
                        (0, l.jsx)(ex.A, { content: "Variant = text-lg/medium", variant: "text-lg/medium" }),
                        (0, l.jsx)(ex.A, { content: "Variant = text-lg/semibold", variant: "text-lg/semibold" }),
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
            id: "layout-system-tooltip",
            component: (e) =>
                (0, l.jsx)(em.A, {
                    ...e,
                    children: (0, l.jsx)("div", {
                        style: { width: 300, background: "pink", borderRadius: 8, padding: 12 },
                        children: (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Hover me." }),
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
var ep = a(206845),
    eg = a(973125),
    ej = a(745308);
let ef = {
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
    ev = {
        title: "Recursive",
        stories: [
            {
                name: "SkuList",
                id: "skulist",
                component: (e) => {
                    let { skuIds: t, sortPurchased: a, eagerLoad: n, showSkeleton: d } = e,
                        i = (0, eg.e)();
                    return (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(s.D, {
                                variant: "heading-lg/bold",
                                children: "The SkuList component takes a list of skus and maps them into a block",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here, we have a list of 3 skuIds and we map over them, pushing them into ShopProductCards",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "This will be useful when wanting to get a dynamic list of sku ids from the server (like popular picks) and push them into a product grid",
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(o.Ay, {
                                columns: 3,
                                children: (0, l.jsx)(ej.A, {
                                    skuIds: t?.split(","),
                                    skuBlock: "ShopProductCard",
                                    sortPurchased: a,
                                    eagerLoad: n,
                                    showSkeleton: d,
                                    componentMap: i,
                                }),
                            }),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)(r.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                            (0, l.jsxs)(S.B, {
                                direction: "horizontal",
                                children: [
                                    (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                                    (0, l.jsx)(ep.A, {
                                        text: en.intl.string(en.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704192811088",
                                        children: (e) =>
                                            (0, l.jsx)(A.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, l.jsx)(r.E, {
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
                                    (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                                    (0, l.jsx)(ep.A, {
                                        text: en.intl.string(en.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458479739110166560",
                                        children: (e) =>
                                            (0, l.jsx)(A.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, l.jsx)(r.E, {
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
                                    (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Nameplate" }),
                                    (0, l.jsx)(ep.A, {
                                        text: en.intl.string(en.t.OpuAlK),
                                        delay: 0,
                                        "aria-label": !1,
                                        copyValue: "1458472704524156959",
                                        children: (e) =>
                                            (0, l.jsx)(A.D, {
                                                ...e,
                                                style: { cursor: "pointer" },
                                                children: (0, l.jsx)(r.E, {
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
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "When resolved, the layout trees are merged into one layout. This allows for the asynchronous resolution of layouts, for faster first paints",
                            }),
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here, the \"popular picks\" are actually a sub layout with the id 'dummy-popular-picks'",
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(ea.Ay, { layout: $.uG }),
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
                            (0, l.jsx)(r.E, {
                                variant: "text-md/semibold",
                                children:
                                    "Here we use the `Skeleton` component to show the shop cards loading while the (dummy) Shop Cards SubLayout are resolving (it will never stop loading for demonstration purposes)",
                            }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)("hr", {}),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(ea.Ay, { layout: ef }),
                        ],
                    }),
                controls: {},
            },
        ],
    };
var ey = a(575593),
    ek = a(674658),
    eA = a(88686),
    eS = a(780898),
    eI = a(174755),
    eV = a(486020);
let ew = (e) => {
    let { skuId: t, size: a = 128, animated: n = !1 } = e,
        { product: r } = (0, ek.q)(t, !0),
        s = r?.items[0];
    if (null == s) return null;
    if (s.type === ey.R.AVATAR_DECORATION) {
        let e = eV.Ay.getAvatarDecorationURL({ avatarDecoration: s, size: a, canAnimate: n });
        return null != e ? (0, l.jsx)("img", { src: e, alt: s.label }) : null;
    }
    if (s.type === ey.R.PROFILE_EFFECT) {
        let e = s.thumbnailPreviewSrc;
        return (0, l.jsx)("img", { src: e, alt: s.accessibilityLabel });
    }
    if (s.type === ey.R.NAMEPLATE) {
        let e = (0, eS.WK)(s);
        return (0, l.jsx)(eI.A, { nameplate: e, placement: eA.u.PREVIEW });
    }
    return null;
};
var eE = a(538235),
    eC = a(891167);
let eT = {
        id: "layout-system",
        name: "Layout System",
        groups: [
            {
                title: "Layout Builder",
                stories: [
                    {
                        name: "Layout Builder",
                        id: "layout-builder",
                        component: () => {
                            let [e, t] = n.useState(JSON.stringify($.uG, null, 2)),
                                [a, r] = n.useState(e);
                            return (
                                n.useEffect(() => {
                                    try {
                                        (0, ea.F2)(JSON.parse(e)) && r(e);
                                    } catch {}
                                }, [e]),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(et, { value: e, onChange: (e) => t(e) }),
                                        (0, l.jsx)("hr", {}),
                                        (0, l.jsx)(ea.Ay, { layout: JSON.parse(a) }),
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
                                                        tenantId: el.FYj,
                                                        templateId: J.b.POPULAR_PICKS,
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
                                    (0, l.jsx)(Q.v3.Provider, {
                                        value: { prioritizedCurrency: Q.Hi.ORBS },
                                        children: (0, l.jsx)("div", {
                                            style: { position: "relative" },
                                            children: (0, l.jsx)(ea.Ay, { layout: e }),
                                        }),
                                    }),
                                ],
                            });
                        },
                        controls: {},
                    },
                    es,
                    ed,
                    {
                        name: "Themed Images",
                        id: "themed-images",
                        component: (e) => {
                            let { lightAsset: t, darkAsset: a } = e,
                                n = {
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
                            return (0, l.jsx)(ea.Ay, { layout: n });
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
                        name: "Layout System String",
                        id: "layout-system-string",
                        component: (e) => {
                            let { text: t } = e;
                            (0, en.useSyncMessages)(er.c);
                            let a = (0, M.W)(t);
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)(r.E, {
                                        variant: "text-lg/bold",
                                        children: [
                                            "Any registered string key can be used to reference client-side international strings",
                                            " ",
                                        ],
                                    }),
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/normal",
                                        children: "Strings are registered in `useLayoutSystemString.tsx`",
                                    }),
                                    (0, l.jsx)("br", {}),
                                    (0, l.jsx)("hr", {}),
                                    (0, l.jsx)("br", {}),
                                    (0, l.jsxs)(r.E, { variant: "text-md/semibold", children: ["Received: ", t] }),
                                    (0, l.jsxs)(r.E, { variant: "text-md/semibold", children: ["Resolved: ", a] }),
                                ],
                            });
                        },
                        controls: {
                            text: { label: "Text", type: "text", defaultValue: "COLLECTIBLES_SHOP_THE_COLLECTION" },
                        },
                    },
                ],
            },
            eb,
            R,
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
                                children: (0, l.jsx)(D.A, {
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
                                children: (0, l.jsx)(O.A, {
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
                                n = { backgroundImage: { src: t }, ...a };
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(r.E, {
                                        variant: "text-lg/semibold",
                                        children:
                                            "Featured Chip will take up the full width of the parent, so it is best suited for LayoutSystemStack or Grid parents",
                                    }),
                                    (0, l.jsx)(i.A, { children: (0, l.jsx)(G.A, { ...n }) }),
                                    (0, l.jsxs)(i.A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                                            (0, l.jsxs)(o.Ay, {
                                                columns: 3,
                                                children: [
                                                    (0, l.jsx)(G.A, { ...n }),
                                                    (0, l.jsx)(G.A, { ...n }),
                                                    (0, l.jsx)(G.A, { ...n }),
                                                    (0, l.jsx)(G.A, { ...n }),
                                                    (0, l.jsx)(G.A, { ...n }),
                                                    (0, l.jsx)(G.A, { ...n }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(i.A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, l.jsxs)(d.Ym, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, l.jsx)(G.A, { ...n }),
                                                    (0, l.jsx)(G.A, { ...n }),
                                                    (0, l.jsx)(G.A, { ...n }),
                                                    (0, l.jsx)(G.A, { ...n }),
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
                                    logoSrc: n,
                                    supplementalImage: s,
                                    ctaText: c,
                                    href: h,
                                } = e,
                                u = {
                                    backgroundImage: { src: a },
                                    logoSrc: { src: n },
                                    supplementalImage: { src: s },
                                    ctaText: c,
                                    href: h,
                                };
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(r.E, {
                                        variant: "text-lg/semibold",
                                        children:
                                            "Featured Collection will take up the full width of the parent, so it is best suited for LayoutSystemStack or Grid parents",
                                    }),
                                    (0, l.jsx)(i.A, { children: (0, l.jsx)(x.A, { ...u }) }),
                                    (0, l.jsxs)(i.A, {
                                        children: [
                                            (0, l.jsxs)(r.E, {
                                                variant: "text-lg/semibold",
                                                children: ["Grid (", t, "):"],
                                            }),
                                            (0, l.jsxs)(o.Ay, {
                                                columns: t,
                                                children: [(0, l.jsx)(x.A, { ...u }), (0, l.jsx)(x.A, { ...u })],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(i.A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, l.jsxs)(d.Ym, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, l.jsx)(x.A, { ...u }),
                                                    (0, l.jsx)(x.A, { ...u }),
                                                    (0, l.jsx)(x.A, { ...u }),
                                                    (0, l.jsx)(x.A, { ...u }),
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
                                n = { backgroundImage: { src: t }, ...a };
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "PLACEHOLDER" }),
                                    (0, l.jsx)(i.A, { children: (0, l.jsx)(N, { ...n }) }),
                                    (0, l.jsxs)(i.A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Grid (3):" }),
                                            (0, l.jsxs)(o.Ay, {
                                                columns: 3,
                                                children: [
                                                    (0, l.jsx)(N, { ...n }),
                                                    (0, l.jsx)(N, { ...n }),
                                                    (0, l.jsx)(N, { ...n }),
                                                    (0, l.jsx)(N, { ...n }),
                                                    (0, l.jsx)(N, { ...n }),
                                                    (0, l.jsx)(N, { ...n }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(i.A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Stack:" }),
                                            (0, l.jsxs)(d.Ym, {
                                                direction: "horizontal",
                                                children: [
                                                    (0, l.jsx)(N, { ...n }),
                                                    (0, l.jsx)(N, { ...n }),
                                                    (0, l.jsx)(N, { ...n }),
                                                    (0, l.jsx)(N, { ...n }),
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
            Y,
            ev,
            {
                title: "Sku",
                stories: [
                    {
                        name: "ShopProductCard",
                        id: "shopProduct-card",
                        component: (e) => {
                            let { skuId: t } = e;
                            return (0, l.jsx)("div", { children: (0, l.jsx)(F.A, { skuId: t }) });
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
                                    (0, l.jsx)(ew, { skuId: t }),
                                    (0, l.jsx)("hr", {}),
                                    (0, l.jsx)(r.E, { variant: "text-md/bold", children: "Sample Skus:" }),
                                    (0, l.jsxs)(S.B, {
                                        direction: "horizontal",
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Avatar Decoration" }),
                                            (0, l.jsx)(ep.A, {
                                                text: en.intl.string(en.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458472704192811088",
                                                children: (e) =>
                                                    (0, l.jsx)(A.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, l.jsx)(r.E, {
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
                                            (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Profile Effect" }),
                                            (0, l.jsx)(ep.A, {
                                                text: en.intl.string(en.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458479739110166560",
                                                children: (e) =>
                                                    (0, l.jsx)(A.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, l.jsx)(r.E, {
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
                                            (0, l.jsx)(r.E, { variant: "text-sm/bold", children: "Nameplate" }),
                                            (0, l.jsx)(ep.A, {
                                                text: en.intl.string(en.t.OpuAlK),
                                                delay: 0,
                                                "aria-label": !1,
                                                copyValue: "1458472704524156959",
                                                children: (e) =>
                                                    (0, l.jsx)(A.D, {
                                                        ...e,
                                                        style: { cursor: "pointer" },
                                                        children: (0, l.jsx)(r.E, {
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
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/semibold",
                                        children:
                                            "The Any component is used to allow injecting super-bespoke components into a layout without defining a new block type.",
                                    }),
                                    (0, l.jsx)(r.E, {
                                        variant: "text-md/semibold",
                                        children:
                                            "It's ONLY use is to be overriden by another block in `useComponentRegistry`",
                                    }),
                                    (0, l.jsx)(i.A, { children: (0, l.jsx)(eE.A, {}) }),
                                ],
                            }),
                        controls: {},
                    },
                    {
                        name: "Image",
                        id: "layout-system-image",
                        component: (e) => {
                            let { imageSrc: t, videoSrc: a } = e;
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)(i.A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Static image" }),
                                            (0, l.jsx)("div", {
                                                style: { height: 200 },
                                                children: (0, l.jsx)(eC.A, { src: { src: t } }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(i.A, {
                                        children: [
                                            (0, l.jsx)(r.E, { variant: "text-lg/semibold", children: "Video asset" }),
                                            (0, l.jsx)("div", {
                                                style: { height: 200 },
                                                children: (0, l.jsx)(eC.A, { src: { src: a } }),
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
    eL = { collections: [eT] };
