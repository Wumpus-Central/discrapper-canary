n.d(t, { Z: () => u }), n(314940);
var i = n(255367);
n(73800);
var r = n(120356),
    o = n.n(r),
    l = n(278074),
    a = n(481060),
    s = n(169525),
    c = n(500984);
let u = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    return (0, l.EQ)(t)
        .with(s.wk.EXPLICIT_CONTENT, () =>
            (0, i.jsx)(a.fFY, {
                className: o()(n, c.obscuredIcon),
                color: 'white'
            })
        )
        .with(s.wk.SPOILER, () =>
            (0, i.jsx)(a.tEF, {
                size: 'md',
                color: 'currentColor',
                className: n
            })
        )
        .otherwise(() => null);
};
