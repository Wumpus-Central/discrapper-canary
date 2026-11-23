var r = s(177068),
    n = s(409037);
class a extends n.c {
    create(e) {
        let { id: t, searchType: s, searchQuery: n } = e;
        this.cancel(t);
        let a = new r.MS(t, s, n);
        return (this.set(t, a), a);
    }
}
let i = new a();
s.d(t, {}, { A: i });
