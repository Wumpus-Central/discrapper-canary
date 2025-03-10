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
n.d(t, {
    T: () => i,
    g: () => l
});
class i {
    asDefault() {
        this.config = void 0;
    }
    asOverride(e) {
        this.config = e;
    }
    isDefault() {
        return void 0 === this.config;
    }
    constructor(e) {
        r(this, 'config', void 0), (this.config = e);
    }
}
class l {
    constructor(e) {
        r(this, 'config', void 0), (this.config = e.config);
    }
}
