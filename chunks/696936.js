s.d(t, {
    W: () => l,
    Z: () => c
});
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    a = s(481060),
    o = s(759821);
let l = {
    RED: o.redMessageBlock,
    YELLOW: o.yellowMessageBlock,
    BROWN: o.brownMessageBlock
};
function c(e) {
    let { color: t, icon: s, children: i, className: l } = e;
    return (0, n.jsx)(a.kzN, {
        icon: (e) =>
            (0, n.jsx)(s, {
                height: 20,
                width: 20,
                ...e
            }),
        iconClassName: o.messageBlockIcon,
        className: r()(t, l),
        children: i
    });
}
