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
n.d(t, { Z: () => i }), n(47120);
class i {
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
        r(this, 'listeners', new Set()),
            r(this, 'add', (e) => {
                this.listeners.add(e);
            }),
            r(this, 'remove', (e) => {
                this.listeners.delete(e);
            }),
            r(this, 'addConditional', function (t) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (n && !1 === t()) return;
                let r = () => {
                    !1 === t() && e.remove(r);
                };
                e.add(r);
            });
    }
}
