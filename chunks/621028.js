r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(501951);
function a(e, n, r) {
    return (
        (n = (0, i.Z)(n)) in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
