n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    s = n(936141),
    a = n(500984);
let c = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    switch (t) {
        case s.wk.EXPLICIT_CONTENT:
        case s.wk.GORE_CONTENT:
            return (0, i.jsx)(o.fFY, {
                className: l()(n, a.obscuredIcon),
                color: 'white'
            });
        case s.wk.SPOILER:
            return (0, i.jsx)(o.tEF, {
                size: 'md',
                color: 'currentColor',
                className: n
            });
        default:
            return null;
    }
};
