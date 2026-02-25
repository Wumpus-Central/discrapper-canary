n.d(e, { default: () => N });
var s = n(627968),
    i = n(64700),
    o = n(158954),
    a = n(116833),
    u = n(829219),
    r = n(341915),
    E = n(714510),
    T = n(890687),
    c = n(590202),
    C = n(73473),
    _ = n(654487),
    l = n(985018);
function L(t) {
    let { transitionState: e, onClose: n, quest: C } = t,
        L = (0, T.fc)(C),
        N = (0, E.mU)({
            quest: C,
            taskDetails: L,
            location: _.rE.QUEST_ACTIVITY_UNENROLLED_MODAL,
            questContent: r.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: r.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        }),
        U = i.useCallback(async () => {
            await (0, u.Oy)(C.id, {
                questContent: r.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                questContentCTA: c.Cy.START_QUEST,
                sourceQuestContent: r.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            }),
                n();
        }, [C.id, n]),
        A = i.useCallback(() => ((0, u.Zb)(C.id), n()), [C.id, n]);
    return (0, s.jsx)(o.ExpressiveModal, {
        transitionState: e,
        onClose: A,
        graphic: {
            type: "dynamic",
            component: a.DynamicGraphicComponent.QUEST_ACTIVITY_UNENROLLED,
            props: { quest: C },
        },
        gradientColor: "blue",
        title: l.intl.string(l.t.IrNgN4),
        subtitle: `${l.intl.format(l.t.V3NSJx, { questName: C.config.messages.questName })} ${N}`,
        actions: [
            { text: l.intl.string(l.t["5Wxrcd"]), variant: "secondary", onClick: A },
            { text: l.intl.string(l.t.l7E81v), variant: "primary", onClick: U },
        ],
    });
}
function N(t) {
    let { quest: e, transitionState: n, onClose: i } = t;
    return (0, s.jsx)(C.R, {
        questOrQuests: e,
        questContent: r.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        sourceQuestContent: r.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
        children: () => (0, s.jsx)(L, { quest: e, transitionState: n, onClose: i }),
    });
}
