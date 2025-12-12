n.d(t, { Z: () => h });
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(49436),
    s = n(373370),
    o = n(644646),
    c = n(444134),
    d = n(836831),
    u = n(526188),
    m = n(324805),
    p = n(674293);
let h = (e) => {
    let {
            isExpanded: t,
            contentLocation: n,
            progressBarRef: h,
            percentComplete: f,
            activeScreen: x,
            popoutTargetElementRef: b,
        } = e,
        { quest: g, onGameSheetOpen: v, onGameSheetClose: j } = r.useContext(u.A),
        y = (0, s.eQ)(g),
        C = (0, s.vf)({
            quest: g,
            isExpanded: t,
            activeScreen: x,
            sourceQuestContent: l.jn.QUEST_BAR_V2,
            popoutTargetElementRef: b,
            onGameSheetOpened: v,
            onGameSheetClosed: j,
        });
    return (0, a.jsxs)("div", {
        className: p.questProgressWrapper,
        children: [
            (0, a.jsx)(c.JC, {
                inState: n,
                id: "progress-bar",
                ref: h,
                children: (e) =>
                    (0, a.jsx)(d.Z, {
                        ref: e,
                        quest: g,
                        percentComplete: f,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, a.jsx)(o.Z, {
                            className: p.questProgressRewardTile,
                            quest: g,
                            questContent: l.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: m.dr.QUESTS_BAR,
                            sourceQuestContent: l.jn.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, a.jsxs)("div", {
                className: p.questProgressCopy,
                children: [
                    (0, a.jsx)(c.JC, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, a.jsx)(i.Text, {
                                ref: e,
                                className: p.questProgressHint,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: y,
                            }),
                    }),
                    (0, a.jsx)(c.JC, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, a.jsx)(i.Text, {
                                ref: e,
                                className: p.questProgressHint,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: C,
                            }),
                    }),
                ],
            }),
        ],
    });
};
