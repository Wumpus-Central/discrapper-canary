n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var a = n(481060),
    i = n(497505),
    o = n(602667),
    s = n(434717),
    l = n(955082);
function c(e) {
    let { quest: t, sourceQuestContent: n, transitionState: c, onClose: d, rewardContent: u } = e,
        p = i.jn.REWARD_MODAL;
    return (0, r.jsx)(o.A, {
        questOrQuests: t,
        questContent: p,
        sourceQuestContent: n,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: e,
                children: (0, r.jsxs)(a.Y0X, {
                    "data-migration-pending": !0,
                    transitionState: c,
                    size: a.CgR.DYNAMIC,
                    className: l.modal,
                    parentComponent: "QuestRewardV2ModalBase",
                    children: [
                        (0, r.jsx)(a.olH, {
                            "data-migration-pending": !0,
                            className: l.closeButton,
                            onClick: d,
                            withCircleBackground: !0,
                        }),
                        (0, r.jsxs)("div", {
                            className: l.modalContent,
                            children: [
                                (0, r.jsx)("div", {
                                    className: l.leftPanel,
                                    children: u,
                                }),
                                (0, r.jsx)("div", {
                                    className: l.rightPanel,
                                    children: (0, r.jsx)(s.Z, {
                                        quest: t,
                                        sourceQuestContent: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
    });
}
