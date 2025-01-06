e.d(n, {
    W: function () {
        return a;
    },
    Z: function () {
        return c;
    }
});
var i = e(200651);
e(192379);
var s = e(120356),
    r = e.n(s),
    l = e(481060),
    o = e(759821);
let a = {
    RED: o.redMessageBlock,
    YELLOW: o.yellowMessageBlock,
    BROWN: o.brownMessageBlock
};
function c(t) {
    let { color: n, icon: e, children: s, className: a } = t;
    return (0, i.jsx)(l.FormErrorBlock, {
        icon: (t) =>
            (0, i.jsx)(e, {
                height: 20,
                width: 20,
                ...t
            }),
        iconClassName: o.messageBlockIcon,
        className: r()(n, a),
        children: s
    });
}
