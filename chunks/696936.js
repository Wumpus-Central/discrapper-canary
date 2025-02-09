e.d(s, {
    W: () => o,
    Z: () => l
});
var n = e(200651);
e(192379);
var i = e(120356),
    r = e.n(i),
    a = e(481060),
    c = e(734991);
let o = {
    RED: c.redMessageBlock,
    YELLOW: c.yellowMessageBlock,
    BROWN: c.brownMessageBlock
};
function l(t) {
    let { color: s, icon: e, children: i, className: o } = t;
    return (0, n.jsx)(a.kzN, {
        icon: (t) =>
            (0, n.jsx)(e, {
                height: 20,
                width: 20,
                ...t
            }),
        iconClassName: c.messageBlockIcon,
        className: r()(s, o),
        children: i
    });
}
