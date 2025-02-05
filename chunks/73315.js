i.d(t, { Z: () => d }), i(627341);
var n = i(200651);
i(192379);
var a = i(120356),
    o = i.n(a),
    s = i(278074),
    l = i(481060),
    r = i(169525),
    c = i(102021);
let d = (e) => {
    let { obscureReason: t, iconClassname: i } = e;
    return (0, s.EQ)(t)
        .with(r.wk.EXPLICIT_CONTENT, () =>
            (0, n.jsx)(l.fFY, {
                className: o()(i, c.obscuredIcon),
                color: 'white'
            })
        )
        .with(r.wk.SPOILER, () =>
            (0, n.jsx)(l.tEF, {
                size: 'md',
                color: 'currentColor',
                className: i
            })
        )
        .otherwise(() => null);
};
