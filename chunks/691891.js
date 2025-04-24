n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    s = n(702107);
let c = (e) => {
    let { className: t, onDismiss: n, 'aria-label': r } = e;
    return (0, i.jsx)(o.zxk, {
        look: o.zxk.Looks.BLANK,
        size: o.zxk.Sizes.NONE,
        onClick: n,
        className: l()(s.dismissButton, t),
        'aria-label': r,
        children: (0, i.jsx)(o.Dio, {
            size: 'xs',
            color: 'currentColor',
            colorClass: s.dismissIcon
        })
    });
};
c.displayName = 'DismissButton';
let a = c;
