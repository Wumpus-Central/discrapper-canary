(n.d(t, { L: () => r }), n(388685));
class r {
    cleanUp(e) {
        (this.cancel(e), this.delete(e));
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
        var e, t;
        ((e = 'searchFetchers'),
            (t = new Map()),
            e in this
                ? Object.defineProperty(this, e, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[e] = t));
    }
}
