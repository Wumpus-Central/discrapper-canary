n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    l = n(481060),
    s = n(702107);
let c = (e) => {
    let { className: t, onDismiss: n, 'aria-label': i } = e;
    return (0, r.jsx)(l.zxk, {
        look: l.zxk.Looks.BLANK,
        size: l.zxk.Sizes.NONE,
        onClick: n,
        className: o()(s.dismissButton, t),
        'aria-label': i,
        children: (0, r.jsx)(l.Dio, {
            size: 'xs',
            color: 'currentColor',
            colorClass: s.dismissIcon
        })
    });
};
c.displayName = 'DismissButton';
let a = c;
