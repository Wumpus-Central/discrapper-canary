r.d(n, {
    I: function () {
        return l;
    }
});
var i = r(230367),
    a = r(36056),
    o = r(929412),
    s = r(436759);
class l {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        var e;
        if (!this.fieldNoToField) {
            let n = null !== (e = this.info.fields) && void 0 !== e ? e : [];
            this.fieldNoToField = new Map(n.map((e) => [e.no, e]));
        }
    }
    read(e, n, r, o) {
        this.prepare();
        let s = void 0 === o ? e.len : e.pos + o;
        for (; e.pos < s; ) {
            let [o, s] = e.tag(),
                l = this.fieldNoToField.get(o);
            if (!l) {
                let a = r.readUnknownField;
                if ('throw' == a) throw Error(`Unknown field ${o} (wire type ${s}) for ${this.info.typeName}`);
                let l = e.skip(s);
                !1 !== a && (!0 === a ? i.z.onRead : a)(this.info.typeName, n, o, s, l);
                continue;
            }
            let u = n,
                c = l.repeat,
                d = l.localName;
            switch ((l.oneof && (u = u[l.oneof]).oneofKind !== d && (u = n[l.oneof] = { oneofKind: d }), l.kind)) {
                case 'scalar':
                case 'enum':
                    let f = 'enum' == l.kind ? a.wx.INT32 : l.T,
                        p = 'scalar' == l.kind ? l.L : void 0;
                    if (c) {
                        let n = u[d];
                        if (s == i.TD.LengthDelimited && f != a.wx.STRING && f != a.wx.BYTES) {
                            let r = e.uint32() + e.pos;
                            for (; e.pos < r; ) n.push(this.scalar(e, f, p));
                        } else n.push(this.scalar(e, f, p));
                    } else u[d] = this.scalar(e, f, p);
                    break;
                case 'message':
                    if (c) {
                        let n = u[d],
                            i = l.T().internalBinaryRead(e, e.uint32(), r);
                        n.push(i);
                    } else u[d] = l.T().internalBinaryRead(e, e.uint32(), r, u[d]);
                    break;
                case 'map':
                    let [h, _] = this.mapEntry(l, e, r);
                    u[d][h] = _;
            }
        }
    }
    mapEntry(e, n, r) {
        let i,
            o,
            l = n.uint32(),
            u = n.pos + l;
        for (; n.pos < u; ) {
            let [s, l] = n.tag();
            switch (s) {
                case 1:
                    i = e.K == a.wx.BOOL ? n.bool().toString() : this.scalar(n, e.K, a.pz.STRING);
                    break;
                case 2:
                    switch (e.V.kind) {
                        case 'scalar':
                            o = this.scalar(n, e.V.T, e.V.L);
                            break;
                        case 'enum':
                            o = n.int32();
                            break;
                        case 'message':
                            o = e.V.T().internalBinaryRead(n, n.uint32(), r);
                    }
                    break;
                default:
                    throw Error(`Unknown field ${s} (wire type ${l}) in map entry for ${this.info.typeName}#${e.name}`);
            }
        }
        if (void 0 === i) {
            let n = (0, s.N)(e.K);
            i = e.K == a.wx.BOOL ? n.toString() : n;
        }
        if (void 0 === o)
            switch (e.V.kind) {
                case 'scalar':
                    o = (0, s.N)(e.V.T, e.V.L);
                    break;
                case 'enum':
                    o = 0;
                    break;
                case 'message':
                    o = e.V.T().create();
            }
        return [i, o];
    }
    scalar(e, n, r) {
        switch (n) {
            case a.wx.INT32:
                return e.int32();
            case a.wx.STRING:
                return e.string();
            case a.wx.BOOL:
                return e.bool();
            case a.wx.DOUBLE:
                return e.double();
            case a.wx.FLOAT:
                return e.float();
            case a.wx.INT64:
                return (0, o._)(e.int64(), r);
            case a.wx.UINT64:
                return (0, o._)(e.uint64(), r);
            case a.wx.FIXED64:
                return (0, o._)(e.fixed64(), r);
            case a.wx.FIXED32:
                return e.fixed32();
            case a.wx.BYTES:
                return e.bytes();
            case a.wx.UINT32:
                return e.uint32();
            case a.wx.SFIXED32:
                return e.sfixed32();
            case a.wx.SFIXED64:
                return (0, o._)(e.sfixed64(), r);
            case a.wx.SINT32:
                return e.sint32();
            case a.wx.SINT64:
                return (0, o._)(e.sint64(), r);
        }
    }
}
