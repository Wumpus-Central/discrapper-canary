n.d(t, { Z: () => p }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(793030),
    s = n(481060),
    o = n(497505),
    l = n(602667),
    c = n(434717),
    d = n(388032),
    u = n(782034);
function m(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, a.jsx)(i.Modal, {
        size: "md",
        title: d.intl.string(d.t.Hd3D8f),
        actions: [
            {
                variant: "primary",
                text: d.intl.string(d.t.cpT0Cg),
                onClick: t,
            },
        ],
        onClose: t,
        transitionState: n,
        children: (0, a.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: d.intl.string(d.t.Ij97SE),
        }),
    });
}
function p(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            transitionState: i,
            onClose: d,
            rewardContent: p,
            isRewardContentLoading: f,
            rewardContentHasError: C,
            location: _,
        } = e,
        b = o.jn.REWARD_MODAL,
        [h, x] = r.useState(!0);
    if (C)
        return (0, a.jsx)(m, {
            onClose: d,
            transitionState: i,
        });
    let g = f || h;
    return (0, a.jsx)(l.A, {
        questOrQuests: t,
        questContent: b,
        sourceQuestContent: n,
        children: (e) =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    g
                        ? (0, a.jsx)(s.$jN, {
                              className: u.spinner,
                              type: s.$jN.Type.WANDERING_CUBES,
                          })
                        : null,
                    (0, a.jsx)("div", {
                        ref: e,
                        style: { visibility: g ? "hidden" : "visible" },
                        children: (0, a.jsxs)(s.Y0X, {
                            "data-migration-pending": !0,
                            transitionState: g ? s.Dvm.HIDDEN : i,
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
                                            children: p,
                                        }),
                                        (0, a.jsx)("div", {
                                            className: u.rightPanel,
                                            children: (0, a.jsx)(c.Z, {
                                                quest: t,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => x(!1),
                                                location: _,
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
