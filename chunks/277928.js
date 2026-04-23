n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(834730),
    a = n(341915),
    r = n(714510),
    o = n(646764),
    d = n(568329),
    c = n(453384),
    u = n(963713),
    p = n(460131);
let h = (e) => {
    let {
            isExpanded: t,
            contentLocation: n,
            progressBarRef: h,
            percentComplete: m,
            activeScreen: _,
            popoutTargetElementRef: A,
        } = e,
        { quest: f, onGameSheetOpen: g, onGameSheetClose: x } = s.useContext(u.T),
        E = (0, r.VX)(f),
        C = (0, r.tH)({
            quest: f,
            isExpanded: t,
            activeScreen: _,
            sourceQuestContent: a.uF.QUEST_BAR_V2,
            popoutTargetElementRef: A,
            onGameSheetOpened: g,
            onGameSheetClosed: x,
        });
    return (0, i.jsxs)("div", {
        className: p.Z0,
        children: [
            (0, i.jsx)(d.dN, {
                inState: n,
                id: "progress-bar",
                ref: h,
                children: (e) =>
                    (0, i.jsx)(c.A, {
                        ref: e,
                        style: "small",
                        percentComplete: m,
                        size: 42,
                        children: (0, i.jsx)(o.A, {
                            fullWidth: !0,
                            quest: f,
                            questContent: a.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: a.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, i.jsxs)("div", {
                className: p.NZ,
                children: [
                    (0, i.jsx)(d.dN, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, i.jsx)(l.E, {
                                ref: e,
                                className: p.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: E,
                            }),
                    }),
                    (0, i.jsx)(d.dN, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, i.jsx)(l.E, {
                                ref: e,
                                className: p.FZ,
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
