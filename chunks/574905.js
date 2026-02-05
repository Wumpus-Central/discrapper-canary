s.d(e, { TQ: () => o, ol: () => a, r9: () => n });
var i = s(294946),
    r = s(15020);
let n = (t, e, s) => (t & e) ^ (~t & s),
    o = (t, e, s) => (t & e) ^ (t & s) ^ (e & s);
class a extends r.Vw {
    constructor(t, e, s, i) {
        super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = s),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, r.O8)(this.buffer));
    }
    update(t) {
        (0, i.t2)(this);
        let { view: e, buffer: s, blockLen: n } = this,
            o = (t = (0, r.ZJ)(t)).length;
        for (let i = 0; i < o; ) {
            let a = Math.min(n - this.pos, o - i);
            if (a === n) {
                let e = (0, r.O8)(t);
                for (; n <= o - i; i += n) this.process(e, i);
                continue;
            }
            s.set(t.subarray(i, i + a), this.pos),
                (this.pos += a),
                (i += a),
                this.pos === n && (this.process(e, 0), (this.pos = 0));
        }
        return (this.length += t.length), this.roundClean(), this;
    }
    digestInto(t) {
        (0, i.t2)(this), (0, i.CG)(t, this), (this.finished = !0);
        let { buffer: e, view: s, blockLen: n, isLE: o } = this,
            { pos: a } = this;
        (e[a++] = 128), this.buffer.subarray(a).fill(0), this.padOffset > n - a && (this.process(s, 0), (a = 0));
        for (let t = a; t < n; t++) e[t] = 0;
        !(function (t, e, s, i) {
            if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, s, i);
            let r = BigInt(32),
                n = BigInt(0xffffffff),
                o = Number((s >> r) & n),
                a = Number(s & n),
                h = 4 * !!i,
                f = 4 * !i;
            t.setUint32(e + h, o, i), t.setUint32(e + f, a, i);
        })(s, n - 8, BigInt(8 * this.length), o),
            this.process(s, 0);
        let h = (0, r.O8)(t),
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
        let s = t.slice(0, e);
        return this.destroy(), s;
    }
    _cloneInto(t) {
        t || (t = new this.constructor()), t.set(...this.get());
        let { blockLen: e, buffer: s, length: i, finished: r, destroyed: n, pos: o } = this;
        return (t.length = i), (t.pos = o), (t.finished = r), (t.destroyed = n), i % e && t.buffer.set(s), t;
    }
}
