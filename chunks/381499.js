n.d(t, {
    A8: () => u,
    D5: () => y,
    Gm: () => O,
    T4: () => m,
    r1: () => f,
    wA: () => p,
    yC: () => E
}),
    n(611060),
    n(47120),
    n(411104),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(610885),
    n(126298);
var r = n(36056),
    i = n(230367),
    o = n(320215),
    a = n(240773),
    s = n(495852);
class l extends s.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(2, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let o = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) o.value = e.double();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let s = e.skip(r);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, o, t, r, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, i.TD.Bit64).double(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
new l();
class c extends s.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(1, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let o = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) o.value = e.float();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let s = e.skip(r);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, o, t, r, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, i.TD.Bit32).float(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
let u = new c();
class d extends s.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(r.wx.INT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, r.wx.INT64, r.pz.STRING, 'value')), n;
    }
    create(e) {
        let t = { value: '0' };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let o = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) o.value = e.int64().toString();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let s = e.skip(r);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, o, t, r, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.value && t.tag(1, i.TD.Varint).int64(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
let f = new d();
class _ extends s.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(r.wx.UINT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, r.wx.UINT64, r.pz.STRING, 'value')), n;
    }
    create(e) {
        let t = { value: '0' };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let o = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) o.value = e.uint64().toString();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let s = e.skip(r);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, o, t, r, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.value && t.tag(1, i.TD.Varint).uint64(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
let p = new _();
class h extends s.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(5, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 5, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let o = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) o.value = e.int32();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let s = e.skip(r);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, o, t, r, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, i.TD.Varint).int32(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
let m = new h();
class g extends s.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(13, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 13, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let o = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) o.value = e.uint32();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let s = e.skip(r);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, o, t, r, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, i.TD.Varint).uint32(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
let E = new g();
class b extends s.C {
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 8, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let o = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) o.value = e.bool();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let s = e.skip(r);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, o, t, r, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, i.TD.Varint).bool(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
let y = new b();
class v extends s.C {
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 9, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: '' };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let o = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) o.value = e.string();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let s = e.skip(r);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, o, t, r, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.value && t.tag(1, i.TD.LengthDelimited).string(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
let O = new v();
class I extends s.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(12, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 12, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: new Uint8Array(0) };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, o.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let o = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) o.value = e.bytes();
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                let s = e.skip(r);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, o, t, r, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        e.value.length && t.tag(1, i.TD.LengthDelimited).bytes(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
new I();
