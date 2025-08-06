n.d(t, { I: () => s });
var r = n(230367),
    i = n(36056),
    o = n(929412),
    a = n(436759);
class s {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        var e;
        if (!this.fieldNoToField) {
            let t = null != (e = this.info.fields) ? e : [];
            this.fieldNoToField = new Map(t.map((e) => [e.no, e]));
        }
    }
    read(e, t, n, o) {
        this.prepare();
        let a = void 0 === o ? e.len : e.pos + o;
        for (; e.pos < a; ) {
            let [o, a] = e.tag(),
                s = this.fieldNoToField.get(o);
            if (!s) {
                let i = n.readUnknownField;
                if ('throw' == i) throw Error(`Unknown field ${o} (wire type ${a}) for ${this.info.typeName}`);
                let s = e.skip(a);
                !1 !== i && (!0 === i ? r.z.onRead : i)(this.info.typeName, t, o, a, s);
                continue;
            }
            let l = t,
                c = s.repeat,
                u = s.localName;
            switch ((s.oneof && (l = l[s.oneof]).oneofKind !== u && (l = t[s.oneof] = { oneofKind: u }), s.kind)) {
                case 'scalar':
                case 'enum':
                    let d = 'enum' == s.kind ? i.wx.INT32 : s.T,
                        f = 'scalar' == s.kind ? s.L : void 0;
                    if (c) {
                        let t = l[u];
                        if (a == r.TD.LengthDelimited && d != i.wx.STRING && d != i.wx.BYTES) {
                            let n = e.uint32() + e.pos;
                            for (; e.pos < n; ) t.push(this.scalar(e, d, f));
                        } else t.push(this.scalar(e, d, f));
                    } else l[u] = this.scalar(e, d, f);
                    break;
                case 'message':
                    if (c) {
                        let t = l[u],
                            r = s.T().internalBinaryRead(e, e.uint32(), n);
                        t.push(r);
                    } else l[u] = s.T().internalBinaryRead(e, e.uint32(), n, l[u]);
                    break;
                case 'map':
                    let [_, p] = this.mapEntry(s, e, n);
                    l[u][_] = p;
            }
        }
    }
    mapEntry(e, t, n) {
        let r,
            o,
            s = t.uint32(),
            l = t.pos + s;
        for (; t.pos < l; ) {
            let [a, s] = t.tag();
            switch (a) {
                case 1:
                    r = e.K == i.wx.BOOL ? t.bool().toString() : this.scalar(t, e.K, i.pz.STRING);
                    break;
                case 2:
                    switch (e.V.kind) {
                        case 'scalar':
                            o = this.scalar(t, e.V.T, e.V.L);
                            break;
                        case 'enum':
                            o = t.int32();
                            break;
                        case 'message':
                            o = e.V.T().internalBinaryRead(t, t.uint32(), n);
                    }
                    break;
                default:
                    throw Error(`Unknown field ${a} (wire type ${s}) in map entry for ${this.info.typeName}#${e.name}`);
            }
        }
        if (void 0 === r) {
            let t = (0, a.N)(e.K);
            r = e.K == i.wx.BOOL ? t.toString() : t;
        }
        if (void 0 === o)
            switch (e.V.kind) {
                case 'scalar':
                    o = (0, a.N)(e.V.T, e.V.L);
                    break;
                case 'enum':
                    o = 0;
                    break;
                case 'message':
                    o = e.V.T().create();
            }
        return [r, o];
    }
    scalar(e, t, n) {
        switch (t) {
            case i.wx.INT32:
                return e.int32();
            case i.wx.STRING:
                return e.string();
            case i.wx.BOOL:
                return e.bool();
            case i.wx.DOUBLE:
                return e.double();
            case i.wx.FLOAT:
                return e.float();
            case i.wx.INT64:
                return (0, o._)(e.int64(), n);
            case i.wx.UINT64:
                return (0, o._)(e.uint64(), n);
            case i.wx.FIXED64:
                return (0, o._)(e.fixed64(), n);
            case i.wx.FIXED32:
                return e.fixed32();
            case i.wx.BYTES:
                return e.bytes();
            case i.wx.UINT32:
                return e.uint32();
            case i.wx.SFIXED32:
                return e.sfixed32();
            case i.wx.SFIXED64:
                return (0, o._)(e.sfixed64(), n);
            case i.wx.SINT32:
                return e.sint32();
            case i.wx.SINT64:
                return (0, o._)(e.sint64(), n);
        }
    }
}
