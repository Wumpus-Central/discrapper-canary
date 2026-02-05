i.d(e, { A: () => s }), i(321073);
var n = i(243456),
    r = i(629802);
async function a(t, e, i, a, s) {
    let h = s;
    if (null == h) {
        let t = await fetch(a);
        if (!t.ok) throw Error(`Error fetching sticker at ${a}`);
        h = await t.text();
    }
    if (null == h) return null;
    await (0, r.n)();
    let o = new r.A(h);
    return new n.A(o, t, e, i);
}
let s = new (class {
    entries;
    referenceCounts;
    constructor() {
        (this.entries = []), (this.referenceCounts = new Map());
    }
    create(t, e, i, n, r) {
        let s = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
        return this.getCached(t).then((h) => {
            if ((this.referenceCounts.set(t, (this.referenceCounts.get(t) ?? 0) + 1), h)) return h;
            let o = { key: t, promise: a(t, e, i, n, r) };
            return (
                s &&
                    (this.entries.push(o),
                    o.promise.then((e) => (null == e && this.removeEntry(t), e)).catch((e) => this.removeEntry(t)),
                    this.entries.length > 50 && this.removeEntryAt(0)),
                o.promise
            );
        });
    }
    drop(t) {
        this.removeEntry(t);
    }
    getCached(t) {
        let e = this.entries.findIndex((e) => e.key === t);
        if (e >= 0) {
            let t = this.entries[e];
            return (
                this.entries.splice(e, 1),
                this.entries.push(t),
                t.promise.then((t) => (null == t && this.removeEntryAt(e), t))
            );
        }
        return Promise.resolve(null);
    }
    removeEntry(t) {
        let e = this.entries.findIndex((e) => e.key === t);
        if (!(e >= 0)) return null;
        this.removeEntryAt(e);
    }
    removeEntryAt(t) {
        let e = this.entries[t],
            i = this.referenceCounts.get(e.key);
        return null != i && i > 1
            ? (this.referenceCounts.set(e.key, i - 1), null)
            : (this.entries.splice(t, 1), this.referenceCounts.delete(e.key), e.promise.then((t) => t?.drop()), e);
    }
})();
