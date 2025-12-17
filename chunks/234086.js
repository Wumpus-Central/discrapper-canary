n.d(t, { i: () => s });
var r = n(54381),
    i = n(481060),
    l = n(801604),
    a = n(388032),
    o = n(683103);
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
                    children: a.intl.string(a.t.gWinpQ),
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
