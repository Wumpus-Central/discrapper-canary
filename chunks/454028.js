n.d(t, { V: () => l });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(669546);
function l(e) {
    let { asset: t, size: n = 'md', className: r } = e,
        l = s()(
            a.asset,
            {
                [a.assetPlaceholder]: null == t && !1,
                [a['asset--'.concat(n)]]: null != n
            },
            r
        );
    return (0, i.jsx)('div', {
        className: l,
        children: null != t ? t : null
    });
}
