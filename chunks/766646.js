n.d(t, { n: () => s });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(782992);
function s(e) {
    let { id: t, tag: n = 'span', showOnFocus: i, children: s } = e;
    return (0, r.jsx)(n, {
        id: t,
        className: o()({
            [a.hiddenVisually]: !i,
            [a.showOnFocus]: i
        }),
        children: s
    });
}
