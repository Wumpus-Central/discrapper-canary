n.d(t, { A: () => s });
var r = n(177068),
    i = n(409037);
class a extends i.c {
    create(e) {
        let { id: t, searchType: n, searchQuery: i } = e;
        this.cancel(t);
        let a = new r.MS(t, n, i);
        return this.set(t, a), a;
    }
}
let s = new a();
