n.d(t, { Z: () => p });
var r = n(255367),
    s = n(73800),
    o = n(113434),
    a = n(497505),
    i = n(467628),
    l = n(373370),
    c = n(795057),
    u = n(46140),
    d = n(388032);
let p = function (e) {
    let { quest: t, taskDetails: n } = e,
        p = (0, o.pe)(t),
        m = (0, l.DD)({
            quest: t,
            taskDetails: n,
            location: u.dr.QUESTS_BAR,
            questContent: a.jn.QUEST_BAR_V2,
            sourceQuestContent: a.jn.QUEST_BAR_V2
        }),
        f = (0, i.j)({ location: u.dr.QUESTS_BAR }),
        g = s.useMemo(() => {
            var e;
            let n = t.config.messages.gameTitle,
                s = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
            return [
                {
                    renderContent: () => (0, r.jsx)(c.y3, { children: d.intl.formatToPlainString(d.t['26nQp6'], { gameTitle: n }) }),
                    isComplete: p || s
                },
                {
                    renderContent: () => (0, r.jsx)(c.y3, { children: m }),
                    isComplete: s
                }
            ];
        }, [m, p, t]);
    return (0, r.jsx)(c.ZP, {
        heading: d.intl.string(d.t.A03mEh),
        steps: g,
        children: f && (0, r.jsx)(c.Om, { quest: t })
    });
};
