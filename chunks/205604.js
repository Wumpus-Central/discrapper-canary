n.d(e, { default: () => m });
var i = n(627968),
    _ = n(64700),
    E = n(507107),
    C = n(347135),
    l = n(717200),
    a = n(323889),
    s = n(412703),
    I = n(928264),
    u = n(141628),
    r = n(975807),
    A = n(274670),
    o = n(144779),
    T = n(793574),
    N = n(409626),
    d = n(692969),
    c = n(123917),
    M = n(104886),
    L = n(18437),
    h = n(590202),
    q = n(971649),
    O = n(792620),
    p = n(108811),
    g = n(284846),
    f = n(976019),
    S = n(190107),
    G = n(375708),
    U = n(233952);
function k(t) {
    let { quest: e, sourceQuestContent: n } = t,
        { hasAlreadyLinked: C, canStartAuthorization: l, startAuthorization: k, fetched: m } = (0, g.U)(e),
        v = (0, L.Ut)(),
        D = (0, q.go)(),
        y = (0, O.xc)(e),
        H = (0, d.A)({ applicationId: y, location: S.rE.QUEST_INSTRUCTIONS, source: N.Ob.QuestInGameModal }),
        [R, b] = _.useState(null),
        F = m && !C && l,
        B = F ? R : S.qh.IN_GAME,
        K = m && (null != B || C),
        P = G.intl.string(!0 === C ? G.t["2+opCy"] : G.t.dp0CUb),
        V = (() => {
            if (!0 !== C) return G.intl.string(G.t.Z1T4zl);
            let t = e.config.messages.gameTitle;
            return null != H
                ? G.intl.format(G.t.X8hBDz, { gameTitle: t, onClickGameTitle: H })
                : G.intl.format(G.t.u3mdpP, { gameTitle: t });
        })(),
        x = {
            label: G.intl.string(G.t.okJIPY),
            placeholder: G.intl.string(G.t.okJIPY),
            options: [
                { id: S.qh.IN_GAME, value: S.qh.IN_GAME, label: G.intl.string(G.t["4PWzD7"]), leading: u.A },
                { id: S.qh.WEB, value: S.qh.WEB, label: G.intl.string(G.t.CM8LUl), leading: I.I },
            ],
            value: R,
            onSelectionChange: (t) => {
                if (t !== S.qh.IN_GAME && t !== S.qh.WEB) return void b(null);
                b(t);
                let i = t === S.qh.IN_GAME ? h.Cy.SELECT_IN_GAME_AUTH_METHOD : h.Cy.SELECT_WEB_AUTH_METHOD;
                (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_achievement_in_game_left_panel")
                    ? (0, A.r)({
                          type: o.F.CLICK_INTERNAL,
                          adCreativeType: a.p.QUEST,
                          adCreativeId: e.id,
                          questContentCTA: i,
                          surfaceId: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                          sourceQuestContent: n,
                          impressionId: D,
                      })
                    : v({
                          questId: e.id,
                          questContent: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                          questContentCTA: i,
                          sourceQuestContent: n,
                      });
            },
        };
    return (0, i.jsx)(p.A, {
        heading: P,
        subtitle: V,
        methodSelect: F ? [x] : void 0,
        ctaButton: (() => {
            if (!m || !0 === C || null == B) return;
            if (B === S.qh.WEB)
                return {
                    text: G.intl.string(G.t.T0zC77),
                    onClick: () => {
                        (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_achievement_in_game_left_panel")
                            ? (0, A.r)({
                                  type: o.F.CLICK_INTERNAL,
                                  adCreativeType: a.p.QUEST,
                                  adCreativeId: e.id,
                                  questContentCTA: h.Cy.START_WEB_AUTHORIZATION,
                                  surfaceId: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                  sourceQuestContent: n,
                                  impressionId: D,
                              })
                            : v({
                                  questId: e.id,
                                  questContent: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                  questContentCTA: h.Cy.START_WEB_AUTHORIZATION,
                                  sourceQuestContent: n,
                              }),
                            k({ analyticsLocations: [T.A.QUEST_IN_GAME_MODAL_CONNECT] });
                    },
                };
            let t = e.config.taskConfigV2.tasks[s.n.ACHIEVEMENT_IN_GAME];
            if (null == t) return;
            let i = t.accountLinkInstructions;
            return {
                text: G.intl.string(G.t.KgYvrZ),
                onClick: () =>
                    (0, c.h)({
                        href: i,
                        onConfirm: () => {
                            (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_achievement_in_game_left_panel")
                                ? (0, A.r)({
                                      type: o.F.CLICK_INTERNAL,
                                      adCreativeType: a.p.QUEST,
                                      adCreativeId: e.id,
                                      questContentCTA: h.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                      surfaceId: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                      sourceQuestContent: n,
                                      impressionId: D,
                                  })
                                : v({
                                      questId: e.id,
                                      questContent: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                      questContentCTA: h.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                      sourceQuestContent: n,
                                  }),
                                (0, r.A)(i);
                        },
                    }),
            };
        })(),
        children:
            !0 === K &&
            (0, i.jsx)("div", {
                className: U.X,
                children: (0, i.jsx)(f.A, {
                    quest: e,
                    hasAlreadyLinked: C,
                    onClickGameTitle: H,
                    selectedAuthMethod: B,
                }),
            }),
    });
}
let m = function (t) {
    let { initialQuest: e, sourceQuestContent: n, transitionState: _, onClose: a } = t,
        s = (0, C.C5)(e.id) ?? e;
    return (0, i.jsx)(l.A, {
        quest: s,
        questContent: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
        sourceQuestContent: n,
        ariaLabel: G.intl.string(G.t.dp0CUb),
        transitionState: _,
        onClose: a,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, i.jsx)(k, { quest: s, sourceQuestContent: n }),
        location: S.rE.INGAME_CONNECTION_MODAL,
    });
};
