function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n.d(t, {
    c: () => i,
}),
    n(896048);
class i {
    cleanUp(e) {
        this.cancel(e), this.delete(e);
    }
    cancel(e) {
        var t;
        null == (t = this.searchFetchers.get(e)) || t.cancel();
    }
    delete(e) {
        this.searchFetchers.delete(e);
    }
    get(e) {
        return this.searchFetchers.get(e);
    }
    set(e, t) {
        this.searchFetchers.set(e, t);
    }
    constructor() {
        r(this, "searchFetchers", new Map());
    }
}
