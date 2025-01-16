s.d(t, {
    W: function () {
        return a;
    },
    Z: function () {
        return l;
    }
});
var n = s(200651);
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
function l(e) {
    let { color: t, icon: s, children: i, className: a } = e;
    return (0, n.jsx)(o.FormErrorBlock, {
        icon: (e) =>
            (0, n.jsx)(s, {
                height: 20,
                width: 20,
                ...e
            }),
        iconClassName: c.messageBlockIcon,
        className: r()(t, a),
        children: i
    });
}
