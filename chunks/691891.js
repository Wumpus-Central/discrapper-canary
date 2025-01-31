n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(932209);
let o = (e) => {
    let { className: t, onDismiss: n, 'aria-label': l } = e;
    return (0, i.jsx)(r.zxk, {
        look: r.zxk.Looks.BLANK,
        size: r.zxk.Sizes.NONE,
        onClick: n,
        className: a()(s.dismissButton, t),
        'aria-label': l,
        children: (0, i.jsx)(r.Dio, {
            size: 'xs',
            color: 'currentColor',
            colorClass: s.dismissIcon
        })
    });
};
o.displayName = 'DismissButton';
let c = o;
