n.d(t, { Z: () => a });
var i = n(255367);
n(73800);
var r = n(120356),
    o = n.n(r),
    l = n(481060),
    s = n(702107);
let c = (e) => {
    let { className: t, onDismiss: n, 'aria-label': r } = e;
    return (0, i.jsx)(l.zxk, {
        look: l.zxk.Looks.BLANK,
        size: l.zxk.Sizes.NONE,
        onClick: n,
        className: o()(s.dismissButton, t),
        'aria-label': r,
        children: (0, i.jsx)(l.Dio, {
            size: 'xs',
            color: 'currentColor',
            colorClass: s.dismissIcon
        })
    });
};
c.displayName = 'DismissButton';
let a = c;
