"use strict";
n.d(t, { A: () => s });
var i = n(177068),
    r = n(409037);
class a extends r.c {
    create(e) {
        let { id: t, searchType: n, searchQuery: r } = e;
        this.cancel(t);
        let a = new i.MS(t, n, r);
        return this.set(t, a), a;
    }
}
let s = new a();
