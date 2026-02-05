s.d(e, { w: () => o });
var i = s(294946),
    r = s(15020);
class n extends r.Vw {
    constructor(t, e) {
        super(), (this.finished = !1), (this.destroyed = !1), (0, i.tW)(t);
        const s = (0, r.ZJ)(e);
        if (((this.iHash = t.create()), "function" != typeof this.iHash.update))
            throw Error("Expected instance of class which extends utils.Hash");
        (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
        const n = this.blockLen,
            o = new Uint8Array(n);
        o.set(s.length > n ? t.create().update(s).digest() : s);
        for (let t = 0; t < o.length; t++) o[t] ^= 54;
        this.iHash.update(o), (this.oHash = t.create());
        for (let t = 0; t < o.length; t++) o[t] ^= 106;
        this.oHash.update(o), o.fill(0);
    }
    update(t) {
        return (0, i.t2)(this), this.iHash.update(t), this;
    }
    digestInto(t) {
        (0, i.t2)(this),
            (0, i.ee)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
    }
    digest() {
        let t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t;
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash: e, iHash: s, finished: i, destroyed: r, blockLen: n, outputLen: o } = this;
        return (
            (t.finished = i),
            (t.destroyed = r),
            (t.blockLen = n),
            (t.outputLen = o),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = s._cloneInto(t.iHash)),
            t
        );
    }
    destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
}
let o = (t, e, s) => new n(t, e).update(s).digest();
o.create = (t, e) => new n(t, e);
