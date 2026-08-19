"use strict";
n.d(t, { ZQ: () => p, _t: () => m, as: () => I, hU: () => S, j1: () => _, ol: () => A, uN: () => c }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(96326),
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384);
class o extends l.G {
    constructor() {
        super("google.protobuf.DoubleValue", [{ no: 1, name: "value", kind: "scalar", T: 1 }]);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(2, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, "value")), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.double();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.O0.Bit64).double(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new o();
class d extends l.G {
    constructor() {
        super("google.protobuf.FloatValue", [{ no: 1, name: "value", kind: "scalar", T: 2 }]);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(1, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, "value")), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.float();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.O0.Bit32).float(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let c = new d();
class u extends l.G {
    constructor() {
        super("google.protobuf.Int64Value", [{ no: 1, name: "value", kind: "scalar", T: 3 }]);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(i.LN.INT64, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, i.LN.INT64, i.rO.STRING, "value")), n;
    }
    create(e) {
        let t = { value: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.int64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, r.O0.Varint).int64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let _ = new u();
class E extends l.G {
    constructor() {
        super("google.protobuf.UInt64Value", [{ no: 1, name: "value", kind: "scalar", T: 4 }]);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(i.LN.UINT64, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, i.LN.UINT64, i.rO.STRING, "value")), n;
    }
    create(e) {
        let t = { value: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.uint64().toString();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, r.O0.Varint).uint64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let A = new E();
class h extends l.G {
    constructor() {
        super("google.protobuf.Int32Value", [{ no: 1, name: "value", kind: "scalar", T: 5 }]);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(5, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 5, void 0, "value")), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.int32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.O0.Varint).int32(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let I = new h();
class f extends l.G {
    constructor() {
        super("google.protobuf.UInt32Value", [{ no: 1, name: "value", kind: "scalar", T: 13 }]);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(13, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 13, void 0, "value")), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.uint32();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.O0.Varint).uint32(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let p = new f();
class T extends l.G {
    constructor() {
        super("google.protobuf.BoolValue", [{ no: 1, name: "value", kind: "scalar", T: 8 }]);
    }
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 8, void 0, "value")), n;
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.bool();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, r.O0.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let m = new T();
class g extends l.G {
    constructor() {
        super("google.protobuf.StringValue", [{ no: 1, name: "value", kind: "scalar", T: 9 }]);
    }
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 9, void 0, "value")), n;
    }
    create(e) {
        let t = { value: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.string();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.value && t.tag(1, r.O0.LengthDelimited).string(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let S = new g();
class N extends l.G {
    constructor() {
        super("google.protobuf.BytesValue", [{ no: 1, name: "value", kind: "scalar", T: 12 }]);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(12, e.value, "value", !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 12, void 0, "value")), n;
    }
    create(e) {
        let t = { value: new Uint8Array(0) };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.bytes();
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.value.length && t.tag(1, r.O0.LengthDelimited).bytes(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new N();
