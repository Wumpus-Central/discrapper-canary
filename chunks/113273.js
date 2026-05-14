e.d(n, { default: () => U });
var s = e(627968),
    i = e(64700),
    o = e(772707),
    a = e(17928),
    u = e(116833),
    r = e(340124),
    E = e(859703),
    T = e(507107),
    c = e(838077),
    C = e(31587),
    _ = e(590202),
    l = e(73473),
    L = e(190107),
    N = e(375708);
function A(t) {
    let { transitionState: n, onClose: e, quest: l, showSkipButton: A } = t,
        U = (0, C.fc)(l),
        d = (0, c.mU)({
            quest: l,
            taskDetails: U,
            location: L.rE.QUEST_ACTIVITY_UNENROLLED_MODAL,
            questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        }),
        I = (0, a.bG)([E.A], () => E.A.isEnrolling(l.id)),
        O = i.useCallback(async () => {
            await (0, r.Oy)(l.id, {
                questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                questContentCTA: _.Cy.START_QUEST,
                sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            }),
                e();
        }, [l.id, e]),
        p = i.useCallback(() => ((0, r.Zb)(l.id), e()), [l.id, e]);
    return (0, s.jsx)(o.k, {
        transitionState: n,
        onClose: p,
        graphic: {
            type: "dynamic",
            component: u.DynamicGraphicComponent.QUEST_ACTIVITY_UNENROLLED,
            props: { quest: l },
        },
        gradientColor: "blue",
        title: N.intl.string(N.t.IrNgN4),
        subtitle: `${N.intl.format(N.t.V3NSJx, { questName: l.config.messages.questName })} ${d}`,
        actions: [
            ...(A ? [{ text: N.intl.string(N.t["5Wxrcd"]), variant: "secondary", onClick: p }] : []),
            { text: N.intl.string(N.t.l7E81v), variant: "primary", onClick: O, loading: I },
        ],
    });
}
function U(t) {
    let { quest: n, showSkipButton: e, transitionState: i, onClose: o } = t;
    return (0, s.jsx)(l.R, {
        questOrQuests: n,
        questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        children: () => (0, s.jsx)(A, { quest: n, transitionState: i, onClose: o, showSkipButton: e }),
    });
}
