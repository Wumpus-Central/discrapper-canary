e.d(n, { default: () => G });
var i = e(627968),
    l = e(64700),
    s = e(507107),
    o = e(31587),
    E = e(717200),
    u = e(412703),
    C = e(928264),
    a = e(141628),
    A = e(975807),
    _ = e(793574),
    r = e(123917),
    I = e(18437),
    N = e(590202),
    c = e(971649),
    M = e(901406),
    d = e(108811),
    T = e(284846),
    h = e(976019),
    g = e(190107),
    q = e(375708),
    O = e(233952);
function L(t) {
    let { quest: n, sourceQuestContent: e } = t,
        { hasAlreadyLinked: o, canStartAuthorization: E, startAuthorization: L, fetched: G } = (0, T.U)(n),
        k = (0, c.go)(),
        f = (0, I.Ut)(),
        p = l.useCallback(() => {
            (0, M.pu)(n, {
                content: s.uF.ACHIEVEMENT_IN_GAME_MODAL,
                ctaContent: N.Cy.OPEN_GAME_LINK,
                impressionId: k,
                sourceQuestContent: e,
            });
        }, [n, k, e]),
        [H, D] = l.useState(null),
        U = G && !o && E,
        b = U ? H : g.qh.IN_GAME,
        S = G && (null != b || o),
        m = q.intl.string(!0 === o ? q.t["2+opCy"] : q.t.dp0CUb),
        y =
            !0 === o
                ? q.intl.format(q.t.X8hBDz, { gameTitle: n.config.messages.gameTitle, onClickGameTitle: p })
                : q.intl.string(q.t.Z1T4zl),
        B = {
            label: q.intl.string(q.t.okJIPY),
            placeholder: q.intl.string(q.t.okJIPY),
            options: [
                { id: g.qh.IN_GAME, value: g.qh.IN_GAME, label: q.intl.string(q.t["4PWzD7"]), leading: a.A },
                { id: g.qh.WEB, value: g.qh.WEB, label: q.intl.string(q.t.CM8LUl), leading: C.I },
            ],
            value: H,
            onSelectionChange: (t) => {
                t !== g.qh.IN_GAME && t !== g.qh.WEB
                    ? D(null)
                    : (D(t),
                      f({
                          questId: n.id,
                          questContent: s.uF.ACHIEVEMENT_IN_GAME_MODAL,
                          questContentCTA:
                              t === g.qh.IN_GAME ? N.Cy.SELECT_IN_GAME_AUTH_METHOD : N.Cy.SELECT_WEB_AUTH_METHOD,
                          sourceQuestContent: e,
                      }));
            },
        };
    return (0, i.jsx)(d.A, {
        heading: m,
        subtitle: y,
        methodSelect: U ? [B] : void 0,
        ctaButton: (() => {
            if (!G || !0 === o || null == b) return;
            if (b === g.qh.WEB)
                return {
                    text: q.intl.string(q.t.T0zC77),
                    onClick: () => {
                        f({
                            questId: n.id,
                            questContent: s.uF.ACHIEVEMENT_IN_GAME_MODAL,
                            questContentCTA: N.Cy.START_WEB_AUTHORIZATION,
                            sourceQuestContent: e,
                        }),
                            L({ analyticsLocations: [_.A.QUEST_IN_GAME_MODAL_CONNECT] });
                    },
                };
            let t = n.config.taskConfigV2.tasks[u.n.ACHIEVEMENT_IN_GAME];
            if (null == t) return;
            let i = t.accountLinkInstructions;
            return {
                text: q.intl.string(q.t.KgYvrZ),
                onClick: () =>
                    (0, r.h)({
                        href: i,
                        onConfirm: () => {
                            f({
                                questId: n.id,
                                questContent: s.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                questContentCTA: N.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                sourceQuestContent: e,
                            }),
                                (0, A.A)(i);
                        },
                    }),
            };
        })(),
        children:
            !0 === S &&
            (0, i.jsx)("div", {
                className: O.X,
                children: (0, i.jsx)(h.A, {
                    quest: n,
                    hasAlreadyLinked: o,
                    onClickGameTitle: p,
                    selectedAuthMethod: b,
                }),
            }),
    });
}
let G = function (t) {
    let { initialQuest: n, sourceQuestContent: e, transitionState: l, onClose: u } = t,
        C = (0, o.C5)(n.id) ?? n;
    return (0, i.jsx)(E.A, {
        quest: C,
        questContent: s.uF.ACHIEVEMENT_IN_GAME_MODAL,
        sourceQuestContent: e,
        ariaLabel: q.intl.string(q.t.dp0CUb),
        transitionState: l,
        onClose: u,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, i.jsx)(L, { quest: C, sourceQuestContent: e }),
        location: g.rE.INGAME_CONNECTION_MODAL,
    });
};
