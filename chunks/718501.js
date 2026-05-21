s.d(t, { default: () => J });
var i = s(627968),
    n = s(64700),
    l = s(507107),
    a = s(31587),
    r = s(189213),
    c = s(815021),
    o = s(834730),
    d = s(289873),
    u = s(935462),
    m = s(231723),
    h = s(73473),
    x = s(375708),
    g = s(443042);
function E(e) {
    let { onClose: t, transitionState: s, title: n, description: l } = e;
    return (0, i.jsx)(r.Modal, {
        size: "md",
        title: n,
        actions: [{ variant: "primary", text: x.intl.string(x.t.cpT0Cq), onClick: t }],
        onClose: t,
        transitionState: s,
        children: (0, i.jsx)(o.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
    });
}
function N(e) {
    let {
        quest: t,
        questContent: s,
        sourceQuestContent: n,
        transitionState: l,
        onClose: a,
        leftContent: r,
        rightContent: o,
        isContentLoading: N,
        contentHasError: j,
        errorTitle: C,
        errorDescription: A,
    } = e;
    return j
        ? (0, i.jsx)(E, {
              onClose: a,
              transitionState: l,
              title: C ?? x.intl.string(x.t["9cfXek"]),
              description: A ?? x.intl.string(x.t.nYQyEg),
          })
        : (0, i.jsx)(h.R, {
              questOrQuests: t,
              questContent: s,
              sourceQuestContent: n,
              children: (e) =>
                  (0, i.jsxs)(i.Fragment, {
                      children: [
                          N ? (0, i.jsx)(d.y, { className: g.u1, type: d.y.Type.WANDERING_CUBES }) : null,
                          (0, i.jsx)("div", {
                              ref: e,
                              style: { visibility: N ? "hidden" : "visible" },
                              children: (0, i.jsxs)(u.EO, {
                                  "data-migration-pending": !0,
                                  transitionState: N ? m.ip.HIDDEN : l,
                                  size: u.rI.DYNAMIC,
                                  className: g.yl,
                                  parentComponent: "QuestSplitModalBase",
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: g.b,
                                          children: (0, i.jsx)(c.J, {
                                              size: "xs",
                                              variant: "overlay-secondary",
                                              onClick: a,
                                          }),
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: g.jE,
                                          children: [
                                              (0, i.jsx)("div", { className: g._H, children: r }),
                                              (0, i.jsx)("div", { className: g.xK, children: o }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
          });
}
var j = s(928264),
    C = s(141628),
    A = s(821609),
    v = s(534514),
    _ = s(691885),
    M = s(793574),
    f = s(946080),
    I = s(18437),
    p = s(590202),
    T = s(971649),
    y = s(901406),
    q = s(976019),
    G = s(190107),
    L = s(233952);
function D(e) {
    let { quest: t, sourceQuestContent: s } = e,
        { hasAlreadyLinked: a, canStartAuthorization: r, startAuthorization: c, fetched: d } = (0, f.U)(t),
        u = (0, T.go)(),
        m = (0, I.Ut)(),
        h = n.useCallback(() => {
            (0, y.pu)(t, {
                content: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                ctaContent: p.Cy.OPEN_GAME_LINK,
                impressionId: u,
                sourceQuestContent: s,
            });
        }, [t, u, s]),
        [g, E] = n.useState(null),
        N = d && !a && r,
        D = N ? g : G.qh.IN_GAME,
        k = d && (null != D || a);
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [
            (0, i.jsx)(v.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: L.DD,
                children: x.intl.string(x.t.dp0CUb),
            }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: L.VA,
                children:
                    !0 === a
                        ? x.intl.format(x.t.X8hBDz, { gameTitle: t.config.messages.gameTitle, onClickGameTitle: h })
                        : x.intl.string(x.t.Z1T4zl),
            }),
            N &&
                (0, i.jsx)("div", {
                    className: L.oL,
                    children: (0, i.jsx)(_.l, {
                        label: x.intl.string(x.t.okJIPY),
                        hideLabel: !0,
                        placeholder: x.intl.string(x.t.okJIPY),
                        selectionMode: "single",
                        fullWidth: !0,
                        value: g ?? void 0,
                        onSelectionChange: (e) => {
                            e !== G.qh.IN_GAME && e !== G.qh.WEB
                                ? E(null)
                                : (E(e),
                                  m({
                                      questId: t.id,
                                      questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                      questContentCTA:
                                          e === G.qh.IN_GAME
                                              ? p.Cy.SELECT_IN_GAME_AUTH_METHOD
                                              : p.Cy.SELECT_WEB_AUTH_METHOD,
                                      sourceQuestContent: s,
                                  }));
                        },
                        options: [
                            {
                                id: G.qh.IN_GAME,
                                value: G.qh.IN_GAME,
                                label: x.intl.string(x.t["4PWzD7"]),
                                leading: C.A,
                            },
                            { id: G.qh.WEB, value: G.qh.WEB, label: x.intl.string(x.t.CM8LUl), leading: j.I },
                        ],
                    }),
                }),
            !0 === k &&
                (0, i.jsx)("div", {
                    className: L.X0,
                    children: (0, i.jsx)(q.A, {
                        quest: t,
                        hasAlreadyLinked: a,
                        onClickGameTitle: h,
                        selectedAuthMethod: D,
                    }),
                }),
            (0, i.jsx)("div", {
                className: L.WJ,
                children:
                    !0 === a || null == D
                        ? null
                        : D === G.qh.WEB
                          ? (0, i.jsx)(A.$, {
                                fullWidth: !0,
                                variant: "primary",
                                size: "md",
                                text: x.intl.string(x.t.T0zC77),
                                onClick: () => c({ analyticsLocations: [M.A.QUEST_IN_GAME_MODAL_CONNECT] }),
                            })
                          : (0, i.jsx)(A.$, {
                                fullWidth: !0,
                                variant: "primary",
                                size: "md",
                                text: x.intl.string(x.t.KgYvrZ),
                                onClick: () => {},
                            }),
            }),
        ],
    });
}
var k = s(366010),
    S = s(736653),
    O = s(551875),
    b = s(651892),
    H = s(241124),
    w = s(918338),
    W = s(818348),
    z = s(237465);
function P(e) {
    let { quest: t } = e,
        s = (0, S.Ay)(),
        n = (0, k.M)(s) ? W.NJ.DARK : W.NJ.LIGHT,
        l = (0, O.tW)(t, O.fY.LOGO_TYPE, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(H.Sn, {
                id: "AchievementInGameQuestModal_hero",
                children: (e) =>
                    (0, i.jsx)(w.A, {
                        quest: t,
                        imageSize: { width: G.i$ * G.K, height: G.ls * G.K },
                        containerClassName: z.jF,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, i.jsx)("div", {
                className: z.Lt,
                children: (0, i.jsx)(H.Sn, {
                    id: "AchievementInGameQuestModal_logotype",
                    children: (e) =>
                        (0, i.jsx)("img", {
                            ref: e,
                            className: z.a$,
                            alt: x.intl.formatToPlainString(x.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: l.url,
                        }),
                }),
            }),
        ],
    });
}
function Q(e) {
    let { quest: t } = e,
        s = (0, S.Ay)(),
        n = (0, k.M)(s) ? W.NJ.DARK : W.NJ.LIGHT,
        l = t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME;
    return (0, i.jsxs)("div", {
        className: z.Th,
        children: [
            (0, i.jsx)(H.Sn, {
                id: "AchievementInGameQuestModal_gameTile",
                children: (e) =>
                    (0, i.jsx)("img", {
                        ref: e,
                        className: z.rw,
                        alt: x.intl.formatToPlainString(x.t.rtm15P, { name: t.config.messages.gameTitle }),
                        src: (0, O.tW)(t, O.fY.GAME_TILE, n).url,
                    }),
            }),
            (0, i.jsxs)("div", {
                className: z.Ly,
                children: [
                    (0, i.jsx)(v.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: z.fx,
                        children: t.config.messages.gameTitle,
                    }),
                    (0, i.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: l?.messages.taskTitle ?? "",
                    }),
                ],
            }),
        ],
    });
}
function R(e) {
    let { quest: t, sourceQuestContent: s } = e,
        n = (0, T.go)();
    return (0, i.jsx)(A.$, {
        fullWidth: !0,
        variant: "secondary",
        size: "md",
        text: (0, b.wr)(t),
        onClick: () =>
            (0, y.pu)(t, {
                content: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                ctaContent: p.Cy.OPEN_GAME_LINK,
                impressionId: n,
                sourceQuestContent: s,
            }),
    });
}
function B(e) {
    let { quest: t, sourceQuestContent: s } = e;
    return (0, i.jsxs)("div", {
        className: z.kL,
        children: [
            (0, i.jsxs)(H.jY, {
                source: G.rE.INGAME_PROGRESS_MODAL,
                questId: t.id,
                isPreview: t.preview,
                children: [(0, i.jsx)(P, { quest: t }), (0, i.jsx)(Q, { quest: t })],
            }),
            (0, i.jsx)("div", { className: z.z1, children: (0, i.jsx)(R, { quest: t, sourceQuestContent: s }) }),
        ],
    });
}
let J = function (e) {
    let { initialQuest: t, sourceQuestContent: s, transitionState: n, onClose: r } = e,
        c = (0, a.C5)(t.id) ?? t;
    return (0, i.jsx)(N, {
        quest: c,
        questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
        sourceQuestContent: s,
        transitionState: n,
        onClose: r,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, i.jsx)(D, { quest: c, sourceQuestContent: s }),
        rightContent: (0, i.jsx)(B, { quest: c, sourceQuestContent: s }),
    });
};
