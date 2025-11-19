n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(265299),
    a = n(388032),
    s = n(818923),
    o = n(142441);
let c = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: s.previewBackground,
        children: (0, r.jsxs)("div", {
            className: s.previewCard,
            children: [
                (0, r.jsx)(i.Heading, {
                    variant: "heading-md/semibold",
                    children: a.intl.string(a.t.IcljUu),
                }),
                (0, r.jsx)("div", {
                    className: o.embedHelper,
                    children: (0, r.jsx)("span", {
                        className: o.helperText,
                        children: a.intl.string(a.t.q97mEu),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o.embedSections,
                    children: (0, r.jsx)("div", {
                        className: o.embedSection,
                        children: (0, r.jsx)("div", {
                            className: o.embedWrapper,
                            children: (0, r.jsx)("div", {
                                className: o.questsEmbed,
                                children: (0, r.jsx)(l.Z, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
