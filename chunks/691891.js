n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(447651);
let s = (e) => {
    let { className: t, onDismiss: n, 'aria-label': l } = e;
    return (0, r.jsx)(a.zxk, {
        look: a.zxk.Looks.BLANK,
        size: a.zxk.Sizes.NONE,
        onClick: n,
        className: i()(o.dismissButton, t),
        'aria-label': l,
        children: (0, r.jsx)(a.Dio, {
            size: 'xs',
            color: 'currentColor',
            colorClass: o.dismissIcon
        })
    });
};
s.displayName = 'DismissButton';
let c = s;
