r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(51350);
var a = r(149765);
function o(e, n, r) {
    return (
        n in e
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
class s {
    static has(e, n) {
        return (e & n) != 0;
    }
    static asBasicFlag(e) {
        let n = 20;
        return a.ug(n, e);
    }
    static asBigFlag(e) {
        return !Object.hasOwn(this.cache, e) && (this.cache[e] = a.vB(e)), this.cache[e];
    }
}
o(s, 'cache', {});
