s.d(t, { A: () => i });
var r = s(177068),
    a = s(409037);
class n extends a.c {
    create(e) {
        let { id: t, searchType: s, searchQuery: a } = e;
        this.cancel(t);
        let n = new r.MS(t, s, a);
        return (this.set(t, n), n);
    }
}
let i = new n();
