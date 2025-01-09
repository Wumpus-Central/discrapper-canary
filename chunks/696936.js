s.d(n, {
    W: function () {
        return a;
    },
    Z: function () {
        return l;
    }
});
var e = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    o = s(481060),
    c = s(759821);
let a = {
    RED: c.redMessageBlock,
    YELLOW: c.yellowMessageBlock,
    BROWN: c.brownMessageBlock
};
function l(t) {
    let { color: n, icon: s, children: i, className: a } = t;
    return (0, e.jsx)(o.FormErrorBlock, {
        icon: (t) =>
            (0, e.jsx)(s, {
                height: 20,
                width: 20,
                ...t
            }),
        iconClassName: c.messageBlockIcon,
        className: r()(n, a),
        children: i
    });
}
