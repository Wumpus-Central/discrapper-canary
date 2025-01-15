r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(541716),
    u = r(28546),
    c = r(970731),
    d = r(210887),
    f = r(921944),
    _ = r(957825),
    h = r(231338),
    p = r(388032),
    m = r(634474),
    g = r(512668),
    E = r(179998);
function v(e) {
    let { markAsDismissed: n } = e,
        r = (0, s.e7)([d.Z], () => d.Z.theme) === h.BR.LIGHT ? E.Z : g.Z,
        v = a.useCallback(() => {
            (0, u.RO)(_.X1.SOUNDBOARD, l.Ie.NORMAL);
        }, []);
    return (0, i.jsx)(c.ZP, {
        className: m.container,
        asset: (0, i.jsxs)('div', {
            className: m.headerContainer,
            children: [
                (0, i.jsx)('img', {
                    className: m.asset,
                    src: r,
                    alt: ''
                }),
                (0, i.jsx)(o.Button, {
                    className: m.close,
                    'aria-label': p.intl.string(p.t.cpT0Cg),
                    look: o.Button.Looks.BLANK,
                    size: o.Button.Sizes.NONE,
                    onClick: () => n(f.L.USER_DISMISS),
                    children: (0, i.jsx)(o.XSmallIcon, {
                        size: 'xs',
                        className: m.closeIcon,
                        color: 'white'
                    })
                })
            ]
        }),
        header: p.intl.string(p.t.dDj3ER),
        content: p.intl.string(p.t['0lZmoa']),
        buttonCTA: p.intl.string(p.t.RzWDqa),
        buttonProps: { color: o.ButtonColors.WHITE },
        caretPosition: c.DF.BOTTOM_RIGHT,
        onClick: v,
        markAsDismissed: n
    });
}
