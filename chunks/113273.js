e.d(n, { default: () => d });
var s = e(627968),
    i = e(64700),
    o = e(158954),
    a = e(311907),
    r = e(116833),
    u = e(829219),
    E = e(859703),
    T = e(341915),
    c = e(714510),
    C = e(890687),
    l = e(590202),
    _ = e(73473),
    L = e(654487),
    N = e(985018);
function A(t) {
    let { transitionState: n, onClose: e, quest: _ } = t,
        A = (0, C.fc)(_),
        d = (0, c.mU)({
            quest: _,
            taskDetails: A,
            location: L.rE.QUEST_ACTIVITY_UNENROLLED_MODAL,
            questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        }),
        U = (0, a.bG)([E.A], () => E.A.isEnrolling(_.id)),
        I = i.useCallback(async () => {
            await (0, u.Oy)(_.id, {
                questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                questContentCTA: l.Cy.START_QUEST,
                sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            }),
                e();
        }, [_.id, e]),
        O = i.useCallback(() => ((0, u.Zb)(_.id), e()), [_.id, e]);
    return (0, s.jsx)(o.ExpressiveModal, {
        transitionState: n,
        onClose: O,
        graphic: {
            type: "dynamic",
            component: r.DynamicGraphicComponent.QUEST_ACTIVITY_UNENROLLED,
            props: { quest: _ },
        },
        gradientColor: "blue",
        title: N.intl.string(N.t.IrNgN4),
        subtitle: `${N.intl.format(N.t.V3NSJx, { questName: _.config.messages.questName })} ${d}`,
        actions: [
            { text: N.intl.string(N.t["5Wxrcd"]), variant: "secondary", onClick: O },
            { text: N.intl.string(N.t.l7E81v), variant: "primary", onClick: I, loading: U },
        ],
    });
}
function d(t) {
    let { quest: n, transitionState: e, onClose: i } = t;
    return (0, s.jsx)(_.R, {
        questOrQuests: n,
        questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        children: () => (0, s.jsx)(A, { quest: n, transitionState: e, onClose: i }),
    });
}
