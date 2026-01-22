n.d(t, {
    ZQ: () => E,
    _t: () => y,
    as: () => m,
    hU: () => A,
    j1: () => f,
    ol: () => _,
    uN: () => u,
}),
    n(734808),
    n(896048),
    n(65821),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var r = n(124651),
    i = n(852015),
    a = n(144367),
    s = n(428420),
    o = n(324281);
class l extends o.G {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(2, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, "value")), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.value = e.double();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName),
                    );
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, i.O0.Bit64).double(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super("google.protobuf.DoubleValue", [
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 1,
            },
        ]);
    }
}
new l();
class c extends o.G {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(1, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, "value")), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.value = e.float();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName),
                    );
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, i.O0.Bit32).float(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super("google.protobuf.FloatValue", [
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 2,
            },
        ]);
    }
}
let u = new c();
class d extends o.G {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(r.LN.INT64, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, r.LN.INT64, r.rO.STRING, "value")), n;
    }
    create(e) {
        let t = { value: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.value = e.int64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName),
                    );
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, i.O0.Varint).int64(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super("google.protobuf.Int64Value", [
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 3,
            },
        ]);
    }
}
let f = new d();
class p extends o.G {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(r.LN.UINT64, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, r.LN.UINT64, r.rO.STRING, "value")), n;
    }
    create(e) {
        let t = { value: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.value = e.uint64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName),
                    );
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, i.O0.Varint).uint64(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super("google.protobuf.UInt64Value", [
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 4,
            },
        ]);
    }
}
let _ = new p();
class h extends o.G {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(5, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 5, void 0, "value")), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.value = e.int32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName),
                    );
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, i.O0.Varint).int32(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super("google.protobuf.Int32Value", [
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 5,
            },
        ]);
    }
}
let m = new h();
class g extends o.G {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(13, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 13, void 0, "value")), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.value = e.uint32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName),
                    );
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, i.O0.Varint).uint32(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super("google.protobuf.UInt32Value", [
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 13,
            },
        ]);
    }
}
let E = new g();
class b extends o.G {
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 8, void 0, "value")), n;
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, s.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.value = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName),
                    );
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, i.O0.Varint).bool(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super("google.protobuf.BoolValue", [
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 8,
            },
        ]);
    }
}
let y = new b();
class O extends o.G {
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 9, void 0, "value")), n;
    }
    create(e) {
        let t = { value: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.value = e.string();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName),
                    );
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.value && t.tag(1, i.O0.LengthDelimited).string(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super("google.protobuf.StringValue", [
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9,
            },
        ]);
    }
}
let A = new O();
class v extends o.G {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(12, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 12, void 0, "value")), n;
    }
    create(e) {
        let t = { value: new Uint8Array(0) };
        return (
            globalThis.Object.defineProperty(t, s.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            if (1 === t) a.value = e.bytes();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(
                        "Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName),
                    );
                let o = e.skip(r);
                !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.value.length && t.tag(1, i.O0.LengthDelimited).bytes(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super("google.protobuf.BytesValue", [
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 12,
            },
        ]);
    }
}
new v();
