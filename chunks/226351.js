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
n.d(t, { o: () => r });
class r {
    constructor() {
        i(this, 'promise', void 0),
            i(this, 'resolve', void 0),
            i(this, 'reject', void 0),
            (this.promise = new Promise((e, t) => {
                (this.resolve = e), (this.reject = t);
            }));
    }
}
