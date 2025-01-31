n.d(t, { C: () => m });
var i = n(36056),
    r = n(950697),
    a = n(614456),
    s = n(528046),
    o = n(727037),
    l = n(297584),
    u = n(349992),
    c = n(320215),
    d = n(660284),
    f = n(838390),
    _ = n(284267),
    p = n(973408),
    h = n(647943);
class m {
    constructor(e, t, n) {
        (this.defaultCheckDepth = 16), (this.typeName = e), (this.fields = t.map(i.nb)), (this.options = null != n ? n : {}), (this.refTypeCheck = new r.Z(this)), (this.refJsonReader = new a.C(this)), (this.refJsonWriter = new s.k(this)), (this.refBinReader = new o.I(this)), (this.refBinWriter = new l.R(this));
    }
    create(e) {
        let t = (0, u.t)(this);
        return void 0 !== e && (0, c.l)(this, t, e), t;
    }
    clone(e) {
        let t = this.create();
        return (0, c.l)(this, t, e), t;
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
        (0, c.l)(this, e, t);
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
        return JSON.stringify(this.toJson(e, t), null, null !== (n = null == t ? void 0 : t.prettySpaces) && void 0 !== n ? n : 0);
    }
    toBinary(e, t) {
        let n = (0, p.X)(t);
        return this.internalBinaryWrite(e, n.writerFactory(), n).finish();
    }
    internalJsonRead(e, t, n) {
        if (null !== e && 'object' == typeof e && !Array.isArray(e)) {
            let i = null != n ? n : this.create();
            return this.refJsonReader.read(e, i, t), i;
        }
        throw Error(`Unable to parse message ${this.typeName} from JSON ${(0, d.Z)(e)}.`);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.write(e, t);
    }
    internalBinaryWrite(e, t, n) {
        return this.refBinWriter.write(e, t, n), t;
    }
    internalBinaryRead(e, t, n, i) {
        let r = null != i ? i : this.create();
        return this.refBinReader.read(e, r, n, t), r;
    }
}
