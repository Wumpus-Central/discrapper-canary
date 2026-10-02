n.d(e, { default: () => k });
var i = n(477900),
    _ = n(582128),
    E = n(738822),
    C = n(866157),
    l = n(717200),
    s = n(323889),
    a = n(412703),
    I = n(928264),
    r = n(141628),
    u = n(975807),
    o = n(274670),
    A = n(144779),
    T = n(793574),
    N = n(409626),
    d = n(692969),
    c = n(123917),
    M = n(104886),
    L = n(18437),
    h = n(590202),
    p = n(971649),
    q = n(792620),
    f = n(108811),
    O = n(284846),
    g = n(976019),
    S = n(190107),
    m = n(375708),
    G = n(189955);
function U(t) {
    let { quest: e, sourceQuestContent: n } = t,
        { hasAlreadyLinked: C, canStartAuthorization: l, startAuthorization: U, fetched: k } = (0, O.U)(e),
        v = (0, L.Ut)(),
        D = (0, p.wW)(),
        y = (0, q.xc)(e),
        H = (0, d.A)({
            applicationId: y,
            location: S.rE.QUEST_INSTRUCTIONS,
            source: N.GameProfileSources.QuestInGameModal,
        }),
        [R, F] = _.useState(null),
        P = k && !C && l,
        b = P ? R : S.qh.IN_GAME,
        B = k && (null != b || C),
        K = m.intl.string(!0 === C ? m.t["2+opCy"] : m.t.dp0CUb),
        V = (function () {
            if (!0 !== C) return m.intl.string(m.t.Z1T4zl);
            let t = e.config.messages.gameTitle;
            return null != H
                ? m.intl.format(m.t.X8hBDz, { gameTitle: t, onClickGameTitle: H })
                : m.intl.format(m.t.u3mdpP, { gameTitle: t });
        })(),
        W = {
            label: m.intl.string(m.t.okJIPY),
            placeholder: m.intl.string(m.t.okJIPY),
            options: [
                { id: S.qh.IN_GAME, value: S.qh.IN_GAME, label: m.intl.string(m.t["4PWzD7"]), leading: r.A },
                { id: S.qh.WEB, value: S.qh.WEB, label: m.intl.string(m.t.CM8LUl), leading: I.I },
            ],
            value: R,
            onSelectionChange: (t) => {
                if (t !== S.qh.IN_GAME && t !== S.qh.WEB) return void F(null);
                F(t);
                let i = t === S.qh.IN_GAME ? h.Cy.SELECT_IN_GAME_AUTH_METHOD : h.Cy.SELECT_WEB_AUTH_METHOD;
                (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_achievement_in_game_left_panel")
                    ? (0, o.r)({
                          type: A.F.CLICK_INTERNAL,
                          adCreativeType: s.p.QUEST,
                          adCreativeId: e.id,
                          questContentCTA: i,
                          surfaceId: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                          sourceQuestContent: n,
                          impressionId: D(),
                      })
                    : v({
                          questId: e.id,
                          questContent: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                          questContentCTA: i,
                          sourceQuestContent: n,
                      });
            },
        };
    return (0, i.jsx)(f.A, {
        heading: K,
        subtitle: V,
        methodSelect: P ? [W] : void 0,
        ctaButton: (function () {
            if (!k || !0 === C || null == b) return;
            if (b === S.qh.WEB)
                return {
                    text: m.intl.string(m.t.T0zC77),
                    onClick: () => {
                        ((0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_achievement_in_game_left_panel")
                            ? (0, o.r)({
                                  type: A.F.CLICK_INTERNAL,
                                  adCreativeType: s.p.QUEST,
                                  adCreativeId: e.id,
                                  questContentCTA: h.Cy.START_WEB_AUTHORIZATION,
                                  surfaceId: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                  sourceQuestContent: n,
                                  impressionId: D(),
                              })
                            : v({
                                  questId: e.id,
                                  questContent: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                  questContentCTA: h.Cy.START_WEB_AUTHORIZATION,
                                  sourceQuestContent: n,
                              }),
                            U({ analyticsLocations: [T.A.QUEST_IN_GAME_MODAL_CONNECT] }));
                    },
                };
            let t = e.config.taskConfigV2.tasks[a.n.ACHIEVEMENT_IN_GAME];
            if (null == t) return;
            let i = t.accountLinkInstructions;
            return {
                text: m.intl.string(m.t.KgYvrZ),
                onClick: () =>
                    (0, c.h)({
                        href: i,
                        onConfirm: () => {
                            ((0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_achievement_in_game_left_panel")
                                ? (0, o.r)({
                                      type: A.F.CLICK_INTERNAL,
                                      adCreativeType: s.p.QUEST,
                                      adCreativeId: e.id,
                                      questContentCTA: h.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                      surfaceId: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                      sourceQuestContent: n,
                                      impressionId: D(),
                                  })
                                : v({
                                      questId: e.id,
                                      questContent: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                      questContentCTA: h.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                      sourceQuestContent: n,
                                  }),
                                (0, u.A)(i));
                        },
                    }),
            };
        })(),
        children:
            !0 === B &&
            (0, i.jsx)("div", {
                className: G.X,
                children: (0, i.jsx)(g.A, {
                    quest: e,
                    hasAlreadyLinked: C,
                    onClickGameTitle: H,
                    selectedAuthMethod: b,
                }),
            }),
    });
}
let k = function (t) {
    let { initialQuest: e, sourceQuestContent: n, transitionState: _, onClose: s } = t,
        a = (0, C.C5)(e.id) ?? e;
    return (0, i.jsx)(l.A, {
        quest: a,
        questContent: E.uF.ACHIEVEMENT_IN_GAME_MODAL,
        sourceQuestContent: n,
        ariaLabel: m.intl.string(m.t.dp0CUb),
        transitionState: _,
        onClose: s,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, i.jsx)(U, { quest: a, sourceQuestContent: n }),
        location: S.rE.INGAME_CONNECTION_MODAL,
    });
};
