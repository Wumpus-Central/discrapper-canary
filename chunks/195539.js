n.d(e, {
    VR: function () {
        return h;
    },
    bc: function () {
        return o;
    },
    l3: function () {
        return s;
    }
});
var r = n(180450),
    i = n(362133);
let o = (t, e, n) => (t & e) ^ (~t & n),
    s = (t, e, n) => (t & e) ^ (t & n) ^ (e & n);
class h extends i.kb {
    constructor(t, e, n, r) {
        super(), (this.blockLen = t), (this.outputLen = e), (this.padOffset = n), (this.isLE = r), (this.finished = !1), (this.length = 0), (this.pos = 0), (this.destroyed = !1), (this.buffer = new Uint8Array(t)), (this.view = (0, i.GL)(this.buffer));
    }
    update(t) {
        (0, r.Gg)(this);
        let { view: e, buffer: n, blockLen: o } = this,
            s = (t = (0, i.O0)(t)).length;
        for (let r = 0; r < s; ) {
            let h = Math.min(o - this.pos, s - r);
            if (h === o) {
                let e = (0, i.GL)(t);
                for (; o <= s - r; r += o) this.process(e, r);
                continue;
            }
            n.set(t.subarray(r, r + h), this.pos), (this.pos += h), (r += h), this.pos === o && (this.process(e, 0), (this.pos = 0));
        }
        return (this.length += t.length), this.roundClean(), this;
    }
    digestInto(t) {
        (0, r.Gg)(this), (0, r.J8)(t, this), (this.finished = !0);
        let { buffer: e, view: n, blockLen: o, isLE: s } = this,
            { pos: h } = this;
        (e[h++] = 128), this.buffer.subarray(h).fill(0), this.padOffset > o - h && (this.process(n, 0), (h = 0));
        for (let t = h; t < o; t++) e[t] = 0;
        !(function (t, e, n, r) {
            if ('function' == typeof t.setBigUint64) return t.setBigUint64(e, n, r);
            let i = BigInt(32),
                o = BigInt(4294967295),
                s = Number((n >> i) & o),
                h = Number(n & o),
                u = r ? 4 : 0,
                f = r ? 0 : 4;
            t.setUint32(e + u, s, r), t.setUint32(e + f, h, r);
        })(n, o - 8, BigInt(8 * this.length), s),
            this.process(n, 0);
        let u = (0, i.GL)(t),
            f = this.outputLen;
        if (f % 4) throw Error('_sha2: outputLen should be aligned to 32bit');
        let l = f / 4,
            a = this.get();
        if (l > a.length) throw Error('_sha2: outputLen bigger than state');
        for (let t = 0; t < l; t++) u.setUint32(4 * t, a[t], s);
    }
    digest() {
        let { buffer: t, outputLen: e } = this;
        this.digestInto(t);
        let n = t.slice(0, e);
        return this.destroy(), n;
    }
    _cloneInto(t) {
        t || (t = new this.constructor()), t.set(...this.get());
        let { blockLen: e, buffer: n, length: r, finished: i, destroyed: o, pos: s } = this;
        return (t.length = r), (t.pos = s), (t.finished = i), (t.destroyed = o), r % e && t.buffer.set(n), t;
    }
}
