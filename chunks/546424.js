n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(541716),
    c = n(28546),
    u = n(970731),
    d = n(210887),
    _ = n(921944),
    f = n(957825),
    p = n(231338),
    h = n(388032),
    m = n(245541),
    g = n(512668),
    E = n(179998);
function b(e) {
    let { markAsDismissed: t } = e,
        n = (0, a.e7)([d.Z], () => d.Z.theme) === p.BR.LIGHT ? E.Z : g.Z,
        b = i.useCallback(() => {
            (0, c.RO)(f.X1.SOUNDBOARD, l.Ie.NORMAL);
        }, []);
    return (0, r.jsx)(u.ZP, {
        className: m.container,
        asset: (0, r.jsxs)('div', {
            className: m.headerContainer,
            children: [
                (0, r.jsx)('img', {
                    className: m.asset,
                    src: n,
                    alt: ''
                }),
                (0, r.jsx)(o.zx, {
                    className: m.close,
                    'aria-label': h.intl.string(h.t.cpT0Cg),
                    look: o.zx.Looks.BLANK,
                    size: o.zx.Sizes.NONE,
                    onClick: () => t(_.L.USER_DISMISS),
                    children: (0, r.jsx)(s.Dio, {
                        size: 'xs',
                        className: m.closeIcon,
                        color: 'white'
                    })
                })
            ]
        }),
        header: h.intl.string(h.t.dDj3ER),
        content: h.intl.string(h.t['0lZmoa']),
        buttonCTA: h.intl.string(h.t.RzWDqa),
        buttonProps: { color: o.Tt.WHITE },
        caretPosition: u.DF.BOTTOM_RIGHT,
        onClick: b,
        markAsDismissed: t
    });
}
