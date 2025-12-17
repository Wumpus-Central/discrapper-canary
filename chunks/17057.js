n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(348066),
    a = n(388032),
    o = n(683103),
    s = n(154603);
let c = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: o.previewBackground,
        children: (0, r.jsxs)("div", {
            className: o.previewCard,
            children: [
                (0, r.jsx)(i.Heading, {
                    variant: "heading-md/semibold",
                    children: a.intl.string(a.t.IcljUu),
                }),
                (0, r.jsx)("div", {
                    className: s.embedHelper,
                    children: (0, r.jsx)("span", {
                        className: s.helperText,
                        children: a.intl.string(a.t.q97mEu),
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
                                children: (0, r.jsx)(l.Z, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
