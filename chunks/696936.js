s.d(t, {
    W: () => a,
    Z: () => c
});
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    l = s(481060),
    o = s(781215);
let a = {
    RED: o.redMessageBlock,
    YELLOW: o.yellowMessageBlock,
    BROWN: o.brownMessageBlock
};
function c(e) {
    let { color: t, icon: s, children: i, className: a } = e;
    return (0, n.jsx)(l.kzN, {
        icon: (e) =>
            (0, n.jsx)(s, {
                height: 20,
                width: 20,
                ...e
            }),
        iconClassName: o.messageBlockIcon,
        className: r()(t, a),
        children: i
    });
}
