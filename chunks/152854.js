n.d(i, { default: () => c });
var a = n(477900);
n(582128);
var r = n(189213),
    s = n(276983),
    e = n(17813),
    l = n(248675),
    o = n(105292);
function c(t) {
    let { appName: i, permissions: n, onDecide: c, ...d } = t;
    function u(t) {
        (c(t), d.onClose());
    }
    return (0, a.jsx)(r.a, {
        ...d,
        role: "alertdialog",
        title: (0, s.Et)(i),
        actions: [
            { text: o.intl.string(l.default.rDyl56), variant: "secondary", onClick: () => u(!1) },
            { text: o.intl.string(l.default.xbsXd9), variant: "primary", onClick: () => u(!0) },
        ],
        children: (0, a.jsx)(e.A, { permissions: n }),
    });
}
