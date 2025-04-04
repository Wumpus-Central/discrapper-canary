n.d(t, { Z: () => u }), n(627341);
var i = n(200651);
n(192379);
var r = n(120356),
    o = n.n(r),
    a = n(278074),
    l = n(481060),
    s = n(169525),
    c = n(500984);
let u = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    return (0, a.EQ)(t)
        .with(s.wk.EXPLICIT_CONTENT, () =>
            (0, i.jsx)(l.fFY, {
                className: o()(n, c.obscuredIcon),
                color: 'white'
            })
        )
        .with(s.wk.SPOILER, () =>
            (0, i.jsx)(l.tEF, {
                size: 'md',
                color: 'currentColor',
                className: n
            })
        )
        .otherwise(() => null);
};
