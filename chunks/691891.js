n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(352624);
let l = (e) => {
    let { className: t, onDismiss: n, "aria-label": i } = e;
    return (0, r.jsx)(o.P3F, {
        role: "button",
        onClick: n,
        className: a()(s.dismissButton, t),
        "aria-label": i,
        children: (0, r.jsx)(o.Dio, {
            size: "xs",
            color: "currentColor",
            colorClass: s.dismissIcon,
        }),
    });
};
l.displayName = "DismissButton";
let c = l;
