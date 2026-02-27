n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(544028),
    o = n(859703),
    d = n(341915),
    c = n(714510),
    u = n(890687),
    A = n(639214),
    h = n(73473),
    _ = n(646764),
    m = n(654487),
    p = n(985018),
    g = n(453561);
function E(e) {
    let { quest: t } = e,
        n = (0, u.fc)(t),
        a = (0, c.mU)({
            quest: t,
            taskDetails: n,
            location: m.rE.QUEST_ACTIVITY_HEADER,
            questContent: d.uF.RUNNING_ACTIVITY,
            sourceQuestContent: d.uF.RUNNING_ACTIVITY,
        }),
        [s, o] = r.useState(!1);
    return (0, i.jsxs)("div", {
        className: g.w,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, i.jsx)(_.A, {
                quest: t,
                questContent: d.uF.RUNNING_ACTIVITY,
                sourceQuestContent: d.uF.RUNNING_ACTIVITY,
                className: g.Q,
                autoplay: s,
            }),
            (0, i.jsx)(l.$nd, {
                text: p.intl.formatToPlainString(p.t.EAYZAr, { questName: t.config.messages.questName }),
                variant: "secondary",
                size: "sm",
            }),
            (0, i.jsx)(l.EYj, { variant: "text-sm/normal", color: "text-muted", children: a }),
        ],
    });
}
function I(e) {
    let { applicationId: t } = e,
        n = (0, a.bG)([o.A], () => o.A.quests),
        c = (0, a.bG)([s.A], () => s.A.theme),
        u = r.useMemo(
            () => (0, A.jm)(n, t, !0).find((e) => !e.config.features.includes(m.Li.ACTIVITY_QUEST_AUTO_ENROLLMENT)),
            [n, t],
        );
    return null == u
        ? null
        : (0, i.jsx)(l.NPJ, {
              theme: c,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(h.R, {
                          questOrQuests: u,
                          questContent: d.uF.RUNNING_ACTIVITY,
                          sourceQuestContent: d.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(E, { quest: u }),
                      }),
                  }),
          });
}
