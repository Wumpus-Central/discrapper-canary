n.d(t, {
    A8: () => c,
    D5: () => y,
    Gm: () => T,
    T4: () => m,
    r1: () => f,
    wA: () => p,
    yC: () => E
}),
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
    n(873817);
var i = n(36056),
    r = n(230367),
    a = n(320215),
    s = n(240773),
    o = n(495852);
class l extends o.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(2, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.double();
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.z.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.TD.Bit64).double(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
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
class u extends o.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(1, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 1, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.float();
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.z.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.TD.Bit32).float(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
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
let c = new u();
class d extends o.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(i.wx.INT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, i.wx.INT64, i.pz.STRING, 'value')), n;
    }
    create(e) {
        let t = { value: '0' };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.int64().toString();
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.z.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.value && t.tag(1, r.TD.Varint).int64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
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
class _ extends o.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(i.wx.UINT64, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, i.wx.UINT64, i.pz.STRING, 'value')), n;
    }
    create(e) {
        let t = { value: '0' };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.uint64().toString();
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.z.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.value && t.tag(1, r.TD.Varint).uint64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
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
class h extends o.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(5, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 5, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.int32();
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.z.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.TD.Varint).int32(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
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
class g extends o.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(13, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 13, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: 0 };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.uint32();
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.z.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.value && t.tag(1, r.TD.Varint).uint32(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
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
class v extends o.C {
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 8, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.bool();
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.z.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, r.TD.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
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
let y = new v();
class I extends o.C {
    internalJsonWrite(e, t) {
        return e.value;
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 9, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: '' };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.string();
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.z.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.value && t.tag(1, r.TD.LengthDelimited).string(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
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
let T = new I();
class b extends o.C {
    internalJsonWrite(e, t) {
        return this.refJsonWriter.scalar(12, e.value, 'value', !1, !0);
    }
    internalJsonRead(e, t, n) {
        return n || (n = this.create()), (n.value = this.refJsonReader.scalar(e, 12, void 0, 'value')), n;
    }
    create(e) {
        let t = { value: new Uint8Array(0) };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.bytes();
            else {
                let s = n.readUnknownField;
                if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.z.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.value.length && t.tag(1, r.TD.LengthDelimited).bytes(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
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
new b();
