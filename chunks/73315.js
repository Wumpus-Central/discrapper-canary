n(627341);
var i = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    l = n(278074),
    s = n(481060),
    r = n(169525),
    c = n(102021);
t.Z = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    return (0, l.EQ)(t)
        .with(r.wk.EXPLICIT_CONTENT, () =>
            (0, i.jsx)(s.ImageWarningIcon, {
                className: a()(n, c.obscuredIcon),
                color: 'white'
            })
        )
        .with(r.wk.SPOILER, () =>
            (0, i.jsx)(s.EyeIcon, {
                size: 'md',
                color: 'currentColor',
                className: n
            })
        )
        .otherwise(() => null);
};
