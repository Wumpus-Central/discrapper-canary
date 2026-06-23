s.r(t), s.d(t, { safetyPlaygroundConfig: () => c });
var r = s(627968),
    a = s(64700),
    n = s(534514),
    i = s(834730),
    d = s(821609),
    o = s(570962);
let c = {
    collections: [
        {
            id: "safety",
            name: "Safety",
            groups: [
                {
                    title: "Obscured",
                    stories: [
                        {
                            name: "ObscuredSurface",
                            id: "obscured-surface",
                            docs: "Conceals an entire surface behind a blur and scrim with a centered warning. Content is inert and hidden from assistive technology while obscured.",
                            component: function (e) {
                                let { obscured: t } = e,
                                    [s, c] = a.useState(0);
                                return (0, r.jsx)("div", {
                                    style: { width: 480, height: 360 },
                                    children: (0, r.jsx)(o.A, {
                                        obscured: t,
                                        children: (0, r.jsxs)("div", {
                                            style: { display: "flex", flexDirection: "column", gap: 12, padding: 16 },
                                            children: [
                                                (0, r.jsx)("div", {
                                                    style: {
                                                        background: "var(--background-brand)",
                                                        borderRadius: 8,
                                                        height: 120,
                                                    },
                                                }),
                                                (0, r.jsx)(n.D, {
                                                    variant: "heading-lg/bold",
                                                    color: "text-strong",
                                                    children: "Extremely Mature Game",
                                                }),
                                                (0, r.jsx)(i.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    children:
                                                        "A description of an age-restricted game that should be unreadable while the surface is obscured. The content below is also made inert, so the button cannot be focused or clicked.",
                                                }),
                                                (0, r.jsx)(d.$, {
                                                    text: `Should not be clickable while obscured (clicks: ${s})`,
                                                    onClick: () => c((e) => e + 1),
                                                }),
                                            ],
                                        }),
                                    }),
                                });
                            },
                            controls: { obscured: { label: "Obscured", type: "boolean", defaultValue: !0 } },
                        },
                    ],
                },
            ],
        },
    ],
};
