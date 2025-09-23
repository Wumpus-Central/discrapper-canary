n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(265299),
    o = n(818923),
    s = n(142441);
let l = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: o.previewBackground,
        children: (0, r.jsxs)("div", {
            className: o.previewCard,
            children: [
                (0, r.jsx)(i.X6q, {
                    variant: "heading-md/semibold",
                    children: "Resizable Embed Preview",
                }),
                (0, r.jsx)("div", {
                    className: s.embedHelper,
                    children: (0, r.jsx)("span", {
                        className: s.helperText,
                        children: "Drag the corner to resize (300px - 687px)",
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s.embedSections,
                    children: (0, r.jsx)("div", {
                        className: s.embedSection,
                        children: (0, r.jsx)("div", {
                            className: s.embedWrapper,
                            children: (0, r.jsx)("div", {
                                className: s.questsEmbed,
                                children: (0, r.jsx)(a.Z, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
