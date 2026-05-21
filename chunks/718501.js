s.d(e, { default: () => Z });
var n = s(627968),
    i = s(64700),
    l = s(507107),
    a = s(31587),
    r = s(189213),
    o = s(815021),
    c = s(834730),
    d = s(289873),
    u = s(935462),
    m = s(231723),
    h = s(73473),
    E = s(375708),
    N = s(443042);
function C(t) {
    let { onClose: e, transitionState: s, title: i, description: l } = t;
    return (0, n.jsx)(r.Modal, {
        size: "md",
        title: i,
        actions: [{ variant: "primary", text: E.intl.string(E.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: s,
        children: (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
    });
}
function x(t) {
    let {
        quest: e,
        questContent: s,
        sourceQuestContent: i,
        transitionState: l,
        onClose: a,
        leftContent: r,
        rightContent: c,
        isContentLoading: x,
        contentHasError: g,
        errorTitle: A,
        errorDescription: _,
    } = t;
    return g
        ? (0, n.jsx)(C, {
              onClose: a,
              transitionState: l,
              title: A ?? E.intl.string(E.t["9cfXek"]),
              description: _ ?? E.intl.string(E.t.nYQyEg),
          })
        : (0, n.jsx)(h.R, {
              questOrQuests: e,
              questContent: s,
              sourceQuestContent: i,
              children: (t) =>
                  (0, n.jsxs)(n.Fragment, {
                      children: [
                          x ? (0, n.jsx)(d.y, { className: N.u1, type: d.y.Type.WANDERING_CUBES }) : null,
                          (0, n.jsx)("div", {
                              ref: t,
                              style: { visibility: x ? "hidden" : "visible" },
                              children: (0, n.jsxs)(u.EO, {
                                  "data-migration-pending": !0,
                                  transitionState: x ? m.ip.HIDDEN : l,
                                  size: u.rI.DYNAMIC,
                                  className: N.yl,
                                  parentComponent: "QuestSplitModalBase",
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: N.b,
                                          children: (0, n.jsx)(o.J, {
                                              size: "xs",
                                              variant: "overlay-secondary",
                                              onClick: a,
                                          }),
                                      }),
                                      (0, n.jsxs)("div", {
                                          className: N.jE,
                                          children: [
                                              (0, n.jsx)("div", { className: N._H, children: r }),
                                              (0, n.jsx)("div", { className: N.xK, children: c }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
          });
}
var g = s(412703),
    A = s(928264),
    _ = s(141628),
    I = s(821609),
    j = s(534514),
    M = s(691885),
    T = s(975807),
    f = s(793574),
    v = s(123917),
    p = s(946080),
    q = s(18437),
    y = s(590202),
    L = s(971649),
    G = s(901406),
    O = s(976019),
    k = s(190107),
    D = s(233952);
function S(t) {
    let { quest: e, sourceQuestContent: s } = t,
        { hasAlreadyLinked: a, canStartAuthorization: r, startAuthorization: o, fetched: d } = (0, p.U)(e),
        u = (0, L.go)(),
        m = (0, q.Ut)(),
        h = i.useCallback(() => {
            (0, G.pu)(e, {
                content: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                ctaContent: y.Cy.OPEN_GAME_LINK,
                impressionId: u,
                sourceQuestContent: s,
            });
        }, [e, u, s]),
        [N, C] = i.useState(null),
        x = d && !a && r,
        S = x ? N : k.qh.IN_GAME,
        H = d && (null != S || a);
    return (0, n.jsxs)("div", {
        className: D.kL,
        children: [
            (0, n.jsx)(j.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: D.DD,
                children: E.intl.string(!0 === a ? E.t["2+opCy"] : E.t.dp0CUb),
            }),
            (0, n.jsx)(c.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: D.VA,
                children:
                    !0 === a
                        ? E.intl.format(E.t.X8hBDz, { gameTitle: e.config.messages.gameTitle, onClickGameTitle: h })
                        : E.intl.string(E.t.Z1T4zl),
            }),
            x &&
                (0, n.jsx)("div", {
                    className: D.oL,
                    children: (0, n.jsx)(M.l, {
                        label: E.intl.string(E.t.okJIPY),
                        hideLabel: !0,
                        placeholder: E.intl.string(E.t.okJIPY),
                        selectionMode: "single",
                        fullWidth: !0,
                        value: N ?? void 0,
                        onSelectionChange: (t) => {
                            t !== k.qh.IN_GAME && t !== k.qh.WEB
                                ? C(null)
                                : (C(t),
                                  m({
                                      questId: e.id,
                                      questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                      questContentCTA:
                                          t === k.qh.IN_GAME
                                              ? y.Cy.SELECT_IN_GAME_AUTH_METHOD
                                              : y.Cy.SELECT_WEB_AUTH_METHOD,
                                      sourceQuestContent: s,
                                  }));
                        },
                        options: [
                            {
                                id: k.qh.IN_GAME,
                                value: k.qh.IN_GAME,
                                label: E.intl.string(E.t["4PWzD7"]),
                                leading: _.A,
                            },
                            { id: k.qh.WEB, value: k.qh.WEB, label: E.intl.string(E.t.CM8LUl), leading: A.I },
                        ],
                    }),
                }),
            !0 === H &&
                (0, n.jsx)("div", {
                    className: D.X0,
                    children: (0, n.jsx)(O.A, {
                        quest: e,
                        hasAlreadyLinked: a,
                        onClickGameTitle: h,
                        selectedAuthMethod: S,
                    }),
                }),
            (0, n.jsx)("div", {
                className: D.WJ,
                children: (() => {
                    if (!0 === a || null == S) return null;
                    if (S === k.qh.WEB)
                        return (0, n.jsx)(I.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: E.intl.string(E.t.T0zC77),
                            onClick: () => {
                                m({
                                    questId: e.id,
                                    questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                    questContentCTA: y.Cy.START_WEB_AUTHORIZATION,
                                    sourceQuestContent: s,
                                }),
                                    o({ analyticsLocations: [f.A.QUEST_IN_GAME_MODAL_CONNECT] });
                            },
                        });
                    let t = e.config.taskConfigV2.tasks[g.n.ACHIEVEMENT_IN_GAME];
                    if (null == t) return null;
                    let i = t.accountLinkInstructions;
                    return (0, n.jsx)(I.$, {
                        fullWidth: !0,
                        variant: "primary",
                        size: "md",
                        text: E.intl.string(E.t.KgYvrZ),
                        onClick: () =>
                            (0, v.h)({
                                href: i,
                                onConfirm: () => {
                                    m({
                                        questId: e.id,
                                        questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                        questContentCTA: y.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                        sourceQuestContent: s,
                                    }),
                                        (0, T.A)(i);
                                },
                            }),
                    });
                })(),
            }),
        ],
    });
}
var H = s(366010),
    b = s(736653),
    W = s(551875),
    w = s(651892),
    V = s(241124),
    z = s(918338),
    P = s(818348),
    Q = s(237465);
function U(t) {
    let { quest: e } = t,
        s = (0, b.Ay)(),
        i = (0, H.M)(s) ? P.NJ.DARK : P.NJ.LIGHT,
        l = (0, W.tW)(e, W.fY.LOGO_TYPE, i);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(V.Sn, {
                id: "AchievementInGameQuestModal_hero",
                children: (t) =>
                    (0, n.jsx)(z.A, {
                        quest: e,
                        imageSize: { width: k.i$ * k.K, height: k.ls * k.K },
                        containerClassName: Q.jF,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, n.jsx)("div", {
                className: Q.Lt,
                children: (0, n.jsx)(V.Sn, {
                    id: "AchievementInGameQuestModal_logotype",
                    children: (t) =>
                        (0, n.jsx)("img", {
                            ref: t,
                            className: Q.a$,
                            alt: E.intl.formatToPlainString(E.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: l.url,
                        }),
                }),
            }),
        ],
    });
}
function R(t) {
    let { quest: e } = t,
        s = (0, b.Ay)(),
        i = (0, H.M)(s) ? P.NJ.DARK : P.NJ.LIGHT,
        l = e.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME;
    return (0, n.jsxs)("div", {
        className: Q.Th,
        children: [
            (0, n.jsx)(V.Sn, {
                id: "AchievementInGameQuestModal_gameTile",
                children: (t) =>
                    (0, n.jsx)("img", {
                        ref: t,
                        className: Q.rw,
                        alt: E.intl.formatToPlainString(E.t.rtm15P, { name: e.config.messages.gameTitle }),
                        src: (0, W.tW)(e, W.fY.GAME_TILE, i).url,
                    }),
            }),
            (0, n.jsxs)("div", {
                className: Q.Ly,
                children: [
                    (0, n.jsx)(j.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: Q.fx,
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
        i = (0, L.go)();
    return (0, n.jsx)(I.$, {
        fullWidth: !0,
        variant: "secondary",
        size: "md",
        text: (0, w.wr)(e),
        onClick: () =>
            (0, G.pu)(e, {
                content: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                ctaContent: y.Cy.OPEN_GAME_LINK,
                impressionId: i,
                sourceQuestContent: s,
            }),
    });
}
function F(t) {
    let { quest: e, sourceQuestContent: s } = t;
    return (0, n.jsxs)("div", {
        className: Q.kL,
        children: [
            (0, n.jsxs)(V.jY, {
                source: k.rE.INGAME_CONNECTION_MODAL,
                questId: e.id,
                isPreview: e.preview,
                children: [(0, n.jsx)(U, { quest: e }), (0, n.jsx)(R, { quest: e })],
            }),
            (0, n.jsx)("div", { className: Q.z1, children: (0, n.jsx)(B, { quest: e, sourceQuestContent: s }) }),
        ],
    });
}
let Z = function (t) {
    let { initialQuest: e, sourceQuestContent: s, transitionState: i, onClose: r } = t,
        o = (0, a.C5)(e.id) ?? e;
    return (0, n.jsx)(x, {
        quest: o,
        questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
        sourceQuestContent: s,
        transitionState: i,
        onClose: r,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, n.jsx)(S, { quest: o, sourceQuestContent: s }),
        rightContent: (0, n.jsx)(F, { quest: o, sourceQuestContent: s }),
    });
};
