n.d(t, { EmojiStudioModal: () => o });
var l = n(255367);
n(73800);
var r = n(481060),
    i = n(375727),
    a = n(867248);
let o = (e) => {
    let { transitionState: t, userImage: n, guildId: o } = e;
    return (0, l.jsx)(r.Y0X, {
        transitionState: t,
        size: r.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: a.modalRoot,
        parentComponent: "Modal",
        children: (0, l.jsx)(r.hzk, {
            scrollbarType: "none",
            className: a.modalContent,
            children: (0, l.jsx)(i.I, {
                userImage: n,
                guildId: o,
            }),
        }),
    });
};
