n.d(t, {
    W: function () {
        return l;
    },
    Z: function () {
        return a;
    }
});
var s = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    o = n(481060),
    c = n(759821);
let l = {
    RED: c.redMessageBlock,
    YELLOW: c.yellowMessageBlock,
    BROWN: c.brownMessageBlock
};
function a(e) {
    let { color: t, icon: n, children: i, className: l } = e;
    return (0, s.jsx)(o.FormErrorBlock, {
        icon: (e) =>
            (0, s.jsx)(n, {
                height: 20,
                width: 20,
                ...e
            }),
        iconClassName: c.messageBlockIcon,
        className: r()(t, l),
        children: i
    });
}
