n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(755721),
    s = n(481060),
    c = n(702107);
let a = (e) => {
    let { className: t, onDismiss: n, 'aria-label': r } = e;
    return (0, i.jsx)(o.zx, {
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        onClick: n,
        className: l()(c.dismissButton, t),
        'aria-label': r,
        children: (0, i.jsx)(s.Dio, {
            size: 'xs',
            color: 'currentColor',
            colorClass: c.dismissIcon
        })
    });
};
a.displayName = 'DismissButton';
let u = a;
