n.d(t, { A: () => h });
var a = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(341915),
    r = n(714510),
    o = n(646764),
    d = n(568329),
    c = n(453384),
    u = n(963713),
    m = n(128478);
let h = (e) => {
    let {
            isExpanded: t,
            contentLocation: n,
            progressBarRef: h,
            percentComplete: x,
            activeScreen: p,
            popoutTargetElementRef: g,
        } = e,
        { quest: _, onGameSheetOpen: f, onGameSheetClose: b } = i.useContext(u.T),
        v = (0, r.VX)(_),
        j = (0, r.tH)({
            quest: _,
            isExpanded: t,
            activeScreen: p,
            sourceQuestContent: l.uF.QUEST_BAR_V2,
            popoutTargetElementRef: g,
            onGameSheetOpened: f,
            onGameSheetClosed: b,
        });
    return (0, a.jsxs)("div", {
        className: m.Z0,
        children: [
            (0, a.jsx)(d.dN, {
                inState: n,
                id: "progress-bar",
                ref: h,
                children: (e) =>
                    (0, a.jsx)(c.A, {
                        ref: e,
                        style: "small",
                        percentComplete: x,
                        size: 42,
                        children: (0, a.jsx)(o.A, {
                            fullWidth: !0,
                            quest: _,
                            questContent: l.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: l.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, a.jsxs)("div", {
                className: m.NZ,
                children: [
                    (0, a.jsx)(d.dN, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, a.jsx)(s.Text, {
                                ref: e,
                                className: m.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: v,
                            }),
                    }),
                    (0, a.jsx)(d.dN, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, a.jsx)(s.Text, {
                                ref: e,
                                className: m.FZ,
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
