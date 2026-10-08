(n.d(t, { g: () => i }), n(134528), n(947204));
class i {
    seqOf;
    items = [];
    cached = null;
    constructor(e) {
        this.seqOf = e;
    }
    at(e) {
        return this.items.at(e);
    }
    findIndex(e) {
        return this.items.findIndex(e);
    }
    indexOfSeq(e) {
        let t = 0,
            n = this.items.length - 1;
        for (; t <= n;) {
            let i = (t + n) >> 1,
                r = this.keyOf(this.items[i]);
            if (r === e) return i;
            r < e ? (t = i + 1) : (n = i - 1);
        }
        return -1;
    }
    insert(e) {
        let t = this.keyOf(e),
            n = this.items.length;
        for (; n > 0 && this.keyOf(this.items[n - 1]) > t;) n--;
        (this.items.splice(n, 0, e), (this.cached = null));
    }
    replace(e, t) {
        if (this.keyOf(this.items[e]) === this.keyOf(t)) {
            ((this.items[e] = t), (this.cached = null));
            return;
        }
        (this.items.splice(e, 1), this.insert(t));
    }
    retain(e) {
        let t = this.items.filter(e);
        t.length !== this.items.length && ((this.items = t), (this.cached = null));
    }
    trim(e) {
        this.items.length <= e || (this.items.splice(0, this.items.length - e), (this.cached = null));
    }
    values() {
        return this.items;
    }
    snapshot() {
        return ((this.cached ??= this.items.slice()), this.cached);
    }
    keyOf(e) {
        return this.seqOf(e) ?? 1 / 0;
    }
}
