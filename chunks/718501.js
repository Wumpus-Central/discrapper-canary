s.d(e, { default: () => Z });
var n = s(627968),
    i = s(64700),
    l = s(507107),
    a = s(31587),
    r = s(189213),
    o = s(815021),
    c = s(834730),
    d = s(935462),
    u = s(289873),
    m = s(73473),
    h = s(375708),
    E = s(443042);
function N(t) {
    let { onClose: e, transitionState: s, title: i, description: l } = t;
    return (0, n.jsx)(r.Modal, {
        size: "md",
        title: i,
        actions: [{ variant: "primary", text: h.intl.string(h.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: s,
        children: (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
    });
}
function C(t) {
    let {
        quest: e,
        questContent: s,
        sourceQuestContent: i,
        ariaLabel: l,
        transitionState: a,
        onClose: r,
        leftContent: c,
        rightContent: C,
        isContentLoading: x,
        contentHasError: g,
        errorTitle: A,
        errorDescription: _,
    } = t;
    return g
        ? (0, n.jsx)(N, {
              onClose: r,
              transitionState: a,
              title: A ?? h.intl.string(h.t["9cfXek"]),
              description: _ ?? h.intl.string(h.t.nYQyEg),
          })
        : (0, n.jsx)(m.R, {
              questOrQuests: e,
              questContent: s,
              sourceQuestContent: i,
              children: (t) =>
                  (0, n.jsxs)(d.EO, {
                      "data-migration-pending": !0,
                      transitionState: a,
                      size: d.rI.DYNAMIC,
                      className: E.yl,
                      "aria-label": l,
                      parentComponent: "QuestSplitModalBase",
                      children: [
                          (0, n.jsx)("div", {
                              className: E.b,
                              children: (0, n.jsx)(o.J, { size: "xs", variant: "overlay-secondary", onClick: r }),
                          }),
                          x ? (0, n.jsx)(u.y, { className: E.u1, type: u.y.Type.WANDERING_CUBES }) : null,
                          (0, n.jsx)("div", {
                              ref: t,
                              className: E.BM,
                              style: { visibility: x ? "hidden" : "visible" },
                              children: (0, n.jsxs)("div", {
                                  className: E.jE,
                                  children: [
                                      (0, n.jsx)("div", { className: E._H, children: c }),
                                      (0, n.jsx)("div", { className: E.xK, children: C }),
                                  ],
                              }),
                          }),
                      ],
                  }),
          });
}
var x = s(412703),
    g = s(928264),
    A = s(141628),
    _ = s(821609),
    I = s(534514),
    M = s(691885),
    j = s(975807),
    T = s(793574),
    f = s(123917),
    v = s(18437),
    p = s(590202),
    q = s(971649),
    y = s(901406),
    L = s(284846),
    G = s(976019),
    O = s(190107),
    k = s(233952);
function D(t) {
    let { quest: e, sourceQuestContent: s } = t,
        { hasAlreadyLinked: a, canStartAuthorization: r, startAuthorization: o, fetched: d } = (0, L.U)(e),
        u = (0, q.go)(),
        m = (0, v.Ut)(),
        E = i.useCallback(() => {
            (0, y.pu)(e, {
                content: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                ctaContent: p.Cy.OPEN_GAME_LINK,
                impressionId: u,
                sourceQuestContent: s,
            });
        }, [e, u, s]),
        [N, C] = i.useState(null),
        D = d && !a && r,
        S = D ? N : O.qh.IN_GAME,
        b = d && (null != S || a);
    return (0, n.jsxs)("div", {
        className: k.kL,
        children: [
            (0, n.jsx)(I.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: k.DD,
                children: h.intl.string(!0 === a ? h.t["2+opCy"] : h.t.dp0CUb),
            }),
            (0, n.jsx)(c.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: k.VA,
                children:
                    !0 === a
                        ? h.intl.format(h.t.X8hBDz, { gameTitle: e.config.messages.gameTitle, onClickGameTitle: E })
                        : h.intl.string(h.t.Z1T4zl),
            }),
            D &&
                (0, n.jsx)("div", {
                    className: k.oL,
                    children: (0, n.jsx)(M.l, {
                        label: h.intl.string(h.t.okJIPY),
                        hideLabel: !0,
                        placeholder: h.intl.string(h.t.okJIPY),
                        selectionMode: "single",
                        fullWidth: !0,
                        value: N ?? void 0,
                        onSelectionChange: (t) => {
                            t !== O.qh.IN_GAME && t !== O.qh.WEB
                                ? C(null)
                                : (C(t),
                                  m({
                                      questId: e.id,
                                      questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                      questContentCTA:
                                          t === O.qh.IN_GAME
                                              ? p.Cy.SELECT_IN_GAME_AUTH_METHOD
                                              : p.Cy.SELECT_WEB_AUTH_METHOD,
                                      sourceQuestContent: s,
                                  }));
                        },
                        options: [
                            {
                                id: O.qh.IN_GAME,
                                value: O.qh.IN_GAME,
                                label: h.intl.string(h.t["4PWzD7"]),
                                leading: A.A,
                            },
                            { id: O.qh.WEB, value: O.qh.WEB, label: h.intl.string(h.t.CM8LUl), leading: g.I },
                        ],
                    }),
                }),
            !0 === b &&
                (0, n.jsx)("div", {
                    className: k.X0,
                    children: (0, n.jsx)(G.A, {
                        quest: e,
                        hasAlreadyLinked: a,
                        onClickGameTitle: E,
                        selectedAuthMethod: S,
                    }),
                }),
            (0, n.jsx)("div", {
                className: k.WJ,
                children: (() => {
                    if (!d || !0 === a || null == S) return null;
                    if (S === O.qh.WEB)
                        return (0, n.jsx)(_.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: h.intl.string(h.t.T0zC77),
                            onClick: () => {
                                m({
                                    questId: e.id,
                                    questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                    questContentCTA: p.Cy.START_WEB_AUTHORIZATION,
                                    sourceQuestContent: s,
                                }),
                                    o({ analyticsLocations: [T.A.QUEST_IN_GAME_MODAL_CONNECT] });
                            },
                        });
                    let t = e.config.taskConfigV2.tasks[x.n.ACHIEVEMENT_IN_GAME];
                    if (null == t) return null;
                    let i = t.accountLinkInstructions;
                    return (0, n.jsx)(_.$, {
                        fullWidth: !0,
                        variant: "primary",
                        size: "md",
                        text: h.intl.string(h.t.KgYvrZ),
                        onClick: () =>
                            (0, f.h)({
                                href: i,
                                onConfirm: () => {
                                    m({
                                        questId: e.id,
                                        questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                        questContentCTA: p.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                        sourceQuestContent: s,
                                    }),
                                        (0, j.A)(i);
                                },
                            }),
                    });
                })(),
            }),
        ],
    });
}
var S = s(366010),
    b = s(736653),
    H = s(551875),
    W = s(651892),
    w = s(241124),
    U = s(918338),
    V = s(818348),
    z = s(237465);
function P(t) {
    let { quest: e } = t,
        s = (0, b.Ay)(),
        i = (0, S.M)(s) ? V.NJ.DARK : V.NJ.LIGHT,
        l = (0, H.tW)(e, H.fY.LOGO_TYPE, i);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(w.Sn, {
                id: "AchievementInGameQuestModal_hero",
                children: (t) =>
                    (0, n.jsx)(U.A, {
                        quest: e,
                        imageSize: { width: O.i$ * O.K, height: O.ls * O.K },
                        containerClassName: z.jF,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, n.jsx)("div", {
                className: z.Lt,
                children: (0, n.jsx)(w.Sn, {
                    id: "AchievementInGameQuestModal_logotype",
                    children: (t) =>
                        (0, n.jsx)("img", {
                            ref: t,
                            className: z.a$,
                            alt: h.intl.formatToPlainString(h.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: l.url,
                        }),
                }),
            }),
        ],
    });
}
function Q(t) {
    let { quest: e } = t,
        s = (0, b.Ay)(),
        i = (0, S.M)(s) ? V.NJ.DARK : V.NJ.LIGHT,
        l = e.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME;
    return (0, n.jsxs)("div", {
        className: z.Th,
        children: [
            (0, n.jsx)(w.Sn, {
                id: "AchievementInGameQuestModal_gameTile",
                children: (t) =>
                    (0, n.jsx)("img", {
                        ref: t,
                        className: z.rw,
                        alt: h.intl.formatToPlainString(h.t.rtm15P, { name: e.config.messages.gameTitle }),
                        src: (0, H.tW)(e, H.fY.GAME_TILE, i).url,
                    }),
            }),
            (0, n.jsxs)("div", {
                className: z.Ly,
                children: [
                    (0, n.jsx)(I.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: z.fx,
                        children: e.config.messages.gameTitle,
                    }),
                    (0, n.jsx)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: l?.messages.taskTitle ?? "",
                    }),
                ],
            }),
        ],
    });
}
function B(t) {
    let { quest: e, sourceQuestContent: s } = t,
        i = (0, q.go)();
    return (0, n.jsx)(_.$, {
        fullWidth: !0,
        variant: "secondary",
        size: "md",
        text: (0, W.wr)(e),
        onClick: () =>
            (0, y.pu)(e, {
                content: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                ctaContent: p.Cy.OPEN_GAME_LINK,
                impressionId: i,
                sourceQuestContent: s,
            }),
    });
}
function R(t) {
    let { quest: e, sourceQuestContent: s } = t;
    return (0, n.jsxs)("div", {
        className: z.kL,
        children: [
            (0, n.jsxs)(w.jY, {
                source: O.rE.INGAME_CONNECTION_MODAL,
                questId: e.id,
                isPreview: e.preview,
                children: [(0, n.jsx)(P, { quest: e }), (0, n.jsx)(Q, { quest: e })],
            }),
            (0, n.jsx)("div", { className: z.z1, children: (0, n.jsx)(B, { quest: e, sourceQuestContent: s }) }),
        ],
    });
}
let Z = function (t) {
    let { initialQuest: e, sourceQuestContent: s, transitionState: i, onClose: r } = t,
        o = (0, a.C5)(e.id) ?? e;
    return (0, n.jsx)(C, {
        quest: o,
        questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
        sourceQuestContent: s,
        ariaLabel: h.intl.string(h.t.dp0CUb),
        transitionState: i,
        onClose: r,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, n.jsx)(D, { quest: o, sourceQuestContent: s }),
        rightContent: (0, n.jsx)(R, { quest: o, sourceQuestContent: s }),
    });
};
