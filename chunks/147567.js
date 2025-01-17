class n {
    constructor() {
        (this.max = 1000), (this.map = new Map());
    }
    get(e) {
        let n = this.map.get(e);
        if (void 0 !== n) return this.map.delete(e), this.map.set(e, n), n;
    }
    delete(e) {
        return this.map.delete(e);
    }
    set(e, n) {
        if (!this.delete(e) && void 0 !== n) {
            if (this.map.size >= this.max) {
                let e = this.map.keys().next().value;
                this.delete(e);
            }
            this.map.set(e, n);
        }
        return this;
    }
}
e.exports = n;
