n.d(t, { V: () => s });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(254477);
function s(e) {
    let { asset: t, size: n = "md", className: i } = e,
        s = o()(
            a.asset,
            {
                [a.assetPlaceholder]: null == t && !1,
                [a["asset--".concat(n)]]: null != n,
            },
            i,
        );
    return (0, r.jsx)("div", {
        className: s,
        children: null != t ? t : null,
    });
}
