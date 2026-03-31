n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(311907),
    r = n(554146),
    o = n(397927),
    c = n(932001),
    d = n(625180),
    u = n(544028),
    h = n(829219),
    A = n(859703),
    _ = n(341915),
    m = n(759366),
    g = n(245853),
    p = n(714510),
    f = n(890687),
    x = n(590202),
    E = n(639214),
    I = n(801320),
    C = n(898375),
    N = n(713081),
    T = n(73473),
    S = n(646764),
    b = n(654487),
    y = n(49999),
    v = n(165610),
    j = n(985018),
    R = n(528622);
function O(e) {
    let { quest: t, applicationId: n } = e,
        a = (0, f.fc)(t),
        u = (0, p.mU)({
            quest: t,
            taskDetails: a,
            location: b.rE.QUEST_ACTIVITY_HEADER,
            questContent: _.uF.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: _.uF.RUNNING_ACTIVITY,
        }),
        [A, m] = l.useState(!1),
        g = l.useRef(null),
        E = l.useRef(null),
        [T, O] = (0, c.kn)([r.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: L, completedRatioDisplay: M, percentComplete: D } = (0, f.O9)(t, !0),
        U = l.useCallback(() => {
            d.A.updateFrameLayoutMode({ applicationId: n, layoutMode: v.y.PIP });
        }, [n]),
        G = t.userStatus?.enrolledAt != null,
        P = l.useCallback(() => {
            (0, h.Oy)(t.id, {
                questContent: _.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: x.Cy.ACCEPT_QUEST,
                sourceQuestContent: _.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: R.wx,
                onMouseEnter: () => m(!0),
                onMouseLeave: () => m(!1),
                children: [
                    (0, i.jsxs)(s.BJc, {
                        className: R.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: R.v0,
                                ref: g,
                                children: (0, i.jsx)(S.A, {
                                    quest: t,
                                    questContent: _.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: _.uF.RUNNING_ACTIVITY,
                                    className: R.Qf,
                                    autoplay: A,
                                }),
                            }),
                            (0, i.jsx)(o.YNO, {
                                targetElementRef: E,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, i.jsx)(C.A, {
                                        quest: t,
                                        questDescription: u,
                                        completedRatio: L,
                                        minimizeFrame: U,
                                        onClose: n,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)(s.$nd, {
                                        text: j.intl.formatToPlainString(j.t.EAYZAr, {
                                            questName: t.config.messages.questName,
                                        }),
                                        variant: "secondary",
                                        size: "sm",
                                        buttonRef: E,
                                        ...e,
                                    }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(s.BJc, {
                        className: R.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, i.jsxs)("div", {
                                className: R.L$,
                                children: [
                                    (0, i.jsx)(s.EYj, {
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
                            G
                                ? (0, i.jsx)(N.A, {
                                      quest: t,
                                      questContent: _.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: _.uF.RUNNING_ACTIVITY,
                                      size: "sm",
                                  })
                                : (0, i.jsx)(s.$nd, {
                                      variant: "primary",
                                      text: j.intl.string(j.t.l7E81v),
                                      size: "sm",
                                      onClick: P,
                                  }),
                        ],
                    }),
                ],
            }),
            null != T &&
                G &&
                (0, i.jsx)(I.A, {
                    onDismiss: () => O(y.i.USER_DISMISS),
                    onCTAClick: () => O(y.i.TAKE_ACTION),
                    targetElementRef: g,
                }),
        ],
    });
}
function L(e) {
    let { applicationId: t } = e,
        r = (0, a.bG)([A.A], () => A.A.quests),
        c = (0, a.bG)([u.A], () => u.A.theme),
        d = l.useMemo(() => (0, E.jm)(r, t, !0)[0], [r, t]),
        { enabled: h, showSkipButton: p } = g.Ym.useConfig({ location: b.rE.QUEST_ACTIVITY_HEADER }),
        f = (0, a.bG)([m.A], () => m.A.getState().autoEnroll),
        x = d?.id,
        I = (0, a.bG)([m.A], () => m.A.isDismissed(x), [x]);
    return (l.useEffect(() => {
        !h ||
            null == d ||
            d.userStatus?.enrolledAt != null ||
            f ||
            I ||
            (0, o.mMO)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, i.jsx)(e, { ...t, quest: d, showSkipButton: p });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [h, d, f, I, p]),
    null != d && h)
        ? (0, i.jsx)(s.NPJ, {
              theme: c,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(T.R, {
                          questOrQuests: d,
                          questContent: _.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: _.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(O, { quest: d, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
