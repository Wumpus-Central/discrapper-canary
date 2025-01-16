r.d(n, {
    l: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(766646),
    l = r(481060),
    u = r(388032),
    c = r(558328);
function d(e) {
    let { children: n, className: r, disabled: a, required: d = !1, ...f } = e;
    return (0, i.jsxs)(l.Text, {
        tag: 'label',
        variant: 'heading-deprecated-12/normal',
        className: s()(c.label, r, {
            [c.defaultMargin]: null == r,
            [c.disabled]: a
        }),
        ...f,
        children: [
            n,
            d &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('span', {
                            className: c.required,
                            'aria-hidden': !0,
                            children: '*'
                        }),
                        (0, i.jsx)(o.n, { children: u.intl.string(u.t.EkokLy) })
                    ]
                })
        ]
    });
}
