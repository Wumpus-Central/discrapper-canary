"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(554146),
    o = n(397927),
    c = n(932001),
    d = n(625180),
    u = n(544028),
    h = n(829219),
    A = n(859703),
    m = n(341915),
    g = n(759366),
    p = n(245853),
    _ = n(714510),
    f = n(890687),
    x = n(590202),
    C = n(639214),
    E = n(801320),
    I = n(898375),
    N = n(713081),
    b = n(73473),
    S = n(646764),
    T = n(654487),
    v = n(49999),
    y = n(165610),
    j = n(985018),
    R = n(25327);
function O(e) {
    let { quest: t, applicationId: n } = e,
        a = (0, f.fc)(t),
        u = (0, _.mU)({
            quest: t,
            taskDetails: a,
            location: T.rE.QUEST_ACTIVITY_HEADER,
            questContent: m.uF.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: m.uF.RUNNING_ACTIVITY,
        }),
        [A, g] = s.useState(!1),
        p = s.useRef(null),
        C = s.useRef(null),
        [b, O] = (0, c.kn)([r.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: L, completedRatioDisplay: M, percentComplete: D } = (0, f.O9)(t, !0),
        G = s.useCallback(() => {
            d.A.updateFrameLayoutMode({ applicationId: n, layoutMode: y.y.PIP });
        }, [n]),
        U = t.userStatus?.enrolledAt != null,
        P = s.useCallback(() => {
            (0, h.Oy)(t.id, {
                questContent: m.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: x.Cy.ACCEPT_QUEST,
                sourceQuestContent: m.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: R.wx,
                onMouseEnter: () => g(!0),
                onMouseLeave: () => g(!1),
                children: [
                    (0, i.jsxs)(l.BJc, {
                        className: R.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: R.v0,
                                ref: p,
                                children: (0, i.jsx)(S.A, {
                                    quest: t,
                                    questContent: m.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: m.uF.RUNNING_ACTIVITY,
                                    className: R.Qf,
                                    autoplay: A,
                                }),
                            }),
                            (0, i.jsx)(o.YNO, {
                                targetElementRef: C,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, i.jsx)(I.A, {
                                        quest: t,
                                        questDescription: u,
                                        completedRatio: L,
                                        minimizeFrame: G,
                                        onClose: n,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)(l.$nd, {
                                        text: j.intl.formatToPlainString(j.t.EAYZAr, {
                                            questName: t.config.messages.questName,
                                        }),
                                        variant: "secondary",
                                        size: "sm",
                                        buttonRef: C,
                                        ...e,
                                    }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(l.BJc, {
                        className: R.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, i.jsxs)("div", {
                                className: R.L$,
                                children: [
                                    (0, i.jsx)(l.EYj, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: M,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: R.hr,
                                        children: [
                                            (0, i.jsx)("div", { className: R.SX, style: { width: `${D}%` } }),
                                            (0, i.jsxs)("div", {
                                                className: R.tu,
                                                style: { width: `${D}%` },
                                                children: [
                                                    (0, i.jsx)("div", { className: R.SZ }),
                                                    (0, i.jsx)("div", { className: R.SZ }),
                                                    (0, i.jsx)("div", { className: R.SZ }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            U
                                ? (0, i.jsx)(N.A, {
                                      quest: t,
                                      questContent: m.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: m.uF.RUNNING_ACTIVITY,
                                      size: "sm",
                                  })
                                : (0, i.jsx)(l.$nd, {
                                      variant: "primary",
                                      text: j.intl.string(j.t.l7E81v),
                                      size: "sm",
                                      onClick: P,
                                  }),
                        ],
                    }),
                ],
            }),
            null != b &&
                (0, i.jsx)(E.A, {
                    onDismiss: () => O(v.i.USER_DISMISS),
                    onCTAClick: () => O(v.i.TAKE_ACTION),
                    targetElementRef: p,
                }),
        ],
    });
}
function L(e) {
    let { applicationId: t } = e,
        r = (0, a.bG)([A.A], () => A.A.quests),
        c = (0, a.bG)([u.A], () => u.A.theme),
        d = s.useMemo(() => (0, C.jm)(r, t, !0)[0], [r, t]),
        { enabled: h } = p.Ym.useConfig({ location: T.rE.QUEST_ACTIVITY_HEADER }),
        _ = (0, a.bG)([g.A], () => g.A.getState().autoEnroll),
        f = d?.id,
        x = (0, a.bG)([g.A], () => g.A.isDismissed(f), [f]);
    return (s.useEffect(() => {
        !h ||
            null == d ||
            d.userStatus?.enrolledAt != null ||
            _ ||
            x ||
            (0, o.mMO)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, i.jsx)(e, { ...t, quest: d });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [h, d, _, x]),
    null != d && h)
        ? (0, i.jsx)(l.NPJ, {
              theme: c,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(b.R, {
                          questOrQuests: d,
                          questContent: m.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: m.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(O, { quest: d, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
