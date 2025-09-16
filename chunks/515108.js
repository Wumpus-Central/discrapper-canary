n.d(a, { Z: () => l });
var t = n(951288);
n(647438);
var s = n(481060),
    i = n(434717),
    o = n(782034);
function l(e) {
    let { quest: a, transitionState: n, onClose: l, rewardContent: r } = e;
    return (0, t.jsxs)(s.Y0X, {
        "data-migration-pending": !0,
        transitionState: n,
        size: s.CgR.DYNAMIC,
        className: o.modal,
        parentComponent: "QuestRewardV2ModalBase",
        children: [
            (0, t.jsx)(s.olH, {
                "data-migration-pending": !0,
                className: o.closeButton,
                onClick: l,
                withCircleBackground: !0,
            }),
            (0, t.jsxs)("div", {
                className: o.modalContent,
                children: [
                    (0, t.jsx)("div", {
                        className: o.leftPanel,
                        children: r,
                    }),
                    (0, t.jsx)("div", {
                        className: o.rightPanel,
                        children: (0, t.jsx)(i.Z, { quest: a }),
                    }),
                ],
            }),
        ],
    });
}
