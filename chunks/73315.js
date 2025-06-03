n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var r = n(120356),
    o = n.n(r),
    l = n(481060),
    a = n(169525),
    s = n(500984);
let c = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    switch (t) {
        case a.wk.EXPLICIT_CONTENT:
        case a.wk.GORE_CONTENT:
            return (0, i.jsx)(l.fFY, {
                className: o()(n, s.obscuredIcon),
                color: 'white'
            });
        case a.wk.SPOILER:
            return (0, i.jsx)(l.tEF, {
                size: 'md',
                color: 'currentColor',
                className: n
            });
        default:
            return null;
    }
};
