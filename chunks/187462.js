n.d(t, { Z: () => a });
var r = n(558706),
    s = n(170216);
class l extends s.L {
    create(e) {
        let { id: t, searchType: n, searchQuery: s } = e;
        this.cancel(t);
        let l = new r.Yn(t, n, s);
        return (this.set(t, l), l);
    }
}
let a = new l();
