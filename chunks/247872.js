"use strict";
n.d(t, { A: () => i });
var r = n(340619);
class i {
    pool = {};
    async acquire(e, t) {
        let n = await r.A.get(e, t, this);
        return (this.pool[n.id] = n), n;
    }
    get(e) {
        let t = this.pool[e];
        return delete this.pool[e], t;
    }
    release(e) {
        if (e.pool !== this) throw Error("DesktopInputPool: Input not from this pool");
        this.pool[e.id] = e;
    }
}
