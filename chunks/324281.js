n.d(t, { G: () => m });
var r = n(124651),
    i = n(944010),
    a = n(428673),
    s = n(779693),
    o = n(50016),
    l = n(556812),
    c = n(65939),
    u = n(144367),
    d = n(467276),
    f = n(934672),
    p = n(384770),
    _ = n(119844),
    h = n(638504);
class m {
    constructor(e, t, n) {
        (this.defaultCheckDepth = 16),
            (this.typeName = e),
            (this.fields = t.map(r.mS)),
            (this.options = null != n ? n : {}),
            (this.refTypeCheck = new i.u(this)),
            (this.refJsonReader = new a.L(this)),
            (this.refJsonWriter = new s.X(this)),
            (this.refBinReader = new o.W(this)),
            (this.refBinWriter = new l.c(this));
    }
    create(e) {
        let t = (0, c.C)(this);
        return void 0 !== e && (0, u.x)(this, t, e), t;
    }
    clone(e) {
        let t = this.create();
        return (0, u.x)(this, t, e), t;
    }
    equals(e, t) {
        return (0, p.F)(this, e, t);
    }
    is(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !1);
    }
    isAssignable(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !0);
    }
    mergePartial(e, t) {
        (0, u.x)(this, e, t);
    }
    fromBinary(e, t) {
        let n = (0, h.e)(t);
        return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n);
    }
    fromJson(e, t) {
        return this.internalJsonRead(e, (0, f.bm)(t));
    }
    fromJsonString(e, t) {
        let n = JSON.parse(e);
        return this.fromJson(n, t);
    }
    toJson(e, t) {
        return this.internalJsonWrite(e, (0, f.yG)(t));
    }
    toJsonString(e, t) {
        var n;
        return JSON.stringify(this.toJson(e, t), null, null != (n = null == t ? void 0 : t.prettySpaces) ? n : 0);
    }
    toBinary(e, t) {
        let n = (0, _.d)(t);
        return this.internalBinaryWrite(e, n.writerFactory(), n).finish();
    }
    internalJsonRead(e, t, n) {
        if (null !== e && "object" == typeof e && !Array.isArray(e)) {
            let r = null != n ? n : this.create();
            return this.refJsonReader.read(e, r, t), r;
        }
        throw Error(`Unable to parse message ${this.typeName} from JSON ${(0, d.V)(e)}.`);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.write(e, t);
    }
    internalBinaryWrite(e, t, n) {
        return this.refBinWriter.write(e, t, n), t;
    }
    internalBinaryRead(e, t, n, r) {
        let i = null != r ? r : this.create();
        return this.refBinReader.read(e, i, n, t), i;
    }
}
