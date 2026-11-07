var s = e(477900),
    i = e(582128),
    o = e(855986),
    a = e(116833),
    u = e(772707),
    r = e(343559),
    E = e(122760),
    T = e(506988),
    c = e(870273),
    C = e(61387),
    l = e(590202),
    _ = e(280905),
    L = e(221596),
    N = e(792996);
function A(t) {
    let { transitionState: n, onClose: e, quest: _ } = t,
        A = (0, C.fc)(_),
        d = (0, c.mU)({
            quest: _,
            taskDetails: A,
            location: L.rE.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            withoutMarkdown: !0,
        }),
        U = (0, o.bG)([E.A], () => E.A.isEnrolling(_.id)),
        p = i.useCallback(async () => {
            (await (0, r.Oy)(_.id, {
                questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                questContentCTA: l.Cy.START_QUEST,
                sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
            }),
                e());
        }, [_.id, e]),
        I = i.useCallback(() => ((0, r.Zb)(_.id), e()), [_.id, e]);
    return (0, s.jsx)(u.k, {
        transitionState: n,
        onClose: I,
        graphic: {
            type: "dynamic",
            component: a.DynamicGraphicComponent.QUEST_ACTIVITY_UNENROLLED,
            props: { quest: _ },
        },
        gradientColor: "blue",
        title: N.intl.string(N.t.IrNgN4),
        subtitle: `${N.intl.format(N.t.V3NSJx, { questName: _.config.messages.questName })} ${d}`,
        actions: [{ text: N.intl.string(N.t.l7E81v), variant: "primary", onClick: p, loading: U }],
    });
}
e.d(
    n,
    {},
    {
        default: function (t) {
            let { quest: n, transitionState: e, onClose: i } = t;
            return (0, s.jsx)(_.R, {
                questOrQuests: n,
                questContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                sourceQuestContent: T.uF.QUEST_ACTIVITY_UNENROLLED_MODAL,
                children: () => (0, s.jsx)(A, { quest: n, transitionState: e, onClose: i }),
            });
        },
    },
);
