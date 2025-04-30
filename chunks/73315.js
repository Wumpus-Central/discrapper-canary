n.d(t, { Z: () => u }), n(314940);
var i = n(200651);
n(192379);
var r = n(120356),
    o = n.n(r),
    a = n(278074),
    s = n(481060),
    l = n(169525),
    c = n(500984);
let u = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    return (0, a.EQ)(t)
        .with(l.wk.EXPLICIT_CONTENT, () =>
            (0, i.jsx)(s.fFY, {
                className: o()(n, c.obscuredIcon),
                color: 'white'
            })
        )
        .with(l.wk.SPOILER, () =>
            (0, i.jsx)(s.tEF, {
                size: 'md',
                color: 'currentColor',
                className: n
            })
        )
        .otherwise(() => null);
};
