n.d(t, { V: () => a });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(669546);
function a(e) {
    let { asset: t, size: n = 'md', className: r } = e,
        a = s()(
            l.asset,
            {
                [l.assetPlaceholder]: null == t && !1,
                [l['asset--'.concat(n)]]: null != n
            },
            r
        );
    return (0, i.jsx)('div', {
        className: a,
        children: null != t ? t : null
    });
}
