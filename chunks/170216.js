n.d(t, { L: () => r }), n(388685);
class r {
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
        !(function (e, t, n) {
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = n);
        })(this, "searchFetchers", new Map());
    }
}
