n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(481060),
    s = n(49436),
    l = n(602667),
    c = n(110410),
    d = n(388032),
    u = n(400049);
function m(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, r.jsx)(a.Modal, {
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
function f(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            transitionState: a,
            onClose: d,
            rewardContent: f,
            isRewardContentLoading: x,
            rewardContentHasError: p,
            location: C,
        } = e,
        g = s.jn.REWARD_MODAL,
        [h, _] = i.useState(!0);
    if (p)
        return (0, r.jsx)(m, {
            onClose: d,
            transitionState: a,
        });
    let j = x || h;
    return (0, r.jsx)(l.A, {
        questOrQuests: t,
        questContent: g,
        sourceQuestContent: n,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    j
                        ? (0, r.jsx)(o.$jN, {
                              className: u.spinner,
                              type: o.$jN.Type.WANDERING_CUBES,
                          })
                        : null,
                    (0, r.jsx)("div", {
                        ref: e,
                        style: { visibility: j ? "hidden" : "visible" },
                        children: (0, r.jsxs)(o.Y0X, {
                            "data-migration-pending": !0,
                            transitionState: j ? o.Dvm.HIDDEN : a,
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
                                            children: f,
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
