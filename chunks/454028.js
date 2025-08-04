n.d(t, { V: () => s });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(669546);
function s(e) {
    let { asset: t, size: n = 'md', className: i } = e,
        s = a()(
            o.asset,
            {
                [o.assetPlaceholder]: null == t && !1,
                [o['asset--'.concat(n)]]: null != n
            },
            i
        );
    return (0, r.jsx)('div', {
        className: s,
        children: null != t ? t : null
    });
}
