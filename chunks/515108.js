n.d(a, { Z: () => i });
var t = n(951288);
n(647438);
var s = n(481060),
    o = n(434717),
    l = n(782034);
function i(e) {
    let { quest: a, transitionState: n, onClose: i, rewardContent: r } = e;
    return (0, t.jsxs)(s.Y0X, {
        transitionState: n,
        size: s.CgR.DYNAMIC,
        className: l.modal,
        parentComponent: "QuestRewardV2ModalBase",
        children: [
            (0, t.jsx)(s.olH, {
                className: l.closeButton,
                onClick: i,
                withCircleBackground: !0,
            }),
            (0, t.jsxs)("div", {
                className: l.modalContent,
                children: [
                    (0, t.jsx)("div", {
                        className: l.leftPanel,
                        children: r,
                    }),
                    (0, t.jsx)("div", {
                        className: l.rightPanel,
                        children: (0, t.jsx)(o.Z, { quest: a }),
                    }),
                ],
            }),
        ],
    });
}
