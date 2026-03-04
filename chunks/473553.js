"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(554146),
    o = n(397927),
    c = n(932001),
    d = n(625180),
    u = n(544028),
    h = n(859703),
    A = n(341915),
    p = n(759366),
    m = n(245853),
    g = n(714510),
    _ = n(890687),
    f = n(639214),
    x = n(801320),
    C = n(898375),
    E = n(713081),
    I = n(73473),
    N = n(646764),
    S = n(654487),
    b = n(49999),
    T = n(165610),
    v = n(985018),
    y = n(453561);
function j(e) {
    let { quest: t, applicationId: n } = e,
        a = (0, _.fc)(t),
        u = (0, g.mU)({
            quest: t,
            taskDetails: a,
            location: S.rE.QUEST_ACTIVITY_HEADER,
            questContent: A.uF.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: A.uF.RUNNING_ACTIVITY,
        }),
        [h, p] = s.useState(!1),
        m = s.useRef(null),
        f = s.useRef(null),
        [I, j] = (0, c.kn)([r.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: R, completedRatioDisplay: O, percentComplete: L } = (0, _.O9)(t, !0),
        M = s.useCallback(() => {
            d.A.updateFrameLayoutMode({ applicationId: n, layoutMode: T.y.PIP });
        }, [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: y.wx,
                onMouseEnter: () => p(!0),
                onMouseLeave: () => p(!1),
                children: [
                    (0, i.jsxs)(l.BJc, {
                        className: y.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: y.v0,
                                ref: m,
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
                            }),
                        ],
                    }),
                ],
            }),
            null != I &&
                (0, i.jsx)(x.A, {
                    onDismiss: () => j(b.i.USER_DISMISS),
                    onCTAClick: () => j(b.i.TAKE_ACTION),
                    targetElementRef: m,
                }),
        ],
    });
}
function R(e) {
    let { applicationId: t } = e,
        r = (0, a.bG)([h.A], () => h.A.quests),
        c = (0, a.bG)([u.A], () => u.A.theme),
        d = s.useMemo(() => (0, f.jm)(r, t, !0)[0], [r, t]),
        { enabled: g } = m.Ym.useConfig({ location: S.rE.QUEST_ACTIVITY_HEADER }),
        _ = (0, a.bG)([p.A], () => p.A.getState().autoEnroll),
        x = d?.id,
        C = (0, a.bG)([p.A], () => p.A.isDismissed(x), [x]);
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
