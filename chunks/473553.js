n.d(t, { A: () => b });
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
    f = n(73473),
    C = n(646764),
    T = n(654487),
    N = n(49999),
    S = n(165610),
    x = n(985018),
    v = n(453561);
function y(e) {
    let { quest: t, applicationId: n } = e,
        a = (0, p.fc)(t),
        u = (0, m.mU)({
            quest: t,
            taskDetails: a,
            location: T.rE.QUEST_ACTIVITY_HEADER,
            questContent: h.uF.RUNNING_ACTIVITY,
            sourceQuestContent: h.uF.RUNNING_ACTIVITY,
        }),
        [A, _] = r.useState(!1),
        g = r.useRef(null),
        f = r.useRef(null),
        [y, b] = (0, d.kn)([s.M.QUEST_ACTIVITY_HEADER_INTRO], void 0, !0),
        { completedRatio: O, completedRatioDisplay: L, percentComplete: R } = (0, p.O9)(t, !0),
        P = r.useCallback(() => {
            c.A.updateFrameLayoutMode({ applicationId: n, layoutMode: S.y.PIP });
        }, [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: v.wx,
                onMouseEnter: () => _(!0),
                onMouseLeave: () => _(!1),
                children: [
                    (0, i.jsx)("div", {
                        className: v.v0,
                        ref: g,
                        children: (0, i.jsx)(C.A, {
                            quest: t,
                            questContent: h.uF.RUNNING_ACTIVITY,
                            sourceQuestContent: h.uF.RUNNING_ACTIVITY,
                            className: v.Qf,
                            autoplay: A,
                        }),
                    }),
                    (0, i.jsx)(o.YNO, {
                        targetElementRef: f,
                        renderPopout: (e) => {
                            let { closePopout: n } = e;
                            return (0, i.jsx)(I.A, {
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
                                ref: f,
                                ...e,
                                children: (0, i.jsx)(l.$nd, {
                                    text: x.intl.formatToPlainString(x.t.EAYZAr, {
                                        questName: t.config.messages.questName,
                                    }),
                                    variant: "secondary",
                                    size: "sm",
                                }),
                            }),
                    }),
                    (0, i.jsxs)("div", {
                        className: v.L$,
                        children: [
                            (0, i.jsx)(l.EYj, { variant: "text-sm/semibold", color: "text-strong", children: L }),
                            (0, i.jsxs)("div", {
                                className: v.hr,
                                children: [
                                    (0, i.jsx)("div", { className: v.SX, style: { width: `${R}%` } }),
                                    (0, i.jsxs)("div", {
                                        className: v.tu,
                                        style: { width: `${R}%` },
                                        children: [
                                            (0, i.jsx)("div", { className: v.SZ }),
                                            (0, i.jsx)("div", { className: v.SZ }),
                                            (0, i.jsx)("div", { className: v.SZ }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != y &&
                (0, i.jsx)(E.A, {
                    onDismiss: () => b(N.i.USER_DISMISS),
                    onCTAClick: () => b(N.i.TAKE_ACTION),
                    targetElementRef: g,
                }),
        ],
    });
}
function b(e) {
    let { applicationId: t } = e,
        n = (0, a.bG)([A.A], () => A.A.quests),
        s = (0, a.bG)([u.A], () => u.A.theme),
        o = r.useMemo(() => (0, g.jm)(n, t, !0)[0], [n, t]),
        { enabled: d } = _.Ym.useConfig({ location: T.rE.QUEST_ACTIVITY_HEADER });
    return null != o && d
        ? (0, i.jsx)(l.NPJ, {
              theme: s,
              children: (e) =>
                  (0, i.jsx)("div", {
                      className: e,
                      children: (0, i.jsx)(f.R, {
                          questOrQuests: o,
                          questContent: h.uF.RUNNING_ACTIVITY,
                          sourceQuestContent: h.uF.RUNNING_ACTIVITY,
                          overrideVisibility: !0,
                          children: () => (0, i.jsx)(y, { quest: o, applicationId: t }),
                      }),
                  }),
          })
        : null;
}
