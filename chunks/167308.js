n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var s = n(481060),
    o = n(49436),
    a = n(373370),
    i = n(644646),
    l = n(444134),
    c = n(836831),
    u = n(324805),
    d = n(835343);
let p = (e) => {
    let {
            contentLocation: t,
            quest: n,
            progressBarRef: p,
            isExpanded: m,
            percentComplete: f,
            activeScreen: g,
            popoutTargetElementRef: x,
            onGameSheetOpened: h,
            onGameSheetClosed: _,
        } = e,
        b = (0, a.eQ)(n),
        j = (0, a.vf)({
            quest: n,
            isExpanded: m,
            activeScreen: g,
            sourceQuestContent: o.jn.QUEST_BAR_V2,
            popoutTargetElementRef: x,
            onGameSheetOpened: h,
            onGameSheetClosed: _,
        });
    return (0, r.jsxs)("div", {
        className: d.questProgressWrapper,
        children: [
            (0, r.jsx)(l.JC, {
                inState: t,
                id: "progress-bar",
                ref: p,
                children: (e) =>
                    (0, r.jsx)(c.Z, {
                        ref: e,
                        quest: n,
                        percentComplete: f,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, r.jsx)(i.Z, {
                            className: d.questProgressRewardTile,
                            quest: n,
                            questContent: o.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: u.dr.QUESTS_BAR,
                            sourceQuestContent: o.jn.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, r.jsxs)("div", {
                className: d.questProgressCopy,
                children: [
                    (0, r.jsx)(l.JC, {
                        inState: t,
                        id: "progress-title",
                        children: (e) =>
                            (0, r.jsx)(s.Text, {
                                ref: e,
                                className: d.questProgressHint,
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                children: b,
                            }),
                    }),
                    (0, r.jsx)(l.JC, {
                        inState: t,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, r.jsx)(s.Text, {
                                ref: e,
                                className: d.questProgressHint,
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
