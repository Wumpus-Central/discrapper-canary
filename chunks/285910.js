n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    a = n(473749),
    i = n(793030),
    o = n(481060),
    s = n(49436),
    l = n(602667),
    c = n(110410),
    d = n(388032),
    u = n(303304);
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
        children: (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
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
            isRewardContentLoading: C,
            rewardContentHasError: f,
            location: h,
        } = e,
        x = s.jn.REWARD_MODAL,
        [j, g] = a.useState(!0);
    if (f)
        return (0, r.jsx)(m, {
            onClose: d,
            transitionState: i,
        });
    let y = C || j;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: x,
        sourceQuestContent: n,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    y
                        ? (0, r.jsx)(o.$jN, {
                              className: u.spinner,
                              type: o.$jN.Type.WANDERING_CUBES,
                          })
                        : null,
                    (0, r.jsx)("div", {
                        ref: e,
                        style: { visibility: y ? "hidden" : "visible" },
                        children: (0, r.jsxs)(o.Y0X, {
                            "data-migration-pending": !0,
                            transitionState: y ? o.Dvm.HIDDEN : i,
                            size: o.CgR.DYNAMIC,
                            className: u.modal,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, r.jsx)(o.olH, {
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
                                                onLoadComplete: () => g(!1),
                                                location: h,
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
