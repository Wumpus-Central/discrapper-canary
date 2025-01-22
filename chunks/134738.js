r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(335832),
    a = r(665336);
function o(e, n, r) {
    return (
        (n = (0, a.Z)(n)) in e
            ? i(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
