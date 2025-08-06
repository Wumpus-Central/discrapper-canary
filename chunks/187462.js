n.d(t, { Z: () => a });
var r = n(558706),
    i = n(170216);
class o extends i.L {
    create(e) {
        let { id: t, searchType: n, searchQuery: i } = e;
        this.cancel(t);
        let o = new r.Yn(t, n, i);
        return this.set(t, o), o;
    }
}
let a = new o();
