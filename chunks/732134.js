n.d(e, { A: () => i });
class l extends Map {
    maxSize;
    constructor(t) {
        super(), (this.maxSize = t);
    }
    set(t, e) {
        return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(t, e);
    }
}
let i = l;
