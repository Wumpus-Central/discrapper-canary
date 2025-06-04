r.d(t, { EmojiStudioModal: () => u }), r(388685);
var n = r(255367),
    a = r(73800),
    l = r(481060),
    s = r(598117),
    i = r(375727),
    o = r(903759),
    c = r(205721);
let u = (e) => {
    let { transitionState: t, userImage: r, guildId: u } = e,
        [d, p] = a.useState(r),
        h = a.useCallback(() => p(null), [p]);
    return (0, n.jsx)(l.Y0X, {
        transitionState: t,
        size: l.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: null == d ? c.modalRootEmpty : c.modalRootEditor,
        children: (0, n.jsxs)(l.hzk, {
            scrollbarType: 'none',
            className: null == d ? '' : c.modalContent,
            children: [
                null == d
                    ? (0, n.jsx)(o.u, { setUserImage: p })
                    : (0, n.jsx)(i.I, {
                          userImage: d,
                          guildId: u,
                          back: h
                      }),
                (0, n.jsx)(l.olH, {
                    onClick: () => (0, l.Mr3)(s.Hj),
                    className: c.closeButton
                })
            ]
        })
    });
};
