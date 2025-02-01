n.d(t, { Z: () => d }), n(627341);
var i = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(481060),
    r = n(169525),
    c = n(102021);
let d = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    return (0, s.EQ)(t)
        .with(r.wk.EXPLICIT_CONTENT, () =>
            (0, i.jsx)(l.fFY, {
                className: o()(n, c.obscuredIcon),
                color: 'white'
            })
        )
        .with(r.wk.SPOILER, () =>
            (0, i.jsx)(l.tEF, {
                size: 'md',
                color: 'currentColor',
                className: n
            })
        )
        .otherwise(() => null);
};
