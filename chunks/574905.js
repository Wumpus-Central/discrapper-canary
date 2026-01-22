n.d(t, {
    TQ: () => o,
    ol: () => l,
    r9: () => s,
});
var r = n(294946),
    i = n(15020);

function a(e, t, n, r) {
    if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
    let i = BigInt(32),
        a = BigInt(0xffffffff),
        s = Number((n >> i) & a),
        o = Number(n & a),
        l = 4 * !!r,
        c = 4 * !r;
    e.setUint32(t + l, s, r), e.setUint32(t + c, o, r);
}
let s = (e, t, n) => (e & t) ^ (~e & n),
    o = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
class l extends i.Vw {
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
            (this.view = (0, i.O8)(this.buffer));
    }
    update(e) {
        (0, r.t2)(this);
        let { view: t, buffer: n, blockLen: a } = this,
            s = (e = (0, i.ZJ)(e)).length;
        for (let r = 0; r < s; ) {
            let o = Math.min(a - this.pos, s - r);
            if (o === a) {
                let t = (0, i.O8)(e);
                for (; a <= s - r; r += a) this.process(t, r);
                continue;
            }
            n.set(e.subarray(r, r + o), this.pos),
                (this.pos += o),
                (r += o),
                this.pos === a && (this.process(t, 0), (this.pos = 0));
        }
        return (this.length += e.length), this.roundClean(), this;
    }
    digestInto(e) {
        (0, r.t2)(this), (0, r.CG)(e, this), (this.finished = !0);
        let { buffer: t, view: n, blockLen: s, isLE: o } = this,
            { pos: l } = this;
        (t[l++] = 128), this.buffer.subarray(l).fill(0), this.padOffset > s - l && (this.process(n, 0), (l = 0));
        for (let e = l; e < s; e++) t[e] = 0;
        a(n, s - 8, BigInt(8 * this.length), o), this.process(n, 0);
        let c = (0, i.O8)(e),
            u = this.outputLen;
        if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let d = u / 4,
            f = this.get();
        if (d > f.length) throw Error("_sha2: outputLen bigger than state");
        for (let e = 0; e < d; e++) c.setUint32(4 * e, f[e], o);
    }
    digest() {
        let { buffer: e, outputLen: t } = this;
        this.digestInto(e);
        let n = e.slice(0, t);
        return this.destroy(), n;
    }
    _cloneInto(e) {
        e || (e = new this.constructor()), e.set(...this.get());
        let { blockLen: t, buffer: n, length: r, finished: i, destroyed: a, pos: s } = this;
        return (e.length = r), (e.pos = s), (e.finished = i), (e.destroyed = a), r % t && e.buffer.set(n), e;
    }
}
