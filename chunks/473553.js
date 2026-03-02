n.d(t, { A: () => N });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(554146),
    o = n(932001),
    d = n(544028),
    c = n(859703),
    u = n(341915),
    A = n(714510),
    h = n(890687),
    _ = n(639214),
    m = n(801320),
    p = n(73473),
    g = n(646764),
    E = n(654487),
    I = n(49999),
    f = n(985018),
    C = n(453561);
function T(e) {
    let { quest: t } = e,
        n = (0, h.fc)(t),
        a = (0, A.mU)({
            quest: t,
            taskDetails: n,
            location: E.rE.QUEST_ACTIVITY_HEADER,
            questContent: u.uF.RUNNING_ACTIVITY,
            sourceQuestContent: u.uF.RUNNING_ACTIVITY,
        }),
        [d, c] = r.useState(!1),
        _ = r.useRef(null),
        [p, T] = (0, o.kn)([s.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: C.wx,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                children: [
                    (0, i.jsx)("div", {
                        className: C.v0,
                        ref: _,
                        children: (0, i.jsx)(g.A, {
                            quest: t,
                            questContent: u.uF.RUNNING_ACTIVITY,
                            sourceQuestContent: u.uF.RUNNING_ACTIVITY,
                            className: C.Qf,
                            autoplay: d,
                        }),
                    }),
                    (0, i.jsx)(l.$nd, {
                        text: f.intl.formatToPlainString(f.t.EAYZAr, { questName: t.config.messages.questName }),
                        variant: "secondary",
                        size: "sm",
                    }),
                    (0, i.jsx)(l.EYj, { variant: "text-sm/normal", color: "text-muted", children: a }),
                ],
            }),
            null != p &&
                (0, i.jsx)(m.A, {
                    onDismiss: () => T(I.i.USER_DISMISS),
                    onCTAClick: () => T(I.i.TAKE_ACTION),
                    targetElementRef: _,
                }),
        ],
    });
}
function N(e) {
    let { applicationId: t } = e,
        n = (0, a.bG)([c.A], () => c.A.quests),
        s = (0, a.bG)([d.A], () => d.A.theme),
        o = r.useMemo(
            () => (0, _.jm)(n, t, !0).find((e) => !e.config.features.includes(E.Li.ACTIVITY_QUEST_AUTO_ENROLLMENT)),
            [n, t],
        );
    return null == o
        ? null
        : (0, i.jsx)(l.NPJ, {
              theme: s,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(p.R, {
                          questOrQuests: o,
                          questContent: u.uF.RUNNING_ACTIVITY,
                          sourceQuestContent: u.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(T, { quest: o }),
                      }),
                  }),
          });
}
