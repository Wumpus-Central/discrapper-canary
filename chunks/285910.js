n.d(t, { Z: () => f }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(793030),
    o = n(481060),
    s = n(49436),
    l = n(602667),
    c = n(110410),
    d = n(388032),
    u = n(303304);
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
        children: (0, a.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: d.intl.string(d.t.Ij97SL),
        }),
    });
}
function f(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            transitionState: i,
            onClose: d,
            rewardContent: f,
            isRewardContentLoading: x,
            rewardContentHasError: p,
            location: C,
        } = e,
        g = s.jn.REWARD_MODAL,
        [h, j] = r.useState(!0);
    if (p)
        return (0, a.jsx)(m, {
            onClose: d,
            transitionState: i,
        });
    let b = x || h;
    return (0, a.jsx)(l.A, {
        questOrQuests: t,
        questContent: g,
        sourceQuestContent: n,
        children: (e) =>
            (0, a.jsxs)(a.Fragment, {
                children: [
                    b
                        ? (0, a.jsx)(o.$jN, {
                              className: u.spinner,
                              type: o.$jN.Type.WANDERING_CUBES,
                          })
                        : null,
                    (0, a.jsx)("div", {
                        ref: e,
                        style: { visibility: b ? "hidden" : "visible" },
                        children: (0, a.jsxs)(o.Y0X, {
                            "data-migration-pending": !0,
                            transitionState: b ? o.Dvm.HIDDEN : i,
                            size: o.CgR.DYNAMIC,
                            className: u.modal,
                            parentComponent: "QuestRewardModalBase",
                            children: [
                                (0, a.jsx)(o.olH, {
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
                                            children: f,
                                        }),
                                        (0, a.jsx)("div", {
                                            className: u.rightPanel,
                                            children: (0, a.jsx)(c.Z, {
                                                quest: t,
                                                sourceQuestContent: n,
                                                onLoadComplete: () => j(!1),
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
