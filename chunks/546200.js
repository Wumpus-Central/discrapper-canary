n.d(t, { EmojiStudioModal: () => s });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(375727),
    a = n(867248);
let s = (e) => {
    let { transitionState: t, userImage: n, guildId: s } = e;
    return (0, r.jsx)(l.Y0X, {
        transitionState: t,
        size: l.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: a.modalRoot,
        parentComponent: "Modal",
        children: (0, r.jsx)(l.hzk, {
            scrollbarType: "none",
            className: a.modalContent,
            children: (0, r.jsx)(i.I, {
                userImage: n,
                guildId: s,
            }),
        }),
    });
};
