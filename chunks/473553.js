"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(311907),
    a = n(554146),
    o = n(397927),
    c = n(932001),
    d = n(625180),
    u = n(544028),
    h = n(859703),
    A = n(341915),
    m = n(759366),
    p = n(245853),
    g = n(714510),
    _ = n(890687),
    f = n(639214),
    x = n(801320),
    C = n(898375),
    E = n(713081),
    I = n(73473),
    N = n(646764),
    b = n(654487),
    S = n(49999),
    T = n(165610),
    v = n(985018),
    y = n(25327);
function j(e) {
    let { quest: t, applicationId: n } = e,
        r = (0, _.fc)(t),
        u = (0, g.mU)({
            quest: t,
            taskDetails: r,
            location: b.rE.QUEST_ACTIVITY_HEADER,
            questContent: A.uF.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: A.uF.RUNNING_ACTIVITY,
        }),
        [h, m] = s.useState(!1),
        p = s.useRef(null),
        f = s.useRef(null),
        [I, j] = (0, c.kn)([a.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: R, completedRatioDisplay: O, percentComplete: L } = (0, _.O9)(t, !0),
        M = s.useCallback(() => {
            d.A.updateFrameLayoutMode({ applicationId: n, layoutMode: T.y.PIP });
        }, [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: y.wx,
                onMouseEnter: () => m(!0),
                onMouseLeave: () => m(!1),
                children: [
                    (0, i.jsxs)(l.BJc, {
                        className: y.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: y.v0,
                                ref: p,
                                children: (0, i.jsx)(N.A, {
                                    quest: t,
                                    questContent: A.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: A.uF.RUNNING_ACTIVITY,
                                    className: y.Qf,
                                    autoplay: h,
                                }),
                            }),
                            (0, i.jsx)(o.YNO, {
                                targetElementRef: f,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, i.jsx)(C.A, {
                                        quest: t,
                                        questDescription: u,
                                        completedRatio: R,
                                        minimizeFrame: M,
                                        onClose: n,
                                    });
                                },
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        ref: f,
                                        ...e,
                                        children: (0, i.jsx)(l.$nd, {
                                            text: v.intl.formatToPlainString(v.t.EAYZAr, {
                                                questName: t.config.messages.questName,
                                            }),
                                            variant: "secondary",
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(l.BJc, {
                        className: y.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, i.jsxs)("div", {
                                className: y.L$,
                                children: [
                                    (0, i.jsx)(l.EYj, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: O,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: y.hr,
                                        children: [
                                            (0, i.jsx)("div", { className: y.SX, style: { width: `${L}%` } }),
                                            (0, i.jsxs)("div", {
                                                className: y.tu,
                                                style: { width: `${L}%` },
                                                children: [
                                                    (0, i.jsx)("div", { className: y.SZ }),
                                                    (0, i.jsx)("div", { className: y.SZ }),
                                                    (0, i.jsx)("div", { className: y.SZ }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(E.A, {
                                quest: t,
                                questContent: A.uF.QUEST_ACTIVITY_HEADER,
                                sourceQuestContent: A.uF.RUNNING_ACTIVITY,
                                size: "sm",
                            }),
                        ],
                    }),
                ],
            }),
            null != I &&
                (0, i.jsx)(x.A, {
                    onDismiss: () => j(S.i.USER_DISMISS),
                    onCTAClick: () => j(S.i.TAKE_ACTION),
                    targetElementRef: p,
                }),
        ],
    });
}
function R(e) {
    let { applicationId: t } = e,
        a = (0, r.bG)([h.A], () => h.A.quests),
        c = (0, r.bG)([u.A], () => u.A.theme),
        d = s.useMemo(() => (0, f.jm)(a, t, !0)[0], [a, t]),
        { enabled: g } = p.Ym.useConfig({ location: b.rE.QUEST_ACTIVITY_HEADER }),
        _ = (0, r.bG)([m.A], () => m.A.getState().autoEnroll),
        x = d?.id,
        C = (0, r.bG)([m.A], () => m.A.isDismissed(x), [x]);
    return (s.useEffect(() => {
        !g ||
            null == d ||
            d.userStatus?.enrolledAt != null ||
            _ ||
            C ||
            (0, o.mMO)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, i.jsx)(e, { ...t, quest: d });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [g, d, _, C]),
    null != d && g)
        ? (0, i.jsx)(l.NPJ, {
              theme: c,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(I.R, {
                          questOrQuests: d,
                          questContent: A.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: A.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(j, { quest: d, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
