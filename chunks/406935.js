"use strict";
n.d(t, { ZQ: () => p, _t: () => I, as: () => f, hU: () => S, j1: () => c, ol: () => h, uN: () => _ }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(96326),
    r = n(852015),
    s = n(144367),
    a = n(428420),
    o = n(535384);
class l extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.value = e.double();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.O0.Bit64).double(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new l();
class d extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.value = e.float();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.O0.Bit32).float(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let _ = new d();
class u extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.value = e.int64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, r.O0.Varint).int64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let c = new u();
class E extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.value = e.uint64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, r.O0.Varint).uint64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let h = new E();
class m extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.value = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.O0.Varint).int32(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let f = new m();
class g extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.value = e.uint32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.O0.Varint).uint32(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let p = new g();
class A extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.value = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, r.O0.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let I = new A();
class T extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.value = e.string();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.value && t.tag(1, r.O0.LengthDelimited).string(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let S = new T();
class N extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.value = e.bytes();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.value.length && t.tag(1, r.O0.LengthDelimited).bytes(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new N();
