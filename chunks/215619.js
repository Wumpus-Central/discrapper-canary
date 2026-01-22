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

function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = 0x811c9dc5,
        r = e.length;
    n ^= t;
    for (var i = 0; i < r; i++) n = Math.imul(n ^ e.charCodeAt(i), 0x1000193);
    return n >>> 0;
}

function a(e, t, n, r) {
    for (let a = 0; a < t; ++a) r[a] = i(e, n[a]);
}

function s(e) {
    return e <= 0 ? 1 : (e--, (e |= e >> 1), (e |= e >> 2), (e |= e >> 4), (e |= e >> 8), (e |= e >> 16), ++e);
}
n.d(t, {
    M: () => o,
}),
    n(65821),
    n(927092),
    n(212978),
    n(834879),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
class o {
    static createEstimate(e, t) {
        if (e <= 0 || e >= 1 || t <= 0 || t >= 1) throw Error("Epsilon and delta must be between 0 and 1 (exclusive)");
        return new o(s(Math.ceil(Math.E / e)), Math.ceil(Math.log(1 / t)));
    }
    update(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (t <= 0) return;
        a(e, this.depth, this.seeds, this.scratchHashes);
        let n = this.width,
            r = n - 1,
            i = this.scratchHashes;
        if (5 === this.depth)
            (this.table[(i[0] & r) + 0 * n] += t),
                (this.table[(i[1] & r) + +n] += t),
                (this.table[(i[2] & r) + 2 * n] += t),
                (this.table[(i[3] & r) + 3 * n] += t),
                (this.table[(i[4] & r) + 4 * n] += t);
        else
            for (let e = 0; e < this.depth; ++e) {
                let a = (i[e] & r) + e * n;
                this.table[a] += t;
            }
    }
    query(e) {
        a(e, this.depth, this.seeds, this.scratchHashes);
        let t = 1 / 0,
            n = this.width,
            r = n - 1,
            i = this.scratchHashes;
        if (5 === this.depth)
            t = Math.min(
                (t = Math.min(
                    (t = Math.min(
                        (t = Math.min((t = Math.min(t, this.table[(i[0] & r) + 0 * n])), this.table[(i[1] & r) + +n])),
                        this.table[(i[2] & r) + 2 * n],
                    )),
                    this.table[(i[3] & r) + 3 * n],
                )),
                this.table[(i[4] & r) + 4 * n],
            );
        else
            for (let e = 0; e < this.depth; ++e) {
                let a = (i[e] & r) + e * n;
                t = Math.min(t, this.table[a]);
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
        return {
            width: this.width,
            depth: this.depth,
            table: Array.from(this.table),
        };
    }
    static fromJSON(e) {
        if (!e || "object" != typeof e || !e.width || !e.depth || !Array.isArray(e.table))
            throw Error("Invalid data format for CountMinSketch reconstruction");
        let t = new o(e.width, e.depth);
        if (t.table.length !== e.table.length)
            throw Error("Table length mismatch: expected ".concat(t.table.length, ", got ").concat(e.table.length));
        return t.table.set(e.table), t;
    }
    constructor(e, t) {
        if (
            (r(this, "width", void 0),
            r(this, "depth", void 0),
            r(this, "table", void 0),
            r(this, "seeds", void 0),
            r(this, "scratchHashes", void 0),
            e <= 0 || t <= 0)
        )
            throw Error("Width and depth must be positive integers");
        (this.width = s(0 | e)),
            (this.depth = 0 | t),
            (this.table = new Uint32Array(this.width * this.depth)),
            (this.scratchHashes = new Uint32Array(this.depth)),
            (this.seeds = Array(this.depth));
        for (let e = 0; e < this.depth; e++) this.seeds[e] = e;
    }
}
