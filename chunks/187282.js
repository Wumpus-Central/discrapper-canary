n.d(t, {
    w: () => s,
});
var r = n(294946),
    i = n(15020);
class a extends i.Vw {
    constructor(e, t) {
        super(), (this.finished = !1), (this.destroyed = !1), (0, r.tW)(e);
        const n = (0, i.ZJ)(t);
        if (((this.iHash = e.create()), "function" != typeof this.iHash.update))
            throw Error("Expected instance of class which extends utils.Hash");
        (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
        const a = this.blockLen,
            s = new Uint8Array(a);
        s.set(n.length > a ? e.create().update(n).digest() : n);
        for (let e = 0; e < s.length; e++) s[e] ^= 54;
        this.iHash.update(s), (this.oHash = e.create());
        for (let e = 0; e < s.length; e++) s[e] ^= 106;
        this.oHash.update(s), s.fill(0);
    }
    update(e) {
        return (0, r.t2)(this), this.iHash.update(e), this;
    }
    digestInto(e) {
        (0, r.t2)(this),
            (0, r.ee)(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
    }
    digest() {
        let e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e), e;
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash: t, iHash: n, finished: r, destroyed: i, blockLen: a, outputLen: s } = this;
        return (
            (e.finished = r),
            (e.destroyed = i),
            (e.blockLen = a),
            (e.outputLen = s),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = n._cloneInto(e.iHash)),
            e
        );
    }
    destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
}
let s = (e, t, n) => new a(e, t).update(n).digest();
s.create = (e, t) => new a(e, t);
