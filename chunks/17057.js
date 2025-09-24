n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(265299),
    o = n(388032),
    s = n(818923),
    l = n(142441);
let c = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: s.previewBackground,
        children: (0, r.jsxs)("div", {
            className: s.previewCard,
            children: [
                (0, r.jsx)(i.X6q, {
                    variant: "heading-md/semibold",
                    children: o.intl.string(o.t.YCrItr),
                }),
                (0, r.jsx)("div", {
                    className: l.embedHelper,
                    children: (0, r.jsx)("span", {
                        className: l.helperText,
                        children: o.intl.string(o.t.lSSsqK),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: l.embedSections,
                    children: (0, r.jsx)("div", {
                        className: l.embedSection,
                        children: (0, r.jsx)("div", {
                            className: l.embedWrapper,
                            children: (0, r.jsx)("div", {
                                className: l.questsEmbed,
                                children: (0, r.jsx)(a.Z, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
