n.d(t, { Z: () => a }), n(51350);
var i = n(149765);
function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a {
    static has(e, t) {
        return (e & t) != 0;
    }
    static asBasicFlag(e) {
        let t = 20;
        return i.ug(t, e);
    }
    static asBigFlag(e) {
        return Object.hasOwn(this.cache, e) || (this.cache[e] = i.vB(e)), this.cache[e];
    }
}
r(a, 'cache', {});
