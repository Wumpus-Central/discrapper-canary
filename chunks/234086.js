n.d(t, { i: () => s });
var r = n(951288),
    i = n(481060),
    l = n(134483),
    a = n(388032),
    o = n(818923);
let s = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: o.previewBackground,
        children: (0, r.jsxs)("div", {
            className: o.previewCard,
            children: [
                (0, r.jsx)(i.Heading, {
                    className: o.heading,
                    variant: "heading-md/semibold",
                    children: a.intl.string(a.t.gWinpa),
                }),
                (0, r.jsx)("div", {
                    className: o.questChannelCallHeaderWrapper,
                    children: (0, r.jsx)(l.Z, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
