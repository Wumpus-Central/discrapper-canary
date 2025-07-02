n.d(t, { EmojiStudioModal: () => s });
var r = n(255367);
n(73800);
var l = n(481060),
    a = n(375727),
    i = n(205721);
let s = (e) => {
    let { transitionState: t, userImage: n, guildId: s } = e;
    return (0, r.jsx)(l.Y0X, {
        transitionState: t,
        size: l.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: i.modalRoot,
        parentComponent: 'Modal',
        children: (0, r.jsx)(l.hzk, {
            scrollbarType: 'none',
            className: i.modalContent,
            children: (0, r.jsx)(a.I, {
                userImage: n,
                guildId: s
            })
        })
    });
};
