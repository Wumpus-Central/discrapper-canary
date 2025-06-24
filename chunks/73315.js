n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var s = n(120356),
    l = n.n(s),
    a = n(481060),
    i = n(936141),
    o = n(500984);
let c = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    switch (t) {
        case i.wk.EXPLICIT_CONTENT:
        case i.wk.GORE_CONTENT:
            return (0, r.jsx)(a.fFY, {
                className: l()(n, o.obscuredIcon),
                color: 'white'
            });
        case i.wk.SPOILER:
            return (0, r.jsx)(a.tEF, {
                size: 'md',
                color: 'currentColor',
                className: n
            });
        default:
            return null;
    }
};
