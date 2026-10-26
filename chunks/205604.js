n.d(e, { default: () => q });
var i = n(477900),
    l = n(582128),
    r = n(738822),
    s = n(77870),
    a = n(717200),
    o = n(323889),
    C = n(412703),
    u = n(928264),
    E = n(141628),
    d = n(975807),
    I = n(507395),
    A = n(144779),
    _ = n(793574),
    T = n(409626),
    c = n(692969),
    N = n(123917),
    M = n(590202),
    h = n(971649),
    p = n(792620),
    f = n(108811),
    L = n(284846),
    g = n(976019),
    G = n(190107),
    O = n(105292),
    S = n(189955);
function m(t) {
    let { quest: e, sourceQuestContent: n } = t,
        { hasAlreadyLinked: s, canStartAuthorization: a, startAuthorization: m, fetched: q } = (0, L.U)(e),
        U = (0, h.wW)(),
        k = (0, p.xc)(e),
        v = (0, c.A)({
            applicationId: k,
            location: G.rE.QUEST_INSTRUCTIONS,
            source: T.GameProfileSources.QuestInGameModal,
        }),
        [y, H] = l.useState(null),
        D = q && !s && a,
        b = D ? y : G.qh.IN_GAME,
        x = q && (null != b || s),
        B = O.intl.string(!0 === s ? O.t["2+opCy"] : O.t.dp0CUb),
        Q = (function () {
            if (!0 !== s) return O.intl.string(O.t.Z1T4zl);
            let t = e.config.messages.gameTitle;
            return null != v
                ? O.intl.format(O.t.X8hBDz, { gameTitle: t, onClickGameTitle: v })
                : O.intl.format(O.t.u3mdpP, { gameTitle: t });
        })(),
        W = {
            label: O.intl.string(O.t.okJIPY),
            placeholder: O.intl.string(O.t.okJIPY),
            options: [
                { id: G.qh.IN_GAME, value: G.qh.IN_GAME, label: O.intl.string(O.t["4PWzD7"]), leading: E.A },
                { id: G.qh.WEB, value: G.qh.WEB, label: O.intl.string(O.t.CM8LUl), leading: u.I },
            ],
            value: y,
            onSelectionChange: (t) => {
                if (t !== G.qh.IN_GAME && t !== G.qh.WEB) return void H(null);
                H(t);
                let i = t === G.qh.IN_GAME ? M.Cy.SELECT_IN_GAME_AUTH_METHOD : M.Cy.SELECT_WEB_AUTH_METHOD;
                (0, I.r)({
                    type: A.F.CLICK_INTERNAL,
                    adCreativeType: o.p.QUEST,
                    adCreativeId: e.id,
                    questContentCTA: i,
                    surfaceId: r.uF.ACHIEVEMENT_IN_GAME_MODAL,
                    sourceQuestContent: n,
                    impressionId: U(),
                });
            },
        };
    return (0, i.jsx)(f.A, {
        heading: B,
        subtitle: Q,
        methodSelect: D ? [W] : void 0,
        ctaButton: (function () {
            if (!q || !0 === s || null == b) return;
            if (b === G.qh.WEB)
                return {
                    text: O.intl.string(O.t.T0zC77),
                    onClick: () => {
                        ((0, I.r)({
                            type: A.F.CLICK_INTERNAL,
                            adCreativeType: o.p.QUEST,
                            adCreativeId: e.id,
                            questContentCTA: M.Cy.START_WEB_AUTHORIZATION,
                            surfaceId: r.uF.ACHIEVEMENT_IN_GAME_MODAL,
                            sourceQuestContent: n,
                            impressionId: U(),
                        }),
                            m({ analyticsLocations: [_.A.QUEST_IN_GAME_MODAL_CONNECT] }));
                    },
                };
            let t = e.config.taskConfigV2.tasks[C.n.ACHIEVEMENT_IN_GAME];
            if (null == t) return;
            let i = t.accountLinkInstructions;
            return {
                text: O.intl.string(O.t.KgYvrZ),
                onClick: () =>
                    (0, N.h)({
                        href: i,
                        onConfirm: () => {
                            ((0, I.r)({
                                type: A.F.CLICK_INTERNAL,
                                adCreativeType: o.p.QUEST,
                                adCreativeId: e.id,
                                questContentCTA: M.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                surfaceId: r.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                sourceQuestContent: n,
                                impressionId: U(),
                            }),
                                (0, d.A)(i));
                        },
                    }),
            };
        })(),
        children:
            !0 === x &&
            (0, i.jsx)("div", {
                className: S.X,
                children: (0, i.jsx)(g.A, {
                    quest: e,
                    hasAlreadyLinked: s,
                    onClickGameTitle: v,
                    selectedAuthMethod: b,
                }),
            }),
    });
}
let q = function (t) {
    let { initialQuest: e, sourceQuestContent: n, transitionState: l, onClose: o } = t,
        C = (0, s.C5)(e.id) ?? e;
    return (0, i.jsx)(a.A, {
        quest: C,
        questContent: r.uF.ACHIEVEMENT_IN_GAME_MODAL,
        sourceQuestContent: n,
        ariaLabel: O.intl.string(O.t.dp0CUb),
        transitionState: l,
        onClose: o,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, i.jsx)(m, { quest: C, sourceQuestContent: n }),
        location: G.rE.INGAME_CONNECTION_MODAL,
    });
};
