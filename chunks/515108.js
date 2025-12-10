n.d(t, { Z: () => b }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(793030),
    s = n(481060),
    o = n(49436),
    l = n(602667),
    c = n(434717),
    d = n(388032),
    u = n(782034);
function m(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, a.jsx)(i.Modal, {
        size: "md",
        title: d.intl.string(d.t.Hd3D8W),
        actions: [
            {
                variant: "primary",
                text: d.intl.string(d.t.cpT0Cq),
                onClick: t,
            },
        ],
        onClose: t,
        transitionState: n,
        children: (0, a.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: d.intl.string(d.t.Ij97SL),
        }),
    });
}
function b(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            transitionState: i,
            onClose: d,
            rewardContent: b,
            isRewardContentLoading: p,
            rewardContentHasError: f,
            location: x,
        } = e,
        h = o.jn.REWARD_MODAL,
        [C, _] = r.useState(!0);
    if (f)
        return (0, a.jsx)(m, {
            onClose: d,
            transitionState: i,
        });
    let j = p || C;
    return (0, a.jsx)(l.A, {
        questOrQuests: t,
        questContent: h,
        sourceQuestContent: n,
        children: (e) =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    j
                        ? (0, a.jsx)(s.$jN, {
                              className: u.spinner,
                              type: s.$jN.Type.WANDERING_CUBES,
                          })
                        : null,
                    (0, a.jsx)("div", {
                        ref: e,
                        style: { visibility: j ? "hidden" : "visible" },
                        children: (0, a.jsxs)(s.Y0X, {
                            "data-migration-pending": !0,
                            transitionState: j ? s.Dvm.HIDDEN : i,
                            size: s.CgR.DYNAMIC,
                            className: u.modal,
                            parentComponent: "QuestRewardV2ModalBase",
                            children: [
                                (0, a.jsx)(s.olH, {
                                    "data-migration-pending": !0,
                                    className: u.closeButton,
                                    onClick: d,
                                    withCircleBackground: !0,
                                }),
                                (0, a.jsxs)("div", {
                                    className: u.modalContent,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: u.leftPanel,
                                            children: b,
                                        }),
                                        (0, a.jsx)("div", {
                                            className: u.rightPanel,
                                            children: (0, a.jsx)(c.Z, {
                                                quest: t,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => _(!1),
                                                location: x,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
    });
}
