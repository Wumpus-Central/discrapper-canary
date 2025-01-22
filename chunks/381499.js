r.d(n, {
    A8: function () {
        return T;
    },
    D5: function () {
        return w;
    },
    Gm: function () {
        return M;
    },
    T4: function () {
        return O;
    },
    r1: function () {
        return A;
    },
    wA: function () {
        return N;
    },
    yC: function () {
        return x;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(518263);
var s = r(970173);
var l = r(520712);
var u = r(268111);
var c = r(941497);
var d = r(32026);
var f = r(480839);
var p = r(744285);
var h = r(492257);
var _ = r(873817);
var m = r(36056),
    g = r(230367),
    E = r(320215),
    v = r(240773),
    y = r(495852);
class b extends y.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(2, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: 0 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.double();
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? g.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.value && n.tag(1, g.TD.Bit64).double(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.DoubleValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 1
            }
        ]);
    }
}
new b();
class I extends y.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(1, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: 0 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.float();
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? g.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.value && n.tag(1, g.TD.Bit32).float(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.FloatValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 2
            }
        ]);
    }
}
let T = new I();
class S extends y.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(m.wx.INT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, m.wx.INT64, m.pz.STRING, 'value')), r;
    }
    create(e) {
        let n = { value: '0' };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.int64().toString();
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? g.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        '0' !== e.value && n.tag(1, g.TD.Varint).int64(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.Int64Value', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 3
            }
        ]);
    }
}
let A = new S();
class C extends y.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(m.wx.UINT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, m.wx.UINT64, m.pz.STRING, 'value')), r;
    }
    create(e) {
        let n = { value: '0' };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.uint64().toString();
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? g.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        '0' !== e.value && n.tag(1, g.TD.Varint).uint64(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.UInt64Value', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 4
            }
        ]);
    }
}
let N = new C();
class R extends y.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(5, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 5, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: 0 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.int32();
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? g.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.value && n.tag(1, g.TD.Varint).int32(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.Int32Value', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 5
            }
        ]);
    }
}
let O = new R();
class D extends y.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(13, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 13, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: 0 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.uint32();
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? g.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.value && n.tag(1, g.TD.Varint).uint32(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.UInt32Value', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 13
            }
        ]);
    }
}
let x = new D();
class L extends y.C {
    internalJsonWrite(e, n) {
        return e.value;
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 8, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: !1 };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.bool();
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? g.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        !1 !== e.value && n.tag(1, g.TD.Varint).bool(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.BoolValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let w = new L();
class P extends y.C {
    internalJsonWrite(e, n) {
        return e.value;
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 9, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: '' };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.string();
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? g.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        '' !== e.value && n.tag(1, g.TD.LengthDelimited).string(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.StringValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let M = new P();
class k extends y.C {
    internalJsonWrite(e, n) {
        return this.refJsonWriter.scalar(12, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, n, r) {
        return !r && (r = this.create()), (r.value = this.refJsonReader.scalar(e, 12, void 0, 'value')), r;
    }
    create(e) {
        let n = { value: new Uint8Array(0) };
        return (
            globalThis.Object.defineProperty(n, v.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, E.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.value = e.bytes();
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? g.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        e.value.length && n.tag(1, g.TD.LengthDelimited).bytes(e.value);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? g.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.BytesValue', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 12
            }
        ]);
    }
}
new k();
