n.d(t, { w: () => l });
var r = n(951288),
    i = n(481060),
    a = n(497505),
    o = n(415104),
    s = n(818923);
let l = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: s.previewBackground,
        children: (0, r.jsxs)("div", {
            className: s.previewCard,
            children: [
                (0, r.jsx)(i.X6q, {
                    className: s.heading,
                    variant: "heading-md/semibold",
                    children: "Home Card",
                }),
                (0, r.jsx)(o.Z, {
                    className: s.questTile,
                    quest: t,
                    questContent: a.jn.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: a.jn.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
