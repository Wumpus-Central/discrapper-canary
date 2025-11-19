n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(257914);
function c(e) {
    let { onClick: t, icon: n, tooltip: i, className: c } = e,
        u = n({
            color: "currentColor",
            size: "custom",
            width: 20,
            height: 20,
        });
    return (0, r.jsx)(o.u, {
        text: i,
        position: "bottom",
        children: (0, r.jsx)(s.kL8, {
            onClick: (e) => {
                t(e);
            },
            "aria-label": i,
            className: a()(l.button, c),
            children: (0, r.jsx)("div", {
                className: l.buttonInner,
                children: u,
            }),
        }),
    });
}
