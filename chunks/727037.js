n.d(t, { I: () => o });
var i = n(230367),
    r = n(36056),
    a = n(929412),
    s = n(436759);
class o {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        var e;
        if (!this.fieldNoToField) {
            let t = null !== (e = this.info.fields) && void 0 !== e ? e : [];
            this.fieldNoToField = new Map(t.map((e) => [e.no, e]));
        }
    }
    read(e, t, n, a) {
        this.prepare();
        let s = void 0 === a ? e.len : e.pos + a;
        for (; e.pos < s; ) {
            let [a, s] = e.tag(),
                o = this.fieldNoToField.get(a);
            if (!o) {
                let r = n.readUnknownField;
                if ('throw' == r) throw Error(`Unknown field ${a} (wire type ${s}) for ${this.info.typeName}`);
                let o = e.skip(s);
                !1 !== r && (!0 === r ? i.z.onRead : r)(this.info.typeName, t, a, s, o);
                continue;
            }
            let l = t,
                u = o.repeat,
                c = o.localName;
            switch ((o.oneof && (l = l[o.oneof]).oneofKind !== c && (l = t[o.oneof] = { oneofKind: c }), o.kind)) {
                case 'scalar':
                case 'enum':
                    let d = 'enum' == o.kind ? r.wx.INT32 : o.T,
                        f = 'scalar' == o.kind ? o.L : void 0;
                    if (u) {
                        let t = l[c];
                        if (s == i.TD.LengthDelimited && d != r.wx.STRING && d != r.wx.BYTES) {
                            let n = e.uint32() + e.pos;
                            for (; e.pos < n; ) t.push(this.scalar(e, d, f));
                        } else t.push(this.scalar(e, d, f));
                    } else l[c] = this.scalar(e, d, f);
                    break;
                case 'message':
                    if (u) {
                        let t = l[c],
                            i = o.T().internalBinaryRead(e, e.uint32(), n);
                        t.push(i);
                    } else l[c] = o.T().internalBinaryRead(e, e.uint32(), n, l[c]);
                    break;
                case 'map':
                    let [_, p] = this.mapEntry(o, e, n);
                    l[c][_] = p;
            }
        }
    }
    mapEntry(e, t, n) {
        let i,
            a,
            o = t.uint32(),
            l = t.pos + o;
        for (; t.pos < l; ) {
            let [s, o] = t.tag();
            switch (s) {
                case 1:
                    i = e.K == r.wx.BOOL ? t.bool().toString() : this.scalar(t, e.K, r.pz.STRING);
                    break;
                case 2:
                    switch (e.V.kind) {
                        case 'scalar':
                            a = this.scalar(t, e.V.T, e.V.L);
                            break;
                        case 'enum':
                            a = t.int32();
                            break;
                        case 'message':
                            a = e.V.T().internalBinaryRead(t, t.uint32(), n);
                    }
                    break;
                default:
                    throw Error(`Unknown field ${s} (wire type ${o}) in map entry for ${this.info.typeName}#${e.name}`);
            }
        }
        if (void 0 === i) {
            let t = (0, s.N)(e.K);
            i = e.K == r.wx.BOOL ? t.toString() : t;
        }
        if (void 0 === a)
            switch (e.V.kind) {
                case 'scalar':
                    a = (0, s.N)(e.V.T, e.V.L);
                    break;
                case 'enum':
                    a = 0;
                    break;
                case 'message':
                    a = e.V.T().create();
            }
        return [i, a];
    }
    scalar(e, t, n) {
        switch (t) {
            case r.wx.INT32:
                return e.int32();
            case r.wx.STRING:
                return e.string();
            case r.wx.BOOL:
                return e.bool();
            case r.wx.DOUBLE:
                return e.double();
            case r.wx.FLOAT:
                return e.float();
            case r.wx.INT64:
                return (0, a._)(e.int64(), n);
            case r.wx.UINT64:
                return (0, a._)(e.uint64(), n);
            case r.wx.FIXED64:
                return (0, a._)(e.fixed64(), n);
            case r.wx.FIXED32:
                return e.fixed32();
            case r.wx.BYTES:
                return e.bytes();
            case r.wx.UINT32:
                return e.uint32();
            case r.wx.SFIXED32:
                return e.sfixed32();
            case r.wx.SFIXED64:
                return (0, a._)(e.sfixed64(), n);
            case r.wx.SINT32:
                return e.sint32();
            case r.wx.SINT64:
                return (0, a._)(e.sint64(), n);
        }
    }
}
