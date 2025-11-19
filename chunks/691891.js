n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(613164);
let c = (e) => {
    let { className: t, onDismiss: n, "aria-label": i } = e;
    return (0, r.jsx)(o.zx, {
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        onClick: n,
        className: a()(l.dismissButton, t),
        "aria-label": i,
        children: (0, r.jsx)(s.Dio, {
            size: "xs",
            color: "currentColor",
            colorClass: l.dismissIcon,
        }),
    });
};
c.displayName = "DismissButton";
let u = c;
