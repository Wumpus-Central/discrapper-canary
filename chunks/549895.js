r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(653041);
var a = r(47120);
function o(e, n, r) {
    let i;
    let a = [],
        o = function () {
            for (var s = arguments.length, l = Array(s), u = 0; u < s; u++) l[u] = arguments[u];
            let c = Date.now();
            for (null != i && (clearTimeout(i), (i = null)); a.length > 0 && a[0] <= c; ) a.shift();
            a.length < e ? (a.push(c + n), r(...l)) : (i = setTimeout(() => o(...l), a[0] - c));
        };
    return o;
}
