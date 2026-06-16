"use strict";
n.d(t, { A: () => a });
var i = n(177068),
    r = n(409037);
class s extends r.c {
    create(e) {
        let { id: t, searchType: n, searchQuery: r } = e;
        this.cancel(t);
        let s = new i.MS(t, n, r);
        return this.set(t, s), s;
    }
}
let a = new s();
