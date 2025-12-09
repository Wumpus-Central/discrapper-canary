n.d(t, { Z: () => m });
var a = n(54381);
n(473749);
var r = n(481060),
    i = n(49436),
    l = n(373370),
    s = n(644646),
    o = n(444134),
    c = n(836831),
    d = n(324805),
    u = n(835343);
let m = (e) => {
    let {
            contentLocation: t,
            quest: n,
            progressBarRef: m,
            isExpanded: p,
            percentComplete: h,
            activeScreen: x,
            popoutTargetElementRef: f,
            onGameSheetOpened: g,
            onGameSheetClosed: b,
        } = e,
        v = (0, l.eQ)(n),
        j = (0, l.vf)({
            quest: n,
            isExpanded: p,
            activeScreen: x,
            sourceQuestContent: i.jn.QUEST_BAR_V2,
            popoutTargetElementRef: f,
            onGameSheetOpened: g,
            onGameSheetClosed: b,
        });
    return (0, a.jsxs)("div", {
        className: u.questProgressWrapper,
        children: [
            (0, a.jsx)(o.JC, {
                inState: t,
                id: "progress-bar",
                ref: m,
                children: (e) =>
                    (0, a.jsx)(c.Z, {
                        ref: e,
                        quest: n,
                        percentComplete: h,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, a.jsx)(s.Z, {
                            className: u.questProgressRewardTile,
                            quest: n,
                            questContent: i.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: d.dr.QUESTS_BAR,
                            sourceQuestContent: i.jn.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, a.jsxs)("div", {
                className: u.questProgressCopy,
                children: [
                    (0, a.jsx)(o.JC, {
                        inState: t,
                        id: "progress-title",
                        children: (e) =>
                            (0, a.jsx)(r.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                children: v,
                            }),
                    }),
                    (0, a.jsx)(o.JC, {
                        inState: t,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, a.jsx)(r.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: j,
                            }),
                    }),
                ],
            }),
        ],
    });
};
