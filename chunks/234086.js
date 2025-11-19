n.d(t, { i: () => o });
var r = n(54381),
    i = n(481060),
    l = n(134483),
    a = n(388032),
    s = n(674455);
let o = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: s.previewBackground,
        children: (0, r.jsxs)("div", {
            className: s.previewCard,
            children: [
                (0, r.jsx)(i.Heading, {
                    className: s.heading,
                    variant: "heading-md/semibold",
                    children: a.intl.string(a.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: s.questChannelCallHeaderWrapper,
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
