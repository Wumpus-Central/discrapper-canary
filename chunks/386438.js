n.d(t, { Z: () => o }), n(51350);
var r = n(149765);
function i(e, t, n) {
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
class o {
    static has(e, t) {
        return (e & t) != 0;
    }
    static asBasicFlag(e) {
        let t = 20;
        return r.ug(t, e);
    }
    static asBigFlag(e) {
        return Object.hasOwn(this.cache, e) || (this.cache[e] = r.vB(e)), this.cache[e];
    }
}
i(o, 'cache', {});
