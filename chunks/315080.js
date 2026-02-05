"use strict";
n.d(t, { A: () => i });
var r = n(829070);
class i {
    create(e) {
        let t = this.freeTasks,
            n = t.length ? t.pop() : new r.a(this.onError, (e) => (t[t.length] = e));
        return (n.task = e), n;
    }
    constructor(e) {
        (this.onError = e), (this.freeTasks = []);
    }
}
