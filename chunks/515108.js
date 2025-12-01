t.d(n, { Z: () => p }), t(388685);
var a = t(54381),
    r = t(473749),
    i = t(793030),
    s = t(481060),
    o = t(49436),
    l = t(602667),
    c = t(434717),
    d = t(388032),
    u = t(782034);
function m(e) {
    let { onClose: n, transitionState: t } = e;
    return (0, a.jsx)(i.Modal, {
        size: "md",
        title: d.intl.string(d.t.Hd3D8W),
        actions: [
            {
                variant: "primary",
                text: d.intl.string(d.t.cpT0Cq),
                onClick: n,
            },
        ],
        onClose: n,
        transitionState: t,
        children: (0, a.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: d.intl.string(d.t.Ij97SL),
        }),
    });
}
function p(e) {
    let {
            quest: n,
            sourceQuestContent: t,
            transitionState: i,
            onClose: d,
            rewardContent: p,
            isRewardContentLoading: b,
            rewardContentHasError: f,
            location: x,
        } = e,
        h = o.jn.REWARD_MODAL,
        [_, C] = r.useState(!0);
    if (f)
        return (0, a.jsx)(m, {
            onClose: d,
            transitionState: i,
        });
    let g = b || _;
    return (0, a.jsx)(l.A, {
        questOrQuests: n,
        questContent: h,
        sourceQuestContent: t,
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
                                                quest: n,
                                                sourceQuestContent: t,
                                                onLoadComplete: () => C(!1),
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
