n.d(t, { EmojiStudioModal: () => i });
var r = n(255367);
n(73800);
var l = n(481060),
    a = n(375727),
    s = n(205721);
let i = (e) => {
    let { transitionState: t, userImage: n, guildId: i } = e;
    return (0, r.jsx)(l.Y0X, {
        transitionState: t,
        size: l.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: s.modalRoot,
        parentComponent: 'Modal',
        children: (0, r.jsx)(l.hzk, {
            scrollbarType: 'none',
            className: s.modalContent,
            children: (0, r.jsx)(a.I, {
                userImage: n,
                guildId: i
            })
        })
    });
};
