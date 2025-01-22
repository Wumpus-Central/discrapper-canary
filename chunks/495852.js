r.d(n, {
    C: function () {
        return g;
    }
});
var i = r(36056),
    a = r(950697),
    o = r(614456),
    s = r(528046),
    l = r(727037),
    u = r(297584),
    c = r(349992),
    d = r(320215),
    f = r(660284),
    p = r(838390),
    h = r(284267),
    _ = r(973408),
    m = r(647943);
class g {
    constructor(e, n, r) {
        (this.defaultCheckDepth = 16), (this.typeName = e), (this.fields = n.map(i.nb)), (this.options = null != r ? r : {}), (this.refTypeCheck = new a.Z(this)), (this.refJsonReader = new o.C(this)), (this.refJsonWriter = new s.k(this)), (this.refBinReader = new l.I(this)), (this.refBinWriter = new u.R(this));
    }
    create(e) {
        let n = (0, c.t)(this);
        return void 0 !== e && (0, d.l)(this, n, e), n;
    }
    clone(e) {
        let n = this.create();
        return (0, d.l)(this, n, e), n;
    }
    equals(e, n) {
        return (0, h.Y)(this, e, n);
    }
    is(e, n = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, n, !1);
    }
    isAssignable(e, n = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, n, !0);
    }
    mergePartial(e, n) {
        (0, d.l)(this, e, n);
    }
    fromBinary(e, n) {
        let r = (0, m.Z)(n);
        return this.internalBinaryRead(r.readerFactory(e), e.byteLength, r);
    }
    fromJson(e, n) {
        return this.internalJsonRead(e, (0, p.jl)(n));
    }
    fromJsonString(e, n) {
        let r = JSON.parse(e);
        return this.fromJson(r, n);
    }
    toJson(e, n) {
        return this.internalJsonWrite(e, (0, p.P2)(n));
    }
    toJsonString(e, n) {
        var r;
        return JSON.stringify(this.toJson(e, n), null, null !== (r = null == n ? void 0 : n.prettySpaces) && void 0 !== r ? r : 0);
    }
    toBinary(e, n) {
        let r = (0, _.X)(n);
        return this.internalBinaryWrite(e, r.writerFactory(), r).finish();
    }
    internalJsonRead(e, n, r) {
        if (null !== e && 'object' == typeof e && !Array.isArray(e)) {
            let i = null != r ? r : this.create();
            return this.refJsonReader.read(e, i, n), i;
        }
        throw Error(`Unable to parse message ${this.typeName} from JSON ${(0, f.Z)(e)}.`);
    }
    internalJsonWrite(e, n) {
        return this.refJsonWriter.write(e, n);
    }
    internalBinaryWrite(e, n, r) {
        return this.refBinWriter.write(e, n, r), n;
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create();
        return this.refBinReader.read(e, a, r, n), a;
    }
}
