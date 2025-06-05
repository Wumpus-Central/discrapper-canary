n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var r = n(120356),
    o = n.n(r),
    a = n(481060),
    s = n(169525),
    l = n(500984);
let c = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    switch (t) {
        case s.wk.EXPLICIT_CONTENT:
        case s.wk.GORE_CONTENT:
            return (0, i.jsx)(a.fFY, {
                className: o()(n, l.obscuredIcon),
                color: 'white'
            });
        case s.wk.SPOILER:
            return (0, i.jsx)(a.tEF, {
                size: 'md',
                color: 'currentColor',
                className: n
            });
        default:
            return null;
    }
};
