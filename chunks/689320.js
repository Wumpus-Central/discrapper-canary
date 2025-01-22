r.d(n, {
    t: function () {
        return l;
    }
});
var i = r(47120);
function a(e, n, r) {
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
let o = Symbol.iterator;
class s {
    [o]() {
        return this;
    }
    next() {
        for (; this.index < this.items.length; ) {
            let e = this.items[this.index].next();
            if (!e.done) return e;
            this.index += 1;
        }
        return {
            done: !0,
            value: void 0
        };
    }
    constructor(e) {
        a(this, 'index', void 0), a(this, 'items', void 0), (this.index = 0), (this.items = e);
    }
}
function l() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return new s(n);
}
