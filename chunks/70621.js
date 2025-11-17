n.d(t, { w: () => c });
var r = n(54381),
    i = n(481060),
    l = n(497505),
    a = n(415104),
    s = n(388032),
    o = n(818923);
let c = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: o.previewBackground,
        children: (0, r.jsxs)("div", {
            className: o.previewCard,
            children: [
                (0, r.jsx)(i.Heading, {
                    className: o.heading,
                    variant: "heading-md/semibold",
                    children: s.intl.string(s.t["5wnpF3"]),
                }),
                (0, r.jsx)(a.Z, {
                    className: o.questTile,
                    quest: t,
                    questContent: l.jn.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: l.jn.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
