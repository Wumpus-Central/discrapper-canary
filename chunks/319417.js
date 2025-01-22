var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(443603),
    c = r(388032),
    d = r(822003);
function f(e) {
    let { onClick: n, disabled: r = !1 } = e;
    return (0, i.jsx)('div', {
        className: d.separator,
        children: (0, i.jsx)('div', {
            className: d.buttonContainer,
            children: (0, i.jsx)(u.Z, {
                className: d.button,
                innerClassName: d.innerButton,
                childClassName: s()(d.buttonChild, {
                    [d.disabled]: r,
                    [d.activeButtonChild]: !r
                }),
                onClick: n,
                disabled: r,
                isActive: !1,
                'aria-label': c.intl.string(c.t.oeb1vr),
                children: (0, i.jsx)(l.SendMessageIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: d.sendIcon
                })
            })
        })
    });
}
n.Z = a.memo(f);
