r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(541716),
    u = r(28546),
    c = r(970731),
    d = r(210887),
    f = r(921944),
    p = r(957825),
    h = r(231338),
    _ = r(388032),
    m = r(551049),
    g = r(512668),
    E = r(179998);
function v(e) {
    let { markAsDismissed: n } = e,
        r = (0, o.e7)([d.Z], () => d.Z.theme) === h.BR.LIGHT ? E.Z : g.Z,
        v = a.useCallback(() => {
            (0, u.RO)(p.X1.SOUNDBOARD, l.Ie.NORMAL);
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
                (0, i.jsx)(s.Button, {
                    className: m.close,
                    'aria-label': _.intl.string(_.t.cpT0Cg),
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.NONE,
                    onClick: () => n(f.L.USER_DISMISS),
                    children: (0, i.jsx)(s.XSmallIcon, {
                        size: 'xs',
                        className: m.closeIcon,
                        color: 'white'
                    })
                })
            ]
        }),
        header: _.intl.string(_.t.dDj3ER),
        content: _.intl.string(_.t['0lZmoa']),
        buttonCTA: _.intl.string(_.t.RzWDqa),
        buttonProps: { color: s.ButtonColors.WHITE },
        caretPosition: c.DF.BOTTOM_RIGHT,
        onClick: v,
        markAsDismissed: n
    });
}
