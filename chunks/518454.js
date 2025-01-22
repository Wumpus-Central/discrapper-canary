r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(727785);
function a(e, n, r, o) {
    let { length: s } = r,
        l = o,
        u = n;
    if (0 === s) return 0;
    if (null == l) l = u;
    else if (l === u) return u;
    return (u += e === i.a8.UP ? -1 : 1) < 0 || u >= s ? a(e, u < 0 ? s : -1, r, l) : r[u].type === i.h8.HEADER ? a(e, u, r, l) : u;
}
