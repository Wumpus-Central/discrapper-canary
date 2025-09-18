n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(265299),
    l = n(818923),
    c = n(142441);
let u = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: l.previewBackground,
        children: (0, r.jsxs)("div", {
            className: l.previewCard,
            style: { width: "100%" },
            children: [
                (0, r.jsx)(o.X6q, {
                    className: c.sectionHeading,
                    variant: "heading-md/semibold",
                    children: "Embed Previews",
                }),
                (0, r.jsxs)("div", {
                    className: c.embedSections,
                    children: [
                        (0, r.jsxs)("div", {
                            className: c.embedSection,
                            children: [
                                (0, r.jsxs)(o.X6q, {
                                    className: c.sectionHeading,
                                    variant: "heading-sm/semibold",
                                    children: [
                                        "Desktop Embed",
                                        (0, r.jsx)("span", {
                                            className: c.sizeLabel,
                                            children: "(687px)",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)("div", {
                                        className: a()(c.fixedEmbed, c.desktopEmbed),
                                        children: (0, r.jsx)(s.Z, { questId: t }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: c.embedSection,
                            children: [
                                (0, r.jsxs)(o.X6q, {
                                    className: c.sectionHeading,
                                    variant: "heading-sm/semibold",
                                    children: [
                                        "Tablet Embed",
                                        (0, r.jsx)("span", {
                                            className: c.sizeLabel,
                                            children: "(450px)",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)("div", {
                                        className: a()(c.fixedEmbed, c.tabletEmbed),
                                        children: (0, r.jsx)(s.Z, { questId: t }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: c.embedSection,
                            children: [
                                (0, r.jsxs)(o.X6q, {
                                    className: c.sectionHeading,
                                    variant: "heading-sm/semibold",
                                    children: [
                                        "Mobile Embed",
                                        (0, r.jsx)("span", {
                                            className: c.sizeLabel,
                                            children: "(300px)",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)("div", {
                                        className: a()(c.fixedEmbed, c.mobileEmbed),
                                        children: (0, r.jsx)(s.Z, { questId: t }),
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: c.embedSection,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: "heading-sm/semibold",
                                    children: "Resizable Embed",
                                }),
                                (0, r.jsx)("div", {
                                    className: c.embedHelper,
                                    children: (0, r.jsx)("span", {
                                        className: c.helperText,
                                        children: "Drag the corner to resize (300px - 687px)",
                                    }),
                                }),
                                (0, r.jsx)("div", {
                                    className: c.embedWrapper,
                                    children: (0, r.jsx)("div", {
                                        className: c.questsEmbed,
                                        children: (0, r.jsx)(s.Z, { questId: t }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
