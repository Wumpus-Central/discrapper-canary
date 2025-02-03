s.d(t, {
    W: () => a,
    Z: () => c
});
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    o = s(481060),
    l = s(759821);
let a = {
    RED: l.redMessageBlock,
    YELLOW: l.yellowMessageBlock,
    BROWN: l.brownMessageBlock
};
function c(e) {
    let { color: t, icon: s, children: i, className: a } = e;
    return (0, n.jsx)(o.kzN, {
        icon: (e) =>
            (0, n.jsx)(s, {
                height: 20,
                width: 20,
                ...e
            }),
        iconClassName: l.messageBlockIcon,
        className: r()(t, a),
        children: i
    });
}
