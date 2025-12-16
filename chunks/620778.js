function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { p: () => i }), n(388685);
class i {
    empty() {
        return 0 === this.pending.size && 0 === this.fetching.size;
    }
    status(e) {
        return this.pending.has(e) ? 0 : this.fetching.has(e) ? 1 : null;
    }
    addWant(e) {
        this.fetching.has(e) || this.pending.add(e);
    }
    removeWant(e) {
        this.pending.delete(e), this.fetching.delete(e);
    }
    nextWants(e) {
        let t = [...this.pending];
        return (t.length = Math.min(e, t.length)), t;
    }
    markFetching(e) {
        for (let t of e) this.pending.delete(t), this.fetching.add(t);
    }
    markCompleted(e) {
        for (let t of e) this.pending.delete(t), this.fetching.delete(t);
    }
    markFailed(e) {
        for (let t of e) this.pending.add(t), this.fetching.delete(t);
    }
    async try(e, t) {
        try {
            this.markFetching(e);
            let n = await t();
            return this.markCompleted(e), n;
        } catch (t) {
            throw (this.markFailed(e), t);
        }
    }
    constructor() {
        r(this, "pending", new Set()), r(this, "fetching", new Set());
    }
}
