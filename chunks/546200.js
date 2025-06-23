n.d(t, { EmojiStudioModal: () => u }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(481060),
    s = n(598117),
    i = n(375727),
    o = n(903759),
    c = n(205721);
let u = (e) => {
    let { transitionState: t, userImage: n, guildId: u } = e,
        [d, p] = a.useState(n),
        h = a.useCallback(() => p(null), [p]);
    return (0, r.jsx)(l.Y0X, {
        transitionState: t,
        size: l.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: null == d ? c.modalRootEmpty : c.modalRootEditor,
        parentComponent: 'Modal',
        children: (0, r.jsxs)(l.hzk, {
            scrollbarType: 'none',
            className: null == d ? '' : c.modalContent,
            children: [
                null == d
                    ? (0, r.jsx)(o.u, { setUserImage: p })
                    : (0, r.jsx)(i.I, {
                          userImage: d,
                          guildId: u,
                          back: h
                      }),
                (0, r.jsx)(l.olH, {
                    onClick: () => (0, l.Mr3)(s.Hj),
                    className: c.closeButton
                })
            ]
        })
    });
};
