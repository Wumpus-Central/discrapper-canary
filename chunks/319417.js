n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(443603),
    u = n(388032),
    c = n(48669);
function d(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: c.separator }),
            (0, i.jsx)('div', {
                className: c.container,
                children: (0, i.jsx)('div', {
                    className: c.buttonContainer,
                    children: (0, i.jsx)(l.Z, {
                        className: c.button,
                        innerClassName: c.innerButton,
                        childClassName: s()(c.buttonChild, {
                            [c.disabled]: n,
                            [c.activeButtonChild]: !n
                        }),
                        onClick: t,
                        disabled: n,
                        isActive: !1,
                        'aria-label': u.intl.string(u.t.oeb1vr),
                        children: (0, i.jsx)(o.Uuj, {
                            size: 'xs',
                            color: 'currentColor',
                            className: c.sendIcon
                        })
                    })
                })
            })
        ]
    });
}
let f = r.memo(d);
