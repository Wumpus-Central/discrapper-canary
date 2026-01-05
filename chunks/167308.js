n.d(t, { Z: () => p });
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(49436),
    s = n(373370),
    o = n(644646),
    c = n(444134),
    d = n(836831),
    u = n(526188),
    m = n(674293);
let p = (e) => {
    let {
            isExpanded: t,
            contentLocation: n,
            progressBarRef: p,
            percentComplete: f,
            activeScreen: h,
            popoutTargetElementRef: x,
        } = e,
        { quest: b, onGameSheetOpen: g, onGameSheetClose: v } = r.useContext(u.A),
        j = (0, s.eQ)(b),
        C = (0, s.vf)({
            quest: b,
            isExpanded: t,
            activeScreen: h,
            sourceQuestContent: l.jn.QUEST_BAR_V2,
            popoutTargetElementRef: x,
            onGameSheetOpened: g,
            onGameSheetClosed: v,
        });
    return (0, a.jsxs)("div", {
        className: m.questProgressWrapper,
        children: [
            (0, a.jsx)(c.JC, {
                inState: n,
                id: "progress-bar",
                ref: p,
                children: (e) =>
                    (0, a.jsx)(d.Z, {
                        ref: e,
                        quest: b,
                        percentComplete: f,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, a.jsx)(o.Z, {
                            className: m.questProgressRewardTile,
                            quest: b,
                            questContent: l.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: l.jn.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, a.jsxs)("div", {
                className: m.questProgressCopy,
                children: [
                    (0, a.jsx)(c.JC, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, a.jsx)(i.Text, {
                                ref: e,
                                className: m.questProgressHint,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: j,
                            }),
                    }),
                    (0, a.jsx)(c.JC, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, a.jsx)(i.Text, {
                                ref: e,
                                className: m.questProgressHint,
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
