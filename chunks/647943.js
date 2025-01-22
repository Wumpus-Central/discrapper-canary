r.d(n, {
    Z: function () {
        return l;
    },
    o: function () {
        return u;
    }
});
var i = r(230367),
    a = r(69122),
    o = r(825842);
let s = {
    readUnknownField: !0,
    readerFactory: (e) => new u(e)
};
function l(e) {
    return e ? Object.assign(Object.assign({}, s), e) : s;
}
class u {
    constructor(e, n) {
        (this.varint64 = o.sg),
            (this.uint32 = o.jI),
            (this.buf = e),
            (this.len = e.length),
            (this.pos = 0),
            (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
            (this.textDecoder =
                null != n
                    ? n
                    : new TextDecoder('utf-8', {
                          fatal: !0,
                          ignoreBOM: !0
                      }));
    }
    tag() {
        let e = this.uint32(),
            n = e >>> 3,
            r = 7 & e;
        if (n <= 0 || r < 0 || r > 5) throw Error('illegal tag: field no ' + n + ' wire type ' + r);
        return [n, r];
    }
    skip(e) {
        let n = this.pos;
        switch (e) {
            case i.TD.Varint:
                for (; 128 & this.buf[this.pos++]; );
                break;
            case i.TD.Bit64:
                this.pos += 4;
            case i.TD.Bit32:
                this.pos += 4;
                break;
            case i.TD.LengthDelimited:
                let r = this.uint32();
                this.pos += r;
                break;
            case i.TD.StartGroup:
                let a;
                for (; (a = this.tag()[1]) !== i.TD.EndGroup; ) this.skip(a);
                break;
            default:
                throw Error('cant skip wire type ' + e);
        }
        return this.assertBounds(), this.buf.subarray(n, this.pos);
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
        return new a.M(...this.varint64());
    }
    uint64() {
        return new a.p(...this.varint64());
    }
    sint64() {
        let [e, n] = this.varint64(),
            r = -(1 & e);
        return (e = ((e >>> 1) | ((1 & n) << 31)) ^ r), (n = (n >>> 1) ^ r), new a.M(e, n);
    }
    bool() {
        let [e, n] = this.varint64();
        return 0 !== e || 0 !== n;
    }
    fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
        return new a.p(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
        return new a.M(this.sfixed32(), this.sfixed32());
    }
    float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
        let e = this.uint32(),
            n = this.pos;
        return (this.pos += e), this.assertBounds(), this.buf.subarray(n, n + e);
    }
    string() {
        return this.textDecoder.decode(this.bytes());
    }
}
