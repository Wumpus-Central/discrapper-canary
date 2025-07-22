n.d(t, { Z: () => o });
var r = n(840877),
    i = n(170216);
class a extends i.L {
    create(e) {
        let { id: t, searchType: n, searchQuery: i } = e;
        this.cancel(t);
        let a = new r.Yn(t, n, i);
        return (this.set(t, a), a);
    }
}
let o = new a();
