var n = i(200651);
i(192379);
var l = i(120356),
    o = i.n(l),
    s = i(481060),
    r = i(932209);
let a = (e) => {
    let { className: t, onDismiss: i, 'aria-label': l } = e;
    return (0, n.jsx)(s.Button, {
        look: s.Button.Looks.BLANK,
        size: s.Button.Sizes.NONE,
        onClick: i,
        className: o()(r.dismissButton, t),
        'aria-label': l,
        children: (0, n.jsx)(s.XSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            colorClass: r.dismissIcon
        })
    });
};
(a.displayName = 'DismissButton'), (t.Z = a);
