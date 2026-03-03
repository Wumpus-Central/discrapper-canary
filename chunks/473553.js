n.d(t, { A: () => O });
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
    _ = n(245853),
    m = n(714510),
    p = n(890687),
    g = n(639214),
    E = n(801320),
    I = n(898375),
    f = n(713081),
    C = n(73473),
    T = n(646764),
    N = n(654487),
    S = n(49999),
    x = n(165610),
    v = n(985018),
    y = n(453561);
function b(e) {
    let { quest: t, applicationId: n } = e,
        a = (0, p.fc)(t),
        u = (0, m.mU)({
            quest: t,
            taskDetails: a,
            location: N.rE.QUEST_ACTIVITY_HEADER,
            questContent: h.uF.QUEST_ACTIVITY_HEADER,
            sourceQuestContent: h.uF.RUNNING_ACTIVITY,
        }),
        [A, _] = r.useState(!1),
        g = r.useRef(null),
        C = r.useRef(null),
        [b, O] = (0, d.kn)([s.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: L, completedRatioDisplay: R, percentComplete: P } = (0, p.O9)(t, !0),
        j = r.useCallback(() => {
            c.A.updateFrameLayoutMode({ applicationId: n, layoutMode: x.y.PIP });
        }, [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: y.wx,
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                children: [
                    (0, i.jsxs)(l.BJc, {
                        className: y.P9,
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, i.jsx)("div", {
                                className: y.v0,
                                ref: g,
                                children: (0, i.jsx)(T.A, {
                                    quest: t,
                                    questContent: h.uF.QUEST_ACTIVITY_HEADER,
                                    sourceQuestContent: h.uF.RUNNING_ACTIVITY,
                                    className: y.Qf,
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
                                        minimizeFrame: j,
                                        onClose: n,
                                    });
                                },
                                position: "bottom",
                                align: "center",
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        ref: C,
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
                                        children: R,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: y.hr,
                                        children: [
                                            (0, i.jsx)("div", { className: y.SX, style: { width: `${P}%` } }),
                                            (0, i.jsxs)("div", {
                                                className: y.tu,
                                                style: { width: `${P}%` },
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
                            (0, i.jsx)(f.A, {
                                quest: t,
                                questContent: h.uF.QUEST_ACTIVITY_HEADER,
                                sourceQuestContent: h.uF.RUNNING_ACTIVITY,
                            }),
                        ],
                    }),
                ],
            }),
            null != b &&
                (0, i.jsx)(E.A, {
                    onDismiss: () => O(S.i.USER_DISMISS),
                    onCTAClick: () => O(S.i.TAKE_ACTION),
                    targetElementRef: g,
                }),
        ],
    });
}
function O(e) {
    let { applicationId: t } = e,
        n = (0, a.bG)([A.A], () => A.A.quests),
        s = (0, a.bG)([u.A], () => u.A.theme),
        o = r.useMemo(() => (0, g.jm)(n, t, !0)[0], [n, t]),
        { enabled: d } = _.Ym.useConfig({ location: N.rE.QUEST_ACTIVITY_HEADER });
    return null != o && d
        ? (0, i.jsx)(l.NPJ, {
              theme: s,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(C.R, {
                          questOrQuests: o,
                          questContent: h.uF.QUEST_ACTIVITY_HEADER,
                          sourceQuestContent: h.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(b, { quest: o, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
