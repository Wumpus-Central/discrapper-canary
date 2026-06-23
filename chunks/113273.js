e.d(n, { default: () => U });
var s = e(627968),
    i = e(64700),
    o = e(772707),
    a = e(17928),
    u = e(116833),
    r = e(340124),
    E = e(859703),
    T = e(507107),
    c = e(3738),
    C = e(347135),
    l = e(590202),
    _ = e(73473),
    L = e(190107),
    N = e(375708);
function A(t) {
    let { transitionState: n, onClose: e, quest: _ } = t,
        A = (0, C.fc)(_),
        U = (0, c.mU)({
            quest: _,
            taskDetails: A,
            location: L.rE.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        }),
        d = (0, a.bG)([E.A], () => E.A.isEnrolling(_.id)),
        p = i.useCallback(async () => {
            await (0, r.Oy)(_.id, {
                questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                questContentCTA: l.Cy.START_QUEST,
                sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            }),
                e();
        }, [_.id, e]),
        I = i.useCallback(() => ((0, r.Zb)(_.id), e()), [_.id, e]);
    return (0, s.jsx)(o.k, {
        transitionState: n,
        onClose: I,
        graphic: {
            type: "dynamic",
            component: u.DynamicGraphicComponent.QUEST_ACTIVITY_UNENROLLED,
            props: { quest: _ },
        },
        gradientColor: "blue",
        title: N.intl.string(N.t.IrNgN4),
        subtitle: `${N.intl.format(N.t.V3NSJx, { questName: _.config.messages.questName })} ${U}`,
        actions: [{ text: N.intl.string(N.t.l7E81v), variant: "primary", onClick: p, loading: d }],
    });
}
function U(t) {
    let { quest: n, transitionState: e, onClose: i } = t;
    return (0, s.jsx)(_.R, {
        questOrQuests: n,
        questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        children: () => (0, s.jsx)(A, { quest: n, transitionState: e, onClose: i }),
    });
}
