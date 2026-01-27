r.d(e, {
    TQ: () => o,
    ol: () => a,
    r9: () => n,
});
var s = r(294946),
    i = r(15020);
let n = (t, e, r) => (t & e) ^ (~t & r),
    o = (t, e, r) => (t & e) ^ (t & r) ^ (e & r);
class a extends i.Vw {
    constructor(t, e, r, s) {
        super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = s),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.O8)(this.buffer));
    }
    update(t) {
        (0, s.t2)(this);
        let { view: e, buffer: r, blockLen: n } = this,
            o = (t = (0, i.ZJ)(t)).length;
        for (let s = 0; s < o; ) {
            let a = Math.min(n - this.pos, o - s);
            if (a === n) {
                let e = (0, i.O8)(t);
                for (; n <= o - s; s += n) this.process(e, s);
                continue;
            }
            r.set(t.subarray(s, s + a), this.pos),
                (this.pos += a),
                (s += a),
                this.pos === n && (this.process(e, 0), (this.pos = 0));
        }
        return (this.length += t.length), this.roundClean(), this;
    }
    digestInto(t) {
        (0, s.t2)(this), (0, s.CG)(t, this), (this.finished = !0);
        let { buffer: e, view: r, blockLen: n, isLE: o } = this,
            { pos: a } = this;
        (e[a++] = 128), this.buffer.subarray(a).fill(0), this.padOffset > n - a && (this.process(r, 0), (a = 0));
        for (let t = a; t < n; t++) e[t] = 0;
        !(function (t, e, r, s) {
            if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, r, s);
            let i = BigInt(32),
                n = BigInt(0xffffffff),
                o = Number((r >> i) & n),
                a = Number(r & n),
                h = 4 * !!s,
                f = 4 * !s;
            t.setUint32(e + h, o, s), t.setUint32(e + f, a, s);
        })(r, n - 8, BigInt(8 * this.length), o),
            this.process(r, 0);
        let h = (0, i.O8)(t),
            f = this.outputLen;
        if (f % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
        let c = f / 4,
            l = this.get();
        if (c > l.length) throw Error("_sha2: outputLen bigger than state");
        for (let t = 0; t < c; t++) h.setUint32(4 * t, l[t], o);
    }
    digest() {
        let { buffer: t, outputLen: e } = this;
        this.digestInto(t);
        let r = t.slice(0, e);
        return this.destroy(), r;
    }
    _cloneInto(t) {
        t || (t = new this.constructor()), t.set(...this.get());
        let { blockLen: e, buffer: r, length: s, finished: i, destroyed: n, pos: o } = this;
        return (t.length = s), (t.pos = o), (t.finished = i), (t.destroyed = n), s % e && t.buffer.set(r), t;
    }
}
