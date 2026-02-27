n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(859703),
    o = n(341915),
    d = n(714510),
    c = n(890687),
    u = n(639214),
    A = n(73473),
    h = n(646764),
    _ = n(654487),
    m = n(985018),
    p = n(453561);
function g(e) {
    let { quest: t } = e,
        n = (0, c.fc)(t),
        a = (0, d.mU)({
            quest: t,
            taskDetails: n,
            location: _.rE.QUEST_ACTIVITY_HEADER,
            questContent: o.uF.RUNNING_ACTIVITY,
            sourceQuestContent: o.uF.RUNNING_ACTIVITY,
        }),
        [s, u] = r.useState(!1);
    return (0, i.jsxs)("div", {
        className: p.w,
        onMouseEnter: () => u(!0),
        onMouseLeave: () => u(!1),
        children: [
            (0, i.jsx)(h.A, {
                quest: t,
                questContent: o.uF.RUNNING_ACTIVITY,
                sourceQuestContent: o.uF.RUNNING_ACTIVITY,
                className: p.Q,
                autoplay: s,
            }),
            (0, i.jsx)(l.$nd, {
                text: m.intl.formatToPlainString(m.t.EAYZAr, { questName: t.config.messages.questName }),
                variant: "secondary",
                size: "sm",
            }),
            (0, i.jsx)(l.EYj, { variant: "text-sm/normal", color: "text-muted", children: a }),
        ],
    });
}
function E(e) {
    let { applicationId: t } = e,
        n = (0, a.bG)([s.A], () => s.A.quests),
        l = r.useMemo(
            () => (0, u.jm)(n, t, !0).find((e) => !e.config.features.includes(_.Li.ACTIVITY_QUEST_AUTO_ENROLLMENT)),
            [n, t],
        );
    return null == l
        ? null
        : (0, i.jsx)(A.R, {
              questOrQuests: l,
              questContent: o.uF.RUNNING_ACTIVITY,
              sourceQuestContent: o.uF.RUNNING_ACTIVITY,
              overrideVisibility: !0,
              children: () => (0, i.jsx)(g, { quest: l }),
          });
}
