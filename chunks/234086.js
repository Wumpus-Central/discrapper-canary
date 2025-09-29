n.d(t, { i: () => l });
var r = n(951288),
    i = n(481060),
    a = n(134483),
    o = n(388032),
    s = n(674455);
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
                    children: o.intl.string(o.t.gWinpa),
                }),
                (0, r.jsx)("div", {
                    className: s.questChannelCallHeaderWrapper,
                    children: (0, r.jsx)(a.Z, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
