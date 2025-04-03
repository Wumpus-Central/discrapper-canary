n.d(t, { Z: () => p });
var r = n(200651),
    o = n(192379),
    s = n(113434),
    a = n(497505),
    i = n(467628),
    l = n(373370),
    c = n(795057),
    d = n(46140),
    u = n(388032);
let p = function (e) {
    let { quest: t, taskDetails: n } = e,
        p = (0, s.pe)(t),
        m = (0, l.DD)({
            quest: t,
            taskDetails: n,
            location: d.dr.QUESTS_BAR,
            questContent: a.jn.QUEST_BAR_V2
        }),
        f = (0, i.j)({ location: d.dr.QUESTS_BAR }),
        g = o.useMemo(() => {
            var e;
            let n = t.config.messages.gameTitle,
                o = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
            return [
                {
                    renderContent: () => (0, r.jsx)(c.y3, { children: u.NW.formatToPlainString(u.t['26nQp6'], { gameTitle: n }) }),
                    isComplete: p || o
                },
                {
                    renderContent: () => (0, r.jsx)(c.y3, { children: m }),
                    isComplete: o
                }
            ];
        }, [m, p, t]);
    return (0, r.jsx)(c.ZP, {
        heading: u.NW.string(u.t.A03mEh),
        steps: g,
        children: f && (0, r.jsx)(c.Om, { quest: t })
    });
};
