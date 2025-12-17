n.d(t, { w: () => c });
var r = n(54381),
    i = n(481060),
    l = n(49436),
    a = n(415104),
    o = n(388032),
    s = n(683103);
let c = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: s.previewBackground,
        children: (0, r.jsxs)("div", {
            className: s.previewCard,
            children: [
                (0, r.jsx)(i.Heading, {
                    className: s.heading,
                    variant: "heading-md/semibold",
                    children: o.intl.string(o.t["5wnpF3"]),
                }),
                (0, r.jsx)(a.Z, {
                    className: s.questTile,
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
