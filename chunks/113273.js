e.d(n, { default: () => d });
var s = e(627968),
    i = e(64700),
    o = e(158954),
    a = e(311907),
    u = e(116833),
    r = e(829219),
    E = e(859703),
    T = e(341915),
    c = e(714510),
    C = e(890687),
    l = e(590202),
    _ = e(73473),
    L = e(654487),
    N = e(985018);
function A(t) {
    let { transitionState: n, onClose: e, quest: _, showSkipButton: A } = t,
        d = (0, C.fc)(_),
        U = (0, c.mU)({
            quest: _,
            taskDetails: d,
            location: L.rE.QUEST_ACTIVITY_UNENROLLED_MODAL,
            questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        }),
        p = (0, a.bG)([E.A], () => E.A.isEnrolling(_.id)),
        I = i.useCallback(async () => {
            await (0, r.Oy)(_.id, {
                questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                questContentCTA: l.Cy.START_QUEST,
                sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            }),
                e();
        }, [_.id, e]),
        O = i.useCallback(() => ((0, r.Zb)(_.id), e()), [_.id, e]);
    return (0, s.jsx)(o.ExpressiveModal, {
        transitionState: n,
        onClose: O,
        graphic: {
            type: "dynamic",
            component: u.DynamicGraphicComponent.QUEST_ACTIVITY_UNENROLLED,
            props: { quest: _ },
        },
        gradientColor: "blue",
        title: N.intl.string(N.t.IrNgN4),
        subtitle: `${N.intl.format(N.t.V3NSJx, { questName: _.config.messages.questName })} ${U}`,
        actions: [
            ...(A ? [{ text: N.intl.string(N.t["5Wxrcd"]), variant: "secondary", onClick: O }] : []),
            { text: N.intl.string(N.t.l7E81v), variant: "primary", onClick: I, loading: p },
        ],
    });
}
function d(t) {
    let { quest: n, showSkipButton: e, transitionState: i, onClose: o } = t;
    return (0, s.jsx)(_.R, {
        questOrQuests: n,
        questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        children: () => (0, s.jsx)(A, { quest: n, transitionState: i, onClose: o, showSkipButton: e }),
    });
}
