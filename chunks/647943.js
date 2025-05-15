n.d(t, {
    Z: () => s,
    o: () => l
});
var r = n(230367),
    i = n(69122),
    o = n(825842);
let a = {
    readUnknownField: !0,
    readerFactory: (e) => new l(e)
};
function s(e) {
    return e ? Object.assign(Object.assign({}, a), e) : a;
}
class l {
    constructor(e, t) {
        (this.varint64 = o.sg),
            (this.uint32 = o.jI),
            (this.buf = e),
            (this.len = e.length),
            (this.pos = 0),
            (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
            (this.textDecoder =
                null != t
                    ? t
                    : new TextDecoder('utf-8', {
                          fatal: !0,
                          ignoreBOM: !0
                      }));
    }
    tag() {
        let e = this.uint32(),
            t = e >>> 3,
            n = 7 & e;
        if (t <= 0 || n < 0 || n > 5) throw Error('illegal tag: field no ' + t + ' wire type ' + n);
        return [t, n];
    }
    skip(e) {
        let t = this.pos;
        switch (e) {
            case r.TD.Varint:
                for (; 128 & this.buf[this.pos++]; );
                break;
            case r.TD.Bit64:
                this.pos += 4;
            case r.TD.Bit32:
                this.pos += 4;
                break;
            case r.TD.LengthDelimited:
                let n = this.uint32();
                this.pos += n;
                break;
            case r.TD.StartGroup:
                let i;
                for (; (i = this.tag()[1]) !== r.TD.EndGroup; ) this.skip(i);
                break;
            default:
                throw Error('cant skip wire type ' + e);
        }
        return this.assertBounds(), this.buf.subarray(t, this.pos);
    }
    assertBounds() {
        if (this.pos > this.len) throw RangeError('premature EOF');
    }
    int32() {
        return 0 | this.uint32();
    }
    sint32() {
        let e = this.uint32();
        return (e >>> 1) ^ -(1 & e);
    }
    int64() {
        return new i.M(...this.varint64());
    }
    uint64() {
        return new i.p(...this.varint64());
    }
    sint64() {
        let [e, t] = this.varint64(),
            n = -(1 & e);
        return (e = ((e >>> 1) | ((1 & t) << 31)) ^ n), (t = (t >>> 1) ^ n), new i.M(e, t);
    }
    bool() {
        let [e, t] = this.varint64();
        return 0 !== e || 0 !== t;
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
        return new i.p(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
        return new i.M(this.sfixed32(), this.sfixed32());
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
        let e = this.uint32(),
            t = this.pos;
        return (this.pos += e), this.assertBounds(), this.buf.subarray(t, t + e);
    }
    string() {
        return this.textDecoder.decode(this.bytes());
    }
}
