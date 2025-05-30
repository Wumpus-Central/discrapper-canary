r.d(t, { EmojiStudioModal: () => u }), r(388685);
var n = r(255367),
    a = r(73800),
    s = r(481060),
    l = r(598117),
    i = r(375727),
    o = r(903759),
    c = r(205721);
let u = (e) => {
    let { transitionState: t, userImage: r, guildId: u } = e,
        [d, p] = a.useState(r),
        h = a.useCallback(() => p(null), [p]),
        g = null == d ? s.CgR.MEDIUM : s.CgR.LARGE;
    return (0, n.jsx)(s.Y0X, {
        transitionState: t,
        size: g,
        children: (0, n.jsxs)(s.hzk, {
            scrollbarType: 'none',
            className: c.modalContent,
            children: [
                null == d
                    ? (0, n.jsx)(o.u, { setUserImage: p })
                    : (0, n.jsx)(i.I, {
                          userImage: d,
                          guildId: u,
                          back: h
                      }),
                (0, n.jsx)(s.olH, {
                    onClick: () => (0, s.Mr3)(l.Hj),
                    className: c.closeButton
                })
            ]
        })
    });
};
