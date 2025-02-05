n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    s = n(932209);
let o = (e) => {
    let { className: t, onDismiss: n, 'aria-label': i } = e;
    return (0, l.jsx)(a.zxk, {
        look: a.zxk.Looks.BLANK,
        size: a.zxk.Sizes.NONE,
        onClick: n,
        className: r()(s.dismissButton, t),
        'aria-label': i,
        children: (0, l.jsx)(a.Dio, {
            size: 'xs',
            color: 'currentColor',
            colorClass: s.dismissIcon
        })
    });
};
o.displayName = 'DismissButton';
let u = o;
