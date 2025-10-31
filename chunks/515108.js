n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(793030),
    s = n(481060),
    o = n(497505),
    l = n(602667),
    c = n(434717),
    d = n(388032),
    u = n(782034);
function m(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, r.jsx)(i.Modal, {
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
        children: (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: d.intl.string(d.t.Ij97SL),
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
            rewardContentHasError: x,
            location: C,
        } = e,
        g = o.jn.REWARD_MODAL,
        [h, _] = a.useState(!0);
    if (x)
        return (0, r.jsx)(m, {
            onClose: d,
            transitionState: i,
        });
    let j = f || h;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: g,
        sourceQuestContent: n,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    j
                        ? (0, r.jsx)(s.$jN, {
                              className: u.spinner,
                              type: s.$jN.Type.WANDERING_CUBES,
                          })
                        : null,
                    (0, r.jsx)("div", {
                        ref: e,
                        style: { visibility: j ? "hidden" : "visible" },
                        children: (0, r.jsxs)(s.Y0X, {
                            "data-migration-pending": !0,
                            transitionState: j ? s.Dvm.HIDDEN : i,
                            size: s.CgR.DYNAMIC,
                            className: u.modal,
                            parentComponent: "QuestRewardV2ModalBase",
                            children: [
                                (0, r.jsx)(s.olH, {
                                    "data-migration-pending": !0,
                                    className: u.closeButton,
                                    onClick: d,
                                    withCircleBackground: !0,
                                }),
                                (0, r.jsxs)("div", {
                                    className: u.modalContent,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: u.leftPanel,
                                            children: p,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: u.rightPanel,
                                            children: (0, r.jsx)(c.Z, {
                                                quest: t,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => _(!1),
                                                location: C,
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
