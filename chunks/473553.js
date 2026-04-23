n.d(t, { A: () => U });
var i = n(627968),
    l = n(64700),
    s = n(331322),
    a = n(821609),
    r = n(834730),
    o = n(43990),
    d = n(311907),
    c = n(554146),
    u = n(265872),
    h = n(192308),
    A = n(932001),
    _ = n(625180),
    m = n(544028),
    g = n(829219),
    p = n(859703),
    f = n(341915),
    E = n(759366),
    x = n(245853),
    I = n(714510),
    C = n(890687),
    b = n(590202),
    N = n(639214),
    S = n(801320),
    v = n(898375),
    T = n(713081),
    y = n(73473),
    j = n(646764),
    R = n(654487),
    L = n(49999),
    O = n(165610),
    G = n(985018),
    M = n(200254);
function D(e) {
    let { quest: t, applicationId: n } = e,
        o = (0, C.fc)(t),
        d = (0, I.mU)({
            quest: t,
            taskDetails: o,
            location: R.rE.QUEST_ACTIVITY_HEADER,
            questContent: f.uF.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: f.uF.RUNNING_ACTIVITY,
        }),
        [h, m] = l.useState(!1),
        p = l.useRef(null),
        E = l.useRef(null),
        [x, N] = (0, A.kn)([c.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: y, completedRatioDisplay: D, percentComplete: U } = (0, C.O9)(t, !0),
        P = l.useCallback(() => {
            _.A.updateFrameLayoutMode({ applicationId: n, layoutMode: O.y.PIP });
        }, [n]),
        w = t.userStatus?.enrolledAt != null,
        k = l.useCallback(() => {
            (0, g.Oy)(t.id, {
                questContent: f.uF.QUEST_ACTIVITY_HEADER,
                questContentCTA: b.Cy.ACCEPT_QUEST,
                sourceQuestContent: f.uF.RUNNING_ACTIVITY,
            });
        }, [t.id]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: M.wx,
                onMouseEnter: () => m(!0),
                onMouseLeave: () => m(!1),
                children: [
                    (0, i.jsxs)(s.B, {
                        className: M.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: M.v0,
                                ref: p,
                                children: (0, i.jsx)(j.A, {
                                    quest: t,
                                    questContent: f.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: f.uF.RUNNING_ACTIVITY,
                                    className: M.Qf,
                                    autoplay: h,
                                }),
                            }),
                            (0, i.jsx)(u.Y, {
                                targetElementRef: E,
                                renderPopout: (e) => {
                                    let { closePopout: n } = e;
                                    return (0, i.jsx)(v.A, {
                                        quest: t,
                                        questDescription: d,
                                        completedRatio: y,
                                        minimizeFrame: P,
                                        onClose: n,
                                    });
                                },
                                popoutKey: "quest-activity-header-popout",
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)(a.$, {
                                        text: G.intl.formatToPlainString(G.t.EAYZAr, {
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
                    (0, i.jsxs)(s.B, {
                        className: M.Ek,
                        direction: "horizontal",
                        align: "center",
                        gap: 16,
                        children: [
                            (0, i.jsxs)("div", {
                                className: M.L$,
                                children: [
                                    (0, i.jsx)(r.E, { variant: "text-sm/semibold", color: "text-strong", children: D }),
                                    (0, i.jsxs)("div", {
                                        className: M.hr,
                                        children: [
                                            (0, i.jsx)("div", { className: M.SX, style: { width: `${U}%` } }),
                                            (0, i.jsxs)("div", {
                                                className: M.tu,
                                                style: { width: `${U}%` },
                                                children: [
                                                    (0, i.jsx)("div", { className: M.SZ }),
                                                    (0, i.jsx)("div", { className: M.SZ }),
                                                    (0, i.jsx)("div", { className: M.SZ }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            w
                                ? (0, i.jsx)(T.A, {
                                      quest: t,
                                      questContent: f.uF.QUEST_ACTIVITY_HEADER,
                                      sourceQuestContent: f.uF.RUNNING_ACTIVITY,
                                      size: "sm",
                                  })
                                : (0, i.jsx)(a.$, {
                                      variant: "primary",
                                      text: G.intl.string(G.t.l7E81v),
                                      size: "sm",
                                      onClick: k,
                                  }),
                        ],
                    }),
                ],
            }),
            null != x &&
                w &&
                (0, i.jsx)(S.A, {
                    onDismiss: () => N(L.i.USER_DISMISS),
                    onCTAClick: () => N(L.i.TAKE_ACTION),
                    targetElementRef: p,
                }),
        ],
    });
}
function U(e) {
    let { applicationId: t } = e,
        s = (0, d.bG)([p.A], () => p.A.quests),
        a = (0, d.bG)([m.A], () => m.A.theme),
        r = l.useMemo(() => (0, N.jm)(s, t, !0)[0], [s, t]),
        { enabled: c, showSkipButton: u } = x.Ym.useConfig({ location: R.rE.QUEST_ACTIVITY_HEADER }),
        A = (0, d.bG)([E.A], () => E.A.getState().autoEnroll),
        _ = r?.id,
        g = (0, d.bG)([E.A], () => E.A.isDismissed(_), [_]);
    return (l.useEffect(() => {
        !c ||
            null == r ||
            r.userStatus?.enrolledAt != null ||
            A ||
            g ||
            (0, h.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("85986").then(n.bind(n, 113273));
                    return (t) => (0, i.jsx)(e, { ...t, quest: r, showSkipButton: u });
                },
                { modalKey: "quest-activity-unenrolled-modal" },
            );
    }, [c, r, A, g, u]),
    null != r && c)
        ? (0, i.jsx)(o.N, {
              theme: a,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(y.R, {
                          questOrQuests: r,
                          questContent: f.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: f.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(D, { quest: r, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
