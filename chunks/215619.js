"use strict";
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = 0x811c9dc5,
        r = e.length;
    n ^= t;
    for (var i = 0; i < r; i++) n = Math.imul(n ^ e.charCodeAt(i), 0x1000193);
    return n >>> 0;
}
function i(e, t, n, i) {
    for (let a = 0; a < t; ++a) i[a] = r(e, n[a]);
}
function a(e) {
    return e <= 0 ? 1 : (e--, (e |= e >> 1), (e |= e >> 2), (e |= e >> 4), (e |= e >> 8), (e |= e >> 16), ++e);
}
n.d(t, { M: () => s }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
class s {
    width;
    depth;
    table;
    seeds;
    scratchHashes;
    constructor(e, t) {
        if (e <= 0 || t <= 0) throw Error("Width and depth must be positive integers");
        (this.width = a(0 | e)),
            (this.depth = 0 | t),
            (this.table = new Uint32Array(this.width * this.depth)),
            (this.scratchHashes = new Uint32Array(this.depth)),
            (this.seeds = Array(this.depth));
        for (let e = 0; e < this.depth; e++) this.seeds[e] = e;
    }
    static createEstimate(e, t) {
        if (e <= 0 || e >= 1 || t <= 0 || t >= 1) throw Error("Epsilon and delta must be between 0 and 1 (exclusive)");
        return new s(a(Math.ceil(Math.E / e)), Math.ceil(Math.log(1 / t)));
    }
    update(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (t <= 0) return;
        i(e, this.depth, this.seeds, this.scratchHashes);
        let n = this.width,
            r = n - 1,
            a = this.scratchHashes;
        if (5 === this.depth)
            (this.table[(a[0] & r) + 0 * n] += t),
                (this.table[(a[1] & r) + +n] += t),
                (this.table[(a[2] & r) + 2 * n] += t),
                (this.table[(a[3] & r) + 3 * n] += t),
                (this.table[(a[4] & r) + 4 * n] += t);
        else
            for (let e = 0; e < this.depth; ++e) {
                let i = (a[e] & r) + e * n;
                this.table[i] += t;
            }
    }
    query(e) {
        i(e, this.depth, this.seeds, this.scratchHashes);
        let t = 1 / 0,
            n = this.width,
            r = n - 1,
            a = this.scratchHashes;
        if (5 === this.depth)
            t = Math.min(
                (t = Math.min(
                    (t = Math.min(
                        (t = Math.min((t = Math.min(t, this.table[(a[0] & r) + 0 * n])), this.table[(a[1] & r) + +n])),
                        this.table[(a[2] & r) + 2 * n],
                    )),
                    this.table[(a[3] & r) + 3 * n],
                )),
                this.table[(a[4] & r) + 4 * n],
            );
        else
            for (let e = 0; e < this.depth; ++e) {
                let i = (a[e] & r) + e * n;
                t = Math.min(t, this.table[i]);
            }
        return t;
    }
    merge(e) {
        if (this.width !== e.width || this.depth !== e.depth)
            throw Error("Cannot merge sketches with different dimensions");
        for (let t = 0; t < this.table.length; t++) this.table[t] += e.table[t];
    }
    clear() {
        this.table.fill(0);
    }
    toJSON() {
        return { width: this.width, depth: this.depth, table: Array.from(this.table) };
    }
    static fromJSON(e) {
        if (!e || "object" != typeof e || !e.width || !e.depth || !Array.isArray(e.table))
            throw Error("Invalid data format for CountMinSketch reconstruction");
        let t = new s(e.width, e.depth);
        if (t.table.length !== e.table.length)
            throw Error(`Table length mismatch: expected ${t.table.length}, got ${e.table.length}`);
        return t.table.set(e.table), t;
    }
}
