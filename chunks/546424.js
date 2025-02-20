n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(541716),
    l = n(28546),
    c = n(970731),
    u = n(210887),
    d = n(921944),
    f = n(957825),
    p = n(231338),
    _ = n(388032),
    h = n(240931),
    m = n(512668),
    g = n(179998);
function E(e) {
    let { markAsDismissed: t } = e,
        n = (0, o.e7)([u.Z], () => u.Z.theme) === p.BR.LIGHT ? g.Z : m.Z,
        E = i.useCallback(() => {
            (0, l.RO)(f.X1.SOUNDBOARD, s.Ie.NORMAL);
        }, []);
    return (0, r.jsx)(c.ZP, {
        className: h.container,
        asset: (0, r.jsxs)('div', {
            className: h.headerContainer,
            children: [
                (0, r.jsx)('img', {
                    className: h.asset,
                    src: n,
                    alt: ''
                }),
                (0, r.jsx)(a.zxk, {
                    className: h.close,
                    'aria-label': _.NW.string(_.t.cpT0Cg),
                    look: a.zxk.Looks.BLANK,
                    size: a.zxk.Sizes.NONE,
                    onClick: () => t(d.L.USER_DISMISS),
                    children: (0, r.jsx)(a.Dio, {
                        size: 'xs',
                        className: h.closeIcon,
                        color: 'white'
                    })
                })
            ]
        }),
        header: _.NW.string(_.t.dDj3ER),
        content: _.NW.string(_.t['0lZmoa']),
        buttonCTA: _.NW.string(_.t.RzWDqa),
        buttonProps: { color: a.Ttl.WHITE },
        caretPosition: c.DF.BOTTOM_RIGHT,
        onClick: E,
        markAsDismissed: t
    });
}
