n.d(t, { n: () => o });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(398015);
function o(e) {
    let { id: t, tag: n = 'span', showOnFocus: r, children: o } = e;
    return (0, i.jsx)(n, {
        id: t,
        className: a()({
            [s.hiddenVisually]: !r,
            [s.showOnFocus]: r
        }),
        children: o
    });
}
