n.d(t, { Z: () => p });
var s = n(200651),
    r = n(192379),
    a = n(113434),
    o = n(497505),
    i = n(467628),
    l = n(373370),
    c = n(795057),
    d = n(46140),
    u = n(388032);
let p = function (e) {
    let { quest: t, taskDetails: n } = e,
        p = (0, a.pe)(t),
        m = (0, l.DD)({
            quest: t,
            taskDetails: n,
            location: d.dr.QUESTS_BAR,
            questContent: o.jn.QUEST_BAR_V2
        }),
        x = (0, i.j)({ location: d.dr.QUESTS_BAR }),
        h = r.useMemo(() => {
            var e;
            let n = t.config.messages.gameTitle,
                r = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return [
                {
                    renderContent: () => (0, s.jsx)(c.y3, { children: u.intl.formatToPlainString(u.t['26nQp6'], { gameTitle: n }) }),
                    isComplete: p || r
                },
                {
                    renderContent: () => (0, s.jsx)(c.y3, { children: m }),
                    isComplete: r
                }
            ];
        }, [m, p, t]);
    return (0, s.jsx)(c.ZP, {
        heading: u.intl.string(u.t.A03mEh),
        steps: h,
        children: x && (0, s.jsx)(c.Om, { quest: t })
    });
};
