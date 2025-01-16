r.d(n, {
    n: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(398015);
function l(e) {
    let { id: n, tag: r = 'span', showOnFocus: a, children: l } = e;
    return (0, i.jsx)(r, {
        id: n,
        className: s()({
            [o.hiddenVisually]: !a,
            [o.showOnFocus]: a
        }),
        children: l
    });
}
