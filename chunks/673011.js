r.d(n, {
    Z: function () {
        return o;
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
class o {
    has(e) {
        return this.listeners.has(e);
    }
    hasAny() {
        return this.listeners.size > 0;
    }
    invokeAll() {
        this.listeners.forEach((e) => e());
    }
    constructor() {
        var e = this;
        a(this, 'listeners', new Set()),
            a(this, 'add', (e) => {
                this.listeners.add(e);
            }),
            a(this, 'remove', (e) => {
                this.listeners.delete(e);
            }),
            a(this, 'addConditional', function (n) {
                let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (r && !1 === n()) return;
                let i = () => {
                    !1 === n() && e.remove(i);
                };
                e.add(i);
            });
    }
}
