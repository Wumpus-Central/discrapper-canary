n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(554146),
    o = n(397927),
    d = n(932001),
    c = n(625180),
    u = n(544028),
    A = n(859703),
    h = n(341915),
    _ = n(714510),
    m = n(890687),
    p = n(639214),
    g = n(801320),
    E = n(898375),
    I = n(73473),
    f = n(646764),
    C = n(654487),
    T = n(49999),
    N = n(165610),
    S = n(985018),
    x = n(453561);
function v(e) {
    let { quest: t, applicationId: n } = e,
        a = (0, m.fc)(t),
        u = (0, _.mU)({
            quest: t,
            taskDetails: a,
            location: C.rE.QUEST_ACTIVITY_HEADER,
            questContent: h.uF.RUNNING_ACTIVITY,
            sourceQuestContent: h.uF.RUNNING_ACTIVITY,
        }),
        [A, p] = r.useState(!1),
        I = r.useRef(null),
        v = r.useRef(null),
        [y, b] = (0, d.kn)([s.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: O, completedRatioDisplay: L, percentComplete: R } = (0, m.O9)(t, !0),
        P = r.useCallback(() => {
            c.A.updateFrameLayoutMode({ applicationId: n, layoutMode: N.y.PIP });
        }, [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: x.wx,
                onMouseEnter: () => p(!0),
                onMouseLeave: () => p(!1),
                children: [
                    (0, i.jsx)("div", {
                        className: x.v0,
                        ref: I,
                        children: (0, i.jsx)(f.A, {
                            quest: t,
                            questContent: h.uF.RUNNING_ACTIVITY,
                            sourceQuestContent: h.uF.RUNNING_ACTIVITY,
                            className: x.Qf,
                            autoplay: A,
                        }),
                    }),
                    (0, i.jsx)(o.YNO, {
                        targetElementRef: v,
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, i.jsx)(E.A, {
                                quest: t,
                                questDescription: u,
                                completedRatio: O,
                                minimizeFrame: P,
                                onClose: n,
                            });
                        },
                        position: "bottom",
                        align: "center",
                        children: (e) =>
                            (0, i.jsx)("div", {
                                ref: v,
                                ...e,
                                children: (0, i.jsx)(l.$nd, {
                                    text: S.intl.formatToPlainString(S.t.EAYZAr, {
                                        questName: t.config.messages.questName,
                                    }),
                                    variant: "secondary",
                                    size: "sm",
                                }),
                            }),
                    }),
                    (0, i.jsxs)("div", {
                        className: x.L$,
                        children: [
                            (0, i.jsx)(l.EYj, { variant: "text-sm/semibold", color: "text-strong", children: L }),
                            (0, i.jsxs)("div", {
                                className: x.hr,
                                children: [
                                    (0, i.jsx)("div", { className: x.SX, style: { width: `${R}%` } }),
                                    (0, i.jsxs)("div", {
                                        className: x.tu,
                                        style: { width: `${R}%` },
                                        children: [
                                            (0, i.jsx)("div", { className: x.SZ }),
                                            (0, i.jsx)("div", { className: x.SZ }),
                                            (0, i.jsx)("div", { className: x.SZ }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != y &&
                (0, i.jsx)(g.A, {
                    onDismiss: () => b(T.i.USER_DISMISS),
                    onCTAClick: () => b(T.i.TAKE_ACTION),
                    targetElementRef: I,
                }),
        ],
    });
}
function y(e) {
    let { applicationId: t } = e,
        n = (0, a.bG)([A.A], () => A.A.quests),
        s = (0, a.bG)([u.A], () => u.A.theme),
        o = r.useMemo(
            () => (0, p.jm)(n, t, !0).find((e) => !e.config.features.includes(C.Li.ACTIVITY_QUEST_AUTO_ENROLLMENT)),
            [n, t],
        );
    return null == o
        ? null
        : (0, i.jsx)(l.NPJ, {
              theme: s,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(I.R, {
                          questOrQuests: o,
                          questContent: h.uF.RUNNING_ACTIVITY,
                          sourceQuestContent: h.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(v, { quest: o, applicationId: t }),
                      }),
                  }),
          });
}
