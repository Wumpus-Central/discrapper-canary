var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(932209);
let o = (e) => {
    let { className: t, onDismiss: n, 'aria-label': l } = e;
    return (0, i.jsx)(a.Button, {
        look: a.Button.Looks.BLANK,
        size: a.Button.Sizes.NONE,
        onClick: n,
        className: r()(s.dismissButton, t),
        'aria-label': l,
        children: (0, i.jsx)(a.XSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            colorClass: s.dismissIcon
        })
    });
};
(o.displayName = 'DismissButton'), (t.Z = o);
