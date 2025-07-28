n.d(t, { Z: () => a });
var r = n(558706),
    i = n(170216);
class l extends i.L {
    create(e) {
        let { id: t, searchType: n, searchQuery: i } = e;
        this.cancel(t);
        let l = new r.Yn(t, n, i);
        return (this.set(t, l), l);
    }
}
let a = new l();
