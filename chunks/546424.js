n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(541716),
    l = n(28546),
    u = n(970731),
    c = n(210887),
    d = n(921944),
    f = n(957825),
    _ = n(231338),
    p = n(388032),
    h = n(832556),
    m = n(512668),
    g = n(179998);
function E(e) {
    let { markAsDismissed: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.theme) === _.BR.LIGHT ? g.Z : m.Z,
        E = r.useCallback(() => {
            (0, l.RO)(f.X1.SOUNDBOARD, o.Ie.NORMAL);
        }, []);
    return (0, i.jsx)(u.ZP, {
        className: h.container,
        asset: (0, i.jsxs)('div', {
            className: h.headerContainer,
            children: [
                (0, i.jsx)('img', {
                    className: h.asset,
                    src: n,
                    alt: ''
                }),
                (0, i.jsx)(s.zxk, {
                    className: h.close,
                    'aria-label': p.intl.string(p.t.cpT0Cg),
                    look: s.zxk.Looks.BLANK,
                    size: s.zxk.Sizes.NONE,
                    onClick: () => t(d.L.USER_DISMISS),
                    children: (0, i.jsx)(s.Dio, {
                        size: 'xs',
                        className: h.closeIcon,
                        color: 'white'
                    })
                })
            ]
        }),
        header: p.intl.string(p.t.dDj3ER),
        content: p.intl.string(p.t['0lZmoa']),
        buttonCTA: p.intl.string(p.t.RzWDqa),
        buttonProps: { color: s.Ttl.WHITE },
        caretPosition: u.DF.BOTTOM_RIGHT,
        onClick: E,
        markAsDismissed: t
    });
}
