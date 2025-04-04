n.d(t, { C: () => m });
var r = n(36056),
    i = n(950697),
    o = n(614456),
    a = n(528046),
    s = n(727037),
    l = n(297584),
    c = n(349992),
    u = n(320215),
    d = n(660284),
    f = n(838390),
    _ = n(284267),
    p = n(973408),
    h = n(647943);
class m {
    constructor(e, t, n) {
        (this.defaultCheckDepth = 16), (this.typeName = e), (this.fields = t.map(r.nb)), (this.options = null != n ? n : {}), (this.refTypeCheck = new i.Z(this)), (this.refJsonReader = new o.C(this)), (this.refJsonWriter = new a.k(this)), (this.refBinReader = new s.I(this)), (this.refBinWriter = new l.R(this));
    }
    create(e) {
        let t = (0, c.t)(this);
        return void 0 !== e && (0, u.l)(this, t, e), t;
    }
    clone(e) {
        let t = this.create();
        return (0, u.l)(this, t, e), t;
    }
    equals(e, t) {
        return (0, _.Y)(this, e, t);
    }
    is(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !1);
    }
    isAssignable(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !0);
    }
    mergePartial(e, t) {
        (0, u.l)(this, e, t);
    }
    fromBinary(e, t) {
        let n = (0, h.Z)(t);
        return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n);
    }
    fromJson(e, t) {
        return this.internalJsonRead(e, (0, f.jl)(t));
    }
    fromJsonString(e, t) {
        let n = JSON.parse(e);
        return this.fromJson(n, t);
    }
    toJson(e, t) {
        return this.internalJsonWrite(e, (0, f.P2)(t));
    }
    toJsonString(e, t) {
        var n;
        return JSON.stringify(this.toJson(e, t), null, null != (n = null == t ? void 0 : t.prettySpaces) ? n : 0);
    }
    toBinary(e, t) {
        let n = (0, p.X)(t);
        return this.internalBinaryWrite(e, n.writerFactory(), n).finish();
    }
    internalJsonRead(e, t, n) {
        if (null !== e && 'object' == typeof e && !Array.isArray(e)) {
            let r = null != n ? n : this.create();
            return this.refJsonReader.read(e, r, t), r;
        }
        throw Error(`Unable to parse message ${this.typeName} from JSON ${(0, d.Z)(e)}.`);
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
