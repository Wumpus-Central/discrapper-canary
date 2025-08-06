n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(755721),
    s = n(481060),
    l = n(702107);
let c = (e) => {
    let { className: t, onDismiss: n, 'aria-label': i } = e;
    return (0, r.jsx)(a.zx, {
        look: a.zx.Looks.BLANK,
        size: a.zx.Sizes.NONE,
        onClick: n,
        className: o()(l.dismissButton, t),
        'aria-label': i,
        children: (0, r.jsx)(s.Dio, {
            size: 'xs',
            color: 'currentColor',
            colorClass: l.dismissIcon
        })
    });
};
c.displayName = 'DismissButton';
let u = c;
