"use strict";
n.d(t, { A: () => r });
class r {
    val;
    loading = !1;
    loaded = !1;
    param;
    loader;
    constructor(e) {
        this.loader = e;
    }
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
}
