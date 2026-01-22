n.d(t, {
    A: () => p,
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(341915),
    s = n(714510),
    o = n(646764),
    c = n(568329),
    d = n(453384),
    u = n(963713),
    m = n(128478);
let p = (e) => {
    let {
            isExpanded: t,
            contentLocation: n,
            progressBarRef: p,
            percentComplete: h,
            activeScreen: f,
            popoutTargetElementRef: x,
        } = e,
        { quest: b, onGameSheetOpen: g, onGameSheetClose: v } = l.useContext(u.T),
        j = (0, s.VX)(b),
        y = (0, s.tH)({
            quest: b,
            isExpanded: t,
            activeScreen: f,
            sourceQuestContent: r.uF.QUEST_BAR_V2,
            popoutTargetElementRef: x,
            onGameSheetOpened: g,
            onGameSheetClosed: v,
        });
    return (0, a.jsxs)("div", {
        className: m.Z0,
        children: [
            (0, a.jsx)(c.dN, {
                inState: n,
                id: "progress-bar",
                ref: p,
                children: (e) =>
                    (0, a.jsx)(d.A, {
                        ref: e,
                        quest: b,
                        percentComplete: h,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, a.jsx)(o.A, {
                            className: m.vt,
                            quest: b,
                            questContent: r.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: r.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, a.jsxs)("div", {
                className: m.NZ,
                children: [
                    (0, a.jsx)(c.dN, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, a.jsx)(i.Text, {
                                ref: e,
                                className: m.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: j,
                            }),
                    }),
                    (0, a.jsx)(c.dN, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, a.jsx)(i.Text, {
                                ref: e,
                                className: m.FZ,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: y,
                            }),
                    }),
                ],
            }),
        ],
    });
};
