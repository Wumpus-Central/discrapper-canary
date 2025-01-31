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
n.d(t, { Z: () => r }), n(47120);
class r {
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
        i(this, 'listeners', new Set()),
            i(this, 'add', (e) => {
                this.listeners.add(e);
            }),
            i(this, 'remove', (e) => {
                this.listeners.delete(e);
            }),
            i(this, 'addConditional', function (t) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (n && !1 === t()) return;
                let i = () => {
                    !1 === t() && e.remove(i);
                };
                e.add(i);
            });
    }
}
