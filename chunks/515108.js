n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(82659),
    l = n(481060),
    s = n(497505),
    o = n(602667),
    c = n(434717),
    d = n(388032),
    u = n(955082);
function _(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, r.jsx)(i.Modal, {
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
        children: (0, r.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: d.intl.string(d.t.Ij97SE),
        }),
    });
}
function h(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            transitionState: i,
            onClose: d,
            rewardContent: h,
            isRewardContentLoading: m,
            rewardContentHasError: C,
            location: p,
        } = e,
        f = s.jn.REWARD_MODAL,
        [g, E] = a.useState(!0);
    if (C)
        return (0, r.jsx)(_, {
            onClose: d,
            transitionState: i,
        });
    let R = m || g;
    return (0, r.jsx)(o.A, {
        questOrQuests: t,
        questContent: f,
        sourceQuestContent: n,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    R
                        ? (0, r.jsx)(l.$jN, {
                              className: u.spinner,
                              type: l.$jN.Type.WANDERING_CUBES,
                          })
                        : null,
                    (0, r.jsx)("div", {
                        ref: e,
                        style: { visibility: R ? "hidden" : "visible" },
                        children: (0, r.jsxs)(l.Y0X, {
                            "data-migration-pending": !0,
                            transitionState: R ? l.Dvm.HIDDEN : i,
                            size: l.CgR.DYNAMIC,
                            className: u.modal,
                            parentComponent: "QuestRewardV2ModalBase",
                            children: [
                                (0, r.jsx)(l.olH, {
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
                                            children: h,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: u.rightPanel,
                                            children: (0, r.jsx)(c.Z, {
                                                quest: t,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => E(!1),
                                                location: p,
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
