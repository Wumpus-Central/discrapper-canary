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
n.d(t, { Z: () => i });
class i {
    setParams(e) {
        this.param !== e && ((this.param = e), (this.loading = !1), (this.loaded = !1));
    }
    get() {
        return this.ensureLoaded(), this.val;
    }
    ensureLoaded() {
        if (this.loaded || this.loading || void 0 === this.param) return;
        let e = this.param;
        (this.loading = !0),
            this.loader(e).then((t) => {
                e === this.param && ((this.val = t), (this.loading = !1), (this.loaded = !0));
            });
    }
    constructor(e) {
        r(this, 'val', void 0), r(this, 'loading', !1), r(this, 'loaded', !1), r(this, 'param', void 0), r(this, 'loader', void 0), (this.loader = e);
    }
}
