n.d(t, {
    VR: () => l,
    bc: () => a,
    l3: () => s,
});
var r = n(134994),
    i = n(492733);
function o(e, t, n, r) {
    if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
    let i = BigInt(32),
        o = BigInt(4294967295),
        a = Number((n >> i) & o),
        s = Number(n & o),
        l = 4 * !!r,
        c = 4 * !r;
    e.setUint32(t + l, a, r), e.setUint32(t + c, s, r);
}
let a = (e, t, n) => (e & t) ^ (~e & n),
    s = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
class l extends i.kb {
    constructor(e, t, n, r) {
        super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.GL)(this.buffer));
    }
    update(e) {
        (0, r.Gg)(this);
        let { view: t, buffer: n, blockLen: o } = this,
            a = (e = (0, i.O0)(e)).length;
        for (let r = 0; r < a; ) {
            let s = Math.min(o - this.pos, a - r);
            if (s === o) {
                let t = (0, i.GL)(e);
                for (; o <= a - r; r += o) this.process(t, r);
                continue;
            }
            n.set(e.subarray(r, r + s), this.pos),
                (this.pos += s),
                (r += s),
                this.pos === o && (this.process(t, 0), (this.pos = 0));
        }
        return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
        (0, r.Gg)(this), (0, r.J8)(e, this), (this.finished = !0);
        let { buffer: t, view: n, blockLen: a, isLE: s } = this,
            { pos: l } = this;
        (t[l++] = 128), this.buffer.subarray(l).fill(0), this.padOffset > a - l && (this.process(n, 0), (l = 0));
        for (let e = l; e < a; e++) t[e] = 0;
        o(n, a - 8, BigInt(8 * this.length), s), this.process(n, 0);
        let c = (0, i.GL)(e),
            u = this.outputLen;
        if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let d = u / 4,
            f = this.get();
        if (d > f.length) throw Error("_sha2: outputLen bigger than state");
        for (let e = 0; e < d; e++) c.setUint32(4 * e, f[e], s);
    }
    digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let n = e.slice(0, t);
        return this.destroy(), n;
    }
    _cloneInto(e) {
        e || (e = new this.constructor()), e.set(...this.get());
        let { blockLen: t, buffer: n, length: r, finished: i, destroyed: o, pos: a } = this;
        return (e.length = r), (e.pos = a), (e.finished = i), (e.destroyed = o), r % t && e.buffer.set(n), e;
    }
}
